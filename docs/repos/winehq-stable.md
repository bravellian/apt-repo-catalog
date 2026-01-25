# WineHQ Stable (ubuntu-22.04)

## Repository
- Repository ID: `winehq-stable`
- OS: `ubuntu-22.04`
- Source: `https://dl.winehq.org/wine-builds/ubuntu jammy main`

## Upstream documentation
- Documentation URL: https://wiki.winehq.org/Ubuntu
- Key documentation URL: https://wiki.winehq.org/Ubuntu

## Key reference
- Key ID: `winehq`
- Expected fingerprints:
  - D43F640145369C51D786DDEA76F1A20FF987672F
- Key source URL: https://dl.winehq.org/wine-builds/winehq.key

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/winehq.asc | gpg --dearmor | sudo tee /usr/share/keyrings/winehq.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/winehq.gpg] https://dl.winehq.org/wine-builds/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/winehq-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/winehq.asc -o /tmp/winehq.asc
gpg --dearmor /tmp/winehq.asc
sudo install -m 0644 /tmp/winehq.gpg /usr/share/keyrings/winehq.gpg
echo "deb [signed-by=/usr/share/keyrings/winehq.gpg] https://dl.winehq.org/wine-builds/ubuntu jammy main" | sudo tee /etc/apt/sources.list.d/winehq-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (24)</summary>

<div class="packages-nav">
<a href="#packages-L">L</a> <a href="#packages-V">V</a> <a href="#packages-W">W</a>
</div>


### <a id="packages-L"></a>L

- **libvkd3d-dbg**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - development files
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-dbg`
  - Install (apt): `sudo apt install libvkd3d-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: debug
  - Priority: optional
  - depends: libvkd3d-headers (= 1.3~jammy-1), libvkd3d-shader1 (= 1.3~jammy-1), libvkd3d-utils1 (= 1.3~jammy-1), libvkd3d1 (= 1.3~jammy-1)
  - suggests: libvkd3d-doc (= 1.3~jammy-1)

  </details>

- **libvkd3d-dev**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - development files
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-dev`
  - Install (apt): `sudo apt install libvkd3d-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libvkd3d-headers (= 1.3~jammy-1), libvkd3d-shader1 (= 1.3~jammy-1), libvkd3d-utils1 (= 1.3~jammy-1), libvkd3d1 (= 1.3~jammy-1)
  - suggests: libvkd3d-doc (= 1.3~jammy-1)

  </details>

- **libvkd3d-doc**
  - Latest version: 1.3~jammy-1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - documentation
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-doc`
  - Install (apt): `sudo apt install libvkd3d-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: doc
  - Priority: optional
  - breaks: libvkd3d-dev (<< 1.2)
  - replaces: libvkd3d-dev (<< 1.2)

  </details>

- **libvkd3d-headers**
  - Latest version: 1.3~jammy-1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - header files
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-headers`
  - Install (apt): `sudo apt install libvkd3d-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - recommends: libvkd3d-dev
  - breaks: libvkd3d-dev (<< 1.2)
  - replaces: libvkd3d-dev (<< 1.2)

  </details>

- **libvkd3d-shader1**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - shader library
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-shader1`
  - Install (apt): `sudo apt install libvkd3d-shader1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.33)
  - recommends: vkd3d-compiler

  </details>

- **libvkd3d-utils1**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - utilities library
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d-utils1`
  - Install (apt): `sudo apt install libvkd3d-utils1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libvkd3d-shader1 (>= 1.2), libvkd3d1 (>= 1.2)

  </details>

- **libvkd3d1**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - library
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install libvkd3d1`
  - Install (apt): `sudo apt install libvkd3d1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libvkd3d-shader1 (>= 1.2), libvulkan1

  </details>


### <a id="packages-V"></a>V

- **vkd3d-compiler**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - shader compiler
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install vkd3d-compiler`
  - Install (apt): `sudo apt install vkd3d-compiler`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libvkd3d-shader1 (>= 1.2)
  - breaks: libvkd3d-dev (<< 1.2)
  - replaces: libvkd3d-dev (<< 1.2)

  </details>

- **vkd3d-demos**
  - Latest version: 1.3~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 to Vulkan translation - demos
  - Homepage: http://www.winehq.org
  - Install: `sudo apt-get install vkd3d-demos`
  - Install (apt): `sudo apt install vkd3d-demos`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Wine Party <debian-wine@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libvkd3d-utils1 (>= 1.2), libvkd3d1 (>= 1.0), libvulkan1 (>= 1.2.131.2), libxcb-keysyms1 (>= 0.4.0), libxcb1

  </details>


### <a id="packages-W"></a>W

- **wine-devel**
  - Latest version: 11.1~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-devel`
  - Install (apt): `sudo apt install wine-devel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.34), libc6 (>= 2.35), wine-devel-amd64 (= 10.0.0~jammy-1), wine-devel-amd64 (= 10.0~rc1~jammy-1), wine-devel-amd64 (= 10.0~rc2~jammy-1), wine-devel-amd64 (= 10.0~rc3~jammy-1), wine-devel-amd64 (= 10.0~rc4~jammy-1), wine-devel-amd64 (= 10.0~rc5~jammy-1), wine-devel-amd64 (= 10.0~rc6~jammy-1), wine-devel-amd64 (= 10.1~jammy-1), wine-devel-amd64 (= 10.10~jammy-1), wine-devel-amd64 (= 10.11~jammy-1), wine-devel-amd64 (= 10.12~jammy-1), wine-devel-amd64 (= 10.13~jammy-1), wine-devel-amd64 (= 10.14~jammy-1), wine-devel-amd64 (= 10.15~jammy-1), wine-devel-amd64 (= 10.16~jammy-1), wine-devel-amd64 (= 10.17~jammy-1), wine-devel-amd64 (= 10.18~jammy-1), wine-devel-amd64 (= 10.19~jammy-1), wine-devel-amd64 (= 10.2~jammy-1), wine-devel-amd64 (= 10.2~jammy-2), wine-devel-amd64 (= 10.2~jammy-4), wine-devel-amd64 (= 10.20~jammy-1), wine-devel-amd64 (= 10.3~jammy-1), wine-devel-amd64 (= 10.4~jammy-1), wine-devel-amd64 (= 10.5~jammy-1), wine-devel-amd64 (= 10.6~jammy-1), wine-devel-amd64 (= 10.7~jammy-1), wine-devel-amd64 (= 10.8~jammy-1), wine-devel-amd64 (= 10.9~jammy-1), wine-devel-amd64 (= 11.0.0~jammy-1), wine-devel-amd64 (= 11.0~rc1~jammy-1), wine-devel-amd64 (= 11.0~rc2~jammy-1), wine-devel-amd64 (= 11.0~rc3~jammy-1), wine-devel-amd64 (= 11.0~rc4~jammy-1), wine-devel-amd64 (= 11.0~rc5~jammy-1), wine-devel-amd64 (= 11.1~jammy-1), wine-devel-amd64 (= 7.10~jammy-1), wine-devel-amd64 (= 7.11~jammy-1), wine-devel-amd64 (= 7.12~jammy-1), wine-devel-amd64 (= 7.13~jammy-1), wine-devel-amd64 (= 7.14~jammy-1), wine-devel-amd64 (= 7.15~jammy-1), wine-devel-amd64 (= 7.16~jammy-1), wine-devel-amd64 (= 7.17~jammy-1), wine-devel-amd64 (= 7.18~jammy-1), wine-devel-amd64 (= 7.19~jammy-1), wine-devel-amd64 (= 7.20~jammy-1), wine-devel-amd64 (= 7.21~jammy-1), wine-devel-amd64 (= 7.22~jammy-1), wine-devel-amd64 (= 7.6~jammy-1), wine-devel-amd64 (= 7.7~jammy-1), wine-devel-amd64 (= 7.8~jammy-1), wine-devel-amd64 (= 7.9~jammy-1), wine-devel-amd64 (= 8.0.0~jammy-1), wine-devel-amd64 (= 8.0~rc1~jammy-1), wine-devel-amd64 (= 8.0~rc2~jammy-1), wine-devel-amd64 (= 8.0~rc3~jammy-1), wine-devel-amd64 (= 8.0~rc4~jammy-1), wine-devel-amd64 (= 8.0~rc5~jammy-1), wine-devel-amd64 (= 8.1~jammy-1), wine-devel-amd64 (= 8.10~jammy-1), wine-devel-amd64 (= 8.11~jammy-1), wine-devel-amd64 (= 8.12~jammy-1), wine-devel-amd64 (= 8.13~jammy-1), wine-devel-amd64 (= 8.14~jammy-1), wine-devel-amd64 (= 8.15~jammy-1), wine-devel-amd64 (= 8.16~jammy-1), wine-devel-amd64 (= 8.17~jammy-1), wine-devel-amd64 (= 8.18~jammy-1), wine-devel-amd64 (= 8.19~jammy-1), wine-devel-amd64 (= 8.2~jammy-1), wine-devel-amd64 (= 8.20~jammy-1), wine-devel-amd64 (= 8.21~jammy-1), wine-devel-amd64 (= 8.3~jammy-1), wine-devel-amd64 (= 8.4~jammy-1), wine-devel-amd64 (= 8.5~jammy-1), wine-devel-amd64 (= 8.6~jammy-1), wine-devel-amd64 (= 8.7~jammy-1), wine-devel-amd64 (= 8.8~jammy-1), wine-devel-amd64 (= 8.9~jammy-1), wine-devel-amd64 (= 9.0.0~jammy-1), wine-devel-amd64 (= 9.0~rc1~jammy-1), wine-devel-amd64 (= 9.0~rc2~jammy-1), wine-devel-amd64 (= 9.0~rc3~jammy-1), wine-devel-amd64 (= 9.0~rc4~jammy-1), wine-devel-amd64 (= 9.0~rc5~jammy-1), wine-devel-amd64 (= 9.1~jammy-1), wine-devel-amd64 (= 9.10~jammy-1), wine-devel-amd64 (= 9.11~jammy-1), wine-devel-amd64 (= 9.12~jammy-1), wine-devel-amd64 (= 9.13~jammy-1), wine-devel-amd64 (= 9.14~jammy-1), wine-devel-amd64 (= 9.15~jammy-1), wine-devel-amd64 (= 9.16~jammy-1), wine-devel-amd64 (= 9.17~jammy-1), wine-devel-amd64 (= 9.18~jammy-1), wine-devel-amd64 (= 9.19~jammy-1), wine-devel-amd64 (= 9.2~jammy-1), wine-devel-amd64 (= 9.20~jammy-1), wine-devel-amd64 (= 9.21~jammy-1), wine-devel-amd64 (= 9.22~jammy-1), wine-devel-amd64 (= 9.3~jammy-1), wine-devel-amd64 (= 9.4~jammy-1), wine-devel-amd64 (= 9.5~jammy-1), wine-devel-amd64 (= 9.6~jammy-1), wine-devel-amd64 (= 9.7~jammy-1), wine-devel-amd64 (= 9.8~jammy-1), wine-devel-amd64 (= 9.9~jammy-1), wine-devel-i386 (= 10.0.0~jammy-1), wine-devel-i386 (= 10.0~rc1~jammy-1), wine-devel-i386 (= 10.0~rc2~jammy-1), wine-devel-i386 (= 10.0~rc3~jammy-1), wine-devel-i386 (= 10.0~rc4~jammy-1), wine-devel-i386 (= 10.0~rc5~jammy-1), wine-devel-i386 (= 10.0~rc6~jammy-1), wine-devel-i386 (= 10.1~jammy-1), wine-devel-i386 (= 10.10~jammy-1), wine-devel-i386 (= 10.11~jammy-1), wine-devel-i386 (= 10.12~jammy-1), wine-devel-i386 (= 10.13~jammy-1), wine-devel-i386 (= 10.14~jammy-1), wine-devel-i386 (= 10.15~jammy-1), wine-devel-i386 (= 10.16~jammy-1), wine-devel-i386 (= 10.17~jammy-1), wine-devel-i386 (= 10.18~jammy-1), wine-devel-i386 (= 10.19~jammy-1), wine-devel-i386 (= 10.2~jammy-1), wine-devel-i386 (= 10.2~jammy-2), wine-devel-i386 (= 10.2~jammy-4), wine-devel-i386 (= 10.20~jammy-1), wine-devel-i386 (= 10.3~jammy-1), wine-devel-i386 (= 10.4~jammy-1), wine-devel-i386 (= 10.5~jammy-1), wine-devel-i386 (= 10.6~jammy-1), wine-devel-i386 (= 10.7~jammy-1), wine-devel-i386 (= 10.8~jammy-1), wine-devel-i386 (= 10.9~jammy-1), wine-devel-i386 (= 11.0.0~jammy-1), wine-devel-i386 (= 11.0~rc1~jammy-1), wine-devel-i386 (= 11.0~rc2~jammy-1), wine-devel-i386 (= 11.0~rc3~jammy-1), wine-devel-i386 (= 11.0~rc4~jammy-1), wine-devel-i386 (= 11.0~rc5~jammy-1), wine-devel-i386 (= 11.1~jammy-1), wine-devel-i386 (= 7.10~jammy-1), wine-devel-i386 (= 7.11~jammy-1), wine-devel-i386 (= 7.12~jammy-1), wine-devel-i386 (= 7.13~jammy-1), wine-devel-i386 (= 7.14~jammy-1), wine-devel-i386 (= 7.15~jammy-1), wine-devel-i386 (= 7.16~jammy-1), wine-devel-i386 (= 7.17~jammy-1), wine-devel-i386 (= 7.18~jammy-1), wine-devel-i386 (= 7.19~jammy-1), wine-devel-i386 (= 7.20~jammy-1), wine-devel-i386 (= 7.21~jammy-1), wine-devel-i386 (= 7.22~jammy-1), wine-devel-i386 (= 7.6~jammy-1), wine-devel-i386 (= 7.7~jammy-1), wine-devel-i386 (= 7.8~jammy-1), wine-devel-i386 (= 7.9~jammy-1), wine-devel-i386 (= 8.0.0~jammy-1), wine-devel-i386 (= 8.0~rc1~jammy-1), wine-devel-i386 (= 8.0~rc2~jammy-1), wine-devel-i386 (= 8.0~rc3~jammy-1), wine-devel-i386 (= 8.0~rc4~jammy-1), wine-devel-i386 (= 8.0~rc5~jammy-1), wine-devel-i386 (= 8.1~jammy-1), wine-devel-i386 (= 8.10~jammy-1), wine-devel-i386 (= 8.11~jammy-1), wine-devel-i386 (= 8.12~jammy-1), wine-devel-i386 (= 8.13~jammy-1), wine-devel-i386 (= 8.14~jammy-1), wine-devel-i386 (= 8.15~jammy-1), wine-devel-i386 (= 8.16~jammy-1), wine-devel-i386 (= 8.17~jammy-1), wine-devel-i386 (= 8.18~jammy-1), wine-devel-i386 (= 8.19~jammy-1), wine-devel-i386 (= 8.2~jammy-1), wine-devel-i386 (= 8.20~jammy-1), wine-devel-i386 (= 8.21~jammy-1), wine-devel-i386 (= 8.3~jammy-1), wine-devel-i386 (= 8.4~jammy-1), wine-devel-i386 (= 8.5~jammy-1), wine-devel-i386 (= 8.6~jammy-1), wine-devel-i386 (= 8.7~jammy-1), wine-devel-i386 (= 8.8~jammy-1), wine-devel-i386 (= 8.9~jammy-1), wine-devel-i386 (= 9.0.0~jammy-1), wine-devel-i386 (= 9.0~rc1~jammy-1), wine-devel-i386 (= 9.0~rc2~jammy-1), wine-devel-i386 (= 9.0~rc3~jammy-1), wine-devel-i386 (= 9.0~rc4~jammy-1), wine-devel-i386 (= 9.0~rc5~jammy-1), wine-devel-i386 (= 9.1~jammy-1), wine-devel-i386 (= 9.10~jammy-1), wine-devel-i386 (= 9.11~jammy-1), wine-devel-i386 (= 9.12~jammy-1), wine-devel-i386 (= 9.13~jammy-1), wine-devel-i386 (= 9.14~jammy-1), wine-devel-i386 (= 9.15~jammy-1), wine-devel-i386 (= 9.16~jammy-1), wine-devel-i386 (= 9.17~jammy-1), wine-devel-i386 (= 9.18~jammy-1), wine-devel-i386 (= 9.19~jammy-1), wine-devel-i386 (= 9.2~jammy-1), wine-devel-i386 (= 9.20~jammy-1), wine-devel-i386 (= 9.21~jammy-1), wine-devel-i386 (= 9.22~jammy-1), wine-devel-i386 (= 9.3~jammy-1), wine-devel-i386 (= 9.4~jammy-1), wine-devel-i386 (= 9.5~jammy-1), wine-devel-i386 (= 9.6~jammy-1), wine-devel-i386 (= 9.7~jammy-1), wine-devel-i386 (= 9.8~jammy-1), wine-devel-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcap2-bin

  </details>

- **wine-devel-amd64**
  - Latest version: 11.1~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-devel-amd64`
  - Install (apt): `sudo apt install wine-devel-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libasound2-plugins, libavcodec58 (>= 7:4.4), libavformat58 (>= 7:4.4), libavutil56 (>= 7:4.4), libc6 (>= 2.35), libglib2.0-0 (>= 2.12.0), libglib2.0-0 (>= 2.37.3), libgphoto2-6 (>= 2.5.10), libgphoto2-port12 (>= 2.5.10), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer-plugins-base1.0-0 (>= 1.8.0), libgstreamer1.0-0 (>= 1.14.0), libgstreamer1.0-0 (>= 1.4.0), libldap-2.5-0 (>= 2.5.4), libncurses6 | libncurses5 | libncurses, libodbc2 (>= 2.3.1), libopenal1 (>= 1.14), libpcap0.8 (>= 1.10.0), libpcap0.8 (>= 1.5.1), libpcsclite1 (>= 1.3.3), libpulse0 (>= 0.99.1), libsane1 (>= 1.0.27), libudev1 (>= 183), libunwind8, libusb-1.0-0 (>= 2:1.0.21), libwayland-client0 (>= 1.20.0), libwayland-egl1 (>= 1.15.0), libx11-6, libxext6, libxkbcommon0 (>= 0.5.0), libxkbregistry0 (>= 1.0.0), ocl-icd-libopencl1 (>= 1.0) | libopencl-1.2-1, ocl-icd-libopencl1 | libopencl1
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcap2-bin, libcups2, libdbus-1-3, libfontconfig1, libfreetype6, libglu1-mesa | libglu1, libgnutls30 | libgnutls28 | libgnutls26, libgssapi-krb5-2, libjpeg62-turbo | libjpeg8, libkrb5-3, libodbc1, libodbc2 | libodbc1, libosmesa6, libsdl2-2.0-0, libv4l-0, libxcomposite1, libxcursor1, libxfixes3, libxi6, libxinerama1, libxrandr2, libxrender1, libxxf86vm1

  </details>

- **wine-devel-dbg**
  - Latest version: 11.1~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-devel-dbg`
  - Install (apt): `sudo apt install wine-devel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: debug
  - Priority: optional
  - depends: wine-devel-amd64 (= 10.0.0~jammy-1), wine-devel-amd64 (= 10.0~rc1~jammy-1), wine-devel-amd64 (= 10.0~rc2~jammy-1), wine-devel-amd64 (= 10.0~rc3~jammy-1), wine-devel-amd64 (= 10.0~rc4~jammy-1), wine-devel-amd64 (= 10.0~rc5~jammy-1), wine-devel-amd64 (= 10.0~rc6~jammy-1), wine-devel-amd64 (= 10.1~jammy-1), wine-devel-amd64 (= 10.10~jammy-1), wine-devel-amd64 (= 10.11~jammy-1), wine-devel-amd64 (= 10.12~jammy-1), wine-devel-amd64 (= 10.13~jammy-1), wine-devel-amd64 (= 10.14~jammy-1), wine-devel-amd64 (= 10.15~jammy-1), wine-devel-amd64 (= 10.16~jammy-1), wine-devel-amd64 (= 10.17~jammy-1), wine-devel-amd64 (= 10.18~jammy-1), wine-devel-amd64 (= 10.19~jammy-1), wine-devel-amd64 (= 10.2~jammy-1), wine-devel-amd64 (= 10.2~jammy-2), wine-devel-amd64 (= 10.2~jammy-4), wine-devel-amd64 (= 10.20~jammy-1), wine-devel-amd64 (= 10.3~jammy-1), wine-devel-amd64 (= 10.4~jammy-1), wine-devel-amd64 (= 10.5~jammy-1), wine-devel-amd64 (= 10.6~jammy-1), wine-devel-amd64 (= 10.7~jammy-1), wine-devel-amd64 (= 10.8~jammy-1), wine-devel-amd64 (= 10.9~jammy-1), wine-devel-amd64 (= 11.0.0~jammy-1), wine-devel-amd64 (= 11.0~rc1~jammy-1), wine-devel-amd64 (= 11.0~rc2~jammy-1), wine-devel-amd64 (= 11.0~rc3~jammy-1), wine-devel-amd64 (= 11.0~rc4~jammy-1), wine-devel-amd64 (= 11.0~rc5~jammy-1), wine-devel-amd64 (= 11.1~jammy-1), wine-devel-amd64 (= 7.10~jammy-1), wine-devel-amd64 (= 7.11~jammy-1), wine-devel-amd64 (= 7.12~jammy-1), wine-devel-amd64 (= 7.13~jammy-1), wine-devel-amd64 (= 7.14~jammy-1), wine-devel-amd64 (= 7.15~jammy-1), wine-devel-amd64 (= 7.16~jammy-1), wine-devel-amd64 (= 7.17~jammy-1), wine-devel-amd64 (= 7.18~jammy-1), wine-devel-amd64 (= 7.19~jammy-1), wine-devel-amd64 (= 7.20~jammy-1), wine-devel-amd64 (= 7.21~jammy-1), wine-devel-amd64 (= 7.22~jammy-1), wine-devel-amd64 (= 7.6~jammy-1), wine-devel-amd64 (= 7.7~jammy-1), wine-devel-amd64 (= 7.8~jammy-1), wine-devel-amd64 (= 7.9~jammy-1), wine-devel-amd64 (= 8.0.0~jammy-1), wine-devel-amd64 (= 8.0~rc1~jammy-1), wine-devel-amd64 (= 8.0~rc2~jammy-1), wine-devel-amd64 (= 8.0~rc3~jammy-1), wine-devel-amd64 (= 8.0~rc4~jammy-1), wine-devel-amd64 (= 8.0~rc5~jammy-1), wine-devel-amd64 (= 8.1~jammy-1), wine-devel-amd64 (= 8.10~jammy-1), wine-devel-amd64 (= 8.11~jammy-1), wine-devel-amd64 (= 8.12~jammy-1), wine-devel-amd64 (= 8.13~jammy-1), wine-devel-amd64 (= 8.14~jammy-1), wine-devel-amd64 (= 8.15~jammy-1), wine-devel-amd64 (= 8.16~jammy-1), wine-devel-amd64 (= 8.17~jammy-1), wine-devel-amd64 (= 8.18~jammy-1), wine-devel-amd64 (= 8.19~jammy-1), wine-devel-amd64 (= 8.2~jammy-1), wine-devel-amd64 (= 8.20~jammy-1), wine-devel-amd64 (= 8.21~jammy-1), wine-devel-amd64 (= 8.3~jammy-1), wine-devel-amd64 (= 8.4~jammy-1), wine-devel-amd64 (= 8.5~jammy-1), wine-devel-amd64 (= 8.6~jammy-1), wine-devel-amd64 (= 8.7~jammy-1), wine-devel-amd64 (= 8.8~jammy-1), wine-devel-amd64 (= 8.9~jammy-1), wine-devel-amd64 (= 9.0.0~jammy-1), wine-devel-amd64 (= 9.0~rc1~jammy-1), wine-devel-amd64 (= 9.0~rc2~jammy-1), wine-devel-amd64 (= 9.0~rc3~jammy-1), wine-devel-amd64 (= 9.0~rc4~jammy-1), wine-devel-amd64 (= 9.0~rc5~jammy-1), wine-devel-amd64 (= 9.1~jammy-1), wine-devel-amd64 (= 9.10~jammy-1), wine-devel-amd64 (= 9.11~jammy-1), wine-devel-amd64 (= 9.12~jammy-1), wine-devel-amd64 (= 9.13~jammy-1), wine-devel-amd64 (= 9.14~jammy-1), wine-devel-amd64 (= 9.15~jammy-1), wine-devel-amd64 (= 9.16~jammy-1), wine-devel-amd64 (= 9.17~jammy-1), wine-devel-amd64 (= 9.18~jammy-1), wine-devel-amd64 (= 9.19~jammy-1), wine-devel-amd64 (= 9.2~jammy-1), wine-devel-amd64 (= 9.20~jammy-1), wine-devel-amd64 (= 9.21~jammy-1), wine-devel-amd64 (= 9.22~jammy-1), wine-devel-amd64 (= 9.3~jammy-1), wine-devel-amd64 (= 9.4~jammy-1), wine-devel-amd64 (= 9.5~jammy-1), wine-devel-amd64 (= 9.6~jammy-1), wine-devel-amd64 (= 9.7~jammy-1), wine-devel-amd64 (= 9.8~jammy-1), wine-devel-amd64 (= 9.9~jammy-1), wine-devel-i386 (= 10.0.0~jammy-1), wine-devel-i386 (= 10.0~rc1~jammy-1), wine-devel-i386 (= 10.0~rc2~jammy-1), wine-devel-i386 (= 10.0~rc3~jammy-1), wine-devel-i386 (= 10.0~rc4~jammy-1), wine-devel-i386 (= 10.0~rc5~jammy-1), wine-devel-i386 (= 10.0~rc6~jammy-1), wine-devel-i386 (= 10.1~jammy-1), wine-devel-i386 (= 10.10~jammy-1), wine-devel-i386 (= 10.11~jammy-1), wine-devel-i386 (= 10.12~jammy-1), wine-devel-i386 (= 10.13~jammy-1), wine-devel-i386 (= 10.14~jammy-1), wine-devel-i386 (= 10.15~jammy-1), wine-devel-i386 (= 10.16~jammy-1), wine-devel-i386 (= 10.17~jammy-1), wine-devel-i386 (= 10.18~jammy-1), wine-devel-i386 (= 10.19~jammy-1), wine-devel-i386 (= 10.2~jammy-1), wine-devel-i386 (= 10.2~jammy-2), wine-devel-i386 (= 10.2~jammy-4), wine-devel-i386 (= 10.20~jammy-1), wine-devel-i386 (= 10.3~jammy-1), wine-devel-i386 (= 10.4~jammy-1), wine-devel-i386 (= 10.5~jammy-1), wine-devel-i386 (= 10.6~jammy-1), wine-devel-i386 (= 10.7~jammy-1), wine-devel-i386 (= 10.8~jammy-1), wine-devel-i386 (= 10.9~jammy-1), wine-devel-i386 (= 11.0.0~jammy-1), wine-devel-i386 (= 11.0~rc1~jammy-1), wine-devel-i386 (= 11.0~rc2~jammy-1), wine-devel-i386 (= 11.0~rc3~jammy-1), wine-devel-i386 (= 11.0~rc4~jammy-1), wine-devel-i386 (= 11.0~rc5~jammy-1), wine-devel-i386 (= 11.1~jammy-1), wine-devel-i386 (= 7.10~jammy-1), wine-devel-i386 (= 7.11~jammy-1), wine-devel-i386 (= 7.12~jammy-1), wine-devel-i386 (= 7.13~jammy-1), wine-devel-i386 (= 7.14~jammy-1), wine-devel-i386 (= 7.15~jammy-1), wine-devel-i386 (= 7.16~jammy-1), wine-devel-i386 (= 7.17~jammy-1), wine-devel-i386 (= 7.18~jammy-1), wine-devel-i386 (= 7.19~jammy-1), wine-devel-i386 (= 7.20~jammy-1), wine-devel-i386 (= 7.21~jammy-1), wine-devel-i386 (= 7.22~jammy-1), wine-devel-i386 (= 7.6~jammy-1), wine-devel-i386 (= 7.7~jammy-1), wine-devel-i386 (= 7.8~jammy-1), wine-devel-i386 (= 7.9~jammy-1), wine-devel-i386 (= 8.0.0~jammy-1), wine-devel-i386 (= 8.0~rc1~jammy-1), wine-devel-i386 (= 8.0~rc2~jammy-1), wine-devel-i386 (= 8.0~rc3~jammy-1), wine-devel-i386 (= 8.0~rc4~jammy-1), wine-devel-i386 (= 8.0~rc5~jammy-1), wine-devel-i386 (= 8.1~jammy-1), wine-devel-i386 (= 8.10~jammy-1), wine-devel-i386 (= 8.11~jammy-1), wine-devel-i386 (= 8.12~jammy-1), wine-devel-i386 (= 8.13~jammy-1), wine-devel-i386 (= 8.14~jammy-1), wine-devel-i386 (= 8.15~jammy-1), wine-devel-i386 (= 8.16~jammy-1), wine-devel-i386 (= 8.17~jammy-1), wine-devel-i386 (= 8.18~jammy-1), wine-devel-i386 (= 8.19~jammy-1), wine-devel-i386 (= 8.2~jammy-1), wine-devel-i386 (= 8.20~jammy-1), wine-devel-i386 (= 8.21~jammy-1), wine-devel-i386 (= 8.3~jammy-1), wine-devel-i386 (= 8.4~jammy-1), wine-devel-i386 (= 8.5~jammy-1), wine-devel-i386 (= 8.6~jammy-1), wine-devel-i386 (= 8.7~jammy-1), wine-devel-i386 (= 8.8~jammy-1), wine-devel-i386 (= 8.9~jammy-1), wine-devel-i386 (= 9.0.0~jammy-1), wine-devel-i386 (= 9.0~rc1~jammy-1), wine-devel-i386 (= 9.0~rc2~jammy-1), wine-devel-i386 (= 9.0~rc3~jammy-1), wine-devel-i386 (= 9.0~rc4~jammy-1), wine-devel-i386 (= 9.0~rc5~jammy-1), wine-devel-i386 (= 9.1~jammy-1), wine-devel-i386 (= 9.10~jammy-1), wine-devel-i386 (= 9.11~jammy-1), wine-devel-i386 (= 9.12~jammy-1), wine-devel-i386 (= 9.13~jammy-1), wine-devel-i386 (= 9.14~jammy-1), wine-devel-i386 (= 9.15~jammy-1), wine-devel-i386 (= 9.16~jammy-1), wine-devel-i386 (= 9.17~jammy-1), wine-devel-i386 (= 9.18~jammy-1), wine-devel-i386 (= 9.19~jammy-1), wine-devel-i386 (= 9.2~jammy-1), wine-devel-i386 (= 9.20~jammy-1), wine-devel-i386 (= 9.21~jammy-1), wine-devel-i386 (= 9.22~jammy-1), wine-devel-i386 (= 9.3~jammy-1), wine-devel-i386 (= 9.4~jammy-1), wine-devel-i386 (= 9.5~jammy-1), wine-devel-i386 (= 9.6~jammy-1), wine-devel-i386 (= 9.7~jammy-1), wine-devel-i386 (= 9.8~jammy-1), wine-devel-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-devel-dev**
  - Latest version: 11.1~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-devel-dev`
  - Install (apt): `sudo apt install wine-devel-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: libdevel
  - Priority: optional
  - depends: libc6-dev, wine-devel-amd64 (= 10.0.0~jammy-1), wine-devel-amd64 (= 10.0~rc1~jammy-1), wine-devel-amd64 (= 10.0~rc2~jammy-1), wine-devel-amd64 (= 10.0~rc3~jammy-1), wine-devel-amd64 (= 10.0~rc4~jammy-1), wine-devel-amd64 (= 10.0~rc5~jammy-1), wine-devel-amd64 (= 10.0~rc6~jammy-1), wine-devel-amd64 (= 10.1~jammy-1), wine-devel-amd64 (= 10.10~jammy-1), wine-devel-amd64 (= 10.11~jammy-1), wine-devel-amd64 (= 10.12~jammy-1), wine-devel-amd64 (= 10.13~jammy-1), wine-devel-amd64 (= 10.14~jammy-1), wine-devel-amd64 (= 10.15~jammy-1), wine-devel-amd64 (= 10.16~jammy-1), wine-devel-amd64 (= 10.17~jammy-1), wine-devel-amd64 (= 10.18~jammy-1), wine-devel-amd64 (= 10.19~jammy-1), wine-devel-amd64 (= 10.2~jammy-1), wine-devel-amd64 (= 10.2~jammy-2), wine-devel-amd64 (= 10.2~jammy-4), wine-devel-amd64 (= 10.20~jammy-1), wine-devel-amd64 (= 10.3~jammy-1), wine-devel-amd64 (= 10.4~jammy-1), wine-devel-amd64 (= 10.5~jammy-1), wine-devel-amd64 (= 10.6~jammy-1), wine-devel-amd64 (= 10.7~jammy-1), wine-devel-amd64 (= 10.8~jammy-1), wine-devel-amd64 (= 10.9~jammy-1), wine-devel-amd64 (= 11.0.0~jammy-1), wine-devel-amd64 (= 11.0~rc1~jammy-1), wine-devel-amd64 (= 11.0~rc2~jammy-1), wine-devel-amd64 (= 11.0~rc3~jammy-1), wine-devel-amd64 (= 11.0~rc4~jammy-1), wine-devel-amd64 (= 11.0~rc5~jammy-1), wine-devel-amd64 (= 11.1~jammy-1), wine-devel-amd64 (= 7.10~jammy-1), wine-devel-amd64 (= 7.11~jammy-1), wine-devel-amd64 (= 7.12~jammy-1), wine-devel-amd64 (= 7.13~jammy-1), wine-devel-amd64 (= 7.14~jammy-1), wine-devel-amd64 (= 7.15~jammy-1), wine-devel-amd64 (= 7.16~jammy-1), wine-devel-amd64 (= 7.17~jammy-1), wine-devel-amd64 (= 7.18~jammy-1), wine-devel-amd64 (= 7.19~jammy-1), wine-devel-amd64 (= 7.20~jammy-1), wine-devel-amd64 (= 7.21~jammy-1), wine-devel-amd64 (= 7.22~jammy-1), wine-devel-amd64 (= 7.6~jammy-1), wine-devel-amd64 (= 7.7~jammy-1), wine-devel-amd64 (= 7.8~jammy-1), wine-devel-amd64 (= 7.9~jammy-1), wine-devel-amd64 (= 8.0.0~jammy-1), wine-devel-amd64 (= 8.0~rc1~jammy-1), wine-devel-amd64 (= 8.0~rc2~jammy-1), wine-devel-amd64 (= 8.0~rc3~jammy-1), wine-devel-amd64 (= 8.0~rc4~jammy-1), wine-devel-amd64 (= 8.0~rc5~jammy-1), wine-devel-amd64 (= 8.1~jammy-1), wine-devel-amd64 (= 8.10~jammy-1), wine-devel-amd64 (= 8.11~jammy-1), wine-devel-amd64 (= 8.12~jammy-1), wine-devel-amd64 (= 8.13~jammy-1), wine-devel-amd64 (= 8.14~jammy-1), wine-devel-amd64 (= 8.15~jammy-1), wine-devel-amd64 (= 8.16~jammy-1), wine-devel-amd64 (= 8.17~jammy-1), wine-devel-amd64 (= 8.18~jammy-1), wine-devel-amd64 (= 8.19~jammy-1), wine-devel-amd64 (= 8.2~jammy-1), wine-devel-amd64 (= 8.20~jammy-1), wine-devel-amd64 (= 8.21~jammy-1), wine-devel-amd64 (= 8.3~jammy-1), wine-devel-amd64 (= 8.4~jammy-1), wine-devel-amd64 (= 8.5~jammy-1), wine-devel-amd64 (= 8.6~jammy-1), wine-devel-amd64 (= 8.7~jammy-1), wine-devel-amd64 (= 8.8~jammy-1), wine-devel-amd64 (= 8.9~jammy-1), wine-devel-amd64 (= 9.0.0~jammy-1), wine-devel-amd64 (= 9.0~rc1~jammy-1), wine-devel-amd64 (= 9.0~rc2~jammy-1), wine-devel-amd64 (= 9.0~rc3~jammy-1), wine-devel-amd64 (= 9.0~rc4~jammy-1), wine-devel-amd64 (= 9.0~rc5~jammy-1), wine-devel-amd64 (= 9.1~jammy-1), wine-devel-amd64 (= 9.10~jammy-1), wine-devel-amd64 (= 9.11~jammy-1), wine-devel-amd64 (= 9.12~jammy-1), wine-devel-amd64 (= 9.13~jammy-1), wine-devel-amd64 (= 9.14~jammy-1), wine-devel-amd64 (= 9.15~jammy-1), wine-devel-amd64 (= 9.16~jammy-1), wine-devel-amd64 (= 9.17~jammy-1), wine-devel-amd64 (= 9.18~jammy-1), wine-devel-amd64 (= 9.19~jammy-1), wine-devel-amd64 (= 9.2~jammy-1), wine-devel-amd64 (= 9.20~jammy-1), wine-devel-amd64 (= 9.21~jammy-1), wine-devel-amd64 (= 9.22~jammy-1), wine-devel-amd64 (= 9.3~jammy-1), wine-devel-amd64 (= 9.4~jammy-1), wine-devel-amd64 (= 9.5~jammy-1), wine-devel-amd64 (= 9.6~jammy-1), wine-devel-amd64 (= 9.7~jammy-1), wine-devel-amd64 (= 9.8~jammy-1), wine-devel-amd64 (= 9.9~jammy-1), wine-devel-i386 (= 10.0.0~jammy-1), wine-devel-i386 (= 10.0~rc1~jammy-1), wine-devel-i386 (= 10.0~rc2~jammy-1), wine-devel-i386 (= 10.0~rc3~jammy-1), wine-devel-i386 (= 10.0~rc4~jammy-1), wine-devel-i386 (= 10.0~rc5~jammy-1), wine-devel-i386 (= 10.0~rc6~jammy-1), wine-devel-i386 (= 10.1~jammy-1), wine-devel-i386 (= 10.10~jammy-1), wine-devel-i386 (= 10.11~jammy-1), wine-devel-i386 (= 10.12~jammy-1), wine-devel-i386 (= 10.13~jammy-1), wine-devel-i386 (= 10.14~jammy-1), wine-devel-i386 (= 10.15~jammy-1), wine-devel-i386 (= 10.16~jammy-1), wine-devel-i386 (= 10.17~jammy-1), wine-devel-i386 (= 10.18~jammy-1), wine-devel-i386 (= 10.19~jammy-1), wine-devel-i386 (= 10.2~jammy-1), wine-devel-i386 (= 10.2~jammy-2), wine-devel-i386 (= 10.2~jammy-4), wine-devel-i386 (= 10.20~jammy-1), wine-devel-i386 (= 10.3~jammy-1), wine-devel-i386 (= 10.4~jammy-1), wine-devel-i386 (= 10.5~jammy-1), wine-devel-i386 (= 10.6~jammy-1), wine-devel-i386 (= 10.7~jammy-1), wine-devel-i386 (= 10.8~jammy-1), wine-devel-i386 (= 10.9~jammy-1), wine-devel-i386 (= 11.0.0~jammy-1), wine-devel-i386 (= 11.0~rc1~jammy-1), wine-devel-i386 (= 11.0~rc2~jammy-1), wine-devel-i386 (= 11.0~rc3~jammy-1), wine-devel-i386 (= 11.0~rc4~jammy-1), wine-devel-i386 (= 11.0~rc5~jammy-1), wine-devel-i386 (= 11.1~jammy-1), wine-devel-i386 (= 7.10~jammy-1), wine-devel-i386 (= 7.11~jammy-1), wine-devel-i386 (= 7.12~jammy-1), wine-devel-i386 (= 7.13~jammy-1), wine-devel-i386 (= 7.14~jammy-1), wine-devel-i386 (= 7.15~jammy-1), wine-devel-i386 (= 7.16~jammy-1), wine-devel-i386 (= 7.17~jammy-1), wine-devel-i386 (= 7.18~jammy-1), wine-devel-i386 (= 7.19~jammy-1), wine-devel-i386 (= 7.20~jammy-1), wine-devel-i386 (= 7.21~jammy-1), wine-devel-i386 (= 7.22~jammy-1), wine-devel-i386 (= 7.6~jammy-1), wine-devel-i386 (= 7.7~jammy-1), wine-devel-i386 (= 7.8~jammy-1), wine-devel-i386 (= 7.9~jammy-1), wine-devel-i386 (= 8.0.0~jammy-1), wine-devel-i386 (= 8.0~rc1~jammy-1), wine-devel-i386 (= 8.0~rc2~jammy-1), wine-devel-i386 (= 8.0~rc3~jammy-1), wine-devel-i386 (= 8.0~rc4~jammy-1), wine-devel-i386 (= 8.0~rc5~jammy-1), wine-devel-i386 (= 8.1~jammy-1), wine-devel-i386 (= 8.10~jammy-1), wine-devel-i386 (= 8.11~jammy-1), wine-devel-i386 (= 8.12~jammy-1), wine-devel-i386 (= 8.13~jammy-1), wine-devel-i386 (= 8.14~jammy-1), wine-devel-i386 (= 8.15~jammy-1), wine-devel-i386 (= 8.16~jammy-1), wine-devel-i386 (= 8.17~jammy-1), wine-devel-i386 (= 8.18~jammy-1), wine-devel-i386 (= 8.19~jammy-1), wine-devel-i386 (= 8.2~jammy-1), wine-devel-i386 (= 8.20~jammy-1), wine-devel-i386 (= 8.21~jammy-1), wine-devel-i386 (= 8.3~jammy-1), wine-devel-i386 (= 8.4~jammy-1), wine-devel-i386 (= 8.5~jammy-1), wine-devel-i386 (= 8.6~jammy-1), wine-devel-i386 (= 8.7~jammy-1), wine-devel-i386 (= 8.8~jammy-1), wine-devel-i386 (= 8.9~jammy-1), wine-devel-i386 (= 9.0.0~jammy-1), wine-devel-i386 (= 9.0~rc1~jammy-1), wine-devel-i386 (= 9.0~rc2~jammy-1), wine-devel-i386 (= 9.0~rc3~jammy-1), wine-devel-i386 (= 9.0~rc4~jammy-1), wine-devel-i386 (= 9.0~rc5~jammy-1), wine-devel-i386 (= 9.1~jammy-1), wine-devel-i386 (= 9.10~jammy-1), wine-devel-i386 (= 9.11~jammy-1), wine-devel-i386 (= 9.12~jammy-1), wine-devel-i386 (= 9.13~jammy-1), wine-devel-i386 (= 9.14~jammy-1), wine-devel-i386 (= 9.15~jammy-1), wine-devel-i386 (= 9.16~jammy-1), wine-devel-i386 (= 9.17~jammy-1), wine-devel-i386 (= 9.18~jammy-1), wine-devel-i386 (= 9.19~jammy-1), wine-devel-i386 (= 9.2~jammy-1), wine-devel-i386 (= 9.20~jammy-1), wine-devel-i386 (= 9.21~jammy-1), wine-devel-i386 (= 9.22~jammy-1), wine-devel-i386 (= 9.3~jammy-1), wine-devel-i386 (= 9.4~jammy-1), wine-devel-i386 (= 9.5~jammy-1), wine-devel-i386 (= 9.6~jammy-1), wine-devel-i386 (= 9.7~jammy-1), wine-devel-i386 (= 9.8~jammy-1), wine-devel-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-stable**
  - Latest version: 11.0.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable`
  - Install (apt): `sudo apt install wine-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.34), libc6 (>= 2.35), wine-stable-amd64 (= 10.0.0.0~jammy-1), wine-stable-amd64 (= 11.0.0.0~jammy-1), wine-stable-amd64 (= 7.0.1~jammy-1), wine-stable-amd64 (= 7.0.2~jammy-1), wine-stable-amd64 (= 8.0.0.0~jammy-1), wine-stable-amd64 (= 8.0.1~jammy-1), wine-stable-amd64 (= 8.0.2~jammy-1), wine-stable-amd64 (= 9.0.0.0~jammy-1), wine-stable-i386 (= 10.0.0.0~jammy-1), wine-stable-i386 (= 11.0.0.0~jammy-1), wine-stable-i386 (= 7.0.1~jammy-1), wine-stable-i386 (= 7.0.2~jammy-1), wine-stable-i386 (= 8.0.0.0~jammy-1), wine-stable-i386 (= 8.0.1~jammy-1), wine-stable-i386 (= 8.0.2~jammy-1), wine-stable-i386 (= 9.0.0.0~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-stable-amd64**
  - Latest version: 11.0.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable-amd64`
  - Install (apt): `sudo apt install wine-stable-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libasound2-plugins, libc6 (>= 2.35), libglib2.0-0 (>= 2.12.0), libglib2.0-0 (>= 2.37.3), libgphoto2-6 (>= 2.5.10), libgphoto2-port12 (>= 2.5.10), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer-plugins-base1.0-0 (>= 1.8.0), libgstreamer1.0-0 (>= 1.14.0), libgstreamer1.0-0 (>= 1.4.0), libldap-2.5-0 (>= 2.5.4), libncurses6 | libncurses5 | libncurses, libopenal1 (>= 1.14), libpcap0.8 (>= 1.10.0), libpcap0.8 (>= 1.5.1), libpulse0 (>= 0.99.1), libsane1 (>= 1.0.27), libudev1 (>= 183), libunwind8, libusb-1.0-0 (>= 2:1.0.21), libwayland-client0 (>= 1.20.0), libwayland-egl1 (>= 1.15.0), libx11-6, libxext6, libxkbcommon0 (>= 0.5.0), libxkbregistry0 (>= 1.0.0), ocl-icd-libopencl1 (>= 1.0) | libopencl-1.2-1, ocl-icd-libopencl1 | libopencl1
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcapi20-3, libcups2, libdbus-1-3, libfontconfig1, libfreetype6, libglu1-mesa | libglu1, libgnutls30 | libgnutls28 | libgnutls26, libgsm1, libgssapi-krb5-2, libjpeg62-turbo | libjpeg8, libkrb5-3, libodbc1, libodbc2 | libodbc1, libosmesa6, libpng16-16 | libpng12-0, libsdl2-2.0-0, libtiff5, libv4l-0, libxcomposite1, libxcursor1, libxfixes3, libxi6, libxinerama1, libxrandr2, libxrender1, libxslt1.1, libxxf86vm1

  </details>

- **wine-stable-dbg**
  - Latest version: 11.0.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable-dbg`
  - Install (apt): `sudo apt install wine-stable-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: debug
  - Priority: optional
  - depends: wine-stable-amd64 (= 10.0.0.0~jammy-1), wine-stable-amd64 (= 11.0.0.0~jammy-1), wine-stable-amd64 (= 7.0.1~jammy-1), wine-stable-amd64 (= 7.0.2~jammy-1), wine-stable-amd64 (= 8.0.0.0~jammy-1), wine-stable-amd64 (= 8.0.1~jammy-1), wine-stable-amd64 (= 8.0.2~jammy-1), wine-stable-amd64 (= 9.0.0.0~jammy-1), wine-stable-i386 (= 10.0.0.0~jammy-1), wine-stable-i386 (= 11.0.0.0~jammy-1), wine-stable-i386 (= 7.0.1~jammy-1), wine-stable-i386 (= 7.0.2~jammy-1), wine-stable-i386 (= 8.0.0.0~jammy-1), wine-stable-i386 (= 8.0.1~jammy-1), wine-stable-i386 (= 8.0.2~jammy-1), wine-stable-i386 (= 9.0.0.0~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-stable-dev**
  - Latest version: 11.0.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable-dev`
  - Install (apt): `sudo apt install wine-stable-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: libdevel
  - Priority: optional
  - depends: libc6-dev, wine-stable-amd64 (= 10.0.0.0~jammy-1), wine-stable-amd64 (= 11.0.0.0~jammy-1), wine-stable-amd64 (= 7.0.1~jammy-1), wine-stable-amd64 (= 7.0.2~jammy-1), wine-stable-amd64 (= 8.0.0.0~jammy-1), wine-stable-amd64 (= 8.0.1~jammy-1), wine-stable-amd64 (= 8.0.2~jammy-1), wine-stable-amd64 (= 9.0.0.0~jammy-1), wine-stable-i386 (= 10.0.0.0~jammy-1), wine-stable-i386 (= 11.0.0.0~jammy-1), wine-stable-i386 (= 7.0.1~jammy-1), wine-stable-i386 (= 7.0.2~jammy-1), wine-stable-i386 (= 8.0.0.0~jammy-1), wine-stable-i386 (= 8.0.1~jammy-1), wine-stable-i386 (= 8.0.2~jammy-1), wine-stable-i386 (= 9.0.0.0~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-staging**
  - Latest version: 11.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-staging`
  - Install (apt): `sudo apt install wine-staging`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.34), libc6 (>= 2.35), wine-staging-amd64 (= 10.0.0~jammy-1), wine-staging-amd64 (= 10.0~rc1~jammy-1), wine-staging-amd64 (= 10.0~rc2~jammy-1), wine-staging-amd64 (= 10.0~rc3~jammy-1), wine-staging-amd64 (= 10.0~rc4~jammy-1), wine-staging-amd64 (= 10.0~rc5~jammy-1), wine-staging-amd64 (= 10.0~rc6~jammy-1), wine-staging-amd64 (= 10.1~jammy-1), wine-staging-amd64 (= 10.10~jammy-1), wine-staging-amd64 (= 10.11~jammy-1), wine-staging-amd64 (= 10.12~jammy-1), wine-staging-amd64 (= 10.13~jammy-1), wine-staging-amd64 (= 10.14~jammy-1), wine-staging-amd64 (= 10.15~jammy-1), wine-staging-amd64 (= 10.16~jammy-1), wine-staging-amd64 (= 10.17~jammy-1), wine-staging-amd64 (= 10.18~jammy-1), wine-staging-amd64 (= 10.19~jammy-1), wine-staging-amd64 (= 10.2~jammy-1), wine-staging-amd64 (= 10.2~jammy-2), wine-staging-amd64 (= 10.2~jammy-4), wine-staging-amd64 (= 10.20~jammy-1), wine-staging-amd64 (= 10.3~jammy-1), wine-staging-amd64 (= 10.4~jammy-1), wine-staging-amd64 (= 10.5~jammy-1), wine-staging-amd64 (= 10.6~jammy-1), wine-staging-amd64 (= 10.7~jammy-1), wine-staging-amd64 (= 10.8~jammy-1), wine-staging-amd64 (= 10.9~jammy-1), wine-staging-amd64 (= 11.0.0~jammy-1), wine-staging-amd64 (= 11.0~rc1~jammy-1), wine-staging-amd64 (= 11.0~rc2~jammy-1), wine-staging-amd64 (= 11.0~rc3~jammy-1), wine-staging-amd64 (= 11.0~rc4~jammy-1), wine-staging-amd64 (= 11.0~rc5~jammy-1), wine-staging-amd64 (= 7.10~jammy-1), wine-staging-amd64 (= 7.11~jammy-1), wine-staging-amd64 (= 7.12~jammy-1), wine-staging-amd64 (= 7.13~jammy-1), wine-staging-amd64 (= 7.14~jammy-1), wine-staging-amd64 (= 7.15~jammy-1), wine-staging-amd64 (= 7.16~jammy-1), wine-staging-amd64 (= 7.17~jammy-1), wine-staging-amd64 (= 7.18~jammy-1), wine-staging-amd64 (= 7.19~jammy-1), wine-staging-amd64 (= 7.20~jammy-1), wine-staging-amd64 (= 7.21~jammy-1), wine-staging-amd64 (= 7.22~jammy-1), wine-staging-amd64 (= 7.6~jammy-1), wine-staging-amd64 (= 7.7~jammy-1), wine-staging-amd64 (= 7.8~jammy-1), wine-staging-amd64 (= 7.9~jammy-1), wine-staging-amd64 (= 8.0.0~jammy-1), wine-staging-amd64 (= 8.0~rc2~jammy-1), wine-staging-amd64 (= 8.0~rc3~jammy-1), wine-staging-amd64 (= 8.0~rc4~jammy-1), wine-staging-amd64 (= 8.0~rc5~jammy-1), wine-staging-amd64 (= 8.1~jammy-1), wine-staging-amd64 (= 8.10~jammy-1), wine-staging-amd64 (= 8.11~jammy-1), wine-staging-amd64 (= 8.12~jammy-1), wine-staging-amd64 (= 8.13~jammy-1), wine-staging-amd64 (= 8.14~jammy-1), wine-staging-amd64 (= 8.15~jammy-1), wine-staging-amd64 (= 8.16~jammy-1), wine-staging-amd64 (= 8.17~jammy-1), wine-staging-amd64 (= 8.18~jammy-1), wine-staging-amd64 (= 8.19~jammy-1), wine-staging-amd64 (= 8.2~jammy-1), wine-staging-amd64 (= 8.20~jammy-1), wine-staging-amd64 (= 8.21~jammy-1), wine-staging-amd64 (= 8.3~jammy-1), wine-staging-amd64 (= 8.4~jammy-1), wine-staging-amd64 (= 8.5~jammy-1), wine-staging-amd64 (= 8.6~jammy-1), wine-staging-amd64 (= 8.7~jammy-1), wine-staging-amd64 (= 8.8~jammy-1), wine-staging-amd64 (= 8.9~jammy-1), wine-staging-amd64 (= 9.0.0~jammy-1), wine-staging-amd64 (= 9.0~rc1~jammy-1), wine-staging-amd64 (= 9.0~rc2~jammy-1), wine-staging-amd64 (= 9.0~rc3~jammy-1), wine-staging-amd64 (= 9.0~rc4~jammy-1), wine-staging-amd64 (= 9.0~rc5~jammy-1), wine-staging-amd64 (= 9.1~jammy-1), wine-staging-amd64 (= 9.10~jammy-1), wine-staging-amd64 (= 9.11~jammy-1), wine-staging-amd64 (= 9.12~jammy-1), wine-staging-amd64 (= 9.13~jammy-1), wine-staging-amd64 (= 9.14~jammy-1), wine-staging-amd64 (= 9.15~jammy-1), wine-staging-amd64 (= 9.16~jammy-1), wine-staging-amd64 (= 9.17~jammy-1), wine-staging-amd64 (= 9.18~jammy-1), wine-staging-amd64 (= 9.19~jammy-1), wine-staging-amd64 (= 9.2~jammy-1), wine-staging-amd64 (= 9.20~jammy-1), wine-staging-amd64 (= 9.21~jammy-1), wine-staging-amd64 (= 9.22~jammy-1), wine-staging-amd64 (= 9.3~jammy-1), wine-staging-amd64 (= 9.4~jammy-1), wine-staging-amd64 (= 9.5~jammy-1), wine-staging-amd64 (= 9.6~jammy-1), wine-staging-amd64 (= 9.7~jammy-1), wine-staging-amd64 (= 9.8~jammy-1), wine-staging-amd64 (= 9.9~jammy-1), wine-staging-i386 (= 10.0.0~jammy-1), wine-staging-i386 (= 10.0~rc1~jammy-1), wine-staging-i386 (= 10.0~rc2~jammy-1), wine-staging-i386 (= 10.0~rc3~jammy-1), wine-staging-i386 (= 10.0~rc4~jammy-1), wine-staging-i386 (= 10.0~rc5~jammy-1), wine-staging-i386 (= 10.0~rc6~jammy-1), wine-staging-i386 (= 10.1~jammy-1), wine-staging-i386 (= 10.10~jammy-1), wine-staging-i386 (= 10.11~jammy-1), wine-staging-i386 (= 10.12~jammy-1), wine-staging-i386 (= 10.13~jammy-1), wine-staging-i386 (= 10.14~jammy-1), wine-staging-i386 (= 10.15~jammy-1), wine-staging-i386 (= 10.16~jammy-1), wine-staging-i386 (= 10.17~jammy-1), wine-staging-i386 (= 10.18~jammy-1), wine-staging-i386 (= 10.19~jammy-1), wine-staging-i386 (= 10.2~jammy-1), wine-staging-i386 (= 10.2~jammy-2), wine-staging-i386 (= 10.2~jammy-4), wine-staging-i386 (= 10.20~jammy-1), wine-staging-i386 (= 10.3~jammy-1), wine-staging-i386 (= 10.4~jammy-1), wine-staging-i386 (= 10.5~jammy-1), wine-staging-i386 (= 10.6~jammy-1), wine-staging-i386 (= 10.7~jammy-1), wine-staging-i386 (= 10.8~jammy-1), wine-staging-i386 (= 10.9~jammy-1), wine-staging-i386 (= 11.0.0~jammy-1), wine-staging-i386 (= 11.0~rc1~jammy-1), wine-staging-i386 (= 11.0~rc2~jammy-1), wine-staging-i386 (= 11.0~rc3~jammy-1), wine-staging-i386 (= 11.0~rc4~jammy-1), wine-staging-i386 (= 11.0~rc5~jammy-1), wine-staging-i386 (= 7.10~jammy-1), wine-staging-i386 (= 7.11~jammy-1), wine-staging-i386 (= 7.12~jammy-1), wine-staging-i386 (= 7.13~jammy-1), wine-staging-i386 (= 7.14~jammy-1), wine-staging-i386 (= 7.15~jammy-1), wine-staging-i386 (= 7.16~jammy-1), wine-staging-i386 (= 7.17~jammy-1), wine-staging-i386 (= 7.18~jammy-1), wine-staging-i386 (= 7.19~jammy-1), wine-staging-i386 (= 7.20~jammy-1), wine-staging-i386 (= 7.21~jammy-1), wine-staging-i386 (= 7.22~jammy-1), wine-staging-i386 (= 7.6~jammy-1), wine-staging-i386 (= 7.7~jammy-1), wine-staging-i386 (= 7.8~jammy-1), wine-staging-i386 (= 7.9~jammy-1), wine-staging-i386 (= 8.0.0~jammy-1), wine-staging-i386 (= 8.0~rc2~jammy-1), wine-staging-i386 (= 8.0~rc3~jammy-1), wine-staging-i386 (= 8.0~rc4~jammy-1), wine-staging-i386 (= 8.0~rc5~jammy-1), wine-staging-i386 (= 8.1~jammy-1), wine-staging-i386 (= 8.10~jammy-1), wine-staging-i386 (= 8.11~jammy-1), wine-staging-i386 (= 8.12~jammy-1), wine-staging-i386 (= 8.13~jammy-1), wine-staging-i386 (= 8.14~jammy-1), wine-staging-i386 (= 8.15~jammy-1), wine-staging-i386 (= 8.16~jammy-1), wine-staging-i386 (= 8.17~jammy-1), wine-staging-i386 (= 8.18~jammy-1), wine-staging-i386 (= 8.19~jammy-1), wine-staging-i386 (= 8.2~jammy-1), wine-staging-i386 (= 8.20~jammy-1), wine-staging-i386 (= 8.21~jammy-1), wine-staging-i386 (= 8.3~jammy-1), wine-staging-i386 (= 8.4~jammy-1), wine-staging-i386 (= 8.5~jammy-1), wine-staging-i386 (= 8.6~jammy-1), wine-staging-i386 (= 8.7~jammy-1), wine-staging-i386 (= 8.8~jammy-1), wine-staging-i386 (= 8.9~jammy-1), wine-staging-i386 (= 9.0.0~jammy-1), wine-staging-i386 (= 9.0~rc1~jammy-1), wine-staging-i386 (= 9.0~rc2~jammy-1), wine-staging-i386 (= 9.0~rc3~jammy-1), wine-staging-i386 (= 9.0~rc4~jammy-1), wine-staging-i386 (= 9.0~rc5~jammy-1), wine-staging-i386 (= 9.1~jammy-1), wine-staging-i386 (= 9.10~jammy-1), wine-staging-i386 (= 9.11~jammy-1), wine-staging-i386 (= 9.12~jammy-1), wine-staging-i386 (= 9.13~jammy-1), wine-staging-i386 (= 9.14~jammy-1), wine-staging-i386 (= 9.15~jammy-1), wine-staging-i386 (= 9.16~jammy-1), wine-staging-i386 (= 9.17~jammy-1), wine-staging-i386 (= 9.18~jammy-1), wine-staging-i386 (= 9.19~jammy-1), wine-staging-i386 (= 9.2~jammy-1), wine-staging-i386 (= 9.20~jammy-1), wine-staging-i386 (= 9.21~jammy-1), wine-staging-i386 (= 9.22~jammy-1), wine-staging-i386 (= 9.3~jammy-1), wine-staging-i386 (= 9.4~jammy-1), wine-staging-i386 (= 9.5~jammy-1), wine-staging-i386 (= 9.6~jammy-1), wine-staging-i386 (= 9.7~jammy-1), wine-staging-i386 (= 9.8~jammy-1), wine-staging-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcap2-bin

  </details>

- **wine-staging-amd64**
  - Latest version: 11.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-staging-amd64`
  - Install (apt): `sudo apt install wine-staging-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libasound2-plugins, libavcodec58 (>= 7:4.4), libavformat58 (>= 7:4.4), libavutil56 (>= 7:4.4), libc6 (>= 2.35), libglib2.0-0 (>= 2.12.0), libglib2.0-0 (>= 2.37.3), libgphoto2-6 (>= 2.5.10), libgphoto2-port12 (>= 2.5.10), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer-plugins-base1.0-0 (>= 1.8.0), libgstreamer1.0-0 (>= 1.14.0), libgstreamer1.0-0 (>= 1.4.0), libldap-2.5-0 (>= 2.5.4), libncurses6 | libncurses5 | libncurses, libodbc2 (>= 2.3.1), libopenal1 (>= 1.14), libpcap0.8 (>= 1.10.0), libpcap0.8 (>= 1.5.1), libpcsclite1 (>= 1.3.3), libpulse0 (>= 0.99.1), libsane1 (>= 1.0.27), libudev1 (>= 183), libunwind8, libusb-1.0-0 (>= 2:1.0.21), libwayland-client0 (>= 1.20.0), libwayland-egl1 (>= 1.15.0), libx11-6, libxext6, libxkbcommon0 (>= 0.5.0), libxkbregistry0 (>= 1.0.0), ocl-icd-libopencl1 (>= 1.0) | libopencl-1.2-1, ocl-icd-libopencl1 | libopencl1
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcairo2, libcap2-bin, libcups2, libdbus-1-3, libfontconfig1, libfreetype6, libglu1-mesa | libglu1, libgnutls30 | libgnutls-deb0-28 | libgnutls26, libgssapi-krb5-2, libgtk-3-0, libkrb5-3, libodbc1, libodbc2 | libodbc1, libosmesa6, libsdl2-2.0-0, libv4l-0, libva-drm2 | libva-drm1, libva-x11-2 | libva-x11-1, libva2 | libva1, libxcomposite1, libxcursor1, libxfixes3, libxi6, libxinerama1, libxrandr2, libxrender1, libxxf86vm1

  </details>

- **wine-staging-dbg**
  - Latest version: 11.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-staging-dbg`
  - Install (apt): `sudo apt install wine-staging-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: debug
  - Priority: optional
  - depends: wine-staging-amd64 (= 10.0.0~jammy-1), wine-staging-amd64 (= 10.0~rc1~jammy-1), wine-staging-amd64 (= 10.0~rc2~jammy-1), wine-staging-amd64 (= 10.0~rc3~jammy-1), wine-staging-amd64 (= 10.0~rc4~jammy-1), wine-staging-amd64 (= 10.0~rc5~jammy-1), wine-staging-amd64 (= 10.0~rc6~jammy-1), wine-staging-amd64 (= 10.1~jammy-1), wine-staging-amd64 (= 10.10~jammy-1), wine-staging-amd64 (= 10.11~jammy-1), wine-staging-amd64 (= 10.12~jammy-1), wine-staging-amd64 (= 10.13~jammy-1), wine-staging-amd64 (= 10.14~jammy-1), wine-staging-amd64 (= 10.15~jammy-1), wine-staging-amd64 (= 10.16~jammy-1), wine-staging-amd64 (= 10.17~jammy-1), wine-staging-amd64 (= 10.18~jammy-1), wine-staging-amd64 (= 10.19~jammy-1), wine-staging-amd64 (= 10.2~jammy-1), wine-staging-amd64 (= 10.2~jammy-2), wine-staging-amd64 (= 10.2~jammy-4), wine-staging-amd64 (= 10.20~jammy-1), wine-staging-amd64 (= 10.3~jammy-1), wine-staging-amd64 (= 10.4~jammy-1), wine-staging-amd64 (= 10.5~jammy-1), wine-staging-amd64 (= 10.6~jammy-1), wine-staging-amd64 (= 10.7~jammy-1), wine-staging-amd64 (= 10.8~jammy-1), wine-staging-amd64 (= 10.9~jammy-1), wine-staging-amd64 (= 11.0.0~jammy-1), wine-staging-amd64 (= 11.0~rc1~jammy-1), wine-staging-amd64 (= 11.0~rc2~jammy-1), wine-staging-amd64 (= 11.0~rc3~jammy-1), wine-staging-amd64 (= 11.0~rc4~jammy-1), wine-staging-amd64 (= 11.0~rc5~jammy-1), wine-staging-amd64 (= 7.10~jammy-1), wine-staging-amd64 (= 7.11~jammy-1), wine-staging-amd64 (= 7.12~jammy-1), wine-staging-amd64 (= 7.13~jammy-1), wine-staging-amd64 (= 7.14~jammy-1), wine-staging-amd64 (= 7.15~jammy-1), wine-staging-amd64 (= 7.16~jammy-1), wine-staging-amd64 (= 7.17~jammy-1), wine-staging-amd64 (= 7.18~jammy-1), wine-staging-amd64 (= 7.19~jammy-1), wine-staging-amd64 (= 7.20~jammy-1), wine-staging-amd64 (= 7.21~jammy-1), wine-staging-amd64 (= 7.22~jammy-1), wine-staging-amd64 (= 7.6~jammy-1), wine-staging-amd64 (= 7.7~jammy-1), wine-staging-amd64 (= 7.8~jammy-1), wine-staging-amd64 (= 7.9~jammy-1), wine-staging-amd64 (= 8.0.0~jammy-1), wine-staging-amd64 (= 8.0~rc2~jammy-1), wine-staging-amd64 (= 8.0~rc3~jammy-1), wine-staging-amd64 (= 8.0~rc4~jammy-1), wine-staging-amd64 (= 8.0~rc5~jammy-1), wine-staging-amd64 (= 8.1~jammy-1), wine-staging-amd64 (= 8.10~jammy-1), wine-staging-amd64 (= 8.11~jammy-1), wine-staging-amd64 (= 8.12~jammy-1), wine-staging-amd64 (= 8.13~jammy-1), wine-staging-amd64 (= 8.14~jammy-1), wine-staging-amd64 (= 8.15~jammy-1), wine-staging-amd64 (= 8.16~jammy-1), wine-staging-amd64 (= 8.17~jammy-1), wine-staging-amd64 (= 8.18~jammy-1), wine-staging-amd64 (= 8.19~jammy-1), wine-staging-amd64 (= 8.2~jammy-1), wine-staging-amd64 (= 8.20~jammy-1), wine-staging-amd64 (= 8.21~jammy-1), wine-staging-amd64 (= 8.3~jammy-1), wine-staging-amd64 (= 8.4~jammy-1), wine-staging-amd64 (= 8.5~jammy-1), wine-staging-amd64 (= 8.6~jammy-1), wine-staging-amd64 (= 8.7~jammy-1), wine-staging-amd64 (= 8.8~jammy-1), wine-staging-amd64 (= 8.9~jammy-1), wine-staging-amd64 (= 9.0.0~jammy-1), wine-staging-amd64 (= 9.0~rc1~jammy-1), wine-staging-amd64 (= 9.0~rc2~jammy-1), wine-staging-amd64 (= 9.0~rc3~jammy-1), wine-staging-amd64 (= 9.0~rc4~jammy-1), wine-staging-amd64 (= 9.0~rc5~jammy-1), wine-staging-amd64 (= 9.1~jammy-1), wine-staging-amd64 (= 9.10~jammy-1), wine-staging-amd64 (= 9.11~jammy-1), wine-staging-amd64 (= 9.12~jammy-1), wine-staging-amd64 (= 9.13~jammy-1), wine-staging-amd64 (= 9.14~jammy-1), wine-staging-amd64 (= 9.15~jammy-1), wine-staging-amd64 (= 9.16~jammy-1), wine-staging-amd64 (= 9.17~jammy-1), wine-staging-amd64 (= 9.18~jammy-1), wine-staging-amd64 (= 9.19~jammy-1), wine-staging-amd64 (= 9.2~jammy-1), wine-staging-amd64 (= 9.20~jammy-1), wine-staging-amd64 (= 9.21~jammy-1), wine-staging-amd64 (= 9.22~jammy-1), wine-staging-amd64 (= 9.3~jammy-1), wine-staging-amd64 (= 9.4~jammy-1), wine-staging-amd64 (= 9.5~jammy-1), wine-staging-amd64 (= 9.6~jammy-1), wine-staging-amd64 (= 9.7~jammy-1), wine-staging-amd64 (= 9.8~jammy-1), wine-staging-amd64 (= 9.9~jammy-1), wine-staging-i386 (= 10.0.0~jammy-1), wine-staging-i386 (= 10.0~rc1~jammy-1), wine-staging-i386 (= 10.0~rc2~jammy-1), wine-staging-i386 (= 10.0~rc3~jammy-1), wine-staging-i386 (= 10.0~rc4~jammy-1), wine-staging-i386 (= 10.0~rc5~jammy-1), wine-staging-i386 (= 10.0~rc6~jammy-1), wine-staging-i386 (= 10.1~jammy-1), wine-staging-i386 (= 10.10~jammy-1), wine-staging-i386 (= 10.11~jammy-1), wine-staging-i386 (= 10.12~jammy-1), wine-staging-i386 (= 10.13~jammy-1), wine-staging-i386 (= 10.14~jammy-1), wine-staging-i386 (= 10.15~jammy-1), wine-staging-i386 (= 10.16~jammy-1), wine-staging-i386 (= 10.17~jammy-1), wine-staging-i386 (= 10.18~jammy-1), wine-staging-i386 (= 10.19~jammy-1), wine-staging-i386 (= 10.2~jammy-1), wine-staging-i386 (= 10.2~jammy-2), wine-staging-i386 (= 10.2~jammy-4), wine-staging-i386 (= 10.20~jammy-1), wine-staging-i386 (= 10.3~jammy-1), wine-staging-i386 (= 10.4~jammy-1), wine-staging-i386 (= 10.5~jammy-1), wine-staging-i386 (= 10.6~jammy-1), wine-staging-i386 (= 10.7~jammy-1), wine-staging-i386 (= 10.8~jammy-1), wine-staging-i386 (= 10.9~jammy-1), wine-staging-i386 (= 11.0.0~jammy-1), wine-staging-i386 (= 11.0~rc1~jammy-1), wine-staging-i386 (= 11.0~rc2~jammy-1), wine-staging-i386 (= 11.0~rc3~jammy-1), wine-staging-i386 (= 11.0~rc4~jammy-1), wine-staging-i386 (= 11.0~rc5~jammy-1), wine-staging-i386 (= 7.10~jammy-1), wine-staging-i386 (= 7.11~jammy-1), wine-staging-i386 (= 7.12~jammy-1), wine-staging-i386 (= 7.13~jammy-1), wine-staging-i386 (= 7.14~jammy-1), wine-staging-i386 (= 7.15~jammy-1), wine-staging-i386 (= 7.16~jammy-1), wine-staging-i386 (= 7.17~jammy-1), wine-staging-i386 (= 7.18~jammy-1), wine-staging-i386 (= 7.19~jammy-1), wine-staging-i386 (= 7.20~jammy-1), wine-staging-i386 (= 7.21~jammy-1), wine-staging-i386 (= 7.22~jammy-1), wine-staging-i386 (= 7.6~jammy-1), wine-staging-i386 (= 7.7~jammy-1), wine-staging-i386 (= 7.8~jammy-1), wine-staging-i386 (= 7.9~jammy-1), wine-staging-i386 (= 8.0.0~jammy-1), wine-staging-i386 (= 8.0~rc2~jammy-1), wine-staging-i386 (= 8.0~rc3~jammy-1), wine-staging-i386 (= 8.0~rc4~jammy-1), wine-staging-i386 (= 8.0~rc5~jammy-1), wine-staging-i386 (= 8.1~jammy-1), wine-staging-i386 (= 8.10~jammy-1), wine-staging-i386 (= 8.11~jammy-1), wine-staging-i386 (= 8.12~jammy-1), wine-staging-i386 (= 8.13~jammy-1), wine-staging-i386 (= 8.14~jammy-1), wine-staging-i386 (= 8.15~jammy-1), wine-staging-i386 (= 8.16~jammy-1), wine-staging-i386 (= 8.17~jammy-1), wine-staging-i386 (= 8.18~jammy-1), wine-staging-i386 (= 8.19~jammy-1), wine-staging-i386 (= 8.2~jammy-1), wine-staging-i386 (= 8.20~jammy-1), wine-staging-i386 (= 8.21~jammy-1), wine-staging-i386 (= 8.3~jammy-1), wine-staging-i386 (= 8.4~jammy-1), wine-staging-i386 (= 8.5~jammy-1), wine-staging-i386 (= 8.6~jammy-1), wine-staging-i386 (= 8.7~jammy-1), wine-staging-i386 (= 8.8~jammy-1), wine-staging-i386 (= 8.9~jammy-1), wine-staging-i386 (= 9.0.0~jammy-1), wine-staging-i386 (= 9.0~rc1~jammy-1), wine-staging-i386 (= 9.0~rc2~jammy-1), wine-staging-i386 (= 9.0~rc3~jammy-1), wine-staging-i386 (= 9.0~rc4~jammy-1), wine-staging-i386 (= 9.0~rc5~jammy-1), wine-staging-i386 (= 9.1~jammy-1), wine-staging-i386 (= 9.10~jammy-1), wine-staging-i386 (= 9.11~jammy-1), wine-staging-i386 (= 9.12~jammy-1), wine-staging-i386 (= 9.13~jammy-1), wine-staging-i386 (= 9.14~jammy-1), wine-staging-i386 (= 9.15~jammy-1), wine-staging-i386 (= 9.16~jammy-1), wine-staging-i386 (= 9.17~jammy-1), wine-staging-i386 (= 9.18~jammy-1), wine-staging-i386 (= 9.19~jammy-1), wine-staging-i386 (= 9.2~jammy-1), wine-staging-i386 (= 9.20~jammy-1), wine-staging-i386 (= 9.21~jammy-1), wine-staging-i386 (= 9.22~jammy-1), wine-staging-i386 (= 9.3~jammy-1), wine-staging-i386 (= 9.4~jammy-1), wine-staging-i386 (= 9.5~jammy-1), wine-staging-i386 (= 9.6~jammy-1), wine-staging-i386 (= 9.7~jammy-1), wine-staging-i386 (= 9.8~jammy-1), wine-staging-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-staging-dev**
  - Latest version: 11.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-staging-dev`
  - Install (apt): `sudo apt install wine-staging-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: libdevel
  - Priority: optional
  - depends: libc6-dev, wine-staging-amd64 (= 10.0.0~jammy-1), wine-staging-amd64 (= 10.0~rc1~jammy-1), wine-staging-amd64 (= 10.0~rc2~jammy-1), wine-staging-amd64 (= 10.0~rc3~jammy-1), wine-staging-amd64 (= 10.0~rc4~jammy-1), wine-staging-amd64 (= 10.0~rc5~jammy-1), wine-staging-amd64 (= 10.0~rc6~jammy-1), wine-staging-amd64 (= 10.1~jammy-1), wine-staging-amd64 (= 10.10~jammy-1), wine-staging-amd64 (= 10.11~jammy-1), wine-staging-amd64 (= 10.12~jammy-1), wine-staging-amd64 (= 10.13~jammy-1), wine-staging-amd64 (= 10.14~jammy-1), wine-staging-amd64 (= 10.15~jammy-1), wine-staging-amd64 (= 10.16~jammy-1), wine-staging-amd64 (= 10.17~jammy-1), wine-staging-amd64 (= 10.18~jammy-1), wine-staging-amd64 (= 10.19~jammy-1), wine-staging-amd64 (= 10.2~jammy-1), wine-staging-amd64 (= 10.2~jammy-2), wine-staging-amd64 (= 10.2~jammy-4), wine-staging-amd64 (= 10.20~jammy-1), wine-staging-amd64 (= 10.3~jammy-1), wine-staging-amd64 (= 10.4~jammy-1), wine-staging-amd64 (= 10.5~jammy-1), wine-staging-amd64 (= 10.6~jammy-1), wine-staging-amd64 (= 10.7~jammy-1), wine-staging-amd64 (= 10.8~jammy-1), wine-staging-amd64 (= 10.9~jammy-1), wine-staging-amd64 (= 11.0.0~jammy-1), wine-staging-amd64 (= 11.0~rc1~jammy-1), wine-staging-amd64 (= 11.0~rc2~jammy-1), wine-staging-amd64 (= 11.0~rc3~jammy-1), wine-staging-amd64 (= 11.0~rc4~jammy-1), wine-staging-amd64 (= 11.0~rc5~jammy-1), wine-staging-amd64 (= 7.10~jammy-1), wine-staging-amd64 (= 7.11~jammy-1), wine-staging-amd64 (= 7.12~jammy-1), wine-staging-amd64 (= 7.13~jammy-1), wine-staging-amd64 (= 7.14~jammy-1), wine-staging-amd64 (= 7.15~jammy-1), wine-staging-amd64 (= 7.16~jammy-1), wine-staging-amd64 (= 7.17~jammy-1), wine-staging-amd64 (= 7.18~jammy-1), wine-staging-amd64 (= 7.19~jammy-1), wine-staging-amd64 (= 7.20~jammy-1), wine-staging-amd64 (= 7.21~jammy-1), wine-staging-amd64 (= 7.22~jammy-1), wine-staging-amd64 (= 7.6~jammy-1), wine-staging-amd64 (= 7.7~jammy-1), wine-staging-amd64 (= 7.8~jammy-1), wine-staging-amd64 (= 7.9~jammy-1), wine-staging-amd64 (= 8.0.0~jammy-1), wine-staging-amd64 (= 8.0~rc2~jammy-1), wine-staging-amd64 (= 8.0~rc3~jammy-1), wine-staging-amd64 (= 8.0~rc4~jammy-1), wine-staging-amd64 (= 8.0~rc5~jammy-1), wine-staging-amd64 (= 8.1~jammy-1), wine-staging-amd64 (= 8.10~jammy-1), wine-staging-amd64 (= 8.11~jammy-1), wine-staging-amd64 (= 8.12~jammy-1), wine-staging-amd64 (= 8.13~jammy-1), wine-staging-amd64 (= 8.14~jammy-1), wine-staging-amd64 (= 8.15~jammy-1), wine-staging-amd64 (= 8.16~jammy-1), wine-staging-amd64 (= 8.17~jammy-1), wine-staging-amd64 (= 8.18~jammy-1), wine-staging-amd64 (= 8.19~jammy-1), wine-staging-amd64 (= 8.2~jammy-1), wine-staging-amd64 (= 8.20~jammy-1), wine-staging-amd64 (= 8.21~jammy-1), wine-staging-amd64 (= 8.3~jammy-1), wine-staging-amd64 (= 8.4~jammy-1), wine-staging-amd64 (= 8.5~jammy-1), wine-staging-amd64 (= 8.6~jammy-1), wine-staging-amd64 (= 8.7~jammy-1), wine-staging-amd64 (= 8.8~jammy-1), wine-staging-amd64 (= 8.9~jammy-1), wine-staging-amd64 (= 9.0.0~jammy-1), wine-staging-amd64 (= 9.0~rc1~jammy-1), wine-staging-amd64 (= 9.0~rc2~jammy-1), wine-staging-amd64 (= 9.0~rc3~jammy-1), wine-staging-amd64 (= 9.0~rc4~jammy-1), wine-staging-amd64 (= 9.0~rc5~jammy-1), wine-staging-amd64 (= 9.1~jammy-1), wine-staging-amd64 (= 9.10~jammy-1), wine-staging-amd64 (= 9.11~jammy-1), wine-staging-amd64 (= 9.12~jammy-1), wine-staging-amd64 (= 9.13~jammy-1), wine-staging-amd64 (= 9.14~jammy-1), wine-staging-amd64 (= 9.15~jammy-1), wine-staging-amd64 (= 9.16~jammy-1), wine-staging-amd64 (= 9.17~jammy-1), wine-staging-amd64 (= 9.18~jammy-1), wine-staging-amd64 (= 9.19~jammy-1), wine-staging-amd64 (= 9.2~jammy-1), wine-staging-amd64 (= 9.20~jammy-1), wine-staging-amd64 (= 9.21~jammy-1), wine-staging-amd64 (= 9.22~jammy-1), wine-staging-amd64 (= 9.3~jammy-1), wine-staging-amd64 (= 9.4~jammy-1), wine-staging-amd64 (= 9.5~jammy-1), wine-staging-amd64 (= 9.6~jammy-1), wine-staging-amd64 (= 9.7~jammy-1), wine-staging-amd64 (= 9.8~jammy-1), wine-staging-amd64 (= 9.9~jammy-1), wine-staging-i386 (= 10.0.0~jammy-1), wine-staging-i386 (= 10.0~rc1~jammy-1), wine-staging-i386 (= 10.0~rc2~jammy-1), wine-staging-i386 (= 10.0~rc3~jammy-1), wine-staging-i386 (= 10.0~rc4~jammy-1), wine-staging-i386 (= 10.0~rc5~jammy-1), wine-staging-i386 (= 10.0~rc6~jammy-1), wine-staging-i386 (= 10.1~jammy-1), wine-staging-i386 (= 10.10~jammy-1), wine-staging-i386 (= 10.11~jammy-1), wine-staging-i386 (= 10.12~jammy-1), wine-staging-i386 (= 10.13~jammy-1), wine-staging-i386 (= 10.14~jammy-1), wine-staging-i386 (= 10.15~jammy-1), wine-staging-i386 (= 10.16~jammy-1), wine-staging-i386 (= 10.17~jammy-1), wine-staging-i386 (= 10.18~jammy-1), wine-staging-i386 (= 10.19~jammy-1), wine-staging-i386 (= 10.2~jammy-1), wine-staging-i386 (= 10.2~jammy-2), wine-staging-i386 (= 10.2~jammy-4), wine-staging-i386 (= 10.20~jammy-1), wine-staging-i386 (= 10.3~jammy-1), wine-staging-i386 (= 10.4~jammy-1), wine-staging-i386 (= 10.5~jammy-1), wine-staging-i386 (= 10.6~jammy-1), wine-staging-i386 (= 10.7~jammy-1), wine-staging-i386 (= 10.8~jammy-1), wine-staging-i386 (= 10.9~jammy-1), wine-staging-i386 (= 11.0.0~jammy-1), wine-staging-i386 (= 11.0~rc1~jammy-1), wine-staging-i386 (= 11.0~rc2~jammy-1), wine-staging-i386 (= 11.0~rc3~jammy-1), wine-staging-i386 (= 11.0~rc4~jammy-1), wine-staging-i386 (= 11.0~rc5~jammy-1), wine-staging-i386 (= 7.10~jammy-1), wine-staging-i386 (= 7.11~jammy-1), wine-staging-i386 (= 7.12~jammy-1), wine-staging-i386 (= 7.13~jammy-1), wine-staging-i386 (= 7.14~jammy-1), wine-staging-i386 (= 7.15~jammy-1), wine-staging-i386 (= 7.16~jammy-1), wine-staging-i386 (= 7.17~jammy-1), wine-staging-i386 (= 7.18~jammy-1), wine-staging-i386 (= 7.19~jammy-1), wine-staging-i386 (= 7.20~jammy-1), wine-staging-i386 (= 7.21~jammy-1), wine-staging-i386 (= 7.22~jammy-1), wine-staging-i386 (= 7.6~jammy-1), wine-staging-i386 (= 7.7~jammy-1), wine-staging-i386 (= 7.8~jammy-1), wine-staging-i386 (= 7.9~jammy-1), wine-staging-i386 (= 8.0.0~jammy-1), wine-staging-i386 (= 8.0~rc2~jammy-1), wine-staging-i386 (= 8.0~rc3~jammy-1), wine-staging-i386 (= 8.0~rc4~jammy-1), wine-staging-i386 (= 8.0~rc5~jammy-1), wine-staging-i386 (= 8.1~jammy-1), wine-staging-i386 (= 8.10~jammy-1), wine-staging-i386 (= 8.11~jammy-1), wine-staging-i386 (= 8.12~jammy-1), wine-staging-i386 (= 8.13~jammy-1), wine-staging-i386 (= 8.14~jammy-1), wine-staging-i386 (= 8.15~jammy-1), wine-staging-i386 (= 8.16~jammy-1), wine-staging-i386 (= 8.17~jammy-1), wine-staging-i386 (= 8.18~jammy-1), wine-staging-i386 (= 8.19~jammy-1), wine-staging-i386 (= 8.2~jammy-1), wine-staging-i386 (= 8.20~jammy-1), wine-staging-i386 (= 8.21~jammy-1), wine-staging-i386 (= 8.3~jammy-1), wine-staging-i386 (= 8.4~jammy-1), wine-staging-i386 (= 8.5~jammy-1), wine-staging-i386 (= 8.6~jammy-1), wine-staging-i386 (= 8.7~jammy-1), wine-staging-i386 (= 8.8~jammy-1), wine-staging-i386 (= 8.9~jammy-1), wine-staging-i386 (= 9.0.0~jammy-1), wine-staging-i386 (= 9.0~rc1~jammy-1), wine-staging-i386 (= 9.0~rc2~jammy-1), wine-staging-i386 (= 9.0~rc3~jammy-1), wine-staging-i386 (= 9.0~rc4~jammy-1), wine-staging-i386 (= 9.0~rc5~jammy-1), wine-staging-i386 (= 9.1~jammy-1), wine-staging-i386 (= 9.10~jammy-1), wine-staging-i386 (= 9.11~jammy-1), wine-staging-i386 (= 9.12~jammy-1), wine-staging-i386 (= 9.13~jammy-1), wine-staging-i386 (= 9.14~jammy-1), wine-staging-i386 (= 9.15~jammy-1), wine-staging-i386 (= 9.16~jammy-1), wine-staging-i386 (= 9.17~jammy-1), wine-staging-i386 (= 9.18~jammy-1), wine-staging-i386 (= 9.19~jammy-1), wine-staging-i386 (= 9.2~jammy-1), wine-staging-i386 (= 9.20~jammy-1), wine-staging-i386 (= 9.21~jammy-1), wine-staging-i386 (= 9.22~jammy-1), wine-staging-i386 (= 9.3~jammy-1), wine-staging-i386 (= 9.4~jammy-1), wine-staging-i386 (= 9.5~jammy-1), wine-staging-i386 (= 9.6~jammy-1), wine-staging-i386 (= 9.7~jammy-1), wine-staging-i386 (= 9.8~jammy-1), wine-staging-i386 (= 9.9~jammy-1)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **winehq-devel**
  - Latest version: 11.1~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install winehq-devel`
  - Install (apt): `sudo apt install winehq-devel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: wine-devel (= 10.0.0~jammy-1), wine-devel (= 10.0~rc1~jammy-1), wine-devel (= 10.0~rc2~jammy-1), wine-devel (= 10.0~rc3~jammy-1), wine-devel (= 10.0~rc4~jammy-1), wine-devel (= 10.0~rc5~jammy-1), wine-devel (= 10.0~rc6~jammy-1), wine-devel (= 10.1~jammy-1), wine-devel (= 10.10~jammy-1), wine-devel (= 10.11~jammy-1), wine-devel (= 10.12~jammy-1), wine-devel (= 10.13~jammy-1), wine-devel (= 10.14~jammy-1), wine-devel (= 10.15~jammy-1), wine-devel (= 10.16~jammy-1), wine-devel (= 10.17~jammy-1), wine-devel (= 10.18~jammy-1), wine-devel (= 10.19~jammy-1), wine-devel (= 10.2~jammy-1), wine-devel (= 10.2~jammy-2), wine-devel (= 10.2~jammy-4), wine-devel (= 10.20~jammy-1), wine-devel (= 10.3~jammy-1), wine-devel (= 10.4~jammy-1), wine-devel (= 10.5~jammy-1), wine-devel (= 10.6~jammy-1), wine-devel (= 10.7~jammy-1), wine-devel (= 10.8~jammy-1), wine-devel (= 10.9~jammy-1), wine-devel (= 11.0.0~jammy-1), wine-devel (= 11.0~rc1~jammy-1), wine-devel (= 11.0~rc2~jammy-1), wine-devel (= 11.0~rc3~jammy-1), wine-devel (= 11.0~rc4~jammy-1), wine-devel (= 11.0~rc5~jammy-1), wine-devel (= 11.1~jammy-1), wine-devel (= 7.10~jammy-1), wine-devel (= 7.11~jammy-1), wine-devel (= 7.12~jammy-1), wine-devel (= 7.13~jammy-1), wine-devel (= 7.14~jammy-1), wine-devel (= 7.15~jammy-1), wine-devel (= 7.16~jammy-1), wine-devel (= 7.17~jammy-1), wine-devel (= 7.18~jammy-1), wine-devel (= 7.19~jammy-1), wine-devel (= 7.20~jammy-1), wine-devel (= 7.21~jammy-1), wine-devel (= 7.22~jammy-1), wine-devel (= 7.6~jammy-1), wine-devel (= 7.7~jammy-1), wine-devel (= 7.8~jammy-1), wine-devel (= 7.9~jammy-1), wine-devel (= 8.0.0~jammy-1), wine-devel (= 8.0~rc1~jammy-1), wine-devel (= 8.0~rc2~jammy-1), wine-devel (= 8.0~rc3~jammy-1), wine-devel (= 8.0~rc4~jammy-1), wine-devel (= 8.0~rc5~jammy-1), wine-devel (= 8.1~jammy-1), wine-devel (= 8.10~jammy-1), wine-devel (= 8.11~jammy-1), wine-devel (= 8.12~jammy-1), wine-devel (= 8.13~jammy-1), wine-devel (= 8.14~jammy-1), wine-devel (= 8.15~jammy-1), wine-devel (= 8.16~jammy-1), wine-devel (= 8.17~jammy-1), wine-devel (= 8.18~jammy-1), wine-devel (= 8.19~jammy-1), wine-devel (= 8.2~jammy-1), wine-devel (= 8.20~jammy-1), wine-devel (= 8.21~jammy-1), wine-devel (= 8.3~jammy-1), wine-devel (= 8.4~jammy-1), wine-devel (= 8.5~jammy-1), wine-devel (= 8.6~jammy-1), wine-devel (= 8.7~jammy-1), wine-devel (= 8.8~jammy-1), wine-devel (= 8.9~jammy-1), wine-devel (= 9.0.0~jammy-1), wine-devel (= 9.0~rc1~jammy-1), wine-devel (= 9.0~rc2~jammy-1), wine-devel (= 9.0~rc3~jammy-1), wine-devel (= 9.0~rc4~jammy-1), wine-devel (= 9.0~rc5~jammy-1), wine-devel (= 9.1~jammy-1), wine-devel (= 9.10~jammy-1), wine-devel (= 9.11~jammy-1), wine-devel (= 9.12~jammy-1), wine-devel (= 9.13~jammy-1), wine-devel (= 9.14~jammy-1), wine-devel (= 9.15~jammy-1), wine-devel (= 9.16~jammy-1), wine-devel (= 9.17~jammy-1), wine-devel (= 9.18~jammy-1), wine-devel (= 9.19~jammy-1), wine-devel (= 9.2~jammy-1), wine-devel (= 9.20~jammy-1), wine-devel (= 9.21~jammy-1), wine-devel (= 9.22~jammy-1), wine-devel (= 9.3~jammy-1), wine-devel (= 9.4~jammy-1), wine-devel (= 9.5~jammy-1), wine-devel (= 9.6~jammy-1), wine-devel (= 9.7~jammy-1), wine-devel (= 9.8~jammy-1), wine-devel (= 9.9~jammy-1)
  - conflicts: wine, wine-amd64, wine-i386
  - replaces: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64
  - provides: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64

  </details>

- **winehq-stable**
  - Latest version: 11.0.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install winehq-stable`
  - Install (apt): `sudo apt install winehq-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: wine-stable (= 10.0.0.0~jammy-1), wine-stable (= 11.0.0.0~jammy-1), wine-stable (= 7.0.1~jammy-1), wine-stable (= 7.0.2~jammy-1), wine-stable (= 8.0.0.0~jammy-1), wine-stable (= 8.0.1~jammy-1), wine-stable (= 8.0.2~jammy-1), wine-stable (= 9.0.0.0~jammy-1)
  - conflicts: wine, wine-amd64, wine-i386
  - replaces: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64
  - provides: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64

  </details>

- **winehq-staging**
  - Latest version: 11.0.0~jammy-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install winehq-staging`
  - Install (apt): `sudo apt install winehq-staging`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: wine-staging (= 10.0.0~jammy-1), wine-staging (= 10.0~rc1~jammy-1), wine-staging (= 10.0~rc2~jammy-1), wine-staging (= 10.0~rc3~jammy-1), wine-staging (= 10.0~rc4~jammy-1), wine-staging (= 10.0~rc5~jammy-1), wine-staging (= 10.0~rc6~jammy-1), wine-staging (= 10.1~jammy-1), wine-staging (= 10.10~jammy-1), wine-staging (= 10.11~jammy-1), wine-staging (= 10.12~jammy-1), wine-staging (= 10.13~jammy-1), wine-staging (= 10.14~jammy-1), wine-staging (= 10.15~jammy-1), wine-staging (= 10.16~jammy-1), wine-staging (= 10.17~jammy-1), wine-staging (= 10.18~jammy-1), wine-staging (= 10.19~jammy-1), wine-staging (= 10.2~jammy-1), wine-staging (= 10.2~jammy-2), wine-staging (= 10.2~jammy-4), wine-staging (= 10.20~jammy-1), wine-staging (= 10.3~jammy-1), wine-staging (= 10.4~jammy-1), wine-staging (= 10.5~jammy-1), wine-staging (= 10.6~jammy-1), wine-staging (= 10.7~jammy-1), wine-staging (= 10.8~jammy-1), wine-staging (= 10.9~jammy-1), wine-staging (= 11.0.0~jammy-1), wine-staging (= 11.0~rc1~jammy-1), wine-staging (= 11.0~rc2~jammy-1), wine-staging (= 11.0~rc3~jammy-1), wine-staging (= 11.0~rc4~jammy-1), wine-staging (= 11.0~rc5~jammy-1), wine-staging (= 7.10~jammy-1), wine-staging (= 7.11~jammy-1), wine-staging (= 7.12~jammy-1), wine-staging (= 7.13~jammy-1), wine-staging (= 7.14~jammy-1), wine-staging (= 7.15~jammy-1), wine-staging (= 7.16~jammy-1), wine-staging (= 7.17~jammy-1), wine-staging (= 7.18~jammy-1), wine-staging (= 7.19~jammy-1), wine-staging (= 7.20~jammy-1), wine-staging (= 7.21~jammy-1), wine-staging (= 7.22~jammy-1), wine-staging (= 7.6~jammy-1), wine-staging (= 7.7~jammy-1), wine-staging (= 7.8~jammy-1), wine-staging (= 7.9~jammy-1), wine-staging (= 8.0.0~jammy-1), wine-staging (= 8.0~rc2~jammy-1), wine-staging (= 8.0~rc3~jammy-1), wine-staging (= 8.0~rc4~jammy-1), wine-staging (= 8.0~rc5~jammy-1), wine-staging (= 8.1~jammy-1), wine-staging (= 8.10~jammy-1), wine-staging (= 8.11~jammy-1), wine-staging (= 8.12~jammy-1), wine-staging (= 8.13~jammy-1), wine-staging (= 8.14~jammy-1), wine-staging (= 8.15~jammy-1), wine-staging (= 8.16~jammy-1), wine-staging (= 8.17~jammy-1), wine-staging (= 8.18~jammy-1), wine-staging (= 8.19~jammy-1), wine-staging (= 8.2~jammy-1), wine-staging (= 8.20~jammy-1), wine-staging (= 8.21~jammy-1), wine-staging (= 8.3~jammy-1), wine-staging (= 8.4~jammy-1), wine-staging (= 8.5~jammy-1), wine-staging (= 8.6~jammy-1), wine-staging (= 8.7~jammy-1), wine-staging (= 8.8~jammy-1), wine-staging (= 8.9~jammy-1), wine-staging (= 9.0.0~jammy-1), wine-staging (= 9.0~rc1~jammy-1), wine-staging (= 9.0~rc2~jammy-1), wine-staging (= 9.0~rc3~jammy-1), wine-staging (= 9.0~rc4~jammy-1), wine-staging (= 9.0~rc5~jammy-1), wine-staging (= 9.1~jammy-1), wine-staging (= 9.10~jammy-1), wine-staging (= 9.11~jammy-1), wine-staging (= 9.12~jammy-1), wine-staging (= 9.13~jammy-1), wine-staging (= 9.14~jammy-1), wine-staging (= 9.15~jammy-1), wine-staging (= 9.16~jammy-1), wine-staging (= 9.17~jammy-1), wine-staging (= 9.18~jammy-1), wine-staging (= 9.19~jammy-1), wine-staging (= 9.2~jammy-1), wine-staging (= 9.20~jammy-1), wine-staging (= 9.21~jammy-1), wine-staging (= 9.22~jammy-1), wine-staging (= 9.3~jammy-1), wine-staging (= 9.4~jammy-1), wine-staging (= 9.5~jammy-1), wine-staging (= 9.6~jammy-1), wine-staging (= 9.7~jammy-1), wine-staging (= 9.8~jammy-1), wine-staging (= 9.9~jammy-1)
  - conflicts: wine, wine-amd64, wine-i386
  - replaces: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64
  - provides: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Official WineHQ repository for stable Wine releases
- Repo tags: compatibility
- Key notes: WineHQ apt repository key (for Wine packages)
- Key tags: compatibility
