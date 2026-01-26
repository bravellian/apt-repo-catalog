# Microsoft - ubuntu-17.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-17-04-zesty-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/17.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/17.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `zesty`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-17.04

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

### Suite: zesty

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/17.04/prod zesty main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-17-04-zesty-packages-microsoft-com-zesty.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/17.04/prod zesty main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-17-04-zesty-packages-microsoft-com-zesty.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (47)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-D">D</a> <a href="#packages-M">M</a> <a href="#packages-P">P</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadlogin`
  - Install (apt): `sudo apt install aadlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libcurl3, libuuid1, openssh-server
  - conflicts: aadsshlogin

  </details>

- **aadlogin-selinux**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.3-1), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aadsshlogin**
  - Latest version: 1.0.019900001
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libcurl3, libuuid1, openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.019900001
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.3-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **aspnetcore-store-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: zesty
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
  - Suite: zesty
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
  - Suite: zesty
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

- **azcopy**
  - Latest version: 7.1.0-netcorepreview
  - Architectures: all
  - Suite: zesty
  - Components: main
  - Description: Transferring data from/to azure storage blob/file
  - Install: `sudo apt-get install azcopy`
  - Install (apt): `sudo apt install azcopy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: AzCopy Dev<azcopydev@microsoft.com>
  - Section: admin
  - depends: dotnet-runtime-2.0.0, dotnet-sdk-2.0.0(>= 2.0.0)

  </details>

- **azure-functions-core-tools**
  - Latest version: 2.0.1~beta.31-1
  - Architectures: all, amd64
  - Suite: zesty
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

  </details>

- **azure.function.cli**
  - Latest version: 2.0.1~beta.21-1
  - Architectures: all
  - Suite: zesty
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
  - Latest version: 0.2.1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: libc6 (>= 2.14), libcurl3-gnutls (>= 7.16.2), libfuse2 (>= 2.6), libgcc1 (>= 1:3.0), libgcrypt20 (>= 1.7.0), libgnutls30 (>= 3.5.0), libstdc++6 (>= 7)

  </details>


### <a id="packages-D"></a>D

- **dotnet-dev-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.8, dotnet-sharedframework-microsoft.netcore.app-1.1.5, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.6**
  - Latest version: 1.1.6-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.8, dotnet-sharedframework-microsoft.netcore.app-1.1.5, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.7**
  - Latest version: 1.1.7-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.9, dotnet-sharedframework-microsoft.netcore.app-1.1.6, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-host**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: Microsoft .NET Core Host - 2.0.5
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8), libstdc++6 (>= 5.2)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-1.0.1**
  - Latest version: 1.0.1-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-host (>= 1.0.1), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-hostfxr-1.1.0**
  - Latest version: 1.1.0-1
  - Architectures: amd64
  - Suite: zesty
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

- **dotnet-hostfxr-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-host (>= 2.0.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-host (>= 2.0.3), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-host (>= 2.0.4), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-host (>= 2.0.5), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hosting-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: zesty
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
  - Suite: zesty
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
  - Suite: zesty
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
  - Suite: zesty
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

- **dotnet-runtime-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-2.0.0, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu57, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-2.0.3, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu57, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-2.0.4, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu57, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-2.0.5, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu57, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sdk-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: zesty
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
  - Suite: zesty
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
  - Suite: zesty
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

- **dotnet-sdk-2.1.2**
  - Latest version: 2.1.2-1
  - Architectures: amd64
  - Suite: zesty
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

- **dotnet-sdk-2.1.3**
  - Latest version: 2.1.3-1
  - Architectures: amd64
  - Suite: zesty
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

- **dotnet-sdk-2.1.4**
  - Latest version: 2.1.4-1
  - Architectures: amd64
  - Suite: zesty
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

- **dotnet-sharedframework-microsoft.netcore.app-1.0.8**
  - Latest version: 1.0.8-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.9**
  - Latest version: 1.0.9-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.6**
  - Latest version: 1.1.6-1
  - Architectures: amd64
  - Suite: zesty
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: zesty
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
  - Suite: zesty
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
  - Suite: zesty
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
  - Latest version: 13.1.9.1-1
  - Architectures: amd64
  - Suite: zesty
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-cli**
  - Latest version: 0.15.0-1
  - Architectures: all
  - Suite: zesty
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


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-3
  - Architectures: all
  - Suite: zesty
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
  - Latest version: 6.1.0~preview.2-1.ubuntu.17.04
  - Architectures: amd64
  - Suite: zesty
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
  - depends: libc6, libcurl3, libgcc1, libgssapi-krb5-2, libicu57, liblttng-ust0, libssl1.0.0, libstdc++6, libunwind8, libuuid1, zlib1g

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 1.15.25
  - Architectures: amd64
  - Suite: zesty
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
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
