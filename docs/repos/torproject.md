# Tor Project (Debian/Ubuntu) (ubuntu-22.04)

## Repository
- Repository ID: `torproject`
- OS: `ubuntu-22.04`
- Source: `https://deb.torproject.org/torproject.org jammy main`

## Upstream documentation
- Documentation URL: https://support.torproject.org/apt/tor-deb-repo/
- Key documentation URL: https://support.torproject.org/apt/tor-deb-repo/

## Key reference
- Key ID: `torproject`
- Expected fingerprints:
  - A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89
- Key source URL: https://deb.torproject.org/torproject.org/A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc | gpg --dearmor | sudo tee /usr/share/keyrings/torproject.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org jammy main" | sudo tee /etc/apt/sources.list.d/torproject.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/torproject.asc -o /tmp/torproject.asc
gpg --dearmor /tmp/torproject.asc
sudo install -m 0644 /tmp/torproject.gpg /usr/share/keyrings/torproject.gpg
echo "deb [signed-by=/usr/share/keyrings/torproject.gpg] https://deb.torproject.org/torproject.org jammy main" | sudo tee /etc/apt/sources.list.d/torproject.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (4)</summary>

<div class="packages-nav">
<a href="#packages-D">D</a> <a href="#packages-T">T</a>
</div>


### <a id="packages-D"></a>D

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
  - Latest version: 0.4.8.21-1~jammy+1
  - Architectures: amd64
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
  - Latest version: 0.4.8.14-1+tpo1
  - Architectures: amd64
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


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Tor official apt repository for system Tor
- Repo tags: privacy, security
- Key notes: Tor Project package signing key (expires periodically)
- Key tags: privacy, security
