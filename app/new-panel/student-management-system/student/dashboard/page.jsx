"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ManagementStudentDashboard() {
  const router = useRouter();
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => { fetch("/api/management/student").then(async (r) => { const data = await r.json(); if (!r.ok) throw new Error(data.error); setStudent(data); }).catch((e) => { setError(e.message); router.replace("/new-panel/student-management-system/login"); }); }, [router]);
  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/new-panel/student-management-system/login"); }
  return <main className="container py-5"><header className="d-flex justify-content-between"><div><h1 className="h3">Student Management</h1><p>{student?.username ? `Welcome, ${student.username}` : "Student account"}</p></div><button className="btn btn-outline-secondary" onClick={logout}>Logout</button></header>{error && <div className="alert alert-danger">{error}</div>}<p>Your student account is active. Course activity will appear here.</p><a href="/">Back to website</a></main>;
}
