import {
  fetchBytes,
  readKeysFromInput,
  getFingerprints
} from "./lib/openpgp-utils.mjs";

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferVendor(hostname) {
  const parts = hostname.split(".").filter(Boolean);
  if (parts.length >= 2) {
    return normalizeSlug(parts[parts.length - 2]);
  }
  return normalizeSlug(hostname);
}

function inferLabel(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return "key";
  }
  const last = segments[segments.length - 1];
  const trimmed = last.replace(/\.(asc|gpg|pgp|txt)$/i, "");
  return normalizeSlug(trimmed) || "key";
}

function suffixFromFingerprint(fingerprint) {
  const normalized = fingerprint.replace(/\s+/g, "").toUpperCase();
  return normalized.slice(-16);
}

function usage() {
  console.error("Usage: node scripts/suggest-key-id.mjs <url>");
}

async function main() {
  const [url] = process.argv.slice(2);
  if (!url) {
    usage();
    process.exit(1);
  }

  const parsed = new URL(url);
  const vendor = inferVendor(parsed.hostname);
  const label = inferLabel(parsed.pathname);

  const bytes = await fetchBytes(url);
  const keys = await readKeysFromInput(bytes);
  const fingerprints = getFingerprints(keys);

  for (const fingerprint of fingerprints) {
    const suffix = suffixFromFingerprint(fingerprint);
    const keyId = `${vendor}-${label}-${suffix}`;
    console.log(`Suggested keyId: ${keyId}`);
    console.log(`Fingerprint: ${fingerprint}`);
  }
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
