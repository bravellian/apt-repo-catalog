# .

## Repository
- Repository ID: `cache-ruby-lang-org`
- Base URL: `https://cache.ruby-lang.org/lab/sorah/deb`
- Host: `cache.ruby-lang.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `focal`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `jammy`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8`
- Expected fingerprints:
  - 805E57E2327EE86EB8180E0669CEB9D53F0F56A8
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x69CEB9D53F0F56A8

## Install instructions

### Suite: focal

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg] https://cache.ruby-lang.org/lab/sorah/deb focal main" | sudo tee /etc/apt/sources.list.d/cache-ruby-lang-org-focal.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc -o /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc
gpg --dearmor /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc
sudo install -m 0644 /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg /usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg
echo "deb [signed-by=/usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg] https://cache.ruby-lang.org/lab/sorah/deb focal main" | sudo tee /etc/apt/sources.list.d/cache-ruby-lang-org-focal.list >/dev/null
sudo apt-get update
```

### Suite: jammy

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg] https://cache.ruby-lang.org/lab/sorah/deb jammy main" | sudo tee /etc/apt/sources.list.d/cache-ruby-lang-org-jammy.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc -o /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc
gpg --dearmor /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.asc
sudo install -m 0644 /tmp/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg /usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg
echo "deb [signed-by=/usr/share/keyrings/ruby-lang-cache-ruby-lang-org-signing-key-69ceb9d53f0f56a8.gpg] https://cache.ruby-lang.org/lab/sorah/deb jammy main" | sudo tee /etc/apt/sources.list.d/cache-ruby-lang-org-jammy.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: cache.ruby-lang.org, ubuntu
- Key notes: Discovered via InRelease signature for https://cache.ruby-lang.org/lab/sorah/deb.
