"use client";

import React, { useState, useEffect } from "react";
import styles from "./CertificatesMarquee.module.css";

// All 24 real certificates of DizitalAdda students
const certificatesList = [
  { id: 1, src: "/courses/images/certificates/1.webp", title: "Advanced Digital Marketing", student: "Certified Graduate" },
  { id: 2, src: "/courses/images/certificates/2.webp", title: "Executive Digital Marketing", student: "Industry Recognized" },
  { id: 3, src: "/courses/images/certificates/3.webp", title: "Master in Digital Marketing", student: "Agency Grade" },
  { id: 4, src: "/courses/images/certificates/4.webp", title: "Performance Marketing & Ads", student: "Google Verified" },
  { id: 5, src: "/courses/images/certificates/5.webp", title: "SEO & Growth Strategy", student: "Live Project Certified" },
  { id: 6, src: "/courses/images/certificates/6.webp", title: "Social Media Specialist", student: "Meta Blueprint" },
  { id: 7, src: "/courses/images/certificates/7.jpeg", title: "Digital Marketing Professional", student: "Certified Graduate" },
  { id: 8, src: "/courses/images/certificates/8.jpeg", title: "Digital Marketing & Analytics", student: "Industry Recognized" },
  { id: 9, src: "/courses/images/certificates/9.jpeg", title: "Advanced SEO & Ads", student: "Agency Grade" },
  { id: 10, src: "/courses/images/certificates/10.jpeg", title: "Complete Digital Marketing", student: "Google Certified" },
  { id: 11, src: "/courses/images/certificates/11.jpeg", title: "Performance Marketing Pro", student: "HubSpot Certified" },
  { id: 12, src: "/courses/images/certificates/12.jpeg", title: "Digital Growth & Automation", student: "Live Project Certified" },
  { id: 13, src: "/courses/images/certificates/13.jpeg", title: "Professional Certificate", student: "Certified Graduate" },
  { id: 14, src: "/courses/images/certificates/14.jpeg", title: "Digital Marketing Specialist", student: "Industry Recognized" },
  { id: 15, src: "/courses/images/certificates/15.jpeg", title: "Full Funnel Marketing", student: "Agency Grade" },
  { id: 16, src: "/courses/images/certificates/16.jpeg", title: "Google Ads & Meta Ads", student: "Google Verified" },
  { id: 17, src: "/courses/images/certificates/17.jpeg", title: "Brand & Content Strategy", student: "Semrush Certified" },
  { id: 18, src: "/courses/images/certificates/18.jpeg", title: "Performance Marketing", student: "Live Project Certified" },
  { id: 19, src: "/courses/images/certificates/19.jpeg", title: "Digital Marketing Diploma", student: "Skill India Aligned" },
  { id: 20, src: "/courses/images/certificates/20.jpeg", title: "Advanced SEO Specialist", student: "Agency Grade" },
  { id: 21, src: "/courses/images/certificates/21.jpeg", title: "Social Media & Growth", student: "Meta Blueprint" },
  { id: 22, src: "/courses/images/certificates/22.jpeg", title: "E-Commerce Marketing", student: "Live Project Certified" },
  { id: 23, src: "/courses/images/certificates/23.jpeg", title: "AI in Digital Marketing", student: "Certified Graduate" },
  { id: 24, src: "/courses/images/certificates/24.jpeg", title: "Digital Marketing Masterclass", student: "Industry Recognized" },
];

// Row 1 (1 to 12) & Row 2 (13 to 24)
const row1 = certificatesList.slice(0, 12);
const row2 = certificatesList.slice(12, 24);

export default function CertificatesMarquee() {
  const [selectedCert, setSelectedCert] = useState(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <section
      className={styles.section}
      aria-labelledby="certificates-marquee-title"
      id="student-certifications"
    >
      <div className={styles.container}>
        {/* ================= HEADER ================= */}
        <div className={styles.header}>
          <span className={styles.badge}>Government &amp; Industry Accredited</span>
          <h2 id="certificates-marquee-title" className={styles.heading}>
            Student <span className={styles.headingGradient}>Certifications</span>
          </h2>
          <p className={styles.subtext}>
            Course complete hone ke baad har student ko Google, Meta Blueprint, HubSpot, Semrush aur DizitalAdda ke verified certificates milte hain jo top companies me valid hain.
          </p>

          {/* Trust Badges Strip */}
          <div className={styles.trustStrip}>
            <div className={styles.trustPill}>
              <span className={styles.trustDot} />
              <span>10+ Global Certifications</span>
            </div>
            <div className={styles.trustPill}>
              <span className={styles.trustDot} />
              <span>97% Placement Rate</span>
            </div>
            <div className={styles.trustPill}>
              <span className={styles.trustDot} />
              <span>100% Industry Verified</span>
            </div>
            <div className={styles.trustPill}>
              <span className={styles.trustDot} />
              <span>Shareable on LinkedIn</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DUAL INFINITE MARQUEE TRACKS ================= */}
      <div className={styles.marqueeSection} aria-label="Student certificates ticker">
        {/* ROW 1: Scrolling Left */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackLeft}>
            {/* Duplicated 2x for 100% seamless infinite looping */}
            {[...row1, ...row1].map((cert, index) => (
              <div
                key={`r1-${cert.id}-${index}`}
                className={styles.card}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full certificate: ${cert.title}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={cert.src}
                    alt={`DizitalAdda Student Certificate ${cert.id} - ${cert.title}`}
                    className={styles.certImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.zoomBadge}>
                    <span>🔍 View</span>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.certLabel}>{cert.title}</span>
                  <span className={styles.certTag}>{cert.student}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Scrolling Right */}
        <div className={styles.marqueeRow}>
          <div className={styles.marqueeTrackRight}>
            {/* Duplicated 2x for 100% seamless infinite looping */}
            {[...row2, ...row2].map((cert, index) => (
              <div
                key={`r2-${cert.id}-${index}`}
                className={styles.card}
                onClick={() => setSelectedCert(cert)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View full certificate: ${cert.title}`}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={cert.src}
                    alt={`DizitalAdda Student Certificate ${cert.id} - ${cert.title}`}
                    className={styles.certImage}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className={styles.zoomBadge}>
                    <span>🔍 View</span>
                  </div>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.certLabel}>{cert.title}</span>
                  <span className={styles.certTag}>{cert.student}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX ZOOM MODAL ================= */}
      {selectedCert && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate Preview"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.lightboxClose}
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
              type="button"
            >
              ✕
            </button>
            <img
              src={selectedCert.src}
              alt={selectedCert.title}
              className={styles.lightboxImage}
            />
          </div>
        </div>
      )}
    </section>
  );
}
