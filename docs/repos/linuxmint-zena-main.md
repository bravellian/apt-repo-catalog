# Linux Mint Zena - main (linuxmint-zena)

## Repository
- Repository ID: `linuxmint-zena-main`
- OS: `linuxmint-zena`
- Source: `http://packages.linuxmint.com zena main upstream import backport`

## Upstream documentation
- Documentation URL: https://linuxmint.com/documentation.php
- Key documentation URL: https://linuxmint.com/documentation.php

## Key reference
- Key ID: `linuxmint-archive-keyring`
- Expected fingerprints:
  - E1DD270288B4E6030699E45FA1715D88E1DF1F24
  - 630239CC130E1A7FD81A27B140976EAF437D05B5
  - 790BC7277767219C42C86F933B4FE6ACC0B21F32
  - 302F0738F465C1535761F965A6616109451BBBF2
- Key source URL: (not set)

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/linuxmint-archive-keyring.asc | gpg --dearmor | sudo tee /usr/share/keyrings/linuxmint-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com zena main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-zena-main.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/linuxmint-archive-keyring.asc -o /tmp/linuxmint-archive-keyring.asc
gpg --dearmor /tmp/linuxmint-archive-keyring.asc
sudo install -m 0644 /tmp/linuxmint-archive-keyring.gpg /usr/share/keyrings/linuxmint-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com zena main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-zena-main.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Linux Mint main repository; base Ubuntu repos are inherited.
- Repo tags: linuxmint, ubuntu-derivative, apt
- Key tags: linuxmint, apt
