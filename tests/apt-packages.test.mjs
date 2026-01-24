import test from "node:test";
import assert from "node:assert/strict";
import {
  parsePackagesStanzas,
  compareDpkgVersions,
  sortVersionsDesc,
  normalizePackages
} from "../scripts/lib/apt-packages.mjs";

test("parsePackagesStanzas parses stanzas and continuations", () => {
  const text = [
    "Package: demo",
    "Version: 1.0-1",
    "Architecture: amd64",
    "Description: Demo package",
    " continued description line",
    "",
    "Package: demo2",
    "Version: 2.0",
    "Architecture: all",
    "Homepage: https://example.com",
    ""
  ].join("\n");

  const stanzas = parsePackagesStanzas(text);
  assert.equal(stanzas.length, 2);
  assert.equal(stanzas[0].Package, "demo");
  assert.equal(
    stanzas[0].Description,
    "Demo package\ncontinued description line"
  );
  assert.equal(stanzas[1].Homepage, "https://example.com");
});

test("compareDpkgVersions respects epoch, debian revision, and tilde", () => {
  assert.ok(compareDpkgVersions("1.0", "1.0-1") < 0);
  assert.ok(compareDpkgVersions("1.0~rc1", "1.0") < 0);
  assert.ok(compareDpkgVersions("1:1.0", "0:2.0") > 0);
});

test("sortVersionsDesc sorts newest first", () => {
  const sorted = sortVersionsDesc(["1.0", "1.0-1", "2.0~rc1", "2.0"]);
  assert.deepEqual(sorted, ["2.0", "2.0~rc1", "1.0-1", "1.0"]);
});

test("normalizePackages aggregates versions and relationships", () => {
  const entries = [
    {
      Package: "demo",
      Version: "1.0",
      Architecture: "amd64",
      Description: "Demo package",
      Depends: "libc6 (>= 2.31), libssl3"
    },
    {
      Package: "demo",
      Version: "1.1",
      Architecture: "arm64",
      Description: "Demo package",
      Provides: "demo-virtual"
    }
  ];

  const packages = normalizePackages(entries, {
    repoId: "repo-1",
    suite: "jammy",
    component: "main",
    sourceIndexPath: "packages.raw/Packages.gz"
  });

  assert.equal(packages.length, 1);
  assert.equal(packages[0].latestVersion, "1.1");
  assert.deepEqual(packages[0].architectures, ["amd64", "arm64"]);
  assert.ok(packages[0].relationships.depends.includes("libc6 (>= 2.31)"));
  assert.ok(packages[0].relationships.provides.includes("demo-virtual"));
});
