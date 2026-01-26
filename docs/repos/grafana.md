# Grafana Stable

## Repository
- Repository ID: `grafana`
- Base URL: `https://apt.grafana.com`
- Host: `apt.grafana.com`

## Upstream documentation
- Documentation URL: https://apt.grafana.com/
- Key documentation URL: https://apt.grafana.com/

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## OS hints
- Ubuntu

## Usage notes
- Use the suite that matches your OS codename; OS hints are inferred from Release metadata and base URL patterns.

## Key reference
- Key ID: `grafana`
- Expected fingerprints:
  - B53AE77BADB630A683046005963FA27710458545
- Key source URL: https://apt.grafana.com/gpg.key

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/grafana.asc | gpg --dearmor | sudo tee /usr/share/keyrings/grafana.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/grafana.asc -o /tmp/grafana.asc
gpg --dearmor /tmp/grafana.asc
sudo install -m 0644 /tmp/grafana.gpg /usr/share/keyrings/grafana.gpg
echo "deb [signed-by=/usr/share/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (19)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-G">G</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-P">P</a> <a href="#packages-Q">Q</a> <a href="#packages-S">S</a> <a href="#packages-T">T</a>
</div>


### <a id="packages-A"></a>A

- **alloy**
  - Latest version: 1.12.2-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana Alloy is an OpenTelemetry Collector distribution with programmable pipelines.
  - Homepage: https://github.com/grafana/alloy
  - Install: `sudo apt-get install alloy`
  - Install (apt): `sudo apt install alloy`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@70d36bcf7275>
  - Section: default
  - Priority: optional

  </details>


### <a id="packages-G"></a>G

- **grafana**
  - Latest version: 12.3.1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana
  - Homepage: https://grafana.com
  - Install: `sudo apt-get install grafana`
  - Install (apt): `sudo apt install grafana`
  <details>
  <summary>More metadata</summary>

  - Maintainer: contact@grafana.com
  - Section: default
  - Priority: optional
  - depends: adduser, libfontconfig, libfontconfig1, musl

  </details>

- **grafana-agent**
  - Latest version: 0.44.2-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: no description given
  - Homepage: https://github.com/grafana/agent
  - Install: `sudo apt-get install grafana-agent`
  - Install (apt): `sudo apt install grafana-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@e2659b9fd9b8>
  - Section: default
  - Priority: optional

  </details>

- **grafana-agent-flow**
  - Latest version: 0.44.2-1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: no description given
  - Homepage: https://github.com/grafana/agent
  - Install: `sudo apt-get install grafana-agent-flow`
  - Install (apt): `sudo apt install grafana-agent-flow`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@e2659b9fd9b8>
  - Section: default
  - Priority: optional

  </details>

- **grafana-enterprise**
  - Latest version: 12.3.1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: "Grafana Enterprise"
  - Homepage: https://grafana.com
  - Install: `sudo apt-get install grafana-enterprise`
  - Install (apt): `sudo apt install grafana-enterprise`
  <details>
  <summary>More metadata</summary>

  - Maintainer: contact@grafana.com
  - Section: default
  - Priority: optional
  - depends: adduser, libfontconfig, libfontconfig1, musl
  - conflicts: grafana
  - replaces: grafana

  </details>

- **grafana-enterprise-nightly**
  - Latest version: 12.2.0-92475
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: "Grafana Enterprise"
  - Homepage: https://grafana.com
  - Install: `sudo apt-get install grafana-enterprise-nightly`
  - Install (apt): `sudo apt install grafana-enterprise-nightly`
  <details>
  <summary>More metadata</summary>

  - Maintainer: contact@grafana.com
  - Section: default
  - Priority: optional
  - depends: adduser, libfontconfig1, musl
  - conflicts: grafana

  </details>

- **grafana-nightly**
  - Latest version: 12.2.0-256818
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana
  - Homepage: https://grafana.com
  - Install: `sudo apt-get install grafana-nightly`
  - Install (apt): `sudo apt install grafana-nightly`
  <details>
  <summary>More metadata</summary>

  - Maintainer: contact@grafana.com
  - Section: default
  - Priority: optional
  - depends: adduser, libfontconfig1, musl

  </details>


### <a id="packages-L"></a>L

- **logcli**
  - Latest version: 3.6.4
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: LogCLI is the command-line interface to Loki.
  - Homepage: https://grafana.com/loki
  - Install: `sudo apt-get install logcli`
  - Install (apt): `sudo apt install logcli`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: default
  - Priority: optional
  - provides: logcli

  </details>

- **loki**
  - Latest version: 3.6.4
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Loki is a horizontally-scalable, highly-available, multi-tenant log aggregation system inspired by Prometheus.
  - Homepage: https://grafana.com/loki
  - Install: `sudo apt-get install loki`
  - Install (apt): `sudo apt install loki`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: default
  - Priority: optional
  - provides: loki

  </details>

- **loki-canary**
  - Latest version: 3.6.4
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Loki Canary is a standalone app that audits the log-capturing performance of a Grafana Loki cluster.
  - Homepage: https://grafana.com/loki
  - Install: `sudo apt-get install loki-canary`
  - Install (apt): `sudo apt install loki-canary`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: default
  - Priority: optional
  - provides: loki-canary

  </details>


### <a id="packages-M"></a>M

- **metaconvert**
  - Latest version: 3.0.2
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana Metaconvert converts Cortex meta.json files to be on the Grafana Mimir format.
  - Homepage: https://grafana.com/oss/mimir/
  - Install: `sudo apt-get install metaconvert`
  - Install (apt): `sudo apt install metaconvert`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <contact@grafana.com>
  - Section: default
  - Priority: optional
  - provides: metaconvert

  </details>

- **mimir**
  - Latest version: 3.0.2
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana Mimir provides horizontally scalable, highly available, multi-tenant, long-term storage for Prometheus.
  - Homepage: https://grafana.com/oss/mimir/
  - Install: `sudo apt-get install mimir`
  - Install (apt): `sudo apt install mimir`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <contact@grafana.com>
  - Section: default
  - Priority: optional
  - provides: mimir

  </details>

- **mimir-continuous-test**
  - Latest version: 2.17.4
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: As a developer, you can use the standalone mimir-continuous-test tool to run smoke tests on live Grafana Mimir clusters. This tool identifies a class of bugs that could be difficult to spot during development.
  - Homepage: https://grafana.com/oss/mimir/
  - Install: `sudo apt-get install mimir-continuous-test`
  - Install (apt): `sudo apt install mimir-continuous-test`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <contact@grafana.com>
  - Section: default
  - Priority: optional
  - provides: mimir-continuous-test

  </details>

- **mimirtool**
  - Latest version: 3.0.2
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Mimirtool is a command-line tool that operators and tenants can use to execute a number of common tasks that involve Grafana Mimir or Grafana Cloud Metrics.
  - Homepage: https://grafana.com/oss/mimir/
  - Install: `sudo apt-get install mimirtool`
  - Install (apt): `sudo apt install mimirtool`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <contact@grafana.com>
  - Section: default
  - Priority: optional
  - provides: mimirtool

  </details>


### <a id="packages-P"></a>P

- **promtail**
  - Latest version: 3.6.4
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Promtail is an agent which ships the contents of local logs to a private Grafana Loki instance or Grafana Cloud.
  - Homepage: https://grafana.com/loki
  - Install: `sudo apt-get install promtail`
  - Install (apt): `sudo apt install promtail`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: default
  - Priority: optional
  - provides: promtail

  </details>

- **pyroscope**
  - Latest version: 1.18.0
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: no description given
  - Homepage: https://grafana.com/pyroscope
  - Install: `sudo apt-get install pyroscope`
  - Install (apt): `sudo apt install pyroscope`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: default
  - Priority: optional

  </details>


### <a id="packages-Q"></a>Q

- **query-tee**
  - Latest version: 3.0.2
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: The query-tee is a standalone tool that you can use for testing purposes when comparing the query results and performances of two Grafana Mimir clusters. The two Mimir clusters compared by the query-tee must ingest the same series and samples.
  - Homepage: https://grafana.com/oss/mimir/
  - Install: `sudo apt-get install query-tee`
  - Install (apt): `sudo apt install query-tee`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <contact@grafana.com>
  - Section: default
  - Priority: optional
  - provides: query-tee

  </details>


### <a id="packages-S"></a>S

- **synthetic-monitoring-agent**
  - Latest version: 0.51.0-v0.51.0
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Synthetic Monitoring Agent
  - Homepage: https://grafana.com/products/cloud/features/#synthetic-monitoring
  - Install: `sudo apt-get install synthetic-monitoring-agent`
  - Install (apt): `sudo apt install synthetic-monitoring-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Section: net
  - Priority: optional

  </details>


### <a id="packages-T"></a>T

- **tempo**
  - Latest version: 2.9.1
  - Architectures: amd64
  - Suite: stable
  - Components: main
  - Description: Grafana Tempo is an open source, easy-to-use, and high-scale distributed tracing backend.
  - Homepage: https://grafana.com/oss/tempo/
  - Install: `sudo apt-get install tempo`
  - Install (apt): `sudo apt install tempo`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Grafana Labs <support@grafana.com>
  - Priority: optional

  </details>


</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Official Grafana Labs APT repository
- Repo tags: monitoring, analytics
- Key notes: Grafana signing key (rotated in 2023)
- Key tags: monitoring, analytics
