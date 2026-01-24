import test from "node:test";
import assert from "node:assert/strict";
import { parseDebLine, parseDeb822 } from "../scripts/discovery/parsers.mjs";
import { normalizeBaseUrl, dedupeCandidates } from "../scripts/discovery/normalize.mjs";

test("parseDebLine handles options and components", () => {
  const parsed = parseDebLine(
    "deb [arch=amd64 signed-by=/usr/share/keyrings/demo.gpg] https://example.com/repo stable main contrib"
  );
  assert.equal(parsed.uri, "https://example.com/repo");
  assert.equal(parsed.suite, "stable");
  assert.deepEqual(parsed.components, ["main", "contrib"]);
  assert.equal(parsed.options.arch, "amd64");
  assert.equal(parsed.options["signed-by"], "/usr/share/keyrings/demo.gpg");
});

test("parseDeb822 parses stanza fields", () => {
  const text = [
    "Types: deb",
    "URIs: https://example.com/apt",
    "Suites: stable",
    "Components: main contrib",
    "Architectures: amd64 arm64",
    "Signed-By: /usr/share/keyrings/example.gpg",
    ""
  ].join("\n");
  const stanzas = parseDeb822(text);
  assert.equal(stanzas.length, 1);
  assert.deepEqual(stanzas[0].uris, ["https://example.com/apt"]);
  assert.deepEqual(stanzas[0].suites, ["stable"]);
  assert.deepEqual(stanzas[0].components, ["main", "contrib"]);
  assert.deepEqual(stanzas[0].architectures, ["amd64", "arm64"]);
  assert.equal(stanzas[0].signedBy, "/usr/share/keyrings/example.gpg");
});

test("normalizeBaseUrl strips dists and trailing slashes", () => {
  const normalized = normalizeBaseUrl("https://Example.com/apt/dists/stable/");
  assert.equal(normalized, "https://example.com/apt");
});

test("dedupeCandidates merges suites and components", () => {
  const normalized = [
    {
      type: "deb",
      baseUrl: "https://example.com/apt",
      suite: "stable",
      components: ["main"],
      architectures: ["amd64"],
      options: {},
      signedBy: "",
      evidence: { repo: "owner/repo", path: "a.list" }
    },
    {
      type: "deb",
      baseUrl: "https://example.com/apt",
      suite: "stable",
      components: ["contrib"],
      architectures: ["arm64"],
      options: {},
      signedBy: "",
      evidence: { repo: "owner/repo", path: "b.list" }
    }
  ];
  const deduped = dedupeCandidates(normalized);
  assert.equal(deduped.length, 1);
  const suite = deduped[0].suites[0];
  assert.deepEqual(suite.components, ["contrib", "main"]);
  assert.deepEqual(suite.architectures, ["amd64", "arm64"]);
});
