# Microsoft - ubuntu-20.04 - default (ubuntu-20.04)

## Repository
- Repository ID: `microsoft-default-ubuntu-20-04-focal-packages-microsoft-com`
- OS: `ubuntu-20.04`
- Source: `[arch=amd64,armhf,arm64] https://packages.microsoft.com/ubuntu/20.04/prod focal main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/20.04
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
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,armhf,arm64] https://packages.microsoft.com/ubuntu/20.04/prod focal main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-20-04-focal-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64,armhf,arm64] https://packages.microsoft.com/ubuntu/20.04/prod focal main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-20-04-focal-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (196)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-E">E</a> <a href="#packages-G">G</a> <a href="#packages-H">H</a> <a href="#packages-I">I</a> <a href="#packages-J">J</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a> <a href="#packages-W">W</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
  - Components: main
  - Description: Selinux configuration for aadlogin NSS and PAM extensions.
  - Install: `sudo apt-get install aadlogin-selinux`
  - Install (apt): `sudo apt install aadlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.0-1), selinux-policy-default, selinux-utils
  - conflicts: aadsshlogin-selinux

  </details>

- **aadsshlogin**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.25), libcurl4, libcurl4 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 2.0.65), libsemanage1 (>= 2.0.32), libssl1.1 (>= 1.1.0), libuuid1, libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.0-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **acms-client**
  - Latest version: 5.29
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: ACMS client for dSMS
  - Install: `sudo apt-get install acms-client`
  - Install (apt): `sudo apt install acms-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: dsmsdev
  - Priority: extra
  - depends: curl, gnupg, libacl1, libcurl4, libuuid1, libxml2

  </details>

- **adutil**
  - Latest version: 1.1.617
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: no description given
  - Homepage: http://example.com/no-uri-given
  - Install: `sudo apt-get install adutil`
  - Install (apt): `sudo apt install adutil`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <vsts@fv-az70-942>
  - Section: default
  - Priority: extra
  - depends: krb5-user, packagekit, realmd, software-properties-common

  </details>

- **apt-transport-https-sas**
  - Latest version: 0.12-2
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: SAS (Secure Access Signature) token authentication support for
  - Install: `sudo apt-get install apt-transport-https-sas`
  - Install (apt): `sudo apt install apt-transport-https-sas`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Skype Core Services Ops <se-core@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: apt-transport-https, python (<< 3.0), python (>= 2.7) | python2 | python2.7, python2.7, python2.7-minimal, python3, python3-adal

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.30), libc6 (>= 2.14)

  </details>

- **aspnetcore-runtime-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.29), dotnet-runtime-3.1 (>= 3.1.30), dotnet-runtime-3.1 (>= 3.1.31), dotnet-runtime-3.1 (>= 3.1.32), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9)

  </details>

- **aspnetcore-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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
  - depends: dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.10), dotnet-runtime-6.0 (>= 6.0.11), dotnet-runtime-6.0 (>= 6.0.12), dotnet-runtime-6.0 (>= 6.0.13), dotnet-runtime-6.0 (>= 6.0.14), dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8), dotnet-runtime-6.0 (>= 6.0.9)

  </details>

- **aspnetcore-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.11), dotnet-runtime-8.0 (>= 8.0.12), dotnet-runtime-8.0 (>= 8.0.13), dotnet-runtime-8.0 (>= 8.0.14), dotnet-runtime-8.0 (>= 8.0.15), dotnet-runtime-8.0 (>= 8.0.16), dotnet-runtime-8.0 (>= 8.0.17), dotnet-runtime-8.0 (>= 8.0.18), dotnet-runtime-8.0 (>= 8.0.19), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.20), dotnet-runtime-8.0 (>= 8.0.21), dotnet-runtime-8.0 (>= 8.0.22), dotnet-runtime-8.0 (>= 8.0.23), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8)

  </details>

- **aspnetcore-runtime-9.0**
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-runtime-9.0 (>= 9.0.0), dotnet-runtime-9.0 (>= 9.0.1), dotnet-runtime-9.0 (>= 9.0.2), dotnet-runtime-9.0 (>= 9.0.3), dotnet-runtime-9.0 (>= 9.0.4)

  </details>

- **aspnetcore-targeting-pack-3.1**
  - Latest version: 3.1.10-1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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
  - Suite: focal
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
  - depends: dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.10), dotnet-targeting-pack-6.0 (>= 6.0.11), dotnet-targeting-pack-6.0 (>= 6.0.12), dotnet-targeting-pack-6.0 (>= 6.0.13), dotnet-targeting-pack-6.0 (>= 6.0.14), dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8), dotnet-targeting-pack-6.0 (>= 6.0.9)

  </details>

- **aspnetcore-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.11), dotnet-targeting-pack-8.0 (>= 8.0.12), dotnet-targeting-pack-8.0 (>= 8.0.13), dotnet-targeting-pack-8.0 (>= 8.0.14), dotnet-targeting-pack-8.0 (>= 8.0.15), dotnet-targeting-pack-8.0 (>= 8.0.16), dotnet-targeting-pack-8.0 (>= 8.0.17), dotnet-targeting-pack-8.0 (>= 8.0.18), dotnet-targeting-pack-8.0 (>= 8.0.19), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.20), dotnet-targeting-pack-8.0 (>= 8.0.21), dotnet-targeting-pack-8.0 (>= 8.0.22), dotnet-targeting-pack-8.0 (>= 8.0.23), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8)

  </details>

- **aspnetcore-targeting-pack-9.0**
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-targeting-pack-9.0 (>= 9.0.0), dotnet-targeting-pack-9.0 (>= 9.0.1), dotnet-targeting-pack-9.0 (>= 9.0.2), dotnet-targeting-pack-9.0 (>= 9.0.3), dotnet-targeting-pack-9.0 (>= 9.0.4)

  </details>

- **az-dcap-client**
  - Latest version: 1.12.3
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Intel(R) SGX DCAP plugin for Azure Integration
  - Install: `sudo apt-get install az-dcap-client`
  - Install (apt): `sudo apt install az-dcap-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: unknown
  - Priority: optional
  - depends: libc6 (>= 2.14), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.0), libstdc++6 (>= 9)

  </details>

- **azapi2azurerm**
  - Latest version: 1.8.0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: A tool to migrate terraform resources from azapi to azurerm
  - Homepage: https://github.com/Azure/azapi2azurerm
  - Install: `sudo apt-get install azapi2azurerm`
  - Install (apt): `sudo apt install azapi2azurerm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: henglu <henglu@microsoft.com>
  - Section: default
  - Priority: extra

  </details>

- **azcmagent**
  - Latest version: 1.60.03293.809
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Suite: focal
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
  - Latest version: 20.3.14-1~focal
  - Architectures: all
  - Suite: focal
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
  - depends: libc6 (>= 2.29), libkrb5-dev, libssl1.1 (>= 1.1.0), libssl1.1 (>= 1.1.1), unixodbc

  </details>

- **aziot-edge**
  - Latest version: 1.5.16-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Azure IoT Edge Module Runtime
  - Homepage: https://github.com/azure/iotedge
  - Install: `sudo apt-get install aziot-edge`
  - Install (apt): `sudo apt install aziot-edge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: admin
  - Priority: extra
  - depends: adduser, aziot-identity-service (= 1.2.5-1), aziot-identity-service (= 1.2.6-1), aziot-identity-service (= 1.3.0-1), aziot-identity-service (= 1.4.0-1), aziot-identity-service (= 1.4.1-1), aziot-identity-service (= 1.4.2-1), aziot-identity-service (= 1.4.3-1), aziot-identity-service (= 1.4.4-1), aziot-identity-service (= 1.4.5-1), aziot-identity-service (= 1.4.6-1), aziot-identity-service (= 1.4.7-1), aziot-identity-service (= 1.4.8-1), aziot-identity-service (= 1.4.9-1), aziot-identity-service (= 1.5.0-1), aziot-identity-service (= 1.5.1-1), aziot-identity-service (= 1.5.2-1), aziot-identity-service (= 1.5.3-1), aziot-identity-service (= 1.5.4-1), aziot-identity-service (= 1.5.5-1), ca-certificates, hostname, psmisc, sed

  </details>

- **aziot-identity-service**
  - Latest version: 1.5.5-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Azure IoT Identity Service and related services
  - Homepage: https://github.com/azure/iot-identity-service
  - Install: `sudo apt-get install aziot-identity-service`
  - Install (apt): `sudo apt install aziot-identity-service`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.18), libc6 (>= 2.29), libgcc-s1 (>= 3.3), libgcc-s1 (>= 4.2), libssl1.1 (>= 1.1.0g), libtss2-esys0 (>= 2.3.1), psmisc
  - conflicts: iotedge, libiothsm-std

  </details>

- **aznfs**
  - Latest version: 3.0.11
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Mount helper program for correctly handling endpoint IP address changes for Azure Blob NFS mounts and providing a secure communication channel for Azure File NFS mounts
  - Homepage: https://github.com/Azure/AZNFS-mount/blob/main/README.md
  - Install: `sudo apt-get install aznfs`
  - Install (apt): `sudo apt install aznfs`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Storage XNFS Team <aznfs@microsoft.com>
  - Priority: required
  - depends: bash, bind9-host, conntrack, iproute2, iptables, libasan6, net-tools, netcat, nfs-common, procps, stunnel4, sysvinit-utils, util-linux, whiptail

  </details>

- **aztfexport**
  - Latest version: 0.18.0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: A tool to bring existing Azure resources under Terraform's management
  - Homepage: https://github.com/Azure/aztfexport
  - Install: `sudo apt-get install aztfexport`
  - Install (apt): `sudo apt install aztfexport`
  <details>
  <summary>More metadata</summary>

  - Maintainer: magodo <wztdyl@sina.com>
  - Section: default
  - Priority: optional

  </details>

- **aztfy**
  - Latest version: 0.10.0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: A tool to bring existing Azure resources under Terraform's management
  - Homepage: https://github.com/Azure/aztfy
  - Install: `sudo apt-get install aztfy`
  - Install (apt): `sudo apt install aztfy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: magodo <wztdyl@sina.com>
  - Section: default
  - Priority: extra

  </details>

- **azure-acr-credential-provider**
  - Latest version: 1.34.3-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: The acr credential provider is responsible for providing ACR credentials for kubelet
  - Homepage: https://github.com/kubernetes-sigs/cloud-provider-azure
  - Install: `sudo apt-get install azure-acr-credential-provider`
  - Install (apt): `sudo apt install azure-acr-credential-provider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1

  </details>

- **azure-ai-vision-dev-common**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: focal
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

- **azure-ai-vision-dev-core**
  - Latest version: 0.10.0~beta.1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azure AI Vision Image Analysis Developer Package
  - Install: `sudo apt-get install azure-ai-vision-dev-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-dev-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-dev-common (= 0.11.1~beta.1), azure-ai-vision-dev-common (= 0.13.0~beta.1), azure-ai-vision-dev-common (= 0.15.1~beta.1), azure-ai-vision-dev-core, azure-ai-vision-dev-core (= 0.10.0~beta.1), azure-ai-vision-dev-core (= 0.9.0~beta.1), azure-ai-vision-runtime-image-analysis, azure-ai-vision-runtime-image-analysis (= 0.10.0~beta.1), azure-ai-vision-runtime-image-analysis (= 0.11.1~beta.1), azure-ai-vision-runtime-image-analysis (= 0.13.0~beta.1), azure-ai-vision-runtime-image-analysis (= 0.15.1~beta.1), azure-ai-vision-runtime-image-analysis (= 0.9.0~beta.1)

  </details>

- **azure-ai-vision-runtime-common**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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

- **azure-ai-vision-runtime-core**
  - Latest version: 0.10.0~beta.1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 0.10.0~beta.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azure AI Vision Core Media Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-core-media`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-core-media`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-core, azure-ai-vision-runtime-core (= 0.10.0~beta.1), azure-ai-vision-runtime-core (= 0.9.0~beta.1)

  </details>

- **azure-ai-vision-runtime-image-analysis**
  - Latest version: 0.15.1~beta.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azure AI Vision Image Analysis Runtime Package
  - Install: `sudo apt-get install azure-ai-vision-runtime-image-analysis`
  - Install (apt): `sudo apt install azure-ai-vision-runtime-image-analysis`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vision-sdk@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-ai-vision-runtime-common (= 0.11.1~beta.1), azure-ai-vision-runtime-common (= 0.13.0~beta.1), azure-ai-vision-runtime-common (= 0.15.1~beta.1), azure-ai-vision-runtime-common-media (= 0.11.1~beta.1), azure-ai-vision-runtime-common-media (= 0.13.0~beta.1), azure-ai-vision-runtime-core, azure-ai-vision-runtime-core (= 0.10.0~beta.1), azure-ai-vision-runtime-core (= 0.9.0~beta.1), azure-ai-vision-runtime-core-media, azure-ai-vision-runtime-core-media (= 0.10.0~beta.1), azure-ai-vision-runtime-core-media (= 0.9.0~beta.1)

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **azure-functions-core-tools-2**
  - Latest version: 2.7.3188-1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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
  - conflicts: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools, azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **azure-proxy-agent**
  - Latest version: 1.0.27
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azure Guest Proxy Agent
  - Homepage: https://github.com/Azure/GuestProxyAgent
  - Install: `sudo apt-get install azure-proxy-agent`
  - Install (apt): `sudo apt install azure-proxy-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: AzureRT ProxyAgent V Team <ARTProxyAgentVTeam@microsoft.com>
  - Priority: optional
  - suggests: btrfs-progs, e2fsprogs, grub2, systemd, udev, xfsprogs

  </details>

- **azureauth**
  - Latest version: 0.8.6-1
  - Architectures: amd64, arm64
  - Suite: focal
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


### <a id="packages-B"></a>B

- **blobfuse**
  - Latest version: 1.4.5
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: blobfuse 1.4.1 - FUSE adapter for Azure Blob Storage
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
  - Suite: focal
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
  - depends: fuse, fuse3

  </details>

- **blobfuse2-preview**
  - Latest version: 2.6.0~preview.2
  - Architectures: amd64
  - Suite: focal
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
  - depends: fuse3

  </details>


### <a id="packages-C"></a>C

- **codespaces**
  - Latest version: 1.0.2804
  - Architectures: amd64
  - Suite: focal
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

- **containernetworking-plugins**
  - Latest version: 1.9.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: reference cni plugins (not azure but used by kubenet and containerd)
  - Homepage: https://github.com/containernetworking/plugins
  - Install: `sudo apt-get install containernetworking-plugins`
  - Install (apt): `sudo apt install containernetworking-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1
  - replaces: cni-plugins (<< 1.6.2), cni-plugins (<< 1.7.1), cni-plugins (<< 1.8.0), cni-plugins (<< 1.9.0)
  - provides: cni-plugins (= 1.6.2), cni-plugins (= 1.7.1), cni-plugins (= 1.8.0), cni-plugins (= 1.9.0)

  </details>


### <a id="packages-D"></a>D

- **defender-iot-micro-agent**
  - Latest version: 4.6.2
  - Architectures: amd64, arm64, armhf
  - Suite: focal
  - Components: main
  - Description: Microsoft Defender for IoT Micro Agent
  - Install: `sudo apt-get install defender-iot-micro-agent`
  - Install (apt): `sudo apt install defender-iot-micro-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Priority: optional
  - depends: curl, dmidecode, libpcap0.8, libssl1.1, libuv1, sudo, uuid-runtime
  - recommends: dmidecode, dmidecode (>= 3.3)
  - conflicts: defender-iot-micro-agent-edge

  </details>

- **defender-iot-micro-agent-edge**
  - Latest version: 4.6.2
  - Architectures: amd64, arm64, armhf
  - Suite: focal
  - Components: main
  - Description: Microsoft Defender for IoT Micro Agent
  - Install: `sudo apt-get install defender-iot-micro-agent-edge`
  - Install (apt): `sudo apt install defender-iot-micro-agent-edge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Priority: optional
  - depends: aziot-edge, curl, dmidecode, libpcap0.8, libssl1.1, libuv1, sudo, uuid-runtime
  - recommends: dmidecode, dmidecode (>= 3.3)
  - conflicts: defender-iot-micro-agent

  </details>

- **defender-iot-premium**
  - Latest version: 0.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft Defender Premium
  - Install: `sudo apt-get install defender-iot-premium`
  - Install (apt): `sudo apt install defender-iot-premium`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Priority: optional
  - depends: defender-iot-micro-agent-edge, sim-agent-edge
  - conflicts: defender-iot-micro-agent

  </details>

- **deliveryoptimization-agent**
  - Latest version: 1.1.0
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: libboost-filesystem1.71.0, libc6 (>= 2.25), libcurl4 (>= 7.16.2), libgcc-s1 (>= 3.0), libproxy1v5 (>= 0.4.14), libstdc++6 (>= 9)

  </details>

- **deliveryoptimization-plugin-apt**
  - Latest version: 0.5.1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libdeliveryoptimization, libgcc-s1 (>= 3.0), libssl1.1 (>= 1.1.0), libstdc++6 (>= 9), libuuid1 (>= 2.16)

  </details>

- **deviceupdate-agent**
  - Latest version: 1.2.0
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: curl, deliveryoptimization-agent, deliveryoptimization-agent (>= 1.0.0), libc6 (>= 2.29), libcurl4 (>= 7.18.2), libcurl4 (>= 7.63.0), libcurl4-openssl-dev, libdeliveryoptimization, libdeliveryoptimization (>= 1.0.0), libgcc-s1 (>= 3.0), libgcc-s1 (>= 4.2), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libstdc++6 (>= 9), libxml2 (>= 2.7.4)
  - suggests: deliveryoptimization-plugin-apt

  </details>

- **dotnet-apphost-pack-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Host 3.1.29
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
  - Suite: focal
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Host 6.0.10
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
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Host 7.0.10
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Host 8.0.0
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
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft .NET Core Host - 3.1.29
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
  - Suite: focal
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
  - depends: dotnet-host (>= 2.1.18), dotnet-host (>= 2.1.19), dotnet-host (>= 2.1.20), dotnet-host (>= 2.1.21), dotnet-host (>= 2.1.22), dotnet-host (>= 2.1.23), dotnet-host (>= 2.1.24), dotnet-host (>= 2.1.25), dotnet-host (>= 2.1.26), dotnet-host (>= 2.1.27), dotnet-host (>= 2.1.28), dotnet-host (>= 2.1.29), dotnet-host (>= 2.1.30), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-host (>= 3.1.10), dotnet-host (>= 3.1.11), dotnet-host (>= 3.1.12), dotnet-host (>= 3.1.13), dotnet-host (>= 3.1.14), dotnet-host (>= 3.1.15), dotnet-host (>= 3.1.16), dotnet-host (>= 3.1.17), dotnet-host (>= 3.1.18), dotnet-host (>= 3.1.19), dotnet-host (>= 3.1.20), dotnet-host (>= 3.1.21), dotnet-host (>= 3.1.22), dotnet-host (>= 3.1.23), dotnet-host (>= 3.1.24), dotnet-host (>= 3.1.25), dotnet-host (>= 3.1.26), dotnet-host (>= 3.1.27), dotnet-host (>= 3.1.28), dotnet-host (>= 3.1.29), dotnet-host (>= 3.1.30), dotnet-host (>= 3.1.31), dotnet-host (>= 3.1.32), dotnet-host (>= 3.1.4), dotnet-host (>= 3.1.5), dotnet-host (>= 3.1.6), dotnet-host (>= 3.1.7), dotnet-host (>= 3.1.8), dotnet-host (>= 3.1.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-host (>= 6.0.0), dotnet-host (>= 6.0.1), dotnet-host (>= 6.0.10), dotnet-host (>= 6.0.11), dotnet-host (>= 6.0.12), dotnet-host (>= 6.0.13), dotnet-host (>= 6.0.14), dotnet-host (>= 6.0.15), dotnet-host (>= 6.0.16), dotnet-host (>= 6.0.18), dotnet-host (>= 6.0.19), dotnet-host (>= 6.0.2), dotnet-host (>= 6.0.20), dotnet-host (>= 6.0.21), dotnet-host (>= 6.0.22), dotnet-host (>= 6.0.23), dotnet-host (>= 6.0.24), dotnet-host (>= 6.0.25), dotnet-host (>= 6.0.26), dotnet-host (>= 6.0.27), dotnet-host (>= 6.0.28), dotnet-host (>= 6.0.29), dotnet-host (>= 6.0.3), dotnet-host (>= 6.0.30), dotnet-host (>= 6.0.31), dotnet-host (>= 6.0.32), dotnet-host (>= 6.0.33), dotnet-host (>= 6.0.35), dotnet-host (>= 6.0.36), dotnet-host (>= 6.0.4), dotnet-host (>= 6.0.5), dotnet-host (>= 6.0.6), dotnet-host (>= 6.0.7), dotnet-host (>= 6.0.8), dotnet-host (>= 6.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 7.0.10
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 8.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-8.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 8.0.0), dotnet-host (>= 8.0.1), dotnet-host (>= 8.0.10), dotnet-host (>= 8.0.11), dotnet-host (>= 8.0.12), dotnet-host (>= 8.0.13), dotnet-host (>= 8.0.14), dotnet-host (>= 8.0.15), dotnet-host (>= 8.0.16), dotnet-host (>= 8.0.17), dotnet-host (>= 8.0.18), dotnet-host (>= 8.0.19), dotnet-host (>= 8.0.2), dotnet-host (>= 8.0.20), dotnet-host (>= 8.0.21), dotnet-host (>= 8.0.22), dotnet-host (>= 8.0.23), dotnet-host (>= 8.0.3), dotnet-host (>= 8.0.4), dotnet-host (>= 8.0.5), dotnet-host (>= 8.0.6), dotnet-host (>= 8.0.7), dotnet-host (>= 8.0.8), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-9.0**
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-host (>= 9.0.0), dotnet-host (>= 9.0.1), dotnet-host (>= 9.0.2), dotnet-host (>= 9.0.3), dotnet-host (>= 9.0.4), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-hostfxr-2.1 (>= 2.1.18), dotnet-hostfxr-2.1 (>= 2.1.19), dotnet-hostfxr-2.1 (>= 2.1.20), dotnet-hostfxr-2.1 (>= 2.1.21), dotnet-hostfxr-2.1 (>= 2.1.22), dotnet-hostfxr-2.1 (>= 2.1.23), dotnet-hostfxr-2.1 (>= 2.1.24), dotnet-hostfxr-2.1 (>= 2.1.25), dotnet-hostfxr-2.1 (>= 2.1.26), dotnet-hostfxr-2.1 (>= 2.1.27), dotnet-hostfxr-2.1 (>= 2.1.28), dotnet-hostfxr-2.1 (>= 2.1.29), dotnet-hostfxr-2.1 (>= 2.1.30), dotnet-runtime-deps-2.1 (>= 2.1.18), dotnet-runtime-deps-2.1 (>= 2.1.19), dotnet-runtime-deps-2.1 (>= 2.1.20), dotnet-runtime-deps-2.1 (>= 2.1.21), dotnet-runtime-deps-2.1 (>= 2.1.22), dotnet-runtime-deps-2.1 (>= 2.1.23), dotnet-runtime-deps-2.1 (>= 2.1.24), dotnet-runtime-deps-2.1 (>= 2.1.25), dotnet-runtime-deps-2.1 (>= 2.1.26), dotnet-runtime-deps-2.1 (>= 2.1.27), dotnet-runtime-deps-2.1 (>= 2.1.28), dotnet-runtime-deps-2.1 (>= 2.1.29), dotnet-runtime-deps-2.1 (>= 2.1.30)

  </details>

- **dotnet-runtime-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-hostfxr-3.1 (>= 3.1.10), dotnet-hostfxr-3.1 (>= 3.1.11), dotnet-hostfxr-3.1 (>= 3.1.12), dotnet-hostfxr-3.1 (>= 3.1.13), dotnet-hostfxr-3.1 (>= 3.1.14), dotnet-hostfxr-3.1 (>= 3.1.15), dotnet-hostfxr-3.1 (>= 3.1.16), dotnet-hostfxr-3.1 (>= 3.1.17), dotnet-hostfxr-3.1 (>= 3.1.18), dotnet-hostfxr-3.1 (>= 3.1.19), dotnet-hostfxr-3.1 (>= 3.1.20), dotnet-hostfxr-3.1 (>= 3.1.21), dotnet-hostfxr-3.1 (>= 3.1.22), dotnet-hostfxr-3.1 (>= 3.1.23), dotnet-hostfxr-3.1 (>= 3.1.24), dotnet-hostfxr-3.1 (>= 3.1.25), dotnet-hostfxr-3.1 (>= 3.1.26), dotnet-hostfxr-3.1 (>= 3.1.27), dotnet-hostfxr-3.1 (>= 3.1.28), dotnet-hostfxr-3.1 (>= 3.1.29), dotnet-hostfxr-3.1 (>= 3.1.30), dotnet-hostfxr-3.1 (>= 3.1.31), dotnet-hostfxr-3.1 (>= 3.1.32), dotnet-hostfxr-3.1 (>= 3.1.4), dotnet-hostfxr-3.1 (>= 3.1.5), dotnet-hostfxr-3.1 (>= 3.1.6), dotnet-hostfxr-3.1 (>= 3.1.7), dotnet-hostfxr-3.1 (>= 3.1.8), dotnet-hostfxr-3.1 (>= 3.1.9), dotnet-runtime-deps-3.1 (>= 3.1.10), dotnet-runtime-deps-3.1 (>= 3.1.11), dotnet-runtime-deps-3.1 (>= 3.1.12), dotnet-runtime-deps-3.1 (>= 3.1.13), dotnet-runtime-deps-3.1 (>= 3.1.14), dotnet-runtime-deps-3.1 (>= 3.1.15), dotnet-runtime-deps-3.1 (>= 3.1.16), dotnet-runtime-deps-3.1 (>= 3.1.17), dotnet-runtime-deps-3.1 (>= 3.1.18), dotnet-runtime-deps-3.1 (>= 3.1.19), dotnet-runtime-deps-3.1 (>= 3.1.20), dotnet-runtime-deps-3.1 (>= 3.1.21), dotnet-runtime-deps-3.1 (>= 3.1.22), dotnet-runtime-deps-3.1 (>= 3.1.23), dotnet-runtime-deps-3.1 (>= 3.1.24), dotnet-runtime-deps-3.1 (>= 3.1.25), dotnet-runtime-deps-3.1 (>= 3.1.26), dotnet-runtime-deps-3.1 (>= 3.1.27), dotnet-runtime-deps-3.1 (>= 3.1.28), dotnet-runtime-deps-3.1 (>= 3.1.29), dotnet-runtime-deps-3.1 (>= 3.1.30), dotnet-runtime-deps-3.1 (>= 3.1.31), dotnet-runtime-deps-3.1 (>= 3.1.32), dotnet-runtime-deps-3.1 (>= 3.1.4), dotnet-runtime-deps-3.1 (>= 3.1.5), dotnet-runtime-deps-3.1 (>= 3.1.6), dotnet-runtime-deps-3.1 (>= 3.1.7), dotnet-runtime-deps-3.1 (>= 3.1.8), dotnet-runtime-deps-3.1 (>= 3.1.9)

  </details>

- **dotnet-runtime-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-hostfxr-6.0 (>= 6.0.0), dotnet-hostfxr-6.0 (>= 6.0.1), dotnet-hostfxr-6.0 (>= 6.0.10), dotnet-hostfxr-6.0 (>= 6.0.11), dotnet-hostfxr-6.0 (>= 6.0.12), dotnet-hostfxr-6.0 (>= 6.0.13), dotnet-hostfxr-6.0 (>= 6.0.14), dotnet-hostfxr-6.0 (>= 6.0.15), dotnet-hostfxr-6.0 (>= 6.0.16), dotnet-hostfxr-6.0 (>= 6.0.18), dotnet-hostfxr-6.0 (>= 6.0.19), dotnet-hostfxr-6.0 (>= 6.0.2), dotnet-hostfxr-6.0 (>= 6.0.20), dotnet-hostfxr-6.0 (>= 6.0.21), dotnet-hostfxr-6.0 (>= 6.0.22), dotnet-hostfxr-6.0 (>= 6.0.23), dotnet-hostfxr-6.0 (>= 6.0.24), dotnet-hostfxr-6.0 (>= 6.0.25), dotnet-hostfxr-6.0 (>= 6.0.26), dotnet-hostfxr-6.0 (>= 6.0.27), dotnet-hostfxr-6.0 (>= 6.0.28), dotnet-hostfxr-6.0 (>= 6.0.29), dotnet-hostfxr-6.0 (>= 6.0.3), dotnet-hostfxr-6.0 (>= 6.0.30), dotnet-hostfxr-6.0 (>= 6.0.31), dotnet-hostfxr-6.0 (>= 6.0.32), dotnet-hostfxr-6.0 (>= 6.0.33), dotnet-hostfxr-6.0 (>= 6.0.35), dotnet-hostfxr-6.0 (>= 6.0.36), dotnet-hostfxr-6.0 (>= 6.0.4), dotnet-hostfxr-6.0 (>= 6.0.5), dotnet-hostfxr-6.0 (>= 6.0.6), dotnet-hostfxr-6.0 (>= 6.0.7), dotnet-hostfxr-6.0 (>= 6.0.8), dotnet-hostfxr-6.0 (>= 6.0.9), dotnet-runtime-deps-6.0 (>= 6.0.0), dotnet-runtime-deps-6.0 (>= 6.0.1), dotnet-runtime-deps-6.0 (>= 6.0.10), dotnet-runtime-deps-6.0 (>= 6.0.11), dotnet-runtime-deps-6.0 (>= 6.0.12), dotnet-runtime-deps-6.0 (>= 6.0.13), dotnet-runtime-deps-6.0 (>= 6.0.14), dotnet-runtime-deps-6.0 (>= 6.0.15), dotnet-runtime-deps-6.0 (>= 6.0.16), dotnet-runtime-deps-6.0 (>= 6.0.18), dotnet-runtime-deps-6.0 (>= 6.0.19), dotnet-runtime-deps-6.0 (>= 6.0.2), dotnet-runtime-deps-6.0 (>= 6.0.20), dotnet-runtime-deps-6.0 (>= 6.0.21), dotnet-runtime-deps-6.0 (>= 6.0.22), dotnet-runtime-deps-6.0 (>= 6.0.23), dotnet-runtime-deps-6.0 (>= 6.0.24), dotnet-runtime-deps-6.0 (>= 6.0.25), dotnet-runtime-deps-6.0 (>= 6.0.26), dotnet-runtime-deps-6.0 (>= 6.0.27), dotnet-runtime-deps-6.0 (>= 6.0.28), dotnet-runtime-deps-6.0 (>= 6.0.29), dotnet-runtime-deps-6.0 (>= 6.0.3), dotnet-runtime-deps-6.0 (>= 6.0.30), dotnet-runtime-deps-6.0 (>= 6.0.31), dotnet-runtime-deps-6.0 (>= 6.0.32), dotnet-runtime-deps-6.0 (>= 6.0.33), dotnet-runtime-deps-6.0 (>= 6.0.35), dotnet-runtime-deps-6.0 (>= 6.0.36), dotnet-runtime-deps-6.0 (>= 6.0.4), dotnet-runtime-deps-6.0 (>= 6.0.5), dotnet-runtime-deps-6.0 (>= 6.0.6), dotnet-runtime-deps-6.0 (>= 6.0.7), dotnet-runtime-deps-6.0 (>= 6.0.8), dotnet-runtime-deps-6.0 (>= 6.0.9)

  </details>

- **dotnet-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 7.0.10
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 8.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-8.0 (>= 8.0.0), dotnet-hostfxr-8.0 (>= 8.0.1), dotnet-hostfxr-8.0 (>= 8.0.10), dotnet-hostfxr-8.0 (>= 8.0.11), dotnet-hostfxr-8.0 (>= 8.0.12), dotnet-hostfxr-8.0 (>= 8.0.13), dotnet-hostfxr-8.0 (>= 8.0.14), dotnet-hostfxr-8.0 (>= 8.0.15), dotnet-hostfxr-8.0 (>= 8.0.16), dotnet-hostfxr-8.0 (>= 8.0.17), dotnet-hostfxr-8.0 (>= 8.0.18), dotnet-hostfxr-8.0 (>= 8.0.19), dotnet-hostfxr-8.0 (>= 8.0.2), dotnet-hostfxr-8.0 (>= 8.0.20), dotnet-hostfxr-8.0 (>= 8.0.21), dotnet-hostfxr-8.0 (>= 8.0.22), dotnet-hostfxr-8.0 (>= 8.0.23), dotnet-hostfxr-8.0 (>= 8.0.3), dotnet-hostfxr-8.0 (>= 8.0.4), dotnet-hostfxr-8.0 (>= 8.0.5), dotnet-hostfxr-8.0 (>= 8.0.6), dotnet-hostfxr-8.0 (>= 8.0.7), dotnet-hostfxr-8.0 (>= 8.0.8), dotnet-runtime-deps-8.0 (>= 8.0.0), dotnet-runtime-deps-8.0 (>= 8.0.1), dotnet-runtime-deps-8.0 (>= 8.0.10), dotnet-runtime-deps-8.0 (>= 8.0.11), dotnet-runtime-deps-8.0 (>= 8.0.12), dotnet-runtime-deps-8.0 (>= 8.0.13), dotnet-runtime-deps-8.0 (>= 8.0.14), dotnet-runtime-deps-8.0 (>= 8.0.15), dotnet-runtime-deps-8.0 (>= 8.0.16), dotnet-runtime-deps-8.0 (>= 8.0.17), dotnet-runtime-deps-8.0 (>= 8.0.18), dotnet-runtime-deps-8.0 (>= 8.0.19), dotnet-runtime-deps-8.0 (>= 8.0.2), dotnet-runtime-deps-8.0 (>= 8.0.20), dotnet-runtime-deps-8.0 (>= 8.0.21), dotnet-runtime-deps-8.0 (>= 8.0.22), dotnet-runtime-deps-8.0 (>= 8.0.23), dotnet-runtime-deps-8.0 (>= 8.0.3), dotnet-runtime-deps-8.0 (>= 8.0.4), dotnet-runtime-deps-8.0 (>= 8.0.5), dotnet-runtime-deps-8.0 (>= 8.0.6), dotnet-runtime-deps-8.0 (>= 8.0.7), dotnet-runtime-deps-8.0 (>= 8.0.8)

  </details>

- **dotnet-runtime-9.0**
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: dotnet-hostfxr-9.0 (>= 9.0.0), dotnet-hostfxr-9.0 (>= 9.0.1), dotnet-hostfxr-9.0 (>= 9.0.2), dotnet-hostfxr-9.0 (>= 9.0.3), dotnet-hostfxr-9.0 (>= 9.0.4), dotnet-runtime-deps-9.0 (>= 9.0.0), dotnet-runtime-deps-9.0 (>= 9.0.1), dotnet-runtime-deps-9.0 (>= 9.0.2), dotnet-runtime-deps-9.0 (>= 9.0.3), dotnet-runtime-deps-9.0 (>= 9.0.4)

  </details>

- **dotnet-runtime-deps-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, liblttng-ust0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.1**
  - Latest version: 3.1.32-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-5.0**
  - Latest version: 5.0.17-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: dotnet-runtime-deps-debian 7.0.10
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: dotnet-runtime-deps-debian 8.0.0
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-deps-8.0`
  - Install (apt): `sudo apt install dotnet-runtime-deps-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu78 | libicu77 | libicu76 | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-9.0**
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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
  - depends: aspnetcore-runtime-2.1 (>= 2.1.18), aspnetcore-runtime-2.1 (>= 2.1.19), aspnetcore-runtime-2.1 (>= 2.1.20), aspnetcore-runtime-2.1 (>= 2.1.21), aspnetcore-runtime-2.1 (>= 2.1.22), aspnetcore-runtime-2.1 (>= 2.1.23), aspnetcore-runtime-2.1 (>= 2.1.24), aspnetcore-runtime-2.1 (>= 2.1.25), aspnetcore-runtime-2.1 (>= 2.1.26), aspnetcore-runtime-2.1 (>= 2.1.27), aspnetcore-runtime-2.1 (>= 2.1.28), aspnetcore-runtime-2.1 (>= 2.1.29), aspnetcore-runtime-2.1 (>= 2.1.30), dotnet-runtime-2.1 (>= 2.1.18), dotnet-runtime-2.1 (>= 2.1.19), dotnet-runtime-2.1 (>= 2.1.20), dotnet-runtime-2.1 (>= 2.1.21), dotnet-runtime-2.1 (>= 2.1.22), dotnet-runtime-2.1 (>= 2.1.23), dotnet-runtime-2.1 (>= 2.1.24), dotnet-runtime-2.1 (>= 2.1.25), dotnet-runtime-2.1 (>= 2.1.26), dotnet-runtime-2.1 (>= 2.1.27), dotnet-runtime-2.1 (>= 2.1.28), dotnet-runtime-2.1 (>= 2.1.29), dotnet-runtime-2.1 (>= 2.1.30), libc6 (>= 2.4), libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.1.1), libstdc++6 (>= 4.8)

  </details>

- **dotnet-sdk-3.1**
  - Latest version: 3.1.426-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: aspnetcore-runtime-3.1 (>= 3.1.10), aspnetcore-runtime-3.1 (>= 3.1.11), aspnetcore-runtime-3.1 (>= 3.1.12), aspnetcore-runtime-3.1 (>= 3.1.13), aspnetcore-runtime-3.1 (>= 3.1.14), aspnetcore-runtime-3.1 (>= 3.1.15), aspnetcore-runtime-3.1 (>= 3.1.16), aspnetcore-runtime-3.1 (>= 3.1.17), aspnetcore-runtime-3.1 (>= 3.1.18), aspnetcore-runtime-3.1 (>= 3.1.19), aspnetcore-runtime-3.1 (>= 3.1.20), aspnetcore-runtime-3.1 (>= 3.1.21), aspnetcore-runtime-3.1 (>= 3.1.22), aspnetcore-runtime-3.1 (>= 3.1.23), aspnetcore-runtime-3.1 (>= 3.1.24), aspnetcore-runtime-3.1 (>= 3.1.25), aspnetcore-runtime-3.1 (>= 3.1.26), aspnetcore-runtime-3.1 (>= 3.1.27), aspnetcore-runtime-3.1 (>= 3.1.28), aspnetcore-runtime-3.1 (>= 3.1.29), aspnetcore-runtime-3.1 (>= 3.1.30), aspnetcore-runtime-3.1 (>= 3.1.31), aspnetcore-runtime-3.1 (>= 3.1.32), aspnetcore-runtime-3.1 (>= 3.1.4), aspnetcore-runtime-3.1 (>= 3.1.5), aspnetcore-runtime-3.1 (>= 3.1.6), aspnetcore-runtime-3.1 (>= 3.1.7), aspnetcore-runtime-3.1 (>= 3.1.8), aspnetcore-runtime-3.1 (>= 3.1.9), aspnetcore-targeting-pack-3.1 (>= 3.1.10), aspnetcore-targeting-pack-3.1 (>= 3.1.2), aspnetcore-targeting-pack-3.1 (>= 3.1.3), aspnetcore-targeting-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.10), dotnet-apphost-pack-3.1 (>= 3.1.11), dotnet-apphost-pack-3.1 (>= 3.1.12), dotnet-apphost-pack-3.1 (>= 3.1.13), dotnet-apphost-pack-3.1 (>= 3.1.14), dotnet-apphost-pack-3.1 (>= 3.1.15), dotnet-apphost-pack-3.1 (>= 3.1.16), dotnet-apphost-pack-3.1 (>= 3.1.17), dotnet-apphost-pack-3.1 (>= 3.1.18), dotnet-apphost-pack-3.1 (>= 3.1.19), dotnet-apphost-pack-3.1 (>= 3.1.20), dotnet-apphost-pack-3.1 (>= 3.1.21), dotnet-apphost-pack-3.1 (>= 3.1.22), dotnet-apphost-pack-3.1 (>= 3.1.23), dotnet-apphost-pack-3.1 (>= 3.1.24), dotnet-apphost-pack-3.1 (>= 3.1.25), dotnet-apphost-pack-3.1 (>= 3.1.26), dotnet-apphost-pack-3.1 (>= 3.1.27), dotnet-apphost-pack-3.1 (>= 3.1.28), dotnet-apphost-pack-3.1 (>= 3.1.29), dotnet-apphost-pack-3.1 (>= 3.1.30), dotnet-apphost-pack-3.1 (>= 3.1.31), dotnet-apphost-pack-3.1 (>= 3.1.32), dotnet-apphost-pack-3.1 (>= 3.1.4), dotnet-apphost-pack-3.1 (>= 3.1.5), dotnet-apphost-pack-3.1 (>= 3.1.6), dotnet-apphost-pack-3.1 (>= 3.1.7), dotnet-apphost-pack-3.1 (>= 3.1.8), dotnet-apphost-pack-3.1 (>= 3.1.9), dotnet-runtime-3.1 (>= 3.1.10), dotnet-runtime-3.1 (>= 3.1.11), dotnet-runtime-3.1 (>= 3.1.12), dotnet-runtime-3.1 (>= 3.1.13), dotnet-runtime-3.1 (>= 3.1.14), dotnet-runtime-3.1 (>= 3.1.15), dotnet-runtime-3.1 (>= 3.1.16), dotnet-runtime-3.1 (>= 3.1.17), dotnet-runtime-3.1 (>= 3.1.18), dotnet-runtime-3.1 (>= 3.1.19), dotnet-runtime-3.1 (>= 3.1.20), dotnet-runtime-3.1 (>= 3.1.21), dotnet-runtime-3.1 (>= 3.1.22), dotnet-runtime-3.1 (>= 3.1.23), dotnet-runtime-3.1 (>= 3.1.24), dotnet-runtime-3.1 (>= 3.1.25), dotnet-runtime-3.1 (>= 3.1.26), dotnet-runtime-3.1 (>= 3.1.27), dotnet-runtime-3.1 (>= 3.1.28), dotnet-runtime-3.1 (>= 3.1.29), dotnet-runtime-3.1 (>= 3.1.30), dotnet-runtime-3.1 (>= 3.1.31), dotnet-runtime-3.1 (>= 3.1.32), dotnet-runtime-3.1 (>= 3.1.4), dotnet-runtime-3.1 (>= 3.1.5), dotnet-runtime-3.1 (>= 3.1.6), dotnet-runtime-3.1 (>= 3.1.7), dotnet-runtime-3.1 (>= 3.1.8), dotnet-runtime-3.1 (>= 3.1.9), dotnet-targeting-pack-3.1 (>= 3.1.0), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.6), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-5.0**
  - Latest version: 5.0.408-1
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 6.0.428-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: aspnetcore-runtime-6.0 (>= 6.0.0), aspnetcore-runtime-6.0 (>= 6.0.1), aspnetcore-runtime-6.0 (>= 6.0.10), aspnetcore-runtime-6.0 (>= 6.0.11), aspnetcore-runtime-6.0 (>= 6.0.12), aspnetcore-runtime-6.0 (>= 6.0.13), aspnetcore-runtime-6.0 (>= 6.0.14), aspnetcore-runtime-6.0 (>= 6.0.15), aspnetcore-runtime-6.0 (>= 6.0.16), aspnetcore-runtime-6.0 (>= 6.0.18), aspnetcore-runtime-6.0 (>= 6.0.19), aspnetcore-runtime-6.0 (>= 6.0.2), aspnetcore-runtime-6.0 (>= 6.0.20), aspnetcore-runtime-6.0 (>= 6.0.21), aspnetcore-runtime-6.0 (>= 6.0.22), aspnetcore-runtime-6.0 (>= 6.0.23), aspnetcore-runtime-6.0 (>= 6.0.24), aspnetcore-runtime-6.0 (>= 6.0.25), aspnetcore-runtime-6.0 (>= 6.0.26), aspnetcore-runtime-6.0 (>= 6.0.27), aspnetcore-runtime-6.0 (>= 6.0.28), aspnetcore-runtime-6.0 (>= 6.0.29), aspnetcore-runtime-6.0 (>= 6.0.3), aspnetcore-runtime-6.0 (>= 6.0.30), aspnetcore-runtime-6.0 (>= 6.0.31), aspnetcore-runtime-6.0 (>= 6.0.32), aspnetcore-runtime-6.0 (>= 6.0.33), aspnetcore-runtime-6.0 (>= 6.0.35), aspnetcore-runtime-6.0 (>= 6.0.36), aspnetcore-runtime-6.0 (>= 6.0.4), aspnetcore-runtime-6.0 (>= 6.0.5), aspnetcore-runtime-6.0 (>= 6.0.6), aspnetcore-runtime-6.0 (>= 6.0.7), aspnetcore-runtime-6.0 (>= 6.0.8), aspnetcore-runtime-6.0 (>= 6.0.9), aspnetcore-targeting-pack-6.0 (>= 6.0.0), aspnetcore-targeting-pack-6.0 (>= 6.0.10), aspnetcore-targeting-pack-6.0 (>= 6.0.11), aspnetcore-targeting-pack-6.0 (>= 6.0.12), aspnetcore-targeting-pack-6.0 (>= 6.0.13), aspnetcore-targeting-pack-6.0 (>= 6.0.14), aspnetcore-targeting-pack-6.0 (>= 6.0.15), aspnetcore-targeting-pack-6.0 (>= 6.0.16), aspnetcore-targeting-pack-6.0 (>= 6.0.18), aspnetcore-targeting-pack-6.0 (>= 6.0.19), aspnetcore-targeting-pack-6.0 (>= 6.0.2), aspnetcore-targeting-pack-6.0 (>= 6.0.20), aspnetcore-targeting-pack-6.0 (>= 6.0.21), aspnetcore-targeting-pack-6.0 (>= 6.0.22), aspnetcore-targeting-pack-6.0 (>= 6.0.23), aspnetcore-targeting-pack-6.0 (>= 6.0.24), aspnetcore-targeting-pack-6.0 (>= 6.0.25), aspnetcore-targeting-pack-6.0 (>= 6.0.26), aspnetcore-targeting-pack-6.0 (>= 6.0.27), aspnetcore-targeting-pack-6.0 (>= 6.0.28), aspnetcore-targeting-pack-6.0 (>= 6.0.29), aspnetcore-targeting-pack-6.0 (>= 6.0.3), aspnetcore-targeting-pack-6.0 (>= 6.0.30), aspnetcore-targeting-pack-6.0 (>= 6.0.31), aspnetcore-targeting-pack-6.0 (>= 6.0.32), aspnetcore-targeting-pack-6.0 (>= 6.0.33), aspnetcore-targeting-pack-6.0 (>= 6.0.35), aspnetcore-targeting-pack-6.0 (>= 6.0.36), aspnetcore-targeting-pack-6.0 (>= 6.0.4), aspnetcore-targeting-pack-6.0 (>= 6.0.5), aspnetcore-targeting-pack-6.0 (>= 6.0.6), aspnetcore-targeting-pack-6.0 (>= 6.0.7), aspnetcore-targeting-pack-6.0 (>= 6.0.8), aspnetcore-targeting-pack-6.0 (>= 6.0.9), dotnet-apphost-pack-6.0 (>= 6.0.0), dotnet-apphost-pack-6.0 (>= 6.0.1), dotnet-apphost-pack-6.0 (>= 6.0.10), dotnet-apphost-pack-6.0 (>= 6.0.11), dotnet-apphost-pack-6.0 (>= 6.0.12), dotnet-apphost-pack-6.0 (>= 6.0.13), dotnet-apphost-pack-6.0 (>= 6.0.14), dotnet-apphost-pack-6.0 (>= 6.0.15), dotnet-apphost-pack-6.0 (>= 6.0.16), dotnet-apphost-pack-6.0 (>= 6.0.18), dotnet-apphost-pack-6.0 (>= 6.0.19), dotnet-apphost-pack-6.0 (>= 6.0.2), dotnet-apphost-pack-6.0 (>= 6.0.20), dotnet-apphost-pack-6.0 (>= 6.0.21), dotnet-apphost-pack-6.0 (>= 6.0.22), dotnet-apphost-pack-6.0 (>= 6.0.23), dotnet-apphost-pack-6.0 (>= 6.0.24), dotnet-apphost-pack-6.0 (>= 6.0.25), dotnet-apphost-pack-6.0 (>= 6.0.26), dotnet-apphost-pack-6.0 (>= 6.0.27), dotnet-apphost-pack-6.0 (>= 6.0.28), dotnet-apphost-pack-6.0 (>= 6.0.29), dotnet-apphost-pack-6.0 (>= 6.0.3), dotnet-apphost-pack-6.0 (>= 6.0.30), dotnet-apphost-pack-6.0 (>= 6.0.31), dotnet-apphost-pack-6.0 (>= 6.0.32), dotnet-apphost-pack-6.0 (>= 6.0.33), dotnet-apphost-pack-6.0 (>= 6.0.35), dotnet-apphost-pack-6.0 (>= 6.0.36), dotnet-apphost-pack-6.0 (>= 6.0.4), dotnet-apphost-pack-6.0 (>= 6.0.5), dotnet-apphost-pack-6.0 (>= 6.0.6), dotnet-apphost-pack-6.0 (>= 6.0.7), dotnet-apphost-pack-6.0 (>= 6.0.8), dotnet-apphost-pack-6.0 (>= 6.0.9), dotnet-runtime-6.0 (>= 6.0.0), dotnet-runtime-6.0 (>= 6.0.1), dotnet-runtime-6.0 (>= 6.0.10), dotnet-runtime-6.0 (>= 6.0.11), dotnet-runtime-6.0 (>= 6.0.12), dotnet-runtime-6.0 (>= 6.0.13), dotnet-runtime-6.0 (>= 6.0.14), dotnet-runtime-6.0 (>= 6.0.15), dotnet-runtime-6.0 (>= 6.0.16), dotnet-runtime-6.0 (>= 6.0.18), dotnet-runtime-6.0 (>= 6.0.19), dotnet-runtime-6.0 (>= 6.0.2), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.3), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36), dotnet-runtime-6.0 (>= 6.0.4), dotnet-runtime-6.0 (>= 6.0.5), dotnet-runtime-6.0 (>= 6.0.6), dotnet-runtime-6.0 (>= 6.0.7), dotnet-runtime-6.0 (>= 6.0.8), dotnet-runtime-6.0 (>= 6.0.9), dotnet-targeting-pack-6.0 (>= 6.0.0), dotnet-targeting-pack-6.0 (>= 6.0.1), dotnet-targeting-pack-6.0 (>= 6.0.10), dotnet-targeting-pack-6.0 (>= 6.0.11), dotnet-targeting-pack-6.0 (>= 6.0.12), dotnet-targeting-pack-6.0 (>= 6.0.13), dotnet-targeting-pack-6.0 (>= 6.0.14), dotnet-targeting-pack-6.0 (>= 6.0.15), dotnet-targeting-pack-6.0 (>= 6.0.16), dotnet-targeting-pack-6.0 (>= 6.0.18), dotnet-targeting-pack-6.0 (>= 6.0.19), dotnet-targeting-pack-6.0 (>= 6.0.2), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.3), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36), dotnet-targeting-pack-6.0 (>= 6.0.4), dotnet-targeting-pack-6.0 (>= 6.0.5), dotnet-targeting-pack-6.0 (>= 6.0.6), dotnet-targeting-pack-6.0 (>= 6.0.7), dotnet-targeting-pack-6.0 (>= 6.0.8), dotnet-targeting-pack-6.0 (>= 6.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-7.0**
  - Latest version: 7.0.410-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft .NET SDK 7.0.110
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
  - Latest version: 8.0.417-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft .NET SDK 8.0.100
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-8.0`
  - Install (apt): `sudo apt install dotnet-sdk-8.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-8.0 (>= 8.0.0), aspnetcore-runtime-8.0 (>= 8.0.1), aspnetcore-runtime-8.0 (>= 8.0.10), aspnetcore-runtime-8.0 (>= 8.0.11), aspnetcore-runtime-8.0 (>= 8.0.12), aspnetcore-runtime-8.0 (>= 8.0.13), aspnetcore-runtime-8.0 (>= 8.0.14), aspnetcore-runtime-8.0 (>= 8.0.15), aspnetcore-runtime-8.0 (>= 8.0.16), aspnetcore-runtime-8.0 (>= 8.0.17), aspnetcore-runtime-8.0 (>= 8.0.18), aspnetcore-runtime-8.0 (>= 8.0.19), aspnetcore-runtime-8.0 (>= 8.0.2), aspnetcore-runtime-8.0 (>= 8.0.20), aspnetcore-runtime-8.0 (>= 8.0.21), aspnetcore-runtime-8.0 (>= 8.0.22), aspnetcore-runtime-8.0 (>= 8.0.23), aspnetcore-runtime-8.0 (>= 8.0.3), aspnetcore-runtime-8.0 (>= 8.0.4), aspnetcore-runtime-8.0 (>= 8.0.5), aspnetcore-runtime-8.0 (>= 8.0.6), aspnetcore-runtime-8.0 (>= 8.0.7), aspnetcore-runtime-8.0 (>= 8.0.8), aspnetcore-targeting-pack-8.0 (>= 8.0.0), aspnetcore-targeting-pack-8.0 (>= 8.0.1), aspnetcore-targeting-pack-8.0 (>= 8.0.10), aspnetcore-targeting-pack-8.0 (>= 8.0.11), aspnetcore-targeting-pack-8.0 (>= 8.0.12), aspnetcore-targeting-pack-8.0 (>= 8.0.13), aspnetcore-targeting-pack-8.0 (>= 8.0.14), aspnetcore-targeting-pack-8.0 (>= 8.0.15), aspnetcore-targeting-pack-8.0 (>= 8.0.16), aspnetcore-targeting-pack-8.0 (>= 8.0.17), aspnetcore-targeting-pack-8.0 (>= 8.0.18), aspnetcore-targeting-pack-8.0 (>= 8.0.19), aspnetcore-targeting-pack-8.0 (>= 8.0.2), aspnetcore-targeting-pack-8.0 (>= 8.0.20), aspnetcore-targeting-pack-8.0 (>= 8.0.21), aspnetcore-targeting-pack-8.0 (>= 8.0.22), aspnetcore-targeting-pack-8.0 (>= 8.0.23), aspnetcore-targeting-pack-8.0 (>= 8.0.3), aspnetcore-targeting-pack-8.0 (>= 8.0.4), aspnetcore-targeting-pack-8.0 (>= 8.0.5), aspnetcore-targeting-pack-8.0 (>= 8.0.6), aspnetcore-targeting-pack-8.0 (>= 8.0.7), aspnetcore-targeting-pack-8.0 (>= 8.0.8), dotnet-apphost-pack-8.0 (>= 8.0.0), dotnet-apphost-pack-8.0 (>= 8.0.1), dotnet-apphost-pack-8.0 (>= 8.0.10), dotnet-apphost-pack-8.0 (>= 8.0.11), dotnet-apphost-pack-8.0 (>= 8.0.12), dotnet-apphost-pack-8.0 (>= 8.0.13), dotnet-apphost-pack-8.0 (>= 8.0.14), dotnet-apphost-pack-8.0 (>= 8.0.15), dotnet-apphost-pack-8.0 (>= 8.0.16), dotnet-apphost-pack-8.0 (>= 8.0.17), dotnet-apphost-pack-8.0 (>= 8.0.18), dotnet-apphost-pack-8.0 (>= 8.0.19), dotnet-apphost-pack-8.0 (>= 8.0.2), dotnet-apphost-pack-8.0 (>= 8.0.20), dotnet-apphost-pack-8.0 (>= 8.0.21), dotnet-apphost-pack-8.0 (>= 8.0.22), dotnet-apphost-pack-8.0 (>= 8.0.23), dotnet-apphost-pack-8.0 (>= 8.0.3), dotnet-apphost-pack-8.0 (>= 8.0.4), dotnet-apphost-pack-8.0 (>= 8.0.5), dotnet-apphost-pack-8.0 (>= 8.0.6), dotnet-apphost-pack-8.0 (>= 8.0.7), dotnet-apphost-pack-8.0 (>= 8.0.8), dotnet-runtime-8.0 (>= 8.0.0), dotnet-runtime-8.0 (>= 8.0.1), dotnet-runtime-8.0 (>= 8.0.10), dotnet-runtime-8.0 (>= 8.0.11), dotnet-runtime-8.0 (>= 8.0.12), dotnet-runtime-8.0 (>= 8.0.13), dotnet-runtime-8.0 (>= 8.0.14), dotnet-runtime-8.0 (>= 8.0.15), dotnet-runtime-8.0 (>= 8.0.16), dotnet-runtime-8.0 (>= 8.0.17), dotnet-runtime-8.0 (>= 8.0.18), dotnet-runtime-8.0 (>= 8.0.19), dotnet-runtime-8.0 (>= 8.0.2), dotnet-runtime-8.0 (>= 8.0.20), dotnet-runtime-8.0 (>= 8.0.21), dotnet-runtime-8.0 (>= 8.0.22), dotnet-runtime-8.0 (>= 8.0.23), dotnet-runtime-8.0 (>= 8.0.3), dotnet-runtime-8.0 (>= 8.0.4), dotnet-runtime-8.0 (>= 8.0.5), dotnet-runtime-8.0 (>= 8.0.6), dotnet-runtime-8.0 (>= 8.0.7), dotnet-runtime-8.0 (>= 8.0.8), dotnet-targeting-pack-8.0 (>= 8.0.0), dotnet-targeting-pack-8.0 (>= 8.0.1), dotnet-targeting-pack-8.0 (>= 8.0.10), dotnet-targeting-pack-8.0 (>= 8.0.11), dotnet-targeting-pack-8.0 (>= 8.0.12), dotnet-targeting-pack-8.0 (>= 8.0.13), dotnet-targeting-pack-8.0 (>= 8.0.14), dotnet-targeting-pack-8.0 (>= 8.0.15), dotnet-targeting-pack-8.0 (>= 8.0.16), dotnet-targeting-pack-8.0 (>= 8.0.17), dotnet-targeting-pack-8.0 (>= 8.0.18), dotnet-targeting-pack-8.0 (>= 8.0.19), dotnet-targeting-pack-8.0 (>= 8.0.2), dotnet-targeting-pack-8.0 (>= 8.0.20), dotnet-targeting-pack-8.0 (>= 8.0.21), dotnet-targeting-pack-8.0 (>= 8.0.22), dotnet-targeting-pack-8.0 (>= 8.0.23), dotnet-targeting-pack-8.0 (>= 8.0.3), dotnet-targeting-pack-8.0 (>= 8.0.4), dotnet-targeting-pack-8.0 (>= 8.0.5), dotnet-targeting-pack-8.0 (>= 8.0.6), dotnet-targeting-pack-8.0 (>= 8.0.7), dotnet-targeting-pack-8.0 (>= 8.0.8), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-9.0**
  - Latest version: 9.0.203-1
  - Architectures: amd64
  - Suite: focal
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
  - depends: aspnetcore-runtime-9.0 (>= 9.0.0), aspnetcore-runtime-9.0 (>= 9.0.1), aspnetcore-runtime-9.0 (>= 9.0.2), aspnetcore-runtime-9.0 (>= 9.0.3), aspnetcore-runtime-9.0 (>= 9.0.4), aspnetcore-targeting-pack-9.0 (>= 9.0.0), aspnetcore-targeting-pack-9.0 (>= 9.0.1), aspnetcore-targeting-pack-9.0 (>= 9.0.2), aspnetcore-targeting-pack-9.0 (>= 9.0.3), aspnetcore-targeting-pack-9.0 (>= 9.0.4), dotnet-apphost-pack-9.0 (>= 9.0.0), dotnet-apphost-pack-9.0 (>= 9.0.1), dotnet-apphost-pack-9.0 (>= 9.0.2), dotnet-apphost-pack-9.0 (>= 9.0.3), dotnet-apphost-pack-9.0 (>= 9.0.4), dotnet-runtime-9.0 (>= 9.0.0), dotnet-runtime-9.0 (>= 9.0.1), dotnet-runtime-9.0 (>= 9.0.2), dotnet-runtime-9.0 (>= 9.0.3), dotnet-runtime-9.0 (>= 9.0.4), dotnet-targeting-pack-9.0 (>= 9.0.0), dotnet-targeting-pack-9.0 (>= 9.0.1), dotnet-targeting-pack-9.0 (>= 9.0.2), dotnet-targeting-pack-9.0 (>= 9.0.3), dotnet-targeting-pack-9.0 (>= 9.0.4), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-3.1**
  - Latest version: 3.1.0-1
  - Architectures: amd64
  - Suite: focal
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
  - Suite: focal
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
  - Suite: focal
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

- **dotnet-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 7.0.10
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
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 8.0.0
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
  - Latest version: 9.0.4-1
  - Architectures: amd64
  - Suite: focal
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


### <a id="packages-E"></a>E

- **edge-config-tool**
  - Latest version: 2.0.0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Microsoft Azure IoT Edge Configuration Tool
  - Install: `sudo apt-get install edge-config-tool`
  - Install (apt): `sudo apt install edge-config-tool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Percept <azurepercept@microsoft.com>

  </details>


### <a id="packages-G"></a>G

- **gadget-builder**
  - Latest version: 0.48.0-ubuntu20.04u2
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: The Gadget Builder is an image which helps to build gadgets for Inspektor Gadget.
  - Homepage: https://www.inspektor-gadget.io
  - Install: `sudo apt-get install gadget-builder`
  - Install (apt): `sudo apt install gadget-builder`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: clang-18, findutils, gzip, libbpf-dev, libssl1.1, linux-libc-dev, linux-tools-common, llvm-18, make, msft-golang (>= 1.24.0), msft-golang (>= 1.25.0), tar

  </details>


### <a id="packages-H"></a>H

- **hibernation-setup-tool**
  - Latest version: 1.0-8
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6 (>= 2.16)
  - suggests: btrfs-progs, e2fsprogs, grub2, systemd, udev, xfsprogs

  </details>


### <a id="packages-I"></a>I

- **ig**
  - Latest version: 0.48.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Inspektor Gadget is a set of tools and framework for data collection and system inspection on Kubernetes clusters and Linux hosts using eBPF.
  - Homepage: https://www.inspektor-gadget.io
  - Install: `sudo apt-get install ig`
  - Install (apt): `sudo apt install ig`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), openssl

  </details>

- **ig-gadgets**
  - Latest version: 0.48.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Gadgets for Inspektor Gadget
  - Homepage: https://www.inspektor-gadget.io
  - Install: `sudo apt-get install ig-gadgets`
  - Install (apt): `sudo apt install ig-gadgets`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: ig (>= 0.41.0), ig (>= 0.42.0), ig (>= 0.43.0), ig (>= 0.44.1), ig (>= 0.45.0), ig (>= 0.46.0), ig (>= 0.47.0), ig (>= 0.48.0)

  </details>

- **intune-portal**
  - Latest version: 1.2405.17-focal
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft Intune
  - Install: `sudo apt-get install intune-portal`
  - Install (apt): `sudo apt install intune-portal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: utils
  - Priority: optional
  - depends: gnome-keyring (>= 3.36), libatk1.0-0 (>= 1.12.4), libc6 (>= 2.28), libc6 (>= 2.29), libc6 (>= 2.30), libcurl4 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libglib2.0-0 (>= 2.12.0), libglib2.0-0 (>= 2.35.8), libgtk-3-0 (>= 3.16.2), libgtk-3-0 (>= 3.21.4), libgtk-3-0 (>= 3.9.10), libjavascriptcoregtk-4.0-18, libpam-pwquality (>= 1.4.0-2), libpam0g (>= 0.99.7.1), libpango-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.19.1), libsecret-1-0 (>= 0.7), libsoup2.4-1 (>= 2.4.0), libsqlite3-0 (>= 3.7.14), libssl1.1 (>= 1.1.0), libstdc++6 (>= 9), libsystemd0, libuuid1 (>= 2.16), libwebkit2gtk-4.0-37 (>= 2.5.3), libx11-6, msalsdk-dbusclient (>= 1.0), zlib1g (>= 1:1.2.0)
  - recommends: microsoft-edge-stable (>= 102)

  </details>

- **iotedge**
  - Latest version: 1.1.15-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Azure IoT Edge Security Daemon
  - Homepage: https://github.com/azure/iotedge
  - Install: `sudo apt-get install iotedge`
  - Install (apt): `sudo apt install iotedge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: admin
  - Priority: extra
  - depends: adduser, ca-certificates, hostname, libc6 (>= 2.18), libgcc-s1 (>= 4.2), libiothsm-std (= 1.1.11-1), libiothsm-std (= 1.1.13-1), libiothsm-std (= 1.1.15-1), libiothsm-std (= 1.1.9-1), libssl1.1 (>= 1.1.0), sed

  </details>


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20260120.1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **jcd**
  - Latest version: 1.0.1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Sysinternals jcd (Jump Change Directory)
  - Install: `sudo apt-get install jcd`
  - Install (apt): `sudo apt install jcd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>

  </details>


### <a id="packages-K"></a>K

- **kevlar-repokey-dev**
  - Latest version: 1.1-6
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-dev`
  - Install (apt): `sudo apt install kevlar-repokey-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-prod, kevlar-repokey-test
  - replaces: kevlar-repokey-prod, kevlar-repokey-test
  - provides: kevlar-repokey

  </details>

- **kevlar-repokey-prod**
  - Latest version: 1.1-6
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-prod`
  - Install (apt): `sudo apt install kevlar-repokey-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-dev, kevlar-repokey-test
  - replaces: kevlar-repokey-dev, kevlar-repokey-test
  - provides: kevlar-repokey

  </details>

- **kevlar-repokey-test**
  - Latest version: 1.1-6
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-test`
  - Install (apt): `sudo apt install kevlar-repokey-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-dev, kevlar-repokey-prod
  - replaces: kevlar-repokey-dev, kevlar-repokey-prod
  - provides: kevlar-repokey

  </details>

- **kubeadm**
  - Latest version: 1.35.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Command-line utility for administering a Kubernetes cluster
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubeadm`
  - Install (apt): `sudo apt install kubeadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1
  - replaces: kubernetes-kubeadm (<< 1.31.100), kubernetes-kubeadm (<< 1.31.13), kubernetes-kubeadm (<< 1.31.14), kubernetes-kubeadm (<< 1.32.10), kubernetes-kubeadm (<< 1.32.9), kubernetes-kubeadm (<< 1.33.2), kubernetes-kubeadm (<< 1.33.5), kubernetes-kubeadm (<< 1.33.6), kubernetes-kubeadm (<< 1.33.7), kubernetes-kubeadm (<< 1.34.0), kubernetes-kubeadm (<< 1.34.1), kubernetes-kubeadm (<< 1.34.2), kubernetes-kubeadm (<< 1.34.3), kubernetes-kubeadm (<< 1.35.0)
  - provides: kubernetes-kubeadm (= 1.31.100), kubernetes-kubeadm (= 1.31.13), kubernetes-kubeadm (= 1.31.14), kubernetes-kubeadm (= 1.32.10), kubernetes-kubeadm (= 1.32.9), kubernetes-kubeadm (= 1.33.2), kubernetes-kubeadm (= 1.33.5), kubernetes-kubeadm (= 1.33.6), kubernetes-kubeadm (= 1.33.7), kubernetes-kubeadm (= 1.34.0), kubernetes-kubeadm (= 1.34.1), kubernetes-kubeadm (= 1.34.2), kubernetes-kubeadm (= 1.34.3), kubernetes-kubeadm (= 1.35.0)

  </details>

- **kubectl**
  - Latest version: 1.35.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Command-line utility for interacting with a Kubernetes cluster
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubectl`
  - Install (apt): `sudo apt install kubectl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1
  - conflicts: kubernetes, kubernetes-client

  </details>

- **kubectl-gadget**
  - Latest version: 0.48.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Inspektor Gadget is a set of tools and framework for data collection and system inspection on Kubernetes clusters and Linux hosts using eBPF.
  - Homepage: https://www.inspektor-gadget.io
  - Install: `sudo apt-get install kubectl-gadget`
  - Install (apt): `sudo apt install kubectl-gadget`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), openssl

  </details>

- **kubelet**
  - Latest version: 1.35.0-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Node agent for Kubernetes clusters
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubelet`
  - Install (apt): `sudo apt install kubelet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1
  - conflicts: kubernetes

  </details>

- **kubelogin**
  - Latest version: 0.2.14-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: This is a client-go credential (exec) plugin implementing azure authentication. This plugin provides features that are not available in kubectl. It is supported on kubectl v1.11+
  - Homepage: https://github.com/Azure/kubelogin
  - Install: `sudo apt-get install kubelogin`
  - Install (apt): `sudo apt install kubelogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), openssl

  </details>

- **kubernetes-coredns**
  - Latest version: 1.13.2-ubuntu20.04u3
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: CoreDNS is a DNS server/forwarder, that chains plugins. Each plugin performs a (DNS) function.
  - Homepage: https://github.com/coredns/coredns
  - Install: `sudo apt-get install kubernetes-coredns`
  - Install (apt): `sudo apt install kubernetes-coredns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), libssl1.1

  </details>

- **kubernetes-cri-tools**
  - Latest version: 1.34.0-ubuntu20.04u2
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: foo description
  - Homepage: https://github.com/kubernetes-sigs/cri-tools
  - Install: `sudo apt-get install kubernetes-cri-tools`
  - Install (apt): `sudo apt install kubernetes-cri-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), openssl

  </details>


### <a id="packages-L"></a>L

- **libdeliveryoptimization**
  - Latest version: 1.1.0
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: deliveryoptimization-agent, libboost-filesystem1.71.0, libc6 (>= 2.17), libc6 (>= 2.9), libgcc-s1 (>= 3.0), libstdc++6 (>= 9)

  </details>

- **libdeliveryoptimization-dev**
  - Latest version: 1.1.0
  - Architectures: amd64, arm64
  - Suite: focal
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

- **libiothsm-std**
  - Latest version: 1.1.15-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Azure IoT standard mode HSM lib
  - Install: `sudo apt-get install libiothsm-std`
  - Install (apt): `sudo apt install libiothsm-std`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: devel
  - Priority: optional
  - depends: libssl1.1
  - provides: libiothsm

  </details>

- **libk4abt1.1**
  - Latest version: 1.1.2
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Dynamic Libraries for Azure Kinect Body Tracking Runtime
  - Install: `sudo apt-get install libk4abt1.1`
  - Install (apt): `sudo apt install libk4abt1.1`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.27), libgcc1 (>= 1:4.2), libgomp1 (>= 4.9), libk4a1.4 (= 1.4.1), libstdc++6 (>= 6), libx11-6 (>= 2:1.2.99.901)
  - preDepends: libk4a1.4 (>= 1.4.1)

  </details>

- **libk4abt1.1-dev**
  - Latest version: 1.1.2
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Headers and cmake files needed for Azure Kinect Body Tracking Development
  - Install: `sudo apt-get install libk4abt1.1-dev`
  - Install (apt): `sudo apt install libk4abt1.1-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: devel
  - Priority: optional
  - depends: libk4abt1.1 (= 1.1.2)
  - preDepends: libk4a1.4-dev (>= 1.4.1)

  </details>

- **libkmpp**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp`
  - Install (apt): `sudo apt install libkmpp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-client**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp-client`
  - Install (apt): `sudo apt install libkmpp-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-containers**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers`
  - Install (apt): `sudo apt install libkmpp-containers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-containers-client**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-client`
  - Install (apt): `sudo apt install libkmpp-containers-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-containers-dev**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-dev`
  - Install (apt): `sudo apt install libkmpp-containers-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-containers-test**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-test`
  - Install (apt): `sudo apt install libkmpp-containers-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libkmpp-dev**
  - Latest version: 2.0.0-188-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Key Management and Protection Platform
  - Install: `sudo apt-get install libkmpp-dev`
  - Install (apt): `sudo apt install libkmpp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libtss2-esys0, symcrypt

  </details>

- **libmsquic**
  - Latest version: 2.4.8
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - Latest version: 2.3.11-1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Microsoft Defender Advanced Threat Protection for Endpoints (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender ATP Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: auditd, curl (>= 7.5), dmidecode, iptables, libatomic1, libc6 (>= 2.23), libfuse2, libpcre2-8-0, libpcre3, libseccomp2, libselinux1, libuuid1, mde-netfilter, perl, python3, rsyslog, uuid-runtime

  </details>

- **mde-netfilter**
  - Latest version: 100.69.78
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Suite: focal
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

- **microsoft-azurevpnclient**
  - Latest version: 3.0.0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azure VPN Client
  - Homepage: https://apps.microsoft.com/store/detail/azure-vpn-client
  - Install: `sudo apt-get install microsoft-azurevpnclient`
  - Install (apt): `sudo apt install microsoft-azurevpnclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Azure VPN <aznetvpnidc@microsoft.com>
  - Section: net
  - Priority: optional
  - depends: libatk1.0-0 (>= 1.12.4), libc6 (>= 2.30), libcap2 (>= 1:2.10), libcurl4 (>= 7.16.2), libepoxy0 (>= 1.0), libfontconfig1 (>= 2.12.6), libgcc-s1 (>= 3.0), libglib2.0-0 (>= 2.39.90), libgtk-3-0 (>= 3.21.4), libpango-1.0-0 (>= 1.29.4), libpangocairo-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.7), libsqlite3-0 (>= 3.7.14), libssl1.1 (>= 1.1.1), libstdc++6 (>= 7), libsystemd0 (>= 239), zenity | kdialog, zlib1g (>= 1:1.2.0)
  - preDepends: dpkg (>= 1.14.0)

  </details>

- **microsoft-identity-broker**
  - Latest version: 2.0.1
  - Architectures: amd64
  - Suite: focal
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

- **microsoft-identity-diagnostics**
  - Latest version: 2.0.0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: microsoft-identity-diagnostics
  - Install: `sudo apt-get install microsoft-identity-diagnostics`
  - Install (apt): `sudo apt install microsoft-identity-diagnostics`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Identity
  - Section: java
  - Priority: optional
  - depends: default-jre, jq

  </details>

- **microsoft-mlserver-config-rserve-9.3.0**
  - Latest version: 9.3.0.2606
  - Architectures: amd64
  - Suite: focal
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

- **microsoft-r-open-mkl-3.5.2**
  - Latest version: 3.5.2.777
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mkl-3.5.2`
  - Install (apt): `sudo apt install microsoft-r-open-mkl-3.5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.5.2

  </details>

- **microsoft-r-open-mro-3.5.2**
  - Latest version: 3.5.2.777
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mro-3.5.2`
  - Install (apt): `sudo apt install microsoft-r-open-mro-3.5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: bash, curl, less, libgomp1, libpango1.0-0, libsm6, libxt6

  </details>

- **microsoft-r-open-sparklyr-3.5.2**
  - Latest version: 3.5.2.777
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-sparklyr-3.5.2`
  - Install (apt): `sudo apt install microsoft-r-open-sparklyr-3.5.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.5.2

  </details>

- **moby-buildx**
  - Latest version: 0.30.1-ubuntu20.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4), libssl1.1
  - recommends: moby-cli
  - conflicts: docker-buildx-plugin, docker-ce, docker-ee
  - replaces: docker-buildx-plugin

  </details>

- **moby-cli**
  - Latest version: 29.1.4-ubuntu20.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: focal
  - Components: main
  - Description: Docker container platform (client package)
  - Homepage: https://github.com/docker/cli
  - Install: `sudo apt-get install moby-cli`
  - Install (apt): `sudo apt install moby-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.17), libc6 (>= 2.4)
  - recommends: ca-certificates, git, moby-buildx, moby-engine, pigz, xz-utils
  - suggests: moby-engine
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-compose**
  - Latest version: 5.0.1-ubuntu20.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4), moby-cli
  - recommends: moby-cli
  - conflicts: docker-ce, docker-ce-cli, docker-compose-plugin, docker-ee, docker-ee-cli

  </details>

- **moby-containerd**
  - Latest version: 2.2.1-ubuntu20.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.17), libc6 (>= 2.4), libseccomp2 (>= 2.4.1), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.2), moby-runc (>= 1.1.0)
  - recommends: ca-certificates, moby-runc (>= 1.0.0~rc10), pigz, xz-utils
  - conflicts: containerd, containerd.io, docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, moby-engine (<= 3.0.10), moby-engine (<= 3.0.12)
  - replaces: containerd, containerd.io, docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io
  - provides: containerd, containerd.io

  </details>

- **moby-containerd-shim-systemd**
  - Latest version: 0.1.0~beta.1+azure-ubuntu20.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), moby-containerd (>= 1.6), systemd (>= 239)
  - recommends: moby-runc

  </details>

- **moby-engine**
  - Latest version: 29.1.4-ubuntu20.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: focal
  - Components: main
  - Description: Docker container platform (engine package)
  - Homepage: https://github.com/moby/moby
  - Install: `sudo apt-get install moby-engine`
  - Install (apt): `sudo apt install moby-engine`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <support@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: iptables, libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libnftables1 (>= 0.9.3), libseccomp2 (>= 2.1.0), libsystemd0, moby-containerd (>= 1.2), moby-containerd (>= 1.3.9), moby-containerd (>= 1.4.3), moby-containerd (>= 1.7.0), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.0~rc93), moby-runc (>= 1.0.2), moby-runc (>= 1.1.0), moby-tini (>= 0.19.0), nftables
  - recommends: apparmor, ca-certificates, iptables, kmod, moby-cli, pigz, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, git
  - conflicts: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-runc**
  - Latest version: 1.4.0-ubuntu20.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: focal
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
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.28), libseccomp2 (>= 2.4.1), libseccomp2 (>= 2.5.0)
  - suggests: moby-containerd
  - conflicts: moby-engine (<= 3.0.10), runc, runc-io
  - replaces: runc, runc (<= 1.2.7), runc (<= 1.2.8), runc (<= 1.3.0), runc (<= 1.3.1), runc (<= 1.3.2), runc (<= 1.3.3), runc (<= 1.3.4), runc (<= 1.4.0), runc-io (<= 1.2.7), runc-io (<= 1.2.8), runc-io (<= 1.3.0), runc-io (<= 1.3.1), runc-io (<= 1.3.2), runc-io (<= 1.3.3), runc-io (<= 1.3.4), runc-io (<= 1.4.0)
  - provides: runc, runc (= 1.2.7), runc (= 1.2.8), runc (= 1.3.0), runc (= 1.3.1), runc (= 1.3.2), runc (= 1.3.3), runc (= 1.3.4), runc (= 1.4.0)

  </details>

- **moby-tini**
  - Latest version: 0.19.0-ubuntu20.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: focal
  - Components: main
  - Description: A tiny but valid init for containers
  - Homepage: https://github.com/krallin/tini
  - Install: `sudo apt-get install moby-tini`
  - Install (apt): `sudo apt install moby-tini`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - Priority: optional

  </details>

- **msalsdk-dbusclient**
  - Latest version: 1.0.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft Authentication Library cross platform
  - Homepage: https://github.com/AzureAD/microsoft-authentication-library-for-cpp
  - Install: `sudo apt-get install msalsdk-dbusclient`
  - Install (apt): `sudo apt install msalsdk-dbusclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Identity Client Linux Team <IdentityClientLinux@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.14), libgcc-s1 (>= 3.0), libsdbus-c++0 (>= 0.8.3), libstdc++6 (>= 6), microsoft-identity-broker (>= 1.2), msft-identity-broker (>= 1.0)

  </details>

- **msft-golang**
  - Latest version: 1.25.6-ubuntu20.04u1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: The Microsoft build of the Go toolset
  - Homepage: https://github.com/microsoft/go
  - Install: `sudo apt-get install msft-golang`
  - Install (apt): `sudo apt install msft-golang`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - recommends: g++, gcc, libc6-dev, pkg-config
  - conflicts: golang
  - provides: golang (= 1.20.14), golang (= 1.22.12), golang (= 1.23.10), golang (= 1.23.11), golang (= 1.23.12), golang (= 1.23.6), golang (= 1.23.7), golang (= 1.23.8), golang (= 1.24.0), golang (= 1.24.1), golang (= 1.24.10), golang (= 1.24.11), golang (= 1.24.12), golang (= 1.24.2), golang (= 1.24.4), golang (= 1.24.5), golang (= 1.24.6), golang (= 1.24.7), golang (= 1.24.9), golang (= 1.25.1), golang (= 1.25.3), golang (= 1.25.4), golang (= 1.25.5), golang (= 1.25.6)

  </details>

- **msft-identity-broker**
  - Latest version: 1.0.6
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: msft-identity-broker
  - Install: `sudo apt-get install msft-identity-broker`
  - Install (apt): `sudo apt install msft-identity-broker`
  <details>
  <summary>More metadata</summary>

  - Maintainer: vsts
  - Section: java
  - Priority: optional
  - depends: dbus-session-bus, dbus-system-bus, default-jre, gnome-keyring, systemd

  </details>

- **msodbcsql17**
  - Latest version: 17.10.6.1-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libkrb5-3, libstdc++6 (>= 4.8.2), odbcinst, openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql18**
  - Latest version: 18.5.1.1-1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **msopenjdk-11**
  - Latest version: 11.0.29-1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Suite: focal
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
  - Latest version: 17.0.17-1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Latest version: 21.0.9-1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **msopenjdk-25**
  - Latest version: 25.0.1-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Microsoft Build of OpenJDK 25
  - Install: `sudo apt-get install msopenjdk-25`
  - Install (apt): `sudo apt install msopenjdk-25`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, java-common, libc6, zlib1g
  - recommends: fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java17-runtime, java17-runtime-headless, java17-sdk, java17-sdk-headless, java18-runtime, java18-runtime-headless, java18-sdk, java18-sdk-headless, java19-runtime, java19-runtime-headless, java19-sdk, java19-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java20-runtime, java20-runtime-headless, java20-sdk, java20-sdk-headless, java21-runtime, java21-runtime-headless, java21-sdk, java21-sdk-headless, java22-runtime, java22-runtime-headless, java22-sdk, java22-sdk-headless, java23-runtime, java23-runtime-headless, java23-sdk, java23-sdk-headless, java24-runtime, java24-runtime-headless, java24-sdk, java24-sdk-headless, java25-runtime, java25-runtime-headless, java25-sdk, java25-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **mssql-mlservices-mlm-py**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Python packages for Microsoft SQL Server Machine Learning Services (Full install). Provides python packages revoscalepy, microsoftml, pre-trained models for image featurization and text sentiment analysis
  - Install: `sudo apt-get install mssql-mlservices-mlm-py`
  - Install (apt): `sudo apt install mssql-mlservices-mlm-py`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: mssql-mlservices-packages-py

  </details>

- **mssql-mlservices-mlm-r**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Packages for R support in Microsoft SQL Server Machine Learning Services (Full install). Provides RevoScaleR, MicrosoftML, sqlRUtils, olapR, pre-trained models for image featurization and text sentiment analysis
  - Install: `sudo apt-get install mssql-mlservices-mlm-r`
  - Install (apt): `sudo apt install mssql-mlservices-mlm-r`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: mssql-mlservices-packages-r

  </details>

- **mssql-mlservices-packages-py**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Python packages for Microsoft SQL Server Machine Learning Services (Minimal install). Provides revoscalepy and microsoftml. Excludes pre-trained models
  - Install: `sudo apt-get install mssql-mlservices-packages-py`
  - Install (apt): `sudo apt install mssql-mlservices-packages-py`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: libgomp1, microsoft-openmpi (>=3.0.0), mssql-mlservices-python, mssql-server-extensibility (>=15.0.2000), unzip, zip

  </details>

- **mssql-mlservices-packages-r**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Packages for R support in Microsoft SQL Server Machine Learning Services (Minimal install). Provides RevoScaleR, sqlRUtils, MicrosoftML, olapR. Excludes pre-trained models
  - Install: `sudo apt-get install mssql-mlservices-packages-r`
  - Install (apt): `sudo apt install mssql-mlservices-packages-r`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: microsoft-openmpi (>=3.0.0), microsoft-r-open-mkl-3.5.2, microsoft-r-open-mro-3.5.2, mssql-server-extensibility (>=15.0.2000), unzip, zip

  </details>

- **mssql-mlservices-python**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Anaconda Python for Microsoft SQL Server Machine Learning Services. Provides Open-source distribution of Anaconda and Python
  - Install: `sudo apt-get install mssql-mlservices-python`
  - Install (apt): `sudo apt install mssql-mlservices-python`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: devel
  - Priority: optional

  </details>

- **mssql-server-sqliosim**
  - Latest version: 15.0.2000.173581-5
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Microsoft SQL Server SQLIOSIM
  - Install: `sudo apt-get install mssql-server-sqliosim`
  - Install (apt): `sudo apt install mssql-server-sqliosim`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: misc
  - Priority: extra
  - depends: adduser, debconf, gawk, gdb, hostname, libatomic1, libc++1, libc6, libgssapi-krb5-2, libldap-2.4-2, libnuma1, libpam0g, libsasl2-2, libsasl2-modules-gssapi-mit, libsss-nss-idmap0, libunwind8, openssl (>= 1.0.1g), sed, tzdata

  </details>

- **mssql-tools**
  - Latest version: 17.10.1.1-1
  - Architectures: amd64
  - Suite: focal
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

- **mssql-tools18**
  - Latest version: 18.4.1.1-1
  - Architectures: amd64, arm64
  - Suite: focal
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

- **mssql-zulu-jre-11**
  - Latest version: 11.43.56-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azul System Zulu JRE for SQL Server. Azul Zulu is an enterprise-quality, commercialized build of OpenJDK. For information about Azul Zulu Open JDK visit http://www.azul.com/zulu.
  - Install: `sudo apt-get install mssql-zulu-jre-11`
  - Install (apt): `sudo apt install mssql-zulu-jre-11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: java-common, libasound2, libc6, libfontconfig1, libgcc1, libx11-6, libxau6, libxcb1, libxdmcp6, libxext6, libxi6, libxrender1, libxtst6, zlib1g

  </details>

- **mssql-zulu-jre-8**
  - Latest version: 8.50.0.52-1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Azul System Zulu JRE for SQL Server. Azul Zulu is an enterprise-quality, commercialized build of OpenJDK. For information about Azul Zulu Open JDK visit http://www.azul.com/zulu.
  - Install: `sudo apt-get install mssql-zulu-jre-8`
  - Install (apt): `sudo apt install mssql-zulu-jre-8`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Data Platform Group <dpgswdist@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: java-common, libasound2, libc6, libfontconfig1, libgcc1, libx11-6, libxau6, libxcb1, libxdmcp6, libxext6, libxi6, libxrender1, libxtst6, zlib1g

  </details>

- **mystikos**
  - Latest version: 0.13.0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Mystikos
  - Install: `sudo apt-get install mystikos`
  - Install (apt): `sudo apt install mystikos`
  <details>
  <summary>More metadata</summary>

  - Maintainer: mystikos@service.microsoft.com
  - Priority: optional
  - depends: libsgx-dcap-ql (>=1.0.100.46460-1.0), libsgx-dcap-ql-dev (>=1.0.100.46460-1.0), libsgx-enclave-common (>=2.3.100.46354-1)

  </details>


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: focal
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

- **node-exporter-kubernetes**
  - Latest version: 1.9.1-ubuntu20.04u8
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Node exporter.
  - Homepage: https://github.com/prometheus/node_exporter
  - Install: `sudo apt-get install node-exporter-kubernetes`
  - Install (apt): `sudo apt install node-exporter-kubernetes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.4), openssl

  </details>

- **node-problem-detector-kubernetes**
  - Latest version: 0.8.22-ubuntu20.04u2
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Node problem detector.
  - Homepage: https://github.com/kubernetes/node-problem-detector
  - Install: `sudo apt-get install node-problem-detector-kubernetes`
  - Install (apt): `sudo apt install node-problem-detector-kubernetes`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.17), libc6 (>= 2.3.4), libc6 (>= 2.4), openssl

  </details>


### <a id="packages-O"></a>O

- **odbcinst**
  - Latest version: 2.3.11-1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Architectures: amd64, arm64
  - Suite: focal
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
  - conflicts: odbcinst1, odbcinst1debian1
  - breaks: libiodbc2, libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.3.11), unixodbc (<< 2.3.7)

  </details>

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: focal
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

- **open-enclave**
  - Latest version: 0.19.4
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Open Enclave SDK
  - Install: `sudo apt-get install open-enclave`
  - Install (apt): `sudo apt install open-enclave`
  <details>
  <summary>More metadata</summary>

  - Maintainer: oesdk@lists.confidentialcomputing.io
  - Section: devel
  - Priority: optional
  - depends: libsgx-dcap-ql (>=1.0.100.46460-1.0), libsgx-dcap-ql-dev (>=1.0.100.46460-1.0), libsgx-enclave-common (>=2.3.100.46354-1)
  - recommends: pkg-config

  </details>

- **open-enclave-hostverify**
  - Latest version: 0.19.4
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Open Enclave Report Verification Host Library
  - Install: `sudo apt-get install open-enclave-hostverify`
  - Install (apt): `sudo apt install open-enclave-hostverify`
  <details>
  <summary>More metadata</summary>

  - Maintainer: oesdk@lists.confidentialcomputing.io
  - Section: devel
  - Priority: optional
  - recommends: pkg-config

  </details>

- **osconfig**
  - Latest version: 1.0.5.2024032701
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: liblttng-ust-dev (>= 2.7), liblttng-ust0 (>= 2.7)
  - suggests: aziot-identity-service (>= 1.2.0)

  </details>


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-ubuntu20.04.1
  - Architectures: all
  - Suite: focal
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

- **powershell**
  - Latest version: 7.5.4-1.deb
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu66, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.1, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-lts**
  - Latest version: 7.4.13-1.deb
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 7.6.0-preview.5-1.deb
  - Architectures: amd64
  - Suite: focal
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu66, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu76|libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.1, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **procdump**
  - Latest version: 3.5.0
  - Architectures: amd64, arm64
  - Suite: focal
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
  - depends: gdb (>= 7.6.1), libc6, zlib1g

  </details>

- **procmon**
  - Latest version: 2.1.0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Procmon for Linux
  - Homepage: https://github.com/Microsoft/Procmon-for-Linux
  - Install: `sudo apt-get install procmon`
  - Install (apt): `sudo apt install procmon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: OSS Tooling Dev Team OSSToolingDevTeam@service.microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libc6 (>= 2.31), libelf1 (>= 0.0), libelf1 (>= 0.176), libncurses6 (>= 6.2), libstdc++6 (>= 10.2), libtinfo6 (>= 6), libzstd1 (>= 1.4), sysinternalsebpf (>= 1.4), sysinternalsebpf (>= 1.5.0)

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: focal
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

- **servicefabric**
  - Latest version: 9.1.1642.1
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Service Fabric
  - Install: `sudo apt-get install servicefabric`
  - Install (apt): `sudo apt install servicefabric`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ServiceFabric Maintainer <sfmaint@microsoft.com>
  - Section: base
  - Priority: optional
  - depends: acl, aspnetcore-runtime-6.0, atop, cgroup-tools, curl, dotnet-runtime-3.1, ebtables, libelf-dev, libib-util, liblttng-ust0, libssh2-1, libunwind8, lttng-modules-dkms, lttng-tools, members, nodejs, npm, openssh-server, software-properties-common, sshpass, zulu-8-azure-jdk

  </details>

- **servicefabricsdkcommon**
  - Latest version: 1.4.2
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: Service Fabric SDK Common
  - Install: `sudo apt-get install servicefabricsdkcommon`
  - Install (apt): `sudo apt install servicefabricsdkcommon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ServiceFabric Maintainer <sfmaint@microsoft.com>
  - Section: base
  - Priority: optional
  - depends: servicefabric (>= 9.0.1035.1)

  </details>

- **sqlcmd**
  - Latest version: 1.5.0-1~buster
  - Architectures: all
  - Suite: focal
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

- **symcrypt**
  - Latest version: 103.8.0-1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: A core cryptographic library written by Microsoft
  - Install: `sudo apt-get install symcrypt`
  - Install (apt): `sudo apt install symcrypt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: admin
  - Priority: optional

  </details>

- **symcrypt-openssl**
  - Latest version: 1.7.0-1~1.1.1
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: SymCrypt cryptography integration for OpenSSL
  - Install: `sudo apt-get install symcrypt-openssl`
  - Install (apt): `sudo apt install symcrypt-openssl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: admin
  - Priority: optional
  - depends: openssl (<< 1.1.2), openssl (>= 1.1.1), symcrypt

  </details>

- **sysinternalsebpf**
  - Latest version: 1.5.0
  - Architectures: amd64
  - Suite: focal
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
  - Latest version: 1.4.0
  - Architectures: amd64
  - Suite: focal
  - Components: main
  - Description: A system monitor based on eBPF, ported from Windows, that outputs events to Syslog
  - Install: `sudo apt-get install sysmonforlinux`
  - Install (apt): `sudo apt install sysmonforlinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libssl-dev, libstdc++6 (>= 5), libxml2 (>= 2.7.4), sysinternalsebpf (>= 1.0.2), sysinternalsebpf (>= 1.1.1), sysinternalsebpf (>= 1.2.0), sysinternalsebpf (>= 1.5.0), sysinternalsebpf (>= 1)

  </details>


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.11-1
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Architectures: amd64, arm64
  - Suite: focal
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
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: VirtualClient, the open sourced workload automation.
  - Install: `sudo apt-get install virtualclient`
  - Install (apt): `sudo apt install virtualclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Virtual Client Team <virtualclient@microsoft.com>

  </details>


### <a id="packages-W"></a>W

- **watsonagent**
  - Latest version: 1.21.29-0
  - Architectures: amd64, arm64
  - Suite: focal
  - Components: main
  - Description: Azure Watson Agent monitors and reports crashes
  - Install: `sudo apt-get install watsonagent`
  - Install (apt): `sudo apt install watsonagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Watson
  - Priority: optional
  - depends: libcurl3-gnutls, libssl1.1, libuuid1, libxml2

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
