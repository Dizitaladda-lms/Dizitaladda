"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./PaidInternshipSection.module.css";

// Editable Student Paid Internship Videos Data
// You can easily change videoId (YouTube ID) or videoSrc (local MP4 path), poster, stipend, names, etc.
export const internshipVideosData = [
  {
    id: "intern-1",
    name: "Rohan Malhotra",
    course: "Expert in Digital Marketing",
    role: "Performance Marketing Intern",
    stipend: "₹15,000 / month",
    company: "GrowthX Media",
    poster: "/assets/img/gallery/dizitaladda-student.webp",
    videoId: "KFWyifEYWyU", // YouTube ID (e.g. https://www.youtube.com/watch?v=KFWyifEYWyU)
    videoSrc: "", // or direct MP4 URL (e.g. "/videos/internship-rohan.mp4")
    duration: "1:30",
    quote: "My paid corporate internship commenced in the 4th month of the course! Managing live client budgets gave me the skills to scale high-ROAS campaigns while earning a regular monthly stipend.",
    tags: ["Meta Ads", "Google Ads", "ROAS Scaling"],
  },
  {
    id: "intern-2",
    name: "Priya Sharma",
    course: "Advanced Digital Marketing",
    role: "SEO & Content Strategy Intern",
    stipend: "₹12,000 / month",
    company: "TechNova Digital",
    poster: "/assets/img/gallery/classes-with-gulshan-sir.webp",
    videoId: "5Ky9myAg6a8",
    videoSrc: "",
    duration: "1:45",
    quote: "DizitalAdda directly arranged my 2-month paid internship with a partner agency. I gained enterprise agency experience, earned a monthly stipend, and received a verified experience letter.",
    tags: ["Technical SEO", "Keyword Research", "GA4"],
  },
  {
    id: "intern-3",
    name: "Aman Gupta",
    course: "Data Science & AI Diploma",
    role: "Data Analyst Intern",
    stipend: "₹18,000 / month",
    company: "FinEdge Analytics",
    poster: "/assets/img/gallery/dizitaladda-classroom.webp",
    videoId: "0Y0wxv9Hrvc",
    videoSrc: "",
    duration: "2:05",
    quote: "Following core classroom training, I spent the final 2 months engineering live fintech data pipelines. Real industry exposure combined with a handsome monthly stipend made it totally worth it.",
    tags: ["Python", "Power BI", "SQL Analytics"],
  },
];

export default function PaidInternshipSection({
  videos = internshipVideosData,
}) {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalRef = useRef(null);

  // Close modal on ESC key
  useEffect(() => {
    if (!activeVideo) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeVideo]);

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
          {videos.map((item) => (
            <article
              key={item.id}
              className={styles.videoCard}
              role="listitem"
            >
              {/* Video Poster Thumbnail & Play Trigger */}
              <div
                className={styles.posterWrap}
                onClick={() => setActiveVideo(item)}
                role="button"
                tabIndex={0}
                aria-label={`Watch ${item.name}'s paid internship video`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveVideo(item);
                  }
                }}
              >
                <img
                  src={item.poster}
                  alt={`${item.name} Paid Internship Experience`}
                  className={styles.posterImg}
                  loading="lazy"
                />
                <div className={styles.posterOverlay}>
                  <div className={styles.playBtn} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </div>
                </div>

                {/* Badges on Thumbnail */}
                <span className={styles.badgeMonth}>Last 2 Months</span>
                <span className={styles.badgeDuration}>
                  <svg
                    viewBox="0 0 24 24"
                    width="12"
                    height="12"
                    fill="currentColor"
                    style={{ marginRight: 3 }}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {item.duration}
                </span>
              </div>

              {/* Card Details */}
              <div className={styles.cardContent}>
                <div className={styles.stipendRow}>
                  <span className={styles.stipendPill}>
                    <span aria-hidden="true">✓</span> {item.stipend}
                  </span>
                  <span className={styles.companyName}>@{item.company}</span>
                </div>

                <h3 className={styles.studentName}>{item.name}</h3>
                <p className={styles.courseName}>
                  {item.course} • {item.role}
                </p>

                <p className={styles.quote}>"{item.quote}"</p>

                {item.tags && item.tags.length > 0 && (
                  <div className={styles.tagRow}>
                    {item.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
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

      {/* ================= VIDEO MODAL POPUP ================= */}
      {activeVideo && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeVideo.name} Paid Internship Video`}
        >
          <div
            className={styles.modalBox}
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
          >
            {/* Close Button */}
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Video Player */}
            <div className={styles.videoWrapper}>
              {activeVideo.videoSrc ? (
                <video
                  src={activeVideo.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  poster={activeVideo.poster}
                />
              ) : activeVideo.videoId ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title={`${activeVideo.name} Paid Internship Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: "#ffffff",
                    fontSize: "16px",
                  }}
                >
                  Video coming soon for {activeVideo.name}
                </div>
              )}
            </div>

            {/* Modal Bottom Details */}
            <div className={styles.modalFooter}>
              <div className={styles.modalStudentInfo}>
                <h4>{activeVideo.name} — {activeVideo.role}</h4>
                <p>
                  {activeVideo.course} • Stipend: {activeVideo.stipend} @ {activeVideo.company}
                </p>
              </div>
              <span className={styles.stipendPill}>
                ✓ Guaranteed Paid Internship
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
