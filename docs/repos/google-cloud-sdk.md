# Google Cloud SDK (ubuntu-22.04)

## Repository
- Repository ID: `google-cloud-sdk`
- OS: `ubuntu-22.04`
- Source: `https://packages.cloud.google.com/apt cloud-sdk main`

## Upstream documentation
- Documentation URL: https://cloud.google.com/sdk/docs/install-sdk
- Key documentation URL: https://cloud.google.com/sdk/docs/install-sdk

## Key reference
- Key ID: `google-cloud`
- Expected fingerprints:
  - 35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3
- Key source URL: https://packages.cloud.google.com/apt/doc/apt-key.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc | gpg --dearmor | sudo tee /usr/share/keyrings/google-cloud.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/google-cloud-sdk.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc -o /tmp/google-cloud.asc
gpg --dearmor /tmp/google-cloud.asc
sudo install -m 0644 /tmp/google-cloud.gpg /usr/share/keyrings/google-cloud.gpg
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/google-cloud-sdk.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (73)</summary>

<div class="packages-nav">
<a href="#packages-G">G</a> <a href="#packages-K">K</a>
</div>


### <a id="packages-G"></a>G

- **google-cloud-cli**
  - Latest version: 553.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Utilities for the Google Cloud Platform
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli`
  - Install (apt): `sudo apt install google-cloud-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - recommends: google-cloud-cli-anthoscli
  - suggests: google-cloud-cli-app-engine-java, google-cloud-cli-app-engine-python, google-cloud-cli-bigtable-emulator, google-cloud-cli-datastore-emulator, google-cloud-cli-pubsub-emulator, kubectl
  - conflicts: google-cloud-sdk, gsutil
  - breaks: google-cloud-sdk (<< 467.0.0-0)
  - replaces: google-cloud-sdk (<< 467.0.0-0)

  </details>

- **google-cloud-cli-anthos-auth**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: anthos-auth
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-anthos-auth`
  - Install (apt): `sudo apt install google-cloud-cli-anthos-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-anthos-auth
  - breaks: google-cloud-sdk-anthos-auth (<< 467.0.0-0)
  - replaces: google-cloud-sdk-anthos-auth (<< 467.0.0-0)

  </details>

- **google-cloud-cli-anthoscli**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: anthoscli
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-anthoscli`
  - Install (apt): `sudo apt install google-cloud-cli-anthoscli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli (>> 470.0.0-0)
  - breaks: google-cloud-cli (<< 470.0.0-0)

  </details>

- **google-cloud-cli-app-engine-go**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Go runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-app-engine-go`
  - Install (apt): `sudo apt install google-cloud-cli-app-engine-go`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, google-cloud-cli-app-engine-python
  - conflicts: google-cloud-sdk-app-engine-go
  - breaks: google-cloud-sdk-app-engine-go (<< 467.0.0-0)
  - replaces: google-cloud-sdk-app-engine-go (<< 467.0.0-0)

  </details>

- **google-cloud-cli-app-engine-grpc**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Provides the gRPC python library for app engine.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-app-engine-grpc`
  - Install (apt): `sudo apt install google-cloud-cli-app-engine-grpc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-app-engine-grpc
  - breaks: google-cloud-sdk-app-engine-grpc (<< 467.0.0-0)
  - replaces: google-cloud-sdk-app-engine-grpc (<< 467.0.0-0)

  </details>

- **google-cloud-cli-app-engine-java**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Java runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-app-engine-java`
  - Install (apt): `sudo apt install google-cloud-cli-app-engine-java`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-python, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-sdk-app-engine-java
  - breaks: google-cloud-sdk-app-engine-java (<< 467.0.0-0)
  - replaces: google-cloud-sdk-app-engine-java (<< 467.0.0-0)

  </details>

- **google-cloud-cli-app-engine-python**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Python runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-app-engine-python`
  - Install (apt): `sudo apt install google-cloud-cli-app-engine-python`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, python2.7
  - conflicts: google-cloud-sdk-app-engine-python
  - breaks: google-cloud-sdk-app-engine-python (<< 467.0.0-0)
  - replaces: google-cloud-sdk-app-engine-python (<< 467.0.0-0)

  </details>

- **google-cloud-cli-app-engine-python-extras**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Extra libraries for the App Engine Python Extentions
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-app-engine-python-extras`
  - Install (apt): `sudo apt install google-cloud-cli-app-engine-python-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, google-cloud-cli-app-engine-python
  - conflicts: google-cloud-sdk-app-engine-python-extras
  - breaks: google-cloud-sdk-app-engine-python-extras (<< 467.0.0-0)
  - replaces: google-cloud-sdk-app-engine-python-extras (<< 467.0.0-0)

  </details>

- **google-cloud-cli-bigtable-emulator**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Bigtable.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-bigtable-emulator`
  - Install (apt): `sudo apt install google-cloud-cli-bigtable-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-bigtable-emulator
  - breaks: google-cloud-sdk-bigtable-emulator (<< 467.0.0-0)
  - replaces: google-cloud-sdk-bigtable-emulator (<< 467.0.0-0)

  </details>

- **google-cloud-cli-cbt**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Google Cloud Bigtable Command Line Tool
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-cbt`
  - Install (apt): `sudo apt install google-cloud-cli-cbt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-cbt
  - breaks: google-cloud-sdk-cbt (<< 467.0.0-0)
  - replaces: google-cloud-sdk-cbt (<< 467.0.0-0)

  </details>

- **google-cloud-cli-cloud-build-local**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Google Cloud Build Local Builder
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-cloud-build-local`
  - Install (apt): `sudo apt install google-cloud-cli-cloud-build-local`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-cloud-build-local
  - breaks: google-cloud-sdk-cloud-build-local (<< 467.0.0-0)
  - replaces: google-cloud-sdk-cloud-build-local (<< 467.0.0-0)

  </details>

- **google-cloud-cli-cloud-run-proxy**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Cloud Run Proxy
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-cloud-run-proxy`
  - Install (apt): `sudo apt install google-cloud-cli-cloud-run-proxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-cloud-run-proxy
  - breaks: google-cloud-sdk-cloud-run-proxy (<< 467.0.0-0)
  - replaces: google-cloud-sdk-cloud-run-proxy (<< 467.0.0-0)

  </details>

- **google-cloud-cli-config-connector**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Google Cloud Config Connector
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-config-connector`
  - Install (apt): `sudo apt install google-cloud-cli-config-connector`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-config-connector
  - breaks: google-cloud-sdk-config-connector (<< 467.0.0-0)
  - replaces: google-cloud-sdk-config-connector (<< 467.0.0-0)

  </details>

- **google-cloud-cli-datalab**
  - Latest version: 412.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Command-line utility for Google Cloud Datalab
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-datalab`
  - Install (apt): `sudo apt install google-cloud-cli-datalab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli

  </details>

- **google-cloud-cli-datastore-emulator**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Datastore.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-datastore-emulator`
  - Install (apt): `sudo apt install google-cloud-cli-datastore-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, google-cloud-sdk, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-sdk-datastore-emulator
  - breaks: google-cloud-sdk-datastore-emulator (<< 467.0.0-0)
  - replaces: google-cloud-sdk-datastore-emulator (<< 467.0.0-0)

  </details>

- **google-cloud-cli-docker-credential-gcr**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: docker-credential-gcr
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-docker-credential-gcr`
  - Install (apt): `sudo apt install google-cloud-cli-docker-credential-gcr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-docker-credential-gcr
  - breaks: google-cloud-sdk-docker-credential-gcr (<< 467.0.0-0)
  - replaces: google-cloud-sdk-docker-credential-gcr (<< 467.0.0-0)

  </details>

- **google-cloud-cli-enterprise-certificate-proxy**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: enterprise-certificate-proxy
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-enterprise-certificate-proxy`
  - Install (apt): `sudo apt install google-cloud-cli-enterprise-certificate-proxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-enterprise-certificate-proxy
  - breaks: google-cloud-sdk-enterprise-certificate-proxy (<< 467.0.0-0)
  - replaces: google-cloud-sdk-enterprise-certificate-proxy (<< 467.0.0-0)

  </details>

- **google-cloud-cli-firestore-emulator**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Firestore.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-firestore-emulator`
  - Install (apt): `sudo apt install google-cloud-cli-firestore-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-sdk-firestore-emulator
  - breaks: google-cloud-sdk-firestore-emulator (<< 467.0.0-0)
  - replaces: google-cloud-sdk-firestore-emulator (<< 467.0.0-0)

  </details>

- **google-cloud-cli-gke-gcloud-auth-plugin**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: gke-gcloud-auth-plugin
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-gke-gcloud-auth-plugin`
  - Install (apt): `sudo apt install google-cloud-cli-gke-gcloud-auth-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-gke-gcloud-auth-plugin
  - breaks: google-cloud-sdk-gke-gcloud-auth-plugin (<< 467.0.0-0)
  - replaces: google-cloud-sdk-gke-gcloud-auth-plugin (<< 467.0.0-0)

  </details>

- **google-cloud-cli-harbourbridge**
  - Latest version: 511.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Harbourbridge allows Spanner users to migrate schema and data to a Cloud Spanner instance
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-harbourbridge`
  - Install (apt): `sudo apt install google-cloud-cli-harbourbridge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-harbourbridge
  - breaks: google-cloud-sdk-harbourbridge (<< 467.0.0-0)
  - replaces: google-cloud-sdk-harbourbridge (<< 467.0.0-0)

  </details>

- **google-cloud-cli-istioctl**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: istioctl
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-istioctl`
  - Install (apt): `sudo apt install google-cloud-cli-istioctl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-istioctl
  - breaks: google-cloud-sdk-istioctl (<< 467.0.0-0)
  - replaces: google-cloud-sdk-istioctl (<< 467.0.0-0)

  </details>

- **google-cloud-cli-kpt**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: kpt
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-kpt`
  - Install (apt): `sudo apt install google-cloud-cli-kpt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-kpt
  - breaks: google-cloud-sdk-kpt (<< 467.0.0-0)
  - replaces: google-cloud-sdk-kpt (<< 467.0.0-0)

  </details>

- **google-cloud-cli-kubectl-oidc**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: kubectl-oidc
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-kubectl-oidc`
  - Install (apt): `sudo apt install google-cloud-cli-kubectl-oidc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-kubectl-oidc
  - breaks: google-cloud-sdk-kubectl-oidc (<< 467.0.0-0)
  - replaces: google-cloud-sdk-kubectl-oidc (<< 467.0.0-0)

  </details>

- **google-cloud-cli-local-extract**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: local-extract
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-local-extract`
  - Install (apt): `sudo apt install google-cloud-cli-local-extract`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-local-extract
  - breaks: google-cloud-sdk-local-extract (<< 467.0.0-0)
  - replaces: google-cloud-sdk-local-extract (<< 467.0.0-0)

  </details>

- **google-cloud-cli-log-streaming**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Log streaming
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-log-streaming`
  - Install (apt): `sudo apt install google-cloud-cli-log-streaming`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-log-streaming
  - breaks: google-cloud-sdk-log-streaming (<< 467.0.0-0)
  - replaces: google-cloud-sdk-log-streaming (<< 467.0.0-0)

  </details>

- **google-cloud-cli-managed-flink-client**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Client for Managed Flink Job Creation.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-managed-flink-client`
  - Install (apt): `sudo apt install google-cloud-cli-managed-flink-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - breaks: google-cloud-sdk-managed-flink-client (<< 467.0.0-0)
  - replaces: google-cloud-sdk-managed-flink-client (<< 467.0.0-0)

  </details>

- **google-cloud-cli-minikube**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Minikube
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-minikube`
  - Install (apt): `sudo apt install google-cloud-cli-minikube`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-minikube
  - breaks: google-cloud-sdk-minikube (<< 467.0.0-0)
  - replaces: google-cloud-sdk-minikube (<< 467.0.0-0)

  </details>

- **google-cloud-cli-nomos**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: nomos
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-nomos`
  - Install (apt): `sudo apt install google-cloud-cli-nomos`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-nomos
  - breaks: google-cloud-sdk-nomos (<< 467.0.0-0)
  - replaces: google-cloud-sdk-nomos (<< 467.0.0-0)

  </details>

- **google-cloud-cli-package-go-module**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: anthos-auth
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-package-go-module`
  - Install (apt): `sudo apt install google-cloud-cli-package-go-module`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-package-go-module
  - breaks: google-cloud-sdk-package-go-module (<< 467.0.0-0)
  - replaces: google-cloud-sdk-package-go-module (<< 467.0.0-0)

  </details>

- **google-cloud-cli-pubsub-emulator**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Pubsub.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-pubsub-emulator`
  - Install (apt): `sudo apt install google-cloud-cli-pubsub-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-sdk-pubsub-emulator
  - breaks: google-cloud-sdk-pubsub-emulator (<< 467.0.0-0)
  - replaces: google-cloud-sdk-pubsub-emulator (<< 467.0.0-0)

  </details>

- **google-cloud-cli-run-compose**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Run Compose
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-run-compose`
  - Install (apt): `sudo apt install google-cloud-cli-run-compose`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - breaks: google-cloud-sdk-run-compose (<< 467.0.0-0)
  - replaces: google-cloud-sdk-run-compose (<< 467.0.0-0)

  </details>

- **google-cloud-cli-skaffold**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Skaffold
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-skaffold`
  - Install (apt): `sudo apt install google-cloud-cli-skaffold`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: kubectl
  - conflicts: google-cloud-sdk-skaffold
  - breaks: google-cloud-sdk-skaffold (<< 467.0.0-0)
  - replaces: google-cloud-sdk-skaffold (<< 467.0.0-0)

  </details>

- **google-cloud-cli-spanner-cli**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Spanner Cli is an interactive shell for Spanner
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-spanner-cli`
  - Install (apt): `sudo apt install google-cloud-cli-spanner-cli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional

  </details>

- **google-cloud-cli-spanner-emulator**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Spanner.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-spanner-emulator`
  - Install (apt): `sudo apt install google-cloud-cli-spanner-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli
  - conflicts: google-cloud-sdk-spanner-emulator
  - breaks: google-cloud-sdk-spanner-emulator (<< 467.0.0-0)
  - replaces: google-cloud-sdk-spanner-emulator (<< 467.0.0-0)

  </details>

- **google-cloud-cli-spanner-migration-tool**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Spanner migration tool allows Spanner users to migrate schema and data to a Cloud Spanner instance
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-spanner-migration-tool`
  - Install (apt): `sudo apt install google-cloud-cli-spanner-migration-tool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-spanner-migration-tool
  - breaks: google-cloud-sdk-spanner-migration-tool (<< 467.0.0-0)
  - replaces: google-cloud-sdk-spanner-migration-tool (<< 467.0.0-0)

  </details>

- **google-cloud-cli-terraform-tools**
  - Latest version: 553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: terraform-tools
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-terraform-tools`
  - Install (apt): `sudo apt install google-cloud-cli-terraform-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - conflicts: google-cloud-sdk-terraform-tools
  - breaks: google-cloud-sdk-terraform-tools (<< 467.0.0-0)
  - replaces: google-cloud-sdk-terraform-tools (<< 467.0.0-0)

  </details>

- **google-cloud-cli-terraform-validator**
  - Latest version: 378.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: terraform-validator
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-terraform-validator`
  - Install (apt): `sudo apt install google-cloud-cli-terraform-validator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional

  </details>

- **google-cloud-cli-tests**
  - Latest version: 553.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Tests for verifying Google Cloud SDK packages.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-cli-tests`
  - Install (apt): `sudo apt install google-cloud-cli-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: git, google-cloud-cli, openssh-client, python3-setuptools
  - conflicts: google-cloud-sdk-tests
  - breaks: google-cloud-sdk-tests (<< 467.0.0-0)
  - replaces: google-cloud-sdk-tests (<< 467.0.0-0)

  </details>

- **google-cloud-sdk**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Utilities for the Google Cloud Platform
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk`
  - Install (apt): `sudo apt install google-cloud-sdk`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli (>= 467.0.0-0), python3
  - recommends: python3-crcmod
  - suggests: google-cloud-sdk-app-engine-java, google-cloud-sdk-app-engine-python, google-cloud-sdk-bigtable-emulator, google-cloud-sdk-datastore-emulator, google-cloud-sdk-pubsub-emulator, kubectl
  - conflicts: google-cloud-cli, gsutil

  </details>

- **google-cloud-sdk-anthos-auth**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for anthos-auth
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-anthos-auth`
  - Install (apt): `sudo apt install google-cloud-sdk-anthos-auth`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-anthos-auth (>= 467.0.0-0)
  - conflicts: google-cloud-cli-anthos-auth

  </details>

- **google-cloud-sdk-app-engine-go**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Go runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-app-engine-go`
  - Install (apt): `sudo apt install google-cloud-sdk-app-engine-go`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-go (>= 467.0.0-0), google-cloud-sdk, google-cloud-sdk-app-engine-python
  - conflicts: google-cloud-cli-app-engine-go

  </details>

- **google-cloud-sdk-app-engine-grpc**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for gRPC python library for app engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-app-engine-grpc`
  - Install (apt): `sudo apt install google-cloud-sdk-app-engine-grpc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-grpc (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-app-engine-grpc

  </details>

- **google-cloud-sdk-app-engine-java**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Java runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-app-engine-java`
  - Install (apt): `sudo apt install google-cloud-sdk-app-engine-java`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-java (>= 467.0.0-0), google-cloud-sdk-app-engine-python, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-cli-app-engine-java

  </details>

- **google-cloud-sdk-app-engine-python**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Python runtime for Google App Engine
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-app-engine-python`
  - Install (apt): `sudo apt install google-cloud-sdk-app-engine-python`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-python (>= 467.0.0-0), google-cloud-sdk, python2.7
  - conflicts: google-cloud-cli-app-engine-python

  </details>

- **google-cloud-sdk-app-engine-python-extras**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Extra libraries for the App Engine Python Extentions
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-app-engine-python-extras`
  - Install (apt): `sudo apt install google-cloud-sdk-app-engine-python-extras`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-app-engine-python-extras (>= 467.0.0-0), google-cloud-sdk, google-cloud-sdk-app-engine-python
  - conflicts: google-cloud-cli-app-engine-python-extras

  </details>

- **google-cloud-sdk-bigtable-emulator**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Emulator for Google Cloud Bigtable
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-bigtable-emulator`
  - Install (apt): `sudo apt install google-cloud-sdk-bigtable-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-bigtable-emulator (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-bigtable-emulator

  </details>

- **google-cloud-sdk-cbt**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Google Cloud Bigtable Command Line Tool
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-cbt`
  - Install (apt): `sudo apt install google-cloud-sdk-cbt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-cbt (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-cbt

  </details>

- **google-cloud-sdk-cloud-build-local**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Google Cloud Build Local Builder
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-cloud-build-local`
  - Install (apt): `sudo apt install google-cloud-sdk-cloud-build-local`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-cloud-build-local (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-cloud-build-local

  </details>

- **google-cloud-sdk-cloud-run-proxy**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Cloud Run Proxy
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-cloud-run-proxy`
  - Install (apt): `sudo apt install google-cloud-sdk-cloud-run-proxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-cloud-run-proxy (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-cloud-run-proxy

  </details>

- **google-cloud-sdk-config-connector**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Google Cloud Config Connector
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-config-connector`
  - Install (apt): `sudo apt install google-cloud-sdk-config-connector`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-config-connector (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-config-connector

  </details>

- **google-cloud-sdk-datalab**
  - Latest version: 412.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Command-line utility for Google Cloud Datalab
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-datalab`
  - Install (apt): `sudo apt install google-cloud-sdk-datalab`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-sdk

  </details>

- **google-cloud-sdk-datastore-emulator**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Datastore.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-datastore-emulator`
  - Install (apt): `sudo apt install google-cloud-sdk-datastore-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-datastore-emulator (>= 467.0.0-0), google-cloud-sdk, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-cli-datastore-emulator

  </details>

- **google-cloud-sdk-docker-credential-gcr**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for docker-credential-gcr
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-docker-credential-gcr`
  - Install (apt): `sudo apt install google-cloud-sdk-docker-credential-gcr`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-docker-credential-gcr (>= 467.0.0-0)

  </details>

- **google-cloud-sdk-enterprise-certificate-proxy**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for enterprise-certificate-proxy
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-enterprise-certificate-proxy`
  - Install (apt): `sudo apt install google-cloud-sdk-enterprise-certificate-proxy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-enterprise-certificate-proxy (>= 467.0.0-0)
  - conflicts: google-cloud-cli-enterprise-certificate-proxy

  </details>

- **google-cloud-sdk-firestore-emulator**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Firestore.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-firestore-emulator`
  - Install (apt): `sudo apt install google-cloud-sdk-firestore-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-firestore-emulator (>= 467.0.0-0), google-cloud-sdk, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-cli-firestore-emulator

  </details>

- **google-cloud-sdk-gke-gcloud-auth-plugin**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for gke-gcloud-auth-plugin
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-gke-gcloud-auth-plugin`
  - Install (apt): `sudo apt install google-cloud-sdk-gke-gcloud-auth-plugin`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-gke-gcloud-auth-plugin (>= 467.0.0-0)
  - conflicts: google-cloud-cli-gke-gcloud-auth-plugin

  </details>

- **google-cloud-sdk-harbourbridge**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Harbourbridge
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-harbourbridge`
  - Install (apt): `sudo apt install google-cloud-sdk-harbourbridge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-harbourbridge (>= 467.0.0-0)
  - conflicts: google-cloud-cli-harbourbridge

  </details>

- **google-cloud-sdk-istioctl**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for istioctl
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-istioctl`
  - Install (apt): `sudo apt install google-cloud-sdk-istioctl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-istioctl (>= 467.0.0-0)
  - conflicts: google-cloud-cli-istioctl

  </details>

- **google-cloud-sdk-kpt**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for kpt
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-kpt`
  - Install (apt): `sudo apt install google-cloud-sdk-kpt`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-kpt (>= 467.0.0-0)
  - conflicts: google-cloud-cli-kpt

  </details>

- **google-cloud-sdk-kubectl-oidc**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for kubectl-oidc
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-kubectl-oidc`
  - Install (apt): `sudo apt install google-cloud-sdk-kubectl-oidc`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-kubectl-oidc (>= 467.0.0-0)
  - conflicts: google-cloud-cli-kubectl-oidc

  </details>

- **google-cloud-sdk-local-extract**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for local-extract
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-local-extract`
  - Install (apt): `sudo apt install google-cloud-sdk-local-extract`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-local-extract (>= 467.0.0-0)
  - conflicts: google-cloud-cli-local-extract

  </details>

- **google-cloud-sdk-log-streaming**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Log streaming
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-log-streaming`
  - Install (apt): `sudo apt install google-cloud-sdk-log-streaming`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-log-streaming (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-log-streaming

  </details>

- **google-cloud-sdk-minikube**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Minikube
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-minikube`
  - Install (apt): `sudo apt install google-cloud-sdk-minikube`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-minikube (>= 467.0.0-0)
  - conflicts: google-cloud-cli-minikube

  </details>

- **google-cloud-sdk-nomos**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for nomos
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-nomos`
  - Install (apt): `sudo apt install google-cloud-sdk-nomos`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-nomos (>= 467.0.0-0)
  - conflicts: google-cloud-cli-nomos

  </details>

- **google-cloud-sdk-package-go-module**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for package-go-module
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-package-go-module`
  - Install (apt): `sudo apt install google-cloud-sdk-package-go-module`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-package-go-module (>= 467.0.0-0)
  - conflicts: google-cloud-cli-package-go-module

  </details>

- **google-cloud-sdk-pubsub-emulator**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Emulator for Google Cloud Pubsub.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-pubsub-emulator`
  - Install (apt): `sudo apt install google-cloud-sdk-pubsub-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-pubsub-emulator (>= 467.0.0-0), google-cloud-sdk, openjdk-8-jdk | openjdk-11-jdk, openjdk-8-jdk | openjdk-11-jdk | openjdk-17-jdk | openjdk-21-jdk
  - conflicts: google-cloud-cli-pubsub-emulator

  </details>

- **google-cloud-sdk-skaffold**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Skaffold
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-skaffold`
  - Install (apt): `sudo apt install google-cloud-sdk-skaffold`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-skaffold (>= 467.0.0-0), kubectl
  - conflicts: google-cloud-cli-skaffold

  </details>

- **google-cloud-sdk-spanner-emulator**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Emulator for Google Cloud Spanner.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-spanner-emulator`
  - Install (apt): `sudo apt install google-cloud-sdk-spanner-emulator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-spanner-emulator (>= 467.0.0-0), google-cloud-sdk
  - conflicts: google-cloud-cli-spanner-emulator

  </details>

- **google-cloud-sdk-spanner-migration-tool**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for Spanner migration tool
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-spanner-migration-tool`
  - Install (apt): `sudo apt install google-cloud-sdk-spanner-migration-tool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-spanner-migration-tool (>= 467.0.0-0)
  - conflicts: google-cloud-cli-spanner-migration-tool

  </details>

- **google-cloud-sdk-terraform-tools**
  - Latest version: 467.0.0-0
  - Architectures: all, amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Transitional package for terraform-tools
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-terraform-tools`
  - Install (apt): `sudo apt install google-cloud-sdk-terraform-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud CLI Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: google-cloud-cli-terraform-tools (>= 467.0.0-0)
  - conflicts: google-cloud-cli-terraform-tools

  </details>

- **google-cloud-sdk-terraform-validator**
  - Latest version: 378.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: terraform-validator
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-terraform-validator`
  - Install (apt): `sudo apt install google-cloud-sdk-terraform-validator`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional

  </details>

- **google-cloud-sdk-tests**
  - Latest version: 467.0.0-0
  - Architectures: all
  - Suite: cloud-sdk
  - Components: main
  - Description: Tests for verifying Google Cloud SDK packages.
  - Homepage: https://cloud.google.com/sdk/
  - Install: `sudo apt-get install google-cloud-sdk-tests`
  - Install (apt): `sudo apt install google-cloud-sdk-tests`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Google Cloud SDK Authors <https://code.google.com/p/google-cloud-sdk/>
  - Section: misc
  - Priority: optional
  - depends: git, google-cloud-cli-tests (>= 467.0.0-0), google-cloud-sdk, openssh-client, python3-setuptools
  - conflicts: google-cloud-cli-tests

  </details>


### <a id="packages-K"></a>K

- **kubectl**
  - Latest version: 1:553.0.0-0
  - Architectures: amd64
  - Suite: cloud-sdk
  - Components: main
  - Description: Kubernetes Command Line Tool
  - Homepage: https://kubernetes.io
  - Install: `sudo apt-get install kubectl`
  - Install (apt): `sudo apt install kubectl`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kubernetes Authors <kubernetes-dev+release@googlegroups.com>
  - Section: misc
  - Priority: optional

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Google Cloud SDK (gcloud CLI) apt repository
- Repo tags: google, cloud
- Key notes: Google Cloud CLI package signing key
- Key tags: google, cloud
