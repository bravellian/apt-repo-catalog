# Microsoft - debian-8 - default

## Repository
- Repository ID: `microsoft-default-debian-8-jessie-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/debian/8/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/8
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `jessie`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: debian-8

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

### Suite: jessie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/8/prod jessie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-8-jessie-packages-microsoft-com-jessie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/8/prod jessie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-8-jessie-packages-microsoft-com-jessie.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (87)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-J">J</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: AAD NSS and PAM extensions
  - Install: `sudo apt-get install aadlogin`
  - Install (apt): `sudo apt install aadlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libcurl3, libuuid1, openssh-server, uuid-runtime
  - conflicts: aadsshlogin

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.2 Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.1.0-preview1-final**
  - Latest version: 2.1.0-preview1-final-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.0-preview1-final Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1.0-preview1-final`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1.0-preview1-final`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1.0-preview1-26216-03, libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.1.0-preview2-final**
  - Latest version: 2.1.0-preview2-final-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.0-preview2-final Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1.0-preview2-final`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1.0-preview2-final`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1.0-preview2-26406-04, libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.1.0-rc1-final**
  - Latest version: 2.1.0-rc1-final-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.0-rc1-final Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1.0-rc1-final`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1.0-rc1-final`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1.0-rc1, libc6 (>= 2.14)

  </details>

- **aspnetcore-store-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.0 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.0`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: libc6 (>= 2.14)

  </details>

- **aspnetcore-store-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.3 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.3`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.0

  </details>

- **aspnetcore-store-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.5 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.5`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3

  </details>

- **aspnetcore-store-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.6 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.6`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.5

  </details>

- **aspnetcore-store-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.7 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.7`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.6

  </details>

- **aspnetcore-store-2.0.8**
  - Latest version: 2.0.8-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.8 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.8`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.7

  </details>

- **aspnetcore-store-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft ASP.NET Core 2.0.9 Runtime Package Store
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-store-2.0.9`
  - Install (apt): `sudo apt install aspnetcore-store-2.0.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.8

  </details>

- **azdata-cli**
  - Latest version: 20.3.10-1~jessie
  - Architectures: all
  - Suite: jessie
  - Components: main
  - Description: AZDATA CLI
  - Homepage: http://www.microsoft.com/sql
  - Install: `sudo apt-get install azdata-cli`
  - Install (apt): `sudo apt install azdata-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: AZDATA CLI Team <dpgswdist@microsoft.com>
  - Section: python
  - Priority: extra
  - depends: libc6 (>= 2.17), libkrb5-dev, libssl1.0.0 (>= 1.0.1), unixodbc

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.5455-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Azure Function Core Tools v4
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools`
  - Install (apt): `sudo apt install azure-functions-core-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ahmed ElSayed <ahmels@microsoft.com>
  - Section: devel
  - Priority: optional
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-3**
  - Latest version: 3.0.4899-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Azure Function Core Tools v3
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools-3`
  - Install (apt): `sudo apt install azure-functions-core-tools-3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ahmed ElSayed <ahmels@microsoft.com>
  - Section: devel
  - Priority: optional
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.0.5455-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Azure Function Core Tools v4
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools-4`
  - Install (apt): `sudo apt install azure-functions-core-tools-4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ahmed ElSayed <ahmels@microsoft.com>
  - Section: devel
  - Priority: optional
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>


### <a id="packages-B"></a>B

- **blobfuse**
  - Latest version: 1.2.1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: blobfuse 1.2.1 - FUSE adapter for Azure Blob Storage
  - Install: `sudo apt-get install blobfuse`
  - Install (apt): `sudo apt install blobfuse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft - Azure Storage
  - Section: devel
  - Priority: optional
  - depends: fuse

  </details>


### <a id="packages-C"></a>C

- **codespaces**
  - Latest version: 1.0.2804
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Codespaces allows you to register your local machine/development environment, which allows you to access them from remote VS Code instances or a browser based editor, enabling you to work on any project from anywhere with the tools you already know.
  - Install: `sudo apt-get install codespaces`
  - Install (apt): `sudo apt install codespaces`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation
  - Section: devel
  - Priority: extra
  - depends: desktop-file-utils, gnome-keyring, libkrb5-3, libsecret-1-0, openssl, x11-utils, zlib1g

  </details>


### <a id="packages-D"></a>D

- **devskim**
  - Latest version: 0.1.11
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: DevSkim security linter
  - Install: `sudo apt-get install devskim`
  - Install (apt): `sudo apt install devskim`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation <devskim@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: libunwind8

  </details>

- **dotnet-host**
  - Latest version: 2.1.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host - 2.0.9
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: libc6, libc6 (>= 2.4), libgcc1, libgcc1 (>= 1:4.1.1), libstdc++6, libstdc++6 (>= 4.8)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.0 2.0.0
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.0), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.3 2.0.3
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.3`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.3), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.4 2.0.4
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.4`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.4), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.5 2.0.5
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.5`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.5), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.6 2.0.6
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.6`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.6), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.7 2.0.7
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.7`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.7), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.0.9 2.0.9
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-hostfxr-2.0.9`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.0.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.0.9), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.1**
  - Latest version: 2.1.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.2 2.1.2
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.0), dotnet-host (>= 2.1.1), dotnet-host (>= 2.1.2), dotnet-host (>= 2.1.3), dotnet-host (>= 2.1.4), dotnet-host (>= 2.1.5), dotnet-host (>= 2.1.6), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.1.0-preview2-26406-04**
  - Latest version: 2.1.0-preview2-26406-04-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.0 Preview 2 2.1.0-preview2-26406-04
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1.0-preview2-26406-04`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1.0-preview2-26406-04`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.0-preview2-26406-04)

  </details>

- **dotnet-hostfxr-2.1.0-rc1**
  - Latest version: 2.1.0-rc1-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.0 Release Candidate 1 2.1.0-rc1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1.0-rc1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1.0-rc1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.0-rc1)

  </details>

- **dotnet-hosting-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.0 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.0`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.0, dotnet-runtime-2.0.0

  </details>

- **dotnet-hosting-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.3 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.3`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3, dotnet-runtime-2.0.3

  </details>

- **dotnet-hosting-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.4 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.4`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3, dotnet-runtime-2.0.4

  </details>

- **dotnet-hosting-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.5 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.5`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.5, dotnet-runtime-2.0.5

  </details>

- **dotnet-hosting-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.6 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.6`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.6, dotnet-runtime-2.0.6

  </details>

- **dotnet-hosting-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.7 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.7`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.7, dotnet-runtime-2.0.7

  </details>

- **dotnet-hosting-2.0.8**
  - Latest version: 2.0.8-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.8 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.8`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.8, dotnet-runtime-2.0.7

  </details>

- **dotnet-hosting-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core 2.0.9 Linux Server Hosting
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install dotnet-hosting-2.0.9`
  - Install (apt): `sudo apt install dotnet-hosting-2.0.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.9, dotnet-runtime-2.0.9

  </details>

- **dotnet-runtime-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.0 Microsoft.NETCore.App 2.0.0
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.0`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.0, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.3 Microsoft.NETCore.App 2.0.3
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.3`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.3, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.4 Microsoft.NETCore.App 2.0.4
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.4`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.4, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.5 Microsoft.NETCore.App 2.0.5
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.5`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.5, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.6 Microsoft.NETCore.App 2.0.6
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.6`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.6, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.7 Microsoft.NETCore.App 2.0.7
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.7`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.7, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.0.9 Microsoft.NETCore.App 2.0.9
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-runtime-2.0.9`
  - Install (apt): `sudo apt install dotnet-runtime-2.0.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.0.9, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.6 Microsoft.NETCore.App 2.1.6
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1 (>= 2.1.0), dotnet-hostfxr-2.1 (>= 2.1.1), dotnet-hostfxr-2.1 (>= 2.1.2), dotnet-hostfxr-2.1 (>= 2.1.3), dotnet-hostfxr-2.1 (>= 2.1.4), dotnet-hostfxr-2.1 (>= 2.1.5), dotnet-hostfxr-2.1 (>= 2.1.6), dotnet-runtime-deps-2.1 (>= 2.1.0), dotnet-runtime-deps-2.1 (>= 2.1.1), dotnet-runtime-deps-2.1 (>= 2.1.2), dotnet-runtime-deps-2.1 (>= 2.1.3), dotnet-runtime-deps-2.1 (>= 2.1.4), dotnet-runtime-deps-2.1 (>= 2.1.5), dotnet-runtime-deps-2.1 (>= 2.1.6)

  </details>

- **dotnet-runtime-2.1.0-preview1-26216-03**
  - Latest version: 2.1.0-preview1-26216-03-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.0 Preview 1 Microsoft.NETCore.App 2.1.0-preview1-26216-03
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1.0-preview1-26216-03`
  - Install (apt): `sudo apt install dotnet-runtime-2.1.0-preview1-26216-03`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1.0-preview1-26216-03

  </details>

- **dotnet-runtime-2.1.0-preview2-26406-04**
  - Latest version: 2.1.0-preview2-26406-04-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.0 Preview 2 Microsoft.NETCore.App 2.1.0-preview2-26406-04
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1.0-preview2-26406-04`
  - Install (apt): `sudo apt install dotnet-runtime-2.1.0-preview2-26406-04`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1.0-preview2-26406-04

  </details>

- **dotnet-runtime-2.1.0-rc1**
  - Latest version: 2.1.0-rc1-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.0 Release Candidate 1 Microsoft.NETCore.App 2.1.0-rc1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1.0-rc1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1.0-rc1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1.0-rc1

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.6-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.5
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu52, liblttng-ust0, libssl1.0.0, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.0.0
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.0.0`
  - Install (apt): `sudo apt install dotnet-sdk-2.0.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.0, dotnet-runtime-2.0.0

  </details>

- **dotnet-sdk-2.0.2**
  - Latest version: 2.0.2-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.0.2
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.0.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.0.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.0, dotnet-runtime-2.0.0

  </details>

- **dotnet-sdk-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.0.3
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.0.3`
  - Install (apt): `sudo apt install dotnet-sdk-2.0.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3, dotnet-runtime-2.0.3

  </details>

- **dotnet-sdk-2.1**
  - Latest version: 2.1.500-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.500
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1`
  - Install (apt): `sudo apt install dotnet-sdk-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1 (>= 2.1.0), aspnetcore-runtime-2.1 (>= 2.1.1), aspnetcore-runtime-2.1 (>= 2.1.2), aspnetcore-runtime-2.1 (>= 2.1.3), aspnetcore-runtime-2.1 (>= 2.1.4), aspnetcore-runtime-2.1 (>= 2.1.5), aspnetcore-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.101**
  - Latest version: 2.1.101-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.101
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.101`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.101`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.6, dotnet-runtime-2.0.6

  </details>

- **dotnet-sdk-2.1.103**
  - Latest version: 2.1.103-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.103
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.103`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.103`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.6, dotnet-runtime-2.0.6

  </details>

- **dotnet-sdk-2.1.104**
  - Latest version: 2.1.104-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.104
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.104`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.104`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.6, dotnet-runtime-2.0.6

  </details>

- **dotnet-sdk-2.1.105**
  - Latest version: 2.1.105-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.105
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.105`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.105`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.0.7

  </details>

- **dotnet-sdk-2.1.2**
  - Latest version: 2.1.2-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.2
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3, dotnet-runtime-2.0.3

  </details>

- **dotnet-sdk-2.1.200**
  - Latest version: 2.1.200-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.200
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.200`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.200`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.8, dotnet-runtime-2.0.7

  </details>

- **dotnet-sdk-2.1.201**
  - Latest version: 2.1.201-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.201
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.201`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.201`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.8, dotnet-runtime-2.0.7

  </details>

- **dotnet-sdk-2.1.202**
  - Latest version: 2.1.202-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.202
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.202`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.202`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.9, dotnet-runtime-2.0.9

  </details>

- **dotnet-sdk-2.1.3**
  - Latest version: 2.1.3-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.3
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.3`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.3, dotnet-runtime-2.0.4

  </details>

- **dotnet-sdk-2.1.300-preview2-008530**
  - Latest version: 2.1.300-preview2-008530-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.300 - Preview
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.300-preview2-008530`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.300-preview2-008530`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1.0-preview2-final, dotnet-runtime-2.1.0-preview2-26406-04, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.300-preview2-008533**
  - Latest version: 2.1.300-preview2-008533-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.300 - Preview
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.300-preview2-008533`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.300-preview2-008533`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1.0-preview2-final, dotnet-runtime-2.1.0-preview2-26406-04, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.300-rc1-008673**
  - Latest version: 2.1.300-rc1-008673-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.300 - rc1
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.300-rc1-008673`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.300-rc1-008673`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1.0-rc1-final, dotnet-runtime-2.1.0-rc1, libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.4**
  - Latest version: 2.1.4-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.4
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.4`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.5, dotnet-runtime-2.0.5

  </details>


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20251111.1
  - Architectures: amd64, arm64
  - Suite: jessie
  - Components: main
  - Description: Azure Command Launcher for Java is a lightweight utility that simplifies how Java developers launch their applications on Azure.
  - Homepage: https://learn.microsoft.com/java/jaz/overview
  - Install: `sudo apt-get install jaz`
  - Install (apt): `sudo apt install jaz`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Build of OpenJDK Team <openjdk-support@microsoft.com>
  - Section: default
  - Priority: extra

  </details>


### <a id="packages-L"></a>L

- **libodbc1**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: ODBC library for Unix
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install libodbc1`
  - Install (apt): `sudo apt install libodbc1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2)
  - preDepends: multiarch-support
  - suggests: msodbcsql17, unixodbc-bin
  - breaks: unixodbc (<< 2.2.14p2-3)
  - replaces: unixodbc (<< 2.2.14p2-3)

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: jessie
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
  - Suite: jessie
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
  - Suite: jessie
  - Components: main
  - Description: Microsoft Defender for Endpoints Netfitler
  - Install: `sudo apt-get install mde-netfilter-src`
  - Install (apt): `sudo apt install mde-netfilter-src`
  <details>
  <summary>More metadata</summary>

  - Maintainer: root <root@6bacc4c1c000000>
  - Section: alien
  - Priority: extra

  </details>

- **msodbcsql**
  - Latest version: 13.1.9.2-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql17**
  - Latest version: 17.6.1.1-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-cli**
  - Latest version: 1.0.0-1
  - Architectures: all
  - Suite: jessie
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
  - depends: less, libffi-dev, libicu52 | libicu55 | libicu57, libicu52 | libicu55 | libicu57 | libicu60, libunwind8

  </details>

- **mssql-tools**
  - Latest version: 17.6.1.1-1
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libkrb5-3, libstdc++6 (>= 4.9), msodbcsql (<< 13.2.0.0), msodbcsql (>= 13.1.0.0), msodbcsql17 (<< 17.1.0.0), msodbcsql17 (<< 17.2.0.0), msodbcsql17 (<< 17.3.0.0), msodbcsql17 (<< 17.4.0.0), msodbcsql17 (>= 17.0.0.1), msodbcsql17 (>= 17.1.0.1), msodbcsql17 (>= 17.2.0.0), msodbcsql17 (>= 17.3.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **odbcinst**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Helper program for accessing odbc ini files
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst`
  - Install (apt): `sudo apt install odbcinst`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.4), odbcinst1debian2 (>= 2.3.7)
  - conflicts: odbcinst1
  - replaces: odbcinst1, odbcinst1debian1 (<< 2.3.7), unixodbc (<< 2.3.7)

  </details>

- **odbcinst1debian2**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Support library for accessing odbc ini files
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst1debian2`
  - Install (apt): `sudo apt install odbcinst1debian2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2), odbcinst (>= 2.3.7)
  - preDepends: multiarch-support
  - conflicts: odbcinst1, odbcinst1debian1
  - breaks: libiodbc2, libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.3.7)

  </details>

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: jessie
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
  - Latest version: 1.1-debian8
  - Architectures: all
  - Suite: jessie
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

- **powershell**
  - Latest version: 6.1.2-1.debian.8
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell`
  - Install (apt): `sudo apt install powershell`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: extra
  - depends: libc6, libcurl3, libgcc1, libgssapi-krb5-2, libicu52, liblttng-ust0, libssl1.0.0, libstdc++6, libunwind8, libuuid1, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 6.2.0-preview.3-1.debian.8
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell-preview`
  - Install (apt): `sudo apt install powershell-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: extra
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu52, liblttng-ust0, libssl1.0.0, libstdc++6, zlib1g

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: jessie
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


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Basic ODBC tools
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc`
  - Install (apt): `sudo apt install unixodbc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libodbc1 (>= 2.3.7), odbcinst1debian2 (>= 2.3.7)
  - conflicts: unixodbc-bin (<< 2.3.7)

  </details>

- **unixodbc-dev**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: ODBC libraries for UNIX (development files)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc-dev`
  - Install (apt): `sudo apt install unixodbc-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ubuntu Developers <ubuntu-devel-discuss@lists.ubuntu.com>
  - Section: devel
  - Priority: extra
  - depends: libltdl3-dev, odbcinst1debian2 (= 2.3.7), unixodbc (= 2.3.7)
  - conflicts: libiodbc2-dev, remembrance-agent (<< 2.11-4)

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 2.0.28
  - Architectures: amd64, arm64
  - Suite: jessie
  - Components: main
  - Description: VirtualClient, the open sourced workload automation.
  - Install: `sudo apt-get install virtualclient`
  - Install (apt): `sudo apt install virtualclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Virtual Client Team <virtualclient@microsoft.com>

  </details>

- **vso**
  - Latest version: 1.0.1998
  - Architectures: amd64
  - Suite: jessie
  - Components: main
  - Description: Visual Studio Online allows you to register your local machine/development environment, which allows you to access them from remote VS Code instances or a browser based editor, enabling you to work on any project from anywhere with the tools you already know.
  - Install: `sudo apt-get install vso`
  - Install (apt): `sudo apt install vso`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation
  - Section: devel
  - Priority: extra
  - depends: desktop-file-utils, gnome-keyring, libkrb5-3, libsecret-1-0, openssl, x11-utils, zlib1g

  </details>


Errors during fetch:
- apt-get update failed

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, debian
- Key tags: microsoft
