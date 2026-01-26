import { readFile, writeFile, mkdir, readdir, stat, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";
import {
  parsePackagesStanzas,
  normalizePackages,
  decompressPackagesFile
} from "./lib/apt-packages.mjs";
import { loadReposCatalog, writeReposCatalog } from "./lib/repos-catalog.mjs";
import { writePackagesIndex } from "./lib/packages-index.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const osPath = path.join(root, "catalog", "os.json");
const dataReposDir = path.join(root, "data", "repos");

const ubuntuCodenameToVersion = {
  trusty: "14.04",
  xenial: "16.04",
  yakkety: "16.10",
  zesty: "17.04",
  artful: "17.10",
  bionic: "18.04",
  cosmic: "18.10",
  disco: "19.04",
  eoan: "19.10",
  focal: "20.04",
  groovy: "20.10",
  hirsute: "21.04",
  impish: "21.10",
  jammy: "22.04",
  kinetic: "22.10",
  lunar: "23.04",
  mantic: "23.10",
  noble: "24.04",
  oracular: "24.10",
  plucky: "25.04",
  questing: "25.10"
};

const debianCodenameToVersion = {
  wheezy: "7",
  jessie: "8",
  stretch: "9",
  buster: "10",
  bullseye: "11",
  bookworm: "12",
  trixie: "13"
};

const defaultSuiteCandidates = [
  "stable",
  "testing",
  "unstable",
  "sid",
  "trixie",
  "bookworm",
  "bullseye",
  "buster",
  "stretch",
  "jessie",
  "wheezy",
  "noble",
  "jammy",
  "focal",
  "bionic",
  "xenial",
  "trusty",
  "oracular",
  "plucky",
  "questing",
  "mantic",
  "lunar",
  "kinetic",
  "impish",
  "hirsute",
  "groovy",
  "eoan",
  "disco",
  "cosmic",
  "artful",
  "zesty",
  "yakkety"
];

function parseArgs(argv) {
  const args = {};
  const booleanFlags = new Set(["all", "dry-run", "write-catalog"]);
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      if (!args._) {
        args._ = [];
      }
      args._.push(value);
      continue;
    }
    const key = value.slice(2);
    if (booleanFlags.has(key)) {
      args[key] = true;
      continue;
    }
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function toList(value) {
  if (!value) {
    return [];
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function readJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => JSON.parse(raw));
}

async function readOptionalJson(filePath) {
  try {
    return await readJson(filePath);
  } catch {
    return null;
  }
}

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id ?? null;
}

function getKeySourceUrl(entry) {
  return entry.sourceUrl ?? entry.key_url ?? "";
}

function normalizeFingerprint(value) {
  return String(value).replace(/\s+/g, "").toUpperCase();
}

function getFingerprintSet(entry) {
  const raw =
    entry.expectedFingerprints ??
    entry.fingerprints ??
    entry.key_fingerprints ??
    entry.fingerprint ??
    [];
  const list = Array.isArray(raw) ? raw : [raw];
  return list.map(normalizeFingerprint).filter(Boolean).sort().join(",");
}

function getOutputPath(keyEntry, keyId) {
  const raw = keyEntry.outputPath ?? keyEntry.keyring ?? path.posix.join("keys", `${keyId}.asc`);
  return raw.replace(/\\/g, "/");
}

function normalizeRepoId(value) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
}

function timestampId(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate())
  ].join("") +
    "T" +
    [pad(date.getUTCHours()), pad(date.getUTCMinutes()), pad(date.getUTCSeconds())].join("") +
    "Z";
}

function stripDebPrefix(source) {
  const trimmed = source.trim();
  if (trimmed.startsWith("deb ")) {
    return trimmed.slice(4).trimStart();
  }
  return trimmed;
}

function normalizeDebLine(source) {
  return source.trim().replace(/\s+/g, " ");
}

function parseDebLine(source) {
  const trimmed = stripDebPrefix(source);
  let remaining = trimmed;
  const optionsMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  const options = {};
  if (optionsMatch) {
    const optionPairs = optionsMatch[1].split(/\s+/);
    for (const pair of optionPairs) {
      const [key, value] = pair.split("=", 2);
      if (key && value) {
        options[key] = value;
      } else if (key) {
        options[key] = true;
      }
    }
    remaining = remaining.slice(optionsMatch[0].length);
  }
  const parts = remaining.split(/\s+/).filter(Boolean);
  const uri = parts[0] ?? "";
  const suite = parts[1] ?? "";
  const components = parts.slice(2);
  return {
    uri,
    suite,
    components,
    options
  };
}

function parseDebSource(source) {
  const trimmed = source.trim();
  const debMatch = trimmed.match(/^(deb-src|deb)\s+/);
  const debType = debMatch ? debMatch[1] : "deb";
  let remaining = debMatch ? trimmed.slice(debMatch[0].length) : trimmed;
  const optionsMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  let options = "";
  if (optionsMatch) {
    options = optionsMatch[1].trim();
    remaining = remaining.slice(optionsMatch[0].length);
  }
  const parts = remaining.split(/\s+/).filter(Boolean);
  return {
    debType,
    options,
    uri: parts[0] ?? "",
    suite: parts[1] ?? "",
    components: parts.slice(2)
  };
}

function buildSourceLine({ debType, options, uri, suite, components }) {
  const optionsBlock = options ? ` [${options}]` : "";
  const componentsPart = components.length > 0 ? ` ${components.join(" ")}` : "";
  return `${debType}${optionsBlock} ${uri} ${suite}${componentsPart}`.trim();
}

function normalizeSuite(value) {
  return String(value).trim().toLowerCase();
}

function resolveOsIdForSuite(value, osIds, fallbackOs) {
  const suite = normalizeSuite(value);
  if (osIds.has(suite)) {
    return suite;
  }
  if (ubuntuCodenameToVersion[suite]) {
    const osId = `ubuntu-${ubuntuCodenameToVersion[suite]}`;
    if (osIds.has(osId)) {
      return osId;
    }
  }
  if (debianCodenameToVersion[suite]) {
    const osId = `debian-${debianCodenameToVersion[suite]}`;
    if (osIds.has(osId)) {
      return osId;
    }
  }
  if (/^\d{2}\.\d{2}$/.test(suite)) {
    const osId = `ubuntu-${suite}`;
    if (osIds.has(osId)) {
      return osId;
    }
  }
  if (/^\d{1,2}$/.test(suite)) {
    const osId = `debian-${suite}`;
    if (osIds.has(osId)) {
      return osId;
    }
  }
  if (fallbackOs && osIds.has(fallbackOs)) {
    return fallbackOs;
  }
  return null;
}

function splitSuiteList(value) {
  return String(value)
    .split(/[,\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

async function fetchReleaseInfo(baseUrl, suite) {
  const base = baseUrl.replace(/\/$/, "");
  const releaseUrl = `${base}/dists/${suite}/Release`;
  try {
    const bytes = await fetchBytes(releaseUrl);
    const text = Buffer.from(bytes).toString("utf8");
    return { ok: true, url: releaseUrl, fields: parseReleaseFile(text).fields };
  } catch {
    const inReleaseUrl = `${base}/dists/${suite}/InRelease`;
    try {
      const bytes = await fetchBytes(inReleaseUrl);
      const text = Buffer.from(bytes).toString("utf8");
      return { ok: true, url: inReleaseUrl, fields: parseReleaseFile(text).fields };
    } catch (error) {
      return {
        ok: false,
        url: inReleaseUrl,
        error: error instanceof Error ? error.message : String(error)
      };
    }
  }
}

function formatTemplate(value, tokens) {
  return Object.entries(tokens).reduce(
    (current, [key, tokenValue]) => current.replaceAll(`{${key}}`, tokenValue ?? ""),
    value
  );
}

function mergeTags(base, extra) {
  const tags = new Set();
  for (const value of [base, extra]) {
    if (!value) {
      continue;
    }
    const items = Array.isArray(value)
      ? value
      : String(value)
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
    for (const item of items) {
      tags.add(item);
    }
  }
  return tags.size > 0 ? Array.from(tags) : undefined;
}

function parseSourceLine(source, keyringPath) {
  const trimmed = source.trim();
  let remaining = trimmed;
  const debMatch = remaining.match(/^(deb-src|deb)\s+/);
  const debType = debMatch ? debMatch[1] : "deb";
  if (debMatch) {
    remaining = remaining.slice(debMatch[0].length);
  }

  const optionsMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  let existingOptions = {};
  if (optionsMatch) {
    const optionsStr = optionsMatch[1];
    const optionPairs = optionsStr.split(/\s+/);
    for (const pair of optionPairs) {
      const [key, value] = pair.split("=", 2);
      if (key && value) {
        existingOptions[key] = value;
      } else if (key) {
        existingOptions[key] = true;
      }
    }
    remaining = remaining.slice(optionsMatch[0].length);
  }

  delete existingOptions["signed-by"];
  if (keyringPath) {
    existingOptions["signed-by"] = keyringPath;
  }

  const optionsArray = Object.entries(existingOptions).map(([key, value]) => {
    if (value === true) {
      return key;
    }
    return `${key}=${value}`;
  });
  const optionsStr = optionsArray.join(" ");

  return `${debType} [${optionsStr}] ${remaining}`;
}

async function ensureAptDirs(baseDir) {
  const etcDir = path.join(baseDir, "etc", "apt");
  const sourceParts = path.join(etcDir, "sources.list.d");
  const listsDir = path.join(baseDir, "var", "lib", "apt", "lists");
  const listsPartial = path.join(listsDir, "partial");
  const archivesPartial = path.join(
    baseDir,
    "var",
    "cache",
    "apt",
    "archives",
    "partial"
  );
  const keyringsDir = path.join(baseDir, "keyrings");

  await mkdir(sourceParts, { recursive: true });
  await mkdir(listsPartial, { recursive: true });
  await mkdir(archivesPartial, { recursive: true });
  await mkdir(keyringsDir, { recursive: true });
  await writeFile(path.join(etcDir, "sources.list"), "", "utf8");

  return {
    sourceListPath: path.join(sourceParts, "inventory.list"),
    keyringsDir,
    listsDir
  };
}

async function findNewestInRelease(listsDir) {
  const entries = await readdir(listsDir);
  const candidates = entries.filter((name) => name.endsWith("InRelease"));
  if (candidates.length === 0) {
    return null;
  }
  let newest = null;
  let newestStat = null;
  for (const candidate of candidates) {
    const fullPath = path.join(listsDir, candidate);
    const info = await stat(fullPath);
    if (!newestStat || info.mtimeMs > newestStat.mtimeMs) {
      newestStat = info;
      newest = fullPath;
    }
  }
  return newest;
}

function parseInRelease(text) {
  const fields = {
    Origin: null,
    Label: null,
    Suite: null,
    Codename: null,
    Architectures: null,
    Components: null
  };
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^(Origin|Label|Suite|Codename|Architectures|Components):\s*(.*)$/);
    if (match) {
      fields[match[1]] = match[2].trim() || null;
    }
  }
  return fields;
}

function parseReleaseFile(text) {
  const fields = {};
  const checksums = { SHA256: [], MD5Sum: [], SHA1: [] };
  let current = null;
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const headerMatch = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (headerMatch) {
      const key = headerMatch[1];
      const value = headerMatch[2];
      if (key === "SHA256" || key === "MD5Sum" || key === "SHA1") {
        current = key;
        continue;
      }
      current = null;
      fields[key] = value.trim();
      continue;
    }
    if (current && line.trim()) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 3) {
        const [hash, size, ...rest] = parts;
        checksums[current].push({
          hash,
          size: Number.parseInt(size, 10),
          path: rest.join(" ")
        });
      }
    }
  }
  return { fields, checksums };
}

function sha256Hex(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

async function fetchBytes(url) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status} for ${url}`);
  }
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}

async function writeRawFile(rawDir, relativePath, bytes) {
  const targetPath = path.join(rawDir, relativePath.split("/").join(path.sep));
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, bytes);
  return targetPath;
}

function extractListContext(name) {
  const match = name.match(/_dists_([^_]+)_([^_]+)_binary-([^_]+)_Packages/);
  if (match) {
    return {
      suite: match[1],
      component: match[2],
      arch: match[3]
    };
  }
  const altMatch = name.match(/_binary-([^_]+)_Packages/);
  if (altMatch) {
    return {
      suite: "",
      component: "",
      arch: altMatch[1]
    };
  }
  return {
    suite: "",
    component: "",
    arch: ""
  };
}

function buildPackagesIndex(packages) {
  return {
    generatedAt: new Date().toISOString(),
    packageCount: packages.length,
    packages
  };
}

async function runAptAssisted({
  repo,
  keyEntry,
  outputRawDir,
  timeoutSeconds,
  archList
}) {
  const errors = [];
  const sources = [];
  const packageFiles = [];

  const baseTemp = path.join(os.tmpdir(), "apt-inventory", normalizeRepoId(repo.id ?? "repo"));
  await mkdir(baseTemp, { recursive: true });
  const tempDir = await mkdtemp(path.join(baseTemp, "run-"));
  const { sourceListPath, keyringsDir, listsDir } = await ensureAptDirs(tempDir);

  let keyringPath = "";
  if (keyEntry) {
    const keyId = getKeyId(repo);
    const keyPath = path.resolve(root, getOutputPath(keyEntry, keyId));
    keyringPath = path.join(keyringsDir, `${keyId}.gpg`);
    const dearmor = spawnSync(
      "gpg",
      ["--batch", "--dearmor", "--output", keyringPath, keyPath],
      { encoding: "utf8" }
    );
    if (dearmor.status !== 0) {
      const dearmorError = dearmor.error ? String(dearmor.error.message ?? dearmor.error) : "";
      errors.push({
        stage: "gpg",
        message: "gpg --dearmor failed",
        detail: `${dearmor.stdout ?? ""}\n${dearmor.stderr ?? ""}\n${dearmorError}`.trim()
      });
      return {
        ok: false,
        errors
      };
    }
  }

  const sourceLine = keyringPath ? parseSourceLine(repo.source, keyringPath) : repo.source;
  sources.push(sourceLine);
  await writeFile(sourceListPath, `${sourceLine}\n`, "utf8");

  const archs = archList.length > 0 ? archList : ["amd64"];
  const archsWithAll = Array.from(new Set([...archs, "all"]));
  const aptArgs = [
    "update",
    "-o",
    `Dir=${tempDir}`,
    "-o",
    `Dir::Etc::sourcelist=${path.join(tempDir, "etc", "apt", "sources.list")}`,
    "-o",
    `Dir::Etc::sourceparts=${path.join(tempDir, "etc", "apt", "sources.list.d")}`,
    "-o",
    `Dir::State=${path.join(tempDir, "var", "lib", "apt")}`,
    "-o",
    `Dir::State::Lists=${listsDir}`,
    "-o",
    `Dir::Cache=${path.join(tempDir, "var", "cache", "apt")}`,
    "-o",
    "Acquire::AllowInsecureRepositories=false",
    "-o",
    "Acquire::AllowDowngradeToInsecureRepositories=false",
    "-o",
    "Acquire::CompressionTypes::Order::=gz",
    "-o",
    `APT::Architecture=${archs[0]}`,
    "-o",
    `APT::Architectures=${archsWithAll.join(",")}`
  ];

  const aptResult = spawnSync("apt-get", aptArgs, {
    encoding: "utf8",
    env: {
      ...process.env,
      DEBIAN_FRONTEND: "noninteractive"
    },
    timeout: timeoutSeconds * 1000,
    maxBuffer: 1024 * 1024 * 12
  });

  const output = `${aptResult.stdout ?? ""}\n${aptResult.stderr ?? ""}`.trim();
  if (aptResult.status !== 0) {
    errors.push({
      stage: "apt-get",
      message: "apt-get update failed",
      detail: output
    });
  }

  const listEntries = await readdir(listsDir);
  const packageLists = listEntries.filter((name) => name.includes("_Packages"));

  let release = null;
  const inReleasePath = await findNewestInRelease(listsDir);
  if (inReleasePath) {
    const inReleaseBytes = await readFile(inReleasePath);
    release = {
      ...parseInRelease(inReleaseBytes.toString("utf8")),
      inReleasePath,
      inReleaseSha256: sha256Hex(inReleaseBytes)
    };
  }

  const entries = [];
  for (const name of packageLists) {
    const fullPath = path.join(listsDir, name);
    const content = await readFile(fullPath);
    const rawPath = await writeRawFile(outputRawDir, name, content);
    try {
      const text = decompressPackagesFile(fullPath, content);
      const stanzas = parsePackagesStanzas(text);
      const context = extractListContext(name);
      for (const stanza of stanzas) {
        stanza.__suite = context.suite;
        stanza.__component = context.component;
      }
      entries.push(...stanzas);
      packageFiles.push({
        name,
        sha256: sha256Hex(content),
        sizeBytes: content.length,
        suite: context.suite,
        component: context.component,
        arch: context.arch
      });
    } catch (error) {
      errors.push({
        stage: "parse",
        message: `Failed to parse ${name}`,
        detail: error instanceof Error ? error.message : String(error)
      });
    }
  }

  return {
    ok: aptResult.status === 0,
    entries,
    errors,
    release,
    sources,
    packageFiles
  };
}

async function runDirectFetch({
  repo,
  outputRawDir,
  archList,
  overrideSuite,
  overrideComponents
}) {
  const errors = [];
  const packageFiles = [];
  const sources = [];
  const parsed = parseDebLine(repo.source);
  const baseUrl = repo.baseUrl ?? parsed.uri;
  const suite = overrideSuite || repo.suite || parsed.suite;
  if (!baseUrl || !suite || suite === "/") {
    errors.push({
      stage: "release",
      message: "Direct fetch requires a standard dists/<suite> layout",
      detail: `baseUrl=${baseUrl || "(missing)"} suite=${suite || "(missing)"}`
    });
    return { ok: false, entries: [], errors, release: null, sources, packageFiles };
  }

  const releaseUrl = `${baseUrl.replace(/\/$/, "")}/dists/${suite}/Release`;
  sources.push(releaseUrl);
  let releaseText = "";
  try {
    const bytes = await fetchBytes(releaseUrl);
    releaseText = Buffer.from(bytes).toString("utf8");
  } catch (error) {
    const inReleaseUrl = `${baseUrl.replace(/\/$/, "")}/dists/${suite}/InRelease`;
    sources.push(inReleaseUrl);
    try {
      const bytes = await fetchBytes(inReleaseUrl);
      releaseText = Buffer.from(bytes).toString("utf8");
    } catch (inner) {
      errors.push({
        stage: "release",
        message: "Failed to fetch Release/InRelease",
        detail: inner instanceof Error ? inner.message : String(inner)
      });
      return { ok: false, entries: [], errors, release: null, sources, packageFiles };
    }
  }

  const parsedRelease = parseReleaseFile(releaseText);
  const releaseFields = parsedRelease.fields;
  const releasePaths = new Set(parsedRelease.checksums.SHA256.map((item) => item.path));

  const components =
    overrideComponents && overrideComponents.length > 0
      ? overrideComponents
      : parsed.components.length > 0
        ? parsed.components
        : releaseFields.Components
          ? releaseFields.Components.split(/\s+/).filter(Boolean)
          : [];

  const architectures =
    archList.length > 0
      ? archList
      : releaseFields.Architectures
        ? releaseFields.Architectures.split(/\s+/).filter(Boolean)
        : ["amd64"];

  const archsWithAll = Array.from(new Set([...architectures, "all"]));
  const entries = [];

  for (const component of components.length > 0 ? components : [""]) {
    for (const arch of archsWithAll) {
      const basePath = component
        ? `${component}/binary-${arch}/Packages`
        : `binary-${arch}/Packages`;
      const candidates = [`${basePath}.gz`, `${basePath}.xz`, basePath];
      const selected = candidates.find((candidate) => releasePaths.has(candidate));
      if (!selected) {
        errors.push({
          stage: "packages",
          message: "Packages index not listed in Release",
          detail: `${basePath} (.gz/.xz) missing`
        });
        continue;
      }

      const url = `${baseUrl.replace(/\/$/, "")}/dists/${suite}/${selected}`;
      sources.push(url);
      try {
        const bytes = await fetchBytes(url);
        const rawPath = await writeRawFile(outputRawDir, selected, bytes);
        const text = decompressPackagesFile(rawPath, bytes);
        const stanzas = parsePackagesStanzas(text);
        for (const stanza of stanzas) {
          stanza.__suite = suite;
          stanza.__component = component;
        }
        entries.push(...stanzas);
        packageFiles.push({
          name: selected,
          url,
          sha256: sha256Hex(bytes),
          sizeBytes: bytes.length,
          suite,
          component,
          arch
        });
      } catch (error) {
        errors.push({
          stage: "packages",
          message: `Failed to fetch ${selected}`,
          detail: error instanceof Error ? error.message : String(error)
        });
      }
    }
  }

  return {
    ok: errors.length === 0,
    entries,
    errors,
    release: releaseFields,
    sources,
    packageFiles
  };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const [command] = args._ ?? [];
  const discoveryCommands = new Set([
    "discover-repos",
    "verify-repos",
    "curate-repos",
    "sync-catalog"
  ]);
  const inventoryCommands = new Set([
    "fetch-packages",
    "fetch-packages-all",
    "expand-repo-suites",
    "cleanup-catalog"
  ]);
  if (command && discoveryCommands.has(command)) {
    const { runDiscoveryCli } = await import("./discovery/index.mjs");
    await runDiscoveryCli(root);
    return;
  }
  if (!command || !inventoryCommands.has(command)) {
    throw new Error(
      "Usage: node scripts/apt-inventory.mjs fetch-packages --repo-id <id> OR fetch-packages --all OR fetch-packages-all OR expand-repo-suites --repo-id <id> OR expand-repo-suites --all OR cleanup-catalog"
    );
  }
  const fetchAll = command === "fetch-packages-all" || (command === "fetch-packages" && args.all);

  const mode = args.mode ?? "auto";
  const timeoutSeconds = Number.parseInt(args.timeoutSeconds ?? "60", 10);
  const archList = toList(args.arch);
  const overrideSuite = args.suite;
  const overrideComponents = toList(args.components);
  const outRoot = args.outDir ?? path.join(root, "data", "repos");
  const overrideSource = args.source;
  const overrideBaseUrl = args["base-url"];
  const onlyIds = new Set(toList(args["only-ids"] ?? args.only));
  const onlyOs = args.os ?? null;
  const allowFailures = args["allow-failures"] === "true";

  const [reposCatalog, keysCatalog] = await Promise.all([
    loadReposCatalog({ root }),
    readJson(keysPath)
  ]);

  async function fetchForRepo(repoId, repoOverride = null) {
    const repoFromCatalog = reposCatalog.repos.find((item) => item.id === repoId);
    let repo = repoOverride ?? repoFromCatalog;
    if (!repo) {
      if (!overrideSource && !(overrideBaseUrl && overrideSuite)) {
        throw new Error(
          `Repo ${repoId} not found in catalog and no --source or --base-url/--suite provided`
        );
      }
      const components = overrideComponents.length > 0 ? overrideComponents : [];
      const sourceLine =
        overrideSource ||
        `deb ${overrideBaseUrl} ${overrideSuite} ${components.join(" ")}`.trim();
      repo = {
        id: repoId,
        source: sourceLine,
        baseUrl: overrideBaseUrl ?? undefined,
        suite: overrideSuite ?? undefined,
        components: components.length > 0 ? components : undefined
      };
    }

    const keyId = getKeyId(repo);
    const keyEntry = keysCatalog.keys.find((item) => item.id === keyId);

    const baseUrl = repo.baseUrl ?? repo.base_url ?? null;
    const suitesMetaPath = path.join(dataReposDir, repoId, "suites.json");
    const suitesMeta = await readOptionalJson(suitesMetaPath);

    const suiteTargets = [];
    if (overrideSuite || overrideSource || overrideBaseUrl) {
      const parsed = parseDebLine(overrideSource ?? repo.source ?? "");
      const suite = overrideSuite ?? parsed.suite;
      const components = overrideComponents.length > 0 ? overrideComponents : parsed.components;
      if (!suite) {
        throw new Error(`Suite is required for ${repoId}`);
      }
      suiteTargets.push({
        suite,
        components,
        options: parsed.options,
        baseUrl: overrideBaseUrl ?? baseUrl ?? parsed.uri
      });
    } else if (repo.source) {
      const parsed = parseDebLine(repo.source);
      if (!parsed.suite) {
        throw new Error(`Suite is required for ${repoId}`);
      }
      suiteTargets.push({
        suite: parsed.suite,
        components: parsed.components,
        options: parsed.options,
        baseUrl: baseUrl ?? parsed.uri
      });
    } else if (suitesMeta?.suites && Array.isArray(suitesMeta.suites)) {
      for (const suiteEntry of suitesMeta.suites) {
        if (!suiteEntry?.suite) {
          continue;
        }
        suiteTargets.push({
          suite: suiteEntry.suite,
          components: Array.isArray(suiteEntry.components) ? suiteEntry.components : [],
          options: suiteEntry.options && typeof suiteEntry.options === "object" ? suiteEntry.options : {},
          baseUrl: baseUrl ?? suitesMeta.baseUrl ?? ""
        });
      }
    }

    if (suiteTargets.length === 0) {
      throw new Error(`No suite metadata available for ${repoId}`);
    }

    const repoDir = path.join(outRoot, repoId);
    const rawDir = path.join(repoDir, "packages.raw", timestampId());
    await mkdir(rawDir, { recursive: true });

    console.log(`[fetch-packages] start ${repoId}`);

    const meta = {
      fetchedAt: new Date().toISOString(),
      repoId,
      mode,
      source: {
        baseUrl: baseUrl ?? null,
        suites: suiteTargets.map((suiteEntry) => ({
          suite: suiteEntry.suite,
          components: suiteEntry.components,
          options: suiteEntry.options
        })),
        arch: archList.length > 0 ? archList : null
      },
      repoFromCatalog: Boolean(repoFromCatalog),
      releases: [],
      sources: [],
      packageFiles: [],
      errors: []
    };
    const packages = [];

    for (const suiteTarget of suiteTargets) {
      const suiteSourceLine = buildSourceLine({
        debType: "deb",
        options: suiteTarget.options ?? {},
        uri: suiteTarget.baseUrl ?? baseUrl ?? "",
        suite: suiteTarget.suite,
        components: suiteTarget.components ?? []
      });
      const suiteRepo = {
        ...repo,
        source: suiteSourceLine,
        baseUrl: suiteTarget.baseUrl ?? baseUrl ?? undefined,
        suite: suiteTarget.suite,
        components: suiteTarget.components ?? []
      };

      let entries = [];
      if (mode === "apt" || mode === "auto") {
        const result = await runAptAssisted({
          repo: suiteRepo,
          keyEntry,
          outputRawDir: rawDir,
          timeoutSeconds,
          archList
        });
        meta.sources.push(...result.sources);
        meta.packageFiles.push(...result.packageFiles);
        meta.errors.push(...result.errors);
        if (result.release) {
          meta.releases.push({ suite: suiteTarget.suite, release: result.release });
        }
        entries = result.entries ?? [];
        if (mode === "apt" && !result.ok) {
          meta.errors.push({
            stage: "apt-get",
            message: `APT-assisted mode failed (${suiteTarget.suite})`,
            detail: "Use --mode direct to bypass apt-get"
          });
        }
        if (mode === "auto" && (!result.ok || entries.length === 0)) {
          const direct = await runDirectFetch({
            repo: suiteRepo,
            outputRawDir: rawDir,
            archList,
            overrideSuite: suiteTarget.suite,
            overrideComponents: suiteTarget.components
          });
          meta.sources.push(...direct.sources);
          meta.packageFiles.push(...direct.packageFiles);
          meta.errors.push(...direct.errors);
          if (direct.release) {
            meta.releases.push({ suite: suiteTarget.suite, release: direct.release });
          }
          entries = direct.entries ?? entries;
        }
      }

      if (mode === "direct") {
        const direct = await runDirectFetch({
          repo: suiteRepo,
          outputRawDir: rawDir,
          archList,
          overrideSuite: suiteTarget.suite,
          overrideComponents: suiteTarget.components
        });
        meta.sources.push(...direct.sources);
        meta.packageFiles.push(...direct.packageFiles);
        meta.errors.push(...direct.errors);
        if (direct.release) {
          meta.releases.push({ suite: suiteTarget.suite, release: direct.release });
        }
        entries = direct.entries ?? [];
      }

      const normalized = normalizePackages(entries, {
        repoId,
        suite: suiteTarget.suite,
        component: ""
      });
      packages.push(...normalized);
    }

    const packagesMetaPath = path.join(repoDir, "packages.meta.json");

    await mkdir(repoDir, { recursive: true });
    await writePackagesIndex({ repoDir, packages, removeLegacy: true });
    await writeFile(
      packagesMetaPath,
      JSON.stringify(meta, null, 2) + "\n",
      "utf8"
    );
    console.log(
      `[fetch-packages] done ${repoId} (${meta.errors.length === 0 ? "ok" : "errors"})`
    );
    return meta.errors.length === 0;
  }

  if (command === "cleanup-catalog") {
    const keyIdMap = new Map();
    const keysBySource = new Map();
    const keysByFingerprint = new Map();

    for (const entry of keysCatalog.keys ?? []) {
      const sourceUrl = getKeySourceUrl(entry).trim();
      if (sourceUrl) {
        const key = sourceUrl.toLowerCase();
        if (!keysBySource.has(key)) {
          keysBySource.set(key, []);
        }
        keysBySource.get(key).push(entry);
      }
      const fpSet = getFingerprintSet(entry);
      if (fpSet) {
        if (!keysByFingerprint.has(fpSet)) {
          keysByFingerprint.set(fpSet, []);
        }
        keysByFingerprint.get(fpSet).push(entry);
      }
    }

    function setKeyMapping(group, reason) {
      if (!group || group.length < 2) {
        return;
      }
      const keep = group[0].id;
      for (const entry of group.slice(1)) {
        if (!keyIdMap.has(entry.id)) {
          keyIdMap.set(entry.id, { keep, reason });
        }
      }
    }

    for (const group of keysBySource.values()) {
      setKeyMapping(group, "duplicate-sourceUrl");
    }
    for (const group of keysByFingerprint.values()) {
      setKeyMapping(group, "duplicate-fingerprint");
    }

    function resolveKeyId(id) {
      let current = id;
      const seen = new Set();
      while (keyIdMap.has(current)) {
        if (seen.has(current)) {
          break;
        }
        seen.add(current);
        current = keyIdMap.get(current).keep;
      }
      return current;
    }

    const resolvedKeyMap = new Map();
    for (const [key, value] of keyIdMap.entries()) {
      const resolved = resolveKeyId(value.keep);
      if (resolved !== key) {
        resolvedKeyMap.set(key, { keep: resolved, reason: value.reason });
      }
    }

    function mergeKey(base, extra) {
      if (!base.documentationUrl && extra.documentationUrl) {
        base.documentationUrl = extra.documentationUrl;
      }
      const tags = mergeTags(base.tags, extra.tags);
      if (tags) {
        base.tags = tags;
      }
      if (!base.notes && extra.notes) {
        base.notes = extra.notes;
      }
      if (!base.vendor && extra.vendor) {
        base.vendor = extra.vendor;
      }
      if (!base.label && extra.label) {
        base.label = extra.label;
      }
      if (!base.sourceUrl && extra.sourceUrl) {
        base.sourceUrl = extra.sourceUrl;
      }
      const baseFp = Array.isArray(base.expectedFingerprints)
        ? base.expectedFingerprints
        : base.expectedFingerprints
          ? [base.expectedFingerprints]
          : [];
      const extraFp = Array.isArray(extra.expectedFingerprints)
        ? extra.expectedFingerprints
        : extra.expectedFingerprints
          ? [extra.expectedFingerprints]
          : [];
      const merged = Array.from(
        new Set([...baseFp, ...extraFp].map(normalizeFingerprint).filter(Boolean))
      );
      if (merged.length > 0) {
        base.expectedFingerprints = merged.sort();
      }
      if ((!base.status || base.status !== "active") && extra.status === "active") {
        base.status = "active";
      }
      return base;
    }

    const updatedRepos = [];
    const reposWithKeyUpdates = [];
    for (const repo of reposCatalog.repos ?? []) {
      const keyId = getKeyId(repo);
      const resolvedKeyId = keyId ? resolveKeyId(keyId) : null;
      if (resolvedKeyId && resolvedKeyId !== keyId) {
        reposWithKeyUpdates.push({ repoId: repo.id, from: keyId, to: resolvedKeyId });
        updatedRepos.push({ ...repo, keyId: resolvedKeyId });
      } else {
        updatedRepos.push({ ...repo });
      }
    }

    const keysById = new Map();
    const removedKeyIds = new Set();
    const mergedKeys = [];
    for (const entry of keysCatalog.keys ?? []) {
      const resolvedId = resolveKeyId(entry.id);
      if (resolvedId !== entry.id) {
        removedKeyIds.add(entry.id);
        if (keysById.has(resolvedId)) {
          mergeKey(keysById.get(resolvedId), entry);
          mergedKeys.push({ from: entry.id, to: resolvedId });
        }
        continue;
      }
      if (keysById.has(resolvedId)) {
        mergeKey(keysById.get(resolvedId), entry);
        mergedKeys.push({ from: entry.id, to: resolvedId });
      } else {
        keysById.set(resolvedId, { ...entry });
      }
    }

    function mergeRepo(base, extra) {
      if (!base.label && extra.label) {
        base.label = extra.label;
      }
      if (!base.name && extra.name) {
        base.name = extra.name;
      }
      if (!base.documentationUrl && extra.documentationUrl) {
        base.documentationUrl = extra.documentationUrl;
      }
      const tags = mergeTags(base.tags, extra.tags);
      if (tags) {
        base.tags = tags;
      }
      if (!base.notes && extra.notes) {
        base.notes = extra.notes;
      }
      if (!base.allowMissingDocsUrl && extra.allowMissingDocsUrl) {
        base.allowMissingDocsUrl = true;
      }
      if (!base.allowDeprecatedKey && extra.allowDeprecatedKey) {
        base.allowDeprecatedKey = true;
      }
      return base;
    }

    const reposById = new Map();
    let missingRepoIdCount = 0;
    const duplicateRepoIds = [];
    for (const repo of updatedRepos) {
      if (!repo.id) {
        missingRepoIdCount += 1;
        reposById.set(`__missing-id-${missingRepoIdCount}`, repo);
        continue;
      }
      if (reposById.has(repo.id)) {
        mergeRepo(reposById.get(repo.id), repo);
        duplicateRepoIds.push(repo.id);
      } else {
        reposById.set(repo.id, repo);
      }
    }

    const reposBySignature = new Map();
    let missingRepoSignatureCount = 0;
    const duplicateRepoSignatures = [];
    for (const repo of reposById.values()) {
      const keyId = getKeyId(repo) ?? "";
      const baseUrl = repo.baseUrl ?? repo.base_url ?? "";
      const signature = `${baseUrl}|${normalizeDebLine(repo.source ?? "")}|${keyId}`;
      if (!baseUrl && !repo.source) {
        missingRepoSignatureCount += 1;
        const fallbackId = `${repo.id ?? "unknown"}|${signature}|${missingRepoSignatureCount}`;
        reposBySignature.set(fallbackId, repo);
        continue;
      }
      if (reposBySignature.has(signature)) {
        mergeRepo(reposBySignature.get(signature), repo);
        duplicateRepoSignatures.push(repo.id);
      } else {
        reposBySignature.set(signature, repo);
      }
    }

    const finalKeys = Array.from(keysById.values());
    const finalRepos = Array.from(reposBySignature.values());

    console.log("Catalog cleanup summary:");
    console.log(`- keys removed: ${removedKeyIds.size}`);
    console.log(`- keys merged: ${mergedKeys.length}`);
    console.log(`- repos updated keyId: ${reposWithKeyUpdates.length}`);
    console.log(`- repos merged by id: ${duplicateRepoIds.length}`);
    console.log(`- repos merged by signature: ${duplicateRepoSignatures.length}`);

    if (resolvedKeyMap.size > 0) {
      console.log("\nKey consolidation map:");
      for (const [from, entry] of resolvedKeyMap.entries()) {
        console.log(`- ${from} -> ${entry.keep} (${entry.reason})`);
      }
    }

    if (args["dry-run"] || !args["write-catalog"]) {
      console.log("\nDry run only. Use --write-catalog to save updates.");
      return;
    }

    const updatedKeysCatalog = { ...keysCatalog, keys: finalKeys };
    const updatedReposCatalog = { ...reposCatalog, repos: finalRepos };
    await writeFile(keysPath, JSON.stringify(updatedKeysCatalog, null, 2) + "\n", "utf8");
    await writeReposCatalog({ root, repos: updatedReposCatalog.repos, preferDir: true, clean: true });

    const validate = spawnSync("node", ["scripts/validate-all.mjs"], {
      stdio: "inherit",
      cwd: root
    });
    if (validate.status !== 0) {
      process.exit(validate.status ?? 1);
    }
    return;
  }

  if (command === "fetch-packages" && !fetchAll) {
    const repoId = args["repo-id"] ?? args.id;
    if (!repoId) {
      throw new Error("Missing required --repo-id");
    }
    await fetchForRepo(repoId);
    return;
  }

  if (command === "expand-repo-suites") {
    const expandAll = Boolean(args.all);
    const repoId = args["repo-id"] ?? args.id;
    if (!expandAll && !repoId) {
      throw new Error("Missing required --repo-id (or pass --all)");
    }
    const osCatalog = await readJson(osPath);
    const osIds = new Set((osCatalog.oses ?? []).map((entry) => entry.id));

    const suiteCandidates =
      args["suite-candidates"] && args["suite-candidates"].trim()
        ? splitSuiteList(args["suite-candidates"])
        : defaultSuiteCandidates;

    const fallbackOs = args["unknown-os"];
    if (fallbackOs && !osIds.has(fallbackOs)) {
      throw new Error(`Unknown fallback os ${fallbackOs} in catalog/os.json`);
    }
    const osList = toList(args["os-list"]);
    if (osList.length > 0) {
      const invalid = osList.filter((value) => !osIds.has(value));
      if (invalid.length > 0) {
        throw new Error(`Unknown os in --os-list: ${invalid.join(", ")}`);
      }
    }

    const existingIds = new Set(reposCatalog.repos.map((item) => item.id));
    const existingBySignature = new Map();
    for (const item of reposCatalog.repos) {
      if (!item.source || !item.os) {
        continue;
      }
      const signature = `${item.os}|${item.source}|${getKeyId(item) ?? ""}`;
      existingBySignature.set(signature, item);
    }

    async function expandForRepo(repo) {
      const parsed = parseDebSource(repo.source);
      const baseUrl = args["base-url"] ?? repo.baseUrl ?? parsed.uri;
      if (!baseUrl) {
        return {
          planned: [],
          skipped: [{ suite: "*", reason: "missing-base-url" }],
          probed: []
        };
      }

      const suites = Array.from(
        new Set([parsed.suite, ...suiteCandidates].map(normalizeSuite).filter(Boolean))
      );

      const planned = [];
      const skipped = [];
      const probed = [];
      for (const suite of suites) {
        const release = await fetchReleaseInfo(baseUrl, suite);
        if (!release.ok) {
          skipped.push({ suite, reason: "missing-release", detail: release.error });
          continue;
        }
        const releaseSuiteRaw = release.fields.Codename || release.fields.Suite || suite;
        const releaseSuite = splitSuiteList(releaseSuiteRaw)[0] ?? suite;
        const resolvedOs = resolveOsIdForSuite(releaseSuite, osIds, null);
        const osTargets = resolvedOs
          ? [resolvedOs]
          : osList.length > 0
            ? osList
            : fallbackOs
              ? [fallbackOs]
              : [];
        if (osTargets.length === 0) {
          skipped.push({ suite, reason: "unknown-os", detail: releaseSuite });
          continue;
        }
        const components =
          parsed.components.length > 0
            ? parsed.components
            : splitSuiteList(release.fields.Components ?? "");
        if (components.length === 0) {
          skipped.push({ suite, reason: "missing-components" });
          continue;
        }

        const source = buildSourceLine({
          debType: parsed.debType,
          options: parsed.options,
          uri: parsed.uri,
          suite,
          components
        });
        const idTemplate =
          args["id-format"] ?? (osList.length > 0 ? "{baseId}-{suite}-{os}" : "{baseId}-{suite}");
        const labelTemplate =
          args["label-format"] ??
          (osList.length > 0 ? "{baseLabel} - {suite} - {os}" : "{baseLabel} - {suite}");

        for (const osTarget of osTargets) {
          const signature = `${osTarget}|${source}|${getKeyId(repo) ?? ""}`;
          if (existingBySignature.has(signature)) {
            skipped.push({ suite, reason: "duplicate-existing" });
            continue;
          }

          const tokens = {
            baseId: repo.id,
            baseLabel: repo.label ?? repo.id,
            suite,
            os: osTarget,
            codename: releaseSuite
          };
          const baseId = normalizeRepoId(formatTemplate(idTemplate, tokens));
          let id = baseId;
          if (existingIds.has(id)) {
            let counter = 2;
            while (existingIds.has(`${baseId}-${counter}`)) {
              counter += 1;
            }
            id = `${baseId}-${counter}`;
          }
          existingIds.add(id);

          const entry = {
            id,
            label: formatTemplate(labelTemplate, tokens),
            os: osTarget,
            name: repo.name,
            source,
            keyId: getKeyId(repo),
            documentationUrl: repo.documentationUrl,
            tags: repo.tags,
            notes: repo.notes
          };
          if (!entry.documentationUrl) {
            entry.allowMissingDocsUrl = true;
          }
          if (repo.allowDeprecatedKey) {
            entry.allowDeprecatedKey = true;
          }

          planned.push(entry);
          probed.push({ suite, url: release.url, os: osTarget });
          existingBySignature.set(signature, entry);
        }
      }

      return { planned, skipped, probed, suitesCount: suites.length };
    }

    const plannedAll = [];
    const skippedAll = [];
    const probedAll = [];

    const targetRepos = expandAll
      ? reposCatalog.repos.filter((repo) => {
          if (onlyOs && repo.os !== onlyOs) {
            return false;
          }
          if (onlyIds.size > 0 && !onlyIds.has(repo.id)) {
            return false;
          }
          return true;
        })
      : [reposCatalog.repos.find((item) => item.id === repoId)];

    if (targetRepos.some((repo) => !repo)) {
      throw new Error(`Repo ${repoId} not found in catalog`);
    }

    console.log(`[expand-repo-suites] total repos: ${targetRepos.length}`);
    let index = 0;
    for (const repo of targetRepos) {
      index += 1;
      console.log(`[expand-repo-suites] repo ${index}/${targetRepos.length}: ${repo.id}`);
      const result = await expandForRepo(repo);
      plannedAll.push(...result.planned);
      skippedAll.push(
        ...result.skipped.map((item) => ({
          repoId: repo.id,
          suite: item.suite,
          reason: item.reason,
          detail: item.detail
        }))
      );
      probedAll.push(
        ...result.probed.map((item) => ({
          repoId: repo.id,
          suite: item.suite,
          os: item.os,
          url: item.url
        }))
      );
      console.log(
        `[expand-repo-suites] ${repo.id} suites=${result.suitesCount} planned=${result.planned.length} skipped=${result.skipped.length}`
      );
    }

    console.log("\nSuite expansion summary:");
    if (!expandAll) {
      console.log(`- repo: ${repoId}`);
    }
    console.log(`- entries planned: ${plannedAll.length}`);
    console.log(`- entries skipped: ${skippedAll.length}`);

    if (probedAll.length > 0) {
      console.log("\nVerified suites:");
      for (const item of probedAll) {
        console.log(`- ${item.repoId}: ${item.suite} -> ${item.os} (${item.url})`);
      }
    }

    if (skippedAll.length > 0) {
      console.log("\nSkipped suites:");
      for (const item of skippedAll) {
        const detail = item.detail ? ` (${item.detail})` : "";
        console.log(`- ${item.repoId}: ${item.suite} ${item.reason}${detail}`);
      }
    }

    if (args["dry-run"] || !args["write-catalog"]) {
      console.log("\nPlanned entries:");
      for (const entry of plannedAll) {
        console.log(JSON.stringify(entry, null, 2));
      }
      if (!args["write-catalog"]) {
        console.log("\nDry run only. Use --write-catalog to save entries.");
      }
      return;
    }

    if (plannedAll.length > 0) {
      reposCatalog.repos.push(...plannedAll);
      await writeReposCatalog({ root, repos: reposCatalog.repos, preferDir: true, clean: true });
    }

    const validateRepos = spawnSync("node", ["scripts/validate-repos.mjs"], {
      stdio: "inherit",
      cwd: root
    });
    if (validateRepos.status !== 0) {
      process.exit(validateRepos.status ?? 1);
    }
    return;
  }

  const repos = reposCatalog.repos.filter((repo) => {
    if (onlyOs && repo.os !== onlyOs) {
      return false;
    }
    if (onlyIds.size > 0 && !onlyIds.has(repo.id)) {
      return false;
    }
    return true;
  });

  console.log(`[fetch-packages] total repos: ${repos.length}`);

  let failures = 0;
  let index = 0;
  for (const repo of repos) {
    index += 1;
    console.log(`[fetch-packages] repo ${index}/${repos.length}: ${repo.id}`);
    try {
      const ok = await fetchForRepo(repo.id, repo);
      if (!ok) {
        failures += 1;
      }
    } catch (error) {
      failures += 1;
      console.error(
        error instanceof Error ? error.message : `Failed ${repo.id}: ${error}`
      );
    }
  }

  if (failures > 0 && !allowFailures) {
    process.exit(1);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
