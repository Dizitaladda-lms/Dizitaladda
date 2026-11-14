# Dizital Adda Next.js migration

The Next.js App Router lives in `app/`. Public pages use JSX components in `public-pages/`, with shared UI in `components/`. Static assets are served from `public/`.

## Run locally

1. Install Node.js 20.9 or later and run `npm install`.
2. Copy `.env.example` to `.env.local` and set the database, `AUTH_SECRET`, and payment values for the deployment. Point `BLOG_DB_*` and `LEGACY_CONTENT_DB_*` to the existing `Blog_System` database to keep blog posts and root content available.
3. Apply `database/schema.sql` and relevant auxiliary schemas for a new installation. For an existing database, apply only the required migrations: `002-blog-post-content.sql` adds blog fields and `003-inquiry-fields.sql` adds inquiry fields. Set the separate staff, school, management, affiliate, lead, test-form and scholarship DB variables to the existing databases that contain those records; the corresponding schema files are for fresh installs.
4. Run `npm run dev`, or run `npm run build` followed by `npm start` for production.

Public routes resolve through `public-pages/registry.js`; the legacy HTML snapshots have been removed. The retained files under `backups/` are archival copies and are not served by the app.

## Converted routes and backend

- Public pages: 208 PHP page templates were rendered into 301 clean and alias URLs; all 208 source files were removed after the HTML snapshots were verified.
- SEO redirects: old URL mappings are in `legacy-redirects.json` and `next.config.mjs`; generic `.php` and `.html` GET URLs normalize to extension-free paths. Apache rewrite and security-header rules have been moved to Next.js configuration.
- Student and admin LMS: Next.js login/session APIs, course access, lessons, payments, admin CRUD and leads.
- Staff, school, management and affiliate portals: Next.js pages and server APIs, with private uploads and signed sessions.
- Blog pages and CMS: JSX listing/detail routes and admin APIs; the old PHP copies and embedded DB credentials were removed.
- Legacy root-level 72-section content pages: Next.js fallback renderer and admin list/create/edit/delete APIs under Panel → Legacy content.
- Payments and forms: Razorpay order/payment verification, PayU callback verification, and the book-demo/contact form API.
- Scholarship lookup and form submissions: Next.js routes preserve the two existing MySQL table layouts; submission listing is admin-gated.

## Data and deployment notes

There are no PHP source files left in the workspace. Archived PHP copies and old PHP endpoints were removed after their active routes were moved to Next.js or retained as frozen HTML snapshots. Set `LEGACY_CONTENT_DB_*` to the existing Blog_System database to keep root-level CMS records available; `database/legacy-content-schema.sql` is for a new database.

The production database and gateway values are deployment settings; they are not bundled in the app. Keep them in server environment variables and never in browser code.
