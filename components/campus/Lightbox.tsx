"use client";

import React, { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { CampusPhoto, BLUR_SHIMMER_DATA_URL } from "../../data/campus";
import styles from "./Campus.module.css";

interface LightboxProps {
  photos: CampusPhoto[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  photos,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const isOpen = activeIndex !== null && activeIndex >= 0 && activeIndex < photos.length;
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Navigate next / prev with wrap-around
  const handlePrev = useCallback(() => {
    if (activeIndex === null) return;
    const nextIdx = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    onNavigate(nextIdx);
  }, [activeIndex, onNavigate, photos.length]);

  const handleNext = useCallback(() => {
    if (activeIndex === null) return;
    const nextIdx = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    onNavigate(nextIdx);
  }, [activeIndex, onNavigate, photos.length]);

  // Keyboard navigation: Escape, ArrowLeft, ArrowRight, and Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button initially
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "Tab") {
        // Focus trap inside modal
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Mobile Swipe Gesture Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const deltaX = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDelta = 45; // Minimum px threshold for swipe

    if (deltaX > minSwipeDelta) {
      // Swiped left -> Next photo
      handleNext();
    } else if (deltaX < -minSwipeDelta) {
      // Swiped right -> Previous photo
      handlePrev();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Click outside image to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || activeIndex === null) return null;

  const currentPhoto = photos[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        ref={modalRef}
        className={styles.lightboxOverlay}
        onClick={handleBackdropClick}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo preview: ${currentPhoto.title}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top Control Bar */}
        <div className={styles.lightboxTopBar}>
          <div className={styles.counterBadge} aria-live="polite">
            {activeIndex + 1} / {photos.length}
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className={styles.lightboxCloseBtn}
            onClick={onClose}
            aria-label="Close photo preview (Escape)"
          >
            <X size={22} strokeWidth={2.4} />
          </button>
        </div>

        {/* Viewport with Prev / Image / Next */}
        <div className={styles.lightboxViewport} onClick={handleBackdropClick}>
          {/* Previous Button */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photo (Arrow Left)"
          >
            <ChevronLeft size={28} strokeWidth={2.4} />
          </button>

          {/* Active Image Container with Smooth Animation */}
          <motion.div
            key={currentPhoto.id}
            className={styles.lightboxImageContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={currentPhoto.image}
              alt={currentPhoto.alt}
              fill
              sizes="(max-width: 1024px) 95vw, 1100px"
              style={{ objectFit: "contain" }}
              placeholder="blur"
              blurDataURL={BLUR_SHIMMER_DATA_URL}
              priority
            />
          </motion.div>

          {/* Next Button */}
          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photo (Arrow Right)"
          >
            <ChevronRight size={28} strokeWidth={2.4} />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div className={styles.lightboxBottomBar}>
          <h3 className={styles.lightboxTitle}>{currentPhoto.title}</h3>
          <p className={styles.lightboxCaption}>&ldquo;{currentPhoto.emotionalCaption}&rdquo;</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
