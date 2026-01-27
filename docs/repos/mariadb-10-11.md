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

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (259)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a>
</div>


### <a id="packages-G"></a>G

- **galera-4**
  - Latest version: 26.4.14-ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgcc1 (>= 1:3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libstdc++6 (>= 7)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera4, percona-xtradb-cluster-galera-26, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.22), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-26, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera-4, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.24-ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-26, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera-4, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.14-ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera4, percona-xtradb-cluster-galera-26, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.16-ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera4, percona-xtradb-cluster-galera-26, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.19-ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera4, percona-xtradb-cluster-galera-26, wsrep

  </details>

- **galera-4**
  - Latest version: 26.4.24-ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Replication framework for transactional applications
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4`
  - Install (apt): `sudo apt install galera-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-26, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera-4, wsrep

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.14-ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.13-bionic), galera-4 (= 26.4.14-ubu1804)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.20-ubu2004), galera-4 (= 26.4.21-ubu2004), galera-4 (= 26.4.22-ubu2004)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.24-ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.22-ubu2204), galera-4 (= 26.4.23-ubu2204), galera-4 (= 26.4.24-ubu2204)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.14-ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.14-ubu2210)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.16-ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.14-ubu2304), galera-4 (= 26.4.16-ubu2304)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.19-ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.16-ubu2310), galera-4 (= 26.4.18-ubu2310), galera-4 (= 26.4.19-ubu2310)

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.24-ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: debugging symbols for galera-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-4-dbg`
  - Install (apt): `sudo apt install galera-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-4 (= 26.4.22-ubu2404), galera-4 (= 26.4.23-ubu2404), galera-4 (= 26.4.24-ubu2404)

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.14-ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.65.1, libc6 (>= 2.14), libc6 (>= 2.17), libgcc1 (>= 1:3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), libstdc++6 (>= 7), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd2, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x
  - breaks: percona-xtradb-cluster-galera-2.x
  - replaces: percona-xtradb-cluster-galera-2.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.71.0, libc6 (>= 2.17), libc6 (>= 2.22), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.24-ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.74.0 (>= 1.74.0), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.14-ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.74.0 (>= 1.74.0), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd2, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x
  - breaks: percona-xtradb-cluster-galera-2.x
  - replaces: percona-xtradb-cluster-galera-2.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.16-ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.74.0 (>= 1.74.0), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd2, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x
  - breaks: percona-xtradb-cluster-galera-2.x
  - replaces: percona-xtradb-cluster-galera-2.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.19-ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.74.0 (>= 1.74.0+ds1), libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd2, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x
  - breaks: percona-xtradb-cluster-galera-2.x
  - replaces: percona-xtradb-cluster-galera-2.x

  </details>

- **galera-arbitrator-4**
  - Latest version: 26.4.24-ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Galera arbitrator daemon
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4`
  - Install (apt): `sudo apt install galera-arbitrator-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: database
  - Priority: optional
  - depends: libboost-program-options1.83.0 (>= 1.83.0), libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.14-ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.13-bionic), galera-arbitrator-4 (= 26.4.14-ubu1804)
  - conflicts: percona-xtradb-cluster-galera-2.x-dbg

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.20-ubu2004), galera-arbitrator-4 (= 26.4.21-ubu2004), galera-arbitrator-4 (= 26.4.22-ubu2004)

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.24-ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.22-ubu2204), galera-arbitrator-4 (= 26.4.23-ubu2204), galera-arbitrator-4 (= 26.4.24-ubu2204)

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.14-ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.14-ubu2210)
  - conflicts: percona-xtradb-cluster-galera-2.x-dbg

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.16-ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.14-ubu2304), galera-arbitrator-4 (= 26.4.16-ubu2304)
  - conflicts: percona-xtradb-cluster-galera-2.x-dbg

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.19-ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.16-ubu2310), galera-arbitrator-4 (= 26.4.18-ubu2310), galera-arbitrator-4 (= 26.4.19-ubu2310)
  - conflicts: percona-xtradb-cluster-galera-2.x-dbg

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.24-ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: debugging symbols for galera-arbitrator-4
  - Homepage: https://www.galeracluster.com/
  - Install: `sudo apt-get install galera-arbitrator-4-dbg`
  - Install (apt): `sudo apt install galera-arbitrator-4-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Codership Oy <info@codership.com>
  - Section: debug
  - Priority: extra
  - depends: galera-arbitrator-4 (= 26.4.22-ubu2404), galera-arbitrator-4 (= 26.4.23-ubu2404), galera-arbitrator-4 (= 26.4.24-ubu2404)

  </details>


### <a id="packages-L"></a>L

- **libmariadb-dev**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libmariadb3 (= 1:10.11.3+maria~ubu1804), libmariadb3 (= 1:10.11.4+maria~ubu1804), libmariadb3 (= 1:10.11.5+maria~ubu1804), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.3+maria~ubu1804), libmysqlclient-dev (<< 1:10.11.4+maria~ubu1804), libmysqlclient-dev (<< 1:10.11.5+maria~ubu1804), libmysqld-dev (<< 1:10.11.3+maria~ubu1804), libmysqld-dev (<< 1:10.11.4+maria~ubu1804), libmysqld-dev (<< 1:10.11.5+maria~ubu1804)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.3+maria~ubu1804), libmysqlclient-dev (<< 1:10.11.4+maria~ubu1804), libmysqlclient-dev (<< 1:10.11.5+maria~ubu1804), libmysqld-dev (<< 1:10.11.3+maria~ubu1804), libmysqld-dev (<< 1:10.11.4+maria~ubu1804), libmysqld-dev (<< 1:10.11.5+maria~ubu1804)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libmariadb3 (= 1:10.11.10+maria~ubu2004), libmariadb3 (= 1:10.11.11+maria~ubu2004), libmariadb3 (= 1:10.11.13+maria~ubu2004), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.10+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.11+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev (<< 1:10.11.10+maria~ubu2004), libmysqld-dev (<< 1:10.11.11+maria~ubu2004), libmysqld-dev (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.10+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.11+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev (<< 1:10.11.10+maria~ubu2004), libmysqld-dev (<< 1:10.11.11+maria~ubu2004), libmysqld-dev (<< 1:10.11.13+maria~ubu2004)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libmariadb3 (= 1:10.11.13+maria~ubu2204), libmariadb3 (= 1:10.11.14+maria~ubu2204), libmariadb3 (= 1:10.11.15+maria~ubu2204), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.13+maria~ubu2204), libmysqlclient-dev (<< 1:10.11.14+maria~ubu2204), libmysqlclient-dev (<< 1:10.11.15+maria~ubu2204), libmysqld-dev (<< 1:10.11.13+maria~ubu2204), libmysqld-dev (<< 1:10.11.14+maria~ubu2204), libmysqld-dev (<< 1:10.11.15+maria~ubu2204)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.13+maria~ubu2204), libmysqlclient-dev (<< 1:10.11.14+maria~ubu2204), libmysqlclient-dev (<< 1:10.11.15+maria~ubu2204), libmysqld-dev (<< 1:10.11.13+maria~ubu2204), libmysqld-dev (<< 1:10.11.14+maria~ubu2204), libmysqld-dev (<< 1:10.11.15+maria~ubu2204)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libmariadb3 (= 1:10.11.3+maria~ubu2210), libmariadb3 (= 1:10.11.4+maria~ubu2210), libmariadb3 (= 1:10.11.5+maria~ubu2210), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.3+maria~ubu2210), libmysqlclient-dev (<< 1:10.11.4+maria~ubu2210), libmysqlclient-dev (<< 1:10.11.5+maria~ubu2210), libmysqld-dev (<< 1:10.11.3+maria~ubu2210), libmysqld-dev (<< 1:10.11.4+maria~ubu2210), libmysqld-dev (<< 1:10.11.5+maria~ubu2210)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.3+maria~ubu2210), libmysqlclient-dev (<< 1:10.11.4+maria~ubu2210), libmysqlclient-dev (<< 1:10.11.5+maria~ubu2210), libmysqld-dev (<< 1:10.11.3+maria~ubu2210), libmysqld-dev (<< 1:10.11.4+maria~ubu2210), libmysqld-dev (<< 1:10.11.5+maria~ubu2210)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libmariadb3 (= 1:10.11.5+maria~ubu2304), libmariadb3 (= 1:10.11.6+maria~ubu2304), libmariadb3 (= 1:10.11.7+maria~ubu2304), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.5+maria~ubu2304), libmysqlclient-dev (<< 1:10.11.6+maria~ubu2304), libmysqlclient-dev (<< 1:10.11.7+maria~ubu2304), libmysqld-dev (<< 1:10.11.5+maria~ubu2304), libmysqld-dev (<< 1:10.11.6+maria~ubu2304), libmysqld-dev (<< 1:10.11.7+maria~ubu2304)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.5+maria~ubu2304), libmysqlclient-dev (<< 1:10.11.6+maria~ubu2304), libmysqlclient-dev (<< 1:10.11.7+maria~ubu2304), libmysqld-dev (<< 1:10.11.5+maria~ubu2304), libmysqld-dev (<< 1:10.11.6+maria~ubu2304), libmysqld-dev (<< 1:10.11.7+maria~ubu2304)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libmariadb3 (= 1:10.11.7+maria~ubu2310), libmariadb3 (= 1:10.11.8+maria~ubu2310), libmariadb3 (= 1:10.11.9+maria~ubu2310), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.7+maria~ubu2310), libmysqlclient-dev (<< 1:10.11.8+maria~ubu2310), libmysqlclient-dev (<< 1:10.11.9+maria~ubu2310), libmysqld-dev (<< 1:10.11.7+maria~ubu2310), libmysqld-dev (<< 1:10.11.8+maria~ubu2310), libmysqld-dev (<< 1:10.11.9+maria~ubu2310)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.7+maria~ubu2310), libmysqlclient-dev (<< 1:10.11.8+maria~ubu2310), libmysqlclient-dev (<< 1:10.11.9+maria~ubu2310), libmysqld-dev (<< 1:10.11.7+maria~ubu2310), libmysqld-dev (<< 1:10.11.8+maria~ubu2310), libmysqld-dev (<< 1:10.11.9+maria~ubu2310)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database development files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev`
  - Install (apt): `sudo apt install libmariadb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libmariadb3 (= 1:10.11.13+maria~ubu2404), libmariadb3 (= 1:10.11.14+maria~ubu2404), libmariadb3 (= 1:10.11.15+maria~ubu2404), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.13+maria~ubu2404), libmysqlclient-dev (<< 1:10.11.14+maria~ubu2404), libmysqlclient-dev (<< 1:10.11.15+maria~ubu2404), libmysqld-dev (<< 1:10.11.13+maria~ubu2404), libmysqld-dev (<< 1:10.11.14+maria~ubu2404), libmysqld-dev (<< 1:10.11.15+maria~ubu2404)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.13+maria~ubu2404), libmysqlclient-dev (<< 1:10.11.14+maria~ubu2404), libmysqlclient-dev (<< 1:10.11.15+maria~ubu2404), libmysqld-dev (<< 1:10.11.13+maria~ubu2404), libmysqld-dev (<< 1:10.11.14+maria~ubu2404), libmysqld-dev (<< 1:10.11.15+maria~ubu2404)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.3+maria~ubu1804), libmariadb-dev (= 1:10.11.4+maria~ubu1804), libmariadb-dev (= 1:10.11.5+maria~ubu1804)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.3+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.4+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.5+maria~ubu1804), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.3+maria~ubu1804), libmariadb-dev (<< 1:10.11.4+maria~ubu1804), libmariadb-dev (<< 1:10.11.5+maria~ubu1804)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.3+maria~ubu1804), libmariadb-dev (<< 1:10.11.4+maria~ubu1804), libmariadb-dev (<< 1:10.11.5+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.3+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.4+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.5+maria~ubu1804), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.10+maria~ubu2004), libmariadb-dev (= 1:10.11.11+maria~ubu2004), libmariadb-dev (= 1:10.11.13+maria~ubu2004)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.10+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.11+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2004), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.10+maria~ubu2004), libmariadb-dev (<< 1:10.11.11+maria~ubu2004), libmariadb-dev (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.10+maria~ubu2004), libmariadb-dev (<< 1:10.11.11+maria~ubu2004), libmariadb-dev (<< 1:10.11.13+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.10+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.11+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2004), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.13+maria~ubu2204), libmariadb-dev (= 1:10.11.14+maria~ubu2204), libmariadb-dev (= 1:10.11.15+maria~ubu2204)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.13+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2204), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.13+maria~ubu2204), libmariadb-dev (<< 1:10.11.14+maria~ubu2204), libmariadb-dev (<< 1:10.11.15+maria~ubu2204)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.13+maria~ubu2204), libmariadb-dev (<< 1:10.11.14+maria~ubu2204), libmariadb-dev (<< 1:10.11.15+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2204), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.3+maria~ubu2210), libmariadb-dev (= 1:10.11.4+maria~ubu2210), libmariadb-dev (= 1:10.11.5+maria~ubu2210)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.3+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.4+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2210), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.3+maria~ubu2210), libmariadb-dev (<< 1:10.11.4+maria~ubu2210), libmariadb-dev (<< 1:10.11.5+maria~ubu2210)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.3+maria~ubu2210), libmariadb-dev (<< 1:10.11.4+maria~ubu2210), libmariadb-dev (<< 1:10.11.5+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.3+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.4+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2210), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.5+maria~ubu2304), libmariadb-dev (= 1:10.11.6+maria~ubu2304), libmariadb-dev (= 1:10.11.7+maria~ubu2304)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.5+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.6+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2304), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.5+maria~ubu2304), libmariadb-dev (<< 1:10.11.6+maria~ubu2304), libmariadb-dev (<< 1:10.11.7+maria~ubu2304)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.5+maria~ubu2304), libmariadb-dev (<< 1:10.11.6+maria~ubu2304), libmariadb-dev (<< 1:10.11.7+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.6+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2304), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.7+maria~ubu2310), libmariadb-dev (= 1:10.11.8+maria~ubu2310), libmariadb-dev (= 1:10.11.9+maria~ubu2310)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.7+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.8+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.9+maria~ubu2310), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.7+maria~ubu2310), libmariadb-dev (<< 1:10.11.8+maria~ubu2310), libmariadb-dev (<< 1:10.11.9+maria~ubu2310)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.7+maria~ubu2310), libmariadb-dev (<< 1:10.11.8+maria~ubu2310), libmariadb-dev (<< 1:10.11.9+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.8+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.9+maria~ubu2310), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB Connector/C, compatibility symlinks
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb-dev-compat`
  - Install (apt): `sudo apt install libmariadb-dev-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.13+maria~ubu2404), libmariadb-dev (= 1:10.11.14+maria~ubu2404), libmariadb-dev (= 1:10.11.15+maria~ubu2404)
  - conflicts: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadbclient-dev (<< 1:10.11.13+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2404), libmariadbclient-dev-compat, libmysqlclient-dev, libmysqlclient10-dev, libmysqlclient12-dev, libmysqlclient14-dev, libmysqlclient15-dev, libmysqlclient16-dev
  - breaks: libmariadb-dev (<< 1:10.11.13+maria~ubu2404), libmariadb-dev (<< 1:10.11.14+maria~ubu2404), libmariadb-dev (<< 1:10.11.15+maria~ubu2404)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-client-lgpl-dev-compat, libmariadb-dev (<< 1:10.11.13+maria~ubu2404), libmariadb-dev (<< 1:10.11.14+maria~ubu2404), libmariadb-dev (<< 1:10.11.15+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2404), libmariadbclient-dev-compat, libmysqlclient-dev
  - provides: libmariadb-client-lgpl-dev-compat, libmariadbclient-dev-compat, libmysqlclient-dev

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libssl1.1 (>= 1.1.1), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.3+maria~ubu1804), libmariadbclient18 (<< 1:10.11.4+maria~ubu1804), libmariadbclient18 (<< 1:10.11.5+maria~ubu1804)
  - replaces: libmariadbclient18 (<< 1:10.11.3+maria~ubu1804), libmariadbclient18 (<< 1:10.11.4+maria~ubu1804), libmariadbclient18 (<< 1:10.11.5+maria~ubu1804)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libssl1.1 (>= 1.1.1), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.10+maria~ubu2004), libmariadbclient18 (<< 1:10.11.11+maria~ubu2004), libmariadbclient18 (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadbclient18 (<< 1:10.11.10+maria~ubu2004), libmariadbclient18 (<< 1:10.11.11+maria~ubu2004), libmariadbclient18 (<< 1:10.11.13+maria~ubu2004)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3 (>= 3.0.0~~alpha1), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.13+maria~ubu2204), libmariadbclient18 (<< 1:10.11.14+maria~ubu2204), libmariadbclient18 (<< 1:10.11.15+maria~ubu2204)
  - replaces: libmariadbclient18 (<< 1:10.11.13+maria~ubu2204), libmariadbclient18 (<< 1:10.11.14+maria~ubu2204), libmariadbclient18 (<< 1:10.11.15+maria~ubu2204)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3 (>= 3.0.0), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.3+maria~ubu2210), libmariadbclient18 (<< 1:10.11.4+maria~ubu2210), libmariadbclient18 (<< 1:10.11.5+maria~ubu2210)
  - replaces: libmariadbclient18 (<< 1:10.11.3+maria~ubu2210), libmariadbclient18 (<< 1:10.11.4+maria~ubu2210), libmariadbclient18 (<< 1:10.11.5+maria~ubu2210)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3 (>= 3.0.0), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.5+maria~ubu2304), libmariadbclient18 (<< 1:10.11.6+maria~ubu2304), libmariadbclient18 (<< 1:10.11.7+maria~ubu2304)
  - replaces: libmariadbclient18 (<< 1:10.11.5+maria~ubu2304), libmariadbclient18 (<< 1:10.11.6+maria~ubu2304), libmariadbclient18 (<< 1:10.11.7+maria~ubu2304)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3 (>= 3.0.0), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.7+maria~ubu2310), libmariadbclient18 (<< 1:10.11.8+maria~ubu2310), libmariadbclient18 (<< 1:10.11.9+maria~ubu2310)
  - replaces: libmariadbclient18 (<< 1:10.11.7+maria~ubu2310), libmariadbclient18 (<< 1:10.11.8+maria~ubu2310), libmariadbclient18 (<< 1:10.11.9+maria~ubu2310)

  </details>

- **libmariadb3**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database client library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3`
  - Install (apt): `sudo apt install libmariadb3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3t64 (>= 3.0.0), mariadb-common, zlib1g (>= 1:1.1.4)
  - conflicts: libmariadbclient18 (<< 10.2.0), mariadb-galera-server-10.0, mariadb-galera-server-5.5, mariadb-server-10.0, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5
  - breaks: libmariadbclient18 (<< 1:10.11.13+maria~ubu2404), libmariadbclient18 (<< 1:10.11.14+maria~ubu2404), libmariadbclient18 (<< 1:10.11.15+maria~ubu2404)
  - replaces: libmariadbclient18 (<< 1:10.11.13+maria~ubu2404), libmariadbclient18 (<< 1:10.11.14+maria~ubu2404), libmariadbclient18 (<< 1:10.11.15+maria~ubu2404)

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadb3-compat**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database client library MySQL compat package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadb3-compat`
  - Install (apt): `sudo apt install libmariadb3-compat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3, mariadb-common
  - breaks: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - replaces: libmysqlclient19, libmysqlclient20, libmysqlclient21
  - provides: libmysqlclient19, libmysqlclient20, libmysqlclient21

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.3+maria~ubu1804), libmariadb3 (= 1:10.11.4+maria~ubu1804), libmariadb3 (= 1:10.11.5+maria~ubu1804)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.10+maria~ubu2004), libmariadb3 (= 1:10.11.11+maria~ubu2004), libmariadb3 (= 1:10.11.13+maria~ubu2004)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.13+maria~ubu2204), libmariadb3 (= 1:10.11.14+maria~ubu2204), libmariadb3 (= 1:10.11.15+maria~ubu2204)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.3+maria~ubu2210), libmariadb3 (= 1:10.11.4+maria~ubu2210), libmariadb3 (= 1:10.11.5+maria~ubu2210)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.5+maria~ubu2304), libmariadb3 (= 1:10.11.6+maria~ubu2304), libmariadb3 (= 1:10.11.7+maria~ubu2304)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.7+maria~ubu2310), libmariadb3 (= 1:10.11.8+maria~ubu2310), libmariadb3 (= 1:10.11.9+maria~ubu2310)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbclient18**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Virtual package to satisfy external libmariadbclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbclient18`
  - Install (apt): `sudo apt install libmariadbclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.13+maria~ubu2404), libmariadb3 (= 1:10.11.14+maria~ubu2404), libmariadb3 (= 1:10.11.15+maria~ubu2404)
  - replaces: libmariadbclient18
  - provides: libmariadbclient18

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.3+maria~ubu1804), libmariadb-dev (= 1:10.11.4+maria~ubu1804), libmariadb-dev (= 1:10.11.5+maria~ubu1804), libmariadbd19 (= 1:10.11.3+maria~ubu1804), libmariadbd19 (= 1:10.11.4+maria~ubu1804), libmariadbd19 (= 1:10.11.5+maria~ubu1804)
  - breaks: libmariadb-dev (<< 1:10.11.3+maria~ubu1804), libmariadb-dev (<< 1:10.11.4+maria~ubu1804), libmariadb-dev (<< 1:10.11.5+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.3+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.4+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.5+maria~ubu1804), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.3+maria~ubu1804), libmariadb-dev (<< 1:10.11.4+maria~ubu1804), libmariadb-dev (<< 1:10.11.5+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.3+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.4+maria~ubu1804), libmariadbclient-dev (<< 1:10.11.5+maria~ubu1804), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.10+maria~ubu2004), libmariadb-dev (= 1:10.11.11+maria~ubu2004), libmariadb-dev (= 1:10.11.13+maria~ubu2004), libmariadbd19 (= 1:10.11.10+maria~ubu2004), libmariadbd19 (= 1:10.11.11+maria~ubu2004), libmariadbd19 (= 1:10.11.13+maria~ubu2004)
  - breaks: libmariadb-dev (<< 1:10.11.10+maria~ubu2004), libmariadb-dev (<< 1:10.11.11+maria~ubu2004), libmariadb-dev (<< 1:10.11.13+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.10+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.11+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.10+maria~ubu2004), libmariadb-dev (<< 1:10.11.11+maria~ubu2004), libmariadb-dev (<< 1:10.11.13+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.10+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.11+maria~ubu2004), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.13+maria~ubu2204), libmariadb-dev (= 1:10.11.14+maria~ubu2204), libmariadb-dev (= 1:10.11.15+maria~ubu2204), libmariadbd19 (= 1:10.11.13+maria~ubu2204), libmariadbd19 (= 1:10.11.14+maria~ubu2204), libmariadbd19 (= 1:10.11.15+maria~ubu2204)
  - breaks: libmariadb-dev (<< 1:10.11.13+maria~ubu2204), libmariadb-dev (<< 1:10.11.14+maria~ubu2204), libmariadb-dev (<< 1:10.11.15+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2204), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.13+maria~ubu2204), libmariadb-dev (<< 1:10.11.14+maria~ubu2204), libmariadb-dev (<< 1:10.11.15+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2204), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2204), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.3+maria~ubu2210), libmariadb-dev (= 1:10.11.4+maria~ubu2210), libmariadb-dev (= 1:10.11.5+maria~ubu2210), libmariadbd19 (= 1:10.11.3+maria~ubu2210), libmariadbd19 (= 1:10.11.4+maria~ubu2210), libmariadbd19 (= 1:10.11.5+maria~ubu2210)
  - breaks: libmariadb-dev (<< 1:10.11.3+maria~ubu2210), libmariadb-dev (<< 1:10.11.4+maria~ubu2210), libmariadb-dev (<< 1:10.11.5+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.3+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.4+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2210), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.3+maria~ubu2210), libmariadb-dev (<< 1:10.11.4+maria~ubu2210), libmariadb-dev (<< 1:10.11.5+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.3+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.4+maria~ubu2210), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2210), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.5+maria~ubu2304), libmariadb-dev (= 1:10.11.6+maria~ubu2304), libmariadb-dev (= 1:10.11.7+maria~ubu2304), libmariadbd19 (= 1:10.11.5+maria~ubu2304), libmariadbd19 (= 1:10.11.6+maria~ubu2304), libmariadbd19 (= 1:10.11.7+maria~ubu2304)
  - breaks: libmariadb-dev (<< 1:10.11.5+maria~ubu2304), libmariadb-dev (<< 1:10.11.6+maria~ubu2304), libmariadb-dev (<< 1:10.11.7+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.6+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2304), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.5+maria~ubu2304), libmariadb-dev (<< 1:10.11.6+maria~ubu2304), libmariadb-dev (<< 1:10.11.7+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.5+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.6+maria~ubu2304), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2304), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.7+maria~ubu2310), libmariadb-dev (= 1:10.11.8+maria~ubu2310), libmariadb-dev (= 1:10.11.9+maria~ubu2310), libmariadbd19 (= 1:10.11.7+maria~ubu2310), libmariadbd19 (= 1:10.11.8+maria~ubu2310), libmariadbd19 (= 1:10.11.9+maria~ubu2310)
  - breaks: libmariadb-dev (<< 1:10.11.7+maria~ubu2310), libmariadb-dev (<< 1:10.11.8+maria~ubu2310), libmariadb-dev (<< 1:10.11.9+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.8+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.9+maria~ubu2310), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.7+maria~ubu2310), libmariadb-dev (<< 1:10.11.8+maria~ubu2310), libmariadb-dev (<< 1:10.11.9+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.7+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.8+maria~ubu2310), libmariadbclient-dev (<< 1:10.11.9+maria~ubu2310), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd-dev**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB embedded database, development files package
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd-dev`
  - Install (apt): `sudo apt install libmariadbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmariadb-dev (= 1:10.11.13+maria~ubu2404), libmariadb-dev (= 1:10.11.14+maria~ubu2404), libmariadb-dev (= 1:10.11.15+maria~ubu2404), libmariadbd19 (= 1:10.11.13+maria~ubu2404), libmariadbd19 (= 1:10.11.14+maria~ubu2404), libmariadbd19 (= 1:10.11.15+maria~ubu2404)
  - breaks: libmariadb-dev (<< 1:10.11.13+maria~ubu2404), libmariadb-dev (<< 1:10.11.14+maria~ubu2404), libmariadb-dev (<< 1:10.11.15+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2404), libmysqld-dev
  - replaces: libmariadb-dev (<< 1:10.11.13+maria~ubu2404), libmariadb-dev (<< 1:10.11.14+maria~ubu2404), libmariadb-dev (<< 1:10.11.15+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.13+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.14+maria~ubu2404), libmariadbclient-dev (<< 1:10.11.15+maria~ubu2404), libmysqld-dev
  - provides: libmysqld-dev

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.27), libpcre2-8-0 (>= 10.31), libpmem1 (>= 1.4), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), zlib1g (>= 1:1.2.0)
  - breaks: libmariadbd-dev (<< 1:10.11.3+maria~ubu1804), libmariadbd-dev (<< 1:10.11.4+maria~ubu1804), libmariadbd-dev (<< 1:10.11.5+maria~ubu1804)
  - replaces: libmariadbd-dev (<< 1:10.11.3+maria~ubu1804), libmariadbd-dev (<< 1:10.11.4+maria~ubu1804), libmariadbd-dev (<< 1:10.11.5+maria~ubu1804)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), zlib1g (>= 1:1.2.0)
  - conflicts: libmariadbd19t64
  - breaks: libmariadbd-dev (<< 1:10.11.10+maria~ubu2004), libmariadbd-dev (<< 1:10.11.11+maria~ubu2004), libmariadbd-dev (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadbd-dev (<< 1:10.11.10+maria~ubu2004), libmariadbd-dev (<< 1:10.11.11+maria~ubu2004), libmariadbd-dev (<< 1:10.11.13+maria~ubu2004)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), liburing2 (>= 2.1), zlib1g (>= 1:1.2.0)
  - conflicts: libmariadbd19t64
  - breaks: libmariadbd-dev (<< 1:10.11.13+maria~ubu2204), libmariadbd-dev (<< 1:10.11.14+maria~ubu2204), libmariadbd-dev (<< 1:10.11.15+maria~ubu2204)
  - replaces: libmariadbd-dev (<< 1:10.11.13+maria~ubu2204), libmariadbd-dev (<< 1:10.11.14+maria~ubu2204), libmariadbd-dev (<< 1:10.11.15+maria~ubu2204)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), liburing2 (>= 2.1), zlib1g (>= 1:1.2.0)
  - breaks: libmariadbd-dev (<< 1:10.11.3+maria~ubu2210), libmariadbd-dev (<< 1:10.11.4+maria~ubu2210), libmariadbd-dev (<< 1:10.11.5+maria~ubu2210)
  - replaces: libmariadbd-dev (<< 1:10.11.3+maria~ubu2210), libmariadbd-dev (<< 1:10.11.4+maria~ubu2210), libmariadbd-dev (<< 1:10.11.5+maria~ubu2210)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), liburing2 (>= 2.3), zlib1g (>= 1:1.2.0)
  - breaks: libmariadbd-dev (<< 1:10.11.5+maria~ubu2304), libmariadbd-dev (<< 1:10.11.6+maria~ubu2304), libmariadbd-dev (<< 1:10.11.7+maria~ubu2304)
  - replaces: libmariadbd-dev (<< 1:10.11.5+maria~ubu2304), libmariadbd-dev (<< 1:10.11.6+maria~ubu2304), libmariadbd-dev (<< 1:10.11.7+maria~ubu2304)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), liburing2 (>= 2.3), zlib1g (>= 1:1.2.0)
  - conflicts: libmariadbd19t64
  - breaks: libmariadbd-dev (<< 1:10.11.7+maria~ubu2310), libmariadbd-dev (<< 1:10.11.8+maria~ubu2310), libmariadbd-dev (<< 1:10.11.9+maria~ubu2310)
  - replaces: libmariadbd-dev (<< 1:10.11.7+maria~ubu2310), libmariadbd-dev (<< 1:10.11.8+maria~ubu2310), libmariadbd-dev (<< 1:10.11.9+maria~ubu2310)

  </details>

- **libmariadbd19**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB embedded database, shared library
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmariadbd19`
  - Install (apt): `sudo apt install libmariadbd19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), liburing2 (>= 2.3), zlib1g (>= 1:1.2.0)
  - conflicts: libmariadbd19t64
  - breaks: libmariadbd-dev (<< 1:10.11.13+maria~ubu2404), libmariadbd-dev (<< 1:10.11.14+maria~ubu2404), libmariadbd-dev (<< 1:10.11.15+maria~ubu2404)
  - replaces: libmariadbd-dev (<< 1:10.11.13+maria~ubu2404), libmariadbd-dev (<< 1:10.11.14+maria~ubu2404), libmariadbd-dev (<< 1:10.11.15+maria~ubu2404)

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.3+maria~ubu1804), libmariadb3 (= 1:10.11.4+maria~ubu1804), libmariadb3 (= 1:10.11.5+maria~ubu1804)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.10+maria~ubu2004), libmariadb3 (= 1:10.11.11+maria~ubu2004), libmariadb3 (= 1:10.11.13+maria~ubu2004)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.13+maria~ubu2204), libmariadb3 (= 1:10.11.14+maria~ubu2204), libmariadb3 (= 1:10.11.15+maria~ubu2204)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.3+maria~ubu2210), libmariadb3 (= 1:10.11.4+maria~ubu2210), libmariadb3 (= 1:10.11.5+maria~ubu2210)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.5+maria~ubu2304), libmariadb3 (= 1:10.11.6+maria~ubu2304), libmariadb3 (= 1:10.11.7+maria~ubu2304)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.7+maria~ubu2310), libmariadb3 (= 1:10.11.8+maria~ubu2310), libmariadb3 (= 1:10.11.9+maria~ubu2310)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Virtual package to satisfy external libmysqlclient18 depends
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install libmysqlclient18`
  - Install (apt): `sudo apt install libmysqlclient18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: libs
  - Priority: optional
  - depends: libmariadb3 (= 1:10.11.13+maria~ubu2404), libmariadb3 (= 1:10.11.14+maria~ubu2404), libmariadb3 (= 1:10.11.15+maria~ubu2404)
  - replaces: libmysqlclient18
  - provides: libmysqlclient18

  </details>


### <a id="packages-M"></a>M

- **mariadb-backup**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.27), libpcre2-8-0 (>= 10.31), libpmem1 (>= 1.4), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), libsystemd0 (>= 227), mariadb-client-core (= 1:10.11.3+maria~ubu1804), mariadb-client-core (= 1:10.11.4+maria~ubu1804), mariadb-client-core (= 1:10.11.5+maria~ubu1804), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.2), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libsystemd0 (>= 227), mariadb-client-core (= 1:10.11.10+maria~ubu2004), mariadb-client-core (= 1:10.11.11+maria~ubu2004), mariadb-client-core (= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.1), mariadb-client-core (= 1:10.11.13+maria~ubu2204), mariadb-client-core (= 1:10.11.14+maria~ubu2204), mariadb-client-core (= 1:10.11.15+maria~ubu2204), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.1), mariadb-client-core (= 1:10.11.3+maria~ubu2210), mariadb-client-core (= 1:10.11.4+maria~ubu2210), mariadb-client-core (= 1:10.11.5+maria~ubu2210), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-client-core (= 1:10.11.5+maria~ubu2304), mariadb-client-core (= 1:10.11.6+maria~ubu2304), mariadb-client-core (= 1:10.11.7+maria~ubu2304), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-client-core (= 1:10.11.7+maria~ubu2310), mariadb-client-core (= 1:10.11.8+maria~ubu2310), mariadb-client-core (= 1:10.11.9+maria~ubu2310), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-backup**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Backup tool for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-backup`
  - Install (apt): `sudo apt install mariadb-backup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-client-core (= 1:10.11.13+maria~ubu2404), mariadb-client-core (= 1:10.11.14+maria~ubu2404), mariadb-client-core (= 1:10.11.15+maria~ubu2404), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.17), libconfig-inifiles-perl, libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.3+maria~ubu1804), mariadb-client-core (>= 1:10.11.4+maria~ubu1804), mariadb-client-core (>= 1:10.11.5+maria~ubu1804), mariadb-common, perl:any, zlib1g (>= 1:1.2.0)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.3+maria~ubu1804), mariadb-client-core (<< 1:10.11.4+maria~ubu1804), mariadb-client-core (<< 1:10.11.5+maria~ubu1804), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.3+maria~ubu1804), mariadb-server (<< 1:10.11.4+maria~ubu1804), mariadb-server (<< 1:10.11.5+maria~ubu1804), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.3+maria~ubu1804), mariadb-server-core (<< 1:10.11.4+maria~ubu1804), mariadb-server-core (<< 1:10.11.5+maria~ubu1804), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.3+maria~ubu1804), mariadb-client-core (<< 1:10.11.4+maria~ubu1804), mariadb-client-core (<< 1:10.11.5+maria~ubu1804), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.3+maria~ubu1804), mariadb-server (<< 1:10.11.4+maria~ubu1804), mariadb-server (<< 1:10.11.5+maria~ubu1804), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.3+maria~ubu1804), mariadb-server-core (<< 1:10.11.4+maria~ubu1804), mariadb-server-core (<< 1:10.11.5+maria~ubu1804), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.28), libconfig-inifiles-perl, libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.10+maria~ubu2004), mariadb-client-core (>= 1:10.11.11+maria~ubu2004), mariadb-client-core (>= 1:10.11.13+maria~ubu2004), mariadb-common, perl:any, zlib1g (>= 1:1.2.0)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.10+maria~ubu2004), mariadb-client-core (<< 1:10.11.11+maria~ubu2004), mariadb-client-core (<< 1:10.11.13+maria~ubu2004), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.10+maria~ubu2004), mariadb-server-core (<< 1:10.11.11+maria~ubu2004), mariadb-server-core (<< 1:10.11.13+maria~ubu2004), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.10+maria~ubu2004), mariadb-client-core (<< 1:10.11.11+maria~ubu2004), mariadb-client-core (<< 1:10.11.13+maria~ubu2004), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.10+maria~ubu2004), mariadb-server-core (<< 1:10.11.11+maria~ubu2004), mariadb-server-core (<< 1:10.11.13+maria~ubu2004), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.34), libconfig-inifiles-perl, libgcc-s1 (>= 3.3.1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.13+maria~ubu2204), mariadb-client-core (>= 1:10.11.14+maria~ubu2204), mariadb-client-core (>= 1:10.11.15+maria~ubu2204), mariadb-common, perl:any, zlib1g (>= 1:1.1.4)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.13+maria~ubu2204), mariadb-client-core (<< 1:10.11.14+maria~ubu2204), mariadb-client-core (<< 1:10.11.15+maria~ubu2204), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2204), mariadb-server (<< 1:10.11.14+maria~ubu2204), mariadb-server (<< 1:10.11.15+maria~ubu2204), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.13+maria~ubu2204), mariadb-server-core (<< 1:10.11.14+maria~ubu2204), mariadb-server-core (<< 1:10.11.15+maria~ubu2204), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.13+maria~ubu2204), mariadb-client-core (<< 1:10.11.14+maria~ubu2204), mariadb-client-core (<< 1:10.11.15+maria~ubu2204), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2204), mariadb-server (<< 1:10.11.14+maria~ubu2204), mariadb-server (<< 1:10.11.15+maria~ubu2204), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.13+maria~ubu2204), mariadb-server-core (<< 1:10.11.14+maria~ubu2204), mariadb-server-core (<< 1:10.11.15+maria~ubu2204), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.35), libconfig-inifiles-perl, libssl3 (>= 3.0.0), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.3+maria~ubu2210), mariadb-client-core (>= 1:10.11.4+maria~ubu2210), mariadb-client-core (>= 1:10.11.5+maria~ubu2210), mariadb-common, perl:any, zlib1g (>= 1:1.2.0)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.3+maria~ubu2210), mariadb-client-core (<< 1:10.11.4+maria~ubu2210), mariadb-client-core (<< 1:10.11.5+maria~ubu2210), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.3+maria~ubu2210), mariadb-server (<< 1:10.11.4+maria~ubu2210), mariadb-server (<< 1:10.11.5+maria~ubu2210), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.3+maria~ubu2210), mariadb-server-core (<< 1:10.11.4+maria~ubu2210), mariadb-server-core (<< 1:10.11.5+maria~ubu2210), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.3+maria~ubu2210), mariadb-client-core (<< 1:10.11.4+maria~ubu2210), mariadb-client-core (<< 1:10.11.5+maria~ubu2210), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.3+maria~ubu2210), mariadb-server (<< 1:10.11.4+maria~ubu2210), mariadb-server (<< 1:10.11.5+maria~ubu2210), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.3+maria~ubu2210), mariadb-server-core (<< 1:10.11.4+maria~ubu2210), mariadb-server-core (<< 1:10.11.5+maria~ubu2210), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.35), libconfig-inifiles-perl, libssl3 (>= 3.0.0), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.5+maria~ubu2304), mariadb-client-core (>= 1:10.11.6+maria~ubu2304), mariadb-client-core (>= 1:10.11.7+maria~ubu2304), mariadb-common, perl:any, zlib1g (>= 1:1.2.0)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.5+maria~ubu2304), mariadb-client-core (<< 1:10.11.6+maria~ubu2304), mariadb-client-core (<< 1:10.11.7+maria~ubu2304), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.5+maria~ubu2304), mariadb-server (<< 1:10.11.6+maria~ubu2304), mariadb-server (<< 1:10.11.7+maria~ubu2304), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.5+maria~ubu2304), mariadb-server-core (<< 1:10.11.6+maria~ubu2304), mariadb-server-core (<< 1:10.11.7+maria~ubu2304), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.5+maria~ubu2304), mariadb-client-core (<< 1:10.11.6+maria~ubu2304), mariadb-client-core (<< 1:10.11.7+maria~ubu2304), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.5+maria~ubu2304), mariadb-server (<< 1:10.11.6+maria~ubu2304), mariadb-server (<< 1:10.11.7+maria~ubu2304), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.5+maria~ubu2304), mariadb-server-core (<< 1:10.11.6+maria~ubu2304), mariadb-server-core (<< 1:10.11.7+maria~ubu2304), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.38), libconfig-inifiles-perl, libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.7+maria~ubu2310), mariadb-client-core (>= 1:10.11.8+maria~ubu2310), mariadb-client-core (>= 1:10.11.9+maria~ubu2310), mariadb-common, perl:any, zlib1g (>= 1:1.2.0)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.7+maria~ubu2310), mariadb-client-core (<< 1:10.11.8+maria~ubu2310), mariadb-client-core (<< 1:10.11.9+maria~ubu2310), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.7+maria~ubu2310), mariadb-server (<< 1:10.11.8+maria~ubu2310), mariadb-server (<< 1:10.11.9+maria~ubu2310), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.7+maria~ubu2310), mariadb-server-core (<< 1:10.11.8+maria~ubu2310), mariadb-server-core (<< 1:10.11.9+maria~ubu2310), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.7+maria~ubu2310), mariadb-client-core (<< 1:10.11.8+maria~ubu2310), mariadb-client-core (<< 1:10.11.9+maria~ubu2310), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.7+maria~ubu2310), mariadb-server (<< 1:10.11.8+maria~ubu2310), mariadb-server (<< 1:10.11.9+maria~ubu2310), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.7+maria~ubu2310), mariadb-server-core (<< 1:10.11.8+maria~ubu2310), mariadb-server-core (<< 1:10.11.9+maria~ubu2310), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client`
  - Install (apt): `sudo apt install mariadb-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debianutils (>= 1.6), libc6 (>= 2.38), libconfig-inifiles-perl, libgcc-s1 (>= 3.3.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 5.2), mariadb-client-core (>= 1:10.11.13+maria~ubu2404), mariadb-client-core (>= 1:10.11.14+maria~ubu2404), mariadb-client-core (>= 1:10.11.15+maria~ubu2404), mariadb-common, perl:any, zlib1g (>= 1:1.1.4)
  - recommends: libdbd-mariadb-perl | libdbd-mysql-perl, libdbi-perl, libterm-readkey-perl
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mytop, virtual-mysql-client
  - breaks: mariadb-client-core (<< 1:10.11.13+maria~ubu2404), mariadb-client-core (<< 1:10.11.14+maria~ubu2404), mariadb-client-core (<< 1:10.11.15+maria~ubu2404), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2404), mariadb-server (<< 1:10.11.14+maria~ubu2404), mariadb-server (<< 1:10.11.15+maria~ubu2404), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.13+maria~ubu2404), mariadb-server-core (<< 1:10.11.14+maria~ubu2404), mariadb-server-core (<< 1:10.11.15+maria~ubu2404), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core (<< 1:10.11.13+maria~ubu2404), mariadb-client-core (<< 1:10.11.14+maria~ubu2404), mariadb-client-core (<< 1:10.11.15+maria~ubu2404), mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2404), mariadb-server (<< 1:10.11.14+maria~ubu2404), mariadb-server (<< 1:10.11.15+maria~ubu2404), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core (<< 1:10.11.13+maria~ubu2404), mariadb-server-core (<< 1:10.11.14+maria~ubu2404), mariadb-server-core (<< 1:10.11.15+maria~ubu2404), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-5.0, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, mytop, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-client
  - provides: default-mysql-client, virtual-mysql-client

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.17), libmariadb3 (>= 10.5.4), libncurses5 (>= 6), libreadline5 (>= 5.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 4.1.1), libtinfo5 (>= 6), mariadb-common (>= 1:10.11.3+maria~ubu1804), mariadb-common (>= 1:10.11.4+maria~ubu1804), mariadb-common (>= 1:10.11.5+maria~ubu1804), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.3+maria~ubu1804), mariadb-client (<< 1:10.11.4+maria~ubu1804), mariadb-client (<< 1:10.11.5+maria~ubu1804), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.3+maria~ubu1804), mariadb-server-core (<< 1:10.11.4+maria~ubu1804), mariadb-server-core (<< 1:10.11.5+maria~ubu1804), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.3+maria~ubu1804), mariadb-client (<< 1:10.11.4+maria~ubu1804), mariadb-client (<< 1:10.11.5+maria~ubu1804), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.3+maria~ubu1804), mariadb-server-core (<< 1:10.11.4+maria~ubu1804), mariadb-server-core (<< 1:10.11.5+maria~ubu1804), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.28), libgcc-s1 (>= 3.0), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libreadline5 (>= 5.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 4.1.1), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.10+maria~ubu2004), mariadb-common (>= 1:10.11.11+maria~ubu2004), mariadb-common (>= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.10+maria~ubu2004), mariadb-server-core (<< 1:10.11.11+maria~ubu2004), mariadb-server-core (<< 1:10.11.13+maria~ubu2004), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.10+maria~ubu2004), mariadb-server-core (<< 1:10.11.11+maria~ubu2004), mariadb-server-core (<< 1:10.11.13+maria~ubu2004), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libedit2 (>= 2.11-20080614-0), libgcc-s1 (>= 3.3.1), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libssl3 (>= 3.0.0~~alpha1), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.13+maria~ubu2204), mariadb-common (>= 1:10.11.14+maria~ubu2204), mariadb-common (>= 1:10.11.15+maria~ubu2204), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.13+maria~ubu2204), mariadb-client (<< 1:10.11.14+maria~ubu2204), mariadb-client (<< 1:10.11.15+maria~ubu2204), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.13+maria~ubu2204), mariadb-server-core (<< 1:10.11.14+maria~ubu2204), mariadb-server-core (<< 1:10.11.15+maria~ubu2204), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.13+maria~ubu2204), mariadb-client (<< 1:10.11.14+maria~ubu2204), mariadb-client (<< 1:10.11.15+maria~ubu2204), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.13+maria~ubu2204), mariadb-server-core (<< 1:10.11.14+maria~ubu2204), mariadb-server-core (<< 1:10.11.15+maria~ubu2204), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 2.11-20080614-0), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libssl3 (>= 3.0.0), libstdc++6 (>= 4.1.1), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.3+maria~ubu2210), mariadb-common (>= 1:10.11.4+maria~ubu2210), mariadb-common (>= 1:10.11.5+maria~ubu2210), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.3+maria~ubu2210), mariadb-client (<< 1:10.11.4+maria~ubu2210), mariadb-client (<< 1:10.11.5+maria~ubu2210), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.3+maria~ubu2210), mariadb-server-core (<< 1:10.11.4+maria~ubu2210), mariadb-server-core (<< 1:10.11.5+maria~ubu2210), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.3+maria~ubu2210), mariadb-client (<< 1:10.11.4+maria~ubu2210), mariadb-client (<< 1:10.11.5+maria~ubu2210), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.3+maria~ubu2210), mariadb-server-core (<< 1:10.11.4+maria~ubu2210), mariadb-server-core (<< 1:10.11.5+maria~ubu2210), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 2.11-20080614-0), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libssl3 (>= 3.0.0), libstdc++6 (>= 4.1.1), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.5+maria~ubu2304), mariadb-common (>= 1:10.11.6+maria~ubu2304), mariadb-common (>= 1:10.11.7+maria~ubu2304), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.5+maria~ubu2304), mariadb-client (<< 1:10.11.6+maria~ubu2304), mariadb-client (<< 1:10.11.7+maria~ubu2304), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.5+maria~ubu2304), mariadb-server-core (<< 1:10.11.6+maria~ubu2304), mariadb-server-core (<< 1:10.11.7+maria~ubu2304), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.5+maria~ubu2304), mariadb-client (<< 1:10.11.6+maria~ubu2304), mariadb-client (<< 1:10.11.7+maria~ubu2304), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.5+maria~ubu2304), mariadb-server-core (<< 1:10.11.6+maria~ubu2304), mariadb-server-core (<< 1:10.11.7+maria~ubu2304), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 2.11-20080614-0), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libssl3 (>= 3.0.0), libstdc++6 (>= 4.1.1), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.7+maria~ubu2310), mariadb-common (>= 1:10.11.8+maria~ubu2310), mariadb-common (>= 1:10.11.9+maria~ubu2310), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.7+maria~ubu2310), mariadb-client (<< 1:10.11.8+maria~ubu2310), mariadb-client (<< 1:10.11.9+maria~ubu2310), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.7+maria~ubu2310), mariadb-server-core (<< 1:10.11.8+maria~ubu2310), mariadb-server-core (<< 1:10.11.9+maria~ubu2310), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.7+maria~ubu2310), mariadb-client (<< 1:10.11.8+maria~ubu2310), mariadb-client (<< 1:10.11.9+maria~ubu2310), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.7+maria~ubu2310), mariadb-server-core (<< 1:10.11.8+maria~ubu2310), mariadb-server-core (<< 1:10.11.9+maria~ubu2310), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-client-core**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database core client binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-client-core`
  - Install (apt): `sudo apt install mariadb-client-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 2.11-20080614-0), libgcc-s1 (>= 3.3.1), libmariadb3 (>= 10.5.4), libncurses6 (>= 6), libssl3t64 (>= 3.0.0), libtinfo6 (>= 6), mariadb-common (>= 1:10.11.13+maria~ubu2404), mariadb-common (>= 1:10.11.14+maria~ubu2404), mariadb-common (>= 1:10.11.15+maria~ubu2404), zlib1g (>= 1:1.1.4)
  - conflicts: mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, virtual-mysql-client-core
  - breaks: mariadb-client (<< 1:10.11.13+maria~ubu2404), mariadb-client (<< 1:10.11.14+maria~ubu2404), mariadb-client (<< 1:10.11.15+maria~ubu2404), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.13+maria~ubu2404), mariadb-server-core (<< 1:10.11.14+maria~ubu2404), mariadb-server-core (<< 1:10.11.15+maria~ubu2404), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0
  - replaces: mariadb-client (<< 1:10.11.13+maria~ubu2404), mariadb-client (<< 1:10.11.14+maria~ubu2404), mariadb-client (<< 1:10.11.15+maria~ubu2404), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-client-5.1, mariadb-client-5.2, mariadb-client-5.3, mariadb-client-5.5, mariadb-client-core-10.0, mariadb-client-core-10.1, mariadb-client-core-10.2, mariadb-client-core-10.3, mariadb-client-core-10.4, mariadb-client-core-10.5, mariadb-client-core-10.6, mariadb-client-core-10.7, mariadb-client-core-10.8, mariadb-client-core-5.1, mariadb-client-core-5.2, mariadb-client-core-5.3, mariadb-client-core-5.5, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-core (<< 1:10.11.13+maria~ubu2404), mariadb-server-core (<< 1:10.11.14+maria~ubu2404), mariadb-server-core (<< 1:10.11.15+maria~ubu2404), mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mysql-client (<< 5.0.51), mysql-client-5.0, mysql-client-5.1, mysql-client-5.5, mysql-client-core-5.1, mysql-client-core-5.5, mysql-client-core-5.6, mysql-client-core-5.7, mysql-client-core-8.0, mysql-cluster-community-client-plugins, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-server-server-5.7, percona-server-server-8.0, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, percona-xtradb-cluster-server-8.0, virtual-mysql-client-core
  - provides: default-mysql-client-core, virtual-mysql-client-core

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: all
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: all
  - Suite: lunar
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: all
  - Suite: mantic
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-common**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: all
  - Suite: noble
  - Components: main
  - Description: MariaDB database common files (e.g. /etc/mysql/mariadb.conf.d/)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-common`
  - Install (apt): `sudo apt install mariadb-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: mysql-common (>= 5.6.25)

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.5-6.4.7+maria~ubu1804
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.65.1, libboost-chrono1.65.1, libboost-date-time1.65.1, libboost-filesystem1.65.1, libboost-regex1.65.1, libboost-system1.65.1, libboost-thread1.65.1, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses5 (>= 6), libsnappy1v5, libssl1.1 (>= 1.1.0), libstdc++6 (>= 6), libtinfo5 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.13-6.4.101+maria~ubu2004
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.71.0, libboost-chrono1.71.0, libboost-date-time1.71.0, libboost-filesystem1.71.0, libboost-regex1.71.0-icu66, libboost-system1.71.0, libboost-thread1.71.0, libc6 (>= 2.29), libcurl4 (>= 7.16.2), libgcc-s1 (>= 7), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.8), libssl1.1 (>= 1.1.0), libstdc++6 (>= 9), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.15-6.4.121+maria~ubu2204
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.74.0 (>= 1.74.0), libboost-chrono1.74.0 (>= 1.74.0), libboost-date-time1.74.0 (>= 1.74.0), libboost-filesystem1.74.0 (>= 1.74.0), libboost-regex1.74.0-icu70, libboost-system1.74.0 (>= 1.74.0), libboost-thread1.74.0 (>= 1.74.0), libc6 (>= 2.34), libcurl4 (>= 7.16.2), libgcc-s1 (>= 7), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.8), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.5-6.4.7+maria~ubu2210
  - Architectures: amd64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.74.0 (>= 1.74.0), libboost-chrono1.74.0 (>= 1.74.0), libboost-date-time1.74.0 (>= 1.74.0), libboost-filesystem1.74.0 (>= 1.74.0), libboost-regex1.74.0-icu71, libboost-system1.74.0 (>= 1.74.0), libboost-thread1.74.0 (>= 1.74.0), libc6 (>= 2.35), libcurl4 (>= 7.16.2), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.9), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.7-6.4.8+maria~ubu2304
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.74.0 (>= 1.74.0), libboost-chrono1.74.0 (>= 1.74.0), libboost-date-time1.74.0 (>= 1.74.0), libboost-filesystem1.74.0 (>= 1.74.0), libboost-regex1.74.0-icu72, libboost-system1.74.0 (>= 1.74.0), libboost-thread1.74.0 (>= 1.74.0), libc6 (>= 2.35), libcurl4 (>= 7.16.2), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.9), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.9-6.4.8+maria~ubu2310
  - Architectures: amd64
  - Suite: mantic
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.74.0 (>= 1.74.0+ds1), libboost-chrono1.74.0 (>= 1.74.0+ds1), libboost-date-time1.74.0 (>= 1.74.0+ds1), libboost-filesystem1.74.0 (>= 1.74.0+ds1), libboost-regex1.74.0-icu72, libboost-system1.74.0 (>= 1.74.0+ds1), libboost-thread1.74.0 (>= 1.74.0+ds1), libc6 (>= 2.38), libcurl4 (>= 7.16.2), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.10), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-columnstore**
  - Latest version: 1:10.11.15-6.4.121+maria~ubu2404
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: MariaDB ColumnStore storage engine
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-columnstore`
  - Install (apt): `sudo apt install mariadb-plugin-columnstore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: binutils, libboost-atomic1.83.0 (>= 1.83.0), libboost-chrono1.83.0t64 (>= 1.83.0), libboost-date-time1.83.0 (>= 1.83.0), libboost-filesystem1.83.0 (>= 1.83.0), libboost-regex1.83.0-icu74, libboost-system1.83.0 (>= 1.83.0), libboost-thread1.83.0 (>= 1.83.0), libc6 (>= 2.39), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 7), libjemalloc1 | libjemalloc2, liblz4-1 (>= 0.0~r130), libmariadb3 (>= 3.0.0), libncurses6 (>= 6), libsnappy1v5 (>= 1.1.10), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libtinfo6 (>= 6), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), net-tools, python3, zlib1g (>= 1:1.1.4)
  - breaks: mariadb-columnstore-libs, mariadb-columnstore-platform
  - replaces: mariadb-columnstore-libs, mariadb-columnstore-platform

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libodbc1 (>= 2.3.1), libstdc++6 (>= 4.1.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.29), libgcc-s1 (>= 3.0), libodbc1 (>= 2.3.1), libstdc++6 (>= 4.1.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libodbc2 (>= 2.3.1), libstdc++6 (>= 4.1.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libodbc2 (>= 2.3.1), libstdc++6 (>= 4.1.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libodbc2 (>= 2.3.1), libstdc++6 (>= 4.1.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libodbc2 (>= 2.3.1), libstdc++6 (>= 13.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Connect storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-connect`
  - Install (apt): `sudo apt install mariadb-plugin-connect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libodbc2 (>= 2.3.1), libstdc++6 (>= 13.1), libxml2 (>= 2.7.4), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), unixodbc, zlib1g (>= 1:1.2.3.4)
  - recommends: curl
  - breaks: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-connect-engine-10.0, mariadb-connect-engine-10.1, mariadb-connect-engine-10.2, mariadb-connect-engine-10.3, mariadb-connect-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: CrackLib Password Validation Plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-cracklib-password-check`
  - Install (apt): `sudo apt install mariadb-plugin-cracklib-password-check`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.14+dfsg), mariadb-client (= 1:10.11.3+maria~ubu1804), mariadb-client (= 1:10.11.4+maria~ubu1804), mariadb-client (= 1:10.11.5+maria~ubu1804)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.10+maria~ubu2004), mariadb-client (= 1:10.11.11+maria~ubu2004), mariadb-client (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.13+maria~ubu2204), mariadb-client (= 1:10.11.14+maria~ubu2204), mariadb-client (= 1:10.11.15+maria~ubu2204)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.3+maria~ubu2210), mariadb-client (= 1:10.11.4+maria~ubu2210), mariadb-client (= 1:10.11.5+maria~ubu2210)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.5+maria~ubu2304), mariadb-client (= 1:10.11.6+maria~ubu2304), mariadb-client (= 1:10.11.7+maria~ubu2304)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.7+maria~ubu2310), mariadb-client (= 1:10.11.8+maria~ubu2310), mariadb-client (= 1:10.11.9+maria~ubu2310)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB client
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-client`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.13+maria~ubu2404), mariadb-client (= 1:10.11.14+maria~ubu2404), mariadb-client (= 1:10.11.15+maria~ubu2404)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.14+dfsg), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.4), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server, mariadb-server (= 1:10.11.15+maria~ubu2204)
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: GSSAPI authentication plugin for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-gssapi-server`
  - Install (apt): `sudo apt install mariadb-plugin-gssapi-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.4), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server, mariadb-server (= 1:10.11.15+maria~ubu2404)
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libcurl4 (>= 7.16.2), libstdc++6 (>= 5.2), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libstdc++6 (>= 5.2), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcurl4 (>= 7.16.2), libstdc++6 (>= 11), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcurl4 (>= 7.16.2), libstdc++6 (>= 11), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4 (>= 7.16.2), libstdc++6 (>= 11), mariadb-server

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Hashicorp Key Management plugin for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-hashicorp-key-management`
  - Install (apt): `sudo apt install mariadb-plugin-hashicorp-key-management`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4, libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11), mariadb-server

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libstdc++6 (>= 4.9), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el
  - Suite: focal
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.29), libgcc-s1 (>= 3.0), libmecab2 (>= 0.996), libstdc++6 (>= 4.9), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el
  - Suite: jammy
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libmecab2 (>= 0.996), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libmecab2 (>= 0.996), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libmecab2 (>= 0.996), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libmecab2 (>= 0.996), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el
  - Suite: noble
  - Components: main
  - Description: Mroonga storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-mroonga`
  - Install (apt): `sudo apt install mariadb-plugin-mroonga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libmecab2 (>= 0.996), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libjudydebian1, libstdc++6 (>= 5.2), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgcc-s1 (>= 3.0), libjudydebian1, libstdc++6 (>= 5.2), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgcc-s1 (>= 3.3.1), libjudydebian1, libstdc++6 (>= 11), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libjudydebian1, libstdc++6 (>= 11), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libjudydebian1, libstdc++6 (>= 11), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libjudydebian1, libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: OQGraph storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-oqgraph`
  - Install (apt): `sudo apt install mariadb-plugin-oqgraph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libjudydebian1, libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: BZip2 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-bzip2`
  - Install (apt): `sudo apt install mariadb-plugin-provider-bzip2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libbz2-1.0, mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: LZ4 compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lz4`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lz4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblz4-1 (>= 0.0~r130), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: LZMA compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzma`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzma5 (>= 5.1.1alpha+20110809), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2, mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: LZO compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-lzo`
  - Install (apt): `sudo apt install mariadb-plugin-provider-lzo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: liblzo2-2 (>= 2.02), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5, mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.8), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.8), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.9), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.9), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.10), mariadb-server

  </details>

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Snappy compression support in the server and storage engines
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-provider-snappy`
  - Install (apt): `sudo apt install mariadb-plugin-provider-snappy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libsnappy1v5 (>= 1.1.10), mariadb-server

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.22), liblz4-1 (>= 0.0~r130), libsnappy1v5, libstdc++6 (>= 7), libzstd1 (>= 1.3.2), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), python3:any, zlib1g (>= 1:1.1.4)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el
  - Suite: focal
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.29), libc6 (>= 2.30), libgcc-s1 (>= 3.0), libgcc-s1 (>= 3.4), libgcc-s1 (>= 4.2), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.8), libstdc++6 (>= 9), libzstd1 (>= 1.3.2), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), python3:any, rocksdb-tools, zlib1g (>= 1:1.1.4), zlib1g (>= 1:1.2.0)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el
  - Suite: jammy
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.8), libstdc++6 (>= 12), libzstd1 (>= 1.4.0), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), python3:any, rocksdb-tools, zlib1g (>= 1:1.2.0)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.9), libstdc++6 (>= 12), libzstd1 (>= 1.5.2), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), python3:any, rocksdb-tools, zlib1g (>= 1:1.1.4)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.9), libstdc++6 (>= 12), libzstd1 (>= 1.5.2), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), python3:any, rocksdb-tools, zlib1g (>= 1:1.1.4)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.10), libstdc++6 (>= 13.1), libzstd1 (>= 1.5.5), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), python3:any, rocksdb-tools, zlib1g (>= 1:1.1.4)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el
  - Suite: noble
  - Components: main
  - Description: RocksDB storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-rocksdb`
  - Install (apt): `sudo apt install mariadb-plugin-rocksdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.10), libstdc++6 (>= 13.1), libzstd1 (>= 1.5.5), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), python3:any, rocksdb-tools, zlib1g (>= 1:1.2.0)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.17), libcurl4 (>= 7.16.2), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.29), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libstdc++6 (>= 4.1.1), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcurl4 (>= 7.16.2), libssl3 (>= 3.0.0), libstdc++6 (>= 4.1.1), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcurl4 (>= 7.16.2), libssl3 (>= 3.0.0), libstdc++6 (>= 4.1.1), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4 (>= 7.16.2), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Amazon S3 archival storage engine for MariaDB
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-s3`
  - Install (apt): `sudo apt install mariadb-plugin-s3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4, libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.0), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), zlib1g (>= 1:1.1.4)

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libstdc++6 (>= 4.9), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgcc-s1 (>= 3.0), libstdc++6 (>= 4.9), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libstdc++6 (>= 4.3), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: Spider storage engine for MariaDB server
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-plugin-spider`
  - Install (apt): `sudo apt install mariadb-plugin-spider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 13.1), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.17), libdbi-perl, libpam0g (>= 0.99.7.1), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), lsb-base (>= 3.0-10), lsof, mariadb-client (>= 1:10.11.3+maria~ubu1804), mariadb-client (>= 1:10.11.4+maria~ubu1804), mariadb-client (>= 1:10.11.5+maria~ubu1804), mariadb-server-core (>= 1:10.11.3+maria~ubu1804), mariadb-server-core (>= 1:10.11.4+maria~ubu1804), mariadb-server-core (>= 1:10.11.5+maria~ubu1804), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.3+maria~ubu1804), mariadb-common (>= 1:10.11.4+maria~ubu1804), mariadb-common (>= 1:10.11.5+maria~ubu1804)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.3+maria~ubu1804), mariadb-client (<< 1:10.11.4+maria~ubu1804), mariadb-client (<< 1:10.11.5+maria~ubu1804), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.29), libdbi-perl, libgcc-s1 (>= 3.0), libpam0g (>= 0.99.7.1), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), lsb-base (>= 3.0-10), lsof, mariadb-client (>= 1:10.11.10+maria~ubu2004), mariadb-client (>= 1:10.11.11+maria~ubu2004), mariadb-client (>= 1:10.11.13+maria~ubu2004), mariadb-server-core (>= 1:10.11.10+maria~ubu2004), mariadb-server-core (>= 1:10.11.11+maria~ubu2004), mariadb-server-core (>= 1:10.11.13+maria~ubu2004), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.10+maria~ubu2004), mariadb-common (>= 1:10.11.11+maria~ubu2004), mariadb-common (>= 1:10.11.13+maria~ubu2004)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.34), libdbi-perl, libgcc-s1 (>= 3.3.1), libpam0g (>= 0.99.7.1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11), lsb-base (>= 3.0-10), lsof, mariadb-client (>= 1:10.11.13+maria~ubu2204), mariadb-client (>= 1:10.11.14+maria~ubu2204), mariadb-client (>= 1:10.11.15+maria~ubu2204), mariadb-server-core (>= 1:10.11.13+maria~ubu2204), mariadb-server-core (>= 1:10.11.14+maria~ubu2204), mariadb-server-core (>= 1:10.11.15+maria~ubu2204), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.13+maria~ubu2204), mariadb-common (>= 1:10.11.14+maria~ubu2204), mariadb-common (>= 1:10.11.15+maria~ubu2204)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.13+maria~ubu2204), mariadb-client (<< 1:10.11.14+maria~ubu2204), mariadb-client (<< 1:10.11.15+maria~ubu2204), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.35), libdbi-perl, libpam0g (>= 0.99.7.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11), lsb-base (>= 3.0-10), lsof, mariadb-client (>= 1:10.11.3+maria~ubu2210), mariadb-client (>= 1:10.11.4+maria~ubu2210), mariadb-client (>= 1:10.11.5+maria~ubu2210), mariadb-server-core (>= 1:10.11.3+maria~ubu2210), mariadb-server-core (>= 1:10.11.4+maria~ubu2210), mariadb-server-core (>= 1:10.11.5+maria~ubu2210), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.3+maria~ubu2210), mariadb-common (>= 1:10.11.4+maria~ubu2210), mariadb-common (>= 1:10.11.5+maria~ubu2210)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.3+maria~ubu2210), mariadb-client (<< 1:10.11.4+maria~ubu2210), mariadb-client (<< 1:10.11.5+maria~ubu2210), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.35), libdbi-perl, libpam0g (>= 0.99.7.1), libssl3 (>= 3.0.0), libstdc++6 (>= 11), lsof, mariadb-client (>= 1:10.11.5+maria~ubu2304), mariadb-client (>= 1:10.11.6+maria~ubu2304), mariadb-client (>= 1:10.11.7+maria~ubu2304), mariadb-server-core (>= 1:10.11.5+maria~ubu2304), mariadb-server-core (>= 1:10.11.6+maria~ubu2304), mariadb-server-core (>= 1:10.11.7+maria~ubu2304), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.5+maria~ubu2304), mariadb-common (>= 1:10.11.6+maria~ubu2304), mariadb-common (>= 1:10.11.7+maria~ubu2304)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.5+maria~ubu2304), mariadb-client (<< 1:10.11.6+maria~ubu2304), mariadb-client (<< 1:10.11.7+maria~ubu2304), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.38), libdbi-perl, libpam0g (>= 0.99.7.1), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), lsof, mariadb-client (>= 1:10.11.7+maria~ubu2310), mariadb-client (>= 1:10.11.8+maria~ubu2310), mariadb-client (>= 1:10.11.9+maria~ubu2310), mariadb-server-core (>= 1:10.11.7+maria~ubu2310), mariadb-server-core (>= 1:10.11.8+maria~ubu2310), mariadb-server-core (>= 1:10.11.9+maria~ubu2310), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.7+maria~ubu2310), mariadb-common (>= 1:10.11.8+maria~ubu2310), mariadb-common (>= 1:10.11.9+maria~ubu2310)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.7+maria~ubu2310), mariadb-client (<< 1:10.11.8+maria~ubu2310), mariadb-client (<< 1:10.11.9+maria~ubu2310), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database server binaries
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server`
  - Install (apt): `sudo apt install mariadb-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, galera-4 (>= 26.4), gawk, iproute2, libc6 (>= 2.38), libdbi-perl, libgcc-s1 (>= 3.3.1), libpam0g (>= 0.99.7.1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), lsof, mariadb-client (>= 1:10.11.13+maria~ubu2404), mariadb-client (>= 1:10.11.14+maria~ubu2404), mariadb-client (>= 1:10.11.15+maria~ubu2404), mariadb-server-core (>= 1:10.11.13+maria~ubu2404), mariadb-server-core (>= 1:10.11.14+maria~ubu2404), mariadb-server-core (>= 1:10.11.15+maria~ubu2404), passwd, perl (>= 5.6), perl:any, procps, psmisc, rsync, socat, zlib1g (>= 1:1.1.4)
  - preDepends: adduser (>= 3.40), debconf, mariadb-common (>= 1:10.11.13+maria~ubu2404), mariadb-common (>= 1:10.11.14+maria~ubu2404), mariadb-common (>= 1:10.11.15+maria~ubu2404)
  - recommends: libhtml-template-perl, pv
  - suggests: mailx, mariadb-test, netcat-openbsd
  - conflicts: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server
  - breaks: handlersocket-mysql-5.5, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: handlersocket-mysql-5.5, libmariadbclient-dev (<< 5.5.0), libmariadbclient16, mariadb-client (<< 1:10.11.13+maria~ubu2404), mariadb-client (<< 1:10.11.14+maria~ubu2404), mariadb-client (<< 1:10.11.15+maria~ubu2404), mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-5.1, mariadb-server-5.2, mariadb-server-5.3, mariadb-server-5.5, mysql-client-5.5, mysql-client-5.6, mysql-client-5.7, mysql-client-8.0, mysql-client-core-8.0, mysql-server, mysql-server-4.1, mysql-server-5.0, mysql-server-5.1, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server
  - provides: default-mysql-server, virtual-mysql-server

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.27), libpcre2-8-0 (>= 10.31), libpmem1 (>= 1.4), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), libsystemd0 (>= 227), mariadb-common (>= 1:10.11.3+maria~ubu1804), mariadb-common (>= 1:10.11.4+maria~ubu1804), mariadb-common (>= 1:10.11.5+maria~ubu1804), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.3+maria~ubu1804), mariadb-client (<< 1:10.11.4+maria~ubu1804), mariadb-client (<< 1:10.11.5+maria~ubu1804), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.3+maria~ubu1804), mariadb-server (<< 1:10.11.4+maria~ubu1804), mariadb-server (<< 1:10.11.5+maria~ubu1804), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.3+maria~ubu1804), mariadb-client (<< 1:10.11.4+maria~ubu1804), mariadb-client (<< 1:10.11.5+maria~ubu1804), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.3+maria~ubu1804), mariadb-server (<< 1:10.11.4+maria~ubu1804), mariadb-server (<< 1:10.11.5+maria~ubu1804), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libsystemd0 (>= 227), mariadb-common (>= 1:10.11.10+maria~ubu2004), mariadb-common (>= 1:10.11.11+maria~ubu2004), mariadb-common (>= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.1), mariadb-common (>= 1:10.11.13+maria~ubu2204), mariadb-common (>= 1:10.11.14+maria~ubu2204), mariadb-common (>= 1:10.11.15+maria~ubu2204), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.13+maria~ubu2204), mariadb-client (<< 1:10.11.14+maria~ubu2204), mariadb-client (<< 1:10.11.15+maria~ubu2204), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2204), mariadb-server (<< 1:10.11.14+maria~ubu2204), mariadb-server (<< 1:10.11.15+maria~ubu2204), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.13+maria~ubu2204), mariadb-client (<< 1:10.11.14+maria~ubu2204), mariadb-client (<< 1:10.11.15+maria~ubu2204), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2204), mariadb-server (<< 1:10.11.14+maria~ubu2204), mariadb-server (<< 1:10.11.15+maria~ubu2204), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.1), mariadb-common (>= 1:10.11.3+maria~ubu2210), mariadb-common (>= 1:10.11.4+maria~ubu2210), mariadb-common (>= 1:10.11.5+maria~ubu2210), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.3+maria~ubu2210), mariadb-client (<< 1:10.11.4+maria~ubu2210), mariadb-client (<< 1:10.11.5+maria~ubu2210), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.3+maria~ubu2210), mariadb-server (<< 1:10.11.4+maria~ubu2210), mariadb-server (<< 1:10.11.5+maria~ubu2210), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.3+maria~ubu2210), mariadb-client (<< 1:10.11.4+maria~ubu2210), mariadb-client (<< 1:10.11.5+maria~ubu2210), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.3+maria~ubu2210), mariadb-server (<< 1:10.11.4+maria~ubu2210), mariadb-server (<< 1:10.11.5+maria~ubu2210), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-common (>= 1:10.11.5+maria~ubu2304), mariadb-common (>= 1:10.11.6+maria~ubu2304), mariadb-common (>= 1:10.11.7+maria~ubu2304), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.5+maria~ubu2304), mariadb-client (<< 1:10.11.6+maria~ubu2304), mariadb-client (<< 1:10.11.7+maria~ubu2304), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.5+maria~ubu2304), mariadb-server (<< 1:10.11.6+maria~ubu2304), mariadb-server (<< 1:10.11.7+maria~ubu2304), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.5+maria~ubu2304), mariadb-client (<< 1:10.11.6+maria~ubu2304), mariadb-client (<< 1:10.11.7+maria~ubu2304), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.5+maria~ubu2304), mariadb-server (<< 1:10.11.6+maria~ubu2304), mariadb-server (<< 1:10.11.7+maria~ubu2304), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-common (>= 1:10.11.7+maria~ubu2310), mariadb-common (>= 1:10.11.8+maria~ubu2310), mariadb-common (>= 1:10.11.9+maria~ubu2310), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.7+maria~ubu2310), mariadb-client (<< 1:10.11.8+maria~ubu2310), mariadb-client (<< 1:10.11.9+maria~ubu2310), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.7+maria~ubu2310), mariadb-server (<< 1:10.11.8+maria~ubu2310), mariadb-server (<< 1:10.11.9+maria~ubu2310), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.7+maria~ubu2310), mariadb-client (<< 1:10.11.8+maria~ubu2310), mariadb-client (<< 1:10.11.9+maria~ubu2310), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.7+maria~ubu2310), mariadb-server (<< 1:10.11.8+maria~ubu2310), mariadb-server (<< 1:10.11.9+maria~ubu2310), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-server-core**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database core server files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-server-core`
  - Install (apt): `sudo apt install mariadb-server-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libsystemd0 (>= 227), liburing2 (>= 2.3), mariadb-common (>= 1:10.11.13+maria~ubu2404), mariadb-common (>= 1:10.11.14+maria~ubu2404), mariadb-common (>= 1:10.11.15+maria~ubu2404), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.13+maria~ubu2404), mariadb-client (<< 1:10.11.14+maria~ubu2404), mariadb-client (<< 1:10.11.15+maria~ubu2404), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2404), mariadb-server (<< 1:10.11.14+maria~ubu2404), mariadb-server (<< 1:10.11.15+maria~ubu2404), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.13+maria~ubu2404), mariadb-client (<< 1:10.11.14+maria~ubu2404), mariadb-client (<< 1:10.11.15+maria~ubu2404), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.13+maria~ubu2404), mariadb-server (<< 1:10.11.14+maria~ubu2404), mariadb-server (<< 1:10.11.15+maria~ubu2404), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: amd64, arm64, ppc64el
  - Suite: bionic
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.27), libpcre2-8-0 (>= 10.31), libpcre2-posix0 (>= 10.31), libpmem1 (>= 1.4), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), mariadb-client (= 1:10.11.3+maria~ubu1804), mariadb-client (= 1:10.11.4+maria~ubu1804), mariadb-client (= 1:10.11.5+maria~ubu1804), mariadb-server (= 1:10.11.3+maria~ubu1804), mariadb-server (= 1:10.11.4+maria~ubu1804), mariadb-server (= 1:10.11.5+maria~ubu1804), mariadb-test-data (= 1:10.11.3+maria~ubu1804), mariadb-test-data (= 1:10.11.4+maria~ubu1804), mariadb-test-data (= 1:10.11.5+maria~ubu1804), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-server-5.5, mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: focal
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libpcre2-posix2 (>= 10.34), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), mariadb-client (= 1:10.11.10+maria~ubu2004), mariadb-client (= 1:10.11.11+maria~ubu2004), mariadb-client (= 1:10.11.13+maria~ubu2004), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), mariadb-test-data (= 1:10.11.10+maria~ubu2004), mariadb-test-data (= 1:10.11.11+maria~ubu2004), mariadb-test-data (= 1:10.11.13+maria~ubu2004), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: jammy
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libpcre2-posix3 (>= 10.34), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), liburing2 (>= 2.1), mariadb-client (= 1:10.11.13+maria~ubu2204), mariadb-client (= 1:10.11.14+maria~ubu2204), mariadb-client (= 1:10.11.15+maria~ubu2204), mariadb-server (= 1:10.11.13+maria~ubu2204), mariadb-server (= 1:10.11.14+maria~ubu2204), mariadb-server (= 1:10.11.15+maria~ubu2204), mariadb-test-data (= 1:10.11.13+maria~ubu2204), mariadb-test-data (= 1:10.11.14+maria~ubu2204), mariadb-test-data (= 1:10.11.15+maria~ubu2204), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: amd64, arm64
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre2-posix3 (>= 10.34), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), liburing2 (>= 2.1), mariadb-client (= 1:10.11.3+maria~ubu2210), mariadb-client (= 1:10.11.4+maria~ubu2210), mariadb-client (= 1:10.11.5+maria~ubu2210), mariadb-server (= 1:10.11.3+maria~ubu2210), mariadb-server (= 1:10.11.4+maria~ubu2210), mariadb-server (= 1:10.11.5+maria~ubu2210), mariadb-test-data (= 1:10.11.3+maria~ubu2210), mariadb-test-data (= 1:10.11.4+maria~ubu2210), mariadb-test-data (= 1:10.11.5+maria~ubu2210), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-server-5.5, mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.35), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre2-posix3 (>= 10.34), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 12), liburing2 (>= 2.3), mariadb-client (= 1:10.11.5+maria~ubu2304), mariadb-client (= 1:10.11.6+maria~ubu2304), mariadb-client (= 1:10.11.7+maria~ubu2304), mariadb-server (= 1:10.11.5+maria~ubu2304), mariadb-server (= 1:10.11.6+maria~ubu2304), mariadb-server (= 1:10.11.7+maria~ubu2304), mariadb-test-data (= 1:10.11.5+maria~ubu2304), mariadb-test-data (= 1:10.11.6+maria~ubu2304), mariadb-test-data (= 1:10.11.7+maria~ubu2304), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-server-5.5, mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: amd64, arm64
  - Suite: mantic
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre2-posix3 (>= 10.34), libpmem1 (>= 1.4), libssl3 (>= 3.0.0), libstdc++6 (>= 13.1), liburing2 (>= 2.3), mariadb-client (= 1:10.11.7+maria~ubu2310), mariadb-client (= 1:10.11.8+maria~ubu2310), mariadb-client (= 1:10.11.9+maria~ubu2310), mariadb-server (= 1:10.11.7+maria~ubu2310), mariadb-server (= 1:10.11.8+maria~ubu2310), mariadb-server (= 1:10.11.9+maria~ubu2310), mariadb-test-data (= 1:10.11.7+maria~ubu2310), mariadb-test-data (= 1:10.11.8+maria~ubu2310), mariadb-test-data (= 1:10.11.9+maria~ubu2310), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-server-5.5, mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: noble
  - Components: main
  - Description: MariaDB database regression test suite
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test`
  - Install (apt): `sudo apt install mariadb-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.3.1), libgcc-s1 (>= 3.4.4), libgcc-s1 (>= 4.5), libpcre2-8-0 (>= 10.22), libpcre2-posix3 (>= 10.34), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), liburing2 (>= 2.3), mariadb-client (= 1:10.11.13+maria~ubu2404), mariadb-client (= 1:10.11.14+maria~ubu2404), mariadb-client (= 1:10.11.15+maria~ubu2404), mariadb-server (= 1:10.11.13+maria~ubu2404), mariadb-server (= 1:10.11.14+maria~ubu2404), mariadb-server (= 1:10.11.15+maria~ubu2404), mariadb-test-data (= 1:10.11.13+maria~ubu2404), mariadb-test-data (= 1:10.11.14+maria~ubu2404), mariadb-test-data (= 1:10.11.15+maria~ubu2404), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: all
  - Suite: kinetic
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: all
  - Suite: lunar
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: all
  - Suite: mantic
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mariadb-test-data**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: all
  - Suite: noble
  - Components: main
  - Description: MariaDB database regression test suite - data files
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mariadb-test-data`
  - Install (apt): `sudo apt install mariadb-test-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.38), libpam0g (>= 0.99.7.1), perl:any
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-5.5, mariadb-test-data-10.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0

  </details>

- **mysql-common**
  - Latest version: 1:10.11.5+maria~ubu1804
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.15+maria~ubu2204
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.5+maria~ubu2210
  - Architectures: all
  - Suite: kinetic
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <maria-developers@lists.launchpad.net>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.7+maria~ubu2304
  - Architectures: all
  - Suite: lunar
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.9+maria~ubu2310
  - Architectures: all
  - Suite: mantic
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional

  </details>

- **mysql-common**
  - Latest version: 1:10.11.15+maria~ubu2404
  - Architectures: all
  - Suite: noble
  - Components: main
  - Description: MariaDB client common configuration files package (e.g. /etc/mysql/my.cnf)
  - Homepage: https://mariadb.org/
  - Install: `sudo apt-get install mysql-common`
  - Install (apt): `sudo apt install mysql-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: MariaDB Developers <developers@lists.mariadb.org>
  - Section: database
  - Priority: optional

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
- Repo notes: MariaDB 10.11 repository for Ubuntu
- Repo tags: database, mysql
- Key notes: MariaDB APT repository key (SHA-256)
- Key tags: database, mysql
