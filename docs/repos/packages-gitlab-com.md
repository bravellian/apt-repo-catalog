# packages.gitlab.com/gitlab/gitlab-ce

## Repository
- Repository ID: `packages-gitlab-com`
- Base URL: `https://packages.gitlab.com/gitlab/gitlab-ce/debian`
- Host: `packages.gitlab.com`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://packages.gitlab.com/gitlab/gitlab-ce/install

## Suites
- Suite: `bullseye`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `gitlab-ce`
- Expected fingerprints:
  - F6403F6544A38863DAA0B6E03F01618A51312F3F
- Key source URL: https://packages.gitlab.com/gitlab/gitlab-ce/gpgkey

## Install instructions

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc | gpg --dearmor | sudo tee /usr/share/keyrings/gitlab-ce.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bullseye main" | sudo tee /etc/apt/sources.list.d/packages-gitlab-com-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/gitlab-ce.asc -o /tmp/gitlab-ce.asc
gpg --dearmor /tmp/gitlab-ce.asc
sudo install -m 0644 /tmp/gitlab-ce.gpg /usr/share/keyrings/gitlab-ce.gpg
echo "deb [signed-by=/usr/share/keyrings/gitlab-ce.gpg] https://packages.gitlab.com/gitlab/gitlab-ce/debian bullseye main" | sudo tee /etc/apt/sources.list.d/packages-gitlab-com-bullseye.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: debian, packages.gitlab.com
- Key notes: GitLab CE packages on packages.gitlab.com
- Key tags: git, ci, devtools
