import { spawnSync } from "node:child_process";

function run(command, args = []) {
  const result = spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run("npm", ["ci"]);
run("node", ["scripts/update-keys.mjs"]);
run("node", ["scripts/smoke-test-repos.mjs"]);
run("node", [
  "scripts/build-latest-report.mjs",
  "--inDir",
  "reports/smoke",
  "--out",
  "reports/latest.json"
]);
run("node", ["scripts/apt-inventory.mjs", "fetch-packages-all", "--allow-failures", "true"]);
run("node", ["scripts/generate-catalog-md.mjs"]);
run("node", ["scripts/generate-repo-docs.mjs"]);
