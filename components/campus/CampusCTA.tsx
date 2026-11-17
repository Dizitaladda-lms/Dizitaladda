"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  MapPin,
  User,
  Calendar,
  Sparkles,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Clock,
  Compass,
  LucideIcon,
} from "lucide-react";
import { CampusCTA as CampusCTAType, BLUR_SHIMMER_DATA_URL } from "../../data/campus";
import styles from "./Campus.module.css";

interface CampusCTAProps {
  cta: CampusCTAType;
}

// Icon mapping dictionary for benefits
const benefitIconMap: Record<string, LucideIcon> = {
  MapPin,
  User,
  Calendar,
  Sparkles,
};

export default function CampusCTA({ cta }: CampusCTAProps) {
  const shouldReduceMotion = useReducedMotion();

  // WhatsApp link URL
  const whatsappUrl = `https://wa.me/${cta.whatsappButton.phoneNumber.replace(
    /\D/g,
    ""
  )}?text=${encodeURIComponent(cta.whatsappButton.prefilledMessage)}`;

  return (
    <motion.div
      className={styles.experienceWrapper}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
    >
      {/* ==============================================================
          LEFT COLUMN: English copy matching Reference (IIDE style)
          ============================================================== */}
      <div className={styles.experienceLeft}>
        {cta.eyebrow && (
          <span className={styles.experienceEyebrow}>
            {cta.eyebrow}
          </span>
        )}

        <h2 className={styles.experienceHeading}>
          {cta.heading.prefix}
          <span className={styles.experienceHighlight}>
            {cta.heading.highlight}
          </span>
        </h2>

        {/* 3 Benefit points with icons */}
        <ul className={styles.experienceList} role="list">
          {cta.benefits.map((item) => {
            const IconComponent = benefitIconMap[item.iconName] || Sparkles;
            return (
              <li key={item.id} className={styles.experienceItem}>
                <span className={styles.experienceItemIcon} aria-hidden="true">
                  <IconComponent size={20} strokeWidth={2.2} />
                </span>
                <p className={styles.experienceItemText}>{item.text}</p>
              </li>
            );
          })}
        </ul>

        {/* Action Buttons */}
        <div className={styles.experienceActions}>
          <a
            href={cta.primaryButton.href}
            className={styles.visitBtn}
            aria-label={cta.primaryButton.label}
          >
            <span>{cta.primaryButton.label}</span>
            <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.chatWhatsappBtn}
            aria-label={`${cta.whatsappButton.label} on WhatsApp`}
          >
            <MessageCircle size={18} strokeWidth={2.4} aria-hidden="true" />
            <span>{cta.whatsappButton.label}</span>
          </a>
        </div>
      </div>

      {/* ==============================================================
          RIGHT COLUMN: Gradient Campus Image + Address + View on Map
          ============================================================== */}
      <div className={styles.experienceRight}>
        {/* Campus Image with Gradient Sheen */}
        <div className={styles.campusImageCard}>
          <Image
            src={cta.campusImage.src}
            alt={cta.campusImage.alt}
            fill
            sizes="(max-width: 960px) 100vw, 480px"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={BLUR_SHIMMER_DATA_URL}
          />

          {/* Gradient Overlay */}
          <div className={styles.campusImageGradient} />

          {/* Location Badge */}
          {cta.campusImage.badge && (
            <span className={styles.campusImageBadge}>
              <Compass size={13} strokeWidth={2.4} style={{ display: "inline", marginRight: 5 }} />
              {cta.campusImage.badge}
            </span>
          )}
        </div>

        {/* Address & View on Map Card */}
        <div className={styles.locationCard}>
          <div className={styles.locationHeader}>
            <div className={styles.locationPinBox}>
              <MapPin size={18} strokeWidth={2.4} />
            </div>
            <div>
              <h3 className={styles.locationTitle}>{cta.location.title}</h3>
              {cta.location.landmark && (
                <span className={styles.locationLandmark}>{cta.location.landmark}</span>
              )}
            </div>
          </div>

          <p className={styles.locationAddress}>{cta.location.address}</p>

          {cta.location.timing && (
            <div className={styles.locationMeta}>
              <span className={styles.metaPill}>
                <Clock size={13} strokeWidth={2.2} />
                {cta.location.timing}
              </span>
            </div>
          )}

          {/* View on Google Maps Button */}
          <a
            href={cta.location.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapBtn}
            aria-label={`${cta.location.mapButtonLabel} - Opens in new tab`}
          >
            <span>{cta.location.mapButtonLabel}</span>
            <ExternalLink size={15} strokeWidth={2.4} aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
