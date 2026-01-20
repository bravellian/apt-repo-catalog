import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);

const repos = spawnSync("node", ["scripts/validate-repos.mjs", ...args], {
  stdio: "inherit"
});
if (repos.status !== 0) {
  process.exit(repos.status ?? 1);
}

const keys = spawnSync("node", ["scripts/validate-keys.mjs"], {
  stdio: "inherit"
});
if (keys.status !== 0) {
  process.exit(keys.status ?? 1);
}
