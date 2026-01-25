import path from "node:path";
import { readFile } from "node:fs/promises";

const defaultConfig = {
  github: {
    queries: [
      "\"deb [signed-by=\" filename:.list",
      "\"deb [signed-by=\" filename:.sources",
      "\"deb http\" filename:.list",
      "\"deb https\" filename:.list",
      "\"signed-by=/usr/share/keyrings\" filename:.list",
      "\"gpg --dearmor -o /usr/share/keyrings\" filename:.sh",
      "\"gpg --dearmor\" \"curl -fsSL\" filename:.sh",
      "\"Types: deb\" \"URIs:\" filename:.sources",
      "\"URIs:\" \"Suites:\" \"Components:\" filename:.sources",
      "\"apt_repository\" \"repo=deb\" filename:.yml",
      "\"apt:\" \"sources:\" filename:.yml"
    ],
    maxPages: 2,
    perPage: 50,
    concurrency: 4,
    slowMode: false
  },
  discovery: {
    includePPAs: false,
    allowedDomains: [
      "docker.com",
      "microsoft.com",
      "hashicorp.com",
      "kubernetes.io",
      "pkgs.k8s.io",
      "google.com",
      "deb.nodesource.com",
      "packages.cloud.google.com"
    ],
    denyDomains: [
      "launchpad.net",
      "launchpadcontent.net",
      "ppa.launchpad.net"
    ],
    minOccurrencesForCuration: 2,
    minDistinctSourcesForCuration: 2,
    requireAllowlistForCuration: true
  },
  scoring: {
    trustThreshold: 2,
    freshnessMonths: 12
  },
  verification: {
    timeoutMs: 15000,
    concurrency: 6,
    samplePackages: 15,
    defaultArchitectures: ["amd64", "arm64"],
    retryCount: 1,
    maxAgeDays: 7,
    maxBytesRelease: 5_000_000,
    maxBytesPackages: 50_000_000
  }
};

export async function loadConfig({ configPath, root }) {
  if (!configPath) {
    return defaultConfig;
  }
  const resolved = path.isAbsolute(configPath) ? configPath : path.join(root, configPath);
  const raw = await readFile(resolved, "utf8");
  const parsed = JSON.parse(raw);
  return mergeConfig(defaultConfig, parsed);
}

function mergeConfig(base, override) {
  if (Array.isArray(base)) {
    return Array.isArray(override) ? override : base;
  }
  if (base && typeof base === "object") {
    const merged = { ...base };
    for (const [key, value] of Object.entries(override ?? {})) {
      merged[key] = mergeConfig(base[key], value);
    }
    return merged;
  }
  return override === undefined ? base : override;
}

export function getDefaultConfig() {
  return defaultConfig;
}
