import React from "react";
import { campusData, CampusSectionData } from "../../data/campus";
import FactsStrip from "./FactsStrip";
import VideoTour from "./VideoTour";
import BentoGallery from "./BentoGallery";
import CampusCTA from "./CampusCTA";
import styles from "./Campus.module.css";

interface CampusSectionProps {
  /**
   * Optional custom data object.
   * Agar pass nahi karenge to yeh automatically `data/campus.ts` ka data use karega.
   */
  data?: CampusSectionData;
}

/**
 * CampusSection (Next.js App Router Server Component)
 * ==============================================================
 * "use client" sirf interactive child components me use kiya gaya hai:
 * - FactsStrip (Framer-motion staggered view)
 * - VideoTour (Modal open/close state & keyboard ESC)
 * - BentoGallery (Scroll-triggered pile animation)
 * - CampusCTA (Interactive WhatsApp and visit booking)
 */
export default function CampusSection({ data = campusData }: CampusSectionProps) {
  const { facts, videoTour, photos, cta } = data;

  return (
    <section
      className={styles.campusSection}
      aria-label="Explore Our Campus"
      id="explore-campus"
    >
      <div className={styles.container}>
        <BentoGallery photos={photos} />

        <FactsStrip facts={facts} />
        <VideoTour videoTour={videoTour} />
        <CampusCTA cta={cta} />
      </div>
    </section>
  );
}
