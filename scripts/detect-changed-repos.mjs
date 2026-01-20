import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const reportPath = path.join(root, "reports", "changed-repos.json");

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

function stableStringify(value) {
  if (Array.isArray(value)) {
    return `[${value.map(stableStringify).join(",")}]`;
  }
  if (value && typeof value === "object") {
    const keys = Object.keys(value).sort();
    return `{${keys.map((key) => `"${key}":${stableStringify(value[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

function readJsonAtRef(ref) {
  try {
    const content = execSync(`git show ${ref}:catalog/repos.json`, { encoding: "utf8" });
    return JSON.parse(content);
  } catch {
    return { repos: [] };
  }
}

function normalizeRepos(catalog) {
  const repos = Array.isArray(catalog.repos) ? catalog.repos : [];
  return repos.filter((repo) => repo?.id).map((repo) => [repo.id, repo]);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const baseBranch = process.env.GITHUB_BASE_REF;
  const baseRef = args.base ?? (baseBranch ? `origin/${baseBranch}` : "origin/main");
  const headRef = args.head ?? "HEAD";

  const base = readJsonAtRef(baseRef);
  const head = readJsonAtRef(headRef);

  const baseMap = new Map(normalizeRepos(base));
  const headMap = new Map(normalizeRepos(head));

  const changed = new Set();

  for (const [id, repo] of headMap.entries()) {
    if (!baseMap.has(id)) {
      changed.add(id);
      continue;
    }
    if (stableStringify(repo) !== stableStringify(baseMap.get(id))) {
      changed.add(id);
    }
  }

  for (const [id] of baseMap.entries()) {
    if (!headMap.has(id)) {
      changed.add(id);
    }
  }

  const changedRepoIds = Array.from(changed).sort();
  const changedReposByOs = {};
  const removedRepoIds = [];

  for (const repoId of changedRepoIds) {
    const repo = headMap.get(repoId);
    if (!repo) {
      removedRepoIds.push(repoId);
      continue;
    }
    const os = repo.os ?? "unknown";
    if (!changedReposByOs[os]) {
      changedReposByOs[os] = [];
    }
    changedReposByOs[os].push(repoId);
  }

  for (const key of Object.keys(changedReposByOs)) {
    changedReposByOs[key] = changedReposByOs[key].sort();
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    baseRef,
    headRef,
    changedRepoIds,
    changedReposByOs,
    removedRepoIds: removedRepoIds.sort(),
    hasRepoChanges: changedRepoIds.length > 0
  };

  await mkdir(path.dirname(reportPath), { recursive: true });
  const data = JSON.stringify(payload, null, 2) + "\n";
  await writeFile(reportPath, data, "utf8");

  process.stdout.write(data);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(0);
}
