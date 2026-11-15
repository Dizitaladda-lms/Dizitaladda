"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import { CampusVideoTour, BLUR_SHIMMER_DATA_URL } from "../../data/campus";
import styles from "./Campus.module.css";

interface VideoTourProps {
  videoTour: CampusVideoTour;
}

export default function VideoTour({ videoTour }: VideoTourProps) {
  const [isOpen, setIsOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);
  const cardTriggerRef = useRef<HTMLDivElement>(null);

  // Handle ESC key and focus trapping for the video modal
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto-focus close button
    modalCloseBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      // Return focus to triggering card
      cardTriggerRef.current?.focus();
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const isDirectVideo =
    videoTour.videoUrl.endsWith(".mp4") || videoTour.videoUrl.endsWith(".webm");

  return (
    <div className={styles.videoCardWrapper}>
      <motion.div
        ref={cardTriggerRef}
        role="button"
        tabIndex={0}
        aria-label={`Watch ${videoTour.badgeText}`}
        className={styles.videoCard}
        onClick={() => setIsOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Poster Image */}
        <div className={styles.videoCardPoster}>
          <Image
            src={videoTour.posterImage}
            alt="DizitalAdda Campus Tour Video Poster"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 980px"
            placeholder="blur"
            blurDataURL={BLUR_SHIMMER_DATA_URL}
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Video Overlay with Pulsing Play Button */}
        <div className={styles.videoOverlay}>
          <div className={styles.playButtonCore}>
            {!shouldReduceMotion && (
              <>
                <span className={styles.playPulseRing} aria-hidden="true" />
                <span className={styles.playPulseRingOuter} aria-hidden="true" />
              </>
            )}
            <Play size={30} fill="#ffffff" strokeWidth={1} style={{ marginLeft: 3 }} />
          </div>

          <span className={styles.playButtonLabel}>
            {videoTour.badgeText}
          </span>
        </div>

        {/* Duration badge */}
        {videoTour.durationLabel && (
          <span className={styles.durationBadge} aria-label={`Duration: ${videoTour.durationLabel}`}>
            {videoTour.durationLabel}
          </span>
        )}
      </motion.div>

      {/* Video Modal (Unmounts on close to completely stop playback) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modalBackdrop}
            role="dialog"
            aria-modal="true"
            aria-label="Campus Virtual Video Tour"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) handleClose();
            }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                ref={modalCloseBtnRef}
                type="button"
                className={styles.modalCloseBtn}
                onClick={handleClose}
                aria-label="Close video tour (Escape)"
              >
                <X size={22} strokeWidth={2.4} />
              </button>

              <div className={styles.videoIframeWrapper}>
                {isDirectVideo ? (
                  <video
                    src={videoTour.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className={styles.modalVideoPlayer}
                  >
                    Your browser does not support HTML5 video.
                  </video>
                ) : (
                  <iframe
                    src={videoTour.videoUrl}
                    title="DizitalAdda Virtual Campus Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
