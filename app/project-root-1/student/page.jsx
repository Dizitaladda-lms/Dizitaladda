"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const menu = [["profile", "Profile"], ["enrollments", "Enrollments"], ["assignments", "Assignments"]];

export default function SchoolStudentPortal() {
  const pathname = usePathname();
  const router = useRouter();
  const raw = pathname.split("/").filter(Boolean).at(-1);
  const section = (raw === "student" ? "profile" : raw).replace(/\.php$/i, "");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function load() {
    const response = await fetch("/api/school/profile");
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || "Could not load your profile.");
    setData(result);
  }

  useEffect(() => { load().catch((e) => { setError(e.message); if (e.message === "Unauthorized.") router.replace("/project-root-1"); }); }, [router]);

  async function enroll(courseId) {
    setError(""); setMessage("");
    try { const response = await fetch("/api/school/enrollments", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ course_id: courseId }) }); const result = await response.json(); if (!response.ok) throw new Error(result.error); setMessage("You are enrolled."); await load(); }
    catch (e) { setError(e.message); }
  }

  async function assignmentSubmit(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try { const response = await fetch("/api/school/assignments", { method: "POST", body: new FormData(event.currentTarget) }); const result = await response.json(); if (!response.ok) throw new Error(result.error); setMessage("Assignment submitted."); event.currentTarget.reset(); await load(); }
    catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/project-root-1"); }

  return <main className="container py-4"><header className="d-flex justify-content-between align-items-center mb-4"><div><h1 className="h3">Student Portal</h1><span className="text-muted">{data?.student?.stu_name}</span></div><button className="btn btn-outline-secondary" onClick={logout}>Logout</button></header><nav className="nav nav-pills mb-4">{menu.map(([key, label]) => <a key={key} className={`nav-link ${section === key ? "active" : ""}`} href={key === "profile" ? "/project-root-1/student/profile" : `/project-root-1/student/${key}`}>{label}</a>)}</nav>{error && <div className="alert alert-danger">{error}</div>}{message && <div className="alert alert-success">{message}</div>}
    {!data && <p>Loading…</p>}
    {data && section === "profile" && <section className="card p-4"><h2 className="h5">My Profile</h2><p>Email: {data.student.stu_email}</p><p>Occupation: {data.student.stu_occ || "—"}</p><p>Enrolled courses: {data.enrollments.length}</p><a href="/project-root-1/student/enrollments">View enrollments</a></section>}
    {data && section === "enrollments" && <><h2 className="h5">Your courses</h2><div className="table-responsive mb-4"><table className="table table-bordered"><thead><tr><th>Course</th><th>Code</th></tr></thead><tbody>{data.enrollments.map((c) => <tr key={c.course_id}><td>{c.course_name}</td><td>{c.course_code}</td></tr>)}{!data.enrollments.length && <tr><td colSpan="2">You are not enrolled in any courses yet.</td></tr>}</tbody></table></div><h2 className="h5">Available courses</h2><div className="table-responsive"><table className="table table-bordered"><thead><tr><th>Course</th><th>Code</th><th></th></tr></thead><tbody>{data.available.map((c) => <tr key={c.course_id}><td>{c.course_name}</td><td>{c.course_code}</td><td><button className="btn btn-sm btn-primary" onClick={() => enroll(c.course_id)}>Enroll</button></td></tr>)}{!data.available.length && <tr><td colSpan="3">No courses available.</td></tr>}</tbody></table></div></>}
    {data && section === "assignments" && <><form onSubmit={assignmentSubmit} className="card p-4 mb-4" style={{ maxWidth: 680 }}><h2 className="h5">Submit an assignment</h2><label className="mb-3">Course<select className="form-control mt-1" name="course_id" required defaultValue=""> <option value="" disabled>Select course</option>{data.enrollments.map((c) => <option value={c.course_id} key={c.course_id}>{c.course_name}</option>)}</select></label><label className="mb-3">File<input className="form-control-file d-block mt-1" name="file" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.zip" required /></label><button className="btn btn-primary align-self-start" disabled={busy}>{busy ? "Uploading…" : "Submit assignment"}</button></form><h2 className="h5">Submitted assignments</h2><ul className="list-group">{data.assignments.map((item) => <li className="list-group-item" key={item.assignment_id}><a href={`/api/school/assignments/${item.assignment_id}`}>Download assignment</a> · Course {item.course_id} · {new Date(item.submitted_at).toLocaleDateString()}</li>)}{!data.assignments.length && <li className="list-group-item">No assignments submitted yet.</li>}</ul></>}
  </main>;
}
