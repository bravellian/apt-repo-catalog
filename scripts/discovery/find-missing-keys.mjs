import fs from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

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
  const raw = await fs.readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function writeJson(filePath, data) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function normalizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

function getKeyFingerprints(key) {
  const values = [];
  if (Array.isArray(key.expectedFingerprints)) {
    values.push(...key.expectedFingerprints);
  } else if (key.expectedFingerprint) {
    values.push(key.expectedFingerprint);
  } else if (key.fingerprint) {
    values.push(key.fingerprint);
  }
  return values.map(normalizeFingerprint).filter(Boolean);
}

function matchKeyId(repo, keysCatalog) {
  const keyUrls = repo.keyHints?.keyUrls ?? [];
  const fingerprints = repo.keyHints?.fingerprints ?? [];
  const keyUrlSet = new Set(keyUrls.map((value) => value.toLowerCase()));
  const fingerprintSet = new Set(fingerprints.map(normalizeFingerprint));

  for (const key of keysCatalog.keys ?? []) {
    const urls = [key.sourceUrl, key.key_url, key.documentationUrl]
      .filter(Boolean)
      .map((value) => value.toLowerCase());
    if (urls.some((url) => keyUrlSet.has(url))) {
      return key.id;
    }
    const expected = getKeyFingerprints(key);
    if (expected.some((fp) => fingerprintSet.has(fp))) {
      return key.id;
    }
  }
  return null;
}

function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function buildCandidateUrls(repo) {
  const urls = [];
  const keyUrls = repo.keyHints?.keyUrls ?? [];
  urls.push(...keyUrls);

  const signedByPaths = repo.keyHints?.signedByPaths ?? [];
  for (const signedBy of signedByPaths) {
    const name = path.basename(signedBy).replace(/\.key\.asc$/, ".asc");
    if (name) {
      urls.push(name);
    }
  }

  let base;
  try {
    base = new URL(repo.baseUrl);
  } catch {
    return uniqueSorted(urls);
  }

  const origin = base.origin;
  const basePath = base.pathname.replace(/\/$/, "");
  const bases = uniqueSorted([origin, `${origin}${basePath}`]);

  const suffixes = [
    "gpg",
    "gpgkey",
    "key",
    "keys",
    "key.asc",
    "key.gpg",
    "pubkey.asc",
    "pubkey.gpg",
    "archive.key",
    "archive.gpg",
    "keyring.gpg",
    "keyring.asc",
    "repo.key",
    "repo.gpg",
    "signing.key",
    "signing.gpg"
  ];

  for (const baseUrl of bases) {
    for (const suffix of suffixes) {
      urls.push(`${baseUrl}/${suffix}`);
      urls.push(`${baseUrl}/keys/${suffix}`);
      urls.push(`${baseUrl}/gpg/${suffix}`);
    }
  }

  return uniqueSorted(urls);
}

async function fetchBytes(url, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: "follow" });
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  } finally {
    clearTimeout(timeout);
  }
}

function extractFingerprint(filePath) {
  const result = spawnSync("gpg", ["--batch", "--show-keys", "--with-colons", filePath], {
    encoding: "utf8"
  });
  if (result.status !== 0) {
    const detail = `${result.stdout ?? ""}\n${result.stderr ?? ""}`.trim();
    return { ok: false, error: detail || "gpg failed" };
  }
  const lines = String(result.stdout ?? "").split(/\r?\n/);
  const fprLine = lines.find((line) => line.startsWith("fpr:"));
  if (!fprLine) {
    return { ok: false, error: "No fingerprint found" };
  }
  const parts = fprLine.split(":");
  const fingerprint = parts[9] ?? "";
  return fingerprint ? { ok: true, fingerprint } : { ok: false, error: "Fingerprint missing" };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const curatedPath = args.input ?? path.join(root, "data", "discovery", "curated.json");
  const keysPath = path.join(root, "catalog", "keys.json");
  const outPath = args.output ?? path.join(root, "data", "discovery", "missing-keys-report.json");
  const maxCandidates = Number.parseInt(args["max-candidates"] ?? "25", 10);
  const timeoutMs = Number.parseInt(args.timeoutMs ?? "10000", 10);
  const doFetch = Boolean(args.fetch);

  const [curated, keysCatalog] = await Promise.all([
    readJson(curatedPath),
    readJson(keysPath)
  ]);

  const missing = [];
  for (const repo of curated) {
    const keyId = matchKeyId(repo, keysCatalog);
    if (keyId) {
      continue;
    }
    missing.push(repo);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    inputCount: curated.length,
    missingCount: missing.length,
    entries: []
  };

  const tempDir = path.join(root, "data", "discovery", "tmp", "keys");
  await fs.mkdir(tempDir, { recursive: true });

  for (const repo of missing) {
    const index = report.entries.length + 1;
    const label = repo.repoId ?? repo.baseUrl ?? `repo-${index}`;
    if (doFetch) {
      console.log(`[keys] ${index}/${missing.length} ${label}`);
    }
    const candidates = buildCandidateUrls(repo).slice(0, maxCandidates);
    const entry = {
      repoId: repo.repoId ?? repo.baseUrl,
      baseUrl: repo.baseUrl ?? null,
      evidenceCount: Array.isArray(repo.evidence) ? repo.evidence.length : 0,
      keyHints: repo.keyHints ?? null,
      candidates,
      foundKeys: [],
      errors: []
    };

    if (doFetch) {
      for (const url of candidates) {
        try {
          const bytes = await fetchBytes(url, timeoutMs);
          const fileName = `key-${Buffer.from(url).toString("base64url").slice(0, 32)}.key`;
          const filePath = path.join(tempDir, fileName);
          await fs.writeFile(filePath, bytes);
          const fingerprintResult = extractFingerprint(filePath);
          if (fingerprintResult.ok) {
            entry.foundKeys.push({ url, fingerprint: fingerprintResult.fingerprint });
          } else {
            entry.errors.push({ url, error: fingerprintResult.error });
          }
        } catch (error) {
          entry.errors.push({ url, error: error instanceof Error ? error.message : String(error) });
        }
      }
    }

    report.entries.push(entry);
  }

  await writeJson(outPath, report);
  console.log(`Wrote ${report.entries.length} missing key entries to ${outPath}`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
