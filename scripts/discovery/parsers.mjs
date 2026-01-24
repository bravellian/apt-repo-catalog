import { splitLines } from "./utils.mjs";

function stripInlineComment(value) {
  const idx = value.indexOf("#");
  if (idx === -1) {
    return value;
  }
  return value.slice(0, idx);
}

export function parseDebLine(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("deb ") && !trimmed.startsWith("deb[")) {
    return null;
  }
  const withoutPrefix = trimmed.startsWith("deb ") ? trimmed.slice(4).trimStart() : trimmed;
  let remaining = withoutPrefix;
  const optionsMatch = remaining.match(/^\[([^\]]+)\]\s*/);
  const options = {};
  if (optionsMatch) {
    const optionPairs = optionsMatch[1].split(/\s+/);
    for (const pair of optionPairs) {
      const [key, value] = pair.split("=", 2);
      if (key && value) {
        options[key] = value;
      } else if (key) {
        options[key] = true;
      }
    }
    remaining = remaining.slice(optionsMatch[0].length);
  }
  const parts = remaining.split(/\s+/).filter(Boolean);
  if (parts.length < 2) {
    return null;
  }
  const uri = parts[0];
  const suite = parts[1];
  const components = parts.slice(2);
  return {
    uri,
    suite,
    components,
    options
  };
}

export function extractDebLines(text) {
  const lines = splitLines(text);
  const matches = [];
  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    const line = stripInlineComment(rawLine).trim();
    if (!line) {
      continue;
    }
    const debIndex = line.indexOf("deb ");
    const debBracketIndex = line.indexOf("deb[");
    const idx = debIndex === -1 ? debBracketIndex : debIndex;
    if (idx === -1) {
      continue;
    }
    let candidate = line.slice(idx).trim();
    candidate = candidate.replace(/["'`]$/, "");
    matches.push({ line: candidate, lineNumber: i + 1 });
  }
  return matches;
}

function parseDeb822Stanza(rawLines) {
  const fields = {};
  let currentKey = null;
  for (const rawLine of rawLines) {
    if (!rawLine.trim()) {
      continue;
    }
    if (/^\s/.test(rawLine) && currentKey) {
      fields[currentKey] = `${fields[currentKey] ?? ""} ${rawLine.trim()}`.trim();
      continue;
    }
    const idx = rawLine.indexOf(":");
    if (idx === -1) {
      continue;
    }
    const key = rawLine.slice(0, idx).trim();
    const value = rawLine.slice(idx + 1).trim();
    fields[key] = value;
    currentKey = key;
  }
  const types = (fields.Types ?? "").split(/\s+/).filter(Boolean);
  if (!types.includes("deb")) {
    return null;
  }
  const listFrom = (value) =>
    String(value ?? "")
      .split(/\s+/)
      .map((entry) => entry.trim())
      .filter(Boolean);
  return {
    types,
    uris: listFrom(fields.URIs ?? fields.URI),
    suites: listFrom(fields.Suites ?? fields.Suite),
    components: listFrom(fields.Components ?? fields.Component),
    architectures: listFrom(fields.Architectures ?? fields.Architecture),
    signedBy: fields["Signed-By"] ?? fields["Signed-By:"] ?? fields.SignedBy ?? ""
  };
}

export function parseDeb822(text) {
  const lines = splitLines(text);
  const stanzas = [];
  let current = [];
  const flush = () => {
    if (current.length === 0) {
      return;
    }
    const stanza = parseDeb822Stanza(current);
    if (stanza) {
      stanzas.push(stanza);
    }
    current = [];
  };
  for (const line of lines) {
    if (!line.trim()) {
      flush();
      continue;
    }
    current.push(line);
  }
  flush();
  return stanzas;
}

export function extractCandidatesFromText(text) {
  const debLines = extractDebLines(text);
  const debCandidates = debLines
    .map((entry) => ({
      type: "deb",
      raw: entry.line,
      lineNumber: entry.lineNumber,
      parsed: parseDebLine(entry.line)
    }))
    .filter((entry) => entry.parsed);

  const deb822Candidates = parseDeb822(text).map((stanza) => ({
    type: "deb822",
    raw: null,
    lineNumber: null,
    parsed: stanza
  }));

  return [...debCandidates, ...deb822Candidates];
}
