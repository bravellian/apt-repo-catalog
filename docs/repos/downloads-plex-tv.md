# Artifactory

## Repository
- Repository ID: `downloads-plex-tv`
- Base URL: `https://downloads.plex.tv/repo/deb`
- Host: `downloads.plex.tv`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `public`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `plex-downloads-plex-tv-signing-key-97203c7b3adca79d`
- Expected fingerprints:
  - CD665CBA0E2F88B7373F7CB997203C7B3ADCA79D
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x97203C7B3ADCA79D

## Install instructions

### Suite: public

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.asc | gpg --dearmor | sudo tee /usr/share/keyrings/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.gpg] https://downloads.plex.tv/repo/deb public main" | sudo tee /etc/apt/sources.list.d/downloads-plex-tv-public.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.asc -o /tmp/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.asc
gpg --dearmor /tmp/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.asc
sudo install -m 0644 /tmp/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.gpg /usr/share/keyrings/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.gpg
echo "deb [signed-by=/usr/share/keyrings/plex-downloads-plex-tv-signing-key-97203c7b3adca79d.gpg] https://downloads.plex.tv/repo/deb public main" | sudo tee /etc/apt/sources.list.d/downloads-plex-tv-public.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: downloads.plex.tv
- Key notes: Discovered via InRelease signature for https://downloads.plex.tv/repo/deb.
