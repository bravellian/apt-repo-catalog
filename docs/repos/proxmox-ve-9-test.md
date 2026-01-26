# Proxmox VE 9 - test

## Repository
- Repository ID: `proxmox-ve-9-test`
- Base URL: `http://download.proxmox.com/debian/pve`
- Host: `download.proxmox.com`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Suites
- Suite: `trixie`
  - Components: pve-no-subscription, pve-test, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-13, proxmox-9
- Suite: `bookworm`
  - Components: pve-no-subscription, pve-test, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bullseye`
  - Components: pve-no-subscription, pve-test, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-11

## Key reference
- Key ID: `proxmox-archive-keyring-trixie`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
  - 24B30F06ECC1836A4E5EFECBA7BCD1420BFE778E
- Key source URL: (not set)

## Install instructions

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve trixie pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve trixie pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-trixie.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve bullseye pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-archive-keyring-trixie.asc -o /tmp/proxmox-archive-keyring-trixie.asc
gpg --dearmor /tmp/proxmox-archive-keyring-trixie.asc
sudo install -m 0644 /tmp/proxmox-archive-keyring-trixie.gpg /usr/share/keyrings/proxmox-archive-keyring-trixie.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-archive-keyring-trixie.gpg] http://download.proxmox.com/debian/pve bullseye pve-no-subscription pve-test pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-9-test-bullseye.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (485)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-I">I</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-N">N</a> <a href="#packages-P">P</a> <a href="#packages-Q">Q</a> <a href="#packages-R">R</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a> <a href="#packages-Z">Z</a>
</div>


### <a id="packages-A"></a>A

- **amd64-microcode**
  - Latest version: 3.20251202.1~bpo13+1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Platform firmware and microcode for AMD CPUs and SoCs
  - Install: `sudo apt-get install amd64-microcode`
  - Install (apt): `sudo apt install amd64-microcode`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Henrique de Moraes Holschuh <hmh@debian.org>
  - Section: non-free-firmware/admin
  - Priority: standard
  - recommends: cpio, initramfs-tools (>= 0.113~) | dracut (>= 044) | tiny-initramfs
  - breaks: intel-microcode (<< 2)

  </details>

- **apparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: user-space parser utility for AppArmor
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install apparmor`
  - Install (apt): `sudo apt install apparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: debconf, debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.38)
  - suggests: apparmor-profiles-extra, apparmor-utils
  - breaks: apparmor-profiles-extra (<< 1.21), fcitx-data (<< 1:4.2.9.1-1ubuntu2), snapd (<< 2.44.3+20.04~)
  - replaces: fcitx-data (<< 1:4.2.9.1-1ubuntu2)

  </details>

- **apparmor-dbgsym**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for apparmor
  - Install: `sudo apt-get install apparmor-dbgsym`
  - Install (apt): `sudo apt install apparmor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: apparmor (= 4.1.1-pmx1)

  </details>

- **apparmor-notify**
  - Latest version: 4.1.1-pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: AppArmor notification system
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install apparmor-notify`
  - Install (apt): `sudo apt install apparmor-notify`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: python3-apparmor, python3-gi, python3-libapparmor, python3-notify2, python3-psutil, python3-tk, python3-ttkthemes, python3:any

  </details>

- **apparmor-profiles**
  - Latest version: 4.1.1-pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: experimental profiles for AppArmor security policies
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install apparmor-profiles`
  - Install (apt): `sudo apt install apparmor-profiles`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: apparmor

  </details>

- **apparmor-utils**
  - Latest version: 4.1.1-pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: utilities for controlling AppArmor
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install apparmor-utils`
  - Install (apt): `sudo apt install apparmor-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: apparmor, python3-apparmor (= 4.1.1-pmx1), python3:any
  - suggests: vim-addon-manager
  - breaks: apparmor-easyprof (<< 3.0.3-4)
  - replaces: apparmor-easyprof (<< 3.0.3-4)
  - provides: apparmor-easyprof

  </details>


### <a id="packages-C"></a>C

- **ceph**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: distributed storage and file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph`
  - Install (apt): `sudo apt install ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), ceph-mon (= 19.2.2-pve2), ceph-mon (= 19.2.3-pve1), ceph-osd (= 19.2.2-pve2), ceph-osd (= 19.2.3-pve1)
  - recommends: ceph-mds (= 19.2.2-pve2), ceph-mds (= 19.2.3-pve1)

  </details>

- **ceph-base**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: common ceph daemon libraries and management tools
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-base`
  - Install (apt): `sudo apt install ceph-base`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: binutils, ceph-common (= 19.2.2-pve2), ceph-common (= 19.2.3-pve1), libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcap2 (>= 1:2.10), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libsnappy1v5 (>= 1.2.2), libstdc++6 (>= 14), logrotate, parted, psmisc, python3:any, zlib1g (>= 1:1.2.0)
  - recommends: btrfs-tools, ceph-mds (= 19.2.2-pve2), ceph-mds (= 19.2.3-pve1), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libradosstriper1 (= 19.2.2-pve2), libradosstriper1 (= 19.2.3-pve1), librbd1 (= 19.2.2-pve2), librbd1 (= 19.2.3-pve1), ntp | time-daemon, nvme-cli, smartmontools
  - breaks: ceph (<< 10), ceph-test (<< 12.2.2-14), python-ceph (<< 0.92-1223)
  - replaces: ceph (<< 10), ceph-common (<< 0.78-500), ceph-test (<< 12.2.2-14), python-ceph (<< 0.92-1223)

  </details>

- **ceph-common**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: common utilities to mount and interact with a ceph storage cluster
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-common`
  - Install (apt): `sudo apt install ceph-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: adduser (>= 3.11), libbabeltrace1 (>= 1.5.4), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcap-ng0 (>= 0.7.9), libcephfs2 (>= 19.2.2), libcephfs2 (>= 19.2.3), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libicu76 (>= 76.1-1~), libkeyutils1 (>= 1.4), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), libncurses6 (>= 6), liboath0t64 (>= 1.10.0), librabbitmq4 (>= 0.10.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libradosstriper1 (>= 19.2.2), libradosstriper1 (>= 19.2.3), librbd1 (= 19.2.2-pve2), librbd1 (= 19.2.3-pve1), librdkafka1 (>= 0.9.2), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), libtinfo6 (>= 6), libudev1 (>= 183), python3-ceph-argparse (= 19.2.2-pve2), python3-ceph-argparse (= 19.2.3-pve1), python3-ceph-common (= 19.2.2-pve2), python3-ceph-common (= 19.2.3-pve1), python3-cephfs (= 19.2.2-pve2), python3-cephfs (= 19.2.3-pve1), python3-prettytable, python3-rados (= 19.2.2-pve2), python3-rados (= 19.2.3-pve1), python3-rbd (= 19.2.2-pve2), python3-rbd (= 19.2.3-pve1), python3-rgw (= 19.2.2-pve2), python3-rgw (= 19.2.3-pve1), python3:any, zlib1g (>= 1:1.2.0)
  - suggests: ceph-base (= 19.2.2-pve2), ceph-base (= 19.2.3-pve1), ceph-mds (= 19.2.2-pve2), ceph-mds (= 19.2.3-pve1)
  - conflicts: ceph-client-tools
  - breaks: ceph (<< 10), ceph-fs-common (<< 11.0), ceph-test (<< 9.0.3-1646), librbd1 (<< 0.92-1238), python-ceph (<< 0.92-1223), radosgw (<< 12.0.3)
  - replaces: ceph (<< 10), ceph-client-tools, ceph-fs-common (<< 11.0), ceph-test (<< 9.0.3-1646), librbd1 (<< 0.92-1238), python-ceph (<< 0.92-1223), radosgw (<< 12.0.3)

  </details>

- **ceph-exporter**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: metrics exporter for the ceph distributed storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-exporter`
  - Install (apt): `sudo apt install ceph-exporter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.3-pve1)

  </details>

- **ceph-fuse**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Ceph daemon for immutable object cache
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-immutable-object-cache`
  - Install (apt): `sudo apt install ceph-immutable-object-cache`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve2), ceph-common (= 19.2.3-pve1), libc6 (>= 2.38), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libstdc++6 (>= 14)

  </details>

- **ceph-mds**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: metadata server for the ceph distributed file system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mds`
  - Install (apt): `sudo apt install ceph-mds`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve2), ceph-base (= 19.2.3-pve1), libc6 (>= 2.38), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), liblua5.3-0, librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 14)
  - recommends: ceph-fuse (= 19.2.2-pve2), ceph-fuse (= 19.2.3-pve1), libcephfs2 (= 19.2.2-pve2), libcephfs2 (= 19.2.3-pve1)
  - breaks: ceph (<< 0.93-417)
  - replaces: ceph (<< 0.93-417)

  </details>

- **ceph-mgr**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: manager for the ceph distributed storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr`
  - Install (apt): `sudo apt install ceph-mgr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve2), ceph-base (= 19.2.3-pve1), ceph-mgr-modules-core (= 19.2.2-pve2), ceph-mgr-modules-core (= 19.2.3-pve1), libc6 (>= 2.38), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libpython3.13 (>= 3.13.0~rc3), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libsqlite3-0 (>= 3.5.9), libsqlite3-mod-ceph (= 19.2.2-pve2), libsqlite3-mod-ceph (= 19.2.3-pve1), libstdc++6 (>= 14), python3-bcrypt, python3-ceph-argparse, python3-cephfs, python3-openssl, python3-yaml
  - suggests: ceph-mgr-cephadm, ceph-mgr-dashboard, ceph-mgr-diskprediction-local, ceph-mgr-k8sevents, python3-influxdb
  - breaks: ceph (<< 0.93-417)
  - replaces: ceph (<< 0.93-417)

  </details>

- **ceph-mgr-cephadm**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: cephadm orchestrator module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-cephadm`
  - Install (apt): `sudo apt install ceph-mgr-cephadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), cephadm, openssh-client, python3-asyncssh, python3-cherrypy3, python3-cryptography, python3-jinja2

  </details>

- **ceph-mgr-dashboard**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: dashboard module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-dashboard`
  - Install (apt): `sudo apt install ceph-mgr-dashboard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), python3-bcrypt, python3-ceph-common, python3-cherrypy3, python3-jwt, python3-more-itertools, python3-openssl, python3-prettytable, python3-requests, python3-routes, python3-yaml

  </details>

- **ceph-mgr-diskprediction-local**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: diskprediction-local module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-diskprediction-local`
  - Install (apt): `sudo apt install ceph-mgr-diskprediction-local`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), python3-numpy, python3-scipy, python3-sklearn

  </details>

- **ceph-mgr-k8sevents**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: kubernetes events module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-k8sevents`
  - Install (apt): `sudo apt install ceph-mgr-k8sevents`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), python3-kubernetes, python3-yaml

  </details>

- **ceph-mgr-modules-core**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: rook module for ceph-mgr
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mgr-rook`
  - Install (apt): `sudo apt install ceph-mgr-rook`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-mgr (= 19.2.2-pve2), ceph-mgr (= 19.2.3-pve1), python3-jsonpatch, python3-kubernetes

  </details>

- **ceph-mon**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: monitor server for the ceph storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-mon`
  - Install (apt): `sudo apt install ceph-mon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve2), ceph-base (= 19.2.3-pve1), libc6 (>= 2.38), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libsnappy1v5 (>= 1.2.2), libstdc++6 (>= 14), zlib1g (>= 1:1.2.0)
  - breaks: ceph (<< 10), ceph-test (<< 12.2.2-14)
  - replaces: ceph (<< 10), ceph-test (<< 12.2.2-14)

  </details>

- **ceph-osd**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OSD server for the ceph storage system
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-osd`
  - Install (apt): `sudo apt install ceph-osd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-base (= 19.2.2-pve2), ceph-base (= 19.2.3-pve1), libaio1t64 (>= 0.3.93), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcap2 (>= 1:2.10), libfuse2t64 (>= 2.8), libgcc-s1 (>= 3.4), libgoogle-perftools4t64 (>= 2.16), libibverbs1 (>= 1.1.6), liblttng-ust1t64 (>= 2.13.0), liblz4-1 (>= 0.0~r130), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librdmacm1t64 (>= 1.0.15), libsnappy1v5 (>= 1.2.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), libudev1 (>= 183), sudo, zlib1g (>= 1:1.2.0)
  - recommends: ceph-volume (= 19.2.2-pve2), ceph-volume (= 19.2.3-pve1), nvme-cli, smartmontools
  - breaks: ceph (<< 10), ceph-osd (<< 17.0.0), ceph-test (<< 12.2.2-14)
  - replaces: ceph (<< 10), ceph-osd (<< 17.0.0), ceph-test (<< 12.2.2-14)

  </details>

- **ceph-prometheus-alerts**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OCF-compliant resource agents for Ceph
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-resource-agents`
  - Install (apt): `sudo apt install ceph-resource-agents`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: extra
  - depends: ceph (= 19.2.2-pve2), ceph (= 19.2.3-pve1), resource-agents
  - recommends: pacemaker

  </details>

- **ceph-test**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: tool to facilidate OSD deployment
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install ceph-volume`
  - Install (apt): `sudo apt install ceph-volume`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: ceph-osd (= 19.2.2-pve2), ceph-osd (= 19.2.3-pve1), cryptsetup-bin, e2fsprogs, lvm2, parted, python3-ceph-common, python3-packaging, python3:any, xfsprogs

  </details>

- **cephadm**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Ceph is a massively scalable, open-source, distributed
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install cephfs-mirror`
  - Install (apt): `sudo apt install cephfs-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve2), ceph-common (= 19.2.3-pve1), libc6 (>= 2.38), libcephfs2 (= 19.2.2-pve2), libcephfs2 (= 19.2.3-pve1), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libstdc++6 (>= 14)

  </details>

- **cephfs-shell**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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

- **corosync**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine daemon and utilities
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync`
  - Install (apt): `sudo apt install corosync`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcfg7 (>= 3.1.9), libcmap4 (>= 3.1.9), libcorosync-common4 (>= 1.99.9), libcpg4 (>= 3.1.9), libknet1t64 (>= 1.18), libnozzle1t64 (>= 1.6), libqb-tools, libqb100 (>= 2.0.3), libquorum5 (>= 3.1.9), libstatgrab10t64 (>= 0.92.1), libsystemd0, libvotequorum8 (>= 3.1.9), xsltproc

  </details>

- **corosync-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for corosync
  - Install: `sudo apt-get install corosync-dbgsym`
  - Install (apt): `sudo apt install corosync-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync (= 3.1.9-pve2)

  </details>

- **corosync-doc**
  - Latest version: 3.1.9-pve2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine HTML documentation
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync-doc`
  - Install (apt): `sudo apt install corosync-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional
  - recommends: w3m | www-browser

  </details>

- **corosync-notifyd**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine notification daemon
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync-notifyd`
  - Install (apt): `sudo apt install corosync-notifyd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: corosync, libc6 (>= 2.38), libcfg7 (>= 3.1.9), libcmap4 (>= 3.1.9), libcorosync-common4 (>= 1.99.9), libdbus-1-3 (>= 1.10), libqb100 (>= 2.0.3), libquorum5 (>= 3.1.9), libsnmp40t64 (>= 5.9.4+dfsg), libsystemd0
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: dbus

  </details>

- **corosync-notifyd-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for corosync-notifyd
  - Install: `sudo apt-get install corosync-notifyd-dbgsym`
  - Install (apt): `sudo apt install corosync-notifyd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-notifyd (= 3.1.9-pve2)

  </details>

- **corosync-vqsim**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine votequorum simulator
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync-vqsim`
  - Install (apt): `sudo apt install corosync-vqsim`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcorosync-common4 (>= 1.99.9), libknet1t64 (>= 0.9), libqb100 (>= 2.0.3), libreadline8t64 (>= 6.0)

  </details>

- **corosync-vqsim-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for corosync-vqsim
  - Install: `sudo apt-get install corosync-vqsim-dbgsym`
  - Install (apt): `sudo apt install corosync-vqsim-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-vqsim (= 3.1.9-pve2)

  </details>


### <a id="packages-D"></a>D

- **dab**
  - Latest version: 3.7.1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Debian LXC Appliance Builder
  - Install: `sudo apt-get install dab`
  - Install (apt): `sudo apt install dab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: binutils, libuuid-perl, lxc, make, perl, perl:any, wget

  </details>

- **dh-apparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: AppArmor debhelper routines
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install dh-apparmor`
  - Install (apt): `sudo apt install dh-apparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: devel
  - Priority: optional
  - suggests: apparmor-utils

  </details>

- **dmeventd**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Kernel Device Mapper event daemon
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install dmeventd`
  - Install (apt): `sudo apt install dmeventd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libdevmapper-event1.02.1 (>= 2:1.02.110), libdevmapper1.02.1 (>= 2:1.02.197), liblvm2cmd2.03 (>= 2.03.31)

  </details>

- **dmeventd-dbgsym**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for dmeventd
  - Install: `sudo apt-get install dmeventd-dbgsym`
  - Install (apt): `sudo apt install dmeventd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: dmeventd (= 2:1.02.205-2+pmx1)

  </details>

- **dmsetup**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Kernel Device Mapper userspace library
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install dmsetup`
  - Install (apt): `sudo apt install dmsetup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197)

  </details>

- **dmsetup-dbgsym**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for dmsetup
  - Install: `sudo apt-get install dmsetup-dbgsym`
  - Install (apt): `sudo apt install dmsetup-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: dmsetup (= 2:1.02.205-2+pmx1)

  </details>


### <a id="packages-F"></a>F

- **fonts-font-logos**
  - Latest version: 1.0.1-3
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Icon font for Distributions and FOSS
  - Homepage: https://lukas-w.github.io/font-logos/
  - Install: `sudo apt-get install fonts-font-logos`
  - Install (apt): `sudo apt install fonts-font-logos`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: fonts
  - Priority: optional

  </details>

- **frr**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite of internet protocols (BGP, OSPF, IS-IS, ...)
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr`
  - Install (apt): `sudo apt install frr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: iproute2, libc6 (>= 2.38), libcap2 (>= 1:2.10), libcares2 (>= 1.16.0), libcrypt1 (>= 1:4.1.0), libjson-c5 (>= 0.15), libpam0g (>= 0.99.7.1), libpcre2-posix3 (>= 10.34), libprotobuf-c1 (>= 1.0.1), libreadline8t64 (>= 7.0~rc1), libyang3 (>= 3.12.2), logrotate (>= 3.2-11)
  - preDepends: adduser
  - recommends: frr-pythontools
  - suggests: frr-doc
  - conflicts: pimd, quagga, quagga-bgpd, quagga-core, quagga-isisd, quagga-ospf6d, quagga-ospfd, quagga-pimd, quagga-ripd, quagga-ripngd, zebra, zebra-pj
  - replaces: zebra, zebra-pj

  </details>

- **frr-dbgsym**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for frr
  - Install: `sudo apt-get install frr-dbgsym`
  - Install (apt): `sudo apt install frr-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr (= 10.3.1-1+pve2), frr (= 10.3.1-1+pve3), frr (= 10.3.1-1+pve4), frr (= 10.4.1-1+pve1)

  </details>

- **frr-doc**
  - Latest version: 10.4.1-1+pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite - user manual
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-doc`
  - Install (apt): `sudo apt install frr-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 8.1)
  - suggests: frr
  - conflicts: quagga-doc

  </details>

- **frr-pythontools**
  - Latest version: 10.4.1-1+pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite - Python tools
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-pythontools`
  - Install (apt): `sudo apt install frr-pythontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (<< 10.3.1.0-~), frr (<< 10.4.1.0-~), frr (>= 10.3.1-1+pve2~), frr (>= 10.3.1-1+pve3~), frr (>= 10.3.1-1+pve4~), frr (>= 10.4.1-1+pve1~), python3:any

  </details>

- **frr-rpki-rtrlib**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite - BGP RPKI support (rtrlib)
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-rpki-rtrlib`
  - Install (apt): `sudo apt install frr-rpki-rtrlib`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (= 10.3.1-1+pve2), frr (= 10.3.1-1+pve3), frr (= 10.3.1-1+pve4), frr (= 10.4.1-1+pve1), libc6 (>= 2.38), libjson-c5 (>= 0.15), librtr0t64 (>= 0.8.0~)

  </details>

- **frr-rpki-rtrlib-dbgsym**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for frr-rpki-rtrlib
  - Install: `sudo apt-get install frr-rpki-rtrlib-dbgsym`
  - Install (apt): `sudo apt install frr-rpki-rtrlib-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr-rpki-rtrlib (= 10.3.1-1+pve2), frr-rpki-rtrlib (= 10.3.1-1+pve3), frr-rpki-rtrlib (= 10.3.1-1+pve4), frr-rpki-rtrlib (= 10.4.1-1+pve1)

  </details>

- **frr-snmp**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite - SNMP support
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-snmp`
  - Install (apt): `sudo apt install frr-snmp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (= 10.3.1-1+pve2), frr (= 10.3.1-1+pve3), frr (= 10.3.1-1+pve4), frr (= 10.4.1-1+pve1), libc6 (>= 2.38), libsnmp40t64 (>= 5.9.4+dfsg)
  - recommends: snmpd

  </details>

- **frr-snmp-dbgsym**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for frr-snmp
  - Install: `sudo apt-get install frr-snmp-dbgsym`
  - Install (apt): `sudo apt install frr-snmp-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr-snmp (= 10.3.1-1+pve2), frr-snmp (= 10.3.1-1+pve3), frr-snmp (= 10.3.1-1+pve4), frr-snmp (= 10.4.1-1+pve1)

  </details>

- **frr-test-tools**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: FRRouting suite - Testing Tools
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-test-tools`
  - Install (apt): `sudo apt install frr-test-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (= 10.3.1-1+pve2), frr (= 10.3.1-1+pve3), frr (= 10.3.1-1+pve4), frr (= 10.4.1-1+pve1), libc6 (>= 2.34)

  </details>

- **frr-test-tools-dbgsym**
  - Latest version: 10.4.1-1+pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for frr-test-tools
  - Install: `sudo apt-get install frr-test-tools-dbgsym`
  - Install (apt): `sudo apt install frr-test-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr-test-tools (= 10.3.1-1+pve2), frr-test-tools (= 10.3.1-1+pve3), frr-test-tools (= 10.3.1-1+pve4), frr-test-tools (= 10.4.1-1+pve1)

  </details>

- **fwupd**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd`
  - Install (apt): `sudo apt install fwupd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libarchive13t64 (>= 3.2.1), libblkid1 (>= 2.17.2), libc6 (>= 2.38), libcbor0.10 (>= 0.10.2), libcurl3t64-gnutls (>= 7.63.0), libdrm-amdgpu1 (>= 2.4.73), libdrm2 (>= 2.4.3), libflashrom1 (>= 1.4.0), libfwupd3 (= 2.0.8-3+pmx1), libglib2.0-0t64 (>= 2.83.0), libgnutls30t64 (>= 3.7.3), libjcat1 (>= 0.2.0), libjson-glib-1.0-0 (>= 1.5.2), liblzma5 (>= 5.1.1alpha+20120614), libmbim-glib4 (>= 1.28.0), libmbim-proxy, libmm-glib0 (>= 1.22.0), libpolkit-gobject-1-0 (>= 0.99), libprotobuf-c1 (>= 1.3.1), libqmi-glib5 (>= 1.32.0), libqmi-proxy, libsqlite3-0 (>= 3.20.0), libsystemd0, libtss2-esys-3.0.2-0t64 (>= 2.3.1), libusb-1.0-0 (>= 2:1.0.27~rc1), libxmlb2 (>= 0.3.22), shared-mime-info, systemd-sysusers, zlib1g (>= 1:1.1.4)
  - recommends: bolt, default-dbus-system-bus | dbus-system-bus, fwupd-signed, jq, python3
  - suggests: gir1.2-fwupd-2.0, udisks2
  - conflicts: fwupdate-amd64-signed, fwupdate-arm64-signed, fwupdate-armhf-signed, fwupdate-i386-signed
  - breaks: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - replaces: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - provides: fwupdate

  </details>

- **fwupd-amd64-signed**
  - Latest version: 1:1.7+1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Tools to manage UEFI firmware updates (signed)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-amd64-signed`
  - Install (apt): `sudo apt install fwupd-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - recommends: fwupd
  - provides: fwupd-signed

  </details>

- **fwupd-amd64-signed-template**
  - Latest version: 1:1.7-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed fwupd package
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-amd64-signed-template`
  - Install (apt): `sudo apt install fwupd-amd64-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **fwupd-dbgsym**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for fwupd
  - Install: `sudo apt-get install fwupd-dbgsym`
  - Install (apt): `sudo apt install fwupd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: fwupd (= 2.0.8-3+pmx1)

  </details>

- **fwupd-doc**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Firmware update daemon documentation (HTML format)
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd-doc`
  - Install (apt): `sudo apt install fwupd-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional

  </details>

- **fwupd-tests**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Test suite for firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd-tests`
  - Install (apt): `sudo apt install fwupd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, default-dbus-system-bus | dbus-system-bus, fwupd, gnome-desktop-testing, ieee-data, libc6 (>= 2.34), libcurl3t64-gnutls (>= 7.63.0), libfwupd3 (>= 2.0.7), libglib2.0-0t64 (>= 2.80.0), libgnutls30t64 (>= 3.7.3), libjson-glib-1.0-0 (>= 1.5.2), libtss2-esys-3.0.2-0t64 (>= 2.3.1), libxmlb2 (>= 0.3.22), polkitd | policykit-1, python3, python3-gi, python3-requests
  - breaks: fwupd (<< 0.9.4-1)
  - replaces: fwupd (<< 0.9.4-1)

  </details>

- **fwupd-tests-dbgsym**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for fwupd-tests
  - Install: `sudo apt-get install fwupd-tests-dbgsym`
  - Install (apt): `sudo apt install fwupd-tests-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: fwupd-tests (= 2.0.8-3+pmx1)

  </details>

- **fwupd-unsigned**
  - Latest version: 1:1.7-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Firmware update daemon (Unsigned EFI binaries)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-unsigned`
  - Install (apt): `sudo apt install fwupd-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - recommends: fwupd-signed
  - breaks: fwupd (<< 1.7.1)
  - replaces: fwupd (<< 1.7.1)

  </details>

- **fwupd-unsigned-dev**
  - Latest version: 1:1.7-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Firmware update daemon (Development information)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-unsigned-dev`
  - Install (apt): `sudo apt install fwupd-unsigned-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: fwupd-unsigned (= 1:1.7-1+pmx1)

  </details>


### <a id="packages-G"></a>G

- **gir1.2-fwupd-2.0**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GObject introspection data for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install gir1.2-fwupd-2.0`
  - Install (apt): `sudo apt install gir1.2-fwupd-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-gobject-2.0, gir1.2-json-1.0 (>= 1.1.1), libfwupd3 (>= 2.0.7)

  </details>

- **grub-common**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader (common files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-common`
  - Install (apt): `sudo apt install grub-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: gettext-base, libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197), libefiboot1t64 (>= 38), libefivar1t64 (>= 38), libfreetype6 (>= 2.2.1), libfuse3-4 (>= 3.17.2), liblzma5 (>= 5.1.1alpha+20120614)
  - recommends: os-prober (>= 1.33)
  - suggests: console-setup, desktop-base (>= 4.0.6), grub-emu, mtools, multiboot-doc, xorriso (>= 0.5.6.pl00)
  - conflicts: init-select
  - breaks: apport (<< 2.1.1), friendly-recovery (<< 0.2.13), grub-efi-amd64-signed (<< 1+2.12~rc1), grub-efi-arm64-signed (<< 1+2.12~rc1), grub-efi-ia32-signed (<< 1+2.12~rc1), lupin-support (<< 0.55), mdadm (<< 2.6.7-2)
  - replaces: grub-coreboot (<< 2.00-4), grub-efi (<< 1.99-1), grub-efi-amd64 (<< 2.00-4), grub-efi-ia32 (<< 2.00-4), grub-efi-ia64 (<< 2.00-4), grub-ieee1275 (<< 2.00-4), grub-linuxbios (<< 1.96+20080831-1), grub-pc (<< 2.00-4), grub-yeeloong (<< 2.00-4), init-select

  </details>

- **grub-common-dbgsym**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for grub-common
  - Install: `sudo apt-get install grub-common-dbgsym`
  - Install (apt): `sudo apt install grub-common-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)

  </details>

- **grub-coreboot**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Coreboot version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot`
  - Install (apt): `sudo apt install grub-coreboot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.12-9+pmx2), grub-coreboot-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: grub (<< 0.97-54), grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-linuxbios (<< 2.12-9+pmx2), grub-pc, grub-xen
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-linuxbios, grub-pc, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-coreboot-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Coreboot modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot-bin`
  - Install (apt): `sudo apt install grub-coreboot-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)
  - conflicts: grub-linuxbios (<< 2.12-9+pmx2)
  - replaces: grub-common (<= 1.97~beta2-1), grub-coreboot (<< 1.99-1), grub-linuxbios, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-coreboot-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Coreboot debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot-dbg`
  - Install (apt): `sudo apt install grub-coreboot-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-coreboot-bin (= 2.12-9+pmx2)

  </details>

- **grub-efi**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (dummy package)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi`
  - Install (apt): `sudo apt install grub-efi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-amd64 (= 2.12-9+pmx2)

  </details>

- **grub-efi-amd64**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64`
  - Install (apt): `sudo apt install grub-efi-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-efi-amd64-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: elilo, grub, grub-coreboot, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc, grub-xen
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-efi-amd64-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-bin`
  - Install (apt): `sudo apt install grub-efi-amd64-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-amd64-unsigned
  - recommends: efibootmgr, grub-efi-amd64-signed
  - breaks: grub-efi-amd64-signed (<< 1+2.12~rc1)
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi-amd64 (<< 1.99-1), grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-efi-amd64-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-dbg`
  - Install (apt): `sudo apt install grub-efi-amd64-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-amd64-bin (= 2.12-9+pmx2)

  </details>

- **grub-efi-amd64-signed**
  - Latest version: 1+2.12+9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (amd64 UEFI signed by Debian)
  - Install: `sudo apt-get install grub-efi-amd64-signed`
  - Install (apt): `sudo apt install grub-efi-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GRUB Maintainers <pkg-grub-devel@alioth-lists.debian.net>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)
  - recommends: shim-signed

  </details>

- **grub-efi-amd64-signed-template**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 signing template)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-signed-template`
  - Install (apt): `sudo apt install grub-efi-amd64-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional

  </details>

- **grub-efi-amd64-unsigned**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 images)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-unsigned`
  - Install (apt): `sudo apt install grub-efi-amd64-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)
  - breaks: grub-efi-amd64-bin (<< 2.12-3~)
  - replaces: grub-efi-amd64-bin (<< 2.12-3~)

  </details>

- **grub-efi-ia32**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32`
  - Install (apt): `sudo apt install grub-efi-ia32`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.12-9+pmx2), grub-efi-ia32-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: elilo, grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-ieee1275, grub-legacy, grub-pc, grub-xen
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi, grub-efi-amd64, grub-ieee1275, grub-legacy, grub-pc, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-efi-ia32-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32-bin`
  - Install (apt): `sudo apt install grub-efi-ia32-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-ia32-unsigned
  - recommends: efibootmgr
  - breaks: grub-efi-ia32-signed (<< 1+2.12~rc1)
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi, grub-efi-ia32 (<< 1.99-1), grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-efi-ia32-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32-dbg`
  - Install (apt): `sudo apt install grub-efi-ia32-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-ia32-bin (= 2.12-9+pmx2)

  </details>

- **grub-efi-ia32-unsigned**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 images)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32-unsigned`
  - Install (apt): `sudo apt install grub-efi-ia32-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)
  - breaks: grub-efi-ia32-bin (<< 2.12-3~)
  - replaces: grub-efi-ia32-bin (<< 2.12-3~)

  </details>

- **grub-emu**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (emulated version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-emu`
  - Install (apt): `sudo apt install grub-emu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197), libgcc-s1 (>= 3.0), libsdl2-2.0-0 (>= 2.0.12)
  - replaces: grub-common (<= 1.97~beta3-1)

  </details>

- **grub-emu-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (emulated debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-emu-dbg`
  - Install (apt): `sudo apt install grub-emu-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-emu (= 2.12-9+pmx2)

  </details>

- **grub-emu-dbgsym**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for grub-emu
  - Install: `sudo apt-get install grub-emu-dbgsym`
  - Install (apt): `sudo apt install grub-emu-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-emu (= 2.12-9+pmx2)

  </details>

- **grub-firmware-qemu**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRUB firmware image for QEMU
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-firmware-qemu`
  - Install (apt): `sudo apt install grub-firmware-qemu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - recommends: qemu-system-x86

  </details>

- **grub-ieee1275**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Open Firmware version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275`
  - Install (apt): `sudo apt install grub-ieee1275`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.12-9+pmx2), grub-ieee1275-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-legacy, grub-pc, grub-xen
  - replaces: grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-legacy, grub-pc, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-ieee1275-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Open Firmware modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275-bin`
  - Install (apt): `sudo apt install grub-ieee1275-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)
  - replaces: grub-common (<= 1.97~beta2-1), grub-ieee1275 (<< 1.99-1), grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-ieee1275-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Open Firmware debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275-dbg`
  - Install (apt): `sudo apt install grub-ieee1275-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-ieee1275-bin (= 2.12-9+pmx2)

  </details>

- **grub-linuxbios**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (dummy package)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-linuxbios`
  - Install (apt): `sudo apt install grub-linuxbios`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: oldlibs
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-coreboot (= 2.12-9+pmx2)

  </details>

- **grub-pc**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc`
  - Install (apt): `sudo apt install grub-pc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.12-9+pmx2), grub-pc-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-xen
  - breaks: grub-legacy (<< 0.97-84~)
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-pc-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc-bin`
  - Install (apt): `sudo apt install grub-pc-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197)
  - suggests: desktop-base (>= 4.0.6)
  - replaces: grub-common (<= 1.97~beta2-1), grub-pc (<< 1.99-1), grub2 (<< 2.12-9+pmx2)

  </details>

- **grub-pc-bin-dbgsym**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for grub-pc-bin
  - Install: `sudo apt-get install grub-pc-bin-dbgsym`
  - Install (apt): `sudo apt install grub-pc-bin-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-pc-bin (= 2.12-9+pmx2)

  </details>

- **grub-pc-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc-dbg`
  - Install (apt): `sudo apt install grub-pc-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-pc-bin (= 2.12-9+pmx2)

  </details>

- **grub-rescue-pc**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRUB bootable rescue images, version 2 (PC/BIOS version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-rescue-pc`
  - Install (apt): `sudo apt install grub-rescue-pc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional

  </details>

- **grub-theme-starfield**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (starfield theme)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-theme-starfield`
  - Install (apt): `sudo apt install grub-theme-starfield`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)

  </details>

- **grub-xen**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Xen version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen`
  - Install (apt): `sudo apt install grub-xen`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.12-9+pmx2), grub-xen-bin (= 2.12-9+pmx2), grub2-common (= 2.12-9+pmx2), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc

  </details>

- **grub-xen-bin**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Xen modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-bin`
  - Install (apt): `sudo apt install grub-xen-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2)

  </details>

- **grub-xen-dbg**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Xen debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-dbg`
  - Install (apt): `sudo apt install grub-xen-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-xen-bin (= 2.12-9+pmx2)

  </details>

- **grub-xen-host**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader, version 2 (Xen host version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-host`
  - Install (apt): `sudo apt install grub-xen-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-xen-bin (= 2.12-9+pmx2)

  </details>

- **grub2-common**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: GRand Unified Bootloader (common files for version 2)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub2-common`
  - Install (apt): `sudo apt install grub2-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dpkg (>= 1.15.4), grub-common (= 2.12-9+pmx2), libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197), libefiboot1t64 (>= 38), libefivar1t64 (>= 38), liblzma5 (>= 5.1.1alpha+20120614)
  - breaks: grub (<< 0.97-54), grub-cloud-amd64 (<< 0.0.4), grub-coreboot (<< 2.02+dfsg1-7), grub-doc (<< 0.97-32), grub-efi-amd64 (<< 2.02+dfsg1-7), grub-efi-arm (<< 2.02+dfsg1-7), grub-efi-arm64 (<< 2.02+dfsg1-7), grub-efi-ia32 (<< 2.02+dfsg1-7), grub-efi-ia64 (<< 2.02+dfsg1-7), grub-ieee1275 (<< 2.02+dfsg1-7), grub-legacy (<< 0.97-83~), grub-legacy-doc (<< 0.97-59), grub-pc (<< 2.02+dfsg1-7), grub-uboot (<< 2.02+dfsg1-7), grub-xen (<< 2.02+dfsg1-7), grub-yeeloong (<< 2.02+dfsg1-7), shim (<< 0.9+1474479173.6c180c6-0ubuntu1~)
  - replaces: grub, grub-cloud-amd64 (<< 0.0.4), grub-common (<< 1.99-1), grub-coreboot (<< 2.02+dfsg1-7), grub-doc (<< 0.97-32), grub-efi-amd64 (<< 2.02+dfsg1-7), grub-efi-arm (<< 2.02+dfsg1-7), grub-efi-arm64 (<< 2.02+dfsg1-7), grub-efi-ia32 (<< 2.02+dfsg1-7), grub-efi-ia64 (<< 2.02+dfsg1-7), grub-ieee1275 (<< 2.02+dfsg1-7), grub-legacy, grub-legacy-doc (<< 0.97-59), grub-pc (<< 2.02+dfsg1-7), grub-uboot (<< 2.02+dfsg1-7), grub-xen (<< 2.02+dfsg1-7), grub-yeeloong (<< 2.02+dfsg1-7)

  </details>

- **grub2-common-dbgsym**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for grub2-common
  - Install: `sudo apt-get install grub2-common-dbgsym`
  - Install (apt): `sudo apt install grub2-common-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub2-common (= 2.12-9+pmx2)

  </details>


### <a id="packages-I"></a>I

- **ifupdown2**
  - Latest version: 3.3.0-1+pmx11
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Network Interface Management tool similar to ifupdown
  - Homepage: https://github.com/cumulusnetworks/ifupdown2
  - Install: `sudo apt-get install ifupdown2`
  - Install (apt): `sudo apt install ifupdown2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ethtool, iproute2, python3-setuptools, python3-six, python3-systemd, python3:any
  - suggests: bridge-utils, isc-dhcp-client, python3-gvgen, python3-mako
  - conflicts: ifupdown
  - replaces: ifupdown
  - provides: ifupdown

  </details>


### <a id="packages-K"></a>K

- **ksm-control-daemon**
  - Latest version: 1.5-1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Kernel Samepage Merging (KSM) Tuning Daemon
  - Homepage: https://pve.proxmox.com
  - Install: `sudo apt-get install ksm-control-daemon`
  - Install (apt): `sudo apt install ksm-control-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: bash (>= 3.2), systemd

  </details>


### <a id="packages-L"></a>L

- **libapache2-mod-apparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: changehat AppArmor library as an Apache module
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install libapache2-mod-apparmor`
  - Install (apt): `sudo apt install libapache2-mod-apparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: httpd
  - Priority: optional
  - depends: apache2-api-20120211, apache2-bin (>= 2.4.16), libapparmor1 (>= 2.7.0~beta1+bzr1772), libc6 (>= 2.4)

  </details>

- **libapache2-mod-apparmor-dbgsym**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libapache2-mod-apparmor
  - Install: `sudo apt-get install libapache2-mod-apparmor-dbgsym`
  - Install (apt): `sudo apt install libapache2-mod-apparmor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libapache2-mod-apparmor (= 4.1.1-pmx1)

  </details>

- **libapparmor-dev**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: AppArmor development libraries and header files
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install libapparmor-dev`
  - Install (apt): `sudo apt install libapparmor-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libapparmor1 (= 4.1.1-pmx1)

  </details>

- **libapparmor1**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: changehat AppArmor library
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install libapparmor1`
  - Install (apt): `sudo apt install libapparmor1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38)
  - breaks: libapparmor-perl (<< 3.0.3-3)
  - replaces: libapparmor-perl (<< 3.0.3-3)

  </details>

- **libapparmor1-dbgsym**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libapparmor1
  - Install: `sudo apt-get install libapparmor1-dbgsym`
  - Install (apt): `sudo apt install libapparmor1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libapparmor1 (= 4.1.1-pmx1)

  </details>

- **libcephfs-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Ceph distributed file system client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-dev`
  - Install (apt): `sudo apt install libcephfs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libcephfs2 (= 19.2.2-pve2), libcephfs2 (= 19.2.3-pve1)
  - conflicts: libceph-dev, libceph1-dev, libcephfs2-dev
  - replaces: libceph-dev, libceph1-dev, libcephfs2-dev

  </details>

- **libcephfs-java**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Java libraries for the Ceph File System
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-java`
  - Install (apt): `sudo apt install libcephfs-java`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: java
  - Priority: optional
  - depends: libcephfs-jni (= 19.2.2-pve2), libcephfs-jni (= 19.2.3-pve1)

  </details>

- **libcephfs-jni**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Java Native Interface library for CephFS Java bindings
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libcephfs-jni`
  - Install (apt): `sudo apt install libcephfs-jni`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: java
  - Priority: optional
  - depends: libc6 (>= 2.17), libcephfs2 (= 19.2.2-pve2), libcephfs2 (= 19.2.3-pve1), libgcc-s1 (>= 3.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), libstdc++6 (>= 13.1)

  </details>

- **libcephfs2**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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

- **libcfg-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CFG library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcfg-dev`
  - Install (apt): `sudo apt install libcfg-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcfg7 (= 3.1.9-pve2), libcorosync-common-dev (= 3.1.9-pve2)

  </details>

- **libcfg7**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CFG library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcfg7`
  - Install (apt): `sudo apt install libcfg7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libcfg7-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libcfg7
  - Install: `sudo apt-get install libcfg7-dbgsym`
  - Install (apt): `sudo apt install libcfg7-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcfg7 (= 3.1.9-pve2)

  </details>

- **libcmap-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CMAP library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcmap-dev`
  - Install (apt): `sudo apt install libcmap-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcmap4 (= 3.1.9-pve2), libcorosync-common-dev (= 3.1.9-pve2)

  </details>

- **libcmap4**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CMAP library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcmap4`
  - Install (apt): `sudo apt install libcmap4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libcmap4-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libcmap4
  - Install: `sudo apt-get install libcmap4-dbgsym`
  - Install (apt): `sudo apt install libcmap4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcmap4 (= 3.1.9-pve2)

  </details>

- **libcorosync-common-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine common development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcorosync-common-dev`
  - Install (apt): `sudo apt install libcorosync-common-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common4 (= 3.1.9-pve2), libqb-dev

  </details>

- **libcorosync-common4**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine common library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcorosync-common4`
  - Install (apt): `sudo apt install libcorosync-common4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional

  </details>

- **libcorosync-common4-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libcorosync-common4
  - Install: `sudo apt-get install libcorosync-common4-dbgsym`
  - Install (apt): `sudo apt install libcorosync-common4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcorosync-common4 (= 3.1.9-pve2)

  </details>

- **libcpg-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CPG library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcpg-dev`
  - Install (apt): `sudo apt install libcpg-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.9-pve2), libcpg4 (= 3.1.9-pve2)

  </details>

- **libcpg4**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine CPG library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcpg4`
  - Install (apt): `sudo apt install libcpg4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libcpg4-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libcpg4
  - Install: `sudo apt-get install libcpg4-dbgsym`
  - Install (apt): `sudo apt install libcpg4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcpg4 (= 3.1.9-pve2)

  </details>

- **libcrypt-openssl-rsa-perl**
  - Latest version: 0.35-1.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: module for RSA encryption using OpenSSL
  - Homepage: https://metacpan.org/release/Crypt-OpenSSL-RSA
  - Install: `sudo apt-get install libcrypt-openssl-rsa-perl`
  - Install (apt): `sudo apt install libcrypt-openssl-rsa-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.4), libcrypt-openssl-bignum-perl, libcrypt-openssl-random-perl, libssl3t64 (>= 3.0.0), perl (>= 5.40.1-5), perl-openssl-abi-3, perlapi-5.40.1

  </details>

- **libcrypt-openssl-rsa-perl-dbgsym**
  - Latest version: 0.35-1.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libcrypt-openssl-rsa-perl
  - Install: `sudo apt-get install libcrypt-openssl-rsa-perl-dbgsym`
  - Install (apt): `sudo apt install libcrypt-openssl-rsa-perl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Perl Group <pkg-perl-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libcrypt-openssl-rsa-perl (= 0.35-1.1)

  </details>

- **libdevmapper-dev**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Kernel Device Mapper header files
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install libdevmapper-dev`
  - Install (apt): `sudo apt install libdevmapper-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libdevmapper-event1.02.1 (= 2:1.02.205-2+pmx1), libdevmapper1.02.1 (= 2:1.02.205-2+pmx1), libselinux1-dev, libudev-dev

  </details>

- **libdevmapper-event1.02.1**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Kernel Device Mapper event support library
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install libdevmapper-event1.02.1`
  - Install (apt): `sudo apt install libdevmapper-event1.02.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libdevmapper1.02.1 (>= 2:1.02.197)

  </details>

- **libdevmapper-event1.02.1-dbgsym**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libdevmapper-event1.02.1
  - Install: `sudo apt-get install libdevmapper-event1.02.1-dbgsym`
  - Install (apt): `sudo apt install libdevmapper-event1.02.1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libdevmapper-event1.02.1 (= 2:1.02.205-2+pmx1)

  </details>

- **libdevmapper1.02.1**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Kernel Device Mapper userspace library
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install libdevmapper1.02.1`
  - Install (apt): `sudo apt install libdevmapper1.02.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: libs
  - Priority: optional
  - depends: dmsetup (>= 2:1.02.205-2+pmx1~), libc6 (>= 2.38), libselinux1 (>= 3.1~), libudev1 (>= 183)

  </details>

- **libdevmapper1.02.1-dbgsym**
  - Latest version: 2:1.02.205-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libdevmapper1.02.1
  - Install: `sudo apt-get install libdevmapper1.02.1-dbgsym`
  - Install (apt): `sudo apt install libdevmapper1.02.1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libdevmapper1.02.1 (= 2:1.02.205-2+pmx1)

  </details>

- **libfwupd-dev**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: development files for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd-dev`
  - Install (apt): `sudo apt install libfwupd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-fwupd-2.0 (= 2.0.8-3+pmx1), libcurl4-gnutls-dev, libfwupd3 (= 2.0.8-3+pmx1), libglib2.0-dev (>= 2.45.8), libjcat-dev, libjson-glib-dev (>= 1.1.1)
  - breaks: fwupd-dev (<< 0.5.4-2~)
  - replaces: fwupd-dev (<< 0.5.4-2~)

  </details>

- **libfwupd3**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Firmware update daemon library
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd3`
  - Install (apt): `sudo apt install libfwupd3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libcurl3t64-gnutls (>= 7.63.0), libglib2.0-0t64 (>= 2.80.0), libjcat1 (>= 0.1.0), libjson-glib-1.0-0 (>= 1.5.2)

  </details>

- **libfwupd3-dbgsym**
  - Latest version: 2.0.8-3+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libfwupd3
  - Install: `sudo apt-get install libfwupd3-dbgsym`
  - Install (apt): `sudo apt install libfwupd3-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libfwupd3 (= 2.0.8-3+pmx1)

  </details>

- **libjs-extjs**
  - Latest version: 7.0.0-5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: cross-browser JavaScript library
  - Homepage: https://www.sencha.com/
  - Install: `sudo apt-get install libjs-extjs`
  - Install (apt): `sudo apt install libjs-extjs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional
  - breaks: proxmox-widget-toolkit (<< 3.1-1)

  </details>

- **libjs-qrcodejs**
  - Latest version: 1.20230525-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Cross-Browser JavaScript library for making QRCodes
  - Homepage: https://davidshimjs.github.io/qrcodejs/
  - Install: `sudo apt-get install libjs-qrcodejs`
  - Install (apt): `sudo apt install libjs-qrcodejs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>

- **libjs-sencha-touch**
  - Latest version: 2.4.2-1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Cross-browser JavaScript library for mobile
  - Homepage: https://www.sencha.com/
  - Install: `sudo apt-get install libjs-sencha-touch`
  - Install (apt): `sudo apt install libjs-sencha-touch`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>

- **libknet-dev**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: kronosnet core switching implementation (developer files)
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libknet-dev`
  - Install (apt): `sudo apt install libknet-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libknet1t64 (= 1.31-pve1)
  - suggests: libknet-doc (= 1.31-pve1)

  </details>

- **libknet-doc**
  - Latest version: 1.31-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: kronosnet core API documentation
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libknet-doc`
  - Install (apt): `sudo apt install libknet-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional
  - breaks: libknet-dev (<< 1.1)
  - replaces: libknet-dev (<< 1.1)

  </details>

- **libknet1t64**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: kronosnet core switching implementation
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libknet1t64`
  - Install (apt): `sudo apt install libknet1t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.34), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20110809), liblzo2-2 (>= 2.02), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libssl3t64 (>= 3.0.0), libzstd1 (>= 1.5.5), zlib1g (>= 1:1.1.4)
  - breaks: libknet1 (<< 1.31-pve1)
  - replaces: libknet1
  - provides: libknet1 (= 1.31-pve1)

  </details>

- **libknet1t64-dbgsym**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libknet1t64
  - Install: `sudo apt-get install libknet1t64-dbgsym`
  - Install (apt): `sudo apt install libknet1t64-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libknet1t64 (= 1.31-pve1)

  </details>

- **liblvm2-dev**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: LVM2 libraries - development files
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install liblvm2-dev`
  - Install (apt): `sudo apt install liblvm2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libdevmapper-dev, liblvm2cmd2.03 (= 2.03.31-2+pmx1)

  </details>

- **liblvm2cmd2.03**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: LVM2 command library
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install liblvm2cmd2.03`
  - Install (apt): `sudo apt install liblvm2cmd2.03`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: libs
  - Priority: optional
  - depends: dmeventd, libaio1t64 (>= 0.3.93), libblkid1 (>= 2.24.2), libc6 (>= 2.38), libdevmapper-event1.02.1 (>= 2:1.02.74), libselinux1 (>= 3.1~), libsystemd0 (>= 233), libudev1 (>= 183)

  </details>

- **liblvm2cmd2.03-dbgsym**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for liblvm2cmd2.03
  - Install: `sudo apt-get install liblvm2cmd2.03-dbgsym`
  - Install (apt): `sudo apt install liblvm2cmd2.03-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: liblvm2cmd2.03 (= 2.03.31-2+pmx1)

  </details>

- **libnozzle-dev**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: userland wrapper around kernel tap devices (developer files)
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libnozzle-dev`
  - Install (apt): `sudo apt install libnozzle-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libnozzle1t64 (= 1.31-pve1)
  - suggests: libknet-doc (= 1.31-pve1)

  </details>

- **libnozzle1t64**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: userland wrapper around kernel tap devices
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libnozzle1t64`
  - Install (apt): `sudo apt install libnozzle1t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libnl-3-200 (>= 3.2.21), libnl-route-3-200 (>= 3.2.7)
  - breaks: libnozzle1 (<< 1.31-pve1)
  - replaces: libnozzle1
  - provides: libnozzle1 (= 1.31-pve1)

  </details>

- **libnozzle1t64-dbgsym**
  - Latest version: 1.31-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnozzle1t64
  - Install: `sudo apt-get install libnozzle1t64-dbgsym`
  - Install (apt): `sudo apt install libnozzle1t64-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libnozzle1t64 (= 1.31-pve1)

  </details>

- **libnss-myhostname**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: nss module providing fallback resolution for the current hostname
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libnss-myhostname`
  - Install (apt): `sudo apt install libnss-myhostname`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcap2 (>= 1:2.10)

  </details>

- **libnss-myhostname-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnss-myhostname
  - Install: `sudo apt-get install libnss-myhostname-dbgsym`
  - Install (apt): `sudo apt install libnss-myhostname-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-myhostname (= 257.8-1~deb13u1), libnss-myhostname (= 257.8-1~deb13u2), libnss-myhostname (= 257.9-1~deb13u1)

  </details>

- **libnss-mymachines**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: nss module to resolve hostnames for local container instances
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libnss-mymachines`
  - Install (apt): `sudo apt install libnss-mymachines`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcap2 (>= 1:2.10), systemd-container (= 257.8-1~deb13u1), systemd-container (= 257.8-1~deb13u2), systemd-container (= 257.9-1~deb13u1)

  </details>

- **libnss-mymachines-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnss-mymachines
  - Install: `sudo apt-get install libnss-mymachines-dbgsym`
  - Install (apt): `sudo apt install libnss-mymachines-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-mymachines (= 257.8-1~deb13u1), libnss-mymachines (= 257.8-1~deb13u2), libnss-mymachines (= 257.9-1~deb13u1)

  </details>

- **libnss-resolve**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: nss module to resolve names via systemd-resolved
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libnss-resolve`
  - Install (apt): `sudo apt install libnss-resolve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.39), libcap2 (>= 1:2.10), systemd-resolved (= 257.8-1~deb13u1), systemd-resolved (= 257.8-1~deb13u2), systemd-resolved (= 257.9-1~deb13u1)

  </details>

- **libnss-resolve-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnss-resolve
  - Install: `sudo apt-get install libnss-resolve-dbgsym`
  - Install (apt): `sudo apt install libnss-resolve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-resolve (= 257.8-1~deb13u1), libnss-resolve (= 257.8-1~deb13u2), libnss-resolve (= 257.9-1~deb13u1)

  </details>

- **libnss-systemd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: nss module providing dynamic user and group name resolution
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libnss-systemd`
  - Install (apt): `sudo apt install libnss-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: libc6 (>= 2.39), libcap2 (>= 1:2.10), systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1)
  - suggests: libcryptsetup12, libidn2-0, libp11-kit0, libtss2-rc0t64

  </details>

- **libnss-systemd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnss-systemd
  - Install: `sudo apt-get install libnss-systemd-dbgsym`
  - Install (apt): `sudo apt install libnss-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-systemd (= 257.8-1~deb13u1), libnss-systemd (= 257.8-1~deb13u2), libnss-systemd (= 257.9-1~deb13u1)

  </details>

- **libnvpair3linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Solaris name-value library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libnvpair3linux`
  - Install (apt): `sudo apt install libnvpair3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libtirpc3t64 (>= 1.0.2)
  - breaks: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3
  - replaces: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3

  </details>

- **libnvpair3linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libnvpair3linux
  - Install: `sudo apt-get install libnvpair3linux-dbgsym`
  - Install (apt): `sudo apt install libnvpair3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libnvpair3linux (= 2.3.3-pve1), libnvpair3linux (= 2.3.4-pve1), libnvpair3linux (= 2.4.0-pve1)

  </details>

- **libpam-apparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: changehat AppArmor library as a PAM module
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install libpam-apparmor`
  - Install (apt): `sudo apt install libpam-apparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libapparmor1 (>= 2.6~devel), libc6 (>= 2.4), libpam0g (>= 0.99.7.1)

  </details>

- **libpam-apparmor-dbgsym**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libpam-apparmor
  - Install: `sudo apt-get install libpam-apparmor-dbgsym`
  - Install (apt): `sudo apt install libpam-apparmor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libpam-apparmor (= 4.1.1-pmx1)

  </details>

- **libpam-systemd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: system and service manager - PAM module
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libpam-systemd`
  - Install (apt): `sudo apt install libpam-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: default-dbus-system-bus | dbus-system-bus, libc6 (>= 2.39), libcap2 (>= 1:2.10), libpam-runtime, libpam0g (>= 0.99.7.1), systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1), systemd-sysv
  - recommends: dbus-user-session
  - suggests: libcryptsetup12, libidn2-0, libp11-kit0, libtss2-rc0t64
  - conflicts: libpam-elogind-compat
  - provides: default-logind (= 257.8-1~deb13u1), default-logind (= 257.8-1~deb13u2), default-logind (= 257.9-1~deb13u1), logind (= 257.8-1~deb13u1), logind (= 257.8-1~deb13u2), logind (= 257.9-1~deb13u1)

  </details>

- **libpam-systemd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libpam-systemd
  - Install: `sudo apt-get install libpam-systemd-dbgsym`
  - Install (apt): `sudo apt install libpam-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libpam-systemd (= 257.8-1~deb13u1), libpam-systemd (= 257.8-1~deb13u2), libpam-systemd (= 257.9-1~deb13u1)

  </details>

- **libpam-zfs**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: PAM module for managing encryption keys for ZFS
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libpam-zfs`
  - Install (apt): `sudo apt install libpam-zfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libnvpair3linux (>= 2.4.0), libpam-runtime, libpam0g (>= 1.1.0), libssl3t64 (>= 3.0.0), libzfs6linux (>= 2.3.3), libzfs6linux (>= 2.3.4), libzfs7linux (>= 2.4.0)

  </details>

- **libpam-zfs-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libpam-zfs
  - Install: `sudo apt-get install libpam-zfs-dbgsym`
  - Install (apt): `sudo apt install libpam-zfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libpam-zfs (= 2.3.3-pve1), libpam-zfs (= 2.3.4-pve1), libpam-zfs (= 2.4.0-pve1)

  </details>

- **libproxmox-acme-perl**
  - Latest version: 1.7.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox ACME integration perl library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-acme-perl`
  - Install (apt): `sudo apt install libproxmox-acme-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libpve-common-perl (>= 6~), perl:any
  - recommends: libproxmox-acme-plugins
  - breaks: libpve-common-perl (<< 6.0-20)
  - replaces: libpve-common-perl (<< 6.0-20)

  </details>

- **libproxmox-acme-plugins**
  - Latest version: 1.7.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox acme.sh wrapper for DNS API plugins
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-acme-plugins`
  - Install (apt): `sudo apt install libproxmox-acme-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: coreutils (>= 8.30-1), curl (>= 7.64.0-1), sed (>= 4.7-1)
  - recommends: idn
  - breaks: libproxmox-acme-perl (<< 1.1.0)
  - replaces: libproxmox-acme-perl (<< 1.1.0)

  </details>

- **libproxmox-backup-qemu0**
  - Latest version: 2.0.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Backup Server client library for QEMU
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-backup-qemu0`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libzstd1 (>= 1.5.5)
  - breaks: pve-qemu-kvm (<< 5.2.0-1)

  </details>

- **libproxmox-backup-qemu0-dbgsym**
  - Latest version: 2.0.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libproxmox-backup-qemu0
  - Install: `sudo apt-get install libproxmox-backup-qemu0-dbgsym`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libproxmox-backup-qemu0 (= 2.0.1)

  </details>

- **libproxmox-backup-qemu0-dev**
  - Latest version: 2.0.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Backup Server client library for QEMU development files
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-backup-qemu0-dev`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libproxmox-backup-qemu0 (= 2.0.1)

  </details>

- **libproxmox-rs-perl**
  - Latest version: 0.4.1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: PVE/PMG common perl parts for Rust perlmod bindings
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-rs-perl`
  - Install (apt): `sudo apt install libproxmox-rs-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-rs-perl (>= 0.10.0) | libpmg-rs-perl (>= 0.8.0), perl:any
  - breaks: libpmg-rs-perl (<< 0.6.2), libpve-rs-perl (<< 0.7.2)
  - replaces: libpve-rs-perl (<< 0.6.0)

  </details>

- **libpve-access-control**
  - Latest version: 9.0.5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE access control library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-access-control`
  - Install (apt): `sudo apt install libpve-access-control`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libauthen-pam-perl, libcrypt-openssl-random-perl, libcrypt-openssl-rsa-perl, libjson-perl, libjson-xs-perl, libmime-base32-perl, libnet-ldap-perl, libnet-ssleay-perl, libpve-cluster-perl, libpve-common-perl (>= 8.0.8), libpve-rs-perl (>= 0.9.3), liburi-perl, libuuid-perl, perl:any, pve-cluster (>= 6.1-4)
  - breaks: pve-manager (<< 7.0-15)

  </details>

- **libpve-apiclient-perl**
  - Latest version: 3.4.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE API client library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-apiclient-perl`
  - Install (apt): `sudo apt install libpve-apiclient-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libcrypt-ssleay-perl, libhttp-message-perl, libio-socket-ssl-perl, libjson-perl, liburi-perl, libwww-perl, perl:any

  </details>

- **libpve-cluster-api-perl**
  - Latest version: 9.0.7
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Virtual Environment cluster Perl API modules.
  - Install: `sudo apt-get install libpve-cluster-api-perl`
  - Install (apt): `sudo apt install libpve-cluster-api-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: faketime, libcrypt-ssleay-perl, libdigest-hmac-perl, libpve-access-control, libpve-apiclient-perl, libpve-cluster-perl (= 9.0.2), libpve-cluster-perl (= 9.0.3), libpve-cluster-perl (= 9.0.4), libpve-cluster-perl (= 9.0.5), libpve-cluster-perl (= 9.0.6), libpve-cluster-perl (= 9.0.7), libpve-common-perl (>= 8.0.6), libuuid-perl, openssl, perl:any, rsync
  - breaks: pve-cluster (<= 6.0-7)
  - replaces: pve-cluster (<= 6.0-7)

  </details>

- **libpve-cluster-perl**
  - Latest version: 9.0.7
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Virtual Environment cluster Perl modules.
  - Install: `sudo apt-get install libpve-cluster-perl`
  - Install (apt): `sudo apt install libpve-cluster-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libcrypt-ssleay-perl, libpve-apiclient-perl, libpve-common-perl (>= 6.0-7~), librrds-perl, perl:any, rrdcached
  - breaks: pve-cluster (<= 6.0-7)
  - replaces: pve-cluster (<= 6.0-7)

  </details>

- **libpve-common-perl**
  - Latest version: 9.1.7
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE base library
  - Install: `sudo apt-get install libpve-common-perl`
  - Install (apt): `sudo apt install libpve-common-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libanyevent-perl, libclone-perl, libcrypt-openssl-random-perl, libcrypt-openssl-rsa-perl, libdevel-cycle-perl, libfilesys-df-perl, libhttp-daemon-perl, libhttp-message-perl, libio-stringy-perl, libjson-perl, liblinux-inotify2-perl, libmime-base32-perl, libnet-dbus-perl, libnet-ip-perl, libnet-ldap-perl, libnet-ssleay-perl, libnetaddr-ip-perl, libproxmox-acme-perl, libproxmox-rs-perl, libstring-shellquote-perl, libtimedate-perl, liburi-perl, libwww-perl, libyaml-libyaml-perl, perl:any
  - breaks: ifupdown2 (<< 2.0.1-1+pve5), libpve-guest-common-perl (<< 5.0.1), pmg-api (<< 7.1-5), pve-container (<< 4.3-1), pve-manager (<< 7.2-9), qemu-server (<< 8.0.1)

  </details>

- **libpve-guest-common-perl**
  - Latest version: 6.0.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE common guest-related modules
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-guest-common-perl`
  - Install (apt): `sudo apt install libpve-guest-common-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-access-control, libpve-cluster-perl (>= 8.1.0), libpve-common-perl (>= 8.0.2), libpve-storage-perl (>= 8.3.4), perl:any, proxmox-websocket-tunnel, pve-cluster
  - breaks: libpve-common-perl (<< 4.0-89), libpve-http-server-perl (<< 5.0.2), pve-container (<< 3.1-4), pve-manager (<< 8.0.0~7), qemu-server (<< 6.1-19)
  - replaces: libpve-common-perl (<< 4.0-89), pve-manager (<< 4.4-10)

  </details>

- **libpve-http-server-perl**
  - Latest version: 6.0.5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Asynchrounous HTTP Server Implementation
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-http-server-perl`
  - Install (apt): `sudo apt install libpve-http-server-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libanyevent-http-perl, libanyevent-perl (>= 7.140-3), libcrypt-ssleay-perl, libhtml-parser-perl, libhttp-date-perl, libhttp-message-perl, libio-socket-ssl-perl, libjs-bootstrap5, libjson-perl, libnet-ip-perl, libpve-common-perl (>= 8.0.2), liburi-perl, perl:any
  - breaks: libpve-storage-perl (<< 8.2.5), pmg-api (<< 8.1.4), pve-manager (<< 8.2.7)

  </details>

- **libpve-network-api-perl**
  - Latest version: 1.2.4
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: API endpoints for Proxmox VE's SDN stack
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-network-api-perl`
  - Install (apt): `sudo apt install libpve-network-api-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-common-perl (>= 9.0.2), libpve-network-perl (= 1.1.0), libpve-network-perl (= 1.1.2), libpve-network-perl (= 1.1.4), libpve-network-perl (= 1.1.5), libpve-network-perl (= 1.1.6), libpve-network-perl (= 1.1.7), libpve-network-perl (= 1.1.8), libpve-network-perl (= 1.2.0), libpve-network-perl (= 1.2.1), libpve-network-perl (= 1.2.3), libpve-network-perl (= 1.2.4), perl:any, pve-cluster (>= 9.0.1), pve-firewall (>= 5.1.0~)
  - breaks: libpve-network-perl (<< 0.9.9~)
  - replaces: libpve-network-perl (<< 0.9.9~)

  </details>

- **libpve-network-perl**
  - Latest version: 1.2.4
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE's SDN (Software Defined Network) stack
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-network-perl`
  - Install (apt): `sudo apt install libpve-network-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: ifupdown2, libio-socket-ssl-perl, libnet-ip-perl, libnet-subnet-perl, libnetaddr-ip-perl, libpve-common-perl (>= 9.0.14), libpve-common-perl (>= 9.0.2), libpve-common-perl (>= 9.1.1), libpve-rs-perl (>= 0.10.3), libpve-rs-perl (>= 0.11.1), libuuid-perl, perl:any, pve-cluster (>= 8.0.10)
  - recommends: frr-pythontools (>= 10.3.1-1+pve2~), ifupdown2
  - suggests: dnsmasq, frr-pythontools (>= 8.5.1~)

  </details>

- **libpve-notify-perl**
  - Latest version: 9.0.7
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Notify helper module.
  - Install: `sudo apt-get install libpve-notify-perl`
  - Install (apt): `sudo apt install libpve-notify-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libproxmox-rs-perl (>= 0.3.1), libpve-cluster-perl (= 9.0.2), libpve-cluster-perl (= 9.0.3), libpve-cluster-perl (= 9.0.4), libpve-cluster-perl (= 9.0.5), libpve-cluster-perl (= 9.0.6), libpve-cluster-perl (= 9.0.7), libpve-common-perl (>= 8.0.9), libpve-rs-perl (>= 0.8.9), perl:any
  - breaks: pve-ha-manager (<< 4.0.5), pve-manager (<< 8.2.3)

  </details>

- **libpve-rs-perl**
  - Latest version: 0.11.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: PVE parts which have been ported to Rust - Rust source code
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-rs-perl`
  - Install (apt): `sudo apt install libpve-rs-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libapt-pkg7.0 (>= 1.9~), libc6 (>= 2.39), libgcc-s1 (>= 4.2), libproxmox-rs-perl (>= 0.3.5), libssl3t64 (>= 3.0.0), libstdc++6 (>= 5.2), libuuid1 (>= 2.16), libzstd1 (>= 1.5.5), perl (>= 5.40.1-5), perl (>= 5.40.1-6), perlapi-5.40.1
  - breaks: libpve-access-control (<< 7.1-3), libpve-common-perl (<< 7.1-4), libpve-notify-perl (<< 8.0.7), pve-ha-manager (<< 5.0.6~~), pve-manager (<< 7.2-8)

  </details>

- **libpve-rs-perl-dbgsym**
  - Latest version: 0.11.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libpve-rs-perl
  - Install: `sudo apt-get install libpve-rs-perl-dbgsym`
  - Install (apt): `sudo apt install libpve-rs-perl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libpve-rs-perl (= 0.10.10), libpve-rs-perl (= 0.10.4), libpve-rs-perl (= 0.10.5), libpve-rs-perl (= 0.10.6), libpve-rs-perl (= 0.10.7), libpve-rs-perl (= 0.11.0), libpve-rs-perl (= 0.11.1), libpve-rs-perl (= 0.11.3), libpve-rs-perl (= 0.11.4)

  </details>

- **libpve-storage-perl**
  - Latest version: 9.1.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE storage management library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-storage-perl`
  - Install (apt): `sudo apt install libpve-storage-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: bzip2, ceph-common (>= 12.2~), ceph-fuse, cifs-utils, cstream, libfile-chdir-perl, libposix-strptime-perl, libpve-access-control (>= 8.1.2), libpve-apiclient-perl (>= 3.1-1), libpve-cluster-perl (>= 8.0.6), libpve-common-perl (>= 8.2.9), librados2-perl, libxml-libxml-perl, lvm2, lzop, nfs-common, perl:any, proxmox-backup-client (>= 2.1.10~), proxmox-backup-file-restore, pve-cluster (>= 5.0-32), smartmontools, smbclient, thin-provisioning-tools, udev, zstd
  - recommends: pve-esxi-import-tools (>= 0.6.0), skopeo, zfs-zed
  - breaks: libpve-guest-common-perl (<< 4.0-3), libpve-http-server-perl (<< 4.0-3), pve-container (<< 3.1-2), pve-manager (<< 5.2-12), qemu-server (<< 8.3.2)

  </details>

- **libpve-u2f-server-perl**
  - Latest version: 1.2.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Perl bindings for libu2f-server
  - Homepage: https://www.proxmox.com/
  - Install: `sudo apt-get install libpve-u2f-server-perl`
  - Install (apt): `sudo apt install libpve-u2f-server-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libu2f-server0 (>= 0.0.0), perl (>= 5.40.1-3), perlapi-5.40.1

  </details>

- **libquorum-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine Quorum library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libquorum-dev`
  - Install (apt): `sudo apt install libquorum-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.9-pve2), libquorum5 (= 3.1.9-pve2)

  </details>

- **libquorum5**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine Quorum library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libquorum5`
  - Install (apt): `sudo apt install libquorum5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libquorum5-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libquorum5
  - Install: `sudo apt-get install libquorum5-dbgsym`
  - Install (apt): `sudo apt install libquorum5-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libquorum5 (= 3.1.9-pve2)

  </details>

- **librados-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS distributed object store client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librados-dev`
  - Install (apt): `sudo apt install librados-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libstdc++6 (>= 13.1)
  - conflicts: librados1-dev, librados2-dev
  - replaces: librados1-dev, librados2-dev

  </details>

- **librados2**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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

- **librados2-perl**
  - Latest version: 1.5.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Perl bindings for librados
  - Homepage: https://www.proxmox.com/
  - Install: `sudo apt-get install librados2-perl`
  - Install (apt): `sudo apt install librados2-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.4), libpve-access-control, librados2 (>= 19.2.2), perl (>= 5.40.1-3), perlapi-5.40.1

  </details>

- **libradospp-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS distributed object store client C++ library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradospp-dev`
  - Install (apt): `sudo apt install libradospp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve2), librados-dev (= 19.2.3-pve1)

  </details>

- **libradosstriper-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS striping interface (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradosstriper-dev`
  - Install (apt): `sudo apt install libradosstriper-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libradosstriper1 (= 19.2.2-pve2), libradosstriper1 (= 19.2.3-pve1)

  </details>

- **libradosstriper1**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS striping interface
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libradosstriper1`
  - Install (apt): `sudo apt install libradosstriper1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libstdc++6 (>= 14)

  </details>

- **librbd-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS block device client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librbd-dev`
  - Install (apt): `sudo apt install librbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve2), librados-dev (= 19.2.3-pve1), librbd1 (= 19.2.2-pve2), librbd1 (= 19.2.3-pve1)
  - conflicts: librbd1-dev
  - replaces: librbd1-dev

  </details>

- **librbd1**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS block device client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librbd1`
  - Install (apt): `sudo apt install librbd1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libcap2 (>= 1:2.10), libcryptsetup12 (>= 2:2.4), libgcc-s1 (>= 3.4), liblttng-ust1t64 (>= 2.13.0), libnbd0 (>= 1.0.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14)

  </details>

- **librgw-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS client library (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librgw-dev`
  - Install (apt): `sudo apt install librgw-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve2), librados-dev (= 19.2.3-pve1), librgw2 (= 19.2.2-pve2), librgw2 (= 19.2.3-pve1)

  </details>

- **librgw2**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS Gateway client library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install librgw2`
  - Install (apt): `sudo apt install librgw2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libicu76 (>= 76.1-1~), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), librabbitmq4 (>= 0.10.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), librdkafka1 (>= 0.9.2), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), zlib1g (>= 1:1.2.0)
  - suggests: luarocks

  </details>

- **librrd-dev**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (development)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install librrd-dev`
  - Install (apt): `sudo apt install librrd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: librrd8t64 (= 1.7.2-4.2+pve2), librrd8t64 (= 1.7.2-4.2+pve3), librrd8t64 (= 1.7.2-4.2+pve4)

  </details>

- **librrd8t64**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (runtime library)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install librrd8t64`
  - Install (apt): `sudo apt install librrd8t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcairo2 (>= 1.2.4), libdbi1t64 (>= 0.8.4), libglib2.0-0t64 (>= 2.28.0), libpango-1.0-0 (>= 1.22.0), libpangocairo-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.46), libxml2 (>= 2.7.4)
  - recommends: fonts-dejavu-core | ttf-bitstream-vera
  - breaks: librrd8 (<< 1.7.2-4.2+pve2), librrd8 (<< 1.7.2-4.2+pve3), librrd8 (<< 1.7.2-4.2+pve4)
  - replaces: librrd8
  - provides: librrd8 (= 1.7.2-4.2+pve2), librrd8 (= 1.7.2-4.2+pve3), librrd8 (= 1.7.2-4.2+pve4)

  </details>

- **librrd8t64-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for librrd8t64
  - Install: `sudo apt-get install librrd8t64-dbgsym`
  - Install (apt): `sudo apt install librrd8t64-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: librrd8t64 (= 1.7.2-4.2+pve2), librrd8t64 (= 1.7.2-4.2+pve3), librrd8t64 (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **librrdp-perl**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Perl interface, piped)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install librrdp-perl`
  - Install (apt): `sudo apt install librrdp-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: perl
  - Priority: optional
  - depends: perl:any, rrdtool

  </details>

- **librrds-perl**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Perl interface, shared)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install librrds-perl`
  - Install (apt): `sudo apt install librrds-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.4), librrd8t64 (>= 1.7.0), perl (>= 5.40.1-5), perl (>= 5.40.1-6), perlapi-5.40.1

  </details>

- **librrds-perl-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for librrds-perl
  - Install: `sudo apt-get install librrds-perl-dbgsym`
  - Install (apt): `sudo apt install librrds-perl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: librrds-perl (= 1.7.2-4.2+pve2), librrds-perl (= 1.7.2-4.2+pve3), librrds-perl (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **libsam-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine SAM library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libsam-dev`
  - Install (apt): `sudo apt install libsam-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.9-pve2), libsam4 (= 3.1.9-pve2)

  </details>

- **libsam4**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine SAM library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libsam4`
  - Install (apt): `sudo apt install libsam4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libcmap4 (>= 3.1.9), libquorum5 (>= 3.1.9)

  </details>

- **libsam4-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libsam4
  - Install: `sudo apt-get install libsam4-dbgsym`
  - Install (apt): `sudo apt install libsam4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libsam4 (= 3.1.9-pve2)

  </details>

- **libsgutils2-1.48**
  - Latest version: 1.48-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: utilities for devices using the SCSI command set (shared libraries)
  - Homepage: https://sg.danny.cz/sg/
  - Install: `sudo apt-get install libsgutils2-1.48`
  - Install (apt): `sudo apt install libsgutils2-1.48`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - suggests: sg3-utils

  </details>

- **libsgutils2-1.48-dbgsym**
  - Latest version: 1.48-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libsgutils2-1.48
  - Install: `sudo apt-get install libsgutils2-1.48-dbgsym`
  - Install (apt): `sudo apt install libsgutils2-1.48-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsgutils2-1.48 (= 1.48-2+pmx1)

  </details>

- **libsgutils2-dev**
  - Latest version: 1.48-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: utilities for devices using the SCSI command set (developer files)
  - Homepage: https://sg.danny.cz/sg/
  - Install: `sudo apt-get install libsgutils2-dev`
  - Install (apt): `sudo apt install libsgutils2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libsgutils2-1.48 (= 1.48-2+pmx1)
  - suggests: sg3-utils
  - conflicts: libsgutils1-dev

  </details>

- **libsqlite3-mod-ceph**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: SQLite3 VFS for Ceph
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libsqlite3-mod-ceph`
  - Install (apt): `sudo apt install libsqlite3-mod-ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libstdc++6 (>= 13.1)

  </details>

- **libsqlite3-mod-ceph-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: SQLite3 VFS for Ceph (development files)
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install libsqlite3-mod-ceph-dev`
  - Install (apt): `sudo apt install libsqlite3-mod-ceph-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: libsqlite3-dev, libsqlite3-mod-ceph (= 19.2.2-pve2), libsqlite3-mod-ceph (= 19.2.3-pve1)

  </details>

- **libsystemd-dev**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: systemd utility library - development files
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libsystemd-dev`
  - Install (apt): `sudo apt install libsystemd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libcap-dev, libsystemd0 (= 257.8-1~deb13u1), libsystemd0 (= 257.8-1~deb13u2), libsystemd0 (= 257.9-1~deb13u1)

  </details>

- **libsystemd-shared**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: systemd shared private library
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libsystemd-shared`
  - Install (apt): `sudo apt install libsystemd-shared`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libaudit1 (>= 1:2.2.1), libblkid1 (>= 2.30.2), libc6 (>= 2.39), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libselinux1 (>= 3.1~), libssl3t64 (>= 3.4.0)
  - recommends: libkmod2, libzstd1
  - suggests: libarchive13t64, libbpf1, libcryptsetup12, libdw1t64, libelf1t64, libfido2-1, libgcrypt20, libidn2-0, libip4tc2, liblz4-1, liblzma5, libp11-kit0, libpcre2-8-0, libpwquality1, libqrencode4, libtss2-rc0t64

  </details>

- **libsystemd-shared-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libsystemd-shared
  - Install: `sudo apt-get install libsystemd-shared-dbgsym`
  - Install (apt): `sudo apt install libsystemd-shared-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1)

  </details>

- **libsystemd0**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: systemd utility library
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libsystemd0`
  - Install (apt): `sudo apt install libsystemd0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.39), libcap2 (>= 1:2.10)
  - recommends: libzstd1
  - suggests: libgcrypt20, liblz4-1, liblzma5

  </details>

- **libsystemd0-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libsystemd0
  - Install: `sudo apt-get install libsystemd0-dbgsym`
  - Install (apt): `sudo apt install libsystemd0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsystemd0 (= 257.8-1~deb13u1), libsystemd0 (= 257.8-1~deb13u2), libsystemd0 (= 257.9-1~deb13u1)

  </details>

- **libtpms-dev**
  - Latest version: 0.9.7+pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: libtpms header files and man pages
  - Install: `sudo apt-get install libtpms-dev`
  - Install (apt): `sudo apt install libtpms-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libtpms0 (= 0.9.7+pve2)

  </details>

- **libtpms0**
  - Latest version: 0.9.7+pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: TPM emulation library
  - Install: `sudo apt-get install libtpms0`
  - Install (apt): `sudo apt install libtpms0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libssl3t64 (>= 3.0.0), openssl

  </details>

- **libtpms0-dbgsym**
  - Latest version: 0.9.7+pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libtpms0
  - Install: `sudo apt-get install libtpms0-dbgsym`
  - Install (apt): `sudo apt install libtpms0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libtpms0 (= 0.9.7+pve2)

  </details>

- **libudev-dev**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: libudev development files
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libudev-dev`
  - Install (apt): `sudo apt install libudev-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libcap-dev, libudev1 (= 257.8-1~deb13u1), libudev1 (= 257.8-1~deb13u2), libudev1 (= 257.9-1~deb13u1)

  </details>

- **libudev1**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: libudev shared library
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install libudev1`
  - Install (apt): `sudo apt install libudev1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcap2 (>= 1:2.10)
  - suggests: libidn2-0

  </details>

- **libudev1-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libudev1
  - Install: `sudo apt-get install libudev1-dbgsym`
  - Install (apt): `sudo apt install libudev1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libudev1 (= 257.8-1~deb13u1), libudev1 (= 257.8-1~deb13u2), libudev1 (= 257.9-1~deb13u1)

  </details>

- **libuutil3linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Solaris userland utility library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libuutil3linux`
  - Install (apt): `sudo apt install libuutil3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.38)
  - breaks: libuutil1, libuutil1linux, libuutil2linux, libuutil3
  - replaces: libuutil1, libuutil1linux, libuutil2linux, libuutil3

  </details>

- **libuutil3linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libuutil3linux
  - Install: `sudo apt-get install libuutil3linux-dbgsym`
  - Install (apt): `sudo apt install libuutil3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libuutil3linux (= 2.3.3-pve1), libuutil3linux (= 2.3.4-pve1), libuutil3linux (= 2.4.0-pve1)

  </details>

- **libvotequorum-dev**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine Votequorum library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libvotequorum-dev`
  - Install (apt): `sudo apt install libvotequorum-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.9-pve2), libvotequorum8 (= 3.1.9-pve2)

  </details>

- **libvotequorum8**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: cluster engine Votequorum library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libvotequorum8`
  - Install (apt): `sudo apt install libvotequorum8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libvotequorum8-dbgsym**
  - Latest version: 3.1.9-pve2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libvotequorum8
  - Install: `sudo apt-get install libvotequorum8-dbgsym`
  - Install (apt): `sudo apt install libvotequorum8-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libvotequorum8 (= 3.1.9-pve2)

  </details>

- **libzfs6linux**
  - Latest version: 2.3.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS filesystem library for Linux - general support
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfs6linux`
  - Install (apt): `sudo apt install libzfs6linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libssl3t64 (>= 3.0.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.3.3), libuutil3linux (>= 2.3.4), zlib1g (>= 1:1.1.4)
  - recommends: libcurl4
  - breaks: libzfs2, libzfs2linux, libzfs3linux, libzfs4, libzfs4linux
  - replaces: libzfs2, libzfs2linux, libzfs3linux, libzfs4, libzfs4linux

  </details>

- **libzfs6linux-dbgsym**
  - Latest version: 2.3.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libzfs6linux
  - Install: `sudo apt-get install libzfs6linux-dbgsym`
  - Install (apt): `sudo apt install libzfs6linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfs6linux (= 2.3.3-pve1), libzfs6linux (= 2.3.4-pve1)

  </details>

- **libzfs7linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS filesystem library for Linux - general support
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfs7linux`
  - Install (apt): `sudo apt install libzfs7linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.38), libnvpair3linux (>= 2.4.0), libssl3t64 (>= 3.0.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.4.0), zlib1g (>= 1:1.1.4)
  - recommends: libcurl4
  - breaks: libzfs2, libzfs2linux, libzfs3linux, libzfs4, libzfs4linux, libzfs6linux
  - replaces: libzfs2, libzfs2linux, libzfs3linux, libzfs4, libzfs4linux, libzfs6linux

  </details>

- **libzfs7linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libzfs7linux
  - Install: `sudo apt-get install libzfs7linux-dbgsym`
  - Install (apt): `sudo apt install libzfs7linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfs7linux (= 2.4.0-pve1)

  </details>

- **libzfsbootenv1linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS filesystem library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfsbootenv1linux`
  - Install (apt): `sudo apt install libzfsbootenv1linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.8), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libnvpair3linux (>= 2.4.0), libzfs6linux (>= 2.3.3), libzfs6linux (>= 2.3.4), libzfs7linux (>= 2.4.0)
  - breaks: libzfs2, libzfs4
  - replaces: libzfs2, libzfs4

  </details>

- **libzfsbootenv1linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libzfsbootenv1linux
  - Install: `sudo apt-get install libzfsbootenv1linux-dbgsym`
  - Install (apt): `sudo apt install libzfsbootenv1linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfsbootenv1linux (= 2.3.3-pve1), libzfsbootenv1linux (= 2.3.4-pve1), libzfsbootenv1linux (= 2.4.0-pve1)

  </details>

- **libzfslinux-dev**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS filesystem development files for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfslinux-dev`
  - Install (apt): `sudo apt install libzfslinux-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libdevel
  - Priority: optional
  - depends: libblkid-dev, libnvpair3linux (= 2.3.3-pve1), libnvpair3linux (= 2.3.4-pve1), libnvpair3linux (= 2.4.0-pve1), libssl-dev | libssl1.0-dev, libtirpc-dev, libuutil3linux (= 2.3.3-pve1), libuutil3linux (= 2.3.4-pve1), libuutil3linux (= 2.4.0-pve1), libzfs6linux (= 2.3.3-pve1), libzfs6linux (= 2.3.4-pve1), libzfs7linux (= 2.4.0-pve1), libzfsbootenv1linux (= 2.3.3-pve1), libzfsbootenv1linux (= 2.3.4-pve1), libzfsbootenv1linux (= 2.4.0-pve1), libzpool6linux (= 2.3.3-pve1), libzpool6linux (= 2.3.4-pve1), libzpool7linux (= 2.4.0-pve1), zlib1g-dev
  - provides: libnvpair-dev, libuutil-dev

  </details>

- **libzpool6linux**
  - Latest version: 2.3.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS pool library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzpool6linux`
  - Install (apt): `sudo apt install libzpool6linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libudev1 (>= 183), libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool2linux, libzpool3linux, libzpool4, libzpool5linux
  - replaces: libzpool2, libzpool2linux, libzpool3linux, libzpool4, libzpool5linux

  </details>

- **libzpool6linux-dbgsym**
  - Latest version: 2.3.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libzpool6linux
  - Install: `sudo apt-get install libzpool6linux-dbgsym`
  - Install (apt): `sudo apt install libzpool6linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzpool6linux (= 2.3.3-pve1), libzpool6linux (= 2.3.4-pve1)

  </details>

- **libzpool7linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS pool library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzpool7linux`
  - Install (apt): `sudo apt install libzpool7linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.38), libnvpair3linux (>= 2.4.0), libudev1 (>= 183), libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool5
  - replaces: libzpool2, libzpool5

  </details>

- **libzpool7linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for libzpool7linux
  - Install: `sudo apt-get install libzpool7linux-dbgsym`
  - Install (apt): `sudo apt install libzpool7linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzpool7linux (= 2.4.0-pve1)

  </details>

- **linux-tools-6.14**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux kernel version specific tools for version 6.14
  - Install: `sudo apt-get install linux-tools-6.14`
  - Install (apt): `sudo apt install linux-tools-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libcapstone5 (>= 5), libdw1t64 (>= 0.161), libelf1t64 (>= 0.144), libllvm19 (>= 1:19.1.0), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 4.1.1), libstdc++6 (>= 5.2), libzstd1 (>= 1.5.5), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.14-dbgsym**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for linux-tools-6.14
  - Install: `sudo apt-get install linux-tools-6.14-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.14-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.14 (= 6.14.11-1), linux-tools-6.14 (= 6.14.11-2), linux-tools-6.14 (= 6.14.11-3), linux-tools-6.14 (= 6.14.11-4), linux-tools-6.14 (= 6.14.11-5), linux-tools-6.14 (= 6.14.8-1), linux-tools-6.14 (= 6.14.8-2)

  </details>

- **linux-tools-6.17**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux kernel version specific tools for version 6.17
  - Install: `sudo apt-get install linux-tools-6.17`
  - Install (apt): `sudo apt install linux-tools-6.17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.38), libcapstone5 (>= 5), libdw1t64 (>= 0.161), libelf1t64 (>= 0.144), libllvm19 (>= 1:19.1.0), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 4.1.1), libstdc++6 (>= 5.2), libzstd1 (>= 1.5.5), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.17-dbgsym**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for linux-tools-6.17
  - Install: `sudo apt-get install linux-tools-6.17-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.17-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.17 (= 6.17.1-1), linux-tools-6.17 (= 6.17.2-1), linux-tools-6.17 (= 6.17.2-2), linux-tools-6.17 (= 6.17.4-1), linux-tools-6.17 (= 6.17.4-2), linux-tools-6.17 (= 6.17.9-1)

  </details>

- **lua-rrd**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Lua interfaces)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install lua-rrd`
  - Install (apt): `sudo apt install lua-rrd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: interpreters
  - Priority: optional
  - depends: libc6 (>= 2.4), librrd8t64 (>= 1.4~rc2)
  - breaks: liblua5.1-rrd0 (<< 1.5.4-3~)
  - replaces: liblua5.1-rrd0 (<< 1.5.4-3~)
  - provides: liblua5.1-rrd0, lua5.1-rrd, lua5.2-rrd, lua5.3-rrd

  </details>

- **lua-rrd-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for lua-rrd
  - Install: `sudo apt-get install lua-rrd-dbgsym`
  - Install (apt): `sudo apt install lua-rrd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: lua-rrd (= 1.7.2-4.2+pve2), lua-rrd (= 1.7.2-4.2+pve3), lua-rrd (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **lua-rrd-dev**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Lua development)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install lua-rrd-dev`
  - Install (apt): `sudo apt install lua-rrd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: lua-rrd (= 1.7.2-4.2+pve2), lua-rrd (= 1.7.2-4.2+pve3), lua-rrd (= 1.7.2-4.2+pve4)
  - breaks: liblua5.1-rrd-dev (<< 1.5.4-3~)
  - replaces: liblua5.1-rrd-dev (<< 1.5.4-3~)
  - provides: liblua5.1-rrd-dev, lua5.1-rrd-dev, lua5.2-rrd-dev, lua5.3-rrd-dev

  </details>

- **lvm2**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Logical Volume Manager
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install lvm2`
  - Install (apt): `sudo apt install lvm2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: dmeventd (>= 2:1.02.205-2+pmx1~), dmsetup (>= 2:1.02.205-2+pmx1~), libaio1t64 (>= 0.3.93), libblkid1 (>= 2.24.2), libc6 (>= 2.38), libdevmapper-event1.02.1 (>= 2:1.02.74), libedit2 (>= 2.11-20080614-0), libselinux1 (>= 3.1~), libsystemd0 (>= 233), libudev1 (>= 183)
  - recommends: thin-provisioning-tools

  </details>

- **lvm2-dbgsym**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for lvm2
  - Install: `sudo apt-get install lvm2-dbgsym`
  - Install (apt): `sudo apt install lvm2-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: lvm2 (= 2.03.31-2+pmx1)

  </details>

- **lvm2-dbusd**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: LVM2 D-Bus daemon
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install lvm2-dbusd`
  - Install (apt): `sudo apt install lvm2-dbusd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: dbus, lvm2 (>= 2.03.31-2+pmx1~), python3-dbus, python3-gi, python3-pyudev, python3:any

  </details>

- **lvm2-lockd**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: LVM locking daemon
  - Homepage: https://sourceware.org/lvm2/
  - Install: `sudo apt-get install lvm2-lockd`
  - Install (apt): `sudo apt install lvm2-lockd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libdlm3 (>= 3.0.2), libsanlock-client1 (>= 3.3.0), libselinux1 (>= 3.1~), libsystemd0, libudev1 (>= 183), lvm2 (>= 2.03.31-2+pmx1~)

  </details>

- **lvm2-lockd-dbgsym**
  - Latest version: 2.03.31-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for lvm2-lockd
  - Install: `sudo apt-get install lvm2-lockd-dbgsym`
  - Install (apt): `sudo apt install lvm2-lockd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian LVM Team <team+lvm@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: lvm2-lockd (= 2.03.31-2+pmx1)

  </details>

- **lxc-pve**
  - Latest version: 6.0.5-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux containers userspace tools
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxc-pve`
  - Install (apt): `sudo apt install lxc-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apparmor, bridge-utils, criu (>= 1.5.2-1), libapparmor1 (>= 2.6~devel), libc6 (>= 2.38), libcap2 (>= 1:2.10), libdbus-1-3 (>= 1.10), libgcc-s1 (>= 3.3.1), libseccomp2 (>= 2.5.0), lxcfs, python3, uidmap
  - conflicts: liblxc1, lxc
  - breaks: pve-container (<< 3.1-1)
  - replaces: liblxc1, lxc
  - provides: liblxc1, lxc

  </details>

- **lxc-pve-dbgsym**
  - Latest version: 6.0.5-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for lxc-pve
  - Install: `sudo apt-get install lxc-pve-dbgsym`
  - Install (apt): `sudo apt install lxc-pve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxc-pve (= 6.0.4-2), lxc-pve (= 6.0.5-1), lxc-pve (= 6.0.5-2), lxc-pve (= 6.0.5-3)

  </details>

- **lxc-pve-dev**
  - Latest version: 6.0.5-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux Containers userspace tools (development)
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxc-pve-dev`
  - Install (apt): `sudo apt install lxc-pve-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: lxc-pve (= 6.0.4-2), lxc-pve (= 6.0.5-1), lxc-pve (= 6.0.5-2), lxc-pve (= 6.0.5-3)

  </details>

- **lxcfs**
  - Latest version: 6.0.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: LXC userspace filesystem
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxcfs`
  - Install (apt): `sudo apt install lxcfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libfuse3-4 (>= 3.17.2), libgcc-s1 (>= 3.3.1)

  </details>

- **lxcfs-dbgsym**
  - Latest version: 6.0.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for lxcfs
  - Install: `sudo apt-get install lxcfs-dbgsym`
  - Install (apt): `sudo apt install lxcfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxcfs (= 6.0.4-pve1)

  </details>


### <a id="packages-N"></a>N

- **novnc-pve**
  - Latest version: 1.6.0-3
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: HTML5 VNC client
  - Homepage: https://github.com/kanaka/noVNC/
  - Install: `sudo apt-get install novnc-pve`
  - Install (apt): `sudo apt install novnc-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>


### <a id="packages-P"></a>P

- **proxmox-archive-keyring**
  - Latest version: 4.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox APT archive keyring
  - Install: `sudo apt-get install proxmox-archive-keyring`
  - Install (apt): `sudo apt install proxmox-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **proxmox-auto-install-assistant**
  - Latest version: 9.1.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Assistant to help with automated installations
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-auto-install-assistant`
  - Install (apt): `sudo apt install proxmox-auto-install-assistant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.39), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0)
  - recommends: xorriso

  </details>

- **proxmox-backup-client**
  - Latest version: 4.1.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Backup Client tools
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-client`
  - Install (apt): `sudo apt install proxmox-backup-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.39), libfuse3-4 (>= 3.17.2), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libzstd1 (>= 1.5.5), qrencode

  </details>

- **proxmox-backup-client-dbgsym**
  - Latest version: 4.1.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-backup-client
  - Install: `sudo apt-get install proxmox-backup-client-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-client-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-client (= 4.0.10-1), proxmox-backup-client (= 4.0.11-1), proxmox-backup-client (= 4.0.12-1), proxmox-backup-client (= 4.0.13-1), proxmox-backup-client (= 4.0.14-1), proxmox-backup-client (= 4.0.15-1), proxmox-backup-client (= 4.0.16-1), proxmox-backup-client (= 4.0.19-1), proxmox-backup-client (= 4.0.2-1), proxmox-backup-client (= 4.0.20-1), proxmox-backup-client (= 4.0.3-1), proxmox-backup-client (= 4.0.4-1), proxmox-backup-client (= 4.0.5-1), proxmox-backup-client (= 4.0.6-1), proxmox-backup-client (= 4.0.7-1), proxmox-backup-client (= 4.0.8-1), proxmox-backup-client (= 4.0.9-1), proxmox-backup-client (= 4.1.0-1), proxmox-backup-client (= 4.1.1-1)

  </details>

- **proxmox-backup-file-restore**
  - Latest version: 4.1.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Backup single file restore tools for pxar and block device backups
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-file-restore`
  - Install (apt): `sudo apt install proxmox-backup-file-restore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.39), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libuuid1 (>= 2.16), libzstd1 (>= 1.5.5)
  - recommends: proxmox-backup-restore-image, pve-qemu-kvm (>= 5.0.0-9)
  - breaks: proxmox-backup-restore-image (<< 0.3.1)

  </details>

- **proxmox-backup-file-restore-dbgsym**
  - Latest version: 4.1.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-backup-file-restore
  - Install: `sudo apt-get install proxmox-backup-file-restore-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-file-restore-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-file-restore (= 4.0.10-1), proxmox-backup-file-restore (= 4.0.11-1), proxmox-backup-file-restore (= 4.0.12-1), proxmox-backup-file-restore (= 4.0.13-1), proxmox-backup-file-restore (= 4.0.14-1), proxmox-backup-file-restore (= 4.0.15-1), proxmox-backup-file-restore (= 4.0.16-1), proxmox-backup-file-restore (= 4.0.19-1), proxmox-backup-file-restore (= 4.0.2-1), proxmox-backup-file-restore (= 4.0.20-1), proxmox-backup-file-restore (= 4.0.3-1), proxmox-backup-file-restore (= 4.0.4-1), proxmox-backup-file-restore (= 4.0.5-1), proxmox-backup-file-restore (= 4.0.6-1), proxmox-backup-file-restore (= 4.0.7-1), proxmox-backup-file-restore (= 4.0.8-1), proxmox-backup-file-restore (= 4.0.9-1), proxmox-backup-file-restore (= 4.1.0-1), proxmox-backup-file-restore (= 4.1.1-1)

  </details>

- **proxmox-backup-restore-image**
  - Latest version: 1.0.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Kernel/initramfs images for Proxmox Backup single-file restore.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-restore-image`
  - Install (apt): `sudo apt install proxmox-backup-restore-image`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - recommends: proxmox-backup-file-restore
  - breaks: proxmox-backup-file-restore (<< 3.4.2-1)

  </details>

- **proxmox-backup-restore-image-debug**
  - Latest version: 1.0.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Debug initramfs image for Proxmox Backup single-file restore.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-restore-image-debug`
  - Install (apt): `sudo apt install proxmox-backup-restore-image-debug`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-backup-restore-image
  - breaks: proxmox-backup-file-restore (<< 3.4.2-1)

  </details>

- **proxmox-default-headers**
  - Latest version: 2.0.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Default Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-default-headers`
  - Install (apt): `sudo apt install proxmox-default-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.14, proxmox-headers-6.17
  - provides: pve-headers

  </details>

- **proxmox-default-kernel**
  - Latest version: 2.0.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Default Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-default-kernel`
  - Install (apt): `sudo apt install proxmox-default-kernel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.14, proxmox-kernel-6.17

  </details>

- **proxmox-firewall**
  - Latest version: 1.2.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox's nftables-based firewall written in rust
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-firewall`
  - Install (apt): `sudo apt install proxmox-firewall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), netbase, nftables, pve-firewall
  - conflicts: ulogd

  </details>

- **proxmox-firewall-dbgsym**
  - Latest version: 1.2.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-firewall
  - Install: `sudo apt-get install proxmox-firewall-dbgsym`
  - Install (apt): `sudo apt install proxmox-firewall-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-firewall (= 1.0.0), proxmox-firewall (= 1.1.0), proxmox-firewall (= 1.1.1), proxmox-firewall (= 1.1.2), proxmox-firewall (= 1.2.0), proxmox-firewall (= 1.2.1)

  </details>

- **proxmox-first-boot**
  - Latest version: 9.1.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Service which runs on the first system boot for additional setup
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-first-boot`
  - Install (apt): `sudo apt install proxmox-first-boot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional

  </details>

- **proxmox-grub**
  - Latest version: 2.12-9+pmx2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Empty package to ensure Proxmox Grub packages are installed
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install proxmox-grub`
  - Install (apt): `sudo apt install proxmox-grub`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.12-9+pmx2), grub-efi-amd64 (= 2.12-9+pmx2) | grub-efi-ia32 (= 2.12-9+pmx2) | grub-efi-arm64 (= 2.12-9+pmx2)

  </details>

- **proxmox-headers-6.14**
  - Latest version: 6.14.11-5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14`
  - Install (apt): `sudo apt install proxmox-headers-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.14.11-1-pve, proxmox-headers-6.14.11-2-pve, proxmox-headers-6.14.11-3-pve, proxmox-headers-6.14.11-4-pve, proxmox-headers-6.14.11-5-pve, proxmox-headers-6.14.8-1-pve, proxmox-headers-6.14.8-2-pve
  - replaces: pve-headers-6.14
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.14

  </details>

- **proxmox-headers-6.14.11-1-pve**
  - Latest version: 6.14.11-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-1-pve-amd64, pve-headers-6.14.11-1-pve

  </details>

- **proxmox-headers-6.14.11-2-pve**
  - Latest version: 6.14.11-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-2-pve-amd64, pve-headers-6.14.11-2-pve

  </details>

- **proxmox-headers-6.14.11-3-pve**
  - Latest version: 6.14.11-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-3-pve-amd64, pve-headers-6.14.11-3-pve

  </details>

- **proxmox-headers-6.14.11-4-pve**
  - Latest version: 6.14.11-4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-4-pve-amd64, pve-headers-6.14.11-4-pve

  </details>

- **proxmox-headers-6.14.11-5-pve**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-5-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-5-pve-amd64, pve-headers-6.14.11-5-pve

  </details>

- **proxmox-headers-6.14.4-1+deb13u1-pve**
  - Latest version: 6.14.4-1+deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.4-1+deb13u1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.4-1+deb13u1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.4-1+deb13u1-pve-amd64, pve-headers-6.14.4-1+deb13u1-pve

  </details>

- **proxmox-headers-6.14.5-1-pve**
  - Latest version: 6.14.5-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.5-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.5-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.5-1-pve-amd64, pve-headers-6.14.5-1-pve

  </details>

- **proxmox-headers-6.14.6-1-pve**
  - Latest version: 6.14.6-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.6-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.6-1-pve-amd64, pve-headers-6.14.6-1-pve

  </details>

- **proxmox-headers-6.14.8-1-pve**
  - Latest version: 6.14.8-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.8-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.8-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.8-1-pve-amd64, pve-headers-6.14.8-1-pve

  </details>

- **proxmox-headers-6.14.8-2-pve**
  - Latest version: 6.14.8-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.8-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.8-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.8-2-pve-amd64, pve-headers-6.14.8-2-pve

  </details>

- **proxmox-headers-6.17**
  - Latest version: 6.17.9-1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17`
  - Install (apt): `sudo apt install proxmox-headers-6.17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.17.1-1-pve, proxmox-headers-6.17.2-1-pve, proxmox-headers-6.17.2-2-pve, proxmox-headers-6.17.4-1-pve, proxmox-headers-6.17.4-2-pve, proxmox-headers-6.17.9-1-pve
  - replaces: pve-headers-6.17
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.17

  </details>

- **proxmox-headers-6.17.1-1-pve**
  - Latest version: 6.17.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.1-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.1-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.1-1-pve-amd64, pve-headers-6.17.1-1-pve

  </details>

- **proxmox-headers-6.17.2-1-pve**
  - Latest version: 6.17.2-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.2-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.2-1-pve-amd64, pve-headers-6.17.2-1-pve

  </details>

- **proxmox-headers-6.17.2-2-pve**
  - Latest version: 6.17.2-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.2-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.2-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.2-2-pve-amd64, pve-headers-6.17.2-2-pve

  </details>

- **proxmox-headers-6.17.4-1-pve**
  - Latest version: 6.17.4-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.4-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.4-1-pve-amd64, pve-headers-6.17.4-1-pve

  </details>

- **proxmox-headers-6.17.4-2-pve**
  - Latest version: 6.17.4-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.4-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.4-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.4-2-pve-amd64, pve-headers-6.17.4-2-pve

  </details>

- **proxmox-headers-6.17.9-1-pve**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.17.9-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.17.9-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.17.9-1-pve-amd64, pve-headers-6.17.9-1-pve

  </details>

- **proxmox-installer**
  - Latest version: 9.1.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Installer for Proxmox Projects
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-installer`
  - Install (apt): `sudo apt install proxmox-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: chrony, e2fsprogs, geoip-bin, iproute2, libc6 (>= 2.39), libgcc-s1 (>= 4.2), libgtk3-perl, libgtk3-webkit2-perl, libjson-perl, perl:any, proxmox-kernel-helper, squashfs-tools
  - breaks: pbs-installer (<< 7~), pve-installer (<< 7~)
  - replaces: pbs-installer (<< 7~), pve-installer (<< 7~)

  </details>

- **proxmox-kernel-6.14**
  - Latest version: 6.14.11-5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14`
  - Install (apt): `sudo apt install proxmox-kernel-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.14.11-1-pve-signed | proxmox-kernel-6.14.11-1-pve, proxmox-kernel-6.14.11-2-pve-signed | proxmox-kernel-6.14.11-2-pve, proxmox-kernel-6.14.11-3-pve-signed | proxmox-kernel-6.14.11-3-pve, proxmox-kernel-6.14.11-4-pve-signed | proxmox-kernel-6.14.11-4-pve, proxmox-kernel-6.14.11-5-pve-signed | proxmox-kernel-6.14.11-5-pve, proxmox-kernel-6.14.8-1-pve-signed | proxmox-kernel-6.14.8-1-pve, proxmox-kernel-6.14.8-2-pve-signed | proxmox-kernel-6.14.8-2-pve, pve-firmware
  - replaces: pve-kernel-6.14
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.14, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.14.11-1-pve**
  - Latest version: 6.14.11-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-1-pve-amd64, pve-kernel-6.14.11-1-pve

  </details>

- **proxmox-kernel-6.14.11-1-pve-signed**
  - Latest version: 6.14.11-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-1-pve
  - replaces: proxmox-kernel-6.14.11-1-pve
  - provides: linux-image-6.14.11-1-pve-amd64, proxmox-kernel-6.14.11-1-pve

  </details>

- **proxmox-kernel-6.14.11-1-pve-signed-template**
  - Latest version: 6.14.11-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.11-2-pve**
  - Latest version: 6.14.11-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-2-pve-amd64, pve-kernel-6.14.11-2-pve

  </details>

- **proxmox-kernel-6.14.11-2-pve-signed**
  - Latest version: 6.14.11-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-2-pve
  - replaces: proxmox-kernel-6.14.11-2-pve
  - provides: linux-image-6.14.11-2-pve-amd64, proxmox-kernel-6.14.11-2-pve

  </details>

- **proxmox-kernel-6.14.11-2-pve-signed-template**
  - Latest version: 6.14.11-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.11-3-pve**
  - Latest version: 6.14.11-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-3-pve-amd64, pve-kernel-6.14.11-3-pve

  </details>

- **proxmox-kernel-6.14.11-3-pve-signed**
  - Latest version: 6.14.11-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-3-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-3-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-3-pve
  - replaces: proxmox-kernel-6.14.11-3-pve
  - provides: linux-image-6.14.11-3-pve-amd64, proxmox-kernel-6.14.11-3-pve

  </details>

- **proxmox-kernel-6.14.11-3-pve-signed-template**
  - Latest version: 6.14.11-3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-3-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-3-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.11-4-pve**
  - Latest version: 6.14.11-4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-4-pve-amd64, pve-kernel-6.14.11-4-pve

  </details>

- **proxmox-kernel-6.14.11-4-pve-signed**
  - Latest version: 6.14.11-4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-4-pve
  - replaces: proxmox-kernel-6.14.11-4-pve
  - provides: linux-image-6.14.11-4-pve-amd64, proxmox-kernel-6.14.11-4-pve

  </details>

- **proxmox-kernel-6.14.11-4-pve-signed-template**
  - Latest version: 6.14.11-4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.11-5-pve**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-5-pve-amd64, pve-kernel-6.14.11-5-pve

  </details>

- **proxmox-kernel-6.14.11-5-pve-signed**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-5-pve
  - replaces: proxmox-kernel-6.14.11-5-pve
  - provides: linux-image-6.14.11-5-pve-amd64, proxmox-kernel-6.14.11-5-pve

  </details>

- **proxmox-kernel-6.14.11-5-pve-signed-template**
  - Latest version: 6.14.11-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.4-1+deb13u1-pve**
  - Latest version: 6.14.4-1+deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1+deb13u1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1+deb13u1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.4-1+deb13u1-pve-amd64, pve-kernel-6.14.4-1+deb13u1-pve

  </details>

- **proxmox-kernel-6.14.4-1+deb13u1-pve-signed**
  - Latest version: 6.14.4-1+deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1+deb13u1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1+deb13u1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.4-1+deb13u1-pve
  - replaces: proxmox-kernel-6.14.4-1+deb13u1-pve
  - provides: linux-image-6.14.4-1+deb13u1-pve-amd64, proxmox-kernel-6.14.4-1+deb13u1-pve

  </details>

- **proxmox-kernel-6.14.4-1+deb13u1-pve-signed-template**
  - Latest version: 6.14.4-1+deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1+deb13u1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1+deb13u1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.5-1-pve**
  - Latest version: 6.14.5-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.5-1-pve-amd64, pve-kernel-6.14.5-1-pve

  </details>

- **proxmox-kernel-6.14.5-1-pve-signed**
  - Latest version: 6.14.5-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.5-1-pve
  - replaces: proxmox-kernel-6.14.5-1-pve
  - provides: linux-image-6.14.5-1-pve-amd64, proxmox-kernel-6.14.5-1-pve

  </details>

- **proxmox-kernel-6.14.5-1-pve-signed-template**
  - Latest version: 6.14.5-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.6-1-pve**
  - Latest version: 6.14.6-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.6-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.6-1-pve-amd64, pve-kernel-6.14.6-1-pve

  </details>

- **proxmox-kernel-6.14.6-1-pve-signed**
  - Latest version: 6.14.6-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.6-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.6-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.6-1-pve
  - replaces: proxmox-kernel-6.14.6-1-pve
  - provides: linux-image-6.14.6-1-pve-amd64, proxmox-kernel-6.14.6-1-pve

  </details>

- **proxmox-kernel-6.14.6-1-pve-signed-template**
  - Latest version: 6.14.6-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.6-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.6-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.8-1-pve**
  - Latest version: 6.14.8-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.8-1-pve-amd64, pve-kernel-6.14.8-1-pve

  </details>

- **proxmox-kernel-6.14.8-1-pve-signed**
  - Latest version: 6.14.8-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.8-1-pve
  - replaces: proxmox-kernel-6.14.8-1-pve
  - provides: linux-image-6.14.8-1-pve-amd64, proxmox-kernel-6.14.8-1-pve

  </details>

- **proxmox-kernel-6.14.8-1-pve-signed-template**
  - Latest version: 6.14.8-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.8-2-pve**
  - Latest version: 6.14.8-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.8-2-pve-amd64, pve-kernel-6.14.8-2-pve

  </details>

- **proxmox-kernel-6.14.8-2-pve-signed**
  - Latest version: 6.14.8-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.8-2-pve
  - replaces: proxmox-kernel-6.14.8-2-pve
  - provides: linux-image-6.14.8-2-pve-amd64, proxmox-kernel-6.14.8-2-pve

  </details>

- **proxmox-kernel-6.14.8-2-pve-signed-template**
  - Latest version: 6.14.8-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17**
  - Latest version: 6.17.9-1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17`
  - Install (apt): `sudo apt install proxmox-kernel-6.17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.17.1-1-pve-signed | proxmox-kernel-6.17.1-1-pve, proxmox-kernel-6.17.2-1-pve-signed | proxmox-kernel-6.17.2-1-pve, proxmox-kernel-6.17.2-2-pve-signed | proxmox-kernel-6.17.2-2-pve, proxmox-kernel-6.17.4-1-pve-signed | proxmox-kernel-6.17.4-1-pve, proxmox-kernel-6.17.4-2-pve-signed | proxmox-kernel-6.17.4-2-pve, proxmox-kernel-6.17.9-1-pve-signed | proxmox-kernel-6.17.9-1-pve, pve-firmware
  - replaces: pve-kernel-6.17
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.17, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.17.1-1-pve**
  - Latest version: 6.17.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.1-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.1-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.1-1-pve-amd64, pve-kernel-6.17.1-1-pve

  </details>

- **proxmox-kernel-6.17.1-1-pve-signed**
  - Latest version: 6.17.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.1-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.1-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.1-1-pve
  - replaces: proxmox-kernel-6.17.1-1-pve
  - provides: linux-image-6.17.1-1-pve-amd64, proxmox-kernel-6.17.1-1-pve

  </details>

- **proxmox-kernel-6.17.1-1-pve-signed-template**
  - Latest version: 6.17.1-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.1-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.1-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17.2-1-pve**
  - Latest version: 6.17.2-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.2-1-pve-amd64, pve-kernel-6.17.2-1-pve

  </details>

- **proxmox-kernel-6.17.2-1-pve-signed**
  - Latest version: 6.17.2-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.2-1-pve
  - replaces: proxmox-kernel-6.17.2-1-pve
  - provides: linux-image-6.17.2-1-pve-amd64, proxmox-kernel-6.17.2-1-pve

  </details>

- **proxmox-kernel-6.17.2-1-pve-signed-template**
  - Latest version: 6.17.2-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17.2-2-pve**
  - Latest version: 6.17.2-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.2-2-pve-amd64, pve-kernel-6.17.2-2-pve

  </details>

- **proxmox-kernel-6.17.2-2-pve-signed**
  - Latest version: 6.17.2-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.2-2-pve
  - replaces: proxmox-kernel-6.17.2-2-pve
  - provides: linux-image-6.17.2-2-pve-amd64, proxmox-kernel-6.17.2-2-pve

  </details>

- **proxmox-kernel-6.17.2-2-pve-signed-template**
  - Latest version: 6.17.2-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.2-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.2-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17.4-1-pve**
  - Latest version: 6.17.4-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.4-1-pve-amd64, pve-kernel-6.17.4-1-pve

  </details>

- **proxmox-kernel-6.17.4-1-pve-signed**
  - Latest version: 6.17.4-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.4-1-pve
  - replaces: proxmox-kernel-6.17.4-1-pve
  - provides: linux-image-6.17.4-1-pve-amd64, proxmox-kernel-6.17.4-1-pve

  </details>

- **proxmox-kernel-6.17.4-1-pve-signed-template**
  - Latest version: 6.17.4-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17.4-2-pve**
  - Latest version: 6.17.4-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.4-2-pve-amd64, pve-kernel-6.17.4-2-pve

  </details>

- **proxmox-kernel-6.17.4-2-pve-signed**
  - Latest version: 6.17.4-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.4-2-pve
  - replaces: proxmox-kernel-6.17.4-2-pve
  - provides: linux-image-6.17.4-2-pve-amd64, proxmox-kernel-6.17.4-2-pve

  </details>

- **proxmox-kernel-6.17.4-2-pve-signed-template**
  - Latest version: 6.17.4-2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.4-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.4-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.17.9-1-pve**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.17.9-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.9-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.17.9-1-pve-amd64, pve-kernel-6.17.9-1-pve

  </details>

- **proxmox-kernel-6.17.9-1-pve-signed**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.17.9-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.9-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.17.9-1-pve
  - replaces: proxmox-kernel-6.17.9-1-pve
  - provides: linux-image-6.17.9-1-pve-amd64, proxmox-kernel-6.17.9-1-pve

  </details>

- **proxmox-kernel-6.17.9-1-pve-signed-template**
  - Latest version: 6.17.9-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.17.9-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.17.9-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-helper**
  - Latest version: 9.0.4
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Function for various kernel maintenance tasks.
  - Install: `sudo apt-get install proxmox-kernel-helper`
  - Install (apt): `sudo apt install proxmox-kernel-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dosfstools, gdisk, systemd, udev
  - suggests: systemd-boot, systemd-boot-efi, systemd-boot-tools
  - breaks: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - replaces: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - provides: pve-kernel-helper

  </details>

- **proxmox-kernel-libc-dev**
  - Latest version: 6.17.4-1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Linux support headers for userspace development
  - Install: `sudo apt-get install proxmox-kernel-libc-dev`
  - Install (apt): `sudo apt install proxmox-kernel-libc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - conflicts: linux-libc-dev
  - breaks: pve-kernel-libc-dev
  - replaces: linux-libc-dev, pve-kernel-libc-dev
  - provides: linux-libc-dev (= 6.17.4-1), pve-kernel-libc-dev

  </details>

- **proxmox-mail-forward**
  - Latest version: 1.0.2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox mail forward helper
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-mail-forward`
  - Install (apt): `sudo apt install proxmox-mail-forward`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: rust
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libuuid1 (>= 2.16)

  </details>

- **proxmox-mail-forward-dbgsym**
  - Latest version: 1.0.2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-mail-forward
  - Install: `sudo apt-get install proxmox-mail-forward-dbgsym`
  - Install (apt): `sudo apt install proxmox-mail-forward-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mail-forward (= 1.0.1), proxmox-mail-forward (= 1.0.2)

  </details>

- **proxmox-mini-journalreader**
  - Latest version: 1.6
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Minimal systemd Journal Reader
  - Install: `sudo apt-get install proxmox-mini-journalreader`
  - Install (apt): `sudo apt install proxmox-mini-journalreader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libsystemd0

  </details>

- **proxmox-mini-journalreader-dbgsym**
  - Latest version: 1.6
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-mini-journalreader
  - Install: `sudo apt-get install proxmox-mini-journalreader-dbgsym`
  - Install (apt): `sudo apt install proxmox-mini-journalreader-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mini-journalreader (= 1.6)

  </details>

- **proxmox-offline-mirror**
  - Latest version: 0.7.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox offline repository mirror and subscription key manager
  - Install: `sudo apt-get install proxmox-offline-mirror`
  - Install (apt): `sudo apt install proxmox-offline-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libgmp10 (>= 2:6.3.0+dfsg), libhogweed6t64, liblzma5 (>= 5.1.1alpha+20120614), libnettle8t64 (>= 3.9~), libssl3t64 (>= 3.0.0), proxmox-archive-keyring, proxmox-offline-mirror-docs

  </details>

- **proxmox-offline-mirror-dbgsym**
  - Latest version: 0.7.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-offline-mirror
  - Install: `sudo apt-get install proxmox-offline-mirror-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror (= 0.7.0), proxmox-offline-mirror (= 0.7.1), proxmox-offline-mirror (= 0.7.2), proxmox-offline-mirror (= 0.7.3)

  </details>

- **proxmox-offline-mirror-docs**
  - Latest version: 0.7.3
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox offline repository mirror and subscription key manager
  - Install: `sudo apt-get install proxmox-offline-mirror-docs`
  - Install (apt): `sudo apt install proxmox-offline-mirror-docs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - breaks: proxmox-offline-mirror (<< 0.2.0~)
  - replaces: proxmox-offline-mirror (<< 0.2.0~)

  </details>

- **proxmox-offline-mirror-helper**
  - Latest version: 0.7.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox offline repository mirror and subscription key manager helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), proxmox-archive-keyring, proxmox-offline-mirror-docs
  - breaks: proxmox-offline-mirror (<< 0.3.0~)
  - replaces: proxmox-offline-mirror (<< 0.3.0~)

  </details>

- **proxmox-offline-mirror-helper-dbgsym**
  - Latest version: 0.7.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-offline-mirror-helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror-helper (= 0.7.0), proxmox-offline-mirror-helper (= 0.7.1), proxmox-offline-mirror-helper (= 0.7.2), proxmox-offline-mirror-helper (= 0.7.3)

  </details>

- **proxmox-rrd-migration-tool**
  - Latest version: 1.0.5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Migrate Proxmox VE RRD metrics to new version format.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-rrd-migration-tool`
  - Install (apt): `sudo apt install proxmox-rrd-migration-tool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), librrd8t64 (>= 1.5.3)

  </details>

- **proxmox-rrd-migration-tool-dbgsym**
  - Latest version: 1.0.5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-rrd-migration-tool
  - Install: `sudo apt-get install proxmox-rrd-migration-tool-dbgsym`
  - Install (apt): `sudo apt install proxmox-rrd-migration-tool-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-rrd-migration-tool (= 1.0.2), proxmox-rrd-migration-tool (= 1.0.3), proxmox-rrd-migration-tool (= 1.0.4), proxmox-rrd-migration-tool (= 1.0.5)

  </details>

- **proxmox-secure-boot-support**
  - Latest version: 2.0.5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Meta package pulling in signed Secure Boot related packages
  - Install: `sudo apt-get install proxmox-secure-boot-support`
  - Install (apt): `sudo apt install proxmox-secure-boot-support`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-efi-amd64-signed (= 1+2.12+9+pmx1) | grub-efi-amd64-signed (= 1+2.12+9+pmx2), proxmox-grub (= 2.12-9+pmx1) | proxmox-grub (= 2.12-9+pmx2), shim-helpers-amd64-signed (= 1+15.8+1+pmx1), shim-signed (= 1.46+pmx2+15.8-1+pmx1), shim-signed (= 1.47+pmx1+15.8-1+pmx1), shim-unsigned (= 15.8-1+pmx1)

  </details>

- **proxmox-termproxy**
  - Latest version: 2.0.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Wrapper proxy for executing programs in the system terminal
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-termproxy`
  - Install (apt): `sudo apt install proxmox-termproxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2)
  - recommends: pve-xtermjs
  - breaks: pve-xtermjs (<< 5.3.0~)
  - replaces: pve-xtermjs (<< 5.3.0~)

  </details>

- **proxmox-termproxy-dbgsym**
  - Latest version: 2.0.3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-termproxy
  - Install: `sudo apt-get install proxmox-termproxy-dbgsym`
  - Install (apt): `sudo apt install proxmox-termproxy-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-termproxy (= 2.0.2), proxmox-termproxy (= 2.0.3)

  </details>

- **proxmox-ve**
  - Latest version: 9.1.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Virtual Environment
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-ve`
  - Install (apt): `sudo apt install proxmox-ve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apt, openssh-client, openssh-server, proxmox-archive-keyring, proxmox-default-kernel, proxmox-kernel-helper (>= 9.0~), pve-manager (>= 9.0~), pve-qemu-kvm, qemu-server (>= 9.0~), systemd-sysv
  - provides: proxmox-virtual-environment

  </details>

- **proxmox-vma-to-pbs**
  - Latest version: 0.1.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: This allows importing VMA based backups into PBS remotes.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-vma-to-pbs`
  - Install (apt): `sudo apt install proxmox-vma-to-pbs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.39), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libsystemd0, libuuid1 (>= 2.16), libzstd1 (>= 1.5.5)

  </details>

- **proxmox-vma-to-pbs-dbgsym**
  - Latest version: 0.1.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for proxmox-vma-to-pbs
  - Install: `sudo apt-get install proxmox-vma-to-pbs-dbgsym`
  - Install (apt): `sudo apt install proxmox-vma-to-pbs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-vma-to-pbs (= 0.1.0)

  </details>

- **proxmox-websocket-tunnel**
  - Latest version: 1.0.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox websocket tunneling helper
  - Install: `sudo apt-get install proxmox-websocket-tunnel`
  - Install (apt): `sudo apt install proxmox-websocket-tunnel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libzstd1 (>= 1.5.5)

  </details>

- **proxmox-widget-toolkit**
  - Latest version: 5.1.5
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Core Widgets and ExtJS Helper Classes for Proxmox Web UIs
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-widget-toolkit`
  - Install (apt): `sudo apt install proxmox-widget-toolkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>

- **pve-cluster**
  - Latest version: 9.0.7
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: "pmxcfs" distributed cluster filesystem for Proxmox Virtual Environment.
  - Install: `sudo apt-get install pve-cluster`
  - Install (apt): `sudo apt install pve-cluster`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: corosync (>= 2.3.4-1), fuse, libc6 (>= 2.34), libcmap4 (>= 3.1.9), libcorosync-common4 (>= 1.99.9), libcpg4 (>= 3.1.9), libfuse2 (>= 2.9.2-4), libfuse2t64 (>= 2.9.2), libglib2.0-0 (>= 2.42.1-1), libglib2.0-0t64 (>= 2.76.0), libpve-common-perl (>= 6.0-7~), libqb100 (>= 2.0.1), libquorum5 (>= 3.1.9), librrd8t64 (>= 1.4~rc2), libsqlite3-0 (>= 3.20.0), perl (>= 5.40.1-5), perl (>= 5.40.1-6), perlapi-5.40.1, sqlite3, systemd
  - breaks: libpve-access-control (<= 6.0-3), libpve-guest-common-perl (<= 3.0-2), libpve-storage-perl (<= 6.0-9), pve-container (<= 3.0-10), pve-ha-manager (<= 3.0-3), pve-manager (<= 6.0-12), qemu-server (<= 6.0-13)

  </details>

- **pve-cluster-dbgsym**
  - Latest version: 9.0.7
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-cluster
  - Install: `sudo apt-get install pve-cluster-dbgsym`
  - Install (apt): `sudo apt install pve-cluster-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-cluster (= 9.0.2), pve-cluster (= 9.0.3), pve-cluster (= 9.0.4), pve-cluster (= 9.0.5), pve-cluster (= 9.0.6), pve-cluster (= 9.0.7)

  </details>

- **pve-container**
  - Latest version: 6.0.18
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE Container management tool
  - Install: `sudo apt-get install pve-container`
  - Install (apt): `sudo apt install pve-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: binutils, file, isc-dhcp-client, libpve-access-control (>= 8.0.0~), libpve-cluster-perl, libpve-common-perl (>= 8.1.0), libpve-guest-common-perl (>= 5.1.3), libpve-rs-perl (>= 0.11~), libpve-storage-perl (>= 8.3.5), lxc-pve, lxc-pve (>= 6.0.5-3~~), perl:any, proxmox-backup-client (>= 3.2.3-1), pve-cluster (>= 4.0-8), pve-firewall (>= 6.0.1), pve-ha-manager (>= 3.0-9), pve-ha-manager (>= 5.0.3), pve-lxc-syscalld, xz-utils
  - recommends: libpve-network-perl (>= 0.8.3)

  </details>

- **pve-doc-generator**
  - Latest version: 9.1.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE Documentation helpers
  - Install: `sudo apt-get install pve-doc-generator`
  - Install (apt): `sudo apt install pve-doc-generator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: asciidoc-base, libpve-common-perl, perl:any, source-highlight, xmlto

  </details>

- **pve-docs**
  - Latest version: 9.1.2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE Documentation
  - Install: `sudo apt-get install pve-docs`
  - Install (apt): `sudo apt install pve-docs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional
  - depends: libjs-extjs, perl:any

  </details>

- **pve-edk2-firmware**
  - Latest version: 4.2025.05-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: edk2 based UEFI firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware`
  - Install (apt): `sudo apt install pve-edk2-firmware`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: pve-edk2-firmware-legacy, pve-edk2-firmware-ovmf

  </details>

- **pve-edk2-firmware-aarch64**
  - Latest version: 4.2025.05-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: edk2 based ARM64 UEFI firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware-aarch64`
  - Install (apt): `sudo apt install pve-edk2-firmware-aarch64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - breaks: pve-edk2-firmware (<< 4.2023.08-1)

  </details>

- **pve-edk2-firmware-legacy**
  - Latest version: 4.2025.05-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: edk2 based legacy 2MB UEFI firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware-legacy`
  - Install (apt): `sudo apt install pve-edk2-firmware-legacy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - breaks: pve-edk2-firmware (<< 4.2023.08-1)

  </details>

- **pve-edk2-firmware-ovmf**
  - Latest version: 4.2025.05-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: edk2 based UEFI firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware-ovmf`
  - Install (apt): `sudo apt install pve-edk2-firmware-ovmf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - breaks: pve-edk2-firmware (<< 4.2023.08-1)

  </details>

- **pve-edk2-firmware-riscv**
  - Latest version: 4.2025.05-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: edk2 based RISC-V UEFI firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware-riscv`
  - Install (apt): `sudo apt install pve-edk2-firmware-riscv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **pve-esxi-import-tools**
  - Latest version: 1.0.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Tools to allow importing VMs from ESXi hosts
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-esxi-import-tools`
  - Install (apt): `sudo apt install pve-esxi-import-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libfuse3-4 (>= 3.17.2), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libzstd1 (>= 1.5.5), python3, python3-pyvmomi

  </details>

- **pve-esxi-import-tools-dbgsym**
  - Latest version: 1.0.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-esxi-import-tools
  - Install: `sudo apt-get install pve-esxi-import-tools-dbgsym`
  - Install (apt): `sudo apt install pve-esxi-import-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-esxi-import-tools (= 1.0.0), pve-esxi-import-tools (= 1.0.1)

  </details>

- **pve-firewall**
  - Latest version: 6.0.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE Firewall
  - Install: `sudo apt-get install pve-firewall`
  - Install (apt): `sudo apt install pve-firewall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: conntrack, ebtables, ipset, iptables, libc6 (>= 2.34), libglib2.0-0t64 (>= 2.32.0), libnetfilter-conntrack3 (>= 1.0.1), libnetfilter-log1 (>= 0.0.15), libnfnetlink0 (>= 1.0.2), libpve-access-control, libpve-cluster-perl, libpve-common-perl (>= 9.0.2), libpve-network-perl (>= 0.9.9~), libpve-rs-perl (>= 0.8.13), perl:any, pve-cluster (>= 6.1-6)
  - conflicts: ulogd

  </details>

- **pve-firewall-dbgsym**
  - Latest version: 6.0.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-firewall
  - Install: `sudo apt-get install pve-firewall-dbgsym`
  - Install (apt): `sudo apt install pve-firewall-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-firewall (= 6.0.2), pve-firewall (= 6.0.3), pve-firewall (= 6.0.4)

  </details>

- **pve-firmware**
  - Latest version: 3.17-2
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Binary firmware code for the pve-kernel
  - Homepage: http://www.proxmox.com
  - Install: `sudo apt-get install pve-firmware`
  - Install (apt): `sudo apt install pve-firmware`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - suggests: linux-image
  - conflicts: firmware-amd-graphics, firmware-ath9k-htc, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity
  - replaces: firmware-amd-graphics, firmware-ath9k-htc, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity

  </details>

- **pve-ha-manager**
  - Latest version: 5.1.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE HA Manager
  - Install: `sudo apt-get install pve-ha-manager`
  - Install (apt): `sudo apt install pve-ha-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.34), libjson-perl, libpve-cluster-perl, libpve-common-perl, libpve-notify-perl (>= 8.1.0), libpve-rs-perl (>= 0.11.3), libpve-rs-perl (>= 0.7.3), perl:any, pve-cluster (>= 3.0-17), pve-container (>= 5.0.1), qemu-server (>= 8.0.2), systemd
  - conflicts: watchdog

  </details>

- **pve-ha-manager-dbgsym**
  - Latest version: 5.1.0
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-ha-manager
  - Install: `sudo apt-get install pve-ha-manager-dbgsym`
  - Install (apt): `sudo apt install pve-ha-manager-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-ha-manager (= 5.0.1), pve-ha-manager (= 5.0.2), pve-ha-manager (= 5.0.3), pve-ha-manager (= 5.0.4), pve-ha-manager (= 5.0.5), pve-ha-manager (= 5.0.6), pve-ha-manager (= 5.0.7), pve-ha-manager (= 5.0.8), pve-ha-manager (= 5.1.0)

  </details>

- **pve-ha-simulator**
  - Latest version: 5.1.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE HA Simulator
  - Install: `sudo apt-get install pve-ha-simulator`
  - Install (apt): `sudo apt install pve-ha-simulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libclone-perl, libdevel-cycle-perl, libencode-locale-perl, libfilesys-df-perl, libglib-perl, libgtk3-perl, libhttp-message-perl, libjson-perl, libnet-ip-perl, libstring-shellquote-perl, liburi-perl, perl:any

  </details>

- **pve-headers**
  - Latest version: 9.1.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Default Proxmox Kernel Headers (transitional package)
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-headers`
  - Install (apt): `sudo apt install pve-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: oldlibs
  - Priority: optional
  - depends: proxmox-default-headers

  </details>

- **pve-i18n**
  - Latest version: 3.6.6
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Internationalization support for Proxmox VE
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-i18n`
  - Install (apt): `sudo apt install pve-i18n`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional

  </details>

- **pve-lxc-syscalld**
  - Latest version: 2.0.2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: PVE LXC syscall daemon
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-lxc-syscalld`
  - Install (apt): `sudo apt install pve-lxc-syscalld`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libsystemd0
  - breaks: pve-container (<< 6.0.5)

  </details>

- **pve-lxc-syscalld-dbgsym**
  - Latest version: 2.0.2
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-lxc-syscalld
  - Install: `sudo apt-get install pve-lxc-syscalld-dbgsym`
  - Install (apt): `sudo apt install pve-lxc-syscalld-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-lxc-syscalld (= 2.0.0), pve-lxc-syscalld (= 2.0.1), pve-lxc-syscalld (= 2.0.2)

  </details>

- **pve-manager**
  - Latest version: 9.1.4
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Virtual Environment Management Tools
  - Install: `sudo apt-get install pve-manager`
  - Install (apt): `sudo apt install pve-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apt (>= 1.5~), ca-certificates, cstream, dtach, fonts-font-awesome, fonts-font-logos, gdisk, hdparm, ifupdown2 (>= 3.0) | ifenslave (>= 2.6), libapt-pkg-perl, libcrypt-ssleay-perl, libfile-readbackwards-perl, libfilesys-df-perl, libjs-extjs (>= 7.0.0), libjs-qrcodejs (>= 1.20201119), libjs-sencha-touch, libjson-perl, liblwp-protocol-https-perl, libnet-dns-perl, libproxmox-acme-perl, libproxmox-acme-plugins, libproxmox-rs-perl (>= 0.4~), libpve-access-control (>= 9.0.1), libpve-access-control (>= 9.0.3), libpve-access-control (>= 9.0.4), libpve-apiclient-perl (>= 3.4.2), libpve-cluster-api-perl (>= 7.0-5), libpve-cluster-perl (>= 8.1.0), libpve-cluster-perl (>= 9.0.7), libpve-common-perl (>= 8.2.6), libpve-common-perl (>= 9.0.15), libpve-common-perl (>= 9.0.8), libpve-common-perl (>= 9.1.1), libpve-guest-common-perl (>= 5.1.4), libpve-http-server-perl (>= 5.1.1), libpve-http-server-perl (>= 6.0.3), libpve-network-api-perl (>= 1.1~), libpve-network-api-perl (>= 1.2~), libpve-network-perl (>= 1.1~), libpve-network-perl (>= 1.2~), libpve-notify-perl (>= 8.1.0), libpve-rs-perl (>= 0.10.4), libpve-storage-perl (>= 9.0.5), librados2-perl (>= 1.3-1), libtemplate-perl, libterm-readline-gnu-perl, liburi-perl, libuuid-perl, libwww-perl (>= 6.04-1), logrotate, lzop, novnc-pve (>= 1.2.0-2~), pciutils, perl (>= 5.10.0-19), perl:any, postfix | mail-transport-agent, proxmox-mail-forward, proxmox-mini-journalreader (>= 1.3-1), proxmox-rrd-migration-tool (>= 1.0.0), proxmox-termproxy (>= 2.0.3), proxmox-widget-toolkit (>= 5.0.2), proxmox-widget-toolkit (>= 5.1.1), pve-cluster (>= 9.0.1), pve-container (>= 5.2.5), pve-docs (>= 8.2.4), pve-docs (>= 9.0.5), pve-firewall, pve-ha-manager, pve-ha-manager (>= 5.0.2), pve-ha-manager (>= 5.0.3), pve-i18n (>= 3.2.0~), pve-xtermjs (>= 4.7.0-1), pve-yew-mobile-gui (>= 0.5.1), qemu-server (>= 9.0.10), qemu-server (>= 9.0.2), qemu-server (>= 9.0.26), qemu-server (>= 9.0.28), rsync, spiceterm, sqv, systemd, vncterm, wget, zstd
  - recommends: proxmox-firewall, proxmox-offline-mirror-helper, pve-nvidia-vgpu-helper, pve-yew-mobile-gui (>= 0.4.0), skopeo
  - conflicts: vlan, vzdump
  - breaks: libpve-network-perl (<< 0.5-1)
  - replaces: vlan, vzdump
  - provides: vlan, vzdump

  </details>

- **pve-nvidia-vgpu-helper**
  - Latest version: 0.3.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox Nvidia vGPU helper script and systemd service
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-nvidia-vgpu-helper`
  - Install (apt): `sudo apt install pve-nvidia-vgpu-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libapt-pkg-perl, libdpkg-perl

  </details>

- **pve-qemu-kvm**
  - Latest version: 10.1.2-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Full virtualization on x86 hardware
  - Install: `sudo apt-get install pve-qemu-kvm`
  - Install (apt): `sudo apt install pve-qemu-kvm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (>= 0.48), fuse3, iproute2, libaio1t64 (>= 0.3.93), libasound2t64 (>= 1.0.16), libc6 (>= 2.38), libcap-ng0 (>= 0.7.9), libcurl3t64-gnutls (>= 7.16.3), libepoxy0 (>= 1.3), libepoxy0 (>= 1.5.2), libfdt1 (>= 1.7.2), libfuse3-4 (>= 3.17.2), libgbm1 (>= 12.0.0~0), libglib2.0-0t64 (>= 2.83.0), libgnutls30t64 (>= 3.8.6), libiscsi7 (>= 1.18.0), libjpeg62-turbo (>= 1.3.1), libnuma1 (>= 2.0.15), libpixman-1-0 (>= 0.30.0), libproxmox-backup-qemu0 (>= 1.3.0), libpulse0 (>= 0.99.1), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librbd1 (>= 19.2.2), librbd1 (>= 19.2.3), libseccomp2 (>= 2.1.0), libselinux1 (>= 3.1~), libslirp0 (>= 4.7.0), libsndio7.0 (>= 1.8.1), libspice-server1 (>= 0.14.2), libsystemd0, libudev1 (>= 183), liburing2 (>= 2.3), libusb-1.0-0 (>= 2:1.0.23~), libusbredirparser1 (>= 0.6-2), libusbredirparser1t64 (>= 0.8.0), libuuid1 (>= 2.16), libvirglrenderer1 (>= 1.0.0), libxkbcommon0 (>= 0.5.0), libzstd1 (>= 1.5.5), zlib1g (>= 1:1.2.0)
  - recommends: numactl
  - suggests: libgl1
  - conflicts: kvm, pve-kvm, pve-qemu-kvm-2.6.18, qemu, qemu-kvm, qemu-system-arm, qemu-system-common, qemu-system-data, qemu-system-x86, qemu-utils
  - breaks: qemu-server (<= 8.0.6)
  - replaces: pve-kvm, pve-qemu-kvm-2.6.18, qemu-system-arm, qemu-system-x86, qemu-utils
  - provides: qemu-system-arm, qemu-system-x86, qemu-utils

  </details>

- **pve-qemu-kvm-dbgsym**
  - Latest version: 10.1.2-5
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for pve-qemu-kvm
  - Install: `sudo apt-get install pve-qemu-kvm-dbgsym`
  - Install (apt): `sudo apt install pve-qemu-kvm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-qemu-kvm (= 10.0.2-4), pve-qemu-kvm (= 10.1.0-1), pve-qemu-kvm (= 10.1.2-1), pve-qemu-kvm (= 10.1.2-2), pve-qemu-kvm (= 10.1.2-3), pve-qemu-kvm (= 10.1.2-4), pve-qemu-kvm (= 10.1.2-5)
  - breaks: pve-qemu-kvm-dbg (<<8.0.0-1~)
  - replaces: pve-qemu-kvm-dbg (<<8.0.0-1~)

  </details>

- **pve-xtermjs**
  - Latest version: 5.5.0-3
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: HTML/TypeScript based fully-featured terminal for Proxmox projects
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-xtermjs`
  - Install (apt): `sudo apt install pve-xtermjs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-termproxy

  </details>

- **pve-yew-mobile-gui**
  - Latest version: 0.6.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Mobile Web UI to for the Proxmox Virtual Environment
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-yew-mobile-gui`
  - Install (apt): `sudo apt install pve-yew-mobile-gui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: fonts-font-awesome, pve-yew-mobile-i18n
  - recommends: proxmox-ve

  </details>

- **pve-yew-mobile-i18n**
  - Latest version: 3.6.6
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Internationalization support for Proxmox Virtual Environment (yew PWA)
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-yew-mobile-i18n`
  - Install (apt): `sudo apt install pve-yew-mobile-i18n`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional

  </details>

- **pve-zsync**
  - Latest version: 2.4.0
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Proxmox VE ZFS syncing tool
  - Homepage: https://pve.proxmox.com
  - Install: `sudo apt-get install pve-zsync`
  - Install (apt): `sudo apt install pve-zsync`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libjson-perl, libstring-shellquote-perl, perl:any

  </details>

- **python3-apparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: AppArmor Python3 utility library
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install python3-apparmor`
  - Install (apt): `sudo apt install python3-apparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: python3-libapparmor (>= 4.1.1), python3:any

  </details>

- **python3-ceph**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Meta-package for python libraries for the Ceph libraries
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-ceph`
  - Install (apt): `sudo apt install python3-ceph`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: python3-cephfs (= 19.2.2-pve2), python3-cephfs (= 19.2.3-pve1), python3-rados (= 19.2.2-pve2), python3-rados (= 19.2.3-pve1), python3-rbd (= 19.2.2-pve2), python3-rbd (= 19.2.3-pve1), python3-rgw (= 19.2.2-pve2), python3-rgw (= 19.2.3-pve1)

  </details>

- **python3-ceph-argparse**
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Python 3 libraries for the Ceph libcephfs library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-cephfs`
  - Install (apt): `sudo apt install python3-cephfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libcephfs2 (= 19.2.2-pve2), libcephfs2 (= 19.2.3-pve1), python3 (<< 3.14), python3 (>= 3.13~), python3-ceph-argparse (= 19.2.2-pve2), python3-ceph-argparse (= 19.2.3-pve1), python3-rados (= 19.2.2-pve2), python3-rados (= 19.2.3-pve1)

  </details>

- **python3-libapparmor**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: AppArmor library Python3 bindings
  - Homepage: https://apparmor.net/
  - Install: `sudo apt-get install python3-libapparmor`
  - Install (apt): `sudo apt install python3-libapparmor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: libapparmor1 (>= 2.10.95), libc6 (>= 2.14), python3 (<< 3.14), python3 (>= 3.13~), python3:any

  </details>

- **python3-libapparmor-dbgsym**
  - Latest version: 4.1.1-pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for python3-libapparmor
  - Install: `sudo apt-get install python3-libapparmor-dbgsym`
  - Install (apt): `sudo apt install python3-libapparmor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian AppArmor Team <pkg-apparmor-team@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: python3-libapparmor (= 4.1.1-pmx1)

  </details>

- **python3-pyzfs**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: wrapper for libzfs_core C library
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install python3-pyzfs`
  - Install (apt): `sudo apt install python3-pyzfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/python
  - Priority: optional
  - depends: python3-cffi, python3-cffi-backend-api-max (>= 9729), python3-cffi-backend-api-min (<= 9729), python3:any, zfsutils-linux (= 2.3.3-pve1), zfsutils-linux (= 2.3.4-pve1), zfsutils-linux (= 2.4.0-pve1)

  </details>

- **python3-rados**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Python 3 libraries for the Ceph librbd library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-rbd`
  - Install (apt): `sudo apt install python3-rbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), librbd1 (>= 19.2.2-pve2), librbd1 (>= 19.2.3-pve1), python3 (<< 3.14), python3 (>= 3.13~)

  </details>

- **python3-rgw**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Python 3 libraries for the Ceph librgw library
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install python3-rgw`
  - Install (apt): `sudo apt install python3-rgw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), librgw2 (>= 19.2.2-pve2), librgw2 (>= 19.2.3-pve1), python3 (<< 3.14), python3 (>= 3.13~), python3-rados (= 19.2.2-pve2), python3-rados (= 19.2.3-pve1)

  </details>

- **python3-rrdtool**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Python3 interface)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install python3-rrdtool`
  - Install (apt): `sudo apt install python3-rrdtool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.38), librrd8t64 (>= 1.7.0), python3 (<< 3.14), python3 (>= 3.13~)

  </details>

- **python3-rrdtool-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for python3-rrdtool
  - Install: `sudo apt-get install python3-rrdtool-dbgsym`
  - Install (apt): `sudo apt install python3-rrdtool-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: python3-rrdtool (= 1.7.2-4.2+pve2), python3-rrdtool (= 1.7.2-4.2+pve3), python3-rrdtool (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-4~)
  - replaces: rrdtool-dbg (<< 1.7.2-4~)

  </details>

- **pyzfs-doc**
  - Latest version: 2.4.0-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: wrapper for libzfs_core C library (documentation)
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install pyzfs-doc`
  - Install (apt): `sudo apt install pyzfs-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 8.1), sphinx (= 8.1.3-5)
  - recommends: python3-pyzfs

  </details>


### <a id="packages-Q"></a>Q

- **qemu-server**
  - Latest version: 9.1.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Qemu Server Tools
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install qemu-server`
  - Install (apt): `sudo apt install qemu-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: conntrack, dbus, genisoimage, libc6 (>= 2.38), libclass-methodmaker-perl, libglib2.0-0t64 (>= 2.12.0), libio-multiplex-perl, libjson-c5 (>= 0.15), libjson-perl, libjson-xs-perl, libnet-dbus-perl, libnet-ssleay-perl, libpve-access-control (>= 9.0.2~), libpve-apiclient-perl, libpve-cluster-perl, libpve-common-perl (>= 9.0.13), libpve-common-perl (>= 9.0.3), libpve-common-perl (>= 9.1.2), libpve-common-perl (>= 9.1.6), libpve-guest-common-perl (>= 5.2.2), libpve-storage-perl (>= 9.0.16), libpve-storage-perl (>= 9.0.4), libpve-storage-perl (>= 9.0.7), libterm-readline-gnu-perl, liburi-perl, libuuid-perl, perl (>= 5.10.0-19), perl:any, proxmox-websocket-tunnel, pve-cluster, pve-edk2-firmware-legacy | pve-edk2-firmware (<< 4~), pve-edk2-firmware-ovmf (>= 4.2025.02-3), pve-edk2-firmware-ovmf (>= 4.2025.05-2), pve-firewall (>= 6.0.1), pve-firewall (>= 6.0.3), pve-ha-manager (>= 3.0-9), pve-ha-manager (>= 5.0.3), pve-qemu-kvm (>= 7.1~), python3-virt-firmware, socat, swtpm, swtpm-tools
  - recommends: libpve-network-perl (>= 0.8.3), proxmox-backup-file-restore (>= 2.1.9-2), virtiofsd
  - suggests: proxmox-firewall (>= 1.1.1), pve-edk2-firmware-aarch64, pve-edk2-firmware-riscv
  - breaks: pve-ha-manager (<< 4.0.1), pve-manager (<= 6.0-13)

  </details>

- **qemu-server-dbgsym**
  - Latest version: 9.1.4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for qemu-server
  - Install: `sudo apt-get install qemu-server-dbgsym`
  - Install (apt): `sudo apt install qemu-server-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: qemu-server (= 9.0.10), qemu-server (= 9.0.11), qemu-server (= 9.0.12), qemu-server (= 9.0.13), qemu-server (= 9.0.14), qemu-server (= 9.0.15), qemu-server (= 9.0.16), qemu-server (= 9.0.17), qemu-server (= 9.0.18), qemu-server (= 9.0.19), qemu-server (= 9.0.20), qemu-server (= 9.0.21), qemu-server (= 9.0.22), qemu-server (= 9.0.23), qemu-server (= 9.0.24), qemu-server (= 9.0.25), qemu-server (= 9.0.26), qemu-server (= 9.0.27), qemu-server (= 9.0.28), qemu-server (= 9.0.29), qemu-server (= 9.0.30), qemu-server (= 9.0.4), qemu-server (= 9.0.5), qemu-server (= 9.0.6), qemu-server (= 9.0.7), qemu-server (= 9.0.8), qemu-server (= 9.0.9), qemu-server (= 9.1.0), qemu-server (= 9.1.1), qemu-server (= 9.1.2), qemu-server (= 9.1.3), qemu-server (= 9.1.4)

  </details>


### <a id="packages-R"></a>R

- **rados-objclass-dev**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: RADOS object class development kit.
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rados-objclass-dev`
  - Install (apt): `sudo apt install rados-objclass-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: libdevel
  - Priority: optional
  - depends: librados-dev (= 19.2.2-pve2), librados-dev (= 19.2.3-pve1)

  </details>

- **radosgw**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: REST gateway for RADOS distributed object store
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install radosgw`
  - Install (apt): `sudo apt install radosgw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve2), ceph-common (= 19.2.3-pve1), libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libicu76 (>= 76.1-1~), libldap2 (>= 2.6.2), liblmdb0 (>= 0.9.7), liblua5.3-0, liblz4-1 (>= 1.8.0), librabbitmq4 (>= 0.10.0), librados2 (>= 19.2.2), librados2 (>= 19.2.3), librdkafka1 (>= 0.9.2), librgw2 (= 19.2.2-pve2), librgw2 (= 19.2.3-pve1), libsnappy1v5 (>= 1.2.2), libsqlite3-0 (>= 3.14.0), libssl3t64 (>= 3.4.0), libstdc++6 (>= 14), libthrift-0.19.0t64 (>= 0.19.0-1~), media-types | mime-support, zlib1g (>= 1:1.2.0)
  - recommends: ntp | time-daemon
  - suggests: gawk

  </details>

- **rbd-fuse**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Ceph daemon for mirroring RBD images
  - Homepage: http://ceph.com/
  - Install: `sudo apt-get install rbd-mirror`
  - Install (apt): `sudo apt install rbd-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ceph Maintainers <ceph-maintainers@ceph.io>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (= 19.2.2-pve2), ceph-common (= 19.2.3-pve1), libc6 (>= 2.38), libcryptsetup12 (>= 2:2.4), libgcc-s1 (>= 3.0), libgoogle-perftools4t64 (>= 2.16), libnbd0 (>= 1.0.0), librados2 (= 19.2.2-pve2), librados2 (= 19.2.3-pve1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14)

  </details>

- **rbd-nbd**
  - Latest version: 19.2.3-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
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

- **rrdcached**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: data caching daemon for RRDtool
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install rrdcached`
  - Install (apt): `sudo apt install rrdcached`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libglib2.0-0t64 (>= 2.12.0), librrd8t64 (>= 1.7.0)

  </details>

- **rrdcached-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for rrdcached
  - Install: `sudo apt-get install rrdcached-dbgsym`
  - Install (apt): `sudo apt install rrdcached-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: rrdcached (= 1.7.2-4.2+pve1), rrdcached (= 1.7.2-4.2+pve2), rrdcached (= 1.7.2-4.2+pve3), rrdcached (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **rrdtool**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (programs)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install rrdtool`
  - Install (apt): `sudo apt install rrdtool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libglib2.0-0t64 (>= 2.28.0), librrd8t64 (>= 1.7.0)
  - suggests: librrds-perl

  </details>

- **rrdtool-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for rrdtool
  - Install: `sudo apt-get install rrdtool-dbgsym`
  - Install (apt): `sudo apt install rrdtool-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: rrdtool (= 1.7.2-4.2+pve2), rrdtool (= 1.7.2-4.2+pve3), rrdtool (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **rrdtool-tcl**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Tcl interface)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install rrdtool-tcl`
  - Install (apt): `sudo apt install rrdtool-tcl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), librrd8t64 (>= 1.4~rc2), tcl (>= 8.6.0-2)

  </details>

- **rrdtool-tcl-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for rrdtool-tcl
  - Install: `sudo apt-get install rrdtool-tcl-dbgsym`
  - Install (apt): `sudo apt install rrdtool-tcl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: rrdtool-tcl (= 1.7.2-4.2+pve2), rrdtool-tcl (= 1.7.2-4.2+pve3), rrdtool-tcl (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>

- **ruby-rrd**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: time-series data storage and display system (Ruby interfaces)
  - Homepage: https://oss.oetiker.ch/rrdtool/
  - Install: `sudo apt-get install ruby-rrd`
  - Install (apt): `sudo apt install ruby-rrd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: ruby
  - Priority: optional
  - depends: libc6 (>= 2.4), librrd8t64 (>= 1.4~rc2), libruby (<< 1:3.4~), libruby (>= 1:3.3~0), libruby3.3 (>= 3.3.0~preview1)

  </details>

- **ruby-rrd-dbgsym**
  - Latest version: 1.7.2-4.2+pve4
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for ruby-rrd
  - Install: `sudo apt-get install ruby-rrd-dbgsym`
  - Install (apt): `sudo apt install ruby-rrd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian RRDtool Team <team+rrdtool@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: ruby-rrd (= 1.7.2-4.2+pve2), ruby-rrd (= 1.7.2-4.2+pve3), ruby-rrd (= 1.7.2-4.2+pve4)
  - breaks: rrdtool-dbg (<< 1.7.2-2~)
  - replaces: rrdtool-dbg (<< 1.7.2-2~)

  </details>


### <a id="packages-S"></a>S

- **sg3-utils**
  - Latest version: 1.48-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: utilities for devices using the SCSI command set
  - Homepage: https://sg.danny.cz/sg/
  - Install: `sudo apt-get install sg3-utils`
  - Install (apt): `sudo apt install sg3-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libsgutils2-1.48 (>= 1.48)
  - conflicts: cdwrite, sg-utils
  - replaces: sg-utils

  </details>

- **sg3-utils-dbgsym**
  - Latest version: 1.48-2+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for sg3-utils
  - Install: `sudo apt-get install sg3-utils-dbgsym`
  - Install (apt): `sudo apt install sg3-utils-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: debug
  - Priority: optional
  - depends: sg3-utils (= 1.48-2+pmx1)

  </details>

- **sg3-utils-udev**
  - Latest version: 1.48-2+pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: utilities for devices using the SCSI command set (udev rules)
  - Homepage: https://sg.danny.cz/sg/
  - Install: `sudo apt-get install sg3-utils-udev`
  - Install (apt): `sudo apt install sg3-utils-udev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritesh Raj Sarraf <rrs@debian.org>
  - Section: admin
  - Priority: optional
  - depends: initramfs-tools | linux-initramfs-tool, sg3-utils

  </details>

- **shim-helpers-amd64-signed**
  - Latest version: 1+15.8+1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: boot loader to chain-load signed boot loaders (signed by Proxmox)
  - Install: `sudo apt-get install shim-helpers-amd64-signed`
  - Install (apt): `sudo apt install shim-helpers-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: shim-unsigned (>= 15.8-1+pmx1)
  - conflicts: shim (<< 15+1533136590.3beb971-3~)
  - breaks: shim-signed (<< 1.29)
  - replaces: shim (<< 15+1533136590.3beb971-3~), shim-signed (<< 1.29)

  </details>

- **shim-signed**
  - Latest version: 1.47+pmx1+15.8-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Secure Boot chain-loading bootloader (Microsoft-signed binary)
  - Install: `sudo apt-get install shim-signed`
  - Install (apt): `sudo apt install shim-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: utils
  - Priority: optional
  - depends: grub-efi-amd64-bin, grub2-common (>= 2.06-13), shim-helpers-amd64-signed (>= 1+15.8+1+pmx1), shim-signed-common (>= 1.46+pmx2), shim-signed-common (>= 1.47+pmx1)

  </details>

- **shim-signed-common**
  - Latest version: 1.47+pmx1+15.8-1+pmx1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: Secure Boot chain-loading bootloader (common helper scripts)
  - Install: `sudo apt-get install shim-signed-common`
  - Install (apt): `sudo apt install shim-signed-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: utils
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, kmod, mokutil, openssl
  - breaks: shim-signed (<< 1.32+15+1533136590.3beb971-5)
  - replaces: shim-signed (<< 1.32+15+1533136590.3beb971-5)

  </details>

- **shim-unsigned**
  - Latest version: 15.8-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: boot loader to chain-load signed boot loaders under Secure Boot
  - Install: `sudo apt-get install shim-unsigned`
  - Install (apt): `sudo apt install shim-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - conflicts: shim (<< 15+1533136590.3beb971-3~)
  - replaces: shim (<< 15+1533136590.3beb971-3~)

  </details>

- **smartmontools**
  - Latest version: 7.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: control and monitor storage systems using S.M.A.R.T.
  - Homepage: https://www.smartmontools.org/
  - Install: `sudo apt-get install smartmontools`
  - Install (apt): `sudo apt install smartmontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dmitry Smirnov <onlyjob@debian.org>
  - Section: utils
  - Priority: optional
  - depends: debianutils (>= 2.2), libc6 (>= 2.38), libcap-ng0 (>= 0.7.9), libgcc-s1 (>= 3.0), libselinux1 (>= 3.1~), libstdc++6 (>= 11), libsystemd0, sysvinit-utils (>= 3.05-4~)
  - suggests: curl | wget | lynx, gpg, gsmartcontrol, mailx | mailutils, smart-notifier
  - conflicts: smartsuite, ucsc-smartsuite
  - breaks: smart-notifier (<= 0.28-8)

  </details>

- **smartmontools-dbgsym**
  - Latest version: 7.4-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for smartmontools
  - Install: `sudo apt-get install smartmontools-dbgsym`
  - Install (apt): `sudo apt install smartmontools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dmitry Smirnov <onlyjob@debian.org>
  - Section: debug
  - Priority: optional
  - depends: smartmontools (= 7.4-pve1)

  </details>

- **spiceterm**
  - Latest version: 3.4.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: SPICE Terminal Emulator
  - Install: `sudo apt-get install spiceterm`
  - Install (apt): `sudo apt install spiceterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libglib2.0-0t64 (>= 2.32.0), libspice-server1 (>= 0.12.2), pve-qemu-kvm

  </details>

- **spiceterm-dbgsym**
  - Latest version: 3.4.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for spiceterm
  - Install: `sudo apt-get install spiceterm-dbgsym`
  - Install (apt): `sudo apt install spiceterm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: spiceterm (= 3.4.0), spiceterm (= 3.4.1)

  </details>

- **swtpm**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Libtpms-based TPM emulator
  - Install: `sudo apt-get install swtpm`
  - Install (apt): `sudo apt install swtpm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libtpms0, swtpm-libs (= 0.8.0+pve2), swtpm-libs (= 0.8.0+pve3)

  </details>

- **swtpm-dbgsym**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for swtpm
  - Install: `sudo apt-get install swtpm-dbgsym`
  - Install (apt): `sudo apt install swtpm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm (= 0.8.0+pve2), swtpm (= 0.8.0+pve3)

  </details>

- **swtpm-dev**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Include files for the TPM emulator's CUSE interface
  - Install: `sudo apt-get install swtpm-dev`
  - Install (apt): `sudo apt install swtpm-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **swtpm-libs**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Common libraries for TPM emulators
  - Install: `sudo apt-get install swtpm-libs`
  - Install (apt): `sudo apt install swtpm-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.38), libglib2.0-0, libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libtpms0, openssl

  </details>

- **swtpm-libs-dbgsym**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for swtpm-libs
  - Install: `sudo apt-get install swtpm-libs-dbgsym`
  - Install (apt): `sudo apt install swtpm-libs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-libs (= 0.8.0+pve2), swtpm-libs (= 0.8.0+pve3)

  </details>

- **swtpm-tools**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Tools for the TPM emulator
  - Install: `sudo apt-get install swtpm-tools`
  - Install (apt): `sudo apt install swtpm-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: gnutls-bin, libc6 (>= 2.34), libglib2.0-0t64 (>= 2.44.0), libgnutls30t64 (>= 3.7.3), libjson-glib-1.0-0 (>= 1.5.2), libssl3t64 (>= 3.0.0), libtasn1-6 (>= 4.14), swtpm (= 0.8.0+pve2), swtpm (= 0.8.0+pve3)
  - suggests: trousers (>= 0.3.9)

  </details>

- **swtpm-tools-dbgsym**
  - Latest version: 0.8.0+pve3
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for swtpm-tools
  - Install: `sudo apt-get install swtpm-tools-dbgsym`
  - Install (apt): `sudo apt install swtpm-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-tools (= 0.8.0+pve2), swtpm-tools (= 0.8.0+pve3)

  </details>

- **systemd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: system and service manager
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd`
  - Install (apt): `sudo apt install systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - depends: libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libc6 (>= 2.41), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), libssl3t64 (>= 3.4.0), libsystemd0 (= 257.8-1~deb13u1), libsystemd0 (= 257.8-1~deb13u2), libsystemd0 (= 257.9-1~deb13u1), mount
  - preDepends: libc6 (>= 2.38), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1)
  - recommends: default-dbus-system-bus | dbus-system-bus, linux-sysctl-defaults, systemd-cryptsetup, systemd-timesyncd | time-daemon
  - suggests: libtss2-tcti-device0, polkitd, systemd-boot, systemd-container, systemd-homed, systemd-repart, systemd-resolved, systemd-userdbd
  - conflicts: consolekit, libpam-ck-connector, opensysusers (<< 0.7.3-4.1~), systemd-shim
  - breaks: dracut-core (<< 102-2~), less (<< 563), sicherboot (<< 0.1.6)
  - provides: systemd-sysusers (= 257.8-1~deb13u1), systemd-sysusers (= 257.8-1~deb13u2), systemd-sysusers (= 257.9-1~deb13u1), systemd-tmpfiles (= 257.8-1~deb13u1), systemd-tmpfiles (= 257.8-1~deb13u2), systemd-tmpfiles (= 257.9-1~deb13u1)

  </details>

- **systemd-boot**
  - Latest version: 257.9-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: simple UEFI boot manager - integration and services
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-boot`
  - Install (apt): `sudo apt install systemd-boot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd-shared (= 257.7-1), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd (= 257.7-1), systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1), systemd-boot-efi-signed (>= 257.7-1) | systemd-boot-efi (= 257.7-1), systemd-boot-efi-signed (>= 257.8-1~deb13u1) | systemd-boot-efi (= 257.8-1~deb13u1), systemd-boot-efi-signed (>= 257.8-1~deb13u2) | systemd-boot-efi (= 257.8-1~deb13u2), systemd-boot-efi-signed (>= 257.9-1~deb13u1) | systemd-boot-efi (= 257.9-1~deb13u1), systemd-boot-tools (= 257.7-1), systemd-boot-tools (= 257.8-1~deb13u1), systemd-boot-tools (= 257.8-1~deb13u2), systemd-boot-tools (= 257.9-1~deb13u1)
  - recommends: efibootmgr, shim-signed
  - suggests: systemd-ukify
  - conflicts: systemd (<< 256-2~), systemd-boot-efi (<< 256-2~)

  </details>

- **systemd-boot-dbgsym**
  - Latest version: 257.9-1+pmx1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-boot
  - Install: `sudo apt-get install systemd-boot-dbgsym`
  - Install (apt): `sudo apt install systemd-boot-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-boot (= 257.7-1+pmx1), systemd-boot (= 257.7-1+pmx2), systemd-boot (= 257.8-1+pmx1), systemd-boot (= 257.8-1+pmx2), systemd-boot (= 257.9-1+pmx1)

  </details>

- **systemd-boot-efi**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: simple UEFI boot manager - EFI binaries
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-boot-efi`
  - Install (apt): `sudo apt install systemd-boot-efi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - breaks: systemd (<< 251.2-3~)
  - replaces: systemd (<< 251.2-3~)

  </details>

- **systemd-boot-tools**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: simple UEFI boot manager - tools
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-boot-tools`
  - Install (apt): `sudo apt install systemd-boot-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1)
  - breaks: systemd (<< 257.7-2~), systemd-boot (<< 257.4-2~)
  - replaces: systemd (<< 257.7-2~), systemd-boot (<< 257.4-2~)

  </details>

- **systemd-boot-tools-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-boot-tools
  - Install: `sudo apt-get install systemd-boot-tools-dbgsym`
  - Install (apt): `sudo apt install systemd-boot-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-boot-tools (= 257.8-1~deb13u1), systemd-boot-tools (= 257.8-1~deb13u2), systemd-boot-tools (= 257.9-1~deb13u1)

  </details>

- **systemd-container**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: systemd container/nspawn tools
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-container`
  - Install (apt): `sudo apt install systemd-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: default-dbus-system-bus | dbus-system-bus, libacl1 (>= 2.2.23), libbz2-1.0, libc6 (>= 2.38), libcurl4t64 (>= 7.16.3), libfdisk1 (>= 2.33), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd, zlib1g (>= 1:1.1.4)
  - recommends: libnss-mymachines
  - conflicts: systemd (<< 256-2~)

  </details>

- **systemd-container-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-container
  - Install: `sudo apt-get install systemd-container-dbgsym`
  - Install (apt): `sudo apt install systemd-container-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-container (= 257.8-1~deb13u1), systemd-container (= 257.8-1~deb13u2), systemd-container (= 257.9-1~deb13u1)

  </details>

- **systemd-coredump**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: tools for storing and retrieving coredumps
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-coredump`
  - Install (apt): `sudo apt install systemd-coredump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.36), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd
  - conflicts: core-dump-handler
  - replaces: core-dump-handler
  - provides: core-dump-handler

  </details>

- **systemd-coredump-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-coredump
  - Install: `sudo apt-get install systemd-coredump-dbgsym`
  - Install (apt): `sudo apt install systemd-coredump-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-coredump (= 257.8-1~deb13u1), systemd-coredump (= 257.8-1~deb13u2), systemd-coredump (= 257.9-1~deb13u1)

  </details>

- **systemd-cryptsetup**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Provides cryptsetup, integritysetup and veritysetup utilities
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-cryptsetup`
  - Install (apt): `sudo apt install systemd-cryptsetup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcryptsetup12 (>= 2:2.7), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1)
  - conflicts: systemd (<< 256-2~)

  </details>

- **systemd-cryptsetup-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-cryptsetup
  - Install: `sudo apt-get install systemd-cryptsetup-dbgsym`
  - Install (apt): `sudo apt install systemd-cryptsetup-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-cryptsetup (= 257.8-1~deb13u1), systemd-cryptsetup (= 257.8-1~deb13u2), systemd-cryptsetup (= 257.9-1~deb13u1)

  </details>

- **systemd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd
  - Install: `sudo apt-get install systemd-dbgsym`
  - Install (apt): `sudo apt install systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1)

  </details>

- **systemd-dev**
  - Latest version: 257.9-1~deb13u1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: systemd development files
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-dev`
  - Install (apt): `sudo apt install systemd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: devel
  - Priority: optional
  - breaks: systemd (<< 253-2~), systemd-homed (<< 254.1-3~), udev (<< 253-2~)
  - replaces: systemd (<< 253-2~), systemd-homed (<< 254.1-3~), udev (<< 253-2~)

  </details>

- **systemd-homed**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: home area manager
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-homed`
  - Install (apt): `sudo apt install systemd-homed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.24), libc6 (>= 2.39), libcap2 (>= 1:2.10), libfdisk1 (>= 2.33), libpam-runtime, libpam0g (>= 1.1.1), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), polkitd, systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1), systemd-userdbd (= 257.8-1~deb13u1), systemd-userdbd (= 257.8-1~deb13u2), systemd-userdbd (= 257.9-1~deb13u1)
  - preDepends: init-system-helpers (>= 1.64~)
  - suggests: libcryptsetup12, libidn2-0, libp11-kit0, libtss2-rc0t64

  </details>

- **systemd-homed-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-homed
  - Install: `sudo apt-get install systemd-homed-dbgsym`
  - Install (apt): `sudo apt install systemd-homed-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-homed (= 257.8-1~deb13u1), systemd-homed (= 257.8-1~deb13u2), systemd-homed (= 257.9-1~deb13u1)

  </details>

- **systemd-journal-remote**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: tools for sending and receiving remote journal logs
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-journal-remote`
  - Install (apt): `sudo apt install systemd-journal-remote`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcurl4t64 (>= 7.16.2), libmicrohttpd12t64 (>= 0.9.50), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd

  </details>

- **systemd-journal-remote-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-journal-remote
  - Install: `sudo apt-get install systemd-journal-remote-dbgsym`
  - Install (apt): `sudo apt install systemd-journal-remote-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-journal-remote (= 257.8-1~deb13u1), systemd-journal-remote (= 257.8-1~deb13u2), systemd-journal-remote (= 257.9-1~deb13u1)

  </details>

- **systemd-oomd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: userspace out-of-memory (OOM) killer
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-oomd`
  - Install (apt): `sudo apt install systemd-oomd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd | systemd-standalone-sysusers | systemd-sysusers
  - breaks: systemd (<< 250.2-2~)
  - replaces: systemd (<< 250.2-2~)

  </details>

- **systemd-oomd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-oomd
  - Install: `sudo apt-get install systemd-oomd-dbgsym`
  - Install (apt): `sudo apt install systemd-oomd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-oomd (= 257.8-1~deb13u1), systemd-oomd (= 257.8-1~deb13u2), systemd-oomd (= 257.9-1~deb13u1)

  </details>

- **systemd-repart**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: Provides the systemd-repart and systemd-sbsign utilities
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-repart`
  - Install (apt): `sudo apt install systemd-repart`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.24.2), libc6 (>= 2.34), libfdisk1 (>= 2.33), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1)
  - conflicts: systemd (<< 256-2~)

  </details>

- **systemd-repart-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-repart
  - Install: `sudo apt-get install systemd-repart-dbgsym`
  - Install (apt): `sudo apt install systemd-repart-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-repart (= 257.8-1~deb13u1), systemd-repart (= 257.8-1~deb13u2), systemd-repart (= 257.9-1~deb13u1)

  </details>

- **systemd-resolved**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: systemd DNS resolver
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-resolved`
  - Install (apt): `sudo apt install systemd-resolved`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: default-dbus-system-bus | dbus-system-bus, libc6 (>= 2.39), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1)
  - recommends: libidn2-0, libnss-myhostname, libnss-resolve
  - suggests: polkitd
  - conflicts: resolvconf, systemd (<< 257.4-4~)
  - replaces: resolvconf
  - provides: resolvconf

  </details>

- **systemd-resolved-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-resolved
  - Install: `sudo apt-get install systemd-resolved-dbgsym`
  - Install (apt): `sudo apt install systemd-resolved-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-resolved (= 257.8-1~deb13u1), systemd-resolved (= 257.8-1~deb13u2), systemd-resolved (= 257.9-1~deb13u1)

  </details>

- **systemd-standalone-shutdown**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: standalone shutdown binary for use in exitrds
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-standalone-shutdown`
  - Install (apt): `sudo apt install systemd-standalone-shutdown`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcap2 (>= 1:2.10), libmount1 (>= 2.30), libselinux1 (>= 3.1~)
  - suggests: libcryptsetup12, libidn2-0, libtss2-rc0t64
  - conflicts: systemd

  </details>

- **systemd-standalone-shutdown-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-standalone-shutdown
  - Install: `sudo apt-get install systemd-standalone-shutdown-dbgsym`
  - Install (apt): `sudo apt install systemd-standalone-shutdown-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-standalone-shutdown (= 257.8-1~deb13u1), systemd-standalone-shutdown (= 257.8-1~deb13u2), systemd-standalone-shutdown (= 257.9-1~deb13u1)

  </details>

- **systemd-standalone-sysusers**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: standalone sysusers binary for use in non-systemd systems
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-standalone-sysusers`
  - Install (apt): `sudo apt install systemd-standalone-sysusers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libselinux1 (>= 3.1~)
  - suggests: libcryptsetup12, libidn2-0, libtss2-rc0t64
  - conflicts: systemd (<< 249.3-3), systemd-sysusers
  - replaces: systemd (<< 249.3-3), systemd-sysusers
  - provides: systemd-sysusers (= 257.8-1~deb13u1), systemd-sysusers (= 257.8-1~deb13u2), systemd-sysusers (= 257.9-1~deb13u1)

  </details>

- **systemd-standalone-sysusers-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-standalone-sysusers
  - Install: `sudo apt-get install systemd-standalone-sysusers-dbgsym`
  - Install (apt): `sudo apt install systemd-standalone-sysusers-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-standalone-sysusers (= 257.8-1~deb13u1), systemd-standalone-sysusers (= 257.8-1~deb13u2), systemd-standalone-sysusers (= 257.9-1~deb13u1)

  </details>

- **systemd-standalone-tmpfiles**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: standalone tmpfiles binary for use in non-systemd systems
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-standalone-tmpfiles`
  - Install (apt): `sudo apt install systemd-standalone-tmpfiles`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.38), libcap2 (>= 1:2.10), libselinux1 (>= 3.1~)
  - suggests: libcryptsetup12, libidn2-0, libtss2-rc0t64
  - conflicts: systemd (<< 249.3-3), systemd-tmpfiles
  - replaces: systemd (<< 249.3-3), systemd-tmpfiles
  - provides: systemd-tmpfiles (= 257.8-1~deb13u1), systemd-tmpfiles (= 257.8-1~deb13u2), systemd-tmpfiles (= 257.9-1~deb13u1)

  </details>

- **systemd-standalone-tmpfiles-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-standalone-tmpfiles
  - Install: `sudo apt-get install systemd-standalone-tmpfiles-dbgsym`
  - Install (apt): `sudo apt install systemd-standalone-tmpfiles-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-standalone-tmpfiles (= 257.8-1~deb13u1), systemd-standalone-tmpfiles (= 257.8-1~deb13u2), systemd-standalone-tmpfiles (= 257.9-1~deb13u1)

  </details>

- **systemd-sysv**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: system and service manager - SysV compatibility symlinks
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-sysv`
  - Install (apt): `sudo apt install systemd-sysv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - depends: systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1)
  - preDepends: systemd
  - recommends: libnss-systemd, libpam-systemd
  - conflicts: bfh-container (<< 20211009-22~), file-rc, initscripts, insserv, molly-guard (<< 0.8.2~), orphan-sysvinit-scripts, progress-linux-container (<< 20221002-11~), startpar, systemd-shim, sysv-rc, sysvinit-core
  - replaces: sysvinit-core

  </details>

- **systemd-tests**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: tests for systemd
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-tests`
  - Install (apt): `sudo apt install systemd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libblkid1 (>= 2.37.2), libc6 (>= 2.39), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libdbus-1-3 (>= 1.10), libglib2.0-0t64 (>= 2.26.0), libmount1 (>= 2.30), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), libssl3t64 (>= 3.0.0), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), libsystemd0 (= 257.8-1~deb13u1), libsystemd0 (= 257.8-1~deb13u2), libsystemd0 (= 257.9-1~deb13u1), libudev1 (>= 247), python3, python3-psutil, systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1), zlib1g (>= 1:1.1.4)
  - recommends: libzstd1
  - suggests: libgcrypt20, liblz4-1, liblzma5

  </details>

- **systemd-tests-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-tests
  - Install: `sudo apt-get install systemd-tests-dbgsym`
  - Install (apt): `sudo apt install systemd-tests-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-tests (= 257.8-1~deb13u1), systemd-tests (= 257.8-1~deb13u2), systemd-tests (= 257.9-1~deb13u1)

  </details>

- **systemd-timesyncd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: minimalistic service to synchronize local time with NTP servers
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-timesyncd`
  - Install (apt): `sudo apt install systemd-timesyncd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: libc6 (>= 2.34), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd
  - conflicts: systemd (<< 256.2-2~), time-daemon
  - replaces: time-daemon
  - provides: time-daemon

  </details>

- **systemd-timesyncd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-timesyncd
  - Install: `sudo apt-get install systemd-timesyncd-dbgsym`
  - Install (apt): `sudo apt install systemd-timesyncd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-timesyncd (= 257.8-1~deb13u1), systemd-timesyncd (= 257.8-1~deb13u2), systemd-timesyncd (= 257.9-1~deb13u1)

  </details>

- **systemd-ukify**
  - Latest version: 257.9-1~deb13u1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: tool to build Unified Kernel Images
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-ukify`
  - Install (apt): `sudo apt install systemd-ukify`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: python3-pefile, python3-zstandard, python3:any
  - recommends: python3-cryptography, python3-lz4, sbsigntool | pesign, systemd, systemd-boot-efi, systemd-repart
  - conflicts: systemd (<< 255.1-1~)
  - replaces: systemd (<< 255.1-1~)

  </details>

- **systemd-userdbd**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: dynamic user/group manager
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install systemd-userdbd`
  - Install (apt): `sudo apt install systemd-userdbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libnss-systemd (= 257.8-1~deb13u1), libnss-systemd (= 257.8-1~deb13u2), libnss-systemd (= 257.9-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), systemd (= 257.8-1~deb13u1), systemd (= 257.8-1~deb13u2), systemd (= 257.9-1~deb13u1)

  </details>

- **systemd-userdbd-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for systemd-userdbd
  - Install: `sudo apt-get install systemd-userdbd-dbgsym`
  - Install (apt): `sudo apt install systemd-userdbd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-userdbd (= 257.8-1~deb13u1), systemd-userdbd (= 257.8-1~deb13u2), systemd-userdbd (= 257.9-1~deb13u1)

  </details>


### <a id="packages-U"></a>U

- **udev**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: /dev/ and hotplug management daemon
  - Homepage: https://systemd.io
  - Install: `sudo apt-get install udev`
  - Install (apt): `sudo apt install udev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - depends: libblkid1 (>= 2.37.2), libc6 (>= 2.38), libkmod2, libsystemd-shared (= 257.8-1~deb13u1), libsystemd-shared (= 257.8-1~deb13u2), libsystemd-shared (= 257.9-1~deb13u1), libudev1 (= 257.8-1~deb13u1), libudev1 (= 257.8-1~deb13u2), libudev1 (= 257.9-1~deb13u1), systemd | systemd-standalone-sysusers | systemd-sysusers
  - conflicts: systemd (<< 255~rc1-4~)
  - breaks: systemd (<< 257.8-1~deb13u1), systemd (<< 257.8-1~deb13u2), systemd (<< 257.9-1~deb13u1)
  - replaces: systemd (<< 255~rc1-4~)

  </details>

- **udev-dbgsym**
  - Latest version: 257.9-1~deb13u1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for udev
  - Install: `sudo apt-get install udev-dbgsym`
  - Install (apt): `sudo apt install udev-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: udev (= 257.8-1~deb13u1), udev (= 257.8-1~deb13u2), udev (= 257.9-1~deb13u1)

  </details>


### <a id="packages-V"></a>V

- **vncterm**
  - Latest version: 1.9.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: VNC Terminal Emulator
  - Install: `sudo apt-get install vncterm`
  - Install (apt): `sudo apt install vncterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.38), libgnutls-deb0-28 | libgnutls30, libgnutls30t64 (>= 3.8.1), libjpeg62-turbo (>= 1.3.1), libpng16-16, libpng16-16t64 (>= 1.6.46), zlib1g (>= 1:1.2.1)

  </details>

- **vncterm-dbgsym**
  - Latest version: 1.9.1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for vncterm
  - Install: `sudo apt-get install vncterm-dbgsym`
  - Install (apt): `sudo apt install vncterm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: vncterm (= 1.9.0), vncterm (= 1.9.1)

  </details>


### <a id="packages-Z"></a>Z

- **zfs-initramfs**
  - Latest version: 2.4.0-pve1
  - Architectures: all
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS root filesystem capabilities for Linux - initramfs
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-initramfs`
  - Install (apt): `sudo apt install zfs-initramfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: busybox-initramfs | busybox-static | busybox, initramfs-tools, zfsutils-linux (>= 2.3.3-pve1), zfsutils-linux (>= 2.3.4-pve1), zfsutils-linux (>= 2.4.0-pve1)
  - breaks: zfsutils-linux (<= 0.7.11-pve1~bpo1)
  - replaces: zfsutils-linux (<= 0.7.11-pve1~bpo1)

  </details>

- **zfs-test**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS test infrastructure and support scripts
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-test`
  - Install (apt): `sudo apt install zfs-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: acl, attr, bc, fio, ksh, libaio1t64 (>= 0.3.93), libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libnvpair3linux (>= 2.4.0), libudev1 (>= 183), libzfs6linux (>= 2.3.3), libzfs6linux (>= 2.3.4), libzfs7linux (>= 2.4.0), libzpool6linux (>= 2.3.3), libzpool6linux (>= 2.3.4), libzpool7linux (>= 2.4.0), lsscsi, mdadm, parted, python3, python3-pyzfs, sudo, sysstat, zfsutils-linux (>= 2.3.3-pve1), zfsutils-linux (>= 2.3.4-pve1), zfsutils-linux (>= 2.4.0-pve1), zlib1g (>= 1:1.2.3.3)
  - recommends: nfs-kernel-server
  - conflicts: zutils
  - breaks: zfsutils-linux (<= 0.7.9-2)
  - replaces: zfsutils-linux (<= 0.7.9-2)

  </details>

- **zfs-test-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for zfs-test
  - Install: `sudo apt-get install zfs-test-dbgsym`
  - Install (apt): `sudo apt install zfs-test-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-test (= 2.3.3-pve1), zfs-test (= 2.3.4-pve1), zfs-test (= 2.4.0-pve1)

  </details>

- **zfs-zed**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: OpenZFS Event Daemon
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-zed`
  - Install (apt): `sudo apt install zfs-zed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libnvpair3linux (>= 2.4.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.3.3), libuutil3linux (>= 2.3.4), libuutil3linux (>= 2.4.0), libzfs6linux (>= 2.3.3), libzfs6linux (>= 2.3.4), libzfs7linux (>= 2.4.0), zfsutils-linux (>= 2.3.3-pve1), zfsutils-linux (>= 2.3.4-pve1), zfsutils-linux (>= 2.4.0-pve1)
  - recommends: bsd-mailx | mailutils

  </details>

- **zfs-zed-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for zfs-zed
  - Install: `sudo apt-get install zfs-zed-dbgsym`
  - Install (apt): `sudo apt install zfs-zed-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-zed (= 2.3.3-pve1), zfs-zed (= 2.3.4-pve1), zfs-zed (= 2.4.0-pve1)

  </details>

- **zfsutils-linux**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: command-line tools to manage OpenZFS filesystems
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfsutils-linux`
  - Install (apt): `sudo apt install zfsutils-linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.38), libnvpair3linux (>= 2.3.3), libnvpair3linux (>= 2.3.4), libnvpair3linux (>= 2.4.0), libssl3t64 (>= 3.0.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.3.3), libuutil3linux (>= 2.3.4), libuutil3linux (>= 2.4.0), libzfs6linux (>= 2.3.3), libzfs6linux (>= 2.3.4), libzfs7linux (>= 2.4.0), libzpool6linux (>= 2.3.3), libzpool6linux (>= 2.3.4), libzpool7linux (>= 2.4.0), python3
  - recommends: zfs-zed
  - suggests: nfs-kernel-server, samba-common-bin (>= 3.0.23), zfs-initramfs
  - conflicts: nordugrid-arc-client, zfs, zfs-fuse
  - provides: zfsutils

  </details>

- **zfsutils-linux-dbgsym**
  - Latest version: 2.4.0-pve1
  - Architectures: amd64
  - Suite: trixie
  - Components: pve-test
  - Description: debug symbols for zfsutils-linux
  - Install: `sudo apt-get install zfsutils-linux-dbgsym`
  - Install (apt): `sudo apt install zfsutils-linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfsutils-linux (= 2.3.3-pve1), zfsutils-linux (= 2.3.4-pve1), zfsutils-linux (= 2.4.0-pve1)

  </details>


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Test repository; use with caution.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
