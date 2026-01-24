# Docker - Ubuntu (Bionic) - stable (ubuntu-18.04)

## Repository
- Repository ID: `docker-ubuntu-bionic-stable`
- OS: `ubuntu-18.04`
- Source: `https://download.docker.com/linux/ubuntu bionic stable`

## Upstream documentation
- Documentation URL: https://docs.docker.com/engine/install/ubuntu
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
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-bionic-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu bionic stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-bionic-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (7)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **containerd.io**
  - Latest version: 1.6.21-1
  - Architectures: amd64
  - Suite: bionic
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
  - depends: libc6 (>= 2.14), libc6 (>= 2.17), libc6 (>= 2.3.2), libseccomp2 (>= 2.1.0), libseccomp2 (>= 2.3.0), libseccomp2 (>= 2.4.0), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>


### <a id="packages-D"></a>D

- **docker-buildx-plugin**
  - Latest version: 0.10.5-1~ubuntu.18.04~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: stable
  - Description: Docker Buildx cli plugin.
  - Homepage: https://github.com/docker/buildx
  - Install: `sudo apt-get install docker-buildx-plugin`
  - Install (apt): `sudo apt install docker-buildx-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - replaces: docker-ce-cli

  </details>

- **docker-ce**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64
  - Suite: bionic
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
  - depends: containerd.io, containerd.io (>= 1.2.2-3), containerd.io (>= 1.4.1), containerd.io (>= 1.6.4), docker-ce-cli, iptables, libc6 (>= 2.17), libc6 (>= 2.3.2), libc6 (>= 2.8), libdevmapper1.02.1 (>= 2:1.02.97), libltdl7 (>= 2.4.6), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, aufs-tools, ca-certificates, cgroupfs-mount | cgroup-lite, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-ee, docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64
  - Suite: bionic
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
  - depends: libc6 (>= 2.4), libltdl7 (>= 2.4.6)
  - recommends: docker-buildx-plugin, docker-compose-plugin, docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0), docker-ce (<< 5:18.09)
  - replaces: docker-ce (<< 5:0), docker-ce (<< 5:18.09)

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:24.0.2-1~ubuntu.18.04~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: stable
  - Description: Rootless support for Docker.
  - Homepage: https://docs.docker.com/engine/security/rootless/
  - Install: `sudo apt-get install docker-ce-rootless-extras`
  - Install (apt): `sudo apt install docker-ce-rootless-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: dbus-user-session, docker-ce, libc6 (>= 2.3.4), libc6 (>= 2.4)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-compose-plugin**
  - Latest version: 2.18.1-1~ubuntu.18.04~bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: stable
  - Description: Docker Compose (V2) plugin for the Docker CLI.
  - Homepage: https://github.com/docker/compose
  - Install: `sudo apt-get install docker-compose-plugin`
  - Install (apt): `sudo apt install docker-compose-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **docker-scan-plugin**
  - Latest version: 0.23.0~ubuntu-bionic
  - Architectures: amd64
  - Suite: bionic
  - Components: stable
  - Description: Docker scan cli plugin.
  - Homepage: https://github.com/docker/scan-cli-plugin
  - Install: `sudo apt-get install docker-scan-plugin`
  - Install (apt): `sudo apt install docker-scan-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Docker APT repository for Ubuntu
- Repo tags: docker, apt, ubuntu
