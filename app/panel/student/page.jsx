"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const menu = [["myCourse", "My Courses"], ["studentProfile", "My Profile"], ["stufeedback", "Feedback"], ["help", "Help"]];

export default function StudentPage() {
  const pathname = usePathname();
  const router = useRouter();
  const route = pathname.split("/").filter(Boolean).at(-1).replace(/\.php$/i, "");
  const [section, setSection] = useState(route === "student" ? "myCourse" : route);
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [feedback, setFeedback] = useState("");
  const [feedbackRows, setFeedbackRows] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [lessons, setLessons] = useState({});

  const api = useCallback(async (url, options) => {
    const response = await fetch(url, { credentials: "same-origin", ...options });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed.");
    return data;
  }, []);

  useEffect(() => { setSection(route === "student" ? "myCourse" : route); }, [route]);
  useEffect(() => { api("/api/student/profile").then(setProfile).catch(() => router.replace("/panel/student/login")); }, [api, router]);
  useEffect(() => {
    if (section === "myCourse") api("/api/student/courses").then(setCourses).catch((e) => setError(e.message));
    if (section === "stufeedback") api("/api/student/feedback").then(setFeedbackRows).catch((e) => setError(e.message));
  }, [section, api]);

  async function saveProfile(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    const data = new FormData(event.currentTarget);
    try { await api("/api/student/profile", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ name: data.get("name"), occupation: data.get("occupation") }) }); setMessage("Profile saved."); }
    catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function saveFeedback(event) {
    event.preventDefault(); setBusy(true); setError(""); setMessage("");
    try { await api("/api/student/feedback", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ content: feedback }) }); setFeedback(""); setMessage("Thank you for your feedback."); }
    catch (e) { setError(e.message); }
    finally { setBusy(false); }
  }

  async function logout() { await fetch("/api/auth/logout", { method: "POST" }); router.replace("/panel/student/login"); }
  async function loadLessons(courseId) {
    try { setLessons({ ...lessons, [courseId]: await api(`/api/student/courses/${courseId}`) }); }
    catch (e) { setError(e.message); }
  }

  return <div style={{ minHeight: "100vh", background: "#f3f6f8", paddingTop: 58 }}>
    <nav className="navbar navbar-dark fixed-top shadow-sm" style={{ background: "#225470", height: 58 }}><span className="navbar-brand">Dizital Adda <small>Student Area</small></span><div className="text-white mr-3">{profile?.stu_name || profile?.stu_email}<button onClick={logout} className="btn btn-sm btn-outline-light ml-3">Logout</button></div></nav>
    <div className="container-fluid"><div className="row">
      <aside className="col-md-2 bg-white py-4" style={{ minHeight: "calc(100vh - 58px)" }}>{menu.map(([key, label]) => <button key={key} className={`btn btn-block mb-1 ${section === key ? "btn-primary" : "btn-light"}`} onClick={() => { setSection(key); router.push(key === "myCourse" ? "/panel/student" : `/panel/student/${key}`); }}>{label}</button>)}</aside>
      <main className="col-md-10 p-4"><h1 className="h3 mb-4">{menu.find(([key]) => key === section)?.[1] || "My Courses"}</h1>
        {error && <div className="alert alert-danger">{error}</div>}{message && <div className="alert alert-success">{message}</div>}
        {section === "myCourse" && <div className="row">{courses.map((course) => <div className="col-md-6 col-xl-4 mb-3" key={course.course_id}><article className="card h-100 shadow-sm">{course.course_img && <img src={course.course_img} alt="" className="card-img-top" style={{ maxHeight: 180, objectFit: "cover" }} />}<div className="card-body"><h2 className="h5">{course.course_name}</h2><p>{course.course_duration}</p><button className="btn btn-primary" onClick={() => loadLessons(course.course_id)}>View lessons</button>{lessons[course.course_id] && <ol className="mt-3">{lessons[course.course_id].map((lesson) => <li key={lesson.lesson_id} className="mb-2">{lesson.lesson_link ? <a href={lesson.lesson_link} target="_blank" rel="noreferrer">{lesson.lesson_name}</a> : lesson.lesson_name}</li>)}</ol>}</div></article></div>)}{!courses.length && <div className="col-12"><div className="alert alert-info">No enrolled courses found.</div></div>}</div>}
        {section === "studentProfile" && profile && <form className="card p-4" style={{ maxWidth: 650 }} onSubmit={saveProfile}><label className="mb-3">Name<input className="form-control mt-1" name="name" defaultValue={profile.stu_name} required /></label><label className="mb-3">Email<input className="form-control mt-1" value={profile.stu_email} readOnly /></label><label className="mb-3">Occupation<input className="form-control mt-1" name="occupation" defaultValue={profile.stu_occ || ""} /></label><button className="btn btn-primary align-self-start" disabled={busy}>Save profile</button></form>}
        {section === "stufeedback" && <><form className="card p-4 mb-4" style={{ maxWidth: 700 }} onSubmit={saveFeedback}><label className="mb-3">Share your feedback<textarea className="form-control mt-1" rows={5} value={feedback} onChange={(e) => setFeedback(e.target.value)} required maxLength={5000} /></label><button className="btn btn-primary align-self-start" disabled={busy}>Submit feedback</button></form><div className="list-group">{feedbackRows.map((row) => <article className="list-group-item" key={row.f_id}>{row.f_content}</article>)}</div></>}
        {section === "studentChangePass" && <form className="card p-4" style={{ maxWidth: 600 }} onSubmit={async (event) => { event.preventDefault(); const data = new FormData(event.currentTarget); setBusy(true); setError(""); setMessage(""); try { await api("/api/student/password", { method: "PATCH", headers: { "content-type": "application/json" }, body: JSON.stringify({ currentPassword: data.get("currentPassword"), newPassword: data.get("newPassword") }) }); event.currentTarget.reset(); setMessage("Password updated."); } catch (e) { setError(e.message); } finally { setBusy(false); } }}><label className="mb-3">Current password<input className="form-control mt-1" type="password" name="currentPassword" required /></label><label className="mb-3">New password<input className="form-control mt-1" type="password" name="newPassword" minLength={10} required /></label><button className="btn btn-primary align-self-start" disabled={busy}>Change password</button></form>}
        {section === "help" && <div className="card p-4" style={{ maxWidth: 650 }}><p>For help with your account or course, contact our student support team.</p><a href="mailto:info@dizitaladda.com">info@dizitaladda.com</a><a href="tel:+918810606010">+91 88106 06010</a></div>}
      </main>
    </div></div>
  </div>;
}
