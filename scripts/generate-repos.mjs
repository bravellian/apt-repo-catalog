import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { loadReposCatalog, writeReposCatalog } from "./lib/repos-catalog.mjs";

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
    if (key === "force" || key === "dry-run") {
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

function ensureString(value, name) {
  if (!value) {
    throw new Error(`Missing required --${name}`);
  }
  return value;
}

function normalizeSlug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function titleCase(value) {
  return String(value)
    .split(/[\s-_]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function parseList(value) {
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseTags(value) {
  if (!value) {
    return undefined;
  }
  const tags = parseList(value);
  return tags.length > 0 ? tags : undefined;
}

function normalizeRootUri(value) {
  const uri = new URL(value);
  if (uri.protocol !== "https:") {
    throw new Error("rootUri must be https://");
  }
  const trimmed = uri.toString().replace(/\/+$/, "");
  if (trimmed.includes("/dists/")) {
    throw new Error("rootUri must not include /dists/ path");
  }
  return trimmed;
}

function buildLabel({ labelPrefix }) {
  return labelPrefix;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const vendor = ensureString(args.vendor, "vendor");
  const rootUri = normalizeRootUri(ensureString(args.rootUri, "rootUri"));
  const distro = args.distro ?? "";
  const suites = parseList(ensureString(args.suites, "suites"));
  const components = parseList(ensureString(args.components, "components"));
  const keyId = ensureString(args.keyId, "keyId");
  const documentationUrl = ensureString(args.documentationUrl, "documentationUrl");
  const name = args.name ?? vendor;
  const labelPrefix = args.labelPrefix ?? titleCase(vendor);
  const architectures = parseList(args.architectures);

  const tags = parseTags(args.tags);
  const notes = args.notes;
  if (notes !== undefined && notes.trim() === "") {
    throw new Error("notes must be a non-empty string");
  }

  const keysCatalog = JSON.parse(await readFile(keysPath, "utf8"));
  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  const keyEntry = keysCatalog.keys.find((entry) => entry.id === keyId);
  if (!keyEntry) {
    throw new Error(`Key ${keyId} not found in catalog/keys.json`);
  }
  if (keyEntry.status && keyEntry.status !== "active") {
    throw new Error(`Key ${keyId} is not active`);
  }

  const reposCatalog = await loadReposCatalog({ root });
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }

  const existingIds = new Set(reposCatalog.repos.map((repo) => repo.id));
  const planned = [];
  const skipped = [];

  const baseId = normalizeSlug([vendor, distro].filter(Boolean).join("-")) || normalizeSlug(vendor);
  let id = baseId;
  if (existingIds.has(id)) {
    let counter = 2;
    while (existingIds.has(`${baseId}-${counter}`)) {
      counter += 1;
    }
    id = `${baseId}-${counter}`;
  }
  existingIds.add(id);

  planned.push({
    id,
    label: buildLabel({ labelPrefix }),
    name,
    baseUrl: rootUri,
    keyId,
    documentationUrl,
    tags,
    notes
  });

  let added = 0;
  let replaced = 0;

  for (const entry of planned) {
    const existingIndex = reposCatalog.repos.findIndex((repo) => repo.id === entry.id);
    if (existingIndex !== -1) {
      if (args.force) {
        reposCatalog.repos.splice(existingIndex, 1, entry);
        replaced += 1;
      } else {
        skipped.push({ reason: "id-exists", id: entry.id });
        continue;
      }
    } else {
      reposCatalog.repos.push(entry);
      added += 1;
    }
  }

  console.log("Generation summary:");
  console.log(`- suites: ${suites.join(", ")}`);
  console.log(`- components: ${components.join(", ")}`);
  console.log(`- entries planned: ${planned.length}`);
  console.log(`- entries added: ${added}`);
  console.log(`- entries replaced: ${replaced}`);
  console.log(`- entries skipped: ${skipped.length}`);

  if (args["dry-run"]) {
    console.log("\nPlanned entries:");
    for (const entry of planned) {
      console.log(JSON.stringify(entry, null, 2));
    }
    return;
  }

  await writeReposCatalog({ root, repos: reposCatalog.repos, preferDir: true, clean: true });

  const suitesPayload = {
    generatedAt: new Date().toISOString(),
    repoId: planned[0].id,
    baseUrl: rootUri,
    keyId,
    suites: suites.map((suite) => ({
      suite,
      components,
      architectures
    }))
  };
  const repoDir = path.join(dataReposDir, planned[0].id);
  await mkdir(repoDir, { recursive: true });
  await writeFile(
    path.join(repoDir, "suites.json"),
    JSON.stringify(suitesPayload, null, 2) + "\n",
    "utf8"
  );

  const validateRepos = spawnSync("node", ["scripts/validate-repos.mjs"], {
    stdio: "inherit",
    cwd: root
  });
  if (validateRepos.status !== 0) {
    process.exit(validateRepos.status ?? 1);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
