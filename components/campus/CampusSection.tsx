import React from "react";
import { campusData, CampusSectionData } from "../../data/campus";
import CampusTour from "./CampusTour";
import CampusCTA from "./CampusCTA";
import styles from "./Campus.module.css";

interface CampusSectionProps {
  /**
   * Optional custom data object.
   * Uses campusData by default.
   */
  data?: CampusSectionData;
}

/**
 * CampusSection
 * ==============================================================
 * Features:
 * - Full-width Bento Grid Campus Tour (No video, all 7 campus images at once)
 * - In-person Campus Visit & Mentorship CTA
 */
export default function CampusSection({ data = campusData }: CampusSectionProps) {
  const { cta } = data;

  return (
    <section
      className={styles.campusSection}
      aria-label="Explore Our Campus"
      id="explore-campus"
    >
      <CampusTour />
      <div className={styles.ctaContainer}>
        <CampusCTA cta={cta} />
      </div>
    </section>
  );
}
