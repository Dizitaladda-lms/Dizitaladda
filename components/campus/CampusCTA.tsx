"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
} from "lucide-react";
import { CampusCTA as CampusCTAType } from "../../data/campus";
import styles from "./Campus.module.css";

interface CampusCTAProps {
  cta: CampusCTAType;
}

export default function CampusCTA({ cta }: CampusCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={styles.campusBanner}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div className={styles.campusBannerOverlay} />
      <div className={styles.campusBannerContent}>
        <h2 className={styles.campusBannerTitle}>
          Visit Our Campus
        </h2>
        <p className={styles.campusBannerText}>
          Experience our campus, meet students, and discover why DizitalAdda is the perfect place for your journey.
        </p>
        <a
          href={cta.primaryButton.href}
          className={styles.campusBannerButton}
          aria-label={cta.primaryButton.label}
        >
          <span>Schedule Campus Tour</span>
          <ArrowRight size={18} strokeWidth={2.4} aria-hidden="true" />
        </a>
      </div>
    </motion.div>
  );
}
