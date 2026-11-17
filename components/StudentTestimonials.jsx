"use client";

import React, { useState, useRef } from "react";

const videoTestimonials = [
  { id: "KFWyifEYWyU", title: "Student Testimonial 1" },
  { id: "5Ky9myAg6a8", title: "Student Testimonial 2" },
  { id: "0Y0wxv9Hrvc", title: "Student Testimonial 3" },
  { id: "93nJRCQduxg", title: "Student Testimonial 4" },
  { id: "EdZT-if9tFU", title: "Student Testimonial 5" },
  { id: "gu8znBBgSvw", title: "Student Testimonial 6" },
  { id: "PbKg7zUPGoc", title: "Student Testimonial 7" },
  { id: "z4vwrPjR2PA", title: "Student Testimonial 8" },
];

export default function StudentTestimonials() {
  const [playingId, setPlayingId] = useState(null);
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".testimonial-card");
    const cardWidth = card ? card.offsetWidth + 20 : 280;
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
          }}
        >
          <div className="testimonials-track" style={{ display: "flex", gap: "20px" }}>
            {videoTestimonials.map((item) => {
              const isPlaying = playingId === item.id;
              return (
                <div className="testimonial-card" key={item.id}>
                  <div className={`testimonial-video-wrap ${isPlaying ? "is-playing" : ""}`}>
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ width: "100%", height: "100%", border: "none" }}
                      />
                    ) : (
                      <>
                        <img
                          src={`https://i.ytimg.com/vi/${item.id}/oar2.jpg`}
                          alt={`DizitalAdda ${item.title}`}
                          loading="lazy"
                          decoding="async"
                          width="1080"
                          height="1920"
                          onError={(e) => {
                            e.currentTarget.src = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;
                          }}
                        />
                        <button
                          className="yt-play"
                          type="button"
                          aria-label={`Play ${item.title}`}
                          onClick={() => setPlayingId(item.id)}
                        />
                      </>
                    )}
                  </div>
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
