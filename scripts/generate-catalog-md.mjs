import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const latestPath = path.join(root, "reports", "latest.json");
const keysIndexPath = path.join(root, "keys", "index.json");
const osPath = path.join(root, "catalog", "os.json");
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
  const [keysCatalog, reposCatalog, osCatalog] = await Promise.all([
    readJson(keysPath),
    loadReposCatalog({ root }),
    readJson(osPath)
  ]);

  if (!keysCatalog?.keys || !Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!reposCatalog?.repos || !Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }
  if (!osCatalog?.oses || !Array.isArray(osCatalog.oses)) {
    throw new Error("catalog/os.json must include an oses array");
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
    "- [By Operating System](#by-operating-system)",
    "- [Legacy OSes](#legacy-oses)",
    "- [By Vendor](#by-vendor)",
    "",
    "_Note: only the active OS list is checked daily; legacy entries are kept for reference._",
    "",
    "• • •",
    ""
  ].join("\n");

  const repos = [...reposCatalog.repos].sort((a, b) =>
    String(a.id ?? "").localeCompare(String(b.id ?? ""))
  );

  const osMapCatalog = new Map(osCatalog.oses.map((entry) => [entry.id, entry]));
  const activeRepos = repos.filter((repo) => osMapCatalog.get(repo.os)?.status === "current");
  const legacyRepos = repos.filter((repo) => osMapCatalog.get(repo.os)?.status !== "current");

  const vendorMap = new Map();
  for (const repo of repos) {
    const vendor = repo.name ?? "unknown";
    if (!vendorMap.has(vendor)) {
      vendorMap.set(vendor, []);
    }
    vendorMap.get(vendor).push(repo);
  }

  function buildOsMap(reposForMap) {
    const map = new Map();
    for (const repo of reposForMap) {
      const os = repo.os ?? "unknown";
      if (!map.has(os)) {
        map.set(os, []);
      }
      map.get(os).push(repo);
    }
    return map;
  }

  const osMap = buildOsMap(activeRepos);
  const genericRepos =
    osMap
      .get("generic")
      ?.sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? ""))) ?? [];
  const legacyOsMap = buildOsMap(legacyRepos);

  function buildRows(targetRepos, options = {}) {
    const { includeStatus = true, includeOs = true } = options;
    const rows = [];
    if (includeStatus) {
      if (includeOs) {
        rows.push("| Docs | Label | OS | Host | FP Suffix16 | Status | Last Checked |");
        rows.push("| --- | --- | --- | --- | --- | --- | --- |");
      } else {
        rows.push("| Docs | Label | Host | FP Suffix16 | Status | Last Checked |");
        rows.push("| --- | --- | --- | --- | --- | --- |");
      }
    } else {
      if (includeOs) {
        rows.push("| Docs | Label | OS | Host | FP Suffix16 |");
        rows.push("| --- | --- | --- | --- | --- |");
      } else {
        rows.push("| Docs | Label | Host | FP Suffix16 |");
        rows.push("| --- | --- | --- | --- |");
      }
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
        if (includeOs) {
          rows.push(
            `| [Docs](${docs}) | ${repoLabel} | ${os} | ${host} | ${suffix} | ${status} | ${lastChecked} |`
          );
        } else {
          rows.push(
            `| [Docs](${docs}) | ${repoLabel} | ${host} | ${suffix} | ${status} | ${lastChecked} |`
          );
        }
      } else {
        if (includeOs) {
          rows.push(
            `| [Docs](${docs}) | ${repoLabel} | ${os} | ${host} | ${suffix} |`
          );
        } else {
          rows.push(
            `| [Docs](${docs}) | ${repoLabel} | ${host} | ${suffix} |`
          );
        }
      }
    }

    return rows.join("\n");
  }

  const content = [
    header,
    "## 🧭 By Operating System",
    "",
    "• • •",
    "",
    ...[
      {
        family: "ubuntu",
        title: "Ubuntu",
        channels: ["lts", "interim"],
        derivativeFamily: "ubuntu-derivative"
      },
      {
        family: "debian",
        title: "Debian",
        channels: ["testing", "stable", "oldstable"],
        derivativeFamily: "debian-derivative"
      }
    ].flatMap(({ family, title, channels, derivativeFamily }) => {
      const lines = [`### ${title}`, ""];
      for (const channel of channels) {
        const osEntries = osCatalog.oses.filter(
          (entry) =>
            entry.status === "current" && entry.family === family && entry.channel === channel
        );
        if (osEntries.length === 0) {
          continue;
        }
        lines.push(`#### ${channel.toUpperCase()}`);
        lines.push("");
        for (const entry of osEntries.sort((a, b) => a.id.localeCompare(b.id))) {
          const itemsForOs =
            osMap
              .get(entry.id)
              ?.sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? ""))) ?? [];
          const merged = [...itemsForOs, ...genericRepos];
          const seen = new Set();
          const items = merged.filter((item) => {
            const id = item.id ?? "";
            if (!id || seen.has(id)) {
              return false;
            }
            seen.add(id);
            return true;
          });
          lines.push("<details>");
          lines.push(`<summary>${entry.label} (${items.length})</summary>`);
          lines.push("");
          if (items.length > 0) {
            lines.push(buildRows(items, { includeStatus: false, includeOs: false }));
          } else {
            lines.push("_No repos in catalog for this OS._");
          }
          lines.push("");
          lines.push("</details>");
          lines.push("");
        }
      }

      if (derivativeFamily) {
        const derivativeEntries = osCatalog.oses.filter(
          (entry) => entry.status === "current" && entry.family === derivativeFamily
        );
        if (derivativeEntries.length > 0) {
          lines.push(`#### DERIVATIVES`);
          lines.push("");
          for (const entry of derivativeEntries.sort((a, b) => a.id.localeCompare(b.id))) {
          const itemsForOs =
            osMap
              .get(entry.id)
              ?.sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? ""))) ?? [];
          const merged = [...itemsForOs, ...genericRepos];
          const seen = new Set();
          const items = merged.filter((item) => {
            const id = item.id ?? "";
            if (!id || seen.has(id)) {
              return false;
            }
            seen.add(id);
            return true;
          });
          const inherits = entry.inheritsFrom ? ` (inherits ${entry.inheritsFrom})` : "";
          lines.push("<details>");
          lines.push(`<summary>${entry.label}${inherits} (${items.length})</summary>`);
          lines.push("");
            if (items.length > 0) {
              lines.push(buildRows(items, { includeStatus: false, includeOs: false }));
            } else {
              lines.push("_No repos in catalog for this OS._");
            }
            lines.push("");
            lines.push("</details>");
            lines.push("");
          }
        }
      }

      lines.push("");
      return lines;
    }),
    "",
    "## 🕰️ Legacy OSes",
    "",
    "<details>",
    "<summary>Legacy OSes</summary>",
    "",
    ...Array.from(legacyOsMap.keys())
      .sort((a, b) => a.localeCompare(b))
      .flatMap((os) => {
        const items = legacyOsMap
          .get(os)
          .sort((a, b) => String(a.id ?? "").localeCompare(String(b.id ?? "")));
        const lines = [];
        lines.push("<details>");
        lines.push(`<summary>${os} (${items.length})</summary>`);
        lines.push("");
        lines.push(buildRows(items, { includeStatus: false, includeOs: false }));
        lines.push("");
        lines.push("</details>");
        lines.push("");
        return lines;
      }),
    "",
    "</details>",
    "",
    "• • •",
    "",
    "## Generic (cross-distribution)",
    "",
    "_These repos are OS-agnostic and also listed under every current OS above._",
    "",
    "<details>",
    "<summary>Generic repositories</summary>",
    "",
    genericRepos.length > 0
      ? buildRows(genericRepos, { includeStatus: false, includeOs: false })
      : "_No generic repos in catalog._",
    "",
    "</details>",
    "",
    "• • •",
    "",
    "## 🏷️ By Vendor",
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
