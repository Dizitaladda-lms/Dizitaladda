"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

const heroCategoryPills = [
  {
    label: "Marketing",
    href: "/courses/digital-marketing-for-professional",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14.5 19 5l-5.5 15-2.3-6.2L4 14.5Z" />
        <path d="m11.2 13.8 4.3-4.3" />
      </svg>
    ),
  },
  {
    label: "Data Analytics",
    href: "/courses/diploma-in-data-analytics-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 3-3 3 2 5-7" />
        <circle cx="7" cy="15" r="1" />
        <circle cx="10" cy="12" r="1" />
        <circle cx="13" cy="14" r="1" />
        <circle cx="18" cy="7" r="1" />
      </svg>
    ),
  },
  {
    label: "Data Science",
    href: "/courses/diploma-in-data-science-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3v5l-4.5 9A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-3L15 8V3H9Z" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
  {
    label: "CS & EH",
    href: "/courses/foundation-in-cyber-security-and-ethical-hacking",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "AI ML",
    href: "/courses/diploma-in-machine-learning-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8M8 12h3M14 12h2M8 16h8" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    label: "Success",
    href: "/success-stories",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector(".site-nav");
      const categoryNav = document.querySelector(".site-category-nav");
      const spacer = document.querySelector(".site-nav-spacer");
      if (nav) {
        const navH = nav.getBoundingClientRect().height || 0;
        const catVisible =
          categoryNav && window.getComputedStyle(categoryNav).display !== "none";
        const catH = catVisible ? categoryNav.getBoundingClientRect().height : 0;
        if (categoryNav && catVisible) {
          categoryNav.style.top = `${Math.round(navH)}px`;
        }
        const total = Math.round(navH + catH);
        if (total > 0) {
          document.documentElement.style.setProperty("--site-nav-h", `${total}px`);
          if (spacer) {
            spacer.style.height = `${total}px`;
          }
        }
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/#courses?search=${encodeURIComponent(searchQuery.trim())}`;
    } else {
      const coursesSection = document.getElementById("courses");
      if (coursesSection) {
        coursesSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="dizitaladda-home-hero" className="dz-upgrad-hero">
      {/* 1. Full-bleed background */}
      <div className="dz-upgrad-hero-bg">
        <img
          src="/images/hero2.webp"
          alt="DizitalAdda Learning Campus"
          className="dz-upgrad-bg-img"
        />
        <div className="dz-upgrad-overlay" />
      </div>

      {/* 2. Centered Content */}
      <div className="dz-upgrad-hero-center">
        <h1 className="dz-upgrad-title">
          India&apos;s Best{" "}
          <span className="dz-upgrad-highlight">Digital Marketing Institute</span>{" "}
          |{" "}
          <span className="dz-upgrad-highlight">AI, Data Science &amp; Cyber Security</span>{" "}
          Courses
        </h1>

        <p className="dz-upgrad-description">
          Live projects, real campaigns and expert mentors at DizitalAdda. Build career-focused, job-ready skills that get you hired or help you grow your own business.
        </p>

        <form className="dz-upgrad-search-form" onSubmit={handleSearchSubmit}>
          <div className="dz-upgrad-search-pill">
            <span className="dz-upgrad-search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </span>
            <input
              type="text"
              className="dz-upgrad-search-input"
              placeholder="Tell us what you're looking to learn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search courses"
            />
            <button type="submit" className="dz-upgrad-search-btn" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </form>

        <div className="dz-upgrad-actions">
          <a className="dz-upgrad-btn dz-upgrad-btn-primary" href="#bookDemo">
            Book Free Demo Class
          </a>
          <a
            className="dz-upgrad-btn dz-upgrad-btn-secondary"
            href="/assets/pdfs/Digital-Marketing-Course-for-Professionals.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Brochure
          </a>
        </div>

        <div className="dz-upgrad-stats" aria-label="DizitalAdda at a glance">
          <div className="dz-upgrad-stat">
            <strong className="dz-upgrad-stat-number">25000+</strong>
            <span className="dz-upgrad-stat-label">Students trained</span>
          </div>
          <div className="dz-upgrad-stat-divider" aria-hidden="true" />
          <div className="dz-upgrad-stat">
            <strong className="dz-upgrad-stat-number">20+</strong>
            <span className="dz-upgrad-stat-label">Courses</span>
          </div>
          <div className="dz-upgrad-stat-divider" aria-hidden="true" />
          <div className="dz-upgrad-stat">
            <strong className="dz-upgrad-stat-number">100%</strong>
            <span className="dz-upgrad-stat-label">Practical learning</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Course Category Pills (matching Navbar second row) */}
      <div className="dz-upgrad-pills-row" aria-label="Course categories">
        {heroCategoryPills.map((pill) => (
          <a key={pill.label} href={pill.href} className="dz-upgrad-pill">
            <span className="dz-upgrad-pill-icon" aria-hidden="true">{pill.icon}</span>
            <span className="dz-upgrad-pill-label">{pill.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
