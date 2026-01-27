# Tor Project (Debian/Ubuntu)

## Repository
- Repository ID: `torproject`
- Base URL: `https://deb.torproject.org/torproject.org`
- Host: `deb.torproject.org`

## Upstream documentation
- Documentation URL: https://support.torproject.org/apt/tor-deb-repo/
- Key documentation URL: https://support.torproject.org/apt/tor-deb-repo/

## Suites
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `plucky`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `questing`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.10
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Debian, Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `torproject`
- Expected fingerprints:
  - A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
- Key source URL: https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bookworm main" | sudo tee /etc/apt/sources.list.d/torproject-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org bookworm main" | sudo tee /etc/apt/sources.list.d/torproject-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org noble main" | sudo tee /etc/apt/sources.list.d/torproject-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org noble main" | sudo tee /etc/apt/sources.list.d/torproject-noble.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org plucky main" | sudo tee /etc/apt/sources.list.d/torproject-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org plucky main" | sudo tee /etc/apt/sources.list.d/torproject-plucky.list >/dev/null
sudo apt-get update
```

### Suite: questing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org questing main" | sudo tee /etc/apt/sources.list.d/torproject-questing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org questing main" | sudo tee /etc/apt/sources.list.d/torproject-questing.list >/dev/null
sudo apt-get update
```

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org stable main" | sudo tee /etc/apt/sources.list.d/torproject-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org stable main" | sudo tee /etc/apt/sources.list.d/torproject-stable.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org trixie main" | sudo tee /etc/apt/sources.list.d/torproject-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org trixie main" | sudo tee /etc/apt/sources.list.d/torproject-trixie.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org jammy main" | sudo tee /etc/apt/sources.list.d/torproject-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org jammy main" | sudo tee /etc/apt/sources.list.d/torproject-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (27)</summary>

<div class="packages-nav">
<a href="#packages-D">D</a> <a href="#packages-T">T</a>
</div>


### <a id="packages-D"></a>D

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: bookworm
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: noble
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: plucky
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: questing
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: stable
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: trixie
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>

- **deb.torproject.org-keyring**
  - Latest version: 2025.08.08
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: GnuPG archive key of the deb.torproject.org repository
  - Install: `sudo apt-get install deb.torproject.org-keyring`
  - Install (apt): `sudo apt install deb.torproject.org-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: misc
  - Priority: important

  </details>


### <a id="packages-T"></a>T

- **tor**
  - Latest version: 0.4.8.21-1~d12.bookworm+1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcap2 (>= 1:2.10), libevent-2.1-7 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.2), lsb-base, runit-helper (>= 2.14.0~), zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)
  - breaks: runit (<< 2.1.2-51~)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~noble+1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcap2 (>= 1:2.10), libevent-2.1-7t64 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.5), lsb-base, zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~plucky+1
  - Architectures: amd64, arm64
  - Suite: plucky
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcap2 (>= 1:2.10), libevent-2.1-7t64 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.5), lsb-base, zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~questing+1
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcap2 (>= 1:2.10), libevent-2.1-7t64 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.5), lsb-base, zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcap2 (>= 1:2.10), libevent-2.1-7t64 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.5), lsb-base, runit-helper (>= 2.14.0~), zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)
  - breaks: runit (<< 2.1.2-51~)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.38), libcap2 (>= 1:2.10), libevent-2.1-7t64 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3t64 (>= 3.0.0), libsystemd0, libzstd1 (>= 1.5.5), lsb-base, runit-helper (>= 2.14.0~), zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)
  - breaks: runit (<< 2.1.2-51~)

  </details>

- **tor**
  - Latest version: 0.4.8.21-1~jammy+1
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: main
  - Description: anonymizing overlay network for TCP
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor`
  - Install (apt): `sudo apt install tor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcap2 (>= 1:2.10), libevent-2.1-7 (>= 2.1.8-stable), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 0.0.0~20120605), libssl3 (>= 3.0.0~~alpha1), libsystemd0, libzstd1 (>= 1.4.0), lsb-base, zlib1g (>= 1:1.1.4)
  - recommends: logrotate, tor-geoipdb, torsocks
  - suggests: apparmor-utils, mixmaster, nyx, obfs4proxy, socat, torbrowser-launcher
  - conflicts: libssl0.9.8 (<< 0.9.8g-9)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.21-1~d12.bookworm+1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.21-1~d12.bookworm+1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.14-1+tpo1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.14-1+tpo1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.14-1+tpo1
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.14-1+tpo1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.21-1~d13.trixie+1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.21-1~d13.trixie+1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-dbgsym**
  - Latest version: 0.4.8.14-1+tpo1
  - Architectures: amd64, arm64
  - Suite: jammy
  - Components: main
  - Description: debug symbols for tor
  - Install: `sudo apt-get install tor-dbgsym`
  - Install (apt): `sudo apt install tor-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: debug
  - Priority: optional
  - depends: tor (= 0.4.8.14-1+tpo1)
  - breaks: tor-dbg (<< 0.3.1.5-alpha)
  - replaces: tor-dbg (<< 0.3.1.5-alpha)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~d12.bookworm+1
  - Architectures: all
  - Suite: bookworm
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~d12.bookworm+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~noble+1
  - Architectures: all
  - Suite: noble
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~noble+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~plucky+1
  - Architectures: all
  - Suite: plucky
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~plucky+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~questing+1
  - Architectures: all
  - Suite: questing
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~questing+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: all
  - Suite: stable
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~d13.trixie+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~d13.trixie+1
  - Architectures: all
  - Suite: trixie
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~d13.trixie+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

  </details>

- **tor-geoipdb**
  - Latest version: 0.4.8.21-1~jammy+1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: GeoIP database for Tor
  - Homepage: https://www.torproject.org/
  - Install: `sudo apt-get install tor-geoipdb`
  - Install (apt): `sudo apt install tor-geoipdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Peter Palfrader <weasel@debian.org>
  - Section: net
  - Priority: optional
  - depends: tor (>= 0.4.8.21-1~jammy+1)
  - breaks: tor (<< 0.2.4.8)
  - replaces: tor (<< 0.2.4.8)

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
- Repo notes: Tor official apt repository for system Tor
- Repo tags: privacy, security
- Key notes: Tor Project package signing key (expires periodically)
- Key tags: privacy, security
