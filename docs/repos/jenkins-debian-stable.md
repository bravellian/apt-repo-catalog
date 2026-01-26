# Jenkins (debian-stable)

## Repository
- Repository ID: `jenkins-debian-stable`
- Base URL: `https://pkg.jenkins.io/debian-stable`
- Host: `pkg.jenkins.io`

## Upstream documentation
- Documentation URL: https://pkg.jenkins.io/debian-stable/
- Key documentation URL: https://pkg.jenkins.io/debian-stable/

## Suites
- Suite: `binary/`
  - Components: (not listed)
  - Architectures: (not listed)
  - Observed OSes: generic

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `jenkins`
- Expected fingerprints:
  - 5E386EADB55F01504CAE8BCF7198F4B714ABFC68
- Key source URL: https://pkg.jenkins.io/debian-stable/jenkins.io-2026.key

## Install instructions

### Suite: binary/

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/jenkins.asc | gpg --dearmor | sudo tee /usr/share/keyrings/jenkins.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/jenkins.gpg] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins-debian-stable-binary/.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/jenkins.asc -o /tmp/jenkins.asc
gpg --dearmor /tmp/jenkins.asc
sudo install -m 0644 /tmp/jenkins.gpg /usr/share/keyrings/jenkins.gpg
echo "deb [signed-by=/usr/share/keyrings/jenkins.gpg] https://pkg.jenkins.io/debian-stable binary/" | sudo tee /etc/apt/sources.list.d/jenkins-debian-stable-binary/.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install jenkins
- Repo tags: ci, devtools
- Key notes: Jenkins Debian/Ubuntu repository key
- Key tags: ci, devtools
