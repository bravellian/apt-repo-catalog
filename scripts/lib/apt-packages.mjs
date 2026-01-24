import zlib from "node:zlib";
import { spawnSync } from "node:child_process";

function isDigit(value) {
  return value >= "0" && value <= "9";
}

function orderChar(value) {
  if (!value) {
    return 0;
  }
  if (value === "~") {
    return -1;
  }
  if (isDigit(value)) {
    return 0;
  }
  if ((value >= "A" && value <= "Z") || (value >= "a" && value <= "z")) {
    return value.charCodeAt(0);
  }
  return value.charCodeAt(0) + 256;
}

export function compareDpkgVersions(a, b) {
  const left = String(a ?? "");
  const right = String(b ?? "");

  const [leftEpochRaw, leftRest] = left.includes(":")
    ? left.split(/:(.+)/)
    : ["0", left];
  const [rightEpochRaw, rightRest] = right.includes(":")
    ? right.split(/:(.+)/)
    : ["0", right];

  const leftEpoch = Number.parseInt(leftEpochRaw || "0", 10);
  const rightEpoch = Number.parseInt(rightEpochRaw || "0", 10);
  if (leftEpoch !== rightEpoch) {
    return leftEpoch - rightEpoch;
  }

  const splitDebian = (value) => {
    const idx = value.lastIndexOf("-");
    if (idx === -1) {
      return [value, ""];
    }
    return [value.slice(0, idx), value.slice(idx + 1)];
  };

  const [leftUpstream, leftDebian] = splitDebian(leftRest);
  const [rightUpstream, rightDebian] = splitDebian(rightRest);

  const comparePart = (leftPart, rightPart) => {
    let i = 0;
    let j = 0;
    while (i < leftPart.length || j < rightPart.length) {
      while (
        (i < leftPart.length && !isDigit(leftPart[i])) ||
        (j < rightPart.length && !isDigit(rightPart[j]))
      ) {
        const leftChar = i < leftPart.length ? leftPart[i] : "";
        const rightChar = j < rightPart.length ? rightPart[j] : "";
        const leftOrder = orderChar(leftChar);
        const rightOrder = orderChar(rightChar);
        if (leftOrder !== rightOrder) {
          return leftOrder - rightOrder;
        }
        if (i < leftPart.length) {
          i += 1;
        }
        if (j < rightPart.length) {
          j += 1;
        }
      }

      while (i < leftPart.length && leftPart[i] === "0") {
        i += 1;
      }
      while (j < rightPart.length && rightPart[j] === "0") {
        j += 1;
      }

      let leftStart = i;
      let rightStart = j;
      while (i < leftPart.length && isDigit(leftPart[i])) {
        i += 1;
      }
      while (j < rightPart.length && isDigit(rightPart[j])) {
        j += 1;
      }

      const leftLen = i - leftStart;
      const rightLen = j - rightStart;
      if (leftLen !== rightLen) {
        return leftLen - rightLen;
      }

      const leftDigits = leftPart.slice(leftStart, i);
      const rightDigits = rightPart.slice(rightStart, j);
      if (leftDigits !== rightDigits) {
        return leftDigits < rightDigits ? -1 : 1;
      }
    }
    return 0;
  };

  const upstreamCmp = comparePart(leftUpstream, rightUpstream);
  if (upstreamCmp !== 0) {
    return upstreamCmp;
  }
  return comparePart(leftDebian, rightDebian);
}

export function sortVersionsDesc(versions) {
  return [...versions].sort((a, b) => compareDpkgVersions(b, a));
}

export function parsePackagesStanzas(text) {
  const stanzas = [];
  let current = {};
  let currentKey = null;

  const pushCurrent = () => {
    if (Object.keys(current).length === 0) {
      return;
    }
    stanzas.push(current);
    current = {};
    currentKey = null;
  };

  const lines = String(text ?? "").split(/\r?\n/);
  for (const rawLine of lines) {
    if (!rawLine.trim()) {
      pushCurrent();
      continue;
    }
    if (rawLine.startsWith(" ") || rawLine.startsWith("\t")) {
      if (currentKey) {
        current[currentKey] = `${current[currentKey] ?? ""}\n${rawLine.trimStart()}`;
      }
      continue;
    }
    const idx = rawLine.indexOf(":");
    if (idx === -1) {
      continue;
    }
    const key = rawLine.slice(0, idx).trim();
    const value = rawLine.slice(idx + 1).trimStart();
    current[key] = value;
    currentKey = key;
  }
  pushCurrent();
  return stanzas;
}

export function parseRelationshipList(value) {
  if (!value) {
    return [];
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function normalizeStringList(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

export function normalizePackages(entries, context) {
  const repoId = context.repoId ?? "";
  const suite = context.suite ?? "";
  const component = context.component ?? "";
  const sourceIndexPath = context.sourceIndexPath ?? "";

  const packageMap = new Map();

  for (const entry of entries) {
    const name = entry.Package ?? entry.package ?? "";
    if (!name) {
      continue;
    }
    const version = entry.Version ?? "";
    const architecture = entry.Architecture ?? "";
    const entrySuite = entry.__suite ?? suite;
    const entryComponent = entry.__component ?? component;
    const entrySourceIndexPath = entry.__sourceIndexPath ?? sourceIndexPath;

    if (!packageMap.has(name)) {
      packageMap.set(name, {
        name,
        repoId,
        suite,
        components: new Set(),
        sourceIndexPaths: new Set(),
        versions: new Map(),
        architectures: new Set(),
        descriptionShort: "",
        homepage: "",
        relationships: {},
        maintainer: "",
        section: "",
        priority: ""
      });
    }

    const pkg = packageMap.get(name);
    pkg.components.add(entryComponent);
    pkg.sourceIndexPaths.add(entrySourceIndexPath);
    if (architecture) {
      pkg.architectures.add(architecture);
    }

    if (version) {
      if (!pkg.versions.has(version)) {
      pkg.versions.set(version, {
        version,
        architectures: new Set(),
        components: new Set(),
        sourceIndexPaths: new Set()
      });
    }
    const versionEntry = pkg.versions.get(version);
    if (architecture) {
      versionEntry.architectures.add(architecture);
    }
    versionEntry.components.add(entryComponent);
    versionEntry.sourceIndexPaths.add(entrySourceIndexPath);
    }

    const description = entry.Description ?? "";
    if (!pkg.descriptionShort && description) {
      pkg.descriptionShort = description.split(/\r?\n/)[0] ?? "";
    }
    if (!pkg.homepage && entry.Homepage) {
      pkg.homepage = entry.Homepage;
    }
    if (!pkg.maintainer && entry.Maintainer) {
      pkg.maintainer = entry.Maintainer;
    }
    if (!pkg.section && entry.Section) {
      pkg.section = entry.Section;
    }
    if (!pkg.priority && entry.Priority) {
      pkg.priority = entry.Priority;
    }

    const relationshipFields = [
      "Depends",
      "Pre-Depends",
      "Recommends",
      "Suggests",
      "Conflicts",
      "Breaks",
      "Replaces",
      "Provides"
    ];
    for (const field of relationshipFields) {
      const normalizedKey = field
        .toLowerCase()
        .replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
      const values = parseRelationshipList(entry[field] ?? "");
      if (!pkg.relationships[normalizedKey]) {
        pkg.relationships[normalizedKey] = [];
      }
      pkg.relationships[normalizedKey].push(...values);
    }
  }

  const packages = [];
  for (const pkg of packageMap.values()) {
    const versions = Array.from(pkg.versions.values()).map((versionEntry) => ({
      version: versionEntry.version,
      architectures: normalizeStringList(Array.from(versionEntry.architectures)),
      components: normalizeStringList(Array.from(versionEntry.components)),
      sourceIndexPaths: normalizeStringList(Array.from(versionEntry.sourceIndexPaths))
    }));

    const sortedVersions = sortVersionsDesc(versions.map((item) => item.version));
    const latestVersion = sortedVersions[0] ?? "";

    const latestByArch = {};
    for (const versionEntry of versions) {
      for (const arch of versionEntry.architectures) {
        if (!latestByArch[arch]) {
          latestByArch[arch] = versionEntry.version;
        } else if (compareDpkgVersions(versionEntry.version, latestByArch[arch]) > 0) {
          latestByArch[arch] = versionEntry.version;
        }
      }
    }

    const relationships = {};
    for (const [key, values] of Object.entries(pkg.relationships)) {
      relationships[key] = normalizeStringList(values);
    }

    packages.push({
      name: pkg.name,
      repoId: pkg.repoId,
      suite: pkg.suite,
      components: normalizeStringList(Array.from(pkg.components)),
      sourceIndexPaths: normalizeStringList(Array.from(pkg.sourceIndexPaths)),
      versions: versions.sort((a, b) => compareDpkgVersions(b.version, a.version)),
      latestVersion,
      latestByArch,
      architectures: normalizeStringList(Array.from(pkg.architectures)),
      descriptionShort: pkg.descriptionShort,
      homepage: pkg.homepage,
      relationships,
      maintainer: pkg.maintainer || null,
      section: pkg.section || null,
      priority: pkg.priority || null
    });
  }

  packages.sort((a, b) => a.name.localeCompare(b.name));
  return packages;
}

export function decompressPackagesFile(filePath, content) {
  if (filePath.endsWith(".gz")) {
    return zlib.gunzipSync(content).toString("utf8");
  }
  if (filePath.endsWith(".xz")) {
    const result = spawnSync("xz", ["-dc", filePath], { encoding: "utf8" });
    if (result.status !== 0) {
      const error = result.stderr || result.stdout || "xz failed";
      throw new Error(error.trim());
    }
    return result.stdout;
  }
  if (filePath.endsWith(".lz4")) {
    const result = spawnSync("lz4", ["-dc", filePath], { encoding: "utf8" });
    if (result.status !== 0) {
      const error = result.stderr || result.stdout || "lz4 failed";
      throw new Error(error.trim());
    }
    return result.stdout;
  }
  return content.toString("utf8");
}
