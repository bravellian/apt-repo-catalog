# Proxmox Ceph Squid - enterprise (PVE 8)

## Repository
- Repository ID: `proxmox-ceph-squid-enterprise-bookworm`
- Base URL: `https://enterprise.proxmox.com/debian/ceph-squid`
- Host: `enterprise.proxmox.com`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Suites
- Suite: `bookworm`
  - Components: enterprise
  - Architectures: (not listed)
  - Observed OSes: proxmox-8

## OS hints
- proxmox, Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `proxmox-release-bookworm`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
- Key source URL: https://enterprise.proxmox.com/debian/proxmox-release-bookworm.gpg

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bookworm.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] https://enterprise.proxmox.com/debian/ceph-squid bookworm enterprise" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-enterprise-bookworm-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc -o /tmp/proxmox-release-bookworm.asc
gpg --dearmor /tmp/proxmox-release-bookworm.asc
sudo install -m 0644 /tmp/proxmox-release-bookworm.gpg /usr/share/keyrings/proxmox-release-bookworm.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] https://enterprise.proxmox.com/debian/ceph-squid bookworm enterprise" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-enterprise-bookworm-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (0)</summary>

<div class="packages-nav">

</div>


Errors during fetch:
- apt-get update failed
- Failed to fetch Release/InRelease

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Requires a valid Proxmox subscription.
- Repo tags: proxmox, ceph, debian-derivative, apt
- Key tags: proxmox, apt
