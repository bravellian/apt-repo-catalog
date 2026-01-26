# Proxmox VE 7 - test

## Repository
- Repository ID: `proxmox-ve-7-test`
- Base URL: `http://download.proxmox.com/debian/pve`
- Host: `download.proxmox.com`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Suites
- Suite: `bookworm`
  - Components: pve-no-subscription, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `trixie`
  - Components: pve-no-subscription, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `bullseye`
  - Components: pve-no-subscription, pvetest
  - Architectures: (not listed)
  - Observed OSes: debian-11, proxmox-7

## Key reference
- Key ID: `proxmox-release-bullseye`
- Expected fingerprints:
  - 28139A2F830BD68478A1A01FDD4BA3917E23BF59
- Key source URL: https://enterprise.proxmox.com/debian/proxmox-release-bullseye.gpg

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bullseye.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc -o /tmp/proxmox-release-bullseye.asc
gpg --dearmor /tmp/proxmox-release-bullseye.asc
sudo install -m 0644 /tmp/proxmox-release-bullseye.gpg /usr/share/keyrings/proxmox-release-bullseye.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bookworm pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bullseye.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve trixie pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc -o /tmp/proxmox-release-bullseye.asc
gpg --dearmor /tmp/proxmox-release-bullseye.asc
sudo install -m 0644 /tmp/proxmox-release-bullseye.gpg /usr/share/keyrings/proxmox-release-bullseye.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve trixie pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-trixie.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bullseye.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bullseye pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bullseye.asc -o /tmp/proxmox-release-bullseye.asc
gpg --dearmor /tmp/proxmox-release-bullseye.asc
sudo install -m 0644 /tmp/proxmox-release-bullseye.gpg /usr/share/keyrings/proxmox-release-bullseye.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bullseye.gpg] http://download.proxmox.com/debian/pve bullseye pve-no-subscription pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-7-test-bullseye.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (428)</summary>

<div class="packages-nav">
<a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-E">E</a> <a href="#packages-F">F</a> <a href="#packages-I">I</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-Q">Q</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a> <a href="#packages-Z">Z</a>
</div>


### <a id="packages-B"></a>B

- **btrfs-progs**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install btrfs-progs`
  - Install (apt): `sudo apt install btrfs-progs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.17.2), libc6 (>= 2.15), libcom-err2 (>= 1.43.9), libext2fs2 (>= 1.42), liblzo2-2 (>= 2.02), libudev1 (>= 183), libuuid1 (>= 2.16), libzstd1 (>= 1.4.0), zlib1g (>= 1:1.2.0)
  - suggests: duperemove
  - breaks: initramfs-tools (<< 0.137~), libgcc-s1 (<< 10-20200211)

  </details>

- **btrfs-progs-dbgsym**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for btrfs-progs
  - Install: `sudo apt-get install btrfs-progs-dbgsym`
  - Install (apt): `sudo apt install btrfs-progs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: debug
  - Priority: optional
  - depends: btrfs-progs (= 5.16.2-1~bpo11+1)

  </details>


### <a id="packages-C"></a>C

- **comerr-dev**
  - Latest version: 2.1-1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: common error description library - headers and static libraries
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install comerr-dev`
  - Install (apt): `sudo apt install comerr-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libdevel
  - Priority: optional
  - depends: libc6-dev | libc-dev, libcom-err2 (= 1.46.5-2~bpo11+2)
  - suggests: doc-base
  - replaces: e2fslibs-dev (<< 1.33-2), libkrb5-dev (<< 1.3)

  </details>

- **corosync**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine daemon and utilities
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync`
  - Install (apt): `sudo apt install corosync`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.17), libcfg7 (>= 3.1.0), libcmap4 (>= 2.99.3), libcorosync-common4 (>= 1.99.9), libcpg4 (>= 1.1.0), libknet1 (>= 1.18), libnozzle1 (>= 1.6), libqb100 (>= 2.0.3), libquorum5 (>= 1.99.9), libstatgrab10, libsystemd0, libvotequorum8 (>= 2.4.2), lsb-base (>= 3.0-6), xsltproc
  - preDepends: dpkg (>= 1.20.6~)

  </details>

- **corosync-dbgsym**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for corosync
  - Install: `sudo apt-get install corosync-dbgsym`
  - Install (apt): `sudo apt install corosync-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync (= 3.1.2-pve2), corosync (= 3.1.5-pve1), corosync (= 3.1.5-pve2), corosync (= 3.1.7-pve1)

  </details>

- **corosync-doc**
  - Latest version: 3.1.7-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine notification daemon
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync-notifyd`
  - Install (apt): `sudo apt install corosync-notifyd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: corosync, libc6 (>= 2.7), libcfg7 (>= 2.99.5), libcmap4 (>= 2.99.3), libcorosync-common4 (>= 1.99.9), libdbus-1-3 (>= 1.9.14), libqb100 (>= 2.0.3), libquorum5 (>= 1.99.9), libsnmp40 (>= 5.9+dfsg), libsystemd0, lsb-base (>= 3.0-6)
  - preDepends: dpkg (>= 1.20.6~), init-system-helpers (>= 1.54~)
  - recommends: dbus

  </details>

- **corosync-notifyd-dbgsym**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for corosync-notifyd
  - Install: `sudo apt-get install corosync-notifyd-dbgsym`
  - Install (apt): `sudo apt install corosync-notifyd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-notifyd (= 3.1.2-pve2), corosync-notifyd (= 3.1.5-pve1), corosync-notifyd (= 3.1.5-pve2), corosync-notifyd (= 3.1.7-pve1)

  </details>

- **corosync-vqsim**
  - Latest version: 3.1.5-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine votequorum simulator
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install corosync-vqsim`
  - Install (apt): `sudo apt install corosync-vqsim`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libcorosync-common4 (>= 1.99.9), libknet1 (>= 0.9), libqb100 (>= 2.0.3), libreadline8 (>= 6.0)

  </details>

- **corosync-vqsim-dbgsym**
  - Latest version: 3.1.5-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for corosync-vqsim
  - Install: `sudo apt-get install corosync-vqsim-dbgsym`
  - Install (apt): `sudo apt install corosync-vqsim-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-vqsim (= 3.1.2-pve2), corosync-vqsim (= 3.1.5-pve2)

  </details>

- **criu**
  - Latest version: 3.15-1+pve-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: checkpoint and restore in userspace
  - Homepage: https://www.criu.org/
  - Install: `sudo apt-get install criu`
  - Install (apt): `sudo apt install criu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Salvatore Bonaccorso <carnil@debian.org>
  - Section: admin
  - Priority: optional
  - depends: libbsd0 (>= 0.6.0), libc6 (>= 2.28), libgnutls30 (>= 3.7.0), libnet1 (>= 1.1.2.1), libnl-3-200 (>= 3.2.7), libprotobuf-c1 (>= 1.0.1), libselinux1 (>= 3.1~), python3-protobuf, python3:any
  - recommends: iproute2 | iproute

  </details>

- **criu-dbgsym**
  - Latest version: 3.15-1+pve-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for criu
  - Install: `sudo apt-get install criu-dbgsym`
  - Install (apt): `sudo apt install criu-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Salvatore Bonaccorso <carnil@debian.org>
  - Section: debug
  - Priority: optional
  - depends: criu (= 3.15-1+pve-1)
  - breaks: criu-dbg (<< 1.8-2~)
  - replaces: criu-dbg (<< 1.8-2~)

  </details>


### <a id="packages-D"></a>D

- **dab**
  - Latest version: 3.4.3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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


### <a id="packages-E"></a>E

- **e2fsck-static**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: statically-linked version of the ext2/ext3/ext4 filesystem checker
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install e2fsck-static`
  - Install (apt): `sudo apt install e2fsck-static`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: admin
  - Priority: optional
  - recommends: sash | bash-static | zsh-static | busybox-static

  </details>

- **e2fsprogs**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: ext2/ext3/ext4 file system utilities
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install e2fsprogs`
  - Install (apt): `sudo apt install e2fsprogs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: admin
  - Priority: required
  - depends: logsave
  - preDepends: libblkid1 (>= 2.36), libc6 (>= 2.14), libcom-err2 (>= 1.43.9), libext2fs2 (= 1.46.5-2~bpo11+2), libss2 (>= 1.38), libuuid1 (>= 2.16)
  - recommends: e2fsprogs-l10n
  - suggests: e2fsck-static, fuse2fs, gpart, parted

  </details>

- **e2fsprogs-l10n**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: ext2/ext3/ext4 file system utilities - translations
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install e2fsprogs-l10n`
  - Install (apt): `sudo apt install e2fsprogs-l10n`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: localization
  - Priority: optional
  - depends: e2fsprogs (<< 1.46.5-2~bpo11+2+c~), e2fsprogs (>= 1.46.5-2~bpo11+2)
  - replaces: e2fsprogs (<< 1.43.5-1)

  </details>


### <a id="packages-F"></a>F

- **frr**
  - Latest version: 8.2.2-1+pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: FRRouting suite of internet protocols (BGP, OSPF, IS-IS, ...)
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr`
  - Install (apt): `sudo apt install frr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: net
  - Priority: optional
  - depends: iproute2 | iproute, libc-ares2 (>= 1.7.0), libc6 (>= 2.29), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.1.0), libjson-c5 (>= 0.15), libpam0g (>= 0.99.7.1), libreadline8 (>= 6.0), libsystemd0, libyang1 (>= 1.0.184), libyang2 (>= 2.0.0~), logrotate (>= 3.2-11)
  - preDepends: adduser
  - recommends: frr-pythontools
  - suggests: frr-doc
  - conflicts: pimd, quagga, quagga-bgpd, quagga-core, quagga-isisd, quagga-ospf6d, quagga-ospfd, quagga-pimd, quagga-ripd, quagga-ripngd, zebra, zebra-pj
  - replaces: zebra, zebra-pj

  </details>

- **frr-dbgsym**
  - Latest version: 8.2.2-1+pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for frr
  - Install: `sudo apt-get install frr-dbgsym`
  - Install (apt): `sudo apt install frr-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: debug
  - Priority: optional
  - depends: frr (= 7.5.1-1+pve), frr (= 7.5.1-99+pve~really7.4), frr (= 8.0.1-1+pve1), frr (= 8.2.2-1+pve1)

  </details>

- **frr-doc**
  - Latest version: 8.2.2-1+pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: FRRouting suite - user manual
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-doc`
  - Install (apt): `sudo apt install frr-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: doc
  - Priority: optional
  - depends: libjs-jquery, libjs-underscore
  - suggests: frr
  - conflicts: quagga-doc

  </details>

- **frr-pythontools**
  - Latest version: 8.2.2-1+pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: FRRouting suite - Python tools
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-pythontools`
  - Install (apt): `sudo apt install frr-pythontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: net
  - Priority: optional
  - depends: frr (<< 7.5.1.0-~), frr (<< 8.0.1.0-~), frr (<< 8.2.2.0-~), frr (>= 7.5.1-1+pve~), frr (>= 7.5.1-99+pve~really7.4~), frr (>= 8.0.1-1+pve1~), frr (>= 8.2.2-1+pve1~), python3:any

  </details>

- **frr-snmp**
  - Latest version: 8.2.2-1+pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: FRRouting suite - SNMP support
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-snmp`
  - Install (apt): `sudo apt install frr-snmp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: net
  - Priority: optional
  - depends: frr (= 7.5.1-1+pve), frr (= 7.5.1-99+pve~really7.4), frr (= 8.0.1-1+pve1), frr (= 8.2.2-1+pve1), libc6 (>= 2.28), libsnmp40 (>= 5.9+dfsg)
  - recommends: snmpd

  </details>

- **frr-snmp-dbgsym**
  - Latest version: 8.2.2-1+pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for frr-snmp
  - Install: `sudo apt-get install frr-snmp-dbgsym`
  - Install (apt): `sudo apt install frr-snmp-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: David Lamparter <equinox-debian@diac24.net>
  - Section: debug
  - Priority: optional
  - depends: frr-snmp (= 7.5.1-1+pve), frr-snmp (= 7.5.1-99+pve~really7.4), frr-snmp (= 8.0.1-1+pve1), frr-snmp (= 8.2.2-1+pve1)

  </details>

- **fuse2fs**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: ext2 / ext3 / ext4 file system driver for FUSE
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install fuse2fs`
  - Install (apt): `sudo apt install fuse2fs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.17), libcom-err2 (>= 1.43.9), libext2fs2 (= 1.46.5-2~bpo11+2), libfuse2 (>= 2.8), libuuid1 (>= 2.16)

  </details>


### <a id="packages-I"></a>I

- **ifupdown**
  - Latest version: 0.8.36+pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: high level tools to configure network interfaces
  - Install: `sudo apt-get install ifupdown`
  - Install (apt): `sudo apt install ifupdown`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Josué Ortega <josue@debian.org>
  - Section: admin
  - Priority: important
  - depends: adduser, iproute2, libc6 (>= 2.14), lsb-base
  - recommends: isc-dhcp-client | dhcp-client
  - suggests: ppp, rdnssd
  - breaks: systemd (<< 228-3~)
  - replaces: systemd (<< 228-3~)

  </details>

- **ifupdown-dbgsym**
  - Latest version: 0.8.36+pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for ifupdown
  - Install: `sudo apt-get install ifupdown-dbgsym`
  - Install (apt): `sudo apt install ifupdown-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Josué Ortega <josue@debian.org>
  - Section: debug
  - Priority: optional
  - depends: ifupdown (= 0.8.36+pve1), ifupdown (= 0.8.36+pve2)

  </details>

- **ifupdown2**
  - Latest version: 3.1.0-1+pmx4
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Network Interface Management tool similar to ifupdown
  - Homepage: https://github.com/cumulusnetworks/ifupdown2
  - Install: `sudo apt-get install ifupdown2`
  - Install (apt): `sudo apt install ifupdown2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: iproute2, python3:any
  - suggests: bridge-utils, ethtool, isc-dhcp-client, python3-gvgen, python3-mako
  - conflicts: ifupdown
  - breaks: libpve-common-perl (<< 6.0-14)
  - replaces: ifupdown
  - provides: ifupdown

  </details>


### <a id="packages-K"></a>K

- **ksm-control-daemon**
  - Latest version: 1.4-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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

- **libbtrfs-dev**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities (development headers)
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install libbtrfs-dev`
  - Install (apt): `sudo apt install libbtrfs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: libdevel
  - Priority: optional
  - depends: libbtrfs0 (= 5.16.2-1~bpo11+1)

  </details>

- **libbtrfs0**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities (runtime library)
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install libbtrfs0`
  - Install (apt): `sudo apt install libbtrfs0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4)

  </details>

- **libbtrfs0-dbgsym**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libbtrfs0
  - Install: `sudo apt-get install libbtrfs0-dbgsym`
  - Install (apt): `sudo apt install libbtrfs0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: debug
  - Priority: optional
  - depends: libbtrfs0 (= 5.16.2-1~bpo11+1)

  </details>

- **libbtrfsutil-dev**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities (util development headers)
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install libbtrfsutil-dev`
  - Install (apt): `sudo apt install libbtrfsutil-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: libdevel
  - Priority: optional
  - depends: libbtrfsutil1 (= 5.16.2-1~bpo11+1)

  </details>

- **libbtrfsutil1**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities (runtime util library)
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install libbtrfsutil1`
  - Install (apt): `sudo apt install libbtrfsutil1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4)
  - breaks: python3-btrfsutil (<< 5.5)

  </details>

- **libbtrfsutil1-dbgsym**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libbtrfsutil1
  - Install: `sudo apt-get install libbtrfsutil1-dbgsym`
  - Install (apt): `sudo apt install libbtrfsutil1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: debug
  - Priority: optional
  - depends: libbtrfsutil1 (= 5.16.2-1~bpo11+1)

  </details>

- **libcfg-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine CFG library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcfg-dev`
  - Install (apt): `sudo apt install libcfg-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcfg7 (= 3.1.2-pve2), libcfg7 (= 3.1.5-pve1), libcfg7 (= 3.1.5-pve2), libcfg7 (= 3.1.7-pve1), libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1)

  </details>

- **libcfg7**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libcfg7
  - Install: `sudo apt-get install libcfg7-dbgsym`
  - Install (apt): `sudo apt install libcfg7-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcfg7 (= 3.1.2-pve2), libcfg7 (= 3.1.5-pve1), libcfg7 (= 3.1.5-pve2), libcfg7 (= 3.1.7-pve1)

  </details>

- **libcmap-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine CMAP library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcmap-dev`
  - Install (apt): `sudo apt install libcmap-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcmap4 (= 3.1.2-pve2), libcmap4 (= 3.1.5-pve1), libcmap4 (= 3.1.5-pve2), libcmap4 (= 3.1.7-pve1), libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1)

  </details>

- **libcmap4**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libcmap4
  - Install: `sudo apt-get install libcmap4-dbgsym`
  - Install (apt): `sudo apt install libcmap4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcmap4 (= 3.1.2-pve2), libcmap4 (= 3.1.5-pve1), libcmap4 (= 3.1.5-pve2), libcmap4 (= 3.1.7-pve1)

  </details>

- **libcom-err2**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: common error description library
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install libcom-err2`
  - Install (apt): `sudo apt install libcom-err2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17)
  - breaks: libcomerr2 (<< 1.43.9-1~)
  - replaces: libcomerr2 (<< 1.43.9-1~)
  - provides: libcomerr2 (= 1.46.5-2~bpo11+2)

  </details>

- **libcorosync-common-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine common development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcorosync-common-dev`
  - Install (apt): `sudo apt install libcorosync-common-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common4 (= 3.1.2-pve2), libcorosync-common4 (= 3.1.5-pve1), libcorosync-common4 (= 3.1.5-pve2), libcorosync-common4 (= 3.1.7-pve1), libqb-dev

  </details>

- **libcorosync-common4**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libcorosync-common4
  - Install: `sudo apt-get install libcorosync-common4-dbgsym`
  - Install (apt): `sudo apt install libcorosync-common4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcorosync-common4 (= 3.1.2-pve2), libcorosync-common4 (= 3.1.5-pve1), libcorosync-common4 (= 3.1.5-pve2), libcorosync-common4 (= 3.1.7-pve1)

  </details>

- **libcpg-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine CPG library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcpg-dev`
  - Install (apt): `sudo apt install libcpg-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1), libcpg4 (= 3.1.2-pve2), libcpg4 (= 3.1.5-pve1), libcpg4 (= 3.1.5-pve2), libcpg4 (= 3.1.7-pve1)

  </details>

- **libcpg4**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine CPG library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libcpg4`
  - Install (apt): `sudo apt install libcpg4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libcpg4-dbgsym**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libcpg4
  - Install: `sudo apt-get install libcpg4-dbgsym`
  - Install (apt): `sudo apt install libcpg4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcpg4 (= 3.1.2-pve2), libcpg4 (= 3.1.5-pve1), libcpg4 (= 3.1.5-pve2), libcpg4 (= 3.1.7-pve1)

  </details>

- **libext2fs-dev**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: ext2/ext3/ext4 file system libraries - headers and static libraries
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install libext2fs-dev`
  - Install (apt): `sudo apt install libext2fs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libdevel
  - Priority: optional
  - depends: comerr-dev, libc6-dev | libc-dev, libext2fs2 (= 1.46.5-2~bpo11+2)
  - suggests: doc-base
  - breaks: e2fslibs-dev (<< 1.43.9-1~)
  - replaces: e2fslibs-dev (<< 1.43.9-1~)
  - provides: e2fslibs-dev (= 1.46.5-2~bpo11+2)

  </details>

- **libext2fs2**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: ext2/ext3/ext4 file system libraries
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install libext2fs2`
  - Install (apt): `sudo apt install libext2fs2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28)
  - breaks: e2fslibs (<< 1.43.9-1~)
  - replaces: e2fslibs (<< 1.43.9-1~)
  - provides: e2fslibs (= 1.46.5-2~bpo11+2)

  </details>

- **libjs-extjs**
  - Latest version: 7.0.0-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 1.20201119-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: javascript library for making cross-browser QRCodes
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
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: kronosnet core switching implementation (developer files)
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libknet-dev`
  - Install (apt): `sudo apt install libknet-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libknet1 (= 1.21-pve1), libknet1 (= 1.22-pve1), libknet1 (= 1.22-pve2), libknet1 (= 1.24-pve1), libknet1 (= 1.24-pve2)
  - suggests: libknet-doc (= 1.21-pve1), libknet-doc (= 1.22-pve1), libknet-doc (= 1.22-pve2), libknet-doc (= 1.24-pve1), libknet-doc (= 1.24-pve2)

  </details>

- **libknet-doc**
  - Latest version: 1.24-pve2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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

- **libknet1**
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: kronosnet core switching implementation
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libknet1`
  - Install (apt): `sudo apt install libknet1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.17), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20110809), liblzo2-2 (>= 2.02), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libssl1.1 (>= 1.1.0), libzstd1 (>= 1.4.0), zlib1g (>= 1:1.1.4)

  </details>

- **libknet1-dbgsym**
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libknet1
  - Install: `sudo apt-get install libknet1-dbgsym`
  - Install (apt): `sudo apt install libknet1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libknet1 (= 1.21-pve1), libknet1 (= 1.22-pve1), libknet1 (= 1.22-pve2), libknet1 (= 1.24-pve1), libknet1 (= 1.24-pve2)

  </details>

- **libnozzle-dev**
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: userland wrapper around kernel tap devices (developer files)
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libnozzle-dev`
  - Install (apt): `sudo apt install libnozzle-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libnozzle1 (= 1.21-pve1), libnozzle1 (= 1.22-pve1), libnozzle1 (= 1.22-pve2), libnozzle1 (= 1.24-pve1), libnozzle1 (= 1.24-pve2)
  - suggests: libknet-doc (= 1.21-pve1), libknet-doc (= 1.22-pve1), libknet-doc (= 1.22-pve2), libknet-doc (= 1.24-pve1), libknet-doc (= 1.24-pve2)

  </details>

- **libnozzle1**
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: userland wrapper around kernel tap devices
  - Homepage: https://kronosnet.org/
  - Install: `sudo apt-get install libnozzle1`
  - Install (apt): `sudo apt install libnozzle1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libnl-3-200 (>= 3.2.21), libnl-route-3-200 (>= 3.2.7)

  </details>

- **libnozzle1-dbgsym**
  - Latest version: 1.24-pve2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnozzle1
  - Install: `sudo apt-get install libnozzle1-dbgsym`
  - Install (apt): `sudo apt install libnozzle1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libnozzle1 (= 1.21-pve1), libnozzle1 (= 1.22-pve1), libnozzle1 (= 1.22-pve2), libnozzle1 (= 1.24-pve1), libnozzle1 (= 1.24-pve2)

  </details>

- **libnss-myhostname**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: nss module providing fallback resolution for the current hostname
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-myhostname`
  - Install (apt): `sudo apt install libnss-myhostname`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.30)

  </details>

- **libnss-myhostname-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnss-myhostname
  - Install: `sudo apt-get install libnss-myhostname-dbgsym`
  - Install (apt): `sudo apt install libnss-myhostname-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-myhostname (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-mymachines**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: nss module to resolve hostnames for local container instances
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-mymachines`
  - Install (apt): `sudo apt install libnss-mymachines`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.30), systemd-container (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-mymachines-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnss-mymachines
  - Install: `sudo apt-get install libnss-mymachines-dbgsym`
  - Install (apt): `sudo apt install libnss-mymachines-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-mymachines (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-resolve**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: nss module to resolve names via systemd-resolved
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-resolve`
  - Install (apt): `sudo apt install libnss-resolve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.30), systemd (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-resolve-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnss-resolve
  - Install: `sudo apt-get install libnss-resolve-dbgsym`
  - Install (apt): `sudo apt install libnss-resolve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-resolve (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-systemd**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: nss module providing dynamic user and group name resolution
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-systemd`
  - Install (apt): `sudo apt install libnss-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: libc6 (>= 2.30), systemd (= 247.3-7+1-pmx11u1)

  </details>

- **libnss-systemd-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnss-systemd
  - Install: `sudo apt-get install libnss-systemd-dbgsym`
  - Install (apt): `sudo apt install libnss-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-systemd (= 247.3-7+1-pmx11u1)

  </details>

- **libnvpair2linux**
  - Latest version: 2.0.1-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Solaris name-value library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libnvpair2linux`
  - Install (apt): `sudo apt install libnvpair2linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - breaks: libnvpair1, libnvpair1linux
  - replaces: libnvpair1, libnvpair1linux

  </details>

- **libnvpair3linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Solaris name-value library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libnvpair3linux`
  - Install (apt): `sudo apt install libnvpair3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - breaks: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3
  - replaces: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3

  </details>

- **libnvpair3linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libnvpair3linux
  - Install: `sudo apt-get install libnvpair3linux-dbgsym`
  - Install (apt): `sudo apt install libnvpair3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libnvpair3linux (= 2.0.5-pve1), libnvpair3linux (= 2.1.1-pve1), libnvpair3linux (= 2.1.1-pve2), libnvpair3linux (= 2.1.1-pve3), libnvpair3linux (= 2.1.11-pve1), libnvpair3linux (= 2.1.14-pve1), libnvpair3linux (= 2.1.15-pve1), libnvpair3linux (= 2.1.2-pve1), libnvpair3linux (= 2.1.4-pve1), libnvpair3linux (= 2.1.5-pve1), libnvpair3linux (= 2.1.6-pve1), libnvpair3linux (= 2.1.7-pve1), libnvpair3linux (= 2.1.7-pve2), libnvpair3linux (= 2.1.7-pve3), libnvpair3linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libpam-systemd**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: system and service manager - PAM module
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libpam-systemd`
  - Install (apt): `sudo apt install libpam-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: dbus, libc6 (>= 2.30), libpam-runtime (>= 1.0.1-6), libpam0g (>= 0.99.7.1), systemd (= 247.3-7+1-pmx11u1), systemd-sysv
  - provides: default-logind (= 247.3-7+1-pmx11u1), logind (= 247.3-7+1-pmx11u1)

  </details>

- **libpam-systemd-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libpam-systemd
  - Install: `sudo apt-get install libpam-systemd-dbgsym`
  - Install (apt): `sudo apt install libpam-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libpam-systemd (= 247.3-7+1-pmx11u1)

  </details>

- **libpam-zfs**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: PAM module for managing encryption keys for ZFS
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libpam-zfs`
  - Install (apt): `sudo apt install libpam-zfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libpam-runtime, libpam0g (>= 1.1.0), libssl1.1 (>= 1.1.0), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9)

  </details>

- **libpam-zfs-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libpam-zfs
  - Install: `sudo apt-get install libpam-zfs-dbgsym`
  - Install (apt): `sudo apt install libpam-zfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libpam-zfs (= 2.0.5-pve1), libpam-zfs (= 2.1.1-pve1), libpam-zfs (= 2.1.1-pve2), libpam-zfs (= 2.1.1-pve3), libpam-zfs (= 2.1.11-pve1), libpam-zfs (= 2.1.14-pve1), libpam-zfs (= 2.1.15-pve1), libpam-zfs (= 2.1.2-pve1), libpam-zfs (= 2.1.4-pve1), libpam-zfs (= 2.1.5-pve1), libpam-zfs (= 2.1.6-pve1), libpam-zfs (= 2.1.7-pve1), libpam-zfs (= 2.1.7-pve2), libpam-zfs (= 2.1.7-pve3), libpam-zfs (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libproxmox-acme-perl**
  - Latest version: 1.4.4
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox ACME integration perl library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-acme-perl`
  - Install (apt): `sudo apt install libproxmox-acme-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libproxmox-acme-plugins, libpve-common-perl (>= 6~), perl, perl:any
  - recommends: libproxmox-acme-plugins
  - breaks: libpve-common-perl (<< 6.0-20)
  - replaces: libpve-common-perl (<< 6.0-20)

  </details>

- **libproxmox-acme-plugins**
  - Latest version: 1.4.4
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 1.3.1-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Backup Server client library for QEMU
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-backup-qemu0`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.25), libc6 (>= 2.28), libgcc-s1 (>= 4.2), libgcc1 (>= 1:4.2), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), libzstd1 (>= 1.3.2), libzstd1 (>= 1.4.0)
  - breaks: pve-qemu-kvm (<< 5.2.0-1)

  </details>

- **libproxmox-backup-qemu0-dbgsym**
  - Latest version: 1.3.1-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libproxmox-backup-qemu0
  - Install: `sudo apt-get install libproxmox-backup-qemu0-dbgsym`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libproxmox-backup-qemu0 (= 1.0.3-1), libproxmox-backup-qemu0 (= 1.2.0-1), libproxmox-backup-qemu0 (= 1.3.1-1)

  </details>

- **libproxmox-backup-qemu0-dev**
  - Latest version: 1.3.1-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Backup Server client library for QEMU development files
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-backup-qemu0-dev`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libproxmox-backup-qemu0

  </details>

- **libproxmox-rs-perl**
  - Latest version: 0.2.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: PVE/PMG common parts which have been ported to Rust - Perl packages
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libproxmox-rs-perl`
  - Install (apt): `sudo apt install libproxmox-rs-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-rs-perl (>= 0.6.0) | libpmg-rs-perl (>= 0.5.0), libpve-rs-perl (>= 0.6.2) | libpmg-rs-perl (>= 0.5.1), libpve-rs-perl (>= 0.7.0) | libpmg-rs-perl (>= 0.6.0), libpve-rs-perl (>= 0.7.2) | libpmg-rs-perl (>= 0.6.2), perl:any
  - breaks: libpmg-rs-perl (<< 0.6.2), libpve-rs-perl (<< 0.6.0), libpve-rs-perl (<< 0.7.2)
  - replaces: libpve-rs-perl (<< 0.6.0)

  </details>

- **libpve-access-control**
  - Latest version: 7.4.3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE access control library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-access-control`
  - Install (apt): `sudo apt install libpve-access-control`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libauthen-pam-perl, libcrypt-openssl-random-perl, libcrypt-openssl-rsa-perl, libjson-perl, libjson-xs-perl, libmime-base32-perl, libnet-ldap-perl, libnet-ssleay-perl, libpve-cluster-perl, libpve-common-perl (>= 6.0-18), libpve-rs-perl, libpve-rs-perl (>= 0.3.2), libpve-rs-perl (>= 0.4.3), libpve-rs-perl (>= 0.7.6), libpve-u2f-server-perl (>= 1.0-2), liburi-perl, libuuid-perl, perl:any, pve-cluster (>= 6.1-4)
  - breaks: pve-manager (<< 7.0-15), pve-manager (<= 6.0-9)

  </details>

- **libpve-apiclient-perl**
  - Latest version: 3.2-2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE API client library
  - Homepage: http://www.proxmox.com
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
  - Latest version: 7.3-3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Virtual Environment cluster Perl API modules.
  - Install: `sudo apt-get install libpve-cluster-api-perl`
  - Install (apt): `sudo apt install libpve-cluster-api-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: faketime, libcrypt-ssleay-perl, libdigest-hmac-perl, libpve-access-control, libpve-apiclient-perl, libpve-cluster-perl (= 7.0-2), libpve-cluster-perl (= 7.0-3), libpve-cluster-perl (= 7.0-5), libpve-cluster-perl (= 7.1-2), libpve-cluster-perl (= 7.1-3), libpve-cluster-perl (= 7.2-1), libpve-cluster-perl (= 7.2-2), libpve-cluster-perl (= 7.2-3), libpve-cluster-perl (= 7.3-1), libpve-cluster-perl (= 7.3-2), libpve-cluster-perl (= 7.3-3), libpve-common-perl (>= 5.0-28), libuuid-perl, openssl, perl:any, rsync
  - breaks: pve-cluster (<= 6.0-7)
  - replaces: pve-cluster (<= 6.0-7)

  </details>

- **libpve-cluster-perl**
  - Latest version: 7.3-3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 7.4-2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE base library
  - Install: `sudo apt-get install libpve-common-perl`
  - Install (apt): `sudo apt install libpve-common-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libanyevent-perl, libclone-perl, libcrypt-openssl-random-perl, libcrypt-openssl-rsa-perl, libdevel-cycle-perl, libfilesys-df-perl, libhttp-daemon-perl, libhttp-message-perl, libio-stringy-perl, libjson-perl, liblinux-inotify2-perl, libmime-base32-perl, libnet-dbus-perl, libnet-ip-perl, libnetaddr-ip-perl, libproxmox-acme-perl, libproxmox-rs-perl, libstring-shellquote-perl, libtimedate-perl, liburi-perl, libwww-perl, libyaml-libyaml-perl, perl:any
  - breaks: ifupdown2 (<< 2.0.1-1+pve5), pmg-api (<< 6.1-7), pmg-api (<< 7.1-5), pve-container (<< 3.0-9), pve-container (<< 4.3-1), pve-manager (<< 5.2-5), pve-manager (<< 7.2-9), qemu-server (<< 5.0-49), qemu-server (<< 7.0-19), qemu-server (<< 7.2-7)

  </details>

- **libpve-guest-common-perl**
  - Latest version: 4.2-5
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE common guest-related modules
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-guest-common-perl`
  - Install (apt): `sudo apt install libpve-guest-common-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-access-control, libpve-cluster-perl, libpve-cluster-perl (>= 7-2-3), libpve-common-perl (>= 4.0-89), libpve-common-perl (>= 7.2-6), libpve-storage-perl (>= 6.1-6), libpve-storage-perl (>= 7.0-14), perl:any, proxmox-websocket-tunnel, pve-cluster
  - breaks: libpve-common-perl (<< 4.0-89), pve-container (<< 3.1-4), pve-manager (<< 6.0-10), qemu-server (<< 6.1-19)
  - replaces: libpve-common-perl (<< 4.0-89), pve-manager (<< 4.4-10)

  </details>

- **libpve-http-server-perl**
  - Latest version: 4.3.0
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Asynchrounous HTTP Server Implementation
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-http-server-perl`
  - Install (apt): `sudo apt install libpve-http-server-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libanyevent-http-perl, libanyevent-perl (>= 7.140-3), libcrypt-ssleay-perl, libhtml-parser-perl, libhttp-date-perl, libhttp-message-perl, libio-socket-ssl-perl, libjs-bootstrap, libjs-jquery, libjson-perl, libnet-ip-perl, libpve-common-perl (>= 6.0-13), liburi-perl, perl:any
  - breaks: libpve-storage-perl (<< 7.0-11), libpve-storage-perl (<< 7.4-4), pmg-api (<< 6.1-5), pmg-api (<< 7.3-12), pve-manager (<< 6.1-6), pve-manager (<< 7.4-18)

  </details>

- **libpve-network-perl**
  - Latest version: 0.7.3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE's experimental SDN (Software Defined Network)
  - Homepage: http://www.proxmox.com
  - Install: `sudo apt-get install libpve-network-perl`
  - Install (apt): `sudo apt install libpve-network-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libnet-ip-perl, libnet-subnet-perl, libnetaddr-ip-perl, libpve-common-perl (>= 5.0-45), perl (>= 5.6.0-16), perl:any, pve-cluster (>= 6.4-1)
  - recommends: frr-pythontools, ifupdown2
  - breaks: pve-manager (<< 5.2-12)

  </details>

- **libpve-rs-perl**
  - Latest version: 0.7.7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Components of Proxmox Virtual Environment which have been ported to Rust.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-rs-perl`
  - Install (apt): `sudo apt install libpve-rs-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.18), libc6 (>= 2.28), libcrypt1 (>= 1:4.1.0), libcurl3-gnutls (>= 7.16.2), libgcc-s1 (>= 4.2), libssl1.1 (>= 1.1.0), libssl1.1 (>= 1.1.1), libuuid1 (>= 2.16), libzstd1 (>= 1.4.0), perl, perlapi-5.32.1
  - breaks: libpve-access-control (<< 7.1-3), libpve-common-perl (<< 7.1-4), pve-manager (<< 7.1-11)

  </details>

- **libpve-rs-perl-dbgsym**
  - Latest version: 0.7.7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libpve-rs-perl
  - Install: `sudo apt-get install libpve-rs-perl-dbgsym`
  - Install (apt): `sudo apt install libpve-rs-perl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libpve-rs-perl (= 0.1.2-1), libpve-rs-perl (= 0.2.2), libpve-rs-perl (= 0.2.3), libpve-rs-perl (= 0.3.0), libpve-rs-perl (= 0.3.1), libpve-rs-perl (= 0.3.2), libpve-rs-perl (= 0.4.3), libpve-rs-perl (= 0.4.4), libpve-rs-perl (= 0.5.0), libpve-rs-perl (= 0.5.1), libpve-rs-perl (= 0.6.0), libpve-rs-perl (= 0.6.1), libpve-rs-perl (= 0.6.2), libpve-rs-perl (= 0.7.1), libpve-rs-perl (= 0.7.2), libpve-rs-perl (= 0.7.3), libpve-rs-perl (= 0.7.5), libpve-rs-perl (= 0.7.6), libpve-rs-perl (= 0.7.7)

  </details>

- **libpve-storage-perl**
  - Latest version: 7.4-4
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE storage management library
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-storage-perl`
  - Install (apt): `sudo apt install libpve-storage-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: ceph-common (>= 12.2~), ceph-fuse, cifs-utils, cstream, glusterfs-client (>= 3.4.0-2), libfile-chdir-perl, libposix-strptime-perl, libpve-apiclient-perl (>= 3.1-1), libpve-cluster-perl, libpve-common-perl (>= 6.4-1), libpve-common-perl (>= 7.2-1), libpve-common-perl (>= 7.2-4), librados2-perl, lvm2, nfs-common, perl:any, proxmox-backup-client (>= 1.0~), proxmox-backup-client (>= 2.1.10~), proxmox-backup-file-restore, pve-cluster (>= 5.0-32), smartmontools, smbclient, thin-provisioning-tools, udev
  - recommends: zfs-zed
  - breaks: libpve-guest-common-perl (<< 3.0-7), libpve-guest-common-perl (<< 4.0-3), libpve-http-server-perl (<< 4.0-3), pve-container (<< 3.1-2), pve-manager (<< 5.2-12), qemu-server (<< 6.1-14)

  </details>

- **libpve-u2f-server-perl**
  - Latest version: 1.1-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Perl bindings for libu2f-server
  - Homepage: https://www.proxmox.com/
  - Install: `sudo apt-get install libpve-u2f-server-perl`
  - Install (apt): `sudo apt install libpve-u2f-server-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libu2f-server0 (>= 0.0.0), perl (>= 5.20.1-5), perlapi-5.32.0, perlapi-5.32.1

  </details>

- **libquorum-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine Quorum library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libquorum-dev`
  - Install (apt): `sudo apt install libquorum-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1), libquorum5 (= 3.1.2-pve2), libquorum5 (= 3.1.5-pve1), libquorum5 (= 3.1.5-pve2), libquorum5 (= 3.1.7-pve1)

  </details>

- **libquorum5**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libquorum5
  - Install: `sudo apt-get install libquorum5-dbgsym`
  - Install (apt): `sudo apt install libquorum5-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libquorum5 (= 3.1.2-pve2), libquorum5 (= 3.1.5-pve1), libquorum5 (= 3.1.5-pve2), libquorum5 (= 3.1.7-pve1)

  </details>

- **librados2-perl**
  - Latest version: 1.3-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Perl bindings for librados
  - Homepage: https://www.proxmox.com/
  - Install: `sudo apt-get install librados2-perl`
  - Install (apt): `sudo apt install librados2-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.4), libpve-access-control, librados2 (>= 0.67.5), perl (>= 5.20.1-5), perlapi-5.32.1

  </details>

- **libsam-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine SAM library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libsam-dev`
  - Install (apt): `sudo apt install libsam-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1), libsam4 (= 3.1.2-pve2), libsam4 (= 3.1.5-pve1), libsam4 (= 3.1.5-pve2), libsam4 (= 3.1.7-pve1)

  </details>

- **libsam4**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine SAM library
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libsam4`
  - Install (apt): `sudo apt install libsam4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libcmap4 (>= 1.99.9), libquorum5 (>= 1.99.9)

  </details>

- **libsam4-dbgsym**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libsam4
  - Install: `sudo apt-get install libsam4-dbgsym`
  - Install (apt): `sudo apt install libsam4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libsam4 (= 3.1.2-pve2), libsam4 (= 3.1.5-pve1), libsam4 (= 3.1.5-pve2), libsam4 (= 3.1.7-pve1)

  </details>

- **libss2**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: command-line interface parsing library
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install libss2`
  - Install (apt): `sudo apt install libss2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libcom-err2
  - replaces: e2fsprogs (<< 1.34-1)

  </details>

- **libsystemd-dev**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: systemd utility library - development files
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libsystemd-dev`
  - Install (apt): `sudo apt install libsystemd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libsystemd0 (= 247.3-7+1-pmx11u1)

  </details>

- **libsystemd0**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: systemd utility library
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libsystemd0`
  - Install (apt): `sudo apt install libsystemd0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - preDepends: libc6 (>= 2.30), libgcrypt20 (>= 1.8.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libzstd1 (>= 1.4.0)

  </details>

- **libsystemd0-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libsystemd0
  - Install: `sudo apt-get install libsystemd0-dbgsym`
  - Install (apt): `sudo apt install libsystemd0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsystemd0 (= 247.3-7+1-pmx11u1)

  </details>

- **libtpms-dev**
  - Latest version: 0.9.5~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: libtpms header files and man pages
  - Install: `sudo apt-get install libtpms-dev`
  - Install (apt): `sudo apt install libtpms-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: libdevel
  - Priority: optional
  - depends: libtpms0 (= 0.9.0+1), libtpms0 (= 0.9.2~bpo11+1), libtpms0 (= 0.9.5~bpo11+1)

  </details>

- **libtpms0**
  - Latest version: 0.9.5~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: TPM emulation library
  - Install: `sudo apt-get install libtpms0`
  - Install (apt): `sudo apt install libtpms0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libssl1.1 (>= 1.1.1), openssl

  </details>

- **libtpms0-dbgsym**
  - Latest version: 0.9.5~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libtpms0
  - Install: `sudo apt-get install libtpms0-dbgsym`
  - Install (apt): `sudo apt install libtpms0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: debug
  - Priority: optional
  - depends: libtpms0 (= 0.9.0+1), libtpms0 (= 0.9.2~bpo11+1), libtpms0 (= 0.9.5~bpo11+1)

  </details>

- **libtspi-dev**
  - Latest version: 0.3.14+fixed1-1.2+pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: open-source TCG Software Stack (development)
  - Homepage: http://trousers.sourceforge.net/
  - Install: `sudo apt-get install libtspi-dev`
  - Install (apt): `sudo apt install libtspi-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Pierre Chifflier <pollux@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libssl-dev, libtspi1 (= 0.3.14+fixed1-1.2+pve1), libtspi1 (= 0.3.14+fixed1-1.2+pve3)

  </details>

- **libtspi1**
  - Latest version: 0.3.14+fixed1-1.2+pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: open-source TCG Software Stack (library)
  - Homepage: http://trousers.sourceforge.net/
  - Install: `sudo apt-get install libtspi1`
  - Install (apt): `sudo apt install libtspi1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Pierre Chifflier <pollux@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libssl1.1 (>= 1.1.0)

  </details>

- **libudev-dev**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: libudev development files
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libudev-dev`
  - Install (apt): `sudo apt install libudev-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libudev1 (= 247.3-7+1-pmx11u1)

  </details>

- **libudev1**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: libudev shared library
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libudev1`
  - Install (apt): `sudo apt install libudev1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.30)

  </details>

- **libudev1-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libudev1
  - Install: `sudo apt-get install libudev1-dbgsym`
  - Install (apt): `sudo apt install libudev1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libudev1 (= 247.3-7+1-pmx11u1)

  </details>

- **libuutil2linux**
  - Latest version: 2.0.1-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Solaris userland utility library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libuutil2linux`
  - Install (apt): `sudo apt install libuutil2linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.17)
  - breaks: libuutil1, libuutil1linux
  - replaces: libuutil1, libuutil1linux

  </details>

- **libuutil3linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Solaris userland utility library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libuutil3linux`
  - Install (apt): `sudo apt install libuutil3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.17)
  - breaks: libuutil1, libuutil1linux, libuutil2linux, libuutil3
  - replaces: libuutil1, libuutil1linux, libuutil2linux, libuutil3

  </details>

- **libuutil3linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libuutil3linux
  - Install: `sudo apt-get install libuutil3linux-dbgsym`
  - Install (apt): `sudo apt install libuutil3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libuutil3linux (= 2.0.5-pve1), libuutil3linux (= 2.1.1-pve1), libuutil3linux (= 2.1.1-pve2), libuutil3linux (= 2.1.1-pve3), libuutil3linux (= 2.1.11-pve1), libuutil3linux (= 2.1.14-pve1), libuutil3linux (= 2.1.15-pve1), libuutil3linux (= 2.1.2-pve1), libuutil3linux (= 2.1.4-pve1), libuutil3linux (= 2.1.5-pve1), libuutil3linux (= 2.1.6-pve1), libuutil3linux (= 2.1.7-pve1), libuutil3linux (= 2.1.7-pve2), libuutil3linux (= 2.1.7-pve3), libuutil3linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libvotequorum-dev**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: cluster engine Votequorum library development
  - Homepage: https://corosync.github.io/corosync/
  - Install: `sudo apt-get install libvotequorum-dev`
  - Install (apt): `sudo apt install libvotequorum-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcorosync-common-dev (= 3.1.2-pve2), libcorosync-common-dev (= 3.1.5-pve1), libcorosync-common-dev (= 3.1.5-pve2), libcorosync-common-dev (= 3.1.7-pve1), libvotequorum8 (= 3.1.2-pve2), libvotequorum8 (= 3.1.5-pve1), libvotequorum8 (= 3.1.5-pve2), libvotequorum8 (= 3.1.7-pve1)

  </details>

- **libvotequorum8**
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.1.7-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libvotequorum8
  - Install: `sudo apt-get install libvotequorum8-dbgsym`
  - Install (apt): `sudo apt install libvotequorum8-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libvotequorum8 (= 3.1.2-pve2), libvotequorum8 (= 3.1.5-pve1), libvotequorum8 (= 3.1.5-pve2), libvotequorum8 (= 3.1.7-pve1)

  </details>

- **libyang-tools**
  - Latest version: 2.0.7-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling [dummy package]
  - Homepage: https://github.com/CESNET/libyang/
  - Install: `sudo apt-get install libyang-tools`
  - Install (apt): `sudo apt install libyang-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: libyang2-tools (>= 2.0.7-1)

  </details>

- **libyang2**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling - runtime
  - Homepage: https://github.com/CESNET/libyang/
  - Install: `sudo apt-get install libyang2`
  - Install (apt): `sudo apt install libyang2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libpcre2-8-0 (>= 10.22)

  </details>

- **libyang2-dbgsym**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libyang2
  - Install: `sudo apt-get install libyang2-dbgsym`
  - Install (apt): `sudo apt install libyang2-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: debug
  - Priority: optional
  - depends: libyang2 (= 2.0.7-1)

  </details>

- **libyang2-dev**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling - development files
  - Homepage: https://github.com/CESNET/libyang/
  - Install: `sudo apt-get install libyang2-dev`
  - Install (apt): `sudo apt install libyang2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libpcre3-dev, libyang2 (= 2.0.7-1)
  - conflicts: libyang-dev

  </details>

- **libyang2-tools**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling - executable tools
  - Homepage: https://github.com/CESNET/libyang/
  - Install: `sudo apt-get install libyang2-tools`
  - Install (apt): `sudo apt install libyang2-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libyang2 (= 2.0.7-1)
  - breaks: libyang-tools (<< 2.0.7-1)
  - replaces: libyang-tools (<< 2.0.7-1)

  </details>

- **libyang2-tools-dbgsym**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libyang2-tools
  - Install: `sudo apt-get install libyang2-tools-dbgsym`
  - Install (apt): `sudo apt install libyang2-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ondřej Surý <ondrej@debian.org>
  - Section: debug
  - Priority: optional
  - depends: libyang2-tools (= 2.0.7-1)

  </details>

- **libzfs3linux**
  - Latest version: 2.0.1-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS filesystem library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfs3linux`
  - Install (apt): `sudo apt install libzfs3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.29), libnvpair2linux (>= 2.0.1), libssl1.1 (>= 1.1.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil2linux (>= 2.0.1), zlib1g (>= 1:1.1.4)
  - breaks: libzfs2, libzfs2linux
  - replaces: libzfs2, libzfs2linux

  </details>

- **libzfs4linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS filesystem library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfs4linux`
  - Install (apt): `sudo apt install libzfs4linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.29), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libssl1.1 (>= 1.1.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.0.4), libuutil3linux (>= 2.0.5), libuutil3linux (>= 2.1.1), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.14), libuutil3linux (>= 2.1.15), libuutil3linux (>= 2.1.2), libuutil3linux (>= 2.1.4), libuutil3linux (>= 2.1.5), libuutil3linux (>= 2.1.6), libuutil3linux (>= 2.1.7), libuutil3linux (>= 2.1.9), zlib1g (>= 1:1.1.4)
  - recommends: libcurl4
  - breaks: libzfs2, libzfs2linux, libzfs3linux, libzfs4
  - replaces: libzfs2, libzfs2linux, libzfs3linux, libzfs4

  </details>

- **libzfs4linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libzfs4linux
  - Install: `sudo apt-get install libzfs4linux-dbgsym`
  - Install (apt): `sudo apt install libzfs4linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfs4linux (= 2.0.5-pve1), libzfs4linux (= 2.1.1-pve1), libzfs4linux (= 2.1.1-pve2), libzfs4linux (= 2.1.1-pve3), libzfs4linux (= 2.1.11-pve1), libzfs4linux (= 2.1.14-pve1), libzfs4linux (= 2.1.15-pve1), libzfs4linux (= 2.1.2-pve1), libzfs4linux (= 2.1.4-pve1), libzfs4linux (= 2.1.5-pve1), libzfs4linux (= 2.1.6-pve1), libzfs4linux (= 2.1.7-pve1), libzfs4linux (= 2.1.7-pve2), libzfs4linux (= 2.1.7-pve3), libzfs4linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libzfsbootenv1linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS filesystem library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfsbootenv1linux`
  - Install (apt): `sudo apt install libzfsbootenv1linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.8), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9)
  - breaks: libzfs2, libzfs4
  - replaces: libzfs2, libzfs4

  </details>

- **libzfsbootenv1linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libzfsbootenv1linux
  - Install: `sudo apt-get install libzfsbootenv1linux-dbgsym`
  - Install (apt): `sudo apt install libzfsbootenv1linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfsbootenv1linux (= 2.0.5-pve1), libzfsbootenv1linux (= 2.1.1-pve1), libzfsbootenv1linux (= 2.1.1-pve2), libzfsbootenv1linux (= 2.1.1-pve3), libzfsbootenv1linux (= 2.1.11-pve1), libzfsbootenv1linux (= 2.1.14-pve1), libzfsbootenv1linux (= 2.1.15-pve1), libzfsbootenv1linux (= 2.1.2-pve1), libzfsbootenv1linux (= 2.1.4-pve1), libzfsbootenv1linux (= 2.1.5-pve1), libzfsbootenv1linux (= 2.1.6-pve1), libzfsbootenv1linux (= 2.1.7-pve1), libzfsbootenv1linux (= 2.1.7-pve2), libzfsbootenv1linux (= 2.1.7-pve3), libzfsbootenv1linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libzfslinux-dev**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS filesystem development files for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfslinux-dev`
  - Install (apt): `sudo apt install libzfslinux-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libdevel
  - Priority: optional
  - depends: libnvpair3linux (= 2.0.4-pve1), libnvpair3linux (= 2.0.5-pve1), libnvpair3linux (= 2.1.1-pve1), libnvpair3linux (= 2.1.1-pve2), libnvpair3linux (= 2.1.1-pve3), libnvpair3linux (= 2.1.11-pve1), libnvpair3linux (= 2.1.14-pve1), libnvpair3linux (= 2.1.15-pve1), libnvpair3linux (= 2.1.2-pve1), libnvpair3linux (= 2.1.4-pve1), libnvpair3linux (= 2.1.5-pve1), libnvpair3linux (= 2.1.6-pve1), libnvpair3linux (= 2.1.7-pve1), libnvpair3linux (= 2.1.7-pve2), libnvpair3linux (= 2.1.7-pve3), libnvpair3linux (= 2.1.9-pve1), libssl-dev | libssl1.0-dev, libuutil3linux (= 2.0.4-pve1), libuutil3linux (= 2.0.5-pve1), libuutil3linux (= 2.1.1-pve1), libuutil3linux (= 2.1.1-pve2), libuutil3linux (= 2.1.1-pve3), libuutil3linux (= 2.1.11-pve1), libuutil3linux (= 2.1.14-pve1), libuutil3linux (= 2.1.15-pve1), libuutil3linux (= 2.1.2-pve1), libuutil3linux (= 2.1.4-pve1), libuutil3linux (= 2.1.5-pve1), libuutil3linux (= 2.1.6-pve1), libuutil3linux (= 2.1.7-pve1), libuutil3linux (= 2.1.7-pve2), libuutil3linux (= 2.1.7-pve3), libuutil3linux (= 2.1.9-pve1), libzfs4linux (= 2.0.4-pve1), libzfs4linux (= 2.0.5-pve1), libzfs4linux (= 2.1.1-pve1), libzfs4linux (= 2.1.1-pve2), libzfs4linux (= 2.1.1-pve3), libzfs4linux (= 2.1.11-pve1), libzfs4linux (= 2.1.14-pve1), libzfs4linux (= 2.1.15-pve1), libzfs4linux (= 2.1.2-pve1), libzfs4linux (= 2.1.4-pve1), libzfs4linux (= 2.1.5-pve1), libzfs4linux (= 2.1.6-pve1), libzfs4linux (= 2.1.7-pve1), libzfs4linux (= 2.1.7-pve2), libzfs4linux (= 2.1.7-pve3), libzfs4linux (= 2.1.9-pve1), libzfsbootenv1linux (= 2.0.4-pve1), libzfsbootenv1linux (= 2.0.5-pve1), libzfsbootenv1linux (= 2.1.1-pve1), libzfsbootenv1linux (= 2.1.1-pve2), libzfsbootenv1linux (= 2.1.1-pve3), libzfsbootenv1linux (= 2.1.11-pve1), libzfsbootenv1linux (= 2.1.14-pve1), libzfsbootenv1linux (= 2.1.15-pve1), libzfsbootenv1linux (= 2.1.2-pve1), libzfsbootenv1linux (= 2.1.4-pve1), libzfsbootenv1linux (= 2.1.5-pve1), libzfsbootenv1linux (= 2.1.6-pve1), libzfsbootenv1linux (= 2.1.7-pve1), libzfsbootenv1linux (= 2.1.7-pve2), libzfsbootenv1linux (= 2.1.7-pve3), libzfsbootenv1linux (= 2.1.9-pve1), libzpool4linux (= 2.0.4-pve1), libzpool4linux (= 2.0.5-pve1), libzpool5linux (= 2.1.1-pve1), libzpool5linux (= 2.1.1-pve2), libzpool5linux (= 2.1.1-pve3), libzpool5linux (= 2.1.11-pve1), libzpool5linux (= 2.1.14-pve1), libzpool5linux (= 2.1.15-pve1), libzpool5linux (= 2.1.2-pve1), libzpool5linux (= 2.1.4-pve1), libzpool5linux (= 2.1.5-pve1), libzpool5linux (= 2.1.6-pve1), libzpool5linux (= 2.1.7-pve1), libzpool5linux (= 2.1.7-pve2), libzpool5linux (= 2.1.7-pve3), libzpool5linux (= 2.1.9-pve1)
  - provides: libnvpair-dev, libuutil-dev

  </details>

- **libzpool3linux**
  - Latest version: 2.0.1-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS pool library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzpool3linux`
  - Install (apt): `sudo apt install libzpool3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libnvpair2linux (>= 2.0.1), libzfs3linux (>= 2.0.1), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool2linux
  - replaces: libzpool2, libzpool2linux

  </details>

- **libzpool4linux**
  - Latest version: 2.0.5-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS pool library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzpool4linux`
  - Install (apt): `sudo apt install libzpool4linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool2linux, libzpool3linux, libzpool4
  - replaces: libzpool2, libzpool2linux, libzpool3linux, libzpool4

  </details>

- **libzpool4linux-dbgsym**
  - Latest version: 2.0.5-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libzpool4linux
  - Install: `sudo apt-get install libzpool4linux-dbgsym`
  - Install (apt): `sudo apt install libzpool4linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzpool4linux (= 2.0.5-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **libzpool5linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS pool library for Linux
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzpool5linux`
  - Install (apt): `sudo apt install libzpool5linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool2linux, libzpool3linux, libzpool4
  - replaces: libzpool2, libzpool2linux, libzpool3linux, libzpool4

  </details>

- **libzpool5linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for libzpool5linux
  - Install: `sudo apt-get install libzpool5linux-dbgsym`
  - Install (apt): `sudo apt install libzpool5linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzpool5linux (= 2.1.1-pve1), libzpool5linux (= 2.1.1-pve2), libzpool5linux (= 2.1.1-pve3), libzpool5linux (= 2.1.11-pve1), libzpool5linux (= 2.1.14-pve1), libzpool5linux (= 2.1.15-pve1), libzpool5linux (= 2.1.2-pve1), libzpool5linux (= 2.1.4-pve1), libzpool5linux (= 2.1.5-pve1), libzpool5linux (= 2.1.6-pve1), libzpool5linux (= 2.1.7-pve1), libzpool5linux (= 2.1.7-pve2), libzpool5linux (= 2.1.7-pve3), libzpool5linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **linux-tools-5.10**
  - Latest version: 5.10.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 5.10
  - Install: `sudo apt-get install linux-tools-5.10`
  - Install (apt): `sudo apt install linux-tools-5.10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.28), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-5.10-dbgsym**
  - Latest version: 5.10.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-5.10
  - Install: `sudo apt-get install linux-tools-5.10-dbgsym`
  - Install (apt): `sudo apt install linux-tools-5.10-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-5.10 (= 5.10.6-1)

  </details>

- **linux-tools-5.11**
  - Latest version: 5.11.22-12
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 5.11
  - Install: `sudo apt-get install linux-tools-5.11`
  - Install (apt): `sudo apt install linux-tools-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.28), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-5.11-dbgsym**
  - Latest version: 5.11.22-12
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-5.11
  - Install: `sudo apt-get install linux-tools-5.11-dbgsym`
  - Install (apt): `sudo apt install linux-tools-5.11-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-5.11 (= 5.11.22-1), linux-tools-5.11 (= 5.11.22-10), linux-tools-5.11 (= 5.11.22-11), linux-tools-5.11 (= 5.11.22-12), linux-tools-5.11 (= 5.11.22-2), linux-tools-5.11 (= 5.11.22-3), linux-tools-5.11 (= 5.11.22-4), linux-tools-5.11 (= 5.11.22-5), linux-tools-5.11 (= 5.11.22-6), linux-tools-5.11 (= 5.11.22-7), linux-tools-5.11 (= 5.11.22-8), linux-tools-5.11 (= 5.11.22-9)

  </details>

- **linux-tools-5.13**
  - Latest version: 5.13.19-15
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 5.13
  - Install: `sudo apt-get install linux-tools-5.13`
  - Install (apt): `sudo apt install linux-tools-5.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.28), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-5.13-dbgsym**
  - Latest version: 5.13.19-15
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-5.13
  - Install: `sudo apt-get install linux-tools-5.13-dbgsym`
  - Install (apt): `sudo apt install linux-tools-5.13-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-5.13 (= 5.13.14-1), linux-tools-5.13 (= 5.13.18-1), linux-tools-5.13 (= 5.13.19-1), linux-tools-5.13 (= 5.13.19-10), linux-tools-5.13 (= 5.13.19-11), linux-tools-5.13 (= 5.13.19-12), linux-tools-5.13 (= 5.13.19-13), linux-tools-5.13 (= 5.13.19-14), linux-tools-5.13 (= 5.13.19-15), linux-tools-5.13 (= 5.13.19-2), linux-tools-5.13 (= 5.13.19-3), linux-tools-5.13 (= 5.13.19-4), linux-tools-5.13 (= 5.13.19-6), linux-tools-5.13 (= 5.13.19-7), linux-tools-5.13 (= 5.13.19-8), linux-tools-5.13 (= 5.13.19-9)

  </details>

- **linux-tools-5.15**
  - Latest version: 5.15.158-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 5.15
  - Install: `sudo apt-get install linux-tools-5.15`
  - Install (apt): `sudo apt install linux-tools-5.15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.28), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-5.15-dbgsym**
  - Latest version: 5.15.158-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-5.15
  - Install: `sudo apt-get install linux-tools-5.15-dbgsym`
  - Install (apt): `sudo apt install linux-tools-5.15-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-5.15 (= 5.15.102-1), linux-tools-5.15 (= 5.15.104-1), linux-tools-5.15 (= 5.15.104-2), linux-tools-5.15 (= 5.15.107-1), linux-tools-5.15 (= 5.15.107-2), linux-tools-5.15 (= 5.15.108-1), linux-tools-5.15 (= 5.15.108-2), linux-tools-5.15 (= 5.15.111-1), linux-tools-5.15 (= 5.15.116-1), linux-tools-5.15 (= 5.15.12-2), linux-tools-5.15 (= 5.15.12-3), linux-tools-5.15 (= 5.15.126-1), linux-tools-5.15 (= 5.15.131-1), linux-tools-5.15 (= 5.15.131-2), linux-tools-5.15 (= 5.15.131-3), linux-tools-5.15 (= 5.15.136-1), linux-tools-5.15 (= 5.15.143-1), linux-tools-5.15 (= 5.15.149-1), linux-tools-5.15 (= 5.15.152-1), linux-tools-5.15 (= 5.15.158-1), linux-tools-5.15 (= 5.15.158-2), linux-tools-5.15 (= 5.15.17-1), linux-tools-5.15 (= 5.15.19-1), linux-tools-5.15 (= 5.15.19-2), linux-tools-5.15 (= 5.15.19-3), linux-tools-5.15 (= 5.15.27-1), linux-tools-5.15 (= 5.15.30-1), linux-tools-5.15 (= 5.15.30-3), linux-tools-5.15 (= 5.15.35-1), linux-tools-5.15 (= 5.15.35-2), linux-tools-5.15 (= 5.15.35-3), linux-tools-5.15 (= 5.15.35-4), linux-tools-5.15 (= 5.15.35-5), linux-tools-5.15 (= 5.15.35-6), linux-tools-5.15 (= 5.15.39-1), linux-tools-5.15 (= 5.15.39-2), linux-tools-5.15 (= 5.15.39-3), linux-tools-5.15 (= 5.15.39-4), linux-tools-5.15 (= 5.15.5-1), linux-tools-5.15 (= 5.15.53-1), linux-tools-5.15 (= 5.15.60-1), linux-tools-5.15 (= 5.15.60-2), linux-tools-5.15 (= 5.15.64-1), linux-tools-5.15 (= 5.15.7-1), linux-tools-5.15 (= 5.15.74-1), linux-tools-5.15 (= 5.15.83-1), linux-tools-5.15 (= 5.15.85-1)

  </details>

- **linux-tools-5.19**
  - Latest version: 5.19.17-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 5.19
  - Install: `sudo apt-get install linux-tools-5.19`
  - Install (apt): `sudo apt install linux-tools-5.19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.30), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-5.19-dbgsym**
  - Latest version: 5.19.17-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-5.19
  - Install: `sudo apt-get install linux-tools-5.19-dbgsym`
  - Install (apt): `sudo apt install linux-tools-5.19-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-5.19 (= 5.19.17-1), linux-tools-5.19 (= 5.19.17-2), linux-tools-5.19 (= 5.19.7-1), linux-tools-5.19 (= 5.19.7-2)

  </details>

- **linux-tools-6.1**
  - Latest version: 6.1.15-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.1
  - Install: `sudo apt-get install linux-tools-6.1`
  - Install (apt): `sudo apt install linux-tools-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.30), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.1-dbgsym**
  - Latest version: 6.1.15-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.1
  - Install: `sudo apt-get install linux-tools-6.1-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.1 (= 6.1.0-1), linux-tools-6.1 (= 6.1.10-1), linux-tools-6.1 (= 6.1.14-1), linux-tools-6.1 (= 6.1.15-1), linux-tools-6.1 (= 6.1.2-1), linux-tools-6.1 (= 6.1.6-1)

  </details>

- **linux-tools-6.2**
  - Latest version: 6.2.16-20~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.2
  - Install: `sudo apt-get install linux-tools-6.2`
  - Install (apt): `sudo apt install linux-tools-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.30), libcap2 (>= 1:2.10), libdw1 (>= 0.158), libdw1 (>= 0.160), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.4.0), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.2-dbgsym**
  - Latest version: 6.2.16-20~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.2
  - Install: `sudo apt-get install linux-tools-6.2-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.2-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.2 (= 6.2.11-1), linux-tools-6.2 (= 6.2.11-2), linux-tools-6.2 (= 6.2.16-11~bpo11+1), linux-tools-6.2 (= 6.2.16-11~bpo11+2), linux-tools-6.2 (= 6.2.16-20~bpo11+1), linux-tools-6.2 (= 6.2.16-4~bpo11+1), linux-tools-6.2 (= 6.2.2-1), linux-tools-6.2 (= 6.2.6-1), linux-tools-6.2 (= 6.2.9-1)

  </details>

- **logsave**
  - Latest version: 1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: save the output of a command in a log file
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install logsave`
  - Install (apt): `sudo apt install logsave`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14)
  - breaks: e2fsprogs (<< 1.45.3-1)
  - replaces: e2fsprogs (<< 1.45.3-1)

  </details>

- **lxc-pve**
  - Latest version: 5.0.2-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux containers userspace tools
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxc-pve`
  - Install (apt): `sudo apt install lxc-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apparmor, bridge-utils, criu (>= 1.5.2-1), libapparmor1 (>= 2.6~devel), libc6 (>= 2.27), libc6 (>= 2.28), libcap2 (>= 1:2.10), libgcc-s1 (>= 3.3.1), libgnutlsxx28, libseccomp2 (>= 2.5.0), libssl1.1 (>= 1.1.0), libsystemd0 (>= 237), lxcfs, python3, uidmap
  - conflicts: liblxc1, lxc
  - breaks: pve-container (<< 3.1-1)
  - replaces: liblxc1, lxc
  - provides: liblxc1, lxc

  </details>

- **lxc-pve-dbgsym**
  - Latest version: 5.0.2-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for lxc-pve
  - Install: `sudo apt-get install lxc-pve-dbgsym`
  - Install (apt): `sudo apt install lxc-pve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxc-pve (= 4.0.11-1), lxc-pve (= 4.0.12-1), lxc-pve (= 4.0.9-1), lxc-pve (= 4.0.9-2), lxc-pve (= 4.0.9-3), lxc-pve (= 4.0.9-4), lxc-pve (= 5.0.0-1), lxc-pve (= 5.0.0-2), lxc-pve (= 5.0.0-3), lxc-pve (= 5.0.2-1), lxc-pve (= 5.0.2-2)

  </details>

- **lxc-pve-dev**
  - Latest version: 5.0.2-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux Containers userspace tools (development)
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxc-pve-dev`
  - Install (apt): `sudo apt install lxc-pve-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: lxc-pve (= 4.0.11-1), lxc-pve (= 4.0.12-1), lxc-pve (= 4.0.9-1), lxc-pve (= 4.0.9-2), lxc-pve (= 4.0.9-3), lxc-pve (= 4.0.9-4), lxc-pve (= 5.0.0-1), lxc-pve (= 5.0.0-2), lxc-pve (= 5.0.0-3), lxc-pve (= 5.0.2-1), lxc-pve (= 5.0.2-2)

  </details>

- **lxcfs**
  - Latest version: 5.0.3-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: LXC userspace filesystem
  - Homepage: https://linuxcontainers.org
  - Install: `sudo apt-get install lxcfs`
  - Install (apt): `sudo apt install lxcfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.28), libfuse2 (>= 2.6), libfuse2 (>= 2.8), libgcc-s1 (>= 3.3.1)

  </details>

- **lxcfs-dbgsym**
  - Latest version: 5.0.3-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for lxcfs
  - Install: `sudo apt-get install lxcfs-dbgsym`
  - Install (apt): `sudo apt install lxcfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxcfs (= 4.0.11-pve1), lxcfs (= 4.0.12-pve1), lxcfs (= 4.0.8-pve1), lxcfs (= 4.0.8-pve2), lxcfs (= 5.0.3-pve1)

  </details>


### <a id="packages-N"></a>N

- **novnc-pve**
  - Latest version: 1.4.0-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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


### <a id="packages-O"></a>O

- **ocfs2-tools**
  - Latest version: 1.8.7-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: tools for managing OCFS2 cluster filesystems
  - Homepage: https://ocfs2.wiki.kernel.org/
  - Install: `sudo apt-get install ocfs2-tools`
  - Install (apt): `sudo apt install ocfs2-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian HA Maintainers <debian-ha-maintainers@alioth-lists.debian.net>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, libaio1 (>= 0.3.93), libc6 (>= 2.14), libcmap4 (>= 1.99.9), libcom-err2 (>= 1.43.9), libdlm3 (>= 3.0.2), libglib2.0-0 (>= 2.24.0), libreadline8 (>= 6.0), libuuid1 (>= 2.16), lsb-base (>= 3.0-6), psmisc
  - preDepends: init-system-helpers (>= 1.54~)

  </details>

- **ocfs2-tools-dbgsym**
  - Latest version: 1.8.7-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for ocfs2-tools
  - Install: `sudo apt-get install ocfs2-tools-dbgsym`
  - Install (apt): `sudo apt install ocfs2-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian HA Maintainers <debian-ha-maintainers@alioth-lists.debian.net>
  - Section: debug
  - Priority: optional
  - depends: ocfs2-tools (= 1.8.7-1~bpo11+1)

  </details>

- **ocfs2-tools-dev**
  - Latest version: 1.8.7-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: tools for managing OCFS2 cluster filesystems - development files
  - Homepage: https://ocfs2.wiki.kernel.org/
  - Install: `sudo apt-get install ocfs2-tools-dev`
  - Install (apt): `sudo apt install ocfs2-tools-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian HA Maintainers <debian-ha-maintainers@alioth-lists.debian.net>
  - Section: devel
  - Priority: optional

  </details>

- **openvswitch-common**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch common components
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-common`
  - Install (apt): `sudo apt install openvswitch-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: iproute2, libc6 (>= 2.29), libcap-ng0 (>= 0.7.9), libssl1.1 (>= 1.1.0), libunbound8 (>= 1.8.0), openssl, python3-six, python3:any
  - suggests: ethtool
  - breaks: openvswitch-switch (<< 2.10.0+2018.08.28+git.8ca7c82b7d+ds1), openvswitch-test (<< 2.8.0), openvswitch-testcontroller (<< 2.8.0), openvswitch-vtep (<< 2.10.0+2018.08.28+git.8ca7c82b7d+ds1), ovn-central (<< 2.8.0), ovn-common (<< 2.8.0), ovn-controller-vtep (<< 2.8.0), ovn-docker (<< 2.8.0), ovn-host (<< 2.8.0)
  - replaces: openvswitch-switch (<< 2.10.0+2018.08.28+git.8ca7c82b7d+ds1), openvswitch-test (<< 2.8.0), openvswitch-testcontroller (<< 2.8.0), openvswitch-vtep (<< 2.10.0+2018.08.28+git.8ca7c82b7d+ds1), ovn-central (<< 2.8.0), ovn-common (<< 2.8.0), ovn-controller-vtep (<< 2.8.0), ovn-docker (<< 2.8.0), ovn-host (<< 2.8.0)
  - provides: openvswitch-test, ovn-common, ovn-docker

  </details>

- **openvswitch-dbg**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Debug symbols for Open vSwitch packages
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-dbg`
  - Install (apt): `sudo apt install openvswitch-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: openvswitch-common (= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (= 2.15.0+ds1-2+deb11u3.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u2.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u3.1)
  - conflicts: openvswitch-testcontroller (<< 2.15.0+ds1-2+deb11u2.1), openvswitch-testcontroller (<< 2.15.0+ds1-2+deb11u3.1), openvswitch-testcontroller (>> 2.15.0+ds1-2+deb11u2.1), openvswitch-testcontroller (>> 2.15.0+ds1-2+deb11u3.1)

  </details>

- **openvswitch-dev**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch development package
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-dev`
  - Install (apt): `sudo apt install openvswitch-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: openvswitch-common (>= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (>= 2.15.0+ds1-2+deb11u3.1)

  </details>

- **openvswitch-ipsec**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch IPsec tunneling support
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-ipsec`
  - Install (apt): `sudo apt install openvswitch-ipsec`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: iproute2, lsb-base, openvswitch-common (= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (= 2.15.0+ds1-2+deb11u3.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u2.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u3.1), python3-openvswitch (= 2.15.0+ds1-2+deb11u2.1), python3-openvswitch (= 2.15.0+ds1-2+deb11u3.1), strongswan

  </details>

- **openvswitch-pki**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch public key infrastructure dependency package
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-pki`
  - Install (apt): `sudo apt install openvswitch-pki`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: openvswitch-common (<< 2.15.0+ds1-2+deb11u2.1.1~), openvswitch-common (<< 2.15.0+ds1-2+deb11u3.1.1~), openvswitch-common (>= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (>= 2.15.0+ds1-2+deb11u3.1)

  </details>

- **openvswitch-switch**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch switch implementations
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-switch`
  - Install (apt): `sudo apt install openvswitch-switch`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: kmod, lsb-base, netbase, openvswitch-common (= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (= 2.15.0+ds1-2+deb11u3.1), procps, uuid-runtime

  </details>

- **openvswitch-switch-dpdk**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: DPDK enabled Open vSwitch switch implementation
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-switch-dpdk`
  - Install (apt): `sudo apt install openvswitch-switch-dpdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: dpdk, libc6 (>= 2.29), libcap-ng0 (>= 0.7.9), librte-eal21 (>= 20.11), librte-ethdev21 (>= 20.11), librte-mbuf21 (>= 20.11), librte-mempool21 (>= 20.11), librte-meter21 (>= 20.11), librte-vhost21 (>= 20.11), libssl1.1 (>= 1.1.0), libunbound8 (>= 1.8.0), openvswitch-common (>= 2.15.0+ds1), openvswitch-switch (= 2.15.0+ds1-2+deb11u2.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u3.1)

  </details>

- **openvswitch-testcontroller**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Simple controller for testing OpenFlow setups
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-testcontroller`
  - Install (apt): `sudo apt install openvswitch-testcontroller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: lsb-base, openvswitch-common (= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (= 2.15.0+ds1-2+deb11u3.1), openvswitch-pki (<< 2.15.0+ds1-2+deb11u2.1.1~), openvswitch-pki (<< 2.15.0+ds1-2+deb11u3.1.1~), openvswitch-pki (>= 2.15.0+ds1-2+deb11u2.1), openvswitch-pki (>= 2.15.0+ds1-2+deb11u3.1)

  </details>

- **openvswitch-vtep**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Open vSwitch VTEP utilities
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install openvswitch-vtep`
  - Install (apt): `sudo apt install openvswitch-vtep`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: net
  - Priority: optional
  - depends: lsb-base, openvswitch-common (= 2.15.0+ds1-2+deb11u2.1), openvswitch-common (= 2.15.0+ds1-2+deb11u3.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u2.1), openvswitch-switch (= 2.15.0+ds1-2+deb11u3.1), python3-openvswitch (<< 2.15.0+ds1-2+deb11u2.1.1~), python3-openvswitch (<< 2.15.0+ds1-2+deb11u3.1.1~), python3-openvswitch (>= 2.15.0+ds1-2+deb11u2.1), python3-openvswitch (>= 2.15.0+ds1-2+deb11u3.1)

  </details>


### <a id="packages-P"></a>P

- **proxmox-archive-keyring**
  - Latest version: 2.2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox APT archive keyring
  - Install: `sudo apt-get install proxmox-archive-keyring`
  - Install (apt): `sudo apt install proxmox-archive-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **proxmox-backup-client**
  - Latest version: 2.4.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Backup Client tools
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-client`
  - Install (apt): `sudo apt install proxmox-backup-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.25), libc6 (>= 2.28), libc6 (>= 2.29), libfuse3-3 (>= 3.2.3), libgcc-s1 (>= 4.2), libgcc1 (>= 1:4.2), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), libstdc++6 (>= 5.2), libzstd1 (>= 1.3.2), libzstd1 (>= 1.4.0), qrencode

  </details>

- **proxmox-backup-client-dbgsym**
  - Latest version: 2.4.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-backup-client
  - Install: `sudo apt-get install proxmox-backup-client-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-client-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-client (= 2.0.0-1), proxmox-backup-client (= 2.0.1-1), proxmox-backup-client (= 2.0.10-1), proxmox-backup-client (= 2.0.11-1), proxmox-backup-client (= 2.0.13-1), proxmox-backup-client (= 2.0.14-1), proxmox-backup-client (= 2.0.3-1), proxmox-backup-client (= 2.0.4-1), proxmox-backup-client (= 2.0.5-1), proxmox-backup-client (= 2.0.5-2), proxmox-backup-client (= 2.0.6-1), proxmox-backup-client (= 2.0.7-1), proxmox-backup-client (= 2.0.8-1), proxmox-backup-client (= 2.0.9-1), proxmox-backup-client (= 2.0.9-2), proxmox-backup-client (= 2.1.1-1), proxmox-backup-client (= 2.1.2-1), proxmox-backup-client (= 2.1.3-1), proxmox-backup-client (= 2.1.4-1), proxmox-backup-client (= 2.1.5-1), proxmox-backup-client (= 2.1.6-1), proxmox-backup-client (= 2.1.7-1), proxmox-backup-client (= 2.1.8-1), proxmox-backup-client (= 2.2.1-1), proxmox-backup-client (= 2.2.2-2), proxmox-backup-client (= 2.2.3-1), proxmox-backup-client (= 2.2.4-1), proxmox-backup-client (= 2.2.5-1), proxmox-backup-client (= 2.2.6-1), proxmox-backup-client (= 2.2.7-1), proxmox-backup-client (= 2.2.8-1), proxmox-backup-client (= 2.3.1-1), proxmox-backup-client (= 2.3.2-1), proxmox-backup-client (= 2.3.3-1), proxmox-backup-client (= 2.4.1-1), proxmox-backup-client (= 2.4.2-1), proxmox-backup-client (= 2.4.3-1), proxmox-backup-client (= 2.4.4-1), proxmox-backup-client (= 2.4.6-1), proxmox-backup-client (= 2.4.7-1)

  </details>

- **proxmox-backup-file-restore**
  - Latest version: 2.4.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Backup single file restore tools for pxar and block device backups
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-backup-file-restore`
  - Install (apt): `sudo apt install proxmox-backup-file-restore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.18), libc6 (>= 2.28), libc6 (>= 2.29), libgcc-s1 (>= 4.2), libgcc1 (>= 1:4.2), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), libstdc++6 (>= 5.2), libuuid1 (>= 2.16), libzstd1 (>= 1.3.2), libzstd1 (>= 1.4.0)
  - recommends: proxmox-backup-restore-image, pve-qemu-kvm (>= 5.0.0-9)
  - breaks: proxmox-backup-restore-image (<< 0.3.1)

  </details>

- **proxmox-backup-file-restore-dbgsym**
  - Latest version: 2.4.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-backup-file-restore
  - Install: `sudo apt-get install proxmox-backup-file-restore-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-file-restore-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-file-restore (= 1.1.7-1), proxmox-backup-file-restore (= 2.0.0-1), proxmox-backup-file-restore (= 2.0.1-1), proxmox-backup-file-restore (= 2.0.10-1), proxmox-backup-file-restore (= 2.0.11-1), proxmox-backup-file-restore (= 2.0.13-1), proxmox-backup-file-restore (= 2.0.14-1), proxmox-backup-file-restore (= 2.0.3-1), proxmox-backup-file-restore (= 2.0.4-1), proxmox-backup-file-restore (= 2.0.5-1), proxmox-backup-file-restore (= 2.0.5-2), proxmox-backup-file-restore (= 2.0.6-1), proxmox-backup-file-restore (= 2.0.7-1), proxmox-backup-file-restore (= 2.0.8-1), proxmox-backup-file-restore (= 2.0.9-1), proxmox-backup-file-restore (= 2.0.9-2), proxmox-backup-file-restore (= 2.1.1-1), proxmox-backup-file-restore (= 2.1.2-1), proxmox-backup-file-restore (= 2.1.3-1), proxmox-backup-file-restore (= 2.1.4-1), proxmox-backup-file-restore (= 2.1.5-1), proxmox-backup-file-restore (= 2.1.6-1), proxmox-backup-file-restore (= 2.1.7-1), proxmox-backup-file-restore (= 2.1.8-1), proxmox-backup-file-restore (= 2.2.1-1), proxmox-backup-file-restore (= 2.2.2-2), proxmox-backup-file-restore (= 2.2.3-1), proxmox-backup-file-restore (= 2.2.4-1), proxmox-backup-file-restore (= 2.2.5-1), proxmox-backup-file-restore (= 2.2.6-1), proxmox-backup-file-restore (= 2.2.7-1), proxmox-backup-file-restore (= 2.2.8-1), proxmox-backup-file-restore (= 2.3.1-1), proxmox-backup-file-restore (= 2.3.2-1), proxmox-backup-file-restore (= 2.3.3-1), proxmox-backup-file-restore (= 2.4.1-1), proxmox-backup-file-restore (= 2.4.2-1), proxmox-backup-file-restore (= 2.4.3-1), proxmox-backup-file-restore (= 2.4.4-1), proxmox-backup-file-restore (= 2.4.6-1), proxmox-backup-file-restore (= 2.4.7-1)

  </details>

- **proxmox-backup-restore-image**
  - Latest version: 0.3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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

  </details>

- **proxmox-backup-restore-image-debug**
  - Latest version: 0.3.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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

  </details>

- **proxmox-installer**
  - Latest version: 7.4-2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Installer for Proxmox Projects
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-installer`
  - Install (apt): `sudo apt install proxmox-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: chrony, geoip-bin, libgtk3-webkit2-perl, perl:any, proxmox-kernel-helper, pve-kernel-helper, squashfs-tools
  - breaks: pbs-installer (<< 7~), pve-installer (<< 7~)
  - replaces: pbs-installer (<< 7~), pve-installer (<< 7~)

  </details>

- **proxmox-kernel-helper**
  - Latest version: 7.4-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Function for various kernel maintenance tasks.
  - Install: `sudo apt-get install proxmox-kernel-helper`
  - Install (apt): `sudo apt install proxmox-kernel-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dosfstools, gdisk, systemd, udev
  - breaks: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - replaces: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - provides: pve-kernel-helper

  </details>

- **proxmox-mail-forward**
  - Latest version: 0.1.1-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox mail forward helper
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-mail-forward`
  - Install (apt): `sudo apt install proxmox-mail-forward`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: rust
  - Priority: optional
  - depends: libc6 (>= 2.29), libgcc-s1 (>= 4.2)

  </details>

- **proxmox-mail-forward-dbgsym**
  - Latest version: 0.1.1-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-mail-forward
  - Install: `sudo apt-get install proxmox-mail-forward-dbgsym`
  - Install (apt): `sudo apt install proxmox-mail-forward-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mail-forward (= 0.1.0-1), proxmox-mail-forward (= 0.1.1-1)

  </details>

- **proxmox-mini-journalreader**
  - Latest version: 1.3-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Minimal systemd Journal Reader
  - Install: `sudo apt-get install proxmox-mini-journalreader`
  - Install (apt): `sudo apt install proxmox-mini-journalreader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.4), libsystemd0

  </details>

- **proxmox-mini-journalreader-dbgsym**
  - Latest version: 1.3-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-mini-journalreader
  - Install: `sudo apt-get install proxmox-mini-journalreader-dbgsym`
  - Install (apt): `sudo apt install proxmox-mini-journalreader-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mini-journalreader (= 1.2-1), proxmox-mini-journalreader (= 1.3-1)

  </details>

- **proxmox-offline-mirror**
  - Latest version: 0.5.2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox offline repository mirror and subscription key manager
  - Install: `sudo apt-get install proxmox-offline-mirror`
  - Install (apt): `sudo apt install proxmox-offline-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.28), libgcc-s1 (>= 4.2), libgmp10, libhogweed6, liblzma5 (>= 5.1.1alpha+20120614), libnettle8, libssl1.1 (>= 1.1.1), proxmox-archive-keyring, proxmox-offline-mirror-docs

  </details>

- **proxmox-offline-mirror-dbgsym**
  - Latest version: 0.5.2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-offline-mirror
  - Install: `sudo apt-get install proxmox-offline-mirror-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror (= 0.3.0-1), proxmox-offline-mirror (= 0.4.0-1), proxmox-offline-mirror (= 0.5.0-1), proxmox-offline-mirror (= 0.5.1-1), proxmox-offline-mirror (= 0.5.2)

  </details>

- **proxmox-offline-mirror-docs**
  - Latest version: 0.5.2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 0.5.2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox offline repository mirror and subscription key manager helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.29), libgcc-s1 (>= 4.2), libgmp10, libhogweed6, liblzma5 (>= 5.1.1alpha+20110809), libnettle8, libssl1.1 (>= 1.1.0), proxmox-archive-keyring, proxmox-offline-mirror-docs
  - breaks: proxmox-offline-mirror (<< 0.3.0~)
  - replaces: proxmox-offline-mirror (<< 0.3.0~)

  </details>

- **proxmox-offline-mirror-helper-dbgsym**
  - Latest version: 0.5.2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-offline-mirror-helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror-helper (= 0.3.0-1), proxmox-offline-mirror-helper (= 0.4.0-1), proxmox-offline-mirror-helper (= 0.5.0-1), proxmox-offline-mirror-helper (= 0.5.1-1), proxmox-offline-mirror-helper (= 0.5.2)

  </details>

- **proxmox-ve**
  - Latest version: 7.4-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Virtual Environment
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-ve`
  - Install (apt): `sudo apt install proxmox-ve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apt, openssh-client, openssh-server, proxmox-archive-keyring, proxmox-kernel-helper, pve-kernel-5.11, pve-kernel-5.13, pve-kernel-5.13 | pve-kernel-5.15, pve-kernel-5.15, pve-kernel-helper, pve-manager, pve-qemu-kvm, qemu-server, spiceterm, vncterm
  - conflicts: proxmox-ve-3.10.0, proxmox-virtual-environment, pve-kernel
  - replaces: proxmox-ve-3.10.0, proxmox-virtual-environment, pve-kernel
  - provides: proxmox-virtual-environment

  </details>

- **proxmox-websocket-tunnel**
  - Latest version: 0.1.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox websocket tunneling helper
  - Install: `sudo apt-get install proxmox-websocket-tunnel`
  - Install (apt): `sudo apt install proxmox-websocket-tunnel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.25), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 4.2), libssl1.1 (>= 1.1.0), libzstd1 (>= 1.4.0)

  </details>

- **proxmox-websocket-tunnel-dbgsym**
  - Latest version: 0.1.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for proxmox-websocket-tunnel
  - Install: `sudo apt-get install proxmox-websocket-tunnel-dbgsym`
  - Install (apt): `sudo apt install proxmox-websocket-tunnel-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-websocket-tunnel (= 0.1.0-1)

  </details>

- **proxmox-widget-toolkit**
  - Latest version: 3.7.4
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: ExtJS Helper Classes for Proxmox
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-widget-toolkit`
  - Install (apt): `sudo apt install proxmox-widget-toolkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>

- **proxmox-widget-toolkit-dev**
  - Latest version: 3.1-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Development dependencies for Proxmox Projects
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-widget-toolkit-dev`
  - Install (apt): `sudo apt install proxmox-widget-toolkit-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: web
  - Priority: optional

  </details>

- **pve-cluster**
  - Latest version: 7.3-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: "pmxcfs" distributed cluster filesystem for Proxmox Virtual Environment.
  - Install: `sudo apt-get install pve-cluster`
  - Install (apt): `sudo apt install pve-cluster`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: corosync (>= 2.3.4-1), fuse, libc6 (>= 2.17), libcmap4 (>= 1.99.9), libcpg4 (>= 2.3.4-1), libfuse2 (>= 2.9.2-4), libglib2.0-0 (>= 2.42.1-1), libpve-common-perl (>= 6.0-7~), libqb100 (>= 2.0.1-1), libquorum5 (>= 2.3.4-1), librrd8 (>= 1.4~rc2), libsqlite3-0 (>= 3.20.0), perl, perlapi-5.32.1, sqlite3, systemd
  - breaks: libpve-access-control (<= 6.0-3), libpve-guest-common-perl (<= 3.0-2), libpve-storage-perl (<= 6.0-9), pve-container (<= 3.0-10), pve-ha-manager (<= 3.0-3), pve-manager (<= 6.0-12), qemu-server (<= 6.0-13)

  </details>

- **pve-cluster-dbgsym**
  - Latest version: 7.3-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for pve-cluster
  - Install: `sudo apt-get install pve-cluster-dbgsym`
  - Install (apt): `sudo apt install pve-cluster-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-cluster (= 7.0-2), pve-cluster (= 7.0-3), pve-cluster (= 7.0-4), pve-cluster (= 7.0-5), pve-cluster (= 7.1-2), pve-cluster (= 7.1-3), pve-cluster (= 7.2-1), pve-cluster (= 7.2-2), pve-cluster (= 7.2-3), pve-cluster (= 7.3-1), pve-cluster (= 7.3-2), pve-cluster (= 7.3-3)

  </details>

- **pve-container**
  - Latest version: 4.4-7
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE Container management tool
  - Install: `sudo apt-get install pve-container`
  - Install (apt): `sudo apt install pve-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: binutils, file, libpve-access-control (>= 7.2-5), libpve-cluster-perl, libpve-common-perl (>= 6.0-19), libpve-common-perl (>= 6.4-1), libpve-common-perl (>= 7.1-3), libpve-common-perl (>= 7.2-4), libpve-common-perl (>= 7.2-8), libpve-common-perl (>= 7.4-1), libpve-guest-common-perl (>= 3.0-9), libpve-guest-common-perl (>= 4.1-1), libpve-guest-common-perl (>= 4.2-3), libpve-storage-perl (>= 6.3-8), libpve-storage-perl (>= 7.2-10), lxc-pve, perl:any, pve-cluster (>= 4.0-8), pve-ha-manager (>= 3.0-9), pve-lxc-syscalld, xz-utils

  </details>

- **pve-doc-generator**
  - Latest version: 7.4-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 7.4-2
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 3.20230228-4~bpo11+3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: edk2 based firmware modules for virtual machines
  - Homepage: http://www.tianocore.org
  - Install: `sudo apt-get install pve-edk2-firmware`
  - Install (apt): `sudo apt install pve-edk2-firmware`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **pve-firewall**
  - Latest version: 4.3-5
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE Firewall
  - Install: `sudo apt-get install pve-firewall`
  - Install (apt): `sudo apt install pve-firewall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ebtables, ipset, iptables, libc6 (>= 2.7), libglib2.0-0 (>= 2.31.18), libnetfilter-conntrack3 (>= 1.0.1), libnetfilter-log1 (>= 0.0.15), libnfnetlink0, libpve-access-control, libpve-cluster-perl, libpve-common-perl, libpve-common-perl (>= 7.3-2), lsb-base, perl:any, pve-cluster (>= 6.1-6)
  - conflicts: ulogd

  </details>

- **pve-firewall-dbgsym**
  - Latest version: 4.3-5
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for pve-firewall
  - Install: `sudo apt-get install pve-firewall-dbgsym`
  - Install (apt): `sudo apt install pve-firewall-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-firewall (= 4.2-2), pve-firewall (= 4.2-3), pve-firewall (= 4.2-4), pve-firewall (= 4.2-5), pve-firewall (= 4.2-6), pve-firewall (= 4.2-7), pve-firewall (= 4.3-1), pve-firewall (= 4.3-2), pve-firewall (= 4.3-4), pve-firewall (= 4.3-5)

  </details>

- **pve-firmware**
  - Latest version: 3.6-6
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - conflicts: firmware-amd-graphics, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity
  - replaces: firmware-amd-graphics, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity

  </details>

- **pve-ha-manager**
  - Latest version: 3.6.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE HA Manager
  - Install: `sudo apt-get install pve-ha-manager`
  - Install (apt): `sudo apt install pve-ha-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.7), libjson-perl, libpve-cluster-perl, libpve-common-perl, libpve-rs-perl (>= 0.7.3), perl:any, pve-cluster (>= 3.0-17), pve-container, qemu-server (>= 6.0-15), systemd
  - conflicts: watchdog

  </details>

- **pve-ha-manager-dbgsym**
  - Latest version: 3.6.1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for pve-ha-manager
  - Install: `sudo apt-get install pve-ha-manager-dbgsym`
  - Install (apt): `sudo apt install pve-ha-manager-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-ha-manager (= 3.2-2), pve-ha-manager (= 3.3-1), pve-ha-manager (= 3.3-3), pve-ha-manager (= 3.3-4), pve-ha-manager (= 3.4.0), pve-ha-manager (= 3.5.0), pve-ha-manager (= 3.5.1), pve-ha-manager (= 3.6.0), pve-ha-manager (= 3.6.1)

  </details>

- **pve-ha-simulator**
  - Latest version: 3.6.1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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
  - Latest version: 7.4-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Default Proxmox VE Kernel Headers
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-headers`
  - Install (apt): `sudo apt install pve-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-5.11, pve-headers-5.13, pve-headers-5.13 | pve-headers-5.15, pve-headers-5.15

  </details>

- **pve-headers-5.10.6-1-pve**
  - Latest version: 5.10.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.10.6-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.10.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.11**
  - Latest version: 7.0-10
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11`
  - Install (apt): `sudo apt install pve-headers-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-5.11.22-1-pve, pve-headers-5.11.22-2-pve, pve-headers-5.11.22-3-pve, pve-headers-5.11.22-4-pve, pve-headers-5.11.22-5-pve, pve-headers-5.11.22-6-pve, pve-headers-5.11.22-7-pve

  </details>

- **pve-headers-5.11.0-1-pve**
  - Latest version: 5.11.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.0-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.11.12-1-pve**
  - Latest version: 5.11.12-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.12-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.11.17-1-pve**
  - Latest version: 5.11.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.17-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.11.21-1-pve**
  - Latest version: 5.11.21-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.21-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.21-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.11.22-1-pve**
  - Latest version: 5.11.22-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-2-pve**
  - Latest version: 5.11.22-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-3-pve**
  - Latest version: 5.11.22-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-3-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-4-pve**
  - Latest version: 5.11.22-9
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-4-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-5-pve**
  - Latest version: 5.11.22-10
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-5-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-6-pve**
  - Latest version: 5.11.22-11
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-6-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.22-7-pve**
  - Latest version: 5.11.22-12
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.22-7-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.22-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.11.7-1-pve**
  - Latest version: 5.11.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.11.7-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.11.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers, linux-headers-2.6

  </details>

- **pve-headers-5.13**
  - Latest version: 7.1-9
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13`
  - Install (apt): `sudo apt install pve-headers-5.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-5.13.14-1-pve, pve-headers-5.13.18-1-pve, pve-headers-5.13.19-1-pve, pve-headers-5.13.19-2-pve, pve-headers-5.13.19-3-pve, pve-headers-5.13.19-4-pve, pve-headers-5.13.19-5-pve, pve-headers-5.13.19-6-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-5.13.14-1-pve**
  - Latest version: 5.13.14-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.14-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.14-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.13.18-1-pve**
  - Latest version: 5.13.18-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.18-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.18-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.13.19-1-pve**
  - Latest version: 5.13.19-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.13.19-2-pve**
  - Latest version: 5.13.19-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.13.19-3-pve**
  - Latest version: 5.13.19-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-3-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.13.19-3-pve-amd64

  </details>

- **pve-headers-5.13.19-4-pve**
  - Latest version: 5.13.19-9
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-4-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.13.19-4-pve-amd64

  </details>

- **pve-headers-5.13.19-5-pve**
  - Latest version: 5.13.19-13
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-5-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.13.19-5-pve-amd64

  </details>

- **pve-headers-5.13.19-6-pve**
  - Latest version: 5.13.19-15
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.13.19-6-pve`
  - Install (apt): `sudo apt install pve-headers-5.13.19-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.13.19-6-pve-amd64

  </details>

- **pve-headers-5.15**
  - Latest version: 7.4-15
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15`
  - Install (apt): `sudo apt install pve-headers-5.15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-5.15.102-1-pve, pve-headers-5.15.104-1-pve, pve-headers-5.15.107-1-pve, pve-headers-5.15.107-2-pve, pve-headers-5.15.108-1-pve, pve-headers-5.15.111-1-pve, pve-headers-5.15.116-1-pve, pve-headers-5.15.12-1-pve, pve-headers-5.15.126-1-pve, pve-headers-5.15.131-1-pve, pve-headers-5.15.131-2-pve, pve-headers-5.15.136-1-pve, pve-headers-5.15.143-1-pve, pve-headers-5.15.149-1-pve, pve-headers-5.15.152-1-pve, pve-headers-5.15.158-1-pve, pve-headers-5.15.158-2-pve, pve-headers-5.15.17-1-pve, pve-headers-5.15.19-1-pve, pve-headers-5.15.19-2-pve, pve-headers-5.15.27-1-pve, pve-headers-5.15.30-1-pve, pve-headers-5.15.30-2-pve, pve-headers-5.15.35-1-pve, pve-headers-5.15.35-2-pve, pve-headers-5.15.35-3-pve, pve-headers-5.15.39-1-pve, pve-headers-5.15.39-2-pve, pve-headers-5.15.39-3-pve, pve-headers-5.15.39-4-pve, pve-headers-5.15.5-1-pve, pve-headers-5.15.53-1-pve, pve-headers-5.15.60-1-pve, pve-headers-5.15.60-2-pve, pve-headers-5.15.64-1-pve, pve-headers-5.15.7-1-pve, pve-headers-5.15.74-1-pve, pve-headers-5.15.83-1-pve, pve-headers-5.15.85-1-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-5.15.102-1-pve**
  - Latest version: 5.15.102-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.102-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.102-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.102-1-pve-amd64

  </details>

- **pve-headers-5.15.104-1-pve**
  - Latest version: 5.15.104-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.104-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.104-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.104-1-pve-amd64

  </details>

- **pve-headers-5.15.107-1-pve**
  - Latest version: 5.15.107-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.107-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.107-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.107-1-pve-amd64

  </details>

- **pve-headers-5.15.107-2-pve**
  - Latest version: 5.15.107-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.107-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.107-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.107-2-pve-amd64

  </details>

- **pve-headers-5.15.108-1-pve**
  - Latest version: 5.15.108-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.108-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.108-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.108-1-pve-amd64

  </details>

- **pve-headers-5.15.111-1-pve**
  - Latest version: 5.15.111-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.111-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.111-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.111-1-pve-amd64

  </details>

- **pve-headers-5.15.116-1-pve**
  - Latest version: 5.15.116-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.116-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.116-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.116-1-pve-amd64

  </details>

- **pve-headers-5.15.12-1-pve**
  - Latest version: 5.15.12-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.12-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.12-1-pve-amd64

  </details>

- **pve-headers-5.15.126-1-pve**
  - Latest version: 5.15.126-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.126-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.126-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.126-1-pve-amd64

  </details>

- **pve-headers-5.15.131-1-pve**
  - Latest version: 5.15.131-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.131-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.131-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.131-1-pve-amd64

  </details>

- **pve-headers-5.15.131-2-pve**
  - Latest version: 5.15.131-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.131-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.131-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.131-2-pve-amd64

  </details>

- **pve-headers-5.15.136-1-pve**
  - Latest version: 5.15.136-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.136-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.136-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.136-1-pve-amd64

  </details>

- **pve-headers-5.15.143-1-pve**
  - Latest version: 5.15.143-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.143-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.143-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.143-1-pve-amd64

  </details>

- **pve-headers-5.15.149-1-pve**
  - Latest version: 5.15.149-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.149-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.149-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.149-1-pve-amd64

  </details>

- **pve-headers-5.15.152-1-pve**
  - Latest version: 5.15.152-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.152-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.152-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.152-1-pve-amd64

  </details>

- **pve-headers-5.15.158-1-pve**
  - Latest version: 5.15.158-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.158-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.158-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.158-1-pve-amd64

  </details>

- **pve-headers-5.15.158-2-pve**
  - Latest version: 5.15.158-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.158-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.158-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-5.15.158-2-pve-amd64

  </details>

- **pve-headers-5.15.17-1-pve**
  - Latest version: 5.15.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.17-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.17-1-pve-amd64

  </details>

- **pve-headers-5.15.19-1-pve**
  - Latest version: 5.15.19-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.19-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.19-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.19-1-pve-amd64

  </details>

- **pve-headers-5.15.19-2-pve**
  - Latest version: 5.15.19-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.19-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.19-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.19-2-pve-amd64

  </details>

- **pve-headers-5.15.27-1-pve**
  - Latest version: 5.15.27-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.27-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.27-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.27-1-pve-amd64

  </details>

- **pve-headers-5.15.30-1-pve**
  - Latest version: 5.15.30-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.30-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.30-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.30-1-pve-amd64

  </details>

- **pve-headers-5.15.30-2-pve**
  - Latest version: 5.15.30-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.30-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.30-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.30-2-pve-amd64

  </details>

- **pve-headers-5.15.35-1-pve**
  - Latest version: 5.15.35-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.35-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.35-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.35-1-pve-amd64

  </details>

- **pve-headers-5.15.35-2-pve**
  - Latest version: 5.15.35-5
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.35-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.35-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.35-2-pve-amd64

  </details>

- **pve-headers-5.15.35-3-pve**
  - Latest version: 5.15.35-6
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.35-3-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.35-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.35-3-pve-amd64

  </details>

- **pve-headers-5.15.39-1-pve**
  - Latest version: 5.15.39-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.39-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.39-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.39-1-pve-amd64

  </details>

- **pve-headers-5.15.39-2-pve**
  - Latest version: 5.15.39-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.39-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.39-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.39-2-pve-amd64

  </details>

- **pve-headers-5.15.39-3-pve**
  - Latest version: 5.15.39-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.39-3-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.39-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.39-3-pve-amd64

  </details>

- **pve-headers-5.15.39-4-pve**
  - Latest version: 5.15.39-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.39-4-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.39-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.39-4-pve-amd64

  </details>

- **pve-headers-5.15.5-1-pve**
  - Latest version: 5.15.5-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.5-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.5-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers

  </details>

- **pve-headers-5.15.53-1-pve**
  - Latest version: 5.15.53-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.53-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.53-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.53-1-pve-amd64

  </details>

- **pve-headers-5.15.60-1-pve**
  - Latest version: 5.15.60-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.60-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.60-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.60-1-pve-amd64

  </details>

- **pve-headers-5.15.60-2-pve**
  - Latest version: 5.15.60-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.60-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.60-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.60-2-pve-amd64

  </details>

- **pve-headers-5.15.64-1-pve**
  - Latest version: 5.15.64-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.64-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.64-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.64-1-pve-amd64

  </details>

- **pve-headers-5.15.7-1-pve**
  - Latest version: 5.15.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.7-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.7-1-pve-amd64

  </details>

- **pve-headers-5.15.74-1-pve**
  - Latest version: 5.15.74-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.74-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.74-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.74-1-pve-amd64

  </details>

- **pve-headers-5.15.83-1-pve**
  - Latest version: 5.15.83-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.83-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.83-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.83-1-pve-amd64

  </details>

- **pve-headers-5.15.85-1-pve**
  - Latest version: 5.15.85-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.15.85-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.15.85-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.15.85-1-pve-amd64

  </details>

- **pve-headers-5.19**
  - Latest version: 7.2-15
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.19`
  - Install (apt): `sudo apt install pve-headers-5.19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-5.19.17-1-pve, pve-headers-5.19.17-2-pve, pve-headers-5.19.7-1-pve, pve-headers-5.19.7-2-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-5.19.17-1-pve**
  - Latest version: 5.19.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.19.17-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.19.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.19.17-1-pve-amd64

  </details>

- **pve-headers-5.19.17-2-pve**
  - Latest version: 5.19.17-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.19.17-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.19.17-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.19.17-2-pve-amd64

  </details>

- **pve-headers-5.19.7-1-pve**
  - Latest version: 5.19.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.19.7-1-pve`
  - Install (apt): `sudo apt install pve-headers-5.19.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.19.7-1-pve-amd64

  </details>

- **pve-headers-5.19.7-2-pve**
  - Latest version: 5.19.7-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-5.19.7-2-pve`
  - Install (apt): `sudo apt install pve-headers-5.19.7-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-5.19.7-2-pve-amd64

  </details>

- **pve-headers-6.1**
  - Latest version: 7.3-6
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1`
  - Install (apt): `sudo apt install pve-headers-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-6.1.0-1-pve, pve-headers-6.1.10-1-pve, pve-headers-6.1.14-1-pve, pve-headers-6.1.15-1-pve, pve-headers-6.1.2-1-pve, pve-headers-6.1.6-1-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-6.1.0-1-pve**
  - Latest version: 6.1.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.0-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.0-1-pve-amd64

  </details>

- **pve-headers-6.1.10-1-pve**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.10-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.10-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.10-1-pve-amd64

  </details>

- **pve-headers-6.1.14-1-pve**
  - Latest version: 6.1.14-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.14-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.14-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.14-1-pve-amd64

  </details>

- **pve-headers-6.1.15-1-pve**
  - Latest version: 6.1.15-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.15-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.15-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.15-1-pve-amd64

  </details>

- **pve-headers-6.1.2-1-pve**
  - Latest version: 6.1.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.2-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.2-1-pve-amd64

  </details>

- **pve-headers-6.1.6-1-pve**
  - Latest version: 6.1.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1.6-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.1.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.1.6-1-pve-amd64

  </details>

- **pve-headers-6.2**
  - Latest version: 7.4-6
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2`
  - Install (apt): `sudo apt install pve-headers-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-6.2.11-1-pve, pve-headers-6.2.11-2-pve, pve-headers-6.2.16-11-bpo11-pve, pve-headers-6.2.16-20-bpo11-pve, pve-headers-6.2.16-4-bpo11-pve, pve-headers-6.2.2-1-pve, pve-headers-6.2.6-1-pve, pve-headers-6.2.9-1-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-6.2.11-1-pve**
  - Latest version: 6.2.11-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.11-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.2.11-1-pve-amd64

  </details>

- **pve-headers-6.2.11-2-pve**
  - Latest version: 6.2.11-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.11-2-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.2.11-2-pve-amd64

  </details>

- **pve-headers-6.2.16-11-bpo11-pve**
  - Latest version: 6.2.16-11~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-11-bpo11-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-11-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-11-bpo11-pve-amd64

  </details>

- **pve-headers-6.2.16-20-bpo11-pve**
  - Latest version: 6.2.16-20~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-20-bpo11-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-20-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-20-bpo11-pve-amd64

  </details>

- **pve-headers-6.2.16-4-bpo11-pve**
  - Latest version: 6.2.16-4~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-4-bpo11-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-4-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-4-bpo11-pve-amd64

  </details>

- **pve-headers-6.2.2-1-pve**
  - Latest version: 6.2.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.2-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.2.2-1-pve-amd64

  </details>

- **pve-headers-6.2.6-1-pve**
  - Latest version: 6.2.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.6-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.2.6-1-pve-amd64

  </details>

- **pve-headers-6.2.9-1-pve**
  - Latest version: 6.2.9-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.9-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.9-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils | fileutils (>= 4.0)
  - provides: linux-headers-6.2.9-1-pve-amd64

  </details>

- **pve-i18n**
  - Latest version: 2.12-1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
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

- **pve-kernel-5.10.6-1-pve**
  - Latest version: 5.10.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.10.6-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.10.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.11**
  - Latest version: 7.0-10
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11`
  - Install (apt): `sudo apt install pve-kernel-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-5.11.22-1-pve, pve-kernel-5.11.22-2-pve, pve-kernel-5.11.22-3-pve, pve-kernel-5.11.22-4-pve, pve-kernel-5.11.22-5-pve, pve-kernel-5.11.22-6-pve, pve-kernel-5.11.22-7-pve

  </details>

- **pve-kernel-5.11.0-1-pve**
  - Latest version: 5.11.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.0-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.11.12-1-pve**
  - Latest version: 5.11.12-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.12-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.11.17-1-pve**
  - Latest version: 5.11.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.17-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.11.21-1-pve**
  - Latest version: 5.11.21-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.21-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.21-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.11.22-1-pve**
  - Latest version: 5.11.22-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-2-pve**
  - Latest version: 5.11.22-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-3-pve**
  - Latest version: 5.11.22-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-3-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-4-pve**
  - Latest version: 5.11.22-9
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-4-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-5-pve**
  - Latest version: 5.11.22-10
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-5-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-6-pve**
  - Latest version: 5.11.22-11
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-6-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.22-7-pve**
  - Latest version: 5.11.22-12
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.22-7-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.22-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.11.7-1-pve**
  - Latest version: 5.11.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.11.7-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.11.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image, linux-image-2.6

  </details>

- **pve-kernel-5.13**
  - Latest version: 7.1-9
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13`
  - Install (apt): `sudo apt install pve-kernel-5.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-5.13.14-1-pve, pve-kernel-5.13.18-1-pve, pve-kernel-5.13.19-1-pve, pve-kernel-5.13.19-2-pve, pve-kernel-5.13.19-3-pve, pve-kernel-5.13.19-4-pve, pve-kernel-5.13.19-5-pve, pve-kernel-5.13.19-6-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-5.13.14-1-pve**
  - Latest version: 5.13.14-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.14-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.14-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.13.18-1-pve**
  - Latest version: 5.13.18-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.18-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.18-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.13.19-1-pve**
  - Latest version: 5.13.19-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.13.19-2-pve**
  - Latest version: 5.13.19-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.13.19-3-pve**
  - Latest version: 5.13.19-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-3-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.13.19-3-pve-amd64

  </details>

- **pve-kernel-5.13.19-4-pve**
  - Latest version: 5.13.19-9
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-4-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.13.19-4-pve-amd64

  </details>

- **pve-kernel-5.13.19-5-pve**
  - Latest version: 5.13.19-13
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-5-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.13.19-5-pve-amd64

  </details>

- **pve-kernel-5.13.19-6-pve**
  - Latest version: 5.13.19-15
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.13.19-6-pve`
  - Install (apt): `sudo apt install pve-kernel-5.13.19-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.13.19-6-pve-amd64

  </details>

- **pve-kernel-5.15**
  - Latest version: 7.4-15
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15`
  - Install (apt): `sudo apt install pve-kernel-5.15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-5.15.102-1-pve, pve-kernel-5.15.104-1-pve, pve-kernel-5.15.107-1-pve, pve-kernel-5.15.107-2-pve, pve-kernel-5.15.108-1-pve, pve-kernel-5.15.111-1-pve, pve-kernel-5.15.116-1-pve, pve-kernel-5.15.12-1-pve, pve-kernel-5.15.126-1-pve, pve-kernel-5.15.131-1-pve, pve-kernel-5.15.131-2-pve, pve-kernel-5.15.136-1-pve, pve-kernel-5.15.143-1-pve, pve-kernel-5.15.149-1-pve, pve-kernel-5.15.152-1-pve, pve-kernel-5.15.158-1-pve, pve-kernel-5.15.158-2-pve, pve-kernel-5.15.17-1-pve, pve-kernel-5.15.19-1-pve, pve-kernel-5.15.19-2-pve, pve-kernel-5.15.27-1-pve, pve-kernel-5.15.30-1-pve, pve-kernel-5.15.30-2-pve, pve-kernel-5.15.35-1-pve, pve-kernel-5.15.35-2-pve, pve-kernel-5.15.35-3-pve, pve-kernel-5.15.39-1-pve, pve-kernel-5.15.39-2-pve, pve-kernel-5.15.39-3-pve, pve-kernel-5.15.39-4-pve, pve-kernel-5.15.5-1-pve, pve-kernel-5.15.53-1-pve, pve-kernel-5.15.60-1-pve, pve-kernel-5.15.60-2-pve, pve-kernel-5.15.64-1-pve, pve-kernel-5.15.7-1-pve, pve-kernel-5.15.74-1-pve, pve-kernel-5.15.83-1-pve, pve-kernel-5.15.85-1-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-5.15.102-1-pve**
  - Latest version: 5.15.102-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.102-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.102-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.102-1-pve-amd64

  </details>

- **pve-kernel-5.15.104-1-pve**
  - Latest version: 5.15.104-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.104-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.104-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.104-1-pve-amd64

  </details>

- **pve-kernel-5.15.107-1-pve**
  - Latest version: 5.15.107-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.107-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.107-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.107-1-pve-amd64

  </details>

- **pve-kernel-5.15.107-2-pve**
  - Latest version: 5.15.107-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.107-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.107-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.107-2-pve-amd64

  </details>

- **pve-kernel-5.15.108-1-pve**
  - Latest version: 5.15.108-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.108-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.108-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.108-1-pve-amd64

  </details>

- **pve-kernel-5.15.111-1-pve**
  - Latest version: 5.15.111-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.111-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.111-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.111-1-pve-amd64

  </details>

- **pve-kernel-5.15.116-1-pve**
  - Latest version: 5.15.116-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.116-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.116-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.116-1-pve-amd64

  </details>

- **pve-kernel-5.15.12-1-pve**
  - Latest version: 5.15.12-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.12-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.12-1-pve-amd64

  </details>

- **pve-kernel-5.15.126-1-pve**
  - Latest version: 5.15.126-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.126-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.126-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.126-1-pve-amd64

  </details>

- **pve-kernel-5.15.131-1-pve**
  - Latest version: 5.15.131-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.131-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.131-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.131-1-pve-amd64

  </details>

- **pve-kernel-5.15.131-2-pve**
  - Latest version: 5.15.131-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.131-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.131-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.131-2-pve-amd64

  </details>

- **pve-kernel-5.15.136-1-pve**
  - Latest version: 5.15.136-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.136-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.136-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.136-1-pve-amd64

  </details>

- **pve-kernel-5.15.143-1-pve**
  - Latest version: 5.15.143-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.143-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.143-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.143-1-pve-amd64

  </details>

- **pve-kernel-5.15.149-1-pve**
  - Latest version: 5.15.149-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.149-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.149-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.149-1-pve-amd64

  </details>

- **pve-kernel-5.15.152-1-pve**
  - Latest version: 5.15.152-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.152-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.152-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.152-1-pve-amd64

  </details>

- **pve-kernel-5.15.158-1-pve**
  - Latest version: 5.15.158-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.158-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.158-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.158-1-pve-amd64

  </details>

- **pve-kernel-5.15.158-2-pve**
  - Latest version: 5.15.158-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.158-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.158-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.158-2-pve-amd64

  </details>

- **pve-kernel-5.15.17-1-pve**
  - Latest version: 5.15.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.17-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.17-1-pve-amd64

  </details>

- **pve-kernel-5.15.19-1-pve**
  - Latest version: 5.15.19-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.19-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.19-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.19-1-pve-amd64

  </details>

- **pve-kernel-5.15.19-2-pve**
  - Latest version: 5.15.19-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.19-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.19-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.19-2-pve-amd64

  </details>

- **pve-kernel-5.15.27-1-pve**
  - Latest version: 5.15.27-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.27-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.27-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.27-1-pve-amd64

  </details>

- **pve-kernel-5.15.30-1-pve**
  - Latest version: 5.15.30-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.30-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.30-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.30-1-pve-amd64

  </details>

- **pve-kernel-5.15.30-2-pve**
  - Latest version: 5.15.30-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.30-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.30-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.30-2-pve-amd64

  </details>

- **pve-kernel-5.15.35-1-pve**
  - Latest version: 5.15.35-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.35-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.35-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.35-1-pve-amd64

  </details>

- **pve-kernel-5.15.35-2-pve**
  - Latest version: 5.15.35-5
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.35-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.35-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.35-2-pve-amd64

  </details>

- **pve-kernel-5.15.35-3-pve**
  - Latest version: 5.15.35-6
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.35-3-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.35-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.35-3-pve-amd64

  </details>

- **pve-kernel-5.15.39-1-pve**
  - Latest version: 5.15.39-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.39-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.39-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.39-1-pve-amd64

  </details>

- **pve-kernel-5.15.39-2-pve**
  - Latest version: 5.15.39-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.39-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.39-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.39-2-pve-amd64

  </details>

- **pve-kernel-5.15.39-3-pve**
  - Latest version: 5.15.39-3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.39-3-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.39-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.39-3-pve-amd64

  </details>

- **pve-kernel-5.15.39-4-pve**
  - Latest version: 5.15.39-4
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.39-4-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.39-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.39-4-pve-amd64

  </details>

- **pve-kernel-5.15.5-1-pve**
  - Latest version: 5.15.5-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.5-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.5-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image

  </details>

- **pve-kernel-5.15.53-1-pve**
  - Latest version: 5.15.53-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.53-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.53-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.53-1-pve-amd64

  </details>

- **pve-kernel-5.15.60-1-pve**
  - Latest version: 5.15.60-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.60-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.60-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.60-1-pve-amd64

  </details>

- **pve-kernel-5.15.60-2-pve**
  - Latest version: 5.15.60-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.60-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.60-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.60-2-pve-amd64

  </details>

- **pve-kernel-5.15.64-1-pve**
  - Latest version: 5.15.64-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.64-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.64-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.64-1-pve-amd64

  </details>

- **pve-kernel-5.15.7-1-pve**
  - Latest version: 5.15.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: The Proxmox PVE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.7-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.7-1-pve-amd64

  </details>

- **pve-kernel-5.15.74-1-pve**
  - Latest version: 5.15.74-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.74-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.74-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.74-1-pve-amd64

  </details>

- **pve-kernel-5.15.83-1-pve**
  - Latest version: 5.15.83-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.83-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.83-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.83-1-pve-amd64

  </details>

- **pve-kernel-5.15.85-1-pve**
  - Latest version: 5.15.85-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.15.85-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.15.85-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.15.85-1-pve-amd64

  </details>

- **pve-kernel-5.19**
  - Latest version: 7.2-15
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.19`
  - Install (apt): `sudo apt install pve-kernel-5.19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-5.19.17-1-pve, pve-kernel-5.19.17-2-pve, pve-kernel-5.19.7-1-pve, pve-kernel-5.19.7-2-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-5.19.17-1-pve**
  - Latest version: 5.19.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.19.17-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.19.17-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.19.17-1-pve-amd64

  </details>

- **pve-kernel-5.19.17-2-pve**
  - Latest version: 5.19.17-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.19.17-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.19.17-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.19.17-2-pve-amd64

  </details>

- **pve-kernel-5.19.7-1-pve**
  - Latest version: 5.19.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.19.7-1-pve`
  - Install (apt): `sudo apt install pve-kernel-5.19.7-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.19.7-1-pve-amd64

  </details>

- **pve-kernel-5.19.7-2-pve**
  - Latest version: 5.19.7-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-5.19.7-2-pve`
  - Install (apt): `sudo apt install pve-kernel-5.19.7-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-5.19.7-2-pve-amd64

  </details>

- **pve-kernel-6.1**
  - Latest version: 7.3-6
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1`
  - Install (apt): `sudo apt install pve-kernel-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-6.1.0-1-pve, pve-kernel-6.1.10-1-pve, pve-kernel-6.1.14-1-pve, pve-kernel-6.1.15-1-pve, pve-kernel-6.1.2-1-pve, pve-kernel-6.1.6-1-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-6.1.0-1-pve**
  - Latest version: 6.1.0-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.0-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.0-1-pve-amd64

  </details>

- **pve-kernel-6.1.10-1-pve**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.10-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.10-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.10-1-pve-amd64

  </details>

- **pve-kernel-6.1.14-1-pve**
  - Latest version: 6.1.14-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.14-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.14-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.14-1-pve-amd64

  </details>

- **pve-kernel-6.1.15-1-pve**
  - Latest version: 6.1.15-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.15-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.15-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.15-1-pve-amd64

  </details>

- **pve-kernel-6.1.2-1-pve**
  - Latest version: 6.1.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.2-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.2-1-pve-amd64

  </details>

- **pve-kernel-6.1.6-1-pve**
  - Latest version: 6.1.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1.6-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.1.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.1.6-1-pve-amd64

  </details>

- **pve-kernel-6.2**
  - Latest version: 7.4-6
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2`
  - Install (apt): `sudo apt install pve-kernel-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-6.2.11-1-pve, pve-kernel-6.2.11-2-pve, pve-kernel-6.2.16-11-bpo11-pve, pve-kernel-6.2.16-20-bpo11-pve, pve-kernel-6.2.16-4-bpo11-pve, pve-kernel-6.2.2-1-pve, pve-kernel-6.2.6-1-pve, pve-kernel-6.2.9-1-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-6.2.11-1-pve**
  - Latest version: 6.2.11-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.11-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.11-1-pve-amd64

  </details>

- **pve-kernel-6.2.11-2-pve**
  - Latest version: 6.2.11-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.11-2-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.11-2-pve-amd64

  </details>

- **pve-kernel-6.2.16-11-bpo11-pve**
  - Latest version: 6.2.16-11~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-11-bpo11-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-11-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-11-bpo11-pve-amd64

  </details>

- **pve-kernel-6.2.16-20-bpo11-pve**
  - Latest version: 6.2.16-20~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-20-bpo11-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-20-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-20-bpo11-pve-amd64

  </details>

- **pve-kernel-6.2.16-4-bpo11-pve**
  - Latest version: 6.2.16-4~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-4-bpo11-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-4-bpo11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-4-bpo11-pve-amd64

  </details>

- **pve-kernel-6.2.2-1-pve**
  - Latest version: 6.2.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.2-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.2-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.2-1-pve-amd64

  </details>

- **pve-kernel-6.2.6-1-pve**
  - Latest version: 6.2.6-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.6-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.6-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.6-1-pve-amd64

  </details>

- **pve-kernel-6.2.9-1-pve**
  - Latest version: 6.2.9-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.9-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.9-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.9-1-pve-amd64

  </details>

- **pve-kernel-helper**
  - Latest version: 7.3-8
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Function for various kernel maintenance tasks.
  - Install: `sudo apt-get install pve-kernel-helper`
  - Install (apt): `sudo apt install pve-kernel-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dosfstools, gdisk, systemd, udev
  - breaks: proxmox-ve (<< 6.0-2~)
  - replaces: proxmox-ve (<< 6.0-2~)

  </details>

- **pve-kernel-libc-dev**
  - Latest version: 5.19.17-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Linux support headers for userspace development
  - Install: `sudo apt-get install pve-kernel-libc-dev`
  - Install (apt): `sudo apt install pve-kernel-libc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - conflicts: linux-libc-dev
  - replaces: linux-libc-dev
  - provides: linux-libc-dev (= 5.11.22-1), linux-libc-dev (= 5.11.22-2), linux-libc-dev (= 5.11.22-3), linux-libc-dev (= 5.11.22-4), linux-libc-dev (= 5.11.22-5), linux-libc-dev (= 5.11.22-6), linux-libc-dev (= 5.11.22-7), linux-libc-dev (= 5.11.22-8), linux-libc-dev (= 5.11.22-9), linux-libc-dev (= 5.13.14-1), linux-libc-dev (= 5.13.18-1), linux-libc-dev (= 5.13.19-1), linux-libc-dev (= 5.13.19-2), linux-libc-dev (= 5.13.19-3), linux-libc-dev (= 5.13.19-4), linux-libc-dev (= 5.15.12-2), linux-libc-dev (= 5.15.12-3), linux-libc-dev (= 5.15.17-1), linux-libc-dev (= 5.15.19-1), linux-libc-dev (= 5.15.19-2), linux-libc-dev (= 5.15.19-3), linux-libc-dev (= 5.15.27-1), linux-libc-dev (= 5.15.30-1), linux-libc-dev (= 5.15.30-3), linux-libc-dev (= 5.15.35-1), linux-libc-dev (= 5.15.35-2), linux-libc-dev (= 5.15.35-3), linux-libc-dev (= 5.15.35-4), linux-libc-dev (= 5.15.35-5), linux-libc-dev (= 5.15.35-6), linux-libc-dev (= 5.15.39-1), linux-libc-dev (= 5.15.39-2), linux-libc-dev (= 5.15.39-3), linux-libc-dev (= 5.15.39-4), linux-libc-dev (= 5.15.53-1), linux-libc-dev (= 5.15.60-1), linux-libc-dev (= 5.15.60-2), linux-libc-dev (= 5.15.64-1), linux-libc-dev (= 5.19.17-1)

  </details>

- **pve-lxc-syscalld**
  - Latest version: 1.2.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: PVE LXC syscall daemon
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-lxc-syscalld`
  - Install (apt): `sudo apt install pve-lxc-syscalld`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.18), libc6 (>= 2.28), libgcc-s1 (>= 4.2), libsystemd0

  </details>

- **pve-lxc-syscalld-dbgsym**
  - Latest version: 1.2.2-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for pve-lxc-syscalld
  - Install: `sudo apt-get install pve-lxc-syscalld-dbgsym`
  - Install (apt): `sudo apt install pve-lxc-syscalld-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-lxc-syscalld (= 1.0.0-1), pve-lxc-syscalld (= 1.1.0-1), pve-lxc-syscalld (= 1.1.1-1), pve-lxc-syscalld (= 1.2.0-1), pve-lxc-syscalld (= 1.2.1-1), pve-lxc-syscalld (= 1.2.2-1)

  </details>

- **pve-manager**
  - Latest version: 7.4-20
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox Virtual Environment Management Tools
  - Install: `sudo apt-get install pve-manager`
  - Install (apt): `sudo apt install pve-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apt (>= 1.5~), apt-transport-https | apt (>= 1.5~), ca-certificates, cstream, dtach, fonts-font-awesome, gdisk, hdparm, ifupdown2 (>= 2.0.1-1+pve8) | ifenslave (>= 2.6), libapt-pkg-perl, libc6 (>= 2.14), libcrypt-ssleay-perl, libfile-readbackwards-perl, libfilesys-df-perl, libjs-extjs (>= 6.0.1), libjs-extjs (>= 7.0.0), libjs-qrcodejs (>= 1.20201119), libjs-sencha-touch, libjson-perl, liblwp-protocol-https-perl, libnet-dns-perl, libproxmox-acme-perl, libproxmox-acme-plugins, libproxmox-rs-perl, libproxmox-rs-perl (>= 0.2.0), libpve-access-control (>= 7.0-2), libpve-access-control (>= 7.0-7), libpve-cluster-api-perl, libpve-cluster-api-perl (>= 7.0-5), libpve-cluster-perl (>= 6.1-6), libpve-cluster-perl (>= 7.2-3), libpve-common-perl (>= 7.0-2), libpve-common-perl (>= 7.1-1), libpve-common-perl (>= 7.1-4), libpve-common-perl (>= 7.2-7), libpve-guest-common-perl (>= 4.0-2), libpve-guest-common-perl (>= 4.2-1), libpve-http-server-perl (>= 3.2-1), libpve-http-server-perl (>= 4.0-4), libpve-http-server-perl (>= 4.1-1), libpve-http-server-perl (>= 4.3~), libpve-rs-perl (>= 0.2.2), libpve-rs-perl (>= 0.5.0), libpve-rs-perl (>= 0.7.1), libpve-storage-perl (>= 7.0-10), libpve-storage-perl (>= 7.0-13), libpve-storage-perl (>= 7.0-15), libpve-storage-perl (>= 7.0-4), libpve-storage-perl (>= 7.1-2), libpve-storage-perl (>= 7.2-12), libpve-storage-perl (>= 7.2-3), librados2-perl, librados2-perl (>= 1.3-1), libtemplate-perl, libterm-readline-gnu-perl, liburi-perl, libuuid-perl, libwww-perl (>= 6.04-1), logrotate, lsb-base, lzop, novnc-pve (>= 1.2.0-2~), pciutils, perl (>= 5.10.0-19), perl:any, postfix | mail-transport-agent, proxmox-mail-forward, proxmox-mini-journalreader, proxmox-mini-journalreader (>= 1.3-1), proxmox-widget-toolkit (>= 2.5-2), proxmox-widget-toolkit (>= 3.2-1), proxmox-widget-toolkit (>= 3.3-6), proxmox-widget-toolkit (>= 3.4-1), proxmox-widget-toolkit (>= 3.4-9), proxmox-widget-toolkit (>= 3.6.0), pve-cluster (>= 6.0-4), pve-cluster (>= 7.0-4), pve-container (>= 2.0-21), pve-container (>= 4.0-9), pve-docs, pve-firewall, pve-ha-manager, pve-i18n (>= 1.0-3), pve-xtermjs (>= 4.7.0-1), qemu-server (>= 6.2-17), qemu-server (>= 7.2-8), rsync, spiceterm, systemd, vncterm, wget, zstd
  - recommends: proxmox-offline-mirror-helper
  - suggests: libpve-network-perl (>= 0.5-1)
  - conflicts: vlan, vzdump
  - breaks: libpve-network-perl (<< 0.5-1)
  - replaces: vlan, vzdump
  - provides: vlan, vzdump

  </details>

- **pve-qemu-kvm**
  - Latest version: 7.2.10-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Full virtualization on x86 hardware
  - Install: `sudo apt-get install pve-qemu-kvm`
  - Install (apt): `sudo apt install pve-qemu-kvm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (>= 0.48), iproute2, libaio1 (>= 0.3.93), libasound2 (>= 1.0.16), libc6 (>= 2.29), libc6 (>= 2.30), libcap-ng0 (>= 0.7.9), libcurl3-gnutls (>= 7.16.3), libepoxy0 (>= 1.0), libepoxy0 (>= 1.3), libfdt1 (>= 1.6.0), libgbm1 (>= 12.0.0~0), libgcc-s1 (>= 4.7), libgfapi0 | glusterfs-common (>= 5.6), libgfchangelog0 | glusterfs-common (>= 5.6), libgfdb0 | glusterfs-common (>= 5.6), libgfrpc0 | glusterfs-common (>= 5.6), libgfxdr0 | glusterfs-common (>= 5.6), libglib2.0-0 (>= 2.57.2), libglib2.0-0 (>= 2.61.2), libglusterfs-dev | glusterfs-common (>= 5.6), libglusterfs0 | glusterfs-common (>= 5.6), libgnutls30 (>= 3.7.0), libiscsi7 (>= 1.18.0), libjemalloc2, libjpeg62-turbo (>= 1.3.1), libnettle8, libnuma1 (>= 2.0.11), libpixman-1-0 (>= 0.30.0), libpng16-16 (>= 1.6.2-1), libproxmox-backup-qemu0 (>= 1.0.3), libproxmox-backup-qemu0 (>= 1.3.0), libpulse0 (>= 0.99.1), librados2 (>= 0.72.2), librbd1 (>= 12.0.3), librbd1 (>= 14.2.15), libsdl1.2debian, libseccomp2 (>= 2.1.0), libselinux1 (>= 3.1~), libslirp0 (>= 4.1.0), libspice-server1 (>= 0.14.2), libstdc++6 (>= 4.6), libsystemd0, libudev1 (>= 183), liburing1 (>= 0.7), libusb-1.0-0 (>= 2:1.0.23~), libusbredirparser1 (>= 0.6-2), libuuid1 (>= 2.16), libvirglrenderer1 (>= 0.8.0), libzstd1 (>= 1.4.0), numactl, zlib1g (>= 1:1.2.0)
  - recommends: numactl
  - suggests: libgl1
  - conflicts: kvm, pve-kvm, pve-qemu-kvm-2.6.18, qemu, qemu-kvm, qemu-system-arm, qemu-system-common, qemu-system-data, qemu-system-x86, qemu-utils
  - replaces: pve-kvm, pve-qemu-kvm-2.6.18, qemu-system-arm, qemu-system-x86, qemu-utils
  - provides: qemu-system-arm, qemu-system-x86, qemu-utils

  </details>

- **pve-qemu-kvm-dbg**
  - Latest version: 7.2.10-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: pve qemu debugging symbols
  - Install: `sudo apt-get install pve-qemu-kvm-dbg`
  - Install (apt): `sudo apt install pve-qemu-kvm-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-qemu-kvm (= 6.0.0-2), pve-qemu-kvm (= 6.0.0-3), pve-qemu-kvm (= 6.0.0-4), pve-qemu-kvm (= 6.1.0-1), pve-qemu-kvm (= 6.1.0-2), pve-qemu-kvm (= 6.1.0-3), pve-qemu-kvm (= 6.1.1-1), pve-qemu-kvm (= 6.1.1-2), pve-qemu-kvm (= 6.2.0-1), pve-qemu-kvm (= 6.2.0-10), pve-qemu-kvm (= 6.2.0-11), pve-qemu-kvm (= 6.2.0-2), pve-qemu-kvm (= 6.2.0-3), pve-qemu-kvm (= 6.2.0-4), pve-qemu-kvm (= 6.2.0-5), pve-qemu-kvm (= 6.2.0-6), pve-qemu-kvm (= 6.2.0-7), pve-qemu-kvm (= 6.2.0-8), pve-qemu-kvm (= 6.2.0-9), pve-qemu-kvm (= 7.0.0-2), pve-qemu-kvm (= 7.0.0-3), pve-qemu-kvm (= 7.0.0-4), pve-qemu-kvm (= 7.1.0-3), pve-qemu-kvm (= 7.1.0-4), pve-qemu-kvm (= 7.2.0-5), pve-qemu-kvm (= 7.2.0-6), pve-qemu-kvm (= 7.2.0-7), pve-qemu-kvm (= 7.2.0-8), pve-qemu-kvm (= 7.2.10-1)

  </details>

- **pve-xtermjs**
  - Latest version: 4.16.0-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: HTML/JS Shell client for Proxmox projects
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-xtermjs`
  - Install (apt): `sudo apt install pve-xtermjs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.18), libc6 (>= 2.29), libcrypt1 (>= 1:4.1.0), libcurl3-gnutls (>= 7.16.2), libgcc-s1 (>= 4.2), libuuid1 (>= 2.16), libzstd1 (>= 1.4.0)

  </details>

- **pve-xtermjs-dbgsym**
  - Latest version: 4.16.0-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for pve-xtermjs
  - Install: `sudo apt-get install pve-xtermjs-dbgsym`
  - Install (apt): `sudo apt install pve-xtermjs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-xtermjs (= 4.12.0-1), pve-xtermjs (= 4.16.0-1), pve-xtermjs (= 4.16.0-2)

  </details>

- **pve-zsync**
  - Latest version: 2.2.3
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Proxmox VE ZFS syncing tool
  - Homepage: https://pve.proxmox.com
  - Install: `sudo apt-get install pve-zsync`
  - Install (apt): `sudo apt install pve-zsync`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: perl:any

  </details>

- **python3-btrfsutil**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Checksumming Copy on Write Filesystem utilities (python3 bindings)
  - Homepage: http://btrfs.wiki.kernel.org/
  - Install: `sudo apt-get install python3-btrfsutil`
  - Install (apt): `sudo apt install python3-btrfsutil`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: python
  - Priority: optional
  - depends: libbtrfsutil1 (>= 5.6), libc6 (>= 2.4), python3 (<< 3.10), python3 (>= 3.9~)

  </details>

- **python3-btrfsutil-dbgsym**
  - Latest version: 5.16.2-1~bpo11+1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for python3-btrfsutil
  - Install: `sudo apt-get install python3-btrfsutil-dbgsym`
  - Install (apt): `sudo apt install python3-btrfsutil-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Borowski <kilobyte@angband.pl>
  - Section: debug
  - Priority: optional
  - depends: python3-btrfsutil (= 5.16.2-1~bpo11+1)

  </details>

- **python3-openvswitch**
  - Latest version: 2.15.0+ds1-2+deb11u3.1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Python 3 bindings for Open vSwitch
  - Homepage: http://openvswitch.org/
  - Install: `sudo apt-get install python3-openvswitch`
  - Install (apt): `sudo apt install python3-openvswitch`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenStack <team+openstack@tracker.debian.org>
  - Section: python
  - Priority: optional
  - depends: python3-six, python3-sortedcontainers, python3:any

  </details>

- **python3-pyzfs**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: wrapper for libzfs_core C library
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install python3-pyzfs`
  - Install (apt): `sudo apt install python3-pyzfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/python
  - Priority: optional
  - depends: python3-cffi, python3-cffi-backend-api-max (>= 9729), python3-cffi-backend-api-min (<= 9729), python3:any, zfsutils-linux (= 2.0.4-pve1), zfsutils-linux (= 2.0.5-pve1), zfsutils-linux (= 2.1.1-pve1), zfsutils-linux (= 2.1.1-pve2), zfsutils-linux (= 2.1.1-pve3), zfsutils-linux (= 2.1.11-pve1), zfsutils-linux (= 2.1.14-pve1), zfsutils-linux (= 2.1.15-pve1), zfsutils-linux (= 2.1.2-pve1), zfsutils-linux (= 2.1.4-pve1), zfsutils-linux (= 2.1.5-pve1), zfsutils-linux (= 2.1.6-pve1), zfsutils-linux (= 2.1.7-pve1), zfsutils-linux (= 2.1.7-pve2), zfsutils-linux (= 2.1.7-pve3), zfsutils-linux (= 2.1.9-pve1)

  </details>

- **pyzfs-doc**
  - Latest version: 2.1.15-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: wrapper for libzfs_core C library (documentation)
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install pyzfs-doc`
  - Install (apt): `sudo apt install pyzfs-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 2.4.3-5~)
  - recommends: python3-pyzfs

  </details>


### <a id="packages-Q"></a>Q

- **qemu-server**
  - Latest version: 7.4-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Qemu Server Tools
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install qemu-server`
  - Install (apt): `sudo apt install qemu-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dbus, genisoimage, libc6 (>= 2.10), libglib2.0-0 (>= 2.12.0), libglib2.0-0 (>= 2.28.0), libio-multiplex-perl, libjson-c5 (>= 0.15), libjson-perl, libjson-xs-perl, libnet-ssleay-perl, libpve-access-control (>= 5.0-7), libpve-access-control (>= 7.2-5), libpve-apiclient-perl, libpve-cluster-perl, libpve-common-perl (>= 7.0-14), libpve-common-perl (>= 7.0-3), libpve-common-perl (>= 7.1-3), libpve-common-perl (>= 7.1-4), libpve-common-perl (>= 7.2-5), libpve-guest-common-perl (>= 3.1-3), libpve-guest-common-perl (>= 4.1-1), libpve-guest-common-perl (>= 4.2-2), libpve-guest-common-perl (>= 4.2-3), libpve-storage-perl (>= 6.3-8), libpve-storage-perl (>= 7.2-10), libterm-readline-gnu-perl, libuuid-perl, libxml-libxml-perl, perl (>= 5.10.0-19), perl:any, proxmox-websocket-tunnel, pve-cluster, pve-edk2-firmware (>= 1.20181023-1), pve-edk2-firmware (>= 3.20210831-1), pve-firewall, pve-ha-manager (>= 3.0-9), pve-qemu-kvm (>= 3.0.1-62), socat, swtpm, swtpm-tools
  - recommends: proxmox-backup-file-restore (>= 2.1.9-2)
  - breaks: pve-ha-manager (<= 3.0-4), pve-manager (<= 6.0-13)

  </details>

- **qemu-server-dbgsym**
  - Latest version: 7.4-7
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for qemu-server
  - Install: `sudo apt-get install qemu-server-dbgsym`
  - Install (apt): `sudo apt install qemu-server-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: qemu-server (= 7.0-10), qemu-server (= 7.0-11), qemu-server (= 7.0-12), qemu-server (= 7.0-13), qemu-server (= 7.0-14), qemu-server (= 7.0-15), qemu-server (= 7.0-16), qemu-server (= 7.0-17), qemu-server (= 7.0-18), qemu-server (= 7.0-19), qemu-server (= 7.0-4), qemu-server (= 7.0-5), qemu-server (= 7.0-6), qemu-server (= 7.0-7), qemu-server (= 7.0-8), qemu-server (= 7.0-9), qemu-server (= 7.1-3), qemu-server (= 7.1-4), qemu-server (= 7.1-5), qemu-server (= 7.2-10), qemu-server (= 7.2-11), qemu-server (= 7.2-12), qemu-server (= 7.2-2), qemu-server (= 7.2-3), qemu-server (= 7.2-4), qemu-server (= 7.2-5), qemu-server (= 7.2-8), qemu-server (= 7.3-1), qemu-server (= 7.3-2), qemu-server (= 7.3-3), qemu-server (= 7.3-4), qemu-server (= 7.4-2), qemu-server (= 7.4-3), qemu-server (= 7.4-4), qemu-server (= 7.4-5), qemu-server (= 7.4-6), qemu-server (= 7.4-7)

  </details>


### <a id="packages-S"></a>S

- **smartmontools**
  - Latest version: 7.2-pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: control and monitor storage systems using S.M.A.R.T.
  - Homepage: http://smartmontools.sourceforge.net/
  - Install: `sudo apt-get install smartmontools`
  - Install (apt): `sudo apt install smartmontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dmitry Smirnov <onlyjob@debian.org>
  - Section: utils
  - Priority: optional
  - depends: debianutils (>= 2.2), libc6 (>= 2.27), libcap-ng0 (>= 0.7.9), libgcc-s1 (>= 3.0), libselinux1 (>= 3.1~), libstdc++6 (>= 5.2), libsystemd0, lsb-base (>= 3.2-14)
  - suggests: curl | wget | lynx, gpg, gsmartcontrol, mailx | mailutils, smart-notifier
  - conflicts: smartsuite, ucsc-smartsuite

  </details>

- **smartmontools-dbgsym**
  - Latest version: 7.2-pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for smartmontools
  - Install: `sudo apt-get install smartmontools-dbgsym`
  - Install (apt): `sudo apt install smartmontools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dmitry Smirnov <onlyjob@debian.org>
  - Section: debug
  - Priority: optional
  - depends: smartmontools (= 7.2-pve3)

  </details>

- **spiceterm**
  - Latest version: 3.2-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: SPICE Terminal Emulator
  - Install: `sudo apt-get install spiceterm`
  - Install (apt): `sudo apt install spiceterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.31.8), libspice-server1 (>= 0.12.2), pve-qemu-kvm

  </details>

- **spiceterm-dbgsym**
  - Latest version: 3.2-2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for spiceterm
  - Install: `sudo apt-get install spiceterm-dbgsym`
  - Install (apt): `sudo apt install spiceterm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: spiceterm (= 3.2-2)

  </details>

- **spl**
  - Latest version: 2.1.15-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: Solaris Porting Layer user-space utilities for Linux (dummy)
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install spl`
  - Install (apt): `sudo apt install spl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/metapackages
  - Priority: optional
  - suggests: zfs-test

  </details>

- **ss-dev**
  - Latest version: 2.0-1.46.5-2~bpo11+2
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: command-line interface parsing library - headers and static libraries
  - Homepage: http://e2fsprogs.sourceforge.net
  - Install: `sudo apt-get install ss-dev`
  - Install (apt): `sudo apt install ss-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Theodore Y. Ts'o <tytso@mit.edu>
  - Section: libdevel
  - Priority: optional
  - depends: comerr-dev, libc6-dev | libc-dev, libss2 (= 1.46.5-2~bpo11+2)

  </details>

- **swtpm**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Libtpms-based TPM emulator
  - Install: `sudo apt-get install swtpm`
  - Install (apt): `sudo apt install swtpm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.3.4), libc6 (>= 2.4), libtpms0, swtpm-libs (= 0.6.99+1), swtpm-libs (= 0.7.0~rc1+1), swtpm-libs (= 0.7.0~rc1+2), swtpm-libs (= 0.7.1~bpo11+1), swtpm-libs (= 0.8.0~bpo11+2), swtpm-libs (= 0.8.0~bpo11+3)

  </details>

- **swtpm-dbgsym**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for swtpm
  - Install: `sudo apt-get install swtpm-dbgsym`
  - Install (apt): `sudo apt install swtpm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm (= 0.6.99+1), swtpm (= 0.7.0~rc1+1), swtpm (= 0.7.0~rc1+2), swtpm (= 0.7.1~bpo11+1), swtpm (= 0.8.0~bpo11+2), swtpm (= 0.8.0~bpo11+3)

  </details>

- **swtpm-dev**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Include files for the TPM emulator's CUSE interface
  - Install: `sudo apt-get install swtpm-dev`
  - Install (apt): `sudo apt install swtpm-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: misc
  - Priority: optional

  </details>

- **swtpm-libs**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Common libraries for TPM emulators
  - Install: `sudo apt-get install swtpm-libs`
  - Install (apt): `sudo apt install swtpm-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.17), libglib2.0-0, libseccomp2 (>= 0.0.0~20120605), libssl1.1 (>= 1.1.0), libtpms0, openssl

  </details>

- **swtpm-libs-dbgsym**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for swtpm-libs
  - Install: `sudo apt-get install swtpm-libs-dbgsym`
  - Install (apt): `sudo apt install swtpm-libs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-libs (= 0.6.99+1), swtpm-libs (= 0.7.0~rc1+1), swtpm-libs (= 0.7.0~rc1+2), swtpm-libs (= 0.7.1~bpo11+1), swtpm-libs (= 0.8.0~bpo11+2), swtpm-libs (= 0.8.0~bpo11+3)

  </details>

- **swtpm-tools**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Tools for the TPM emulator
  - Install: `sudo apt-get install swtpm-tools`
  - Install (apt): `sudo apt install swtpm-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: misc
  - Priority: optional
  - depends: gnutls-bin, libc6 (>= 2.15), libglib2.0-0 (>= 2.31.8), libglib2.0-0 (>= 2.43.2), libgnutls30 (>= 3.7.0), libjson-glib-1.0-0 (>= 1.5.2), libssl1.1 (>= 1.1.1), libtasn1-6 (>= 4.14), swtpm (= 0.6.99+1), swtpm (= 0.7.0~rc1+1), swtpm (= 0.7.0~rc1+2), swtpm (= 0.7.1~bpo11+1), swtpm (= 0.8.0~bpo11+2), swtpm (= 0.8.0~bpo11+3), trousers (>= 0.3.9)
  - suggests: trousers (>= 0.3.9)

  </details>

- **swtpm-tools-dbgsym**
  - Latest version: 0.8.0~bpo11+3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for swtpm-tools
  - Install: `sudo apt-get install swtpm-tools-dbgsym`
  - Install (apt): `sudo apt install swtpm-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stefan Berger <stefanb@linux.vnet.ibm.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-tools (= 0.6.99+1), swtpm-tools (= 0.7.0~rc1+1), swtpm-tools (= 0.7.0~rc1+2), swtpm-tools (= 0.7.1~bpo11+1), swtpm-tools (= 0.8.0~bpo11+2), swtpm-tools (= 0.8.0~bpo11+3)

  </details>

- **systemd**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: system and service manager
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd`
  - Install (apt): `sudo apt install systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - depends: adduser, libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libaudit1 (>= 1:2.2.1), libcap2 (>= 1:2.24-9~), libcrypt1 (>= 1:4.4.0), libcryptsetup12 (>= 2:2.3), libgnutls30 (>= 3.7.0), libgpg-error0 (>= 1.14), libip4tc2 (>= 1.8.3), libkmod2 (>= 5~), liblz4-1 (>= 0.0~r130), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libsystemd0 (= 247.3-7+1-pmx11u1), mount (>= 2.26), util-linux (>= 2.27.1)
  - preDepends: libblkid1 (>= 2.24), libc6 (>= 2.30), libgcrypt20 (>= 1.8.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libselinux1 (>= 3.1~), libzstd1 (>= 1.4.0)
  - recommends: dbus, systemd-timesyncd | time-daemon
  - suggests: policykit-1, systemd-container
  - conflicts: consolekit, libpam-ck-connector
  - breaks: python-dbusmock (<< 0.18), python3-dbusmock (<< 0.18), resolvconf (<< 1.83~), systemd-shim (<< 10-4~), udev (<< 247~)

  </details>

- **systemd-container**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: systemd container/nspawn tools
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-container`
  - Install (apt): `sudo apt install systemd-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: dbus, libacl1 (>= 2.2.23), libbz2-1.0, libc6 (>= 2.28), libcurl3-gnutls (>= 7.16.3), libgcrypt20 (>= 1.8.0), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), systemd (= 247.3-7+1-pmx11u1), zlib1g (>= 1:1.1.4)
  - recommends: libnss-mymachines

  </details>

- **systemd-container-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd-container
  - Install: `sudo apt-get install systemd-container-dbgsym`
  - Install (apt): `sudo apt install systemd-container-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-container (= 247.3-7+1-pmx11u1)

  </details>

- **systemd-coredump**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: tools for storing and retrieving coredumps
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-coredump`
  - Install (apt): `sudo apt install systemd-coredump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.14), libdw1 (>= 0.158), libelf1 (>= 0.131), systemd (= 247.3-7+1-pmx11u1)
  - conflicts: core-dump-handler
  - replaces: core-dump-handler
  - provides: core-dump-handler

  </details>

- **systemd-coredump-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd-coredump
  - Install: `sudo apt-get install systemd-coredump-dbgsym`
  - Install (apt): `sudo apt install systemd-coredump-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-coredump (= 247.3-7+1-pmx11u1)

  </details>

- **systemd-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd
  - Install: `sudo apt-get install systemd-dbgsym`
  - Install (apt): `sudo apt install systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd (= 247.3-7+1-pmx11u1)

  </details>

- **systemd-journal-remote**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: tools for sending and receiving remote journal logs
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-journal-remote`
  - Install (apt): `sudo apt install systemd-journal-remote`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.14), libcurl3-gnutls (>= 7.16.2), libgnutls30 (>= 3.7.0), libmicrohttpd12 (>= 0.9.50), systemd (= 247.3-7+1-pmx11u1)
  - breaks: systemd (<< 239-6)
  - replaces: systemd (<< 239-6)

  </details>

- **systemd-journal-remote-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd-journal-remote
  - Install: `sudo apt-get install systemd-journal-remote-dbgsym`
  - Install (apt): `sudo apt install systemd-journal-remote-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-journal-remote (= 247.3-7+1-pmx11u1)

  </details>

- **systemd-sysv**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: system and service manager - SysV links
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-sysv`
  - Install (apt): `sudo apt install systemd-sysv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - preDepends: systemd
  - recommends: libnss-systemd, libpam-systemd
  - conflicts: file-rc, systemd-shim, sysvinit-core, upstart (<< 1.13.2-0ubuntu10~)
  - replaces: sysvinit-core, upstart (<< 1.13.2-0ubuntu10~)

  </details>

- **systemd-tests**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: tests for systemd
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-tests`
  - Install (apt): `sudo apt install systemd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libaudit1 (>= 1:2.2.1), libblkid1 (>= 2.24), libc6 (>= 2.30), libcap2 (>= 1:2.24-9~), libdbus-1-3 (>= 1.9.14), libgcrypt20 (>= 1.8.0), libglib2.0-0 (>= 2.26.0), libgpg-error0 (>= 1.14), libip4tc2 (>= 1.8.3), libkmod2 (>= 5~), liblz4-1 (>= 0.0~r130), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libselinux1 (>= 3.1~), libsystemd0 (= 247.3-7+1-pmx11u1), libudev1 (>= 247), python3, systemd (= 247.3-7+1-pmx11u1), zlib1g (>= 1:1.1.4)

  </details>

- **systemd-tests-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd-tests
  - Install: `sudo apt-get install systemd-tests-dbgsym`
  - Install (apt): `sudo apt install systemd-tests-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-tests (= 247.3-7+1-pmx11u1)

  </details>

- **systemd-timesyncd**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: minimalistic service to synchronize local time with NTP servers
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-timesyncd`
  - Install (apt): `sudo apt install systemd-timesyncd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: standard
  - depends: adduser, libc6 (>= 2.29), systemd (= 247.3-7+1-pmx11u1)
  - conflicts: time-daemon
  - breaks: systemd (<< 245.4-2~)
  - replaces: systemd (<< 245.4-2~), time-daemon
  - provides: time-daemon

  </details>

- **systemd-timesyncd-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for systemd-timesyncd
  - Install: `sudo apt-get install systemd-timesyncd-dbgsym`
  - Install (apt): `sudo apt install systemd-timesyncd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-timesyncd (= 247.3-7+1-pmx11u1)

  </details>


### <a id="packages-T"></a>T

- **trousers**
  - Latest version: 0.3.14+fixed1-1.2+pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: open-source TCG Software Stack (daemon)
  - Homepage: http://trousers.sourceforge.net/
  - Install: `sudo apt-get install trousers`
  - Install (apt): `sudo apt install trousers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Pierre Chifflier <pollux@debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.15), libssl1.1 (>= 1.1.0), lsb-base (>= 3.0-6), tpm-udev
  - breaks: udev (<< 136-1)

  </details>

- **trousers-dbg**
  - Latest version: 0.3.14+fixed1-1.2+pve3
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: open-source TCG Software Stack (debug)
  - Homepage: http://trousers.sourceforge.net/
  - Install: `sudo apt-get install trousers-dbg`
  - Install (apt): `sudo apt install trousers-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Pierre Chifflier <pollux@debian.org>
  - Section: debug
  - Priority: extra
  - depends: libtspi-dev (= 0.3.14+fixed1-1.2+pve1), libtspi-dev (= 0.3.14+fixed1-1.2+pve3), libtspi1 (= 0.3.14+fixed1-1.2+pve1), libtspi1 (= 0.3.14+fixed1-1.2+pve3), trousers (= 0.3.14+fixed1-1.2+pve1), trousers (= 0.3.14+fixed1-1.2+pve3)

  </details>


### <a id="packages-U"></a>U

- **udev**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: /dev/ and hotplug management daemon
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install udev`
  - Install (apt): `sudo apt install udev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: important
  - depends: adduser, dpkg (>= 1.19.3) | systemd-sysv, libacl1 (>= 2.2.23), libblkid1 (>= 2.24), libc6 (>= 2.30), libkmod2 (>= 5~), libselinux1 (>= 3.1~), libudev1 (= 247.3-7+1-pmx11u1), util-linux (>= 2.27.1)
  - conflicts: hal
  - breaks: systemd (<< 233-4)
  - replaces: systemd (<< 233-4)

  </details>

- **udev-dbgsym**
  - Latest version: 247.3-7+1-pmx11u1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for udev
  - Install: `sudo apt-get install udev-dbgsym`
  - Install (apt): `sudo apt install udev-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: udev (= 247.3-7+1-pmx11u1)

  </details>


### <a id="packages-V"></a>V

- **vncterm**
  - Latest version: 1.7-1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: VNC Terminal Emulator
  - Install: `sudo apt-get install vncterm`
  - Install (apt): `sudo apt install vncterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.15), libgnutls30 (>= 3.7.0), libjpeg62-turbo (>= 1.3.1), libpng16-16 (>= 1.6.2-1), zlib1g (>= 1:1.2.1)

  </details>


### <a id="packages-Z"></a>Z

- **zfs-dbg**
  - Latest version: 2.1.9-pve1
  - Architectures: all, amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: Debugging symbols for OpenZFS userland libraries and tools
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-dbg`
  - Install (apt): `sudo apt install zfs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libnvpair3linux (= 2.0.4-pve1), libuutil3linux (= 2.0.4-pve1), libzfs4linux (= 2.0.4-pve1), libzpool4linux (= 2.0.4-pve1), zfs-zed (= 2.0.4-pve1), zfsutils-linux (= 2.0.4-pve1)
  - suggests: libnvpair3linux-dbgsym, libpam-zfs-dbgsym, libuutil3linux-dbgsym, libzfs4linux-dbgsym, libzfsbootenv1linux-dbgsym, libzpool4linux-dbgsym, libzpool5linux-dbgsym, zfs-test-dbgsym, zfs-zed-dbgsym, zfsutils-linux-dbgsym

  </details>

- **zfs-dracut**
  - Latest version: 2.1.9-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS root filesystem capabilities for Linux - dracut
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-dracut`
  - Install (apt): `sudo apt install zfs-dracut`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: dracut, zfsutils-linux (>= 2.1.9-pve1)

  </details>

- **zfs-initramfs**
  - Latest version: 2.1.15-pve1
  - Architectures: all
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS root filesystem capabilities for Linux - initramfs
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-initramfs`
  - Install (apt): `sudo apt install zfs-initramfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: busybox-initramfs | busybox-static | busybox, initramfs-tools, zfsutils-linux (>= 2.0.4-pve1), zfsutils-linux (>= 2.0.5-pve1), zfsutils-linux (>= 2.1.1-pve1), zfsutils-linux (>= 2.1.1-pve2), zfsutils-linux (>= 2.1.1-pve3), zfsutils-linux (>= 2.1.11-pve1), zfsutils-linux (>= 2.1.14-pve1), zfsutils-linux (>= 2.1.15-pve1), zfsutils-linux (>= 2.1.2-pve1), zfsutils-linux (>= 2.1.4-pve1), zfsutils-linux (>= 2.1.5-pve1), zfsutils-linux (>= 2.1.6-pve1), zfsutils-linux (>= 2.1.7-pve1), zfsutils-linux (>= 2.1.7-pve2), zfsutils-linux (>= 2.1.7-pve3), zfsutils-linux (>= 2.1.9-pve1)
  - breaks: zfsutils-linux (<= 0.7.11-pve1~bpo1)
  - replaces: zfsutils-linux (<= 0.7.11-pve1~bpo1)

  </details>

- **zfs-test**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS test infrastructure and support scripts
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-test`
  - Install (apt): `sudo apt install zfs-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: acl, attr, bc, fio, ksh, libaio1 (>= 0.3.93), libc6 (>= 2.29), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libudev1 (>= 183), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9), libzpool4linux (>= 2.0.4), libzpool4linux (>= 2.0.5), libzpool5linux (>= 2.1.1), libzpool5linux (>= 2.1.11), libzpool5linux (>= 2.1.14), libzpool5linux (>= 2.1.15), libzpool5linux (>= 2.1.2), libzpool5linux (>= 2.1.4), libzpool5linux (>= 2.1.5), libzpool5linux (>= 2.1.6), libzpool5linux (>= 2.1.7), libzpool5linux (>= 2.1.9), lsscsi, mdadm, parted, python3, python3-pyzfs, sudo, sysstat, zfsutils-linux (>= 2.0.4-pve1), zfsutils-linux (>= 2.0.5-pve1), zfsutils-linux (>= 2.1.1-pve1), zfsutils-linux (>= 2.1.1-pve2), zfsutils-linux (>= 2.1.1-pve3), zfsutils-linux (>= 2.1.11-pve1), zfsutils-linux (>= 2.1.14-pve1), zfsutils-linux (>= 2.1.15-pve1), zfsutils-linux (>= 2.1.2-pve1), zfsutils-linux (>= 2.1.4-pve1), zfsutils-linux (>= 2.1.5-pve1), zfsutils-linux (>= 2.1.6-pve1), zfsutils-linux (>= 2.1.7-pve1), zfsutils-linux (>= 2.1.7-pve2), zfsutils-linux (>= 2.1.7-pve3), zfsutils-linux (>= 2.1.9-pve1), zlib1g (>= 1:1.2.3.3)
  - recommends: nfs-kernel-server
  - conflicts: zutils
  - breaks: zfsutils-linux (<= 0.7.9-2)
  - replaces: zfsutils-linux (<= 0.7.9-2)

  </details>

- **zfs-test-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for zfs-test
  - Install: `sudo apt-get install zfs-test-dbgsym`
  - Install (apt): `sudo apt install zfs-test-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-test (= 2.0.5-pve1), zfs-test (= 2.1.1-pve1), zfs-test (= 2.1.1-pve2), zfs-test (= 2.1.1-pve3), zfs-test (= 2.1.11-pve1), zfs-test (= 2.1.14-pve1), zfs-test (= 2.1.15-pve1), zfs-test (= 2.1.2-pve1), zfs-test (= 2.1.4-pve1), zfs-test (= 2.1.5-pve1), zfs-test (= 2.1.6-pve1), zfs-test (= 2.1.7-pve1), zfs-test (= 2.1.7-pve2), zfs-test (= 2.1.7-pve3), zfs-test (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **zfs-zed**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: OpenZFS Event Daemon
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfs-zed`
  - Install (apt): `sudo apt install zfs-zed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.28), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.0.4), libuutil3linux (>= 2.0.5), libuutil3linux (>= 2.1.1), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.14), libuutil3linux (>= 2.1.15), libuutil3linux (>= 2.1.2), libuutil3linux (>= 2.1.4), libuutil3linux (>= 2.1.5), libuutil3linux (>= 2.1.6), libuutil3linux (>= 2.1.7), libuutil3linux (>= 2.1.9), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9), zfsutils-linux (>= 2.0.4-pve1), zfsutils-linux (>= 2.0.5-pve1), zfsutils-linux (>= 2.1.1-pve1), zfsutils-linux (>= 2.1.1-pve2), zfsutils-linux (>= 2.1.1-pve3), zfsutils-linux (>= 2.1.11-pve1), zfsutils-linux (>= 2.1.14-pve1), zfsutils-linux (>= 2.1.15-pve1), zfsutils-linux (>= 2.1.2-pve1), zfsutils-linux (>= 2.1.4-pve1), zfsutils-linux (>= 2.1.5-pve1), zfsutils-linux (>= 2.1.6-pve1), zfsutils-linux (>= 2.1.7-pve1), zfsutils-linux (>= 2.1.7-pve2), zfsutils-linux (>= 2.1.7-pve3), zfsutils-linux (>= 2.1.9-pve1)
  - recommends: bsd-mailx | mailutils

  </details>

- **zfs-zed-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for zfs-zed
  - Install: `sudo apt-get install zfs-zed-dbgsym`
  - Install (apt): `sudo apt install zfs-zed-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-zed (= 2.0.5-pve1), zfs-zed (= 2.1.1-pve1), zfs-zed (= 2.1.1-pve2), zfs-zed (= 2.1.1-pve3), zfs-zed (= 2.1.11-pve1), zfs-zed (= 2.1.14-pve1), zfs-zed (= 2.1.15-pve1), zfs-zed (= 2.1.2-pve1), zfs-zed (= 2.1.4-pve1), zfs-zed (= 2.1.5-pve1), zfs-zed (= 2.1.6-pve1), zfs-zed (= 2.1.7-pve1), zfs-zed (= 2.1.7-pve2), zfs-zed (= 2.1.7-pve3), zfs-zed (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>

- **zfsutils-linux**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: command-line tools to manage OpenZFS filesystems
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install zfsutils-linux`
  - Install (apt): `sudo apt install zfsutils-linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.17), libnvpair3linux (>= 2.0.4), libnvpair3linux (>= 2.0.5), libnvpair3linux (>= 2.1.1), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.14), libnvpair3linux (>= 2.1.15), libnvpair3linux (>= 2.1.2), libnvpair3linux (>= 2.1.4), libnvpair3linux (>= 2.1.5), libnvpair3linux (>= 2.1.6), libnvpair3linux (>= 2.1.7), libnvpair3linux (>= 2.1.9), libuuid1 (>= 2.16), libuutil3linux (>= 2.0.4), libuutil3linux (>= 2.0.5), libuutil3linux (>= 2.1.1), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.14), libuutil3linux (>= 2.1.15), libuutil3linux (>= 2.1.2), libuutil3linux (>= 2.1.4), libuutil3linux (>= 2.1.5), libuutil3linux (>= 2.1.6), libuutil3linux (>= 2.1.7), libuutil3linux (>= 2.1.9), libzfs4linux (>= 2.0.4), libzfs4linux (>= 2.0.5), libzfs4linux (>= 2.1.1), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.14), libzfs4linux (>= 2.1.15), libzfs4linux (>= 2.1.2), libzfs4linux (>= 2.1.4), libzfs4linux (>= 2.1.5), libzfs4linux (>= 2.1.6), libzfs4linux (>= 2.1.7), libzfs4linux (>= 2.1.9), libzpool4linux (>= 2.0.4), libzpool4linux (>= 2.0.5), libzpool5linux (>= 2.1.1), libzpool5linux (>= 2.1.11), libzpool5linux (>= 2.1.14), libzpool5linux (>= 2.1.15), libzpool5linux (>= 2.1.2), libzpool5linux (>= 2.1.4), libzpool5linux (>= 2.1.5), libzpool5linux (>= 2.1.6), libzpool5linux (>= 2.1.7), libzpool5linux (>= 2.1.9), python3
  - recommends: lsb-base, zfs-zed
  - suggests: nfs-kernel-server, samba-common-bin (>= 3.0.23), zfs-initramfs
  - conflicts: zfs, zfs-fuse
  - provides: zfsutils

  </details>

- **zfsutils-linux-dbgsym**
  - Latest version: 2.1.15-pve1
  - Architectures: amd64
  - Suite: bullseye
  - Components: pvetest
  - Description: debug symbols for zfsutils-linux
  - Install: `sudo apt-get install zfsutils-linux-dbgsym`
  - Install (apt): `sudo apt install zfsutils-linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfsutils-linux (= 2.0.5-pve1), zfsutils-linux (= 2.1.1-pve1), zfsutils-linux (= 2.1.1-pve2), zfsutils-linux (= 2.1.1-pve3), zfsutils-linux (= 2.1.11-pve1), zfsutils-linux (= 2.1.14-pve1), zfsutils-linux (= 2.1.15-pve1), zfsutils-linux (= 2.1.2-pve1), zfsutils-linux (= 2.1.4-pve1), zfsutils-linux (= 2.1.5-pve1), zfsutils-linux (= 2.1.6-pve1), zfsutils-linux (= 2.1.7-pve1), zfsutils-linux (= 2.1.7-pve2), zfsutils-linux (= 2.1.7-pve3), zfsutils-linux (= 2.1.9-pve1)
  - breaks: zfs-dbg (<< 2.0.4~)
  - replaces: zfs-dbg (<< 2.0.4~)

  </details>


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Test repository; use with caution.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
