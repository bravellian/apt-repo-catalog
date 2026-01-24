import { uniqueSorted } from "./utils.mjs";

function log10(value) {
  return Math.log10 ? Math.log10(value) : Math.log(value) / Math.log(10);
}

function parseReleaseDate(release) {
  if (!release) {
    return null;
  }
  const raw = release.Date ?? release["Date"] ?? null;
  if (!raw) {
    return null;
  }
  const date = new Date(raw);
  if (Number.isNaN(date.getTime())) {
    return null;
  }
  return date;
}

export function scoreRepo(repo, config) {
  const occurrences = repo.occurrences ?? 0;
  const distinctSources = Array.isArray(repo.distinctSources) ? repo.distinctSources.length : 0;

  const popularity = log10(occurrences + 1) + distinctSources;

  const baseUrl = repo.baseUrl ?? "";
  const host = (() => {
    try {
      return new URL(baseUrl).hostname.toLowerCase();
    } catch {
      return "";
    }
  })();

  let trust = 0;
  const suites = repo.verification?.suites ?? [];
  const hasInRelease = suites.some((suite) => suite.inRelease && Object.keys(suite.inRelease).length > 0);
  if (hasInRelease) {
    trust += 2;
  }
  if (config.discovery.allowedDomains.some((domain) => host.endsWith(domain))) {
    trust += 1;
  }
  if (repo.options?.trusted) {
    trust -= 2;
  }
  if (String(baseUrl).startsWith("http://")) {
    trust -= 2;
  }

  let freshness = 0;
  const dates = suites
    .map((suite) => parseReleaseDate(suite.release))
    .filter(Boolean)
    .sort((a, b) => b - a);
  if (dates.length > 0) {
    const newest = dates[0];
    const thresholdMs = config.scoring.freshnessMonths * 30 * 24 * 60 * 60 * 1000;
    if (Date.now() - newest.getTime() <= thresholdMs) {
      freshness += 1;
    }
  }

  let completeness = 0;
  const architectures = new Set();
  const packageArchitectures = new Set();
  for (const suite of suites) {
    for (const pkgEntry of suite.packages ?? []) {
      architectures.add(pkgEntry.arch);
      for (const arch of pkgEntry.architectures ?? []) {
        packageArchitectures.add(arch);
      }
    }
  }
  if (architectures.has("amd64") || packageArchitectures.has("amd64")) {
    completeness += 1;
  }
  if (architectures.has("arm64") || packageArchitectures.has("arm64")) {
    completeness += 1;
  }
  if (architectures.has("all") || packageArchitectures.has("all")) {
    completeness += 0.5;
  }

  const total = popularity + trust + freshness + completeness;
  return {
    total,
    breakdown: {
      popularity,
      trust,
      freshness,
      completeness,
      occurrences,
      distinctSources,
      allowlistMatch: config.discovery.allowedDomains.some((domain) => host.endsWith(domain)),
      hasInRelease
    }
  };
}

export function curateRepos(repos, config) {
  const curated = [];
  const quarantine = [];

  for (const repo of repos) {
    const score = scoreRepo(repo, config);
    const verifiedOk = (repo.verification?.suites ?? []).some((suite) =>
      (suite.packages ?? []).some((pkg) => pkg.errors.length === 0)
    );
    const occurrences = repo.occurrences ?? 0;
    const distinctSources = Array.isArray(repo.distinctSources) ? repo.distinctSources.length : 0;
    const host = (() => {
      try {
        return new URL(repo.baseUrl).hostname.toLowerCase();
      } catch {
        return "";
      }
    })();
    const allowlisted = config.discovery.allowedDomains.some((domain) => host.endsWith(domain));
    const meetsSelectivity =
      occurrences >= config.discovery.minOccurrencesForCuration &&
      distinctSources >= config.discovery.minDistinctSourcesForCuration &&
      (!config.discovery.requireAllowlistForCuration || allowlisted);
    const reasons = [];
    if (!verifiedOk) {
      reasons.push("verification-failed");
    }
    if (score.breakdown.trust < config.scoring.trustThreshold) {
      reasons.push("low-trust-score");
    }
    if (occurrences < config.discovery.minOccurrencesForCuration) {
      reasons.push("low-occurrences");
    }
    if (distinctSources < config.discovery.minDistinctSourcesForCuration) {
      reasons.push("low-distinct-sources");
    }
    if (config.discovery.requireAllowlistForCuration && !allowlisted) {
      reasons.push("not-allowlisted");
    }
    const item = {
      ...repo,
      score,
      curation: {
        curated: false,
        allowlisted,
        occurrences,
        distinctSources,
        reasons
      }
    };
    if (
      verifiedOk &&
      score.breakdown.trust >= config.scoring.trustThreshold &&
      meetsSelectivity
    ) {
      item.curation.curated = true;
      item.curation.reasons = [];
      curated.push(item);
    } else {
      quarantine.push(item);
    }
  }

  const sorter = (a, b) => b.score.total - a.score.total || a.baseUrl.localeCompare(b.baseUrl);
  curated.sort(sorter);
  quarantine.sort(sorter);

  return { curated, quarantine };
}

export function buildInstallSnippets(repo) {
  const suites = repo.suites ?? [];
  if (suites.length === 0) {
    return { deb: "", deb822: "" };
  }
  const suite = suites[0].suite ?? "";
  const components = suites[0].components ?? [];
  const componentsStr = components.join(" ").trim();
  const debLine = `deb ${repo.baseUrl} ${suite} ${componentsStr}`.trim();
  const deb822 = [
    "Types: deb",
    `URIs: ${repo.baseUrl}`,
    suite ? `Suites: ${suite}` : null,
    components.length > 0 ? `Components: ${components.join(" ")}` : null,
    "Signed-By: /usr/share/keyrings/<repoId>.gpg"
  ]
    .filter(Boolean)
    .join("\n");
  return { deb: debLine, deb822 };
}

export function addInstallSnippets(repos) {
  return repos.map((repo) => ({
    ...repo,
    installSnippets: buildInstallSnippets(repo)
  }));
}

export function summarizeArchitectures(repos) {
  return repos.map((repo) => {
    const suiteArchitectures = uniqueSorted(
      (repo.verification?.suites ?? []).flatMap((suite) =>
        (suite.packages ?? []).flatMap((pkg) => pkg.architectures ?? [])
      )
    );
    return {
      ...repo,
      observedArchitectures: suiteArchitectures
    };
  });
}
