# Repository Discovery Miner

The discovery miner finds, deduplicates, verifies, and ranks APT repositories by mining public configuration and code. It avoids vendor marketing pages and never modifies host APT configuration.

## What it does

- Searches GitHub for APT repo definitions and key install patterns
- Extracts deb lines, deb822 stanzas, and embedded repo snippets
- Normalizes and deduplicates repositories with evidence
- Verifies Release metadata and Packages indexes
- Scores and separates curated vs. quarantine lists
- Optionally syncs curated repos into the catalog schema

## Commands

Run in sequence:

```bash
node scripts/apt-inventory.mjs discover-repos
node scripts/apt-inventory.mjs verify-repos
node scripts/apt-inventory.mjs curate-repos
node scripts/apt-inventory.mjs sync-catalog
```

Include a local corpus directory in discovery (in addition to GitHub mining):

```bash
node scripts/apt-inventory.mjs discover-repos --local-dir path/to/corpus
```

### Environment

- `GITHUB_TOKEN` (optional but recommended) for higher GitHub Search API quota.

### Output locations

All outputs default to `data/discovery/`:

- `candidates.json`: raw extracts
- `deduped.json`: normalized candidates with evidence
- `verified.json`: verification results
- `verified-errors.json`: structured errors
- `curated.json`: recommended list
- `quarantine.json`: low-confidence list
- `sync-skipped.json`: entries skipped during sync
- `curation-report.json`: counts and reasons for quarantine

Verification downloads Release/Packages indexes into `data/discovery/tmp/` for parsing. This folder is safe to delete after a run.

## Configuration

Defaults live in `scripts/discovery/config.mjs`. Override by passing `--config <path>` to any command.

Key settings:

- `github.queries`: GitHub Search queries
- `github.maxPages`, `github.perPage`, `github.concurrency`: search controls
- `discovery.allowedDomains`, `discovery.denyDomains`: trust allow/deny lists
- `discovery.includePPAs`: opt-in for Launchpad PPAs (default false)
- `verification.timeoutMs`, `verification.concurrency`: verification throttles
- `scoring.trustThreshold`, `scoring.freshnessMonths`: curation rules

## Scoring and curation

Each repo receives a score breakdown:

- Popularity: occurrences and distinct GitHub projects
- Trust: InRelease availability, allowlisted domains, penalties for `trusted=yes` and HTTP
- Freshness: Release date recency
- Completeness: amd64/arm64/all coverage

Curated repos must verify at least one suite and meet the trust threshold; others go to quarantine.

Selectivity guardrails:

- `minOccurrencesForCuration`: minimum times found across GitHub/local evidence
- `minDistinctSourcesForCuration`: minimum unique repositories/projects
- `requireAllowlistForCuration`: only allowlist domains can enter curated list

## Recommended workflow

1) **Discovery:** run `discover-repos` when you want fresh candidates. If you hit rate limits, lower `github.maxPages`, enable `github.slowMode`, or rely more on `--local-dir`.
2) **Verify:** run `verify-repos` to validate APT metadata. Expect this to be slow; it fetches Release and Packages indexes. Tune `verification.concurrency` and `verification.timeoutMs`. Use `--max-age-days` (default 7) or `--only-new` to avoid re-verifying unchanged entries. Verification writes `verified.json` incrementally and reuses cached downloads in `data/discovery/tmp/` to avoid re-fetching where possible.
3) **Curate:** run `curate-repos` to separate curated vs quarantine. Review `curated.json`, `quarantine.json`, and `curation-report.json`. Adjust allowlist/thresholds and re-run curate as needed.
4) **Sync:** run `sync-catalog` to generate `catalog/discovered-repos.json`. Use `--write-catalog` only when you’re ready to merge into `catalog/repos.json`.

## Rate limit and noise control tips

- Prefer setting `GITHUB_TOKEN`. Tokens without scopes are fine for public search.
- Use smaller `github.maxPages` and `github.perPage` to reduce API load.
- Enable `github.slowMode` for backoff between requests.
- Run `discover-repos --local-dir <path>` to mine your own repo corpus without GitHub.
- Keep `requireAllowlistForCuration` on so only vetted domains reach curated output.

## Integration testing

Use a tiny fixture list to validate the verification pipeline without hammering the internet:

```bash
node scripts/apt-inventory.mjs verify-repos --integration
```

The fixture list lives at `tests/fixtures/discovery-verify.json`.
