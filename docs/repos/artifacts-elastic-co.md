# elastic

## Repository
- Repository ID: `artifacts-elastic-co`
- Base URL: `https://artifacts.elastic.co/packages/8.x/apt`
- Host: `artifacts.elastic.co`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: amd64
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `elasticsearch`
- Expected fingerprints:
  - 46095ACC8548582C1A2699A9D27D666CD88E42B4
- Key source URL: https://artifacts.elastic.co/GPG-KEY-elasticsearch

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/elasticsearch.asc | gpg --dearmor | sudo tee /usr/share/keyrings/elasticsearch.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/elasticsearch.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/artifacts-elastic-co-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/elasticsearch.asc -o /tmp/elasticsearch.asc
gpg --dearmor /tmp/elasticsearch.asc
sudo install -m 0644 /tmp/elasticsearch.gpg /usr/share/keyrings/elasticsearch.gpg
echo "deb [signed-by=/usr/share/keyrings/elasticsearch.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/artifacts-elastic-co-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: artifacts.elastic.co, debian
- Key notes: Signing key for Elastic apt repository (Elasticsearch, Kibana, Beats, etc.)
- Key tags: search, analytics
