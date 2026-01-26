# Microsoft - debian-9 - default

## Repository
- Repository ID: `microsoft-default-debian-9-stretch-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/debian/9/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/9
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `stretch`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: debian-9

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/9/prod stretch main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-9-stretch-packages-microsoft-com-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/9/prod stretch main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-9-stretch-packages-microsoft-com-stretch.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (145)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-I">I</a> <a href="#packages-J">J</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: AAD NSS and PAM extensions
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
  - Suite: stretch
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.6-3), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aadsshlogin**
  - Latest version: 1.0.022600002
  - Architectures: amd64
  - Suite: stretch
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
  - Latest version: 1.0.022600002
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.6-3), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.30 Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), dotnet-runtime-2.1 (>= 2.1.16), dotnet-runtime-2.1 (>= 2.1.17), dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.30), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.8), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.1.0-preview1-final**
  - Latest version: 2.1.0-preview1-final-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft ASP.NET Core 2.2.0 Shared Framework
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-2.2`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), dotnet-runtime-2.2 (>= 2.2.5), dotnet-runtime-2.2 (>= 2.2.6), dotnet-runtime-2.2 (>= 2.2.7), dotnet-runtime-2.2 (>= 2.2.8), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-runtime-3.0 (>= 3.0.0), dotnet-runtime-3.0 (>= 3.0.1), dotnet-runtime-3.0 (>= 3.0.2), dotnet-runtime-3.0 (>= 3.0.3)

  </details>

- **aspnetcore-runtime-3.1**
  - Latest version: 3.1.28-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1), dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.2), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.3), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9)

  </details>

- **aspnetcore-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-runtime-5.0`
  - Install (apt): `sudo apt install aspnetcore-runtime-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-5.0 (>= 5.0.0), dotnet-runtime-5.0 (>= 5.0.1), dotnet-runtime-5.0 (>= 5.0.10), dotnet-runtime-5.0 (>= 5.0.11), dotnet-runtime-5.0 (>= 5.0.12), dotnet-runtime-5.0 (>= 5.0.13), dotnet-runtime-5.0 (>= 5.0.14), dotnet-runtime-5.0 (>= 5.0.15), dotnet-runtime-5.0 (>= 5.0.16), dotnet-runtime-5.0 (>= 5.0.17), dotnet-runtime-5.0 (>= 5.0.2), dotnet-runtime-5.0 (>= 5.0.3), dotnet-runtime-5.0 (>= 5.0.4), dotnet-runtime-5.0 (>= 5.0.5), dotnet-runtime-5.0 (>= 5.0.6), dotnet-runtime-5.0 (>= 5.0.7), dotnet-runtime-5.0 (>= 5.0.8), dotnet-runtime-5.0 (>= 5.0.9)

  </details>

- **aspnetcore-runtime-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8)

  </details>

- **aspnetcore-store-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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

- **aspnetcore-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: stretch
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
  - Latest version: 3.1.10-1
  - Architectures: amd64
  - Suite: stretch
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

- **aspnetcore-targeting-pack-5.0**
  - Latest version: 5.0.0-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Shared Framework for hosting of Microsoft ASP.NET Core applications. It is open source, cross-platform and is supported by Microsoft. We hope you enjoy using it! If you do, please consider joining the active community of developers that are contributing to the project on GitHub (https://github.com/dotnet/aspnetcore). We happily accept issues and PRs.
  - Homepage: https://asp.net
  - Install: `sudo apt-get install aspnetcore-targeting-pack-5.0`
  - Install (apt): `sudo apt install aspnetcore-targeting-pack-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-targeting-pack-5.0 (>= 5.0.0)

  </details>

- **aspnetcore-targeting-pack-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8)

  </details>

- **azcopy**
  - Latest version: 10.31.1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: A command-line utility that is used to copy data to and from containers and file shares in Azure Storage accounts
  - Homepage: https://github.com/Azure/azure-storage-azcopy
  - Install: `sudo apt-get install azcopy`
  - Install (apt): `sudo apt install azcopy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azcopy v-Team <azcopyvteam@microsoft.com>
  - Section: default
  - Priority: optional

  </details>

- **azdata-cli**
  - Latest version: 20.3.10-1~stretch
  - Architectures: all
  - Suite: stretch
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
  - depends: libc6 (>= 2.17), libkrb5-dev, libssl1.1 (>= 1.1.0), unixodbc

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.5530-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Azure Function Core Tools v3
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
  - Suite: stretch
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
  - Latest version: 3.0.4899-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-runtime-deps-2.1 (>= 2.1.1)
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.0.5530-1
  - Architectures: amd64
  - Suite: stretch
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
  - Latest version: 1.4.5
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: blobfuse 1.3.7 - FUSE adapter for Azure Blob Storage
  - Install: `sudo apt-get install blobfuse`
  - Install (apt): `sudo apt install blobfuse`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft - Azure Storage
  - Section: devel
  - Priority: optional
  - depends: fuse

  </details>

- **blobfuse2**
  - Latest version: 2.5.2
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: An user-space filesystem for interacting with Azure Storage
  - Homepage: https://github.com/Azure/azure-storage-fuse
  - Install: `sudo apt-get install blobfuse2`
  - Install (apt): `sudo apt install blobfuse2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Blobfuse v-Team <blobfusevteam@microsoft.com>
  - Section: default
  - Priority: extra
  - depends: fuse

  </details>

- **blobfuse2-preview**
  - Latest version: 2.6.0~preview.2
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: An user-space filesystem for interacting with Azure Storage
  - Homepage: https://github.com/Azure/azure-storage-fuse
  - Install: `sudo apt-get install blobfuse2-preview`
  - Install (apt): `sudo apt install blobfuse2-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Blobfuse v-Team <blobfusevteam@microsoft.com>
  - Section: default
  - Priority: optional
  - depends: fuse

  </details>


### <a id="packages-C"></a>C

- **codespaces**
  - Latest version: 1.0.2804
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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

- **dotnet-apphost-pack-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.0.0
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
  - Latest version: 3.1.28-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.1.18
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-3.1`
  - Install (apt): `sudo apt install dotnet-apphost-pack-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Host 5.0.17
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-5.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-apphost-pack-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Host 6.0.5
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-6.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-host**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Host - 5.0.10
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libc6 (>= 2.4), libgcc1, libgcc1 (>= 1:4.1.1), libstdc++6, libstdc++6 (>= 4.8)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.30 2.1.30
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.0), dotnet-host (>= 2.1.1), dotnet-host (>= 2.1.10), dotnet-host (>= 2.1.11), dotnet-host (>= 2.1.12), dotnet-host (>= 2.1.13), dotnet-host (>= 2.1.14), dotnet-host (>= 2.1.15), dotnet-host (>= 2.1.16), dotnet-host (>= 2.1.17), dotnet-host (>= 2.1.18), dotnet-host (>= 2.1.19), dotnet-host (>= 2.1.2), dotnet-host (>= 2.1.20), dotnet-host (>= 2.1.21), dotnet-host (>= 2.1.22), dotnet-host (>= 2.1.23), dotnet-host (>= 2.1.24), dotnet-host (>= 2.1.25), dotnet-host (>= 2.1.26), dotnet-host (>= 2.1.27), dotnet-host (>= 2.1.28), dotnet-host (>= 2.1.29), dotnet-host (>= 2.1.3), dotnet-host (>= 2.1.30), dotnet-host (>= 2.1.4), dotnet-host (>= 2.1.5), dotnet-host (>= 2.1.6), dotnet-host (>= 2.1.7), dotnet-host (>= 2.1.8), dotnet-host (>= 2.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.1.0-preview2-26406-04**
  - Latest version: 2.1.0-preview2-26406-04-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.2.0 2.2.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.2`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.2.0), dotnet-host (>= 2.2.1), dotnet-host (>= 2.2.2), dotnet-host (>= 2.2.3), dotnet-host (>= 2.2.4), dotnet-host (>= 2.2.5), dotnet-host (>= 2.2.6), dotnet-host (>= 2.2.7), dotnet-host (>= 2.2.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-host (>= 3.0.0), dotnet-host (>= 3.0.1), dotnet-host (>= 3.0.2), dotnet-host (>= 3.0.3), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.1**
  - Latest version: 3.1.28-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 3.1.25 3.1.25
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-3.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 3.1.0), dotnet-host (>= 3.1.1), dotnet-host (>= 3.1.10), dotnet-host (>= 3.1.11), dotnet-host (>= 3.1.12), dotnet-host (>= 3.1.13), dotnet-host (>= 3.1.14), dotnet-host (>= 3.1.15), dotnet-host (>= 3.1.16), dotnet-host (>= 3.1.17), dotnet-host (>= 3.1.18), dotnet-host (>= 3.1.19), dotnet-host (>= 3.1.2), dotnet-host (>= 3.1.20), dotnet-host (>= 3.1.21), dotnet-host (>= 3.1.22), dotnet-host (>= 3.1.23), dotnet-host (>= 3.1.24), dotnet-host (>= 3.1.25), dotnet-host (>= 3.1.26), dotnet-host (>= 3.1.27), dotnet-host (>= 3.1.28), dotnet-host (>= 3.1.3), dotnet-host (>= 3.1.4), dotnet-host (>= 3.1.5), dotnet-host (>= 3.1.6), dotnet-host (>= 3.1.7), dotnet-host (>= 3.1.8), dotnet-host (>= 3.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 5.0.10 5.0.10
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-5.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 5.0.0), dotnet-host (>= 5.0.1), dotnet-host (>= 5.0.10), dotnet-host (>= 5.0.11), dotnet-host (>= 5.0.12), dotnet-host (>= 5.0.13), dotnet-host (>= 5.0.14), dotnet-host (>= 5.0.15), dotnet-host (>= 5.0.16), dotnet-host (>= 5.0.17), dotnet-host (>= 5.0.2), dotnet-host (>= 5.0.3), dotnet-host (>= 5.0.4), dotnet-host (>= 5.0.5), dotnet-host (>= 5.0.6), dotnet-host (>= 5.0.7), dotnet-host (>= 5.0.8), dotnet-host (>= 5.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 6.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-6.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 6.0.0), dotnet-host (>= 6.0.1), dotnet-host (>= 6.0.2), dotnet-host (>= 6.0.3), dotnet-host (>= 6.0.4), dotnet-host (>= 6.0.5), dotnet-host (>= 6.0.6), dotnet-host (>= 6.0.7), dotnet-host (>= 6.0.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hosting-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.0, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.3, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.4, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.5, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.6, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.7, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.0.9, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:4.1.1), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu57, liblttng-ust0, libssl1.0.2, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.30 Microsoft.NETCore.App 2.1.30
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1 (>= 2.1.0), dotnet-hostfxr-2.1 (>= 2.1.1), dotnet-hostfxr-2.1 (>= 2.1.10), dotnet-hostfxr-2.1 (>= 2.1.11), dotnet-hostfxr-2.1 (>= 2.1.12), dotnet-hostfxr-2.1 (>= 2.1.13), dotnet-hostfxr-2.1 (>= 2.1.14), dotnet-hostfxr-2.1 (>= 2.1.15), dotnet-hostfxr-2.1 (>= 2.1.16), dotnet-hostfxr-2.1 (>= 2.1.17), dotnet-hostfxr-2.1 (>= 2.1.18), dotnet-hostfxr-2.1 (>= 2.1.19), dotnet-hostfxr-2.1 (>= 2.1.2), dotnet-hostfxr-2.1 (>= 2.1.20), dotnet-hostfxr-2.1 (>= 2.1.21), dotnet-hostfxr-2.1 (>= 2.1.22), dotnet-hostfxr-2.1 (>= 2.1.23), dotnet-hostfxr-2.1 (>= 2.1.24), dotnet-hostfxr-2.1 (>= 2.1.25), dotnet-hostfxr-2.1 (>= 2.1.26), dotnet-hostfxr-2.1 (>= 2.1.27), dotnet-hostfxr-2.1 (>= 2.1.28), dotnet-hostfxr-2.1 (>= 2.1.29), dotnet-hostfxr-2.1 (>= 2.1.3), dotnet-hostfxr-2.1 (>= 2.1.30), dotnet-hostfxr-2.1 (>= 2.1.4), dotnet-hostfxr-2.1 (>= 2.1.5), dotnet-hostfxr-2.1 (>= 2.1.6), dotnet-hostfxr-2.1 (>= 2.1.7), dotnet-hostfxr-2.1 (>= 2.1.8), dotnet-hostfxr-2.1 (>= 2.1.9), dotnet-runtime-deps-2.1 (>= 2.1.0), dotnet-runtime-deps-2.1 (>= 2.1.1), dotnet-runtime-deps-2.1 (>= 2.1.10), dotnet-runtime-deps-2.1 (>= 2.1.11), dotnet-runtime-deps-2.1 (>= 2.1.12), dotnet-runtime-deps-2.1 (>= 2.1.13), dotnet-runtime-deps-2.1 (>= 2.1.14), dotnet-runtime-deps-2.1 (>= 2.1.15), dotnet-runtime-deps-2.1 (>= 2.1.16), dotnet-runtime-deps-2.1 (>= 2.1.17), dotnet-runtime-deps-2.1 (>= 2.1.18), dotnet-runtime-deps-2.1 (>= 2.1.19), dotnet-runtime-deps-2.1 (>= 2.1.2), dotnet-runtime-deps-2.1 (>= 2.1.20), dotnet-runtime-deps-2.1 (>= 2.1.21), dotnet-runtime-deps-2.1 (>= 2.1.22), dotnet-runtime-deps-2.1 (>= 2.1.23), dotnet-runtime-deps-2.1 (>= 2.1.24), dotnet-runtime-deps-2.1 (>= 2.1.25), dotnet-runtime-deps-2.1 (>= 2.1.26), dotnet-runtime-deps-2.1 (>= 2.1.27), dotnet-runtime-deps-2.1 (>= 2.1.28), dotnet-runtime-deps-2.1 (>= 2.1.29), dotnet-runtime-deps-2.1 (>= 2.1.3), dotnet-runtime-deps-2.1 (>= 2.1.30), dotnet-runtime-deps-2.1 (>= 2.1.4), dotnet-runtime-deps-2.1 (>= 2.1.5), dotnet-runtime-deps-2.1 (>= 2.1.6), dotnet-runtime-deps-2.1 (>= 2.1.7), dotnet-runtime-deps-2.1 (>= 2.1.8), dotnet-runtime-deps-2.1 (>= 2.1.9)

  </details>

- **dotnet-runtime-2.1.0-preview2-26406-04**
  - Latest version: 2.1.0-preview2-26406-04-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: dotnet-hostfxr-2.2 (>= 2.2.0), dotnet-hostfxr-2.2 (>= 2.2.1), dotnet-hostfxr-2.2 (>= 2.2.2), dotnet-hostfxr-2.2 (>= 2.2.3), dotnet-hostfxr-2.2 (>= 2.2.4), dotnet-hostfxr-2.2 (>= 2.2.5), dotnet-hostfxr-2.2 (>= 2.2.6), dotnet-hostfxr-2.2 (>= 2.2.7), dotnet-hostfxr-2.2 (>= 2.2.8), dotnet-runtime-deps-2.2 (>= 2.2.0), dotnet-runtime-deps-2.2 (>= 2.2.1), dotnet-runtime-deps-2.2 (>= 2.2.2), dotnet-runtime-deps-2.2 (>= 2.2.3), dotnet-runtime-deps-2.2 (>= 2.2.4), dotnet-runtime-deps-2.2 (>= 2.2.5), dotnet-runtime-deps-2.2 (>= 2.2.6), dotnet-runtime-deps-2.2 (>= 2.2.7), dotnet-runtime-deps-2.2 (>= 2.2.8)

  </details>

- **dotnet-runtime-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Runtime - 3.0.0 Microsoft.NETCore.App 3.0.0
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-3.0`
  - Install (apt): `sudo apt install dotnet-runtime-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-3.0 (>= 3.0.0), dotnet-hostfxr-3.0 (>= 3.0.1), dotnet-hostfxr-3.0 (>= 3.0.2), dotnet-hostfxr-3.0 (>= 3.0.3), dotnet-runtime-deps-3.0 (>= 3.0.0), dotnet-runtime-deps-3.0 (>= 3.0.1), dotnet-runtime-deps-3.0 (>= 3.0.2), dotnet-runtime-deps-3.0 (>= 3.0.3)

  </details>

- **dotnet-runtime-3.1**
  - Latest version: 3.1.28-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core Runtime - 3.1.18 Microsoft.NETCore.App 3.1.18
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-3.1`
  - Install (apt): `sudo apt install dotnet-runtime-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-3.1 (>= 3.1.0), dotnet-hostfxr-3.1 (>= 3.1.1), dotnet-hostfxr-3.1 (>= 3.1.10), dotnet-hostfxr-3.1 (>= 3.1.11), dotnet-hostfxr-3.1 (>= 3.1.12), dotnet-hostfxr-3.1 (>= 3.1.13), dotnet-hostfxr-3.1 (>= 3.1.14), dotnet-hostfxr-3.1 (>= 3.1.15), dotnet-hostfxr-3.1 (>= 3.1.16), dotnet-hostfxr-3.1 (>= 3.1.17), dotnet-hostfxr-3.1 (>= 3.1.18), dotnet-hostfxr-3.1 (>= 3.1.19), dotnet-hostfxr-3.1 (>= 3.1.2), dotnet-hostfxr-3.1 (>= 3.1.20), dotnet-hostfxr-3.1 (>= 3.1.21), dotnet-hostfxr-3.1 (>= 3.1.22), dotnet-hostfxr-3.1 (>= 3.1.23), dotnet-hostfxr-3.1 (>= 3.1.24), dotnet-hostfxr-3.1 (>= 3.1.25), dotnet-hostfxr-3.1 (>= 3.1.26), dotnet-hostfxr-3.1 (>= 3.1.27), dotnet-hostfxr-3.1 (>= 3.1.28), dotnet-hostfxr-3.1 (>= 3.1.3), dotnet-hostfxr-3.1 (>= 3.1.4), dotnet-hostfxr-3.1 (>= 3.1.5), dotnet-hostfxr-3.1 (>= 3.1.6), dotnet-hostfxr-3.1 (>= 3.1.7), dotnet-hostfxr-3.1 (>= 3.1.8), dotnet-hostfxr-3.1 (>= 3.1.9), dotnet-runtime-deps-3.1 (>= 3.1.0), dotnet-runtime-deps-3.1 (>= 3.1.1), dotnet-runtime-deps-3.1 (>= 3.1.10), dotnet-runtime-deps-3.1 (>= 3.1.11), dotnet-runtime-deps-3.1 (>= 3.1.12), dotnet-runtime-deps-3.1 (>= 3.1.13), dotnet-runtime-deps-3.1 (>= 3.1.14), dotnet-runtime-deps-3.1 (>= 3.1.15), dotnet-runtime-deps-3.1 (>= 3.1.16), dotnet-runtime-deps-3.1 (>= 3.1.17), dotnet-runtime-deps-3.1 (>= 3.1.18), dotnet-runtime-deps-3.1 (>= 3.1.19), dotnet-runtime-deps-3.1 (>= 3.1.2), dotnet-runtime-deps-3.1 (>= 3.1.20), dotnet-runtime-deps-3.1 (>= 3.1.21), dotnet-runtime-deps-3.1 (>= 3.1.22), dotnet-runtime-deps-3.1 (>= 3.1.23), dotnet-runtime-deps-3.1 (>= 3.1.24), dotnet-runtime-deps-3.1 (>= 3.1.25), dotnet-runtime-deps-3.1 (>= 3.1.26), dotnet-runtime-deps-3.1 (>= 3.1.27), dotnet-runtime-deps-3.1 (>= 3.1.28), dotnet-runtime-deps-3.1 (>= 3.1.3), dotnet-runtime-deps-3.1 (>= 3.1.4), dotnet-runtime-deps-3.1 (>= 3.1.5), dotnet-runtime-deps-3.1 (>= 3.1.6), dotnet-runtime-deps-3.1 (>= 3.1.7), dotnet-runtime-deps-3.1 (>= 3.1.8), dotnet-runtime-deps-3.1 (>= 3.1.9)

  </details>

- **dotnet-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Runtime - 5.0.9 Microsoft.NETCore.App 5.0.9
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-5.0`
  - Install (apt): `sudo apt install dotnet-runtime-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-5.0 (>= 5.0.0), dotnet-hostfxr-5.0 (>= 5.0.1), dotnet-hostfxr-5.0 (>= 5.0.10), dotnet-hostfxr-5.0 (>= 5.0.11), dotnet-hostfxr-5.0 (>= 5.0.12), dotnet-hostfxr-5.0 (>= 5.0.13), dotnet-hostfxr-5.0 (>= 5.0.14), dotnet-hostfxr-5.0 (>= 5.0.15), dotnet-hostfxr-5.0 (>= 5.0.16), dotnet-hostfxr-5.0 (>= 5.0.17), dotnet-hostfxr-5.0 (>= 5.0.2), dotnet-hostfxr-5.0 (>= 5.0.3), dotnet-hostfxr-5.0 (>= 5.0.4), dotnet-hostfxr-5.0 (>= 5.0.5), dotnet-hostfxr-5.0 (>= 5.0.6), dotnet-hostfxr-5.0 (>= 5.0.7), dotnet-hostfxr-5.0 (>= 5.0.8), dotnet-hostfxr-5.0 (>= 5.0.9), dotnet-runtime-deps-5.0 (>= 5.0.0), dotnet-runtime-deps-5.0 (>= 5.0.1), dotnet-runtime-deps-5.0 (>= 5.0.10), dotnet-runtime-deps-5.0 (>= 5.0.11), dotnet-runtime-deps-5.0 (>= 5.0.12), dotnet-runtime-deps-5.0 (>= 5.0.13), dotnet-runtime-deps-5.0 (>= 5.0.14), dotnet-runtime-deps-5.0 (>= 5.0.15), dotnet-runtime-deps-5.0 (>= 5.0.16), dotnet-runtime-deps-5.0 (>= 5.0.17), dotnet-runtime-deps-5.0 (>= 5.0.2), dotnet-runtime-deps-5.0 (>= 5.0.3), dotnet-runtime-deps-5.0 (>= 5.0.4), dotnet-runtime-deps-5.0 (>= 5.0.5), dotnet-runtime-deps-5.0 (>= 5.0.6), dotnet-runtime-deps-5.0 (>= 5.0.7), dotnet-runtime-deps-5.0 (>= 5.0.8), dotnet-runtime-deps-5.0 (>= 5.0.9)

  </details>

- **dotnet-runtime-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 6.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-6.0`
  - Install (apt): `sudo apt install dotnet-runtime-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-6.0 (>= 6.0.0), dotnet-hostfxr-6.0 (>= 6.0.1), dotnet-hostfxr-6.0 (>= 6.0.2), dotnet-hostfxr-6.0 (>= 6.0.3), dotnet-hostfxr-6.0 (>= 6.0.4), dotnet-hostfxr-6.0 (>= 6.0.5), dotnet-hostfxr-6.0 (>= 6.0.6), dotnet-hostfxr-6.0 (>= 6.0.7), dotnet-hostfxr-6.0 (>= 6.0.8), dotnet-runtime-deps-6.0 (>= 6.0.0), dotnet-runtime-deps-6.0 (>= 6.0.1), dotnet-runtime-deps-6.0 (>= 6.0.2), dotnet-runtime-deps-6.0 (>= 6.0.3), dotnet-runtime-deps-6.0 (>= 6.0.4), dotnet-runtime-deps-6.0 (>= 6.0.5), dotnet-runtime-deps-6.0 (>= 6.0.6), dotnet-runtime-deps-6.0 (>= 6.0.7), dotnet-runtime-deps-6.0 (>= 6.0.8)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.30
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu57, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.0.2, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: stretch
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu57, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.0.2, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: dotnet-runtime-deps-3.0 3.0.0
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
  - Latest version: 3.1.28-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: dotnet-runtime-deps-3.1 3.1.18
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-3.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: dotnet-runtime-deps-5.0 5.0.14
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-5.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: dotnet-runtime-deps-debian 6.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-6.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.1.818-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.818
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1`
  - Install (apt): `sudo apt install dotnet-sdk-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1 (>= 2.1.0), aspnetcore-runtime-2.1 (>= 2.1.1), aspnetcore-runtime-2.1 (>= 2.1.10), aspnetcore-runtime-2.1 (>= 2.1.11), aspnetcore-runtime-2.1 (>= 2.1.12), aspnetcore-runtime-2.1 (>= 2.1.13), aspnetcore-runtime-2.1 (>= 2.1.14), aspnetcore-runtime-2.1 (>= 2.1.15), aspnetcore-runtime-2.1 (>= 2.1.16), aspnetcore-runtime-2.1 (>= 2.1.17), aspnetcore-runtime-2.1 (>= 2.1.18), aspnetcore-runtime-2.1 (>= 2.1.19), aspnetcore-runtime-2.1 (>= 2.1.2), aspnetcore-runtime-2.1 (>= 2.1.20), aspnetcore-runtime-2.1 (>= 2.1.21), aspnetcore-runtime-2.1 (>= 2.1.22), aspnetcore-runtime-2.1 (>= 2.1.23), aspnetcore-runtime-2.1 (>= 2.1.24), aspnetcore-runtime-2.1 (>= 2.1.25), aspnetcore-runtime-2.1 (>= 2.1.26), aspnetcore-runtime-2.1 (>= 2.1.27), aspnetcore-runtime-2.1 (>= 2.1.28), aspnetcore-runtime-2.1 (>= 2.1.29), aspnetcore-runtime-2.1 (>= 2.1.3), aspnetcore-runtime-2.1 (>= 2.1.30), aspnetcore-runtime-2.1 (>= 2.1.4), aspnetcore-runtime-2.1 (>= 2.1.5), aspnetcore-runtime-2.1 (>= 2.1.6), aspnetcore-runtime-2.1 (>= 2.1.7), aspnetcore-runtime-2.1 (>= 2.1.8), aspnetcore-runtime-2.1 (>= 2.1.9), dotnet-runtime-2.1 (>= 2.1.0), dotnet-runtime-2.1 (>= 2.1.1), dotnet-runtime-2.1 (>= 2.1.10), dotnet-runtime-2.1 (>= 2.1.11), dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), dotnet-runtime-2.1 (>= 2.1.16), dotnet-runtime-2.1 (>= 2.1.17), dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.2), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.3), dotnet-runtime-2.1 (>= 2.1.30), dotnet-runtime-2.1 (>= 2.1.4), dotnet-runtime-2.1 (>= 2.1.5), dotnet-runtime-2.1 (>= 2.1.6), dotnet-runtime-2.1 (>= 2.1.7), dotnet-runtime-2.1 (>= 2.1.8), dotnet-runtime-2.1 (>= 2.1.9), libc6 (>= 2.4), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.1.101**
  - Latest version: 2.1.101-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 2.2.402-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core SDK 2.2.100
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.2`
  - Install (apt): `sudo apt install dotnet-sdk-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.2 (>= 2.2.0), aspnetcore-runtime-2.2 (>= 2.2.1), aspnetcore-runtime-2.2 (>= 2.2.2), aspnetcore-runtime-2.2 (>= 2.2.3), aspnetcore-runtime-2.2 (>= 2.2.4), aspnetcore-runtime-2.2 (>= 2.2.5), aspnetcore-runtime-2.2 (>= 2.2.6), aspnetcore-runtime-2.2 (>= 2.2.7), aspnetcore-runtime-2.2 (>= 2.2.8), dotnet-runtime-2.2 (>= 2.2.0), dotnet-runtime-2.2 (>= 2.2.1), dotnet-runtime-2.2 (>= 2.2.2), dotnet-runtime-2.2 (>= 2.2.3), dotnet-runtime-2.2 (>= 2.2.4), dotnet-runtime-2.2 (>= 2.2.5), dotnet-runtime-2.2 (>= 2.2.6), dotnet-runtime-2.2 (>= 2.2.7), dotnet-runtime-2.2 (>= 2.2.8), libc6 (>= 2.4), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-3.0**
  - Latest version: 3.0.103-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core SDK 3.0.100
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-3.0`
  - Install (apt): `sudo apt install dotnet-sdk-3.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-3.0 (>= 3.0.0), aspnetcore-runtime-3.0 (>= 3.0.1), aspnetcore-runtime-3.0 (>= 3.0.2), aspnetcore-runtime-3.0 (>= 3.0.3), aspnetcore-targeting-pack-3.0 (>= 3.0.0), aspnetcore-targeting-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.0), dotnet-apphost-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.2), dotnet-apphost-pack-3.0 (>= 3.0.3), dotnet-runtime-3.0 (>= 3.0.0), dotnet-runtime-3.0 (>= 3.0.1), dotnet-runtime-3.0 (>= 3.0.2), dotnet-runtime-3.0 (>= 3.0.3), dotnet-targeting-pack-3.0 (>= 3.0.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-3.1**
  - Latest version: 3.1.422-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET Core SDK 3.1.118
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-3.1`
  - Install (apt): `sudo apt install dotnet-sdk-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-3.1 (>= 3.1.0), aspnetcore-runtime-3.1 (>= 3.1.1), aspnetcore-runtime-3.1 (>= 3.1.10), aspnetcore-runtime-3.1 (>= 3.1.11), aspnetcore-runtime-3.1 (>= 3.1.12), aspnetcore-runtime-3.1 (>= 3.1.13), aspnetcore-runtime-3.1 (>= 3.1.14), aspnetcore-runtime-3.1 (>= 3.1.15), aspnetcore-runtime-3.1 (>= 3.1.16), aspnetcore-runtime-3.1 (>= 3.1.17), aspnetcore-runtime-3.1 (>= 3.1.18), aspnetcore-runtime-3.1 (>= 3.1.19), aspnetcore-runtime-3.1 (>= 3.1.2), aspnetcore-runtime-3.1 (>= 3.1.20), aspnetcore-runtime-3.1 (>= 3.1.21), aspnetcore-runtime-3.1 (>= 3.1.22), aspnetcore-runtime-3.1 (>= 3.1.23), aspnetcore-runtime-3.1 (>= 3.1.24), aspnetcore-runtime-3.1 (>= 3.1.25), aspnetcore-runtime-3.1 (>= 3.1.26), aspnetcore-runtime-3.1 (>= 3.1.27), aspnetcore-runtime-3.1 (>= 3.1.28), aspnetcore-runtime-3.1 (>= 3.1.3), aspnetcore-runtime-3.1 (>= 3.1.4), aspnetcore-runtime-3.1 (>= 3.1.5), aspnetcore-runtime-3.1 (>= 3.1.6), aspnetcore-runtime-3.1 (>= 3.1.7), aspnetcore-runtime-3.1 (>= 3.1.8), aspnetcore-runtime-3.1 (>= 3.1.9), aspnetcore-targeting-pack-3.1 (>= 3.1.0), aspnetcore-targeting-pack-3.1 (>= 3.1.10), aspnetcore-targeting-pack-3.1 (>= 3.1.2), aspnetcore-targeting-pack-3.1 (>= 3.1.3), aspnetcore-targeting-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.0), dotnet-apphost-pack-3.1 (>= 3.1.1), dotnet-apphost-pack-3.1 (>= 3.1.10), dotnet-apphost-pack-3.1 (>= 3.1.11), dotnet-apphost-pack-3.1 (>= 3.1.12), dotnet-apphost-pack-3.1 (>= 3.1.13), dotnet-apphost-pack-3.1 (>= 3.1.14), dotnet-apphost-pack-3.1 (>= 3.1.15), dotnet-apphost-pack-3.1 (>= 3.1.16), dotnet-apphost-pack-3.1 (>= 3.1.17), dotnet-apphost-pack-3.1 (>= 3.1.18), dotnet-apphost-pack-3.1 (>= 3.1.19), dotnet-apphost-pack-3.1 (>= 3.1.2), dotnet-apphost-pack-3.1 (>= 3.1.20), dotnet-apphost-pack-3.1 (>= 3.1.21), dotnet-apphost-pack-3.1 (>= 3.1.22), dotnet-apphost-pack-3.1 (>= 3.1.23), dotnet-apphost-pack-3.1 (>= 3.1.24), dotnet-apphost-pack-3.1 (>= 3.1.25), dotnet-apphost-pack-3.1 (>= 3.1.26), dotnet-apphost-pack-3.1 (>= 3.1.27), dotnet-apphost-pack-3.1 (>= 3.1.28), dotnet-apphost-pack-3.1 (>= 3.1.3), dotnet-apphost-pack-3.1 (>= 3.1.4), dotnet-apphost-pack-3.1 (>= 3.1.5), dotnet-apphost-pack-3.1 (>= 3.1.6), dotnet-apphost-pack-3.1 (>= 3.1.7), dotnet-apphost-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.9), dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1), dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.2), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.3), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9), dotnet-targeting-pack-3.1 (>= 3.1.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-5.0**
  - Latest version: 5.0.408-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET SDK 5.0.206
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-5.0`
  - Install (apt): `sudo apt install dotnet-sdk-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-5.0 (>= 5.0.0), aspnetcore-runtime-5.0 (>= 5.0.1), aspnetcore-runtime-5.0 (>= 5.0.10), aspnetcore-runtime-5.0 (>= 5.0.11), aspnetcore-runtime-5.0 (>= 5.0.12), aspnetcore-runtime-5.0 (>= 5.0.13), aspnetcore-runtime-5.0 (>= 5.0.14), aspnetcore-runtime-5.0 (>= 5.0.15), aspnetcore-runtime-5.0 (>= 5.0.16), aspnetcore-runtime-5.0 (>= 5.0.17), aspnetcore-runtime-5.0 (>= 5.0.2), aspnetcore-runtime-5.0 (>= 5.0.3), aspnetcore-runtime-5.0 (>= 5.0.4), aspnetcore-runtime-5.0 (>= 5.0.5), aspnetcore-runtime-5.0 (>= 5.0.6), aspnetcore-runtime-5.0 (>= 5.0.7), aspnetcore-runtime-5.0 (>= 5.0.8), aspnetcore-runtime-5.0 (>= 5.0.9), aspnetcore-targeting-pack-5.0 (>= 5.0.0), dotnet-apphost-pack-5.0 (>= 5.0.0), dotnet-apphost-pack-5.0 (>= 5.0.1), dotnet-apphost-pack-5.0 (>= 5.0.10), dotnet-apphost-pack-5.0 (>= 5.0.11), dotnet-apphost-pack-5.0 (>= 5.0.12), dotnet-apphost-pack-5.0 (>= 5.0.13), dotnet-apphost-pack-5.0 (>= 5.0.14), dotnet-apphost-pack-5.0 (>= 5.0.15), dotnet-apphost-pack-5.0 (>= 5.0.16), dotnet-apphost-pack-5.0 (>= 5.0.17), dotnet-apphost-pack-5.0 (>= 5.0.2), dotnet-apphost-pack-5.0 (>= 5.0.3), dotnet-apphost-pack-5.0 (>= 5.0.4), dotnet-apphost-pack-5.0 (>= 5.0.5), dotnet-apphost-pack-5.0 (>= 5.0.6), dotnet-apphost-pack-5.0 (>= 5.0.7), dotnet-apphost-pack-5.0 (>= 5.0.8), dotnet-apphost-pack-5.0 (>= 5.0.9), dotnet-runtime-5.0 (>= 5.0.0), dotnet-runtime-5.0 (>= 5.0.1), dotnet-runtime-5.0 (>= 5.0.10), dotnet-runtime-5.0 (>= 5.0.11), dotnet-runtime-5.0 (>= 5.0.12), dotnet-runtime-5.0 (>= 5.0.13), dotnet-runtime-5.0 (>= 5.0.14), dotnet-runtime-5.0 (>= 5.0.15), dotnet-runtime-5.0 (>= 5.0.16), dotnet-runtime-5.0 (>= 5.0.17), dotnet-runtime-5.0 (>= 5.0.2), dotnet-runtime-5.0 (>= 5.0.3), dotnet-runtime-5.0 (>= 5.0.4), dotnet-runtime-5.0 (>= 5.0.5), dotnet-runtime-5.0 (>= 5.0.6), dotnet-runtime-5.0 (>= 5.0.7), dotnet-runtime-5.0 (>= 5.0.8), dotnet-runtime-5.0 (>= 5.0.9), dotnet-targeting-pack-5.0 (>= 5.0.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.4.0), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-6.0**
  - Latest version: 6.0.400-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft .NET SDK 6.0.103
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-6.0`
  - Install (apt): `sudo apt install dotnet-sdk-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-6.0 (>= 6.0.0), aspnetcore-runtime-6.0 (>= 6.0.1), aspnetcore-runtime-6.0 (>= 6.0.2), aspnetcore-runtime-6.0 (>= 6.0.3), aspnetcore-runtime-6.0 (>= 6.0.4), aspnetcore-runtime-6.0 (>= 6.0.5), aspnetcore-runtime-6.0 (>= 6.0.6), aspnetcore-runtime-6.0 (>= 6.0.7), aspnetcore-runtime-6.0 (>= 6.0.8), aspnetcore-targeting-pack-6.0 (>= 6.0.0), aspnetcore-targeting-pack-6.0 (>= 6.0.2), aspnetcore-targeting-pack-6.0 (>= 6.0.3), aspnetcore-targeting-pack-6.0 (>= 6.0.4), aspnetcore-targeting-pack-6.0 (>= 6.0.5), aspnetcore-targeting-pack-6.0 (>= 6.0.6), aspnetcore-targeting-pack-6.0 (>= 6.0.7), aspnetcore-targeting-pack-6.0 (>= 6.0.8), dotnet-apphost-pack-6.0 (>= 6.0.0), dotnet-apphost-pack-6.0 (>= 6.0.1), dotnet-apphost-pack-6.0 (>= 6.0.2), dotnet-apphost-pack-6.0 (>= 6.0.3), dotnet-apphost-pack-6.0 (>= 6.0.4), dotnet-apphost-pack-6.0 (>= 6.0.5), dotnet-apphost-pack-6.0 (>= 6.0.6), dotnet-apphost-pack-6.0 (>= 6.0.7), dotnet-apphost-pack-6.0 (>= 6.0.8), dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8), dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.1), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 3.0.0
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
  - Suite: stretch
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

- **dotnet-targeting-pack-5.0**
  - Latest version: 5.0.0-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 5.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-5.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-5.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>

- **dotnet-targeting-pack-6.0**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 6.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-6.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-I"></a>I

- **iotedge**
  - Latest version: 1.0.7.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Azure IoT Edge Security Daemon
  - Homepage: https://github.com/azure/iot-edge
  - Install: `sudo apt-get install iotedge`
  - Install (apt): `sudo apt install iotedge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: admin
  - Priority: extra
  - depends: adduser, ca-certificates, hostname, init-system-helpers (>= 1.18~), libc6 (>= 2.18), libgcc1 (>= 1:4.2), libiothsm-std (>> 1.0.4), libssl1.0.0 (>= 1.0.2~beta3), sed

  </details>


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20251111.1
  - Architectures: amd64, arm64
  - Suite: stretch
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

- **libiothsm-std**
  - Latest version: 1.0.7.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Azure IoT standard mode HSM lib
  - Install: `sudo apt-get install libiothsm-std`
  - Install (apt): `sudo apt install libiothsm-std`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: devel
  - Priority: optional
  - provides: libiothsm

  </details>

- **libmsquic**
  - Latest version: 2.4.8
  - Architectures: amd64, arm64, armhf
  - Suite: stretch
  - Components: main
  - Description: Microsoft implementation of the IETF QUIC protocol
  - Homepage: https://github.com/microsoft/msquic
  - Install: `sudo apt-get install libmsquic`
  - Install (apt): `sudo apt install libmsquic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@9d58bd1cab7b>
  - Section: default
  - Priority: extra
  - depends: libnuma1, libssl1.1
  - conflicts: libmsquic-debug
  - provides: libmsquic, libmsquic.so

  </details>

- **libodbc1**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
  - Components: main
  - Description: Microsoft Defender Advanced Threat Protection for Endpoints (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender ATP Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: auditd, curl (>= 7.5), dmidecode, libatomic1, libc6 (>= 2.23), libfuse2, libpcre3, libseccomp2, libselinux1, libuuid1, mde-netfilter, perl, python3, rsyslog, uuid-runtime

  </details>

- **mde-netfilter**
  - Latest version: 100.69.73
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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

- **moby-buildx**
  - Latest version: 0.5.1+azure-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: A Docker CLI plugin for extended build capabilities with BuildKit
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install moby-buildx`
  - Install (apt): `sudo apt install moby-buildx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - recommends: moby-cli
  - conflicts: docker-ce, docker-ee

  </details>

- **moby-cli**
  - Latest version: 20.10.8+azure-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Moby: the open-source application container engine
  - Homepage: https://mobyproject.org
  - Install: `sudo apt-get install moby-cli`
  - Install (apt): `sudo apt install moby-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: iptables, libc6 (>= 2.3.2)
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, moby-buildx, moby-engine, pigz, xz-utils
  - suggests: moby-engine
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-engine**
  - Latest version: 3.0.13+azure-0
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Moby: the open-source application container engine
  - Homepage: https://mobyproject.org
  - Install: `sudo apt-get install moby-engine`
  - Install (apt): `sudo apt install moby-engine`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), iptables
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, iptables, kmod, moby-cli, pigz, xz-utils
  - suggests: cgroupfs-mount | cgroup-lite, git
  - conflicts: docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package, moby-containerd, moby-runc
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **msodbcsql17**
  - Latest version: 17.10.6.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libc6 (>= 2.19), libcurl3, libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), odbcinst, openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql18**
  - Latest version: 18.0.1.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql18`
  - Install (apt): `sudo apt install msodbcsql18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msopenjdk-11**
  - Latest version: 11.0.24-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: OpenJDK Development Kit 11 (JDK) with Hotspot by Microsoft
  - Homepage: https://www.microsoft.com
  - Install: `sudo apt-get install msopenjdk-11`
  - Install (apt): `sudo apt install msopenjdk-11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: java
  - Priority: extra
  - depends: ca-certificates, fonts-dejavu, java-common, libasound2, libc6, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6, zlib1g
  - recommends: fonts-dejavu, fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-16**
  - Latest version: 16.0.2+7-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: OpenJDK Development Kit 16 (JDK) with Hotspot by Microsoft
  - Homepage: https://www.microsoft.com
  - Install: `sudo apt-get install msopenjdk-16`
  - Install (apt): `sudo apt install msopenjdk-16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: java
  - Priority: extra
  - depends: ca-certificates, fonts-dejavu, java-common, libasound2, libc6, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-17**
  - Latest version: 17.0.12-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: OpenJDK Development Kit 17 (JDK) with Hotspot by Microsoft
  - Homepage: https://www.microsoft.com
  - Install: `sudo apt-get install msopenjdk-17`
  - Install (apt): `sudo apt install msopenjdk-17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: java
  - Priority: extra
  - depends: ca-certificates, fonts-dejavu, java-common, libasound2, libc6, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6, zlib1g
  - recommends: fonts-dejavu, fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java17-runtime, java17-runtime-headless, java17-sdk, java17-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-21**
  - Latest version: 21.0.4-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Microsoft Build of OpenJDK 21
  - Install: `sudo apt-get install msopenjdk-21`
  - Install (apt): `sudo apt install msopenjdk-21`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, java-common, libc6, zlib1g
  - recommends: fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java17-runtime, java17-runtime-headless, java17-sdk, java17-sdk-headless, java18-runtime, java18-runtime-headless, java18-sdk, java18-sdk-headless, java19-runtime, java19-runtime-headless, java19-sdk, java19-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java20-runtime, java20-runtime-headless, java20-sdk, java20-sdk-headless, java21-runtime, java21-runtime-headless, java21-sdk, java21-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **mssql-cli**
  - Latest version: 1.0.0-1
  - Architectures: all
  - Suite: stretch
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
  - Latest version: 17.10.1.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libkrb5-3, libstdc++6 (>= 4.9), msodbcsql17 (<< 17.1.0.0), msodbcsql17 (<< 17.2.0.0), msodbcsql17 (<< 17.3.0.0), msodbcsql17 (<< 17.4.0.0), msodbcsql17 (>= 17.0.0.1), msodbcsql17 (>= 17.1.0.1), msodbcsql17 (>= 17.2.0.0), msodbcsql17 (>= 17.3.0.0), openssl

  </details>

- **mssql-tools18**
  - Latest version: 18.0.1.1-1
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools18`
  - Install (apt): `sudo apt install mssql-tools18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libkrb5-3, libstdc++6 (>= 4.9), msodbcsql18 (>= 18.0.0.0), openssl

  </details>


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Latest version: 1.1-debian9
  - Architectures: all
  - Suite: stretch
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
  - Latest version: 7.5.4-1.deb
  - Architectures: amd64
  - Suite: stretch
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
  - depends: libc6, libcurl3, libgcc1, libgssapi-krb5-2, libicu57, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.2, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, libunwind8, libuuid1, zlib1g

  </details>

- **powershell-lts**
  - Latest version: 7.4.13-1.deb
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell-lts`
  - Install (apt): `sudo apt install powershell-lts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: extra
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu57, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.2, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 7.6.0-preview.5-1.deb
  - Architectures: amd64
  - Suite: stretch
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu57, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu76|libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.2, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **procdump**
  - Latest version: 1.2-359
  - Architectures: amd64
  - Suite: stretch
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


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: stretch
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

- **sysinternalsebpf**
  - Latest version: 1.0.2
  - Architectures: amd64
  - Suite: stretch
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
  - Latest version: 1.0.2
  - Architectures: amd64
  - Suite: stretch
  - Components: main
  - Description: A system monitor based on eBPF, ported from Windows, that outputs events to Syslog
  - Install: `sudo apt-get install sysmonforlinux`
  - Install (apt): `sudo apt install sysmonforlinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5), libxml2 (>= 2.7.4), sysinternalsebpf (>= 1.0.2), sysinternalsebpf (>= 1)

  </details>


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
  - Suite: stretch
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
- Repo tags: microsoft, apt, debian
- Key tags: microsoft
