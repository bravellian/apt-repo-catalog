# Microsoft - ubuntu-16.10 - default (ubuntu-16.10)

## Repository
- Repository ID: `microsoft-default-ubuntu-16-10-yakkety-packages-microsoft-com`
- OS: `ubuntu-16.10`
- Source: `[arch=amd64] https://packages.microsoft.com/ubuntu/16.10/prod yakkety main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/16.10
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
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/16.10/prod yakkety main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-16-10-yakkety-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/16.10/prod yakkety main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-16-10-yakkety-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (16)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-D">D</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **azcopy**
  - Latest version: 6.0.0-netcorepreview
  - Architectures: all
  - Suite: yakkety
  - Components: main
  - Description: Transferring data from/to azure storage blob/file
  - Install: `sudo apt-get install azcopy`
  - Install (apt): `sudo apt install azcopy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Emma Zhu<emmazhu@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: dotnet-dev-1.0.1(>= 1.0.1)
  - suggests: parted-doc

  </details>


### <a id="packages-D"></a>D

- **dotnet-dev-1.0.4**
  - Latest version: 1.0.4-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: .NET Core SDK 1.0.4
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.0.4`
  - Install (apt): `sudo apt install dotnet-dev-1.0.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.1.2, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 6)

  </details>

- **dotnet-host**
  - Latest version: 1.1.0-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft .NET Core 1.1.3 - Host
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-1.1.0**
  - Latest version: 1.1.0-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft .NET Core 1.1.3 - Host FX Resolver 1.1.0
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.2**
  - Latest version: 1.1.2-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft .NET Core 1.1.2 - Runtime Microsoft.NETCore.App 1.1.2
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.2`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu57 (>= 57.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 6), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dsc**
  - Latest version: 1.1.1.70
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Windows Powershell Desired State Configuration for Linux
  - Install: `sudo apt-get install dsc`
  - Install (apt): `sudo apt install dsc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: utils
  - Priority: optional
  - depends: omi (>= 1.0.8-3)
  - provides: dsc

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft Defender (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: auditd, curl (>= 7.5), dmidecode, libatomic1, libc6 (>= 2.23), libfuse2, libpcre3, libseccomp2, libselinux1, libuuid1, mde-netfilter, perl, python3, rsyslog, uuid-runtime

  </details>

- **mde-netfilter**
  - Latest version: 100.69.73
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft Defender for Endpoints Netfitler ({{{RELEASE_RING}}}) Microsoft Defender for Endpoints Netfilter is an open source software to filter packets in userspace
  - Install: `sudo apt-get install mde-netfilter`
  - Install (apt): `sudo apt install mde-netfilter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender for Endponts <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: libglib2.0-0, libnetfilter-queue1

  </details>

- **mde-netfilter-src**
  - Latest version: 100.69.73-2
  - Architectures: all, amd64
  - Suite: yakkety
  - Components: main
  - Description: Microsoft Defender for Endpoints Netfitler
  - Install: `sudo apt-get install mde-netfilter-src`
  - Install (apt): `sudo apt install mde-netfilter-src`
  <details>
  <summary>More metadata</summary>

  - Maintainer: root <root@f66f6bc14b8d>
  - Section: alien
  - Priority: extra

  </details>

- **msodbcsql**
  - Latest version: 13.1.9.0-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1), unixodbc-utf16 (>= 2.3.1-1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-cli**
  - Latest version: 0.15.0-1
  - Architectures: all
  - Suite: yakkety
  - Components: main
  - Description: mssql-cli
  - Homepage: https://github.com/dbcli/mssql-cli
  - Install: `sudo apt-get install mssql-cli`
  - Install (apt): `sudo apt install mssql-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Server CLI Team <sqlcli@microsoft.com>
  - Section: python
  - Priority: extra
  - depends: libicu52 | libicu55 | libicu57, libicu52 | libicu55 | libicu57 | libicu60, libunwind8

  </details>

- **mssql-tools**
  - Latest version: 14.0.6.0-1
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libgss3, libkrb5-3, libstdc++6 (>= 5.2), msodbcsql (<< 13.2.0.0), msodbcsql (>= 13.0.0.0), msodbcsql (>= 13.1.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: yakkety
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
  - Latest version: 1.0-1
  - Architectures: all
  - Suite: yakkety
  - Components: main
  - Description: Apt configuration for packages.microsoft.com
  - Install: `sudo apt-get install packages-microsoft-prod`
  - Install (apt): `sudo apt install packages-microsoft-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Stephen Zarkos <stephen.zarkos@microsoft.com>
  - Section: admin
  - Priority: extra

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: yakkety
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


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 1.15.25
  - Architectures: amd64
  - Suite: yakkety
  - Components: main
  - Description: VirtualClient, the open sourced workload automation.
  - Install: `sudo apt-get install virtualclient`
  - Install (apt): `sudo apt install virtualclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Virtual Client Team <virtualclient@microsoft.com>

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
