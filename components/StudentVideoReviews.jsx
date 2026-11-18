"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./StudentVideoReviews.module.css";

// Editable Student Video Reviews Data Array
export const studentVideoReviewsData = [
  {
    name: "Abhinav Sharma",
    course: "Advanced Digital Marketing",
    quote: "Working on live client campaigns gave me genuine agency experience. The hands-on faculty mentorship made all the difference.",
    result: "Placed at a top agency",
    videoId: "KFWyifEYWyU",
    duration: "0:45",
  },
  {
    name: "Shiv Kalra",
    course: "Expert Digital Marketing",
    quote: "I started with zero marketing knowledge. Today, I confidently manage and scale six-figure monthly advertising budgets for growth brands.",
    result: "Performance Marketer @ D2C Brand",
    videoId: "5Ky9myAg6a8",
    duration: "1:10",
  },
  {
    name: "Tulika Biswas",
    course: "Digital Marketing for Professionals",
    quote: "As a working professional, the weekend batches and prompt 1-on-1 doubt clearing enabled a seamless career transition without interrupting my job.",
    result: "Promoted to Sr. Growth Specialist",
    videoId: "0Y0wxv9Hrvc",
    duration: "0:55",
  },
  {
    name: "Sapna Verma",
    course: "Advanced Digital Marketing",
    quote: "The personalized portfolio reviews and practical case studies helped me land high-paying international freelance marketing contracts.",
    result: "Full-time Freelance Marketer",
    videoId: "93nJRCQduxg",
    duration: "1:20",
  },
];

export default function StudentVideoReviews({
  data = studentVideoReviewsData,
}) {
  // Only one video plays at a time; holds current playing videoId
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handlePlay = (videoId) => {
    setActiveVideoId(videoId);
  };

  return (
    <section
      className={styles.section}
      aria-labelledby="student-reviews-heading"
      id="student-video-reviews"
    >
      <div className={styles.container}>
        {/* ==============================================================
            SECTION HEADER
            ============================================================== */}
        <div className={styles.header}>
          {/* Left: Heading + Subtext */}
          <SectionHeader
            align="left"
            id="student-reviews-heading"
            label="Video Testimonials"
            title="In Our Students' Own Words"
            description="Real stories from graduates who accelerated their careers and achieved measurable success with DizitalAdda."
            className={styles.headerLeft}
          />

          {/* Right: Stats (4.9 Rating & 1,200+ Placed) */}
          <div className={styles.headerRight}>
            <div className={styles.statItem}>
              <div className={styles.statRow}>
                <span className={styles.statValue}>4.9</span>
                <span className={styles.stars} aria-label="5 out of 5 stars">
                  ★★★★★
                </span>
              </div>
              <span className={styles.statLabel}>Course Rating</span>
            </div>

            <div className={styles.statDivider} aria-hidden="true" />

            <div className={styles.statItem}>
              <span className={styles.statValue}>1,200+</span>
              <span className={styles.statLabel}>Placed students</span>
            </div>
          </div>
        </div>

        {/* ==============================================================
            CARDS GRID (4 Desktop, 2 Tablet, 1 Swipe Carousel Mobile)
            ============================================================== */}
        <div className={styles.cardsGrid} role="list">
          {data.map((student) => {
            const isPlaying = activeVideoId === student.videoId;

            return (
              <article
                key={student.videoId}
                className={styles.card}
                role="listitem"
              >
                {/* Vertical Video Area (9:14 Aspect Ratio) */}
                <div
                  className={styles.videoWrap}
                  onClick={() => !isPlaying && handlePlay(student.videoId)}
                  onKeyDown={(e) => {
                    if ((e.key === "Enter" || e.key === " ") && !isPlaying) {
                      e.preventDefault();
                      handlePlay(student.videoId);
                    }
                  }}
                  tabIndex={isPlaying ? -1 : 0}
                  role="button"
                  aria-label={
                    isPlaying
                      ? `Now playing story of ${student.name}`
                      : `Watch video story of ${student.name}`
                  }
                >
                  {isPlaying ? (
                    <div className={styles.iframeWrapper}>
                      <iframe
                        className={styles.videoIframe}
                        src={`https://www.youtube.com/embed/${student.videoId}?autoplay=1&modestbranding=1&rel=0&playsinline=1&controls=1`}
                        title={`Student Story - ${student.name}`}
                        loading="lazy"
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <>
                      {/* Top-left glass pill */}
                      <span className={styles.glassPill}>Student review</span>

                      {/* Poster thumbnail */}
                      <img
                        className={styles.videoThumbnail}
                        src={`https://img.youtube.com/vi/${student.videoId}/maxresdefault.jpg`}
                        alt={`DizitalAdda student ${student.name}`}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          // Fallback to high-quality thumbnail if maxres is not available
                          const target = e.currentTarget;
                          if (!target.src.includes("hqdefault.jpg")) {
                            target.src = `https://img.youtube.com/vi/${student.videoId}/hqdefault.jpg`;
                          }
                        }}
                      />

                      {/* Bottom glass bar with custom play button */}
                      <div className={styles.glassBar} aria-hidden="true">
                        <div className={styles.glassBarLeft}>
                          <div className={styles.playCircle}>
                            <div className={styles.playTriangle} />
                          </div>
                          <span className={styles.watchLabel}>Watch story</span>
                        </div>
                        <span className={styles.videoDuration}>
                          {student.duration}
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Below Video Card Body */}
                <div className={styles.cardBody}>
                  <div className={styles.nameRow}>
                    <h3 className={styles.studentName}>{student.name}</h3>
                    <span className={styles.cardStars} aria-label="5 stars">
                      ★★★★★
                    </span>
                  </div>

                  <p className={styles.courseName}>{student.course}</p>

                  <p className={styles.quote}>
                    &ldquo;{student.quote}&rdquo;
                  </p>

                  <div className={styles.resultBadge}>
                    <span className={styles.greenDot} aria-hidden="true" />
                    <span>{student.result}</span>
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
