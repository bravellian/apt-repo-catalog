import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const latestPath = path.join(root, "reports", "latest.json");
const keysIndexPath = path.join(root, "keys", "index.json");
const outputPath = path.join(root, "CATALOG.md");
const dataReposDir = path.join(root, "data", "repos");

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

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function baseUrlHintsOs(baseUrl) {
  if (!baseUrl) {
    return [];
  }
  try {
    const { hostname, pathname } = new URL(baseUrl);
    const combined = `${hostname}${pathname}`.toLowerCase();
    const hints = [];
    if (combined.includes("/ubuntu/") || combined.includes("ubuntu")) {
      hints.push("Ubuntu");
    }
    if (combined.includes("/debian/") || combined.includes("debian")) {
      hints.push("Debian");
    }
    if (combined.includes("/linuxmint/") || combined.includes("linuxmint")) {
      hints.push("Linux Mint");
    }
    if (combined.includes("/pop-os/") || combined.includes("pop-os") || combined.includes("popos")) {
      hints.push("Pop!_OS");
    }
    if (combined.includes("/kali/") || combined.includes("kali")) {
      hints.push("Kali");
    }
    if (combined.includes("raspbian")) {
      hints.push("Raspbian");
    }
    return Array.from(new Set(hints));
  } catch {
    return [];
  }
}

function deriveOsHints(baseUrl, suitesMeta) {
  const observed = new Set();
  const suites = Array.isArray(suitesMeta?.suites) ? suitesMeta.suites : [];
  for (const suite of suites) {
    const oses = Array.isArray(suite.observedOs) ? suite.observedOs : [];
    for (const os of oses) {
      const family = String(os).split("-")[0];
      if (!family || family === "generic") {
        continue;
      }
      if (family === "ubuntu") {
        observed.add("Ubuntu");
      } else if (family === "debian") {
        observed.add("Debian");
      } else if (family === "linuxmint") {
        observed.add("Linux Mint");
      } else if (family === "popos" || family === "pop") {
        observed.add("Pop!_OS");
      } else if (family === "kali") {
        observed.add("Kali");
      } else {
        observed.add(family);
      }
    }
  }
  const inferred = baseUrlHintsOs(baseUrl);
  const merged = Array.from(new Set([...observed, ...inferred]));
  return merged;
}

function normalizeLabel(label, suitesMeta, baseUrl) {
  if (!label) {
    return label;
  }
  const suites = Array.isArray(suitesMeta?.suites)
    ? suitesMeta.suites.map((entry) => entry.suite).filter(Boolean)
    : [];
  if (suites.length <= 1) {
    return label;
  }
  let normalized = label;
  if (suites.length > 0) {
    const suitePattern = suites.map(escapeRegex).join("|");
    if (suitePattern) {
      const suiteRegex = new RegExp(`\\b(${suitePattern})\\b`, "ig");
      normalized = normalized.replace(suiteRegex, "");
    }
  }
  const osHints = deriveOsHints(baseUrl, suitesMeta);
  const shouldStripOs = osHints.length === 0;
  if (shouldStripOs && /\b(ubuntu|debian|linux mint|pop!_?os|kali)\b/i.test(normalized)) {
    normalized = normalized.replace(/\b\d+(?:\.\d+)?\b/g, "");
  }
  normalized = normalized.replace(/\(\s*([^)]+?)\s*\)/g, (_, content) => {
    const trimmed = content.trim();
    return trimmed ? `(${trimmed})` : "";
  });
  normalized = normalized.replace(/\(\s*\)/g, "");
  normalized = normalized.replace(/\s{2,}/g, " ");
  normalized = normalized.replace(/\s+-\s+-\s+/g, " - ");
  normalized = normalized.replace(/\s+-\s*$/g, "");
  normalized = normalized.trim();
  return normalized || label;
}

function getDisplayLabel(repo, suitesMeta) {
  const baseUrl = repo.baseUrl ?? repo.base_url ?? "";
  return normalizeLabel(getRepoLabel(repo), suitesMeta, baseUrl);
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

  const suitesByRepo = new Map();
  await Promise.all(
    reposCatalog.repos.map(async (repo) => {
      const repoId = repo.id ?? "";
      if (!repoId) {
        return;
      }
      const suitesPath = path.join(dataReposDir, repoId, "suites.json");
      const suitesMeta = await readOptionalJson(suitesPath);
      suitesByRepo.set(repoId, suitesMeta);
    })
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
      rows.push("| Docs | Label | Host | OS hints | FP Suffix16 | Status | Last Checked |");
      rows.push("| --- | --- | --- | --- | --- | --- | --- |");
    } else {
      rows.push("| Docs | Label | Host | OS hints | FP Suffix16 |");
      rows.push("| --- | --- | --- | --- | --- |");
    }

    for (const repo of targetRepos) {
      const repoId = repo.id ?? "";
      const suitesMeta = suitesByRepo.get(repoId);
      const repoLabel = getDisplayLabel(repo, suitesMeta);
      const host = parseBaseHost(repo.baseUrl ?? repo.base_url ?? "");
      const keyId = getKeyId(repo) ?? "";
      const keyEntry = keyMap.get(keyId);
      const indexEntry = indexMap.get(keyId);
      const suffix =
        getFingerprintSuffixFromIndex(indexEntry) || getFingerprintSuffixForKey(keyEntry);
      const docs = `docs/repos/${repoId}.md`;
      const osHints = deriveOsHints(repo.baseUrl ?? repo.base_url ?? "", suitesMeta);
      const osHintLabel = osHints.length > 0 ? osHints.join(", ") : "(not listed)";

      if (includeStatus) {
        const status = getStatusForRepo(latestSummary, repoId);
        const lastChecked = getLastCheckedForRepo(latestSummary, repoId);
        rows.push(
          `| [Docs](${docs}) | ${repoLabel} | ${host} | ${osHintLabel} | ${suffix} | ${status} | ${lastChecked} |`
        );
      } else {
        rows.push(`| [Docs](${docs}) | ${repoLabel} | ${host} | ${osHintLabel} | ${suffix} |`);
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
          const suitesMeta = suitesByRepo.get(repoId);
          const label = getDisplayLabel(repo, suitesMeta);
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
          const suitesMeta = suitesByRepo.get(repoId);
          const label = getDisplayLabel(repo, suitesMeta);
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
