/**
 * Backwards compatibility wrapper for legacy CampusInfrastructureGallery
 * Now renders the redesigned, high-conversion DizitalAdda CampusSection
 */
import CampusSection from "./campus/CampusSection";

export default function CampusInfrastructureGallery() {
  return <CampusSection />;
}
