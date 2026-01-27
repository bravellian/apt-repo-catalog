# Google Cloud SDK

## Repository
- Repository ID: `google-cloud-sdk`
- Base URL: `https://packages.cloud.google.com/apt`
- Host: `packages.cloud.google.com`

## Upstream documentation
- Documentation URL: https://cloud.google.com/sdk/docs/install-sdk
- Key documentation URL: https://cloud.google.com/sdk/docs/install-sdk

## Suites
- Suite: `cloud-sdk`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `google-cloud`
- Expected fingerprints:
  - 35BAA0B33E9EB396F59CA838C0BA5CE6DC6315A3
- Key source URL: https://packages.cloud.google.com/apt/doc/apt-key.gpg

## Install instructions

### Suite: cloud-sdk

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc | gpg --dearmor | sudo tee /usr/share/keyrings/google-cloud.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/google-cloud-sdk-cloud-sdk.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc -o /tmp/google-cloud.asc
gpg --dearmor /tmp/google-cloud.asc
sudo install -m 0644 /tmp/google-cloud.gpg /usr/share/keyrings/google-cloud.gpg
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/google-cloud-sdk-cloud-sdk.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (0)</summary>

<div class="packages-nav">

</div>


Errors during fetch:
- apt-get update failed

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Google Cloud SDK (gcloud CLI) apt repository
- Repo tags: google, cloud
- Key notes: Google Cloud CLI package signing key
- Key tags: google, cloud
