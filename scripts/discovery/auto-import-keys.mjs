import path from "node:path";
import { mkdir, readFile, writeFile, stat, readdir } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import {
  parsePublicKeys,
  normalizeArmored,
  keyFingerprints,
  sniffContentType
} from "../lib/openpgp-utils.mjs";
import {
  parsePackagesStanzas,
  compareDpkgVersions,
  decompressPackagesFile
} from "../lib/apt-packages.mjs";
import * as openpgp from "openpgp";

const root = process.cwd();

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      args._.push(value);
      continue;
    }
    const key = value.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function normalizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

function normalizeSlug(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getKeyFingerprintsFromEntry(key) {
  const values = [];
  if (Array.isArray(key.expectedFingerprints)) {
    values.push(...key.expectedFingerprints);
  } else if (key.expectedFingerprint) {
    values.push(key.expectedFingerprint);
  } else if (key.fingerprint) {
    values.push(key.fingerprint);
  }
  return values.map(normalizeFingerprint).filter(Boolean);
}

function matchKeyId(repo, keysCatalog) {
  const keyUrls = repo.keyHints?.keyUrls ?? [];
  const fingerprints = repo.keyHints?.fingerprints ?? [];
  const keyUrlSet = new Set(keyUrls.map((value) => value.toLowerCase()));
  const fingerprintSet = new Set(fingerprints.map(normalizeFingerprint));

  for (const key of keysCatalog.keys ?? []) {
    const urls = [key.sourceUrl, key.key_url, key.documentationUrl, ...(key.sourceUrls ?? [])]
      .filter(Boolean)
      .map((value) => value.toLowerCase());
    if (urls.some((url) => keyUrlSet.has(url))) {
      return key.id;
    }
    const expected = getKeyFingerprintsFromEntry(key);
    if (expected.some((fp) => fingerprintSet.has(fp))) {
      return key.id;
    }
  }
  return null;
}

function ensureRepoPath(targetPath) {
  const normalized = targetPath.replace(/\\/g, "/");
  const resolved = path.resolve(root, normalized.split("/").join(path.sep));
  const normalizedRoot = path.resolve(root);
  if (!resolved.startsWith(normalizedRoot + path.sep)) {
    throw new Error(`Path ${targetPath} must be within repository root`);
  }
  return resolved;
}

async function fetchBytes(url, { timeoutMs = 15000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: "follow" });
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  } finally {
    clearTimeout(timeout);
  }
}

async function fetchBytesMaybe(url, options) {
  try {
    return await fetchBytes(url, options);
  } catch {
    return null;
  }
}

function extractKeyIdsFromPackets(text) {
  const ids = new Set();
  const patterns = [
    /keyid\s+([0-9a-f]{8,16})/gi,
    /issuer\s+([0-9a-f]{8,16})/gi,
    /issuer-fpr\s+([0-9a-f]{40})/gi
  ];
  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(text)) !== null) {
      const raw = match[1].toUpperCase();
      if (raw.length === 40) {
        ids.add(raw.slice(-16));
      } else {
        ids.add(raw.padStart(16, "0"));
      }
    }
  }
  return Array.from(ids);
}

function listKeyIdsFromFile(filePath) {
  const result = spawnSync("gpg", ["--batch", "--list-packets", filePath], {
    encoding: "utf8"
  });
  if (result.status !== 0) {
    const detail = `${result.stdout ?? ""}\n${result.stderr ?? ""}`.trim();
    throw new Error(detail || "gpg --list-packets failed");
  }
  return extractKeyIdsFromPackets(result.stdout ?? "");
}

function normalizeKeyId(value) {
  const raw = String(value ?? "").replace(/\s+/g, "").toUpperCase();
  if (!raw) {
    return null;
  }
  return raw.length >= 16 ? raw.slice(-16).padStart(16, "0") : raw.padStart(16, "0");
}

async function listKeyIdsFromCleartext(cleartextMessage) {
  const message = await openpgp.readCleartextMessage({ cleartextMessage });
  return message
    .getSigningKeyIDs()
    .map((keyId) => normalizeKeyId(keyId.toHex ? keyId.toHex() : String(keyId)))
    .filter(Boolean);
}

async function listKeyIdsFromSignature(signatureBytes) {
  const text = Buffer.from(signatureBytes).toString("utf8");
  const isArmored = text.includes("BEGIN PGP SIGNATURE");
  const signature = isArmored
    ? await openpgp.readSignature({ armoredSignature: text })
    : await openpgp.readSignature({ binarySignature: signatureBytes });
  return signature
    .getSigningKeyIDs()
    .map((keyId) => normalizeKeyId(keyId.toHex ? keyId.toHex() : String(keyId)))
    .filter(Boolean);
}

function parseReleaseFile(text) {
  const fields = {};
  const checksums = { SHA256: [], MD5Sum: [], SHA1: [] };
  let current = null;
  const lines = String(text ?? "").split(/\r?\n/);
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

function selectPackagesPath(checksums, basePath) {
  const paths = new Set(checksums.SHA256.map((entry) => entry.path));
  const candidates = [
    `${basePath}.xz`,
    `${basePath}.gz`,
    `${basePath}.lz4`,
    basePath
  ];
  return candidates.find((candidate) => paths.has(candidate)) ?? null;
}

function buildKeyserverUrls(keyId, templateList) {
  return templateList.map((template) => template.replace("{keyId}", keyId));
}

async function fetchKeyFromServers(keyId, servers, timeoutMs) {
  const keyUrls = buildKeyserverUrls(keyId, servers);
  const errors = [];
  for (const url of keyUrls) {
    try {
      const bytes = await fetchBytes(url, { timeoutMs });
      const contentType = sniffContentType(bytes);
      if (contentType === "html") {
        throw new Error("HTML response");
      }
      const keys = await parsePublicKeys(bytes);
      if (keys.length === 0) {
        throw new Error("No keys in response");
      }
      const matchesKeyId = (key) => {
        const ids = key.getKeyIDs?.() ?? [];
        const normalized = ids
          .map((id) => normalizeKeyId(id.toHex ? id.toHex() : String(id)))
          .filter(Boolean);
        return normalized.some((id) => id === keyId);
      };
      const matching = keys.filter(matchesKeyId);
      if (matching.length === 0) {
        throw new Error(`No key with key ID ${keyId} in response`);
      }
      return {
        ok: true,
        url,
        keys: matching,
        fingerprints: keyFingerprints(matching),
        bytes
      };
    } catch (error) {
      errors.push({ url, error: error instanceof Error ? error.message : String(error) });
    }
  }
  return { ok: false, errors };
}

async function ensureDir(dirPath) {
  await mkdir(dirPath, { recursive: true });
}

async function writeTempFile(tempDir, name, bytes) {
  await ensureDir(tempDir);
  const filePath = path.join(tempDir, name);
  await writeFile(filePath, bytes);
  return filePath;
}

function verifySignature({ keyringPath, inReleasePath, releasePath, releaseGpgPath }) {
  if (inReleasePath) {
    const result = spawnSync(
      "gpg",
      ["--batch", "--no-default-keyring", "--keyring", keyringPath, "--verify", inReleasePath],
      { encoding: "utf8" }
    );
    return result.status === 0;
  }
  if (releasePath && releaseGpgPath) {
    const result = spawnSync(
      "gpg",
      [
        "--batch",
        "--no-default-keyring",
        "--keyring",
        keyringPath,
        "--verify",
        releaseGpgPath,
        releasePath
      ],
      { encoding: "utf8" }
    );
    return result.status === 0;
  }
  return false;
}

async function verifyKeyForRepo({ keyArmored, suiteArtifacts, tempDir }) {
  const keys = await parsePublicKeys(keyArmored);
  if (commandExists("gpg")) {
    const keyPath = await writeTempFile(
      tempDir,
      `key-${randomUUID()}.asc`,
      Buffer.from(keyArmored, "utf8")
    );
    const keyringPath = path.join(tempDir, `keyring-${randomUUID()}.gpg`);
    const dearmor = spawnSync(
      "gpg",
      ["--batch", "--yes", "--dearmor", "--output", keyringPath, keyPath],
      { encoding: "utf8" }
    );
    if (dearmor.status !== 0) {
      const detail = `${dearmor.stdout ?? ""}\n${dearmor.stderr ?? ""}`.trim();
      return { ok: false, error: detail || "gpg --dearmor failed" };
    }
    for (const entry of suiteArtifacts) {
      if (verifySignature({ keyringPath, ...entry })) {
        return { ok: true, suite: entry.suite, keyringPath };
      }
    }
    return { ok: false, error: "Signature verification failed for all suites" };
  }

  for (const entry of suiteArtifacts) {
    if (entry.inReleaseText) {
      const message = await openpgp.readCleartextMessage({
        cleartextMessage: entry.inReleaseText
      });
      const results = await message.verify(keys);
      for (const result of results) {
        try {
          await result.verified;
          return { ok: true, suite: entry.suite };
        } catch {
          // try next signature
        }
      }
    } else if (entry.releaseText && entry.releaseGpgBytes) {
      const message = await openpgp.createMessage({ text: entry.releaseText });
      const signatureText = Buffer.from(entry.releaseGpgBytes).toString("utf8");
      const signature = signatureText.includes("BEGIN PGP SIGNATURE")
        ? await openpgp.readSignature({ armoredSignature: signatureText })
        : await openpgp.readSignature({ binarySignature: entry.releaseGpgBytes });
      const verification = await openpgp.verify({
        message,
        signature,
        verificationKeys: keys
      });
      for (const result of verification.signatures) {
        try {
          await result.verified;
          return { ok: true, suite: entry.suite };
        } catch {
          // try next signature
        }
      }
    }
  }

  return { ok: false, error: "Signature verification failed for all suites" };
}

async function fetchSuiteArtifacts({ baseUrl, suite, tempDir, timeoutMs }) {
  const base = baseUrl.replace(/\/$/, "");
  const inReleaseUrl = `${base}/dists/${suite}/InRelease`;
  const releaseUrl = `${base}/dists/${suite}/Release`;
  const releaseGpgUrl = `${base}/dists/${suite}/Release.gpg`;

  const inReleaseBytes = await fetchBytesMaybe(inReleaseUrl, { timeoutMs });
  if (inReleaseBytes) {
    const inReleaseText = Buffer.from(inReleaseBytes).toString("utf8");
    let keyIds = [];
    if (commandExists("gpg")) {
      const inReleasePath = await writeTempFile(
        tempDir,
        `InRelease-${suite}-${randomUUID()}`,
        inReleaseBytes
      );
      try {
        keyIds = listKeyIdsFromFile(inReleasePath);
      } catch {
        keyIds = [];
      }
      return {
        suite,
        inReleaseText,
        inReleasePath,
        keyIds,
        releaseText: null,
        releaseGpgBytes: null,
        releasePath: null,
        releaseGpgPath: null
      };
    }
    try {
      keyIds = await listKeyIdsFromCleartext(inReleaseText);
    } catch {
      keyIds = [];
    }
    return {
      suite,
      inReleaseText,
      inReleasePath: null,
      keyIds,
      releaseText: null,
      releaseGpgBytes: null,
      releasePath: null,
      releaseGpgPath: null
    };
  }

  const releaseBytes = await fetchBytesMaybe(releaseUrl, { timeoutMs });
  const releaseGpgBytes = await fetchBytesMaybe(releaseGpgUrl, { timeoutMs });
  if (releaseBytes && releaseGpgBytes) {
    const releaseText = Buffer.from(releaseBytes).toString("utf8");
    let keyIds = [];
    if (commandExists("gpg")) {
      const releasePath = await writeTempFile(
        tempDir,
        `Release-${suite}-${randomUUID()}`,
        releaseBytes
      );
      const releaseGpgPath = await writeTempFile(
        tempDir,
        `Release-gpg-${suite}-${randomUUID()}`,
        releaseGpgBytes
      );
      try {
        keyIds = listKeyIdsFromFile(releaseGpgPath);
      } catch {
        keyIds = [];
      }
      return {
        suite,
        inReleaseText: null,
        releaseText,
        releaseGpgBytes,
        releasePath,
        releaseGpgPath,
        keyIds,
        inReleasePath: null
      };
    }
    try {
      keyIds = await listKeyIdsFromSignature(releaseGpgBytes);
    } catch {
      keyIds = [];
    }
    return {
      suite,
      inReleaseText: null,
      releaseText,
      releaseGpgBytes,
      releasePath: null,
      releaseGpgPath: null,
      keyIds,
      inReleasePath: null
    };
  }

  return {
    suite,
    inReleaseText: null,
    releaseText: null,
    releaseGpgBytes: null,
    inReleasePath: null,
    releasePath: null,
    releaseGpgPath: null,
    keyIds: []
  };
}

function isKeyringPackage(name) {
  const value = String(name ?? "").toLowerCase();
  return (
    value.includes("keyring") ||
    value.includes("archive-keyring") ||
    value.includes("repo-keys") ||
    value.includes("signing-key")
  );
}

function selectLatestPackages(stanzas) {
  const byName = new Map();
  for (const entry of stanzas) {
    const name = entry.Package ?? "";
    const version = entry.Version ?? "";
    if (!name || !version) {
      continue;
    }
    if (!byName.has(name)) {
      byName.set(name, entry);
      continue;
    }
    const existing = byName.get(name);
    if (compareDpkgVersions(version, existing.Version ?? "") > 0) {
      byName.set(name, entry);
    }
  }
  return Array.from(byName.values());
}

async function extractKeysFromDirectory(dirPath) {
  const targets = [];
  const roots = [
    path.join(dirPath, "usr", "share", "keyrings"),
    path.join(dirPath, "etc", "apt", "keyrings"),
    path.join(dirPath, "etc", "apt", "trusted.gpg.d")
  ];
  for (const rootDir of roots) {
    try {
      const entries = await readdir(rootDir, { withFileTypes: true });
      for (const entry of entries) {
        if (!entry.isFile()) {
          continue;
        }
        const name = entry.name.toLowerCase();
        if (!name.endsWith(".gpg") && !name.endsWith(".asc") && !name.endsWith(".key")) {
          continue;
        }
        targets.push(path.join(rootDir, entry.name));
      }
    } catch {
      // ignore missing dirs
    }
  }

  const keys = [];
  const files = [];
  for (const filePath of targets) {
    const bytes = new Uint8Array(await readFile(filePath));
    try {
      const parsed = await parsePublicKeys(bytes);
      if (parsed.length > 0) {
        keys.push(...parsed);
        files.push(filePath);
      }
    } catch {
      // ignore invalid key file
    }
  }
  return { keys, files };
}

function commandExists(command) {
  const result = spawnSync(command, ["--version"], { encoding: "utf8" });
  return result.status === 0;
}

function isTemplateSuite(value) {
  const suite = String(value ?? "");
  if (!suite) {
    return true;
  }
  return suite.includes("{{") || suite.includes("}}") || suite.includes("${") || suite.includes("}");
}

async function extractKeysFromDeb(debPath, tempDir) {
  const extractDir = path.join(tempDir, `deb-${randomUUID()}`);
  await ensureDir(extractDir);
  let extracted = false;

  if (commandExists("tar")) {
    const tarResult = spawnSync("tar", ["-xf", debPath, "-C", extractDir], {
      encoding: "utf8"
    });
    if (tarResult.status === 0) {
      extracted = true;
    }
  }

  if (!extracted && commandExists("ar") && commandExists("tar")) {
    const listResult = spawnSync("ar", ["t", debPath], { encoding: "utf8" });
    if (listResult.status === 0) {
      const lines = String(listResult.stdout ?? "")
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter(Boolean);
      const dataEntry = lines.find((name) => name.startsWith("data.tar"));
      if (dataEntry) {
        const dataPath = path.join(tempDir, `${randomUUID()}-${dataEntry}`);
        const extractResult = spawnSync("ar", ["p", debPath, dataEntry], {
          maxBuffer: 1024 * 1024 * 50
        });
        if (extractResult.status === 0) {
          await writeFile(dataPath, extractResult.stdout ?? Buffer.alloc(0));
          const tarResult = spawnSync("tar", ["-xf", dataPath, "-C", extractDir], {
            encoding: "utf8"
          });
          if (tarResult.status === 0) {
            extracted = true;
          }
        }
      }
    }
  }

  if (!extracted) {
    return { ok: false, error: "Unable to extract deb (tar/ar missing or failed)" };
  }

  const { keys, files } = await extractKeysFromDirectory(extractDir);
  if (keys.length === 0) {
    return { ok: false, error: "No key files found in deb" };
  }
  return { ok: true, keys, files };
}

function buildKeyEntry({
  id,
  vendor,
  label,
  sourceUrl,
  sourceUrls,
  fingerprints,
  outputPath,
  notes,
  createdAt,
  keyCount
}) {
  const entry = {
    id,
    vendor,
    label,
    expectedFingerprints: fingerprints,
    outputPath,
    status: "active",
    createdAt,
    keyCount
  };
  if (sourceUrls && sourceUrls.length > 1) {
    entry.sourceUrls = sourceUrls;
  } else {
    entry.sourceUrl = sourceUrl;
  }
  if (notes) {
    entry.notes = notes;
  }
  return entry;
}

function suggestKeyId(vendor, label, fingerprint) {
  const suffix = fingerprint.slice(-16).toLowerCase();
  return normalizeSlug([vendor, label, suffix].filter(Boolean).join("-"));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const curatedPath = args.input ?? path.join(root, "data", "discovery", "curated.json");
  const keysPath = args.keys ?? path.join(root, "catalog", "keys.json");
  const outPath =
    args.output ?? path.join(root, "data", "discovery", "auto-key-report.json");
  const tempDir = args.tempDir ?? path.join(root, "data", "discovery", "tmp", "auto-keys");
  const timeoutMs = Number.parseInt(args.timeoutMs ?? "15000", 10);
  const maxKeyringPackages = Number.parseInt(args["max-keyring-packages"] ?? "3", 10);
  const dryRun = Boolean(args["dry-run"]);
  const verify = args.verify === undefined ? true : Boolean(args.verify);
  const doSignature = args.signature === undefined ? true : Boolean(args.signature);
  const doKeyring = args.keyring === undefined ? true : Boolean(args.keyring);
  const maxRepos = args["max-repos"] ? Number.parseInt(args["max-repos"], 10) : null;

  const keyserverTemplates = (args.keyservers ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  const keyservers =
    keyserverTemplates.length > 0
      ? keyserverTemplates
      : [
          "https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x{keyId}",
          "https://keys.openpgp.org/vks/v1/by-keyid/0x{keyId}",
          "https://pgp.mit.edu/pks/lookup?op=get&search=0x{keyId}"
        ];

  const [curated, keysCatalog] = await Promise.all([
    readJson(curatedPath),
    readJson(keysPath)
  ]);

  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }

  const fingerprintToId = new Map();
  for (const key of keysCatalog.keys) {
    for (const fingerprint of getKeyFingerprintsFromEntry(key)) {
      fingerprintToId.set(fingerprint, key.id);
    }
  }

  const missing = [];
  for (const repo of curated) {
    const keyId = matchKeyId(repo, keysCatalog);
    if (!keyId) {
      missing.push(repo);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    inputCount: curated.length,
    missingCount: missing.length,
    entries: []
  };

  const reposToProcess = maxRepos ? missing.slice(0, maxRepos) : missing;
  const total = reposToProcess.length;

  for (const [index, repo] of reposToProcess.entries()) {
    const entry = {
      repoId: repo.repoId ?? repo.baseUrl,
      baseUrl: repo.baseUrl ?? null,
      suites: (repo.suites ?? []).map((suite) => suite.suite),
      methods: {},
      addedKeyIds: [],
      existingKeyIds: [],
      errors: []
    };

    console.log(`[keys] ${index + 1}/${total} ${repo.baseUrl ?? repo.repoId ?? "repo"}`);

    if (!repo.baseUrl) {
      entry.errors.push({ stage: "repo", error: "Missing baseUrl" });
      report.entries.push(entry);
      continue;
    }

    const suites = (repo.suites ?? []).filter((suiteEntry) => !isTemplateSuite(suiteEntry.suite));
    const suiteArtifacts = [];
    for (const suiteEntry of suites) {
      const suite = suiteEntry.suite;
      if (!suite) {
        continue;
      }
      const artifacts = await fetchSuiteArtifacts({
        baseUrl: repo.baseUrl,
        suite,
        tempDir,
        timeoutMs
      });
      suiteArtifacts.push(artifacts);
    }

    if (doSignature) {
      const signatureResult = { keyIds: [], found: null, errors: [] };
      const keyIds = new Set();
      for (const artifacts of suiteArtifacts) {
        for (const id of artifacts.keyIds ?? []) {
          keyIds.add(id);
        }
      }
      signatureResult.keyIds = Array.from(keyIds);

      for (const keyId of signatureResult.keyIds) {
        const fetched = await fetchKeyFromServers(keyId, keyservers, timeoutMs);
        if (!fetched.ok) {
          signatureResult.errors.push({
            keyId,
            errors: fetched.errors ?? []
          });
          continue;
        }
        const armored = await normalizeArmored(fetched.keys);
        if (verify) {
          const verified = await verifyKeyForRepo({
            keyArmored: armored,
            suiteArtifacts,
            tempDir
          });
          if (!verified.ok) {
            signatureResult.errors.push({ keyId, error: verified.error });
            continue;
          }
        }
        signatureResult.found = {
          keyId,
          url: fetched.url,
          fingerprints: fetched.fingerprints,
          armored
        };
        break;
      }
      entry.methods.signature = signatureResult;

      if (signatureResult.found) {
        const fingerprints = signatureResult.found.fingerprints.map(normalizeFingerprint);
        const existing = fingerprints
          .map((fp) => fingerprintToId.get(fp))
          .filter(Boolean);
        if (existing.length > 0) {
          entry.existingKeyIds.push(...existing);
        } else if (!dryRun) {
          const hostname = new URL(repo.baseUrl).hostname;
          const vendor = normalizeSlug(hostname.split(".").slice(-2, -1)[0] ?? hostname);
          const label = `${hostname} signing key`;
          const id = suggestKeyId(vendor, label, fingerprints[0]);
          const outputPath = path.posix.join("keys", `${id}.asc`);
          const notes = `Discovered via InRelease signature for ${repo.baseUrl}.`;
          const keyEntry = buildKeyEntry({
            id,
            vendor,
            label,
            sourceUrl: signatureResult.found.url,
            fingerprints: Array.from(new Set(fingerprints)).sort(),
            outputPath,
            notes,
            createdAt: new Date().toISOString(),
            keyCount: fingerprints.length
          });
          const resolvedOutput = ensureRepoPath(outputPath);
          await writeFile(resolvedOutput, signatureResult.found.armored, "utf8");
          keysCatalog.keys.push(keyEntry);
          entry.addedKeyIds.push(id);
          for (const fp of fingerprints) {
            fingerprintToId.set(fp, id);
          }
        }
      }
    }

    if (doKeyring && entry.addedKeyIds.length === 0) {
      const keyringResult = { packages: [], errors: [], found: null };
      for (const suiteEntry of suites) {
        const suite = suiteEntry.suite;
        if (!suite) {
          continue;
        }
        const base = repo.baseUrl.replace(/\/$/, "");
        const releaseUrl = `${base}/dists/${suite}/Release`;
        const releaseBytes = await fetchBytesMaybe(releaseUrl, { timeoutMs });
        if (!releaseBytes) {
          keyringResult.errors.push({ suite, error: "Release not found" });
          continue;
        }
        const parsed = parseReleaseFile(Buffer.from(releaseBytes).toString("utf8"));
        const components = suiteEntry.components ?? parsed.fields.Components?.split(/\s+/) ?? [];
        const arches = suiteEntry.architectures ?? ["amd64", "all"];

        const packageIndexes = [];
        for (const component of components.length > 0 ? components : [""]) {
          for (const arch of arches) {
            const basePath = component
              ? `${component}/binary-${arch}/Packages`
              : `binary-${arch}/Packages`;
            const selected = selectPackagesPath(parsed.checksums, basePath);
            if (selected) {
              packageIndexes.push({ component, arch, path: selected });
            }
          }
        }

        for (const indexEntry of packageIndexes) {
          const url = `${base}/dists/${suite}/${indexEntry.path}`;
          const bytes = await fetchBytesMaybe(url, { timeoutMs });
          if (!bytes) {
            keyringResult.errors.push({ suite, url, error: "Packages index missing" });
            continue;
          }
          let text = "";
          try {
            text = decompressPackagesFile(indexEntry.path, bytes);
          } catch (error) {
            keyringResult.errors.push({
              suite,
              url,
              error: error instanceof Error ? error.message : String(error)
            });
            continue;
          }
          const stanzas = parsePackagesStanzas(text);
          const keyringStanzas = stanzas.filter((item) => isKeyringPackage(item.Package));
          if (keyringStanzas.length === 0) {
            continue;
          }
          const latest = selectLatestPackages(keyringStanzas);
          const limited = latest.slice(0, maxKeyringPackages);
          for (const pkg of limited) {
            const filename = pkg.Filename ?? "";
            if (!filename) {
              continue;
            }
            const pkgUrl = `${base}/${filename.replace(/^\//, "")}`;
            keyringResult.packages.push({
              suite,
              package: pkg.Package ?? "",
              version: pkg.Version ?? "",
              url: pkgUrl
            });
            const debBytes = await fetchBytesMaybe(pkgUrl, { timeoutMs });
            if (!debBytes) {
              keyringResult.errors.push({ suite, url: pkgUrl, error: "deb download failed" });
              continue;
            }
            const debPath = await writeTempFile(
              tempDir,
              `deb-${randomUUID()}.deb`,
              debBytes
            );
            const extracted = await extractKeysFromDeb(debPath, tempDir);
            if (!extracted.ok) {
              keyringResult.errors.push({ suite, url: pkgUrl, error: extracted.error });
              continue;
            }
            const fingerprints = keyFingerprints(extracted.keys).map(normalizeFingerprint);
            if (fingerprints.length === 0) {
              keyringResult.errors.push({ suite, url: pkgUrl, error: "No key fingerprints" });
              continue;
            }
            const armored = await normalizeArmored(extracted.keys);
            if (verify) {
              const verified = await verifyKeyForRepo({
                keyArmored: armored,
                suiteArtifacts,
                tempDir
              });
              if (!verified.ok) {
                keyringResult.errors.push({ suite, url: pkgUrl, error: verified.error });
                continue;
              }
            }
            keyringResult.found = {
              url: pkgUrl,
              fingerprints,
              armored,
              package: pkg.Package ?? "",
              version: pkg.Version ?? ""
            };
            break;
          }
          if (keyringResult.found) {
            break;
          }
        }
        if (keyringResult.found) {
          break;
        }
      }

      entry.methods.keyring = keyringResult;

      if (keyringResult.found) {
        const fingerprints = keyringResult.found.fingerprints.map(normalizeFingerprint);
        const existing = fingerprints
          .map((fp) => fingerprintToId.get(fp))
          .filter(Boolean);
        if (existing.length > 0) {
          entry.existingKeyIds.push(...existing);
        } else if (!dryRun) {
          const hostname = new URL(repo.baseUrl).hostname;
          const vendor = normalizeSlug(hostname.split(".").slice(-2, -1)[0] ?? hostname);
          const label = `${hostname} keyring`;
          const id = suggestKeyId(vendor, label, fingerprints[0]);
          const outputPath = path.posix.join("keys", `${id}.asc`);
          const notes = `Discovered via keyring package ${keyringResult.found.package} from ${repo.baseUrl}.`;
          const sourceUrls = fingerprints.map(
            (fp) =>
              `https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x${fp}`
          );
          const keyEntry = buildKeyEntry({
            id,
            vendor,
            label,
            sourceUrl: sourceUrls[0],
            sourceUrls,
            fingerprints: Array.from(new Set(fingerprints)).sort(),
            outputPath,
            notes,
            createdAt: new Date().toISOString(),
            keyCount: fingerprints.length
          });
          const resolvedOutput = ensureRepoPath(outputPath);
          await writeFile(resolvedOutput, keyringResult.found.armored, "utf8");
          keysCatalog.keys.push(keyEntry);
          entry.addedKeyIds.push(id);
          for (const fp of fingerprints) {
            fingerprintToId.set(fp, id);
          }
        }
      }
    }

    report.entries.push(entry);
  }

  await writeJson(outPath, report);

  if (!dryRun) {
    const catalogData = JSON.stringify(keysCatalog, null, 2) + "\n";
    await writeFile(keysPath, catalogData, "utf8");
  }
  console.log(`Wrote ${report.entries.length} entries to ${outPath}`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
