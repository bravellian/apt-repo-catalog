# Microsoft - debian-13 - default

## Repository
- Repository ID: `microsoft-default-debian-13-trixie-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/debian/13/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/13
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `trixie`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: debian-13

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `microsoft-microsoft-2025-EE4D7792F748182B`
- Expected fingerprints:
  - AA86F75E427A19DD33346403EE4D7792F748182B
- Key source URL: https://packages.microsoft.com/keys/microsoft-2025.asc

## Install instructions

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-2025-EE4D7792F748182B.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg >/dev/null
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg] https://packages.microsoft.com/debian/13/prod trixie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-13-trixie-packages-microsoft-com-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-2025-EE4D7792F748182B.asc -o /tmp/microsoft-microsoft-2025-EE4D7792F748182B.asc
gpg --dearmor /tmp/microsoft-microsoft-2025-EE4D7792F748182B.asc
sudo install -m 0644 /tmp/microsoft-microsoft-2025-EE4D7792F748182B.gpg /usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-2025-EE4D7792F748182B.gpg] https://packages.microsoft.com/debian/13/prod trixie main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-13-trixie-packages-microsoft-com-trixie.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (33)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-D">D</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a>
</div>


### <a id="packages-A"></a>A

- **aspnetcore-runtime-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.AspNetCore.App.Runtime 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install aspnetcore-runtime-10.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-runtime-10.0 (>= 10.0.0), dotnet-runtime-10.0 (>= 10.0.1), dotnet-runtime-10.0 (>= 10.0.2)

  </details>

- **aspnetcore-runtime-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-8.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-8.0 (>= 8.0.22), dotnet-runtime-8.0 (>= 8.0.23)

  </details>

- **aspnetcore-runtime-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-9.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-9.0 (>= 9.0.11), dotnet-runtime-9.0 (>= 9.0.12)

  </details>

- **aspnetcore-targeting-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: ASP.NET Core Targeting Pack
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install aspnetcore-targeting-pack-10.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-targeting-pack-10.0 (>= 10.0.0), dotnet-targeting-pack-10.0 (>= 10.0.1), dotnet-targeting-pack-10.0 (>= 10.0.2)

  </details>

- **aspnetcore-targeting-pack-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-8.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-8.0 (>= 8.0.22), dotnet-targeting-pack-8.0 (>= 8.0.23)

  </details>

- **aspnetcore-targeting-pack-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-9.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-9.0 (>= 9.0.11), dotnet-targeting-pack-9.0 (>= 9.0.12)

  </details>


### <a id="packages-D"></a>D

- **dotnet-apphost-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Host 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-10.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Host 8.0.22
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-8.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Host 9.0.11
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-9.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-host**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET Host - 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libstdc++6
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-10.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 10.0.0), dotnet-host (>= 10.0.1), dotnet-host (>= 10.0.2), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 8.0.22
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-8.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 8.0.22), dotnet-host (>= 8.0.23), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 9.0.11
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-9.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 9.0.11), dotnet-host (>= 9.0.12), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime.CoreCLR 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-10.0`
  - Install (apt): `sudo apt install dotnet-runtime-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-10.0 (>= 10.0.0), dotnet-hostfxr-10.0 (>= 10.0.1), dotnet-hostfxr-10.0 (>= 10.0.2), dotnet-runtime-deps-10.0 (>= 10.0.0), dotnet-runtime-deps-10.0 (>= 10.0.1), dotnet-runtime-deps-10.0 (>= 10.0.2)

  </details>

- **dotnet-runtime-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 8.0.22
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-8.0 (>= 8.0.22), dotnet-hostfxr-8.0 (>= 8.0.23), dotnet-runtime-deps-8.0 (>= 8.0.22), dotnet-runtime-deps-8.0 (>= 8.0.23)

  </details>

- **dotnet-runtime-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 9.0.11
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-9.0`
  - Install (apt): `sudo apt install dotnet-runtime-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-9.0 (>= 9.0.11), dotnet-hostfxr-9.0 (>= 9.0.12), dotnet-runtime-deps-9.0 (>= 9.0.11), dotnet-runtime-deps-9.0 (>= 9.0.12)

  </details>

- **dotnet-runtime-deps-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: dotnet-runtime-deps-debian 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-10.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu78 | libicu77 | libicu76 | libicu72, libssl3, libstdc++6

  </details>

- **dotnet-runtime-deps-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: dotnet-runtime-deps-debian 8.0.22
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu78 | libicu77 | libicu76 | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: dotnet-runtime-deps-debian 9.0.11
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-9.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu78 | libicu77 | libicu76 | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-10.0**
  - Latest version: 10.0.102
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET SDK 10.0.100
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-10.0`
  - Install (apt): `sudo apt install dotnet-sdk-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: aspnetcore-runtime-10.0 (>= 10.0.0), aspnetcore-runtime-10.0 (>= 10.0.1), aspnetcore-runtime-10.0 (>= 10.0.2), aspnetcore-targeting-pack-10.0 (>= 10.0.0), aspnetcore-targeting-pack-10.0 (>= 10.0.1), aspnetcore-targeting-pack-10.0 (>= 10.0.2), dotnet-apphost-pack-10.0 (>= 10.0.0), dotnet-apphost-pack-10.0 (>= 10.0.1), dotnet-apphost-pack-10.0 (>= 10.0.2), dotnet-runtime-10.0 (>= 10.0.0), dotnet-runtime-10.0 (>= 10.0.1), dotnet-runtime-10.0 (>= 10.0.2), dotnet-targeting-pack-10.0 (>= 10.0.0), dotnet-targeting-pack-10.0 (>= 10.0.1), dotnet-targeting-pack-10.0 (>= 10.0.2)

  </details>

- **dotnet-sdk-8.0**
  - Latest version: 8.0.417-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET SDK 8.0.416
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-8.0`
  - Install (apt): `sudo apt install dotnet-sdk-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-8.0 (>= 8.0.22), aspnetcore-runtime-8.0 (>= 8.0.23), aspnetcore-targeting-pack-8.0 (>= 8.0.22), aspnetcore-targeting-pack-8.0 (>= 8.0.23), dotnet-apphost-pack-8.0 (>= 8.0.22), dotnet-apphost-pack-8.0 (>= 8.0.23), dotnet-runtime-8.0 (>= 8.0.22), dotnet-runtime-8.0 (>= 8.0.23), dotnet-targeting-pack-8.0 (>= 8.0.22), dotnet-targeting-pack-8.0 (>= 8.0.23), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-9.0**
  - Latest version: 9.0.310-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft .NET SDK 9.0.112
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-9.0`
  - Install (apt): `sudo apt install dotnet-sdk-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-9.0 (>= 9.0.11), aspnetcore-runtime-9.0 (>= 9.0.12), aspnetcore-targeting-pack-9.0 (>= 9.0.11), aspnetcore-targeting-pack-9.0 (>= 9.0.12), dotnet-apphost-pack-9.0 (>= 9.0.11), dotnet-apphost-pack-9.0 (>= 9.0.12), dotnet-runtime-9.0 (>= 9.0.11), dotnet-runtime-9.0 (>= 9.0.12), dotnet-targeting-pack-9.0 (>= 9.0.11), dotnet-targeting-pack-9.0 (>= 9.0.12), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 10.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-10.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-10.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 8.0.22
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-8.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-9.0**
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: trixie
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 9.0.11
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-9.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-L"></a>L

- **libmsquic**
  - Latest version: 2.5.6
  - Architectures: amd64, arm64, armhf
  - Suite: trixie
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
  - Suite: trixie
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
  - Suite: trixie
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
  - Suite: trixie
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


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: trixie
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

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: trixie
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
  - Latest version: 1.1-debian13
  - Architectures: all
  - Suite: trixie
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
  - Suite: trixie
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
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, debian
- Key tags: microsoft
