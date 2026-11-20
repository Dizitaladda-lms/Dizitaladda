"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { PLATFORM_RATINGS } from "../data/whatPeopleSayData";
import styles from "./WhatPeopleSaySection.module.css";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
    </svg>
  );
}

function MouthshutLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0f8e3d" />
      <path d="M6 14.5c2 2.5 10 2.5 12 0" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="9.5" r="1.6" fill="#ffffff" />
      <circle cx="16" cy="9.5" r="1.6" fill="#ffffff" />
    </svg>
  );
}

function ShikshaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#f37023" />
      <path d="M12 4L4 8l8 4 8-4-8-4zm-5 7v4.5c0 1.5 2.5 3 5 3s5-1.5 5-3V11l-5 2.5L7 11z" fill="#ffffff" />
    </svg>
  );
}

function TrustpilotLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#00b67a" />
      <path d="M12 4.5l2.4 5.3 5.6.5-4.2 3.8 1.2 5.4-5-2.8-5 2.8 1.2-5.4-4.2-3.8 5.6-.5z" fill="#ffffff" />
      <path d="M14.4 9.8l-2.4-5.3v10.6l5 2.8-1.2-5.4 4.2-3.8z" fill="#005128" opacity="0.35" />
    </svg>
  );
}

function CollegeduniyaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0284c7" />
      <text x="12" y="16.5" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">CD</text>
    </svg>
  );
}

const PLATFORM_ICONS = {
  google: <GoogleLogo />,
  mouthshut: <MouthshutLogo />,
  shiksha: <ShikshaLogo />,
  trustpilot: <TrustpilotLogo />,
  collegeduniya: <CollegeduniyaLogo />,
};

function StarRating({ rating = 5 }) {
  return (
    <div className={styles.starRow} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        let fill = 0;
        if (rating >= starIndex) fill = 100;
        else if (rating > starIndex - 1) fill = Math.round((rating - (starIndex - 1)) * 100);

        return (
          <div key={starIndex} className={styles.starBox}>
            <svg className={styles.starEmpty} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <div className={styles.starFillWrap} style={{ width: `${fill}%` }}>
              <svg className={styles.starFilled} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function WhatPeopleSaySection() {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const avgRating = useMemo(() => {
    const sum = PLATFORM_RATINGS.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / PLATFORM_RATINGS.length).toFixed(1);
  }, []);

  return (
    <section
      className={styles.section}
      id="what-people-say"
      aria-label="What People Say About DizitalAdda"
      ref={sectionRef}
    >
      <div className={`${styles.inner} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.stripHeader}>
          <div className={styles.stripBadge}>
            <span className={styles.stripBadgeDot} /> Rated by students across India
          </div>
          <h2 className={styles.stripTitle}>
            Verified Student Trust &amp; <span className={styles.stripHighlight}>Top Platform Ratings</span>
          </h2>
          <p className={styles.stripSubtext}>
            Average rating <strong>{avgRating}/5</strong> across {PLATFORM_RATINGS.length} leading education platforms
          </p>
        </div>

        <div className={styles.stripGrid} role="list" aria-label="Platform ratings">
          {PLATFORM_RATINGS.map((platform) => (
            <div
              key={platform.id}
              className={styles.ratingCard}
              role="listitem"
              aria-label={`${platform.name}: ${platform.rating} out of 5 stars`}
            >
              <div className={styles.platformLogo} style={{ background: platform.logoBg || "#ffffff" }}>
                {PLATFORM_ICONS[platform.id]}
              </div>
              <h3 className={styles.platformName}>{platform.name}</h3>
              <div className={styles.ratingNumberWrap}>
                <span className={styles.ratingNumber}>{platform.rating}</span>
                <span className={styles.ratingScale}>/5</span>
              </div>
              <StarRating rating={platform.rating} />
              <span className={styles.reviewsCountText}>{platform.reviewsCount}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
