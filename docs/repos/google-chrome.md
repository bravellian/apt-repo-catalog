# Google Chrome (Stable) (ubuntu-22.04)

## Repository
- Repository ID: `google-chrome`
- OS: `ubuntu-22.04`
- Source: `[arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main`

## Upstream documentation
- Documentation URL: https://www.google.com/linuxrepositories/
- Key documentation URL: https://www.google.com/linuxrepositories/

## Key reference
- Key ID: `google-linux`
- Expected fingerprints:
  - EB4C1BFD4F042F6DDDCCEC917721F63BD38B4796
- Key source URL: https://dl.google.com/linux/linux_signing_key.pub

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-linux.asc | gpg --dearmor | sudo tee /usr/share/keyrings/google-linux.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/google-linux.gpg] [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google-chrome.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-linux.asc -o /tmp/google-linux.asc
gpg --dearmor /tmp/google-linux.asc
sudo install -m 0644 /tmp/google-linux.gpg /usr/share/keyrings/google-linux.gpg
echo "deb [signed-by=/usr/share/keyrings/google-linux.gpg] [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | sudo tee /etc/apt/sources.list.d/google-chrome.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (4)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a>
</div>


### <a id="packages-G"></a>G

- **google-chrome-beta**
  - Latest version: 145.0.7632.18-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-beta`
  - Install (apt): `sudo apt install google-chrome-beta`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>

- **google-chrome-canary**
  - Latest version: 146.0.7651.0-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-canary`
  - Install (apt): `sudo apt install google-chrome-canary`
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
  - Suite: stable
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

- **google-chrome-unstable**
  - Latest version: 146.0.7647.3-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: The web browser from Google
  - Install: `sudo apt-get install google-chrome-unstable`
  - Install (apt): `sudo apt install google-chrome-unstable`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Chrome Linux Team <chromium-dev@chromium.org>
  - Section: web
  - Priority: optional
  - depends: ca-certificates, fonts-liberation, libasound2 (>= 1.0.17), libatk-bridge2.0-0 (>= 2.5.3), libatk1.0-0 (>= 2.11.90), libatspi2.0-0 (>= 2.9.90), libc6 (>= 2.25), libcairo2 (>= 1.6.0), libcups2 (>= 1.6.0), libcurl3-gnutls | libcurl3-nss | libcurl4 | libcurl3, libdbus-1-3 (>= 1.9.14), libexpat1 (>= 2.1~beta3), libgbm1 (>= 17.1.0~rc2), libglib2.0-0 (>= 2.39.4), libgtk-3-0 (>= 3.9.10) | libgtk-4-1, libnspr4 (>= 2:4.9-2~), libnss3 (>= 2:3.35), libpango-1.0-0 (>= 1.14.0), libudev1 (>= 183), libvulkan1, libx11-6 (>= 2:1.4.99.1), libxcb1 (>= 1.9.2), libxcomposite1 (>= 1:0.4.4-1), libxdamage1 (>= 1:1.1), libxext6, libxfixes3, libxkbcommon0 (>= 0.5.0), libxrandr2, wget, xdg-utils (>= 1.0.2)
  - preDepends: dpkg (>= 1.14.0)
  - provides: www-browser

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Google Chrome browser APT repository (64-bit)
- Repo tags: web browser
- Key notes: Google’s global Linux repo signing key (for Chrome, etc.)
- Key tags: web browser
