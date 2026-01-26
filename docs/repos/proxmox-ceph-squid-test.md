# Proxmox Ceph Squid - test

## Repository
- Repository ID: `proxmox-ceph-squid-test`
- Base URL: `http://download.proxmox.com/debian/ceph-squid`
- Host: `download.proxmox.com`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Suites
- Suite: `bookworm`
  - Components: no-subscription, test
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `trixie`
  - Components: no-subscription, test
  - Architectures: (not listed)
  - Observed OSes: debian-13, proxmox-9

## OS hints
- Debian, proxmox

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `proxmox-archive-keyring-trixie`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
  - 24B30F06ECC1836A4E5EFECBA7BCD1420BFE778E
- Key source URL: (not set)

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/ceph-squid bookworm no-subscription test" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-test-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/ceph-squid bookworm no-subscription test" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-test-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/ceph-squid trixie no-subscription test" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-test-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/ceph-squid trixie no-subscription test" | sudo tee /etc/apt/sources.list.d/proxmox-ceph-squid-test-trixie.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (52)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-L">L</a> <a href="#packages-P">P</a> <a href="#packages-R">R</a>
</div>


### <a id="packages-C"></a>C

- **ceph**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: distributed storage and file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph`
  - Install (apt): `sudo apt install ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), ceph-mon (= 19.2.2-pve5), ceph-mon (= 19.2.3-pve1), ceph-mon (= 19.2.3-pve2), ceph-mon (= 19.2.3-pve4), ceph-osd (= 19.2.2-pve5), ceph-osd (= 19.2.3-pve1), ceph-osd (= 19.2.3-pve2), ceph-osd (= 19.2.3-pve4)
  - recommends: ceph-mds (= 19.2.2-pve5), ceph-mds (= 19.2.3-pve1), ceph-mds (= 19.2.3-pve2), ceph-mds (= 19.2.3-pve4)

  </details>

- **ceph-base**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: common ceph daemon libraries and management tools
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-base`
  - Install (apt): `sudo apt install ceph-base`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: binutils, ceph-common (= 19.2.2-pve5), ceph-common (= 19.2.3-pve1), ceph-common (= 19.2.3-pve2), ceph-common (= 19.2.3-pve4), libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcap2 (>= 1:2.10), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libsnappy1v5 (>= 1.2.2), libstdc++6 (>= 14), logrotate, parted, psmisc, python3:any, zlib1g (>= 1:1.2.0)
  - recommends: btrfs-tools, ceph-mds (= 19.2.2-pve5), ceph-mds (= 19.2.3-pve1), ceph-mds (= 19.2.3-pve2), ceph-mds (= 19.2.3-pve4), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libradosstriper1 (= 19.2.2-pve5), libradosstriper1 (= 19.2.3-pve1), libradosstriper1 (= 19.2.3-pve2), libradosstriper1 (= 19.2.3-pve4), librbd1 (= 19.2.2-pve5), librbd1 (= 19.2.3-pve1), librbd1 (= 19.2.3-pve2), librbd1 (= 19.2.3-pve4), ntp | time-daemon, nvme-cli, smartmontools
  - breaks: ceph (<< 10), ceph-test (<< 12.2.2-14), python-ceph (<< 0.92-1223)
  - replaces: ceph (<< 10), ceph-common (<< 0.78-500), ceph-test (<< 12.2.2-14), python-ceph (<< 0.92-1223)

  </details>

- **ceph-common**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: common utilities to mount and interact with a ceph storage cluster
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-common`
  - Install (apt): `sudo apt install ceph-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: adduser (>= 3.11), libbabeltrace1 (>= 1.5.4), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcap-ng0 (>= 0.7.9), libcephfs2 (>= 19.2.2), libcephfs2 (>= 19.2.3), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libicu76 (>= 76.1-1~), libkeyutils1 (>= 1.4), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), libncurses6 (>= 6), liboath0t64 (>= 1.10.0), librabbitmq4 (>= 0.10.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libradosstriper1 (>= 19.2.2), libradosstriper1 (>= 19.2.3), librbd1 (= 19.2.2-pve5), librbd1 (= 19.2.3-pve1), librbd1 (= 19.2.3-pve2), librbd1 (= 19.2.3-pve4), librdkafka1 (>= 0.9.2), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), libtinfo6 (>= 6), libudev1 (>= 183), python3-ceph-argparse (= 19.2.2-pve5), python3-ceph-argparse (= 19.2.3-pve1), python3-ceph-argparse (= 19.2.3-pve2), python3-ceph-argparse (= 19.2.3-pve4), python3-ceph-common (= 19.2.2-pve5), python3-ceph-common (= 19.2.3-pve1), python3-ceph-common (= 19.2.3-pve2), python3-ceph-common (= 19.2.3-pve4), python3-cephfs (= 19.2.2-pve5), python3-cephfs (= 19.2.3-pve1), python3-cephfs (= 19.2.3-pve2), python3-cephfs (= 19.2.3-pve4), python3-prettytable, python3-rados (= 19.2.2-pve5), python3-rados (= 19.2.3-pve1), python3-rados (= 19.2.3-pve2), python3-rados (= 19.2.3-pve4), python3-rbd (= 19.2.2-pve5), python3-rbd (= 19.2.3-pve1), python3-rbd (= 19.2.3-pve2), python3-rbd (= 19.2.3-pve4), python3-rgw (= 19.2.2-pve5), python3-rgw (= 19.2.3-pve1), python3-rgw (= 19.2.3-pve2), python3-rgw (= 19.2.3-pve4), python3:any, zlib1g (>= 1:1.2.0)
  - suggests: ceph-base (= 19.2.2-pve5), ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4), ceph-mds (= 19.2.2-pve5), ceph-mds (= 19.2.3-pve1), ceph-mds (= 19.2.3-pve2), ceph-mds (= 19.2.3-pve4)
  - conflicts: ceph-client-tools
  - breaks: ceph (<< 10), ceph-fs-common (<< 11.0), ceph-test (<< 9.0.3-1646), librbd1 (<< 0.92-1238), python-ceph (<< 0.92-1223), radosgw (<< 12.0.3)
  - replaces: ceph (<< 10), ceph-client-tools, ceph-fs-common (<< 11.0), ceph-test (<< 9.0.3-1646), librbd1 (<< 0.92-1238), python-ceph (<< 0.92-1223), radosgw (<< 12.0.3)

  </details>

- **ceph-exporter**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: metrics exporter for the ceph distributed storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-exporter`
  - Install (apt): `sudo apt install ceph-exporter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4)

  </details>

- **ceph-fuse**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: FUSE-based client for the Ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-fuse`
  - Install (apt): `sudo apt install ceph-fuse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: fuse, libc6 (>= 2.38), libfuse2t64 (>= 2.9), libgcc-s1 (>= 3.0), libicu76 (>= 76.1-1~), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 14), python3:any

  </details>

- **ceph-grafana-dashboards**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: grafana dashboards for the ceph dashboard
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-grafana-dashboards`
  - Install (apt): `sudo apt install ceph-grafana-dashboards`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional

  </details>

- **ceph-immutable-object-cache**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph daemon for immutable object cache
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-immutable-object-cache`
  - Install (apt): `sudo apt install ceph-immutable-object-cache`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve5), ceph-common (= 19.2.3-pve1), ceph-common (= 19.2.3-pve2), ceph-common (= 19.2.3-pve4), libc6 (>= 2.38), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libstdc++6 (>= 14)

  </details>

- **ceph-mds**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: metadata server for the ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mds`
  - Install (apt): `sudo apt install ceph-mds`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve5), ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4), libc6 (>= 2.38), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), liblua5.3-0, librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 14)
  - recommends: ceph-fuse (= 19.2.2-pve5), ceph-fuse (= 19.2.3-pve1), ceph-fuse (= 19.2.3-pve2), ceph-fuse (= 19.2.3-pve4), libcephfs2 (= 19.2.2-pve5), libcephfs2 (= 19.2.3-pve1), libcephfs2 (= 19.2.3-pve2), libcephfs2 (= 19.2.3-pve4)
  - breaks: ceph (<< 0.93-417)
  - replaces: ceph (<< 0.93-417)

  </details>

- **ceph-mgr**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: manager for the ceph distributed storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr`
  - Install (apt): `sudo apt install ceph-mgr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve5), ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4), ceph-mgr-modules-core (= 19.2.2-pve5), ceph-mgr-modules-core (= 19.2.3-pve1), ceph-mgr-modules-core (= 19.2.3-pve2), ceph-mgr-modules-core (= 19.2.3-pve4), libc6 (>= 2.38), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libpython3.13 (>= 3.13.0~rc3), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libsqlite3-0 (>= 3.5.9), libsqlite3-mod-ceph (= 19.2.2-pve5), libsqlite3-mod-ceph (= 19.2.3-pve1), libsqlite3-mod-ceph (= 19.2.3-pve2), libsqlite3-mod-ceph (= 19.2.3-pve4), libstdc++6 (>= 14), python3-bcrypt, python3-ceph-argparse, python3-cephfs, python3-openssl, python3-yaml
  - suggests: ceph-mgr-cephadm, ceph-mgr-dashboard, ceph-mgr-diskprediction-local, ceph-mgr-k8sevents, python3-influxdb
  - breaks: ceph (<< 0.93-417)
  - replaces: ceph (<< 0.93-417)

  </details>

- **ceph-mgr-cephadm**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: cephadm orchestrator module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-cephadm`
  - Install (apt): `sudo apt install ceph-mgr-cephadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), cephadm, openssh-client, python3-asyncssh, python3-cherrypy3, python3-cryptography, python3-jinja2

  </details>

- **ceph-mgr-dashboard**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: dashboard module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-dashboard`
  - Install (apt): `sudo apt install ceph-mgr-dashboard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), python3-bcrypt, python3-ceph-common, python3-cherrypy3, python3-jwt, python3-more-itertools, python3-openssl, python3-prettytable, python3-requests, python3-routes, python3-yaml

  </details>

- **ceph-mgr-diskprediction-local**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: diskprediction-local module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-diskprediction-local`
  - Install (apt): `sudo apt install ceph-mgr-diskprediction-local`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), python3-numpy, python3-scipy, python3-sklearn

  </details>

- **ceph-mgr-k8sevents**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: kubernetes events module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-k8sevents`
  - Install (apt): `sudo apt install ceph-mgr-k8sevents`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), python3-kubernetes, python3-yaml

  </details>

- **ceph-mgr-modules-core**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: ceph manager modules which are always enabled
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-modules-core`
  - Install (apt): `sudo apt install ceph-mgr-modules-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: python3-cherrypy3, python3-dateutil, python3-natsort, python3-packaging, python3-pecan, python3-requests, python3-werkzeug
  - breaks: ceph-mgr (<< 15.1.0)
  - replaces: ceph-mgr (<< 15.1.0)

  </details>

- **ceph-mgr-rook**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: rook module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-rook`
  - Install (apt): `sudo apt install ceph-mgr-rook`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve5), ceph-mgr (= 19.2.3-pve1), ceph-mgr (= 19.2.3-pve2), ceph-mgr (= 19.2.3-pve4), python3-jsonpatch, python3-kubernetes

  </details>

- **ceph-mon**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: monitor server for the ceph storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mon`
  - Install (apt): `sudo apt install ceph-mon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve5), ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4), libc6 (>= 2.38), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libsnappy1v5 (>= 1.2.2), libstdc++6 (>= 14), zlib1g (>= 1:1.2.0)
  - breaks: ceph (<< 10), ceph-test (<< 12.2.2-14)
  - replaces: ceph (<< 10), ceph-test (<< 12.2.2-14)

  </details>

- **ceph-osd**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: OSD server for the ceph storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-osd`
  - Install (apt): `sudo apt install ceph-osd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve5), ceph-base (= 19.2.3-pve1), ceph-base (= 19.2.3-pve2), ceph-base (= 19.2.3-pve4), libaio1t64 (>= 0.3.93), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcap2 (>= 1:2.10), libfuse2t64 (>= 2.8), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), libibverbs1 (>= 1.1.6), liblttng-ust1t64 (>= 2.13.0), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librdmacm1t64 (>= 1.0.15), libsnappy1v5 (>= 1.2.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libudev1 (>= 183), sudo, zlib1g (>= 1:1.2.0)
  - recommends: ceph-volume (= 19.2.2-pve5), ceph-volume (= 19.2.3-pve1), ceph-volume (= 19.2.3-pve2), ceph-volume (= 19.2.3-pve4), nvme-cli, smartmontools
  - breaks: ceph (<< 10), ceph-osd (<< 17.0.0), ceph-test (<< 12.2.2-14)
  - replaces: ceph (<< 10), ceph-osd (<< 17.0.0), ceph-test (<< 12.2.2-14)

  </details>

- **ceph-prometheus-alerts**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: prometheus alerts for the ceph dashboard
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-prometheus-alerts`
  - Install (apt): `sudo apt install ceph-prometheus-alerts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional

  </details>

- **ceph-resource-agents**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: OCF-compliant resource agents for Ceph
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-resource-agents`
  - Install (apt): `sudo apt install ceph-resource-agents`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: extra
  - depends: ceph (= 19.2.2-pve5), ceph (= 19.2.3-pve1), ceph (= 19.2.3-pve2), ceph (= 19.2.3-pve4), resource-agents
  - recommends: pacemaker

  </details>

- **ceph-test**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph test and benchmarking tools
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-test`
  - Install (apt): `sudo apt install ceph-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common, curl, jq, libaio1t64 (>= 0.3.93), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcap2 (>= 1:2.10), libcephfs2 (>= 19.2.2), libcephfs2 (>= 19.2.3), libcryptsetup12 (>= 2:2.4), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), libicu76 (>= 76.1-1~), libkeyutils1 (>= 1.4), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), libnbd0 (>= 1.0.0), librabbitmq4 (>= 0.10.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libradosstriper1 (>= 19.2.2), libradosstriper1 (>= 19.2.3), librbd1 (>= 19.2.2), librbd1 (>= 19.2.3), librdkafka1 (>= 0.9.2), librgw2 (>= 19.2.2), librgw2 (>= 19.2.3), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libsqlite3-mod-ceph (>= 15.2.0-1), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), libudev1 (>= 183), socat, xmlstarlet, zlib1g (>= 1:1.2.0)
  - breaks: ceph-base (<< 1)
  - replaces: ceph-base (<< 11)

  </details>

- **ceph-volume**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: tool to facilidate OSD deployment
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-volume`
  - Install (apt): `sudo apt install ceph-volume`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: ceph-osd (= 19.2.2-pve5), ceph-osd (= 19.2.3-pve1), ceph-osd (= 19.2.3-pve2), ceph-osd (= 19.2.3-pve4), cryptsetup-bin, e2fsprogs, lvm2, parted, python3-ceph-common, python3-packaging, python3:any, xfsprogs

  </details>

- **cephadm**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: cephadm utility to bootstrap ceph daemons with systemd and containers
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install cephadm`
  - Install (apt): `sudo apt install cephadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: adduser (>= 3.11), lvm2, python3
  - recommends: podman (>= 2.0.2) | docker.io | docker-ce

  </details>

- **cephfs-mirror**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph is a massively scalable, open-source, distributed
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install cephfs-mirror`
  - Install (apt): `sudo apt install cephfs-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve5), ceph-common (= 19.2.3-pve1), ceph-common (= 19.2.3-pve2), ceph-common (= 19.2.3-pve4), libc6 (>= 2.38), libcephfs2 (= 19.2.2-pve5), libcephfs2 (= 19.2.3-pve1), libcephfs2 (= 19.2.3-pve2), libcephfs2 (= 19.2.3-pve4), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libstdc++6 (>= 14)

  </details>

- **cephfs-shell**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: interactive shell for the Ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install cephfs-shell`
  - Install (apt): `sudo apt install cephfs-shell`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: python3-cephfs, python3-cmd2, python3-colorama, python3.13:any

  </details>

- **cephfs-top**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: This package provides a top(1) like utility to display various
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install cephfs-top`
  - Install (apt): `sudo apt install cephfs-top`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: python3-rados, python3.13:any

  </details>


### <a id="packages-L"></a>L

- **libcephfs-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph distributed file system client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-dev`
  - Install (apt): `sudo apt install libcephfs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libcephfs2 (= 19.2.2-pve5), libcephfs2 (= 19.2.3-pve1), libcephfs2 (= 19.2.3-pve2), libcephfs2 (= 19.2.3-pve4)
  - conflicts: libceph-dev, libceph1-dev, libcephfs2-dev
  - replaces: libceph-dev, libceph1-dev, libcephfs2-dev

  </details>

- **libcephfs-java**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: Java libraries for the Ceph File System
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-java`
  - Install (apt): `sudo apt install libcephfs-java`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: java
  - Priority: optional
  - depends: libcephfs-jni (= 19.2.2-pve5), libcephfs-jni (= 19.2.3-pve1), libcephfs-jni (= 19.2.3-pve2), libcephfs-jni (= 19.2.3-pve4)

  </details>

- **libcephfs-jni**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Java Native Interface library for CephFS Java bindings
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-jni`
  - Install (apt): `sudo apt install libcephfs-jni`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: java
  - Priority: optional
  - depends: libc6 (>= 2.17), libcephfs2 (= 19.2.2-pve5), libcephfs2 (= 19.2.3-pve1), libcephfs2 (= 19.2.3-pve2), libcephfs2 (= 19.2.3-pve4), libgcc-s1 (>= 3.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 13.1)

  </details>

- **libcephfs2**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph distributed file system client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs2`
  - Install (apt): `sudo apt install libcephfs2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.0), libicu76 (>= 76.1-1~), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 14)
  - conflicts: libceph, libceph1, libcephfs
  - replaces: libceph, libceph1, libcephfs

  </details>

- **librados-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS distributed object store client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librados-dev`
  - Install (apt): `sudo apt install librados-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libstdc++6 (>= 13.1)
  - conflicts: librados1-dev, librados2-dev
  - replaces: librados1-dev, librados2-dev

  </details>

- **librados2**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS distributed object store client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librados2`
  - Install (apt): `sudo apt install librados2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libblkid1 (>= 2.17.2), libc6 (>= 2.38), libgcc-s1 (>= 3.4), libibverbs1 (>= 1.1.6), liblttng-ust1t64 (>= 2.13.0), librdmacm1t64 (>= 1.0.15), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libudev1 (>= 183), zlib1g (>= 1:1.1.4)
  - conflicts: librados
  - replaces: librados

  </details>

- **libradospp-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS distributed object store client C++ library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradospp-dev`
  - Install (apt): `sudo apt install libradospp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve5), librados-dev (= 19.2.3-pve1), librados-dev (= 19.2.3-pve2), librados-dev (= 19.2.3-pve4)

  </details>

- **libradosstriper-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS striping interface (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradosstriper-dev`
  - Install (apt): `sudo apt install libradosstriper-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libradosstriper1 (= 19.2.2-pve5), libradosstriper1 (= 19.2.3-pve1), libradosstriper1 (= 19.2.3-pve2), libradosstriper1 (= 19.2.3-pve4)

  </details>

- **libradosstriper1**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS striping interface
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradosstriper1`
  - Install (apt): `sudo apt install libradosstriper1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libstdc++6 (>= 14)

  </details>

- **librbd-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS block device client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librbd-dev`
  - Install (apt): `sudo apt install librbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve5), librados-dev (= 19.2.3-pve1), librados-dev (= 19.2.3-pve2), librados-dev (= 19.2.3-pve4), librbd1 (= 19.2.2-pve5), librbd1 (= 19.2.3-pve1), librbd1 (= 19.2.3-pve2), librbd1 (= 19.2.3-pve4)
  - conflicts: librbd1-dev
  - replaces: librbd1-dev

  </details>

- **librbd1**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS block device client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librbd1`
  - Install (apt): `sudo apt install librbd1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcap2 (>= 1:2.10), libcryptsetup12 (>= 2:2.4), libgcc-s1 (>= 3.4), liblttng-ust1t64 (>= 2.13.0), libnbd0 (>= 1.0.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14)

  </details>

- **librgw-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librgw-dev`
  - Install (apt): `sudo apt install librgw-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve5), librados-dev (= 19.2.3-pve1), librados-dev (= 19.2.3-pve2), librados-dev (= 19.2.3-pve4), librgw2 (= 19.2.2-pve5), librgw2 (= 19.2.3-pve1), librgw2 (= 19.2.3-pve2), librgw2 (= 19.2.3-pve4)

  </details>

- **librgw2**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS Gateway client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librgw2`
  - Install (apt): `sudo apt install librgw2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libicu76 (>= 76.1-1~), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), librabbitmq4 (>= 0.10.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), librdkafka1 (>= 0.9.2), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), zlib1g (>= 1:1.2.0)
  - suggests: luarocks

  </details>

- **libsqlite3-mod-ceph**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: SQLite3 VFS for Ceph
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libsqlite3-mod-ceph`
  - Install (apt): `sudo apt install libsqlite3-mod-ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libstdc++6 (>= 13.1)

  </details>

- **libsqlite3-mod-ceph-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: SQLite3 VFS for Ceph (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libsqlite3-mod-ceph-dev`
  - Install (apt): `sudo apt install libsqlite3-mod-ceph-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libsqlite3-dev, libsqlite3-mod-ceph (= 19.2.2-pve5), libsqlite3-mod-ceph (= 19.2.3-pve1), libsqlite3-mod-ceph (= 19.2.3-pve2), libsqlite3-mod-ceph (= 19.2.3-pve4)

  </details>


### <a id="packages-P"></a>P

- **python3-ceph**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Meta-package for python libraries for the Ceph libraries
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-ceph`
  - Install (apt): `sudo apt install python3-ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: python3-cephfs (= 19.2.2-pve5), python3-cephfs (= 19.2.3-pve1), python3-cephfs (= 19.2.3-pve2), python3-cephfs (= 19.2.3-pve4), python3-rados (= 19.2.2-pve5), python3-rados (= 19.2.3-pve1), python3-rados (= 19.2.3-pve2), python3-rados (= 19.2.3-pve4), python3-rbd (= 19.2.2-pve5), python3-rbd (= 19.2.3-pve1), python3-rbd (= 19.2.3-pve2), python3-rbd (= 19.2.3-pve4), python3-rgw (= 19.2.2-pve5), python3-rgw (= 19.2.3-pve1), python3-rgw (= 19.2.3-pve2), python3-rgw (= 19.2.3-pve4)

  </details>

- **python3-ceph-argparse**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: Python 3 utility libraries for Ceph CLI
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-ceph-argparse`
  - Install (apt): `sudo apt install python3-ceph-argparse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: python3:any

  </details>

- **python3-ceph-common**
  - Latest version: 19.2.3-pve4
  - Architectures: all
  - Suite: trixie
  - Components: test
  - Description: Python 3 utility libraries for Ceph
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-ceph-common`
  - Install (apt): `sudo apt install python3-ceph-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: python3-yaml, python3:any

  </details>

- **python3-cephfs**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Python 3 libraries for the Ceph libcephfs library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-cephfs`
  - Install (apt): `sudo apt install python3-cephfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libcephfs2 (= 19.2.2-pve5), libcephfs2 (= 19.2.3-pve1), libcephfs2 (= 19.2.3-pve2), libcephfs2 (= 19.2.3-pve4), python3 (<< 3.14), python3 (>= 3.13~), python3-ceph-argparse (= 19.2.2-pve5), python3-ceph-argparse (= 19.2.3-pve1), python3-ceph-argparse (= 19.2.3-pve2), python3-ceph-argparse (= 19.2.3-pve4), python3-rados (= 19.2.2-pve5), python3-rados (= 19.2.3-pve1), python3-rados (= 19.2.3-pve2), python3-rados (= 19.2.3-pve4)

  </details>

- **python3-rados**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Python 3 libraries for the Ceph librados library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-rados`
  - Install (apt): `sudo apt install python3-rados`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), librados2 (>= 19.2.2), librados2 (>= 19.2.3), python3 (<< 3.14), python3 (>= 3.13~)

  </details>

- **python3-rbd**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Python 3 libraries for the Ceph librbd library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-rbd`
  - Install (apt): `sudo apt install python3-rbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), librbd1 (>= 19.2.2-pve5), librbd1 (>= 19.2.3-pve1), librbd1 (>= 19.2.3-pve2), librbd1 (>= 19.2.3-pve4), python3 (<< 3.14), python3 (>= 3.13~)

  </details>

- **python3-rgw**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Python 3 libraries for the Ceph librgw library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-rgw`
  - Install (apt): `sudo apt install python3-rgw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), librgw2 (>= 19.2.2-pve5), librgw2 (>= 19.2.3-pve1), librgw2 (>= 19.2.3-pve2), librgw2 (>= 19.2.3-pve4), python3 (<< 3.14), python3 (>= 3.13~), python3-rados (= 19.2.2-pve5), python3-rados (= 19.2.3-pve1), python3-rados (= 19.2.3-pve2), python3-rados (= 19.2.3-pve4)

  </details>


### <a id="packages-R"></a>R

- **rados-objclass-dev**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: RADOS object class development kit.
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rados-objclass-dev`
  - Install (apt): `sudo apt install rados-objclass-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve5), librados-dev (= 19.2.3-pve1), librados-dev (= 19.2.3-pve2), librados-dev (= 19.2.3-pve4)

  </details>

- **radosgw**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: REST gateway for RADOS distributed object store
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install radosgw`
  - Install (apt): `sudo apt install radosgw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve5), ceph-common (= 19.2.3-pve1), ceph-common (= 19.2.3-pve2), ceph-common (= 19.2.3-pve4), libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libicu76 (>= 76.1-1~), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), librabbitmq4 (>= 0.10.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librdkafka1 (>= 0.9.2), librgw2 (= 19.2.2-pve5), librgw2 (= 19.2.3-pve1), librgw2 (= 19.2.3-pve2), librgw2 (= 19.2.3-pve4), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), media-types | mime-support, zlib1g (>= 1:1.2.0)
  - recommends: ntp | time-daemon
  - suggests: gawk

  </details>

- **rbd-fuse**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: FUSE-based rbd client for the Ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rbd-fuse`
  - Install (apt): `sudo apt install rbd-fuse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libfuse2t64 (>= 2.6), libgcc-s1 (>= 3.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librbd1 (>= 19.2.2), librbd1 (>= 19.2.3), libstdc++6 (>= 14)
  - recommends: fuse

  </details>

- **rbd-mirror**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: Ceph daemon for mirroring RBD images
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rbd-mirror`
  - Install (apt): `sudo apt install rbd-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve5), ceph-common (= 19.2.3-pve1), ceph-common (= 19.2.3-pve2), ceph-common (= 19.2.3-pve4), libc6 (>= 2.38), libcryptsetup12 (>= 2:2.4), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libnbd0 (>= 1.0.0), librados2 (= 19.2.2-pve5), librados2 (= 19.2.3-pve1), librados2 (= 19.2.3-pve2), librados2 (= 19.2.3-pve4), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14)

  </details>

- **rbd-nbd**
  - Latest version: 19.2.3-pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: test
  - Description: NBD-based rbd client for the Ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rbd-nbd`
  - Install (apt): `sudo apt install rbd-nbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 3.0), libnl-3-200 (>= 3.2.7), libnl-genl-3-200 (>= 3.2.21), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librbd1 (>= 19.2.2), librbd1 (>= 19.2.3), libstdc++6 (>= 14)

  </details>


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Test repository; use with caution.
- Repo tags: proxmox, ceph, debian-derivative, apt
- Key tags: proxmox, apt
