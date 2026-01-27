# GitLab Runner (Ubuntu 22.04)

## Repository
- Repository ID: `gitlab-runner-ubuntu-jammy`
- Base URL: `https://packages.gitlab.com/runner/gitlab-runner/ubuntu`
- Host: `packages.gitlab.com`

## Upstream documentation
- Documentation URL: https://docs.gitlab.com/runner/install/linux-repository/
- Key documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install

## Suites
- Suite: `artful`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.10
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `cosmic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.04
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
- Suite: `trusty`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
- Suite: `xenial`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.10
- Suite: `zesty`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.04
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

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

### Suite: artful

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu artful main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-artful.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu artful main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-artful.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu cosmic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu cosmic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu disco main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu disco main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu eoan main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu eoan main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu groovy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu groovy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu hirsute main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu hirsute main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu impish main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu impish main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-impish.list >/dev/null
sudo apt-get update
```

### Suite: kinetic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-kinetic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-kinetic.list >/dev/null
sudo apt-get update
```

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-lunar.list >/dev/null
sudo apt-get update
```

### Suite: mantic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-mantic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-mantic.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu oracular main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu oracular main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu plucky main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu plucky main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-plucky.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu trusty main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu trusty main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu xenial main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu yakkety main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu yakkety main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu zesty main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu zesty main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-zesty.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/runner/gitlab-runner/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/gitlab-runner-ubuntu-jammy-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (27)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **gitlab-runner**
  - Latest version: 15.7.0
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: artful
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
  - Suite: bionic
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
  - Suite: cosmic
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
  - Suite: disco
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
  - Suite: eoan
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
  - Suite: focal
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
  - Suite: groovy
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
  - Suite: hirsute
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
  - Suite: impish
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
  - Suite: kinetic
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 17.6.1-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: lunar
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 17.6.1-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: mantic
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: noble
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.7.2-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: oracular
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
  - depends: ca-certificates, curl, git, gitlab-runner-helper-images, gitlab-runner-helper-images (= 17.10.0-1), gitlab-runner-helper-images (= 17.10.1-1), gitlab-runner-helper-images (= 17.10.2-1), gitlab-runner-helper-images (= 17.11.0-1), gitlab-runner-helper-images (= 17.11.1-1), gitlab-runner-helper-images (= 17.11.2-1), gitlab-runner-helper-images (= 17.11.3-1), gitlab-runner-helper-images (= 17.11.4-1), gitlab-runner-helper-images (= 17.7.1-1), gitlab-runner-helper-images (= 17.8.0-1), gitlab-runner-helper-images (= 17.8.1-1), gitlab-runner-helper-images (= 17.8.2-1), gitlab-runner-helper-images (= 17.8.3-1), gitlab-runner-helper-images (= 17.8.4-1), gitlab-runner-helper-images (= 17.8.5-1), gitlab-runner-helper-images (= 17.9.0-1), gitlab-runner-helper-images (= 17.9.1-1), gitlab-runner-helper-images (= 17.9.2-1), gitlab-runner-helper-images (= 17.9.3-1), gitlab-runner-helper-images (= 18.0.0-1), gitlab-runner-helper-images (= 18.0.1-1), gitlab-runner-helper-images (= 18.0.2-1), gitlab-runner-helper-images (= 18.0.3-1), gitlab-runner-helper-images (= 18.0.4-1), gitlab-runner-helper-images (= 18.0.5-1), gitlab-runner-helper-images (= 18.1.0-1), gitlab-runner-helper-images (= 18.1.1-1), gitlab-runner-helper-images (= 18.1.2-1), gitlab-runner-helper-images (= 18.1.3-1), gitlab-runner-helper-images (= 18.2.0-1), gitlab-runner-helper-images (= 18.2.1-1), gitlab-runner-helper-images (= 18.2.2-1), gitlab-runner-helper-images (= 18.3.0-1), gitlab-runner-helper-images (= 18.3.1-1), gitlab-runner-helper-images (= 18.4.0-1), gitlab-runner-helper-images (= 18.5.0-1), gitlab-runner-helper-images (= 18.6.0-1), gitlab-runner-helper-images (= 18.6.1-1), gitlab-runner-helper-images (= 18.6.2-1), gitlab-runner-helper-images (= 18.6.3-1), gitlab-runner-helper-images (= 18.6.5-1), gitlab-runner-helper-images (= 18.6.6-1), gitlab-runner-helper-images (= 18.7.0-1), gitlab-runner-helper-images (= 18.7.1-1), gitlab-runner-helper-images (= 18.7.2-1), tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, ppc64el, s390x
  - Suite: plucky
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
  - depends: ca-certificates, curl, git, gitlab-runner-helper-images (= 18.6.0-1), gitlab-runner-helper-images (= 18.6.1-1), gitlab-runner-helper-images (= 18.6.2-1), gitlab-runner-helper-images (= 18.6.3-1), gitlab-runner-helper-images (= 18.6.5-1), gitlab-runner-helper-images (= 18.6.6-1), gitlab-runner-helper-images (= 18.7.0-1), gitlab-runner-helper-images (= 18.7.1-1), gitlab-runner-helper-images (= 18.7.2-1), gitlab-runner-helper-images (= 18.8.0-1), tar
  - suggests: docker-engine
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 11.11.4
  - Architectures: amd64, armel, armhf, i386
  - Suite: trusty
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: xenial
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
  - Latest version: 10.1.1
  - Architectures: amd64, armel, armhf, i386
  - Suite: yakkety
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 10.7.4
  - Architectures: amd64, armel, armhf, i386
  - Suite: zesty
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
  - conflicts: gitlab-ci-multi-runner, gitlab-ci-multi-runner-beta, gitlab-runner-beta
  - replaces: gitlab-ci-multi-runner
  - provides: gitlab-ci-multi-runner

  </details>

- **gitlab-runner**
  - Latest version: 18.8.0-1
  - Architectures: amd64, arm64, armel, armhf, i386, ppc64el, s390x
  - Suite: jammy
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
  - Suite: bionic
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
  - Suite: focal
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
  - Suite: noble
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
  - Latest version: 18.7.2-1
  - Architectures: all
  - Suite: oracular
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
  - Suite: plucky
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
  - Suite: xenial
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
  - Suite: jammy
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
- Repo notes: Install: apt-get install gitlab-runner
- Repo tags: ci, devtools
- Key notes: GitLab CE packages on packages.gitlab.com
- Key tags: git, ci, devtools
