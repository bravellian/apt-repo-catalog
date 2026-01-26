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

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install nginx
- Repo tags: web, server
- Key notes: NGINX Open Source official repository key
- Key tags: web, server
