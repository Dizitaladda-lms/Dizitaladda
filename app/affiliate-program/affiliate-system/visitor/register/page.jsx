"use client";

import { useEffect, useState } from "react";

export default function VisitorRegisterPage() {
  const [ref, setRef] = useState("");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  useEffect(() => { setRef(new URLSearchParams(location.search).get("ref") || ""); }, []);
  async function submit(event) {
    event.preventDefault(); setMessage(""); setError("");
    try { const response = await fetch("/api/affiliate/visitor-register", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...form, ref }) }); const data = await response.json(); if (!response.ok) throw new Error(data.error); setMessage("Registration successful."); }
    catch (e) { setError(e.message); }
  }
  return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "#f4f4f4", fontFamily: "Arial,sans-serif" }}><form className="card p-4 shadow-sm" style={{ width: "min(100%,430px)" }} onSubmit={submit}><h1 className="h3">Register</h1>{message && <div className="alert alert-success">{message}</div>}{error && <div className="alert alert-danger">{error}</div>}{[["name","Name","text"],["email","Email","email"],["password","Password","password"]].map(([key,label,type]) => <label className="mb-3" key={key}>{label}<input className="form-control mt-1" type={type} minLength={type === "password" ? 10 : undefined} required value={form[key]} onChange={(e) => setForm({ ...form, [key]: e.target.value })} /></label>)}<button className="btn btn-primary">Register</button></form></main>;
}
