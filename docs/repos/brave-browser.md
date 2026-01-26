# Brave Browser (Stable)

## Repository
- Repository ID: `brave-browser`
- Base URL: `https://brave-browser-apt-release.s3.brave.com`
- Host: `brave-browser-apt-release.s3.brave.com`

## Upstream documentation
- Documentation URL: https://brave.com/linux/
- Key documentation URL: https://brave.com/linux/

## Suites
- Suite: `artful`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-17.10
- Suite: `bionic`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-18.04
- Suite: `bullseye`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-10
- Suite: `cosmic`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-18.10
- Suite: `disco`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-19.04
- Suite: `eoan`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-19.10
- Suite: `focal`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-20.04
- Suite: `jessie`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-8
- Suite: `stretch`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-9
- Suite: `trusty`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-14.04
- Suite: `xenial`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-16.04
- Suite: `yakkety`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-16.10
- Suite: `zesty`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-17.04
- Suite: `stable`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-22.04

## Key reference
- Key ID: `brave-browser`
- Expected fingerprints:
  - 47D32A74E9A9E013A4B4926C68D513D36A73CD96
  - B2A3DCA350E67256740DF904DE4EC67BE4B0DCA0
  - DBF1A116C220B8C7164F98230686B78420038257
- Key source URL: https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

## Install instructions

### Suite: artful

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com artful main" | sudo tee /etc/apt/sources.list.d/brave-browser-artful.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com artful main" | sudo tee /etc/apt/sources.list.d/brave-browser-artful.list >/dev/null
sudo apt-get update
```

### Suite: bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com bionic main" | sudo tee /etc/apt/sources.list.d/brave-browser-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com bionic main" | sudo tee /etc/apt/sources.list.d/brave-browser-bionic.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com bullseye main" | sudo tee /etc/apt/sources.list.d/brave-browser-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com bullseye main" | sudo tee /etc/apt/sources.list.d/brave-browser-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com buster main" | sudo tee /etc/apt/sources.list.d/brave-browser-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com buster main" | sudo tee /etc/apt/sources.list.d/brave-browser-buster.list >/dev/null
sudo apt-get update
```

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com cosmic main" | sudo tee /etc/apt/sources.list.d/brave-browser-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com cosmic main" | sudo tee /etc/apt/sources.list.d/brave-browser-cosmic.list >/dev/null
sudo apt-get update
```

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com disco main" | sudo tee /etc/apt/sources.list.d/brave-browser-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com disco main" | sudo tee /etc/apt/sources.list.d/brave-browser-disco.list >/dev/null
sudo apt-get update
```

### Suite: eoan

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com eoan main" | sudo tee /etc/apt/sources.list.d/brave-browser-eoan.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com eoan main" | sudo tee /etc/apt/sources.list.d/brave-browser-eoan.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com focal main" | sudo tee /etc/apt/sources.list.d/brave-browser-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com focal main" | sudo tee /etc/apt/sources.list.d/brave-browser-focal.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com jessie main" | sudo tee /etc/apt/sources.list.d/brave-browser-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com jessie main" | sudo tee /etc/apt/sources.list.d/brave-browser-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com stretch main" | sudo tee /etc/apt/sources.list.d/brave-browser-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com stretch main" | sudo tee /etc/apt/sources.list.d/brave-browser-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com trusty main" | sudo tee /etc/apt/sources.list.d/brave-browser-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com trusty main" | sudo tee /etc/apt/sources.list.d/brave-browser-trusty.list >/dev/null
sudo apt-get update
```

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com xenial main" | sudo tee /etc/apt/sources.list.d/brave-browser-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com xenial main" | sudo tee /etc/apt/sources.list.d/brave-browser-xenial.list >/dev/null
sudo apt-get update
```

### Suite: yakkety

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com yakkety main" | sudo tee /etc/apt/sources.list.d/brave-browser-yakkety.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com yakkety main" | sudo tee /etc/apt/sources.list.d/brave-browser-yakkety.list >/dev/null
sudo apt-get update
```

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com zesty main" | sudo tee /etc/apt/sources.list.d/brave-browser-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com zesty main" | sudo tee /etc/apt/sources.list.d/brave-browser-zesty.list >/dev/null
sudo apt-get update
```

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/brave-browser.gpg] https://brave-browser-apt-release.s3.brave.com stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (30)</summary>

<div class="packages-nav">
<a href="#packages-B">B</a>
</div>


### <a id="packages-B"></a>B

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: artful
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: bionic
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: buster
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: cosmic
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: disco
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: eoan
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.0.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support+laptop@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libappindicator3-1, libasound2 (>= 1.0.16), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.18), libcairo2 (>= 1.6.0), libcups2 (>= 1.4.0), libdbus-1-3 (>= 1.5.12), libexpat1 (>= 2.0.1), libgcc1 (>= 1:4.2), libgdk-pixbuf2.0-0 (>= 2.22.0), libglib2.0-0 (>= 2.31.8), libgtk-3-0 (>= 3.9.10), libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.22), libpango-1.0-0 (>= 1.14.0), libpangocairo-1.0-0 (>= 1.14.0), libuuid1 (>= 2.16), libx11-6 (>= 2:1.4.99.1), libx11-xcb1, libxcb1 (>= 1.6), libxcomposite1 (>= 1:0.3-1), libxcursor1 (>> 1.1.2), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxfixes3 (>= 1:5.0), libxi6 (>= 2:1.2.99.4), libxrandr2 (>= 2:1.2.99.3), libxrender1, libxss1, libxtst6, lsb-release, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - recommends: libu2f-udev
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: jessie
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: stretch
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: trusty
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: xenial
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: yakkety
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: zesty
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: The web browser from Brave
  - Install: `sudo apt-get install brave-browser`
  - Install (apt): `sudo apt install brave-browser`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Section: web
  - Priority: optional
  - depends: brave-keyring, ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatk1.0-0 (>= 2.2.0), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcups2 (>= 1.7.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libdrm2 (>= 2.4.75), libexpat1 (>= 2.0.1), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libgcc-s1 (>= 4.2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.31), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libu2f-udev, libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: artful
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: bionic
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: bullseye
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: buster
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: cosmic
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: disco
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: eoan
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.7
  - Architectures: all
  - Suite: focal
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ben Kero <bkero@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: jessie
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: stretch
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: trusty
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: xenial
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: yakkety
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: zesty
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

  </details>

- **brave-keyring**
  - Latest version: 1.19
  - Architectures: all
  - Suite: stable
  - Components: main
  - Description: Brave Browser keyring and repository files
  - Install: `sudo apt-get install brave-keyring`
  - Install (apt): `sudo apt install brave-keyring`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Brave Software <support@brave.com>
  - Priority: optional
  - depends: gnupg, procps

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
- Repo notes: Official Brave browser APT repository for 64-bit
- Repo tags: web browser, privacy
- Key notes: Brave browser repository signing key
- Key tags: web browser, privacy
