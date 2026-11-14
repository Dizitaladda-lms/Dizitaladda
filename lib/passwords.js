import bcrypt from "bcryptjs";
import { timingSafeEqual } from "node:crypto";

export async function verifyPassword(storedValue, suppliedValue) {
  const stored = String(storedValue || "");
  const supplied = String(suppliedValue || "");
  if (/^\$2[aby]\$/.test(stored)) return { valid: await bcrypt.compare(supplied, stored), needsUpgrade: false };
  const left = Buffer.from(stored);
  const right = Buffer.from(supplied);
  const valid = left.length === right.length && timingSafeEqual(left, right);
  return { valid, needsUpgrade: valid };
}

export function hashPassword(value) {
  return bcrypt.hash(String(value), 12);
}
