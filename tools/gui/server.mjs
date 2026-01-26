import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { readFile, stat, writeFile, rm } from "node:fs/promises";
import { spawn } from "node:child_process";
import * as openpgp from "openpgp";
import { loadReposCatalog, writeReposCatalog } from "../../scripts/lib/repos-catalog.mjs";

const root = process.cwd();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname);

function json(res, status, payload) {
  const body = JSON.stringify(payload, null, 2);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body)
  });
  res.end(body);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
      if (data.length > 5_000_000) {
        reject(new Error("Payload too large"));
      }
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

function sanitizeFingerprint(value) {
  return String(value ?? "").replace(/\s+/g, "").toUpperCase();
}

async function loadKeysCatalog() {
  const raw = await readFile(path.join(root, "catalog", "keys.json"), "utf8");
  const parsed = JSON.parse(raw);
  return Array.isArray(parsed.keys) ? parsed.keys : [];
}

function getFingerprints(entry) {
  if (Array.isArray(entry.expectedFingerprints)) {
    return entry.expectedFingerprints.map(sanitizeFingerprint);
  }
  if (entry.expectedFingerprint) {
    return [sanitizeFingerprint(entry.expectedFingerprint)];
  }
  if (entry.fingerprint) {
    return [sanitizeFingerprint(entry.fingerprint)];
  }
  return [];
}

function getSourceUrls(entry) {
  const urls = [];
  if (Array.isArray(entry.sourceUrls)) {
    urls.push(...entry.sourceUrls);
  }
  if (entry.sourceUrl) {
    urls.push(entry.sourceUrl);
  }
  if (entry.key_url) {
    urls.push(entry.key_url);
  }
  if (entry.documentationUrl) {
    urls.push(entry.documentationUrl);
  }
  return urls;
}

function keyIdFromFingerprint(fingerprint) {
  const normalized = sanitizeFingerprint(fingerprint);
  if (!normalized) {
    return null;
  }
  return normalized.slice(-16).padStart(16, "0");
}

function toKeySummary(entry) {
  return {
    id: entry.id,
    vendor: entry.vendor ?? null,
    label: entry.label ?? entry.name ?? entry.id,
    status: entry.status ?? "active",
    fingerprints: getFingerprints(entry),
    sourceUrls: getSourceUrls(entry)
  };
}

function normalizeKeyId(value) {
  const raw = String(value ?? "").replace(/\s+/g, "").toUpperCase();
  if (!raw) {
    return null;
  }
  return raw.length >= 16 ? raw.slice(-16).padStart(16, "0") : raw.padStart(16, "0");
}

async function fetchBytes(url, { timeoutMs = 15000 } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal, redirect: "follow" });
    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  } finally {
    clearTimeout(timeout);
  }
}

async function listKeyIdsFromCleartext(cleartextMessage) {
  const message = await openpgp.readCleartextMessage({ cleartextMessage });
  return message
    .getSigningKeyIDs()
    .map((keyId) => normalizeKeyId(keyId.toHex ? keyId.toHex() : String(keyId)))
    .filter(Boolean);
}

async function listKeyIdsFromSignature(signatureBytes) {
  const text = Buffer.from(signatureBytes).toString("utf8");
  const isArmored = text.includes("BEGIN PGP SIGNATURE");
  const signature = isArmored
    ? await openpgp.readSignature({ armoredSignature: text })
    : await openpgp.readSignature({ binarySignature: signatureBytes });
  return signature
    .getSigningKeyIDs()
    .map((keyId) => normalizeKeyId(keyId.toHex ? keyId.toHex() : String(keyId)))
    .filter(Boolean);
}

function parseReleaseFields(text) {
  const fields = {};
  const lines = String(text ?? "").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (match) {
      fields[match[1]] = match[2].trim();
    }
  }
  return fields;
}

function parseAptSourceLine(input) {
  const raw = String(input ?? "").trim();
  if (!raw) {
    return null;
  }
  if (raw.includes("/dists/")) {
    const match = raw.match(/^(https?:\/\/[^ ]+?)\/dists\/([^/\\s]+)\/?$/i);
    if (match) {
      return { baseUrl: match[1], suite: match[2], components: [] };
    }
  }
  const debMatch = raw.match(/^deb\s+(?:\[[^\]]+]\s+)?(\S+)\s+(\S+)(.*)$/i);
  if (debMatch) {
    const components = debMatch[3]
      ? debMatch[3]
          .trim()
          .split(/\s+/)
          .filter(Boolean)
      : [];
    return { baseUrl: debMatch[1], suite: debMatch[2], components };
  }
  try {
    const parsed = new URL(raw);
    return { baseUrl: parsed.toString().replace(/\/$/, ""), suite: null, components: [] };
  } catch {
    return null;
  }
}

async function fetchRepoMetadata({ baseUrl, suite }) {
  const base = baseUrl.replace(/\/$/, "");
  const inReleaseUrl = `${base}/dists/${suite}/InRelease`;
  const releaseUrl = `${base}/dists/${suite}/Release`;
  const releaseGpgUrl = `${base}/dists/${suite}/Release.gpg`;

  try {
    const inReleaseBytes = await fetchBytes(inReleaseUrl);
    const inReleaseText = Buffer.from(inReleaseBytes).toString("utf8");
    const keyIds = await listKeyIdsFromCleartext(inReleaseText);
    const fields = parseReleaseFields(inReleaseText);
    return { ok: true, suite, keyIds, fields };
  } catch {
    // try Release + Release.gpg
  }

  try {
    const [releaseBytes, sigBytes] = await Promise.all([
      fetchBytes(releaseUrl),
      fetchBytes(releaseGpgUrl)
    ]);
    const releaseText = Buffer.from(releaseBytes).toString("utf8");
    const keyIds = await listKeyIdsFromSignature(sigBytes);
    const fields = parseReleaseFields(releaseText);
    return { ok: true, suite, keyIds, fields };
  } catch (error) {
    return { ok: false, suite, error: error instanceof Error ? error.message : String(error) };
  }
}

async function fetchKeyById(keyId) {
  const endpoints = [
    `https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x${keyId}`,
    `https://keys.openpgp.org/vks/v1/by-keyid/0x${keyId}`
  ];
  for (const url of endpoints) {
    try {
      const bytes = await fetchBytes(url);
      const keys = await openpgp.readKeys({ binaryKeys: bytes });
      if (keys.length === 0) {
        continue;
      }
      const matching = keys.filter((key) =>
        (key.getKeyIDs?.() ?? [])
          .map((id) => normalizeKeyId(id.toHex ? id.toHex() : String(id)))
          .filter(Boolean)
          .some((id) => id === keyId)
      );
      if (matching.length === 0) {
        continue;
      }
      const fingerprint = matching[0]
        .getFingerprint()
        .replace(/\s+/g, "")
        .toUpperCase();
      return { ok: true, fingerprint, sourceUrl: url };
    } catch {
      // try next
    }
  }
  return { ok: false };
}

async function lookupKeyMatch({ keyId, keysCatalog }) {
  const normalized = normalizeKeyId(keyId);
  if (!normalized) {
    return null;
  }

  for (const entry of keysCatalog) {
    const fingerprints = getFingerprints(entry);
    if (fingerprints.some((fp) => keyIdFromFingerprint(fp) === normalized)) {
      return {
        fingerprint: fingerprints[0] ?? null,
        keyId: entry.id ?? null,
        keySourceUrl: getSourceUrls(entry)[0] ?? null,
        fromCatalog: true
      };
    }
  }

  const fetched = await fetchKeyById(normalized);
  if (!fetched.ok) {
    return null;
  }
  const match = keysCatalog.find((entry) =>
    getFingerprints(entry).some((fp) => fp === fetched.fingerprint)
  );
  return {
    fingerprint: fetched.fingerprint,
    keyId: match?.id ?? null,
    keySourceUrl: fetched.sourceUrl ?? null
  };
}

async function loadRepos() {
  const catalog = await loadReposCatalog({ root, preferDir: true });
  return Array.isArray(catalog.repos) ? catalog.repos : [];
}

function toRepoSummary(repo) {
  return {
    id: repo.id,
    label: repo.label ?? repo.name ?? repo.id,
    name: repo.name ?? null,
    baseUrl: repo.baseUrl ?? null,
    keyId: repo.keyId ?? null,
    documentationUrl: repo.documentationUrl ?? null,
    tags: repo.tags ?? [],
    notes: repo.notes ?? null
  };
}

function validateRepoEntry(repo, keysById) {
  const issues = [];
  const repoId = repo?.id ?? "(missing id)";
  const baseUrl = repo?.baseUrl ?? repo?.base_url;
  const keyId = repo?.keyId ?? repo?.key_id;
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

  const repoKeys = repo && typeof repo === "object" ? Object.keys(repo) : [];
  const unknownFields = repoKeys.filter((field) => !allowedFields.has(field));
  if (unknownFields.length > 0 && repo.allowUnknownFields !== true) {
    issues.push(`Unknown fields: ${unknownFields.join(", ")}`);
  }

  if (!repo?.id) {
    issues.push("Missing repo id");
  }

  if (!keyId) {
    issues.push("Missing keyId");
  } else if (!keysById.has(keyId)) {
    issues.push(`Unknown keyId ${keyId}`);
  } else {
    const key = keysById.get(keyId);
    if (key?.status === "deprecated" && repo.allowDeprecatedKey !== true) {
      issues.push(`Key ${keyId} is deprecated (missing allowDeprecatedKey)`);
    }
  }

  if (!repo?.documentationUrl && repo.allowMissingDocsUrl !== true) {
    issues.push("Missing documentationUrl");
  } else if (repo?.documentationUrl !== undefined) {
    if (typeof repo.documentationUrl !== "string" || repo.documentationUrl.trim() === "") {
      issues.push("documentationUrl must be a non-empty string");
    }
  }

  if (repo?.tags !== undefined) {
    if (!Array.isArray(repo.tags) || repo.tags.length === 0) {
      issues.push("tags must be a non-empty array");
    } else if (repo.tags.some((tag) => typeof tag !== "string" || tag.trim() === "")) {
      issues.push("tags must be non-empty strings");
    }
  }

  if (repo?.notes !== undefined) {
    if (typeof repo.notes !== "string" || repo.notes.trim() === "") {
      issues.push("notes must be a non-empty string");
    }
  }

  if (!baseUrl) {
    issues.push("Missing baseUrl");
  } else if (typeof baseUrl !== "string" || baseUrl.trim() === "") {
    issues.push("baseUrl must be a non-empty string");
  } else if (!urlPattern.test(baseUrl.trim())) {
    issues.push("baseUrl must start with http:// or https://");
  }

  return { repoId, issues };
}

async function updateRepoKey({ id, keyId }) {
  const catalog = await loadReposCatalog({ root, preferDir: true });
  const repos = Array.isArray(catalog.repos) ? catalog.repos : [];
  const index = repos.findIndex((repo) => repo.id === id);
  if (index === -1) {
    throw new Error(`Repo ${id} not found`);
  }
  repos[index] = { ...repos[index], keyId };
  await writeReposCatalog({ root, repos, preferDir: true, clean: true });

  const suitesPath = path.join(root, "data", "repos", id, "suites.json");
  try {
    const raw = await readFile(suitesPath, "utf8");
    const parsed = JSON.parse(raw);
    parsed.keyId = keyId;
    parsed.generatedAt = new Date().toISOString();
    await writeFile(suitesPath, JSON.stringify(parsed, null, 2) + "\n", "utf8");
  } catch {
    // suites.json optional
  }

  return repos[index];
}

async function deleteRepo({ id }) {
  const catalog = await loadReposCatalog({ root, preferDir: true });
  const repos = Array.isArray(catalog.repos) ? catalog.repos : [];
  const index = repos.findIndex((repo) => repo.id === id);
  if (index === -1) {
    throw new Error(`Repo ${id} not found`);
  }
  const removed = repos.splice(index, 1)[0];
  await writeReposCatalog({ root, repos, preferDir: true, clean: true });

  const repoDir = path.join(root, "data", "repos", id);
  await rm(repoDir, { recursive: true, force: true });

  return { removed, repos };
}

async function maybeDeleteKey({ keyId, repos }) {
  if (!keyId) {
    return null;
  }
  const stillReferenced = repos.some((repo) => (repo.keyId ?? repo.key_id) === keyId);
  if (stillReferenced) {
    return null;
  }

  const keysCatalogPath = path.join(root, "catalog", "keys.json");
  const raw = await readFile(keysCatalogPath, "utf8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed.keys)) {
    return null;
  }
  const index = parsed.keys.findIndex((entry) => entry.id === keyId);
  if (index === -1) {
    return null;
  }
  const entry = parsed.keys.splice(index, 1)[0];
  await writeFile(keysCatalogPath, JSON.stringify(parsed, null, 2) + "\n", "utf8");

  const outputPath = entry.outputPath ?? entry.keyring;
  if (outputPath) {
    const fullPath = path.resolve(root, outputPath.replace(/\//g, path.sep));
    if (fullPath.startsWith(path.resolve(root) + path.sep)) {
      await rm(fullPath, { force: true });
    }
  }

  const metaPath = path.join(root, "keys", "meta", `${keyId}.json`);
  await rm(metaPath, { force: true });

  const indexPath = path.join(root, "keys", "index.json");
  try {
    const indexRaw = await readFile(indexPath, "utf8");
    const indexParsed = JSON.parse(indexRaw);
    if (Array.isArray(indexParsed.keys)) {
      const nextKeys = indexParsed.keys.filter((item) => item?.id !== keyId);
      const payload = {
        generatedAt: new Date().toISOString(),
        keyCount: nextKeys.length,
        keys: nextKeys
      };
      await writeFile(indexPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
    }
  } catch {
    // ignore missing index
  }

  return { keyId };
}

function commandSpec() {
  return {
    "add-key": {
      cmd: "node",
      args: (input) => {
        const args = ["scripts/add-key.mjs"];
        const fields = [
          ["url", input.url],
          ["id", input.id],
          ["vendor", input.vendor],
          ["label", input.label],
          ["documentationUrl", input.documentationUrl],
          ["tags", input.tags],
          ["notes", input.notes]
        ];
        for (const [key, value] of fields) {
          if (value) {
            args.push(`--${key}`, value);
          }
        }
        if (input.force) {
          args.push("--force");
        }
        return args;
      }
    },
    "add-repo": {
      cmd: "node",
      args: (input) => {
        const args = ["scripts/add-repo.mjs"];
        const fields = [
          ["id", input.id],
          ["label", input.label],
          ["name", input.name],
          ["baseUrl", input.baseUrl],
          ["keyId", input.keyId],
          ["documentationUrl", input.documentationUrl],
          ["tags", input.tags],
          ["notes", input.notes],
          ["suites", input.suites],
          ["components", input.components],
          ["architectures", input.architectures]
        ];
        for (const [key, value] of fields) {
          if (value) {
            args.push(`--${key}`, value);
          }
        }
        if (input.force) {
          args.push("--force");
        }
        if (input.allowDeprecatedKey) {
          args.push("--allowDeprecatedKey");
        }
        return args;
      }
    },
    "update-keys": {
      cmd: "node",
      args: () => ["scripts/update-keys.mjs"]
    },
    "validate-keys": {
      cmd: "node",
      args: () => ["scripts/validate-keys.mjs"]
    },
    "validate-repos": {
      cmd: "node",
      args: () => ["scripts/validate-repos.mjs"]
    },
    "sync-catalog": {
      cmd: "node",
      args: () => ["scripts/discovery/index.mjs", "sync", "--write-catalog"]
    },
    "backfill-key-hints": {
      cmd: "node",
      args: () => ["scripts/discovery/backfill-key-hints.mjs"]
    },
    "auto-import-keys": {
      cmd: "node",
      args: (input) => {
        const args = ["scripts/discovery/auto-import-keys.mjs"];
        if (input.maxRepos) {
          args.push("--max-repos", String(input.maxRepos));
        }
        if (input.dryRun) {
          args.push("--dry-run");
        }
        return args;
      }
    }
  };
}

async function runCommand(command, input) {
  const spec = commandSpec()[command];
  if (!spec) {
    throw new Error(`Unknown command: ${command}`);
  }

  const args = spec.args(input ?? {});
  return new Promise((resolve) => {
    const child = spawn(spec.cmd, args, { cwd: root, shell: false });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk.toString();
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk.toString();
    });
    child.on("close", (code) => {
      resolve({ code, stdout, stderr, command: [spec.cmd, ...args].join(" ") });
    });
  });
}

async function serveStatic(req, res) {
  const url = new URL(req.url ?? "/", "http://localhost");
  let pathname = url.pathname;
  if (pathname === "/") {
    pathname = "/index.html";
  }
  const filePath = path.join(publicDir, pathname);
  try {
    const info = await stat(filePath);
    if (!info.isFile()) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    const data = await readFile(filePath);
    const ext = path.extname(filePath);
    const contentType =
      ext === ".html"
        ? "text/html; charset=utf-8"
        : ext === ".css"
          ? "text/css; charset=utf-8"
          : ext === ".js"
            ? "text/javascript; charset=utf-8"
            : "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? "/", "http://localhost");

  if (req.method === "GET" && url.pathname === "/api/keys") {
    const keys = await loadKeysCatalog();
    return json(res, 200, { keys: keys.map(toKeySummary) });
  }

  if (req.method === "POST" && url.pathname === "/api/import-repo") {
    try {
      const raw = await readBody(req);
      const payload = JSON.parse(raw || "{}");
      const parsed = parseAptSourceLine(payload.input);
      if (!parsed?.baseUrl) {
        throw new Error("Provide a base URL or apt source line.");
      }
      const repos = await loadRepos();
      const existingRepo = repos.find((repo) => repo.baseUrl === parsed.baseUrl) ?? null;
      let suitesToTry = parsed.suite
        ? [parsed.suite]
        : ["stable", "bookworm", "bullseye", "buster", "trixie", "sid", "jammy", "noble", "focal"];
      if (existingRepo) {
        const suitesPath = path.join(root, "data", "repos", existingRepo.id, "suites.json");
        try {
          const rawSuites = await readFile(suitesPath, "utf8");
          const parsedSuites = JSON.parse(rawSuites);
          const suites = (parsedSuites?.suites ?? []).map((entry) => entry.suite).filter(Boolean);
          if (suites.length > 0) {
            suitesToTry = suites;
          }
        } catch {
          // ignore suites
        }
      }
      let metadata = null;
      for (const suite of suitesToTry) {
        const result = await fetchRepoMetadata({ baseUrl: parsed.baseUrl, suite });
        if (result.ok) {
          metadata = result;
          break;
        }
      }
      if (!metadata) {
        throw new Error("Unable to fetch Release/InRelease for detected suites.");
      }

      const fields = metadata.fields ?? {};
      const components = fields.Components ? fields.Components.split(/\s+/).filter(Boolean) : [];
      const architectures = fields.Architectures
        ? fields.Architectures.split(/\s+/).filter(Boolean)
        : [];
      const label = fields.Origin || fields.Label || new URL(parsed.baseUrl).hostname;

      const keysCatalog = await loadKeysCatalog();
      let keyMatch = null;
      for (const keyId of metadata.keyIds ?? []) {
        const match = await lookupKeyMatch({ keyId, keysCatalog });
        if (match) {
          keyMatch = match;
          break;
        }
      }

      if (!keyMatch && existingRepo?.keyId) {
        const existingKey = keysCatalog.find((key) => key.id === existingRepo.keyId);
        if (existingKey) {
          keyMatch = {
            fingerprint: getFingerprints(existingKey)[0] ?? null,
            keyId: existingRepo.keyId,
            keySourceUrl: getSourceUrls(existingKey)[0] ?? null,
            fromExistingRepo: true
          };
        }
      }

      return json(res, 200, {
        baseUrl: parsed.baseUrl,
        suite: metadata.suite,
        components,
        architectures,
        label,
        keyMatch,
        existingRepo: existingRepo ? toRepoSummary(existingRepo) : null
      });
    } catch (error) {
      return json(res, 400, { error: error instanceof Error ? error.message : String(error) });
    }
  }

  if (req.method === "GET" && url.pathname.startsWith("/api/repos/") && url.pathname.endsWith("/validate")) {
    const id = decodeURIComponent(url.pathname.split("/").slice(-2)[0] ?? "");
    const repos = await loadRepos();
    const repo = repos.find((item) => item.id === id);
    if (!repo) {
      return json(res, 404, { error: "Repo not found" });
    }
    const keysCatalog = await loadKeysCatalog();
    const keysById = new Map(keysCatalog.filter((key) => key?.id).map((key) => [key.id, key]));
    const result = validateRepoEntry(repo, keysById);
    return json(res, 200, { ok: result.issues.length === 0, issues: result.issues });
  }

  if (req.method === "GET" && url.pathname.startsWith("/api/repos/") && url.pathname.endsWith("/suites")) {
    const id = decodeURIComponent(url.pathname.split("/").slice(-2)[0] ?? "");
    const suitesPath = path.join(root, "data", "repos", id, "suites.json");
    try {
      const raw = await readFile(suitesPath, "utf8");
      const parsed = JSON.parse(raw);
      return json(res, 200, { suites: parsed });
    } catch {
      return json(res, 404, { error: "suites.json not found" });
    }
  }

  if (req.method === "GET" && url.pathname === "/api/repos") {
    const repos = await loadRepos();
    return json(res, 200, { repos: repos.map(toRepoSummary) });
  }

  if (req.method === "GET" && url.pathname.startsWith("/api/repos/")) {
    const id = decodeURIComponent(url.pathname.split("/").pop() ?? "");
    const repos = await loadRepos();
    const repo = repos.find((item) => item.id === id);
    if (!repo) {
      return json(res, 404, { error: "Repo not found" });
    }
    return json(res, 200, { repo: toRepoSummary(repo) });
  }

  if (req.method === "PATCH" && url.pathname.startsWith("/api/repos/")) {
    try {
      const id = decodeURIComponent(url.pathname.split("/").pop() ?? "");
      const raw = await readBody(req);
      const payload = JSON.parse(raw || "{}");
      if (!payload.keyId) {
        throw new Error("Missing keyId");
      }
      const updated = await updateRepoKey({ id, keyId: payload.keyId });
      return json(res, 200, { repo: toRepoSummary(updated) });
    } catch (error) {
      return json(res, 400, { error: error instanceof Error ? error.message : String(error) });
    }
  }

  if (req.method === "DELETE" && url.pathname.startsWith("/api/repos/")) {
    try {
      const id = decodeURIComponent(url.pathname.split("/").pop() ?? "");
      const { removed, repos } = await deleteRepo({ id });
      const removedKey = await maybeDeleteKey({ keyId: removed.keyId, repos });
      return json(res, 200, {
        deletedRepo: toRepoSummary(removed),
        deletedKey: removedKey
      });
    } catch (error) {
      return json(res, 400, { error: error instanceof Error ? error.message : String(error) });
    }
  }

  if (req.method === "GET" && url.pathname === "/api/keys/lookup") {
    const keys = await loadKeysCatalog();
    const fingerprint = url.searchParams.get("fingerprint");
    const sourceUrl = url.searchParams.get("url");
    let matches = [];
    if (fingerprint) {
      const target = sanitizeFingerprint(fingerprint);
      matches = keys.filter((entry) =>
        getFingerprints(entry).some((fp) => fp === target)
      );
    } else if (sourceUrl) {
      const target = sourceUrl.toLowerCase();
      matches = keys.filter((entry) =>
        getSourceUrls(entry).some((value) => value.toLowerCase() === target)
      );
    }
    return json(res, 200, { keys: matches.map(toKeySummary) });
  }

  if (req.method === "POST" && url.pathname === "/api/run") {
    try {
      const raw = await readBody(req);
      const payload = JSON.parse(raw || "{}");
      const result = await runCommand(payload.command, payload.input);
      return json(res, 200, result);
    } catch (error) {
      return json(res, 400, { error: error instanceof Error ? error.message : String(error) });
    }
  }

  return serveStatic(req, res);
});

const port = Number.parseInt(process.env.GUI_PORT ?? "58787", 10);
server.listen(port, () => {
  console.log(`GUI running at http://localhost:${port}`);
});
