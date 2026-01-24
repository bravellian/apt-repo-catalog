# Docker - Ubuntu (Questing) - stable (ubuntu-25.10)

## Repository
- Repository ID: `docker-ubuntu-questing-stable`
- OS: `ubuntu-25.10`
- Source: `https://download.docker.com/linux/ubuntu questing stable`

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
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu questing stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-questing-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/docker-gpg-8d81803c0ebfcd88.asc -o /tmp/docker-gpg-8d81803c0ebfcd88.asc
gpg --dearmor /tmp/docker-gpg-8d81803c0ebfcd88.asc
sudo install -m 0644 /tmp/docker-gpg-8d81803c0ebfcd88.gpg /usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg
echo "deb [signed-by=/usr/share/keyrings/docker-gpg-8d81803c0ebfcd88.gpg] https://download.docker.com/linux/ubuntu questing stable" | sudo tee /etc/apt/sources.list.d/docker-ubuntu-questing-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (8)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a> <a href="#packages-D">D</a>
</div>


### <a id="packages-C"></a>C

- **cagent**
  - Latest version: 1.9.7-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
  - Components: stable
  - Description: cagent is a powerful multi-agent AI runtime that enables you to
  - Homepage: https://github.com/docker/cagent
  - Install: `sudo apt-get install cagent`
  - Install (apt): `sudo apt install cagent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Docker <support@docker.com>
  - Section: admin
  - Priority: optional

  </details>

- **containerd.io**
  - Latest version: 2.2.1-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
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
  - depends: libc6 (>= 2.38), libseccomp2 (>= 2.5.0)
  - conflicts: containerd, runc
  - replaces: containerd, runc
  - provides: containerd, runc

  </details>


### <a id="packages-D"></a>D

- **docker-buildx-plugin**
  - Latest version: 0.30.1-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
  - Components: stable
  - Description: Docker Buildx plugin extends build capabilities with BuildKit.
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
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
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
  - depends: containerd.io (>= 1.7.27), docker-ce-cli, iptables, libc6 (>= 2.34), libnftables1 (>= 1.0.2), libsystemd0, nftables
  - preDepends: init-system-helpers (>= 1.54~)
  - recommends: apparmor, ca-certificates, docker-ce-rootless-extras, git, pigz, procps, xz-utils
  - suggests: cgroupfs-mount | cgroup-lite, kmod
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - replaces: docker-ce-cli (<< 5:28.0.0), docker-engine

  </details>

- **docker-ce-cli**
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
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
  - recommends: docker-buildx-plugin, docker-compose-plugin
  - suggests: docker-model-plugin
  - conflicts: docker (<< 1.5~), docker-engine, docker.io
  - breaks: docker-ce (<< 5:0)
  - replaces: docker-ce (<< 5:0)

  </details>

- **docker-ce-rootless-extras**
  - Latest version: 5:29.1.5-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
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
  - recommends: slirp4netns (>= 0.4.0), slirp4netns (>= 0.4.0) | passt
  - conflicts: rootlesskit
  - breaks: rootlesskit
  - replaces: rootlesskit

  </details>

- **docker-compose-plugin**
  - Latest version: 5.0.2-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
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
  - recommends: docker-buildx-plugin (>= 0.17.0)

  </details>

- **docker-model-plugin**
  - Latest version: 1.0.7-1~ubuntu.25.10~questing
  - Architectures: amd64
  - Suite: questing
  - Components: stable
  - Description: Docker Model Runner plugin for the Docker CLI.
  - Homepage: https://docs.docker.com/model-runner/
  - Install: `sudo apt-get install docker-model-plugin`
  - Install (apt): `sudo apt install docker-model-plugin`
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
