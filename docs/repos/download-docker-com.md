# Docker

## Repository
- Repository ID: `download-docker-com`
- Base URL: `https://download.docker.com/linux/ubuntu`
- Host: `download.docker.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://docs.docker.com/engine/install/ubuntu

## Suites
- Suite: `{{`
  - Components: }}, ansible_distribution_release, docker_apt_repo_distrib, stable
  - Architectures: {{, amd64
  - Observed OSes: (not listed)
- Suite: `${UBUNTU_BASE_VERSION}`
  - Components: /dev/null, /etc/apt/sources.list.d/docker.list, >, |, stable", sudo, tee
  - Architectures: $(dpkg
  - Observed OSes: (not listed)
- Suite: `bionic`
  - Components: stable
  - Architectures: amd64
  - Observed OSes: (not listed)
- Suite: `eoan`
  - Components: stable
  - Architectures: amd64
  - Observed OSes: (not listed)
- Suite: `focal`
  - Components: stable
  - Architectures: amd64, arm64
  - Observed OSes: (not listed)
- Suite: `noble`
  - Components: stable
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `docker-gpg-8d81803c0ebfcd88`
- Expected fingerprints:
  - 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
- Key source URL: https://download.docker.com/linux/ubuntu/gpg

## Install instructions

### Suite: {{

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu {{ }} ansible_distribution_release docker_apt_repo_distrib stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-{{.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu {{ }} ansible_distribution_release docker_apt_repo_distrib stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-{{.list >/dev/null
sudo apt-get update
```

### Suite: ${UBUNTU_BASE_VERSION}

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu ${UBUNTU_BASE_VERSION} /dev/null /etc/apt/sources.list.d/docker.list > | stable" sudo tee" | sudo tee /etc/apt/sources.list.d/download-docker-com-${UBUNTU_BASE_VERSION}.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu ${UBUNTU_BASE_VERSION} /dev/null /etc/apt/sources.list.d/docker.list > | stable" sudo tee" | sudo tee /etc/apt/sources.list.d/download-docker-com-${UBUNTU_BASE_VERSION}.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-bionic.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu eoan stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu eoan stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-focal.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/download-docker-com-noble.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: download.docker.com
