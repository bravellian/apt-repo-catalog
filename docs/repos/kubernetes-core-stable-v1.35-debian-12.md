# Kubernetes core stable v1.35 - Debian 12 (debian-12)

## Repository
- Repository ID: `kubernetes-core-stable-v1.35-debian-12`
- OS: `debian-12`
- Source: `https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /`

## Upstream documentation
- Documentation URL: (not set)
- Key documentation URL: https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/

## Key reference
- Key ID: `kubernetes-release-key-234654da9a296436`
- Expected fingerprints:
  - DE15B14486CD377B9E876E1A234654DA9A296436
- Key source URL: https://pkgs.k8s.io/core:/stable:/v1.35/deb/Release.key

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kubernetes-release-key-234654da9a296436.asc | gpg --dearmor | sudo tee /usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg] https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes-core-stable-v1.35-debian-12.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/kubernetes-release-key-234654da9a296436.asc -o /tmp/kubernetes-release-key-234654da9a296436.asc
gpg --dearmor /tmp/kubernetes-release-key-234654da9a296436.asc
sudo install -m 0644 /tmp/kubernetes-release-key-234654da9a296436.gpg /usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg
echo "deb [signed-by=/usr/share/keyrings/kubernetes-release-key-234654da9a296436.gpg] https://pkgs.k8s.io/core:/stable:/v1.35/deb/ /" | sudo tee /etc/apt/sources.list.d/kubernetes-core-stable-v1.35-debian-12.list >/dev/null
sudo apt-get update
```

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
