"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CalendarCheck, ShieldCheck, MessageCircle } from "lucide-react";
import { CampusCTA as CampusCTAType } from "../../data/campus";
import styles from "./Campus.module.css";

interface CampusCTAProps {
  cta: CampusCTAType;
}

export default function CampusCTA({ cta }: CampusCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  // Clean WhatsApp URL generation
  const whatsappUrl = `https://wa.me/${cta.whatsappButton.phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(cta.whatsappButton.prefilledMessage)}`;

  return (
    <motion.div
      className={styles.ctaBanner}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.ctaGlow} aria-hidden="true" />

      <div className={styles.ctaContent}>
        <h2 className={styles.ctaHeading}>{cta.heading}</h2>

        {cta.subtext && <p className={styles.ctaSubtext}>{cta.subtext}</p>}

        <div className={styles.ctaButtons}>
          {/* Primary Action Button */}
          <a
            href={cta.primaryButton.href}
            className={styles.primaryBtn}
            aria-label={cta.primaryButton.label}
          >
            <CalendarCheck size={19} strokeWidth={2.4} aria-hidden="true" />
            <span>{cta.primaryButton.label}</span>
          </a>

          {/* WhatsApp Direct Action Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappBtn}
            aria-label={`${cta.whatsappButton.label} on WhatsApp`}
          >
            <MessageCircle size={19} strokeWidth={2.4} aria-hidden="true" />
            <span>{cta.whatsappButton.label}</span>
          </a>
        </div>

        {/* Reassurance Footnote */}
        {cta.trustBadge && (
          <div className={styles.trustFootnote}>
            <ShieldCheck size={16} strokeWidth={2.2} aria-hidden="true" />
            <span>{cta.trustBadge}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
