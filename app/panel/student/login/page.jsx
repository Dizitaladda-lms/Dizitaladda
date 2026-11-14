"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function StudentLoginPage() {
  const router = useRouter();
  const [registering, setRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", password: "" });
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event) {
    event.preventDefault(); setBusy(true); setError("");
    const endpoint = registering ? "/api/auth/register" : "/api/auth/login";
    const body = registering ? form : { type: "student", email: form.email, password: form.password };
    try {
      const response = await fetch(endpoint, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Could not sign in.");
      router.push(data.redirect || "/panel/student");
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "#f2f5f7" }}>
    <form className="card shadow-sm p-4" style={{ width: "min(100%, 440px)" }} onSubmit={submit}>
      <h1 className="h3">Dizital Adda</h1><p className="text-muted">{registering ? "Create your student account" : "Sign in to your learning account"}</p>
      {error && <div className="alert alert-danger">{error}</div>}
      {registering && <><label className="mb-3">Full name<input className="form-control mt-1" required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label><label className="mb-3">Mobile number<input className="form-control mt-1" type="tel" autoComplete="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label></>}
      <label className="mb-3">Email<input className="form-control mt-1" type="email" required autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label>
      <label className="mb-4">Password<input className="form-control mt-1" type="password" required minLength={registering ? 10 : undefined} autoComplete={registering ? "new-password" : "current-password"} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label>
      <button className="btn btn-primary" disabled={busy}>{busy ? "Please wait…" : registering ? "Create account" : "Sign in"}</button>
      <button className="btn btn-link mt-2" type="button" onClick={() => { setRegistering(!registering); setError(""); }}>{registering ? "Already registered? Sign in" : "New student? Create an account"}</button>
      <a className="text-center mt-2" href="/">Back to website</a>
    </form>
  </main>;
}
