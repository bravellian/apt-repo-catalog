import { mkdir, readFile, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { sha256Hex, sleep } from "./utils.mjs";

const defaultHeaders = {
  "User-Agent": "apt-repo-catalog-discovery"
};

async function readCache(filePath) {
  try {
    const raw = await readFile(filePath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

async function writeCache(filePath, payload) {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, JSON.stringify(payload, null, 2), "utf8");
}

async function fetchWithCache(url, { cacheDir, token, accept, slowMode } = {}) {
  const cachePath = path.join(cacheDir, `${sha256Hex(url)}.json`);
  const cached = await readCache(cachePath);
  const headers = {
    ...defaultHeaders,
    Accept: accept ?? "application/vnd.github+json"
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  if (cached?.etag) {
    headers["If-None-Match"] = cached.etag;
  }

  const response = await fetch(url, { headers });
  if (response.status === 304 && cached) {
    return { data: cached.data, headers: cached.headers ?? {}, status: 304 };
  }
  const data = await response.json();
  const headersObj = Object.fromEntries(response.headers.entries());
  await writeCache(cachePath, {
    url,
    fetchedAt: new Date().toISOString(),
    status: response.status,
    etag: response.headers.get("etag"),
    headers: headersObj,
    data
  });

  if (slowMode) {
    await sleep(250);
  }

  return { data, headers: headersObj, status: response.status };
}

export async function searchGithub({ query, token, cacheDir, perPage, maxPages, slowMode }) {
  const items = [];
  let total = 0;

  for (let page = 1; page <= maxPages; page += 1) {
    const url = new URL("https://api.github.com/search/code");
    url.searchParams.set("q", query);
    url.searchParams.set("per_page", String(perPage));
    url.searchParams.set("page", String(page));

    const { data, headers, status } = await fetchWithCache(url.toString(), {
      cacheDir,
      token,
      slowMode
    });

    if (status !== 200) {
      const message = data?.message ? ` (${data.message})` : "";
      console.warn(`GitHub search failed for query: ${query} [${status}]${message}`);
      break;
    }

    if (status === 403 && headers["x-ratelimit-remaining"] === "0") {
      const reset = Number.parseInt(headers["x-ratelimit-reset"] ?? "0", 10) * 1000;
      const waitMs = Math.max(0, reset - Date.now() + 500);
      await sleep(waitMs);
      page -= 1;
      continue;
    }

    if (!data || !Array.isArray(data.items)) {
      break;
    }

    if (page === 1) {
      total = data.total_count ?? 0;
    }

    items.push(...data.items);
    if (data.items.length < perPage) {
      break;
    }
  }

  return { total, items };
}

export async function fetchGithubFile({ owner, repo, path: filePath, token, cacheDir, slowMode }) {
  const url = new URL(`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`);
  const { data, headers, status } = await fetchWithCache(url.toString(), {
    cacheDir,
    token,
    slowMode
  });

  if (status === 404) {
    return { ok: false, error: "not_found" };
  }

  if (data?.content && data.encoding === "base64") {
    const decoded = Buffer.from(data.content, "base64").toString("utf8");
    return { ok: true, text: decoded, meta: { headers, url: url.toString() } };
  }

  if (typeof data === "string") {
    return { ok: true, text: data, meta: { headers, url: url.toString() } };
  }

  if (data?.download_url) {
    const rawResponse = await fetch(data.download_url, {
      headers: token ? { ...defaultHeaders, Authorization: `Bearer ${token}` } : defaultHeaders
    });
    if (!rawResponse.ok) {
      return { ok: false, error: `download_failed_${rawResponse.status}` };
    }
    const rawText = await rawResponse.text();
    return { ok: true, text: rawText, meta: { headers, url: data.download_url } };
  }

  return { ok: false, error: "unsupported_format" };
}

export async function ensureCacheDir(cacheDir) {
  await mkdir(cacheDir, { recursive: true });
}

export async function cacheExists(cacheDir) {
  try {
    await stat(cacheDir);
    return true;
  } catch {
    return false;
  }
}
