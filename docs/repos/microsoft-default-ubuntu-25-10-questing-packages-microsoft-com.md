# Microsoft - ubuntu-25.10 - default (ubuntu-25.10)

## Repository
- Repository ID: `microsoft-default-ubuntu-25-10-questing-packages-microsoft-com`
- OS: `ubuntu-25.10`
- Source: `[arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/25.10/prod questing main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/25.10
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
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/25.10/prod questing main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-25-10-questing-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-prod.gpg] https://packages.microsoft.com/ubuntu/25.10/prod questing main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-25-10-questing-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (5)</summary>

<div class="packages-nav">
<a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-P">P</a>
</div>


### <a id="packages-L"></a>L

- **libmsquic**
  - Latest version: 2.5.6
  - Architectures: amd64, arm64, armhf
  - Suite: questing
  - Components: main
  - Description: Microsoft implementation of the IETF QUIC protocol
  - Homepage: https://github.com/microsoft/msquic
  - Install: `sudo apt-get install libmsquic`
  - Install (apt): `sudo apt install libmsquic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft QUIC Team <quicdev@microsoft.com>
  - Section: default
  - Priority: optional
  - depends: libnl-route-3-200, libnuma1, libssl3t64, libxdp1
  - conflicts: libmsquic-debug
  - provides: libmsquic

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64, arm64
  - Suite: questing
  - Components: main
  - Description: Microsoft Defender (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: iptables, libc6 (>= 2.23)

  </details>

- **msodbcsql18**
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: questing
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
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: questing
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


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.1-ubuntu25.10
  - Architectures: all
  - Suite: questing
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


Errors during fetch:
- apt-get update failed

</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
