# GitHub CLI (stable)

## Repository
- Repository ID: `github-cli-stable`
- Base URL: `https://cli.github.com/packages`
- Host: `cli.github.com`

## Upstream documentation
- Documentation URL: https://github.com/cli/cli/blob/trunk/docs/install_linux.md
- Key documentation URL: https://github.com/cli/cli/blob/trunk/docs/install_linux.md

## Suites
- Suite: `bionic`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-18.04
- Suite: `bullseye`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-10
- Suite: `cosmic`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-21.04
- Suite: `impish`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-21.10
- Suite: `jessie`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-8
- Suite: `stretch`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-9
- Suite: `trusty`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-14.04
- Suite: `xenial`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-16.04
- Suite: `stable`
  - Components: main
  - Architectures: amd64
  - Observed OSes: generic

## Key reference
- Key ID: `github-cli`
- Expected fingerprints:
  - 2C6106201985B60E6C7AC87323F3D4EA75716059
- Key source URL: https://cli.github.com/packages/githubcli-archive-keyring.gpg

## Install instructions

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages bionic main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages bionic main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-bionic.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages bullseye main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages bullseye main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages buster main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages buster main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-buster.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages cosmic main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages cosmic main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages disco main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages disco main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages eoan main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages eoan main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages focal main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages focal main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages groovy main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages groovy main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages hirsute main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages hirsute main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages impish main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages impish main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-impish.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages jessie main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages jessie main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stretch main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stretch main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages trusty main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages trusty main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages xenial main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages xenial main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-xenial.list >/dev/null
sudo apt-get update
```

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli-stable-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (15)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: bionic
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: bullseye
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: buster
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: cosmic
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: disco
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: eoan
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: focal
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: groovy
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: hirsute
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: impish
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: jessie
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: stretch
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: trusty
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: xenial
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Section: Development
  - Priority: optional
  - depends: git

  </details>

- **gh**
  - Latest version: 2.86.0
  - Architectures: amd64, arm64, armhf, i386
  - Suite: stable
  - Components: main
  - Description: GitHub’s official command line tool.
  - Homepage: https://github.com/cli/cli
  - Install: `sudo apt-get install gh`
  - Install (apt): `sudo apt install gh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub
  - Priority: optional
  - depends: git

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

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install gh
- Repo tags: devtools, git
- Key notes: GitHub CLI apt repository keyring
- Key tags: devtools, git
