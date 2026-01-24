# Microsoft - ubuntu-24.10 - default (ubuntu-24.10)

## Repository
- Repository ID: `microsoft-default-ubuntu-24-10-oracular-packages-microsoft-com`
- OS: `ubuntu-24.10`
- Source: `[arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/24.10/prod oracular main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/24.10
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/24.10/prod oracular main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-24-10-oracular-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/24.10/prod oracular main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-24-10-oracular-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (8)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a>
</div>


### <a id="packages-A"></a>A

- **aadsshlogin**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 3.1~), libsemanage2 (>= 2.0.32), libssl3t64 (>= 3.0.0), libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.5-2), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: oracular
  - Components: main
  - Description: Microsoft Defender (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.23), libpcre3, mde-netfilter, uuid-runtime

  </details>

- **msodbcsql18**
  - Latest version: 18.5.1.1-1
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql18`
  - Install (apt): `sudo apt install msodbcsql18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), odbcinst, openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-tools18**
  - Latest version: 18.4.1.1-1
  - Architectures: amd64, arm64
  - Suite: oracular
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools18`
  - Install (apt): `sudo apt install mssql-tools18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), msodbcsql18 (>= 18.0.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: oracular
  - Components: main
  - Description: Open Management Infrastructure
  - Install: `sudo apt-get install omi`
  - Install (apt): `sudo apt install omi`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.3.6), libpam-runtime (>= 0.79-3)
  - provides: omi

  </details>


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.1-ubuntu24.10
  - Architectures: all
  - Suite: oracular
  - Components: main
  - Description: Apt configuration for packages.microsoft.com
  - Install: `sudo apt-get install packages-microsoft-prod`
  - Install (apt): `sudo apt install packages-microsoft-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Repo Admins <aztuxrepo@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: ca-certificates

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: oracular
  - Components: main
  - Description: Microsoft System Center Operations Manager for UNIX/Linux agent
  - Install: `sudo apt-get install scx`
  - Install (apt): `sudo apt install scx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation
  - Section: utils
  - Priority: optional
  - depends: omi (>= 1.0.8.6)
  - provides: scx

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
