# Microsoft - debian-12 - default

## Repository
- Repository ID: `microsoft-default-debian-12-bookworm-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/debian/12/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/debian/12
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `bookworm`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: debian-12

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/12/prod bookworm main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-12-bookworm-packages-microsoft-com-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/debian/12/prod bookworm main" | sudo tee /etc/apt/sources.list.d/microsoft-default-debian-12-bookworm-packages-microsoft-com-bookworm.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (98)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-D">D</a> <a href="#packages-J">J</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadsshlogin**
  - Latest version: 1.0.031620001
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.34), libcurl4 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 3.1~), libsemanage2 (>= 2.0.32), libssl3 (>= 3.0.0), libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.031620001
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.4-1), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **acms-client**
  - Latest version: 5.31
  - Architectures: amd64
  - Suite: bookworm
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

- **aspnetcore-runtime-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **aspnetcore-runtime-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36)

  </details>

- **aspnetcore-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-runtime-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-runtime-9.0 (>= 9.0.0), dotnet-runtime-9.0 (>= 9.0.1), dotnet-runtime-9.0 (>= 9.0.10), dotnet-runtime-9.0 (>= 9.0.11), dotnet-runtime-9.0 (>= 9.0.12), dotnet-runtime-9.0 (>= 9.0.2), dotnet-runtime-9.0 (>= 9.0.3), dotnet-runtime-9.0 (>= 9.0.4), dotnet-runtime-9.0 (>= 9.0.5), dotnet-runtime-9.0 (>= 9.0.6), dotnet-runtime-9.0 (>= 9.0.7), dotnet-runtime-9.0 (>= 9.0.8), dotnet-runtime-9.0 (>= 9.0.9)

  </details>

- **aspnetcore-targeting-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **aspnetcore-targeting-pack-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36)

  </details>

- **aspnetcore-targeting-pack-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.9)

  </details>

- **aspnetcore-targeting-pack-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-targeting-pack-9.0 (>= 9.0.0), dotnet-targeting-pack-9.0 (>= 9.0.1), dotnet-targeting-pack-9.0 (>= 9.0.10), dotnet-targeting-pack-9.0 (>= 9.0.11), dotnet-targeting-pack-9.0 (>= 9.0.12), dotnet-targeting-pack-9.0 (>= 9.0.2), dotnet-targeting-pack-9.0 (>= 9.0.3), dotnet-targeting-pack-9.0 (>= 9.0.4), dotnet-targeting-pack-9.0 (>= 9.0.5), dotnet-targeting-pack-9.0 (>= 9.0.6), dotnet-targeting-pack-9.0 (>= 9.0.7), dotnet-targeting-pack-9.0 (>= 9.0.8), dotnet-targeting-pack-9.0 (>= 9.0.9)

  </details>

- **azcmagent**
  - Latest version: 1.60.03293.809
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
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

- **aziot-edge**
  - Latest version: 1.5.21-1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: adduser, aziot-identity-service (= 1.5.3-1), aziot-identity-service (= 1.5.4-1), aziot-identity-service (= 1.5.5-1), aziot-identity-service (= 1.5.6-1), ca-certificates, hostname, psmisc, sed

  </details>

- **aziot-edge-dbgsym**
  - Latest version: 1.5.16-1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for aziot-edge
  - Install: `sudo apt-get install aziot-edge-dbgsym`
  - Install (apt): `sudo apt install aziot-edge-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: debug
  - Priority: optional
  - depends: aziot-edge (= 1.5.10-1), aziot-edge (= 1.5.13-1), aziot-edge (= 1.5.16-1)

  </details>

- **aziot-identity-service**
  - Latest version: 1.5.6-1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), libgcc-s1 (>= 4.2), libgcc-s1 (>= 4.3), libssl3 (>= 3.0.0), libtss2-esys-3.0.2-0 (>= 2.3.1), libtss2-mu0 (>= 3.0.1), libtss2-rc0 (>= 3.0.1), libtss2-tctildr0 (>= 3.0.1), psmisc
  - conflicts: iotedge, libiothsm-std

  </details>

- **aziot-identity-service-dbgsym**
  - Latest version: 1.5.5-1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for aziot-identity-service
  - Install: `sudo apt-get install aziot-identity-service-dbgsym`
  - Install (apt): `sudo apt install aziot-identity-service-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure IoT Edge Devs
  - Section: debug
  - Priority: optional
  - depends: aziot-identity-service (= 1.5.3-1), aziot-identity-service (= 1.5.4-1), aziot-identity-service (= 1.5.5-1)

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - conflicts: azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-3**
  - Latest version: 3.0.5682-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Azure Function Core Tools v4
  - Homepage: https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#run-azure-functions-core-tools
  - Install: `sudo apt-get install azure-functions-core-tools-3`
  - Install (apt): `sudo apt install azure-functions-core-tools-3`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ahmed ElSayed <ahmels@microsoft.com>
  - Section: devel
  - Priority: optional
  - conflicts: azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>

- **azure-functions-core-tools-4**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - conflicts: azure-functions-core-tools-2, azure-functions-core-tools-3
  - replaces: azure-functions-core-tools-2, azure-functions-core-tools-3

  </details>


### <a id="packages-B"></a>B

- **blobfuse2**
  - Latest version: 2.5.2
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: fuse3

  </details>

- **blobfuse2-preview**
  - Latest version: 2.6.0~preview.2
  - Architectures: amd64
  - Suite: bookworm
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


### <a id="packages-D"></a>D

- **dotnet-apphost-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **dotnet-apphost-pack-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft.NETCore.App.Host 6.0.21
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
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft .NET Host - 7.0.10
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
  - Suite: bookworm
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

- **dotnet-hostfxr-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft .NET Host FX Resolver - 6.0.21
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-hostfxr-6.0`
  - Install (apt): `sudo apt install dotnet-hostfxr-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-host (>= 6.0.20), dotnet-host (>= 6.0.21), dotnet-host (>= 6.0.22), dotnet-host (>= 6.0.23), dotnet-host (>= 6.0.24), dotnet-host (>= 6.0.25), dotnet-host (>= 6.0.26), dotnet-host (>= 6.0.27), dotnet-host (>= 6.0.28), dotnet-host (>= 6.0.29), dotnet-host (>= 6.0.30), dotnet-host (>= 6.0.31), dotnet-host (>= 6.0.32), dotnet-host (>= 6.0.33), dotnet-host (>= 6.0.35), dotnet-host (>= 6.0.36), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-host (>= 7.0.10), dotnet-host (>= 7.0.11), dotnet-host (>= 7.0.12), dotnet-host (>= 7.0.13), dotnet-host (>= 7.0.14), dotnet-host (>= 7.0.15), dotnet-host (>= 7.0.16), dotnet-host (>= 7.0.17), dotnet-host (>= 7.0.18), dotnet-host (>= 7.0.19), dotnet-host (>= 7.0.20), dotnet-host (>= 7.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-hostfxr-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-host (>= 9.0.0), dotnet-host (>= 9.0.1), dotnet-host (>= 9.0.10), dotnet-host (>= 9.0.11), dotnet-host (>= 9.0.12), dotnet-host (>= 9.0.2), dotnet-host (>= 9.0.3), dotnet-host (>= 9.0.4), dotnet-host (>= 9.0.5), dotnet-host (>= 9.0.6), dotnet-host (>= 9.0.7), dotnet-host (>= 9.0.8), dotnet-host (>= 9.0.9), libc6, libgcc1, libstdc++6

  </details>

- **dotnet-runtime-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **dotnet-runtime-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft.NETCore.App.Runtime 6.0.21
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-runtime-6.0`
  - Install (apt): `sudo apt install dotnet-runtime-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard
  - depends: dotnet-hostfxr-6.0 (>= 6.0.20), dotnet-hostfxr-6.0 (>= 6.0.21), dotnet-hostfxr-6.0 (>= 6.0.22), dotnet-hostfxr-6.0 (>= 6.0.23), dotnet-hostfxr-6.0 (>= 6.0.24), dotnet-hostfxr-6.0 (>= 6.0.25), dotnet-hostfxr-6.0 (>= 6.0.26), dotnet-hostfxr-6.0 (>= 6.0.27), dotnet-hostfxr-6.0 (>= 6.0.28), dotnet-hostfxr-6.0 (>= 6.0.29), dotnet-hostfxr-6.0 (>= 6.0.30), dotnet-hostfxr-6.0 (>= 6.0.31), dotnet-hostfxr-6.0 (>= 6.0.32), dotnet-hostfxr-6.0 (>= 6.0.33), dotnet-hostfxr-6.0 (>= 6.0.35), dotnet-hostfxr-6.0 (>= 6.0.36), dotnet-runtime-deps-6.0 (>= 6.0.20), dotnet-runtime-deps-6.0 (>= 6.0.21), dotnet-runtime-deps-6.0 (>= 6.0.22), dotnet-runtime-deps-6.0 (>= 6.0.23), dotnet-runtime-deps-6.0 (>= 6.0.24), dotnet-runtime-deps-6.0 (>= 6.0.25), dotnet-runtime-deps-6.0 (>= 6.0.26), dotnet-runtime-deps-6.0 (>= 6.0.27), dotnet-runtime-deps-6.0 (>= 6.0.28), dotnet-runtime-deps-6.0 (>= 6.0.29), dotnet-runtime-deps-6.0 (>= 6.0.30), dotnet-runtime-deps-6.0 (>= 6.0.31), dotnet-runtime-deps-6.0 (>= 6.0.32), dotnet-runtime-deps-6.0 (>= 6.0.33), dotnet-runtime-deps-6.0 (>= 6.0.35), dotnet-runtime-deps-6.0 (>= 6.0.36)

  </details>

- **dotnet-runtime-7.0**
  - Latest version: 7.0.20-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-hostfxr-7.0 (>= 7.0.10), dotnet-hostfxr-7.0 (>= 7.0.11), dotnet-hostfxr-7.0 (>= 7.0.12), dotnet-hostfxr-7.0 (>= 7.0.13), dotnet-hostfxr-7.0 (>= 7.0.14), dotnet-hostfxr-7.0 (>= 7.0.15), dotnet-hostfxr-7.0 (>= 7.0.16), dotnet-hostfxr-7.0 (>= 7.0.17), dotnet-hostfxr-7.0 (>= 7.0.18), dotnet-hostfxr-7.0 (>= 7.0.19), dotnet-hostfxr-7.0 (>= 7.0.20), dotnet-hostfxr-7.0 (>= 7.0.9), dotnet-runtime-deps-7.0 (>= 7.0.10), dotnet-runtime-deps-7.0 (>= 7.0.11), dotnet-runtime-deps-7.0 (>= 7.0.12), dotnet-runtime-deps-7.0 (>= 7.0.13), dotnet-runtime-deps-7.0 (>= 7.0.14), dotnet-runtime-deps-7.0 (>= 7.0.15), dotnet-runtime-deps-7.0 (>= 7.0.16), dotnet-runtime-deps-7.0 (>= 7.0.17), dotnet-runtime-deps-7.0 (>= 7.0.18), dotnet-runtime-deps-7.0 (>= 7.0.19), dotnet-runtime-deps-7.0 (>= 7.0.20), dotnet-runtime-deps-7.0 (>= 7.0.9)

  </details>

- **dotnet-runtime-8.0**
  - Latest version: 8.0.23-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: dotnet-hostfxr-9.0 (>= 9.0.0), dotnet-hostfxr-9.0 (>= 9.0.1), dotnet-hostfxr-9.0 (>= 9.0.10), dotnet-hostfxr-9.0 (>= 9.0.11), dotnet-hostfxr-9.0 (>= 9.0.12), dotnet-hostfxr-9.0 (>= 9.0.2), dotnet-hostfxr-9.0 (>= 9.0.3), dotnet-hostfxr-9.0 (>= 9.0.4), dotnet-hostfxr-9.0 (>= 9.0.5), dotnet-hostfxr-9.0 (>= 9.0.6), dotnet-hostfxr-9.0 (>= 9.0.7), dotnet-hostfxr-9.0 (>= 9.0.8), dotnet-hostfxr-9.0 (>= 9.0.9), dotnet-runtime-deps-9.0 (>= 9.0.0), dotnet-runtime-deps-9.0 (>= 9.0.1), dotnet-runtime-deps-9.0 (>= 9.0.10), dotnet-runtime-deps-9.0 (>= 9.0.11), dotnet-runtime-deps-9.0 (>= 9.0.12), dotnet-runtime-deps-9.0 (>= 9.0.2), dotnet-runtime-deps-9.0 (>= 9.0.3), dotnet-runtime-deps-9.0 (>= 9.0.4), dotnet-runtime-deps-9.0 (>= 9.0.5), dotnet-runtime-deps-9.0 (>= 9.0.6), dotnet-runtime-deps-9.0 (>= 9.0.7), dotnet-runtime-deps-9.0 (>= 9.0.8), dotnet-runtime-deps-9.0 (>= 9.0.9)

  </details>

- **dotnet-runtime-deps-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **dotnet-runtime-deps-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: dotnet-runtime-deps-debian 6.0.21
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
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libicu | libicu78 | libicu77 | libicu76 | libicu74 | libicu72 | libicu71 | libicu70 | libicu69 | libicu68 | libicu67 | libicu66 | libicu65 | libicu63 | libicu60 | libicu57 | libicu55 | libicu52, libssl1.0.0 | libssl1.0.2 | libssl1.1 | libssl3, libstdc++6, zlib1g

  </details>

- **dotnet-sdk-10.0**
  - Latest version: 10.0.102
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **dotnet-sdk-6.0**
  - Latest version: 6.0.428-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft .NET SDK 6.0.121
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-6.0`
  - Install (apt): `sudo apt install dotnet-sdk-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-6.0 (>= 6.0.20), aspnetcore-runtime-6.0 (>= 6.0.21), aspnetcore-runtime-6.0 (>= 6.0.22), aspnetcore-runtime-6.0 (>= 6.0.23), aspnetcore-runtime-6.0 (>= 6.0.24), aspnetcore-runtime-6.0 (>= 6.0.25), aspnetcore-runtime-6.0 (>= 6.0.26), aspnetcore-runtime-6.0 (>= 6.0.27), aspnetcore-runtime-6.0 (>= 6.0.28), aspnetcore-runtime-6.0 (>= 6.0.29), aspnetcore-runtime-6.0 (>= 6.0.30), aspnetcore-runtime-6.0 (>= 6.0.31), aspnetcore-runtime-6.0 (>= 6.0.32), aspnetcore-runtime-6.0 (>= 6.0.33), aspnetcore-runtime-6.0 (>= 6.0.35), aspnetcore-runtime-6.0 (>= 6.0.36), aspnetcore-targeting-pack-6.0 (>= 6.0.20), aspnetcore-targeting-pack-6.0 (>= 6.0.21), aspnetcore-targeting-pack-6.0 (>= 6.0.22), aspnetcore-targeting-pack-6.0 (>= 6.0.23), aspnetcore-targeting-pack-6.0 (>= 6.0.24), aspnetcore-targeting-pack-6.0 (>= 6.0.25), aspnetcore-targeting-pack-6.0 (>= 6.0.26), aspnetcore-targeting-pack-6.0 (>= 6.0.27), aspnetcore-targeting-pack-6.0 (>= 6.0.28), aspnetcore-targeting-pack-6.0 (>= 6.0.29), aspnetcore-targeting-pack-6.0 (>= 6.0.30), aspnetcore-targeting-pack-6.0 (>= 6.0.31), aspnetcore-targeting-pack-6.0 (>= 6.0.32), aspnetcore-targeting-pack-6.0 (>= 6.0.33), aspnetcore-targeting-pack-6.0 (>= 6.0.35), aspnetcore-targeting-pack-6.0 (>= 6.0.36), dotnet-apphost-pack-6.0 (>= 6.0.20), dotnet-apphost-pack-6.0 (>= 6.0.21), dotnet-apphost-pack-6.0 (>= 6.0.22), dotnet-apphost-pack-6.0 (>= 6.0.23), dotnet-apphost-pack-6.0 (>= 6.0.24), dotnet-apphost-pack-6.0 (>= 6.0.25), dotnet-apphost-pack-6.0 (>= 6.0.26), dotnet-apphost-pack-6.0 (>= 6.0.27), dotnet-apphost-pack-6.0 (>= 6.0.28), dotnet-apphost-pack-6.0 (>= 6.0.29), dotnet-apphost-pack-6.0 (>= 6.0.30), dotnet-apphost-pack-6.0 (>= 6.0.31), dotnet-apphost-pack-6.0 (>= 6.0.32), dotnet-apphost-pack-6.0 (>= 6.0.33), dotnet-apphost-pack-6.0 (>= 6.0.35), dotnet-apphost-pack-6.0 (>= 6.0.36), dotnet-runtime-6.0 (>= 6.0.20), dotnet-runtime-6.0 (>= 6.0.21), dotnet-runtime-6.0 (>= 6.0.22), dotnet-runtime-6.0 (>= 6.0.23), dotnet-runtime-6.0 (>= 6.0.24), dotnet-runtime-6.0 (>= 6.0.25), dotnet-runtime-6.0 (>= 6.0.26), dotnet-runtime-6.0 (>= 6.0.27), dotnet-runtime-6.0 (>= 6.0.28), dotnet-runtime-6.0 (>= 6.0.29), dotnet-runtime-6.0 (>= 6.0.30), dotnet-runtime-6.0 (>= 6.0.31), dotnet-runtime-6.0 (>= 6.0.32), dotnet-runtime-6.0 (>= 6.0.33), dotnet-runtime-6.0 (>= 6.0.35), dotnet-runtime-6.0 (>= 6.0.36), dotnet-targeting-pack-6.0 (>= 6.0.20), dotnet-targeting-pack-6.0 (>= 6.0.21), dotnet-targeting-pack-6.0 (>= 6.0.22), dotnet-targeting-pack-6.0 (>= 6.0.23), dotnet-targeting-pack-6.0 (>= 6.0.24), dotnet-targeting-pack-6.0 (>= 6.0.25), dotnet-targeting-pack-6.0 (>= 6.0.26), dotnet-targeting-pack-6.0 (>= 6.0.27), dotnet-targeting-pack-6.0 (>= 6.0.28), dotnet-targeting-pack-6.0 (>= 6.0.29), dotnet-targeting-pack-6.0 (>= 6.0.30), dotnet-targeting-pack-6.0 (>= 6.0.31), dotnet-targeting-pack-6.0 (>= 6.0.32), dotnet-targeting-pack-6.0 (>= 6.0.33), dotnet-targeting-pack-6.0 (>= 6.0.35), dotnet-targeting-pack-6.0 (>= 6.0.36), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-7.0**
  - Latest version: 7.0.410-1
  - Architectures: amd64
  - Suite: bookworm
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
  - depends: aspnetcore-runtime-7.0 (>= 7.0.10), aspnetcore-runtime-7.0 (>= 7.0.11), aspnetcore-runtime-7.0 (>= 7.0.12), aspnetcore-runtime-7.0 (>= 7.0.13), aspnetcore-runtime-7.0 (>= 7.0.14), aspnetcore-runtime-7.0 (>= 7.0.15), aspnetcore-runtime-7.0 (>= 7.0.16), aspnetcore-runtime-7.0 (>= 7.0.17), aspnetcore-runtime-7.0 (>= 7.0.18), aspnetcore-runtime-7.0 (>= 7.0.19), aspnetcore-runtime-7.0 (>= 7.0.20), aspnetcore-runtime-7.0 (>= 7.0.9), aspnetcore-targeting-pack-7.0 (>= 7.0.10), aspnetcore-targeting-pack-7.0 (>= 7.0.11), aspnetcore-targeting-pack-7.0 (>= 7.0.12), aspnetcore-targeting-pack-7.0 (>= 7.0.13), aspnetcore-targeting-pack-7.0 (>= 7.0.14), aspnetcore-targeting-pack-7.0 (>= 7.0.15), aspnetcore-targeting-pack-7.0 (>= 7.0.16), aspnetcore-targeting-pack-7.0 (>= 7.0.17), aspnetcore-targeting-pack-7.0 (>= 7.0.18), aspnetcore-targeting-pack-7.0 (>= 7.0.19), aspnetcore-targeting-pack-7.0 (>= 7.0.20), aspnetcore-targeting-pack-7.0 (>= 7.0.9), dotnet-apphost-pack-7.0 (>= 7.0.10), dotnet-apphost-pack-7.0 (>= 7.0.11), dotnet-apphost-pack-7.0 (>= 7.0.12), dotnet-apphost-pack-7.0 (>= 7.0.13), dotnet-apphost-pack-7.0 (>= 7.0.14), dotnet-apphost-pack-7.0 (>= 7.0.15), dotnet-apphost-pack-7.0 (>= 7.0.16), dotnet-apphost-pack-7.0 (>= 7.0.17), dotnet-apphost-pack-7.0 (>= 7.0.18), dotnet-apphost-pack-7.0 (>= 7.0.19), dotnet-apphost-pack-7.0 (>= 7.0.20), dotnet-apphost-pack-7.0 (>= 7.0.9), dotnet-runtime-7.0 (>= 7.0.10), dotnet-runtime-7.0 (>= 7.0.11), dotnet-runtime-7.0 (>= 7.0.12), dotnet-runtime-7.0 (>= 7.0.13), dotnet-runtime-7.0 (>= 7.0.14), dotnet-runtime-7.0 (>= 7.0.15), dotnet-runtime-7.0 (>= 7.0.16), dotnet-runtime-7.0 (>= 7.0.17), dotnet-runtime-7.0 (>= 7.0.18), dotnet-runtime-7.0 (>= 7.0.19), dotnet-runtime-7.0 (>= 7.0.20), dotnet-runtime-7.0 (>= 7.0.9), dotnet-targeting-pack-7.0 (>= 7.0.10), dotnet-targeting-pack-7.0 (>= 7.0.11), dotnet-targeting-pack-7.0 (>= 7.0.12), dotnet-targeting-pack-7.0 (>= 7.0.13), dotnet-targeting-pack-7.0 (>= 7.0.14), dotnet-targeting-pack-7.0 (>= 7.0.15), dotnet-targeting-pack-7.0 (>= 7.0.16), dotnet-targeting-pack-7.0 (>= 7.0.17), dotnet-targeting-pack-7.0 (>= 7.0.18), dotnet-targeting-pack-7.0 (>= 7.0.19), dotnet-targeting-pack-7.0 (>= 7.0.20), dotnet-targeting-pack-7.0 (>= 7.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-sdk-8.0**
  - Latest version: 8.0.417-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 9.0.310-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft .NET SDK 9.0.308
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-sdk-9.0`
  - Install (apt): `sudo apt install dotnet-sdk-9.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft <dotnetcore@microsoft.com>
  - Section: devel
  - Priority: standard
  - depends: aspnetcore-runtime-9.0 (>= 9.0.0), aspnetcore-runtime-9.0 (>= 9.0.1), aspnetcore-runtime-9.0 (>= 9.0.10), aspnetcore-runtime-9.0 (>= 9.0.11), aspnetcore-runtime-9.0 (>= 9.0.12), aspnetcore-runtime-9.0 (>= 9.0.2), aspnetcore-runtime-9.0 (>= 9.0.3), aspnetcore-runtime-9.0 (>= 9.0.4), aspnetcore-runtime-9.0 (>= 9.0.5), aspnetcore-runtime-9.0 (>= 9.0.6), aspnetcore-runtime-9.0 (>= 9.0.7), aspnetcore-runtime-9.0 (>= 9.0.8), aspnetcore-runtime-9.0 (>= 9.0.9), aspnetcore-targeting-pack-9.0 (>= 9.0.0), aspnetcore-targeting-pack-9.0 (>= 9.0.1), aspnetcore-targeting-pack-9.0 (>= 9.0.10), aspnetcore-targeting-pack-9.0 (>= 9.0.11), aspnetcore-targeting-pack-9.0 (>= 9.0.12), aspnetcore-targeting-pack-9.0 (>= 9.0.2), aspnetcore-targeting-pack-9.0 (>= 9.0.3), aspnetcore-targeting-pack-9.0 (>= 9.0.4), aspnetcore-targeting-pack-9.0 (>= 9.0.5), aspnetcore-targeting-pack-9.0 (>= 9.0.6), aspnetcore-targeting-pack-9.0 (>= 9.0.7), aspnetcore-targeting-pack-9.0 (>= 9.0.8), aspnetcore-targeting-pack-9.0 (>= 9.0.9), dotnet-apphost-pack-9.0 (>= 9.0.0), dotnet-apphost-pack-9.0 (>= 9.0.1), dotnet-apphost-pack-9.0 (>= 9.0.10), dotnet-apphost-pack-9.0 (>= 9.0.11), dotnet-apphost-pack-9.0 (>= 9.0.12), dotnet-apphost-pack-9.0 (>= 9.0.2), dotnet-apphost-pack-9.0 (>= 9.0.3), dotnet-apphost-pack-9.0 (>= 9.0.4), dotnet-apphost-pack-9.0 (>= 9.0.5), dotnet-apphost-pack-9.0 (>= 9.0.6), dotnet-apphost-pack-9.0 (>= 9.0.7), dotnet-apphost-pack-9.0 (>= 9.0.8), dotnet-apphost-pack-9.0 (>= 9.0.9), dotnet-runtime-9.0 (>= 9.0.0), dotnet-runtime-9.0 (>= 9.0.1), dotnet-runtime-9.0 (>= 9.0.10), dotnet-runtime-9.0 (>= 9.0.11), dotnet-runtime-9.0 (>= 9.0.12), dotnet-runtime-9.0 (>= 9.0.2), dotnet-runtime-9.0 (>= 9.0.3), dotnet-runtime-9.0 (>= 9.0.4), dotnet-runtime-9.0 (>= 9.0.5), dotnet-runtime-9.0 (>= 9.0.6), dotnet-runtime-9.0 (>= 9.0.7), dotnet-runtime-9.0 (>= 9.0.8), dotnet-runtime-9.0 (>= 9.0.9), dotnet-targeting-pack-9.0 (>= 9.0.0), dotnet-targeting-pack-9.0 (>= 9.0.1), dotnet-targeting-pack-9.0 (>= 9.0.10), dotnet-targeting-pack-9.0 (>= 9.0.11), dotnet-targeting-pack-9.0 (>= 9.0.12), dotnet-targeting-pack-9.0 (>= 9.0.2), dotnet-targeting-pack-9.0 (>= 9.0.3), dotnet-targeting-pack-9.0 (>= 9.0.4), dotnet-targeting-pack-9.0 (>= 9.0.5), dotnet-targeting-pack-9.0 (>= 9.0.6), dotnet-targeting-pack-9.0 (>= 9.0.7), dotnet-targeting-pack-9.0 (>= 9.0.8), dotnet-targeting-pack-9.0 (>= 9.0.9), netstandard-targeting-pack-2.1 (>= 2.1.0)

  </details>

- **dotnet-targeting-pack-10.0**
  - Latest version: 10.0.2
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **dotnet-targeting-pack-6.0**
  - Latest version: 6.0.36-1
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft.NETCore.App.Ref 6.0.21
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
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Latest version: 9.0.12-1
  - Architectures: amd64
  - Suite: bookworm
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


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20260120.1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
  - Components: main
  - Description: Sysinternals jcd (Jump Change Directory)
  - Install: `sudo apt-get install jcd`
  - Install (apt): `sudo apt install jcd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>

  </details>


### <a id="packages-K"></a>K

- **kubelogin**
  - Latest version: 0.2.14-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: This is a client-go credential (exec) plugin implementing azure authentication. This plugin provides features that are not available in kubectl. It is supported on kubectl v1.11+
  - Homepage: https://github.com/Azure/kubelogin
  - Install: `sudo apt-get install kubelogin`
  - Install (apt): `sudo apt install kubelogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3

  </details>

- **kubelogin-dbgsym**
  - Latest version: 0.2.14-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for kubelogin
  - Install: `sudo apt-get install kubelogin-dbgsym`
  - Install (apt): `sudo apt install kubelogin-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: kubelogin (= 0.2.10-debian12u1), kubelogin (= 0.2.10-debian12u2), kubelogin (= 0.2.10-debian12u3), kubelogin (= 0.2.12-debian12u1), kubelogin (= 0.2.12-debian12u2), kubelogin (= 0.2.13-debian12u1), kubelogin (= 0.2.14-debian12u1)

  </details>


### <a id="packages-L"></a>L

- **libmsquic**
  - Latest version: 2.5.6
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft Defender (Production)
  - Install: `sudo apt-get install mdatp`
  - Install (apt): `sudo apt install mdatp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Defender Group <mdatplinuxpackages@microsoft.com>
  - Section: devel
  - Priority: optional
  - depends: auditd, iptables, libc6 (>= 2.23), libpcre2-8-0, libpcre3, mde-netfilter, uuid-runtime

  </details>

- **mde-netfilter**
  - Latest version: 100.69.78
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Latest version: 0.30.1-debian12u1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
  - Components: main
  - Description: Buildx is a Docker CLI plugin for extended build capabilities with BuildKit.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install moby-buildx`
  - Install (apt): `sudo apt install moby-buildx`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - Priority: optional
  - depends: libc6 (>= 2.34), libssl3
  - recommends: moby-cli
  - conflicts: docker-buildx-plugin, docker-ce, docker-ee
  - replaces: docker-buildx-plugin

  </details>

- **moby-buildx-dbgsym**
  - Latest version: 0.30.1-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for moby-buildx
  - Install: `sudo apt-get install moby-buildx-dbgsym`
  - Install (apt): `sudo apt install moby-buildx-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: moby-buildx (= 0.30.0-debian12u1), moby-buildx (= 0.30.1-debian12u1)

  </details>

- **moby-cli**
  - Latest version: 29.1.4-debian12u1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34)
  - recommends: ca-certificates, git, moby-buildx, moby-engine, pigz, xz-utils
  - suggests: moby-engine
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-cli-dbgsym**
  - Latest version: 29.1.4-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for moby-cli
  - Install: `sudo apt-get install moby-cli-dbgsym`
  - Install (apt): `sudo apt install moby-cli-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: moby-cli (= 29.1.2-debian12u1), moby-cli (= 29.1.2-debian12u2), moby-cli (= 29.1.3-debian12u1), moby-cli (= 29.1.4-debian12u1)

  </details>

- **moby-compose**
  - Latest version: 5.0.1-debian12u1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), moby-cli
  - recommends: moby-cli
  - conflicts: docker-ce, docker-ce-cli, docker-compose-plugin, docker-ee, docker-ee-cli

  </details>

- **moby-compose-dbgsym**
  - Latest version: 5.0.1-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for moby-compose
  - Install: `sudo apt-get install moby-compose-dbgsym`
  - Install (apt): `sudo apt install moby-compose-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: moby-compose (= 5.0.0-debian12u1), moby-compose (= 5.0.1-debian12u1)

  </details>

- **moby-containerd**
  - Latest version: 2.2.1-debian12u1
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: libc6 (>= 2.34), moby-runc (>= 1.0.2), moby-runc (>= 1.1.0)
  - recommends: ca-certificates, pigz, xz-utils
  - conflicts: containerd, containerd.io, docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, moby-engine (<= 3.0.12)
  - replaces: containerd, containerd.io, docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io
  - provides: containerd, containerd.io

  </details>

- **moby-engine**
  - Latest version: 29.1.4-debian12u2
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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
  - depends: iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libnftables1 (>= 1.0.2), libsystemd0, moby-containerd (>= 1.4.3), moby-containerd (>= 1.7.0), moby-runc (>= 1.0.2), moby-runc (>= 1.1.0), moby-tini (>= 0.19.0), nftables
  - recommends: apparmor, ca-certificates, iptables, kmod, moby-cli, pigz, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite, git
  - conflicts: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-engine-dbgsym**
  - Latest version: 29.1.4-debian12u2
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for moby-engine
  - Install: `sudo apt-get install moby-engine-dbgsym`
  - Install (apt): `sudo apt install moby-engine-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: moby-engine (= 29.1.3-debian12u1), moby-engine (= 29.1.4-debian12u1), moby-engine (= 29.1.4-debian12u2)

  </details>

- **moby-runc**
  - Latest version: 1.4.0-debian12u2
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
  - Components: main
  - Description: CLI tool for spawning and running containers according to the OCI specification
  - Homepage: https://github.com/opencontainers/runc
  - Install: `sudo apt-get install moby-runc`
  - Install (apt): `sudo apt install moby-runc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - Priority: optional
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.5.0)
  - suggests: moby-containerd
  - conflicts: moby-engine (<= 3.0.10), runc, runc-io
  - replaces: runc, runc (<= 1.2.7), runc (<= 1.2.8), runc (<= 1.3.0), runc (<= 1.3.1), runc (<= 1.3.2), runc (<= 1.3.3), runc (<= 1.3.4), runc (<= 1.4.0), runc-io (<= 1.2.7), runc-io (<= 1.2.8), runc-io (<= 1.3.0), runc-io (<= 1.3.1), runc-io (<= 1.3.2), runc-io (<= 1.3.3), runc-io (<= 1.3.4), runc-io (<= 1.4.0)
  - provides: runc, runc (= 1.2.7), runc (= 1.2.8), runc (= 1.3.0), runc (= 1.3.1), runc (= 1.3.2), runc (= 1.3.3), runc (= 1.3.4), runc (= 1.4.0)

  </details>

- **moby-runc-dbgsym**
  - Latest version: 1.4.0-debian12u2
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for moby-runc
  - Install: `sudo apt-get install moby-runc-dbgsym`
  - Install (apt): `sudo apt install moby-runc-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: moby-runc (= 1.2.7-debian12u1), moby-runc (= 1.2.8-debian12u1), moby-runc (= 1.2.8-debian12u2), moby-runc (= 1.3.0-debian12u1), moby-runc (= 1.3.1-debian12u1), moby-runc (= 1.3.1-debian12u2), moby-runc (= 1.3.2-debian12u1), moby-runc (= 1.3.2-debian12u2), moby-runc (= 1.3.3-debian12u1), moby-runc (= 1.3.3-debian12u2), moby-runc (= 1.3.4-debian12u1), moby-runc (= 1.3.4-debian12u2), moby-runc (= 1.4.0-debian12u1), moby-runc (= 1.4.0-debian12u2)

  </details>

- **moby-tini**
  - Latest version: 0.19.0-debian12u2
  - Architectures: amd64, arm64, armhf
  - Suite: bookworm
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

- **msft-golang**
  - Latest version: 1.25.6-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
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

- **msft-golang-dbgsym**
  - Latest version: 1.25.6-debian12u1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: debug symbols for msft-golang
  - Install: `sudo apt-get install msft-golang-dbgsym`
  - Install (apt): `sudo apt install msft-golang-dbgsym`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: debug
  - Priority: optional
  - depends: msft-golang (= 1.24.0-debian12u1), msft-golang (= 1.24.1-debian12u1), msft-golang (= 1.24.10-debian12u1), msft-golang (= 1.24.11-debian12u1), msft-golang (= 1.24.12-debian12u1), msft-golang (= 1.24.2-debian12u1), msft-golang (= 1.24.4-debian12u1), msft-golang (= 1.24.5-debian12u1), msft-golang (= 1.24.6-debian12u1), msft-golang (= 1.24.7-debian12u1), msft-golang (= 1.24.9-debian12u1), msft-golang (= 1.25.1-debian12u1), msft-golang (= 1.25.3-debian12u1), msft-golang (= 1.25.4-debian12u1), msft-golang (= 1.25.5-debian12u1), msft-golang (= 1.25.6-debian12u1)

  </details>

- **msodbcsql17**
  - Latest version: 17.10.6.1-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
  - Components: main
  - Description: Microsoft Build of OpenJDK 11
  - Install: `sudo apt-get install msopenjdk-11`
  - Install (apt): `sudo apt install msopenjdk-11`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, java-common, libc6, zlib1g
  - recommends: fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-17**
  - Latest version: 17.0.17-1
  - Architectures: amd64, arm64
  - Suite: bookworm
  - Components: main
  - Description: Microsoft Build of OpenJDK 17
  - Install: `sudo apt-get install msopenjdk-17`
  - Install (apt): `sudo apt install msopenjdk-17`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Package Maintainers <openjdk@microsoft.com>
  - Section: java
  - Priority: optional
  - depends: ca-certificates, java-common, libc6, zlib1g
  - recommends: fonts-dejavu-core, fonts-dejavu-extra, libasound2, libfontconfig1, libfreetype6, libx11-6, libxext6, libxi6, libxrender1, libxtst6
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java10-runtime, java10-runtime-headless, java10-sdk, java10-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java12-runtime, java12-runtime-headless, java12-sdk, java12-sdk-headless, java13-runtime, java13-runtime-headless, java13-sdk, java13-sdk-headless, java14-runtime, java14-runtime-headless, java14-sdk, java14-sdk-headless, java15-runtime, java15-runtime-headless, java15-sdk, java15-sdk-headless, java16-runtime, java16-runtime-headless, java16-sdk, java16-sdk-headless, java17-runtime, java17-runtime-headless, java17-sdk, java17-sdk-headless, java2-runtime, java2-runtime-headless, java2-sdk, java2-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-runtime, java8-runtime-headless, java8-sdk, java8-sdk-headless, java9-runtime, java9-runtime-headless, java9-sdk, java9-sdk-headless

  </details>

- **msopenjdk-21**
  - Latest version: 21.0.9-1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
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

- **mssql-tools**
  - Latest version: 17.10.1.1-1
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Suite: bookworm
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
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Latest version: 1.1-debian12
  - Architectures: all
  - Suite: bookworm
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
  - Suite: bookworm
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell`
  - Install (apt): `sudo apt install powershell`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: optional
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-lts**
  - Latest version: 7.4.13-1.deb
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell-lts`
  - Install (apt): `sudo apt install powershell-lts`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: optional
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **powershell-preview**
  - Latest version: 7.6.0-preview.5-1.deb
  - Architectures: amd64
  - Suite: bookworm
  - Components: main
  - Description: PowerShell is an automation and configuration management platform.
  - Homepage: https://microsoft.com/powershell
  - Install: `sudo apt-get install powershell-preview`
  - Install (apt): `sudo apt install powershell-preview`
  <details>
  <summary>More metadata</summary>

  - Maintainer: PowerShell Team <PowerShellTeam@hotmail.com>
  - Section: shells
  - Priority: optional
  - depends: libc6, libgcc1, libgssapi-krb5-2, libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libicu76|libicu74|libicu72|libicu71|libicu70|libicu69|libicu68|libicu67|libicu66|libicu65|libicu63|libicu60|libicu57|libicu55|libicu52, libssl3|libssl1.1|libssl1.0.2|libssl1.0.0, libstdc++6, zlib1g

  </details>

- **procdump**
  - Latest version: 3.5.0
  - Architectures: amd64, arm64
  - Suite: bookworm
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
  - Suite: bookworm
  - Components: main
  - Description: Sysinternals process monitor utility
  - Install: `sudo apt-get install procmon`
  - Install (apt): `sudo apt install procmon`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libelf1 (>= 0.0), sysinternalsebpf (>= 1.4), sysinternalsebpf (>= 1.5.0)

  </details>


### <a id="packages-S"></a>S

- **scx**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: bookworm
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
  - Latest version: 1.5.0
  - Architectures: amd64
  - Suite: bookworm
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
  - Suite: bookworm
  - Components: main
  - Description: A system monitor based on eBPF, ported from Windows, that outputs events to Syslog
  - Install: `sudo apt-get install sysmonforlinux`
  - Install (apt): `sudo apt install sysmonforlinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: libc6 (>= 2.14), libgcc1 (>= 1:3.0), libssl-dev, libstdc++6 (>= 5), libxml2 (>= 2.7.4), sysinternalsebpf (>= 1.2.0), sysinternalsebpf (>= 1.5.0)

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 2.0.28
  - Architectures: amd64, arm64
  - Suite: bookworm
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
- Repo tags: microsoft, apt, debian
- Key tags: microsoft
