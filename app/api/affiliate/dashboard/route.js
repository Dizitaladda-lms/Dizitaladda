import { getAffiliateDatabase, safeError } from "../../../../lib/db.js";
import { requireRole } from "../../../../lib/session.js";

export const runtime = "nodejs";

export async function GET(request) {
  const session = requireRole(request, ["affiliate"]);
  if (!session) return Response.json({ error: "Unauthorized." }, { status: 401 });
  try {
    const db = getAffiliateDatabase();
    const [affiliates] = await db.execute("SELECT id, name, email, referral_code, total_commission FROM affiliates WHERE id = ? LIMIT 1", [session.userId]);
    if (!affiliates.length) return Response.json({ error: "Affiliate account not found." }, { status: 404 });
    const [referrals] = await db.execute("SELECT id, referred_user, commission, created_at FROM referrals WHERE affiliate_id = ? ORDER BY id DESC", [session.userId]);
    return Response.json({ affiliate: affiliates[0], referrals });
  } catch (error) { return safeError(error); }
}
