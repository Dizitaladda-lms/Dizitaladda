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
 * - BentoGallery (Hover, click-to-preview, Framer-motion)
 * - Lightbox (Keyboard, touch swipe, focus trap, body scroll lock)
 * - CampusCTA (Interactive WhatsApp and visit booking)
 */
export default function CampusSection({ data = campusData }: CampusSectionProps) {
  const { header, facts, videoTour, photos, cta } = data;

  return (
    <section
      className={styles.campusSection}
      aria-labelledby="campus-section-title"
      id="explore-campus"
    >
      <div className={styles.container}>
        {/* 1. Section Header: Label + Heading + Subtext (All Center Aligned) */}
        <header className={styles.header}>
          <span className={styles.badge}>{header.badge}</span>
          <h2 id="campus-section-title" className={styles.heading}>
            {header.title}
          </h2>
          <p className={styles.subtext}>{header.subtitle}</p>
        </header>

        {/* 2. Facts Strip: 50+ Seats, WiFi, AC, Free Coffee, Placement */}
        <FactsStrip facts={facts} />

        {/* 3. Video Tour: 16:9 Card, Pulsing Play Button, Stop-on-close modal */}
        <VideoTour videoTour={videoTour} />

        {/* 4. Bento Gallery: 2x2 Hero, 2x1 Wide, Normal photos + Custom Lightbox */}
        <BentoGallery photos={photos} />

        {/* 5. CTA Banner: Purple gradient, Visit Book Karo + WhatsApp Buttons */}
        <CampusCTA cta={cta} />
      </div>
    </section>
  );
}
