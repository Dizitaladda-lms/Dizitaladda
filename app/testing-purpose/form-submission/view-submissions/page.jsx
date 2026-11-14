"use client";

import { useEffect, useState } from "react";

export default function SubmissionListPage() {
  const [rows, setRows] = useState(null);
  const [unauthorized, setUnauthorized] = useState(false);
  useEffect(() => {
    fetch("/api/testing-purpose/submissions").then(async (response) => {
      if (response.status === 401) { setUnauthorized(true); return; }
      if (response.ok) setRows(await response.json());
      else setRows([]);
    }).catch(() => setRows([]));
  }, []);
  if (unauthorized) return <main style={{ maxWidth: 700, margin: "4rem auto", fontFamily: "Arial" }}><h1>Form Submissions</h1><p>Sign in as an administrator to view submissions.</p><a href="/panel/admin">Administrator sign in</a></main>;
  if (rows === null) return <main style={{ padding: 32 }}>Loading submissions…</main>;
  return <main style={{ margin: 24, fontFamily: "Arial" }}><h1 style={{ textAlign: "center" }}>Form Submissions</h1><button className="print-btn" onClick={() => window.print()}>Print</button><table style={{ width: "100%", borderCollapse: "collapse", marginTop: 20 }}><thead><tr>{["Name", "Phone", "Email", "Course", "Submission Time"].map((label) => <th key={label} style={{ border: "1px solid #ddd", padding: 12, textAlign: "left", background: "#f4f4f4" }}>{label}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row.id}>{[row.name, row.phone, row.email, row.course, row.submission_time].map((value, index) => <td key={index} style={{ border: "1px solid #ddd", padding: 12 }}>{value}</td>)}</tr>)}{rows.length === 0 && <tr><td colSpan="5" style={{ padding: 16 }}>No submissions found.</td></tr>}</tbody></table></main>;
}
