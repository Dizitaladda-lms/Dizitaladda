"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./CertificatesMarquee.module.css";

/**
 * ============================================================================
 * CONFIGURATION & CERTIFICATES DATA
 * HOLD_MS: 1000ms (1 second per certificate auto-scroll)
 * ============================================================================
 */
export const CERTIFICATE_FILE_CONFIG = {
  // 1-second auto-scroll duration per certificate
  HOLD_MS: 1000,

  CERTS: [
    {
      id: 1,
      name: "Abhinav Sharma",
      course: "Advanced Digital Marketing + AI",
      pair: "/courses/images/certificates/1.webp",
    },
    {
      id: 2,
      name: "Sonatan Saha",
      course: "Performance Marketing Pro",
      pair: "/courses/images/certificates/2.webp",
    },
    {
      id: 3,
      name: "Arpit Verma",
      course: "Digital Growth & Automation",
      pair: "/courses/images/certificates/3.webp",
    },
    {
      id: 4,
      name: "Aryan Singh",
      course: "Executive Digital Marketing",
      pair: "/courses/images/certificates/4.webp",
    },
    {
      id: 5,
      name: "Madhu Rao",
      course: "Expert in Digital Marketing",
      pair: "/courses/images/certificates/5.webp",
    },
    {
      id: 6,
      name: "Chitra Nair",
      course: "Social Media & Meta Ads Mastery",
      pair: "/courses/images/certificates/6.webp",
    },
  ],
};

// Fallback SVG Generator if image fails to load
function FallbackCertificateSvg({ name, course, isLeft }) {
  if (isLeft) {
    return (
      <svg
        viewBox="0 0 350 495"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Official Certificate for ${name}`}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <rect width="350" height="495" fill="#fdfbf7" />
        <rect x="12" y="12" width="326" height="471" fill="none" stroke="#7c3aed" strokeWidth="3" rx="4" />
        <rect x="18" y="18" width="314" height="459" fill="none" stroke="#d4af37" strokeWidth="1.5" rx="3" />
        <circle cx="175" cy="75" r="28" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
        <text x="175" y="82" textAnchor="middle" fill="#7c3aed" fontSize="18" fontWeight="bold">DA</text>
        <text x="175" y="130" textAnchor="middle" fill="#581c87" fontSize="12" fontWeight="700" letterSpacing="2">DIZITALADDA</text>
        <text x="175" y="160" textAnchor="middle" fill="#111827" fontSize="18" fontWeight="800">CERTIFICATE OF COMPLETION</text>
        <text x="175" y="185" textAnchor="middle" fill="#6b7280" fontSize="11" fontStyle="italic">This is proudly awarded to</text>
        <text x="175" y="225" textAnchor="middle" fill="#111827" fontSize="22" fontWeight="800">{name}</text>
        <line x1="75" y1="236" x2="275" y2="236" stroke="#d4af37" strokeWidth="1.5" />
        <text x="175" y="265" textAnchor="middle" fill="#4b5563" fontSize="12">for successfully completing the rigorous curriculum of</text>
        <text x="175" y="290" textAnchor="middle" fill="#7c3aed" fontSize="14" fontWeight="700">{course}</text>
        <circle cx="95" cy="385" r="24" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="3 2" />
        <text x="95" y="390" textAnchor="middle" fill="#92400e" fontSize="9" fontWeight="700">VERIFIED</text>
        <line x1="205" y1="400" x2="285" y2="400" stroke="#111827" strokeWidth="1" />
        <text x="245" y="415" textAnchor="middle" fill="#6b7280" fontSize="10">Head of Academics</text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 350 495"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`Commendation Letter for ${name}`}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <rect width="350" height="495" fill="#fcfaf6" />
      <rect x="14" y="14" width="322" height="467" fill="none" stroke="#1f2937" strokeWidth="2" rx="4" />
      <text x="40" y="60" fill="#111827" fontSize="20" fontWeight="800">DizitalAdda</text>
      <text x="40" y="78" fill="#6b7280" fontSize="10">Corporate Training &amp; Placement Network</text>
      <line x1="40" y1="92" x2="310" y2="92" stroke="#e5e7eb" strokeWidth="1.5" />
      <text x="40" y="130" fill="#7c3aed" fontSize="14" fontWeight="700">Congratulations!</text>
      <text x="40" y="155" fill="#111827" fontSize="13" fontWeight="600">Dear {name},</text>
      <text x="40" y="185" fill="#374151" fontSize="11">We commend your dedicated efforts throughout the</text>
      <text x="40" y="202" fill="#7c3aed" fontSize="11" fontWeight="600">{course}</text>
      <text x="40" y="222" fill="#374151" fontSize="11">program. Your mastery over 60+ industry tools and</text>
      <text x="40" y="239" fill="#374151" fontSize="11">successful execution of real client campaigns is recognized.</text>
      <text x="40" y="275" fill="#374151" fontSize="11">Issued: March-2026</text>
      <text x="40" y="292" fill="#374151" fontSize="11">Credentials ID: DA-2026-VERIFIED</text>
      <rect x="40" y="340" width="110" height="45" fill="#f3f4f6" rx="4" />
      <text x="95" y="367" textAnchor="middle" fill="#4b5563" fontSize="10" fontWeight="700">Skill India Partner</text>
      <line x1="200" y1="410" x2="295" y2="410" stroke="#111827" strokeWidth="1" />
      <text x="248" y="426" textAnchor="middle" fill="#6b7280" fontSize="10">Managing Director</text>
    </svg>
  );
}

export default function CertificatesMarquee() {
  const { HOLD_MS, CERTS } = CERTIFICATE_FILE_CONFIG;

  // Folder open/closed state (open by default for immediate viewing)
  const [isOpen, setIsOpen] = useState(true);

  // Active student certificate index
  const [activeIndex, setActiveIndex] = useState(0);

  // Fullscreen Zoom Modal state
  const [isZoomed, setIsZoomed] = useState(false);

  // Viewport / Visibility State
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Image error tracker
  const [brokenImages, setBrokenImages] = useState({});

  const sectionRef = useRef(null);
  const currentCert = CERTS[activeIndex] || CERTS[0];

  /**
   * IntersectionObserver & Tab Visibility:
   * Pause auto-advance timer when section leaves screen or browser tab is hidden
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.15);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsInView(false);
      } else if (section) {
        const rect = section.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom > 0);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  /**
   * 1-Second Auto-Advance Timer:
   * Flips to the next student certificate every 1000ms.
   * Pauses when hovered so user can inspect, resumes on leave.
   */
  useEffect(() => {
    if (!isOpen || !isInView || isHovered || isZoomed) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % CERTS.length);
    }, HOLD_MS);

    return () => clearInterval(timer);
  }, [isOpen, isInView, isHovered, isZoomed, HOLD_MS, CERTS.length]);

  /**
   * Keyboard accessibility for Escape key
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed]);

  // Navigate to previous student
  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? CERTS.length - 1 : prev - 1));
  }, [CERTS.length]);

  // Navigate to next student
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % CERTS.length);
  }, [CERTS.length]);

  // Toggle open / closed leather file
  const toggleFolder = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section
      ref={sectionRef}
      className={styles.sec}
      id="student-certifications"
      aria-labelledby="certifications-heading"
    >
      <div className={styles.wrap}>
        {/* ================= LEFT COLUMN: CONTENT ================= */}
        <div className={styles.contentCol}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Global Credentials
          </div>

          {/* Heading */}
          <h2 className={styles.title} id="certifications-heading">
            Student <span className={styles.highlight}>Certifications</span>
          </h2>

          {/* Subtext */}
          <p className={styles.description}>
            After completing a course, every student receives verified certificates
            from Google, Meta Blueprint, HubSpot, Semrush and DizitalAdda.
          </p>

          {/* Trust Chips / Pills */}
          <div className={styles.chips}>
            <span className={styles.chipItem}>
              <i className={styles.chipDot} aria-hidden="true" />
              10+ Global Certifications
            </span>
            <span className={styles.chipItem}>
              <i className={styles.chipDot} aria-hidden="true" />
              97% Placement Rate
            </span>
            <span className={styles.chipItem}>
              <i className={styles.chipDot} aria-hidden="true" />
              100% Industry Verified
            </span>
            <span className={styles.chipItem}>
              <i className={styles.chipDot} aria-hidden="true" />
              Shareable on LinkedIn
            </span>
          </div>

          {/* Verification Highlights */}
          <div className={styles.featureList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Dual-Document Portfolio File</h4>
                <p>Every graduate earns both an official completion certificate &amp; verified commendation letter.</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div className={styles.featureText}>
                <h4>Direct LinkedIn &amp; Recruiter Verification</h4>
                <p>Instant verifiable digital credentials with unique ID to stand out in hiring portfolios.</p>
              </div>
            </div>
          </div>

          {/* Active Live Student Tracker Card */}
          <div className={styles.activeCertCard}>
            <div className={styles.activeCertIcon}>
              <svg viewBox="0 0 24 24">
                <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z" />
                <path d="M8.5 12l2.5 2.5 4.5-5" />
              </svg>
            </div>
            <div className={styles.activeCertMeta}>
              <span className={styles.activeCertLabel}>
                Now Displaying ({activeIndex + 1} of {CERTS.length}):
              </span>
              <span className={styles.activeCertName}>{currentCert.name}</span>
              <span className={styles.activeCertCourse}>{currentCert.course}</span>
            </div>
          </div>

          {/* CTA Action Button */}
          <div className={styles.actionRow}>
            <a href="#bookDemo" className={styles.primaryCtaBtn}>
              Book Free Demo &amp; Counselling
              <svg viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: 3D BOOK STAGE WITH SIDE ARROWS ================= */}
        <div className={styles.rightCol}>
          <div
            className={styles.bookStageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── LEFT SIDE ARROW ON BOOK ── */}
            <button
              type="button"
              className={`${styles.sideNavBtn} ${styles.sideNavPrev}`}
              onClick={handlePrev}
              aria-label="Previous student certificate"
            >
              <svg viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* ── 3D BOOK STAGE ── */}
            <div className={styles.stage}>
              <div
                className={`${styles.bookViewport} ${
                  isOpen ? styles.bookViewportOpen : ""
                }`}
              >
                {/* ── BASE RIGHT PAGE: CONGRATULATIONS LETTER ── */}
                <div
                  className={styles.baseRightPage}
                  onClick={() => isOpen && setIsZoomed(true)}
                  role={isOpen ? "button" : undefined}
                  tabIndex={isOpen ? 0 : -1}
                  aria-label={
                    isOpen
                      ? `Zoom commendation letter for ${currentCert.name}`
                      : undefined
                  }
                  onKeyDown={(e) => {
                    if (isOpen && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      setIsZoomed(true);
                    }
                  }}
                >
                  <div className={styles.pageContent}>
                    {currentCert.pair ? (
                      <div
                        className={styles.pageHalfRight}
                        style={{ backgroundImage: `url(${currentCert.pair})` }}
                      />
                    ) : currentCert.back && !brokenImages[currentCert.id + "_back"] ? (
                      <img
                        src={currentCert.back}
                        alt={`Letter for ${currentCert.name}`}
                        className={styles.pageFullImage}
                        onError={() =>
                          setBrokenImages((prev) => ({
                            ...prev,
                            [currentCert.id + "_back"]: true,
                          }))
                        }
                      />
                    ) : (
                      <FallbackCertificateSvg
                        name={currentCert.name}
                        course={currentCert.course}
                        isLeft={false}
                      />
                    )}

                    {/* Left Inner Crease / Spine Shadow */}
                    <div className={styles.spineCreaseRight} aria-hidden="true" />
                  </div>
                </div>

                {/* ── FLIPPING COVER: LEATHER FRONT & INSIDE LEFT PAGE ── */}
                <div
                  className={`${styles.flippingCover} ${
                    isOpen ? styles.flippingCoverOpen : ""
                  }`}
                >
                  {/* 1. FRONT FACE: ASLI BLACK LEATHER COVER WITH GOLD FOIL */}
                  <div
                    className={styles.coverFront}
                    onClick={toggleFolder}
                    role="button"
                    tabIndex={0}
                    aria-label="Open student certificate portfolio file"
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFolder();
                      }
                    }}
                  >
                    {/* SVG Definitions for Gold Foil Gradient */}
                    <svg
                      style={{ position: "absolute", width: 0, height: 0 }}
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient
                          id="goldFoilGradientCert"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#b8902f" />
                          <stop offset="25%" stopColor="#f7e6a6" />
                          <stop offset="50%" stopColor="#c9a24a" />
                          <stop offset="75%" stopColor="#fbefbd" />
                          <stop offset="100%" stopColor="#b8902f" />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Real Leather Grain Texture & Dashed Perimeter Stitching */}
                    <div className={styles.leatherGrain} aria-hidden="true" />
                    <div className={styles.stitchingLine} aria-hidden="true" />
                    <div className={styles.coverHighlight} aria-hidden="true" />
                    <div className={styles.lightSweep} aria-hidden="true" />

                    {/* Gold Metal Corners (Top-Right & Bottom-Right) */}
                    <div className={styles.goldCornerTop} aria-hidden="true" />
                    <div className={styles.goldCornerBottom} aria-hidden="true" />

                    {/* Cover Header */}
                    <div className={styles.coverHeaderGroup}>
                      <svg
                        viewBox="0 0 320 80"
                        className={styles.archSvg}
                        aria-hidden="true"
                      >
                        <path
                          id="archPathCert"
                          d="M 15,68 Q 160,8 305,68"
                          fill="transparent"
                        />
                        <text>
                          <textPath
                            href="#archPathCert"
                            startOffset="50%"
                            textAnchor="middle"
                          >
                            AI Integrated Digital Marketing Program
                          </textPath>
                        </text>
                      </svg>

                      <p className={`${styles.foilText} ${styles.foilItalic}`}>
                        India&apos;s only ecosystem provides
                      </p>
                      <p className={`${styles.foilText} ${styles.foilProgram}`}>
                        Certification | Diploma | Degree -UG-PG Program
                      </p>
                    </div>

                    {/* Center Interactive Pill */}
                    <div className={styles.openPillBtn}>
                      <span>Click to open file</span>
                      <svg viewBox="0 0 24 24">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </div>

                    {/* Cover Footer */}
                    <div className={styles.coverFooterGroup}>
                      <div className={styles.logoRow}>
                        <svg
                          className={styles.logoIcon}
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <path d="M4 6h10a12 12 0 0 1 12 12 12 12 0 0 1-12 12H4V6zm6 6v12h4a6 6 0 0 0 6-6 6 6 0 0 0-6-6h-4z" />
                          <polygon points="20 6 32 30 25 30 19 16 20 6" />
                        </svg>
                        <h4 className={`${styles.foilText} ${styles.logoTitle}`}>
                          DizitalAdda
                        </h4>
                      </div>

                      <p className={styles.logoSubtitle}>
                        India&apos;s Most Recommended Digital Marketing Institute
                      </p>

                      <p className={`${styles.foilText} ${styles.collabText}`}>
                        In Collaboration With
                      </p>

                      <p className={styles.statsText}>
                        4000 Schools | 400 Colleges | 80 Universities
                      </p>
                      <p className={styles.statsText}>
                        200+ Trainers | 600+ Placement Partners | 25,000 Students
                      </p>

                      <div className={styles.contactRow}>
                        <span>🌐 dizitaladda.com</span>
                        <span>•</span>
                        <span>📞 +91 8810606010</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. BACK FACE: LEFT INSIDE PAGE (PHOTO CERTIFICATE) */}
                  <div
                    className={styles.coverBack}
                    onClick={() => isOpen && setIsZoomed(true)}
                    role={isOpen ? "button" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                    aria-label={
                      isOpen
                        ? `Zoom photo certificate for ${currentCert.name}`
                        : undefined
                    }
                    onKeyDown={(e) => {
                      if (isOpen && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        setIsZoomed(true);
                      }
                    }}
                  >
                    <div className={styles.pageContent}>
                      {currentCert.pair ? (
                        <div
                          className={styles.pageHalfLeft}
                          style={{ backgroundImage: `url(${currentCert.pair})` }}
                        />
                      ) : currentCert.front &&
                        !brokenImages[currentCert.id + "_front"] ? (
                        <img
                          src={currentCert.front}
                          alt={`Certificate for ${currentCert.name}`}
                          className={styles.pageFullImage}
                          onError={() =>
                            setBrokenImages((prev) => ({
                              ...prev,
                              [currentCert.id + "_front"]: true,
                            }))
                          }
                        />
                      ) : (
                        <FallbackCertificateSvg
                          name={currentCert.name}
                          course={currentCert.course}
                          isLeft={true}
                        />
                      )}

                      {/* Right Inner Crease / Spine Shadow */}
                      <div className={styles.spineCreaseLeft} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── RIGHT SIDE ARROW ON BOOK ── */}
            <button
              type="button"
              className={`${styles.sideNavBtn} ${styles.sideNavNext}`}
              onClick={handleNext}
              aria-label="Next student certificate"
            >
              <svg viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN ZOOM MODAL ================= */}
      {isZoomed && (
        <div
          className={styles.zoomModal}
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Expanded preview of certificate for ${currentCert.name}`}
        >
          <div
            className={styles.zoomDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.zoomCloseBtn}
              onClick={() => setIsZoomed(false)}
              aria-label="Close zoomed certificate"
            >
              ×
            </button>
            <img
              src={currentCert.pair || currentCert.front}
              alt={`Certificate portfolio for ${currentCert.name}`}
              className={styles.zoomImage}
            />
            <p className={styles.zoomCaption}>
              {currentCert.name} · {currentCert.course}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
