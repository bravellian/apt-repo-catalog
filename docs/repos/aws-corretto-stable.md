# Amazon Corretto (stable)

## Repository
- Repository ID: `aws-corretto-stable`
- Base URL: `https://apt.corretto.aws`
- Host: `apt.corretto.aws`

## Upstream documentation
- Documentation URL: https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/generic-linux-install.html
- Key documentation URL: https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/generic-linux-install.html

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: generic

## Key reference
- Key ID: `aws-corretto`
- Expected fingerprints:
  - 6DC3636DAE534049C8B94623A122542AB04F24E3
- Key source URL: https://apt.corretto.aws/corretto.key

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/aws-corretto.asc | gpg --dearmor | sudo tee /usr/share/keyrings/aws-corretto.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/aws-corretto.gpg] https://apt.corretto.aws stable main" | sudo tee /etc/apt/sources.list.d/aws-corretto-stable-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/aws-corretto.asc -o /tmp/aws-corretto.asc
gpg --dearmor /tmp/aws-corretto.asc
sudo install -m 0644 /tmp/aws-corretto.gpg /usr/share/keyrings/aws-corretto.gpg
echo "deb [signed-by=/usr/share/keyrings/aws-corretto.gpg] https://apt.corretto.aws stable main" | sudo tee /etc/apt/sources.list.d/aws-corretto-stable-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (13)</summary>

<div class="packages-nav">
<a href="#packages-J">J</a>
</div>


### <a id="packages-J"></a>J

- **java-1.8.0-amazon-corretto-jdk**
  - Latest version: 1:8.482.08-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 8 development environment
  - Homepage: https://github.com/corretto/corretto-8
  - Install: `sudo apt-get install java-1.8.0-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-1.8.0-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, libc6 (>= 2.12)
  - provides: java-1.8.0-amazon-corretto-jdk, java-1.8.0-amazon-corretto-jdk (= 1:8.262.10-1), java-1.8.0-amazon-corretto-jdk (= 1:8.262.11-1), java-1.8.0-amazon-corretto-jdk (= 1:8.265.01-1), java-1.8.0-amazon-corretto-jdk (= 1:8.272.10-3), java-1.8.0-amazon-corretto-jdk (= 1:8.275.01-1), java-1.8.0-amazon-corretto-jdk (= 1:8.282.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.292.10-1), java-1.8.0-amazon-corretto-jdk (= 1:8.292.10-2), java-1.8.0-amazon-corretto-jdk (= 1:8.302.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.312.07-1), java-1.8.0-amazon-corretto-jdk (= 1:8.322.06-1), java-1.8.0-amazon-corretto-jdk (= 1:8.322.06-2), java-1.8.0-amazon-corretto-jdk (= 1:8.332.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.342.07-1), java-1.8.0-amazon-corretto-jdk (= 1:8.342.07-3), java-1.8.0-amazon-corretto-jdk (= 1:8.342.07-4), java-1.8.0-amazon-corretto-jdk (= 1:8.352.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.362.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.372.07-1), java-1.8.0-amazon-corretto-jdk (= 1:8.382.05-1), java-1.8.0-amazon-corretto-jdk (= 1:8.392.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.402.06-1), java-1.8.0-amazon-corretto-jdk (= 1:8.402.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.412.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.422.05-1), java-1.8.0-amazon-corretto-jdk (= 1:8.432.06-1), java-1.8.0-amazon-corretto-jdk (= 1:8.442.06-1), java-1.8.0-amazon-corretto-jdk (= 1:8.452.09-1), java-1.8.0-amazon-corretto-jdk (= 1:8.462.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.472.08-1), java-1.8.0-amazon-corretto-jdk (= 1:8.482.08-1), java-compiler, java-runtime, java-runtime-headless, java-sdk, java2-runtime, java2-runtime-headless, java2-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-11-amazon-corretto-jdk**
  - Latest version: 1:11.0.30.7-1
  - Architectures: amd64, arm64, i386
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 11 development environment
  - Homepage: https://github.com/corretto/corretto-11
  - Install: `sudo apt-get install java-11-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-11-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java-sdk-headless, java11-runtime, java11-runtime-headless, java11-sdk, java11-sdk-headless, java5-runtime, java5-runtime-headless, java5-sdk, java5-sdk-headless, java6-runtime, java6-runtime-headless, java6-sdk, java6-sdk-headless, java7-jdk, java7-jdk-headless, java7-runtime, java7-runtime-headless, java7-sdk, java7-sdk-headless, java8-jdk, java8-jdk-headless, java8-runtime, java8-runtime-headless

  </details>

- **java-15-amazon-corretto-jdk**
  - Latest version: 1:15.0.2.7-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 15 development environment
  - Homepage: https://github.com/corretto/corretto-15
  - Install: `sudo apt-get install java-15-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-15-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-16-amazon-corretto-jdk**
  - Latest version: 1:16.0.2.7-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 16 development environment
  - Homepage: https://github.com/corretto/corretto-16
  - Install: `sudo apt-get install java-16-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-16-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-17-amazon-corretto-jdk**
  - Latest version: 1:17.0.18.8-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 17 development environment
  - Homepage: https://github.com/corretto/corretto-17
  - Install: `sudo apt-get install java-17-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-17-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-18-amazon-corretto-jdk**
  - Latest version: 1:18.0.2.9-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 18 development environment
  - Homepage: https://github.com/corretto/corretto-18
  - Install: `sudo apt-get install java-18-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-18-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-19-amazon-corretto-jdk**
  - Latest version: 1:19.0.2.7-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 19 development environment
  - Homepage: https://github.com/corretto/corretto-19
  - Install: `sudo apt-get install java-19-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-19-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-20-amazon-corretto-jdk**
  - Latest version: 1:20.0.2.10-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 20 development environment
  - Homepage: https://github.com/corretto/corretto-20
  - Install: `sudo apt-get install java-20-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-20-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-21-amazon-corretto-jdk**
  - Latest version: 1:21.0.10.7-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 21 development environment
  - Homepage: https://github.com/corretto/corretto-21
  - Install: `sudo apt-get install java-21-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-21-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java21-runtime, java21-runtime-headless, java21-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-22-amazon-corretto-jdk**
  - Latest version: 1:22.0.2.9-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 22 development environment
  - Homepage: https://github.com/corretto/corretto-22
  - Install: `sudo apt-get install java-22-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-22-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java21-runtime, java21-runtime-headless, java21-sdk, java22-runtime, java22-runtime-headless, java22-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-23-amazon-corretto-jdk**
  - Latest version: 1:23.0.2.7-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 23 development environment
  - Homepage: https://github.com/corretto/corretto-23
  - Install: `sudo apt-get install java-23-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-23-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java21-runtime, java21-runtime-headless, java21-sdk, java22-runtime, java22-runtime-headless, java22-sdk, java23-runtime, java23-runtime-headless, java23-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-24-amazon-corretto-jdk**
  - Latest version: 1:24.0.2.12-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 24 development environment
  - Homepage: https://github.com/corretto/corretto-24
  - Install: `sudo apt-get install java-24-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-24-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java21-runtime, java21-runtime-headless, java21-sdk, java22-runtime, java22-runtime-headless, java22-sdk, java23-runtime, java23-runtime-headless, java23-sdk, java24-runtime, java24-runtime-headless, java24-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>

- **java-25-amazon-corretto-jdk**
  - Latest version: 1:25.0.2.10-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Amazon Corretto 25 development environment
  - Homepage: https://github.com/corretto/corretto-25
  - Install: `sudo apt-get install java-25-amazon-corretto-jdk`
  - Install (apt): `sudo apt install java-25-amazon-corretto-jdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Amazon Corretto Team <corretto-team@amazon.com>
  - Section: java
  - Priority: optional
  - depends: java-common, zlib1g
  - provides: java-compiler, java-runtime, java-runtime-headless, java-sdk, java11-runtime, java11-runtime-headless, java11-sdk, java17-runtime, java17-runtime-headless, java17-sdk, java18-runtime, java18-runtime-headless, java18-sdk, java19-runtime, java19-runtime-headless, java19-sdk, java20-runtime, java20-runtime-headless, java20-sdk, java21-runtime, java21-runtime-headless, java21-sdk, java22-runtime, java22-runtime-headless, java22-sdk, java23-runtime, java23-runtime-headless, java23-sdk, java24-runtime, java24-runtime-headless, java24-sdk, java25-runtime, java25-runtime-headless, java25-sdk, java5-runtime, java5-runtime-headless, java5-sdk, java6-runtime, java6-runtime-headless, java6-sdk, java7-jdk, java7-runtime, java7-runtime-headless, java7-sdk, java8-jdk, java8-runtime, java8-runtime-headless

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install java-11-amazon-corretto-jdk
- Repo tags: java, devtools, cloud
- Key notes: Amazon Corretto APT repo key
- Key tags: java, devtools, cloud
