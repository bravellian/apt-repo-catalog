# . stable

## Repository
- Repository ID: `apt-grafana-com`
- Base URL: `https://apt.grafana.com`
- Host: `apt.grafana.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://apt.grafana.com/

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `grafana`
- Expected fingerprints:
  - B53AE77BADB630A683046005963FA27710458545
- Key source URL: https://apt.grafana.com/gpg.key

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/grafana.asc | gpg --dearmor | sudo tee /usr/share/keyrings/grafana.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/apt-grafana-com-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/grafana.asc -o /tmp/grafana.asc
gpg --dearmor /tmp/grafana.asc
sudo install -m 0644 /tmp/grafana.gpg /usr/share/keyrings/grafana.gpg
echo "deb [signed-by=/usr/share/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/apt-grafana-com-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: apt.grafana.com, debian
- Key notes: Grafana signing key (rotated in 2023)
- Key tags: monitoring, analytics
