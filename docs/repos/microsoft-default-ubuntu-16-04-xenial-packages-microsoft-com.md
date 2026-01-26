# Microsoft - ubuntu-16.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-16-04-xenial-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/16.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/16.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `xenial`
  - Components: main
  - Architectures: amd64
  - Observed OSes: ubuntu-16.04

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

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/16.04/prod xenial main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-16-04-xenial-packages-microsoft-com-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/16.04/prod xenial main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-16-04-xenial-packages-microsoft-com-xenial.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (280)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-H">H</a> <a href="#packages-I">I</a> <a href="#packages-J">J</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadlogin**
  - Latest version: 1.0.016050002
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Latest version: 1.0.033070001
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.14), libcurl3, libcurl3 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 2.0.65), libsemanage1 (>= 2.0.32), libssl1.0.0 (>= 1.0.0), libuuid1, libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.033070001
  - Architectures: amd64
  - Suite: xenial
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

- **acms-client**
  - Latest version: 5.13
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: ACMS client for dSMS
  - Install: `sudo apt-get install acms-client`
  - Install (apt): `sudo apt install acms-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: dsmsdev
  - Priority: extra
  - depends: curl, gnupg, libacl1, libcurl3, libuuid1, libxml2

  </details>

- **adutil**
  - Latest version: 1.1.138
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: no description given
  - Homepage: http://example.com/no-uri-given
  - Install: `sudo apt-get install adutil`
  - Install (apt): `sudo apt install adutil`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <vsts@fv-az51-219>
  - Section: default
  - Priority: extra
  - depends: krb5-user, packagekit, python-software-properties, realmd, software-properties-common

  </details>

- **adutil-preview**
  - Latest version: 0.7.029
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: no description given
  - Homepage: http://example.com/no-uri-given
  - Install: `sudo apt-get install adutil-preview`
  - Install (apt): `sudo apt install adutil-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <vsts@fv-az506-579>
  - Section: default
  - Priority: extra
  - depends: krb5-user, packagekit, python-software-properties, realmd, software-properties-common

  </details>

- **apt-transport-https-sas**
  - Latest version: 0.12-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: SAS (Secure Access Signature) token authentication support for
  - Install: `sudo apt-get install apt-transport-https-sas`
  - Install (apt): `sudo apt install apt-transport-https-sas`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Skype Core Services Ops <se-core@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: apt-transport-https, python2.7, python3, python3-adal

  </details>

- **aspnetcore-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **az-dcap-client**
  - Latest version: 1.6
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Intel(R) SGX DCAP plugin for Azure Integration
  - Install: `sudo apt-get install az-dcap-client`
  - Install (apt): `sudo apt install az-dcap-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: unknown
  - Priority: optional
  - depends: libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libssl1.0.0 (>= 1.0.0), libstdc++6 (>= 5.2)

  </details>

- **azcmagent**
  - Latest version: 1.44.02748.1621
  - Architectures: amd64
  - Suite: xenial
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
  - Latest version: 7.2.0-netcore
  - Architectures: all, amd64
  - Suite: xenial
  - Components: main
  - Description: Transferring data from/to azure storage blob/file
  - Install: `sudo apt-get install azcopy`
  - Install (apt): `sudo apt install azcopy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Emma Zhu<emmazhu@microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: dotnet-dev-1.0.1(>= 1.0.1), dotnet-runtime-2.0.0, dotnet-sdk-2.0.0(>= 2.0.0), libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)
  - suggests: parted-doc

  </details>

- **azdata-cli**
  - Latest version: 20.3.14-1~xenial
  - Architectures: all
  - Suite: xenial
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
  - depends: libc6 (>= 2.17), libkrb5-dev, libssl1.0.0 (>= 1.0.2~beta3), unixodbc

  </details>

- **azure-cli**
  - Latest version: 2.0.25-1
  - Architectures: all
  - Suite: xenial
  - Components: main
  - Description: Azure CLI 2.0
  - Homepage: https://github.com/azure/azure-cli
  - Install: `sudo apt-get install azure-cli`
  - Install (apt): `sudo apt install azure-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Python CLI Team <azpycli@microsoft.com>
  - Section: python
  - Priority: extra

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.0.5530-1
  - Architectures: all, amd64
  - Suite: xenial
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

- **azure-functions-core-tools-2**
  - Latest version: 2.7.3188-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **azure.function.cli**
  - Latest version: 2.0.1~beta.21-1
  - Architectures: all
  - Suite: xenial
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
  - Latest version: 1.3.8
  - Architectures: amd64
  - Suite: xenial
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
  - depends: fuse, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libcurl3-gnutls (>= 7.16.2), libfuse2 (>= 2.6), libfuse2 (>= 2.8), libgcc1 (>= 1:3.0), libgcrypt20 (>= 1.6.1), libgnutls30 (>= 3.4.0), libstdc++6 (>= 5.2), libuuid1 (>= 2.16)

  </details>


### <a id="packages-C"></a>C

- **codespaces**
  - Latest version: 1.0.2804
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-dev-1.0.4**
  - Latest version: 1.0.4-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.5, dotnet-sharedframework-microsoft.netcore.app-1.1.2, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.12, dotnet-sharedframework-microsoft.netcore.app-1.1.9, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.13, dotnet-sharedframework-microsoft.netcore.app-1.1.10, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.14, dotnet-sharedframework-microsoft.netcore.app-1.1.11, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.15, dotnet-sharedframework-microsoft.netcore.app-1.1.12, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.14**
  - Latest version: 1.1.14-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.7, dotnet-sharedframework-microsoft.netcore.app-1.1.4, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-dev-1.1.8**
  - Latest version: 1.1.8-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.10, dotnet-sharedframework-microsoft.netcore.app-1.1.7, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-dev-1.1.9**
  - Latest version: 1.1.9-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-sharedframework-microsoft.netcore.app-1.0.11, dotnet-sharedframework-microsoft.netcore.app-1.1.8, libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-host**
  - Latest version: 6.0.8-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft .NET Core Host - 2.0.0
  - Homepage: https://dotnet.github.io
  - Install: `sudo apt-get install dotnet-host`
  - Install (apt): `sudo apt install dotnet-host`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: libs
  - Priority: standard
  - depends: libc6, libc6 (>= 2.4), libgcc1, libgcc1 (>= 1:3.0), libgcc1 (>= 1:4.1.1), libstdc++6, libstdc++6 (>= 4.8), libstdc++6 (>= 5.2)
  - conflicts: dotnet, dotnet-nightly

  </details>

- **dotnet-hostfxr-1.0.1**
  - Latest version: 1.0.1-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-hostfxr-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-host (>= 1.1.10), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-hostfxr-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-hostfxr-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: dotnet-host (>= 1.1.9), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 5.2)

  </details>

- **dotnet-hostfxr-2.0.0**
  - Latest version: 2.0.0-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-hostfxr-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-host (>= 2.0.6), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-host (>= 2.0.7), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-host (>= 2.0.9), libc6 (>= 2.14), libgcc1 (>= 1:3.0), libstdc++6 (>= 4.8)

  </details>

- **dotnet-hostfxr-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.0, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.3**
  - Latest version: 2.0.3-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.3, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.4**
  - Latest version: 2.0.4-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.4, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.5**
  - Latest version: 2.0.5-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.5, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.6**
  - Latest version: 2.0.6-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.6, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.7**
  - Latest version: 2.0.7-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.7, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.0.9**
  - Latest version: 2.0.9-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-2.0.9, libc6 (>= 2.14), libcurl3 (>= 7.16.2), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55, liblttng-ust0 (>= 2.5.0), libssl1.0.0, libstdc++6 (>= 4.8), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-runtime-2.1**
  - Latest version: 2.1.30-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu55, liblttng-ust0, libssl1.0.0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-2.2**
  - Latest version: 2.2.8-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: dotnet-runtime-deps-2.2 2.2.6
  - Homepage: https://dot.net/core
  - Install: `sudo apt-get install dotnet-runtime-deps-2.2`
  - Install (apt): `sudo apt install dotnet-runtime-deps-2.2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Core Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu55, liblttng-ust0, libssl1.0.0, libssl1.0.0 | libssl1.0.2 | libssl1.1, libstdc++6, zlib1g

  </details>

- **dotnet-runtime-deps-3.0**
  - Latest version: 3.0.3-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sdk-2.0.0-preview2-006497**
  - Latest version: 2.0.0-preview2-006497-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft .NET Core SDK 2.0.0 Preview 2
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.0.0-preview2-006497`
  - Install (apt): `sudo apt install dotnet-sdk-2.0.0-preview2-006497`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: dotnet-runtime-2.0.0-preview2-25407-01, libc6 (>= 2.14)

  </details>

- **dotnet-sdk-2.0.2**
  - Latest version: 2.0.2-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sdk-2.1.100**
  - Latest version: 2.1.100-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sdk-2.1.300-preview1-008174**
  - Latest version: 2.1.300-preview1-008174-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft .NET Core SDK 2.1.300 - Preview
  - Homepage: https://dotnet.github.io/core
  - Install: `sudo apt-get install dotnet-sdk-2.1.300-preview1-008174`
  - Install (apt): `sudo apt install dotnet-sdk-2.1.300-preview1-008174`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-2.1.0-preview1-final, dotnet-runtime-2.1.0-preview1-26216-03

  </details>

- **dotnet-sdk-2.1.300-preview2-008533**
  - Latest version: 2.1.300-preview2-008533-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sharedframework-microsoft.netcore.app-1.0.10**
  - Latest version: 1.0.10-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.11**
  - Latest version: 1.0.11-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.12**
  - Latest version: 1.0.12-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.13**
  - Latest version: 1.0.13-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.14**
  - Latest version: 1.0.14-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.15**
  - Latest version: 1.0.15-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.16**
  - Latest version: 1.0.16-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.7**
  - Latest version: 1.0.7-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.0.1, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblldb-3.6, liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.0.8**
  - Latest version: 1.0.8-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sharedframework-microsoft.netcore.app-1.1.10**
  - Latest version: 1.1.10-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.10, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.11**
  - Latest version: 1.1.11-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.11, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.12**
  - Latest version: 1.1.12-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.12, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.13**
  - Latest version: 1.1.13-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.4**
  - Latest version: 1.1.4-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.5**
  - Latest version: 1.1.5-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **dotnet-sharedframework-microsoft.netcore.app-1.1.7**
  - Latest version: 1.1.7-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.8**
  - Latest version: 1.1.8-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.0, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-sharedframework-microsoft.netcore.app-1.1.9**
  - Latest version: 1.1.9-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: dotnet-hostfxr-1.1.9, libc6 (>= 2.14), libcurl3 (>= 7.28.0), libgcc1 (>= 1:3.0), libgssapi-krb5-2 (>= 1.10+dfsg~), libicu55 (>= 55.1-1~), liblttng-ust0 (>= 2.5.0), libssl1.0.0 (>= 1.0.1), libstdc++6 (>= 5.2), libunwind8, libuuid1 (>= 2.16), zlib1g (>= 1:1.1.4)

  </details>

- **dotnet-targeting-pack-3.0**
  - Latest version: 3.0.1-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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


### <a id="packages-H"></a>H

- **hybridagent**
  - Latest version: 0.2.1909.20003
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Azure Hybrid Agent
  - Install: `sudo apt-get install hybridagent`
  - Install (apt): `sudo apt install hybridagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Hybrid Agent <hybridrpft@microsoft.com>
  - depends: curl

  </details>


### <a id="packages-I"></a>I

- **iotedge**
  - Latest version: 1.0.8-2
  - Architectures: amd64
  - Suite: xenial
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
  - depends: adduser, ca-certificates, hostname, init-system-helpers (>= 1.18~), libc6 (>= 2.18), libgcc1 (>= 1:4.2), libiothsm, libiothsm-std (>= 1.0.8), libiothsm-std (>> 1.0.4), libssl1.0.0 (>= 1.0.2~beta3), sed

  </details>


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20251111.1
  - Architectures: amd64
  - Suite: xenial
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


### <a id="packages-K"></a>K

- **kevlar-repokey-dev**
  - Latest version: 1.1-4
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-dev`
  - Install (apt): `sudo apt install kevlar-repokey-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: debsig-verify
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-prod, kevlar-repokey-test
  - replaces: kevlar-repokey-prod, kevlar-repokey-test
  - provides: kevlar-repokey

  </details>

- **kevlar-repokey-prod**
  - Latest version: 1.1-4
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-prod`
  - Install (apt): `sudo apt install kevlar-repokey-prod`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: debsig-verify
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-dev, kevlar-repokey-test
  - replaces: kevlar-repokey-dev, kevlar-repokey-test
  - provides: kevlar-repokey

  </details>

- **kevlar-repokey-test**
  - Latest version: 1.1-4
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Installs ESRP issued public keys to APT keyring
  - Install: `sudo apt-get install kevlar-repokey-test`
  - Install (apt): `sudo apt install kevlar-repokey-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kevlar for Linux <LinuxGCP-SE@service.microsoft.com>
  - Section: admin
  - Priority: optional
  - depends: debsig-verify
  - preDepends: apt-transport-https-sas
  - conflicts: kevlar-repokey-dev, kevlar-repokey-prod
  - replaces: kevlar-repokey-dev, kevlar-repokey-prod
  - provides: kevlar-repokey

  </details>


### <a id="packages-L"></a>L

- **libifxaudit**
  - Latest version: 1.0.1525
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: IfxAudit library
  - Install: `sudo apt-get install libifxaudit`
  - Install (apt): `sudo apt install libifxaudit`
  <details>
  <summary>More metadata</summary>

  - Maintainer: IfxAudit <azauditlog@microsoft.com>
  - Section: libs
  - Priority: optional

  </details>

- **libifxaudit-dev**
  - Latest version: 1.0.1034
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: IfxAudit library development package"
  - Install: `sudo apt-get install libifxaudit-dev`
  - Install (apt): `sudo apt install libifxaudit-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: IfxAudit <azauditlog@microsoft.com>
  - Section: libdevel
  - Priority: optional
  - depends: libifxaudit (= 1.0.1003), libifxaudit (= 1.0.1026), libifxaudit (= 1.0.1034)

  </details>

- **libiothsm-std**
  - Latest version: 1.0.8-2
  - Architectures: amd64
  - Suite: xenial
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
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **libodbc1-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: ODBC library for Unix (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install libodbc1-utf16`
  - Install (apt): `sudo apt install libodbc1-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.6)
  - suggests: libmyodbc, odbc-postgresql, tdsodbc, unixodbc-utf16
  - conflicts: libodbc1
  - breaks: unixodbc (<< 2.2.14p2-3)
  - replaces: unixodbc (<< 2.2.14p2-3)

  </details>

- **linuxconfig**
  - Latest version: 1.0
  - Architectures: amd64
  - Suite: xenial
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

- **lsvmtools**
  - Latest version: 1.0.0-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: The LSVMTools package is for shielding Hyper-V Linux VMs.
  - Homepage: https://github.com/Microsoft/lsvmtools
  - Install: `sudo apt-get install lsvmtools`
  - Install (apt): `sudo apt install lsvmtools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Akash Gupta <akagup@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.14)

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-adminutil-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-adminutil-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-adminutil-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-adminutil-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: azure-cli, dotnet-runtime-2.1

  </details>

- **microsoft-mlserver-all-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-all-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-all-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-all-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-adminutil-9.4.7, microsoft-mlserver-computenode-9.4.7, microsoft-mlserver-config-rserve-9.4.7, microsoft-mlserver-hadoop-9.4.7, microsoft-mlserver-mlm-py-9.4.7, microsoft-mlserver-packages-py-9.4.7, microsoft-mlserver-packages-r-9.4.7, microsoft-mlserver-python-9.4.7, microsoft-mlserver-webnode-9.4.7

  </details>

- **microsoft-mlserver-computenode-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-computenode-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-computenode-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-computenode-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-2.1

  </details>

- **microsoft-mlserver-config-rserve-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-config-rserve-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-config-rserve-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-config-rserve-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-r-9.4.7

  </details>

- **microsoft-mlserver-hadoop-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-hadoop-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-hadoop-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-hadoop-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-mlm-py-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-mlm-py-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-py-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-py-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-py-9.4.7

  </details>

- **microsoft-mlserver-mlm-r-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-mlm-r-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-mlm-r-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-mlm-r-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-mlserver-packages-r-9.4.7

  </details>

- **microsoft-mlserver-mml-py-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-packages-py-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-py-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-py-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libgomp1, microsoft-mlserver-python-9.4.7

  </details>

- **microsoft-mlserver-packages-r-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-packages-r-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-packages-r-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-packages-r-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mkl-3.5.2, microsoft-r-open-mro-3.5.2

  </details>

- **microsoft-mlserver-python-9.2.1**
  - Latest version: 9.2.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-python-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-python-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-python-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional

  </details>

- **microsoft-mlserver-webnode-9.2**
  - Latest version: 9.2.1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-mlserver-webnode-9.4.7**
  - Latest version: 9.4.7.1025
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft Machine Learning Server
  - Install: `sudo apt-get install microsoft-mlserver-webnode-9.4.7`
  - Install (apt): `sudo apt install microsoft-mlserver-webnode-9.4.7`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: dotnet-runtime-2.1

  </details>

- **microsoft-r-client-mlm-3.4.1**
  - Latest version: 3.4.1.1360
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-r-open-foreachiterators-3.3**
  - Latest version: 3.3.2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-foreachiterators-3.3`
  - Install (apt): `sudo apt install microsoft-r-open-foreachiterators-3.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.3

  </details>

- **microsoft-r-open-foreachiterators-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-r-open-mkl-3.3**
  - Latest version: 3.3.2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mkl-3.3`
  - Install (apt): `sudo apt install microsoft-r-open-mkl-3.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: microsoft-r-open-mro-3.3

  </details>

- **microsoft-r-open-mkl-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-r-open-mkl-3.5.2**
  - Latest version: 3.5.2.257
  - Architectures: amd64
  - Suite: xenial
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

- **microsoft-r-open-mro-3.3**
  - Latest version: 3.3.2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Microsoft R Open
  - Install: `sudo apt-get install microsoft-r-open-mro-3.3`
  - Install (apt): `sudo apt install microsoft-r-open-mro-3.3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: revobuil@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: curl, libgomp1, libpango1.0-0, libsm6, libxt6

  </details>

- **microsoft-r-open-mro-3.4.1**
  - Latest version: 3.4.1.1347
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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

- **microsoft-r-open-mro-3.5.2**
  - Latest version: 3.5.2.257
  - Architectures: amd64
  - Suite: xenial
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

- **microsoft-r-open-sparklyr-3.4.4**
  - Latest version: 3.4.4.1037
  - Architectures: amd64
  - Suite: xenial
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

- **microsoft-r-open-sparklyr-3.5.2**
  - Latest version: 3.5.2.257
  - Architectures: amd64
  - Suite: xenial
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
  - Latest version: 0.8.2+azure-1
  - Architectures: amd64
  - Suite: xenial
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
  - Latest version: 20.10.15+azure-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: iptables, libc6 (>= 2.4)
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, moby-buildx, moby-engine, pigz, xz-utils
  - suggests: moby-engine
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-compose**
  - Latest version: 2.4.1+azure-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: moby-cli
  - conflicts: docker-ce, docker-ce-cli, docker-ee, docker-ee-cli

  </details>

- **moby-containerd**
  - Latest version: 1.5.11+azure-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.4), libseccomp2 (>= 2.4.0), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.0~rc10~), moby-runc (>= 1.0.2)
  - recommends: ca-certificates, moby-runc (>= 1.0.0~rc10)
  - conflicts: containerd, containerd.io, moby-engine (<= 3.0.10), moby-engine (<= 3.0.12)
  - replaces: containerd, containerd.io
  - provides: containerd, containerd.io

  </details>

- **moby-engine**
  - Latest version: 20.10.15+azure-2
  - Architectures: amd64
  - Suite: xenial
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
  - depends: init-system-helpers (>= 1.18~), iptables, libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.1.0), moby-containerd (>= 1.2), moby-containerd (>= 1.3.9), moby-containerd (>= 1.4.3), moby-runc (>= 1.0.0~rc10), moby-runc (>= 1.0.0~rc93), moby-runc (>= 1.0.2)
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, iptables, kmod, moby-cli, pigz, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, git
  - conflicts: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package, moby-containerd, moby-runc
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-runc**
  - Latest version: 1.0.3+azure-1
  - Architectures: amd64
  - Suite: xenial
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
  - depends: libc6 (>= 2.14), libseccomp2 (>= 2.4.0)
  - suggests: moby-containerd
  - conflicts: moby-engine (<= 3.0.10), runc
  - replaces: runc
  - provides: runc

  </details>

- **msodbcsql**
  - Latest version: 13.1.9.2-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1), unixodbc-utf16 (>= 2.3.1-1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **msodbcsql17**
  - Latest version: 17.8.1.1-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql17`
  - Install (apt): `sudo apt install msodbcsql17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libc6 (>= 2.21), libcurl3, libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-cli**
  - Latest version: 1.0.0-1
  - Architectures: all
  - Suite: xenial
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

- **mssql-mlservices-mlm-py**
  - Latest version: 9.4.7.958
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Suite: xenial
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
  - Latest version: 17.8.1.1-1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.19), libc6 (>= 2.21), libgss3, libkrb5-3, libstdc++6 (>= 4.8.2), libstdc++6 (>= 4.9), libstdc++6 (>= 5.2), msodbcsql (<< 13.2.0.0), msodbcsql (>= 13.0.0.0), msodbcsql (>= 13.1.0.0), msodbcsql17 (<< 17.1.0.0), msodbcsql17 (<< 17.2.0.0), msodbcsql17 (<< 17.3.0.0), msodbcsql17 (<< 17.4.0.0), msodbcsql17 (>= 17.0.0.1), msodbcsql17 (>= 17.1.0.1), msodbcsql17 (>= 17.2.0.0), msodbcsql17 (>= 17.3.0.0), openssl

  </details>

- **mssql-zulu-jre-11**
  - Latest version: 11.43.56-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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


### <a id="packages-N"></a>N

- **netstandard-targeting-pack-2.1**
  - Latest version: 2.1.0-1
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **odbcinst-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Helper program for accessing odbc ini files (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst-utf16`
  - Install (apt): `sudo apt install odbcinst-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.4), odbcinst1debian2-utf16 (>= 2.3.1)
  - conflicts: odbcinst, odbcinst1
  - replaces: odbcinst1, odbcinst1debian1 (<< 2.2.11-20), unixodbc (<< 2.1.1-2)

  </details>

- **odbcinst1debian2**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: xenial
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

- **odbcinst1debian2-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Support library for accessing odbc ini files (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst1debian2-utf16`
  - Install (apt): `sudo apt install odbcinst1debian2-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.6), odbcinst-utf16
  - conflicts: odbcinst1, odbcinst1debian1, odbcinst1debian2
  - breaks: libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.1.1-2)

  </details>

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **open-enclave**
  - Latest version: 0.14.0
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Open Enclave SDK
  - Install: `sudo apt-get install open-enclave`
  - Install (apt): `sudo apt install open-enclave`
  <details>
  <summary>More metadata</summary>

  - Maintainer: openenclave@microsoft.com
  - Section: devel
  - Priority: optional
  - depends: libsgx-dcap-ql (>=1.0.100.46460-1.0), libsgx-dcap-ql-dev (>=1.0.100.46460-1.0), libsgx-enclave-common (>=2.3.100.46354-1), libsgx-enclave-common-dev (>=2.3.100.0-1), pkg-config
  - recommends: pkg-config

  </details>

- **open-enclave-hostverify**
  - Latest version: 0.14.0
  - Architectures: amd64
  - Suite: xenial
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


### <a id="packages-P"></a>P

- **packages-microsoft-prod**
  - Latest version: 1.0-3
  - Architectures: all
  - Suite: xenial
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
  - Latest version: 7.5.4-1.deb
  - Architectures: amd64
  - Suite: xenial
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
  - depends: libc6, libcurl3, libgcc1, libgssapi-krb5-2, libicu55, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.0, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, libunwind8, libuuid1, zlib1g

  </details>

- **powershell-lts**
  - Latest version: 7.4.13-1.deb
  - Architectures: amd64
  - Suite: xenial
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu55, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.0, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 7.6.0-preview.5-1.deb
  - Architectures: amd64
  - Suite: xenial
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu55, libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu76|libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, liblttng-ust0, libssl1.0.0, libssl1.1|libssl1.0.2|libssl1.0.0, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **procdump**
  - Latest version: 1.4.1-14851
  - Architectures: amd64
  - Suite: xenial
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


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: xenial
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
  - Latest version: 9.0.1103.1
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Service Fabric
  - Install: `sudo apt-get install servicefabric`
  - Install (apt): `sudo apt install servicefabric`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ServiceFabric Maintainer <sfmaint@microsoft.com>
  - Section: base
  - Priority: optional
  - depends: acl, atop, cgroup-bin, curl, dotnet-runtime-2.0.7, dotnet-runtime-2.2, dotnet-runtime-3.1, ebtables, libcurl3(>= 7.16.2), libelf-dev, libib-util, liblttng-ust0, libssh2-1, libunwind8, lttng-modules-dkms, lttng-tools, members, nodejs, nodejs-legacy, npm, openssh-server, rssh, software-properties-common, sshpass, zulu-8-azure-jdk

  </details>

- **servicefabricsdkcommon**
  - Latest version: 1.4.2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Service Fabric SDK Common
  - Install: `sudo apt-get install servicefabricsdkcommon`
  - Install (apt): `sudo apt install servicefabricsdkcommon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ServiceFabric Maintainer <sfmaint@microsoft.com>
  - Section: base
  - Priority: optional
  - depends: servicefabric (>= 8.2.1285.1)

  </details>


### <a id="packages-T"></a>T

- **testpackage**
  - Latest version: 3.0
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Test Package
  - Install: `sudo apt-get install testpackage`
  - Install (apt): `sudo apt install testpackage`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Linux Team <azlinux@microsoft.com>
  - Section: admin
  - Priority: optional
  - recommends: dos2unix

  </details>


### <a id="packages-U"></a>U

- **unixodbc**
  - Latest version: 2.3.7
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
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

- **unixodbc-dev-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: ODBC libraries for UNIX (development files) (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc-dev-utf16`
  - Install (apt): `sudo apt install unixodbc-dev-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: devel
  - Priority: extra
  - depends: libltdl3-dev, odbcinst1debian2-utf16 (= 2.3.1-2), unixodbc-utf16 (= 2.3.1-2)
  - conflicts: libiodbc2-dev, remembrance-agent (<< 2.11-4), unixodbc-dev

  </details>

- **unixodbc-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: xenial
  - Components: main
  - Description: Basic ODBC tools (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc-utf16`
  - Install (apt): `sudo apt install unixodbc-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libodbc1-utf16 (>= 2.3.1), libreadline6 (>= 6.0), odbcinst1debian2-utf16 (>= 2.3.1)
  - conflicts: unixodbc, unixodbc-bin

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 1.15.25
  - Architectures: amd64
  - Suite: xenial
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
  - Suite: xenial
  - Components: main
  - Description: Visual Studio Online allows you to register your local machine/development environment, which allows you to access them from remote VS Code instances or a browser based editor, enabling you to work on any project from anywhere with the tools you already know.
  - Install: `sudo apt-get install vso`
  - Install (apt): `sudo apt install vso`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
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
