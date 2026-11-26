"use client";

import { useEffect } from "react";
import "./Hero.css";

export default function Hero() {
  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".site-nav");
      const categoryNav = document.querySelector(".site-category-nav");
      if (nav) {
        const navH = nav.getBoundingClientRect().height || 0;
        const catH = categoryNav && window.getComputedStyle(categoryNav).display !== "none"
          ? categoryNav.getBoundingClientRect().height
          : 0;
        const total = Math.round(navH + catH);
        if (total > 0) {
          document.documentElement.style.setProperty("--site-nav-h", `${total}px`);
        }
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  const handleImageError = (event) => {
    if (!event.currentTarget.dataset.triedFallback) {
      event.currentTarget.dataset.triedFallback = "true";
      event.currentTarget.src = "/images/hero2.webp";
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

      {/* 2. Right Side: Single Static Hero Image with Seamless Gradient Melt (~62% width) */}
      <div className="dz-hero-image-col" aria-label="DizitalAdda learning campus">
        <div className="dz-image-container">
          <img
            src="/images/hero2.webp"
            alt="DizitalAdda campus learning environment"
            className="dz-hero-image"
            onError={handleImageError}
          />
        </div>
      </div>
    </section>
  );
}
