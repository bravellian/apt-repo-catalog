import { readFile } from "node:fs/promises";
import { loadReposCatalog, loadReposCatalogFromRef } from "./lib/repos-catalog.mjs";

const root = process.cwd();

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

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const baseRef = args.base ?? "origin/main";

  const current = await loadReposCatalog({ root });
  const base = loadReposCatalogFromRef({ ref: baseRef, root });

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
