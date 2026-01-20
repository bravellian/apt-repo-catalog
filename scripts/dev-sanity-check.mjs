import { spawnSync } from "node:child_process";

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 1) {
    const value = argv[i];
    if (!value.startsWith("--")) {
      continue;
    }
    const key = value.slice(2);
    const next = argv[i + 1];
    if (!next || next.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    args[key] = next;
    i += 1;
  }
  return args;
}

function requireArg(args, name) {
  const value = args[name];
  if (!value) {
    throw new Error(`Missing required --${name}`);
  }
  return value;
}

function normalizeSlug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function runStep(label, command, args, capture = false) {
  console.log(`\n==> ${label}`);
  console.log(`$ ${[command, ...args].join(" ")}`);
  const result = spawnSync(command, args, {
    stdio: capture ? "pipe" : "inherit",
    encoding: capture ? "utf8" : undefined
  });
  if (capture && result.stdout) {
    process.stdout.write(result.stdout);
  }
  if (capture && result.stderr) {
    process.stderr.write(result.stderr);
  }
  if (result.status !== 0) {
    throw new Error(`${label} failed`);
  }
  return result;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  const keyUrl = requireArg(args, "key-url");
  const repoOs = requireArg(args, "repo-os");
  const repoName = requireArg(args, "repo-name");
  const repoSource = requireArg(args, "repo-source");

  const addKeyArgs = ["scripts/add-key.mjs", "--url", keyUrl];
  if (args["key-id"]) {
    addKeyArgs.push("--id", args["key-id"]);
  }
  if (args["key-label"]) {
    addKeyArgs.push("--label", args["key-label"]);
  }
  if (args["vendor"]) {
    addKeyArgs.push("--vendor", args["vendor"]);
  }
  if (args["key-documentationUrl"]) {
    addKeyArgs.push("--documentationUrl", args["key-documentationUrl"]);
  }
  if (args["key-tags"]) {
    addKeyArgs.push("--tags", args["key-tags"]);
  }
  if (args["key-notes"]) {
    addKeyArgs.push("--notes", args["key-notes"]);
  }

  const addKeyResult = runStep("Add key", "node", addKeyArgs, true);
  let keyId = args["key-id"];
  if (!keyId) {
    const output = `${addKeyResult.stdout ?? ""}\n${addKeyResult.stderr ?? ""}`;
    const match = output.match(/^- id:\s*(.+)$/m);
    if (match) {
      keyId = match[1].trim();
    }
  }
  if (!keyId) {
    throw new Error("Unable to determine key id from add-key output");
  }

  const repoId = args["repo-id"] ?? normalizeSlug(repoName);
  if (!repoId) {
    throw new Error("Unable to determine repo id");
  }

  const addRepoArgs = [
    "scripts/add-repo.mjs",
    "--id",
    repoId,
    "--label",
    args["repo-label"] ?? repoName,
    "--os",
    repoOs,
    "--name",
    repoName,
    "--source",
    repoSource,
    "--keyId",
    keyId
  ];
  if (args["repo-documentationUrl"]) {
    addRepoArgs.push("--documentationUrl", args["repo-documentationUrl"]);
  }
  if (args["repo-tags"]) {
    addRepoArgs.push("--tags", args["repo-tags"]);
  }
  if (args["repo-notes"]) {
    addRepoArgs.push("--notes", args["repo-notes"]);
  }

  runStep("Add repo", "node", addRepoArgs);
  runStep("Validate repos", "node", ["scripts/validate-repos.mjs"]);
  runStep("Validate keys", "node", ["scripts/validate-keys.mjs"]);
  runStep("Smoke test", "node", [
    "scripts/smoke-test-repos.mjs",
    "--os",
    repoOs,
    "--only-ids",
    repoId
  ]);

  console.log("\nAll sanity checks passed.");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
