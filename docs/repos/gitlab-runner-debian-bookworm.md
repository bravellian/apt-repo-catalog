# GitLab Runner (Debian 12 Bookworm)

## Repository
- Repository ID: `gitlab-runner-debian-bookworm`
- Base URL: `https://packages.gitlab.com/runner/gitlab-runner/debian`
- Host: `packages.gitlab.com`

## Upstream documentation
- Documentation URL: https://docs.gitlab.com/runner/install/linux-repository/
- Key documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install

## Suites
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `jessie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-8
- Suite: `stretch`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `wheezy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-7
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-12

## Key reference
- Key ID: `gitlab-ce`
- Expected fingerprints:
  - F6403F6544A38863DAA0B6E03F01618A51312F3F
- Key source URL: https://packages.gitlab.com/gitlab/gitlab-ce/gpgkey

## Install instructions

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian bullseye main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian bullseye main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian buster main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian buster main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian jessie main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian jessie main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian stretch main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian stretch main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian trixie main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian trixie main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian wheezy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian wheezy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian bookworm main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/debian bookworm main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (10)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: bullseye
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, gitlab-runner-helper-images, gitlab-runner-helper-images (= 17.10.0-1), gitlab-runner-helper-images (= 17.10.1-1), gitlab-runner-helper-images (= 17.10.2-1), gitlab-runner-helper-images (= 17.11.0-1), gitlab-runner-helper-images (= 17.11.1-1), gitlab-runner-helper-images (= 17.11.2-1), gitlab-runner-helper-images (= 17.11.3-1), gitlab-runner-helper-images (= 17.11.4-1), gitlab-runner-helper-images (= 17.7.1-1), gitlab-runner-helper-images (= 17.8.0-1), gitlab-runner-helper-images (= 17.8.1-1), gitlab-runner-helper-images (= 17.8.2-1), gitlab-runner-helper-images (= 17.8.3-1), gitlab-runner-helper-images (= 17.8.4-1), gitlab-runner-helper-images (= 17.8.5-1), gitlab-runner-helper-images (= 17.9.0-1), gitlab-runner-helper-images (= 17.9.1-1), gitlab-runner-helper-images (= 17.9.2-1), gitlab-runner-helper-images (= 17.9.3-1), gitlab-runner-helper-images (= 18.0.0-1), gitlab-runner-helper-images (= 18.0.1-1), gitlab-runner-helper-images (= 18.0.2-1), gitlab-runner-helper-images (= 18.0.3-1), gitlab-runner-helper-images (= 18.0.4-1), gitlab-runner-helper-images (= 18.0.5-1), gitlab-runner-helper-images (= 18.1.0-1), gitlab-runner-helper-images (= 18.1.1-1), gitlab-runner-helper-images (= 18.1.2-1), gitlab-runner-helper-images (= 18.1.3-1), gitlab-runner-helper-images (= 18.2.0-1), gitlab-runner-helper-images (= 18.2.1-1), gitlab-runner-helper-images (= 18.2.2-1), gitlab-runner-helper-images (= 18.3.0-1), gitlab-runner-helper-images (= 18.3.1-1), gitlab-runner-helper-images (= 18.4.0-1), gitlab-runner-helper-images (= 18.5.0-1), gitlab-runner-helper-images (= 18.6.0-1), gitlab-runner-helper-images (= 18.6.1-1), gitlab-runner-helper-images (= 18.6.2-1), gitlab-runner-helper-images (= 18.6.3-1), gitlab-runner-helper-images (= 18.6.5-1), gitlab-runner-helper-images (= 18.6.6-1), gitlab-runner-helper-images (= 18.7.0-1), gitlab-runner-helper-images (= 18.7.1-1), gitlab-runner-helper-images (= 18.7.2-1), gitlab-runner-helper-images (= 18.8.0-1), tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 17.6.1-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: buster
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 15.7.0
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: jessie
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 17.6.1-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: stretch
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: trixie
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, gitlab-runner-helper-images, gitlab-runner-helper-images (= 17.10.0-1), gitlab-runner-helper-images (= 17.10.1-1), gitlab-runner-helper-images (= 17.10.2-1), gitlab-runner-helper-images (= 17.11.0-1), gitlab-runner-helper-images (= 17.11.1-1), gitlab-runner-helper-images (= 17.11.2-1), gitlab-runner-helper-images (= 17.11.3-1), gitlab-runner-helper-images (= 17.11.4-1), gitlab-runner-helper-images (= 17.7.1-1), gitlab-runner-helper-images (= 17.8.0-1), gitlab-runner-helper-images (= 17.8.1-1), gitlab-runner-helper-images (= 17.8.2-1), gitlab-runner-helper-images (= 17.8.3-1), gitlab-runner-helper-images (= 17.8.4-1), gitlab-runner-helper-images (= 17.8.5-1), gitlab-runner-helper-images (= 17.9.0-1), gitlab-runner-helper-images (= 17.9.1-1), gitlab-runner-helper-images (= 17.9.2-1), gitlab-runner-helper-images (= 17.9.3-1), gitlab-runner-helper-images (= 18.0.0-1), gitlab-runner-helper-images (= 18.0.1-1), gitlab-runner-helper-images (= 18.0.2-1), gitlab-runner-helper-images (= 18.0.3-1), gitlab-runner-helper-images (= 18.0.4-1), gitlab-runner-helper-images (= 18.0.5-1), gitlab-runner-helper-images (= 18.1.0-1), gitlab-runner-helper-images (= 18.1.1-1), gitlab-runner-helper-images (= 18.1.2-1), gitlab-runner-helper-images (= 18.1.3-1), gitlab-runner-helper-images (= 18.2.0-1), gitlab-runner-helper-images (= 18.2.1-1), gitlab-runner-helper-images (= 18.2.2-1), gitlab-runner-helper-images (= 18.3.0-1), gitlab-runner-helper-images (= 18.3.1-1), gitlab-runner-helper-images (= 18.4.0-1), gitlab-runner-helper-images (= 18.5.0-1), gitlab-runner-helper-images (= 18.6.0-1), gitlab-runner-helper-images (= 18.6.1-1), gitlab-runner-helper-images (= 18.6.2-1), gitlab-runner-helper-images (= 18.6.3-1), gitlab-runner-helper-images (= 18.6.5-1), gitlab-runner-helper-images (= 18.6.6-1), gitlab-runner-helper-images (= 18.7.0-1), gitlab-runner-helper-images (= 18.7.1-1), gitlab-runner-helper-images (= 18.7.2-1), gitlab-runner-helper-images (= 18.8.0-1), tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 15.7.0
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: wheezy
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: bookworm
  - Components: main
  - Description: GitLab Runner
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner`
  - Install (apt): `sudo apt install gitlab-runner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, curl, git, gitlab-runner-helper-images, gitlab-runner-helper-images (= 17.10.0-1), gitlab-runner-helper-images (= 17.10.1-1), gitlab-runner-helper-images (= 17.10.2-1), gitlab-runner-helper-images (= 17.11.0-1), gitlab-runner-helper-images (= 17.11.1-1), gitlab-runner-helper-images (= 17.11.2-1), gitlab-runner-helper-images (= 17.11.3-1), gitlab-runner-helper-images (= 17.11.4-1), gitlab-runner-helper-images (= 17.7.1-1), gitlab-runner-helper-images (= 17.8.0-1), gitlab-runner-helper-images (= 17.8.1-1), gitlab-runner-helper-images (= 17.8.2-1), gitlab-runner-helper-images (= 17.8.3-1), gitlab-runner-helper-images (= 17.8.4-1), gitlab-runner-helper-images (= 17.8.5-1), gitlab-runner-helper-images (= 17.9.0-1), gitlab-runner-helper-images (= 17.9.1-1), gitlab-runner-helper-images (= 17.9.2-1), gitlab-runner-helper-images (= 17.9.3-1), gitlab-runner-helper-images (= 18.0.0-1), gitlab-runner-helper-images (= 18.0.1-1), gitlab-runner-helper-images (= 18.0.2-1), gitlab-runner-helper-images (= 18.0.3-1), gitlab-runner-helper-images (= 18.0.4-1), gitlab-runner-helper-images (= 18.0.5-1), gitlab-runner-helper-images (= 18.1.0-1), gitlab-runner-helper-images (= 18.1.1-1), gitlab-runner-helper-images (= 18.1.2-1), gitlab-runner-helper-images (= 18.1.3-1), gitlab-runner-helper-images (= 18.2.0-1), gitlab-runner-helper-images (= 18.2.1-1), gitlab-runner-helper-images (= 18.2.2-1), gitlab-runner-helper-images (= 18.3.0-1), gitlab-runner-helper-images (= 18.3.1-1), gitlab-runner-helper-images (= 18.4.0-1), gitlab-runner-helper-images (= 18.5.0-1), gitlab-runner-helper-images (= 18.6.0-1), gitlab-runner-helper-images (= 18.6.1-1), gitlab-runner-helper-images (= 18.6.2-1), gitlab-runner-helper-images (= 18.6.3-1), gitlab-runner-helper-images (= 18.6.5-1), gitlab-runner-helper-images (= 18.6.6-1), gitlab-runner-helper-images (= 18.7.0-1), gitlab-runner-helper-images (= 18.7.1-1), gitlab-runner-helper-images (= 18.7.2-1), gitlab-runner-helper-images (= 18.8.0-1), tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta, gitlab-runner-fips
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner-helper-images**
  - Latest version: 18.8.0-1
  - Architectures: all
  - Suite: bullseye
  - Components: main
  - Description: GitLab Runner Helper Docker Images
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner-helper-images`
  - Install (apt): `sudo apt install gitlab-runner-helper-images`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - replaces: gitlab-runner
  - provides: gitlab-runner-helper-images

  </details>

- **gitlab-runner-helper-images**
  - Latest version: 18.8.0-1
  - Architectures: all
  - Suite: trixie
  - Components: main
  - Description: GitLab Runner Helper Docker Images
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner-helper-images`
  - Install (apt): `sudo apt install gitlab-runner-helper-images`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - replaces: gitlab-runner
  - provides: gitlab-runner-helper-images

  </details>

- **gitlab-runner-helper-images**
  - Latest version: 18.8.0-1
  - Architectures: all
  - Suite: bookworm
  - Components: main
  - Description: GitLab Runner Helper Docker Images
  - Homepage: https://gitlab.com/gitlab-org/gitlab-runner
  - Install: `sudo apt-get install gitlab-runner-helper-images`
  - Install (apt): `sudo apt install gitlab-runner-helper-images`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab Inc. <support@gitlab.com>
  - Section: admin
  - Priority: optional
  - replaces: gitlab-runner
  - provides: gitlab-runner-helper-images

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

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install gitlab-runner
- Repo tags: ci, devtools
- Key notes: GitLab CE packages on packages.gitlab.com
- Key tags: git, ci, devtools
