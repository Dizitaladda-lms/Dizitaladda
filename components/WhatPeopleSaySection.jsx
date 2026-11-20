"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { PLATFORM_RATINGS, SOCIAL_REVIEWS } from "../data/whatPeopleSayData";
import styles from "./WhatPeopleSaySection.module.css";

/* ==========================================================================
   OFFICIAL PLATFORM SVG LOGOS (40x40 rounded)
   ========================================================================== */

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function MouthshutLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0f8e3d" />
      <path
        d="M6 14.5c2 2.5 10 2.5 12 0"
        stroke="#ffffff"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="8" cy="9.5" r="1.6" fill="#ffffff" />
      <circle cx="16" cy="9.5" r="1.6" fill="#ffffff" />
    </svg>
  );
}

function ShikshaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#f37023" />
      <path
        d="M12 4L4 8l8 4 8-4-8-4zm-5 7v4.5c0 1.5 2.5 3 5 3s5-1.5 5-3V11l-5 2.5L7 11z"
        fill="#ffffff"
      />
    </svg>
  );
}

function TrustpilotLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#00b67a" />
      <path
        d="M12 4.5l2.4 5.3 5.6.5-4.2 3.8 1.2 5.4-5-2.8-5 2.8 1.2-5.4-4.2-3.8 5.6-.5z"
        fill="#ffffff"
      />
      <path
        d="M14.4 9.8l-2.4-5.3v10.6l5 2.8-1.2-5.4 4.2-3.8z"
        fill="#005128"
        opacity="0.35"
      />
    </svg>
  );
}

function CollegeduniyaLogo() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#0284c7" />
      <text
        x="12"
        y="16.5"
        fill="#ffffff"
        fontSize="12"
        fontWeight="900"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        CD
      </text>
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

/* ==========================================================================
   SOCIAL MEDIA PLATFORM BADGE ICONS
   ========================================================================== */

function SocialPlatformBadge({ platform }) {
  switch (platform) {
    case "Google":
      return (
        <span className={styles.platformBadgeMini} style={{ background: "#ffffff" }} title="Google Review">
          <svg viewBox="0 0 24 24" width="12" height="12">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
        </span>
      );
    case "Instagram":
      return (
        <span
          className={styles.platformBadgeMini}
          style={{ background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)" }}
          title="Instagram"
        >
          <svg viewBox="0 0 24 24" width="10" height="10" fill="#ffffff">
            <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1115.2 12 3.2 3.2 0 0112 15.2zM17.3 6.2a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2zM12 3.8c2.7 0 3 0 4.1.1 2.7.1 3.9 1.4 4 4 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.6-1.3 3.9-4 4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-3.9-1.4-4-4-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-2.6 1.3-3.9 4-4C9 3.8 9.3 3.8 12 3.8z"/>
          </svg>
        </span>
      );
    case "Facebook":
      return (
        <span className={styles.platformBadgeMini} style={{ background: "#1877F2" }} title="Facebook">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="#ffffff">
            <path d="M14 8.5V6.8c0-.8.2-1.2 1.3-1.2H17V2.5h-2.5C11.5 2.5 10 4.2 10 6.6v1.9H7.5v3.2H10V21.5h4v-9.8h2.7l.4-3.2z"/>
          </svg>
        </span>
      );
    case "YouTube":
      return (
        <span className={styles.platformBadgeMini} style={{ background: "#FF0000" }} title="YouTube">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="#ffffff">
            <path d="M10 15V9l5.2 3z"/>
          </svg>
        </span>
      );
    case "LinkedIn":
      return (
        <span className={styles.platformBadgeMini} style={{ background: "#0A66C2" }} title="LinkedIn">
          <svg viewBox="0 0 24 24" width="10" height="10" fill="#ffffff">
            <path d="M6.9 8.8H3.6V20h3.3zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.3c0-3-1.6-4.7-3.9-4.7a3.4 3.4 0 00-3 1.6V8.8h-3.2V20h3.3v-6.1c0-1.6.7-2.6 2-2.6s1.7 1 1.7 2.6V20h3.3z"/>
          </svg>
        </span>
      );
    case "X":
      return (
        <span className={styles.platformBadgeMini} style={{ background: "#000000" }} title="X (Twitter)">
          <svg viewBox="0 0 24 24" width="9" height="9" fill="#ffffff">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </span>
      );
    default:
      return null;
  }
}

/* ==========================================================================
   PARTIAL STAR RATING COMPONENT
   4.7 = 4 full stars + 1 star filled 70%
   ========================================================================== */

function StarRating({ rating = 5 }) {
  return (
    <div className={styles.starRow} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        let fill = 0;
        if (rating >= starIndex) {
          fill = 100;
        } else if (rating > starIndex - 1) {
          fill = Math.round((rating - (starIndex - 1)) * 100);
        }
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

/* ==========================================================================
   MAIN COMPONENT
   ========================================================================== */

export default function WhatPeopleSaySection() {
  const [activeTab, setActiveTab] = useState("All");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'carousel'
  const [visibleCount, setVisibleCount] = useState(6);
  const [expandedCards, setExpandedCards] = useState({});
  const [activeVideo, setActiveVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Scroll reveal with IntersectionObserver
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate overall average rating from the config
  const avgRating = useMemo(() => {
    const sum = PLATFORM_RATINGS.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / PLATFORM_RATINGS.length).toFixed(1);
  }, []);

  // Filter reviews based on active tab
  const filteredReviews = useMemo(() => {
    if (activeTab === "All") return SOCIAL_REVIEWS;
    return SOCIAL_REVIEWS.filter(
      (item) => item.platform.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const displayedReviews = useMemo(() => {
    return filteredReviews.slice(0, visibleCount);
  }, [filteredReviews, visibleCount]);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(6);
  };

  const tabs = ["All", "Google", "Instagram", "Facebook", "YouTube", "LinkedIn", "X"];

  return (
    <section
      className={styles.section}
      id="what-people-say"
      aria-label="What People Say About DizitalAdda"
      ref={sectionRef}
    >
      <div className={`${styles.inner} ${isVisible ? styles.visible : ""}`}>

        {/* ==================================================================
            PART A: PLATFORM RATINGS STRIP
            ================================================================== */}
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

        {/* 5 Clickable Platform Cards */}
        <div className={styles.stripGrid} role="list" aria-label="Platform ratings">
          {PLATFORM_RATINGS.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ratingCard}
              role="listitem"
              aria-label={`View DizitalAdda on ${platform.name}: ${platform.rating} out of 5 stars`}
            >
              <div
                className={styles.platformLogo}
                style={{ background: platform.logoBg || "#ffffff" }}
              >
                {PLATFORM_ICONS[platform.id]}
              </div>

              <h3 className={styles.platformName}>{platform.name}</h3>

              <div className={styles.ratingNumberWrap}>
                <span className={styles.ratingNumber}>{platform.rating}</span>
                <span className={styles.ratingScale}>/5</span>
              </div>

              {/* Gold Stars with decimal-based fractional fill */}
              <StarRating rating={platform.rating} />

              <span className={styles.reviewsCountText}>{platform.reviewsCount}</span>
            </a>
          ))}
        </div>

        {/* ==================================================================
            PART B: SOCIAL MEDIA REVIEWS WALL
            ================================================================== */}
        <div className={styles.wallSection}>
          <div className={styles.wallHeader}>
            <h2 className={styles.wallTitle}>Real Voices from Social Media</h2>
            <p className={styles.wallSubtext}>
              See what students and parents are saying about DizitalAdda across platforms.
            </p>
          </div>

          {/* Controls Bar: Filter Tabs & View Mode Toggle */}
          <div className={styles.controlsBar}>
            <div className={styles.filterTabs} role="tablist" aria-label="Review platform filters">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tabBtn} ${activeTab === tab ? styles.active : ""}`}
                  onClick={() => handleTabChange(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className={styles.viewModeToggle} role="group" aria-label="Layout view mode">
              <button
                type="button"
                className={`${styles.toggleBtn} ${viewMode === "grid" ? styles.toggleActive : ""}`}
                onClick={() => setViewMode("grid")}
                aria-pressed={viewMode === "grid"}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z" />
                </svg>
                Grid View
              </button>
              <button
                type="button"
                className={`${styles.toggleBtn} ${viewMode === "carousel" ? styles.toggleActive : ""}`}
                onClick={() => setViewMode("carousel")}
                aria-pressed={viewMode === "carousel"}
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
                </svg>
                Auto-Scroll
              </button>
            </div>
          </div>

          {/* MODE 1: 3-Column Masonry/Card Grid */}
          {viewMode === "grid" && (
            <>
              <div className={styles.reviewsGrid} role="feed" aria-label="Social media reviews">
                {displayedReviews.map((item) => {
                  const isExpanded = expandedCards[item.id];
                  const isVideo = item.type === "video";

                  return (
                    <article
                      key={item.id}
                      className={`${styles.reviewCard} ${isVideo ? styles.videoCard : ""}`}
                    >
                      {/* Card Header: Avatar, Name, Platform Badge */}
                      <div className={styles.cardHeader}>
                        <div className={styles.avatarWrap}>
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className={styles.avatarImg}
                            loading="lazy"
                          />
                          <SocialPlatformBadge platform={item.platform} />
                        </div>
                        <div className={styles.authorMeta}>
                          <h4 className={styles.authorName}>
                            {item.name}
                            {item.verified && (
                              <svg className={styles.verifiedCheck} viewBox="0 0 24 24" title="Verified Learner">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            )}
                          </h4>
                          <p className={styles.authorRole}>{item.role}</p>
                        </div>
                      </div>

                      {/* Video / Reel Thumbnail Variant (Instagram/YouTube) */}
                      {isVideo && (
                        <div
                          className={styles.videoThumbnailWrap}
                          onClick={() => setActiveVideo(item)}
                          role="button"
                          tabIndex={0}
                          aria-label={`Play ${item.platform} video review by ${item.name}`}
                          onKeyDown={(e) => e.key === "Enter" && setActiveVideo(item)}
                        >
                          <img
                            src={item.videoThumbnail}
                            alt={`${item.name} video thumbnail`}
                            className={styles.videoThumbImg}
                            loading="lazy"
                          />
                          <div className={styles.videoPlayOverlay}>
                            <div className={styles.playBtnCircle}>
                              <svg viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                          {item.duration && (
                            <span className={styles.videoDurationBadge}>
                              {item.platform === "Instagram" ? "Reel" : "Video"} · {item.duration}
                            </span>
                          )}
                        </div>
                      )}

                      {/* Stars & Date */}
                      <div className={styles.cardRatingRow}>
                        {item.rating ? (
                          <StarRating rating={item.rating} />
                        ) : (
                          <span style={{ fontSize: "12px", color: "#6d28d9", fontWeight: 700 }}>
                            {item.platform} Reel Story
                          </span>
                        )}
                        <span className={styles.reviewDate}>{item.date}</span>
                      </div>

                      {/* Review Text with Max 4 lines + Read More */}
                      <p className={`${styles.reviewText} ${!isExpanded ? styles.clamped : ""}`}>
                        &ldquo;{item.text}&rdquo;
                      </p>

                      {item.text.length > 120 && (
                        <button
                          type="button"
                          className={styles.readMoreBtn}
                          onClick={() => toggleExpand(item.id)}
                        >
                          {isExpanded ? "Read less" : "Read more..."}
                        </button>
                      )}

                      {/* Footer: View on Platform link */}
                      <div className={styles.cardFooter}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.platformLink}
                        >
                          View on {item.platform}
                          <svg viewBox="0 0 24 24">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredReviews.length && (
                <div className={styles.loadMoreWrap}>
                  <button
                    type="button"
                    className={styles.loadMoreBtn}
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                  >
                    Load More Reviews ({filteredReviews.length - visibleCount} more)
                    <svg viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </>
          )}

          {/* MODE 2: Auto-Scrolling Marquee Track (Continuous scroll, pauses on hover) */}
          {viewMode === "carousel" && (
            <div className={styles.carouselWrap} aria-label="Auto-scrolling reviews track">
              <div className={styles.carouselTrack}>
                {/* Duplicate items for continuous infinite loop */}
                {[...filteredReviews, ...filteredReviews].map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className={styles.carouselCard}>
                    <article className={styles.reviewCard}>
                      <div className={styles.cardHeader}>
                        <div className={styles.avatarWrap}>
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className={styles.avatarImg}
                            loading="lazy"
                          />
                          <SocialPlatformBadge platform={item.platform} />
                        </div>
                        <div className={styles.authorMeta}>
                          <h4 className={styles.authorName}>{item.name}</h4>
                          <p className={styles.authorRole}>{item.role}</p>
                        </div>
                      </div>
                      <div className={styles.cardRatingRow}>
                        {item.rating ? (
                          <StarRating rating={item.rating} />
                        ) : (
                          <span style={{ fontSize: "12px", color: "#6d28d9", fontWeight: 700 }}>
                            {item.platform}
                          </span>
                        )}
                        <span className={styles.reviewDate}>{item.date}</span>
                      </div>
                      <p className={styles.reviewText}>&ldquo;{item.text}&rdquo;</p>
                      <div className={styles.cardFooter}>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.platformLink}
                        >
                          View on {item.platform} &rarr;
                        </a>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ==================================================================
              SECTION BOTTOM CTA
              ================================================================== */}
          <div className={styles.bottomCtaBox}>
            <div className={styles.ctaTextWrap}>
              <h3>Join 10,000+ Students Who Trust Us</h3>
              <p>
                Get 1-on-1 career counselling, portfolio review, and step-by-step guidance
                from senior industry trainers before you enrol.
              </p>
            </div>
            <a href="#bookDemo" className={styles.ctaActionBtn}>
              <svg viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
              </svg>
              Book Free Counselling
            </a>
          </div>

        </div>

      </div>

      {/* ==================================================================
          VIDEO / REEL MODAL DIALOG
          ================================================================== */}
      {activeVideo && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.name} video testimonial`}
        >
          <div className={styles.modalDialog}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video modal"
            >
              ×
            </button>
            <div className={styles.modalVideoWrap}>
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={`${activeVideo.name} video review`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.modalFooter}>
              <h4>{activeVideo.name} &middot; {activeVideo.role}</h4>
              <a
                href={activeVideo.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch on {activeVideo.platform} &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
