# ubuntu noble

## Repository
- Repository ID: `apt-releases-teleport-dev`
- Base URL: `https://apt.releases.teleport.dev/ubuntu`
- Host: `apt.releases.teleport.dev`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `noble`
  - Components: stable/v17
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411`
- Expected fingerprints:
  - 0C5E8BA5658E320D1B031179C87ED53A6282C411
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xC87ED53A6282C411

## Install instructions

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.asc | gpg --dearmor | sudo tee /usr/share/keyrings/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.gpg] https://apt.releases.teleport.dev/ubuntu noble stable/v17" | sudo tee /etc/apt/sources.list.d/apt-releases-teleport-dev-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.asc -o /tmp/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.asc
gpg --dearmor /tmp/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.asc
sudo install -m 0644 /tmp/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.gpg /usr/share/keyrings/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.gpg
echo "deb [signed-by=/usr/share/keyrings/teleport-apt-releases-teleport-dev-signing-key-c87ed53a6282c411.gpg] https://apt.releases.teleport.dev/ubuntu noble stable/v17" | sudo tee /etc/apt/sources.list.d/apt-releases-teleport-dev-noble.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: apt.releases.teleport.dev, ubuntu
- Key notes: Discovered via InRelease signature for https://apt.releases.teleport.dev/ubuntu.
