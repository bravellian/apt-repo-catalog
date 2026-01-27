# helm

## Repository
- Repository ID: `helm`
- Base URL: `https://packages.buildkite.com/helm-linux/helm-debian/any/`
- Host: `packages.buildkite.com`

## Upstream documentation
- Documentation URL: https://buildkite.com/organizations/helm-linux/packages/registries/helm-debian
- Key documentation URL: https://helm.sh/docs/intro/install/

## Suites
- Suite: `any`
  - Components: main
  - Architectures: alpha, amd64, arm, arm64, armel, armhf, avr32, hppa, i386, ia64, m32, m68k, mips, mips64el, mipsel, musl-linux-amd64, powerpc, ppc64, ppc64el, riscv64, s390, s390x, sh, sparc
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `buildkite-gpgkey-62ba89d07698dbc6`
- Expected fingerprints:
  - DDF78C3E6EBB2D2CC223C95C62BA89D07698DBC6
- Key source URL: https://packages.buildkite.com/helm-linux/helm-debian/gpgkey

## Install instructions

### Suite: any

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/buildkite-gpgkey-62ba89d07698dbc6.asc | gpg --dearmor | sudo tee /usr/share/keyrings/buildkite-gpgkey-62ba89d07698dbc6.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/buildkite-gpgkey-62ba89d07698dbc6.gpg] https://packages.buildkite.com/helm-linux/helm-debian/any/ any main" | sudo tee /etc/apt/sources.list.d/helm-any.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/buildkite-gpgkey-62ba89d07698dbc6.asc -o /tmp/buildkite-gpgkey-62ba89d07698dbc6.asc
gpg --dearmor /tmp/buildkite-gpgkey-62ba89d07698dbc6.asc
sudo install -m 0644 /tmp/buildkite-gpgkey-62ba89d07698dbc6.gpg /usr/share/keyrings/buildkite-gpgkey-62ba89d07698dbc6.gpg
echo "deb [signed-by=/usr/share/keyrings/buildkite-gpgkey-62ba89d07698dbc6.gpg] https://packages.buildkite.com/helm-linux/helm-debian/any/ any main" | sudo tee /etc/apt/sources.list.d/helm-any.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
