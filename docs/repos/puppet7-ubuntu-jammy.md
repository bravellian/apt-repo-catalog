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

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (82)</summary>

<div class="packages-nav">
<a href="#packages-P">P</a>
</div>


### <a id="packages-P"></a>P

- **pdk**
  - Latest version: 3.4.0.1-1bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1focal
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 2.1.0.0-1jessie
  - Architectures: amd64
  - Suite: jessie
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 2.5.0.0-1stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 2.5.0.0-1xenial
  - Architectures: amd64
  - Suite: xenial
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk**
  - Latest version: 3.4.0.1-1jammy
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: puppet7
  - Description: Puppet Development Kit
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk`
  - Install (apt): `sudo apt install pdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **pdk-dbgsym**
  - Latest version: 3.4.0.1-1bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: puppet7
  - Description: debug symbols for pdk
  - Install: `sudo apt-get install pdk-dbgsym`
  - Install (apt): `sudo apt install pdk-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: pdk (= 3.2.0.0-1bookworm), pdk (= 3.2.0.1-1bookworm), pdk (= 3.3.0.0-1bookworm), pdk (= 3.4.0.1-1bookworm)

  </details>

- **pdk-dbgsym**
  - Latest version: 3.4.0.1-1bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: puppet7
  - Description: debug symbols for pdk
  - Install: `sudo apt-get install pdk-dbgsym`
  - Install (apt): `sudo apt install pdk-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: pdk (= 2.2.0.0-1bullseye), pdk (= 2.3.0.0-1bullseye), pdk (= 2.4.0.1-1bullseye), pdk (= 2.5.0.0-1bullseye), pdk (= 2.6.0.0-1bullseye), pdk (= 2.6.1.0-1bullseye), pdk (= 2.7.0.0-1bullseye), pdk (= 2.7.1.0-1bullseye), pdk (= 3.0.0.0-1bullseye), pdk (= 3.0.1.3-1bullseye), pdk (= 3.2.0.0-1bullseye), pdk (= 3.2.0.1-1bullseye), pdk (= 3.3.0.0-1bullseye), pdk (= 3.4.0.1-1bullseye)

  </details>

- **pdk-dbgsym**
  - Latest version: 3.4.0.1-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: debug symbols for pdk
  - Install: `sudo apt-get install pdk-dbgsym`
  - Install (apt): `sudo apt install pdk-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: pdk (= 2.0.0.0-1buster), pdk (= 2.1.0.0-1buster), pdk (= 2.1.1.0-1buster), pdk (= 2.2.0.0-1buster), pdk (= 2.3.0.0-1buster), pdk (= 2.4.0.1-1buster), pdk (= 2.5.0.0-1buster), pdk (= 2.6.0.0-1buster), pdk (= 2.6.1.0-1buster), pdk (= 2.7.0.0-1buster), pdk (= 2.7.1.0-1buster), pdk (= 3.0.0.0-1buster), pdk (= 3.0.1.3-1buster), pdk (= 3.2.0.0-1buster), pdk (= 3.2.0.1-1buster), pdk (= 3.3.0.0-1buster), pdk (= 3.4.0.1-1buster)

  </details>

- **pdk-dbgsym**
  - Latest version: 2.5.0.0-1stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: puppet7
  - Description: Debug symbols for pdk
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install pdk-dbgsym`
  - Install (apt): `sudo apt install pdk-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: extra
  - depends: pdk (= 2.0.0.0-1stretch), pdk (= 2.1.0.0-1stretch), pdk (= 2.1.1.0-1stretch), pdk (= 2.2.0.0-1stretch), pdk (= 2.3.0.0-1stretch), pdk (= 2.4.0.1-1stretch), pdk (= 2.5.0.0-1stretch)

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1focal
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.19.0-1stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.17.0-1xenial
  - Architectures: amd64, i386
  - Suite: xenial
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent**
  - Latest version: 7.34.0-1jammy
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: puppet7
  - Description: The Puppet Agent package contains all of the elements needed to run puppet, including ruby, facter, and hiera.
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent`
  - Install (apt): `sudo apt install puppet-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: admin
  - Priority: optional
  - depends: findutils, tar
  - conflicts: pe-r10k (<< 2.5.0.0)
  - breaks: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - replaces: hiera (<< 2.0.0), pe-agent, pe-augeas, pe-cloud-provisioner, pe-cloud-provisioner-libs, pe-hiera, pe-libldap, pe-libyaml, pe-openssl, pe-puppet, pe-puppet-enterprise-release (<< 4.0.0), pe-puppetserver-common (<< 4.0.0), pe-ruby, pe-ruby-augeas, pe-ruby-ldap, pe-ruby-mysql, pe-ruby-rgen, pe-ruby-selinux, pe-ruby-shadow, pe-ruby-stomp, pe-rubygem-deep-merge, pe-rubygem-net-ssh, pe-rubygems, puppet (<< 4.0.0), puppet-common (<< 4.0.0)
  - provides: hiera, puppet, puppet-common

  </details>

- **puppet-agent-dbgsym**
  - Latest version: 7.34.0-1bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: puppet7
  - Description: debug symbols for puppet-agent
  - Install: `sudo apt-get install puppet-agent-dbgsym`
  - Install (apt): `sudo apt install puppet-agent-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-agent (= 7.29.0-1bookworm), puppet-agent (= 7.29.1-1bookworm), puppet-agent (= 7.30.0-1bookworm), puppet-agent (= 7.31.0-1bookworm), puppet-agent (= 7.32.0-1bookworm), puppet-agent (= 7.32.1-1bookworm), puppet-agent (= 7.33.0-1bookworm), puppet-agent (= 7.34.0-1bookworm)

  </details>

- **puppet-agent-dbgsym**
  - Latest version: 7.34.0-1bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: puppet7
  - Description: debug symbols for puppet-agent
  - Install: `sudo apt-get install puppet-agent-dbgsym`
  - Install (apt): `sudo apt install puppet-agent-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-agent (= 7.10.0-1bullseye), puppet-agent (= 7.11.0-1bullseye), puppet-agent (= 7.12.0-1bullseye), puppet-agent (= 7.12.1-1bullseye), puppet-agent (= 7.13.1-1bullseye), puppet-agent (= 7.14.0-1bullseye), puppet-agent (= 7.15.0-1bullseye), puppet-agent (= 7.16.0-1bullseye), puppet-agent (= 7.17.0-1bullseye), puppet-agent (= 7.18.0-1bullseye), puppet-agent (= 7.19.0-1bullseye), puppet-agent (= 7.20.0-1bullseye), puppet-agent (= 7.21.0-1bullseye), puppet-agent (= 7.23.0-1bullseye), puppet-agent (= 7.24.0-1bullseye), puppet-agent (= 7.25.0-1bullseye), puppet-agent (= 7.26.0-1bullseye), puppet-agent (= 7.27.0-1bullseye), puppet-agent (= 7.28.0-1bullseye), puppet-agent (= 7.29.0-1bullseye), puppet-agent (= 7.29.1-1bullseye), puppet-agent (= 7.30.0-1bullseye), puppet-agent (= 7.31.0-1bullseye), puppet-agent (= 7.32.0-1bullseye), puppet-agent (= 7.32.1-1bullseye), puppet-agent (= 7.33.0-1bullseye), puppet-agent (= 7.34.0-1bullseye), puppet-agent (= 7.9.0-1bullseye)

  </details>

- **puppet-agent-dbgsym**
  - Latest version: 7.34.0-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: debug symbols for puppet-agent
  - Install: `sudo apt-get install puppet-agent-dbgsym`
  - Install (apt): `sudo apt install puppet-agent-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-agent (= 7.0.0-1buster), puppet-agent (= 7.1.0-1buster), puppet-agent (= 7.10.0-1buster), puppet-agent (= 7.11.0-1buster), puppet-agent (= 7.12.0-1buster), puppet-agent (= 7.12.1-1buster), puppet-agent (= 7.13.1-1buster), puppet-agent (= 7.14.0-1buster), puppet-agent (= 7.15.0-1buster), puppet-agent (= 7.16.0-1buster), puppet-agent (= 7.17.0-1buster), puppet-agent (= 7.18.0-1buster), puppet-agent (= 7.19.0-1buster), puppet-agent (= 7.20.0-1buster), puppet-agent (= 7.21.0-1buster), puppet-agent (= 7.23.0-1buster), puppet-agent (= 7.24.0-1buster), puppet-agent (= 7.25.0-1buster), puppet-agent (= 7.26.0-1buster), puppet-agent (= 7.27.0-1buster), puppet-agent (= 7.28.0-1buster), puppet-agent (= 7.29.0-1buster), puppet-agent (= 7.29.1-1buster), puppet-agent (= 7.3.0-1buster), puppet-agent (= 7.30.0-1buster), puppet-agent (= 7.31.0-1buster), puppet-agent (= 7.32.0-1buster), puppet-agent (= 7.32.1-1buster), puppet-agent (= 7.33.0-1buster), puppet-agent (= 7.34.0-1buster), puppet-agent (= 7.4.0-1buster), puppet-agent (= 7.4.1-1buster), puppet-agent (= 7.5.0-1buster), puppet-agent (= 7.6.1-1buster), puppet-agent (= 7.7.0-1buster), puppet-agent (= 7.8.0-1buster), puppet-agent (= 7.9.0-1buster)

  </details>

- **puppet-agent-dbgsym**
  - Latest version: 7.19.0-1stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: puppet7
  - Description: Debug symbols for puppet-agent
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-agent-dbgsym`
  - Install (apt): `sudo apt install puppet-agent-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: debug
  - Priority: extra
  - depends: puppet-agent (= 7.0.0-1stretch), puppet-agent (= 7.1.0-1stretch), puppet-agent (= 7.10.0-1stretch), puppet-agent (= 7.11.0-1stretch), puppet-agent (= 7.12.0-1stretch), puppet-agent (= 7.12.1-1stretch), puppet-agent (= 7.13.1-1stretch), puppet-agent (= 7.14.0-1stretch), puppet-agent (= 7.15.0-1stretch), puppet-agent (= 7.16.0-1stretch), puppet-agent (= 7.17.0-1stretch), puppet-agent (= 7.18.0-1stretch), puppet-agent (= 7.19.0-1stretch), puppet-agent (= 7.3.0-1stretch), puppet-agent (= 7.4.0-1stretch), puppet-agent (= 7.4.1-1stretch), puppet-agent (= 7.5.0-1stretch), puppet-agent (= 7.6.1-1stretch), puppet-agent (= 7.7.0-1stretch), puppet-agent (= 7.8.0-1stretch), puppet-agent (= 7.9.0-1stretch)

  </details>

- **puppet-bolt**
  - Latest version: 4.0.0-1bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 4.0.0-1bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 4.0.0-1bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 3.30.0-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 4.0.0-1focal
  - Architectures: amd64
  - Suite: focal
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 3.26.1-1stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 3.23.1-1xenial
  - Architectures: amd64, i386
  - Suite: xenial
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt**
  - Latest version: 4.0.0-1jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: puppet7
  - Description: Stand alone task runner
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt`
  - Install (apt): `sudo apt install puppet-bolt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: admin
  - Priority: optional

  </details>

- **puppet-bolt-dbgsym**
  - Latest version: 4.0.0-1bookworm
  - Architectures: amd64
  - Suite: bookworm
  - Components: puppet7
  - Description: debug symbols for puppet-bolt
  - Install: `sudo apt-get install puppet-bolt-dbgsym`
  - Install (apt): `sudo apt install puppet-bolt-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-bolt (= 4.0.0-1bookworm)

  </details>

- **puppet-bolt-dbgsym**
  - Latest version: 4.0.0-1bullseye
  - Architectures: amd64
  - Suite: bullseye
  - Components: puppet7
  - Description: debug symbols for puppet-bolt
  - Install: `sudo apt-get install puppet-bolt-dbgsym`
  - Install (apt): `sudo apt install puppet-bolt-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-bolt (= 3.19.0-1bullseye), puppet-bolt (= 3.20.0-1bullseye), puppet-bolt (= 3.21.0-1bullseye), puppet-bolt (= 3.22.0-1bullseye), puppet-bolt (= 3.22.1-1bullseye), puppet-bolt (= 3.23.0-1bullseye), puppet-bolt (= 3.23.1-1bullseye), puppet-bolt (= 3.24.0-1bullseye), puppet-bolt (= 3.25.0-1bullseye), puppet-bolt (= 3.26.1-1bullseye), puppet-bolt (= 3.26.2-1bullseye), puppet-bolt (= 3.27.0-1bullseye), puppet-bolt (= 3.27.1-1bullseye), puppet-bolt (= 3.27.2-1bullseye), puppet-bolt (= 3.27.4-1bullseye), puppet-bolt (= 3.28.0-1bullseye), puppet-bolt (= 3.29.0-1bullseye), puppet-bolt (= 3.30.0-1bullseye), puppet-bolt (= 4.0.0-1bullseye)

  </details>

- **puppet-bolt-dbgsym**
  - Latest version: 3.30.0-1buster
  - Architectures: amd64
  - Suite: buster
  - Components: puppet7
  - Description: debug symbols for puppet-bolt
  - Install: `sudo apt-get install puppet-bolt-dbgsym`
  - Install (apt): `sudo apt install puppet-bolt-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: optional
  - depends: puppet-bolt (= 3.1.0-1buster), puppet-bolt (= 3.10.0-1buster), puppet-bolt (= 3.11.0-1buster), puppet-bolt (= 3.12.0-1buster), puppet-bolt (= 3.13.0-1buster), puppet-bolt (= 3.14.1-1buster), puppet-bolt (= 3.15.0-1buster), puppet-bolt (= 3.16.0-1buster), puppet-bolt (= 3.16.1-1buster), puppet-bolt (= 3.17.0-1buster), puppet-bolt (= 3.18.0-1buster), puppet-bolt (= 3.19.0-1buster), puppet-bolt (= 3.20.0-1buster), puppet-bolt (= 3.21.0-1buster), puppet-bolt (= 3.22.0-1buster), puppet-bolt (= 3.22.1-1buster), puppet-bolt (= 3.23.0-1buster), puppet-bolt (= 3.23.1-1buster), puppet-bolt (= 3.24.0-1buster), puppet-bolt (= 3.25.0-1buster), puppet-bolt (= 3.26.1-1buster), puppet-bolt (= 3.26.2-1buster), puppet-bolt (= 3.27.0-1buster), puppet-bolt (= 3.27.1-1buster), puppet-bolt (= 3.27.2-1buster), puppet-bolt (= 3.27.4-1buster), puppet-bolt (= 3.28.0-1buster), puppet-bolt (= 3.29.0-1buster), puppet-bolt (= 3.3.0-1buster), puppet-bolt (= 3.30.0-1buster), puppet-bolt (= 3.4.0-1buster), puppet-bolt (= 3.5.0-1buster), puppet-bolt (= 3.6.0-1buster), puppet-bolt (= 3.6.1-1buster), puppet-bolt (= 3.7.0-1buster), puppet-bolt (= 3.7.1-1buster), puppet-bolt (= 3.8.0-1buster), puppet-bolt (= 3.8.1-1buster), puppet-bolt (= 3.9.0-1buster), puppet-bolt (= 3.9.1-1buster), puppet-bolt (= 3.9.2-1buster)

  </details>

- **puppet-bolt-dbgsym**
  - Latest version: 3.26.1-1stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: puppet7
  - Description: Debug symbols for puppet-bolt
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-bolt-dbgsym`
  - Install (apt): `sudo apt install puppet-bolt-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <info@puppet.com>
  - Section: debug
  - Priority: extra
  - depends: puppet-bolt (= 3.1.0-1stretch), puppet-bolt (= 3.10.0-1stretch), puppet-bolt (= 3.11.0-1stretch), puppet-bolt (= 3.12.0-1stretch), puppet-bolt (= 3.13.0-1stretch), puppet-bolt (= 3.14.1-1stretch), puppet-bolt (= 3.15.0-1stretch), puppet-bolt (= 3.16.0-1stretch), puppet-bolt (= 3.16.1-1stretch), puppet-bolt (= 3.17.0-1stretch), puppet-bolt (= 3.18.0-1stretch), puppet-bolt (= 3.19.0-1stretch), puppet-bolt (= 3.20.0-1stretch), puppet-bolt (= 3.21.0-1stretch), puppet-bolt (= 3.22.0-1stretch), puppet-bolt (= 3.22.1-1stretch), puppet-bolt (= 3.23.0-1stretch), puppet-bolt (= 3.23.1-1stretch), puppet-bolt (= 3.24.0-1stretch), puppet-bolt (= 3.25.0-1stretch), puppet-bolt (= 3.26.1-1stretch), puppet-bolt (= 3.3.0-1stretch), puppet-bolt (= 3.4.0-1stretch), puppet-bolt (= 3.5.0-1stretch), puppet-bolt (= 3.6.0-1stretch), puppet-bolt (= 3.6.1-1stretch), puppet-bolt (= 3.7.0-1stretch), puppet-bolt (= 3.7.1-1stretch), puppet-bolt (= 3.8.0-1stretch), puppet-bolt (= 3.8.1-1stretch), puppet-bolt (= 3.9.0-1stretch), puppet-bolt (= 3.9.1-1stretch), puppet-bolt (= 3.9.2-1stretch)

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34bookworm
  - Architectures: all
  - Suite: bookworm
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: System Environment/Base
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34bionic
  - Architectures: all
  - Suite: bionic
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34bullseye
  - Architectures: all
  - Suite: bullseye
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34buster
  - Architectures: all
  - Suite: buster
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34focal
  - Architectures: all
  - Suite: focal
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-24stretch
  - Architectures: all
  - Suite: stretch
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-23xenial
  - Architectures: all
  - Suite: xenial
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet-release**
  - Latest version: 1.0.0-34jammy
  - Architectures: all
  - Suite: jammy
  - Components: puppet7
  - Description: Release packages for the Puppet repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet-release`
  - Install (apt): `sudo apt install puppet-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet5-release, puppet6-release, puppet7-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21bookworm
  - Architectures: all
  - Suite: bookworm
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: System Environment/Base
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21bionic
  - Architectures: all
  - Suite: bionic
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21bullseye
  - Architectures: all
  - Suite: bullseye
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21buster
  - Architectures: all
  - Suite: buster
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21focal
  - Architectures: all
  - Suite: focal
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21noble
  - Architectures: all
  - Suite: noble
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppet.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: System Environment/Base
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-11stretch
  - Architectures: all
  - Suite: stretch
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-2xenial
  - Architectures: all
  - Suite: xenial
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release

  </details>

- **puppet7-release**
  - Latest version: 7.0.0-21jammy
  - Architectures: all
  - Suite: jammy
  - Components: puppet7
  - Description: Release packages for the Puppet 7 repository
  - Homepage: https://www.puppetlabs.com
  - Install: `sudo apt-get install puppet7-release`
  - Install (apt): `sudo apt install puppet7-release`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet, Inc. <release@puppet.com>
  - Section: admin
  - Priority: optional
  - conflicts: puppet-release, puppet5-release, puppet6-release
  - breaks: puppet5-release, puppet6-release
  - replaces: puppet5-release, puppet6-release

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1bookworm
  - Architectures: all
  - Suite: bookworm
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1bionic
  - Architectures: all
  - Suite: bionic
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1bullseye
  - Architectures: all
  - Suite: bullseye
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-11-jre-headless, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1buster
  - Architectures: all
  - Suite: buster
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-11-jre-headless, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1focal
  - Architectures: all
  - Suite: focal
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.3.1-1jessie
  - Architectures: all
  - Suite: jessie
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.11.1-1stretch
  - Architectures: all
  - Suite: stretch
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.11.1-1xenial
  - Architectures: all
  - Suite: xenial
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb**
  - Latest version: 7.20.1-1jammy
  - Architectures: all
  - Suite: jammy
  - Components: puppet7
  - Description: Puppet Labs puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb`
  - Install (apt): `sudo apt install puppetdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 5.99.0)

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1bookworm
  - Architectures: all
  - Suite: bookworm
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: optional
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1bionic
  - Architectures: all
  - Suite: bionic
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1bullseye
  - Architectures: all
  - Suite: bullseye
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1buster
  - Architectures: all
  - Suite: buster
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1focal
  - Architectures: all
  - Suite: focal
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.3.1-1jessie
  - Architectures: all
  - Suite: jessie
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.11.1-1stretch
  - Architectures: all
  - Suite: stretch
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.11.1-1xenial
  - Architectures: all
  - Suite: xenial
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: extra
  - depends: puppet-agent

  </details>

- **puppetdb-termini**
  - Latest version: 7.20.1-1jammy
  - Architectures: all
  - Suite: jammy
  - Components: puppet7
  - Description: Termini for puppetdb
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetdb-termini`
  - Install (apt): `sudo apt install puppetdb-termini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: default
  - Priority: optional
  - depends: puppet-agent

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1bookworm
  - Architectures: all
  - Suite: bookworm
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1bionic
  - Architectures: all
  - Suite: bionic
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1bullseye
  - Architectures: all
  - Suite: bullseye
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-11-jre-headless, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1buster
  - Architectures: all
  - Suite: buster
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-11-jre-headless, openjdk-17-jre-headless | openjdk-11-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1focal
  - Architectures: all
  - Suite: focal
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.9.1-1stretch
  - Architectures: all
  - Suite: stretch
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-8-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.9.1-1xenial
  - Architectures: all
  - Suite: xenial
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-8-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>

- **puppetserver**
  - Latest version: 7.17.3-1jammy
  - Architectures: all
  - Suite: jammy
  - Components: puppet7
  - Description: Puppet Labs puppetserver
  - Homepage: http://puppet.com
  - Install: `sudo apt-get install puppetserver`
  - Install (apt): `sudo apt install puppetserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Puppet Labs <info@puppetlabs.com>
  - Section: utils
  - Priority: optional
  - depends: adduser, bash, net-tools, openjdk-17-jre-headless | openjdk-11-jre-headless, openjdk-8-jre-headless, procps, puppet-agent (>= 6.16.0)

  </details>


Errors during fetch:
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install puppet-agent
- Repo tags: config-management, devtools
- Key notes: Non-expiring key published by Puppet
- Key tags: config-management, devtools
