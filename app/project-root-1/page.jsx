"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SchoolLogin() {
  const router = useRouter();
  const [registering, setRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/school/auth", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...form, action: registering ? "register" : "login" }) });
      const data = await response.json(); if (!response.ok) throw new Error(data.error || "Sign-in failed."); router.push(data.redirect);
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }
  return <main className="container" style={{ maxWidth: 480, paddingTop: "10vh" }}><form className="card shadow-sm p-4" onSubmit={submit}><h1 className="h3">Student Portal</h1><p className="text-muted">{registering ? "Create your account" : "Sign in to continue"}</p>{error && <div className="alert alert-danger">{error}</div>}{registering && <label className="mb-3">Name<input className="form-control mt-1" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>}<label className="mb-3">Email<input className="form-control mt-1" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label className="mb-4">Password<input className="form-control mt-1" type="password" required minLength={registering ? 10 : undefined} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label><button className="btn btn-primary" disabled={busy}>{busy ? "Please wait…" : registering ? "Create account" : "Sign in"}</button><button type="button" className="btn btn-link mt-2" onClick={() => setRegistering(!registering)}>{registering ? "Already registered? Sign in" : "New student? Register"}</button><a className="text-center" href="/">Back to website</a></form></main>;
}
