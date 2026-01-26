# Microsoft - ubuntu-14.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-14-04-trusty-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/14.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/14.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `trusty`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-14.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

### Suite: trusty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/14.04/prod trusty main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-14-04-trusty-packages-microsoft-com-trusty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/14.04/prod trusty main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-14-04-trusty-packages-microsoft-com-trusty.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (176)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: trusty
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

- **aadlogin-selinux**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.2.5-1), policycoreutils (>=2.2.5), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.11-1
  - Architectures: amd64
  - Suite: trusty
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
  - depends: dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.8), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.1.0-preview1-final**
  - Latest version: 2.1.0-preview1-final-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **aspnetcore-runtime-2.2**
  - Latest version: 2.2.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft ASP.NET Core 2.2.4 Shared Framework
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-2.2`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), dotnet-runtime-2.2 (>= 2.2.5), libc6 (>= 2.14)

  </details>

- **aspnetcore-store-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **azcopy**
  - Latest version: 7.2.0-netcore
  - Architectures: all, amd64
  - Suite: trusty
  - Components: main
  - Description: Transferring data from/to azure storage blob/file
  - Install: `sudo apt-get install azcopy`
  - Install (apt): `sudo apt install azcopy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Emma Zhu<emmazhu@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: dotnet-dev-1.0.1(>= 1.0.1), dotnet-runtime-2.0.0, dotnet-sdk-2.0.0(>= 2.0.0), libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52, liblttng-ust0, libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
  - suggests: parted-doc

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.4590-1
  - Architectures: all, amd64
  - Suite: trusty
  - Components: main
  - Description: Azure Function Cli 2.0
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools`
  - Install (apt): `sudo apt install azure-functions-core-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ShunXian Cai <shucai@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-deps-2.1 (>= 2.1.1), dotnet-sdk-2.0.0
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-3**
  - Latest version: 3.0.4585-1
  - Architectures: amd64
  - Suite: trusty
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
  - Latest version: 4.0.4590-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Azure Function Core Tools v3
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

- **azure.function.cli**
  - Latest version: 2.0.1~beta.21-1
  - Architectures: all
  - Suite: trusty
  - Components: main
  - Description: Azure Functions Core Tools
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure.function.cli`
  - Install (apt): `sudo apt install azure.function.cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ShunXian Cai <shucai@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: dotnet-sdk-2.0.0

  </details>


### <a id="packages-B"></a>B

- **blobfuse**
  - Latest version: 1.2.1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: FUSE adapter for Azure Blob Storage - MIT License
  - Homepage: https://github.com/azure/azure-storage-fuse
  - Install: `sudo apt-get install blobfuse`
  - Install (apt): `sudo apt install blobfuse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft - Azure Storage
  - Section: devel
  - Priority: optional
  - depends: fuse, libc6 (>= 2.14), libcurl3-gnutls (>= 7.16.2), libfuse2 (>= 2.8.1), libgcc1 (>= 1:4.1.1), libgcrypt11 (>= 1.5.1), libgnutls26 (>= 2.12.17-0), libstdc++6 (>= 4.6)

  </details>


### <a id="packages-C"></a>C

- **codespaces**
  - Latest version: 1.0.2804
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-dev-1.0.4**
  - Latest version: 1.0.4-1
  - Architectures: amd64
  - Suite: trusty
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.5, dotnet-sharedframework-microsoft.netcore.app-1.1.2, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.10
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.10`
  - Install (apt): `sudo apt install dotnet-dev-1.1.10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.12, dotnet-sharedframework-microsoft.netcore.app-1.1.9, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.11
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.11`
  - Install (apt): `sudo apt install dotnet-dev-1.1.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.13, dotnet-sharedframework-microsoft.netcore.app-1.1.10, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.12
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.12`
  - Install (apt): `sudo apt install dotnet-dev-1.1.12`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.14, dotnet-sharedframework-microsoft.netcore.app-1.1.11, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.13
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.13`
  - Install (apt): `sudo apt install dotnet-dev-1.1.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.15, dotnet-sharedframework-microsoft.netcore.app-1.1.12, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.14**
  - Latest version: 1.1.14-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.14
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.14`
  - Install (apt): `sudo apt install dotnet-dev-1.1.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.16, dotnet-sharedframework-microsoft.netcore.app-1.1.13, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.4**
  - Latest version: 1.1.4-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.4
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.4`
  - Install (apt): `sudo apt install dotnet-dev-1.1.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.7, dotnet-sharedframework-microsoft.netcore.app-1.1.4, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.5
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.5`
  - Install (apt): `sudo apt install dotnet-dev-1.1.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.8, dotnet-sharedframework-microsoft.netcore.app-1.1.5, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.6**
  - Latest version: 1.1.6-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.6
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.6`
  - Install (apt): `sudo apt install dotnet-dev-1.1.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.8, dotnet-sharedframework-microsoft.netcore.app-1.1.5, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.7**
  - Latest version: 1.1.7-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.7
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.7`
  - Install (apt): `sudo apt install dotnet-dev-1.1.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.9, dotnet-sharedframework-microsoft.netcore.app-1.1.6, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.8**
  - Latest version: 1.1.8-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.8
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.8`
  - Install (apt): `sudo apt install dotnet-dev-1.1.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.10, dotnet-sharedframework-microsoft.netcore.app-1.1.7, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-dev-1.1.9**
  - Latest version: 1.1.9-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: .NET Core SDK 1.1.9
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-dev-1.1.9`
  - Install (apt): `sudo apt install dotnet-dev-1.1.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.11, dotnet-sharedframework-microsoft.netcore.app-1.1.8, libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-host**
  - Latest version: 2.2.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core Host - 2.0.6
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

- **dotnet-hostfxr-1.0.1**
  - Latest version: 1.0.1-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.6 - Host FX Resolver 1.0.1
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.0.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.0.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.0.1), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.0**
  - Latest version: 1.1.0-1
  - Architectures: amd64
  - Suite: trusty
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
  - depends: dotnet-host (>= 1.1.0), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.10 - Host FX Resolver 1.1.10
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.10`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.10), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.11 - Host FX Resolver 1.1.11
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.11`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.11), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.12 - Host FX Resolver 1.1.12
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.12`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.12`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.12), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.13 - Host FX Resolver 1.1.13
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.13`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.13), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-1.1.9**
  - Latest version: 1.1.9-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.9 - Host FX Resolver 1.1.9
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-hostfxr-1.1.9`
  - Install (apt): `sudo apt install dotnet-hostfxr-1.1.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 1.1.9), libc6 (>= 2.14), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Latest version: 2.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.0 2.1.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.0), dotnet-host (>= 2.1.1), dotnet-host (>= 2.1.10), dotnet-host (>= 2.1.11), dotnet-host (>= 2.1.2), dotnet-host (>= 2.1.3), dotnet-host (>= 2.1.4), dotnet-host (>= 2.1.5), dotnet-host (>= 2.1.6), dotnet-host (>= 2.1.7), dotnet-host (>= 2.1.8), dotnet-host (>= 2.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.1.0-preview2-26406-04**
  - Latest version: 2.1.0-preview2-26406-04-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-hostfxr-2.2**
  - Latest version: 2.2.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.2.2 2.2.2
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.2`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.2.0), dotnet-host (>= 2.2.1), dotnet-host (>= 2.2.2), dotnet-host (>= 2.2.3), dotnet-host (>= 2.2.4), dotnet-host (>= 2.2.5), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hosting-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-hosting-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Latest version: 2.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.10 Microsoft.NETCore.App 2.1.10
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1 (>= 2.1.0), dotnet-hostfxr-2.1 (>= 2.1.1), dotnet-hostfxr-2.1 (>= 2.1.10), dotnet-hostfxr-2.1 (>= 2.1.11), dotnet-hostfxr-2.1 (>= 2.1.2), dotnet-hostfxr-2.1 (>= 2.1.3), dotnet-hostfxr-2.1 (>= 2.1.4), dotnet-hostfxr-2.1 (>= 2.1.5), dotnet-hostfxr-2.1 (>= 2.1.6), dotnet-hostfxr-2.1 (>= 2.1.7), dotnet-hostfxr-2.1 (>= 2.1.8), dotnet-hostfxr-2.1 (>= 2.1.9), dotnet-runtime-deps-2.1 (>= 2.1.0), dotnet-runtime-deps-2.1 (>= 2.1.1), dotnet-runtime-deps-2.1 (>= 2.1.10), dotnet-runtime-deps-2.1 (>= 2.1.11), dotnet-runtime-deps-2.1 (>= 2.1.2), dotnet-runtime-deps-2.1 (>= 2.1.3), dotnet-runtime-deps-2.1 (>= 2.1.4), dotnet-runtime-deps-2.1 (>= 2.1.5), dotnet-runtime-deps-2.1 (>= 2.1.6), dotnet-runtime-deps-2.1 (>= 2.1.7), dotnet-runtime-deps-2.1 (>= 2.1.8), dotnet-runtime-deps-2.1 (>= 2.1.9)

  </details>

- **dotnet-runtime-2.1.0-preview1-26216-03**
  - Latest version: 2.1.0-preview1-26216-03-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-runtime-2.2**
  - Latest version: 2.2.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.2.2 Microsoft.NETCore.App 2.2.2
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.2 (>= 2.2.0), dotnet-hostfxr-2.2 (>= 2.2.1), dotnet-hostfxr-2.2 (>= 2.2.2), dotnet-hostfxr-2.2 (>= 2.2.3), dotnet-hostfxr-2.2 (>= 2.2.4), dotnet-hostfxr-2.2 (>= 2.2.5), dotnet-runtime-deps-2.2 (>= 2.2.0), dotnet-runtime-deps-2.2 (>= 2.2.1), dotnet-runtime-deps-2.2 (>= 2.2.2), dotnet-runtime-deps-2.2 (>= 2.2.3), dotnet-runtime-deps-2.2 (>= 2.2.4), dotnet-runtime-deps-2.2 (>= 2.2.5)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.3
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

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: dotnet-runtime-deps-2.2 2.2.5
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.2`
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Latest version: 2.1.700-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.301
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1`
  - Install (apt): `sudo apt install dotnet-sdk-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1 (>= 2.1.0), aspnetcore-runtime-2.1 (>= 2.1.1), aspnetcore-runtime-2.1 (>= 2.1.10), aspnetcore-runtime-2.1 (>= 2.1.11), aspnetcore-runtime-2.1 (>= 2.1.2), aspnetcore-runtime-2.1 (>= 2.1.3), aspnetcore-runtime-2.1 (>= 2.1.4), aspnetcore-runtime-2.1 (>= 2.1.5), aspnetcore-runtime-2.1 (>= 2.1.6), aspnetcore-runtime-2.1 (>= 2.1.7), aspnetcore-runtime-2.1 (>= 2.1.8), aspnetcore-runtime-2.1 (>= 2.1.9), dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.8), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.100**
  - Latest version: 2.1.100-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.100
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.100`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.100`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-store-2.0.5, dotnet-runtime-2.0.5

  </details>

- **dotnet-sdk-2.1.101**
  - Latest version: 2.1.101-1
  - Architectures: amd64
  - Suite: trusty
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

- **dotnet-sdk-2.1.102**
  - Latest version: 2.1.102-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core SDK - 2.1.102
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.102`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.102`
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-sdk-2.1.300-preview2-008533**
  - Latest version: 2.1.300-preview2-008533-1
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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
  - Suite: trusty
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

- **dotnet-sdk-2.2**
  - Latest version: 2.2.300-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core SDK 2.2.101
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.2 (>= 2.2.0), aspnetcore-runtime-2.2 (>= 2.2.1), aspnetcore-runtime-2.2 (>= 2.2.2), aspnetcore-runtime-2.2 (>= 2.2.3), aspnetcore-runtime-2.2 (>= 2.2.4), aspnetcore-runtime-2.2 (>= 2.2.5), dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), dotnet-runtime-2.2 (>= 2.2.5), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.10**
  - Latest version: 1.0.10-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.10 - Runtime Microsoft.NETCore.App 1.0.10
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.10`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.11**
  - Latest version: 1.0.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.11 - Runtime Microsoft.NETCore.App 1.0.11
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.11`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.12**
  - Latest version: 1.0.12-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.12 - Runtime Microsoft.NETCore.App 1.0.12
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.12`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.12`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.13**
  - Latest version: 1.0.13-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.13 - Runtime Microsoft.NETCore.App 1.0.13
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.13`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.14**
  - Latest version: 1.0.14-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.14 - Runtime Microsoft.NETCore.App 1.0.14
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.14`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.14`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.15**
  - Latest version: 1.0.15-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.15 - Runtime Microsoft.NETCore.App 1.0.15
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.15`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.15`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.16**
  - Latest version: 1.0.16-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.16 - Runtime Microsoft.NETCore.App 1.0.16
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.16`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.5**
  - Latest version: 1.0.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.5 - Runtime Microsoft.NETCore.App 1.0.5
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.5`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.7**
  - Latest version: 1.0.7-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.7 - Runtime Microsoft.NETCore.App 1.0.7
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.7`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.8**
  - Latest version: 1.0.8-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.8 - Runtime Microsoft.NETCore.App 1.0.8
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.8`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.9**
  - Latest version: 1.0.9-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.0.9 - Runtime Microsoft.NETCore.App 1.0.9
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.0.9`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.0.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblldb-3.6, liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.10 - Runtime Microsoft.NETCore.App 1.1.10
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.10`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.10`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.10, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.11 - Runtime Microsoft.NETCore.App 1.1.11
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.11`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.11, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.12 - Runtime Microsoft.NETCore.App 1.1.12
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.12`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.12`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.12, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.13 - Runtime Microsoft.NETCore.App 1.1.13
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.13`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.13`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.13, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.2**
  - Latest version: 1.1.2-1
  - Architectures: amd64
  - Suite: trusty
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.4**
  - Latest version: 1.1.4-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.4 - Runtime Microsoft.NETCore.App 1.1.4
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.4`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.5 - Runtime Microsoft.NETCore.App 1.1.5
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.5`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.5`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.6**
  - Latest version: 1.1.6-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.6 - Runtime Microsoft.NETCore.App 1.1.6
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.6`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.6`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.7**
  - Latest version: 1.1.7-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.7 - Runtime Microsoft.NETCore.App 1.1.7
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.7`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.8**
  - Latest version: 1.1.8-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.8 - Runtime Microsoft.NETCore.App 1.1.8
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.8`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.9**
  - Latest version: 1.1.9-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft .NET Core 1.1.9 - Runtime Microsoft.NETCore.App 1.1.9
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sharedframework-microsoft.netcore.app-1.1.9`
  - Install (apt): `sudo apt install dotnet-sharedframework-microsoft.netcore.app-1.1.9`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-1.1.9, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu52 (>= 52~m1-1~), liblttng-ust0, libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>


### <a id="packages-L"></a>L

- **libodbc1**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: trusty
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
  - suggests: libmyodbc, msodbcsql17, odbc-postgresql, tdsodbc, unixodbc-bin
  - breaks: unixodbc (<< 2.2.14p2-3)
  - replaces: unixodbc (<< 2.2.14p2-3)

  </details>


### <a id="packages-M"></a>M

- **microsoft-mlserver-adminutil-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Server
  - Install: `sudo apt-get install microsoft-mlserver-adminutil-9.2`
  - Install (apt): `sudo apt install microsoft-mlserver-adminutil-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-adminutil-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-adminutil-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-adminutil-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-cli, dotnet-runtime-2.0.0

  </details>

- **microsoft-mlserver-all-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-all-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-all-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-adminutil-9.2, microsoft-mlserver-computenode-9.2, microsoft-mlserver-config-rserve-9.2, microsoft-mlserver-hadoop-9.2.1, microsoft-mlserver-mlm-py-9.2.1, microsoft-mlserver-mlm-r-9.2.1, microsoft-mlserver-mml-py-9.2.1, microsoft-mlserver-mml-r-9.2.1, microsoft-mlserver-packages-py-9.2.1, microsoft-mlserver-packages-r-9.2.1, microsoft-mlserver-python-9.2.1, microsoft-mlserver-webnode-9.2

  </details>

- **microsoft-mlserver-all-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-all-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-all-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-adminutil-9.3.0, microsoft-mlserver-computenode-9.3.0, microsoft-mlserver-config-rserve-9.3.0, microsoft-mlserver-hadoop-9.3.0, microsoft-mlserver-mlm-py-9.3.0, microsoft-mlserver-mlm-r-9.3.0, microsoft-mlserver-mml-py-9.3.0, microsoft-mlserver-mml-r-9.3.0, microsoft-mlserver-packages-py-9.3.0, microsoft-mlserver-packages-r-9.3.0, microsoft-mlserver-python-9.3.0, microsoft-mlserver-webnode-9.3.0

  </details>

- **microsoft-mlserver-computenode-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Server
  - Install: `sudo apt-get install microsoft-mlserver-computenode-9.2`
  - Install (apt): `sudo apt install microsoft-mlserver-computenode-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.1.2

  </details>

- **microsoft-mlserver-computenode-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-computenode-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-computenode-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-2.0.0

  </details>

- **microsoft-mlserver-config-rserve-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: MLServer O16N Rserve
  - Install: `sudo apt-get install microsoft-mlserver-config-rserve-9.2`
  - Install (apt): `sudo apt install microsoft-mlserver-config-rserve-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-r-9.2.1

  </details>

- **microsoft-mlserver-config-rserve-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-config-rserve-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-config-rserve-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-r-9.3.0

  </details>

- **microsoft-mlserver-hadoop-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-hadoop-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-hadoop-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: python

  </details>

- **microsoft-mlserver-hadoop-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-hadoop-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-hadoop-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-mlm-py-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-py-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-py-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-mml-py-9.2.1

  </details>

- **microsoft-mlserver-mlm-py-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-py-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-py-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-mml-py-9.3.0

  </details>

- **microsoft-mlserver-mlm-r-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-r-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-r-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-mml-r-9.2.1

  </details>

- **microsoft-mlserver-mlm-r-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-r-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-r-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-mml-r-9.3.0

  </details>

- **microsoft-mlserver-mml-py-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mml-py-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-mml-py-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: gettext, libcurl4-openssl-dev, libicu-dev, liblttng-ust-dev, libssl-dev, libunwind8, libunwind8-dev, microsoft-mlserver-packages-py-9.2.1, unzip, uuid-dev

  </details>

- **microsoft-mlserver-mml-py-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mml-py-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-mml-py-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-py-9.3.0

  </details>

- **microsoft-mlserver-mml-r-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mml-r-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-mml-r-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: gettext, libcurl4-openssl-dev, libicu-dev, liblttng-ust-dev, libssl-dev, libunwind8, libunwind8-dev, microsoft-mlserver-packages-r-9.2.1, unzip, uuid-dev

  </details>

- **microsoft-mlserver-mml-r-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mml-r-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-mml-r-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-r-9.3.0

  </details>

- **microsoft-mlserver-packages-py-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-py-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-py-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libgomp1, microsoft-mlserver-python-9.2.1

  </details>

- **microsoft-mlserver-packages-py-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-py-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-py-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libgomp1, microsoft-mlserver-python-9.3.0

  </details>

- **microsoft-mlserver-packages-r-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-r-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-r-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-foreachiterators-3.4.1, microsoft-r-open-mkl-3.4.1, microsoft-r-open-mro-3.4.1

  </details>

- **microsoft-mlserver-packages-r-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-r-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-r-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-foreachiterators-3.4.3, microsoft-r-open-mkl-3.4.3, microsoft-r-open-mro-3.4.3

  </details>

- **microsoft-mlserver-python-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-python-9.2.1`
  - Install (apt): `sudo apt install microsoft-mlserver-python-9.2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-python-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-python-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-python-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-webnode-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Server
  - Install: `sudo apt-get install microsoft-mlserver-webnode-9.2`
  - Install (apt): `sudo apt install microsoft-mlserver-webnode-9.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.1.2

  </details>

- **microsoft-mlserver-webnode-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-webnode-9.3.0`
  - Install (apt): `sudo apt install microsoft-mlserver-webnode-9.3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-2.0.0

  </details>

- **microsoft-r-client-mlm-3.4.1**
  - Latest version: 3.4.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-mlm-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-client-mlm-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-r-client-mlm-3.4.3**
  - Latest version: 3.4.3.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-mlm-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-client-mlm-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-r-client-mlm-3.5.2**
  - Latest version: 3.5.2.1025
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-mlm-3.5.2`
  - Install (apt): `sudo apt install microsoft-r-client-mlm-3.5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-client-packages-3.5.2

  </details>

- **microsoft-r-client-mml-3.4.1**
  - Latest version: 3.4.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-mml-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-client-mml-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: gettext, libcurl4-openssl-dev, libicu-dev, liblttng-ust-dev, libssl-dev, libunwind8, libunwind8-dev, microsoft-r-client-packages-3.4.1, unzip, uuid-dev

  </details>

- **microsoft-r-client-mml-3.4.3**
  - Latest version: 3.4.3.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-mml-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-client-mml-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-client-packages-3.4.3

  </details>

- **microsoft-r-client-packages-3.4.1**
  - Latest version: 3.4.1.1360
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-packages-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-client-packages-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-foreachiterators-3.4.1, microsoft-r-open-mkl-3.4.1, microsoft-r-open-mro-3.4.1

  </details>

- **microsoft-r-client-packages-3.4.3**
  - Latest version: 3.4.3.2606
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-packages-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-client-packages-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-foreachiterators-3.4.3, microsoft-r-open-mkl-3.4.3, microsoft-r-open-mro-3.4.3

  </details>

- **microsoft-r-client-packages-3.5.2**
  - Latest version: 3.5.2.1025
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Client
  - Install: `sudo apt-get install microsoft-r-client-packages-3.5.2`
  - Install (apt): `sudo apt install microsoft-r-client-packages-3.5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mkl-3.5.2, microsoft-r-open-mro-3.5.2

  </details>

- **microsoft-r-open-foreachiterators-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-foreachiterators-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-open-foreachiterators-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.1

  </details>

- **microsoft-r-open-foreachiterators-3.4.3**
  - Latest version: 3.4.3.108
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-foreachiterators-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-open-foreachiterators-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.3

  </details>

- **microsoft-r-open-foreachiterators-3.4.4**
  - Latest version: 3.4.4.38
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-foreachiterators-3.4.4`
  - Install (apt): `sudo apt install microsoft-r-open-foreachiterators-3.4.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.4

  </details>

- **microsoft-r-open-mkl-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mkl-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-open-mkl-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.1

  </details>

- **microsoft-r-open-mkl-3.4.3**
  - Latest version: 3.4.3.108
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mkl-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-open-mkl-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.3

  </details>

- **microsoft-r-open-mkl-3.4.4**
  - Latest version: 3.4.4.1037
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mkl-3.4.4`
  - Install (apt): `sudo apt install microsoft-r-open-mkl-3.4.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.4

  </details>

- **microsoft-r-open-mro-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mro-3.4.1`
  - Install (apt): `sudo apt install microsoft-r-open-mro-3.4.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: curl, less, libgomp1, libpango1.0-0, libsm6, libxt6

  </details>

- **microsoft-r-open-mro-3.4.3**
  - Latest version: 3.4.3.108
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mro-3.4.3`
  - Install (apt): `sudo apt install microsoft-r-open-mro-3.4.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: curl, less, libgomp1, libpango1.0-0, libsm6, libxt6

  </details>

- **microsoft-r-open-mro-3.4.4**
  - Latest version: 3.4.4.1037
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mro-3.4.4`
  - Install (apt): `sudo apt install microsoft-r-open-mro-3.4.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: bash, curl, less, libgomp1, libpango1.0-0, libsm6, libxt6

  </details>

- **microsoft-r-open-sparklyr-3.4.4**
  - Latest version: 3.4.4.1037
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-sparklyr-3.4.4`
  - Install (apt): `sudo apt install microsoft-r-open-sparklyr-3.4.4`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.4.4

  </details>

- **msodbcsql**
  - Latest version: 13.1.9.2-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libcurl3, libkrb5-3, libstdc++6 (>= 4.8.2), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql17**
  - Latest version: 17.4.2.1-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libcurl3, libkrb5-3, libstdc++6 (>= 4.8.2), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-cli**
  - Latest version: 0.15.0-1
  - Architectures: all
  - Suite: trusty
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
  - Latest version: 17.4.1.1-1
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libc6 (>= 2.21), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 5.2), msodbcsql (<< 13.2.0.0), msodbcsql (>= 13.1.0.0), msodbcsql17 (<< 17.1.0.0), msodbcsql17 (<< 17.2.0.0), msodbcsql17 (<< 17.3.0.0), msodbcsql17 (<< 17.4.0.0), msodbcsql17 (>= 17.0.0.1), msodbcsql17 (>= 17.1.0.1), msodbcsql17 (>= 17.2.0.0), msodbcsql17 (>= 17.3.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **odbcinst**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: trusty
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
  - depends: libc6 (>= 2.4), odbcinst1debian2 (>= 2.3.1), odbcinst1debian2 (>= 2.3.7)
  - conflicts: odbcinst1
  - replaces: odbcinst1, odbcinst1debian1 (<< 2.2.11-20), odbcinst1debian1 (<< 2.3.7), unixodbc (<< 2.1.1-2), unixodbc (<< 2.3.7)

  </details>

- **odbcinst1debian2**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: trusty
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
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2), odbcinst, odbcinst (>= 2.3.7)
  - preDepends: multiarch-support
  - conflicts: odbcinst1, odbcinst1debian1
  - breaks: libiodbc2, libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.1.1-2), unixodbc (<< 2.3.7)

  </details>

- **omi**
  - Latest version: 1.5.0.0
  - Architectures: amd64
  - Suite: trusty
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

- **omi-psrp-server**
  - Latest version: 1.4.2.2
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: PowerShell Remoting Protocol
  - Install: `sudo apt-get install omi-psrp-server`
  - Install (apt): `sudo apt install omi-psrp-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corporation
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.3.6), libpam-runtime (>= 0.79-3), omi
  - provides: omi-psrp-server

  </details>


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-3
  - Architectures: all
  - Suite: trusty
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

- **powershell**
  - Latest version: 6.2.0-1.ubuntu.14.04
  - Architectures: amd64
  - Suite: trusty
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
  - Latest version: 6.2.0-rc.1-1.ubuntu.14.04
  - Architectures: amd64
  - Suite: trusty
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

- **procdump**
  - Latest version: 1.4.1-14851
  - Architectures: amd64
  - Suite: trusty
  - Components: main
  - Description: Sysinternals process dump utility
  - Homepage: https://github.com/Microsoft/ProcDump-for-Linux
  - Install: `sudo apt-get install procdump`
  - Install (apt): `sudo apt install procdump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: OSS Tooling Dev Team <OSSToolingDevTeam@service.microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: gdb (>= 7.6.1), gdb (>= 7.7.1), libc6
  - preDepends: dpkg (>= 1.17.5)

  </details>


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: trusty
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
  - depends: libc6 (>= 2.14), libodbc1 (>= 2.3.1), libodbc1 (>= 2.3.7), libreadline6 (>= 6.0), odbcinst1debian2 (>= 2.3.1), odbcinst1debian2 (>= 2.3.7)
  - conflicts: unixodbc-bin (<< 2.2.4-1), unixodbc-bin (<< 2.3.7)

  </details>

- **unixodbc-dev**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: trusty
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
  - Latest version: 1.15.25
  - Architectures: amd64
  - Suite: trusty
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
  - Suite: trusty
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


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
