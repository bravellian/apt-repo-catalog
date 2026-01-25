# Node.js 20.x (NodeSource) (ubuntu-22.04)

## Repository
- Repository ID: `nodesource-node20x`
- OS: `ubuntu-22.04`
- Source: `https://deb.nodesource.com/node_20.x jammy main`

## Upstream documentation
- Documentation URL: https://deb.nodesource.com
- Key documentation URL: https://github.com/nodesource/distributions

## Key reference
- Key ID: `nodesource`
- Expected fingerprints:
  - 6F71F525282841EEDAF851B42F59B5F99B1BE0B4
- Key source URL: https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nodesource.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nodesource.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x jammy main" | sudo tee /etc/apt/sources.list.d/nodesource-node20x.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nodesource.asc -o /tmp/nodesource.asc
gpg --dearmor /tmp/nodesource.asc
sudo install -m 0644 /tmp/nodesource.gpg /usr/share/keyrings/nodesource.gpg
echo "deb [signed-by=/usr/share/keyrings/nodesource.gpg] https://deb.nodesource.com/node_20.x jammy main" | sudo tee /etc/apt/sources.list.d/nodesource-node20x.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (0)</summary>

<div class="packages-nav">

</div>


Errors during fetch:
- apt-get update failed
- Failed to fetch Release/InRelease

</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Node.js 20 LTS from NodeSource
- Repo tags: nodejs
- Key notes: Official Node.js binary packages repository
- Key tags: nodejs
