import path from "node:path";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { loadConfig } from "./config.mjs";
import { searchGithub, fetchGithubFile } from "./github.mjs";
import { extractCandidatesFromText } from "./parsers.mjs";
import { normalizeCandidates, dedupeCandidates } from "./normalize.mjs";
import { verifyRepo } from "./verify.mjs";
import { curateRepos, addInstallSnippets, summarizeArchitectures } from "./score.mjs";
import { readJson, writeJson, sha256Hex, sleep } from "./utils.mjs";
import { syncCatalog } from "./sync.mjs";
import { mineLocalFiles } from "./local.mjs";

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

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let idx = 0;
  async function next() {
    const current = idx;
    if (current >= items.length) {
      return;
    }
    idx += 1;
    results[current] = await worker(items[current], current);
    return next();
  }
  const workers = Array.from({ length: Math.min(limit, items.length) }, () => next());
  await Promise.all(workers);
  return results;
}

async function runDiscover({ root, args }) {
  const config = await loadConfig({ configPath: args.config, root });
  const outDir = args.outDir ?? path.join(root, "data", "discovery");
  const cacheDir = path.join(outDir, "cache", "github");
  await mkdir(cacheDir, { recursive: true });
  const append = Boolean(args.append);

  const token = process.env.GITHUB_TOKEN ?? null;
  if (!token) {
    console.warn("GITHUB_TOKEN is not set; GitHub search will be heavily rate-limited.");
  }
  const queries = args.queries ? args.queries.split(",").map((q) => q.trim()).filter(Boolean) : config.github.queries;
  const perPage = Number.parseInt(args.perPage ?? config.github.perPage, 10);
  const maxPages = Number.parseInt(args.maxPages ?? config.github.maxPages, 10);
  const concurrency = Number.parseInt(args.concurrency ?? config.github.concurrency, 10);
  const slowMode = Boolean(args.slow) || config.github.slowMode;
  const checkpointPath = path.join(outDir, "checkpoint", "discover.json");

  let checkpoint = { processedFiles: [], candidates: [] };
  if (args.resume) {
    try {
      checkpoint = await readJson(checkpointPath);
    } catch {
      checkpoint = { processedFiles: [], candidates: [] };
    }
  }
  const processedFiles = new Set(checkpoint.processedFiles ?? []);
  let candidates = [...(checkpoint.candidates ?? [])];
  if (append) {
    try {
      const existing = await readJson(path.join(outDir, "candidates.json"));
      if (Array.isArray(existing)) {
        candidates = [...existing, ...candidates];
      }
    } catch {
      // ignore
    }
  }

  for (const query of queries) {
    const result = await searchGithub({
      query,
      token,
      cacheDir,
      perPage,
      maxPages,
      slowMode
    });

    const items = result.items ?? [];
    if (items.length === 0) {
      console.warn(`No GitHub search results for query: ${query}`);
    }
    const files = items
      .map((item) => ({
        repo: item.repository?.full_name ?? "",
        owner: item.repository?.owner?.login ?? "",
        name: item.repository?.name ?? "",
        path: item.path ?? "",
        htmlUrl: item.html_url ?? "",
        apiUrl: item.url ?? ""
      }))
      .filter((item) => item.owner && item.name && item.path);

    const uniqueFiles = files.filter((item) => {
      const key = `${item.repo}:${item.path}`;
      if (processedFiles.has(key)) {
        return false;
      }
      processedFiles.add(key);
      return true;
    });

    const extracted = await mapLimit(uniqueFiles, concurrency, async (file) => {
      const content = await fetchGithubFile({
        owner: file.owner,
        repo: file.name,
        path: file.path,
        token,
        cacheDir,
        slowMode
      });
      if (!content.ok) {
        return [];
      }
      const extractedCandidates = extractCandidatesFromText(content.text);
      return extractedCandidates.map((candidate) => ({
        id: sha256Hex(`${file.repo}:${file.path}:${candidate.lineNumber ?? ""}:${candidate.raw ?? ""}`),
        type: candidate.type,
        raw: candidate.raw,
        parsed: candidate.parsed,
        source: {
          kind: "github",
          repo: file.repo,
          path: file.path,
          url: file.htmlUrl || file.apiUrl,
          line: candidate.lineNumber,
          query
        }
      }));
    });

    for (const batch of extracted) {
      candidates.push(...batch);
    }

    if (args.checkpoint) {
      await mkdir(path.dirname(checkpointPath), { recursive: true });
      await writeFile(
        checkpointPath,
        JSON.stringify({ processedFiles: Array.from(processedFiles), candidates }, null, 2),
        "utf8"
      );
    }

    if (slowMode) {
      await sleep(500);
    }
  }

  if (args["local-dir"]) {
    const localDir = path.isAbsolute(args["local-dir"])
      ? args["local-dir"]
      : path.join(root, args["local-dir"]);
    const localCandidates = await mineLocalFiles({
      rootDir: localDir,
      maxFileSizeBytes: Number.parseInt(args["local-max-bytes"] ?? "200000", 10),
      maxFiles: args["local-max-files"]
        ? Number.parseInt(args["local-max-files"], 10)
        : null
    });
    candidates.push(...localCandidates);
  }

  const normalized = normalizeCandidates(candidates, { config });
  const deduped = dedupeCandidates(normalized);

  await writeJson(path.join(outDir, "candidates.json"), candidates);
  await writeJson(path.join(outDir, "deduped.json"), deduped);
}

async function runVerify({ root, args }) {
  const config = await loadConfig({ configPath: args.config, root });
  const outDir = args.outDir ?? path.join(root, "data", "discovery");
  const inputPath = args.input ?? path.join(outDir, "deduped.json");
  const verifiedPath = path.join(outDir, "verified.json");
  const errorsPath = path.join(outDir, "verified-errors.json");
  const tempDir = path.join(outDir, "tmp");
  const maxAgeDays = args["max-age-days"]
    ? Number.parseInt(args["max-age-days"], 10)
    : config.verification.maxAgeDays;
  const onlyNew = Boolean(args["only-new"]);
  const noCache = Boolean(args["no-cache"]);

  const repos = args.integration
    ? await readJson(path.join(root, "tests", "fixtures", "discovery-verify.json"))
    : await readJson(inputPath);
  const deniedHosts = (config.discovery.denyDomains ?? []).map((domain) =>
    domain.toLowerCase()
  );
  const filteredRepos = repos.filter((repo) => {
    try {
      const url = new URL(repo.baseUrl ?? "");
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return false;
      }
      const host = url.hostname.toLowerCase();
      return !deniedHosts.some((domain) => host === domain || host.endsWith(`.${domain}`));
    } catch {
      return true;
    }
  });
  if (filteredRepos.length !== repos.length) {
    console.log(
      `[verify] skipped ${repos.length - filteredRepos.length} repos due to denyDomains`
    );
  }

  let previous = [];
  if (!noCache) {
    try {
      previous = await readJson(verifiedPath);
    } catch {
      previous = [];
    }
  }
  const previousById = new Map(
    previous.map((repo) => [repo.repoId ?? repo.baseUrl, repo])
  );

  const now = Date.now();
  const shouldReuse = (repo) => {
    const key = repo.repoId ?? repo.baseUrl;
    const existing = previousById.get(key);
    if (!existing) {
      return null;
    }
    if (onlyNew) {
      return existing;
    }
    const attemptedAt = existing.verification?.attemptedAt;
    if (!attemptedAt) {
      return null;
    }
    const ageDays = (now - new Date(attemptedAt).getTime()) / (24 * 60 * 60 * 1000);
    if (Number.isNaN(ageDays)) {
      return null;
    }
    if (maxAgeDays !== null && ageDays <= maxAgeDays) {
      return {
        ...existing,
        verification: {
          ...existing.verification,
          skipped: true,
          skippedReason: "fresh",
          skippedAt: new Date().toISOString()
        }
      };
    }
    return null;
  };

  const reuse = [];
  const toVerify = [];
  const verifiedMap = new Map(
    previous.map((repo) => [repo.repoId ?? repo.baseUrl, repo])
  );
  for (const repo of filteredRepos) {
    const reused = shouldReuse(repo);
    if (reused) {
      reuse.push(reused);
      verifiedMap.set(repo.repoId ?? repo.baseUrl, reused);
    } else {
      toVerify.push(repo);
    }
  }

  const writeSnapshot = async () => {
    const verified = Array.from(verifiedMap.values()).sort((a, b) =>
      String(a.baseUrl ?? "").localeCompare(String(b.baseUrl ?? ""))
    );
    const errors = verified
      .map((repo) => ({
        repoId: repo.repoId,
        baseUrl: repo.baseUrl,
        errors: (repo.verification?.suites ?? []).flatMap((suite) => [
          ...(suite.errors ?? []),
          ...((suite.packages ?? []).flatMap((pkg) => pkg.errors ?? []))
        ])
      }))
      .filter((entry) => entry.errors.length > 0);
    await writeJson(verifiedPath, verified);
    await writeJson(errorsPath, errors);
  };

  await writeSnapshot();

  const total = toVerify.length;
  let completed = 0;
  const startedAt = Date.now();

  let writeChain = Promise.resolve();
  const concurrency = Math.max(
    1,
    Number.parseInt(args.concurrency ?? config.verification.concurrency, 10)
  );
  let idx = 0;
  async function worker() {
    while (idx < toVerify.length) {
      const current = idx;
      idx += 1;
      const repo = toVerify[current];
      const label = repo.baseUrl ?? repo.repoId ?? `repo-${current + 1}`;
      console.log(`[verify] ${current + 1}/${total} ${label} starting`);
      const verifiedRepo = await verifyRepo({
        repo,
        config,
        cacheDir: tempDir
      });
      verifiedMap.set(repo.repoId ?? repo.baseUrl, verifiedRepo);
      writeChain = writeChain.then(writeSnapshot);
      await writeChain;
      completed += 1;
      const elapsedSec = Math.max(1, Math.round((Date.now() - startedAt) / 1000));
      const rate = (completed / elapsedSec).toFixed(2);
      console.log(
        `[verify] ${completed}/${total} done (${rate} repos/sec)`
      );
    }
  }

  const workers = Array.from(
    { length: Math.min(concurrency, toVerify.length) },
    () => worker()
  );
  await Promise.all(workers);
  await writeChain;
}

async function runCurate({ root, args }) {
  const config = await loadConfig({ configPath: args.config, root });
  const outDir = args.outDir ?? path.join(root, "data", "discovery");
  const inputPath = args.input ?? path.join(outDir, "verified.json");
  const dedupedPath = path.join(outDir, "deduped.json");
  const maxEvidence =
    Number.parseInt(args["max-evidence"] ?? config.discovery.maxEvidencePerRepo ?? "25", 10);
  const compactVerification = args["compact-verification"] !== undefined
    ? Boolean(args["compact-verification"])
    : Boolean(config.discovery.compactVerification);

  const verified = await readJson(inputPath);
  const { curated, quarantine } = curateRepos(verified, config);
  const trimEvidence = (repo) => {
    const evidence = Array.isArray(repo.evidence) ? repo.evidence : [];
    return {
      ...repo,
      evidence: evidence.slice(0, Math.max(0, maxEvidence)).map((item) => ({
        kind: item.kind ?? "",
        repo: item.repo ?? "",
        path: item.path ?? "",
        url: item.url ?? "",
        line: item.line ?? null
      }))
    };
  };
  const compactVerify = (repo) => {
    if (!compactVerification || !repo.verification) {
      return repo;
    }
    const suites = (repo.verification.suites ?? []).map((suite) => ({
      suite: suite.suite,
      components: suite.components ?? [],
      architectures: suite.architectures ?? [],
      release: suite.release
        ? {
            Origin: suite.release.Origin ?? null,
            Label: suite.release.Label ?? null,
            Suite: suite.release.Suite ?? null,
            Codename: suite.release.Codename ?? null,
            Date: suite.release.Date ?? null
          }
        : null,
      inRelease: suite.inRelease ? true : false,
      packages: (suite.packages ?? []).map((pkg) => ({
        component: pkg.component ?? "",
        arch: pkg.arch ?? "",
        packageCount: pkg.packageCount ?? 0,
        architectures: pkg.architectures ?? [],
        errorCount: (pkg.errors ?? []).length
      })),
      errorCount: (suite.errors ?? []).length
    }));
    return {
      ...repo,
      verification: {
        attemptedAt: repo.verification.attemptedAt,
        skipped: repo.verification.skipped ?? false,
        skippedReason: repo.verification.skippedReason ?? null,
        suites
      }
    };
  };
  const curatedWithSnippets = summarizeArchitectures(
    addInstallSnippets(curated).map(trimEvidence).map(compactVerify)
  );
  const quarantineWithSnippets = summarizeArchitectures(
    addInstallSnippets(quarantine).map(trimEvidence).map(compactVerify)
  );

  await writeJson(path.join(outDir, "curated.json"), curatedWithSnippets);
  await writeJson(path.join(outDir, "quarantine.json"), quarantineWithSnippets);

  const reasonCounts = {};
  for (const repo of quarantineWithSnippets) {
    const reasons = repo.curation?.reasons ?? ["unknown"];
    for (const reason of reasons) {
      reasonCounts[reason] = (reasonCounts[reason] ?? 0) + 1;
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    totals: {
      input: verified.length,
      curated: curatedWithSnippets.length,
      quarantine: quarantineWithSnippets.length
    },
    thresholds: {
      trust: config.scoring.trustThreshold,
      minOccurrences: config.discovery.minOccurrencesForCuration,
      minDistinctSources: config.discovery.minDistinctSourcesForCuration,
      requireAllowlist: config.discovery.requireAllowlistForCuration
    },
    quarantineReasons: Object.keys(reasonCounts)
      .sort((a, b) => a.localeCompare(b))
      .map((reason) => ({ reason, count: reasonCounts[reason] }))
  };

  await writeJson(path.join(outDir, "curation-report.json"), report);

  try {
    const deduped = await readJson(dedupedPath);
    const domainMap = new Map();
    for (const repo of deduped) {
      const baseUrl = repo.baseUrl ?? "";
      let host = "";
      try {
        host = new URL(baseUrl).hostname.toLowerCase();
      } catch {
        host = "";
      }
      if (!host) {
        continue;
      }
      if (!domainMap.has(host)) {
        domainMap.set(host, { domain: host, repos: 0, occurrences: 0 });
      }
      const entry = domainMap.get(host);
      entry.repos += 1;
      entry.occurrences += Number.parseInt(repo.occurrences ?? 0, 10) || 0;
    }
    const domains = Array.from(domainMap.values()).sort(
      (a, b) => b.occurrences - a.occurrences || b.repos - a.repos || a.domain.localeCompare(b.domain)
    );
    await writeJson(path.join(outDir, "domains-report.json"), {
      generatedAt: new Date().toISOString(),
      totals: { domains: domains.length },
      topDomains: domains.slice(0, 50)
    });
  } catch {
    // ignore missing deduped.json
  }
}

async function runSync({ root, args }) {
  const outDir = args.outDir ?? path.join(root, "data", "discovery");
  const curatedPath = args.input ?? path.join(outDir, "curated.json");
  const outputPath = args.output ?? path.join(root, "catalog", "discovered-repos.json");
  const keysPath = path.join(root, "catalog", "keys.json");
  const writeCatalog = Boolean(args["write-catalog"]);

  const { entries, skipped } = await syncCatalog({
    curatedPath,
    outputPath,
    keysPath,
    writeCatalog,
    root
  });

  if (skipped.length > 0) {
    await writeJson(path.join(outDir, "sync-skipped.json"), skipped);
  }

  console.log(`Sync complete. Entries: ${entries.length}. Skipped: ${skipped.length}.`);
}

export async function runDiscoveryCli(root) {
  const args = parseArgs(process.argv.slice(2));
  const command = args._[0];
  if (!command) {
    throw new Error("Usage: apt-inventory <command>");
  }

  if (command === "discover-repos") {
    await runDiscover({ root, args });
    return;
  }
  if (command === "verify-repos") {
    await runVerify({ root, args });
    return;
  }
  if (command === "curate-repos") {
    await runCurate({ root, args });
    return;
  }
  if (command === "sync-catalog") {
    await runSync({ root, args });
    return;
  }

  throw new Error(`Unknown discovery command ${command}`);
}
