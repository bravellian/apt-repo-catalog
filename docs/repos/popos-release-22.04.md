# Pop!_OS release - 22.04 (popos-22.04)

## Repository
- Repository ID: `popos-release-22.04`
- OS: `popos-22.04`
- Source: `http://apt.pop-os.org/release jammy main`

## Upstream documentation
- Documentation URL: https://support.system76.com/articles/apt-repository/
- Key documentation URL: https://support.system76.com/articles/apt-repository/

## Key reference
- Key ID: `popos-lookup-204dd8aec33a7aff`
- Expected fingerprints:
  - 63C46DF0140D738961429F4E204DD8AEC33A7AFF
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x204DD8AEC33A7AFF

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/release jammy main" | sudo tee /etc/apt/sources.list.d/popos-release-22.04.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/release jammy main" | sudo tee /etc/apt/sources.list.d/popos-release-22.04.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (979)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-H">H</a> <a href="#packages-I">I</a> <a href="#packages-J">J</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-P">P</a> <a href="#packages-R">R</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a> <a href="#packages-W">W</a> <a href="#packages-X">X</a> <a href="#packages-Z">Z</a>
</div>


### <a id="packages-A"></a>A

- **abigail-doc**
  - Latest version: 2.0-1pop0~1646087720~22.04~8bcd9d9
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: ABI Generic Analysis and Instrumentation Library (documentation)
  - Homepage: https://sourceware.org/libabigail/
  - Install: `sudo apt-get install abigail-doc`
  - Install (apt): `sudo apt install abigail-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>
  - Section: doc
  - Priority: optional
  - replaces: libabigail-dev (<< 0.1~20150809)

  </details>

- **abigail-tools**
  - Latest version: 2.0-1pop0~1646087720~22.04~8bcd9d9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: ABI Generic Analysis and Instrumentation Library (tools)
  - Homepage: https://sourceware.org/libabigail/
  - Install: `sudo apt-get install abigail-tools`
  - Install (apt): `sudo apt install abigail-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libabigail0 (= 2.0-1pop0~1646087720~22.04~8bcd9d9), libc6 (>= 2.34), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11)
  - suggests: abigail-doc, cpio, rpm2cpio
  - replaces: libabigail-tools

  </details>

- **accountsservice**
  - Latest version: 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: query and manipulate user account information
  - Homepage: https://www.freedesktop.org/wiki/Software/AccountsService/
  - Install: `sudo apt-get install accountsservice`
  - Install (apt): `sudo apt install accountsservice`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: dbus (>= 1.9.18), libaccountsservice0 (= 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419), libc6 (>= 2.34), libglib2.0-0 (>= 2.63.5), libpolkit-gobject-1-0 (>= 0.99)
  - recommends: default-logind | logind
  - suggests: gnome-control-center

  </details>

- **adw-gtk3**
  - Latest version: 5.3.0-0pop1~1710896694~22.04~213b5ed
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: libadwaita theme ported to GTK3
  - Homepage: https://github.com/pop-os/adw-gtk3
  - Install: `sudo apt-get install adw-gtk3`
  - Install (apt): `sudo apt install adw-gtk3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <michael@mmurphy.dev>
  - Section: utils
  - Priority: optional

  </details>

- **alacritty**
  - Latest version: 0.12.2~1703085360~22.04~365df06
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GPU-accelerated terminal emulator
  - Homepage: https://github.com/alacritty/alacritty
  - Install: `sudo apt-get install alacritty`
  - Install (apt): `sudo apt install alacritty`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: rust
  - Priority: optional
  - depends: libc6 (>= 2.35), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.8), libgcc-s1 (>= 4.2)
  - recommends: xclip

  </details>

- **alsa-ucm-conf**
  - Latest version: 1.2.8-1pop1~1709769747~22.04~16ff971
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: ALSA Use Case Manager configuration files
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install alsa-ucm-conf`
  - Install (apt): `sudo apt install alsa-ucm-conf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libasound2 (>= 1.2.4)

  </details>

- **alsa-utils**
  - Latest version: 1.2.8-1pop1~1676755497~22.04~a0d6eed
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Utilities for configuring and using ALSA
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install alsa-utils`
  - Install (apt): `sudo apt install alsa-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: sound
  - Priority: optional
  - depends: kmod (>= 17-1~), libasound2 (>= 1.2.6.1), libatopology2 (>= 1.2.2), libc6 (>= 2.34), libfftw3-single3 (>= 3.3.5), libncursesw6 (>= 6), libsamplerate0 (>= 0.1.7), libtinfo6 (>= 6), lsb-base (>= 3.0-9)
  - suggests: dialog
  - provides: audio-mixer

  </details>

- **amd-ppt-bin**
  - Latest version: 1.0.0~1609862600~22.04~1b80593
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: AMD PPT binary
  - Homepage: https://github.com/pop-os/amd-ppt-bin
  - Install: `sudo apt-get install amd-ppt-bin`
  - Install (apt): `sudo apt install amd-ppt-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: optional
  - depends: pciutils

  </details>

- **amd64-microcode**
  - Latest version: 3.20230808.1.1pop1~1691680164~22.04~af10f17
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Processor microcode firmware for AMD CPUs
  - Install: `sudo apt-get install amd64-microcode`
  - Install (apt): `sudo apt install amd64-microcode`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free-firmware/admin
  - Priority: standard
  - recommends: initramfs-tools (>= 0.113~) | dracut (>= 044) | tiny-initramfs
  - breaks: intel-microcode (<< 2), linux-firmware (<< 20220819.git8413c63c-0ubuntu1~)
  - replaces: linux-firmware (<< 20220819.git8413c63c-0ubuntu1~)

  </details>

- **appstream**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Software component metadata management
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install appstream`
  - Install (apt): `sudo apt install appstream`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: admin
  - Priority: optional
  - depends: libappstream4 (>= 0.15.0), libc6 (>= 2.34), libglib2.0-0 (>= 2.62), shared-mime-info
  - suggests: apt-config-icons

  </details>

- **appstream-compose**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Compose metadata collections from directory trees
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install appstream-compose`
  - Install (apt): `sudo apt install appstream-compose`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: admin
  - Priority: optional
  - depends: appstream, libappstream-compose0 (>= 0.15.2), libappstream4 (>= 0.14.4), libc6 (>= 2.34), libglib2.0-0 (>= 2.62)
  - recommends: ffmpeg, optipng
  - breaks: appstream (<< 0.15.2)
  - replaces: appstream (<< 0.15.2)

  </details>

- **appstream-data-pop**
  - Latest version: 0.0.3~1727715771~22.04~23d51d3
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: AppStream data for Pop!_OS
  - Install: `sudo apt-get install appstream-data-pop`
  - Install (apt): `sudo apt install appstream-data-pop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: misc
  - Priority: optional
  - recommends: appstream, appstream-data-pop-icons

  </details>

- **appstream-data-pop-icons**
  - Latest version: 0.0.3~1727715771~22.04~23d51d3
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Icons for AppStream data in Pop!_OS
  - Install: `sudo apt-get install appstream-data-pop-icons`
  - Install (apt): `sudo apt install appstream-data-pop-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: misc
  - Priority: optional
  - depends: appstream-data-pop
  - suggests: appstream-data-pop-icons-hidpi

  </details>

- **appstream-data-pop-icons-hidpi**
  - Latest version: 0.0.3~1727715771~22.04~23d51d3
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: HiDPI icons for AppStream data in Pop!_OS
  - Install: `sudo apt-get install appstream-data-pop-icons-hidpi`
  - Install (apt): `sudo apt install appstream-data-pop-icons-hidpi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: misc
  - Priority: optional
  - depends: appstream-data-pop-icons

  </details>

- **appstream-doc**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Developer documentation for AppStream
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install appstream-doc`
  - Install (apt): `sudo apt install appstream-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-highlight.js
  - suggests: appstream

  </details>

- **apt-config-icons**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: APT configuration snippet to enable icon downloads
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install apt-config-icons`
  - Install (apt): `sudo apt install apt-config-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: misc
  - Priority: optional
  - depends: appstream

  </details>

- **apt-config-icons-hidpi**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: APT configuration snippet to enable HiDPI icon downloads
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install apt-config-icons-hidpi`
  - Install (apt): `sudo apt install apt-config-icons-hidpi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: misc
  - Priority: optional
  - depends: apt-config-icons

  </details>

- **apt-config-icons-large**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: APT configuration snippet to enable large icon downloads
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install apt-config-icons-large`
  - Install (apt): `sudo apt install apt-config-icons-large`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: misc
  - Priority: optional
  - depends: apt-config-icons

  </details>

- **apt-config-icons-large-hidpi**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: APT configuration snippet to enable large HiDPI icon downloads
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install apt-config-icons-large-hidpi`
  - Install (apt): `sudo apt install apt-config-icons-large-hidpi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: misc
  - Priority: optional
  - depends: apt-config-icons-large

  </details>

- **arsandbox**
  - Latest version: 2.8-1pop1~1670886254~22.04~11110c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Augmented Reality Sandbox
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/
  - Install: `sudo apt-get install arsandbox`
  - Install (apt): `sudo apt install arsandbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: education
  - Priority: optional
  - depends: kinect, libc6 (>= 2.34), libgcc-s1 (>= 3.0), libgl1, libkinect3, libstdc++6 (>= 11), libvrui3, vrui
  - replaces: sarndbox

  </details>


### <a id="packages-B"></a>B

- **bcmwl-kernel-source**
  - Latest version: 6.30.223.271-27ubuntu2pop1~1761156147~22.04~55d7ad7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: transitional package for Broadcom STA Wireless driver
  - Homepage: http://www.broadcom.com/support/802.11/linux_sta.php
  - Install: `sudo apt-get install bcmwl-kernel-source`
  - Install (apt): `sudo apt install bcmwl-kernel-source`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: restricted/oldlibs
  - Priority: optional
  - depends: broadcom-sta-dkms (= 6.30.223.271-27ubuntu2pop1~1761156147~22.04~55d7ad7)

  </details>

- **bindgen**
  - Latest version: 0.72.1-1~1761153227~22.04~764f365
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Automatically generate Rust FFI bindings to C and C++ libraries
  - Homepage: https://rust-lang.github.io/rust-bindgen/
  - Install: `sudo apt-get install bindgen`
  - Install (apt): `sudo apt install bindgen`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Rust Maintainers <pkg-rust-maintainers@alioth-lists.debian.net>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libclang-dev, libgcc-s1 (>= 4.2)
  - recommends: rustfmt

  </details>

- **bpftool**
  - Latest version: 7.7.0+6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Inspection and simple manipulation of BPF programs and maps
  - Install: `sudo apt-get install bpftool`
  - Install (apt): `sudo apt install bpftool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libelf1 (>= 0.144), libllvm14, zlib1g (>= 1:1.2.3.3)
  - breaks: linux-tools-common (<< 6.14.0-8~)
  - replaces: linux-tools-common (<< 6.14.0-8~)

  </details>

- **broadcom-sta-common**
  - Latest version: 6.30.223.271-27ubuntu2pop1~1761156147~22.04~55d7ad7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Common files for the Broadcom STA Wireless driver
  - Homepage: http://www.broadcom.com/support/802.11/linux_sta.php
  - Install: `sudo apt-get install broadcom-sta-common`
  - Install (apt): `sudo apt install broadcom-sta-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: restricted/kernel
  - Priority: optional
  - recommends: broadcom-sta-source, module-assistant

  </details>

- **broadcom-sta-dkms**
  - Latest version: 6.30.223.271-27ubuntu2pop1~1761156147~22.04~55d7ad7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: dkms source for the Broadcom STA Wireless driver
  - Homepage: http://www.broadcom.com/support/802.11/linux_sta.php
  - Install: `sudo apt-get install broadcom-sta-dkms`
  - Install (apt): `sudo apt install broadcom-sta-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: restricted/kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)
  - recommends: wireless-tools
  - conflicts: broadcom-sta-modules
  - provides: broadcom-sta-modules

  </details>

- **broadcom-sta-source**
  - Latest version: 6.30.223.271-27ubuntu2pop1~1761156147~22.04~55d7ad7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Source for the Broadcom STA Wireless driver
  - Homepage: http://www.broadcom.com/support/802.11/linux_sta.php
  - Install: `sudo apt-get install broadcom-sta-source`
  - Install (apt): `sudo apt install broadcom-sta-source`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: restricted/kernel
  - Priority: optional
  - depends: debhelper-compat (= 13), make, xz-utils
  - recommends: module-assistant

  </details>

- **buildchain**
  - Latest version: 0.5.3~1741614618~22.04~b7438e4
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Software for creating and managing a distributed and reproducible chain of builds
  - Homepage: https://github.com/pop-os/buildchain
  - Install: `sudo apt-get install buildchain`
  - Install (apt): `sudo apt install buildchain`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: optional

  </details>

- **bustd**
  - Latest version: 0.1.0~1637084172~22.04~20acbe9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Process killer daemon for out-of-memory scenarios
  - Homepage: https://github.com/vrmiguel/bustd
  - Install: `sudo apt-get install bustd`
  - Install (apt): `sudo apt install bustd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>


### <a id="packages-C"></a>C

- **cargo**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust package manager
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install cargo`
  - Install (apt): `sudo apt install cargo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: curl, rustc

  </details>

- **cargo-doc**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Rust package manager, documentation
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install cargo-doc`
  - Install (apt): `sudo apt install cargo-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional

  </details>

- **cog-ml**
  - Latest version: 0.4.2~1662736278~22.04~e3a8664
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Containers for machine learning
  - Homepage: https://github.com/pop-os/system76-scheduler
  - Install: `sudo apt-get install cog-ml`
  - Install (apt): `sudo apt install cog-ml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: docker.io | docker-ce, git, python3, python3-fastapi, python3-mypy, python3-numpy, python3-pydantic, python3-redis, python3-requests, python3-responses, python3-setuptools, python3-uvicorn, python3-wheel, python3-willow, python3-yaml

  </details>

- **cog-stable-diffusion**
  - Latest version: 0.1.0~1663936317~22.04~b64f38e
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cog wrapper for stable diffusion
  - Homepage: https://github.com/pop-os/cog-stable-diffusion
  - Install: `sudo apt-get install cog-stable-diffusion`
  - Install (apt): `sudo apt install cog-stable-diffusion`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: cog-ml, docker.io | docker-ce, git, python3, python3-fastapi, python3-mypy, python3-numpy, python3-pydantic, python3-redis, python3-requests, python3-responses, python3-setuptools, python3-uvicorn, python3-wheel, python3-willow, python3-yaml

  </details>

- **com.github.donadigo.eddy**
  - Latest version: 1.1.9~1649275305~22.04~628bf0a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Eddy
  - Install: `sudo apt-get install com.github.donadigo.eddy`
  - Install (apt): `sudo apt install com.github.donadigo.eddy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Bienkowski <donadigos159@gmail.com>
  - Section: utils
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.43.92), libgranite6 (>= 6.0.0), libgtk-3-0 (>= 3.16.2), libpackagekit-glib2-18 (>= 1.1.0), libunity9 (>= 3.4.6)
  - preDepends: dpkg (>= 1.15.6)

  </details>

- **cosmic-app-library**
  - Latest version: 0.1.0~1768581035~22.04~6806d2c
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic App Library
  - Homepage: https://github.com/pop-os/cosmic-app-library
  - Install: `sudo apt-get install cosmic-app-library`
  - Install (apt): `sudo apt install cosmic-app-library`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>

- **cosmic-applets**
  - Latest version: 0.1.0~1741529755~22.04~f53e3bd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Applets
  - Homepage: https://github.com/pop-os/cosmic-applets
  - Install: `sudo apt-get install cosmic-applets`
  - Install (apt): `sudo apt install cosmic-applets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: system76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: cosmic-icons, libc6 (>= 2.35), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libpulse0 (>= 0.99.4), libudev1 (>= 183), libxkbcommon0 (>= 0.5.0)
  - recommends: pipewire-pulse
  - provides: system76-power-applet-virtual

  </details>

- **cosmic-bg**
  - Latest version: 0.1.0~1768583551~22.04~f431b28
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Background
  - Homepage: https://github.com/pop-os/cosmic-bg
  - Install: `sudo apt-get install cosmic-bg`
  - Install (apt): `sudo apt install cosmic-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-comp**
  - Latest version: 0.1~1737632446~22.04~1d00a51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Wayland compositor of pop-os cosmic shell
  - Homepage: https://github.com/pop-os/cosmic-comp
  - Install: `sudo apt-get install cosmic-comp`
  - Install (apt): `sudo apt install cosmic-comp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Victoria Brekenfeld <victoria@system76.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.35), libegl1, libgbm1 (>= 21.3.0~rc1), libgcc-s1 (>= 4.2), libinput10 (>= 1.19.1), libpixman-1-0 (>= 0.30.0), libseat1 (>= 0.5.0), libudev1 (>= 183), libwayland-server0, libxkbcommon0 (>= 0.5.0)
  - recommends: cosmic-session, libgl1-mesa-dri

  </details>

- **cosmic-design-demo**
  - Latest version: 0.1.0~1704748391~22.04~d58cfad
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libcosmic demo displaying its design elements and capabilities
  - Homepage: https://github.com/pop-os/libcosmic
  - Install: `sudo apt-get install cosmic-design-demo`
  - Install (apt): `sudo apt install cosmic-design-demo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@mmurphy.dev>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 1.0.0)

  </details>

- **cosmic-edit**
  - Latest version: 0.1.0~1769031900~22.04~fed3a59
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Text Editor
  - Homepage: https://github.com/pop-os/cosmic-edit
  - Install: `sudo apt-get install cosmic-edit`
  - Install (apt): `sudo apt install cosmic-edit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.35.8), libxkbcommon0 (>= 0.5.0)

  </details>

- **cosmic-files**
  - Latest version: 1.0.0~1769031861~22.04~34a33df
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic File Manager
  - Homepage: https://github.com/pop-os/cosmic-files
  - Install: `sudo apt-get install cosmic-files`
  - Install (apt): `sudo apt install cosmic-files`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.35.8), libxkbcommon0 (>= 0.5.0), xdg-utils

  </details>

- **cosmic-greeter**
  - Latest version: 0.1.0~1768580956~22.04~f139612
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Greeter
  - Homepage: https://github.com/pop-os/cosmic-greeter
  - Install: `sudo apt-get install cosmic-greeter`
  - Install (apt): `sudo apt install cosmic-greeter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, cosmic-comp, cosmic-greeter-daemon, cosmic-randr, dbus, debconf (>= 0.5) | debconf-2.0, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libpam0g (>= 0.99.7.1), libxkbcommon0 (>= 0.5.0), systemd | systemd-standalone-sysusers | systemd-sysusers
  - preDepends: greetd
  - recommends: xinit
  - suggests: libpam-fprintd
  - provides: x-display-manager

  </details>

- **cosmic-greeter-daemon**
  - Latest version: 0.1.0~1768580956~22.04~f139612
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Greeter daemon
  - Homepage: https://github.com/pop-os/cosmic-greeter
  - Install: `sudo apt-get install cosmic-greeter-daemon`
  - Install (apt): `sudo apt install cosmic-greeter-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-icons**
  - Latest version: 0.1.0~1765399353~22.04~cd30ffd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Icons
  - Homepage: https://github.com/pop-os/cosmic-icons
  - Install: `sudo apt-get install cosmic-icons`
  - Install (apt): `sudo apt install cosmic-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: pop-icon-theme

  </details>

- **cosmic-idle**
  - Latest version: 0.1.0~1769104176~22.04~6d3dbed
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic idle daemon
  - Homepage: https://github.com/pop-os/cosmic-idle
  - Install: `sudo apt-get install cosmic-idle`
  - Install (apt): `sudo apt install cosmic-idle`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-initial-setup**
  - Latest version: 1.0.0~1769031903~22.04~c61b11d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: COSMIC Initial Setup
  - Homepage: https://github.com/pop-os/cosmic-initial-setup
  - Install: `sudo apt-get install cosmic-initial-setup`
  - Install (apt): `sudo apt install cosmic-initial-setup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: appstream-data-pop, apt-config-icons, apt-config-icons-hidpi, apt-config-icons-large, apt-config-icons-large-hidpi, cosmic-icons, libc6 (>= 2.35), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-initial-setup-casper**
  - Latest version: 1.0.0~1769031903~22.04~c61b11d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Disable COSMIC Initial Setup in casper
  - Homepage: https://github.com/pop-os/cosmic-initial-setup
  - Install: `sudo apt-get install cosmic-initial-setup-casper`
  - Install (apt): `sudo apt install cosmic-initial-setup-casper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: extra
  - depends: casper

  </details>

- **cosmic-justfiles**
  - Latest version: 1.0.0-beta1~1759415683~22.04~d6fcdd9
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Justfile scripts shared between COSMIC and Pop!_OS projects.
  - Homepage: https://github.com/pop-os/cosmic-justfiles
  - Install: `sudo apt-get install cosmic-justfiles`
  - Install (apt): `sudo apt install cosmic-justfiles`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: devel
  - Priority: optional

  </details>

- **cosmic-launcher**
  - Latest version: 0.1.0~1768937073~22.04~0c0c28b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Launcher
  - Homepage: https://github.com/pop-os/cosmic-launcher
  - Install: `sudo apt-get install cosmic-launcher`
  - Install (apt): `sudo apt install cosmic-launcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0), pop-launcher

  </details>

- **cosmic-notifications**
  - Latest version: 0.1.0~1768606049~22.04~23e39ec
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Notifications
  - Homepage: https://github.com/pop-os/cosmic-notifications
  - Install: `sudo apt-get install cosmic-notifications`
  - Install (apt): `sudo apt install cosmic-notifications`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>

- **cosmic-osd**
  - Latest version: 0.1.0~1768580938~22.04~adb6227
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic OSD
  - Homepage: https://github.com/pop-os/cosmic-osd
  - Install: `sudo apt-get install cosmic-osd`
  - Install (apt): `sudo apt install cosmic-osd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libpulse0 (>= 0.99.4), libxkbcommon0 (>= 0.5.0), pulseaudio-utils
  - provides: polkit-1-auth-agent

  </details>

- **cosmic-osk**
  - Latest version: 0.1.0~1769097406~22.04~eee4d04
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: COSMIC On-Screen Keyboard
  - Homepage: https://github.com/pop-os/cosmic-osk
  - Install: `sudo apt-get install cosmic-osk`
  - Install (apt): `sudo apt install cosmic-osk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: appstream-data-pop, apt-config-icons, apt-config-icons-hidpi, apt-config-icons-large, apt-config-icons-large-hidpi, cosmic-icons, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.6.1)

  </details>

- **cosmic-panel**
  - Latest version: 0.1.0~1764714592~22.04~8eb8a1b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: XDG Shell Wrapper Panel for COSMIC
  - Homepage: https://github.com/pop-os/cosmic-panel
  - Install: `sudo apt-get install cosmic-panel`
  - Install (apt): `sudo apt install cosmic-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>

- **cosmic-player**
  - Latest version: 0.1.0~1769031924~22.04~afcfdfd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Media Player
  - Homepage: https://github.com/pop-os/cosmic-player
  - Install: `sudo apt-get install cosmic-player`
  - Install (apt): `sudo apt install cosmic-player`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: gstreamer1.0-plugins-base, gstreamer1.0-plugins-good, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.31.8), libgstreamer-plugins-base1.0-0 (>= 1.10.0), libgstreamer1.0-0 (>= 1.0.0)

  </details>

- **cosmic-randr**
  - Latest version: 0.1.0~1765580395~22.04~741089c
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Display and configure wayland display outputs
  - Homepage: https://github.com/pop-os/cosmic-randr
  - Install: `sudo apt-get install cosmic-randr`
  - Install (apt): `sudo apt install cosmic-randr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <michael@mmurphy.dev>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-reader**
  - Latest version: 0.1.0~1767109634~22.04~4892355
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Document Reader
  - Homepage: https://github.com/pop-os/cosmic-reader
  - Install: `sudo apt-get install cosmic-reader`
  - Install (apt): `sudo apt install cosmic-reader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libfontconfig1 (>= 2.12.6), libgcc-s1 (>= 4.2), libgumbo1 (>= 0.9.2), libharfbuzz0b (>= 0.9.42), libjbig2dec0 (>= 0.16+20190905), libjpeg8 (>= 8c), libopenjp2-7 (>= 2.0.0), zlib1g (>= 1:1.2.0)

  </details>

- **cosmic-screenshot**
  - Latest version: 0.1.0~1768581111~22.04~01af29d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic Screenshot Utility
  - Homepage: https://github.com/pop-os/cosmic-screenshot
  - Install: `sudo apt-get install cosmic-screenshot`
  - Install (apt): `sudo apt install cosmic-screenshot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>

- **cosmic-session**
  - Latest version: 1.0.0~1769099409~22.04~3506cfc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: The session for the COSMIC desktop
  - Homepage: https://github.com/pop-os/cosmic-session
  - Install: `sudo apt-get install cosmic-session`
  - Install (apt): `sudo apt install cosmic-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: cosmic-app-library, cosmic-applets, cosmic-bg, cosmic-comp, cosmic-files, cosmic-greeter, cosmic-icons, cosmic-idle, cosmic-launcher, cosmic-notifications, cosmic-osd, cosmic-panel, cosmic-randr, cosmic-screenshot, cosmic-settings, cosmic-settings-daemon, cosmic-workspaces, dconf-gsettings-backend | gsettings-backend, fonts-open-sans, gnome-keyring, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libsecret-1-0, pop-fonts, switcheroo-control, xdg-desktop-portal-cosmic, xwayland
  - recommends: cosmic-edit, cosmic-player, cosmic-store, cosmic-term, cosmic-wallpapers, orca, system-config-printer

  </details>

- **cosmic-settings**
  - Latest version: 0.1.0~1741529292~22.04~7cf3f68
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Settings application for the COSMIC desktop environment
  - Homepage: https://github.com/pop-os/cosmic-settings
  - Install: `sudo apt-get install cosmic-settings`
  - Install (apt): `sudo apt install cosmic-settings`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: accountsservice, cosmic-randr, gettext, iso-codes, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libpipewire-0.3-0 (>= 0.3.1), libpulse0 (>= 0.99.4), libudev1 (>= 183), libxkbcommon0 (>= 0.5.0), network-manager-gnome, network-manager-openvpn, network-manager-openvpn-gnome, xkb-data
  - recommends: adw-gtk3

  </details>

- **cosmic-settings-daemon**
  - Latest version: 0.1.0~1767386013~22.04~ef024bf
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic settings daemon
  - Homepage: https://github.com/pop-os/cosmic-settings-daemon
  - Install: `sudo apt-get install cosmic-settings-daemon`
  - Install (apt): `sudo apt install cosmic-settings-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: acpid, adw-gtk3, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libpulse0 (>= 0.99.4), libudev1 (>= 183), pop-sound-theme
  - recommends: playerctl

  </details>

- **cosmic-store**
  - Latest version: 0.1.0~1769031948~22.04~25ca887
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: COSMIC Store
  - Homepage: https://github.com/pop-os/cosmic-store
  - Install: `sudo apt-get install cosmic-store`
  - Install (apt): `sudo apt install cosmic-store`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: appstream-data-pop, apt-config-icons, apt-config-icons-hidpi, apt-config-icons-large, apt-config-icons-large-hidpi, cosmic-icons, libc6 (>= 2.35), libflatpak0 (>= 1.3.4), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.31.8), libssl3 (>= 3.0.0~~alpha1), libxkbcommon0 (>= 0.5.0)

  </details>

- **cosmic-term**
  - Latest version: 0.1.0~1769031974~22.04~bc32c66
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: COSMIC Terminal
  - Homepage: https://github.com/pop-os/cosmic-term
  - Install: `sudo apt-get install cosmic-term`
  - Install (apt): `sudo apt install cosmic-term`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)
  - provides: x-terminal-emulator

  </details>

- **cosmic-wallpapers**
  - Latest version: 1.0.0~1744123997~22.04~189c2c6
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: COSMIC Wallpapers
  - Homepage: https://github.com/pop-os/cosmic-wallpapers
  - Install: `sudo apt-get install cosmic-wallpapers`
  - Install (apt): `sudo apt install cosmic-wallpapers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: x11
  - Priority: optional
  - provides: ubuntu-wallpapers

  </details>

- **cosmic-workspaces**
  - Latest version: 0.1.0~1741415076~22.04~6b6bf45
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic workspaces
  - Homepage: https://github.com/pop-os/cosmic-workspaces-epoch
  - Install: `sudo apt-get install cosmic-workspaces`
  - Install (apt): `sudo apt install cosmic-workspaces`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgbm1 (>= 21.1.0), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>


### <a id="packages-D"></a>D

- **dh-modaliases**
  - Latest version: 1:0.9.6.2~0.22.04.8pop0~1744993802~22.04~6b6b6f8
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: debhelper extension for scanning kernel module aliases
  - Install: `sudo apt-get install dh-modaliases`
  - Install (apt): `sudo apt install dh-modaliases`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: perl:any

  </details>

- **directx-headers-dev**
  - Latest version: 1.614.1-1pop1~1741725921~22.04~7337a9f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Direct3D 12 headers
  - Homepage: https://github.com/microsoft/DirectX-Headers
  - Install: `sudo apt-get install directx-headers-dev`
  - Install (apt): `sudo apt install directx-headers-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: graphics
  - Priority: optional

  </details>

- **distinst**
  - Latest version: 0.3.2~1760478339~22.04~69dac84
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Distribution Installer CLI
  - Homepage: https://github.com/pop-os/distinst
  - Install: `sudo apt-get install distinst`
  - Install (apt): `sudo apt install distinst`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libdistinst (= 0.3.2~1760478339~22.04~69dac84), libgcc-s1 (>= 4.2), libparted2 (>= 3.1)

  </details>

- **distinst-v2**
  - Latest version: 0.1.0~1711504823~22.04~e95fdb9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Distribution Installer DBus Service
  - Homepage: https://github.com/pop-os/distinst-v2
  - Install: `sudo apt-get install distinst-v2`
  - Install (apt): `sudo apt install distinst-v2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: admin
  - Priority: optional
  - depends: btrfs-progs, coreutils, cryptsetup, dmraid, dmsetup, dosfstools, e2fsprogs, f2fs-tools, fatresize, gettext, grub2-common, iso-codes, kpartx, kpartx-boot, libc6 (>= 2.34), libcryptsetup12 (>= 2:1.4), libgcc-s1 (>= 4.2), libudev1 (>= 183), locales, lvm2, mount, ntfs-3g, rsync, squashfs-tools, systemd-container, util-linux, xfsprogs

  </details>


### <a id="packages-F"></a>F

- **fglrx-pxpress**
  - Latest version: 1:0.9.6.2~0.22.04.8pop0~1744993802~22.04~6b6b6f8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: transitional package for ubuntu-drivers-common
  - Install: `sudo apt-get install fglrx-pxpress`
  - Install (apt): `sudo apt install fglrx-pxpress`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: oldlibs
  - Priority: extra
  - depends: ubuntu-drivers-common

  </details>

- **firefox**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox`
  - Install (apt): `sudo apt install firefox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.13.7), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libstdc++6 (>= 12), libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-shm0, libxcb1, libxcomposite1 (>= 1:0.4.5), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxi6, libxrandr2 (>= 2:1.4.0), libxrender1

  </details>

- **firefox-locale-af**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for af
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-af`
  - Install (apt): `sudo apt install firefox-locale-af`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-af-base

  </details>

- **firefox-locale-an**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for an
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-an`
  - Install (apt): `sudo apt install firefox-locale-an`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-an-base

  </details>

- **firefox-locale-ar**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ar
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ar`
  - Install (apt): `sudo apt install firefox-locale-ar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ar-base

  </details>

- **firefox-locale-ast**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ast
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ast`
  - Install (apt): `sudo apt install firefox-locale-ast`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ast-base

  </details>

- **firefox-locale-az**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for az
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-az`
  - Install (apt): `sudo apt install firefox-locale-az`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-az-base

  </details>

- **firefox-locale-be**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for be
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-be`
  - Install (apt): `sudo apt install firefox-locale-be`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-be-base

  </details>

- **firefox-locale-bg**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for bg
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-bg`
  - Install (apt): `sudo apt install firefox-locale-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-bg-base

  </details>

- **firefox-locale-bn**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for bn
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-bn`
  - Install (apt): `sudo apt install firefox-locale-bn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-bn-base

  </details>

- **firefox-locale-br**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for br
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-br`
  - Install (apt): `sudo apt install firefox-locale-br`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-br-base

  </details>

- **firefox-locale-bs**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for bs
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-bs`
  - Install (apt): `sudo apt install firefox-locale-bs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-bs-base

  </details>

- **firefox-locale-ca**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ca
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ca`
  - Install (apt): `sudo apt install firefox-locale-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ca-base

  </details>

- **firefox-locale-cak**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cak
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-cak`
  - Install (apt): `sudo apt install firefox-locale-cak`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-cak-base

  </details>

- **firefox-locale-cs**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cs
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-cs`
  - Install (apt): `sudo apt install firefox-locale-cs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-cs-base

  </details>

- **firefox-locale-cy**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cy
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-cy`
  - Install (apt): `sudo apt install firefox-locale-cy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-cy-base

  </details>

- **firefox-locale-da**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for da
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-da`
  - Install (apt): `sudo apt install firefox-locale-da`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-da-base

  </details>

- **firefox-locale-de**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for de
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-de`
  - Install (apt): `sudo apt install firefox-locale-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-de-base

  </details>

- **firefox-locale-el**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for el
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-el`
  - Install (apt): `sudo apt install firefox-locale-el`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-el-base

  </details>

- **firefox-locale-en**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for en
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-en`
  - Install (apt): `sudo apt install firefox-locale-en`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-en-base

  </details>

- **firefox-locale-eo**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for eo
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-eo`
  - Install (apt): `sudo apt install firefox-locale-eo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-eo-base

  </details>

- **firefox-locale-es**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for es
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-es`
  - Install (apt): `sudo apt install firefox-locale-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-es-base

  </details>

- **firefox-locale-et**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for et
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-et`
  - Install (apt): `sudo apt install firefox-locale-et`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-et-base

  </details>

- **firefox-locale-eu**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for eu
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-eu`
  - Install (apt): `sudo apt install firefox-locale-eu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-eu-base

  </details>

- **firefox-locale-fa**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fa
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-fa`
  - Install (apt): `sudo apt install firefox-locale-fa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-fa-base

  </details>

- **firefox-locale-fi**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fi
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-fi`
  - Install (apt): `sudo apt install firefox-locale-fi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-fi-base

  </details>

- **firefox-locale-fr**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fr
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-fr`
  - Install (apt): `sudo apt install firefox-locale-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-fr-base

  </details>

- **firefox-locale-fy**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fy
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-fy`
  - Install (apt): `sudo apt install firefox-locale-fy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-fy-base

  </details>

- **firefox-locale-ga**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ga
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ga`
  - Install (apt): `sudo apt install firefox-locale-ga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ga-base

  </details>

- **firefox-locale-gd**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gd
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-gd`
  - Install (apt): `sudo apt install firefox-locale-gd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-gd-base

  </details>

- **firefox-locale-gl**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gl
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-gl`
  - Install (apt): `sudo apt install firefox-locale-gl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-gl-base

  </details>

- **firefox-locale-gn**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gn
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-gn`
  - Install (apt): `sudo apt install firefox-locale-gn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-gn-base

  </details>

- **firefox-locale-gu**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gu
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-gu`
  - Install (apt): `sudo apt install firefox-locale-gu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-gu-base

  </details>

- **firefox-locale-he**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for he
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-he`
  - Install (apt): `sudo apt install firefox-locale-he`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-he-base

  </details>

- **firefox-locale-hi**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hi
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-hi`
  - Install (apt): `sudo apt install firefox-locale-hi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-hi-base

  </details>

- **firefox-locale-hr**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hr
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-hr`
  - Install (apt): `sudo apt install firefox-locale-hr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-hr-base

  </details>

- **firefox-locale-hsb**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hsb
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-hsb`
  - Install (apt): `sudo apt install firefox-locale-hsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-hsb-base

  </details>

- **firefox-locale-hu**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hu
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-hu`
  - Install (apt): `sudo apt install firefox-locale-hu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-hu-base

  </details>

- **firefox-locale-hy**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hy
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-hy`
  - Install (apt): `sudo apt install firefox-locale-hy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-hy-base

  </details>

- **firefox-locale-ia**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ia
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ia`
  - Install (apt): `sudo apt install firefox-locale-ia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ia-base

  </details>

- **firefox-locale-id**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for id
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-id`
  - Install (apt): `sudo apt install firefox-locale-id`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-id-base

  </details>

- **firefox-locale-is**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for is
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-is`
  - Install (apt): `sudo apt install firefox-locale-is`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-is-base

  </details>

- **firefox-locale-it**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for it
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-it`
  - Install (apt): `sudo apt install firefox-locale-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-it-base

  </details>

- **firefox-locale-ja**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ja
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ja`
  - Install (apt): `sudo apt install firefox-locale-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ja-base

  </details>

- **firefox-locale-ka**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ka
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ka`
  - Install (apt): `sudo apt install firefox-locale-ka`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ka-base

  </details>

- **firefox-locale-kab**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for kab
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-kab`
  - Install (apt): `sudo apt install firefox-locale-kab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-kab-base

  </details>

- **firefox-locale-kk**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for kk
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-kk`
  - Install (apt): `sudo apt install firefox-locale-kk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-kk-base

  </details>

- **firefox-locale-km**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for km
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-km`
  - Install (apt): `sudo apt install firefox-locale-km`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-km-base

  </details>

- **firefox-locale-kn**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for kn
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-kn`
  - Install (apt): `sudo apt install firefox-locale-kn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-kn-base

  </details>

- **firefox-locale-ko**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ko
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ko`
  - Install (apt): `sudo apt install firefox-locale-ko`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ko-base

  </details>

- **firefox-locale-lt**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for lt
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-lt`
  - Install (apt): `sudo apt install firefox-locale-lt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-lt-base

  </details>

- **firefox-locale-lv**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for lv
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-lv`
  - Install (apt): `sudo apt install firefox-locale-lv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-lv-base

  </details>

- **firefox-locale-mk**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for mk
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-mk`
  - Install (apt): `sudo apt install firefox-locale-mk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-mk-base

  </details>

- **firefox-locale-mr**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for mr
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-mr`
  - Install (apt): `sudo apt install firefox-locale-mr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-mr-base

  </details>

- **firefox-locale-ms**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ms
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ms`
  - Install (apt): `sudo apt install firefox-locale-ms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ms-base

  </details>

- **firefox-locale-my**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for my
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-my`
  - Install (apt): `sudo apt install firefox-locale-my`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-my-base

  </details>

- **firefox-locale-nb**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nb
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-nb`
  - Install (apt): `sudo apt install firefox-locale-nb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-nb-base

  </details>

- **firefox-locale-ne**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ne
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ne`
  - Install (apt): `sudo apt install firefox-locale-ne`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ne-base

  </details>

- **firefox-locale-nl**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nl
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-nl`
  - Install (apt): `sudo apt install firefox-locale-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-nl-base

  </details>

- **firefox-locale-nn**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nn
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-nn`
  - Install (apt): `sudo apt install firefox-locale-nn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-nn-base

  </details>

- **firefox-locale-oc**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for oc
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-oc`
  - Install (apt): `sudo apt install firefox-locale-oc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-oc-base

  </details>

- **firefox-locale-pa**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pa
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-pa`
  - Install (apt): `sudo apt install firefox-locale-pa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-pa-base

  </details>

- **firefox-locale-pl**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pl
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-pl`
  - Install (apt): `sudo apt install firefox-locale-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-pl-base

  </details>

- **firefox-locale-pt**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pt
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-pt`
  - Install (apt): `sudo apt install firefox-locale-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-pt-base

  </details>

- **firefox-locale-ro**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ro
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ro`
  - Install (apt): `sudo apt install firefox-locale-ro`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ro-base

  </details>

- **firefox-locale-ru**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ru
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ru`
  - Install (apt): `sudo apt install firefox-locale-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ru-base

  </details>

- **firefox-locale-si**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for si
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-si`
  - Install (apt): `sudo apt install firefox-locale-si`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-si-base

  </details>

- **firefox-locale-sk**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sk
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-sk`
  - Install (apt): `sudo apt install firefox-locale-sk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-sk-base

  </details>

- **firefox-locale-sl**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sl
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-sl`
  - Install (apt): `sudo apt install firefox-locale-sl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-sl-base

  </details>

- **firefox-locale-sq**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sq
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-sq`
  - Install (apt): `sudo apt install firefox-locale-sq`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-sq-base

  </details>

- **firefox-locale-sr**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sr
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-sr`
  - Install (apt): `sudo apt install firefox-locale-sr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-sr-base

  </details>

- **firefox-locale-sv**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sv
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-sv`
  - Install (apt): `sudo apt install firefox-locale-sv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-sv-base

  </details>

- **firefox-locale-szl**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for szl
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-szl`
  - Install (apt): `sudo apt install firefox-locale-szl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-szl-base

  </details>

- **firefox-locale-ta**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ta
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ta`
  - Install (apt): `sudo apt install firefox-locale-ta`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ta-base

  </details>

- **firefox-locale-te**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for te
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-te`
  - Install (apt): `sudo apt install firefox-locale-te`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-te-base

  </details>

- **firefox-locale-th**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for th
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-th`
  - Install (apt): `sudo apt install firefox-locale-th`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-th-base

  </details>

- **firefox-locale-tr**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for tr
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-tr`
  - Install (apt): `sudo apt install firefox-locale-tr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-tr-base

  </details>

- **firefox-locale-uk**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for uk
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-uk`
  - Install (apt): `sudo apt install firefox-locale-uk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-uk-base

  </details>

- **firefox-locale-ur**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ur
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-ur`
  - Install (apt): `sudo apt install firefox-locale-ur`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-ur-base

  </details>

- **firefox-locale-uz**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for uz
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-uz`
  - Install (apt): `sudo apt install firefox-locale-uz`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-uz-base

  </details>

- **firefox-locale-vi**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for vi
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-vi`
  - Install (apt): `sudo apt install firefox-locale-vi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-vi-base

  </details>

- **firefox-locale-xh**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for xh
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-xh`
  - Install (apt): `sudo apt install firefox-locale-xh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-xh-base

  </details>

- **firefox-locale-zh-hans**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for zh-hans
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-zh-hans`
  - Install (apt): `sudo apt install firefox-locale-zh-hans`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-zh-hans-base

  </details>

- **firefox-locale-zh-hant**
  - Latest version: 1:147.0.1~1768605609~22.04~eb2a83d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for zh-hant
  - Homepage: https://github.com/pop-os/packaging-firefox
  - Install: `sudo apt-get install firefox-locale-zh-hant`
  - Install (apt): `sudo apt install firefox-locale-zh-hant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: firefox (= 1:147.0.1~1768605609~22.04~eb2a83d)
  - replaces: language-pack-zh-hant-base

  </details>

- **firmware-manager**
  - Latest version: 0.1.2~1752774996~22.04~a45bdc7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware Manager application
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install firmware-manager`
  - Install (apt): `sudo apt install firmware-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: firmware-manager-shared, libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libssl3 (>= 3.0.0~~alpha1), libudev1 (>= 183)
  - provides: firmware-manager-virtual

  </details>

- **firmware-manager-notify**
  - Latest version: 0.1.2~1752774996~22.04~a45bdc7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware Manager application
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install firmware-manager-notify`
  - Install (apt): `sudo apt install firmware-manager-notify`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dbus, libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0~~alpha1)

  </details>

- **firmware-manager-shared**
  - Latest version: 0.1.2~1752774996~22.04~a45bdc7
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Files and dependencies shared between firmware-manager and libfirmware-manager installs
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install firmware-manager-shared`
  - Install (apt): `sudo apt install firmware-manager-shared`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: firmware-manager-notify

  </details>

- **flatpak**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install flatpak`
  - Install (apt): `sudo apt install flatpak`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: admin
  - Priority: optional
  - depends: adduser, bubblewrap (>= 0.5.0), default-dbus-system-bus | dbus-system-bus, fuse3, libappstream4 (>= 0.10.0), libarchive13 (>= 3.0.4), libc6 (>= 2.34), libcurl3-gnutls (>= 7.16.2), libdconf1 (>= 0.26.0), libfuse3-3 (>= 3.2.3), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.67.3+git20210214), libjson-glib-1.0-0 (>= 1.5.2), libmalcontent-0-0 (>= 0.6.0), libostree-1-1 (>= 2020.8), libpolkit-agent-1-0 (>= 0.105), libpolkit-gobject-1-0 (>= 0.101), libseccomp2 (>= 2.5.2), libsystemd0, libxau6 (>= 1:1.0.9), libxml2 (>= 2.7.4), libzstd1 (>= 1.4.0), xdg-dbus-proxy (>= 0.1.0)
  - recommends: ca-certificates, desktop-file-utils, gtk-update-icon-cache, hicolor-icon-theme, libpam-systemd, p11-kit, polkitd, shared-mime-info, xdg-desktop-portal (>= 1.6), xdg-desktop-portal-gtk (>= 1.6) | xdg-desktop-portal-backend, xdg-user-dirs
  - suggests: avahi-daemon, malcontent-gui
  - conflicts: xdg-app
  - replaces: xdg-app

  </details>

- **flatpak-tests**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps (tests)
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install flatpak-tests`
  - Install (apt): `sudo apt install flatpak-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: misc
  - Priority: optional
  - depends: attr, ca-certificates, dbus-daemon, desktop-file-utils, flatpak (= 1.14.6-1~1713976503~22.04~1a1043a), gnupg, gtk-update-icon-cache, hicolor-icon-theme, libappstream4 (>= 0.10.0), libarchive13 (>= 3.0), libc6 (>= 2.34), libcurl3-gnutls (>= 7.16.2), libdconf1 (>= 0.14.0), libflatpak0 (>= 1.13.3), libfuse3-3 (>= 3.2.3), libglib2.0-0 (>= 2.57.2), libjson-glib-1.0-0 (>= 1.5.2), libmalcontent-0-0 (>= 0.6.0), libostree-1-1 (>= 2020.8), libpolkit-gobject-1-0 (>= 0.94), libseccomp2 (>= 2.5.2), libxau6 (>= 1:1.0.9), ostree (>= 2020.8), polkitd, shared-mime-info, socat
  - recommends: python3

  </details>

- **fwts**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: FirmWare Test Suite
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install fwts`
  - Install (apt): `sudo apt install fwts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: fwts-efi-runtime-dkms (= 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7), libbsd0 (>= 0.0), libc6 (>= 2.34), libfdt1 (>= 1.6.1), libfwts1 (= 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7), libfwtsacpica1 (= 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7), libfwtsiasl1 (= 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7), pciutils
  - suggests: dmidecode

  </details>

- **fwts-efi-runtime-dkms**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware Test Suite UEFI Runtime Service kernel driver
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install fwts-efi-runtime-dkms`
  - Install (apt): `sudo apt install fwts-efi-runtime-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)

  </details>

- **fwts-frontend**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware Test Suite frontend interface
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install fwts-frontend`
  - Install (apt): `sudo apt install fwts-frontend`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: dialog, fwts

  </details>

- **fwupd**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd`
  - Install (apt): `sudo apt install fwupd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: libarchive13 (>= 3.2.1), libc6 (>= 2.34), libcbor0.8 (>= 0.5.0), libcurl3-gnutls (>= 7.63.0), libflashrom1, libfwupd2 (>= 1.9.20), libglib2.0-0 (>= 2.70.0), libgnutls30 (>= 3.7.3), libgudev-1.0-0 (>= 165), libgusb2 (>= 0.3.8), libjcat1 (>= 0.1.3), libjson-glib-1.0-0 (>= 1.5.2), liblzma5 (>= 5.1.1alpha+20120614), libmbim-glib4 (>= 1.27~git20220823), libmbim-proxy, libmm-glib0 (>= 1.10.4), libpolkit-gobject-1-0 (>= 0.99), libprotobuf-c1 (>= 1.3.1), libqmi-glib5 (>= 1.31~git20220823), libqmi-proxy, libsqlite3-0 (>= 3.6.1), libsystemd0, libtss2-esys-3.0.2-0 (>= 2.3.1), libxmlb2 (>= 0.3.2), shared-mime-info, systemd-sysusers, zlib1g (>= 1:1.1.4)
  - recommends: bolt, dbus, fwupd-signed, jq, python3, secureboot-db, udisks2
  - suggests: gir1.2-fwupd-2.0
  - conflicts: fwupdate-amd64-signed, fwupdate-arm64-signed, fwupdate-armhf-signed, fwupdate-i386-signed
  - breaks: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - replaces: fwupdate (<< 12-7), gir1.2-dfu-1.0 (<< 0.9.7-1), libdfu-dev (<< 0.9.7-1), libdfu1 (<< 0.9.7-1)
  - provides: fwupdate

  </details>

- **fwupd-amd64-signed-template**
  - Latest version: 1:1.4-1pop0~1728056142~22.04~abf83a6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Template for signed fwupd package
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-amd64-signed-template`
  - Install (apt): `sudo apt install fwupd-amd64-signed-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: make | build-essential | dpkg-dev

  </details>

- **fwupd-doc**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Firmware update daemon documentation (HTML format)
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd-doc`
  - Install (apt): `sudo apt install fwupd-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: doc
  - Priority: optional

  </details>

- **fwupd-signed**
  - Latest version: 1:1.4-1pop0~1728056142~22.04~abf83a6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Placeholder for signed fwupd package
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-signed`
  - Install (apt): `sudo apt install fwupd-signed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: fwupd-unsigned (= 1:1.4-1pop0~1728056142~22.04~abf83a6)

  </details>

- **fwupd-tests**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Test suite for firmware update daemon
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install fwupd-tests`
  - Install (apt): `sudo apt install fwupd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates, dbus-x11, fwupd, gnome-desktop-testing, libc6 (>= 2.34), libcurl3-gnutls (>= 7.63.0), libfwupd2 (>= 1.9.10), libglib2.0-0 (>= 2.67.3+git20210214), libgnutls30 (>= 3.7.3), libgudev-1.0-0 (>= 146), libgusb2 (>= 0.3.6), libjson-glib-1.0-0 (>= 1.5.2), libxmlb2 (>= 0.1.5), polkitd | policykit-1, python3, python3-gi, python3-requests
  - breaks: fwupd (<< 0.9.4-1)
  - replaces: fwupd (<< 0.9.4-1)

  </details>

- **fwupd-unsigned**
  - Latest version: 1:1.4-1pop0~1728056142~22.04~abf83a6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware update daemon (Unsigned EFI binaries)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-unsigned`
  - Install (apt): `sudo apt install fwupd-unsigned`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - recommends: fwupd-signed
  - breaks: fwupd (<< 1.7.1)
  - replaces: fwupd (<< 1.7.1)

  </details>

- **fwupd-unsigned-dev**
  - Latest version: 1:1.4-1pop0~1728056142~22.04~abf83a6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware update daemon (Development information)
  - Homepage: https://github.com/fwupd/fwupd-efi
  - Install: `sudo apt-get install fwupd-unsigned-dev`
  - Install (apt): `sudo apt install fwupd-unsigned-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: fwupd-unsigned (= 1:1.4-1pop0~1728056142~22.04~abf83a6)

  </details>


### <a id="packages-G"></a>G

- **gdm3**
  - Latest version: 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GNOME Display Manager
  - Homepage: https://wiki.gnome.org/Projects/GDM/
  - Install: `sudo apt-get install gdm3`
  - Install (apt): `sudo apt install gdm3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: accountsservice (>= 0.6.35), adduser, bash (>= 4.3), dbus-bin | systemd-sysv, dbus-daemon, dconf-cli (>= 0.20), dconf-gsettings-backend (>= 0.20), debconf (>= 0.5) | debconf-2.0, default-dbus-system-bus | dbus-system-bus, default-logind | logind, gir1.2-gdm-1.0 (= 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40), gnome-session-bin (>= 3.37.0), gnome-session-common (>= 3.37.0-2~), gnome-settings-daemon (>= 3.37.0), gnome-shell (>= 3.37.90), gsettings-desktop-schemas, libaccountsservice0 (>= 0.6.55), libaudit1 (>= 1:2.2.1), libc6 (>= 2.34), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgdm1 (= 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40), libglib2.0-0 (>= 2.68.0), libglib2.0-bin (>= 2.35.0), libgtk-3-0 (>= 3.0.0), libgudev-1.0-0 (>= 232), libkeyutils1 (>= 1.5.9), libpam-modules (>= 0.72-1), libpam-runtime (>= 0.76-13.1), libpam0g (>= 0.99.7.1), librsvg2-common, libselinux1 (>= 3.1~), libsystemd0, libx11-6, libxau6 (>= 1:1.0.9), libxcb1, libxdmcp6, lsb-base (>= 3.2-14), policykit-1 (>= 0.105-5~), procps, ubuntu-session | gnome-session | x-session-manager | x-window-manager | x-terminal-emulator, ucf, x11-common (>= 1:7.6+11), x11-xserver-utils
  - recommends: at-spi2-core, ubuntu-session | gnome-session | x-session-manager, x11-xkb-utils, xserver-xephyr, xserver-xorg, zenity
  - suggests: libpam-fprintd (>= 0.8.0-2), libpam-gnome-keyring, libpam-pkcs11, libpam-sss (>= 2.3.0-1), orca
  - breaks: pulseaudio (<< 11.1-2), xserver-xorg-core (<< 2:1.17.2-2~)
  - provides: x-display-manager

  </details>

- **gir1.2-accountsservice-1.0**
  - Latest version: 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection data for AccountService
  - Homepage: https://www.freedesktop.org/wiki/Software/AccountsService/
  - Install: `sudo apt-get install gir1.2-accountsservice-1.0`
  - Install (apt): `sudo apt install gir1.2-accountsservice-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 1.34), libaccountsservice0 (>= 0.6.55)

  </details>

- **gir1.2-appstream-1.0**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Library to access AppStream services (introspection data)
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install gir1.2-appstream-1.0`
  - Install (apt): `sudo apt install gir1.2-appstream-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 1.62), libappstream4 (= 0.15.2-2pop1~1686239344~22.04~e648e85)

  </details>

- **gir1.2-appstreamcompose-1.0**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Building blocks to compose AppStream metadata (introspection data)
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install gir1.2-appstreamcompose-1.0`
  - Install (apt): `sudo apt install gir1.2-appstreamcompose-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-appstream-1.0 (= 0.15.2-2pop1~1686239344~22.04~e648e85), gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0 (>= 1.62), libappstream-compose0 (= 0.15.2-2pop1~1686239344~22.04~e648e85)

  </details>

- **gir1.2-flatpak-1.0**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps (introspection)
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install gir1.2-flatpak-1.0`
  - Install (apt): `sudo apt install gir1.2-flatpak-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, libflatpak0 (>= 1.13.3)

  </details>

- **gir1.2-fwupd-2.0**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection data for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install gir1.2-fwupd-2.0`
  - Install (apt): `sudo apt install gir1.2-fwupd-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-json-1.0 (>= 1.1.1), libfwupd2 (>= 1.9.20)

  </details>

- **gir1.2-gdm-1.0**
  - Latest version: 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection data for the GNOME Display Manager
  - Homepage: https://wiki.gnome.org/Projects/GDM/
  - Install: `sudo apt-get install gir1.2-gdm-1.0`
  - Install (apt): `sudo apt install gir1.2-gdm-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 0.9.12), libgdm1 (>= 3.33.4)
  - conflicts: gir1.2-gdm3
  - replaces: gir1.2-gdm3

  </details>

- **gir1.2-goa-1.0**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Introspection data for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install gir1.2-goa-1.0`
  - Install (apt): `sudo apt install gir1.2-goa-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 0.9.3), libgoa-1.0-0b (>= 3.35.90)

  </details>

- **gir1.2-granite-1.0**
  - Latest version: 6.2.0pop1~1677598542~22.04~66414db
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: extension of GTK+ libraries (introspection files)
  - Homepage: https://github.com/elementary/granite
  - Install: `sudo apt-get install gir1.2-granite-1.0`
  - Install (apt): `sudo apt install gir1.2-granite-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cody Garver <cody@elementary.io>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-freedesktop, gir1.2-gdkpixbuf-2.0, gir1.2-gee-0.8, gir1.2-glib-2.0, gir1.2-gtk-3.0 (>= 3.22), gir1.2-pango-1.0

  </details>

- **gir1.2-mutter-10**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection data for Mutter
  - Install: `sudo apt-get install gir1.2-mutter-10`
  - Install (apt): `sudo apt install gir1.2-mutter-10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-atk-1.0, gir1.2-freedesktop (>= 0.9.12), gir1.2-gdesktopenums-3.0 (>= 40~alpha), gir1.2-glib-2.0 (>= 0.9.12), gir1.2-graphene-1.0 (>= 1.10.2), gir1.2-gtk-3.0 (>= 3.19.8), gir1.2-json-1.0 (>= 0.13.2-1~), gir1.2-pango-1.0 (>= 1.46.0), libmutter-10-0 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16)

  </details>

- **gir1.2-wp-0.4**
  - Latest version: 0.4.17~1701792620~22.04~e8b4d60
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection files for WirePlumber
  - Homepage: https://gitlab.freedesktop.org/pipewire/wireplumber
  - Install: `sudo apt-get install gir1.2-wp-0.4`
  - Install (apt): `sudo apt install gir1.2-wp-0.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@alioth-lists.debian.net>
  - Section: introspection
  - Priority: optional
  - depends: libwireplumber-0.4-0 (= 0.4.17~1701792620~22.04~e8b4d60)

  </details>

- **gir1.2-xmlb-2.0**
  - Latest version: 0.3.10-2pop1~1686237323~22.04~f779d98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GObject introspection data for libxmlb
  - Homepage: https://github.com/hughsie/libxmlb
  - Install: `sudo apt-get install gir1.2-xmlb-2.0`
  - Install (apt): `sudo apt install gir1.2-xmlb-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI team <debian-efi@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, libxmlb2 (>= 0.3.4)

  </details>

- **gnome-control-center**
  - Latest version: 1:41.7-0ubuntu0.22.04.9pop0~1729817737~22.04~168857a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: utilities to configure the GNOME desktop
  - Install: `sudo apt-get install gnome-control-center`
  - Install (apt): `sudo apt install gnome-control-center`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: accountsservice, apg, colord (>= 0.1.30), desktop-file-utils, gedit-common, gnome-control-center-data (<< 1:42~), gnome-control-center-data (>= 1:41.7-0ubuntu0.22.04.9pop0~1729817737~22.04~168857a), gnome-desktop3-data, gnome-remote-desktop (>= 42), gnome-settings-daemon (>= 41), gsettings-desktop-schemas (>= 42~), language-selector-gnome (>= 0.179~), libaccountsservice0 (>= 0.6.40), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.14.0), libcheese-gtk25 (>= 3.18.0), libcheese8 (>= 3.28.0), libcolord-gtk1 (>= 0.1.24), libcolord2 (>= 1.4.3), libcups2 (>= 1.7.0), libepoxy0 (>= 1.0), libfirmware-manager (>= 0.1.2~), libfontconfig1 (>= 2.12.6), libgcr-base-3-1 (>= 3.8.0), libgdk-pixbuf-2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.70.0), libgnome-bluetooth13 (>= 3.18.2), libgnome-desktop-3-19 (>= 3.33.4), libgnutls30 (>= 3.7.0), libgoa-1.0-0b (>= 3.25.3), libgoa-backend-1.0-1 (>= 3.25.3), libgsound0 (>= 1.0.1), libgtk-3-0 (>= 3.22.20), libgtop-2.0-11 (>= 2.22.3), libgudev-1.0-0 (>= 232), libhandy-1-0 (>= 1.2.0), libibus-1.0-5 (>= 1.5.2), libkrb5-3 (>= 1.8+dfsg), libmm-glib0 (>= 1.6.8), libnm0 (>= 1.24.0), libnma0 (>= 1.8.0), libpango-1.0-0 (>= 1.37.2), libpangocairo-1.0-0 (>= 1.18.0), libpolkit-gobject-1-0 (>= 0.103), libpop-analytics-panel, libpop-desktop-widget (>= 0.1.0~), libpop-support-panel, libpop-upgrade-gtk, libpulse-mainloop-glib0 (>= 13.0~), libpulse0 (>= 13.0~), libpwquality1 (>= 1.1.0), libs76-hidpi-widget (>= 0.1.1~), libsecret-1-0 (>= 0.7), libsmbclient (>= 2:4.0.3+dfsg1), libsnapd-glib1 (>= 1.58), libudisks2-0 (>= 2.0.0), libupower-glib3 (>= 0.99.8), libwacom9 (>= 2.0.0), libwayland-server0 (>= 1.0.2), libx11-6, libxi6 (>= 2:1.2.99.4), libxml2 (>= 2.7.4), system-config-printer (>= 1.4), whoopsie-preferences
  - recommends: cracklib-runtime, cups-pk-helper, gkbd-capplet, gnome-control-center-faces, gnome-online-accounts (>= 3.25.3), gnome-user-docs, ibus, iso-codes, libcanberra-pulse, network-manager-gnome (>= 0.9.8), policykit-1, pulseaudio-module-bluetooth, rygel | rygel-tracker
  - suggests: gnome-software | gnome-packagekit, gnome-user-share, gstreamer1.0-pulseaudio, libcanberra-gtk-module, libcanberra-gtk3-module, realmd, x11-xserver-utils
  - breaks: gnome-shell (<< 3.37.92)
  - provides: firmware-manager-virtual

  </details>

- **gnome-control-center-data**
  - Latest version: 1:41.7-0ubuntu0.22.04.9pop0~1729817737~22.04~168857a
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: configuration applets for GNOME - data files
  - Install: `sudo apt-get install gnome-control-center-data`
  - Install (apt): `sudo apt install gnome-control-center-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: gnome-control-center (<< 1:3.7.92-2~)
  - replaces: gnome-control-center (<< 1:3.7.92-2~)

  </details>

- **gnome-control-center-dev**
  - Latest version: 1:41.7-0ubuntu0.22.04.9pop0~1729817737~22.04~168857a
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: utilities to configure the GNOME desktop
  - Install: `sudo apt-get install gnome-control-center-dev`
  - Install (apt): `sudo apt install gnome-control-center-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: gnome-control-center-data

  </details>

- **gnome-control-center-faces**
  - Latest version: 1:41.7-0ubuntu0.22.04.9pop0~1729817737~22.04~168857a
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: utilities to configure the GNOME desktop - faces images
  - Install: `sudo apt-get install gnome-control-center-faces`
  - Install (apt): `sudo apt install gnome-control-center-faces`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - conflicts: unity-control-center-faces
  - replaces: unity-control-center-faces
  - provides: unity-control-center-faces

  </details>

- **gnome-disk-utility**
  - Latest version: 42.0-1ubuntu1pop0~1649101396~22.04~6ad316f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: manage and configure disk drives and media
  - Homepage: https://wiki.gnome.org/Apps/Disks
  - Install: `sudo apt-get install gnome-disk-utility`
  - Install (apt): `sudo apt install gnome-disk-utility`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libcanberra-gtk3-0 (>= 0.25), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.43.2), libgtk-3-0 (>= 3.21.5), libhandy-1-0 (>= 1.5.0), liblzma5 (>= 5.1.1alpha+20120614), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.18.0), libpangocairo-1.0-0 (>= 1.14.0), libpwquality1 (>= 1.1.0), libsecret-1-0 (>= 0.7), libsystemd0 (>= 209), libudisks2-0 (>= 2.7.6), udisks2 (>= 2.7.6)
  - breaks: gnome-settings-daemon (<< 3.24)

  </details>

- **gnome-online-accounts**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: service to manage online accounts for the GNOME desktop
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install gnome-online-accounts`
  - Install (apt): `sudo apt install gnome-online-accounts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcom-err2 (>= 1.43.9), libgck-1-0 (>= 2.91.1), libgcr-base-3-1 (>= 3.8.0), libgcr-ui-3-1 (>= 3.8.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.59.0), libgoa-1.0-0b (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libgoa-backend-1.0-1 (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libgtk-3-0 (>= 3.19.12), libharfbuzz0b (>= 0.6.0), libk5crypto3 (>= 1.6.dfsg.2), libkrb5-3 (>= 1.9+dfsg~beta1), libp11-kit0 (>= 0.23.18.1), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), librest-0.7-0 (>= 0.7), libsoup2.4-1 (>= 2.42), libwebkit2gtk-4.0-37 (>= 2.26), libxml2 (>= 2.6.27), python3, python3-macaroonbakery
  - recommends: gnome-control-center (>= 3.6.1)
  - breaks: evolution-data-server (<< 3.22.3)

  </details>

- **gnome-settings-daemon**
  - Latest version: 42.1-1ubuntu3pop0~1661536383~22.04~3fb6384
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: daemon handling the GNOME session settings
  - Install: `sudo apt-get install gnome-settings-daemon`
  - Install (apt): `sudo apt install gnome-settings-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: default-logind | logind, gnome-settings-daemon-common (= 42.1-1ubuntu3pop0~1661536383~22.04~3fb6384), gsettings-desktop-schemas (>= 42~), libaccountsservice0 (>= 0.6.40), libasound2 (>= 1.0.16), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.16), libcolord2 (>= 1.4.5), libcups2 (>= 1.6.0), libfontconfig1 (>= 2.12.6), libgck-1-0 (>= 3.2.2), libgcr-base-3-1 (>= 3.8.0), libgeoclue-2-0 (>= 2.4.0), libgeocode-glib0 (>= 3.10.0), libglib2.0-0 (>= 2.59.0), libgnome-desktop-3-19 (>= 3.37.1), libgtk-3-0 (>= 3.21.5), libgudev-1.0-0 (>= 146), libgweather-4-0 (>= 3.91.0), liblcms2-2 (>= 2.2+git20110628), libmm-glib0 (>= 1.0), libnm0 (>= 1.0.0), libnotify4 (>= 0.7.3), libp11-kit0 (>= 0.23.18.1), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), libpulse-mainloop-glib0 (>= 12.99.3), libpulse0 (>= 12.99.3), libupower-glib3 (>= 0.99.12), libwacom9 (>= 2.0.0), libwayland-client0 (>= 1.0.2), libx11-6, libxext6, libxfixes3 (>= 1:6.0.0), libxi6 (>= 2:1.2.99.4)
  - recommends: iio-sensor-proxy, pulseaudio, x11-xserver-utils
  - suggests: usbguard
  - breaks: afterstep (<< 2.2.12-11.1~), budgie-core (<< 10.4+git20171031.10.g9f71bb8-1.2~), cairo-dock (<< 3.4.1-1.2~), evolution (<< 3.37.3~), gdm3 (<< 3.37.0), gnome-control-center (<< 1:3.25.91), gnome-initial-setup (<< 3.27), gnome-session (<< 3.37.0), gnome-session-flashback (<< 3.26.0-3~), gnome-shell (<< 3.37.90), gnome-shell-extensions (<< 3.27), libgtk-3-0 (<< 3.24.23~), libgtk-4-0 (<< 3.99.1~), libmutter-6-0 (<< 3.37), libmutter-7-0 (<< 3.39), openbox-gnome-session (<< 3.6.1-7~), xmonad (<< 0.13-7~)

  </details>

- **gnome-settings-daemon-common**
  - Latest version: 42.1-1ubuntu3pop0~1661536383~22.04~3fb6384
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: daemon handling the GNOME session settings - common files
  - Install: `sudo apt-get install gnome-settings-daemon-common`
  - Install (apt): `sudo apt install gnome-settings-daemon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: gnome-settings-daemon (<< 3.30.1.2-2~), gnome-settings-daemon-schemas (<< 3.30.1.2-2~)
  - replaces: gnome-settings-daemon (<< 3.30.1.2-2~), gnome-settings-daemon-schemas (<< 3.30.1.2-2~)
  - provides: gnome-settings-daemon-schemas (= 42.1-1ubuntu3pop0~1661536383~22.04~3fb6384)

  </details>

- **gnome-settings-daemon-dev**
  - Latest version: 42.1-1ubuntu3pop0~1661536383~22.04~3fb6384
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Headers for building applications communicating with gnome-settings-daemon
  - Install: `sudo apt-get install gnome-settings-daemon-dev`
  - Install (apt): `sudo apt install gnome-settings-daemon-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev (>= 2.56)

  </details>

- **gnome-shell**
  - Latest version: 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: graphical shell for the GNOME desktop
  - Homepage: https://wiki.gnome.org/Projects/GnomeShell
  - Install: `sudo apt-get install gnome-shell`
  - Install (apt): `sudo apt install gnome-shell`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, evolution-data-server (>= 3.33.1), gir1.2-accountsservice-1.0, gir1.2-adw-1, gir1.2-atk-1.0, gir1.2-atspi-2.0 (>= 2.36), gir1.2-freedesktop, gir1.2-gcr-3 (>= 3.7.5), gir1.2-gdesktopenums-3.0 (>= 3.12), gir1.2-gdkpixbuf-2.0, gir1.2-gdm-1.0 (>= 3.18.2), gir1.2-geoclue-2.0, gir1.2-glib-2.0 (>= 1.56.0), gir1.2-gnomebluetooth-3.0 (>= 3.12.0), gir1.2-gnomedesktop-3.0 (>= 3.35.90), gir1.2-graphene-1.0 (>= 1.10.2), gir1.2-gstreamer-1.0, gir1.2-gtk-3.0 (>= 3.16), gir1.2-gtk-4.0, gir1.2-gweather-3.0 (>= 40.0), gir1.2-ibus-1.0 (>= 1.5.22-2ubuntu2~), gir1.2-mutter-10 (>= 42.9), gir1.2-nm-1.0, gir1.2-nma-1.0, gir1.2-pango-1.0, gir1.2-polkit-1.0, gir1.2-rsvg-2.0, gir1.2-soup-2.4 (>= 2.40.1), gir1.2-upowerglib-1.0 (>= 0.99), gir1.2-webkit2-4.0 (>= 2.16.0), gnome-settings-daemon (>= 40~), gnome-shell-common (= 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e), gsettings-desktop-schemas (>= 42~beta), gstreamer1.0-pipewire (>= 0.3.10), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.14.0), libecal-2.0-1 (>= 3.33.4), libedataserver-1.2-26 (>= 3.33.1), libgcr-base-3-1 (>= 3.8.0), libgdk-pixbuf-2.0-0 (>= 2.23.0), libgirepository-1.0-1 (>= 1.35.9), libgjs0g (>= 1.71.1), libgles2, libglib2.0-0 (>= 2.67.3), libglib2.0-bin (>= 2.53.0), libgnome-autoar-0-0 (>= 0.1.1), libgnome-desktop-3-19 (>= 3.35.90), libgraphene-1.0-0 (>= 1.5.4), libgtk-3-0 (>= 3.21.6), libgtk-4-1 (>= 4.0.0), libical3 (>= 3.0.0), libjson-glib-1.0-0 (>= 1.5.2), libmutter-10-0 (>= 42.9), libnm0 (>= 1.10.4), libpango-1.0-0 (>= 1.37.5), libpangocairo-1.0-0 (>= 1.14.0), libpolkit-agent-1-0 (>= 0.100), libpolkit-gobject-1-0 (>= 0.94), libpulse-mainloop-glib0 (>= 13), libpulse0 (>= 13), libsecret-1-0 (>= 0.7), libsystemd0, libwayland-server0 (>= 1.0.2), libx11-6, libxfixes3, python3, ubuntu-wallpapers
  - recommends: bolt (>= 0.3), gdm3 (>= 3.10.0.1-3~), gkbd-capplet, gnome-control-center (>= 1:3.25.2), gnome-menus, gnome-remote-desktop, gnome-user-docs, ibus, iio-sensor-proxy, switcheroo-control, ubuntu-session | gnome-session, unzip, xserver-xorg-legacy
  - suggests: chrome-gnome-shell, gir1.2-malcontent-0 (>= 0.6.0), gir1.2-telepathyglib-0.12, gir1.2-telepathylogger-0.2 (>= 0.8.0), gnome-backgrounds (>= 3.13.90), gnome-shell-extension-prefs
  - breaks: gnome-session (<< 3.35.3-1ubuntu4~), gnome-shell-extension-appindicator (<< 36), gnome-shell-extension-autohidetopbar (<< 20180511-2~), gnome-shell-extension-caffeine (<< 0~git20171229-3~), gnome-shell-extension-dash-to-panel (<< 43), gnome-shell-extension-dashtodock (<< 70), gnome-shell-extension-desktop-icons (<< 21.04), gnome-shell-extension-desktop-icons-ng (<< 0.16.0~), gnome-shell-extension-multi-monitors (<< 0.00~git20171014.1.df5d6e4-1.1~), gnome-shell-extension-pixelsaver (<< 1.10+git20161217-49f47bf-1.1~), gnome-shell-extension-taskbar (<< 57.0-2.1~), gnome-shell-extension-top-icons-plus (<< 27-3~), gnome-shell-extension-ubuntu-dock (<< 68ubuntu20.10.1), gnome-shell-extension-workspaces-to-dock (<< 54~), gnome-shell-extensions (<< 40.0~), gnome-shell-pomodoro (<< 0.13.4-2.1~), nautilus (<< 1:3.30), yaru-theme-gnome-shell (<< 22.04.1~)
  - provides: notification-daemon, polkit-1-auth-agent

  </details>

- **gnome-shell-common**
  - Latest version: 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: common files for the GNOME graphical shell
  - Homepage: https://wiki.gnome.org/Projects/GnomeShell
  - Install: `sudo apt-get install gnome-shell-common`
  - Install (apt): `sudo apt install gnome-shell-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - recommends: yaru-theme-gnome-shell (>= 22.04.1~)
  - breaks: gnome-shell (<< 3.36.1-6~)
  - replaces: gnome-shell (<< 3.36.1-6~)

  </details>

- **gnome-shell-extension-alt-tab-raise-first-window**
  - Latest version: 0.1.1~1554907039~22.04~0c3e1aa
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to always show workspaces in overview
  - Homepage: https://github.com/system76/alt-tab-raise-first-window
  - Install: `sudo apt-get install gnome-shell-extension-alt-tab-raise-first-window`
  - Install (apt): `sudo apt install gnome-shell-extension-alt-tab-raise-first-window`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.25)

  </details>

- **gnome-shell-extension-always-show-workspaces**
  - Latest version: 0.1.1~1587581300~22.04~f3954d7
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to always show workspaces in overview
  - Homepage: https://github.com/system76/gnome-shell-extension-always-show-workspaces
  - Install: `sudo apt-get install gnome-shell-extension-always-show-workspaces`
  - Install (apt): `sudo apt install gnome-shell-extension-always-show-workspaces`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.25)

  </details>

- **gnome-shell-extension-cosmic-dock**
  - Latest version: 72~ubuntu2pop0~1664903880~22.04~6700449
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Cosmic Dock for GNOME Shell
  - Homepage: https://github.com/pop-os/cosmic-dock
  - Install: `sudo apt-get install gnome-shell-extension-cosmic-dock`
  - Install (apt): `sudo apt install gnome-shell-extension-cosmic-dock`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gnome-shell (<< 43), gnome-shell (>= 40)
  - breaks: gnome-shell-extension-dashtodock, gnome-shell-extension-ubuntu-dock
  - replaces: gnome-shell-extension-dashtodock, gnome-shell-extension-ubuntu-dock

  </details>

- **gnome-shell-extension-cosmic-workspaces**
  - Latest version: 0.1.0~1716422595~22.04~6d90fb4
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to switch to vertical workspace orientation
  - Homepage: https://github.com/pop-os/cosmic-workspaces
  - Install: `sudo apt-get install gnome-shell-extension-cosmic-workspaces`
  - Install (apt): `sudo apt install gnome-shell-extension-cosmic-workspaces`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gnome-shell (>= 40)
  - breaks: gnome-shell-extension-vertical-overview
  - replaces: gnome-shell-extension-vertical-overview

  </details>

- **gnome-shell-extension-do-not-disturb**
  - Latest version: 1.0.0~1765824377~22.04~f8d84d7
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: GNOME Shell extension to prevent notification pop-ups
  - Homepage: https://github.com/pop-os/gnome-shell-extension-do-not-disturb
  - Install: `sudo apt-get install gnome-shell-extension-do-not-disturb`
  - Install (apt): `sudo apt install gnome-shell-extension-do-not-disturb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.26.1)

  </details>

- **gnome-shell-extension-pop-battery-icon-fix**
  - Latest version: 3.5.1~1727801177~22.04~1a575a8
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to prevent notification pop-ups
  - Homepage: https://github.com/pop-os/gnome-shell-extension-pop-battery-icon-fix
  - Install: `sudo apt-get install gnome-shell-extension-pop-battery-icon-fix`
  - Install (apt): `sudo apt install gnome-shell-extension-pop-battery-icon-fix`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.26.1), pop-icon-theme

  </details>

- **gnome-shell-extension-pop-shop-details**
  - Latest version: 0.1.0~1587579004~22.04~11349f6
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to add a Show Details item to applications when Pop Shop is installed
  - Homepage: https://github.com/system76/gnome-shell-extension-pop-shop-details
  - Install: `sudo apt-get install gnome-shell-extension-pop-shop-details`
  - Install (apt): `sudo apt install gnome-shell-extension-pop-shop-details`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.26.1)

  </details>

- **gnome-shell-extension-pop-suspend-button**
  - Latest version: 1.0.4~1579278356~22.04~8585060
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension to add suspend button
  - Homepage: https://github.com/system76/gnome-shell-extension-pop-suspend-button
  - Install: `sudo apt-get install gnome-shell-extension-pop-suspend-button`
  - Install (apt): `sudo apt install gnome-shell-extension-pop-suspend-button`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.25)

  </details>

- **gnome-shell-extension-pop-x11gestures**
  - Latest version: 1.0.14~1654094950~22.04~d58122e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Workspace swtching gesture extension with 1:1 tracking
  - Homepage: https://github.com/pop-os/gnome-shell-extension-popx11gestures
  - Install: `sudo apt-get install gnome-shell-extension-pop-x11gestures`
  - Install (apt): `sudo apt install gnome-shell-extension-pop-x11gestures`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 40), touchegg (>= 2.0.12)

  </details>

- **gnome-shell-extension-prefs**
  - Latest version: 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: tool to enable / disable GNOME Shell extensions
  - Homepage: https://wiki.gnome.org/Projects/GnomeShell
  - Install: `sudo apt-get install gnome-shell-extension-prefs`
  - Install (apt): `sudo apt install gnome-shell-extension-prefs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: gir1.2-adw-1, gir1.2-gtk-4.0, gjs (>= 1.71.1), gnome-shell (= 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e), gnome-shell-common (= 42.9-0ubuntu2.3pop0~1745963094~22.04~af56e4e)
  - recommends: chrome-gnome-shell
  - breaks: gnome-shell (<< 3.36.0-2)
  - replaces: gnome-shell (<< 3.36.0-2)
  - provides: gnome-extensions-app

  </details>

- **gnome-shell-extension-system76-power**
  - Latest version: 2.0.8~1752257423~22.04~01c6156
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Gnome-shell extension for System76 Power Management
  - Homepage: https://github.com/pop-os/gnome-shell-extension-system76-power
  - Install: `sudo apt-get install gnome-shell-extension-system76-power`
  - Install (apt): `sudo apt install gnome-shell-extension-system76-power`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: system76-power (>= 1.0.0~)
  - provides: system76-power-applet-virtual

  </details>

- **gnome-terminal**
  - Latest version: 3.44.0-1ubuntu1pop0~1650921985~22.04~c2346f6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GNOME terminal emulator application
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install gnome-terminal`
  - Install (apt): `sudo apt install gnome-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, gir1.2-glib-2.0, gnome-terminal-data (<< 3.46), gnome-terminal-data (>= 3.44), gsettings-desktop-schemas (>= 0.1.0), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libdconf1 (>= 0.14.0), libgcc-s1 (>= 3.0), libglib2.0-0 (>= 2.52.0), libgtk-3-0 (>= 3.23.0), libpango-1.0-0 (>= 1.14.0), libstdc++6 (>= 4.1.1), libuuid1 (>= 2.16), libvte-2.91-0 (>= 0.68.0), libx11-6, python3, python3-gi
  - recommends: gvfs, nautilus-extension-gnome-terminal, yelp
  - provides: x-terminal-emulator

  </details>

- **gnome-terminal-data**
  - Latest version: 3.44.0-1ubuntu1pop0~1650921985~22.04~c2346f6
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Data files for the GNOME terminal emulator
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install gnome-terminal-data`
  - Install (apt): `sudo apt install gnome-terminal-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - recommends: gnome-terminal

  </details>

- **granite-demo**
  - Latest version: 6.2.0pop1~1677598542~22.04~66414db
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: extension of GTK+ libraries (demo binary)
  - Homepage: https://github.com/elementary/granite
  - Install: `sudo apt-get install granite-demo`
  - Install (apt): `sudo apt install granite-demo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cody Garver <cody@elementary.io>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.43.92), libgranite6 (= 6.2.0pop1~1677598542~22.04~66414db), libgtk-3-0 (>= 3.22)

  </details>

- **greetd**
  - Latest version: 0.10.0~1722314786~22.04~b3fce3f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: A minimal and flexible login manager daemon that makes no assumptions about what you want to launch
  - Homepage: https://git.sr.ht/~kennylevinsen/greetd
  - Install: `sudo apt-get install greetd`
  - Install (apt): `sudo apt install greetd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libpam0g (>= 0.99.7.1)
  - breaks: ecryptfs-utils

  </details>

- **grub-pop-disable-splash**
  - Latest version: 2.0.0~1582050224~22.04~2ed8349
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GRand Unified Bootloader, version 2 (disable splash configuration)
  - Homepage: https://github.com/system76/pop-grub-theme
  - Install: `sudo apt-get install grub-pop-disable-splash`
  - Install (apt): `sudo apt install grub-pop-disable-splash`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common
  - breaks: pop-default-settings (<< 2)
  - replaces: pop-default-settings (<< 2)

  </details>

- **grub-theme-pop**
  - Latest version: 2.0.0~1582050224~22.04~2ed8349
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GRand Unified Bootloader, version 2 (pop theme)
  - Homepage: https://github.com/system76/pop-grub-theme
  - Install: `sudo apt-get install grub-theme-pop`
  - Install (apt): `sudo apt install grub-theme-pop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: grub-common
  - breaks: pop-default-settings (<< 2)
  - replaces: pop-default-settings (<< 2)

  </details>

- **gstreamer1.0-pipewire**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GStreamer 1.0 plugin for the PipeWire multimedia server
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install gstreamer1.0-pipewire`
  - Install (apt): `sudo apt install gstreamer1.0-pipewire`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libglib2.0-0 (>= 2.39.4), libgstreamer-plugins-base1.0-0 (>= 1.6.0), libgstreamer1.0-0 (>= 1.6.0), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), pipewire (= 1.0.2~1707732619~22.04~b8b871b)

  </details>


### <a id="packages-H"></a>H

- **happiness**
  - Latest version: 1.0-1~1654884291~22.04~977f0b2
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Send happy thoughts to your desktop
  - Homepage: https://github.com/socialhappiness/happiness
  - Install: `sudo apt-get install happiness`
  - Install (apt): `sudo apt install happiness`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Emma Marshall <Emma@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **hidpi-daemon**
  - Latest version: 18.04.6~1761618360~22.04~5acb9db
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Daemon to manage HiDPI and LoDPI monitors on X
  - Homepage: https://github.com/pop-os/hidpi-daemon
  - Install: `sudo apt-get install hidpi-daemon`
  - Install (apt): `sudo apt install hidpi-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Aaron Honeycutt <aaron@system76.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-notify-0.7, python3-gi, python3-pydbus, python3-xlib, python3:any (>= 3.4~)

  </details>


### <a id="packages-I"></a>I

- **iced-launcher**
  - Latest version: 0.1.0~1669210531~22.04~afcdbbb
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Iced Launcher
  - Homepage: https://github.com/pop-os/iced-launcher
  - Install: `sudo apt-get install iced-launcher`
  - Install (apt): `sudo apt install iced-launcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>

- **iced-workspaces-applet**
  - Latest version: 0.1.0~1669753136~22.04~c915972
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Iced Workspaces Applet
  - Homepage: https://github.com/pop-os/iced-workspaces-applet
  - Install: `sudo apt-get install iced-workspaces-applet`
  - Install (apt): `sudo apt install iced-workspaces-applet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ashley Wulber <ashley@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.35), libgcc-s1 (>= 4.2), libxkbcommon0 (>= 0.5.0)

  </details>

- **initramfs-tools**
  - Latest version: 0.140ubuntu13.5pop0~1750449265~22.04~45b6e64
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: generic modular initramfs generator (automation)
  - Install: `sudo apt-get install initramfs-tools`
  - Install (apt): `sudo apt install initramfs-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: initramfs-tools-core (= 0.140ubuntu13.5pop0~1750449265~22.04~45b6e64), linux-base
  - suggests: bash-completion
  - conflicts: linux-initramfs-tool, usplash (<< 0.5.50)
  - breaks: e2fsprogs (<< 1.42.13), initscripts (<< 2.88dsf-59.3~), netplan.io (<< 0.37), upstart
  - provides: linux-initramfs-tool

  </details>

- **initramfs-tools-bin**
  - Latest version: 0.140ubuntu13.5pop0~1750449265~22.04~45b6e64
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: binaries used by initramfs-tools
  - Install: `sudo apt-get install initramfs-tools-bin`
  - Install (apt): `sudo apt install initramfs-tools-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), libudev1 (>= 183)

  </details>

- **initramfs-tools-core**
  - Latest version: 0.140ubuntu13.5pop0~1750449265~22.04~45b6e64
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: generic modular initramfs generator (core tools)
  - Install: `sudo apt-get install initramfs-tools-core`
  - Install (apt): `sudo apt install initramfs-tools-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: busybox-initramfs (>= 1:1.30.1-4ubuntu5~), coreutils (>= 8.24), cpio (>= 2.12), initramfs-tools-bin (= 0.140ubuntu13.5pop0~1750449265~22.04~45b6e64), klibc-utils (>= 2.0.4-8~), kmod, logsave | e2fsprogs (<< 1.45.3-1~), udev, zstd
  - suggests: bash-completion
  - breaks: busybox-initramfs (<< 1:1.30.1-4ubuntu5~), initramfs-tools (<< 0.121~)
  - replaces: initramfs-tools (<< 0.121~)

  </details>


### <a id="packages-J"></a>J

- **julia**
  - Latest version: 1.9.1pop1~1686756697~22.04~8c30437
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: high-performance programming language for technical computing
  - Homepage: https://github.com/pop-os/packaging-julia
  - Install: `sudo apt-get install julia`
  - Install (apt): `sudo apt install julia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brock Szuszczewicz <bnr@tuta.io>
  - Section: devel
  - Priority: optional
  - depends: p7zip-full
  - recommends: git, openssl
  - breaks: julia-common (<< 0.5.0~)

  </details>

- **just**
  - Latest version: 1.42.4-1pop1~1758728558~22.04~dd64d0b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: 🤖 Just a command runner
  - Homepage: https://github.com/pop-os/just
  - Install: `sudo apt-get install just`
  - Install (apt): `sudo apt install just`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2)

  </details>


### <a id="packages-K"></a>K

- **kbuild**
  - Latest version: 1:0.1.9998svn3589+dfsg-1pop1~1688579508~22.04~1dc163b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: framework for writing simple makefiles for complex tasks
  - Homepage: https://svn.netlabs.org/kbuild
  - Install: `sudo apt-get install kbuild`
  - Install (apt): `sudo apt install kbuild`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Virtualbox Team <team+debian-virtualbox@tracker.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **kernelstub**
  - Latest version: 3.1.4~1764109154~22.04~3fb4e06
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Automatic kernel efistub manager for UEFI
  - Install: `sudo apt-get install kernelstub`
  - Install (apt): `sudo apt install kernelstub`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <isantop@gmail.com>
  - Section: python
  - Priority: optional
  - depends: efibootmgr, python3-debian, python3:any, util-linux
  - recommends: python3-systemd

  </details>

- **kinect**
  - Latest version: 3.10.002-1pop1~1657626495~22.04~518f51f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Kinect toolkit
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/
  - Install: `sudo apt-get install kinect`
  - Install (apt): `sudo apt install kinect`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), libgl1, libkinect3 (= 3.10.002-1pop1~1657626495~22.04~518f51f), libstdc++6 (>= 11), libusb-1.0-0 (>= 2:1.0.8), libvrui3, vrui (>= 8.0)

  </details>


### <a id="packages-L"></a>L

- **libabigail-dev**
  - Latest version: 2.0-1pop0~1646087720~22.04~8bcd9d9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: ABI Generic Analysis and Instrumentation Library (development files)
  - Homepage: https://sourceware.org/libabigail/
  - Install: `sudo apt-get install libabigail-dev`
  - Install (apt): `sudo apt install libabigail-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libabigail0 (= 2.0-1pop0~1646087720~22.04~8bcd9d9)
  - suggests: abigail-doc

  </details>

- **libabigail0**
  - Latest version: 2.0-1pop0~1646087720~22.04~8bcd9d9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: ABI Generic Analysis and Instrumentation Library (runtime)
  - Homepage: https://sourceware.org/libabigail/
  - Install: `sudo apt-get install libabigail0`
  - Install (apt): `sudo apt install libabigail0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GCC Maintainers <debian-gcc@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.160), libelf1 (>= 0.144), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11), libxml2 (>= 2.7.4)

  </details>

- **libaccountsservice-dev**
  - Latest version: 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: query and manipulate user account information - header files
  - Homepage: https://www.freedesktop.org/wiki/Software/AccountsService/
  - Install: `sudo apt-get install libaccountsservice-dev`
  - Install (apt): `sudo apt install libaccountsservice-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-accountsservice-1.0 (= 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419), libaccountsservice0 (= 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419), libglib2.0-dev (>= 2.25.11), libpolkit-gobject-1-dev

  </details>

- **libaccountsservice-doc**
  - Latest version: 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: query and manipulate user account information - documentation
  - Homepage: https://www.freedesktop.org/wiki/Software/AccountsService/
  - Install: `sudo apt-get install libaccountsservice-doc`
  - Install (apt): `sudo apt install libaccountsservice-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libaccountsservice0**
  - Latest version: 22.07.5-2ubuntu1.5pop0~1727958756~22.04~31bc419
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: query and manipulate user account information - shared libraries
  - Homepage: https://www.freedesktop.org/wiki/Software/AccountsService/
  - Install: `sudo apt-get install libaccountsservice0`
  - Install (apt): `sudo apt install libaccountsservice0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcrypt1 (>= 1:4.1.0), libglib2.0-0 (>= 2.63.5), libsystemd0 (>= 209)
  - breaks: accountsservice (<< 0.6.5)

  </details>

- **libappstream-compose-dev**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Building blocks to compose AppStream metadata (development files)
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstream-compose-dev`
  - Install (apt): `sudo apt install libappstream-compose-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-appstreamcompose-1.0 (= 0.15.2-2pop1~1686239344~22.04~e648e85), libappstream-compose0 (= 0.15.2-2pop1~1686239344~22.04~e648e85), libappstream-dev (= 0.15.2-2pop1~1686239344~22.04~e648e85), libgdk-pixbuf2.0-dev
  - suggests: appstream-generator

  </details>

- **libappstream-compose0**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Building blocks to compose AppStream metadata
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstream-compose0`
  - Install (apt): `sudo apt install libappstream-compose0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libappstream4 (>= 0.15.2), libc6 (>= 2.33), libcairo2 (>= 1.2.4), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.2.1), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.65.1), libpango-1.0-0 (>= 1.14.0), librsvg2-2 (>= 2.48), libyaml-0-2

  </details>

- **libappstream-dev**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Library to access AppStream services (development files)
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstream-dev`
  - Install (apt): `sudo apt install libappstream-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-appstream-1.0 (= 0.15.2-2pop1~1686239344~22.04~e648e85), libappstream4 (= 0.15.2-2pop1~1686239344~22.04~e648e85), libglib2.0-dev

  </details>

- **libappstream4**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Library to access AppStream services
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstream4`
  - Install (apt): `sudo apt install libappstream4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.33), libcurl3-gnutls (>= 7.63.0), libglib2.0-0 (>= 2.67.3+git20210214), libstemmer0d (>= 0+svn527), libxml2 (>= 2.9.0), libxmlb2 (>= 0.3.4), libyaml-0-2

  </details>

- **libappstreamqt-dev**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Qt5 library to access AppStream services (development files)
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstreamqt-dev`
  - Install (apt): `sudo apt install libappstreamqt-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libappstreamqt2 (= 0.15.2-2pop1~1686239344~22.04~e648e85), qtbase5-dev

  </details>

- **libappstreamqt2**
  - Latest version: 0.15.2-2pop1~1686239344~22.04~e648e85
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Qt5 library to access AppStream services
  - Homepage: https://www.freedesktop.org/wiki/Distributions/AppStream/
  - Install: `sudo apt-get install libappstreamqt2`
  - Install (apt): `sudo apt install libappstreamqt2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matthias Klumpp <mak@debian.org>
  - Section: libs
  - Priority: optional
  - depends: libappstream4 (>= 0.15.0), libc6 (>= 2.4), libgcc-s1 (>= 3.3.1), libglib2.0-0 (>= 2.62), libqt5core5a (>= 5.15.1), libstdc++6 (>= 5)

  </details>

- **libasound2**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: shared library for ALSA applications
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libasound2`
  - Install (apt): `sudo apt install libasound2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libasound2-data (>= 1.2.8-1pop1~1669155503~22.04~a04c9a1), libc6 (>= 2.34)
  - suggests: libasound2-plugins (>= 1.0.24)
  - breaks: alsa-utils (<< 1.2.1)

  </details>

- **libasound2-data**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Configuration files and profiles for ALSA drivers
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libasound2-data`
  - Install (apt): `sudo apt install libasound2-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - recommends: alsa-topology-conf, alsa-ucm-conf
  - suggests: alsa-utils
  - breaks: libasound2 (<< 1.2.8-1pop1~1669155503~22.04~a04c9a1)
  - replaces: libasound2 (<< 1.2.8-1pop1~1669155503~22.04~a04c9a1)

  </details>

- **libasound2-dev**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: shared library for ALSA applications -- development files
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libasound2-dev`
  - Install (apt): `sudo apt install libasound2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libasound2 (= 1.2.8-1pop1~1669155503~22.04~a04c9a1)
  - suggests: libasound2-doc
  - provides: libasound-dev

  </details>

- **libasound2-doc**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: documentation for user-space ALSA application programming
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libasound2-doc`
  - Install (apt): `sudo apt install libasound2-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-jquery
  - suggests: libasound2-dev

  </details>

- **libasound2-plugin-smixer**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: smixer plugin for ALSA library
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libasound2-plugin-smixer`
  - Install (apt): `sudo apt install libasound2-plugin-smixer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libasound2 (= 1.2.8-1pop1~1669155503~22.04~a04c9a1), libc6 (>= 2.14), libpython3.10 (>= 3.10.0)

  </details>

- **libatopology-dev**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: shared library for handling ALSA topology -- development files
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libatopology-dev`
  - Install (apt): `sudo apt install libatopology-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libasound2-dev, libatopology2 (= 1.2.8-1pop1~1669155503~22.04~a04c9a1)
  - breaks: libasound2-dev (<< 1.2.1.1)
  - replaces: libasound2-dev (<< 1.2.1.1)
  - provides: libatopology-dev

  </details>

- **libatopology2**
  - Latest version: 1.2.8-1pop1~1669155503~22.04~a04c9a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: shared library for handling ALSA topology definitions
  - Homepage: https://www.alsa-project.org/
  - Install: `sudo apt-get install libatopology2`
  - Install (apt): `sudo apt install libatopology2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian ALSA Maintainers <pkg-alsa-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libasound2 (>= 1.2.7.1), libc6 (>= 2.14)
  - breaks: libasound2 (<< 1.2.1.1)
  - replaces: libasound2 (<< 1.2.1.1)

  </details>

- **libd3dadapter9-mesa**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: state-tracker for Direct3D9
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libd3dadapter9-mesa`
  - Install (apt): `sudo apt install libd3dadapter9-mesa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm-amdgpu1 (>= 2.4.125-1), libdrm-intel1 (>= 2.4.125-1), libdrm2 (>= 2.4.125-1), libelf1 (>= 0.142), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libllvm15, libsensors5 (>= 1:3.5.0), libstdc++6 (>= 11), libudev1, libzstd1 (>= 1.4.0), zlib1g (>= 1:1.1.4)

  </details>

- **libd3dadapter9-mesa-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: state-tracker for Direct3D9 -- development files
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libd3dadapter9-mesa-dev`
  - Install (apt): `sudo apt install libd3dadapter9-mesa-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libd3dadapter9-mesa (= 25.1.5-1pop0~1756399231~22.04~b84bab8), libudev1

  </details>

- **libdistinst**
  - Latest version: 0.3.2~1760478339~22.04~69dac84
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Distribution Installer Library
  - Homepage: https://github.com/pop-os/distinst
  - Install: `sudo apt-get install libdistinst`
  - Install (apt): `sudo apt install libdistinst`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: apt, btrfs-progs, coreutils, cryptsetup, dmraid, dmsetup, dosfstools, e2fsprogs, f2fs-tools, fatresize, gettext, grub2-common, iso-codes, kpartx, kpartx-boot, libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libparted-fs-resize0, libparted2 (>= 3.1), locales, lvm2, mount, ntfs-3g, parted, rsync, squashfs-tools, systemd-container, util-linux, xfsprogs

  </details>

- **libdistinst-dev**
  - Latest version: 0.3.2~1760478339~22.04~69dac84
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Distribution Installer Development Files
  - Homepage: https://github.com/pop-os/distinst
  - Install: `sudo apt-get install libdistinst-dev`
  - Install (apt): `sudo apt install libdistinst-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libdistinst (= 0.3.2~1760478339~22.04~69dac84)

  </details>

- **libdrm-amdgpu1**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to amdgpu-specific kernel DRM services -- runtime
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-amdgpu1`
  - Install (apt): `sudo apt install libdrm-amdgpu1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libdrm2 (>= 2.4.108)

  </details>

- **libdrm-common**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to kernel DRM services -- common files
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-common`
  - Install (apt): `sudo apt install libdrm-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional

  </details>

- **libdrm-dev**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to kernel DRM services -- development files
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-dev`
  - Install (apt): `sudo apt install libdrm-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libdrm-amdgpu1 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51), libdrm-intel1 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51), libdrm-nouveau2 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51), libdrm-radeon1 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51), libdrm2 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51), libpciaccess-dev

  </details>

- **libdrm-intel1**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to intel-specific kernel DRM services -- runtime
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-intel1`
  - Install (apt): `sudo apt install libdrm-intel1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.17), libdrm2 (>= 2.4.108), libpciaccess0

  </details>

- **libdrm-nouveau2**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to nouveau-specific kernel DRM services -- runtime
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-nouveau2`
  - Install (apt): `sudo apt install libdrm-nouveau2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libdrm2 (>= 2.4.108)

  </details>

- **libdrm-radeon1**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to radeon-specific kernel DRM services -- runtime
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-radeon1`
  - Install (apt): `sudo apt install libdrm-radeon1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libdrm2 (>= 2.4.108)

  </details>

- **libdrm-tests**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Testing tools from the libdrm project
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm-tests`
  - Install (apt): `sudo apt install libdrm-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm-amdgpu1 (>= 2.4.77), libdrm2 (= 2.4.125-1pop0~1755787023~22.04~8d3aa51)

  </details>

- **libdrm2**
  - Latest version: 2.4.125-1pop0~1755787023~22.04~8d3aa51
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace interface to kernel DRM services -- runtime
  - Homepage: https://gitlab.freedesktop.org/mesa/drm/
  - Install: `sudo apt-get install libdrm2`
  - Install (apt): `sudo apt install libdrm2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.33), libdrm-common (>= 2.4.125-1pop0~1755787023~22.04~8d3aa51)

  </details>

- **libegl-mesa0**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: free implementation of the EGL API -- Mesa vendor library
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libegl-mesa0`
  - Install (apt): `sudo apt install libegl-mesa0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm2 (>= 2.4.125-1), libexpat1 (>= 2.0.1), libgbm1 (= 25.1.5-1pop0~1756399231~22.04~b84bab8), libgcc-s1 (>= 3.4), libwayland-client0 (>= 1.23.0), libwayland-server0 (>= 1.15.0), libx11-xcb1 (>= 2:1.7.5), libxcb-dri3-0 (>= 1.13), libxcb-present0, libxcb-randr0 (>= 1.3), libxcb-shm0, libxcb-xfixes0, libxcb1 (>= 1.6), mesa-libgallium (= 25.1.5-1pop0~1756399231~22.04~b84bab8)
  - provides: libegl-vendor

  </details>

- **libegl1-mesa-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: free implementation of the EGL API -- development files
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libegl1-mesa-dev`
  - Install (apt): `sudo apt install libegl1-mesa-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libegl-dev, libglvnd-dev

  </details>

- **libfirmware-manager**
  - Latest version: 0.1.2~1752774996~22.04~a45bdc7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware Manager widget library
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install libfirmware-manager`
  - Install (apt): `sudo apt install libfirmware-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: firmware-manager-shared, libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libssl3 (>= 3.0.0~~alpha1), libudev1 (>= 183)

  </details>

- **libfirmware-manager-dev**
  - Latest version: 0.1.2~1752774996~22.04~a45bdc7
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Firmware Manager widget library header
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install libfirmware-manager-dev`
  - Install (apt): `sudo apt install libfirmware-manager-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libfirmware-manager (= 0.1.2~1752774996~22.04~a45bdc7)

  </details>

- **libflatpak-dev**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps (development)
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install libflatpak-dev`
  - Install (apt): `sudo apt install libflatpak-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-flatpak-1.0 (= 1.14.6-1~1713976503~22.04~1a1043a), gir1.2-glib-2.0, libflatpak0 (= 1.14.6-1~1713976503~22.04~1a1043a), libglib2.0-dev, libostree-dev (>= 2020.8), libxml2-dev (>= 2.4), pkg-config, python3:any
  - recommends: flatpak
  - suggests: gdb, ostree, python3-gi, systemd-coredump

  </details>

- **libflatpak-doc**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps (documentation)
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install libflatpak-doc`
  - Install (apt): `sudo apt install libflatpak-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - suggests: devhelp

  </details>

- **libflatpak0**
  - Latest version: 1.14.6-1~1713976503~22.04~1a1043a
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Application deployment framework for desktop apps (library)
  - Homepage: https://flatpak.org/
  - Install: `sudo apt-get install libflatpak0`
  - Install (apt): `sudo apt install libflatpak0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: bubblewrap (>= 0.5.0), libarchive13 (>= 3.0.4), libc6 (>= 2.33), libcurl3-gnutls (>= 7.16.2), libdconf1 (>= 0.26.0), libglib2.0-0 (>= 2.67.3+git20210214), libjson-glib-1.0-0 (>= 1.5.2), libmalcontent-0-0 (>= 0.6.0), libostree-1-1 (>= 2020.8), libpolkit-gobject-1-0 (>= 0.101), libseccomp2 (>= 2.5.2), libsystemd0, libxau6 (>= 1:1.0.9), libxml2 (>= 2.7.4), libzstd1 (>= 1.4.0)

  </details>

- **libfwts1**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: FirmWare Test Suite core support library
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install libfwts1`
  - Install (apt): `sudo apt install libfwts1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libbsd0 (>= 0.0), libc6 (>= 2.33), libfdt1 (>= 1.6.1), libglib2.0-0 (>= 2.26.0)

  </details>

- **libfwtsacpica1**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: FirmWare Test Suite ACPICA core built for acpiexec functionality
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install libfwtsacpica1`
  - Install (apt): `sudo apt install libfwtsacpica1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **libfwtsiasl1**
  - Latest version: 25.01.00-0ubuntu1pop1~1738076555~22.04~b46daf7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: FirmWare Test Suite ACPICA core built for iasl functionality
  - Homepage: https://wiki.ubuntu.com/FirmwareTestSuite
  - Install: `sudo apt-get install libfwtsiasl1`
  - Install (apt): `sudo apt install libfwtsiasl1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Firmware Testing Team <fwts-devel@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14)

  </details>

- **libfwupd-dev**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: development files for libfwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd-dev`
  - Install (apt): `sudo apt install libfwupd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-fwupd-2.0 (= 1.9.32-1pop0~1766003088~22.04~68eb344), libcurl4-gnutls-dev, libfwupd2 (= 1.9.32-1pop0~1766003088~22.04~68eb344), libglib2.0-dev (>= 2.45.8), libjcat-dev, libjson-glib-dev (>= 1.1.1)
  - breaks: fwupd-dev (<< 0.5.4-2~)
  - replaces: fwupd-dev (<< 0.5.4-2~)

  </details>

- **libfwupd2**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware update daemon library
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupd2`
  - Install (apt): `sudo apt install libfwupd2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libcurl3-gnutls (>= 7.63.0), libglib2.0-0 (>= 2.53.2), libjcat1 (>= 0.1.0), libjson-glib-1.0-0 (>= 1.5.2)

  </details>

- **libfwupdplugin5**
  - Latest version: 1.9.32-1pop0~1766003088~22.04~68eb344
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for Fwupd
  - Homepage: https://github.com/fwupd/fwupd
  - Install: `sudo apt-get install libfwupdplugin5`
  - Install (apt): `sudo apt install libfwupdplugin5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI <debian-efi@lists.debian.org>
  - Section: admin
  - Priority: optional
  - depends: fwupd

  </details>

- **libgbm-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: generic buffer management API -- development files
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libgbm-dev`
  - Install (apt): `sudo apt install libgbm-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libgbm1 (= 25.1.5-1pop0~1756399231~22.04~b84bab8)

  </details>

- **libgbm1**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: generic buffer management API -- runtime
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libgbm1`
  - Install (apt): `sudo apt install libgbm1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm2 (>= 2.4.125-1), libexpat1 (>= 2.0.1), libwayland-server0 (>= 1.15.0), mesa-libgallium (= 25.1.5-1pop0~1756399231~22.04~b84bab8)

  </details>

- **libgdm-dev**
  - Latest version: 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GNOME Display Manager (development files)
  - Homepage: https://wiki.gnome.org/Projects/GDM/
  - Install: `sudo apt-get install libgdm-dev`
  - Install (apt): `sudo apt install libgdm-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-gdm-1.0 (= 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40), libgdm1 (= 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40), libglib2.0-dev (>= 2.44.0)

  </details>

- **libgdm1**
  - Latest version: 42.0-1ubuntu7.22.04.4pop0~1727959198~22.04~6fe7e40
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GNOME Display Manager (shared library)
  - Homepage: https://wiki.gnome.org/Projects/GDM/
  - Install: `sudo apt-get install libgdm1`
  - Install (apt): `sudo apt install libgdm1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.34), libglib2.0-0 (>= 2.44.0), libsystemd0
  - breaks: gdm3 (<< 3.18.0-3~)
  - replaces: gdm3 (<< 3.18.0-3~)

  </details>

- **libgl1-mesa-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libgl1-mesa-dev`
  - Install (apt): `sudo apt install libgl1-mesa-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: libgl-dev, libglvnd-dev

  </details>

- **libgl1-mesa-dri**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: free implementation of the OpenGL API -- DRI modules
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libgl1-mesa-dri`
  - Install (apt): `sudo apt install libgl1-mesa-dri`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgbm1 (= 25.1.5-1pop0~1756399231~22.04~b84bab8), libvulkan1

  </details>

- **libgles2-mesa-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libgles2-mesa-dev`
  - Install (apt): `sudo apt install libgles2-mesa-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: libgles-dev, libglvnd-dev

  </details>

- **libglx-mesa0**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: free implementation of the OpenGL API -- GLX vendor library
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libglx-mesa0`
  - Install (apt): `sudo apt install libglx-mesa0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm2 (>= 2.4.125-1), libexpat1 (>= 2.0.1), libgl1-mesa-dri, libx11-6 (>= 2:1.4.99.1), libx11-xcb1 (>= 2:1.7.5), libxcb-dri3-0, libxcb-glx0 (>= 1.8), libxcb-present0, libxcb-shm0, libxcb-xfixes0, libxcb1, libxext6, libxxf86vm1, mesa-libgallium (= 25.1.5-1pop0~1756399231~22.04~b84bab8)
  - breaks: glx-diversions (<< 0.8.4~), libopengl-perl (<< 0.6704+dfsg-2)
  - provides: libglx-vendor

  </details>

- **libgoa-1.0-0b**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: library for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-0b`
  - Install (apt): `sudo apt install libgoa-1.0-0b`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.52), libgoa-1.0-common (>= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0)
  - conflicts: libgoa-1.0-0
  - replaces: libgoa-1.0-0

  </details>

- **libgoa-1.0-common**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: library for GNOME Online Accounts - common files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-common`
  - Install (apt): `sudo apt install libgoa-1.0-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: libgoa-1.0-0 (<< 3.8.2)
  - replaces: libgoa-1.0-0 (<< 3.8.2)

  </details>

- **libgoa-1.0-dev**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: library for GNOME Online Accounts - development files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-dev`
  - Install (apt): `sudo apt install libgoa-1.0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-goa-1.0 (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libglib2.0-dev (>= 2.52), libgoa-1.0-0b (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0)
  - suggests: libgoa-1.0-doc

  </details>

- **libgoa-1.0-doc**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: library for GNOME Online Accounts - documentation files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-doc`
  - Install (apt): `sudo apt install libgoa-1.0-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional
  - recommends: libglib2.0-doc
  - suggests: devhelp

  </details>

- **libgoa-backend-1.0-1**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: backend library for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-backend-1.0-1`
  - Install (apt): `sudo apt install libgoa-backend-1.0-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgck-1-0 (>= 2.91.1), libgcr-base-3-1 (>= 3.8.0), libgcr-ui-3-1 (>= 3.8.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.59.0), libgoa-1.0-0b (>= 3.17.92), libgoa-1.0-common (>= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libgtk-3-0 (>= 3.19.12), libharfbuzz0b (>= 0.6.0), libjavascriptcoregtk-4.0-18 (>= 2.38.4), libjson-glib-1.0-0 (>= 1.5.2), libp11-kit0 (>= 0.23.18.1), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), librest-0.7-0 (>= 0.7.92), libsecret-1-0 (>= 0.7), libsoup2.4-1 (>= 2.42), libwebkit2gtk-4.0-37 (>= 2.26), libxml2 (>= 2.9.0)

  </details>

- **libgoa-backend-1.0-dev**
  - Latest version: 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: backend library for GNOME Online Accounts - development files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-backend-1.0-dev`
  - Install (apt): `sudo apt install libgoa-backend-1.0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-goa-1.0 (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libglib2.0-dev (>= 2.52), libgoa-1.0-dev (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libgoa-backend-1.0-1 (= 3.44.0-1ubuntu1pop1~1677167546~22.04~5d98aa0), libgtk-3-dev
  - suggests: libgoa-1.0-doc
  - conflicts: libgoa-1.0-dev (<< 3.10.0)
  - replaces: libgoa-1.0-dev (<< 3.10.0)

  </details>

- **libgranite-common**
  - Latest version: 6.2.0pop1~1677598542~22.04~66414db
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: extension of GTK+ libraries (common files)
  - Homepage: https://github.com/elementary/granite
  - Install: `sudo apt-get install libgranite-common`
  - Install (apt): `sudo apt install libgranite-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cody Garver <cody@elementary.io>
  - Section: misc
  - Priority: optional
  - conflicts: libgranite0 (>> 0.2~)
  - replaces: libgranite0 (>> 0.2~)

  </details>

- **libgranite-dev**
  - Latest version: 6.2.0pop1~1677598542~22.04~66414db
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: extension of GTK+ libraries (development files)
  - Homepage: https://github.com/elementary/granite
  - Install: `sudo apt-get install libgranite-dev`
  - Install (apt): `sudo apt install libgranite-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cody Garver <cody@elementary.io>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-granite-1.0 (= 6.2.0pop1~1677598542~22.04~66414db), libgee-0.8-dev, libglib2.0-dev, libgranite6 (= 6.2.0pop1~1677598542~22.04~66414db), libgtk-3-dev (>= 3.3.14)

  </details>

- **libgranite6**
  - Latest version: 6.2.0pop1~1677598542~22.04~66414db
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: extension of GTK+ libraries
  - Homepage: https://github.com/elementary/granite
  - Install: `sudo apt-get install libgranite6`
  - Install (apt): `sudo apt install libgranite6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Cody Garver <cody@elementary.io>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.29), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.23.0), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.43.92), libgranite-common (>= 6.2.0pop1~1677598542~22.04~66414db), libgtk-3-0 (>= 3.22), libpango-1.0-0 (>= 1.14.0)
  - recommends: contractor

  </details>

- **libkinect3**
  - Latest version: 3.10.002-1pop1~1657626495~22.04~518f51f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Kinect toolkit - shared library
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/
  - Install: `sudo apt-get install libkinect3`
  - Install (apt): `sudo apt install libkinect3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 3.0), libgl1, libjpeg8 (>= 8c), libstdc++6 (>= 11), libusb-1.0-0 (>= 2:1.0.8), libvrui3

  </details>

- **libkinect3-dev**
  - Latest version: 3.10.002-1pop1~1657626495~22.04~518f51f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Kinect toolkit - shared library development files
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/
  - Install: `sudo apt-get install libkinect3-dev`
  - Install (apt): `sudo apt install libkinect3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libdevel
  - Priority: optional
  - depends: libkinect3 (= 3.10.002-1pop1~1657626495~22.04~518f51f)
  - provides: libkinect-dev

  </details>

- **libllvmspirvlib-15-dev**
  - Latest version: 15.0.3-1pop1~1742906167~22.04~135e309
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: bi-directional translator for LLVM/SPIRV -- development files
  - Homepage: https://github.com/KhronosGroup/SPIRV-LLVM-Translator
  - Install: `sudo apt-get install libllvmspirvlib-15-dev`
  - Install (apt): `sudo apt install libllvmspirvlib-15-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenCL team <pkg-opencl-devel@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libllvmspirvlib15 (= 15.0.3-1pop1~1742906167~22.04~135e309)
  - conflicts: libllvmspirvlib-x.y-dev
  - breaks: libllvmspirvlib-dev (<< 13.0.0-3~)
  - replaces: libllvmspirvlib-dev (<< 13.0.0-3~), libllvmspirvlib-x.y-dev
  - provides: libllvmspirvlib-x.y-dev

  </details>

- **libllvmspirvlib15**
  - Latest version: 15.0.3-1pop1~1742906167~22.04~135e309
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: bi-directional translator for LLVM/SPIRV -- shared library
  - Homepage: https://github.com/KhronosGroup/SPIRV-LLVM-Translator
  - Install: `sudo apt-get install libllvmspirvlib15`
  - Install (apt): `sudo apt install libllvmspirvlib15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenCL team <pkg-opencl-devel@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libllvm15, libstdc++6 (>= 11)

  </details>

- **liblzma-dev**
  - Latest version: 5.4.1-0.2pop1~1682459374~22.04~6509762
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: XZ-format compression library - development files
  - Homepage: https://tukaani.org/xz/
  - Install: `sudo apt-get install liblzma-dev`
  - Install (apt): `sudo apt install liblzma-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jonathan Nieder <jrnieder@gmail.com>
  - Section: libdevel
  - Priority: optional
  - depends: liblzma5 (= 5.4.1-0.2pop1~1682459374~22.04~6509762)
  - suggests: liblzma-doc

  </details>

- **liblzma-doc**
  - Latest version: 5.4.1-0.2pop1~1682459374~22.04~6509762
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: XZ-format compression library - API documentation
  - Homepage: https://tukaani.org/xz/
  - Install: `sudo apt-get install liblzma-doc`
  - Install (apt): `sudo apt install liblzma-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jonathan Nieder <jrnieder@gmail.com>
  - Section: doc
  - Priority: optional
  - suggests: liblzma-dev

  </details>

- **liblzma5**
  - Latest version: 5.4.1-0.2pop1~1682459374~22.04~6509762
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: XZ-format compression library
  - Homepage: https://tukaani.org/xz/
  - Install: `sudo apt-get install liblzma5`
  - Install (apt): `sudo apt install liblzma5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jonathan Nieder <jrnieder@gmail.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - breaks: liblzma2 (<< 5.1.1alpha+20110809-3~)

  </details>

- **libmutter-10-0**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: window manager library from the Mutter window manager
  - Install: `sudo apt-get install libmutter-10-0`
  - Install (apt): `sudo apt install libmutter-10-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: adwaita-icon-theme, gsettings-desktop-schemas (>= 40~alpha), libatk1.0-0 (>= 2.2.0), libc6 (>= 2.34), libcairo-gobject2 (>= 1.12.16), libcairo2 (>= 1.14.0), libcanberra0 (>= 0.2), libdrm2 (>= 2.4.83), libegl1, libfontconfig1 (>= 2.12.6), libfribidi0 (>= 1.0.0), libgbm1 (>= 17.3.0~rc1), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgl1, libglib2.0-0 (>= 2.70.0), libgnome-desktop-3-19 (>= 3.36.0), libgraphene-1.0-0 (>= 1.10.0), libgtk-3-0 (>= 3.19.12), libgudev-1.0-0 (>= 232), libice6 (>= 1:1.0.0), libinput10 (>= 1.19.0), libjson-glib-1.0-0 (>= 1.5.2), libpango-1.0-0 (>= 1.46.0), libpangocairo-1.0-0 (>= 1.46.0), libpangoft2-1.0-0 (>= 1.46.0), libpipewire-0.3-0 (>= 0.3.33), libsm6, libstartup-notification0 (>= 0.11), libsystemd0 (>= 226), libudev1 (>= 183), libwacom9 (>= 2.0.0), libwayland-server0 (>= 1.20.0), libx11-6 (>= 2:1.7.0), libx11-xcb1 (>= 2:1.7.5), libxau6 (>= 1:1.0.9), libxcb-randr0 (>= 1.3), libxcb-res0 (>= 1.10), libxcb1, libxcomposite1 (>= 1:0.4.5), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6 (>= 2:1.3.0), libxfixes3 (>= 1:6.0.0), libxi6 (>= 2:1.6.99.1), libxinerama1 (>= 2:1.1.4), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxkbfile1 (>= 1:1.1.0), libxrandr2 (>= 2:1.5.0), libxtst6, mutter-common (>= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16)
  - breaks: apparmor (<< 2.13.3-5~), gnome-control-center (<< 1:3.25.2), gnome-settings-daemon (<< 3.31.101), gnome-shell (<< 42~rc), libgtk-3-0 (<< 3.24.33), libgtk-4-1 (<< 4.6.3+ds1-0ubuntu1~)

  </details>

- **libmutter-10-dev**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Development files for the Mutter window manager
  - Install: `sudo apt-get install libmutter-10-dev`
  - Install (apt): `sudo apt install libmutter-10-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-mutter-10 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), gsettings-desktop-schemas-dev (>= 40~alpha), libatk1.0-dev, libcairo2-dev, libdrm-dev, libegl1-mesa-dev, libgbm-dev, libgdk-pixbuf-2.0-dev | libgdk-pixbuf2.0-dev, libgles-dev, libglib2.0-dev (>= 2.69.0), libgraphene-1.0-dev (>= 1.9.3), libgtk-3-dev, libinput-dev (>= 1.19), libjson-glib-dev, libmutter-10-0 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), libpango1.0-dev, libwayland-dev, libx11-dev, libxcomposite-dev, libxdamage-dev, libxext-dev, libxfixes-dev (>= 6.0), libxi-dev, libxrandr-dev

  </details>

- **libmutter-test-10**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Test helper library for GNOME's window manager library
  - Install: `sudo apt-get install libmutter-test-10`
  - Install (apt): `sudo apt install libmutter-test-10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.14.0), libgles2, libglib2.0-0 (>= 2.69.0), libmutter-10-0 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), libxcb1, libxext6, mutter (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16)

  </details>

- **libnss-myhostname**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nss module providing fallback resolution for the current hostname
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-myhostname`
  - Install (apt): `sudo apt install libnss-myhostname`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **libnss-mymachines**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nss module to resolve hostnames for local container instances
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-mymachines`
  - Install (apt): `sudo apt install libnss-mymachines`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), systemd-container (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libnss-resolve**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nss module to resolve names via systemd-resolved
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-resolve`
  - Install (apt): `sudo apt install libnss-resolve`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libnss-systemd**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nss module providing dynamic user and group name resolution
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libnss-systemd`
  - Install (apt): `sudo apt install libnss-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: standard
  - depends: libc6 (>= 2.34), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libnvidia-cfg1-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-430`
  - Install (apt): `sudo apt install libnvidia-cfg1-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-440`
  - Install (apt): `sudo apt install libnvidia-cfg1-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-450`
  - Install (apt): `sudo apt install libnvidia-cfg1-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-455`
  - Install (apt): `sudo apt install libnvidia-cfg1-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-460`
  - Install (apt): `sudo apt install libnvidia-cfg1-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-465`
  - Install (apt): `sudo apt install libnvidia-cfg1-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470

  </details>

- **libnvidia-cfg1-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA binary OpenGL/GLX configuration library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-470`
  - Install (apt): `sudo apt install libnvidia-cfg1-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - conflicts: libnvidia-cfg1-any
  - replaces: libnvidia-cfg1-any
  - provides: libnvidia-cfg1-any

  </details>

- **libnvidia-cfg1-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-495`
  - Install (apt): `sudo apt install libnvidia-cfg1-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-515`
  - Install (apt): `sudo apt install libnvidia-cfg1-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-525`
  - Install (apt): `sudo apt install libnvidia-cfg1-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-535`
  - Install (apt): `sudo apt install libnvidia-cfg1-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-545`
  - Install (apt): `sudo apt install libnvidia-cfg1-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-550`
  - Install (apt): `sudo apt install libnvidia-cfg1-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-555`
  - Install (apt): `sudo apt install libnvidia-cfg1-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-560`
  - Install (apt): `sudo apt install libnvidia-cfg1-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-565`
  - Install (apt): `sudo apt install libnvidia-cfg1-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-570`
  - Install (apt): `sudo apt install libnvidia-cfg1-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-cfg1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-575`
  - Install (apt): `sudo apt install libnvidia-cfg1-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580

  </details>

- **libnvidia-cfg1-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA binary OpenGL/GLX configuration library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-cfg1-580`
  - Install (apt): `sudo apt install libnvidia-cfg1-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.9)
  - conflicts: libnvidia-cfg1-any
  - replaces: libnvidia-cfg1-any
  - provides: libnvidia-cfg1-any

  </details>

- **libnvidia-common-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-430`
  - Install (apt): `sudo apt install libnvidia-common-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-440`
  - Install (apt): `sudo apt install libnvidia-common-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-450`
  - Install (apt): `sudo apt install libnvidia-common-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-455`
  - Install (apt): `sudo apt install libnvidia-common-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-460`
  - Install (apt): `sudo apt install libnvidia-common-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-465`
  - Install (apt): `sudo apt install libnvidia-common-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-470

  </details>

- **libnvidia-common-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Shared files used by the NVIDIA libraries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-470`
  - Install (apt): `sudo apt install libnvidia-common-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - conflicts: libnvidia-common
  - breaks: libnvidia-gl-470 (<< 390.25-0ubuntu2~)
  - replaces: libnvidia-common, libnvidia-gl-470 (<< 390.25-0ubuntu2~)
  - provides: libnvidia-common

  </details>

- **libnvidia-common-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-495`
  - Install (apt): `sudo apt install libnvidia-common-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-515`
  - Install (apt): `sudo apt install libnvidia-common-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-525`
  - Install (apt): `sudo apt install libnvidia-common-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-535`
  - Install (apt): `sudo apt install libnvidia-common-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-545`
  - Install (apt): `sudo apt install libnvidia-common-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-550`
  - Install (apt): `sudo apt install libnvidia-common-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-555`
  - Install (apt): `sudo apt install libnvidia-common-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-560`
  - Install (apt): `sudo apt install libnvidia-common-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-565`
  - Install (apt): `sudo apt install libnvidia-common-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-570`
  - Install (apt): `sudo apt install libnvidia-common-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-575`
  - Install (apt): `sudo apt install libnvidia-common-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-common-580

  </details>

- **libnvidia-common-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Shared files used by the NVIDIA libraries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-common-580`
  - Install (apt): `sudo apt install libnvidia-common-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - conflicts: libnvidia-common
  - replaces: libnvidia-common
  - provides: libnvidia-common

  </details>

- **libnvidia-compute-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-430`
  - Install (apt): `sudo apt install libnvidia-compute-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-440`
  - Install (apt): `sudo apt install libnvidia-compute-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-450`
  - Install (apt): `sudo apt install libnvidia-compute-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-455`
  - Install (apt): `sudo apt install libnvidia-compute-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-460`
  - Install (apt): `sudo apt install libnvidia-compute-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-465`
  - Install (apt): `sudo apt install libnvidia-compute-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-470

  </details>

- **libnvidia-compute-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA libcompute package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-470`
  - Install (apt): `sudo apt install libnvidia-compute-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - conflicts: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libnvidia-compute, nvidia-opencl-icd
  - replaces: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libnvidia-compute, libnvidia-compute-470 (<< 390.25-0ubuntu2~), nvidia-opencl-icd
  - provides: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libcuda1 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-compute, libnvidia-ml1 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-opencl-icd, opencl-icd

  </details>

- **libnvidia-compute-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-495`
  - Install (apt): `sudo apt install libnvidia-compute-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-515`
  - Install (apt): `sudo apt install libnvidia-compute-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-525`
  - Install (apt): `sudo apt install libnvidia-compute-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-535`
  - Install (apt): `sudo apt install libnvidia-compute-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-545`
  - Install (apt): `sudo apt install libnvidia-compute-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-550`
  - Install (apt): `sudo apt install libnvidia-compute-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-555`
  - Install (apt): `sudo apt install libnvidia-compute-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-560`
  - Install (apt): `sudo apt install libnvidia-compute-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-565`
  - Install (apt): `sudo apt install libnvidia-compute-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-570`
  - Install (apt): `sudo apt install libnvidia-compute-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-compute-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-575`
  - Install (apt): `sudo apt install libnvidia-compute-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-compute-580

  </details>

- **libnvidia-compute-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA libcompute package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-compute-580`
  - Install (apt): `sudo apt install libnvidia-compute-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.26), libgcc-s1 (>= 4.3), libssl3 (>= 3.0.0~~alpha1), ocl-icd-libopencl1
  - conflicts: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-11.3-1, libcuda-11.4-1, libcuda-11.5-1, libcuda-11.6-1, libcuda-11.7-1, libcuda-11.8-1, libcuda-12.0-1, libcuda-12.1-1, libcuda-12.2-1, libcuda-12.3-1, libcuda-12.4-1, libcuda-12.5-1, libcuda-12.6-1, libcuda-12.7-1, libcuda-12.8-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libnvidia-compute, nvidia-opencl-icd
  - replaces: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-11.3-1, libcuda-11.4-1, libcuda-11.5-1, libcuda-11.6-1, libcuda-11.7-1, libcuda-11.8-1, libcuda-12.0-1, libcuda-12.1-1, libcuda-12.2-1, libcuda-12.3-1, libcuda-12.4-1, libcuda-12.5-1, libcuda-12.6-1, libcuda-12.7-1, libcuda-12.8-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libnvidia-compute, nvidia-opencl-icd
  - provides: libcuda-10.0-1, libcuda-10.1-1, libcuda-10.2-1, libcuda-11.0-1, libcuda-11.1-1, libcuda-11.2-1, libcuda-11.3-1, libcuda-11.4-1, libcuda-11.5-1, libcuda-11.6-1, libcuda-11.7-1, libcuda-11.8-1, libcuda-12.0-1, libcuda-12.1-1, libcuda-12.2-1, libcuda-12.3-1, libcuda-12.4-1, libcuda-12.5-1, libcuda-12.6-1, libcuda-12.7-1, libcuda-12.8-1, libcuda-5.0-1, libcuda-5.5-1, libcuda-6.0-1, libcuda-6.5-1, libcuda-7.0-1, libcuda-7.5-1, libcuda-8.0-1, libcuda-9.0-1, libcuda-9.1-1, libcuda-9.2-1, libcuda.so.1 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libcuda1 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-compute, libnvidia-ml.so.1 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-ml1 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-opencl-icd, opencl-icd

  </details>

- **libnvidia-container-dev**
  - Latest version: 1.12.1-0pop1~1679417696~22.04~d17aa6f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA container runtime library (development files)
  - Homepage: https://github.com/NVIDIA/libnvidia-container
  - Install: `sudo apt-get install libnvidia-container-dev`
  - Install (apt): `sudo apt install libnvidia-container-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: libs
  - Priority: optional
  - depends: libnvidia-container1 (= 1.12.1-0pop1~1679417696~22.04~d17aa6f)

  </details>

- **libnvidia-container-tools**
  - Latest version: 1.12.1-0pop1~1679417696~22.04~d17aa6f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA container runtime library (command-line tools)
  - Homepage: https://github.com/NVIDIA/libnvidia-container
  - Install: `sudo apt-get install libnvidia-container-tools`
  - Install (apt): `sudo apt install libnvidia-container-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libnvidia-container1 (>= 1.8.0)

  </details>

- **libnvidia-container1**
  - Latest version: 1.12.1-0pop1~1679417696~22.04~d17aa6f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA container runtime library
  - Homepage: https://github.com/NVIDIA/libnvidia-container
  - Install: `sudo apt-get install libnvidia-container1`
  - Install (apt): `sudo apt install libnvidia-container1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libelf1 (>= 0.142), libseccomp2 (>= 0.0.0~20120605), libtirpc3 (>= 1.0.2)

  </details>

- **libnvidia-container1-dbg**
  - Latest version: 1.12.1-0pop1~1679417696~22.04~d17aa6f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA container runtime library (debugging symbols)
  - Homepage: https://github.com/NVIDIA/libnvidia-container
  - Install: `sudo apt-get install libnvidia-container1-dbg`
  - Install (apt): `sudo apt install libnvidia-container1-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: libs
  - Priority: optional
  - depends: libnvidia-container1 (= 1.12.1-0pop1~1679417696~22.04~d17aa6f)

  </details>

- **libnvidia-decode-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-430`
  - Install (apt): `sudo apt install libnvidia-decode-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-440`
  - Install (apt): `sudo apt install libnvidia-decode-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-450`
  - Install (apt): `sudo apt install libnvidia-decode-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-455`
  - Install (apt): `sudo apt install libnvidia-decode-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-460`
  - Install (apt): `sudo apt install libnvidia-decode-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-465`
  - Install (apt): `sudo apt install libnvidia-decode-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-470

  </details>

- **libnvidia-decode-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA Video Decoding runtime libraries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-470`
  - Install (apt): `sudo apt install libnvidia-decode-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libnvidia-compute-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libx11-6, libxext6
  - conflicts: libnvidia-decode
  - replaces: libnvidia-decode
  - provides: libnvidia-decode

  </details>

- **libnvidia-decode-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-495`
  - Install (apt): `sudo apt install libnvidia-decode-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-515`
  - Install (apt): `sudo apt install libnvidia-decode-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-525`
  - Install (apt): `sudo apt install libnvidia-decode-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-535`
  - Install (apt): `sudo apt install libnvidia-decode-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-545`
  - Install (apt): `sudo apt install libnvidia-decode-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-550`
  - Install (apt): `sudo apt install libnvidia-decode-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-555`
  - Install (apt): `sudo apt install libnvidia-decode-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-560`
  - Install (apt): `sudo apt install libnvidia-decode-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-565`
  - Install (apt): `sudo apt install libnvidia-decode-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-570`
  - Install (apt): `sudo apt install libnvidia-decode-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-decode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-575`
  - Install (apt): `sudo apt install libnvidia-decode-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-decode-580

  </details>

- **libnvidia-decode-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA Video Decoding runtime libraries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-decode-580`
  - Install (apt): `sudo apt install libnvidia-decode-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libnvidia-compute-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libx11-6, libxext6
  - conflicts: libnvidia-decode
  - replaces: libnvidia-decode
  - provides: libnvidia-decode

  </details>

- **libnvidia-egl-wayland-dev**
  - Latest version: 1:1.1.20-1pop1~1759419563~22.04~6d277c8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Wayland EGL External Platform library -- development files
  - Homepage: https://github.com/NVIDIA/egl-wayland
  - Install: `sudo apt-get install libnvidia-egl-wayland-dev`
  - Install (apt): `sudo apt install libnvidia-egl-wayland-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@mmurphy.dev>
  - Section: libdevel
  - Priority: optional
  - depends: libnvidia-egl-wayland1 (= 1:1.1.20-1pop1~1759419563~22.04~6d277c8)

  </details>

- **libnvidia-egl-wayland1**
  - Latest version: 1:1.1.20-1pop1~1759419563~22.04~6d277c8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Wayland EGL External Platform library -- shared library
  - Homepage: https://github.com/NVIDIA/egl-wayland
  - Install: `sudo apt-get install libnvidia-egl-wayland1`
  - Install (apt): `sudo apt install libnvidia-egl-wayland1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@mmurphy.dev>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm2 (>= 2.4.99), libwayland-client0 (>= 1.20.0), libwayland-server0 (>= 1.2.0)
  - conflicts: libnvidia-gl-390, libnvidia-gl-410 (<< 410.93), libnvidia-legacy-390xx-egl-wayland1, nvidia-egl-wayland-common
  - replaces: libnvidia-gl-390, libnvidia-gl-410 (<< 410.93), libnvidia-legacy-390xx-egl-wayland1, nvidia-egl-wayland-common

  </details>

- **libnvidia-encode-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-430`
  - Install (apt): `sudo apt install libnvidia-encode-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-440`
  - Install (apt): `sudo apt install libnvidia-encode-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-450`
  - Install (apt): `sudo apt install libnvidia-encode-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-455`
  - Install (apt): `sudo apt install libnvidia-encode-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-460`
  - Install (apt): `sudo apt install libnvidia-encode-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-465`
  - Install (apt): `sudo apt install libnvidia-encode-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-470

  </details>

- **libnvidia-encode-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVENC Video Encoding runtime library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-470`
  - Install (apt): `sudo apt install libnvidia-encode-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libnvidia-decode-470
  - conflicts: libnvidia-encode
  - replaces: libnvidia-encode
  - provides: libnvidia-encode

  </details>

- **libnvidia-encode-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-495`
  - Install (apt): `sudo apt install libnvidia-encode-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-515`
  - Install (apt): `sudo apt install libnvidia-encode-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-525`
  - Install (apt): `sudo apt install libnvidia-encode-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-535`
  - Install (apt): `sudo apt install libnvidia-encode-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-545`
  - Install (apt): `sudo apt install libnvidia-encode-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-550`
  - Install (apt): `sudo apt install libnvidia-encode-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-555`
  - Install (apt): `sudo apt install libnvidia-encode-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-560`
  - Install (apt): `sudo apt install libnvidia-encode-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-565`
  - Install (apt): `sudo apt install libnvidia-encode-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-570`
  - Install (apt): `sudo apt install libnvidia-encode-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-encode-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-575`
  - Install (apt): `sudo apt install libnvidia-encode-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-encode-580

  </details>

- **libnvidia-encode-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVENC Video Encoding runtime library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-encode-580`
  - Install (apt): `sudo apt install libnvidia-encode-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.3), libnvidia-decode-580 (>= 580.119.02)
  - conflicts: libnvidia-encode
  - replaces: libnvidia-encode
  - provides: libnvidia-encode

  </details>

- **libnvidia-extra-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-440`
  - Install (apt): `sudo apt install libnvidia-extra-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-470

  </details>

- **libnvidia-extra-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-450`
  - Install (apt): `sudo apt install libnvidia-extra-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-470

  </details>

- **libnvidia-extra-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-455`
  - Install (apt): `sudo apt install libnvidia-extra-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-470

  </details>

- **libnvidia-extra-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-460`
  - Install (apt): `sudo apt install libnvidia-extra-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-470

  </details>

- **libnvidia-extra-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-465`
  - Install (apt): `sudo apt install libnvidia-extra-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-470

  </details>

- **libnvidia-extra-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Extra libraries for the NVIDIA driver
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-470`
  - Install (apt): `sudo apt install libnvidia-extra-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - conflicts: libnvidia-extra
  - breaks: libnvidia-common-470 (<< 440.64-0ubuntu3~)
  - replaces: libnvidia-common-470 (<< 440.64-0ubuntu3~), libnvidia-extra
  - provides: libnvidia-extra

  </details>

- **libnvidia-extra-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-495`
  - Install (apt): `sudo apt install libnvidia-extra-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-515`
  - Install (apt): `sudo apt install libnvidia-extra-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-525`
  - Install (apt): `sudo apt install libnvidia-extra-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-535`
  - Install (apt): `sudo apt install libnvidia-extra-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-545`
  - Install (apt): `sudo apt install libnvidia-extra-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-550`
  - Install (apt): `sudo apt install libnvidia-extra-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-555`
  - Install (apt): `sudo apt install libnvidia-extra-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-560`
  - Install (apt): `sudo apt install libnvidia-extra-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-565`
  - Install (apt): `sudo apt install libnvidia-extra-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-570`
  - Install (apt): `sudo apt install libnvidia-extra-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-extra-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-575`
  - Install (apt): `sudo apt install libnvidia-extra-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-extra-580

  </details>

- **libnvidia-extra-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Extra libraries for the NVIDIA driver
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-extra-580`
  - Install (apt): `sudo apt install libnvidia-extra-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - conflicts: libnvidia-extra
  - breaks: libnvidia-common-580 (<< 440.64-0ubuntu3~)
  - replaces: libnvidia-common-580 (<< 440.64-0ubuntu3~), libnvidia-extra
  - provides: libnvidia-extra

  </details>

- **libnvidia-fbc1-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-430`
  - Install (apt): `sudo apt install libnvidia-fbc1-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-440`
  - Install (apt): `sudo apt install libnvidia-fbc1-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-450`
  - Install (apt): `sudo apt install libnvidia-fbc1-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-455`
  - Install (apt): `sudo apt install libnvidia-fbc1-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-460`
  - Install (apt): `sudo apt install libnvidia-fbc1-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-465`
  - Install (apt): `sudo apt install libnvidia-fbc1-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-470

  </details>

- **libnvidia-fbc1-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA OpenGL-based Framebuffer Capture runtime library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-470`
  - Install (apt): `sudo apt install libnvidia-fbc1-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libgl1, libx11-6, libxext6
  - conflicts: libnvidia-fbc1
  - replaces: libnvidia-fbc1
  - provides: libnvidia-fbc1

  </details>

- **libnvidia-fbc1-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-495`
  - Install (apt): `sudo apt install libnvidia-fbc1-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-515`
  - Install (apt): `sudo apt install libnvidia-fbc1-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-525`
  - Install (apt): `sudo apt install libnvidia-fbc1-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-535`
  - Install (apt): `sudo apt install libnvidia-fbc1-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-545`
  - Install (apt): `sudo apt install libnvidia-fbc1-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-550`
  - Install (apt): `sudo apt install libnvidia-fbc1-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-555`
  - Install (apt): `sudo apt install libnvidia-fbc1-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-560`
  - Install (apt): `sudo apt install libnvidia-fbc1-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-565`
  - Install (apt): `sudo apt install libnvidia-fbc1-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-570`
  - Install (apt): `sudo apt install libnvidia-fbc1-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-fbc1-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-575`
  - Install (apt): `sudo apt install libnvidia-fbc1-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-fbc1-580

  </details>

- **libnvidia-fbc1-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA OpenGL-based Framebuffer Capture runtime library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-fbc1-580`
  - Install (apt): `sudo apt install libnvidia-fbc1-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libx11-6, libxext6
  - conflicts: libnvidia-fbc1
  - replaces: libnvidia-fbc1
  - provides: libnvidia-fbc1

  </details>

- **libnvidia-gl-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-430`
  - Install (apt): `sudo apt install libnvidia-gl-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-440`
  - Install (apt): `sudo apt install libnvidia-gl-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-450`
  - Install (apt): `sudo apt install libnvidia-gl-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-455`
  - Install (apt): `sudo apt install libnvidia-gl-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-460`
  - Install (apt): `sudo apt install libnvidia-gl-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-465`
  - Install (apt): `sudo apt install libnvidia-gl-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-470

  </details>

- **libnvidia-gl-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA OpenGL/GLX/EGL/GLES GLVND libraries and Vulkan ICD
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-470`
  - Install (apt): `sudo apt install libnvidia-gl-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.10), libegl1, libgcc-s1 (>= 4.2), libnvidia-common-470, libnvidia-egl-wayland1 (>= 1:1.1.20-1pop1~1759419563~22.04~6d277c8), libx11-6, libxext6
  - conflicts: libnvidia-gl
  - replaces: libnvidia-gl, nvidia-384 (<< 390.25), nvidia-390 (<< 390.25-0ubuntu1)
  - provides: libegl-vendor, libglx-vendor, libnvidia-gl

  </details>

- **libnvidia-gl-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-495`
  - Install (apt): `sudo apt install libnvidia-gl-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-515`
  - Install (apt): `sudo apt install libnvidia-gl-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-525`
  - Install (apt): `sudo apt install libnvidia-gl-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-535`
  - Install (apt): `sudo apt install libnvidia-gl-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-545`
  - Install (apt): `sudo apt install libnvidia-gl-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-550`
  - Install (apt): `sudo apt install libnvidia-gl-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-555`
  - Install (apt): `sudo apt install libnvidia-gl-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-560`
  - Install (apt): `sudo apt install libnvidia-gl-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-565`
  - Install (apt): `sudo apt install libnvidia-gl-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-570`
  - Install (apt): `sudo apt install libnvidia-gl-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-gl-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-575`
  - Install (apt): `sudo apt install libnvidia-gl-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-gl-580

  </details>

- **libnvidia-gl-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA OpenGL/GLX/EGL/GLES GLVND libraries and Vulkan ICD
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-gl-580`
  - Install (apt): `sudo apt install libnvidia-gl-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.10), libdrm2 (>= 2.4.75), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libnvidia-common-580, libnvidia-compute-580 (>= 580.119.02), libnvidia-egl-wayland1, libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-dri3-0 (>= 1.13), libxcb-present0, libxcb1 (>= 1.12), libxext6
  - conflicts: libnvidia-egl-gbm1, libnvidia-gl
  - replaces: libnvidia-gl
  - provides: libegl-vendor, libglx-vendor, libnvidia-gl

  </details>

- **libnvidia-ifr1-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-430`
  - Install (apt): `sudo apt install libnvidia-ifr1-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-440`
  - Install (apt): `sudo apt install libnvidia-ifr1-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-450`
  - Install (apt): `sudo apt install libnvidia-ifr1-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-455`
  - Install (apt): `sudo apt install libnvidia-ifr1-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-460`
  - Install (apt): `sudo apt install libnvidia-ifr1-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libnvidia-ifr1-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-465`
  - Install (apt): `sudo apt install libnvidia-ifr1-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-ifr1-470

  </details>

- **libnvidia-ifr1-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA OpenGL-based Inband Frame Readback runtime library
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install libnvidia-ifr1-470`
  - Install (apt): `sudo apt install libnvidia-ifr1-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.3.2), libgl1, libnvidia-gl-470, libx11-6
  - conflicts: libnvidia-ifr1
  - replaces: libnvidia-ifr1
  - provides: libnvidia-ifr1

  </details>

- **libnvpair3linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Solaris name-value library for Linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libnvpair3linux`
  - Install (apt): `sudo apt install libnvpair3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.30), libtirpc3 (>= 1.0.2)
  - breaks: libnvpair1, libnvpair3
  - replaces: libnvpair1, libnvpair3

  </details>

- **libpam-systemd**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: system and service manager - PAM module
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libpam-systemd`
  - Install (apt): `sudo apt install libpam-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: standard
  - depends: default-dbus-system-bus | dbus-system-bus, libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libpam-runtime (>= 1.0.1-6), libpam0g (>= 0.99.7.1), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), systemd-sysv
  - provides: default-logind (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), logind (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libpam-zfs**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PAM module for managing encryption keys for ZFS
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libpam-zfs`
  - Install (apt): `sudo apt install libpam-zfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libnvpair3linux (>= 0.8.2), libpam-runtime, libpam0g (>= 1.1.0), libssl3 (>= 3.0.0~~alpha1), libzfs6linux (>= 2.2)

  </details>

- **libpipewire-0.3-0**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libpipewire-0.3-0`
  - Install (apt): `sudo apt install libpipewire-0.3-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libspa-0.2-modules (= 1.0.2~1707732619~22.04~b8b871b)
  - recommends: libpipewire-0.3-common
  - suggests: pipewire (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **libpipewire-0.3-common**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - common files
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libpipewire-0.3-common`
  - Install (apt): `sudo apt install libpipewire-0.3-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional

  </details>

- **libpipewire-0.3-dev**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - development
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libpipewire-0.3-dev`
  - Install (apt): `sudo apt install libpipewire-0.3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libdevel
  - Priority: optional
  - depends: libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), libspa-0.2-dev (= 1.0.2~1707732619~22.04~b8b871b)
  - suggests: pipewire-doc

  </details>

- **libpipewire-0.3-modules**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - modules
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libpipewire-0.3-modules`
  - Install (apt): `sudo apt install libpipewire-0.3-modules`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libavahi-client3 (>= 0.6.16), libavahi-common3 (>= 0.6.16), libc6 (>= 2.34), libcanberra0 (>= 0.2), libdbus-1-3 (>= 1.9.14), libffado2 (>= 2.4.5), libglib2.0-0 (>= 2.31.8), libmysofa1 (>= 0.6~), libopus0 (>= 1.1), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), libpulse0 (>= 0.99.1), libselinux1 (>= 3.1~), libsndfile1 (>= 1.0.20), libssl3 (>= 3.0.0~~alpha1), libsystemd0, libx11-6 (>= 2:1.7.0), libxfixes3 (>= 1:6.0.0)
  - breaks: pipewire (<< 0.3.5)
  - replaces: pipewire (<< 0.3.5)

  </details>

- **libplymouth-dev**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: graphical boot animation and logger - development files
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install libplymouth-dev`
  - Install (apt): `sudo apt install libplymouth-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libplymouth5 (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - breaks: plymouth-dev (<< 0.9.2-1~)
  - replaces: plymouth-dev (<< 0.9.2-1~)

  </details>

- **libplymouth5**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: graphical boot animation and logger - shared libraries
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install libplymouth5`
  - Install (apt): `sudo apt install libplymouth5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libpng16-16 (>= 1.6.2-1), libudev1 (>= 183)
  - breaks: plymouth (<< 0.9.2-1~)
  - replaces: plymouth (<< 0.9.2-1~)

  </details>

- **libpop-analytics-panel**
  - Latest version: 1.0.0~1666427221~22.04~f1b9258
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop desktop settings widget library
  - Homepage: https://github.com/pop-os/analytics-panel
  - Install: `sudo apt-get install libpop-analytics-panel`
  - Install (apt): `sudo apt install libpop-analytics-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.17.9), libhandy-1-0 (>= 0.82.0), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libpop-analytics-panel-dev**
  - Latest version: 1.0.0~1666427221~22.04~f1b9258
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop analytics panel library header
  - Homepage: https://github.com/pop-os/analytics-panel
  - Install: `sudo apt-get install libpop-analytics-panel-dev`
  - Install (apt): `sudo apt install libpop-analytics-panel-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libpop-analytics-panel (= 1.0.0~1666427221~22.04~f1b9258)

  </details>

- **libpop-desktop-widget**
  - Latest version: 0.2.0~1752519176~22.04~f09bbd9
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop desktop settings widget library
  - Homepage: https://github.com/pop-os/desktop-widget
  - Install: `sudo apt-get install libpop-desktop-widget`
  - Install (apt): `sudo apt install libpop-desktop-widget`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.16.2), libhandy-1-0 (>= 0.82.0), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libpop-desktop-widget-dev**
  - Latest version: 0.2.0~1752519176~22.04~f09bbd9
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop desktop settings widget library header
  - Homepage: https://github.com/pop-os/desktop-widget
  - Install: `sudo apt-get install libpop-desktop-widget-dev`
  - Install (apt): `sudo apt install libpop-desktop-widget-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libpop-desktop-widget (= 0.2.0~1752519176~22.04~f09bbd9)

  </details>

- **libpop-support-panel**
  - Latest version: 1.0.0~1659970858~22.04~d410980
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop desktop settings widget library
  - Homepage: https://github.com/pop-os/support-panel
  - Install: `sudo apt-get install libpop-support-panel`
  - Install (apt): `sudo apt install libpop-support-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.11.5), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libpop-support-panel-dev**
  - Latest version: 1.0.0~1659970858~22.04~d410980
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop support panel library header
  - Homepage: https://github.com/pop-os/support-panel
  - Install: `sudo apt-get install libpop-support-panel-dev`
  - Install (apt): `sudo apt install libpop-support-panel-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libpop-support-panel (= 1.0.0~1659970858~22.04~d410980)

  </details>

- **libpop-system-updater-gtk**
  - Latest version: 0.1.0~1706713830~22.04~c208318
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GTK widget library for dynamic linking
  - Homepage: https://github.com/pop-os/system-updater
  - Install: `sudo apt-get install libpop-system-updater-gtk`
  - Install (apt): `sudo apt install libpop-system-updater-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.53.1), libgtk-3-0 (>= 3.11.7), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libpop-system-updater-gtk-dev**
  - Latest version: 0.1.0~1706713830~22.04~c208318
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Development libraries for libpop-system-updater-gtk
  - Homepage: https://github.com/pop-os/system-updater
  - Install: `sudo apt-get install libpop-system-updater-gtk-dev`
  - Install (apt): `sudo apt install libpop-system-updater-gtk-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: admin
  - Priority: optional
  - depends: libpop-system-updater-gtk

  </details>

- **libpop-theme-switcher**
  - Latest version: 0.1.1~1650044254~22.04~8268856
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop theme switcher widget library
  - Homepage: https://github.com/pop-os/theme-switcher
  - Install: `sudo apt-get install libpop-theme-switcher`
  - Install (apt): `sudo apt install libpop-theme-switcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.11.5), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libpop-theme-switcher-dev**
  - Latest version: 0.1.1~1650044254~22.04~8268856
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop theme switcher widget library header
  - Homepage: https://github.com/pop-os/theme-switcher
  - Install: `sudo apt-get install libpop-theme-switcher-dev`
  - Install (apt): `sudo apt install libpop-theme-switcher-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libpop-theme-switcher (= 0.1.1~1650044254~22.04~8268856)

  </details>

- **libpop-upgrade-gtk**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: The Pop upgrade experience as a GTK widget in a dylib
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install libpop-upgrade-gtk`
  - Install (apt): `sudo apt install libpop-upgrade-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libpop-system-updater-gtk, libssl3 (>= 3.0.0~~alpha1), pop-upgrade (= 1.0.0~1767378833~22.04~10865b5)

  </details>

- **libpop-upgrade-gtk-dev**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: The C headers required for linking the libpop-upgrade-gtk widget
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install libpop-upgrade-gtk-dev`
  - Install (apt): `sudo apt install libpop-upgrade-gtk-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libpop-upgrade-gtk (= 1.0.0~1767378833~22.04~10865b5)

  </details>

- **libs76-hidpi-widget**
  - Latest version: 0.1.1~1643345917~22.04~a66eb84
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 HiDPI daemon widget library
  - Homepage: https://github.com/pop-os/hidpi-widget
  - Install: `sudo apt-get install libs76-hidpi-widget`
  - Install (apt): `sudo apt install libs76-hidpi-widget`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.31.8), libgtk-3-0 (>= 3.9.10), libhandy-1-0 (>= 0.0.10), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libs76-hidpi-widget-dev**
  - Latest version: 0.1.1~1643345917~22.04~a66eb84
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop theme switcher widget library header
  - Homepage: https://github.com/pop-os/hidpi-widget
  - Install: `sudo apt-get install libs76-hidpi-widget-dev`
  - Install (apt): `sudo apt install libs76-hidpi-widget-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libs76-hidpi-widget (= 0.1.1~1643345917~22.04~a66eb84)

  </details>

- **libspa-0.2-avb**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - avb plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libspa-0.2-avb`
  - Install (apt): `sudo apt install libspa-0.2-avb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libspa-0.2-modules (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **libspa-0.2-bluetooth**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - bluetooth plugins
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libspa-0.2-bluetooth`
  - Install (apt): `sudo apt install libspa-0.2-bluetooth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libbluetooth3 (>= 4.91), libc6 (>= 2.33), libdbus-1-3 (>= 1.9.14), libfdk-aac2 (>= 2.0.1), libfreeaptx0 (>= 0.1.1), libglib2.0-0 (>= 2.37.3), libldacbt-abr2 (>= 2.0.2), libldacbt-enc2 (>= 2.0.2), libopus0 (>= 1.1), libsbc1 (>= 1.5), libspa-0.2-modules (= 1.0.2~1707732619~22.04~b8b871b), libusb-1.0-0 (>= 2:1.0.16)

  </details>

- **libspa-0.2-dev**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server Simple Plugin API - development
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libspa-0.2-dev`
  - Install (apt): `sudo apt install libspa-0.2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libdevel
  - Priority: optional
  - suggests: pipewire-doc

  </details>

- **libspa-0.2-jack**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - JACK client
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libspa-0.2-jack`
  - Install (apt): `sudo apt install libspa-0.2-jack`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libspa-0.2-modules (= 1.0.2~1707732619~22.04~b8b871b), pipewire-jack (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **libspa-0.2-modules**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server Simple Plugin API - modules
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install libspa-0.2-modules`
  - Install (apt): `sudo apt install libspa-0.2-modules`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libasound2 (>= 1.2.1.1), libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 3.3.1), libstdc++6 (>= 11), libsystemd0, libudev1 (>= 183), libwebrtc-audio-processing1
  - breaks: pipewire (<< 0.3.5)
  - replaces: pipewire (<< 0.3.5)

  </details>

- **libsystem76-keyboard-configurator**
  - Latest version: 1.3.12~1762964887~22.04~2f774b2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop keyboard backlight library
  - Homepage: https://github.com/pop-os/keyboard-configurator
  - Install: `sudo apt-get install libsystem76-keyboard-configurator`
  - Install (apt): `sudo apt install libsystem76-keyboard-configurator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libcairo2 (>= 1.6.0), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.53.1), libgtk-3-0 (>= 3.13.7)

  </details>

- **libsystem76-keyboard-configurator-dev**
  - Latest version: 1.3.12~1762964887~22.04~2f774b2
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop keyboard backlight library header
  - Homepage: https://github.com/pop-os/keyboard-configurator
  - Install: `sudo apt-get install libsystem76-keyboard-configurator-dev`
  - Install (apt): `sudo apt install libsystem76-keyboard-configurator-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libsystem76-keyboard-configurator (= 1.3.12~1762964887~22.04~2f774b2)

  </details>

- **libsystemd-dev**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: systemd utility library - development files
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libsystemd-dev`
  - Install (apt): `sudo apt install libsystemd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libsystemd0 (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libsystemd0**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: systemd utility library
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libsystemd0`
  - Install (apt): `sudo apt install libsystemd0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - preDepends: libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libgcrypt20 (>= 1.9.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libzstd1 (>= 1.4.0)

  </details>

- **libtpm2-totp0**
  - Latest version: 0.1.0~1639007579~22.04~323d2a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: TPM2 TOTP library
  - Homepage: https://github.com/pop-os/tpm2-totp
  - Install: `sudo apt-get install libtpm2-totp0`
  - Install (apt): `sudo apt install libtpm2-totp0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libtss2-esys-3.0.2-0 (>= 2.3.1), libtss2-mu0 (>= 3.0.1)

  </details>

- **libtraceevent-dev**
  - Latest version: 1:1.8.2-1pop1~1732292197~22.04~59d5f9b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel trace event library (development files)
  - Install: `sudo apt-get install libtraceevent-dev`
  - Install (apt): `sudo apt install libtraceevent-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libtraceevent1 (= 1:1.8.2-1pop1~1732292197~22.04~59d5f9b)

  </details>

- **libtraceevent-doc**
  - Latest version: 1:1.8.2-1pop1~1732292197~22.04~59d5f9b
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel trace event library (documentation)
  - Install: `sudo apt-get install libtraceevent-doc`
  - Install (apt): `sudo apt install libtraceevent-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libtraceevent1**
  - Latest version: 1:1.8.2-1pop1~1732292197~22.04~59d5f9b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel trace event library (shared library)
  - Install: `sudo apt-get install libtraceevent1`
  - Install (apt): `sudo apt install libtraceevent1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **libtraceevent1-plugin**
  - Latest version: 1:1.8.2-1pop1~1732292197~22.04~59d5f9b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel trace event library (plugins)
  - Install: `sudo apt-get install libtraceevent1-plugin`
  - Install (apt): `sudo apt install libtraceevent1-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libtraceevent1 (= 1:1.8.2-1pop1~1732292197~22.04~59d5f9b)

  </details>

- **libtracefs-dev**
  - Latest version: 1.8.0-1pop1~1740100127~22.04~bc8edca
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: API to access the kernel tracefs directory (development files)
  - Homepage: https://git.kernel.org/pub/scm/libs/libtrace/libtracefs.git
  - Install: `sudo apt-get install libtracefs-dev`
  - Install (apt): `sudo apt install libtracefs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libtracefs1 (= 1.8.0-1pop1~1740100127~22.04~bc8edca)
  - suggests: libtracefs-doc

  </details>

- **libtracefs-doc**
  - Latest version: 1.8.0-1pop1~1740100127~22.04~bc8edca
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: API to access the kernel tracefs directory (documentation)
  - Homepage: https://git.kernel.org/pub/scm/libs/libtrace/libtracefs.git
  - Install: `sudo apt-get install libtracefs-doc`
  - Install (apt): `sudo apt install libtracefs-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libtracefs1**
  - Latest version: 1.8.0-1pop1~1740100127~22.04~bc8edca
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: API to access the kernel tracefs directory (shared library)
  - Homepage: https://git.kernel.org/pub/scm/libs/libtrace/libtracefs.git
  - Install: `sudo apt-get install libtracefs1`
  - Install (apt): `sudo apt install libtracefs1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.33), libtraceevent1 (>= 1:1.8.1)

  </details>

- **libudev-dev**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libudev development files
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libudev-dev`
  - Install (apt): `sudo apt install libudev-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libudev1 (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **libudev1**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: libudev shared library
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install libudev1`
  - Install (apt): `sudo apt install libudev1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **libuutil3linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Solaris userland utility library for Linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libuutil3linux`
  - Install (apt): `sudo apt install libuutil3linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - breaks: libuutil1, libuutil3
  - replaces: libuutil1, libuutil3

  </details>

- **libvdpau-dev**
  - Latest version: 1.5-3pop1~1742860670~22.04~e422eef
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Video Decode and Presentation API for Unix (development files)
  - Homepage: https://www.freedesktop.org/wiki/Software/VDPAU/
  - Install: `sudo apt-get install libvdpau-dev`
  - Install (apt): `sudo apt install libvdpau-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libdevel
  - Priority: optional
  - depends: libvdpau1 (= 1.5-3pop1~1742860670~22.04~e422eef), libx11-dev
  - suggests: libvdpau-doc

  </details>

- **libvdpau-doc**
  - Latest version: 1.5-3pop1~1742860670~22.04~e422eef
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Video Decode and Presentation API for Unix (documentation)
  - Homepage: https://www.freedesktop.org/wiki/Software/VDPAU/
  - Install: `sudo apt-get install libvdpau-doc`
  - Install (apt): `sudo apt install libvdpau-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: doc
  - Priority: optional

  </details>

- **libvdpau1**
  - Latest version: 1.5-3pop1~1742860670~22.04~e422eef
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Video Decode and Presentation API for Unix (libraries)
  - Homepage: https://www.freedesktop.org/wiki/Software/VDPAU/
  - Install: `sudo apt-get install libvdpau1`
  - Install (apt): `sudo apt install libvdpau1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libx11-6 (>= 2:1.4.99.1), libxext6
  - recommends: vdpau-driver-all | vdpau-driver

  </details>

- **libvrui3**
  - Latest version: 8.0.002~1670886377~22.04~7e0e238
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Virtual Reality UI Toolkit - shared library
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Vrui/
  - Install: `sudo apt-get install libvrui3`
  - Install (apt): `sudo apt install libvrui3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libc6 (>= 2.34), libdc1394-25 (>= 2.2.6), libfreetype6 (>= 2.2.1), libgcc-s1 (>= 3.0), libgl1, libjpeg8 (>= 8c), libogg0 (>= 1.0rc3), libopenal1 (>= 1.14), libpng16-16 (>= 1.6.2-1), libspeex1 (>= 1.2~beta3-1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 11), libtheora0 (>= 1.0), libtiff5 (>= 4.0.3), libudev1 (>= 183), libusb-1.0-0 (>= 2:1.0.22), libx11-6, zlib1g (>= 1:1.1.4)

  </details>

- **libvrui3-dev**
  - Latest version: 8.0.002~1670886377~22.04~7e0e238
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Virtual Reality UI Toolkit - shared library development files
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Vrui/
  - Install: `sudo apt-get install libvrui3-dev`
  - Install (apt): `sudo apt install libvrui3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libvrui3 (= 8.0.002~1670886377~22.04~7e0e238)
  - provides: libvrui-dev

  </details>

- **libvulkan-dev**
  - Latest version: 1.3.280.0-1pop1~1722439676~22.04~a41a7d6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vulkan loader library -- development files
  - Homepage: https://github.com/KhronosGroup/Vulkan-Loader
  - Install: `sudo apt-get install libvulkan-dev`
  - Install (apt): `sudo apt install libvulkan-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libvulkan1 (= 1.3.280.0-1pop1~1722439676~22.04~a41a7d6), python3:any
  - breaks: vulkan-headers, vulkan-sdk-headers
  - replaces: vulkan-headers, vulkan-sdk-headers

  </details>

- **libvulkan1**
  - Latest version: 1.3.280.0-1pop1~1722439676~22.04~a41a7d6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vulkan loader library
  - Homepage: https://github.com/KhronosGroup/Vulkan-Loader
  - Install: `sudo apt-get install libvulkan1`
  - Install (apt): `sudo apt install libvulkan1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: mesa-vulkan-drivers | vulkan-icd
  - breaks: libvulkan-dev (<< 1.1.70+dfsg1-2), vulkan-loader
  - replaces: libvulkan-dev (<< 1.1.70+dfsg1-2), vulkan-loader

  </details>

- **libwayland-bin**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - binary utilities
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-bin`
  - Install (apt): `sudo apt install libwayland-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libexpat1 (>= 2.0.1), libxml2 (>= 2.7.4)

  </details>

- **libwayland-client0**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - client library
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-client0`
  - Install (apt): `sudo apt install libwayland-client0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libffi8 (>= 3.4)

  </details>

- **libwayland-cursor0**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - cursor library
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-cursor0`
  - Install (apt): `sudo apt install libwayland-cursor0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.28), libwayland-client0 (>= 1.20.0)

  </details>

- **libwayland-dev**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - development files
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-dev`
  - Install (apt): `sudo apt install libwayland-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libffi-dev, libwayland-bin (= 1.23.1-3pop1~1755878928~22.04~51871c7), libwayland-client0 (= 1.23.1-3pop1~1755878928~22.04~51871c7), libwayland-cursor0 (= 1.23.1-3pop1~1755878928~22.04~51871c7), libwayland-egl1 (= 1.23.1-3pop1~1755878928~22.04~51871c7), libwayland-server0 (= 1.23.1-3pop1~1755878928~22.04~51871c7)
  - suggests: libwayland-doc

  </details>

- **libwayland-doc**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - documentation files
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-doc`
  - Install (apt): `sudo apt install libwayland-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: doc
  - Priority: optional

  </details>

- **libwayland-egl-backend-dev**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - EGL backend development files
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-egl-backend-dev`
  - Install (apt): `sudo apt install libwayland-egl-backend-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional

  </details>

- **libwayland-egl1**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - EGL library
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-egl1`
  - Install (apt): `sudo apt install libwayland-egl1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.2.5)

  </details>

- **libwayland-server0**
  - Latest version: 1.23.1-3pop1~1755878928~22.04~51871c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wayland compositor infrastructure - server library
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install libwayland-server0`
  - Install (apt): `sudo apt install libwayland-server0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libffi8 (>= 3.4)

  </details>

- **libwireplumber-0.4-0**
  - Latest version: 0.4.17~1701792620~22.04~e8b4d60
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Shared libraries for WirePlumber
  - Homepage: https://gitlab.freedesktop.org/pipewire/wireplumber
  - Install: `sudo apt-get install libwireplumber-0.4-0`
  - Install (apt): `sudo apt install libwireplumber-0.4-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@alioth-lists.debian.net>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.33), libglib2.0-0 (>= 2.62), liblua5.4-0 (>= 5.4.4), libpipewire-0.3-0 (>= 0.3.52), libsystemd0

  </details>

- **libwireplumber-0.4-dev**
  - Latest version: 0.4.17~1701792620~22.04~e8b4d60
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Development files for WirePlumber
  - Homepage: https://gitlab.freedesktop.org/pipewire/wireplumber
  - Install: `sudo apt-get install libwireplumber-0.4-dev`
  - Install (apt): `sudo apt install libwireplumber-0.4-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@alioth-lists.debian.net>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-wp-0.4 (= 0.4.17~1701792620~22.04~e8b4d60), libglib2.0-dev, libpipewire-0.3-dev, libwireplumber-0.4-0 (= 0.4.17~1701792620~22.04~e8b4d60)
  - suggests: wireplumber-doc

  </details>

- **libxatracker-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: X acceleration library -- development files
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libxatracker-dev`
  - Install (apt): `sudo apt install libxatracker-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libxatracker2 (= 25.1.5-1pop0~1756399231~22.04~b84bab8)

  </details>

- **libxatracker2**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: X acceleration library -- runtime
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install libxatracker2`
  - Install (apt): `sudo apt install libxatracker2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm-intel1 (>= 2.4.125-1), libdrm2 (>= 2.4.125-1), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libllvm15, libstdc++6 (>= 11), libzstd1 (>= 1.4.0), zlib1g (>= 1:1.1.4)

  </details>

- **libxmlb-dev**
  - Latest version: 0.3.10-2pop1~1686237323~22.04~f779d98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Development files for libxmlb
  - Homepage: https://github.com/hughsie/libxmlb
  - Install: `sudo apt-get install libxmlb-dev`
  - Install (apt): `sudo apt install libxmlb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI team <debian-efi@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xmlb-2.0 (= 0.3.10-2pop1~1686237323~22.04~f779d98), liblzma-dev

  </details>

- **libxmlb-tests**
  - Latest version: 0.3.10-2pop1~1686237323~22.04~f779d98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Installed tests for libxmlb2
  - Homepage: https://github.com/hughsie/libxmlb
  - Install: `sudo apt-get install libxmlb-tests`
  - Install (apt): `sudo apt install libxmlb-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI team <debian-efi@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0 (>= 2.53.2), liblzma5 (>= 5.1.1alpha+20120614), libxmlb2 (= 0.3.10-2pop1~1686237323~22.04~f779d98), shared-mime-info

  </details>

- **libxmlb-utils**
  - Latest version: 0.3.10-2pop1~1686237323~22.04~f779d98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Binary XML library - Command-line utility
  - Homepage: https://github.com/hughsie/libxmlb
  - Install: `sudo apt-get install libxmlb-utils`
  - Install (apt): `sudo apt install libxmlb-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI team <debian-efi@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0 (>= 2.30.0), libxmlb2 (= 0.3.10-2pop1~1686237323~22.04~f779d98), shared-mime-info

  </details>

- **libxmlb2**
  - Latest version: 0.3.10-2pop1~1686237323~22.04~f779d98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Binary XML library
  - Homepage: https://github.com/hughsie/libxmlb
  - Install: `sudo apt-get install libxmlb2`
  - Install (apt): `sudo apt install libxmlb2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian EFI team <debian-efi@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.53.2), liblzma5 (>= 5.1.1alpha+20120614)

  </details>

- **libzfs4linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libzfs6linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzfs4linux`
  - Install (apt): `sudo apt install libzfs4linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libzfs6linux

  </details>

- **libzfs6linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS filesystem library for Linux - general support
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzfs6linux`
  - Install (apt): `sudo apt install libzfs6linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (>= 0.8.2), libssl3 (>= 3.0.0~~alpha1), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 0.8.2), zlib1g (>= 1:1.1.4)
  - recommends: libcurl4
  - breaks: libzfs2, libzfs4, libzfs4linux (<< 2.3.0)
  - replaces: libzfs2, libzfs4, libzfs4linux (<< 2.3.0)

  </details>

- **libzfsbootenv1linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS filesystem library for Linux - label info support
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzfsbootenv1linux`
  - Install (apt): `sudo apt install libzfsbootenv1linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libc6 (>= 2.8), libnvpair3linux (>= 0.8.2), libzfs6linux (>= 2.0)
  - breaks: libzfs2, libzfs4
  - replaces: libzfs2, libzfs4

  </details>

- **libzfslinux-dev**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS filesystem development files for Linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzfslinux-dev`
  - Install (apt): `sudo apt install libzfslinux-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libdevel
  - Priority: optional
  - depends: libblkid-dev, libnvpair3linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libssl-dev | libssl1.0-dev, libtirpc-dev, libuutil3linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzfs6linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzfsbootenv1linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzpool6linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), zlib1g-dev
  - provides: libnvpair-dev, libuutil-dev

  </details>

- **libzpool5linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for libzpool6linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzpool5linux`
  - Install (apt): `sudo apt install libzpool5linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libzpool6linux

  </details>

- **libzpool6linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS pool library for Linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install libzpool6linux`
  - Install (apt): `sudo apt install libzpool6linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/libs
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (>= 0.8.2), libudev1 (>= 183), libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
  - breaks: libzpool2, libzpool5, libzpool5linux (<< 2.3.0)
  - replaces: libzpool2, libzpool5, libzpool5linux (<< 2.3.0)

  </details>

- **linux-bpf-dev**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Headers for BPF development
  - Install: `sudo apt-get install linux-bpf-dev`
  - Install (apt): `sudo apt install linux-bpf-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional

  </details>

- **linux-buildinfo-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel buildinfo for version 6.17.9
  - Install: `sudo apt-get install linux-buildinfo-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-buildinfo-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional

  </details>

- **linux-cloud-tools-common**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel version specific cloud tools for version 6.17.9
  - Install: `sudo apt-get install linux-cloud-tools-common`
  - Install (apt): `sudo apt install linux-cloud-tools-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional

  </details>

- **linux-doc**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel specific documentation for version 6.17.9
  - Install: `sudo apt-get install linux-doc`
  - Install (apt): `sudo apt install linux-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **linux-firmware**
  - Latest version: 20250317.git1d4c88ee-0ubuntu1+system76~1763137702~22.04~f3aeef4
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware for Linux kernel drivers
  - Install: `sudo apt-get install linux-firmware`
  - Install (apt): `sudo apt install linux-firmware`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - recommends: firmware-sof-signed
  - conflicts: atmel-firmware
  - breaks: amd64-microcode (<= 3.20220411.1ubuntu1), linux-firmware-raspi2 (<= 1.20190819-0ubuntu2), linux-firmware-snapdragon (<= 1.2-0ubuntu1)
  - replaces: atmel-firmware, linux-firmware-snapdragon (<= 1.2-0ubuntu1), linux-restricted-common
  - provides: atmel-firmware

  </details>

- **linux-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Complete Generic Linux kernel and headers
  - Install: `sudo apt-get install linux-generic`
  - Install (apt): `sudo apt install linux-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: linux-headers-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425), linux-image-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425)

  </details>

- **linux-headers-6.17.9-76061709**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Header files related to Linux kernel version 6.17.9
  - Install: `sudo apt-get install linux-headers-6.17.9-76061709`
  - Install (apt): `sudo apt install linux-headers-6.17.9-76061709`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils

  </details>

- **linux-headers-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel headers for version 6.17.9
  - Install: `sudo apt-get install linux-headers-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-headers-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libdw1 (>= 0.171), libelf1 (>= 0.144), libssl3 (>= 3.0.0~~alpha1), linux-headers-6.17.9-76061709, zlib1g (>= 1:1.2.3.3)
  - provides: linux-headers, linux-headers-3.0

  </details>

- **linux-headers-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Generic Linux kernel headers
  - Install: `sudo apt-get install linux-headers-generic`
  - Install (apt): `sudo apt install linux-headers-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: linux-headers-6.17.9-76061709-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425)

  </details>

- **linux-image-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel image for version 6.17.9
  - Install: `sudo apt-get install linux-image-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-image-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: kmod, linux-base (>= 4.5ubuntu1~16.04.1), linux-modules-6.17.9-76061709-generic
  - recommends: initramfs-tools | linux-initramfs-tool, kernelstub | grub-pc | grub-efi-amd64 | grub-efi-ia32 | grub | lilo
  - suggests: bpftool, linux-headers-6.17.9-76061709-generic, linux-perf, linux-tools
  - conflicts: linux-image-unsigned-6.17.9-76061709-generic
  - provides: fuse-module, ivtv-modules, kvm-api-4, linux-image, redhat-cluster-modules, virtualbox-guest-modules

  </details>

- **linux-image-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Generic Linux kernel image
  - Install: `sudo apt-get install linux-image-generic`
  - Install (apt): `sudo apt install linux-image-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: amd64-microcode, intel-microcode, linux-firmware, linux-image-6.17.9-76061709-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425)
  - recommends: thermald
  - provides: wireguard-modules (= 1.0.0)

  </details>

- **linux-lib-rust-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust library files related to Linux kernel version 6.17.9
  - Install: `sudo apt-get install linux-lib-rust-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-lib-rust-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: coreutils

  </details>

- **linux-libc-dev**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux Kernel Headers for development
  - Install: `sudo apt-get install linux-libc-dev`
  - Install (apt): `sudo apt install linux-libc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - conflicts: linux-kernel-headers
  - replaces: linux-kernel-headers
  - provides: aufs-dev, linux-kernel-headers

  </details>

- **linux-modules-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel modules for version 6.17.9
  - Install: `sudo apt-get install linux-modules-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-modules-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: wireless-regdb

  </details>

- **linux-perf**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Performance analysis tools for Linux
  - Install: `sudo apt-get install linux-perf`
  - Install (apt): `sudo apt install linux-perf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libcapstone4 (>= 4), libdebuginfod1 (>= 0.180), libdw1 (>= 0.161), libelf1 (>= 0.144), libllvm14, liblzma5 (>= 5.1.1alpha+20120614), libnuma1 (>= 2.0.11), libpython3.10 (>= 3.10.0), libslang2 (>= 2.2.4), libstdc++6 (>= 11), libtraceevent1 (>= 1:1.3.0), zlib1g (>= 1:1.2.3.3)
  - breaks: linux-tools-common (<< 6.14.0-8~)
  - replaces: linux-tools-common (<< 6.14.0-8~)

  </details>

- **linux-source-6.17.9**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel source for version 6.17.9 with Ubuntu patches
  - Install: `sudo apt-get install linux-source-6.17.9`
  - Install (apt): `sudo apt install linux-source-6.17.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: binutils, bzip2, coreutils
  - recommends: gcc, libc-dev, make
  - suggests: kernel-package, libncurses-dev | ncurses-dev, libqt3-dev
  - provides: linux-source

  </details>

- **linux-system76**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 recommended Linux kernel
  - Install: `sudo apt-get install linux-system76`
  - Install (apt): `sudo apt install linux-system76`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: linux-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425)

  </details>

- **linux-tools-6.17.9-76061709**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel version specific tools for version 6.17.9-76061709
  - Install: `sudo apt-get install linux-tools-6.17.9-76061709`
  - Install (apt): `sudo apt install linux-tools-6.17.9-76061709`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libcap2 (>= 1:2.10), libpci3 (>= 1:3.5.1), libudev1 (>= 183), linux-tools-common

  </details>

- **linux-tools-6.17.9-76061709-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Linux kernel version specific tools for version 6.17.9-76061709
  - Install: `sudo apt-get install linux-tools-6.17.9-76061709-generic`
  - Install (apt): `sudo apt install linux-tools-6.17.9-76061709-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: linux-tools-6.17.9-76061709

  </details>

- **linux-tools-common**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel version specific tools for version 6.17.9
  - Install: `sudo apt-get install linux-tools-common`
  - Install (apt): `sudo apt install linux-tools-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: hwdata, lsb-release
  - recommends: bpftool (>= 7.6.0+6.14.0-8~), linux-perf
  - provides: linux-cpupower

  </details>

- **linux-tools-generic**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Generic Linux kernel tools
  - Install: `sudo apt-get install linux-tools-generic`
  - Install (apt): `sudo apt install linux-tools-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: linux-tools-6.17.9-76061709-generic (= 6.17.9-76061709.202511241048~1764704751~22.04~b24b425)
  - provides: linux-tools

  </details>

- **linux-tools-host**
  - Latest version: 6.17.9-76061709.202511241048~1764704751~22.04~b24b425
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Linux kernel VM host tools
  - Install: `sudo apt-get install linux-tools-host`
  - Install (apt): `sudo apt install linux-tools-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Kernel Team <kernel-team@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: python3

  </details>

- **llvm-spirv-15**
  - Latest version: 15.0.3-1pop1~1742906167~22.04~135e309
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: bi-directional translator for LLVM/SPIRV
  - Homepage: https://github.com/KhronosGroup/SPIRV-LLVM-Translator
  - Install: `sudo apt-get install llvm-spirv-15`
  - Install (apt): `sudo apt install llvm-spirv-15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian OpenCL team <pkg-opencl-devel@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libllvm15, libllvmspirvlib15 (= 15.0.3-1pop1~1742906167~22.04~135e309), libstdc++6 (>= 11)

  </details>

- **lutris**
  - Latest version: 0.5.14~1698245228~22.04~385afed
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: video game preservation platform
  - Homepage: https://lutris.net
  - Install: `sudo apt-get install lutris`
  - Install (apt): `sudo apt install lutris`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mathieu Comandon <mathieucomandon@gmail.com>
  - Section: games
  - Priority: optional
  - depends: cabextract, curl, fluid-soundfont-gs, fluidsynth, gir1.2-gtk-3.0, gir1.2-notify-0.7, gir1.2-webkit2-4.0 | gir1.2-webkit2-4.1, mesa-utils, p7zip, psmisc, python3-dbus, python3-distro, python3-gi, python3-gi-cairo, python3-lxml, python3-magic, python3-pil, python3-requests, python3-setproctitle, python3-yaml, python3:any, unzip, vulkan-tools, x11-xserver-utils, xdg-desktop-portal, xdg-desktop-portal-gtk | xdg-desktop-portal-kde
  - recommends: gvfs-backends, libwine-development | libwine, python3-evdev, python3-protobuf, winetricks
  - suggests: gamemode, gamescope

  </details>


### <a id="packages-M"></a>M

- **mesa-common-dev**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Developer documentation for Mesa
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-common-dev`
  - Install (apt): `sudo apt install mesa-common-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libdrm-dev (>= 2.4.95), libgl-dev, libglx-dev, libx11-dev
  - breaks: libegl1-mesa-dev (<< 18.2.5-2)
  - replaces: libegl1-mesa-dev (<< 18.2.5-2)

  </details>

- **mesa-drm-shim**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: DRM shim libraries
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-drm-shim`
  - Install (apt): `sudo apt install mesa-drm-shim`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34)

  </details>

- **mesa-libgallium**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: shared infrastructure for Mesa drivers
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-libgallium`
  - Install (apt): `sudo apt install mesa-libgallium`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm-amdgpu1 (>= 2.4.125-1), libdrm-intel1 (>= 2.4.125-1), libdrm2 (>= 2.4.125-1), libelf1 (>= 0.142), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libllvm15, libsensors5 (>= 1:3.5.0), libstdc++6 (>= 11), libx11-xcb1 (>= 2:1.7.5), libxcb-dri3-0 (>= 1.13), libxcb-present0, libxcb-randr0, libxcb-sync1, libxcb-xfixes0, libxcb1 (>= 1.9.2), libxshmfence1, libzstd1 (>= 1.4.0), zlib1g (>= 1:1.1.4)
  - provides: libglapi-mesa

  </details>

- **mesa-opencl-icd**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: free implementation of the OpenCL API -- ICD runtime
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-opencl-icd`
  - Install (apt): `sudo apt install mesa-opencl-icd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libclang-cpp15 (>= 1:15.0.7), libclc-15, libdrm-amdgpu1 (>= 2.4.125-1), libdrm-intel1 (>= 2.4.125-1), libdrm2 (>= 2.4.125-1), libelf1 (>= 0.142), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libllvm15, libstdc++6 (>= 12), libzstd1 (>= 1.4.0), ocl-icd-libopencl1 | libopencl1, zlib1g (>= 1:1.1.4)
  - provides: opencl-icd

  </details>

- **mesa-va-drivers**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mesa VA-API video acceleration drivers
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-va-drivers`
  - Install (apt): `sudo apt install mesa-va-drivers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: mesa-libgallium (= 25.1.5-1pop0~1756399231~22.04~b84bab8)
  - breaks: vdpau-va-driver (<< 0.7.4-5)
  - replaces: vdpau-va-driver (<< 0.7.4-5)
  - provides: va-driver

  </details>

- **mesa-vdpau-drivers**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mesa VDPAU video acceleration drivers
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-vdpau-drivers`
  - Install (apt): `sudo apt install mesa-vdpau-drivers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libvdpau1
  - provides: vdpau-driver

  </details>

- **mesa-vulkan-drivers**
  - Latest version: 25.1.5-1pop0~1756399231~22.04~b84bab8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mesa Vulkan graphics drivers
  - Homepage: https://mesa3d.org/
  - Install: `sudo apt-get install mesa-vulkan-drivers`
  - Install (apt): `sudo apt install mesa-vulkan-drivers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libdrm-amdgpu1 (>= 2.4.125-1), libdrm2 (>= 2.4.125-1), libelf1 (>= 0.142), libexpat1 (>= 2.0.1), libgcc-s1 (>= 3.4), libllvm15, libstdc++6 (>= 11), libvulkan1, libwayland-client0 (>= 1.23.0), libx11-xcb1 (>= 2:1.7.5), libxcb-dri3-0 (>= 1.13), libxcb-present0, libxcb-randr0 (>= 1.13), libxcb-shm0, libxcb-sync1, libxcb-xfixes0, libxcb1 (>= 1.9.2), libxshmfence1, libzstd1 (>= 1.4.0), zlib1g (>= 1:1.1.4)
  - provides: vulkan-icd

  </details>

- **meson-1.5**
  - Latest version: 1.5.1-2ubuntu1~22.04.1pop0~1755913303~22.04~3ddc34b
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: high-productivity build system
  - Homepage: https://mesonbuild.com
  - Install: `sudo apt-get install meson-1.5`
  - Install (apt): `sudo apt install meson-1.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: ninja-build (>= 1.6), python3-pkg-resources, python3-setuptools, python3:any (>= 3.7~)
  - recommends: dpkg-dev
  - conflicts: meson
  - replaces: meson

  </details>

- **mouse-configurator**
  - Latest version: 1.0.0~1663038393~22.04~e49ffaf
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mouse configurator
  - Homepage: https://github.com/pop-os/mouse-configurator
  - Install: `sudo apt-get install mouse-configurator`
  - Install (apt): `sudo apt install mouse-configurator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.63.3), libgraphene-1.0-0 (>= 1.5.4), libgtk-4-1 (>= 4.0.0), libpango-1.0-0 (>= 1.14.0), libudev1 (>= 183)

  </details>

- **mutter**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Example window manager using GNOME's window manager library
  - Install: `sudo apt-get install mutter`
  - Install (apt): `sudo apt install mutter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: adwaita-icon-theme, gnome-settings-daemon-common, gsettings-desktop-schemas (>= 40~alpha), libc6 (>= 2.34), libgles2, libglib2.0-0 (>= 2.70.0), libmutter-10-0 (>= 42~beta), libwayland-client0 (>= 1.20.0), libx11-6, libxcomposite1 (>= 1:0.4.5), mutter-common (>= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), zenity
  - suggests: gnome-control-center (>= 1:3.25.2), xdg-user-dirs
  - provides: x-window-manager

  </details>

- **mutter-10-tests**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Tests for GNOME's window manager library
  - Install: `sudo apt-get install mutter-10-tests`
  - Install (apt): `sudo apt install mutter-10-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: at-spi2-core, dbus, dmz-cursor-theme, libc6 (>= 2.34), libcairo2 (>= 1.10.0), libgles2, libglib2.0-0 (>= 2.69.0), libgraphene-1.0-0 (>= 1.5.4), libgtk-3-0 (>= 3.21.5), libmutter-10-0 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), libmutter-test-10 (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), libpipewire-0.3-0 (>= 0.3.33), libwayland-client0 (>= 1.20.0), libwayland-server0 (>= 1.20.0), libx11-6, libxext6, mutter (= 42.9-0ubuntu9pop0~1727960749~22.04~a024e16), python3, python3-dbus, python3-dbusmock, xauth, xvfb, xwayland

  </details>

- **mutter-common**
  - Latest version: 42.9-0ubuntu9pop0~1727960749~22.04~a024e16
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: shared files for the Mutter window manager
  - Install: `sudo apt-get install mutter-common`
  - Install (apt): `sudo apt install mutter-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend

  </details>


### <a id="packages-N"></a>N

- **nautilus-extension-gnome-terminal**
  - Latest version: 3.44.0-1ubuntu1pop0~1650921985~22.04~c2346f6
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GNOME terminal emulator application - Nautilus extension
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install nautilus-extension-gnome-terminal`
  - Install (apt): `sudo apt install nautilus-extension-gnome-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-terminal (= 3.44.0-1ubuntu1pop0~1650921985~22.04~c2346f6), libc6 (>= 2.4), libgcc-s1 (>= 3.0), libglib2.0-0 (>= 2.52.0), libgtk-3-0 (>= 3.22.27), libnautilus-extension1a (>= 3.28.0), libstdc++6 (>= 4.1.1)
  - breaks: gnome-terminal (<< 3.27.92-2~)
  - replaces: brasero (<< 3.27.92-2~)

  </details>

- **network-manager-config-connectivity-pop**
  - Latest version: 1~1526005491~22.04~fd4f44d
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: NetworkManager configuration to enable connectivity checking
  - Homepage: https://github.com/pop-os/connectivity
  - Install: `sudo apt-get install network-manager-config-connectivity-pop`
  - Install (apt): `sudo apt install network-manager-config-connectivity-pop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: net
  - Priority: optional
  - depends: network-manager (>= 1~1526005491~22.04~fd4f44d)

  </details>

- **ninja-build**
  - Latest version: 1.10.1-1pop1~1755790902~22.04~942aa8c
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: small build system closest in spirit to Make
  - Homepage: https://ninja-build.org/
  - Install: `sudo apt-get install ninja-build`
  - Install (apt): `sudo apt install ninja-build`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Felix Geyer <fgeyer@debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.34), libstdc++6 (>= 11)
  - suggests: python3

  </details>

- **nvidia-common**
  - Latest version: 1:0.9.6.2~0.22.04.8pop0~1744993802~22.04~6b6b6f8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: transitional package for ubuntu-drivers-common
  - Install: `sudo apt-get install nvidia-common`
  - Install (apt): `sudo apt install nvidia-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: oldlibs
  - Priority: extra
  - depends: ubuntu-drivers-common

  </details>

- **nvidia-compute-utils-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-430`
  - Install (apt): `sudo apt install nvidia-compute-utils-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-440`
  - Install (apt): `sudo apt install nvidia-compute-utils-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-450`
  - Install (apt): `sudo apt install nvidia-compute-utils-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-455`
  - Install (apt): `sudo apt install nvidia-compute-utils-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-460`
  - Install (apt): `sudo apt install nvidia-compute-utils-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-465`
  - Install (apt): `sudo apt install nvidia-compute-utils-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-470

  </details>

- **nvidia-compute-utils-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA compute utilities
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-470`
  - Install (apt): `sudo apt install nvidia-compute-utils-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: adduser, libc6 (>= 2.3.2), libnvidia-compute-470
  - conflicts: nvidia-compute-utils, nvidia-persistenced
  - replaces: nvidia-compute-utils, nvidia-persistenced
  - provides: nvidia-compute-utils, nvidia-persistenced

  </details>

- **nvidia-compute-utils-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-495`
  - Install (apt): `sudo apt install nvidia-compute-utils-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-515`
  - Install (apt): `sudo apt install nvidia-compute-utils-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-525`
  - Install (apt): `sudo apt install nvidia-compute-utils-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-535`
  - Install (apt): `sudo apt install nvidia-compute-utils-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-545`
  - Install (apt): `sudo apt install nvidia-compute-utils-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-550`
  - Install (apt): `sudo apt install nvidia-compute-utils-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-555`
  - Install (apt): `sudo apt install nvidia-compute-utils-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-560`
  - Install (apt): `sudo apt install nvidia-compute-utils-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-565`
  - Install (apt): `sudo apt install nvidia-compute-utils-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-570`
  - Install (apt): `sudo apt install nvidia-compute-utils-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-compute-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-575`
  - Install (apt): `sudo apt install nvidia-compute-utils-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-compute-utils-580

  </details>

- **nvidia-compute-utils-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA compute utilities
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-compute-utils-580`
  - Install (apt): `sudo apt install nvidia-compute-utils-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: adduser, libc6 (>= 2.4), libnvidia-compute-580
  - conflicts: nvidia-compute-utils, nvidia-persistenced
  - replaces: nvidia-compute-utils, nvidia-persistenced
  - provides: nvidia-compute-utils, nvidia-persistenced

  </details>

- **nvidia-container-toolkit**
  - Latest version: 1.12.1-0pop1~1679409890~22.04~5f4b1f2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA Container toolkit
  - Homepage: https://github.com/NVIDIA/nvidia-container-toolkit
  - Install: `sudo apt-get install nvidia-container-toolkit`
  - Install (apt): `sudo apt install nvidia-container-toolkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: utils
  - Priority: optional
  - depends: libnvidia-container-tools (<< 2.0.0), libseccomp2, nvidia-container-toolkit-base
  - breaks: nvidia-container-runtime (<= 3.5.0-1), nvidia-container-runtime-hook
  - replaces: nvidia-container-runtime (<= 3.5.0-1), nvidia-container-runtime-hook

  </details>

- **nvidia-container-toolkit-base**
  - Latest version: 1.12.1-0pop1~1679409890~22.04~5f4b1f2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA Container Toolkit Base
  - Homepage: https://github.com/NVIDIA/nvidia-container-toolkit
  - Install: `sudo apt-get install nvidia-container-toolkit-base`
  - Install (apt): `sudo apt install nvidia-container-toolkit-base`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NVIDIA CORPORATION <cudatools@nvidia.com>
  - Section: utils
  - Priority: optional
  - breaks: nvidia-container-runtime (<= 3.5.0-1), nvidia-container-runtime-hook, nvidia-container-toolkit (<= 1.10.0-1)
  - replaces: nvidia-container-runtime (<= 3.5.0-1), nvidia-container-runtime-hook

  </details>

- **nvidia-dkms-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-430`
  - Install (apt): `sudo apt install nvidia-dkms-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-440`
  - Install (apt): `sudo apt install nvidia-dkms-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-450`
  - Install (apt): `sudo apt install nvidia-dkms-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-455`
  - Install (apt): `sudo apt install nvidia-dkms-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-460`
  - Install (apt): `sudo apt install nvidia-dkms-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-465`
  - Install (apt): `sudo apt install nvidia-dkms-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470

  </details>

- **nvidia-dkms-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA DKMS package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-470`
  - Install (apt): `sudo apt install nvidia-dkms-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: dkms, nvidia-kernel-common-470 (>= 470.256.02), nvidia-kernel-source-470 (>= 470.256.02)
  - conflicts: nvidia-dkms-kernel
  - breaks: nvidia-kernel-source-470 (<< 390.25-0ubuntu2~)
  - replaces: nvidia-384 (<< 390.25), nvidia-dkms-kernel, nvidia-kernel-source-470 (<< 390.25-0ubuntu2~)
  - provides: nvidia-dkms-kernel

  </details>

- **nvidia-dkms-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-495`
  - Install (apt): `sudo apt install nvidia-dkms-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-515`
  - Install (apt): `sudo apt install nvidia-dkms-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-525`
  - Install (apt): `sudo apt install nvidia-dkms-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-535`
  - Install (apt): `sudo apt install nvidia-dkms-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-545`
  - Install (apt): `sudo apt install nvidia-dkms-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-550`
  - Install (apt): `sudo apt install nvidia-dkms-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-555`
  - Install (apt): `sudo apt install nvidia-dkms-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-560`
  - Install (apt): `sudo apt install nvidia-dkms-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-565`
  - Install (apt): `sudo apt install nvidia-dkms-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-570`
  - Install (apt): `sudo apt install nvidia-dkms-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-570-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-570-open`
  - Install (apt): `sudo apt install nvidia-dkms-570-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580-open

  </details>

- **nvidia-dkms-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-575`
  - Install (apt): `sudo apt install nvidia-dkms-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580

  </details>

- **nvidia-dkms-575-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-dkms-580-open
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-575-open`
  - Install (apt): `sudo apt install nvidia-dkms-575-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580-open

  </details>

- **nvidia-dkms-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA DKMS package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-580`
  - Install (apt): `sudo apt install nvidia-dkms-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: dkms, nvidia-firmware-580-580.119.02, nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580 (>= 580.119.02)
  - conflicts: nvidia-dkms-kernel
  - replaces: nvidia-dkms-kernel
  - provides: nvidia-dkms-kernel

  </details>

- **nvidia-dkms-580-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA DKMS package (open kernel module)
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-dkms-580-open`
  - Install (apt): `sudo apt install nvidia-dkms-580-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: dkms, nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580-open (>= 580.119.02)
  - conflicts: nvidia-dkms-kernel
  - replaces: nvidia-dkms-kernel
  - provides: nvidia-dkms-kernel

  </details>

- **nvidia-docker2**
  - Latest version: 2.12.0-0pop1~1679415594~22.04~88ac445
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: nvidia-docker CLI wrapper
  - Homepage: https://github.com/NVIDIA/nvidia-docker/wiki
  - Install: `sudo apt-get install nvidia-docker2`
  - Install (apt): `sudo apt install nvidia-docker2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: docker.io | docker-ce, nvidia-container-toolkit (>= 1.7.0-1~)
  - conflicts: nvidia-container-runtime
  - breaks: nvidia-docker (<< 2.0.0)
  - replaces: nvidia-container-runtime, nvidia-docker (<< 2.0.0)

  </details>

- **nvidia-driver-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-430`
  - Install (apt): `sudo apt install nvidia-driver-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-440`
  - Install (apt): `sudo apt install nvidia-driver-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-450`
  - Install (apt): `sudo apt install nvidia-driver-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-455`
  - Install (apt): `sudo apt install nvidia-driver-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-460`
  - Install (apt): `sudo apt install nvidia-driver-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-465`
  - Install (apt): `sudo apt install nvidia-driver-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-470

  </details>

- **nvidia-driver-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA driver metapackage
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-470`
  - Install (apt): `sudo apt install nvidia-driver-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-compute-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-decode-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-encode-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-extra-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-fbc1-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-gl-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-ifr1-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-compute-utils-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-dkms-470 (>= 470.256.02), nvidia-kernel-common-470 (>= 470.256.02), nvidia-kernel-source-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-utils-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), xserver-xorg-video-nvidia-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544)
  - recommends: libnvidia-compute-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-decode-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-encode-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-fbc1-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-gl-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-ifr1-470:i386 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-settings

  </details>

- **nvidia-driver-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-495`
  - Install (apt): `sudo apt install nvidia-driver-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-515`
  - Install (apt): `sudo apt install nvidia-driver-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-525`
  - Install (apt): `sudo apt install nvidia-driver-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-535`
  - Install (apt): `sudo apt install nvidia-driver-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-545`
  - Install (apt): `sudo apt install nvidia-driver-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-550`
  - Install (apt): `sudo apt install nvidia-driver-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-555`
  - Install (apt): `sudo apt install nvidia-driver-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-560`
  - Install (apt): `sudo apt install nvidia-driver-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-565`
  - Install (apt): `sudo apt install nvidia-driver-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-570`
  - Install (apt): `sudo apt install nvidia-driver-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-570-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580-open
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-570-open`
  - Install (apt): `sudo apt install nvidia-driver-570-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580-open

  </details>

- **nvidia-driver-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-575`
  - Install (apt): `sudo apt install nvidia-driver-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580

  </details>

- **nvidia-driver-575-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-driver-580-open
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-575-open`
  - Install (apt): `sudo apt install nvidia-driver-575-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-driver-580-open

  </details>

- **nvidia-driver-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA driver metapackage
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-580`
  - Install (apt): `sudo apt install nvidia-driver-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-compute-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-decode-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-encode-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-extra-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-fbc1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-gl-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-compute-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-dkms-580 (>= 580.119.02), nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), xserver-xorg-video-nvidia-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0)
  - recommends: libnvidia-compute-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-decode-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-encode-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-fbc1-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-gl-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-settings

  </details>

- **nvidia-driver-580-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA driver (open kernel) metapackage
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-driver-580-open`
  - Install (apt): `sudo apt install nvidia-driver-580-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-compute-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-decode-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-encode-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-extra-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-fbc1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-gl-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-compute-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-dkms-580-open (>= 580.119.02), nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580-open (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), xserver-xorg-video-nvidia-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0)
  - recommends: libnvidia-compute-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-decode-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-encode-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-fbc1-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-gl-580:i386 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-settings

  </details>

- **nvidia-firmware-580-580.119.02**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Firmware files used by the kernel module
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-firmware-580-580.119.02`
  - Install (apt): `sudo apt install nvidia-firmware-580-580.119.02`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - breaks: nvidia-firmware-580-server-580.119.02
  - replaces: nvidia-firmware-580-server-580.119.02

  </details>

- **nvidia-headless-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-430`
  - Install (apt): `sudo apt install nvidia-headless-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-440`
  - Install (apt): `sudo apt install nvidia-headless-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-450`
  - Install (apt): `sudo apt install nvidia-headless-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-455`
  - Install (apt): `sudo apt install nvidia-headless-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-460`
  - Install (apt): `sudo apt install nvidia-headless-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-465`
  - Install (apt): `sudo apt install nvidia-headless-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-470

  </details>

- **nvidia-headless-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-470`
  - Install (apt): `sudo apt install nvidia-headless-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-470, nvidia-headless-no-dkms-470
  - conflicts: nvidia-headless
  - replaces: nvidia-headless
  - provides: nvidia-headless

  </details>

- **nvidia-headless-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-495`
  - Install (apt): `sudo apt install nvidia-headless-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-515`
  - Install (apt): `sudo apt install nvidia-headless-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-525`
  - Install (apt): `sudo apt install nvidia-headless-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-535`
  - Install (apt): `sudo apt install nvidia-headless-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-545`
  - Install (apt): `sudo apt install nvidia-headless-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-550`
  - Install (apt): `sudo apt install nvidia-headless-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-555`
  - Install (apt): `sudo apt install nvidia-headless-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-560`
  - Install (apt): `sudo apt install nvidia-headless-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-565`
  - Install (apt): `sudo apt install nvidia-headless-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-570`
  - Install (apt): `sudo apt install nvidia-headless-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-575`
  - Install (apt): `sudo apt install nvidia-headless-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-580

  </details>

- **nvidia-headless-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-580`
  - Install (apt): `sudo apt install nvidia-headless-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580, nvidia-headless-no-dkms-580
  - conflicts: nvidia-headless
  - replaces: nvidia-headless
  - provides: nvidia-headless

  </details>

- **nvidia-headless-580-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage (open kernel module)
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-580-open`
  - Install (apt): `sudo apt install nvidia-headless-580-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-dkms-580-open, nvidia-headless-no-dkms-580-open
  - conflicts: nvidia-headless
  - replaces: nvidia-headless
  - provides: nvidia-headless

  </details>

- **nvidia-headless-no-dkms-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-430`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-440`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-450`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-455`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-460`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-465`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-470

  </details>

- **nvidia-headless-no-dkms-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage - no DKMS
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-470`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), libnvidia-compute-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-compute-utils-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), nvidia-kernel-common-470 (>= 470.256.02), nvidia-kernel-source-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544)
  - conflicts: nvidia-384 (<< 390.25), nvidia-390 (<< 390.25-0ubuntu1)
  - replaces: nvidia-384 (<< 390.25), nvidia-390 (<< 390.25-0ubuntu1)
  - provides: nvidia-384

  </details>

- **nvidia-headless-no-dkms-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-495`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-515`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-525`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-535`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-545`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-550`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-555`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-560`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-565`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-570`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-headless-no-dkms-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-575`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-headless-no-dkms-580

  </details>

- **nvidia-headless-no-dkms-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage - no DKMS
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-580`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-compute-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-compute-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0)

  </details>

- **nvidia-headless-no-dkms-580-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA headless metapackage - no DKMS (open kernel module)
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-headless-no-dkms-580-open`
  - Install (apt): `sudo apt install nvidia-headless-no-dkms-580-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libnvidia-cfg1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), libnvidia-compute-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-compute-utils-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), nvidia-kernel-common-580 (>= 580.119.02), nvidia-kernel-source-580-open (= 580.119.02-1pop1~1767727139~22.04~87c43f0)

  </details>

- **nvidia-kernel-common-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-430`
  - Install (apt): `sudo apt install nvidia-kernel-common-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-440`
  - Install (apt): `sudo apt install nvidia-kernel-common-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-450`
  - Install (apt): `sudo apt install nvidia-kernel-common-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-455`
  - Install (apt): `sudo apt install nvidia-kernel-common-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-460`
  - Install (apt): `sudo apt install nvidia-kernel-common-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-465`
  - Install (apt): `sudo apt install nvidia-kernel-common-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-470

  </details>

- **nvidia-kernel-common-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Shared files used with the kernel module
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-470`
  - Install (apt): `sudo apt install nvidia-kernel-common-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libpciaccess0 (>= 0.10.7)
  - conflicts: nvidia-kernel-common
  - replaces: nvidia-dkms-470 (<< 390.48-0ubuntu3~), nvidia-kernel-common
  - provides: nvidia-kernel-common

  </details>

- **nvidia-kernel-common-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-495`
  - Install (apt): `sudo apt install nvidia-kernel-common-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-515`
  - Install (apt): `sudo apt install nvidia-kernel-common-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-525`
  - Install (apt): `sudo apt install nvidia-kernel-common-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-535`
  - Install (apt): `sudo apt install nvidia-kernel-common-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-545`
  - Install (apt): `sudo apt install nvidia-kernel-common-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-550`
  - Install (apt): `sudo apt install nvidia-kernel-common-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-555`
  - Install (apt): `sudo apt install nvidia-kernel-common-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-560`
  - Install (apt): `sudo apt install nvidia-kernel-common-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-565`
  - Install (apt): `sudo apt install nvidia-kernel-common-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-570`
  - Install (apt): `sudo apt install nvidia-kernel-common-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-common-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-575`
  - Install (apt): `sudo apt install nvidia-kernel-common-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-common-580

  </details>

- **nvidia-kernel-common-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Shared files used with the kernel module
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-common-580`
  - Install (apt): `sudo apt install nvidia-kernel-common-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libpciaccess0 (>= 0.10.7), nvidia-firmware-580-580.119.02
  - conflicts: nvidia-kernel-common
  - replaces: nvidia-kernel-common
  - provides: nvidia-kernel-common

  </details>

- **nvidia-kernel-source-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-430`
  - Install (apt): `sudo apt install nvidia-kernel-source-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-440`
  - Install (apt): `sudo apt install nvidia-kernel-source-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-450`
  - Install (apt): `sudo apt install nvidia-kernel-source-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-455`
  - Install (apt): `sudo apt install nvidia-kernel-source-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-460`
  - Install (apt): `sudo apt install nvidia-kernel-source-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-465`
  - Install (apt): `sudo apt install nvidia-kernel-source-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-470

  </details>

- **nvidia-kernel-source-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA kernel source package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-470`
  - Install (apt): `sudo apt install nvidia-kernel-source-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - conflicts: nvidia-kernel-source
  - replaces: nvidia-384 (<< 390.25), nvidia-390 (<< 390.25-0ubuntu1), nvidia-kernel-source
  - provides: nvidia-kernel-source

  </details>

- **nvidia-kernel-source-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-495`
  - Install (apt): `sudo apt install nvidia-kernel-source-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-515`
  - Install (apt): `sudo apt install nvidia-kernel-source-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-525`
  - Install (apt): `sudo apt install nvidia-kernel-source-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-535`
  - Install (apt): `sudo apt install nvidia-kernel-source-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-545`
  - Install (apt): `sudo apt install nvidia-kernel-source-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-550`
  - Install (apt): `sudo apt install nvidia-kernel-source-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-555`
  - Install (apt): `sudo apt install nvidia-kernel-source-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-560`
  - Install (apt): `sudo apt install nvidia-kernel-source-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-565`
  - Install (apt): `sudo apt install nvidia-kernel-source-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-570`
  - Install (apt): `sudo apt install nvidia-kernel-source-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-570-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580-open
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-570-open`
  - Install (apt): `sudo apt install nvidia-kernel-source-570-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580-open

  </details>

- **nvidia-kernel-source-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-575`
  - Install (apt): `sudo apt install nvidia-kernel-source-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580

  </details>

- **nvidia-kernel-source-575-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-kernel-source-580-open
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-575-open`
  - Install (apt): `sudo apt install nvidia-kernel-source-575-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-kernel-source-580-open

  </details>

- **nvidia-kernel-source-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA kernel source package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-580`
  - Install (apt): `sudo apt install nvidia-kernel-source-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - conflicts: nvidia-kernel-source
  - provides: nvidia-kernel-source

  </details>

- **nvidia-kernel-source-580-open**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA kernel source package
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-kernel-source-580-open`
  - Install (apt): `sudo apt install nvidia-kernel-source-580-open`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - conflicts: nvidia-kernel-source
  - replaces: nvidia-kernel-source
  - provides: nvidia-kernel-source

  </details>

- **nvidia-utils-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-430`
  - Install (apt): `sudo apt install nvidia-utils-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-440`
  - Install (apt): `sudo apt install nvidia-utils-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-450`
  - Install (apt): `sudo apt install nvidia-utils-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-455`
  - Install (apt): `sudo apt install nvidia-utils-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-460`
  - Install (apt): `sudo apt install nvidia-utils-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-465`
  - Install (apt): `sudo apt install nvidia-utils-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-470

  </details>

- **nvidia-utils-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA driver support binaries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-470`
  - Install (apt): `sudo apt install nvidia-utils-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libnvidia-compute-470
  - suggests: nvidia-driver-470
  - conflicts: nvidia-smi, nvidia-utils
  - replaces: nvidia-smi, nvidia-utils
  - provides: nvidia-smi, nvidia-utils

  </details>

- **nvidia-utils-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-495`
  - Install (apt): `sudo apt install nvidia-utils-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-515`
  - Install (apt): `sudo apt install nvidia-utils-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-525`
  - Install (apt): `sudo apt install nvidia-utils-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-535`
  - Install (apt): `sudo apt install nvidia-utils-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-545`
  - Install (apt): `sudo apt install nvidia-utils-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-550`
  - Install (apt): `sudo apt install nvidia-utils-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-555`
  - Install (apt): `sudo apt install nvidia-utils-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-560`
  - Install (apt): `sudo apt install nvidia-utils-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-565`
  - Install (apt): `sudo apt install nvidia-utils-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-570`
  - Install (apt): `sudo apt install nvidia-utils-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for nvidia-utils-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-575`
  - Install (apt): `sudo apt install nvidia-utils-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: nvidia-utils-580

  </details>

- **nvidia-utils-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA driver support binaries
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install nvidia-utils-580`
  - Install (apt): `sudo apt install nvidia-utils-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libnvidia-compute-580 (>= 580.119.02)
  - suggests: nvidia-driver-580
  - conflicts: nvidia-smi, nvidia-utils
  - replaces: nvidia-smi, nvidia-utils
  - provides: nvidia-smi, nvidia-utils

  </details>


### <a id="packages-P"></a>P

- **pipewire**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: audio and video processing engine multimedia server
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire`
  - Install (apt): `sudo apt install pipewire`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: video
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.52), libpipewire-0.3-modules (= 1.0.2~1707732619~22.04~b8b871b), pipewire-bin (= 1.0.2~1707732619~22.04~b8b871b)
  - recommends: libspa-0.2-avb, pipewire-aes76, pipewire-avb

  </details>

- **pipewire-aes67**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire AVB plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-aes67`
  - Install (apt): `sudo apt install pipewire-aes67`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: sound
  - Priority: optional
  - depends: pipewire (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **pipewire-alsa**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire ALSA plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-alsa`
  - Install (apt): `sudo apt install pipewire-alsa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: sound
  - Priority: optional
  - depends: libasound2 (>= 1.1.7), libc6 (>= 2.17), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), pipewire (= 1.0.2~1707732619~22.04~b8b871b)
  - conflicts: pulseaudio
  - replaces: pipewire-audio-client-libraries

  </details>

- **pipewire-audio-client-libraries**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional package for pipewire-alsa and pipewire-jack
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-audio-client-libraries`
  - Install (apt): `sudo apt install pipewire-audio-client-libraries`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: oldlibs
  - Priority: optional
  - depends: pipewire-alsa, pipewire-jack

  </details>

- **pipewire-avb**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire AVB plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-avb`
  - Install (apt): `sudo apt install pipewire-avb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: sound
  - Priority: optional
  - depends: pipewire (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **pipewire-bin**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire multimedia server - programs
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-bin`
  - Install (apt): `sudo apt install pipewire-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: video
  - Priority: optional
  - depends: libasound2 (>= 1.2.1.1), libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libncursesw6 (>= 6), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), libpipewire-0.3-modules (= 1.0.2~1707732619~22.04~b8b871b), libreadline8 (>= 6.0), libsndfile1 (>= 1.0.20), libtinfo6 (>= 6)
  - recommends: dbus-user-session, pipewire-media-session | wireplumber, rtkit
  - breaks: pipewire (<< 0.3.5)
  - replaces: pipewire (<< 0.3.5)

  </details>

- **pipewire-doc**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: libraries for the PipeWire multimedia server - documentation
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-doc`
  - Install (apt): `sudo apt install pipewire-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: doc
  - Priority: optional
  - breaks: libpipewire-0.2-doc (<< 0.3.1)
  - replaces: libpipewire-0.2-doc (<< 0.3.1)

  </details>

- **pipewire-jack**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire JACK plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-jack`
  - Install (apt): `sudo apt install pipewire-jack`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: sound
  - Priority: optional
  - depends: libc6 (>= 2.34), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), pipewire (= 1.0.2~1707732619~22.04~b8b871b)
  - replaces: pipewire-audio-client-libraries

  </details>

- **pipewire-pulse**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire PulseAudio daemon
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-pulse`
  - Install (apt): `sudo apt install pipewire-pulse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: sound
  - Priority: optional
  - depends: init-system-helpers (>= 1.52), pipewire (= 1.0.2~1707732619~22.04~b8b871b)
  - recommends: pulseaudio-utils
  - suggests: libspa-0.2-bluetooth
  - breaks: pipewire-bin (<< 0.3.27-2)
  - replaces: pipewire-bin (<< 0.3.27-2)

  </details>

- **pipewire-tests**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire multimedia server - tests and examples
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-tests`
  - Install (apt): `sudo apt install pipewire-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: misc
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libc6 (>= 2.34), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), libsdl2-2.0-0 (>= 2.0.12), pipewire (= 1.0.2~1707732619~22.04~b8b871b), pipewire-jack (= 1.0.2~1707732619~22.04~b8b871b)

  </details>

- **pipewire-v4l2**
  - Latest version: 1.0.2~1707732619~22.04~b8b871b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: PipeWire V4L2 plugin
  - Homepage: https://pipewire.org/
  - Install: `sudo apt-get install pipewire-v4l2`
  - Install (apt): `sudo apt install pipewire-v4l2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: video
  - Priority: optional
  - depends: libc6 (>= 2.34), libpipewire-0.3-0 (= 1.0.2~1707732619~22.04~b8b871b), pipewire (= 1.0.2~1707732619~22.04~b8b871b)
  - breaks: libpipewire-0.3-modules (<< 0.3.54-1), pipewire-bin (<< 0.3.54-1)
  - replaces: libpipewire-0.3-modules (<< 0.3.54-1), pipewire-bin (<< 0.3.54-1)

  </details>

- **plymouth**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth`
  - Install (apt): `sudo apt install plymouth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: init-system-helpers (>= 1.18), libc6 (>= 2.34), libdrm2 (>= 2.4.47), libplymouth5 (>= 22.02.122-0pop2~1677520013~22.04~adbc2e1), lsb-base (>= 3.0-6), systemd (>= 232-8~), udev (>= 232-8~)
  - recommends: plymouth-theme-pop-text | plymouth-theme
  - suggests: desktop-base, plymouth-themes
  - conflicts: console-common
  - breaks: plymouth-drm (<< 0.9.0-6~), plymouth-themes (<< 0.9.0-8~)
  - replaces: plymouth-drm (<< 0.9.0-6~), plymouth-themes (<< 0.9.0-8~)

  </details>

- **plymouth-label**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - label control
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-label`
  - Install (apt): `sudo apt install plymouth-label`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: fontconfig-config, fonts-ubuntu, libc6 (>= 2.4), libcairo2 (>= 1.14.0), libglib2.0-0 (>= 2.12.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libplymouth5 (>= 0.9.4git20190712), plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - breaks: plymouth-themes (<< 0.9.2-5~)
  - replaces: plymouth-themes (<< 0.9.2-5~)

  </details>

- **plymouth-theme-pop-basic**
  - Latest version: 2.0.2~1646089097~22.04~8cd4acc
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional package
  - Install: `sudo apt-get install plymouth-theme-pop-basic`
  - Install (apt): `sudo apt install plymouth-theme-pop-basic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: 13r0ck <bnr@tuta.io>
  - Section: oldlibs
  - Priority: optional
  - depends: pop-plymouth-theme

  </details>

- **plymouth-theme-pop-text**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - pop text theme
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-pop-text`
  - Install (apt): `sudo apt install plymouth-theme-pop-text`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.17), libplymouth5 (>= 0.9.2), lsb-release, plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - breaks: plymouth-theme-ubuntu-text (<< 22.02.122-0pop2~)
  - replaces: plymouth-theme-ubuntu-text (<< 22.02.122-0pop2~)
  - provides: plymouth-theme

  </details>

- **plymouth-theme-spinner**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - spinner theme
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-spinner`
  - Install (apt): `sudo apt install plymouth-theme-spinner`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.29), libplymouth5 (>= 22.02.122-0pop2~1677520013~22.04~adbc2e1), lsb-release, plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1), plymouth-label (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - breaks: plymouth-themes (<< 0.9.4git20190712-0ubuntu1~)
  - replaces: plymouth-themes (<< 0.9.4git20190712-0ubuntu1~)
  - provides: plymouth-theme

  </details>

- **plymouth-theme-ubuntu-logo**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - ubuntu theme
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-ubuntu-logo`
  - Install (apt): `sudo apt install plymouth-theme-ubuntu-logo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1), plymouth-label (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - provides: plymouth-theme

  </details>

- **plymouth-theme-ubuntu-text**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for plymouth-theme-pop-text
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-ubuntu-text`
  - Install (apt): `sudo apt install plymouth-theme-ubuntu-text`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: oldlibs
  - Priority: optional
  - depends: plymouth-theme-pop-text

  </details>

- **plymouth-themes**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - themes
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-themes`
  - Install (apt): `sudo apt install plymouth-themes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.17), libplymouth5 (>= 0.9.2), plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1), plymouth-label (= 22.02.122-0pop2~1677520013~22.04~adbc2e1), plymouth-theme-spinner (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - conflicts: plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner
  - breaks: libfontconfig1 (<< 2.13.0-5~), plymouth-drm (<< 0.9.0-6~)
  - replaces: plymouth-drm (<< 0.9.0-6~), plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner
  - provides: plymouth-theme, plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner

  </details>

- **plymouth-tpm2-totp**
  - Latest version: 0.1.0~1639007579~22.04~323d2a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: TPM2 TOTP plymouth integration
  - Homepage: https://github.com/pop-os/tpm2-totp
  - Install: `sudo apt-get install plymouth-tpm2-totp`
  - Install (apt): `sudo apt install plymouth-tpm2-totp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libplymouth5 (>= 0.9.2), libtpm2-totp0, libtss2-tctildr0 (>= 3.0.1)

  </details>

- **plymouth-x11**
  - Latest version: 22.02.122-0pop2~1677520013~22.04~adbc2e1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: boot animation, logger and I/O multiplexer - X11 renderer
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-x11`
  - Install (apt): `sudo apt install plymouth-x11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.17), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.12.0), libgtk-3-0 (>= 3.21.4), libplymouth5 (>= 0.9.3), plymouth (= 22.02.122-0pop2~1677520013~22.04~adbc2e1)
  - recommends: plymouth-theme-spinner | plymouth-theme
  - suggests: gdm

  </details>

- **pop-container-interactive**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for interactive containers (for example, a containerized development environment).
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-container-interactive`
  - Install (apt): `sudo apt install pop-container-interactive`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: apt-transport-https, avahi-autoipd, avahi-daemon, busybox-static, gstreamer1.0-plugins-base-apps, info, iputils-tracepath, isc-dhcp-client, libnss-mdns, libnss-myhostname, man-db, net-tools, policykit-desktop-privileges, pop-container-runtime, strace, sudo, tcpdump, telnet, tnftp, ufw
  - recommends: bash-completion, build-essential, command-not-found, curl, friendly-recovery, ftp, git, iputils-ping, lshw, mtr-tiny, nano, time
  - breaks: ubuntu-standard (<< 2)
  - replaces: ubuntu-standard (<< 2)

  </details>

- **pop-container-runtime**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for runtime containers (for example, a cloud container cluster).
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-container-runtime`
  - Install (apt): `sudo apt install pop-container-runtime`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: adduser, apt, base-files, base-passwd, bash, bsdutils, coreutils, dash, debconf, debianutils, diffutils, dpkg, e2fsprogs, findutils, gcc-12-base, gpgv, grep, gzip, hostname, init-system-helpers, libacl1, libapt-pkg6.0, libattr1, libaudit-common, libaudit1, libblkid1, libbz2-1.0, libc-bin, libc6, libcap-ng0, libcap2, libcom-err2, libcrypt1, libdb5.3, libdebconfclient0, libext2fs2, libffi8, libgcc-s1, libgcrypt20, libgmp10, libgnutls30, libgpg-error0, libgssapi-krb5-2, libhogweed6, libidn2-0, libk5crypto3, libkeyutils1, libkrb5-3, libkrb5support0, liblz4-1, liblzma5, libmount1, libncurses6, libncursesw6, libnettle8, libnsl2, libp11-kit0, libpam-modules, libpam-modules-bin, libpam-runtime, libpam0g, libpcre2-8-0, libpcre3, libprocps8, libseccomp2, libselinux1, libsemanage-common, libsemanage2, libsepol2, libsmartcols1, libss2, libssl3, libstdc++6, libtasn1-6, libtinfo6, libtirpc-common, libtirpc3, libudev1, libunistring2, libuuid1, libxxhash0, libzstd1, login, logsave, lsb-base, mawk, mount, ncurses-base, ncurses-bin, passwd, perl-base, pop-keyring, procps, sed, sensible-utils, sysvinit-utils, tar, ubuntu-keyring, usrmerge, util-linux, zlib1g
  - breaks: ubuntu-minimal (<< 2)
  - replaces: ubuntu-minimal (<< 2)

  </details>

- **pop-cosmic**
  - Latest version: 0.1.0~1765823448~22.04~07b06d4
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Computer Operating System Main Interface Components
  - Homepage: https://github.com/pop-os/cosmic
  - Install: `sudo apt-get install pop-cosmic`
  - Install (apt): `sudo apt install pop-cosmic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gnome-shell (>= 3.38)

  </details>

- **pop-de-gnome**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for GNOME-related dependencies.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-de-gnome`
  - Install (apt): `sudo apt install pop-de-gnome`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: chrome-gnome-shell, gdm3, gnome-bluetooth, gnome-control-center, gnome-disk-utility, gnome-menus, gnome-online-miners, gnome-orca, gnome-shell, gnome-system-monitor, gnome-terminal | kgx, gnome-themes-standard, gnome-video-effects, language-selector-gnome, libpam-gnome-keyring, nautilus, nautilus-sendto, network-manager-openvpn-gnome, network-manager-pptp-gnome, pop-gnome-initial-setup, pop-session, xdg-desktop-portal-gnome
  - recommends: baobab, eog, evince, firefox, geary, gedit, gnome-calculator, gnome-calendar, gnome-contacts, gnome-font-viewer, gnome-power-manager, gnome-remote-desktop, gnome-shell-extension-prefs, gnome-weather, gstreamer1.0-vaapi, gucharmap, libreoffice-gnome, seahorse, simple-scan, totem, yelp

  </details>

- **pop-default-settings**
  - Latest version: 5.1.0~1748372736~22.04~ef5c681
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: default settings for Pop OS
  - Homepage: https://github.com/system76/pop-default-settings
  - Install: `sudo apt-get install pop-default-settings`
  - Install (apt): `sudo apt install pop-default-settings`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: required
  - depends: base-files (>= 10), gnome-menus, gnupg, plymouth-theme-pop-basic, python3-repolib (>> 1.3.9)
  - recommends: pop-default-settings-zram
  - conflicts: pipewire-media-session

  </details>

- **pop-default-settings-zram**
  - Latest version: 5.1.0~1748372736~22.04~ef5c681
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: default settings for ZRAM on Pop OS
  - Homepage: https://github.com/system76/pop-default-settings
  - Install: `sudo apt-get install pop-default-settings-zram`
  - Install (apt): `sudo apt install pop-default-settings-zram`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: required
  - depends: pop-default-settings, util-linux

  </details>

- **pop-desktop**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for desktop OS installations.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-desktop`
  - Install (apt): `sudo apt install pop-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: adwaita-icon-theme-full, dconf-gsettings-backend | gsettings-backend, flatpak, fonts-dejavu-core, fonts-freefont-ttf, fonts-liberation, ghostscript-x, glib-networking, gvfs-backends, gvfs-fuse, ibus-table, inputattach, libatk-adaptor, libcanberra-gtk-module, libegl-mesa0, libglib2.0-bin, libproxy1-plugin-gsettings, libproxy1-plugin-networkmanager, policykit-desktop-privileges, pop-pipewire, pop-server, sound-theme-freedesktop, xdg-user-dirs-gtk, xdg-utils, xorg
  - preDepends: pop-de-gnome
  - recommends: com.github.donadigo.eddy, file-roller, fonts-noto-color-emoji, hidpi-daemon, ibus-table-emoji, libavcodec58, libfuse2, libreoffice-calc, libreoffice-impress, libreoffice-ogltrans, libreoffice-writer, network-manager-config-connectivity-pop, pop-shop, pop-transition, pop-wallpapers | pop-hp-wallpapers, popsicle, popsicle-gtk, sessioninstaller, system76-scheduler, touchegg
  - conflicts: system76-desktop

  </details>

- **pop-fonts**
  - Latest version: 1.0.3~1629904758~22.04~2da23d5
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop Fonts
  - Homepage: https://github.com/system76/pop-fonts
  - Install: `sudo apt-get install pop-fonts`
  - Install (apt): `sudo apt install pop-fonts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - conflicts: system76-pop-fonts

  </details>

- **pop-gnome-initial-setup**
  - Latest version: 3.36.1~1650463051~22.04~661f5a8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Initial GNOME system setup helper
  - Homepage: https://github.com/pop-os/gnome-initial-setup/
  - Install: `sudo apt-get install pop-gnome-initial-setup`
  - Install (apt): `sudo apt install pop-gnome-initial-setup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: adduser, gnome-control-center-data, gnome-settings-daemon (>= 3.24), libaccountsservice0 (>= 0.6.24), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libcheese-gtk25 (>= 3.28), libcheese8 (>= 3.18.0), libfontconfig1 (>= 2.12.6), libgdk-pixbuf-2.0-0 (>= 2.25.2), libgdm1 (>= 3.8.3), libgeoclue-2-0 (>= 2.4.0), libglib2.0-0 (>= 2.63.1), libgnome-desktop-3-19 (>= 3.17.92), libgoa-1.0-0b (>= 3.1.1), libgoa-backend-1.0-1 (>= 3.10.0), libgtk-3-0 (>= 3.21.5), libgweather-3-16 (>= 3.13.91), libibus-1.0-5 (>= 1.5.2), libjson-glib-1.0-0 (>= 1.5.2), libkrb5-3 (>= 1.8+dfsg), libnm0 (>= 1.2), libnma0 (>= 1.1.90), libpango-1.0-0 (>= 1.32.5), libpangocairo-1.0-0 (>= 1.32.5), libpolkit-gobject-1-0 (>= 0.103), libpop-analytics-panel, libpop-desktop-widget (>= 0.1.0~), libpop-theme-switcher (>= 0.1.1~), libpwquality1 (>= 1.1.0), librest-0.7-0 (>= 0.7), libsecret-1-0 (>= 0.18), libwebkit2gtk-4.0-37 (>= 2.5.3), policykit-1 (>= 0.103)
  - recommends: gnome-getting-started-docs, gnome-keyring, system76-power
  - suggests: gdm3

  </details>

- **pop-gnome-shell-theme**
  - Latest version: 5.5.1~1723827328~22.04~25ea85d
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop GNOME Shell Theme
  - Homepage: https://github.com/pop-os/gtk-theme
  - Install: `sudo apt-get install pop-gnome-shell-theme`
  - Install (apt): `sudo apt install pop-gnome-shell-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: misc
  - Priority: optional
  - depends: pop-gtk-theme

  </details>

- **pop-gtk-theme**
  - Latest version: 5.5.1~1723827328~22.04~25ea85d
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop GTK Theme
  - Homepage: https://github.com/pop-os/gtk-theme
  - Install: `sudo apt-get install pop-gtk-theme`
  - Install (apt): `sudo apt install pop-gtk-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: misc
  - Priority: optional
  - depends: gnome-themes-extra, gtk2-engines-murrine, gtk2-engines-pixbuf
  - conflicts: pop-gnome-shell-theme (<= 4.1.0)

  </details>

- **pop-hp-vendor**
  - Latest version: 0.1.0~1707324857~22.04~7c9a0a8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HP vendor support
  - Homepage: https://github.com/pop-os/hp-vendor
  - Install: `sudo apt-get install pop-hp-vendor`
  - Install (apt): `sudo apt install pop-hp-vendor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libsqlite3-0 (>= 3.6.0), libssl3 (>= 3.0.0~~alpha1), libudev1 (>= 183), pop-hp-vendor-dkms, systemd
  - recommends: pop-hp-wallpapers

  </details>

- **pop-hp-vendor-dkms**
  - Latest version: 0.1.0~1707324857~22.04~7c9a0a8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HP vendor kernel driver
  - Homepage: https://github.com/pop-os/hp-vendor
  - Install: `sudo apt-get install pop-hp-vendor-dkms`
  - Install (apt): `sudo apt install pop-hp-vendor-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)

  </details>

- **pop-hp-wallpapers**
  - Latest version: 1.0.0~1761618479~22.04~94f7df3
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Wallpapers for HP products
  - Homepage: https://github.com/pop-os/hp-wallpapers
  - Install: `sudo apt-get install pop-hp-wallpapers`
  - Install (apt): `sudo apt install pop-hp-wallpapers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: x11
  - Priority: optional
  - provides: ubuntu-wallpapers

  </details>

- **pop-icon-theme**
  - Latest version: 3.5.1~1727801177~22.04~1a575a8
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop Icons
  - Homepage: https://github.com/pop-os/icon-theme
  - Install: `sudo apt-get install pop-icon-theme`
  - Install (apt): `sudo apt install pop-icon-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: adwaita-icon-theme-full, hicolor-icon-theme
  - suggests: pop-icon-theme-extra
  - conflicts: system76-pop-icon-theme

  </details>

- **pop-installer**
  - Latest version: 0.0.1~1752104328~22.04~21c9d39
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Distribution installer
  - Homepage: https://github.com/pop-os/installer
  - Install: `sudo apt-get install pop-installer`
  - Install (apt): `sudo apt install pop-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: extra
  - depends: distinst-v2, gparted, libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgee-0.8-2 (>= 0.20.0), libglib2.0-0 (>= 2.43.92), libgnomekbd8 (>= 3.6.0), libgranite6 (>= 0.5), libgtk-3-0 (>= 3.21.6), libpangocairo-1.0-0 (>= 1.14.0), libpwquality1 (>= 1.1.0)
  - recommends: pop-installer-session

  </details>

- **pop-installer-casper**
  - Latest version: 0.0.1~1752104328~22.04~21c9d39
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Autostart pop-installer in casper
  - Homepage: https://github.com/pop-os/installer
  - Install: `sudo apt-get install pop-installer-casper`
  - Install (apt): `sudo apt install pop-installer-casper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: extra
  - depends: casper

  </details>

- **pop-installer-session**
  - Latest version: 0.0.1~1752104328~22.04~21c9d39
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Dedicated installer session
  - Homepage: https://github.com/pop-os/installer
  - Install: `sudo apt-get install pop-installer-session`
  - Install (apt): `sudo apt install pop-installer-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: extra
  - depends: pop-installer

  </details>

- **pop-keyring**
  - Latest version: 1.0.0~1641313934~22.04~356a75e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: GnuPG keys of the Pop archive
  - Homepage: https://github.com/pop-os/keyring
  - Install: `sudo apt-get install pop-keyring`
  - Install (apt): `sudo apt install pop-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: misc
  - Priority: optional

  </details>

- **pop-launcher**
  - Latest version: 1.2.6~1759336638~22.04~eead361
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Modular IPC-based desktop launcher service
  - Homepage: https://github.com/pop-os/launcher
  - Install: `sudo apt-get install pop-launcher`
  - Install (apt): `sudo apt install pop-launcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: fd-find, libc6 (>= 2.34), libgcc-s1 (>= 4.2), qalc

  </details>

- **pop-launcher-system76-power**
  - Latest version: 1.2.6~1759336638~22.04~eead361
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: System76 Power scripts for the launcher
  - Homepage: https://github.com/pop-os/launcher
  - Install: `sudo apt-get install pop-launcher-system76-power`
  - Install (apt): `sudo apt install pop-launcher-system76-power`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional

  </details>

- **pop-pipewire**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for PipeWire-related dependencies.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-pipewire`
  - Install (apt): `sudo apt install pop-pipewire`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: libasound2-plugins, libfreeaptx0, libldacbt-abr2, libldacbt-enc2, libspa-0.2-bluetooth, libspa-0.2-jack | jackd2, pipewire, pipewire-alsa, pipewire-jack | jackd2, pipewire-pulse, pulseaudio-utils, wireplumber
  - conflicts: pipewire-media-session, pulseaudio

  </details>

- **pop-plymouth-theme**
  - Latest version: 2.0.2~1646089097~22.04~8cd4acc
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: graphical boot animation and logger
  - Install: `sudo apt-get install pop-plymouth-theme`
  - Install (apt): `sudo apt install pop-plymouth-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: 13r0ck <bnr@tuta.io>
  - Section: x11
  - Priority: optional
  - depends: plymouth, plymouth-label, plymouth-theme-spinner, pop-fonts
  - breaks: plymouth-theme-pop-basic (<< 2.0.2~)
  - replaces: plymouth-theme-pop-basic (<< 2.0.2~)

  </details>

- **pop-server**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS metapackage for server OS installations.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install pop-server`
  - Install (apt): `sudo apt install pop-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: acpi-support, alsa-base, bluez, bluez-cups, cryptsetup, cups, cups-bsd, dbus-user-session, fwupd, fwupdate, gstreamer1.0-alsa, ifupdown, laptop-detect, libblockdev-crypto2, libblockdev-mdraid2, libsystemd0, libvdpau-va-gl1, linux-system76 | linux-raspi, lvm2, mesa-va-drivers, mesa-vulkan-drivers, network-manager, openprinting-ppds, pcmciautils, pop-container-interactive, pop-default-settings, pop-upgrade, printer-driver-all, rfkill, systemd-resolvconf | resolvconf, systemd-sysv, ubuntu-drivers-common, vdpau-driver-all, wireless-tools
  - recommends: brltty, dbus-broker

  </details>

- **pop-session**
  - Latest version: 5.0.0~1662569841~22.04~1c78668
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: GNOME session for Pop
  - Homepage: https://github.com/system76/pop-session
  - Install: `sudo apt-get install pop-session`
  - Install (apt): `sudo apt install pop-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gnome-session-bin, gnome-session-common, gnome-shell, gnome-shell-extension-appindicator, gnome-shell-extension-cosmic-dock, gnome-shell-extension-cosmic-workspaces, gnome-shell-extension-desktop-icons-ng, gnome-shell-extension-pop-x11gestures, gnome-shell-extension-system76-power, pop-cosmic, pop-gnome-shell-theme, pop-shell, pop-theme, xwayland
  - breaks: pop-default-settings (<< 2)
  - replaces: pop-default-settings (<< 2)
  - provides: gnome-session, x-session-manager

  </details>

- **pop-shell**
  - Latest version: 1.1.0~1735556688~22.04~0f7a5d1
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS Shell
  - Homepage: https://github.com/pop-os/shell
  - Install: `sudo apt-get install pop-shell`
  - Install (apt): `sudo apt install pop-shell`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, fd-find, pop-launcher, pop-shell-shortcuts
  - recommends: pop-shell-plugin-system76-power, system76-scheduler
  - breaks: gnome-control-center-data (<< 1:3.38.1-2ubuntu1pop1~)
  - replaces: gnome-control-center-data (<< 1:3.38.1-2ubuntu1pop1~)

  </details>

- **pop-shell-shortcuts**
  - Latest version: 0.1.0~1633121872~22.04~52cc83f
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS Shell Keyboard Shortcuts
  - Homepage: https://github.com/pop-os/shell-shortcuts
  - Install: `sudo apt-get install pop-shell-shortcuts`
  - Install (apt): `sudo apt install pop-shell-shortcuts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: gnome
  - Priority: optional

  </details>

- **pop-shop**
  - Latest version: 7.4.0pop0~1709656947~22.04~552fdf3
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Fast application store
  - Homepage: https://github.com/pop-os/shop
  - Install: `sudo apt-get install pop-shop`
  - Install (apt): `sudo apt install pop-shop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: utils
  - Priority: extra
  - depends: appstream (>= 0.12), apt-config-icons, apt-config-icons-hidpi, apt-config-icons-large, apt-config-icons-large-hidpi, dconf-gsettings-backend | gsettings-backend, libappstream4 (>= 0.15.2), libc6 (>= 2.34), libflatpak0 (>= 1.1.3), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgee-0.8-2 (>= 0.10.1), libglib2.0-0 (>= 2.63.1), libgranite6 (>= 6.2.0pop1~1677598542~22.04~66414db), libgtk-3-0 (>= 3.23.1), libhandy-1-0 (>= 1.3.90), libjson-glib-1.0-0 (>= 1.5.2), libpackagekit-glib2-18 (>= 1.1.0), libpolkit-gobject-1-0 (>= 0.99), libsoup2.4-1 (>= 2.41.90), libxml2 (>= 2.7.4), packagekit, repoman
  - recommends: appstream-data-pop

  </details>

- **pop-shop-casper**
  - Latest version: 7.4.0pop0~1709656947~22.04~552fdf3
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Disable pop-shop in casper
  - Homepage: https://github.com/pop-os/shop
  - Install: `sudo apt-get install pop-shop-casper`
  - Install (apt): `sudo apt install pop-shop-casper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: utils
  - Priority: extra
  - depends: casper

  </details>

- **pop-sound-theme**
  - Latest version: 5.5.1~1723827328~22.04~25ea85d
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop sound theme
  - Homepage: https://github.com/pop-os/gtk-theme
  - Install: `sudo apt-get install pop-sound-theme`
  - Install (apt): `sudo apt install pop-sound-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: misc
  - Priority: optional

  </details>

- **pop-system-updater**
  - Latest version: 0.1.0~1706713830~22.04~c208318
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Automatic System Updates for Pop!_OS
  - Homepage: https://github.com/pop-os/system-updater
  - Install: `sudo apt-get install pop-system-updater`
  - Install (apt): `sudo apt install pop-system-updater`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcurl4, libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libssl3 | libssl1.1

  </details>

- **pop-theme**
  - Latest version: 1.0.4~1571245319~22.04~ed52981
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop Theme Metapackage
  - Homepage: https://github.com/system76/pop-theme
  - Install: `sudo apt-get install pop-theme`
  - Install (apt): `sudo apt install pop-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: pop-fonts, pop-gnome-shell-theme, pop-gtk-theme, pop-icon-theme, pop-sound-theme
  - conflicts: system76-pop-theme

  </details>

- **pop-transition**
  - Latest version: 1.1.2~1673280823~22.04~3b034ef
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS Deb-to-Flatpak Migration Assistant
  - Homepage: https://github.com/pop-os/pop-transition
  - Install: `sudo apt-get install pop-transition`
  - Install (apt): `sudo apt install pop-transition`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: python
  - Priority: optional
  - depends: gir1.2-flatpak-1.0, gir1.2-gtk-3.0, libflatpak-dev, python3-dbus, python3-gi, python3:any, repoman

  </details>

- **pop-upgrade**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Utility for performing system upgrades on Pop!_OS
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install pop-upgrade`
  - Install (apt): `sudo apt install pop-upgrade`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libssl3 (>= 3.0.0~~alpha1), pop-plymouth-theme, pop-system-updater, rsync, zlib1g (>= 1:1.2.3.4)

  </details>

- **pop-wallpapers**
  - Latest version: 1.0.5~1750780843~22.04~20a9fdd
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Pop Wallpapers
  - Homepage: https://github.com/system76/pop-wallpapers
  - Install: `sudo apt-get install pop-wallpapers`
  - Install (apt): `sudo apt install pop-wallpapers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: x11
  - Priority: optional
  - provides: ubuntu-wallpapers

  </details>

- **popsec-daemon**
  - Latest version: 0.1.0~1661780633~22.04~76a91ca
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop security daemon
  - Homepage: https://github.com/pop-os/popsec
  - Install: `sudo apt-get install popsec-daemon`
  - Install (apt): `sudo apt install popsec-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libtpm2-totp0, libtss2-esys-3.0.2-0 (>= 2.3.1), libtss2-tctildr0 (>= 3.0.1)

  </details>

- **popsec-gtk**
  - Latest version: 0.1.0~1661780633~22.04~76a91ca
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop security GTK application
  - Homepage: https://github.com/pop-os/popsec
  - Install: `sudo apt-get install popsec-gtk`
  - Install (apt): `sudo apt install popsec-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.16.2), libhandy-1-0 (>= 0.82.0), libpango-1.0-0 (>= 1.14.0), libtpm2-totp0, libtss2-esys-3.0.2-0 (>= 2.3.1), libtss2-tctildr0 (>= 3.0.1), popsec-daemon

  </details>

- **popsicle**
  - Latest version: 1.3.3~1747416703~22.04~1e36998
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: USB Flasher
  - Homepage: https://github.com/pop-os/popsicle
  - Install: `sudo apt-get install popsicle`
  - Install (apt): `sudo apt install popsicle`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: optional

  </details>

- **popsicle-gtk**
  - Latest version: 1.3.3~1747416703~22.04~1e36998
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: GTK front end to the USB Flasher
  - Homepage: https://github.com/pop-os/popsicle
  - Install: `sudo apt-get install popsicle-gtk`
  - Install (apt): `sudo apt install popsicle-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: utils
  - Priority: optional
  - depends: libgtk-3-0

  </details>

- **python3-distupgrade**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message (transitional).
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install python3-distupgrade`
  - Install (apt): `sudo apt install python3-distupgrade`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **python3-pyzfs**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: wrapper for libzfs_core C library
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install python3-pyzfs`
  - Install (apt): `sudo apt install python3-pyzfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/python
  - Priority: optional
  - depends: python3-cffi, python3-cffi-backend-api-max (>= 9729), python3-cffi-backend-api-min (<= 9729), python3:any, zfsutils-linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)

  </details>

- **python3-repolib**
  - Latest version: 2.2.2~1755270712~22.04~fe51095
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Repository Management for APT in Python (Python 3)
  - Homepage: https://github.com/isantop/repolib
  - Install: `sudo apt-get install python3-repolib`
  - Install (apt): `sudo apt install python3-repolib`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <isantop@gmail.com>
  - Section: python
  - Priority: optional
  - depends: apt, lsb-release, python3 (>= 3.8), python3-dbus, python3-debian, python3-distro (>= 1.4.0), python3-gnupg, python3-launchpadlib, python3-lazr.restfulclient, python3:any (>= 3.8~)

  </details>

- **python3-update-manager**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message (transitional).
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install python3-update-manager`
  - Install (apt): `sudo apt install python3-update-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **pyzfs-doc**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: wrapper for libzfs_core C library (documentation)
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install pyzfs-doc`
  - Install (apt): `sudo apt install pyzfs-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 4.3)
  - recommends: python3-pyzfs

  </details>


### <a id="packages-R"></a>R

- **repoman**
  - Latest version: 2.4.0~1716233177~22.04~83329d2
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Repoman, A Software Sources Manager
  - Install: `sudo apt-get install repoman`
  - Install (apt): `sudo apt install repoman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ian Santopietro <ian@system76.com>
  - Section: x11
  - Priority: extra
  - depends: gir1.2-gtk-3.0, python3-repolib (>= 2.0), python3:any (>= 3.4~)
  - recommends: gir1.2-flatpak-1.0

  </details>

- **rtl8821ce-dkms**
  - Latest version: 5.5.2.1-0ubuntu11pop1~1659015671~22.04~5417fc0
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: DKMS source for the Realtek 8821C PCIe Wi-Fi driver
  - Homepage: https://launchpad.net/ubuntu/+source/rtl8821ce
  - Install: `sudo apt-get install rtl8821ce-dkms`
  - Install (apt): `sudo apt install rtl8821ce-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: kernel
  - Priority: optional
  - depends: bc, dkms (>= 2.1.0.0)

  </details>

- **rust-all**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Metapackage that installs everything
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rust-all`
  - Install (apt): `sudo apt install rust-all`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: cargo, cargo-doc, rust-clippy, rust-doc, rust-gdb, rust-lldb, rustc, rustfmt

  </details>

- **rust-clippy**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust linter
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rust-clippy`
  - Install (apt): `sudo apt install rust-clippy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: cargo, rustc

  </details>

- **rust-doc**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Rust documentation
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rust-doc`
  - Install (apt): `sudo apt install rust-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional

  </details>

- **rust-gdb**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust debugger (gdb)
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rust-gdb`
  - Install (apt): `sudo apt install rust-gdb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional

  </details>

- **rust-lldb**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust debugger (lldb)
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rust-lldb`
  - Install (apt): `sudo apt install rust-lldb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional

  </details>

- **rustc**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust compiler build from rust-lang.org
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rustc`
  - Install (apt): `sudo apt install rustc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: curl

  </details>

- **rustfmt**
  - Latest version: 1.90.0~1759163426~22.04~e7c8afd
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Rust formatter
  - Homepage: https://github.com/pop-os/packaging-rust
  - Install: `sudo apt-get install rustfmt`
  - Install (apt): `sudo apt install rustfmt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <mmstick@pm.me>
  - Section: devel
  - Priority: optional
  - depends: cargo, rustc

  </details>


### <a id="packages-S"></a>S

- **sarndbox**
  - Latest version: 2.8-1pop1~1670886254~22.04~11110c7
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/
  - Install: `sudo apt-get install sarndbox`
  - Install (apt): `sudo apt install sarndbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: education
  - Priority: optional
  - depends: arsandbox

  </details>

- **sessioninstaller**
  - Latest version: 0.20+pop0~1735950419~22.04~969930e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: APT based installer using PackageKit's session DBus API
  - Homepage: http://launchpad.net/sessioninstaller
  - Install: `sudo apt-get install sessioninstaller`
  - Install (apt): `sudo apt install sessioninstaller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: extra
  - depends: app-install-data, aptdaemon (>= 0.30), gir1.2-gstreamer-1.0, gir1.2-gtk-3.0, python3-aptdaemon.gtk3widgets, python3-commandnotfound, python3-defer, python3-gi, python3-xdg, python3:any (>= 3.2~)
  - conflicts: gnome-codec-install, packagekit-gnome
  - replaces: gnome-codec-install
  - provides: gnome-codec-install

  </details>

- **simple-wrapper**
  - Latest version: 0.1.0~1657217305~22.04~95db0da
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Simple XDG Shell Wrapper
  - Homepage: https://github.com/pop-os/simple-wrapper
  - Install: `sudo apt-get install simple-wrapper`
  - Install (apt): `sudo apt install simple-wrapper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libwayland-client0 (>= 1.11.0), libwayland-egl1 (>= 1.15.0), libwayland-server0 (>= 1.17.93), libxkbcommon0 (>= 0.5.0)

  </details>

- **spirv-headers**
  - Latest version: 1.6.1+1.4.304.0-1pop1~1741726101~22.04~1c3fc6c
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Machine-readable files for the SPIR-V Registry
  - Homepage: https://github.com/KhronosGroup/SPIRV-Headers
  - Install: `sudo apt-get install spirv-headers`
  - Install (apt): `sudo apt install spirv-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional

  </details>

- **spirv-tools**
  - Latest version: 2024.4~rc2-1pop1~1753883409~22.04~82ea4be
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: API and commands for processing SPIR-V modules
  - Homepage: https://github.com/KhronosGroup/SPIRV-Tools
  - Install: `sudo apt-get install spirv-tools`
  - Install (apt): `sudo apt install spirv-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libc6 (>= 2.34), libstdc++6 (>= 11)

  </details>

- **steam-devices**
  - Latest version: 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Device support for Steam-related hardware
  - Homepage: https://steamcommunity.com/linux
  - Install: `sudo apt-get install steam-devices`
  - Install (apt): `sudo apt install steam-devices`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Games Team <pkg-games-devel@lists.alioth.debian.org>
  - Section: games
  - Priority: optional
  - suggests: steam-installer
  - conflicts: steam-launcher
  - breaks: steam (<< 1.0.0.51-1~)
  - replaces: steam (<< 1.0.0.51-1~), steam-launcher

  </details>

- **steam-installer**
  - Latest version: 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Valve's Steam digital software delivery system
  - Homepage: https://steamcommunity.com/linux
  - Install: `sudo apt-get install steam-installer`
  - Install (apt): `sudo apt install steam-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Games Team <pkg-games-devel@lists.alioth.debian.org>
  - Section: contrib/games
  - Priority: optional
  - depends: steam-libs (= 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3), steam-libs-i386 (= 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3), zenity | yad
  - preDepends: debconf
  - conflicts: steam-launcher
  - breaks: steam (<< 1:1.0.0.75+ds~)
  - replaces: steam (<< 1:1.0.0.75+ds~), steam-launcher

  </details>

- **steam-libs**
  - Latest version: 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Metapackage for Steam dependencies
  - Homepage: https://steamcommunity.com/linux
  - Install: `sudo apt-get install steam-libs`
  - Install (apt): `sudo apt install steam-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Games Team <pkg-games-devel@lists.alioth.debian.org>
  - Section: metapackages
  - Priority: optional
  - depends: ca-certificates, curl, file, libcrypt1 | libc6 (<< 2.29-4), libgcc-s1 | libgcc1, libgl1, libgl1-mesa-dri, libgpg-error0, libstdc++6, libudev1, libva-x11-2, libva2, libxcb-dri3-0, libxcb1, libxi6, libxinerama1, xz-utils
  - recommends: fontconfig, fonts-liberation, libasound2-plugins, libegl1, libexpat1, libfontconfig1, libgbm1, libnm0, libsdl2-2.0-0, libusb-1.0-0, libva-drm2, libva-glx2, libx11-6, libx11-xcb1, libxau6, libxcb-dri2-0, libxcb-glx0, libxcb-present0, libxcb-sync1, libxdamage1, libxdmcp6, libxext6, libxfixes3, libxss1, libxxf86vm1, mesa-vulkan-drivers, mesa-vulkan-drivers:i386, steam-devices, va-driver-all | va-driver, xdg-desktop-portal, xdg-desktop-portal-gtk | xdg-desktop-portal-backend, xdg-utils, xterm | x-terminal-emulator, zenity
  - suggests: libudev0, nvidia-driver-libs, nvidia-vulkan-icd, pipewire
  - provides: steam-libs-amd64 (= 1:1.0.0.78~ds-3~1713892545~22.04~baa62f3)

  </details>

- **system76-acpi-dkms**
  - Latest version: 1.0.2~1719257749~22.04~7bae1af
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 ACPI Driver (DKMS)
  - Homepage: https://github.com/pop-os/system76-acpi-dkms
  - Install: `sudo apt-get install system76-acpi-dkms`
  - Install (apt): `sudo apt install system76-acpi-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)

  </details>

- **system76-dkms**
  - Latest version: 1.0.22~1768591124~22.04~5256643
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 DKMS driver
  - Homepage: https://github.com/pop-os/system76-dkms
  - Install: `sudo apt-get install system76-dkms`
  - Install (apt): `sudo apt install system76-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)

  </details>

- **system76-driver**
  - Latest version: 24.04.14~1761680448~22.04~0353b77
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Universal driver for System76 computers
  - Homepage: https://launchpad.net/system76-driver
  - Install: `sudo apt-get install system76-driver`
  - Install (apt): `sudo apt install system76-driver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76, Inc. <dev@system76.com>
  - Section: utils
  - Priority: extra
  - depends: at, dconf-gsettings-backend | gsettings-backend, firmware-manager-virtual, gir1.2-gtk-3.0, gir1.2-notify-0.7, ifupdown, linux-system76, pm-utils, python3-dbus, python3-distro, python3-evdev, python3-gi, python3-systemd, python3:any (>= 3.6~), system76-acpi-dkms, system76-dkms, system76-firmware-daemon, system76-io-dkms, system76-oled, system76-power, system76-power-applet-virtual, usbutils, xbacklight
  - recommends: hidpi-daemon, lm-sensors, system76-wallpapers
  - suggests: gnome-color-manager

  </details>

- **system76-driver-nvidia**
  - Latest version: 24.04.14~1761680448~22.04~0353b77
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Latest nvidia driver for System76 computers
  - Homepage: https://launchpad.net/system76-driver
  - Install: `sudo apt-get install system76-driver-nvidia`
  - Install (apt): `sudo apt install system76-driver-nvidia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76, Inc. <dev@system76.com>
  - Section: utils
  - Priority: extra
  - depends: nvidia-driver-580-open | nvidia-driver-580 | nvidia-driver-570-open | nvidia-driver-570 | nvidia-driver-550 | nvidia-driver-470, system76-driver (>= 24.04.14~1761680448~22.04~0353b77), ubuntu-drivers-common
  - recommends: amd-ppt-bin

  </details>

- **system76-firmware**
  - Latest version: 1.0.76~1769106624~22.04~e70f194
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 Firmware CLI
  - Homepage: https://github.com/pop-os/system76-firmware
  - Install: `sudo apt-get install system76-firmware`
  - Install (apt): `sudo apt install system76-firmware`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: efibootmgr

  </details>

- **system76-firmware-daemon**
  - Latest version: 1.0.76~1769106624~22.04~e70f194
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 Firmware Daemon
  - Homepage: https://github.com/pop-os/system76-firmware
  - Install: `sudo apt-get install system76-firmware-daemon`
  - Install (apt): `sudo apt install system76-firmware-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dbus, dfu-programmer, systemd

  </details>

- **system76-io-dkms**
  - Latest version: 1.0.4~1732138800~22.04~fc71f15
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 Io DKMS driver
  - Homepage: https://github.com/pop-os/system76-io-dkms
  - Install: `sudo apt-get install system76-io-dkms`
  - Install (apt): `sudo apt install system76-io-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)

  </details>

- **system76-keyboard-configurator**
  - Latest version: 1.3.12~1762964887~22.04~2f774b2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 Keyboard Configurator
  - Homepage: https://github.com/pop-os/keyboard-configurator
  - Install: `sudo apt-get install system76-keyboard-configurator`
  - Install (apt): `sudo apt install system76-keyboard-configurator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libcairo2 (>= 1.6.0), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.53.1), libgtk-3-0 (>= 3.19.12), libhidapi-hidraw0 (>= 0.8.0~rc1+git20140201.3a66d4e+dfsg), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0)

  </details>

- **system76-oled**
  - Latest version: 0.1.5~1664307225~22.04~98f778d
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Control brightness on OLED displays
  - Homepage: https://github.com/pop-os/system76-oled
  - Install: `sudo apt-get install system76-oled`
  - Install (apt): `sudo apt install system76-oled`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **system76-power**
  - Latest version: 1.2.8~1762410608~22.04~72ad9e3
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: System76 Power Management
  - Homepage: https://github.com/pop-os/system76-power
  - Install: `sudo apt-get install system76-power`
  - Install (apt): `sudo apt install system76-power`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: admin
  - Priority: optional
  - depends: dbus, libc6 (>= 2.34), libgcc-s1 (>= 4.2), libusb-1.0-0 (>= 2:1.0.16), systemd
  - conflicts: nvidia-prime, power-profiles-daemon
  - replaces: nvidia-prime, power-profiles-daemon
  - provides: nvidia-prime, power-profiles-daemon

  </details>

- **system76-scheduler**
  - Latest version: 2.0.0~1768465726~22.04~b0b7e98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Oneshot service to tweak the CFS scheduler on boot
  - Homepage: https://github.com/pop-os/system76-scheduler
  - Install: `sudo apt-get install system76-scheduler`
  - Install (apt): `sudo apt install system76-scheduler`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Murphy <mmstick@pm.me>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libpipewire-0.3-0 (>= 0.3.6)
  - recommends: bpfcc-tools

  </details>

- **system76-wallpapers**
  - Latest version: 18.04.2~1761578402~22.04~c9a5b39
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: System76 Wallpapers
  - Homepage: https://github.com/pop-os/system76-wallpapers
  - Install: `sudo apt-get install system76-wallpapers`
  - Install (apt): `sudo apt install system76-wallpapers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76, Inc. <dev@system76.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - conflicts: system76-driver (<= 14.10.2)
  - replaces: system76-driver (<= 14.10.2)

  </details>

- **systemd**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: system and service manager
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd`
  - Install (apt): `sudo apt install systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: important
  - depends: adduser, chrony, libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libaudit1 (>= 1:2.2.1), libcrypt1 (>= 1:4.4.0), libcryptsetup12 (>= 2:2.4), libgnutls30 (>= 3.7.2), libgpg-error0 (>= 1.14), libip4tc2 (>= 1.8.3), libkmod2 (>= 5~), liblz4-1 (>= 0.0~r130), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libssl3 (>= 3.0.0~~alpha1), libsystemd0 (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), mount (>= 2.26), util-linux (>= 2.27.1)
  - preDepends: libblkid1 (>= 2.24), libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libgcrypt20 (>= 1.9.0), liblz4-1 (>= 0.0~r122), liblzma5 (>= 5.1.1alpha+20120614), libselinux1 (>= 3.1~), libzstd1 (>= 1.4.0)
  - recommends: default-dbus-system-bus | dbus-system-bus, networkd-dispatcher, systemd-timesyncd | time-daemon
  - suggests: libfido2-1, libtss2-esys-3.0.2-0, libtss2-mu0, libtss2-rc0, policykit-1, systemd-container
  - conflicts: consolekit, libpam-ck-connector, systemd-shim
  - breaks: resolvconf (<< 1.83~), udev (<< 247~)
  - provides: systemd-sysusers (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), systemd-tmpfiles (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-container**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: systemd container/nspawn tools
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-container`
  - Install (apt): `sudo apt install systemd-container`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: default-dbus-system-bus | dbus-system-bus, libacl1 (>= 2.2.23), libbz2-1.0, libc6 (>= 2.34), libcurl3-gnutls (>= 7.16.3), libgcrypt20 (>= 1.9.0), liblzma5 (>= 5.1.1alpha+20120614), libseccomp2 (>= 2.3.1), libselinux1 (>= 3.1~), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), zlib1g (>= 1:1.1.4)
  - recommends: libnss-mymachines

  </details>

- **systemd-coredump**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: tools for storing and retrieving coredumps
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-coredump`
  - Install (apt): `sudo apt install systemd-coredump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libdw1 (>= 0.158), libelf1 (>= 0.144), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)
  - conflicts: core-dump-handler
  - replaces: core-dump-handler
  - provides: core-dump-handler

  </details>

- **systemd-journal-remote**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: tools for sending and receiving remote journal logs
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-journal-remote`
  - Install (apt): `sudo apt install systemd-journal-remote`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcurl3-gnutls (>= 7.16.2), libgnutls30 (>= 3.7.0), libmicrohttpd12 (>= 0.9.50), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-oomd**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Userspace out-of-memory (OOM) killer
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-oomd`
  - Install (apt): `sudo apt install systemd-oomd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-repart**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Provides the systemd-repart utility
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-repart`
  - Install (apt): `sudo apt install systemd-repart`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libblkid1 (>= 2.24.2), libc6 (>= 2.34), libfdisk1 (>= 2.33), libssl3 (>= 3.0.0~~alpha1), systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-resolvconf**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Symlinks the resolvconf command to resolvectl for compatibility.
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-resolvconf`
  - Install (apt): `sudo apt install systemd-resolvconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: systemd
  - conflicts: resolvconf
  - provides: resolvconf

  </details>

- **systemd-standalone-sysusers**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Standalone sysusers binary for use in non-systemd systems
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-standalone-sysusers`
  - Install (apt): `sudo apt install systemd-standalone-sysusers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.4.0), libselinux1 (>= 3.1~)
  - conflicts: systemd (<< 249.3-3), systemd-sysusers
  - replaces: systemd (<< 249.3-3), systemd-sysusers
  - provides: systemd-sysusers (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-standalone-tmpfiles**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Standalone tmpfiles binary for use in non-systemd systems
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-standalone-tmpfiles`
  - Install (apt): `sudo apt install systemd-standalone-tmpfiles`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libselinux1 (>= 3.1~)
  - conflicts: systemd (<< 249.3-3), systemd-tmpfiles
  - replaces: systemd (<< 249.3-3), systemd-tmpfiles
  - provides: systemd-tmpfiles (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **systemd-sysv**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: system and service manager - SysV links
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-sysv`
  - Install (apt): `sudo apt install systemd-sysv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: important
  - depends: systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)
  - preDepends: systemd
  - recommends: libnss-systemd, libpam-systemd
  - conflicts: file-rc, systemd-shim, sysvinit-core
  - replaces: sysvinit-core

  </details>

- **systemd-tests**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: tests for systemd
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-tests`
  - Install (apt): `sudo apt install systemd-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libacl1 (>= 2.2.23), libapparmor1 (>= 2.13), libaudit1 (>= 1:2.2.1), libblkid1 (>= 2.37.2), libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libcrypt1 (>= 1:4.4.0), libdbus-1-3 (>= 1.9.14), libgcrypt20 (>= 1.9.0), libglib2.0-0 (>= 2.26.0), libgpg-error0 (>= 1.14), libkmod2 (>= 5~), liblz4-1 (>= 0.0~r130), liblzma5 (>= 5.1.1alpha+20120614), libmount1 (>= 2.30), libpam0g (>= 0.99.7.1), libseccomp2 (>= 2.4.1), libselinux1 (>= 3.1~), libsystemd0 (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), libudev1 (>= 247), libzstd1 (>= 1.4.0), python3, systemd (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), zlib1g (>= 1:1.1.4)

  </details>

- **systemd-timesyncd**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: minimalistic service to synchronize local time with NTP servers
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install systemd-timesyncd`
  - Install (apt): `sudo apt install systemd-timesyncd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: standard
  - depends: adduser, systemd
  - breaks: systemd (<< 245.4-2~)
  - replaces: systemd (<< 245.4-2~)

  </details>


### <a id="packages-T"></a>T

- **tensorman**
  - Latest version: 0.2.0~1721790995~22.04~24fa3b2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Tensorflow docker image manager
  - Homepage: https://github.com/pop-os/firmware-manager
  - Install: `sudo apt-get install tensorman`
  - Install (apt): `sudo apt install tensorman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: docker.io | docker-ce
  - suggests: nvidia-container-runtime | nvidia-docker2

  </details>

- **test-launch-system76-keyboard-configurator**
  - Latest version: 1.3.12~1762964887~22.04~2f774b2
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Internal testing version of the System76 keyboard configurator.
  - Homepage: https://github.com/pop-os/keyboard-configurator
  - Install: `sudo apt-get install test-launch-system76-keyboard-configurator`
  - Install (apt): `sudo apt install test-launch-system76-keyboard-configurator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: avrdude, dfu-programmer, system76-keyboard-configurator

  </details>

- **thunderbird**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Thunderbird
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird`
  - Install (apt): `sudo apt install thunderbird`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.18), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.3.5), libgcc-s1 (>= 4.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.0), libgtk-3-0 (>= 3.13.7), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libstdc++6 (>= 4.8), libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-shm0, libxcb1, libxcomposite1 (>= 1:0.4.5), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxi6, libxrandr2 (>= 2:1.4.0), libxrender1

  </details>

- **thunderbird-gnome-support**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Email, RSS and newsgroup client - GNOME support
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-gnome-support`
  - Install (apt): `sudo apt install thunderbird-gnome-support`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: gnome
  - Priority: optional
  - depends: libnotify4 | libnotify1, thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)

  </details>

- **thunderbird-locale-af**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for af
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-af`
  - Install (apt): `sudo apt install thunderbird-locale-af`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-af-base

  </details>

- **thunderbird-locale-ar**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ar
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ar`
  - Install (apt): `sudo apt install thunderbird-locale-ar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ar-base

  </details>

- **thunderbird-locale-ast**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ast
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ast`
  - Install (apt): `sudo apt install thunderbird-locale-ast`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ast-base

  </details>

- **thunderbird-locale-be**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for be
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-be`
  - Install (apt): `sudo apt install thunderbird-locale-be`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-be-base

  </details>

- **thunderbird-locale-bg**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for bg
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-bg`
  - Install (apt): `sudo apt install thunderbird-locale-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-bg-base

  </details>

- **thunderbird-locale-br**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for br
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-br`
  - Install (apt): `sudo apt install thunderbird-locale-br`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-br-base

  </details>

- **thunderbird-locale-ca**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ca
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ca`
  - Install (apt): `sudo apt install thunderbird-locale-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ca-base

  </details>

- **thunderbird-locale-cak**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cak
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cak`
  - Install (apt): `sudo apt install thunderbird-locale-cak`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-cak-base

  </details>

- **thunderbird-locale-cs**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cs
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cs`
  - Install (apt): `sudo apt install thunderbird-locale-cs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-cs-base

  </details>

- **thunderbird-locale-cy**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for cy
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cy`
  - Install (apt): `sudo apt install thunderbird-locale-cy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-cy-base

  </details>

- **thunderbird-locale-da**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for da
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-da`
  - Install (apt): `sudo apt install thunderbird-locale-da`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-da-base

  </details>

- **thunderbird-locale-de**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for de
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-de`
  - Install (apt): `sudo apt install thunderbird-locale-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-de-base

  </details>

- **thunderbird-locale-dsb**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for dsb
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-dsb`
  - Install (apt): `sudo apt install thunderbird-locale-dsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-dsb-base

  </details>

- **thunderbird-locale-el**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for el
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-el`
  - Install (apt): `sudo apt install thunderbird-locale-el`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-el-base

  </details>

- **thunderbird-locale-en**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for en
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-en`
  - Install (apt): `sudo apt install thunderbird-locale-en`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-en-base

  </details>

- **thunderbird-locale-es**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for es
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-es`
  - Install (apt): `sudo apt install thunderbird-locale-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-es-base

  </details>

- **thunderbird-locale-et**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for et
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-et`
  - Install (apt): `sudo apt install thunderbird-locale-et`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-et-base

  </details>

- **thunderbird-locale-eu**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for eu
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-eu`
  - Install (apt): `sudo apt install thunderbird-locale-eu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-eu-base

  </details>

- **thunderbird-locale-fi**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fi
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fi`
  - Install (apt): `sudo apt install thunderbird-locale-fi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-fi-base

  </details>

- **thunderbird-locale-fr**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fr
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fr`
  - Install (apt): `sudo apt install thunderbird-locale-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-fr-base

  </details>

- **thunderbird-locale-fy**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for fy
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fy`
  - Install (apt): `sudo apt install thunderbird-locale-fy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-fy-base

  </details>

- **thunderbird-locale-ga**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ga
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ga`
  - Install (apt): `sudo apt install thunderbird-locale-ga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ga-base

  </details>

- **thunderbird-locale-gd**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gd
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-gd`
  - Install (apt): `sudo apt install thunderbird-locale-gd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-gd-base

  </details>

- **thunderbird-locale-gl**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for gl
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-gl`
  - Install (apt): `sudo apt install thunderbird-locale-gl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-gl-base

  </details>

- **thunderbird-locale-he**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for he
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-he`
  - Install (apt): `sudo apt install thunderbird-locale-he`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-he-base

  </details>

- **thunderbird-locale-hr**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hr
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hr`
  - Install (apt): `sudo apt install thunderbird-locale-hr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-hr-base

  </details>

- **thunderbird-locale-hsb**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hsb
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hsb`
  - Install (apt): `sudo apt install thunderbird-locale-hsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-hsb-base

  </details>

- **thunderbird-locale-hu**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hu
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hu`
  - Install (apt): `sudo apt install thunderbird-locale-hu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-hu-base

  </details>

- **thunderbird-locale-hy**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for hy
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hy`
  - Install (apt): `sudo apt install thunderbird-locale-hy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-hy-base

  </details>

- **thunderbird-locale-id**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for id
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-id`
  - Install (apt): `sudo apt install thunderbird-locale-id`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-id-base

  </details>

- **thunderbird-locale-is**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for is
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-is`
  - Install (apt): `sudo apt install thunderbird-locale-is`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-is-base

  </details>

- **thunderbird-locale-it**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for it
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-it`
  - Install (apt): `sudo apt install thunderbird-locale-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-it-base

  </details>

- **thunderbird-locale-ja**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ja
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ja`
  - Install (apt): `sudo apt install thunderbird-locale-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ja-base

  </details>

- **thunderbird-locale-ka**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ka
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ka`
  - Install (apt): `sudo apt install thunderbird-locale-ka`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ka-base

  </details>

- **thunderbird-locale-kab**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for kab
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-kab`
  - Install (apt): `sudo apt install thunderbird-locale-kab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-kab-base

  </details>

- **thunderbird-locale-kk**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for kk
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-kk`
  - Install (apt): `sudo apt install thunderbird-locale-kk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-kk-base

  </details>

- **thunderbird-locale-ko**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ko
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ko`
  - Install (apt): `sudo apt install thunderbird-locale-ko`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ko-base

  </details>

- **thunderbird-locale-lt**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for lt
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-lt`
  - Install (apt): `sudo apt install thunderbird-locale-lt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-lt-base

  </details>

- **thunderbird-locale-lv**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for lv
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-lv`
  - Install (apt): `sudo apt install thunderbird-locale-lv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-lv-base

  </details>

- **thunderbird-locale-ms**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ms
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ms`
  - Install (apt): `sudo apt install thunderbird-locale-ms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ms-base

  </details>

- **thunderbird-locale-nb**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nb
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nb`
  - Install (apt): `sudo apt install thunderbird-locale-nb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-nb-base

  </details>

- **thunderbird-locale-nl**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nl
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nl`
  - Install (apt): `sudo apt install thunderbird-locale-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-nl-base

  </details>

- **thunderbird-locale-nn**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for nn
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nn`
  - Install (apt): `sudo apt install thunderbird-locale-nn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-nn-base

  </details>

- **thunderbird-locale-pa**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pa
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pa`
  - Install (apt): `sudo apt install thunderbird-locale-pa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-pa-base

  </details>

- **thunderbird-locale-pl**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pl
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pl`
  - Install (apt): `sudo apt install thunderbird-locale-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-pl-base

  </details>

- **thunderbird-locale-pt**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for pt
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pt`
  - Install (apt): `sudo apt install thunderbird-locale-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-pt-base

  </details>

- **thunderbird-locale-rm**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for rm
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-rm`
  - Install (apt): `sudo apt install thunderbird-locale-rm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-rm-base

  </details>

- **thunderbird-locale-ro**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ro
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ro`
  - Install (apt): `sudo apt install thunderbird-locale-ro`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ro-base

  </details>

- **thunderbird-locale-ru**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for ru
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ru`
  - Install (apt): `sudo apt install thunderbird-locale-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-ru-base

  </details>

- **thunderbird-locale-sk**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sk
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sk`
  - Install (apt): `sudo apt install thunderbird-locale-sk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-sk-base

  </details>

- **thunderbird-locale-sl**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sl
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sl`
  - Install (apt): `sudo apt install thunderbird-locale-sl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-sl-base

  </details>

- **thunderbird-locale-sq**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sq
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sq`
  - Install (apt): `sudo apt install thunderbird-locale-sq`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-sq-base

  </details>

- **thunderbird-locale-sr**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sr
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sr`
  - Install (apt): `sudo apt install thunderbird-locale-sr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-sr-base

  </details>

- **thunderbird-locale-sv**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for sv
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sv`
  - Install (apt): `sudo apt install thunderbird-locale-sv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-sv-base

  </details>

- **thunderbird-locale-th**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for th
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-th`
  - Install (apt): `sudo apt install thunderbird-locale-th`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-th-base

  </details>

- **thunderbird-locale-tr**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for tr
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-tr`
  - Install (apt): `sudo apt install thunderbird-locale-tr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-tr-base

  </details>

- **thunderbird-locale-uk**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for uk
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-uk`
  - Install (apt): `sudo apt install thunderbird-locale-uk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-uk-base

  </details>

- **thunderbird-locale-uz**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for uz
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-uz`
  - Install (apt): `sudo apt install thunderbird-locale-uz`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-uz-base

  </details>

- **thunderbird-locale-vi**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for vi
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-vi`
  - Install (apt): `sudo apt install thunderbird-locale-vi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-vi-base

  </details>

- **thunderbird-locale-zh-hans**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for zh-hans
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-zh-hans`
  - Install (apt): `sudo apt install thunderbird-locale-zh-hans`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-zh-hans-base

  </details>

- **thunderbird-locale-zh-hant**
  - Latest version: 2:128.14.0esr~1755638084~22.04~950a6fc
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Mozilla Firefox language pack for zh-hant
  - Homepage: https://github.com/pop-os/packaging-thunderbird
  - Install: `sudo apt-get install thunderbird-locale-zh-hant`
  - Install (apt): `sudo apt install thunderbird-locale-zh-hant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: web
  - Priority: optional
  - depends: thunderbird (= 2:128.14.0esr~1755638084~22.04~950a6fc)
  - replaces: language-pack-zh-hant-base

  </details>

- **touchegg**
  - Latest version: 2.0.15pop0~1674691430~22.04~2e20838
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Multi-touch gesture recognizer
  - Homepage: https://github.com/JoseExposito/touchegg
  - Install: `sudo apt-get install touchegg`
  - Install (apt): `sudo apt install touchegg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: José Expósito <jose.exposito89@gmail.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgcc-s1 (>= 3.3.1), libglib2.0-0 (>= 2.68.0), libgtk-3-0 (>= 3.19.12), libinput10 (>= 0.21.0), libpugixml1v5 (>= 1.4), libstdc++6 (>= 11), libudev1 (>= 183), libx11-6, libxi6 (>= 2:1.2.99.4), libxrandr2 (>= 2:1.2.99.2), libxtst6
  - recommends: xdotool

  </details>

- **tpm2-totp**
  - Latest version: 0.1.0~1639007579~22.04~323d2a1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: TPM2 TOTP command line program
  - Homepage: https://github.com/pop-os/tpm2-totp
  - Install: `sudo apt-get install tpm2-totp`
  - Install (apt): `sudo apt install tpm2-totp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libqrencode4 (>= 3.2.0), libtpm2-totp0, libtss2-rc0 (>= 3.0.1), libtss2-tctildr0 (>= 3.0.1)

  </details>

- **ttf-mscorefonts-installer**
  - Latest version: 3.8.1-pop1~1677150712~22.04~0bafed9
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Installer for Microsoft TrueType core fonts
  - Install: `sudo apt-get install ttf-mscorefonts-installer`
  - Install (apt): `sudo apt install ttf-mscorefonts-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Thijs Kinkhorst <thijs@debian.org>
  - Section: contrib/fonts
  - Priority: optional
  - depends: ca-certificates, cabextract, debconf (>= 0.5) | debconf-2.0, wget, xfonts-utils
  - preDepends: debconf
  - recommends: fonts-liberation
  - provides: msttcorefonts

  </details>


### <a id="packages-U"></a>U

- **ubuntu-drivers-common**
  - Latest version: 1:0.9.6.2~0.22.04.8pop0~1744993802~22.04~6b6b6f8
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Detect and install additional Ubuntu driver packages
  - Install: `sudo apt-get install ubuntu-drivers-common`
  - Install (apt): `sudo apt install ubuntu-drivers-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5.00) | debconf-2.0, kmod | module-init-tools, libc6 (>= 2.34), libdrm2 (>= 2.3.1), libkmod2 (>= 5~), libpci3 (>= 1:3.5.1), pciutils, python3-apt, python3-click, python3-xkit, python3:any (>= 3.2~), udev (>= 204-0ubuntu4~), usbutils
  - preDepends: dpkg (>= 1.15.7.2)
  - suggests: python3-aptdaemon.pkcompat
  - conflicts: jockey-common, jockey-gtk, jockey-kde, nvidia-common (<< 1:0.2.46)
  - breaks: nvidia-prime (<< 0.6)
  - replaces: jockey-common, jockey-gtk, jockey-kde, nvidia-common (<< 1:0.2.46)
  - provides: jockey-common, jockey-gtk, jockey-kde, nvidia-common

  </details>

- **ubuntu-minimal**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS transitional package to pop-container-runtime.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install ubuntu-minimal`
  - Install (apt): `sudo apt install ubuntu-minimal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: pop-container-runtime

  </details>

- **ubuntu-release-upgrader-core**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message.
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install ubuntu-release-upgrader-core`
  - Install (apt): `sudo apt install ubuntu-release-upgrader-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **ubuntu-release-upgrader-gtk**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message.
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install ubuntu-release-upgrader-gtk`
  - Install (apt): `sudo apt install ubuntu-release-upgrader-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **ubuntu-release-upgrader-qt**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message.
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install ubuntu-release-upgrader-qt`
  - Install (apt): `sudo apt install ubuntu-release-upgrader-qt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **ubuntu-standard**
  - Latest version: 2.0.0~1722298299~22.04~4746943
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Pop!_OS transitional package to pop-container-interactive.
  - Homepage: https://github.com/system76/pop-desktop
  - Install: `sudo apt-get install ubuntu-standard`
  - Install (apt): `sudo apt install ubuntu-standard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jeremy Soller <jeremy@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: pop-container-interactive

  </details>

- **udev**
  - Latest version: 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: /dev/ and hotplug management daemon
  - Homepage: https://www.freedesktop.org/wiki/Software/systemd
  - Install: `sudo apt-get install udev`
  - Install (apt): `sudo apt install udev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: important
  - depends: adduser, libacl1 (>= 2.2.23), libblkid1 (>= 2.37.2), libc6 (>= 2.34), libcap2 (>= 1:2.24-9~), libkmod2 (>= 5~), libselinux1 (>= 3.1~), libudev1 (= 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b), util-linux (>= 2.27.1)
  - recommends: systemd-hwe-hwdb
  - conflicts: hal
  - breaks: systemd (<< 249.11-0ubuntu3.17pop0~1760637232~22.04~155dd5b)

  </details>

- **update-manager-core**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message.
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install update-manager-core`
  - Install (apt): `sudo apt install update-manager-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional
  - depends: ubuntu-release-upgrader-core (= 1.0.0~1767378833~22.04~10865b5)

  </details>

- **update-notifier**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message (transitional).
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install update-notifier`
  - Install (apt): `sudo apt install update-notifier`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>

- **update-notifier-common**
  - Latest version: 1.0.0~1767378833~22.04~10865b5
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Replaces do-release-upgrade with a help message (transitional).
  - Homepage: https://github.com/pop-os/upgrade
  - Install: `sudo apt-get install update-notifier-common`
  - Install (apt): `sudo apt install update-notifier-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: admin
  - Priority: optional

  </details>


### <a id="packages-V"></a>V

- **v4l2loopback-dkms**
  - Latest version: 0.15.1-1pop1~1756123534~22.04~a34615c
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Source for the v4l2loopback driver (DKMS)
  - Homepage: https://github.com/umlaeute/v4l2loopback
  - Install: `sudo apt-get install v4l2loopback-dkms`
  - Install (apt): `sudo apt install v4l2loopback-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: IOhannes m zmölnig (Debian/GNU) <umlaeute@debian.org>
  - Section: kernel
  - Priority: optional
  - depends: dkms (>= 2.1.0.0)
  - suggests: v4l2loopback-utils

  </details>

- **v4l2loopback-source**
  - Latest version: 0.15.1-1pop1~1756123534~22.04~a34615c
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Source for the v4l2loopback driver
  - Homepage: https://github.com/umlaeute/v4l2loopback
  - Install: `sudo apt-get install v4l2loopback-source`
  - Install (apt): `sudo apt install v4l2loopback-source`
  <details>
  <summary>More metadata</summary>

  - Maintainer: IOhannes m zmölnig (Debian/GNU) <umlaeute@debian.org>
  - Section: kernel
  - Priority: optional
  - depends: bzip2, debhelper, make, module-assistant

  </details>

- **v4l2loopback-utils**
  - Latest version: 0.15.1-1pop1~1756123534~22.04~a34615c
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Commandline utilities for the for the v4l2-loopback module
  - Homepage: https://github.com/umlaeute/v4l2loopback
  - Install: `sudo apt-get install v4l2loopback-utils`
  - Install (apt): `sudo apt install v4l2loopback-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: IOhannes m zmölnig (Debian/GNU) <umlaeute@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - recommends: gstreamer1.0-tools, sudo, v4l-utils, v4l2loopback-dkms | v4l2loopback-modules
  - breaks: v4l2loopback-dkms (<< 0.15~)

  </details>

- **vdpau-driver-all**
  - Latest version: 1.5-3pop1~1742860670~22.04~e422eef
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Video Decode and Presentation API for Unix (driver metapackage)
  - Homepage: https://www.freedesktop.org/wiki/Software/VDPAU/
  - Install: `sudo apt-get install vdpau-driver-all`
  - Install (apt): `sudo apt install vdpau-driver-all`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: video
  - Priority: optional
  - depends: mesa-vdpau-drivers
  - suggests: libvdpau-va-gl1, vdpau-driver

  </details>

- **virtualbox-dkms**
  - Latest version: 7.0.18-dfsg-2pop2~1758227960~22.04~db14f74
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Empty transitional package for VirtualBox.
  - Homepage: https://github.com/pop-os/virtualbox
  - Install: `sudo apt-get install virtualbox-dkms`
  - Install (apt): `sudo apt install virtualbox-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: virtualbox

  </details>

- **virtualbox-ext-pack**
  - Latest version: 7.2.2-1pop1~1758579269~22.04~a7be025
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: extra capabilities for VirtualBox, downloader.
  - Homepage: https://www.virtualbox.org
  - Install: `sudo apt-get install virtualbox-ext-pack`
  - Install (apt): `sudo apt install virtualbox-ext-pack`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Virtualbox Team <team+debian-virtualbox@tracker.debian.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: ca-certificates, debconf (>= 0.5) | debconf-2.0, virtualbox (<< 7.2.2-dfsg-z) | virtualbox-7.2, virtualbox (>= 7.2.2-dfsg-0~) | virtualbox-7.2, wget
  - preDepends: debconf

  </details>

- **virtualbox-guest-additions-iso**
  - Latest version: 7.0.18-dfsg-2pop2~1758227960~22.04~db14f74
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: This is an empty transitional package that can be safely removed.
  - Homepage: https://github.com/pop-os/virtualbox
  - Install: `sudo apt-get install virtualbox-guest-additions-iso`
  - Install (apt): `sudo apt install virtualbox-guest-additions-iso`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: virtualbox

  </details>

- **virtualbox-qt**
  - Latest version: 7.0.18-dfsg-2pop2~1758227960~22.04~db14f74
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Empty transitional package for VirtualBox.
  - Homepage: https://github.com/pop-os/virtualbox
  - Install: `sudo apt-get install virtualbox-qt`
  - Install (apt): `sudo apt install virtualbox-qt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: virtualbox

  </details>

- **vrui**
  - Latest version: 8.0.002~1670886377~22.04~7e0e238
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Virtual Reality UI Toolkit
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Vrui/
  - Install: `sudo apt-get install vrui`
  - Install (apt): `sudo apt install vrui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: libs
  - Priority: optional
  - depends: libbluetooth3 (>= 4.91), libc6 (>= 2.34), libgcc-s1 (>= 3.0), libgl1, libopenal1 (>= 1.14), libstdc++6 (>= 11), libusb-1.0-0 (>= 2:1.0.8), libvrui3 (= 8.0.002~1670886377~22.04~7e0e238), libx11-6

  </details>

- **vrui-doc**
  - Latest version: 8.0.002~1670886377~22.04~7e0e238
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Virtual Reality UI Toolkit - documentation
  - Homepage: http://idav.ucdavis.edu/~okreylos/ResDev/Vrui/
  - Install: `sudo apt-get install vrui-doc`
  - Install (apt): `sudo apt install vrui-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jason Gerard DeRose <jason@system76.com>
  - Section: doc
  - Priority: optional

  </details>


### <a id="packages-W"></a>W

- **wayland-protocols**
  - Latest version: 1.41-1pop1~1755896991~22.04~713722e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: wayland compositor protocols
  - Homepage: https://wayland.freedesktop.org/
  - Install: `sudo apt-get install wayland-protocols`
  - Install (apt): `sudo apt install wayland-protocols`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: libdevel
  - Priority: optional

  </details>

- **wireplumber**
  - Latest version: 0.4.17~1701792620~22.04~e8b4d60
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: modular session / policy manager for PipeWire
  - Homepage: https://gitlab.freedesktop.org/pipewire/wireplumber
  - Install: `sudo apt-get install wireplumber`
  - Install (apt): `sudo apt install wireplumber`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@alioth-lists.debian.net>
  - Section: video
  - Priority: optional
  - depends: default-dbus-session-bus | dbus-session-bus, init-system-helpers (>= 1.52), libc6 (>= 2.34), libglib2.0-0 (>= 2.62), libpipewire-0.3-0 (>= 0.3.52), libwireplumber-0.4-0 (= 0.4.17~1701792620~22.04~e8b4d60), pipewire (>= 0.3.52)
  - recommends: pipewire-pulse
  - suggests: libspa-0.2-bluetooth, libspa-0.2-libcamera, wireplumber-doc
  - conflicts: pipewire-media-session
  - replaces: pipewire-media-session

  </details>

- **wireplumber-doc**
  - Latest version: 0.4.17~1701792620~22.04~e8b4d60
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: modular session / policy manager for PipeWire - documentation
  - Homepage: https://gitlab.freedesktop.org/pipewire/wireplumber
  - Install: `sudo apt-get install wireplumber-doc`
  - Install (apt): `sudo apt install wireplumber-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Utopia Maintenance Team <pkg-utopia-maintainers@alioth-lists.debian.net>
  - Section: doc
  - Priority: optional

  </details>


### <a id="packages-X"></a>X

- **x11proto-core-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-core-dev`
  - Install (apt): `sudo apt install x11proto-core-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: X11 extension protocols and auxiliary headers
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-dev`
  - Install (apt): `sudo apt install x11proto-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: xorg-sgml-doctools (>= 1:1.5)
  - breaks: x11proto-core-dev (<< 2018.3), x11proto-dri2-dev (<< 2018.3), x11proto-fonts-dev (<< 2018.3), x11proto-gl-dev (<< 2018.3), x11proto-input-dev (<< 2018.3), x11proto-kb-dev (<< 2018.3), x11proto-present-dev (<< 2018.3), x11proto-randr-dev (<< 2018.3), x11proto-record-dev (<< 2018.3), x11proto-render-dev (<< 2:2018.3), x11proto-scrnsaver-dev (<< 2018.3), x11proto-video-dev (<< 2018.3), x11proto-xext-dev (<< 2018.3), x11proto-xf86dga-dev (<< 2018.3), x11proto-xf86dri-dev (<< 2018.3), x11proto-xf86vidmode-dev (<< 2018.3), x11proto-xinerama-dev (<< 2018.3)
  - replaces: x11proto-core-dev (<< 2018.3), x11proto-dri2-dev (<< 2018.3), x11proto-fonts-dev (<< 2018.3), x11proto-gl-dev (<< 2018.3), x11proto-input-dev (<< 2018.3), x11proto-kb-dev (<< 2018.3), x11proto-present-dev (<< 2018.3), x11proto-randr-dev (<< 2018.3), x11proto-record-dev (<< 2018.3), x11proto-render-dev (<< 2:2018.3), x11proto-scrnsaver-dev (<< 2018.3), x11proto-video-dev (<< 2018.3), x11proto-xext-dev (<< 2018.3), x11proto-xf86dga-dev (<< 2018.3), x11proto-xf86dri-dev (<< 2018.3), x11proto-xf86vidmode-dev (<< 2018.3), x11proto-xinerama-dev (<< 2018.3)
  - provides: x11proto-core-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-dri2-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-fonts-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-gl-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-input-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-kb-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-present-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-randr-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-record-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-render-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-scrnsaver-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-video-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-xext-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-xf86dga-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-xf86dri-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-xf86vidmode-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e), x11proto-xinerama-dev (= 2024.1-1pop1~1722455025~22.04~c67bf4e)

  </details>

- **x11proto-dri2-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-dri2-dev`
  - Install (apt): `sudo apt install x11proto-dri2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-fonts-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-fonts-dev`
  - Install (apt): `sudo apt install x11proto-fonts-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-gl-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-gl-dev`
  - Install (apt): `sudo apt install x11proto-gl-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-input-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-input-dev`
  - Install (apt): `sudo apt install x11proto-input-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-kb-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-kb-dev`
  - Install (apt): `sudo apt install x11proto-kb-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-present-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-present-dev`
  - Install (apt): `sudo apt install x11proto-present-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-randr-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-randr-dev`
  - Install (apt): `sudo apt install x11proto-randr-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-record-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-record-dev`
  - Install (apt): `sudo apt install x11proto-record-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-render-dev**
  - Latest version: 2:2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-render-dev`
  - Install (apt): `sudo apt install x11proto-render-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-scrnsaver-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-scrnsaver-dev`
  - Install (apt): `sudo apt install x11proto-scrnsaver-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-video-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-video-dev`
  - Install (apt): `sudo apt install x11proto-video-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-xext-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-xext-dev`
  - Install (apt): `sudo apt install x11proto-xext-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-xf86dri-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-xf86dri-dev`
  - Install (apt): `sudo apt install x11proto-xf86dri-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-xf86vidmode-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-xf86vidmode-dev`
  - Install (apt): `sudo apt install x11proto-xf86vidmode-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **x11proto-xinerama-dev**
  - Latest version: 2024.1-1pop1~1722455025~22.04~c67bf4e
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: transitional dummy package
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install x11proto-xinerama-dev`
  - Install (apt): `sudo apt install x11proto-xinerama-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: x11proto-dev

  </details>

- **xdg-desktop-portal-cosmic**
  - Latest version: 0.1.0pop1~1741530540~22.04~988f478
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Cosmic backend for xdg-desktop-portal
  - Homepage: https://github.com/pop-os/xdg-desktop-portal-cosmic
  - Install: `sudo apt-get install xdg-desktop-portal-cosmic`
  - Install (apt): `sudo apt install xdg-desktop-portal-cosmic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: System76 <info@system76.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.35), libgbm1 (>= 21.3.0~rc1), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.35.8), libpipewire-0.3-0 (>= 0.3.1), libxkbcommon0 (>= 0.5.0)

  </details>

- **xserver-xorg-video-nvidia-430**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-430`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-430`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-440**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-440`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-440`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-450**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-450`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-450`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-455**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-455`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-455`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-460**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-460`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-460`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-465**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-470
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-465`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-465`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-470

  </details>

- **xserver-xorg-video-nvidia-470**
  - Latest version: 470.256.02-1pop0~1761861198~22.04~26c7544
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA binary Xorg driver
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-470`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-470`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/x11
  - Priority: optional
  - depends: libc6 (>= 2.7), libnvidia-cfg1-470 (= 470.256.02-1pop0~1761861198~22.04~26c7544), xorg-video-abi-25 | xorg-video-abi-24 | xorg-video-abi-23 | xorg-video-abi-20 | xorg-video-abi-19 | xorg-video-abi-18 | xorg-video-abi-15 | xorg-video-abi-14 | xorg-video-abi-13 | xorg-video-abi-12 | xorg-video-abi-11 | xorg-video-abi-10 | xorg-video-abi-8 | xorg-video-abi-6.0, xserver-xorg-core (>= 2:1.19.6-1ubuntu2~)
  - conflicts: nvidia-driver-binary, xorg-driver-binary
  - replaces: nvidia-driver-binary, xorg-driver-binary
  - provides: nvidia-driver-binary, xorg-driver-binary, xorg-driver-video

  </details>

- **xserver-xorg-video-nvidia-495**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-495`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-495`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-515**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-515`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-515`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-525**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-525`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-525`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-535**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-535`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-535`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-545**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-545`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-545`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-550**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-550`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-550`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-555**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-555`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-555`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-560**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-560`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-560`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-565**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-565`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-565`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-570**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-570`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-570`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-575**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Transitional package for xserver-xorg-video-nvidia-580
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-575`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-575`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/libs
  - Priority: optional
  - depends: xserver-xorg-video-nvidia-580

  </details>

- **xserver-xorg-video-nvidia-580**
  - Latest version: 580.119.02-1pop1~1767727139~22.04~87c43f0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA binary Xorg driver
  - Homepage: http://www.nvidia.com
  - Install: `sudo apt-get install xserver-xorg-video-nvidia-580`
  - Install (apt): `sudo apt install xserver-xorg-video-nvidia-580`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Core Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: non-free/x11
  - Priority: optional
  - depends: libc6 (>= 2.9), libnvidia-cfg1-580 (= 580.119.02-1pop1~1767727139~22.04~87c43f0), xorg-video-abi-25 | xorg-video-abi-24 | xorg-video-abi-23 | xorg-video-abi-20 | xorg-video-abi-19 | xorg-video-abi-18 | xorg-video-abi-15 | xorg-video-abi-14 | xorg-video-abi-13 | xorg-video-abi-12 | xorg-video-abi-11 | xorg-video-abi-10 | xorg-video-abi-8 | xorg-video-abi-6.0, xserver-xorg-core (>= 2:1.19.6-1ubuntu2~)
  - conflicts: nvidia-driver-binary, xorg-driver-binary
  - replaces: nvidia-driver-binary, xorg-driver-binary
  - provides: nvidia-driver-binary, xorg-driver-binary, xorg-driver-video

  </details>

- **xwayland**
  - Latest version: 2:24.1.2-1pop1~1727385267~22.04~00c1b98
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: X server for running X clients under Wayland
  - Homepage: https://www.x.org/
  - Install: `sudo apt-get install xwayland`
  - Install (apt): `sudo apt install xwayland`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian X Strike Force <debian-x@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.35), libdecor-0-0 (>= 0.1.0), libdrm2 (>= 2.4.116), libepoxy0 (>= 1.5.2), libgbm1 (>= 21.3.0~rc1), libgcrypt20 (>= 1.9.0), libgl1, libpixman-1-0 (>= 0.30.0), libtirpc3 (>= 1.0.2), libwayland-client0 (>= 1.20.0), libxau6 (>= 1:1.0.9), libxcvt0 (>= 0.1.0), libxdmcp6, libxfont2 (>= 1:2.0.1), libxshmfence1, xserver-common

  </details>

- **xz-utils**
  - Latest version: 5.4.1-0.2pop1~1682459374~22.04~6509762
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: XZ-format compression utilities
  - Homepage: https://tukaani.org/xz/
  - Install: `sudo apt-get install xz-utils`
  - Install (apt): `sudo apt install xz-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jonathan Nieder <jrnieder@gmail.com>
  - Section: utils
  - Priority: standard
  - depends: libc6 (>= 2.34), liblzma5 (>= 5.4.0)
  - conflicts: lzma (<< 9.22-1), xz-lzma
  - breaks: lzip (<< 1.8~rc2), manpages-de (<< 4.17.0-2~bpo11+1), manpages-fr (<< 4.17.0-2~bpo11+1)
  - replaces: lzip (<< 1.8~rc2), manpages-de (<< 4.17.0-2~bpo11+1), manpages-fr (<< 4.17.0-2~bpo11+1), xz-lzma
  - provides: lzma

  </details>

- **xzdec**
  - Latest version: 5.4.1-0.2pop1~1682459374~22.04~6509762
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: XZ-format compression utilities - tiny decompressors
  - Homepage: https://tukaani.org/xz/
  - Install: `sudo apt-get install xzdec`
  - Install (apt): `sudo apt install xzdec`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jonathan Nieder <jrnieder@gmail.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34)
  - suggests: xz-utils
  - breaks: xz-lzma (<< 4.999.9beta+20091004-1)
  - replaces: xz-lzma (<< 4.999.9beta+20091004-1)

  </details>


### <a id="packages-Z"></a>Z

- **zfs-dkms**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: OpenZFS filesystem kernel modules for Linux
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfs-dkms`
  - Install (apt): `sudo apt install zfs-dkms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, dkms (>> 2.1.1.2-5), file, libc6-dev | libc-dev, libpython3-stdlib, lsb-release
  - recommends: linux-libc-dev (<< 6.18~), linux-libc-dev (>= 4.18~), zfs-zed, zfsutils-linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)
  - suggests: debhelper
  - breaks: spl-dkms (<< 0.8.0~rc1), zfs-fuse (<< 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)
  - replaces: spl-dkms
  - provides: zfs-modules

  </details>

- **zfs-dracut**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: OpenZFS root filesystem capabilities for Linux - dracut
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfs-dracut`
  - Install (apt): `sudo apt install zfs-dracut`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: dracut, zfsutils-linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)

  </details>

- **zfs-initramfs**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: OpenZFS root filesystem capabilities for Linux - initramfs
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfs-initramfs`
  - Install (apt): `sudo apt install zfs-initramfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/kernel
  - Priority: optional
  - depends: busybox-initramfs | busybox-static | busybox, initramfs-tools, zfsutils-linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)
  - breaks: zfsutils-linux (<= 0.7.11-2)
  - replaces: zfsutils-linux (<= 0.7.11-2)

  </details>

- **zfs-test**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS test infrastructure and support scripts
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfs-test`
  - Install (apt): `sudo apt install zfs-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: acl, attr, bc, fio, ksh, libaio1 (>= 0.3.93), libc6 (>= 2.34), libnvpair3linux (>= 0.8.2), libudev1 (>= 183), libzfs6linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzpool6linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), lsscsi, mdadm, parted, python3, python3-pyzfs, sudo, sysstat, zfsutils-linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), zlib1g (>= 1:1.2.3.3)
  - recommends: curl, nfs-kernel-server, rsync, tzdata-legacy
  - conflicts: zutils
  - breaks: zfsutils-linux (<= 0.7.9-2)
  - replaces: zfsutils-linux (<= 0.7.9-2)

  </details>

- **zfs-zed**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: OpenZFS Event Daemon
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfs-zed`
  - Install (apt): `sudo apt install zfs-zed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libnvpair3linux (>= 0.8.2), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (>= 0.8.2), libzfs6linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), zfsutils-linux (>= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88)
  - preDepends: init-system-helpers (>= 1.54~)

  </details>

- **zfsutils-linux**
  - Latest version: 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: command-line tools to manage OpenZFS filesystems
  - Homepage: https://zfsonlinux.org/
  - Install: `sudo apt-get install zfsutils-linux`
  - Install (apt): `sudo apt install zfsutils-linux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: contrib/admin
  - Priority: optional
  - depends: libblkid1 (>= 2.16), libc6 (>= 2.34), libnvpair3linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libssl3 (>= 3.0.0~~alpha1), libudev1 (>= 183), libuuid1 (>= 2.16), libuutil3linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzfs6linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), libzpool6linux (= 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), python3
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: zfs-zed
  - suggests: nfs-kernel-server, samba-common-bin (>= 3.0.23), zfs-initramfs | zfs-dracut
  - conflicts: nordugrid-arc-client, zfs, zfs-fuse
  - breaks: spl (<< 0.7.9-2), spl-dkms (<< 0.8.0~rc1), zfs-dkms (<< 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88), zfs-dkms (>> 2.3.5-1ubuntu1pop1~1764881955~22.04~3afdf88...)
  - replaces: spl (<< 0.7.9-2), spl-dkms
  - provides: zfsutils

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: popos, ubuntu-derivative, apt
- Key tags: popos, apt
