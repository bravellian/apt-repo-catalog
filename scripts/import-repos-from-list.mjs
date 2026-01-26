import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { loadReposCatalog, writeReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const dataReposDir = path.join(root, "data", "repos");

function parseArgs(argv) {
  const args = { sources: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    if (key === "force" || key === "dry-run" || key === "channelFromFilename") {
      args[key] = true;
      continue;
    }
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    if (key === "source") {
      args.sources.push(next);
    } else {
      args[key] = next;
    }
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

function isUrl(value) {
  return /^https?:\/\//i.test(value);
}

async function loadSource(source) {
  if (isUrl(source)) {
    const response = await fetch(source);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${source}: ${response.status}`);
    }
    return response.text();
  }
  return readFile(source, "utf8");
}

function normalizeDebLine(line) {
  return line.trim().replace(/\s+/g, " ");
}

function parseDebLine(line) {
  const parts = line.split(/\s+/);
  if (parts.length < 4 || parts[0] !== "deb") {
    return null;
  }
  let index = 1;
  if (parts[index]?.startsWith("[")) {
    while (index < parts.length && !parts[index].endsWith("]")) {
      index += 1;
    }
    index += 1;
  }
  const uri = parts[index];
  const suite = parts[index + 1];
  const components = parts.slice(index + 2);
  if (!uri || !suite) {
    return null;
  }
  return { uri, suite, components };
}

function extractHost(uri) {
  try {
    return new URL(uri).hostname;
  } catch {
    return "unknown";
  }
}

function extractFilename(source) {
  if (isUrl(source)) {
    const url = new URL(source);
    return path.basename(url.pathname);
  }
  return path.basename(source);
}

function buildId({ vendor, channel, suite, host }) {
  return normalizeSlug([vendor, channel, suite, host].filter(Boolean).join("-"));
}

function ensureUniqueId(id, existingIds) {
  if (!existingIds.has(id)) {
    existingIds.add(id);
    return id;
  }
  let counter = 2;
  let candidate = `${id}-${counter}`;
  while (existingIds.has(candidate)) {
    counter += 1;
    candidate = `${id}-${counter}`;
  }
  existingIds.add(candidate);
  return candidate;
}

function toDocsLabel(prefix, channel) {
  const parts = [prefix, channel].filter(Boolean);
  return parts.join(" - ");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const keyId = ensureString(args.keyId, "keyId");
  const documentationUrl = ensureString(args.documentationUrl, "documentationUrl");
  const vendor = ensureString(args.vendor, "vendor");
  const name = args.name ?? vendor;
  const labelPrefix = args.labelPrefix ?? vendor;
  const sources = args.sources;
  if (!sources || sources.length === 0) {
    throw new Error("At least one --source is required");
  }

  const tags = parseTags(args.tags);
  const notes = args.notes;
  const channelFromFilename = args.channelFromFilename === true;


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
  const existingByBase = new Map();
  for (const repo of reposCatalog.repos) {
    const baseUrl = repo.baseUrl ?? repo.base_url ?? "";
    const repoKey = repo.keyId ?? repo.key_id ?? "";
    if (!baseUrl || !repoKey) {
      continue;
    }
    existingByBase.set(`${baseUrl}|${repoKey}`, repo);
  }

  const seenSources = new Set();
  const planned = [];
  const suitesByRepo = new Map();
  const skipped = [];
  let debLines = 0;
  const processed = [];

  for (const source of sources) {
    const text = await loadSource(source);
    processed.push(source);
    const filename = extractFilename(source);
    const channel = channelFromFilename
      ? normalizeSlug(filename.replace(/\.list$/i, ""))
      : "default";

    const lines = text.split(/\r?\n/);
    for (const rawLine of lines) {
      const trimmed = rawLine.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        continue;
      }
      if (!trimmed.startsWith("deb ")) {
        continue;
      }
      const normalized = normalizeDebLine(trimmed);
    const parsed = parseDebLine(normalized);
    if (!parsed) {
      skipped.push({ reason: "invalid-deb-line", source: normalized });
      continue;
    }
      debLines += 1;
      if (seenSources.has(normalized)) {
        skipped.push({ reason: "duplicate-in-import", source: normalized });
        continue;
      }
      seenSources.add(normalized);

      const host = extractHost(parsed.uri);
      const baseId = args["id-format"]
        ? normalizeSlug(
            args["id-format"]
              .replaceAll("{vendor}", vendor)
              .replaceAll("{channel}", channel || "default")
              .replaceAll("{suite}", parsed.suite)
              .replaceAll("{host}", host)
          )
        : buildId({
            vendor,
            channel: channel || "default",
            suite: parsed.suite,
            host
          });
      const baseKey = `${parsed.uri}|${keyId}`;
      let repoEntry = existingByBase.get(baseKey);

      if (!repoEntry) {
        const id = ensureUniqueId(baseId, existingIds);
        repoEntry = {
          id,
          label: toDocsLabel(labelPrefix, channel || "default"),
          name,
          baseUrl: parsed.uri,
          keyId,
          documentationUrl,
          tags,
          notes
        };
        planned.push(repoEntry);
        existingByBase.set(baseKey, repoEntry);
      }

      if (!suitesByRepo.has(repoEntry.id)) {
        suitesByRepo.set(repoEntry.id, new Map());
      }
      const suiteMap = suitesByRepo.get(repoEntry.id);
      if (!suiteMap.has(parsed.suite)) {
        suiteMap.set(parsed.suite, new Set());
      }
      const components = parsed.components.length > 0 ? parsed.components : [];
      for (const component of components) {
        suiteMap.get(parsed.suite).add(component);
      }
    }
  }

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

  console.log("Import summary:");
  console.log(`- files processed: ${processed.length}`);
  console.log(`- deb lines found: ${debLines}`);
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

  for (const [repoId, suiteMap] of suitesByRepo.entries()) {
    const repo = reposCatalog.repos.find((item) => item.id === repoId);
    if (!repo) {
      continue;
    }
    const suitesPayload = {
      generatedAt: new Date().toISOString(),
      repoId,
      baseUrl: repo.baseUrl ?? repo.base_url ?? "",
      keyId: repo.keyId ?? repo.key_id ?? "",
      suites: Array.from(suiteMap.entries()).map(([suite, componentsSet]) => ({
        suite,
        components: Array.from(componentsSet).sort((a, b) => a.localeCompare(b))
      }))
    };
    const repoDir = path.join(dataReposDir, repoId);
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
