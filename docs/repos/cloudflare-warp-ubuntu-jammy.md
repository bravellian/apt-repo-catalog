# Cloudflare WARP (Ubuntu 22.04 Jammy)

## Repository
- Repository ID: `cloudflare-warp-ubuntu-jammy`
- Base URL: `https://pkg.cloudflareclient.com`
- Host: `pkg.cloudflareclient.com`

## Upstream documentation
- Documentation URL: https://pkg.cloudflareclient.com/
- Key documentation URL: https://pkg.cloudflareclient.com/

## Suites
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `stretch`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `xenial`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04

## Key reference
- Key ID: `cloudflare-warp`
- Expected fingerprints:
  - C068A2B5771775193CBE1F2F6E2DD2174FA1C3BA
- Key source URL: https://pkg.cloudflareclient.com/pubkey.gpg

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bookworm main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bookworm main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bionic main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bionic main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bullseye main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com bullseye main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com buster main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com buster main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-buster.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com focal main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com focal main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com stretch main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com stretch main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com trixie main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com trixie main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-trixie.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com xenial main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com xenial main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com jammy main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com jammy main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/cloudflare-warp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com noble main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/cloudflare-warp.asc -o /tmp/cloudflare-warp.asc
gpg --dearmor /tmp/cloudflare-warp.asc
sudo install -m 0644 /tmp/cloudflare-warp.gpg /usr/share/keyrings/cloudflare-warp.gpg
echo "deb [signed-by=/usr/share/keyrings/cloudflare-warp.gpg] https://pkg.cloudflareclient.com noble main" | sudo tee /etc/apt/sources.list.d/cloudflare-warp-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (10)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a>
</div>


### <a id="packages-C"></a>C

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2024.4.133-1
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.6.1335.0
  - Architectures: amd64, arm64
  - Suite: buster
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2023.7.40-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2023.7.40-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>

- **cloudflare-warp**
  - Latest version: 2025.10.186.0
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Cloudflare Warp Client
  - Homepage: https://1.1.1.1
  - Install: `sudo apt-get install cloudflare-warp`
  - Install (apt): `sudo apt install cloudflare-warp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cloudflare <support@cloudflare.com>
  - Section: net
  - Priority: optional
  - depends: ca-certificates, desktop-file-utils, gnupg2, iproute2, libc6, libcap2-bin, libdbus-1-3, libnss3-tools, libpcap0.8, nftables
  - suggests: traceroute

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install cloudflare-warp
- Repo tags: security, networking, cloud
- Key notes: Cloudflare WARP client packages
- Key tags: security, networking, cloud
