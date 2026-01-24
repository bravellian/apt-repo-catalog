# Docker - Debian (Stretch) - stable (debian-9)

## Repository
- Repository ID: `docker-debian-stretch-stable`
- OS: `debian-9`
- Source: `https://download.docker.com/linux/debian stretch stable`

## Upstream documentation
- Documentation URL: https://docs.docker.com/engine/install/debian
- Key documentation URL: https://docs.docker.com/engine/install/ubuntu

## Key reference
- Key ID: `docker-gpg-8d81803c0ebfcd88`
- Expected fingerprints:
  - 9DC858229FC7DD38854AE2D88D81803C0EBFCD88
- Key source URL: https://download.docker.com/linux/ubuntu/gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc | gpg --dearmor | sudo tee /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-stretch-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/debian stretch stable" | sudo tee /etc/apt/sources.list.d/docker-debian-stretch-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (3)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **containerd.io**
  - Latest version: 1.4.3-1
  - Architectures: amd64
  - Suite: stretch
  - Components: stable
  - Description: An open and reliable container runtime
  - Homepage: https://containerd.io
  - Install: `sudo apt-get install containerd.io`
  - Install (apt): `sudo apt install containerd.io`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Containerd team <help@containerd.io>
  - Section: devel
  - Priority: optional
  - depends: init-system-helpers (>= 1.18~), libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>


### <a id="packages-D"></a>D

- **docker-ce**
  - Latest version: 5:19.03.15~3-0~debian-stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://dockerproject.org
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io, containerd.io (>= 1.2.2-3), docker-ce-cli, init-system-helpers (>= 1.18~), iptables, libapparmor1 (>= 2.6~devel), libc6 (>= 2.17), libc6 (>= 2.3.2), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, git, libltdl7, pigz, xz-utils
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:19.03.15~3-0~debian-stretch
  - Architectures: amd64
  - Suite: stretch
  - Components: stable
  - Description: Docker CLI: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce-cli`
  - Install (apt): `sudo apt install docker-ce-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: libc6 (>= 2.3.2), libltdl7 (>= 2.4.6)
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Docker APT repository for Debian
- Repo tags: docker, apt, debian
