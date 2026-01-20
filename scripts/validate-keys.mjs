import { readFile, access } from "node:fs/promises";
import path from "node:path";
import {
  fetchBytes,
  sniffContentType,
  parsePublicKeys,
  keyFingerprints,
  deriveKeyIdsFromFingerprints,
  sha256Hex
} from "./lib/openpgp-utils.mjs";

const root = process.cwd();
const catalogPath = path.join(root, "catalog", "keys.json");
const outputIndexPath = path.join(root, "keys", "index.json");

function normalizeFingerprint(value) {
  return String(value).replace(/\s+/g, "").toUpperCase();
}

function normalizeExpected(entry) {
  if (Array.isArray(entry.expectedFingerprints)) {
    return entry.expectedFingerprints.map(normalizeFingerprint);
  }
  if (entry.expectedFingerprint) {
    return [normalizeFingerprint(entry.expectedFingerprint)];
  }
  if (entry.fingerprint) {
    return [normalizeFingerprint(entry.fingerprint)];
  }
  throw new Error(`Key ${entry.id} missing expected fingerprints`);
}

function getSourceUrl(entry) {
  return entry.sourceUrl ?? entry.key_url;
}

function getOutputPath(entry) {
  return entry.outputPath ?? entry.keyring;
}

function compareFingerprints(id, expected, actual) {
  const expectedSet = new Set(expected.map(normalizeFingerprint));
  const actualSet = new Set(actual.map(normalizeFingerprint));

  const expectedSorted = Array.from(expectedSet).sort();
  const actualSorted = Array.from(actualSet).sort();

  const sameLength = expectedSorted.length === actualSorted.length;
  const sameItems =
    sameLength &&
    expectedSorted.every((value, index) => value === actualSorted[index]);

  if (!sameItems) {
    console.error(`Fingerprint mismatch for ${id}`);
    console.error(`Expected (${expectedSorted.length}): ${expectedSorted.join(", ")}`);
    console.error(`Actual   (${actualSorted.length}): ${actualSorted.join(", ")}`);
    return false;
  }

  return true;
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

async function main() {
  const raw = await readFile(catalogPath, "utf8");
  const catalog = JSON.parse(raw);

  if (!Array.isArray(catalog.keys) || catalog.keys.length === 0) {
    throw new Error("catalog/keys.json must include a non-empty keys array");
  }

  let failed = false;
  const keyIds = new Set(catalog.keys.map((entry) => entry.id));

  for (const entry of catalog.keys) {
    if (!entry.id) {
      throw new Error("Key entry missing id");
    }

    const sourceUrl = getSourceUrl(entry);
    if (!sourceUrl) {
      throw new Error(`Key ${entry.id} missing sourceUrl`);
    }

    const outputPath = getOutputPath(entry);
    if (!outputPath) {
      throw new Error(`Key ${entry.id} missing outputPath`);
    }

    const expectedFingerprints = normalizeExpected(entry);

    if (entry.documentationUrl !== undefined) {
      if (typeof entry.documentationUrl !== "string" || entry.documentationUrl.trim() === "") {
        throw new Error(`Key ${entry.id} documentationUrl must be a non-empty string`);
      }
    }

    if (entry.tags !== undefined) {
      if (!Array.isArray(entry.tags) || entry.tags.length === 0) {
        throw new Error(`Key ${entry.id} tags must be a non-empty array`);
      }
      if (entry.tags.some((tag) => typeof tag !== "string" || tag.trim() === "")) {
        throw new Error(`Key ${entry.id} tags must be non-empty strings`);
      }
    }

    if (entry.notes !== undefined) {
      if (typeof entry.notes !== "string" || entry.notes.trim() === "") {
        throw new Error(`Key ${entry.id} notes must be a non-empty string`);
      }
    }

    if (entry.createdAt !== undefined) {
      const created = new Date(entry.createdAt);
      if (Number.isNaN(created.getTime())) {
        throw new Error(`Key ${entry.id} createdAt must be a valid ISO timestamp`);
      }
    }

    if (entry.rotatesFrom !== undefined) {
      if (typeof entry.rotatesFrom !== "string" || entry.rotatesFrom.trim() === "") {
        throw new Error(`Key ${entry.id} rotatesFrom must be a non-empty string`);
      }
      if (!keyIds.has(entry.rotatesFrom)) {
        throw new Error(`Key ${entry.id} rotatesFrom references unknown key ${entry.rotatesFrom}`);
      }
    }

    const downloadedBytes = await fetchBytes(sourceUrl);
    const contentType = sniffContentType(downloadedBytes);
    if (contentType === "html") {
      throw new Error(`Downloaded content for ${entry.id} appears to be HTML`);
    }
    const downloadedKeys = await parsePublicKeys(downloadedBytes);
    if (downloadedKeys.length === 0) {
      throw new Error(`No public keys found for ${entry.id}`);
    }
    const downloadedFingerprints = keyFingerprints(downloadedKeys);

    if (!compareFingerprints(entry.id, expectedFingerprints, downloadedFingerprints)) {
      failed = true;
    }

    const resolvedOutputPath = ensureRepoPath(outputPath);
    await access(resolvedOutputPath);

    const cachedBytes = new Uint8Array(await readFile(resolvedOutputPath));
    const cachedKeys = await parsePublicKeys(cachedBytes);
    if (cachedKeys.length === 0) {
      throw new Error(`No public keys found in cached file for ${entry.id}`);
    }
    const cachedFingerprints = keyFingerprints(cachedKeys);

    if (!compareFingerprints(entry.id, expectedFingerprints, cachedFingerprints)) {
      failed = true;
    }
  }

  if (failed) {
    process.exit(1);
  }

  await access(outputIndexPath);
  const indexRaw = await readFile(outputIndexPath, "utf8");
  const index = JSON.parse(indexRaw);
  if (!Array.isArray(index.keys)) {
    throw new Error("keys/index.json must include a keys array");
  }

  const activeIds = new Set(
    catalog.keys
      .filter((entry) => entry.status !== "deprecated")
      .map((entry) => entry.id)
  );

  const indexById = new Map();
  for (const item of index.keys) {
    if (item?.id) {
      indexById.set(item.id, item);
    }
  }

  for (const entry of catalog.keys) {
    if (!activeIds.has(entry.id)) {
      continue;
    }
    const indexEntry = indexById.get(entry.id);
    if (!indexEntry) {
      console.error(`keys/index.json missing entry for ${entry.id}`);
      failed = true;
      continue;
    }

    const expectedFingerprints = normalizeExpected(entry);
    if (!compareFingerprints(entry.id, expectedFingerprints, indexEntry.fingerprints ?? [])) {
      failed = true;
    }

    if (Array.isArray(indexEntry.keyIds)) {
      const derived = deriveKeyIdsFromFingerprints(expectedFingerprints);
      if (indexEntry.keyIds.length !== derived.length) {
        console.error(`keys/index.json keyIds length mismatch for ${entry.id}`);
        failed = true;
      } else {
        for (let i = 0; i < derived.length; i += 1) {
          const expected = derived[i];
          const actual = indexEntry.keyIds[i];
          if (
            actual?.fingerprint !== expected.fingerprint ||
            actual?.keyIdLong !== expected.keyIdLong ||
            actual?.keyIdShort !== expected.keyIdShort
          ) {
            console.error(`keys/index.json keyIds mismatch for ${entry.id}`);
            failed = true;
            break;
          }
        }
      }
    }

    const outputPath = getOutputPath(entry);
    const resolvedOutputPath = ensureRepoPath(outputPath);
    const cachedBytes = new Uint8Array(await readFile(resolvedOutputPath));
    const cachedSha = sha256Hex(cachedBytes);

    if (indexEntry.cached?.sha256 && indexEntry.cached.sha256 !== cachedSha) {
      console.error(`keys/index.json cached sha256 mismatch for ${entry.id}`);
      failed = true;
    }
  }

  if (failed) {
    process.exit(1);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
