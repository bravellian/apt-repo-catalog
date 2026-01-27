# cloud-sdk

## Repository
- Repository ID: `packages-cloud-google-com`
- Base URL: `https://packages.cloud.google.com/apt`
- Host: `packages.cloud.google.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://cloud.google.com/sdk/docs/install-sdk

## Suites
- Suite: `cloud-sdk`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `cloud-sdk-bionic`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

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
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/packages-cloud-google-com-cloud-sdk.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc -o /tmp/google-cloud.asc
gpg --dearmor /tmp/google-cloud.asc
sudo install -m 0644 /tmp/google-cloud.gpg /usr/share/keyrings/google-cloud.gpg
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee /etc/apt/sources.list.d/packages-cloud-google-com-cloud-sdk.list >/dev/null
sudo apt-get update
```

### Suite: cloud-sdk-bionic

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc | gpg --dearmor | sudo tee /usr/share/keyrings/google-cloud.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk-bionic main" | sudo tee /etc/apt/sources.list.d/packages-cloud-google-com-cloud-sdk-bionic.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/google-cloud.asc -o /tmp/google-cloud.asc
gpg --dearmor /tmp/google-cloud.asc
sudo install -m 0644 /tmp/google-cloud.gpg /usr/share/keyrings/google-cloud.gpg
echo "deb [signed-by=/usr/share/keyrings/google-cloud.gpg] https://packages.cloud.google.com/apt cloud-sdk-bionic main" | sudo tee /etc/apt/sources.list.d/packages-cloud-google-com-cloud-sdk-bionic.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: packages.cloud.google.com
- Key notes: Google Cloud CLI package signing key
- Key tags: google, cloud
