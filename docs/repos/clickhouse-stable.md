# ClickHouse (stable)

## Repository
- Repository ID: `clickhouse-stable`
- Base URL: `https://packages.clickhouse.com/deb`
- Host: `packages.clickhouse.com`

## Upstream documentation
- Documentation URL: https://clickhouse.com/docs/install/debian_ubuntu
- Key documentation URL: https://clickhouse.com/docs/install/debian_ubuntu

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: amd64
  - Observed OSes: generic

## OS hints
- (not listed)

## Usage notes
- Use the suite codename provided by your OS; OS hints are not available for this repo.

## Key reference
- Key ID: `clickhouse`
- Expected fingerprints:
  - 3A9EA1193A97B548BE1457D48919F6BD2B48D754
- Key source URL: https://packages.clickhouse.com/rpm/lts/repodata/repomd.xml.key

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/clickhouse.asc | gpg --dearmor | sudo tee /usr/share/keyrings/clickhouse.gpg >/dev/null
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/clickhouse.gpg] https://packages.clickhouse.com/deb stable main" | sudo tee /etc/apt/sources.list.d/clickhouse-stable-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/clickhouse.asc -o /tmp/clickhouse.asc
gpg --dearmor /tmp/clickhouse.asc
sudo install -m 0644 /tmp/clickhouse.gpg /usr/share/keyrings/clickhouse.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/clickhouse.gpg] https://packages.clickhouse.com/deb stable main" | sudo tee /etc/apt/sources.list.d/clickhouse-stable-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (8)</summary>

<div class="packages-nav">
<a href="#packages-C">C</a>
</div>


### <a id="packages-C"></a>C

- **clickhouse-client**
  - Latest version: 25.12.4.35
  - Architectures: all, amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Client binary for ClickHouse
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-client`
  - Install (apt): `sudo apt install clickhouse-client`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional
  - depends: clickhouse-common-static (= 21.1.9.41), clickhouse-common-static (= 21.10.6.2), clickhouse-common-static (= 21.11.11.1), clickhouse-common-static (= 21.12.4.1), clickhouse-common-static (= 21.2.10.48), clickhouse-common-static (= 21.3.20.1), clickhouse-common-static (= 21.4.7.3), clickhouse-common-static (= 21.5.9.4), clickhouse-common-static (= 21.6.9.7), clickhouse-common-static (= 21.7.11.3), clickhouse-common-static (= 21.8.15.7), clickhouse-common-static (= 21.9.6.24), clickhouse-common-static (= 22.1.2.2), clickhouse-common-static (= 22.1.3.7), clickhouse-common-static (= 22.1.4.30), clickhouse-common-static (= 22.10.1.1877), clickhouse-common-static (= 22.10.2.11), clickhouse-common-static (= 22.10.3.27), clickhouse-common-static (= 22.10.4.23), clickhouse-common-static (= 22.10.5.54), clickhouse-common-static (= 22.10.6.3), clickhouse-common-static (= 22.10.7.13), clickhouse-common-static (= 22.11.1.1360), clickhouse-common-static (= 22.11.2.30), clickhouse-common-static (= 22.11.3.47), clickhouse-common-static (= 22.11.4.3), clickhouse-common-static (= 22.11.5.15), clickhouse-common-static (= 22.11.6.44), clickhouse-common-static (= 22.12.1.1752), clickhouse-common-static (= 22.12.2.25), clickhouse-common-static (= 22.12.3.5), clickhouse-common-static (= 22.12.4.76), clickhouse-common-static (= 22.12.5.34), clickhouse-common-static (= 22.12.6.22), clickhouse-common-static (= 22.2.2.1), clickhouse-common-static (= 22.2.3.5), clickhouse-common-static (= 22.3.10.22), clickhouse-common-static (= 22.3.11.12), clickhouse-common-static (= 22.3.12.19), clickhouse-common-static (= 22.3.13.80), clickhouse-common-static (= 22.3.14.23), clickhouse-common-static (= 22.3.15.33), clickhouse-common-static (= 22.3.16.1190), clickhouse-common-static (= 22.3.17.13), clickhouse-common-static (= 22.3.18.37), clickhouse-common-static (= 22.3.19.6), clickhouse-common-static (= 22.3.2.2), clickhouse-common-static (= 22.3.20.29), clickhouse-common-static (= 22.3.3.44), clickhouse-common-static (= 22.3.4.20), clickhouse-common-static (= 22.3.5.5), clickhouse-common-static (= 22.3.6.5), clickhouse-common-static (= 22.3.7.28), clickhouse-common-static (= 22.3.8.39), clickhouse-common-static (= 22.3.9.19), clickhouse-common-static (= 22.4.2.1), clickhouse-common-static (= 22.4.3.3), clickhouse-common-static (= 22.4.4.7), clickhouse-common-static (= 22.4.5.9), clickhouse-common-static (= 22.4.6.53), clickhouse-common-static (= 22.5.1.2079), clickhouse-common-static (= 22.5.2.53), clickhouse-common-static (= 22.5.3.21), clickhouse-common-static (= 22.5.4.19), clickhouse-common-static (= 22.6.1.1985), clickhouse-common-static (= 22.6.2.12), clickhouse-common-static (= 22.6.3.35), clickhouse-common-static (= 22.6.4.35), clickhouse-common-static (= 22.6.5.22), clickhouse-common-static (= 22.6.6.16), clickhouse-common-static (= 22.6.7.7), clickhouse-common-static (= 22.6.8.35), clickhouse-common-static (= 22.6.9.11), clickhouse-common-static (= 22.7.1.2484), clickhouse-common-static (= 22.7.2.15), clickhouse-common-static (= 22.7.3.5), clickhouse-common-static (= 22.7.4.16), clickhouse-common-static (= 22.7.5.13), clickhouse-common-static (= 22.7.6.74), clickhouse-common-static (= 22.7.7.24), clickhouse-common-static (= 22.8.1.2097), clickhouse-common-static (= 22.8.10.29), clickhouse-common-static (= 22.8.11.15), clickhouse-common-static (= 22.8.12.45), clickhouse-common-static (= 22.8.13.20), clickhouse-common-static (= 22.8.14.53), clickhouse-common-static (= 22.8.15.23), clickhouse-common-static (= 22.8.16.32), clickhouse-common-static (= 22.8.17.17), clickhouse-common-static (= 22.8.18.31), clickhouse-common-static (= 22.8.19.10), clickhouse-common-static (= 22.8.2.11), clickhouse-common-static (= 22.8.20.11), clickhouse-common-static (= 22.8.21.38), clickhouse-common-static (= 22.8.3.13), clickhouse-common-static (= 22.8.4.7), clickhouse-common-static (= 22.8.5.29), clickhouse-common-static (= 22.8.6.71), clickhouse-common-static (= 22.8.7.34), clickhouse-common-static (= 22.8.8.3), clickhouse-common-static (= 22.8.9.24), clickhouse-common-static (= 22.9.1.2603), clickhouse-common-static (= 22.9.2.7), clickhouse-common-static (= 22.9.3.18), clickhouse-common-static (= 22.9.4.32), clickhouse-common-static (= 22.9.5.25), clickhouse-common-static (= 22.9.6.20), clickhouse-common-static (= 22.9.7.34), clickhouse-common-static (= 23.1.1.3077), clickhouse-common-static (= 23.1.2.9), clickhouse-common-static (= 23.1.3.5), clickhouse-common-static (= 23.1.4.58), clickhouse-common-static (= 23.1.5.24), clickhouse-common-static (= 23.1.6.42), clickhouse-common-static (= 23.1.7.30), clickhouse-common-static (= 23.10.1.1976), clickhouse-common-static (= 23.10.2.13), clickhouse-common-static (= 23.10.3.5), clickhouse-common-static (= 23.10.4.25), clickhouse-common-static (= 23.10.5.20), clickhouse-common-static (= 23.10.6.60), clickhouse-common-static (= 23.11.1.2711), clickhouse-common-static (= 23.11.2.11), clickhouse-common-static (= 23.11.3.23), clickhouse-common-static (= 23.11.4.24), clickhouse-common-static (= 23.11.5.29), clickhouse-common-static (= 23.12.1.1368), clickhouse-common-static (= 23.12.2.59), clickhouse-common-static (= 23.12.3.40), clickhouse-common-static (= 23.12.4.15), clickhouse-common-static (= 23.12.5.81), clickhouse-common-static (= 23.12.6.19), clickhouse-common-static (= 23.2.1.2537), clickhouse-common-static (= 23.2.2.20), clickhouse-common-static (= 23.2.3.17), clickhouse-common-static (= 23.2.4.12), clickhouse-common-static (= 23.2.5.46), clickhouse-common-static (= 23.2.6.34), clickhouse-common-static (= 23.2.7.32), clickhouse-common-static (= 23.3.1.2823), clickhouse-common-static (= 23.3.10.5), clickhouse-common-static (= 23.3.11.5), clickhouse-common-static (= 23.3.12.11), clickhouse-common-static (= 23.3.13.6), clickhouse-common-static (= 23.3.14.78), clickhouse-common-static (= 23.3.15.29), clickhouse-common-static (= 23.3.16.7), clickhouse-common-static (= 23.3.17.13), clickhouse-common-static (= 23.3.18.15), clickhouse-common-static (= 23.3.19.32), clickhouse-common-static (= 23.3.2.37), clickhouse-common-static (= 23.3.20.27), clickhouse-common-static (= 23.3.21.26), clickhouse-common-static (= 23.3.22.3), clickhouse-common-static (= 23.3.3.52), clickhouse-common-static (= 23.3.4.17), clickhouse-common-static (= 23.3.5.9), clickhouse-common-static (= 23.3.6.7), clickhouse-common-static (= 23.3.7.5), clickhouse-common-static (= 23.3.8.21), clickhouse-common-static (= 23.3.9.55), clickhouse-common-static (= 23.4.1.1943), clickhouse-common-static (= 23.4.2.11), clickhouse-common-static (= 23.4.3.48), clickhouse-common-static (= 23.4.4.16), clickhouse-common-static (= 23.4.5.22), clickhouse-common-static (= 23.4.6.25), clickhouse-common-static (= 23.5.1.3174), clickhouse-common-static (= 23.5.2.7), clickhouse-common-static (= 23.5.3.24), clickhouse-common-static (= 23.5.4.25), clickhouse-common-static (= 23.5.5.92), clickhouse-common-static (= 23.6.1.1524), clickhouse-common-static (= 23.6.2.18), clickhouse-common-static (= 23.6.3.87), clickhouse-common-static (= 23.7.1.2470), clickhouse-common-static (= 23.7.2.25), clickhouse-common-static (= 23.7.3.14), clickhouse-common-static (= 23.7.4.5), clickhouse-common-static (= 23.7.5.30), clickhouse-common-static (= 23.7.6.111), clickhouse-common-static (= 23.8.1.2992), clickhouse-common-static (= 23.8.10.43), clickhouse-common-static (= 23.8.11.28), clickhouse-common-static (= 23.8.12.13), clickhouse-common-static (= 23.8.13.25), clickhouse-common-static (= 23.8.14.6), clickhouse-common-static (= 23.8.15.35), clickhouse-common-static (= 23.8.16.40), clickhouse-common-static (= 23.8.2.7), clickhouse-common-static (= 23.8.3.48), clickhouse-common-static (= 23.8.4.69), clickhouse-common-static (= 23.8.5.16), clickhouse-common-static (= 23.8.6.16), clickhouse-common-static (= 23.8.7.24), clickhouse-common-static (= 23.8.8.20), clickhouse-common-static (= 23.8.9.54), clickhouse-common-static (= 23.9.1.1854), clickhouse-common-static (= 23.9.2.56), clickhouse-common-static (= 23.9.3.12), clickhouse-common-static (= 23.9.4.11), clickhouse-common-static (= 23.9.5.29), clickhouse-common-static (= 23.9.6.20), clickhouse-common-static (= 24.1.1.2048), clickhouse-common-static (= 24.1.2.5), clickhouse-common-static (= 24.1.3.31), clickhouse-common-static (= 24.1.4.20), clickhouse-common-static (= 24.1.5.6), clickhouse-common-static (= 24.1.6.52), clickhouse-common-static (= 24.1.7.18), clickhouse-common-static (= 24.1.8.22), clickhouse-common-static (= 24.10.1.2812), clickhouse-common-static (= 24.10.2.80), clickhouse-common-static (= 24.10.3.21), clickhouse-common-static (= 24.10.4.191), clickhouse-common-static (= 24.11.1.2557), clickhouse-common-static (= 24.11.2.101), clickhouse-common-static (= 24.11.3.66), clickhouse-common-static (= 24.11.4.45), clickhouse-common-static (= 24.11.5.49), clickhouse-common-static (= 24.12.1.1614), clickhouse-common-static (= 24.12.2.29), clickhouse-common-static (= 24.12.3.47), clickhouse-common-static (= 24.12.4.49), clickhouse-common-static (= 24.12.5.81), clickhouse-common-static (= 24.12.6.70), clickhouse-common-static (= 24.2.1.2248), clickhouse-common-static (= 24.2.2.71), clickhouse-common-static (= 24.2.3.70), clickhouse-common-static (= 24.3.1.2672), clickhouse-common-static (= 24.3.10.33), clickhouse-common-static (= 24.3.11.7), clickhouse-common-static (= 24.3.12.75), clickhouse-common-static (= 24.3.13.40), clickhouse-common-static (= 24.3.14.35), clickhouse-common-static (= 24.3.15.72), clickhouse-common-static (= 24.3.16.16), clickhouse-common-static (= 24.3.17.18), clickhouse-common-static (= 24.3.18.7), clickhouse-common-static (= 24.3.2.23), clickhouse-common-static (= 24.3.3.102), clickhouse-common-static (= 24.3.4.147), clickhouse-common-static (= 24.3.5.46), clickhouse-common-static (= 24.3.6.48), clickhouse-common-static (= 24.3.7.30), clickhouse-common-static (= 24.3.8.13), clickhouse-common-static (= 24.3.9.5), clickhouse-common-static (= 24.4.1.2088), clickhouse-common-static (= 24.4.2.141), clickhouse-common-static (= 24.4.3.25), clickhouse-common-static (= 24.4.4.105), clickhouse-common-static (= 24.4.4.107), clickhouse-common-static (= 24.4.4.113), clickhouse-common-static (= 24.5.1.1763), clickhouse-common-static (= 24.5.2.34), clickhouse-common-static (= 24.5.3.5), clickhouse-common-static (= 24.5.4.49), clickhouse-common-static (= 24.5.5.41), clickhouse-common-static (= 24.5.5.78), clickhouse-common-static (= 24.5.6.45), clickhouse-common-static (= 24.5.7.31), clickhouse-common-static (= 24.5.8.10), clickhouse-common-static (= 24.6.1.4423), clickhouse-common-static (= 24.6.2.17), clickhouse-common-static (= 24.6.3.38), clickhouse-common-static (= 24.6.3.95), clickhouse-common-static (= 24.6.4.42), clickhouse-common-static (= 24.6.5.30), clickhouse-common-static (= 24.6.6.6), clickhouse-common-static (= 24.7.1.2915), clickhouse-common-static (= 24.7.2.13), clickhouse-common-static (= 24.7.3.42), clickhouse-common-static (= 24.7.3.47), clickhouse-common-static (= 24.7.4.51), clickhouse-common-static (= 24.7.5.37), clickhouse-common-static (= 24.7.6.8), clickhouse-common-static (= 24.8.1.2684), clickhouse-common-static (= 24.8.10.5), clickhouse-common-static (= 24.8.11.5), clickhouse-common-static (= 24.8.12.28), clickhouse-common-static (= 24.8.13.16), clickhouse-common-static (= 24.8.14.39), clickhouse-common-static (= 24.8.2.3), clickhouse-common-static (= 24.8.3.59), clickhouse-common-static (= 24.8.4.13), clickhouse-common-static (= 24.8.5.115), clickhouse-common-static (= 24.8.6.70), clickhouse-common-static (= 24.8.7.41), clickhouse-common-static (= 24.8.8.17), clickhouse-common-static (= 24.8.9.95), clickhouse-common-static (= 24.9.1.3278), clickhouse-common-static (= 24.9.2.42), clickhouse-common-static (= 24.9.3.128), clickhouse-common-static (= 25.1.1.4165), clickhouse-common-static (= 25.1.2.3), clickhouse-common-static (= 25.1.3.23), clickhouse-common-static (= 25.1.4.53), clickhouse-common-static (= 25.1.5.31), clickhouse-common-static (= 25.1.6.34), clickhouse-common-static (= 25.1.7.20), clickhouse-common-static (= 25.1.8.25), clickhouse-common-static (= 25.10.1.3832), clickhouse-common-static (= 25.10.2.65), clickhouse-common-static (= 25.10.3.100), clickhouse-common-static (= 25.10.4.104), clickhouse-common-static (= 25.10.5.40), clickhouse-common-static (= 25.11.1.558), clickhouse-common-static (= 25.11.2.24), clickhouse-common-static (= 25.11.3.54), clickhouse-common-static (= 25.11.4.19), clickhouse-common-static (= 25.11.5.8), clickhouse-common-static (= 25.11.6.11), clickhouse-common-static (= 25.11.7.41), clickhouse-common-static (= 25.12.1.649), clickhouse-common-static (= 25.12.2.54), clickhouse-common-static (= 25.12.3.21), clickhouse-common-static (= 25.12.4.35), clickhouse-common-static (= 25.2.1.3085), clickhouse-common-static (= 25.2.2.39), clickhouse-common-static (= 25.3.1.2703), clickhouse-common-static (= 25.3.10.19), clickhouse-common-static (= 25.3.11.20), clickhouse-common-static (= 25.3.12.8), clickhouse-common-static (= 25.3.13.19), clickhouse-common-static (= 25.3.2.39), clickhouse-common-static (= 25.3.3.42), clickhouse-common-static (= 25.3.4.190), clickhouse-common-static (= 25.3.5.42), clickhouse-common-static (= 25.3.6.56), clickhouse-common-static (= 25.3.7.194), clickhouse-common-static (= 25.3.8.23), clickhouse-common-static (= 25.3.9.72), clickhouse-common-static (= 25.4.1.2934), clickhouse-common-static (= 25.4.10.45), clickhouse-common-static (= 25.4.11.15), clickhouse-common-static (= 25.4.12.9), clickhouse-common-static (= 25.4.13.22), clickhouse-common-static (= 25.4.2.31), clickhouse-common-static (= 25.4.3.22), clickhouse-common-static (= 25.4.4.25), clickhouse-common-static (= 25.4.5.24), clickhouse-common-static (= 25.4.6.67), clickhouse-common-static (= 25.4.7.66), clickhouse-common-static (= 25.4.8.56), clickhouse-common-static (= 25.4.9.14), clickhouse-common-static (= 25.5.1.2782), clickhouse-common-static (= 25.5.10.95), clickhouse-common-static (= 25.5.11.15), clickhouse-common-static (= 25.5.2.47), clickhouse-common-static (= 25.5.3.75), clickhouse-common-static (= 25.5.4.38), clickhouse-common-static (= 25.5.5.19), clickhouse-common-static (= 25.5.6.14), clickhouse-common-static (= 25.5.7.52), clickhouse-common-static (= 25.5.8.13), clickhouse-common-static (= 25.5.9.14), clickhouse-common-static (= 25.6.1.3206), clickhouse-common-static (= 25.6.10.16), clickhouse-common-static (= 25.6.11.18), clickhouse-common-static (= 25.6.12.10), clickhouse-common-static (= 25.6.13.41), clickhouse-common-static (= 25.6.2.5), clickhouse-common-static (= 25.6.3.116), clickhouse-common-static (= 25.6.4.12), clickhouse-common-static (= 25.6.5.41), clickhouse-common-static (= 25.6.6.29), clickhouse-common-static (= 25.6.7.23), clickhouse-common-static (= 25.6.8.10), clickhouse-common-static (= 25.6.9.98), clickhouse-common-static (= 25.7.1.3997), clickhouse-common-static (= 25.7.2.54), clickhouse-common-static (= 25.7.3.13), clickhouse-common-static (= 25.7.4.11), clickhouse-common-static (= 25.7.5.34), clickhouse-common-static (= 25.7.6.21), clickhouse-common-static (= 25.7.7.68), clickhouse-common-static (= 25.7.8.71), clickhouse-common-static (= 25.8.1.5101), clickhouse-common-static (= 25.8.10.7), clickhouse-common-static (= 25.8.11.66), clickhouse-common-static (= 25.8.12.129), clickhouse-common-static (= 25.8.13.73), clickhouse-common-static (= 25.8.14.17), clickhouse-common-static (= 25.8.15.35), clickhouse-common-static (= 25.8.2.29), clickhouse-common-static (= 25.8.3.66), clickhouse-common-static (= 25.8.4.13), clickhouse-common-static (= 25.8.5.17), clickhouse-common-static (= 25.8.6.11), clickhouse-common-static (= 25.8.7.3), clickhouse-common-static (= 25.8.8.26), clickhouse-common-static (= 25.8.9.20), clickhouse-common-static (= 25.9.2.1), clickhouse-common-static (= 25.9.3.48), clickhouse-common-static (= 25.9.4.58), clickhouse-common-static (= 25.9.5.21), clickhouse-common-static (= 25.9.6.117), clickhouse-common-static (= 25.9.7.56)
  - conflicts: clickhouse-compressor
  - replaces: clickhouse-compressor

  </details>

- **clickhouse-common-static**
  - Latest version: 25.12.4.35
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Common files for ClickHouse
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-common-static`
  - Install (apt): `sudo apt install clickhouse-common-static`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional
  - suggests: clickhouse-common-static-dbg
  - replaces: clickhouse-common, clickhouse-server-base
  - provides: clickhouse-common, clickhouse-server-base

  </details>

- **clickhouse-common-static-dbg**
  - Latest version: 25.12.4.35
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: debugging symbols for clickhouse-common-static
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-common-static-dbg`
  - Install (apt): `sudo apt install clickhouse-common-static-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional
  - conflicts: clickhouse-common-dbg
  - replaces: clickhouse-common-dbg

  </details>

- **clickhouse-keeper**
  - Latest version: 25.12.4.35
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Static clickhouse-keeper binary
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-keeper`
  - Install (apt): `sudo apt install clickhouse-keeper`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional
  - depends: adduser
  - suggests: clickhouse-keeper-dbg
  - conflicts: clickhouse-server

  </details>

- **clickhouse-keeper-dbg**
  - Latest version: 25.12.4.35
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: debugging symbols for clickhouse-keeper
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-keeper-dbg`
  - Install (apt): `sudo apt install clickhouse-keeper-dbg`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional

  </details>

- **clickhouse-library-bridge**
  - Latest version: 25.1.5.31
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: ClickHouse Library Bridge - is a separate process for loading libraries for the 'library' dictionary sources and the CatBoost library.
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-library-bridge`
  - Install (apt): `sudo apt install clickhouse-library-bridge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional

  </details>

- **clickhouse-odbc-bridge**
  - Latest version: 25.1.5.31
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: ClickHouse ODBC Bridge - is a separate process for loading ODBC drivers and interacting with external databases using the ODBC protocol.
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-odbc-bridge`
  - Install (apt): `sudo apt install clickhouse-odbc-bridge`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional

  </details>

- **clickhouse-server**
  - Latest version: 25.12.4.35
  - Architectures: all, amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Server binary for ClickHouse
  - Homepage: https://clickhouse.com
  - Install: `sudo apt-get install clickhouse-server`
  - Install (apt): `sudo apt install clickhouse-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: ClickHouse Dev Team <packages+linux@clickhouse.com>
  - Section: database
  - Priority: optional
  - depends: adduser, clickhouse-common-static (= 21.1.9.41), clickhouse-common-static (= 21.10.6.2), clickhouse-common-static (= 21.11.11.1), clickhouse-common-static (= 21.12.4.1), clickhouse-common-static (= 21.2.10.48), clickhouse-common-static (= 21.3.20.1), clickhouse-common-static (= 21.4.7.3), clickhouse-common-static (= 21.5.9.4), clickhouse-common-static (= 21.6.9.7), clickhouse-common-static (= 21.7.11.3), clickhouse-common-static (= 21.8.15.7), clickhouse-common-static (= 21.9.6.24), clickhouse-common-static (= 22.1.2.2), clickhouse-common-static (= 22.1.3.7), clickhouse-common-static (= 22.1.4.30), clickhouse-common-static (= 22.10.1.1877), clickhouse-common-static (= 22.10.2.11), clickhouse-common-static (= 22.10.3.27), clickhouse-common-static (= 22.10.4.23), clickhouse-common-static (= 22.10.5.54), clickhouse-common-static (= 22.10.6.3), clickhouse-common-static (= 22.10.7.13), clickhouse-common-static (= 22.11.1.1360), clickhouse-common-static (= 22.11.2.30), clickhouse-common-static (= 22.11.3.47), clickhouse-common-static (= 22.11.4.3), clickhouse-common-static (= 22.11.5.15), clickhouse-common-static (= 22.11.6.44), clickhouse-common-static (= 22.12.1.1752), clickhouse-common-static (= 22.12.2.25), clickhouse-common-static (= 22.12.3.5), clickhouse-common-static (= 22.12.4.76), clickhouse-common-static (= 22.12.5.34), clickhouse-common-static (= 22.12.6.22), clickhouse-common-static (= 22.2.2.1), clickhouse-common-static (= 22.2.3.5), clickhouse-common-static (= 22.3.10.22), clickhouse-common-static (= 22.3.11.12), clickhouse-common-static (= 22.3.12.19), clickhouse-common-static (= 22.3.13.80), clickhouse-common-static (= 22.3.14.23), clickhouse-common-static (= 22.3.15.33), clickhouse-common-static (= 22.3.16.1190), clickhouse-common-static (= 22.3.17.13), clickhouse-common-static (= 22.3.18.37), clickhouse-common-static (= 22.3.19.6), clickhouse-common-static (= 22.3.2.2), clickhouse-common-static (= 22.3.20.29), clickhouse-common-static (= 22.3.3.44), clickhouse-common-static (= 22.3.4.20), clickhouse-common-static (= 22.3.5.5), clickhouse-common-static (= 22.3.6.5), clickhouse-common-static (= 22.3.7.28), clickhouse-common-static (= 22.3.8.39), clickhouse-common-static (= 22.3.9.19), clickhouse-common-static (= 22.4.2.1), clickhouse-common-static (= 22.4.3.3), clickhouse-common-static (= 22.4.4.7), clickhouse-common-static (= 22.4.5.9), clickhouse-common-static (= 22.4.6.53), clickhouse-common-static (= 22.5.1.2079), clickhouse-common-static (= 22.5.2.53), clickhouse-common-static (= 22.5.3.21), clickhouse-common-static (= 22.5.4.19), clickhouse-common-static (= 22.6.1.1985), clickhouse-common-static (= 22.6.2.12), clickhouse-common-static (= 22.6.3.35), clickhouse-common-static (= 22.6.4.35), clickhouse-common-static (= 22.6.5.22), clickhouse-common-static (= 22.6.6.16), clickhouse-common-static (= 22.6.7.7), clickhouse-common-static (= 22.6.8.35), clickhouse-common-static (= 22.6.9.11), clickhouse-common-static (= 22.7.1.2484), clickhouse-common-static (= 22.7.2.15), clickhouse-common-static (= 22.7.3.5), clickhouse-common-static (= 22.7.4.16), clickhouse-common-static (= 22.7.5.13), clickhouse-common-static (= 22.7.6.74), clickhouse-common-static (= 22.7.7.24), clickhouse-common-static (= 22.8.1.2097), clickhouse-common-static (= 22.8.10.29), clickhouse-common-static (= 22.8.11.15), clickhouse-common-static (= 22.8.12.45), clickhouse-common-static (= 22.8.13.20), clickhouse-common-static (= 22.8.14.53), clickhouse-common-static (= 22.8.15.23), clickhouse-common-static (= 22.8.16.32), clickhouse-common-static (= 22.8.17.17), clickhouse-common-static (= 22.8.18.31), clickhouse-common-static (= 22.8.19.10), clickhouse-common-static (= 22.8.2.11), clickhouse-common-static (= 22.8.20.11), clickhouse-common-static (= 22.8.21.38), clickhouse-common-static (= 22.8.3.13), clickhouse-common-static (= 22.8.4.7), clickhouse-common-static (= 22.8.5.29), clickhouse-common-static (= 22.8.6.71), clickhouse-common-static (= 22.8.7.34), clickhouse-common-static (= 22.8.8.3), clickhouse-common-static (= 22.8.9.24), clickhouse-common-static (= 22.9.1.2603), clickhouse-common-static (= 22.9.2.7), clickhouse-common-static (= 22.9.3.18), clickhouse-common-static (= 22.9.4.32), clickhouse-common-static (= 22.9.5.25), clickhouse-common-static (= 22.9.6.20), clickhouse-common-static (= 22.9.7.34), clickhouse-common-static (= 23.1.1.3077), clickhouse-common-static (= 23.1.2.9), clickhouse-common-static (= 23.1.3.5), clickhouse-common-static (= 23.1.4.58), clickhouse-common-static (= 23.1.5.24), clickhouse-common-static (= 23.1.6.42), clickhouse-common-static (= 23.1.7.30), clickhouse-common-static (= 23.10.1.1976), clickhouse-common-static (= 23.10.2.13), clickhouse-common-static (= 23.10.3.5), clickhouse-common-static (= 23.10.4.25), clickhouse-common-static (= 23.10.5.20), clickhouse-common-static (= 23.10.6.60), clickhouse-common-static (= 23.11.1.2711), clickhouse-common-static (= 23.11.2.11), clickhouse-common-static (= 23.11.3.23), clickhouse-common-static (= 23.11.4.24), clickhouse-common-static (= 23.11.5.29), clickhouse-common-static (= 23.12.1.1368), clickhouse-common-static (= 23.12.2.59), clickhouse-common-static (= 23.12.3.40), clickhouse-common-static (= 23.12.4.15), clickhouse-common-static (= 23.12.5.81), clickhouse-common-static (= 23.12.6.19), clickhouse-common-static (= 23.2.1.2537), clickhouse-common-static (= 23.2.2.20), clickhouse-common-static (= 23.2.3.17), clickhouse-common-static (= 23.2.4.12), clickhouse-common-static (= 23.2.5.46), clickhouse-common-static (= 23.2.6.34), clickhouse-common-static (= 23.2.7.32), clickhouse-common-static (= 23.3.1.2823), clickhouse-common-static (= 23.3.10.5), clickhouse-common-static (= 23.3.11.5), clickhouse-common-static (= 23.3.12.11), clickhouse-common-static (= 23.3.13.6), clickhouse-common-static (= 23.3.14.78), clickhouse-common-static (= 23.3.15.29), clickhouse-common-static (= 23.3.16.7), clickhouse-common-static (= 23.3.17.13), clickhouse-common-static (= 23.3.18.15), clickhouse-common-static (= 23.3.19.32), clickhouse-common-static (= 23.3.2.37), clickhouse-common-static (= 23.3.20.27), clickhouse-common-static (= 23.3.21.26), clickhouse-common-static (= 23.3.22.3), clickhouse-common-static (= 23.3.3.52), clickhouse-common-static (= 23.3.4.17), clickhouse-common-static (= 23.3.5.9), clickhouse-common-static (= 23.3.6.7), clickhouse-common-static (= 23.3.7.5), clickhouse-common-static (= 23.3.8.21), clickhouse-common-static (= 23.3.9.55), clickhouse-common-static (= 23.4.1.1943), clickhouse-common-static (= 23.4.2.11), clickhouse-common-static (= 23.4.3.48), clickhouse-common-static (= 23.4.4.16), clickhouse-common-static (= 23.4.5.22), clickhouse-common-static (= 23.4.6.25), clickhouse-common-static (= 23.5.1.3174), clickhouse-common-static (= 23.5.2.7), clickhouse-common-static (= 23.5.3.24), clickhouse-common-static (= 23.5.4.25), clickhouse-common-static (= 23.5.5.92), clickhouse-common-static (= 23.6.1.1524), clickhouse-common-static (= 23.6.2.18), clickhouse-common-static (= 23.6.3.87), clickhouse-common-static (= 23.7.1.2470), clickhouse-common-static (= 23.7.2.25), clickhouse-common-static (= 23.7.3.14), clickhouse-common-static (= 23.7.4.5), clickhouse-common-static (= 23.7.5.30), clickhouse-common-static (= 23.7.6.111), clickhouse-common-static (= 23.8.1.2992), clickhouse-common-static (= 23.8.10.43), clickhouse-common-static (= 23.8.11.28), clickhouse-common-static (= 23.8.12.13), clickhouse-common-static (= 23.8.13.25), clickhouse-common-static (= 23.8.14.6), clickhouse-common-static (= 23.8.15.35), clickhouse-common-static (= 23.8.16.40), clickhouse-common-static (= 23.8.2.7), clickhouse-common-static (= 23.8.3.48), clickhouse-common-static (= 23.8.4.69), clickhouse-common-static (= 23.8.5.16), clickhouse-common-static (= 23.8.6.16), clickhouse-common-static (= 23.8.7.24), clickhouse-common-static (= 23.8.8.20), clickhouse-common-static (= 23.8.9.54), clickhouse-common-static (= 23.9.1.1854), clickhouse-common-static (= 23.9.2.56), clickhouse-common-static (= 23.9.3.12), clickhouse-common-static (= 23.9.4.11), clickhouse-common-static (= 23.9.5.29), clickhouse-common-static (= 23.9.6.20), clickhouse-common-static (= 24.1.1.2048), clickhouse-common-static (= 24.1.2.5), clickhouse-common-static (= 24.1.3.31), clickhouse-common-static (= 24.1.4.20), clickhouse-common-static (= 24.1.5.6), clickhouse-common-static (= 24.1.6.52), clickhouse-common-static (= 24.1.7.18), clickhouse-common-static (= 24.1.8.22), clickhouse-common-static (= 24.10.1.2812), clickhouse-common-static (= 24.10.2.80), clickhouse-common-static (= 24.10.3.21), clickhouse-common-static (= 24.10.4.191), clickhouse-common-static (= 24.11.1.2557), clickhouse-common-static (= 24.11.2.101), clickhouse-common-static (= 24.11.3.66), clickhouse-common-static (= 24.11.4.45), clickhouse-common-static (= 24.11.5.49), clickhouse-common-static (= 24.12.1.1614), clickhouse-common-static (= 24.12.2.29), clickhouse-common-static (= 24.12.3.47), clickhouse-common-static (= 24.12.4.49), clickhouse-common-static (= 24.12.5.81), clickhouse-common-static (= 24.12.6.70), clickhouse-common-static (= 24.2.1.2248), clickhouse-common-static (= 24.2.2.71), clickhouse-common-static (= 24.2.3.70), clickhouse-common-static (= 24.3.1.2672), clickhouse-common-static (= 24.3.10.33), clickhouse-common-static (= 24.3.11.7), clickhouse-common-static (= 24.3.12.75), clickhouse-common-static (= 24.3.13.40), clickhouse-common-static (= 24.3.14.35), clickhouse-common-static (= 24.3.15.72), clickhouse-common-static (= 24.3.16.16), clickhouse-common-static (= 24.3.17.18), clickhouse-common-static (= 24.3.18.7), clickhouse-common-static (= 24.3.2.23), clickhouse-common-static (= 24.3.3.102), clickhouse-common-static (= 24.3.4.147), clickhouse-common-static (= 24.3.5.46), clickhouse-common-static (= 24.3.6.48), clickhouse-common-static (= 24.3.7.30), clickhouse-common-static (= 24.3.8.13), clickhouse-common-static (= 24.3.9.5), clickhouse-common-static (= 24.4.1.2088), clickhouse-common-static (= 24.4.2.141), clickhouse-common-static (= 24.4.3.25), clickhouse-common-static (= 24.4.4.105), clickhouse-common-static (= 24.4.4.107), clickhouse-common-static (= 24.4.4.113), clickhouse-common-static (= 24.5.1.1763), clickhouse-common-static (= 24.5.2.34), clickhouse-common-static (= 24.5.3.5), clickhouse-common-static (= 24.5.4.49), clickhouse-common-static (= 24.5.5.41), clickhouse-common-static (= 24.5.5.78), clickhouse-common-static (= 24.5.6.45), clickhouse-common-static (= 24.5.7.31), clickhouse-common-static (= 24.5.8.10), clickhouse-common-static (= 24.6.1.4423), clickhouse-common-static (= 24.6.2.17), clickhouse-common-static (= 24.6.3.38), clickhouse-common-static (= 24.6.3.95), clickhouse-common-static (= 24.6.4.42), clickhouse-common-static (= 24.6.5.30), clickhouse-common-static (= 24.6.6.6), clickhouse-common-static (= 24.7.1.2915), clickhouse-common-static (= 24.7.2.13), clickhouse-common-static (= 24.7.3.42), clickhouse-common-static (= 24.7.3.47), clickhouse-common-static (= 24.7.4.51), clickhouse-common-static (= 24.7.5.37), clickhouse-common-static (= 24.7.6.8), clickhouse-common-static (= 24.8.1.2684), clickhouse-common-static (= 24.8.10.5), clickhouse-common-static (= 24.8.11.5), clickhouse-common-static (= 24.8.12.28), clickhouse-common-static (= 24.8.13.16), clickhouse-common-static (= 24.8.14.39), clickhouse-common-static (= 24.8.2.3), clickhouse-common-static (= 24.8.3.59), clickhouse-common-static (= 24.8.4.13), clickhouse-common-static (= 24.8.5.115), clickhouse-common-static (= 24.8.6.70), clickhouse-common-static (= 24.8.7.41), clickhouse-common-static (= 24.8.8.17), clickhouse-common-static (= 24.8.9.95), clickhouse-common-static (= 24.9.1.3278), clickhouse-common-static (= 24.9.2.42), clickhouse-common-static (= 24.9.3.128), clickhouse-common-static (= 25.1.1.4165), clickhouse-common-static (= 25.1.2.3), clickhouse-common-static (= 25.1.3.23), clickhouse-common-static (= 25.1.4.53), clickhouse-common-static (= 25.1.5.31), clickhouse-common-static (= 25.1.6.34), clickhouse-common-static (= 25.1.7.20), clickhouse-common-static (= 25.1.8.25), clickhouse-common-static (= 25.10.1.3832), clickhouse-common-static (= 25.10.2.65), clickhouse-common-static (= 25.10.3.100), clickhouse-common-static (= 25.10.4.104), clickhouse-common-static (= 25.10.5.40), clickhouse-common-static (= 25.11.1.558), clickhouse-common-static (= 25.11.2.24), clickhouse-common-static (= 25.11.3.54), clickhouse-common-static (= 25.11.4.19), clickhouse-common-static (= 25.11.5.8), clickhouse-common-static (= 25.11.6.11), clickhouse-common-static (= 25.11.7.41), clickhouse-common-static (= 25.12.1.649), clickhouse-common-static (= 25.12.2.54), clickhouse-common-static (= 25.12.3.21), clickhouse-common-static (= 25.12.4.35), clickhouse-common-static (= 25.2.1.3085), clickhouse-common-static (= 25.2.2.39), clickhouse-common-static (= 25.3.1.2703), clickhouse-common-static (= 25.3.10.19), clickhouse-common-static (= 25.3.11.20), clickhouse-common-static (= 25.3.12.8), clickhouse-common-static (= 25.3.13.19), clickhouse-common-static (= 25.3.2.39), clickhouse-common-static (= 25.3.3.42), clickhouse-common-static (= 25.3.4.190), clickhouse-common-static (= 25.3.5.42), clickhouse-common-static (= 25.3.6.56), clickhouse-common-static (= 25.3.7.194), clickhouse-common-static (= 25.3.8.23), clickhouse-common-static (= 25.3.9.72), clickhouse-common-static (= 25.4.1.2934), clickhouse-common-static (= 25.4.10.45), clickhouse-common-static (= 25.4.11.15), clickhouse-common-static (= 25.4.12.9), clickhouse-common-static (= 25.4.13.22), clickhouse-common-static (= 25.4.2.31), clickhouse-common-static (= 25.4.3.22), clickhouse-common-static (= 25.4.4.25), clickhouse-common-static (= 25.4.5.24), clickhouse-common-static (= 25.4.6.67), clickhouse-common-static (= 25.4.7.66), clickhouse-common-static (= 25.4.8.56), clickhouse-common-static (= 25.4.9.14), clickhouse-common-static (= 25.5.1.2782), clickhouse-common-static (= 25.5.10.95), clickhouse-common-static (= 25.5.11.15), clickhouse-common-static (= 25.5.2.47), clickhouse-common-static (= 25.5.3.75), clickhouse-common-static (= 25.5.4.38), clickhouse-common-static (= 25.5.5.19), clickhouse-common-static (= 25.5.6.14), clickhouse-common-static (= 25.5.7.52), clickhouse-common-static (= 25.5.8.13), clickhouse-common-static (= 25.5.9.14), clickhouse-common-static (= 25.6.1.3206), clickhouse-common-static (= 25.6.10.16), clickhouse-common-static (= 25.6.11.18), clickhouse-common-static (= 25.6.12.10), clickhouse-common-static (= 25.6.13.41), clickhouse-common-static (= 25.6.2.5), clickhouse-common-static (= 25.6.3.116), clickhouse-common-static (= 25.6.4.12), clickhouse-common-static (= 25.6.5.41), clickhouse-common-static (= 25.6.6.29), clickhouse-common-static (= 25.6.7.23), clickhouse-common-static (= 25.6.8.10), clickhouse-common-static (= 25.6.9.98), clickhouse-common-static (= 25.7.1.3997), clickhouse-common-static (= 25.7.2.54), clickhouse-common-static (= 25.7.3.13), clickhouse-common-static (= 25.7.4.11), clickhouse-common-static (= 25.7.5.34), clickhouse-common-static (= 25.7.6.21), clickhouse-common-static (= 25.7.7.68), clickhouse-common-static (= 25.7.8.71), clickhouse-common-static (= 25.8.1.5101), clickhouse-common-static (= 25.8.10.7), clickhouse-common-static (= 25.8.11.66), clickhouse-common-static (= 25.8.12.129), clickhouse-common-static (= 25.8.13.73), clickhouse-common-static (= 25.8.14.17), clickhouse-common-static (= 25.8.15.35), clickhouse-common-static (= 25.8.2.29), clickhouse-common-static (= 25.8.3.66), clickhouse-common-static (= 25.8.4.13), clickhouse-common-static (= 25.8.5.17), clickhouse-common-static (= 25.8.6.11), clickhouse-common-static (= 25.8.7.3), clickhouse-common-static (= 25.8.8.26), clickhouse-common-static (= 25.8.9.20), clickhouse-common-static (= 25.9.2.1), clickhouse-common-static (= 25.9.3.48), clickhouse-common-static (= 25.9.4.58), clickhouse-common-static (= 25.9.5.21), clickhouse-common-static (= 25.9.6.117), clickhouse-common-static (= 25.9.7.56), debconf (>= 0.5) | debconf-2.0
  - recommends: libcap2-bin
  - conflicts: clickhouse-keeper
  - replaces: clickhouse-server-base, clickhouse-server-common
  - provides: clickhouse-keeper, clickhouse-server-common

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Install: apt-get install clickhouse-server clickhouse-client
- Repo tags: database, analytics
- Key notes: ClickHouse key used for APT repo
- Key tags: database, analytics
