# Debian

## Repository
- Repository ID: `deb-debian-org`
- Base URL: `https://deb.debian.org/debian`
- Host: `deb.debian.org`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: (not set)

## Suites
- Suite: `${debian_release}`
  - Components: /etc/apt/sources.list, |, ${debian_sections}", sudo, tee
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `${debian_release}-updates`
  - Components: -a, /etc/apt/sources.list, |, ${debian_sections}", sudo, tee
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bookworm`
  - Components: main, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bookworm-updates`
  - Components: main, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bullseye`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `bullseye-updates`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `buster`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `buster-updates`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `experimental`
  - Components: contrib, main, non-free, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `forky`
  - Components: main, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `forky-updates`
  - Components: main, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `RELEASE`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `RELEASE-updates`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `sid`
  - Components: contrib, main, non-free, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stable`
  - Components: contrib, main, non-free, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stable-updates`
  - Components: contrib, main, non-free, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stretch`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stretch-proposed-updates`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `stretch-updates`
  - Components: contrib, main, non-free
  - Architectures: (not listed)
  - Observed OSes: (not listed)
- Suite: `testing`
  - Components: contrib, main, non-free, non-free-firmware
  - Architectures: (not listed)
  - Observed OSes: (not listed)

## OS hints
- Debian

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `debian-deb-debian-org-signing-key-b7c5d7d6350947f8`
- Expected fingerprints:
  - B8B80B5B623EAB6AD8775C45B7C5D7D6350947F8
- Key source URL: https://keyserver.ubuntu.com/pks/lookup?op=get&search=0x6ED0E7B82643E131

## Install instructions

### Suite: ${debian_release}

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian ${debian_release} /etc/apt/sources.list | ${debian_sections}" sudo tee" | sudo tee /etc/apt/sources.list.d/deb-debian-org-${debian_release}.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian ${debian_release} /etc/apt/sources.list | ${debian_sections}" sudo tee" | sudo tee /etc/apt/sources.list.d/deb-debian-org-${debian_release}.list >/dev/null
sudo apt-get update
```

### Suite: ${debian_release}-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian ${debian_release}-updates -a /etc/apt/sources.list | ${debian_sections}" sudo tee" | sudo tee /etc/apt/sources.list.d/deb-debian-org-${debian_release}-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian ${debian_release}-updates -a /etc/apt/sources.list | ${debian_sections}" sudo tee" | sudo tee /etc/apt/sources.list.d/deb-debian-org-${debian_release}-updates.list >/dev/null
sudo apt-get update
```

### Suite: bookworm

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bookworm main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bookworm.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bookworm main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bookworm.list >/dev/null
sudo apt-get update
```

### Suite: bookworm-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bookworm-updates main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bookworm-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bookworm-updates main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bookworm-updates.list >/dev/null
sudo apt-get update
```

### Suite: bullseye

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bullseye contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bullseye.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bullseye contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bullseye.list >/dev/null
sudo apt-get update
```

### Suite: bullseye-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bullseye-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bullseye-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian bullseye-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-bullseye-updates.list >/dev/null
sudo apt-get update
```

### Suite: buster

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian buster main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-buster.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian buster main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-buster.list >/dev/null
sudo apt-get update
```

### Suite: buster-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian buster-updates main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-buster-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian buster-updates main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-buster-updates.list >/dev/null
sudo apt-get update
```

### Suite: experimental

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian experimental contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-experimental.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian experimental contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-experimental.list >/dev/null
sudo apt-get update
```

### Suite: forky

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian forky main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-forky.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian forky main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-forky.list >/dev/null
sudo apt-get update
```

### Suite: forky-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian forky-updates main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-forky-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian forky-updates main non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-forky-updates.list >/dev/null
sudo apt-get update
```

### Suite: RELEASE

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian RELEASE main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-RELEASE.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian RELEASE main" | sudo tee /etc/apt/sources.list.d/deb-debian-org-RELEASE.list >/dev/null
sudo apt-get update
```

### Suite: RELEASE-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian RELEASE-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-RELEASE-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian RELEASE-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-RELEASE-updates.list >/dev/null
sudo apt-get update
```

### Suite: sid

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian sid contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-sid.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian sid contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-sid.list >/dev/null
sudo apt-get update
```

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stable contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stable contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stable.list >/dev/null
sudo apt-get update
```

### Suite: stable-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stable-updates contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stable-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stable-updates contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stable-updates.list >/dev/null
sudo apt-get update
```

### Suite: stretch

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch.list >/dev/null
sudo apt-get update
```

### Suite: stretch-proposed-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch-proposed-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch-proposed-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch-proposed-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch-proposed-updates.list >/dev/null
sudo apt-get update
```

### Suite: stretch-updates

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch-updates.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian stretch-updates contrib main non-free" | sudo tee /etc/apt/sources.list.d/deb-debian-org-stretch-updates.list >/dev/null
sudo apt-get update
```

### Suite: testing

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc | gpg --dearmor | sudo tee /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian testing contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-testing.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc -o /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
gpg --dearmor /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.asc
sudo install -m 0644 /tmp/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg /usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg
echo "deb [signed-by=/usr/share/keyrings/debian-deb-debian-org-signing-key-b7c5d7d6350947f8.gpg] https://deb.debian.org/debian testing contrib main non-free non-free-firmware" | sudo tee /etc/apt/sources.list.d/deb-debian-org-testing.list >/dev/null
sudo apt-get update
```


## Packages

Package inventory has not been generated for this repository.

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Discovered via GitHub mining
- Repo tags: deb.debian.org, debian
- Key notes: Discovered via InRelease signature for https://deb.debian.org/debian.
