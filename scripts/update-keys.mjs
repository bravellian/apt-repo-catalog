import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import {
  fetchBytes,
  sniffContentType,
  parsePublicKeys,
  normalizeArmored,
  keyFingerprints,
  getUserIds,
  deriveKeyIdsFromFingerprints,
  sha256Hex
} from "./lib/openpgp-utils.mjs";

const root = process.cwd();
const catalogPath = path.join(root, "catalog", "keys.json");
const outputIndexPath = path.join(root, "keys", "index.json");
const outputMetaDir = path.join(root, "keys", "meta");

async function readOptionalText(filePath) {
  try {
    return await readFile(filePath, "utf8");
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }
    throw error;
  }
}

async function readOptionalJson(filePath) {
  const raw = await readOptionalText(filePath);
  if (!raw) {
    return null;
  }
  return JSON.parse(raw);
}

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

function getSourceUrls(entry) {
  if (Array.isArray(entry.sourceUrls) && entry.sourceUrls.length > 0) {
    return entry.sourceUrls;
  }
  if (entry.sourceUrl) {
    return [entry.sourceUrl];
  }
  if (entry.key_url) {
    return [entry.key_url];
  }
  return [];
}

function getOutputPath(entry) {
  return entry.outputPath ?? entry.keyring;
}

function getVendor(entry) {
  return entry.vendor ?? entry.name ?? entry.id;
}

function getLabel(entry) {
  return entry.label ?? entry.name ?? entry.id;
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

function buildMetadata({
  entry,
  sourceUrl,
  sourceUrls,
  outputPath,
  retrievedAt,
  fingerprints,
  keyCount,
  userIds,
  keyIds,
  downloaded,
  cached
}) {
  const primaryFingerprint = fingerprints[0] ?? "";
  return {
    id: entry.id,
    vendor: getVendor(entry),
    label: getLabel(entry),
    status: entry.status ?? "active",
    sourceUrl,
    sourceUrls,
    retrievedAt,
    fingerprints,
    keyCount,
    userIds,
    primaryUserId: userIds?.[0] ?? null,
    keyIds,
    downloaded,
    cached: {
      ...cached,
      outputPath
    },
    hints: {
      primaryFingerprint,
      fingerprintSuffix16: primaryFingerprint.slice(-16)
    }
  };
}

async function main() {
  const raw = await readFile(catalogPath, "utf8");
  const catalog = JSON.parse(raw);

  if (!Array.isArray(catalog.keys) || catalog.keys.length === 0) {
    throw new Error("catalog/keys.json must include a non-empty keys array");
  }

  await mkdir(outputMetaDir, { recursive: true });

  const retrievedAt = new Date().toISOString();
  const indexEntries = [];
  let failed = false;
  let changed = false;

  for (const entry of catalog.keys) {
    if (!entry.id) {
      throw new Error("Key entry missing id");
    }

    const sourceUrls = getSourceUrls(entry);
    if (sourceUrls.length === 0) {
      throw new Error(`Key ${entry.id} missing sourceUrl`);
    }

    const outputPath = getOutputPath(entry);
    if (!outputPath) {
      throw new Error(`Key ${entry.id} missing outputPath`);
    }

    const expectedFingerprints = normalizeExpected(entry);

    const downloadedBytesList = [];
    let downloadedKeys = [];
    for (const url of sourceUrls) {
      const downloadedBytes = await fetchBytes(url);
      const contentType = sniffContentType(downloadedBytes);
      if (contentType === "html") {
        throw new Error(`Downloaded content for ${entry.id} appears to be HTML`);
      }
      const keys = await parsePublicKeys(downloadedBytes);
      if (keys.length === 0) {
        throw new Error(`No public keys found for ${entry.id}`);
      }
      downloadedBytesList.push(downloadedBytes);
      downloadedKeys = downloadedKeys.concat(keys);
    }
    const downloadedFingerprints = keyFingerprints(downloadedKeys).sort();
    const userIds = getUserIds(downloadedKeys);
    const keyIds = deriveKeyIdsFromFingerprints(downloadedFingerprints);

    if (!compareFingerprints(entry.id, expectedFingerprints, downloadedFingerprints)) {
      failed = true;
    }

    const armored = await normalizeArmored(downloadedKeys);
    const resolvedOutputPath = ensureRepoPath(outputPath);
    const existingArmored = await readOptionalText(resolvedOutputPath);

    const cachedBytes = new Uint8Array(Buffer.from(armored, "utf8"));
    const combinedBytes = new Uint8Array(
      downloadedBytesList.reduce((acc, chunk) => acc + chunk.length, 0)
    );
    let offset = 0;
    for (const chunk of downloadedBytesList) {
      combinedBytes.set(chunk, offset);
      offset += chunk.length;
    }
    const metaPath = path.join(outputMetaDir, `${entry.id}.json`);
    const existingMeta = await readOptionalJson(metaPath);
    const candidateMeta = buildMetadata({
      entry,
      sourceUrl: sourceUrls[0],
      sourceUrls,
      outputPath,
      retrievedAt: existingMeta?.retrievedAt ?? retrievedAt,
      fingerprints: downloadedFingerprints,
      keyCount: downloadedKeys.length,
      userIds,
      keyIds,
      downloaded: {
        sha256: sha256Hex(combinedBytes),
        sizeBytes: combinedBytes.length,
        contentType: sourceUrls.length > 1 ? "multi" : sniffContentType(downloadedBytesList[0])
      },
      cached: {
        sha256: sha256Hex(cachedBytes),
        sizeBytes: cachedBytes.length
      }
    });

    const existingMetaRaw = existingMeta ? JSON.stringify(existingMeta) : null;
    const candidateMetaRaw = JSON.stringify(candidateMeta);
    const metaChanged = existingMetaRaw !== candidateMetaRaw;
    const armoredChanged = existingArmored !== armored;

    if (armoredChanged) {
      await writeFile(resolvedOutputPath, armored, "utf8");
    }

    if (metaChanged) {
      const updatedMeta = buildMetadata({
        entry,
        sourceUrl: sourceUrls[0],
        sourceUrls,
        outputPath,
        retrievedAt,
        fingerprints: downloadedFingerprints,
        keyCount: downloadedKeys.length,
        userIds,
        keyIds,
        downloaded: {
          sha256: sha256Hex(combinedBytes),
          sizeBytes: combinedBytes.length,
          contentType: sourceUrls.length > 1 ? "multi" : sniffContentType(downloadedBytesList[0])
        },
        cached: {
          sha256: sha256Hex(cachedBytes),
          sizeBytes: cachedBytes.length
        }
      });
      const metaData = JSON.stringify(updatedMeta, null, 2) + "\n";
      await writeFile(metaPath, metaData, "utf8");
      indexEntries.push(updatedMeta);
      changed = true;
    } else {
      indexEntries.push(candidateMeta);
    }
  }

  if (failed) {
    process.exit(1);
  }

  const existingIndex = await readOptionalJson(outputIndexPath);
  if (!existingIndex || changed) {
    const payload =
      JSON.stringify(
        {
          generatedAt: retrievedAt,
          keyCount: indexEntries.length,
          keys: indexEntries
        },
        null,
        2
      ) + "\n";
    await writeFile(outputIndexPath, payload, "utf8");
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
