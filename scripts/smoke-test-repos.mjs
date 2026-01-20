import { readFile, writeFile, mkdir, readdir, stat, mkdtemp } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const reposPath = path.join(root, "catalog", "repos.json");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function toList(value) {
  if (!value) {
    return null;
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function readJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => JSON.parse(raw));
}

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id;
}

function getOutputPath(keyEntry, keyId) {
  return keyEntry.outputPath ?? keyEntry.keyring ?? path.join("keys", `${keyId}.asc`);
}

function stripDebPrefix(source) {
  const trimmed = source.trim();
  if (trimmed.startsWith("deb ")) {
    return trimmed.slice(4).trimStart();
  }
  return trimmed;
}

function classifyFailure(text) {
  const lower = text.toLowerCase();
  if (/no_pubkey|expkeysig|badsig/.test(lower)) {
    return "signature_drift";
  }
  if (/release file.*not found|inrelease.*not found|404/.test(lower)) {
    return "repo_drift";
  }
  if (
    /could not resolve|tls|connection timed out|temporary failure resolving/.test(
      lower
    )
  ) {
    return "connectivity";
  }
  return "apt_error";
}

function truncate(value, max = 8000) {
  if (!value || value.length <= max) {
    return value;
  }
  return `${value.slice(0, max)}\n...[truncated ${value.length - max} chars]`;
}

function sha256Hex(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

function normalizeRepoId(value) {
  return value.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
}

async function ensureAptDirs(baseDir, keyId) {
  const etcDir = path.join(baseDir, "etc", "apt");
  const sourceParts = path.join(etcDir, "sources.list.d");
  const listsPartial = path.join(baseDir, "var", "lib", "apt", "lists", "partial");
  const archivesPartial = path.join(
    baseDir,
    "var",
    "cache",
    "apt",
    "archives",
    "partial"
  );
  const keyringsDir = path.join(baseDir, "keyrings");

  await mkdir(sourceParts, { recursive: true });
  await mkdir(listsPartial, { recursive: true });
  await mkdir(archivesPartial, { recursive: true });
  await mkdir(keyringsDir, { recursive: true });
  await writeFile(path.join(etcDir, "sources.list"), "", "utf8");

  return {
    sourceListPath: path.join(sourceParts, "test.list"),
    keyringPath: path.join(keyringsDir, `${keyId}.gpg`),
    listsDir: path.join(baseDir, "var", "lib", "apt", "lists")
  };
}

async function findNewestInRelease(listsDir) {
  const entries = await readdir(listsDir);
  const candidates = entries.filter((name) => name.endsWith("InRelease"));
  if (candidates.length === 0) {
    return null;
  }
  let newest = null;
  let newestStat = null;
  for (const candidate of candidates) {
    const fullPath = path.join(listsDir, candidate);
    const info = await stat(fullPath);
    if (!newestStat || info.mtimeMs > newestStat.mtimeMs) {
      newestStat = info;
      newest = fullPath;
    }
  }
  return newest;
}

function parseInRelease(text) {
  const fields = {
    Origin: null,
    Label: null,
    Suite: null,
    Codename: null,
    Architectures: null,
    Components: null
  };
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^(Origin|Label|Suite|Codename|Architectures|Components):\s*(.*)$/);
    if (match) {
      fields[match[1]] = match[2].trim() || null;
    }
  }
  return fields;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const targetOs = args.os;
  if (!targetOs) {
    throw new Error("Missing required --os argument");
  }
  const onlyIds = toList(args["only-ids"]);
  const timeoutSeconds = Number.parseInt(args.timeoutSeconds ?? "30", 10);
  const outPath =
    args.out ?? path.join(root, "reports", "smoke", `${targetOs}.json`);

  if (Number.isNaN(timeoutSeconds) || timeoutSeconds <= 0) {
    throw new Error("timeoutSeconds must be a positive integer");
  }

  const [keysCatalog, reposCatalog] = await Promise.all([
    readJson(keysPath),
    readJson(reposPath)
  ]);

  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }

  const keyMap = new Map(keysCatalog.keys.map((key) => [key.id, key]));
  let repos = reposCatalog.repos.filter((repo) => repo.os === targetOs);
  if (onlyIds && onlyIds.length > 0) {
    const allowed = new Set(onlyIds);
    repos = repos.filter((repo) => allowed.has(repo.id));
  }

  const results = [];
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  const generatedAt = new Date().toISOString();

  for (const repo of repos) {
    const repoId = repo.id ?? "unknown";
    const keyId = getKeyId(repo);
    if (!keyId) {
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { source: repo.source ?? null, keyId: null },
        error: {
          exitCode: null,
          message: "Repo entry missing keyId",
          rawTail: null
        }
      });
      failed += 1;
      continue;
    }

    if (!repo.source) {
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { source: null, keyId },
        error: {
          exitCode: null,
          message: "Repo entry missing source",
          rawTail: null
        }
      });
      failed += 1;
      continue;
    }

    const keyEntry = keyMap.get(keyId);
    if (!keyEntry) {
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { source: repo.source, keyId },
        error: {
          exitCode: null,
          message: `Key ${keyId} not found`,
          rawTail: null
        }
      });
      failed += 1;
      continue;
    }

    const baseTemp = path.join(os.tmpdir(), "apt-smoke", normalizeRepoId(repoId));
    await mkdir(baseTemp, { recursive: true });
    const tempDir = await mkdtemp(path.join(baseTemp, "run-"));

    const { sourceListPath, keyringPath, listsDir } = await ensureAptDirs(
      tempDir,
      keyId
    );

    const keyPath = path.resolve(root, getOutputPath(keyEntry, keyId));
    const dearmor = spawnSync(
      "gpg",
      ["--batch", "--dearmor", "--output", keyringPath, keyPath],
      { encoding: "utf8" }
    );
    if (dearmor.status !== 0) {
      const rawTail = truncate(`${dearmor.stdout ?? ""}\n${dearmor.stderr ?? ""}`.trim());
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { source: repo.source, keyId },
        error: {
          exitCode: dearmor.status,
          message: "gpg --dearmor failed",
          rawTail
        }
      });
      failed += 1;
      continue;
    }

    const sourceLine = `deb [signed-by=${keyringPath}] ${stripDebPrefix(repo.source)}`;
    await writeFile(sourceListPath, `${sourceLine}\n`, "utf8");

    const aptArgs = [
      "update",
      "-o",
      `Dir=${tempDir}`,
      "-o",
      `Dir::Etc::sourcelist=${path.join(tempDir, "etc", "apt", "sources.list")}`,
      "-o",
      `Dir::Etc::sourceparts=${path.join(tempDir, "etc", "apt", "sources.list.d")}`,
      "-o",
      `Dir::State=${path.join(tempDir, "var", "lib", "apt")}`,
      "-o",
      `Dir::Cache=${path.join(tempDir, "var", "cache", "apt")}`,
      "-o",
      "Acquire::AllowInsecureRepositories=false",
      "-o",
      "Acquire::AllowDowngradeToInsecureRepositories=false",
      "-o",
      "Debug::Acquire::gpgv=true"
    ];

    const start = Date.now();
    const aptResult = spawnSync("apt-get", aptArgs, {
      encoding: "utf8",
      env: {
        ...process.env,
        DEBIAN_FRONTEND: "noninteractive"
      },
      timeout: timeoutSeconds * 1000,
      maxBuffer: 1024 * 1024 * 8
    });
    const durationMs = Date.now() - start;
    const output = `${aptResult.stdout ?? ""}\n${aptResult.stderr ?? ""}`.trim();

    if (aptResult.status !== 0) {
      const rawTail = truncate(output);
      results.push({
        repoId,
        status: "failed",
        durationMs,
        classification: classifyFailure(output),
        checkedAt: generatedAt,
        repo: { source: repo.source, keyId },
        error: {
          exitCode: aptResult.status,
          message: "apt-get update failed",
          rawTail
        }
      });
      failed += 1;
      continue;
    }

    const inReleasePath = await findNewestInRelease(listsDir);
    let releaseIdentity = null;
    if (inReleasePath) {
      const inReleaseBytes = await readFile(inReleasePath);
      const inReleaseText = inReleaseBytes.toString("utf8");
      releaseIdentity = {
        inReleasePath,
        inReleaseSha256: sha256Hex(inReleaseBytes),
        ...parseInRelease(inReleaseText)
      };
    }

    results.push({
      repoId,
      status: "passed",
      durationMs,
      classification: "ok",
      checkedAt: generatedAt,
      repo: { source: repo.source, keyId },
      releaseIdentity
    });
    passed += 1;
  }

  const report = {
    generatedAt,
    os: targetOs,
    totals: {
      tested: repos.length,
      passed,
      failed,
      skipped
    },
    results
  };

  await mkdir(path.dirname(outPath), { recursive: true });
  const reportPayload = JSON.stringify(report, null, 2) + "\n";
  await writeFile(outPath, reportPayload, "utf8");

  if (failed > 0) {
    process.exit(2);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(2);
}
