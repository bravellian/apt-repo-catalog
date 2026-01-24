# Contributing

Thanks for contributing! This file covers the catalog maintenance workflow and tooling. End-user usage lives in `README.md`.

## Key updates

1. Add or update an entry in `catalog/keys.json` with the key URL and full fingerprint.
2. Fetch the key from the upstream URL and store it in `keys/`.
3. Verify the downloaded key matches the fingerprint before committing.

Key refreshes should prefer upstream HTTPS sources and be revalidated when the fingerprint changes.

## Helper scripts

| Command | Purpose |
| --- | --- |
| `npm run add:key -- --url <url> [--id <id>] [--label "<label>"] [--vendor <vendor>] [--force]` | Download and register a new signing key, update catalogs, and validate. |
| `npm run add:repo -- --id <id> --label "<label>" --os <os> --name <aptName> --source "<deb line>" --keyId <keyId>` | Add a repository entry linked to an existing key. |
| `node scripts/suggest-key-id.mjs <url>` | Suggest key IDs and print fingerprints for a key URL. |
| `npm run update:keys` | Refresh cached keys and provenance metadata. |
| `npm run validate` | Validate repo and key catalogs. |
| `node scripts/smoke-test-repos.mjs --os <os>` | Run APT smoke tests against repos for a target OS. |
| `node scripts/apt-inventory.mjs fetch-packages --repo-id <id>` | Fetch and normalize package indexes for a repository. |
| `npm run dev:sanity -- --key-url <url> --repo-os <os> --repo-name "<name>" --repo-source "<deb line>" [--repo-id <id>]` | Run a local add-key/add-repo/validate/smoke flow. |
| `npm run daily` | Run the same steps as the daily workflow. |

## Package inventory

Use the inventory CLI to fetch and normalize Packages indexes without modifying system APT config:

```bash
node scripts/apt-inventory.mjs fetch-packages --repo-id docker-debian-trixie-stable
node scripts/apt-inventory.mjs fetch-packages --repo-id microsoft-default-debian-13-trixie-packages-microsoft-com --mode direct
node scripts/apt-inventory.mjs fetch-packages-all --os debian-12
node scripts/apt-inventory.mjs fetch-packages-all --only-ids docker-debian-trixie-stable,kubernetes-core-stable-v1.35-debian-13
```

The inventory tries APT-assisted mode first (isolated temp dirs), then falls back to direct HTTP fetches if needed. Direct mode reads `dists/<suite>/Release` and downloads `Packages(.gz/.xz)` entries; it does not install packages and does not require root.

Limitations:
- Some repositories publish only `.xz` or `.lz4` indexes; ensure `xz` or `lz4` is available if you use direct mode.
- If a repository omits standard `dists/<suite>` layout, direct fetch may fail; APT-assisted mode is recommended.

## PR optimization

Pull request smoke tests only run for repos whose entries changed in `catalog/repos.json`. The workflow computes changed repo IDs by diffing the base and head JSON snapshots, then runs the relevant OS matrix entries.

## How PR validation works

GitHub Actions runs a lightweight validation job on every pull request and on pushes to `main`. The workflow parses `catalog/keys.json` and `catalog/repos.json`, checks required fields, and ensures all repositories reference a known key.

## Suggesting key IDs

Use `node scripts/suggest-key-id.mjs <url>` to download a key and print suggested key IDs and full fingerprints. The suggestion uses the hostname as vendor, a short label from the URL path, and the last 16 hex characters of the fingerprint suffix.

## Adding keys and repos

Use the CLI to download, verify, and add a key to the catalog and cache:

```bash
npm run add:key -- --url https://packages.microsoft.com/keys/microsoft.asc --vendor microsoft --label prod --documentationUrl https://learn.microsoft.com/en-us/windows-server/administration/linux-package-repository-for-microsoft-software --tags "microsoft,apt"
```

The command writes `keys/<id>.asc`, updates `catalog/keys.json`, refreshes `keys/index.json`, and runs the validation scripts. Use `--force` to overwrite an existing entry or reuse a source URL.

Use the CLI to add a repo entry tied to an existing key:

```bash
npm run add:repo -- --id microsoft-ubuntu --label "Microsoft Ubuntu" --os ubuntu-24.04 --name "Microsoft Packages" --source "deb [arch=amd64] https://packages.microsoft.com/ubuntu/24.04/prod jammy main" --keyId microsoft-prod-<LAST16> --documentationUrl https://learn.microsoft.com/en-us/windows-server/administration/linux-package-repository-for-microsoft-software --tags "microsoft,apt"
```

The command appends to `catalog/repos.json` and runs repo validation.

## Dev sanity check

Run the end-to-end local flow (add key, add repo, validate, smoke test):

```bash
npm run dev:sanity -- --key-url https://packages.microsoft.com/keys/microsoft.asc --key-id microsoft-prod-<LAST16> --vendor microsoft --key-label prod --repo-id microsoft-ubuntu --repo-os ubuntu-24.04 --repo-name "Microsoft Packages" --repo-source "deb [arch=amd64] https://packages.microsoft.com/ubuntu/24.04/prod jammy main" --repo-label "Microsoft Ubuntu"
```

## Backfilling catalog metadata

Apply missing documentation URLs, tags, or notes to existing keys using a patch file:

```bash
npm run backfill:keys -- --patch path/to/keys-metadata.json
```

## Importing vendor .list files

Use the importer to convert vendor-provided `.list` files into catalog entries:

```bash
npm run import:repos -- --os ubuntu-24.04 --keyId microsoft-prod-<LAST16> --documentationUrl https://learn.microsoft.com/en-us/windows-server/administration/linux-package-repository-for-microsoft-software --vendor microsoft --labelPrefix "Microsoft" --channelFromFilename --tags "microsoft,apt" --source https://packages.microsoft.com/config/ubuntu/24.04/prod.list
```

## Generating repos from a root URI

Generate repo entries from a root URI, suites, and components:

```bash
npm run generate:repos -- --vendor docker --rootUri https://download.docker.com/linux/ubuntu --distro ubuntu --suites jammy,noble --components stable --keyId docker-<LAST16> --documentationUrl https://docs.docker.com/engine/install/ubuntu/ --labelPrefix "Docker" --tags "docker,apt"
```

## Naming scheme for keys

Key files live in `keys/` and include a fingerprint suffix for traceability. Use this pattern:

`<vendor>-<short-fingerprint>.gpg`

Where `<short-fingerprint>` is the last 4 or 8 hex characters of the full fingerprint listed in `catalog/keys.json` (example: `microsoft-packages-29CF.gpg`).
