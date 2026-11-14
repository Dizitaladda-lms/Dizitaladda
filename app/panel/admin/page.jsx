"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  ["dashboard", "Dashboard"], ["courses", "Courses"], ["lessons", "Lessons"],
  ["students", "Students"], ["orders", "Sell Report"], ["leads", "Form Leads"], ["feedback", "Feedback"], ["blogs", "Blogs"], ["legacy-content", "Legacy content"], ["affiliates", "Affiliates"],
  ["settings", "Change Password"],
];
const columns = {
  courses: [["course_name", "Course"], ["course_duration", "Duration"], ["course_price", "Price"]],
  students: [["stu_name", "Name"], ["stu_email", "Email"], ["stu_occ", "Occupation"]],
  lessons: [["lesson_name", "Lesson"], ["course_name", "Course"], ["lesson_link", "Video link"]],
  orders: [["order_id", "Order"], ["stu_email", "Student"], ["amount", "Amount"], ["status", "Status"], ["order_date", "Date"]],
  feedback: [["stu_name", "Student"], ["f_content", "Feedback"]],
  blogs: [["title", "Title"], ["slug", "URL"], ["category", "Category"], ["author", "Author"]],
  affiliates: [["name", "Name"], ["email", "Email"], ["referral_code", "Referral code"], ["total_commission", "Commission"]],
  leads: [["name", "Name"], ["phone", "Phone"], ["email", "Email"], ["course", "Course"], ["submission_time", "Submitted"]],
};

export default function AdminPage() {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameSection = pathname.split("/").filter(Boolean).at(-1).replace(/\.php$/i, "");
  const [section, setSection] = useState(nav.some(([key]) => key === pathnameSection) ? pathnameSection : "dashboard");
  const [signedIn, setSignedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({});
  const [busy, setBusy] = useState(false);

  const request = useCallback(async (url, options) => {
    const response = await fetch(url, { credentials: "same-origin", ...options });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }, []);

  const refresh = useCallback(async (target = section) => {
    setError("");
    if (target === "dashboard") setStats(await request("/api/admin/dashboard"));
    else if (target === "settings") setRows([]);
    else setRows(await request(`/api/admin/${target}`));
  }, [request, section]);

  useEffect(() => {
    request("/api/admin/dashboard").then((data) => { setStats(data); setSignedIn(true); })
      .catch(() => setSignedIn(false)).finally(() => setLoading(false));
  }, [request]);

  useEffect(() => {
    if (signedIn) refresh(section).catch((e) => setError(e.message));
  }, [section, signedIn, refresh]);

  async function login(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      await request("/api/auth/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ type: "admin", email, password }) });
      setSignedIn(true); setSection("dashboard");
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setSignedIn(false); setPassword("");
  }

  async function addRecord(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      await request(`/api/admin/${section}`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(form) });
      setForm({}); await refresh(section);
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function removeRecord(row) {
    const key = { courses: "course_id", students: "stu_id", lessons: "lesson_id", orders: "co_id", feedback: "f_id", blogs: "id", affiliates: "id" }[section];
    if (!window.confirm("Delete this record?")) return;
    try { await request(`/api/admin/${section}/${row[key]}`, { method: "DELETE" }); await refresh(section); }
    catch (e) { setError(e.message); }
  }

  async function editRecord(row) {
    const field = { courses: "course_name", students: "stu_name", lessons: "lesson_name", blogs: "title", affiliates: "name" }[section];
    const label = { course_name: "Course name", stu_name: "Student name", lesson_name: "Lesson name", title: "Post title", name: "Affiliate name" }[field];
    const value = window.prompt(`Update ${label.toLowerCase()}`, row[field] || "");
    if (value === null || !value.trim()) return;
    const id = { courses: row.course_id, students: row.stu_id, lessons: row.lesson_id, blogs: row.id, affiliates: row.id }[section];
    try {
      await request(`/api/admin/${section}/${id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ [field]: value.trim() }) });
      await refresh(section);
    } catch (e) { setError(e.message); }
  }

  async function changePassword(event) {
    event.preventDefault(); setBusy(true); setError("");
    const values = new FormData(event.currentTarget);
    try {
      await request("/api/admin/password", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ currentPassword: values.get("currentPassword"), newPassword: values.get("newPassword") }) });
      event.currentTarget.reset(); setError("Password updated.");
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  const field = (key, label, type = "text", wide = false) => (
    <label className={wide ? "col-12" : "col-md-6"} key={key} style={{ display: "block", marginBottom: 12 }}>
      <span style={{ display: "block", marginBottom: 4 }}>{label}</span>
      {type === "textarea" ? <textarea className="form-control" rows={3} value={form[key] || ""} onChange={(e) => setForm({ ...form, [key]: e.target.value })} /> :
        <input className="form-control" type={type} value={form[key] || ""} onChange={(e) => setForm({ ...form, [key]: e.target.value })} required={key === "course_name" || key === "stu_name" || key === "stu_email" || key === "stu_pass" || key === "lesson_name"} />}
    </label>
  );

  if (loading) return <div className="container py-5">Loading admin area…</div>;
  if (!signedIn) return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f3f6f8", padding: 20 }}>
      <form onSubmit={login} className="card shadow-sm p-4" style={{ width: "min(100%, 430px)" }}>
        <h1 className="h3 mb-1">E-Learning <small className="text-muted">Admin Area</small></h1>
        <p className="text-muted mb-4">Sign in to manage courses and students.</p>
        {error && <div className="alert alert-danger">{error}</div>}
        <label className="mb-3">Email<input className="form-control mt-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" /></label>
        <label className="mb-4">Password<input className="form-control mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
        <button className="btn btn-primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        <a className="mt-3 text-center" href="/">Back to website</a>
      </form>
    </main>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f4f6f8", paddingTop: 56 }}>
      <nav className="navbar navbar-dark fixed-top shadow-sm" style={{ background: "#225470", height: 56 }}>
        <span className="navbar-brand mb-0 h1">E-Learning <small>Admin Area</small></span>
        <button className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button>
      </nav>
      <div className="container-fluid"><div className="row">
        <aside className="col-md-2 bg-white border-right py-4" style={{ minHeight: "calc(100vh - 56px)" }}>
          {nav.map(([key, label]) => <button key={key} onClick={() => { setSection(key); router.push(key === "dashboard" ? "/panel/admin" : `/panel/admin/${key}`); }} className={`btn btn-block text-left mb-1 ${section === key ? "btn-primary" : "btn-light"}`} style={{ width: "100%" }}>{label}</button>)}
          <a className="btn btn-light btn-block mt-4" href="/">View website</a>
        </aside>
        <main className="col-md-10 p-4">
          <h1 className="h3 mb-4">{nav.find(([key]) => key === section)?.[1]}</h1>
          {error && <div className={`alert ${error.endsWith(".") && error === "Password updated." ? "alert-success" : "alert-danger"}`}>{error}</div>}
          {section === "dashboard" && stats && <div className="row">
            {[["Courses", stats.courses], ["Students", stats.students], ["Lessons", stats.lessons], ["Orders", stats.orders], ["Revenue", `₹${Number(stats.revenue || 0).toLocaleString("en-IN")}`]].map(([label, value]) => <div className="col-sm-6 col-xl-3 mb-3" key={label}><div className="card shadow-sm"><div className="card-body"><div className="text-muted">{label}</div><div className="h3 mb-0">{value}</div></div></div></div>)}
          </div>}
          {section === "settings" && <form onSubmit={changePassword} className="card p-4" style={{ maxWidth: 560 }}><label className="mb-3">Current password<input className="form-control mt-1" name="currentPassword" type="password" required /></label><label className="mb-3">New password<input className="form-control mt-1" name="newPassword" type="password" minLength={10} required /></label><button className="btn btn-primary align-self-start" disabled={busy}>Update password</button></form>}
          {section === "courses" && <form className="card p-3 mb-4" onSubmit={addRecord}><h2 className="h5">Add course</h2><div className="row">{field("course_name", "Course name")}{field("course_duration", "Duration")}{field("course_author", "Author")}{field("course_price", "Price", "number")}{field("course_original_price", "Original price", "number")}{field("course_img", "Image path", "text", true)}{field("course_desc", "Description", "textarea", true)}</div><button className="btn btn-primary align-self-start" disabled={busy}>Save course</button></form>}
          {section === "students" && <form className="card p-3 mb-4" onSubmit={addRecord}><h2 className="h5">Add student</h2><div className="row">{field("stu_name", "Name")}{field("stu_email", "Email", "email")}{field("stu_pass", "Initial password", "password")}{field("stu_occ", "Occupation")}</div><button className="btn btn-primary align-self-start" disabled={busy}>Create student</button></form>}
          {section === "lessons" && <form className="card p-3 mb-4" onSubmit={addRecord}><h2 className="h5">Add lesson</h2><div className="row">{field("lesson_name", "Lesson name")}{field("course_id", "Course ID", "number")}{field("lesson_link", "Video URL", "url", true)}{field("lesson_desc", "Description", "textarea", true)}</div><button className="btn btn-primary align-self-start" disabled={busy}>Save lesson</button></form>}
          {section === "blogs" && <form className="card p-3 mb-4" onSubmit={addRecord}><h2 className="h5">Add blog post</h2><div className="row">{field("title", "Title")}{field("slug", "URL slug")}{field("category", "Category")}{field("author", "Author")}{field("image", "Image URL", "url", true)}{field("alt_tag", "Image alt text", "text", true)}{field("meta_description", "Meta description", "textarea", true)}{field("description", "Short description", "textarea", true)}{field("content", "Article content (HTML)", "textarea", true)}</div><button className="btn btn-primary align-self-start" disabled={busy}>Publish post</button></form>}
          {section === "affiliates" && <form className="card p-3 mb-4" onSubmit={addRecord}><h2 className="h5">Add affiliate</h2><div className="row">{field("name", "Name")}{field("email", "Email", "email")}{field("password", "Initial password", "password")}</div><button className="btn btn-primary align-self-start" disabled={busy}>Create affiliate</button></form>}
          {columns[section] && <div className="card shadow-sm"><div className="table-responsive"><table className="table table-striped mb-0"><thead><tr>{columns[section].map(([, label]) => <th key={label}>{label}</th>)}<th>Actions</th></tr></thead><tbody>
            {rows.map((row) => <tr key={row.course_id || row.stu_id || row.lesson_id || row.co_id || row.f_id || row.id}>{columns[section].map(([key]) => <td key={key} style={{ maxWidth: 360, overflowWrap: "anywhere" }}>{row[key]}</td>)}<td>{["courses", "students", "lessons", "blogs", "affiliates"].includes(section) && <><button className="btn btn-sm btn-outline-primary mr-2" onClick={() => editRecord(row)}>Edit</button><button className="btn btn-sm btn-outline-danger" onClick={() => removeRecord(row)}>Delete</button></>}</td></tr>)}
            {!rows.length && <tr><td colSpan={columns[section].length + 1} className="text-center text-muted py-4">No records found.</td></tr>}
          </tbody></table></div></div>}
        </main>
      </div></div>
    </div>
  );
}
