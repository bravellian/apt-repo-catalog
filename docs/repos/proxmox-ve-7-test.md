# Proxmox VE 7 - test (proxmox-7)

## Repository
- Repository ID: `proxmox-ve-7-test`
- OS: `proxmox-7`
- Source: `http://download.proxmox.com/debian/pve bullseye pvetest`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Key reference
- Key ID: `proxmox-release-bullseye`
- Expected fingerprints:
  - 28139A2F830BD68478A1A01FDD4BA3917E23BF59
- Key source URL: https://enterprise.proxmox.com/debian/proxmox-release-bullseye.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bullseye.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bullseye pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc -o /tmp/proxmox-release-bullseye.asc
gpg --dearmor /tmp/proxmox-release-bullseye.asc
sudo install -m 0644 /tmp/proxmox-release-bullseye.gpg /usr/share/keyrings/proxmox-release-bullseye.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bullseye pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Test repository; use with caution.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
