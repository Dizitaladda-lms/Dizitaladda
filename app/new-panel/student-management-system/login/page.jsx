"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagementLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/management/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ username, password }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Login failed.");
      router.push(data.redirect);
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f4f6f9", padding: 20 }}><form className="card shadow p-4" onSubmit={submit} style={{ width: "min(100%,420px)" }}><h1 className="h3">Student Management System</h1><p className="text-muted">Sign in with your account.</p>{error && <div className="alert alert-danger">{error}</div>}<label className="mb-3">Username<input className="form-control mt-1" value={username} onChange={(e) => setUsername(e.target.value)} required autoComplete="username" /></label><label className="mb-4">Password<input className="form-control mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Please wait…" : "Login"}</button><a className="text-center mt-3" href="/">Back to website</a></form></main>;
}
