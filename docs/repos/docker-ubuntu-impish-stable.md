# Docker - Ubuntu (Impish) - stable (ubuntu-21.10)

## Repository
- Repository ID: `docker-ubuntu-impish-stable`
- OS: `ubuntu-21.10`
- Source: `https://download.docker.com/linux/ubuntu impish stable`

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
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu impish stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-impish-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu impish stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-impish-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (6)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **containerd.io**
  - Latest version: 1.6.6-1
  - Architectures: amd64
  - Suite: impish
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
  - depends: libc6 (>= 2.34), libseccomp2 (>= 2.4.1), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>


### <a id="packages-D"></a>D

- **docker-ce**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
  - Components: stable
  - Description: Docker: the open-source application container engine
  - Homepage: https://www.docker.com
  - Install: `sudo apt-get install docker-ce`
  - Install (apt): `sudo apt install docker-ce`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional
  - depends: containerd.io (>= 1.4.1), docker-ce-cli, iptables, libc6 (>= 2.34), libdevmapper1.02.1 (>= 2:1.02.97), libseccomp2 (>= 2.3.0), libsystemd0
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, libltdl7, pigz, procps, xz-utils
  - suggests: aufs-tools, cgroupfs-mount | cgroup-lite
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - replaces: docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
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
  - depends: libc6 (>= 2.34)
  - recommends: docker-scan-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker-engine-cs, docker.io, lxc-docker, lxc-docker-virtual-package
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:20.10.17~3-0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
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
  - depends: dbus-user-session, libc6 (>= 2.34)
  - recommends: slirp4netns (>= 0.4.0)
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-compose-plugin**
  - Latest version: 2.6.0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
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
  - Latest version: 0.17.0~ubuntu-impish
  - Architectures: amd64
  - Suite: impish
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
