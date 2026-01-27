# Microsoft - ubuntu-18.10 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-18-10-cosmic-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/18.10/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/18.10
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `cosmic`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-18.10

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

### Suite: cosmic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/18.10/prod cosmic main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-18-10-cosmic-packages-microsoft-com-cosmic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/18.10/prod cosmic main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-18-10-cosmic-packages-microsoft-com-cosmic.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (39)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-D">D</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadlogin`
  - Install (apt): `sudo apt install aadlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libcurl4, libuuid1, openssh-server
  - conflicts: aadsshlogin

  </details>

- **aadlogin-selinux**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.7-1), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aadsshlogin**
  - Latest version: 1.0.019900001
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libcurl4, libuuid1, openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.019900001
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.7-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.10-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.6 Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.2**
  - Latest version: 2.2.4-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), libc6 (>= 2.14)

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.5530-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-runtime-deps-2.1 (>= 2.1.1)
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-2**
  - Latest version: 2.7.3188-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Azure Function Core Tools v2
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools-2`
  - Install (apt): `sudo apt install azure-functions-core-tools-2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ahmed ElSayed <ahmels@microsoft.com>
  - Section: devel
  - Priority: optional
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2

  </details>

- **azure-functions-core-tools-3**
  - Latest version: 3.0.3785-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Azure Function Cli 2.0
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools-3`
  - Install (apt): `sudo apt install azure-functions-core-tools-3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ShunXian Cai <shucai@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-deps-2.1 (>= 2.1.1)
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.0.5530-1
  - Architectures: amd64
  - Suite: cosmic
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


### <a id="packages-D"></a>D

- **dotnet-dev-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.1.12, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 6)

  </details>

- **dotnet-host**
  - Latest version: 2.2.4-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Microsoft .NET Core Host - 2.1.8
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libc6 (>= 2.4), libgcc1, libgcc1 (>= 1:3.0), libstdc++6, libstdc++6 (>= 5.2)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-host (>= 1.1.11), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-hostfxr-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-host (>= 1.1.12), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-hostfxr-2.1**
  - Latest version: 2.1.10-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.8 2.1.8
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.10), dotnet-host (>= 2.1.6), dotnet-host (>= 2.1.7), dotnet-host (>= 2.1.8), dotnet-host (>= 2.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.2**
  - Latest version: 2.2.4-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-host (>= 2.2.0), dotnet-host (>= 2.2.1), dotnet-host (>= 2.2.2), dotnet-host (>= 2.2.3), dotnet-host (>= 2.2.4), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.10-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-hostfxr-2.1 (>= 2.1.10), dotnet-hostfxr-2.1 (>= 2.1.6), dotnet-hostfxr-2.1 (>= 2.1.7), dotnet-hostfxr-2.1 (>= 2.1.8), dotnet-hostfxr-2.1 (>= 2.1.9), dotnet-runtime-deps-2.1 (>= 2.1.10), dotnet-runtime-deps-2.1 (>= 2.1.6), dotnet-runtime-deps-2.1 (>= 2.1.7), dotnet-runtime-deps-2.1 (>= 2.1.8), dotnet-runtime-deps-2.1 (>= 2.1.9)

  </details>

- **dotnet-runtime-2.2**
  - Latest version: 2.2.4-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.2.0 Microsoft.NETCore.App 2.2.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.2 (>= 2.2.0), dotnet-hostfxr-2.2 (>= 2.2.1), dotnet-hostfxr-2.2 (>= 2.2.2), dotnet-hostfxr-2.2 (>= 2.2.3), dotnet-hostfxr-2.2 (>= 2.2.4), dotnet-runtime-deps-2.2 (>= 2.2.0), dotnet-runtime-deps-2.2 (>= 2.2.1), dotnet-runtime-deps-2.2 (>= 2.2.2), dotnet-runtime-deps-2.2 (>= 2.2.3), dotnet-runtime-deps-2.2 (>= 2.2.4)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.10-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.7
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu60, liblttng-ust0, libssl1.0.0, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.4-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: dotnet-runtime-deps-2.2 2.2.1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu60, liblttng-ust0, libssl1.0.0, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-2.1**
  - Latest version: 2.1.603-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: aspnetcore-runtime-2.1 (>= 2.1.10), aspnetcore-runtime-2.1 (>= 2.1.6), aspnetcore-runtime-2.1 (>= 2.1.7), aspnetcore-runtime-2.1 (>= 2.1.8), aspnetcore-runtime-2.1 (>= 2.1.9), dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.8), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.2**
  - Latest version: 2.2.203-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Microsoft .NET Core SDK 2.2.105
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.2 (>= 2.2.0), aspnetcore-runtime-2.2 (>= 2.2.1), aspnetcore-runtime-2.2 (>= 2.2.2), aspnetcore-runtime-2.2 (>= 2.2.3), aspnetcore-runtime-2.2 (>= 2.2.4), dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-hostfxr-1.1.11, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu60 (>= 60.1-1~), liblldb-3.9 (>= 1:3.9.1-6~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 6), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: cosmic
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
  - depends: dotnet-hostfxr-1.1.12, libc6 (>= 2.27), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.14+dfsg), libicu60 (>= 60.1-1~), liblldb-3.9 (>= 1:3.9.1-6~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 6), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>


### <a id="packages-L"></a>L

- **libodbc1**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: cosmic
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

- **linuxconfig**
  - Latest version: 1.0
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Print linuxconfig.org on the screen
  - Install: `sudo apt-get install linuxconfig`
  - Install (apt): `sudo apt install linuxconfig`
  <details>
  <summary>More metadata</summary>

  - Maintainer: linuxconfig.org
  - Section: custom
  - Priority: optional

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: cosmic
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
  - Suite: cosmic
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
  - Suite: cosmic
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

- **msodbcsql17**
  - Latest version: 17.4.2.1-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libc6 (>= 2.21), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-tools**
  - Latest version: 17.4.1.1-1
  - Architectures: amd64
  - Suite: cosmic
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libc6 (>= 2.21), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), msodbcsql17 (<< 17.4.0.0), msodbcsql17 (>= 17.3.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **odbcinst**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: cosmic
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
  - Suite: cosmic
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
  - Suite: cosmic
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
  - Latest version: 1.0-ubuntu18.10.2
  - Architectures: all
  - Suite: cosmic
  - Components: main
  - Description: Apt configuration for packages.microsoft.com
  - Install: `sudo apt-get install packages-microsoft-prod`
  - Install (apt): `sudo apt install packages-microsoft-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Matt Bearup <mbearup@microsoft.com>
  - Section: admin
  - Priority: extra
  - depends: apt-transport-https, ca-certificates

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: cosmic
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
  - Suite: cosmic
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
  - Suite: cosmic
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
  - Suite: cosmic
  - Components: main
  - Description: VirtualClient, the open sourced workload automation.
  - Install: `sudo apt-get install virtualclient`
  - Install (apt): `sudo apt install virtualclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Virtual Client Team <virtualclient@microsoft.com>

  </details>


Errors during fetch:
- apt-get update failed

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
