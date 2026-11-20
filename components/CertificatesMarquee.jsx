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
      <text x="40" y="165" fill="#374151" fontSize="12" fontStyle="italic">Dear {name},</text>
      <text x="40" y="200" fill="#4b5563" fontSize="11">Your outstanding performance and hands-on</text>
      <text x="40" y="220" fill="#4b5563" fontSize="11">mastery in real-world brand campaigns have</text>
      <text x="40" y="240" fill="#4b5563" fontSize="11">earned you this prestigious professional credential.</text>
      <text x="40" y="280" fill="#1f2937" fontSize="12" fontWeight="700">Course Specialization:</text>
      <text x="40" y="300" fill="#7c3aed" fontSize="13" fontWeight="700">{course}</text>
      <line x1="40" y1="410" x2="160" y2="410" stroke="#9ca3af" strokeWidth="1" />
      <text x="40" y="426" fill="#6b7280" fontSize="10">Program Director</text>
      <circle cx="270" cy="405" r="24" fill="#ede9fe" />
      <text x="270" y="410" textAnchor="middle" fill="#6d28d9" fontSize="9" fontWeight="700">SEAL</text>
    </svg>
  );
}

export default function CertificatesMarquee() {
  const { HOLD_MS, CERTS } = CERTIFICATE_FILE_CONFIG;

  // Folder open/closed state: Closed by default so clicking opens the file!
  const [isOpen, setIsOpen] = useState(false);

  // Active student certificate index
  const [activeIndex, setActiveIndex] = useState(0);

  // Page turn flip animation states
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState("next"); // "next" | "prev"
  const [targetIndex, setTargetIndex] = useState(0);

  // Fullscreen Zoom Modal state
  const [isZoomed, setIsZoomed] = useState(false);

  // Hover state (pauses auto-scroll on hover)
  const [isHovered, setIsHovered] = useState(false);

  // Image error tracker
  const [brokenImages, setBrokenImages] = useState({});

  // Section reference for viewport observation
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const currentCert = CERTS[activeIndex] || CERTS[0];
  const targetCert = CERTS[targetIndex] || CERTS[0];

  // IntersectionObserver: Only auto-scroll when section is in viewport
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
    return () => observer.disconnect();
  }, []);

  /**
   * Smooth 3D Page Turn Transition Handler
   * Simulates real page flipping like turning leaves in a book.
   */
  const turnPage = useCallback((dir = "next") => {
    if (isFlipping) return;

    const nextIdx =
      dir === "next"
        ? (activeIndex + 1) % CERTS.length
        : activeIndex === 0
        ? CERTS.length - 1
        : activeIndex - 1;

    setFlipDirection(dir);
    setTargetIndex(nextIdx);
    setIsFlipping(true);

    // 480ms matches the 3D page flip transition curve
    setTimeout(() => {
      setActiveIndex(nextIdx);
      setIsFlipping(false);
    }, 480);
  }, [activeIndex, isFlipping, CERTS.length]);

  /**
   * 1-Second Auto-Advance Timer:
   * Flips like a real book page every 1000ms when folder is OPEN.
   * Pauses when hovered so user can inspect, resumes on leave.
   */
  useEffect(() => {
    if (!isOpen || !isInView || isHovered || isZoomed || isFlipping) return;

    const timer = setTimeout(() => {
      turnPage("next");
    }, HOLD_MS);

    return () => clearTimeout(timer);
  }, [isOpen, isInView, isHovered, isZoomed, isFlipping, turnPage, activeIndex, HOLD_MS]);

  /**
   * Keyboard accessibility for Escape key
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (isZoomed) {
          setIsZoomed(false);
        } else if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isZoomed, isOpen]);

  // Navigate to previous student with 3D page turn
  const handlePrev = useCallback(() => {
    turnPage("prev");
  }, [turnPage]);

  // Navigate to next student with 3D page turn
  const handleNext = useCallback(() => {
    turnPage("next");
  }, [turnPage]);

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

        {/* ================= RIGHT COLUMN: 3D LEATHER FILE & BOOK STAGE ================= */}
        <div className={styles.rightCol}>
          <div
            className={styles.bookStageContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* ── SIDE NAVIGATION ARROWS: ONLY APPEAR WHEN FILE IS OPEN ── */}
            {isOpen && (
              <>
                <button
                  type="button"
                  className={`${styles.sideNavBtn} ${styles.sideNavPrev}`}
                  onClick={handlePrev}
                  aria-label="Previous student certificate"
                  disabled={isFlipping}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  type="button"
                  className={`${styles.sideNavBtn} ${styles.sideNavNext}`}
                  onClick={handleNext}
                  aria-label="Next student certificate"
                  disabled={isFlipping}
                >
                  <svg viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

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
                    {/* If flipping next, show targetCert on base right; else currentCert */}
                    {isFlipping && flipDirection === "next" ? (
                      <div
                        className={styles.pageHalfRight}
                        style={{ backgroundImage: `url(${targetCert.pair})` }}
                      />
                    ) : currentCert.pair ? (
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

                {/* ── 3D FLIPPING PAGE LEAF (REAL PAGE TURN ANIMATION) ── */}
                {isOpen && isFlipping && (
                  <div
                    className={`${styles.turningLeaf} ${
                      flipDirection === "next"
                        ? styles.turningLeafNext
                        : styles.turningLeafPrev
                    }`}
                  >
                    {/* Front Face of Turning Leaf */}
                    <div className={styles.leafFront}>
                      {flipDirection === "next" ? (
                        <div
                          className={styles.pageHalfRight}
                          style={{ backgroundImage: `url(${currentCert.pair})` }}
                        />
                      ) : (
                        <div
                          className={styles.pageHalfLeft}
                          style={{ backgroundImage: `url(${currentCert.pair})` }}
                        />
                      )}
                      <div className={styles.leafShadow} aria-hidden="true" />
                    </div>

                    {/* Back Face of Turning Leaf */}
                    <div className={styles.leafBack}>
                      {flipDirection === "next" ? (
                        <div
                          className={styles.pageHalfLeft}
                          style={{ backgroundImage: `url(${targetCert.pair})` }}
                        />
                      ) : (
                        <div
                          className={styles.pageHalfRight}
                          style={{ backgroundImage: `url(${targetCert.pair})` }}
                        />
                      )}
                      <div className={styles.leafShadow} aria-hidden="true" />
                    </div>
                  </div>
                )}

                {/* ── FLIPPING COVER: LEATHER FRONT & INSIDE LEFT PAGE ── */}
                <div
                  className={`${styles.flippingCover} ${
                    isOpen ? styles.flippingCoverOpen : ""
                  }`}
                >
                  {/* 1. FRONT FACE: ROYAL BLACK LEATHER COVER WITH GOLD FOIL & CLICK TO OPEN */}
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

                    {/* Interactive "Click to open file" button */}
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
                      <p className={`${styles.foilText} ${styles.logoTagline}`}>
                        Transforming Careers Through Practical Excellence
                      </p>

                      <div className={styles.partnersStrip}>
                        <span className={styles.foilPill}>Google Partner</span>
                        <span className={styles.foilPill}>Meta Certified</span>
                        <span className={styles.foilPill}>Skill India</span>
                      </div>
                    </div>
                  </div>

                  {/* 2. BACK FACE: INSIDE LEFT PAGE (Official Certificate) */}
                  <div
                    className={styles.coverInsideLeft}
                    onClick={() => isOpen && setIsZoomed(true)}
                    role={isOpen ? "button" : undefined}
                    tabIndex={isOpen ? 0 : -1}
                    aria-label={
                      isOpen
                        ? `Zoom official certificate for ${currentCert.name}`
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
                      {/* If flipping prev, show targetCert on left; else currentCert */}
                      {isFlipping && flipDirection === "prev" ? (
                        <div
                          className={styles.pageHalfLeft}
                          style={{ backgroundImage: `url(${targetCert.pair})` }}
                        />
                      ) : currentCert.pair ? (
                        <div
                          className={styles.pageHalfLeft}
                          style={{ backgroundImage: `url(${currentCert.pair})` }}
                        />
                      ) : currentCert.front && !brokenImages[currentCert.id + "_front"] ? (
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

                      {/* Right Spine Crease / Shadow */}
                      <div className={styles.spineCreaseLeft} aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SLEEK CLOSE FILE BUTTON (VISIBLE ONLY WHEN FILE IS OPEN) ── */}
            {isOpen && (
              <button
                type="button"
                className={styles.closeFolderBtn}
                onClick={toggleFolder}
                aria-label="Close certificate portfolio file"
              >
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                Close File
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ================= FULLSCREEN ZOOM MODAL ================= */}
      {isZoomed && (
        <div
          className={styles.zoomBackdrop}
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Full view of certificate for ${currentCert.name}`}
        >
          <div
            className={styles.zoomModal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.zoomHeader}>
              <div className={styles.zoomTitle}>
                <h3>{currentCert.name}</h3>
                <p>{currentCert.course} • Official Verified Credentials</p>
              </div>
              <button
                type="button"
                className={styles.zoomCloseBtn}
                onClick={() => setIsZoomed(false)}
                aria-label="Close fullscreen zoom"
              >
                ✕
              </button>
            </div>

            <div className={styles.zoomBody}>
              {currentCert.pair ? (
                <img
                  src={currentCert.pair}
                  alt={`${currentCert.name} certificate spread`}
                  className={styles.zoomImageSpread}
                />
              ) : (
                <div style={{ display: "flex", gap: "16px", maxWidth: "100%" }}>
                  <img
                    src={currentCert.front}
                    alt="Certificate"
                    className={styles.zoomImageSpread}
                  />
                  <img
                    src={currentCert.back}
                    alt="Letter"
                    className={styles.zoomImageSpread}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
