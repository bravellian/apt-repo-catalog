# packages.redis.io

## Repository
- Repository ID: `packages-redis-io`
- Base URL: `https://packages.redis.io/deb`
- Host: `packages.redis.io`

## Upstream documentation
- Documentation URL: https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-linux/
- Key documentation URL: https://redis.io/docs/latest/operate/oss_and_stack/install/archive/install-redis/install-redis-on-linux/

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: arm64, amd64, i386, armhf
  - Observed OSes: (not listed)

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `redis-gpg-5f4349d6bf53aa0c`
- Expected fingerprints:
  - 54318FA4052D1E61A6B6F7BB5F4349D6BF53AA0C
- Key source URL: https://packages.redis.io/gpg

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/redis-gpg-5f4349d6bf53aa0c.asc | gpg --dearmor | sudo tee /usr/share/keyrings/redis-gpg-5f4349d6bf53aa0c.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/redis-gpg-5f4349d6bf53aa0c.gpg] https://packages.redis.io/deb stable main" | sudo tee /etc/apt/sources.list.d/packages-redis-io-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/redis-gpg-5f4349d6bf53aa0c.asc -o /tmp/redis-gpg-5f4349d6bf53aa0c.asc
gpg --dearmor /tmp/redis-gpg-5f4349d6bf53aa0c.asc
sudo install -m 0644 /tmp/redis-gpg-5f4349d6bf53aa0c.gpg /usr/share/keyrings/redis-gpg-5f4349d6bf53aa0c.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-gpg-5f4349d6bf53aa0c.gpg] https://packages.redis.io/deb stable main" | sudo tee /etc/apt/sources.list.d/packages-redis-io-stable.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
