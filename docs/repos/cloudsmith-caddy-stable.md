# cloudsmith/caddy/stable

## Repository
- Repository ID: `cloudsmith-caddy-stable`
- Base URL: `https://dl.cloudsmith.io/public/caddy/stable/deb/debian`
- Host: `dl.cloudsmith.io`

## Upstream documentation
- Documentation URL: https://cloudsmith.io/~caddy/repos/
- Key documentation URL: https://caddyserver.com/docs/install#debian-ubuntu-raspbian

## Suites
- Suite: `any-version`
  - Components: main, multiverse, restricted, universe
  - Architectures: amd64, arm64, armel, armhf, armv7l, i386, ppc64el, riscv64, s390x
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `cloudsmith-gpg-key-155b6d79ca56ea34`
- Expected fingerprints:
  - 65760C51EDEA2017CEA2CA15155B6D79CA56EA34
- Key source URL: https://dl.cloudsmith.io/public/caddy/stable/gpg.key

## Install instructions

### Suite: any-version

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudsmith-gpg-key-155b6d79ca56ea34.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudsmith-gpg-key-155b6d79ca56ea34.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudsmith-gpg-key-155b6d79ca56ea34.gpg] https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/cloudsmith-caddy-stable-any-version.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudsmith-gpg-key-155b6d79ca56ea34.asc -o /tmp/cloudsmith-gpg-key-155b6d79ca56ea34.asc
gpg --dearmor /tmp/cloudsmith-gpg-key-155b6d79ca56ea34.asc
sudo install -m 0644 /tmp/cloudsmith-gpg-key-155b6d79ca56ea34.gpg /usr/share/keyrings/cloudsmith-gpg-key-155b6d79ca56ea34.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudsmith-gpg-key-155b6d79ca56ea34.gpg] https://dl.cloudsmith.io/public/caddy/stable/deb/debian any-version main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/cloudsmith-caddy-stable-any-version.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
