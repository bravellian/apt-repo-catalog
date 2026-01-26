# 1Password for Linux (amd64)

## Repository
- Repository ID: `1password-linux-amd64`
- Base URL: `https://downloads.1password.com/linux/debian/amd64`
- Host: `downloads.1password.com`

## Upstream documentation
- Documentation URL: https://support.1password.com/install-linux/
- Key documentation URL: https://support.1password.com/install-linux/

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: amd64
  - Observed OSes: generic

## Key reference
- Key ID: `1password`
- Expected fingerprints:
  - 3FEF9748469ADBE15DA7CA80AC2D62742012EA22
- Key source URL: https://downloads.1password.com/linux/keys/1password.asc

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/1password.asc | gpg --dearmor | sudo tee /usr/share/keyrings/1password.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/1password.gpg] https://downloads.1password.com/linux/debian/amd64 stable main" | sudo tee /etc/apt/sources.list.d/1password-linux-amd64-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/1password.asc -o /tmp/1password.asc
gpg --dearmor /tmp/1password.asc
sudo install -m 0644 /tmp/1password.gpg /usr/share/keyrings/1password.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/1password.gpg] https://downloads.1password.com/linux/debian/amd64 stable main" | sudo tee /etc/apt/sources.list.d/1password-linux-amd64-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (2)</summary>

<div class="packages-nav">
<a href="#packages-#">#</a>
</div>


### <a id="packages-#"></a>#

- **1password**
  - Latest version: 8.12.0
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: (no description)
  - Homepage: https://1password.com
  - Install: `sudo apt-get install 1password`
  - Install (apt): `sudo apt install 1password`
  <details>
  <summary>More metadata</summary>

  - Maintainer: 1Password <support@1password.com>
  - Section: default
  - Priority: optional
  - depends: curl, gnupg2, libasound2, libatk-bridge2.0-0, libatk1.0-0, libc6 (>= 2.27), libcurl4, libdrm2, libgbm1, libgtk-3-0, libnotify4, libnss3, libudev1, libxcb-shape0, libxcb-xfixes0, libxshmfence1, xdg-utils
  - recommends: libappindicator1, libappindicator3-1

  </details>

- **1password-cli**
  - Latest version: 2.32.0-3
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: The official 1Password command-line tool.
  - Homepage: https://agilebits.com/
  - Install: `sudo apt-get install 1password-cli`
  - Install (apt): `sudo apt install 1password-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: 1Password <support@1password.com>

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install 1password
- Repo tags: security, secrets
- Key notes: 1Password for Linux APT key
- Key tags: security, secrets
