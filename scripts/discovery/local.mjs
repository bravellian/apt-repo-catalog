import path from "node:path";
import { readdir, readFile, stat } from "node:fs/promises";
import { extractCandidatesFromText } from "./parsers.mjs";
import { sha256Hex } from "./utils.mjs";

const defaultIgnoreDirs = new Set([
  ".git",
  "node_modules",
  "data",
  "keys",
  "reports"
]);

const defaultExtensions = new Set([".list", ".sources", ".sh", ".yml", ".yaml"]);

function shouldIncludeFile(filePath) {
  const base = path.basename(filePath);
  if (base === "Dockerfile" || base.endsWith(".Dockerfile")) {
    return true;
  }
  const ext = path.extname(base).toLowerCase();
  return defaultExtensions.has(ext);
}

async function walkDir(root, { ignoreDirs, maxFiles } = {}) {
  const results = [];
  const ignored = ignoreDirs ?? defaultIgnoreDirs;
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (ignored.has(entry.name)) {
          continue;
        }
        stack.push(fullPath);
        continue;
      }
      if (!entry.isFile()) {
        continue;
      }
      if (shouldIncludeFile(fullPath)) {
        results.push(fullPath);
        if (maxFiles && results.length >= maxFiles) {
          return results;
        }
      }
    }
  }

  return results;
}

export async function mineLocalFiles({ rootDir, maxFileSizeBytes, maxFiles }) {
  const files = await walkDir(rootDir, { maxFiles });
  const candidates = [];

  for (const filePath of files) {
    try {
      const info = await stat(filePath);
      if (maxFileSizeBytes && info.size > maxFileSizeBytes) {
        continue;
      }
      const text = await readFile(filePath, "utf8");
      const extracted = extractCandidatesFromText(text);
      for (const candidate of extracted) {
        candidates.push({
          id: sha256Hex(`${filePath}:${candidate.lineNumber ?? ""}:${candidate.raw ?? ""}`),
          type: candidate.type,
          raw: candidate.raw,
          parsed: candidate.parsed,
          source: {
            kind: "local",
            path: filePath.replace(/\\/g, "/"),
            line: candidate.lineNumber
          }
        });
      }
    } catch {
      continue;
    }
  }

  return candidates;
}
