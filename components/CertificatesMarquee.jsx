"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./CertificatesMarquee.module.css";

// Student Certifications Data List
export const defaultCertificates = [
  {
    name: "Abhinav Sharma",
    course: "Advanced Digital Marketing",
    badge: "Certified Graduate",
    image: "/courses/images/certificates/1.webp",
  },
  {
    name: "Sonatan Saha",
    course: "Performance Marketing Pro",
    badge: "HubSpot Certified",
    image: "/courses/images/certificates/2.webp",
  },
  {
    name: "Arpit Verma",
    course: "Digital Growth & Automation",
    badge: "Live Project Certified",
    image: "/courses/images/certificates/3.webp",
  },
  {
    name: "Aryan Singh",
    course: "Executive Digital Marketing",
    badge: "Industry Recognized",
    image: "/courses/images/certificates/4.webp",
  },
  {
    name: "Madhu Rao",
    course: "Expert in Digital Marketing",
    badge: "Google Certified",
    image: "/courses/images/certificates/5.webp",
  },
  {
    name: "Chitra Nair",
    course: "Social Media Mastery",
    badge: "Meta Certified",
    image: "/courses/images/certificates/6.webp",
  },
  {
    name: "Sumit Bisht",
    course: "SEO & Analytics Pro",
    badge: "Semrush Certified",
    image: "/courses/images/certificates/7.jpeg",
  },
  {
    name: "Pooja Rawat",
    course: "AI & Prompt Engineering",
    badge: "Govt. Aligned",
    image: "/courses/images/certificates/8.jpeg",
  },
];

// SVG Certificate Generator (Gold border, official seal & typography)
function CertificateSvg({ name, course, front }) {
  const photo = front ? (
    <>
      <circle cx="150" cy="92" r="26" fill="#e6d9f7" />
      <circle cx="150" cy="86" r="10" fill="#8c6bb1" />
      <path d="M130 112 Q150 94 170 112 L170 118 L130 118Z" fill="#8c6bb1" />
    </>
  ) : null;

  const lines = [0, 1, 2, 3, 4].map((i) => (
    <rect
      key={i}
      x="52"
      y={front ? 200 + i * 9 : 120 + i * 10}
      width={196 - (i % 3) * 18}
      height="3"
      rx="1.5"
      fill="#cfc7dc"
    />
  ));

  return (
    <svg
      viewBox="0 0 300 390"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${front ? "Front" : "Back"} of certificate for ${name}`}
      style={{ width: "100%", height: "auto", display: "block" }}
    >
      <rect width="300" height="390" fill="#fff" rx="6" />
      <rect
        x="8"
        y="8"
        width="284"
        height="374"
        fill="none"
        stroke="#d4a437"
        strokeWidth="5"
        rx="4"
      />
      <rect
        x="18"
        y="18"
        width="264"
        height="354"
        fill="none"
        stroke="#e8cf86"
        strokeWidth="1.5"
      />
      <text
        x="150"
        y="48"
        textAnchor="middle"
        fontSize="8"
        fill="#7a6a9a"
        fontFamily="Georgia, serif"
      >
        India&apos;s Most Recommended Digital Marketing Institute
      </text>

      {front ? (
        <>
          {photo}
          <text
            x="150"
            y="172"
            textAnchor="middle"
            fontSize="15"
            fontWeight="700"
            fill="#241a3d"
            fontFamily="Georgia, serif"
          >
            {name}
          </text>
          <text
            x="150"
            y="188"
            textAnchor="middle"
            fontSize="7.5"
            fill="#7a6a9a"
          >
            Certificate of Completion
          </text>
        </>
      ) : (
        <>
          <text
            x="150"
            y="86"
            textAnchor="middle"
            fontSize="26"
            fill="#241a3d"
            fontStyle="italic"
            fontFamily="Georgia, serif"
          >
            Congratulations
          </text>
          <text
            x="150"
            y="108"
            textAnchor="middle"
            fontSize="9"
            fill="#7a6a9a"
          >
            Dear {name.split(" ")[0]}
          </text>
        </>
      )}

      {lines}

      {front && (
        <text
          x="150"
          y="300"
          textAnchor="middle"
          fontSize="12.5"
          fontWeight="700"
          fill="#241a3d"
          fontFamily="Georgia, serif"
        >
          {course}
        </text>
      )}

      <text
        x="150"
        y="336"
        textAnchor="middle"
        fontSize="13"
        fontWeight="800"
        fill="#6d28d9"
      >
        DizitalAdda
      </text>
      <rect x="70" y="350" width="160" height="2" fill="#e8cf86" />
    </svg>
  );
}

export default function CertificatesMarquee({ certificates = defaultCertificates }) {
  const [selectedCert, setSelectedCert] = useState(null);
  const trackRef = useRef(null);
  const isHoveredRef = useRef(false);

  // Duplicated list 3x for smooth infinite looping without jerky resets
  const loopedList = [...certificates, ...certificates, ...certificates];

  // ================= AUTO-SCROLLING LOGIC =================
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId;
    const speed = 0.85; // Speed in pixels per frame

    const step = () => {
      if (!isHoveredRef.current && track) {
        track.scrollLeft += speed;
        // Seamless loop when reaching 1/3 of the total content width
        const singleSetWidth = track.scrollWidth / 3;
        if (track.scrollLeft >= singleSetWidth * 2) {
          track.scrollLeft -= singleSetWidth;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    const onEnter = () => {
      isHoveredRef.current = true;
    };
    const onLeave = () => {
      isHoveredRef.current = false;
    };

    track.addEventListener("mouseenter", onEnter);
    track.addEventListener("mouseleave", onLeave);
    track.addEventListener("touchstart", onEnter, { passive: true });
    track.addEventListener("touchend", onLeave, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", onEnter);
      track.removeEventListener("mouseleave", onLeave);
      track.removeEventListener("touchstart", onEnter);
      track.removeEventListener("touchend", onLeave);
    };
  }, [certificates]);

  // Prev / Next button scroll handlers
  const handleScrollNav = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(`.${styles.cert}`);
    const cardWidth = card ? card.offsetWidth + 24 : 314;
    track.scrollBy({ left: direction * cardWidth * 2, behavior: "smooth" });
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
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
      className={styles.sec}
      id="student-certifications"
      aria-labelledby="certifications-heading"
    >
      <div className={styles.wrap}>
        {/* ================= HEADER ================= */}
        <div className={styles.head}>
          <h2 id="certifications-heading" className={styles.title}>
            Student <span className={styles.g}>Certifications</span>
          </h2>
          <p className={styles.sub}>
            After completing a course, every student receives verified certificates from Google, Meta Blueprint, HubSpot, Semrush and DizitalAdda, valid at top companies.
          </p>
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
        </div>

        {/* ================= AUTO-SCROLLING STAGE ================= */}
        <div className={styles.stage}>
          {/* Previous Button */}
          <button
            className={`${styles.nav} ${styles.navLeft}`}
            onClick={() => handleScrollNav(-1)}
            aria-label="Previous certificates"
            type="button"
          >
            <svg viewBox="0 0 24 24" className={styles.navIcon}>
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Auto-scrolling Track */}
          <div className={styles.track} ref={trackRef}>
            {loopedList.map((item, index) => (
              <button
                key={`${item.name}-${index}`}
                className={styles.cert}
                onClick={() => setSelectedCert(item)}
                type="button"
                aria-label={`View certificate: ${item.name} · ${item.course}`}
              >
                {/* Overlapping Dual Certificate Pair */}
                <div className={styles.pair}>
                  {/* Back Layer: Congratulations Letter */}
                  <div className={`${styles.pairLayer} ${styles.backLayer}`}>
                    <CertificateSvg name={item.name} course={item.course} front={false} />
                  </div>

                  {/* Front Layer: Student Certificate (Image or SVG) */}
                  <div className={`${styles.pairLayer} ${styles.frontLayer}`}>
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={`Certificate of ${item.name}`}
                        className={styles.pairImage}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <CertificateSvg name={item.name} course={item.course} front={true} />
                    )}
                  </div>

                  <span className={styles.zoom}>Click to zoom</span>
                </div>

                {/* Card Meta Footer */}
                <div className={styles.meta}>
                  <b title={item.course}>{item.course}</b>
                  <span className={styles.badge}>{item.badge}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            className={`${styles.nav} ${styles.navRight}`}
            onClick={() => handleScrollNav(1)}
            aria-label="Next certificates"
            type="button"
          >
            <svg viewBox="0 0 24 24" className={styles.navIcon}>
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= MODAL DIALOG PREVIEW ================= */}
      {selectedCert && (
        <div
          className={styles.dialogOverlay}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificate preview"
        >
          <div
            className={styles.dialogCard}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.cap}>
              <b>
                {selectedCert.name} · {selectedCert.course}
              </b>
              <button
                className={styles.closeBtn}
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
                type="button"
              >
                ✕
              </button>
            </div>

            <div className={styles.big}>
              {/* Front Certificate */}
              <div className={styles.bigLayer}>
                {selectedCert.image ? (
                  <img src={selectedCert.image} alt={selectedCert.course} />
                ) : (
                  <CertificateSvg
                    name={selectedCert.name}
                    course={selectedCert.course}
                    front={true}
                  />
                )}
              </div>

              {/* Back Certificate (Congratulations Letter) */}
              <div className={styles.bigLayer}>
                <CertificateSvg
                  name={selectedCert.name}
                  course={selectedCert.course}
                  front={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
