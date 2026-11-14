export const runtime = "nodejs";
import { getLeadDatabase, safeError } from "../../../../lib/db.js";

const fields = ["name", "phone", "email", "course", "mode", "date", "message", "timestamp", "source"];
const reply = (data, status = 200) => Response.json(data, { status, headers: { "x-content-type-options": "nosniff" } });

export async function POST(request) {
  const endpoint = process.env.BOOK_DEMO_WEBHOOK;
  try {
    const contentType = request.headers.get("content-type") || "";
    let data;
    if (contentType.includes("application/json") || contentType.includes("text/plain")) {
      const raw = await request.text();
      try { data = JSON.parse(raw); } catch { return reply({ result: "error", error: "Invalid form data." }, 400); }
    } else {
      data = Object.fromEntries(await (await request.formData()).entries());
    }
    if (!data || typeof data !== "object" || Array.isArray(data)) return reply({ result: "error", error: "Invalid form data." }, 400);
    const pick = (...keys) => {
      for (const key of keys) if (typeof data[key] === "string") return data[key];
      return "";
    };
    const raw = {
      name: pick("name", "Name", "full_name", "fullname"),
      phone: pick("phone", "Phone", "Number", "mobile", "phone_number"),
      email: pick("email", "Email", "e-mail"),
      course: pick("course", "Course", "subject", "Subject"),
      mode: pick("mode", "class_mode", "Mode"),
      date: pick("date", "Date", "appointment_date"),
      message: pick("message", "Message", "comments", "comment"),
      timestamp: pick("timestamp", "Timestamp"),
      source: pick("source", "Source"),
    };
    const payload = Object.fromEntries(fields.map((field) => [field, raw[field].replace(/[<>\u0000-\u001f]/g, "").trim().slice(0, field === "message" ? 2000 : 1000)]));
    if (!payload.name || !payload.phone || !payload.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      return reply({ result: "error", error: "Enter your name, phone and a valid email." }, 400);
    }
    if (!payload.course) payload.course = "General inquiry";
    const db = getLeadDatabase();
    await db.execute("INSERT INTO inquiries (name, phone, email, course, class_mode, appointment_date, message, source) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [payload.name, payload.phone, payload.email, payload.course, payload.mode || "", payload.date || "", payload.message || "", payload.source || ""]);
    if (!endpoint) return reply({ result: "success" });
    const url = new URL(endpoint);
    if (url.protocol !== "https:") return reply({ result: "success", sheet_synced: false });
    try {
      const upstream = await fetch(url, {
        method: "POST", headers: { "content-type": "text/plain;charset=utf-8" }, body: JSON.stringify(payload),
        redirect: "follow", signal: AbortSignal.timeout(15000),
      });
      return reply({ result: "success", sheet_synced: upstream.ok });
    } catch { return reply({ result: "success", sheet_synced: false }); }
  } catch {
    return reply({ result: "error", error: "Could not submit the form. Please try again." }, 502);
  }
}
