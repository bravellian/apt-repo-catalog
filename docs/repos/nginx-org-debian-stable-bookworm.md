# NGINX (nginx.org stable, Debian 12)

## Repository
- Repository ID: `nginx-org-debian-stable-bookworm`
- Base URL: `https://nginx.org/packages/debian`
- Host: `nginx.org`

## Upstream documentation
- Documentation URL: https://nginx.org/en/linux_packages.html
- Key documentation URL: https://nginx.org/en/linux_packages.html

## Suites
- Suite: `bullseye`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `buster`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-10
- Suite: `jessie`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-8
- Suite: `stretch`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-9
- Suite: `trixie`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `wheezy`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-7
- Suite: `bookworm`
  - Components: nginx
  - Architectures: (not listed)
  - Observed OSes: debian-12

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
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian bullseye nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian bullseye nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian buster nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian buster nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-buster.list >/dev/null
sudo apt-get update
```

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian jessie nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian jessie nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-jessie.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian stretch nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian stretch nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-stretch.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian trixie nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian trixie nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-trixie.list >/dev/null
sudo apt-get update
```

### Suite: wheezy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian wheezy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian wheezy nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-wheezy.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc | gpg --dearmor | sudo tee /usr/share/keyrings/nginx-org.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian bookworm nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/nginx-org.asc -o /tmp/nginx-org.asc
gpg --dearmor /tmp/nginx-org.asc
sudo install -m 0644 /tmp/nginx-org.gpg /usr/share/keyrings/nginx-org.gpg
echo "deb [signed-by=/usr/share/keyrings/nginx-org.gpg] https://nginx.org/packages/debian bookworm nginx" | sudo tee /etc/apt/sources.list.d/nginx-org-debian-stable-bookworm-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (105)</summary>

<div class="packages-nav">
<a href="#packages-N">N</a>
</div>


### <a id="packages-N"></a>N

- **nginx**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.28), libpcre2-8-0 (>= 10.32), libpcre3, libssl1.1 (>= 1.1.1), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0

  </details>

- **nginx**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.18~), libc6 (>= 2.10), libc6 (>= 2.14), libc6 (>= 2.17), libpcre3 (>= 1:8.35), libssl1.0.0 (>= 1.0.1), lsb-base, lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4), zlib1g (>= 1:1.2.0)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, init-system-helpers (>= 1.18~), libc6 (>= 2.10), libc6 (>= 2.14), libc6 (>= 2.17), libpcre3, libssl1.1 (>= 1.1.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.18.0

  </details>

- **nginx**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3t64 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: high performance web server
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.10), libpcre3 (>= 8.10), libssl1.0.0 (>= 1.0.1), lsb-base, lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4), zlib1g (>= 1:1.2.0)
  - provides: httpd

  </details>

- **nginx**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: high performance web server
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx`
  - Install (apt): `sudo apt install nginx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: adduser, libc6 (>= 2.34), libcrypt1 (>= 1:4.1.0), libpcre2-8-0 (>= 10.22), libssl3 (>= 3.0.0), lsb-base (>= 3.0-6), zlib1g (>= 1:1.1.4)
  - recommends: logrotate
  - conflicts: nginx-common, nginx-core
  - replaces: nginx-common, nginx-core
  - provides: httpd, nginx, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye)

  </details>

- **nginx-dbg**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster)

  </details>

- **nginx-dbg**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx (= 1.8.0-1~jessie), nginx (= 1.8.1-1~jessie)

  </details>

- **nginx-dbg**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie)

  </details>

- **nginx-dbg**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx (= 1.8.0-1~wheezy), nginx (= 1.8.1-1~wheezy)

  </details>

- **nginx-dbg**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx debug symbols
  - Homepage: https://nginx.org
  - Install: `sudo apt-get install nginx-dbg`
  - Install (apt): `sudo apt install nginx-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm)

  </details>

- **nginx-debug**
  - Latest version: 1.8.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug version of nginx
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-debug`
  - Install (apt): `sudo apt install nginx-debug`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: libc6 (>= 2.10), libc6 (>= 2.14), libpcre3 (>= 1:8.35), libssl1.0.0 (>= 1.0.1), nginx (= 1.8.0-1~jessie), zlib1g (>= 1:1.2.0)

  </details>

- **nginx-debug**
  - Latest version: 1.8.0-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug version of nginx
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-debug`
  - Install (apt): `sudo apt install nginx-debug`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: libc6 (>= 2.10), libpcre3 (>= 8.10), libssl1.0.0 (>= 1.0.1), nginx (= 1.8.0-1~wheezy), zlib1g (>= 1:1.2.0)

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.39), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme**
  - Latest version: 1.28.1+0.3.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx nginx-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme`
  - Install (apt): `sudo apt install nginx-module-acme`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-acme-r1.28.0, nginx-module-acme-r1.28.1

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-acme (= 1.28.0+0.2.0-1~bullseye), nginx-module-acme (= 1.28.0+0.3.0-1~bullseye), nginx-module-acme (= 1.28.0+0.3.1-1~bullseye), nginx-module-acme (= 1.28.1+0.3.1-1~bullseye)

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-acme (= 1.28.0+0.2.0-1~trixie), nginx-module-acme (= 1.28.0+0.3.0-1~trixie), nginx-module-acme (= 1.28.0+0.3.1-1~trixie), nginx-module-acme (= 1.28.1+0.3.1-1~trixie)

  </details>

- **nginx-module-acme-dbg**
  - Latest version: 1.28.1+0.3.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-acme
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-acme-dbg`
  - Install (apt): `sudo apt install nginx-module-acme-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-acme (= 1.28.0+0.2.0-1~bookworm), nginx-module-acme (= 1.28.0+0.3.0-1~bookworm), nginx-module-acme (= 1.28.0+0.3.1-1~bookworm), nginx-module-acme (= 1.28.1+0.3.1-1~bookworm)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.20.1, nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0, nginx-module-geoip-r1.22.1, nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgeoip1, nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-geoip-r1.18.0, nginx-module-geoip-r1.20.0, nginx-module-geoip-r1.20.1, nginx-module-geoip-r1.20.2, nginx-module-geoip-r1.22.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgeoip1, nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgeoip1, nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx-r1.18.0
  - provides: nginx-module-geoip-r1.18.0

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1t64 (>= 1.6.12), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: geoip module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.4), libgeoip1 (>= 1.4.8+dfsg), nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-geoip**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx GeoIP dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip`
  - Install (apt): `sudo apt install nginx-module-geoip`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgeoip1 (>= 1.6.12), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-geoip-r1.24.0, nginx-module-geoip-r1.26.0, nginx-module-geoip-r1.26.1, nginx-module-geoip-r1.26.2, nginx-module-geoip-r1.26.3, nginx-module-geoip-r1.28.0, nginx-module-geoip-r1.28.1

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-geoip (= 1.20.1-1~bullseye), nginx-module-geoip (= 1.20.2-1~bullseye), nginx-module-geoip (= 1.22.0-1~bullseye), nginx-module-geoip (= 1.22.1-1~bullseye), nginx-module-geoip (= 1.24.0-1~bullseye), nginx-module-geoip (= 1.26.0-1~bullseye), nginx-module-geoip (= 1.26.1-1~bullseye), nginx-module-geoip (= 1.26.1-2~bullseye), nginx-module-geoip (= 1.26.2-2~bullseye), nginx-module-geoip (= 1.26.3-2~bullseye), nginx-module-geoip (= 1.28.0-1~bullseye), nginx-module-geoip (= 1.28.1-1~bullseye)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster), nginx-module-geoip (= 1.16.0-1~buster), nginx-module-geoip (= 1.16.1-1~buster), nginx-module-geoip (= 1.18.0-1~buster), nginx-module-geoip (= 1.18.0-2~buster), nginx-module-geoip (= 1.20.0-1~buster), nginx-module-geoip (= 1.20.1-1~buster), nginx-module-geoip (= 1.20.2-1~buster), nginx-module-geoip (= 1.22.0-1~buster)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx-module-geoip (= 1.10.2-1~jessie), nginx-module-geoip (= 1.10.3-1~jessie), nginx-module-geoip (= 1.12.0-1~jessie), nginx-module-geoip (= 1.12.1-1~jessie), nginx-module-geoip (= 1.12.2-1~jessie), nginx-module-geoip (= 1.14.0-1~jessie), nginx-module-geoip (= 1.14.1-1~jessie), nginx-module-geoip (= 1.14.2-1~jessie), nginx-module-geoip (= 1.16.0-1~jessie)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch), nginx-module-geoip (= 1.12.0-1~stretch), nginx-module-geoip (= 1.12.1-1~stretch), nginx-module-geoip (= 1.12.2-1~stretch), nginx-module-geoip (= 1.14.0-1~stretch), nginx-module-geoip (= 1.14.1-1~stretch), nginx-module-geoip (= 1.14.2-1~stretch), nginx-module-geoip (= 1.16.0-1~stretch), nginx-module-geoip (= 1.16.1-1~stretch), nginx-module-geoip (= 1.18.0-1~stretch), nginx-module-geoip (= 1.18.0-2~stretch)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-geoip (= 1.28.0-1~trixie), nginx-module-geoip (= 1.28.1-1~trixie)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx-module-geoip (= 1.10.2-1~wheezy), nginx-module-geoip (= 1.10.3-1~wheezy), nginx-module-geoip (= 1.12.0-1~wheezy), nginx-module-geoip (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-geoip-dbg**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-geoip
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-geoip-dbg`
  - Install (apt): `sudo apt install nginx-module-geoip-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-geoip (= 1.24.0-1~bookworm), nginx-module-geoip (= 1.26.0-1~bookworm), nginx-module-geoip (= 1.26.1-1~bookworm), nginx-module-geoip (= 1.26.1-2~bookworm), nginx-module-geoip (= 1.26.2-2~bookworm), nginx-module-geoip (= 1.26.3-2~bookworm), nginx-module-geoip (= 1.28.0-1~bookworm), nginx-module-geoip (= 1.28.1-1~bookworm)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.20.1, nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0, nginx-module-image-filter-r1.22.1, nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-image-filter-r1.18.0, nginx-module-image-filter-r1.20.0, nginx-module-image-filter-r1.20.1, nginx-module-image-filter-r1.20.2, nginx-module-image-filter-r1.22.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libgd3 (>= 2.1.0~alpha~), nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx-r1.18.0
  - provides: nginx-module-image-filter-r1.18.0

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: image filter module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.1.3), libc6 (>= 2.2.5), libgd2-xpm (>= 2.0.36~rc1~dfsg), nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-image-filter**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx image filter dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter`
  - Install (apt): `sudo apt install nginx-module-image-filter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libgd3 (>= 2.1.0~alpha~), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-image-filter-r1.24.0, nginx-module-image-filter-r1.26.0, nginx-module-image-filter-r1.26.1, nginx-module-image-filter-r1.26.2, nginx-module-image-filter-r1.26.3, nginx-module-image-filter-r1.28.0, nginx-module-image-filter-r1.28.1

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-image-filter (= 1.20.1-1~bullseye), nginx-module-image-filter (= 1.20.2-1~bullseye), nginx-module-image-filter (= 1.22.0-1~bullseye), nginx-module-image-filter (= 1.22.1-1~bullseye), nginx-module-image-filter (= 1.24.0-1~bullseye), nginx-module-image-filter (= 1.26.0-1~bullseye), nginx-module-image-filter (= 1.26.1-1~bullseye), nginx-module-image-filter (= 1.26.1-2~bullseye), nginx-module-image-filter (= 1.26.2-2~bullseye), nginx-module-image-filter (= 1.26.3-2~bullseye), nginx-module-image-filter (= 1.28.0-1~bullseye), nginx-module-image-filter (= 1.28.1-1~bullseye)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster), nginx-module-image-filter (= 1.16.0-1~buster), nginx-module-image-filter (= 1.16.1-1~buster), nginx-module-image-filter (= 1.18.0-1~buster), nginx-module-image-filter (= 1.18.0-2~buster), nginx-module-image-filter (= 1.20.0-1~buster), nginx-module-image-filter (= 1.20.1-1~buster), nginx-module-image-filter (= 1.20.2-1~buster), nginx-module-image-filter (= 1.22.0-1~buster)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx-module-image-filter (= 1.10.2-1~jessie), nginx-module-image-filter (= 1.10.3-1~jessie), nginx-module-image-filter (= 1.12.0-1~jessie), nginx-module-image-filter (= 1.12.1-1~jessie), nginx-module-image-filter (= 1.12.2-1~jessie), nginx-module-image-filter (= 1.14.0-1~jessie), nginx-module-image-filter (= 1.14.1-1~jessie), nginx-module-image-filter (= 1.14.2-1~jessie), nginx-module-image-filter (= 1.16.0-1~jessie)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch), nginx-module-image-filter (= 1.12.0-1~stretch), nginx-module-image-filter (= 1.12.1-1~stretch), nginx-module-image-filter (= 1.12.2-1~stretch), nginx-module-image-filter (= 1.14.0-1~stretch), nginx-module-image-filter (= 1.14.1-1~stretch), nginx-module-image-filter (= 1.14.2-1~stretch), nginx-module-image-filter (= 1.16.0-1~stretch), nginx-module-image-filter (= 1.16.1-1~stretch), nginx-module-image-filter (= 1.18.0-1~stretch), nginx-module-image-filter (= 1.18.0-2~stretch)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-image-filter (= 1.28.0-1~trixie), nginx-module-image-filter (= 1.28.1-1~trixie)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx-module-image-filter (= 1.10.2-1~wheezy), nginx-module-image-filter (= 1.10.3-1~wheezy), nginx-module-image-filter (= 1.12.0-1~wheezy), nginx-module-image-filter (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-image-filter-dbg**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-image-filter
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-image-filter-dbg`
  - Install (apt): `sudo apt install nginx-module-image-filter-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-image-filter (= 1.24.0-1~bookworm), nginx-module-image-filter (= 1.26.0-1~bookworm), nginx-module-image-filter (= 1.26.1-1~bookworm), nginx-module-image-filter (= 1.26.1-2~bookworm), nginx-module-image-filter (= 1.26.2-2~bookworm), nginx-module-image-filter (= 1.26.3-2~bookworm), nginx-module-image-filter (= 1.28.0-1~bookworm), nginx-module-image-filter (= 1.28.1-1~bookworm)

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.29), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.22), libpcre2-8-0 (>= 10.32), libpcre3, libreadline8 (>= 6.0), libssl1.1 (>= 1.1.1), libxml2 (>= 2.7.4), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.20.1, nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0, nginx-module-njs-r1.22.1, nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.22.0+0.7.7-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.25), libpcre2-8-0 (>= 10.32), libpcre3, libreadline7 (>= 6.0), libssl1.1 (>= 1.1.1), nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-njs-r1.18.0, nginx-module-njs-r1.20.0, nginx-module-njs-r1.20.1, nginx-module-njs-r1.20.2, nginx-module-njs-r1.22.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.16.0.0.3.1-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libc6 (>= 2.7), libedit2 (>= 2.11-20080614), libpcre3 (>= 1:8.35), nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie)

  </details>

- **nginx-module-njs**
  - Latest version: 1.18.0.0.4.4-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx nginScript dynamic modules
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libc6 (>= 2.7), libedit2 (>= 2.11-20080614), libpcre3, libreadline7 (>= 6.0), nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx-r1.18.0
  - provides: nginx-module-njs-r1.18.0

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libssl3t64 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs**
  - Latest version: 1.12.1.0.1.10-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: nJScript module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.4), nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-njs**
  - Latest version: 1.28.1+0.9.5-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx njs dynamic modules
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs`
  - Install (apt): `sudo apt install nginx-module-njs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.35), libedit2 (>= 3.1-20130611-0), libpcre2-8-0 (>= 10.32), libreadline8 (>= 6.0), libssl3 (>= 3.0.0), libxml2 (>= 2.7.4), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-njs-r1.24.0, nginx-module-njs-r1.26.0, nginx-module-njs-r1.26.1, nginx-module-njs-r1.26.2, nginx-module-njs-r1.26.3, nginx-module-njs-r1.28.0, nginx-module-njs-r1.28.1

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-njs (= 1.20.1+0.6.1-1~bullseye), nginx-module-njs (= 1.20.1+0.6.2-1~bullseye), nginx-module-njs (= 1.20.1+0.7.0-1~bullseye), nginx-module-njs (= 1.20.2+0.7.0-1~bullseye), nginx-module-njs (= 1.20.2+0.7.1-1~bullseye), nginx-module-njs (= 1.20.2+0.7.2-1~bullseye), nginx-module-njs (= 1.20.2+0.7.3-1~bullseye), nginx-module-njs (= 1.22.0+0.7.3-1~bullseye), nginx-module-njs (= 1.22.0+0.7.4-1~bullseye), nginx-module-njs (= 1.22.0+0.7.5-1~bullseye), nginx-module-njs (= 1.22.0+0.7.6-1~bullseye), nginx-module-njs (= 1.22.0+0.7.7-1~bullseye), nginx-module-njs (= 1.22.1+0.7.10-1~bullseye), nginx-module-njs (= 1.22.1+0.7.11-1~bullseye), nginx-module-njs (= 1.22.1+0.7.12-1~bullseye), nginx-module-njs (= 1.22.1+0.7.7-1~bullseye), nginx-module-njs (= 1.22.1+0.7.8-1~bullseye), nginx-module-njs (= 1.22.1+0.7.9-1~bullseye), nginx-module-njs (= 1.24.0+0.7.12-1~bullseye), nginx-module-njs (= 1.24.0+0.8.0-1~bullseye), nginx-module-njs (= 1.24.0+0.8.1-1~bullseye), nginx-module-njs (= 1.24.0+0.8.2-1~bullseye), nginx-module-njs (= 1.24.0+0.8.3-1~bullseye), nginx-module-njs (= 1.26.0+0.8.4-1~bullseye), nginx-module-njs (= 1.26.0+0.8.4-2~bullseye), nginx-module-njs (= 1.26.1+0.8.4-1~bullseye), nginx-module-njs (= 1.26.1+0.8.4-2~bullseye), nginx-module-njs (= 1.26.1+0.8.5-2~bullseye), nginx-module-njs (= 1.26.2+0.8.5-1~bullseye), nginx-module-njs (= 1.26.2+0.8.6-1~bullseye), nginx-module-njs (= 1.26.2+0.8.7-1~bullseye), nginx-module-njs (= 1.26.2+0.8.8-1~bullseye), nginx-module-njs (= 1.26.2+0.8.9-1~bullseye), nginx-module-njs (= 1.26.3+0.8.10-1~bullseye), nginx-module-njs (= 1.26.3+0.8.9-1~bullseye), nginx-module-njs (= 1.28.0+0.8.10-1~bullseye), nginx-module-njs (= 1.28.0+0.9.0-1~bullseye), nginx-module-njs (= 1.28.0+0.9.1-1~bullseye), nginx-module-njs (= 1.28.0+0.9.2-1~bullseye), nginx-module-njs (= 1.28.0+0.9.3-1~bullseye), nginx-module-njs (= 1.28.0+0.9.4-1~bullseye), nginx-module-njs (= 1.28.1+0.9.4-1~bullseye), nginx-module-njs (= 1.28.1+0.9.5-1~bullseye)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.22.0+0.7.7-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster), nginx-module-njs (= 1.16.0.0.3.2-1~buster), nginx-module-njs (= 1.16.1.0.3.4-1~buster), nginx-module-njs (= 1.16.1.0.3.5-1~buster), nginx-module-njs (= 1.16.1.0.3.6-1~buster), nginx-module-njs (= 1.16.1.0.3.7-1~buster), nginx-module-njs (= 1.16.1.0.3.8-1~buster), nginx-module-njs (= 1.18.0.0.3.9-1~buster), nginx-module-njs (= 1.18.0.0.4.0-1~buster), nginx-module-njs (= 1.18.0.0.4.1-1~buster), nginx-module-njs (= 1.18.0.0.4.2-1~buster), nginx-module-njs (= 1.18.0.0.4.3-1~buster), nginx-module-njs (= 1.18.0.0.4.4-1~buster), nginx-module-njs (= 1.18.0.0.4.4-2~buster), nginx-module-njs (= 1.18.0+0.5.0-1~buster), nginx-module-njs (= 1.18.0+0.5.1-1~buster), nginx-module-njs (= 1.18.0+0.5.2-1~buster), nginx-module-njs (= 1.20.0+0.5.3-1~buster), nginx-module-njs (= 1.20.1+0.5.3-1~buster), nginx-module-njs (= 1.20.1+0.6.0-1~buster), nginx-module-njs (= 1.20.1+0.6.1-1~buster), nginx-module-njs (= 1.20.1+0.6.2-1~buster), nginx-module-njs (= 1.20.1+0.7.0-1~buster), nginx-module-njs (= 1.20.2+0.7.0-1~buster), nginx-module-njs (= 1.20.2+0.7.1-1~buster), nginx-module-njs (= 1.20.2+0.7.2-1~buster), nginx-module-njs (= 1.20.2+0.7.3-1~buster), nginx-module-njs (= 1.22.0+0.7.3-1~buster), nginx-module-njs (= 1.22.0+0.7.4-1~buster), nginx-module-njs (= 1.22.0+0.7.5-1~buster), nginx-module-njs (= 1.22.0+0.7.6-1~buster), nginx-module-njs (= 1.22.0+0.7.7-1~buster)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.16.0.0.3.1-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx-module-njs (= 1.10.2.0.0.20160414.1c50334fbea6-2~jessie), nginx-module-njs (= 1.10.3.0.0.20160414.1c50334fbea6-1~jessie), nginx-module-njs (= 1.12.0.0.1.10-1~jessie), nginx-module-njs (= 1.12.1.0.1.10-1~jessie), nginx-module-njs (= 1.12.2.0.1.14-1~jessie), nginx-module-njs (= 1.14.0.0.2.0-1~jessie), nginx-module-njs (= 1.14.0.0.2.1-1~jessie), nginx-module-njs (= 1.14.0.0.2.2-1~jessie), nginx-module-njs (= 1.14.0.0.2.3-1~jessie), nginx-module-njs (= 1.14.0.0.2.4-1~jessie), nginx-module-njs (= 1.14.0.0.2.5-1~jessie), nginx-module-njs (= 1.14.1.0.2.5-1~jessie), nginx-module-njs (= 1.14.2.0.2.6-1~jessie), nginx-module-njs (= 1.14.2.0.2.7-1~jessie), nginx-module-njs (= 1.16.0.0.3.1-1~jessie)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.18.0.0.4.4-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch), nginx-module-njs (= 1.12.0.0.1.10-1~stretch), nginx-module-njs (= 1.12.1.0.1.10-1~stretch), nginx-module-njs (= 1.12.2.0.1.14-1~stretch), nginx-module-njs (= 1.14.0.0.2.0-1~stretch), nginx-module-njs (= 1.14.0.0.2.1-1~stretch), nginx-module-njs (= 1.14.0.0.2.2-1~stretch), nginx-module-njs (= 1.14.0.0.2.3-1~stretch), nginx-module-njs (= 1.14.0.0.2.4-1~stretch), nginx-module-njs (= 1.14.0.0.2.5-1~stretch), nginx-module-njs (= 1.14.1.0.2.5-1~stretch), nginx-module-njs (= 1.14.2.0.2.6-1~stretch), nginx-module-njs (= 1.14.2.0.2.7-1~stretch), nginx-module-njs (= 1.16.0.0.3.1-1~stretch), nginx-module-njs (= 1.16.0.0.3.2-1~stretch), nginx-module-njs (= 1.16.1.0.3.4-1~stretch), nginx-module-njs (= 1.16.1.0.3.5-1~stretch), nginx-module-njs (= 1.16.1.0.3.6-1~stretch), nginx-module-njs (= 1.16.1.0.3.7-1~stretch), nginx-module-njs (= 1.16.1.0.3.8-1~stretch), nginx-module-njs (= 1.18.0.0.3.9-1~stretch), nginx-module-njs (= 1.18.0.0.4.0-1~stretch), nginx-module-njs (= 1.18.0.0.4.1-1~stretch), nginx-module-njs (= 1.18.0.0.4.2-1~stretch), nginx-module-njs (= 1.18.0.0.4.3-1~stretch), nginx-module-njs (= 1.18.0.0.4.4-1~stretch), nginx-module-njs (= 1.18.0.0.4.4-2~stretch), nginx-module-njs (= 1.18.0+0.5.0-1~stretch)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-njs (= 1.28.0+0.9.1-1~trixie), nginx-module-njs (= 1.28.0+0.9.2-1~trixie), nginx-module-njs (= 1.28.0+0.9.3-1~trixie), nginx-module-njs (= 1.28.0+0.9.4-1~trixie), nginx-module-njs (= 1.28.1+0.9.4-1~trixie), nginx-module-njs (= 1.28.1+0.9.5-1~trixie)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.12.1.0.1.10-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx-module-njs (= 1.10.2.0.0.20160414.1c50334fbea6-2~wheezy), nginx-module-njs (= 1.10.3.0.0.20160414.1c50334fbea6-1~wheezy), nginx-module-njs (= 1.12.0.0.1.10-1~wheezy), nginx-module-njs (= 1.12.1.0.1.10-1~wheezy)

  </details>

- **nginx-module-njs-dbg**
  - Latest version: 1.28.1+0.9.5-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-njs
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-njs-dbg`
  - Install (apt): `sudo apt install nginx-module-njs-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-njs (= 1.24.0+0.7.12-1~bookworm), nginx-module-njs (= 1.24.0+0.8.0-1~bookworm), nginx-module-njs (= 1.24.0+0.8.1-1~bookworm), nginx-module-njs (= 1.24.0+0.8.2-1~bookworm), nginx-module-njs (= 1.24.0+0.8.3-1~bookworm), nginx-module-njs (= 1.26.0+0.8.4-1~bookworm), nginx-module-njs (= 1.26.0+0.8.4-2~bookworm), nginx-module-njs (= 1.26.1+0.8.4-1~bookworm), nginx-module-njs (= 1.26.1+0.8.4-2~bookworm), nginx-module-njs (= 1.26.1+0.8.5-2~bookworm), nginx-module-njs (= 1.26.2+0.8.5-1~bookworm), nginx-module-njs (= 1.26.2+0.8.6-1~bookworm), nginx-module-njs (= 1.26.2+0.8.7-1~bookworm), nginx-module-njs (= 1.26.2+0.8.8-1~bookworm), nginx-module-njs (= 1.26.2+0.8.9-1~bookworm), nginx-module-njs (= 1.26.3+0.8.10-1~bookworm), nginx-module-njs (= 1.26.3+0.8.9-1~bookworm), nginx-module-njs (= 1.28.0+0.8.10-1~bookworm), nginx-module-njs (= 1.28.0+0.9.0-1~bookworm), nginx-module-njs (= 1.28.0+0.9.1-1~bookworm), nginx-module-njs (= 1.28.0+0.9.2-1~bookworm), nginx-module-njs (= 1.28.0+0.9.3-1~bookworm), nginx-module-njs (= 1.28.0+0.9.4-1~bookworm), nginx-module-njs (= 1.28.1+0.9.4-1~bookworm), nginx-module-njs (= 1.28.1+0.9.5-1~bookworm)

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.29), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.5), libssl1.1 (>= 1.1.1), libstdc++6 (>= 6), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.38), libcares2 (>= 1.11.0~rc1), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.5), libssl3t64 (>= 3.0.0), libstdc++6 (>= 14), nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel**
  - Latest version: 1.28.1+0.1.2-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx OpenTelemetry dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel`
  - Install (apt): `sudo apt install nginx-module-otel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc-ares2 (>= 1.11.0~rc1), libc6 (>= 2.34), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.5), libssl3 (>= 3.0.0), libstdc++6 (>= 11), nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, zlib1g (>= 1:1.1.4)
  - provides: nginx-module-otel-r1.26.0, nginx-module-otel-r1.26.1, nginx-module-otel-r1.26.2, nginx-module-otel-r1.26.3, nginx-module-otel-r1.28.0, nginx-module-otel-r1.28.1

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-otel (= 1.26.0+0.1.0-1~bullseye), nginx-module-otel (= 1.26.1+0.1.0-1~bullseye), nginx-module-otel (= 1.26.1+0.1.0-2~bullseye), nginx-module-otel (= 1.26.2+0.1.0-1~bullseye), nginx-module-otel (= 1.26.3+0.1.1-1~bullseye), nginx-module-otel (= 1.26.3+0.1.2-1~bullseye), nginx-module-otel (= 1.28.0+0.1.2-1~bullseye), nginx-module-otel (= 1.28.1+0.1.2-1~bullseye)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-otel (= 1.28.0+0.1.2-1~trixie), nginx-module-otel (= 1.28.1+0.1.2-1~trixie)

  </details>

- **nginx-module-otel-dbg**
  - Latest version: 1.28.1+0.1.2-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-otel
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-otel-dbg`
  - Install (apt): `sudo apt install nginx-module-otel-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-otel (= 1.26.0+0.1.0-1~bookworm), nginx-module-otel (= 1.26.1+0.1.0-1~bookworm), nginx-module-otel (= 1.26.1+0.1.0-2~bookworm), nginx-module-otel (= 1.26.2+0.1.0-1~bookworm), nginx-module-otel (= 1.26.3+0.1.1-1~bookworm), nginx-module-otel (= 1.26.3+0.1.2-1~bookworm), nginx-module-otel (= 1.28.0+0.1.2-1~bookworm), nginx-module-otel (= 1.28.1+0.1.2-1~bookworm)

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libperl5.32 (>= 5.32.0~rc1), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, perl, perlapi-5.32.1
  - provides: nginx-module-perl-r1.20.1, nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0, nginx-module-perl-r1.22.1, nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libperl5.28 (>= 5.28.0), nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, perl (>= 5.28.1-6), perl (>= 5.28.1-6+deb10u1), perlapi-5.28.1
  - provides: nginx-module-perl-r1.18.0, nginx-module-perl-r1.20.0, nginx-module-perl-r1.20.1, nginx-module-perl-r1.20.2, nginx-module-perl-r1.22.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libperl5.20 (>= 5.20.2), nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), perl (>= 5.20.2-3+deb8u10), perl (>= 5.20.2-3+deb8u12), perl (>= 5.20.2-3+deb8u3), perl (>= 5.20.2-3+deb8u6), perl (>= 5.20.2-3+deb8u7), perl (>= 5.20.2-3+deb8u8), perl (>= 5.20.2-3+deb8u9), perlapi-5.20.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libperl5.24 (>= 5.24.0), nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx-r1.18.0, perl (>= 5.24.1-1), perl (>= 5.24.1-3), perl (>= 5.24.1-3+deb9u1), perl (>= 5.24.1-3+deb9u2), perl (>= 5.24.1-3+deb9u3), perl (>= 5.24.1-3+deb9u5), perl (>= 5.24.1-3+deb9u7), perlapi-5.24.1
  - provides: nginx-module-perl-r1.18.0

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.40 (>= 5.40.0), nginx-r1.28.0, nginx-r1.28.1, perl (>= 5.40.1-6), perlapi-5.40.1
  - provides: nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: perl module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.2.5), libc6 (>= 2.3.6-6~), libperl5.14 (>= 5.14.2), nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), perl (>= 5.14.2-21+deb7u2), perl (>= 5.14.2-21+deb7u4), perl (>= 5.14.2-21+deb7u5), perlapi-5.14.2

  </details>

- **nginx-module-perl**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx Perl dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl`
  - Install (apt): `sudo apt install nginx-module-perl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.34), libperl5.36 (>= 5.36.0), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1, perl (>= 5.36.0-7), perl (>= 5.36.0-7+deb12u1), perl (>= 5.36.0-7+deb12u2), perl (>= 5.36.0-7+deb12u3), perlapi-5.36.0
  - provides: nginx-module-perl-r1.24.0, nginx-module-perl-r1.26.0, nginx-module-perl-r1.26.1, nginx-module-perl-r1.26.2, nginx-module-perl-r1.26.3, nginx-module-perl-r1.28.0, nginx-module-perl-r1.28.1

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-perl (= 1.20.1-1~bullseye), nginx-module-perl (= 1.20.2-1~bullseye), nginx-module-perl (= 1.22.0-1~bullseye), nginx-module-perl (= 1.22.1-1~bullseye), nginx-module-perl (= 1.24.0-1~bullseye), nginx-module-perl (= 1.26.0-1~bullseye), nginx-module-perl (= 1.26.1-1~bullseye), nginx-module-perl (= 1.26.1-2~bullseye), nginx-module-perl (= 1.26.2-2~bullseye), nginx-module-perl (= 1.26.3-2~bullseye), nginx-module-perl (= 1.28.0-1~bullseye), nginx-module-perl (= 1.28.1-1~bullseye)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster), nginx-module-perl (= 1.16.0-1~buster), nginx-module-perl (= 1.16.1-1~buster), nginx-module-perl (= 1.18.0-1~buster), nginx-module-perl (= 1.18.0-2~buster), nginx-module-perl (= 1.20.0-1~buster), nginx-module-perl (= 1.20.1-1~buster), nginx-module-perl (= 1.20.2-1~buster), nginx-module-perl (= 1.22.0-1~buster)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx-module-perl (= 1.10.2-1~jessie), nginx-module-perl (= 1.10.3-1~jessie), nginx-module-perl (= 1.12.0-1~jessie), nginx-module-perl (= 1.12.1-1~jessie), nginx-module-perl (= 1.12.2-1~jessie), nginx-module-perl (= 1.14.0-1~jessie), nginx-module-perl (= 1.14.1-1~jessie), nginx-module-perl (= 1.14.2-1~jessie), nginx-module-perl (= 1.16.0-1~jessie)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch), nginx-module-perl (= 1.12.0-1~stretch), nginx-module-perl (= 1.12.1-1~stretch), nginx-module-perl (= 1.12.2-1~stretch), nginx-module-perl (= 1.14.0-1~stretch), nginx-module-perl (= 1.14.1-1~stretch), nginx-module-perl (= 1.14.2-1~stretch), nginx-module-perl (= 1.16.0-1~stretch), nginx-module-perl (= 1.16.1-1~stretch), nginx-module-perl (= 1.18.0-1~stretch), nginx-module-perl (= 1.18.0-2~stretch)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-perl (= 1.28.0-1~trixie), nginx-module-perl (= 1.28.1-1~trixie)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx-module-perl (= 1.10.2-1~wheezy), nginx-module-perl (= 1.10.3-1~wheezy), nginx-module-perl (= 1.12.0-1~wheezy), nginx-module-perl (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-perl-dbg**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-perl
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-perl-dbg`
  - Install (apt): `sudo apt install nginx-module-perl-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-perl (= 1.24.0-1~bookworm), nginx-module-perl (= 1.26.0-1~bookworm), nginx-module-perl (= 1.26.1-1~bookworm), nginx-module-perl (= 1.26.1-2~bookworm), nginx-module-perl (= 1.26.2-2~bookworm), nginx-module-perl (= 1.26.3-2~bookworm), nginx-module-perl (= 1.28.0-1~bookworm), nginx-module-perl (= 1.28.1-1~bookworm)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0, nginx-r1.22.1, nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.20.1, nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0, nginx-module-xslt-r1.22.1, nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx-r1.18.0, nginx-r1.20.0, nginx-r1.20.1, nginx-r1.20.2, nginx-r1.22.0
  - provides: nginx-module-xslt-r1.18.0, nginx-module-xslt-r1.20.0, nginx-module-xslt-r1.20.1, nginx-module-xslt-r1.20.2, nginx-module-xslt-r1.22.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.10.0-1~jessie), nginx (= 1.10.1-1~jessie), nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx-r1.18.0
  - provides: nginx-module-xslt-r1.18.0

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: xslt module
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: httpd
  - Priority: extra
  - depends: libc6 (>= 2.4), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx (= 1.10.0-1~wheezy), nginx (= 1.10.1-1~wheezy), nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-xslt**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: nginx xslt dynamic module
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt`
  - Install (apt): `sudo apt install nginx-module-xslt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: httpd
  - Priority: optional
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libxml2 (>= 2.7.4), libxslt1.1 (>= 1.1.25), nginx-r1.24.0, nginx-r1.26.0, nginx-r1.26.1, nginx-r1.26.2, nginx-r1.26.3, nginx-r1.28.0, nginx-r1.28.1
  - provides: nginx-module-xslt-r1.24.0, nginx-module-xslt-r1.26.0, nginx-module-xslt-r1.26.1, nginx-module-xslt-r1.26.2, nginx-module-xslt-r1.26.3, nginx-module-xslt-r1.28.0, nginx-module-xslt-r1.28.1

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~bullseye
  - Architectures: amd64, arm64
  - Suite: bullseye
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.20.1-1~bullseye), nginx (= 1.20.2-1~bullseye), nginx (= 1.22.0-1~bullseye), nginx (= 1.22.1-1~bullseye), nginx (= 1.24.0-1~bullseye), nginx (= 1.26.0-1~bullseye), nginx (= 1.26.1-1~bullseye), nginx (= 1.26.1-2~bullseye), nginx (= 1.26.2-1~bullseye), nginx (= 1.26.3-1~bullseye), nginx (= 1.28.0-1~bullseye), nginx (= 1.28.1-1~bullseye), nginx-module-xslt (= 1.20.1-1~bullseye), nginx-module-xslt (= 1.20.2-1~bullseye), nginx-module-xslt (= 1.22.0-1~bullseye), nginx-module-xslt (= 1.22.1-1~bullseye), nginx-module-xslt (= 1.24.0-1~bullseye), nginx-module-xslt (= 1.26.0-1~bullseye), nginx-module-xslt (= 1.26.1-1~bullseye), nginx-module-xslt (= 1.26.1-2~bullseye), nginx-module-xslt (= 1.26.2-2~bullseye), nginx-module-xslt (= 1.26.3-2~bullseye), nginx-module-xslt (= 1.28.0-1~bullseye), nginx-module-xslt (= 1.28.1-1~bullseye)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.22.0-1~buster
  - Architectures: amd64, arm64, i386
  - Suite: buster
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.16.0-1~buster), nginx (= 1.16.1-1~buster), nginx (= 1.18.0-1~buster), nginx (= 1.18.0-2~buster), nginx (= 1.20.0-1~buster), nginx (= 1.20.1-1~buster), nginx (= 1.20.2-1~buster), nginx (= 1.22.0-1~buster), nginx-module-xslt (= 1.16.0-1~buster), nginx-module-xslt (= 1.16.1-1~buster), nginx-module-xslt (= 1.18.0-1~buster), nginx-module-xslt (= 1.18.0-2~buster), nginx-module-xslt (= 1.20.0-1~buster), nginx-module-xslt (= 1.20.1-1~buster), nginx-module-xslt (= 1.20.2-1~buster), nginx-module-xslt (= 1.22.0-1~buster)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.16.0-1~jessie
  - Architectures: amd64, i386
  - Suite: jessie
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~jessie), nginx (= 1.10.3-1~jessie), nginx (= 1.12.0-1~jessie), nginx (= 1.12.1-1~jessie), nginx (= 1.12.2-1~jessie), nginx (= 1.14.0-1~jessie), nginx (= 1.14.1-1~jessie), nginx (= 1.14.2-1~jessie), nginx (= 1.16.0-1~jessie), nginx-module-xslt (= 1.10.2-1~jessie), nginx-module-xslt (= 1.10.3-1~jessie), nginx-module-xslt (= 1.12.0-1~jessie), nginx-module-xslt (= 1.12.1-1~jessie), nginx-module-xslt (= 1.12.2-1~jessie), nginx-module-xslt (= 1.14.0-1~jessie), nginx-module-xslt (= 1.14.1-1~jessie), nginx-module-xslt (= 1.14.2-1~jessie), nginx-module-xslt (= 1.16.0-1~jessie)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.18.0-2~stretch
  - Architectures: amd64, i386
  - Suite: stretch
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.12.0-1~stretch), nginx (= 1.12.1-1~stretch), nginx (= 1.12.2-1~stretch), nginx (= 1.14.0-1~stretch), nginx (= 1.14.1-1~stretch), nginx (= 1.14.2-1~stretch), nginx (= 1.16.0-1~stretch), nginx (= 1.16.1-1~stretch), nginx (= 1.18.0-1~stretch), nginx (= 1.18.0-2~stretch), nginx-module-xslt (= 1.12.0-1~stretch), nginx-module-xslt (= 1.12.1-1~stretch), nginx-module-xslt (= 1.12.2-1~stretch), nginx-module-xslt (= 1.14.0-1~stretch), nginx-module-xslt (= 1.14.1-1~stretch), nginx-module-xslt (= 1.14.2-1~stretch), nginx-module-xslt (= 1.16.0-1~stretch), nginx-module-xslt (= 1.16.1-1~stretch), nginx-module-xslt (= 1.18.0-1~stretch), nginx-module-xslt (= 1.18.0-2~stretch)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~trixie
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.28.0-1~trixie), nginx (= 1.28.1-1~trixie), nginx-module-xslt (= 1.28.0-1~trixie), nginx-module-xslt (= 1.28.1-1~trixie)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.12.1-1~wheezy
  - Architectures: amd64, i386
  - Suite: wheezy
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: http://nginx.org
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sergey Budnevitch <sb@nginx.com>
  - Section: debug
  - Priority: extra
  - depends: nginx (= 1.10.2-1~wheezy), nginx (= 1.10.3-1~wheezy), nginx (= 1.12.0-1~wheezy), nginx (= 1.12.1-1~wheezy), nginx-module-xslt (= 1.10.2-1~wheezy), nginx-module-xslt (= 1.10.3-1~wheezy), nginx-module-xslt (= 1.12.0-1~wheezy), nginx-module-xslt (= 1.12.1-1~wheezy)

  </details>

- **nginx-module-xslt-dbg**
  - Latest version: 1.28.1-1~bookworm
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: nginx
  - Description: debug symbols for the nginx-module-xslt
  - Homepage: https://nginx.org/
  - Install: `sudo apt-get install nginx-module-xslt-dbg`
  - Install (apt): `sudo apt install nginx-module-xslt-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: NGINX Packaging <nginx-packaging@f5.com>
  - Section: debug
  - Priority: optional
  - depends: nginx (= 1.24.0-1~bookworm), nginx (= 1.26.0-1~bookworm), nginx (= 1.26.1-1~bookworm), nginx (= 1.26.1-2~bookworm), nginx (= 1.26.2-1~bookworm), nginx (= 1.26.3-1~bookworm), nginx (= 1.28.0-1~bookworm), nginx (= 1.28.1-1~bookworm), nginx-module-xslt (= 1.24.0-1~bookworm), nginx-module-xslt (= 1.26.0-1~bookworm), nginx-module-xslt (= 1.26.1-1~bookworm), nginx-module-xslt (= 1.26.1-2~bookworm), nginx-module-xslt (= 1.26.2-2~bookworm), nginx-module-xslt (= 1.26.3-2~bookworm), nginx-module-xslt (= 1.28.0-1~bookworm), nginx-module-xslt (= 1.28.1-1~bookworm)

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: bullseye
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: buster
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: jessie
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: https://www.nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: stretch
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: trixie
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: wheezy
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

  </details>

- **nginx-nr-agent**
  - Latest version: 2.0.0-11
  - Architectures: all
  - Suite: bookworm
  - Components: nginx
  - Description: New Relic agent for NGINX and NGINX Plus
  - Homepage: http://nginx.com/
  - Install: `sudo apt-get install nginx-nr-agent`
  - Install (apt): `sudo apt install nginx-nr-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Andrei Belov <defan@nginx.com>
  - Section: misc
  - Priority: optional
  - depends: lsb-base, python, python-daemon, python-setproctitle

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

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install nginx
- Repo tags: web, server
- Key notes: NGINX Open Source official repository key
- Key tags: web, server
