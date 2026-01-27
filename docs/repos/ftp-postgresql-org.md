# pgAdmin Development Team

## Repository
- Repository ID: `ftp-postgresql-org`
- Base URL: `https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble`
- Host: `ftp.postgresql.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `pgadmin4`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2`
- Expected fingerprints:
  - E8697E2EEF76C02D3A6332778881B2A8210976F2
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x8881B2A8210976F2

## Install instructions

### Suite: pgadmin4

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.asc | gpg --dearmor | sudo tee /usr/share/keyrings/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble pgadmin4 main" | sudo tee /etc/apt/sources.list.d/ftp-postgresql-org-pgadmin4.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.asc -o /tmp/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.asc
gpg --dearmor /tmp/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.asc
sudo install -m 0644 /tmp/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.gpg /usr/share/keyrings/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.gpg
echo "deb [signed-by=/usr/share/keyrings/postgresql-ftp-postgresql-org-signing-key-8881b2a8210976f2.gpg] https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble pgadmin4 main" | sudo tee /etc/apt/sources.list.d/ftp-postgresql-org-pgadmin4.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: ftp.postgresql.org
- Key notes: Discovered via InRelease signature for https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/noble.
