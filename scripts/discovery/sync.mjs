import * as path from "node:path";
import { readJson, writeJson, normalizeSlug, uniqueSorted } from "./utils.mjs";
import { loadReposCatalog, writeReposCatalog } from "../lib/repos-catalog.mjs";

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

function buildRepoId({ baseUrl }) {
  const host = (() => {
    try {
      return new URL(baseUrl).hostname;
    } catch {
      return "repo";
    }
  })();
  return normalizeSlug(host);
}

export function toCatalogEntries(repos, keysCatalog) {
  const entries = [];
  const skipped = [];
  const seen = new Set();

  for (const repo of repos) {
    const keyId = matchKeyId(repo, keysCatalog);
    if (!keyId) {
      skipped.push({
        reason: "missing-key",
        baseUrl: repo.baseUrl
      });
      continue;
    }
    const labelBase = pickReleaseLabel(repo) ?? new URL(repo.baseUrl).hostname;
    const id = buildRepoId({ baseUrl: repo.baseUrl });
    if (seen.has(id)) {
      continue;
    }
    seen.add(id);
    entries.push({
      id,
      label: labelBase,
      name: normalizeSlug(labelBase),
      baseUrl: repo.baseUrl,
      keyId,
      allowMissingDocsUrl: true,
      notes: "Discovered via GitHub mining",
      tags: uniqueSorted([repo.distroFamily, new URL(repo.baseUrl).hostname].filter(Boolean))
    });
  }

  entries.sort((a, b) => a.id.localeCompare(b.id));
  return { entries, skipped };
}

export async function syncCatalog({ curatedPath, outputPath, keysPath, writeCatalog, root }) {
  const curated = await readJson(curatedPath);
  const keysCatalog = await readJson(keysPath);
  const { entries, skipped } = toCatalogEntries(curated, keysCatalog);
  const byBaseUrl = new Map(curated.map((repo) => [repo.baseUrl, repo]));

  await writeJson(outputPath, { repos: entries });

  if (writeCatalog) {
    const mainCatalog = await loadReposCatalog({ root });
    const existingIds = new Set((mainCatalog.repos ?? []).map((repo) => repo.id));
    const merged = [...(mainCatalog.repos ?? [])];
    for (const entry of entries) {
      if (!existingIds.has(entry.id)) {
        merged.push(entry);
        existingIds.add(entry.id);
      }
    }
    merged.sort((a, b) => a.id.localeCompare(b.id));
    await writeReposCatalog({ root, repos: merged, preferDir: true, clean: true });

    const dataReposDir = path.join(root, "data", "repos");
    for (const entry of entries) {
      const sourceRepo = byBaseUrl.get(entry.baseUrl);
      if (!sourceRepo) {
        continue;
      }
      const suites = (sourceRepo.verification?.suites ?? sourceRepo.suites ?? []).map((suite) => ({
        suite: suite.suite,
        components: suite.components ?? [],
        architectures: suite.architectures ?? []
      }));
      await writeJson(path.join(dataReposDir, entry.id, "suites.json"), {
        generatedAt: new Date().toISOString(),
        repoId: entry.id,
        baseUrl: entry.baseUrl,
        keyId: entry.keyId,
        suites
      });
    }
  }

  return { entries, skipped };
}
