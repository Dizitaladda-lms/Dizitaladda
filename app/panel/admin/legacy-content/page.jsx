"use client";

import { useCallback, useEffect, useState } from "react";

const empty = { slug: "", url: "", meta_title: "", meta_description: "", canonical_tag: "", keywords: "", alt_tag: "", Schema_Data: "", category: "", author: "Dizital Adda", ...Object.fromEntries(Array.from({ length: 72 }, (_, index) => [`p${index + 1}`, ""])) };

export default function LegacyContentAdminPage() {
  const [rows, setRows] = useState([]), [draft, setDraft] = useState(empty), [editing, setEditing] = useState(null);
  const [message, setMessage] = useState("Loading content…"), [busy, setBusy] = useState(false), [authRequired, setAuthRequired] = useState(false);
  const [username, setUsername] = useState(""), [password, setPassword] = useState("");
  const request = useCallback(async (url, options) => {
    const response = await fetch(url, { credentials: "same-origin", ...options });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }, []);
  const refresh = useCallback(async () => {
    try { setRows(await request("/api/admin/legacy-content")); setMessage(""); }
    catch (error) { setAuthRequired(error.message === "Unauthorized."); setMessage(error.message === "Unauthorized." ? "" : error.message); }
  }, [request]);
  useEffect(() => { refresh(); }, [refresh]);

  async function login(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      await request("/api/legacy-content/auth", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ username, password }) });
      setPassword(""); setAuthRequired(false); await refresh();
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  async function edit(id) {
    setMessage("Loading page…");
    try { const row = await request(`/api/admin/legacy-content/${id}`); setDraft({ ...empty, ...row }); setEditing(id); setMessage(""); window.scrollTo({ top: 0, behavior: "smooth" }); }
    catch (error) { setMessage(error.message); }
  }

  async function save(event) {
    event.preventDefault(); setBusy(true); setMessage("");
    try {
      const url = editing ? `/api/admin/legacy-content/${editing}` : "/api/admin/legacy-content";
      await request(url, { method: editing ? "PATCH" : "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(draft) });
      setDraft(empty); setEditing(null); setMessage("Page saved."); await refresh();
    } catch (error) { setMessage(error.message); }
    finally { setBusy(false); }
  }

  async function remove(id) {
    if (!window.confirm("Delete this legacy content page?")) return;
    try { await request(`/api/admin/legacy-content/${id}`, { method: "DELETE" }); if (editing === id) { setDraft(empty); setEditing(null); } await refresh(); }
    catch (error) { setMessage(error.message); }
  }

  const input = (name, label, multiline = false) => <label className="col-md-6 mb-3" key={name}>{label}{multiline ? <textarea className="form-control mt-1" rows={name.startsWith("p") ? 4 : 2} value={draft[name] || ""} onChange={(event) => setDraft({ ...draft, [name]: event.target.value })} /> : <input className="form-control mt-1" value={draft[name] || ""} onChange={(event) => setDraft({ ...draft, [name]: event.target.value })} />}</label>;

  if (authRequired) return <main className="container py-5"><form className="card p-4 mx-auto" style={{ maxWidth: 420 }} onSubmit={login}><h1 className="h4">Legacy content sign in</h1><p className="text-muted">Use the existing content admin account.</p>{message && <div className="alert alert-danger">{message}</div>}<label className="mb-3">Username<input className="form-control mt-1" autoComplete="username" value={username} onChange={(event) => setUsername(event.target.value)} required /></label><label className="mb-3">Password<input className="form-control mt-1" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form></main>;

  return <main className="container-fluid py-4"><h1 className="h3 mb-3">Legacy page content</h1><p className="text-muted">Edit the existing 72-section content records used by older root-level blog URLs.</p>{message && <div className="alert alert-info">{message}</div>}<form onSubmit={save} className="card p-3 mb-4"><div className="d-flex justify-content-between align-items-center"><h2 className="h5">{editing ? "Edit page" : "Create page"}</h2>{editing && <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => { setEditing(null); setDraft(empty); }}>Cancel edit</button>}</div><div className="row">{input("slug", "URL slug")}{input("url", "Canonical URL")}{input("meta_title", "Meta title")}{input("meta_description", "Meta description", true)}{input("canonical_tag", "Canonical path")}{input("keywords", "Keywords", true)}{input("alt_tag", "Image alt text", true)}{input("Schema_Data", "Structured data JSON", true)}{input("category", "Categories (comma separated)")}{input("author", "Author")}</div><details className="mb-3"><summary>Page sections (1–72)</summary><div className="row mt-3">{Array.from({ length: 72 }, (_, index) => input(`p${index + 1}`, `Section ${index + 1}`, true))}</div></details><button className="btn btn-primary align-self-start" disabled={busy}>{busy ? "Saving…" : editing ? "Save changes" : "Create page"}</button></form><div className="card"><div className="table-responsive"><table className="table table-striped mb-0"><thead><tr><th>Title</th><th>Slug</th><th>Categories</th><th>Author</th><th>Actions</th></tr></thead><tbody>{rows.map((row) => <tr key={row.id}><td>{row.meta_title}</td><td>{row.slug}</td><td>{row.category}</td><td>{row.author}</td><td><button className="btn btn-sm btn-outline-primary mr-2" onClick={() => edit(row.id)}>Edit</button><button className="btn btn-sm btn-outline-danger" onClick={() => remove(row.id)}>Delete</button></td></tr>)}{!rows.length && <tr><td colSpan="5" className="text-center text-muted py-4">No pages found.</td></tr>}</tbody></table></div></div></main>;
}
