# Microsoft - debian-13 - default (debian-13)

## Repository
- Repository ID: `microsoft-default-debian-13-trixie-packages-microsoft-com`
- OS: `debian-13`
- Source: `[arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/debian/13/prod trixie main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/13
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Key reference
- Key ID: `microsoft-microsoft-2025-EE4D7792F748182B`
- Expected fingerprints:
  - AA86F75E427A19DD33346403EE4D7792F748182B
- Key source URL: https://packages.microsoft.com/keys/microsoft-2025.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-2025-EE4D7792F748182B.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/debian/13/prod trixie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-13-trixie-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-2025-EE4D7792F748182B.asc -o /tmp/microsoft-microsoft-2025-EE4D7792F748182B.asc
gpg --dearmor /tmp/microsoft-microsoft-2025-EE4D7792F748182B.asc
sudo install -m 0644 /tmp/microsoft-microsoft-2025-EE4D7792F748182B.gpg /usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/debian/13/prod trixie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-13-trixie-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, debian
- Key tags: microsoft
