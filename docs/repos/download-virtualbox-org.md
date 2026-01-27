# Oracle Corporation

## Repository
- Repository ID: `download-virtualbox-org`
- Base URL: `https://download.virtualbox.org/virtualbox/debian`
- Host: `download.virtualbox.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://www.virtualbox.org/wiki/Linux_Downloads

## Suites
- Suite: `xenial`
  - Components: contrib
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `oracle-vbox2016`
- Expected fingerprints:
  - B9F8D658297AF3EFC18D5CDFA2F683C52980AECF
- Key source URL: https://www.virtualbox.org/download/oracle_vbox_2016.asc

## Install instructions

### Suite: xenial

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc | gpg --dearmor | sudo tee /usr/share/keyrings/oracle-vbox2016.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian xenial contrib" | sudo tee /etc/apt/sources.list.d/download-virtualbox-org-xenial.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/oracle-vbox2016.asc -o /tmp/oracle-vbox2016.asc
gpg --dearmor /tmp/oracle-vbox2016.asc
sudo install -m 0644 /tmp/oracle-vbox2016.gpg /usr/share/keyrings/oracle-vbox2016.gpg
echo "deb [signed-by=/usr/share/keyrings/oracle-vbox2016.gpg] https://download.virtualbox.org/virtualbox/debian xenial contrib" | sudo tee /etc/apt/sources.list.d/download-virtualbox-org-xenial.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: download.virtualbox.org, ubuntu
- Key notes: Current VirtualBox APT signing key
- Key tags: virtualization
