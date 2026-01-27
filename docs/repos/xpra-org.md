# xpra.org

## Repository
- Repository ID: `xpra-org`
- Base URL: `https://xpra.org`
- Host: `xpra.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `sid`
  - Components: main
  - Architectures: amd64, arm64
  - Observed OSes: (not listed)
- Suite: `xenial`
  - Components: main
  - Architectures: amd64, arm64
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `xpra-xpra-org-signing-key-73254cad17978faf`
- Expected fingerprints:
  - B4993B57323148E37977E5D873254CAD17978FAF
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x73254CAD17978FAF

## Install instructions

### Suite: sid

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/xpra-xpra-org-signing-key-73254cad17978faf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg] https://xpra.org sid main" | sudo tee /etc/apt/sources.list.d/xpra-org-sid.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/xpra-xpra-org-signing-key-73254cad17978faf.asc -o /tmp/xpra-xpra-org-signing-key-73254cad17978faf.asc
gpg --dearmor /tmp/xpra-xpra-org-signing-key-73254cad17978faf.asc
sudo install -m 0644 /tmp/xpra-xpra-org-signing-key-73254cad17978faf.gpg /usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg
echo "deb [signed-by=/usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg] https://xpra.org sid main" | sudo tee /etc/apt/sources.list.d/xpra-org-sid.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/xpra-xpra-org-signing-key-73254cad17978faf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg] https://xpra.org xenial main" | sudo tee /etc/apt/sources.list.d/xpra-org-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/xpra-xpra-org-signing-key-73254cad17978faf.asc -o /tmp/xpra-xpra-org-signing-key-73254cad17978faf.asc
gpg --dearmor /tmp/xpra-xpra-org-signing-key-73254cad17978faf.asc
sudo install -m 0644 /tmp/xpra-xpra-org-signing-key-73254cad17978faf.gpg /usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg
echo "deb [signed-by=/usr/share/keyrings/xpra-xpra-org-signing-key-73254cad17978faf.gpg] https://xpra.org xenial main" | sudo tee /etc/apt/sources.list.d/xpra-org-xenial.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, xpra.org
- Key notes: Discovered via InRelease signature for https://xpra.org.
