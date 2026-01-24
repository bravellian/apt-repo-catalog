# Proxmox VE 9 - enterprise (proxmox-9)

## Repository
- Repository ID: `proxmox-ve-9-enterprise`
- OS: `proxmox-9`
- Source: `https://enterprise.proxmox.com/debian/pve trixie pve-enterprise`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Key reference
- Key ID: `proxmox-archive-keyring-trixie`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
  - 24B30F06ECC1836A4E5EFECBA7BCD1420BFE778E
- Key source URL: (not set)

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] https://enterprise.proxmox.com/debian/pve trixie pve-enterprise" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-enterprise.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] https://enterprise.proxmox.com/debian/pve trixie pve-enterprise" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-enterprise.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Requires a valid Proxmox subscription.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
