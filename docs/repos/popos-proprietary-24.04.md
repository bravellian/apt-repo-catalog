# Pop!_OS proprietary - 24.04 (popos-24.04)

## Repository
- Repository ID: `popos-proprietary-24.04`
- OS: `popos-24.04`
- Source: `http://apt.pop-os.org/proprietary noble main`

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
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary noble main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-24.04.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary noble main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-24.04.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (10)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-G">G</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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


### <a id="packages-P"></a>P

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: noble
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
  - Suite: noble
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


### <a id="packages-V"></a>V

- **virtualbox**
  - Latest version: 7.2.2-170484~Ubuntu~noble
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox`
  - Install (apt): `sudo apt install virtualbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4t64 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0t64 (>= 2.34.0), libgtk-3-0t64 (>= 3.21.5), libgtk2.0-0t64 (>= 2.24.0), liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.8.7), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox-ose

  </details>

- **virtualbox-7.2**
  - Latest version: 7.2.2-170484~Ubuntu~noble
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Oracle VirtualBox
  - Install: `sudo apt-get install virtualbox-7.2`
  - Install (apt): `sudo apt install virtualbox-7.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Oracle Corporation <info@virtualbox.org>
  - Section: contrib/misc
  - Priority: optional
  - depends: adduser, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libcurl4t64 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.9.1), libgcc-s1 (>= 3.4), libgdk-pixbuf-2.0-0 (>= 2.31.1), libgl1, libglib2.0-0t64 (>= 2.34.0), libgtk-3-0t64 (>= 3.21.5), libgtk2.0-0t64 (>= 2.24.0), liblzf1 (>= 1.5), liblzma5 (>= 5.1.1alpha+20120614), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpangoft2-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.2), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libtpms0 (>= 0.8.0~dev1), libvpx9 (>= 1.12.0), libvulkan1, libwayland-client0 (>= 1.11.0), libwayland-cursor0 (>= 1.8.1), libx11-6, libx11-xcb1 (>= 2:1.8.7), libxcb-cursor0 (>= 0.0.99), libxcb-icccm4 (>= 0.4.1), libxcb-image0 (>= 0.2.1), libxcb-keysyms1 (>= 0.4.0), libxcb-randr0 (>= 1.12), libxcb-render-util0, libxcb-render0, libxcb-shape0, libxcb-shm0 (>= 1.10), libxcb-sync1, libxcb-xfixes0, libxcb-xkb1, libxcb1 (>= 1.8), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxml2 (>= 2.7.4), libxt6t64, psmisc, zlib1g (>= 1:1.2.3.4)
  - preDepends: debconf (>= 1.1) | debconf-2.0
  - recommends: binutils, gcc, kmod | kldutils | module-init-tools, libasound2, libpulse0, libsdl-ttf2.0-0, linux-headers-generic | linux-headers-generic-pae | linux-headers-686-pae | linux-headers-amd64 | linux-headers-2.6-686 | linux-headers-2.6-amd64 | linux-headers, linux-image, make | build-essential | dpkg-dev, pdf-viewer
  - conflicts: virtualbox, virtualbox-dkms, virtualbox-guest-additions-iso, virtualbox-ose, virtualbox-qt
  - replaces: virtualbox
  - provides: virtualbox

  </details>

- **vivaldi-stable**
  - Latest version: 5.6.2867.58-1
  - Architectures: amd64
  - Suite: noble
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
