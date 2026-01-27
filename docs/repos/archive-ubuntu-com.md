# Ubuntu

## Repository
- Repository ID: `archive-ubuntu-com`
- Base URL: `https://archive.ubuntu.com/ubuntu`
- Host: `archive.ubuntu.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `jammy`
  - Components: main, multiverse, restricted, universe
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `jammy-backports`
  - Components: main, multiverse, restricted, universe
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `jammy-updates`
  - Components: main, multiverse, restricted, universe
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c`
- Expected fingerprints:
  - F6ECB3762474EDA9D21B7022871920D1991BC93C
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x871920D1991BC93C

## Install instructions

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc -o /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
gpg --dearmor /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
sudo install -m 0644 /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy.list >/dev/null
sudo apt-get update
```

### Suite: jammy-backports

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy-backports main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy-backports.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc -o /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
gpg --dearmor /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
sudo install -m 0644 /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy-backports main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy-backports.list >/dev/null
sudo apt-get update
```

### Suite: jammy-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy-updates main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc -o /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
gpg --dearmor /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.asc
sudo install -m 0644 /tmp/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg /usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg
echo "deb [signed-by=/usr/share/keyrings/ubuntu-archive-ubuntu-com-signing-key-871920d1991bc93c.gpg] https://archive.ubuntu.com/ubuntu jammy-updates main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/archive-ubuntu-com-jammy-updates.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: archive.ubuntu.com, ubuntu
- Key notes: Discovered via InRelease signature for https://archive.ubuntu.com/ubuntu.
