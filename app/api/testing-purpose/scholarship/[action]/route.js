import { getScholarshipDatabase, safeError } from "../../../../../lib/db.js";
import { createOnePagePdf } from "../../../../../lib/simple-pdf.js";

export const runtime = "nodejs";
const clean = (value, max) => typeof value === "string" ? value.trim().replace(/[<>\u0000-\u001f]/g, "").slice(0, max) : "";
const page = (title, message) => new Response(`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font:16px/1.6 Arial,sans-serif;max-width:680px;margin:12vh auto;padding:24px"><h1>${title}</h1><p>${message}</p><a href="/testing-purpose/shocholar">Back</a></body></html>`, { headers: { "content-type": "text/html; charset=utf-8" } });

export async function handleScholarshipPost(request, action) {
  action = action.replace(/\.php$/i, "");
  let form;
  try { form = await request.formData(); } catch { return page("Invalid request", "Please submit the form again."); }
  const phone = clean(form.get("phone_number"), 32).replace(/\s/g, "");
  if (!/^\+?[0-9]{10,15}$/.test(phone)) return page("Invalid phone number", "Enter a valid phone number.");
  try {
    const db = getScholarshipDatabase();
    if (action === "register_scholarship") {
      const name = clean(form.get("name"), 160), email = clean(form.get("email"), 254).toLowerCase(), course = clean(form.get("course"), 160);
      if (!name || !course || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return page("Check your details", "Enter your name, course and a valid email address.");
      const [existing] = await db.execute("SELECT id FROM students WHERE phone_number = ? LIMIT 1", [phone]);
      if (existing.length) {
        await db.execute("UPDATE students SET name = ?, email = ?, course = ? WHERE id = ?", [name, email, course, existing[0].id]);
      } else {
        await db.execute("INSERT INTO students (name, phone_number, email, course) VALUES (?, ?, ?, ?)", [name, phone, email, course]);
      }
      return page("Application submitted", "Your scholarship application has been submitted successfully.");
    }
    if (action === "check_eligibility") {
      const [rows] = await db.execute("SELECT name, phone_number, course FROM students WHERE phone_number = ? LIMIT 1", [phone]);
      if (!rows.length) return Response.redirect(new URL("/testing-purpose/shocholar/register_scholarship", request.url), 303);
      const student = rows[0];
      const pdf = createOnePagePdf(["Scholarship Eligibility", `Name: ${student.name}`, `Phone: ${student.phone_number}`, `Course: ${student.course}`]);
      return new Response(pdf, { headers: { "content-type": "application/pdf", "content-disposition": `attachment; filename="${phone.replace(/[^0-9+]/g, "")}_scholarship.pdf"` } });
    }
    return new Response("Not found", { status: 404 });
  } catch (error) { return safeError(error); }
}

export async function POST(request, { params }) {
  const { action } = await params;
  return handleScholarshipPost(request, action);
}
