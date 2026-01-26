import path from "node:path";
import { readFile, writeFile, mkdir } from "node:fs/promises";

const root = process.cwd();

function parseArgs(argv) {
  const args = { _: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      args._.push(value);
      continue;
    }
    const key = value.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      args[key] = true;
      continue;
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function normalizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function getKeyFingerprints(entry) {
  if (Array.isArray(entry.expectedFingerprints)) {
    return entry.expectedFingerprints.map(normalizeFingerprint);
  }
  if (entry.expectedFingerprint) {
    return [normalizeFingerprint(entry.expectedFingerprint)];
  }
  if (entry.fingerprint) {
    return [normalizeFingerprint(entry.fingerprint)];
  }
  return [];
}

function getKeyUrls(entry) {
  const urls = [];
  if (Array.isArray(entry.sourceUrls)) {
    urls.push(...entry.sourceUrls);
  }
  if (entry.sourceUrl) {
    urls.push(entry.sourceUrl);
  }
  if (entry.key_url) {
    urls.push(entry.key_url);
  }
  if (entry.documentationUrl) {
    urls.push(entry.documentationUrl);
  }
  return uniqueSorted(urls.map((value) => value.toLowerCase()));
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const curatedPath = args.input ?? path.join(root, "data", "discovery", "curated.json");
  const keysPath = args.keys ?? path.join(root, "catalog", "keys.json");
  const reportPath =
    args.report ?? path.join(root, "data", "discovery", "auto-key-report.json");
  const dryRun = Boolean(args["dry-run"]);

  const [curated, keysCatalog, report] = await Promise.all([
    readJson(curatedPath),
    readJson(keysPath),
    readJson(reportPath)
  ]);

  if (!Array.isArray(curated)) {
    throw new Error("curated.json must be an array");
  }
  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!Array.isArray(report.entries)) {
    throw new Error("auto-key-report.json must include entries");
  }

  const keysById = new Map(keysCatalog.keys.map((key) => [key.id, key]));
  const reportByBaseUrl = new Map(
    report.entries
      .filter((entry) => entry.baseUrl)
      .map((entry) => [entry.baseUrl, entry])
  );

  let updated = 0;
  for (const repo of curated) {
    const baseUrl = repo.baseUrl ?? "";
    const reportEntry = reportByBaseUrl.get(baseUrl);
    if (!reportEntry) {
      continue;
    }
    const keyIds = uniqueSorted([
      ...(reportEntry.addedKeyIds ?? []),
      ...(reportEntry.existingKeyIds ?? [])
    ]);
    if (keyIds.length === 0) {
      continue;
    }

    const fingerprints = [];
    const keyUrls = [];
    for (const keyId of keyIds) {
      const keyEntry = keysById.get(keyId);
      if (!keyEntry) {
        continue;
      }
      fingerprints.push(...getKeyFingerprints(keyEntry));
      keyUrls.push(...getKeyUrls(keyEntry));
    }

    if (fingerprints.length === 0 && keyUrls.length === 0) {
      continue;
    }

    repo.keyHints = repo.keyHints ?? { fingerprints: [], keyUrls: [], signedByPaths: [] };
    const existingFingerprints = repo.keyHints.fingerprints ?? [];
    const existingKeyUrls = repo.keyHints.keyUrls ?? [];

    repo.keyHints.fingerprints = uniqueSorted([
      ...existingFingerprints.map(normalizeFingerprint),
      ...fingerprints
    ]);
    repo.keyHints.keyUrls = uniqueSorted([
      ...existingKeyUrls.map((value) => value.toLowerCase()),
      ...keyUrls
    ]);

    updated += 1;
  }

  if (!dryRun) {
    await writeJson(curatedPath, curated);
  }

  console.log(`Updated ${updated} curated entries with key hints.`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
