# Kali Rolling (kali-rolling)

## Repository
- Repository ID: `kali-rolling`
- OS: `kali-rolling`
- Source: `https://http.kali.org/kali kali-rolling main contrib non-free non-free-firmware`

## Upstream documentation
- Documentation URL: https://www.kali.org/docs/general-use/kali-linux-sources-list-repositories/
- Key documentation URL: https://www.kali.org/docs/general-use/kali-linux-sources-list-repositories/

## Key reference
- Key ID: `kali-archive-keyring`
- Expected fingerprints:
  - 827C8569F2518CC677FECA1AED65462EC8D5E4C5
  - 44C6513A8E4FB3D30875F758ED444FF07D8D0BF6
- Key source URL: https://archive.kali.org/archive-keyring.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kali-archive-keyring.asc | gpg --dearmor | sudo tee /usr/share/keyrings/kali-archive-keyring.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/kali-archive-keyring.gpg] https://http.kali.org/kali kali-rolling main contrib non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/kali-rolling.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kali-archive-keyring.asc -o /tmp/kali-archive-keyring.asc
gpg --dearmor /tmp/kali-archive-keyring.asc
sudo install -m 0644 /tmp/kali-archive-keyring.gpg /usr/share/keyrings/kali-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/kali-archive-keyring.gpg] https://http.kali.org/kali kali-rolling main contrib non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/kali-rolling.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: kali, debian-derivative, apt
