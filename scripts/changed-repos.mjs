import { readFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = process.cwd();
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

function readJson(raw) {
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }
  return parsed;
}

function readBaseFile(baseRef) {
  const result = spawnSync("git", ["show", `${baseRef}:catalog/repos.json`], {
    encoding: "utf8"
  });
  if (result.status !== 0) {
    return null;
  }
  return result.stdout;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const baseRef = args.base ?? "origin/main";

  const currentRaw = await readFile(reposPath, "utf8");
  const current = readJson(currentRaw);

  const baseRaw = readBaseFile(baseRef);
  const base = baseRaw ? readJson(baseRaw) : { repos: [] };

  const baseMap = new Map(
    base.repos.filter((repo) => repo?.id).map((repo) => [repo.id, repo])
  );

  const changed = [];
  for (const repo of current.repos) {
    if (!repo?.id) {
      continue;
    }
    const baseRepo = baseMap.get(repo.id);
    if (!baseRepo) {
      changed.push(repo.id);
      continue;
    }
    if (stableStringify(repo) !== stableStringify(baseRepo)) {
      changed.push(repo.id);
    }
  }

  process.stdout.write(changed.join(","));
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
