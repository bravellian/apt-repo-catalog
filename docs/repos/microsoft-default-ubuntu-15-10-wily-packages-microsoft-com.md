# Microsoft - ubuntu-15.10 - default (ubuntu-15.10)

## Repository
- Repository ID: `microsoft-default-ubuntu-15-10-wily-packages-microsoft-com`
- OS: `ubuntu-15.10`
- Source: `[arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main`

## Upstream documentation
- Documentation URL: https://packages.microsoft.com/config/ubuntu/15.10
- Key documentation URL: https://learn.microsoft.com/en-us/linux/packages

## Key reference
- Key ID: `microsoft-microsoft-eb3e94adbe1229cf`
- Expected fingerprints:
  - BC528686B50D79E339D3721CEB3E94ADBE1229CF
- Key source URL: https://packages.microsoft.com/keys/microsoft.asc

## Install instructions

Variant A (recommended modern apt with signed-by + dearmor):

```bash
sudo install -d -m 0755 /usr/share/keyrings
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc | gpg --dearmor | sudo tee /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-15-10-wily-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

Variant B (store ASCII key, dearmor file explicitly):

```bash
curl -fsSL https://raw.githubusercontent.com/bravellian/apt-repo-catalog/refs/heads/main/keys/microsoft-microsoft-eb3e94adbe1229cf.asc -o /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
gpg --dearmor /tmp/microsoft-microsoft-eb3e94adbe1229cf.asc
sudo install -m 0644 /tmp/microsoft-microsoft-eb3e94adbe1229cf.gpg /usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg
echo "deb [signed-by=/usr/share/keyrings/microsoft-microsoft-eb3e94adbe1229cf.gpg] [arch=amd64] https://packages.microsoft.com/ubuntu/15.10/prod wily main" | sudo tee /etc/apt/sources.list.d/microsoft-default-ubuntu-15-10-wily-packages-microsoft-com.list >/dev/null
sudo apt-get update
```

## Packages

> Package compatibility is defined by suite/component/architecture in the repository index;
> there is no per-package OS field in the Packages metadata.

<details>
<summary>Packages (8)</summary>

<div class="packages-nav">
<a href="#packages-L">L</a> <a href="#packages-M">M</a> <a href="#packages-O">O</a> <a href="#packages-U">U</a> <a href="#packages-V">V</a>
</div>


### <a id="packages-L"></a>L

- **libodbc1-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: ODBC library for Unix (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install libodbc1-utf16`
  - Install (apt): `sudo apt install libodbc1-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2)
  - suggests: libmyodbc, odbc-postgresql, tdsodbc, unixodbc-utf16
  - conflicts: libodbc1
  - breaks: unixodbc (<< 2.2.14p2-3)
  - replaces: unixodbc (<< 2.2.14p2-3)

  </details>


### <a id="packages-M"></a>M

- **msodbcsql**
  - Latest version: 13.1.8.0-1
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: ODBC Driver for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install msodbcsql`
  - Install (apt): `sudo apt install msodbcsql`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libcurl3, libkrb5-3, libstdc++6 (>= 4.9), openssl, unixodbc (>= 2.3.1), unixodbc-utf16 (>= 2.3.1-1)
  - conflicts: libodbc1-utf16, odbcinst-utf16, odbcinst1debian2-utf16, unixodbc-utf16

  </details>

- **mssql-tools**
  - Latest version: 14.0.6.0-1
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: Tools for Microsoft(R) SQL Server(R)
  - Install: `sudo apt-get install mssql-tools`
  - Install (apt): `sudo apt install mssql-tools`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL Tools Team <mssql-tools@microsoft.com>
  - Section: database
  - depends: debconf (>= 0.5), libc6 (>= 2.21), libgss3, libkrb5-3, libstdc++6 (>= 5.2), msodbcsql (<< 13.2.0.0), msodbcsql (>= 13.0.0.0), msodbcsql (>= 13.1.0.0), openssl

  </details>


### <a id="packages-O"></a>O

- **odbcinst-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: Helper program for accessing odbc ini files (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst-utf16`
  - Install (apt): `sudo apt install odbcinst-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: utils
  - Priority: optional
  - depends: libc6 (>= 2.4), odbcinst1debian2-utf16 (>= 2.3.1)
  - conflicts: odbcinst, odbcinst1
  - replaces: odbcinst1, odbcinst1debian1 (<< 2.2.11-20), unixodbc (<< 2.1.1-2)

  </details>

- **odbcinst1debian2-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: Support library for accessing odbc ini files (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install odbcinst1debian2-utf16`
  - Install (apt): `sudo apt install odbcinst1debian2-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: libs
  - Priority: optional
  - depends: libc6 (>= 2.14), libltdl7 (>= 2.4.2), odbcinst-utf16
  - conflicts: odbcinst1, odbcinst1debian1, odbcinst1debian2
  - breaks: libmyodbc (<< 5.1.6-2), odbc-postgresql (<< 1:09.00.0310-1.1), tdsodbc (<< 0.82-8)
  - replaces: unixodbc (<< 2.1.1-2)

  </details>


### <a id="packages-U"></a>U

- **unixodbc-dev-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: ODBC libraries for UNIX (development files) (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc-dev-utf16`
  - Install (apt): `sudo apt install unixodbc-dev-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: devel
  - Priority: extra
  - depends: libltdl3-dev, odbcinst1debian2-utf16 (= 2.3.1-2), unixodbc-utf16 (= 2.3.1-2)
  - conflicts: libiodbc2-dev, remembrance-agent (<< 2.11-4), unixodbc-dev

  </details>

- **unixodbc-utf16**
  - Latest version: 2.3.1-2
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: Basic ODBC tools (with UTF-16 support enabled)
  - Homepage: http://www.unixodbc.org/
  - Install: `sudo apt-get install unixodbc-utf16`
  - Install (apt): `sudo apt install unixodbc-utf16`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Microsoft SQL ODBC Team <mssql-odbc@microsoft.com>
  - Section: database
  - Priority: optional
  - depends: libc6 (>= 2.14), libodbc1-utf16 (>= 2.3.1), libreadline6 (>= 6.0), odbcinst1debian2-utf16 (>= 2.3.1)
  - conflicts: unixodbc, unixodbc-bin

  </details>


### <a id="packages-V"></a>V

- **virtualclient**
  - Latest version: 1.15.25
  - Architectures: amd64
  - Suite: wily
  - Components: main
  - Description: VirtualClient, the open sourced workload automation.
  - Install: `sudo apt-get install virtualclient`
  - Install (apt): `sudo apt install virtualclient`
  <details>
  <summary>More metadata</summary>

  - Maintainer: Virtual Client Team <virtualclient@microsoft.com>

  </details>


</details>

## Notes
- OS support: verify upstream documentation for supported releases.
- The trust anchor is the fingerprint; validate it before use.
- Repo tags: microsoft, apt, ubuntu
- Key tags: microsoft
