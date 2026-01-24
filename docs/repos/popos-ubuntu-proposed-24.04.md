# Pop!_OS ubuntu proposed - 24.04 (popos-24.04)

## Repository
- Repository ID: `popos-ubuntu-proposed-24.04`
- OS: `popos-24.04`
- Source: `http://apt.pop-os.org/ubuntu noble-proposed main multiverse restricted universe`

## Upstream documentation
- Documentation URL: https://support.system76.com/articles/apt-repository/
- Key documentation URL: https://support.system76.com/articles/apt-repository/

## Key reference
- Key ID: `popos-lookup-204dd8aec33a7aff`
- Expected fingerprints:
  - 63C46DF0140D738961429F4E204DD8AEC33A7AFF
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x204DD8AEC33A7AFF

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc | gpg --dearmor | sudo tee /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/ubuntu noble-proposed main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/popos-ubuntu-proposed-24.04.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/popos-lookup-204dd8aec33a7aff.asc -o /tmp/popos-lookup-204dd8aec33a7aff.asc
gpg --dearmor /tmp/popos-lookup-204dd8aec33a7aff.asc
sudo install -m 0644 /tmp/popos-lookup-204dd8aec33a7aff.gpg /usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg
echo "deb [signed-by=/usr/share/keyrings/popos-lookup-204dd8aec33a7aff.gpg] http://apt.pop-os.org/ubuntu noble-proposed main multiverse restricted universe" | sudo tee /etc/apt/sources.list.d/popos-ubuntu-proposed-24.04.list >/dev/null
sudo apt-get update
```

## Packages

Package inventory has not been generated for this repository.

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Proposed updates are pre-release; not recommended by upstream.
- Repo tags: popos, ubuntu-derivative, apt
- Key tags: popos, apt
