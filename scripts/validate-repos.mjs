import { readFile } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const urlPattern = /^https?:\/\//i;
const allowedFields = new Set([
  "id",
  "name",
  "label",
  "baseUrl",
  "documentationUrl",
  "docsUrl",
  "tags",
  "notes",
  "allowDeprecatedKey",
  "allowMissingDocsUrl",
  "allowUnknownFields",
  "keyId",
  "key_id",
  "base_url"
]);

function loadJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => JSON.parse(raw));
}

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    args[key] = true;
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const [keysCatalog, reposCatalog] = await Promise.all([
    loadJson(keysPath),
    loadReposCatalog({ root })
  ]);

  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
  }
  const keysById = new Map();
  for (const key of keysCatalog.keys) {
    if (key?.id) {
      keysById.set(key.id, key);
    }
  }

  const issues = [];
  const repoIssues = new Map();
  const seenIds = new Set();

  for (const repo of reposCatalog.repos) {
    const repoId = repo?.id ?? "(missing id)";
    const repoKeys = repo && typeof repo === "object" ? Object.keys(repo) : [];
    const unknownFields = repoKeys.filter((field) => !allowedFields.has(field));
    if (unknownFields.length > 0 && repo.allowUnknownFields !== true) {
      const message = `Repo ${repoId} has unknown fields: ${unknownFields.join(", ")}`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    }

    if (!repo?.id) {
      const message = "Repo entry missing id";
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else if (seenIds.has(repo.id)) {
      const message = `Duplicate repo id: ${repo.id}`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else {
      seenIds.add(repo.id);
    }

    const keyId = getKeyId(repo);
    if (!keyId) {
      const message = `Repo ${repoId} missing keyId`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else if (!keysById.has(keyId)) {
      const message = `Repo ${repoId} references unknown keyId ${keyId}`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else {
      const key = keysById.get(keyId);
      if (key?.status === "deprecated" && repo.allowDeprecatedKey !== true) {
        const message = `Repo ${repoId} uses deprecated key ${keyId} without allowDeprecatedKey`;
        issues.push(message);
        repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
      }
    }

    if (!repo?.documentationUrl && repo.allowMissingDocsUrl !== true) {
      const message = `Repo ${repoId} missing documentationUrl`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else if (repo?.documentationUrl !== undefined) {
      if (typeof repo.documentationUrl !== "string" || repo.documentationUrl.trim() === "") {
        const message = `Repo ${repoId} documentationUrl must be a non-empty string`;
        issues.push(message);
        repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
      }
    }

    if (repo?.tags !== undefined) {
      if (!Array.isArray(repo.tags) || repo.tags.length === 0) {
        const message = `Repo ${repoId} tags must be a non-empty array`;
        issues.push(message);
        repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
      } else if (repo.tags.some((tag) => typeof tag !== "string" || tag.trim() === "")) {
        const message = `Repo ${repoId} tags must be non-empty strings`;
        issues.push(message);
        repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
      }
    }

    if (repo?.notes !== undefined) {
      if (typeof repo.notes !== "string" || repo.notes.trim() === "") {
        const message = `Repo ${repoId} notes must be a non-empty string`;
        issues.push(message);
        repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
      }
    }

    if (repo?.lastChecked !== undefined || repo?.lastVerified !== undefined) {
      const message = `Repo ${repoId} must not include drift fields like lastChecked/lastVerified`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    }

    const baseUrl = repo?.baseUrl ?? repo?.base_url;
    if (!baseUrl) {
      const message = `Repo ${repoId} missing baseUrl`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else if (typeof baseUrl !== "string" || baseUrl.trim() === "") {
      const message = `Repo ${repoId} baseUrl must be a non-empty string`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    } else if (!urlPattern.test(baseUrl.trim())) {
      const message = `Repo ${repoId} baseUrl must start with http:// or https://`;
      issues.push(message);
      repoIssues.set(repoId, (repoIssues.get(repoId) ?? []).concat(message));
    }
  }

  if (args.status) {
    for (const repo of reposCatalog.repos) {
      const repoId = repo?.id ?? "(missing id)";
      const repoProblems = repoIssues.get(repoId) ?? [];
      if (repoProblems.length === 0) {
        console.log(`OK ${repoId}`);
      } else {
        console.log(`FAIL ${repoId} (${repoProblems.length})`);
      }
    }
  }

  if (issues.length > 0) {
    console.error("Repository validation failed:");
    for (const issue of issues) {
      console.error(`- ${issue}`);
    }
    process.exit(1);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
