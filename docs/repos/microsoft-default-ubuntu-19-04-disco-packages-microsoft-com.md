# Microsoft - ubuntu-19.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-19-04-disco-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/19.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/19.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `disco`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-19.04

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

### Suite: disco

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/19.04/prod disco main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-19-04-disco-packages-microsoft-com-disco.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/19.04/prod disco main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-19-04-disco-packages-microsoft-com-disco.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (55)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-D">D</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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
  - Latest version: 2.1.15-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.12 Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft ASP.NET Core 2.2.8 Shared Framework
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-2.2`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.2 (>= 2.2.5), dotnet-runtime-2.2 (>= 2.2.6), dotnet-runtime-2.2 (>= 2.2.7), dotnet-runtime-2.2 (>= 2.2.8), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-3.0**
  - Latest version: 3.0.2-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/aspnet/AspNetCore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-3.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-3.0 (>= 3.0.0), dotnet-runtime-3.0 (>= 3.0.1), dotnet-runtime-3.0 (>= 3.0.2)

  </details>

- **aspnetcore-runtime-3.1**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/aspnet/AspNetCore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-3.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1)

  </details>

- **aspnetcore-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/aspnet/AspNetCore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-3.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-3.0 (>= 3.0.0)

  </details>

- **aspnetcore-targeting-pack-3.1**
  - Latest version: 3.1.0-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/aspnet/AspNetCore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-3.1`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-3.1 (>= 3.1.0)

  </details>

- **azure-ai-vision-dev-common**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Azure AI Vision Common Components Developer Package
  - Install: `sudo apt-get install azure-ai-vision-dev-common`
  - Install (apt): `sudo apt install azure-ai-vision-dev-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-common, azure-ai-vision-runtime-common (= 0.15.1~beta.1), azure-ai-vision-runtime-common-media

  </details>

- **azure-ai-vision-dev-image-analysis**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Azure AI Vision Image Analysis Developer Package
  - Install: `sudo apt-get install azure-ai-vision-dev-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-dev-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-dev-common (= 0.11.1~beta.1), azure-ai-vision-dev-common (= 0.13.0~beta.1), azure-ai-vision-dev-common (= 0.15.1~beta.1), azure-ai-vision-runtime-image-analysis (= 0.11.1~beta.1), azure-ai-vision-runtime-image-analysis (= 0.13.0~beta.1), azure-ai-vision-runtime-image-analysis (= 0.15.1~beta.1)

  </details>

- **azure-ai-vision-runtime-common**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Azure AI Vision Common Components Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-common`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-common`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.3.1), libstdc++6 (>= 6), libuuid1 (>= 2.16)

  </details>

- **azure-ai-vision-runtime-common-media**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Azure AI Vision Common Components Media Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-common-media`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-common-media`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-common (= 0.11.1~beta.1), azure-ai-vision-runtime-common (= 0.13.0~beta.1), azure-ai-vision-runtime-common (= 0.15.1~beta.1)

  </details>

- **azure-ai-vision-runtime-image-analysis**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Azure AI Vision Image Analysis Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-common (= 0.11.1~beta.1), azure-ai-vision-runtime-common (= 0.13.0~beta.1), azure-ai-vision-runtime-common (= 0.15.1~beta.1), azure-ai-vision-runtime-common-media (= 0.11.1~beta.1), azure-ai-vision-runtime-common-media (= 0.13.0~beta.1)

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.5530-1
  - Architectures: amd64
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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


### <a id="packages-D"></a>D

- **dotnet-apphost-pack-3.0**
  - Latest version: 3.0.2-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-3.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-3.1**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.1.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-3.1`
  - Install (apt): `sudo apt install dotnet-apphost-pack-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-host**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Host - 3.0.1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libstdc++6
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-2.1**
  - Latest version: 2.1.15-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.11 2.1.11
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.11), dotnet-host (>= 2.1.12), dotnet-host (>= 2.1.13), dotnet-host (>= 2.1.14), dotnet-host (>= 2.1.15), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.2.6 2.2.6
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.2`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.2.5), dotnet-host (>= 2.2.6), dotnet-host (>= 2.2.7), dotnet-host (>= 2.2.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.0**
  - Latest version: 3.0.2-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 3.0.0 3.0.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-3.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 3.0.0), dotnet-host (>= 3.0.1), dotnet-host (>= 3.0.2), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.1**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 3.1.0 Preview 3 3.1.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-3.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 3.1.0), dotnet-host (>= 3.1.1), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.15-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.13 Microsoft.NETCore.App 2.1.13
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1 (>= 2.1.11), dotnet-hostfxr-2.1 (>= 2.1.12), dotnet-hostfxr-2.1 (>= 2.1.13), dotnet-hostfxr-2.1 (>= 2.1.14), dotnet-hostfxr-2.1 (>= 2.1.15), dotnet-runtime-deps-2.1 (>= 2.1.11), dotnet-runtime-deps-2.1 (>= 2.1.12), dotnet-runtime-deps-2.1 (>= 2.1.13), dotnet-runtime-deps-2.1 (>= 2.1.14), dotnet-runtime-deps-2.1 (>= 2.1.15)

  </details>

- **dotnet-runtime-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.2.5 Microsoft.NETCore.App 2.2.5
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.2 (>= 2.2.5), dotnet-hostfxr-2.2 (>= 2.2.6), dotnet-hostfxr-2.2 (>= 2.2.7), dotnet-hostfxr-2.2 (>= 2.2.8), dotnet-runtime-deps-2.2 (>= 2.2.5), dotnet-runtime-deps-2.2 (>= 2.2.6), dotnet-runtime-deps-2.2 (>= 2.2.7), dotnet-runtime-deps-2.2 (>= 2.2.8)

  </details>

- **dotnet-runtime-3.0**
  - Latest version: 3.0.2-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Runtime - 3.0.2 Microsoft.NETCore.App 3.0.2
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-3.0`
  - Install (apt): `sudo apt install dotnet-runtime-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-3.0 (>= 3.0.0), dotnet-hostfxr-3.0 (>= 3.0.1), dotnet-hostfxr-3.0 (>= 3.0.2), dotnet-runtime-deps-3.0 (>= 3.0.0), dotnet-runtime-deps-3.0 (>= 3.0.1), dotnet-runtime-deps-3.0 (>= 3.0.2)

  </details>

- **dotnet-runtime-3.1**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core Runtime - 3.1.1 Microsoft.NETCore.App 3.1.1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-3.1`
  - Install (apt): `sudo apt install dotnet-runtime-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-3.1 (>= 3.1.0), dotnet-hostfxr-3.1 (>= 3.1.1), dotnet-runtime-deps-3.1 (>= 3.1.0), dotnet-runtime-deps-3.1 (>= 3.1.1)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.15-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.13
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu63, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: dotnet-runtime-deps-2.2 2.2.8
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu63, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.0**
  - Latest version: 3.0.2-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: dotnet-runtime-deps-3.0 3.0.2
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-3.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.1**
  - Latest version: 3.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: dotnet-runtime-deps-3.1 3.1.1
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-3.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-2.1**
  - Latest version: 2.1.803-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.801
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1`
  - Install (apt): `sudo apt install dotnet-sdk-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1 (>= 2.1.11), aspnetcore-runtime-2.1 (>= 2.1.12), aspnetcore-runtime-2.1 (>= 2.1.13), aspnetcore-runtime-2.1 (>= 2.1.14), aspnetcore-runtime-2.1 (>= 2.1.15), dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.2**
  - Latest version: 2.2.402-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core SDK 2.2.107
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.2 (>= 2.2.5), aspnetcore-runtime-2.2 (>= 2.2.6), aspnetcore-runtime-2.2 (>= 2.2.7), aspnetcore-runtime-2.2 (>= 2.2.8), dotnet-runtime-2.2 (>= 2.2.5), dotnet-runtime-2.2 (>= 2.2.6), dotnet-runtime-2.2 (>= 2.2.7), dotnet-runtime-2.2 (>= 2.2.8), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-3.0**
  - Latest version: 3.0.102-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core SDK 3.0.101
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-3.0`
  - Install (apt): `sudo apt install dotnet-sdk-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-3.0 (>= 3.0.0), aspnetcore-runtime-3.0 (>= 3.0.1), aspnetcore-runtime-3.0 (>= 3.0.2), aspnetcore-targeting-pack-3.0 (>= 3.0.0), aspnetcore-targeting-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.0), dotnet-apphost-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.2), dotnet-runtime-3.0 (>= 3.0.0), dotnet-runtime-3.0 (>= 3.0.1), dotnet-runtime-3.0 (>= 3.0.2), dotnet-targeting-pack-3.0 (>= 3.0.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-3.1**
  - Latest version: 3.1.101-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft .NET Core SDK 3.1.101
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-3.1`
  - Install (apt): `sudo apt install dotnet-sdk-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-3.1 (>= 3.1.0), aspnetcore-runtime-3.1 (>= 3.1.1), aspnetcore-targeting-pack-3.1 (>= 3.1.0), dotnet-apphost-pack-3.1 (>= 3.1.0), dotnet-apphost-pack-3.1 (>= 3.1.1), dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1), dotnet-targeting-pack-3.1 (>= 3.1.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 3.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-3.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-3.1**
  - Latest version: 3.1.0-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 3.1.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-3.1`
  - Install (apt): `sudo apt install dotnet-targeting-pack-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-L"></a>L

- **libodbc1**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: disco
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
  - suggests: msodbcsql17, unixodbc-bin
  - breaks: unixodbc (<< 2.2.14p2-3)
  - replaces: unixodbc (<< 2.2.14p2-3)

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: disco
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
  - Suite: disco
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
  - Suite: disco
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

- **msodbcsql17**
  - Latest version: 17.4.2.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-tools**
  - Latest version: 17.4.1.1-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), msodbcsql17 (>= 17.3.0.0), openssl

  </details>


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: disco
  - Components: main
  - Description: NETStandard.Library.Ref 2.1.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install netstandard-targeting-pack-2.1`
  - Install (apt): `sudo apt install netstandard-targeting-pack-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-O"></a>O

- **odbcinst**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: disco
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
  - Suite: disco
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
  - conflicts: odbcinst1, odbcinst1debian1
  - breaks: libiodbc2, libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.3.7)

  </details>


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-ubuntu19.04.1
  - Architectures: all
  - Suite: disco
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

- **procdump**
  - Latest version: 1.1-2
  - Architectures: amd64
  - Suite: disco
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
  - depends: gdb (>= 7.6.1), libc6

  </details>


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: disco
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
  - Suite: disco
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
  - Architectures: amd64
  - Suite: disco
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
