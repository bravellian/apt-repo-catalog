# Docker - Debian (Buster) - stable

## Repository
- Repository ID: `docker-debian-buster-stable`
- Base URL: `https://download.docker.com/linux/debian`
- Host: `download.docker.com`

## Upstream documentation
- Documentation URL: https://docs.docker.com/engine/install/debian
- Key documentation URL: https://docs.docker.com/engine/install/ubuntu

## Suites
- Suite: `bookworm`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bullseye`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `jessie`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-8
- Suite: `stretch`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `wheezy`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: debian-7

## Key reference
- Key ID: `docker-gpg-8d81803c0ebfcd88`
- Expected fingerprints:
  - 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
- Key source URL: https://download.docker.com/linux/ubuntu/gpg

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian bookworm stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian bookworm stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian bullseye stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian bullseye stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian buster stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian buster stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-buster.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian jessie stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian jessie stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian trixie stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian trixie stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-trixie.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian wheezy stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian wheezy stable" | sudo tee /etc/apt/sources.list.d/docker-debian-buster-stable-wheezy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (44)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **cagent**
  - Latest version: 1.9.7-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - Latest version: 1.9.7-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf
  - Suite: bullseye
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
  - Latest version: 1.9.7-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf
  - Suite: trixie
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
  - Latest version: 2.2.1-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 2.2.1-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - Latest version: 1.6.33-1
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: buster
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
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libc6 (>= 2.3.2), libc6 (>= 2.4), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 1.2.6-3
  - Architectures: amd64, armhf
  - Suite: jessie
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
  - Latest version: 1.4.3-1
  - Architectures: amd64, arm64, armhf
  - Suite: stretch
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
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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

- **containerd.io-dbgsym**
  - Latest version: 2.2.1-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bookworm
  - Components: stable
  - Description: debug symbols for containerd.io
  - Install: `sudo apt-get install containerd.io-dbgsym`
  - Install (apt): `sudo apt install containerd.io-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: debug
  - Priority: optional
  - depends: containerd.io (= 1.7.28-0~debian.12~bookworm), containerd.io (= 1.7.28-1), containerd.io (= 1.7.28-1~debian.12~bookworm), containerd.io (= 1.7.28-2~debian.12~bookworm), containerd.io (= 1.7.29-1), containerd.io (= 1.7.29-1~debian.12~bookworm), containerd.io (= 2.1.5-1), containerd.io (= 2.1.5-1~debian.12~bookworm), containerd.io (= 2.2.0-1), containerd.io (= 2.2.0-2~debian.12~bookworm), containerd.io (= 2.2.1-1~debian.12~bookworm)

  </details>

- **containerd.io-dbgsym**
  - Latest version: 2.2.1-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf
  - Suite: bullseye
  - Components: stable
  - Description: debug symbols for containerd.io
  - Install: `sudo apt-get install containerd.io-dbgsym`
  - Install (apt): `sudo apt install containerd.io-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: debug
  - Priority: optional
  - depends: containerd.io (= 1.7.28-0~debian.11~bullseye), containerd.io (= 1.7.28-1~debian.11~bullseye), containerd.io (= 1.7.28-2~debian.11~bullseye), containerd.io (= 1.7.29-1~debian.11~bullseye), containerd.io (= 2.1.5-1~debian.11~bullseye), containerd.io (= 2.2.0-2~debian.11~bullseye), containerd.io (= 2.2.1-1~debian.11~bullseye)

  </details>

- **containerd.io-dbgsym**
  - Latest version: 1.2.10-2
  - Architectures: armhf
  - Suite: buster
  - Components: stable
  - Description: debug symbols for containerd.io
  - Install: `sudo apt-get install containerd.io-dbgsym`
  - Install (apt): `sudo apt install containerd.io-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: debug
  - Priority: optional
  - depends: containerd.io (= 1.2.10-2)

  </details>

- **containerd.io-dbgsym**
  - Latest version: 1.2.10-2
  - Architectures: armhf
  - Suite: stretch
  - Components: stable
  - Description: Debug symbols for containerd.io
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io-dbgsym`
  - Install (apt): `sudo apt install containerd.io-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: debug
  - Priority: extra
  - depends: containerd.io (= 1.2.10-2)

  </details>

- **containerd.io-dbgsym**
  - Latest version: 2.2.1-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: trixie
  - Components: stable
  - Description: debug symbols for containerd.io
  - Install: `sudo apt-get install containerd.io-dbgsym`
  - Install (apt): `sudo apt install containerd.io-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: debug
  - Priority: optional
  - depends: containerd.io (= 1.7.28-0~debian.13~trixie), containerd.io (= 1.7.28-1), containerd.io (= 1.7.28-1~debian.13~trixie), containerd.io (= 1.7.28-2~debian.13~trixie), containerd.io (= 1.7.29-1), containerd.io (= 1.7.29-1~debian.13~trixie), containerd.io (= 2.1.5-1), containerd.io (= 2.1.5-1~debian.13~trixie), containerd.io (= 2.2.0-1), containerd.io (= 2.2.0-2~debian.13~trixie), containerd.io (= 2.2.1-1~debian.13~trixie)

  </details>


### <a id="packages-D"></a>D

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 0.30.1-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - Latest version: 0.14.1-1~debian.10~buster
  - Architectures: amd64, arm64, armhf
  - Suite: buster
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
  - Latest version: 0.30.1-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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

- **docker-ce**
  - Latest version: 5:29.1.5-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - depends: containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libnftables1 (>= 1.0.2), libseccomp2 (>= 2.3.0), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - depends: containerd.io (>= 1.4.1), containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libdevmapper1.02.1 (>= 2:1.02.97), libnftables1 (>= 0.9.8), libseccomp2 (>= 2.3.0), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, kmod, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:26.1.4-1~debian.10~buster
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: buster
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
  - depends: containerd.io, containerd.io (>= 1.2.2-3), containerd.io (>= 1.4.1), containerd.io (>= 1.6.24), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libc6 (>= 2.3.2), libc6 (>= 2.4), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 18.06.3~ce~3-0~debian
  - Architectures: amd64, arm64, armhf
  - Suite: jessie
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
  - depends: init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libdevmapper1.02.1 (>= 2:1.02.90), libltdl7 (>= 2.4.2), libseccomp2 (>= 2.1.0), libsystemd0
  - recommends: aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:19.03.15~3-0~debian-stretch
  - Architectures: amd64, arm64, armhf
  - Suite: stretch
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
  - depends: containerd.io, containerd.io (>= 1.2.2-3), docker-ce-cli, init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, libltdl7, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce**
  - Latest version: 5:29.1.5-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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
  - Latest version: 18.03.1~ce-0~debian
  - Architectures: amd64
  - Suite: wheezy
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
  - depends: init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.4), libc6 (>= 2.9), libdevmapper1.02.1 (>= 2:1.02.63), libltdl7 (>= 2.4.2)
  - recommends: aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 5:29.1.5-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-cli**
  - Latest version: 5:26.1.4-1~debian.10~buster
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: buster
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>

- **docker-ce-cli**
  - Latest version: 5:19.03.15~3-0~debian-stretch
  - Architectures: amd64, arm64, armhf
  - Suite: stretch
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 5:29.1.5-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - depends: dbus-user-session, libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:26.1.4-1~debian.10~buster
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: buster
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
  - depends: dbus-user-session, docker-ce, libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 5.0.2-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: bullseye
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
  - Latest version: 2.27.1-1~debian.10~buster
  - Architectures: amd64, arm64, armhf, ppc64el
  - Suite: buster
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
  - Latest version: 5.0.2-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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

- **docker-model-plugin**
  - Latest version: 1.0.9-1~debian.12~bookworm
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: bookworm
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
  - Latest version: 1.0.9-1~debian.11~bullseye
  - Architectures: amd64, arm64, armhf
  - Suite: bullseye
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
  - Latest version: 1.0.9-1~debian.13~trixie
  - Architectures: amd64, arm64, armhf, ppc64el, s390x
  - Suite: trixie
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
  - Latest version: 0.23.0~debian-bookworm
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 0.23.0~debian-bullseye
  - Architectures: amd64
  - Suite: bullseye
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
  - Latest version: 0.23.0~debian-buster
  - Architectures: amd64
  - Suite: buster
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
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release
- apt-get update failed
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
- Packages index not listed in Release
- Packages index not listed in Release
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Docker APT repository for Debian
- Repo tags: docker, apt, debian
