# Oracle VirtualBox

## Repository
- Repository ID: `virtualbox`
- Base URL: `https://download.virtualbox.org/virtualbox/debian`
- Host: `download.virtualbox.org`

## Upstream documentation
- Documentation URL: https://www.virtualbox.org/wiki/Linux_Downloads
- Key documentation URL: https://www.virtualbox.org/wiki/Linux_Downloads

## Suites
- Suite: `artful`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.10
- Suite: `bionic`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `bookworm`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bullseye`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `cosmic`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.04
- Suite: `jessie`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-8
- Suite: `noble`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `oracular`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.10
- Suite: `plucky`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `stretch`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `trusty`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
- Suite: `wheezy`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: debian-7
- Suite: `xenial`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.10
- Suite: `zesty`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.04
- Suite: `jammy`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Ubuntu, Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `oracle-vbox2016`
- Expected fingerprints:
  - B9F8D658297AF3EFC18D5CDFA2F683C52980AECF
- Key source URL: https://www.virtualbox.org/download/oracle_vbox_2016.asc

## Install instructions

### Suite: artful

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian artful contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-artful.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian artful contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-artful.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bionic contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bionic contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bionic.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bookworm contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bookworm contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bullseye contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian bullseye contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian buster contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian buster contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-buster.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian cosmic contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian cosmic contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian disco contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian disco contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian eoan contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian eoan contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian focal contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian focal contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian groovy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian groovy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian hirsute contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian hirsute contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian jessie contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian jessie contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-jessie.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian noble contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian noble contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian oracular contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian oracular contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian plucky contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian plucky contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-plucky.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian stretch contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian stretch contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian trixie contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian trixie contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-trixie.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian trusty contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian trusty contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-trusty.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian wheezy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian wheezy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-wheezy.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian xenial contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian xenial contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian yakkety contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian yakkety contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian zesty contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian zesty contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-zesty.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian jammy contrib" | sudo tee /etc/apt/sources.list.d/virtualbox-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (82)</summary>

<div class="packages-nav">
<a href="#packages-V">V</a>
</div>


### <a id="packages-V"></a>V

- **virtualbox-4.1**
  - Latest version: 4.1.44-104071~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.1`
  - Install (apt): `sudo apt install virtualbox-4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.3.6-6~), libc6 (>= 2.6), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-4.2**
  - Latest version: 4.2.38-110681~Ubuntu~raring
  - Architectures: amd64, i386
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.2`
  - Install (apt): `sudo apt install virtualbox-4.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-4.2**
  - Latest version: 4.2.38-110681~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.2`
  - Install (apt): `sudo apt install virtualbox-4.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.3.6-6~), libc6 (>= 2.6), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-4.3**
  - Latest version: 4.3.40-110317~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.3`
  - Install (apt): `sudo apt install virtualbox-4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.7), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-4.3**
  - Latest version: 4.3.40-110317~Ubuntu~raring
  - Architectures: amd64, i386
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.3`
  - Install (apt): `sudo apt install virtualbox-4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-4.3**
  - Latest version: 4.3.40-110317~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-4.3`
  - Install (apt): `sudo apt install virtualbox-4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.7), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.0**
  - Latest version: 5.0.40-115130~Debian~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.0`
  - Install (apt): `sudo apt install virtualbox-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.90), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.9), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.0**
  - Latest version: 5.0.40-115130~Debian~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.0`
  - Install (apt): `sudo apt install virtualbox-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libpython2.7 (>= 2.7), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.0**
  - Latest version: 5.0.40-115130~Ubuntu~trusty
  - Architectures: amd64, i386
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.0`
  - Install (apt): `sudo apt install virtualbox-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.0**
  - Latest version: 5.0.40-115130~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.0`
  - Install (apt): `sudo apt install virtualbox-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.7), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.0**
  - Latest version: 5.0.40-115130~Ubuntu~xenial
  - Architectures: amd64, i386
  - Suite: xenial
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.0`
  - Install (apt): `sudo apt install virtualbox-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libpython2.7 (>= 2.7), libqt4-opengl (>= 4:4.7.2), libqtcore4 (>= 4:4.8.0), libqtgui4 (>= 4:4.8.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, dkms, gcc, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers, make, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~zesty
  - Architectures: amd64, i386
  - Suite: artful
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.3.0) | libqt5gui5-gles (>= 5.3.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.3.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Debian~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.90), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libqt5core5a (>= 5.3.0), libqt5gui5 (>= 5.3.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.2.0), libqt5x11extras5 (>= 5.1.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.9), libvpx1 (>= 1.0.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Debian~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.3.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~trusty
  - Architectures: amd64, i386
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.7), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~xenial
  - Architectures: amd64, i386
  - Suite: xenial
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng12-0 (>= 1.2.13-4), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.3.0) | libqt5gui5-gles (>= 5.3.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.2.0), libqt5x11extras5 (>= 5.1.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.6.0~beta), libqt5gui5 (>= 5.3.0) | libqt5gui5-gles (>= 5.3.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.6.0~beta), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.1**
  - Latest version: 5.1.38-122592~Ubuntu~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.1`
  - Install (apt): `sudo apt install virtualbox-5.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.3.0) | libqt5gui5-gles (>= 5.3.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.22-126460~Ubuntu~zesty
  - Architectures: amd64, i386
  - Suite: artful
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Ubuntu~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.34-133893~Ubuntu~bionic
  - Architectures: amd64
  - Suite: buster
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Ubuntu~bionic
  - Architectures: amd64
  - Suite: cosmic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Ubuntu~bionic
  - Architectures: amd64
  - Suite: disco
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Debian~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.90), libfontconfig1 (>= 2.11), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.9), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Debian~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Ubuntu~trusty
  - Architectures: amd64, i386
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.0.3), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.7.1-0ubuntu2), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.14-123301~Debian~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.7), libcurl3-gnutls (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.44-139111~Ubuntu~xenial
  - Architectures: amd64, i386
  - Suite: xenial
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libfontconfig1 (>= 2.11.94), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.14-123301~Ubuntu~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.6.0~beta), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.6.0~beta), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-5.2**
  - Latest version: 5.2.22-126460~Ubuntu~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-5.2`
  - Install (apt): `sudo apt install virtualbox-5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.2), libgl1-mesa-glx | libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2) | libqt5opengl5-gles (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxinerama1, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Debian~buster
  - Architectures: amd64
  - Suite: buster
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.11.0~rc1), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.11.0~rc1), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~bionic
  - Architectures: amd64
  - Suite: cosmic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~bionic
  - Architectures: amd64
  - Suite: disco
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~eoan
  - Architectures: amd64
  - Suite: focal
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Debian~jessie
  - Architectures: amd64
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.90), libfontconfig1 (>= 2.11), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.9), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Debian~stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1-mesa-glx | libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.6.6-7~), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~trusty
  - Architectures: amd64
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.0.3), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.7.1-0ubuntu2), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.0**
  - Latest version: 6.0.24-139119~Ubuntu~xenial
  - Architectures: amd64
  - Suite: xenial
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.0`
  - Install (apt): `sudo apt install virtualbox-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libfontconfig1 (>= 2.11.94), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxmu6, libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Ubuntu~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Debian~bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.15), libssl3 (>= 3.0.0), libstdc++6 (>= 11), libvpx7 (>= 1.12.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Debian~bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Debian~buster
  - Architectures: amd64
  - Suite: buster
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.11.0~rc1), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.11.0~rc1), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Ubuntu~bionic
  - Architectures: amd64
  - Suite: cosmic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Ubuntu~bionic
  - Architectures: amd64
  - Suite: disco
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx5 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.40-154048~Ubuntu~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Ubuntu~focal
  - Architectures: amd64
  - Suite: focal
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.40-154048~Ubuntu~eoan
  - Architectures: amd64
  - Suite: groovy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.40-154048~Ubuntu~eoan
  - Architectures: amd64
  - Suite: hirsute
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5gui5 (>= 5.4.0) | libqt5gui5-gles (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libvpx6 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.18-142142~Debian~jessie
  - Architectures: amd64
  - Suite: jessie
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.90), libfontconfig1 (>= 2.11), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.9), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Debian~stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1-mesa-glx | libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.7.0), libqt5gui5 (>= 5.4.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libvpx4 (>= 1.6.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.18-142142~Ubuntu~trusty
  - Architectures: amd64
  - Suite: trusty
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.20), libfontconfig1 (>= 2.9.0), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:4.1.1), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.0.3), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.6), libvpx1 (>= 1.0.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxrender1, libxt6, psmisc, python (<< 2.8), python (>= 2.7), python:any (>= 2.7.1-0ubuntu2), zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.40-154048~Ubuntu~xenial
  - Architectures: amd64
  - Suite: xenial
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.15), libcurl3 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libfontconfig1 (>= 2.11.94), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1-mesa-glx | libgl1, libglib2.0-0 (>= 2.12.0), libice6 (>= 1:1.0.0), libopus0 (>= 1.1), libpng12-0 (>= 1.2.13-4), libsdl1.2debian (>= 1.2.11), libsm6, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libvpx3 (>= 1.5.0), libx11-6, libx11-xcb1, libxcb1 (>= 1.8), libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxrender1, libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libgl1, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-6.1**
  - Latest version: 6.1.50-161033~Ubuntu~jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-6.1`
  - Install (apt): `sudo apt install virtualbox-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libopus0 (>= 1.1), libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libsdl1.2debian (>= 1.2.11), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11), libvpx7 (>= 1.10.0), libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.18-162988~Ubuntu~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.9.0~beta), libqt5help5 (>= 5.9.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libvpx5 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Debian~bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5dbus5 (>= 5.14.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5help5 (>= 5.15.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libvpx7 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Debian~bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5dbus5 (>= 5.14.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5help5 (>= 5.15.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libvpx6 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.20-163906~Debian~buster
  - Architectures: amd64
  - Suite: buster
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.11.0~rc1), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.11.0~rc1), libqt5help5 (>= 5.9.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.11.0~rc1), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libvpx5 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.18-162988~Ubuntu~bionic
  - Architectures: amd64
  - Suite: cosmic
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.9.0~beta), libqt5help5 (>= 5.9.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libvpx5 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.18-162988~Ubuntu~bionic
  - Architectures: amd64
  - Suite: disco
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc1 (>= 1:3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.9.0~beta), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.9.0~beta), libqt5help5 (>= 5.9.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libvpx5 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Ubuntu~focal
  - Architectures: amd64
  - Suite: focal
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.12.2), libqt5dbus5 (>= 5.0.2), libqt5gui5 (>= 5.11.0~rc1) | libqt5gui5-gles (>= 5.11.0~rc1), libqt5help5 (>= 5.9.0), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.12.2), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libvpx6 (>= 1.6.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Ubuntu~noble
  - Architectures: amd64
  - Suite: noble
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), libpng16-16t64 (>= 1.6.2), libqt5core5t64 (>= 5.15.1), libqt5dbus5t64 (>= 5.14.1), libqt5gui5t64 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5help5 (>= 5.15.1), libqt5opengl5t64 (>= 5.0.2), libqt5printsupport5t64 (>= 5.0.2), libqt5widgets5t64 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libqt5xml5t64 (>= 5.0.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Ubuntu~oracular
  - Architectures: amd64
  - Suite: oracular
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), libpng16-16t64 (>= 1.6.2), libqt5core5t64 (>= 5.15.1), libqt5dbus5t64 (>= 5.14.1), libqt5gui5t64 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5help5 (>= 5.15.1), libqt5opengl5t64 (>= 5.0.2), libqt5printsupport5t64 (>= 5.0.2), libqt5widgets5t64 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libqt5xml5t64 (>= 5.0.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.0**
  - Latest version: 7.0.26-168464~Ubuntu~jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: contrib
  - Description: Oracle VM VirtualBox
  - Install: `sudo apt-get install virtualbox-7.0`
  - Install (apt): `sudo apt install virtualbox-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcurl4 (>= 7.16.2), libdevmapper1.02.1 (>= 2:1.02.97), libgcc-s1 (>= 3.0), libgl1, libpng16-16 (>= 1.6.2-1), libqt5core5a (>= 5.15.1), libqt5dbus5 (>= 5.14.1), libqt5gui5 (>= 5.14.1) | libqt5gui5-gles (>= 5.14.1), libqt5help5 (>= 5.15.1), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5widgets5 (>= 5.15.1), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libvpx7 (>= 1.10.0), libvulkan1, libx11-6, libxcb1, libxcursor1 (>> 1.1.2), libxext6, libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Debian~bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.9.10), libgtk2.0-0 (>= 2.24.0), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libstdc++6 (>= 12), libvpx7 (>= 1.12.0), libvulkan1, libx11-6, libx11-xcb1 (>= 2:1.8.4), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Debian~bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.30), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.9.10), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libstdc++6 (>= 9), libvpx6 (>= 1.6.0), libvulkan1, libx11-6, libx11-xcb1 (>= 2:1.7.2), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.12-169651~Ubuntu~focal
  - Architectures: amd64
  - Suite: focal
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.29), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 3.4), libgdk-pixbuf2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.9.10), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libstdc++6 (>= 9), libvpx6 (>= 1.6.0), libvulkan1, libx11-6, libx11-xcb1 (>= 2:1.6.9), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Ubuntu~noble
  - Architectures: amd64
  - Suite: noble
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.2), libqt6core6t64 (>= 6.4.0), libqt6dbus6t64 (>= 6.1.2), libqt6gui6t64 (>= 6.4.0), libqt6help6 (>= 6.2.2), libqt6printsupport6t64 (>= 6.1.2), libqt6statemachine6 (>= 6.2.1), libqt6widgets6t64 (>= 6.3.0), libqt6xml6t64 (>= 6.1.2), libstdc++6 (>= 13.1), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.12-169651~Ubuntu~oracular
  - Architectures: amd64
  - Suite: oracular
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.2), libqt6core6t64 (>= 6.6.1), libqt6dbus6 (>= 6.1.2), libqt6gui6 (>= 6.4.0), libqt6help6 (>= 6.6.0), libqt6printsupport6 (>= 6.1.2), libqt6statemachine6 (>= 6.6.1), libqt6widgets6 (>= 6.3.0), libqt6xml6 (>= 6.6.0), libstdc++6 (>= 14), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Ubuntu~plucky
  - Architectures: amd64
  - Suite: plucky
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.46), libqt6core6t64 (>= 6.8.2), libqt6dbus6 (>= 6.1.2), libqt6gui6 (>= 6.4.0), libqt6help6 (>= 6.6.0), libqt6printsupport6 (>= 6.1.2), libqt6statemachine6 (>= 6.6.1), libqt6widgets6 (>= 6.8.2), libqt6xml6 (>= 6.6.0), libstdc++6 (>= 14), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Debian~trixie
  - Architectures: amd64
  - Suite: trixie
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.46), libqt6core6t64 (>= 6.8.2), libqt6dbus6 (>= 6.1.2), libqt6gui6 (>= 6.4.0), libqt6help6 (>= 6.6.0), libqt6printsupport6 (>= 6.1.2), libqt6statemachine6 (>= 6.6.1), libqt6widgets6 (>= 6.8.2), libqt6xml6 (>= 6.6.0), libstdc++6 (>= 14), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.1**
  - Latest version: 7.1.14-170994~Ubuntu~jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.1`
  - Install (apt): `sudo apt install virtualbox-7.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.9.10), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libstdc++6 (>= 12), libvpx7 (>= 1.10.0), libvulkan1, libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Debian~bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.21.5), libgtk2.0-0 (>= 2.24.0), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libvpx7 (>= 1.12.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.8.4), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Debian~bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.30), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.21.5), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libvpx6 (>= 1.6.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.7.2), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Ubuntu~noble
  - Architectures: amd64
  - Suite: noble
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4t64 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0t64 (>= 2.34.0), libgtk-3-0t64 (>= 3.21.5), libgtk2.0-0t64 (>= 2.24.0), liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.8.7), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.2-170484~Ubuntu~oracular
  - Architectures: amd64
  - Suite: oracular
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4t64 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0t64 (>= 2.34.0), libgtk-3-0t64 (>= 3.21.5), libgtk2.0-0t64 (>= 2.24.0), liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.8.7), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Ubuntu~plucky
  - Architectures: amd64
  - Suite: plucky
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.46), libqt6core6t64 (>= 6.8.2), libqt6dbus6 (>= 6.1.2), libqt6gui6 (>= 6.6.0), libqt6help6 (>= 6.6.0), libqt6printsupport6 (>= 6.1.2), libqt6statemachine6 (>= 6.6.1), libqt6widgets6 (>= 6.8.2), libqt6xml6 (>= 6.6.0), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Debian~trixie
  - Architectures: amd64
  - Suite: trixie
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libgl1, liblzma5 (>= 5.1.1alpha+20120614), libpng16-16t64 (>= 1.6.46), libqt6core6t64 (>= 6.8.2), libqt6dbus6 (>= 6.1.2), libqt6gui6 (>= 6.6.0), libqt6help6 (>= 6.6.0), libqt6printsupport6 (>= 6.1.2), libqt6statemachine6 (>= 6.6.1), libqt6widgets6 (>= 6.8.2), libqt6xml6 (>= 6.6.0), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libvpx9 (>= 1.12.0), libvulkan1, libx11-6, libxcb1, libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.1.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.4-170995~Ubuntu~jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: contrib
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.21.5), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libvpx7 (>= 1.10.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

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
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Official VirtualBox package repository
- Repo tags: virtualization
- Key notes: Current VirtualBox APT signing key
- Key tags: virtualization
