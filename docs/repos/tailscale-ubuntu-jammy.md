# Tailscale (Ubuntu 22.04)

## Repository
- Repository ID: `tailscale-ubuntu-jammy`
- Base URL: `https://pkgs.tailscale.com/stable/ubuntu`
- Host: `pkgs.tailscale.com`

## Upstream documentation
- Documentation URL: https://pkgs.tailscale.com/stable/
- Key documentation URL: https://pkgs.tailscale.com/stable/

## Suites
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `eoan`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.04
- Suite: `impish`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.10
- Suite: `kinetic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.10
- Suite: `lunar`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.04
- Suite: `mantic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.10
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `oracular`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.10
- Suite: `plucky`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `questing`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.10
- Suite: `xenial`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `tailscale-ubuntu-jammy`
- Expected fingerprints:
  - 2596A99EAAB33821893C0A79458CA832957F5868
- Key source URL: https://pkgs.tailscale.com/stable/ubuntu/jammy.noarmor.gpg

## Install instructions

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu eoan main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu eoan main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu groovy main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu groovy main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu hirsute main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu hirsute main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu impish main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu impish main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-impish.list >/dev/null
sudo apt-get update
```

### Suite: kinetic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-kinetic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-kinetic.list >/dev/null
sudo apt-get update
```

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-lunar.list >/dev/null
sudo apt-get update
```

### Suite: mantic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-mantic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-mantic.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu oracular main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu oracular main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu plucky main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu plucky main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-plucky.list >/dev/null
sudo apt-get update
```

### Suite: questing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu questing main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-questing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu questing main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-questing.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc | gpg --dearmor | sudo tee /usr/share/keyrings/tailscale-ubuntu-jammy.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/tailscale-ubuntu-jammy.asc -o /tmp/tailscale-ubuntu-jammy.asc
gpg --dearmor /tmp/tailscale-ubuntu-jammy.asc
sudo install -m 0644 /tmp/tailscale-ubuntu-jammy.gpg /usr/share/keyrings/tailscale-ubuntu-jammy.gpg
echo "deb [signed-by=/usr/share/keyrings/tailscale-ubuntu-jammy.gpg] https://pkgs.tailscale.com/stable/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/tailscale-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (45)</summary>

<div class="packages-nav">
<a href="#packages-T">T</a>
</div>


### <a id="packages-T"></a>T

- **tailscale**
  - Latest version: 1.92.5
  - Architectures: amd64, arm64, armhf, i386, mips, mips64, mips64el, mips64le, mipsel, riscv64
  - Suite: bionic
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
  - Suite: eoan
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
  - Suite: focal
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
  - Suite: groovy
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
  - Suite: hirsute
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
  - Suite: impish
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
  - Suite: kinetic
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
  - Suite: lunar
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
  - Suite: mantic
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
  - Suite: noble
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
  - Suite: oracular
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
  - Suite: plucky
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
  - Suite: questing
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
  - Suite: xenial
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
  - Suite: jammy
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
  - Suite: bionic
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
  - Suite: eoan
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
  - Suite: focal
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
  - Suite: groovy
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
  - Suite: hirsute
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
  - Suite: impish
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
  - Suite: kinetic
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
  - Suite: lunar
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
  - Suite: mantic
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
  - Suite: noble
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
  - Suite: oracular
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
  - Suite: plucky
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
  - Suite: questing
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
  - Suite: xenial
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
  - Suite: jammy
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
  - Suite: bionic
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
  - Suite: eoan
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
  - Suite: focal
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
  - Suite: groovy
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
  - Suite: hirsute
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
  - Suite: impish
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
  - Suite: kinetic
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
  - Suite: lunar
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
  - Suite: mantic
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
  - Suite: noble
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
  - Suite: oracular
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
  - Suite: plucky
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
  - Suite: questing
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
  - Suite: xenial
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
  - Suite: jammy
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
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
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
