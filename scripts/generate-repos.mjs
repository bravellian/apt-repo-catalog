import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const reposPath = path.join(root, "catalog", "repos.json");
const keysPath = path.join(root, "catalog", "keys.json");
const osPattern = /^(ubuntu|debian)(?:-([0-9]{2}\.[0-9]{2}|[0-9]{1,2}))?$/;

const ubuntuCodenameToVersion = {
  jammy: "22.04",
  noble: "24.04",
  focal: "20.04"
};

const debianCodenameToVersion = {
  bullseye: "11",
  bookworm: "12",
  trixie: "13"
};

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

function resolveOs(distro, suite, mode) {
  const codename = suite.toLowerCase();
  if (mode === "codename") {
    return `${distro}-${codename}`;
  }
  if (distro === "ubuntu") {
    const version = ubuntuCodenameToVersion[codename];
    if (!version) {
      throw new Error(`Unknown Ubuntu suite ${suite} for version mapping`);
    }
    return `ubuntu-${version}`;
  }
  if (distro === "debian") {
    const version = debianCodenameToVersion[codename];
    if (!version) {
      throw new Error(`Unknown Debian suite ${suite} for version mapping`);
    }
    return `debian-${version}`;
  }
  throw new Error(`Unsupported distro ${distro}`);
}

function buildLabel({ labelPrefix, distro, suite, component, osMode }) {
  if (distro === "ubuntu" && osMode === "version") {
    const version = ubuntuCodenameToVersion[suite.toLowerCase()];
    return `${labelPrefix} - Ubuntu ${version} (${titleCase(suite)}) - ${component}`;
  }
  if (distro === "debian" && osMode === "version") {
    const version = debianCodenameToVersion[suite.toLowerCase()];
    return `${labelPrefix} - Debian ${version} (${titleCase(suite)}) - ${component}`;
  }
  return `${labelPrefix} - ${titleCase(distro)} (${titleCase(suite)}) - ${component}`;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const vendor = ensureString(args.vendor, "vendor");
  const rootUri = normalizeRootUri(ensureString(args.rootUri, "rootUri"));
  const distro = ensureString(args.distro, "distro");
  if (distro !== "ubuntu" && distro !== "debian") {
    throw new Error("distro must be ubuntu or debian");
  }
  const suites = parseList(ensureString(args.suites, "suites"));
  const components = parseList(ensureString(args.components, "components"));
  const keyId = ensureString(args.keyId, "keyId");
  const documentationUrl = ensureString(args.documentationUrl, "documentationUrl");
  const name = args.name ?? vendor;
  const labelPrefix = args.labelPrefix ?? titleCase(vendor);
  const osMode = args["os-mode"] ?? "version";
  if (osMode !== "version" && osMode !== "codename") {
    throw new Error("os-mode must be version or codename");
  }

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

  const reposCatalog = JSON.parse(await readFile(reposPath, "utf8"));
  if (!Array.isArray(reposCatalog.repos)) {
    throw new Error("catalog/repos.json must include a repos array");
  }

  const existingIds = new Set(reposCatalog.repos.map((repo) => repo.id));
  const existingBySignature = new Map();
  for (const repo of reposCatalog.repos) {
    if (!repo.source || !repo.os) {
      continue;
    }
    const signature = `${repo.os}|${repo.source}|${repo.keyId ?? repo.key_id ?? ""}`;
    existingBySignature.set(signature, repo);
  }

  const planned = [];
  const skipped = [];

  for (const suite of suites) {
    const osValue = resolveOs(distro, suite, osMode);
    if (!osPattern.test(osValue)) {
      throw new Error(`Generated os ${osValue} is invalid for suite ${suite}`);
    }
    for (const component of components) {
      const source = `deb ${rootUri} ${suite} ${component}`;
      const signature = `${osValue}|${source}|${keyId}`;
      if (existingBySignature.has(signature)) {
        skipped.push({ reason: "duplicate-existing", source });
        continue;
      }

      const baseId = normalizeSlug(`${vendor}-${distro}-${suite}-${component}`);
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
        label: buildLabel({ labelPrefix, distro, suite, component, osMode }),
        os: osValue,
        name,
        source,
        keyId,
        documentationUrl,
        tags,
        notes
      });
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

  const data = JSON.stringify(reposCatalog, null, 2) + "\n";
  await writeFile(reposPath, data, "utf8");

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
