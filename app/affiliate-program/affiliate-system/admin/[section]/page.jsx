import { redirect } from "next/navigation";

export default async function AffiliateAdminRoute({ params }) {
  const { section } = await params;
  if (["login", "admin-dashboard", "dashboard"].includes(section.replace(/\.php$/i, ""))) redirect("/affiliate-program/affiliate-system/admin");
  redirect("/affiliate-program/affiliate-system/admin");
}
