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

const root = process.cwd();
const reposPath = path.join(root, "catalog", "repos.json");
const keysPath = path.join(root, "catalog", "keys.json");

function parseArgs(argv) {
  const args = {};
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

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id ?? null;
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
        stanza.__sourceIndexPath = rawPath.replace(/\\/g, "/");
      }
      entries.push(...stanzas);
      packageFiles.push({
        source: fullPath,
        rawPath: rawPath.replace(/\\/g, "/"),
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
          stanza.__sourceIndexPath = rawPath.replace(/\\/g, "/");
        }
        entries.push(...stanzas);
        packageFiles.push({
          source: url,
          rawPath: rawPath.replace(/\\/g, "/"),
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
  if (command && discoveryCommands.has(command)) {
    const { runDiscoveryCli } = await import("./discovery/index.mjs");
    await runDiscoveryCli(root);
    return;
  }
  if (!command || (command !== "fetch-packages" && command !== "fetch-packages-all")) {
    throw new Error(
      "Usage: node scripts/apt-inventory.mjs fetch-packages --repo-id <id> OR fetch-packages-all"
    );
  }

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
    readJson(reposPath),
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
        source: sourceLine
      };
    }

    const keyId = getKeyId(repo);
    const keyEntry = keysCatalog.keys.find((item) => item.id === keyId);

    const repoDir = path.join(outRoot, repoId);
    const rawDir = path.join(repoDir, "packages.raw", timestampId());
    await mkdir(rawDir, { recursive: true });

    const meta = {
      fetchedAt: new Date().toISOString(),
      repoId,
      mode,
      source: {
        line: repo.source,
        suite: overrideSuite ?? null,
        components: overrideComponents.length > 0 ? overrideComponents : null,
        arch: archList.length > 0 ? archList : null
      },
      repoFromCatalog: Boolean(repoFromCatalog),
      release: null,
      sources: [],
      packageFiles: [],
      errors: []
    };

    let entries = [];
    if (mode === "apt" || mode === "auto") {
      const result = await runAptAssisted({
        repo,
        keyEntry,
        outputRawDir: rawDir,
        timeoutSeconds,
        archList
      });
      meta.sources.push(...result.sources);
      meta.packageFiles.push(...result.packageFiles);
      meta.errors.push(...result.errors);
      if (result.release) {
        meta.release = result.release;
      }
      entries = result.entries ?? [];
      if (mode === "apt" && !result.ok) {
        meta.errors.push({
          stage: "apt-get",
          message: "APT-assisted mode failed",
          detail: "Use --mode direct to bypass apt-get"
        });
      }
      if (mode === "auto" && (!result.ok || entries.length === 0)) {
        const direct = await runDirectFetch({
          repo,
          outputRawDir: rawDir,
          archList,
          overrideSuite,
          overrideComponents
        });
        meta.sources.push(...direct.sources);
        meta.packageFiles.push(...direct.packageFiles);
        meta.errors.push(...direct.errors);
        if (!meta.release && direct.release) {
          meta.release = direct.release;
        }
        entries = direct.entries ?? entries;
      }
    }

    if (mode === "direct") {
      const direct = await runDirectFetch({
        repo,
        outputRawDir: rawDir,
        archList,
        overrideSuite,
        overrideComponents
      });
      meta.sources.push(...direct.sources);
      meta.packageFiles.push(...direct.packageFiles);
      meta.errors.push(...direct.errors);
      meta.release = direct.release;
      entries = direct.entries ?? [];
    }

    const packages = normalizePackages(entries, {
      repoId,
      suite: overrideSuite ?? parseDebLine(repo.source).suite,
      component: ""
    });

    const packagesPath = path.join(repoDir, "packages.json");
    const packagesMetaPath = path.join(repoDir, "packages.meta.json");

    await mkdir(repoDir, { recursive: true });
    await writeFile(
      packagesPath,
      JSON.stringify(buildPackagesIndex(packages), null, 2) + "\n",
      "utf8"
    );
    await writeFile(
      packagesMetaPath,
      JSON.stringify(meta, null, 2) + "\n",
      "utf8"
    );
    return meta.errors.length === 0;
  }

  if (command === "fetch-packages") {
    const repoId = args["repo-id"] ?? args.id;
    if (!repoId) {
      throw new Error("Missing required --repo-id");
    }
    await fetchForRepo(repoId);
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

  let failures = 0;
  for (const repo of repos) {
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
