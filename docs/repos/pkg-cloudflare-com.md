# cloudflared

## Repository
- Repository ID: `pkg-cloudflare-com`
- Base URL: `https://pkg.cloudflare.com/cloudflared`
- Host: `pkg.cloudflare.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8`
- Expected fingerprints:
  - FBA8C0EE63617C5EED695C43254B391D8CACCBF8
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x254B391D8CACCBF8

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared bookworm main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc -o /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
gpg --dearmor /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
sudo install -m 0644 /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared bookworm main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared jammy main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc -o /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
gpg --dearmor /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
sudo install -m 0644 /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared jammy main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-jammy.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared noble main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc -o /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
gpg --dearmor /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.asc
sudo install -m 0644 /tmp/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg /usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-pkg-cloudflare-com-signing-key-254b391d8caccbf8.gpg] https://pkg.cloudflare.com/cloudflared noble main" | sudo tee /etc/apt/sources.list.d/pkg-cloudflare-com-noble.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: pkg.cloudflare.com, ubuntu
- Key notes: Discovered via InRelease signature for https://pkg.cloudflare.com/cloudflared.
