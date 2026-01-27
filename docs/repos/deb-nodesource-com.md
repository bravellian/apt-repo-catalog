# . nodistro

## Repository
- Repository ID: `deb-nodesource-com`
- Base URL: `https://deb.nodesource.com/node_22.x`
- Host: `deb.nodesource.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://github.com/nodesource/distributions

## Suites
- Suite: `nodistro`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `nodesource`
- Expected fingerprints:
  - 6F71F525282841EEDAF851B42F59B5F99B1BE0B4
- Key source URL: https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key

## Install instructions

### Suite: nodistro

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nodesource.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nodesource.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" | sudo tee /etc/apt/sources.list.d/deb-nodesource-com-nodistro.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nodesource.asc -o /tmp/nodesource.asc
gpg --dearmor /tmp/nodesource.asc
sudo install -m 0644 /tmp/nodesource.gpg /usr/share/keyrings/nodesource.gpg
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_22.x nodistro main" | sudo tee /etc/apt/sources.list.d/deb-nodesource-com-nodistro.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: deb.nodesource.com
- Key notes: Official Node.js binary packages repository
- Key tags: nodejs
