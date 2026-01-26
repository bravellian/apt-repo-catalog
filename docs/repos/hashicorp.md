# HashiCorp Official Repository

## Repository
- Repository ID: `hashicorp`
- Base URL: `https://apt.releases.hashicorp.com`
- Host: `apt.releases.hashicorp.com`

## Upstream documentation
- Documentation URL: https://www.hashicorp.com/blog/announcing-the-hashicorp-linux-repository
- Key documentation URL: https://www.hashicorp.com/blog/announcing-the-hashicorp-linux-repository

## Suites
- Suite: `bookworm`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-12
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-11
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-20.04
- Suite: `noble`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.04
- Suite: `oracular`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-24.10
- Suite: `plucky`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-25.04
- Suite: `trixie`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: debian-13
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## Key reference
- Key ID: `hashicorp`
- Expected fingerprints:
  - 798AEC654E5C15428C8E42EEAA16FCBCA621E701
- Key source URL: https://apt.releases.hashicorp.com/gpg

## Install instructions

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com bookworm main" | sudo tee /etc/apt/sources.list.d/hashicorp-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com bookworm main" | sudo tee /etc/apt/sources.list.d/hashicorp-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com bullseye main" | sudo tee /etc/apt/sources.list.d/hashicorp-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com bullseye main" | sudo tee /etc/apt/sources.list.d/hashicorp-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com focal main" | sudo tee /etc/apt/sources.list.d/hashicorp-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com focal main" | sudo tee /etc/apt/sources.list.d/hashicorp-focal.list >/dev/null
sudo apt-get update
```

### Suite: noble

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com noble main" | sudo tee /etc/apt/sources.list.d/hashicorp-noble.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com noble main" | sudo tee /etc/apt/sources.list.d/hashicorp-noble.list >/dev/null
sudo apt-get update
```

### Suite: oracular

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com oracular main" | sudo tee /etc/apt/sources.list.d/hashicorp-oracular.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com oracular main" | sudo tee /etc/apt/sources.list.d/hashicorp-oracular.list >/dev/null
sudo apt-get update
```

### Suite: plucky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com plucky main" | sudo tee /etc/apt/sources.list.d/hashicorp-plucky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com plucky main" | sudo tee /etc/apt/sources.list.d/hashicorp-plucky.list >/dev/null
sudo apt-get update
```

### Suite: trixie

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com trixie main" | sudo tee /etc/apt/sources.list.d/hashicorp-trixie.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com trixie main" | sudo tee /etc/apt/sources.list.d/hashicorp-trixie.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com jammy main" | sudo tee /etc/apt/sources.list.d/hashicorp-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/hashicorp.asc -o /tmp/hashicorp.asc
gpg --dearmor /tmp/hashicorp.asc
sudo install -m 0644 /tmp/hashicorp.gpg /usr/share/keyrings/hashicorp.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp.gpg] https://apt.releases.hashicorp.com jammy main" | sudo tee /etc/apt/sources.list.d/hashicorp-jammy.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (58)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-B">B</a> <a href="#packages-C">C</a> <a href="#packages-D">D</a> <a href="#packages-E">E</a> <a href="#packages-H">H</a> <a href="#packages-L">L</a> <a href="#packages-N">N</a> <a href="#packages-O">O</a> <a href="#packages-P">P</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a> <a href="#packages-V">V</a> <a href="#packages-W">W</a>
</div>


### <a id="packages-A"></a>A

- **athena-cli**
  - Latest version: 0.1.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: athena-cli
  - Homepage: https://github.com/hashicorp/athena-cli
  - Install: `sudo apt-get install athena-cli`
  - Install (apt): `sudo apt install athena-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-B"></a>B

- **boundary**
  - Latest version: 0.21.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Boundary is a tool for identity-based secure access management. Please submit issues to https://github.com/hashicorp/boundary/issues
  - Homepage: https://www.boundaryproject.io/
  - Install: `sudo apt-get install boundary`
  - Install (apt): `sudo apt install boundary`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl, passwd

  </details>

- **boundary-enterprise**
  - Latest version: 0.21.0+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HashiCorp Boundary - Identity-based access management for dynamic infrastructure
  - Homepage: https://github.com/hashicorp/boundary
  - Install: `sudo apt-get install boundary-enterprise`
  - Install (apt): `sudo apt install boundary-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **boundary-worker-hcp**
  - Latest version: 0.12.3+hcp-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HashiCorp Boundary - Identity-based access management for dynamic infrastructure
  - Homepage: https://github.com/hashicorp/boundary
  - Install: `sudo apt-get install boundary-worker-hcp`
  - Install (apt): `sudo apt install boundary-worker-hcp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-C"></a>C

- **consul**
  - Latest version: 1.22.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure. Please submit issues to https://github.com/hashicorp/consul/issues
  - Homepage: https://www.consul.io/
  - Install: `sudo apt-get install consul`
  - Install (apt): `sudo apt install consul`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl, passwd

  </details>

- **consul-cni**
  - Latest version: 1.9.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: consul-cni provides a CNI plugin for use with Consul Service Mesh.
  - Homepage: https://github.com/hashicorp/consul-k8s/control-plane/cni
  - Install: `sudo apt-get install consul-cni`
  - Install (apt): `sudo apt install consul-cni`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-cni-fips**
  - Latest version: 1.9.2+fips1402-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: consul-cni provides a CNI plugin for use with Consul Service Mesh.
  - Homepage: https://github.com/hashicorp/consul-k8s/control-plane/cni
  - Install: `sudo apt-get install consul-cni-fips`
  - Install (apt): `sudo apt install consul-cni-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-dataplane**
  - Latest version: 1.9.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul dataplane connects an application to a Consul service mesh.
  - Homepage: https://github.com/hashicorp/consul-dataplane
  - Install: `sudo apt-get install consul-dataplane`
  - Install (apt): `sudo apt install consul-dataplane`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-dataplane-fips**
  - Latest version: 1.9.3+fips1402-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul dataplane connects an application to a Consul service mesh.
  - Homepage: https://github.com/hashicorp/consul-dataplane
  - Install: `sudo apt-get install consul-dataplane-fips`
  - Install (apt): `sudo apt install consul-dataplane-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-enterprise**
  - Latest version: 1.22.3+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure. Please submit issues to https://github.com/hashicorp/consul/issues
  - Homepage: https://www.consul.io/
  - Install: `sudo apt-get install consul-enterprise`
  - Install (apt): `sudo apt install consul-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl, passwd

  </details>

- **consul-enterprise-fips**
  - Latest version: 1.22.3+ent.fips1402-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul is a distributed, highly available, and data center aware solution to connect and configure applications across dynamic, distributed infrastructure.
  - Homepage: https://github.com/hashicorp/consul
  - Install: `sudo apt-get install consul-enterprise-fips`
  - Install (apt): `sudo apt install consul-enterprise-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-esm**
  - Latest version: 0.9.1-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Template rendering, notifier, and supervisor for @hashicorp Consul, Nomad and Vault data.
  - Homepage: https://github.com/hashicorp/consul-esm
  - Install: `sudo apt-get install consul-esm`
  - Install (apt): `sudo apt install consul-esm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-k8s**
  - Latest version: 1.9.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: First-class support for Consul and Kubernetes. Run Consul on Kubernetes, integrate Connect, sync services, and more.
  - Homepage: https://github.com/hashicorp/consul-k8s
  - Install: `sudo apt-get install consul-k8s`
  - Install (apt): `sudo apt install consul-k8s`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl

  </details>

- **consul-k8s-fips**
  - Latest version: 1.9.2+fips1402-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: consul-k8s provides a cli interface to first-class integrations between Consul and Kubernetes.
  - Homepage: https://github.com/hashicorp/consul-k8s
  - Install: `sudo apt-get install consul-k8s-fips`
  - Install (apt): `sudo apt install consul-k8s-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-telemetry-collector**
  - Latest version: 0.0.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul Telemetry Collector
  - Homepage: https://github.com/hashicorp/consul-telemetry-collector
  - Install: `sudo apt-get install consul-telemetry-collector`
  - Install (apt): `sudo apt install consul-telemetry-collector`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **consul-template**
  - Latest version: 0.41.4-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Template rendering, notifier, and supervisor for @hashicorp Consul and Vault data.
  - Homepage: https://github.com/hashicorp/consul-template
  - Install: `sudo apt-get install consul-template`
  - Install (apt): `sudo apt install consul-template`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl

  </details>

- **consul-terraform-sync**
  - Latest version: 0.8.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul Terraform Sync is a service-oriented tool for managing network infrastructure near real-time.
  - Homepage: https://github.com/hashicorp/consul-terraform-sync
  - Install: `sudo apt-get install consul-terraform-sync`
  - Install (apt): `sudo apt install consul-terraform-sync`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl

  </details>

- **consul-terraform-sync-enterprise**
  - Latest version: 0.8.0+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Consul Terraform Sync is a service-oriented tool for managing network infrastructure near real-time.
  - Homepage: https://github.com/hashicorp/consul-terraform-sync
  - Install: `sudo apt-get install consul-terraform-sync-enterprise`
  - Install (apt): `sudo apt install consul-terraform-sync-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl

  </details>

- **crt-core-helloworld**
  - Latest version: 1.11.1-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: crt-core-helloworld is a template repo for oss products.
  - Homepage: https://github.com/hashicorp/crt-core-helloworld
  - Install: `sudo apt-get install crt-core-helloworld`
  - Install (apt): `sudo apt install crt-core-helloworld`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **crt-core-helloworld-enterprise**
  - Latest version: 1.1.6+ent.fips1403-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: crt-core-helloworld is a template repo for enterprise products.
  - Homepage: https://github.com/hashicorp/crt-core-helloworld-enterprise
  - Install: `sudo apt-get install crt-core-helloworld-enterprise`
  - Install (apt): `sudo apt install crt-core-helloworld-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-D"></a>D

- **dummy**
  - Latest version: 0.0.1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Dummy allows you to test the packaging workflow
  - Homepage: https://www.hashicorp.com
  - Install: `sudo apt-get install dummy`
  - Install (apt): `sudo apt install dummy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: optional
  - depends: openssl, passwd

  </details>


### <a id="packages-E"></a>E

- **envconsul**
  - Latest version: 0.13.4-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Template rendering, notifier, and supervisor for @hashicorp Consul, Nomad and Vault data.
  - Homepage: https://github.com/hashicorp/envconsul
  - Install: `sudo apt-get install envconsul`
  - Install (apt): `sudo apt install envconsul`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-H"></a>H

- **hashicorp-envoy**
  - Latest version: 1.35.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Hashicorp distribution of Envoy Proxy
  - Homepage: https://www.envoyproxy.io/
  - Install: `sudo apt-get install hashicorp-envoy`
  - Install (apt): `sudo apt install hashicorp-envoy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: libc6 (>= 2.29), libc6 (>= 2.30)

  </details>

- **hashicorp-envoy-fips**
  - Latest version: 1.35.3+fips1402-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Hashicorp distribution of Envoy Proxy
  - Homepage: https://www.envoyproxy.io/
  - Install: `sudo apt-get install hashicorp-envoy-fips`
  - Install (apt): `sudo apt install hashicorp-envoy-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: libc6 (>= 2.29), libc6 (>= 2.30)

  </details>

- **hc-install**
  - Latest version: 0.9.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: hc-install CLI allows installing multiple versions of HashiCorp products in automation
  - Homepage: https://github.com/hashicorp/hc-install
  - Install: `sudo apt-get install hc-install`
  - Install (apt): `sudo apt install hc-install`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **hcdiag**
  - Latest version: 0.5.10-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: hcdiag is a CLI tool for gathering diagnostic information from HashiCorp products.
  - Homepage: https://github.com/hashicorp/hcdiag
  - Install: `sudo apt-get install hcdiag`
  - Install (apt): `sudo apt install hcdiag`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **hcp**
  - Latest version: 0.11.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HashiCorp Cloud Platform CLI
  - Homepage: https://github.com/hashicorp/hcp
  - Install: `sudo apt-get install hcp`
  - Install (apt): `sudo apt install hcp`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **hcpvs-gateway**
  - Latest version: 0.1.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: hcpvs-gateway is a tool for integrating HCP workflows into a local network.
  - Homepage: https://github.com/hashicorp/hcpvs-gateway
  - Install: `sudo apt-get install hcpvs-gateway`
  - Install (apt): `sudo apt install hcpvs-gateway`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>


### <a id="packages-L"></a>L

- **levant**
  - Latest version: 0.4.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Levant is a templating and deployment tool for HashiCorp Nomad
  - Homepage: https://github.com/hashicorp/levant
  - Install: `sudo apt-get install levant`
  - Install (apt): `sudo apt install levant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-N"></a>N

- **nomad**
  - Latest version: 1.11.1-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Nomad is an easy-to-use, flexible, and performant workload orchestrator that can deploy a mix of microservice, batch, containerized, and non-containerized applications. Nomad is easy to operate and scale and has native Consul and Vault integrations. Please submit issues to https://github.com/hashicorp/nomad/issues
  - Homepage: https://www.nomadproject.io/
  - Install: `sudo apt-get install nomad`
  - Install (apt): `sudo apt install nomad`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: iproute2, openssl, passwd
  - recommends: dmidecode

  </details>

- **nomad-autoscaler**
  - Latest version: 0.4.9-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Nomad Autoscaler brings autoscaling to your Nomad workloads.
  - Homepage: https://github.com/hashicorp/nomad-autoscaler
  - Install: `sudo apt-get install nomad-autoscaler`
  - Install (apt): `sudo apt install nomad-autoscaler`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **nomad-autoscaler-enterprise**
  - Latest version: 0.4.9+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Nomad Autoscaler brings autoscaling to your Nomad workloads.
  - Homepage: https://github.com/hashicorp/nomad-autoscaler
  - Install: `sudo apt-get install nomad-autoscaler-enterprise`
  - Install (apt): `sudo apt install nomad-autoscaler-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **nomad-device-nvidia**
  - Latest version: 1.1.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nomad-device-nvidia is a HashiCorp Nomad device driver for Linux.
  - Homepage: https://github.com/hashicorp/nomad-device-nvidia
  - Install: `sudo apt-get install nomad-device-nvidia`
  - Install (apt): `sudo apt install nomad-device-nvidia`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **nomad-driver-exec2**
  - Latest version: 0.1.1-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nomad-driver-exec2 is a HashiCorp Nomad task driver for Linux.
  - Homepage: https://github.com/hashicorp/nomad-driver-exec2
  - Install: `sudo apt-get install nomad-driver-exec2`
  - Install (apt): `sudo apt install nomad-driver-exec2`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **nomad-driver-podman**
  - Latest version: 0.6.4-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: nomad-driver-podman is a HashiCorp Nomad task driver for Linux.
  - Homepage: https://github.com/hashicorp/nomad-driver-podman
  - Install: `sudo apt-get install nomad-driver-podman`
  - Install (apt): `sudo apt install nomad-driver-podman`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **nomad-enterprise**
  - Latest version: 1.11.1+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: no description given
  - Homepage: https://www.vaultproject.io/
  - Install: `sudo apt-get install nomad-enterprise`
  - Install (apt): `sudo apt install nomad-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: iproute2, openssl, passwd
  - recommends: dmidecode

  </details>

- **nomad-pack**
  - Latest version: 0.4.1-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Nomad Pack is a templating and packaging tool used with HashiCorp Nomad.
  - Homepage: https://github.com/hashicorp/nomad-pack
  - Install: `sudo apt-get install nomad-pack`
  - Install (apt): `sudo apt install nomad-pack`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: git, openssl

  </details>


### <a id="packages-O"></a>O

- **opa-wrapper**
  - Latest version: 1.4.0+int.compat-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: opawrapper is a thin wrapper around Open Policy Agent (OPA) that simplifies its use in HashiCorp products and environments.
  - Homepage: https://github.com/hashicorp/opa-wrapper
  - Install: `sudo apt-get install opa-wrapper`
  - Install (apt): `sudo apt install opa-wrapper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-P"></a>P

- **packer**
  - Latest version: 1.14.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: HashiCorp Packer - A tool for creating identical machine images for multiple platforms from a single source configuration
  - Homepage: https://www.packer.io/docs
  - Install: `sudo apt-get install packer`
  - Install (apt): `sudo apt install packer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Section: default
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-S"></a>S

- **sentinel**
  - Latest version: 0.40.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Sentinel is an embeddable policy as code framework to enable fine-grained, logic-based policy decisions that can be extended to source external information to make decisions.
  - Homepage: https://www.hashicorp.com/sentinel
  - Install: `sudo apt-get install sentinel`
  - Install (apt): `sudo apt install sentinel`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-T"></a>T

- **terraform**
  - Latest version: 1.14.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Terraform enables you to safely and predictably create, change, and improve infrastructure. It is an open source tool that codifies APIs into declarative configuration files that can be shared amongst team members, treated as code, edited, reviewed, and versioned. Please submit issues to https://github.com/hashicorp/terraform/issues
  - Homepage: https://www.terraform.io/
  - Install: `sudo apt-get install terraform`
  - Install (apt): `sudo apt install terraform`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: git, openssl, passwd

  </details>

- **terraform-ls**
  - Latest version: 0.38.3-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Terraform Language Server
  - Homepage: https://github.com/hashicorp/terraform-ls
  - Install: `sudo apt-get install terraform-ls`
  - Install (apt): `sudo apt install terraform-ls`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: openssl, passwd

  </details>

- **terraform-stacks-cli**
  - Latest version: 1.2.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: tfstacks
  - Homepage: https://terraform.io/
  - Install: `sudo apt-get install terraform-stacks-cli`
  - Install (apt): `sudo apt install terraform-stacks-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **tf-migrate**
  - Latest version: 1.2.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Tf-Migrate helps Terraform CE customers to migrate their workspaces to HCP terraform.
  - Homepage: https://github.com/hashicorp/tf-migrate
  - Install: `sudo apt-get install tf-migrate`
  - Install (apt): `sudo apt install tf-migrate`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-V"></a>V

- **vagrant**
  - Latest version: 2.4.9-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vagrant is a tool for building and distributing development environments.
  - Homepage: https://www.vagrantup.com/
  - Install: `sudo apt-get install vagrant`
  - Install (apt): `sudo apt install vagrant`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra

  </details>

- **vagrant-vmware-utility**
  - Latest version: 1:1.0.24
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vagrant utility for VMware Workstation and Player
  - Homepage: https://www.vagrantup.com/
  - Install: `sudo apt-get install vagrant-vmware-utility`
  - Install (apt): `sudo apt install vagrant-vmware-utility`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp Vagrant <vagrant@hashicorp.com>
  - Section: default
  - Priority: optional

  </details>

- **vault**
  - Latest version: 1.21.2-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault`
  - Install (apt): `sudo apt install vault`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Section: default
  - Priority: optional
  - depends: libcap2-bin, openssl, passwd

  </details>

- **vault-benchmark**
  - Latest version: 0.3.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: vault-benchmark is a template repo for oss products.
  - Homepage: https://github.com/hashicorp/vault-benchmark
  - Install: `sudo apt-get install vault-benchmark`
  - Install (apt): `sudo apt install vault-benchmark`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-enterprise**
  - Latest version: 1.21.2+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise`
  - Install (apt): `sudo apt install vault-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Section: default
  - Priority: optional
  - depends: libcap2-bin, openssl, passwd

  </details>

- **vault-enterprise-fips1402**
  - Latest version: 1.19.3+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise-fips1402`
  - Install (apt): `sudo apt install vault-enterprise-fips1402`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-enterprise-fips1403**
  - Latest version: 1.21.2+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise-fips1403`
  - Install (apt): `sudo apt install vault-enterprise-fips1403`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-enterprise-hsm**
  - Latest version: 1.21.2+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise-hsm`
  - Install (apt): `sudo apt install vault-enterprise-hsm`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-enterprise-hsm-fips1402**
  - Latest version: 1.19.3+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise-hsm-fips1402`
  - Install (apt): `sudo apt install vault-enterprise-hsm-fips1402`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-enterprise-hsm-fips1403**
  - Latest version: 1.21.2+ent-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Vault is a tool for secrets management, encryption as a service, and privileged access management.
  - Homepage: https://github.com/hashicorp/vault
  - Install: `sudo apt-get install vault-enterprise-hsm-fips1403`
  - Install (apt): `sudo apt install vault-enterprise-hsm-fips1403`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>

- **vault-radar**
  - Latest version: 0.41.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: vault-radar
  - Homepage: https://developer.hashicorp.com/hcp/docs/vault-radar/cli
  - Install: `sudo apt-get install vault-radar`
  - Install (apt): `sudo apt install vault-radar`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **vault-secrets-gateway**
  - Latest version: 0.1.5-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: vault-secrets-gateway is a tool for integrating HCP workflows into a local network.
  - Homepage: https://github.com/hashicorp/vault-secrets-gateway
  - Install: `sudo apt-get install vault-secrets-gateway`
  - Install (apt): `sudo apt install vault-secrets-gateway`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional

  </details>

- **vlt**
  - Latest version: 1.0.0-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: vlt cli
  - Homepage: https://github.com/hashicorp/vlt
  - Install: `sudo apt-get install vlt`
  - Install (apt): `sudo apt install vlt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp
  - Priority: optional
  - depends: openssl

  </details>


### <a id="packages-W"></a>W

- **waypoint**
  - Latest version: 0.11.4-1
  - Architectures: amd64
  - Suite: jammy
  - Components: main
  - Description: Waypoint is a tool to build, deploy, and release any application on any platform. Please submit issues to https://github.com/hashicorp/waypoint/issues
  - Homepage: https://www.waypointproject.io/
  - Install: `sudo apt-get install waypoint`
  - Install (apt): `sudo apt install waypoint`
  <details>
  <summary>More metadata</summary>

  - Maintainer: HashiCorp <support@hashicorp.com>
  - Section: default
  - Priority: extra
  - depends: git, openssl, passwd

  </details>


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: HashiCorp Debian/Ubuntu package repository
- Repo tags: devops, infrastructure
- Key notes: Key for HashiCorp tools (Terraform, Vault, Consul, etc.)
- Key tags: devops, infrastructure
