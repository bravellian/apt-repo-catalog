import { sha256Hex, uniqueSorted } from "./utils.mjs";

const knownUbuntu = new Set([
  "trusty",
  "xenial",
  "bionic",
  "focal",
  "jammy",
  "noble",
  "oracular",
  "mantic",
  "lunar",
  "kinetic",
  "groovy",
  "hirsute",
  "impish",
  "disco",
  "cosmic",
  "zesty",
  "yakkety",
  "wily",
  "plucky",
  "questing"
]);

const knownDebian = new Set([
  "sid",
  "unstable",
  "testing",
  "stable",
  "oldstable",
  "bookworm",
  "bullseye",
  "buster",
  "trixie",
  "stretch",
  "jessie",
  "wheezy"
]);

export function detectDistroFamily(suite) {
  const value = String(suite ?? "").toLowerCase();
  if (knownUbuntu.has(value)) {
    return "ubuntu";
  }
  if (knownDebian.has(value)) {
    return "debian";
  }
  return null;
}

export function normalizeBaseUrl(raw) {
  try {
    const url = new URL(raw);
    const host = url.host.toLowerCase();
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
    let pathname = url.pathname;
    const distsIndex = pathname.toLowerCase().indexOf("/dists/");
    if (distsIndex !== -1) {
      pathname = pathname.slice(0, distsIndex);
    }
    pathname = pathname.replace(/\/+$/, "");
    return `${url.protocol}//${host}${pathname}`;
  } catch {
    return null;
  }
}

function parseArchOption(value) {
  if (!value) {
    return [];
  }
  return String(value)
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function ensureComponents(components) {
  if (!components || components.length === 0) {
    return [];
  }
  return components.map((item) => item.trim()).filter(Boolean);
}

export function normalizeCandidates(candidates, { config }) {
  const normalized = [];

  for (const entry of candidates) {
    if (entry.type === "deb") {
      const parsed = entry.parsed;
      const baseUrl = normalizeBaseUrl(parsed.uri);
      if (!baseUrl) {
        continue;
      }
      const suite = parsed.suite;
      const components = ensureComponents(parsed.components);
      const architectures = parseArchOption(parsed.options?.arch ?? parsed.options?.architectures);
      normalized.push({
        type: "deb",
        baseUrl,
        suite,
        components,
        architectures,
        options: parsed.options ?? {},
        signedBy: parsed.options?.["signed-by"] ?? "",
        evidence: entry.source
      });
    }

    if (entry.type === "deb822") {
      const parsed = entry.parsed;
      for (const uri of parsed.uris) {
        const baseUrl = normalizeBaseUrl(uri);
        if (!baseUrl) {
          continue;
        }
        const suites = parsed.suites.length > 0 ? parsed.suites : [""];
        for (const suite of suites) {
          normalized.push({
            type: "deb822",
            baseUrl,
            suite,
            components: ensureComponents(parsed.components),
            architectures: parsed.architectures ?? [],
            options: {},
            signedBy: parsed.signedBy ?? "",
            evidence: entry.source
          });
        }
      }
    }
  }

  return normalized.filter((entry) => {
    const host = (() => {
      try {
        return new URL(entry.baseUrl).hostname.toLowerCase();
      } catch {
        return "";
      }
    })();
    if (!config.discovery.includePPAs) {
      if (
        config.discovery.denyDomains.some(
          (domain) => host === domain || host.endsWith(`.${domain}`)
        )
      ) {
        return false;
      }
    }
    return true;
  });
}

function mergeSuite(existing, incoming) {
  const components = new Set(existing.components ?? []);
  for (const comp of incoming.components ?? []) {
    components.add(comp);
  }
  const architectures = new Set(existing.architectures ?? []);
  for (const arch of incoming.architectures ?? []) {
    architectures.add(arch);
  }
  return {
    suite: existing.suite,
    components: uniqueSorted(Array.from(components)),
    architectures: uniqueSorted(Array.from(architectures)),
    options: { ...existing.options, ...incoming.options }
  };
}

export function dedupeCandidates(normalized) {
  const repoMap = new Map();

  for (const entry of normalized) {
    if (!entry.baseUrl) {
      continue;
    }
    const repoKey = entry.baseUrl;
    if (!repoMap.has(repoKey)) {
      repoMap.set(repoKey, {
        repoId: `repo-${sha256Hex(entry.baseUrl).slice(0, 12)}`,
        baseUrl: entry.baseUrl,
        distroFamily: detectDistroFamily(entry.suite),
        suites: new Map(),
        evidence: [],
        keyHints: {
          signedByPaths: [],
          keyUrls: [],
          fingerprints: []
        },
        options: {
          trusted: false,
          usesHttp: entry.baseUrl.startsWith("http://")
        }
      });
    }

    const repo = repoMap.get(repoKey);
    const suiteKey = entry.suite || "(none)";
    const existingSuite = repo.suites.get(suiteKey);
    const merged = existingSuite
      ? mergeSuite(existingSuite, entry)
      : {
          suite: entry.suite,
          components: uniqueSorted(entry.components ?? []),
          architectures: uniqueSorted(entry.architectures ?? []),
          options: entry.options ?? {}
        };
    repo.suites.set(suiteKey, merged);

    if (entry.signedBy) {
      if (entry.signedBy.startsWith("http")) {
        repo.keyHints.keyUrls.push(entry.signedBy);
      } else {
        repo.keyHints.signedByPaths.push(entry.signedBy);
      }
    }

    if (entry.options?.trusted === "yes" || entry.options?.trusted === true) {
      repo.options.trusted = true;
    }

    repo.evidence.push(entry.evidence);
  }

  const results = Array.from(repoMap.values()).map((repo) => {
    const suites = Array.from(repo.suites.values()).sort((a, b) =>
      String(a.suite ?? "").localeCompare(String(b.suite ?? ""))
    );
    return {
      repoId: repo.repoId,
      baseUrl: repo.baseUrl,
      distroFamily: repo.distroFamily,
      suites,
      evidence: repo.evidence,
      occurrences: repo.evidence.length,
      distinctSources: uniqueSorted(repo.evidence.map((item) => item.repo ?? "")),
      keyHints: {
        signedByPaths: uniqueSorted(repo.keyHints.signedByPaths),
        keyUrls: uniqueSorted(repo.keyHints.keyUrls),
        fingerprints: uniqueSorted(repo.keyHints.fingerprints)
      },
      options: repo.options
    };
  });

  results.sort((a, b) => a.baseUrl.localeCompare(b.baseUrl));
  return results;
}
