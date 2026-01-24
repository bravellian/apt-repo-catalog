import crypto from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

export function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export function stableStringify(value) {
  return JSON.stringify(sortKeys(value), null, 2) + "\n";
}

function sortKeys(value) {
  if (Array.isArray(value)) {
    return value.map(sortKeys);
  }
  if (value && typeof value === "object") {
    const sorted = {};
    const keys = Object.keys(value).sort((a, b) => a.localeCompare(b));
    for (const key of keys) {
      sorted[key] = sortKeys(value[key]);
    }
    return sorted;
  }
  return value;
}

export async function writeJson(filePath, data) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, stableStringify(data), "utf8");
}

export async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function normalizeSlug(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function uniqueSorted(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

export function splitLines(text) {
  return String(text ?? "").split(/\r?\n/);
}
