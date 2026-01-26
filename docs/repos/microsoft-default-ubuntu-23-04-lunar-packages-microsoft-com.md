# Microsoft - ubuntu-23.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-23-04-lunar-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/23.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/23.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `lunar`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: ubuntu-23.04

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

### Suite: lunar

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64,armhf,arm64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/23.04/prod lunar main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-23-04-lunar-packages-microsoft-com-lunar.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64,armhf,arm64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/23.04/prod lunar main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-23-04-lunar-packages-microsoft-com-lunar.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (41)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-D">D</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadsshlogin**
  - Latest version: 1.0.030480001
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libcurl4 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 3.1~), libsemanage2 (>= 2.0.32), libssl3 (>= 3.0.0~~alpha1), libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.030480001
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.3-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **aspnetcore-runtime-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-6.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35)

  </details>

- **aspnetcore-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-7.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.4), dotnet-runtime-7.0 (>= 7.0.5), dotnet-runtime-7.0 (>= 7.0.7), dotnet-runtime-7.0 (>= 7.0.8), dotnet-runtime-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-runtime-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
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
  - depends: dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8)

  </details>

- **aspnetcore-targeting-pack-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-6.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35)

  </details>

- **aspnetcore-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-7.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.4), dotnet-targeting-pack-7.0 (>= 7.0.5), dotnet-targeting-pack-7.0 (>= 7.0.7), dotnet-targeting-pack-7.0 (>= 7.0.8), dotnet-targeting-pack-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-targeting-pack-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
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
  - depends: dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8)

  </details>

- **azureauth**
  - Latest version: 0.8.6-1
  - Architectures: amd64, arm64
  - Suite: lunar
  - Components: main
  - Description: A CLI interface to MSAL authentication. Visit https://aka.ms/azureauth for more information.
  - Install: `sudo apt-get install azureauth`
  - Install (apt): `sudo apt install azureauth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ES365 Security Experience Team <authcli@microsoft.com>
  - Section: misc
  - Priority: optional

  </details>


### <a id="packages-D"></a>D

- **dotnet-apphost-pack-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Host 6.0.26
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-6.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Host 7.0.15
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-7.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Host 8.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-8.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-host**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET Host - 6.0.26
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

- **dotnet-hostfxr-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 6.0.26
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-6.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 6.0.15), dotnet-host (>= 6.0.16), dotnet-host (>= 6.0.18), dotnet-host (>= 6.0.19), dotnet-host (>= 6.0.20), dotnet-host (>= 6.0.21), dotnet-host (>= 6.0.22), dotnet-host (>= 6.0.23), dotnet-host (>= 6.0.24), dotnet-host (>= 6.0.25), dotnet-host (>= 6.0.26), dotnet-host (>= 6.0.27), dotnet-host (>= 6.0.28), dotnet-host (>= 6.0.29), dotnet-host (>= 6.0.30), dotnet-host (>= 6.0.31), dotnet-host (>= 6.0.32), dotnet-host (>= 6.0.33), dotnet-host (>= 6.0.35), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 7.0.15
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-7.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 7.0.10), dotnet-host (>= 7.0.11), dotnet-host (>= 7.0.12), dotnet-host (>= 7.0.13), dotnet-host (>= 7.0.14), dotnet-host (>= 7.0.15), dotnet-host (>= 7.0.16), dotnet-host (>= 7.0.17), dotnet-host (>= 7.0.18), dotnet-host (>= 7.0.19), dotnet-host (>= 7.0.20), dotnet-host (>= 7.0.4), dotnet-host (>= 7.0.5), dotnet-host (>= 7.0.7), dotnet-host (>= 7.0.8), dotnet-host (>= 7.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 8.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-8.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 8.0.0), dotnet-host (>= 8.0.1), dotnet-host (>= 8.0.10), dotnet-host (>= 8.0.2), dotnet-host (>= 8.0.3), dotnet-host (>= 8.0.4), dotnet-host (>= 8.0.5), dotnet-host (>= 8.0.6), dotnet-host (>= 8.0.7), dotnet-host (>= 8.0.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 6.0.26
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-6.0`
  - Install (apt): `sudo apt install dotnet-runtime-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-6.0 (>= 6.0.15), dotnet-hostfxr-6.0 (>= 6.0.16), dotnet-hostfxr-6.0 (>= 6.0.18), dotnet-hostfxr-6.0 (>= 6.0.19), dotnet-hostfxr-6.0 (>= 6.0.20), dotnet-hostfxr-6.0 (>= 6.0.21), dotnet-hostfxr-6.0 (>= 6.0.22), dotnet-hostfxr-6.0 (>= 6.0.23), dotnet-hostfxr-6.0 (>= 6.0.24), dotnet-hostfxr-6.0 (>= 6.0.25), dotnet-hostfxr-6.0 (>= 6.0.26), dotnet-hostfxr-6.0 (>= 6.0.27), dotnet-hostfxr-6.0 (>= 6.0.28), dotnet-hostfxr-6.0 (>= 6.0.29), dotnet-hostfxr-6.0 (>= 6.0.30), dotnet-hostfxr-6.0 (>= 6.0.31), dotnet-hostfxr-6.0 (>= 6.0.32), dotnet-hostfxr-6.0 (>= 6.0.33), dotnet-hostfxr-6.0 (>= 6.0.35), dotnet-runtime-deps-6.0 (>= 6.0.15), dotnet-runtime-deps-6.0 (>= 6.0.16), dotnet-runtime-deps-6.0 (>= 6.0.18), dotnet-runtime-deps-6.0 (>= 6.0.19), dotnet-runtime-deps-6.0 (>= 6.0.20), dotnet-runtime-deps-6.0 (>= 6.0.21), dotnet-runtime-deps-6.0 (>= 6.0.22), dotnet-runtime-deps-6.0 (>= 6.0.23), dotnet-runtime-deps-6.0 (>= 6.0.24), dotnet-runtime-deps-6.0 (>= 6.0.25), dotnet-runtime-deps-6.0 (>= 6.0.26), dotnet-runtime-deps-6.0 (>= 6.0.27), dotnet-runtime-deps-6.0 (>= 6.0.28), dotnet-runtime-deps-6.0 (>= 6.0.29), dotnet-runtime-deps-6.0 (>= 6.0.30), dotnet-runtime-deps-6.0 (>= 6.0.31), dotnet-runtime-deps-6.0 (>= 6.0.32), dotnet-runtime-deps-6.0 (>= 6.0.33), dotnet-runtime-deps-6.0 (>= 6.0.35)

  </details>

- **dotnet-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 7.0.15
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-7.0`
  - Install (apt): `sudo apt install dotnet-runtime-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-7.0 (>= 7.0.10), dotnet-hostfxr-7.0 (>= 7.0.11), dotnet-hostfxr-7.0 (>= 7.0.12), dotnet-hostfxr-7.0 (>= 7.0.13), dotnet-hostfxr-7.0 (>= 7.0.14), dotnet-hostfxr-7.0 (>= 7.0.15), dotnet-hostfxr-7.0 (>= 7.0.16), dotnet-hostfxr-7.0 (>= 7.0.17), dotnet-hostfxr-7.0 (>= 7.0.18), dotnet-hostfxr-7.0 (>= 7.0.19), dotnet-hostfxr-7.0 (>= 7.0.20), dotnet-hostfxr-7.0 (>= 7.0.4), dotnet-hostfxr-7.0 (>= 7.0.5), dotnet-hostfxr-7.0 (>= 7.0.7), dotnet-hostfxr-7.0 (>= 7.0.8), dotnet-hostfxr-7.0 (>= 7.0.9), dotnet-runtime-deps-7.0 (>= 7.0.10), dotnet-runtime-deps-7.0 (>= 7.0.11), dotnet-runtime-deps-7.0 (>= 7.0.12), dotnet-runtime-deps-7.0 (>= 7.0.13), dotnet-runtime-deps-7.0 (>= 7.0.14), dotnet-runtime-deps-7.0 (>= 7.0.15), dotnet-runtime-deps-7.0 (>= 7.0.16), dotnet-runtime-deps-7.0 (>= 7.0.17), dotnet-runtime-deps-7.0 (>= 7.0.18), dotnet-runtime-deps-7.0 (>= 7.0.19), dotnet-runtime-deps-7.0 (>= 7.0.20), dotnet-runtime-deps-7.0 (>= 7.0.4), dotnet-runtime-deps-7.0 (>= 7.0.5), dotnet-runtime-deps-7.0 (>= 7.0.7), dotnet-runtime-deps-7.0 (>= 7.0.8), dotnet-runtime-deps-7.0 (>= 7.0.9)

  </details>

- **dotnet-runtime-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 8.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-8.0 (>= 8.0.0), dotnet-hostfxr-8.0 (>= 8.0.1), dotnet-hostfxr-8.0 (>= 8.0.10), dotnet-hostfxr-8.0 (>= 8.0.2), dotnet-hostfxr-8.0 (>= 8.0.3), dotnet-hostfxr-8.0 (>= 8.0.4), dotnet-hostfxr-8.0 (>= 8.0.5), dotnet-hostfxr-8.0 (>= 8.0.6), dotnet-hostfxr-8.0 (>= 8.0.7), dotnet-hostfxr-8.0 (>= 8.0.8), dotnet-runtime-deps-8.0 (>= 8.0.0), dotnet-runtime-deps-8.0 (>= 8.0.1), dotnet-runtime-deps-8.0 (>= 8.0.10), dotnet-runtime-deps-8.0 (>= 8.0.2), dotnet-runtime-deps-8.0 (>= 8.0.3), dotnet-runtime-deps-8.0 (>= 8.0.4), dotnet-runtime-deps-8.0 (>= 8.0.5), dotnet-runtime-deps-8.0 (>= 8.0.6), dotnet-runtime-deps-8.0 (>= 8.0.7), dotnet-runtime-deps-8.0 (>= 8.0.8)

  </details>

- **dotnet-runtime-deps-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: dotnet-runtime-deps-debian 6.0.18
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-6.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: dotnet-runtime-deps-debian 7.0.15
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-7.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: dotnet-runtime-deps-debian 8.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-6.0**
  - Latest version: 6.0.427-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET SDK 6.0.321
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-6.0`
  - Install (apt): `sudo apt install dotnet-sdk-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-6.0 (>= 6.0.15), aspnetcore-runtime-6.0 (>= 6.0.16), aspnetcore-runtime-6.0 (>= 6.0.18), aspnetcore-runtime-6.0 (>= 6.0.19), aspnetcore-runtime-6.0 (>= 6.0.20), aspnetcore-runtime-6.0 (>= 6.0.21), aspnetcore-runtime-6.0 (>= 6.0.22), aspnetcore-runtime-6.0 (>= 6.0.23), aspnetcore-runtime-6.0 (>= 6.0.24), aspnetcore-runtime-6.0 (>= 6.0.25), aspnetcore-runtime-6.0 (>= 6.0.26), aspnetcore-runtime-6.0 (>= 6.0.27), aspnetcore-runtime-6.0 (>= 6.0.28), aspnetcore-runtime-6.0 (>= 6.0.29), aspnetcore-runtime-6.0 (>= 6.0.30), aspnetcore-runtime-6.0 (>= 6.0.31), aspnetcore-runtime-6.0 (>= 6.0.32), aspnetcore-runtime-6.0 (>= 6.0.33), aspnetcore-runtime-6.0 (>= 6.0.35), aspnetcore-targeting-pack-6.0 (>= 6.0.15), aspnetcore-targeting-pack-6.0 (>= 6.0.16), aspnetcore-targeting-pack-6.0 (>= 6.0.18), aspnetcore-targeting-pack-6.0 (>= 6.0.19), aspnetcore-targeting-pack-6.0 (>= 6.0.20), aspnetcore-targeting-pack-6.0 (>= 6.0.21), aspnetcore-targeting-pack-6.0 (>= 6.0.22), aspnetcore-targeting-pack-6.0 (>= 6.0.23), aspnetcore-targeting-pack-6.0 (>= 6.0.24), aspnetcore-targeting-pack-6.0 (>= 6.0.25), aspnetcore-targeting-pack-6.0 (>= 6.0.26), aspnetcore-targeting-pack-6.0 (>= 6.0.27), aspnetcore-targeting-pack-6.0 (>= 6.0.28), aspnetcore-targeting-pack-6.0 (>= 6.0.29), aspnetcore-targeting-pack-6.0 (>= 6.0.30), aspnetcore-targeting-pack-6.0 (>= 6.0.31), aspnetcore-targeting-pack-6.0 (>= 6.0.32), aspnetcore-targeting-pack-6.0 (>= 6.0.33), aspnetcore-targeting-pack-6.0 (>= 6.0.35), dotnet-apphost-pack-6.0 (>= 6.0.15), dotnet-apphost-pack-6.0 (>= 6.0.16), dotnet-apphost-pack-6.0 (>= 6.0.18), dotnet-apphost-pack-6.0 (>= 6.0.19), dotnet-apphost-pack-6.0 (>= 6.0.20), dotnet-apphost-pack-6.0 (>= 6.0.21), dotnet-apphost-pack-6.0 (>= 6.0.22), dotnet-apphost-pack-6.0 (>= 6.0.23), dotnet-apphost-pack-6.0 (>= 6.0.24), dotnet-apphost-pack-6.0 (>= 6.0.25), dotnet-apphost-pack-6.0 (>= 6.0.26), dotnet-apphost-pack-6.0 (>= 6.0.27), dotnet-apphost-pack-6.0 (>= 6.0.28), dotnet-apphost-pack-6.0 (>= 6.0.29), dotnet-apphost-pack-6.0 (>= 6.0.30), dotnet-apphost-pack-6.0 (>= 6.0.31), dotnet-apphost-pack-6.0 (>= 6.0.32), dotnet-apphost-pack-6.0 (>= 6.0.33), dotnet-apphost-pack-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-7.0**
  - Latest version: 7.0.410-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET SDK 7.0.111
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-7.0`
  - Install (apt): `sudo apt install dotnet-sdk-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-7.0 (>= 7.0.10), aspnetcore-runtime-7.0 (>= 7.0.11), aspnetcore-runtime-7.0 (>= 7.0.12), aspnetcore-runtime-7.0 (>= 7.0.13), aspnetcore-runtime-7.0 (>= 7.0.14), aspnetcore-runtime-7.0 (>= 7.0.15), aspnetcore-runtime-7.0 (>= 7.0.16), aspnetcore-runtime-7.0 (>= 7.0.17), aspnetcore-runtime-7.0 (>= 7.0.18), aspnetcore-runtime-7.0 (>= 7.0.19), aspnetcore-runtime-7.0 (>= 7.0.20), aspnetcore-runtime-7.0 (>= 7.0.4), aspnetcore-runtime-7.0 (>= 7.0.5), aspnetcore-runtime-7.0 (>= 7.0.7), aspnetcore-runtime-7.0 (>= 7.0.8), aspnetcore-runtime-7.0 (>= 7.0.9), aspnetcore-targeting-pack-7.0 (>= 7.0.10), aspnetcore-targeting-pack-7.0 (>= 7.0.11), aspnetcore-targeting-pack-7.0 (>= 7.0.12), aspnetcore-targeting-pack-7.0 (>= 7.0.13), aspnetcore-targeting-pack-7.0 (>= 7.0.14), aspnetcore-targeting-pack-7.0 (>= 7.0.15), aspnetcore-targeting-pack-7.0 (>= 7.0.16), aspnetcore-targeting-pack-7.0 (>= 7.0.17), aspnetcore-targeting-pack-7.0 (>= 7.0.18), aspnetcore-targeting-pack-7.0 (>= 7.0.19), aspnetcore-targeting-pack-7.0 (>= 7.0.20), aspnetcore-targeting-pack-7.0 (>= 7.0.4), aspnetcore-targeting-pack-7.0 (>= 7.0.5), aspnetcore-targeting-pack-7.0 (>= 7.0.7), aspnetcore-targeting-pack-7.0 (>= 7.0.8), aspnetcore-targeting-pack-7.0 (>= 7.0.9), dotnet-apphost-pack-7.0 (>= 7.0.10), dotnet-apphost-pack-7.0 (>= 7.0.11), dotnet-apphost-pack-7.0 (>= 7.0.12), dotnet-apphost-pack-7.0 (>= 7.0.13), dotnet-apphost-pack-7.0 (>= 7.0.14), dotnet-apphost-pack-7.0 (>= 7.0.15), dotnet-apphost-pack-7.0 (>= 7.0.16), dotnet-apphost-pack-7.0 (>= 7.0.17), dotnet-apphost-pack-7.0 (>= 7.0.18), dotnet-apphost-pack-7.0 (>= 7.0.19), dotnet-apphost-pack-7.0 (>= 7.0.20), dotnet-apphost-pack-7.0 (>= 7.0.4), dotnet-apphost-pack-7.0 (>= 7.0.5), dotnet-apphost-pack-7.0 (>= 7.0.7), dotnet-apphost-pack-7.0 (>= 7.0.8), dotnet-apphost-pack-7.0 (>= 7.0.9), dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.4), dotnet-runtime-7.0 (>= 7.0.5), dotnet-runtime-7.0 (>= 7.0.7), dotnet-runtime-7.0 (>= 7.0.8), dotnet-runtime-7.0 (>= 7.0.9), dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.4), dotnet-targeting-pack-7.0 (>= 7.0.5), dotnet-targeting-pack-7.0 (>= 7.0.7), dotnet-targeting-pack-7.0 (>= 7.0.8), dotnet-targeting-pack-7.0 (>= 7.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-8.0**
  - Latest version: 8.0.403-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft .NET SDK 8.0.101
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-8.0`
  - Install (apt): `sudo apt install dotnet-sdk-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-8.0 (>= 8.0.0), aspnetcore-runtime-8.0 (>= 8.0.1), aspnetcore-runtime-8.0 (>= 8.0.10), aspnetcore-runtime-8.0 (>= 8.0.2), aspnetcore-runtime-8.0 (>= 8.0.3), aspnetcore-runtime-8.0 (>= 8.0.4), aspnetcore-runtime-8.0 (>= 8.0.5), aspnetcore-runtime-8.0 (>= 8.0.6), aspnetcore-runtime-8.0 (>= 8.0.7), aspnetcore-runtime-8.0 (>= 8.0.8), aspnetcore-targeting-pack-8.0 (>= 8.0.0), aspnetcore-targeting-pack-8.0 (>= 8.0.1), aspnetcore-targeting-pack-8.0 (>= 8.0.10), aspnetcore-targeting-pack-8.0 (>= 8.0.2), aspnetcore-targeting-pack-8.0 (>= 8.0.3), aspnetcore-targeting-pack-8.0 (>= 8.0.4), aspnetcore-targeting-pack-8.0 (>= 8.0.5), aspnetcore-targeting-pack-8.0 (>= 8.0.6), aspnetcore-targeting-pack-8.0 (>= 8.0.7), aspnetcore-targeting-pack-8.0 (>= 8.0.8), dotnet-apphost-pack-8.0 (>= 8.0.0), dotnet-apphost-pack-8.0 (>= 8.0.1), dotnet-apphost-pack-8.0 (>= 8.0.10), dotnet-apphost-pack-8.0 (>= 8.0.2), dotnet-apphost-pack-8.0 (>= 8.0.3), dotnet-apphost-pack-8.0 (>= 8.0.4), dotnet-apphost-pack-8.0 (>= 8.0.5), dotnet-apphost-pack-8.0 (>= 8.0.6), dotnet-apphost-pack-8.0 (>= 8.0.7), dotnet-apphost-pack-8.0 (>= 8.0.8), dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8), dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-6.0**
  - Latest version: 6.0.35-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 6.0.26
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-6.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 7.0.15
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-7.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-7.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-8.0**
  - Latest version: 8.0.10-1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 8.0.1
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-8.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-L"></a>L

- **libmsquic**
  - Latest version: 2.4.8
  - Architectures: amd64, arm64, armhf
  - Suite: lunar
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
  - depends: libnuma1, libssl3
  - conflicts: libmsquic-debug
  - provides: libmsquic

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Microsoft Defender (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: auditd, libc6 (>= 2.23), libpcre3, mde-netfilter, uuid-runtime

  </details>

- **mde-netfilter**
  - Latest version: 100.69.73
  - Architectures: amd64
  - Suite: lunar
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
  - Suite: lunar
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

- **microsoft-identity-broker**
  - Latest version: 2.0.1
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: microsoft-identity-broker
  - Install: `sudo apt-get install microsoft-identity-broker`
  - Install (apt): `sudo apt install microsoft-identity-broker`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Identity
  - Section: java
  - Priority: optional
  - depends: dbus-session-bus, dbus-system-bus, default-jre, gnome-keyring, systemd
  - recommends: microsoft-identity-diagnostics
  - conflicts: msft-identity-broker
  - replaces: msft-identity-broker
  - provides: msft-identity-broker

  </details>

- **msodbcsql18**
  - Latest version: 18.4.1.1-1
  - Architectures: amd64, arm64
  - Suite: lunar
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
  - Suite: lunar
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools18`
  - Install (apt): `sudo apt install mssql-tools18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), msodbcsql18 (>= 18.0.0.0), openssl

  </details>


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: lunar
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


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-ubuntu23.04.1
  - Architectures: all
  - Suite: lunar
  - Components: main
  - Description: Apt configuration for packages.microsoft.com
  - Install: `sudo apt-get install packages-microsoft-prod`
  - Install (apt): `sudo apt install packages-microsoft-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Linux Repo Admins <aztuxrepo@microsoft.com>
  - Section: admin
  - Priority: extra
  - depends: apt-transport-https, ca-certificates

  </details>

- **procdump**
  - Latest version: 3.2.0
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: Sysinternals process dump utility
  - Homepage: https://github.com/Microsoft/ProcDump-for-Linux
  - Install: `sudo apt-get install procdump`
  - Install (apt): `sudo apt install procdump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: gdb (>= 7.6.1), libc6, zlib1g

  </details>


### <a id="packages-S"></a>S

- **sysinternalsebpf**
  - Latest version: 1.3.0
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: A shared library and code library for making eBPF programs.
  - Install: `sudo apt-get install sysinternalsebpf`
  - Install (apt): `sudo apt install sysinternalsebpf`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libc6 (>= 2.26), libelf1 (>= 0.131), libglib2.0-0 (>= 2.12.0), libjson-glib-1.0-0 (>= 0.13.2), zlib1g (>= 1:1.2.3.3)

  </details>

- **sysmonforlinux**
  - Latest version: 1.3.3
  - Architectures: amd64
  - Suite: lunar
  - Components: main
  - Description: A system monitor based on eBPF, ported from Windows, that outputs events to Syslog
  - Install: `sudo apt-get install sysmonforlinux`
  - Install (apt): `sudo apt install sysmonforlinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libssl-dev, libstdc++6 (>= 5), libxml2 (>= 2.7.4), sysinternalsebpf (>= 1.2.0)

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 2.0.28
  - Architectures: amd64, arm64
  - Suite: lunar
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
