# GitLab CE (Ubuntu 22.04)

## Repository
- Repository ID: `gitlab-ce-ubuntu-jammy`
- Base URL: `https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu`
- Host: `packages.gitlab.com`

## Upstream documentation
- Documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install
- Key documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install

## Suites
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `trusty`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
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

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `gitlab-ce`
- Expected fingerprints:
  - F6403F6544A38863DAA0B6E03F01618A51312F3F
- Key source URL: https://packages.gitlab.com/gitlab/gitlab-ce/gpgkey

## Install instructions

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu trusty main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu trusty main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/gitlab-ce-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (6)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **gitlab-ce**
  - Latest version: 16.11.10-ce.0
  - Architectures: amd64
  - Suite: bionic
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
  - depends: openssh-server, perl
  - conflicts: gitlab, gitlab-ee, gitlab-fips
  - replaces: gitlab, gitlab-ee, gitlab-fips

  </details>

- **gitlab-ce**
  - Latest version: 18.8.2-ce.0
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Latest version: 11.10.8-ce.0
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: GitLab Community Edition and GitLab CI (including NGINX, Postgres, Redis)
  - Homepage: https://about.gitlab.com/
  - Install: `sudo apt-get install gitlab-ce`
  - Install (apt): `sudo apt install gitlab-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitLab B.V.
  - Section: misc
  - Priority: extra
  - depends: openssh-server
  - conflicts: gitlab, gitlab-ee
  - replaces: gitlab, gitlab-ee

  </details>

- **gitlab-ce**
  - Latest version: 13.12.15-ce.0
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: jammy
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
  - Latest version: 18.8.2-ce.0
  - Architectures: amd64, arm64
  - Suite: noble
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

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install gitlab-ce
- Repo tags: git, ci, devtools
- Key notes: GitLab CE packages on packages.gitlab.com
- Key tags: git, ci, devtools
