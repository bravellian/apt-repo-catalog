# Elastic 9.x (Stable)

## Repository
- Repository ID: `elastic-9-x`
- Base URL: `https://artifacts.elastic.co/packages/9.x/apt`
- Host: `artifacts.elastic.co`

## Upstream documentation
- Documentation URL: https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html
- Key documentation URL: https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html

## Suites
- Suite: `stable`
  - Components: main
  - Architectures: (not listed)
  - Observed OSes: ubuntu-22.04

## Key reference
- Key ID: `elasticsearch`
- Expected fingerprints:
  - 46095ACC8548582C1A2699A9D27D666CD88E42B4
- Key source URL: https://artifacts.elastic.co/GPG-KEY-elasticsearch

## Install instructions

### Suite: stable

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/elasticsearch.asc | gpg --dearmor | sudo tee /usr/share/keyrings/elasticsearch.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/elasticsearch.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-9-x-stable.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/elasticsearch.asc -o /tmp/elasticsearch.asc
gpg --dearmor /tmp/elasticsearch.asc
sudo install -m 0644 /tmp/elasticsearch.gpg /usr/share/keyrings/elasticsearch.gpg
echo "deb [signed-by=/usr/share/keyrings/elasticsearch.gpg] https://artifacts.elastic.co/packages/9.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-9-x-stable.list >/dev/null
sudo apt-get update
```


## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (16)</summary>

<div class="packages-nav">
<a href="#packages-A">A</a> <a href="#packages-E">E</a> <a href="#packages-F">F</a> <a href="#packages-H">H</a> <a href="#packages-K">K</a> <a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-P">P</a>
</div>


### <a id="packages-A"></a>A

- **apm-server**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Elastic APM Server
  - Homepage: https://www.elastic.co/apm
  - Install: `sudo apt-get install apm-server`
  - Install (apt): `sudo apt install apm-server`
  <details>
  <summary>More metadata</summary>

  - Maintainer: infra@elastic.co
  - Section: default
  - Priority: optional

  </details>

- **auditbeat**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Audit the activities of users and processes on your system.
  - Homepage: https://www.elastic.co/beats/auditbeat
  - Install: `sudo apt-get install auditbeat`
  - Install (apt): `sudo apt install auditbeat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@3e051da3b6bd>
  - Section: default
  - Priority: extra
  - conflicts: auditbeat-fips

  </details>

- **auditbeat-fips**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Audit the activities of users and processes on your system.
  - Homepage: https://www.elastic.co/beats/auditbeat
  - Install: `sudo apt-get install auditbeat-fips`
  - Install (apt): `sudo apt install auditbeat-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@0014884bb835>
  - Section: default
  - Priority: extra
  - conflicts: auditbeat

  </details>


### <a id="packages-E"></a>E

- **elastic-agent**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Elastic Agent - single, unified way to add monitoring for logs, metrics, and other types of data to a host.
  - Homepage: https://www.elastic.co/elastic-agent
  - Install: `sudo apt-get install elastic-agent`
  - Install (apt): `sudo apt install elastic-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@1d78e8bb3f69>
  - Section: default
  - Priority: extra

  </details>

- **elasticsearch**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Distributed RESTful search engine built for the cloud
  - Homepage: https://www.elastic.co/
  - Install: `sudo apt-get install elasticsearch`
  - Install (apt): `sudo apt install elasticsearch`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Elasticsearch Team <info@elastic.co>
  - Section: web
  - Priority: optional
  - depends: adduser, bash (>= 4.1), coreutils (>= 8.4), libc6
  - conflicts: elasticsearch-oss

  </details>


### <a id="packages-F"></a>F

- **filebeat**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Filebeat sends log files to Logstash or directly to Elasticsearch.
  - Homepage: https://www.elastic.co/beats/filebeat
  - Install: `sudo apt-get install filebeat`
  - Install (apt): `sudo apt install filebeat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@3c3aa74809a5>
  - Section: default
  - Priority: extra
  - conflicts: filebeat-fips

  </details>

- **filebeat-fips**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Filebeat sends log files to Logstash or directly to Elasticsearch.
  - Homepage: https://www.elastic.co/beats/filebeat
  - Install: `sudo apt-get install filebeat-fips`
  - Install (apt): `sudo apt install filebeat-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@73ac49574ae6>
  - Section: default
  - Priority: extra
  - conflicts: filebeat

  </details>


### <a id="packages-H"></a>H

- **heartbeat-elastic**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Ping remote services for availability and log results to Elasticsearch or send to Logstash.
  - Homepage: https://www.elastic.co/beats/heartbeat
  - Install: `sudo apt-get install heartbeat-elastic`
  - Install (apt): `sudo apt install heartbeat-elastic`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@ad0f898d3147>
  - Section: default
  - Priority: extra

  </details>


### <a id="packages-K"></a>K

- **kibana**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Explore and visualize your Elasticsearch data
  - Homepage: https://www.elastic.co
  - Install: `sudo apt-get install kibana`
  - Install (apt): `sudo apt install kibana`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Kibana Team <info@elastic.co>
  - Section: default
  - Priority: optional
  - depends: adduser

  </details>


### <a id="packages-L"></a>L

- **logstash**
  - Latest version: 1:9.2.4-1
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: An extensible logging pipeline
  - Homepage: https://www.elastic.co/logstash
  - Install: `sudo apt-get install logstash`
  - Install (apt): `sudo apt install logstash`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <buildkite-agent@bk-agent-prod-gcp-1742828962082585953>
  - Section: default
  - Priority: optional
  - conflicts: logstash (<< 7.10.0)
  - replaces: logstash (<< 7.10.0)

  </details>


### <a id="packages-M"></a>M

- **metricbeat**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Metricbeat is a lightweight shipper for metrics.
  - Homepage: https://www.elastic.co/beats/metricbeat
  - Install: `sudo apt-get install metricbeat`
  - Install (apt): `sudo apt install metricbeat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@d9c3e7d7e2f4>
  - Section: default
  - Priority: extra
  - conflicts: metricbeat-fips

  </details>

- **metricbeat-fips**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Metricbeat is a lightweight shipper for metrics.
  - Homepage: https://www.elastic.co/beats/metricbeat
  - Install: `sudo apt-get install metricbeat-fips`
  - Install (apt): `sudo apt install metricbeat-fips`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@c8b6a4f6d751>
  - Section: default
  - Priority: extra
  - conflicts: metricbeat

  </details>


### <a id="packages-P"></a>P

- **packetbeat**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Packetbeat analyzes network traffic and sends the data to Elasticsearch.
  - Homepage: https://www.elastic.co/beats/packetbeat
  - Install: `sudo apt-get install packetbeat`
  - Install (apt): `sudo apt install packetbeat`
  <details>
  <summary>More metadata</summary>

  - Maintainer: <@e6b7adce97b8>
  - Section: default
  - Priority: extra

  </details>

- **pf-elastic-collector**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Elastic Universal Profiling Collector
  - Homepage: https://www.elastic.co/observability/universal-profiling
  - Install: `sudo apt-get install pf-elastic-collector`
  - Install (apt): `sudo apt install pf-elastic-collector`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Observability Profiling Team <profiling-feedback@elastic.co>
  - Section: utils
  - Priority: optional

  </details>

- **pf-elastic-symbolizer**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: Elastic Universal Profiling Symbolizer
  - Homepage: https://www.elastic.co/observability/universal-profiling
  - Install: `sudo apt-get install pf-elastic-symbolizer`
  - Install (apt): `sudo apt install pf-elastic-symbolizer`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Observability Profiling Team <profiling-feedback@elastic.co>
  - Section: utils
  - Priority: optional

  </details>

- **pf-host-agent**
  - Latest version: 9.2.4
  - Architectures: amd64, arm64
  - Suite: stable
  - Components: main
  - Description: pf-host-agent gathers profiling data from machines and ships them to the Elastic stack.
  - Homepage: https://www.elastic.co/observability/universal-profiling
  - Install: `sudo apt-get install pf-host-agent`
  - Install (apt): `sudo apt install pf-host-agent`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Observability Profiling Team <profiling-feedback@elastic.co>
  - Section: utils
  - Priority: optional

  </details>


Errors during fetch:
- apt-get update failed
- Packages index not listed in Release

</details>

## Notes
- Suite availability is derived from Release metadata; verify upstream documentation for support policy.
- The trust anchor is the fingerprint; validate it before use.
- Repo notes: Elastic Stack 9.x repository for Debian/Ubuntu
- Repo tags: search, analytics
- Key notes: Signing key for Elastic apt repository (Elasticsearch, Kibana, Beats, etc.)
- Key tags: search, analytics
