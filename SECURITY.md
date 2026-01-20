# Security Policy

This document explains the security model, guarantees, and limitations of the APT Repo Catalog project.

---

## Scope

This project manages:

- Public APT repository signing keys
- Repository metadata that references those keys
- Tooling to validate and normalize the above

This project does **not**:

- Issue private keys
- Act as a certificate authority
- Endorse upstream vendors
- Provide runtime security guarantees

---

## Threat Model

The primary threats considered are:

- Silent upstream key rotation
- Accidental key corruption
- Unauthorized modification of cached keys
- Ambiguous or mutable trust relationships

The project is **not** designed to defend against:

- Compromised upstream vendors
- Malicious maintainers of this repository
- Compromise of GitHub itself

---

## Key Integrity Controls

The following controls are enforced:

### Fingerprint Pinning

- Every signing key has one or more pinned OpenPGP fingerprints
- CI fails if upstream content does not match expected fingerprints
- Cached keys are verified against the same fingerprints

### Deterministic Normalization

- All keys are stored in normalized ASCII-armored form
- Binary inputs are parsed and re-armored
- Multiple keys from a single source are explicitly handled

### Review-Gated Updates

- Keys are updated only via pull requests
- No scheduled job pushes directly to `main`
- Diffs clearly show key material changes

---

## Provenance and Transparency

For each key, the following metadata is retained:

- Upstream source URL
- Retrieval timestamp
- OpenPGP fingerprint(s)
- Hashes of downloaded and cached content

This allows:

- auditing
- change review
- historical inspection

---

## Trust Boundary Disclosure

By consuming keys from this repository, you are trusting:

- The correctness of the pinned fingerprints
- The integrity of the repository history
- The maintainers’ review process

This repository does **not** assert that:

- a key is "safe"
- a repository is "trusted"
- a vendor is "secure"

Those decisions remain with the consumer.

---

## Reporting Issues

If you believe there is:

- an incorrect fingerprint
- a compromised upstream key
- a validation gap in tooling
- unclear or misleading metadata

Please open an issue with:

- the affected key or repository ID
- a description of the concern
- any relevant upstream references

Security-sensitive reports can be submitted privately if needed.

---

## Responsible Use

This repository is intended to **reduce risk through determinism and review**, not eliminate it.

Consumers are strongly encouraged to:

- understand the repositories they enable
- review key changes before adoption
- apply OS-level security best practices
