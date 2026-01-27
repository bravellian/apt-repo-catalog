# Pop!_OS proprietary - 22.04

## Repository
- Repository ID: `popos-proprietary-22-04`
- Base URL: `http://apt.pop-os.org/proprietary`
- Host: `apt.pop-os.org`

## Upstream documentation
- Documentation URL: https://support.system76.com/articles/apt-repository/
- Key documentation URL: https://support.system76.com/articles/apt-repository/

## Suites
- Suite: `bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-18.04
- Suite: `disco`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `groovy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.10
- Suite: `hirsute`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.04
- Suite: `impish`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-21.10
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: popos-22.04, ubuntu-22.04
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: popos-24.04, ubuntu-24.04

## OS hints
- Ubuntu, Pop!_OS

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `popos-lookup-204dd8aec33a7aff`
- Expected fingerprints:
  - 63C46DF0140D738961429F4E204DD8AEC33A7AFF
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x204DD8AEC33A7AFF

## Install instructions

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary bionic main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary bionic main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-bionic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary disco main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary disco main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary eoan main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary eoan main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary focal main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary focal main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-focal.list >/dev/null
sudo apt-get update
```

### Suite: groovy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary groovy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-groovy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary groovy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-groovy.list >/dev/null
sudo apt-get update
```

### Suite: hirsute

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary hirsute main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-hirsute.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary hirsute main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-hirsute.list >/dev/null
sudo apt-get update
```

### Suite: impish

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary impish main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-impish.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary impish main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-impish.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary jammy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary jammy main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-jammy.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary noble main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/proprietary noble main" | sudo tee /etc/apt/sources.list.d/popos-proprietary-22-04-noble.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (396)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-F">F</a> <a href="#packages-G">G</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-V">V</a> <a href="#packages-W">W</a>
</div>


### <a id="packages-A"></a>A

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: bionic
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

- **atom**
  - Latest version: 1.42.0
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: A hackable text editor for the 21st Century.
  - Install: `sudo apt-get install atom`
  - Install (apt): `sudo apt install atom`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub <atom@github.com>
  - Section: devel
  - Priority: optional
  - depends: git, gvfs-bin, libasound2 (>= 1.0.16), libcurl3 | libcurl4, libgconf-2-4 (>= 3.2.5) | libgconf2-4, libgcrypt11 | libgcrypt20, libgtk-3-0 (>= 3.9.10), libnotify4, libnss3 (>= 2:3.22), libx11-xcb1, libxkbfile1, libxss1, libxtst6, policykit-1, python, xdg-utils
  - recommends: lsb-release
  - suggests: gir1.2-gnomekeyring-1.0, libsecret-1-0

  </details>

- **atom**
  - Latest version: 1.45.0
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: A hackable text editor for the 21st Century.
  - Install: `sudo apt-get install atom`
  - Install (apt): `sudo apt install atom`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub <atom@github.com>
  - Section: devel
  - Priority: optional
  - depends: git, gvfs-bin, libasound2 (>= 1.0.16), libcurl3 | libcurl4, libgconf-2-4 (>= 3.2.5) | libgconf2-4, libgcrypt11 | libgcrypt20, libgtk-3-0 (>= 3.9.10), libnotify4, libnss3 (>= 2:3.22), libx11-xcb1, libxkbfile1, libxss1, libxtst6, policykit-1, python, xdg-utils
  - recommends: lsb-release
  - suggests: gir1.2-gnomekeyring-1.0, libsecret-1-0

  </details>

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: focal
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

- **atom**
  - Latest version: 1.53.0
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: A hackable text editor for the 21st Century.
  - Install: `sudo apt-get install atom`
  - Install (apt): `sudo apt install atom`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub <atom@github.com>
  - Section: devel
  - Priority: optional
  - depends: git, libcurl3 | libcurl4, libgconf-2-4 (>= 3.2.5), libgcrypt20, libglib2.0-bin | kde-cli-tools | kde-runtime, libgtk-3-0 (>= 3.9.10), libnotify4, libnss3 (>= 2:3.22), libx11-xcb1, libxkbfile1, libxss1, libxtst6, xdg-utils
  - recommends: gnome-keyring, libasound2 (>= 1.0.16), libsecret-1-0, policykit-1
  - suggests: lsb-release

  </details>

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: hirsute
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

- **atom**
  - Latest version: 1.58.0
  - Architectures: amd64
  - Suite: impish
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


### <a id="packages-B"></a>B

- **bazel**
  - Latest version: 0.15.0~0pop1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Build and test tool similar to Make, Maven, and Gradle.
  - Install: `sudo apt-get install bazel`
  - Install (apt): `sudo apt install bazel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, openjdk-8-jdk, python, unzip, zip

  </details>

- **bazel**
  - Latest version: 0.21.0~0pop2
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Build and test tool similar to Make, Maven, and Gradle.
  - Install: `sudo apt-get install bazel`
  - Install (apt): `sudo apt install bazel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, openjdk-13-jdk, python, unzip, zip

  </details>

- **bazel**
  - Latest version: 0.21.0~0pop2
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: Build and test tool similar to Make, Maven, and Gradle.
  - Install: `sudo apt-get install bazel`
  - Install (apt): `sudo apt install bazel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, openjdk-13-jdk, python, unzip, zip

  </details>


### <a id="packages-C"></a>C

- **cmake**
  - Latest version: 3.13.4-1~ubuntu18.04~ppa0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: cross-platform, open-source make system
  - Homepage: https://cmake.org/
  - Install: `sudo apt-get install cmake`
  - Install (apt): `sudo apt install cmake`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: cmake-data (= 3.13.4-1~ubuntu18.04~ppa0), libarchive13 (>= 3.0.4), libc6 (>= 2.17), libcurl4 (>= 7.16.2), libexpat1 (>= 2.0.1), libgcc1 (>= 1:3.0), libjsoncpp1 (>= 1.7.4), librhash0 (>= 1.2.6), libstdc++6 (>= 6), libuv1 (>= 1.11.0), procps, zlib1g (>= 1:1.2.3.3)
  - recommends: gcc, make
  - suggests: cmake-doc, ninja-build

  </details>

- **cmake-curses-gui**
  - Latest version: 3.13.4-1~ubuntu18.04~ppa0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: curses based user interface for CMake (ccmake)
  - Homepage: https://cmake.org/
  - Install: `sudo apt-get install cmake-curses-gui`
  - Install (apt): `sudo apt install cmake-curses-gui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: cmake (= 3.13.4-1~ubuntu18.04~ppa0), libarchive13 (>= 3.0.4), libc6 (>= 2.17), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libjsoncpp1 (>= 1.7.4), libncurses5 (>= 6), librhash0 (>= 1.2.6), libstdc++6 (>= 5.2), libtinfo5 (>= 6), libuv1 (>= 1.4.2), zlib1g (>= 1:1.2.3.3)

  </details>

- **cmake-data**
  - Latest version: 3.13.4-1~ubuntu18.04~ppa0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: CMake data files (modules, templates and documentation)
  - Homepage: https://cmake.org/
  - Install: `sudo apt-get install cmake-data`
  - Install (apt): `sudo apt install cmake-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional

  </details>

- **cmake-doc**
  - Latest version: 3.13.4-1~ubuntu18.04~ppa0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: extended documentation in various formats for CMake
  - Homepage: https://cmake.org/
  - Install: `sudo apt-get install cmake-doc`
  - Install (apt): `sudo apt install cmake-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: doc
  - Priority: optional
  - depends: cmake-data (= 3.13.4-1~ubuntu18.04~ppa0), libjs-sphinxdoc (>= 1.0)
  - recommends: doc-base
  - suggests: cmake

  </details>

- **cmake-qt-gui**
  - Latest version: 3.13.4-1~ubuntu18.04~ppa0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Qt based user interface for CMake (cmake-gui)
  - Homepage: https://cmake.org/
  - Install: `sudo apt-get install cmake-qt-gui`
  - Install (apt): `sudo apt install cmake-qt-gui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: optional
  - depends: cmake (= 3.13.4-1~ubuntu18.04~ppa0), libarchive13 (>= 3.0.4), libc6 (>= 2.17), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libjsoncpp1 (>= 1.7.4), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.0.2), libqt5widgets5 (>= 5.2.0~alpha1), librhash0 (>= 1.2.6), libstdc++6 (>= 5.2), libuv1 (>= 1.4.2), zlib1g (>= 1:1.2.3.3)
  - provides: cmake-gui

  </details>

- **code**
  - Latest version: 1.60.1-1631294805
  - Architectures: amd64
  - Suite: bionic
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
  - depends: apt, gnupg, libgbm1, libgtk-3-0 (>= 3.10.0), libnss3 (>= 2:3.26), libsecret-1-0, libxkbfile1, libxss1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>

- **code**
  - Latest version: 1.41.1-1576681836
  - Architectures: amd64
  - Suite: disco
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
  - depends: apt, gnupg, libgtk-3-0 (>= 3.10.0), libnotify4, libnss3 (>= 2:3.26), libsecret-1-0, libxkbfile1, libxss1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>

- **code**
  - Latest version: 1.41.1-1576681836
  - Architectures: amd64
  - Suite: eoan
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
  - depends: apt, gnupg, libgtk-3-0 (>= 3.10.0), libnotify4, libnss3 (>= 2:3.26), libsecret-1-0, libxkbfile1, libxss1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>

- **code**
  - Latest version: 1.100.0-1746623151
  - Architectures: amd64
  - Suite: focal
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

- **code**
  - Latest version: 1.58.2-1626302803
  - Architectures: amd64
  - Suite: groovy
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
  - depends: apt, gnupg, libgbm1, libgtk-3-0 (>= 3.10.0), libnss3 (>= 2:3.26), libsecret-1-0, libxkbfile1, libxss1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>

- **code**
  - Latest version: 1.60.1-1631294805
  - Architectures: amd64
  - Suite: hirsute
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
  - depends: apt, gnupg, libgbm1, libgtk-3-0 (>= 3.10.0), libnss3 (>= 2:3.26), libsecret-1-0, libxkbfile1, libxss1
  - conflicts: visual-studio-code
  - replaces: visual-studio-code
  - provides: visual-studio-code

  </details>

- **code**
  - Latest version: 1.100.0-1746623151
  - Architectures: amd64
  - Suite: impish
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
  - Latest version: 0.0.42
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Chat for Communities and Friends
  - Homepage: https://discord.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Discord Maintainer Team <native-team@discord.com>
  - Section: net
  - Priority: optional
  - depends: libasound2, libatomic1, libc6, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6
  - recommends: libappindicator1 | libayatana-appindicator1

  </details>

- **discord**
  - Latest version: 0.0.9
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: All-in-one voice and text chat for gamers
  - Homepage: https://discordapp.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chris Marsh <chris@discordapp.com>
  - Section: net
  - Priority: optional
  - depends: libappindicator1, libasound2, libatomic1, libc++1, libc6, libgconf-2-4, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6

  </details>

- **discord**
  - Latest version: 0.0.9
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: All-in-one voice and text chat for gamers
  - Homepage: https://discordapp.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chris Marsh <chris@discordapp.com>
  - Section: net
  - Priority: optional
  - depends: libappindicator1, libasound2, libatomic1, libc++1, libc6, libgconf-2-4, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6

  </details>

- **discord**
  - Latest version: 0.0.121
  - Architectures: amd64
  - Suite: focal
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

- **discord**
  - Latest version: 0.0.15
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: Chat for Communities and Friends
  - Homepage: https://discord.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Discord Maintainer Team <native-team@discord.com>
  - Section: net
  - Priority: optional
  - depends: libappindicator1, libasound2, libatomic1, libc++1, libc6, libgconf-2-4, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6

  </details>

- **discord**
  - Latest version: 0.0.42
  - Architectures: amd64
  - Suite: hirsute
  - Components: main
  - Description: Chat for Communities and Friends
  - Homepage: https://discord.com
  - Install: `sudo apt-get install discord`
  - Install (apt): `sudo apt install discord`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Discord Maintainer Team <native-team@discord.com>
  - Section: net
  - Priority: optional
  - depends: libasound2, libatomic1, libc6, libnotify4, libnspr4, libnss3, libstdc++6, libxss1, libxtst6
  - recommends: libappindicator1 | libayatana-appindicator1

  </details>

- **discord**
  - Latest version: 0.0.121
  - Architectures: amd64
  - Suite: impish
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


### <a id="packages-F"></a>F

- **freecad**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install freecad`
  - Install (apt): `sudo apt install freecad`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional
  - depends: freecad-python3 | freecad-python2
  - recommends: calculix-ccx, graphviz
  - suggests: povray
  - breaks: freecad (<< 1:0.18~)
  - replaces: freecad (<< 1:0.18~)

  </details>

- **freecad-common**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - common files
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install freecad-common`
  - Install (apt): `sudo apt install freecad-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional
  - breaks: freecad (<< 1:0.18~), freecad-doc (<< 1:0.18~), freecad-python2 (<< 1:0.18~), freecad-runtime (<< 1:0.19~)
  - replaces: freecad (<< 1:0.18~), freecad-doc (<< 1:0.18~), freecad-python2 (<< 1:0.18~), freecad-runtime (<< 1:0.19~)

  </details>

- **freecad-doc**
  - Latest version: 1:0.17.13541-1ppa10~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: FreeCAD documentation
  - Homepage: http://www.freecadweb.org/
  - Install: `sudo apt-get install freecad-doc`
  - Install (apt): `sudo apt install freecad-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Normand Chamberland <gemnoc@gmail.com>
  - Section: doc
  - Priority: extra
  - depends: qt5-assistant

  </details>

- **freecad-python2**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 2 binaries
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install freecad-python2`
  - Install (apt): `sudo apt install freecad-python2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional
  - depends: freecad-common, libc6 (>= 2.14), libfreecad-python2-0.19 (<< 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1+1~), libfreecad-python2-0.19 (>= 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1), libgcc1 (>= 1:3.0), libpython2.7 (>= 2.7), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5widgets5 (>= 5.0.2), libstdc++6 (>= 5.2), python-matplotlib, python-pivy, python-ply, python-pyside2.qtcore, python-pyside2.qtgui, python-pyside2.qtsvg, python-pyside2.qtuitools, python-pyside2.qtwidgets, python-pyside2.qtxml, python-yaml
  - breaks: libfreecad-python2-0.17
  - replaces: libfreecad-python2-0.17

  </details>

- **freecad-python3**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 3 binaries
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install freecad-python3`
  - Install (apt): `sudo apt install freecad-python3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional
  - depends: freecad-common, libc6 (>= 2.14), libfreecad-python3-0.19 (<< 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1+1~), libfreecad-python3-0.19 (>= 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1), libgcc1 (>= 1:3.0), libpython3.6 (>= 3.6.5), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5widgets5 (>= 5.0.2), libstdc++6 (>= 5.2), python3-matplotlib, python3-pivy, python3-ply, python3-pyside2.qtcore, python3-pyside2.qtgui, python3-pyside2.qtsvg, python3-pyside2.qtuitools, python3-pyside2.qtwidgets, python3-pyside2.qtxml, python3-yaml
  - breaks: libfreecad-python2-0.17
  - replaces: libfreecad-python2-0.17

  </details>

- **freecad-runtime**
  - Latest version: 2:0.18.4+dfsg1~201911060029~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - runtime files
  - Homepage: http://freecadweb.org/
  - Install: `sudo apt-get install freecad-runtime`
  - Install (apt): `sudo apt install freecad-runtime`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional

  </details>


### <a id="packages-G"></a>G

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: bionic
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

- **github-desktop**
  - Latest version: 2.1.0-linux1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/desktop/desktop#readme
  - Install: `sudo apt-get install github-desktop`
  - Install (apt): `sudo apt install github-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub, Inc <opensource+desktop@github.com>
  - Section: GNOME;GTK;Development
  - Priority: extra
  - depends: gconf-service, gconf2, libappindicator1, libcurl3 | libcurl4, libnotify4, libnss3, libsecret-1-0, libxtst6

  </details>

- **github-desktop**
  - Latest version: 2.1.0-linux1
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/desktop/desktop#readme
  - Install: `sudo apt-get install github-desktop`
  - Install (apt): `sudo apt install github-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitHub, Inc <opensource+desktop@github.com>
  - Section: GNOME;GTK;Development
  - Priority: extra
  - depends: gconf-service, gconf2, libappindicator1, libcurl3 | libcurl4, libnotify4, libnss3, libsecret-1-0, libxtst6

  </details>

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: focal
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

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: groovy
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

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: hirsute
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

- **github-desktop**
  - Latest version: 2.8.1-linux1
  - Architectures: amd64
  - Suite: impish
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

- **gitkraken**
  - Latest version: 9.11.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Unleash your repo
  - Install: `sudo apt-get install gitkraken`
  - Install (apt): `sudo apt install gitkraken`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitKraken
  - Section: devel
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcomerr2 (>= 1.01), libcups2 (>= 1.7.0), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.38), libexpat1 (>= 2.0.1), libfontconfig1 (>= 2.11), libgbm1 (>= 12.0.0~0), libgcc1 (>= 1:3.0), libgcrypt11 | libgcrypt20, libglib2.0-0 (>= 2.39.4), libglib2.0-bin | trash-cli | gvfs-bin | kde-cli-tools | kde-runtime, libgssapi-krb5-2 (>= 1.14+dfsg), libgtk-3-0 (>= 3.9.10), libk5crypto3 (>= 1.6.dfsg.2), libkrb5-3 (>= 1.6.dfsg.2), libnotify4, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.22), libpango-1.0-0 (>= 1.14.0), libudev0 | libudev1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.3-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxkbfile1, libxrandr2, libxtst6, xdg-utils, zlib1g (>= 1:1.2.0)
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0

  </details>

- **gitkraken**
  - Latest version: 9.11.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Unleash your repo
  - Install: `sudo apt-get install gitkraken`
  - Install (apt): `sudo apt install gitkraken`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitKraken
  - Section: devel
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcomerr2 (>= 1.01), libcups2 (>= 1.7.0), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.38), libexpat1 (>= 2.0.1), libfontconfig1 (>= 2.11), libgbm1 (>= 12.0.0~0), libgcc1 (>= 1:3.0), libgcrypt11 | libgcrypt20, libglib2.0-0 (>= 2.39.4), libglib2.0-bin | trash-cli | gvfs-bin | kde-cli-tools | kde-runtime, libgssapi-krb5-2 (>= 1.14+dfsg), libgtk-3-0 (>= 3.9.10), libk5crypto3 (>= 1.6.dfsg.2), libkrb5-3 (>= 1.6.dfsg.2), libnotify4, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.22), libpango-1.0-0 (>= 1.14.0), libudev0 | libudev1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.3-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxkbfile1, libxrandr2, libxtst6, xdg-utils, zlib1g (>= 1:1.2.0)
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0

  </details>

- **gitkraken**
  - Latest version: 11.8.0
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: Unleash your repo
  - Install: `sudo apt-get install gitkraken`
  - Install (apt): `sudo apt install gitkraken`
  <details>
  <summary>More metadata</summary>

  - Maintainer: GitKraken
  - Section: devel
  - Priority: optional
  - depends: libasound2 (>= 1.0.16), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcomerr2 (>= 1.01), libcups2 (>= 1.7.0), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.38), libexpat1 (>= 2.0.1), libfontconfig1 (>= 2.11), libgbm1 (>= 12.0.0~0), libgcc1 (>= 1:3.0), libgcrypt11 | libgcrypt20, libglib2.0-0 (>= 2.39.4), libglib2.0-bin | trash-cli | gvfs-bin | kde-cli-tools | kde-runtime, libgssapi-krb5-2 (>= 1.14+dfsg), libgtk-3-0 (>= 3.9.10), libk5crypto3 (>= 1.6.dfsg.2), libkrb5-3 (>= 1.6.dfsg.2), libnotify4, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.22), libpango-1.0-0 (>= 1.14.0), libudev0 | libudev1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.3-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxkbfile1, libxrandr2, libxtst6, xdg-utils, zlib1g (>= 1:1.2.0)
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0

  </details>

- **gitkraken**
  - Latest version: 6.4.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Unleash your repo
  - Install: `sudo apt-get install gitkraken`
  - Install (apt): `sudo apt install gitkraken`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Axosoft, LLC <gitkraken@axosoft.com>
  - Section: devel
  - Priority: optional
  - depends: gconf-service, gconf2, gvfs-bin, libgcrypt11 | libgcrypt20, libgtk2.0-0, libnotify4, libnss3, libudev0 | libudev1, libxkbfile1, libxtst6, python, xdg-utils
  - suggests: gir1.2-gnomekeyring-1.0, libgnome-keyring0

  </details>

- **google-chrome-stable**
  - Latest version: 121.0.6167.139-1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-stable`
  - Install (apt): `sudo apt install google-chrome-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **google-chrome-stable**
  - Latest version: 121.0.6167.139-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-stable`
  - Install (apt): `sudo apt install google-chrome-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **google-chrome-stable**
  - Latest version: 144.0.7559.96-1
  - Architectures: amd64
  - Suite: eoan
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

- **google-chrome-stable**
  - Latest version: 144.0.7559.96-1
  - Architectures: amd64
  - Suite: focal
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

- **google-chrome-stable**
  - Latest version: 121.0.6167.139-1
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-stable`
  - Install (apt): `sudo apt install google-chrome-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **google-chrome-stable**
  - Latest version: 121.0.6167.139-1
  - Architectures: amd64
  - Suite: hirsute
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-stable`
  - Install (apt): `sudo apt install google-chrome-stable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.17), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **google-chrome-stable**
  - Latest version: 144.0.7559.96-1
  - Architectures: amd64
  - Suite: impish
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


### <a id="packages-K"></a>K

- **kicad**
  - Latest version: 5.0.2-stable-201811280959+bee76a0~70~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Electronic schematic and PCB design software
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad`
  - Install (apt): `sudo apt install kicad`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Wolf <adamwolf@feelslikeburning.com>
  - Section: electronics
  - Priority: optional
  - depends: libc6 (>= 2.27), libcairo2 (>= 1.6.0), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.4), libgl1, libglew2.0 (>= 1.12.0), libglu1-mesa | libglu1, libngspice-kicad, liboce-foundation11, liboce-modeling11, liboce-ocaf-lite11, liboce-ocaf11, libpixman-1-0 (>= 0.15.14), libpython2.7 (>= 2.7), libstdc++6 (>= 7), libwxbase3.0-0v5 (>= 3.0.4+dfsg), libwxgtk3.0-0v5 (>= 3.0.4+dfsg), python-wxgtk3.0, xsltproc
  - recommends: kicad-doc-en, kicad-libraries
  - suggests: extra-xdg-menus, kicad-demo (>= 5.0.2-stable-201811280959+bee76a0~70~ubuntu18.04.1), kicad-locale-ko | kicad-locale-ru | kicad-locale-pl | kicad-locale-pt | kicad-locale-ja | kicad-locale-id | kicad-locale-ca | kicad-locale-it | kicad-locale-el | kicad-locale-zh | kicad-locale-de | kicad-locale-sl | kicad-locale-cs | kicad-locale-bg | kicad-locale-sv | kicad-locale-lt | kicad-locale-fi | kicad-locale-fr | kicad-locale-hu | kicad-locale-nl | kicad-locale-es | kicad-locale-sk
  - conflicts: kicad-common
  - replaces: kicad-common

  </details>

- **kicad-demo**
  - Latest version: 5.0.2-stable-201811280959+bee76a0~70~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Common files used by kicad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-demo`
  - Install (apt): `sudo apt install kicad-demo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Adam Wolf <adamwolf@feelslikeburning.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad

  </details>

- **kicad-doc-ca**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Catalan)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-ca`
  - Install (apt): `sudo apt install kicad-doc-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-de**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (German)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-de`
  - Install (apt): `sudo apt install kicad-doc-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-en**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (English)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-en`
  - Install (apt): `sudo apt install kicad-doc-en`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-es**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Spanish)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-es`
  - Install (apt): `sudo apt install kicad-doc-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-fr**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (French)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-fr`
  - Install (apt): `sudo apt install kicad-doc-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-it**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Italian)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-it`
  - Install (apt): `sudo apt install kicad-doc-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-ja**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Japanese)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-ja`
  - Install (apt): `sudo apt install kicad-doc-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-nl**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Dutch)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-nl`
  - Install (apt): `sudo apt install kicad-doc-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-pl**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Polish)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-pl`
  - Install (apt): `sudo apt install kicad-doc-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-doc-ru**
  - Latest version: 5.0.0-rc1-201802261039+1352~17~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad help files (Russian)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-doc-ru`
  - Install (apt): `sudo apt install kicad-doc-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional

  </details>

- **kicad-footprints**
  - Latest version: 5.0.2-stable-201812071423+5bf695a~9~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad footprints (modules)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-footprints`
  - Install (apt): `sudo apt install kicad-footprints`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad
  - suggests: kicad-libraries (>= 1:0.1), kicad-packages3d
  - conflicts: kicad-common, kicad-library (<< 1:0.1), kicad-library-footprints
  - replaces: kicad-library-footprints

  </details>

- **kicad-libraries**
  - Latest version: 5.0.2-stable-201812071405+7~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: meta-package for dep to all KiCad libraries (symbols, footprints, templates and 3D models)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-libraries`
  - Install (apt): `sudo apt install kicad-libraries`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad, kicad-footprints, kicad-packages3d, kicad-symbols, kicad-templates
  - conflicts: kicad-common, kicad-library, kicad-library-all
  - replaces: kicad-library, kicad-library-all

  </details>

- **kicad-locale-bg**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Bulgarian locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-bg`
  - Install (apt): `sudo apt install kicad-locale-bg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-bg
  - conflicts: kicad-common

  </details>

- **kicad-locale-ca**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Catalan locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-ca`
  - Install (apt): `sudo apt install kicad-locale-ca`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-ca
  - conflicts: kicad-common

  </details>

- **kicad-locale-cs**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Czech locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-cs`
  - Install (apt): `sudo apt install kicad-locale-cs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-cs
  - conflicts: kicad-common

  </details>

- **kicad-locale-de**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: German locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-de`
  - Install (apt): `sudo apt install kicad-locale-de`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-de
  - conflicts: kicad-common

  </details>

- **kicad-locale-el**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Greek locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-el`
  - Install (apt): `sudo apt install kicad-locale-el`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-el
  - conflicts: kicad-common

  </details>

- **kicad-locale-es**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Spanish locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-es`
  - Install (apt): `sudo apt install kicad-locale-es`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-es
  - conflicts: kicad-common

  </details>

- **kicad-locale-fi**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Finnish locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-fi`
  - Install (apt): `sudo apt install kicad-locale-fi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-fi
  - conflicts: kicad-common

  </details>

- **kicad-locale-fr**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: French locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-fr`
  - Install (apt): `sudo apt install kicad-locale-fr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-fr
  - conflicts: kicad-common

  </details>

- **kicad-locale-hu**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Hungarian locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-hu`
  - Install (apt): `sudo apt install kicad-locale-hu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-hu
  - conflicts: kicad-common

  </details>

- **kicad-locale-it**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Italian locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-it`
  - Install (apt): `sudo apt install kicad-locale-it`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-it
  - conflicts: kicad-common

  </details>

- **kicad-locale-ja**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Japanese locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-ja`
  - Install (apt): `sudo apt install kicad-locale-ja`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-ja
  - conflicts: kicad-common

  </details>

- **kicad-locale-ko**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Korean locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-ko`
  - Install (apt): `sudo apt install kicad-locale-ko`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-ko
  - conflicts: kicad-common

  </details>

- **kicad-locale-lt**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Lithuanian locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-lt`
  - Install (apt): `sudo apt install kicad-locale-lt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-lt
  - conflicts: kicad-common

  </details>

- **kicad-locale-nl**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Netherlands locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-nl`
  - Install (apt): `sudo apt install kicad-locale-nl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-nl
  - conflicts: kicad-common

  </details>

- **kicad-locale-pl**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Polish locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-pl`
  - Install (apt): `sudo apt install kicad-locale-pl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-pl
  - conflicts: kicad-common

  </details>

- **kicad-locale-pt**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Portuguese locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-pt`
  - Install (apt): `sudo apt install kicad-locale-pt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-pt
  - conflicts: kicad-common

  </details>

- **kicad-locale-ru**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Russian locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-ru`
  - Install (apt): `sudo apt install kicad-locale-ru`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-ru
  - conflicts: kicad-common

  </details>

- **kicad-locale-sk**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Slovak locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-sk`
  - Install (apt): `sudo apt install kicad-locale-sk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-sk
  - conflicts: kicad-common

  </details>

- **kicad-locale-sl**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Slovenina locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-sl`
  - Install (apt): `sudo apt install kicad-locale-sl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-sl
  - conflicts: kicad-common

  </details>

- **kicad-locale-sv**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Swedish locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-sv`
  - Install (apt): `sudo apt install kicad-locale-sv`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-sv
  - conflicts: kicad-common

  </details>

- **kicad-locale-zh**
  - Latest version: 5.0.2-stable-201812071426+1576~2~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Chinese locale for KiCad
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-locale-zh`
  - Install (apt): `sudo apt install kicad-locale-zh`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: kicad
  - suggests: kicad-doc-zh
  - conflicts: kicad-common

  </details>

- **kicad-packages3d**
  - Latest version: 5.0.2-stable-201812071618+c24f4c5~7~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad packages3d (3d models for footprints)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-packages3d`
  - Install (apt): `sudo apt install kicad-packages3d`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad, kicad-footprints
  - suggests: kicad-libraries (>= 1:0.1)
  - conflicts: kicad-common, kicad-library (<< 1:0.1), kicad-library-packages3d
  - replaces: kicad-library-packages3d

  </details>

- **kicad-symbols**
  - Latest version: 5.0.2-stable-201812071435+84cd7f9~6~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad symbols (schematic)
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-symbols`
  - Install (apt): `sudo apt install kicad-symbols`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad
  - suggests: kicad-libraries (>= 1:0.1)
  - conflicts: kicad-common, kicad-library (<< 1:0.1), kicad-library-symbols
  - replaces: kicad-library-symbols

  </details>

- **kicad-templates**
  - Latest version: 5.0.2-stable-201812071430+31b13f2~8~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Kicad templates
  - Homepage: http://www.kicad-pcb.org
  - Install: `sudo apt-get install kicad-templates`
  - Install (apt): `sudo apt install kicad-templates`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - recommends: kicad, kicad-libraries (>= 1:0.1)
  - conflicts: kicad-common, kicad-library (<< 1:0.1), kicad-library-templates
  - replaces: kicad-library-templates

  </details>


### <a id="packages-L"></a>L

- **libcoin-dev**
  - Latest version: 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: high-level 3D graphics devkit with Open Inventor and VRML97 support
  - Homepage: https://bitbucket.org/Coin3D/coin/
  - Install: `sudo apt-get install libcoin-dev`
  - Install (apt): `sudo apt install libcoin-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Team <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libcoin80c (= 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04), libgl1-mesa-dev | libgl-dev, libx11-dev, libxext-dev, libxi-dev, libxmu-dev, libxpm-dev, libxt-dev
  - suggests: libcoin-doc (= 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04)
  - conflicts: inventor-dev
  - breaks: libcoin80-dev
  - replaces: libcoin80-dev

  </details>

- **libcoin-doc**
  - Latest version: 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: high-level 3D graphics kit with Open Inventor and VRML97 support
  - Homepage: https://bitbucket.org/Coin3D/coin/
  - Install: `sudo apt-get install libcoin-doc`
  - Install (apt): `sudo apt install libcoin-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Team <debian-science-maintainers@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - suggests: libcoin-dev (= 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04)
  - breaks: libcoin80-doc
  - replaces: libcoin80-doc

  </details>

- **libcoin-runtime**
  - Latest version: 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: high-level 3D graphics kit - external data files
  - Homepage: https://bitbucket.org/Coin3D/coin/
  - Install: `sudo apt-get install libcoin-runtime`
  - Install (apt): `sudo apt install libcoin-runtime`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Team <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - suggests: libcoin80c
  - breaks: libcoin80-runtime
  - replaces: libcoin80-runtime

  </details>

- **libcoin80c**
  - Latest version: 4.0.0~CMake~6f54f1602475+ds1-0ppa1~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: high-level 3D graphics kit implementing the Open Inventor API
  - Homepage: https://bitbucket.org/Coin3D/coin/
  - Install: `sudo apt-get install libcoin80c`
  - Install (apt): `sudo apt install libcoin80c`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Team <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libexpat1 (>= 2.0.1), libgcc1 (>= 1:3.0), libgl1, libstdc++6 (>= 5.2)
  - suggests: libbz2-1.0, libfreetype6, libopenal0a, libsimage-dev, zlib1g
  - replaces: libcoin80v5

  </details>

- **libfreecad-python2-0.18**
  - Latest version: 2:0.18.4+dfsg1~201911060029~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 2 library files
  - Homepage: http://freecadweb.org/
  - Install: `sudo apt-get install libfreecad-python2-0.18`
  - Install (apt): `sudo apt install libfreecad-python2-0.18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libboost-filesystem1.65.1, libboost-program-options1.65.1, libboost-regex1.65.1, libboost-system1.65.1, libboost-thread1.65.1, libc6 (>= 2.27), libcoin80c, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1, libglu1-mesa | libglu1, libmedc1v5, libocct-data-exchange-7.3, libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libocct-ocaf-7.3, libocct-visualization-7.3, libopenmpi2, libpyside2-5.11, libpython2.7 (>= 2.7), libqt5concurrent5 (>= 5.6.0~rc), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5webkit5 (>= 5.6.0~rc), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libshiboken2-5.11, libspnav0 (>= 0.2.2), libstdc++6 (>= 5.2), libvtk7.1, libxerces-c3.2, libzipios++0v5, zlib1g (>= 1:1.1.4)

  </details>

- **libfreecad-python2-0.19**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 2 library files
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install libfreecad-python2-0.19`
  - Install (apt): `sudo apt install libfreecad-python2-0.19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libboost-filesystem1.65.1, libboost-program-options1.65.1, libboost-regex1.65.1, libboost-system1.65.1, libboost-thread1.65.1, libc6 (>= 2.27), libcoin80c, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1, libglu1-mesa | libglu1, libmedc1v5, libocct-data-exchange-7.5, libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-ocaf-7.5, libocct-visualization-7.5, libopenmpi2, libpyside2-5.11, libpython2.7 (>= 2.7), libqt5concurrent5 (>= 5.6.0~rc), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5webkit5 (>= 5.6.0~rc), libqt5widgets5 (>= 5.7.0), libqt5xml5 (>= 5.0.2), libqt5xmlpatterns5 (>= 5.9.0), libshiboken2-5.11, libspnav0 (>= 0.2.2), libstdc++6 (>= 7), libvtk7.1, libxerces-c3.2, libzipios++0v5, zlib1g (>= 1:1.1.4)
  - breaks: libfreecad-python2-0.18
  - replaces: libfreecad-python2-0.18

  </details>

- **libfreecad-python3-0.18**
  - Latest version: 2:0.18.4+dfsg1~201911060029~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 3 library files
  - Homepage: http://freecadweb.org/
  - Install: `sudo apt-get install libfreecad-python3-0.18`
  - Install (apt): `sudo apt install libfreecad-python3-0.18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libboost-filesystem1.65.1, libboost-program-options1.65.1, libboost-regex1.65.1, libboost-system1.65.1, libboost-thread1.65.1, libc6 (>= 2.27), libcoin80c, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1, libglu1-mesa | libglu1, libmedc1v5, libocct-data-exchange-7.3, libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libocct-ocaf-7.3, libocct-visualization-7.3, libopenmpi2, libpyside2-py3-5.11, libpython3.6 (>= 3.6.5), libqt5concurrent5 (>= 5.6.0~rc), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5webkit5 (>= 5.6.0~rc), libqt5widgets5 (>= 5.7.0), libqt5x11extras5 (>= 5.6.0), libqt5xml5 (>= 5.0.2), libshiboken2-py3-5.11, libspnav0 (>= 0.2.2), libstdc++6 (>= 5.2), libvtk7.1, libxerces-c3.2, libzipios++0v5, zlib1g (>= 1:1.1.4)

  </details>

- **libfreecad-python3-0.19**
  - Latest version: 2:0.19.2+dfsg1~202107140647~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Extensible Open Source CAx program - Python 3 library files
  - Homepage: https://freecadweb.org/
  - Install: `sudo apt-get install libfreecad-python3-0.19`
  - Install (apt): `sudo apt install libfreecad-python3-0.19`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libboost-filesystem1.65.1, libboost-program-options1.65.1, libboost-regex1.65.1, libboost-system1.65.1, libboost-thread1.65.1, libc6 (>= 2.27), libcoin80c, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.4), libgl1, libglu1-mesa | libglu1, libmedc1v5, libocct-data-exchange-7.5, libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-ocaf-7.5, libocct-visualization-7.5, libopenmpi2, libpyside2-py3-5.11, libpython3.6 (>= 3.6.5), libqt5concurrent5 (>= 5.6.0~rc), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5webkit5 (>= 5.6.0~rc), libqt5widgets5 (>= 5.7.0), libqt5xml5 (>= 5.0.2), libqt5xmlpatterns5 (>= 5.9.0), libshiboken2-py3-5.11, libspnav0 (>= 0.2.2), libstdc++6 (>= 7), libvtk7.1, libxerces-c3.2, libzipios++0v5, zlib1g (>= 1:1.1.4)
  - breaks: libfreecad-python3-0.18
  - replaces: libfreecad-python3-0.18

  </details>

- **libnglib-6.2**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator shared library
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install libnglib-6.2`
  - Install (apt): `sudo apt install libnglib-6.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libgl1, libglu1-mesa | libglu1, libmetis5, libocct-data-exchange-7.5, libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-ocaf-7.5, libopenmpi2, libpython3.6 (>= 3.6.5), libstdc++6 (>= 6), libtcl8.6 (>= 8.6.0), libtogl2, zlib1g (>= 1:1.2.3.3)

  </details>

- **libnglib-dev**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator development files
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install libnglib-dev`
  - Install (apt): `sudo apt install libnglib-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libnglib-6.2 (= 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1)
  - breaks: libnglib-6.2.1804
  - replaces: libnglib-6.2.1804

  </details>

- **libngspice-kicad**
  - Latest version: 0.1-2~201810171224+2e5be8d~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Library (shared) for ngspice. Used by kicad
  - Homepage: http://ngspice.sourceforge.net
  - Install: `sudo apt-get install libngspice-kicad`
  - Install (apt): `sudo apt install libngspice-kicad`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: dpkg (>= 1.15.4) | install-info, libc6 (>= 2.14), libgomp1 (>= 4.9)
  - breaks: ngspice-kicad
  - replaces: ngspice-kicad

  </details>

- **libngspice-kicad-doc**
  - Latest version: 0.1-2~201810171224+2e5be8d~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Doc for library (shared) for ngspice. Used by kicad
  - Homepage: http://ngspice.sourceforge.net
  - Install: `sudo apt-get install libngspice-kicad-doc`
  - Install (apt): `sudo apt install libngspice-kicad-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Jean-Samuel Reynaud <js.reynaud@gmail.com>
  - Section: electronics
  - Priority: optional
  - depends: dpkg (>= 1.15.4) | install-info

  </details>

- **libocct-data-exchange-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology module for CAD data format interoperability
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-data-exchange-7.3`
  - Install (apt): `sudo apt install libocct-data-exchange-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libocct-ocaf-7.3, libocct-visualization-7.3, libstdc++6 (>= 5.2)
  - conflicts: libopencascade-data-exchange-7.1, libopencascade-data-exchange-7.2
  - replaces: libopencascade-data-exchange-7.1, libopencascade-data-exchange-7.2

  </details>

- **libocct-data-exchange-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology module for CAD data format interoperability
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-data-exchange-7.5`
  - Install (apt): `sudo apt install libocct-data-exchange-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-ocaf-7.5, libocct-visualization-7.5, libstdc++6 (>= 5.2)
  - breaks: libocct-data-exchange-7.3, libocct-data-exchange-7.4, libopencascade-data-exchange-7.1, libopencascade-data-exchange-7.2
  - replaces: libocct-data-exchange-7.3, libocct-data-exchange-7.4, libopencascade-data-exchange-7.1, libopencascade-data-exchange-7.2

  </details>

- **libocct-data-exchange-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology module for CAD data format interoperability - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-data-exchange-dev`
  - Install (apt): `sudo apt install libocct-data-exchange-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-data-exchange-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-data-exchange-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-foundation-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-algorithms-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-algorithms-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-data-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-data-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-ocaf-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-ocaf-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-visualization-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-visualization-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)
  - conflicts: liboce-ocaf-dev, liboce-ocaf-lite-dev, libopencascade-data-exchange-dev
  - replaces: liboce-ocaf-dev, liboce-ocaf-lite-dev, libopencascade-data-exchange-dev

  </details>

- **libocct-doc**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology CAE platform documentation
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-doc`
  - Install (apt): `sudo apt install libocct-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-mathjax

  </details>

- **libocct-draw-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology command interpreter & graphical test library
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-draw-7.3`
  - Install (apt): `sudo apt install libocct-draw-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libfreetype6-dev, libgcc1 (>= 1:3.0), libgl1, libocct-data-exchange-7.3, libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libocct-ocaf-7.3, libocct-visualization-7.3, libstdc++6 (>= 5.2), libtcl8.6 (>= 8.6.0), libtk8.6 (>= 8.6.0), libx11-6, libx11-dev, tcl8.6-dev, tk8.6-dev
  - conflicts: libopencascade-draw-7.1, libopencascade-draw-7.2
  - replaces: libopencascade-draw-7.1, libopencascade-draw-7.2

  </details>

- **libocct-draw-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology command interpreter & graphical test library
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-draw-7.5`
  - Install (apt): `sudo apt install libocct-draw-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libfreetype6-dev, libgcc1 (>= 1:3.0), libgl1, libocct-data-exchange-7.5, libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-ocaf-7.5, libocct-visualization-7.5, libstdc++6 (>= 5.2), libtbb2, libtcl8.6 (>= 8.6.0), libtk8.6 (>= 8.6.0), libx11-6, libx11-dev, tcl8.6-dev, tk8.6-dev
  - breaks: libocct-draw-7.3, libocct-draw-7.4, libopencascade-draw-7.1, libopencascade-draw-7.2
  - replaces: libocct-draw-7.3, libocct-draw-7.4, libopencascade-draw-7.1, libopencascade-draw-7.2

  </details>

- **libocct-draw-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology interpreter & graphics test library - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-draw-dev`
  - Install (apt): `sudo apt install libocct-draw-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-draw-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-draw-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)

  </details>

- **libocct-foundation-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: OCCT module underlying all other OCCT classes
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-foundation-7.3`
  - Install (apt): `sudo apt install libocct-foundation-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2), libtbb2
  - conflicts: libopencascade-foundation-7.1, libopencascade-foundation-7.2
  - replaces: libopencascade-foundation-7.1, libopencascade-foundation-7.2

  </details>

- **libocct-foundation-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: OCCT module underlying all other OCCT classes
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-foundation-7.5`
  - Install (apt): `sudo apt install libocct-foundation-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2), libtbb2
  - breaks: libocct-foundation-7.3, libocct-foundation-7.4, libopencascade-foundation-7.1, libopencascade-foundation-7.2
  - replaces: libocct-foundation-7.3, libocct-foundation-7.4, libopencascade-foundation-7.1, libopencascade-foundation-7.2

  </details>

- **libocct-foundation-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology module underlying all other OCCT classes - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-foundation-dev`
  - Install (apt): `sudo apt install libocct-foundation-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-foundation-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)
  - conflicts: liboce-foundation-dev, libopencascade-foundation-dev
  - replaces: liboce-foundation-dev, libopencascade-foundation-dev

  </details>

- **libocct-modeling-algorithms-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology geometrical & topological algorithms module
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-algorithms-7.3`
  - Install (apt): `sudo apt install libocct-modeling-algorithms-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.3, libocct-modeling-data-7.3, libstdc++6 (>= 4.9), libtbb2
  - conflicts: libopencascade-modeling-algorithms-7.1, libopencascade-modeling-algorithms-7.2
  - replaces: libopencascade-modeling-algorithms-7.1, libopencascade-modeling-algorithms-7.2

  </details>

- **libocct-modeling-algorithms-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology geometrical & topological algorithms module
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-algorithms-7.5`
  - Install (apt): `sudo apt install libocct-modeling-algorithms-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.5, libocct-modeling-data-7.5, libstdc++6 (>= 5.2)
  - breaks: libocct-modeling-algorithms-7.3, libocct-modeling-algorithms-7.4, libopencascade-modeling-algorithms-7.1, libopencascade-modeling-algorithms-7.2
  - replaces: libocct-modeling-algorithms-7.3, libocct-modeling-algorithms-7.4, libopencascade-modeling-algorithms-7.1, libopencascade-modeling-algorithms-7.2

  </details>

- **libocct-modeling-algorithms-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology geometrical & topological algorithms module - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-algorithms-dev`
  - Install (apt): `sudo apt install libocct-modeling-algorithms-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-foundation-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-algorithms-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-algorithms-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)
  - conflicts: liboce-modeling-dev, libopencascade-modeling-algorithms-dev
  - replaces: liboce-modeling-dev, libopencascade-modeling-algorithms-dev

  </details>

- **libocct-modeling-data-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology 2D/3D geometric primitives data structures
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-data-7.3`
  - Install (apt): `sudo apt install libocct-modeling-data-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.3, libstdc++6 (>= 5.2)
  - conflicts: libopencascade-modeling-data-7.1, libopencascade-modeling-data-7.2
  - replaces: libopencascade-modeling-data-7.1, libopencascade-modeling-data-7.2

  </details>

- **libocct-modeling-data-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology 2D/3D geometric primitives data structures
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-data-7.5`
  - Install (apt): `sudo apt install libocct-modeling-data-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.5, libstdc++6 (>= 5.2)
  - breaks: libocct-modeling-data-7.3, libocct-modeling-data-7.4, libopencascade-modeling-data-7.1, libopencascade-modeling-data-7.2
  - replaces: libocct-modeling-data-7.3, libocct-modeling-data-7.4, libopencascade-modeling-data-7.1, libopencascade-modeling-data-7.2

  </details>

- **libocct-modeling-data-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology 2D/3D geometric primitives data structures - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-modeling-data-dev`
  - Install (apt): `sudo apt install libocct-modeling-data-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-foundation-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-data-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-data-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)
  - conflicts: liboce-modeling-dev, libopencascade-modeling-data-dev
  - replaces: liboce-modeling-dev, libopencascade-modeling-data-dev

  </details>

- **libocct-ocaf-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology application-specific data and functionality
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-ocaf-7.3`
  - Install (apt): `sudo apt install libocct-ocaf-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libocct-visualization-7.3, libstdc++6 (>= 5.2)
  - conflicts: libopencascade-ocaf-7.1, libopencascade-ocaf-7.2
  - replaces: libopencascade-ocaf-7.1, libopencascade-ocaf-7.2

  </details>

- **libocct-ocaf-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology application-specific data and functionality
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-ocaf-7.5`
  - Install (apt): `sudo apt install libocct-ocaf-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libocct-visualization-7.5, libstdc++6 (>= 5.2)
  - breaks: libocct-ocaf-7.3, libocct-ocaf-7.4, libopencascade-ocaf-7.1, libopencascade-ocaf-7.2
  - replaces: libocct-ocaf-7.3, libocct-ocaf-7.4, libopencascade-ocaf-7.1, libopencascade-ocaf-7.2

  </details>

- **libocct-ocaf-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology application-specific data and functionality - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-ocaf-dev`
  - Install (apt): `sudo apt install libocct-ocaf-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libocct-foundation-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-algorithms-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-algorithms-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-data-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-data-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-ocaf-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-ocaf-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-visualization-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-visualization-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1)
  - conflicts: liboce-ocaf-dev, liboce-ocaf-lite-dev, libopencascade-ocaf-dev
  - replaces: liboce-ocaf-dev, liboce-ocaf-lite-dev, libopencascade-ocaf-dev

  </details>

- **libocct-visualization-7.3**
  - Latest version: 7.3.0+dfsg1-5~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology graphical data visualization module
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-visualization-7.3`
  - Install (apt): `sudo apt install libocct-visualization-7.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libfreeimage3, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.0), libgl1, libocct-foundation-7.3, libocct-modeling-algorithms-7.3, libocct-modeling-data-7.3, libstdc++6 (>= 5.2), libtbb2, libx11-6
  - conflicts: libopencascade-visualization-7.1, libopencascade-visualization-7.2
  - replaces: libopencascade-visualization-7.1, libopencascade-visualization-7.2

  </details>

- **libocct-visualization-7.5**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology graphical data visualization module
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-visualization-7.5`
  - Install (apt): `sudo apt install libocct-visualization-7.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libfontconfig1 (>= 2.12), libfreeimage3, libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.0), libgl1, libocct-foundation-7.5, libocct-modeling-algorithms-7.5, libocct-modeling-data-7.5, libstdc++6 (>= 5.2), libx11-6
  - breaks: libocct-visualization-7.3, libocct-visualization-7.4, libopencascade-visualization-7.1, libopencascade-visualization-7.2
  - replaces: libocct-visualization-7.3, libocct-visualization-7.4, libopencascade-visualization-7.1, libopencascade-visualization-7.2

  </details>

- **libocct-visualization-dev**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology graphical data visualization module - dev files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install libocct-visualization-dev`
  - Install (apt): `sudo apt install libocct-visualization-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libfreeimage-dev, libfreetype6-dev, libgl1-mesa-dev | libgl-dev, libglu1-mesa-dev | libglu-dev, libocct-foundation-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-foundation-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-algorithms-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-algorithms-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-modeling-data-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-modeling-data-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-ocaf-dev (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-ocaf-dev (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libocct-visualization-7.5 (<< 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1+1~), libocct-visualization-7.5 (>= 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1), libx11-dev, libxext-dev, libxmu-dev
  - conflicts: liboce-visualization-dev, libopencascade-visualization-dev
  - replaces: liboce-visualization-dev, libopencascade-visualization-dev

  </details>

- **libpyside2-5.11**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python 2 bindings for Qt5 (base files)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libpyside2-5.11`
  - Install (apt): `sudo apt install libpyside2-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libqt5core5a (>= 5.9.0~beta), libqt5qml5 (>= 5.5.0), libshiboken2-5.11, libstdc++6 (>= 5.2), python:any (<< 2.8), python:any (>= 2.7.5-5~), qtdeclarative-abi-5-9-5

  </details>

- **libpyside2-dev**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 (development files)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libpyside2-dev`
  - Install (apt): `sudo apt install libpyside2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libpyside2-5.11 (= 5.11.2-0ppa2~ubuntu18.04), libpyside2-py3-5.11 (= 5.11.2-0ppa2~ubuntu18.04), pyqt5-dev

  </details>

- **libpyside2-py3-5.11**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python 3 bindings for Qt5 (base files)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libpyside2-py3-5.11`
  - Install (apt): `sudo apt install libpyside2-py3-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libqt5core5a (>= 5.9.0~beta), libqt5qml5 (>= 5.5.0), libshiboken2-py3-5.11, libstdc++6 (>= 5.2), python3:any (>= 3.3.2-2~), qtdeclarative-abi-5-9-5

  </details>

- **libshiboken2-5.11**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: CPython bindings generator for C++ libraries (Python2 shared library)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libshiboken2-5.11`
  - Install (apt): `sudo apt install libshiboken2-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **libshiboken2-dev**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: CPython bindings generator for C++ libraries (development files)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libshiboken2-dev`
  - Install (apt): `sudo apt install libshiboken2-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libshiboken2-5.11 (= 5.11.2-0ppa2~ubuntu18.04), libshiboken2-py3-5.11 (= 5.11.2-0ppa2~ubuntu18.04), python-dev

  </details>

- **libshiboken2-py3-5.11**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: CPython bindings generator for C++ libraries (Python3 shared library)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install libshiboken2-py3-5.11`
  - Install (apt): `sudo apt install libshiboken2-py3-5.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **libsoqt520**
  - Latest version: 1.6.0~ea5cd76+ds1-0ppa1~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Qt5 GUI component toolkit for Inventor - runtime
  - Homepage: https://bitbucket.org/Coin3D/soqt
  - Install: `sudo apt-get install libsoqt520`
  - Install (apt): `sudo apt install libsoqt520`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.27), libcoin80c, libgcc1 (>= 1:3.0), libgl1, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.3.0), libqt5opengl5 (>= 5.0.2), libqt5widgets5 (>= 5.0.2), libstdc++6 (>= 5.2), libx11-6, libxi6

  </details>

- **libsoqt520-dev**
  - Latest version: 1.6.0~ea5cd76+ds1-0ppa1~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Qt5 GUI component toolkit for Inventor - development
  - Homepage: https://bitbucket.org/Coin3D/soqt
  - Install: `sudo apt-get install libsoqt520-dev`
  - Install (apt): `sudo apt install libsoqt520-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libcoin-dev (>= 4.0), libqt5opengl5-dev, libsoqt520 (= 1.6.0~ea5cd76+ds1-0ppa1~ubuntu18.04), qtbase5-dev
  - breaks: libsoqt-dev-common, libsoqt4-dev
  - replaces: libsoqt-dev-common, libsoqt4-dev
  - provides: libsoqt-dev

  </details>


### <a id="packages-M"></a>M

- **mattermost-desktop**
  - Latest version: 4.3.2-4228
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Mattermost
  - Homepage: https://about.mattermost.com
  - Install: `sudo apt-get install mattermost-desktop`
  - Install (apt): `sudo apt install mattermost-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattermost, Inc. <feedback@mattermost.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator3-1, libatspi2.0-0, libgtk-3-0, libnotify4, libnss3, libsecret-1-0, libuuid1, libxss1, libxtst6, xdg-utils

  </details>

- **mattermost-desktop**
  - Latest version: 4.3.2-4228
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Mattermost
  - Homepage: https://about.mattermost.com
  - Install: `sudo apt-get install mattermost-desktop`
  - Install (apt): `sudo apt install mattermost-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattermost, Inc. <feedback@mattermost.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator3-1, libatspi2.0-0, libgtk-3-0, libnotify4, libnss3, libsecret-1-0, libuuid1, libxss1, libxtst6, xdg-utils

  </details>

- **mattermost-desktop**
  - Latest version: 4.3.2-4228
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: Mattermost
  - Homepage: https://about.mattermost.com
  - Install: `sudo apt-get install mattermost-desktop`
  - Install (apt): `sudo apt install mattermost-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattermost, Inc. <feedback@mattermost.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator3-1, libatspi2.0-0, libgtk-3-0, libnotify4, libnss3, libsecret-1-0, libuuid1, libxss1, libxtst6, xdg-utils

  </details>

- **mattermost-desktop**
  - Latest version: 4.3.2-4228
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Mattermost
  - Homepage: https://about.mattermost.com
  - Install: `sudo apt-get install mattermost-desktop`
  - Install (apt): `sudo apt install mattermost-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattermost, Inc. <feedback@mattermost.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator3-1, libatspi2.0-0, libgtk-3-0, libnotify4, libnss3, libsecret-1-0, libuuid1, libxss1, libxtst6, xdg-utils

  </details>


### <a id="packages-N"></a>N

- **natron**
  - Latest version: 2.3.14~0pop1
  - Architectures: amd64
  - Suite: bionic
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

- **natron**
  - Latest version: 2.3.14~0pop3
  - Architectures: amd64
  - Suite: disco
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

- **natron**
  - Latest version: 2.3.14~0pop3
  - Architectures: amd64
  - Suite: eoan
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

- **natron**
  - Latest version: 2.3.14~0pop3
  - Architectures: amd64
  - Suite: focal
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

- **natron**
  - Latest version: 2.3.14~0pop4
  - Architectures: amd64
  - Suite: groovy
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

- **natron**
  - Latest version: 2.3.14~0pop4
  - Architectures: amd64
  - Suite: hirsute
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

- **natron**
  - Latest version: 2.3.14~0pop4
  - Architectures: amd64
  - Suite: impish
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

- **netgen**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install netgen`
  - Install (apt): `sudo apt install netgen`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: math
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libnglib-6.2 (= 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1), libopenmpi2, libstdc++6 (>= 5.2), libtcl8.6 (>= 8.6.0), libtk8.6 (>= 8.6.0), mpi-default-bin, tix
  - suggests: netgen-doc

  </details>

- **netgen-doc**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator documentation
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install netgen-doc`
  - Install (apt): `sudo apt install netgen-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - suggests: netgen

  </details>

- **netgen-headers**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator internal headers
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install netgen-headers`
  - Install (apt): `sudo apt install netgen-headers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - depends: libnglib-dev (= 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1)

  </details>


### <a id="packages-O"></a>O

- **occt-draw**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open CASCADE Technology command interpreter and graphical test system
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install occt-draw`
  - Install (apt): `sudo apt install occt-draw`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: science
  - Priority: optional
  - depends: libc6 (>= 2.2.5), libocct-draw-7.5, libstdc++6 (>= 4.1.1)
  - conflicts: oce-draw, opencascade-draw
  - replaces: oce-draw, opencascade-draw

  </details>

- **occt-misc**
  - Latest version: 1:7.5.2+dfsg1-0~202107020155~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: OCCT CAE platform shared library miscellaneous files
  - Homepage: https://www.opencascade.com/
  - Install: `sudo apt-get install occt-misc`
  - Install (apt): `sudo apt install occt-misc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: utils
  - Priority: optional
  - conflicts: opencascade-misc
  - replaces: opencascade-misc

  </details>


### <a id="packages-P"></a>P

- **peek**
  - Latest version: 1.5.1-0~ppa28~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Simple screen recorder with an easy to use interface
  - Homepage: https://github.com/phw/peek
  - Install: `sudo apt-get install peek`
  - Install (apt): `sudo apt install peek`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Philipp Wolfer <ph.wolfer@gmail.com>
  - Section: video
  - Priority: optional
  - depends: dconf-gsettings-backend | gsettings-backend, ffmpeg (>= 3.0), gstreamer1.0-plugins-good (>= 1.2), libc6 (>= 2.27), libcairo2 (>= 1.10.0), libglib2.0-0 (>= 2.41.4), libgtk-3-0 (>= 3.21.5), libkeybinder-3.0-0 (>= 0.3.0), libpango-1.0-0 (>= 1.14.0)
  - recommends: gstreamer1.0-plugins-ugly
  - suggests: gifski

  </details>

- **plexmediaserver**
  - Latest version: 1.18.2.2058-e67a4e892
  - Architectures: amd64
  - Suite: bionic
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

- **plexmediaserver**
  - Latest version: 1.18.2.2058-e67a4e892
  - Architectures: amd64
  - Suite: disco
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

- **plexmediaserver**
  - Latest version: 1.18.2.2058-e67a4e892
  - Architectures: amd64
  - Suite: eoan
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

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: focal
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

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: groovy
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

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: hirsute
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

- **plexmediaserver**
  - Latest version: 1.19.1.2701-6327e27bf
  - Architectures: amd64
  - Suite: impish
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

- **pybind11-dev**
  - Latest version: 2.4.3-1~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: seamless operability between C++11 and Python
  - Homepage: https://github.com/pybind/pybind11
  - Install: `sudo apt-get install pybind11-dev`
  - Install (apt): `sudo apt install pybind11-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: libdevel
  - Priority: optional
  - recommends: libeigen3-dev
  - suggests: pybind11-doc

  </details>

- **pybind11-doc**
  - Latest version: 2.4.3-1~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: documentation for pybind11
  - Homepage: https://github.com/pybind/pybind11
  - Install: `sudo apt-get install pybind11-doc`
  - Install (apt): `sudo apt install pybind11-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 1.0), sphinx-rtd-theme-common

  </details>

- **pyside2-tools**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: development tools for PySide2 (uic, rcc, lupdate)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install pyside2-tools`
  - Install (apt): `sudo apt install pyside2-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libqt5core5a (>= 5.9.0~beta), libqt5widgets5 (>= 5.0.2), libqt5xml5 (>= 5.1.0), libstdc++6 (>= 4.9), python-pyside2uic, python:any

  </details>

- **python-pivy**
  - Latest version: 0.6.4-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Coin binding for Python
  - Homepage: https://bitbucket.org/Coin3D/pivy
  - Install: `sudo apt-get install python-pivy`
  - Install (apt): `sudo apt install python-pivy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libcoin80c, libgcc1 (>= 1:3.0), libsoqt520, libstdc++6 (>= 5), python (<< 2.8), python (>= 2.7~), python-pyside2.qtcore, python-pyside2.qtgui, python-pyside2.qtopengl, python-pyside2.qtwidgets, python:any (<< 2.8), python:any (>= 2.7.5-5~), shiboken2
  - provides: python2.7-pivy

  </details>

- **python-pybind11**
  - Latest version: 2.4.3-1~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: pybind11 helper module for Python 2
  - Homepage: https://github.com/pybind/pybind11
  - Install: `sudo apt-get install python-pybind11`
  - Install (apt): `sudo apt install python-pybind11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: pybind11-dev (= 2.4.3-1~ubuntu18.04.1), python:any (<< 2.8), python:any (>= 2.7.5-5~)
  - recommends: python-numpy

  </details>

- **python-pyside2-doc**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 (common documentation)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2-doc`
  - Install (apt): `sudo apt install python-pyside2-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 1.0), sphinx-rtd-theme-common

  </details>

- **python-pyside2.qt3dcore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DCore module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qt3dcore`
  - Install (apt): `sudo apt install python-pyside2.qt3dcore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt53dcore5 (>= 5.9.5), libqt5core5a (>= 5.5.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qt3dinput**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DInput module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qt3dinput`
  - Install (apt): `sudo apt install python-pyside2.qt3dinput`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53dinput5 (>= 5.9.0), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qt3dlogic**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DLogic module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qt3dlogic`
  - Install (apt): `sudo apt install python-pyside2.qt3dlogic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53dlogic5 (>= 5.7.1~20161122), libqt5core5a (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qt3drender**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DRender module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qt3drender`
  - Install (apt): `sudo apt install python-pyside2.qt3drender`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53drender5 (>= 5.9.0), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtcharts**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Charts module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtcharts`
  - Install (apt): `sudo apt install python-pyside2.qtcharts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5charts5 (>= 5.9.0~rc), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5widgets5 (>= 5.2.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtconcurrent**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Concurrent module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtconcurrent`
  - Install (apt): `sudo apt install python-pyside2.qtconcurrent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtcore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 core module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtcore`
  - Install (apt): `sudo apt install python-pyside2.qtcore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.9.2), libshiboken2-5.11, libstdc++6 (>= 4.9), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)
  - suggests: python-pyside2-doc

  </details>

- **python-pyside2.qtgui**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Gui module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtgui`
  - Install (apt): `sudo apt install python-pyside2.qtgui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.9.0~beta3), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qthelp**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Help module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qthelp`
  - Install (apt): `sudo apt install python-pyside2.qthelp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5help5 (>= 5.9.0), libqt5widgets5 (>= 5.6.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtlocation**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Location module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtlocation`
  - Install (apt): `sudo apt install python-pyside2.qtlocation`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5location5 (>= 5.6.0), libqt5positioning5 (>= 5.6.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtmultimedia**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Multimedia module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtmultimedia`
  - Install (apt): `sudo apt install python-pyside2.qtmultimedia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5multimedia5 (>= 5.9.0~rc), libqt5network5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtmultimediawidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 MultimediaWidgets module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtmultimediawidgets`
  - Install (apt): `sudo apt install python-pyside2.qtmultimediawidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.0.2), libqt5gui5 (>= 5.0.2), libqt5multimedia5 (>= 5.6.0~beta), libqt5multimediawidgets5 (>= 5.6.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtnetwork**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Network module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtnetwork`
  - Install (apt): `sudo apt install python-pyside2.qtnetwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5network5 (>= 5.9.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtopengl**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 OpenGL module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtopengl`
  - Install (apt): `sudo apt install python-pyside2.qtopengl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.9), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtpositioning**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Positioning module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtpositioning`
  - Install (apt): `sudo apt install python-pyside2.qtpositioning`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5positioning5 (>= 5.9.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtprintsupport**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 PrintSupport module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtprintsupport`
  - Install (apt): `sudo apt install python-pyside2.qtprintsupport`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.3.0), libqt5printsupport5 (>= 5.4.0), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtqml**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Qml module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtqml`
  - Install (apt): `sudo apt install python-pyside2.qtqml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.9.0~beta), libqt5qml5 (>= 5.9.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtquick**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Quick module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtquick`
  - Install (apt): `sudo apt install python-pyside2.qtquick`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.2.0), libqt5qml5 (>= 5.0.2), libqt5quick5 (>= 5.9.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~), qtdeclarative-abi-5-9-5

  </details>

- **python-pyside2.qtquickwidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 QuickWidgets module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtquickwidgets`
  - Install (apt): `sudo apt install python-pyside2.qtquickwidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5qml5 (>= 5.0.2), libqt5quickwidgets5 (>= 5.9.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtscript**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Script module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtscript`
  - Install (apt): `sudo apt install python-pyside2.qtscript`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.6.0~beta), libqt5script5 (>= 5.6.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtscripttools**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 ScriptTools module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtscripttools`
  - Install (apt): `sudo apt install python-pyside2.qtscripttools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5scripttools5 (>= 5.6.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtsensors**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Sensors module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtsensors`
  - Install (apt): `sudo apt install python-pyside2.qtsensors`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5sensors5 (>= 5.9.0~rc2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtsql**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Sql module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtsql`
  - Install (apt): `sudo apt install python-pyside2.qtsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5sql5 (>= 5.4.0), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtsvg**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Svg module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtsvg`
  - Install (apt): `sudo apt install python-pyside2.qtsvg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.0.2), libqt5gui5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qttest**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Test module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qttest`
  - Install (apt): `sudo apt install python-pyside2.qttest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional

  </details>

- **python-pyside2.qttexttospeech**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 TextToSpeech module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qttexttospeech`
  - Install (apt): `sudo apt install python-pyside2.qttexttospeech`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5texttospeech5 (>= 5.8.0~alpha), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtuitools**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 UiTools module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtuitools`
  - Install (apt): `sudo apt install python-pyside2.qtuitools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5widgets5 (>= 5.3.0), libshiboken2-5.11, libstdc++6 (>= 5), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtwebchannel**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebChannel module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtwebchannel`
  - Install (apt): `sudo apt install python-pyside2.qtwebchannel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.0.2), libqt5webchannel5 (>= 5.6.1), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtwebenginecore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebEngineCore module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtwebenginecore`
  - Install (apt): `sudo apt install python-pyside2.qtwebenginecore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5webenginecore5 (>= 5.9.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtwebenginewidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebEngineWidgets module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtwebenginewidgets`
  - Install (apt): `sudo apt install python-pyside2.qtwebenginewidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.3.0), libqt5webenginewidgets5 (>= 5.9.0), libqt5widgets5 (>= 5.0.2), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtwebsockets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebSockets module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtwebsockets`
  - Install (apt): `sudo apt install python-pyside2.qtwebsockets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5network5 (>= 5.0.2), libqt5websockets5 (>= 5.9.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtwidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Widgets module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtwidgets`
  - Install (apt): `sudo apt install python-pyside2.qtwidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.8.0), libqt5gui5 (>= 5.0.2), libqt5widgets5 (>= 5.9.0~beta), libshiboken2-5.11, libstdc++6 (>= 4.9), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtx11extras**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 X11Extras module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtx11extras`
  - Install (apt): `sudo apt install python-pyside2.qtx11extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.0.2), libqt5x11extras5 (>= 5.7.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtxml**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Xml module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtxml`
  - Install (apt): `sudo apt install python-pyside2.qtxml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5xml5 (>= 5.1.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2.qtxmlpatterns**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 XmlPatterns module (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2.qtxmlpatterns`
  - Install (apt): `sudo apt install python-pyside2.qtxmlpatterns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-5.11, libqt5core5a (>= 5.5.0), libqt5xmlpatterns5 (>= 5.9.0), libshiboken2-5.11, libstdc++6 (>= 4.1.1), python (<< 2.8), python (>= 2.7~), python:any (<< 2.8), python:any (>= 2.7~)

  </details>

- **python-pyside2uic**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: User Interface Compiler for PySide2 (Python 2)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python-pyside2uic`
  - Install (apt): `sudo apt install python-pyside2uic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: python:any (<< 2.8), python:any (>= 2.7.5-5~)

  </details>

- **python3-netgen**
  - Latest version: 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Automatic 3d tetrahedral mesh generator Python 3 bindings
  - Homepage: https://ngsolve.org
  - Install: `sudo apt-get install python3-netgen`
  - Install (apt): `sudo apt install python3-netgen`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.3.1), libnglib-6.2 (= 1:6.2.2006+really6.2.1905+dfsg-0~202102251943~ubuntu18.04.1), libpython3.6 (>= 3.6.5), libstdc++6 (>= 5.2), python3 (<< 3.7), python3 (>= 3.6~), python3-tk, python3:any (>= 3.3.2-2~)
  - provides: python3.6-netgen

  </details>

- **python3-pivy**
  - Latest version: 0.6.4-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Coin binding for Python 3
  - Homepage: https://bitbucket.org/Coin3D/pivy
  - Install: `sudo apt-get install python3-pivy`
  - Install (apt): `sudo apt install python3-pivy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libcoin80c, libgcc1 (>= 1:3.0), libsoqt520, libstdc++6 (>= 5), python3 (<< 3.7), python3 (>= 3.6~), python3-pyside2.qtcore, python3-pyside2.qtgui, python3-pyside2.qtopengl, python3-pyside2.qtwidgets, python3:any (>= 3.3.2-2~), shiboken2
  - provides: python3.6-pivy

  </details>

- **python3-pybind11**
  - Latest version: 2.4.3-1~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: pybind11 helper module for Python 3
  - Homepage: https://github.com/pybind/pybind11
  - Install: `sudo apt-get install python3-pybind11`
  - Install (apt): `sudo apt install python3-pybind11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Science Maintainers <debian-science-maintainers@lists.alioth.debian.org>
  - Section: python
  - Priority: optional
  - depends: pybind11-dev (= 2.4.3-1~ubuntu18.04.1), python3:any (>= 3.3.2-2~)
  - recommends: python3-numpy

  </details>

- **python3-pyside2.qt3dcore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DCore module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qt3dcore`
  - Install (apt): `sudo apt install python3-pyside2.qt3dcore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt53dcore5 (>= 5.9.5), libqt5core5a (>= 5.5.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qt3dinput**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DInput module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qt3dinput`
  - Install (apt): `sudo apt install python3-pyside2.qt3dinput`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53dinput5 (>= 5.9.0), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qt3dlogic**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DLogic module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qt3dlogic`
  - Install (apt): `sudo apt install python3-pyside2.qt3dlogic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53dlogic5 (>= 5.7.1~20161122), libqt5core5a (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qt3drender**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 3DRender module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qt3drender`
  - Install (apt): `sudo apt install python3-pyside2.qt3drender`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt53dcore5 (>= 5.7.1~20161122), libqt53drender5 (>= 5.9.0), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtcharts**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Charts module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtcharts`
  - Install (apt): `sudo apt install python3-pyside2.qtcharts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5charts5 (>= 5.9.0~rc), libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5widgets5 (>= 5.2.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtconcurrent**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Concurrent module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtconcurrent`
  - Install (apt): `sudo apt install python3-pyside2.qtconcurrent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtcore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 core module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtcore`
  - Install (apt): `sudo apt install python3-pyside2.qtcore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.9.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.9), python3 (<< 3.7), python3 (>= 3.6~)
  - suggests: python-pyside2-doc

  </details>

- **python3-pyside2.qtgui**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Gui module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtgui`
  - Install (apt): `sudo apt install python3-pyside2.qtgui`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.9.0~beta3), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qthelp**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Help module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qthelp`
  - Install (apt): `sudo apt install python3-pyside2.qthelp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5help5 (>= 5.9.0), libqt5widgets5 (>= 5.6.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtlocation**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Location module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtlocation`
  - Install (apt): `sudo apt install python3-pyside2.qtlocation`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5location5 (>= 5.6.0), libqt5positioning5 (>= 5.6.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtmultimedia**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Multimedia module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtmultimedia`
  - Install (apt): `sudo apt install python3-pyside2.qtmultimedia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5multimedia5 (>= 5.9.0~rc), libqt5network5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtmultimediawidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 MultimediaWidgets module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtmultimediawidgets`
  - Install (apt): `sudo apt install python3-pyside2.qtmultimediawidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.0.2), libqt5gui5 (>= 5.0.2), libqt5multimedia5 (>= 5.6.0~beta), libqt5multimediawidgets5 (>= 5.6.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtnetwork**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Network module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtnetwork`
  - Install (apt): `sudo apt install python3-pyside2.qtnetwork`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5network5 (>= 5.9.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtopengl**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 OpenGL module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtopengl`
  - Install (apt): `sudo apt install python3-pyside2.qtopengl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.9), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtpositioning**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Positioning module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtpositioning`
  - Install (apt): `sudo apt install python3-pyside2.qtpositioning`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5positioning5 (>= 5.9.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtprintsupport**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 PrintSupport module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtprintsupport`
  - Install (apt): `sudo apt install python3-pyside2.qtprintsupport`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.3.0), libqt5printsupport5 (>= 5.4.0), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtqml**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Qml module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtqml`
  - Install (apt): `sudo apt install python3-pyside2.qtqml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.9.0~beta), libqt5qml5 (>= 5.9.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtquick**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Quick module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtquick`
  - Install (apt): `sudo apt install python3-pyside2.qtquick`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.2.0), libqt5qml5 (>= 5.0.2), libqt5quick5 (>= 5.9.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~), qtdeclarative-abi-5-9-5

  </details>

- **python3-pyside2.qtquickwidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 QuickWidgets module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtquickwidgets`
  - Install (apt): `sudo apt install python3-pyside2.qtquickwidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5qml5 (>= 5.0.2), libqt5quickwidgets5 (>= 5.9.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtscript**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Script module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtscript`
  - Install (apt): `sudo apt install python3-pyside2.qtscript`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.6.0~beta), libqt5script5 (>= 5.6.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtscripttools**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 ScriptTools module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtscripttools`
  - Install (apt): `sudo apt install python3-pyside2.qtscripttools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5scripttools5 (>= 5.6.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtsensors**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Sensors module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtsensors`
  - Install (apt): `sudo apt install python3-pyside2.qtsensors`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5sensors5 (>= 5.9.0~rc2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtsql**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Sql module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtsql`
  - Install (apt): `sudo apt install python3-pyside2.qtsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.0.2), libqt5sql5 (>= 5.4.0), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtsvg**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Svg module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtsvg`
  - Install (apt): `sudo apt install python3-pyside2.qtsvg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.0.2), libqt5gui5 (>= 5.0.2), libqt5svg5 (>= 5.6.0~beta), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qttest**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Test module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qttest`
  - Install (apt): `sudo apt install python3-pyside2.qttest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional

  </details>

- **python3-pyside2.qttexttospeech**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 TextToSpeech module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qttexttospeech`
  - Install (apt): `sudo apt install python3-pyside2.qttexttospeech`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5texttospeech5 (>= 5.8.0~alpha), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtuitools**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 UiTools module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtuitools`
  - Install (apt): `sudo apt install python3-pyside2.qtuitools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.7.0), libqt5widgets5 (>= 5.3.0), libshiboken2-py3-5.11, libstdc++6 (>= 5), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtwebchannel**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebChannel module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtwebchannel`
  - Install (apt): `sudo apt install python3-pyside2.qtwebchannel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.0.2), libqt5webchannel5 (>= 5.6.1), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtwebenginecore**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebEngineCore module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtwebenginecore`
  - Install (apt): `sudo apt install python3-pyside2.qtwebenginecore`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5webenginecore5 (>= 5.9.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtwebenginewidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebEngineWidgets module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtwebenginewidgets`
  - Install (apt): `sudo apt install python3-pyside2.qtwebenginewidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5gui5 (>= 5.3.0), libqt5webenginewidgets5 (>= 5.9.0), libqt5widgets5 (>= 5.0.2), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtwebsockets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 WebSockets module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtwebsockets`
  - Install (apt): `sudo apt install python3-pyside2.qtwebsockets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5network5 (>= 5.0.2), libqt5websockets5 (>= 5.9.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtwidgets**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Widgets module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtwidgets`
  - Install (apt): `sudo apt install python3-pyside2.qtwidgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.8.0), libqt5gui5 (>= 5.0.2), libqt5widgets5 (>= 5.9.0~beta), libshiboken2-py3-5.11, libstdc++6 (>= 4.9), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtx11extras**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 X11Extras module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtx11extras`
  - Install (apt): `sudo apt install python3-pyside2.qtx11extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.0.2), libqt5x11extras5 (>= 5.7.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtxml**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 Xml module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtxml`
  - Install (apt): `sudo apt install python3-pyside2.qtxml`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5xml5 (>= 5.1.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2.qtxmlpatterns**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Python bindings for Qt5 XmlPatterns module (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2.qtxmlpatterns`
  - Install (apt): `sudo apt install python3-pyside2.qtxmlpatterns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libpyside2-py3-5.11, libqt5core5a (>= 5.5.0), libqt5xmlpatterns5 (>= 5.9.0), libshiboken2-py3-5.11, libstdc++6 (>= 4.1.1), python3 (<< 3.7), python3 (>= 3.6~)

  </details>

- **python3-pyside2uic**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: User Interface Compiler for PySide2 (Python 3)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install python3-pyside2uic`
  - Install (apt): `sudo apt install python3-pyside2uic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: python
  - Priority: optional
  - depends: python3:any (>= 3.3.2-2~)

  </details>


### <a id="packages-S"></a>S

- **scribus**
  - Latest version: 1.4.8-0ubuntu18.04~ppa0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - stable branch
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus`
  - Install (apt): `sudo apt install scribus`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: ghostscript, libc6 (>= 2.14), libcairo2 (>= 1.2.4), libcups2 (>= 1.4.0), libfontconfig1 (>= 2.12), libfreetype6 (>= 2.2.1), libgcc1 (>= 1:3.0), libhunspell-1.6-0, libhyphen0 (>= 2.7.1), libjpeg8 (>= 8c), liblcms2-2 (>= 2.2+git20110628), libpodofo0.9.5 (>= 0.9.5-7), libpython2.7 (>= 2.7), libqt4-network (>= 4:4.5.3), libqt4-xml (>= 4:4.5.3), libqtcore4 (>= 4:4.7.0~beta1), libqtgui4 (>= 4:4.8.0), libstdc++6 (>= 5.2), libtiff5 (>= 4.0.3), libxml2 (>= 2.7.4), python-tk, scribus-data (= 1.4.8-0ubuntu18.04~ppa0), zlib1g (>= 1:1.1.4)
  - recommends: cups-bsd, fonts-dejavu, fonts-liberation, hyphen-hyphenation-patterns, icc-profiles-free, xfonts-scalable | gsfonts-x11
  - suggests: icc-profiles, scribus-doc, scribus-template, texlive-latex-recommended

  </details>

- **scribus-data**
  - Latest version: 1.4.8-0ubuntu18.04~ppa0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - stable branch (data files)
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-data`
  - Install (apt): `sudo apt install scribus-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: python, python-tk, python:any (>= 2.7.5-5~)
  - breaks: scribus (<< 1.4.5+dfsg-1)
  - replaces: scribus (<< 1.4.5+dfsg-1)

  </details>

- **scribus-dev**
  - Latest version: 1.4.8-0ubuntu18.04~ppa0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - stable branch (development files)
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-dev`
  - Install (apt): `sudo apt install scribus-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: libdevel
  - Priority: optional
  - recommends: scribus (= 1.4.8-0ubuntu18.04~ppa0)
  - breaks: scribus (<< 1.4.5+dfsg-1)
  - replaces: scribus (<< 1.4.5+dfsg-1)

  </details>

- **scribus-doc**
  - Latest version: 1.4.8-0ubuntu18.04~ppa0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - stable branch (documentation)
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-doc`
  - Install (apt): `sudo apt install scribus-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: doc
  - Priority: optional
  - recommends: scribus (= 1.4.8-0ubuntu18.04~ppa0)

  </details>

- **scribus-ng**
  - Latest version: 1.5.5-0ubuntu18.04~ppa1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - 1.5.x branch
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-ng`
  - Install (apt): `sudo apt install scribus-ng`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: ghostscript, libc6 (>= 2.14), libcairo2 (>= 1.14.0), libcdr-0.1-1, libcups2 (>= 1.4.0), libfontconfig1 (>= 2.12), libfreehand-0.1-1, libfreetype6 (>= 2.4.2), libgcc1 (>= 1:3.0), libgraphicsmagick-q16-3 (>= 1.3.5), libharfbuzz-icu0 (>= 0.9.9), libharfbuzz0b (>= 0.9.42), libhunspell-1.6-0, libicu60 (>= 60.1-1~), libjpeg8 (>= 8c), liblcms2-2 (>= 2.2+git20110628), libmspub-0.1-1, libopenscenegraph-3.4-131, libpagemaker-0.0-0, libpodofo0.9.5 (>= 0.9.5-7), libpoppler90 (>= 0.80.0), libpython2.7 (>= 2.7), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.8.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.3.0), libqt5widgets5 (>= 5.7.0), libqt5xml5 (>= 5.1.0), libqxp-0.0-0, librevenge-0.0-0, libstdc++6 (>= 5.2), libtiff5 (>= 4.0.3), libvisio-0.1-1, libxml2 (>= 2.7.4), libzmf-0.0-0, python-tk, scribus-ng-data (= 1.5.5-0ubuntu18.04~ppa1), zlib1g (>= 1:1.2.0)
  - recommends: cups-bsd, fonts-dejavu, fonts-liberation, hyphen-hyphenation-patterns, icc-profiles-free, xfonts-scalable | gsfonts-x11
  - suggests: icc-profiles, scribus-ng-doc, scribus-template, texlive-latex-recommended

  </details>

- **scribus-ng-data**
  - Latest version: 1.5.5-0ubuntu18.04~ppa1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - data files - 1.5.x branch
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-ng-data`
  - Install (apt): `sudo apt install scribus-ng-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: python, python-tk, python:any (>= 2.7.5-5~)
  - recommends: fonts-dejavu

  </details>

- **scribus-ng-doc**
  - Latest version: 1.5.5-0ubuntu18.04~ppa1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - documentation - 1.5.x branch
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-ng-doc`
  - Install (apt): `sudo apt install scribus-ng-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: doc
  - Priority: optional
  - recommends: scribus-ng (= 1.5.5-0ubuntu18.04~ppa1)

  </details>

- **scribus-trunk**
  - Latest version: 1.5.6svn~r23206~20190923~ppa74~ubuntu18.04.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - daily build
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-trunk`
  - Install (apt): `sudo apt install scribus-trunk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: ghostscript, libc6 (>= 2.14), libcairo2 (>= 1.14.0), libcdr-0.1-1, libcups2 (>= 1.4.0), libfontconfig1 (>= 2.12), libfreehand-0.1-1, libfreetype6 (>= 2.4.2), libgcc1 (>= 1:3.0), libgraphicsmagick-q16-3 (>= 1.3.5), libharfbuzz-icu0 (>= 0.9.9), libharfbuzz0b (>= 0.9.42), libhunspell-1.6-0, libicu60 (>= 60.1-1~), libjpeg8 (>= 8c), liblcms2-2 (>= 2.2+git20110628), libmspub-0.1-1, libopenscenegraph-3.4-131, libpagemaker-0.0-0, libpodofo0.9.5 (>= 0.9.5-7), libpoppler85 (>= 0.74.0), libpython2.7 (>= 2.7), libqt5core5a (>= 5.9.0~beta), libqt5gui5 (>= 5.8.0), libqt5network5 (>= 5.0.2), libqt5opengl5 (>= 5.0.2), libqt5printsupport5 (>= 5.3.0), libqt5widgets5 (>= 5.7.0), libqt5xml5 (>= 5.1.0), libqxp-0.0-0, librevenge-0.0-0, libstdc++6 (>= 5.2), libtiff5 (>= 4.0.3), libvisio-0.1-1, libxml2 (>= 2.7.4), libzmf-0.0-0, python-tk, scribus-trunk-data (= 1.5.6svn~r23206~20190923~ppa74~ubuntu18.04.1), zlib1g (>= 1:1.2.0)
  - recommends: cups-bsd, fonts-dejavu, fonts-liberation, hyphen-hyphenation-patterns, icc-profiles-free, xfonts-scalable | gsfonts-x11
  - suggests: icc-profiles, scribus-template, scribus-trunk-doc, texlive-latex-recommended

  </details>

- **scribus-trunk-data**
  - Latest version: 1.5.6svn~r23206~20190923~ppa74~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - data files - daily build
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-trunk-data`
  - Install (apt): `sudo apt install scribus-trunk-data`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: graphics
  - Priority: optional
  - depends: python, python-tk, python:any (>= 2.7.5-5~)
  - recommends: fonts-dejavu

  </details>

- **scribus-trunk-doc**
  - Latest version: 1.5.6svn~r23206~20190923~ppa74~ubuntu18.04.1
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Open Source Desktop Page Layout - documentation - daily build
  - Homepage: https://www.scribus.net
  - Install: `sudo apt-get install scribus-trunk-doc`
  - Install (apt): `sudo apt install scribus-trunk-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Mattia Rizzolo <mattia@debian.org>
  - Section: doc
  - Priority: optional
  - recommends: scribus-trunk (= 1.5.6svn~r23206~20190923~ppa74~ubuntu18.04.1)

  </details>

- **shiboken2**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: CPython bindings generator for C++ libraries
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install shiboken2`
  - Install (apt): `sudo apt install shiboken2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.14), libclang1-6.0 (>= 1:5.0~+rc1~), libgcc1 (>= 1:3.0), libqt5core5a (>= 5.9.0~beta), libqt5xmlpatterns5 (>= 5.0.2), libstdc++6 (>= 4.9), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25)

  </details>

- **shiboken2-doc**
  - Latest version: 5.11.2-0ppa2~ubuntu18.04
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: CPython bindings generator for C++ libraries (common documentation)
  - Homepage: https://wiki.qt.io/Qt_for_Python
  - Install: `sudo apt-get install shiboken2-doc`
  - Install (apt): `sudo apt install shiboken2-doc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Debian Qt/KDE Maintainers <debian-qt-kde@lists.debian.org>
  - Section: doc
  - Priority: optional
  - depends: libjs-sphinxdoc (>= 1.0)

  </details>

- **signal-desktop**
  - Latest version: 1.40.1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop`
  - Install (apt): `sudo apt install signal-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Open Whisper Systems <support@signal.org>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libnotify4, libnss3, libxss1, libxtst6

  </details>

- **signal-desktop**
  - Latest version: 1.29.3
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop`
  - Install (apt): `sudo apt install signal-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Open Whisper Systems <support@signal.org>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libnotify4, libnss3, libxss1, libxtst6

  </details>

- **signal-desktop**
  - Latest version: 1.29.6
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop`
  - Install (apt): `sudo apt install signal-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Open Whisper Systems <support@signal.org>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libnotify4, libnss3, libxss1, libxtst6

  </details>

- **signal-desktop**
  - Latest version: 1.29.6
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop`
  - Install (apt): `sudo apt install signal-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Open Whisper Systems <support@signal.org>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libnotify4, libnss3, libxss1, libxtst6

  </details>

- **slack-desktop**
  - Latest version: 4.33.90
  - Architectures: amd64
  - Suite: bionic
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

- **slack-desktop**
  - Latest version: 4.2.0
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Slack Desktop
  - Install: `sudo apt-get install slack-desktop`
  - Install (apt): `sudo apt install slack-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Slack Technologies <feedback@slack.com>
  - Section: misc
  - Priority: optional
  - depends: apt-transport-https, gconf-service, gconf2, gvfs-bin, libappindicator1, libcurl3 | libcurl4, libgcrypt11 | libgcrypt20, libgtk2.0-0, libnotify4, libnss3, libsecret-1-0, libudev0 | libudev1, libxss1, libxtst6, python, xdg-utils

  </details>

- **slack-desktop**
  - Latest version: 4.4.2
  - Architectures: amd64
  - Suite: eoan
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

- **slack-desktop**
  - Latest version: 4.33.90
  - Architectures: amd64
  - Suite: focal
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

- **slack-desktop**
  - Latest version: 4.4.2
  - Architectures: amd64
  - Suite: groovy
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

- **slack-desktop**
  - Latest version: 4.33.90
  - Architectures: amd64
  - Suite: hirsute
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

- **slack-desktop**
  - Latest version: 4.33.90
  - Architectures: amd64
  - Suite: impish
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

- **spotify-client**
  - Latest version: 1:1.1.10.546.ge08ef575-19
  - Architectures: amd64
  - Suite: bionic
  - Components: main
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

- **spotify-client**
  - Latest version: 1:1.1.10.546.ge08ef575-19
  - Architectures: amd64
  - Suite: disco
  - Components: main
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

- **spotify-client**
  - Latest version: 1:1.1.10.546.ge08ef575-19
  - Architectures: amd64
  - Suite: eoan
  - Components: main
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

- **spotify-client**
  - Latest version: 1:1.1.10.546.ge08ef575-19
  - Architectures: amd64
  - Suite: focal
  - Components: main
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

- **system76-cuda**
  - Latest version: 0pop2
  - Architectures: amd64
  - Suite: bionic
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: disco
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: eoan
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: focal
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: groovy
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-cuda**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: impish
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

- **system76-cuda-10.0**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.0`
  - Install (apt): `sudo apt install system76-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.0**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.0`
  - Install (apt): `sudo apt install system76-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.0**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.0`
  - Install (apt): `sudo apt install system76-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.0**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.0`
  - Install (apt): `sudo apt install system76-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.0**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.0`
  - Install (apt): `sudo apt install system76-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.1**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.1`
  - Install (apt): `sudo apt install system76-cuda-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.1**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.1`
  - Install (apt): `sudo apt install system76-cuda-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.1**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.1`
  - Install (apt): `sudo apt install system76-cuda-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.1**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.1`
  - Install (apt): `sudo apt install system76-cuda-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.2**
  - Latest version: 0pop0
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.2`
  - Install (apt): `sudo apt install system76-cuda-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-10.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.2`
  - Install (apt): `sudo apt install system76-cuda-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: g++-8, system76-cuda

  </details>

- **system76-cuda-10.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA 10 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-10.2`
  - Install (apt): `sudo apt install system76-cuda-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: g++-8, system76-cuda

  </details>

- **system76-cuda-11.1**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: focal
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

- **system76-cuda-11.1**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: groovy
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

- **system76-cuda-11.1**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-cuda-11.1**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: impish
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
  - Suite: focal
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

- **system76-cuda-11.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: groovy
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

- **system76-cuda-11.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-cuda-11.2**
  - Latest version: 0pop1
  - Architectures: amd64
  - Suite: impish
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

- **system76-cuda-9.0**
  - Latest version: 0pop3
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA 9.0 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-9.0`
  - Install (apt): `sudo apt install system76-cuda-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-9.1**
  - Latest version: 0pop3
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA 9.1 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-9.1`
  - Install (apt): `sudo apt install system76-cuda-9.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-9.2**
  - Latest version: 0pop3
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA 9.2 Compiler / Libraries / Toolkit
  - Install: `sudo apt-get install system76-cuda-9.2`
  - Install (apt): `sudo apt install system76-cuda-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda

  </details>

- **system76-cuda-latest**
  - Latest version: 10.1~18.04
  - Architectures: all
  - Suite: bionic
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
  - depends: system76-cuda-10.1

  </details>

- **system76-cuda-latest**
  - Latest version: 10.1~19.04
  - Architectures: all
  - Suite: disco
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
  - depends: system76-cuda-10.1

  </details>

- **system76-cuda-latest**
  - Latest version: 10.1~19.10
  - Architectures: all
  - Suite: eoan
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
  - depends: system76-cuda-10.2

  </details>

- **system76-cuda-latest**
  - Latest version: 11.2~20.04
  - Architectures: all
  - Suite: focal
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

- **system76-cuda-latest**
  - Latest version: 11.2~20.10
  - Architectures: all
  - Suite: groovy
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

- **system76-cuda-latest**
  - Latest version: 11.2~20.10
  - Architectures: all
  - Suite: hirsute
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

- **system76-cuda-latest**
  - Latest version: 11.2~20.10
  - Architectures: all
  - Suite: impish
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

- **system76-cudnn-10.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.0
  - Install: `sudo apt-get install system76-cudnn-10.0`
  - Install (apt): `sudo apt install system76-cudnn-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.0

  </details>

- **system76-cudnn-10.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.0
  - Install: `sudo apt-get install system76-cudnn-10.0`
  - Install (apt): `sudo apt install system76-cudnn-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.0

  </details>

- **system76-cudnn-10.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.0
  - Install: `sudo apt-get install system76-cudnn-10.0`
  - Install (apt): `sudo apt install system76-cudnn-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.0

  </details>

- **system76-cudnn-10.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.0
  - Install: `sudo apt-get install system76-cudnn-10.0`
  - Install (apt): `sudo apt install system76-cudnn-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.0

  </details>

- **system76-cudnn-10.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.0
  - Install: `sudo apt-get install system76-cudnn-10.0`
  - Install (apt): `sudo apt install system76-cudnn-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.0

  </details>

- **system76-cudnn-10.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.1
  - Install: `sudo apt-get install system76-cudnn-10.1`
  - Install (apt): `sudo apt install system76-cudnn-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.1

  </details>

- **system76-cudnn-10.1**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.1
  - Install: `sudo apt-get install system76-cudnn-10.1`
  - Install (apt): `sudo apt install system76-cudnn-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.1

  </details>

- **system76-cudnn-10.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.2
  - Install: `sudo apt-get install system76-cudnn-10.1`
  - Install (apt): `sudo apt install system76-cudnn-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.1

  </details>

- **system76-cudnn-10.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.2
  - Install: `sudo apt-get install system76-cudnn-10.1`
  - Install (apt): `sudo apt install system76-cudnn-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.1

  </details>

- **system76-cudnn-10.2**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.2
  - Install: `sudo apt-get install system76-cudnn-10.2`
  - Install (apt): `sudo apt install system76-cudnn-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.2

  </details>

- **system76-cudnn-10.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.2
  - Install: `sudo apt-get install system76-cudnn-10.2`
  - Install (apt): `sudo apt install system76-cudnn-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.2

  </details>

- **system76-cudnn-10.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 10.2
  - Install: `sudo apt-get install system76-cudnn-10.2`
  - Install (apt): `sudo apt install system76-cudnn-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-10.2

  </details>

- **system76-cudnn-11.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: focal
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

- **system76-cudnn-11.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: groovy
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

- **system76-cudnn-11.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-cudnn-11.1**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: impish
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
  - Suite: focal
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

- **system76-cudnn-11.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: groovy
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

- **system76-cudnn-11.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-cudnn-11.2**
  - Latest version: 8.0.4
  - Architectures: amd64
  - Suite: impish
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

- **system76-cudnn-9.0**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 9.0
  - Install: `sudo apt-get install system76-cudnn-9.0`
  - Install (apt): `sudo apt install system76-cudnn-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-9.0

  </details>

- **system76-cudnn-9.1**
  - Latest version: 7.1.2~0pop1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 9.1
  - Install: `sudo apt-get install system76-cudnn-9.1`
  - Install (apt): `sudo apt install system76-cudnn-9.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-9.1

  </details>

- **system76-cudnn-9.2**
  - Latest version: 7.6.5
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: NVIDIA CUDA Deep Neural Network library (cuDNN) for CUDA 9.2
  - Install: `sudo apt-get install system76-cudnn-9.2`
  - Install (apt): `sudo apt install system76-cudnn-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: system76-cuda-9.2

  </details>

- **system76-nccl-10.0**
  - Latest version: 2.5.6-2
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.0`
  - Install (apt): `sudo apt install system76-nccl-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.0

  </details>

- **system76-nccl-10.0**
  - Latest version: 2.5.6-2
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.0`
  - Install (apt): `sudo apt install system76-nccl-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.0

  </details>

- **system76-nccl-10.0**
  - Latest version: 2.7.8-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.0`
  - Install (apt): `sudo apt install system76-nccl-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.0

  </details>

- **system76-nccl-10.0**
  - Latest version: 2.7.8-1
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.0`
  - Install (apt): `sudo apt install system76-nccl-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.0

  </details>

- **system76-nccl-10.1**
  - Latest version: 2.5.6-2
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.1`
  - Install (apt): `sudo apt install system76-nccl-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.1

  </details>

- **system76-nccl-10.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.1`
  - Install (apt): `sudo apt install system76-nccl-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.1

  </details>

- **system76-nccl-10.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.1`
  - Install (apt): `sudo apt install system76-nccl-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-7, system76-cuda-10.1

  </details>

- **system76-nccl-10.2**
  - Latest version: 2.5.6-2
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.2`
  - Install (apt): `sudo apt install system76-nccl-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-8, system76-cuda-10.2

  </details>

- **system76-nccl-10.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.2`
  - Install (apt): `sudo apt install system76-nccl-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-8, system76-cuda-10.2

  </details>

- **system76-nccl-10.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: groovy
  - Components: main
  - Description: Optimized primitives for collective multi-GPU communication.
  - Install: `sudo apt-get install system76-nccl-10.2`
  - Install (apt): `sudo apt install system76-nccl-10.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: build-essential, g++-8, system76-cuda-10.2

  </details>

- **system76-nccl-11.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: focal
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

- **system76-nccl-11.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: groovy
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

- **system76-nccl-11.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-nccl-11.1**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: impish
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
  - Suite: focal
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

- **system76-nccl-11.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: groovy
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

- **system76-nccl-11.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: hirsute
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

- **system76-nccl-11.2**
  - Latest version: 2.8.3-1
  - Architectures: amd64
  - Suite: impish
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


### <a id="packages-T"></a>T

- **tensorflow-1.13-cpu**
  - Latest version: 1.13.1~0pop2
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: An open source machine learning framework
  - Install: `sudo apt-get install tensorflow-1.13-cpu`
  - Install (apt): `sudo apt install tensorflow-1.13-cpu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: autoconf, autogen, build-essential, cmake, curl, g++-7, git, libtool, mlocate, python, python3-dev, python3-keras (>= 2.2.2), python3-keras-applications (>= 1.0.5), python3-keras-preprocessing (>= 1.0.3), python3-numpy, python3-pip, python3-setuptools, python3-wheel, unzip, wget, zlib1g-dev

  </details>

- **tensorflow-1.13-cpu**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-1.13-cpu`
  - Install (apt): `sudo apt install tensorflow-1.13-cpu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorman

  </details>

- **tensorflow-1.13-cuda-10.0**
  - Latest version: 1.13.1~0pop3
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: An open source machine learning framework
  - Install: `sudo apt-get install tensorflow-1.13-cuda-10.0`
  - Install (apt): `sudo apt install tensorflow-1.13-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: autoconf, autogen, build-essential, cmake, curl, g++-8, git, libtool, mlocate, python, python3-dev, python3-keras (>= 2.2.2), python3-keras-applications (>= 1.0.5), python3-keras-preprocessing (>= 1.0.3), python3-numpy, python3-pip, python3-setuptools, python3-wheel, system76-cudnn-10.0, system76-nccl-10.0, unzip, wget, zlib1g-dev

  </details>

- **tensorflow-1.13-cuda-10.0**
  - Latest version: 2.0~19.10
  - Architectures: all, amd64
  - Suite: eoan
  - Components: main
  - Description: An open source machine learning framework
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-1.13-cuda-10.0`
  - Install (apt): `sudo apt install tensorflow-1.13-cuda-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: autoconf, autogen, build-essential, cmake, curl, g++-8, git, libtool, mlocate, nvidia-container-runtime, python, python3-dev, python3-keras (>= 2.2.2), python3-keras-applications (>= 1.0.5), python3-keras-preprocessing (>= 1.0.3), python3-numpy, python3-pip, python3-setuptools, python3-wheel, system76-cudnn-10.0, system76-nccl-10.0, tensorman, unzip, wget, zlib1g-dev

  </details>

- **tensorflow-1.13-cuda-10.1**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-1.13-cuda-10.1`
  - Install (apt): `sudo apt install tensorflow-1.13-cuda-10.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: nvidia-container-runtime, tensorman

  </details>

- **tensorflow-1.13-cuda-9.2**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-1.13-cuda-9.2`
  - Install (apt): `sudo apt install tensorflow-1.13-cuda-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: nvidia-container-runtime, tensorman

  </details>

- **tensorflow-1.9-cpu**
  - Latest version: 0pop2
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: An open source machine learning framework
  - Install: `sudo apt-get install tensorflow-1.9-cpu`
  - Install (apt): `sudo apt install tensorflow-1.9-cpu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: autoconf, autogen, build-essential, cmake, curl, g++-7, git, libtool, mlocate, python, python3-dev, python3-numpy, python3-pip, python3-setuptools, python3-wheel, unzip, wget, zlib1g-dev

  </details>

- **tensorflow-1.9-cpu**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-1.9-cpu`
  - Install (apt): `sudo apt install tensorflow-1.9-cpu`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorman

  </details>

- **tensorflow-1.9-cuda-9.2**
  - Latest version: 0pop1ubuntu1
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: An open source machine learning framework
  - Install: `sudo apt-get install tensorflow-1.9-cuda-9.2`
  - Install (apt): `sudo apt install tensorflow-1.9-cuda-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: devel
  - Priority: optional
  - depends: autoconf, autogen, build-essential, cmake, curl, g++-7, git, libtool, mlocate, python, python3-dev, python3-numpy, python3-pip, python3-setuptools, python3-wheel, system76-cudnn-9.2, unzip, wget, zlib1g-dev

  </details>

- **tensorflow-cpu-latest**
  - Latest version: 1.9bionic~pop0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Metapackage for the latest version of TensorFlow built without CUDA support
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cpu-latest`
  - Install (apt): `sudo apt install tensorflow-cpu-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorflow-1.9-cpu

  </details>

- **tensorflow-cpu-latest**
  - Latest version: 1.13~19.04
  - Architectures: all
  - Suite: disco
  - Components: main
  - Description: Metapackage for the latest version of TensorFlow built without CUDA support
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cpu-latest`
  - Install (apt): `sudo apt install tensorflow-cpu-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorflow-1.13-cpu

  </details>

- **tensorflow-cpu-latest**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cpu-latest`
  - Install (apt): `sudo apt install tensorflow-cpu-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorman

  </details>

- **tensorflow-cpu-latest**
  - Latest version: 2.0~20.04
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cpu-latest`
  - Install (apt): `sudo apt install tensorflow-cpu-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorman

  </details>

- **tensorflow-cuda-latest**
  - Latest version: 1.9cosmic~pop0
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Metapackage for the latest version of TensorFlow built against the latest version of the CUDA Toolkit
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cuda-latest`
  - Install (apt): `sudo apt install tensorflow-cuda-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorflow-1.9-cuda-9.2

  </details>

- **tensorflow-cuda-latest**
  - Latest version: 1.13~19.04
  - Architectures: all
  - Suite: disco
  - Components: main
  - Description: Metapackage for the latest version of TensorFlow built against the latest version of the CUDA Toolkit
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cuda-latest`
  - Install (apt): `sudo apt install tensorflow-cuda-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: tensorflow-1.13-cuda-10.0

  </details>

- **tensorflow-cuda-latest**
  - Latest version: 2.0~19.10
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cuda-latest`
  - Install (apt): `sudo apt install tensorflow-cuda-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: nvidia-container-runtime, tensorman

  </details>

- **tensorflow-cuda-latest**
  - Latest version: 2.0~20.04
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: Transitional package for tensorman
  - Homepage: https://www.tensorflow.org/
  - Install: `sudo apt-get install tensorflow-cuda-latest`
  - Install (apt): `sudo apt install tensorflow-cuda-latest`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Michael Aaron Murphy <michael@system76.com>
  - Section: metapackages
  - Priority: optional
  - depends: nvidia-container-runtime, tensorman

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
  - Suite: bionic
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

- **vivaldi-stable**
  - Latest version: 5.6.2867.58-1
  - Architectures: amd64
  - Suite: focal
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

- **vivaldi-stable**
  - Latest version: 5.6.2867.58-1
  - Architectures: amd64
  - Suite: hirsute
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

- **vivaldi-stable**
  - Latest version: 5.6.2867.58-1
  - Architectures: amd64
  - Suite: impish
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


### <a id="packages-W"></a>W

- **wire-desktop**
  - Latest version: 3.11.2912-2912
  - Architectures: amd64
  - Suite: bionic
  - Components: main
  - Description: (no description)
  - Homepage: https://wire.com
  - Install: `sudo apt-get install wire-desktop`
  - Install (apt): `sudo apt install wire-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Wire Swiss <wireapp@wire.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libgconf-2-4, libnotify-bin, libnss3, libxss1

  </details>

- **wire-desktop**
  - Latest version: 3.11.2912-2912
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: (no description)
  - Homepage: https://wire.com
  - Install: `sudo apt-get install wire-desktop`
  - Install (apt): `sudo apt install wire-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Wire Swiss <wireapp@wire.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libgconf-2-4, libnotify-bin, libnss3, libxss1

  </details>

- **wire-desktop**
  - Latest version: 3.11.2912-2912
  - Architectures: amd64
  - Suite: eoan
  - Components: main
  - Description: (no description)
  - Homepage: https://wire.com
  - Install: `sudo apt-get install wire-desktop`
  - Install (apt): `sudo apt install wire-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Wire Swiss <wireapp@wire.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libgconf-2-4, libnotify-bin, libnss3, libxss1

  </details>

- **wire-desktop**
  - Latest version: 3.11.2912-2912
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: (no description)
  - Homepage: https://wire.com
  - Install: `sudo apt-get install wire-desktop`
  - Install (apt): `sudo apt install wire-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Wire Swiss <wireapp@wire.com>
  - Section: default
  - Priority: extra
  - depends: libappindicator1, libasound2, libgconf-2-4, libnotify-bin, libnss3, libxss1

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
- apt-get update failed
- Packages index not listed in Release
- apt-get update failed
- Packages index not listed in Release
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: popos, ubuntu-derivative, apt
- Key tags: popos, apt
