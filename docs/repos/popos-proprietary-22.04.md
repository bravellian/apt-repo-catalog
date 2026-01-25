# Pop!_OS proprietary - 22.04 (popos-22.04)

## Repository
- Repository ID: `popos-proprietary-22.04`
- OS: `popos-22.04`
- Source: `http://apt.pop-os.org/proprietary jammy main`

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
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary jammy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22.04.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary jammy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22.04.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (18)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-G">G</a> <a href="#packages-N">N</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: A hackable text editor for the 21st Century.
  - Install: `sudo apt-get install atom`
  - Install (apt): `sudo apt install atom`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub <atom@github.com>
  - Section: devel
  - Priority: optional
  - depends: git, libcurl3 | libcurl4, libgcrypt20, libglib2.0-bin | kde-cli-tools | kde-runtime, libgtk-3-0 (>= 3.9.10), libnotify4, libnss3 (>= 2:3.22), libx11-xcb1, libxkbfile1, libxss1, libxtst6, xdg-utils
  - recommends: gnome-keyring, libasound2 (>= 1.0.16), libsecret-1-0, policykit-1
  - suggests: lsb-release

  </details>


### <a id="packages-C"></a>C

- **code**
  - Latest version: 1.100.0-1746623151
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Code editing. Redefined.
  - Homepage: https://code.visualstudio.com/
  - Install: `sudo apt-get install code`
  - Install (apt): `sudo apt install code`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation <vscode-linux@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: ca-certificates, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.14), libc6 (>= 2.16), libc6 (>= 2.17), libc6 (>= 2.2.5), libc6 (>= 2.25), libc6 (>= 2.28), libcairo2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.9.10), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.30), libnss3 (>= 3.26), libpango-1.0-0 (>= 1.14.0), libudev1 (>= 183), libx11-6, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxkbfile1 (>= 1:1.1.0), libxrandr2, xdg-utils (>= 1.0.2)
  - recommends: libvulkan1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>


### <a id="packages-D"></a>D

- **discord**
  - Latest version: 0.0.121
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Chat for Communities and Friends
  - Homepage: https://discord.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Discord Maintainer Team <noreply@discord.com>
  - Section: net
  - Priority: optional
  - depends: libasound2, libatomic1, libc6, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6
  - recommends: libappindicator1 | libayatana-appindicator1

  </details>


### <a id="packages-G"></a>G

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Simple collaboration from your desktop
  - Homepage: https://github.com/shiftkey/desktop
  - Install: `sudo apt-get install github-desktop`
  - Install (apt): `sudo apt install github-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brendan Forster <github@brendanforster.com>
  - Section: GNOME;GTK;Development
  - Priority: extra
  - depends: gnome-keyring, kde-cli-tools | kde-runtime | trash-cli | libglib2.0-bin | gvfs-bin, libatspi2.0-0, libcurl3 | libcurl4, libdrm2, libgbm1, libgtk-3-0, libnotify4, libnss3, libsecret-1-0, libxcb-dri3-0, libxtst6, xdg-utils
  - recommends: pulseaudio | libasound2
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0, lsb-release

  </details>

- **google-chrome-stable**
  - Latest version: 144.0.7559.96-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-stable`
  - Install (apt): `sudo apt install google-chrome-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>


### <a id="packages-N"></a>N

- **natron**
  - Latest version: 2.3.14~0pop4
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Open source compositing software for VFX and motion graphics.
  - Install: `sudo apt-get install natron`
  - Install (apt): `sudo apt install natron`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: video
  - Priority: optional

  </details>


### <a id="packages-P"></a>P

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Plex organizes all of your personal media so you can easily access and enjoy it.
  - Homepage: https://plex.tv
  - Install: `sudo apt-get install plexmediaserver`
  - Install (apt): `sudo apt install plexmediaserver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Plex Inc <support@plex.tv>
  - Section: video
  - Priority: extra

  </details>


### <a id="packages-S"></a>S

- **slack-desktop**
  - Latest version: 4.33.90
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Slack Desktop
  - Install: `sudo apt-get install slack-desktop`
  - Install (apt): `sudo apt install slack-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Slack Technologies <feedback@slack.com>
  - Section: misc
  - Priority: optional
  - depends: apt-transport-https, kde-cli-tools | kde-runtime | trash-cli | libglib2.0-bin | gvfs-bin, libappindicator3-1, libatspi2.0-0, libgtk-3-0, libnotify4, libnss3, libuuid1, libxss1, libxtst6, xdg-utils
  - recommends: pulseaudio | libasound2
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0, lsb-release

  </details>

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA CUDA Compiler / Libraries / Toolkit Metapackage
  - Install: `sudo apt-get install system76-cuda`
  - Install (apt): `sudo apt install system76-cuda`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, freeglut3-dev, g++, libx11-dev, libxmu-dev

  </details>

- **system76-cuda-11.1**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA CUDA 11.1 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-11.1`
  - Install (apt): `sudo apt install system76-cuda-11.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: g++-9, system76-cuda

  </details>

- **system76-cuda-11.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA CUDA 11.2 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-11.2`
  - Install (apt): `sudo apt install system76-cuda-11.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: g++-9, system76-cuda

  </details>

- **system76-cuda-latest**
  - Latest version: 11.2~20.10
  - Architectures: all
  - Suite: jammy
  - Components: main
  - Description: Metapackage for the latest version of the CUDA Toolkit
  - Homepage: https://developer.nvidia.com/cuda-downloads
  - Install: `sudo apt-get install system76-cuda-latest`
  - Install (apt): `sudo apt install system76-cuda-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: system76-cuda-11.2

  </details>

- **system76-cudnn-11.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 11.1
  - Install: `sudo apt-get install system76-cudnn-11.1`
  - Install (apt): `sudo apt install system76-cudnn-11.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-11.1

  </details>

- **system76-cudnn-11.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 11.2
  - Install: `sudo apt-get install system76-cudnn-11.2`
  - Install (apt): `sudo apt install system76-cudnn-11.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-11.2

  </details>

- **system76-nccl-11.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-11.1`
  - Install (apt): `sudo apt install system76-nccl-11.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-9, system76-cuda-11.1

  </details>

- **system76-nccl-11.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-11.2`
  - Install (apt): `sudo apt install system76-nccl-11.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-9, system76-cuda-11.2

  </details>


### <a id="packages-V"></a>V

- **virtualbox**
  - Latest version: 7.2.2-170484~Ubuntu~jammy
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox`
  - Install (apt): `sudo apt install virtualbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0 (>= 2.33.14), libgtk-3-0 (>= 3.21.5), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), libssl3 (>= 3.0.0~~alpha1), libstdc++6 (>= 12), libvpx7 (>= 1.10.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.7.5), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox-ose

  </details>

- **vivaldi-stable**
  - Latest version: 5.6.2867.58-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Experience the web in a whole new way with Vivaldi.
  - Homepage: https://vivaldi.com
  - Install: `sudo apt-get install vivaldi-stable`
  - Install (apt): `sudo apt install vivaldi-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Vivaldi Package Composer <packager@vivaldi.com>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.60), libexpat1 (>= 2.0.1), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.26), libpango-1.0-0 (>= 1.14.0), libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - recommends: libu2f-udev, libvulkan1
  - provides: www-browser

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: popos, ubuntu-derivative, apt
- Key tags: popos, apt
