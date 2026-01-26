import { readFile, writeFile, mkdir, readdir, stat, mkdtemp, chmod } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";
import os from "node:os";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const dataReposDir = path.join(root, "data", "repos");

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
  const raw = keyEntry.outputPath ?? keyEntry.keyring ?? path.posix.join("keys", `${keyId}.asc`);
  return raw.replace(/\\/g, "/");
}

function formatOptionValue(value) {
  if (value === true) {
    return null;
  }
  return String(value);
}

function buildSourceLine({ baseUrl, suite, components = [], options = {}, keyringPath }) {
  const merged = { ...options };
  if (keyringPath) {
    merged["signed-by"] = keyringPath;
  }
  const optionParts = Object.entries(merged)
    .filter(([key]) => key)
    .map(([key, value]) => {
      const normalized = formatOptionValue(value);
      return normalized === null ? key : `${key}=${normalized}`;
    })
    .filter(Boolean);
  const optionBlock = optionParts.length > 0 ? ` [${optionParts.join(" ")}]` : "";
  const componentPart = components.length > 0 ? ` ${components.join(" ")}` : "";
  return `deb${optionBlock} ${baseUrl} ${suite}${componentPart}`.trim();
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

function detectUnsupported(output) {
  if (!output) {
    return null;
  }
  const patterns = [
    /does not have a release file/i,
    /release file .* not found/i,
    /inrelease .* not found/i,
    /404 .*inrelease/i,
    /404 .*release/i,
    /inrelease .*404/i,
    /release .*404/i
  ];
  const matched = patterns.find((pattern) => pattern.test(output));
  if (!matched) {
    return null;
  }
  return "Repository does not currently support the specified OS.";
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

function logStatus(message) {
  console.log(message);
}

function logError(message) {
  console.error(message);
}

async function ensureAptDirs(baseDir, keyId) {
  const etcDir = path.join(baseDir, "etc", "apt");
  const sourceParts = path.join(etcDir, "sources.list.d");
  const stateDir = path.join(baseDir, "var", "lib", "apt");
  const listsPartial = path.join(stateDir, "lists", "partial");
  const dpkgDir = path.join(stateDir, "dpkg");
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
  await mkdir(dpkgDir, { recursive: true });
  await mkdir(archivesPartial, { recursive: true });
  await mkdir(keyringsDir, { recursive: true });
  await writeFile(path.join(etcDir, "sources.list"), "", "utf8");
  const statusPath = path.join(dpkgDir, "status");
  await writeFile(statusPath, "", "utf8");

  const chmodTargets = [
    baseDir,
    path.join(baseDir, "var"),
    path.join(baseDir, "var", "lib"),
    path.join(baseDir, "var", "lib", "apt"),
    path.join(baseDir, "var", "lib", "apt", "lists"),
    listsPartial,
    path.join(baseDir, "var", "cache"),
    path.join(baseDir, "var", "cache", "apt"),
    path.join(baseDir, "var", "cache", "apt", "archives"),
    archivesPartial
  ];
  await Promise.all(
    chmodTargets.map(async (target) => {
      try {
        await chmod(target, 0o755);
      } catch {
        // Best-effort; continue if permissions cannot be changed.
      }
    })
  );

  return {
    sourceListPath: path.join(sourceParts, "test.list"),
    keyringPath: path.join(keyringsDir, `${keyId}.gpg`),
    listsDir: path.join(stateDir, "lists"),
    statusPath
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
  const onlyIds = toList(args["only-ids"]);
  const timeoutSeconds = Number.parseInt(args.timeoutSeconds ?? "30", 10);
  const outPath = args.out ?? path.join(root, "reports", "smoke", "repos.json");

  if (Number.isNaN(timeoutSeconds) || timeoutSeconds <= 0) {
    throw new Error("timeoutSeconds must be a positive integer");
  }

  const [keysCatalog, reposCatalog] = await Promise.all([
    readJson(keysPath),
    loadReposCatalog({ root })
  ]);

  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }

  const keyMap = new Map(keysCatalog.keys.map((key) => [key.id, key]));
  let repos = reposCatalog.repos;
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
    logStatus(`Checking ${repoId}`);
    if (!keyId) {
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { baseUrl: repo.baseUrl ?? repo.base_url ?? null, keyId: null },
        error: {
          exitCode: null,
          message: "Repo entry missing keyId",
          rawTail: null
        }
      });
      logError(`FAILED ${repoId}: missing keyId`);
      failed += 1;
      continue;
    }

    const baseUrl = repo.baseUrl ?? repo.base_url ?? null;
    if (!baseUrl) {
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { baseUrl: null, keyId },
        error: {
          exitCode: null,
          message: "Repo entry missing baseUrl",
          rawTail: null
        }
      });
      logError(`FAILED ${repoId}: missing baseUrl`);
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
        repo: { baseUrl, keyId },
        error: {
          exitCode: null,
          message: `Key ${keyId} not found`,
          rawTail: null
        }
      });
      logError(`FAILED ${repoId}: key ${keyId} not found`);
      failed += 1;
      continue;
    }

    const baseTemp = path.join(os.tmpdir(), "apt-smoke", normalizeRepoId(repoId));
    await mkdir(baseTemp, { recursive: true });
    const tempDir = await mkdtemp(path.join(baseTemp, "run-"));

    const { sourceListPath, keyringPath, listsDir, statusPath } = await ensureAptDirs(
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
      const dearmorError = dearmor.error ? String(dearmor.error.message ?? dearmor.error) : "";
      const rawTail = truncate(
        `${dearmor.stdout ?? ""}\n${dearmor.stderr ?? ""}\n${dearmorError}`.trim()
      );
      results.push({
        repoId,
        status: "failed",
        durationMs: 0,
        classification: "apt_error",
        checkedAt: generatedAt,
        repo: { baseUrl: repo.baseUrl ?? repo.base_url ?? null, keyId },
        error: {
          exitCode: dearmor.status,
          message: "gpg --dearmor failed",
          rawTail
        }
      });
      logError(`FAILED ${repoId}: gpg --dearmor failed`);
      if (rawTail) {
        logError(rawTail);
      }
      failed += 1;
      continue;
    }

    const suitesMetaPath = path.join(dataReposDir, repoId, "suites.json");
    let suitesMeta = null;
    try {
      suitesMeta = await readJson(suitesMetaPath);
    } catch {
      suitesMeta = null;
    }
    const suites = Array.isArray(suitesMeta?.suites) ? suitesMeta.suites : [];
    if (suites.length === 0) {
      results.push({
        repoId,
        status: "skipped",
        durationMs: 0,
        classification: "missing_suites",
        checkedAt: generatedAt,
        repo: { baseUrl, keyId },
        error: {
          exitCode: null,
          message: "Suite metadata missing; generate data/repos/<repoId>/suites.json",
          rawTail: null
        }
      });
      logStatus(`SKIPPED ${repoId}: suite metadata missing`);
      skipped += 1;
      continue;
    }

    for (const suiteEntry of suites) {
      const suite = suiteEntry.suite ?? "";
      if (!suite) {
        results.push({
          repoId,
          status: "skipped",
          durationMs: 0,
          classification: "missing_suite",
          checkedAt: generatedAt,
          repo: { baseUrl, keyId },
          error: {
            exitCode: null,
            message: "Suite entry missing suite name",
            rawTail: null
          }
        });
        skipped += 1;
        continue;
      }

      const components = Array.isArray(suiteEntry.components) ? suiteEntry.components : [];
      const options =
        suiteEntry.options && typeof suiteEntry.options === "object" ? suiteEntry.options : {};
      const sourceLine = buildSourceLine({
        baseUrl,
        suite,
        components,
        options,
        keyringPath
      });
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
        `Dir::State::status=${statusPath}`,
        "-o",
        `Dir::Cache=${path.join(tempDir, "var", "cache", "apt")}`,
        "-o",
        "Acquire::AllowInsecureRepositories=false",
        "-o",
        "Acquire::AllowDowngradeToInsecureRepositories=false",
        "-o",
        "APT::Sandbox::User=root",
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
        const unsupportedReason = detectUnsupported(output);
        if (unsupportedReason) {
          results.push({
            repoId,
            suite,
            status: "skipped",
            durationMs,
            classification: "unsupported",
            checkedAt: generatedAt,
            repo: { baseUrl, keyId, suite, components },
            documentation: unsupportedReason,
            error: {
              exitCode: aptResult.status,
              message: "apt-get update reported missing Release/InRelease",
              rawTail
            }
          });
          logStatus(`SKIPPED ${repoId}: ${unsupportedReason} (${suite})`);
          skipped += 1;
          continue;
        }
        results.push({
          repoId,
          suite,
          status: "failed",
          durationMs,
          classification: classifyFailure(output),
          checkedAt: generatedAt,
          repo: { baseUrl, keyId, suite, components },
          error: {
            exitCode: aptResult.status,
            message: "apt-get update failed",
            rawTail
          }
        });
        logError(`FAILED ${repoId}: apt-get update failed (${classifyFailure(output)})`);
        if (rawTail) {
          logError(rawTail);
        }
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
        suite,
        status: "passed",
        durationMs,
        classification: "ok",
        checkedAt: generatedAt,
        repo: { baseUrl, keyId, suite, components },
        releaseIdentity
      });
      logStatus(`PASSED ${repoId} (${suite})`);
      passed += 1;
    }
  }

  const report = {
    generatedAt,
    totals: {
      tested: passed + failed + skipped,
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
