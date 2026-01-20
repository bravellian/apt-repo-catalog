import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const catalogPath = path.join(root, "catalog", "keys.json");

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    if (key === "force") {
      args.force = true;
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

function isEmpty(value) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === "string") {
    return value.trim() === "";
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return false;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.patch) {
    throw new Error("Missing required --patch argument");
  }

  const patchRaw = await readFile(args.patch, "utf8");
  const patch = JSON.parse(patchRaw);
  if (!Array.isArray(patch.keys)) {
    throw new Error("Patch file must include a keys array");
  }

  const catalogRaw = await readFile(catalogPath, "utf8");
  const catalog = JSON.parse(catalogRaw);
  if (!Array.isArray(catalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }

  const keyMap = new Map(catalog.keys.map((entry) => [entry.id, entry]));
  const unknown = [];

  for (const update of patch.keys) {
    if (!update?.id) {
      continue;
    }
    const target = keyMap.get(update.id);
    if (!target) {
      unknown.push(update.id);
      continue;
    }

    for (const field of ["documentationUrl", "tags", "notes"]) {
      if (!(field in update)) {
        continue;
      }
      if (args.force || isEmpty(target[field])) {
        target[field] = update[field];
      }
    }
  }

  if (unknown.length > 0) {
    throw new Error(`Unknown key ids in patch: ${unknown.join(", ")}`);
  }

  const data = JSON.stringify(catalog, null, 2) + "\n";
  await writeFile(catalogPath, data, "utf8");

  const validateKeys = spawnSync("node", ["scripts/validate-keys.mjs"], {
    stdio: "inherit",
    cwd: root
  });
  if (validateKeys.status !== 0) {
    process.exit(validateKeys.status ?? 1);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
