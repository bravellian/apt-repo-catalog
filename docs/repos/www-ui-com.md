# Ubiquiti Networks, Inc.

## Repository
- Repository ID: `www-ui-com`
- Base URL: `https://www.ui.com/downloads/unifi/debian`
- Host: `www.ui.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `stable`
  - Components: ubiquiti
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `ui-www-ui-com-signing-key-06e85760c0a52c50`
- Expected fingerprints:
  - 4A228B2D358A5094178285BE06E85760C0A52C50
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x06E85760C0A52C50

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ui-www-ui-com-signing-key-06e85760c0a52c50.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ui-www-ui-com-signing-key-06e85760c0a52c50.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ui-www-ui-com-signing-key-06e85760c0a52c50.gpg] https://www.ui.com/downloads/unifi/debian stable ubiquiti" | sudo tee /etc/apt/sources.list.d/www-ui-com-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ui-www-ui-com-signing-key-06e85760c0a52c50.asc -o /tmp/ui-www-ui-com-signing-key-06e85760c0a52c50.asc
gpg --dearmor /tmp/ui-www-ui-com-signing-key-06e85760c0a52c50.asc
sudo install -m 0644 /tmp/ui-www-ui-com-signing-key-06e85760c0a52c50.gpg /usr/share/keyrings/ui-www-ui-com-signing-key-06e85760c0a52c50.gpg
echo "deb [signed-by=/usr/share/keyrings/ui-www-ui-com-signing-key-06e85760c0a52c50.gpg] https://www.ui.com/downloads/unifi/debian stable ubiquiti" | sudo tee /etc/apt/sources.list.d/www-ui-com-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, www.ui.com
- Key notes: Discovered via InRelease signature for https://www.ui.com/downloads/unifi/debian.
