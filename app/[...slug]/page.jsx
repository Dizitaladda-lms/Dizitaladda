import { getLegacyContentDatabase } from "../../lib/db.js";
import { renderLegacyContent } from "../../lib/legacy-content.js";
import { notFound, permanentRedirect, redirect } from "next/navigation";
import { publicPageLoaders, publicPageMetadata } from "../../public-pages/registry.js";
const aliases = new Map([
    ["panel/loginorsignup.php", "/panel/student/login"],
    ["panel/index.php", "/panel/student"],
    ["panel/index-new.php", "/panel/student"],
    ["panel/admin/admin.php", "/panel/admin"],
    ["panel/admin/admindashboard.php", "/panel/admin"],
    ["panel/admin/courses.php", "/panel/admin/courses"],
    ["panel/admin/addcourse.php", "/panel/admin/courses"],
    ["panel/admin/editcourse.php", "/panel/admin/courses"],
    ["panel/admin/lessons.php", "/panel/admin/lessons"],
    ["panel/admin/addlesson.php", "/panel/admin/lessons"],
    ["panel/admin/editlesson.php", "/panel/admin/lessons"],
    ["panel/admin/students.php", "/panel/admin/students"],
    ["panel/admin/addnewstudent.php", "/panel/admin/students"],
    ["panel/admin/editstudent.php", "/panel/admin/students"],
    ["panel/admin/adminpaymentstatus.php", "/panel/admin/orders"],
    ["panel/admin/feedback.php", "/panel/admin/feedback"],
    ["panel/admin/adminchangepass.php", "/panel/admin/settings"],
    ["panel/student/mycourse.php", "/panel/student/courses"],
    ["panel/student/studentprofile.php", "/panel/student/profile"],
    ["panel/student/studentchangepass.php", "/panel/student/password"],
    ["panel/student/help.php", "/panel/student/help"],
    ["panel/student/stufeedback.php", "/panel/student/feedback"],
    ["panel/student/watchcourse.php", "/panel/student/course"],
    ["panel/checkout.php", "/courses"],
    ["panel/paymentstatus.php", "/panel/admin/orders"],
    ["panel/logout.php", "/panel/logout"],
    ["testing-purpose/shocholar/index.php", "/testing-purpose/shocholar"],
    ["testing-purpose/shocholar/register_scholarship.php", "/testing-purpose/shocholar/register_scholarship"],
    ["testing-purpose/shocholar/check_eligibility.php", "/testing-purpose/shocholar"],
    ["testing-purpose/form-submission/view-submissions.php", "/testing-purpose/form-submission/view-submissions"],
    ["assets/akash-folder/login.php", "/panel/admin/legacy-content"],
    ["assets/akash-folder/index.php", "/panel/admin/legacy-content"],
    ["assets/akash-folder/blog-list.php", "/panel/admin/legacy-content"],
    ["assets/akash-folder/create-blog.php", "/panel/admin/legacy-content"],
    ["assets/akash-folder/edit-blog.php", "/panel/admin/legacy-content"],
    ["blogs/single-working-file/login.php", "/panel/admin/legacy-content"],
    ["blogs/single-working-file/index.php", "/panel/admin/legacy-content"],
    ["blogs/single-working-file/create-blog.php", "/panel/admin/blogs"],
    ["blogs/single-working-file/edit-blog.php", "/panel/admin/blogs"],
    ["blogs/index.php", "/blogs"],
    ["blogs/category/index.php", "/blogs"],
    ["project-root-1/index.php", "/project-root-1"],
    ["project-root-1/register.php", "/project-root-1"],
    ["new-panel/student-management-system/login.php", "/new-panel/student-management-system/login"],
    ["affiliate-program/affiliate-system/visitor/register.php", "/affiliate-program/affiliate-system/visitor/register"],
    ["view-submissions.php", "/panel/admin/leads"],
    ["enroll-payment.php", "/enroll-payment"],
    ["enroll-upay-response.php", "/enroll-upay-response"],
    ["sitemap-xml.php", "/sitemap.xml"],
    ["sitemap.php", "/sitemap"],
    ["sitemap-data.php", "/sitemap.xml"],
    ["serve_image.php", "/serve_image"],
    ["forms/employee-manage/login", "/project-root/login"],
    ["project-root/login.php", "/project-root/login"],
    ["project-root/employee_login.php", "/project-root/employee_login"],
    ["project-root/register.php", "/project-root/register"],
    ["project-root/dashboard.php", "/project-root/dashboard"],
    ["project-root/employee_dashboard.php", "/project-root/employee_dashboard"],
    ["project-root/employee_edit.php", "/project-root/employee_edit"],
    ["project-root/logout.php", "/project-root/logout"],
    ["project-root-1/student/profile.php", "/project-root-1/student/profile"],
    ["project-root-1/student/assignments.php", "/project-root-1/student/assignments"],
    ["project-root-1/student/enrollments.php", "/project-root-1/student/enrollments"],
    ["new-panel/student-management-system/admin/dashboard.php", "/new-panel/student-management-system/admin/dashboard"],
  ]);
export const dynamic = "force-static";
export const revalidate = 300;

export async function generateStaticParams() {
  return Object.keys(publicPageLoaders)
    .filter((route) => !route.startsWith("blogs/") && route !== "index" && route !== "enroll-upay")
    .map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }) {
  const { slug = [] } = await params;
  const page = publicPageMetadata[slug.join("/")];
  return page ? { ...(page.title ? { title: { absolute: page.title } } : {}), ...(page.description ? { description: page.description } : {}) } : {};
}

export default async function PublicPage({ params }) {
  const { slug = [] } = await params;
  const relative = slug.join("/");
  const lower = relative.toLowerCase();
  const alias = aliases.get(lower);
  if (alias) redirect(alias);
  if (/\.php$/i.test(relative) && !["submit-form.php", "submit_form.php"].includes(lower)) {
    permanentRedirect(`/${relative.replace(/\.php$/i, "")}`);
  }
  if (/\.html$/i.test(relative) && lower !== "sitemap.html") {
    permanentRedirect(`/${relative.replace(/\.html$/i, "")}`);
  }

  const loader = publicPageLoaders[relative];
  if (loader) {
    const { default: Page } = await loader();
    return <Page />;
  }

  if (!relative.includes("/") && /^[a-z0-9-]{1,300}$/i.test(relative)) {
    try {
      const db = getLegacyContentDatabase();
      const [rows] = await db.execute("SELECT * FROM my_table WHERE slug = ? LIMIT 1", [relative]);
      if (rows.length) {
        const html = renderLegacyContent(rows[0], relative);
        const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
        return <main className="legacy-cms-content" dangerouslySetInnerHTML={{ __html: body }} />;
      }
    } catch { /* A missing CMS entry falls through to the normal not-found page. */ }
  }
  notFound();
}