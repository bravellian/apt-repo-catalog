import crypto from "node:crypto";
import { TextDecoder } from "node:util";
import * as openpgp from "openpgp";

const decoder = new TextDecoder("utf-8", { fatal: false });
const armoredMarker = "BEGIN PGP PUBLIC KEY BLOCK";

export async function fetchBytes(url) {
  const response = await fetch(url, { redirect: "follow" });
  if (!response.ok) {
    throw new Error(`Fetch failed with status ${response.status} for ${url}`);
  }
  const buffer = await response.arrayBuffer();
  return new Uint8Array(buffer);
}

export function toUtf8(bytes) {
  return decoder.decode(bytes);
}

export function sniffContentType(bytes) {
  if (!bytes || bytes.length === 0) {
    return "unknown";
  }
  const text = toUtf8(bytes);
  const lowered = text.toLowerCase();
  if (lowered.includes("<html") || lowered.includes("<!doctype")) {
    return "html";
  }
  if (text.includes(armoredMarker)) {
    return "armored";
  }
  return "binary";
}

export async function parsePublicKeys(input) {
  if (typeof input === "string") {
    return openpgp.readKeys({ armoredKeys: input });
  }

  if (!(input instanceof Uint8Array)) {
    throw new TypeError("Input must be an armored string or Uint8Array");
  }

  const contentType = sniffContentType(input);
  if (contentType === "armored") {
    return openpgp.readKeys({ armoredKeys: toUtf8(input) });
  }

  return openpgp.readKeys({ binaryKeys: input });
}

export async function normalizeArmored(keys) {
  const blocks = [];
  for (const key of keys) {
    blocks.push(await key.armor());
  }
  const joined = blocks.join("\n").trimEnd();
  return `${joined}\n`;
}

export function keyFingerprints(keys) {
  return keys.map((key) => key.getFingerprint().replace(/\s+/g, "").toUpperCase());
}

export function keyCreatedDates(keys) {
  return keys.map((key) => {
    try {
      const created = key.getCreationTime?.();
      return created ? created.toISOString() : null;
    } catch {
      return null;
    }
  });
}

export function keyUserIds(keys) {
  const ids = new Set();
  for (const key of keys) {
    try {
      const users = key.getUserIDs?.() ?? [];
      for (const user of users) {
        ids.add(user);
      }
    } catch {
      // Best-effort; omit if unavailable.
    }
  }
  return Array.from(ids);
}

export function sha256Hex(bytes) {
  return crypto.createHash("sha256").update(bytes).digest("hex");
}

export function detectArmored(bytes) {
  const text = toUtf8(bytes);
  if (text.includes(armoredMarker)) {
    return text;
  }
  return null;
}

export const readKeysFromInput = parsePublicKeys;
export const armorKeys = normalizeArmored;
export const getFingerprints = keyFingerprints;

export function getUserIds(keys) {
  const seen = new Set();
  const collected = [];
  for (const key of keys) {
    let users = [];
    try {
      users = key.getUserIDs?.() ?? [];
    } catch {
      users = [];
    }
    for (const user of users) {
      const value = String(user).trim();
      if (!value || seen.has(value)) {
        continue;
      }
      seen.add(value);
      collected.push(value);
    }
  }
  return collected;
}

export function deriveKeyIdsFromFingerprints(fingerprints) {
  return fingerprints.map((fingerprint) => {
    const normalized = String(fingerprint).replace(/\s+/g, "").toUpperCase();
    return {
      fingerprint: normalized,
      keyIdLong: normalized.slice(-16),
      keyIdShort: normalized.slice(-8)
    };
  });
}
