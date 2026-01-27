# . stable

## Repository
- Repository ID: `repo-anaconda-com`
- Base URL: `https://repo.anaconda.com/pkgs/misc/debrepo/conda`
- Host: `repo.anaconda.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

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
- Key ID: `anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806`
- Expected fingerprints:
  - 34161F5BF5EB1D4BFBBB8F0A8AEB4F8B29D82806
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x8AEB4F8B29D82806

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.asc | gpg --dearmor | sudo tee /usr/share/keyrings/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.gpg] https://repo.anaconda.com/pkgs/misc/debrepo/conda stable main" | sudo tee /etc/apt/sources.list.d/repo-anaconda-com-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.asc -o /tmp/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.asc
gpg --dearmor /tmp/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.asc
sudo install -m 0644 /tmp/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.gpg /usr/share/keyrings/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.gpg
echo "deb [signed-by=/usr/share/keyrings/anaconda-repo-anaconda-com-signing-key-8aeb4f8b29d82806.gpg] https://repo.anaconda.com/pkgs/misc/debrepo/conda stable main" | sudo tee /etc/apt/sources.list.d/repo-anaconda-com-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, repo.anaconda.com
- Key notes: Discovered via InRelease signature for https://repo.anaconda.com/pkgs/misc/debrepo/conda.
