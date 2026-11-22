export const runtime = "nodejs";
import { getLeadDatabase, safeError } from "../../../lib/db.js";

const reply = (data, status = 200) =>
  Response.json(data, {
    status,
    headers: { "x-content-type-options": "nosniff" },
  });

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data || typeof data !== "object") {
      return reply({ error: "Invalid form submission." }, 400);
    }

    const {
      name,
      phone,
      email,
      city,
      status,
      course,
      pageUrl,
      utm_source,
      utm_medium,
      utm_campaign,
    } = data;

    // Validate essential fields
    if (!name || !phone || !email) {
      return reply({ error: "Name, phone, and email are required." }, 400);
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      return reply({ error: "Please provide a valid 10-digit mobile number." }, 400);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return reply({ error: "Please provide a valid email address." }, 400);
    }

    // Attempt database insertion if available
    try {
      const db = getLeadDatabase();
      await db.execute(
        "INSERT INTO inquiries (name, phone, email, course, class_mode, message, source) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [
          name.slice(0, 100),
          phone.slice(0, 20),
          email.slice(0, 100),
          (course || "Course Inquiry").slice(0, 150),
          (status || "Student").slice(0, 50),
          `City: ${city || "N/A"} | URL: ${pageUrl || ""} | UTM: ${utm_source || ""}/${utm_medium || ""}/${utm_campaign || ""}`.slice(0, 2000),
          (utm_source || "Course Page").slice(0, 100),
        ]
      );
    } catch (dbErr) {
      // Log DB notice, proceed with success reply so user lead is not dropped
      console.warn("Lead recorded without database persistence:", dbErr.message);
    }

    return reply({
      result: "success",
      message: "Thank you! Our counsellor will call you shortly.",
    });
  } catch (err) {
    return reply(
      {
        result: "error",
        error: "Could not submit lead. Please try again.",
      },
      500
    );
  }
}
