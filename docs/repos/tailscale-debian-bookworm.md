# Tailscale (Debian 12)

## Repository
- Repository ID: `tailscale-debian-bookworm`
- Base URL: `https://pkgs.tailscale.com/stable/debian`
- Host: `pkgs.tailscale.com`

## Upstream documentation
- Documentation URL: https://pkgs.tailscale.com/stable/
- Key documentation URL: https://pkgs.tailscale.com/stable/

## Suites
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `stretch`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-12

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `tailscale-ubuntu-jammy`
- Expected fingerprints:
  - 2596A99EAAB33821893C0A79458CA832957F5868
- Key source URL: https://pkgs.tailscale.com/stable/ubuntu/jammy.noarmor.gpg

## Install instructions

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian bullseye main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian bullseye main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian buster main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian buster main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian stretch main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian stretch main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian trixie main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian trixie main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian bookworm main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/debian bookworm main" | sudo tee /etc/apt/sources.list.d/tailscale-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (15)</summary>

<div class="packages-nav">
<a href="#packages-T">T</a>
</div>


### <a id="packages-T"></a>T

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: bullseye
  - Components: main
  - Description: The easiest, most secure, cross platform way to use WireGuard + oauth2 + 2FA/SSO
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale`
  - Install (apt): `sudo apt install tailscale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra
  - depends: iproute2, iptables
  - recommends: iproute2, iptables, tailscale-archive-keyring (>= 1.35.181)
  - conflicts: tailscale-relay
  - replaces: tailscale-relay

  </details>

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: buster
  - Components: main
  - Description: The easiest, most secure, cross platform way to use WireGuard + oauth2 + 2FA/SSO
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale`
  - Install (apt): `sudo apt install tailscale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra
  - depends: iproute2, iptables
  - recommends: iproute2, iptables, tailscale-archive-keyring (>= 1.35.181)
  - conflicts: tailscale-relay
  - replaces: tailscale-relay

  </details>

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: stretch
  - Components: main
  - Description: The easiest, most secure, cross platform way to use WireGuard + oauth2 + 2FA/SSO
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale`
  - Install (apt): `sudo apt install tailscale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra
  - depends: iproute2, iptables
  - recommends: iproute2, iptables, tailscale-archive-keyring (>= 1.35.181)
  - conflicts: tailscale-relay
  - replaces: tailscale-relay

  </details>

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: trixie
  - Components: main
  - Description: The easiest, most secure, cross platform way to use WireGuard + oauth2 + 2FA/SSO
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale`
  - Install (apt): `sudo apt install tailscale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra
  - depends: iproute2, iptables
  - recommends: iproute2, iptables, tailscale-archive-keyring (>= 1.35.181)
  - conflicts: tailscale-relay
  - replaces: tailscale-relay

  </details>

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: bookworm
  - Components: main
  - Description: The easiest, most secure, cross platform way to use WireGuard + oauth2 + 2FA/SSO
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale`
  - Install (apt): `sudo apt install tailscale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra
  - depends: iproute2, iptables
  - recommends: iproute2, iptables, tailscale-archive-keyring (>= 1.35.181)
  - conflicts: tailscale-relay
  - replaces: tailscale-relay

  </details>

- **tailscale-archive-keyring**
  - Latest version: 1.35.181
  - Architectures: all
  - Suite: bullseye
  - Components: main
  - Description: GnuPG keys of the Tailscale package archive
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-archive-keyring`
  - Install (apt): `sudo apt install tailscale-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-archive-keyring**
  - Latest version: 1.35.181
  - Architectures: all
  - Suite: buster
  - Components: main
  - Description: GnuPG keys of the Tailscale package archive
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-archive-keyring`
  - Install (apt): `sudo apt install tailscale-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-archive-keyring**
  - Latest version: 1.35.181
  - Architectures: all
  - Suite: stretch
  - Components: main
  - Description: GnuPG keys of the Tailscale package archive
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-archive-keyring`
  - Install (apt): `sudo apt install tailscale-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-archive-keyring**
  - Latest version: 1.35.181
  - Architectures: all
  - Suite: trixie
  - Components: main
  - Description: GnuPG keys of the Tailscale package archive
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-archive-keyring`
  - Install (apt): `sudo apt install tailscale-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-archive-keyring**
  - Latest version: 1.35.181
  - Architectures: all
  - Suite: bookworm
  - Components: main
  - Description: GnuPG keys of the Tailscale package archive
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-archive-keyring`
  - Install (apt): `sudo apt install tailscale-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-nginx-auth**
  - Latest version: 0.1.3
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: main
  - Description: Tailscale NGINX authentication protocol handler
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-nginx-auth`
  - Install (apt): `sudo apt install tailscale-nginx-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-nginx-auth**
  - Latest version: 0.1.3
  - Architectures: amd64, arm64
  - Suite: buster
  - Components: main
  - Description: Tailscale NGINX authentication protocol handler
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-nginx-auth`
  - Install (apt): `sudo apt install tailscale-nginx-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-nginx-auth**
  - Latest version: 0.1.3
  - Architectures: amd64, arm64
  - Suite: stretch
  - Components: main
  - Description: Tailscale NGINX authentication protocol handler
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-nginx-auth`
  - Install (apt): `sudo apt install tailscale-nginx-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-nginx-auth**
  - Latest version: 0.1.3
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Tailscale NGINX authentication protocol handler
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-nginx-auth`
  - Install (apt): `sudo apt install tailscale-nginx-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>

- **tailscale-nginx-auth**
  - Latest version: 0.1.3
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Tailscale NGINX authentication protocol handler
  - Homepage: https://www.tailscale.com
  - Install: `sudo apt-get install tailscale-nginx-auth`
  - Install (apt): `sudo apt install tailscale-nginx-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tailscale Inc <info@tailscale.com>
  - Section: net
  - Priority: extra

  </details>


Errors during fetch:
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install tailscale
- Repo tags: networking, security
- Key notes: Ubuntu 22.04 key (noarmor.gpg)
- Key tags: networking, security
