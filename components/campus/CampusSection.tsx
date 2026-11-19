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
 * - Cinematic 16:9 Campus Tour (Video autoplay -> Crossfading 7 Places + Horizontal Navigation Strip)
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
      <div className={styles.container}>
        <CampusTour />
        <CampusCTA cta={cta} />
      </div>
    </section>
  );
}
