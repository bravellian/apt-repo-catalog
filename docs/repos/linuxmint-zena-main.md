# Linux Mint Zena - main (linuxmint-zena)

## Repository
- Repository ID: `linuxmint-zena-main`
- OS: `linuxmint-zena`
- Source: `http://packages.linuxmint.com zena main upstream import backport`

## Upstream documentation
- Documentation URL: https://linuxmint.com/documentation.php
- Key documentation URL: https://linuxmint.com/documentation.php

## Key reference
- Key ID: `linuxmint-archive-keyring`
- Expected fingerprints:
  - E1DD270288B4E6030699E45FA1715D88E1DF1F24
  - 630239CC130E1A7FD81A27B140976EAF437D05B5
  - 790BC7277767219C42C86F933B4FE6ACC0B21F32
  - 302F0738F465C1535761F965A6616109451BBBF2
- Key source URL: (not set)

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/linuxmint-archive-keyring.asc | gpg --dearmor | sudo tee /usr/share/keyrings/linuxmint-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com zena main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-zena-main.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/linuxmint-archive-keyring.asc -o /tmp/linuxmint-archive-keyring.asc
gpg --dearmor /tmp/linuxmint-archive-keyring.asc
sudo install -m 0644 /tmp/linuxmint-archive-keyring.gpg /usr/share/keyrings/linuxmint-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com zena main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-zena-main.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (560)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-E">E</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-H">H</a> <a href="#packages-I">I</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-R">R</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-U">U</a> <a href="#packages-W">W</a> <a href="#packages-X">X</a> <a href="#packages-Z">Z</a>
</div>


### <a id="packages-A"></a>A

- **aptkit**
  - Latest version: 1.1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: transaction based package management service
  - Homepage: https://github.com/linuxmint/aptkit
  - Install: `sudo apt-get install aptkit`
  - Install (apt): `sudo apt install aptkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-packagekitglib-1.0, gir1.2-vte-2.91, gir1.2-xapp-1.0, iso-codes, polkitd, python3-apt, python3-dbus, python3-defer (>= 1.0.6), python3-gi, python3-pkg-resources

  </details>


### <a id="packages-B"></a>B

- **base-files**
  - Latest version: 13ubuntu10mint22.3.0
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Debian base system miscellaneous files
  - Install: `sudo apt-get install base-files`
  - Install (apt): `sudo apt install base-files`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: required
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.4.10-10ubuntu3)
  - preDepends: awk
  - breaks: debian-security-support (<< 2019.04.25), initscripts (<< 2.88dsf-13.3), sendfile (<< 2.1b.20080616-5.2~), ubuntu-server (<< 1.453)
  - replaces: base, dpkg (<= 1.15.0), miscutils
  - provides: base, usr-is-merged

  </details>

- **blueman**
  - Latest version: 2.4.4+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Graphical bluetooth manager
  - Homepage: https://github.com/blueman-project/blueman
  - Install: `sudo apt-get install blueman`
  - Install (apt): `sudo apt install blueman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Christopher Schramm <debian@cschramm.eu>
  - Section: x11
  - Priority: optional
  - depends: bluez (>= 5.48), bluez-obexd, dbus (>= 1.9.18), dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, gir1.2-ayatanaappindicator3-0.1, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0 (>= 3.22), gir1.2-nm-1.0, gir1.2-pango-1.0, gnome-icon-theme | mate-icon-theme | elementary-xfce-icon-theme | adwaita-icon-theme | papirus-icon-theme, libbluetooth3 (>= 4.91), libc6 (>= 2.4), libpulse-mainloop-glib0, librsvg2-common, notification-daemon, policykit-1, python3 (<< 3.13), python3 (>= 3.12~), python3-cairo, python3-gi (>= 3.27.2), python3-gi-cairo, python3:any
  - recommends: pulseaudio-module-bluetooth

  </details>

- **boot-info**
  - Latest version: 4ppa2075
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Diagnose the boot of the computer
  - Homepage: https://launchpad.net/boot-info
  - Install: `sudo apt-get install boot-info`
  - Install (apt): `sudo apt install boot-info`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@protonmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav (>= 4ppa2067)

  </details>

- **boot-repair**
  - Latest version: 4ppa2075
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Graphical tool to repair boot problems
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-repair`
  - Install (apt): `sudo apt install boot-repair`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@protonmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav (>= 4ppa2067)
  - recommends: ntfsprogs | ntfs-3g (>= 1:2011.4.12AR.4)

  </details>

- **boot-sav**
  - Latest version: 4ppa2075
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Librairies for Boot-Info, OS-uninstaller and Boot-repair
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-sav`
  - Install (apt): `sudo apt install boot-sav`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@protonmail.com>
  - Section: admin
  - Priority: optional
  - depends: efibootmgr, gawk | mawk (>= 1.3.4), gdisk, gettext-base, glade2script (>= 3.2.4~ppa23), lsb-release, mokutil, os-prober, parted, xdg-utils, xz-utils | xz-lzma | lzma, zenity
  - recommends: boot-sav-extra, lshw, pastebinit, syslinux-common | syslinux | mbr, zip
  - suggests: boot-info, boot-repair, cryptsetup, dmraid, lvm2, mdadm, os-uninstaller, zfsutils-linux

  </details>

- **boot-sav-extra**
  - Latest version: 4ppa2075
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Extra librairies for OS-uninstaller and Boot-repair
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-sav-extra`
  - Install (apt): `sudo apt install boot-sav-extra`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@protonmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav

  </details>

- **bulky**
  - Latest version: 4.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Bulk Renamer
  - Install: `sudo apt-get install bulky`
  - Install (apt): `sudo apt install bulky`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, python3, python3-gi, python3-setproctitle, python3-unidecode

  </details>


### <a id="packages-C"></a>C

- **caja**
  - Latest version: 1.26.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: file manager for the MATE desktop
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install caja`
  - Install (apt): `sudo apt install caja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: caja-common (= 1.26.3+mint1), desktop-file-utils, gvfs, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libcaja-extension1 (= 1.26.3+mint1), libexempi8 (>= 2.5.0), libexif12 (>= 0.6.21-1~), libgail-3-0t64 (>= 3.0.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libglib2.0-bin, libglib2.0-data, libgtk-3-0t64 (>= 3.21.5), libice6 (>= 1:1.0.0), libmate-desktop-2-17t64 (>= 1.24), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.44.6), libpangocairo-1.0-0 (>= 1.14.0), libselinux1 (>= 3.1~), libsm6, libx11-6, libxml2 (>= 2.7.4), mate-desktop, shared-mime-info
  - recommends: gvfs-backends, gvfs-fuse
  - suggests: engrampa, gstreamer1.0-tools, meld
  - breaks: caja-common (<< 1.20.0-2~), libcaja-extension (<< 1.10.0), libcaja-extension1 (<< 1.10.0), mate-session-manager (<< 1.8.1-7)
  - replaces: caja-common (<< 1.20.0-2~)

  </details>

- **caja-common**
  - Latest version: 1.26.3+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: file manager for the MATE desktop (common files)
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install caja-common`
  - Install (apt): `sudo apt install caja-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: caja (<< 1.9.0)
  - replaces: caja (<< 1.9.0)

  </details>

- **captain**
  - Latest version: 1.1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Collection of APT tools
  - Install: `sudo apt-get install captain`
  - Install (apt): `sudo apt install captain`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, dconf-gsettings-backend | gsettings-backend, file, gir1.2-gtk-3.0 (>= 3.22.0), python3-apt, python3-debian, python3-gi, python3-setproctitle, python3:any

  </details>

- **celluloid**
  - Latest version: 0.21+mint2+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: simple GTK+ frontend for mpv
  - Homepage: https://github.com/gnome-mpv/gnome-mpv
  - Install: `sudo apt-get install celluloid`
  - Install (apt): `sudo apt install celluloid`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xu Zhen <xuzhen@fastmail.com>
  - Section: video
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, ffmpegthumbnailer, libc6 (>= 2.34), libcairo2 (>= 1.2.4), libepoxy0 (>= 1.0), libglib2.0-0t64 (>= 2.44), libgtk-3-0t64 (>= 3.22.23), libmpv2 (>= 0.29.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0)
  - recommends: youtube-dl
  - breaks: gnome-mpv (<= 0.16)
  - replaces: gnome-mpv (<= 0.16)

  </details>

- **chromium**
  - Latest version: 144.0.7559.96~linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: web browser
  - Install: `sudo apt-get install chromium`
  - Install (apt): `sudo apt install chromium`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional
  - depends: libgbm1, libgl1, libglx-mesa0, libgtk-3-0, libnss3, libsecret-1-0, libxshmfence1, libxss1, perl, python3 (>= 3.3), shared-mime-info
  - breaks: chromium-browser-l10n, chromium-chromedriver, chromium-codecs-ffmpeg, chromium-codecs-ffmpeg-extra, chromium-common, chromium-driver, chromium-l10n, chromium-sandbox, chromium-shell
  - replaces: chromium-browser-l10n, chromium-chromedriver, chromium-codecs-ffmpeg, chromium-codecs-ffmpeg-extra, chromium-common, chromium-driver, chromium-l10n, chromium-sandbox, chromium-shell
  - provides: chromium-codecs-ffmpeg, chromium-codecs-ffmpeg-extra

  </details>

- **chromium-dbg**
  - Latest version: 144.0.7559.96~linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: web browser
  - Install: `sudo apt-get install chromium-dbg`
  - Install (apt): `sudo apt install chromium-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: chromium (= 144.0.7559.96~linuxmint1+zena)
  - breaks: chromium-browser-dbgsym, chromium-chromedriver-dbgsym, chromium-dbgsym
  - replaces: chromium-browser-dbgsym, chromium-chromedriver-dbgsym, chromium-dbgsym

  </details>

- **cinnamon**
  - Latest version: 6.6.5+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Modern Linux desktop
  - Homepage: https://projects.linuxmint.com/cinnamon/
  - Install: `sudo apt-get install cinnamon`
  - Install (apt): `sudo apt install cinnamon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: adwaita-icon-theme, cinnamon-common, cinnamon-control-center, cinnamon-desktop-data (>= 5.3), cinnamon-l10n, cinnamon-screensaver, cinnamon-session, cinnamon-settings-daemon (>= 5.3), cjs (>= 4.8), cups-pk-helper, dconf-gsettings-backend | gsettings-backend, gir1.2-accountsservice-1.0, gir1.2-cinnamondesktop-3.0 (>= 5.3), gir1.2-cmenu-3.0 (>= 4.8), gir1.2-cvc-1.0, gir1.2-ecal-2.0, gir1.2-edataserver-1.2, gir1.2-gcr-3, gir1.2-gdkpixbuf-2.0, gir1.2-gkbd-3.0, gir1.2-graphene-1.0, gir1.2-gsound-1.0, gir1.2-gtkclutter-1.0, gir1.2-ibus-1.0, gir1.2-ical-3.0, gir1.2-keybinder-3.0, gir1.2-meta-muffin-0.0 (>= 5.3), gir1.2-nm-1.0 | gir1.2-networkmanager-1.0, gir1.2-nma-1.0, gir1.2-notify-0.7, gir1.2-polkit-1.0, gir1.2-soup-3.0, gir1.2-upowerglib-1.0, gir1.2-xapp-1.0 (>= 1.9.0), gkbd-capplet, gsettings-desktop-schemas (>= 0.1.7), inxi, iso-flag-png, libatk-bridge2.0-0t64 (>= 2.5.3), libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.14.0), libcanberra-pulse, libcinnamon-desktop4 (>= 6.0.0), libcinnamon-menu-3-0 (>= 4.8.3), libcjs0 (>= 4.8), libgcr-base-3-1 (>= 3.8.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 1.35.9), libgles2, libglib2.0-0t64 (>= 2.79.0), libglib2.0-bin, libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0t64 (>= 3.9.12), libmuffin0 (>= 5.4.1), libnm0 (>= 1.6), libpango-1.0-0 (>= 1.37.5), libpolkit-agent-1-0 (>= 0.100), libpolkit-gobject-1-0 (>= 0.94), libsecret-1-0 (>= 0.7), libx11-6, libxapp1 (>= 2.6.0), libxfixes3, libxml2 (>= 2.7.4), mate-panel | gnome-panel | tint2, mesa-utils, metacity, nemo, network-manager-gnome, policykit-1-gnome | mate-polkit, python3, python3-babel, python3-distro, python3-gi, python3-gi-cairo, python3-pam | python3-pampy, python3-pexpect, python3-pil, python3-pyinotify, python3-requests, python3-setproctitle, python3-tinycss2, python3-tz, streamer, wget, xapp-symbolic-icons (>= 1.0.7), xapps-common (>= 2.5.0), xdg-desktop-portal-gtk, xdg-desktop-portal-xapp
  - recommends: gnome-online-accounts-gtk, gnome-terminal | x-terminal-emulator, gnome-themes-extra | gnome-themes-standard, ibus, touchegg
  - suggests: cinnamon-doc
  - provides: notification-daemon, polkit-1-auth-agent, x-window-manager

  </details>

- **cinnamon-common**
  - Latest version: 6.6.5+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Cinnamon desktop (Common data files)
  - Homepage: https://projects.linuxmint.com/cinnamon/
  - Install: `sudo apt-get install cinnamon-common`
  - Install (apt): `sudo apt install cinnamon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gettext, gir1.2-cinnamondesktop-3.0 (>= 5.3), gir1.2-meta-muffin-0.0 (>= 5.3), gir1.2-timezonemap-1.0, python3-xapp, python3:any, xdg-utils

  </details>

- **cinnamon-control-center**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop
  - Homepage: https://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center`
  - Install (apt): `sudo apt install cinnamon-control-center`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: accountsservice, cinnamon-control-center-data (= 6.6.0+zena), cinnamon-desktop-data (>= 4.8), desktop-file-utils, gettext, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.10.0), libcinnamon-control-center1 (= 6.6.0+zena), libcinnamon-menu-3-0 (>= 2.2.0), libcolord2 (>= 1.4.3), libgdk-pixbuf-2.0-0 (>= 2.23.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libgudev-1.0-0 (>= 232), libmm-glib0 (>= 0.7.991), libnm0 (>= 1.2.0), libnma0 (>= 1.2.0), libnotify4 (>= 0.7.3), libpango-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.103), libupower-glib3 (>= 0.99.8), libwacom9 (>= 2.0.0), libx11-6, libxi6 (>= 2:1.2.99.4), xdg-utils
  - recommends: cinnamon-l10n, mesa-utils
  - suggests: x11-xserver-utils

  </details>

- **cinnamon-control-center-data**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: configuration applets for Cinnamon - data files
  - Homepage: https://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center-data`
  - Install (apt): `sudo apt install cinnamon-control-center-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - recommends: cinnamon-control-center (>= 6.6.0+zena)

  </details>

- **cinnamon-control-center-dbg**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop - debug symbols
  - Homepage: https://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center-dbg`
  - Install (apt): `sudo apt install cinnamon-control-center-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon-control-center (= 6.6.0+zena)

  </details>

- **cinnamon-core**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Cinnamon desktop environment - essential components
  - Install: `sudo apt-get install cinnamon-core`
  - Install (apt): `sudo apt install cinnamon-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: cinnamon, cinnamon-control-center, cinnamon-l10n, cinnamon-screensaver, cinnamon-session, cinnamon-settings-daemon, nemo

  </details>

- **cinnamon-dbg**
  - Latest version: 6.6.5+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Debugging symbols for the Cinnamon desktop
  - Homepage: https://projects.linuxmint.com/cinnamon/
  - Install: `sudo apt-get install cinnamon-dbg`
  - Install (apt): `sudo apt install cinnamon-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon (= 6.6.5+zena), cinnamon-control-center-dbg, libcinnamon-desktop-dbg (>= 5.3), libcinnamon-menu-3-0-dbg (>= 4.8), libcjs-dbg (>= 4.8), libcvc-dbg, muffin-dbg (>= 5.3), nemo-dbg

  </details>

- **cinnamon-desktop-data**
  - Latest version: 6.6.2+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Common files for Cinnamon desktop apps
  - Install: `sudo apt-get install cinnamon-desktop-data`
  - Install (apt): `sudo apt install cinnamon-desktop-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend

  </details>

- **cinnamon-desktop-environment**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Cinnamon desktop environment - full desktop with extra components
  - Install: `sudo apt-get install cinnamon-desktop-environment`
  - Install (apt): `sudo apt install cinnamon-desktop-environment`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: cinnamon-core, gnome-calculator, gnome-screenshot, gnome-terminal, mint-meta-cinnamon

  </details>

- **cinnamon-doc**
  - Latest version: 6.6.5+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Cinnamon documentation
  - Homepage: https://projects.linuxmint.com/cinnamon/
  - Install: `sudo apt-get install cinnamon-doc`
  - Install (apt): `sudo apt install cinnamon-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: doc
  - Priority: optional
  - depends: devhelp

  </details>

- **cinnamon-l10n**
  - Latest version: 6.6.2
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Translation files for the Cinnamon desktop
  - Homepage: https://github.com/linuxmint/cinnamon-translations
  - Install: `sudo apt-get install cinnamon-l10n`
  - Install (apt): `sudo apt install cinnamon-l10n`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: localization
  - Priority: optional

  </details>

- **cinnamon-screensaver**
  - Latest version: 6.6.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon screen saver and locker
  - Install: `sudo apt-get install cinnamon-screensaver`
  - Install (apt): `sudo apt install cinnamon-screensaver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 6.0), gir1.2-caribou-1.0, gir1.2-cinnamondesktop-3.0 (>= 6.0), gir1.2-gdk-3.0, gir1.2-gdkpixbuf-2.0, gir1.2-gio-2.0, gir1.2-gkbd-3.0, gir1.2-glib-2.0, gir1.2-gobject-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, iso-flag-png, libc6 (>= 2.34), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libpam0g (>= 0.99.7.1), libpango-1.0-0 (>= 1.14.0), libx11-6, libxdo3 (>= 1:3.20130104.1), libxext6, libxinerama1 (>= 2:1.1.4), libxrandr2 (>= 2:1.2.99.3), python3, python3-gi, python3-gi-cairo, python3-setproctitle, python3-xapp, python3-xlib, python3:any, x11-utils
  - recommends: libpam-gnome-keyring
  - breaks: libcscreensaver0 (<< 6.6.1+zena)

  </details>

- **cinnamon-session**
  - Latest version: 6.6.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon Session Manager - Minimal runtime
  - Install: `sudo apt-get install cinnamon-session`
  - Install (apt): `sudo apt install cinnamon-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 6.0), cinnamon-session-common (= 6.6.1+zena), dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, libc6 (>= 2.34), libcanberra0t64 (>= 0.2), libcinnamon-desktop4 (>= 6.0.0), libgl1, libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.0.0), libice6 (>= 1:1.0.0), libsm6, libsystemd0, libx11-6, libxau6 (>= 1:1.0.9), libxcomposite1 (>= 1:0.4.5), python3-gi, python3-setproctitle, python3:any, upower (>= 0.99.11)
  - recommends: cinnamon-l10n
  - breaks: cinnamon-session-common (<< 2.2.2-5~)
  - replaces: cinnamon-session-common (<< 2.2.2-5~)
  - provides: x-session-manager

  </details>

- **cinnamon-session-common**
  - Latest version: 6.6.1+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Cinnamon Session Manager - common files
  - Install: `sudo apt-get install cinnamon-session-common`
  - Install (apt): `sudo apt install cinnamon-session-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional

  </details>

- **cinnamon-settings-daemon**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: daemon handling the Cinnamon session settings
  - Install: `sudo apt-get install cinnamon-settings-daemon`
  - Install (apt): `sudo apt install cinnamon-settings-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 2.6.3), colord, dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.38), libcairo2 (>= 1.2.4), libcanberra-gtk3-0t64 (>= 0.25), libcanberra0t64 (>= 0.2), libcinnamon-desktop4 (>= 6.2.0), libcolord2 (>= 1.4.3), libcups2t64 (>= 1.6.0), libcvc0 (>= 4.2.0), libfontconfig1 (>= 2.12.6), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libgudev-1.0-0 (>= 146), liblcms2-2 (>= 2.2+git20110628), libnotify4 (>= 0.7.3), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libpango-1.0-0 (>= 1.20), libpangocairo-1.0-0 (>= 1.20), libpolkit-gobject-1-0 (>= 0.99), libsystemd0, libupower-glib3 (>= 0.99.11), libwacom9 (>= 2.0.0), libx11-6, libxext6, libxi6 (>= 2:1.2.99.4)
  - breaks: cinnamon-settings-daemon-dev
  - replaces: cinnamon-settings-daemon-dev

  </details>

- **cinnamon-settings-daemon-dbg**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Debugging symbols for cinnamon-settings-daemon
  - Install: `sudo apt-get install cinnamon-settings-daemon-dbg`
  - Install (apt): `sudo apt install cinnamon-settings-daemon-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon-settings-daemon (= 6.6.2+zena)

  </details>

- **cinnamon-settings-daemon-dev**
  - Latest version: 6.4.3+xia
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Headers for building applications communicating with cinnamon-settings-daemon
  - Install: `sudo apt-get install cinnamon-settings-daemon-dev`
  - Install (apt): `sudo apt install cinnamon-settings-daemon-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libglib2.0-dev (>= 2.26.0)

  </details>

- **circle-flags-svg**
  - Latest version: 2.7.0+mint1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Circle flags in SVG format
  - Install: `sudo apt-get install circle-flags-svg`
  - Install (apt): `sudo apt install circle-flags-svg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: universe/misc
  - Priority: optional

  </details>

- **cjs**
  - Latest version: 115.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform (cli tool)
  - Install: `sudo apt-get install cjs`
  - Install (apt): `sudo apt install cjs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: interpreters
  - Priority: optional
  - depends: gir1.2-gtk-3.0, libc6 (>= 2.34), libcjs0 (= 115.1+zena), libgcc-s1 (>= 3.0), libglib2.0-0t64 (>= 2.70.0), libstdc++6 (>= 4.1.1)

  </details>


### <a id="packages-D"></a>D

- **dropbox**
  - Latest version: 2024.04.17
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: cloud synchronization engine - CLI and Nautilus extension
  - Homepage: https://www.dropbox.com/
  - Install: `sudo apt-get install dropbox`
  - Install (apt): `sudo apt install dropbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Dropbox <support@dropbox.com>
  - Section: gnome
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0 (>= 2.30.7), gir1.2-glib-2.0 (>= 1.40.0), gir1.2-gtk-4.0 (>= 4.8.0), gir1.2-pango-1.0 (>= 1.36.3), libatk1.0-0 (>= 2.10), libc6 (>= 2.19), libcairo2 (>= 1.13), libglib2.0-0 (>= 2.40), libgtk-4-1 (>= 4.8.0), libpango1.0-0 (>= 1.36.3) | libpango-1.0-0 (>= 1.36.3), lsb-release, procps, python3 (>= 3.4.0), python3-gi (>= 3.12)
  - suggests: nautilus (>= 43.0), python3-gpg (>= 1.8.0)
  - breaks: nautilus-dropbox
  - replaces: nautilus-dropbox
  - provides: nautilus-dropbox

  </details>


### <a id="packages-E"></a>E

- **engrampa**
  - Latest version: 1.26.2-5
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: archive manager for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install engrampa`
  - Install (apt): `sudo apt install engrampa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: 7zip, bzip2 (>= 1.0.1), engrampa-common (= 1.26.2-5), gzip (>= 1.3.2), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libcaja-extension1 (>= 1.18), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libice6 (>= 1:1.0.0), libjson-glib-1.0-0 (>= 1.5.2), libmagic1t64 (>= 5.12), libpango-1.0-0 (>= 1.14.0), libsm6, tar (>= 1.13.25)
  - recommends: gvfs, unzip, xz-utils, zip
  - suggests: arj, binutils, cpio, lha, lzip, lzma, lzop, ncompress, rar, rpm2cpio, rzip, sharutils, unace, unalz, unar | unrar | 7zip-rar, zoo
  - breaks: engrampa-common (<< 1.8.0)

  </details>

- **engrampa-common**
  - Latest version: 1.26.2-5
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: archive manager for MATE (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install engrampa-common`
  - Install (apt): `sudo apt install engrampa-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: engrampa (<= 1.0.3-1), parchives (<< 1.1.5-1~)
  - replaces: parchives (<< 1.1.5-1~)

  </details>


### <a id="packages-F"></a>F

- **fcitx**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx`
  - Install (apt): `sudo apt install fcitx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-bin, fcitx-data, fcitx-modules
  - recommends: fcitx-config-gtk | kde-config-fcitx, fcitx-frontend-all | fcitx-frontend-fbterm, fcitx-ui-classic | fcitx-ui-light, im-config (>= 0.5)
  - suggests: fcitx-m17n, fcitx-tools
  - conflicts: fcitx5

  </details>

- **fcitx-bin**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - essential binaries
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-bin`
  - Install (apt): `sudo apt install fcitx-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libdbus-1-3 (>= 1.9.14), libfcitx-config4 (>= 4.2.7), libfcitx-core0 (>= 4.2.8.1), libfcitx-utils0 (>= 4.2.7), libgettextpo0 (>= 0.21)
  - recommends: fcitx-data, fcitx-modules
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - conflicts: fcitx5
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs-dev (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs-dev (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-data**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - essential data files
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-data`
  - Install (apt): `sudo apt install fcitx-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - recommends: fcitx-bin
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - conflicts: fcitx5
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-frontend-all**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - frontends metapackage
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-frontend-all`
  - Install (apt): `sudo apt install fcitx-frontend-all`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - recommends: fcitx-frontend-gtk2, fcitx-frontend-gtk3, fcitx-frontend-qt5, fcitx-frontend-qt6

  </details>

- **fcitx-frontend-gtk2**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - GTK+ 2 IM Module frontend
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-frontend-gtk2`
  - Install (apt): `sudo apt install fcitx-frontend-gtk2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-module-dbus, libc6 (>= 2.14), libfcitx-gclient1 (>= 1:4.2.9.5), libfcitx-utils0 (>= 4.2.7), libglib2.0-0t64 (>= 2.75.3), libgtk2.0-0t64 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libxkbcommon0 (>= 0.5.0)
  - recommends: fcitx-frontend-gtk3

  </details>

- **fcitx-frontend-gtk3**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - GTK+ 3 IM Module frontend
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-frontend-gtk3`
  - Install (apt): `sudo apt install fcitx-frontend-gtk3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-module-dbus, libc6 (>= 2.14), libfcitx-gclient1 (>= 1:4.2.9.5), libfcitx-utils0 (>= 4.2.7), libglib2.0-0t64 (>= 2.75.3), libgtk-3-0t64 (>= 3.9.10), libpango-1.0-0 (>= 1.14.0), libxkbcommon0 (>= 0.5.0)
  - recommends: fcitx-frontend-gtk2

  </details>

- **fcitx-libs**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - metapackage for libraries
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-libs`
  - Install (apt): `sudo apt install fcitx-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: oldlibs
  - Priority: optional
  - depends: libfcitx-config4 (>= 1:4.2.9.9+mint1+wilma), libfcitx-core0 (>= 1:4.2.9.9+mint1+wilma), libfcitx-gclient1 (>= 1:4.2.9.9+mint1+wilma), libfcitx-utils0 (>= 1:4.2.9.9+mint1+wilma)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-libs-dev**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - library development files
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-libs-dev`
  - Install (apt): `sudo apt install fcitx-libs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: fcitx-bin (>= 1:4.2.9.9+mint1+wilma), gir1.2-fcitx-1.0 (= 1:4.2.9.9+mint1+wilma), libfcitx-config4 (= 1:4.2.9.9+mint1+wilma), libfcitx-core0 (= 1:4.2.9.9+mint1+wilma), libfcitx-gclient1 (= 1:4.2.9.9+mint1+wilma), libfcitx-utils0 (= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-module-dbus**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - D-Bus module and IPC frontend
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-module-dbus`
  - Install (apt): `sudo apt install fcitx-module-dbus`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-modules, libc6 (>= 2.38), libdbus-1-3 (>= 1.9.14)
  - recommends: dbus-x11

  </details>

- **fcitx-module-kimpanel**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - KIMPanel protocol module
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-module-kimpanel`
  - Install (apt): `sudo apt install fcitx-module-kimpanel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-module-dbus, libc6 (>= 2.38), libdbus-1-3 (>= 1.9.14)
  - suggests: kdialog, plasma-widgets-kimpanel
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-ui-kimpanel
  - provides: fcitx-ui-kimpanel

  </details>

- **fcitx-module-lua**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Lua module
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-module-lua`
  - Install (apt): `sudo apt install fcitx-module-lua`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-modules, libc6 (>= 2.14), liblua5.2-0 (>= 5.2.4)

  </details>

- **fcitx-module-x11**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - X11 module and XIM frontend
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-module-x11`
  - Install (apt): `sudo apt install fcitx-module-x11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-modules, libc6 (>= 2.33), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libjson-c5 (>= 0.15), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.22.0), libx11-6, libxfixes3, libxinerama1 (>= 2:1.1.4), libxkbfile1 (>= 1:1.1.0), libxml2 (>= 2.7.4), libxrender1

  </details>

- **fcitx-modules**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - core modules
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-modules`
  - Install (apt): `sudo apt install fcitx-modules`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libdbus-1-3 (>= 1.9.14), libenchant-2-2 (>= 2.2.7~), libjson-c5 (>= 0.15), libpresage1v5 (>= 0.9~), libuuid1 (>= 2.16), libxkbcommon0 (>= 0.5.0)
  - recommends: fcitx, fcitx-module-dbus, fcitx-module-kimpanel, fcitx-module-lua, fcitx-module-quickphrase-editor5, fcitx-module-x11
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-keyboard, fcitx-module-quickphrase-editor, fcitx-modules-x11 (<< 1:4.2.7), fcitx5-module-quickphrase-editor
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-keyboard, fcitx-module-quickphrase-editor, fcitx-modules-x11 (<< 1:4.2.7), fcitx5-module-quickphrase-editor
  - provides: fcitx-keyboard

  </details>

- **fcitx-pinyin**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - classic Pinyin engine
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-pinyin`
  - Install (apt): `sudo apt install fcitx-pinyin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-bin, fcitx-data (>= 1:4.2.9.9+mint1+wilma), fcitx-modules, libc6 (>= 2.33)
  - recommends: fcitx
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-qw**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - QuWei engine
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-qw`
  - Install (apt): `sudo apt install fcitx-qw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-bin, fcitx-data (>= 1:4.2.9.9+mint1+wilma), fcitx-modules, libc6 (>= 2.4)
  - recommends: fcitx
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-table**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - table engine
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table`
  - Install (apt): `sudo apt install fcitx-table`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-bin, fcitx-data (>= 1:4.2.9.9+mint1+wilma), fcitx-modules, libc6 (>= 2.14)
  - recommends: fcitx, fcitx-pinyin (>= 1:4.2.9.9+mint1+wilma)
  - suggests: fcitx-table-all
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-table-all**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - tables metapackage
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-all`
  - Install (apt): `sudo apt install fcitx-table-all`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - recommends: fcitx-table-bingchan, fcitx-table-cangjie, fcitx-table-dianbaoma, fcitx-table-erbi, fcitx-table-wanfeng, fcitx-table-wbpy, fcitx-table-wubi, fcitx-table-ziranma

  </details>

- **fcitx-table-bingchan**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Bingchan table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-bingchan`
  - Install (apt): `sudo apt install fcitx-table-bingchan`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-cangjie**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Cangjie table (DO NOT USE)
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-cangjie`
  - Install (apt): `sudo apt install fcitx-table-cangjie`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-dianbaoma**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Dianbaoma table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-dianbaoma`
  - Install (apt): `sudo apt install fcitx-table-dianbaoma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-erbi**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Erbi table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-erbi`
  - Install (apt): `sudo apt install fcitx-table-erbi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-wanfeng**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Wanfeng table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-wanfeng`
  - Install (apt): `sudo apt install fcitx-table-wanfeng`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-wbpy**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - WubiPinyin table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-wbpy`
  - Install (apt): `sudo apt install fcitx-table-wbpy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-wubi**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Wubi table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-wubi`
  - Install (apt): `sudo apt install fcitx-table-wubi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-table-ziranma**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Ziranma table
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-table-ziranma`
  - Install (apt): `sudo apt install fcitx-table-ziranma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-table (>= 1:4.2.6)

  </details>

- **fcitx-tools**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - various tools
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-tools`
  - Install (apt): `sudo apt install fcitx-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-bin (>= 1:4.2.9.9+mint1+wilma), libc6 (>= 2.38), libfcitx-config4 (>= 4.2.7), libfcitx-utils0 (>= 4.2.7)
  - suggests: fcitx
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **fcitx-ui-classic**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - Classic user interface
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install fcitx-ui-classic`
  - Install (apt): `sudo apt install fcitx-ui-classic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: fcitx-module-x11, libc6 (>= 2.38), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libglib2.0-0t64 (>= 2.12.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.22.0), libx11-6, libxext6
  - recommends: fcitx (>= 1:4.2.9.9+mint1+wilma), zenity | kdialog
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-hangul (<< 0.3.0), fcitx-unikey (<< 0.2.0)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-hangul (<< 0.3.0), fcitx-unikey (<< 0.2.0)

  </details>

- **file-roller**
  - Latest version: 43.0+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: archive manager for GNOME
  - Homepage: https://wiki.gnome.org/Apps/FileRoller
  - Install: `sudo apt-get install file-roller`
  - Install (apt): `sudo apt install file-roller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: bzip2, dconf-gsettings-backend | gsettings-backend, libarchive13t64 (>= 3.3.3), libc6 (>= 2.34), libcairo2 (>= 1.4.10), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libhandy-1-0 (>= 1.5.90), libjson-glib-1.0-0 (>= 1.5.2), libnautilus-extension4 (>= 43~beta.1), libpango-1.0-0 (>= 1.14.0), unzip, zip
  - recommends: gvfs, yelp
  - suggests: arj, lha, lzip, lzma, lzop, ncompress, p7zip-full, rpm2cpio, rzip, sharutils, squashfs-tools, unace, unalz, unar, xz-utils, zoo

  </details>

- **fingwit**
  - Latest version: 1.0.8+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Fingerprint Configuration Tool
  - Install: `sudo apt-get install fingwit`
  - Install (apt): `sudo apt install fingwit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0 (>= 2.5.0), libpam-fingwit (= 1.0.8+zena), libpam-fprintd, python3, python3-gi, python3-pam, python3-setproctitle

  </details>

- **firefox**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: The Firefox web browser
  - Install: `sudo apt-get install firefox`
  - Install (apt): `sudo apt install firefox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional
  - preDepends: ubuntu-system-adjustments (>= 2021.12.16)
  - breaks: firefox-dbg (<< 95.0.1+linuxmint1+una), firefox-dev (<< 95.0.1+linuxmint1+una), firefox-geckodriver (<< 95.0.1+linuxmint1+una), firefox-mozsymbols (<< 95.0.1+linuxmint1+una)
  - replaces: firefox-dbg (<< 95.0.1+linuxmint1+una), firefox-dev (<< 95.0.1+linuxmint1+una), firefox-geckodriver (<< 95.0.1+linuxmint1+una), firefox-mozsymbols (<< 95.0.1+linuxmint1+una)
  - provides: gnome-www-browser, www-browser

  </details>

- **firefox-dbg**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Safe and easy web browser from Mozilla - debug symbols
  - Install: `sudo apt-get install firefox-dbg`
  - Install (apt): `sudo apt install firefox-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra

  </details>

- **firefox-dev**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Safe and easy web browser from Mozilla - development files
  - Install: `sudo apt-get install firefox-dev`
  - Install (apt): `sudo apt install firefox-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: oldlibs
  - Priority: extra

  </details>

- **firefox-geckodriver**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Safe and easy web browser from Mozilla - geckodriver
  - Install: `sudo apt-get install firefox-geckodriver`
  - Install (apt): `sudo apt install firefox-geckodriver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-af**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Afrikaans language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-af`
  - Install (apt): `sudo apt install firefox-locale-af`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-an**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Aragonese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-an`
  - Install (apt): `sudo apt install firefox-locale-an`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ar**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Arabic language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ar`
  - Install (apt): `sudo apt install firefox-locale-ar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-as**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-as`
  - Install (apt): `sudo apt install firefox-locale-as`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ast**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Asturian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ast`
  - Install (apt): `sudo apt install firefox-locale-ast`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-az**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Azerbaijani language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-az`
  - Install (apt): `sudo apt install firefox-locale-az`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-be**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Belarusian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-be`
  - Install (apt): `sudo apt install firefox-locale-be`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-bg**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Bulgarian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-bg`
  - Install (apt): `sudo apt install firefox-locale-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-bn**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Bengali language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-bn`
  - Install (apt): `sudo apt install firefox-locale-bn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-br**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Breton language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-br`
  - Install (apt): `sudo apt install firefox-locale-br`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-bs**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Bosnian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-bs`
  - Install (apt): `sudo apt install firefox-locale-bs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ca**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Catalan; Valencian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ca`
  - Install (apt): `sudo apt install firefox-locale-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-cak**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Kaqchikel language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-cak`
  - Install (apt): `sudo apt install firefox-locale-cak`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-cs**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Czech language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-cs`
  - Install (apt): `sudo apt install firefox-locale-cs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-csb**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-csb`
  - Install (apt): `sudo apt install firefox-locale-csb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-cy**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Welsh language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-cy`
  - Install (apt): `sudo apt install firefox-locale-cy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-da**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Danish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-da`
  - Install (apt): `sudo apt install firefox-locale-da`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-de**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: German language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-de`
  - Install (apt): `sudo apt install firefox-locale-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-el**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Greek language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-el`
  - Install (apt): `sudo apt install firefox-locale-el`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-en**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: English language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-en`
  - Install (apt): `sudo apt install firefox-locale-en`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-eo**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Esperanto language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-eo`
  - Install (apt): `sudo apt install firefox-locale-eo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-es**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Spanish; Castilian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-es`
  - Install (apt): `sudo apt install firefox-locale-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-et**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Estonian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-et`
  - Install (apt): `sudo apt install firefox-locale-et`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-eu**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Basque language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-eu`
  - Install (apt): `sudo apt install firefox-locale-eu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-fa**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Persian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-fa`
  - Install (apt): `sudo apt install firefox-locale-fa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-fi**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Finnish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-fi`
  - Install (apt): `sudo apt install firefox-locale-fi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-fr**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: French language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-fr`
  - Install (apt): `sudo apt install firefox-locale-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-fy**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Western Frisian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-fy`
  - Install (apt): `sudo apt install firefox-locale-fy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ga**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Irish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ga`
  - Install (apt): `sudo apt install firefox-locale-ga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-gd**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Gaelic; Scottish Gaelic language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-gd`
  - Install (apt): `sudo apt install firefox-locale-gd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-gl**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Galician language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-gl`
  - Install (apt): `sudo apt install firefox-locale-gl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-gn**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Guarani language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-gn`
  - Install (apt): `sudo apt install firefox-locale-gn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-gu**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Gujarati language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-gu`
  - Install (apt): `sudo apt install firefox-locale-gu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-he**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Hebrew language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-he`
  - Install (apt): `sudo apt install firefox-locale-he`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-hi**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Hindi language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-hi`
  - Install (apt): `sudo apt install firefox-locale-hi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-hr**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Croatian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-hr`
  - Install (apt): `sudo apt install firefox-locale-hr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-hsb**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Sorbian, Upper language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-hsb`
  - Install (apt): `sudo apt install firefox-locale-hsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-hu**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Hungarian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-hu`
  - Install (apt): `sudo apt install firefox-locale-hu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-hy**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Armenian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-hy`
  - Install (apt): `sudo apt install firefox-locale-hy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ia**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Interlingua language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ia`
  - Install (apt): `sudo apt install firefox-locale-ia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-id**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Indonesian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-id`
  - Install (apt): `sudo apt install firefox-locale-id`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-is**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Icelandic language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-is`
  - Install (apt): `sudo apt install firefox-locale-is`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-it**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Italian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-it`
  - Install (apt): `sudo apt install firefox-locale-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ja**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Japanese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ja`
  - Install (apt): `sudo apt install firefox-locale-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ka**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Georgian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ka`
  - Install (apt): `sudo apt install firefox-locale-ka`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-kab**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Kabyle language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-kab`
  - Install (apt): `sudo apt install firefox-locale-kab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-kk**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Kazakh language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-kk`
  - Install (apt): `sudo apt install firefox-locale-kk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-km**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Central Khmer language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-km`
  - Install (apt): `sudo apt install firefox-locale-km`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-kn**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Kannada language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-kn`
  - Install (apt): `sudo apt install firefox-locale-kn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ko**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Korean language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ko`
  - Install (apt): `sudo apt install firefox-locale-ko`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ku**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-ku`
  - Install (apt): `sudo apt install firefox-locale-ku`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-lg**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-lg`
  - Install (apt): `sudo apt install firefox-locale-lg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-lt**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Lithuanian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-lt`
  - Install (apt): `sudo apt install firefox-locale-lt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-lv**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Latvian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-lv`
  - Install (apt): `sudo apt install firefox-locale-lv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-mai**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-mai`
  - Install (apt): `sudo apt install firefox-locale-mai`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-mk**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Macedonian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-mk`
  - Install (apt): `sudo apt install firefox-locale-mk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ml**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-ml`
  - Install (apt): `sudo apt install firefox-locale-ml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-mn**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-mn`
  - Install (apt): `sudo apt install firefox-locale-mn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-mr**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Marathi language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-mr`
  - Install (apt): `sudo apt install firefox-locale-mr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ms**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Malay language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ms`
  - Install (apt): `sudo apt install firefox-locale-ms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-my**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Myanmar language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-my`
  - Install (apt): `sudo apt install firefox-locale-my`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-nb**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Bokmål, Norwegian; Norwegian Bokmål language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-nb`
  - Install (apt): `sudo apt install firefox-locale-nb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ne**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Nepali language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ne`
  - Install (apt): `sudo apt install firefox-locale-ne`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-nl**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Dutch; Flemish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-nl`
  - Install (apt): `sudo apt install firefox-locale-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-nn**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Norwegian Nynorsk; Nynorsk, Norwegian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-nn`
  - Install (apt): `sudo apt install firefox-locale-nn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-nso**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-nso`
  - Install (apt): `sudo apt install firefox-locale-nso`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-oc**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Occitan (post 1500) language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-oc`
  - Install (apt): `sudo apt install firefox-locale-oc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-or**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-or`
  - Install (apt): `sudo apt install firefox-locale-or`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-pa**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Panjabi; Punjabi language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-pa`
  - Install (apt): `sudo apt install firefox-locale-pa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-pl**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Polish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-pl`
  - Install (apt): `sudo apt install firefox-locale-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-pt**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Portuguese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-pt`
  - Install (apt): `sudo apt install firefox-locale-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ro**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Romanian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ro`
  - Install (apt): `sudo apt install firefox-locale-ro`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ru**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Russian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ru`
  - Install (apt): `sudo apt install firefox-locale-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-si**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Sinhala; Sinhalese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-si`
  - Install (apt): `sudo apt install firefox-locale-si`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sk**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Slovak language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-sk`
  - Install (apt): `sudo apt install firefox-locale-sk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sl**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Slovenian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-sl`
  - Install (apt): `sudo apt install firefox-locale-sl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sq**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Albanian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-sq`
  - Install (apt): `sudo apt install firefox-locale-sq`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sr**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Serbian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-sr`
  - Install (apt): `sudo apt install firefox-locale-sr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sv**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Swedish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-sv`
  - Install (apt): `sudo apt install firefox-locale-sv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-sw**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-sw`
  - Install (apt): `sudo apt install firefox-locale-sw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-szl**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Silesian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-szl`
  - Install (apt): `sudo apt install firefox-locale-szl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ta**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Tamil language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ta`
  - Install (apt): `sudo apt install firefox-locale-ta`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-te**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Telugu language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-te`
  - Install (apt): `sudo apt install firefox-locale-te`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-th**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Thai language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-th`
  - Install (apt): `sudo apt install firefox-locale-th`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-tr**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Turkish language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-tr`
  - Install (apt): `sudo apt install firefox-locale-tr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-uk**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Ukrainian language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-uk`
  - Install (apt): `sudo apt install firefox-locale-uk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-ur**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Urdu language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-ur`
  - Install (apt): `sudo apt install firefox-locale-ur`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-uz**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Uzbek language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-uz`
  - Install (apt): `sudo apt install firefox-locale-uz`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-vi**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Vietnamese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-vi`
  - Install (apt): `sudo apt install firefox-locale-vi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-xh**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Xhosa language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-xh`
  - Install (apt): `sudo apt install firefox-locale-xh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-zh-hans**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Simplified Chinese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-zh-hans`
  - Install (apt): `sudo apt install firefox-locale-zh-hans`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-zh-hant**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Traditional Chinese language packs for Firefox
  - Install: `sudo apt-get install firefox-locale-zh-hant`
  - Install (apt): `sudo apt install firefox-locale-zh-hant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-locale-zu**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for unavailable language
  - Install: `sudo apt-get install firefox-locale-zu`
  - Install (apt): `sudo apt install firefox-locale-zu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: web
  - Priority: optional

  </details>

- **firefox-mozsymbols**
  - Latest version: 147.0.1+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Safe and easy web browser from Mozilla - Breakpad symbols
  - Install: `sudo apt-get install firefox-mozsymbols`
  - Install (apt): `sudo apt install firefox-mozsymbols`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra

  </details>

- **folder-color-switcher**
  - Latest version: 1.7.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Change a folder color
  - Install: `sudo apt-get install folder-color-switcher`
  - Install (apt): `sudo apt install folder-color-switcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: utils
  - Priority: extra
  - breaks: caja-folder-color-switcher, nemo-folder-color-switcher
  - replaces: caja-folder-color-switcher, nemo-folder-color-switcher

  </details>


### <a id="packages-G"></a>G

- **gir1.2-adap-1**
  - Latest version: 1.5.0+zara
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GObject introspection files for libadapta
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadapta/
  - Install: `sudo apt-get install gir1.2-adap-1`
  - Install (apt): `sudo apt install gir1.2-adap-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-gtk-4.0 (>= 4.13.4), libadapta-1-0 (>= 1.5~beta)

  </details>

- **gir1.2-adw-1**
  - Latest version: 1.5.0-2mint3+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection files for libadwaita
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadwaita/
  - Install: `sudo apt-get install gir1.2-adw-1`
  - Install (apt): `sudo apt install gir1.2-adw-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-gtk-4.0 (>= 4.13.4), libadwaita-1-0 (>= 1.5~beta)

  </details>

- **gir1.2-caja-2.0**
  - Latest version: 1.26.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for Caja
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-caja-2.0`
  - Install (apt): `sudo apt install gir1.2-caja-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, libcaja-extension1 (>= 1.24.0)
  - breaks: gir1.2-caja (<< 1.18.5-2~)
  - replaces: gir1.2-caja (<< 1.18.5-2~)

  </details>

- **gir1.2-cinnamondesktop-3.0**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Introspection data for CinnamonDesktop
  - Install: `sudo apt-get install gir1.2-cinnamondesktop-3.0`
  - Install (apt): `sudo apt install gir1.2-cinnamondesktop-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gobject-2.0, gir1.2-gtk-3.0 (>= 3.3.16), libcinnamon-desktop4 (>= 6.6.2)
  - provides: gir1.2-cdesktopenums-3.0 (= 6.6.2+zena)

  </details>

- **gir1.2-cmenu-3.0**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GObject introspection data for the Cinnamon menu library
  - Install: `sudo apt-get install gir1.2-cmenu-3.0`
  - Install (apt): `sudo apt install gir1.2-cmenu-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, libcinnamon-menu-3-0 (>= 4.8.3)

  </details>

- **gir1.2-cvc-1.0**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Introspection data for Cinnamon pulseaudio abstraction
  - Install: `sudo apt-get install gir1.2-cvc-1.0`
  - Install (apt): `sudo apt install gir1.2-cvc-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-gobject-2.0, libcvc0 (>= 5.4.2)

  </details>

- **gir1.2-fcitx-1.0**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for fcitx
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install gir1.2-fcitx-1.0`
  - Install (apt): `sudo apt install gir1.2-fcitx-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-glib-2.0, gir1.2-gobject-2.0, libfcitx-gclient1 (>= 1:4.2.9.5)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma)

  </details>

- **gir1.2-matedesktop-2.0**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for the libmate-desktop library
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matedesktop-2.0`
  - Install (apt): `sudo apt install gir1.2-matedesktop-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gobject-2.0, gir1.2-gtk-3.0 (>= 3.22.0), libmate-desktop-2-17t64 (= 1.26.2-1.1mint1+zara)
  - breaks: gir1.2-mate-desktop (<< 1.18.0-2~)
  - replaces: gir1.2-mate-desktop (<< 1.18.0-2~)

  </details>

- **gir1.2-matemenu-2.0**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for the MATE menu specification
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matemenu-2.0`
  - Install (apt): `sudo apt install gir1.2-matemenu-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, libmate-menu2 (>= 1.22.0)
  - breaks: gir1.2-mate-menu (<< 1.18.1-2~)
  - replaces: gir1.2-mate-menu (<< 1.18.1-2~)

  </details>

- **gir1.2-meta-muffin-0.0**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GObject introspection data for Muffin
  - Install: `sudo apt-get install gir1.2-meta-muffin-0.0`
  - Install (apt): `sudo apt install gir1.2-meta-muffin-0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-atk-1.0, gir1.2-cairo-1.0, gir1.2-cdesktopenums-3.0, gir1.2-gdk-3.0 (>= 3.19.8), gir1.2-gl-1.0, gir1.2-gobject-2.0, gir1.2-graphene-1.0 (>= 1.9.3), gir1.2-gtk-3.0 (>= 3.19.8), gir1.2-json-1.0 (>= 0.13.2-1~), gir1.2-pango-1.0 (>= 1.2.0), gir1.2-pangocairo-1.0 (>= 1.2.0), gir1.2-xfixes-4.0, gir1.2-xlib-2.0, libmuffin0 (= 6.6.2+zena)
  - breaks: gir1.2-muffin-3.0
  - replaces: gir1.2-muffin-3.0

  </details>

- **gir1.2-nemo-3.0**
  - Latest version: 6.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: libraries for nemo components - gir bindings
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install gir1.2-nemo-3.0`
  - Install (apt): `sudo apt install gir1.2-nemo-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-glib-2.0 (>= 0.9.12), gir1.2-gtk-3.0 (>= 3.10), libnemo-extension1 (>= 5.0.3)
  - conflicts: gir1.0-nemo-3.0
  - replaces: gir1.0-nemo-3.0

  </details>

- **gir1.2-nma-1.0**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for libnma
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install gir1.2-nma-1.0`
  - Install (apt): `sudo apt install gir1.2-nma-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gtk-3.0, gir1.2-nm-1.0, libnma0 (>= 1.8.28)

  </details>

- **gir1.2-nma4-1.0**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for libnma-gtk4
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install gir1.2-nma4-1.0`
  - Install (apt): `sudo apt install gir1.2-nma4-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gtk-4.0, gir1.2-nm-1.0, libnma-gtk4-0 (>= 1.8.34)

  </details>

- **gir1.2-packagekitglib-1.0**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GObject introspection data for the PackageKit GLib library
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install gir1.2-packagekitglib-1.0`
  - Install (apt): `sudo apt install gir1.2-packagekitglib-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-glib-2.0 (>= 1.36), gir1.2-gobject-2.0, libpackagekit-glib2-18 (>= 1.2.8+mint2+xia)

  </details>

- **gir1.2-thunarx-3.0**
  - Latest version: 4.18.8+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Typelib file for thunar
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install gir1.2-thunarx-3.0`
  - Install (apt): `sudo apt install gir1.2-thunarx-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gobject-2.0, gir1.2-gtk-3.0, libthunarx-3-0 (>= 4.17.6)

  </details>

- **gir1.2-xapp-1.0**
  - Latest version: 3.2.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Introspection data for XApp
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install gir1.2-xapp-1.0`
  - Install (apt): `sudo apt install gir1.2-xapp-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gobject-2.0, gir1.2-gtk-3.0 (>= 3.16), libxapp1 (>= 2.6.0), python3:any

  </details>

- **gir1.2-xreader**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GObject introspection data for Xreader
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install gir1.2-xreader`
  - Install (apt): `sudo apt install gir1.2-xreader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libxreaderdocument3, libxreaderview3

  </details>

- **gir1.2-xviewer-3.0**
  - Latest version: 3.4.16+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GObject introspection data for Xviewer
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install gir1.2-xviewer-3.0`
  - Install (apt): `sudo apt install gir1.2-xviewer-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: xviewer (= 3.4.16+zena)

  </details>

- **glade2script**
  - Latest version: 3.2.4~ppa23
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Glade interface engine for scripts
  - Homepage: https://launchpad.net/glade2script
  - Install: `sudo apt-get install glade2script`
  - Install (apt): `sudo apt install glade2script`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann MRN <yannubuntu@protonmail.com>
  - Section: devel
  - Priority: optional
  - depends: glade2script-python3 | glade2script-python2

  </details>

- **glade2script-python2**
  - Latest version: 3.2.4~ppa23
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Glade interface engine for scripts (Python2 version)
  - Homepage: https://launchpad.net/glade2script
  - Install: `sudo apt-get install glade2script-python2`
  - Install (apt): `sudo apt install glade2script-python2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann MRN <yannubuntu@protonmail.com>
  - Section: devel
  - Priority: optional
  - depends: gir1.2-gtk-3.0, python2 | python, python2-gi | python-gi
  - recommends: gir1.2-notify-0.7
  - suggests: gir1.2-appindicator3-0.1

  </details>

- **glade2script-python3**
  - Latest version: 3.2.4~ppa23
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Glade interface engine for scripts (Python3 version)
  - Homepage: https://launchpad.net/glade2script
  - Install: `sudo apt-get install glade2script-python3`
  - Install (apt): `sudo apt install glade2script-python3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann MRN <yannubuntu@protonmail.com>
  - Section: devel
  - Priority: optional
  - depends: gir1.2-gtk-3.0, python3, python3-gi
  - recommends: gir1.2-notify-0.7
  - suggests: gir1.2-appindicator3-0.1

  </details>

- **gnome-calculator**
  - Latest version: 1:41.1+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GNOME desktop calculator
  - Homepage: https://wiki.gnome.org/Apps/Calculator
  - Install: `sudo apt-get install gnome-calculator`
  - Install (apt): `sudo apt install gnome-calculator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: math
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libgee-0.8-2 (>= 0.20), libglib2.0-0t64 (>= 2.44.0), libgtk-3-0t64 (>= 3.24.1), libgtksourceview-4-0 (>= 2.91.4), libhandy-1-0 (>= 1.5.90), libmpc3 (>= 1.1.0), libmpfr6 (>= 3.1.3), libsoup-2.4-1 (>= 2.42), libxml2 (>= 2.7.4)
  - recommends: gvfs, yelp
  - breaks: gcalctool (<< 6.7)
  - replaces: gcalctool (<< 6.7)

  </details>

- **gnome-calendar**
  - Latest version: 46.1-1mint2+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Calendar application for GNOME
  - Homepage: https://apps.gnome.org/Calendar/
  - Install: `sudo apt-get install gnome-calendar`
  - Install (apt): `sudo apt install gnome-calendar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gsettings-desktop-schemas (>= 3.21.2), libadwaita-1-0 (>= 1.5~beta), libc6 (>= 2.38), libecal-2.0-3 (>= 3.45.1), libedataserver-1.2-27t64 (>= 3.45.2), libedataserverui4-1.0-0t64 (>= 3.45.1), libgeoclue-2-0 (>= 2.4.0), libglib2.0-0t64 (>= 2.79.0), libgraphene-1.0-0 (>= 1.5.4), libgtk-4-1 (>= 4.12.0), libgweather-4-0t64 (>= 4.1), libical3t64 (>= 3.0.0), libpango-1.0-0 (>= 1.14.0), libsoup-3.0-0 (>= 3.0.3)
  - recommends: evolution-data-server

  </details>

- **gnome-mpv**
  - Latest version: 0.21+mint2+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: transitional dummy package
  - Homepage: https://github.com/gnome-mpv/gnome-mpv
  - Install: `sudo apt-get install gnome-mpv`
  - Install (apt): `sudo apt install gnome-mpv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xu Zhen <xuzhen@fastmail.com>
  - Section: video
  - Priority: optional
  - depends: celluloid

  </details>

- **gnome-online-accounts-gtk**
  - Latest version: 3.50.10+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: GUI Utility for logging into online accounts for the
  - Homepage: https://github.com/xapp-project/gnome-online-accounts-gtk
  - Install: `sudo apt-get install gnome-online-accounts-gtk`
  - Install (apt): `sudo apt install gnome-online-accounts-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: XAPP <info@xapp-project.org>
  - Section: gnome
  - Priority: optional
  - depends: gnome-online-accounts (>= 3.50), libadwaita-1-0 (>= 1.0.0), libc6 (>= 2.34), libglib2.0-0t64 (>= 2.79.0), libgoa-1.0-0b (>= 3.50), libgoa-backend-1.0-2 (>= 3.50), libgtk-4-1 (>= 4.0.0)

  </details>

- **gnome-screenshot**
  - Latest version: 41.0+mint2+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: screenshot application for GNOME
  - Homepage: https://wiki.gnome.org/Apps/Attic/GnomeUtils
  - Install: `sudo apt-get install gnome-screenshot`
  - Install (apt): `sudo apt install gnome-screenshot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.34), libcairo2 (>= 1.10.0), libgdk-pixbuf-2.0-0 (>= 2.23.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libhandy-1-0 (>= 1.5.0), libx11-6, libxext6

  </details>

- **gnome-system-tools**
  - Latest version: 3.0.0+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Cross-platform configuration utilities
  - Homepage: https://github.com/LStranger/gnome-system-tools
  - Install: `sudo apt-get install gnome-system-tools`
  - Install (apt): `sudo apt install gnome-system-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.0.0), liboobs-1-5 (>= 3.0.0), libpango-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), policykit-1-gnome | mate-polkit
  - recommends: packagekit, yelp
  - suggests: ntp
  - conflicts: gnome-network-admin
  - replaces: gnome-network-admin, ximian-setup-tools
  - provides: gnome-network-admin

  </details>

- **gnome-terminal**
  - Latest version: 3.52.0+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GNOME terminal emulator application
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install gnome-terminal`
  - Install (apt): `sudo apt install gnome-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, fonts-dejavu-mono, gir1.2-glib-2.0, gnome-terminal-data (<< 3.54), gnome-terminal-data (>= 3.52), gsettings-desktop-schemas (>= 0.1.0), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgcc-s1 (>= 3.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.23.0), libhandy-1-0 (>= 1.5.0), libpango-1.0-0 (>= 1.14.0), libstdc++6 (>= 4.1.1), libuuid1 (>= 2.16), libvte-2.91-0 (>= 0.75.0), libx11-6, python3, python3-gi
  - recommends: gvfs, nautilus-extension-gnome-terminal, yelp
  - provides: x-terminal-emulator

  </details>

- **gnome-terminal-data**
  - Latest version: 3.52.0+mint2+xia
  - Architectures: all
  - Suite: zena
  - Components: upstream
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

- **google-earth-pro-stable**
  - Latest version: 7.3.6.9796-r0
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: Explore, search and discover the planet
  - Install: `sudo apt-get install google-earth-pro-stable`
  - Install (apt): `sudo apt install google-earth-pro-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Earth Team <google-earth-support@google.com>
  - Section: net
  - Priority: optional
  - depends: libasound2, libc6, libcups2, libdbus-1-3, libfontconfig1, libfreetype6, libgcc1, libglib2.0-0, libglu1-mesa, libgstreamer-plugins-base1.0-0, libgstreamer1.0-0, libproxy1 | libproxy1v5, libsm6, libstdc++6, libx11-6, libx11-xcb1, libxcb1, libxext6, libxml2, libxrender1, libxtst6
  - preDepends: dpkg (>= 1.14.0)

  </details>

- **grub2-theme-mint**
  - Latest version: 1.2.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Grub2 theme for Linux Mint
  - Install: `sudo apt-get install grub2-theme-mint`
  - Install (apt): `sudo apt install grub2-theme-mint`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional

  </details>

- **grub2-theme-mint-2k**
  - Latest version: 1.2.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Grub2 theme for Linux Mint
  - Install: `sudo apt-get install grub2-theme-mint-2k`
  - Install (apt): `sudo apt install grub2-theme-mint-2k`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional

  </details>

- **gstreamer1.0-packagekit**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GStreamer plugin to install codecs using PackageKit
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install gstreamer1.0-packagekit`
  - Install (apt): `sudo apt install gstreamer1.0-packagekit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0t64 (>= 2.54), libgstreamer1.0-0 (>= 1.0.0), libpackagekit-glib2-18 (>= 0.9.4), packagekit (= 1.2.8+mint2+xia)
  - recommends: gnome-software | apper | packagekit-installer
  - conflicts: gstreamer0.10-packagekit
  - replaces: gstreamer0.10-packagekit

  </details>


### <a id="packages-H"></a>H

- **hypnotix**
  - Latest version: 5.6
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: IPTV Player
  - Install: `sudo apt-get install hypnotix`
  - Install (apt): `sudo apt install hypnotix`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: circle-flags-svg, dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0, libmpv2 | libmpv1, python3, python3-gi, python3-gi-cairo, python3-requests, python3-setproctitle, python3-unidecode, xapps-common, yt-dlp

  </details>


### <a id="packages-I"></a>I

- **ia32-libs**
  - Latest version: 2020.05.27
  - Architectures: amd64
  - Suite: zena
  - Components: main
  - Description: (no description)
  - Install: `sudo apt-get install ia32-libs`
  - Install (apt): `sudo apt install ia32-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gtk2-engines-murrine:i386, gtk2-engines-oxygen:i386, gtk2-engines-pixbuf:i386, gtk2-engines:i386, gvfs:i386, ibus-gtk:i386, libacl1:i386, libaio1:i386, libao4:i386, libasound2-plugins:i386, libasound2:i386, libasyncns0:i386, libattr1:i386, libaudio2:i386, libcanberra-gtk-module:i386, libcap2:i386, libcapi20-3:i386, libcups2:i386, libcupsimage2:i386, libdbus-glib-1-2:i386, libfontconfig1:i386, libfreetype6:i386, libgail-common:i386, libgettextpo0:i386, libgl1-mesa-dri:i386, libgl1-mesa-glx:i386, libglapi-mesa:i386, libglu1-mesa:i386, libgphoto2-6:i386, libgphoto2-port10:i386 | libgphoto2-port12:i386, libgtk2.0-0:i386, libmpg123-0:i386, libncursesw5:i386, libnspr4:i386, libnss3:i386, libodbc1:i386, libopenal1:i386, libpulse-mainloop-glib0:i386, libpulsedsp:i386, librsvg2-common:i386, libsane:i386, libsdl-image1.2:i386, libsdl-mixer1.2:i386, libsdl-net1.2:i386, libsdl-ttf2.0-0:i386, libsdl1.2debian:i386, libsqlite3-0:i386, libstdc++5:i386, libstdc++6:i386, libxaw7:i386, libxml2:i386, libxslt1.1:i386, libxss1:i386, libxtst6:i386, odbcinst1debian2:i386, xaw3dg:i386
  - provides: ia32-libs-gtk, ia32-libs-multiarch, ia32-libs-sdl, lib32asound2, lib32v4l-0

  </details>

- **iso-flag-png**
  - Latest version: 1.0.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: ISO country flags in PNG format
  - Install: `sudo apt-get install iso-flag-png`
  - Install (apt): `sudo apt install iso-flag-png`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: universe/misc
  - Priority: optional

  </details>


### <a id="packages-L"></a>L

- **libadapta-1-0**
  - Latest version: 1.5.0+zara
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Library with GTK widgets for mobile phones
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadapta/
  - Install: `sudo apt-get install libadapta-1-0`
  - Install (apt): `sudo apt install libadapta-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libappstream5 (>= 1.0.0), libc6 (>= 2.38), libfribidi0 (>= 0.19.2), libglib2.0-0t64 (>= 2.79.0), libgraphene-1.0-0 (>= 1.5.4), libgtk-4-1 (>= 4.13.4), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libadapta-1-dev**
  - Latest version: 1.5.0+zara
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Development files for libadapta
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadapta/
  - Install: `sudo apt-get install libadapta-1-dev`
  - Install (apt): `sudo apt install libadapta-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-adap-1 (= 1.5.0+zara), gir1.2-gio-2.0-dev, gir1.2-gtk-4.0-dev, libadapta-1-0 (= 1.5.0+zara), libappstream-dev, libgtk-4-dev (>= 4.13.4)
  - recommends: pkgconf
  - suggests: libadapta-1-doc
  - provides: gir1.2-adap-1-dev (= 1.5.0+zara)

  </details>

- **libadapta-1-doc**
  - Latest version: 1.5.0+zara
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Documentation for libadapta
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadapta/
  - Install: `sudo apt-get install libadapta-1-doc`
  - Install (apt): `sudo apt install libadapta-1-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libadapta-1-examples**
  - Latest version: 1.5.0+zara
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Example programs for libadapta
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadapta/
  - Install: `sudo apt-get install libadapta-1-examples`
  - Install (apt): `sudo apt install libadapta-1-examples`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libadapta-1-0 (>= 1.5~beta), libc6 (>= 2.34), libglib2.0-0t64 (>= 2.79.0), libgtk-4-1 (>= 4.13.4)

  </details>

- **libadwaita-1-0**
  - Latest version: 1.5.0-2mint3+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library with GTK widgets for mobile phones
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadwaita/
  - Install: `sudo apt-get install libadwaita-1-0`
  - Install (apt): `sudo apt install libadwaita-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libappstream5 (>= 1.0.0), libc6 (>= 2.38), libfribidi0 (>= 0.19.2), libglib2.0-0t64 (>= 2.79.0), libgraphene-1.0-0 (>= 1.5.4), libgtk-4-1 (>= 4.13.4), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libadwaita-1-dev**
  - Latest version: 1.5.0-2mint3+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Development files for libadwaita
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadwaita/
  - Install: `sudo apt-get install libadwaita-1-dev`
  - Install (apt): `sudo apt install libadwaita-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-adw-1 (= 1.5.0-2mint3+zara), gir1.2-gio-2.0-dev, gir1.2-gtk-4.0-dev, libadwaita-1-0 (= 1.5.0-2mint3+zara), libappstream-dev, libgtk-4-dev (>= 4.13.4)
  - recommends: pkgconf
  - suggests: libadwaita-1-doc
  - provides: gir1.2-adw-1-dev (= 1.5.0-2mint3+zara)

  </details>

- **libadwaita-1-doc**
  - Latest version: 1.5.0-2mint3+zara
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Documentation for libadwaita
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadwaita/
  - Install: `sudo apt-get install libadwaita-1-doc`
  - Install (apt): `sudo apt install libadwaita-1-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libadwaita-1-examples**
  - Latest version: 1.5.0-2mint3+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Example programs for libadwaita
  - Homepage: https://gnome.pages.gitlab.gnome.org/libadwaita/
  - Install: `sudo apt-get install libadwaita-1-examples`
  - Install (apt): `sudo apt install libadwaita-1-examples`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libadwaita-1-0 (>= 1.5~beta), libc6 (>= 2.34), libglib2.0-0t64 (>= 2.79.0), libgtk-4-1 (>= 4.13.4)

  </details>

- **libcaja-extension-dev**
  - Latest version: 1.26.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: libraries for Caja components (development files)
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension-dev`
  - Install (apt): `sudo apt install libcaja-extension-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-caja-2.0 (= 1.26.3+mint1), libcaja-extension1 (= 1.26.3+mint1), libgtk-3-dev
  - breaks: gir1.2-caja (<< 1.18.4-1~)
  - replaces: gir1.2-caja (<< 1.18.4-1~)

  </details>

- **libcaja-extension-doc**
  - Latest version: 1.26.3+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: libraries for Caja components (API documentation files)
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension-doc`
  - Install (apt): `sudo apt install libcaja-extension-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional
  - breaks: libcaja-extension-dev (<< 1.12.3-2~)

  </details>

- **libcaja-extension1**
  - Latest version: 1.26.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: libraries for Caja components
  - Homepage: https://mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension1`
  - Install (apt): `sudo apt install libcaja-extension1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.0.0)
  - breaks: libcaja-extension (<< 1.7.0)
  - replaces: libcaja-extension (<< 1.7.0)
  - provides: libcaja-extension

  </details>

- **libcinnamon-control-center-dev**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop - development files
  - Homepage: https://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install libcinnamon-control-center-dev`
  - Install (apt): `sudo apt install libcinnamon-control-center-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcinnamon-control-center1 (= 6.6.0+zena), libgtk-3-dev (>= 3.4.1)

  </details>

- **libcinnamon-control-center1**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop
  - Homepage: https://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install libcinnamon-control-center1`
  - Install (apt): `sudo apt install libcinnamon-control-center1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.16), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libcinnamon-desktop-dbg**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon shared utility library - debugging symbols
  - Install: `sudo apt-get install libcinnamon-desktop-dbg`
  - Install (apt): `sudo apt install libcinnamon-desktop-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: optional
  - depends: libcinnamon-desktop4 (= 6.6.2+zena)

  </details>

- **libcinnamon-desktop-dev**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon shared utility library - development files
  - Install: `sudo apt-get install libcinnamon-desktop-dev`
  - Install (apt): `sudo apt install libcinnamon-desktop-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cinnamondesktop-3.0 (= 6.6.2+zena), libcinnamon-desktop4 (= 6.6.2+zena), libgtk-3-dev (>= 3.3.16), libxkbfile-dev

  </details>

- **libcinnamon-desktop4**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon shared utility library.
  - Install: `sudo apt-get install libcinnamon-desktop4`
  - Install (apt): `sudo apt install libcinnamon-desktop4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 6.6.2+zena), libc6 (>= 2.38), libcairo2 (>= 1.10.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.9.10), libsystemd0, libudev1 (>= 196), libx11-6
  - recommends: hwdata (>= 0.227-1)

  </details>

- **libcinnamon-menu-3-0**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-0`
  - Install (apt): `sudo apt install libcinnamon-menu-3-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0t64 (>= 2.79.0)

  </details>

- **libcinnamon-menu-3-0-dbg**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-0-dbg`
  - Install (apt): `sudo apt install libcinnamon-menu-3-0-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: optional
  - depends: libcinnamon-menu-3-0 (= 6.6.0+zena)

  </details>

- **libcinnamon-menu-3-dev**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-dev`
  - Install (apt): `sudo apt install libcinnamon-menu-3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cmenu-3.0 (= 6.6.0+zena), libcinnamon-menu-3-0 (= 6.6.0+zena), libglib2.0-dev (>= 2.30.0)

  </details>

- **libcjs-dbg**
  - Latest version: 115.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install libcjs-dbg`
  - Install (apt): `sudo apt install libcjs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcjs0 (= 115.1+zena)

  </details>

- **libcjs-dev**
  - Latest version: 115.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Mozilla-based javascript bindings for Cinnamon platform
  - Install: `sudo apt-get install libcjs-dev`
  - Install (apt): `sudo apt install libcjs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcairo2-dev, libcjs0 (= 115.1+zena), libgirepository1.0-dev (>= 1.64), libmozjs-115-dev

  </details>

- **libcjs0**
  - Latest version: 115.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install libcjs0`
  - Install (apt): `sudo apt install libcjs0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: gir1.2-gio-2.0, gir1.2-girepository-2.0, gir1.2-glib-2.0, gir1.2-gobject-2.0, libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.14.0), libffi8 (>= 3.4), libgcc-s1 (>= 3.0), libgirepository-1.0-1 (>= 1.71.0), libgirepository-1.0-1-with-libffi8 (>= 1.71), libglib2.0-0t64 (>= 2.79.0), libmozjs-115-0t64 (>= 115.10.0), libreadline8t64 (>= 6.0), libstdc++6 (>= 11), libx11-6
  - conflicts: libcjs0a, libcjs0c, libcjs0e, libcjs0f
  - replaces: libcjs0a, libcjs0c, libcjs0e, libcjs0f

  </details>

- **libcscreensaver-dbg**
  - Latest version: 6.6.1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon Screensaver library - debug symbols
  - Install: `sudo apt-get install libcscreensaver-dbg`
  - Install (apt): `sudo apt install libcscreensaver-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon-screensaver (= 6.6.1+zena)

  </details>

- **libcvc-dbg**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library - debug symbols
  - Install: `sudo apt-get install libcvc-dbg`
  - Install (apt): `sudo apt install libcvc-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: optional
  - depends: libcvc0 (= 6.6.2+zena)

  </details>

- **libcvc-dev**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library - development files
  - Install: `sudo apt-get install libcvc-dev`
  - Install (apt): `sudo apt install libcvc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cvc-1.0 (= 6.6.2+zena), libcvc0 (= 6.6.2+zena), libpulse-dev

  </details>

- **libcvc0**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library
  - Install: `sudo apt-get install libcvc0`
  - Install (apt): `sudo apt install libcvc0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0t64 (>= 2.79.0), libpulse-mainloop-glib0 (>= 12.99.3), libpulse0 (>= 12.99.3)

  </details>

- **libdvdcss2**
  - Latest version: 1.4.2-dmo1
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: Simple foundation for reading DVDs - runtime libraries
  - Homepage: http://download.videolan.org/
  - Install: `sudo apt-get install libdvdcss2`
  - Install (apt): `sudo apt install libdvdcss2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Christian Marillat <marillat@deb-multimedia.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.7)
  - replaces: libdvdcss-dev (<= 0.0.3-3), libdvdcss0 (<= 1.0.0-0.0), libdvdcss2-dev (<= 1.2.10-0.0)
  - provides: libdvdcss

  </details>

- **libfcitx-config4**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - configuration support library
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install libfcitx-config4`
  - Install (apt): `sudo apt install libfcitx-config4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libfcitx-utils0 (>= 4.2.7)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)

  </details>

- **libfcitx-core0**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - library of core functions
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install libfcitx-core0`
  - Install (apt): `sudo apt install libfcitx-core0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libfcitx-config4 (>= 4.2.8.1), libfcitx-utils0 (>= 4.2.8.4)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)

  </details>

- **libfcitx-gclient1**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - D-Bus client library for Glib
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install libfcitx-gclient1`
  - Install (apt): `sudo apt install libfcitx-gclient1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libdbus-1-3 (>= 1.9.14), libfcitx-utils0 (>= 4.2.7), libglib2.0-0t64 (>= 2.79.0)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs-gclient (<< 1:4.2.8.5-3)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs-gclient (<< 1:4.2.8.5-3)

  </details>

- **libfcitx-utils0**
  - Latest version: 1:4.2.9.9+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Flexible Input Method Framework - utility support library
  - Homepage: https://github.com/fcitx/fcitx
  - Install: `sudo apt-get install libfcitx-utils0`
  - Install (apt): `sudo apt install libfcitx-utils0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38)
  - suggests: fcitx (>= 1:4.2.9.9+mint1+wilma)
  - breaks: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)
  - replaces: fcitx (<< 1:4.2.9.9+mint1+wilma), fcitx-libs (<< 1:4.2.8.5-3)

  </details>

- **libmate-desktop-2-17t64**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library with common API for various MATE modules (library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-2-17t64`
  - Install (apt): `sudo apt install libmate-desktop-2-17t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: iso-codes, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo2 (>= 1.10.0), libdconf1 (>= 0.14.0), libgdk-pixbuf-2.0-0 (>= 2.36.5), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.22.0), libpango-1.0-0 (>= 1.14.0), libstartup-notification0 (>= 0.4), libx11-6, libxrandr2 (>= 2:1.2.99.3)
  - breaks: libmate-desktop-2-17 (<< 1.26.2-1.1mint1+zara), libmatedesktop (<< 1.6.1)
  - replaces: libmate-desktop-2-17, libmatedesktop (<< 1.6.1)
  - provides: libmate-desktop-2-17 (= 1.26.2-1.1mint1+zara), libmatedesktop

  </details>

- **libmate-desktop-dev**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library with common API for various MATE modules (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-dev`
  - Install (apt): `sudo apt install libmate-desktop-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matedesktop-2.0 (= 1.26.2-1.1mint1+zara), libdconf-dev, libgdk-pixbuf-2.0-dev, libgtk-3-dev, libmate-desktop-2-17t64 (= 1.26.2-1.1mint1+zara), libstartup-notification0-dev
  - breaks: gir1.2-mate-desktop (<< 1.18.0-2~), libmatedesktop-dev
  - replaces: gir1.2-mate-desktop (<< 1.18.0-2~), libmatedesktop-dev

  </details>

- **libmate-desktop-doc**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Library with common API for various MATE modules (documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-doc`
  - Install (apt): `sudo apt install libmate-desktop-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional
  - breaks: libmatedesktop-doc
  - replaces: libmatedesktop-doc

  </details>

- **libmate-menu-dev**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: implementation of the freedesktop menu specs for MATE (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-menu-dev`
  - Install (apt): `sudo apt install libmate-menu-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matemenu-2.0 (= 1.26.1+mint1), libglib2.0-dev, libmate-menu2 (= 1.26.1+mint1)
  - breaks: gir1.2-mate-menu (<< 1.18.1-2~), libmatemenu-dev
  - replaces: gir1.2-mate-menu (<< 1.18.1-2~), libmatemenu-dev

  </details>

- **libmate-menu2**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: implementation of the freedesktop menu specification for MATE (library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-menu2`
  - Install (apt): `sudo apt install libmate-menu2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0t64 (>= 2.79.0)
  - breaks: libmate-slab0 (<< 1.22.0), libmatemenu, mate-menus (<= 1.0.2-1), mate-panel (<< 1.22.0), mate-screensaver (<< 1.22.0), python-mate-menu (<< 1.22.0)
  - replaces: libmatemenu, mate-menus (<= 1.0.2-1), python-mate-menu (<< 1.22.0)

  </details>

- **libmate-slab-dev**
  - Latest version: 1.26.1+mint2
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: beautification app library (development headers)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-slab-dev`
  - Install (apt): `sudo apt install libmate-slab-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libmate-slab0t64 (= 1.26.1+mint2)
  - provides: libmate-slab0-dev

  </details>

- **libmate-slab0t64**
  - Latest version: 1.26.1+mint2
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: beautification app library
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-slab0t64`
  - Install (apt): `sudo apt install libmate-slab0t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libmate-desktop-2-17t64 (>= 1.25), libmate-menu2 (>= 1.22.0)
  - breaks: libmate-slab0 (<< 1.26.1+mint2)
  - replaces: libmate-slab0
  - provides: libmate-slab0 (= 1.26.1+mint2)

  </details>

- **libmate-window-settings-dev**
  - Latest version: 1.26.1+mint2
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: utilities to configure the MATE desktop (window settings headers)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-window-settings-dev`
  - Install (apt): `sudo apt install libmate-window-settings-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libmate-window-settings1t64 (= 1.26.1+mint2)

  </details>

- **libmate-window-settings1t64**
  - Latest version: 1.26.1+mint2
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: utilities to configure the MATE desktop (window settings library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-window-settings1t64`
  - Install (apt): `sudo apt install libmate-window-settings1t64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0t64 (>= 2.36.0), libgtk-3-0t64 (>= 3.0.0), libmate-desktop-2-17t64 (>= 1.25)
  - breaks: libmate-window-settings1 (<< 1.26.1+mint2), mate-control-center (<< 1.9.0)
  - replaces: libmate-window-settings1
  - provides: libmate-window-settings1 (= 1.26.1+mint2)

  </details>

- **libmatedict-dev**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE desktop utilities (matedict development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatedict-dev`
  - Install (apt): `sudo apt install libmatedict-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libmatedict6 (= 1.26.1+mint1)
  - breaks: mate-utils (<< 1.5.0), mate-utils-dev (<< 1.8.0)
  - replaces: mate-utils-dev (<< 1.8.0)

  </details>

- **libmatedict6**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE desktop utilities (matedict library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatedict6`
  - Install (apt): `sudo apt install libmatedict6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.19.12), libpango-1.0-0 (>= 1.14.0)
  - breaks: mate-utils (<< 1.8.0)
  - replaces: mate-utils (<< 1.8.0)

  </details>

- **libmuffin-dev**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: window and compositing manager (development files)
  - Install: `sudo apt-get install libmuffin-dev`
  - Install (apt): `sudo apt install libmuffin-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-meta-muffin-0.0 (= 6.6.2+zena), libatk1.0-dev, libcairo2-dev, libcinnamon-desktop-dev (>= 5.4), libdrm-dev, libegl1-mesa-dev, libgbm-dev, libgdk-pixbuf-2.0-dev | libgdk-pixbuf2.0-dev, libglib2.0-dev, libglvnd-dev, libgraphene-1.0-dev (>= 1.9.3), libgtk-3-dev, libinput-dev (>= 1.19.0), libjson-glib-dev, libmuffin0 (= 6.6.2+zena), libpango1.0-dev, libudev-dev, libx11-dev, libxcomposite-dev, libxdamage-dev, libxext-dev, libxfixes-dev, libxi-dev, libxrandr-dev
  - breaks: libmuffin0 (<< 5.3)
  - replaces: libmuffin0 (<< 5.3)

  </details>

- **libmuffin0**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: window and compositing manager (shared library)
  - Install: `sudo apt-get install libmuffin0`
  - Install (apt): `sudo apt install libmuffin0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: adwaita-icon-theme, libatk1.0-0t64 (>= 2.2.0), libc6 (>= 2.38), libcairo-gobject2 (>= 1.12.16), libcairo2 (>= 1.14.0), libcanberra0t64 (>= 0.2), libcinnamon-desktop4 (>= 2.0.4), libdrm2 (>= 2.4.83), libegl1, libfontconfig1 (>= 2.12.6), libfribidi0 (>= 1.0.0), libgbm1 (>= 17.1.0~rc2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgl1, libglib2.0-0t64 (>= 2.79.0), libgraphene-1.0-0 (>= 1.9.4), libgtk-3-0t64 (>= 3.19.12), libgudev-1.0-0 (>= 232), libice6 (>= 1:1.0.0), libinput10 (>= 1.19.0), libjson-glib-1.0-0 (>= 1.5.2), libpango-1.0-0 (>= 1.37.5), libpangocairo-1.0-0 (>= 1.18.0), libpangoft2-1.0-0 (>= 1.14.0), libsm6, libstartup-notification0 (>= 0.11), libsystemd0 (>= 213), libudev1 (>= 183), libwacom9 (>= 2.0.0), libwayland-server0 (>= 1.20), libx11-6 (>= 2:1.2.99.901), libx11-xcb1 (>= 2:1.8.7), libxau6 (>= 1:1.0.9), libxcb-randr0 (>= 1.12), libxcb-res0 (>= 1.10), libxcb1, libxcomposite1 (>= 1:0.4.5), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6 (>= 2:1.3.0), libxfixes3 (>= 1:5.0), libxi6 (>= 2:1.6.99.1), libxinerama1 (>= 2:1.1.4), libxkbcommon-x11-0 (>= 0.5.0), libxkbcommon0 (>= 0.5.0), libxkbfile1 (>= 1:1.1.0), libxrandr2 (>= 2:1.5.0), libxtst6, muffin-common (>= 6.6.2+zena)
  - breaks: apparmor (<< 2.13.3-5~)
  - replaces: muffin-doc

  </details>

- **libnemo-extension-dev**
  - Latest version: 6.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: libraries for nemo components - development version
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install libnemo-extension-dev`
  - Install (apt): `sudo apt install libnemo-extension-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-nemo-3.0 (= 6.6.3+zena), libglib2.0-dev (>= 2.45.7), libgtk-3-dev (>= 3.10), libnemo-extension1 (= 6.6.3+zena)

  </details>

- **libnemo-extension1**
  - Latest version: 6.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: libraries for nemo components - runtime version
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install libnemo-extension1`
  - Install (apt): `sudo apt install libnemo-extension1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.10), libpango-1.0-0 (>= 1.14.0)
  - breaks: libnemo-extension1a
  - replaces: libnemo-extension1a
  - provides: libnemo-extension1a

  </details>

- **libnma-common**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GUI library - translations
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-common`
  - Install (apt): `sudo apt install libnma-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: network-manager-gnome (<< 1.30.0)

  </details>

- **libnma-dev**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GTK 3 GUI library - development files
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-dev`
  - Install (apt): `sudo apt install libnma-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-nma-1.0 (= 1.10.6+mint1+wilma), libnm-dev, libnma-headers (= 1.10.6+mint1+wilma), libnma0 (= 1.10.6+mint1+wilma)

  </details>

- **libnma-doc**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GUI library - reference docs
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-doc`
  - Install (apt): `sudo apt install libnma-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional
  - breaks: libnma-dev (<< 1.8.34-2~)
  - replaces: libnma-dev (<< 1.8.34-2~)

  </details>

- **libnma-gtk4-0**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GUI GTK4 library
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-gtk4-0`
  - Install (apt): `sudo apt install libnma-gtk4-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcairo2 (>= 1.2.4), libgck-2-2 (>= 4.0.0), libgcr-4-4 (>= 3.8.0), libglib2.0-0t64 (>= 2.38.0), libgtk-4-1 (>= 4.0.0), libnm0 (>= 1.8.0), libnma-common (= 1.10.6+mint1+wilma)

  </details>

- **libnma-gtk4-dev**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GTK 4 GUI library - development files
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-gtk4-dev`
  - Install (apt): `sudo apt install libnma-gtk4-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-nma4-1.0 (= 1.10.6+mint1+wilma), libnm-dev, libnma-gtk4-0 (= 1.10.6+mint1+wilma), libnma-headers (= 1.10.6+mint1+wilma)

  </details>

- **libnma-headers**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GUI library - header files
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-headers`
  - Install (apt): `sudo apt install libnma-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - suggests: libnma-gtk4-dev | libnma-dev
  - breaks: libnma-dev (<< 1.8.34-2~)
  - replaces: libnma-dev (<< 1.8.34-2~)

  </details>

- **libnma0**
  - Latest version: 1.10.6+mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: NetworkManager GUI library
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma0`
  - Install (apt): `sudo apt install libnma0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.38), libcairo2 (>= 1.2.4), libgck-2-2 (>= 4.0.0), libgcr-4-4 (>= 3.8.0), libglib2.0-0t64 (>= 2.38.0), libgtk-3-0t64 (>= 3.21.5), libnm0 (>= 1.8.0), libnma-common (= 1.10.6+mint1+wilma)

  </details>

- **libpackagekit-glib2-18**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library for accessing PackageKit using GLib
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install libpackagekit-glib2-18`
  - Install (apt): `sudo apt install libpackagekit-glib2-18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0t64 (>= 2.79.0)

  </details>

- **libpackagekit-glib2-dev**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library for accessing PackageKit using GLib (development files)
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install libpackagekit-glib2-dev`
  - Install (apt): `sudo apt install libpackagekit-glib2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-packagekitglib-1.0 (= 1.2.8+mint2+xia), libdbus-1-dev, libglib2.0-dev, libpackagekit-glib2-18 (= 1.2.8+mint2+xia), libsqlite3-dev

  </details>

- **libpam-fingwit**
  - Latest version: 1.0.8+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Smart PAM module for fingerprint authentication
  - Install: `sudo apt-get install libpam-fingwit`
  - Install (apt): `sudo apt install libpam-fingwit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: fprintd, libc6 (>= 2.14), libpam0g (>= 0.99.7.1), python3, python3-gi

  </details>

- **libthunarx-3-0**
  - Latest version: 4.18.8+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: extension library for thunar
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install libthunarx-3-0`
  - Install (apt): `sudo apt install libthunarx-3-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libexif12 (>= 0.6.21-1~), libexo-2-0 (>= 4.17.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.56.0), libgtk-3-0t64 (>= 3.21.4), libpango-1.0-0 (>= 1.14.0), libpcre2-8-0 (>= 10.22), libx11-6, libxfce4ui-2-0 (>= 4.17.6), libxfce4util7 (>= 4.17.2), libxfconf-0-3 (>= 4.6.0), thunar-data
  - recommends: libxfce4panel-2.0-4 (>= 4.13.0)

  </details>

- **libthunarx-3-dev**
  - Latest version: 4.18.8+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Development files for libthunarx
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install libthunarx-3-dev`
  - Install (apt): `sudo apt install libthunarx-3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-thunarx-3.0 (= 4.18.8+mint1), libglib2.0-dev, libgtk-3-dev, libthunarx-3-0 (= 4.18.8+mint1), thunar-data (= 4.18.8+mint1)

  </details>

- **libxapp-dbg**
  - Latest version: 3.2.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: XApp library - debug symbols
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install libxapp-dbg`
  - Install (apt): `sudo apt install libxapp-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libxapp1 (= 3.2.2+zena)

  </details>

- **libxapp-dev**
  - Latest version: 3.2.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: XApp library - development files
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install libxapp-dev`
  - Install (apt): `sudo apt install libxapp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xapp-1.0 (= 3.2.2+zena), libcairo2-dev, libglib2.0-dev (>= 2.44), libgnomekbd-dev, libgtk-3-dev (>= 3.16), libxapp1 (= 3.2.2+zena), libxkbfile-dev

  </details>

- **libxapp1**
  - Latest version: 3.2.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: XApp library
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install libxapp1`
  - Install (apt): `sudo apt install libxapp1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libdbusmenu-gtk3-4 (>= 0.4.2), libgdk-pixbuf-2.0-0 (>= 2.23.0), libglib2.0-0t64 (>= 2.79.0), libgnomekbd8 (>= 3.6.0), libgtk-3-0t64 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libx11-6, xapps-common (>= 3.2.2+zena)

  </details>

- **libxreaderdocument-dev**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document rendering library (development files)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderdocument-dev`
  - Install (apt): `sudo apt install libxreaderdocument-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: libxreaderdocument3 (= 4.6.3+zena)

  </details>

- **libxreaderdocument3**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document rendering library
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderdocument3`
  - Install (apt): `sudo apt install libxreaderdocument3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libarchive13t64 (>= 3.6.0), libc6 (>= 2.35), libcairo2 (>= 1.10.0), libdjvulibre21 (>= 3.5.28), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libgxps2t64 (>= 0.2.1), libjs-mathjax, libkpathsea6 (>= 2023.20230311.66589), libpoppler-glib8t64 (>= 20.09.0), libspectre1 (>= 0.2.3), libtiff6 (>= 4.0.3), libxml2 (>= 2.7.4), zlib1g (>= 1:1.2.3.4)

  </details>

- **libxreaderdocument3-dbg**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document rendering library (debugging symbols)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderdocument3-dbg`
  - Install (apt): `sudo apt install libxreaderdocument3-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libxreaderdocument3 (= 4.6.3+zena)

  </details>

- **libxreaderview-dev**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document viewing library (development files)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderview-dev`
  - Install (apt): `sudo apt install libxreaderview-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: libxreaderview3 (= 4.6.3+zena)

  </details>

- **libxreaderview3**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document viewing library
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderview3`
  - Install (apt): `sudo apt install libxreaderview3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.29), libcairo2 (>= 1.14.0), libgail-3-0t64 (>= 3.0.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.19.12), libpango-1.0-0 (>= 1.14.0), libwebkit2gtk-4.1-0 (>= 2.5.3), libxreaderdocument3 (= 4.6.3+zena)

  </details>

- **libxreaderview3-dbg**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document viewing library (debugging symbols)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install libxreaderview3-dbg`
  - Install (apt): `sudo apt install libxreaderview3-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libxreaderview3 (= 4.6.3+zena)

  </details>

- **lightdm-settings**
  - Latest version: 2.1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: LightDM configuration tool
  - Install: `sudo apt-get install lightdm-settings`
  - Install (apt): `sudo apt install lightdm-settings`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: pkexec, python3, python3-setproctitle, x11-xserver-utils

  </details>

- **linuxmint-keyring**
  - Latest version: 2022.06.21
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: GnuPG key of the Linux Mint repository
  - Install: `sudo apt-get install linuxmint-keyring`
  - Install (apt): `sudo apt install linuxmint-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: important
  - depends: gnupg (>= 1.0.6-4)

  </details>

- **live-installer**
  - Latest version: 2025.03.28
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Live Installer
  - Install: `sudo apt-get install live-installer`
  - Install (apt): `sudo apt install live-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, circle-flags-svg, desktop-file-utils, gdisk, gir1.2-webkit2-4.1, gparted, iso-codes, isoquery, locales, parted, python3, python3-distro, python3-gi-cairo, python3-parted, python3-pil, rsync, shared-mime-info

  </details>


### <a id="packages-M"></a>M

- **mate-control-center**
  - Latest version: 1.26.1+mint2
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: utilities to configure the MATE desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-control-center`
  - Install (apt): `sudo apt install mate-control-center`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: caja-common (>= 1.8.0), desktop-file-utils, gsettings-desktop-schemas, libaccountsservice0 (>= 0.6.21), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libcanberra-gtk3-0t64 (>= 0.25), libcanberra0t64 (>= 0.2), libdconf1 (>= 0.14.0), libfontconfig1 (>= 2.12.6), libfreetype6 (>= 2.2.1), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libglib2.0-bin, libgtk-3-0t64 (>= 3.21.4), libmarco-private2 (>= 1.22.2), libmate-desktop-2-17t64 (>= 1.25), libmate-slab0t64 (= 1.26.1+mint2), libmate-window-settings1t64 (= 1.26.1+mint2), libmatekbd4 (>= 1.18), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), libx11-6, libxcursor1 (>> 1.1.2), libxi6 (>= 2:1.2.0), libxklavier16 (>= 5.0), libxml2 (>= 2.7.4), libxss1, marco-common (>= 1.18), mate-control-center-common (>= 1.26.1+mint2), mate-desktop (>= 1.22), mate-icon-theme, mate-menus, mate-settings-daemon (>= 1.22)
  - suggests: gconf2
  - breaks: ubuntu-mate-default-settings (<< 16.04)

  </details>

- **mate-control-center-common**
  - Latest version: 1.26.1+mint2
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: utilities to configure the MATE desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-control-center-common`
  - Install (apt): `sudo apt install mate-control-center-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-control-center (<< 1.11.0)

  </details>

- **mate-desktop**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Library with common API for various MATE modules
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-desktop`
  - Install (apt): `sudo apt install mate-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: hicolor-icon-theme, libc6 (>= 2.34), libglib2.0-0t64 (>= 2.50.0), libgtk-3-0t64 (>= 3.22.0), libmate-desktop-2-17t64 (>= 1.10.0), mate-desktop-common (= 1.26.2-1.1mint1+zara)
  - recommends: mate-user-guide
  - suggests: mate-desktop-environment
  - breaks: mate-desktop-gnome
  - replaces: mate-desktop-gnome

  </details>

- **mate-desktop-common**
  - Latest version: 1.26.2-1.1mint1+zara
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Library with common API for various MATE modules (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-desktop-common`
  - Install (apt): `sudo apt install mate-desktop-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-desktop (<< 1.1.1-1)
  - replaces: mate-desktop (<< 1.1.1-1)

  </details>

- **mate-desktop-environment**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: MATE desktop environment - full desktop with extra components
  - Install: `sudo apt-get install mate-desktop-environment`
  - Install (apt): `sudo apt install mate-desktop-environment`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mate-desktop-environment-core, mint-meta-mate

  </details>

- **mate-desktop-environment-core**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: MATE Desktop Environment (essential components, metapackage)
  - Install: `sudo apt-get install mate-desktop-environment-core`
  - Install (apt): `sudo apt install mate-desktop-environment-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: caja, marco, mate-control-center, mate-desktop, mate-icon-theme, mate-menus, mate-notification-daemon, mate-panel, mate-polkit, mate-session-manager, mate-settings-daemon, mate-terminal

  </details>

- **mate-media**
  - Latest version: 1.26.2+mint2+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE media utilities
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-media`
  - Install (apt): `sudo apt install mate-media`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libcanberra-gtk3-0t64 (>= 0.25), libcanberra0t64 (>= 0.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libmate-desktop-2-17t64 (>= 1.18), libmate-panel-applet-4-1 (>= 1.22), libmatemixer0 (>= 1.18), libpango-1.0-0 (>= 1.14.0), libxapp1 (>= 1.6.9), libxml2 (>= 2.7.4), mate-desktop-common (>= 1.18), mate-media-common (= 1.26.2+mint2+wilma)
  - recommends: alsa-utils, sound-theme-freedesktop
  - breaks: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)
  - replaces: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)

  </details>

- **mate-media-common**
  - Latest version: 1.26.2+mint2+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: MATE media utilities (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-media-common`
  - Install (apt): `sudo apt install mate-media-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - breaks: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)
  - replaces: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)

  </details>

- **mate-menus**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: implementation of the freedesktop menu specification for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-menus`
  - Install (apt): `sudo apt install mate-menus`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: gir1.2-matemenu-2.0 (>= 1.26.1+mint1)
  - breaks: mate-control-center (<< 1.13.0)

  </details>

- **mate-polkit**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE authentication agent for PolicyKit-1
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-polkit`
  - Install (apt): `sudo apt install mate-polkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: accountsservice, libc6 (>= 2.34), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.16.2), libpolkit-agent-1-0 (>= 0.99), libpolkit-gobject-1-0 (>= 0.99), mate-polkit-common (>= 1.26.1+mint1), polkitd
  - provides: polkit-1-auth-agent

  </details>

- **mate-polkit-bin**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: MATE authentication agent for PolicyKit-1 (executable wrapper script)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-polkit-bin`
  - Install (apt): `sudo apt install mate-polkit-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: mate-polkit (>= 1.26.1+mint1)
  - breaks: mate-polkit (<< 1.26.1-2~)
  - replaces: mate-polkit (<< 1.26.1-2~)

  </details>

- **mate-polkit-common**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: MATE authentication agent for PolicyKit-1 (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-polkit-common`
  - Install (apt): `sudo apt install mate-polkit-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - breaks: mate-polkit (<< 1.8.0)

  </details>

- **mate-power-manager**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: power management tool for the MATE desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-power-manager`
  - Install (apt): `sudo apt install mate-power-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: default-dbus-session-bus | dbus-session-bus, libc6 (>= 2.34), libcairo2 (>= 1.10.0), libcanberra-gtk3-0t64 (>= 0.25), libcanberra0t64 (>= 0.2), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.88), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.4), libmate-panel-applet-4-1 (>= 1.18), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.22.0), libpangocairo-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.11), libupower-glib3 (>= 0.99.8), libx11-6, libxapp1 (>= 1.6.9), libxext6, libxrandr2 (>= 2:1.2.99.2), mate-notification-daemon | notification-daemon, mate-power-manager-common (= 1.26.1+mint1), pkexec, polkitd, systemd | elogind | consolekit, upower
  - suggests: mate-polkit

  </details>

- **mate-power-manager-common**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: power management tool for the MATE desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-power-manager-common`
  - Install (apt): `sudo apt install mate-power-manager-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-power-manager (<< 1.9.0)
  - replaces: mate-power-manager (<< 1.9.0)

  </details>

- **mate-terminal**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE terminal emulator application
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-terminal`
  - Install (apt): `sudo apt install mate-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: gsettings-desktop-schemas, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libdconf1 (>= 0.14.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.22), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libsm6, libvte-2.91-0 (>= 0.51.90), libx11-6, mate-desktop-common, mate-terminal-common (= 1.26.1+mint1)
  - provides: x-terminal-emulator

  </details>

- **mate-terminal-common**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: MATE terminal emulator application (common files)
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-terminal-common`
  - Install (apt): `sudo apt install mate-terminal-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-terminal (<< 1.1.0-2)
  - replaces: mate-terminal (<< 1.1.0-2)

  </details>

- **mate-utils**
  - Latest version: 1.26.1+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: MATE desktop utilities
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-utils`
  - Install (apt): `sudo apt install mate-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.10.0), libcanberra-gtk3-0t64 (>= 0.25), libcanberra0t64 (>= 0.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libgtop-2.0-11 (>= 2.22.3), libice6 (>= 1:1.0.0), libmate-panel-applet-4-1 (>= 1.18), libmatedict6 (= 1.26.1+mint1), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsm6, libudisks2-0 (>= 2.0.0), libx11-6, libxext6, mate-desktop-common, mate-utils-common (>= 1.26.1+mint1), zlib1g (>= 1:1.1.4)

  </details>

- **mate-utils-common**
  - Latest version: 1.26.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: MATE desktop utilities (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-utils-common`
  - Install (apt): `sudo apt install mate-utils-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-utils (<< 1.9.0)
  - replaces: mate-utils (<< 1.9.0)

  </details>

- **mint-artwork**
  - Latest version: 1.9.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Linux Mint Artwork and Resources
  - Install: `sudo apt-get install mint-artwork`
  - Install (apt): `sudo apt install mint-artwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: mint-cursor-themes, mint-themes | mint-themes-legacy, mint-x-icons, mint-y-icons
  - conflicts: ldm-mint-theme, mint-artwork-cinnamon, mint-artwork-common, mint-artwork-debian, mint-artwork-debian-cinnamon, mint-artwork-debian-mate, mint-artwork-gnome, mint-artwork-mate, mint-artwork-xfce, mint-backgrounds-xfce
  - replaces: ldm-mint-theme, mint-artwork-cinnamon, mint-artwork-common, mint-artwork-debian, mint-artwork-debian-cinnamon, mint-artwork-debian-mate, mint-artwork-gnome, mint-artwork-mate, mint-artwork-xfce, mint-backgrounds-xfce
  - provides: mint-mate-default-settings

  </details>

- **mint-backgrounds-maya**
  - Latest version: 1.5
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 13 Maya
  - Install: `sudo apt-get install mint-backgrounds-maya`
  - Install (apt): `sudo apt install mint-backgrounds-maya`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-nadia**
  - Latest version: 1.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 14 Nadia
  - Install: `sudo apt-get install mint-backgrounds-nadia`
  - Install (apt): `sudo apt install mint-backgrounds-nadia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-olivia**
  - Latest version: 1.7
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 15 Olivia
  - Install: `sudo apt-get install mint-backgrounds-olivia`
  - Install (apt): `sudo apt install mint-backgrounds-olivia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-petra**
  - Latest version: 1.7
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 16 Petra
  - Install: `sudo apt-get install mint-backgrounds-petra`
  - Install (apt): `sudo apt install mint-backgrounds-petra`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-qiana**
  - Latest version: 1.5
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 17 Qiana
  - Install: `sudo apt-get install mint-backgrounds-qiana`
  - Install (apt): `sudo apt install mint-backgrounds-qiana`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-backgrounds-xfce (<= 2014.06.21)
  - replaces: mint-backgrounds-xfce (<= 2014.06.21)

  </details>

- **mint-backgrounds-rafaela**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 17.2 Rafaela
  - Install: `sudo apt-get install mint-backgrounds-rafaela`
  - Install (apt): `sudo apt install mint-backgrounds-rafaela`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-rebecca**
  - Latest version: 1.5
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 17.1 Rebecca
  - Install: `sudo apt-get install mint-backgrounds-rebecca`
  - Install (apt): `sudo apt install mint-backgrounds-rebecca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-retro**
  - Latest version: 1.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Backgrounds from early versions of Linux Mint
  - Install: `sudo apt-get install mint-backgrounds-retro`
  - Install (apt): `sudo apt install mint-backgrounds-retro`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-rosa**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 17.3 Rosa
  - Install: `sudo apt-get install mint-backgrounds-rosa`
  - Install (apt): `sudo apt install mint-backgrounds-rosa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-sarah**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 18 Sarah
  - Install: `sudo apt-get install mint-backgrounds-sarah`
  - Install (apt): `sudo apt install mint-backgrounds-sarah`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-serena**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 18.1 Serena
  - Install: `sudo apt-get install mint-backgrounds-serena`
  - Install (apt): `sudo apt install mint-backgrounds-serena`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-sonya**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 18.2 Sonya
  - Install: `sudo apt-get install mint-backgrounds-sonya`
  - Install (apt): `sudo apt install mint-backgrounds-sonya`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-sylvia**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 18.3 Sylvia
  - Install: `sudo apt-get install mint-backgrounds-sylvia`
  - Install (apt): `sudo apt install mint-backgrounds-sylvia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - breaks: mint-artwork-kde (= 2.0.11)
  - replaces: mint-artwork-kde (= 2.0.11)

  </details>

- **mint-backgrounds-tara**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 19 Tara
  - Install: `sudo apt-get install mint-backgrounds-tara`
  - Install (apt): `sudo apt install mint-backgrounds-tara`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-tessa**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 19.1 Tessa
  - Install: `sudo apt-get install mint-backgrounds-tessa`
  - Install (apt): `sudo apt install mint-backgrounds-tessa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-tina**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 19.2 Tina
  - Install: `sudo apt-get install mint-backgrounds-tina`
  - Install (apt): `sudo apt install mint-backgrounds-tina`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-tricia**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 19.3 Tricia
  - Install: `sudo apt-get install mint-backgrounds-tricia`
  - Install (apt): `sudo apt install mint-backgrounds-tricia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-ulyana**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 20 Ulyana
  - Install: `sudo apt-get install mint-backgrounds-ulyana`
  - Install (apt): `sudo apt install mint-backgrounds-ulyana`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-ulyssa**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 20.1 Ulyssa
  - Install: `sudo apt-get install mint-backgrounds-ulyssa`
  - Install (apt): `sudo apt install mint-backgrounds-ulyssa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-uma**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 20.2 Uma
  - Install: `sudo apt-get install mint-backgrounds-uma`
  - Install (apt): `sudo apt install mint-backgrounds-uma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-una**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 20.3 Una
  - Install: `sudo apt-get install mint-backgrounds-una`
  - Install (apt): `sudo apt install mint-backgrounds-una`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-vanessa**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 21 Vanessa
  - Install: `sudo apt-get install mint-backgrounds-vanessa`
  - Install (apt): `sudo apt install mint-backgrounds-vanessa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-vera**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 21.1 Vera
  - Install: `sudo apt-get install mint-backgrounds-vera`
  - Install (apt): `sudo apt install mint-backgrounds-vera`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-victoria**
  - Latest version: 1.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 21.2 Victoria
  - Install: `sudo apt-get install mint-backgrounds-victoria`
  - Install (apt): `sudo apt install mint-backgrounds-victoria`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-virginia**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 21.3 Virginia
  - Install: `sudo apt-get install mint-backgrounds-virginia`
  - Install (apt): `sudo apt install mint-backgrounds-virginia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-wallpapers**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Desktop backgrounds - Wallpapers
  - Install: `sudo apt-get install mint-backgrounds-wallpapers`
  - Install (apt): `sudo apt install mint-backgrounds-wallpapers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-backgrounds-wilma**
  - Latest version: 1.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The desktop backgrounds for Linux Mint 22 Wilma
  - Install: `sudo apt-get install mint-backgrounds-wilma`
  - Install (apt): `sudo apt install mint-backgrounds-wilma`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-common**
  - Latest version: 2.5.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Common scripts and resources for Linux Mint
  - Install: `sudo apt-get install mint-common`
  - Install (apt): `sudo apt install mint-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, gir1.2-gtk-3.0, gir1.2-xapp-1.0, gir1.2-xmlb-2.0, libgtk3-perl, mint-translations, python3, python3-gi, python3-html2text

  </details>

- **mint-cursor-themes**
  - Latest version: 1.0.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Linux Mint Cursor themes
  - Install: `sudo apt-get install mint-cursor-themes`
  - Install (apt): `sudo apt install mint-cursor-themes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional

  </details>

- **mint-dev-pkg**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A dummy package for testing purpose
  - Install: `sudo apt-get install mint-dev-pkg`
  - Install (apt): `sudo apt install mint-dev-pkg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mint-dev-pkg-dep
  - recommends: mint-dev-pkg-rec

  </details>

- **mint-dev-pkg-debconf**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A dummy package for testing purpose
  - Install: `sudo apt-get install mint-dev-pkg-debconf`
  - Install (apt): `sudo apt install mint-dev-pkg-debconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-dev-pkg-dep**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A dummy package for testing purpose
  - Install: `sudo apt-get install mint-dev-pkg-dep`
  - Install (apt): `sudo apt install mint-dev-pkg-dep`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-dev-pkg-rec**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A dummy package for testing purpose
  - Install: `sudo apt-get install mint-dev-pkg-rec`
  - Install (apt): `sudo apt install mint-dev-pkg-rec`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - recommends: mint-dev-pkg-rec2

  </details>

- **mint-dev-pkg-rec2**
  - Latest version: 1.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A dummy package for testing purpose
  - Install: `sudo apt-get install mint-dev-pkg-rec2`
  - Install (apt): `sudo apt install mint-dev-pkg-rec2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-dev-tools**
  - Latest version: 1.5.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A collection of tools to develop/compile Linux Mint projects
  - Install: `sudo apt-get install mint-dev-tools`
  - Install (apt): `sudo apt install mint-dev-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, debhelper, devscripts, dpkg-dev, equivs, gir1.2-xapp-1.0, git, python3 (>= 3.3), python3-dbg, python3-pkg-resources, python3-polib, python3-psutil
  - recommends: awf, ccache, d-feet, dconf-editor, debuginfod, devhelp, gconf-editor, gdb, git-buildpackage, glade, gnome-api-docs, gnome-dbg, libxapp-dev, meld, meson, perf, pyrenamer, regexxer, sublime-merge, sublime-text, valgrind, wininfo

  </details>

- **mint-info-cinnamon**
  - Latest version: 2025.11.11
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Necessary information about the Linux Mint release and edition.
  - Install: `sudo apt-get install mint-info-cinnamon`
  - Install (apt): `sudo apt install mint-info-cinnamon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - provides: mint-info

  </details>

- **mint-info-mate**
  - Latest version: 2025.11.11
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Necessary information about the Linux Mint release and edition.
  - Install: `sudo apt-get install mint-info-mate`
  - Install (apt): `sudo apt install mint-info-mate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - provides: mint-info

  </details>

- **mint-info-xfce**
  - Latest version: 2025.11.11
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Necessary information about the Linux Mint release and edition.
  - Install: `sudo apt-get install mint-info-xfce`
  - Install (apt): `sudo apt install mint-info-xfce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - provides: mint-info

  </details>

- **mint-l-icons**
  - Latest version: 1.8.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Mint-L icon theme
  - Homepage: https://github.com/linuxmint/mint-l-icons
  - Install: `sudo apt-get install mint-l-icons`
  - Install (apt): `sudo apt install mint-l-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - breaks: mint-y-icons-legacy
  - replaces: mint-y-icons-legacy

  </details>

- **mint-l-theme**
  - Latest version: 2.0.6
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Mint-L theme
  - Install: `sudo apt-get install mint-l-theme`
  - Install (apt): `sudo apt install mint-l-theme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: mint-l-icons
  - breaks: mint-themes-legacy
  - replaces: mint-themes-legacy

  </details>

- **mint-live-session**
  - Latest version: 1.0.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A collection of files used in the live session
  - Install: `sudo apt-get install mint-live-session`
  - Install (apt): `sudo apt install mint-live-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-meta-cinnamon**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Set of packages installed by default in the Cinnamon edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-cinnamon`
  - Install (apt): `sudo apt install mint-meta-cinnamon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: bulky, cinnamon, cinnamon-control-center, cinnamon-screensaver, folder-color-switcher, gir1.2-gnomedesktop-3.0, gir1.2-nemo-3.0, mint-meta-core, nemo, nemo-fileroller, xdg-desktop-portal-xapp
  - conflicts: mint-meta-cinnamon-dvd, mint-meta-gnome, mint-meta-main, mint-meta-x64
  - replaces: mint-meta-cinnamon-dvd, mint-meta-gnome, mint-meta-main, mint-meta-x64

  </details>

- **mint-meta-codecs**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: All the packages required for multimedia support in Linux Mint.
  - Install: `sudo apt-get install mint-meta-codecs`
  - Install (apt): `sudo apt install mint-meta-codecs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: cabextract, gstreamer1.0-libav, gstreamer1.0-plugins-bad, gstreamer1.0-plugins-ugly, gstreamer1.0-vaapi, libavcodec-extra, libdvdcss2, libdvdnav4, libdvdread8, unshield

  </details>

- **mint-meta-core**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Core Linux Mint packages
  - Install: `sudo apt-get install mint-meta-core`
  - Install (apt): `sudo apt install mint-meta-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: linuxmint-keyring, mint-artwork, mint-info, mintbackup, mintdrivers, mintinstall, mintreport, mintsources, mintstick, mintsysadm, mintsystem, mintupdate, mintwelcome, plymouth-theme-ubuntu-text, ubuntu-dbgsym-keyring, ubuntu-system-adjustments
  - recommends: thingy

  </details>

- **mint-meta-mate**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Set of packages installed by default in the MATE edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-mate`
  - Install (apt): `sudo apt install mint-meta-mate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: bulky, caja, engrampa, folder-color-switcher, gnome-system-tools, libmatedesktop, libmatekbd, marco, mate-applets, mate-control-center, mate-desktop, mate-icon-theme, mate-indicator-applet, mate-media, mate-menus, mate-notification-daemon, mate-panel, mate-polkit, mate-power-manager, mate-screensaver, mate-sensors-applet, mate-session-manager, mate-settings-daemon, mate-system-monitor, mate-terminal, mate-user-guide, mate-utils, mint-meta-core, mintdesktop, mintmenu, xdg-desktop-portal-xapp

  </details>

- **mint-meta-xfce**
  - Latest version: 2025.12.15+mint22.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Set of packages installed by default in the Xfce edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-xfce`
  - Install (apt): `sudo apt install mint-meta-xfce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mint-meta-core, mintdesktop, mugshot, thunar, thunar-archive-plugin, thunar-media-tags-plugin, thunar-volman, xdg-desktop-portal-xapp, xfce4-appfinder, xfce4-cpufreq-plugin, xfce4-eyes-plugin, xfce4-mailwatch-plugin, xfce4-panel, xfce4-places-plugin, xfce4-screenshooter, xfce4-session, xfce4-settings, xfce4-systemload-plugin, xfce4-time-out-plugin, xfce4-timer-plugin, xfce4-verve-plugin, xfce4-whiskermenu-plugin, xfce4-xapp-status-plugin, xfconf, xfdesktop4, xfwm4

  </details>

- **mint-mirrors**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Linux Mint Repository mirrors
  - Install: `sudo apt-get install mint-mirrors`
  - Install (apt): `sudo apt install mint-mirrors`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - conflicts: mintupdate (<= 4.3.4)
  - replaces: mintupdate (<= 4.3.4), mintupdate-debian (<= 1.0.7)

  </details>

- **mint-themes**
  - Latest version: 2.3.8
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Mint themes
  - Install: `sudo apt-get install mint-themes`
  - Install (apt): `sudo apt install mint-themes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: mint-x-icons, mint-y-icons
  - conflicts: cinnamon-themes, mint-clearloox-theme, mint-themes-gtk3, mint-x-theme, mint-y-theme, mint-z-theme
  - replaces: cinnamon-themes, mint-clearloox-theme, mint-themes-gtk3, mint-x-theme, mint-y-theme, mint-z-theme

  </details>

- **mint-translations**
  - Latest version: 2026.01.08
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Translation files for Linux Mint
  - Install: `sudo apt-get install mint-translations`
  - Install (apt): `sudo apt install mint-translations`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-upgrade-info**
  - Latest version: 1.3.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Information about upgrade paths
  - Install: `sudo apt-get install mint-upgrade-info`
  - Install (apt): `sudo apt install mint-upgrade-info`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **mint-x-icons**
  - Latest version: 1.7.5
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Mint-X icon theme
  - Install: `sudo apt-get install mint-x-icons`
  - Install (apt): `sudo apt install mint-x-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional

  </details>

- **mint-y-icons**
  - Latest version: 1.9.1
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Mint-Y icon theme
  - Homepage: https://github.com/linuxmint/mint-y-icons
  - Install: `sudo apt-get install mint-y-icons`
  - Install (apt): `sudo apt install mint-y-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional

  </details>

- **mintbackup**
  - Latest version: 2.4.7
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Home Directory Backup Tool
  - Install: `sudo apt-get install mintbackup`
  - Install (apt): `sudo apt install mintbackup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptitude, aptkit, dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0, mint-common (>= 2), python3 (>= 3), python3-apt, python3-gi, python3-setproctitle

  </details>

- **mintchat**
  - Latest version: 2.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Chat integration for Linux Mint
  - Install: `sudo apt-get install mintchat`
  - Install (apt): `sudo apt install mintchat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: firefox, python3 (>= 3.3), python3-gi, webapp-manager

  </details>

- **mintdesktop**
  - Latest version: 3.7.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Desktop configuration tool
  - Install: `sudo apt-get install mintdesktop`
  - Install (apt): `sudo apt install mintdesktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-cli, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, mint-info, mintsystem, python3 (>= 3.3), python3-xapp (>= 1.6), wmctrl, xapps-common (>= 2.5.0)

  </details>

- **mintdrivers**
  - Latest version: 1.8.8
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Driver Manager
  - Install: `sudo apt-get install mintdrivers`
  - Install (apt): `sudo apt install mintdrivers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-packagekitglib-1.0, gir1.2-xapp-1.0, packagekit, python3 (>= 3.3), python3-gi, python3-psutil, ubuntu-drivers-common

  </details>

- **mintinstall**
  - Latest version: 8.4.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Software Manager
  - Install: `sudo apt-get install mintinstall`
  - Install (apt): `sudo apt install mintinstall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: app-install-data, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, libgtk3-perl, mint-common (>= 2.2.4), python3 (>= 3.4), python3-bs4, python3-gi-cairo, python3-lxml, python3-setproctitle, python3-xapp
  - preDepends: ca-certificates (>= 20210101)
  - recommends: flatpak, gir1.2-flatpak-1.0, xdg-desktop-portal-gtk

  </details>

- **mintlocale**
  - Latest version: 1.6.6
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Language selection tool
  - Install: `sudo apt-get install mintlocale`
  - Install (apt): `sudo apt install mintlocale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, gir1.2-accountsservice-1.0, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, im-config (>= 0.23-1), iso-flag-png, python3, python3-gi

  </details>

- **mintmenu**
  - Latest version: 6.2.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Advanced MATE menu
  - Install: `sudo apt-get install mintmenu`
  - Install (apt): `sudo apt install mintmenu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtk-3.0, gir1.2-matedesktop-2.0, gir1.2-matemenu-2.0, gir1.2-matepanelapplet-4.0, gir1.2-xapp-1.0, libglib2.0-bin, mate-menus, python3, python3-apt, python3-configobj, python3-gi-cairo, python3-setproctitle, python3-unidecode, python3-xapp, python3-xdg, python3-xlib, xdg-utils

  </details>

- **mintnanny**
  - Latest version: 1.6.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Domain blocker for Linux Mint
  - Install: `sudo apt-get install mintnanny`
  - Install (apt): `sudo apt install mintnanny`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mint-common, python3 (>= 3.3), python3-gi
  - conflicts: mintnanny-gnome, mintnanny-kde
  - replaces: mintnanny-gnome, mintnanny-kde

  </details>

- **mintreport**
  - Latest version: 1.6.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Troubleshooting tool for Linux Mint
  - Install: `sudo apt-get install mintreport`
  - Install (apt): `sudo apt install mintreport`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, dconf-gsettings-backend | gsettings-backend, gir1.2-gtksource-3.0, inxi, mesa-utils, python3, python3-apt, python3-configobj, python3-gi, python3-psutil, python3-pyudev, python3-setproctitle, python3-xapp (>= 3.0.0), vulkan-tools, xapp-symbolic-icons, xapps-common

  </details>

- **mintsources**
  - Latest version: 2.3.8
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Software Sources configuration tool
  - Install: `sudo apt-get install mintsources`
  - Install (apt): `sudo apt install mintsources`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-packagekitglib-1.0, gir1.2-pango-1.0, gir1.2-xapp-1.0, inxi, iso-flag-png, lsb-release, mint-mirrors, python3-apt, python3-gi, python3-gi-cairo, python3-pycurl, python3-repolib, python3-requests
  - replaces: software-properties-common (<< 1), software-properties-gtk (<< 1)

  </details>

- **mintstick**
  - Latest version: 1.6.6
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: write .img and .iso files to USB sticks
  - Install: `sudo apt-get install mintstick`
  - Install (apt): `sudo apt install mintstick`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: coreutils, exfatprogs | exfat-utils, genisoimage, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-polkit-1.0, gir1.2-udisks-2.0, gir1.2-xapp-1.0, ntfs-3g, parted, pkexec, procps, python3, python3-gi, python3-gnupg, python3-parted, python3-unidecode, util-linux
  - conflicts: usb-imagewriter
  - replaces: usb-imagewriter

  </details>

- **mintsysadm**
  - Latest version: 1.0.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: System Administration tool
  - Install: `sudo apt-get install mintsysadm`
  - Install (apt): `sudo apt install mintsysadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptkit, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, gir1.2-xapp-1.0, python3-gi, python3-gi-cairo, python3-xapp

  </details>

- **mintsystem**
  - Latest version: 8.6.5
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Linux Mint System Base Package
  - Install: `sudo apt-get install mintsystem`
  - Install (apt): `sudo apt install mintsystem`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <clem@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apt, aptitude, dconf-gsettings-backend | gsettings-backend, mint-common, mint-info, perl, python3 (>= 3.3), zenity

  </details>

- **mintupdate**
  - Latest version: 7.1.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: The Linux Mint Update Manager
  - Install: `sudo apt-get install mintupdate`
  - Install (apt): `sudo apt install mintupdate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apt, aptkit, dconf-gsettings-backend | gsettings-backend, distro-info-data, gir1.2-notify-0.7, gir1.2-xapp-1.0, lsb-release, mint-common (>= 2.4.2), mint-mirrors, mint-upgrade-info, psmisc, python3-apt, python3-multiprocess, python3-pycurl, python3-setproctitle, python3-xapp (>= 1.6), systemd

  </details>

- **mintupgrade**
  - Latest version: 2025.11.21
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Upgrade Tool
  - Install: `sudo apt-get install mintupgrade`
  - Install (apt): `sudo apt install mintupgrade`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: acpi, aptkit, crudini, dconf-gsettings-backend | gsettings-backend, debian-system-adjustments | ubuntu-system-adjustments, gir1.2-xapp-1.0 (>= 1.4), inxi, mintsources, mintupdate, python3, python3-apt, python3-gi, python3-setproctitle, xapps-common

  </details>

- **mintupload**
  - Latest version: 4.2.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Uploads files on the Internet
  - Install: `sudo apt-get install mintupload`
  - Install (apt): `sudo apt install mintupload`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-notify-0.7, gir1.2-xapp-1.0, libnotify-bin, python3, python3-configobj, python3-gi, python3-paramiko (>= 1.7.4), python3-pexpect

  </details>

- **mintwelcome**
  - Latest version: 2.6.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Welcome screen for Linux Mint
  - Install: `sudo apt-get install mintwelcome`
  - Install (apt): `sudo apt install mintwelcome`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: captain, mint-common, mint-info, python3 (>= 3.3), python3-gi, python3-xapp (>= 1.0.1)
  - conflicts: mintassistant, mintassistant-gnome, mintassistant-kde
  - replaces: mintassistant, mintassistant-gnome, mintassistant-kde

  </details>

- **motd-news-config**
  - Latest version: 13ubuntu10mint22.3.0
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Configuration for motd-news shipped in base-files
  - Install: `sudo apt-get install motd-news-config`
  - Install (apt): `sudo apt install motd-news-config`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - breaks: base-files (<< 11ubuntu11)
  - replaces: base-files (<< 11ubuntu11)

  </details>

- **muffin**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: window and compositing manager
  - Install: `sudo apt-get install muffin`
  - Install (apt): `sudo apt install muffin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: adwaita-icon-theme, libc6 (>= 2.34), libgles2, libglib2.0-0t64 (>= 2.79.0), libmuffin0 (>= 5.3.0), libwayland-client0 (>= 1.20), muffin-common (>= 6.6.2+zena), zenity
  - suggests: xdg-user-dirs
  - provides: x-window-manager

  </details>

- **muffin-common**
  - Latest version: 6.6.2+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: window and compositing manager (data files)
  - Install: `sudo apt-get install muffin-common`
  - Install (apt): `sudo apt install muffin-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend

  </details>

- **muffin-dbg**
  - Latest version: 6.6.2+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: window and compositing manager (debugging symbols)
  - Install: `sudo apt-get install muffin-dbg`
  - Install (apt): `sudo apt install muffin-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libmuffin0 (= 6.6.2+zena), muffin (= 6.6.2+zena)

  </details>


### <a id="packages-N"></a>N

- **nautilus-extension-gnome-terminal**
  - Latest version: 3.52.0+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GNOME terminal emulator application - Nautilus extension
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install nautilus-extension-gnome-terminal`
  - Install (apt): `sudo apt install nautilus-extension-gnome-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-terminal (= 3.52.0+mint2+xia), libc6 (>= 2.38), libgcc-s1 (>= 3.0), libglib2.0-0t64 (>= 2.79.0), libnautilus-extension4 (>= 43~beta.1), libstdc++6 (>= 4.1.1)
  - replaces: brasero (<< 3.27.92-2~)

  </details>

- **nemo**
  - Latest version: 6.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: file manager and graphical shell for Cinnamon
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install nemo`
  - Install (apt): `sudo apt install nemo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: catdoc, cinnamon-desktop-data (>= 4.8.0), cinnamon-l10n, desktop-file-utils (>= 0.7), exif, gsettings-desktop-schemas, gvfs (>= 1.3.2), html2text, id3, libatk1.0-0t64 (>= 1.32.0), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libcinnamon-desktop4 (>= 3.4.2), libexempi8 (>= 2.5.0), libexif12 (>= 0.6.21-1~), libgail-3-0t64 (>= 3.0.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libglib2.0-data, libgsf-1-114 (>= 1.14.9), libgtk-3-0t64 (>= 3.21.5), libjson-glib-1.0-0 (>= 1.6), libnemo-extension1 (= 6.6.3+zena), libpango-1.0-0 (>= 1.44.6), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxapp1 (>= 2.0.7), nemo-data (= 6.6.3+zena), poppler-utils, python3-xlrd, shared-mime-info (>= 0.50), untex
  - recommends: gnome-disk-utility, gvfs-backends, gvfs-fuse, librsvg2-common, nemo-fileroller
  - suggests: eog, evince | pdf-viewer, totem | mp3-decoder, xdg-user-dirs

  </details>

- **nemo-audio-tab**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: View audio tag information from the file manager's properties tab
  - Homepage: https://github.com/linuxmint/nemo-extensions
  - Install: `sudo apt-get install nemo-audio-tab`
  - Install (apt): `sudo apt install nemo-audio-tab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: utils
  - Priority: extra
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-nemo-3.0, python-nemo (>= 3.9.0), python3-mutagen

  </details>

- **nemo-compare**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Context menu comparison extension for Nemo file manager
  - Install: `sudo apt-get install nemo-compare`
  - Install (apt): `sudo apt install nemo-compare`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: extra
  - depends: meld | kdiff3 | kdiff3-qt | diffuse | kompare | fldiff | tkdiff | bcompare, nemo (>= 3.8), python-nemo (>= 3.9.0), python3

  </details>

- **nemo-data**
  - Latest version: 6.6.3+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: data files for nemo
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install nemo-data`
  - Install (apt): `sudo apt install nemo-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-xmlb-2.0, python3
  - suggests: nemo

  </details>

- **nemo-dbg**
  - Latest version: 6.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: file manager and graphical shell for Cinnamon - debugging version
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install nemo-dbg`
  - Install (apt): `sudo apt install nemo-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: optional
  - depends: nemo (= 6.6.3+zena)
  - replaces: libnemo-extension1-dbg

  </details>

- **nemo-dropbox**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Dropbox integration for Nemo
  - Homepage: http://www.dropbox.com/
  - Install: `sudo apt-get install nemo-dropbox`
  - Install (apt): `sudo apt install nemo-dropbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: non-free/gnome
  - Priority: optional
  - depends: dropbox, libc6 (>= 2.28), libglib2.0-0t64 (>= 2.36.0), libgtk-3-0t64 (>= 3.0.0), libnemo-extension1 (>= 5.0.3), nemo, pkexec, procps

  </details>

- **nemo-emblems**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Change a folder or file emblem
  - Homepage: https://github.com/linuxmint/nemo-extensions
  - Install: `sudo apt-get install nemo-emblems`
  - Install (apt): `sudo apt install nemo-emblems`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: utils
  - Priority: extra
  - depends: gir1.2-nemo-3.0 (>= 3.8), python-nemo (>= 3.9.0)

  </details>

- **nemo-filename-repairer**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Nemo extension for filename encoding repair
  - Homepage: https://github.com/linuxmint/nemo-extensions
  - Install: `sudo apt-get install nemo-filename-repairer`
  - Install (apt): `sudo apt install nemo-filename-repairer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0t64 (>= 2.75.3), libgtk-3-0t64 (>= 3.0.0), libnemo-extension1 (>= 5.0.3)

  </details>

- **nemo-fileroller**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: File Roller integration for Nemo
  - Install: `sudo apt-get install nemo-fileroller`
  - Install (apt): `sudo apt install nemo-fileroller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: file-roller, libc6 (>= 2.2.5), libglib2.0-0t64 (>= 2.18.0), libnemo-extension1 (>= 5.0.3), nemo
  - recommends: cinnamon-l10n

  </details>

- **nemo-image-converter**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: nemo extension to mass resize or rotate images
  - Homepage: http://github.com/linuxmint/nemo-extensions
  - Install: `sudo apt-get install nemo-image-converter`
  - Install (apt): `sudo apt install nemo-image-converter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Julien Lavergne <julien.lavergne@gmail.com>
  - Section: gnome
  - Priority: optional
  - depends: imagemagick, libc6 (>= 2.4), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.0.0), libnemo-extension1 (>= 5.0.3)
  - recommends: nemo (>= 2.0.0)

  </details>

- **nemo-media-columns**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Nemo Extension
  - Install: `sudo apt-get install nemo-media-columns`
  - Install (apt): `sudo apt install nemo-media-columns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: extra
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gexiv2-0.10, gir1.2-nemo-3.0, python-nemo (>= 3.9.0), python3-mutagen, python3-pil, python3-pymediainfo, python3-pypdf, python3-stopit

  </details>

- **nemo-pastebin**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Nemo extension to send files to a pastebin
  - Install: `sudo apt-get install nemo-pastebin`
  - Install (apt): `sudo apt install nemo-pastebin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-nemo-3.0, pastebinit, python-nemo (>= 3.9.0)
  - recommends: gir1.2-notify-0.7

  </details>

- **nemo-preview**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: nemo-preview is a quick previewer for nemo
  - Install: `sudo apt-get install nemo-preview`
  - Install (apt): `sudo apt install nemo-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: extra
  - depends: cjs, gir1.2-clutter-gst-3.0, gir1.2-gtkclutter-1.0, gir1.2-webkit2-4.1, gir1.2-xreader, gstreamer1.0-plugins-good, libfreetype6, libgirepository-1.0-1, libgtksourceview-4-0, libmusicbrainz5-2, libpango-1.0-0, nemo

  </details>

- **nemo-seahorse**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: seahorse plugins and utilities for encryption
  - Install: `sudo apt-get install nemo-seahorse`
  - Install (apt): `sudo apt install nemo-seahorse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.34), libcryptui0a (>= 3.12.2), libdbus-glib-1-2 (>= 0.78), libgcr-base-3-1 (>= 3.8.0), libglib2.0-0t64 (>= 2.79.0), libgpgme11t64 (>= 1.2.0), libgtk-3-0t64 (>= 3.0.0), libnemo-extension1 (>= 5.0.3), libnotify4 (>= 0.7.0), seahorse-daemon (>= 3.2.2)
  - recommends: seahorse
  - replaces: seahorse-plugins

  </details>

- **nemo-share**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Nemo extension to share folder using Samba
  - Install: `sudo apt-get install nemo-share`
  - Install (apt): `sudo apt install nemo-share`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - suggests: samba (>= 3.0.27a)

  </details>

- **nemo-terminal**
  - Latest version: 6.6.0+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Nemo extension to enable an embedded terminal
  - Homepage: https://github.com/linuxmint/nemo-extensions
  - Install: `sudo apt-get install nemo-terminal`
  - Install (apt): `sudo apt install nemo-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-glib-2.0 (>= 1.38.0~), gir1.2-gtk-3.0 (>= 3.8.4~), gir1.2-nemo-3.0, gir1.2-vte-2.91, gir1.2-xapp-1.0 (>= 1.1.0), python-nemo (>= 3.9.0), python3 (>= 3.4)

  </details>

- **network-manager-gnome**
  - Latest version: 1.34.0+mint3
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: network management framework (GNOME frontend)
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install network-manager-gnome`
  - Install (apt): `sudo apt install network-manager-gnome`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, gnome-shell | policykit-1-gnome | polkit-1-auth-agent, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.44.0), libgtk-3-0t64 (>= 3.21.6), libjansson4 (>= 2.14), libmm-glib0 (>= 0.7.991), libnm0 (>= 1.40.0), libnma0 (>= 1.8.36), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.18), libselinux1 (>= 3.1~), libxapp1 (>= 2.0.7), network-manager
  - recommends: gnome-keyring, gnome-shell | notification-daemon, humanity-icon-theme, iso-codes, mobile-broadband-provider-info
  - suggests: network-manager-openconnect-gnome, network-manager-openvpn-gnome, network-manager-pptp-gnome, network-manager-vpnc-gnome
  - breaks: libnma-common (<< 1.10.4)
  - replaces: libnma-common (<< 1.10.4)

  </details>

- **nvidia-prime-applet**
  - Latest version: 1.4.8
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: An applet for NVIDIA Prime
  - Install: `sudo apt-get install nvidia-prime-applet`
  - Install (apt): `sudo apt install nvidia-prime-applet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-xapp-1.0, mesa-utils, python3, python3-packaging

  </details>


### <a id="packages-O"></a>O

- **oem-config**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Perform end-user configuration after initial OEM installation
  - Install: `sudo apt-get install oem-config`
  - Install (apt): `sudo apt install oem-config`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, oem-config-frontend-24.04.3+mint19, procps, ubiquity (= 24.04.3+mint19)

  </details>

- **oem-config-debconf**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: debconf frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-debconf`
  - Install (apt): `sudo apt install oem-config-debconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: oem-config (= 24.04.3+mint19), ubiquity-frontend-debconf (= 24.04.3+mint19)
  - provides: oem-config-frontend-24.04.3+mint19

  </details>

- **oem-config-gtk**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: GTK+ frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-gtk`
  - Install (apt): `sudo apt install oem-config-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: aptdaemon, oem-config (= 24.04.3+mint19), python3-aptdaemon.gtk3widgets, ubiquity-frontend-gtk (= 24.04.3+mint19)
  - provides: oem-config-frontend-24.04.3+mint19

  </details>

- **oem-config-kde**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: KDE frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-kde`
  - Install (apt): `sudo apt install oem-config-kde`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: oem-config (= 24.04.3+mint19), ubiquity-frontend-kde (= 24.04.3+mint19)
  - provides: oem-config-frontend-24.04.3+mint19

  </details>

- **oem-config-remaster**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Remaster a CD with additional oem-config functionality
  - Install: `sudo apt-get install oem-config-remaster`
  - Install (apt): `sudo apt install oem-config-remaster`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: apt-utils, genisoimage, gnupg

  </details>

- **onboard**
  - Latest version: 1.4.1+mint4+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Simple On-screen Keyboard
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard`
  - Install (apt): `sudo apt install onboard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0 (>= 1.29.3), iso-codes, libc6 (>= 2.38), libcairo2 (>= 1.10.0), libcanberra0t64 (>= 0.2), libdconf1 (>= 0.14.0), libgcc-s1 (>= 3.0), libglib2.0-0t64 (>= 2.32.0), libgtk-3-0t64 (>= 3.9.10), libhunspell-1.7-0, librsvg2-common, libstdc++6 (>= 13.1), libudev1 (>= 183), libx11-6, libxi6 (>= 2:1.2.99.4), libxkbfile1 (>= 1:1.1.0), libxtst6, onboard-common (<< 1.4.1+mint4+wilma.1), onboard-common (>= 1.4.1+mint4+wilma), python3 (<< 3.13), python3 (>= 3.12~), python3-cairo, python3-dbus, python3-gi-cairo, python3:any
  - recommends: gir1.2-atspi-2.0, gir1.2-ayatanaappindicator3-0.1, onboard-data (>= 1.4.1+mint4+wilma), xdg-utils
  - suggests: mousetweaks (>= 3.3.90)
  - breaks: gnome-shell-extension-onboard
  - replaces: gnome-shell-extension-onboard

  </details>

- **onboard-common**
  - Latest version: 1.4.1+mint4+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Simple On-screen Keyboard (common files)
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard-common`
  - Install (apt): `sudo apt install onboard-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: python3
  - breaks: onboard (<< 1.3.0-1~)
  - replaces: onboard (<< 1.3.0-1~)

  </details>

- **onboard-data**
  - Latest version: 1.4.1+mint4+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Language model files for the word suggestion feature of Onboard
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard-data`
  - Install (apt): `sudo apt install onboard-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: onboard (<< 1.4.1+mint4+wilma.1), onboard (>= 1.4.1+mint4+wilma)
  - breaks: onboard-prediction-data (<< 0.99.0~alpha1~tr1531)
  - replaces: onboard-prediction-data (<< 0.99.0~alpha1~tr1531)

  </details>

- **os-uninstaller**
  - Latest version: 4ppa2075
  - Architectures: all
  - Suite: zena
  - Components: import
  - Description: Operating System Uninstaller
  - Homepage: https://launchpad.net/os-uninstaller
  - Install: `sudo apt-get install os-uninstaller`
  - Install (apt): `sudo apt install os-uninstaller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@protonmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav (>= 4ppa2067)

  </details>


### <a id="packages-P"></a>P

- **packagekit**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Provides a package management service
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install packagekit`
  - Install (apt): `sudo apt install packagekit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.52), libappstream5 (>= 1.0.0), libapt-pkg6.0t64 (>= 1.9.2), libc6 (>= 2.38), libgcc-s1 (>= 3.3.1), libglib2.0-0t64 (>= 2.79.0), libglib2.0-bin, libgstreamer1.0-0 (>= 1.0.0), libpackagekit-glib2-18 (>= 1.2.4), libpolkit-gobject-1-0 (>= 0.99), libsqlite3-0 (>= 3.5.9), libstdc++6 (>= 13.1), libsystemd0 (>= 214), polkitd
  - recommends: appstream, packagekit-tools, systemd
  - breaks: plymouth (<< 0.9.5)

  </details>

- **packagekit-command-not-found**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Offer to install missing programs automatically
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install packagekit-command-not-found`
  - Install (apt): `sudo apt install packagekit-command-not-found`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0t64 (>= 2.54), libpackagekit-glib2-18 (>= 1.2.1), packagekit (= 1.2.8+mint2+xia)

  </details>

- **packagekit-docs**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Documentation for PackageKit
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install packagekit-docs`
  - Install (apt): `sudo apt install packagekit-docs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **packagekit-gtk3-module**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Install fonts automatically using PackageKit
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install packagekit-gtk3-module`
  - Install (apt): `sudo apt install packagekit-gtk3-module`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libfontconfig1 (>= 2.12.6), libglib2.0-0t64 (>= 2.54), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.22.0), libpangoft2-1.0-0 (>= 1.14.0)
  - recommends: gnome-software | apper | packagekit-installer

  </details>

- **packagekit-tools**
  - Latest version: 1.2.8+mint2+xia
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Provides PackageKit command-line tools
  - Homepage: https://www.freedesktop.org/software/PackageKit/
  - Install: `sudo apt-get install packagekit-tools`
  - Install (apt): `sudo apt install packagekit-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libglib2.0-0t64 (>= 2.54), libpackagekit-glib2-18 (>= 1.2.8+mint2+xia), packagekit (= 1.2.8+mint2+xia)

  </details>

- **pix**
  - Latest version: 3.4.10+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: image viewer and browser
  - Homepage: https://github.com/linuxmint/pix
  - Install: `sudo apt-get install pix`
  - Install (apt): `sudo apt install pix`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dcraw, gsettings-desktop-schemas, libbrasero-media3-1 (>= 3.0.0), libc6 (>= 2.34), libcairo2 (>= 1.10.0), libexiv2-27 (>= 0.27.2), libgcc-s1 (>= 3.3.1), libgdk-pixbuf-2.0-0 (>= 2.27.1), libgl1-mesa-dri, libglib2.0-0t64 (>= 2.79.0), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0t64 (>= 3.21.5), libheif1 (>= 1.11~), libjpeg8 (>= 8c), libjxl0.7 (>= 0.6.1), liblcms2-2 (>= 2.2+git20110628), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpng16-16t64 (>= 1.6.2), libraw23t64 (>= 0.16.0), librsvg2-2 (>= 2.32.0), libstdc++6 (>= 13.1), libtiff6 (>= 4.0.3), libwebp7 (>= 1.3.2), libx11-6, libxapp1 (>= 2.6.0), pix-data (= 3.4.10+zena), xapps-common (>= 2.5.0), zlib1g (>= 1:1.1.4)
  - recommends: libgphoto2-6, libgphoto2-port12

  </details>

- **pix-data**
  - Latest version: 3.4.10+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: image viewer and browser - arch-independent files
  - Homepage: https://github.com/linuxmint/pix
  - Install: `sudo apt-get install pix-data`
  - Install (apt): `sudo apt install pix-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - recommends: yelp

  </details>

- **pix-dbg**
  - Latest version: 3.4.10+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: image viewer and browser - debugging symbols
  - Homepage: https://github.com/linuxmint/pix
  - Install: `sudo apt-get install pix-dbg`
  - Install (apt): `sudo apt install pix-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: pix (= 3.4.10+zena)

  </details>

- **pix-dev**
  - Latest version: 3.4.10+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: image viewer and browser - development files
  - Homepage: https://github.com/linuxmint/pix
  - Install: `sudo apt-get install pix-dev`
  - Install (apt): `sudo apt install pix-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: devel
  - Priority: optional
  - depends: pix (= 3.4.10+zena)

  </details>

- **python-nemo**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Python binding for Nemo components
  - Install: `sudo apt-get install python-nemo`
  - Install (apt): `sudo apt install python-nemo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: python
  - Priority: optional
  - depends: gir1.2-nemo-3.0 (>= 3.6), libc6 (>= 2.4), libglib2.0-0t64 (>= 2.16.0), libgtk-3-0t64 (>= 3.0.0), libnemo-extension1 (>= 5.0.3), libpython3.12t64 (>= 3.12.1)
  - provides: nemo-python

  </details>

- **python-nemo-dbg**
  - Latest version: 6.6.0+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Debug packages for python-nemo
  - Install: `sudo apt-get install python-nemo-dbg`
  - Install (apt): `sudo apt install python-nemo-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: python-nemo (= 6.6.0+zena)

  </details>

- **python3-repolib**
  - Latest version: 2.2.1+mint1
  - Architectures: all
  - Suite: zena
  - Components: import
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

- **python3-xapp**
  - Latest version: 3.0.2
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Python 3 XApp library
  - Install: `sudo apt-get install python3-xapp`
  - Install (apt): `sudo apt install python3-xapp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: python
  - Priority: optional
  - depends: python3-psutil, python3:any (>= 3.0~)

  </details>


### <a id="packages-R"></a>R

- **redshift**
  - Latest version: 1.12+mint5+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Adjusts the color temperature of your screen
  - Homepage: http://jonls.dk/redshift/
  - Install: `sudo apt-get install redshift`
  - Install (apt): `sudo apt install redshift`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.38), libdrm2 (>= 2.4.3), libglib2.0-0t64 (>= 2.32.0), libwayland-client0 (>= 1.20.0), libx11-6, libxcb-randr0 (>= 1.3), libxcb1, libxxf86vm1
  - recommends: geoclue-2.0

  </details>

- **redshift-gtk**
  - Latest version: 1.12+mint5+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Adjusts the color temperature of your screen -- GUI
  - Homepage: http://jonls.dk/redshift/
  - Install: `sudo apt-get install redshift-gtk`
  - Install (apt): `sudo apt install redshift-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: gir1.2-xapp-1.0, python3-gi, python3-xdg, python3:any, redshift (>= 1.12+mint5+wilma)
  - recommends: at-spi2-core
  - breaks: gtk-redshift (<< 1.10-2~)
  - replaces: gtk-redshift (<< 1.10-2~)

  </details>

- **rhythmbox-plugin-tray-icon**
  - Latest version: 2020.05.21
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: A tray icon plugin for rhythmbox music player
  - Install: `sudo apt-get install rhythmbox-plugin-tray-icon`
  - Install (apt): `sudo apt install rhythmbox-plugin-tray-icon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: universe/gnome
  - Priority: optional
  - depends: gir1.2-xapp-1.0, rhythmbox

  </details>


### <a id="packages-S"></a>S

- **simple-scan**
  - Latest version: 46.0-0ubuntu2.1mint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Simple Scanning Utility
  - Homepage: https://gitlab.gnome.org/GNOME/simple-scan
  - Install: `sudo apt-get install simple-scan`
  - Install (apt): `sudo apt install simple-scan`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, libadwaita-1-0 (>= 1.2.0), libc6 (>= 2.34), libcairo2 (>= 1.4.10), libcolord2 (>= 0.1.10), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-4-1 (>= 4.9.3), libgusb2 (>= 0.2.2), libpackagekit-glib2-18 (>= 0.9.4), libsane1 (>= 1.0.27), libwebp7 (>= 1.3.2), libwebpmux3 (>= 1.3.2), xdg-utils, zlib1g (>= 1:1.1.4)

  </details>

- **slick-greeter**
  - Latest version: 2.2.6+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Slick-looking LightDM greeter
  - Homepage: https://github.com/linuxmint/slick-greeter
  - Install: `sudo apt-get install slick-greeter`
  - Install (apt): `sudo apt install slick-greeter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.14.0), libcanberra0t64 (>= 0.2), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.6), liblightdm-gobject-1-0 (>= 1.15.2), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxext6, lightdm, python3
  - suggests: lightdm-remote-session-freerdp, lightdm-remote-session-uccsconfigure, remote-login-service
  - provides: lightdm-greeter

  </details>

- **software-properties-common**
  - Latest version: 2.3.8
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package
  - Install: `sudo apt-get install software-properties-common`
  - Install (apt): `sudo apt install software-properties-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintsources

  </details>

- **software-properties-gtk**
  - Latest version: 2.3.8
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package
  - Install: `sudo apt-get install software-properties-gtk`
  - Install (apt): `sudo apt install software-properties-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintsources

  </details>

- **spotify-client**
  - Latest version: 1:1.2.63.394.g126b0d89
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: Spotify streaming music client
  - Homepage: https://www.spotify.com
  - Install: `sudo apt-get install spotify-client`
  - Install (apt): `sudo apt install spotify-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Spotify <tux@spotify.com>
  - Section: sound
  - Priority: optional
  - depends: libasound2, libatk-bridge2.0-0, libatomic1, libayatana-appindicator3-1, libc6 (>= 2.30), libgbm1, libglib2.0-0, libgtk-3-0, libnss3, libxshmfence1, libxss1, libxtst6, xdg-utils
  - recommends: libavcodec58 | libavcodec-extra58 | libavcodec57 | libavcodec-extra57 | libavcodec-ffmpeg56 | libavcodec-ffmpeg-extra56 | libavcodec54 | libavcodec-extra-54, libavformat58 | libavformat57 | libavformat-ffmpeg56 | libavformat54
  - suggests: libnotify4

  </details>

- **sticky**
  - Latest version: 1.30
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Sticky Notes app
  - Install: `sudo apt-get install sticky`
  - Install (apt): `sudo apt install sticky`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-glib-2.0, gir1.2-gspell-1, gir1.2-gtk-3.0 (>= 3.22.0), gir1.2-xapp-1.0 (>= 2.2.0), python3, python3-gi, python3-xapp (>= 2.2.0), python3:any

  </details>

- **sublime-merge**
  - Latest version: 2112
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: Sublime Merge is a Git Client, from the makers of Sublime Text
  - Install: `sudo apt-get install sublime-merge`
  - Install (apt): `sudo apt install sublime-merge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sublime HQ Pty Ltd <support@sublimetext.com>
  - Section: devel
  - Priority: optional
  - depends: libcurl3 | libcurl4, libgtk-3-0

  </details>

- **sublime-text**
  - Latest version: 4200
  - Architectures: amd64
  - Suite: zena
  - Components: import
  - Description: Sublime Text is a sophisticated text editor for code, markup and prose
  - Install: `sudo apt-get install sublime-text`
  - Install (apt): `sudo apt install sublime-text`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sublime HQ Pty Ltd <support@sublimetext.com>
  - Section: editors
  - Priority: optional
  - depends: libcurl3 | libcurl4, libgtk-3-0

  </details>

- **syslinux-themes-linuxmint**
  - Latest version: 1.2.0
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: collection of boot loaders
  - Install: `sudo apt-get install syslinux-themes-linuxmint`
  - Install (apt): `sudo apt install syslinux-themes-linuxmint`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: isolinux, memtest86+, syslinux-common
  - provides: syslinux-theme

  </details>


### <a id="packages-T"></a>T

- **thingy**
  - Latest version: 1.2.4
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Document Manager
  - Install: `sudo apt-get install thingy`
  - Install (apt): `sudo apt install thingy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0 (>= 2.5.0), libgsf-bin, python3, python3-gi, python3-setproctitle, xreader

  </details>

- **thunar**
  - Latest version: 4.18.8+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: File Manager for Xfce
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install thunar`
  - Install (apt): `sudo apt install thunar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: desktop-file-utils, exo-utils, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo2 (>= 1.14.0), libexo-2-0 (>= 4.17.0), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libgudev-1.0-0 (>= 146), libice6 (>= 1:1.0.0), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.44.6), libsm6, libthunarx-3-0 (>= 1.7.0), libxfce4ui-2-0 (>= 4.17.6), libxfce4util7 (>= 4.17.2), libxfconf-0-3 (>= 4.6.0), shared-mime-info, thunar-data (= 4.18.8+mint1)
  - recommends: default-dbus-session-bus | dbus-session-bus, gvfs, libxfce4panel-2.0-4 (>= 4.13.0), policykit-1-gnome | polkit-1-auth-agent, thunar-volman, tumbler, udisks2, xdg-user-dirs
  - suggests: gvfs-backends, thunar-archive-plugin, thunar-media-tags-plugin
  - breaks: thunar-data (<< 1.2.3-3)
  - replaces: thunar-data (<< 1.2.3-3)

  </details>

- **thunar-data**
  - Latest version: 4.18.8+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Provides thunar documentation, icons and translations
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install thunar-data`
  - Install (apt): `sudo apt install thunar-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional

  </details>

- **thunderbird**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Email, RSS and newsgroup client with integrated spam filter
  - Install: `sudo apt-get install thunderbird`
  - Install (apt): `sudo apt install thunderbird`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional
  - provides: mail-reader, thunderbird-gnome-support

  </details>

- **thunderbird-locale-af**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Afrikaans language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-af`
  - Install (apt): `sudo apt install thunderbird-locale-af`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ar**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Arabic language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ar`
  - Install (apt): `sudo apt install thunderbird-locale-ar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ast**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Asturian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ast`
  - Install (apt): `sudo apt install thunderbird-locale-ast`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-be**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Belarusian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-be`
  - Install (apt): `sudo apt install thunderbird-locale-be`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-bg**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Bulgarian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-bg`
  - Install (apt): `sudo apt install thunderbird-locale-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-bn**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-bn`
  - Install (apt): `sudo apt install thunderbird-locale-bn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-bn-bd**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-bn-bd`
  - Install (apt): `sudo apt install thunderbird-locale-bn-bd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-br**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Breton language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-br`
  - Install (apt): `sudo apt install thunderbird-locale-br`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ca**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Catalan; Valencian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ca`
  - Install (apt): `sudo apt install thunderbird-locale-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-cak**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Kaqchikel language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cak`
  - Install (apt): `sudo apt install thunderbird-locale-cak`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-cs**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Czech language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cs`
  - Install (apt): `sudo apt install thunderbird-locale-cs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-cy**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Welsh language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-cy`
  - Install (apt): `sudo apt install thunderbird-locale-cy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-da**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Danish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-da`
  - Install (apt): `sudo apt install thunderbird-locale-da`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-de**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: German language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-de`
  - Install (apt): `sudo apt install thunderbird-locale-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-dsb**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Lower Sorbian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-dsb`
  - Install (apt): `sudo apt install thunderbird-locale-dsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-el**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Greek language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-el`
  - Install (apt): `sudo apt install thunderbird-locale-el`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-en**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: English language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-en`
  - Install (apt): `sudo apt install thunderbird-locale-en`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional
  - provides: thunderbird-locale-en-ca

  </details>

- **thunderbird-locale-en-gb**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-en-gb`
  - Install (apt): `sudo apt install thunderbird-locale-en-gb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-en-us**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-en-us`
  - Install (apt): `sudo apt install thunderbird-locale-en-us`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-es**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Spanish; Castilian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-es`
  - Install (apt): `sudo apt install thunderbird-locale-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional
  - provides: thunderbird-locale-es-mx

  </details>

- **thunderbird-locale-es-ar**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-es-ar`
  - Install (apt): `sudo apt install thunderbird-locale-es-ar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-es-es**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-es-es`
  - Install (apt): `sudo apt install thunderbird-locale-es-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-et**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Estonian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-et`
  - Install (apt): `sudo apt install thunderbird-locale-et`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-eu**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Basque language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-eu`
  - Install (apt): `sudo apt install thunderbird-locale-eu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-fa**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-fa`
  - Install (apt): `sudo apt install thunderbird-locale-fa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-fi**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Finnish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fi`
  - Install (apt): `sudo apt install thunderbird-locale-fi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-fr**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: French language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fr`
  - Install (apt): `sudo apt install thunderbird-locale-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-fy**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Western Frisian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-fy`
  - Install (apt): `sudo apt install thunderbird-locale-fy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-fy-nl**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-fy-nl`
  - Install (apt): `sudo apt install thunderbird-locale-fy-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ga**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Irish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ga`
  - Install (apt): `sudo apt install thunderbird-locale-ga`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ga-ie**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-ga-ie`
  - Install (apt): `sudo apt install thunderbird-locale-ga-ie`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-gd**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Gaelic; Scottish Gaelic language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-gd`
  - Install (apt): `sudo apt install thunderbird-locale-gd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-gl**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Galician language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-gl`
  - Install (apt): `sudo apt install thunderbird-locale-gl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-he**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Hebrew language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-he`
  - Install (apt): `sudo apt install thunderbird-locale-he`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-hr**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Croatian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hr`
  - Install (apt): `sudo apt install thunderbird-locale-hr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-hsb**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Sorbian, Upper language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hsb`
  - Install (apt): `sudo apt install thunderbird-locale-hsb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-hu**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Hungarian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hu`
  - Install (apt): `sudo apt install thunderbird-locale-hu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-hy**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Armenian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-hy`
  - Install (apt): `sudo apt install thunderbird-locale-hy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional
  - provides: thunderbird-locale-hy-am

  </details>

- **thunderbird-locale-id**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Indonesian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-id`
  - Install (apt): `sudo apt install thunderbird-locale-id`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-is**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Icelandic language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-is`
  - Install (apt): `sudo apt install thunderbird-locale-is`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-it**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Italian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-it`
  - Install (apt): `sudo apt install thunderbird-locale-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ja**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Japanese language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ja`
  - Install (apt): `sudo apt install thunderbird-locale-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ka**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Georgian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ka`
  - Install (apt): `sudo apt install thunderbird-locale-ka`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-kab**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Kabyle language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-kab`
  - Install (apt): `sudo apt install thunderbird-locale-kab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-kk**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Kazakh language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-kk`
  - Install (apt): `sudo apt install thunderbird-locale-kk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ko**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Korean language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ko`
  - Install (apt): `sudo apt install thunderbird-locale-ko`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-lt**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Lithuanian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-lt`
  - Install (apt): `sudo apt install thunderbird-locale-lt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-lv**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Latvian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-lv`
  - Install (apt): `sudo apt install thunderbird-locale-lv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-mk**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-mk`
  - Install (apt): `sudo apt install thunderbird-locale-mk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ms**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Malay language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ms`
  - Install (apt): `sudo apt install thunderbird-locale-ms`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-nb**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Bokmål, Norwegian; Norwegian Bokmål language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nb`
  - Install (apt): `sudo apt install thunderbird-locale-nb`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-nb-no**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-nb-no`
  - Install (apt): `sudo apt install thunderbird-locale-nb-no`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-nl**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Dutch; Flemish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nl`
  - Install (apt): `sudo apt install thunderbird-locale-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-nn**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Norwegian Nynorsk; Nynorsk, Norwegian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-nn`
  - Install (apt): `sudo apt install thunderbird-locale-nn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-nn-no**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-nn-no`
  - Install (apt): `sudo apt install thunderbird-locale-nn-no`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pa**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Panjabi; Punjabi language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pa`
  - Install (apt): `sudo apt install thunderbird-locale-pa`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pa-in**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-pa-in`
  - Install (apt): `sudo apt install thunderbird-locale-pa-in`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pl**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Polish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pl`
  - Install (apt): `sudo apt install thunderbird-locale-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pt**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Portuguese language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-pt`
  - Install (apt): `sudo apt install thunderbird-locale-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pt-br**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-pt-br`
  - Install (apt): `sudo apt install thunderbird-locale-pt-br`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-pt-pt**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-pt-pt`
  - Install (apt): `sudo apt install thunderbird-locale-pt-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-rm**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Romansh language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-rm`
  - Install (apt): `sudo apt install thunderbird-locale-rm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ro**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Romanian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ro`
  - Install (apt): `sudo apt install thunderbird-locale-ro`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ru**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Russian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-ru`
  - Install (apt): `sudo apt install thunderbird-locale-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-si**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-si`
  - Install (apt): `sudo apt install thunderbird-locale-si`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sk**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Slovak language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sk`
  - Install (apt): `sudo apt install thunderbird-locale-sk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sl**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Slovenian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sl`
  - Install (apt): `sudo apt install thunderbird-locale-sl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sq**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Albanian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sq`
  - Install (apt): `sudo apt install thunderbird-locale-sq`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sr**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Serbian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sr`
  - Install (apt): `sudo apt install thunderbird-locale-sr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sv**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Swedish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-sv`
  - Install (apt): `sudo apt install thunderbird-locale-sv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-sv-se**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-sv-se`
  - Install (apt): `sudo apt install thunderbird-locale-sv-se`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ta**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-ta`
  - Install (apt): `sudo apt install thunderbird-locale-ta`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-ta-lk**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-ta-lk`
  - Install (apt): `sudo apt install thunderbird-locale-ta-lk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-th**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Thai language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-th`
  - Install (apt): `sudo apt install thunderbird-locale-th`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-tr**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Turkish language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-tr`
  - Install (apt): `sudo apt install thunderbird-locale-tr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-uk**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Ukrainian language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-uk`
  - Install (apt): `sudo apt install thunderbird-locale-uk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-uz**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Uzbek language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-uz`
  - Install (apt): `sudo apt install thunderbird-locale-uz`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-vi**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Vietnamese language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-vi`
  - Install (apt): `sudo apt install thunderbird-locale-vi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-zh-cn**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-zh-cn`
  - Install (apt): `sudo apt install thunderbird-locale-zh-cn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-zh-hans**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Simplified Chinese language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-zh-hans`
  - Install (apt): `sudo apt install thunderbird-locale-zh-hans`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-zh-hant**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Traditional Chinese language packs for Thunderbird
  - Install: `sudo apt-get install thunderbird-locale-zh-hant`
  - Install (apt): `sudo apt install thunderbird-locale-zh-hant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **thunderbird-locale-zh-tw**
  - Latest version: 1:140.7.0esr+linuxmint1+zena
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Transitional package for Thunderbird language packs.
  - Install: `sudo apt-get install thunderbird-locale-zh-tw`
  - Install (apt): `sudo apt install thunderbird-locale-zh-tw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: mail
  - Priority: optional

  </details>

- **timeshift**
  - Latest version: 25.12.4+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: System restore utility
  - Homepage: https://github.com/linuxmint/timeshift
  - Install: `sudo apt-get install timeshift`
  - Install (apt): `sudo apt install timeshift`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: utils
  - Priority: extra
  - depends: btrfs-progs | btrfs-tools, debianutils, libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgee-0.8-2 (>= 0.8.3), libglib2.0-0t64 (>= 2.40.0), libgtk-3-0t64 (>= 3.16.2), libjson-glib-1.0-0 (>= 1.5.2), libvte-2.91-0, libxapp1 (>= 1.4.9), rsync
  - replaces: timeshift-btrfs

  </details>

- **touchegg**
  - Latest version: 2.0.16+victoria
  - Architectures: amd64
  - Suite: zena
  - Components: import
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

  </details>

- **transmission**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission`
  - Install (apt): `sudo apt install transmission`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional
  - depends: transmission-common (= 4.0.5-1build5mint1+wilma), transmission-gtk (>= 4.0.5-1build5mint1+wilma) | transmission-qt (>= 4.0.5-1build5mint1+wilma) | transmission-cli (>= 4.0.5-1build5mint1+wilma)

  </details>

- **transmission-cli**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client (command line programs)
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission-cli`
  - Install (apt): `sudo apt install transmission-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libdeflate0 (>= 1.0), libevent-2.1-7t64 (>= 2.1.8-stable), libgcc-s1 (>= 3.4), libminiupnpc17 (>= 1.9.20140610), libnatpmp1t64 (>= 20150609), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), transmission-common (= 4.0.5-1build5mint1+wilma)
  - suggests: transmission-daemon (= 4.0.5-1build5mint1+wilma), transmission-gtk (= 4.0.5-1build5mint1+wilma)

  </details>

- **transmission-common**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client (common files)
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission-common`
  - Install (apt): `sudo apt install transmission-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional

  </details>

- **transmission-daemon**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client (daemon)
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission-daemon`
  - Install (apt): `sudo apt install transmission-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libdeflate0 (>= 1.0), libevent-2.1-7t64 (>= 2.1.8-stable), libgcc-s1 (>= 3.4), libminiupnpc17 (>= 1.9.20140610), libnatpmp1t64 (>= 20150609), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), libsystemd0, transmission-common (= 4.0.5-1build5mint1+wilma)
  - preDepends: adduser, init-system-helpers (>= 1.54~)
  - recommends: transmission-cli
  - suggests: transmission-remote-gtk

  </details>

- **transmission-gtk**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client (GTK+ interface)
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission-gtk`
  - Install (apt): `sudo apt install transmission-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional
  - depends: libatkmm-1.6-1v5 (>= 2.28.4), libayatana-appindicator3-1 (>= 0.4.90), libc6 (>= 2.38), libcairomm-1.0-1v5 (>= 1.14.5), libcurl4t64 (>= 7.28.0), libdeflate0 (>= 1.0), libevent-2.1-7t64 (>= 2.1.8-stable), libgcc-s1 (>= 3.4), libglib2.0-0t64 (>= 2.44.0), libglibmm-2.4-1t64 (>= 2.66.7), libgtk-3-0t64 (>= 3.9.10), libgtkmm-3.0-1t64 (>= 3.24.9), libminiupnpc17 (>= 1.9.20140610), libnatpmp1t64 (>= 20150609), libpangomm-1.4-1v5 (>= 2.46.4), libsigc++-2.0-0v5 (>= 2.8.0), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), transmission-common (= 4.0.5-1build5mint1+wilma)
  - recommends: xdg-utils

  </details>

- **transmission-qt**
  - Latest version: 4.0.5-1build5mint1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: lightweight BitTorrent client (Qt interface)
  - Homepage: https://transmissionbt.com/
  - Install: `sudo apt-get install transmission-qt`
  - Install (apt): `sudo apt install transmission-qt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: net
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.28.0), libdeflate0 (>= 1.0), libevent-2.1-7t64 (>= 2.1.8-stable), libgcc-s1 (>= 3.4), libminiupnpc17 (>= 1.9.20140610), libnatpmp1t64 (>= 20150609), libqt5core5t64 (>= 5.15.1), libqt5dbus5t64 (>= 5.0.2), libqt5gui5t64 (>= 5.8.0) | libqt5gui5-gles (>= 5.8.0), libqt5network5t64 (>= 5.14.1), libqt5widgets5t64 (>= 5.11.0~rc1), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13.1), transmission-common (= 4.0.5-1build5mint1+wilma)
  - recommends: xdg-utils

  </details>


### <a id="packages-U"></a>U

- **ubiquity**
  - Latest version: 24.04.3+mint19
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Linux Mint live CD installer
  - Install: `sudo apt-get install ubiquity`
  - Install (apt): `sudo apt install ubiquity`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, console-setup (>= 1.205ubuntu1), cryptsetup, dbus-x11, dctrl-tools, debconf (>= 0.5) | debconf-2.0, dpkg-repack, grub-common, iso-codes, language-selector-common (>= 0.4.16), laptop-detect, libblkid1 (>= 2.24.2), libc6 (>= 2.38), libdebconfclient0 (>= 0.145), libdebian-installer4 (>= 0.124ubuntu2), libiw30t64 (>= 30~pre1), libparted-fs-resize0t64 (>= 3.1), libparted2t64 (>= 3.1), lsb-release, ntfs-3g (>= 1:2011.1.15AR.4+2011.4.12-1), os-prober, passwd, policykit-1, python3-apt (>= 0.7.100.3~), python3-debconf, python3-icu (>= 1.0), python3-pam, python3:any (>= 3.1~), rdate, sbsigntool, shim-signed, ubiquity-artwork-24.04.3+mint19, ubiquity-casper, ubiquity-frontend-24.04.3+mint19, wget, xdg-utils
  - recommends: btrfs-progs, dmraid, grub-pc | grub | grub-efi-amd64, lvm2, ubuntu-drivers-common (>= 0.6.3)
  - breaks: archdetect-deb
  - replaces: archdetect-deb

  </details>

- **ubiquity-frontend-debconf**
  - Latest version: 24.04.3+mint19
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: debconf frontend for the Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-debconf`
  - Install (apt): `sudo apt install ubiquity-frontend-debconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: bogl-bterm (>= 0.1.18-2ubuntu4), debconf (>= 1.5.24ubuntu2) | cdebconf, python3:any (>= 3.1~), ubiquity (= 24.04.3+mint19)
  - provides: ubiquity-frontend-24.04.3+mint19

  </details>

- **ubiquity-frontend-gtk**
  - Latest version: 24.04.3+mint19
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GTK+ frontend for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-gtk`
  - Install (apt): `sudo apt install ubiquity-frontend-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: busybox-static | busybox, gir1.2-gtk-3.0 (>= 3.20), gir1.2-nma-1.0, gir1.2-pango-1.0, gir1.2-soup-3.0, gir1.2-timezonemap-1.0, gir1.2-vte-2.91, gir1.2-webkit2-4.1, gir1.2-xkl-1.0, iso-codes, libglib2.0-0t64 (>= 2.79.0), metacity | marco | xfwm4 | matchbox-window-manager | openbox | gnome-shell | budgie-core, python3-cairo, python3-dbus, python3-gi, python3-gi-cairo, python3:any (>= 3.1~), ubiquity (= 24.04.3+mint19)
  - suggests: gnome-control-center | feh
  - provides: ubiquity-frontend-24.04.3+mint19

  </details>

- **ubiquity-frontend-gtk-panel**
  - Latest version: 24.04.3+mint19
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: GTK+ frontend panel implementation for ubiquity-dm UI
  - Install: `sudo apt-get install ubiquity-frontend-gtk-panel`
  - Install (apt): `sudo apt install ubiquity-frontend-gtk-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.12.0), libgtk-3-0t64 (>= 3.20), libindicator3-7 (>= 0.4.90), libx11-6, ubiquity-frontend-gtk (= 24.04.3+mint19)
  - breaks: ubiquity-frontend-gtk (<< 19.10.1~)
  - replaces: ubiquity-frontend-gtk (<< 19.10.1~)
  - provides: indicator-renderer

  </details>

- **ubiquity-frontend-kde**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: KDE frontend for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-kde`
  - Install (apt): `sudo apt install ubiquity-frontend-kde`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: kde-window-manager | kwin, python3-dbus, python3-dbus.mainloop.pyqt5, python3-pyqt5, python3-pyqt5.qtsvg, python3-pyqt5.qtwebkit, python3:any (>= 3.1~), ubiquity (= 24.04.3+mint19), xauth
  - provides: ubiquity-frontend-24.04.3+mint19

  </details>

- **ubiquity-slideshow-mint**
  - Latest version: 70mint65
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Ubiquity slideshow for Linux Mint
  - Install: `sudo apt-get install ubiquity-slideshow-mint`
  - Install (apt): `sudo apt install ubiquity-slideshow-mint`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint
  - Section: x11
  - Priority: optional
  - conflicts: ubiquity-slideshow
  - replaces: ubiquity-slideshow
  - provides: ubiquity-slideshow

  </details>

- **ubiquity-ubuntu-artwork**
  - Latest version: 24.04.3+mint19
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Linux Mint artwork for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-ubuntu-artwork`
  - Install (apt): `sudo apt install ubiquity-ubuntu-artwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - provides: ubiquity-artwork-24.04.3+mint19

  </details>

- **ubuntu-system-adjustments**
  - Latest version: 2025.12.16-zena
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Adjustments to the Ubuntu package base
  - Install: `sudo apt-get install ubuntu-system-adjustments`
  - Install (apt): `sudo apt install ubuntu-system-adjustments`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintsystem
  - recommends: plymouth-theme-spinner
  - conflicts: mint-artwork-common
  - replaces: mint-artwork-common

  </details>


### <a id="packages-W"></a>W

- **warpinator**
  - Latest version: 2.0.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Allows simple local network file sharing.
  - Install: `sudo apt-get install warpinator`
  - Install (apt): `sudo apt install warpinator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-glib-2.0, gir1.2-gtk-3.0 (>= 3.20.0), gir1.2-xapp-1.0 (>= 1.6.0), libc6 (>= 2.38), libstdc++6 (>= 13.1), python3 (<< 3.13), python3 (>= 3.12~), python3-cryptography, python3-gi, python3-ifaddr, python3-nacl, python3-netaddr, python3-netifaces, python3-qrcode, python3-setproctitle, python3-xapp (>= 1.6.0), python3:any

  </details>

- **warpinator-dbg**
  - Latest version: 2.0.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Allows simple local network file sharing.
  - Install: `sudo apt-get install warpinator-dbg`
  - Install (apt): `sudo apt install warpinator-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: warpinator (= 2.0.3+zena)

  </details>

- **webapp-manager**
  - Latest version: 1.4.6
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Web Application Manager
  - Install: `sudo apt-get install webapp-manager`
  - Install (apt): `sudo apt install webapp-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0 (>= 1.4), python3, python3-bs4, python3-configobj, python3-gi, python3-pil, python3-setproctitle, python3-tldextract, xapps-common

  </details>

- **wine-desktop-files**
  - Latest version: 5.0.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Microsoft Windows Compatibility Layer
  - Install: `sudo apt-get install wine-desktop-files`
  - Install (apt): `sudo apt install wine-desktop-files`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional

  </details>

- **wine-installer**
  - Latest version: 5.0.3
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Microsoft Windows Compatibility Layer
  - Install: `sudo apt-get install wine-installer`
  - Install (apt): `sudo apt install wine-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: wine, wine-desktop-files
  - recommends: wine32, wine64

  </details>


### <a id="packages-X"></a>X

- **xapp-aiff-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: AIFF thumbnailer
  - Install: `sudo apt-get install xapp-aiff-thumbnailer`
  - Install (apt): `sudo apt install xapp-aiff-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: python3-mutagen, xapp-thumbnailers-common

  </details>

- **xapp-appimage-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: AppImage thumbnailer
  - Install: `sudo apt-get install xapp-appimage-thumbnailer`
  - Install (apt): `sudo apt install xapp-appimage-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: python3-pyelftools, squashfs-tools, xapp-thumbnailers-common

  </details>

- **xapp-epub-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: ePub thumbnailer
  - Install: `sudo apt-get install xapp-epub-thumbnailer`
  - Install (apt): `sudo apt install xapp-epub-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: xapp-thumbnailers-common

  </details>

- **xapp-gimp-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Gimp thumbnailer
  - Install: `sudo apt-get install xapp-gimp-thumbnailer`
  - Install (apt): `sudo apt install xapp-gimp-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: xapp-thumbnailers-common

  </details>

- **xapp-jxl-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: JPEG XL thumbnailer
  - Install: `sudo apt-get install xapp-jxl-thumbnailer`
  - Install (apt): `sudo apt install xapp-jxl-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: libjxl-tools, xapp-thumbnailers-common

  </details>

- **xapp-mp3-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: MP3 thumbnailer
  - Install: `sudo apt-get install xapp-mp3-thumbnailer`
  - Install (apt): `sudo apt install xapp-mp3-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: python3-eyed3, xapp-thumbnailers-common

  </details>

- **xapp-ora-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: OpenRaster thumbnailer
  - Install: `sudo apt-get install xapp-ora-thumbnailer`
  - Install (apt): `sudo apt install xapp-ora-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: xapp-thumbnailers-common

  </details>

- **xapp-raw-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: RAW thumbnailer
  - Install: `sudo apt-get install xapp-raw-thumbnailer`
  - Install (apt): `sudo apt install xapp-raw-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dcraw, xapp-thumbnailers-common

  </details>

- **xapp-symbolic-icons**
  - Latest version: 1.0.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Set of symbolic icons for GTK applications
  - Homepage: https://github.com/xapp-project/xapp-symbolic-icons
  - Install: `sudo apt-get install xapp-symbolic-icons`
  - Install (apt): `sudo apt install xapp-symbolic-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: python3

  </details>

- **xapp-thumbnailers-common**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: Common files for XApp thumbnailers
  - Install: `sudo apt-get install xapp-thumbnailers-common`
  - Install (apt): `sudo apt install xapp-thumbnailers-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: gir1.2-xapp-1.0 (>= 2.4.2), python3, python3-pil

  </details>

- **xapp-vorbiscomment-thumbnailer**
  - Latest version: 1.2.9
  - Architectures: all
  - Suite: zena
  - Components: main
  - Description: VorbisComment thumbnailer
  - Install: `sudo apt-get install xapp-vorbiscomment-thumbnailer`
  - Install (apt): `sudo apt install xapp-vorbiscomment-thumbnailer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: python3-mutagen, xapp-thumbnailers-common

  </details>

- **xapps-common**
  - Latest version: 3.2.2+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Common files for XApp desktop apps
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install xapps-common`
  - Install (apt): `sudo apt install xapps-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, inxi, netcat, python3:any, xapp-symbolic-icons, xdg-utils

  </details>

- **xapps-doc**
  - Latest version: 3.2.2+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Libxapp documentation
  - Homepage: https://projects.linuxmint.com/xapp/reference/
  - Install: `sudo apt-get install xapps-doc`
  - Install (apt): `sudo apt install xapps-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: doc
  - Priority: optional
  - depends: devhelp

  </details>

- **xdg-desktop-portal**
  - Latest version: 1.20.0+ds-2ubuntu1
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: desktop integration portal for Flatpak and Snap
  - Homepage: https://flatpak.github.io/xdg-desktop-portal/
  - Install: `sudo apt-get install xdg-desktop-portal`
  - Install (apt): `sudo apt install xdg-desktop-portal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: bubblewrap, default-dbus-session-bus | dbus-session-bus, fuse3, gstreamer1.0-plugins-base, gstreamer1.0-plugins-good, init-system-helpers (>= 1.52), libc6 (>= 2.38), libfuse3-3 (>= 3.12.0), libgdk-pixbuf-2.0-0 (>= 2.30.1), libglib2.0-0t64 (>= 2.79.0), libgstreamer-plugins-base1.0-0 (>= 1.4.0), libgstreamer1.0-0 (>= 1.0.0), libgudev-1.0-0 (>= 146), libjson-glib-1.0-0 (>= 1.5.2), libpipewire-0.3-0t64 (>= 0.3.1), libsystemd0
  - recommends: librsvg2-common

  </details>

- **xdg-desktop-portal-dev**
  - Latest version: 1.20.0+ds-2ubuntu1
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: desktop integration portal - development files
  - Homepage: https://flatpak.github.io/xdg-desktop-portal/
  - Install: `sudo apt-get install xdg-desktop-portal-dev`
  - Install (apt): `sudo apt install xdg-desktop-portal-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 7.2.2)

  </details>

- **xdg-desktop-portal-tests**
  - Latest version: 1.20.0+ds-2ubuntu1
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: desktop integration portal - automated tests
  - Homepage: https://flatpak.github.io/xdg-desktop-portal/
  - Install: `sudo apt-get install xdg-desktop-portal-tests`
  - Install (apt): `sudo apt install xdg-desktop-portal-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-daemon, geoclue-2.0, gir1.2-umockdev-1.0, libc6 (>= 2.34), libcap2-bin, libglib2.0-0t64 (>= 2.79.0), librsvg2-common, pipewire, procps, python3, python3-dbusmock, python3-gi, python3-pytest, umockdev, xdg-desktop-portal

  </details>

- **xdg-desktop-portal-xapp**
  - Latest version: 1.1.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Xapp's Cinnamon, MATE and XFCE backends for xdg-desktop-portal.
  - Homepage: https://github.com/linuxmint/xdg-desktop-portal-xapp
  - Install: `sudo apt-get install xdg-desktop-portal-xapp`
  - Install (apt): `sudo apt install xdg-desktop-portal-xapp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dbus-user-session | dbus-x11, libc6 (>= 2.34), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.0.0), xapp-symbolic-icons, xapps-common (>= 2.5.0), xdg-desktop-portal (>= 1.7.1), xdg-desktop-portal-gtk
  - provides: xdg-desktop-portal-backend (= 1.7.1)

  </details>

- **xdg-desktop-portal-xapp-dbg**
  - Latest version: 1.1.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Xapp's Cinnamon, MATE and XFCE backends for xdg-desktop-portal.
  - Homepage: https://github.com/linuxmint/xdg-desktop-portal-xapp
  - Install: `sudo apt-get install xdg-desktop-portal-xapp-dbg`
  - Install (apt): `sudo apt install xdg-desktop-portal-xapp-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xdg-desktop-portal-xapp (= 1.1.3+zena)

  </details>

- **xed**
  - Latest version: 3.8.9+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Text editor
  - Install: `sudo apt-get install xed`
  - Install (apt): `sudo apt install xed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: gir1.2-gtksource-4, iso-codes, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.3), libglib2.0-0t64 (>= 2.79.0), libgspell-1-2 (>= 1.8.2), libgtk-3-0t64 (>= 3.21.5), libgtksourceview-4-0 (>= 3.23.90), libpango-1.0-0 (>= 1.14.0), libpeas-1.0-0 (>= 1.1.0), libx11-6, libxapp1 (>= 2.0.7), libxml2 (>= 2.7.4), python3, python3-gi, python3:any, python3.12, xapps-common (>= 1.9.0), xed-common (= 3.8.9+zena)

  </details>

- **xed-common**
  - Latest version: 3.8.9+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Text editor (common files)
  - Install: `sudo apt-get install xed-common`
  - Install (apt): `sudo apt install xed-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend

  </details>

- **xed-dbg**
  - Latest version: 3.8.9+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Text editor (debugging symbols)
  - Install: `sudo apt-get install xed-dbg`
  - Install (apt): `sudo apt install xed-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: optional
  - depends: xed (= 3.8.9+zena)

  </details>

- **xed-dev**
  - Latest version: 3.8.9+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Text editor (development files)
  - Install: `sudo apt-get install xed-dev`
  - Install (apt): `sudo apt install xed-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: devel
  - Priority: optional
  - depends: xed (= 3.8.9+zena)

  </details>

- **xed-doc**
  - Latest version: 3.8.9+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Text editor (documentation files)
  - Install: `sudo apt-get install xed-doc`
  - Install (apt): `sudo apt install xed-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: doc
  - Priority: optional

  </details>

- **xfce4-power-manager**
  - Latest version: 4.18.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: power manager for Xfce desktop
  - Homepage: https://docs.xfce.org/xfce/xfce4-power-manager/start
  - Install: `sudo apt-get install xfce4-power-manager`
  - Install (apt): `sudo apt install xfce4-power-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libglib2.0-0t64 (>= 2.56.0), libgtk-3-0t64 (>= 3.21.5), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.8), libx11-6, libxext6, libxfce4ui-2-0 (>= 4.18.4), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxrandr2 (>= 2:1.2.99.2), upower, xfce4-power-manager-data (= 4.18.3+mint1)
  - recommends: default-logind | logind, xfce4-power-manager-plugins

  </details>

- **xfce4-power-manager-data**
  - Latest version: 4.18.3+mint1
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: power manager for Xfce desktop, arch-indep files
  - Homepage: https://docs.xfce.org/xfce/xfce4-power-manager/start
  - Install: `sudo apt-get install xfce4-power-manager-data`
  - Install (apt): `sudo apt install xfce4-power-manager-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - recommends: librsvg2-common, xfce4-power-manager

  </details>

- **xfce4-power-manager-plugins**
  - Latest version: 4.18.3+mint1
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: power manager plugins for Xfce panel
  - Homepage: https://docs.xfce.org/xfce/xfce4-power-manager/start
  - Install: `sudo apt-get install xfce4-power-manager-plugins`
  - Install (apt): `sudo apt install xfce4-power-manager-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.38), libcairo2 (>= 1.2.4), libglib2.0-0t64 (>= 2.56.0), libgtk-3-0t64 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.8), libx11-6, libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.18.4), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxrandr2 (>= 2:1.2.99.2), xfce4-power-manager

  </details>

- **xfce4-session**
  - Latest version: 4.18.3-1mint1+zara
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Xfce4 Session Manager
  - Homepage: https://docs.xfce.org/xfce/xfce4-session/start
  - Install: `sudo apt-get install xfce4-session`
  - Install (apt): `sudo apt install xfce4-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.38), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), libsm6, libwnck-3-0 (>= 2.91.6), libx11-6, libxfce4ui-2-0 (>= 4.18.2), libxfce4util7 (>= 4.17.2), libxfconf-0-3 (>= 4.6.0), x11-xserver-utils, xfce4-settings, xfconf
  - recommends: default-dbus-session-bus | dbus-session-bus, default-logind | logind, light-locker | xfce4-screensaver | xscreensaver | gnome-screensaver | mate-screensaver, systemd-sysv, upower, xfdesktop4, xfwm4
  - suggests: fortune-mod, sudo
  - breaks: xfce4-utils
  - replaces: xfce4-utils
  - provides: x-session-manager

  </details>

- **xfce4-xapp-status-plugin**
  - Latest version: 0.4.4+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: xapp status icon plugin for the Xfce4 panel
  - Install: `sudo apt-get install xfce4-xapp-status-plugin`
  - Install (apt): `sudo apt install xfce4-xapp-status-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.19.12), libjson-glib-1.0-0 (>= 1.5.2), libxapp1 (>= 1.8.8), libxfce4panel-2.0-4 (>= 4.11.0)

  </details>

- **xfce4-xapp-status-plugin-dbg**
  - Latest version: 0.4.4+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: debug symbols for xfce4-xapp-status-plugin.
  - Install: `sudo apt-get install xfce4-xapp-status-plugin-dbg`
  - Install (apt): `sudo apt install xfce4-xapp-status-plugin-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xfce4-xapp-status-plugin (= 0.4.4+zena)

  </details>

- **xreader**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document viewer
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install xreader`
  - Install (apt): `sudo apt install xreader`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.21.5), libice6 (>= 1:1.0.0), libsm6, libx11-6, libxapp1 (>= 2.6.0), libxreaderdocument3 (= 4.6.3+zena), libxreaderview3 (= 4.6.3+zena), shared-mime-info, xreader-common (>= 4.6.3+zena)
  - recommends: dbus-x11, gvfs
  - suggests: poppler-data, unrar
  - provides: djvu-viewer, pdf-viewer, postscript-viewer

  </details>

- **xreader-common**
  - Latest version: 4.6.3+zena
  - Architectures: all
  - Suite: zena
  - Components: backport
  - Description: Document viewer (common files)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install xreader-common`
  - Install (apt): `sudo apt install xreader-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional

  </details>

- **xreader-dbg**
  - Latest version: 4.6.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Document viewer (debugging symbols)
  - Homepage: http://github.com/linuxmint/xreader/
  - Install: `sudo apt-get install xreader-dbg`
  - Install (apt): `sudo apt install xreader-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xreader (= 4.6.3+zena)

  </details>

- **xviewer**
  - Latest version: 3.4.16+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Image viewer
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install xviewer`
  - Install (apt): `sudo apt install xviewer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: graphics
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-peas-1.0, gsettings-desktop-schemas (>= 2.91.92), libatk1.0-0t64 (>= 1.32.0-2~), libc6 (>= 2.34), libcairo2 (>= 1.10.0), libcinnamon-desktop4 (>= 2.0.4), libexempi8 (>= 2.5.0), libexif12 (>= 0.6.21-1~), libgdk-pixbuf-2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.12), libglib2.0-0t64 (>= 2.79.0), libgtk-3-0t64 (>= 3.13.7), libjpeg8 (>= 8c), liblcms2-2 (>= 2.2+git20110628), libpeas-1.0-0 (>= 1.0.0), librsvg2-2 (>= 2.36.2), libx11-6, libxapp1 (>= 2.6.0), shared-mime-info (>= 0.20), xapps-common (>= 2.5.0), zlib1g (>= 1:1.1.4)
  - recommends: heif-gdk-pixbuf, librsvg2-common, webp-pixbuf-loader, yelp

  </details>

- **xviewer-dbg**
  - Latest version: 3.4.16+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Image viewer - debugging symbols
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install xviewer-dbg`
  - Install (apt): `sudo apt install xviewer-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xviewer (= 3.4.16+zena)

  </details>

- **xviewer-dev**
  - Latest version: 3.4.16+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: Development files for Xviewer
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install xviewer-dev`
  - Install (apt): `sudo apt install xviewer-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xviewer-3.0 (= 3.4.16+zena), libgtk-3-dev, xviewer (>= 3.4.16+zena)

  </details>

- **xviewer-plugins**
  - Latest version: 3.4.3+zena
  - Architectures: amd64
  - Suite: zena
  - Components: backport
  - Description: set of plugins for xviewer
  - Homepage: https://github.com/linuxmint/xviewer-plugins
  - Install: `sudo apt-get install xviewer-plugins`
  - Install (apt): `sudo apt install xviewer-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtk-3.0, gir1.2-xviewer-3.0, gsettings-desktop-schemas, libc6 (>= 2.14), libcairo2 (>= 1.2.4), libchamplain-0.12-0 (>= 0.11.0), libchamplain-gtk-0.12-0 (>= 0.11.0), libclutter-1.0-0 (>= 1.10.0), libclutter-gtk-1.0-0 (>= 1.1.2), libexif12 (>= 0.6.21-1~), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.75.3), libgtk-3-0t64 (>= 3.3.16), libpeas-1.0-0 (>= 1.0.0), python3-gi, python3:any, python3.12, xviewer

  </details>


### <a id="packages-Z"></a>Z

- **zenity**
  - Latest version: 3.44.2-1+wilma
  - Architectures: amd64
  - Suite: zena
  - Components: upstream
  - Description: Display graphical dialog boxes from shell scripts
  - Homepage: https://wiki.gnome.org/Projects/Zenity
  - Install: `sudo apt-get install zenity`
  - Install (apt): `sudo apt install zenity`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: libc6 (>= 2.34), libgdk-pixbuf-2.0-0 (>= 2.22.0), libglib2.0-0t64 (>= 2.24.0), libgtk-3-0t64 (>= 3.19.12), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libx11-6, zenity-common (>= 3.44.2-1+wilma)

  </details>

- **zenity-common**
  - Latest version: 3.44.2-1+wilma
  - Architectures: all
  - Suite: zena
  - Components: upstream
  - Description: Display graphical dialog boxes from shell scripts (common files)
  - Homepage: https://wiki.gnome.org/Projects/Zenity
  - Install: `sudo apt-get install zenity-common`
  - Install (apt): `sudo apt install zenity-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Linux Mint main repository; base Ubuntu repos are inherited.
- Repo tags: linuxmint, ubuntu-derivative, apt
- Key tags: linuxmint, apt
