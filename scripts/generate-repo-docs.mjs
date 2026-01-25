import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { loadReposCatalog } from "./lib/repos-catalog.mjs";
import { loadPackagesIndex } from "./lib/packages-index.mjs";

const root = process.cwd();
const keysPath = path.join(root, "catalog", "keys.json");
const docsDir = path.join(root, "docs");
const reposDocsDir = path.join(docsDir, "repos");
const dataReposDir = path.join(root, "data", "repos");

function readJson(filePath) {
  return readFile(filePath, "utf8").then((raw) => JSON.parse(raw));
}

async function readOptionalJson(filePath) {
  try {
    return await readJson(filePath);
  } catch {
    return null;
  }
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

function formatPackageGroups(packages) {
  const grouped = new Map();
  for (const pkg of packages) {
    const first = (pkg.name?.[0] ?? "#").toUpperCase();
    const key = first >= "A" && first <= "Z" ? first : "#";
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(pkg);
  }

  const keys = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));
  const lines = [];
  lines.push(`<div class="packages-nav">`);
  lines.push(keys.map((key) => `<a href="#packages-${key}">${key}</a>`).join(" "));
  lines.push(`</div>`);
  lines.push("");

  for (const key of keys) {
    lines.push("");
    lines.push(`### <a id="packages-${key}"></a>${key}`);
    lines.push("");
    const items = grouped.get(key).sort((a, b) => a.name.localeCompare(b.name));
    for (const pkg of items) {
      const homepage = pkg.homepage ? `- Homepage: ${pkg.homepage}` : null;
      const installLines = [
        `- Install: \`sudo apt-get install ${pkg.name}\``,
        `- Install (apt): \`sudo apt install ${pkg.name}\``
      ];
      const architectures =
        Array.isArray(pkg.architectures) && pkg.architectures.length > 0
          ? pkg.architectures.join(", ")
          : "(not listed)";
      const suiteLine = pkg.suite ? `  - Suite: ${pkg.suite}` : null;
      const componentsLine =
        Array.isArray(pkg.components) && pkg.components.length > 0
          ? `  - Components: ${pkg.components.join(", ")}`
          : null;
      const latest = pkg.latestVersion || "(unknown)";
      const description = pkg.descriptionShort || "(no description)";

      lines.push(`- **${pkg.name}**`);
      lines.push(`  - Latest version: ${latest}`);
      lines.push(`  - Architectures: ${architectures}`);
      if (suiteLine) {
        lines.push(suiteLine);
      }
      if (componentsLine) {
        lines.push(componentsLine);
      }
      lines.push(`  - Description: ${description}`);
      if (homepage) {
        lines.push(`  ${homepage}`);
      }
      lines.push(...installLines.map((line) => `  ${line}`));
      lines.push(`  <details>`);
      lines.push(`  <summary>More metadata</summary>`);
      lines.push("");
      if (pkg.maintainer) {
        lines.push(`  - Maintainer: ${pkg.maintainer}`);
      }
      if (pkg.section) {
        lines.push(`  - Section: ${pkg.section}`);
      }
      if (pkg.priority) {
        lines.push(`  - Priority: ${pkg.priority}`);
      }
      const relationships = pkg.relationships ?? {};
      const relKeys = Object.keys(relationships).filter(
        (key) => Array.isArray(relationships[key]) && relationships[key].length > 0
      );
      for (const relKey of relKeys) {
        lines.push(`  - ${relKey}: ${relationships[relKey].join(", ")}`);
      }
      lines.push("");
      lines.push(`  </details>`);
      lines.push("");
    }
  }
  return lines.join("\n");
}

function buildPackagesSection(packagesData, metaData) {
  if (!packagesData || !Array.isArray(packagesData.packages)) {
    if (metaData?.errors?.length) {
      return [
        "## Packages",
        "",
        "Package inventory is unavailable due to errors:",
        ...metaData.errors.map((error) => `- ${error.message}`),
        ""
      ].join("\n");
    }
    return [
      "## Packages",
      "",
      "Package inventory has not been generated for this repository.",
      ""
    ].join("\n");
  }

  const count = packagesData.packageCount ?? packagesData.packages.length;
  const grouped = formatPackageGroups(packagesData.packages);
  const errorLines =
    metaData?.errors?.length > 0
      ? [
          "",
          "Errors during fetch:",
          ...metaData.errors.map((error) => `- ${error.message}`)
        ]
      : [];

  return [
    "## Packages",
    "",
    "> Package compatibility is defined by suite/component/architecture in the repository index;",
    "> there is no per-package OS field in the Packages metadata.",
    "",
    `<details>`,
    `<summary>Packages (${count})</summary>`,
    "",
    grouped,
    ...errorLines,
    "",
    `</details>`,
    ""
  ].join("\n");
}

function buildRepoDoc({ repo, keyEntry, packagesData, packagesMeta }) {
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
    buildPackagesSection(packagesData, packagesMeta),
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

function buildAggregatedPackagesSection(packageIndex) {
  if (!packageIndex || packageIndex.size === 0) {
    return [
      "## Packages (all repositories)",
      "",
      "Package inventory has not been generated yet.",
      ""
    ].join("\n");
  }

  const grouped = new Map();
  for (const [name, entry] of packageIndex.entries()) {
    const first = (name[0] ?? "#").toUpperCase();
    const key = first >= "A" && first <= "Z" ? first : "#";
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(entry);
  }

  const keys = Array.from(grouped.keys()).sort((a, b) => a.localeCompare(b));
  const lines = [
    "## Packages (all repositories)",
    "",
    `<details>`,
    `<summary>Aggregated package index</summary>`,
    ""
  ];

  lines.push(`<div class="packages-nav">`);
  lines.push(keys.map((key) => `<a href="#all-packages-${key}">${key}</a>`).join(" "));
  lines.push(`</div>`);

  for (const key of keys) {
    lines.push(`### <a id="all-packages-${key}"></a>${key}`);
    const items = grouped.get(key).sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of items) {
      lines.push(`- **${entry.name}**`);
      lines.push(`  - Install: \`sudo apt-get install ${entry.name}\``);
      lines.push(`  - Provided by: ${entry.repos.join(", ")}`);
      lines.push(
        `  - Latest versions: ${entry.latestByRepo
          .map((item) => {
            const label =
              item.suite || item.components
                ? `${item.repoId} (${[item.suite, item.components].filter(Boolean).join("/")})`
                : item.repoId;
            return `${label}: ${item.latestVersion}`;
          })
          .join(", ")}`
      );
    }
  }

  lines.push("");
  lines.push("</details>");
  lines.push("");
  return lines.join("\n");
}

async function buildDocsIndex(repos) {
  const grouped = new Map();
  for (const repo of repos) {
    const os = repo.os ?? "unknown";
    if (!grouped.has(os)) {
      grouped.set(os, []);
    }
    grouped.get(os).push(repo);
  }

  const packageIndex = new Map();
  for (const repo of repos) {
    const repoId = repo.id ?? "";
    if (!repoId) {
      continue;
    }
    const packagesData = await loadPackagesIndex(path.join(dataReposDir, repoId));
    if (!packagesData?.packages) {
      continue;
    }
    for (const pkg of packagesData.packages) {
      if (!packageIndex.has(pkg.name)) {
        packageIndex.set(pkg.name, {
          name: pkg.name,
          repos: [],
          latestByRepo: []
        });
      }
      const entry = packageIndex.get(pkg.name);
      const suite = pkg.suite || "";
      const components =
        Array.isArray(pkg.components) && pkg.components.length > 0
          ? pkg.components.join("+")
          : "";
      const repoLabel =
        suite || components ? `${repoId} (${[suite, components].filter(Boolean).join("/")})` : repoId;
      entry.repos.push(repoLabel);
      entry.latestByRepo.push({
        repoId,
        latestVersion: pkg.latestVersion || "(unknown)",
        suite,
        components
      });
    }
  }

  for (const entry of packageIndex.values()) {
    entry.repos = Array.from(new Set(entry.repos)).sort((a, b) => a.localeCompare(b));
    entry.latestByRepo.sort((a, b) => a.repoId.localeCompare(b.repoId));
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

  lines.push(buildAggregatedPackagesSection(packageIndex));

  return `${lines.join("\n")}\n`;
}

async function main() {
  const [reposCatalog, keysCatalog] = await Promise.all([
    loadReposCatalog({ root }),
    readJson(keysPath)
  ]);

  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos must include a repos array");
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
    const packagesMetaPath = path.join(dataReposDir, repoId, "packages.meta.json");
    const packagesData = await loadPackagesIndex(path.join(dataReposDir, repoId));
    const packagesMeta = await readOptionalJson(packagesMetaPath);
    const doc = buildRepoDoc({ repo, keyEntry, packagesData, packagesMeta });
    const docPath = path.join(reposDocsDir, `${repoId}.md`);
    await writeFile(docPath, doc, "utf8");
  }

  const indexDoc = await buildDocsIndex(reposCatalog.repos);
  await mkdir(docsDir, { recursive: true });
  await writeFile(path.join(docsDir, "README.md"), indexDoc, "utf8");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
