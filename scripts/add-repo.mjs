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
    if (key === "force" || key === "allowDeprecatedKey") {
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

async function loadJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

function parseList(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseTags(value) {
  if (!value) {
    return undefined;
  }
  const tags = value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return tags.length > 0 ? tags : undefined;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const id = ensureString(args.id, "id");
  const label = ensureString(args.label, "label");
  const name = ensureString(args.name, "name");
  const baseUrl = ensureString(args.baseUrl ?? args.base_url, "baseUrl");
  const keyId = ensureString(args.keyId, "keyId");
  const documentationUrl = args.documentationUrl;
  const tags = parseTags(args.tags);
  const notes = args.notes;
  const suites = parseList(args.suites);
  const components = parseList(args.components);
  const architectures = parseList(args.architectures);

  if (documentationUrl !== undefined && documentationUrl.trim() === "") {
    throw new Error("documentationUrl must be a non-empty string");
  }
  if (notes !== undefined && notes.trim() === "") {
    throw new Error("notes must be a non-empty string");
  }

  const keysCatalog = await loadJson(keysPath);
  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }

  const keyEntry = keysCatalog.keys.find((key) => key.id === keyId);
  if (!keyEntry) {
    throw new Error(`Key ${keyId} not found in catalog/keys.json`);
  }
  if (keyEntry.status && keyEntry.status !== "active" && !args.allowDeprecatedKey) {
    throw new Error(`Key ${keyId} is not active`);
  }

  const reposCatalog = await loadReposCatalog({ root });
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }

  const existingIndex = reposCatalog.repos.findIndex((repo) => repo.id === id);
  if (existingIndex !== -1 && !args.force) {
    throw new Error(`Repo id ${id} already exists`);
  }

  const entry = {
    id,
    label,
    name,
    baseUrl,
    keyId,
    documentationUrl,
    tags,
    notes
  };

  if (!documentationUrl) {
    entry.allowMissingDocsUrl = true;
  }

  if (args.allowDeprecatedKey) {
    entry.allowDeprecatedKey = true;
  }

  if (existingIndex === -1) {
    reposCatalog.repos.push(entry);
  } else {
    reposCatalog.repos.splice(existingIndex, 1, entry);
  }
  await writeReposCatalog({ root, repos: reposCatalog.repos, preferDir: true, clean: true });

  if (suites.length > 0) {
    const suitesPayload = {
      generatedAt: new Date().toISOString(),
      repoId: id,
      baseUrl,
      keyId,
      suites: suites.map((suite) => ({
        suite,
        components,
        architectures
      }))
    };
    const repoDir = path.join(dataReposDir, id);
    await mkdir(repoDir, { recursive: true });
    await writeFile(
      path.join(repoDir, "suites.json"),
      JSON.stringify(suitesPayload, null, 2) + "\n",
      "utf8"
    );
  }

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
