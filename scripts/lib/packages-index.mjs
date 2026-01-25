import path from "node:path";
import { readFile, writeFile, readdir, mkdir, unlink, stat } from "node:fs/promises";

const DEFAULT_MAX_BYTES = 45 * 1024 * 1024;

async function readJson(filePath) {
  const raw = await readFile(filePath, "utf8");
  return JSON.parse(raw);
}

async function readOptionalJson(filePath) {
  try {
    return await readJson(filePath);
  } catch {
    return null;
  }
}

async function listPartFiles(dirPath) {
  try {
    const entries = await readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".json") && entry.name !== "index.json")
      .map((entry) => entry.name)
      .sort((a, b) => a.localeCompare(b));
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function loadPackagesIndex(repoDir) {
  const packagesPath = path.join(repoDir, "packages.json");
  const packagesDir = path.join(repoDir, "packages");
  const indexPath = path.join(packagesDir, "index.json");

  const index = await readOptionalJson(indexPath);
  if (index?.parts && Array.isArray(index.parts)) {
    const packages = [];
    for (const part of index.parts) {
      const partPath = path.join(packagesDir, part);
      const data = await readOptionalJson(partPath);
      if (data?.packages) {
        packages.push(...data.packages);
      }
    }
    return {
      generatedAt: index.generatedAt ?? new Date().toISOString(),
      packageCount: index.packageCount ?? packages.length,
      packages
    };
  }

  const partFiles = await listPartFiles(packagesDir);
  if (partFiles.length > 0) {
    const packages = [];
    for (const part of partFiles) {
      const data = await readOptionalJson(path.join(packagesDir, part));
      if (data?.packages) {
        packages.push(...data.packages);
      }
    }
    return {
      generatedAt: new Date().toISOString(),
      packageCount: packages.length,
      packages
    };
  }

  const legacy = await readOptionalJson(packagesPath);
  if (legacy?.packages) {
    return legacy;
  }
  return null;
}

function buildIndexPayload(packages) {
  return {
    generatedAt: new Date().toISOString(),
    packageCount: packages.length,
    packages
  };
}

function chunkPackages(packages, maxBytes) {
  const safeLimit = Math.floor(maxBytes * 0.9);
  const chunks = [];
  let current = [];
  let currentBytes = 0;

  const flush = () => {
    if (current.length === 0) {
      return;
    }
    chunks.push(current);
    current = [];
    currentBytes = 0;
  };

  for (const pkg of packages) {
    const pkgSize = Buffer.byteLength(JSON.stringify(pkg));
    const extra = current.length === 0 ? 2 : 3;
    const projected = currentBytes + pkgSize + extra;
    if (projected > safeLimit && current.length > 0) {
      flush();
    }
    current.push(pkg);
    currentBytes += pkgSize + extra;
  }
  flush();
  return chunks;
}

async function removeLegacyPackages(repoDir) {
  try {
    await unlink(path.join(repoDir, "packages.json"));
  } catch (error) {
    if (!error || error.code !== "ENOENT") {
      throw error;
    }
  }
}

async function removePackagesDir(repoDir) {
  const packagesDir = path.join(repoDir, "packages");
  try {
    const entries = await readdir(packagesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) {
        continue;
      }
      await unlink(path.join(packagesDir, entry.name));
    }
  } catch (error) {
    if (!error || error.code !== "ENOENT") {
      throw error;
    }
  }
}

export async function writePackagesIndex({
  repoDir,
  packages,
  maxBytes = DEFAULT_MAX_BYTES,
  removeLegacy = true
}) {
  const payload = buildIndexPayload(packages);
  const size = Buffer.byteLength(JSON.stringify(payload, null, 2));
  const packagesPath = path.join(repoDir, "packages.json");
  const packagesDir = path.join(repoDir, "packages");
  const indexPath = path.join(packagesDir, "index.json");

  if (size <= maxBytes) {
    await mkdir(repoDir, { recursive: true });
    await writeFile(packagesPath, JSON.stringify(payload, null, 2) + "\n", "utf8");
    await removePackagesDir(repoDir);
    return { mode: "single", path: packagesPath };
  }

  await mkdir(packagesDir, { recursive: true });
  const chunks = chunkPackages(packages, maxBytes);
  const partNames = [];
  for (let i = 0; i < chunks.length; i += 1) {
    const partName = `part-${String(i).padStart(4, "0")}.json`;
    partNames.push(partName);
    const partPath = path.join(packagesDir, partName);
    const partPayload = buildIndexPayload(chunks[i]);
    await writeFile(partPath, JSON.stringify(partPayload, null, 2) + "\n", "utf8");
  }

  const indexPayload = {
    generatedAt: payload.generatedAt,
    packageCount: payload.packageCount,
    parts: partNames,
    format: "split-v1"
  };
  await writeFile(indexPath, JSON.stringify(indexPayload, null, 2) + "\n", "utf8");

  if (removeLegacy) {
    await removeLegacyPackages(repoDir);
  }

  return { mode: "split", path: packagesDir, parts: partNames.length };
}

export async function shouldSplitPackages({ repoDir, maxBytes = DEFAULT_MAX_BYTES }) {
  const packagesPath = path.join(repoDir, "packages.json");
  try {
    const stats = await stat(packagesPath);
    return stats.size > maxBytes;
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return false;
    }
    throw error;
  }
}
