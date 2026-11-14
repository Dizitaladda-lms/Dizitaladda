"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const nav = { login: "Admin login", employee_login: "Employee login", dashboard: "Employees", employee_dashboard: "My profile", register: "Create admin" };

export default function StaffPortal() {
  const pathname = usePathname();
  const router = useRouter();
  const rawPage = pathname.split("/").filter(Boolean).at(-1) || "login";
  const routePage = rawPage.replace(/\.php$/i, "");
  const page = ["project-root", "index"].includes(routePage) ? "login" : routePage;
  const [loginType, setLoginType] = useState(page === "employee_login" ? "employee" : "admin");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [setupToken, setSetupToken] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [data, setData] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [addForm, setAddForm] = useState({ employee_id: "", name: "", designation: "", description: "", password: "" });

  async function api(url, options) {
    const response = await fetch(url, { credentials: "same-origin", ...options });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Request failed.");
    return result;
  }

  useEffect(() => {
    if (!["dashboard", "employee_dashboard", "employee_edit"].includes(page)) return;
    api("/api/staff/employees").then((result) => {
      if (Array.isArray(result)) setEmployees(result);
      else setData(result);
    }).catch(() => setError("Your session has ended. Sign in to continue."));
  }, [page]);

  async function submitLogin(event) {
    event.preventDefault(); setBusy(true); setError("");
    try {
      if (page === "register") {
        await api("/api/staff/register", { method: "POST", headers: { "content-type": "application/json", "x-staff-setup-token": setupToken }, body: JSON.stringify({ username: identifier, password }) });
        setError("Admin account created. Sign in to continue.");
        router.push("/project-root/login");
      } else {
        const result = await api("/api/staff/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ type: loginType, identifier, password }) });
        router.push(result.redirect);
      }
    } catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function submitEmployee(event) {
    event.preventDefault(); setBusy(true); setError("");
    try { await api("/api/staff/employees", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(addForm) }); setAddForm({ employee_id: "", name: "", designation: "", description: "", password: "" }); setShowCreate(false); setEmployees(await api("/api/staff/employees")); }
    catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.push("/project-root/login"); }

  if (["dashboard", "employee_dashboard", "employee_edit"].includes(page) && error.includes("session")) {
    return <main className="container py-5"><div className="alert alert-warning">{error} <a href="/project-root/login">Admin login</a> · <a href="/project-root/employee_login">Employee login</a></div></main>;
  }

  if (["login", "employee_login", "register"].includes(page)) return <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f1f4f7", padding: 20 }}>
    <form onSubmit={submitLogin} className="card shadow-sm p-4" style={{ width: "min(100%, 430px)" }}>
      <h1 className="h3">Dizital Adda <small className="text-muted">{loginType === "admin" ? "Staff Admin" : "Employee Portal"}</small></h1>
      <p className="text-muted">Sign in to continue.</p>{error && <div className="alert alert-danger">{error}</div>}
      <label className="mb-3">{loginType === "admin" ? "Username" : "Employee ID"}<input className="form-control mt-1" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required autoComplete="username" /></label>
      <label className="mb-4">Password<input className="form-control mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" /></label>
      {page === "register" && <label className="mb-4">One-time setup token<input className="form-control mt-1" type="password" value={setupToken} onChange={(e) => setSetupToken(e.target.value)} required autoComplete="off" /></label>}
      <button className="btn btn-primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      <div className="d-flex justify-content-between mt-3"><a href={loginType === "admin" ? "/project-root/employee_login" : "/project-root/login"}>{loginType === "admin" ? "Employee login" : "Admin login"}</a><a href="/">Website home</a></div>
    </form>
  </main>;

  return <div className="container-fluid" style={{ minHeight: "100vh", background: "#f4f6f8", padding: 24 }}>
    <header className="d-flex justify-content-between align-items-center mb-4"><div><h1 className="h3 mb-0">{nav[page] || "Staff Portal"}</h1><small className="text-muted">Dizital Adda team management</small></div><button className="btn btn-outline-secondary" onClick={logout}>Logout</button></header>
    {error && <div className="alert alert-danger">{error}</div>}
    {page === "dashboard" && <><div className="d-flex justify-content-between align-items-center mb-3"><h2 className="h5 mb-0">Employees</h2><button className="btn btn-primary" onClick={() => setShowCreate(!showCreate)}>Add employee</button></div>
      {showCreate && <form className="card p-3 mb-4" onSubmit={submitEmployee}><div className="row">{[["employee_id", "Employee ID"], ["name", "Full name"], ["designation", "Designation"], ["password", "Initial password"]].map(([key, label]) => <label className="col-md-6 mb-3" key={key}>{label}<input className="form-control mt-1" type={key === "password" ? "password" : "text"} minLength={key === "password" ? 10 : undefined} required value={addForm[key]} onChange={(e) => setAddForm({ ...addForm, [key]: e.target.value })} /></label>)}<label className="col-12 mb-3">Description<textarea className="form-control mt-1" value={addForm.description} onChange={(e) => setAddForm({ ...addForm, description: e.target.value })} /></label></div><button className="btn btn-primary align-self-start" disabled={busy}>Save employee</button></form>}
      <div className="card"><div className="table-responsive"><table className="table table-striped mb-0"><thead><tr><th>ID</th><th>Name</th><th>Employee ID</th><th>Designation</th><th>Actions</th></tr></thead><tbody>{employees.map((employee) => <tr key={employee.id}><td>{employee.id}</td><td>{employee.name}</td><td>{employee.employee_id}</td><td>{employee.designation}</td><td><button className="btn btn-sm btn-outline-primary mr-2" onClick={async () => { const value = prompt("Update designation", employee.designation || ""); if (value !== null) { try { await api(`/api/staff/employees/${employee.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ designation: value }) }); setEmployees(await api("/api/staff/employees")); } catch (e) { setError(e.message); } } }}>Edit</button><button className="btn btn-sm btn-outline-danger" onClick={async () => { if (!confirm("Delete this employee?")) return; try { await api(`/api/staff/employees/${employee.id}`, { method: "DELETE" }); setEmployees(await api("/api/staff/employees")); } catch (e) { setError(e.message); } }}>Delete</button></td></tr>)}{!employees.length && <tr><td colSpan="5" className="text-center">No employees found.</td></tr>}</tbody></table></div></div>
    </>}
    {page === "employee_dashboard" && data && <article className="card p-4" style={{ maxWidth: 760 }}><h2>{data.name}</h2><p>{data.designation}</p><p>{data.description}</p>{data.photo && <img src={data.photo} alt="" style={{ maxWidth: 180 }} />}<a className="btn btn-primary align-self-start" href="/project-root/employee_edit">Edit profile</a></article>}
    {page === "employee_edit" && data && <form className="card p-4" style={{ maxWidth: 760 }} onSubmit={async (event) => { event.preventDefault(); const values = new FormData(event.currentTarget); try { await api(`/api/staff/employees/${data.id}`, { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: values.get("name"), designation: values.get("designation"), description: values.get("description"), photo: values.get("photo") }) }); router.push("/project-root/employee_dashboard"); } catch (e) { setError(e.message); } }}><label className="mb-3">Name<input className="form-control mt-1" name="name" defaultValue={data.name} required /></label><label className="mb-3">Designation<input className="form-control mt-1" name="designation" defaultValue={data.designation} /></label><label className="mb-3">Photo URL<input className="form-control mt-1" name="photo" defaultValue={data.photo} /></label><label className="mb-3">Description<textarea className="form-control mt-1" name="description" defaultValue={data.description} rows={4} /></label><button className="btn btn-primary align-self-start">Save profile</button></form>}
  </div>;
}
