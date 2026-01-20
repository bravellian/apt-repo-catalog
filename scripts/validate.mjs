import { readFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const reposPath = path.join(root, "catalog", "repos.json");

const [keysRaw, reposRaw] = await Promise.all([
  readFile(keysPath, "utf8"),
  readFile(reposPath, "utf8")
]);

const keysJson = JSON.parse(keysRaw);
const reposJson = JSON.parse(reposRaw);

if (!Array.isArray(keysJson.keys) || keysJson.keys.length === 0) {
  throw new Error("catalog/keys.json must include a non-empty keys array");
}

if (!Array.isArray(reposJson.repos) || reposJson.repos.length === 0) {
  throw new Error("catalog/repos.json must include a non-empty repos array");
}

const keyIds = new Set();
for (const key of keysJson.keys) {
  for (const field of ["id", "name", "fingerprint", "key_url", "keyring"]) {
    if (!key[field]) {
      throw new Error(`Key entry missing ${field}`);
    }
  }
  if (keyIds.has(key.id)) {
    throw new Error(`Duplicate key id: ${key.id}`);
  }
  keyIds.add(key.id);
}

for (const repo of reposJson.repos) {
  for (const field of ["id", "name", "base_url", "suite", "components", "architectures", "key_id"]) {
    if (repo[field] === undefined) {
      throw new Error(`Repo entry missing ${field}`);
    }
  }
  if (!Array.isArray(repo.components) || repo.components.length === 0) {
    throw new Error(`Repo ${repo.id} must include at least one component`);
  }
  if (!Array.isArray(repo.architectures) || repo.architectures.length === 0) {
    throw new Error(`Repo ${repo.id} must include at least one architecture`);
  }
  if (!keyIds.has(repo.key_id)) {
    throw new Error(`Repo ${repo.id} references unknown key_id ${repo.key_id}`);
  }
}

console.log("Catalog validation passed.");
