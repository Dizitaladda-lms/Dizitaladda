"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import { CampusPhoto, BLUR_SHIMMER_DATA_URL } from "../../data/campus";
import Lightbox from "./Lightbox";
import styles from "./Campus.module.css";

interface BentoGalleryProps {
  photos: CampusPhoto[];
}

export default function BentoGallery({ photos }: BentoGalleryProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Container stagger animation
  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  // Card slide-up & fade animation
  const cardVariants = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Compute CSS class for grid layout span
  const getSpanClass = (span: CampusPhoto["span"]) => {
    switch (span) {
      case "hero":
        return styles.spanHero;
      case "wide":
        return styles.spanWide;
      default:
        return styles.spanNormal;
    }
  };

  // Optimize next/image `sizes` attribute based on grid span
  const getSizes = (span: CampusPhoto["span"]) => {
    if (span === "hero") {
      return "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw";
    }
    if (span === "wide") {
      return "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw";
    }
    return "(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw";
  };

  return (
    <>
      <motion.div
        className={styles.bentoGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        role="region"
        aria-label="Campus Photo Bento Grid Gallery"
      >
        {photos.map((photo, index) => {
          const spanClass = getSpanClass(photo.span);
          const sizes = getSizes(photo.span);

          return (
            <motion.div
              key={photo.id}
              className={`${styles.bentoCard} ${spanClass}`}
              variants={cardVariants}
              onClick={() => setActivePhotoIndex(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActivePhotoIndex(index);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View full photo: ${photo.title}. ${photo.emotionalCaption}`}
            >
              {/* Background Image Container */}
              <div className={styles.imageWrapper}>
                <Image
                  src={photo.image}
                  alt={photo.alt}
                  fill
                  sizes={sizes}
                  className={styles.imageElement}
                  placeholder="blur"
                  blurDataURL={BLUR_SHIMMER_DATA_URL}
                  priority={Boolean(photo.priority)}
                />
              </div>

              {/* Dark Gradient Overlay for emotional readability */}
              <div className={styles.cardGradient} />

              {/* Expand Icon Badge (top right) */}
              <span className={styles.expandBadge} aria-hidden="true">
                <Maximize2 size={16} strokeWidth={2.4} />
              </span>

              {/* Inside Bottom Emotional Caption */}
              <div className={styles.captionArea}>
                <h3 className={styles.cardTitle}>{photo.title}</h3>
                <p className={styles.cardCaption}>&ldquo;{photo.emotionalCaption}&rdquo;</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Accessible Full-screen Lightbox Modal */}
      <Lightbox
        photos={photos}
        activeIndex={activePhotoIndex}
        onClose={() => setActivePhotoIndex(null)}
        onNavigate={(newIdx) => setActivePhotoIndex(newIdx)}
      />
    </>
  );
}
