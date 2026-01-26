# APT Repository Catalog

![CI](https://github.com/bravellian/apt-repo-catalog/actions/workflows/validate.yml/badge.svg)
![Keys PR](https://github.com/bravellian/apt-repo-catalog/actions/workflows/update-keys-pr.yml/badge.svg)
![License](https://img.shields.io/github/license/bravellian/apt-repo-catalog)
![Last Commit](https://img.shields.io/github/last-commit/bravellian/apt-repo-catalog)

## What this is

This repository is a curated catalog of APT repositories and their signing keys. It also publishes per-repo installation docs, health status, and package index snapshots where available.

Start here:
- Catalog table: [CATALOG.md](CATALOG.md)
- Repository docs: [docs/README.md](docs/README.md)
- Per-repo install instructions: [docs/repos/<repoId>.md](docs/repos/)

Catalog entries define the repository root (`baseUrl`). Suite/component metadata is derived from Release files and stored under `data/repos/<repoId>/suites.json`.

Health status comes from smoke tests and is summarized in `reports/latest.json`.

## Quick start

1. Open the catalog: `CATALOG.md`
2. Click a repo doc link in the table.
3. Follow the install instructions for that repo.

Example repo doc includes:
- Install commands
- Key fingerprint reference
- Package list (collapsible), if indexed

## Package inventory

Package inventory snapshots are stored per repo:
- Raw index files: `data/repos/<repoId>/packages.raw/<timestamp>/`
- Normalized snapshot: `data/repos/<repoId>/packages.json`
- Fetch metadata/errors: `data/repos/<repoId>/packages.meta.json`

Docs show package lists in a collapsible section. Compatibility is represented by suite/component/architecture, which is how APT publishes indexes.

## Status & checks

Smoke tests are repo/suite based; OS is hinted from suites and base URL patterns. Results are aggregated in `reports/latest.json`.

## Smoke tests

The smoke test runs a real `apt-get update` against each repo using the pinned keyring. It detects drift in repository suites, release metadata, or signing keys without scraping external documentation.

Run locally (Linux container or VM with `apt-get` and `gpg`):

```bash
node scripts/smoke-test-repos.mjs --out reports/smoke/repos.json
node scripts/smoke-test-repos.mjs --only-ids docker-debian-buster-stable,brave-browser
```

### Latest snapshot

Scheduled smoke tests publish a combined health snapshot to `reports/latest.json`. This file aggregates per-suite smoke reports into a single current-status view.

## Discovery & curation workflow

Discovery now supports a suite-only verification pass to keep it lightweight. Use this to curate repositories before fetching full package inventories.

Suite-only verification (Release/InRelease only):

```bash
node scripts/discovery/index.mjs verify --suite-only
```

When ready to index packages, run inventory separately:

```bash
node scripts/apt-inventory.mjs fetch-packages-all --allow-failures true
```

You can also scope inventory to specific repos:

```bash
node scripts/apt-inventory.mjs fetch-packages --only-ids repo1,repo2 --allow-failures true
```

## For maintainers

Maintenance and contribution docs live in `CONTRIBUTING.md`.
