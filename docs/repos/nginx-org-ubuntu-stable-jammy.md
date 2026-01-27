# NGINX (nginx.org stable, Ubuntu 22.04)

## Repository
- Repository ID: `nginx-org-ubuntu-stable-jammy`
- Base URL: `https://nginx.org/packages/ubuntu`
- Host: `nginx.org`

## Upstream documentation
- Documentation URL: https://nginx.org/en/linux_packages.html
- Key documentation URL: https://nginx.org/en/linux_packages.html

## Suites
- Suite: `artful`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.10
- Suite: `bionic`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `cosmic`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.04
- Suite: `impish`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.10
- Suite: `kinetic`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.10
- Suite: `lunar`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.04
- Suite: `mantic`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-23.10
- Suite: `noble`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `oracular`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.10
- Suite: `plucky`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `questing`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.10
- Suite: `trusty`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-14.04
- Suite: `xenial`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-16.10
- Suite: `zesty`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-17.04
- Suite: `jammy`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `nginx-org`
- Expected fingerprints:
  - 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
  - 8540A6F18833A80E9C1653A42FD21310B49F6B46
  - 9E9BE90EACBCDE69FE9B204CBCDCD8A38D88A2B3
- Key source URL: https://nginx.org/keys/nginx_signing.key

## Install instructions

### Suite: artful

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu artful nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-artful.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu artful nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-artful.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu bionic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu bionic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-bionic.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu cosmic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu cosmic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu disco nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu disco nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu eoan nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu eoan nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu focal nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu focal nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu groovy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu groovy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu hirsute nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu hirsute nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu impish nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu impish nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-impish.list >/dev/null
sudo apt-get update
```

### Suite: kinetic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu kinetic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-kinetic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu kinetic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-kinetic.list >/dev/null
sudo apt-get update
```

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu lunar nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu lunar nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-lunar.list >/dev/null
sudo apt-get update
```

### Suite: mantic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu mantic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-mantic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu mantic nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-mantic.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu noble nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu noble nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu oracular nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu oracular nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu plucky nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu plucky nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-plucky.list >/dev/null
sudo apt-get update
```

### Suite: questing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu questing nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-questing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu questing nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-questing.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu trusty nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu trusty nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu xenial nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu xenial nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu yakkety nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu yakkety nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu zesty nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu zesty nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-zesty.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu jammy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/ubuntu jammy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-ubuntu-stable-jammy-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (295)</summary>

<div class="packages-nav">
<a href="#packages-N">N</a>
</div>


### <a id="packages-N"></a>N

- **nginx**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.18~), libc6 (>= 2.17), libpcre3, libssl1.0.0 (>= 1.0.2~beta3), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.27), libpcre2-8-0 (>= 10.31), libpcre3, libssl1.1 (>= 1.1.0), libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0

  </details>

- **nginx**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libpcre3, libssl1.1 (>= 1.1.0), libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libpcre3, libssl1.1 (>= 1.1.0), libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0

  </details>

- **nginx**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.32), libcrypt1 (>= 1:4.1.0), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1

  </details>

- **nginx**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.33), libcrypt1 (>= 1:4.1.0), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.20.2

  </details>

- **nginx**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0

  </details>

- **nginx**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.22.1, nginx-r1.24.0

  </details>

- **nginx**
  - Latest version: 1.26.2-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2

  </details>

- **nginx**
  - Latest version: 1.26.2-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2

  </details>

- **nginx**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0

  </details>

- **nginx**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.13~), libc6 (>= 2.10), libc6 (>= 2.14), libc6 (>= 2.17), libpcre3, libssl1.0.0 (>= 1.0.1), lsb-base, lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4), zlib1g (>= 1:1.2.0)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.18~), libc6 (>= 2.10), libc6 (>= 2.14), libc6 (>= 2.17), libpcre3, libssl1.0.0 (>= 1.0.2~beta3), lsb-base, lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1

  </details>

- **nginx**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.10), libc6 (>= 2.14), libpcre3, libssl1.0.0 (>= 1.0.2~beta3), lsb-base, lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.18~), libc6 (>= 2.10), libc6 (>= 2.14), libpcre3, libssl1.0.0 (>= 1.0.2~beta3), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre3, libssl3 (>= 3.0.0~~alpha1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx-dbg**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful)

  </details>

- **nginx-dbg**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic)

  </details>

- **nginx-dbg**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic)

  </details>

- **nginx-dbg**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco)

  </details>

- **nginx-dbg**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal)

  </details>

- **nginx-dbg**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy)

  </details>

- **nginx-dbg**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~hirsute)

  </details>

- **nginx-dbg**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish)

  </details>

- **nginx-dbg**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic)

  </details>

- **nginx-dbg**
  - Latest version: 1.26.2-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar)

  </details>

- **nginx-dbg**
  - Latest version: 1.26.2-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing)

  </details>

- **nginx-dbg**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx (= 1.8.0-1~trusty), nginx (= 1.8.1-1~trusty)

  </details>

- **nginx-dbg**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial)

  </details>

- **nginx-dbg**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety)

  </details>

- **nginx-dbg**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy)

  </details>

- **nginx-debug**
  - Latest version: 1.8.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug version of nginx
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-debug`
  - Install (apt): `sudo apt install nginx-debug`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: libc6 (>= 2.10), libc6 (>= 2.14), libc6 (>= 2.17), libpcre3, libssl1.0.0 (>= 1.0.1), nginx (= 1.8.0-1~trusty), zlib1g (>= 1:1.2.0)

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~jammy
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-acme (= 1.28.0+0.2.0-1~noble), nginx-module-acme (= 1.28.0+0.3.0-1~noble), nginx-module-acme (= 1.28.0+0.3.1-1~noble), nginx-module-acme (= 1.28.1+0.3.1-1~noble)

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-acme (= 1.28.0+0.2.0-1~plucky), nginx-module-acme (= 1.28.0+0.3.0-1~plucky), nginx-module-acme (= 1.28.0+0.3.1-1~plucky), nginx-module-acme (= 1.28.1+0.3.1-1~plucky)

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-acme (= 1.28.0+0.2.0-1~questing), nginx-module-acme (= 1.28.0+0.3.0-1~questing), nginx-module-acme (= 1.28.0+0.3.1-1~questing), nginx-module-acme (= 1.28.1+0.3.1-1~questing)

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~jammy
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-acme (= 1.28.0+0.2.0-1~jammy), nginx-module-acme (= 1.28.0+0.3.0-1~jammy), nginx-module-acme (= 1.28.0+0.3.1-1~jammy), nginx-module-acme (= 1.28.1+0.3.1-1~jammy)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgeoip1, nginx (= 1.14.0-1~artful)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1, nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-geoip-r1.18.0, nginx-module-geoip-r1.20.0, nginx-module-geoip-r1.20.1, nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0, nginx-module-geoip-r1.22.1, nginx-module-geoip-r1.24.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgeoip1, nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgeoip1, nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgeoip1 (>= 1.6.12), nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgeoip1 (>= 1.6.12), nginx (= 1.18.0-1~focal), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-geoip-r1.18.0, nginx-module-geoip-r1.20.0, nginx-module-geoip-r1.20.1, nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0, nginx-module-geoip-r1.22.1, nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-geoip-r1.18.0, nginx-module-geoip-r1.20.0, nginx-module-geoip-r1.20.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.20.2
  - provides: nginx-module-geoip-r1.20.2

  </details>

- **nginx-module-geoip**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-geoip-r1.20.1, nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-geoip-r1.22.1, nginx-module-geoip-r1.24.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2

  </details>

- **nginx-module-geoip**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1t64 (>= 1.6.12), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1t64 (>= 1.6.12), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1t64 (>= 1.6.12), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1t64 (>= 1.6.12), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgeoip1, nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: geoip module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgeoip1, nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-geoip-r1.18.0, nginx-module-geoip-r1.20.0, nginx-module-geoip-r1.20.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgeoip1, nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgeoip1, nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgeoip1 (>= 1.6.12), nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0, nginx-module-geoip-r1.22.1, nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful), nginx-module-geoip (= 1.14.0-1~artful)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic), nginx-module-geoip (= 1.14.0-1~bionic), nginx-module-geoip (= 1.14.1-1~bionic), nginx-module-geoip (= 1.14.2-1~bionic), nginx-module-geoip (= 1.16.0-1~bionic), nginx-module-geoip (= 1.16.1-1~bionic), nginx-module-geoip (= 1.18.0-1~bionic), nginx-module-geoip (= 1.18.0-2~bionic), nginx-module-geoip (= 1.20.0-1~bionic), nginx-module-geoip (= 1.20.1-1~bionic), nginx-module-geoip (= 1.20.2-1~bionic), nginx-module-geoip (= 1.22.0-1~bionic), nginx-module-geoip (= 1.22.1-1~bionic), nginx-module-geoip (= 1.24.0-1~bionic)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), nginx-module-geoip (= 1.14.1-1~cosmic), nginx-module-geoip (= 1.14.2-1~cosmic), nginx-module-geoip (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), nginx-module-geoip (= 1.14.2-1~disco), nginx-module-geoip (= 1.16.0-1~disco), nginx-module-geoip (= 1.16.1-1~disco)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), nginx-module-geoip (= 1.16.1-1~eoan), nginx-module-geoip (= 1.18.0-1~eoan)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-geoip (= 1.18.0-1~focal), nginx-module-geoip (= 1.18.0-2~focal), nginx-module-geoip (= 1.20.0-1~focal), nginx-module-geoip (= 1.20.1-1~focal), nginx-module-geoip (= 1.20.2-1~focal), nginx-module-geoip (= 1.22.0-1~focal), nginx-module-geoip (= 1.22.1-1~focal), nginx-module-geoip (= 1.24.0-1~focal), nginx-module-geoip (= 1.26.0-1~focal), nginx-module-geoip (= 1.26.1-1~focal), nginx-module-geoip (= 1.26.1-2~focal), nginx-module-geoip (= 1.26.2-2~focal), nginx-module-geoip (= 1.26.3-2~focal), nginx-module-geoip (= 1.28.0-1~focal)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy), nginx-module-geoip (= 1.18.0-2~groovy), nginx-module-geoip (= 1.20.0-1~groovy), nginx-module-geoip (= 1.20.1-1~groovy)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~hirsute), nginx-module-geoip (= 1.20.2-1~hirsute)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish), nginx-module-geoip (= 1.20.1-1~impish), nginx-module-geoip (= 1.20.2-1~impish), nginx-module-geoip (= 1.22.0-1~impish)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic), nginx-module-geoip (= 1.22.1-1~kinetic), nginx-module-geoip (= 1.24.0-1~kinetic)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-geoip (= 1.24.0-1~lunar), nginx-module-geoip (= 1.26.0-1~lunar), nginx-module-geoip (= 1.26.1-1~lunar), nginx-module-geoip (= 1.26.1-2~lunar), nginx-module-geoip (= 1.26.2-2~lunar)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-geoip (= 1.24.0-1~mantic), nginx-module-geoip (= 1.26.0-1~mantic), nginx-module-geoip (= 1.26.1-1~mantic), nginx-module-geoip (= 1.26.1-2~mantic), nginx-module-geoip (= 1.26.2-2~mantic)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-geoip (= 1.26.0-1~noble), nginx-module-geoip (= 1.26.1-1~noble), nginx-module-geoip (= 1.26.1-2~noble), nginx-module-geoip (= 1.26.2-2~noble), nginx-module-geoip (= 1.26.3-2~noble), nginx-module-geoip (= 1.28.0-1~noble), nginx-module-geoip (= 1.28.1-1~noble)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-geoip (= 1.26.2-2~oracular), nginx-module-geoip (= 1.26.3-2~oracular), nginx-module-geoip (= 1.28.0-1~oracular)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-geoip (= 1.28.0-1~plucky), nginx-module-geoip (= 1.28.1-1~plucky)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-geoip (= 1.28.0-1~questing), nginx-module-geoip (= 1.28.1-1~questing)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx-module-geoip (= 1.10.2-1~trusty), nginx-module-geoip (= 1.10.3-1~trusty), nginx-module-geoip (= 1.12.0-1~trusty), nginx-module-geoip (= 1.12.1-1~trusty), nginx-module-geoip (= 1.12.2-1~trusty), nginx-module-geoip (= 1.14.0-1~trusty), nginx-module-geoip (= 1.14.1-1~trusty), nginx-module-geoip (= 1.14.2-1~trusty), nginx-module-geoip (= 1.16.0-1~trusty)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial), nginx-module-geoip (= 1.10.2-1~xenial), nginx-module-geoip (= 1.10.3-1~xenial), nginx-module-geoip (= 1.12.0-1~xenial), nginx-module-geoip (= 1.12.1-1~xenial), nginx-module-geoip (= 1.12.2-1~xenial), nginx-module-geoip (= 1.14.0-1~xenial), nginx-module-geoip (= 1.14.1-1~xenial), nginx-module-geoip (= 1.14.2-1~xenial), nginx-module-geoip (= 1.16.0-1~xenial), nginx-module-geoip (= 1.16.1-1~xenial), nginx-module-geoip (= 1.18.0-1~xenial), nginx-module-geoip (= 1.18.0-2~xenial), nginx-module-geoip (= 1.20.0-1~xenial), nginx-module-geoip (= 1.20.1-1~xenial)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), nginx-module-geoip (= 1.10.3-1~yakkety), nginx-module-geoip (= 1.12.0-1~yakkety), nginx-module-geoip (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), nginx-module-geoip (= 1.12.1-1~zesty), nginx-module-geoip (= 1.12.2-1~zesty)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-geoip (= 1.20.2-1~jammy), nginx-module-geoip (= 1.22.0-1~jammy), nginx-module-geoip (= 1.22.1-1~jammy), nginx-module-geoip (= 1.24.0-1~jammy), nginx-module-geoip (= 1.26.0-1~jammy), nginx-module-geoip (= 1.26.1-1~jammy), nginx-module-geoip (= 1.26.1-2~jammy), nginx-module-geoip (= 1.26.2-2~jammy), nginx-module-geoip (= 1.26.3-2~jammy), nginx-module-geoip (= 1.28.0-1~jammy), nginx-module-geoip (= 1.28.1-1~jammy)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.14.0-1~artful)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-image-filter-r1.18.0, nginx-module-image-filter-r1.20.0, nginx-module-image-filter-r1.20.1, nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0, nginx-module-image-filter-r1.22.1, nginx-module-image-filter-r1.24.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgd3 (>= 2.1.0~alpha~), nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgd3 (>= 2.1.0~alpha~), nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libgd3 (>= 2.1.0~alpha~), nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.18.0-1~focal), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-image-filter-r1.18.0, nginx-module-image-filter-r1.20.0, nginx-module-image-filter-r1.20.1, nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0, nginx-module-image-filter-r1.22.1, nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-image-filter-r1.18.0, nginx-module-image-filter-r1.20.0, nginx-module-image-filter-r1.20.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.20.2
  - provides: nginx-module-image-filter-r1.20.2

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-image-filter-r1.20.1, nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-image-filter-r1.22.1, nginx-module-image-filter-r1.24.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.1.3), libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: image filter module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-image-filter-r1.18.0, nginx-module-image-filter-r1.20.0, nginx-module-image-filter-r1.20.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0, nginx-module-image-filter-r1.22.1, nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful), nginx-module-image-filter (= 1.14.0-1~artful)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic), nginx-module-image-filter (= 1.14.0-1~bionic), nginx-module-image-filter (= 1.14.1-1~bionic), nginx-module-image-filter (= 1.14.2-1~bionic), nginx-module-image-filter (= 1.16.0-1~bionic), nginx-module-image-filter (= 1.16.1-1~bionic), nginx-module-image-filter (= 1.18.0-1~bionic), nginx-module-image-filter (= 1.18.0-2~bionic), nginx-module-image-filter (= 1.20.0-1~bionic), nginx-module-image-filter (= 1.20.1-1~bionic), nginx-module-image-filter (= 1.20.2-1~bionic), nginx-module-image-filter (= 1.22.0-1~bionic), nginx-module-image-filter (= 1.22.1-1~bionic), nginx-module-image-filter (= 1.24.0-1~bionic)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), nginx-module-image-filter (= 1.14.1-1~cosmic), nginx-module-image-filter (= 1.14.2-1~cosmic), nginx-module-image-filter (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), nginx-module-image-filter (= 1.14.2-1~disco), nginx-module-image-filter (= 1.16.0-1~disco), nginx-module-image-filter (= 1.16.1-1~disco)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), nginx-module-image-filter (= 1.16.1-1~eoan), nginx-module-image-filter (= 1.18.0-1~eoan)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-image-filter (= 1.18.0-1~focal), nginx-module-image-filter (= 1.18.0-2~focal), nginx-module-image-filter (= 1.20.0-1~focal), nginx-module-image-filter (= 1.20.1-1~focal), nginx-module-image-filter (= 1.20.2-1~focal), nginx-module-image-filter (= 1.22.0-1~focal), nginx-module-image-filter (= 1.22.1-1~focal), nginx-module-image-filter (= 1.24.0-1~focal), nginx-module-image-filter (= 1.26.0-1~focal), nginx-module-image-filter (= 1.26.1-1~focal), nginx-module-image-filter (= 1.26.1-2~focal), nginx-module-image-filter (= 1.26.2-2~focal), nginx-module-image-filter (= 1.26.3-2~focal), nginx-module-image-filter (= 1.28.0-1~focal)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy), nginx-module-image-filter (= 1.18.0-2~groovy), nginx-module-image-filter (= 1.20.0-1~groovy), nginx-module-image-filter (= 1.20.1-1~groovy)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~hirsute), nginx-module-image-filter (= 1.20.2-1~hirsute)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish), nginx-module-image-filter (= 1.20.1-1~impish), nginx-module-image-filter (= 1.20.2-1~impish), nginx-module-image-filter (= 1.22.0-1~impish)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic), nginx-module-image-filter (= 1.22.1-1~kinetic), nginx-module-image-filter (= 1.24.0-1~kinetic)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-image-filter (= 1.24.0-1~lunar), nginx-module-image-filter (= 1.26.0-1~lunar), nginx-module-image-filter (= 1.26.1-1~lunar), nginx-module-image-filter (= 1.26.1-2~lunar), nginx-module-image-filter (= 1.26.2-2~lunar)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-image-filter (= 1.24.0-1~mantic), nginx-module-image-filter (= 1.26.0-1~mantic), nginx-module-image-filter (= 1.26.1-1~mantic), nginx-module-image-filter (= 1.26.1-2~mantic), nginx-module-image-filter (= 1.26.2-2~mantic)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-image-filter (= 1.26.0-1~noble), nginx-module-image-filter (= 1.26.1-1~noble), nginx-module-image-filter (= 1.26.1-2~noble), nginx-module-image-filter (= 1.26.2-2~noble), nginx-module-image-filter (= 1.26.3-2~noble), nginx-module-image-filter (= 1.28.0-1~noble), nginx-module-image-filter (= 1.28.1-1~noble)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-image-filter (= 1.26.2-2~oracular), nginx-module-image-filter (= 1.26.3-2~oracular), nginx-module-image-filter (= 1.28.0-1~oracular)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-image-filter (= 1.28.0-1~plucky), nginx-module-image-filter (= 1.28.1-1~plucky)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-image-filter (= 1.28.0-1~questing), nginx-module-image-filter (= 1.28.1-1~questing)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx-module-image-filter (= 1.10.2-1~trusty), nginx-module-image-filter (= 1.10.3-1~trusty), nginx-module-image-filter (= 1.12.0-1~trusty), nginx-module-image-filter (= 1.12.1-1~trusty), nginx-module-image-filter (= 1.12.2-1~trusty), nginx-module-image-filter (= 1.14.0-1~trusty), nginx-module-image-filter (= 1.14.1-1~trusty), nginx-module-image-filter (= 1.14.2-1~trusty), nginx-module-image-filter (= 1.16.0-1~trusty)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial), nginx-module-image-filter (= 1.10.2-1~xenial), nginx-module-image-filter (= 1.10.3-1~xenial), nginx-module-image-filter (= 1.12.0-1~xenial), nginx-module-image-filter (= 1.12.1-1~xenial), nginx-module-image-filter (= 1.12.2-1~xenial), nginx-module-image-filter (= 1.14.0-1~xenial), nginx-module-image-filter (= 1.14.1-1~xenial), nginx-module-image-filter (= 1.14.2-1~xenial), nginx-module-image-filter (= 1.16.0-1~xenial), nginx-module-image-filter (= 1.16.1-1~xenial), nginx-module-image-filter (= 1.18.0-1~xenial), nginx-module-image-filter (= 1.18.0-2~xenial), nginx-module-image-filter (= 1.20.0-1~xenial), nginx-module-image-filter (= 1.20.1-1~xenial)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), nginx-module-image-filter (= 1.10.3-1~yakkety), nginx-module-image-filter (= 1.12.0-1~yakkety), nginx-module-image-filter (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), nginx-module-image-filter (= 1.12.1-1~zesty), nginx-module-image-filter (= 1.12.2-1~zesty)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-image-filter (= 1.20.2-1~jammy), nginx-module-image-filter (= 1.22.0-1~jammy), nginx-module-image-filter (= 1.22.1-1~jammy), nginx-module-image-filter (= 1.24.0-1~jammy), nginx-module-image-filter (= 1.26.0-1~jammy), nginx-module-image-filter (= 1.26.1-1~jammy), nginx-module-image-filter (= 1.26.1-2~jammy), nginx-module-image-filter (= 1.26.2-2~jammy), nginx-module-image-filter (= 1.26.3-2~jammy), nginx-module-image-filter (= 1.28.0-1~jammy), nginx-module-image-filter (= 1.28.1-1~jammy)

  </details>

- **nginx-module-njs**
  - Latest version: 1.14.0.0.2.3-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.25), libc6 (>= 2.7), libedit2 (>= 2.11-20080614), libpcre3, nginx (= 1.14.0-1~artful)

  </details>

- **nginx-module-njs**
  - Latest version: 1.24.0+0.7.12-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx nginScript dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.25), libedit2 (>= 2.11-20080614), libpcre2-8-0 (>= 10.31), libpcre3, libreadline7 (>= 6.0), libssl1.1 (>= 1.1.1), libxml2 (>= 2.7.4), nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.18.0, nginx-module-njs-r1.20.0, nginx-module-njs-r1.20.1, nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0, nginx-module-njs-r1.22.1, nginx-module-njs-r1.24.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.16.0.0.3.2-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.25), libedit2 (>= 2.11-20080614), libpcre3, libreadline7 (>= 6.0), nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-njs**
  - Latest version: 1.16.1.0.3.8-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libedit2 (>= 2.11-20080614-0), libpcre3, libreadline8 (>= 6.0), nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco)

  </details>

- **nginx-module-njs**
  - Latest version: 1.18.0.0.4.3-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libpcre3, libreadline8 (>= 6.0), nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan)

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.0+0.9.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.22), libpcre2-8-0 (>= 10.32), libpcre3, libreadline8 (>= 6.0), libssl1.1 (>= 1.1.1), libxml2 (>= 2.7.4), nginx (= 1.18.0-1~focal), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.18.0, nginx-module-njs-r1.20.0, nginx-module-njs-r1.20.1, nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0, nginx-module-njs-r1.22.1, nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.20.1+0.6.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libpcre3, libreadline8 (>= 6.0), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-njs-r1.18.0, nginx-module-njs-r1.20.0, nginx-module-njs-r1.20.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.22.0+0.7.5-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libpcre2-8-0 (>= 10.22), libpcre2-8-0 (>= 10.32), libpcre3, libreadline8 (>= 6.0), libssl1.1 (>= 1.1.1), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-njs-r1.20.1, nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.24.0+0.8.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libreadline8 (>= 6.0), libssl3 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.22.1, nginx-r1.24.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.22.1, nginx-module-njs-r1.24.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.26.2+0.8.7-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libreadline8 (>= 6.0), libssl3 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2

  </details>

- **nginx-module-njs**
  - Latest version: 1.26.2+0.8.7-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3t64 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.0+0.9.1-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3t64 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3t64 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3t64 (>= 3.0.0), libxml2-16 (>= 2.14.1), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.16.0.0.3.1-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libc6 (>= 2.7), libedit2 (>= 2.11-20080614), libpcre3, nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty)

  </details>

- **nginx-module-njs**
  - Latest version: 1.20.1+0.6.0-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: nJScript module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libc6 (>= 2.7), libedit2 (>= 2.11-20080614), libpcre3, libreadline6 (>= 6.0), nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-njs-r1.18.0, nginx-module-njs-r1.20.0, nginx-module-njs-r1.20.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.12.1.0.1.10-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx nginScript dynamic modules
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-njs**
  - Latest version: 1.12.2.0.1.14-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx nginScript dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libedit2 (>= 2.11-20080614), libpcre3, nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty)

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.22), libpcre2-8-0 (>= 10.32), libpcre3, libreadline8 (>= 6.0), libssl3 (>= 3.0.0~~alpha1), libxml2 (>= 2.7.4), nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0, nginx-module-njs-r1.22.1, nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.14.0.0.2.3-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful), nginx-module-njs (= 1.14.0.0.2.0-1~artful), nginx-module-njs (= 1.14.0.0.2.1-1~artful), nginx-module-njs (= 1.14.0.0.2.2-1~artful), nginx-module-njs (= 1.14.0.0.2.3-1~artful)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.24.0+0.7.12-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic), nginx-module-njs (= 1.14.0.0.2.0-1~bionic), nginx-module-njs (= 1.14.0.0.2.1-1~bionic), nginx-module-njs (= 1.14.0.0.2.2-1~bionic), nginx-module-njs (= 1.14.0.0.2.3-1~bionic), nginx-module-njs (= 1.14.0.0.2.4-1~bionic), nginx-module-njs (= 1.14.0.0.2.5-1~bionic), nginx-module-njs (= 1.14.1.0.2.5-1~bionic), nginx-module-njs (= 1.14.2.0.2.6-1~bionic), nginx-module-njs (= 1.14.2.0.2.7-1~bionic), nginx-module-njs (= 1.16.0.0.3.1-1~bionic), nginx-module-njs (= 1.16.0.0.3.2-1~bionic), nginx-module-njs (= 1.16.1.0.3.4-1~bionic), nginx-module-njs (= 1.16.1.0.3.5-1~bionic), nginx-module-njs (= 1.16.1.0.3.6-1~bionic), nginx-module-njs (= 1.16.1.0.3.7-1~bionic), nginx-module-njs (= 1.16.1.0.3.8-1~bionic), nginx-module-njs (= 1.18.0.0.3.9-1~bionic), nginx-module-njs (= 1.18.0.0.4.0-1~bionic), nginx-module-njs (= 1.18.0.0.4.1-1~bionic), nginx-module-njs (= 1.18.0.0.4.2-1~bionic), nginx-module-njs (= 1.18.0.0.4.3-1~bionic), nginx-module-njs (= 1.18.0.0.4.4-1~bionic), nginx-module-njs (= 1.18.0.0.4.4-2~bionic), nginx-module-njs (= 1.18.0+0.5.0-1~bionic), nginx-module-njs (= 1.18.0+0.5.1-1~bionic), nginx-module-njs (= 1.18.0+0.5.2-1~bionic), nginx-module-njs (= 1.20.0+0.5.3-1~bionic), nginx-module-njs (= 1.20.1+0.5.3-1~bionic), nginx-module-njs (= 1.20.1+0.6.0-1~bionic), nginx-module-njs (= 1.20.1+0.6.1-1~bionic), nginx-module-njs (= 1.20.1+0.6.2-1~bionic), nginx-module-njs (= 1.20.1+0.7.0-1~bionic), nginx-module-njs (= 1.20.2+0.7.0-1~bionic), nginx-module-njs (= 1.20.2+0.7.1-1~bionic), nginx-module-njs (= 1.20.2+0.7.2-1~bionic), nginx-module-njs (= 1.20.2+0.7.3-1~bionic), nginx-module-njs (= 1.22.0+0.7.3-1~bionic), nginx-module-njs (= 1.22.0+0.7.4-1~bionic), nginx-module-njs (= 1.22.0+0.7.5-1~bionic), nginx-module-njs (= 1.22.0+0.7.6-1~bionic), nginx-module-njs (= 1.22.0+0.7.7-1~bionic), nginx-module-njs (= 1.22.1+0.7.10-1~bionic), nginx-module-njs (= 1.22.1+0.7.11-1~bionic), nginx-module-njs (= 1.22.1+0.7.12-1~bionic), nginx-module-njs (= 1.22.1+0.7.7-1~bionic), nginx-module-njs (= 1.22.1+0.7.8-1~bionic), nginx-module-njs (= 1.22.1+0.7.9-1~bionic), nginx-module-njs (= 1.24.0+0.7.12-1~bionic)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.16.0.0.3.2-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), nginx-module-njs (= 1.14.1.0.2.5-1~cosmic), nginx-module-njs (= 1.14.2.0.2.6-1~cosmic), nginx-module-njs (= 1.14.2.0.2.7-1~cosmic), nginx-module-njs (= 1.16.0.0.3.1-1~cosmic), nginx-module-njs (= 1.16.0.0.3.2-1~cosmic)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.16.1.0.3.8-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), nginx-module-njs (= 1.14.2.0.2.6-1~disco), nginx-module-njs (= 1.16.0.0.3.1-1~disco), nginx-module-njs (= 1.16.0.0.3.2-1~disco), nginx-module-njs (= 1.16.1.0.3.4-1~disco), nginx-module-njs (= 1.16.1.0.3.5-1~disco), nginx-module-njs (= 1.16.1.0.3.6-1~disco), nginx-module-njs (= 1.16.1.0.3.7-1~disco), nginx-module-njs (= 1.16.1.0.3.8-1~disco)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.18.0.0.4.3-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), nginx-module-njs (= 1.16.1.0.3.7-1~eoan), nginx-module-njs (= 1.16.1.0.3.8-1~eoan), nginx-module-njs (= 1.18.0.0.3.9-1~eoan), nginx-module-njs (= 1.18.0.0.4.0-1~eoan), nginx-module-njs (= 1.18.0.0.4.1-1~eoan), nginx-module-njs (= 1.18.0.0.4.2-1~eoan), nginx-module-njs (= 1.18.0.0.4.3-1~eoan)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.0+0.9.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-njs (= 1.18.0.0.3.9-1~focal), nginx-module-njs (= 1.18.0.0.4.1-1~focal), nginx-module-njs (= 1.18.0.0.4.2-1~focal), nginx-module-njs (= 1.18.0.0.4.3-1~focal), nginx-module-njs (= 1.18.0.0.4.4-1~focal), nginx-module-njs (= 1.18.0.0.4.4-2~focal), nginx-module-njs (= 1.18.0+0.5.0-1~focal), nginx-module-njs (= 1.18.0+0.5.1-1~focal), nginx-module-njs (= 1.18.0+0.5.2-1~focal), nginx-module-njs (= 1.20.0+0.5.3-1~focal), nginx-module-njs (= 1.20.1+0.5.3-1~focal), nginx-module-njs (= 1.20.1+0.6.0-1~focal), nginx-module-njs (= 1.20.1+0.6.1-1~focal), nginx-module-njs (= 1.20.1+0.6.2-1~focal), nginx-module-njs (= 1.20.1+0.7.0-1~focal), nginx-module-njs (= 1.20.2+0.7.0-1~focal), nginx-module-njs (= 1.20.2+0.7.1-1~focal), nginx-module-njs (= 1.20.2+0.7.2-1~focal), nginx-module-njs (= 1.20.2+0.7.3-1~focal), nginx-module-njs (= 1.22.0+0.7.3-1~focal), nginx-module-njs (= 1.22.0+0.7.4-1~focal), nginx-module-njs (= 1.22.0+0.7.5-1~focal), nginx-module-njs (= 1.22.0+0.7.6-1~focal), nginx-module-njs (= 1.22.0+0.7.7-1~focal), nginx-module-njs (= 1.22.1+0.7.10-1~focal), nginx-module-njs (= 1.22.1+0.7.11-1~focal), nginx-module-njs (= 1.22.1+0.7.12-1~focal), nginx-module-njs (= 1.22.1+0.7.7-1~focal), nginx-module-njs (= 1.22.1+0.7.8-1~focal), nginx-module-njs (= 1.22.1+0.7.9-1~focal), nginx-module-njs (= 1.24.0+0.7.12-1~focal), nginx-module-njs (= 1.24.0+0.8.0-1~focal), nginx-module-njs (= 1.24.0+0.8.1-1~focal), nginx-module-njs (= 1.24.0+0.8.2-1~focal), nginx-module-njs (= 1.24.0+0.8.3-1~focal), nginx-module-njs (= 1.26.0+0.8.4-1~focal), nginx-module-njs (= 1.26.0+0.8.4-2~focal), nginx-module-njs (= 1.26.1+0.8.4-1~focal), nginx-module-njs (= 1.26.1+0.8.4-2~focal), nginx-module-njs (= 1.26.1+0.8.5-2~focal), nginx-module-njs (= 1.26.2+0.8.5-1~focal), nginx-module-njs (= 1.26.2+0.8.6-1~focal), nginx-module-njs (= 1.26.2+0.8.7-1~focal), nginx-module-njs (= 1.26.2+0.8.8-1~focal), nginx-module-njs (= 1.26.2+0.8.9-1~focal), nginx-module-njs (= 1.26.3+0.8.10-1~focal), nginx-module-njs (= 1.26.3+0.8.9-1~focal), nginx-module-njs (= 1.28.0+0.8.10-1~focal), nginx-module-njs (= 1.28.0+0.9.0-1~focal)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.20.1+0.6.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy), nginx-module-njs (= 1.18.0.0.4.4-2~groovy), nginx-module-njs (= 1.18.0+0.5.0-1~groovy), nginx-module-njs (= 1.18.0+0.5.1-1~groovy), nginx-module-njs (= 1.18.0+0.5.2-1~groovy), nginx-module-njs (= 1.20.0+0.5.3-1~groovy), nginx-module-njs (= 1.20.1+0.5.3-1~groovy), nginx-module-njs (= 1.20.1+0.6.0-1~groovy), nginx-module-njs (= 1.20.1+0.6.1-1~groovy)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.22.0+0.7.5-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish), nginx-module-njs (= 1.20.1+0.7.0-1~impish), nginx-module-njs (= 1.20.2+0.7.0-1~impish), nginx-module-njs (= 1.20.2+0.7.1-1~impish), nginx-module-njs (= 1.20.2+0.7.2-1~impish), nginx-module-njs (= 1.20.2+0.7.3-1~impish), nginx-module-njs (= 1.22.0+0.7.3-1~impish), nginx-module-njs (= 1.22.0+0.7.4-1~impish), nginx-module-njs (= 1.22.0+0.7.5-1~impish)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.24.0+0.8.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic), nginx-module-njs (= 1.22.1+0.7.10-1~kinetic), nginx-module-njs (= 1.22.1+0.7.11-1~kinetic), nginx-module-njs (= 1.22.1+0.7.12-1~kinetic), nginx-module-njs (= 1.22.1+0.7.8-1~kinetic), nginx-module-njs (= 1.22.1+0.7.9-1~kinetic), nginx-module-njs (= 1.24.0+0.7.12-1~kinetic), nginx-module-njs (= 1.24.0+0.8.0-1~kinetic)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.26.2+0.8.7-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-njs (= 1.24.0+0.7.12-1~lunar), nginx-module-njs (= 1.24.0+0.8.0-1~lunar), nginx-module-njs (= 1.24.0+0.8.1-1~lunar), nginx-module-njs (= 1.24.0+0.8.2-1~lunar), nginx-module-njs (= 1.24.0+0.8.3-1~lunar), nginx-module-njs (= 1.26.0+0.8.4-1~lunar), nginx-module-njs (= 1.26.0+0.8.4-2~lunar), nginx-module-njs (= 1.26.1+0.8.4-1~lunar), nginx-module-njs (= 1.26.1+0.8.4-2~lunar), nginx-module-njs (= 1.26.1+0.8.5-2~lunar), nginx-module-njs (= 1.26.2+0.8.5-1~lunar), nginx-module-njs (= 1.26.2+0.8.6-1~lunar), nginx-module-njs (= 1.26.2+0.8.7-1~lunar)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.26.2+0.8.7-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-njs (= 1.24.0+0.8.2-1~mantic), nginx-module-njs (= 1.24.0+0.8.3-1~mantic), nginx-module-njs (= 1.26.0+0.8.4-1~mantic), nginx-module-njs (= 1.26.0+0.8.4-2~mantic), nginx-module-njs (= 1.26.1+0.8.4-1~mantic), nginx-module-njs (= 1.26.1+0.8.4-2~mantic), nginx-module-njs (= 1.26.1+0.8.5-2~mantic), nginx-module-njs (= 1.26.2+0.8.5-1~mantic), nginx-module-njs (= 1.26.2+0.8.6-1~mantic), nginx-module-njs (= 1.26.2+0.8.7-1~mantic)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-njs (= 1.26.0+0.8.4-1~noble), nginx-module-njs (= 1.26.0+0.8.4-2~noble), nginx-module-njs (= 1.26.1+0.8.4-1~noble), nginx-module-njs (= 1.26.1+0.8.4-2~noble), nginx-module-njs (= 1.26.1+0.8.5-2~noble), nginx-module-njs (= 1.26.2+0.8.5-1~noble), nginx-module-njs (= 1.26.2+0.8.6-1~noble), nginx-module-njs (= 1.26.2+0.8.7-1~noble), nginx-module-njs (= 1.26.2+0.8.8-1~noble), nginx-module-njs (= 1.26.2+0.8.9-1~noble), nginx-module-njs (= 1.26.3+0.8.10-1~noble), nginx-module-njs (= 1.26.3+0.8.9-1~noble), nginx-module-njs (= 1.28.0+0.8.10-1~noble), nginx-module-njs (= 1.28.0+0.9.0-1~noble), nginx-module-njs (= 1.28.0+0.9.1-1~noble), nginx-module-njs (= 1.28.0+0.9.2-1~noble), nginx-module-njs (= 1.28.0+0.9.3-1~noble), nginx-module-njs (= 1.28.0+0.9.4-1~noble), nginx-module-njs (= 1.28.1+0.9.4-1~noble), nginx-module-njs (= 1.28.1+0.9.5-1~noble)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.0+0.9.1-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-njs (= 1.26.2+0.8.5-1~oracular), nginx-module-njs (= 1.26.2+0.8.7-1~oracular), nginx-module-njs (= 1.26.2+0.8.8-1~oracular), nginx-module-njs (= 1.26.2+0.8.9-1~oracular), nginx-module-njs (= 1.26.3+0.8.10-1~oracular), nginx-module-njs (= 1.26.3+0.8.9-1~oracular), nginx-module-njs (= 1.28.0+0.8.10-1~oracular), nginx-module-njs (= 1.28.0+0.9.0-1~oracular), nginx-module-njs (= 1.28.0+0.9.1-1~oracular)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-njs (= 1.28.0+0.8.10-1~plucky), nginx-module-njs (= 1.28.0+0.9.0-1~plucky), nginx-module-njs (= 1.28.0+0.9.1-1~plucky), nginx-module-njs (= 1.28.0+0.9.2-1~plucky), nginx-module-njs (= 1.28.0+0.9.3-1~plucky), nginx-module-njs (= 1.28.0+0.9.4-1~plucky), nginx-module-njs (= 1.28.1+0.9.4-1~plucky), nginx-module-njs (= 1.28.1+0.9.5-1~plucky)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-njs (= 1.28.0+0.9.3-1~questing), nginx-module-njs (= 1.28.0+0.9.4-1~questing), nginx-module-njs (= 1.28.1+0.9.4-1~questing), nginx-module-njs (= 1.28.1+0.9.5-1~questing)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.16.0.0.3.1-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx-module-njs (= 1.10.2.0.0.20160414.1c50334fbea6-2~trusty), nginx-module-njs (= 1.10.3.0.0.20160414.1c50334fbea6-1~trusty), nginx-module-njs (= 1.12.0.0.1.10-1~trusty), nginx-module-njs (= 1.12.1.0.1.10-1~trusty), nginx-module-njs (= 1.12.2.0.1.14-1~trusty), nginx-module-njs (= 1.14.0.0.2.0-1~trusty), nginx-module-njs (= 1.14.0.0.2.1-1~trusty), nginx-module-njs (= 1.14.0.0.2.2-1~trusty), nginx-module-njs (= 1.14.0.0.2.3-1~trusty), nginx-module-njs (= 1.14.0.0.2.4-1~trusty), nginx-module-njs (= 1.14.0.0.2.5-1~trusty), nginx-module-njs (= 1.14.1.0.2.5-1~trusty), nginx-module-njs (= 1.14.2.0.2.6-1~trusty), nginx-module-njs (= 1.14.2.0.2.7-1~trusty), nginx-module-njs (= 1.16.0.0.3.1-1~trusty)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.20.1+0.6.0-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial), nginx-module-njs (= 1.10.2.0.0.20160414.1c50334fbea6-2~xenial), nginx-module-njs (= 1.10.3.0.0.20160414.1c50334fbea6-1~xenial), nginx-module-njs (= 1.12.0.0.1.10-1~xenial), nginx-module-njs (= 1.12.1.0.1.10-1~xenial), nginx-module-njs (= 1.12.2.0.1.14-1~xenial), nginx-module-njs (= 1.14.0.0.2.0-1~xenial), nginx-module-njs (= 1.14.0.0.2.1-1~xenial), nginx-module-njs (= 1.14.0.0.2.2-1~xenial), nginx-module-njs (= 1.14.0.0.2.3-1~xenial), nginx-module-njs (= 1.14.0.0.2.4-1~xenial), nginx-module-njs (= 1.14.0.0.2.5-1~xenial), nginx-module-njs (= 1.14.1.0.2.5-1~xenial), nginx-module-njs (= 1.14.2.0.2.6-1~xenial), nginx-module-njs (= 1.14.2.0.2.7-1~xenial), nginx-module-njs (= 1.16.0.0.3.1-1~xenial), nginx-module-njs (= 1.16.0.0.3.2-1~xenial), nginx-module-njs (= 1.16.1.0.3.4-1~xenial), nginx-module-njs (= 1.16.1.0.3.5-1~xenial), nginx-module-njs (= 1.16.1.0.3.6-1~xenial), nginx-module-njs (= 1.16.1.0.3.7-1~xenial), nginx-module-njs (= 1.16.1.0.3.8-1~xenial), nginx-module-njs (= 1.18.0.0.3.9-1~xenial), nginx-module-njs (= 1.18.0.0.4.0-1~xenial), nginx-module-njs (= 1.18.0.0.4.1-1~xenial), nginx-module-njs (= 1.18.0.0.4.2-1~xenial), nginx-module-njs (= 1.18.0.0.4.3-1~xenial), nginx-module-njs (= 1.18.0.0.4.4-1~xenial), nginx-module-njs (= 1.18.0.0.4.4-2~xenial), nginx-module-njs (= 1.18.0+0.5.0-1~xenial), nginx-module-njs (= 1.18.0+0.5.1-1~xenial), nginx-module-njs (= 1.18.0+0.5.2-1~xenial), nginx-module-njs (= 1.20.0+0.5.3-1~xenial), nginx-module-njs (= 1.20.1+0.5.3-1~xenial), nginx-module-njs (= 1.20.1+0.6.0-1~xenial)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.12.1.0.1.10-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), nginx-module-njs (= 1.10.3.0.0.20160414.1c50334fbea6-1~yakkety), nginx-module-njs (= 1.12.0.0.1.10-1~yakkety), nginx-module-njs (= 1.12.1.0.1.10-1~yakkety)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.12.2.0.1.14-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), nginx-module-njs (= 1.12.1.0.1.10-1~zesty), nginx-module-njs (= 1.12.2.0.1.14-1~zesty)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-njs (= 1.20.2+0.7.3-1~jammy), nginx-module-njs (= 1.22.0+0.7.3-1~jammy), nginx-module-njs (= 1.22.0+0.7.4-1~jammy), nginx-module-njs (= 1.22.0+0.7.5-1~jammy), nginx-module-njs (= 1.22.0+0.7.6-1~jammy), nginx-module-njs (= 1.22.0+0.7.7-1~jammy), nginx-module-njs (= 1.22.1+0.7.10-1~jammy), nginx-module-njs (= 1.22.1+0.7.11-1~jammy), nginx-module-njs (= 1.22.1+0.7.12-1~jammy), nginx-module-njs (= 1.22.1+0.7.7-1~jammy), nginx-module-njs (= 1.22.1+0.7.8-1~jammy), nginx-module-njs (= 1.22.1+0.7.9-1~jammy), nginx-module-njs (= 1.24.0+0.7.12-1~jammy), nginx-module-njs (= 1.24.0+0.8.0-1~jammy), nginx-module-njs (= 1.24.0+0.8.1-1~jammy), nginx-module-njs (= 1.24.0+0.8.2-1~jammy), nginx-module-njs (= 1.24.0+0.8.3-1~jammy), nginx-module-njs (= 1.26.0+0.8.4-1~jammy), nginx-module-njs (= 1.26.0+0.8.4-2~jammy), nginx-module-njs (= 1.26.1+0.8.4-1~jammy), nginx-module-njs (= 1.26.1+0.8.4-2~jammy), nginx-module-njs (= 1.26.1+0.8.5-2~jammy), nginx-module-njs (= 1.26.2+0.8.5-1~jammy), nginx-module-njs (= 1.26.2+0.8.6-1~jammy), nginx-module-njs (= 1.26.2+0.8.7-1~jammy), nginx-module-njs (= 1.26.2+0.8.8-1~jammy), nginx-module-njs (= 1.26.2+0.8.9-1~jammy), nginx-module-njs (= 1.26.3+0.8.10-1~jammy), nginx-module-njs (= 1.26.3+0.8.9-1~jammy), nginx-module-njs (= 1.28.0+0.8.10-1~jammy), nginx-module-njs (= 1.28.0+0.9.0-1~jammy), nginx-module-njs (= 1.28.0+0.9.1-1~jammy), nginx-module-njs (= 1.28.0+0.9.2-1~jammy), nginx-module-njs (= 1.28.0+0.9.3-1~jammy), nginx-module-njs (= 1.28.0+0.9.4-1~jammy), nginx-module-njs (= 1.28.1+0.9.4-1~jammy), nginx-module-njs (= 1.28.1+0.9.5-1~jammy)

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.0+0.1.2-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.29), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.5), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0

  </details>

- **nginx-module-otel**
  - Latest version: 1.26.2+0.1.0-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2

  </details>

- **nginx-module-otel**
  - Latest version: 1.26.2+0.1.0-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 13.1), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libcares2 (>= 1.11.0~rc1), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.0+0.1.2-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libcares2 (>= 1.11.0~rc1), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libcares2 (>= 1.11.0~rc1), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libcares2 (>= 1.11.0~rc1), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.0+0.1.2-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-otel (= 1.26.0+0.1.0-1~focal), nginx-module-otel (= 1.26.1+0.1.0-1~focal), nginx-module-otel (= 1.26.1+0.1.0-2~focal), nginx-module-otel (= 1.26.2+0.1.0-1~focal), nginx-module-otel (= 1.26.3+0.1.1-1~focal), nginx-module-otel (= 1.26.3+0.1.2-1~focal), nginx-module-otel (= 1.28.0+0.1.2-1~focal)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.26.2+0.1.0-1~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-otel (= 1.26.0+0.1.0-1~lunar), nginx-module-otel (= 1.26.1+0.1.0-1~lunar), nginx-module-otel (= 1.26.1+0.1.0-2~lunar), nginx-module-otel (= 1.26.2+0.1.0-1~lunar)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.26.2+0.1.0-1~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-otel (= 1.26.0+0.1.0-1~mantic), nginx-module-otel (= 1.26.1+0.1.0-1~mantic), nginx-module-otel (= 1.26.1+0.1.0-2~mantic), nginx-module-otel (= 1.26.2+0.1.0-1~mantic)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-otel (= 1.26.0+0.1.0-1~noble), nginx-module-otel (= 1.26.1+0.1.0-1~noble), nginx-module-otel (= 1.26.1+0.1.0-2~noble), nginx-module-otel (= 1.26.2+0.1.0-1~noble), nginx-module-otel (= 1.26.3+0.1.1-1~noble), nginx-module-otel (= 1.26.3+0.1.2-1~noble), nginx-module-otel (= 1.28.0+0.1.2-1~noble), nginx-module-otel (= 1.28.1+0.1.2-1~noble)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.0+0.1.2-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-otel (= 1.26.2+0.1.0-1~oracular), nginx-module-otel (= 1.26.3+0.1.1-1~oracular), nginx-module-otel (= 1.26.3+0.1.2-1~oracular), nginx-module-otel (= 1.28.0+0.1.2-1~oracular)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-otel (= 1.28.0+0.1.2-1~plucky), nginx-module-otel (= 1.28.1+0.1.2-1~plucky)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-otel (= 1.28.0+0.1.2-1~questing), nginx-module-otel (= 1.28.1+0.1.2-1~questing)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-otel (= 1.26.0+0.1.0-1~jammy), nginx-module-otel (= 1.26.1+0.1.0-1~jammy), nginx-module-otel (= 1.26.1+0.1.0-2~jammy), nginx-module-otel (= 1.26.2+0.1.0-1~jammy), nginx-module-otel (= 1.26.3+0.1.1-1~jammy), nginx-module-otel (= 1.26.3+0.1.2-1~jammy), nginx-module-otel (= 1.28.0+0.1.2-1~jammy), nginx-module-otel (= 1.28.1+0.1.2-1~jammy)

  </details>

- **nginx-module-perl**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libperl5.26 (>= 5.26.0~rc1), nginx (= 1.14.0-1~artful), perl (>= 5.26.0-8ubuntu1), perlapi-5.26.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libperl5.26 (>= 5.26.0~rc1), nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, perl (>= 5.26.1-6), perl (>= 5.26.1-6ubuntu0.2), perl (>= 5.26.1-6ubuntu0.3), perlapi-5.26.1
  - provides: nginx-module-perl-r1.18.0, nginx-module-perl-r1.20.0, nginx-module-perl-r1.20.1, nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0, nginx-module-perl-r1.22.1, nginx-module-perl-r1.24.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libperl5.26 (>= 5.26.0~rc1), nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), perl (>= 5.26.2-7), perl (>= 5.26.2-7ubuntu0.1), perlapi-5.26.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libperl5.28 (>= 5.28.0), nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), perl (>= 5.28.1-6), perlapi-5.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libperl5.28 (>= 5.28.0), nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), perl (>= 5.28.1-6build1), perlapi-5.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libperl5.30 (>= 5.30.0), nginx (= 1.18.0-1~focal), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, perl (>= 5.30.0-9build1), perl (>= 5.30.0-9ubuntu0.2), perl (>= 5.30.0-9ubuntu0.3), perl (>= 5.30.0-9ubuntu0.4), perl (>= 5.30.0-9ubuntu0.5), perlapi-5.30.0
  - provides: nginx-module-perl-r1.18.0, nginx-module-perl-r1.20.0, nginx-module-perl-r1.20.1, nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0, nginx-module-perl-r1.22.1, nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libperl5.30 (>= 5.30.0), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, perl (>= 5.30.3-4), perlapi-5.30.3
  - provides: nginx-module-perl-r1.18.0, nginx-module-perl-r1.20.0, nginx-module-perl-r1.20.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libperl5.32 (>= 5.32.0~rc1), nginx-r1.20.2, perl, perlapi-5.32.1
  - provides: nginx-module-perl-r1.20.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.32 (>= 5.32.0~rc1), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, perl, perlapi-5.32.1
  - provides: nginx-module-perl-r1.20.1, nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.34 (>= 5.34.0), nginx-r1.22.1, nginx-r1.24.0, perl (>= 5.34.0-5ubuntu1), perlapi-5.34.0
  - provides: nginx-module-perl-r1.22.1, nginx-module-perl-r1.24.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.36 (>= 5.36.0), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, perl (>= 5.36.0-7), perl (>= 5.36.0-7ubuntu0.23.04.1), perlapi-5.36.0
  - provides: nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.36 (>= 5.36.0), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, perl (>= 5.36.0-9ubuntu1), perlapi-5.36.0
  - provides: nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.38t64 (>= 5.38.2), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, perl (>= 5.38.2-3.2build2), perl (>= 5.38.2-3.2ubuntu0.1), perl (>= 5.38.2-3.2ubuntu0.2), perlapi-5.38.2
  - provides: nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.38t64 (>= 5.38.2), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, perl (>= 5.38.2-5), perl (>= 5.38.2-5ubuntu0.1), perlapi-5.38.2
  - provides: nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.40 (>= 5.40.0), nginx-r1.28.0, nginx-r1.28.1, perl (>= 5.40.1-2), perl (>= 5.40.1-2ubuntu0.2), perlapi-5.40.1
  - provides: nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.40 (>= 5.40.0), nginx-r1.28.0, nginx-r1.28.1, perl (>= 5.40.1-6build1), perlapi-5.40.1
  - provides: nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.6-6~), libperl5.18 (>= 5.18.2), nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), perl (>= 5.18.2-2ubuntu1.1), perl (>= 5.18.2-2ubuntu1.3), perl (>= 5.18.2-2ubuntu1.4), perl (>= 5.18.2-2ubuntu1.6), perl (>= 5.18.2-2ubuntu1.7), perl (>= 5.18.2-2ubuntu1), perlapi-5.18.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: perl module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libperl5.22 (>= 5.22.1), nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, perl (>= 5.22.1-9), perl (>= 5.22.1-9ubuntu0.2), perl (>= 5.22.1-9ubuntu0.3), perl (>= 5.22.1-9ubuntu0.5), perl (>= 5.22.1-9ubuntu0.6), perl (>= 5.22.1-9ubuntu0.9), perlapi-5.22.1
  - provides: nginx-module-perl-r1.18.0, nginx-module-perl-r1.20.0, nginx-module-perl-r1.20.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libperl5.22 (>= 5.22.2), nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), perl (>= 5.22.2-3), perlapi-5.22.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libperl5.24 (>= 5.24.0), nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), perl (>= 5.24.1-2ubuntu1), perlapi-5.24.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.34 (>= 5.34.0), nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, perl, perlapi-5.34.0
  - provides: nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0, nginx-module-perl-r1.22.1, nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful), nginx-module-perl (= 1.14.0-1~artful)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic), nginx-module-perl (= 1.14.0-1~bionic), nginx-module-perl (= 1.14.1-1~bionic), nginx-module-perl (= 1.14.2-1~bionic), nginx-module-perl (= 1.16.0-1~bionic), nginx-module-perl (= 1.16.1-1~bionic), nginx-module-perl (= 1.18.0-1~bionic), nginx-module-perl (= 1.18.0-2~bionic), nginx-module-perl (= 1.20.0-1~bionic), nginx-module-perl (= 1.20.1-1~bionic), nginx-module-perl (= 1.20.2-1~bionic), nginx-module-perl (= 1.22.0-1~bionic), nginx-module-perl (= 1.22.1-1~bionic), nginx-module-perl (= 1.24.0-1~bionic)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), nginx-module-perl (= 1.14.1-1~cosmic), nginx-module-perl (= 1.14.2-1~cosmic), nginx-module-perl (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), nginx-module-perl (= 1.14.2-1~disco), nginx-module-perl (= 1.16.0-1~disco), nginx-module-perl (= 1.16.1-1~disco)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), nginx-module-perl (= 1.16.1-1~eoan), nginx-module-perl (= 1.18.0-1~eoan)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-perl (= 1.18.0-1~focal), nginx-module-perl (= 1.18.0-2~focal), nginx-module-perl (= 1.20.0-1~focal), nginx-module-perl (= 1.20.1-1~focal), nginx-module-perl (= 1.20.2-1~focal), nginx-module-perl (= 1.22.0-1~focal), nginx-module-perl (= 1.22.1-1~focal), nginx-module-perl (= 1.24.0-1~focal), nginx-module-perl (= 1.26.0-1~focal), nginx-module-perl (= 1.26.1-1~focal), nginx-module-perl (= 1.26.1-2~focal), nginx-module-perl (= 1.26.2-2~focal), nginx-module-perl (= 1.26.3-2~focal), nginx-module-perl (= 1.28.0-1~focal)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy), nginx-module-perl (= 1.18.0-2~groovy), nginx-module-perl (= 1.20.0-1~groovy), nginx-module-perl (= 1.20.1-1~groovy)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~hirsute), nginx-module-perl (= 1.20.2-1~hirsute)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish), nginx-module-perl (= 1.20.1-1~impish), nginx-module-perl (= 1.20.2-1~impish), nginx-module-perl (= 1.22.0-1~impish)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic), nginx-module-perl (= 1.22.1-1~kinetic), nginx-module-perl (= 1.24.0-1~kinetic)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-perl (= 1.24.0-1~lunar), nginx-module-perl (= 1.26.0-1~lunar), nginx-module-perl (= 1.26.1-1~lunar), nginx-module-perl (= 1.26.1-2~lunar), nginx-module-perl (= 1.26.2-2~lunar)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-perl (= 1.24.0-1~mantic), nginx-module-perl (= 1.26.0-1~mantic), nginx-module-perl (= 1.26.1-1~mantic), nginx-module-perl (= 1.26.1-2~mantic), nginx-module-perl (= 1.26.2-2~mantic)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-perl (= 1.26.0-1~noble), nginx-module-perl (= 1.26.1-1~noble), nginx-module-perl (= 1.26.1-2~noble), nginx-module-perl (= 1.26.2-2~noble), nginx-module-perl (= 1.26.3-2~noble), nginx-module-perl (= 1.28.0-1~noble), nginx-module-perl (= 1.28.1-1~noble)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-perl (= 1.26.2-2~oracular), nginx-module-perl (= 1.26.3-2~oracular), nginx-module-perl (= 1.28.0-1~oracular)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-perl (= 1.28.0-1~plucky), nginx-module-perl (= 1.28.1-1~plucky)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-perl (= 1.28.0-1~questing), nginx-module-perl (= 1.28.1-1~questing)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx-module-perl (= 1.10.2-1~trusty), nginx-module-perl (= 1.10.3-1~trusty), nginx-module-perl (= 1.12.0-1~trusty), nginx-module-perl (= 1.12.1-1~trusty), nginx-module-perl (= 1.12.2-1~trusty), nginx-module-perl (= 1.14.0-1~trusty), nginx-module-perl (= 1.14.1-1~trusty), nginx-module-perl (= 1.14.2-1~trusty), nginx-module-perl (= 1.16.0-1~trusty)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial), nginx-module-perl (= 1.10.2-1~xenial), nginx-module-perl (= 1.10.3-1~xenial), nginx-module-perl (= 1.12.0-1~xenial), nginx-module-perl (= 1.12.1-1~xenial), nginx-module-perl (= 1.12.2-1~xenial), nginx-module-perl (= 1.14.0-1~xenial), nginx-module-perl (= 1.14.1-1~xenial), nginx-module-perl (= 1.14.2-1~xenial), nginx-module-perl (= 1.16.0-1~xenial), nginx-module-perl (= 1.16.1-1~xenial), nginx-module-perl (= 1.18.0-1~xenial), nginx-module-perl (= 1.18.0-2~xenial), nginx-module-perl (= 1.20.0-1~xenial), nginx-module-perl (= 1.20.1-1~xenial)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), nginx-module-perl (= 1.10.3-1~yakkety), nginx-module-perl (= 1.12.0-1~yakkety), nginx-module-perl (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), nginx-module-perl (= 1.12.1-1~zesty), nginx-module-perl (= 1.12.2-1~zesty)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-perl (= 1.20.2-1~jammy), nginx-module-perl (= 1.22.0-1~jammy), nginx-module-perl (= 1.22.1-1~jammy), nginx-module-perl (= 1.24.0-1~jammy), nginx-module-perl (= 1.26.0-1~jammy), nginx-module-perl (= 1.26.1-1~jammy), nginx-module-perl (= 1.26.1-2~jammy), nginx-module-perl (= 1.26.2-2~jammy), nginx-module-perl (= 1.26.3-2~jammy), nginx-module-perl (= 1.28.0-1~jammy), nginx-module-perl (= 1.28.1-1~jammy)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.14.0-1~artful)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-xslt-r1.18.0, nginx-module-xslt-r1.20.0, nginx-module-xslt-r1.20.1, nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0, nginx-module-xslt-r1.22.1, nginx-module-xslt-r1.24.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.18.0-1~focal), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-xslt-r1.18.0, nginx-module-xslt-r1.20.0, nginx-module-xslt-r1.20.1, nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0, nginx-module-xslt-r1.22.1, nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-xslt-r1.18.0, nginx-module-xslt-r1.20.0, nginx-module-xslt-r1.20.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.20.2
  - provides: nginx-module-xslt-r1.20.2

  </details>

- **nginx-module-xslt**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-xslt-r1.20.1, nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.22.1, nginx-r1.24.0
  - provides: nginx-module-xslt-r1.22.1, nginx-module-xslt-r1.24.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2

  </details>

- **nginx-module-xslt**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2
  - provides: nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0
  - provides: nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2-16 (>= 2.14.1), libxslt1.1 (>= 1.1.25), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.10.0-1~trusty), nginx (= 1.10.1-1~trusty), nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: xslt module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.10.0-1~xenial), nginx (= 1.10.1-1~xenial), nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1
  - provides: nginx-module-xslt-r1.18.0, nginx-module-xslt-r1.20.0, nginx-module-xslt-r1.20.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0, nginx-module-xslt-r1.22.1, nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.14.0-1~artful
  - Architectures: amd64, i386
  - Suite: artful
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~artful), nginx-module-xslt (= 1.14.0-1~artful)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.24.0-1~bionic
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.0-1~bionic), nginx (= 1.14.1-1~bionic), nginx (= 1.14.2-1~bionic), nginx (= 1.16.0-1~bionic), nginx (= 1.16.1-1~bionic), nginx (= 1.18.0-1~bionic), nginx (= 1.18.0-2~bionic), nginx (= 1.20.0-1~bionic), nginx (= 1.20.1-1~bionic), nginx (= 1.20.2-1~bionic), nginx (= 1.22.0-1~bionic), nginx (= 1.22.1-1~bionic), nginx (= 1.24.0-1~bionic), nginx-module-xslt (= 1.14.0-1~bionic), nginx-module-xslt (= 1.14.1-1~bionic), nginx-module-xslt (= 1.14.2-1~bionic), nginx-module-xslt (= 1.16.0-1~bionic), nginx-module-xslt (= 1.16.1-1~bionic), nginx-module-xslt (= 1.18.0-1~bionic), nginx-module-xslt (= 1.18.0-2~bionic), nginx-module-xslt (= 1.20.0-1~bionic), nginx-module-xslt (= 1.20.1-1~bionic), nginx-module-xslt (= 1.20.2-1~bionic), nginx-module-xslt (= 1.22.0-1~bionic), nginx-module-xslt (= 1.22.1-1~bionic), nginx-module-xslt (= 1.24.0-1~bionic)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.16.0-1~cosmic
  - Architectures: amd64
  - Suite: cosmic
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.1-2~cosmic), nginx (= 1.14.2-1~cosmic), nginx (= 1.16.0-1~cosmic), nginx-module-xslt (= 1.14.1-1~cosmic), nginx-module-xslt (= 1.14.2-1~cosmic), nginx-module-xslt (= 1.16.0-1~cosmic)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.16.1-1~disco
  - Architectures: amd64
  - Suite: disco
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.14.2-1~disco), nginx (= 1.16.0-1~disco), nginx (= 1.16.1-1~disco), nginx-module-xslt (= 1.14.2-1~disco), nginx-module-xslt (= 1.16.0-1~disco), nginx-module-xslt (= 1.16.1-1~disco)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.18.0-1~eoan
  - Architectures: amd64
  - Suite: eoan
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.1-1~eoan), nginx (= 1.18.0-1~eoan), nginx-module-xslt (= 1.16.1-1~eoan), nginx-module-xslt (= 1.18.0-1~eoan)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.0-1~focal
  - Architectures: amd64, arm64, s390x
  - Suite: focal
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-1~focal), nginx (= 1.18.0-2~focal), nginx (= 1.20.0-1~focal), nginx (= 1.20.1-1~focal), nginx (= 1.20.2-1~focal), nginx (= 1.22.0-1~focal), nginx (= 1.22.1-1~focal), nginx (= 1.24.0-1~focal), nginx (= 1.26.0-1~focal), nginx (= 1.26.1-1~focal), nginx (= 1.26.1-2~focal), nginx (= 1.26.2-1~focal), nginx (= 1.26.3-1~focal), nginx (= 1.28.0-1~focal), nginx-module-xslt (= 1.18.0-1~focal), nginx-module-xslt (= 1.18.0-2~focal), nginx-module-xslt (= 1.20.0-1~focal), nginx-module-xslt (= 1.20.1-1~focal), nginx-module-xslt (= 1.20.2-1~focal), nginx-module-xslt (= 1.22.0-1~focal), nginx-module-xslt (= 1.22.1-1~focal), nginx-module-xslt (= 1.24.0-1~focal), nginx-module-xslt (= 1.26.0-1~focal), nginx-module-xslt (= 1.26.1-1~focal), nginx-module-xslt (= 1.26.1-2~focal), nginx-module-xslt (= 1.26.2-2~focal), nginx-module-xslt (= 1.26.3-2~focal), nginx-module-xslt (= 1.28.0-1~focal)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.20.1-1~groovy
  - Architectures: amd64, arm64
  - Suite: groovy
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.18.0-2~groovy), nginx (= 1.20.0-1~groovy), nginx (= 1.20.1-1~groovy), nginx-module-xslt (= 1.18.0-2~groovy), nginx-module-xslt (= 1.20.0-1~groovy), nginx-module-xslt (= 1.20.1-1~groovy)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.20.2-1~hirsute
  - Architectures: amd64, arm64
  - Suite: hirsute
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~hirsute), nginx-module-xslt (= 1.20.2-1~hirsute)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.22.0-1~impish
  - Architectures: amd64, arm64
  - Suite: impish
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~impish), nginx (= 1.20.2-1~impish), nginx (= 1.22.0-1~impish), nginx-module-xslt (= 1.20.1-1~impish), nginx-module-xslt (= 1.20.2-1~impish), nginx-module-xslt (= 1.22.0-1~impish)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.24.0-1~kinetic
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.22.1-1~kinetic), nginx (= 1.24.0-1~kinetic), nginx-module-xslt (= 1.22.1-1~kinetic), nginx-module-xslt (= 1.24.0-1~kinetic)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.26.2-2~lunar
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~lunar), nginx (= 1.26.0-1~lunar), nginx (= 1.26.1-1~lunar), nginx (= 1.26.1-2~lunar), nginx (= 1.26.2-1~lunar), nginx-module-xslt (= 1.24.0-1~lunar), nginx-module-xslt (= 1.26.0-1~lunar), nginx-module-xslt (= 1.26.1-1~lunar), nginx-module-xslt (= 1.26.1-2~lunar), nginx-module-xslt (= 1.26.2-2~lunar)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.26.2-2~mantic
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~mantic), nginx (= 1.26.0-1~mantic), nginx (= 1.26.1-1~mantic), nginx (= 1.26.1-2~mantic), nginx (= 1.26.2-1~mantic), nginx-module-xslt (= 1.24.0-1~mantic), nginx-module-xslt (= 1.26.0-1~mantic), nginx-module-xslt (= 1.26.1-1~mantic), nginx-module-xslt (= 1.26.1-2~mantic), nginx-module-xslt (= 1.26.2-2~mantic)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~noble
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~noble), nginx (= 1.26.1-1~noble), nginx (= 1.26.1-2~noble), nginx (= 1.26.2-1~noble), nginx (= 1.26.3-1~noble), nginx (= 1.28.0-1~noble), nginx (= 1.28.1-1~noble), nginx-module-xslt (= 1.26.0-1~noble), nginx-module-xslt (= 1.26.1-1~noble), nginx-module-xslt (= 1.26.1-2~noble), nginx-module-xslt (= 1.26.2-2~noble), nginx-module-xslt (= 1.26.3-2~noble), nginx-module-xslt (= 1.28.0-1~noble), nginx-module-xslt (= 1.28.1-1~noble)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.0-1~oracular
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.2-1~oracular), nginx (= 1.26.3-1~oracular), nginx (= 1.28.0-1~oracular), nginx-module-xslt (= 1.26.2-2~oracular), nginx-module-xslt (= 1.26.3-2~oracular), nginx-module-xslt (= 1.28.0-1~oracular)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~plucky
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~plucky), nginx (= 1.28.1-1~plucky), nginx-module-xslt (= 1.28.0-1~plucky), nginx-module-xslt (= 1.28.1-1~plucky)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~questing
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~questing), nginx (= 1.28.1-1~questing), nginx-module-xslt (= 1.28.0-1~questing), nginx-module-xslt (= 1.28.1-1~questing)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.16.0-1~trusty
  - Architectures: amd64, arm64, i386
  - Suite: trusty
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~trusty), nginx (= 1.10.3-1~trusty), nginx (= 1.12.0-1~trusty), nginx (= 1.12.1-1~trusty), nginx (= 1.12.2-1~trusty), nginx (= 1.14.0-1~trusty), nginx (= 1.14.1-1~trusty), nginx (= 1.14.2-1~trusty), nginx (= 1.16.0-1~trusty), nginx-module-xslt (= 1.10.2-1~trusty), nginx-module-xslt (= 1.10.3-1~trusty), nginx-module-xslt (= 1.12.0-1~trusty), nginx-module-xslt (= 1.12.1-1~trusty), nginx-module-xslt (= 1.12.2-1~trusty), nginx-module-xslt (= 1.14.0-1~trusty), nginx-module-xslt (= 1.14.1-1~trusty), nginx-module-xslt (= 1.14.2-1~trusty), nginx-module-xslt (= 1.16.0-1~trusty)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.20.1-1~xenial
  - Architectures: amd64, arm64, i386, ppc64el
  - Suite: xenial
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~xenial), nginx (= 1.10.3-1~xenial), nginx (= 1.12.0-1~xenial), nginx (= 1.12.1-1~xenial), nginx (= 1.12.2-1~xenial), nginx (= 1.14.0-1~xenial), nginx (= 1.14.1-1~xenial), nginx (= 1.14.2-1~xenial), nginx (= 1.16.0-1~xenial), nginx (= 1.16.1-1~xenial), nginx (= 1.18.0-1~xenial), nginx (= 1.18.0-2~xenial), nginx (= 1.20.0-1~xenial), nginx (= 1.20.1-1~xenial), nginx-module-xslt (= 1.10.2-1~xenial), nginx-module-xslt (= 1.10.3-1~xenial), nginx-module-xslt (= 1.12.0-1~xenial), nginx-module-xslt (= 1.12.1-1~xenial), nginx-module-xslt (= 1.12.2-1~xenial), nginx-module-xslt (= 1.14.0-1~xenial), nginx-module-xslt (= 1.14.1-1~xenial), nginx-module-xslt (= 1.14.2-1~xenial), nginx-module-xslt (= 1.16.0-1~xenial), nginx-module-xslt (= 1.16.1-1~xenial), nginx-module-xslt (= 1.18.0-1~xenial), nginx-module-xslt (= 1.18.0-2~xenial), nginx-module-xslt (= 1.20.0-1~xenial), nginx-module-xslt (= 1.20.1-1~xenial)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.12.1-1~yakkety
  - Architectures: amd64, i386
  - Suite: yakkety
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.3-1~yakkety), nginx (= 1.12.0-1~yakkety), nginx (= 1.12.1-1~yakkety), nginx-module-xslt (= 1.10.3-1~yakkety), nginx-module-xslt (= 1.12.0-1~yakkety), nginx-module-xslt (= 1.12.1-1~yakkety)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.12.2-1~zesty
  - Architectures: amd64, i386
  - Suite: zesty
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.1-1~zesty), nginx (= 1.12.2-1~zesty), nginx-module-xslt (= 1.12.1-1~zesty), nginx-module-xslt (= 1.12.2-1~zesty)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~jammy
  - Architectures: amd64, arm64, s390x
  - Suite: jammy
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.2-1~jammy), nginx (= 1.22.0-1~jammy), nginx (= 1.22.1-1~jammy), nginx (= 1.24.0-1~jammy), nginx (= 1.26.0-1~jammy), nginx (= 1.26.1-1~jammy), nginx (= 1.26.1-2~jammy), nginx (= 1.26.2-1~jammy), nginx (= 1.26.3-1~jammy), nginx (= 1.28.0-1~jammy), nginx (= 1.28.1-1~jammy), nginx-module-xslt (= 1.20.2-1~jammy), nginx-module-xslt (= 1.22.0-1~jammy), nginx-module-xslt (= 1.22.1-1~jammy), nginx-module-xslt (= 1.24.0-1~jammy), nginx-module-xslt (= 1.26.0-1~jammy), nginx-module-xslt (= 1.26.1-1~jammy), nginx-module-xslt (= 1.26.1-2~jammy), nginx-module-xslt (= 1.26.2-2~jammy), nginx-module-xslt (= 1.26.3-2~jammy), nginx-module-xslt (= 1.28.0-1~jammy), nginx-module-xslt (= 1.28.1-1~jammy)

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: artful
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: https://www.nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: bionic
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: cosmic
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: https://www.nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: disco
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: eoan
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: focal
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: groovy
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: impish
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: kinetic
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: lunar
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: mantic
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: noble
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: oracular
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: plucky
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: questing
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: trusty
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: https://www.nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: xenial
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: yakkety
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: zesty
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: jammy
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

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

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install nginx
- Repo tags: web, server
- Key notes: NGINX Open Source official repository key
- Key tags: web, server
