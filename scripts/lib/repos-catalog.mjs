import path from "node:path";
import { readFile, writeFile, readdir, mkdir, unlink, stat } from "node:fs/promises";
import { spawnSync } from "node:child_process";

function normalizeRepoEntries(parsed) {
  if (!parsed) {
    return [];
  }
  if (Array.isArray(parsed)) {
    return parsed;
  }
  if (typeof parsed === "object" && Array.isArray(parsed.repos)) {
    return parsed.repos;
  }
  if (typeof parsed === "object") {
    return [parsed];
  }
  return [];
}

async function readReposDir(dirPath) {
  try {
    const stats = await stat(dirPath);
    if (!stats.isDirectory()) {
      return { exists: false, repos: [] };
    }
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return { exists: false, repos: [] };
    }
    throw error;
  }

  const entries = await readdir(dirPath, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => entry.name)
    .sort((a, b) => a.localeCompare(b));

  const repos = [];
  for (const fileName of files) {
    const filePath = path.join(dirPath, fileName);
    const raw = await readFile(filePath, "utf8");
    const parsed = JSON.parse(raw);
    repos.push(...normalizeRepoEntries(parsed));
  }

  return { exists: true, repos };
}

function ensureRepoIds(repos) {
  return repos.filter((repo) => repo && typeof repo === "object");
}

export async function loadReposCatalog({ root = process.cwd(), preferDir = true } = {}) {
  const reposDir = path.join(root, "catalog", "repos");
  const reposFile = path.join(root, "catalog", "repos.json");

  if (preferDir) {
    const { exists, repos } = await readReposDir(reposDir);
    if (exists) {
      return { repos: ensureRepoIds(repos) };
    }
  }

  const raw = await readFile(reposFile, "utf8");
  const parsed = JSON.parse(raw);
  return { repos: ensureRepoIds(normalizeRepoEntries(parsed)) };
}

export async function writeReposCatalog({
  root = process.cwd(),
  repos = [],
  preferDir = true,
  clean = true
} = {}) {
  const reposDir = path.join(root, "catalog", "repos");
  const reposFile = path.join(root, "catalog", "repos.json");
  const repoList = ensureRepoIds(repos);

  if (!preferDir) {
    await writeFile(reposFile, JSON.stringify({ repos: repoList }, null, 2) + "\n", "utf8");
    return { mode: "file", path: reposFile };
  }

  await mkdir(reposDir, { recursive: true });
  const targetNames = new Set();

  for (const repo of repoList) {
    const repoId = repo.id;
    if (!repoId) {
      continue;
    }
    const fileName = `${repoId}.json`;
    targetNames.add(fileName);
    const filePath = path.join(reposDir, fileName);
    await writeFile(filePath, JSON.stringify(repo, null, 2) + "\n", "utf8");
  }

  if (clean) {
    const entries = await readdir(reposDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".json")) {
        continue;
      }
      if (!targetNames.has(entry.name)) {
        await unlink(path.join(reposDir, entry.name));
      }
    }
  }

  return { mode: "dir", path: reposDir };
}

function readRepoCatalogFromGitShow(ref, filePath) {
  const result = spawnSync("git", ["show", `${ref}:${filePath}`], { encoding: "utf8" });
  if (result.status !== 0) {
    return null;
  }
  return result.stdout;
}

export function loadReposCatalogFromRef({ ref, root = process.cwd() }) {
  const reposDir = path.posix.join("catalog", "repos");
  const reposFile = path.posix.join("catalog", "repos.json");

  const listResult = spawnSync("git", ["ls-tree", "-r", "--name-only", ref, reposDir], {
    encoding: "utf8"
  });

  if (listResult.status === 0 && listResult.stdout.trim()) {
    const files = listResult.stdout
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.endsWith(".json"))
      .sort((a, b) => a.localeCompare(b));

    const repos = [];
    for (const filePath of files) {
      const raw = readRepoCatalogFromGitShow(ref, filePath);
      if (!raw) {
        continue;
      }
      const parsed = JSON.parse(raw);
      repos.push(...normalizeRepoEntries(parsed));
    }
    return { repos: ensureRepoIds(repos) };
  }

  const legacyRaw = readRepoCatalogFromGitShow(ref, reposFile);
  if (!legacyRaw) {
    return { repos: [] };
  }
  const legacyParsed = JSON.parse(legacyRaw);
  return { repos: ensureRepoIds(normalizeRepoEntries(legacyParsed)) };
}
