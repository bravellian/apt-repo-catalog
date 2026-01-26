# GitLab CE (Debian 12)

## Repository
- Repository ID: `gitlab-ce-debian-bookworm`
- Base URL: `https://packages.gitlab.com/gitlab/gitlab-ce/debian`
- Host: `packages.gitlab.com`

## Upstream documentation
- Documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install
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

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

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
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bullseye main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bullseye main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian buster main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian buster main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-buster.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian jessie main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian jessie main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian stretch main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian stretch main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian trixie main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian trixie main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-trixie.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian wheezy main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian wheezy main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bookworm main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bookworm main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-debian-bookworm-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (7)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **gitlab-ce**
  - Latest version: 18.8.2-ce.0
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: libatomic1, openssh-server, perl
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>

- **gitlab-ce**
  - Latest version: 17.5.5-ce.0
  - Architectures: amd64, arm64
  - Suite: buster
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: libatomic1, openssh-server, perl
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>

- **gitlab-ce**
  - Latest version: 13.3.9-ce.0
  - Architectures: amd64, armhf
  - Suite: jessie
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: openssh-server
  - conflicts: gitlab, gitlab-ee
  - replaces: gitlab, gitlab-ee

  </details>

- **gitlab-ce**
  - Latest version: 15.2.5-ce.0
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: openssh-server
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>

- **gitlab-ce**
  - Latest version: 18.8.2-ce.0
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: libatomic1, openssh-server, perl
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>

- **gitlab-ce**
  - Latest version: 11.6.11-ce.0
  - Architectures: amd64, armhf
  - Suite: wheezy
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: openssh-server
  - conflicts: gitlab, gitlab-ee
  - replaces: gitlab, gitlab-ee

  </details>

- **gitlab-ce**
  - Latest version: 18.8.2-ce.0
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: GitLab Community Edition (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab, Inc. <support@gitlab.com>
  - Section: misc
  - Priority: extra
  - depends: libatomic1, openssh-server, perl
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>


Errors during fetch:
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
- Repo notes: Install: apt-get install gitlab-ce
- Repo tags: git, ci, devtools
- Key notes: GitLab CE packages on packages.gitlab.com
- Key tags: git, ci, devtools
