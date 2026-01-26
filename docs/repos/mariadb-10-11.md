# MariaDB 10.11 (Stable)

## Repository
- Repository ID: `mariadb-10-11`
- Base URL: `https://deb.mariadb.org/10.11/ubuntu`
- Host: `deb.mariadb.org`

## Upstream documentation
- Documentation URL: https://mariadb.org/download/?t=repo-config
- Key documentation URL: https://downloads.mariadb.org/mariadb-release-signing-key

## Suites
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04, ubuntu-22.04
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04
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

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `mariadb`
- Expected fingerprints:
  - 177F4010FE56CA3336300305F1656F24C74CD1D8
- Key source URL: https://mariadb.org/mariadb_release_signing_key.pgp

## Install instructions

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu bionic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-bionic.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-focal.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-jammy.list >/dev/null
sudo apt-get update
```

### Suite: kinetic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-kinetic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu kinetic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-kinetic.list >/dev/null
sudo apt-get update
```

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu lunar main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-lunar.list >/dev/null
sudo apt-get update
```

### Suite: mantic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-mantic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu mantic main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-mantic.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu noble main" | sudo tee /etc/apt/sources.list.d/mariadb-10-11-noble.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: MariaDB 10.11 repository for Ubuntu
- Repo tags: database, mysql
- Key notes: MariaDB APT repository key (SHA-256)
- Key tags: database, mysql
