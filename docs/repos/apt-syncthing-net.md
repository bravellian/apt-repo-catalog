# Syncthing

## Repository
- Repository ID: `apt-syncthing-net`
- Base URL: `https://apt.syncthing.net`
- Host: `apt.syncthing.net`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `syncthing`
  - Components: stable
  - Architectures: amd64
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47`
- Expected fingerprints:
  - FBA2E162F2F44657B38F0309E5665F9BD5970C47
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xE5665F9BD5970C47

## Install instructions

### Suite: syncthing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.asc | gpg --dearmor | sudo tee /usr/share/keyrings/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.gpg] https://apt.syncthing.net syncthing stable" | sudo tee /etc/apt/sources.list.d/apt-syncthing-net-syncthing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.asc -o /tmp/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.asc
gpg --dearmor /tmp/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.asc
sudo install -m 0644 /tmp/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.gpg /usr/share/keyrings/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.gpg
echo "deb [signed-by=/usr/share/keyrings/syncthing-apt-syncthing-net-signing-key-e5665f9bd5970c47.gpg] https://apt.syncthing.net syncthing stable" | sudo tee /etc/apt/sources.list.d/apt-syncthing-net-syncthing.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: apt.syncthing.net
- Key notes: Discovered via InRelease signature for https://apt.syncthing.net.
