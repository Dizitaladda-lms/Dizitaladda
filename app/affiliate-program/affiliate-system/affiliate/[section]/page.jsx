import AffiliatePortal from "../portal.jsx";

export default async function AffiliateSectionPage({ params }) {
  const { section } = await params;
  return <AffiliatePortal initialSection={section.replace(/\.php$/i, "")} />;
}
