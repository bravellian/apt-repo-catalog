# Proxmox VE 8 - test (proxmox-8)

## Repository
- Repository ID: `proxmox-ve-8-test`
- OS: `proxmox-8`
- Source: `http://download.proxmox.com/debian/pve bookworm pvetest`

## Upstream documentation
- Documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories
- Key documentation URL: https://pve.proxmox.com/pve-docs/pve-admin-guide.html#sysadmin_package_repositories

## Key reference
- Key ID: `proxmox-release-bookworm`
- Expected fingerprints:
  - F4E136C67CDCE41AE6DE6FC81140AF8F639E0C39
- Key source URL: https://enterprise.proxmox.com/debian/proxmox-release-bookworm.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc | gpg --dearmor | sudo tee /usr/share/keyrings/proxmox-release-bookworm.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] http://download.proxmox.com/debian/pve bookworm pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-8-test.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/proxmox-release-bookworm.asc -o /tmp/proxmox-release-bookworm.asc
gpg --dearmor /tmp/proxmox-release-bookworm.asc
sudo install -m 0644 /tmp/proxmox-release-bookworm.gpg /usr/share/keyrings/proxmox-release-bookworm.gpg
echo "deb [signed-by=/usr/share/keyrings/proxmox-release-bookworm.gpg] http://download.proxmox.com/debian/pve bookworm pvetest" | sudo tee /etc/apt/sources.list.d/proxmox-ve-8-test.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (590)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-I">I</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-Q">Q</a> <a href="#packages-R">R</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a> <a href="#packages-Z">Z</a>
</div>


### <a id="packages-C"></a>C

- **corosync**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: adduser, libc6 (>= 2.34), libcfg7 (>= 3.1.0), libcmap4 (>= 2.99.3), libcorosync-common4 (>= 1.99.9), libcpg4 (>= 1.1.0), libknet1 (>= 1.18), libnozzle1 (>= 1.6), libqb100 (>= 2.0.3), libquorum5 (>= 1.99.9), libstatgrab10 (>= 0.92.1), libsystemd0, libvotequorum8 (>= 2.4.2), xsltproc

  </details>

- **corosync-dbgsym**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for corosync
  - Install: `sudo apt-get install corosync-dbgsym`
  - Install (apt): `sudo apt install corosync-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync (= 3.1.7-pve3), corosync (= 3.1.9-pve1)

  </details>

- **corosync-doc**
  - Latest version: 3.1.9-pve1
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: corosync, libc6 (>= 2.34), libcfg7 (>= 2.99.5), libcmap4 (>= 2.99.3), libcorosync-common4 (>= 1.99.9), libdbus-1-3 (>= 1.9.14), libqb100 (>= 2.0.3), libquorum5 (>= 1.99.9), libsnmp40 (>= 5.9.3+dfsg), libsystemd0
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: dbus

  </details>

- **corosync-notifyd-dbgsym**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for corosync-notifyd
  - Install: `sudo apt-get install corosync-notifyd-dbgsym`
  - Install (apt): `sudo apt install corosync-notifyd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-notifyd (= 3.1.7-pve3), corosync-notifyd (= 3.1.9-pve1)

  </details>

- **corosync-vqsim**
  - Latest version: 3.1.7-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcorosync-common4 (>= 1.99.9), libknet1 (>= 0.9), libqb100 (>= 2.0.3), libreadline8 (>= 6.0)

  </details>

- **corosync-vqsim-dbgsym**
  - Latest version: 3.1.7-pve2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for corosync-vqsim
  - Install: `sudo apt-get install corosync-vqsim-dbgsym`
  - Install (apt): `sudo apt install corosync-vqsim-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: corosync-vqsim (= 3.1.7-pve2)

  </details>


### <a id="packages-D"></a>D

- **dab**
  - Latest version: 3.7.1
  - Architectures: all
  - Suite: bookworm
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


### <a id="packages-F"></a>F

- **fonts-font-logos**
  - Latest version: 1.0.1-3
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: FRRouting suite of internet protocols (BGP, OSPF, IS-IS, ...)
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr`
  - Install (apt): `sudo apt install frr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: iproute2, libc-ares2 (>= 1.7.0), libc6 (>= 2.34), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.1.0), libjson-c5 (>= 0.15), libpam0g (>= 0.99.7.1), libprotobuf-c1 (>= 1.0.1), libreadline8 (>= 7.0~rc1), libyang2 (>= 2.0.0~), libyang3 (>= 3.7.8), logrotate (>= 3.2-11)
  - preDepends: adduser
  - recommends: frr-pythontools
  - suggests: frr-doc
  - conflicts: pimd, quagga, quagga-bgpd, quagga-core, quagga-isisd, quagga-ospf6d, quagga-ospfd, quagga-pimd, quagga-ripd, quagga-ripngd, zebra, zebra-pj
  - replaces: zebra, zebra-pj

  </details>

- **frr-dbgsym**
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for frr
  - Install: `sudo apt-get install frr-dbgsym`
  - Install (apt): `sudo apt install frr-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr (= 10.2.1-1+pve1), frr (= 10.2.1-1+pve2), frr (= 10.2.2-1+pve1), frr (= 10.2.3-1+pve1), frr (= 8.5.1-1+pve1), frr (= 8.5.2-1+pve1)

  </details>

- **frr-doc**
  - Latest version: 10.2.3-1+pve1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: FRRouting suite - user manual
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-doc`
  - Install (apt): `sudo apt install frr-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 5.2)
  - suggests: frr
  - conflicts: quagga-doc

  </details>

- **frr-pythontools**
  - Latest version: 10.2.3-1+pve1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: FRRouting suite - Python tools
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-pythontools`
  - Install (apt): `sudo apt install frr-pythontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (<< 10.2.1.0-~), frr (<< 10.2.2.0-~), frr (<< 10.2.3.0-~), frr (<< 8.5.1.0-~), frr (<< 8.5.2.0-~), frr (>= 10.2.1-1+pve1~), frr (>= 10.2.1-1+pve2~), frr (>= 10.2.2-1+pve1~), frr (>= 10.2.3-1+pve1~), frr (>= 8.5.1-1+pve1~), frr (>= 8.5.2-1+pve1~), python3:any

  </details>

- **frr-snmp**
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: FRRouting suite - SNMP support
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-snmp`
  - Install (apt): `sudo apt install frr-snmp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (= 10.2.1-1+pve1), frr (= 10.2.1-1+pve2), frr (= 10.2.2-1+pve1), frr (= 10.2.3-1+pve1), frr (= 8.5.1-1+pve1), frr (= 8.5.2-1+pve1), libc6 (>= 2.28), libsnmp40 (>= 5.9.3+dfsg)
  - recommends: snmpd

  </details>

- **frr-snmp-dbgsym**
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for frr-snmp
  - Install: `sudo apt-get install frr-snmp-dbgsym`
  - Install (apt): `sudo apt install frr-snmp-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr-snmp (= 10.2.1-1+pve1), frr-snmp (= 10.2.1-1+pve2), frr-snmp (= 10.2.2-1+pve1), frr-snmp (= 10.2.3-1+pve1), frr-snmp (= 8.5.1-1+pve1), frr-snmp (= 8.5.2-1+pve1)

  </details>

- **frr-test-tools**
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: FRRouting suite - Testing Tools
  - Homepage: https://www.frrouting.org/
  - Install: `sudo apt-get install frr-test-tools`
  - Install (apt): `sudo apt install frr-test-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: net
  - Priority: optional
  - depends: frr (= 10.2.1-1+pve1), frr (= 10.2.1-1+pve2), frr (= 10.2.2-1+pve1), frr (= 10.2.3-1+pve1), libc6 (>= 2.34)

  </details>

- **frr-test-tools-dbgsym**
  - Latest version: 10.2.3-1+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for frr-test-tools
  - Install: `sudo apt-get install frr-test-tools-dbgsym`
  - Install (apt): `sudo apt install frr-test-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: frr-test-tools (= 10.2.1-1+pve1), frr-test-tools (= 10.2.1-1+pve2), frr-test-tools (= 10.2.2-1+pve1), frr-test-tools (= 10.2.3-1+pve1)

  </details>

- **fwupd**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd`
  - Install (apt): `sudo apt install fwupd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libarchive13 (>= 3.2.1), libc6 (>= 2.34), libcbor0.8 (>= 0.8.0), libcurl3-gnutls (>= 7.63.0), libefiboot1 (>= 37), libflashrom1 (>= 1.3.0), libfwupd2 (>= 1.8.11), libgcab-1.0-0 (>= 1.5), libglib2.0-0 (>= 2.70.0), libgnutls30 (>= 3.7.3), libgudev-1.0-0 (>= 212), libgusb2 (>= 0.3.8), libjcat1 (>= 0.1.3), libjson-glib-1.0-0 (>= 1.5.2), liblzma5 (>= 5.1.1alpha+20120614), libmbim-glib4 (>= 1.28.0), libmbim-proxy, libmm-glib0 (>= 1.10.0), libpolkit-gobject-1-0 (>= 0.99), libprotobuf-c1 (>= 1.3.1), libqmi-glib5 (>= 1.18.0), libqmi-proxy, libsmbios-c2, libsqlite3-0 (>= 3.6.1), libsystemd0, libtss2-esys-3.0.2-0 (>= 2.3.1), libxmlb2 (>= 0.3.2), shared-mime-info
  - recommends: bolt, dbus, fwupd-signed, jq, python3, secureboot-db
  - suggests: gir1.2-fwupd-2.0, udisks2
  - conflicts: fwupdate-amd64-signed, fwupdate-arm64-signed, fwupdate-armhf-signed, fwupdate-i386-signed
  - breaks: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - replaces: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - provides: fwupdate

  </details>

- **fwupd-amd64-signed**
  - Latest version: 1:1.4+1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 1:1.4-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for fwupd
  - Install: `sudo apt-get install fwupd-dbgsym`
  - Install (apt): `sudo apt install fwupd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: fwupd (= 1.8.12-2+pmx1)

  </details>

- **fwupd-doc**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Test suite for firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd-tests`
  - Install (apt): `sudo apt install fwupd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, dbus-x11, fwupd, gnome-desktop-testing, libc6 (>= 2.34), libcurl3-gnutls (>= 7.63.0), libfwupd2 (>= 1.8.1), libglib2.0-0 (>= 2.55.1), libgnutls30 (>= 3.7.3), libgudev-1.0-0 (>= 146), libgusb2 (>= 0.3.6), libjson-glib-1.0-0 (>= 1.5.2), libxmlb2 (>= 0.1.5), policykit-1, python3, python3-gi, python3-requests
  - breaks: fwupd (<< 0.9.4-1)
  - replaces: fwupd (<< 0.9.4-1)

  </details>

- **fwupd-tests-dbgsym**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for fwupd-tests
  - Install: `sudo apt-get install fwupd-tests-dbgsym`
  - Install (apt): `sudo apt install fwupd-tests-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: fwupd-tests (= 1.8.12-2+pmx1)

  </details>

- **fwupd-unsigned**
  - Latest version: 1:1.4-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 1:1.4-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Firmware update daemon (Development information)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-unsigned-dev`
  - Install (apt): `sudo apt install fwupd-unsigned-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: fwupd-unsigned (= 1:1.4-1+pmx1)

  </details>


### <a id="packages-G"></a>G

- **gir1.2-fwupd-2.0**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GObject introspection data for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install gir1.2-fwupd-2.0`
  - Install (apt): `sudo apt install gir1.2-fwupd-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-json-1.0 (>= 1.1.1), libfwupd2 (>= 1.8.11)

  </details>

- **grub-common**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader (common files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-common`
  - Install (apt): `sudo apt install grub-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: gettext-base, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.36), libefiboot1 (>= 37), libefivar1 (>= 37), libfreetype6 (>= 2.2.1), libfuse2 (>= 2.8.4-1.4), liblzma5 (>= 5.1.1alpha+20120614)
  - recommends: os-prober (>= 1.33)
  - suggests: console-setup, desktop-base (>= 4.0.6), grub-emu, mtools, multiboot-doc, xorriso (>= 0.5.6.pl00)
  - conflicts: init-select
  - breaks: apport (<< 2.1.1), friendly-recovery (<< 0.2.13), lupin-support (<< 0.55), mdadm (<< 2.6.7-2)
  - replaces: grub-coreboot (<< 2.00-4), grub-efi (<< 1.99-1), grub-efi-amd64 (<< 2.00-4), grub-efi-ia32 (<< 2.00-4), grub-efi-ia64 (<< 2.00-4), grub-ieee1275 (<< 2.00-4), grub-linuxbios (<< 1.96+20080831-1), grub-pc (<< 2.00-4), grub-yeeloong (<< 2.00-4), init-select

  </details>

- **grub-common-dbgsym**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for grub-common
  - Install: `sudo apt-get install grub-common-dbgsym`
  - Install (apt): `sudo apt install grub-common-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)

  </details>

- **grub-coreboot**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Coreboot version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot`
  - Install (apt): `sudo apt install grub-coreboot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-coreboot-bin (= 2.06-13+pmx1), grub-coreboot-bin (= 2.06-13+pmx2), grub-coreboot-bin (= 2.06-13+pmx5), grub-coreboot-bin (= 2.06-13+pmx6), grub-coreboot-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: grub (<< 0.97-54), grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-linuxbios (<< 2.06-13+pmx1), grub-linuxbios (<< 2.06-13+pmx2), grub-linuxbios (<< 2.06-13+pmx5), grub-linuxbios (<< 2.06-13+pmx6), grub-linuxbios (<< 2.06-13+pmx7), grub-pc, grub-xen
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-linuxbios, grub-pc, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-coreboot-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Coreboot modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot-bin`
  - Install (apt): `sudo apt install grub-coreboot-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)
  - conflicts: grub-linuxbios (<< 2.06-13+pmx1), grub-linuxbios (<< 2.06-13+pmx2), grub-linuxbios (<< 2.06-13+pmx5), grub-linuxbios (<< 2.06-13+pmx6), grub-linuxbios (<< 2.06-13+pmx7)
  - replaces: grub-common (<= 1.97~beta2-1), grub-coreboot (<< 1.99-1), grub-linuxbios, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-coreboot-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Coreboot debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-coreboot-dbg`
  - Install (apt): `sudo apt install grub-coreboot-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-coreboot-bin (= 2.06-13+pmx1), grub-coreboot-bin (= 2.06-13+pmx2), grub-coreboot-bin (= 2.06-13+pmx5), grub-coreboot-bin (= 2.06-13+pmx6), grub-coreboot-bin (= 2.06-13+pmx7)

  </details>

- **grub-efi**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (dummy package)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi`
  - Install (apt): `sudo apt install grub-efi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-amd64 (= 2.06-13+pmx1), grub-efi-amd64 (= 2.06-13+pmx2), grub-efi-amd64 (= 2.06-13+pmx5), grub-efi-amd64 (= 2.06-13+pmx6), grub-efi-amd64 (= 2.06-13+pmx7)

  </details>

- **grub-efi-amd64**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64`
  - Install (apt): `sudo apt install grub-efi-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-amd64-bin (= 2.06-13+pmx1), grub-efi-amd64-bin (= 2.06-13+pmx2), grub-efi-amd64-bin (= 2.06-13+pmx5), grub-efi-amd64-bin (= 2.06-13+pmx6), grub-efi-amd64-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: elilo, grub, grub-coreboot, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc, grub-xen
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-efi-amd64-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-bin`
  - Install (apt): `sudo apt install grub-efi-amd64-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)
  - recommends: efibootmgr, grub-efi-amd64-signed
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi-amd64 (<< 1.99-1), grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-efi-amd64-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-AMD64 debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-amd64-dbg`
  - Install (apt): `sudo apt install grub-efi-amd64-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-amd64-bin (= 2.06-13+pmx1), grub-efi-amd64-bin (= 2.06-13+pmx2), grub-efi-amd64-bin (= 2.06-13+pmx5), grub-efi-amd64-bin (= 2.06-13+pmx6), grub-efi-amd64-bin (= 2.06-13+pmx7)

  </details>

- **grub-efi-amd64-signed**
  - Latest version: 1+2.06+13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (amd64 UEFI signed by Debian)
  - Install: `sudo apt-get install grub-efi-amd64-signed`
  - Install (apt): `sudo apt install grub-efi-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GRUB Maintainers <pkg-grub-devel@alioth-lists.debian.net>
  - Section: admin
  - Priority: optional
  - depends: grub-common (>= 2.06-13+pmx1), grub-common (>= 2.06-13+pmx2), grub-common (>= 2.06-13+pmx5), grub-common (>= 2.06-13+pmx6), grub-common (>= 2.06-13+pmx7)
  - recommends: shim-signed

  </details>

- **grub-efi-amd64-signed-template**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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

- **grub-efi-ia32**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32`
  - Install (apt): `sudo apt install grub-efi-ia32`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-ia32-bin (= 2.06-13+pmx1), grub-efi-ia32-bin (= 2.06-13+pmx2), grub-efi-ia32-bin (= 2.06-13+pmx5), grub-efi-ia32-bin (= 2.06-13+pmx6), grub-efi-ia32-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: elilo, grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-ieee1275, grub-legacy, grub-pc, grub-xen
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi, grub-efi-amd64, grub-ieee1275, grub-legacy, grub-pc, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-efi-ia32-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32-bin`
  - Install (apt): `sudo apt install grub-efi-ia32-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)
  - recommends: efibootmgr
  - replaces: grub-common (<= 1.97~beta2-1), grub-efi, grub-efi-ia32 (<< 1.99-1), grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-efi-ia32-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (EFI-IA32 debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-efi-ia32-dbg`
  - Install (apt): `sudo apt install grub-efi-ia32-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-ia32-bin (= 2.06-13+pmx1), grub-efi-ia32-bin (= 2.06-13+pmx2), grub-efi-ia32-bin (= 2.06-13+pmx5), grub-efi-ia32-bin (= 2.06-13+pmx6), grub-efi-ia32-bin (= 2.06-13+pmx7)

  </details>

- **grub-emu**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (emulated version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-emu`
  - Install (apt): `sudo apt install grub-emu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.36), libgcc-s1 (>= 3.0), libsdl1.2debian (>= 1.2.15)
  - replaces: grub-common (<= 1.97~beta3-1)

  </details>

- **grub-emu-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (emulated debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-emu-dbg`
  - Install (apt): `sudo apt install grub-emu-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-emu (= 2.06-13+pmx1), grub-emu (= 2.06-13+pmx2), grub-emu (= 2.06-13+pmx5), grub-emu (= 2.06-13+pmx6), grub-emu (= 2.06-13+pmx7)

  </details>

- **grub-emu-dbgsym**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for grub-emu
  - Install: `sudo apt-get install grub-emu-dbgsym`
  - Install (apt): `sudo apt install grub-emu-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-emu (= 2.06-13+pmx1), grub-emu (= 2.06-13+pmx2), grub-emu (= 2.06-13+pmx5), grub-emu (= 2.06-13+pmx6), grub-emu (= 2.06-13+pmx7)

  </details>

- **grub-firmware-qemu**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Open Firmware version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275`
  - Install (apt): `sudo apt install grub-ieee1275`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-ieee1275-bin (= 2.06-13+pmx1), grub-ieee1275-bin (= 2.06-13+pmx2), grub-ieee1275-bin (= 2.06-13+pmx5), grub-ieee1275-bin (= 2.06-13+pmx6), grub-ieee1275-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-legacy, grub-pc, grub-xen
  - replaces: grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-legacy, grub-pc, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-ieee1275-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Open Firmware modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275-bin`
  - Install (apt): `sudo apt install grub-ieee1275-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)
  - replaces: grub-common (<= 1.97~beta2-1), grub-ieee1275 (<< 1.99-1), grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-ieee1275-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Open Firmware debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-ieee1275-dbg`
  - Install (apt): `sudo apt install grub-ieee1275-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-ieee1275-bin (= 2.06-13+pmx1), grub-ieee1275-bin (= 2.06-13+pmx2), grub-ieee1275-bin (= 2.06-13+pmx5), grub-ieee1275-bin (= 2.06-13+pmx6), grub-ieee1275-bin (= 2.06-13+pmx7)

  </details>

- **grub-linuxbios**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (dummy package)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-linuxbios`
  - Install (apt): `sudo apt install grub-linuxbios`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: oldlibs
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-coreboot (= 2.06-13+pmx1), grub-coreboot (= 2.06-13+pmx2), grub-coreboot (= 2.06-13+pmx5), grub-coreboot (= 2.06-13+pmx6), grub-coreboot (= 2.06-13+pmx7)

  </details>

- **grub-pc**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc`
  - Install (apt): `sudo apt install grub-pc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-pc-bin (= 2.06-13+pmx1), grub-pc-bin (= 2.06-13+pmx2), grub-pc-bin (= 2.06-13+pmx5), grub-pc-bin (= 2.06-13+pmx6), grub-pc-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-xen
  - replaces: grub, grub-common (<= 1.97~beta2-1), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-pc-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc-bin`
  - Install (apt): `sudo apt install grub-pc-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.36)
  - suggests: desktop-base (>= 4.0.6)
  - replaces: grub-common (<= 1.97~beta2-1), grub-pc (<< 1.99-1), grub2 (<< 2.06-13+pmx1), grub2 (<< 2.06-13+pmx2), grub2 (<< 2.06-13+pmx5), grub2 (<< 2.06-13+pmx6), grub2 (<< 2.06-13+pmx7)

  </details>

- **grub-pc-bin-dbgsym**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for grub-pc-bin
  - Install: `sudo apt-get install grub-pc-bin-dbgsym`
  - Install (apt): `sudo apt install grub-pc-bin-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-pc-bin (= 2.06-13+pmx1), grub-pc-bin (= 2.06-13+pmx2), grub-pc-bin (= 2.06-13+pmx5), grub-pc-bin (= 2.06-13+pmx6), grub-pc-bin (= 2.06-13+pmx7)

  </details>

- **grub-pc-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (PC/BIOS debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-pc-dbg`
  - Install (apt): `sudo apt install grub-pc-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-pc-bin (= 2.06-13+pmx1), grub-pc-bin (= 2.06-13+pmx2), grub-pc-bin (= 2.06-13+pmx5), grub-pc-bin (= 2.06-13+pmx6), grub-pc-bin (= 2.06-13+pmx7)

  </details>

- **grub-rescue-pc**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (starfield theme)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-theme-starfield`
  - Install (apt): `sudo apt install grub-theme-starfield`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)

  </details>

- **grub-xen**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Xen version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen`
  - Install (apt): `sudo apt install grub-xen`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-xen-bin (= 2.06-13+pmx1), grub-xen-bin (= 2.06-13+pmx2), grub-xen-bin (= 2.06-13+pmx5), grub-xen-bin (= 2.06-13+pmx6), grub-xen-bin (= 2.06-13+pmx7), grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7), ucf
  - conflicts: grub (<< 0.97-54), grub-coreboot, grub-efi-amd64, grub-efi-ia32, grub-ieee1275, grub-legacy, grub-pc

  </details>

- **grub-xen-bin**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Xen modules)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-bin`
  - Install (apt): `sudo apt install grub-xen-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7)

  </details>

- **grub-xen-dbg**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Xen debug files)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-dbg`
  - Install (apt): `sudo apt install grub-xen-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-xen-bin (= 2.06-13+pmx1), grub-xen-bin (= 2.06-13+pmx2), grub-xen-bin (= 2.06-13+pmx5), grub-xen-bin (= 2.06-13+pmx6), grub-xen-bin (= 2.06-13+pmx7)

  </details>

- **grub-xen-host**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader, version 2 (Xen host version)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub-xen-host`
  - Install (apt): `sudo apt install grub-xen-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-xen-bin (= 2.06-13+pmx1), grub-xen-bin (= 2.06-13+pmx2), grub-xen-bin (= 2.06-13+pmx5), grub-xen-bin (= 2.06-13+pmx6), grub-xen-bin (= 2.06-13+pmx7)

  </details>

- **grub2-common**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: GRand Unified Bootloader (common files for version 2)
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install grub2-common`
  - Install (apt): `sudo apt install grub2-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: dpkg (>= 1.15.4), grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.36), libefiboot1 (>= 37), libefivar1 (>= 37), liblzma5 (>= 5.1.1alpha+20120614)
  - conflicts: grub-legacy
  - breaks: grub (<< 0.97-54), grub-cloud-amd64 (<< 0.0.4), grub-coreboot (<< 2.02+dfsg1-7), grub-doc (<< 0.97-32), grub-efi-amd64 (<< 2.02+dfsg1-7), grub-efi-arm (<< 2.02+dfsg1-7), grub-efi-arm64 (<< 2.02+dfsg1-7), grub-efi-ia32 (<< 2.02+dfsg1-7), grub-efi-ia64 (<< 2.02+dfsg1-7), grub-ieee1275 (<< 2.02+dfsg1-7), grub-legacy-doc (<< 0.97-59), grub-pc (<< 2.02+dfsg1-7), grub-uboot (<< 2.02+dfsg1-7), grub-xen (<< 2.02+dfsg1-7), grub-yeeloong (<< 2.02+dfsg1-7), shim (<< 0.9+1474479173.6c180c6-0ubuntu1~)
  - replaces: grub, grub-cloud-amd64 (<< 0.0.4), grub-common (<< 1.99-1), grub-coreboot (<< 2.02+dfsg1-7), grub-doc (<< 0.97-32), grub-efi-amd64 (<< 2.02+dfsg1-7), grub-efi-arm (<< 2.02+dfsg1-7), grub-efi-arm64 (<< 2.02+dfsg1-7), grub-efi-ia32 (<< 2.02+dfsg1-7), grub-efi-ia64 (<< 2.02+dfsg1-7), grub-ieee1275 (<< 2.02+dfsg1-7), grub-legacy, grub-legacy-doc (<< 0.97-59), grub-pc (<< 2.02+dfsg1-7), grub-uboot (<< 2.02+dfsg1-7), grub-xen (<< 2.02+dfsg1-7), grub-yeeloong (<< 2.02+dfsg1-7)

  </details>

- **grub2-common-dbgsym**
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for grub2-common
  - Install: `sudo apt-get install grub2-common-dbgsym`
  - Install (apt): `sudo apt install grub2-common-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: grub2-common (= 2.06-13+pmx1), grub2-common (= 2.06-13+pmx2), grub2-common (= 2.06-13+pmx5), grub2-common (= 2.06-13+pmx6), grub2-common (= 2.06-13+pmx7)

  </details>


### <a id="packages-I"></a>I

- **ifupdown2**
  - Latest version: 3.2.0-1+pmx11
  - Architectures: all
  - Suite: bookworm
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
  - depends: ethtool, iproute2, python3-setuptools, python3-six, python3-systemd, python3:any
  - suggests: bridge-utils, ethtool, isc-dhcp-client, python3-gvgen, python3-mako
  - conflicts: ifupdown
  - replaces: ifupdown
  - provides: ifupdown

  </details>

- **iscsiuio**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: iSCSI offloading daemon for QLogic devices
  - Homepage: https://www.open-iscsi.com/
  - Install: `sudo apt-get install iscsiuio`
  - Install (apt): `sudo apt install iscsiuio`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: net
  - Priority: optional
  - depends: init-system-helpers (>= 1.51), libc6 (>= 2.34), libopeniscsiusr, libsystemd0, udev

  </details>

- **iscsiuio-dbgsym**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for iscsiuio
  - Install: `sudo apt-get install iscsiuio-dbgsym`
  - Install (apt): `sudo apt install iscsiuio-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: debug
  - Priority: optional
  - depends: iscsiuio (= 2.1.8-1.pve1)

  </details>


### <a id="packages-K"></a>K

- **kpartx**
  - Latest version: 0.9.4-5~bpo11+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: create device mappings for partitions
  - Homepage: http://christophe.varoqui.free.fr/
  - Install: `sudo apt-get install kpartx`
  - Install (apt): `sudo apt install kpartx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian DM Multipath Team <team+linux-blocks@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: dmsetup, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), udev

  </details>

- **kpartx-dbgsym**
  - Latest version: 0.9.4-5~bpo11+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for kpartx
  - Install: `sudo apt-get install kpartx-dbgsym`
  - Install (apt): `sudo apt install kpartx-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian DM Multipath Team <team+linux-blocks@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: kpartx (= 0.9.4-4~bpo12+1), kpartx (= 0.9.4-5~bpo11+1)

  </details>

- **ksm-control-daemon**
  - Latest version: 1.5-1
  - Architectures: all
  - Suite: bookworm
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

- **libcfg-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcfg7 (= 3.1.7-pve3), libcfg7 (= 3.1.9-pve1), libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1)

  </details>

- **libcfg7**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libcfg7
  - Install: `sudo apt-get install libcfg7-dbgsym`
  - Install (apt): `sudo apt install libcfg7-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcfg7 (= 3.1.7-pve3), libcfg7 (= 3.1.9-pve1)

  </details>

- **libcmap-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcmap4 (= 3.1.7-pve3), libcmap4 (= 3.1.9-pve1), libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1)

  </details>

- **libcmap4**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libcmap4
  - Install: `sudo apt-get install libcmap4-dbgsym`
  - Install (apt): `sudo apt install libcmap4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcmap4 (= 3.1.7-pve3), libcmap4 (= 3.1.9-pve1)

  </details>

- **libcorosync-common-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcorosync-common4 (= 3.1.7-pve3), libcorosync-common4 (= 3.1.9-pve1), libqb-dev

  </details>

- **libcorosync-common4**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libcorosync-common4
  - Install: `sudo apt-get install libcorosync-common4-dbgsym`
  - Install (apt): `sudo apt install libcorosync-common4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcorosync-common4 (= 3.1.7-pve3), libcorosync-common4 (= 3.1.9-pve1)

  </details>

- **libcpg-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1), libcpg4 (= 3.1.7-pve3), libcpg4 (= 3.1.9-pve1)

  </details>

- **libcpg4**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcorosync-common4 (>= 1.99.9), libqb100 (>= 2.0.1)

  </details>

- **libcpg4-dbgsym**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libcpg4
  - Install: `sudo apt-get install libcpg4-dbgsym`
  - Install (apt): `sudo apt install libcpg4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libcpg4 (= 3.1.7-pve3), libcpg4 (= 3.1.9-pve1)

  </details>

- **libfwupd-dev**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: development files for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd-dev`
  - Install (apt): `sudo apt install libfwupd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-fwupd-2.0 (= 1.8.12-2+pmx1), libcurl4-gnutls-dev, libfwupd2 (= 1.8.12-2+pmx1), libglib2.0-dev (>= 2.45.8), libjcat-dev, libjson-glib-dev (>= 1.1.1)
  - breaks: fwupd-dev (<< 0.5.4-2~)
  - replaces: fwupd-dev (<< 0.5.4-2~)

  </details>

- **libfwupd2**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Firmware update daemon library
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd2`
  - Install (apt): `sudo apt install libfwupd2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libcurl3-gnutls (>= 7.63.0), libglib2.0-0 (>= 2.63.1), libjcat1 (>= 0.1.0), libjson-glib-1.0-0 (>= 1.5.2)

  </details>

- **libfwupd2-dbgsym**
  - Latest version: 1.8.12-2+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libfwupd2
  - Install: `sudo apt-get install libfwupd2-dbgsym`
  - Install (apt): `sudo apt install libfwupd2-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libfwupd2 (= 1.8.12-2+pmx1)

  </details>

- **libjs-extjs**
  - Latest version: 7.0.0-5
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 1.20230525-pve1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Suite: bookworm
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
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libknet1 (= 1.25-pve1), libknet1 (= 1.26-pve1), libknet1 (= 1.28-pve1), libknet1 (= 1.30-pve1), libknet1 (= 1.30-pve2)
  - suggests: libknet-doc (= 1.25-pve1), libknet-doc (= 1.26-pve1), libknet-doc (= 1.28-pve1), libknet-doc (= 1.30-pve1), libknet-doc (= 1.30-pve2)

  </details>

- **libknet-doc**
  - Latest version: 1.30-pve2
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libbz2-1.0, libc6 (>= 2.34), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20110809), liblzo2-2 (>= 2.02), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2), zlib1g (>= 1:1.1.4)

  </details>

- **libknet1-dbgsym**
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libknet1
  - Install: `sudo apt-get install libknet1-dbgsym`
  - Install (apt): `sudo apt install libknet1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libknet1 (= 1.25-pve1), libknet1 (= 1.26-pve1), libknet1 (= 1.28-pve1), libknet1 (= 1.30-pve1), libknet1 (= 1.30-pve2)

  </details>

- **libnozzle-dev**
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libnozzle1 (= 1.25-pve1), libnozzle1 (= 1.26-pve1), libnozzle1 (= 1.28-pve1), libnozzle1 (= 1.30-pve1), libnozzle1 (= 1.30-pve2)
  - suggests: libknet-doc (= 1.25-pve1), libknet-doc (= 1.26-pve1), libknet-doc (= 1.28-pve1), libknet-doc (= 1.30-pve1), libknet-doc (= 1.30-pve2)

  </details>

- **libnozzle1**
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.33), libnl-3-200 (>= 3.2.21), libnl-route-3-200 (>= 3.2.7)

  </details>

- **libnozzle1-dbgsym**
  - Latest version: 1.30-pve2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnozzle1
  - Install: `sudo apt-get install libnozzle1-dbgsym`
  - Install (apt): `sudo apt install libnozzle1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libnozzle1 (= 1.25-pve1), libnozzle1 (= 1.26-pve1), libnozzle1 (= 1.28-pve1), libnozzle1 (= 1.30-pve1), libnozzle1 (= 1.30-pve2)

  </details>

- **libnss-myhostname**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34)

  </details>

- **libnss-myhostname-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnss-myhostname
  - Install: `sudo apt-get install libnss-myhostname-dbgsym`
  - Install (apt): `sudo apt install libnss-myhostname-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-myhostname (= 252.11-pve1), libnss-myhostname (= 252.12-pmx1)

  </details>

- **libnss-mymachines**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), systemd-container (= 252.11-pve1), systemd-container (= 252.12-pmx1)

  </details>

- **libnss-mymachines-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnss-mymachines
  - Install: `sudo apt-get install libnss-mymachines-dbgsym`
  - Install (apt): `sudo apt install libnss-mymachines-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-mymachines (= 252.11-pve1), libnss-mymachines (= 252.12-pmx1)

  </details>

- **libnss-resolve**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), systemd-resolved (= 252.11-pve1), systemd-resolved (= 252.12-pmx1)

  </details>

- **libnss-resolve-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnss-resolve
  - Install: `sudo apt-get install libnss-resolve-dbgsym`
  - Install (apt): `sudo apt install libnss-resolve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-resolve (= 252.11-pve1), libnss-resolve (= 252.12-pmx1)

  </details>

- **libnss-systemd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), systemd (= 252.11-pve1), systemd (= 252.12-pmx1)

  </details>

- **libnss-systemd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnss-systemd
  - Install: `sudo apt-get install libnss-systemd-dbgsym`
  - Install (apt): `sudo apt install libnss-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libnss-systemd (= 252.11-pve1), libnss-systemd (= 252.12-pmx1)

  </details>

- **libnvpair3linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.14), libc6 (>= 2.30), libc6 (>= 2.7), libtirpc3 (>= 1.0.2)
  - breaks: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3
  - replaces: libnvpair1, libnvpair1linux, libnvpair2linux, libnvpair3

  </details>

- **libnvpair3linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libnvpair3linux
  - Install: `sudo apt-get install libnvpair3linux-dbgsym`
  - Install (apt): `sudo apt install libnvpair3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libnvpair3linux (= 2.1.11-pve2), libnvpair3linux (= 2.1.12-pve1), libnvpair3linux (= 2.1.13-pve1), libnvpair3linux (= 2.2.0-pve1), libnvpair3linux (= 2.2.0-pve2), libnvpair3linux (= 2.2.0-pve3), libnvpair3linux (= 2.2.0-pve4), libnvpair3linux (= 2.2.2-pve1), libnvpair3linux (= 2.2.2-pve2), libnvpair3linux (= 2.2.3-pve1), libnvpair3linux (= 2.2.3-pve2), libnvpair3linux (= 2.2.4-pve1), libnvpair3linux (= 2.2.6-pve1), libnvpair3linux (= 2.2.7-pve1), libnvpair3linux (= 2.2.7-pve2), libnvpair3linux (= 2.2.8-pve1), libnvpair3linux (= 2.2.9-pve1)

  </details>

- **libopeniscsiusr**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: iSCSI userspace library
  - Homepage: https://www.open-iscsi.com/
  - Install: `sudo apt-get install libopeniscsiusr`
  - Install (apt): `sudo apt install libopeniscsiusr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: net
  - Priority: optional
  - depends: libc6 (>= 2.33), libkmod2 (>= 5~)

  </details>

- **libopeniscsiusr-dbgsym**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libopeniscsiusr
  - Install: `sudo apt-get install libopeniscsiusr-dbgsym`
  - Install (apt): `sudo apt install libopeniscsiusr-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libopeniscsiusr (= 2.1.8-1.pve1)

  </details>

- **libopeniscsiusr-dev**
  - Latest version: 2.1.8-1.pve1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: iSCSI userspace library headers
  - Homepage: https://www.open-iscsi.com/
  - Install: `sudo apt-get install libopeniscsiusr-dev`
  - Install (apt): `sudo apt install libopeniscsiusr-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: net
  - Priority: optional
  - depends: libopeniscsiusr

  </details>

- **libpam-systemd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: default-dbus-system-bus | dbus-system-bus, libc6 (>= 2.34), libcap2 (>= 1:2.10), libpam-runtime, libpam0g (>= 0.99.7.1), systemd (= 252.11-pve1), systemd (= 252.12-pmx1), systemd-sysv
  - recommends: dbus-user-session
  - provides: default-logind (= 252.11-pve1), default-logind (= 252.12-pmx1), logind (= 252.11-pve1), logind (= 252.12-pmx1)

  </details>

- **libpam-systemd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libpam-systemd
  - Install: `sudo apt-get install libpam-systemd-dbgsym`
  - Install (apt): `sudo apt install libpam-systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libpam-systemd (= 252.11-pve1), libpam-systemd (= 252.12-pmx1)

  </details>

- **libpam-zfs**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.14), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libpam-runtime, libpam0g (>= 1.1.0), libssl3 (>= 3.0.0), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), libzfs4linux (>= 2.2.0), libzfs4linux (>= 2.2.2), libzfs4linux (>= 2.2.3), libzfs4linux (>= 2.2.4), libzfs4linux (>= 2.2.6), libzfs4linux (>= 2.2.7), libzfs4linux (>= 2.2.8), libzfs4linux (>= 2.2.9)

  </details>

- **libpam-zfs-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libpam-zfs
  - Install: `sudo apt-get install libpam-zfs-dbgsym`
  - Install (apt): `sudo apt install libpam-zfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libpam-zfs (= 2.1.11-pve2), libpam-zfs (= 2.1.12-pve1), libpam-zfs (= 2.1.13-pve1), libpam-zfs (= 2.2.0-pve1), libpam-zfs (= 2.2.0-pve2), libpam-zfs (= 2.2.0-pve3), libpam-zfs (= 2.2.0-pve4), libpam-zfs (= 2.2.2-pve1), libpam-zfs (= 2.2.2-pve2), libpam-zfs (= 2.2.3-pve1), libpam-zfs (= 2.2.3-pve2), libpam-zfs (= 2.2.4-pve1), libpam-zfs (= 2.2.6-pve1), libpam-zfs (= 2.2.7-pve1), libpam-zfs (= 2.2.7-pve2), libpam-zfs (= 2.2.8-pve1), libpam-zfs (= 2.2.9-pve1)

  </details>

- **libproxmox-acme-perl**
  - Latest version: 1.6.0
  - Architectures: all
  - Suite: bookworm
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
  - depends: libpve-common-perl (>= 6~), perl:any
  - recommends: libproxmox-acme-plugins
  - breaks: libpve-common-perl (<< 6.0-20)
  - replaces: libpve-common-perl (<< 6.0-20)

  </details>

- **libproxmox-acme-plugins**
  - Latest version: 1.6.0
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 1.5.2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2)
  - breaks: pve-qemu-kvm (<< 5.2.0-1)

  </details>

- **libproxmox-backup-qemu0-dbgsym**
  - Latest version: 1.5.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libproxmox-backup-qemu0
  - Install: `sudo apt-get install libproxmox-backup-qemu0-dbgsym`
  - Install (apt): `sudo apt install libproxmox-backup-qemu0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libproxmox-backup-qemu0 (= 1.4.0), libproxmox-backup-qemu0 (= 1.4.1), libproxmox-backup-qemu0 (= 1.5.1), libproxmox-backup-qemu0 (= 1.5.2)

  </details>

- **libproxmox-backup-qemu0-dev**
  - Latest version: 1.5.2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libproxmox-backup-qemu0 (= 1.4.0), libproxmox-backup-qemu0 (= 1.4.1), libproxmox-backup-qemu0 (= 1.5.1), libproxmox-backup-qemu0 (= 1.5.2)

  </details>

- **libproxmox-rs-perl**
  - Latest version: 0.3.5
  - Architectures: all, amd64
  - Suite: bookworm
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
  - depends: libpve-rs-perl (>= 0.7.2) | libpmg-rs-perl (>= 0.6.2), libpve-rs-perl (>= 0.8.10) | libpmg-rs-perl (>= 0.7.6), libpve-rs-perl (>= 0.8.5) | libpmg-rs-perl (>= 0.6.2), libpve-rs-perl (>= 0.9.2) | libpmg-rs-perl (>= 0.7.7), perl:any
  - breaks: libpmg-rs-perl (<< 0.6.2), libpve-rs-perl (<< 0.7.2)
  - replaces: libpve-rs-perl (<< 0.6.0)

  </details>

- **libpve-access-control**
  - Latest version: 8.2.2
  - Architectures: all
  - Suite: bookworm
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
  - depends: libauthen-pam-perl, libcrypt-openssl-random-perl, libcrypt-openssl-rsa-perl, libjson-perl, libjson-xs-perl, libmime-base32-perl, libnet-ldap-perl, libnet-ssleay-perl, libpve-cluster-perl, libpve-common-perl (>= 6.0-18), libpve-common-perl (>= 8.0.8), libpve-rs-perl (>= 0.8.3), libpve-rs-perl (>= 0.9.3), libpve-u2f-server-perl (>= 1.0-2), liburi-perl, libuuid-perl, perl:any, pve-cluster (>= 6.1-4)
  - breaks: pve-manager (<< 7.0-15)

  </details>

- **libpve-apiclient-perl**
  - Latest version: 3.3.2
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 8.1.2
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Virtual Environment cluster Perl API modules.
  - Install: `sudo apt-get install libpve-cluster-api-perl`
  - Install (apt): `sudo apt install libpve-cluster-api-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: faketime, libcrypt-ssleay-perl, libdigest-hmac-perl, libpve-access-control, libpve-apiclient-perl, libpve-cluster-perl (= 8.0.1), libpve-cluster-perl (= 8.0.10), libpve-cluster-perl (= 8.0.2), libpve-cluster-perl (= 8.0.3), libpve-cluster-perl (= 8.0.4), libpve-cluster-perl (= 8.0.5), libpve-cluster-perl (= 8.0.6), libpve-cluster-perl (= 8.0.7), libpve-cluster-perl (= 8.0.8), libpve-cluster-perl (= 8.1.0), libpve-cluster-perl (= 8.1.1), libpve-cluster-perl (= 8.1.2), libpve-common-perl (>= 5.0-28), libpve-common-perl (>= 8.0.6), libuuid-perl, openssl, perl:any, rsync
  - breaks: pve-cluster (<= 6.0-7)
  - replaces: pve-cluster (<= 6.0-7)

  </details>

- **libpve-cluster-perl**
  - Latest version: 8.1.2
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 8.3.7
  - Architectures: all
  - Suite: bookworm
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
  - breaks: ifupdown2 (<< 2.0.1-1+pve5), libpve-guest-common-perl (<< 5.0.1), pmg-api (<< 7.1-5), pve-container (<< 4.3-1), pve-manager (<< 7.2-9), qemu-server (<< 8.0.1)

  </details>

- **libpve-guest-common-perl**
  - Latest version: 5.2.2
  - Architectures: all
  - Suite: bookworm
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
  - depends: libpve-access-control, libpve-cluster-perl (>= 7-2-3), libpve-cluster-perl (>= 8.1.0), libpve-common-perl (>= 8.0.2), libpve-storage-perl (>= 7.0-14), libpve-storage-perl (>= 8.3.4), perl:any, proxmox-websocket-tunnel, pve-cluster
  - breaks: libpve-common-perl (<< 4.0-89), libpve-http-server-perl (<< 5.0.2), pve-container (<< 3.1-4), pve-manager (<< 8.0.0~7), qemu-server (<< 6.1-19)
  - replaces: libpve-common-perl (<< 4.0-89), pve-manager (<< 4.4-10)

  </details>

- **libpve-http-server-perl**
  - Latest version: 5.2.2
  - Architectures: all
  - Suite: bookworm
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
  - depends: libanyevent-http-perl, libanyevent-perl (>= 7.140-3), libcrypt-ssleay-perl, libhtml-parser-perl, libhttp-date-perl, libhttp-message-perl, libio-socket-ssl-perl, libjs-bootstrap, libjs-jquery, libjson-perl, libnet-ip-perl, libpve-common-perl (>= 8.0.2), liburi-perl, perl:any
  - breaks: libpve-storage-perl (<< 7.0-11), libpve-storage-perl (<< 8.2.5), pmg-api (<< 6.1-5), pmg-api (<< 8.1.4), pve-manager (<< 6.1-6), pve-manager (<< 8.2.7)

  </details>

- **libpve-network-api-perl**
  - Latest version: 0.11.3
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: API endpoints for Proxmox VE's SDN stack
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-network-api-perl`
  - Install (apt): `sudo apt install libpve-network-api-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libpve-common-perl (>= 5.0-45), libpve-network-perl (= 0.10.0), libpve-network-perl (= 0.10.1), libpve-network-perl (= 0.11.0), libpve-network-perl (= 0.11.1), libpve-network-perl (= 0.11.2), libpve-network-perl (= 0.11.3), libpve-network-perl (= 0.9.9), perl:any, pve-cluster (>= 8.0.9), pve-firewall (>= 5.1.0~)
  - breaks: libpve-network-perl (<< 0.9.9~)
  - replaces: pve-cluster (<< 0.9.9~)

  </details>

- **libpve-network-perl**
  - Latest version: 0.11.3
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox VE's SDN (Software Defined Network) stack
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-network-perl`
  - Install (apt): `sudo apt install libpve-network-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libio-socket-ssl-perl, libnet-ip-perl, libnet-subnet-perl, libnetaddr-ip-perl, libpve-common-perl (>= 5.0-45), libpve-common-perl (>= 8.3.5), perl, perl:any, pve-cluster (>= 7.3~), pve-cluster (>= 8.0.10), pve-cluster (>= 8.0.5)
  - recommends: frr-pythontools (>= 8.5.1~), ifupdown2
  - suggests: dnsmasq, frr-pythontools (>= 8.5.1~)

  </details>

- **libpve-notify-perl**
  - Latest version: 8.1.2
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Notify helper module.
  - Install: `sudo apt-get install libpve-notify-perl`
  - Install (apt): `sudo apt install libpve-notify-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libproxmox-rs-perl (>= 0.3.1), libpve-cluster-perl (= 8.0.10), libpve-cluster-perl (= 8.0.3), libpve-cluster-perl (= 8.0.4), libpve-cluster-perl (= 8.0.5), libpve-cluster-perl (= 8.0.6), libpve-cluster-perl (= 8.0.7), libpve-cluster-perl (= 8.0.8), libpve-cluster-perl (= 8.1.0), libpve-cluster-perl (= 8.1.1), libpve-cluster-perl (= 8.1.2), libpve-common-perl (>= 8.0.9), libpve-rs-perl (>= 0.8.5), libpve-rs-perl (>= 0.8.7), libpve-rs-perl (>= 0.8.9), perl:any
  - breaks: pve-ha-manager (<< 4.0.5), pve-manager (<< 8.2.3)

  </details>

- **libpve-rs-perl**
  - Latest version: 0.9.4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: PVE parts which have been ported to Rust - Rust source code
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install libpve-rs-perl`
  - Install (apt): `sudo apt install libpve-rs-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libapt-pkg6.0 (>= 1.9~), libc6 (>= 2.34), libgcc-s1 (>= 4.2), libproxmox-rs-perl (>= 0.3.3), libproxmox-rs-perl (>= 0.3.5), libssl3 (>= 3.0.0), libstdc++6 (>= 5.2), libuuid1 (>= 2.16), perl (>= 5.36.0-7), perl (>= 5.36.0-7+deb12u1), perlapi-5.36.0
  - breaks: libpve-access-control (<< 7.1-3), libpve-common-perl (<< 7.1-4), libpve-notify-perl (<< 8.0.7), pve-manager (<< 7.1-11)

  </details>

- **libpve-rs-perl-dbgsym**
  - Latest version: 0.9.4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libpve-rs-perl
  - Install: `sudo apt-get install libpve-rs-perl-dbgsym`
  - Install (apt): `sudo apt install libpve-rs-perl-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libpve-rs-perl (= 0.8.10), libpve-rs-perl (= 0.8.11), libpve-rs-perl (= 0.8.12), libpve-rs-perl (= 0.8.13), libpve-rs-perl (= 0.8.3), libpve-rs-perl (= 0.8.4), libpve-rs-perl (= 0.8.5), libpve-rs-perl (= 0.8.6), libpve-rs-perl (= 0.8.7), libpve-rs-perl (= 0.8.8), libpve-rs-perl (= 0.8.9), libpve-rs-perl (= 0.9.0), libpve-rs-perl (= 0.9.1), libpve-rs-perl (= 0.9.2), libpve-rs-perl (= 0.9.3), libpve-rs-perl (= 0.9.4)

  </details>

- **libpve-storage-perl**
  - Latest version: 8.3.7
  - Architectures: all
  - Suite: bookworm
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
  - depends: bzip2, ceph-common (>= 12.2~), ceph-fuse, cifs-utils, cstream, glusterfs-client (>= 3.4.0-2), libfile-chdir-perl, libposix-strptime-perl, libpve-access-control (>= 8.1.2), libpve-apiclient-perl (>= 3.1-1), libpve-cluster-perl, libpve-cluster-perl (>= 8.0.6), libpve-common-perl (>= 7.2-4), libpve-common-perl (>= 8.0.10), libpve-common-perl (>= 8.1.1), libpve-common-perl (>= 8.2.3), libpve-common-perl (>= 8.2.9), librados2-perl, libxml-libxml-perl, lvm2, lzop, nfs-common, perl:any, proxmox-backup-client (>= 2.1.10~), proxmox-backup-file-restore, pve-cluster (>= 5.0-32), smartmontools, smbclient, thin-provisioning-tools, udev, zstd
  - recommends: pve-esxi-import-tools (>= 0.3.0), pve-esxi-import-tools (>= 0.6.0), zfs-zed
  - breaks: libpve-guest-common-perl (<< 4.0-3), libpve-http-server-perl (<< 4.0-3), pve-container (<< 3.1-2), pve-manager (<< 5.2-12), qemu-server (<< 6.1-14), qemu-server (<< 8.3.2)

  </details>

- **libpve-u2f-server-perl**
  - Latest version: 1.2.0
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.2.5), libu2f-server0 (>= 0.0.0), perl (>= 5.36.0-7), perlapi-5.36.0

  </details>

- **libquorum-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1), libquorum5 (= 3.1.7-pve3), libquorum5 (= 3.1.9-pve1)

  </details>

- **libquorum5**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libquorum5
  - Install: `sudo apt-get install libquorum5-dbgsym`
  - Install (apt): `sudo apt install libquorum5-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libquorum5 (= 3.1.7-pve3), libquorum5 (= 3.1.9-pve1)

  </details>

- **librados2-perl**
  - Latest version: 1.4.1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.4), libpve-access-control, librados2 (>= 16.2.11+ds), perl (>= 5.36.0-7), perlapi-5.36.0

  </details>

- **librust-perlmod-dev**
  - Latest version: 0.13.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Ffi & serde code for limited interaction with perl code - Rust source code
  - Install: `sudo apt-get install librust-perlmod-dev`
  - Install (apt): `sudo apt install librust-perlmod-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: rust
  - Priority: optional
  - depends: librust-bitflags-1+default-dev (>= 1.2.1-~~), librust-cc-1+default-dev (>= 1.0.46-~~), librust-libc-0.2+default-dev, librust-serde-1+default-dev, perl (>= 5.28.1)
  - recommends: librust-perlmod+perlmod-macro-dev (= 0.13.1-1)
  - provides: librust-perlmod-0-dev (= 0.13.1-1), librust-perlmod-0.13-dev (= 0.13.1-1), librust-perlmod-0.13.1-dev (= 0.13.1-1)

  </details>

- **librust-perlmod-macro-dev**
  - Latest version: 0.8.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Perl package macros to create perl package bindings from rust at compile time - Rust source code
  - Install: `sudo apt-get install librust-perlmod-macro-dev`
  - Install (apt): `sudo apt install librust-perlmod-macro-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: rust
  - Priority: optional
  - depends: librust-proc-macro2-1+default-dev, librust-quote-1+default-dev, librust-syn-1+default-dev, librust-syn-1+full-dev
  - provides: librust-perlmod-macro-0-dev (= 0.8.0-1), librust-perlmod-macro-0.8-dev (= 0.8.0-1), librust-perlmod-macro-0.8.0-dev (= 0.8.0-1), librust-perlmod-macro-0.8.0+default-dev (= 0.8.0-1), librust-perlmod-macro-0.8+default-dev (= 0.8.0-1), librust-perlmod-macro-0+default-dev (= 0.8.0-1), librust-perlmod-macro+default-dev (= 0.8.0-1)

  </details>

- **librust-perlmod+perlmod-macro-dev**
  - Latest version: 0.13.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Ffi & serde code for limited interaction with perl code - feature "perlmod-macro" and 2 more
  - Install: `sudo apt-get install librust-perlmod+perlmod-macro-dev`
  - Install (apt): `sudo apt install librust-perlmod+perlmod-macro-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: rust
  - Priority: optional
  - depends: librust-perlmod-dev (= 0.13.1-1), librust-perlmod-macro-0.8+default-dev
  - provides: librust-perlmod-0.13.1+default-dev (= 0.13.1-1), librust-perlmod-0.13.1+exporter-dev (= 0.13.1-1), librust-perlmod-0.13.1+perlmod-macro-dev (= 0.13.1-1), librust-perlmod-0.13+default-dev (= 0.13.1-1), librust-perlmod-0.13+exporter-dev (= 0.13.1-1), librust-perlmod-0.13+perlmod-macro-dev (= 0.13.1-1), librust-perlmod-0+default-dev (= 0.13.1-1), librust-perlmod-0+exporter-dev (= 0.13.1-1), librust-perlmod-0+perlmod-macro-dev (= 0.13.1-1), librust-perlmod+default-dev (= 0.13.1-1), librust-perlmod+exporter-dev (= 0.13.1-1)

  </details>

- **librust-proxmox-resource-scheduling-dev**
  - Latest version: 0.1.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox library for resource scheduling - Rust source code
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install librust-proxmox-resource-scheduling-dev`
  - Install (apt): `sudo apt install librust-proxmox-resource-scheduling-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: rust
  - Priority: optional
  - depends: librust-anyhow-1+default-dev, librust-lazy-static-1+default-dev (>= 1.4-~~), librust-serde-1+default-dev, librust-serde-1+derive-dev
  - provides: librust-proxmox-resource-scheduling-0-dev (= 0.1.0-1), librust-proxmox-resource-scheduling-0.1-dev (= 0.1.0-1), librust-proxmox-resource-scheduling-0.1.0-dev (= 0.1.0-1), librust-proxmox-resource-scheduling-0.1.0+default-dev (= 0.1.0-1), librust-proxmox-resource-scheduling-0.1+default-dev (= 0.1.0-1), librust-proxmox-resource-scheduling-0+default-dev (= 0.1.0-1), librust-proxmox-resource-scheduling+default-dev (= 0.1.0-1)

  </details>

- **libsam-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1), libsam4 (= 3.1.7-pve3), libsam4 (= 3.1.9-pve1)

  </details>

- **libsam4**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcmap4 (>= 1.99.9), libquorum5 (>= 1.99.9)

  </details>

- **libsam4-dbgsym**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libsam4
  - Install: `sudo apt-get install libsam4-dbgsym`
  - Install (apt): `sudo apt install libsam4-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libsam4 (= 3.1.7-pve3), libsam4 (= 3.1.9-pve1)

  </details>

- **libsystemd-dev**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libsystemd0 (= 252.11-pve1), libsystemd0 (= 252.12-pmx1)

  </details>

- **libsystemd-shared**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: systemd shared private library
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libsystemd-shared`
  - Install (apt): `sudo apt install libsystemd-shared`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libaudit1 (>= 1:2.2.1), libblkid1 (>= 2.24), libc6 (>= 2.36), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libgcrypt20 (>= 1.10.0), libip4tc2 (>= 1.8.3), libkmod2 (>= 15), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20120614), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libselinux1 (>= 3.1~), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2)

  </details>

- **libsystemd-shared-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libsystemd-shared
  - Install: `sudo apt-get install libsystemd-shared-dbgsym`
  - Install (apt): `sudo apt install libsystemd-shared-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1)

  </details>

- **libsystemd0**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libgcrypt20 (>= 1.10.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libzstd1 (>= 1.5.2)

  </details>

- **libsystemd0-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libsystemd0
  - Install: `sudo apt-get install libsystemd0-dbgsym`
  - Install (apt): `sudo apt install libsystemd0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libsystemd0 (= 252.11-pve1), libsystemd0 (= 252.12-pmx1)

  </details>

- **libtpms-dev**
  - Latest version: 0.9.7+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: libtpms header files and man pages
  - Install: `sudo apt-get install libtpms-dev`
  - Install (apt): `sudo apt install libtpms-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libdevel
  - Priority: optional
  - depends: libtpms0 (= 0.9.6+pve1), libtpms0 (= 0.9.7+pve1)

  </details>

- **libtpms0**
  - Latest version: 0.9.7+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: TPM emulation library
  - Install: `sudo apt-get install libtpms0`
  - Install (apt): `sudo apt install libtpms0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libssl3 (>= 3.0.0), openssl

  </details>

- **libtpms0-dbgsym**
  - Latest version: 0.9.7+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libtpms0
  - Install: `sudo apt-get install libtpms0-dbgsym`
  - Install (apt): `sudo apt install libtpms0-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libtpms0 (= 0.9.6+pve1), libtpms0 (= 0.9.7+pve1)

  </details>

- **libudev-dev**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libudev1 (= 252.11-pve1), libudev1 (= 252.12-pmx1)

  </details>

- **libudev1**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34)

  </details>

- **libudev1-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libudev1
  - Install: `sudo apt-get install libudev1-dbgsym`
  - Install (apt): `sudo apt install libudev1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libudev1 (= 252.11-pve1), libudev1 (= 252.12-pmx1)

  </details>

- **libuutil3linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34)
  - breaks: libuutil1, libuutil1linux, libuutil2linux, libuutil3
  - replaces: libuutil1, libuutil1linux, libuutil2linux, libuutil3

  </details>

- **libuutil3linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libuutil3linux
  - Install: `sudo apt-get install libuutil3linux-dbgsym`
  - Install (apt): `sudo apt install libuutil3linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libuutil3linux (= 2.1.11-pve2), libuutil3linux (= 2.1.12-pve1), libuutil3linux (= 2.1.13-pve1), libuutil3linux (= 2.2.0-pve1), libuutil3linux (= 2.2.0-pve2), libuutil3linux (= 2.2.0-pve3), libuutil3linux (= 2.2.0-pve4), libuutil3linux (= 2.2.2-pve1), libuutil3linux (= 2.2.2-pve2), libuutil3linux (= 2.2.3-pve1), libuutil3linux (= 2.2.3-pve2), libuutil3linux (= 2.2.4-pve1), libuutil3linux (= 2.2.6-pve1), libuutil3linux (= 2.2.7-pve1), libuutil3linux (= 2.2.7-pve2), libuutil3linux (= 2.2.8-pve1), libuutil3linux (= 2.2.9-pve1)

  </details>

- **libvotequorum-dev**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libcorosync-common-dev (= 3.1.7-pve3), libcorosync-common-dev (= 3.1.9-pve1), libvotequorum8 (= 3.1.7-pve3), libvotequorum8 (= 3.1.9-pve1)

  </details>

- **libvotequorum8**
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 3.1.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libvotequorum8
  - Install: `sudo apt-get install libvotequorum8-dbgsym`
  - Install (apt): `sudo apt install libvotequorum8-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: libvotequorum8 (= 3.1.7-pve3), libvotequorum8 (= 3.1.9-pve1)

  </details>

- **libyang-dev**
  - Latest version: 3.7.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling language (development)
  - Homepage: https://github.com/CESNET/libyang
  - Install: `sudo apt-get install libyang-dev`
  - Install (apt): `sudo apt install libyang-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Daniel Baumann <daniel@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libpcre2-dev, libyang3 (= 3.7.8-3~bpo12+1)
  - breaks: libyang2-dev
  - replaces: libyang2-dev

  </details>

- **libyang3**
  - Latest version: 3.7.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling language (library)
  - Homepage: https://github.com/CESNET/libyang
  - Install: `sudo apt-get install libyang3`
  - Install (apt): `sudo apt install libyang3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Daniel Baumann <daniel@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libpcre2-8-0 (>= 10.22)
  - breaks: libyang2, libyang2t64
  - replaces: libyang2, libyang2t64

  </details>

- **libyang3-dbgsym**
  - Latest version: 3.7.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libyang3
  - Install: `sudo apt-get install libyang3-dbgsym`
  - Install (apt): `sudo apt install libyang3-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Daniel Baumann <daniel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: libyang3 (= 3.7.8-3~bpo12+1)

  </details>

- **libyang3-tools**
  - Latest version: 3.7.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: parser toolkit for IETF YANG data modeling language (tools)
  - Homepage: https://github.com/CESNET/libyang
  - Install: `sudo apt-get install libyang3-tools`
  - Install (apt): `sudo apt install libyang3-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Daniel Baumann <daniel@debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libyang3 (>= 3.7.8)
  - breaks: libyang2-tools
  - replaces: libyang2-tools

  </details>

- **libyang3-tools-dbgsym**
  - Latest version: 3.7.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libyang3-tools
  - Install: `sudo apt-get install libyang3-tools-dbgsym`
  - Install (apt): `sudo apt install libyang3-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Daniel Baumann <daniel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: libyang3-tools (= 3.7.8-3~bpo12+1)

  </details>

- **libzfs4linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: OpenZFS filesystem library for Linux - general support
  - Homepage: https://www.zfsonlinux.org/
  - Install: `sudo apt-get install libzfs4linux`
  - Install (apt): `sudo apt install libzfs4linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libssl3 (>= 3.0.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.12), libuutil3linux (>= 2.1.13), libuutil3linux (>= 2.2.0), libuutil3linux (>= 2.2.2), libuutil3linux (>= 2.2.3), libuutil3linux (>= 2.2.4), libuutil3linux (>= 2.2.6), libuutil3linux (>= 2.2.7), libuutil3linux (>= 2.2.8), libuutil3linux (>= 2.2.9), zlib1g (>= 1:1.1.4)
  - recommends: libcurl4
  - breaks: libzfs2, libzfs2linux, libzfs3linux, libzfs4
  - replaces: libzfs2, libzfs2linux, libzfs3linux, libzfs4

  </details>

- **libzfs4linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libzfs4linux
  - Install: `sudo apt-get install libzfs4linux-dbgsym`
  - Install (apt): `sudo apt install libzfs4linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfs4linux (= 2.1.11-pve2), libzfs4linux (= 2.1.12-pve1), libzfs4linux (= 2.1.13-pve1), libzfs4linux (= 2.2.0-pve1), libzfs4linux (= 2.2.0-pve2), libzfs4linux (= 2.2.0-pve3), libzfs4linux (= 2.2.0-pve4), libzfs4linux (= 2.2.2-pve1), libzfs4linux (= 2.2.2-pve2), libzfs4linux (= 2.2.3-pve1), libzfs4linux (= 2.2.3-pve2), libzfs4linux (= 2.2.4-pve1), libzfs4linux (= 2.2.6-pve1), libzfs4linux (= 2.2.7-pve1), libzfs4linux (= 2.2.7-pve2), libzfs4linux (= 2.2.8-pve1), libzfs4linux (= 2.2.9-pve1)

  </details>

- **libzfsbootenv1linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.8), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), libzfs4linux (>= 2.2.0), libzfs4linux (>= 2.2.2), libzfs4linux (>= 2.2.3), libzfs4linux (>= 2.2.4), libzfs4linux (>= 2.2.6), libzfs4linux (>= 2.2.7), libzfs4linux (>= 2.2.8), libzfs4linux (>= 2.2.9)
  - breaks: libzfs2, libzfs4
  - replaces: libzfs2, libzfs4

  </details>

- **libzfsbootenv1linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libzfsbootenv1linux
  - Install: `sudo apt-get install libzfsbootenv1linux-dbgsym`
  - Install (apt): `sudo apt install libzfsbootenv1linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzfsbootenv1linux (= 2.1.11-pve2), libzfsbootenv1linux (= 2.1.12-pve1), libzfsbootenv1linux (= 2.1.13-pve1), libzfsbootenv1linux (= 2.2.0-pve1), libzfsbootenv1linux (= 2.2.0-pve2), libzfsbootenv1linux (= 2.2.0-pve3), libzfsbootenv1linux (= 2.2.0-pve4), libzfsbootenv1linux (= 2.2.2-pve1), libzfsbootenv1linux (= 2.2.2-pve2), libzfsbootenv1linux (= 2.2.3-pve1), libzfsbootenv1linux (= 2.2.3-pve2), libzfsbootenv1linux (= 2.2.4-pve1), libzfsbootenv1linux (= 2.2.6-pve1), libzfsbootenv1linux (= 2.2.7-pve1), libzfsbootenv1linux (= 2.2.7-pve2), libzfsbootenv1linux (= 2.2.8-pve1), libzfsbootenv1linux (= 2.2.9-pve1)

  </details>

- **libzfslinux-dev**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libnvpair3linux (= 2.1.11-pve2), libnvpair3linux (= 2.1.12-pve1), libnvpair3linux (= 2.1.13-pve1), libnvpair3linux (= 2.2.0-pve1), libnvpair3linux (= 2.2.0-pve2), libnvpair3linux (= 2.2.0-pve3), libnvpair3linux (= 2.2.0-pve4), libnvpair3linux (= 2.2.2-pve1), libnvpair3linux (= 2.2.2-pve2), libnvpair3linux (= 2.2.3-pve1), libnvpair3linux (= 2.2.3-pve2), libnvpair3linux (= 2.2.4-pve1), libnvpair3linux (= 2.2.6-pve1), libnvpair3linux (= 2.2.7-pve1), libnvpair3linux (= 2.2.7-pve2), libnvpair3linux (= 2.2.8-pve1), libnvpair3linux (= 2.2.9-pve1), libssl-dev | libssl1.0-dev, libuutil3linux (= 2.1.11-pve2), libuutil3linux (= 2.1.12-pve1), libuutil3linux (= 2.1.13-pve1), libuutil3linux (= 2.2.0-pve1), libuutil3linux (= 2.2.0-pve2), libuutil3linux (= 2.2.0-pve3), libuutil3linux (= 2.2.0-pve4), libuutil3linux (= 2.2.2-pve1), libuutil3linux (= 2.2.2-pve2), libuutil3linux (= 2.2.3-pve1), libuutil3linux (= 2.2.3-pve2), libuutil3linux (= 2.2.4-pve1), libuutil3linux (= 2.2.6-pve1), libuutil3linux (= 2.2.7-pve1), libuutil3linux (= 2.2.7-pve2), libuutil3linux (= 2.2.8-pve1), libuutil3linux (= 2.2.9-pve1), libzfs4linux (= 2.1.11-pve2), libzfs4linux (= 2.1.12-pve1), libzfs4linux (= 2.1.13-pve1), libzfs4linux (= 2.2.0-pve1), libzfs4linux (= 2.2.0-pve2), libzfs4linux (= 2.2.0-pve3), libzfs4linux (= 2.2.0-pve4), libzfs4linux (= 2.2.2-pve1), libzfs4linux (= 2.2.2-pve2), libzfs4linux (= 2.2.3-pve1), libzfs4linux (= 2.2.3-pve2), libzfs4linux (= 2.2.4-pve1), libzfs4linux (= 2.2.6-pve1), libzfs4linux (= 2.2.7-pve1), libzfs4linux (= 2.2.7-pve2), libzfs4linux (= 2.2.8-pve1), libzfs4linux (= 2.2.9-pve1), libzfsbootenv1linux (= 2.1.11-pve2), libzfsbootenv1linux (= 2.1.12-pve1), libzfsbootenv1linux (= 2.1.13-pve1), libzfsbootenv1linux (= 2.2.0-pve1), libzfsbootenv1linux (= 2.2.0-pve2), libzfsbootenv1linux (= 2.2.0-pve3), libzfsbootenv1linux (= 2.2.0-pve4), libzfsbootenv1linux (= 2.2.2-pve1), libzfsbootenv1linux (= 2.2.2-pve2), libzfsbootenv1linux (= 2.2.3-pve1), libzfsbootenv1linux (= 2.2.3-pve2), libzfsbootenv1linux (= 2.2.4-pve1), libzfsbootenv1linux (= 2.2.6-pve1), libzfsbootenv1linux (= 2.2.7-pve1), libzfsbootenv1linux (= 2.2.7-pve2), libzfsbootenv1linux (= 2.2.8-pve1), libzfsbootenv1linux (= 2.2.9-pve1), libzpool5linux (= 2.1.11-pve2), libzpool5linux (= 2.1.12-pve1), libzpool5linux (= 2.1.13-pve1), libzpool5linux (= 2.2.0-pve1), libzpool5linux (= 2.2.0-pve2), libzpool5linux (= 2.2.0-pve3), libzpool5linux (= 2.2.0-pve4), libzpool5linux (= 2.2.2-pve1), libzpool5linux (= 2.2.2-pve2), libzpool5linux (= 2.2.3-pve1), libzpool5linux (= 2.2.3-pve2), libzpool5linux (= 2.2.4-pve1), libzpool5linux (= 2.2.6-pve1), libzpool5linux (= 2.2.7-pve1), libzpool5linux (= 2.2.7-pve2), libzpool5linux (= 2.2.8-pve1), libzpool5linux (= 2.2.9-pve1)
  - provides: libnvpair-dev, libuutil-dev

  </details>

- **libzpool5linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libudev1 (>= 183), libuuid1 (>= 2.16), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool2linux, libzpool3linux, libzpool4
  - replaces: libzpool2, libzpool2linux, libzpool3linux, libzpool4

  </details>

- **libzpool5linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for libzpool5linux
  - Install: `sudo apt-get install libzpool5linux-dbgsym`
  - Install (apt): `sudo apt install libzpool5linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: libzpool5linux (= 2.1.11-pve2), libzpool5linux (= 2.1.12-pve1), libzpool5linux (= 2.1.13-pve1), libzpool5linux (= 2.2.0-pve1), libzpool5linux (= 2.2.0-pve2), libzpool5linux (= 2.2.0-pve3), libzpool5linux (= 2.2.0-pve4), libzpool5linux (= 2.2.2-pve1), libzpool5linux (= 2.2.2-pve2), libzpool5linux (= 2.2.3-pve1), libzpool5linux (= 2.2.3-pve2), libzpool5linux (= 2.2.4-pve1), libzpool5linux (= 2.2.6-pve1), libzpool5linux (= 2.2.7-pve1), libzpool5linux (= 2.2.7-pve2), libzpool5linux (= 2.2.8-pve1), libzpool5linux (= 2.2.9-pve1)

  </details>

- **linux-tools-6.1**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.1
  - Install: `sudo apt-get install linux-tools-6.1`
  - Install (apt): `sudo apt install linux-tools-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libbabeltrace1 (>= 1.5.4), libc6 (>= 2.34), libcap2 (>= 1:2.10), libdw1 (>= 0.157), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libunwind8, libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.1-dbgsym**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.1
  - Install: `sudo apt-get install linux-tools-6.1-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.1-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.1 (= 6.1.10-1)

  </details>

- **linux-tools-6.11**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.11
  - Install: `sudo apt-get install linux-tools-6.11`
  - Install (apt): `sudo apt install linux-tools-6.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.161), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 4.1.1), libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.11-dbgsym**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.11
  - Install: `sudo apt-get install linux-tools-6.11-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.11-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.11 (= 6.11.0-1), linux-tools-6.11 (= 6.11.0-2), linux-tools-6.11 (= 6.11.11-1), linux-tools-6.11 (= 6.11.11-2)

  </details>

- **linux-tools-6.14**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.14
  - Install: `sudo apt-get install linux-tools-6.14`
  - Install (apt): `sudo apt install linux-tools-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.161), libelf1 (>= 0.144), libllvm14, liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 11), libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.14-dbgsym**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.14
  - Install: `sudo apt-get install linux-tools-6.14-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.14-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.14 (= 6.14.0-1), linux-tools-6.14 (= 6.14.0-2), linux-tools-6.14 (= 6.14.11-5~bpo12+1), linux-tools-6.14 (= 6.14.4-1), linux-tools-6.14 (= 6.14.5-1~bpo12+1), linux-tools-6.14 (= 6.14.8-1~bpo12+1), linux-tools-6.14 (= 6.14.8-2~bpo12+1), linux-tools-6.14 (= 6.14.8-3~bpo12+1)

  </details>

- **linux-tools-6.2**
  - Latest version: 6.2.16-20
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.2
  - Install: `sudo apt-get install linux-tools-6.2`
  - Install (apt): `sudo apt install linux-tools-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.158), libdw1 (>= 0.160), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.2-dbgsym**
  - Latest version: 6.2.16-20
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.2
  - Install: `sudo apt-get install linux-tools-6.2-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.2-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.2 (= 6.2.16-1), linux-tools-6.2 (= 6.2.16-10), linux-tools-6.2 (= 6.2.16-11), linux-tools-6.2 (= 6.2.16-12), linux-tools-6.2 (= 6.2.16-13), linux-tools-6.2 (= 6.2.16-14), linux-tools-6.2 (= 6.2.16-15), linux-tools-6.2 (= 6.2.16-16), linux-tools-6.2 (= 6.2.16-18), linux-tools-6.2 (= 6.2.16-19), linux-tools-6.2 (= 6.2.16-2), linux-tools-6.2 (= 6.2.16-20), linux-tools-6.2 (= 6.2.16-3), linux-tools-6.2 (= 6.2.16-4), linux-tools-6.2 (= 6.2.16-5), linux-tools-6.2 (= 6.2.16-6), linux-tools-6.2 (= 6.2.16-7), linux-tools-6.2 (= 6.2.16-8), linux-tools-6.2 (= 6.2.16-9)

  </details>

- **linux-tools-6.5**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.5
  - Install: `sudo apt-get install linux-tools-6.5`
  - Install (apt): `sudo apt install linux-tools-6.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.160), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 4.1.1), libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.5-dbgsym**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.5
  - Install: `sudo apt-get install linux-tools-6.5-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.5-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.5 (= 6.5.11-1), linux-tools-6.5 (= 6.5.11-2), linux-tools-6.5 (= 6.5.11-3), linux-tools-6.5 (= 6.5.11-4), linux-tools-6.5 (= 6.5.11-5), linux-tools-6.5 (= 6.5.11-6), linux-tools-6.5 (= 6.5.11-7), linux-tools-6.5 (= 6.5.11-8), linux-tools-6.5 (= 6.5.13-1), linux-tools-6.5 (= 6.5.13-2), linux-tools-6.5 (= 6.5.13-3), linux-tools-6.5 (= 6.5.13-4), linux-tools-6.5 (= 6.5.13-5), linux-tools-6.5 (= 6.5.13-6), linux-tools-6.5 (= 6.5.3-1)

  </details>

- **linux-tools-6.8**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Linux kernel version specific tools for version 6.8
  - Install: `sudo apt-get install linux-tools-6.8`
  - Install (apt): `sudo apt install linux-tools-6.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.161), libelf1 (>= 0.144), liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libslang2 (>= 2.2.4), libstdc++6 (>= 4.1.1), libzstd1 (>= 1.5.2), linux-base, zlib1g (>= 1:1.2.3.3)

  </details>

- **linux-tools-6.8-dbgsym**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for linux-tools-6.8
  - Install: `sudo apt-get install linux-tools-6.8-dbgsym`
  - Install (apt): `sudo apt install linux-tools-6.8-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: linux-tools-6.8 (= 6.8.1-1), linux-tools-6.8 (= 6.8.12-1), linux-tools-6.8 (= 6.8.12-10), linux-tools-6.8 (= 6.8.12-11), linux-tools-6.8 (= 6.8.12-12), linux-tools-6.8 (= 6.8.12-13), linux-tools-6.8 (= 6.8.12-14), linux-tools-6.8 (= 6.8.12-15), linux-tools-6.8 (= 6.8.12-16), linux-tools-6.8 (= 6.8.12-17), linux-tools-6.8 (= 6.8.12-18), linux-tools-6.8 (= 6.8.12-2), linux-tools-6.8 (= 6.8.12-3), linux-tools-6.8 (= 6.8.12-4), linux-tools-6.8 (= 6.8.12-5), linux-tools-6.8 (= 6.8.12-6), linux-tools-6.8 (= 6.8.12-7), linux-tools-6.8 (= 6.8.12-8), linux-tools-6.8 (= 6.8.12-9), linux-tools-6.8 (= 6.8.4-2), linux-tools-6.8 (= 6.8.4-3), linux-tools-6.8 (= 6.8.4-4), linux-tools-6.8 (= 6.8.8-1), linux-tools-6.8 (= 6.8.8-2), linux-tools-6.8 (= 6.8.8-3), linux-tools-6.8 (= 6.8.8-4)

  </details>

- **lxc-pve**
  - Latest version: 6.0.0-2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: apparmor, bridge-utils, criu (>= 1.5.2-1), libapparmor1 (>= 2.6~devel), libc6 (>= 2.36), libcap2 (>= 1:2.10), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 3.3.1), libgnutlsxx30, libseccomp2 (>= 2.5.0), lxcfs, python3, uidmap
  - conflicts: liblxc1, lxc
  - breaks: pve-container (<< 3.1-1)
  - replaces: liblxc1, lxc
  - provides: liblxc1, lxc

  </details>

- **lxc-pve-dbgsym**
  - Latest version: 6.0.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for lxc-pve
  - Install: `sudo apt-get install lxc-pve-dbgsym`
  - Install (apt): `sudo apt install lxc-pve-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxc-pve (= 5.0.2-4), lxc-pve (= 6.0.0-1), lxc-pve (= 6.0.0-2)

  </details>

- **lxc-pve-dev**
  - Latest version: 6.0.0-2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: lxc-pve (= 5.0.2-4), lxc-pve (= 6.0.0-1), lxc-pve (= 6.0.0-2)

  </details>

- **lxcfs**
  - Latest version: 6.0.0-pve2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libfuse3-3 (>= 3.2.3), libgcc-s1 (>= 3.3.1)

  </details>

- **lxcfs-dbgsym**
  - Latest version: 6.0.0-pve2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for lxcfs
  - Install: `sudo apt-get install lxcfs-dbgsym`
  - Install (apt): `sudo apt install lxcfs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: lxcfs (= 5.0.3-pve3), lxcfs (= 5.0.3-pve4), lxcfs (= 6.0.0-pve1), lxcfs (= 6.0.0-pve2)

  </details>


### <a id="packages-M"></a>M

- **multipath-tools**
  - Latest version: 0.9.4-5~bpo11+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: maintain multipath block device access
  - Homepage: http://christophe.varoqui.free.fr/
  - Install: `sudo apt-get install multipath-tools`
  - Install (apt): `sudo apt install multipath-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian DM Multipath Team <team+linux-blocks@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: kpartx (>= 0.9.4-4~bpo12+1), kpartx (>= 0.9.4-5~bpo11+1), libaio1 (>= 0.3.93), libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.110), libedit2 (>= 2.11-20080614-0), libsystemd0, libudev1 (>= 183), liburcu8 (>= 0.13.0), lsb-base, sg3-utils-udev, udev
  - preDepends: init-system-helpers (>= 1.54~)
  - suggests: multipath-tools-boot

  </details>

- **multipath-tools-boot**
  - Latest version: 0.9.4-5~bpo11+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Support booting from multipath devices
  - Homepage: http://christophe.varoqui.free.fr/
  - Install: `sudo apt-get install multipath-tools-boot`
  - Install (apt): `sudo apt install multipath-tools-boot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian DM Multipath Team <team+linux-blocks@tracker.debian.org>
  - Section: admin
  - Priority: optional
  - depends: initramfs-tools | linux-initramfs-tool, lsb-base, multipath-tools (<< 0.9.4-4~bpo12+1.1~), multipath-tools (<< 0.9.4-5~bpo11+1.1~), multipath-tools (>= 0.9.4-4~bpo12+1), multipath-tools (>= 0.9.4-5~bpo11+1)
  - preDepends: init-system-helpers (>= 1.54~)

  </details>

- **multipath-tools-dbgsym**
  - Latest version: 0.9.4-5~bpo11+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for multipath-tools
  - Install: `sudo apt-get install multipath-tools-dbgsym`
  - Install (apt): `sudo apt install multipath-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian DM Multipath Team <team+linux-blocks@tracker.debian.org>
  - Section: debug
  - Priority: optional
  - depends: multipath-tools (= 0.9.4-4~bpo12+1), multipath-tools (= 0.9.4-5~bpo11+1)

  </details>


### <a id="packages-N"></a>N

- **novnc-pve**
  - Latest version: 1.6.0-2
  - Architectures: all
  - Suite: bookworm
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

- **open-iscsi**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: iSCSI initiator tools
  - Homepage: https://www.open-iscsi.com/
  - Install: `sudo apt-get install open-iscsi`
  - Install (apt): `sudo apt install open-iscsi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: net
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, init-system-helpers (>= 1.51), libc6 (>= 2.34), libisns0, libkmod2 (>= 5~), libmount1 (>= 2.24.2), libopeniscsiusr (>= 2.1.8), libssl3 (>= 3.0.0), libsystemd0, udev
  - preDepends: debconf | debconf-2.0
  - recommends: busybox | busybox-static, finalrd (>= 3)

  </details>

- **open-iscsi-dbgsym**
  - Latest version: 2.1.8-1.pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for open-iscsi
  - Install: `sudo apt-get install open-iscsi-dbgsym`
  - Install (apt): `sudo apt install open-iscsi-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian iSCSI Maintainers <open-iscsi@packages.debian.org>
  - Section: debug
  - Priority: optional
  - depends: open-iscsi (= 2.1.8-1.pve1)

  </details>


### <a id="packages-P"></a>P

- **proxmox-archive-keyring**
  - Latest version: 3.3
  - Architectures: all
  - Suite: bookworm
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

- **proxmox-auto-install-assistant**
  - Latest version: 8.4.6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Assistant to help with automated installations
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-auto-install-assistant`
  - Install (apt): `sudo apt install proxmox-auto-install-assistant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)
  - recommends: xorriso

  </details>

- **proxmox-backup-client**
  - Latest version: 3.4.7-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.34), libfuse3-3 (>= 3.2.3), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2), qrencode

  </details>

- **proxmox-backup-client-dbgsym**
  - Latest version: 3.4.7-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-backup-client
  - Install: `sudo apt-get install proxmox-backup-client-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-client-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-client (= 2.99.0-1), proxmox-backup-client (= 3.0.1-1), proxmox-backup-client (= 3.0.2-1), proxmox-backup-client (= 3.0.3-1), proxmox-backup-client (= 3.0.4-1), proxmox-backup-client (= 3.1.2-1), proxmox-backup-client (= 3.1.3-1), proxmox-backup-client (= 3.1.4-1), proxmox-backup-client (= 3.1.5-1), proxmox-backup-client (= 3.2.0-1), proxmox-backup-client (= 3.2.1-1), proxmox-backup-client (= 3.2.12-1), proxmox-backup-client (= 3.2.14-1), proxmox-backup-client (= 3.2.2-1), proxmox-backup-client (= 3.2.3-1), proxmox-backup-client (= 3.2.4-1), proxmox-backup-client (= 3.2.5-1), proxmox-backup-client (= 3.2.6-1), proxmox-backup-client (= 3.2.7-1), proxmox-backup-client (= 3.2.8-1), proxmox-backup-client (= 3.2.9-1), proxmox-backup-client (= 3.3.0-1), proxmox-backup-client (= 3.3.1-1), proxmox-backup-client (= 3.3.2-1), proxmox-backup-client (= 3.3.3-1), proxmox-backup-client (= 3.3.4-1), proxmox-backup-client (= 3.3.5-1), proxmox-backup-client (= 3.3.6-1), proxmox-backup-client (= 3.3.7-1), proxmox-backup-client (= 3.4.0-1), proxmox-backup-client (= 3.4.1-1), proxmox-backup-client (= 3.4.2-1), proxmox-backup-client (= 3.4.3-1), proxmox-backup-client (= 3.4.4-1), proxmox-backup-client (= 3.4.6-1), proxmox-backup-client (= 3.4.7-1)

  </details>

- **proxmox-backup-file-restore**
  - Latest version: 3.4.7-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libuuid1 (>= 2.16), libzstd1 (>= 1.5.2)
  - recommends: proxmox-backup-restore-image, pve-qemu-kvm (>= 5.0.0-9)
  - breaks: proxmox-backup-restore-image (<< 0.3.1)

  </details>

- **proxmox-backup-file-restore-dbgsym**
  - Latest version: 3.4.7-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-backup-file-restore
  - Install: `sudo apt-get install proxmox-backup-file-restore-dbgsym`
  - Install (apt): `sudo apt install proxmox-backup-file-restore-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-backup-file-restore (= 2.99.0-1), proxmox-backup-file-restore (= 3.0.1-1), proxmox-backup-file-restore (= 3.0.2-1), proxmox-backup-file-restore (= 3.0.3-1), proxmox-backup-file-restore (= 3.0.4-1), proxmox-backup-file-restore (= 3.1.2-1), proxmox-backup-file-restore (= 3.1.3-1), proxmox-backup-file-restore (= 3.1.4-1), proxmox-backup-file-restore (= 3.1.5-1), proxmox-backup-file-restore (= 3.2.0-1), proxmox-backup-file-restore (= 3.2.1-1), proxmox-backup-file-restore (= 3.2.12-1), proxmox-backup-file-restore (= 3.2.14-1), proxmox-backup-file-restore (= 3.2.2-1), proxmox-backup-file-restore (= 3.2.3-1), proxmox-backup-file-restore (= 3.2.4-1), proxmox-backup-file-restore (= 3.2.5-1), proxmox-backup-file-restore (= 3.2.6-1), proxmox-backup-file-restore (= 3.2.7-1), proxmox-backup-file-restore (= 3.2.8-1), proxmox-backup-file-restore (= 3.2.9-1), proxmox-backup-file-restore (= 3.3.0-1), proxmox-backup-file-restore (= 3.3.1-1), proxmox-backup-file-restore (= 3.3.2-1), proxmox-backup-file-restore (= 3.3.2-2), proxmox-backup-file-restore (= 3.3.3-1), proxmox-backup-file-restore (= 3.3.4-1), proxmox-backup-file-restore (= 3.3.5-1), proxmox-backup-file-restore (= 3.3.6-1), proxmox-backup-file-restore (= 3.3.7-1), proxmox-backup-file-restore (= 3.4.0-1), proxmox-backup-file-restore (= 3.4.1-1), proxmox-backup-file-restore (= 3.4.2-1), proxmox-backup-file-restore (= 3.4.3-1), proxmox-backup-file-restore (= 3.4.4-1), proxmox-backup-file-restore (= 3.4.6-1), proxmox-backup-file-restore (= 3.4.7-1)

  </details>

- **proxmox-backup-restore-image**
  - Latest version: 0.7.0
  - Architectures: amd64
  - Suite: bookworm
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
  - breaks: proxmox-backup-file-restore (<< 3.4.2-1)

  </details>

- **proxmox-backup-restore-image-debug**
  - Latest version: 0.7.0
  - Architectures: amd64
  - Suite: bookworm
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
  - breaks: proxmox-backup-file-restore (<< 3.4.2-1)

  </details>

- **proxmox-default-headers**
  - Latest version: 1.1.0
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Default Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-default-headers`
  - Install (apt): `sudo apt install proxmox-default-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.2, proxmox-headers-6.5, proxmox-headers-6.8
  - provides: pve-headers

  </details>

- **proxmox-default-kernel**
  - Latest version: 1.1.0
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Default Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-default-kernel`
  - Install (apt): `sudo apt install proxmox-default-kernel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.2, proxmox-kernel-6.5, proxmox-kernel-6.8

  </details>

- **proxmox-firewall**
  - Latest version: 0.7.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox's nftables-based firewall written in rust
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-firewall`
  - Install (apt): `sudo apt install proxmox-firewall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), netbase, nftables, pve-firewall
  - conflicts: ulogd

  </details>

- **proxmox-firewall-dbgsym**
  - Latest version: 0.7.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-firewall
  - Install: `sudo apt-get install proxmox-firewall-dbgsym`
  - Install (apt): `sudo apt install proxmox-firewall-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-firewall (= 0.1.0), proxmox-firewall (= 0.2.0), proxmox-firewall (= 0.3.0), proxmox-firewall (= 0.3.1), proxmox-firewall (= 0.4.0), proxmox-firewall (= 0.4.1), proxmox-firewall (= 0.4.2), proxmox-firewall (= 0.5.0), proxmox-firewall (= 0.6.0), proxmox-firewall (= 0.7.0), proxmox-firewall (= 0.7.1)

  </details>

- **proxmox-first-boot**
  - Latest version: 8.4.6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 2.06-13+pmx7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Empty package to ensure Proxmox Grub packages are installed
  - Homepage: https://www.gnu.org/software/grub/
  - Install: `sudo apt-get install proxmox-grub`
  - Install (apt): `sudo apt install proxmox-grub`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common (= 2.06-13+pmx1), grub-common (= 2.06-13+pmx2), grub-common (= 2.06-13+pmx5), grub-common (= 2.06-13+pmx6), grub-common (= 2.06-13+pmx7), grub-efi-amd64 (= 2.06-13+pmx1) | grub-efi-ia32 (= 2.06-13+pmx1) | grub-efi-arm64 (= 2.06-13+pmx1), grub-efi-amd64 (= 2.06-13+pmx2) | grub-efi-ia32 (= 2.06-13+pmx2) | grub-efi-arm64 (= 2.06-13+pmx2), grub-efi-amd64 (= 2.06-13+pmx5) | grub-efi-ia32 (= 2.06-13+pmx5) | grub-efi-arm64 (= 2.06-13+pmx5), grub-efi-amd64 (= 2.06-13+pmx6) | grub-efi-ia32 (= 2.06-13+pmx6) | grub-efi-arm64 (= 2.06-13+pmx6), grub-efi-amd64 (= 2.06-13+pmx7) | grub-efi-ia32 (= 2.06-13+pmx7) | grub-efi-arm64 (= 2.06-13+pmx7)

  </details>

- **proxmox-headers-6.11**
  - Latest version: 6.11.11-2
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.11`
  - Install (apt): `sudo apt install proxmox-headers-6.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.11.0-1-pve, proxmox-headers-6.11.0-2-pve, proxmox-headers-6.11.11-1-pve, proxmox-headers-6.11.11-2-pve
  - replaces: pve-headers-6.11
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.11

  </details>

- **proxmox-headers-6.11.0-1-pve**
  - Latest version: 6.11.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.11.0-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.11.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.11.0-1-pve-amd64, pve-headers-6.11.0-1-pve

  </details>

- **proxmox-headers-6.11.0-2-pve**
  - Latest version: 6.11.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.11.0-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.11.0-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.11.0-2-pve-amd64, pve-headers-6.11.0-2-pve

  </details>

- **proxmox-headers-6.11.11-1-pve**
  - Latest version: 6.11.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.11.11-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.11.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.11.11-1-pve-amd64, pve-headers-6.11.11-1-pve

  </details>

- **proxmox-headers-6.11.11-2-pve**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.11.11-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.11.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.11.11-2-pve-amd64, pve-headers-6.11.11-2-pve

  </details>

- **proxmox-headers-6.14**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14`
  - Install (apt): `sudo apt install proxmox-headers-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.14.0-1-pve, proxmox-headers-6.14.0-2-pve, proxmox-headers-6.14.11-5-bpo12-pve, proxmox-headers-6.14.4-1-pve, proxmox-headers-6.14.5-1-bpo12-pve, proxmox-headers-6.14.8-1-bpo12-pve, proxmox-headers-6.14.8-2-bpo12-pve, proxmox-headers-6.14.8-3-bpo12-pve
  - replaces: pve-headers-6.14
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.14

  </details>

- **proxmox-headers-6.14.0-1-pve**
  - Latest version: 6.14.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.0-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.0-1-pve-amd64, pve-headers-6.14.0-1-pve

  </details>

- **proxmox-headers-6.14.0-2-pve**
  - Latest version: 6.14.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.0-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.0-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.0-2-pve-amd64, pve-headers-6.14.0-2-pve

  </details>

- **proxmox-headers-6.14.11-5-bpo12-pve**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.11-5-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.11-5-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.11-5-bpo12-pve-amd64, pve-headers-6.14.11-5-bpo12-pve

  </details>

- **proxmox-headers-6.14.4-1-pve**
  - Latest version: 6.14.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.4-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.4-1-pve-amd64, pve-headers-6.14.4-1-pve

  </details>

- **proxmox-headers-6.14.5-1-bpo12-pve**
  - Latest version: 6.14.5-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.5-1-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.5-1-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.5-1-bpo12-pve-amd64, pve-headers-6.14.5-1-bpo12-pve

  </details>

- **proxmox-headers-6.14.8-1-bpo12-pve**
  - Latest version: 6.14.8-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.8-1-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.8-1-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.8-1-bpo12-pve-amd64, pve-headers-6.14.8-1-bpo12-pve

  </details>

- **proxmox-headers-6.14.8-2-bpo12-pve**
  - Latest version: 6.14.8-2~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.8-2-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.8-2-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.8-2-bpo12-pve-amd64, pve-headers-6.14.8-2-bpo12-pve

  </details>

- **proxmox-headers-6.14.8-3-bpo12-pve**
  - Latest version: 6.14.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.14.8-3-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.14.8-3-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.14.8-3-bpo12-pve-amd64, pve-headers-6.14.8-3-bpo12-pve

  </details>

- **proxmox-headers-6.2**
  - Latest version: 6.2.16-20
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2`
  - Install (apt): `sudo apt install proxmox-headers-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.2.16-10-pve, proxmox-headers-6.2.16-11-pve, proxmox-headers-6.2.16-12-pve, proxmox-headers-6.2.16-13-pve, proxmox-headers-6.2.16-14-pve, proxmox-headers-6.2.16-15-pve, proxmox-headers-6.2.16-16-pve, proxmox-headers-6.2.16-18-pve, proxmox-headers-6.2.16-19-pve, proxmox-headers-6.2.16-20-pve, proxmox-headers-6.2.16-6-pve, proxmox-headers-6.2.16-8-pve, proxmox-headers-6.2.16-9-pve
  - replaces: pve-headers-6.2
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.2

  </details>

- **proxmox-headers-6.2.16-10-pve**
  - Latest version: 6.2.16-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-10-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-10-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-10-pve-amd64, pve-headers-6.2.16-10-pve

  </details>

- **proxmox-headers-6.2.16-11-pve**
  - Latest version: 6.2.16-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-11-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-11-pve-amd64, pve-headers-6.2.16-11-pve

  </details>

- **proxmox-headers-6.2.16-12-pve**
  - Latest version: 6.2.16-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-12-pve-amd64, pve-headers-6.2.16-12-pve

  </details>

- **proxmox-headers-6.2.16-13-pve**
  - Latest version: 6.2.16-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-13-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-13-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-13-pve-amd64, pve-headers-6.2.16-13-pve

  </details>

- **proxmox-headers-6.2.16-14-pve**
  - Latest version: 6.2.16-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-14-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-14-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-14-pve-amd64, pve-headers-6.2.16-14-pve

  </details>

- **proxmox-headers-6.2.16-15-pve**
  - Latest version: 6.2.16-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-15-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-15-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-15-pve-amd64, pve-headers-6.2.16-15-pve

  </details>

- **proxmox-headers-6.2.16-16-pve**
  - Latest version: 6.2.16-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-16-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-16-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-16-pve-amd64, pve-headers-6.2.16-16-pve

  </details>

- **proxmox-headers-6.2.16-17-pve**
  - Latest version: 6.2.16-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-17-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-17-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-17-pve-amd64, pve-headers-6.2.16-17-pve

  </details>

- **proxmox-headers-6.2.16-18-pve**
  - Latest version: 6.2.16-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-18-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-18-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-18-pve-amd64, pve-headers-6.2.16-18-pve

  </details>

- **proxmox-headers-6.2.16-19-pve**
  - Latest version: 6.2.16-19
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-19-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-19-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-19-pve-amd64, pve-headers-6.2.16-19-pve

  </details>

- **proxmox-headers-6.2.16-20-pve**
  - Latest version: 6.2.16-20
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-20-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-20-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-20-pve-amd64, pve-headers-6.2.16-20-pve

  </details>

- **proxmox-headers-6.2.16-6-pve**
  - Latest version: 6.2.16-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-6-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-6-pve-amd64, pve-headers-6.2.16-6-pve

  </details>

- **proxmox-headers-6.2.16-8-pve**
  - Latest version: 6.2.16-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-8-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-8-pve-amd64, pve-headers-6.2.16-8-pve

  </details>

- **proxmox-headers-6.2.16-9-pve**
  - Latest version: 6.2.16-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.2.16-9-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.2.16-9-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-9-pve-amd64, pve-headers-6.2.16-9-pve

  </details>

- **proxmox-headers-6.5**
  - Latest version: 6.5.13-6
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5`
  - Install (apt): `sudo apt install proxmox-headers-6.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.5.11-1-pve, proxmox-headers-6.5.11-2-pve, proxmox-headers-6.5.11-3-pve, proxmox-headers-6.5.11-4-pve, proxmox-headers-6.5.11-5-pve, proxmox-headers-6.5.11-6-pve, proxmox-headers-6.5.11-7-pve, proxmox-headers-6.5.11-8-pve, proxmox-headers-6.5.13-1-pve, proxmox-headers-6.5.13-2-pve, proxmox-headers-6.5.13-3-pve, proxmox-headers-6.5.13-4-pve, proxmox-headers-6.5.13-5-pve, proxmox-headers-6.5.13-6-pve, proxmox-headers-6.5.3-1-pve
  - replaces: pve-headers-6.5
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.5

  </details>

- **proxmox-headers-6.5.11-1-pve**
  - Latest version: 6.5.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-1-pve-amd64, pve-headers-6.5.11-1-pve

  </details>

- **proxmox-headers-6.5.11-2-pve**
  - Latest version: 6.5.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-2-pve-amd64, pve-headers-6.5.11-2-pve

  </details>

- **proxmox-headers-6.5.11-3-pve**
  - Latest version: 6.5.11-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-3-pve-amd64, pve-headers-6.5.11-3-pve

  </details>

- **proxmox-headers-6.5.11-4-pve**
  - Latest version: 6.5.11-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-4-pve-amd64, pve-headers-6.5.11-4-pve

  </details>

- **proxmox-headers-6.5.11-5-pve**
  - Latest version: 6.5.11-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-5-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-5-pve-amd64, pve-headers-6.5.11-5-pve

  </details>

- **proxmox-headers-6.5.11-6-pve**
  - Latest version: 6.5.11-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-6-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-6-pve-amd64, pve-headers-6.5.11-6-pve

  </details>

- **proxmox-headers-6.5.11-7-pve**
  - Latest version: 6.5.11-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-7-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-7-pve-amd64, pve-headers-6.5.11-7-pve

  </details>

- **proxmox-headers-6.5.11-8-pve**
  - Latest version: 6.5.11-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.11-8-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.11-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.11-8-pve-amd64, pve-headers-6.5.11-8-pve

  </details>

- **proxmox-headers-6.5.13-1-pve**
  - Latest version: 6.5.13-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-1-pve-amd64, pve-headers-6.5.13-1-pve

  </details>

- **proxmox-headers-6.5.13-2-pve**
  - Latest version: 6.5.13-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-2-pve-amd64, pve-headers-6.5.13-2-pve

  </details>

- **proxmox-headers-6.5.13-3-pve**
  - Latest version: 6.5.13-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-3-pve-amd64, pve-headers-6.5.13-3-pve

  </details>

- **proxmox-headers-6.5.13-4-pve**
  - Latest version: 6.5.13-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-4-pve-amd64, pve-headers-6.5.13-4-pve

  </details>

- **proxmox-headers-6.5.13-5-pve**
  - Latest version: 6.5.13-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-5-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-5-pve-amd64, pve-headers-6.5.13-5-pve

  </details>

- **proxmox-headers-6.5.13-6-pve**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.13-6-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.13-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.13-6-pve-amd64, pve-headers-6.5.13-6-pve

  </details>

- **proxmox-headers-6.5.3-1-pve**
  - Latest version: 6.5.3-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.5.3-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.5.3-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.5.3-1-pve-amd64, pve-headers-6.5.3-1-pve

  </details>

- **proxmox-headers-6.8**
  - Latest version: 6.8.12-18
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8`
  - Install (apt): `sudo apt install proxmox-headers-6.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.8.1-1-pve, proxmox-headers-6.8.12-1-pve, proxmox-headers-6.8.12-10-pve, proxmox-headers-6.8.12-11-pve, proxmox-headers-6.8.12-12-pve, proxmox-headers-6.8.12-13-pve, proxmox-headers-6.8.12-14-pve, proxmox-headers-6.8.12-15-pve, proxmox-headers-6.8.12-16-pve, proxmox-headers-6.8.12-17-pve, proxmox-headers-6.8.12-18-pve, proxmox-headers-6.8.12-2-pve, proxmox-headers-6.8.12-3-pve, proxmox-headers-6.8.12-4-pve, proxmox-headers-6.8.12-5-pve, proxmox-headers-6.8.12-6-pve, proxmox-headers-6.8.12-7-pve, proxmox-headers-6.8.12-8-pve, proxmox-headers-6.8.12-9-pve, proxmox-headers-6.8.4-2-pve, proxmox-headers-6.8.4-3-pve, proxmox-headers-6.8.4-4-pve, proxmox-headers-6.8.8-1-pve, proxmox-headers-6.8.8-2-pve, proxmox-headers-6.8.8-3-pve, proxmox-headers-6.8.8-4-pve
  - replaces: pve-headers-6.8
  - provides: linux-headers-amd64, linux-headers-generic, pve-headers-6.8

  </details>

- **proxmox-headers-6.8.1-1-pve**
  - Latest version: 6.8.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.1-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.1-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.1-1-pve-amd64, pve-headers-6.8.1-1-pve

  </details>

- **proxmox-headers-6.8.12-1-pve**
  - Latest version: 6.8.12-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-1-pve-amd64, pve-headers-6.8.12-1-pve

  </details>

- **proxmox-headers-6.8.12-10-pve**
  - Latest version: 6.8.12-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-10-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-10-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-10-pve-amd64, pve-headers-6.8.12-10-pve

  </details>

- **proxmox-headers-6.8.12-11-pve**
  - Latest version: 6.8.12-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-11-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-11-pve-amd64, pve-headers-6.8.12-11-pve

  </details>

- **proxmox-headers-6.8.12-12-pve**
  - Latest version: 6.8.12-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-12-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-12-pve-amd64, pve-headers-6.8.12-12-pve

  </details>

- **proxmox-headers-6.8.12-13-pve**
  - Latest version: 6.8.12-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-13-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-13-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-13-pve-amd64, pve-headers-6.8.12-13-pve

  </details>

- **proxmox-headers-6.8.12-14-pve**
  - Latest version: 6.8.12-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-14-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-14-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-14-pve-amd64, pve-headers-6.8.12-14-pve

  </details>

- **proxmox-headers-6.8.12-15-pve**
  - Latest version: 6.8.12-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-15-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-15-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-15-pve-amd64, pve-headers-6.8.12-15-pve

  </details>

- **proxmox-headers-6.8.12-16-pve**
  - Latest version: 6.8.12-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-16-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-16-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-16-pve-amd64, pve-headers-6.8.12-16-pve

  </details>

- **proxmox-headers-6.8.12-17-pve**
  - Latest version: 6.8.12-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-17-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-17-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-17-pve-amd64, pve-headers-6.8.12-17-pve

  </details>

- **proxmox-headers-6.8.12-18-pve**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-18-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-18-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-18-pve-amd64, pve-headers-6.8.12-18-pve

  </details>

- **proxmox-headers-6.8.12-2-pve**
  - Latest version: 6.8.12-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-2-pve-amd64, pve-headers-6.8.12-2-pve

  </details>

- **proxmox-headers-6.8.12-3-pve**
  - Latest version: 6.8.12-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-3-pve-amd64, pve-headers-6.8.12-3-pve

  </details>

- **proxmox-headers-6.8.12-4-pve**
  - Latest version: 6.8.12-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-4-pve-amd64, pve-headers-6.8.12-4-pve

  </details>

- **proxmox-headers-6.8.12-5-pve**
  - Latest version: 6.8.12-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-5-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-5-pve-amd64, pve-headers-6.8.12-5-pve

  </details>

- **proxmox-headers-6.8.12-6-pve**
  - Latest version: 6.8.12-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-6-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-6-pve-amd64, pve-headers-6.8.12-6-pve

  </details>

- **proxmox-headers-6.8.12-7-pve**
  - Latest version: 6.8.12-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-7-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-7-pve-amd64, pve-headers-6.8.12-7-pve

  </details>

- **proxmox-headers-6.8.12-8-pve**
  - Latest version: 6.8.12-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-8-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-8-pve-amd64, pve-headers-6.8.12-8-pve

  </details>

- **proxmox-headers-6.8.12-9-pve**
  - Latest version: 6.8.12-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.12-9-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.12-9-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.12-9-pve-amd64, pve-headers-6.8.12-9-pve

  </details>

- **proxmox-headers-6.8.4-1-pve**
  - Latest version: 6.8.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.4-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.4-1-pve-amd64, pve-headers-6.8.4-1-pve

  </details>

- **proxmox-headers-6.8.4-2-pve**
  - Latest version: 6.8.4-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.4-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.4-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.4-2-pve-amd64, pve-headers-6.8.4-2-pve

  </details>

- **proxmox-headers-6.8.4-3-pve**
  - Latest version: 6.8.4-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.4-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.4-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.4-3-pve-amd64, pve-headers-6.8.4-3-pve

  </details>

- **proxmox-headers-6.8.4-4-pve**
  - Latest version: 6.8.4-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.4-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.4-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.4-4-pve-amd64, pve-headers-6.8.4-4-pve

  </details>

- **proxmox-headers-6.8.8-1-pve**
  - Latest version: 6.8.8-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.8-1-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.8-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.8-1-pve-amd64, pve-headers-6.8.8-1-pve

  </details>

- **proxmox-headers-6.8.8-2-pve**
  - Latest version: 6.8.8-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.8-2-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.8-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.8-2-pve-amd64, pve-headers-6.8.8-2-pve

  </details>

- **proxmox-headers-6.8.8-3-pve**
  - Latest version: 6.8.8-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.8-3-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.8-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.8-3-pve-amd64, pve-headers-6.8.8-3-pve

  </details>

- **proxmox-headers-6.8.8-4-pve**
  - Latest version: 6.8.8-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install proxmox-headers-6.8.8-4-pve`
  - Install (apt): `sudo apt install proxmox-headers-6.8.8-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.8.8-4-pve-amd64, pve-headers-6.8.8-4-pve

  </details>

- **proxmox-installer**
  - Latest version: 8.4.6
  - Architectures: all, amd64
  - Suite: bookworm
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
  - depends: chrony, geoip-bin, iproute2, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libgtk3-perl, libgtk3-webkit2-perl, libjson-perl, libssl3 (>= 3.0.0), perl:any, proxmox-kernel-helper, squashfs-tools
  - breaks: pbs-installer (<< 7~), pve-installer (<< 7~)
  - replaces: pbs-installer (<< 7~), pve-installer (<< 7~)

  </details>

- **proxmox-kernel-6.11**
  - Latest version: 6.11.11-2
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.11`
  - Install (apt): `sudo apt install proxmox-kernel-6.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.11.0-1-pve-signed | proxmox-kernel-6.11.0-1-pve, proxmox-kernel-6.11.0-2-pve-signed | proxmox-kernel-6.11.0-2-pve, proxmox-kernel-6.11.11-1-pve-signed | proxmox-kernel-6.11.11-1-pve, proxmox-kernel-6.11.11-2-pve-signed | proxmox-kernel-6.11.11-2-pve, pve-firmware
  - replaces: pve-kernel-6.11
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.11, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.11.0-1-pve**
  - Latest version: 6.11.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.11.0-1-pve-amd64, pve-kernel-6.11.0-1-pve

  </details>

- **proxmox-kernel-6.11.0-1-pve-signed**
  - Latest version: 6.11.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.11.0-1-pve
  - replaces: proxmox-kernel-6.11.0-1-pve
  - provides: linux-image-6.11.0-1-pve-amd64, proxmox-kernel-6.11.0-1-pve

  </details>

- **proxmox-kernel-6.11.0-1-pve-signed-template**
  - Latest version: 6.11.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.11.0-2-pve**
  - Latest version: 6.11.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.11.0-2-pve-amd64, pve-kernel-6.11.0-2-pve

  </details>

- **proxmox-kernel-6.11.0-2-pve-signed**
  - Latest version: 6.11.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.11.0-2-pve
  - replaces: proxmox-kernel-6.11.0-2-pve
  - provides: linux-image-6.11.0-2-pve-amd64, proxmox-kernel-6.11.0-2-pve

  </details>

- **proxmox-kernel-6.11.0-2-pve-signed-template**
  - Latest version: 6.11.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.11.0-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.0-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.11.11-1-pve**
  - Latest version: 6.11.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.11.11-1-pve-amd64, pve-kernel-6.11.11-1-pve

  </details>

- **proxmox-kernel-6.11.11-1-pve-signed**
  - Latest version: 6.11.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.11.11-1-pve
  - replaces: proxmox-kernel-6.11.11-1-pve
  - provides: linux-image-6.11.11-1-pve-amd64, proxmox-kernel-6.11.11-1-pve

  </details>

- **proxmox-kernel-6.11.11-1-pve-signed-template**
  - Latest version: 6.11.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.11.11-2-pve**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.11.11-2-pve-amd64, pve-kernel-6.11.11-2-pve

  </details>

- **proxmox-kernel-6.11.11-2-pve-signed**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.11.11-2-pve
  - replaces: proxmox-kernel-6.11.11-2-pve
  - provides: linux-image-6.11.11-2-pve-amd64, proxmox-kernel-6.11.11-2-pve

  </details>

- **proxmox-kernel-6.11.11-2-pve-signed-template**
  - Latest version: 6.11.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.11.11-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.11.11-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14`
  - Install (apt): `sudo apt install proxmox-kernel-6.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.14.0-1-pve-signed | proxmox-kernel-6.14.0-1-pve, proxmox-kernel-6.14.0-2-pve-signed | proxmox-kernel-6.14.0-2-pve, proxmox-kernel-6.14.11-5-bpo12-pve-signed | proxmox-kernel-6.14.11-5-bpo12-pve, proxmox-kernel-6.14.4-1-pve-signed | proxmox-kernel-6.14.4-1-pve, proxmox-kernel-6.14.5-1-bpo12-pve-signed | proxmox-kernel-6.14.5-1-bpo12-pve, proxmox-kernel-6.14.8-1-bpo12-pve-signed | proxmox-kernel-6.14.8-1-bpo12-pve, proxmox-kernel-6.14.8-2-bpo12-pve-signed | proxmox-kernel-6.14.8-2-bpo12-pve, proxmox-kernel-6.14.8-3-bpo12-pve-signed | proxmox-kernel-6.14.8-3-bpo12-pve, pve-firmware
  - replaces: pve-kernel-6.14
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.14, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.14.0-1-pve**
  - Latest version: 6.14.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.0-1-pve-amd64, pve-kernel-6.14.0-1-pve

  </details>

- **proxmox-kernel-6.14.0-1-pve-signed**
  - Latest version: 6.14.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.0-1-pve
  - replaces: proxmox-kernel-6.14.0-1-pve
  - provides: linux-image-6.14.0-1-pve-amd64, proxmox-kernel-6.14.0-1-pve

  </details>

- **proxmox-kernel-6.14.0-1-pve-signed-template**
  - Latest version: 6.14.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.0-2-pve**
  - Latest version: 6.14.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.0-2-pve-amd64, pve-kernel-6.14.0-2-pve

  </details>

- **proxmox-kernel-6.14.0-2-pve-signed**
  - Latest version: 6.14.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.0-2-pve
  - replaces: proxmox-kernel-6.14.0-2-pve
  - provides: linux-image-6.14.0-2-pve-amd64, proxmox-kernel-6.14.0-2-pve

  </details>

- **proxmox-kernel-6.14.0-2-pve-signed-template**
  - Latest version: 6.14.0-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.0-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.0-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.11-5-bpo12-pve**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.11-5-bpo12-pve-amd64, pve-kernel-6.14.11-5-bpo12-pve

  </details>

- **proxmox-kernel-6.14.11-5-bpo12-pve-signed**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-bpo12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-bpo12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.11-5-bpo12-pve
  - replaces: proxmox-kernel-6.14.11-5-bpo12-pve
  - provides: linux-image-6.14.11-5-bpo12-pve-amd64, proxmox-kernel-6.14.11-5-bpo12-pve

  </details>

- **proxmox-kernel-6.14.11-5-bpo12-pve-signed-template**
  - Latest version: 6.14.11-5~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.11-5-bpo12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.11-5-bpo12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.4-1-pve**
  - Latest version: 6.14.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.4-1-pve-amd64, pve-kernel-6.14.4-1-pve

  </details>

- **proxmox-kernel-6.14.4-1-pve-signed**
  - Latest version: 6.14.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.4-1-pve
  - replaces: proxmox-kernel-6.14.4-1-pve
  - provides: linux-image-6.14.4-1-pve-amd64, proxmox-kernel-6.14.4-1-pve

  </details>

- **proxmox-kernel-6.14.4-1-pve-signed-template**
  - Latest version: 6.14.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.4-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.4-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.5-1-bpo12-pve**
  - Latest version: 6.14.5-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.5-1-bpo12-pve-amd64, pve-kernel-6.14.5-1-bpo12-pve

  </details>

- **proxmox-kernel-6.14.5-1-bpo12-pve-signed**
  - Latest version: 6.14.5-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-bpo12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-bpo12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.5-1-bpo12-pve
  - replaces: proxmox-kernel-6.14.5-1-bpo12-pve
  - provides: linux-image-6.14.5-1-bpo12-pve-amd64, proxmox-kernel-6.14.5-1-bpo12-pve

  </details>

- **proxmox-kernel-6.14.5-1-bpo12-pve-signed-template**
  - Latest version: 6.14.5-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.5-1-bpo12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.5-1-bpo12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.8-1-bpo12-pve**
  - Latest version: 6.14.8-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.8-1-bpo12-pve-amd64, pve-kernel-6.14.8-1-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-1-bpo12-pve-signed**
  - Latest version: 6.14.8-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-bpo12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-bpo12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.8-1-bpo12-pve
  - replaces: proxmox-kernel-6.14.8-1-bpo12-pve
  - provides: linux-image-6.14.8-1-bpo12-pve-amd64, proxmox-kernel-6.14.8-1-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-1-bpo12-pve-signed-template**
  - Latest version: 6.14.8-1~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-1-bpo12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-1-bpo12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.8-2-bpo12-pve**
  - Latest version: 6.14.8-2~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.8-2-bpo12-pve-amd64, pve-kernel-6.14.8-2-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-2-bpo12-pve-signed**
  - Latest version: 6.14.8-2~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-bpo12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-bpo12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.8-2-bpo12-pve
  - replaces: proxmox-kernel-6.14.8-2-bpo12-pve
  - provides: linux-image-6.14.8-2-bpo12-pve-amd64, proxmox-kernel-6.14.8-2-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-2-bpo12-pve-signed-template**
  - Latest version: 6.14.8-2~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-2-bpo12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-2-bpo12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.14.8-3-bpo12-pve**
  - Latest version: 6.14.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-3-bpo12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-3-bpo12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.14.8-3-bpo12-pve-amd64, pve-kernel-6.14.8-3-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-3-bpo12-pve-signed**
  - Latest version: 6.14.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-3-bpo12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-3-bpo12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.14.8-3-bpo12-pve
  - replaces: proxmox-kernel-6.14.8-3-bpo12-pve
  - provides: linux-image-6.14.8-3-bpo12-pve-amd64, proxmox-kernel-6.14.8-3-bpo12-pve

  </details>

- **proxmox-kernel-6.14.8-3-bpo12-pve-signed-template**
  - Latest version: 6.14.8-3~bpo12+1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.14.8-3-bpo12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.14.8-3-bpo12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.2**
  - Latest version: 6.2.16-20
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2`
  - Install (apt): `sudo apt install proxmox-kernel-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.2.16-10-pve, proxmox-kernel-6.2.16-11-pve, proxmox-kernel-6.2.16-12-pve, proxmox-kernel-6.2.16-13-pve, proxmox-kernel-6.2.16-14-pve, proxmox-kernel-6.2.16-15-pve, proxmox-kernel-6.2.16-16-pve, proxmox-kernel-6.2.16-18-pve, proxmox-kernel-6.2.16-19-pve, proxmox-kernel-6.2.16-20-pve, proxmox-kernel-6.2.16-6-pve, proxmox-kernel-6.2.16-8-pve, proxmox-kernel-6.2.16-9-pve, pve-firmware
  - replaces: pve-kernel-6.2
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.2, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.2.16-10-pve**
  - Latest version: 6.2.16-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-10-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-10-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-10-pve-amd64, pve-kernel-6.2.16-10-pve

  </details>

- **proxmox-kernel-6.2.16-11-pve**
  - Latest version: 6.2.16-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-11-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-11-pve-amd64, pve-kernel-6.2.16-11-pve

  </details>

- **proxmox-kernel-6.2.16-12-pve**
  - Latest version: 6.2.16-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-12-pve-amd64, pve-kernel-6.2.16-12-pve

  </details>

- **proxmox-kernel-6.2.16-13-pve**
  - Latest version: 6.2.16-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-13-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-13-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-13-pve-amd64, pve-kernel-6.2.16-13-pve

  </details>

- **proxmox-kernel-6.2.16-14-pve**
  - Latest version: 6.2.16-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-14-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-14-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-14-pve-amd64, pve-kernel-6.2.16-14-pve

  </details>

- **proxmox-kernel-6.2.16-15-pve**
  - Latest version: 6.2.16-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-15-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-15-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-15-pve-amd64, pve-kernel-6.2.16-15-pve

  </details>

- **proxmox-kernel-6.2.16-16-pve**
  - Latest version: 6.2.16-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-16-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-16-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-16-pve-amd64, pve-kernel-6.2.16-16-pve

  </details>

- **proxmox-kernel-6.2.16-17-pve**
  - Latest version: 6.2.16-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-17-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-17-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-17-pve-amd64, pve-kernel-6.2.16-17-pve

  </details>

- **proxmox-kernel-6.2.16-18-pve**
  - Latest version: 6.2.16-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-18-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-18-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-18-pve-amd64, pve-kernel-6.2.16-18-pve

  </details>

- **proxmox-kernel-6.2.16-19-pve**
  - Latest version: 6.2.16-19
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-19-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-19-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-19-pve-amd64, pve-kernel-6.2.16-19-pve

  </details>

- **proxmox-kernel-6.2.16-20-pve**
  - Latest version: 6.2.16-20
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-20-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-20-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-20-pve-amd64, pve-kernel-6.2.16-20-pve

  </details>

- **proxmox-kernel-6.2.16-6-pve**
  - Latest version: 6.2.16-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-6-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-6-pve-amd64, pve-kernel-6.2.16-6-pve

  </details>

- **proxmox-kernel-6.2.16-8-pve**
  - Latest version: 6.2.16-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-8-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-8-pve-amd64, pve-kernel-6.2.16-8-pve

  </details>

- **proxmox-kernel-6.2.16-9-pve**
  - Latest version: 6.2.16-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.2.16-9-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.2.16-9-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-9-pve-amd64, pve-kernel-6.2.16-9-pve

  </details>

- **proxmox-kernel-6.5**
  - Latest version: 6.5.13-6
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5`
  - Install (apt): `sudo apt install proxmox-kernel-6.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.5.11-1-pve, proxmox-kernel-6.5.11-2-pve, proxmox-kernel-6.5.11-3-pve, proxmox-kernel-6.5.11-4-pve-signed | proxmox-kernel-6.5.11-4-pve, proxmox-kernel-6.5.11-5-pve-signed | proxmox-kernel-6.5.11-5-pve, proxmox-kernel-6.5.11-6-pve-signed | proxmox-kernel-6.5.11-6-pve, proxmox-kernel-6.5.11-7-pve-signed | proxmox-kernel-6.5.11-7-pve, proxmox-kernel-6.5.11-8-pve-signed | proxmox-kernel-6.5.11-8-pve, proxmox-kernel-6.5.13-1-pve-signed | proxmox-kernel-6.5.13-1-pve, proxmox-kernel-6.5.13-2-pve-signed | proxmox-kernel-6.5.13-2-pve, proxmox-kernel-6.5.13-3-pve-signed | proxmox-kernel-6.5.13-3-pve, proxmox-kernel-6.5.13-4-pve-signed | proxmox-kernel-6.5.13-4-pve, proxmox-kernel-6.5.13-5-pve-signed | proxmox-kernel-6.5.13-5-pve, proxmox-kernel-6.5.13-6-pve-signed | proxmox-kernel-6.5.13-6-pve, proxmox-kernel-6.5.3-1-pve, pve-firmware
  - replaces: pve-kernel-6.5
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.5, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.5.11-1-pve**
  - Latest version: 6.5.11-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-1-pve-amd64, pve-kernel-6.5.11-1-pve

  </details>

- **proxmox-kernel-6.5.11-2-pve**
  - Latest version: 6.5.11-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-2-pve-amd64, pve-kernel-6.5.11-2-pve

  </details>

- **proxmox-kernel-6.5.11-3-pve**
  - Latest version: 6.5.11-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-3-pve-amd64, pve-kernel-6.5.11-3-pve

  </details>

- **proxmox-kernel-6.5.11-4-pve**
  - Latest version: 6.5.11-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-4-pve-amd64, pve-kernel-6.5.11-4-pve

  </details>

- **proxmox-kernel-6.5.11-4-pve-signed**
  - Latest version: 6.5.11-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.11-4-pve
  - replaces: proxmox-kernel-6.5.11-4-pve
  - provides: linux-image-6.5.11-4-pve-amd64, proxmox-kernel-6.5.11-4-pve

  </details>

- **proxmox-kernel-6.5.11-4-pve-signed-template**
  - Latest version: 6.5.11-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.11-5-pve**
  - Latest version: 6.5.11-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-5-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-5-pve-amd64, pve-kernel-6.5.11-5-pve

  </details>

- **proxmox-kernel-6.5.11-5-pve-signed**
  - Latest version: 6.5.11-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-5-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-5-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.11-5-pve
  - replaces: proxmox-kernel-6.5.11-5-pve
  - provides: linux-image-6.5.11-5-pve-amd64, proxmox-kernel-6.5.11-5-pve

  </details>

- **proxmox-kernel-6.5.11-5-pve-signed-template**
  - Latest version: 6.5.11-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-5-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-5-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.11-6-pve**
  - Latest version: 6.5.11-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-6-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-6-pve-amd64, pve-kernel-6.5.11-6-pve

  </details>

- **proxmox-kernel-6.5.11-6-pve-signed**
  - Latest version: 6.5.11-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-6-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-6-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.11-6-pve
  - replaces: proxmox-kernel-6.5.11-6-pve
  - provides: linux-image-6.5.11-6-pve-amd64, proxmox-kernel-6.5.11-6-pve

  </details>

- **proxmox-kernel-6.5.11-6-pve-signed-template**
  - Latest version: 6.5.11-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-6-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-6-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.11-7-pve**
  - Latest version: 6.5.11-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-7-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-7-pve-amd64, pve-kernel-6.5.11-7-pve

  </details>

- **proxmox-kernel-6.5.11-7-pve-signed**
  - Latest version: 6.5.11-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-7-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-7-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.11-7-pve
  - replaces: proxmox-kernel-6.5.11-7-pve
  - provides: linux-image-6.5.11-7-pve-amd64, proxmox-kernel-6.5.11-7-pve

  </details>

- **proxmox-kernel-6.5.11-7-pve-signed-template**
  - Latest version: 6.5.11-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-7-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-7-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.11-8-pve**
  - Latest version: 6.5.11-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-8-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.11-8-pve-amd64, pve-kernel-6.5.11-8-pve

  </details>

- **proxmox-kernel-6.5.11-8-pve-signed**
  - Latest version: 6.5.11-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-8-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-8-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.11-8-pve
  - replaces: proxmox-kernel-6.5.11-8-pve
  - provides: linux-image-6.5.11-8-pve-amd64, proxmox-kernel-6.5.11-8-pve

  </details>

- **proxmox-kernel-6.5.11-8-pve-signed-template**
  - Latest version: 6.5.11-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.11-8-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.11-8-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.13-1-pve**
  - Latest version: 6.5.13-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-1-pve-amd64, pve-kernel-6.5.13-1-pve

  </details>

- **proxmox-kernel-6.5.13-1-pve-signed**
  - Latest version: 6.5.13-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-1-pve
  - replaces: proxmox-kernel-6.5.13-1-pve
  - provides: linux-image-6.5.13-1-pve-amd64, proxmox-kernel-6.5.13-1-pve

  </details>

- **proxmox-kernel-6.5.13-2-pve**
  - Latest version: 6.5.13-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-2-pve-amd64, pve-kernel-6.5.13-2-pve

  </details>

- **proxmox-kernel-6.5.13-2-pve-signed**
  - Latest version: 6.5.13-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-2-pve
  - replaces: proxmox-kernel-6.5.13-2-pve
  - provides: linux-image-6.5.13-2-pve-amd64, proxmox-kernel-6.5.13-2-pve

  </details>

- **proxmox-kernel-6.5.13-2-pve-signed-template**
  - Latest version: 6.5.13-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.13-3-pve**
  - Latest version: 6.5.13-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-3-pve-amd64, pve-kernel-6.5.13-3-pve

  </details>

- **proxmox-kernel-6.5.13-3-pve-signed**
  - Latest version: 6.5.13-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-3-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-3-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-3-pve
  - replaces: proxmox-kernel-6.5.13-3-pve
  - provides: linux-image-6.5.13-3-pve-amd64, proxmox-kernel-6.5.13-3-pve

  </details>

- **proxmox-kernel-6.5.13-3-pve-signed-template**
  - Latest version: 6.5.13-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-3-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-3-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.13-4-pve**
  - Latest version: 6.5.13-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-4-pve-amd64, pve-kernel-6.5.13-4-pve

  </details>

- **proxmox-kernel-6.5.13-4-pve-signed**
  - Latest version: 6.5.13-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-4-pve
  - replaces: proxmox-kernel-6.5.13-4-pve
  - provides: linux-image-6.5.13-4-pve-amd64, proxmox-kernel-6.5.13-4-pve

  </details>

- **proxmox-kernel-6.5.13-4-pve-signed-template**
  - Latest version: 6.5.13-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.13-5-pve**
  - Latest version: 6.5.13-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-5-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-5-pve-amd64, pve-kernel-6.5.13-5-pve

  </details>

- **proxmox-kernel-6.5.13-5-pve-signed**
  - Latest version: 6.5.13-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-5-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-5-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-5-pve
  - replaces: proxmox-kernel-6.5.13-5-pve
  - provides: linux-image-6.5.13-5-pve-amd64, proxmox-kernel-6.5.13-5-pve

  </details>

- **proxmox-kernel-6.5.13-5-pve-signed-template**
  - Latest version: 6.5.13-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-5-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-5-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.13-6-pve**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-6-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.13-6-pve-amd64, pve-kernel-6.5.13-6-pve

  </details>

- **proxmox-kernel-6.5.13-6-pve-signed**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-6-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-6-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.5.13-6-pve
  - replaces: proxmox-kernel-6.5.13-6-pve
  - provides: linux-image-6.5.13-6-pve-amd64, proxmox-kernel-6.5.13-6-pve

  </details>

- **proxmox-kernel-6.5.13-6-pve-signed-template**
  - Latest version: 6.5.13-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.5.13-6-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.13-6-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.5.3-1-pve**
  - Latest version: 6.5.3-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.5.3-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.5.3-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.5.3-1-pve-amd64, pve-kernel-6.5.3-1-pve

  </details>

- **proxmox-kernel-6.8**
  - Latest version: 6.8.12-18
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8`
  - Install (apt): `sudo apt install proxmox-kernel-6.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.8.1-1-pve-signed | proxmox-kernel-6.8.1-1-pve, proxmox-kernel-6.8.12-1-pve-signed | proxmox-kernel-6.8.12-1-pve, proxmox-kernel-6.8.12-10-pve-signed | proxmox-kernel-6.8.12-10-pve, proxmox-kernel-6.8.12-11-pve-signed | proxmox-kernel-6.8.12-11-pve, proxmox-kernel-6.8.12-12-pve-signed | proxmox-kernel-6.8.12-12-pve, proxmox-kernel-6.8.12-13-pve-signed | proxmox-kernel-6.8.12-13-pve, proxmox-kernel-6.8.12-14-pve-signed | proxmox-kernel-6.8.12-14-pve, proxmox-kernel-6.8.12-15-pve-signed | proxmox-kernel-6.8.12-15-pve, proxmox-kernel-6.8.12-16-pve-signed | proxmox-kernel-6.8.12-16-pve, proxmox-kernel-6.8.12-17-pve-signed | proxmox-kernel-6.8.12-17-pve, proxmox-kernel-6.8.12-18-pve-signed | proxmox-kernel-6.8.12-18-pve, proxmox-kernel-6.8.12-2-pve-signed | proxmox-kernel-6.8.12-2-pve, proxmox-kernel-6.8.12-3-pve-signed | proxmox-kernel-6.8.12-3-pve, proxmox-kernel-6.8.12-4-pve-signed | proxmox-kernel-6.8.12-4-pve, proxmox-kernel-6.8.12-5-pve-signed | proxmox-kernel-6.8.12-5-pve, proxmox-kernel-6.8.12-6-pve-signed | proxmox-kernel-6.8.12-6-pve, proxmox-kernel-6.8.12-7-pve-signed | proxmox-kernel-6.8.12-7-pve, proxmox-kernel-6.8.12-8-pve-signed | proxmox-kernel-6.8.12-8-pve, proxmox-kernel-6.8.12-9-pve-signed | proxmox-kernel-6.8.12-9-pve, proxmox-kernel-6.8.4-2-pve-signed | proxmox-kernel-6.8.4-2-pve, proxmox-kernel-6.8.4-3-pve-signed | proxmox-kernel-6.8.4-3-pve, proxmox-kernel-6.8.4-4-pve-signed | proxmox-kernel-6.8.4-4-pve, proxmox-kernel-6.8.8-1-pve-signed | proxmox-kernel-6.8.8-1-pve, proxmox-kernel-6.8.8-2-pve-signed | proxmox-kernel-6.8.8-2-pve, proxmox-kernel-6.8.8-3-pve-signed | proxmox-kernel-6.8.8-3-pve, proxmox-kernel-6.8.8-4-pve-signed | proxmox-kernel-6.8.8-4-pve, pve-firmware
  - replaces: pve-kernel-6.8
  - provides: linux-image-amd64, linux-image-generic, pve-kernel-6.8, wireguard-modules (= 1.0.0)

  </details>

- **proxmox-kernel-6.8.1-1-pve**
  - Latest version: 6.8.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.1-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.1-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.1-1-pve-amd64, pve-kernel-6.8.1-1-pve

  </details>

- **proxmox-kernel-6.8.1-1-pve-signed**
  - Latest version: 6.8.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.1-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.1-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.1-1-pve
  - replaces: proxmox-kernel-6.8.1-1-pve
  - provides: linux-image-6.8.1-1-pve-amd64, proxmox-kernel-6.8.1-1-pve

  </details>

- **proxmox-kernel-6.8.1-1-pve-signed-template**
  - Latest version: 6.8.1-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.1-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.1-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-1-pve**
  - Latest version: 6.8.12-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-1-pve-amd64, pve-kernel-6.8.12-1-pve

  </details>

- **proxmox-kernel-6.8.12-1-pve-signed**
  - Latest version: 6.8.12-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-1-pve
  - replaces: proxmox-kernel-6.8.12-1-pve
  - provides: linux-image-6.8.12-1-pve-amd64, proxmox-kernel-6.8.12-1-pve

  </details>

- **proxmox-kernel-6.8.12-1-pve-signed-template**
  - Latest version: 6.8.12-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-10-pve**
  - Latest version: 6.8.12-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-10-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-10-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-10-pve-amd64, pve-kernel-6.8.12-10-pve

  </details>

- **proxmox-kernel-6.8.12-10-pve-signed**
  - Latest version: 6.8.12-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-10-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-10-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-10-pve
  - replaces: proxmox-kernel-6.8.12-10-pve
  - provides: linux-image-6.8.12-10-pve-amd64, proxmox-kernel-6.8.12-10-pve

  </details>

- **proxmox-kernel-6.8.12-10-pve-signed-template**
  - Latest version: 6.8.12-10
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-10-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-10-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-11-pve**
  - Latest version: 6.8.12-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-11-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-11-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-11-pve-amd64, pve-kernel-6.8.12-11-pve

  </details>

- **proxmox-kernel-6.8.12-11-pve-signed**
  - Latest version: 6.8.12-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-11-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-11-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-11-pve
  - replaces: proxmox-kernel-6.8.12-11-pve
  - provides: linux-image-6.8.12-11-pve-amd64, proxmox-kernel-6.8.12-11-pve

  </details>

- **proxmox-kernel-6.8.12-11-pve-signed-template**
  - Latest version: 6.8.12-11
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-11-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-11-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-12-pve**
  - Latest version: 6.8.12-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-12-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-12-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-12-pve-amd64, pve-kernel-6.8.12-12-pve

  </details>

- **proxmox-kernel-6.8.12-12-pve-signed**
  - Latest version: 6.8.12-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-12-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-12-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-12-pve
  - replaces: proxmox-kernel-6.8.12-12-pve
  - provides: linux-image-6.8.12-12-pve-amd64, proxmox-kernel-6.8.12-12-pve

  </details>

- **proxmox-kernel-6.8.12-12-pve-signed-template**
  - Latest version: 6.8.12-12
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-12-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-12-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-13-pve**
  - Latest version: 6.8.12-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-13-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-13-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-13-pve-amd64, pve-kernel-6.8.12-13-pve

  </details>

- **proxmox-kernel-6.8.12-13-pve-signed**
  - Latest version: 6.8.12-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-13-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-13-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-13-pve
  - replaces: proxmox-kernel-6.8.12-13-pve
  - provides: linux-image-6.8.12-13-pve-amd64, proxmox-kernel-6.8.12-13-pve

  </details>

- **proxmox-kernel-6.8.12-13-pve-signed-template**
  - Latest version: 6.8.12-13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-13-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-13-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-14-pve**
  - Latest version: 6.8.12-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-14-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-14-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-14-pve-amd64, pve-kernel-6.8.12-14-pve

  </details>

- **proxmox-kernel-6.8.12-14-pve-signed**
  - Latest version: 6.8.12-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-14-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-14-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-14-pve
  - replaces: proxmox-kernel-6.8.12-14-pve
  - provides: linux-image-6.8.12-14-pve-amd64, proxmox-kernel-6.8.12-14-pve

  </details>

- **proxmox-kernel-6.8.12-14-pve-signed-template**
  - Latest version: 6.8.12-14
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-14-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-14-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-15-pve**
  - Latest version: 6.8.12-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-15-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-15-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-15-pve-amd64, pve-kernel-6.8.12-15-pve

  </details>

- **proxmox-kernel-6.8.12-15-pve-signed**
  - Latest version: 6.8.12-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-15-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-15-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-15-pve
  - replaces: proxmox-kernel-6.8.12-15-pve
  - provides: linux-image-6.8.12-15-pve-amd64, proxmox-kernel-6.8.12-15-pve

  </details>

- **proxmox-kernel-6.8.12-15-pve-signed-template**
  - Latest version: 6.8.12-15
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-15-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-15-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-16-pve**
  - Latest version: 6.8.12-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-16-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-16-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-16-pve-amd64, pve-kernel-6.8.12-16-pve

  </details>

- **proxmox-kernel-6.8.12-16-pve-signed**
  - Latest version: 6.8.12-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-16-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-16-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-16-pve
  - replaces: proxmox-kernel-6.8.12-16-pve
  - provides: linux-image-6.8.12-16-pve-amd64, proxmox-kernel-6.8.12-16-pve

  </details>

- **proxmox-kernel-6.8.12-16-pve-signed-template**
  - Latest version: 6.8.12-16
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-16-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-16-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-17-pve**
  - Latest version: 6.8.12-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-17-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-17-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-17-pve-amd64, pve-kernel-6.8.12-17-pve

  </details>

- **proxmox-kernel-6.8.12-17-pve-signed**
  - Latest version: 6.8.12-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-17-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-17-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-17-pve
  - replaces: proxmox-kernel-6.8.12-17-pve
  - provides: linux-image-6.8.12-17-pve-amd64, proxmox-kernel-6.8.12-17-pve

  </details>

- **proxmox-kernel-6.8.12-17-pve-signed-template**
  - Latest version: 6.8.12-17
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-17-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-17-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-18-pve**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-18-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-18-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-18-pve-amd64, pve-kernel-6.8.12-18-pve

  </details>

- **proxmox-kernel-6.8.12-18-pve-signed**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-18-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-18-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-18-pve
  - replaces: proxmox-kernel-6.8.12-18-pve
  - provides: linux-image-6.8.12-18-pve-amd64, proxmox-kernel-6.8.12-18-pve

  </details>

- **proxmox-kernel-6.8.12-18-pve-signed-template**
  - Latest version: 6.8.12-18
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-18-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-18-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-2-pve**
  - Latest version: 6.8.12-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-2-pve-amd64, pve-kernel-6.8.12-2-pve

  </details>

- **proxmox-kernel-6.8.12-2-pve-signed**
  - Latest version: 6.8.12-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-2-pve
  - replaces: proxmox-kernel-6.8.12-2-pve
  - provides: linux-image-6.8.12-2-pve-amd64, proxmox-kernel-6.8.12-2-pve

  </details>

- **proxmox-kernel-6.8.12-2-pve-signed-template**
  - Latest version: 6.8.12-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-3-pve**
  - Latest version: 6.8.12-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-3-pve-amd64, pve-kernel-6.8.12-3-pve

  </details>

- **proxmox-kernel-6.8.12-3-pve-signed**
  - Latest version: 6.8.12-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-3-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-3-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-3-pve
  - replaces: proxmox-kernel-6.8.12-3-pve
  - provides: linux-image-6.8.12-3-pve-amd64, proxmox-kernel-6.8.12-3-pve

  </details>

- **proxmox-kernel-6.8.12-3-pve-signed-template**
  - Latest version: 6.8.12-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-3-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-3-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-4-pve**
  - Latest version: 6.8.12-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-4-pve-amd64, pve-kernel-6.8.12-4-pve

  </details>

- **proxmox-kernel-6.8.12-4-pve-signed**
  - Latest version: 6.8.12-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-4-pve
  - replaces: proxmox-kernel-6.8.12-4-pve
  - provides: linux-image-6.8.12-4-pve-amd64, proxmox-kernel-6.8.12-4-pve

  </details>

- **proxmox-kernel-6.8.12-4-pve-signed-template**
  - Latest version: 6.8.12-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-5-pve**
  - Latest version: 6.8.12-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-5-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-5-pve-amd64, pve-kernel-6.8.12-5-pve

  </details>

- **proxmox-kernel-6.8.12-5-pve-signed**
  - Latest version: 6.8.12-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-5-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-5-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-5-pve
  - replaces: proxmox-kernel-6.8.12-5-pve
  - provides: linux-image-6.8.12-5-pve-amd64, proxmox-kernel-6.8.12-5-pve

  </details>

- **proxmox-kernel-6.8.12-5-pve-signed-template**
  - Latest version: 6.8.12-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-5-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-5-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-6-pve**
  - Latest version: 6.8.12-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-6-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-6-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-6-pve-amd64, pve-kernel-6.8.12-6-pve

  </details>

- **proxmox-kernel-6.8.12-6-pve-signed**
  - Latest version: 6.8.12-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-6-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-6-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-6-pve
  - replaces: proxmox-kernel-6.8.12-6-pve
  - provides: linux-image-6.8.12-6-pve-amd64, proxmox-kernel-6.8.12-6-pve

  </details>

- **proxmox-kernel-6.8.12-6-pve-signed-template**
  - Latest version: 6.8.12-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-6-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-6-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-7-pve**
  - Latest version: 6.8.12-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-7-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-7-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-7-pve-amd64, pve-kernel-6.8.12-7-pve

  </details>

- **proxmox-kernel-6.8.12-7-pve-signed**
  - Latest version: 6.8.12-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-7-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-7-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-7-pve
  - replaces: proxmox-kernel-6.8.12-7-pve
  - provides: linux-image-6.8.12-7-pve-amd64, proxmox-kernel-6.8.12-7-pve

  </details>

- **proxmox-kernel-6.8.12-7-pve-signed-template**
  - Latest version: 6.8.12-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-7-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-7-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-8-pve**
  - Latest version: 6.8.12-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-8-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-8-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-8-pve-amd64, pve-kernel-6.8.12-8-pve

  </details>

- **proxmox-kernel-6.8.12-8-pve-signed**
  - Latest version: 6.8.12-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-8-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-8-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-8-pve
  - replaces: proxmox-kernel-6.8.12-8-pve
  - provides: linux-image-6.8.12-8-pve-amd64, proxmox-kernel-6.8.12-8-pve

  </details>

- **proxmox-kernel-6.8.12-8-pve-signed-template**
  - Latest version: 6.8.12-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-8-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-8-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.12-9-pve**
  - Latest version: 6.8.12-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-9-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-9-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.12-9-pve-amd64, pve-kernel-6.8.12-9-pve

  </details>

- **proxmox-kernel-6.8.12-9-pve-signed**
  - Latest version: 6.8.12-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-9-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-9-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.12-9-pve
  - replaces: proxmox-kernel-6.8.12-9-pve
  - provides: linux-image-6.8.12-9-pve-amd64, proxmox-kernel-6.8.12-9-pve

  </details>

- **proxmox-kernel-6.8.12-9-pve-signed-template**
  - Latest version: 6.8.12-9
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.12-9-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.12-9-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.4-1-pve**
  - Latest version: 6.8.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.4-1-pve-amd64, pve-kernel-6.8.4-1-pve

  </details>

- **proxmox-kernel-6.8.4-1-pve-signed**
  - Latest version: 6.8.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.4-1-pve
  - replaces: proxmox-kernel-6.8.4-1-pve
  - provides: linux-image-6.8.4-1-pve-amd64, proxmox-kernel-6.8.4-1-pve

  </details>

- **proxmox-kernel-6.8.4-1-pve-signed-template**
  - Latest version: 6.8.4-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.4-2-pve**
  - Latest version: 6.8.4-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.4-2-pve-amd64, pve-kernel-6.8.4-2-pve

  </details>

- **proxmox-kernel-6.8.4-2-pve-signed**
  - Latest version: 6.8.4-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.4-2-pve
  - replaces: proxmox-kernel-6.8.4-2-pve
  - provides: linux-image-6.8.4-2-pve-amd64, proxmox-kernel-6.8.4-2-pve

  </details>

- **proxmox-kernel-6.8.4-2-pve-signed-template**
  - Latest version: 6.8.4-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.4-3-pve**
  - Latest version: 6.8.4-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.4-3-pve-amd64, pve-kernel-6.8.4-3-pve

  </details>

- **proxmox-kernel-6.8.4-3-pve-signed**
  - Latest version: 6.8.4-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-3-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-3-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.4-3-pve
  - replaces: proxmox-kernel-6.8.4-3-pve
  - provides: linux-image-6.8.4-3-pve-amd64, proxmox-kernel-6.8.4-3-pve

  </details>

- **proxmox-kernel-6.8.4-3-pve-signed-template**
  - Latest version: 6.8.4-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-3-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-3-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.4-4-pve**
  - Latest version: 6.8.4-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.4-4-pve-amd64, pve-kernel-6.8.4-4-pve

  </details>

- **proxmox-kernel-6.8.4-4-pve-signed**
  - Latest version: 6.8.4-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.4-4-pve
  - replaces: proxmox-kernel-6.8.4-4-pve
  - provides: linux-image-6.8.4-4-pve-amd64, proxmox-kernel-6.8.4-4-pve

  </details>

- **proxmox-kernel-6.8.4-4-pve-signed-template**
  - Latest version: 6.8.4-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.4-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.4-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.8-1-pve**
  - Latest version: 6.8.8-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-1-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.8-1-pve-amd64, pve-kernel-6.8.8-1-pve

  </details>

- **proxmox-kernel-6.8.8-1-pve-signed**
  - Latest version: 6.8.8-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-1-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-1-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.8-1-pve
  - replaces: proxmox-kernel-6.8.8-1-pve
  - provides: linux-image-6.8.8-1-pve-amd64, proxmox-kernel-6.8.8-1-pve

  </details>

- **proxmox-kernel-6.8.8-1-pve-signed-template**
  - Latest version: 6.8.8-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-1-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-1-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.8-2-pve**
  - Latest version: 6.8.8-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-2-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.8-2-pve-amd64, pve-kernel-6.8.8-2-pve

  </details>

- **proxmox-kernel-6.8.8-2-pve-signed**
  - Latest version: 6.8.8-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-2-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-2-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.8-2-pve
  - replaces: proxmox-kernel-6.8.8-2-pve
  - provides: linux-image-6.8.8-2-pve-amd64, proxmox-kernel-6.8.8-2-pve

  </details>

- **proxmox-kernel-6.8.8-2-pve-signed-template**
  - Latest version: 6.8.8-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-2-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-2-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.8-3-pve**
  - Latest version: 6.8.8-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-3-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.8-3-pve-amd64, pve-kernel-6.8.8-3-pve

  </details>

- **proxmox-kernel-6.8.8-3-pve-signed**
  - Latest version: 6.8.8-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-3-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-3-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.8-3-pve
  - replaces: proxmox-kernel-6.8.8-3-pve
  - provides: linux-image-6.8.8-3-pve-amd64, proxmox-kernel-6.8.8-3-pve

  </details>

- **proxmox-kernel-6.8.8-3-pve-signed-template**
  - Latest version: 6.8.8-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-3-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-3-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-6.8.8-4-pve**
  - Latest version: 6.8.8-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-4-pve`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.8.8-4-pve-amd64, pve-kernel-6.8.8-4-pve

  </details>

- **proxmox-kernel-6.8.8-4-pve-signed**
  - Latest version: 6.8.8-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image (signed)
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-4-pve-signed`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-4-pve-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - conflicts: proxmox-kernel-6.8.8-4-pve
  - replaces: proxmox-kernel-6.8.8-4-pve
  - provides: linux-image-6.8.8-4-pve-amd64, proxmox-kernel-6.8.8-4-pve

  </details>

- **proxmox-kernel-6.8.8-4-pve-signed-template**
  - Latest version: 6.8.8-4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed kernel package
  - Install: `sudo apt-get install proxmox-kernel-6.8.8-4-pve-signed-template`
  - Install (apt): `sudo apt install proxmox-kernel-6.8.8-4-pve-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-kernel-helper**
  - Latest version: 8.1.4
  - Architectures: all
  - Suite: bookworm
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
  - suggests: systemd-boot
  - breaks: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - replaces: proxmox-ve (<< 6.0-2~), pve-kernel-helper
  - provides: pve-kernel-helper

  </details>

- **proxmox-kernel-libc-dev**
  - Latest version: 6.5.11-8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - provides: linux-libc-dev (= 6.2.16-10), linux-libc-dev (= 6.2.16-7), linux-libc-dev (= 6.2.16-8), linux-libc-dev (= 6.2.16-9), linux-libc-dev (= 6.5.11-4), linux-libc-dev (= 6.5.11-5), linux-libc-dev (= 6.5.11-6), linux-libc-dev (= 6.5.11-8), pve-kernel-libc-dev

  </details>

- **proxmox-mail-forward**
  - Latest version: 0.3.3
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libuuid1 (>= 2.16)

  </details>

- **proxmox-mail-forward-dbgsym**
  - Latest version: 0.3.3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-mail-forward
  - Install: `sudo apt-get install proxmox-mail-forward-dbgsym`
  - Install (apt): `sudo apt install proxmox-mail-forward-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mail-forward (= 0.1.1-1), proxmox-mail-forward (= 0.2.0), proxmox-mail-forward (= 0.2.1), proxmox-mail-forward (= 0.2.2), proxmox-mail-forward (= 0.2.3), proxmox-mail-forward (= 0.3.1), proxmox-mail-forward (= 0.3.2), proxmox-mail-forward (= 0.3.3)

  </details>

- **proxmox-mini-journalreader**
  - Latest version: 1.5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Minimal systemd Journal Reader
  - Install: `sudo apt-get install proxmox-mini-journalreader`
  - Install (apt): `sudo apt install proxmox-mini-journalreader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd0

  </details>

- **proxmox-mini-journalreader-dbgsym**
  - Latest version: 1.5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-mini-journalreader
  - Install: `sudo apt-get install proxmox-mini-journalreader-dbgsym`
  - Install (apt): `sudo apt install proxmox-mini-journalreader-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-mini-journalreader (= 1.4.0), proxmox-mini-journalreader (= 1.5)

  </details>

- **proxmox-offline-mirror**
  - Latest version: 0.6.8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox offline repository mirror and subscription key manager
  - Install: `sudo apt-get install proxmox-offline-mirror`
  - Install (apt): `sudo apt install proxmox-offline-mirror`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libgmp10 (>= 2:6.2.1+dfsg1), libhogweed6, liblzma5 (>= 5.1.1alpha+20120614), libnettle8, libssl3 (>= 3.0.0), proxmox-archive-keyring, proxmox-offline-mirror-docs

  </details>

- **proxmox-offline-mirror-dbgsym**
  - Latest version: 0.6.8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-offline-mirror
  - Install: `sudo apt-get install proxmox-offline-mirror-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror (= 0.6.0), proxmox-offline-mirror (= 0.6.1), proxmox-offline-mirror (= 0.6.2), proxmox-offline-mirror (= 0.6.3), proxmox-offline-mirror (= 0.6.4), proxmox-offline-mirror (= 0.6.5), proxmox-offline-mirror (= 0.6.6), proxmox-offline-mirror (= 0.6.7), proxmox-offline-mirror (= 0.6.8)

  </details>

- **proxmox-offline-mirror-docs**
  - Latest version: 0.6.8
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 0.6.8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox offline repository mirror and subscription key manager helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libgmp10 (>= 2:6.2.1+dfsg1), libhogweed6, liblzma5 (>= 5.1.1alpha+20110809), libnettle8, libssl3 (>= 3.0.0), proxmox-archive-keyring, proxmox-offline-mirror-docs
  - breaks: proxmox-offline-mirror (<< 0.3.0~)
  - replaces: proxmox-offline-mirror (<< 0.3.0~)

  </details>

- **proxmox-offline-mirror-helper-dbgsym**
  - Latest version: 0.6.8
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-offline-mirror-helper
  - Install: `sudo apt-get install proxmox-offline-mirror-helper-dbgsym`
  - Install (apt): `sudo apt install proxmox-offline-mirror-helper-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-offline-mirror-helper (= 0.6.0), proxmox-offline-mirror-helper (= 0.6.1), proxmox-offline-mirror-helper (= 0.6.2), proxmox-offline-mirror-helper (= 0.6.3), proxmox-offline-mirror-helper (= 0.6.4), proxmox-offline-mirror-helper (= 0.6.5), proxmox-offline-mirror-helper (= 0.6.6), proxmox-offline-mirror-helper (= 0.6.7), proxmox-offline-mirror-helper (= 0.6.8)

  </details>

- **proxmox-secure-boot-policies**
  - Latest version: 0.0~git20240117.c443a5f-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: SBAT policies for secure boot revocation updates
  - Homepage: https://github.com/rhboot/certwrapper
  - Install: `sudo apt-get install proxmox-secure-boot-policies`
  - Install (apt): `sudo apt install proxmox-secure-boot-policies`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional

  </details>

- **proxmox-secure-boot-policies-amd64-signed**
  - Latest version: 0.0~git20240117.c443a5f+6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: SBAT policies for secure boot revocation updates (signed)
  - Homepage: https://github.com/rhboot/certwrapper
  - Install: `sudo apt-get install proxmox-secure-boot-policies-amd64-signed`
  - Install (apt): `sudo apt install proxmox-secure-boot-policies-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - provides: proxmox-secure-boot-policies-signed

  </details>

- **proxmox-secure-boot-policies-amd64-signed-template**
  - Latest version: 0.0~git20240117.c443a5f-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Template for signed proxmox-secure-boot-policies package
  - Homepage: https://github.com/rhboot/certwrapper
  - Install: `sudo apt-get install proxmox-secure-boot-policies-amd64-signed-template`
  - Install (apt): `sudo apt install proxmox-secure-boot-policies-amd64-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **proxmox-secure-boot-support**
  - Latest version: 1.0.13
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Meta package pulling in signed Secure Boot related packages
  - Install: `sudo apt-get install proxmox-secure-boot-support`
  - Install (apt): `sudo apt install proxmox-secure-boot-support`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: grub-efi-amd64-signed (= 1+2.06+13+pmx1), grub-efi-amd64-signed (= 1+2.06+13+pmx1) | grub-efi-amd64-signed (= 1+2.06+13+pmx2), grub-efi-amd64-signed (= 1+2.06+13+pmx2), grub-efi-amd64-signed (= 1+2.06+13+pmx2) | grub-efi-amd64-signed (= 1+2.06+13+pmx4) | grub-efi-amd64-signed (= 1+2.06+13+pmx5), grub-efi-amd64-signed (= 1+2.06+13+pmx5) | grub-efi-amd64-signed (= 1+2.06+13+pmx6), grub-efi-amd64-signed (= 1+2.06+13+pmx6) | grub-efi-amd64-signed (= 1+2.06+13+pmx7), proxmox-grub (= 2.06-13+pmx1), proxmox-grub (= 2.06-13+pmx1) | proxmox-grub (= 2.06-13+pmx2), proxmox-grub (= 2.06-13+pmx2), proxmox-grub (= 2.06-13+pmx2) | proxmox-grub (= 2.06-13+pmx4) | proxmox-grub (= 2.06-13+pmx5), proxmox-grub (= 2.06-13+pmx5) | proxmox-grub (= 2.06-13+pmx6), proxmox-grub (= 2.06-13+pmx6) | proxmox-grub (= 2.06-13+pmx7), shim-helpers-amd64-signed (= 1+15.7+1+pmx1), shim-helpers-amd64-signed (= 1+15.8+1+pmx1), shim-signed (= 1.39+pmx1+15.7-1+pmx1), shim-signed (= 1.40+pmx1+15.8-1+pmx1), shim-signed (= 1.42+pmx1+15.8-1+pmx1), shim-signed (= 1.44+pmx1+15.8-1+pmx1), shim-unsigned (= 15.7-1+pmx1), shim-unsigned (= 15.8-1+pmx1)

  </details>

- **proxmox-shim-unsigned**
  - Latest version: 15.8-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Empty package ensuring Proxmox version of shim-unsigned is installed.
  - Install: `sudo apt-get install proxmox-shim-unsigned`
  - Install (apt): `sudo apt install proxmox-shim-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: shim-unsigned (= 15.8-1+pmx1)

  </details>

- **proxmox-termproxy**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Wrapper proxy for executing programs in the system terminal
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-termproxy`
  - Install (apt): `sudo apt install proxmox-termproxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)
  - recommends: pve-xtermjs
  - breaks: pve-xtermjs (<< 5.3.0~)
  - replaces: pve-xtermjs (<< 5.3.0~)

  </details>

- **proxmox-termproxy-dbgsym**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-termproxy
  - Install: `sudo apt-get install proxmox-termproxy-dbgsym`
  - Install (apt): `sudo apt install proxmox-termproxy-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-termproxy (= 1.0.0), proxmox-termproxy (= 1.0.1), proxmox-termproxy (= 1.1.0)

  </details>

- **proxmox-ve**
  - Latest version: 8.4.0
  - Architectures: all
  - Suite: bookworm
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
  - depends: apt, openssh-client, openssh-server, proxmox-archive-keyring, proxmox-default-kernel, proxmox-kernel-helper, proxmox-kernel-helper (>= 8.0.3), pve-kernel-6.2, pve-kernel-helper, pve-manager, pve-manager (>= 8.0.4), pve-qemu-kvm, qemu-server, systemd-sysv
  - provides: proxmox-virtual-environment

  </details>

- **proxmox-vma-to-pbs**
  - Latest version: 0.0.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: This allows importing VMA based backups into PBS remotes.
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install proxmox-vma-to-pbs`
  - Install (apt): `sudo apt install proxmox-vma-to-pbs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libuuid1 (>= 2.16), libzstd1 (>= 1.5.2)

  </details>

- **proxmox-vma-to-pbs-dbgsym**
  - Latest version: 0.0.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-vma-to-pbs
  - Install: `sudo apt-get install proxmox-vma-to-pbs-dbgsym`
  - Install (apt): `sudo apt install proxmox-vma-to-pbs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-vma-to-pbs (= 0.0.1), proxmox-vma-to-pbs (= 0.0.2)

  </details>

- **proxmox-websocket-tunnel**
  - Latest version: 0.2.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox websocket tunneling helper
  - Install: `sudo apt-get install proxmox-websocket-tunnel`
  - Install (apt): `sudo apt install proxmox-websocket-tunnel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0)

  </details>

- **proxmox-websocket-tunnel-dbgsym**
  - Latest version: 0.2.0-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for proxmox-websocket-tunnel
  - Install: `sudo apt-get install proxmox-websocket-tunnel-dbgsym`
  - Install (apt): `sudo apt install proxmox-websocket-tunnel-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: proxmox-websocket-tunnel (= 0.2.0-1)

  </details>

- **proxmox-widget-toolkit**
  - Latest version: 4.3.13
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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

- **proxmox-widget-toolkit-dev**
  - Latest version: 3.1-1
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 8.1.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: "pmxcfs" distributed cluster filesystem for Proxmox Virtual Environment.
  - Install: `sudo apt-get install pve-cluster`
  - Install (apt): `sudo apt install pve-cluster`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: corosync (>= 2.3.4-1), fuse, libc6 (>= 2.34), libcmap4 (>= 1.99.9), libcpg4 (>= 2.3.4), libfuse2 (>= 2.9.2-4), libglib2.0-0 (>= 2.68), libpve-common-perl (>= 6.0-7~), libqb100 (>= 2.0.1), libquorum5 (>= 2.3.4), librrd8 (>= 1.4~rc2), libsqlite3-0 (>= 3.20.0), perl (>= 5.36.0-7), perl (>= 5.36.0-7+deb12u1), perl (>= 5.36.0-7+deb12u2), perlapi-5.36.0, sqlite3, systemd
  - breaks: libpve-access-control (<= 6.0-3), libpve-guest-common-perl (<= 3.0-2), libpve-storage-perl (<= 6.0-9), pve-container (<= 3.0-10), pve-ha-manager (<= 3.0-3), pve-manager (<= 6.0-12), qemu-server (<= 6.0-13)

  </details>

- **pve-cluster-dbgsym**
  - Latest version: 8.1.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-cluster
  - Install: `sudo apt-get install pve-cluster-dbgsym`
  - Install (apt): `sudo apt install pve-cluster-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-cluster (= 8.0.1), pve-cluster (= 8.0.10), pve-cluster (= 8.0.2), pve-cluster (= 8.0.3), pve-cluster (= 8.0.4), pve-cluster (= 8.0.5), pve-cluster (= 8.0.6), pve-cluster (= 8.0.7), pve-cluster (= 8.0.8), pve-cluster (= 8.1.0), pve-cluster (= 8.1.1), pve-cluster (= 8.1.2)

  </details>

- **pve-container**
  - Latest version: 5.3.3
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox VE Container management tool
  - Install: `sudo apt-get install pve-container`
  - Install (apt): `sudo apt install pve-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: binutils, file, libpve-access-control (>= 8.0.0~), libpve-cluster-perl, libpve-common-perl (>= 7.4-1), libpve-common-perl (>= 8.1.0), libpve-guest-common-perl (>= 5.0.3), libpve-guest-common-perl (>= 5.1.0), libpve-guest-common-perl (>= 5.1.3), libpve-storage-perl (>= 7.2-10), libpve-storage-perl (>= 8.3.5), lxc-pve, perl:any, proxmox-backup-client (>= 3.0.2-1), proxmox-backup-client (>= 3.2.3-1), proxmox-backup-client (>= 3.2.5-1), pve-cluster (>= 4.0-8), pve-firewall (>= 5.1.2), pve-ha-manager (>= 3.0-9), pve-lxc-syscalld, xz-utils
  - recommends: libpve-network-perl (>= 0.8.3)

  </details>

- **pve-doc-generator**
  - Latest version: 8.4.1
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 8.4.1
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 4.2025.02-4~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 4.2025.02-4~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 4.2025.02-4~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 4.2025.02-4~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 4.2025.02-4~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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

- **pve-eslint**
  - Latest version: 8.23.1-1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: ESLint for Proxmox Virtual Environment development
  - Homepage: http://www.proxmox.com
  - Install: `sudo apt-get install pve-eslint`
  - Install (apt): `sudo apt install pve-eslint`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - depends: node-colors, node-commander, nodejs (>= 18.13.0+dfsg1)
  - provides: node-pve-eslint (= 7.28.0)

  </details>

- **pve-esxi-import-tools**
  - Latest version: 0.7.4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Tools to allow importing VMs from ESXi hosts
  - Homepage: https://www.proxmox.com
  - Install: `sudo apt-get install pve-esxi-import-tools`
  - Install (apt): `sudo apt install pve-esxi-import-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libfuse3-3 (>= 3.2.3), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2), python3, python3-pyvmomi

  </details>

- **pve-esxi-import-tools-dbgsym**
  - Latest version: 0.7.4
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-esxi-import-tools
  - Install: `sudo apt-get install pve-esxi-import-tools-dbgsym`
  - Install (apt): `sudo apt install pve-esxi-import-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-esxi-import-tools (= 0.5.0), pve-esxi-import-tools (= 0.6.0), pve-esxi-import-tools (= 0.6.1), pve-esxi-import-tools (= 0.7.0), pve-esxi-import-tools (= 0.7.1), pve-esxi-import-tools (= 0.7.2), pve-esxi-import-tools (= 0.7.3), pve-esxi-import-tools (= 0.7.4)

  </details>

- **pve-firewall**
  - Latest version: 5.1.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox VE Firewall
  - Install: `sudo apt-get install pve-firewall`
  - Install (apt): `sudo apt install pve-firewall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ebtables, ipset, iptables, libc6 (>= 2.34), libglib2.0-0 (>= 2.31.18), libnetfilter-conntrack3 (>= 1.0.1), libnetfilter-log1 (>= 0.0.15), libnfnetlink0 (>= 1.0.2), libpve-access-control, libpve-cluster-perl, libpve-common-perl (>= 7.3-2), libpve-network-perl (>= 0.9.9~), libpve-rs-perl (>= 0.8.13), perl:any, pve-cluster (>= 6.1-6)
  - conflicts: ulogd

  </details>

- **pve-firewall-dbgsym**
  - Latest version: 5.1.2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-firewall
  - Install: `sudo apt-get install pve-firewall-dbgsym`
  - Install (apt): `sudo apt install pve-firewall-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-firewall (= 5.0.1), pve-firewall (= 5.0.2), pve-firewall (= 5.0.3), pve-firewall (= 5.0.4), pve-firewall (= 5.0.5), pve-firewall (= 5.0.6), pve-firewall (= 5.0.7), pve-firewall (= 5.1.0), pve-firewall (= 5.1.1), pve-firewall (= 5.1.2)

  </details>

- **pve-firmware**
  - Latest version: 3.16-3
  - Architectures: all
  - Suite: bookworm
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
  - conflicts: firmware-amd-graphics, firmware-ath9k-htc, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity
  - replaces: firmware-amd-graphics, firmware-ath9k-htc, firmware-atheros, firmware-bnx2, firmware-bnx2x, firmware-brcm80211, firmware-cavium, firmware-intelwimax, firmware-ipw2x00, firmware-ivtv, firmware-iwlwifi, firmware-libertas, firmware-linux-free, firmware-linux-nonfree, firmware-misc-nonfree, firmware-myricom, firmware-netronome, firmware-netxen, firmware-qlogic, firmware-ralink, firmware-realtek, firmware-siano, firmware-ti-connectivity

  </details>

- **pve-ha-manager**
  - Latest version: 4.0.7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox VE HA Manager
  - Install: `sudo apt-get install pve-ha-manager`
  - Install (apt): `sudo apt install pve-ha-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: perl
  - Priority: optional
  - depends: libc6 (>= 2.34), libjson-perl, libpve-cluster-perl, libpve-common-perl, libpve-notify-perl, libpve-notify-perl (>= 8.1.0), libpve-rs-perl (>= 0.7.3), perl:any, pve-cluster (>= 3.0-17), pve-container (>= 5.0.1), qemu-server (>= 8.0.2), systemd
  - conflicts: watchdog

  </details>

- **pve-ha-manager-dbgsym**
  - Latest version: 4.0.7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-ha-manager
  - Install: `sudo apt-get install pve-ha-manager-dbgsym`
  - Install (apt): `sudo apt install pve-ha-manager-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-ha-manager (= 4.0.1), pve-ha-manager (= 4.0.2), pve-ha-manager (= 4.0.3), pve-ha-manager (= 4.0.4), pve-ha-manager (= 4.0.5), pve-ha-manager (= 4.0.6), pve-ha-manager (= 4.0.7)

  </details>

- **pve-ha-simulator**
  - Latest version: 4.0.7
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 8.4.0
  - Architectures: all
  - Suite: bookworm
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
  - depends: proxmox-default-headers, pve-headers-6.2

  </details>

- **pve-headers-6.1**
  - Latest version: 7.3-4
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.1`
  - Install (apt): `sudo apt install pve-headers-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-headers-6.1.10-1-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-6.1.10-1-pve**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bookworm
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

- **pve-headers-6.2**
  - Latest version: 8.0.5
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2`
  - Install (apt): `sudo apt install pve-headers-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-headers-6.2, pve-headers-6.2.16-1-pve, pve-headers-6.2.16-2-pve, pve-headers-6.2.16-3-pve, pve-headers-6.2.16-4-pve, pve-headers-6.2.16-5-pve
  - provides: linux-headers-amd64, linux-headers-generic

  </details>

- **pve-headers-6.2.16-1-pve**
  - Latest version: 6.2.16-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-1-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-1-pve-amd64

  </details>

- **pve-headers-6.2.16-2-pve**
  - Latest version: 6.2.16-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-2-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-2-pve-amd64

  </details>

- **pve-headers-6.2.16-3-pve**
  - Latest version: 6.2.16-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-3-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-3-pve-amd64

  </details>

- **pve-headers-6.2.16-4-pve**
  - Latest version: 6.2.16-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-4-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-4-pve-amd64

  </details>

- **pve-headers-6.2.16-5-pve**
  - Latest version: 6.2.16-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Headers
  - Install: `sudo apt-get install pve-headers-6.2.16-5-pve`
  - Install (apt): `sudo apt install pve-headers-6.2.16-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: devel
  - Priority: optional
  - provides: linux-headers-6.2.16-5-pve-amd64

  </details>

- **pve-i18n**
  - Latest version: 3.4.5
  - Architectures: all
  - Suite: bookworm
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

- **pve-kernel-6.1**
  - Latest version: 7.3-4
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.1`
  - Install (apt): `sudo apt install pve-kernel-6.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: pve-firmware, pve-kernel-6.1.10-1-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-6.1.10-1-pve**
  - Latest version: 6.1.10-1
  - Architectures: amd64
  - Suite: bookworm
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

- **pve-kernel-6.2**
  - Latest version: 8.0.5
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Latest Proxmox VE Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2`
  - Install (apt): `sudo apt install pve-kernel-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: proxmox-kernel-6.2, pve-firmware, pve-kernel-6.2.16-1-pve, pve-kernel-6.2.16-2-pve, pve-kernel-6.2.16-3-pve, pve-kernel-6.2.16-4-pve, pve-kernel-6.2.16-5-pve
  - provides: linux-image-amd64, linux-image-generic, wireguard-modules (= 1.0.0)

  </details>

- **pve-kernel-6.2.16-1-pve**
  - Latest version: 6.2.16-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-1-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-1-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-1-pve-amd64

  </details>

- **pve-kernel-6.2.16-2-pve**
  - Latest version: 6.2.16-2
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-2-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-2-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-2-pve-amd64

  </details>

- **pve-kernel-6.2.16-3-pve**
  - Latest version: 6.2.16-3
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-3-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-3-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-3-pve-amd64

  </details>

- **pve-kernel-6.2.16-4-pve**
  - Latest version: 6.2.16-5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-4-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-4-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-4-pve-amd64

  </details>

- **pve-kernel-6.2.16-5-pve**
  - Latest version: 6.2.16-6
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Kernel Image
  - Install: `sudo apt-get install pve-kernel-6.2.16-5-pve`
  - Install (apt): `sudo apt install pve-kernel-6.2.16-5-pve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: busybox, initramfs-tools | linux-initramfs-tool
  - recommends: grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub-efi-arm64
  - suggests: pve-firmware
  - provides: linux-image-6.2.16-5-pve-amd64

  </details>

- **pve-kernel-helper**
  - Latest version: 7.3-4
  - Architectures: all
  - Suite: bookworm
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
  - Latest version: 6.2.16-3
  - Architectures: amd64
  - Suite: bookworm
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
  - provides: linux-libc-dev (= 6.1.10-1), linux-libc-dev (= 6.2.16-3)

  </details>

- **pve-lxc-syscalld**
  - Latest version: 1.3.0
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libsystemd0

  </details>

- **pve-lxc-syscalld-dbgsym**
  - Latest version: 1.3.0
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-lxc-syscalld
  - Install: `sudo apt-get install pve-lxc-syscalld-dbgsym`
  - Install (apt): `sudo apt install pve-lxc-syscalld-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-lxc-syscalld (= 1.3.0)

  </details>

- **pve-manager**
  - Latest version: 8.4.16
  - Architectures: all, amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Proxmox Virtual Environment Management Tools
  - Install: `sudo apt-get install pve-manager`
  - Install (apt): `sudo apt install pve-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: apt (>= 1.5~), ca-certificates, cstream, dtach, fonts-font-awesome, fonts-font-logos, gdisk, hdparm, ifupdown2 (>= 2.0.1-1+pve8) | ifenslave (>= 2.6), ifupdown2 (>= 3.0) | ifenslave (>= 2.6), libapt-pkg-perl, libcrypt-ssleay-perl, libfile-readbackwards-perl, libfilesys-df-perl, libjs-extjs (>= 7.0.0), libjs-qrcodejs (>= 1.20201119), libjs-sencha-touch, libjson-perl, liblwp-protocol-https-perl, libnet-dns-perl, libproxmox-acme-perl, libproxmox-acme-plugins, libproxmox-rs-perl (>= 0.2.0), libproxmox-rs-perl (>= 0.3.4), libpve-access-control (>= 8.0.0~2), libpve-access-control (>= 8.0.5), libpve-access-control (>= 8.0.7), libpve-access-control (>= 8.1.2), libpve-access-control (>= 8.1.3), libpve-access-control (>= 8.2.0), libpve-cluster-api-perl (>= 7.0-5), libpve-cluster-perl (>= 7.2-3), libpve-cluster-perl (>= 8.1.0), libpve-common-perl (>= 7.2-7), libpve-common-perl (>= 8.1.2), libpve-common-perl (>= 8.2.0), libpve-common-perl (>= 8.2.3), libpve-common-perl (>= 8.2.6), libpve-guest-common-perl (>= 4.2-1), libpve-guest-common-perl (>= 5.0.2), libpve-guest-common-perl (>= 5.0.5), libpve-guest-common-perl (>= 5.0.6), libpve-guest-common-perl (>= 5.1.0), libpve-guest-common-perl (>= 5.1.4), libpve-http-server-perl (>= 4.1-1), libpve-http-server-perl (>= 5.1.1), libpve-network-api-perl (>= 0.9.9~), libpve-network-perl (>= 0.9~), libpve-notify-perl, libpve-notify-perl (>= 8.0.5), libpve-notify-perl (>= 8.1.0), libpve-rs-perl (>= 0.7.1), libpve-rs-perl (>= 0.8.10), libpve-rs-perl (>= 0.8.12), libpve-storage-perl (>= 7.2-12), libpve-storage-perl (>= 8.0.3), libpve-storage-perl (>= 8.1.3), libpve-storage-perl (>= 8.1.5), libpve-storage-perl (>= 8.2.8), libpve-storage-perl (>= 8.3.6), librados2-perl (>= 1.3-1), libtemplate-perl, libterm-readline-gnu-perl, liburi-perl, libuuid-perl, libwww-perl (>= 6.04-1), logrotate, lzop, novnc-pve (>= 1.2.0-2~), pciutils, perl (>= 5.10.0-19), perl:any, postfix | mail-transport-agent, proxmox-mail-forward, proxmox-mini-journalreader (>= 1.3-1), proxmox-widget-toolkit (>= 3.6.0), proxmox-widget-toolkit (>= 4.0.7), proxmox-widget-toolkit (>= 4.1.1), proxmox-widget-toolkit (>= 4.1.5), proxmox-widget-toolkit (>= 4.2.0), proxmox-widget-toolkit (>= 4.3.0), proxmox-widget-toolkit (>= 4.3.5), pve-cluster (>= 7.0-4), pve-cluster (>= 8.0.5), pve-container (>= 4.0-9), pve-container (>= 5.0.5), pve-container (>= 5.1.11), pve-container (>= 5.2.5), pve-docs, pve-docs (>= 8.0~~), pve-firewall, pve-ha-manager, pve-i18n (>= 1.0-3), pve-i18n (>= 3.2.0~), pve-xtermjs (>= 4.7.0-1), qemu-server (>= 7.2-8), qemu-server (>= 8.0.4), qemu-server (>= 8.1.2), qemu-server (>= 8.2.7), qemu-server (>= 8.3.11), rsync, spiceterm, systemd, vncterm, wget, zstd
  - recommends: libpve-network-perl (>= 0.9~), proxmox-firewall, proxmox-offline-mirror-helper, pve-nvidia-vgpu-helper
  - suggests: libpve-network-perl (>= 0.5-1), libpve-network-perl (>= 0.8.2)
  - conflicts: vlan, vzdump
  - breaks: libpve-network-perl (<< 0.5-1)
  - replaces: vlan, vzdump
  - provides: vlan, vzdump

  </details>

- **pve-nvidia-vgpu-helper**
  - Latest version: 0.2.0
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 9.2.0-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Full virtualization on x86 hardware
  - Install: `sudo apt-get install pve-qemu-kvm`
  - Install (apt): `sudo apt install pve-qemu-kvm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: ceph-common (>= 0.48), iproute2, libaio1 (>= 0.3.93), libasound2 (>= 1.0.16), libc6 (>= 2.34), libcap-ng0 (>= 0.7.9), libcurl3-gnutls (>= 7.16.3), libepoxy0 (>= 1.3), libfdt1 (>= 1.6.1), libgbm1 (>= 12.0.0~0), libgcc-s1 (>= 3.4), libgfapi0 | glusterfs-common (>= 5.6), libgfchangelog0 | glusterfs-common (>= 5.6), libgfdb0 | glusterfs-common (>= 5.6), libgfrpc0 | glusterfs-common (>= 5.6), libgfxdr0 | glusterfs-common (>= 5.6), libglib2.0-0 (>= 2.67.3), libglusterfs-dev | glusterfs-common (>= 5.6), libglusterfs0 | glusterfs-common (>= 5.6), libgnutls30 (>= 3.7.5), libiscsi7 (>= 1.18.0), libjpeg62-turbo (>= 1.3.1), libnuma1 (>= 2.0.15-1), libpixman-1-0 (>= 0.30.0), libpng16-16 (>= 1.6.2-1), libproxmox-backup-qemu0 (>= 1.3.0), libpulse0 (>= 0.99.1), librados2 (>= 16.2.11+ds), librados2 (>= 16.2.15+ds), librbd1 (>= 16.2.6+ds), libseccomp2 (>= 2.1.0), libselinux1 (>= 3.1~), libslirp0 (>= 4.7.0), libspice-server1 (>= 0.14.2), libsystemd0, libudev1 (>= 183), liburing2 (>= 2.3), libusb-1.0-0 (>= 2:1.0.23~), libusbredirparser1 (>= 0.8.0), libuuid1 (>= 2.16), libvirglrenderer1 (>= 0.8.0), libzstd1 (>= 1.5.2), zlib1g (>= 1:1.2.0)
  - recommends: numactl
  - suggests: libgl1
  - conflicts: kvm, pve-kvm, pve-qemu-kvm-2.6.18, qemu, qemu-kvm, qemu-system-arm, qemu-system-common, qemu-system-data, qemu-system-x86, qemu-utils
  - breaks: qemu-server (<= 8.0.6)
  - replaces: pve-kvm, pve-qemu-kvm-2.6.18, qemu-system-arm, qemu-system-x86, qemu-utils
  - provides: qemu-system-arm, qemu-system-x86, qemu-utils

  </details>

- **pve-qemu-kvm-dbgsym**
  - Latest version: 9.2.0-7
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-qemu-kvm
  - Install: `sudo apt-get install pve-qemu-kvm-dbgsym`
  - Install (apt): `sudo apt install pve-qemu-kvm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-qemu-kvm (= 8.0.2-2), pve-qemu-kvm (= 8.0.2-3), pve-qemu-kvm (= 8.0.2-4), pve-qemu-kvm (= 8.0.2-5), pve-qemu-kvm (= 8.0.2-6), pve-qemu-kvm (= 8.0.2-7), pve-qemu-kvm (= 8.1.2-1), pve-qemu-kvm (= 8.1.2-2), pve-qemu-kvm (= 8.1.2-3), pve-qemu-kvm (= 8.1.2-4), pve-qemu-kvm (= 8.1.2-5), pve-qemu-kvm (= 8.1.2-6), pve-qemu-kvm (= 8.1.5-1), pve-qemu-kvm (= 8.1.5-2), pve-qemu-kvm (= 8.1.5-3), pve-qemu-kvm (= 8.1.5-4), pve-qemu-kvm (= 8.1.5-5), pve-qemu-kvm (= 8.1.5-6), pve-qemu-kvm (= 8.2.2-1), pve-qemu-kvm (= 9.0.0-2), pve-qemu-kvm (= 9.0.0-3), pve-qemu-kvm (= 9.0.0-4), pve-qemu-kvm (= 9.0.0-5), pve-qemu-kvm (= 9.0.0-6), pve-qemu-kvm (= 9.0.2-1), pve-qemu-kvm (= 9.0.2-2), pve-qemu-kvm (= 9.0.2-3), pve-qemu-kvm (= 9.0.2-4), pve-qemu-kvm (= 9.0.2-5), pve-qemu-kvm (= 9.1.2-3), pve-qemu-kvm (= 9.2.0-1), pve-qemu-kvm (= 9.2.0-2), pve-qemu-kvm (= 9.2.0-3), pve-qemu-kvm (= 9.2.0-4), pve-qemu-kvm (= 9.2.0-5), pve-qemu-kvm (= 9.2.0-6), pve-qemu-kvm (= 9.2.0-7)
  - breaks: pve-qemu-kvm-dbg (<<8.0.0-1~)
  - replaces: pve-qemu-kvm-dbg (<<8.0.0-1~)

  </details>

- **pve-xtermjs**
  - Latest version: 5.5.0-2
  - Architectures: all, amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), proxmox-termproxy

  </details>

- **pve-xtermjs-dbgsym**
  - Latest version: 4.16.0-4
  - Architectures: all, amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for pve-xtermjs
  - Install: `sudo apt-get install pve-xtermjs-dbgsym`
  - Install (apt): `sudo apt install pve-xtermjs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: pve-xtermjs (= 4.16.0-3)

  </details>

- **pve-zsync**
  - Latest version: 2.3.1
  - Architectures: all
  - Suite: bookworm
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
  - depends: libjson-perl, libstring-shellquote-perl, perl:any

  </details>

- **python-pyvmomi-doc**
  - Latest version: 6.7.1-4.1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: VMware vSphere Python SDK - documentation
  - Homepage: https://github.com/vmware/pyvmomi
  - Install: `sudo apt-get install python-pyvmomi-doc`
  - Install (apt): `sudo apt install python-pyvmomi-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Python Team <team+python@tracker.debian.org>
  - Section: doc
  - Priority: optional
  - preDepends: dpkg

  </details>

- **python3-pyvmomi**
  - Latest version: 6.7.1-4.1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: VMware vSphere Python SDK - Python 3.x
  - Homepage: https://github.com/vmware/pyvmomi
  - Install: `sudo apt-get install python3-pyvmomi`
  - Install (apt): `sudo apt install python3-pyvmomi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Python Team <team+python@tracker.debian.org>
  - Section: python
  - Priority: optional
  - depends: python3-requests, python3-six (>= 1.7.3), python3:any
  - preDepends: dpkg
  - suggests: python-pyvmomi-doc

  </details>

- **python3-pyzfs**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: python3-cffi, python3-cffi-backend-api-max (>= 9729), python3-cffi-backend-api-min (<= 9729), python3:any, zfsutils-linux (= 2.1.11-pve2), zfsutils-linux (= 2.1.12-pve1), zfsutils-linux (= 2.1.13-pve1), zfsutils-linux (= 2.2.0-pve1), zfsutils-linux (= 2.2.0-pve2), zfsutils-linux (= 2.2.0-pve3), zfsutils-linux (= 2.2.0-pve4), zfsutils-linux (= 2.2.2-pve1), zfsutils-linux (= 2.2.2-pve2), zfsutils-linux (= 2.2.3-pve1), zfsutils-linux (= 2.2.3-pve2), zfsutils-linux (= 2.2.4-pve1), zfsutils-linux (= 2.2.6-pve1), zfsutils-linux (= 2.2.7-pve1), zfsutils-linux (= 2.2.7-pve2), zfsutils-linux (= 2.2.8-pve1), zfsutils-linux (= 2.2.9-pve1)

  </details>

- **pyzfs-doc**
  - Latest version: 2.2.9-pve1
  - Architectures: all
  - Suite: bookworm
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
  - depends: libjs-sphinxdoc (>= 5.2), sphinx (= 5.3.0-4)
  - recommends: python3-pyzfs

  </details>


### <a id="packages-Q"></a>Q

- **qemu-server**
  - Latest version: 8.4.5
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dbus, genisoimage, libc6 (>= 2.34), libglib2.0-0 (>= 2.12.0), libio-multiplex-perl, libjson-c5 (>= 0.15), libjson-perl, libjson-xs-perl, libnet-ssleay-perl, libpve-access-control (>= 8.0.0~), libpve-apiclient-perl, libpve-cluster-perl, libpve-common-perl (>= 8.0.2), libpve-common-perl (>= 8.2.6), libpve-common-perl (>= 8.3.2), libpve-guest-common-perl (>= 5.0.3), libpve-guest-common-perl (>= 5.1.0), libpve-guest-common-perl (>= 5.1.2), libpve-guest-common-perl (>= 5.1.7), libpve-guest-common-perl (>= 5.2.2), libpve-storage-perl (>= 7.2-10), libpve-storage-perl (>= 8.2.10), libpve-storage-perl (>= 8.2.8), libpve-storage-perl (>= 8.3.5), libterm-readline-gnu-perl, liburi-perl, libuuid-perl, libxml-libxml-perl, perl (>= 5.10.0-19), perl:any, proxmox-websocket-tunnel, pve-cluster, pve-edk2-firmware (>= 3.20210831-1), pve-edk2-firmware-legacy | pve-edk2-firmware (<< 4~), pve-edk2-firmware-ovmf (>= 4.2025.02-3), pve-edk2-firmware-ovmf | pve-edk2-firmware (>= 3.20210831-1), pve-firewall, pve-firewall (>= 5.0.4), pve-firewall (>= 5.1.2), pve-ha-manager (>= 3.0-9), pve-qemu-kvm (>= 7.1~), socat, swtpm, swtpm-tools
  - recommends: libpve-network-perl (>= 0.8.3), proxmox-backup-file-restore (>= 2.1.9-2), virtiofsd
  - suggests: pve-edk2-firmware-aarch64, pve-edk2-firmware-riscv
  - breaks: pve-ha-manager (<< 4.0.1), pve-ha-manager (<= 3.0-4), pve-manager (<= 6.0-13)

  </details>

- **qemu-server-dbgsym**
  - Latest version: 8.4.5
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for qemu-server
  - Install: `sudo apt-get install qemu-server-dbgsym`
  - Install (apt): `sudo apt install qemu-server-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: qemu-server (= 8.0.10), qemu-server (= 8.0.3), qemu-server (= 8.0.4), qemu-server (= 8.0.6), qemu-server (= 8.0.7), qemu-server (= 8.0.8), qemu-server (= 8.1.0), qemu-server (= 8.1.1), qemu-server (= 8.1.2), qemu-server (= 8.1.3), qemu-server (= 8.1.4), qemu-server (= 8.2.1), qemu-server (= 8.2.2), qemu-server (= 8.2.3), qemu-server (= 8.2.4), qemu-server (= 8.2.5), qemu-server (= 8.2.6), qemu-server (= 8.2.7), qemu-server (= 8.3.0), qemu-server (= 8.3.1), qemu-server (= 8.3.10), qemu-server (= 8.3.11), qemu-server (= 8.3.12), qemu-server (= 8.3.13), qemu-server (= 8.3.14), qemu-server (= 8.3.2), qemu-server (= 8.3.3), qemu-server (= 8.3.4), qemu-server (= 8.3.5), qemu-server (= 8.3.6), qemu-server (= 8.3.7), qemu-server (= 8.3.8), qemu-server (= 8.4.0), qemu-server (= 8.4.1), qemu-server (= 8.4.2), qemu-server (= 8.4.3), qemu-server (= 8.4.4), qemu-server (= 8.4.5)

  </details>


### <a id="packages-R"></a>R

- **r8125-dkms**
  - Latest version: 9.013.02-1~bpo12+1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: dkms source for the r8125 network driver
  - Homepage: https://www.realtek.com/en/component/zoo/category/network-interface-controllers-10-100-1000m-gigabit-ethernet-pci-express-software
  - Install: `sudo apt-get install r8125-dkms`
  - Install (apt): `sudo apt install r8125-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Hideki Yamane <henrich@debian.org>
  - Section: non-free/kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0), dkms (>= 3.0.3-4~)

  </details>


### <a id="packages-S"></a>S

- **shim-helpers-amd64-signed**
  - Latest version: 1+15.8+1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: boot loader to chain-load signed boot loaders (signed by Proxmox)
  - Install: `sudo apt-get install shim-helpers-amd64-signed`
  - Install (apt): `sudo apt install shim-helpers-amd64-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: shim-unsigned (>= 15.7-1+pmx1), shim-unsigned (>= 15.8-1+pmx1)
  - conflicts: shim (<< 15+1533136590.3beb971-3~)
  - breaks: shim-signed (<< 1.29)
  - replaces: shim (<< 15+1533136590.3beb971-3~), shim-signed (<< 1.29)

  </details>

- **shim-helpers-amd64-signed-template**
  - Latest version: 15.8-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: boot loader to chain-load signed boot loaders (signing template)
  - Install: `sudo apt-get install shim-helpers-amd64-signed-template`
  - Install (apt): `sudo apt install shim-helpers-amd64-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional

  </details>

- **shim-signed**
  - Latest version: 1.44+pmx1+15.8-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Secure Boot chain-loading bootloader (Microsoft-signed binary)
  - Install: `sudo apt-get install shim-signed`
  - Install (apt): `sudo apt install shim-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: utils
  - Priority: optional
  - depends: grub-efi-amd64-bin, grub2-common (>= 2.06-13), grub2-common (>= 2.06-6), shim-helpers-amd64-signed (>= 1+15.4+2), shim-helpers-amd64-signed (>= 1+15.8+1+pmx1), shim-signed-common (>= 1.39+pmx1), shim-signed-common (>= 1.40+pmx1), shim-signed-common (>= 1.42+pmx1), shim-signed-common (>= 1.44+pmx1)
  - recommends: secureboot-db

  </details>

- **shim-signed-common**
  - Latest version: 1.44+pmx1+15.8-1+pmx1
  - Architectures: all
  - Suite: bookworm
  - Components: pvetest
  - Description: Secure Boot chain-loading bootloader (common helper scripts)
  - Install: `sudo apt-get install shim-signed-common`
  - Install (apt): `sudo apt install shim-signed-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: utils
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, mokutil
  - breaks: shim-signed (<< 1.32+15+1533136590.3beb971-5)
  - replaces: shim-signed (<< 1.32+15+1533136590.3beb971-5)

  </details>

- **shim-unsigned**
  - Latest version: 15.8-1+pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 7.3-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: control and monitor storage systems using S.M.A.R.T.
  - Homepage: https://www.smartmontools.org/
  - Install: `sudo apt-get install smartmontools`
  - Install (apt): `sudo apt install smartmontools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dmitry Smirnov <onlyjob@debian.org>
  - Section: utils
  - Priority: optional
  - depends: debianutils (>= 2.2), libc6 (>= 2.34), libcap-ng0 (>= 0.7.9), libgcc-s1 (>= 3.0), libselinux1 (>= 3.1~), libstdc++6 (>= 11), libsystemd0, lsb-base (>= 3.2-14)
  - suggests: curl | wget | lynx, gpg, gsmartcontrol, mailx | mailutils, smart-notifier
  - conflicts: smartsuite, ucsc-smartsuite

  </details>

- **smartmontools-dbgsym**
  - Latest version: 7.3-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for smartmontools
  - Install: `sudo apt-get install smartmontools-dbgsym`
  - Install (apt): `sudo apt install smartmontools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: smartmontools (= 7.3-pve1)

  </details>

- **spiceterm**
  - Latest version: 3.3.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: SPICE Terminal Emulator
  - Install: `sudo apt-get install spiceterm`
  - Install (apt): `sudo apt install spiceterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0 (>= 2.31.8), libspice-server1 (>= 0.12.2), pve-qemu-kvm

  </details>

- **spiceterm-dbgsym**
  - Latest version: 3.3.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for spiceterm
  - Install: `sudo apt-get install spiceterm-dbgsym`
  - Install (apt): `sudo apt install spiceterm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: spiceterm (= 3.3.0), spiceterm (= 3.3.1)

  </details>

- **spl**
  - Latest version: 2.2.9-pve1
  - Architectures: all
  - Suite: bookworm
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

- **swtpm**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Libtpms-based TPM emulator
  - Install: `sudo apt-get install swtpm`
  - Install (apt): `sudo apt install swtpm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libtpms0, swtpm-libs (= 0.8.0+pve1)

  </details>

- **swtpm-dbgsym**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for swtpm
  - Install: `sudo apt-get install swtpm-dbgsym`
  - Install (apt): `sudo apt install swtpm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm (= 0.8.0+pve1)

  </details>

- **swtpm-dev**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
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
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Common libraries for TPM emulators
  - Install: `sudo apt-get install swtpm-libs`
  - Install (apt): `sudo apt install swtpm-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0, libseccomp2 (>= 0.0.0~20120605), libssl3 (>= 3.0.0), libtpms0, openssl

  </details>

- **swtpm-libs-dbgsym**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for swtpm-libs
  - Install: `sudo apt-get install swtpm-libs-dbgsym`
  - Install (apt): `sudo apt install swtpm-libs-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-libs (= 0.8.0+pve1)

  </details>

- **swtpm-tools**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Tools for the TPM emulator
  - Install: `sudo apt-get install swtpm-tools`
  - Install (apt): `sudo apt install swtpm-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: misc
  - Priority: optional
  - depends: gnutls-bin, libc6 (>= 2.34), libglib2.0-0 (>= 2.43.2), libgnutls30 (>= 3.7.3), libjson-glib-1.0-0 (>= 1.5.2), libssl3 (>= 3.0.0), libtasn1-6 (>= 4.14), swtpm (= 0.8.0+pve1)
  - suggests: trousers (>= 0.3.9)

  </details>

- **swtpm-tools-dbgsym**
  - Latest version: 0.8.0+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for swtpm-tools
  - Install: `sudo apt-get install swtpm-tools-dbgsym`
  - Install (apt): `sudo apt install swtpm-tools-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: swtpm-tools (= 0.8.0+pve1)

  </details>

- **systemd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libacl1 (>= 2.2.23), libaudit1 (>= 1:2.2.1), libblkid1 (>= 2.24.2), libcryptsetup12 (>= 2:2.4), libfdisk1 (>= 2.33), libkmod2 (>= 15), libp11-kit0 (>= 0.23.18.1), libseccomp2 (>= 2.3.1), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), libsystemd0 (= 252.11-pve1), libsystemd0 (= 252.12-pmx1), mount
  - preDepends: libblkid1 (>= 2.24), libc6 (>= 2.34), libcap2 (>= 1:2.10), libgcrypt20 (>= 1.10.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libmount1 (>= 2.30), libselinux1 (>= 3.1~), libssl3 (>= 3.0.0), libzstd1 (>= 1.5.2)
  - recommends: default-dbus-system-bus | dbus-system-bus, systemd-timesyncd | time-daemon
  - suggests: libfido2-1, libqrencode4, libtss2-esys-3.0.2-0, libtss2-mu0, libtss2-rc0, polkitd | policykit-1, systemd-boot, systemd-container, systemd-homed, systemd-resolved, systemd-userdbd
  - conflicts: consolekit, libpam-ck-connector, systemd-shim
  - breaks: less (<< 563), resolvconf (<< 1.83~), sicherboot (<< 0.1.6), udev (<< 247~)
  - provides: systemd-sysusers (= 252.11-pve1), systemd-sysusers (= 252.12-pmx1), systemd-tmpfiles (= 252.11-pve1), systemd-tmpfiles (= 252.12-pmx1)

  </details>

- **systemd-boot**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: simple UEFI boot manager - tools and services
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-boot`
  - Install (apt): `sudo apt install systemd-boot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd-boot-efi (= 252.11-pve1), systemd-boot-efi (= 252.12-pmx1)
  - recommends: efibootmgr
  - breaks: systemd (<< 251.2-3~)
  - replaces: systemd (<< 251.2-3~)

  </details>

- **systemd-boot-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-boot
  - Install: `sudo apt-get install systemd-boot-dbgsym`
  - Install (apt): `sudo apt install systemd-boot-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-boot (= 252.11-pve1), systemd-boot (= 252.12-pmx1)

  </details>

- **systemd-boot-efi**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: simple UEFI boot manager - EFI binaries
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
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

- **systemd-boot-efi-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-boot-efi
  - Install: `sudo apt-get install systemd-boot-efi-dbgsym`
  - Install (apt): `sudo apt install systemd-boot-efi-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-boot-efi (= 252.11-pve1), systemd-boot-efi (= 252.12-pmx1)

  </details>

- **systemd-container**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: default-dbus-system-bus | dbus-system-bus, libacl1 (>= 2.2.23), libbz2-1.0, libc6 (>= 2.34), libcurl4 (>= 7.16.3), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), libssl3 (>= 3.0.0), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd, zlib1g (>= 1:1.1.4)
  - recommends: libnss-mymachines

  </details>

- **systemd-container-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-container
  - Install: `sudo apt-get install systemd-container-dbgsym`
  - Install (apt): `sudo apt install systemd-container-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-container (= 252.11-pve1), systemd-container (= 252.12-pmx1)

  </details>

- **systemd-coredump**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20120614), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), libzstd1 (>= 1.5.2), systemd
  - recommends: libdw1
  - conflicts: core-dump-handler
  - replaces: core-dump-handler
  - provides: core-dump-handler

  </details>

- **systemd-coredump-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-coredump
  - Install: `sudo apt-get install systemd-coredump-dbgsym`
  - Install (apt): `sudo apt install systemd-coredump-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-coredump (= 252.11-pve1), systemd-coredump (= 252.12-pmx1)

  </details>

- **systemd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd
  - Install: `sudo apt-get install systemd-dbgsym`
  - Install (apt): `sudo apt install systemd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd (= 252.11-pve1), systemd (= 252.12-pmx1)

  </details>

- **systemd-homed**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: home area manager
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-homed`
  - Install (apt): `sudo apt install systemd-homed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.24), libc6 (>= 2.36), libcap2 (>= 1:2.10), libfdisk1 (>= 2.33), libp11-kit0 (>= 0.23.18.1), libpam-runtime, libpam0g (>= 1.1.1), libssl3 (>= 3.0.0), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd (= 252.11-pve1), systemd (= 252.12-pmx1), systemd-userdbd (= 252.11-pve1), systemd-userdbd (= 252.12-pmx1)
  - preDepends: init-system-helpers (>= 1.64~)

  </details>

- **systemd-homed-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-homed
  - Install: `sudo apt-get install systemd-homed-dbgsym`
  - Install (apt): `sudo apt install systemd-homed-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-homed (= 252.11-pve1), systemd-homed (= 252.12-pmx1)

  </details>

- **systemd-journal-remote**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libcurl4 (>= 7.16.2), libmicrohttpd12 (>= 0.9.50), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd

  </details>

- **systemd-journal-remote-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-journal-remote
  - Install: `sudo apt-get install systemd-journal-remote-dbgsym`
  - Install (apt): `sudo apt install systemd-journal-remote-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-journal-remote (= 252.11-pve1), systemd-journal-remote (= 252.12-pmx1)

  </details>

- **systemd-oomd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: userspace out-of-memory (OOM) killer
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-oomd`
  - Install (apt): `sudo apt install systemd-oomd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd | systemd-standalone-sysusers | systemd-sysusers
  - breaks: systemd (<< 250.2-2~)
  - replaces: systemd (<< 250.2-2~)

  </details>

- **systemd-oomd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-oomd
  - Install: `sudo apt-get install systemd-oomd-dbgsym`
  - Install (apt): `sudo apt install systemd-oomd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-oomd (= 252.11-pve1), systemd-oomd (= 252.12-pmx1)

  </details>

- **systemd-resolved**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: systemd DNS resolver
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-resolved`
  - Install (apt): `sudo apt install systemd-resolved`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: default-dbus-system-bus | dbus-system-bus, libc6 (>= 2.34), libssl3 (>= 3.0.0), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd (= 252.11-pve1), systemd (= 252.12-pmx1)
  - recommends: libnss-myhostname, libnss-resolve
  - suggests: polkitd | policykit-1
  - conflicts: resolvconf
  - breaks: systemd (<< 251.3-2~)
  - replaces: resolvconf, systemd (<< 251.3-2~)
  - provides: resolvconf

  </details>

- **systemd-resolved-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-resolved
  - Install: `sudo apt-get install systemd-resolved-dbgsym`
  - Install (apt): `sudo apt install systemd-resolved-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-resolved (= 252.11-pve1), systemd-resolved (= 252.12-pmx1)

  </details>

- **systemd-standalone-sysusers**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: standalone sysusers binary for use in non-systemd systems
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-standalone-sysusers`
  - Install (apt): `sudo apt install systemd-standalone-sysusers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libselinux1 (>= 3.1~)
  - conflicts: systemd (<< 249.3-3), systemd-sysusers
  - replaces: systemd (<< 249.3-3), systemd-sysusers
  - provides: systemd-sysusers (= 252.11-pve1), systemd-sysusers (= 252.12-pmx1)

  </details>

- **systemd-standalone-sysusers-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-standalone-sysusers
  - Install: `sudo apt-get install systemd-standalone-sysusers-dbgsym`
  - Install (apt): `sudo apt install systemd-standalone-sysusers-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-standalone-sysusers (= 252.11-pve1), systemd-standalone-sysusers (= 252.12-pmx1)

  </details>

- **systemd-standalone-tmpfiles**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: standalone tmpfiles binary for use in non-systemd systems
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-standalone-tmpfiles`
  - Install (apt): `sudo apt install systemd-standalone-tmpfiles`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.34), libcap2 (>= 1:2.10), libselinux1 (>= 3.1~)
  - conflicts: systemd (<< 249.3-3), systemd-tmpfiles
  - replaces: systemd (<< 249.3-3), systemd-tmpfiles
  - provides: systemd-tmpfiles (= 252.11-pve1), systemd-tmpfiles (= 252.12-pmx1)

  </details>

- **systemd-standalone-tmpfiles-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-standalone-tmpfiles
  - Install: `sudo apt-get install systemd-standalone-tmpfiles-dbgsym`
  - Install (apt): `sudo apt install systemd-standalone-tmpfiles-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-standalone-tmpfiles (= 252.11-pve1), systemd-standalone-tmpfiles (= 252.12-pmx1)

  </details>

- **systemd-sysv**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: system and service manager - SysV compatibility symlinks
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
  - conflicts: file-rc, systemd-shim, sysvinit-core
  - replaces: sysvinit-core

  </details>

- **systemd-tests**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libacl1 (>= 2.2.23), libblkid1 (>= 2.37.2), libc6 (>= 2.36), libcap2 (>= 1:2.10), libcrypt1 (>= 1:4.4.0), libdbus-1-3 (>= 1.9.14), libgcrypt20 (>= 1.10.0), libglib2.0-0 (>= 2.26.0), libkmod2 (>= 15), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20120614), libmount1 (>= 2.30), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), libssl3 (>= 3.0.0), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), libsystemd0 (= 252.11-pve1), libsystemd0 (= 252.12-pmx1), libudev1 (>= 247), libzstd1 (>= 1.5.2), python3, systemd (= 252.11-pve1), systemd (= 252.12-pmx1), zlib1g (>= 1:1.1.4)

  </details>

- **systemd-tests-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-tests
  - Install: `sudo apt-get install systemd-tests-dbgsym`
  - Install (apt): `sudo apt install systemd-tests-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-tests (= 252.11-pve1), systemd-tests (= 252.12-pmx1)

  </details>

- **systemd-timesyncd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd
  - conflicts: time-daemon
  - breaks: systemd (<< 245.4-2~)
  - replaces: systemd (<< 245.4-2~), time-daemon
  - provides: time-daemon

  </details>

- **systemd-timesyncd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-timesyncd
  - Install: `sudo apt-get install systemd-timesyncd-dbgsym`
  - Install (apt): `sudo apt install systemd-timesyncd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-timesyncd (= 252.11-pve1), systemd-timesyncd (= 252.12-pmx1)

  </details>

- **systemd-userdbd**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: dynamic user/group manager
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-userdbd`
  - Install (apt): `sudo apt install systemd-userdbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libsystemd-shared (= 252.11-pve1), libsystemd-shared (= 252.12-pmx1), systemd (= 252.11-pve1), systemd (= 252.12-pmx1)

  </details>

- **systemd-userdbd-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for systemd-userdbd
  - Install: `sudo apt-get install systemd-userdbd-dbgsym`
  - Install (apt): `sudo apt install systemd-userdbd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: systemd-userdbd (= 252.11-pve1), systemd-userdbd (= 252.12-pmx1)

  </details>


### <a id="packages-U"></a>U

- **udev**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: adduser, libacl1 (>= 2.2.23), libblkid1 (>= 2.37.2), libc6 (>= 2.34), libcap2 (>= 1:2.10), libkmod2 (>= 15), libselinux1 (>= 3.1~), libudev1 (= 252.11-pve1), libudev1 (= 252.12-pmx1)

  </details>

- **udev-dbgsym**
  - Latest version: 252.12-pmx1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for udev
  - Install: `sudo apt-get install udev-dbgsym`
  - Install (apt): `sudo apt install udev-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian systemd Maintainers <pkg-systemd-maintainers@lists.alioth.debian.org>
  - Section: debug
  - Priority: optional
  - depends: udev (= 252.11-pve1), udev (= 252.12-pmx1)

  </details>


### <a id="packages-V"></a>V

- **virtiofsd**
  - Latest version: 1.10.1-1~bpo12+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: Virtio-fs vhost-user device daemon
  - Homepage: https://virtio-fs.gitlab.io/
  - Install: `sudo apt-get install virtiofsd`
  - Install (apt): `sudo apt install virtiofsd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: otherosfs
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap-ng0 (>= 0.7.9), libgcc-s1 (>= 4.2), libseccomp2 (>= 0.0.0~20120605)
  - breaks: pve-qemu-kvm (<< 8.0), qemu-system-common (<< 1:8.0)
  - replaces: pve-qemu-kvm (<< 8.0), qemu-system-common (<< 1:8.0)

  </details>

- **virtiofsd-dbgsym**
  - Latest version: 1.10.1-1~bpo12+pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for virtiofsd
  - Install: `sudo apt-get install virtiofsd-dbgsym`
  - Install (apt): `sudo apt install virtiofsd-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: debug
  - Priority: optional
  - depends: virtiofsd (= 1.10.1-1~bpo12+pve1), virtiofsd (= 1.6.0-4~bpo12+pve1), virtiofsd (= 1.7.0-1~bpo12+pve1), virtiofsd (= 1.7.2-1~bpo12+pve1)

  </details>

- **vncterm**
  - Latest version: 1.8.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: VNC Terminal Emulator
  - Install: `sudo apt-get install vncterm`
  - Install (apt): `sudo apt install vncterm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.34), libgnutls30 (>= 3.7.5), libjpeg62-turbo (>= 1.3.1), libpng16-16 (>= 1.6.2-1), zlib1g (>= 1:1.2.1)

  </details>

- **vncterm-dbgsym**
  - Latest version: 1.8.1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for vncterm
  - Install: `sudo apt-get install vncterm-dbgsym`
  - Install (apt): `sudo apt install vncterm-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: debug
  - Priority: optional
  - depends: vncterm (= 1.8.0), vncterm (= 1.8.1)

  </details>


### <a id="packages-Z"></a>Z

- **zfs-initramfs**
  - Latest version: 2.2.9-pve1
  - Architectures: all
  - Suite: bookworm
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
  - depends: busybox-initramfs | busybox-static | busybox, initramfs-tools, zfsutils-linux (>= 2.1.11-pve2), zfsutils-linux (>= 2.1.12-pve1), zfsutils-linux (>= 2.1.13-pve1), zfsutils-linux (>= 2.2.0-pve1), zfsutils-linux (>= 2.2.0-pve2), zfsutils-linux (>= 2.2.0-pve3), zfsutils-linux (>= 2.2.0-pve4), zfsutils-linux (>= 2.2.2-pve1), zfsutils-linux (>= 2.2.2-pve2), zfsutils-linux (>= 2.2.3-pve1), zfsutils-linux (>= 2.2.3-pve2), zfsutils-linux (>= 2.2.4-pve1), zfsutils-linux (>= 2.2.6-pve1), zfsutils-linux (>= 2.2.7-pve1), zfsutils-linux (>= 2.2.7-pve2), zfsutils-linux (>= 2.2.8-pve1), zfsutils-linux (>= 2.2.9-pve1)
  - breaks: zfsutils-linux (<= 0.7.11-pve1~bpo1)
  - replaces: zfsutils-linux (<= 0.7.11-pve1~bpo1)

  </details>

- **zfs-test**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: acl, attr, bc, fio, ksh, libaio1 (>= 0.3.93), libc6 (>= 2.34), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libudev1 (>= 183), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), libzfs4linux (>= 2.2.0), libzfs4linux (>= 2.2.2), libzfs4linux (>= 2.2.3), libzfs4linux (>= 2.2.4), libzfs4linux (>= 2.2.6), libzfs4linux (>= 2.2.7), libzfs4linux (>= 2.2.8), libzfs4linux (>= 2.2.9), libzpool5linux (>= 2.1.11), libzpool5linux (>= 2.1.12), libzpool5linux (>= 2.1.13), libzpool5linux (>= 2.2.0), libzpool5linux (>= 2.2.2), libzpool5linux (>= 2.2.3), libzpool5linux (>= 2.2.4), libzpool5linux (>= 2.2.6), libzpool5linux (>= 2.2.7), libzpool5linux (>= 2.2.8), libzpool5linux (>= 2.2.9), lsscsi, mdadm, parted, python3, python3-pyzfs, sudo, sysstat, zfsutils-linux (>= 2.1.11-pve2), zfsutils-linux (>= 2.1.12-pve1), zfsutils-linux (>= 2.1.13-pve1), zfsutils-linux (>= 2.2.0-pve1), zfsutils-linux (>= 2.2.0-pve2), zfsutils-linux (>= 2.2.0-pve3), zfsutils-linux (>= 2.2.0-pve4), zfsutils-linux (>= 2.2.2-pve1), zfsutils-linux (>= 2.2.2-pve2), zfsutils-linux (>= 2.2.3-pve1), zfsutils-linux (>= 2.2.3-pve2), zfsutils-linux (>= 2.2.4-pve1), zfsutils-linux (>= 2.2.6-pve1), zfsutils-linux (>= 2.2.7-pve1), zfsutils-linux (>= 2.2.7-pve2), zfsutils-linux (>= 2.2.8-pve1), zfsutils-linux (>= 2.2.9-pve1), zlib1g (>= 1:1.2.3.3)
  - recommends: nfs-kernel-server
  - conflicts: zutils
  - breaks: zfsutils-linux (<= 0.7.9-2)
  - replaces: zfsutils-linux (<= 0.7.9-2)

  </details>

- **zfs-test-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for zfs-test
  - Install: `sudo apt-get install zfs-test-dbgsym`
  - Install (apt): `sudo apt install zfs-test-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-test (= 2.1.11-pve2), zfs-test (= 2.1.12-pve1), zfs-test (= 2.1.13-pve1), zfs-test (= 2.2.0-pve1), zfs-test (= 2.2.0-pve2), zfs-test (= 2.2.0-pve3), zfs-test (= 2.2.0-pve4), zfs-test (= 2.2.2-pve1), zfs-test (= 2.2.2-pve2), zfs-test (= 2.2.3-pve1), zfs-test (= 2.2.3-pve2), zfs-test (= 2.2.4-pve1), zfs-test (= 2.2.6-pve1), zfs-test (= 2.2.7-pve1), zfs-test (= 2.2.7-pve2), zfs-test (= 2.2.8-pve1), zfs-test (= 2.2.9-pve1)

  </details>

- **zfs-zed**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.12), libuutil3linux (>= 2.1.13), libuutil3linux (>= 2.2.0), libuutil3linux (>= 2.2.2), libuutil3linux (>= 2.2.3), libuutil3linux (>= 2.2.4), libuutil3linux (>= 2.2.6), libuutil3linux (>= 2.2.7), libuutil3linux (>= 2.2.8), libuutil3linux (>= 2.2.9), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), libzfs4linux (>= 2.2.0), libzfs4linux (>= 2.2.2), libzfs4linux (>= 2.2.3), libzfs4linux (>= 2.2.4), libzfs4linux (>= 2.2.6), libzfs4linux (>= 2.2.7), libzfs4linux (>= 2.2.8), libzfs4linux (>= 2.2.9), zfsutils-linux (>= 2.1.11-pve2), zfsutils-linux (>= 2.1.12-pve1), zfsutils-linux (>= 2.1.13-pve1), zfsutils-linux (>= 2.2.0-pve1), zfsutils-linux (>= 2.2.0-pve2), zfsutils-linux (>= 2.2.0-pve3), zfsutils-linux (>= 2.2.0-pve4), zfsutils-linux (>= 2.2.2-pve1), zfsutils-linux (>= 2.2.2-pve2), zfsutils-linux (>= 2.2.3-pve1), zfsutils-linux (>= 2.2.3-pve2), zfsutils-linux (>= 2.2.4-pve1), zfsutils-linux (>= 2.2.6-pve1), zfsutils-linux (>= 2.2.7-pve1), zfsutils-linux (>= 2.2.7-pve2), zfsutils-linux (>= 2.2.8-pve1), zfsutils-linux (>= 2.2.9-pve1)
  - recommends: bsd-mailx | mailutils

  </details>

- **zfs-zed-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for zfs-zed
  - Install: `sudo apt-get install zfs-zed-dbgsym`
  - Install (apt): `sudo apt install zfs-zed-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfs-zed (= 2.1.11-pve2), zfs-zed (= 2.1.12-pve1), zfs-zed (= 2.1.13-pve1), zfs-zed (= 2.2.0-pve1), zfs-zed (= 2.2.0-pve2), zfs-zed (= 2.2.0-pve3), zfs-zed (= 2.2.0-pve4), zfs-zed (= 2.2.2-pve1), zfs-zed (= 2.2.2-pve2), zfs-zed (= 2.2.3-pve1), zfs-zed (= 2.2.3-pve2), zfs-zed (= 2.2.4-pve1), zfs-zed (= 2.2.6-pve1), zfs-zed (= 2.2.7-pve1), zfs-zed (= 2.2.7-pve2), zfs-zed (= 2.2.8-pve1), zfs-zed (= 2.2.9-pve1)

  </details>

- **zfsutils-linux**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (>= 2.1.11), libnvpair3linux (>= 2.1.12), libnvpair3linux (>= 2.1.13), libnvpair3linux (>= 2.2.0), libnvpair3linux (>= 2.2.2), libnvpair3linux (>= 2.2.3), libnvpair3linux (>= 2.2.4), libnvpair3linux (>= 2.2.6), libnvpair3linux (>= 2.2.7), libnvpair3linux (>= 2.2.8), libnvpair3linux (>= 2.2.9), libssl3 (>= 3.0.0), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 2.1.11), libuutil3linux (>= 2.1.12), libuutil3linux (>= 2.1.13), libuutil3linux (>= 2.2.0), libuutil3linux (>= 2.2.2), libuutil3linux (>= 2.2.3), libuutil3linux (>= 2.2.4), libuutil3linux (>= 2.2.6), libuutil3linux (>= 2.2.7), libuutil3linux (>= 2.2.8), libuutil3linux (>= 2.2.9), libzfs4linux (>= 2.1.11), libzfs4linux (>= 2.1.12), libzfs4linux (>= 2.1.13), libzfs4linux (>= 2.2.0), libzfs4linux (>= 2.2.2), libzfs4linux (>= 2.2.3), libzfs4linux (>= 2.2.4), libzfs4linux (>= 2.2.6), libzfs4linux (>= 2.2.7), libzfs4linux (>= 2.2.8), libzfs4linux (>= 2.2.9), libzpool5linux (>= 2.1.11), libzpool5linux (>= 2.1.12), libzpool5linux (>= 2.1.13), libzpool5linux (>= 2.2.0), libzpool5linux (>= 2.2.2), libzpool5linux (>= 2.2.3), libzpool5linux (>= 2.2.4), libzpool5linux (>= 2.2.6), libzpool5linux (>= 2.2.7), libzpool5linux (>= 2.2.8), libzpool5linux (>= 2.2.9), python3
  - recommends: zfs-zed
  - suggests: nfs-kernel-server, samba-common-bin (>= 3.0.23), zfs-initramfs
  - conflicts: zfs, zfs-fuse
  - provides: zfsutils

  </details>

- **zfsutils-linux-dbgsym**
  - Latest version: 2.2.9-pve1
  - Architectures: amd64
  - Suite: bookworm
  - Components: pvetest
  - Description: debug symbols for zfsutils-linux
  - Install: `sudo apt-get install zfsutils-linux-dbgsym`
  - Install (apt): `sudo apt install zfsutils-linux-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Proxmox Support Team <support@proxmox.com>
  - Section: contrib/debug
  - Priority: optional
  - depends: zfsutils-linux (= 2.1.11-pve2), zfsutils-linux (= 2.1.12-pve1), zfsutils-linux (= 2.1.13-pve1), zfsutils-linux (= 2.2.0-pve1), zfsutils-linux (= 2.2.0-pve2), zfsutils-linux (= 2.2.0-pve3), zfsutils-linux (= 2.2.0-pve4), zfsutils-linux (= 2.2.2-pve1), zfsutils-linux (= 2.2.2-pve2), zfsutils-linux (= 2.2.3-pve1), zfsutils-linux (= 2.2.3-pve2), zfsutils-linux (= 2.2.4-pve1), zfsutils-linux (= 2.2.6-pve1), zfsutils-linux (= 2.2.7-pve1), zfsutils-linux (= 2.2.7-pve2), zfsutils-linux (= 2.2.8-pve1), zfsutils-linux (= 2.2.9-pve1)

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Test repository; use with caution.
- Repo tags: proxmox, debian-derivative, apt
- Key tags: proxmox, apt
