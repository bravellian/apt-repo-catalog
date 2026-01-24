# Proxmox VE 8 - no-subscription (proxmox-8)

## Repository
- Repository ID: `proxmox-ve-8-no-subscription`
- OS: `proxmox-8`
- Source: `http://download.proxmox.com/debian/pve bookworm pve-no-subscription`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Key reference
- Key ID: `proxmox-release-bookworm`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
- Key source URL: https://enterprise.proxmox.com/debian/proxmox-release-bookworm.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bookworm.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription" | sudo tee /etc/apt/sources.list.d/proxmox-ve-8-no-subscription.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc -o /tmp/proxmox-release-bookworm.asc
gpg --dearmor /tmp/proxmox-release-bookworm.asc
sudo install -m 0644 /tmp/proxmox-release-bookworm.gpg /usr/share/keyrings/proxmox-release-bookworm.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription" | sudo tee /etc/apt/sources.list.d/proxmox-ve-8-no-subscription.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Not recommended for production.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
