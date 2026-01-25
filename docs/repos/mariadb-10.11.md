# MariaDB 10.11 (Stable) (ubuntu-22.04)

## Repository
- Repository ID: `mariadb-10.11`
- OS: `ubuntu-22.04`
- Source: `https://deb.mariadb.org/10.11/ubuntu focal main`

## Upstream documentation
- Documentation URL: https://mariadb.org/download/?t=repo-config
- Key documentation URL: https://downloads.mariadb.org/mariadb-release-signing-key

## Key reference
- Key ID: `mariadb`
- Expected fingerprints:
  - 177F4010FE56CA3336300305F1656F24C74CD1D8
- Key source URL: https://mariadb.org/mariadb_release_signing_key.pgp

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc | gpg --dearmor | sudo tee /usr/share/keyrings/mariadb.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/mariadb-10.11.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/mariadb.asc -o /tmp/mariadb.asc
gpg --dearmor /tmp/mariadb.asc
sudo install -m 0644 /tmp/mariadb.gpg /usr/share/keyrings/mariadb.gpg
echo "deb [signed-by=/usr/share/keyrings/mariadb.gpg] https://deb.mariadb.org/10.11/ubuntu focal main" | sudo tee /etc/apt/sources.list.d/mariadb-10.11.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (37)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a>
</div>


### <a id="packages-G"></a>G

- **galera-4**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.17), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9)
  - conflicts: galera-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-3, percona-galera-4, percona-xtradb-cluster-galera, percona-xtradb-cluster-galera-2.x, percona-xtradb-cluster-galera-26, percona-xtradb-cluster-galera-3.x, percona-xtradb-cluster-galera-4.x, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x
  - breaks: galera
  - replaces: galera
  - provides: galera, galera-4, wsrep

  </details>

- **galera-4-dbg**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64
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

- **galera-arbitrator-4**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64
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
  - depends: libboost-program-options1.71.0, libc6 (>= 2.17), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), lsb-base (>= 3.0-6)
  - conflicts: galera-arbitrator-3, garbd-2, garbd-3, garbd2, garbd3, percona-galera-arbitrator-3, percona-galera-arbitrator-4, percona-xtradb-cluster-garbd-2.x, percona-xtradb-cluster-garbd-3.x, percona-xtradb-cluster-garbd-4.x

  </details>

- **galera-arbitrator-4-dbg**
  - Latest version: 26.4.22-ubu2004
  - Architectures: amd64
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


### <a id="packages-L"></a>L

- **libmariadb-dev**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.4), libmariadb3 (= 1:10.11.10+maria~ubu2004), libmariadb3 (= 1:10.11.11+maria~ubu2004), libmariadb3 (= 1:10.11.13+maria~ubu2004), libssl-dev, zlib1g-dev
  - conflicts: libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmariadbclient16-dev
  - breaks: libmariadb-client-lgpl-dev, libmysqlclient-dev (<< 1:10.11.10+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.11+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev (<< 1:10.11.10+maria~ubu2004), libmysqld-dev (<< 1:10.11.11+maria~ubu2004), libmysqld-dev (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadb-client-lgpl-dev, libmariadb-dev-compat (<< 3.0.0), libmariadbclient-dev, libmysqlclient-dev (<< 1:10.11.10+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.11+maria~ubu2004), libmysqlclient-dev (<< 1:10.11.13+maria~ubu2004), libmysqld-dev (<< 1:10.11.10+maria~ubu2004), libmysqld-dev (<< 1:10.11.11+maria~ubu2004), libmysqld-dev (<< 1:10.11.13+maria~ubu2004)
  - provides: libmariadbclient-dev

  </details>

- **libmariadb-dev-compat**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **libmariadb3**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **libmariadb3-compat**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **libmariadbclient18**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **libmariadbd-dev**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **libmariadbd19**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), zlib1g (>= 1:1.2.0)
  - conflicts: libmariadbd19t64
  - breaks: libmariadbd-dev (<< 1:10.11.10+maria~ubu2004), libmariadbd-dev (<< 1:10.11.11+maria~ubu2004), libmariadbd-dev (<< 1:10.11.13+maria~ubu2004)
  - replaces: libmariadbd-dev (<< 1:10.11.10+maria~ubu2004), libmariadbd-dev (<< 1:10.11.11+maria~ubu2004), libmariadbd-dev (<< 1:10.11.13+maria~ubu2004)

  </details>

- **libmysqlclient18**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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


### <a id="packages-M"></a>M

- **mariadb-backup**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libsystemd0 (>= 227), mariadb-client-core (= 1:10.11.10+maria~ubu2004), mariadb-client-core (= 1:10.11.11+maria~ubu2004), mariadb-client-core (= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.2.0)
  - breaks: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1
  - replaces: mariadb-backup-10.1, mariadb-backup-10.2, mariadb-backup-10.3, mariadb-client-10.1

  </details>

- **mariadb-client**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-client-core**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-connect**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-cracklib-password-check**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libcrack2 (>= 2.9.0), mariadb-server

  </details>

- **mariadb-plugin-gssapi-client**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libgssapi-krb5-2 (>= 1.17), mariadb-client (= 1:10.11.10+maria~ubu2004), mariadb-client (= 1:10.11.11+maria~ubu2004), mariadb-client (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4
  - replaces: mariadb-gssapi-client-10.1, mariadb-gssapi-client-10.2, mariadb-gssapi-client-10.3, mariadb-gssapi-client-10.4

  </details>

- **mariadb-plugin-gssapi-server**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libgssapi-krb5-2 (>= 1.17), libkrb5-3 (>= 1.13~alpha1+dfsg), mariadb-server
  - breaks: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-gssapi-server-10.1, mariadb-gssapi-server-10.2, mariadb-gssapi-server-10.3, mariadb-gssapi-server-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-hashicorp-key-management**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libstdc++6 (>= 5.2), mariadb-server

  </details>

- **mariadb-plugin-mroonga**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-oqgraph**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libgcc-s1 (>= 3.0), libjudydebian1, libstdc++6 (>= 5.2), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1
  - replaces: mariadb-oqgraph-engine-10.0, mariadb-oqgraph-engine-10.1, mariadb-oqgraph-engine-10.2, mariadb-oqgraph-engine-10.3, mariadb-oqgraph-engine-10.4, mariadb-server-10.0, mariadb-server-10.1

  </details>

- **mariadb-plugin-provider-bzip2**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-provider-lz4**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-provider-lzma**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-provider-lzo**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-provider-snappy**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-rocksdb**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.29), libc6 (>= 2.30), libgcc-s1 (>= 3.0), libgcc-s1 (>= 3.4), liblz4-1 (>= 0.0~r130), libsnappy1v5 (>= 1.1.8), libstdc++6 (>= 9), libzstd1 (>= 1.3.2), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), python3:any, rocksdb-tools, zlib1g (>= 1:1.1.4), zlib1g (>= 1:1.2.0)
  - recommends: python3-mysqldb
  - breaks: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4
  - replaces: mariadb-rocksdb-engine-10.2, mariadb-rocksdb-engine-10.3, mariadb-rocksdb-engine-10.4

  </details>

- **mariadb-plugin-s3**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-plugin-spider**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libc6 (>= 2.14), libgcc-s1 (>= 3.0), libstdc++6 (>= 4.9), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004)
  - breaks: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4
  - replaces: mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4

  </details>

- **mariadb-server**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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

- **mariadb-server-core**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libpcre2-8-0 (>= 10.22), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), libsystemd0 (>= 227), mariadb-common (>= 1:10.11.10+maria~ubu2004), mariadb-common (>= 1:10.11.11+maria~ubu2004), mariadb-common (>= 1:10.11.13+maria~ubu2004), zlib1g (>= 1:1.2.0)
  - conflicts: mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-10.6, mariadb-server-core-10.7, mariadb-server-core-10.8, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-server-5.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, virtual-mysql-server-core
  - breaks: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mysql-client-5.5, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-client (<< 1:10.11.10+maria~ubu2004), mariadb-client (<< 1:10.11.11+maria~ubu2004), mariadb-client (<< 1:10.11.13+maria~ubu2004), mariadb-client-10.0, mariadb-client-10.1, mariadb-client-10.2, mariadb-client-10.3, mariadb-client-10.4, mariadb-client-10.5, mariadb-client-10.6, mariadb-client-10.7, mariadb-client-10.8, mariadb-server (<< 1:10.11.10+maria~ubu2004), mariadb-server (<< 1:10.11.11+maria~ubu2004), mariadb-server (<< 1:10.11.13+maria~ubu2004), mariadb-server-10.0, mariadb-server-10.1, mariadb-server-10.2, mariadb-server-10.3, mariadb-server-10.4, mariadb-server-10.5, mariadb-server-10.6, mariadb-server-10.7, mariadb-server-10.8, mariadb-server-core-10.0, mariadb-server-core-10.1, mariadb-server-core-10.2, mariadb-server-core-10.3, mariadb-server-core-10.4, mariadb-server-core-10.5, mariadb-server-core-5.1, mariadb-server-core-5.2, mariadb-server-core-5.3, mariadb-server-core-5.5, mysql-client-5.5, mysql-server-5.0, mysql-server-5.5, mysql-server-5.6, mysql-server-5.7, mysql-server-8.0, mysql-server-core-5.0, mysql-server-core-5.1, mysql-server-core-5.5, mysql-server-core-5.6, mysql-server-core-5.7, mysql-server-core-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-server-core
  - provides: default-mysql-server-core, virtual-mysql-server-core

  </details>

- **mariadb-test**
  - Latest version: 1:10.11.13+maria~ubu2004
  - Architectures: amd64
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
  - depends: libaio1 (>= 0.3.93), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 3.0), libpcre2-8-0 (>= 10.22), libpcre2-posix2 (>= 10.34), libssl1.1 (>= 1.1.1), libstdc++6 (>= 9), mariadb-client (= 1:10.11.10+maria~ubu2004), mariadb-client (= 1:10.11.11+maria~ubu2004), mariadb-client (= 1:10.11.13+maria~ubu2004), mariadb-server (= 1:10.11.10+maria~ubu2004), mariadb-server (= 1:10.11.11+maria~ubu2004), mariadb-server (= 1:10.11.13+maria~ubu2004), mariadb-test-data (= 1:10.11.10+maria~ubu2004), mariadb-test-data (= 1:10.11.11+maria~ubu2004), mariadb-test-data (= 1:10.11.13+maria~ubu2004), perl:any, zlib1g (>= 1:1.2.0)
  - suggests: patch
  - conflicts: mariadb-server-5.5, mysql-server-5.7, mysql-server-core-8.0
  - breaks: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7
  - replaces: mariadb-test-10.0, mariadb-test-10.1, mariadb-test-10.2, mariadb-test-10.3, mariadb-test-10.4, mariadb-test-5.5, mysql-client-5.5, mysql-server-5.5, mysql-server-5.7, mysql-server-core-8.0, mysql-testsuite, mysql-testsuite-5.5, mysql-testsuite-5.6, mysql-testsuite-5.7, mysql-testsuite-8.0, percona-server-server-5.6, percona-xtradb-cluster-server-5.6, percona-xtradb-cluster-server-5.7, virtual-mysql-testsuite
  - provides: virtual-mysql-testsuite

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


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: MariaDB 10.11 repository for Ubuntu
- Repo tags: database, mysql
- Key notes: MariaDB APT repository key (SHA-256)
- Key tags: database, mysql
