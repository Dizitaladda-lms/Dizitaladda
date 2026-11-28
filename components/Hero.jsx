"use client";

import { useEffect, useState } from "react";
import "./Hero.css";

const heroCategoryPills = [
  {
    label: "Agentic AI",
    href: "/courses/advanced-certification-in-genai-and-prompt-engineering",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" />
      </svg>
    ),
  },
  {
    label: "Artificial Intelligence",
    href: "/courses/diploma-in-machine-learning-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4M8 16h.01M16 16h.01" />
      </svg>
    ),
  },
  {
    label: "Doctorate",
    href: "#courses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
  },
  {
    label: "Machine Learning",
    href: "/courses/advanced-certification-in-machine-learning-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
      </svg>
    ),
  },
  {
    label: "IIT/IIM Courses",
    href: "#courses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2 2 7h20z" />
      </svg>
    ),
  },
  {
    label: "Data Science",
    href: "/courses/diploma-in-data-science-and-ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 2v7.31L4.1 19.33A2 2 0 0 0 5.8 22h12.4a2 2 0 0 0 1.7-2.67L14 9.31V2z" />
        <path d="M8.5 2h7M7 16h10" />
      </svg>
    ),
  },
  {
    label: "MBA",
    href: "#courses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    label: "Marketing",
    href: "/courses/digital-marketing-for-professional",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    label: "Management",
    href: "#courses",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
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
      if (nav) {
        const navH = nav.getBoundingClientRect().height || 0;
        const catH =
          categoryNav && window.getComputedStyle(categoryNav).display !== "none"
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
          src="/images/campus-architecture.jpg"
          alt="DizitalAdda Learning Campus"
          className="dz-upgrad-bg-img"
        />
        <div className="dz-upgrad-overlay" />
      </div>

      {/* 2. Centered Content from Reference */}
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
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
          <div className="dz-upgrad-stat">
            <strong className="dz-upgrad-stat-number">20+</strong>
            <span className="dz-upgrad-stat-label">Courses</span>
          </div>
          <div className="dz-upgrad-stat">
            <strong className="dz-upgrad-stat-number">100%</strong>
            <span className="dz-upgrad-stat-label">Practical learning</span>
          </div>
        </div>
      </div>

      {/* 3. Bottom Category Pills Row */}
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
