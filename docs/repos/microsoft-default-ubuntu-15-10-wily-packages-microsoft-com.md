# Microsoft - ubuntu-15.10 - default (ubuntu-15.10)

Repository ID: `microsoft-default-ubuntu-15-10-wily-packages-microsoft-com`
OS: `ubuntu-15.10`
Source: `[arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main`

## Upstream documentation
Documentation URL: https://packages.microsoft.com/config/ubuntu/15.10
Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Key reference
Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
Expected fingerprints:
- BC528686B50D79E339D3721CEB3E94ADBE1229CF
Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL <RAW_URL_TO_KEYS/microsoft-microsoft-eb3e94adbe1229cf.asc> | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-15-10-wily-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL <RAW_URL_TO_KEYS/microsoft-microsoft-eb3e94adbe1229cf.asc> -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-15-10-wily-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
