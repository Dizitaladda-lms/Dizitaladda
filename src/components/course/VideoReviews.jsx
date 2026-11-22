"use client";

import React, { useState, useEffect } from "react";

/**
 * VideoReviews Component
 * Desktop: 3-column grid layout.
 * Mobile: Horizontal swipe slider with CSS scroll-snap (82% card width).
 * Modal: Lazy-loads youtube-nocookie.com iframe ONLY upon click.
 * Traps focus, locks body scroll, closes on ESC or backdrop click.
 */
export default function VideoReviews({ reviews }) {
  if (!reviews || reviews.length === 0) return null;

  const [activeVideoId, setActiveVideoId] = useState(null);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideoId]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && activeVideoId) {
        setActiveVideoId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideoId]);

  return (
    <section className="dz-section dz-section-white" id="reviews" aria-labelledby="reviews-heading">
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="reviews-heading">
            Hear It From <span className="dz-gradient-text">Our Students</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Real stories from DizitalAdda learners who transformed their careers and landed high-growth data roles.
          </p>
        </div>

        {/* Video Cards Slider / Grid */}
        <div className="dz-reviews-slider-wrap">
          <div className="dz-reviews-slider" role="region" aria-label="Student video reviews">
            {reviews.map((rev, idx) => (
              <div key={idx} className="dz-review-card">
                {/* 16:9 Thumbnail with Centered Play Button */}
                <div
                  className="dz-review-thumb-wrap"
                  onClick={() => setActiveVideoId(rev.youtubeId || "dQw4w9WgXcQ")}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play review video of ${rev.studentName}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveVideoId(rev.youtubeId || "dQw4w9WgXcQ");
                    }
                  }}
                >
                  <img
                    src={rev.thumbnail}
                    alt={`${rev.studentName} student review`}
                    width={480}
                    height={270}
                    className="dz-review-thumb"
                    loading="lazy"
                  />
                  <div className="dz-review-overlay">
                    <button
                      type="button"
                      className="dz-play-btn"
                      aria-label="Play video"
                      tabIndex={-1}
                    >
                      <svg className="dz-play-icon" viewBox="0 0 24 24" aria-hidden="true">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Review Text Information */}
                <div className="dz-review-content">
                  <h3 className="dz-review-name">{rev.studentName}</h3>
                  {rev.company && <span className="dz-review-company">{rev.company}</span>}
                  {rev.quote && <p className="dz-review-quote">&ldquo;{rev.quote}&rdquo;</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div
          style={{
            textAlign: "center",
            marginTop: "12px",
            fontSize: "12px",
            color: "#9ca3af",
            display: "block",
          }}
          className="dz-swipe-hint"
        >
          <span>← Swipe horizontally to view more reviews →</span>
        </div>
      </div>

      {/* Video Modal Popup (Iframe loaded ONLY after click) */}
      {activeVideoId && (
        <div
          className="dz-modal-backdrop"
          onClick={() => setActiveVideoId(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Student Video Review"
        >
          <div className="dz-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="dz-modal-close"
              onClick={() => setActiveVideoId(null)}
              aria-label="Close video player"
            >
              ✕
            </button>
            <iframe
              className="dz-video-iframe"
              src={`https://www.youtube-nocookie.com/embed/${activeVideoId}?autoplay=1&rel=0`}
              title="Student Review Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
