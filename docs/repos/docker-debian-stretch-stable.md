# Docker - Debian (Stretch) - stable (debian-9)

Repository ID: `docker-debian-stretch-stable`
OS: `debian-9`
Source: `https://download.docker.com/linux/debian stretch stable`

## Upstream documentation
Documentation URL: https://docs.docker.com/engine/install/debian
Key documentation URL: https://docs.docker.com/engine/install/ubuntu

## Key reference
Key ID: `docker-gpg-8d81803c0ebfcd88`
Expected fingerprints:
- 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
Key source URL: https://download.docker.com/linux/ubuntu/gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL <RAW_URL_TO_KEYS/docker-gpg-8d81803c0ebfcd88.asc> | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-stretch-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL <RAW_URL_TO_KEYS/docker-gpg-8d81803c0ebfcd88.asc> -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-stretch-stable.list >/dev/null
sudo apt-get update
```

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Docker APT repository for Debian
- Repo tags: docker, apt, debian
