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
    return "NOT CHECKED";
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
    "",
    "## Table of contents",
    "- [Current OSes](#current-oses)",
    "- [By Operating System](#by-operating-system)",
    "- [Legacy OSes](#legacy-oses)",
    "- [By Vendor](#by-vendor)",
    "",
    "_Note: only the active OS list is checked daily; legacy entries are kept for reference._",
    ""
  ].join("\n");

  const repos = [...reposCatalog.repos].sort((a, b) =>
    String(a.id ?? "").localeCompare(String(b.id ?? ""))
  );

  const activeOses = new Set(["ubuntu-24.04", "ubuntu-22.04", "debian-13", "debian-12", "debian-11"]);
  const activeRepos = repos.filter((repo) => activeOses.has(repo.os));
  const legacyRepos = repos.filter((repo) => !activeOses.has(repo.os));

  const vendorMap = new Map();
  for (const repo of repos) {
    const vendor = repo.name ?? "unknown";
    if (!vendorMap.has(vendor)) {
      vendorMap.set(vendor, []);
    }
    vendorMap.get(vendor).push(repo);
  }

  const osMap = new Map();
  for (const repo of activeRepos) {
    const os = repo.os ?? "unknown";
    if (!osMap.has(os)) {
      osMap.set(os, []);
    }
    osMap.get(os).push(repo);
  }

  function buildRows(targetRepos, options = {}) {
    const { includeStatus = true } = options;
    const rows = [];
    if (includeStatus) {
      rows.push("| Docs | Label | OS | Host | FP Suffix16 | Status | Last Checked |");
      rows.push("| --- | --- | --- | --- | --- | --- | --- |");
    } else {
      rows.push("| Docs | Label | OS | Host | FP Suffix16 |");
      rows.push("| --- | --- | --- | --- | --- |");
    }

    for (const repo of targetRepos) {
      const repoId = repo.id ?? "";
      const os = repo.os ?? "";
      const repoLabel = getRepoLabel(repo);
      const host = parseSourceHost(repo.source ?? "");
      const keyId = getKeyId(repo) ?? "";
      const keyEntry = keyMap.get(keyId);
      const indexEntry = indexMap.get(keyId);
      const suffix =
        getFingerprintSuffixFromIndex(indexEntry) || getFingerprintSuffixForKey(keyEntry);
      const docs = `docs/repos/${repoId}.md`;

      if (includeStatus) {
        const status = getStatus(latest, os, repoId);
        const lastChecked = getLastChecked(latest, os);
        rows.push(
          `| [Docs](${docs}) | ${repoLabel} | ${os} | ${host} | ${suffix} | ${status} | ${lastChecked} |`
        );
      } else {
        rows.push(
          `| [Docs](${docs}) | ${repoLabel} | ${os} | ${host} | ${suffix} |`
        );
      }
    }

    return rows.join("\n");
  }

  const content = [
    header,
    "## Current OSes",
    "",
    buildRows(activeRepos, { includeStatus: true }),
    "",
    "## By Operating System",
    "",
    ...Array.from(osMap.keys())
      .sort((a, b) => a.localeCompare(b))
      .flatMap((os) => {
        const items = osMap
          .get(os)
          .sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? "")));
        const lines = [];
        lines.push("<details>");
        lines.push(`<summary>${os} (${items.length})</summary>`);
        lines.push("");
        for (const repo of items) {
          const repoId = repo.id ?? "";
          const label = getRepoLabel(repo);
          const docs = `docs/repos/${repoId}.md`;
          lines.push(`- [${label} (${repoId})](${docs})`);
        }
        lines.push("");
        lines.push("</details>");
        lines.push("");
        return lines;
      }),
    "",
    "## Legacy OSes",
    "",
    "<details>",
    "<summary>Legacy OSes</summary>",
    "",
    buildRows(legacyRepos, { includeStatus: false }),
    "",
    "</details>",
    "",
    "## By Vendor",
    "",
    ...Array.from(vendorMap.keys())
      .sort((a, b) => a.localeCompare(b))
      .flatMap((vendor) => {
        const items = vendorMap
          .get(vendor)
          .sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? "")));
        const lines = [];
        lines.push("<details>");
        lines.push(`<summary>${vendor} (${items.length})</summary>`);
        lines.push("");
        for (const repo of items) {
          const repoId = repo.id ?? "";
          const label = getRepoLabel(repo);
          const docs = `docs/repos/${repoId}.md`;
          const os = repo.os ?? "";
          lines.push(`- [${label} (${os})](${docs})`);
        }
        lines.push("");
        lines.push("</details>");
        lines.push("");
        return lines;
      }),
    ""
  ].join("\n");
  await writeFile(outputPath, content, "utf8");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
