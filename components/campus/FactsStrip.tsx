"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  Wifi,
  Snowflake,
  Coffee,
  Briefcase,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import { CampusFact } from "../../data/campus";
import styles from "./Campus.module.css";

interface FactsStripProps {
  facts: CampusFact[];
}

// Icon mapping dictionary
const iconMap: Record<CampusFact["iconName"], LucideIcon> = {
  Users,
  Wifi,
  Snowflake,
  Coffee,
  Briefcase,
  Sparkles,
};

export default function FactsStrip({ facts }: FactsStripProps) {
  const shouldReduceMotion = useReducedMotion();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className={styles.factsContainer} aria-label="Campus key amenities and highlights">
      <motion.ul
        className={styles.factsTrack}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        role="list"
      >
        {facts.map((fact) => {
          const IconComponent = iconMap[fact.iconName] || Sparkles;
          return (
            <motion.li
              key={fact.id}
              className={styles.factPill}
              variants={itemVariants}
            >
              <span className={styles.factIcon} aria-hidden="true">
                <IconComponent size={18} strokeWidth={2.2} />
              </span>
              <span>{fact.label}</span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
