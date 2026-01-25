# Linux Mint Tricia - main (linuxmint-tricia)

## Repository
- Repository ID: `linuxmint-tricia-main`
- OS: `linuxmint-tricia`
- Source: `http://packages.linuxmint.com tricia main upstream import backport`

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
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com tricia main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-tricia-main.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/linuxmint-archive-keyring.asc -o /tmp/linuxmint-archive-keyring.asc
gpg --dearmor /tmp/linuxmint-archive-keyring.asc
sudo install -m 0644 /tmp/linuxmint-archive-keyring.gpg /usr/share/keyrings/linuxmint-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/linuxmint-archive-keyring.gpg] http://packages.linuxmint.com tricia main upstream import backport" | sudo tee /etc/apt/sources.list.d/linuxmint-tricia-main.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (578)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-E">E</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-I">I</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-R">R</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-U">U</a> <a href="#packages-W">W</a> <a href="#packages-X">X</a> <a href="#packages-Y">Y</a>
</div>


### <a id="packages-A"></a>A

- **apturl**
  - Latest version: 0.5.2+linuxmint8
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: install packages using the apt protocol - GTK+ frontend
  - Install: `sudo apt-get install apturl`
  - Install (apt): `sudo apt install apturl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apturl-common (= 0.5.2+linuxmint8), gir1.2-gtk-3.0, gir1.2-xapp-1.0, python3-gi, python3:any (>= 3.3.2-2~)

  </details>

- **apturl-common**
  - Latest version: 0.5.2+linuxmint8
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: install packages using the apt protocol - common data
  - Install: `sudo apt-get install apturl-common`
  - Install (apt): `sudo apt install apturl-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintupdate, python3-apt, python3:any (>= 3.3.2-2~)

  </details>

- **apturl-kde**
  - Latest version: 0.5.2+linuxmint8
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Transitional package.
  - Install: `sudo apt-get install apturl-kde`
  - Install (apt): `sudo apt install apturl-kde`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apturl

  </details>

- **awf**
  - Latest version: 1.2.1-0ubuntu1
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: A theme preview application for gtk2 and gtk3.
  - Homepage: https://github.com/valr/awf
  - Install: `sudo apt-get install awf`
  - Install (apt): `sudo apt install awf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Valère Monseur (valr) <valere.monseur@ymail.com>
  - Section: x11
  - Priority: extra
  - depends: libc6 (>= 2.2.5), libglib2.0-0 (>= 2.16.0), libgtk-3-0 (>= 3.0.0), libgtk2.0-0 (>= 2.24.0)

  </details>


### <a id="packages-B"></a>B

- **base-files**
  - Latest version: 19.3.1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Debian base system miscellaneous files
  - Install: `sudo apt-get install base-files`
  - Install (apt): `sudo apt install base-files`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: admin
  - Priority: required
  - depends: libc6 (>= 2.3.4)
  - preDepends: awk
  - breaks: initscripts (<< 2.88dsf-13.3), sendfile (<< 2.1b.20080616-5.2~)
  - replaces: base, dpkg (<= 1.15.0), miscutils
  - provides: base

  </details>

- **blueberry**
  - Latest version: 1.3.4.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: A configuration tool for Bluetooth
  - Install: `sudo apt-get install blueberry`
  - Install (apt): `sudo apt install blueberry`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: bluez-obexd, bluez-tools, gir1.2-gnomebluetooth-1.0, gir1.2-notify-0.7, gnome-bluetooth, python3, python3-dbus, python3-gi, python3-setproctitle, rfkill, wmctrl
  - breaks: cinnamon-bluetooth
  - replaces: cinnamon-bluetooth

  </details>

- **boot-info**
  - Latest version: 4ppa65
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Diagnose the boot of the computer
  - Homepage: https://launchpad.net/boot-info
  - Install: `sudo apt-get install boot-info`
  - Install (apt): `sudo apt install boot-info`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav

  </details>

- **boot-repair**
  - Latest version: 4ppa65
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Graphical tool to repair boot problems
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-repair`
  - Install (apt): `sudo apt install boot-repair`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav
  - recommends: ntfsprogs | ntfs-3g (>= 1:2011.4.12AR.4), xz-utils | xz-lzma | lzma

  </details>

- **boot-sav**
  - Latest version: 4ppa65
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Librairies for Boot-Info, OS-uninstaller and Boot-repair
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-sav`
  - Install (apt): `sudo apt install boot-sav`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: gettext-base, glade2script (>= 3) | glade2script-gtk2, parted, xdg-utils, zenity
  - recommends: boot-sav-extra, efibootmgr, gawk | mawk (>= 1.3.4), lsb-release, os-prober, pastebinit, syslinux-common | syslinux | mbr, zip
  - suggests: boot-info, boot-repair, cryptsetup, dmraid, lvm2, mdadm, os-uninstaller

  </details>

- **boot-sav-extra**
  - Latest version: 4ppa65
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Extra librairies for OS-uninstaller and Boot-repair
  - Homepage: https://launchpad.net/boot-repair
  - Install: `sudo apt-get install boot-sav-extra`
  - Install (apt): `sudo apt install boot-sav-extra`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav

  </details>


### <a id="packages-C"></a>C

- **caja**
  - Latest version: 1.22.2-2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: file manager for the MATE desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja`
  - Install (apt): `sudo apt install caja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: utils
  - Priority: optional
  - depends: caja-common (= 1.22.2-1+tricia), caja-common (= 1.22.2-2+tricia), desktop-file-utils, gvfs, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libcaja-extension1 (= 1.22.2-1+tricia), libcaja-extension1 (= 1.22.2-2+tricia), libexempi3 (>= 2.4.0), libexif12 (>= 0.6.21-1~), libgail-3-0 (>= 3.0.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libglib2.0-bin, libglib2.0-data, libgtk-3-0 (>= 3.21.5), libice6 (>= 1:1.0.0), libmate-desktop-2-17 (>= 1.20), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.20.0), libpangocairo-1.0-0 (>= 1.14.0), libselinux1 (>= 1.32), libsm6, libx11-6, libxml2 (>= 2.7.4), mate-desktop, shared-mime-info
  - recommends: gvfs-backends
  - suggests: engrampa, gstreamer1.0-tools, meld
  - breaks: caja-common (<< 1.22.1-1~), libcaja-extension (<< 1.10.0), libcaja-extension1 (<< 1.10.0), mate-session-manager (<< 1.8.1-7)
  - replaces: caja-common (<< 1.22.1-1~)

  </details>

- **caja-common**
  - Latest version: 1.22.2-2+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: file manager for the MATE desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-common`
  - Install (apt): `sudo apt install caja-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: utils
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: caja (<< 1.9.0)
  - replaces: caja (<< 1.9.0)

  </details>

- **caja-dropbox**
  - Latest version: 1.22.1-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Dropbox integration for Caja
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-dropbox`
  - Install (apt): `sudo apt install caja-dropbox`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: non-free/x11
  - Priority: optional
  - depends: dbus-x11, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, libc6 (>= 2.15), libcaja-extension1 (>= 1.20), libglib2.0-0 (>= 2.36.0), libgtk-3-0 (>= 3.0.0), policykit-1, procps, python3, python3-gi, python3-gpg
  - suggests: caja

  </details>

- **caja-extensions-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Caja extensions (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-extensions-common`
  - Install (apt): `sudo apt install caja-extensions-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional

  </details>

- **caja-image-converter**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Caja extension to mass resize or rotate images
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-image-converter`
  - Install (apt): `sudo apt install caja-image-converter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), imagemagick, libc6 (>= 2.4), libcaja-extension1 (>= 1.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0)

  </details>

- **caja-open-terminal**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Caja plugin for opening terminals in arbitrary local paths
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-open-terminal`
  - Install (apt): `sudo apt install caja-open-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libcaja-extension1 (>= 1.22.0), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.0.0), libmate-desktop-2-17 (>= 1.20)

  </details>

- **caja-sendto**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: integrates email clients and Pidgin into the Caja file manager
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-sendto`
  - Install (apt): `sudo apt install caja-sendto`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libcaja-extension1 (>= 1.22.0), libdbus-glib-1-2 (>= 0.78), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.26.0), libgtk-3-0 (>= 3.21.4), libgupnp-1.0-4 (>= 0.18.0)
  - suggests: pidgin (>= 2.0.0) | gajim, python-dbus, thunderbird | icedove | evolution (>= 2.28) | claws-mail

  </details>

- **caja-share**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Allows one to quickly share a folder from the Caja file manager
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-share`
  - Install (apt): `sudo apt install caja-share`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), libc6 (>= 2.7), libcaja-extension1 (>= 1.22.0), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.0.0), samba-common-bin

  </details>

- **caja-wallpaper**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Allows one to quickly set a wallpaper from folders
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-wallpaper`
  - Install (apt): `sudo apt install caja-wallpaper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), libcaja-extension1 (>= 1.22.0), libglib2.0-0 (>= 2.26.0)

  </details>

- **caja-xattr-tags**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Allows one to view extended attributes
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install caja-xattr-tags`
  - Install (apt): `sudo apt install caja-xattr-tags`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-extensions-common (= 1.22.1-1+tricia), libc6 (>= 2.2.5), libcaja-extension1 (>= 1.22.0), libglib2.0-0 (>= 2.18.0)

  </details>

- **caribou**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install caribou`
  - Install (apt): `sudo apt install caribou`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-caribou-1.0, gir1.2-clutter-1.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), python3-dbus, python3-gi, python3-pyatspi, python3:any (>= 3.3.2-2~)

  </details>

- **caribou-antler**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install caribou-antler`
  - Install (apt): `sudo apt install caribou-antler`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: caribou (>= 0.4.21+mint1+tricia), dconf-gsettings-backend | gsettings-backend, gir1.2-caribou-1.0, gir1.2-clutter-1.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, libcaribou-gtk-module (>= 0.4.21+mint1+tricia), libcaribou-gtk3-module (>= 0.4.21+mint1+tricia), python3-dbus, python3-gi, python3:any (>= 3.3.2-2~)

  </details>

- **catfish**
  - Latest version: 1.4.10-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: File searching tool which is configurable via the command line
  - Homepage: https://docs.xfce.org/apps/catfish/start
  - Install: `sudo apt-get install catfish`
  - Install (apt): `sudo apt install catfish`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Python Applications Packaging Team <python-apps-team@lists.alioth.debian.org>
  - Section: utils
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, python3-dbus, python3-gi-cairo, python3-pexpect, python3:any (>= 3.3.2-2~)
  - recommends: mlocate | locate

  </details>

- **celluloid**
  - Latest version: 0.17-0mint2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: simple GTK+ frontend for mpv
  - Homepage: https://github.com/gnome-mpv/gnome-mpv
  - Install: `sudo apt-get install celluloid`
  - Install (apt): `sudo apt install celluloid`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xu Zhen <xuzhen@fastmail.com>
  - Section: video
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, ffmpegthumbnailer, libc6 (>= 2.14), libcairo2 (>= 1.2.4), libepoxy0 (>= 1.0), libglib2.0-0 (>= 2.44), libgtk-3-0 (>= 3.22.23), libmpv1 (>= 0.9.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0)
  - recommends: youtube-dl
  - breaks: gnome-mpv (<= 0.16)
  - replaces: gnome-mpv (<= 0.16)

  </details>

- **cinnamon**
  - Latest version: 4.4.8+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Modern Linux desktop
  - Homepage: http://cinnamon.linuxmint.com
  - Install: `sudo apt-get install cinnamon`
  - Install (apt): `sudo apt install cinnamon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-common, cinnamon-control-center, cinnamon-desktop-data, cinnamon-l10n, cinnamon-screensaver, cinnamon-session, cinnamon-settings-daemon, cjs (>= 3.8), cups-pk-helper, dconf-gsettings-backend | gsettings-backend, gir1.2-accountsservice-1.0, gir1.2-caribou-1.0, gir1.2-cinnamondesktop-3.0, gir1.2-cmenu-3.0, gir1.2-cvc-1.0, gir1.2-gkbd-3.0, gir1.2-gtk-3.0, gir1.2-gtkclutter-1.0, gir1.2-keybinder-3.0, gir1.2-meta-muffin-0.0, gir1.2-nm-1.0 | gir1.2-networkmanager-1.0, gir1.2-nma-1.0, gir1.2-notify-0.7, gir1.2-polkit-1.0, gir1.2-soup-2.4, gir1.2-upowerglib-1.0, gir1.2-xapp-1.0 (>= 1.0.4~), gkbd-capplet, gnome-icon-theme-symbolic (>= 2.91), gsettings-desktop-schemas (>= 0.1.7), iso-flag-png, libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra-pulse, libcinnamon-desktop4, libcinnamon-menu-3-0 (>= 2.2.0), libcjs0-libmozjs-52-0, libcjs0f (>= 4.4.0+tricia), libcroco3 (>= 0.6.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.2), libgl1, libglib2.0-0 (>= 2.37.3), libglib2.0-bin, libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0 (>= 3.9.12), libmuffin0, libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libstartup-notification0 (>= 0.11), libx11-6, libxfixes3 (>= 1:5.0), libxml2 (>= 2.7.4), mate-panel | gnome-panel | tint2, mesa-utils, metacity, nemo, network-manager-gnome, policykit-1-gnome, python3, python3-dbus, python3-gi, python3-gi-cairo, python3-pam | python3-pampy, python3-pexpect, python3-pil, python3-pyinotify, python3-setproctitle, python3-tinycss, python3-tz, python3:any, streamer, wget, xapps-common
  - recommends: gnome-terminal | x-terminal-emulator, gnome-themes-extra | gnome-themes-standard
  - suggests: cinnamon-doc
  - provides: notification-daemon, x-window-manager

  </details>

- **cinnamon-common**
  - Latest version: 4.4.8+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon desktop (Common data files)
  - Homepage: http://cinnamon.linuxmint.com
  - Install: `sudo apt-get install cinnamon-common`
  - Install (apt): `sudo apt install cinnamon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gettext, gir1.2-cinnamondesktop-3.0, gir1.2-meta-muffin-0.0, gir1.2-timezonemap-1.0, gvfs-bin, python3-xapp, xdg-utils

  </details>

- **cinnamon-control-center**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop
  - Homepage: http://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center`
  - Install (apt): `sudo apt install cinnamon-control-center`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: accountsservice, apg, cinnamon-control-center-data (= 4.4.0+tricia), cinnamon-desktop-data, cinnamon-settings-daemon, desktop-file-utils, gettext, gnome-online-accounts, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.10.0), libcinnamon-control-center1 (= 4.4.0+tricia), libcinnamon-desktop4, libcinnamon-menu-3-0 (>= 2.2.0), libcolord2 (>= 0.1.29), libfontconfig1 (>= 2.12), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgnomekbd8 (>= 3.6.0), libgoa-1.0-0b (>= 3.16.2), libgoa-backend-1.0-1 (>= 3.10.0), libgtk-3-0 (>= 3.16.2), libmm-glib0 (>= 0.7.991), libnm0 (>= 1.1.90), libnma0 (>= 1.8.0), libnotify4 (>= 0.7.3), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), libwacom2 (>= 0.7), libx11-6, libxi6 (>= 2:1.2.99.4), libxklavier16 (>= 5.1), policykit-1-gnome, xdg-utils
  - recommends: cinnamon-l10n, iso-codes, mesa-utils, mousetweaks
  - suggests: x11-xserver-utils

  </details>

- **cinnamon-control-center-data**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: configuration applets for Cinnamon - data files
  - Homepage: http://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center-data`
  - Install (apt): `sudo apt install cinnamon-control-center-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - recommends: cinnamon-control-center (>= 4.4.0+tricia)
  - conflicts: cinnamon-capplets-data
  - breaks: cinnamon-control-center (<< 2.8.0)
  - replaces: cinnamon-capplets-data, cinnamon-control-center (<< 2.8.0)
  - provides: cinnamon-capplets-data

  </details>

- **cinnamon-control-center-dbg**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop - debug symbols
  - Homepage: http://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install cinnamon-control-center-dbg`
  - Install (apt): `sudo apt install cinnamon-control-center-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon-control-center (= 4.4.0+tricia)

  </details>

- **cinnamon-core**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.8+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Debugging symbols for the Cinnamon desktop
  - Homepage: http://cinnamon.linuxmint.com
  - Install: `sudo apt-get install cinnamon-dbg`
  - Install (apt): `sudo apt install cinnamon-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: cinnamon (= 4.4.8+tricia), cinnamon-control-center-dbg, libcinnamon-desktop-dbg, libcinnamon-menu-3-0-dbg, libcjs-dbg, libcvc-dbg, muffin-dbg, nemo-dbg

  </details>

- **cinnamon-desktop-data**
  - Latest version: 4.4.1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Common files for Cinnamon desktop apps
  - Install: `sudo apt-get install cinnamon-desktop-data`
  - Install (apt): `sudo apt install cinnamon-desktop-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, python3, python3-gi

  </details>

- **cinnamon-desktop-environment**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.8+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon documentation
  - Homepage: http://cinnamon.linuxmint.com
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
  - Latest version: 4.4.2
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Translation files for the Cinnamon desktop
  - Install: `sudo apt-get install cinnamon-l10n`
  - Install (apt): `sudo apt install cinnamon-l10n`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: localization
  - Priority: optional
  - breaks: cinnamon-common (<< 2.0), cinnamon-settings-daemon (<< 3.5), cinnamon-translations
  - replaces: cinnamon-common (<< 2.0), cinnamon-settings-daemon (<< 3.5), cinnamon-translations

  </details>

- **cinnamon-screensaver**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon screen saver and locker
  - Install: `sudo apt-get install cinnamon-screensaver`
  - Install (apt): `sudo apt install cinnamon-screensaver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 3.5), gir1.2-accountsservice-1.0, gir1.2-cinnamondesktop-3.0 (>= 3.5), gir1.2-gkbd-3.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, iso-flag-png, libc6 (>= 2.4), libcscreensaver0 (= 4.4.1+tricia), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), python3, python3-gi, python3-gi-cairo, python3-setproctitle, python3-xapp (>= 1.0.1), python3-xlib, python3:any (>= 3.3.2-2~)
  - recommends: libpam-gnome-keyring
  - breaks: cinnamon-screensaver-pam-helper (<< 3.8), cinnamon-screensaver-webkit-plugin (<< 3.9), cinnamon-screensaver-x-plugin (<< 3.9)
  - replaces: cinnamon-screensaver-pam-helper (<< 3.8), cinnamon-screensaver-webkit-plugin (<< 3.9), cinnamon-screensaver-x-plugin (<< 3.9)

  </details>

- **cinnamon-session**
  - Latest version: 4.4.2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon Session Manager - Minimal runtime
  - Install: `sudo apt-get install cinnamon-session`
  - Install (apt): `sudo apt install cinnamon-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 3.6), cinnamon-session-common (= 4.4.2+tricia), dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, libc6 (>= 2.17), libcairo2 (>= 1.2.4), libcanberra0 (>= 0.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libgl1, libglib2.0-0 (>= 2.45.3), libgtk-3-0 (>= 3.0.0), libice6 (>= 1:1.0.0), libsm6, libsystemd0, libx11-6, libxapp1, libxau6, libxcomposite1 (>= 1:0.3-1), libxext6, libxrender1, libxtst6, upower (>= 0.9.0)
  - recommends: cinnamon-l10n
  - breaks: cinnamon-session-common (<< 2.2.2-5~)
  - replaces: cinnamon-session-common (<< 2.2.2-5~)
  - provides: x-session-manager

  </details>

- **cinnamon-session-common**
  - Latest version: 4.4.2+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: daemon handling the Cinnamon session settings
  - Homepage: http://cinnamon.linuxmint.com
  - Install: `sudo apt-get install cinnamon-settings-daemon`
  - Install (apt): `sudo apt install cinnamon-settings-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 2.6.3), dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libcinnamon-desktop4, libcolord2 (>= 0.1.31), libcups2 (>= 1.6.0), libcvc0, libdbus-glib-1-2 (>= 0.88), libfontconfig1 (>= 2.12), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.43.92), libgnomekbd8 (>= 3.6.0), libgtk-3-0 (>= 3.16.2), libgudev-1.0-0 (>= 146), liblcms2-2 (>= 2.2+git20110628), libnotify4 (>= 0.7.3), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libpango-1.0-0 (>= 1.22.0), libpolkit-gobject-1-0 (>= 0.99), libpulse0 (>= 0.99.1), librsvg2-2 (>= 2.26.0), libsystemd0, libupower-glib3 (>= 0.99.0), libwacom2 (>= 0.7), libx11-6, libxext6, libxfixes3 (>= 1:4.0.1), libxi6 (>= 2:1.2.99.4), libxklavier16 (>= 5.0), libxtst6
  - recommends: cinnamon-l10n, pulseaudio
  - suggests: cinnamon-screensaver, gnome-calculator | galculator | mate-calc, gnome-power-manager, gnome-screenshot, muffin | x-window-manager, tracker-gui | gnome-search-tool, x11-xserver-utils
  - breaks: banshee (<< 0.13.2+dfsg-7), gnome-color-manager (<< 3.0), gnome-screensaver (<< 2.28.0), gnome-session (<< 2.24), rhythmbox (<< 0.11.5), totem (<< 2.22.0), unity-greeter (<< 0.2.1-0ubuntu1)

  </details>

- **cinnamon-settings-daemon-dev**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Headers for building applications communicating with cinnamon-settings-daemon
  - Homepage: http://cinnamon.linuxmint.com
  - Install: `sudo apt-get install cinnamon-settings-daemon-dev`
  - Install (apt): `sudo apt install cinnamon-settings-daemon-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libdbus-glib-1-dev (>= 0.74), libglib2.0-dev (>= 2.26.0)

  </details>

- **cjs**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install cjs`
  - Install (apt): `sudo apt install cjs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: interpreters
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libcjs0-libmozjs-52-0, libcjs0f (>= 4.4.0+tricia), libgcc1 (>= 1:3.0), libglib2.0-0 (>= 2.42.0), libstdc++6 (>= 4.1.1)

  </details>

- **clean-ubiquity**
  - Latest version: 4ppa42
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Make the Ubiquity installer safer
  - Homepage: https://launchpad.net/clean-ubiquity
  - Install: `sudo apt-get install clean-ubiquity`
  - Install (apt): `sudo apt install clean-ubiquity`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav

  </details>


### <a id="packages-D"></a>D

- **desktop-file-utils**
  - Latest version: 0.23+linuxmint8
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Utilities for .desktop files
  - Homepage: http://www.freedesktop.org/wiki/Software/desktop-file-utils
  - Install: `sudo apt-get install desktop-file-utils`
  - Install (apt): `sudo apt install desktop-file-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.28.0)

  </details>

- **drawing**
  - Latest version: 0.4.7
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: A drawing application for the GNOME desktop.
  - Homepage: https://maoschanz.github.io/drawing/
  - Install: `sudo apt-get install drawing`
  - Install (apt): `sudo apt install drawing`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Romain F. T. <rrroschan@gmail.com>
  - Section: graphics
  - Priority: optional
  - depends: gir1.2-gtk-3.0 (>= 3.22.30), python3-gi-cairo (>= 3.26.0)

  </details>

- **dropbox**
  - Latest version: 2019.02.14
  - Architectures: amd64
  - Suite: tricia
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
  - depends: gir1.2-gdkpixbuf-2.0 (>= 2.30.7), gir1.2-glib-2.0 (>= 1.40.0), gir1.2-gtk-3.0 (>= 3.10.8), gir1.2-pango-1.0 (>= 1.36.3), libatk1.0-0 (>= 2.10), libc6 (>= 2.19), libcairo2 (>= 1.13), libglib2.0-0 (>= 2.40), libgtk-3-0 (>= 3.10.8), libpango1.0-0 (>= 1.36.3), lsb-release, procps, python3 (>= 3.4.0), python3-gi (>= 3.12)
  - suggests: nautilus (>= 3.10.1), python3-gpg (>= 1.8.0)
  - breaks: nautilus-dropbox
  - replaces: nautilus-dropbox
  - provides: nautilus-dropbox

  </details>


### <a id="packages-E"></a>E

- **engrampa**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: bzip2 (>= 1.0.1), engrampa-common (= 1.22.2-1+tricia), gzip (>= 1.3.2), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libcaja-extension1 (>= 1.20), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libjson-glib-1.0-0 (>= 0.12.0), libmagic1 (>= 5.12), libpango-1.0-0 (>= 1.14.0), p7zip-full, tar (>= 1.13.25)
  - recommends: gvfs, unzip, xz-utils, zip
  - suggests: arj, binutils, cpio, lha, lzip, lzma, lzop, ncompress, rar, rpm2cpio, rzip, sharutils, unace, unalz, unar | unrar | p7zip-rar, zoo
  - breaks: engrampa-common (<< 1.8.0)

  </details>

- **engrampa-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
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
  - breaks: engrampa (<= 1.0.3-1)

  </details>

- **exo-utils**
  - Latest version: 0.12.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Utility files for libexo
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install exo-utils`
  - Install (apt): `sudo apt install exo-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libexo-2-0 (= 0.12.8-1~18.04), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - breaks: xfce4-cddrive-plugin (<= 0.0.1-0ubuntu2), xfce4-volstatus-icon (<= 0.1.0-0ubuntu5)

  </details>


### <a id="packages-F"></a>F

- **firefox**
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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

- **firefox-globalmenu**
  - Latest version: 68.0.2+linuxmint1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Safe and easy web browser from Mozilla (transitional package)
  - Install: `sudo apt-get install firefox-globalmenu`
  - Install (apt): `sudo apt install firefox-globalmenu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Mozilla Team <ubuntu-mozillateam@lists.ubuntu.com>
  - Section: oldlibs
  - Priority: extra
  - depends: firefox

  </details>

- **firefox-locale-af**
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 136.0.1+linuxmint1
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 1.3.2
  - Architectures: all
  - Suite: tricia
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

- **gdebi**
  - Latest version: 0.9.5.7xmint9
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: simple tool to view and install deb files - GNOME GUI
  - Install: `sudo apt-get install gdebi`
  - Install (apt): `sudo apt install gdebi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gdebi-core (= 0.9.5.7xmint9), gir1.2-gtk-3.0, gnome-icon-theme, python3-gi, python3:any (>= 3.3.2-2~)
  - recommends: libgtk2-perl, lintian, shared-mime-info

  </details>

- **gdebi-core**
  - Latest version: 0.9.5.7xmint9
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: simple tool to install deb files
  - Install: `sudo apt-get install gdebi-core`
  - Install (apt): `sudo apt install gdebi-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: file, mint-common (>= 2), python3-apt, python3-debian, python3:any (>= 3.3.2-2~)
  - suggests: xz-utils | xz-lzma

  </details>

- **gigolo**
  - Latest version: 0.5.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: frontend to manage connections to remote filesystems using GIO/GVfs
  - Homepage: http://www.uvena.de/gigolo/
  - Install: `sudo apt-get install gigolo`
  - Install (apt): `sudo apt install gigolo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libx11-6
  - recommends: libglib2.0-bin

  </details>

- **gir1.2-appindicator-0.1**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Typelib files for libappindicator1.
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install gir1.2-appindicator-0.1`
  - Install (apt): `sudo apt install gir1.2-appindicator-0.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-2.0 (>= 2.12.0), libappindicator1 (>= 0.4.90)

  </details>

- **gir1.2-appindicator3-0.1**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Typelib files for libappindicator3-1.
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install gir1.2-appindicator3-0.1`
  - Install (apt): `sudo apt install gir1.2-appindicator3-0.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0 (>= 2.91.3), libappindicator3-1 (>= 0.4.90)

  </details>

- **gir1.2-caja**
  - Latest version: 1.22.2-2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: GObject introspection data for Caja (transitional package)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-caja`
  - Install (apt): `sudo apt install gir1.2-caja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: gir1.2-caja-2.0 (= 1.22.2-1+tricia), gir1.2-caja-2.0 (= 1.22.2-2+tricia)

  </details>

- **gir1.2-caja-2.0**
  - Latest version: 1.22.2-2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: GObject introspection data for Caja
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-caja-2.0`
  - Install (apt): `sudo apt install gir1.2-caja-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libcaja-extension1 (>= 1.22.0)
  - breaks: gir1.2-caja (<< 1.20.2-1~)
  - replaces: gir1.2-caja (<< 1.20.2-1~)

  </details>

- **gir1.2-caribou-1.0**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: GObject introspection for the Caribou library
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install gir1.2-caribou-1.0`
  - Install (apt): `sudo apt install gir1.2-caribou-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: libcaribou0 (= 0.4.21+mint1+tricia)

  </details>

- **gir1.2-cinnamondesktop-3.0**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Introspection data for CinnamonDesktop
  - Install: `sudo apt-get install gir1.2-cinnamondesktop-3.0`
  - Install (apt): `sudo apt install gir1.2-cinnamondesktop-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libcinnamon-desktop4

  </details>

- **gir1.2-cmenu-3.0**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for the Cinnamon menu library
  - Install: `sudo apt-get install gir1.2-cmenu-3.0`
  - Install (apt): `sudo apt install gir1.2-cmenu-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - conflicts: gobject-introspection-repository

  </details>

- **gir1.2-cvc-1.0**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Introspection data for Cinnamon pulseaudio abstraction
  - Install: `sudo apt-get install gir1.2-cvc-1.0`
  - Install (apt): `sudo apt install gir1.2-cvc-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, libcvc0

  </details>

- **gir1.2-goa-1.0**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Introspection data for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install gir1.2-goa-1.0`
  - Install (apt): `sudo apt install gir1.2-goa-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 0.9.3), libgoa-1.0-0b (>= 3.25.4)

  </details>

- **gir1.2-mate-desktop**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for libmate-desktop (transitional package)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-mate-desktop`
  - Install (apt): `sudo apt install gir1.2-mate-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: gir1.2-matedesktop-2.0 (= 1.22.2-1+tricia)

  </details>

- **gir1.2-mate-menu**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for libmatemenu (transitional package)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-mate-menu`
  - Install (apt): `sudo apt install gir1.2-mate-menu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: gir1.2-matemenu-2.0 (= 1.22.1-1+tricia)

  </details>

- **gir1.2-mate-panel**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for libmate-panel-applet4-1 (transitional package)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-mate-panel`
  - Install (apt): `sudo apt install gir1.2-mate-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: gir1.2-matepanelapplet-4.0 (= 1.22.2-1mint1+tricia)

  </details>

- **gir1.2-matedesktop-2.0**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for the libmate-desktop library
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matedesktop-2.0`
  - Install (apt): `sudo apt install gir1.2-matedesktop-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libmate-desktop-2-17 (>= 1.22.0)
  - breaks: gir1.2-mate-desktop (<< 1.20.1-1~)
  - replaces: gir1.2-mate-desktop (<< 1.20.1-1~)

  </details>

- **gir1.2-matekbd**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for libmatekbd (transitional package)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matekbd`
  - Install (apt): `sudo apt install gir1.2-matekbd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: gir1.2-matekbd-1.0 (= 1.22.0-1+tina)

  </details>

- **gir1.2-matekbd-1.0**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for libmatekbd and libmatekbdui
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matekbd-1.0`
  - Install (apt): `sudo apt install gir1.2-matekbd-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-freedesktop, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xkl-1.0, libmatekbd4 (>= 1.6.1)
  - breaks: gir1.2-matekbd (<< 1.20.1-1~)
  - replaces: gir1.2-matekbd (<< 1.20.1-1~)

  </details>

- **gir1.2-matemenu-2.0**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for the MATE menu specification
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matemenu-2.0`
  - Install (apt): `sudo apt install gir1.2-matemenu-2.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, libmate-menu2 (>= 1.22.0)
  - breaks: gir1.2-mate-menu (<< 1.20.0-1~)
  - replaces: gir1.2-mate-menu (<< 1.20.0-1~)

  </details>

- **gir1.2-matepanelapplet-4.0**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for MATE panel
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install gir1.2-matepanelapplet-4.0`
  - Install (apt): `sudo apt install gir1.2-matepanelapplet-4.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libmate-panel-applet-4-1 (>= 1.20.2)
  - breaks: gir1.2-mate-panel (<< 1.20.1-1~)
  - replaces: gir1.2-mate-panel (<< 1.20.1-1~)

  </details>

- **gir1.2-meta-muffin-0.0**
  - Latest version: 4.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for Muffin
  - Install: `sudo apt-get install gir1.2-meta-muffin-0.0`
  - Install (apt): `sudo apt install gir1.2-meta-muffin-0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-atk-1.0, gir1.2-cinnamondesktop-3.0, gir1.2-freedesktop, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-json-1.0, gir1.2-pango-1.0, libmuffin0
  - breaks: gir1.2-muffin-3.0
  - replaces: gir1.2-muffin-3.0

  </details>

- **gir1.2-nemo-3.0**
  - Latest version: 4.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libnemo-extension1
  - conflicts: gir1.0-nemo-3.0
  - replaces: gir1.0-nemo-3.0

  </details>

- **gir1.2-nma-1.0**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
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
  - depends: gir1.2-gtk-3.0 (>= 3.10), gir1.2-nm-1.0 (>= 1.8), libnma0 (>= 1.8.0)

  </details>

- **gir1.2-nmgtk-1.0**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: GObject introspection data for libnm-gtk
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install gir1.2-nmgtk-1.0`
  - Install (apt): `sudo apt install gir1.2-nmgtk-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-gtk-3.0 (>= 3.10), gir1.2-networkmanager-1.0 (>= 1.8), libnm-gtk0 (>= 1.8.0)

  </details>

- **gir1.2-xapp-1.0**
  - Latest version: 1.6.10+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Introspection data for XApp
  - Install: `sudo apt-get install gir1.2-xapp-1.0`
  - Install (apt): `sudo apt install gir1.2-xapp-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0, gir1.2-gtk-3.0, libxapp1, python:any (<< 2.8), python:any (>= 2.7.5-5~), python3:any (>= 3.3.2-2~)

  </details>

- **gir1.2-xplayer-1.0**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for Xplayer media player
  - Install: `sudo apt-get install gir1.2-xplayer-1.0`
  - Install (apt): `sudo apt install gir1.2-xplayer-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 0.9.12), gir1.2-gtk-3.0 (>= 3.5.2), gir1.2-xplayer-plparser-1.0, libxplayer0 (<< 2.3), libxplayer0 (>= 2.2.5+tricia)

  </details>

- **gir1.2-xplayer-plparser-1.0**
  - Latest version: 1.0.2+tara
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: GObject introspection data for the Xplayer Playlist Parser library
  - Install: `sudo apt-get install gir1.2-xplayer-plparser-1.0`
  - Install (apt): `sudo apt install gir1.2-xplayer-plparser-1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: introspection
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 0.10.7-1~), libxplayer-plparser18 (>= 1.0.0)
  - conflicts: gir1.0-xplayer-plparser-1.0
  - replaces: gir1.0-xplayer-plparser-1.0

  </details>

- **gir1.2-xreader**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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

  </details>

- **glade2script**
  - Latest version: 3.2.3~ppa4
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Glade interface engine for scripts (Gtk3 version)
  - Homepage: https://launchpad.net/glade2script
  - Install: `sudo apt-get install glade2script`
  - Install (apt): `sudo apt install glade2script`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann MRN <yannubuntu@gmail.com>
  - Section: devel
  - Priority: optional
  - depends: gir1.2-appindicator3-0.1, gir1.2-gtk-3.0, gir1.2-notify-0.7, python, python-gi

  </details>

- **glade2script-gtk2**
  - Latest version: 3.2.3~ppa4
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Glade interface engine for scripts (Gtk2 version)
  - Homepage: https://launchpad.net/glade2script
  - Install: `sudo apt-get install glade2script-gtk2`
  - Install (apt): `sudo apt install glade2script-gtk2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann MRN <yannubuntu@gmail.com>
  - Section: devel
  - Priority: optional
  - depends: python, python-gtk2
  - recommends: gtk2-engines-pixbuf
  - suggests: libnotify, python-appindicator, python-glade2, python-gtksourceview2, python-notify, python-vte, python-webkit

  </details>

- **gnome-calendar**
  - Latest version: 3.28.2-0ubuntu0.18.04.1mint1+tessa
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Calendar application for GNOME
  - Homepage: https://wiki.gnome.org/Apps/Calendar
  - Install: `sudo apt-get install gnome-calendar`
  - Install (apt): `sudo apt install gnome-calendar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gsettings-desktop-schemas (>= 3.21.2), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libdazzle-1.0-0 (>= 3.26.1), libecal-1.2-19 (>= 3.17.1), libedataserver-1.2-23 (>= 3.17.90), libedataserverui-1.2-2 (>= 3.17.1), libgeoclue-2-0 (>= 2.4.0), libglib2.0-0 (>= 2.53.1), libgoa-1.0-0b (>= 3.5.1), libgtk-3-0 (>= 3.22.20), libgweather-3-15 (>= 3.11.91), libical3 (>= 3.0.0), libpango-1.0-0 (>= 1.22.0), libpangocairo-1.0-0 (>= 1.14.0), libsoup2.4-1 (>= 2.32.2)
  - recommends: evolution-data-server

  </details>

- **gnome-logs**
  - Latest version: 3.28.0-1linuxmint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: viewer for the systemd journal.
  - Homepage: https://wiki.gnome.org/Apps/Logs
  - Install: `sudo apt-get install gnome-logs`
  - Install (apt): `sudo apt install gnome-logs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gsettings-desktop-schemas, libc6 (>= 2.4), libglib2.0-0 (>= 2.43.90), libgtk-3-0 (>= 3.22.0), libpango-1.0-0 (>= 1.14.0), libsystemd0

  </details>

- **gnome-mpv**
  - Latest version: 0.17-0mint2+tricia
  - Architectures: all
  - Suite: tricia
  - Components: import
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

- **gnome-online-accounts**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: service to manage online accounts for the GNOME desktop
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install gnome-online-accounts`
  - Install (apt): `sudo apt install gnome-online-accounts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: libc6 (>= 2.8), libgcr-base-3-1 (>= 3.8.0), libglib2.0-0 (>= 2.52), libgoa-1.0-0b (= 3.28.0-0ubuntu2mint1), libgoa-backend-1.0-1 (= 3.28.0-0ubuntu2mint1), libkrb5-3 (>= 1.9+dfsg~beta1), librest-0.7-0 (>= 0.7), libsoup2.4-1 (>= 2.42), libwebkit2gtk-4.0-37 (>= 2.12.0), python3-macaroonbakery
  - recommends: gnome-control-center (>= 3.6.1)
  - breaks: evolution-data-server (<< 3.22.3)

  </details>

- **gnome-screenshot**
  - Latest version: 3.25.0-1linuxmint3
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: screenshot application for GNOME
  - Homepage: https://wiki.gnome.org/Apps/Attic/GnomeUtils
  - Install: `sudo apt-get install gnome-screenshot`
  - Install (apt): `sudo apt install gnome-screenshot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.7), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libgdk-pixbuf2.0-0 (>= 2.23.0), libglib2.0-0 (>= 2.39.90), libgtk-3-0 (>= 3.11.5), libx11-6, libxext6

  </details>

- **gnome-shell-extension-onboard**
  - Latest version: 1.4.1-2ubuntu1mint3
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: GNOME Shell extension for the on-screen keyboard Onboard
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install gnome-shell-extension-onboard`
  - Install (apt): `sudo apt install gnome-shell-extension-onboard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-shell (>= 3.16), onboard (>= 1.4.1-2ubuntu1mint3)
  - breaks: onboard-common (<< 1.3.0)
  - replaces: onboard-common (<< 1.3.0)

  </details>

- **gnome-terminal**
  - Latest version: 3.28.1-1ubuntu1mint2
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, gir1.2-glib-2.0, gnome-terminal-data (<< 3.29), gnome-terminal-data (>= 3.28), gsettings-desktop-schemas (>= 0.1.0), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.9), libcairo2 (>= 1.2.4), libdconf1 (>= 0.14.0), libglib2.0-0 (>= 2.49.3), libgtk-3-0 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libuuid1 (>= 2.16), libvte-2.91-0 (>= 0.51.90), libx11-6, python3, python3-gi
  - recommends: gvfs, nautilus-extension-gnome-terminal, yelp
  - provides: x-terminal-emulator

  </details>

- **gnome-terminal-data**
  - Latest version: 3.28.1-1ubuntu1mint2
  - Architectures: all
  - Suite: tricia
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

- **gnote**
  - Latest version: 3.34.0-0mint2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: desktop note taking program using Wiki style links
  - Homepage: https://wiki.gnome.org/Apps/Gnote
  - Install: `sudo apt-get install gnote`
  - Install (apt): `sudo apt install gnote`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatkmm-1.6-1v5 (>= 2.24.0), libc6 (>= 2.27), libgcc1 (>= 1:3.0), libglib2.0-0 (>= 2.28.0), libglibmm-2.4-1v5 (>= 2.54.0), libgtk-3-0 (>= 3.21.4), libgtkmm-3.0-1v5 (>= 3.22.0), libpango-1.0-0 (>= 1.14.0), libpangomm-1.4-1v5 (>= 2.40.0), libsecret-1-0 (>= 0.8), libsigc++-2.0-0v5 (>= 2.8.0), libstdc++6 (>= 5.2), libuuid1 (>= 2.16), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25)

  </details>

- **google-earth-pro-stable**
  - Latest version: 7.3.3.7673-r0
  - Architectures: amd64
  - Suite: tricia
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
  - Latest version: 1.2.2
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.2.2
  - Architectures: all
  - Suite: tricia
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

- **gtk-redshift**
  - Latest version: 1.11-1ubuntu1mint1
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: transitional dummy package
  - Homepage: http://jonls.dk/redshift/
  - Install: `sudo apt-get install gtk-redshift`
  - Install (apt): `sudo apt install gtk-redshift`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: extra
  - depends: redshift-gtk

  </details>


### <a id="packages-I"></a>I

- **ia32-libs**
  - Latest version: 2018.06.06
  - Architectures: amd64
  - Suite: tricia
  - Components: main
  - Description: (no description)
  - Install: `sudo apt-get install ia32-libs`
  - Install (apt): `sudo apt install ia32-libs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gtk2-engines-murrine:i386, gtk2-engines-oxygen:i386, gtk2-engines-pixbuf:i386, gtk2-engines:i386, gvfs:i386, ibus-gtk:i386, libacl1:i386, libaio1:i386, libao4:i386, libasound2-plugins:i386, libasound2:i386, libasyncns0:i386, libattr1:i386, libaudio2:i386, libcanberra-gtk-module:i386, libcap2:i386, libcapi20-3:i386, libcups2:i386, libcupsimage2:i386, libdbus-glib-1-2:i386, libfontconfig1:i386, libfreetype6:i386, libgail-common:i386, libgettextpo0:i386, libgl1-mesa-dri:i386, libgl1-mesa-glx:i386, libglapi-mesa:i386, libglu1-mesa:i386, libgphoto2-6:i386, libgphoto2-port10:i386 | libgphoto2-port12:i386, libgtk2.0-0:i386, libmpg123-0:i386, libncursesw5:i386, libnspr4:i386, libnss3:i386, libodbc1:i386, libopenal1:i386, libpulse-mainloop-glib0:i386, libpulsedsp:i386, libqt4-dbus:i386, libqt4-network:i386, libqt4-opengl:i386, libqt4-qt3support:i386, libqt4-script:i386, libqt4-scripttools:i386, libqt4-sql:i386, libqt4-svg:i386, libqt4-test:i386, libqt4-xml:i386, libqt4-xmlpatterns:i386, libqtcore4:i386, libqtgui4:i386, libqtwebkit4:i386, librsvg2-common:i386, libsane:i386, libsdl-image1.2:i386, libsdl-mixer1.2:i386, libsdl-net1.2:i386, libsdl-ttf2.0-0:i386, libsdl1.2debian:i386, libsqlite3-0:i386, libssl1.0.0:i386, libstdc++5:i386, libstdc++6:i386, libxaw7:i386, libxml2:i386, libxslt1.1:i386, libxss1:i386, libxtst6:i386, odbcinst1debian2:i386, xaw3dg:i386
  - provides: ia32-libs-gtk, ia32-libs-multiarch, ia32-libs-sdl, lib32asound2, lib32v4l-0

  </details>

- **indicator-sound**
  - Latest version: 12.10.2+16.04.20160714-1linuxmint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: System sound indicator.
  - Homepage: https://launchpad.net/indicator-sound
  - Install: `sudo apt-get install indicator-sound`
  - Install (apt): `sudo apt install indicator-sound`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: sound
  - Priority: extra
  - depends: dconf-gsettings-backend | gsettings-backend, gsettings-ubuntu-schemas (>= 0.0.1+14.04.20140224), libaccountsservice0 (>= 0.6.8), libc6 (>= 2.4), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.37.3), libnotify4 (>= 0.7.0), libpulse-mainloop-glib0 (>= 0.99.1), libpulse0 (>= 0.99.1), liburl-dispatcher1 (>= 0.1), pulseaudio
  - recommends: accountsservice, unity-control-center | gnome-control-center | ubuntu-system-settings | pavucontrol | mate-media
  - suggests: unity-greeter-session-broadcast

  </details>

- **inxi**
  - Latest version: 3.0.32-1-1
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: full featured system information script
  - Homepage: https://smxi.org/docs/inxi.htm
  - Install: `sudo apt-get install inxi`
  - Install (apt): `sudo apt install inxi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Unit 193 <unit193@ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: pciutils, perl:any, procps
  - recommends: dmidecode, dnsutils, file, hddtemp, iproute2 | net-tools, kmod, lm-sensors, mesa-utils, sudo, tree, usbutils, x11-utils, x11-xserver-utils
  - suggests: libcpanel-json-xs-perl | libjson-xs-perl, libxml-dumper-perl, wget | curl | libhttp-tiny-perl

  </details>

- **iso-flag-png**
  - Latest version: 1.0.2
  - Architectures: all
  - Suite: tricia
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

- **libappindicator-dev**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator-dev`
  - Install (apt): `sudo apt install libappindicator-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-appindicator-0.1 (= 12.10.1+18.04.20180322.1-1mint2), libappindicator1 (= 12.10.1+18.04.20180322.1-1mint2), libdbus-glib-1-dev (>= 0.76), libdbusmenu-glib-dev (>= 0.1.8), libgtk2.0-dev

  </details>

- **libappindicator-doc**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator-doc`
  - Install (apt): `sudo apt install libappindicator-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: doc
  - Priority: optional

  </details>

- **libappindicator0.1-cil**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: CLI bindings for libappindicator
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator0.1-cil`
  - Install (apt): `sudo apt install libappindicator0.1-cil`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: cli-mono
  - Priority: optional
  - depends: cli-common (>= 0.5.1), libappindicator1, libglib2.0-cil (>= 2.12.40), libgtk2.0-cil (>= 2.12.40), libmono-corlib4.5-cil (>= 4.6.1.3)

  </details>

- **libappindicator0.1-cil-dev**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator0.1-cil-dev`
  - Install (apt): `sudo apt install libappindicator0.1-cil-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libappindicator0.1-cil (= 12.10.1+18.04.20180322.1-1mint2)

  </details>

- **libappindicator1**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator1`
  - Install (apt): `sudo apt install libappindicator1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libdbusmenu-glib4 (>= 0.4.2), libdbusmenu-gtk4 (>= 0.4.2), libglib2.0-0 (>= 2.37.3), libgtk2.0-0 (>= 2.20.0), libindicator7 (>= 0.4.90)
  - preDepends: multiarch-support
  - suggests: indicator-application (>= 0.2.93)

  </details>

- **libappindicator3-1**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator3-1`
  - Install (apt): `sudo apt install libappindicator3-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libdbusmenu-glib4 (>= 0.4.2), libdbusmenu-gtk3-4 (>= 0.4.2), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), libindicator3-7 (>= 0.4.90), libxapp1
  - preDepends: multiarch-support
  - suggests: indicator-application (>= 0.2.93)

  </details>

- **libappindicator3-dev**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Application Indicators
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install libappindicator3-dev`
  - Install (apt): `sudo apt install libappindicator3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-appindicator3-0.1 (= 12.10.1+18.04.20180322.1-1mint2), libappindicator3-1 (= 12.10.1+18.04.20180322.1-1mint2), libdbus-glib-1-dev (>= 0.76), libdbusmenu-glib-dev (>= 0.1.8), libgtk-3-dev

  </details>

- **libcaja-extension-dev**
  - Latest version: 1.22.2-2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: libraries for Caja components (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension-dev`
  - Install (apt): `sudo apt install libcaja-extension-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-caja-2.0 (= 1.22.2-1+tricia), gir1.2-caja-2.0 (= 1.22.2-2+tricia), libcaja-extension1 (= 1.22.2-1+tricia), libcaja-extension1 (= 1.22.2-2+tricia), libgtk-3-dev
  - breaks: gir1.2-caja (<< 1.20.2-1~)
  - replaces: gir1.2-caja (<< 1.20.2-1~)

  </details>

- **libcaja-extension-doc**
  - Latest version: 1.22.2-2+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: libraries for Caja components (API documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension-doc`
  - Install (apt): `sudo apt install libcaja-extension-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional
  - breaks: libcaja-extension-dev (<< 1.12.3-2~)

  </details>

- **libcaja-extension1**
  - Latest version: 1.22.2-2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: libraries for Caja components
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libcaja-extension1`
  - Install (apt): `sudo apt install libcaja-extension1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0)
  - breaks: libcaja-extension (<< 1.7.0)
  - replaces: libcaja-extension (<< 1.7.0)
  - provides: libcaja-extension

  </details>

- **libcaribou-common**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode - common files
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install libcaribou-common`
  - Install (apt): `sudo apt install libcaribou-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional

  </details>

- **libcaribou-dev**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard - library (development)
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install libcaribou-dev`
  - Install (apt): `sudo apt install libcaribou-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-caribou-1.0 (= 0.4.21+mint1+tricia), libcaribou0 (= 0.4.21+mint1+tricia), libgee-0.8-dev, libglib2.0-dev (>= 2.27.5), libgtk-3-dev, libx11-dev, libxklavier-dev, libxml2-dev, libxtst-dev

  </details>

- **libcaribou-gtk-module**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode (GTK+ 2.0 module)
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install libcaribou-gtk-module`
  - Install (apt): `sudo apt install libcaribou-gtk-module`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: gsettings-desktop-schemas, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3)

  </details>

- **libcaribou-gtk3-module**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode (GTK+ 3.0 module)
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install libcaribou-gtk3-module`
  - Install (apt): `sudo apt install libcaribou-gtk3-module`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: gsettings-desktop-schemas, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.2.2-3)

  </details>

- **libcaribou0**
  - Latest version: 0.4.21+mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Configurable on screen keyboard with scanning mode - library
  - Homepage: https://wiki.gnome.org/Projects/Caribou
  - Install: `sudo apt-get install libcaribou0`
  - Install (apt): `sudo apt install libcaribou0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian GNOME Maintainers <pkg-gnome-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcaribou-common (= 0.4.21+mint1+tricia), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.27.5), libgtk-3-0 (>= 3.0.0), libx11-6, libxklavier16 (>= 5.0), libxml2 (>= 2.7.4), libxtst6

  </details>

- **libcinnamon-control-center-dev**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop
  - Homepage: http://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install libcinnamon-control-center-dev`
  - Install (apt): `sudo apt install libcinnamon-control-center-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: libcinnamon-control-center1 (= 4.4.0+tricia), libgtk-3-dev (>= 3.4.1)

  </details>

- **libcinnamon-control-center1**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the Cinnamon desktop
  - Homepage: http://www.github.com/linuxmint/cinnamon-control-center
  - Install: `sudo apt-get install libcinnamon-control-center1`
  - Install (apt): `sudo apt install libcinnamon-control-center1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.39.91), libgtk-3-0 (>= 3.9.10), libpango-1.0-0 (>= 1.14.0)

  </details>

- **libcinnamon-desktop-dbg**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon library for loading .desktop files - debug symbols
  - Install: `sudo apt-get install libcinnamon-desktop-dbg`
  - Install (apt): `sudo apt install libcinnamon-desktop-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcinnamon-desktop4 (= 4.4.1+tricia)

  </details>

- **libcinnamon-desktop-dev**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon library for loading .desktop files - development files
  - Install: `sudo apt-get install libcinnamon-desktop-dev`
  - Install (apt): `sudo apt install libcinnamon-desktop-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cinnamondesktop-3.0 (= 4.4.1+tricia), libcinnamon-desktop4 (= 4.4.1+tricia), libgtk-3-dev (>= 3.3.16), libxkbfile-dev

  </details>

- **libcinnamon-desktop4**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon library for loading .desktop files
  - Install: `sudo apt-get install libcinnamon-desktop4`
  - Install (apt): `sudo apt install libcinnamon-desktop4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: cinnamon-desktop-data (>= 4.4.1+tricia), libc6 (>= 2.17), libcairo2 (>= 1.10.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.9.10), libx11-6, libxext6, libxkbfile1, libxrandr2 (>= 2:1.2.99.3)
  - recommends: hwdata (>= 0.227-1)

  </details>

- **libcinnamon-menu-3-0**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-0`
  - Install (apt): `sudo apt install libcinnamon-menu-3-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3)

  </details>

- **libcinnamon-menu-3-0-dbg**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-0-dbg`
  - Install (apt): `sudo apt install libcinnamon-menu-3-0-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcinnamon-menu-3-0 (= 4.4.0+tricia)

  </details>

- **libcinnamon-menu-3-dev**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon implementation of the freedesktop menu specification
  - Install: `sudo apt-get install libcinnamon-menu-3-dev`
  - Install (apt): `sudo apt install libcinnamon-menu-3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cmenu-3.0 (= 4.4.0+tricia), libcinnamon-menu-3-0 (= 4.4.0+tricia), libglib2.0-dev (>= 2.30.0)
  - replaces: gir-repository-dev (<< 0.6.5-6)

  </details>

- **libcjs-dbg**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install libcjs-dbg`
  - Install (apt): `sudo apt install libcjs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcjs0f (= 4.4.0+tricia)

  </details>

- **libcjs-dev**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install libcjs-dev`
  - Install (apt): `sudo apt install libcjs-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: cjs, libcjs0f (= 4.4.0+tricia), libgirepository1.0-dev (>= 1.41.4), libgtk-3-dev, libmozjs-52-dev

  </details>

- **libcjs0f**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mozilla-based javascript bindings for the Cinnamon platform
  - Install: `sudo apt-get install libcjs0f`
  - Install (apt): `sudo apt install libcjs0f`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: gir1.2-glib-2.0 (>= 1.46.0), gir1.2-gtk-3.0, libc6 (>= 2.14), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libffi6 (>= 3.0.4), libgcc1 (>= 1:3.0), libgirepository-1.0-1 (>= 1.41.4), libglib2.0-0 (>= 2.43.91), libgtk-3-0 (>= 3.0.0), libmozjs-52-0, libreadline7 (>= 6.0), libstdc++6 (>= 5.2), libx11-6
  - conflicts: libcjs0, libcjs0a, libcjs0c, libcjs0e
  - replaces: libcjs0, libcjs0a, libcjs0c, libcjs0e
  - provides: libcjs0-libmozjs-52-0

  </details>

- **libcscreensaver-dbg**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon Screensaver library - debug symbols
  - Install: `sudo apt-get install libcscreensaver-dbg`
  - Install (apt): `sudo apt install libcscreensaver-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcscreensaver0 (= 4.4.1+tricia)

  </details>

- **libcscreensaver0**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: library and introspection data used by cinnamon-screensaver
  - Install: `sudo apt-get install libcscreensaver0`
  - Install (apt): `sudo apt install libcscreensaver0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: gir1.2-gtk-3.0, libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libpam0g (>= 0.99.7.1), libx11-6, libxext6, libxinerama1, libxrandr2 (>= 2:1.2.99.3)

  </details>

- **libcvc-dbg**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library - debug symbols
  - Install: `sudo apt-get install libcvc-dbg`
  - Install (apt): `sudo apt install libcvc-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libcvc0 (= 4.4.1+tricia)

  </details>

- **libcvc-dev**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library - development files
  - Install: `sudo apt-get install libcvc-dev`
  - Install (apt): `sudo apt install libcvc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-cvc-1.0 (= 4.4.1+tricia), libcvc0 (= 4.4.1+tricia), libpulse-dev

  </details>

- **libcvc0**
  - Latest version: 4.4.1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Cinnamon pulseaudio abstraction library
  - Install: `sudo apt-get install libcvc0`
  - Install (apt): `sudo apt install libcvc0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libpulse-mainloop-glib0 (>= 0.99.1), libpulse0 (>= 0.99.1)

  </details>

- **libdvdcss2**
  - Latest version: 1.4.2-dmo1
  - Architectures: amd64
  - Suite: tricia
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

- **libexo-1-0**
  - Latest version: 0.12.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library with extensions for Xfce (GTK-2 version)
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-1-0`
  - Install (apt): `sudo apt install libexo-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libexo-common, libexo-helpers, libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libx11-6, libxfce4util7 (>= 4.9.0)
  - recommends: liburi-perl

  </details>

- **libexo-1-dev**
  - Latest version: 0.12.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libexo (GTK-2 version)
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-1-dev`
  - Install (apt): `sudo apt install libexo-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libexo-1-0 (= 0.12.8-1~18.04), libgtk2.0-dev, libxfce4util-dev

  </details>

- **libexo-2-0**
  - Latest version: 0.12.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library with extensions for Xfce (GTK-3 version)
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-2-0`
  - Install (apt): `sudo apt install libexo-2-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.10.0), libexo-common, libexo-helpers, libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - recommends: liburi-perl

  </details>

- **libexo-2-dev**
  - Latest version: 0.12.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libexo (GTK-3 version)
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-2-dev`
  - Install (apt): `sudo apt install libexo-2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libexo-2-0 (= 0.12.8-1~18.04), libgtk-3-dev, libxfce4util-dev (>= 4.10.0)

  </details>

- **libexo-common**
  - Latest version: 0.12.8-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: libexo common files
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-common`
  - Install (apt): `sudo apt install libexo-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - suggests: sensible-utils

  </details>

- **libexo-helpers**
  - Latest version: 0.12.8-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: helpers for the exo library
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libexo-helpers`
  - Install (apt): `sudo apt install libexo-helpers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libexo-common
  - suggests: sensible-utils
  - breaks: libexo-1-0 (<< 0.12.2-2)
  - replaces: libexo-1-0 (<< 0.12.2-2)

  </details>

- **libgarcon-1-0**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: freedesktop.org compliant menu implementation for Xfce
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-1-0`
  - Install (apt): `sudo apt install libgarcon-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libgarcon-common, libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk2.0-0 (>= 2.24), libxfce4ui-1-0 (>= 4.10), libxfce4util7 (>= 4.9.0)

  </details>

- **libgarcon-1-0-dev**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: transitional package for libgarcon-1-dev
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-1-0-dev`
  - Install (apt): `sudo apt install libgarcon-1-0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: oldlibs
  - Priority: optional
  - depends: libgarcon-1-dev

  </details>

- **libgarcon-1-dev**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Development files for garcon-1
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-1-dev`
  - Install (apt): `sudo apt install libgarcon-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libgarcon-1-0 (= 0.6.4-1~18.04), libgarcon-1-0 (= 0.6.4-1~18.04mint1)
  - suggests: devhelp
  - breaks: libgarcon-1-0-dev (<< 0.6.1-1~)
  - replaces: libgarcon-1-0-dev (<< 0.6.1-1~)
  - provides: libgarcon-1-0-dev

  </details>

- **libgarcon-common**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: common files for libgarcon menu implementation
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-common`
  - Install (apt): `sudo apt install libgarcon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - replaces: libgarcon-1-0 (<< 0.1.2-1), xfdesktop4 (<< 4.7.0), xfdesktop4-data (<< 4.7.0)

  </details>

- **libgarcon-gtk3-1-0**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: menu library for Xfce (GTK3 library)
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-gtk3-1-0`
  - Install (apt): `sudo apt install libgarcon-gtk3-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libgarcon-1-0 (>= 0.6.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **libgarcon-gtk3-1-dev**
  - Latest version: 0.6.4-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Development files for garcon-gtk3
  - Homepage: http://www.xfce.org/
  - Install: `sudo apt-get install libgarcon-gtk3-1-dev`
  - Install (apt): `sudo apt install libgarcon-gtk3-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libgarcon-1-dev, libgarcon-gtk3-1-0 (= 0.6.4-1~18.04), libgarcon-gtk3-1-0 (= 0.6.4-1~18.04mint1), libxfce4ui-2-dev
  - suggests: devhelp

  </details>

- **libgoa-1.0-0b**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-0b`
  - Install (apt): `sudo apt install libgoa-1.0-0b`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.52), libgoa-1.0-common (>= 3.28.0-0ubuntu2mint1)
  - conflicts: libgoa-1.0-0
  - replaces: libgoa-1.0-0

  </details>

- **libgoa-1.0-common**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: all
  - Suite: tricia
  - Components: upstream
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
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for GNOME Online Accounts - development files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-1.0-dev`
  - Install (apt): `sudo apt install libgoa-1.0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-goa-1.0 (= 3.28.0-0ubuntu2mint1), libglib2.0-dev (>= 2.52), libgoa-1.0-0b (= 3.28.0-0ubuntu2mint1), libgoa-backend-1.0-dev, libgtk-3-dev, librest-dev
  - suggests: libgoa-1.0-doc

  </details>

- **libgoa-1.0-doc**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: all
  - Suite: tricia
  - Components: upstream
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
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: backend library for GNOME Online Accounts
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-backend-1.0-1`
  - Install (apt): `sudo apt install libgoa-backend-1.0-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcr-base-3-1 (>= 3.8.0), libglib2.0-0 (>= 2.52), libgoa-1.0-0b (>= 3.25.4), libgoa-1.0-common (>= 3.28.0-0ubuntu2mint1), libgtk-3-0 (>= 3.16.2), libjavascriptcoregtk-4.0-18, libjson-glib-1.0-0 (>= 0.12.0), librest-0.7-0 (>= 0.7.92), libsecret-1-0 (>= 0.7), libsnapd-glib1 (>= 1.26), libsoup2.4-1 (>= 2.42), libwebkit2gtk-4.0-37 (>= 2.15.1), libxml2 (>= 2.9.0)

  </details>

- **libgoa-backend-1.0-dev**
  - Latest version: 3.28.0-0ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: backend library for GNOME Online Accounts - development files
  - Homepage: https://wiki.gnome.org/Projects/GnomeOnlineAccounts
  - Install: `sudo apt-get install libgoa-backend-1.0-dev`
  - Install (apt): `sudo apt install libgoa-backend-1.0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-goa-1.0 (= 3.28.0-0ubuntu2mint1), libglib2.0-dev, libgoa-backend-1.0-1 (= 3.28.0-0ubuntu2mint1), libgtk-3-dev, librest-dev
  - suggests: libgoa-1.0-doc
  - conflicts: libgoa-1.0-dev (<< 3.10.0)
  - replaces: libgoa-1.0-dev (<< 3.10.0)

  </details>

- **libmarco-dev**
  - Latest version: 1.22.3-2mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: library for Marco window manager (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmarco-dev`
  - Install (apt): `sudo apt install libmarco-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmarco-private2 (= 1.22.3-1+tricia), libmarco-private2 (= 1.22.3-2mint1+tricia)
  - breaks: mate-window-manager (<= 1.0.0-2)

  </details>

- **libmarco-private2**
  - Latest version: 1.22.3-2mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: library for Marco window manager
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmarco-private2`
  - Install (apt): `sudo apt install libmarco-private2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.45.3), libgtk-3-0 (>= 3.21.4), libgtop-2.0-11 (>= 2.22.3), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsm6, libstartup-notification0 (>= 0.7), libx11-6 (>= 2:1.4.99.1), libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxinerama1, libxpresent1, libxrandr2, libxrender1
  - breaks: libmarco, libmarco-private0, mate-window-manager (<= 1.0.0-2)
  - replaces: libmarco, libmarco-private0

  </details>

- **libmate-desktop-2-17**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library with common API for various MATE modules (library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-2-17`
  - Install (apt): `sudo apt install libmate-desktop-2-17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: iso-codes, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libdconf1 (>= 0.14.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.45.3), libgtk-3-0 (>= 3.21.4), libpango-1.0-0 (>= 1.14.0), libstartup-notification0 (>= 0.4), libx11-6, libxrandr2 (>= 2:1.2.99.3)
  - breaks: libmatedesktop (<< 1.6.1)
  - replaces: libmatedesktop (<< 1.6.1)
  - provides: libmatedesktop

  </details>

- **libmate-desktop-dev**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library with common API for various MATE modules (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-dev`
  - Install (apt): `sudo apt install libmate-desktop-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matedesktop-2.0 (= 1.22.2-1+tricia), libdconf-dev, libgdk-pixbuf2.0-dev, libgtk-3-dev, libmate-desktop-2-17 (= 1.22.2-1+tricia), libstartup-notification0-dev
  - breaks: gir1.2-mate-desktop (<< 1.20.1-1~), libmatedesktop-dev
  - replaces: gir1.2-mate-desktop (<< 1.20.1-1~), libmatedesktop-dev

  </details>

- **libmate-desktop-doc**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Library with common API for various MATE modules (documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-desktop-doc`
  - Install (apt): `sudo apt install libmate-desktop-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional
  - breaks: libmatedesktop-doc
  - replaces: libmatedesktop-doc

  </details>

- **libmate-menu-dev**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: implementation of the freedesktop menu specs for MATE (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-menu-dev`
  - Install (apt): `sudo apt install libmate-menu-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matemenu-2.0 (= 1.22.1-1+tricia), libglib2.0-dev, libmate-menu2 (= 1.22.1-1+tricia)
  - breaks: gir1.2-mate-menu (<< 1.20.0-1~), libmatemenu-dev
  - replaces: gir1.2-mate-menu (<< 1.20.0-1~), libmatemenu-dev

  </details>

- **libmate-menu2**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: implementation of the freedesktop menu specification for MATE (library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-menu2`
  - Install (apt): `sudo apt install libmate-menu2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3)
  - breaks: libmate-slab0 (<< 1.22.0), libmatemenu, mate-menus (<= 1.0.2-1), mate-panel (<< 1.22.0), mate-screensaver (<< 1.22.0), python-mate-menu
  - replaces: libmatemenu, mate-menus (<= 1.0.2-1)

  </details>

- **libmate-panel-applet-4-1**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: library for MATE Panel applets
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-panel-applet-4-1`
  - Install (apt): `sudo apt install libmate-panel-applet-4-1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libx11-6
  - breaks: libmate-panel-applet4-1, libmatepanelapplet, mate-panel (<= 1.0.0-3)
  - replaces: libmate-panel-applet4-1, libmatepanelapplet
  - provides: libmate-panel-applet4-1, libmatepanelapplet

  </details>

- **libmate-panel-applet-dev**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: library for MATE Panel applets (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-panel-applet-dev`
  - Install (apt): `sudo apt install libmate-panel-applet-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matepanelapplet-4.0 (= 1.22.2-1mint1+tricia), libglib2.0-dev, libgtk-3-dev, libmate-panel-applet-4-1 (= 1.22.2-1mint1+tricia)
  - conflicts: libmatepanelapplet-dev
  - breaks: gir1.2-mate-panel (<< 1.20.1-1~)
  - replaces: gir1.2-mate-panel (<< 1.20.1-1~), libmatepanelapplet-dev
  - provides: libmatepanelapplet-dev

  </details>

- **libmate-panel-applet-doc**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: library for MATE Panel applets (documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-panel-applet-doc`
  - Install (apt): `sudo apt install libmate-panel-applet-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional
  - conflicts: libmatepanelapplet-doc
  - replaces: libmatepanelapplet-doc
  - provides: libmatepanelapplet-doc

  </details>

- **libmate-sensors-applet-plugin-dev**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library for plugins for the mate-sensors-applet package (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-sensors-applet-plugin-dev`
  - Install (apt): `sudo apt install libmate-sensors-applet-plugin-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libmate-sensors-applet-plugin0 (= 1.22.1-1+tricia)
  - breaks: libmatesensorsappletplugin-dev
  - replaces: libmatesensorsappletplugin-dev

  </details>

- **libmate-sensors-applet-plugin0**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library for plugins for the mate-sensors-applet package
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-sensors-applet-plugin0`
  - Install (apt): `sudo apt install libmate-sensors-applet-plugin0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.12.0)
  - breaks: libmatesensorsappletplugin
  - replaces: libmatesensorsappletplugin

  </details>

- **libmate-slab-dev**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: beautification app library (development headers)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-slab-dev`
  - Install (apt): `sudo apt install libmate-slab-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmate-slab0 (= 1.22.2-1+tricia)
  - provides: libmate-slab0-dev

  </details>

- **libmate-slab0**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: beautification app library
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-slab0`
  - Install (apt): `sudo apt install libmate-slab0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libmate-desktop-2-17 (>= 1.22.0), libmate-menu2 (>= 1.22.0)

  </details>

- **libmate-window-settings-dev**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the MATE desktop (window settings headers)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-window-settings-dev`
  - Install (apt): `sudo apt install libmate-window-settings-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmate-window-settings1 (= 1.22.2-1+tricia)

  </details>

- **libmate-window-settings1**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the MATE desktop (window settings library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmate-window-settings1`
  - Install (apt): `sudo apt install libmate-window-settings1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.0.0), libmate-desktop-2-17 (>= 1.22.0)
  - breaks: mate-control-center (<< 1.9.0)

  </details>

- **libmatedict-dev**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE desktop utilities (matedict development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatedict-dev`
  - Install (apt): `sudo apt install libmatedict-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libmatedict6 (= 1.22.2-1+tricia)
  - breaks: mate-utils (<< 1.5.0), mate-utils-dev (<< 1.8.0)
  - replaces: mate-utils-dev (<< 1.8.0)

  </details>

- **libmatedict-doc**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE desktop utilities (matedict documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatedict-doc`
  - Install (apt): `sudo apt install libmatedict-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional

  </details>

- **libmatedict6**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE desktop utilities (matedict library)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatedict6`
  - Install (apt): `sudo apt install libmatedict6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libpango-1.0-0 (>= 1.14.0)
  - breaks: mate-utils (<< 1.8.0)
  - replaces: mate-utils (<< 1.8.0)

  </details>

- **libmatekbd-common**
  - Latest version: 1.22.0-1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE library to manage keyboard configuration (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatekbd-common`
  - Install (apt): `sudo apt install libmatekbd-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - replaces: libmatekbd4 (<< 1.6.1-1)

  </details>

- **libmatekbd-dev**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE library to manage keyboard configuration (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatekbd-dev`
  - Install (apt): `sudo apt install libmatekbd-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-matekbd-1.0 (= 1.22.0-1+tina), libglib2.0-dev, libgtk-3-dev, libmatekbd4 (= 1.22.0-1+tina), libx11-dev, libxklavier-dev
  - breaks: gir1.2-matekbd (<< 1.20.1-1~)
  - replaces: gir1.2-matekbd (<< 1.20.1-1~)

  </details>

- **libmatekbd4**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE library to manage keyboard configuration
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatekbd4`
  - Install (apt): `sudo apt install libmatekbd4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: iso-codes, libc6 (>= 2.14), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libmatekbd-common (= 1.22.0-1+tina), libpango-1.0-0 (>= 1.18.0), libpangocairo-1.0-0 (>= 1.22.0), libx11-6, libxklavier16 (>= 5.0)
  - conflicts: libmatekbd
  - breaks: libmatekbd
  - replaces: libmatekbd
  - provides: libmatekbd

  </details>

- **libmatemixer-common**
  - Latest version: 1.22.0-1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Mixer library for MATE Desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatemixer-common`
  - Install (apt): `sudo apt install libmatemixer-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional

  </details>

- **libmatemixer-dev**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mixer library for MATE Desktop (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatemixer-dev`
  - Install (apt): `sudo apt install libmatemixer-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libmatemixer0 (= 1.22.0-1+tina)

  </details>

- **libmatemixer-doc**
  - Latest version: 1.22.0-1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Mixer library for MATE Desktop (documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatemixer-doc`
  - Install (apt): `sudo apt install libmatemixer-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional

  </details>

- **libmatemixer0**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Mixer library for MATE Desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmatemixer0`
  - Install (apt): `sudo apt install libmatemixer0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: iso-codes, libasound2 (>= 1.0.17), libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libmatemixer-common (= 1.22.0-1+tina), libpulse-mainloop-glib0 (>= 0.99.1), libpulse0 (>= 0.99.1)

  </details>

- **libmateweather-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MateWeather shared library (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmateweather-common`
  - Install (apt): `sudo apt install libmateweather-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: libmateweather (<= 1.0.0-3)

  </details>

- **libmateweather-dev**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MateWeather shared library (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmateweather-dev`
  - Install (apt): `sudo apt install libmateweather-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libgtk-3-dev, libmateweather1 (= 1.22.1-1+tricia), libsoup-gnome2.4-dev, libsoup2.4-dev, libxml2-dev

  </details>

- **libmateweather-doc**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MateWeather shared library (documentation files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmateweather-doc`
  - Install (apt): `sudo apt install libmateweather-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional

  </details>

- **libmateweather1**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MateWeather shared library
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install libmateweather1`
  - Install (apt): `sudo apt install libmateweather1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), libmateweather-common (= 1.22.1-1+tricia), libsoup2.4-1 (>= 2.33.92), libxml2 (>= 2.7.4)
  - conflicts: libmateweather
  - breaks: libmateweather
  - replaces: libmateweather
  - provides: libmateweather

  </details>

- **libmuffin0**
  - Latest version: 4.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: window and compositing manager (shared library)
  - Install: `sudo apt-get install libmuffin0`
  - Install (apt): `sudo apt install libmuffin0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 2.2.0), libc6 (>= 2.27), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.14.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libegl1, libfontconfig1 (>= 2.12), libgdk-pixbuf2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.2), libgl1, libglib2.0-0 (>= 2.43.4), libgtk-3-0 (>= 3.19.12), libice6 (>= 1:1.0.0), libjson-glib-1.0-0 (>= 0.12.0), libpango-1.0-0 (>= 1.29.4), libpangocairo-1.0-0 (>= 1.18.0), libpangoft2-1.0-0 (>= 1.14.0), libsm6, libstartup-notification0 (>= 0.7), libx11-6 (>= 2:1.4.99.1), libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6 (>= 2:1.3.0), libxfixes3, libxi6 (>= 2:1.2.99.4), libxinerama1, libxrandr2 (>= 2:1.2.99.3), libxrender1, libxtst6, muffin-common (= 4.4.4+tricia)
  - replaces: libmuffin-dev

  </details>

- **libnemo-extension-dev**
  - Latest version: 4.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: gir1.2-nemo-3.0 (= 4.4.3+tricia), libglib2.0-dev (>= 2.45.7), libgtk-3-dev (>= 3.9.10), libnemo-extension1 (= 4.4.3+tricia)

  </details>

- **libnemo-extension1**
  - Latest version: 4.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.45.7), libgtk-3-0 (>= 3.9.10)
  - breaks: libnemo-extension1a
  - replaces: libnemo-extension1a
  - provides: libnemo-extension1a

  </details>

- **libnm-gtk-dev**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for wireless and mobile dialogs - development files
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnm-gtk-dev`
  - Install (apt): `sudo apt install libnm-gtk-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-nmgtk-1.0 (= 1.8.10-2ubuntu3mint1), libgtk-3-dev, libnm-glib-dev (>= 1.8), libnm-gtk0 (= 1.8.10-2ubuntu3mint1), libnm-util-dev (>= 1.8), network-manager-dev (>= 1.8)

  </details>

- **libnm-gtk0**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for wireless and mobile dialogs (libnm-glib version)
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnm-gtk0`
  - Install (apt): `sudo apt install libnm-gtk0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.43.2), libgtk-3-0 (>= 3.10), libgudev-1.0-0 (>= 147), libnm-glib4 (>= 0.8.998), libnm-util2 (>= 0.9.4.0)

  </details>

- **libnma-dev**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for wireless and mobile dialogs - development files
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma-dev`
  - Install (apt): `sudo apt install libnma-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-nma-1.0 (= 1.8.10-2ubuntu3mint1), libnm-dev (>= 1.8), libnma0 (= 1.8.10-2ubuntu3mint1)

  </details>

- **libnma0**
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: library for wireless and mobile dialogs (libnm version)
  - Homepage: https://www.gnome.org/projects/NetworkManager/
  - Install: `sudo apt-get install libnma0`
  - Install (apt): `sudo apt install libnma0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgck-1-0 (>= 3.3.90), libgcr-base-3-1 (>= 3.14), libglib2.0-0 (>= 2.43.2), libgtk-3-0 (>= 3.10), libnm0 (>= 1.8.0)

  </details>

- **libplymouth-dev**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: graphical boot animation and logger - development files
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install libplymouth-dev`
  - Install (apt): `sudo apt install libplymouth-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libplymouth4 (= 0.9.3+mint2)
  - breaks: plymouth-dev (<< 0.9.2-1~)
  - replaces: plymouth-dev (<< 0.9.2-1~)

  </details>

- **libplymouth4**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: graphical boot animation and logger - shared libraries
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install libplymouth4`
  - Install (apt): `sudo apt install libplymouth4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libpng16-16 (>= 1.6.2-1), libudev1 (>= 183)
  - breaks: plymouth (<< 0.9.2-1~)
  - replaces: plymouth (<< 0.9.2-1~)

  </details>

- **libthunarx-3-0**
  - Latest version: 1.8.9-1~18.04.0
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: extension library for thunar
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install libthunarx-3-0`
  - Install (apt): `sudo apt install libthunarx-3-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libexif12 (>= 0.6.21-1~), libexo-2-0 (>= 0.11.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libpango-1.0-0 (>= 1.14.0), libpcre3, libx11-6, libxfce4ui-2-0 (>= 4.12.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), thunar-data

  </details>

- **libthunarx-3-dev**
  - Latest version: 1.8.9-1~18.04.0
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libthunarx
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install libthunarx-3-dev`
  - Install (apt): `sudo apt install libthunarx-3-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libgtk-3-dev, libthunarx-3-0 (= 1.8.9-1~18.04.0), thunar-data (= 1.8.9-1~18.04.0)

  </details>

- **libtumbler-1-0**
  - Latest version: 0.2.7-2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: library for tumbler, a D-Bus thumbnailing service
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libtumbler-1-0`
  - Install (apt): `sudo apt install libtumbler-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3)

  </details>

- **libtumbler-1-dev**
  - Latest version: 0.2.7-2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: library for tumbler, a D-Bus thumbnailing service (development)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libtumbler-1-dev`
  - Install (apt): `sudo apt install libtumbler-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libtumbler-1-0 (= 0.2.7-2~18.04)

  </details>

- **libxapp-dbg**
  - Latest version: 1.6.10+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: XApp library - debug symbols
  - Install: `sudo apt-get install libxapp-dbg`
  - Install (apt): `sudo apt install libxapp-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libxapp1 (= 1.6.10+tricia)

  </details>

- **libxapp-dev**
  - Latest version: 1.6.10+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: XApp library - development files
  - Install: `sudo apt-get install libxapp-dev`
  - Install (apt): `sudo apt install libxapp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xapp-1.0 (= 1.6.10+tricia), libgnomekbd-dev, libgtk-3-dev (>= 3.3.16), libxapp1 (= 1.6.10+tricia), libxkbfile-dev

  </details>

- **libxapp1**
  - Latest version: 1.6.10+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: XApp library
  - Install: `sudo apt-get install libxapp1`
  - Install (apt): `sudo apt install libxapp1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.7), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.23.0), libglib2.0-0 (>= 2.37.3), libgnomekbd8 (>= 3.6.0), libgtk-3-0 (>= 3.21.4), libx11-6, xapps-common (>= 1.6.10+tricia)

  </details>

- **libxfce4panel-2.0-4**
  - Latest version: 4.14.1-0ubuntu1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Xfce4 panel library (GTK3 variant)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4panel-2.0-4`
  - Install (apt): `sudo apt install libxfce4panel-2.0-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libxfce4util7 (>= 4.9.0)

  </details>

- **libxfce4panel-2.0-dev**
  - Latest version: 4.14.1-0ubuntu1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Xfce4 panel library (development files for GTK3 variant)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4panel-2.0-dev`
  - Install (apt): `sudo apt install libxfce4panel-2.0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libgtk-3-dev, libxfce4panel-2.0-4 (= 4.14.1-0ubuntu1~18.04), libxfce4panel-2.0-4 (= 4.14.1-0ubuntu1~18.04mint1), libxfce4util-dev

  </details>

- **libxfce4ui-1-0**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: widget library for Xfce - Gtk+2 variant
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-1-0`
  - Install (apt): `sudo apt install libxfce4ui-1-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk2.0-0 (>= 2.24.0), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libsm6, libstartup-notification0 (>= 0.4), libx11-6, libxfce4ui-common (>= 4.11), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)

  </details>

- **libxfce4ui-1-dev**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libxfce4ui - Gtk+2 variant
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-1-dev`
  - Install (apt): `sudo apt install libxfce4ui-1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libgtk2.0-dev, libxfce4ui-1-0 (= 4.14.1-1ubuntu1~18.04), libxfce4util-dev (>= 4.10.0), libxfconf-0-dev (>= 4.10.0)

  </details>

- **libxfce4ui-2-0**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: widget library for Xfce - Gtk+3 variant
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-2-0`
  - Install (apt): `sudo apt install libxfce4ui-2-0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libsm6, libstartup-notification0 (>= 0.4), libx11-6, libxfce4ui-common (>= 4.11), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)

  </details>

- **libxfce4ui-2-dev**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libxfce4ui - Gtk+3 variant
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-2-dev`
  - Install (apt): `sudo apt install libxfce4ui-2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libgtk-3-dev, libxfce4ui-2-0 (= 4.14.1-1ubuntu1~18.04), libxfce4util-dev (>= 4.10.0), libxfconf-0-dev (>= 4.10.0)

  </details>

- **libxfce4ui-common**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: common files for libxfce4ui
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-common`
  - Install (apt): `sudo apt install libxfce4ui-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - suggests: devhelp, libxfce4ui-2-0 | libxfce4ui-1-0
  - breaks: libxfce4ui-1-0 (<< 4.11), libxfce4ui-1-dev (<< 4.11), xfce-keyboard-shortcuts (<< 4.11)
  - replaces: libxfce4ui-1-0 (<< 4.11), libxfce4ui-1-dev (<< 4.11), xfce-keyboard-shortcuts (<< 4.11)
  - provides: xfce-keyboard-shortcuts

  </details>

- **libxfce4ui-glade**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: glade API for libxfce4ui
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-glade`
  - Install (apt): `sudo apt install libxfce4ui-glade`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libgladeui-2-6 (>= 3.16.1), libglib2.0-0 (>= 2.12.0), libgtk-3-0 (>= 3.0.0), libxfce4ui-2-0 (>= 4.11.0)

  </details>

- **libxfce4ui-utils**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Utility files for libxfce4ui
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4ui-utils`
  - Install (apt): `sudo apt install libxfce4ui-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.0.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - breaks: xfce4-utils
  - replaces: xfce4-utils

  </details>

- **libxfce4util-bin**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: tools for libxfce4util
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4util-bin`
  - Install (apt): `sudo apt install libxfce4util-bin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.3.4), libxfce4util7 (>= 4.9.0)
  - breaks: libxfce4util4 (<< 4.6.1-2)
  - replaces: libxfce4util4 (<< 4.6.1-2)

  </details>

- **libxfce4util-common**
  - Latest version: 4.14.0-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: common files for libxfce4util
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4util-common`
  - Install (apt): `sudo apt install libxfce4util-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - breaks: libxfce4util4 (<< 4.6.1-2)
  - replaces: libxfce4util4 (<< 4.6.1-2)

  </details>

- **libxfce4util-dev**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libxfce4util7
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4util-dev`
  - Install (apt): `sudo apt install libxfce4util-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libxfce4util7 (= 4.14.0-1~18.04)
  - suggests: devhelp

  </details>

- **libxfce4util7**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Utility functions library for Xfce4
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install libxfce4util7`
  - Install (apt): `sudo apt install libxfce4util7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.37.3), libxfce4util-common
  - recommends: libxfce4util-bin

  </details>

- **libxfconf-0-3**
  - Latest version: 4.14.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Client library for Xfce4 configure interface
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libxfconf-0-3`
  - Install (apt): `sudo apt install libxfconf-0-3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libglib2.0-0 (>= 2.41.1), xfconf

  </details>

- **libxfconf-0-dev**
  - Latest version: 4.14.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Development files for libxfconf
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install libxfconf-0-dev`
  - Install (apt): `sudo apt install libxfconf-0-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libglib2.0-dev, libxfconf-0-3 (= 4.14.1-1~18.04), pkg-config

  </details>

- **libxplayer-dev**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Main library for the Xplayer media player - development files
  - Install: `sudo apt-get install libxplayer-dev`
  - Install (apt): `sudo apt install libxplayer-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xplayer-1.0 (= 2.2.5+tricia), libglib2.0-dev, libgtk-3-dev, libxplayer-plparser-dev, libxplayer0 (= 2.2.5+tricia)

  </details>

- **libxplayer-plparser-dbg**
  - Latest version: 1.0.2+tara
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xplayer Playlist Parser library - debugging symbols
  - Install: `sudo apt-get install libxplayer-plparser-dbg`
  - Install (apt): `sudo apt install libxplayer-plparser-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libxplayer-plparser18 (= 1.0.2+tara)

  </details>

- **libxplayer-plparser-dev**
  - Latest version: 1.0.2+tara
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xplayer Playlist Parser library - development files
  - Install: `sudo apt-get install libxplayer-plparser-dev`
  - Install (apt): `sudo apt install libxplayer-plparser-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libdevel
  - Priority: optional
  - depends: gir1.2-xplayer-plparser-1.0 (= 1.0.2+tara), libarchive-dev, libglib2.0-dev, libgmime-2.6-dev, libxml2-dev, libxplayer-plparser18 (= 1.0.2+tara)
  - replaces: libxplayer-plparser10

  </details>

- **libxplayer-plparser18**
  - Latest version: 1.0.2+tara
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xplayer Playlist Parser library - runtime files
  - Install: `sudo apt-get install libxplayer-plparser18`
  - Install (apt): `sudo apt install libxplayer-plparser18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: libs
  - Priority: optional
  - depends: libarchive13 (>= 3.0.4), libc6 (>= 2.8), libglib2.0-0 (>= 2.37.3), libgmime-2.6-0 (>= 2.6.4), libsoup2.4-1 (>= 2.30.0), libxml2 (>= 2.7.4)
  - replaces: libxplayer-plparser10, libxplayer-plparser12, libxplayer-plparser17

  </details>

- **libxplayer0**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Main library for the Xplayer media player
  - Install: `sudo apt-get install libxplayer0`
  - Install (apt): `sudo apt install libxplayer0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.29.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libclutter-1.0-0 (>= 1.11.10), libclutter-gst-3.0-0 (>= 3.0.4), libclutter-gtk-1.0-0 (>= 0.91.8), libcogl20 (>= 1.17.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.2), libglib2.0-0 (>= 2.37.3), libgstreamer-plugins-base1.0-0 (>= 1.6.0), libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0 (>= 3.5.2), libice6 (>= 1:1.0.0), libpeas-1.0-0 (>= 1.1.0), libsm6, libx11-6, libxapp1, libxplayer-plparser18 (>= 1.0.0)

  </details>

- **libxreaderdocument-dev**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libxreaderdocument3 (= 2.4.4+tricia)

  </details>

- **libxreaderdocument3**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libc6 (>= 2.14), libcairo2 (>= 1.10.0), libdjvulibre21 (>= 3.5.27.1), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libgxps2 (>= 0.2.1), libjs-mathjax, libkpathsea6, libpoppler-glib8 (>= 0.26.0), libspectre1 (>= 0.2.3), libtiff5 (>= 4.0.3), libxml2 (>= 2.7.4), zlib1g (>= 1:1.2.3.4)

  </details>

- **libxreaderdocument3-dbg**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libxreaderdocument3 (= 2.4.4+tricia)

  </details>

- **libxreaderview-dev**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libxreaderview3 (= 2.4.4+tricia)

  </details>

- **libxreaderview3**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.14.0), libgail-3-0 (>= 3.0.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libpango-1.0-0 (>= 1.14.0), libwebkit2gtk-4.0-37 (>= 2.5.3), libxreaderdocument3 (= 2.4.4+tricia)

  </details>

- **libxreaderview3-dbg**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libxreaderview3 (= 2.4.4+tricia)

  </details>

- **libyelp-dev**
  - Latest version: 3.26.0-1ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Library for the GNOME help browser (development)
  - Homepage: https://wiki.gnome.org/Apps/Yelp
  - Install: `sudo apt-get install libyelp-dev`
  - Install (apt): `sudo apt install libyelp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libdevel
  - Priority: optional
  - depends: libgtk-3-dev, libwebkit2gtk-4.0-dev (>= 2.15.1), libxml2-dev (>= 2.6.5), libxslt1-dev (>= 1.1.4), libyelp0 (= 3.26.0-1ubuntu2mint1)

  </details>

- **libyelp0**
  - Latest version: 3.26.0-1ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Library for the GNOME help browser
  - Homepage: https://wiki.gnome.org/Apps/Yelp
  - Install: `sudo apt-get install libyelp0`
  - Install (apt): `sudo apt install libyelp0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libbz2-1.0, libc6 (>= 2.14), libglib2.0-0 (>= 2.39.90), libgtk-3-0 (>= 3.13.3), liblzma5 (>= 5.1.1alpha+20120614), libsoup2.4-1 (>= 2.4.0), libsqlite3-0 (>= 3.5.9), libwebkit2gtk-4.0-37 (>= 2.15.1), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25)

  </details>

- **lightdm-settings**
  - Latest version: 1.3.3
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: LightDM configuration tool
  - Install: `sudo apt-get install lightdm-settings`
  - Install (apt): `sudo apt install lightdm-settings`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: lsb-release, python3, python3-setproctitle, python3-xapp

  </details>

- **linux-kernel-generic**
  - Latest version: 5.0.0-32
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: The Linux kernel.
  - Install: `sudo apt-get install linux-kernel-generic`
  - Install (apt): `sudo apt install linux-kernel-generic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: kernel
  - Priority: optional
  - depends: linux-firmware, linux-headers-5.0.0-32-generic, linux-image-5.0.0-32-generic, linux-modules-extra-5.0.0-32-generic

  </details>

- **linuxmint-keyring**
  - Latest version: 2016.05.26
  - Architectures: all
  - Suite: tricia
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


### <a id="packages-M"></a>M

- **marco**
  - Latest version: 1.22.3-2mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: lightweight GTK+ window manager for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install marco`
  - Install (apt): `sudo apt install marco`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.9.10), libmarco-private2 (= 1.22.3-1+tricia), libmarco-private2 (= 1.22.3-2mint1+tricia), libpango-1.0-0 (>= 1.14.0), libx11-6, marco-common (= 1.22.3-1+tricia), marco-common (= 1.22.3-2mint1+tricia), mate-desktop-common (>= 1.20), zenity
  - breaks: mate-window-manager (<= 1.0.0-2)
  - provides: x-window-manager

  </details>

- **marco-common**
  - Latest version: 1.22.3-2mint1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: lightweight GTK+ window manager for MATE (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install marco-common`
  - Install (apt): `sudo apt install marco-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-control-center (<< 1.20.0), mate-window-manager (<= 1.0.0-2)

  </details>

- **mate-applets**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Various applets for the MATE panel
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-applets`
  - Install (apt): `sudo apt install mate-applets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: gsettings-desktop-schemas, gvfs, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.15), libcairo2 (>= 1.2.4), libcpufreq0 (>= 001), libdbus-glib-1-2 (>= 0.88), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libgtksourceview-3.0-1 (>= 2.91.4), libgtop-2.0-11 (>= 2.22.3), libgucharmap-2-90-7 (>= 1:3.0.0), libiw30 (>= 30~pre1), libmate-panel-applet-4-1 (>= 1.20), libmateweather1 (>= 1.20), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.99), libupower-glib3 (>= 0.99.0), libwnck-3-0 (>= 2.91.6), libx11-6, libxml2 (>= 2.7.4), mate-applets-common (= 1.22.2-1+tricia), mate-panel
  - recommends: mate-media, mate-polkit, mate-system-monitor
  - breaks: mate-netspeed (<< 1.13.0)
  - replaces: mate-netspeed (<< 1.13.0)

  </details>

- **mate-applets-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Various applets for the MATE panel (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-applets-common`
  - Install (apt): `sudo apt install mate-applets-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-applets (<< 1.22.1-1~), mate-netspeed (<< 1.13.0), mate-netspeed-common (<< 1.13.0)
  - replaces: mate-applets (<< 1.22.1-1~), mate-netspeed (<< 1.13.0), mate-netspeed-common (<< 1.13.0)

  </details>

- **mate-common**
  - Latest version: 1.22.0-1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: common scripts and macros to develop with MATE
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-common`
  - Install (apt): `sudo apt install mate-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: autoconf, automake, gettext, gtk-doc-tools, intltool, libtool, pkg-config
  - preDepends: dpkg (>= 1.15.6~)

  </details>

- **mate-control-center**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the MATE desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-control-center`
  - Install (apt): `sudo apt install mate-control-center`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: caja-common (>= 1.8.0), desktop-file-utils, gsettings-desktop-schemas, libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libdbus-glib-1-2 (>= 0.78), libdconf1 (>= 0.14.0), libfontconfig1 (>= 2.12), libfreetype6 (>= 2.2.1), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libglib2.0-bin, libgtk-3-0 (>= 3.21.4), libmarco-private2 (>= 1.20), libmate-desktop-2-17 (>= 1.22.0), libmate-slab0 (= 1.22.2-1+tricia), libmate-window-settings1 (= 1.22.2-1+tricia), libmatekbd4 (>= 1.20), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxcursor1 (>> 1.1.2), libxi6 (>= 2:1.2.0), libxklavier16 (>= 5.0), libxml2 (>= 2.7.4), libxss1, marco-common (>= 1.20), mate-control-center-common (= 1.22.2-1+tricia), mate-desktop (>= 1.22.0), mate-icon-theme, mate-menus, mate-settings-daemon (>= 1.22.0)
  - breaks: ubuntu-mate-default-settings (<< 16.04)

  </details>

- **mate-control-center-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: utilities to configure the MATE desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-control-center-common`
  - Install (apt): `sudo apt install mate-control-center-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-control-center (<< 1.11.0)

  </details>

- **mate-desktop**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Library with common API for various MATE modules
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-desktop`
  - Install (apt): `sudo apt install mate-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: hicolor-icon-theme, libc6 (>= 2.4), libglib2.0-0 (>= 2.28.0), libgtk-3-0 (>= 3.0.0), libmate-desktop-2-17 (>= 1.10.0), mate-desktop-common (= 1.22.2-1+tricia)
  - recommends: mate-user-guide
  - breaks: mate-desktop-gnome
  - replaces: mate-desktop-gnome

  </details>

- **mate-desktop-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Library with common API for various MATE modules (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-desktop-common`
  - Install (apt): `sudo apt install mate-desktop-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-desktop (<< 1.1.1-1), mate-settings-daemon (<< 1.20.0)
  - replaces: mate-desktop (<< 1.1.1-1)

  </details>

- **mate-desktop-environment**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
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

- **mate-indicator-applet**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE panel indicator applet
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-indicator-applet`
  - Install (apt): `sudo apt install mate-indicator-applet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libglib2.0-0 (>= 2.22.0), libgtk-3-0 (>= 3.0.0), libido3-0.1-0 (>= 13.10.0daily13.06.19), libindicator3-7 (>= 0.4.90), libmate-panel-applet-4-1 (>= 1.20), libx11-6, mate-indicator-applet-common (= 1.22.1-1+tricia), mate-panel
  - provides: indicator-renderer

  </details>

- **mate-indicator-applet-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE panel indicator applet (common files)
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-indicator-applet-common`
  - Install (apt): `sudo apt install mate-indicator-applet-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - breaks: mate-indicator-applet (<< 1.9.0)

  </details>

- **mate-media**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: MATE media utilities
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-media`
  - Install (apt): `sudo apt install mate-media`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libmate-desktop-2-17 (>= 1.20), libmatemixer0 (>= 1.10.0), libpango-1.0-0 (>= 1.14.0), libxml2 (>= 2.7.4), mate-desktop-common (>= 1.20), mate-media-common (= 1.22.0-1+tina), mate-media-common (= 1.22.0-1linuxmint1+tina)
  - recommends: alsa-utils, sound-theme-freedesktop
  - breaks: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)
  - replaces: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)

  </details>

- **mate-media-common**
  - Latest version: 1.22.0-1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: MATE media utilities (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-media-common`
  - Install (apt): `sudo apt install mate-media-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - breaks: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)
  - replaces: mate-media-gstreamer (<< 1.9.0), mate-media-pulse (<< 1.9.0)

  </details>

- **mate-menus**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: implementation of the freedesktop menu specification for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-menus`
  - Install (apt): `sudo apt install mate-menus`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: gir1.2-matemenu-2.0 (= 1.22.1-1+tricia)
  - breaks: mate-control-center (<< 1.13.0)

  </details>

- **mate-netbook**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE utilities for netbooks
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-netbook`
  - Install (apt): `sudo apt install mate-netbook`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.4.10), libfakekey0 (>= 0.1), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libmate-panel-applet-4-1 (>= 1.20), libpango-1.0-0 (>= 1.14.0), libwnck-3-0 (>= 2.91.6), libx11-6, mate-netbook-common (= 1.22.2-1+tricia)

  </details>

- **mate-netbook-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE utilities for netbooks (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-netbook-common`
  - Install (apt): `sudo apt install mate-netbook-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-netbook (<< 1.9.0)
  - replaces: mate-netbook (<< 1.9.0)

  </details>

- **mate-notification-daemon**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: daemon to display passive popup notifications
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-notification-daemon`
  - Install (apt): `sudo apt install mate-notification-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libglib2.0-bin, libgtk-3-0 (>= 3.21.4), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libwnck-3-0 (>= 2.91.6), libx11-6, mate-notification-daemon-common (= 1.22.1-1+tricia)
  - provides: notification-daemon

  </details>

- **mate-notification-daemon-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: daemon to display passive popup notifications (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-notification-daemon-common`
  - Install (apt): `sudo apt install mate-notification-daemon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-notification-daemon (<< 1.11.0)
  - replaces: mate-notification-daemon (<< 1.11.0)

  </details>

- **mate-panel**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: launcher and docking facility for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-panel`
  - Install (apt): `sudo apt install mate-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.6.0), libgdk-pixbuf2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.45.3), libgtk-3-0 (>= 3.21.5), libice6 (>= 1:1.0.0), libmate-desktop-2-17 (>= 1.20), libmate-menu2 (>= 1.22.0), libmate-panel-applet-4-1 (= 1.22.2-1mint1+tricia), libmateweather1 (>= 1.20), libpango-1.0-0 (>= 1.18.0), librsvg2-2 (>= 2.32.0), libsm6, libwayland-client0 (>= 1.0.2), libwnck-3-0 (>= 3.4.7), libx11-6, libxrandr2 (>= 2:1.2.99.3), mate-desktop, mate-menus, mate-panel-common (= 1.22.2-1mint1+tricia), mate-polkit, menu-xdg
  - breaks: mate-panel-common (<< 1.1.1-4)
  - replaces: mate-panel-common (<< 1.1.1-4)

  </details>

- **mate-panel-common**
  - Latest version: 1.22.2-1mint1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: launcher and docking facility for MATE (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-panel-common`
  - Install (apt): `sudo apt install mate-panel-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - breaks: mate-panel (<= 1.9.0)
  - replaces: mate-panel (<= 1.9.0)

  </details>

- **mate-polkit**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE authentication agent for PolicyKit-1
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-polkit`
  - Install (apt): `sudo apt install mate-polkit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: accountsservice, libappindicator3-1 (>= 0.2.92), libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libpolkit-agent-1-0 (>= 0.99), libpolkit-gobject-1-0 (>= 0.99), mate-polkit-common (= 1.22.0-1+tina), policykit-1
  - provides: polkit-1-auth-agent

  </details>

- **mate-polkit-common**
  - Latest version: 1.22.0-1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE authentication agent for PolicyKit-1 (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-polkit-common`
  - Install (apt): `sudo apt install mate-polkit-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - breaks: mate-polkit (<< 1.8.0)

  </details>

- **mate-power-manager**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: power management tool for the MATE desktop
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-power-manager`
  - Install (apt): `sudo apt install mate-power-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dbus-x11, libc6 (>= 2.27), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.88), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.39.4), libgnome-keyring0 (>= 2.20.3), libgtk-3-0 (>= 3.21.4), libmate-panel-applet-4-1 (>= 1.20), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.22.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.0), libx11-6, libxext6, libxrandr2 (>= 2:1.2.99.2), mate-notification-daemon | notification-daemon, mate-power-manager-common (= 1.22.2-1+tricia), policykit-1, systemd | consolekit, upower
  - suggests: mate-polkit

  </details>

- **mate-power-manager-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: power management tool for the MATE desktop (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-power-manager-common`
  - Install (apt): `sudo apt install mate-power-manager-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-power-manager (<< 1.9.0)
  - replaces: mate-power-manager (<< 1.9.0)

  </details>

- **mate-screensaver**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE screen saver and locker
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-screensaver`
  - Install (apt): `sudo apt install mate-screensaver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dbus-x11, libc6 (>= 2.14), libcairo2 (>= 1.10.0), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.78), libgdk-pixbuf2.0-0 (>= 2.22.0), libgl1, libglib2.0-0 (>= 2.39.91), libgtk-3-0 (>= 3.21.4), libmate-desktop-2-17 (>= 1.20), libmate-menu2 (>= 1.22.0), libmatekbd4 (>= 1.20), libnotify4 (>= 0.7.0), libpam0g (>= 0.99.7.1), libpango-1.0-0 (>= 1.18.0), libsystemd0, libx11-6, libxext6, libxklavier16 (>= 5.0), libxss1, libxxf86vm1, mate-desktop-common, mate-screensaver-common (= 1.22.2-1+tricia), mate-session-manager (>= 1.11.0)
  - recommends: mate-power-manager
  - suggests: rss-glx, xscreensaver-data
  - breaks: mate-screensaver-common (<< 1.9.0)
  - replaces: mate-screensaver-common (<< 1.9.0)

  </details>

- **mate-screensaver-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE screen saver and locker (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-screensaver-common`
  - Install (apt): `sudo apt install mate-screensaver-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-screensaver (<< 1.5.2)

  </details>

- **mate-sensors-applet**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Display readings from hardware sensors in your MATE panel
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-sensors-applet`
  - Install (apt): `sudo apt install mate-sensors-applet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.14), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.21.4), libmate-panel-applet-4-1 (>= 1.20), libmate-sensors-applet-plugin0 (= 1.22.1-1+tricia), libnotify4 (>= 0.7.0), libsensors4 (>= 1:3.0.0), mate-sensors-applet-common (= 1.22.1-1+tricia)
  - recommends: hddtemp
  - suggests: mate-sensors-applet-nvidia

  </details>

- **mate-sensors-applet-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Display readings from hardware sensors in your MATE panel (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-sensors-applet-common`
  - Install (apt): `sudo apt install mate-sensors-applet-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-sensors-applet (<< 1.9.0)
  - replaces: mate-sensors-applet (<< 1.9.0)

  </details>

- **mate-sensors-applet-nvidia**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Display readings from hardware sensors in your MATE panel (NVIDIA sensors)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-sensors-applet-nvidia`
  - Install (apt): `sudo apt install mate-sensors-applet-nvidia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.12.0), libmate-sensors-applet-plugin0 (>= 1.8.0), libx11-6, libxnvctrl0, mate-sensors-applet (= 1.22.1-1+tricia)

  </details>

- **mate-session-manager**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Session manager of the MATE desktop environment
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-session-manager`
  - Install (apt): `sudo apt install mate-session-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dbus-x11, dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.7), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.88), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.21.4), libice6 (>= 1:1.0.0), libsm6, libsystemd0, libx11-6, libxau6, libxext6, libxrender1, libxtst6, mate-desktop-common (>= 1.20)
  - recommends: caja, marco, mate-panel, mate-polkit, mate-settings-daemon
  - breaks: mate-settings-daemon (<< 1.11.0)
  - provides: x-session-manager

  </details>

- **mate-settings-daemon**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: daemon handling the MATE session settings
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-settings-daemon`
  - Install (apt): `sudo apt install mate-settings-daemon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.88), libdconf1 (>= 0.14.0), libfontconfig1 (>= 2.12), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.43.92), libgtk-3-0 (>= 3.21.4), libmate-desktop-2-17 (>= 1.22.0), libmatekbd4 (>= 1.20), libmatemixer0 (>= 1.10.0), libnotify4 (>= 0.7.0), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.13.4-2~), libpolkit-gobject-1-0 (>= 0.99), libpulse0 (>= 0.99.1), libx11-6, libxi6 (>= 2:1.2.0), libxklavier16 (>= 5.0), mate-desktop-common (>= 1.22.0), mate-polkit, mate-settings-daemon-common (= 1.22.1-1+tricia), x11-xserver-utils
  - breaks: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)
  - replaces: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)

  </details>

- **mate-settings-daemon-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: daemon handling the MATE session settings (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-settings-daemon-common`
  - Install (apt): `sudo apt install mate-settings-daemon-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)
  - replaces: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)

  </details>

- **mate-settings-daemon-dev**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: daemon handling the MATE session settings (development files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-settings-daemon-dev`
  - Install (apt): `sudo apt install mate-settings-daemon-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libdbus-1-dev, libdbus-glib-1-dev, libglib2.0-dev, mate-settings-daemon (= 1.22.1-1+tricia)
  - breaks: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)
  - replaces: mate-settings-daemon-gstreamer (<< 1.9.0), mate-settings-daemon-pulse (<< 1.9.0)

  </details>

- **mate-system-monitor**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Process viewer and system resource monitor for MATE
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-system-monitor`
  - Install (apt): `sudo apt install mate-system-monitor`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.14), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.2.4), libgcc1 (>= 1:3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.45.3), libglibmm-2.4-1v5 (>= 2.54.0), libgtk-3-0 (>= 3.21.5), libgtkmm-3.0-1v5 (>= 3.22.0), libgtop-2.0-11 (>= 2.22.3), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), librsvg2-2 (>= 2.14.4), libsigc++-2.0-0v5 (>= 2.2.0), libstdc++6 (>= 5.2), libsystemd0, libwnck-3-0 (>= 2.91.6), libxml2 (>= 2.7.4), mate-system-monitor-common (= 1.22.2-1+tricia)
  - recommends: gvfs

  </details>

- **mate-system-monitor-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Process viewer and system resource monitor for MATE (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-system-monitor-common`
  - Install (apt): `sudo apt install mate-system-monitor-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-system-monitor (<< 1.11.0)
  - replaces: mate-system-monitor (<< 1.11.0)

  </details>

- **mate-terminal**
  - Latest version: 1.22.0-2linuxmint1+tina
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: MATE terminal emulator application
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-terminal`
  - Install (apt): `sudo apt install mate-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: gsettings-desktop-schemas, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libdconf1 (>= 0.14.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.22), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libsm6, libvte-2.91-0 (>= 0.49.92), libx11-6, mate-desktop-common, mate-terminal-common (= 1.22.0-1+tina), mate-terminal-common (= 1.22.0-2linuxmint1+tina)
  - provides: x-terminal-emulator

  </details>

- **mate-terminal-common**
  - Latest version: 1.22.0-2linuxmint1+tina
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: MATE terminal emulator application (common files)
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-terminal-common`
  - Install (apt): `sudo apt install mate-terminal-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-terminal (<< 1.1.0-2)
  - replaces: mate-terminal (<< 1.1.0-2)

  </details>

- **mate-user-guide**
  - Latest version: 1.22.3-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: User documentation for MATE Desktop Environment
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-user-guide`
  - Install (apt): `sudo apt install mate-user-guide`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: doc
  - Priority: optional
  - depends: yelp
  - suggests: mate-desktop-environment

  </details>

- **mate-user-share**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: User level public file sharing via WebDAV or ObexFTP
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-user-share`
  - Install (apt): `sudo apt install mate-user-share`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: apache2-bin, gvfs-backends, libapache2-mod-dnssd (>= 0.6), libc6 (>= 2.4), libcaja-extension1 (>= 1.20), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libpango-1.0-0 (>= 1.14.0), libselinux1 (>= 1.32), libx11-6, mate-user-share-common (= 1.22.1-1+tricia), obex-data-server

  </details>

- **mate-user-share-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: User level public file sharing via WebDAV or ObexFTP (common files)
  - Homepage: http://www.mate-desktop.org
  - Install: `sudo apt-get install mate-user-share-common`
  - Install (apt): `sudo apt install mate-user-share-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-user-share (<< 1.11.0)
  - replaces: mate-user-share (<< 1.11.0)

  </details>

- **mate-utils**
  - Latest version: 1.22.2-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: MATE desktop utilities
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-utils`
  - Install (apt): `sudo apt install mate-utils`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.7), libcairo2 (>= 1.10.0), libcanberra-gtk3-0 (>= 0.25), libcanberra0 (>= 0.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libgtop-2.0-11 (>= 2.22.3), libice6 (>= 1:1.0.0), libmate-panel-applet-4-1 (>= 1.20), libmatedict6 (= 1.22.2-1+tricia), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsm6, libx11-6, libxext6, mate-desktop-common, mate-utils-common (= 1.22.2-1+tricia), zlib1g (>= 1:1.1.4)

  </details>

- **mate-utils-common**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: MATE desktop utilities (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mate-utils-common`
  - Install (apt): `sudo apt install mate-utils-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend
  - breaks: mate-utils (<< 1.9.0)
  - replaces: mate-utils (<< 1.9.0)

  </details>

- **menulibre**
  - Latest version: 2.2.1-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: advanced FreeDesktop.org compliant menu editor
  - Homepage: https://launchpad.net/menulibre
  - Install: `sudo apt-get install menulibre`
  - Install (apt): `sudo apt install menulibre`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Python Applications Packaging Team <python-apps-team@lists.alioth.debian.org>
  - Section: utils
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gmenu-3.0 (>= 3.5.3), gir1.2-gtk-3.0, gnome-menus (>= 3.5.3), python3-gi (>= 3.0), python3-psutil, python3:any (>= 3.3.2-2~), xdg-utils

  </details>

- **minecraft-launcher**
  - Latest version: 2.1.9618
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: Official Minecraft Launcher
  - Homepage: https://minecraft.net/
  - Install: `sudo apt-get install minecraft-launcher`
  - Install (apt): `sudo apt install minecraft-launcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Petr Mrázek <petr@mojang.com>
  - Section: games
  - Priority: extra
  - depends: default-jre, gconf-service, libasound2 (>= 1.0.23), libatk1.0-0 (>= 1.12.4), libbz2-1.0, libc6 (>= 2.11), libcairo2 (>= 1.6.0), libcups2 (>= 1.4.0), libcurl3 | libcurl4, libdbus-1-3 (>= 1.1.4), libexpat1 (>= 1.95.8), libfontconfig1 (>= 2.8.0), libgcc1 (>= 1:4.1.1), libgconf-2-4 (>= 2.31.1), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.26.0), libgtk-3-0 (>= 3.18.9), libgtk2.0-0, libnspr4 (>= 1.8.0.10), libnss3 (>= 3.17.2), libpango1.0-0 (>= 1.14.0), libstdc++6 (>= 4.8.0), libx11-6 (>= 2:1.4.99.1), libx11-xcb1, libxcb1, libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxi6 (>= 2:1.2.99.4), libxrandr2 (>= 2:1.2.99.3), libxrender1, libxss1, libxtst6, lsb-base (>= 4.1), wget, xdg-utils (>= 1.0.2)
  - preDepends: ca-certificates, dpkg (>= 1.14.0), wget | curl

  </details>

- **mint-artwork**
  - Latest version: 1.3.4
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Linux Mint Artwork and Resources
  - Install: `sudo apt-get install mint-artwork`
  - Install (apt): `sudo apt install mint-artwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: mint-backgrounds-tricia, mint-themes, mint-x-icons, mint-y-icons
  - conflicts: ldm-mint-theme, mint-artwork-cinnamon, mint-artwork-common, mint-artwork-debian, mint-artwork-debian-cinnamon, mint-artwork-debian-mate, mint-artwork-gnome, mint-artwork-mate, mint-artwork-xfce, mint-backgrounds-xfce
  - replaces: ldm-mint-theme, mint-artwork-cinnamon, mint-artwork-common, mint-artwork-debian, mint-artwork-debian-cinnamon, mint-artwork-debian-mate, mint-artwork-gnome, mint-artwork-mate, mint-artwork-xfce, mint-backgrounds-xfce
  - provides: mint-mate-default-settings

  </details>

- **mint-backgrounds-maya**
  - Latest version: 1.5
  - Architectures: all
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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
  - Suite: tricia
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

- **mint-common**
  - Latest version: 2.0.9
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Common scripts and resources for Linux Mint
  - Install: `sudo apt-get install mint-common`
  - Install (apt): `sudo apt install mint-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-gtk-3.0, gir1.2-xapp-1.0, libgtk3-perl, mint-translations, python3, python3-aptdaemon, python3-aptdaemon.gtk3widgets, python3-gi

  </details>

- **mint-dev-tools**
  - Latest version: 1.3.4
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: A collection of tools to develop/compile Linux Mint projects
  - Install: `sudo apt-get install mint-dev-tools`
  - Install (apt): `sudo apt install mint-dev-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, debhelper, devscripts, dpkg-dev, equivs, git, python3 (>= 3.3), python3-pkg-resources, python3-polib, python3-psutil
  - recommends: awf, ccache, d-feet, dconf-editor, devhelp, gconf-editor, gdb, git-buildpackage, gitg, gitk, glade, gnome-api-docs, gnome-dbg, meld, meson, pyrenamer, regexxer, sublime-text, valgrind

  </details>

- **mint-info-cinnamon**
  - Latest version: 2019.11.25
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2019.11.25
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2019.11.25
  - Architectures: all
  - Suite: tricia
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

- **mint-meta-cinnamon**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Set of packages installed by default in the Cinnamon edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-cinnamon`
  - Install (apt): `sudo apt install mint-meta-cinnamon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: cinnamon, cinnamon-control-center, cinnamon-screensaver, folder-color-switcher, gir1.2-gnomedesktop-3.0, gir1.2-nemo-3.0, mint-meta-core, nemo, nemo-fileroller
  - conflicts: mint-meta-cinnamon-dvd, mint-meta-gnome, mint-meta-main, mint-meta-x64
  - replaces: mint-meta-cinnamon-dvd, mint-meta-gnome, mint-meta-main, mint-meta-x64

  </details>

- **mint-meta-codecs**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: All the packages required for multimedia support in Linux Mint.
  - Install: `sudo apt-get install mint-meta-codecs`
  - Install (apt): `sudo apt install mint-meta-codecs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: adobe-flashplugin, cabextract, chromium-codecs-ffmpeg-extra, gstreamer1.0-libav, gstreamer1.0-plugins-bad, gstreamer1.0-plugins-ugly, gstreamer1.0-vaapi, libavcodec-extra, libdvdcss2, libdvdnav4, libdvdread4, libhal1-flash, unrar, unshield

  </details>

- **mint-meta-core**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Core Linux Mint packages
  - Install: `sudo apt-get install mint-meta-core`
  - Install (apt): `sudo apt install mint-meta-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: grub2-theme-mint, linuxmint-keyring, mint-artwork, mint-info, mintbackup, mintdrivers, mintinstall, mintreport, mintsources, mintstick, mintsystem, mintupdate, mintwelcome, plymouth-theme-ubuntu-text, ubuntu-dbgsym-keyring, ubuntu-system-adjustments

  </details>

- **mint-meta-mate**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Set of packages installed by default in the MATE edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-mate`
  - Install (apt): `sudo apt install mint-meta-mate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: caja, engrampa, folder-color-switcher, gir1.2-caja, gnome-system-tools, libmatedesktop, libmatekbd, libmateweather, marco, mate-applets, mate-common, mate-control-center, mate-desktop, mate-icon-theme, mate-indicator-applet, mate-media, mate-menus, mate-notification-daemon, mate-panel, mate-polkit, mate-power-manager, mate-screensaver, mate-sensors-applet, mate-session-manager, mate-settings-daemon, mate-system-monitor, mate-terminal, mate-user-guide, mate-utils, mint-meta-core, mintdesktop, mintmenu

  </details>

- **mint-meta-xfce**
  - Latest version: 2019.12.28
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Set of packages installed by default in the Xfce edition of Linux Mint
  - Install: `sudo apt-get install mint-meta-xfce`
  - Install (apt): `sudo apt install mint-meta-xfce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gtk2-engines-xfce, mint-meta-core, mintdesktop, mugshot, thunar, thunar-archive-plugin, thunar-media-tags-plugin, thunar-volman, xfce4-appfinder, xfce4-cpufreq-plugin, xfce4-eyes-plugin, xfce4-mailwatch-plugin, xfce4-panel, xfce4-places-plugin, xfce4-screenshooter, xfce4-screenshooter-plugin, xfce4-session, xfce4-settings, xfce4-systemload-plugin, xfce4-time-out-plugin, xfce4-timer-plugin, xfce4-verve-plugin, xfce4-whiskermenu-plugin, xfce4-xapp-status-plugin, xfconf, xfdesktop4, xfwm4

  </details>

- **mint-mirrors**
  - Latest version: 1.2.4
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.8.3
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2020.01.06
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.1.6
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.5.3
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.3.7
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Mint-Y icon theme
  - Install: `sudo apt-get install mint-y-icons`
  - Install (apt): `sudo apt install mint-y-icons`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional

  </details>

- **mintbackup**
  - Latest version: 2.3.8
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Home Directory Backup Tool
  - Install: `sudo apt-get install mintbackup`
  - Install (apt): `sudo apt install mintbackup`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: aptitude, dconf-gsettings-backend | gsettings-backend, gir1.2-xapp-1.0, mint-common (>= 2), python3 (>= 3), python3-apt, python3-gi, python3-setproctitle

  </details>

- **mintdesktop**
  - Latest version: 3.6.8
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Desktop configuration tool
  - Install: `sudo apt-get install mintdesktop`
  - Install (apt): `sudo apt install mintdesktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-cli, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, mint-info, mintsystem, python3 (>= 3.3), python3-configobj, python3-xapp (>= 1.6), wmctrl

  </details>

- **mintdrivers**
  - Latest version: 1.6.3
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Driver Manager
  - Install: `sudo apt-get install mintdrivers`
  - Install (apt): `sudo apt install mintdrivers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-packagekitglib-1.0, gir1.2-xapp-1.0, mintsystem (>= 8.4.8), packagekit, python3 (>= 3.3), python3-aptdaemon, python3-aptdaemon.gtk3widgets, python3-gi, python3-psutil, ubuntu-drivers-common

  </details>

- **mintinstall**
  - Latest version: 8.0.3.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Software Manager
  - Install: `sudo apt-get install mintinstall`
  - Install (apt): `sudo apt install mintinstall`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: app-install-data, gir1.2-appstream-1.0, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, libgtk2-perl, mint-common (>= 2), python3 (>= 3.4), python3-apt, python3-aptdaemon, python3-aptdaemon.gtk3widgets, python3-bs4, python3-configobj, python3-setproctitle
  - preDepends: ca-certificates (>= 20210101)
  - recommends: flatpak, gir1.2-flatpak-1.0, xdg-desktop-portal-gtk

  </details>

- **mintlocale**
  - Latest version: 1.5.3
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Language selection tool
  - Install: `sudo apt-get install mintlocale`
  - Install (apt): `sudo apt install mintlocale`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-accountsservice-1.0, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-xapp-1.0, im-config (>= 0.23-1), iso-flag-png, mint-common (>= 2), python3, python3-gi

  </details>

- **mintmenu**
  - Latest version: 6.0.5.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Advanced MATE menu
  - Install: `sudo apt-get install mintmenu`
  - Install (apt): `sudo apt install mintmenu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtk-3.0, gir1.2-matedesktop-2.0, gir1.2-matemenu-2.0, gir1.2-matepanelapplet-4.0, gir1.2-xapp-1.0, libglib2.0-bin, mate-menus, mint-common, python3, python3-apt, python3-configobj, python3-gi-cairo, python3-setproctitle, python3-unidecode, python3-xapp, python3-xdg, python3-xlib, xdg-utils

  </details>

- **mintnanny**
  - Latest version: 1.5.7
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.2.1.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Troubleshooting tool for Linux Mint
  - Install: `sudo apt-get install mintreport`
  - Install (apt): `sudo apt install mintreport`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtksource-3.0, inxi, mint-common, python3, python3-apt, python3-configobj, python3-gi, python3-setproctitle, xapps-common

  </details>

- **mintsources**
  - Latest version: 2.0.0.2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Software Sources configuration tool
  - Install: `sudo apt-get install mintsources`
  - Install (apt): `sudo apt install mintsources`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, gir1.2-vte-2.91, gir1.2-xapp-1.0, iso-flag-png, lsb-release, mint-common (>= 2), python3-apt, python3-gi, python3-gi-cairo, python3-pycurl
  - replaces: python-software-properties (<< 1), python3-software-properties (<< 1), software-properties-common (<< 1), software-properties-gtk (<< 1)

  </details>

- **mintstick**
  - Latest version: 1.4.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: write .img and .iso files to USB sticks
  - Install: `sudo apt-get install mintstick`
  - Install (apt): `sudo apt install mintstick`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: coreutils (>= 6.10-3), exfat-utils, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-polkit-1.0, gir1.2-udisks-2.0, gir1.2-xapp-1.0, ntfs-3g, parted, policykit-1, procps, python3, python3-gi, python3-parted, util-linux
  - conflicts: usb-imagewriter
  - replaces: usb-imagewriter

  </details>

- **mintsystem**
  - Latest version: 8.5.2
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 5.5.9
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: The Linux Mint Update Manager
  - Install: `sudo apt-get install mintupdate`
  - Install (apt): `sudo apt install mintupdate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apt, cron, dconf-gsettings-backend | gsettings-backend, distro-info-data, gir1.2-appindicator3-0.1, gir1.2-xapp-1.0, lsb-release, mint-mirrors, mint-upgrade-info, psmisc, python3-apt, python3-pycurl, python3-setproctitle, python3-xapp (>= 1.6), synaptic
  - conflicts: mintupdate-gnome, mintupdate-kde, mintupdate-xfce
  - replaces: mintupdate-gnome, mintupdate-kde, mintupdate-xfce

  </details>

- **mintupgrade**
  - Latest version: 2020.07.18.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Linux Mint Release Upgrader
  - Install: `sudo apt-get install mintupgrade`
  - Install (apt): `sudo apt install mintupgrade`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: acpi, apt, aptitude, crudini, mint-common, mint-info, mintsystem, perl, python3 (>= 3.3), zenity

  </details>

- **mintupload**
  - Latest version: 4.1.8
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2.4.2
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Welcome screen for Linux Mint
  - Install: `sudo apt-get install mintwelcome`
  - Install (apt): `sudo apt install mintwelcome`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: apturl | apturl-kde, mint-common, mint-info, python3 (>= 3.3), python3-gi, python3-xapp (>= 1.0.1)
  - conflicts: mintassistant, mintassistant-gnome, mintassistant-kde
  - replaces: mintassistant, mintassistant-gnome, mintassistant-kde

  </details>

- **mousepad**
  - Latest version: 0.4.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: simple Xfce oriented text editor
  - Install: `sudo apt-get install mousepad`
  - Install (apt): `sudo apt install mousepad`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.16.2), libgtksourceview-3.0-1 (>= 2.91.4), libpango-1.0-0 (>= 1.14.0), libxfconf-0-3 (>= 4.6.0)

  </details>

- **mozo**
  - Latest version: 1.22.2-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: easy MATE menu editing tool
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install mozo`
  - Install (apt): `sudo apt install mozo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: utils
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-matemenu-2.0 (>= 1.22), mate-menus, python3-gi, python3:any (>= 3.5~)
  - recommends: mate-panel

  </details>

- **muffin**
  - Latest version: 4.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: window and compositing manager
  - Install: `sudo apt-get install muffin`
  - Install (apt): `sudo apt install muffin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.9.12), libmuffin0, libpango-1.0-0 (>= 1.14.0), libx11-6, libxcomposite1 (>= 1:0.3-1), muffin-common (= 4.4.4+tricia), zenity
  - suggests: gnome-themes, xdg-user-dirs
  - provides: x-window-manager

  </details>

- **muffin-common**
  - Latest version: 4.4.4+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: window and compositing manager (data files)
  - Install: `sudo apt-get install muffin-common`
  - Install (apt): `sudo apt install muffin-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, sgml-base (>= 1.26)

  </details>

- **muffin-dbg**
  - Latest version: 4.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: window and compositing manager (debugging symbols)
  - Install: `sudo apt-get install muffin-dbg`
  - Install (apt): `sudo apt install muffin-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: libmuffin0 (= 4.4.4+tricia), muffin (= 4.4.4+tricia)

  </details>

- **muffin-doc**
  - Latest version: 4.4.4+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Muffin documentation
  - Install: `sudo apt-get install muffin-doc`
  - Install (apt): `sudo apt install muffin-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: doc
  - Priority: optional
  - depends: devhelp

  </details>

- **mugshot**
  - Latest version: 0.4.2-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: lightweight user-configuration application
  - Homepage: https://github.com/bluesabre/mugshot
  - Install: `sudo apt-get install mugshot`
  - Install (apt): `sudo apt install mugshot`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Python Applications Packaging Team <python-apps-team@lists.alioth.debian.org>
  - Section: utils
  - Priority: optional
  - depends: accountsservice, dconf-gsettings-backend | gsettings-backend, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gst-plugins-base-1.0, gir1.2-gstreamer-1.0, gir1.2-gtk-3.0, python3-cairo, python3-dbus, python3-gi, python3-pexpect, python3:any (>= 3.3.2-2~)
  - recommends: gir1.2-cheese-3.0, gir1.2-gtkclutter-1.0, gstreamer1.0-tools
  - suggests: gstreamer1.0-plugins-good

  </details>


### <a id="packages-N"></a>N

- **nautilus-extension-gnome-terminal**
  - Latest version: 3.28.1-1ubuntu1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: GNOME terminal emulator application
  - Homepage: https://wiki.gnome.org/Apps/Terminal
  - Install: `sudo apt-get install nautilus-extension-gnome-terminal`
  - Install (apt): `sudo apt install nautilus-extension-gnome-terminal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: gnome-terminal (= 3.28.1-1ubuntu1mint2), libc6 (>= 2.4), libglib2.0-0 (>= 2.42.0), libgtk-3-0 (>= 3.20), libnautilus-extension1a (>= 3.21.92-3~)
  - breaks: gnome-terminal (<< 3.27.92-2~)
  - replaces: brasero (<< 3.27.92-2~)

  </details>

- **nemo**
  - Latest version: 4.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: cinnamon-desktop-data, cinnamon-l10n, desktop-file-utils (>= 0.7), gsettings-desktop-schemas, gvfs (>= 1.3.2), libatk1.0-0 (>= 1.32.0), libc6 (>= 2.14), libcairo-gobject2 (>= 1.10.0), libcairo2 (>= 1.10.0), libcinnamon-desktop4 (>= 2.6.1), libexempi3 (>= 2.4.0), libexif12 (>= 0.6.21-1~), libgail-3-0 (>= 3.0.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.49.2), libglib2.0-data, libgtk-3-0 (>= 3.21.5), libnemo-extension1 (= 4.4.3+tricia), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.20.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxapp1 (>= 1.4.0), libxml2 (>= 2.7.4), nemo-data (= 4.4.3+tricia), shared-mime-info (>= 0.50)
  - recommends: gvfs-backends, gvfs-fuse, librsvg2-common, nemo-fileroller
  - suggests: eog, evince | pdf-viewer, totem | mp3-decoder, xdg-user-dirs

  </details>

- **nemo-audio-tab**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.3+tricia
  - Architectures: all
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, python
  - suggests: nemo

  </details>

- **nemo-dbg**
  - Latest version: 4.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: file manager and graphical shell for Cinnamon - debugging version
  - Homepage: http://www.github.com/linuxmint/nemo/
  - Install: `sudo apt-get install nemo-dbg`
  - Install (apt): `sudo apt install nemo-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: nemo (= 4.4.3+tricia)
  - replaces: libnemo-extension1-dbg

  </details>

- **nemo-dropbox**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dropbox, libc6 (>= 2.15), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.0.0), libnemo-extension1, nemo, policykit-1, procps, python-gtk2 (>= 2.12)
  - suggests: python-gpgme (>= 0.1)

  </details>

- **nemo-emblems**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.24.0), libgtk-3-0 (>= 3.0.0), libnemo-extension1

  </details>

- **nemo-fileroller**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: File Roller integration for Nemo
  - Install: `sudo apt-get install nemo-fileroller`
  - Install (apt): `sudo apt install nemo-fileroller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: misc
  - Priority: optional
  - depends: file-roller, libc6 (>= 2.2.5), libglib2.0-0 (>= 2.18.0), libnemo-extension1, nemo
  - recommends: cinnamon-l10n

  </details>

- **nemo-gtkhash**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: nemo extension for computing checksums and more using gtkhash
  - Install: `sudo apt-get install nemo-gtkhash`
  - Install (apt): `sudo apt install nemo-gtkhash`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: utils
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.14), libgcrypt20 (>= 1.8.0), libglib2.0-0 (>= 2.36), libgtk-3-0 (>= 3.0.0), libmhash2, libnemo-extension1, zlib1g (>= 1:1.1.4)
  - breaks: gtkhash (<< 0.6.0)
  - replaces: gtkhash (<< 0.6.0)

  </details>

- **nemo-image-converter**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: imagemagick, libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), libnemo-extension1
  - recommends: nemo (>= 2.0.0)

  </details>

- **nemo-media-columns**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Nemo Extension
  - Install: `sudo apt-get install nemo-media-columns`
  - Install (apt): `sudo apt install nemo-media-columns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: extra
  - depends: gir1.2-gexiv2-0.10, gir1.2-nemo-3.0, python-nemo (>= 3.9.0), python3-mutagen, python3-pil, python3-pymediainfo, python3-pypdf2

  </details>

- **nemo-pastebin**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: nemo-preview is a quick previewer for nemo
  - Install: `sudo apt-get install nemo-preview`
  - Install (apt): `sudo apt install nemo-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: extra
  - depends: cjs, gir1.2-clutter-gst-3.0, gir1.2-gtkclutter-1.0, gir1.2-webkit2-4.0, gir1.2-xreader, gstreamer1.0-plugins-good, libfreetype6, libgirepository-1.0-1, libgtksourceview-3.0-1, libmusicbrainz5-2, libpango-1.0-0, nemo

  </details>

- **nemo-seahorse**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: seahorse plugins and utilities for encryption
  - Install: `sudo apt-get install nemo-seahorse`
  - Install (apt): `sudo apt install nemo-seahorse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libcryptui0a (>= 3.12.2), libdbus-glib-1-2 (>= 0.78), libgcr-base-3-1 (>= 3.8.0), libglib2.0-0 (>= 2.37.3), libgpgme11 (>= 1.2.0), libgtk-3-0 (>= 3.0.0), libnemo-extension1, libnotify4 (>= 0.7.0), seahorse-daemon (>= 3.2.2)
  - recommends: seahorse
  - replaces: seahorse-plugins

  </details>

- **nemo-share**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Nemo extension to share folder using Samba
  - Install: `sudo apt-get install nemo-share`
  - Install (apt): `sudo apt install nemo-share`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: gir1.2-cinnamondesktop-3.0, libc6 (>= 2.7), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.0.0), libnemo-extension1, nemo, samba-common (>= 3.0.27a), samba-common-bin | samba-common (<< 2:3.4.0~pre2-1~0)
  - suggests: samba (>= 3.0.27a)

  </details>

- **nemo-terminal**
  - Latest version: 4.4.0+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.8.10-2ubuntu3mint1
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, libappindicator3-1 (>= 0.4.90), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.43.2), libgtk-3-0 (>= 3.10), libjansson4 (>= 2.0.1), libmm-glib0 (>= 0.7.991), libnm0 (>= 1.8.0), libnma0 (= 1.8.10-2ubuntu3mint1), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.7), libselinux1 (>= 2.1.9), network-manager (>= 1.8), policykit-1-gnome | polkit-1-auth-agent
  - recommends: gnome-keyring, iso-codes, mobile-broadband-provider-info, notification-daemon
  - suggests: network-manager-openconnect-gnome, network-manager-openvpn-gnome, network-manager-pptp-gnome, network-manager-vpnc-gnome

  </details>

- **networkd-dispatcher**
  - Latest version: 2.1-2~ubuntu20.04.1mint1.really2.2.1
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Dispatcher service for systemd-networkd connection status changes
  - Homepage: https://github.com/craftyguy/networkd-dispatcher
  - Install: `sudo apt-get install networkd-dispatcher`
  - Install (apt): `sudo apt install networkd-dispatcher`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: utils
  - Priority: optional
  - depends: dbus, gir1.2-glib-2.0, python3-dbus, python3-gi, python3:any
  - suggests: iw | wireless-tools

  </details>

- **nvidia-prime-applet**
  - Latest version: 1.0.8
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: An applet for NVIDIA Prime
  - Install: `sudo apt-get install nvidia-prime-applet`
  - Install (apt): `sudo apt install nvidia-prime-applet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gir1.2-xapp-1.0, python (<< 3), python (>= 2.4)

  </details>


### <a id="packages-O"></a>O

- **oem-config**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Perform end-user configuration after initial OEM installation
  - Install: `sudo apt-get install oem-config`
  - Install (apt): `sudo apt install oem-config`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: debconf (>= 0.5) | debconf-2.0, oem-config-frontend-18.04.1+linuxmint15, procps, ubiquity (= 18.04.1+linuxmint15)
  - conflicts: oem-config-keyboard, oem-config-locale, oem-config-timezone
  - replaces: oem-config-gtk (<< 1.54.13), oem-config-kde (<< 1.54.13), oem-config-keyboard, oem-config-locale, oem-config-timezone

  </details>

- **oem-config-debconf**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: debconf frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-debconf`
  - Install (apt): `sudo apt install oem-config-debconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: oem-config (= 18.04.1+linuxmint15), ubiquity-frontend-debconf (= 18.04.1+linuxmint15)
  - provides: oem-config-frontend-18.04.1+linuxmint15

  </details>

- **oem-config-gtk**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: GTK+ frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-gtk`
  - Install (apt): `sudo apt install oem-config-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: aptdaemon, oem-config (= 18.04.1+linuxmint15), python3-aptdaemon.gtk3widgets, ubiquity-frontend-gtk (= 18.04.1+linuxmint15)
  - replaces: oem-config (<< 1.0)
  - provides: oem-config-frontend-18.04.1+linuxmint15

  </details>

- **oem-config-kde**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: KDE frontend for end-user post-OEM-install configuration
  - Install: `sudo apt-get install oem-config-kde`
  - Install (apt): `sudo apt install oem-config-kde`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: oem-config (= 18.04.1+linuxmint15), ubiquity-frontend-kde (= 18.04.1+linuxmint15)
  - replaces: oem-config (<< 1.0)
  - provides: oem-config-frontend-18.04.1+linuxmint15

  </details>

- **oem-config-remaster**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1.4.1-2ubuntu1mint3
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Simple On-screen Keyboard
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard`
  - Install (apt): `sudo apt install onboard`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0 (>= 1.29.3), iso-codes, libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcanberra0 (>= 0.2), libdconf1 (>= 0.14.0), libgcc1 (>= 1:3.0), libglib2.0-0 (>= 2.31.8), libgtk-3-0 (>= 3.9.10), libhunspell-1.6-0, librsvg2-common, libstdc++6 (>= 5.2), libudev1 (>= 183), libx11-6, libxi6 (>= 2:1.2.99.4), libxkbfile1, libxtst6, onboard-common (<< 1.4.1-2ubuntu1mint3.1), onboard-common (>= 1.4.1-2ubuntu1mint3), python3 (<< 3.7), python3 (>= 3.6~), python3-cairo, python3-dbus, python3-gi-cairo, python3:any (>= 3.3.2-2~)
  - recommends: gir1.2-appindicator3-0.1, gir1.2-atspi-2.0, onboard-data (>= 1.4.1-2ubuntu1mint3), xdg-utils
  - suggests: mousetweaks (>= 3.3.90)

  </details>

- **onboard-common**
  - Latest version: 1.4.1-2ubuntu1mint3
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Simple On-screen Keyboard (common files)
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard-common`
  - Install (apt): `sudo apt install onboard-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: python3
  - breaks: onboard (<< 1.3.0-1~)
  - replaces: onboard (<< 1.3.0-1~)

  </details>

- **onboard-data**
  - Latest version: 1.4.1-2ubuntu1mint3
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Language model files for the word suggestion feature of Onboard
  - Homepage: https://launchpad.net/onboard
  - Install: `sudo apt-get install onboard-data`
  - Install (apt): `sudo apt install onboard-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: onboard (<< 1.4.1-2ubuntu1mint3.1), onboard (>= 1.4.1-2ubuntu1mint3)
  - breaks: onboard-prediction-data (<< 0.99.0~alpha1~tr1531)
  - replaces: onboard-prediction-data (<< 0.99.0~alpha1~tr1531)

  </details>

- **os-uninstaller**
  - Latest version: 4ppa65
  - Architectures: all
  - Suite: tricia
  - Components: import
  - Description: Operating System Uninstaller
  - Homepage: https://launchpad.net/os-uninstaller
  - Install: `sudo apt-get install os-uninstaller`
  - Install (apt): `sudo apt install os-uninstaller`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yann Mrn <yannubuntu@gmail.com>
  - Section: admin
  - Priority: optional
  - depends: boot-sav

  </details>


### <a id="packages-P"></a>P

- **parole**
  - Latest version: 1.0.4-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: media player based on GStreamer framework
  - Homepage: https://goodies.xfce.org/projects/applications/parole
  - Install: `sudo apt-get install parole`
  - Install (apt): `sudo apt install parole`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: gstreamer1.0-alsa | gstreamer1.0-audiosink, gstreamer1.0-libav, gstreamer1.0-plugins-base, gstreamer1.0-plugins-good, gstreamer1.0-x, libc6 (>= 2.4), libcairo2 (>= 1.2.4), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.88), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.0.0), libgtk-3-0 (>= 3.21.5), libnotify4 (>= 0.7.0), libtagc0 (>= 1.5), libx11-6, libxfce4ui-2-0 (>= 4.11.1), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)
  - suggests: gstreamer1.0-plugins-bad, gstreamer1.0-plugins-ugly

  </details>

- **parole-dev**
  - Latest version: 1.0.4-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: development files for Parole media player
  - Homepage: https://goodies.xfce.org/projects/applications/parole
  - Install: `sudo apt-get install parole-dev`
  - Install (apt): `sudo apt install parole-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libglib2.0-dev, libgtk-3-dev, libxfce4util-dev

  </details>

- **pia-manager**
  - Latest version: 1.0.8
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Easily configure your Private Internet Access VPN
  - Install: `sudo apt-get install pia-manager`
  - Install (apt): `sudo apt install pia-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: network-manager-openvpn, network-manager-openvpn-gnome, openvpn, python3, python3-setproctitle

  </details>

- **pix**
  - Latest version: 2.4.6+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dcraw, gsettings-desktop-schemas, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libexiv2-14 (>= 0.25), libgcc1 (>= 1:3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0 (>= 3.20.0), libjpeg8 (>= 8c), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libpng16-16 (>= 1.6.2-1), librsvg2-2 (>= 2.34.0), libstdc++6 (>= 5.2), libtiff5 (>= 4.0.3), libwebp6 (>= 0.5.1), pix-data (= 2.4.6+tricia), xapps-common (>= 1.0.0), zlib1g (>= 1:1.1.4)
  - recommends: bison, flex, gstreamer0.10-gnomevfs, gvfs-bin

  </details>

- **pix-data**
  - Latest version: 2.4.6+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2.4.6+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: pix (= 2.4.6+tricia)

  </details>

- **pix-dev**
  - Latest version: 2.4.6+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: pix (= 2.4.6+tricia)

  </details>

- **plymouth**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth`
  - Install (apt): `sudo apt install plymouth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: init-system-helpers (>= 1.18), libc6 (>= 2.14), libdrm2 (>= 2.4.17), libplymouth4 (>= 0.9.3), lsb-base (>= 3.0-6), systemd (>= 232-8~), udev (>= 232-8~)
  - recommends: plymouth-theme-ubuntu-text | plymouth-theme
  - suggests: desktop-base, plymouth-themes
  - conflicts: console-common
  - breaks: plymouth-drm (<< 0.9.0-6~), plymouth-themes (<< 0.9.0-8~)
  - replaces: plymouth-drm (<< 0.9.0-6~), plymouth-themes (<< 0.9.0-8~)

  </details>

- **plymouth-label**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer - label control
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-label`
  - Install (apt): `sudo apt install plymouth-label`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: fontconfig-config, fonts-ubuntu, libc6 (>= 2.4), libcairo2 (>= 1.14.0), libglib2.0-0 (>= 2.12.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libplymouth4 (>= 0.9.3), plymouth (= 0.9.3+mint2)
  - breaks: plymouth-themes (<< 0.9.2-5~)
  - replaces: plymouth-themes (<< 0.9.2-5~)

  </details>

- **plymouth-theme-ubuntu-logo**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer - ubuntu theme
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-ubuntu-logo`
  - Install (apt): `sudo apt install plymouth-theme-ubuntu-logo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: plymouth (= 0.9.3+mint2), plymouth-label (= 0.9.3+mint2)
  - provides: plymouth-theme

  </details>

- **plymouth-theme-ubuntu-text**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer - ubuntu text theme
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-theme-ubuntu-text`
  - Install (apt): `sudo apt install plymouth-theme-ubuntu-text`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libplymouth4 (>= 0.9.2), lsb-release, plymouth (= 0.9.3+mint2)
  - provides: plymouth-theme

  </details>

- **plymouth-themes**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer - themes
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-themes`
  - Install (apt): `sudo apt install plymouth-themes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.8), libplymouth4 (>= 0.9.2), plymouth (= 0.9.3+mint2), plymouth-label (= 0.9.3+mint2)
  - conflicts: plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner
  - breaks: plymouth-drm (<< 0.9.0-6~)
  - replaces: plymouth-drm (<< 0.9.0-6~), plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner
  - provides: plymouth-theme, plymouth-themes-all, plymouth-themes-fade-in, plymouth-themes-glow, plymouth-themes-script, plymouth-themes-solar, plymouth-themes-spinfinity, plymouth-themes-spinner

  </details>

- **plymouth-x11**
  - Latest version: 0.9.3+mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: boot animation, logger and I/O multiplexer - X11 renderer
  - Homepage: http://www.freedesktop.org/wiki/Software/Plymouth
  - Install: `sudo apt-get install plymouth-x11`
  - Install (apt): `sudo apt install plymouth-x11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: misc
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.12.0), libgtk-3-0 (>= 3.14.0), libplymouth4 (>= 0.9.3), plymouth (= 0.9.3+mint2)
  - recommends: plymouth-theme-ubuntu-logo | plymouth-theme
  - suggests: gdm

  </details>

- **python-appindicator**
  - Latest version: 12.10.1+18.04.20180322.1-1mint2
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Python bindings for libappindicator
  - Homepage: https://launchpad.net/libappindicator
  - Install: `sudo apt-get install python-appindicator`
  - Install (apt): `sudo apt install python-appindicator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Desktop Team <ubuntu-desktop@lists.ubuntu.com>
  - Section: python
  - Priority: optional
  - depends: libappindicator1 (= 12.10.1+18.04.20180322.1-1mint2), libc6 (>= 2.4), libglib2.0-0 (>= 2.35.4), libgtk2.0-0 (>= 2.12.0), python (<< 2.8), python (>= 2.7), python-gobject, python:any (>= 2.6.6-7~)
  - provides: python2.7-appindicator

  </details>

- **python-caja**
  - Latest version: 1.22.1-1+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Python binding for Caja components
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install python-caja`
  - Install (apt): `sudo apt install python-caja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: gir1.2-caja-2.0, libc6 (>= 2.4), libcaja-extension1 (>= 1.20), libglib2.0-0 (>= 2.16.0), libgtk-3-0 (>= 3.0.0), libpython2.7 (>= 2.7), python-caja-common (= 1.22.1-1+tricia)

  </details>

- **python-caja-common**
  - Latest version: 1.22.1-1+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Python binding for Caja components (common files)
  - Homepage: http://www.mate-desktop.org/
  - Install: `sudo apt-get install python-caja-common`
  - Install (apt): `sudo apt install python-caja-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian+Ubuntu MATE Packaging Team <debian-mate@lists.debian.org>
  - Section: python
  - Priority: optional
  - breaks: python-caja (<< 1.9.0)
  - replaces: python-caja (<< 1.9.0)

  </details>

- **python-nemo**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Python binding for Nemo components
  - Install: `sudo apt-get install python-nemo`
  - Install (apt): `sudo apt install python-nemo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: python
  - Priority: optional
  - depends: gir1.2-nemo-3.0 (>= 3.6), libc6 (>= 2.4), libglib2.0-0 (>= 2.16.0), libgtk-3-0 (>= 3.0.0), libnemo-extension1, libpython3.6 (>= 3.6.5)

  </details>

- **python-nemo-dbg**
  - Latest version: 4.4.0+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Debug packages for python-nemo
  - Install: `sudo apt-get install python-nemo-dbg`
  - Install (apt): `sudo apt install python-nemo-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: python-nemo (= 4.4.0+tricia)

  </details>

- **python-software-properties**
  - Latest version: 2.0.0.2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Transitional package
  - Install: `sudo apt-get install python-software-properties`
  - Install (apt): `sudo apt install python-software-properties`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintsources

  </details>

- **python-xapp**
  - Latest version: 1.8.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Python 2 XApp library
  - Install: `sudo apt-get install python-xapp`
  - Install (apt): `sudo apt install python-xapp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: python
  - Priority: optional
  - depends: python (<< 2.8), python (>= 2.7), python-psutil, python:any (>= 2.6.6-7~)

  </details>

- **python3-software-properties**
  - Latest version: 2.0.0.2
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Transitional package
  - Install: `sudo apt-get install python3-software-properties`
  - Install (apt): `sudo apt install python3-software-properties`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: mintsources

  </details>

- **python3-xapp**
  - Latest version: 1.8.1
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Python 3 XApp library
  - Install: `sudo apt-get install python3-xapp`
  - Install (apt): `sudo apt install python3-xapp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: python
  - Priority: optional
  - depends: python3-psutil, python3:any (>= 3.3.2-2~)

  </details>


### <a id="packages-R"></a>R

- **redshift**
  - Latest version: 1.11-1ubuntu1mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Adjusts the color temperature of your screen
  - Homepage: http://jonls.dk/redshift/
  - Install: `sudo apt-get install redshift`
  - Install (apt): `sudo apt install redshift`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: extra
  - depends: libc6 (>= 2.17), libdrm2 (>= 2.4.3), libglib2.0-0 (>= 2.26.0), libx11-6, libxcb-randr0 (>= 1.3), libxcb1, libxxf86vm1
  - recommends: geoclue-2.0

  </details>

- **redshift-gtk**
  - Latest version: 1.11-1ubuntu1mint1
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Adjusts the color temperature of your screen with GTK+ integration
  - Homepage: http://jonls.dk/redshift/
  - Install: `sudo apt-get install redshift-gtk`
  - Install (apt): `sudo apt install redshift-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: x11
  - Priority: extra
  - depends: gir1.2-appindicator3-0.1, python3-gi, python3-xdg, python3:any (>= 3.3.2-2~), redshift (>= 1.11-1ubuntu1mint1)
  - recommends: at-spi2-core
  - breaks: gtk-redshift (<< 1.10-2~)
  - replaces: gtk-redshift (<< 1.10-2~)

  </details>

- **rhythmbox-plugin-tray-icon**
  - Latest version: 2016.11.23.2
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: A tray icon plugin for rhythmbox music player
  - Install: `sudo apt-get install rhythmbox-plugin-tray-icon`
  - Install (apt): `sudo apt install rhythmbox-plugin-tray-icon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: universe/gnome
  - Priority: optional
  - depends: rhythmbox

  </details>

- **ristretto**
  - Latest version: 0.10.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: lightweight picture-viewer for the Xfce desktop environment
  - Homepage: https://docs.xfce.org/apps/ristretto/start
  - Install: `sudo apt-get install ristretto`
  - Install (apt): `sudo apt install ristretto`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libexif12 (>= 0.6.21-1~), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libmagic1 (>= 5.12), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.12.1)
  - recommends: tumbler

  </details>


### <a id="packages-S"></a>S

- **simple-scan**
  - Latest version: 3.28.0-0ubuntu1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Simple Scanning Utility
  - Homepage: https://launchpad.net/simple-scan
  - Install: `sudo apt-get install simple-scan`
  - Install (apt): `sudo apt install simple-scan`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, default-dbus-session-bus | dbus-session-bus, libc6 (>= 2.14), libcairo2 (>= 1.4.10), libcolord2 (>= 0.1.10), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libgusb2 (>= 0.2.2), libpackagekit-glib2-18 (>= 0.9.4), libsane1 (>= 1.0.24), libwebp6 (>= 0.5.1), libwebpmux3 (>= 0.6.1-2), xdg-utils, zlib1g (>= 1:1.1.4)

  </details>

- **skypeforlinux**
  - Latest version: 8.59.0.77
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: Skype keeps the world talking, for free.
  - Homepage: https://www.skype.com
  - Install: `sudo apt-get install skypeforlinux`
  - Install (apt): `sudo apt install skypeforlinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Skype Technologies S.A. <info@skype.net>
  - Section: non-free/net
  - Priority: extra
  - depends: apt-transport-https, gnome-keyring, libasound2 (>= 1.0.16), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.4.0), libdbus-1-3 (>= 1.6.18), libexpat1 (>= 2.0.1), libfontconfig1 (>= 2.11.0), libgcc1 (>= 1:3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.9.10), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.22), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.18), libstdc++6 (>= 4.8.1), libuuid1 (>= 2.16), libx11-6 (>= 2:1.4.99.1), libx11-xcb1, libxcb1 (>= 1.6), libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3 (>= 1:5.0), libxi6 (>= 2:1.2.99.4), libxrandr2 (>= 2:1.2.99.3), libxrender1, libxss1, libxtst6

  </details>

- **slick-greeter**
  - Latest version: 1.3.2+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.27), libcairo2 (>= 1.14.0), libcanberra0 (>= 0.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), liblightdm-gobject-1-0 (>= 1.15.2), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxext6, lightdm, python3
  - suggests: lightdm-remote-session-freerdp, lightdm-remote-session-uccsconfigure, remote-login-service
  - provides: lightdm-greeter

  </details>

- **software-properties-common**
  - Latest version: 2.0.0.2
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2.0.0.2
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 1:1.1.10.546.ge08ef575-19
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: Spotify streaming music client
  - Homepage: https://www.spotify.com
  - Install: `sudo apt-get install spotify-client`
  - Install (apt): `sudo apt install spotify-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Spotify <tux@spotify.com>
  - Section: sound
  - Priority: extra
  - depends: libasound2, libatk-bridge2.0-0, libatomic1, libcurl3-gnutls, libgconf-2-4, libglib2.0-0, libgtk2.0-0, libnss3, libssl1.1 | libssl1.0.2 | libssl1.0.1 | libssl1.0.0, libxss1, libxtst6, xdg-utils
  - recommends: libavcodec57 | libavcodec-extra57 | libavcodec-ffmpeg56 | libavcodec-ffmpeg-extra56 | libavcodec54 | libavcodec-extra-54, libavformat57 | libavformat-ffmpeg56 | libavformat54
  - suggests: libnotify4

  </details>

- **synaptic**
  - Latest version: 0.84.3linuxmint3+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Graphical package manager
  - Homepage: http://www.nongnu.org/synaptic/
  - Install: `sudo apt-get install synaptic`
  - Install (apt): `sudo apt install synaptic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Vogt <mvo@debian.org>
  - Section: admin
  - Priority: optional
  - depends: hicolor-icon-theme, libapt-inst2.0 (>= 0.8.16~exp12), libapt-pkg5.0 (>= 1.1~exp9), libc6 (>= 2.14), libept1.5.0, libgcc1 (>= 1:3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.14.0), libgtk-3-0 (>= 3.3.16), libpango-1.0-0 (>= 1.14.0), libstdc++6 (>= 5.2), libvte-2.91-0, libxapian30, libxapp1, policykit-1
  - recommends: libgtk2-perl (>= 1:1.130), rarian-compat, xdg-utils
  - suggests: apt-xapian-index, deborphan, dwww, menu, software-properties-gtk, tasksel
  - conflicts: menu (<< 2.1.11)

  </details>

- **syslinux-themes-linuxmint**
  - Latest version: 1.1.7
  - Architectures: all
  - Suite: tricia
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

- **thunar**
  - Latest version: 1.8.9-1~18.04.0
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: File Manager for Xfce
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install thunar`
  - Install (apt): `sudo apt install thunar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: desktop-file-utils, exo-utils, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.6.0), libexo-2-0 (>= 0.11.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.39.90), libgtk-3-0 (>= 3.21.5), libgudev-1.0-0 (>= 146), libice6 (>= 1:1.0.0), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libsm6, libthunarx-3-0 (>= 1.7.0), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), shared-mime-info, thunar-data (= 1.8.9-1~18.04.0)
  - recommends: default-dbus-session-bus | dbus-session-bus, gvfs, libxfce4panel-2.0-4 (>= 4.13.0), policykit-1-gnome | polkit-1-auth-agent, thunar-volman, tumbler, udisks2, xdg-user-dirs
  - suggests: thunar-archive-plugin, thunar-media-tags-plugin
  - breaks: thunar-data (<< 1.2.3-3)
  - replaces: thunar-data (<< 1.2.3-3)

  </details>

- **thunar-archive-plugin**
  - Latest version: 0.4.0-2~18.04.1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Archive plugin for Thunar file manager
  - Install: `sudo apt-get install thunar-archive-plugin`
  - Install (apt): `sudo apt install thunar-archive-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.16.2), libthunarx-3-0 (>= 1.7.0), thunar (>= 0.5.0rc2-1)
  - recommends: xarchiver (>= 0.3.9.2beta2-2) | ark | file-roller | engrampa

  </details>

- **thunar-data**
  - Latest version: 1.8.9-1~18.04.0
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Provides thunar documentation, icons and translations
  - Homepage: https://docs.xfce.org/xfce/thunar/start
  - Install: `sudo apt-get install thunar-data`
  - Install (apt): `sudo apt install thunar-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional

  </details>

- **thunar-dropbox-plugin**
  - Latest version: 0.3.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: context-menu items from dropbox for Thunar
  - Homepage: http://nullwise.com/thunar-dropbox.html
  - Install: `sudo apt-get install thunar-dropbox-plugin`
  - Install (apt): `sudo apt install thunar-dropbox-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Unit 193 <unit193@ubuntu.com>
  - Section: contrib/misc
  - Priority: optional
  - depends: libc6 (>= 2.15), libglib2.0-0 (>= 2.35.9), libthunarx-3-0 (>= 1.7.0), thunar (>= 1.2.0)
  - recommends: nautilus-dropbox

  </details>

- **thunar-media-tags-plugin**
  - Latest version: 0.3.0-2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Media tags plugin for Thunar file manager
  - Install: `sudo apt-get install thunar-media-tags-plugin`
  - Install (apt): `sudo apt install thunar-media-tags-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libexo-2-0 (>= 0.11.0), libglib2.0-0 (>= 2.31.8), libgtk-3-0 (>= 3.16.2), libtagc0 (>= 1.5), libthunarx-3-0 (>= 1.7.0), thunar (>= 1.1.0)

  </details>

- **thunar-vcs-plugin**
  - Latest version: 0.2.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: VCS plugin for Thunar file manager
  - Homepage: https://goodies.xfce.org/projects/thunar-plugins/thunar-vcs-plugin
  - Install: `sudo apt-get install thunar-vcs-plugin`
  - Install (apt): `sudo apt install thunar-vcs-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libapr1 (>= 1.2.7), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libexo-2-0 (>= 0.11.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libsvn1 (>= 1.9), libthunarx-3-0 (>= 1.7.0), libxfce4util7 (>= 4.9.0), thunar (>= 0.5.0rc2-1)

  </details>

- **thunar-volman**
  - Latest version: 0.9.5-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Thunar extension for volumes management
  - Homepage: https://goodies.xfce.org/projects/thunar-plugins/thunar-volman
  - Install: `sudo apt-get install thunar-volman`
  - Install (apt): `sudo apt install thunar-volman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: exo-utils, libc6 (>= 2.4), libexo-2-0 (>= 0.11.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libgudev-1.0-0 (>= 146), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), thunar (>= 1.1.1)

  </details>

- **timeshift**
  - Latest version: 19.08.1.2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: System restore utility
  - Homepage: https://teejeetech.in/
  - Install: `sudo apt-get install timeshift`
  - Install (apt): `sudo apt install timeshift`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Tony George <teejeetech@gmail.com>
  - Section: utils
  - Priority: extra
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libgee-0.8-2 (>= 0.8.3), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.16.2), libjson-glib-1.0-0 (>= 0.13.2), libvte-2.91-0, libxapp1, rsync
  - replaces: timeshift-btrfs

  </details>

- **tumbler**
  - Latest version: 0.2.7-2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: D-Bus thumbnailing service
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install tumbler`
  - Install (apt): `sudo apt install tumbler`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.11), libcairo2 (>= 1.2.4), libfreetype6 (>= 2.2.1), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.4.0), libjpeg8 (>= 8c), libpng16-16 (>= 1.6.2-1), libpoppler-glib8 (>= 0.18.0), libtumbler-1-0 (>= 0.2.4), tumbler-common (= 0.2.7-2~18.04)
  - suggests: tumbler-plugins-extra

  </details>

- **tumbler-common**
  - Latest version: 0.2.7-2~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: D-Bus thumbnailing service (common files)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install tumbler-common`
  - Install (apt): `sudo apt install tumbler-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - suggests: libtumbler-1-0

  </details>

- **tumbler-plugins-extra**
  - Latest version: 0.2.7-2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: D-Bus thumbnailing service (additional plugins)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install tumbler-plugins-extra`
  - Install (apt): `sudo apt install tumbler-plugins-extra`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcurl3-gnutls (>= 7.16.2), libffmpegthumbnailer4v5, libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgsf-1-114 (>= 1.14.24), libopenrawgnome7, libtumbler-1-0 (>= 0.2.4), tumbler (= 0.2.7-2~18.04)

  </details>


### <a id="packages-U"></a>U

- **ubiquity**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Linux Mint live CD installer
  - Install: `sudo apt-get install ubiquity`
  - Install (apt): `sudo apt install ubiquity`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: adduser, apt-clone, archdetect-deb, console-setup (>= 1.166ubuntu7), cryptsetup, dbus-x11, debconf (>= 0.5) | debconf-2.0, dpkg-repack, ecryptfs-utils, grub-common, iso-codes, language-selector-common (>= 0.4.16), laptop-detect, libc6 (>= 2.15), libdebconfclient0 (>= 0.145), libdebian-installer4 (>= 0.110ubuntu2), libiw30 (>= 30~pre1), libparted-fs-resize0 (>= 3.1), libparted2 (>= 3.1), lsb-release, ntfs-3g (>= 1:2011.1.15AR.4+2011.4.12-1), os-prober, passwd, policykit-1, python3-apt (>= 0.7.100.3~), python3-debconf, python3-icu (>= 1.0), python3-pam, python3:any (>= 3.3.2-2~), rdate, sbsigntool, ubiquity-artwork-18.04.1+linuxmint15, ubiquity-casper, ubiquity-frontend-18.04.1+linuxmint15, wget
  - recommends: btrfs-tools, dmraid, grub-pc | grub | grub-efi, lvm2, ubuntu-drivers-common
  - conflicts: espresso, espresso-grub, espresso-kbd-chooser, espresso-keyboard-setup, espresso-locale, espresso-timezone, espresso-utils, espresso-yaboot, partman, ubuntu-express, user-setup (<< 0.05ubuntu6)
  - replaces: espresso, espresso-grub, espresso-kbd-chooser, espresso-keyboard-setup, espresso-locale, espresso-timezone, espresso-utils, espresso-yaboot, partman, ubiquity-frontend-gtk (<< 2.3.8), ubuntu-express, user-setup (<< 0.05ubuntu6)

  </details>

- **ubiquity-frontend-debconf**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: debconf frontend for the Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-debconf`
  - Install (apt): `sudo apt install ubiquity-frontend-debconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: bogl-bterm (>= 0.1.18-2ubuntu4), debconf (>= 1.5.24ubuntu2) | cdebconf, python3:any (>= 3.3.2-2~), tasksel, ubiquity (= 18.04.1+linuxmint15)
  - provides: ubiquity-frontend-18.04.1+linuxmint15

  </details>

- **ubiquity-frontend-gtk**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: GTK+ frontend for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-gtk`
  - Install (apt): `sudo apt install ubiquity-frontend-gtk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: busybox-static | busybox, gir1.2-appindicator3-0.1, gir1.2-gtk-3.0 (>= 3.20), gir1.2-nma-1.0, gir1.2-pango-1.0, gir1.2-soup-2.4, gir1.2-timezonemap-1.0, gir1.2-vte-2.91, gir1.2-webkit2-4.0, gir1.2-xkl-1.0, iso-codes, libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.20), libido3-0.1-0 (>= 13.10.0daily13.06.19), libindicator3-7 (>= 0.4.90), libx11-6, metacity | marco | xfwm4 | matchbox-window-manager | lubuntu-default-settings | openbox | gnome-shell | budgie-core, python3-cairo, python3-dbus, python3-gi, python3-gi-cairo, python3:any (>= 3.3.2-2~), ubiquity (= 18.04.1+linuxmint15)
  - suggests: gnome-control-center | feh
  - conflicts: espresso-frontend-gtk, ubiquity (<< 2.4.3), ubuntu-express-frontend-gtk
  - replaces: espresso-frontend-gtk, ubiquity (<< 2.4.3), ubuntu-express-frontend-gtk
  - provides: indicator-renderer, ubiquity-frontend-18.04.1+linuxmint15

  </details>

- **ubiquity-frontend-kde**
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: KDE frontend for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-frontend-kde`
  - Install (apt): `sudo apt install ubiquity-frontend-kde`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - depends: kde-window-manager | kwin, python3-dbus, python3-dbus.mainloop.pyqt5, python3-pyqt5, python3-pyqt5.qtsvg, python3-pyqt5.qtwebkit, python3:any (>= 3.3.2-2~), ubiquity (= 18.04.1+linuxmint15), xauth
  - provides: ubiquity-frontend-18.04.1+linuxmint15

  </details>

- **ubiquity-slideshow-mint**
  - Latest version: 70mint40
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 18.04.1+linuxmint15
  - Architectures: all
  - Suite: tricia
  - Components: upstream
  - Description: Linux Mint artwork for Ubiquity live installer
  - Install: `sudo apt-get install ubiquity-ubuntu-artwork`
  - Install (apt): `sudo apt install ubiquity-ubuntu-artwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint Installer Team <ubuntu-installer@lists.ubuntu.com>
  - Section: admin
  - Priority: optional
  - conflicts: espresso-ubuntu-artwork, espresso-ubuntu-doc, ubiquity-ubuntu-doc, ubuntu-express-ubuntu-artwork, ubuntu-express-ubuntu-doc
  - replaces: espresso-ubuntu-artwork, espresso-ubuntu-doc, ubiquity (<< 1.13.0), ubiquity-ubuntu-doc, ubuntu-express-ubuntu-artwork, ubuntu-express-ubuntu-doc
  - provides: ubiquity-artwork-18.04.1+linuxmint15

  </details>

- **ubuntu-system-adjustments**
  - Latest version: 2021.12.17-tricia
  - Architectures: all
  - Suite: tricia
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
  - conflicts: mint-artwork-common
  - replaces: mint-artwork-common

  </details>


### <a id="packages-W"></a>W

- **wine-desktop-files**
  - Latest version: 4.0.5
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 4.0.5
  - Architectures: all
  - Suite: tricia
  - Components: main
  - Description: Microsoft Windows Compatibility Layer
  - Install: `sudo apt-get install wine-installer`
  - Install (apt): `sudo apt install wine-installer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: admin
  - Priority: optional
  - depends: gstreamer1.0-plugins-base:i386, libcapi20-3, libcapi20-3:i386, libcups2:i386, libglu1-mesa:i386 | libglu1:i386, libgpm2:i386, libgsm1, libgsm1:i386, libgssapi-krb5-2:i386, libkrb5-3:i386, libodbc1, libodbc1:i386, libosmesa6, libosmesa6:i386, libsane1, libsane1:i386, libsasl2-modules:i386, libsdl2-2.0-0, libsdl2-2.0-0:i386, libv4l-0:i386, libxcomposite1:i386, libxslt1.1:i386, wine-desktop-files, winehq-stable | winehq-devel | winehq-staging

  </details>

- **wine-stable**
  - Latest version: 4.0~bionic
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable`
  - Install (apt): `sudo apt install wine-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: libc6 (>= 2.17), wine-stable-amd64 (= 4.0~bionic), wine-stable-i386 (= 4.0~bionic)
  - preDepends: dpkg (>= 1.14.12ubuntu3)

  </details>

- **wine-stable-amd64**
  - Latest version: 4.0~bionic
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install wine-stable-amd64`
  - Install (apt): `sudo apt install wine-stable-amd64`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libasound2-plugins, libc6 (>= 2.27), libgcc1 (>= 1:3.0), libglib2.0-0 (>= 2.12.0), libgphoto2-6 (>= 2.5.10), libgphoto2-port12 (>= 2.5.10), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.4.0), liblcms2-2 (>= 2.2+git20110628), libldap-2.4-2 (>= 2.4.7), libmpg123-0 (>= 1.6.2), libncurses6 | libncurses5 | libncurses, libopenal1 (>= 1.14), libpcap0.8 (>= 0.9.8), libpulse0 (>= 0.99.1), libudev1 (>= 183), libx11-6, libxext6, libxml2 (>= 2.9.0), ocl-icd-libopencl1 (>= 1.0) | libopencl-1.1-1, ocl-icd-libopencl1 | libopencl1, zlib1g (>= 1:1.1.4)
  - preDepends: dpkg (>= 1.14.12ubuntu3)
  - recommends: libcapi20-3, libcups2, libdbus-1-3, libfontconfig1, libfreetype6, libglu1-mesa | libglu1, libgnutls30 | libgnutls28 | libgnutls26, libgsm1, libgssapi-krb5-2, libjpeg62-turbo | libjpeg8, libkrb5-3, libodbc1, libosmesa6, libpng16-16 | libpng12-0, libsane | libsane1, libsdl2-2.0-0, libtiff5, libv4l-0, libxcomposite1, libxcursor1, libxfixes3, libxi6, libxinerama1, libxrandr2, libxrender1, libxslt1.1, libxxf86vm1

  </details>

- **winehq-stable**
  - Latest version: 4.0~bionic
  - Architectures: amd64
  - Suite: tricia
  - Components: import
  - Description: WINE Is Not An Emulator - runs MS Windows programs
  - Install: `sudo apt-get install winehq-stable`
  - Install (apt): `sudo apt install winehq-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Rosanne DiMesio <dimesio@earthlink.net>, Marcus Meissner <meissner@suse.com>
  - Section: otherosfs
  - Priority: optional
  - depends: wine-stable (= 4.0~bionic)
  - conflicts: wine, wine-amd64, wine-i386
  - replaces: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64
  - provides: wine, wine-amd64, wine-i386, wine1.4, wine1.4-amd64, wine1.4-i386, wine1.5, wine1.5-amd64, wine1.5-i386, wine1.6, wine1.6-amd64, wine1.6-i386, wine1.7, wine1.7-amd64, wine1.7-i386, wine32, wine64

  </details>


### <a id="packages-X"></a>X

- **xapps-common**
  - Latest version: 1.6.10+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Common files for XApp desktop apps
  - Install: `sudo apt-get install xapps-common`
  - Install (apt): `sudo apt install xapps-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, inxi, python3, python3-gi, python3:any, xdg-utils

  </details>

- **xapps-doc**
  - Latest version: 1.6.10+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Libxapp documentation
  - Install: `sudo apt-get install xapps-doc`
  - Install (apt): `sudo apt install xapps-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: doc
  - Priority: optional
  - depends: devhelp

  </details>

- **xed**
  - Latest version: 2.4.2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Text editor
  - Install: `sudo apt-get install xed`
  - Install (apt): `sudo apt install xed`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: iso-codes, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.3), libglib2.0-0 (>= 2.39.90), libgspell-1-1 (>= 1.0.0), libgtk-3-0 (>= 3.21.5), libgtksourceview-3.0-1 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libpeas-1.0-0 (>= 1.1.0), libx11-6, libxapp1, libxml2 (>= 2.7.4), python3, python3-gi, xapps-common, xed-common (= 2.4.2+tricia), zenity

  </details>

- **xed-common**
  - Latest version: 2.4.2+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Text editor (common files)
  - Install: `sudo apt-get install xed-common`
  - Install (apt): `sudo apt install xed-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, python

  </details>

- **xed-dbg**
  - Latest version: 2.4.2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Text editor (debugging symbols)
  - Install: `sudo apt-get install xed-dbg`
  - Install (apt): `sudo apt install xed-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xed (= 2.4.2+tricia)

  </details>

- **xed-dev**
  - Latest version: 2.4.2+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Text editor (development files)
  - Install: `sudo apt-get install xed-dev`
  - Install (apt): `sudo apt install xed-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: devel
  - Priority: optional
  - depends: xed (= 2.4.2+tricia)

  </details>

- **xed-doc**
  - Latest version: 2.4.2+tricia
  - Architectures: all
  - Suite: tricia
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

- **xfce4-appfinder**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Application finder for the Xfce4 desktop environment
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfce4-appfinder`
  - Install (apt): `sudo apt install xfce4-appfinder`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libgarcon-1-0 (>= 0.3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)

  </details>

- **xfce4-battery-plugin**
  - Latest version: 1.1.3-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: battery monitor plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-battery-plugin`
  - Install (apt): `sudo apt install xfce4-battery-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.27), libglib2.0-0 (>= 2.26.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-clipman**
  - Latest version: 2:1.4.3-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: clipboard history utility
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-clipman`
  - Install (apt): `sudo apt install xfce4-clipman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libqrencode3 (>= 3.2.0), libx11-6, libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-2 (>= 4.6.0), libxtst6

  </details>

- **xfce4-clipman-plugin**
  - Latest version: 2:1.4.3-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: clipboard history plugin for Xfce panel
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-clipman-plugin`
  - Install (apt): `sudo apt install xfce4-clipman-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libqrencode3 (>= 3.2.0), libx11-6, libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-2 (>= 4.6.0), libxtst6, xfce4-clipman

  </details>

- **xfce4-cpufreq-plugin**
  - Latest version: 1.2.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: cpufreq information plugin for the Xfce4 panel
  - Install: `sudo apt-get install xfce4-cpufreq-plugin`
  - Install (apt): `sudo apt install xfce4-cpufreq-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.28.0), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-cpugraph-plugin**
  - Latest version: 1.1.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: CPU load graph plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-cpugraph-plugin`
  - Install (apt): `sudo apt install xfce4-cpugraph-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-datetime-plugin**
  - Latest version: 0.8.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: date and time plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-datetime-plugin
  - Install: `sudo apt-get install xfce4-datetime-plugin`
  - Install (apt): `sudo apt install xfce4-datetime-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-dev-tools**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Script to help building Xfce from git
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install xfce4-dev-tools`
  - Install (apt): `sudo apt install xfce4-dev-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.12.0)
  - recommends: autoconf, automake, intltool, libtool

  </details>

- **xfce4-dict**
  - Latest version: 0.8.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Dictionary plugin for Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-dict
  - Install: `sudo apt-get install xfce4-dict`
  - Install (apt): `sudo apt install xfce4-dict`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libgdk-pixbuf2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libpango-1.0-0 (>= 1.14.0), libx11-6, libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - recommends: aspell | ispell
  - provides: dict-client

  </details>

- **xfce4-diskperf-plugin**
  - Latest version: 2.6.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: disk performance display plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-diskperf-plugin`
  - Install (apt): `sudo apt install xfce4-diskperf-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-fsguard-plugin**
  - Latest version: 1.1.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: filesystem monitor plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-fsguard-plugin
  - Install: `sudo apt-get install xfce4-fsguard-plugin`
  - Install (apt): `sudo apt install xfce4-fsguard-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.0.0), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.12.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-genmon-plugin**
  - Latest version: 4.0.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Generic Monitor for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-genmon-plugin
  - Install: `sudo apt-get install xfce4-genmon-plugin`
  - Install (apt): `sudo apt install xfce4-genmon-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libpango-1.0-0 (>= 1.14.0), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-mailwatch-plugin**
  - Latest version: 1.2.0-3~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: mail watcher plugin for the Xfce4 panel
  - Homepage: http://spuriousinterrupt.org/projects/mailwatch
  - Install: `sudo apt-get install xfce4-mailwatch-plugin`
  - Install (apt): `sudo apt install xfce4-mailwatch-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.15), libexo-1-0 (>= 0.5.0), libgcrypt20 (>= 1.8.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.9), libgnutls30 (>= 3.5.6), libgtk2.0-0 (>= 2.22.0), libxfce4ui-1-0 (>= 4.8.0), libxfce4util7 (>= 4.9.0), xfce4-panel (<< 4.15), xfce4-panel (>= 4.13)

  </details>

- **xfce4-mount-plugin**
  - Latest version: 1.1.3-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: mount plugin for the Xfce4 panel
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-mount-plugin`
  - Install (apt): `sudo apt install xfce4-mount-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.21.5), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-mpc-plugin**
  - Latest version: 0.5.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xfce panel plugin which serves as client for MPD music player
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-mpc-plugin/
  - Install: `sudo apt-get install xfce4-mpc-plugin`
  - Install (apt): `sudo apt install xfce4-mpc-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.15), libglib2.0-0 (>= 2.24.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - suggests: mpd

  </details>

- **xfce4-netload-plugin**
  - Latest version: 1.3.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: network load monitor plugin for the Xfce4 panel
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-netload-plugin`
  - Install (apt): `sudo apt install xfce4-netload-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.12.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-notes**
  - Latest version: 1.8.1-3~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Notes application for the Xfce4 desktop
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-notes-plugin
  - Install: `sudo apt-get install xfce4-notes`
  - Install (apt): `sudo apt install xfce4-notes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.24.0), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libunique-1.0-0 (>= 1.0.0), libx11-6, libxfce4ui-1-0 (>= 4.8.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)

  </details>

- **xfce4-notes-plugin**
  - Latest version: 1.8.1-3~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Notes plugin for the Xfce4 desktop
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-notes-plugin
  - Install: `sudo apt-get install xfce4-notes-plugin`
  - Install (apt): `sudo apt install xfce4-notes-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.24.0), libgtk2.0-0 (>= 2.24.0), libpango-1.0-0 (>= 1.14.0), libx11-6, libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), xfce4-notes, xfce4-panel (<< 4.15), xfce4-panel (>= 4.13)

  </details>

- **xfce4-notifyd**
  - Latest version: 0.4.4-0ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: simple, visually-appealing notification daemon for Xfce
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-notifyd
  - Install: `sudo apt-get install xfce4-notifyd`
  - Install (apt): `sudo apt install xfce4-notifyd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.10.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.43.91), libgtk-3-0 (>= 3.21.5), libnotify4 (>= 0.7.0), libx11-6, libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.1), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)
  - recommends: libnotify-bin
  - provides: notification-daemon

  </details>

- **xfce4-panel**
  - Latest version: 4.14.1-0ubuntu1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: panel for Xfce4 desktop environment
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfce4-panel`
  - Install (apt): `sudo apt install xfce4-panel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: exo-utils, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libexo-2-0 (>= 0.11.0), libgarcon-1-0 (>= 0.3.0), libgarcon-gtk3-1-0 (>= 0.6.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.21.5), libgtk2.0-0 (>= 2.20.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libwnck-3-0 (>= 3.2.0), libx11-6, libxext6, libxfce4panel-2.0-4 (>= 4.13.4), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.12.1)

  </details>

- **xfce4-panel-dev**
  - Latest version: 4.14.1-0ubuntu1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Xfce4 panel development files
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfce4-panel-dev`
  - Install (apt): `sudo apt install xfce4-panel-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libglib2.0-dev (>= 2.18.0), libgtk2.0-dev (>= 2.14.0), libxfce4util-dev (>= 4.10.0), pkg-config, xfce4-panel (= 4.14.1-0ubuntu1~18.04), xfce4-panel (= 4.14.1-0ubuntu1~18.04mint1)

  </details>

- **xfce4-places-plugin**
  - Latest version: 1.8.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: quick access to folders, documents and removable media
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-places-plugin
  - Install: `sudo apt-get install xfce4-places-plugin`
  - Install (apt): `sudo apt install xfce4-places-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libexo-2-0 (>= 0.11.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libnotify4 (>= 0.7.0), libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), thunar

  </details>

- **xfce4-power-manager**
  - Latest version: 1.6.5-2~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: power manager for Xfce desktop
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-power-manager
  - Install: `sudo apt-get install xfce4-power-manager`
  - Install (apt): `sudo apt install xfce4-power-manager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.21.5), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.0), libx11-6, libxext6, libxfce4ui-2-0 (>= 4.13), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxrandr2 (>= 2:1.2.99.2), upower (>= 0.99), xfce4-power-manager-data (= 1.6.5-2~18.04), xfce4-power-manager-data (= 1.6.5-2~18.04mint1)
  - recommends: libpam-systemd, xfce4-power-manager-plugins

  </details>

- **xfce4-power-manager-data**
  - Latest version: 1.6.5-2~18.04mint1
  - Architectures: all
  - Suite: tricia
  - Components: backport, upstream
  - Description: power manager for Xfce desktop, arch-indep files
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-power-manager
  - Install: `sudo apt-get install xfce4-power-manager-data`
  - Install (apt): `sudo apt install xfce4-power-manager-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - recommends: librsvg2-common, xfce4-power-manager
  - replaces: xfce4-power-manager (<< 0.8.0~beta2-1)

  </details>

- **xfce4-power-manager-plugins**
  - Latest version: 1.6.5-2~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: power manager plugins for Xfce panel
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-power-manager
  - Install: `sudo apt-get install xfce4-power-manager-plugins`
  - Install (apt): `sudo apt install xfce4-power-manager-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.0), libx11-6, libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxrandr2 (>= 2:1.2.99.2), xfce4-power-manager (>= 0.8.0~)

  </details>

- **xfce4-pulseaudio-plugin**
  - Latest version: 0.4.2-1~18.04mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: backport, upstream
  - Description: Xfce4 panel plugin to control pulseaudio
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-pulseaudio-plugin
  - Install: `sudo apt-get install xfce4-pulseaudio-plugin`
  - Install (apt): `sudo apt install xfce4-pulseaudio-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.43.2), libgtk-3-0 (>= 3.19.12), libkeybinder-3.0-0 (>= 0.3.0), libnotify4 (>= 0.7.0), libpulse-mainloop-glib0 (>= 0.99.1), libpulse0 (>= 0.99.1), libwnck-3-0 (>= 2.91.6), libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0)
  - recommends: pavucontrol, pulseaudio

  </details>

- **xfce4-screensaver**
  - Latest version: 0.1.8-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: screen saver and locker that is integrated with the xfce4 desktop
  - Homepage: https://docs.xfce.org/apps/screensaver/start
  - Install: `sudo apt-get install xfce4-screensaver`
  - Install (apt): `sudo apt install xfce4-screensaver`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.14), libcairo2 (>= 1.10.0), libdbus-1-3 (>= 1.9.14), libdbus-glib-1-2 (>= 0.78), libgarcon-1-0 (>= 0.1.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libgl1, libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libpam0g (>= 0.99.7.1), libpango-1.0-0 (>= 1.18.0), libsystemd0, libwnck-3-0 (>= 2.91.6), libx11-6, libxext6, libxfce4ui-2-0 (>= 4.13.0), libxfconf-0-3 (>= 4.6.0), libxklavier16 (>= 5.0), libxss1
  - recommends: gir1.2-glib-2.0, gir1.2-gtk-3.0, python3, python3-gi, xfconf

  </details>

- **xfce4-screenshooter**
  - Latest version: 1.9.6-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: screenshots utility for Xfce
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-screenshooter
  - Install: `sudo apt-get install xfce4-screenshooter`
  - Install (apt): `sudo apt install xfce4-screenshooter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libcairo2 (>= 1.10.0), libexo-2-0 (>= 0.11.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.4), libsoup2.4-1 (>= 2.41.90), libx11-6, libxext6, libxfce4ui-2-0 (>= 4.13.5), libxfce4util7 (>= 4.9.0), libxfixes3, libxml2 (>= 2.7.4)
  - recommends: libxfce4panel-2.0-4 (>= 4.13.0)

  </details>

- **xfce4-sensors-plugin**
  - Latest version: 1.3.0-2build1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: hardware sensors plugin for the Xfce4 panel
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-sensors-plugin`
  - Install (apt): `sudo apt install xfce4-sensors-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.7.10), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libsensors4 (>= 1:3.0.0), libx11-6, libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxnvctrl0
  - recommends: hddtemp, lm-sensors
  - suggests: xsensors

  </details>

- **xfce4-session**
  - Latest version: 4.14.0-0ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xfce4 Session Manager
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfce4-session`
  - Install (apt): `sudo apt install xfce4-session`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libpolkit-gobject-1-0 (>= 0.101), libsm6, libwnck-3-0 (>= 2.91.6), libx11-6, libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), xfce4-settings (>= 4.10.0), xfconf
  - recommends: dbus-x11, libpam-systemd, light-locker | xfce4-screensaver | xscreensaver, systemd-sysv | systemd-shim, upower, x11-xserver-utils, xfdesktop4, xfwm4
  - suggests: fortunes-mod, sudo
  - breaks: xfce4-utils
  - replaces: xfce4-utils
  - provides: x-session-manager

  </details>

- **xfce4-settings**
  - Latest version: 4.14.1-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: graphical application for managing Xfce settings
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install xfce4-settings`
  - Install (apt): `sudo apt install xfce4-settings`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcolord2 (>= 0.1.29), libexo-2-0 (>= 0.11.0), libfontconfig1 (>= 2.12), libgarcon-1-0 (>= 0.1.2), libgarcon-common (>= 0.2.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libupower-glib3 (>= 0.99.0), libx11-6, libxcursor1 (>> 1.1.2), libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxi6 (>= 2:1.2.0), libxklavier16 (>= 5.0), libxrandr2 (>= 2:1.2.99.3), xfconf
  - recommends: colord, elementary-xfce-icon-theme, greybird-gtk-theme, x11-utils, xiccd

  </details>

- **xfce4-smartbookmark-plugin**
  - Latest version: 0.5.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: search the web via the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-smartbookmark-plugin
  - Install: `sudo apt-get install xfce4-smartbookmark-plugin`
  - Install (apt): `sudo apt install xfce4-smartbookmark-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.12.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-systemload-plugin**
  - Latest version: 1:1.2.3-1ubuntu1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: system load monitor plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-systemload-plugin
  - Install: `sudo apt-get install xfce4-systemload-plugin`
  - Install (apt): `sudo apt install xfce4-systemload-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.13.7), libupower-glib3 (>= 0.99.0), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - recommends: upower (>= 0.99)

  </details>

- **xfce4-taskmanager**
  - Latest version: 1.2.2-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: process manager for the Xfce4 Desktop Environment
  - Homepage: https://goodies.xfce.org/projects/applications/xfce4-taskmanager
  - Install: `sudo apt-get install xfce4-taskmanager`
  - Install (apt): `sudo apt install xfce4-taskmanager`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.7), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.0.0), libwnck-3-0 (>= 2.91.6), libx11-6, libxmu6

  </details>

- **xfce4-time-out-plugin**
  - Latest version: 1.0.2-0ubuntu2~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: time out plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-time-out-plugin
  - Install: `sudo apt-get install xfce4-time-out-plugin`
  - Install (apt): `sudo apt install xfce4-time-out-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Xubuntu Developers <xubuntu-devel@lists.ubuntu.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.18.0), libgtk2.0-0 (>= 2.12.0), libxfce4ui-1-0 (>= 4.8.0), libxfce4util7 (>= 4.9.0), xfce4-panel (<< 4.15), xfce4-panel (>= 4.13)

  </details>

- **xfce4-timer-plugin**
  - Latest version: 1.7.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: timer plugin for Xfce panel
  - Install: `sudo apt-get install xfce4-timer-plugin`
  - Install (apt): `sudo apt install xfce4-timer-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.21.5), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-verve-plugin**
  - Latest version: 2.0.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Verve (command line) plugin for Xfce panel
  - Install: `sudo apt-get install xfce4-verve-plugin`
  - Install (apt): `sudo apt install xfce4-verve-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: exo-utils, libc6 (>= 2.4), libglib2.0-0 (>= 2.31.8), libgtk-3-0 (>= 3.0.0), libpcre3, libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-wavelan-plugin**
  - Latest version: 0.6.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: wavelan status plugin for the Xfce4 panel
  - Homepage: http://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-wavelan-plugin`
  - Install (apt): `sudo apt install xfce4-wavelan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.18.0), libgtk-3-0 (>= 3.16.2), libxfce4panel-2.0-4 (>= 4.11.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)

  </details>

- **xfce4-weather-plugin**
  - Latest version: 0.10.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: weather information plugin for the Xfce4 panel
  - Homepage: https://goodies.xfce.org/
  - Install: `sudo apt-get install xfce4-weather-plugin`
  - Install (apt): `sudo apt install xfce4-weather-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.42), libgtk-3-0 (>= 3.22), libpango-1.0-0 (>= 1.14.0), libsoup2.4-1 (>= 2.41.90), libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0), libxml2 (>= 2.7.4)

  </details>

- **xfce4-whiskermenu-plugin**
  - Latest version: 2.3.3-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Alternate menu plugin for the Xfce desktop environment
  - Homepage: https://goodies.xfce.org/projects/panel-plugins/xfce4-whiskermenu-plugin
  - Install: `sudo apt-get install xfce4-whiskermenu-plugin`
  - Install (apt): `sudo apt install xfce4-whiskermenu-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.14), libcairo2 (>= 1.2.4), libexo-2-0 (>= 0.11.0), libgarcon-1-0 (>= 0.6.0), libgcc1 (>= 1:3.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.35.9), libgtk-3-0 (>= 3.21.5), libstdc++6 (>= 5.2), libxfce4panel-2.0-4 (>= 4.13.0), libxfce4ui-2-0 (>= 4.11.0), libxfce4util7 (>= 4.9.0)
  - suggests: mugshot

  </details>

- **xfce4-xapp-status-plugin**
  - Latest version: 0.1.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: xapp status icon plugin for the Xfce4 panel
  - Install: `sudo apt-get install xfce4-xapp-status-plugin`
  - Install (apt): `sudo apt install xfce4-xapp-status-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: x11
  - Priority: optional
  - depends: libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.19.12), libxapp1 (>= 1.6.0), libxfce4panel-2.0-4 (>= 4.13.0)

  </details>

- **xfce4-xapp-status-plugin-dbg**
  - Latest version: 0.1.4+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: debug symbols for xfce4-xapp-status-plugin.
  - Install: `sudo apt-get install xfce4-xapp-status-plugin-dbg`
  - Install (apt): `sudo apt install xfce4-xapp-status-plugin-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Clement Lefebvre <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xfce4-xapp-status-plugin (= 0.1.4+tricia)

  </details>

- **xfconf**
  - Latest version: 4.14.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: utilities for managing settings in Xfce
  - Homepage: https://www.xfce.org
  - Install: `sudo apt-get install xfconf`
  - Install (apt): `sudo apt install xfconf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: default-dbus-session-bus | dbus-session-bus, libc6 (>= 2.4), libglib2.0-0 (>= 2.37.3), libxfce4util7 (>= 4.9.0)
  - recommends: libxfconf-0-3 (>= 4.6.0)

  </details>

- **xfdesktop4**
  - Latest version: 4.14.1-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Xfce desktop background, icons and root menu manager
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfdesktop4`
  - Install (apt): `sudo apt install xfdesktop4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: exo-utils, libc6 (>= 2.14), libcairo2 (>= 1.10.0), libexo-2-0 (>= 0.11.0), libgarcon-1-0 (>= 0.3.0), libgarcon-gtk3-1-0 (>= 0.6.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.22), libnotify4 (>= 0.7.0), libpango-1.0-0 (>= 1.20.0), libthunarx-3-0 (>= 1.7.0), libwnck-3-0 (>= 3.14), libx11-6, libxfce4ui-2-0 (>= 4.13.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.12.1), xfdesktop4-data (= 4.14.1-1~18.04)
  - recommends: default-dbus-session-bus | dbus-session-bus, librsvg2-common, tumbler, xdg-user-dirs
  - replaces: xfdesktop4-data (<< 4.5.92)

  </details>

- **xfdesktop4-data**
  - Latest version: 4.14.1-1~18.04
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Xfce desktop background, icons and root menu (common files)
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfdesktop4-data`
  - Install (apt): `sudo apt install xfdesktop4-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional

  </details>

- **xfwm4**
  - Latest version: 4.14.0-1~18.04
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: window manager of the Xfce project
  - Homepage: https://www.xfce.org/
  - Install: `sudo apt-get install xfwm4`
  - Install (apt): `sudo apt install xfwm4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Xfce Maintainers <debian-xfce@lists.debian.org>
  - Section: xfce
  - Priority: optional
  - depends: libc6 (>= 2.4), libcairo2 (>= 1.2.4), libepoxy0 (>= 1.0), libgdk-pixbuf2.0-0 (>= 2.25.2), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libstartup-notification0 (>= 0.7), libwnck-3-0 (>= 2.91.6), libx11-6 (>= 2:1.2.99.901), libxcomposite1 (>= 1:0.3-1), libxdamage1 (>= 1:1.1), libxext6 (>= 2:1.3.0), libxfce4ui-2-0 (>= 4.12.0), libxfce4util7 (>= 4.9.0), libxfconf-0-3 (>= 4.6.0), libxfixes3 (>= 1:4.0.1), libxi6 (>= 2:1.2.99.4), libxinerama1, libxpresent1, libxrandr2, libxrender1
  - recommends: librsvg2-common
  - suggests: xfce4
  - provides: x-window-manager

  </details>

- **xiccd**
  - Latest version: 0.3.0-0
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: X color management daemon
  - Homepage: https://github.com/agalakhov/xiccd
  - Install: `sudo apt-get install xiccd`
  - Install (apt): `sudo apt install xiccd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Faidon Liambotis <paravoid@debian.org>
  - Section: x11
  - Priority: optional
  - depends: colord, libc6 (>= 2.4), libcolord2 (>= 1.0.2), libglib2.0-0 (>= 2.37.3), libx11-6, libxrandr2 (>= 2:1.2.99.3)

  </details>

- **xplayer**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Media player
  - Install: `sudo apt-get install xplayer`
  - Install (apt): `sudo apt install xplayer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: gnome-icon-theme (>= 2.15.90), gnome-icon-theme-symbolic, gsettings-desktop-schemas, gstreamer1.0-clutter-3.0, gstreamer1.0-plugins-base, gstreamer1.0-plugins-good, gstreamer1.0-x, libc6 (>= 2.4), libcairo2 (>= 1.2.4), libclutter-gtk-1.0-0 (>= 0.91.8), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.33.0), libgstreamer-plugins-base1.0-0 (>= 1.0.0), libgstreamer1.0-0 (>= 1.4.0), libgtk-3-0 (>= 3.5.2), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libx11-6, libxplayer-plparser18 (>= 1.0.0), libxplayer0 (<< 2.3), libxplayer0 (>= 2.2.5+tricia), python:any (>= 2.6.6-7~), xplayer-common (= 2.2.5+tricia), xplayer-plugins
  - recommends: gstreamer1.0-pulseaudio
  - suggests: gnome-codec-install, gstreamer1.0-libav, gstreamer1.0-plugins-bad, gstreamer1.0-plugins-ugly
  - breaks: xplayer-common (<< 2.2.5)
  - replaces: xplayer-common (<< 2.2.5)

  </details>

- **xplayer-common**
  - Latest version: 2.2.5+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Data files for the Xplayer media player
  - Install: `sudo apt-get install xplayer-common`
  - Install (apt): `sudo apt install xplayer-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend

  </details>

- **xplayer-dbg**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Debugging symbols for the Xplayer media player
  - Install: `sudo apt-get install xplayer-dbg`
  - Install (apt): `sudo apt install xplayer-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: debug
  - Priority: extra
  - depends: xplayer (= 2.2.5+tricia)

  </details>

- **xplayer-plugins**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Plugins for the Xplayer media player
  - Install: `sudo apt-get install xplayer-plugins`
  - Install (apt): `sudo apt install xplayer-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: gir1.2-gdkpixbuf-2.0, gir1.2-glib-2.0, gir1.2-gtk-3.0, gir1.2-pango-1.0, gir1.2-peas-1.0, gir1.2-xplayer-1.0 (= 2.2.5+tricia), libc6 (>= 2.7), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.5.2), liblirc-client0, libpeas-1.0-0, libxml2 (>= 2.7.4), libxplayer0 (<< 2.3), libxplayer0 (>= 2.2.5+tricia), libzeitgeist-2.0-0 (>= 0.3.2), python:any (>= 2.6.6-7~), python2.7, python3, python3-gi, xplayer (= 2.2.5+tricia)
  - suggests: gromit

  </details>

- **xplayer-plugins-extra**
  - Latest version: 2.2.5+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Extra plugins for the Xplayer media player
  - Install: `sudo apt-get install xplayer-plugins-extra`
  - Install (apt): `sudo apt install xplayer-plugins-extra`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: video
  - Priority: optional
  - depends: libc6 (>= 2.4), libxplayer0 (<< 2.3), libxplayer0 (>= 2.2.5+tricia), xplayer (= 2.2.5+tricia)
  - recommends: gromit

  </details>

- **xreader**
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, libatk1.0-0 (>= 1.12.4), libc6 (>= 2.4), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.37.3), libgtk-3-0 (>= 3.21.5), libice6 (>= 1:1.0.0), libpango-1.0-0 (>= 1.14.0), libsm6, libx11-6, libxapp1, libxreaderdocument3 (= 2.4.4+tricia), libxreaderview3 (= 2.4.4+tricia), shared-mime-info, xreader-common (>= 2.4.4+tricia)
  - recommends: dbus-x11, gvfs
  - suggests: poppler-data, unrar
  - provides: djvu-viewer, pdf-viewer, postscript-viewer

  </details>

- **xreader-common**
  - Latest version: 2.4.4+tricia
  - Architectures: all
  - Suite: tricia
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
  - Latest version: 2.4.4+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: xreader (= 2.4.4+tricia)

  </details>

- **xviewer**
  - Latest version: 2.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
  - Components: backport
  - Description: Image viewer
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install xviewer`
  - Install (apt): `sudo apt install xviewer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtk-3.0, gir1.2-peas-1.0, gsettings-desktop-schemas (>= 2.91.92), libatk1.0-0 (>= 1.32.0-2~), libc6 (>= 2.14), libcairo2 (>= 1.10.0), libcinnamon-desktop4, libexempi3 (>= 2.4.0), libexif12 (>= 0.6.21-1~), libgdk-pixbuf2.0-0 (>= 2.22.0), libgirepository-1.0-1 (>= 0.9.3), libglib2.0-0 (>= 2.38.0), libgtk-3-0 (>= 3.13.7), libjpeg8 (>= 8c), liblcms2-2 (>= 2.2+git20110628), libpeas-1.0-0 (>= 1.0.0), librsvg2-2 (>= 2.36.2), libx11-6, shared-mime-info (>= 0.20), xapps-common (>= 1.0.0), zlib1g (>= 1:1.1.4)
  - recommends: librsvg2-common, yelp

  </details>

- **xviewer-dbg**
  - Latest version: 2.4.3+tricia
  - Architectures: amd64
  - Suite: tricia
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
  - depends: xviewer (= 2.4.3+tricia)

  </details>

- **xviewer-dev**
  - Latest version: 2.4.3+tricia
  - Architectures: all
  - Suite: tricia
  - Components: backport
  - Description: Development files for xviewer
  - Homepage: https://github.com/linuxmint/xviewer
  - Install: `sudo apt-get install xviewer-dev`
  - Install (apt): `sudo apt install xviewer-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Mint <root@linuxmint.com>
  - Section: gnome
  - Priority: optional
  - depends: libgtk-3-dev, xviewer (>= 2.4.3+tricia)

  </details>

- **xviewer-plugins**
  - Latest version: 1.2.0+tara
  - Architectures: amd64
  - Suite: tricia
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
  - depends: dconf-gsettings-backend | gsettings-backend, gir1.2-gtk-3.0, gsettings-desktop-schemas, libc6 (>= 2.4), libcairo2 (>= 1.2.4), libchamplain-0.12-0 (>= 0.11.0), libchamplain-gtk-0.12-0 (>= 0.11.0), libclutter-1.0-0 (>= 1.10.0), libclutter-gtk-1.0-0 (>= 1.1.2), libexif12 (>= 0.6.21-1~), libgdata22 (>= 0.15.0), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.41.1), libgtk-3-0 (>= 3.3.16), libpeas-1.0-0 (>= 1.0.0), python3-gi, python3:any (>= 3.3.2-2~), python3.6, xviewer
  - suggests: postr

  </details>


### <a id="packages-Y"></a>Y

- **yelp**
  - Latest version: 3.26.0-1ubuntu2mint1
  - Architectures: amd64
  - Suite: tricia
  - Components: upstream
  - Description: Help browser for GNOME
  - Homepage: https://wiki.gnome.org/Apps/Yelp
  - Install: `sudo apt-get install yelp`
  - Install (apt): `sudo apt install yelp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: gnome
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, libc6 (>= 2.4), libglib2.0-0 (>= 2.38.0), libgtk-3-0 (>= 3.13.3), libwebkit2gtk-4.0-37 (>= 2.5.3), libyelp0 (= 3.26.0-1ubuntu2mint1), man-db (>= 2.5.1-1), yelp-xsl (>= 3.12.0)

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Linux Mint main repository; base Ubuntu repos are inherited.
- Repo tags: linuxmint, ubuntu-derivative, apt
- Key tags: linuxmint, apt
