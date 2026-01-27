# deb.sury.org

## Repository
- Repository ID: `packages-sury-org`
- Base URL: `https://packages.sury.org/php`
- Host: `packages.sury.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `{{`
  - Components: }}, grains.oscodename, main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stretch`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `sury-packages-sury-org-signing-key-b188e2b695bd4743`
- Expected fingerprints:
  - 15058500A0235D97F5D10063B188E2B695BD4743
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0xB188E2B695BD4743

## Install instructions

### Suite: {{

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc | gpg --dearmor | sudo tee /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php {{ }} grains.oscodename main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-{{.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc -o /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
gpg --dearmor /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
sudo install -m 0644 /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php {{ }} grains.oscodename main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-{{.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc | gpg --dearmor | sudo tee /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php bookworm main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc -o /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
gpg --dearmor /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
sudo install -m 0644 /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php bookworm main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc | gpg --dearmor | sudo tee /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php stretch main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc -o /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
gpg --dearmor /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.asc
sudo install -m 0644 /tmp/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg /usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg
echo "deb [signed-by=/usr/share/keyrings/sury-packages-sury-org-signing-key-b188e2b695bd4743.gpg] https://packages.sury.org/php stretch main" | sudo tee /etc/apt/sources.list.d/packages-sury-org-stretch.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, packages.sury.org
- Key notes: Discovered via InRelease signature for https://packages.sury.org/php.
