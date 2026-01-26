# Docker - Ubuntu - stable

## Repository
- Repository ID: `docker-ubuntu-eoan-stable`
- Base URL: `https://download.docker.com/linux/ubuntu`
- Host: `download.docker.com`

## Upstream documentation
- Documentation URL: https://docs.docker.com/engine/install/ubuntu
- Key documentation URL: https://docs.docker.com/engine/install/ubuntu

## Suites
- Suite: `artful`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.10
- Suite: `bionic`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `cosmic`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.04
- Suite: `impish`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.10
- Suite: `jammy`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04
- Suite: `kinetic`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.10
- Suite: `lunar`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.04
- Suite: `mantic`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.10
- Suite: `noble`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `oracular`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.10
- Suite: `plucky`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `questing`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.10
- Suite: `trusty`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
- Suite: `xenial`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.10
- Suite: `zesty`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `docker-gpg-8d81803c0ebfcd88`
- Expected fingerprints:
  - 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
- Key source URL: https://download.docker.com/linux/ubuntu/gpg

## Install instructions

### Suite: artful

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu artful stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-artful.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu artful stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-artful.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-bionic.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu cosmic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu cosmic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu disco stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu disco stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu eoan stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu eoan stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu groovy stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu groovy stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu hirsute stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu hirsute stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu impish stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu impish stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-impish.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu jammy stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu jammy stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-jammy.list >/dev/null
sudo apt-get update
```

### Suite: kinetic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu kinetic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-kinetic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu kinetic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-kinetic.list >/dev/null
sudo apt-get update
```

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu lunar stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu lunar stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-lunar.list >/dev/null
sudo apt-get update
```

### Suite: mantic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu mantic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-mantic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu mantic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-mantic.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu oracular stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu oracular stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu plucky stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu plucky stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-plucky.list >/dev/null
sudo apt-get update
```

### Suite: questing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu questing stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-questing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu questing stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-questing.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu trusty stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu trusty stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu xenial stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu xenial stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu yakkety stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu yakkety stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu zesty stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu zesty stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-eoan-stable-zesty.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (110)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **cagent**
  - Latest version: 1.9.7-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf
  - Suite: jammy
  - Components: stable
  - Description: cagent is a powerful multi-agent AI runtime that enables you to
  - Homepage: https://github.com/docker/cagent
  - Install: `sudo apt-get install cagent`
  - Install (apt): `sudo apt install cagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **cagent**
  - Latest version: 1.9.7-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf
  - Suite: noble
  - Components: stable
  - Description: cagent is a powerful multi-agent AI runtime that enables you to
  - Homepage: https://github.com/docker/cagent
  - Install: `sudo apt-get install cagent`
  - Install (apt): `sudo apt install cagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **cagent**
  - Latest version: 1.9.7-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf
  - Suite: plucky
  - Components: stable
  - Description: cagent is a powerful multi-agent AI runtime that enables you to
  - Homepage: https://github.com/docker/cagent
  - Install: `sudo apt-get install cagent`
  - Install (apt): `sudo apt install cagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **cagent**
  - Latest version: 1.9.7-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf
  - Suite: questing
  - Components: stable
  - Description: cagent is a powerful multi-agent AI runtime that enables you to
  - Homepage: https://github.com/docker/cagent
  - Install: `sudo apt-get install cagent`
  - Install (apt): `sudo apt install cagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **containerd.io**
  - Latest version: 1.6.21-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libseccomp2 (>= 2.4.0), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.2.6-3
  - Architectures: amd64, arm64, armhf
  - Suite: cosmic
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libseccomp2 (>= 2.3.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.2.13-1
  - Architectures: amd64, arm64, armhf
  - Suite: disco
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libseccomp2 (>= 2.3.0), libseccomp2 (>= 2.4.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.2.13-2
  - Architectures: amd64, arm64, armhf
  - Suite: eoan
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libseccomp2 (>= 2.4.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.7.27-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libseccomp2 (>= 2.4.1), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.4.9-1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: groovy
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.32), libseccomp2 (>= 2.4.1)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.5.11-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: hirsute
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.33), libseccomp2 (>= 2.4.1)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.6.6-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: impish
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.4.1), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.4.1), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.6.21-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.6.28-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.7.19-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.7.27-1
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.2.6-3
  - Architectures: amd64, armhf
  - Suite: trusty
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.4.6-1
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: xenial
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libseccomp2 (>= 2.4.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>


### <a id="packages-D"></a>D

- **docker-buildx-plugin**
  - Latest version: 0.10.5-1~ubuntu.18.04~bionic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.23.0-1~ubuntu.20.04~focal
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.11.2-1~ubuntu.22.10~kinetic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.12.1-1~ubuntu.23.04~lunar
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.16.1-1~ubuntu.23.10~mantic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.27.0-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Docker Buildx plugin extends build capabilities with BuildKit.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-ce**
  - Latest version: 18.06.3~ce~3-0~ubuntu
  - Architectures: amd64, armhf, ppc64el, s390x
  - Suite: artful
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io, containerd.io (>= 1.2.2-3), containerd.io (>= 1.4.1), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:19.03.6~3-0~ubuntu-cosmic
  - Architectures: amd64, arm64, armhf
  - Suite: cosmic
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io, containerd.io (>= 1.2.2-3), docker-ce-cli, iptables, libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, libltdl7, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:19.03.6~3-0~ubuntu-disco
  - Architectures: amd64, arm64, armhf
  - Suite: disco
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.2.2-3), docker-ce-cli, iptables, libc6 (>= 2.17), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, libltdl7, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:19.03.12~3-0~ubuntu-eoan
  - Architectures: amd64, arm64, armhf
  - Suite: eoan
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.2.2-3), docker-ce-cli, iptables, libc6 (>= 2.17), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, libltdl7, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:28.1.1-1~ubuntu.20.04~focal
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.2.2-3), containerd.io (>= 1.4.1), containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:20.10.8~3-0~ubuntu-groovy
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: groovy
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), docker-ce-cli, iptables, libc6 (>= 2.32), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:20.10.14~3-0~ubuntu-hirsute
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: hirsute
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), docker-ce-cli, iptables, libc6 (>= 2.32), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: impish
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libnftables1 (>= 1.0.2), libseccomp2 (>= 2.3.0), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:24.0.5-1~ubuntu.22.10~kinetic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:25.0.2-1~ubuntu.23.04~lunar
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:27.1.1-1~ubuntu.23.10~mantic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libnftables1 (>= 1.0.2), libseccomp2 (>= 2.3.0), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:28.4.0-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libseccomp2 (>= 2.3.0), libsystemd0
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libnftables1 (>= 1.0.2), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libnftables1 (>= 1.0.2), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, pigz, procps, xz-utils
  - suggests: cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 18.06.3~ce~3-0~ubuntu
  - Architectures: amd64, armhf
  - Suite: trusty
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.13~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libdevmapper1.02.1 (>= 2:1.02.63), libltdl7 (>= 2.4.2), libsystemd-journal0 (>= 201), sysv-rc (>= 2.88dsf-24) | file-rc (>= 0.8.16)
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:20.10.7~3-0~ubuntu-xenial
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: xenial
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io, containerd.io (>= 1.2.2-3), containerd.io (>= 1.4.1), docker-ce-cli, init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libsystemd0, lsb-base (>= 4.1+Debian11ubuntu7)
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 17.06.0~ce-0~ubuntu
  - Architectures: amd64, armhf, s390x
  - Suite: yakkety
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.1.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 17.12.0~ce-0~ubuntu
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: zesty
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>

- **docker-ce-cli**
  - Latest version: 5:19.03.6~3-0~ubuntu-cosmic
  - Architectures: amd64, arm64, armhf
  - Suite: cosmic
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:19.03.6~3-0~ubuntu-disco
  - Architectures: amd64, arm64, armhf
  - Suite: disco
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4)
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:19.03.12~3-0~ubuntu-eoan
  - Architectures: amd64, arm64, armhf
  - Suite: eoan
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4)
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:28.1.1-1~ubuntu.20.04~focal
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:20.10.8~3-0~ubuntu-groovy
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: groovy
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.32)
  - recommends: docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:20.10.14~3-0~ubuntu-hirsute
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: hirsute
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.32)
  - recommends: docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: impish
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:24.0.5-1~ubuntu.22.10~kinetic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:25.0.2-1~ubuntu.23.04~lunar
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:27.1.1-1~ubuntu.23.10~mantic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:28.4.0-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:20.10.7~3-0~ubuntu-xenial
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: xenial
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - recommends: docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, docker-ce, libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:28.1.1-1~ubuntu.20.04~focal
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, docker-ce, libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:20.10.8~3-0~ubuntu-groovy
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: groovy
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: docker-ce, libc6 (>= 2.32)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:20.10.14~3-0~ubuntu-hirsute
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: hirsute
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.32)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: impish
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:24.0.5-1~ubuntu.22.10~kinetic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:25.0.2-1~ubuntu.23.04~lunar
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:27.1.1-1~ubuntu.23.10~mantic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:28.4.0-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:20.10.7~3-0~ubuntu-xenial
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: xenial
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: docker-ce, libc6 (>= 2.17), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-compose-plugin**
  - Latest version: 2.18.1-1~ubuntu.18.04~bionic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bionic
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 2.35.1-1~ubuntu.20.04~focal
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: focal
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin

  </details>

- **docker-compose-plugin**
  - Latest version: 2.3.3~ubuntu-hirsute
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: hirsute
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 2.6.0~ubuntu-impish
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: impish
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin, docker-buildx-plugin (>= 0.17.0)

  </details>

- **docker-compose-plugin**
  - Latest version: 2.20.2-1~ubuntu.22.10~kinetic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: kinetic
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 2.24.5-1~ubuntu.23.04~lunar
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: lunar
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 2.29.1-1~ubuntu.23.10~mantic
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: mantic
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin, docker-buildx-plugin (>= 0.17.0)

  </details>

- **docker-compose-plugin**
  - Latest version: 2.39.2-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin

  </details>

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin, docker-buildx-plugin (>= 0.17.0)

  </details>

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - recommends: docker-buildx-plugin (>= 0.17.0)

  </details>

- **docker-model-plugin**
  - Latest version: 1.0.9-1~ubuntu.22.04~jammy
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: jammy
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-model-plugin**
  - Latest version: 1.0.9-1~ubuntu.24.04~noble
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: noble
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-model-plugin**
  - Latest version: 0.1.39-1~ubuntu.24.10~oracular
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: oracular
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-model-plugin**
  - Latest version: 1.0.9-1~ubuntu.25.04~plucky
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: plucky
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-model-plugin**
  - Latest version: 1.0.9-1~ubuntu.25.10~questing
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: questing
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-focal
  - Architectures: amd64
  - Suite: focal
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.8.0~ubuntu-groovy
  - Architectures: amd64
  - Suite: groovy
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.17.0~ubuntu-hirsute
  - Architectures: amd64
  - Suite: hirsute
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.17.0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-kinetic
  - Architectures: amd64
  - Suite: kinetic
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-lunar
  - Architectures: amd64
  - Suite: lunar
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.8.0~ubuntu-xenial
  - Architectures: amd64
  - Suite: xenial
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
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
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
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
- Repo notes: Docker APT repository for Ubuntu
- Repo tags: docker, apt, ubuntu
