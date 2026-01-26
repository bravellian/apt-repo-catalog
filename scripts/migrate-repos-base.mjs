import path from "node:path";
import { mkdir, writeFile } from "node:fs/promises";
import { loadReposCatalog, writeReposCatalog } from "./lib/repos-catalog.mjs";

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
    if (key === "dry-run" || key === "write") {
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

function normalizeBaseUrl(value) {
  if (!value) {
    return "";
  }
  try {
    const url = new URL(value);
    return url.toString().replace(/\/+$/, "");
  } catch {
    return value.replace(/\/+$/, "");
  }
}

function normalizeRepoId(value) {
  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function stripDebPrefix(source) {
  const trimmed = String(source ?? "").trim();
  if (trimmed.startsWith("deb ")) {
    return trimmed.slice(4).trimStart();
  }
  if (trimmed.startsWith("deb-src ")) {
    return trimmed.slice(8).trimStart();
  }
  return trimmed;
}

function parseDebLine(source) {
  const trimmed = stripDebPrefix(source);
  let remaining = trimmed;
  const optionsMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  const options = {};
  if (optionsMatch) {
    const optionPairs = optionsMatch[1].split(/\s+/);
    for (const pair of optionPairs) {
      const [key, value] = pair.split("=", 2);
      if (key && value) {
        options[key] = value;
      } else if (key) {
        options[key] = true;
      }
    }
    remaining = remaining.slice(optionsMatch[0].length);
  }
  const parts = remaining.split(/\s+/).filter(Boolean);
  return {
    uri: parts[0] ?? "",
    suite: parts[1] ?? "",
    components: parts.slice(2),
    options
  };
}

function mergeStringSet(target, values) {
  if (!values) {
    return;
  }
  for (const value of values) {
    if (value) {
      target.add(value);
    }
  }
}

function toArray(value) {
  if (!value) {
    return [];
  }
  if (Array.isArray(value)) {
    return value;
  }
  return [value];
}

function pickBaseEntry(entries) {
  return [...entries].sort((a, b) => {
    const aId = String(a.id ?? "");
    const bId = String(b.id ?? "");
    if (aId.length !== bId.length) {
      return aId.length - bId.length;
    }
    const aLabel = String(a.label ?? "");
    const bLabel = String(b.label ?? "");
    if (aLabel.length !== bLabel.length) {
      return aLabel.length - bLabel.length;
    }
    return aId.localeCompare(bId);
  })[0];
}

async function writeSuitesMeta({ repoId, baseUrl, keyId, suites }) {
  const repoDir = path.join(dataReposDir, repoId);
  await mkdir(repoDir, { recursive: true });
  const payload = {
    generatedAt: new Date().toISOString(),
    repoId,
    baseUrl,
    keyId,
    suites
  };
  const filePath = path.join(repoDir, "suites.json");
  await writeFile(filePath, JSON.stringify(payload, null, 2) + "\n", "utf8");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const reposCatalog = await loadReposCatalog({ root });
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }

  const groups = new Map();
  const warnings = [];
  const missingSources = [];
  const missingSuites = [];

  for (const repo of reposCatalog.repos) {
    const repoId = repo?.id ?? "(missing id)";
    const keyId = repo?.keyId ?? repo?.key_id ?? "";
    const source = repo?.source ?? "";
    if (!source) {
      missingSources.push(repoId);
      continue;
    }
    const parsed = parseDebLine(source);
    const baseUrl = normalizeBaseUrl(repo.baseUrl ?? repo.base_url ?? parsed.uri);
    const suite = repo.suite ?? parsed.suite;
    if (!suite) {
      missingSuites.push(repoId);
      continue;
    }

    const groupKey = `${baseUrl}|${keyId}`;
    if (!groups.has(groupKey)) {
      groups.set(groupKey, {
        baseUrl,
        keyId,
        entries: [],
        suites: new Map()
      });
    }
    const group = groups.get(groupKey);
    group.entries.push(repo);

    if (!group.suites.has(suite)) {
      group.suites.set(suite, {
        suite,
        components: new Set(),
        architectures: new Set(),
        observedOs: new Set(),
        options: null
      });
    }
    const suiteEntry = group.suites.get(suite);
    mergeStringSet(suiteEntry.components, repo.components ?? parsed.components);

    const archList = toArray(repo.architectures);
    if (parsed.options.arch) {
      archList.push(...String(parsed.options.arch).split(/[,\s]+/).filter(Boolean));
    }
    mergeStringSet(suiteEntry.architectures, archList);

    if (repo.os) {
      suiteEntry.observedOs.add(repo.os);
    }

    const options = { ...parsed.options };
    delete options["signed-by"];
    if (!suiteEntry.options) {
      suiteEntry.options = options;
    } else {
      const mismatches = Object.keys(options).filter(
        (key) => suiteEntry.options[key] !== undefined && suiteEntry.options[key] !== options[key]
      );
      if (mismatches.length > 0) {
        warnings.push(
          `Suite ${suite} in ${baseUrl} has conflicting options for ${mismatches.join(", ")}`
        );
      }
    }
  }

  const baseRepos = [];
  const usedIds = new Set();
  const suiteWrites = [];

  for (const group of groups.values()) {
    const baseEntry = pickBaseEntry(group.entries);
    const baseIdCandidate = normalizeRepoId(baseEntry?.id ?? baseEntry?.name ?? group.baseUrl);
    let baseId = baseIdCandidate || normalizeRepoId(group.baseUrl);
    if (!baseId) {
      baseId = `repo-${baseRepos.length + 1}`;
    }
    if (usedIds.has(baseId)) {
      let counter = 2;
      while (usedIds.has(`${baseId}-${counter}`)) {
        counter += 1;
      }
      baseId = `${baseId}-${counter}`;
    }
    usedIds.add(baseId);

    const repoEntry = {
      id: baseId,
      label: baseEntry?.label,
      name: baseEntry?.name,
      baseUrl: group.baseUrl,
      keyId: group.keyId || undefined,
      documentationUrl: baseEntry?.documentationUrl,
      docsUrl: baseEntry?.docsUrl,
      tags: baseEntry?.tags,
      notes: baseEntry?.notes,
      allowMissingDocsUrl: baseEntry?.allowMissingDocsUrl,
      allowUnknownFields: baseEntry?.allowUnknownFields,
      allowDeprecatedKey: baseEntry?.allowDeprecatedKey
    };
    Object.keys(repoEntry).forEach((key) => repoEntry[key] === undefined && delete repoEntry[key]);
    baseRepos.push(repoEntry);

    const suites = Array.from(group.suites.values()).map((suiteEntry) => ({
      suite: suiteEntry.suite,
      components: Array.from(suiteEntry.components).sort((a, b) => a.localeCompare(b)),
      architectures: Array.from(suiteEntry.architectures).sort((a, b) => a.localeCompare(b)),
      observedOs: Array.from(suiteEntry.observedOs).sort((a, b) => a.localeCompare(b)),
      options: suiteEntry.options && Object.keys(suiteEntry.options).length > 0 ? suiteEntry.options : undefined
    }));
    suiteWrites.push({ repoId: baseId, baseUrl: group.baseUrl, keyId: group.keyId, suites });
  }

  if (args["dry-run"] || !args.write) {
    console.log("Migration summary:");
    console.log(`- input repos: ${reposCatalog.repos.length}`);
    console.log(`- base repos: ${baseRepos.length}`);
    console.log(`- suites files: ${suiteWrites.length}`);
    if (missingSources.length > 0) {
      console.log(`- missing source entries: ${missingSources.length}`);
    }
    if (missingSuites.length > 0) {
      console.log(`- missing suite entries: ${missingSuites.length}`);
    }
    if (warnings.length > 0) {
      console.log(`- warnings: ${warnings.length}`);
      for (const warning of warnings.slice(0, 10)) {
        console.log(`  - ${warning}`);
      }
    }
    if (!args.write) {
      console.log("Run with --write to apply changes.");
    }
    return;
  }

  await writeReposCatalog({ root, repos: baseRepos, preferDir: true, clean: true });
  for (const item of suiteWrites) {
    await writeSuitesMeta(item);
  }

  console.log("Migration complete:");
  console.log(`- base repos written: ${baseRepos.length}`);
  console.log(`- suites metadata written: ${suiteWrites.length}`);
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
