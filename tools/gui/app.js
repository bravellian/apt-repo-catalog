const logEl = document.getElementById("command-log");
const keysCountEl = document.getElementById("keys-count");
const serverStatusEl = document.getElementById("server-status");
const keySelect = document.getElementById("key-select");
const lookupResults = document.getElementById("lookup-results");
const repoListEl = document.getElementById("repo-list");
const repoSearchEl = document.getElementById("repo-search");
const repoDetailPage = document.getElementById("repo-detail-page");
const keysListEl = document.getElementById("keys-list");
const keysSearchEl = document.getElementById("keys-search");
const importRepoForm = document.getElementById("import-repo-form");
const importStatusEl = document.getElementById("import-status");

let cachedKeys = [];
let cachedRepos = [];
let activeRepoId = null;

function appendLog(text) {
  const now = new Date().toLocaleTimeString();
  logEl.textContent = `[${now}] ${text}\n${logEl.textContent}`.trim();
}

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return res.json();
}

async function refreshKeys() {
  const data = await fetchJson("/api/keys");
  const keys = data.keys ?? [];
  cachedKeys = keys;
  if (keySelect) {
    keySelect.innerHTML = "";
    const empty = document.createElement("option");
    empty.value = "";
    empty.textContent = "Select key…";
    keySelect.appendChild(empty);
    keys.forEach((key) => {
      const option = document.createElement("option");
      option.value = key.id;
      const fingerprint = key.fingerprints?.[0] ?? "unknown";
      option.textContent = `${key.id} · ${key.label} · ${fingerprint}`;
      keySelect.appendChild(option);
    });
  }
  if (keysCountEl) {
    keysCountEl.textContent = String(keys.length);
  }
}

async function refreshRepos() {
  const data = await fetchJson("/api/repos");
  cachedRepos = data.repos ?? [];
  renderRepoList();
}

function renderRepoList(filter = "") {
  if (!repoListEl) {
    return;
  }
  const query = filter.trim().toLowerCase();
  const filtered = cachedRepos.filter((repo) => {
    if (!query) return true;
    return (
      repo.id?.toLowerCase().includes(query) ||
      repo.label?.toLowerCase().includes(query) ||
      repo.baseUrl?.toLowerCase().includes(query)
    );
  });

  repoListEl.innerHTML = "";
  if (filtered.length === 0) {
    repoListEl.textContent = "No repos found.";
    return;
  }
  filtered.forEach((repo) => {
    const item = document.createElement("div");
    item.className = "repo-item";
    if (repo.id === activeRepoId) {
      item.classList.add("active");
    }
    const key = cachedKeys.find((entry) => entry.id === repo.keyId);
    const fingerprint = key?.fingerprints?.[0] ?? "unknown";
    item.innerHTML = `
      <div class="repo-title">${repo.label} (${repo.id})</div>
      <div class="repo-meta">
        <span>${repo.baseUrl ?? "—"}</span>
        <span>${repo.keyId ?? "—"}</span>
      </div>
      <div class="repo-key">Fingerprint: ${fingerprint}</div>
    `;
    item.addEventListener("click", () => {
      activeRepoId = repo.id;
      renderRepoList(repoSearchEl.value);
      window.location.href = `./repo.html?id=${encodeURIComponent(repo.id)}`;
    });
    repoListEl.appendChild(item);
  });
}

async function renderRepoDetailPage(repoId) {
  if (!repoDetailPage) {
    return;
  }
  const data = await fetchJson(`/api/repos/${encodeURIComponent(repoId)}`);
  const repo = data.repo;
  const suites = await fetchJson(`/api/repos/${encodeURIComponent(repoId)}/suites`).catch(() => null);
  const validation = await fetchJson(`/api/repos/${encodeURIComponent(repoId)}/validate`);
  const showSync = !suites;

  const keyOptions = cachedKeys
    .map(
      (key) => `<option value="${key.id}" ${key.id === repo.keyId ? "selected" : ""}>
        ${key.id} · ${key.label} · ${key.fingerprints?.[0] ?? "unknown"}
      </option>`
    )
    .join("");

  repoDetailPage.innerHTML = `
    <div class="panel wide">
      <h2>${repo.label}</h2>
      <div class="detail-grid">
        <div><strong>ID</strong><br />${repo.id}</div>
        <div><strong>Base URL</strong><br />${repo.baseUrl ?? "—"}</div>
        <div><strong>Key ID</strong><br />${repo.keyId ?? "—"}</div>
        <div><strong>Docs</strong><br />${repo.documentationUrl ?? "—"}</div>
      </div>
      <label>
        Change Key
        <select id="repo-key-select">
          <option value="">Select key…</option>
          ${keyOptions}
        </select>
      </label>
      <div class="detail-actions">
        <button id="repo-save-key" class="primary">Update Key</button>
        <button id="repo-validate">Validate Repo</button>
        ${showSync ? '<button data-command="sync-catalog">Sync Catalog (generate suites)</button>' : ""}
        <button id="repo-delete" class="danger">Delete Repo</button>
      </div>
      <div class="validation-block">
        <strong>Validation</strong>
        <div>${validation.ok ? "OK" : "Issues: " + validation.issues.join(", ")}</div>
      </div>
    </div>
    <div class="panel wide">
      <h2>Suites</h2>
      <pre class="code-block">${suites ? JSON.stringify(suites.suites, null, 2) : "No suites.json found."}</pre>
    </div>
  `;

  repoDetailPage.querySelector("#repo-save-key").addEventListener("click", async () => {
    const select = repoDetailPage.querySelector("#repo-key-select");
    const keyId = select.value;
    if (!keyId) {
      appendLog("Select a key before updating.");
      return;
    }
    try {
      const updated = await fetchJson(`/api/repos/${encodeURIComponent(repo.id)}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyId })
      });
      appendLog(`Updated repo ${repo.id} keyId -> ${keyId}`);
      await refreshRepos();
      await renderRepoDetailPage(updated.repo.id);
    } catch (error) {
      appendLog(`Error: ${error.message}`);
    }
  });

  repoDetailPage.querySelector("#repo-delete").addEventListener("click", async () => {
    const confirmText = `Delete repo ${repo.id}? This will remove the repo and any unreferenced key.`;
    if (!window.confirm(confirmText)) {
      return;
    }
    try {
      const result = await fetchJson(`/api/repos/${encodeURIComponent(repo.id)}`, {
        method: "DELETE"
      });
      appendLog(`Deleted repo ${repo.id}.`);
      if (result.deletedKey?.keyId) {
        appendLog(`Deleted key ${result.deletedKey.keyId} (no longer referenced).`);
      }
      window.location.href = "./index.html";
    } catch (error) {
      appendLog(`Delete error: ${error.message}`);
    }
  });

  repoDetailPage.querySelector("#repo-validate").addEventListener("click", async () => {
    const result = await fetchJson(`/api/repos/${encodeURIComponent(repo.id)}/validate`);
    appendLog(result.ok ? `Repo ${repo.id} OK` : `Repo ${repo.id} issues: ${result.issues.join(", ")}`);
    await renderRepoDetailPage(repo.id);
  });

  repoDetailPage.querySelectorAll("[data-command]").forEach((button) => {
    button.addEventListener("click", async () => {
      const command = button.getAttribute("data-command");
      try {
        await runCommand(command);
      } catch (error) {
        appendLog(`Error: ${error.message}`);
      }
    });
  });
}

function renderKeysList(filter = "") {
  if (!keysListEl) {
    return;
  }
  const query = filter.trim().toLowerCase();
  const filtered = cachedKeys.filter((key) => {
    if (!query) return true;
    return (
      key.id?.toLowerCase().includes(query) ||
      key.label?.toLowerCase().includes(query) ||
      key.fingerprints?.some((fp) => fp.toLowerCase().includes(query))
    );
  });

  keysListEl.innerHTML = "";
  if (filtered.length === 0) {
    keysListEl.textContent = "No keys found.";
    return;
  }
  filtered.forEach((key) => {
    const item = document.createElement("div");
    item.className = "repo-item";
    item.innerHTML = `
      <div class="repo-title">${key.label} (${key.id})</div>
      <div class="repo-meta">${(key.sourceUrls ?? []).slice(0, 2).join(" · ")}</div>
      <div class="repo-key">Fingerprint: ${(key.fingerprints ?? []).join(", ")}</div>
    `;
    keysListEl.appendChild(item);
  });
}

async function runCommand(command, input) {
  const payload = { command, input };
  const result = await fetchJson("/api/run", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const output = `${result.command}\n${result.stdout || ""}${result.stderr || ""}`.trim();
  appendLog(output || `Command ${command} finished with code ${result.code}`);
  await refreshKeys();
  await refreshRepos();
}

document.getElementById("add-key-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = Object.fromEntries(new FormData(form));
  input.force = form.force.checked;
  try {
    await runCommand("add-key", input);
    form.reset();
  } catch (error) {
    appendLog(`Error: ${error.message}`);
  }
});

document.getElementById("add-repo-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = Object.fromEntries(new FormData(form));
  input.force = form.force.checked;
  input.allowDeprecatedKey = form.allowDeprecatedKey.checked;
  const key = cachedKeys.find((entry) => entry.id === input.keyId);
  if (!input.keyId) {
    appendLog("Select a matching key before adding the repository.");
    return;
  }
  if (key?.status === "deprecated" && !input.allowDeprecatedKey) {
    appendLog(`Key ${input.keyId} is deprecated. Check allow deprecated key to proceed.`);
    return;
  }
  try {
    await runCommand("add-repo", input);
    form.reset();
  } catch (error) {
    appendLog(`Error: ${error.message}`);
  }
});

document.getElementById("lookup-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const fingerprint = form.fingerprint.value.trim();
  const url = form.url.value.trim();
  lookupResults.textContent = "Searching…";
  try {
    const params = new URLSearchParams();
    if (fingerprint) {
      params.set("fingerprint", fingerprint);
    } else if (url) {
      params.set("url", url);
    }
    const data = await fetchJson(`/api/keys/lookup?${params.toString()}`);
    const results = data.keys ?? [];
    if (results.length === 0) {
      lookupResults.textContent = "No matching keys.";
      return;
    }
    lookupResults.innerHTML = results
      .map(
        (key) => `
        <div class="result-item">
          <strong>${key.id}</strong><br />
          <span>${key.label}</span><br />
          <small>${key.fingerprints.join(", ")}</small>
        </div>`
      )
      .join("");
  } catch (error) {
    lookupResults.textContent = `Error: ${error.message}`;
  }
});

document.querySelectorAll("[data-command]").forEach((button) => {
  button.addEventListener("click", async () => {
    const command = button.getAttribute("data-command");
    try {
      await runCommand(command);
    } catch (error) {
      appendLog(`Error: ${error.message}`);
    }
  });
});

importRepoForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const input = Object.fromEntries(new FormData(form));
  const source = input.source?.trim();
  if (!source) {
    appendLog("Enter a repo URL or apt source line.");
    return;
  }
  try {
    if (importStatusEl) {
      importStatusEl.textContent = "Fetching repository metadata…";
    }
    const result = await fetchJson("/api/import-repo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: source })
    });
    const addForm = document.getElementById("add-repo-form");
    addForm.baseUrl.value = result.baseUrl ?? "";
    addForm.suites.value = result.suite ?? "";
    addForm.components.value = (result.components ?? []).join(", ");
    addForm.architectures.value = (result.architectures ?? []).join(", ");
    addForm.label.value = result.label ?? "";
    addForm.name.value = (result.label ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    addForm.id.value = addForm.name.value;
    if (result.keyMatch?.keyId) {
      addForm.keyId.value = result.keyMatch.keyId;
    }
    if (importStatusEl) {
      const existingNote = result.existingRepo
        ? `Repo already exists. <a href="./repo.html?id=${encodeURIComponent(result.existingRepo.id)}">Open repo</a>.`
        : "Repo not found in catalog.";
      const keyNote = result.keyMatch?.keyId
        ? `Matched key ${result.keyMatch.keyId}.`
        : "No matching key found.";
      importStatusEl.innerHTML = `${existingNote} ${keyNote}`;
    }
    appendLog("Fetched repo metadata. Review and add.");
  } catch (error) {
    if (importStatusEl) {
      importStatusEl.textContent = `Import failed: ${error.message}`;
    }
    appendLog(`Import error: ${error.message}`);
  }
});

async function init() {
  try {
    await refreshKeys();
    await refreshRepos();
    if (serverStatusEl) {
      serverStatusEl.textContent = "Online";
    }
    renderKeysList();
  } catch (error) {
    if (serverStatusEl) {
      serverStatusEl.textContent = "Offline";
    }
    appendLog(`Server error: ${error.message}`);
  }
}

init();

repoSearchEl?.addEventListener("input", (event) => {
  renderRepoList(event.target.value);
});

keysSearchEl?.addEventListener("input", (event) => {
  renderKeysList(event.target.value);
});

if (repoDetailPage) {
  const params = new URLSearchParams(window.location.search);
  const repoId = params.get("id");
  if (repoId) {
    refreshKeys().then(() => renderRepoDetailPage(repoId)).catch((error) => appendLog(error.message));
  }
}
