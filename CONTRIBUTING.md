# Contributing

Thanks for contributing. This repository aims to keep APT repository definitions and signing keys **deterministic, auditable, and reviewable**.

## What belongs here

- APT repository definitions for Debian/Ubuntu (and related variants if explicitly supported)
- Public signing keys used by those repositories
- Metadata required to validate and consume the above safely (fingerprints, provenance)
- Tooling to validate and update catalog content

## What does not belong here

- Install scripts that bypass APT trust (e.g., `curl | bash` installers)
- Private keys or credentials
- Claims that a vendor/repo is “trusted” or “secure”
- Unpinned or unreviewed key changes

## Repository data model

- `catalog/keys.json` defines keys:
  - stable `id`
  - `sourceUrl` (where the key is fetched from)
  - `expectedFingerprints` (the trust anchor)
  - `outputPath` (where the normalized `.asc` lives in this repo)
  - `status` (`active` or `deprecated`)
- `catalog/repos.json` defines repositories:
  - stable `id`
  - OS target (`os`)
  - APT source line (`source`)
  - `keyId` referencing an entry in `catalog/keys.json`

Multiple repos may share a single `keyId`.

## Key naming guidelines

Key IDs should be stable and unambiguous. Recommended format:

`<vendor>-<purpose>-<FP_SUFFIX>`

Where `FP_SUFFIX` is typically the **last 16 hex chars** of the OpenPGP fingerprint.

Examples:
- `microsoft-prod-BE1229CF0A1B2C3D`
- `docker-archive-9DC858229FC7DD38`

If a vendor rotates keys, add a **new key** with a new ID and fingerprint, and mark the old key `deprecated` when appropriate.

## Adding a new repository (high level)

1. Add or reuse a key in `catalog/keys.json`
   - Prefer reusing an existing key if it is clearly the same key (fingerprint match).
   - If adding, include `expectedFingerprints`.
2. Add repository definition in `catalog/repos.json`
   - Reference the key via `keyId`.
3. Run local validation:
   - `./scripts/run-validate.sh` (Linux/macOS) or `.\scripts\run-validate.ps1` (Windows)
4. If you added a new key entry or changed key URLs:
   - run the update script locally to generate the `.asc` file(s)
   - `./scripts/run-update.sh` or `.\scripts\run-update.ps1`
5. Open a PR.

## Validation rules

A PR is expected to:
- pass key fingerprint validation
- keep key changes reviewable (no mass unrelated changes)
- keep repo IDs stable and unique
- avoid unexpanded templating in `source` unless explicitly allowed

## How to run locally

### One-time bootstrap
- `./scripts/bootstrap.sh` or `.\scripts\bootstrap.ps1`

### Validate (CI-equivalent)
- `./scripts/run-validate.sh` or `.\scripts\run-validate.ps1`

### Update keys (writes keys/*.asc, like the PR bot)
- `./scripts/run-update.sh` or `.\scripts\run-update.ps1`

## Suggestions / improvements

If you want to improve the validation model (e.g., additional provenance fields, stricter repo source parsing, optional local fingerprint verification guidance), open an issue first so we can align on the approach.

## License

By contributing, you agree that your contributions are licensed under the repository’s license.
