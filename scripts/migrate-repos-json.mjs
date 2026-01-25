import path from "node:path";
import { readFile, readdir, unlink } from "node:fs/promises";
import { writeReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const inputPath = path.join(root, "catalog", "repos.json");
const outputDir = path.join(root, "catalog", "repos");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    if (key === "remove-legacy" || key === "force" || key === "dry-run") {
      args[key] = true;
    }
  }
  return args;
}

async function hasExistingRepoFiles(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    return entries.some((entry) => entry.isFile() && entry.name.endsWith(".json"));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const raw = await readFile(inputPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }

  if (await hasExistingRepoFiles(outputDir)) {
    if (!args.force) {
      throw new Error("catalog/repos already contains JSON files (use --force to overwrite)");
    }
  }

  if (args["dry-run"]) {
    console.log(`Dry run: ${parsed.repos.length} repos would be written to catalog/repos/`);
    return;
  }

  await writeReposCatalog({ root, repos: parsed.repos, preferDir: true, clean: true });

  if (args["remove-legacy"]) {
    await unlink(inputPath);
  }

  const legacyMessage = args["remove-legacy"] ? "removed catalog/repos.json" : "kept catalog/repos.json";
  console.log(`Migrated ${parsed.repos.length} repos to catalog/repos/ (${legacyMessage}).`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
