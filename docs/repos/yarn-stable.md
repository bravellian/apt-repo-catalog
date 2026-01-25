# Yarn (Stable) (ubuntu-22.04)

## Repository
- Repository ID: `yarn-stable`
- OS: `ubuntu-22.04`
- Source: `https://dl.yarnpkg.com/debian/ stable main`

## Upstream documentation
- Documentation URL: https://classic.yarnpkg.com/lang/en/docs/install/
- Key documentation URL: https://classic.yarnpkg.com/lang/en/docs/install/

## Key reference
- Key ID: `yarn`
- Expected fingerprints:
  - 72ECF46A56B4AD39C907BBB71646B01B86E50310
- Key source URL: https://dl.yarnpkg.com/debian/pubkey.gpg

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/yarn.asc | gpg --dearmor | sudo tee /usr/share/keyrings/yarn.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/yarn.asc -o /tmp/yarn.asc
gpg --dearmor /tmp/yarn.asc
sudo install -m 0644 /tmp/yarn.gpg /usr/share/keyrings/yarn.gpg
echo "deb [signed-by=/usr/share/keyrings/yarn.gpg] https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn-stable.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (1)</summary>

<div class="packages-nav">
<a href="#packages-Y">Y</a>
</div>


### <a id="packages-Y"></a>Y

- **yarn**
  - Latest version: 1.22.22-1
  - Architectures: all
  - Suite: stable
  - Components: main
  - Description: Fast, reliable, and secure dependency management.
  - Homepage: https://yarnpkg.com/
  - Install: `sudo apt-get install yarn`
  - Install (apt): `sudo apt install yarn`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Yarn Developers <yarn@dan.cx>
  - Section: devel
  - Priority: optional
  - depends: nodejs (>= 4.0.0)
  - recommends: nodejs
  - conflicts: cmdtest, nodejs (<< 4.0.0)

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Yarn stable distribution repo
- Repo tags: javascript, package manager
- Key notes: Signing key for Yarn's APT repository
- Key tags: javascript, package manager
