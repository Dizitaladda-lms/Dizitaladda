"use client";

import React, { useState } from "react";

/**
 * CourseFaq Component
 * Accessible Accordion:
 * - button with aria-expanded & aria-controls
 * - only one item open at a time
 * - smooth CSS height grid transition
 * - plus/minus toggle icon in a 44x44px tap target
 * - Injects FAQPage JSON-LD schema
 */
export default function CourseFaq({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  // Generate FAQPage JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className="dz-section dz-section-white" id="faq" aria-labelledby="faq-heading">
      {/* Schema.org FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="faq-heading">
            Frequently <span className="dz-gradient-text">Asked Questions</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Find answers to commonly asked questions about course duration, eligibility, placement support, and curriculum.
          </p>
        </div>

        {/* Accessible Accordion List */}
        <div className="dz-faq-list" role="region" aria-label="Course FAQ Accordion">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`dz-faq-item ${isOpen ? "dz-faq-open" : ""}`}
              >
                <button
                  type="button"
                  className="dz-faq-btn"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`dz-faq-panel-${idx}`}
                  id={`dz-faq-header-${idx}`}
                >
                  <span className="dz-faq-question">{faq.q}</span>

                  <div className="dz-faq-icon-box" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`dz-faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`dz-faq-header-${idx}`}
                  className="dz-faq-answer-wrap"
                >
                  <div className="dz-faq-answer-inner">
                    <p className="dz-faq-answer-text">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
