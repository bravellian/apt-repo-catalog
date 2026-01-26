# Puppet 7 (Ubuntu 22.04)

## Repository
- Repository ID: `puppet7-ubuntu-jammy`
- Base URL: `https://apt.puppet.com`
- Host: `apt.puppet.com`

## Upstream documentation
- Documentation URL: https://apt.puppet.com/
- Key documentation URL: https://apt.puppet.com/

## Suites
- Suite: `bookworm`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bionic`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `bullseye`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `cosmic`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.10
- Suite: `focal`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `jessie`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-8
- Suite: `noble`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `stretch`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trusty`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
- Suite: `wheezy`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: debian-7
- Suite: `xenial`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.10
- Suite: `jammy`
  - Components: puppet7
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Debian, Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `puppet`
- Expected fingerprints:
  - D6811ED3ADEEB8441AF5AA8F4528B6CD9E61EF26
- Key source URL: https://apt.puppet.com/DEB-GPG-KEY-future

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bookworm puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bookworm puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bionic puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bionic puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bullseye puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com bullseye puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com buster puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com buster puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-buster.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com cosmic puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com cosmic puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com focal puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com focal puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com jessie puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com jessie puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-jessie.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com noble puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com noble puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com stretch puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com stretch puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com trusty puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com trusty puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com wheezy puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com wheezy puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-wheezy.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com xenial puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com xenial puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com yakkety puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com yakkety puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc | gpg --dearmor | sudo tee /usr/share/keyrings/puppet.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com jammy puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/puppet.asc -o /tmp/puppet.asc
gpg --dearmor /tmp/puppet.asc
sudo install -m 0644 /tmp/puppet.gpg /usr/share/keyrings/puppet.gpg
echo "deb [signed-by=/usr/share/keyrings/puppet.gpg] https://apt.puppet.com jammy puppet7" | sudo tee /etc/apt/sources.list.d/puppet7-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install puppet-agent
- Repo tags: config-management, devtools
- Key notes: Non-expiring key published by Puppet
- Key tags: config-management, devtools
