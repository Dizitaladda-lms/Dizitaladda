"use client";

import React, { useState, useEffect } from "react";

/**
 * StickyCtaBar Component (Mobile Only)
 * Appears after user scrolls past the hero section.
 * Automatically hides when either the lead form or footer is in view so it never obstructs them.
 */
export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check scroll position past hero
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 300;
      const hasScrolledPastHero = heroBottom < 0;

      // 2. Check if Lead Form is currently visible
      const leadForm = document.getElementById("dz-lead-form");
      let formInView = false;
      if (leadForm) {
        const rect = leadForm.getBoundingClientRect();
        formInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // 3. Check if Footer is currently visible
      const footer = document.querySelector("footer");
      let footerInView = false;
      if (footer) {
        const rect = footer.getBoundingClientRect();
        footerInView = rect.top < window.innerHeight && rect.bottom > 0;
      }

      // Show only if past hero and NOT overlapping form or footer
      setIsVisible(hasScrolledPastHero && !formInView && !footerInView);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToForm = (e) => {
    e.preventDefault();
    const formEl = document.getElementById("dz-lead-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      const firstInput = formEl.querySelector("input:not([type=hidden])");
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 500);
      }
    }
  };

  return (
    <div
      className={`dz-sticky-bar ${!isVisible ? "dz-sticky-hidden" : ""}`}
      aria-hidden={!isVisible}
      role="region"
      aria-label="Quick contact bar"
    >
      {/* Call Direct */}
      <a
        href="tel:918810606010"
        className="dz-sticky-call-btn"
        aria-label="Call DizitalAdda Counsellor"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        <span>Call Now</span>
      </a>

      {/* Smooth scroll to counselling lead form */}
      <a
        href="#dz-lead-form"
        onClick={handleScrollToForm}
        className="dz-sticky-counsel-btn"
        aria-label="Get Free Counselling"
      >
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          aria-hidden="true"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>Free Counselling</span>
      </a>
    </div>
  );
}
