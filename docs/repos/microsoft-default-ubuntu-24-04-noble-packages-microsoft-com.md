# Microsoft - ubuntu-24.04 - default

## Repository
- Repository ID: `microsoft-default-ubuntu-24-04-noble-packages-microsoft-com`
- Base URL: `https://packages.microsoft.com/ubuntu/24.04/prod`
- Host: `packages.microsoft.com`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/24.04
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Suites
- Suite: `noble`
  - Components: main
  - Architectures: amd64, arm64, armhf
  - Observed OSes: ubuntu-24.04

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

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/24.04/prod noble main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-24-04-noble-packages-microsoft-com-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [arch=amd64,arm64,armhf signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] https://packages.microsoft.com/ubuntu/24.04/prod noble main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-24-04-noble-packages-microsoft-com-noble.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (68)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-I">I</a> <a href="#packages-J">J</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-A"></a>A

- **aadsshlogin**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: AAD NSS, PAM and certhandler extensions
  - Install: `sudo apt-get install aadsshlogin`
  - Install (apt): `sudo apt install aadsshlogin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libpam0g (>= 0.99.7.1), libselinux1 (>= 3.1~), libsemanage2 (>= 2.0.32), libssl3t64 (>= 3.0.0), libuuid1 (>= 2.16), openssh-server (>=6.9), passwd
  - preDepends: grep, sed
  - conflicts: aadlogin

  </details>

- **aadsshlogin-selinux**
  - Latest version: 1.0.033070001
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Selinux configuration for AAD NSS and PAM extensions.
  - Install: `sudo apt-get install aadsshlogin-selinux`
  - Install (apt): `sudo apt install aadsshlogin-selinux`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yancho Yanev <yyanev@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: policycoreutils (>=3.5-2), selinux-policy-default, selinux-utils
  - conflicts: aadlogin-selinux

  </details>

- **acms-client**
  - Latest version: 5.31
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: ACMS client for dSMS
  - Install: `sudo apt-get install acms-client`
  - Install (apt): `sudo apt install acms-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: dsmsdev
  - Priority: extra
  - depends: curl, gnupg, libacl1, libcurl4, libprotobuf-dev, libuuid1, libxml2

  </details>

- **adutil**
  - Latest version: 1.1.617
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: no description given
  - Homepage: http://example.com/no-uri-given
  - Install: `sudo apt-get install adutil`
  - Install (apt): `sudo apt install adutil`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@476f6f860e41>
  - Section: default
  - Priority: optional
  - depends: krb5-user, packagekit, realmd, software-properties-common

  </details>

- **azcmagent**
  - Latest version: 1.60.03293.809
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Architectures: amd64, arm64
  - Suite: noble
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

- **azfilesauth**
  - Latest version: 1.0-8
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Authentication utility for Azure Files with Kerberos
  - Install: `sudo apt-get install azfilesauth`
  - Install (apt): `sudo apt install azfilesauth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Ritvik Budhiraja <rbudhiraja@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libgcc-s1 (>= 3.3.1), libkrb5-3 (>= 1.6.dfsg.2), libstdc++6 (>= 13.1), python3 (>= 3.6), python3-requests

  </details>

- **aziot-edge**
  - Latest version: 1.5.21-1
  - Architectures: amd64, arm64
  - Suite: noble
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

- **aziot-identity-service**
  - Latest version: 1.5.6-1
  - Architectures: amd64, arm64
  - Suite: noble
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
  - depends: libc6 (>= 2.38), libgcc-s1 (>= 4.2), libssl3t64 (>= 3.0.0), libtss2-esys-3.0.2-0t64 (>= 2.3.1), libtss2-mu-4.0.1-0t64 (>= 3.0.1), libtss2-rc0t64 (>= 3.0.1), libtss2-tctildr0t64 (>= 3.0.1), psmisc
  - conflicts: iotedge, libiothsm-std

  </details>

- **aznfs**
  - Latest version: 3.0.11
  - Architectures: amd64, arm64
  - Suite: noble
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

- **azure-acr-credential-provider**
  - Latest version: 1.34.3-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: The acr credential provider is responsible for providing ACR credentials for kubelet
  - Homepage: https://github.com/kubernetes-sigs/cloud-provider-azure
  - Install: `sudo apt-get install azure-acr-credential-provider`
  - Install (apt): `sudo apt install azure-acr-credential-provider`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3

  </details>

- **azure-functions-core-tools**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: noble
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

- **azure-functions-core-tools-4**
  - Latest version: 4.6.0-1
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Architectures: amd64, arm64
  - Suite: noble
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

- **containernetworking-plugins**
  - Latest version: 1.9.0-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: reference cni plugins (not azure but used by kubenet and containerd)
  - Homepage: https://github.com/containernetworking/plugins
  - Install: `sudo apt-get install containernetworking-plugins`
  - Install (apt): `sudo apt install containernetworking-plugins`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3
  - replaces: cni-plugins (<< 1.6.2), cni-plugins (<< 1.7.1), cni-plugins (<< 1.8.0), cni-plugins (<< 1.9.0)
  - provides: cni-plugins (= 1.6.2), cni-plugins (= 1.7.1), cni-plugins (= 1.8.0), cni-plugins (= 1.9.0)

  </details>


### <a id="packages-D"></a>D

- **dcgm-exporter**
  - Latest version: 4.7.1-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Exports Nvidia GPU Metrics to Prometheus
  - Homepage: https://github.com/NVIDIA/dcgm-exporter
  - Install: `sudo apt-get install dcgm-exporter`
  - Install (apt): `sudo apt install dcgm-exporter`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: datacenter-gpu-manager-4-core (= 1:4.4.1-1), datacenter-gpu-manager-4-core (= 1:4.4.2-1), datacenter-gpu-manager-4-proprietary (= 1:4.4.1-1), datacenter-gpu-manager-4-proprietary (= 1:4.4.2-1), libc6 (>= 2.34), libcap2-bin

  </details>

- **dotnet-apphost-pack-6.0**
  - Latest version: 6.0.30-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Microsoft.NETCore.App.Host 6.0.30
  - Homepage: https://github.com/dotnet/core
  - Install: `sudo apt-get install dotnet-apphost-pack-6.0`
  - Install (apt): `sudo apt install dotnet-apphost-pack-6.0`
  <details>
  <summary>More metadata</summary>

  - Maintainer: .NET Team <dotnetpackages@dotnetfoundation.org>
  - Section: libs
  - Priority: standard

  </details>


### <a id="packages-I"></a>I

- **intune-portal**
  - Latest version: 1.2508.17-noble
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Microsoft Intune
  - Install: `sudo apt-get install intune-portal`
  - Install (apt): `sudo apt install intune-portal`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft
  - Section: utils
  - Priority: optional
  - depends: gnome-keyring (>= 3.36), libatk1.0-0t64 (>= 1.12.4), libc6 (>= 2.34), libc6 (>= 2.38), libcurl4t64 (>= 7.16.2), libdbus-1-3 (>= 1.9.14), libglib2.0-0t64 (>= 2.70.0), libgtk-3-0t64 (>= 3.13.7), libgtk-3-0t64 (>= 3.21.4), libp11-kit0 (>= 0.25.0), libpam-pwquality (>= 1.4.0-2), libpam0g (>= 0.99.7.1), libpango-1.0-0 (>= 1.14.0), libsecret-1-0 (>= 0.7), libsoup-3.0-0 (>= 2.4.0), libsqlite3-0 (>= 3.7.14), libssl3t64 (>= 3.0.0), libstdc++6 (>= 13), libsystemd0, libuuid1 (>= 2.16), libwebkit2gtk-4.1-0 (>= 2.39.90), libx11-6, microsoft-identity-broker (>= 2.0.1), openjdk-11-jre (>= 11), zlib1g (>= 1:1.2.0)
  - recommends: microsoft-edge-stable (>= 102)

  </details>


### <a id="packages-J"></a>J

- **jaz**
  - Latest version: 0.0.0~preview+20260120.1
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Suite: noble
  - Components: main
  - Description: Sysinternals jcd (Jump Change Directory)
  - Install: `sudo apt-get install jcd`
  - Install (apt): `sudo apt install jcd`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>

  </details>


### <a id="packages-K"></a>K

- **k8s-device-plugin**
  - Latest version: 0.17.3-ubuntu24.04u8
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: NVIDIA device plugin for Kubernetes
  - Homepage: https://github.com/NVIDIA/k8s-device-plugin
  - Install: `sudo apt-get install k8s-device-plugin`
  - Install (apt): `sudo apt install k8s-device-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), openssl

  </details>

- **kubeadm**
  - Latest version: 1.35.0-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Command-line utility for administering a Kubernetes cluster
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubeadm`
  - Install (apt): `sudo apt install kubeadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3
  - replaces: kubernetes-kubeadm (<< 1.31.100), kubernetes-kubeadm (<< 1.31.13), kubernetes-kubeadm (<< 1.31.14), kubernetes-kubeadm (<< 1.32.10), kubernetes-kubeadm (<< 1.32.9), kubernetes-kubeadm (<< 1.33.2), kubernetes-kubeadm (<< 1.33.5), kubernetes-kubeadm (<< 1.33.6), kubernetes-kubeadm (<< 1.33.7), kubernetes-kubeadm (<< 1.34.0), kubernetes-kubeadm (<< 1.34.1), kubernetes-kubeadm (<< 1.34.2), kubernetes-kubeadm (<< 1.34.3), kubernetes-kubeadm (<< 1.35.0)
  - provides: kubernetes-kubeadm (= 1.31.100), kubernetes-kubeadm (= 1.31.13), kubernetes-kubeadm (= 1.31.14), kubernetes-kubeadm (= 1.32.10), kubernetes-kubeadm (= 1.32.9), kubernetes-kubeadm (= 1.33.2), kubernetes-kubeadm (= 1.33.5), kubernetes-kubeadm (= 1.33.6), kubernetes-kubeadm (= 1.33.7), kubernetes-kubeadm (= 1.34.0), kubernetes-kubeadm (= 1.34.1), kubernetes-kubeadm (= 1.34.2), kubernetes-kubeadm (= 1.34.3), kubernetes-kubeadm (= 1.35.0)

  </details>

- **kubectl**
  - Latest version: 1.35.0-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Command-line utility for interacting with a Kubernetes cluster
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubectl`
  - Install (apt): `sudo apt install kubectl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3
  - conflicts: kubernetes, kubernetes-client

  </details>

- **kubelet**
  - Latest version: 1.35.0-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: Node agent for Kubernetes clusters
  - Homepage: https://github.com/kubernetes/kubernetes
  - Install: `sudo apt-get install kubelet`
  - Install (apt): `sudo apt install kubelet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3
  - conflicts: kubernetes

  </details>

- **kubelogin**
  - Latest version: 0.2.14-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
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

- **kubernetes-coredns**
  - Latest version: 1.13.2-ubuntu24.04u3
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: CoreDNS is a DNS server/forwarder, that chains plugins. Each plugin performs a (DNS) function.
  - Homepage: https://github.com/coredns/coredns
  - Install: `sudo apt-get install kubernetes-coredns`
  - Install (apt): `sudo apt install kubernetes-coredns`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3

  </details>

- **kubernetes-cri-tools**
  - Latest version: 1.34.0-ubuntu24.04u2
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: foo description
  - Homepage: https://github.com/kubernetes-sigs/cri-tools
  - Install: `sudo apt-get install kubernetes-cri-tools`
  - Install (apt): `sudo apt install kubernetes-cri-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), libssl3

  </details>


### <a id="packages-L"></a>L

- **libkmpp**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp`
  - Install (apt): `sudo apt install libkmpp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-client**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-client`
  - Install (apt): `sudo apt install libkmpp-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-containers**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers`
  - Install (apt): `sudo apt install libkmpp-containers`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-containers-client**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-client`
  - Install (apt): `sudo apt install libkmpp-containers-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-containers-dev**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-dev`
  - Install (apt): `sudo apt install libkmpp-containers-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-containers-test**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-containers-test`
  - Install (apt): `sudo apt install libkmpp-containers-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libkmpp-dev**
  - Latest version: 3.1.0-212-1
  - Architectures: amd64
  - Suite: noble
  - Components: main
  - Description: Key Material and Protection Platform
  - Install: `sudo apt-get install libkmpp-dev`
  - Install (apt): `sudo apt install libkmpp-dev`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: devel
  - Priority: optional
  - depends: libatomic1, libjansson4, libtss2-esys-3.0.2-0, libtss2-fapi1, libtss2-rc0, symcrypt

  </details>

- **libmsquic**
  - Latest version: 2.5.6
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - depends: libnl-route-3-200, libnuma1, libssl3, libssl3t64, libxdp1
  - conflicts: libmsquic-debug
  - provides: libmsquic

  </details>


### <a id="packages-M"></a>M

- **mdatp**
  - Latest version: 101.25102.0005
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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

- **moby-buildx**
  - Latest version: 0.30.1-ubuntu24.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - depends: libc6 (>= 2.34), libssl3
  - recommends: moby-cli
  - conflicts: docker-buildx-plugin, docker-ce, docker-ee
  - replaces: docker-buildx-plugin

  </details>

- **moby-cli**
  - Latest version: 29.1.4-ubuntu24.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - conflicts: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ce-cli, docker-ee, docker-ee-cli, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-compose**
  - Latest version: 5.0.1-ubuntu24.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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

- **moby-containerd**
  - Latest version: 2.2.1-ubuntu24.04u1
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - Latest version: 29.1.4-ubuntu24.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - conflicts: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker, docker-ce, docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package

  </details>

- **moby-runc**
  - Latest version: 1.4.0-ubuntu24.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: moby-engine (<= 3.0.10), runc, runc-io
  - replaces: runc, runc (<= 1.2.7), runc (<= 1.2.8), runc (<= 1.3.0), runc (<= 1.3.1), runc (<= 1.3.2), runc (<= 1.3.3), runc (<= 1.3.4), runc (<= 1.4.0), runc-io (<= 1.2.7), runc-io (<= 1.2.8), runc-io (<= 1.3.0), runc-io (<= 1.3.1), runc-io (<= 1.3.2), runc-io (<= 1.3.3), runc-io (<= 1.3.4), runc-io (<= 1.4.0)
  - provides: runc, runc (= 1.2.7), runc (= 1.2.8), runc (= 1.3.0), runc (= 1.3.1), runc (= 1.3.2), runc (= 1.3.3), runc (= 1.3.4), runc (= 1.4.0)

  </details>

- **moby-tini**
  - Latest version: 0.19.0-ubuntu24.04u2
  - Architectures: amd64, arm64, armhf
  - Suite: noble
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

- **msft-golang**
  - Latest version: 1.25.6-ubuntu24.04u1
  - Architectures: amd64, arm64
  - Suite: noble
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

- **msodbcsql18**
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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

- **mssql-tools18**
  - Latest version: 18.6.1.1-1
  - Architectures: amd64, arm64
  - Suite: noble
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

- **nvidia-device-plugin**
  - Latest version: 0.18.1-ubuntu24.04u3
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: NVIDIA device plugin for Kubernetes
  - Homepage: https://github.com/NVIDIA/k8s-device-plugin
  - Install: `sudo apt-get install nvidia-device-plugin`
  - Install (apt): `sudo apt install nvidia-device-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Azure Container Upstream
  - Section: -
  - depends: libc6 (>= 2.34), openssl
  - conflicts: k8s-device-plugin
  - replaces: k8s-device-plugin (<< 0.17.4)
  - provides: k8s-device-plugin (= 0.17.4), k8s-device-plugin (= 0.18.0), k8s-device-plugin (= 0.18.1)

  </details>


### <a id="packages-O"></a>O

- **omi**
  - Latest version: 1.9.3.0
  - Architectures: amd64
  - Suite: noble
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
  - Latest version: 1.2-ubuntu24.04
  - Architectures: all
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
  - Components: main
  - Description: Sysinternals process dump utility
  - Install: `sudo apt-get install procdump`
  - Install (apt): `sudo apt install procdump`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Sysinternals <syssite@microsoft.com>
  - depends: gdb (>= 7.6.1), zlib1g

  </details>

- **procmon**
  - Latest version: 2.1.0
  - Architectures: amd64
  - Suite: noble
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
  - Suite: noble
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

- **symcrypt**
  - Latest version: 103.8.0-1
  - Architectures: amd64, arm64
  - Suite: noble
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
  - Latest version: 1.7.0-1~3.0
  - Architectures: amd64, arm64
  - Suite: noble
  - Components: main
  - Description: SymCrypt cryptography integration for OpenSSL
  - Install: `sudo apt-get install symcrypt-openssl`
  - Install (apt): `sudo apt install symcrypt-openssl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft Corp
  - Section: admin
  - Priority: optional
  - depends: openssl (<< 3.1.0), openssl (>= 3.0.0), symcrypt

  </details>

- **sysinternalsebpf**
  - Latest version: 1.5.0
  - Architectures: amd64
  - Suite: noble
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
  - Suite: noble
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
  - Suite: noble
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
