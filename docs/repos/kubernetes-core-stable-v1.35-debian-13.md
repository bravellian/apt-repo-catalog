# Kubernetes core stable v1.35 - Debian 13 (Trixie) (debian-13)

## Repository
- Repository ID: `kubernetes-core-stable-v1.35-debian-13`
- OS: `debian-13`
- Source: `https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

## Key reference
- Key ID: `kubernetes-release-key-234654da9a296436`
- Expected fingerprints:
  - DE15B14486CD377B9E876E1A234654DA9A296436
- Key source URL: https://pkgs.k8s.io/core:/stable:/v1.35/deb/Release.key

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kubernetes-release-key-234654da9a296436.asc | gpg --dearmor | sudo tee /usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg] https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes-core-stable-v1.35-debian-13.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kubernetes-release-key-234654da9a296436.asc -o /tmp/kubernetes-release-key-234654da9a296436.asc
gpg --dearmor /tmp/kubernetes-release-key-234654da9a296436.asc
sudo install -m 0644 /tmp/kubernetes-release-key-234654da9a296436.gpg /usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg] https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes-core-stable-v1.35-debian-13.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (5)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-K">K</a>
</div>


### <a id="packages-C"></a>C

- **cri-tools**
  - Latest version: 1.35.0-1.1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: /
  - Description: Command-line utility for interacting with a container runtime
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install cri-tools`
  - Install (apt): `sudo apt install cri-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <dev@kubernetes.io>
  - Section: admin
  - Priority: optional

  </details>


### <a id="packages-K"></a>K

- **kubeadm**
  - Latest version: 1.35.0-1.1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: /
  - Description: Command-line utility for administering a Kubernetes cluster
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install kubeadm`
  - Install (apt): `sudo apt install kubeadm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <dev@kubernetes.io>
  - Section: admin
  - Priority: optional
  - depends: cri-tools (>= 1.30.0)

  </details>

- **kubectl**
  - Latest version: 1.35.0-1.1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: /
  - Description: Command-line utility for interacting with a Kubernetes cluster
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install kubectl`
  - Install (apt): `sudo apt install kubectl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <dev@kubernetes.io>
  - Section: admin
  - Priority: optional

  </details>

- **kubelet**
  - Latest version: 1.35.0-1.1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: /
  - Description: Node agent for Kubernetes clusters
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install kubelet`
  - Install (apt): `sudo apt install kubelet`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <dev@kubernetes.io>
  - Section: net
  - Priority: optional
  - depends: iptables (>= 1.4.21), kubernetes-cni (>= 1.2.0), libc6, mount, util-linux

  </details>

- **kubernetes-cni**
  - Latest version: 1.8.0-1.1
  - Architectures: amd64, arm64, ppc64el, s390x
  - Suite: /
  - Description: Binaries required to provision kubernetes container networking
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install kubernetes-cni`
  - Install (apt): `sudo apt install kubernetes-cni`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <dev@kubernetes.io>
  - Section: net
  - Priority: optional

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
