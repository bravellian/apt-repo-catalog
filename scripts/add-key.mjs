import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { TextDecoder } from "node:util";
import {
  fetchBytes,
  sniffContentType,
  parsePublicKeys,
  normalizeArmored,
  keyFingerprints,
  sha256Hex
} from "./lib/openpgp-utils.mjs";

const root = process.cwd();
const catalogPath = path.join(root, "catalog", "keys.json");
const indexPath = path.join(root, "keys", "index.json");
const decoder = new TextDecoder("utf-8", { fatal: false });

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    if (key === "force") {
      args.force = true;
      continue;
    }
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferVendor(hostname) {
  const parts = hostname.split(".").filter(Boolean);
  if (parts.length >= 2) {
    return normalizeSlug(parts[parts.length - 2]);
  }
  return normalizeSlug(hostname);
}

function inferLabel(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "key";
  }
  const last = segments[segments.length - 1];
  const trimmed = last.replace(/\.(asc|gpg|pgp|txt)$/i, "");
  return normalizeSlug(trimmed) || "key";
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

function parseCatalog(raw) {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  return parsed;
}

function normalizeFingerprints(values) {
  return values.map((value) => String(value).replace(/\s+/g, "").toUpperCase());
}

function validateFingerprints(id, expected, actual) {
  const expectedSet = new Set(normalizeFingerprints(expected));
  const actualSet = new Set(normalizeFingerprints(actual));
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

function assertNotHtml(bytes) {
  const text = decoder.decode(bytes).toLowerCase();
  if (text.includes("<html")) {
    throw new Error("Downloaded content appears to be HTML, not a key");
  }
}

function assertArmored(armored) {
  if (!armored.includes("BEGIN PGP PUBLIC KEY BLOCK")) {
    throw new Error("Normalized key data is missing PGP PUBLIC KEY BLOCK header");
  }
  if (armored.length < 200) {
    throw new Error("Normalized key data is too short to be valid");
  }
}

function suggestedId(vendor, label, fingerprint) {
  const suffix = fingerprint.slice(-16);
  return [vendor, label, suffix].filter(Boolean).join("-");
}

function parseTags(value) {
  if (!value) {
    return undefined;
  }
  const tags = value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return tags.length > 0 ? tags : undefined;
}

function ensureUniqueEntry(catalog, id, sourceUrl, force) {
  const existingIdIndex = catalog.keys.findIndex((entry) => entry.id === id);
  const existingUrlEntry = catalog.keys.find(
    (entry) => entry.sourceUrl === sourceUrl || entry.key_url === sourceUrl
  );

  if (existingIdIndex !== -1 && !force) {
    throw new Error(`Key id ${id} already exists. Use --force to overwrite.`);
  }

  if (existingUrlEntry && existingUrlEntry.id !== id && !force) {
    throw new Error(
      `Key sourceUrl already exists for id ${existingUrlEntry.id}. Use --force to overwrite.`
    );
  }

  return existingIdIndex;
}

function writeCatalogEntry(catalog, entry, existingIndex) {
  if (existingIndex === -1) {
    catalog.keys.push(entry);
  } else {
    catalog.keys.splice(existingIndex, 1, entry);
  }
}

async function updateIndex(entry, downloadedBytes, armored) {
  const retrievedAt = new Date().toISOString();
  const cachedBytes = new Uint8Array(Buffer.from(armored, "utf8"));
  const fingerprints = entry.expectedFingerprints ?? [];
  const primaryFingerprint = fingerprints[0] ?? "";
  const contentType = sniffContentType(downloadedBytes);
  const payload = {
    id: entry.id,
    vendor: entry.vendor,
    label: entry.label,
    status: entry.status ?? "active",
    sourceUrl: entry.sourceUrl,
    retrievedAt,
    fingerprints,
    keyCount: entry.keyCount ?? fingerprints.length,
    downloaded: {
      sha256: sha256Hex(downloadedBytes),
      sizeBytes: downloadedBytes.length,
      contentType: contentType === "armored" || contentType === "binary" ? contentType : "unknown"
    },
    cached: {
      sha256: sha256Hex(cachedBytes),
      sizeBytes: cachedBytes.length,
      outputPath: entry.outputPath
    },
    hints: {
      primaryFingerprint,
      fingerprintSuffix16: primaryFingerprint.slice(-16)
    }
  };

  let index = { keys: [] };
  try {
    const raw = await readFile(indexPath, "utf8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.keys)) {
      index = parsed;
    }
  } catch {
    // Missing index is ok; create a new one.
  }

  const existingIndex = index.keys.findIndex((item) => item.id === entry.id);
  if (existingIndex === -1) {
    index.keys.push(payload);
  } else {
    index.keys.splice(existingIndex, 1, payload);
  }

  const data =
    JSON.stringify(
      {
        generatedAt: retrievedAt,
        keyCount: index.keys.length,
        keys: index.keys
      },
      null,
      2
    ) + "\n";
  await writeFile(indexPath, data, "utf8");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.url) {
    throw new Error("Missing required --url argument");
  }

  const parsedUrl = new URL(args.url);
  const vendor = normalizeSlug(args.vendor || inferVendor(parsedUrl.hostname));
  const purpose = normalizeSlug(inferLabel(parsedUrl.pathname));
  const label = args.label ? args.label : purpose;
  const tags = parseTags(args.tags);
  if (args.documentationUrl !== undefined && args.documentationUrl.trim() === "") {
    throw new Error("documentationUrl must be a non-empty string");
  }
  if (args.notes !== undefined && args.notes.trim() === "") {
    throw new Error("notes must be a non-empty string");
  }

  const downloadedBytes = await fetchBytes(args.url);
  assertNotHtml(downloadedBytes);

  const keys = await parsePublicKeys(downloadedBytes);
  const fingerprints = keyFingerprints(keys);
  if (fingerprints.length === 0) {
    throw new Error("No fingerprints detected from downloaded key content");
  }

  const id = normalizeSlug(
    args.id || suggestedId(vendor, purpose, fingerprints[0])
  );
  if (!id) {
    throw new Error("Unable to determine id");
  }

  const outputPath = path.posix.join("keys", `${id}.asc`);
  const armored = await normalizeArmored(keys);
  assertArmored(armored);

  const catalogRaw = await readFile(catalogPath, "utf8");
  const catalog = parseCatalog(catalogRaw);
  const existingIndex = ensureUniqueEntry(catalog, id, args.url, args.force);

  const entry = {
    id,
    vendor,
    label,
    sourceUrl: args.url,
    expectedFingerprints: normalizeFingerprints(fingerprints).sort(),
    outputPath,
    status: "active",
    documentationUrl: args.documentationUrl,
    tags,
    notes: args.notes,
    createdAt: new Date().toISOString(),
    keyCount: keys.length
  };

  console.log("Key addition summary:");
  console.log(`- id: ${entry.id}`);
  console.log(`- vendor: ${entry.vendor}`);
  console.log(`- label: ${entry.label}`);
  console.log(`- sourceUrl: ${entry.sourceUrl}`);
  console.log(`- outputPath: ${entry.outputPath}`);
  console.log(`- fingerprints: ${entry.expectedFingerprints.join(", ")}`);
  if (entry.documentationUrl) {
    console.log(`- documentationUrl: ${entry.documentationUrl}`);
  }
  if (entry.tags?.length) {
    console.log(`- tags: ${entry.tags.join(", ")}`);
  }
  if (existingIndex !== -1) {
    console.log("- existing entry will be replaced (--force)");
  }

  const resolvedOutputPath = ensureRepoPath(outputPath);
  await writeFile(resolvedOutputPath, armored, "utf8");

  writeCatalogEntry(catalog, entry, existingIndex);
  const catalogData = JSON.stringify(catalog, null, 2) + "\n";
  await writeFile(catalogPath, catalogData, "utf8");

  await updateIndex(entry, downloadedBytes, armored);

  const validateKeys = spawnSync("node", ["scripts/validate-keys.mjs"], {
    stdio: "inherit",
    cwd: root
  });
  if (validateKeys.status !== 0) {
    process.exit(validateKeys.status ?? 1);
  }

  await access(resolvedOutputPath);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
