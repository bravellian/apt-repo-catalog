# APT Repository Catalog

![CI](https://github.com/bravellian/apt-repo-catalog/actions/workflows/validate.yml/badge.svg)
![Keys PR](https://github.com/bravellian/apt-repo-catalog/actions/workflows/update-keys-pr.yml/badge.svg)
![License](https://img.shields.io/github/license/bravellian/apt-repo-catalog)
![Last Commit](https://img.shields.io/github/last-commit/bravellian/apt-repo-catalog)

## What this is

This repository is a curated catalog of APT repositories and their signing keys. It also publishes per-repo installation docs, health status, and package index snapshots where available.

Start here:
- Catalog table: `CATALOG.md`
- Repository docs: `docs/README.md`
- Per-repo install instructions: `docs/repos/<repoId>.md`

Catalog entries may include documentation URLs, tags, and notes. Health status comes from smoke tests and is summarized in `reports/latest.json`.

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

Current OSes are checked daily via smoke tests. Legacy OSes are kept for reference and shown as NOT CHECKED in the catalog.

## Smoke tests

The smoke test runs a real `apt-get update` against each repo using the pinned keyring. It detects drift in repository suites, release metadata, or signing keys without scraping external documentation.

Run locally (Linux container or VM with `apt-get` and `gpg`):

```bash
node scripts/smoke-test-repos.mjs --os ubuntu-24.04
node scripts/smoke-test-repos.mjs --os debian-12
node scripts/smoke-test-repos.mjs --os ubuntu-24.04 --only-ids docker-ubuntu
node scripts/smoke-test-repos.mjs --os debian-12 --out reports/smoke/debian-12.json
```

### Latest snapshot

Scheduled smoke tests publish a combined health snapshot to `reports/latest.json`. This file aggregates per-OS smoke reports into a single current-status view.

## For maintainers

Maintenance and contribution docs live in `CONTRIBUTING.md`.
