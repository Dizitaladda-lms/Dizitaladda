"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

// Slide sources: primary high-res hero images with existing campus fallbacks
const slides = [
  {
    src: "/images/hero/slide-1.jpg",
    fallback: "/images/campus/campus1.jpg",
    alt: "DizitalAdda students learning digital marketing",
  },
  {
    src: "/images/hero/slide-2.jpg",
    fallback: "/images/campus/campus3.jpg",
    alt: "DizitalAdda AI and data science classroom",
  },
  {
    src: "/images/hero/slide-3.jpg",
    fallback: "/images/campus/reception.jpg",
    alt: "DizitalAdda cyber security practical session",
  },
  {
    src: "/images/hero/slide-4.jpg",
    fallback: "/images/campus/campus2.jpg",
    alt: "DizitalAdda expert trainer conducting a live project",
  },
];

export default function Hero() {
  // 3rd slide (index 2) active by default as specified in design
  const [activeSlide, setActiveSlide] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".site-nav");
      if (nav) {
        const rect = nav.getBoundingClientRect();
        if (rect.height > 0) {
          document.documentElement.style.setProperty("--site-nav-h", `${Math.round(rect.height)}px`);
        }
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const handleImageError = (event, fallbackSrc) => {
    if (fallbackSrc && !event.currentTarget.dataset.triedFallback) {
      event.currentTarget.dataset.triedFallback = "true";
      event.currentTarget.src = fallbackSrc;
    } else {
      event.currentTarget.style.display = "none";
    }
  };

  return (
    <section id="dizitaladda-home-hero" className="dz-hero">
      {/* 1. Left Side: Text Content (~52% width) */}
      <div className="dz-hero-text-col">
        <div className="dz-hero-content">
          <h1 className="dz-title">
            India&apos;s Best{" "}
            <span className="dz-highlight">Digital Marketing Institute</span>{" "}
            |{" "}
            <span className="dz-highlight">AI, Data Science &amp; Cyber Security</span>{" "}
            Courses
          </h1>

          <p className="dz-description">
            Live projects, real campaigns and expert mentors at DizitalAdda. Build career-focused, job-ready skills that get you hired or help you grow your own business.
          </p>

          <div className="dz-hero-actions">
            <a className="dz-button dz-button-primary" href="#bookDemo">
              Book Free Demo Class
            </a>
            <a
              className="dz-button dz-button-secondary"
              href="/assets/pdfs/Digital-Marketing-Course-for-Professionals.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Download Brochure
            </a>
          </div>

          <div className="dz-hero-stats" aria-label="DizitalAdda at a glance">
            <div className="dz-stat">
              <strong className="dz-stat-number">25000+</strong>
              <span className="dz-stat-label">Students trained</span>
            </div>
            <div className="dz-stat">
              <strong className="dz-stat-number">20+</strong>
              <span className="dz-stat-label">Courses</span>
            </div>
            <div className="dz-stat">
              <strong className="dz-stat-number">100%</strong>
              <span className="dz-stat-label">Practical learning</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right Side: Image with Seamless Double Gradient Melt (~62% width) */}
      <div
        className="dz-hero-image-col"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="DizitalAdda campus carousel"
      >
        <div className="dz-image-container">
          {slides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`dz-hero-image${index === activeSlide ? " dz-active" : ""}`}
              onError={(event) => handleImageError(event, slide.fallback)}
            />
          ))}

          {/* Carousel dots: 4 dots, 3rd active pill */}
          <div className="dz-carousel-dots" aria-label="Choose hero slide">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => setActiveSlide(index)}
                className={`dz-carousel-dot${index === activeSlide ? " dz-active" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. Floating Quick Contact Stack on Right Edge */}
      <div className="dz-floating-stack" aria-label="Quick contact links">
        <a
          href="https://wa.me/918810606010?text=Hi%20DizitalAdda%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
          target="_blank"
          rel="noopener noreferrer"
          className="dz-floating-btn dz-floating-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.45.06-.69.32-.23.25-.9.88-.9 2.15s.92 2.5 1.05 2.67c.13.17 1.82 2.78 4.4 3.89.61.27 1.09.43 1.46.55.62.2 1.18.17 1.62.11.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
          </svg>
        </a>
        <a
          href="tel:+918810606010"
          className="dz-floating-btn dz-floating-call"
          aria-label="Call Us"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
        <a
          href="#bookDemo"
          className="dz-floating-btn dz-floating-form"
          aria-label="Send Enquiry / Book Demo"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
