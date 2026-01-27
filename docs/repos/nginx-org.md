# nginx

## Repository
- Repository ID: `nginx-org`
- Base URL: `https://nginx.org/packages/mainline/debian`
- Host: `nginx.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://nginx.org/en/linux_packages.html

## Suites
- Suite: `bullseye`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `nginx-org`
- Expected fingerprints:
  - 573BFD6B3D8FBC641079A6ABABF5BD827BD9BF62
  - 8540A6F18833A80E9C1653A42FD21310B49F6B46
  - 9E9BE90EACBCDE69FE9B204CBCDCD8A38D88A2B3
- Key source URL: https://nginx.org/keys/nginx_signing.key

## Install instructions

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/mainline/debian bullseye nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/mainline/debian bullseye nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-bullseye.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, nginx.org
- Key notes: NGINX Open Source official repository key
- Key tags: web, server
