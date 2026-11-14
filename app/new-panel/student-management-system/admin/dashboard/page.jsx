"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagementDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { fetch("/api/management/dashboard").then(async (r) => { const data = await r.json(); if (!r.ok) throw new Error(data.error); setStats(data); }).catch((e) => { setError(e.message); if (e.message === "Unauthorized.") router.replace("/new-panel/student-management-system/login"); }); }, [router]);
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/new-panel/student-management-system/login"); }
  return <main className="container py-5"><header className="d-flex justify-content-between align-items-center mb-4"><div><h1 className="h3">Student Management</h1><p className="text-muted">Administration overview</p></div><button className="btn btn-outline-secondary" onClick={logout}>Logout</button></header>{error && <div className="alert alert-danger">{error}</div>}<div className="row">{stats && [["Students", stats.students], ["Courses", stats.courses], ["Enrollments", stats.enrollments]].map(([label, value]) => <div key={label} className="col-md-4 mb-3"><article className="card shadow-sm"><div className="card-body"><div className="text-muted">{label}</div><div className="display-4">{value}</div></div></article></div>)}</div></main>;
}
