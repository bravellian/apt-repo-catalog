import path from "node:path";
import { readdir } from "node:fs/promises";
import { loadPackagesIndex, shouldSplitPackages, writePackagesIndex } from "./lib/packages-index.mjs";

const root = process.cwd();
const dataReposDir = path.join(root, "data", "repos");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    if (key === "remove-legacy" || key === "dry-run" || key === "force") {
      args[key] = true;
      continue;
    }
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

async function listRepoDirs() {
  const entries = await readdir(dataReposDir, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const maxMb = args["max-mb"] ? Number.parseFloat(args["max-mb"]) : 45;
  if (!Number.isFinite(maxMb) || maxMb <= 0) {
    throw new Error("--max-mb must be a positive number");
  }
  const maxBytes = Math.floor(maxMb * 1024 * 1024);
  const targetRepo = args.repo;
  const removeLegacy = Boolean(args["remove-legacy"]);
  const force = Boolean(args.force);

  const repoIds = targetRepo ? [targetRepo] : await listRepoDirs();
  let migrated = 0;
  let skipped = 0;

  for (const repoId of repoIds) {
    const repoDir = path.join(dataReposDir, repoId);
    const shouldSplit = force || (await shouldSplitPackages({ repoDir, maxBytes }));
    if (!shouldSplit) {
      skipped += 1;
      continue;
    }

    const packagesData = await loadPackagesIndex(repoDir);
    if (!packagesData?.packages) {
      skipped += 1;
      continue;
    }

    if (args["dry-run"]) {
      console.log(`Dry run: ${repoId} (${packagesData.packageCount ?? packagesData.packages.length} packages)`);
      migrated += 1;
      continue;
    }

    await writePackagesIndex({
      repoDir,
      packages: packagesData.packages,
      maxBytes,
      removeLegacy
    });
    migrated += 1;
  }

  console.log(`Migrated: ${migrated}. Skipped: ${skipped}.`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
