import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const reposPath = path.join(root, "catalog", "repos.json");
const keysPath = path.join(root, "catalog", "keys.json");
const docsDir = path.join(root, "docs");
const reposDocsDir = path.join(docsDir, "repos");

function readJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => JSON.parse(raw));
}

function getKeyId(repo) {
  return repo.keyId ?? repo.key_id ?? "";
}

function normalizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

function getExpectedFingerprints(keyEntry) {
  if (!keyEntry) {
    return [];
  }
  if (Array.isArray(keyEntry.expectedFingerprints)) {
    return keyEntry.expectedFingerprints.map(normalizeFingerprint);
  }
  if (keyEntry.expectedFingerprint) {
    return [normalizeFingerprint(keyEntry.expectedFingerprint)];
  }
  if (keyEntry.fingerprint) {
    return [normalizeFingerprint(keyEntry.fingerprint)];
  }
  return [];
}

function getKeySourceUrl(keyEntry) {
  return keyEntry?.sourceUrl ?? keyEntry?.key_url ?? "";
}

function getKeyDocsUrl(keyEntry) {
  return keyEntry?.documentationUrl ?? "";
}

function getRepoLabel(repo) {
  return repo.label ?? repo.name ?? repo.id ?? "Repository";
}

function getDocsUrl(repo) {
  return repo.documentationUrl ?? repo.docsUrl ?? "";
}

function stripDebPrefix(source) {
  const trimmed = String(source ?? "").trim();
  if (trimmed.startsWith("deb ")) {
    return trimmed.slice(4).trimStart();
  }
  return trimmed;
}

function buildRepoDoc({ repo, keyEntry }) {
  const repoId = repo.id ?? "";
  const os = repo.os ?? "";
  const label = getRepoLabel(repo);
  const docsUrl = getDocsUrl(repo);
  const keyDocsUrl = getKeyDocsUrl(keyEntry);
  const keyId = getKeyId(repo);
  const fingerprints = getExpectedFingerprints(keyEntry);
  const keySourceUrl = getKeySourceUrl(keyEntry);
  const sourceLine = stripDebPrefix(repo.source);
  const rawKeyPlaceholder = `https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/${keyId}.asc`;
  const repoTags = Array.isArray(repo.tags) ? repo.tags : [];
  const keyTags = Array.isArray(keyEntry?.tags) ? keyEntry.tags : [];

  const fingerprintLines =
    fingerprints.length > 0
      ? fingerprints.map((fp) => `- ${fp}`).join("\n")
      : "- (not set)";

  return [
    `# ${label} (${os})`,
    "",
    "## Repository",
    `- Repository ID: \`${repoId}\``,
    `- OS: \`${os}\``,
    `- Source: \`${sourceLine}\``,
    "",
    "## Upstream documentation",
    docsUrl ? `- Documentation URL: ${docsUrl}` : "- Documentation URL: (not set)",
    keyDocsUrl ? `- Key documentation URL: ${keyDocsUrl}` : "- Key documentation URL: (not set)",
    "",
    "## Key reference",
    `- Key ID: \`${keyId}\``,
    "- Expected fingerprints:",
    fingerprintLines
      .split("\n")
      .map((line) => `  ${line}`)
      .join("\n"),
    `- Key source URL: ${keySourceUrl || "(not set)"}`,
    "",
    "## Install instructions",
    "",
    "Variant A (recommended modern apt with signed-by + dearmor):",
    "",
    "```bash",
    "sudo install -d -m 0755 /usr/share/keyrings",
    `curl -fsSL ${rawKeyPlaceholder} | gpg --dearmor | sudo tee /usr/share/keyrings/${keyId}.gpg >/dev/null`,
    `echo \"deb [signed-by=/usr/share/keyrings/${keyId}.gpg] ${sourceLine}\" | sudo tee /etc/apt/sources.list.d/${repoId}.list >/dev/null`,
    "sudo apt-get update",
    "```",
    "",
    "Variant B (store ASCII key, dearmor file explicitly):",
    "",
    "```bash",
    `curl -fsSL ${rawKeyPlaceholder} -o /tmp/${keyId}.asc`,
    `gpg --dearmor /tmp/${keyId}.asc`,
    `sudo install -m 0644 /tmp/${keyId}.gpg /usr/share/keyrings/${keyId}.gpg`,
    `echo \"deb [signed-by=/usr/share/keyrings/${keyId}.gpg] ${sourceLine}\" | sudo tee /etc/apt/sources.list.d/${repoId}.list >/dev/null`,
    "sudo apt-get update",
    "```",
    "",
    "## Notes",
    "- OS support: verify upstream documentation for supported releases.",
    "- The trust anchor is the fingerprint; validate it before use.",
    ...(repo.notes ? [`- Repo notes: ${repo.notes}`] : []),
    ...(repoTags.length ? [`- Repo tags: ${repoTags.join(", ")}`] : []),
    ...(keyEntry?.notes ? [`- Key notes: ${keyEntry.notes}`] : []),
    ...(keyTags.length ? [`- Key tags: ${keyTags.join(", ")}`] : []),
    ""
  ].join("\n");
}

function buildDocsIndex(repos) {
  const grouped = new Map();
  for (const repo of repos) {
    const os = repo.os ?? "unknown";
    if (!grouped.has(os)) {
      grouped.set(os, []);
    }
    grouped.get(os).push(repo);
  }

  const lines = [
    "# Repository Docs",
    "",
    "_This file is generated from catalog data. Do not edit manually._",
    ""
  ];

  const osList = Array.from(grouped.keys()).sort();
  for (const os of osList) {
    lines.push(`## ${os}`);
    const reposForOs = grouped.get(os).sort((a, b) =>
      String(a.id ?? "").localeCompare(String(b.id ?? ""))
    );
    for (const repo of reposForOs) {
      const repoId = repo.id ?? "";
      const label = getRepoLabel(repo);
      lines.push(`- [${label} (${repoId})](repos/${repoId}.md)`);
    }
    lines.push("");
  }

  return `${lines.join("\n")}\n`;
}

async function main() {
  const [reposCatalog, keysCatalog] = await Promise.all([
    readJson(reposPath),
    readJson(keysPath)
  ]);

  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }
  if (!Array.isArray(keysCatalog.keys)) {
    throw new Error("catalog/keys.json must include a keys array");
  }

  const keyMap = new Map(keysCatalog.keys.map((key) => [key.id, key]));

  await mkdir(reposDocsDir, { recursive: true });

  for (const repo of reposCatalog.repos) {
    const repoId = repo.id ?? "";
    if (!repoId) {
      continue;
    }
    const keyId = getKeyId(repo);
    const keyEntry = keyMap.get(keyId);
    const doc = buildRepoDoc({ repo, keyEntry });
    const docPath = path.join(reposDocsDir, `${repoId}.md`);
    await writeFile(docPath, doc, "utf8");
  }

  const indexDoc = buildDocsIndex(reposCatalog.repos);
  await mkdir(docsDir, { recursive: true });
  await writeFile(path.join(docsDir, "README.md"), indexDoc, "utf8");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
