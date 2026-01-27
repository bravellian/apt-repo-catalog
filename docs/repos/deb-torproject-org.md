# TorProject

## Repository
- Repository ID: `deb-torproject-org`
- Base URL: `https://deb.torproject.org/torproject.org`
- Host: `deb.torproject.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://support.torproject.org/apt/tor-deb-repo/

## Suites
- Suite: `{{`
  - Components: }}, ansible_distribution_release, main
  - Architectures: amd64
  - Observed OSes: (not listed)
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stretch`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `suite`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `testing`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `torproject`
- Expected fingerprints:
  - A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
- Key source URL: https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc

## Install instructions

### Suite: {{

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org {{ }} ansible_distribution_release main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-{{.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org {{ }} ansible_distribution_release main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-{{.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bookworm main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bookworm main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bullseye main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bullseye main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org focal main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org focal main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-focal.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org stretch main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org stretch main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-stretch.list >/dev/null
sudo apt-get update
```

### Suite: suite

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org suite main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-suite.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org suite main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-suite.list >/dev/null
sudo apt-get update
```

### Suite: testing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org testing main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-testing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org testing main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-testing.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org trixie main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org trixie main" | sudo tee /etc/apt/sources.list.d/deb-torproject-org-trixie.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: deb.torproject.org, debian
- Key notes: Tor Project package signing key (expires periodically)
- Key tags: privacy, security
