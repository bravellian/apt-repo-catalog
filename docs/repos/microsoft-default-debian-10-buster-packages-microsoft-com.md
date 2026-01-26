# Microsoft - debian-10 - default

## Repository
- Repository ID: `microsoft-default-debian-10-buster-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/debian/10/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/10
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `buster`
  - Components: main
  - Architectures: amd64
  - Observed OSes: debian-10

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

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/10/prod buster main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-10-buster-packages-microsoft-com-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/10/prod buster main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-10-buster-packages-microsoft-com-buster.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (135)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-H">H</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.8-1), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aadsshlogin**
  - Latest version: 1.0.030830001
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.25), libcurl4, libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libpam0g (>= 0.99.7.1), libselinux1 (>= 2.0.65), libsemanage1 (>= 2.0.32), libssl1.1 (>= 1.1.0), libstdc++6 (>= 4.1.1), libuuid1, libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.030830001
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=2.8-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **acms-client**
  - Latest version: 5.31
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: ACMS client for dSMS
  - Install: `sudo apt-get install acms-client`
  - Install (apt): `sudo apt install acms-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: dsmsdev
  - Priority: extra
  - depends: curl, libacl1, libcurl4, libprotobuf-dev, libuuid1, libxml2

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft ASP.NET Core 2.1.20 Shared Framework
  - Homepage: https://www.asp.net/
  - Install: `sudo apt-get install aspnetcore-runtime-2.1`
  - Install (apt): `sudo apt install aspnetcore-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <nugetaspnet@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), dotnet-runtime-2.1 (>= 2.1.16), dotnet-runtime-2.1 (>= 2.1.17), dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.30), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-2.2 (>= 2.2.6), dotnet-runtime-2.2 (>= 2.2.7), dotnet-runtime-2.2 (>= 2.2.8), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1), dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.2), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.29), dotnet-runtime-3.1 (>= 3.1.3), dotnet-runtime-3.1 (>= 3.1.30), dotnet-runtime-3.1 (>= 3.1.31), dotnet-runtime-3.1 (>= 3.1.32), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9)

  </details>

- **aspnetcore-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.10), dotnet-runtime-6.0 (>= 6.0.11), dotnet-runtime-6.0 (>= 6.0.12), dotnet-runtime-6.0 (>= 6.0.13), dotnet-runtime-6.0 (>= 6.0.14), dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8), dotnet-runtime-6.0 (>= 6.0.9)

  </details>

- **aspnetcore-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-7.0 (>= 7.0.0), dotnet-runtime-7.0 (>= 7.0.1), dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.2), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.3), dotnet-runtime-7.0 (>= 7.0.4), dotnet-runtime-7.0 (>= 7.0.5), dotnet-runtime-7.0 (>= 7.0.7), dotnet-runtime-7.0 (>= 7.0.8), dotnet-runtime-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-runtime-8.0**
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.11), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8)

  </details>

- **aspnetcore-runtime-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-runtime-9.0 (>= 9.0.0)

  </details>

- **aspnetcore-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.10), dotnet-targeting-pack-6.0 (>= 6.0.11), dotnet-targeting-pack-6.0 (>= 6.0.12), dotnet-targeting-pack-6.0 (>= 6.0.13), dotnet-targeting-pack-6.0 (>= 6.0.14), dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8), dotnet-targeting-pack-6.0 (>= 6.0.9)

  </details>

- **aspnetcore-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-targeting-pack-7.0 (>= 7.0.0), dotnet-targeting-pack-7.0 (>= 7.0.1), dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.2), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.3), dotnet-targeting-pack-7.0 (>= 7.0.4), dotnet-targeting-pack-7.0 (>= 7.0.5), dotnet-targeting-pack-7.0 (>= 7.0.7), dotnet-targeting-pack-7.0 (>= 7.0.8), dotnet-targeting-pack-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-targeting-pack-8.0**
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.11), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8)

  </details>

- **aspnetcore-targeting-pack-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-targeting-pack-9.0 (>= 9.0.0)

  </details>

- **azcmagent**
  - Latest version: 1.44.02748.1621
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure Connected Machine Agent
  - Install: `sudo apt-get install azcmagent`
  - Install (apt): `sudo apt install azcmagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Connected Machine Agent <hybridrpft@microsoft.com>
  - depends: curl, passwd, systemd

  </details>

- **azcopy**
  - Latest version: 10.31.1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 20.3.10-1~buster
  - Architectures: all
  - Suite: buster
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
  - depends: libc6 (>= 2.28), libkrb5-dev, libssl1.1 (>= 1.1.0), unixodbc

  </details>

- **azure-ai-vision-dev-core**
  - Latest version: 0.9.0~beta.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure AI Vision Core Developer Package
  - Install: `sudo apt-get install azure-ai-vision-dev-core`
  - Install (apt): `sudo apt install azure-ai-vision-dev-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-core, azure-ai-vision-runtime-core-media

  </details>

- **azure-ai-vision-dev-image-analysis**
  - Latest version: 0.9.0~beta.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure AI Vision Image Analysis Developer Package
  - Install: `sudo apt-get install azure-ai-vision-dev-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-dev-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-dev-core (= 0.9.0~beta.1), azure-ai-vision-runtime-image-analysis (= 0.9.0~beta.1)

  </details>

- **azure-ai-vision-runtime-core**
  - Latest version: 0.9.0~beta.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure AI Vision Core Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-core`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-core`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.4), libgcc1 (>= 1:3.3.1), libstdc++6 (>= 6), libuuid1 (>= 2.16)

  </details>

- **azure-ai-vision-runtime-core-media**
  - Latest version: 0.9.0~beta.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure AI Vision Core Media Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-core-media`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-core-media`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-core (= 0.9.0~beta.1)

  </details>

- **azure-ai-vision-runtime-image-analysis**
  - Latest version: 0.9.0~beta.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure AI Vision Image Analysis Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-core (= 0.9.0~beta.1), azure-ai-vision-runtime-core-media (= 0.9.0~beta.1)

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.6.0-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 3.0.5682-1
  - Architectures: amd64
  - Suite: buster
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
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.6.0-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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

- **blobfuse2**
  - Latest version: 2.5.2
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: An user-space filesystem for interacting with Azure Storage
  - Homepage: https://github.com/Azure/azure-storage-fuse
  - Install: `sudo apt-get install blobfuse2`
  - Install (apt): `sudo apt install blobfuse2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Blobfuse v-Team <blobfusevteam@microsoft.com>
  - Section: default
  - Priority: optional
  - depends: fuse

  </details>

- **blobfuse2-preview**
  - Latest version: 2.6.0~preview.2
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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

- **defender-iot-micro-agent**
  - Latest version: 4.6.2
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft Defender for IoT Micro Agent
  - Install: `sudo apt-get install defender-iot-micro-agent`
  - Install (apt): `sudo apt install defender-iot-micro-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Priority: optional
  - depends: dmidecode, libcurl4-openssl-dev, libpcap0.8, libssl1.1, libuuid1, libuv1, sudo, uuid-runtime
  - recommends: dmidecode
  - conflicts: defender-iot-micro-agent-edge

  </details>

- **defender-iot-micro-agent-edge**
  - Latest version: 4.6.2
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft Defender for IoT Micro Agent
  - Install: `sudo apt-get install defender-iot-micro-agent-edge`
  - Install (apt): `sudo apt install defender-iot-micro-agent-edge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Priority: optional
  - depends: aziot-edge, dmidecode, libcurl4-openssl-dev, libpcap0.8, libssl1.1, libuuid1, libuv1, sudo, uuid-runtime
  - recommends: dmidecode
  - conflicts: defender-iot-micro-agent

  </details>

- **deliveryoptimization-agent**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Delivery Optimization downloader with Microsoft Connected Cache support
  - Homepage: https://github.com/microsoft/do-client
  - Install: `sudo apt-get install deliveryoptimization-agent`
  - Install (apt): `sudo apt install deliveryoptimization-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: docloss@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libboost-filesystem1.67.0, libboost-system1.67.0, libc6 (>= 2.25), libcurl4 (>= 7.16.2), libgcc1 (>= 1:3.0), libproxy1v5 (>= 0.4.14), libstdc++6 (>= 6)

  </details>

- **deliveryoptimization-plugin-apt**
  - Latest version: 0.5.1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft project that enables APT downloads to go through the Delivery Optimization Agent
  - Homepage: https://github.com/microsoft/do-client
  - Install: `sudo apt-get install deliveryoptimization-plugin-apt`
  - Install (apt): `sudo apt install deliveryoptimization-plugin-apt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: docloss@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libboost-filesystem1.67.0, libboost-system1.67.0, libc6 (>= 2.4), libdeliveryoptimization, libgcc1 (>= 1:3.0), libssl1.1 (>= 1.1.0), libstdc++6 (>= 5.2), libuuid1 (>= 2.16)

  </details>

- **deviceupdate-agent**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Device update agent
  - Homepage: https://github.com/Azure/iot-hub-device-update
  - Install: `sudo apt-get install deviceupdate-agent`
  - Install (apt): `sudo apt install deviceupdate-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: aduct@microsoft.com
  - Section: admin
  - Priority: extra
  - depends: deliveryoptimization-agent (>= 1.0.0), libatomic1 (>= 4.8), libboost-filesystem1.67.0, libboost-system1.67.0, libc6 (>= 2.14), libcurl4 (>= 7.18.2), libcurl4 (>= 7.63.0), libcurl4-openssl-dev, libdeliveryoptimization (>= 1.0.0), libgcc1 (>= 1:3.0), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libuuid1 (>= 2.16), libxml2 (>= 2.7.4)
  - suggests: deliveryoptimization-plugin-apt

  </details>

- **dotnet-apphost-pack-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.1.28
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
  - Suite: buster
  - Components: main
  - Description: Microsoft.NETCore.App.Host 5.0.8
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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

- **dotnet-apphost-pack-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft.NETCore.App.Host 9.0.0
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
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Host - 3.1.16
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
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 2.1.21 2.1.21
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-2.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 2.1.12), dotnet-host (>= 2.1.13), dotnet-host (>= 2.1.14), dotnet-host (>= 2.1.15), dotnet-host (>= 2.1.16), dotnet-host (>= 2.1.17), dotnet-host (>= 2.1.18), dotnet-host (>= 2.1.19), dotnet-host (>= 2.1.20), dotnet-host (>= 2.1.21), dotnet-host (>= 2.1.22), dotnet-host (>= 2.1.23), dotnet-host (>= 2.1.24), dotnet-host (>= 2.1.25), dotnet-host (>= 2.1.26), dotnet-host (>= 2.1.27), dotnet-host (>= 2.1.28), dotnet-host (>= 2.1.29), dotnet-host (>= 2.1.30), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-host (>= 2.2.6), dotnet-host (>= 2.2.7), dotnet-host (>= 2.2.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Host FX Resolver - 3.1.31 3.1.31
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-hostfxr-3.1`
  - Install (apt): `sudo apt install dotnet-hostfxr-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 3.1.0), dotnet-host (>= 3.1.1), dotnet-host (>= 3.1.10), dotnet-host (>= 3.1.11), dotnet-host (>= 3.1.12), dotnet-host (>= 3.1.13), dotnet-host (>= 3.1.14), dotnet-host (>= 3.1.15), dotnet-host (>= 3.1.16), dotnet-host (>= 3.1.17), dotnet-host (>= 3.1.18), dotnet-host (>= 3.1.19), dotnet-host (>= 3.1.2), dotnet-host (>= 3.1.20), dotnet-host (>= 3.1.21), dotnet-host (>= 3.1.22), dotnet-host (>= 3.1.23), dotnet-host (>= 3.1.24), dotnet-host (>= 3.1.25), dotnet-host (>= 3.1.26), dotnet-host (>= 3.1.27), dotnet-host (>= 3.1.28), dotnet-host (>= 3.1.29), dotnet-host (>= 3.1.3), dotnet-host (>= 3.1.30), dotnet-host (>= 3.1.31), dotnet-host (>= 3.1.32), dotnet-host (>= 3.1.4), dotnet-host (>= 3.1.5), dotnet-host (>= 3.1.6), dotnet-host (>= 3.1.7), dotnet-host (>= 3.1.8), dotnet-host (>= 3.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 5.0.7 5.0.7
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-host (>= 6.0.0), dotnet-host (>= 6.0.1), dotnet-host (>= 6.0.10), dotnet-host (>= 6.0.11), dotnet-host (>= 6.0.12), dotnet-host (>= 6.0.13), dotnet-host (>= 6.0.14), dotnet-host (>= 6.0.15), dotnet-host (>= 6.0.16), dotnet-host (>= 6.0.18), dotnet-host (>= 6.0.19), dotnet-host (>= 6.0.2), dotnet-host (>= 6.0.20), dotnet-host (>= 6.0.21), dotnet-host (>= 6.0.23), dotnet-host (>= 6.0.24), dotnet-host (>= 6.0.25), dotnet-host (>= 6.0.26), dotnet-host (>= 6.0.27), dotnet-host (>= 6.0.28), dotnet-host (>= 6.0.29), dotnet-host (>= 6.0.3), dotnet-host (>= 6.0.30), dotnet-host (>= 6.0.31), dotnet-host (>= 6.0.32), dotnet-host (>= 6.0.33), dotnet-host (>= 6.0.35), dotnet-host (>= 6.0.36), dotnet-host (>= 6.0.4), dotnet-host (>= 6.0.5), dotnet-host (>= 6.0.6), dotnet-host (>= 6.0.7), dotnet-host (>= 6.0.8), dotnet-host (>= 6.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-host (>= 7.0.0), dotnet-host (>= 7.0.1), dotnet-host (>= 7.0.10), dotnet-host (>= 7.0.11), dotnet-host (>= 7.0.12), dotnet-host (>= 7.0.13), dotnet-host (>= 7.0.14), dotnet-host (>= 7.0.15), dotnet-host (>= 7.0.16), dotnet-host (>= 7.0.17), dotnet-host (>= 7.0.18), dotnet-host (>= 7.0.19), dotnet-host (>= 7.0.2), dotnet-host (>= 7.0.20), dotnet-host (>= 7.0.3), dotnet-host (>= 7.0.4), dotnet-host (>= 7.0.5), dotnet-host (>= 7.0.7), dotnet-host (>= 7.0.8), dotnet-host (>= 7.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-8.0**
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-host (>= 8.0.0), dotnet-host (>= 8.0.1), dotnet-host (>= 8.0.10), dotnet-host (>= 8.0.11), dotnet-host (>= 8.0.2), dotnet-host (>= 8.0.3), dotnet-host (>= 8.0.4), dotnet-host (>= 8.0.5), dotnet-host (>= 8.0.6), dotnet-host (>= 8.0.7), dotnet-host (>= 8.0.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 9.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-9.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 9.0.0), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.1.21 Microsoft.NETCore.App 2.1.21
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.1 (>= 2.1.12), dotnet-hostfxr-2.1 (>= 2.1.13), dotnet-hostfxr-2.1 (>= 2.1.14), dotnet-hostfxr-2.1 (>= 2.1.15), dotnet-hostfxr-2.1 (>= 2.1.16), dotnet-hostfxr-2.1 (>= 2.1.17), dotnet-hostfxr-2.1 (>= 2.1.18), dotnet-hostfxr-2.1 (>= 2.1.19), dotnet-hostfxr-2.1 (>= 2.1.20), dotnet-hostfxr-2.1 (>= 2.1.21), dotnet-hostfxr-2.1 (>= 2.1.22), dotnet-hostfxr-2.1 (>= 2.1.23), dotnet-hostfxr-2.1 (>= 2.1.24), dotnet-hostfxr-2.1 (>= 2.1.25), dotnet-hostfxr-2.1 (>= 2.1.26), dotnet-hostfxr-2.1 (>= 2.1.27), dotnet-hostfxr-2.1 (>= 2.1.28), dotnet-hostfxr-2.1 (>= 2.1.29), dotnet-hostfxr-2.1 (>= 2.1.30), dotnet-runtime-deps-2.1 (>= 2.1.12), dotnet-runtime-deps-2.1 (>= 2.1.13), dotnet-runtime-deps-2.1 (>= 2.1.14), dotnet-runtime-deps-2.1 (>= 2.1.15), dotnet-runtime-deps-2.1 (>= 2.1.16), dotnet-runtime-deps-2.1 (>= 2.1.17), dotnet-runtime-deps-2.1 (>= 2.1.18), dotnet-runtime-deps-2.1 (>= 2.1.19), dotnet-runtime-deps-2.1 (>= 2.1.20), dotnet-runtime-deps-2.1 (>= 2.1.21), dotnet-runtime-deps-2.1 (>= 2.1.22), dotnet-runtime-deps-2.1 (>= 2.1.23), dotnet-runtime-deps-2.1 (>= 2.1.24), dotnet-runtime-deps-2.1 (>= 2.1.25), dotnet-runtime-deps-2.1 (>= 2.1.26), dotnet-runtime-deps-2.1 (>= 2.1.27), dotnet-runtime-deps-2.1 (>= 2.1.28), dotnet-runtime-deps-2.1 (>= 2.1.29), dotnet-runtime-deps-2.1 (>= 2.1.30)

  </details>

- **dotnet-runtime-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Runtime - 2.2.8 Microsoft.NETCore.App 2.2.8
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-2.2 (>= 2.2.6), dotnet-hostfxr-2.2 (>= 2.2.7), dotnet-hostfxr-2.2 (>= 2.2.8), dotnet-runtime-deps-2.2 (>= 2.2.6), dotnet-runtime-deps-2.2 (>= 2.2.7), dotnet-runtime-deps-2.2 (>= 2.2.8)

  </details>

- **dotnet-runtime-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-hostfxr-3.0 (>= 3.0.0), dotnet-hostfxr-3.0 (>= 3.0.1), dotnet-hostfxr-3.0 (>= 3.0.2), dotnet-hostfxr-3.0 (>= 3.0.3), dotnet-runtime-deps-3.0 (>= 3.0.0), dotnet-runtime-deps-3.0 (>= 3.0.1), dotnet-runtime-deps-3.0 (>= 3.0.2), dotnet-runtime-deps-3.0 (>= 3.0.3)

  </details>

- **dotnet-runtime-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core Runtime - 3.1.8 Microsoft.NETCore.App 3.1.8
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-3.1`
  - Install (apt): `sudo apt install dotnet-runtime-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-3.1 (>= 3.1.0), dotnet-hostfxr-3.1 (>= 3.1.1), dotnet-hostfxr-3.1 (>= 3.1.10), dotnet-hostfxr-3.1 (>= 3.1.11), dotnet-hostfxr-3.1 (>= 3.1.12), dotnet-hostfxr-3.1 (>= 3.1.13), dotnet-hostfxr-3.1 (>= 3.1.14), dotnet-hostfxr-3.1 (>= 3.1.15), dotnet-hostfxr-3.1 (>= 3.1.16), dotnet-hostfxr-3.1 (>= 3.1.17), dotnet-hostfxr-3.1 (>= 3.1.18), dotnet-hostfxr-3.1 (>= 3.1.19), dotnet-hostfxr-3.1 (>= 3.1.2), dotnet-hostfxr-3.1 (>= 3.1.20), dotnet-hostfxr-3.1 (>= 3.1.21), dotnet-hostfxr-3.1 (>= 3.1.22), dotnet-hostfxr-3.1 (>= 3.1.23), dotnet-hostfxr-3.1 (>= 3.1.24), dotnet-hostfxr-3.1 (>= 3.1.25), dotnet-hostfxr-3.1 (>= 3.1.26), dotnet-hostfxr-3.1 (>= 3.1.27), dotnet-hostfxr-3.1 (>= 3.1.28), dotnet-hostfxr-3.1 (>= 3.1.29), dotnet-hostfxr-3.1 (>= 3.1.3), dotnet-hostfxr-3.1 (>= 3.1.30), dotnet-hostfxr-3.1 (>= 3.1.31), dotnet-hostfxr-3.1 (>= 3.1.32), dotnet-hostfxr-3.1 (>= 3.1.4), dotnet-hostfxr-3.1 (>= 3.1.5), dotnet-hostfxr-3.1 (>= 3.1.6), dotnet-hostfxr-3.1 (>= 3.1.7), dotnet-hostfxr-3.1 (>= 3.1.8), dotnet-hostfxr-3.1 (>= 3.1.9), dotnet-runtime-deps-3.1 (>= 3.1.0), dotnet-runtime-deps-3.1 (>= 3.1.1), dotnet-runtime-deps-3.1 (>= 3.1.10), dotnet-runtime-deps-3.1 (>= 3.1.11), dotnet-runtime-deps-3.1 (>= 3.1.12), dotnet-runtime-deps-3.1 (>= 3.1.13), dotnet-runtime-deps-3.1 (>= 3.1.14), dotnet-runtime-deps-3.1 (>= 3.1.15), dotnet-runtime-deps-3.1 (>= 3.1.16), dotnet-runtime-deps-3.1 (>= 3.1.17), dotnet-runtime-deps-3.1 (>= 3.1.18), dotnet-runtime-deps-3.1 (>= 3.1.19), dotnet-runtime-deps-3.1 (>= 3.1.2), dotnet-runtime-deps-3.1 (>= 3.1.20), dotnet-runtime-deps-3.1 (>= 3.1.21), dotnet-runtime-deps-3.1 (>= 3.1.22), dotnet-runtime-deps-3.1 (>= 3.1.23), dotnet-runtime-deps-3.1 (>= 3.1.24), dotnet-runtime-deps-3.1 (>= 3.1.25), dotnet-runtime-deps-3.1 (>= 3.1.26), dotnet-runtime-deps-3.1 (>= 3.1.27), dotnet-runtime-deps-3.1 (>= 3.1.28), dotnet-runtime-deps-3.1 (>= 3.1.29), dotnet-runtime-deps-3.1 (>= 3.1.3), dotnet-runtime-deps-3.1 (>= 3.1.30), dotnet-runtime-deps-3.1 (>= 3.1.31), dotnet-runtime-deps-3.1 (>= 3.1.32), dotnet-runtime-deps-3.1 (>= 3.1.4), dotnet-runtime-deps-3.1 (>= 3.1.5), dotnet-runtime-deps-3.1 (>= 3.1.6), dotnet-runtime-deps-3.1 (>= 3.1.7), dotnet-runtime-deps-3.1 (>= 3.1.8), dotnet-runtime-deps-3.1 (>= 3.1.9)

  </details>

- **dotnet-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Runtime - 5.0.5 Microsoft.NETCore.App 5.0.5
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-hostfxr-6.0 (>= 6.0.0), dotnet-hostfxr-6.0 (>= 6.0.1), dotnet-hostfxr-6.0 (>= 6.0.10), dotnet-hostfxr-6.0 (>= 6.0.11), dotnet-hostfxr-6.0 (>= 6.0.12), dotnet-hostfxr-6.0 (>= 6.0.13), dotnet-hostfxr-6.0 (>= 6.0.14), dotnet-hostfxr-6.0 (>= 6.0.15), dotnet-hostfxr-6.0 (>= 6.0.16), dotnet-hostfxr-6.0 (>= 6.0.18), dotnet-hostfxr-6.0 (>= 6.0.19), dotnet-hostfxr-6.0 (>= 6.0.2), dotnet-hostfxr-6.0 (>= 6.0.20), dotnet-hostfxr-6.0 (>= 6.0.21), dotnet-hostfxr-6.0 (>= 6.0.23), dotnet-hostfxr-6.0 (>= 6.0.24), dotnet-hostfxr-6.0 (>= 6.0.25), dotnet-hostfxr-6.0 (>= 6.0.26), dotnet-hostfxr-6.0 (>= 6.0.27), dotnet-hostfxr-6.0 (>= 6.0.28), dotnet-hostfxr-6.0 (>= 6.0.29), dotnet-hostfxr-6.0 (>= 6.0.3), dotnet-hostfxr-6.0 (>= 6.0.30), dotnet-hostfxr-6.0 (>= 6.0.31), dotnet-hostfxr-6.0 (>= 6.0.32), dotnet-hostfxr-6.0 (>= 6.0.33), dotnet-hostfxr-6.0 (>= 6.0.35), dotnet-hostfxr-6.0 (>= 6.0.36), dotnet-hostfxr-6.0 (>= 6.0.4), dotnet-hostfxr-6.0 (>= 6.0.5), dotnet-hostfxr-6.0 (>= 6.0.6), dotnet-hostfxr-6.0 (>= 6.0.7), dotnet-hostfxr-6.0 (>= 6.0.8), dotnet-hostfxr-6.0 (>= 6.0.9), dotnet-runtime-deps-6.0 (>= 6.0.0), dotnet-runtime-deps-6.0 (>= 6.0.1), dotnet-runtime-deps-6.0 (>= 6.0.10), dotnet-runtime-deps-6.0 (>= 6.0.11), dotnet-runtime-deps-6.0 (>= 6.0.12), dotnet-runtime-deps-6.0 (>= 6.0.13), dotnet-runtime-deps-6.0 (>= 6.0.14), dotnet-runtime-deps-6.0 (>= 6.0.15), dotnet-runtime-deps-6.0 (>= 6.0.16), dotnet-runtime-deps-6.0 (>= 6.0.18), dotnet-runtime-deps-6.0 (>= 6.0.19), dotnet-runtime-deps-6.0 (>= 6.0.2), dotnet-runtime-deps-6.0 (>= 6.0.20), dotnet-runtime-deps-6.0 (>= 6.0.21), dotnet-runtime-deps-6.0 (>= 6.0.23), dotnet-runtime-deps-6.0 (>= 6.0.24), dotnet-runtime-deps-6.0 (>= 6.0.25), dotnet-runtime-deps-6.0 (>= 6.0.26), dotnet-runtime-deps-6.0 (>= 6.0.27), dotnet-runtime-deps-6.0 (>= 6.0.28), dotnet-runtime-deps-6.0 (>= 6.0.29), dotnet-runtime-deps-6.0 (>= 6.0.3), dotnet-runtime-deps-6.0 (>= 6.0.30), dotnet-runtime-deps-6.0 (>= 6.0.31), dotnet-runtime-deps-6.0 (>= 6.0.32), dotnet-runtime-deps-6.0 (>= 6.0.33), dotnet-runtime-deps-6.0 (>= 6.0.35), dotnet-runtime-deps-6.0 (>= 6.0.36), dotnet-runtime-deps-6.0 (>= 6.0.4), dotnet-runtime-deps-6.0 (>= 6.0.5), dotnet-runtime-deps-6.0 (>= 6.0.6), dotnet-runtime-deps-6.0 (>= 6.0.7), dotnet-runtime-deps-6.0 (>= 6.0.8), dotnet-runtime-deps-6.0 (>= 6.0.9)

  </details>

- **dotnet-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-hostfxr-7.0 (>= 7.0.0), dotnet-hostfxr-7.0 (>= 7.0.1), dotnet-hostfxr-7.0 (>= 7.0.10), dotnet-hostfxr-7.0 (>= 7.0.11), dotnet-hostfxr-7.0 (>= 7.0.12), dotnet-hostfxr-7.0 (>= 7.0.13), dotnet-hostfxr-7.0 (>= 7.0.14), dotnet-hostfxr-7.0 (>= 7.0.15), dotnet-hostfxr-7.0 (>= 7.0.16), dotnet-hostfxr-7.0 (>= 7.0.17), dotnet-hostfxr-7.0 (>= 7.0.18), dotnet-hostfxr-7.0 (>= 7.0.19), dotnet-hostfxr-7.0 (>= 7.0.2), dotnet-hostfxr-7.0 (>= 7.0.20), dotnet-hostfxr-7.0 (>= 7.0.3), dotnet-hostfxr-7.0 (>= 7.0.4), dotnet-hostfxr-7.0 (>= 7.0.5), dotnet-hostfxr-7.0 (>= 7.0.7), dotnet-hostfxr-7.0 (>= 7.0.8), dotnet-hostfxr-7.0 (>= 7.0.9), dotnet-runtime-deps-7.0 (>= 7.0.0), dotnet-runtime-deps-7.0 (>= 7.0.1), dotnet-runtime-deps-7.0 (>= 7.0.10), dotnet-runtime-deps-7.0 (>= 7.0.11), dotnet-runtime-deps-7.0 (>= 7.0.12), dotnet-runtime-deps-7.0 (>= 7.0.13), dotnet-runtime-deps-7.0 (>= 7.0.14), dotnet-runtime-deps-7.0 (>= 7.0.15), dotnet-runtime-deps-7.0 (>= 7.0.16), dotnet-runtime-deps-7.0 (>= 7.0.17), dotnet-runtime-deps-7.0 (>= 7.0.18), dotnet-runtime-deps-7.0 (>= 7.0.19), dotnet-runtime-deps-7.0 (>= 7.0.2), dotnet-runtime-deps-7.0 (>= 7.0.20), dotnet-runtime-deps-7.0 (>= 7.0.3), dotnet-runtime-deps-7.0 (>= 7.0.4), dotnet-runtime-deps-7.0 (>= 7.0.5), dotnet-runtime-deps-7.0 (>= 7.0.7), dotnet-runtime-deps-7.0 (>= 7.0.8), dotnet-runtime-deps-7.0 (>= 7.0.9)

  </details>

- **dotnet-runtime-8.0**
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: dotnet-hostfxr-8.0 (>= 8.0.0), dotnet-hostfxr-8.0 (>= 8.0.1), dotnet-hostfxr-8.0 (>= 8.0.10), dotnet-hostfxr-8.0 (>= 8.0.11), dotnet-hostfxr-8.0 (>= 8.0.2), dotnet-hostfxr-8.0 (>= 8.0.3), dotnet-hostfxr-8.0 (>= 8.0.4), dotnet-hostfxr-8.0 (>= 8.0.5), dotnet-hostfxr-8.0 (>= 8.0.6), dotnet-hostfxr-8.0 (>= 8.0.7), dotnet-hostfxr-8.0 (>= 8.0.8), dotnet-runtime-deps-8.0 (>= 8.0.0), dotnet-runtime-deps-8.0 (>= 8.0.1), dotnet-runtime-deps-8.0 (>= 8.0.10), dotnet-runtime-deps-8.0 (>= 8.0.11), dotnet-runtime-deps-8.0 (>= 8.0.2), dotnet-runtime-deps-8.0 (>= 8.0.3), dotnet-runtime-deps-8.0 (>= 8.0.4), dotnet-runtime-deps-8.0 (>= 8.0.5), dotnet-runtime-deps-8.0 (>= 8.0.6), dotnet-runtime-deps-8.0 (>= 8.0.7), dotnet-runtime-deps-8.0 (>= 8.0.8)

  </details>

- **dotnet-runtime-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 9.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-9.0`
  - Install (apt): `sudo apt install dotnet-runtime-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-9.0 (>= 9.0.0), dotnet-runtime-deps-9.0 (>= 9.0.0)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: dotnet-runtime-deps-2.1 2.1.19
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.1`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: dotnet-runtime-deps-3.1 3.1.15
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
  - Suite: buster
  - Components: main
  - Description: dotnet-runtime-deps-5.0 5.0.10
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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

- **dotnet-runtime-deps-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: dotnet-runtime-deps-debian 9.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-9.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-2.1**
  - Latest version: 2.1.818-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.525
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1`
  - Install (apt): `sudo apt install dotnet-sdk-2.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1 (>= 2.1.12), aspnetcore-runtime-2.1 (>= 2.1.13), aspnetcore-runtime-2.1 (>= 2.1.14), aspnetcore-runtime-2.1 (>= 2.1.15), aspnetcore-runtime-2.1 (>= 2.1.16), aspnetcore-runtime-2.1 (>= 2.1.17), aspnetcore-runtime-2.1 (>= 2.1.18), aspnetcore-runtime-2.1 (>= 2.1.19), aspnetcore-runtime-2.1 (>= 2.1.20), aspnetcore-runtime-2.1 (>= 2.1.21), aspnetcore-runtime-2.1 (>= 2.1.22), aspnetcore-runtime-2.1 (>= 2.1.23), aspnetcore-runtime-2.1 (>= 2.1.24), aspnetcore-runtime-2.1 (>= 2.1.25), aspnetcore-runtime-2.1 (>= 2.1.26), aspnetcore-runtime-2.1 (>= 2.1.27), aspnetcore-runtime-2.1 (>= 2.1.28), aspnetcore-runtime-2.1 (>= 2.1.29), aspnetcore-runtime-2.1 (>= 2.1.30), dotnet-runtime-2.1 (>= 2.1.12), dotnet-runtime-2.1 (>= 2.1.13), dotnet-runtime-2.1 (>= 2.1.14), dotnet-runtime-2.1 (>= 2.1.15), dotnet-runtime-2.1 (>= 2.1.16), dotnet-runtime-2.1 (>= 2.1.17), dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.30), libc6 (>= 2.4), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-2.2**
  - Latest version: 2.2.402-1
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 3.0.103-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: aspnetcore-runtime-3.0 (>= 3.0.0), aspnetcore-runtime-3.0 (>= 3.0.1), aspnetcore-runtime-3.0 (>= 3.0.2), aspnetcore-runtime-3.0 (>= 3.0.3), aspnetcore-targeting-pack-3.0 (>= 3.0.0), aspnetcore-targeting-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.0), dotnet-apphost-pack-3.0 (>= 3.0.1), dotnet-apphost-pack-3.0 (>= 3.0.2), dotnet-apphost-pack-3.0 (>= 3.0.3), dotnet-runtime-3.0 (>= 3.0.0), dotnet-runtime-3.0 (>= 3.0.1), dotnet-runtime-3.0 (>= 3.0.2), dotnet-runtime-3.0 (>= 3.0.3), dotnet-targeting-pack-3.0 (>= 3.0.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-3.1**
  - Latest version: 3.1.426-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET Core SDK 3.1.410
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-3.1`
  - Install (apt): `sudo apt install dotnet-sdk-3.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-3.1 (>= 3.1.0), aspnetcore-runtime-3.1 (>= 3.1.1), aspnetcore-runtime-3.1 (>= 3.1.10), aspnetcore-runtime-3.1 (>= 3.1.11), aspnetcore-runtime-3.1 (>= 3.1.12), aspnetcore-runtime-3.1 (>= 3.1.13), aspnetcore-runtime-3.1 (>= 3.1.14), aspnetcore-runtime-3.1 (>= 3.1.15), aspnetcore-runtime-3.1 (>= 3.1.16), aspnetcore-runtime-3.1 (>= 3.1.17), aspnetcore-runtime-3.1 (>= 3.1.18), aspnetcore-runtime-3.1 (>= 3.1.19), aspnetcore-runtime-3.1 (>= 3.1.2), aspnetcore-runtime-3.1 (>= 3.1.20), aspnetcore-runtime-3.1 (>= 3.1.21), aspnetcore-runtime-3.1 (>= 3.1.22), aspnetcore-runtime-3.1 (>= 3.1.23), aspnetcore-runtime-3.1 (>= 3.1.24), aspnetcore-runtime-3.1 (>= 3.1.25), aspnetcore-runtime-3.1 (>= 3.1.26), aspnetcore-runtime-3.1 (>= 3.1.27), aspnetcore-runtime-3.1 (>= 3.1.28), aspnetcore-runtime-3.1 (>= 3.1.29), aspnetcore-runtime-3.1 (>= 3.1.3), aspnetcore-runtime-3.1 (>= 3.1.30), aspnetcore-runtime-3.1 (>= 3.1.31), aspnetcore-runtime-3.1 (>= 3.1.32), aspnetcore-runtime-3.1 (>= 3.1.4), aspnetcore-runtime-3.1 (>= 3.1.5), aspnetcore-runtime-3.1 (>= 3.1.6), aspnetcore-runtime-3.1 (>= 3.1.7), aspnetcore-runtime-3.1 (>= 3.1.8), aspnetcore-runtime-3.1 (>= 3.1.9), aspnetcore-targeting-pack-3.1 (>= 3.1.0), aspnetcore-targeting-pack-3.1 (>= 3.1.10), aspnetcore-targeting-pack-3.1 (>= 3.1.2), aspnetcore-targeting-pack-3.1 (>= 3.1.3), aspnetcore-targeting-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.0), dotnet-apphost-pack-3.1 (>= 3.1.1), dotnet-apphost-pack-3.1 (>= 3.1.10), dotnet-apphost-pack-3.1 (>= 3.1.11), dotnet-apphost-pack-3.1 (>= 3.1.12), dotnet-apphost-pack-3.1 (>= 3.1.13), dotnet-apphost-pack-3.1 (>= 3.1.14), dotnet-apphost-pack-3.1 (>= 3.1.15), dotnet-apphost-pack-3.1 (>= 3.1.16), dotnet-apphost-pack-3.1 (>= 3.1.17), dotnet-apphost-pack-3.1 (>= 3.1.18), dotnet-apphost-pack-3.1 (>= 3.1.19), dotnet-apphost-pack-3.1 (>= 3.1.2), dotnet-apphost-pack-3.1 (>= 3.1.20), dotnet-apphost-pack-3.1 (>= 3.1.21), dotnet-apphost-pack-3.1 (>= 3.1.22), dotnet-apphost-pack-3.1 (>= 3.1.23), dotnet-apphost-pack-3.1 (>= 3.1.24), dotnet-apphost-pack-3.1 (>= 3.1.25), dotnet-apphost-pack-3.1 (>= 3.1.26), dotnet-apphost-pack-3.1 (>= 3.1.27), dotnet-apphost-pack-3.1 (>= 3.1.28), dotnet-apphost-pack-3.1 (>= 3.1.29), dotnet-apphost-pack-3.1 (>= 3.1.3), dotnet-apphost-pack-3.1 (>= 3.1.30), dotnet-apphost-pack-3.1 (>= 3.1.31), dotnet-apphost-pack-3.1 (>= 3.1.32), dotnet-apphost-pack-3.1 (>= 3.1.4), dotnet-apphost-pack-3.1 (>= 3.1.5), dotnet-apphost-pack-3.1 (>= 3.1.6), dotnet-apphost-pack-3.1 (>= 3.1.7), dotnet-apphost-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.9), dotnet-runtime-3.1 (>= 3.1.0), dotnet-runtime-3.1 (>= 3.1.1), dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.2), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.29), dotnet-runtime-3.1 (>= 3.1.3), dotnet-runtime-3.1 (>= 3.1.30), dotnet-runtime-3.1 (>= 3.1.31), dotnet-runtime-3.1 (>= 3.1.32), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9), dotnet-targeting-pack-3.1 (>= 3.1.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-5.0**
  - Latest version: 5.0.408-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET SDK 5.0.202
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
  - Latest version: 6.0.428-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: aspnetcore-runtime-6.0 (>= 6.0.0), aspnetcore-runtime-6.0 (>= 6.0.1), aspnetcore-runtime-6.0 (>= 6.0.10), aspnetcore-runtime-6.0 (>= 6.0.11), aspnetcore-runtime-6.0 (>= 6.0.12), aspnetcore-runtime-6.0 (>= 6.0.13), aspnetcore-runtime-6.0 (>= 6.0.14), aspnetcore-runtime-6.0 (>= 6.0.15), aspnetcore-runtime-6.0 (>= 6.0.16), aspnetcore-runtime-6.0 (>= 6.0.18), aspnetcore-runtime-6.0 (>= 6.0.19), aspnetcore-runtime-6.0 (>= 6.0.2), aspnetcore-runtime-6.0 (>= 6.0.20), aspnetcore-runtime-6.0 (>= 6.0.21), aspnetcore-runtime-6.0 (>= 6.0.23), aspnetcore-runtime-6.0 (>= 6.0.24), aspnetcore-runtime-6.0 (>= 6.0.25), aspnetcore-runtime-6.0 (>= 6.0.26), aspnetcore-runtime-6.0 (>= 6.0.27), aspnetcore-runtime-6.0 (>= 6.0.28), aspnetcore-runtime-6.0 (>= 6.0.29), aspnetcore-runtime-6.0 (>= 6.0.3), aspnetcore-runtime-6.0 (>= 6.0.30), aspnetcore-runtime-6.0 (>= 6.0.31), aspnetcore-runtime-6.0 (>= 6.0.32), aspnetcore-runtime-6.0 (>= 6.0.33), aspnetcore-runtime-6.0 (>= 6.0.35), aspnetcore-runtime-6.0 (>= 6.0.36), aspnetcore-runtime-6.0 (>= 6.0.4), aspnetcore-runtime-6.0 (>= 6.0.5), aspnetcore-runtime-6.0 (>= 6.0.6), aspnetcore-runtime-6.0 (>= 6.0.7), aspnetcore-runtime-6.0 (>= 6.0.8), aspnetcore-runtime-6.0 (>= 6.0.9), aspnetcore-targeting-pack-6.0 (>= 6.0.0), aspnetcore-targeting-pack-6.0 (>= 6.0.10), aspnetcore-targeting-pack-6.0 (>= 6.0.11), aspnetcore-targeting-pack-6.0 (>= 6.0.12), aspnetcore-targeting-pack-6.0 (>= 6.0.13), aspnetcore-targeting-pack-6.0 (>= 6.0.14), aspnetcore-targeting-pack-6.0 (>= 6.0.15), aspnetcore-targeting-pack-6.0 (>= 6.0.16), aspnetcore-targeting-pack-6.0 (>= 6.0.18), aspnetcore-targeting-pack-6.0 (>= 6.0.19), aspnetcore-targeting-pack-6.0 (>= 6.0.2), aspnetcore-targeting-pack-6.0 (>= 6.0.20), aspnetcore-targeting-pack-6.0 (>= 6.0.21), aspnetcore-targeting-pack-6.0 (>= 6.0.23), aspnetcore-targeting-pack-6.0 (>= 6.0.24), aspnetcore-targeting-pack-6.0 (>= 6.0.25), aspnetcore-targeting-pack-6.0 (>= 6.0.26), aspnetcore-targeting-pack-6.0 (>= 6.0.27), aspnetcore-targeting-pack-6.0 (>= 6.0.28), aspnetcore-targeting-pack-6.0 (>= 6.0.29), aspnetcore-targeting-pack-6.0 (>= 6.0.3), aspnetcore-targeting-pack-6.0 (>= 6.0.30), aspnetcore-targeting-pack-6.0 (>= 6.0.31), aspnetcore-targeting-pack-6.0 (>= 6.0.32), aspnetcore-targeting-pack-6.0 (>= 6.0.33), aspnetcore-targeting-pack-6.0 (>= 6.0.35), aspnetcore-targeting-pack-6.0 (>= 6.0.36), aspnetcore-targeting-pack-6.0 (>= 6.0.4), aspnetcore-targeting-pack-6.0 (>= 6.0.5), aspnetcore-targeting-pack-6.0 (>= 6.0.6), aspnetcore-targeting-pack-6.0 (>= 6.0.7), aspnetcore-targeting-pack-6.0 (>= 6.0.8), aspnetcore-targeting-pack-6.0 (>= 6.0.9), dotnet-apphost-pack-6.0 (>= 6.0.0), dotnet-apphost-pack-6.0 (>= 6.0.1), dotnet-apphost-pack-6.0 (>= 6.0.10), dotnet-apphost-pack-6.0 (>= 6.0.11), dotnet-apphost-pack-6.0 (>= 6.0.12), dotnet-apphost-pack-6.0 (>= 6.0.13), dotnet-apphost-pack-6.0 (>= 6.0.14), dotnet-apphost-pack-6.0 (>= 6.0.15), dotnet-apphost-pack-6.0 (>= 6.0.16), dotnet-apphost-pack-6.0 (>= 6.0.18), dotnet-apphost-pack-6.0 (>= 6.0.19), dotnet-apphost-pack-6.0 (>= 6.0.2), dotnet-apphost-pack-6.0 (>= 6.0.20), dotnet-apphost-pack-6.0 (>= 6.0.21), dotnet-apphost-pack-6.0 (>= 6.0.23), dotnet-apphost-pack-6.0 (>= 6.0.24), dotnet-apphost-pack-6.0 (>= 6.0.25), dotnet-apphost-pack-6.0 (>= 6.0.26), dotnet-apphost-pack-6.0 (>= 6.0.27), dotnet-apphost-pack-6.0 (>= 6.0.28), dotnet-apphost-pack-6.0 (>= 6.0.29), dotnet-apphost-pack-6.0 (>= 6.0.3), dotnet-apphost-pack-6.0 (>= 6.0.30), dotnet-apphost-pack-6.0 (>= 6.0.31), dotnet-apphost-pack-6.0 (>= 6.0.32), dotnet-apphost-pack-6.0 (>= 6.0.33), dotnet-apphost-pack-6.0 (>= 6.0.35), dotnet-apphost-pack-6.0 (>= 6.0.36), dotnet-apphost-pack-6.0 (>= 6.0.4), dotnet-apphost-pack-6.0 (>= 6.0.5), dotnet-apphost-pack-6.0 (>= 6.0.6), dotnet-apphost-pack-6.0 (>= 6.0.7), dotnet-apphost-pack-6.0 (>= 6.0.8), dotnet-apphost-pack-6.0 (>= 6.0.9), dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.10), dotnet-runtime-6.0 (>= 6.0.11), dotnet-runtime-6.0 (>= 6.0.12), dotnet-runtime-6.0 (>= 6.0.13), dotnet-runtime-6.0 (>= 6.0.14), dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8), dotnet-runtime-6.0 (>= 6.0.9), dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.1), dotnet-targeting-pack-6.0 (>= 6.0.10), dotnet-targeting-pack-6.0 (>= 6.0.11), dotnet-targeting-pack-6.0 (>= 6.0.12), dotnet-targeting-pack-6.0 (>= 6.0.13), dotnet-targeting-pack-6.0 (>= 6.0.14), dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8), dotnet-targeting-pack-6.0 (>= 6.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-7.0**
  - Latest version: 7.0.410-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: aspnetcore-runtime-7.0 (>= 7.0.0), aspnetcore-runtime-7.0 (>= 7.0.1), aspnetcore-runtime-7.0 (>= 7.0.10), aspnetcore-runtime-7.0 (>= 7.0.11), aspnetcore-runtime-7.0 (>= 7.0.12), aspnetcore-runtime-7.0 (>= 7.0.13), aspnetcore-runtime-7.0 (>= 7.0.14), aspnetcore-runtime-7.0 (>= 7.0.15), aspnetcore-runtime-7.0 (>= 7.0.16), aspnetcore-runtime-7.0 (>= 7.0.17), aspnetcore-runtime-7.0 (>= 7.0.18), aspnetcore-runtime-7.0 (>= 7.0.19), aspnetcore-runtime-7.0 (>= 7.0.2), aspnetcore-runtime-7.0 (>= 7.0.20), aspnetcore-runtime-7.0 (>= 7.0.3), aspnetcore-runtime-7.0 (>= 7.0.4), aspnetcore-runtime-7.0 (>= 7.0.5), aspnetcore-runtime-7.0 (>= 7.0.7), aspnetcore-runtime-7.0 (>= 7.0.8), aspnetcore-runtime-7.0 (>= 7.0.9), aspnetcore-targeting-pack-7.0 (>= 7.0.0), aspnetcore-targeting-pack-7.0 (>= 7.0.1), aspnetcore-targeting-pack-7.0 (>= 7.0.10), aspnetcore-targeting-pack-7.0 (>= 7.0.11), aspnetcore-targeting-pack-7.0 (>= 7.0.12), aspnetcore-targeting-pack-7.0 (>= 7.0.13), aspnetcore-targeting-pack-7.0 (>= 7.0.14), aspnetcore-targeting-pack-7.0 (>= 7.0.15), aspnetcore-targeting-pack-7.0 (>= 7.0.16), aspnetcore-targeting-pack-7.0 (>= 7.0.17), aspnetcore-targeting-pack-7.0 (>= 7.0.18), aspnetcore-targeting-pack-7.0 (>= 7.0.19), aspnetcore-targeting-pack-7.0 (>= 7.0.2), aspnetcore-targeting-pack-7.0 (>= 7.0.20), aspnetcore-targeting-pack-7.0 (>= 7.0.3), aspnetcore-targeting-pack-7.0 (>= 7.0.4), aspnetcore-targeting-pack-7.0 (>= 7.0.5), aspnetcore-targeting-pack-7.0 (>= 7.0.7), aspnetcore-targeting-pack-7.0 (>= 7.0.8), aspnetcore-targeting-pack-7.0 (>= 7.0.9), dotnet-apphost-pack-7.0 (>= 7.0.0), dotnet-apphost-pack-7.0 (>= 7.0.1), dotnet-apphost-pack-7.0 (>= 7.0.10), dotnet-apphost-pack-7.0 (>= 7.0.11), dotnet-apphost-pack-7.0 (>= 7.0.12), dotnet-apphost-pack-7.0 (>= 7.0.13), dotnet-apphost-pack-7.0 (>= 7.0.14), dotnet-apphost-pack-7.0 (>= 7.0.15), dotnet-apphost-pack-7.0 (>= 7.0.16), dotnet-apphost-pack-7.0 (>= 7.0.17), dotnet-apphost-pack-7.0 (>= 7.0.18), dotnet-apphost-pack-7.0 (>= 7.0.19), dotnet-apphost-pack-7.0 (>= 7.0.2), dotnet-apphost-pack-7.0 (>= 7.0.20), dotnet-apphost-pack-7.0 (>= 7.0.3), dotnet-apphost-pack-7.0 (>= 7.0.4), dotnet-apphost-pack-7.0 (>= 7.0.5), dotnet-apphost-pack-7.0 (>= 7.0.7), dotnet-apphost-pack-7.0 (>= 7.0.8), dotnet-apphost-pack-7.0 (>= 7.0.9), dotnet-runtime-7.0 (>= 7.0.0), dotnet-runtime-7.0 (>= 7.0.1), dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.2), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.3), dotnet-runtime-7.0 (>= 7.0.4), dotnet-runtime-7.0 (>= 7.0.5), dotnet-runtime-7.0 (>= 7.0.7), dotnet-runtime-7.0 (>= 7.0.8), dotnet-runtime-7.0 (>= 7.0.9), dotnet-targeting-pack-7.0 (>= 7.0.0), dotnet-targeting-pack-7.0 (>= 7.0.1), dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.2), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.3), dotnet-targeting-pack-7.0 (>= 7.0.4), dotnet-targeting-pack-7.0 (>= 7.0.5), dotnet-targeting-pack-7.0 (>= 7.0.7), dotnet-targeting-pack-7.0 (>= 7.0.8), dotnet-targeting-pack-7.0 (>= 7.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-8.0**
  - Latest version: 8.0.404-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: aspnetcore-runtime-8.0 (>= 8.0.0), aspnetcore-runtime-8.0 (>= 8.0.1), aspnetcore-runtime-8.0 (>= 8.0.10), aspnetcore-runtime-8.0 (>= 8.0.11), aspnetcore-runtime-8.0 (>= 8.0.2), aspnetcore-runtime-8.0 (>= 8.0.3), aspnetcore-runtime-8.0 (>= 8.0.4), aspnetcore-runtime-8.0 (>= 8.0.5), aspnetcore-runtime-8.0 (>= 8.0.6), aspnetcore-runtime-8.0 (>= 8.0.7), aspnetcore-runtime-8.0 (>= 8.0.8), aspnetcore-targeting-pack-8.0 (>= 8.0.0), aspnetcore-targeting-pack-8.0 (>= 8.0.1), aspnetcore-targeting-pack-8.0 (>= 8.0.10), aspnetcore-targeting-pack-8.0 (>= 8.0.11), aspnetcore-targeting-pack-8.0 (>= 8.0.2), aspnetcore-targeting-pack-8.0 (>= 8.0.3), aspnetcore-targeting-pack-8.0 (>= 8.0.4), aspnetcore-targeting-pack-8.0 (>= 8.0.5), aspnetcore-targeting-pack-8.0 (>= 8.0.6), aspnetcore-targeting-pack-8.0 (>= 8.0.7), aspnetcore-targeting-pack-8.0 (>= 8.0.8), dotnet-apphost-pack-8.0 (>= 8.0.0), dotnet-apphost-pack-8.0 (>= 8.0.1), dotnet-apphost-pack-8.0 (>= 8.0.10), dotnet-apphost-pack-8.0 (>= 8.0.11), dotnet-apphost-pack-8.0 (>= 8.0.2), dotnet-apphost-pack-8.0 (>= 8.0.3), dotnet-apphost-pack-8.0 (>= 8.0.4), dotnet-apphost-pack-8.0 (>= 8.0.5), dotnet-apphost-pack-8.0 (>= 8.0.6), dotnet-apphost-pack-8.0 (>= 8.0.7), dotnet-apphost-pack-8.0 (>= 8.0.8), dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.11), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8), dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.11), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-9.0**
  - Latest version: 9.0.101-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft .NET SDK 9.0.100
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-9.0`
  - Install (apt): `sudo apt install dotnet-sdk-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-9.0 (>= 9.0.0), aspnetcore-targeting-pack-9.0 (>= 9.0.0), dotnet-apphost-pack-9.0 (>= 9.0.0), dotnet-runtime-9.0 (>= 9.0.0), dotnet-targeting-pack-9.0 (>= 9.0.0), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 8.0.11-1
  - Architectures: amd64
  - Suite: buster
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

- **dotnet-targeting-pack-9.0**
  - Latest version: 9.0.0-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 9.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-targeting-pack-9.0`
  - Install (apt): `sudo apt install dotnet-targeting-pack-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-H"></a>H

- **hibernation-setup-tool**
  - Latest version: 1.0-9
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure Hibernation Agent
  - Homepage: https://github.com/microsoft/hibernation-setup-tool/
  - Install: `sudo apt-get install hibernation-setup-tool`
  - Install (apt): `sudo apt install hibernation-setup-tool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Leandro Pereira <leandro.pereira@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.15)
  - suggests: btrfs-progs, e2fsprogs, grub2, systemd, udev, xfsprogs

  </details>


### <a id="packages-L"></a>L

- **libdeliveryoptimization**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: The DO SDK is a Microsoft project for enabling IPC through native C++ code with the Delivery Optimization Agent for Linux
  - Homepage: https://github.com/microsoft/do-client
  - Install: `sudo apt-get install libdeliveryoptimization`
  - Install (apt): `sudo apt install libdeliveryoptimization`
  <details>
  <summary>More metadata</summary>

  - Maintainer: docloss@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: deliveryoptimization-agent, libboost-filesystem1.67.0, libboost-system1.67.0, libc6 (>= 2.14), libc6 (>= 2.9), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **libdeliveryoptimization-dev**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: The DO SDK is a Microsoft project for enabling IPC through native C++ code with the Delivery Optimization Agent for Linux
  - Homepage: https://github.com/microsoft/do-client
  - Install: `sudo apt-get install libdeliveryoptimization-dev`
  - Install (apt): `sudo apt install libdeliveryoptimization-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: docloss@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libdeliveryoptimization

  </details>

- **libmsquic**
  - Latest version: 2.4.8
  - Architectures: amd64
  - Suite: buster
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
  - depends: libnuma1, libssl1.1
  - conflicts: libmsquic-debug
  - provides: libmsquic, libmsquic.so

  </details>

- **libodbc1**
  - Latest version: 2.3.11-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 0.19.3-debian10u1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6 (>= 2.3.2)
  - recommends: moby-cli
  - conflicts: docker-buildx-plugin, docker-ce, docker-ee
  - replaces: docker-buildx-plugin

  </details>

- **moby-cli**
  - Latest version: 20.10.25+azure-debian10u2
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6 (>= 2.3.2)
  - recommends: ca-certificates, git, moby-buildx, moby-engine, pigz, xz-utils
  - suggests: moby-engine
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-compose**
  - Latest version: 2.32.4-debian10u1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: A Docker CLI plugin which allows you to run Docker Compose applications from the Docker CLI.
  - Homepage: https://github.com/docker/compose-cli
  - Install: `sudo apt-get install moby-compose`
  - Install (apt): `sudo apt install moby-compose`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.3.2), moby-cli
  - conflicts: docker-ce, docker-ce-cli, docker-ee, docker-ee-cli

  </details>

- **moby-containerd**
  - Latest version: 1.7.25-debian10u1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Industry-standard container runtime
  - Homepage: https://github.com/containerd/containerd
  - Install: `sudo apt-get install moby-containerd`
  - Install (apt): `sudo apt install moby-containerd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.3.2), libseccomp2 (>= 2.3.0), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.0~rc10~), moby-runc (>= 1.0.2)
  - recommends: ca-certificates, moby-runc (>= 1.0.0~rc10)
  - conflicts: containerd, containerd.io, moby-engine (<= 3.0.10), moby-engine (<= 3.0.12)
  - replaces: containerd, containerd.io
  - provides: containerd, containerd.io

  </details>

- **moby-containerd-shim-systemd**
  - Latest version: 0.1.0~beta.1+azure-debian10u1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: A containerd shim runtime that uses systemd to monitor runc containers
  - Homepage: https://github.com/cpuguy83/containerd-shim-systemd-v1
  - Install: `sudo apt-get install moby-containerd-shim-systemd`
  - Install (apt): `sudo apt install moby-containerd-shim-systemd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14), moby-containerd (>= 1.6), systemd (>= 239)
  - recommends: moby-runc

  </details>

- **moby-engine**
  - Latest version: 20.10.25+azure-debian10u2
  - Architectures: amd64
  - Suite: buster
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
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.3.2), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.1.0), moby-containerd (>= 1.2), moby-containerd (>= 1.3.9), moby-containerd (>= 1.4.3), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.0~rc93), moby-runc (>= 1.0.2)
  - recommends: apparmor, ca-certificates, iptables, kmod, moby-cli, pigz, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, git
  - conflicts: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package, moby-containerd, moby-runc
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-runc**
  - Latest version: 1.1.15-debian10u1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: CLI tool for spawning and running containers according to the OCI specification
  - Homepage: https://github.com/opencontainers/runc
  - Install: `sudo apt-get install moby-runc`
  - Install (apt): `sudo apt install moby-runc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.14), libseccomp2 (>= 2.3.0)
  - suggests: moby-containerd
  - conflicts: moby-engine (<= 3.0.10), runc
  - replaces: runc
  - provides: runc

  </details>

- **moby-tini**
  - Latest version: 0.19.0-debian10u1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: tiny but valid init for containers
  - Homepage: https://github.com/krallin/tini
  - Install: `sudo apt-get install moby-tini`
  - Install (apt): `sudo apt install moby-tini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional

  </details>

- **msodbcsql17**
  - Latest version: 17.10.6.1-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), odbcinst, openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql18**
  - Latest version: 18.4.1.1-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql18`
  - Install (apt): `sudo apt install msodbcsql18`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), odbcinst, openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msopenjdk-11**
  - Latest version: 11.0.24-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Microsoft Build of OpenJDK 11
  - Homepage: https://www.microsoft.com
  - Install: `sudo apt-get install msopenjdk-11`
  - Install (apt): `sudo apt install msopenjdk-11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, fonts-dejavu, java-common, libasound2, libc6, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6, zlib1g
  - recommends: fonts-dejavu, fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-16**
  - Latest version: 16.0.2+7-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
  - Components: main
  - Description: Microsoft Build of OpenJDK 17
  - Homepage: https://www.microsoft.com
  - Install: `sudo apt-get install msopenjdk-17`
  - Install (apt): `sudo apt install msopenjdk-17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, fonts-dejavu, java-common, libasound2, libc6, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6, zlib1g
  - recommends: fonts-dejavu, fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java17-runtime, java17-runtime-headless, java17-sdk, java17-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-21**
  - Latest version: 21.0.4-1
  - Architectures: amd64
  - Suite: buster
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

- **mssql-tools**
  - Latest version: 17.10.1.1-1
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19-18+deb8u7), libkrb5-3, libstdc++6 (>= 4.9), msodbcsql17 (>= 17.3.0.0), openssl

  </details>

- **mssql-tools18**
  - Latest version: 18.4.1.1-1
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
  - Latest version: 2.3.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6 (>= 2.4), odbcinst1debian2 (>= 2.3.11-1), odbcinst1debian2 (>= 2.3.11), odbcinst1debian2 (>= 2.3.7)
  - conflicts: odbcinst1
  - replaces: odbcinst1, odbcinst1debian1 (<< 2.3.11), odbcinst1debian1 (<< 2.3.7), unixodbc (<< 2.3.11), unixodbc (<< 2.3.7)

  </details>

- **odbcinst1debian2**
  - Latest version: 2.3.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2), odbcinst (>= 2.3.11-1), odbcinst (>= 2.3.11), odbcinst (>= 2.3.7)
  - preDepends: multiarch-support
  - conflicts: odbcinst1, odbcinst1debian1
  - breaks: libiodbc2, libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.3.11), unixodbc (<< 2.3.7)

  </details>

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: buster
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

- **osconfig**
  - Latest version: 1.0.5.2024032701
  - Architectures: amd64
  - Suite: buster
  - Components: main
  - Description: Azure OSConfig
  - Homepage: https://github.com/Azure/azure-osconfig/
  - Install: `sudo apt-get install osconfig`
  - Install (apt): `sudo apt install osconfig`
  <details>
  <summary>More metadata</summary>

  - Maintainer: osconfigsupport@microsoft.com
  - Section: devel
  - Priority: optional
  - suggests: aziot-identity-service (>= 1.2.0)

  </details>


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-debian10.1
  - Architectures: all
  - Suite: buster
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

- **powershell**
  - Latest version: 7.5.4-1.deb
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu63, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.1, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-lts**
  - Latest version: 7.4.13-1.deb
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu63, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.1, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 7.6.0-preview.5-1.deb
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu57, libicu63, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu76|libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.2, libssl1.1, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **procdump**
  - Latest version: 1.4.1-14851
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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

- **sqlcmd**
  - Latest version: 1.5.0-1~buster
  - Architectures: all
  - Suite: buster
  - Components: main
  - Description: SQLCMD TOOLS CLI
  - Homepage: https://github.com/microsoft/go-sqlcmd
  - Install: `sudo apt-get install sqlcmd`
  - Install (apt): `sudo apt install sqlcmd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: sqlcmd tools team <dpgswdist@microsoft.com>
  - Section: sql
  - Priority: extra

  </details>

- **sysinternalsebpf**
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 1.1.0
  - Architectures: amd64
  - Suite: buster
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
  - Latest version: 2.3.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libc6 (>= 2.14), libodbc1 (>= 2.3.11-1), libodbc1 (>= 2.3.11), libodbc1 (>= 2.3.7), odbcinst1debian2 (>= 2.3.11-1), odbcinst1debian2 (>= 2.3.11), odbcinst1debian2 (>= 2.3.7)
  - conflicts: unixodbc-bin (<< 2.3.11), unixodbc-bin (<< 2.3.7)

  </details>

- **unixodbc-dev**
  - Latest version: 2.3.11-1
  - Architectures: amd64
  - Suite: buster
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
  - depends: libltdl3-dev, odbcinst1debian2 (= 2.3.11-1), odbcinst1debian2 (= 2.3.11), odbcinst1debian2 (= 2.3.7), unixodbc (= 2.3.11-1), unixodbc (= 2.3.11), unixodbc (= 2.3.7)
  - conflicts: libiodbc2-dev, remembrance-agent (<< 2.11-4)

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 2.0.28
  - Architectures: amd64
  - Suite: buster
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
  - Suite: buster
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
