import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const reposPath = path.join(root, "catalog", "repos.json");
const latestPath = path.join(root, "reports", "latest.json");
const keysIndexPath = path.join(root, "keys", "index.json");
const outputPath = path.join(root, "CATALOG.md");

function safeJson(raw, fallback) {
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function readJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => safeJson(raw, null));
}

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id ?? null;
}

function normalizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

function fingerprintSuffix(value) {
  const normalized = normalizeFingerprint(value);
  if (!normalized) {
    return "";
  }
  return normalized.slice(-16);
}

function getFingerprintSuffixForKey(keyEntry) {
  if (!keyEntry) {
    return "";
  }
  const expected = Array.isArray(keyEntry.expectedFingerprints)
    ? keyEntry.expectedFingerprints
    : keyEntry.expectedFingerprint
      ? [keyEntry.expectedFingerprint]
      : keyEntry.fingerprint
        ? [keyEntry.fingerprint]
        : [];
  return fingerprintSuffix(expected[0]);
}

function getFingerprintSuffixFromIndex(indexEntry) {
  if (!indexEntry) {
    return "";
  }
  if (indexEntry.hints?.fingerprintSuffix16) {
    return indexEntry.hints.fingerprintSuffix16;
  }
  const fingerprints = Array.isArray(indexEntry.fingerprints) ? indexEntry.fingerprints : [];
  return fingerprintSuffix(fingerprints[0]);
}

function parseSourceHost(source) {
  if (!source) {
    return "";
  }
  let remaining = source.trim();
  if (remaining.startsWith("deb ")) {
    remaining = remaining.slice(4).trimStart();
  }
  if (remaining.startsWith("[")) {
    const closing = remaining.indexOf("]");
    if (closing !== -1) {
      remaining = remaining.slice(closing + 1).trimStart();
    }
  }
  const parts = remaining.split(/\s+/);
  if (parts.length === 0) {
    return "";
  }
  try {
    return new URL(parts[0]).hostname;
  } catch {
    return "";
  }
}

function getRepoLabel(repo) {
  return repo.label ?? repo.name ?? repo.id ?? "";
}

function getStatus(latest, os, repoId) {
  if (!latest || !latest.byOs || !latest.byOs[os]) {
    return "UNKNOWN";
  }
  const failed = latest.byOs[os].failedRepoIds ?? [];
  return failed.includes(repoId) ? "FAIL" : "PASS";
}

function getLastChecked(latest, os) {
  if (!latest) {
    return "";
  }
  return latest.byOs?.[os]?.generatedAt ?? latest.generatedAt ?? "";
}

async function main() {
  const [keysCatalog, reposCatalog] = await Promise.all([
    readJson(keysPath),
    readJson(reposPath)
  ]);

  if (!keysCatalog?.keys || !Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!reposCatalog?.repos || !Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }

  let latest = null;
  try {
    await access(latestPath);
    latest = await readJson(latestPath);
  } catch {
    latest = null;
  }

  let keysIndex = null;
  try {
    await access(keysIndexPath);
    keysIndex = await readJson(keysIndexPath);
  } catch {
    keysIndex = null;
  }

  const keyMap = new Map(keysCatalog.keys.map((key) => [key.id, key]));
  const indexMap = new Map(
    Array.isArray(keysIndex?.keys) ? keysIndex.keys.map((item) => [item.id, item]) : []
  );

  const header = [
    "# Catalog",
    "",
    "_This file is generated from catalog data and smoke test reports. Do not edit manually._",
    ""
  ].join("\n");

  const rows = [];
  rows.push(
    "| Repo ID | OS | Label | Host | Key ID | FP Suffix16 | Status | Last Checked | Docs |"
  );
  rows.push("| --- | --- | --- | --- | --- | --- | --- | --- | --- |");

  const repos = [...reposCatalog.repos].sort((a, b) =>
    String(a.id ?? "").localeCompare(String(b.id ?? ""))
  );

  for (const repo of repos) {
    const repoId = repo.id ?? "";
    const os = repo.os ?? "";
    const repoLabel = getRepoLabel(repo);
    const host = parseSourceHost(repo.source ?? "");
    const keyId = getKeyId(repo) ?? "";
    const keyEntry = keyMap.get(keyId);
    const indexEntry = indexMap.get(keyId);
    const suffix =
      getFingerprintSuffixFromIndex(indexEntry) || getFingerprintSuffixForKey(keyEntry);
    const status = getStatus(latest, os, repoId);
    const lastChecked = getLastChecked(latest, os);
    const docs = `docs/repos/${repoId}.md`;

    rows.push(
      `| ${repoId} | ${os} | ${repoLabel} | ${host} | ${keyId} | ${suffix} | ${status} | ${lastChecked} | [doc](${docs}) |`
    );
  }

  const content = `${header}${rows.join("\n")}\n`;
  await writeFile(outputPath, content, "utf8");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
