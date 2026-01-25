# Brave Browser (Stable) (ubuntu-22.04)

## Repository
- Repository ID: `brave-browser`
- OS: `ubuntu-22.04`
- Source: `[arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main`

## Upstream documentation
- Documentation URL: https://brave.com/linux/
- Key documentation URL: https://brave.com/linux/

## Key reference
- Key ID: `brave-browser`
- Expected fingerprints:
  - 47D32A74E9A9E013A4B4926C68D513D36A73CD96
  - B2A3DCA350E67256740DF904DE4EC67BE4B0DCA0
  - DBF1A116C220B8C7164F98230686B78420038257
- Key source URL: https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc | gpg --dearmor | sudo tee /usr/share/keyrings/brave-browser.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/brave-browser.gpg] [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/brave-browser.asc -o /tmp/brave-browser.asc
gpg --dearmor /tmp/brave-browser.asc
sudo install -m 0644 /tmp/brave-browser.gpg /usr/share/keyrings/brave-browser.gpg
echo "deb [signed-by=/usr/share/keyrings/brave-browser.gpg] [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (2)</summary>

<div class="packages-nav">
<a href="#packages-B">B</a>
</div>


### <a id="packages-B"></a>B

- **brave-browser**
  - Latest version: 1.86.142
  - Architectures: amd64
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


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Official Brave browser APT repository for 64-bit
- Repo tags: web browser, privacy
- Key notes: Brave browser repository signing key
- Key tags: web browser, privacy
