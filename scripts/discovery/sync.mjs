import path from "node:path";
import { readJson, writeJson, normalizeSlug, uniqueSorted } from "./utils.mjs";

const ubuntuCodenameToVersion = {
  jammy: "22.04",
  noble: "24.04",
  focal: "20.04",
  bionic: "18.04",
  xenial: "16.04",
  trusty: "14.04",
  mantic: "23.10",
  lunar: "23.04",
  kinetic: "22.10",
  groovy: "20.10",
  hirsute: "21.04",
  impish: "21.10",
  disco: "19.04",
  cosmic: "18.10",
  zesty: "17.04",
  yakkety: "16.10",
  wily: "15.10",
  plucky: "25.04",
  questing: "25.10",
  oracular: "24.10"
};

const debianCodenameToVersion = {
  bullseye: "11",
  bookworm: "12",
  trixie: "13",
  buster: "10",
  stretch: "9",
  jessie: "8",
  wheezy: "7"
};

function pickReleaseLabel(repo) {
  const suites = repo.verification?.suites ?? [];
  const release = suites.find((suite) => suite.release)?.release;
  if (release?.Origin) {
    return release.Origin;
  }
  if (release?.Label) {
    return release.Label;
  }
  return null;
}

function matchKeyId(repo, keysCatalog) {
  const keyUrls = repo.keyHints?.keyUrls ?? [];
  const fingerprints = repo.keyHints?.fingerprints ?? [];
  const keyUrlSet = new Set(keyUrls.map((value) => value.toLowerCase()));
  const fingerprintSet = new Set(fingerprints.map((value) => value.replace(/\s+/g, "").toUpperCase()));

  for (const key of keysCatalog.keys ?? []) {
    const urls = [key.sourceUrl, key.key_url, key.documentationUrl]
      .filter(Boolean)
      .map((value) => value.toLowerCase());
    if (urls.some((url) => keyUrlSet.has(url))) {
      return key.id;
    }
    const expected = Array.isArray(key.expectedFingerprints)
      ? key.expectedFingerprints
      : key.expectedFingerprint
        ? [key.expectedFingerprint]
        : key.fingerprint
          ? [key.fingerprint]
          : [];
    const normalized = expected.map((value) => String(value).replace(/\s+/g, "").toUpperCase());
    if (normalized.some((fp) => fingerprintSet.has(fp))) {
      return key.id;
    }
  }
  return null;
}

function resolveOs(distroFamily, suite) {
  const suiteValue = String(suite ?? "").toLowerCase();
  if (distroFamily === "ubuntu") {
    if (ubuntuCodenameToVersion[suiteValue]) {
      return `ubuntu-${ubuntuCodenameToVersion[suiteValue]}`;
    }
    return "ubuntu";
  }
  if (distroFamily === "debian") {
    if (debianCodenameToVersion[suiteValue]) {
      return `debian-${debianCodenameToVersion[suiteValue]}`;
    }
    return "debian";
  }
  return null;
}

function buildRepoId({ baseUrl, suite, components }) {
  const host = (() => {
    try {
      return new URL(baseUrl).hostname;
    } catch {
      return "repo";
    }
  })();
  const componentsSlug = components.length > 0 ? components.join("-") : "default";
  const base = normalizeSlug(`${host}-${suite}-${componentsSlug}`);
  return base;
}

export function toCatalogEntries(repos, keysCatalog) {
  const entries = [];
  const skipped = [];

  for (const repo of repos) {
    const keyId = matchKeyId(repo, keysCatalog);
    const suites = repo.suites ?? [];
    const labelBase = pickReleaseLabel(repo) ?? new URL(repo.baseUrl).hostname;

    for (const suiteEntry of suites) {
      const suite = suiteEntry.suite ?? "";
      const components = suiteEntry.components ?? [];
      const osValue = resolveOs(repo.distroFamily, suite);
      if (!keyId) {
        skipped.push({
          reason: "missing-key",
          baseUrl: repo.baseUrl,
          suite
        });
        continue;
      }
      if (!osValue) {
        skipped.push({
          reason: "unknown-os",
          baseUrl: repo.baseUrl,
          suite
        });
        continue;
      }
      const source = `deb ${repo.baseUrl} ${suite} ${components.join(" ")}`.trim();
      const id = buildRepoId({ baseUrl: repo.baseUrl, suite, components });
      entries.push({
        id,
        label: `${labelBase} - ${suite} - ${components.join(" ") || "default"}`,
        os: osValue,
        name: normalizeSlug(labelBase),
        source,
        keyId,
        allowMissingDocsUrl: true,
        notes: "Discovered via GitHub mining",
        tags: uniqueSorted([repo.distroFamily, new URL(repo.baseUrl).hostname].filter(Boolean))
      });
    }
  }

  entries.sort((a, b) => a.id.localeCompare(b.id));
  return { entries, skipped };
}

export async function syncCatalog({ curatedPath, outputPath, keysPath, mainCatalogPath, writeCatalog }) {
  const curated = await readJson(curatedPath);
  const keysCatalog = await readJson(keysPath);
  const { entries, skipped } = toCatalogEntries(curated, keysCatalog);

  await writeJson(outputPath, { repos: entries });

  if (writeCatalog) {
    const mainCatalog = await readJson(mainCatalogPath);
    const existingIds = new Set((mainCatalog.repos ?? []).map((repo) => repo.id));
    const merged = [...(mainCatalog.repos ?? [])];
    for (const entry of entries) {
      if (!existingIds.has(entry.id)) {
        merged.push(entry);
        existingIds.add(entry.id);
      }
    }
    merged.sort((a, b) => a.id.localeCompare(b.id));
    await writeJson(mainCatalogPath, { repos: merged });
  }

  return { entries, skipped };
}
