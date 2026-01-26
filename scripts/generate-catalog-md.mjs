import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
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

function parseBaseHost(baseUrl) {
  if (!baseUrl) {
    return "";
  }
  try {
    return new URL(baseUrl).hostname;
  } catch {
    return "";
  }
}

function getRepoLabel(repo) {
  return repo.label ?? repo.name ?? repo.id ?? "";
}

function summarizeLatest(latest) {
  const byRepo = new Map();
  if (!latest || !Array.isArray(latest.results)) {
    return { byRepo, generatedAt: latest?.generatedAt ?? "" };
  }
  for (const result of latest.results) {
    const repoId = result.repoId ?? "";
    if (!repoId) {
      continue;
    }
    if (!byRepo.has(repoId)) {
      byRepo.set(repoId, { statuses: [], lastChecked: "" });
    }
    const entry = byRepo.get(repoId);
    if (result.status) {
      entry.statuses.push(result.status);
    }
    const checkedAt = result.checkedAt ?? "";
    if (checkedAt && checkedAt > entry.lastChecked) {
      entry.lastChecked = checkedAt;
    }
  }
  return { byRepo, generatedAt: latest.generatedAt ?? "" };
}

function getStatusForRepo(summary, repoId) {
  if (!summary || !summary.byRepo || !summary.byRepo.has(repoId)) {
    return "NOT CHECKED";
  }
  const statuses = summary.byRepo.get(repoId).statuses ?? [];
  if (statuses.includes("failed")) {
    return "FAIL";
  }
  if (statuses.includes("passed")) {
    return "PASS";
  }
  if (statuses.includes("skipped")) {
    return "SKIP";
  }
  return "NOT CHECKED";
}

function getLastCheckedForRepo(summary, repoId) {
  if (!summary || !summary.byRepo || !summary.byRepo.has(repoId)) {
    return summary?.generatedAt ?? "";
  }
  return summary.byRepo.get(repoId).lastChecked || summary.generatedAt || "";
}

async function main() {
  const [keysCatalog, reposCatalog] = await Promise.all([
    readJson(keysPath),
    loadReposCatalog({ root })
  ]);

  if (!keysCatalog?.keys || !Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!reposCatalog?.repos || !Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
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
    "- [All Repositories](#all-repositories)",
    "- [By Vendor](#by-vendor)",
    "- [By Host](#by-host)",
    "",
    "• • •",
    ""
  ].join("\n");

  const repos = [...reposCatalog.repos].sort((a, b) =>
    String(a.id ?? "").localeCompare(String(b.id ?? ""))
  );

  const vendorMap = new Map();
  for (const repo of repos) {
    const vendor = repo.name ?? "unknown";
    if (!vendorMap.has(vendor)) {
      vendorMap.set(vendor, []);
    }
    vendorMap.get(vendor).push(repo);
  }

  const hostMap = new Map();
  for (const repo of repos) {
    const host = parseBaseHost(repo.baseUrl ?? repo.base_url ?? "") || "unknown";
    if (!hostMap.has(host)) {
      hostMap.set(host, []);
    }
    hostMap.get(host).push(repo);
  }

  const latestSummary = summarizeLatest(latest);

  function buildRows(targetRepos, options = {}) {
    const { includeStatus = true } = options;
    const rows = [];
    if (includeStatus) {
      rows.push("| Docs | Label | Host | FP Suffix16 | Status | Last Checked |");
      rows.push("| --- | --- | --- | --- | --- | --- |");
    } else {
      rows.push("| Docs | Label | Host | FP Suffix16 |");
      rows.push("| --- | --- | --- | --- |");
    }

    for (const repo of targetRepos) {
      const repoId = repo.id ?? "";
      const repoLabel = getRepoLabel(repo);
      const host = parseBaseHost(repo.baseUrl ?? repo.base_url ?? "");
      const keyId = getKeyId(repo) ?? "";
      const keyEntry = keyMap.get(keyId);
      const indexEntry = indexMap.get(keyId);
      const suffix =
        getFingerprintSuffixFromIndex(indexEntry) || getFingerprintSuffixForKey(keyEntry);
      const docs = `docs/repos/${repoId}.md`;

      if (includeStatus) {
        const status = getStatusForRepo(latestSummary, repoId);
        const lastChecked = getLastCheckedForRepo(latestSummary, repoId);
        rows.push(
          `| [Docs](${docs}) | ${repoLabel} | ${host} | ${suffix} | ${status} | ${lastChecked} |`
        );
      } else {
        rows.push(`| [Docs](${docs}) | ${repoLabel} | ${host} | ${suffix} |`);
      }
    }

    return rows.join("\n");
  }

  const content = [
    header,
    "## All repositories",
    "",
    buildRows(repos),
    "",
    "• • •",
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
          lines.push(`- [${label} (${repoId})](${docs})`);
        }
        lines.push("");
        lines.push("</details>");
        lines.push("");
        return lines;
      }),
    "## By Host",
    "",
    ...Array.from(hostMap.keys())
      .sort((a, b) => a.localeCompare(b))
      .flatMap((host) => {
        const items = hostMap
          .get(host)
          .sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? "")));
        const lines = [];
        lines.push("<details>");
        lines.push(`<summary>${host} (${items.length})</summary>`);
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
