# gh

## Repository
- Repository ID: `cli-github-com`
- Base URL: `https://cli.github.com/packages`
- Host: `cli.github.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://github.com/cli/cli/blob/trunk/docs/install_linux.md

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: {{
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `github-cli`
- Expected fingerprints:
  - 2C6106201985B60E6C7AC87323F3D4EA75716059
- Key source URL: https://cli.github.com/packages/githubcli-archive-keyring.gpg

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc | gpg --dearmor | sudo tee /usr/share/keyrings/github-cli.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/cli-github-com-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/github-cli.asc -o /tmp/github-cli.asc
gpg --dearmor /tmp/github-cli.asc
sudo install -m 0644 /tmp/github-cli.gpg /usr/share/keyrings/github-cli.gpg
echo "deb [signed-by=/usr/share/keyrings/github-cli.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/cli-github-com-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: cli.github.com, debian
- Key notes: GitHub CLI apt repository keyring
- Key tags: devtools, git
