"use client";

import React, { useRef } from "react";
import { studentReviewsData } from "../data/studentReviews";

export default function StudentReviews() {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const scrollReviews = (direction) => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const card = wrapper.querySelector(".review-card");
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    wrapper.scrollBy({ left: cardWidth * direction, behavior: "smooth" });
  };

  return (
    <section className="reviews-section bg-mesh" id="student-reviews" aria-labelledby="student-reviews-title">
      <div className="reviews-inner">
        <div className="reviews-header">
          <p className="reviews-eyebrow">What Students Say</p>
          <h2 className="reviews-title" id="student-reviews-title">
            Student <span className="cc-highlight">Reviews</span>
          </h2>
          <div className="reviews-underline" aria-hidden="true"></div>
        </div>

        <div className="reviews-carousel-outer">
          <button
            className="reviews-btn reviews-btn-prev"
            onClick={() => scrollReviews(-1)}
            aria-label="Previous student reviews"
            type="button"
          >
            &#8249;
          </button>

          <div
            className="reviews-carousel-wrapper"
            ref={wrapperRef}
            style={{
              overflowX: "auto",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="reviews-track" ref={trackRef}>
              {studentReviewsData.map((review) => (
                <div className="review-card" key={review.id}>
                  <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>
                    {"★".repeat(review.rating)}
                  </div>
                  <p className="review-text">&ldquo;{review.text}&rdquo;</p>
                  <div className="review-author">
                    <div className="review-avatar">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    </div>
                    <div className="review-author-info">
                      <strong>{review.name}</strong>
                      <span>{review.course}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="reviews-btn reviews-btn-next"
            onClick={() => scrollReviews(1)}
            aria-label="Next student reviews"
            type="button"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
