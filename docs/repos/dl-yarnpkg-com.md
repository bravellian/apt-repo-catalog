# yarn

## Repository
- Repository ID: `dl-yarnpkg-com`
- Base URL: `https://dl.yarnpkg.com/debian`
- Host: `dl.yarnpkg.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://classic.yarnpkg.com/lang/en/docs/install/

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `yarn`
- Expected fingerprints:
  - 72ECF46A56B4AD39C907BBB71646B01B86E50310
- Key source URL: https://dl.yarnpkg.com/debian/pubkey.gpg

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/yarn.asc | gpg --dearmor | sudo tee /usr/share/keyrings/yarn.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/dl-yarnpkg-com-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/yarn.asc -o /tmp/yarn.asc
gpg --dearmor /tmp/yarn.asc
sudo install -m 0644 /tmp/yarn.gpg /usr/share/keyrings/yarn.gpg
echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/dl-yarnpkg-com-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, dl.yarnpkg.com
- Key notes: Signing key for Yarn's APT repository
- Key tags: javascript, package manager
