"use client";

import React, { useState, useEffect, useMemo } from "react";
import StudentReviewsHeader from "./StudentReviewsHeader";
import PortraitVideoCard from "./PortraitVideoCard";
import { studentVideoReviewsData } from "./StudentVideoReviews";
import { studentReviewsData } from "../data/studentReviews";
import styles from "./StudentReviews.module.css";

/**
 * ============================================================================
 * RESTRUCTURED STUDENT REVIEWS SECTION
 * Order from top to bottom:
 *   1. Section heading, subtext and rating line (StudentReviewsHeader)
 *   2. Student VIDEO reviews block (Moved UP, single video playback)
 *   3. Text/comment reviews block (Moved DOWN, continuous 100vw marquee)
 * ============================================================================
 */
export default function StudentReviews({
  videoData = studentVideoReviewsData,
  reviewsData = studentReviewsData,
}) {
  // 1. Single video playback state: ensures only one video plays at a time
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleTogglePlay = (id) => {
    if (activeVideoId === id) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(id);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("da-video-play", { detail: { id } }));
      }
    }
  };

  // Sync with global single video playback across sections
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGlobalPlay = (e) => {
      if (e.detail?.id !== activeVideoId) {
        setActiveVideoId(null);
      }
    };

    window.addEventListener("da-video-play", handleGlobalPlay);
    return () => window.removeEventListener("da-video-play", handleGlobalPlay);
  }, [activeVideoId]);

  // Duplicate the reviews dataset once for a seamless, gap-free marquee loop
  const duplicatedReviews = useMemo(() => {
    return [...reviewsData, ...reviewsData];
  }, [reviewsData]);

  return (
    <section
      className={styles.reviewsSection}
      id="student-reviews"
      aria-labelledby="student-reviews-title"
    >
      <div className={styles.container}>
        {/* ==================================================================
            1. SECTION HEADING, SUBTEXT AND RATING LINE (UNCHANGED)
            ================================================================== */}
        <div className={styles.headerWrapper}>
          <StudentReviewsHeader />
        </div>

        {/* ==================================================================
            2. STUDENT VIDEO REVIEWS BLOCK (MOVED UP)
            - Keep existing video cards, thumbnails and play behaviour
            - Inside page container with 48px spacing below
            - Only one video plays at a time
            ================================================================== */}
        <div className={styles.videoBlock} role="region" aria-label="Student video testimonials">
          <div className={styles.videoGrid} role="list">
            {videoData.map((student) => {
              const cardId = student.id || student.videoId || student.name;
              return (
                <PortraitVideoCard
                  key={cardId}
                  item={student}
                  isPlaying={activeVideoId === cardId}
                  onTogglePlay={() => handleTogglePlay(cardId)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ==================================================================
          3. COMMENT CARDS BLOCK (MOVED DOWN) - CONTINUOUS AUTO-SCROLL MARQUEE
          - Full-width, edge-to-edge layout (100vw, breaking out of container)
          - Infinite auto-scroll moving right-to-left at smooth constant speed
          - Duplicated card set for seamless loop
          - Pure CSS animation with hover/focus/touch pause
          - Navigation arrows completely removed
          ================================================================== */}
      <div
        className={styles.marqueeWrapper}
        role="region"
        aria-label="Student reviews marquee"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className={styles.marqueeTrack}
          style={{ animationPlayState: isPaused ? "paused" : undefined }}
        >
          {duplicatedReviews.map((review, index) => {
            const uniqueKey = `review-${review.id || index}-${index}`;
            const initials = review.name
              ? review.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()
              : "S";

            return (
              <article
                className={styles.reviewCard}
                key={uniqueKey}
                tabIndex={0}
                aria-label={`Review by ${review.name}`}
              >
                <div>
                  <div
                    className={styles.reviewStars}
                    aria-label={`${review.rating || 5} out of 5 stars`}
                  >
                    {"★".repeat(review.rating || 5)}
                  </div>
                  <p className={styles.reviewText}>
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className={styles.reviewAuthor}>
                  <div className={styles.reviewAvatar}>
                    {review.avatar ? (
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <span>{initials}</span>
                    )}
                  </div>
                  <div className={styles.reviewAuthorInfo}>
                    <strong className={styles.reviewAuthorName}>
                      {review.name}
                    </strong>
                    <span className={styles.reviewAuthorCourse}>
                      {review.course}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
