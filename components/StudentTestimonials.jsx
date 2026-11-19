"use client";

import React, { useState, useRef, useEffect } from "react";
import PortraitVideoCard from "./PortraitVideoCard";

// Video Testimonials Data with student names, courses, and video IDs
export const videoTestimonials = [
  { id: "KFWyifEYWyU", name: "Abhinav Sharma", course: "Expert in Digital Marketing", videoId: "KFWyifEYWyU" },
  { id: "5Ky9myAg6a8", name: "Shiv Kalra", course: "Advanced Digital Marketing", videoId: "5Ky9myAg6a8" },
  { id: "0Y0wxv9Hrvc", name: "Tulika Biswas", course: "Digital Marketing for Professionals", videoId: "0Y0wxv9Hrvc" },
  { id: "93nJRCQduxg", name: "Sapna Verma", course: "Digital Marketing for Beginners", videoId: "93nJRCQduxg" },
  { id: "EdZT-if9tFU", name: "Archana Devi", course: "AI & Data Science Diploma", videoId: "EdZT-if9tFU" },
  { id: "gu8znBBgSvw", name: "Rohit Kumar", course: "Cyber Security & Ethical Hacking", videoId: "gu8znBBgSvw" },
  { id: "PbKg7zUPGoc", name: "Sanjana Mehra", course: "Advanced Digital Marketing", videoId: "PbKg7zUPGoc" },
  { id: "z4vwrPjR2PA", name: "Mohit Bansal", course: "Digital Marketing for Beginners", videoId: "z4vwrPjR2PA" },
];

export default function StudentTestimonials({
  testimonials = videoTestimonials,
}) {
  const [playingId, setPlayingId] = useState(null);
  const trackRef = useRef(null);

  const handleTogglePlay = (id) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("da-video-play", { detail: { id } }));
      }
    }
  };

  // Sync with global single video playback
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGlobalPlay = (e) => {
      if (e.detail?.id !== playingId) {
        setPlayingId(null);
      }
    };

    window.addEventListener("da-video-play", handleGlobalPlay);
    return () => window.removeEventListener("da-video-play", handleGlobalPlay);
  }, [playingId]);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = 324; // card 300px + gap 24px
    track.scrollBy({ left: cardWidth * direction * 2, behavior: "smooth" });
  };

  return (
    <section className="testimonials-section bg-aurora" id="testimonials" aria-labelledby="testimonials-title">
      <div className="aurora-blob aurora-blob-1"></div>
      <div className="aurora-blob aurora-blob-2"></div>
      <div className="aurora-blob aurora-blob-3"></div>

      <div className="testimonials-inner">
        <div className="testimonials-header">
          <p className="testimonials-eyebrow">Real Stories</p>
          <h2 className="testimonials-title" id="testimonials-title">
            Students <span className="cc-highlight">Testimonials</span>
          </h2>
          <div className="testimonials-underline" aria-hidden="true"></div>
        </div>

        {/* Video Cards Carousel */}
        <div
          className="testimonials-carousel-wrapper"
          ref={trackRef}
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            padding: "8px 4px 20px",
          }}
        >
          <div
            className="testimonials-track"
            style={{
              display: "flex",
              gap: "24px",
              alignItems: "flex-start",
            }}
          >
            {testimonials.map((item) => {
              const cardId = item.id || item.videoId || item.name;
              return (
                <div key={cardId} style={{ flex: "0 0 280px", maxWidth: "300px" }}>
                  <PortraitVideoCard
                    item={item}
                    isPlaying={playingId === cardId}
                    onTogglePlay={() => handleTogglePlay(cardId)}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="testimonials-carousel-controls">
          <button
            className="testimonials-btn"
            aria-label="Previous testimonials"
            type="button"
            onClick={() => scrollTrack(-1)}
          >
            &#8249;
          </button>
          <button
            className="testimonials-btn"
            aria-label="Next testimonials"
            type="button"
            onClick={() => scrollTrack(1)}
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
