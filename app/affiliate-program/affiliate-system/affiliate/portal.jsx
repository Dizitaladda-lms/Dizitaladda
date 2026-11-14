"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AffiliatePortal({ initialSection }) {
  const router = useRouter();
  const [section, setSection] = useState(initialSection);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => { if (section === "dashboard") fetch("/api/affiliate/dashboard").then(async (r) => { const json = await r.json(); if (!r.ok) throw new Error(json.error); setData(json); }).catch(() => router.replace("/affiliate-program/affiliate-system/affiliate/login")); }, [section, router]);
  async function submit(event) {
    event.preventDefault(); setError("");
    const registering = section === "register";
    try {
      const response = await fetch(registering ? "/api/affiliate/register" : "/api/affiliate/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      const json = await response.json(); if (!response.ok) throw new Error(json.error || "Could not continue.");
      router.push(json.redirect || "/affiliate-program/affiliate-system/affiliate/dashboard");
    } catch (e) { setError(e.message); }
  }
  async function copyLink() { await navigator.clipboard.writeText(`${location.origin}/affiliate-program/affiliate-system/visitor/register?ref=${data.affiliate.referral_code}`); setCopied(true); }
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/affiliate-program/affiliate-system/affiliate/login"); }

  const cardStyle = { width: "min(100%, 500px)", border: 0, borderRadius: 16, boxShadow: "0 14px 40px #17285830" };
  if (section === "login" || section === "register") return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 20, background: "linear-gradient(135deg,#5cb3fd,#8b5bfd)", fontFamily: "Arial,sans-serif" }}><form className="card p-4" style={cardStyle} onSubmit={submit}><h1 className="h3 text-primary text-center">Affiliate {section === "register" ? "Registration" : "Login"}</h1><p className="text-center text-muted">{section === "register" ? "Join our affiliate program" : "Sign in to view your referrals"}</p>{error && <div className="alert alert-danger">{error}</div>}{section === "register" && <label className="mb-3">Name<input className="form-control mt-1" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>}<label className="mb-3">Email<input type="email" className="form-control mt-1" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} /></label><label className="mb-4">Password<input type="password" className="form-control mt-1" minLength={section === "register" ? 10 : undefined} required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} /></label><button className="btn btn-primary">{section === "register" ? "Register" : "Login"}</button><a className="text-center mt-3" href={`/affiliate-program/affiliate-system/affiliate/${section === "register" ? "login" : "register"}`}>{section === "register" ? "Already registered? Login" : "Create an affiliate account"}</a><a className="text-center mt-2" href="/">Back to website</a></form></main>;

  return <main style={{ minHeight: "100vh", padding: "36px 20px", background: "linear-gradient(135deg,#5cb3fd,#8b5bfd)", fontFamily: "Arial,sans-serif" }}><div className="container"><header className="d-flex justify-content-between align-items-center mb-4 text-white"><div><h1 className="h3">Affiliate Dashboard</h1><p className="mb-0">Welcome, {data?.affiliate.name}</p></div><button className="btn btn-light" onClick={logout}>Logout</button></header>{data && <><section className="card p-4 mb-4" style={cardStyle}><div className="row"><div className="col-md-4"><small className="text-muted">Referral code</small><div className="h5">{data.affiliate.referral_code}</div></div><div className="col-md-4"><small className="text-muted">Total commission</small><div className="h5">₹{Number(data.affiliate.total_commission).toFixed(2)}</div></div><div className="col-md-4"><small className="text-muted">Referrals</small><div className="h5">{data.referrals.length}</div></div></div><button className="btn btn-primary align-self-start" onClick={copyLink}>{copied ? "Copied" : "Copy referral link"}</button></section><section className="card p-4" style={{ ...cardStyle, width: "100%" }}><h2 className="h5">Referred users</h2><div className="table-responsive"><table className="table"><thead><tr><th>Email</th><th>Commission</th><th>Date</th></tr></thead><tbody>{data.referrals.map((row) => <tr key={row.id}><td>{row.referred_user}</td><td>₹{Number(row.commission).toFixed(2)}</td><td>{new Date(row.created_at).toLocaleDateString()}</td></tr>)}{!data.referrals.length && <tr><td colSpan="3">No referrals yet.</td></tr>}</tbody></table></div></section></>}</div></main>;
}
