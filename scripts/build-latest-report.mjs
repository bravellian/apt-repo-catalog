import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();

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

function getTotals(report) {
  const totals = report.totals ?? {};
  if (
    typeof totals.tested === "number" &&
    typeof totals.passed === "number" &&
    typeof totals.failed === "number" &&
    typeof totals.skipped === "number"
  ) {
    return totals;
  }
  const results = Array.isArray(report.results) ? report.results : [];
  const counts = { tested: results.length, passed: 0, failed: 0, skipped: 0 };
  for (const result of results) {
    if (result.status === "passed") {
      counts.passed += 1;
    } else if (result.status === "failed") {
      counts.failed += 1;
    } else {
      counts.skipped += 1;
    }
  }
  return counts;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const inputDir = args.inDir ?? path.join(root, "reports", "smoke");
  const outputPath = args.out ?? path.join(root, "reports", "latest.json");

  const entries = await readdir(inputDir);
  const reportFiles = entries.filter((name) => name.endsWith(".json"));

  const reports = [];
  for (const name of reportFiles) {
    const fullPath = path.join(inputDir, name);
    const raw = await readFile(fullPath, "utf8");
    const parsed = JSON.parse(raw);
    reports.push(parsed);
  }

  const totals = { tested: 0, passed: 0, failed: 0, skipped: 0 };
  const byOs = {};
  const failures = [];

  for (const report of reports) {
    const os = report.os ?? "unknown";
    const reportTotals = getTotals(report);
    totals.tested += reportTotals.tested;
    totals.passed += reportTotals.passed;
    totals.failed += reportTotals.failed;
    totals.skipped += reportTotals.skipped;

    const results = Array.isArray(report.results) ? report.results : [];
    const failedRepoIds = results
      .filter((result) => result.status === "failed")
      .map((result) => result.repoId)
      .filter(Boolean);

    byOs[os] = {
      generatedAt: report.generatedAt ?? null,
      totals: reportTotals,
      failedRepoIds,
      failedCount: failedRepoIds.length
    };

    for (const result of results) {
      if (result.status === "failed") {
        failures.push({
          os,
          repoId: result.repoId ?? "unknown",
          classification: result.classification ?? "apt_error"
        });
      }
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    totals,
    byOs,
    failures
  };

  const output = JSON.stringify(payload, null, 2) + "\n";
  await writeFile(outputPath, output, "utf8");
}

try {
  await main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
