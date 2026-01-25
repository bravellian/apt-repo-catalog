# Signal Desktop (ubuntu-22.04)

## Repository
- Repository ID: `signal-desktop`
- OS: `ubuntu-22.04`
- Source: `[arch=amd64] https://updates.signal.org/desktop/apt xenial main`

## Upstream documentation
- Documentation URL: https://signal.org/download/
- Key documentation URL: https://signal.org/download/

## Key reference
- Key ID: `signal-desktop`
- Expected fingerprints:
  - DBA36B5181D0C816F630E889D980A17457F6FB06
- Key source URL: https://updates.signal.org/desktop/apt/keys.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/signal-desktop.asc | gpg --dearmor | sudo tee /usr/share/keyrings/signal-desktop.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/signal-desktop.gpg] [arch=amd64] https://updates.signal.org/desktop/apt xenial main" | sudo tee /etc/apt/sources.list.d/signal-desktop.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/signal-desktop.asc -o /tmp/signal-desktop.asc
gpg --dearmor /tmp/signal-desktop.asc
sudo install -m 0644 /tmp/signal-desktop.gpg /usr/share/keyrings/signal-desktop.gpg
echo "deb [signed-by=/usr/share/keyrings/signal-desktop.gpg] [arch=amd64] https://updates.signal.org/desktop/apt xenial main" | sudo tee /etc/apt/sources.list.d/signal-desktop.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (2)</summary>

<div class="packages-nav">
<a href="#packages-S">S</a>
</div>


### <a id="packages-S"></a>S

- **signal-desktop**
  - Latest version: 7.86.0
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop`
  - Install (apt): `sudo apt install signal-desktop`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Signal Messenger, LLC <support@signal.org>
  - Section: default
  - Priority: optional
  - depends: libasound2, libc6 (>= 2.28), libc6 (>= 2.31), libgbm1, libgtk-3-0, libnotify4, libnss3, libpulse0, libx11-xcb1, libxss1, libxtst6
  - recommends: libappindicator3-1

  </details>

- **signal-desktop-beta**
  - Latest version: 7.87.0~beta.2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: (no description)
  - Homepage: https://github.com/signalapp/Signal-Desktop#readme
  - Install: `sudo apt-get install signal-desktop-beta`
  - Install (apt): `sudo apt install signal-desktop-beta`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Signal Messenger, LLC <support@signal.org>
  - Section: default
  - Priority: optional
  - depends: libasound2, libc6 (>= 2.28), libc6 (>= 2.31), libgbm1, libgtk-3-0, libnotify4, libnss3, libpulse0, libx11-xcb1, libxss1, libxtst6
  - recommends: libappindicator3-1

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Signal Desktop client repository (uses 'xenial' as codename)
- Repo tags: messaging, security
- Key notes: Signal Desktop signing key for apt repository
- Key tags: messaging, security
