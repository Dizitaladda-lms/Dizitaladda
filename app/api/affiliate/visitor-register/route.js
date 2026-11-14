import { getAffiliateDatabase, safeError } from "../../../../lib/db.js";
import { hashPassword } from "../../../../lib/passwords.js";

export const runtime = "nodejs";

export async function POST(request) {
  let body;
  try { body = await request.json(); } catch { return Response.json({ error: "Invalid request." }, { status: 400 }); }
  const name = String(body.name || "").trim().slice(0, 200);
  const email = String(body.email || "").trim().toLowerCase().slice(0, 254);
  const password = String(body.password || "");
  const referralCode = String(body.ref || "").trim().slice(0, 40);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 10) return Response.json({ error: "Enter your name, valid email and password (10 characters minimum)." }, { status: 400 });
  let connection;
  try {
    const db = getAffiliateDatabase();
    connection = await db.getConnection();
    await connection.beginTransaction();
    const [existing] = await connection.execute("SELECT id FROM users WHERE email = ? LIMIT 1", [email]);
    if (existing.length) { await connection.rollback(); return Response.json({ error: "An account with this email already exists." }, { status: 409 }); }
    await connection.execute("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, await hashPassword(password)]);
    if (referralCode) {
      const [affiliates] = await connection.execute("SELECT id FROM affiliates WHERE referral_code = ? LIMIT 1", [referralCode]);
      if (affiliates.length) {
        const affiliateId = affiliates[0].id;
        await connection.execute("INSERT INTO referrals (affiliate_id, referred_user, commission) VALUES (?, ?, ?)", [affiliateId, email, 10]);
        await connection.execute("UPDATE affiliates SET total_commission = total_commission + 10 WHERE id = ?", [affiliateId]);
      }
    }
    await connection.commit();
    return Response.json({ success: true }, { status: 201 });
  } catch (error) { if (connection) await connection.rollback().catch(() => {}); return safeError(error); }
  finally { connection?.release(); }
}
