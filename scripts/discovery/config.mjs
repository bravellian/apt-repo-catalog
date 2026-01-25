import path from "node:path";
import { readFile } from "node:fs/promises";

const defaultConfig = {
  github: {
    queries: [
      "filename:sources.list \"deb \"",
      "filename:.list \"deb http\"",
      "filename:.list \"deb https\"",
      "filename:.list \"signed-by=\"",
      "filename:.sources \"URIs:\" \"Suites:\"",
      "filename:.sources \"Types: deb\"",
      "path:sources.list.d \"deb \"",
      "filename:cloud-config \"apt:\"",
      "filename:.yml \"apt_repository\" \"repo=deb\"",
      "filename:dockerfile \"deb \""
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
      "packages.cloud.google.com",
      "grafana.com",
      "apt.releases.hashicorp.com",
      "dl.k8s.io",
      "download.docker.com",
      "packages.sury.org",
      "apt.postgresql.org",
      "download.opensuse.org",
      "packages.gitlab.com",
      "cli.github.com",
      "brave.com",
      "deb.debian.org",
      "security.debian.org",
      "archive.ubuntu.com",
      "security.ubuntu.com",
      "us.archive.ubuntu.com",
      "archive.canonical.com",
      "apt.llvm.org",
      "deb.torproject.org",
      "apt.puppet.com",
      "archive.raspberrypi.org",
      "repo.mysql.com",
      "repo.mongodb.org",
      "nginx.org",
      "artifacts.elastic.co",
      "dl.google.com",
      "repos.rcn-ee.com",
      "packagecloud.io"
    ],
    denyDomains: [
      "launchpad.net",
      "launchpadcontent.net",
      "ppa.launchpad.net",
      "mirrors.aliyun.com",
      "mirrors.tuna.tsinghua.edu.cn",
      "mirrors.ustc.edu.cn",
      "mirrors.163.com",
      "mirrors.digitalocean.com",
      "mirrors.cloud.aliyuncs.com",
      "mirrors.tencentyun.com",
      "mirror.gi.co.id",
      "mirrors.bfsu.edu.cn",
      "mirror.bit.edu.cn",
      "mirrors.hust.edu.cn",
      "mirrors.cloud.tencent.com",
      "mirror.auckland.ac.nz",
      "localhost",
      "127.0.0.1",

      "security.debian.org",
      "security.ubuntu.org"
    ],
    minOccurrencesForCuration: 2,
    minDistinctSourcesForCuration: 2,
    requireAllowlistForCuration: false,
    maxEvidencePerRepo: 25,
    compactVerification: true
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
    maxBytesPackages: 50_000_000,
    denyDomains: [
      "launchpad.net",
      "launchpadcontent.net",
      "ppa.launchpad.net",
      "mirrors.aliyun.com",
      "mirrors.tuna.tsinghua.edu.cn",
      "mirrors.ustc.edu.cn"
    ]
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
