import path from "node:path";
import { mkdir, writeFile, readFile, stat } from "node:fs/promises";
import { decompressPackagesFile } from "../lib/apt-packages.mjs";
import { sleep, uniqueSorted } from "./utils.mjs";

function parseReleaseFile(text) {
  const fields = {};
  const checksums = { SHA256: [], MD5Sum: [], SHA1: [] };
  let current = null;
  const lines = String(text ?? "").split(/\r?\n/);
  for (const line of lines) {
    const headerMatch = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (headerMatch) {
      const key = headerMatch[1];
      const value = headerMatch[2];
      if (key === "SHA256" || key === "MD5Sum" || key === "SHA1") {
        current = key;
        continue;
      }
      current = null;
      fields[key] = value.trim();
      continue;
    }
    if (current && line.trim()) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 3) {
        const [hash, size, ...rest] = parts;
        checksums[current].push({
          hash,
          size: Number.parseInt(size, 10),
          path: rest.join(" ")
        });
      }
    }
  }
  return { fields, checksums };
}

function parseInRelease(text) {
  const fields = {};
  const lines = String(text ?? "").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^(Origin|Label|Suite|Codename|Architectures|Components|Date):\s*(.*)$/);
    if (match) {
      fields[match[1]] = match[2].trim();
    }
  }
  return fields;
}

async function fetchBytes(url, { timeoutMs, retries, maxBytes }) {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { signal: controller.signal, redirect: "follow" });
      if (!response.ok) {
        throw new Error(`Fetch failed: ${response.status}`);
      }
      const lengthHeader = response.headers.get("content-length");
      if (lengthHeader && maxBytes) {
        const length = Number.parseInt(lengthHeader, 10);
        if (!Number.isNaN(length) && length > maxBytes) {
          throw new Error(`Response too large (${length} bytes > ${maxBytes})`);
        }
      }
      const buffer = await response.arrayBuffer();
      if (maxBytes && buffer.byteLength > maxBytes) {
        throw new Error(`Response too large (${buffer.byteLength} bytes > ${maxBytes})`);
      }
      return new Uint8Array(buffer);
    } catch (error) {
      if (attempt >= retries) {
        throw error;
      }
      await sleep(250 * (attempt + 1));
    } finally {
      clearTimeout(timeout);
    }
  }
  return null;
}

async function readBytesIfExists(filePath) {
  try {
    const info = await stat(filePath);
    if (!info.isFile() || info.size === 0) {
      return null;
    }
    return await readFile(filePath);
  } catch {
    return null;
  }
}

function selectPackagesPaths(checksums, basePaths) {
  const paths = new Set();
  for (const entry of checksums.SHA256) {
    paths.add(entry.path);
  }
  const selected = [];
  for (const basePath of basePaths) {
    const candidates = [`${basePath}.xz`, `${basePath}.gz`, basePath];
    const chosen = candidates.find((candidate) => paths.has(candidate));
    if (chosen) {
      selected.push(chosen);
    }
  }
  return selected;
}

function buildSample(names, limit) {
  const sorted = Array.from(new Set(names)).sort((a, b) => a.localeCompare(b));
  return sorted.slice(0, limit);
}

function summarizePackages(text, sampleLimit) {
  let count = 0;
  const archSet = new Set();
  const sample = new Set();
  const maxSampleBuffer = sampleLimit * 5;
  const lines = String(text ?? "").split(/\r?\n/);
  for (const line of lines) {
    if (line.startsWith("Package:")) {
      count += 1;
      const name = line.slice("Package:".length).trim();
      if (name && !sample.has(name)) {
        sample.add(name);
        if (sample.size > maxSampleBuffer) {
          const trimmed = Array.from(sample).sort((a, b) => a.localeCompare(b)).slice(0, sampleLimit);
          sample.clear();
          for (const item of trimmed) {
            sample.add(item);
          }
        }
      }
    } else if (line.startsWith("Architecture:")) {
      const arch = line.slice("Architecture:".length).trim();
      if (arch) {
        archSet.add(arch);
      }
    }
  }
  const samplePackages = Array.from(sample).sort((a, b) => a.localeCompare(b)).slice(0, sampleLimit);
  return {
    packageCount: count,
    architectures: uniqueSorted(Array.from(archSet)),
    samplePackages
  };
}

function buildCachePath(cacheDir, repoId, relativePath) {
  return path.join(cacheDir, repoId, relativePath.split("/").join(path.sep));
}

async function verifySuite({
  baseUrl,
  suite,
  components,
  architectures,
  config,
  repoId,
  cacheDir,
  includePackages
}) {
  const results = {
    suite,
    components,
    architectures,
    release: null,
    inRelease: null,
    packages: [],
    packagesSkipped: false,
    errors: []
  };

  if (!suite || suite === "/") {
    results.errors.push({
      stage: "release",
      message: "Suite layout unsupported",
      detail: `suite=${suite || "(empty)"}`
    });
    return results;
  }

  const releaseUrls = [
    {
      url: `${baseUrl.replace(/\/$/, "")}/dists/${suite}/InRelease`,
      cachePath: buildCachePath(cacheDir, repoId, `dists/${suite}/InRelease`),
      isInRelease: true
    },
    {
      url: `${baseUrl.replace(/\/$/, "")}/dists/${suite}/Release`,
      cachePath: buildCachePath(cacheDir, repoId, `dists/${suite}/Release`),
      isInRelease: false
    }
  ];

  let releaseText = null;
  let inReleaseUsed = false;
  for (const entry of releaseUrls) {
    try {
      let bytes = await readBytesIfExists(entry.cachePath);
      if (!bytes) {
        bytes = await fetchBytes(entry.url, {
          timeoutMs: config.verification.timeoutMs,
          retries: config.verification.retryCount,
          maxBytes: config.verification.maxBytesRelease
        });
        if (bytes) {
          await mkdir(path.dirname(entry.cachePath), { recursive: true });
          await writeFile(entry.cachePath, bytes);
        }
      }
      if (!bytes) {
        continue;
      }
      releaseText = Buffer.from(bytes).toString("utf8");
      inReleaseUsed = entry.isInRelease;
      break;
    } catch (error) {
      results.errors.push({
        stage: "release",
        message: `Failed to fetch ${entry.url}`,
        detail: error instanceof Error ? error.message : String(error)
      });
    }
  }

  if (!releaseText) {
    return results;
  }

  const parsed = parseReleaseFile(releaseText);
  const inReleaseFields = inReleaseUsed ? parseInRelease(releaseText) : null;
  results.release = parsed.fields;
  results.inRelease = inReleaseUsed ? inReleaseFields : null;

  const releaseComponents = results.release?.Components
    ? results.release.Components.split(/\s+/).filter(Boolean)
    : [];
  const releaseArchitectures = results.release?.Architectures
    ? results.release.Architectures.split(/\s+/).filter(Boolean)
    : [];

  const componentsToCheck = components.length > 0 ? components : releaseComponents;
  const archesToCheck = architectures.length > 0 ? architectures : releaseArchitectures;
  const archesWithAll = uniqueSorted([...archesToCheck, "all"]);

  if (!includePackages) {
    results.packagesSkipped = true;
    return results;
  }

  for (const component of componentsToCheck.length > 0 ? componentsToCheck : [""]) {
    for (const arch of archesWithAll) {
      const basePath = component
        ? `${component}/binary-${arch}/Packages`
        : `binary-${arch}/Packages`;
      const selectedPaths = selectPackagesPaths(parsed.checksums, [basePath]);
      if (selectedPaths.length === 0) {
        results.packages.push({
          suite,
          component,
          arch,
          packageCount: 0,
          architectures: [],
          samplePackages: [],
          errors: [
            {
              stage: "packages",
              message: "Packages index missing from Release",
              detail: basePath
            }
          ]
        });
        continue;
      }
      const selected = selectedPaths[0];
      const url = `${baseUrl.replace(/\/$/, "")}/dists/${suite}/${selected}`;
      const cachePath = buildCachePath(cacheDir, repoId, `dists/${suite}/${selected}`);
      try {
        let bytes = await readBytesIfExists(cachePath);
        if (!bytes) {
          bytes = await fetchBytes(url, {
            timeoutMs: config.verification.timeoutMs,
            retries: config.verification.retryCount,
            maxBytes: config.verification.maxBytesPackages
          });
          if (bytes) {
            await mkdir(path.dirname(cachePath), { recursive: true });
            await writeFile(cachePath, bytes);
          }
        }
        if (!bytes) {
          throw new Error("No package index bytes available");
        }
        let text = "";
        try {
          text = decompressPackagesFile(cachePath, bytes);
        } catch (error) {
          throw new Error(
            `Failed to decompress Packages: ${error instanceof Error ? error.message : String(error)}`
          );
        }
        const summary = summarizePackages(text, config.verification.samplePackages);
        results.packages.push({
          suite,
          component,
          arch,
          packageCount: summary.packageCount,
          architectures: summary.architectures,
          samplePackages: summary.samplePackages,
          errors: []
        });
      } catch (error) {
        results.packages.push({
          suite,
          component,
          arch,
          packageCount: 0,
          architectures: [],
          samplePackages: [],
          errors: [
            {
              stage: "packages",
              message: "Failed to fetch Packages",
              detail: error instanceof Error ? error.message : String(error)
            }
          ]
        });
      }
    }
  }

  return results;
}

export async function verifyRepo({ repo, config, cacheDir, includePackages = true }) {
  const suites = repo.suites ?? [];
  const suiteResults = [];
  for (const suiteEntry of suites) {
    const result = await verifySuite({
      baseUrl: repo.baseUrl,
      suite: suiteEntry.suite,
      components: suiteEntry.components ?? [],
      architectures: suiteEntry.architectures ?? config.verification.defaultArchitectures,
      config,
      repoId: repo.repoId ?? "repo",
      cacheDir,
      includePackages
    });
    suiteResults.push(result);
  }
  return {
    ...repo,
    verification: {
      attemptedAt: new Date().toISOString(),
      suites: suiteResults
    }
  };
}
