"use client";

import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import PortraitVideoCard from "./PortraitVideoCard";
import styles from "./PaidInternshipSection.module.css";

// Editable Student Paid Internship Videos Data
// Adding or editing any item automatically renders the portrait card with its course name.
export const internshipVideosData = [
  {
    id: "intern-1",
    name: "Rohan Malhotra",
    course: "Expert in Digital Marketing",
    poster: "/assets/img/gallery/dizitaladda-student.webp",
    videoId: "KFWyifEYWyU",
  },
  {
    id: "intern-2",
    name: "Priya Sharma",
    course: "Advanced Digital Marketing",
    poster: "/assets/img/gallery/classes-with-gulshan-sir.webp",
    videoId: "5Ky9myAg6a8",
  },
  {
    id: "intern-3",
    name: "Aman Gupta",
    course: "Data Science & AI Diploma",
    poster: "/assets/img/gallery/dizitaladda-classroom.webp",
    videoId: "0Y0wxv9Hrvc",
  },
  {
    id: "intern-4",
    name: "Sapna Verma",
    course: "Digital Marketing for Beginners",
    videoId: "93nJRCQduxg",
  },
  {
    id: "intern-5",
    name: "Sanjana Mehra",
    course: "Advanced Digital Marketing",
    videoId: "PbKg7zUPGoc",
  },
];

export default function PaidInternshipSection({
  videos = internshipVideosData,
}) {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const handleTogglePlay = (id) => {
    if (activeVideoId === id) {
      setActiveVideoId(null);
    } else {
      setActiveVideoId(id);
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("da-video-play", { detail: { id } }));
      }
    }
  };

  // Sync with global single video playback
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleGlobalPlay = (e) => {
      if (e.detail?.id !== activeVideoId) {
        setActiveVideoId(null);
      }
    };

    window.addEventListener("da-video-play", handleGlobalPlay);
    return () => window.removeEventListener("da-video-play", handleGlobalPlay);
  }, [activeVideoId]);

  return (
    <section
      className={styles.section}
      id="paid-internship"
      aria-labelledby="paid-internship-heading"
    >
      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <SectionHeader
          align="center"
          id="paid-internship-heading"
          dark
          label="Earn While You Learn"
          title={
            <>
              Final 2 Months Guaranteed{" "}
              <span className="highlight">Paid Corporate Internship</span>
            </>
          }
          description="Every career program includes a mandatory 2-month guaranteed paid internship prior to graduation — working on live client ad budgets, real agency projects, and receiving an assured monthly stipend."
        />

        {/* ================= STUDENT INTERNSHIP VIDEOS GRID ================= */}
        <div className={styles.videoGrid} role="list">
          {videos.map((item) => {
            const cardId = item.id || item.videoId || item.name;
            return (
              <PortraitVideoCard
                key={cardId}
                item={item}
                isPlaying={activeVideoId === cardId}
                onTogglePlay={() => handleTogglePlay(cardId)}
              />
            );
          })}
        </div>

        {/* ================= 2-MONTH INTERNSHIP ROADMAP ================= */}
        <div className={styles.roadmapWrap}>
          <div className={styles.roadmapHeader}>
            <h3 className={styles.roadmapTitle}>How The Paid Internship Works</h3>
            <span className={styles.roadmapBadge}>Guaranteed in All Career Programs</span>
          </div>

          <div className={styles.roadmapSteps}>
            <div className={styles.roadmapStep}>
              <span className={styles.stepNum}>Phase 01 • Months 1–4</span>
              <span className={styles.stepTitle}>Classroom &amp; Practical Training</span>
              <p className={styles.stepDesc}>
                Master 60+ tools, AI integrations, live client case studies, and hands-on lab sessions.
              </p>
            </div>

            <div className={styles.roadmapArrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className={`${styles.roadmapStep} ${styles.highlightStep}`}>
              <span className={styles.stepNum}>Phase 02 • Last 2 Months</span>
              <span className={styles.stepTitle}>Guaranteed Paid Internship (With Stipend)</span>
              <p className={styles.stepDesc}>
                Directly deployed in partner agencies or brand marketing teams. Manage real budgets, run live campaigns, and earn a monthly stipend.
              </p>
            </div>

            <div className={styles.roadmapArrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className={styles.roadmapStep}>
              <span className={styles.stepNum}>Phase 03 • Graduation</span>
              <span className={styles.stepTitle}>PPO &amp; Full-Time Placement</span>
              <p className={styles.stepDesc}>
                Receive your official internship experience letter, certificates, and transition into full-time placement across 250+ hiring partners.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className={styles.ctaRow}>
          <a href="#bookDemo" className={styles.btnPrimary}>
            Book Free Demo &amp; Check Internship Eligibility
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/918810606010?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%202-Month%20Paid%20Internship%20program%20at%20DizitalAdda."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Chat with Internship Advisor on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
