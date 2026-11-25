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
    </section>
  );
}
