"use client";

import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./DoubtSupportManagement.module.css";

/**
 * ============================================================================
 * EDITABLE VIDEO DATA
 * You can change videoId (YouTube ID) or videoSrc (local MP4 path), posters,
 * names, quotes, and descriptions below at any time.
 * ============================================================================
 */

// 1. Main Management Walkthrough Video: How 1-on-1 Doubt Clearing System Works
export const managementVideoData = {
  id: "management-main",
  title: "Inside DizitalAdda: How 1-on-1 Doubt Clearing & Academic Mentorship Works",
  subtitle:
    "Watch how our senior industry mentors conduct live 1-on-1 screen-sharing sessions to diagnose campaign errors, debug production code, and clear technical doubts in real time.",
  badge: "Zero-Doubt Policy • 1-on-1 Live Class",
  duration: "3:15 Min Walkthrough",
  poster: "/assets/img/gallery/classes-with-gulshan-sir.webp",
  videoId: "KFWyifEYWyU", // YouTube ID (e.g. https://www.youtube.com/watch?v=KFWyifEYWyU)
  videoSrc: "", // or direct MP4 URL (e.g. "/videos/management-doubt-system.mp4")
};

// 2. Student 1-on-1 Doubt Resolution Feedback Videos
export const studentDoubtVideosData = [
  {
    id: "doubt-1",
    name: "Aman Sharma",
    course: "Expert in Digital Marketing",
    role: "Performance Marketer @ GrowthMedia",
    resolvedTopic: "Meta Pixel & ROAS Scaling Error",
    poster: "/assets/img/gallery/dizitaladda-student.webp",
    videoId: "KFWyifEYWyU",
    videoSrc: "",
    duration: "1:40",
    quote:
      "When my Meta Ads campaign faced pixel tracking issues, the faculty scheduled a private 1-on-1 screen-sharing session within hours, thoroughly audited my Business Manager, and got my campaigns running smoothly.",
  },
  {
    id: "doubt-2",
    name: "Neha Verma",
    course: "Data Science & AI Diploma",
    role: "Associate Data Analyst",
    resolvedTopic: "Python ML Pipeline & Pandas Debugging",
    poster: "/assets/img/gallery/presentation.webp",
    videoId: "5Ky9myAg6a8",
    videoSrc: "",
    duration: "2:05",
    quote:
      "My machine learning model was failing validation with dropping accuracy scores. My mentor scheduled a dedicated 1-on-1 deep dive to resolve script bugs and clearly explain the underlying mathematical optimization.",
  },
  {
    id: "doubt-3",
    name: "Kunal Kashyap",
    course: "Advanced Digital Marketing",
    role: "SEO & Growth Associate",
    resolvedTopic: "Technical SEO & Schema Markup Issues",
    poster: "/assets/img/gallery/dizitaladda-classroom.webp",
    videoId: "0Y0wxv9Hrvc",
    videoSrc: "",
    duration: "1:50",
    quote:
      "I encountered persistent indexing errors and canonical mismatches in Google Search Console. In a 1-on-1 session, my trainer inspected the live source code and helped me rectify schema markup and robots.txt rules immediately.",
  },
];

export default function DoubtSupportManagement({
  mainVideo = managementVideoData,
  studentVideos = studentDoubtVideosData,
}) {
  const [activeVideo, setActiveVideo] = useState(null);
  const modalRef = useRef(null);

  // Close modal on ESC key and lock body scroll
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
      id="academic-support"
      aria-labelledby="doubt-support-heading"
    >
      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <SectionHeader
          align="center"
          id="doubt-support-heading"
          label="ACADEMIC SUPPORT & MENTORSHIP SYSTEM"
          title={
            <>
              Strong Academic Management &amp;{" "}
              <span className="highlight">1-on-1 Doubt Resolution</span>
            </>
          }
          description="At DizitalAdda, no learner is left behind. Our robust academic management framework guarantees instant, private 1-on-1 live mentor sessions for every technical blocker, code bug, or live campaign issue."
        />

        {/* ================= 4 VALUE HIGHLIGHTS ================= */}
        <div className={styles.valueBar}>
          <div className={styles.valueItem}>
            <div className={styles.valueIconWrap} aria-hidden="true">
              🎯
            </div>
            <div className={styles.valueText}>
              <h4>1-on-1 Dedicated Classes</h4>
              <p>Private screen-sharing with senior mentors</p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <div className={styles.valueIconWrap} aria-hidden="true">
              ⚡
            </div>
            <div className={styles.valueText}>
              <h4>Instant Query SLA</h4>
              <p>Tickets resolved within hours by mentors</p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <div className={styles.valueIconWrap} aria-hidden="true">
              🛠️
            </div>
            <div className={styles.valueText}>
              <h4>Live Campaign Debugging</h4>
              <p>Troubleshoot real ads, code &amp; tools live</p>
            </div>
          </div>

          <div className={styles.valueItem}>
            <div className={styles.valueIconWrap} aria-hidden="true">
              📊
            </div>
            <div className={styles.valueText}>
              <h4>Milestones &amp; Progress Audit</h4>
              <p>Proactive tracking so zero students lag behind</p>
            </div>
          </div>
        </div>

        {/* ================= EXECUTIVE SPLIT SHOWCASE ================= */}
        <div className={styles.showcaseSplit}>
          {/* Left Column: Featured Management Video */}
          <div className={styles.mainVideoCard}>
            <div
              className={styles.mainPosterWrap}
              onClick={() => setActiveVideo(mainVideo)}
              role="button"
              tabIndex={0}
              aria-label="Play video: How 1-on-1 Doubt Clearing Works"
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActiveVideo(mainVideo);
                }
              }}
            >
              <img
                src={mainVideo.poster}
                alt={mainVideo.title}
                className={styles.mainPosterImg}
                loading="lazy"
              />
              <div className={styles.mainPosterOverlay}>
                <div className={styles.mainPlayBtn} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <span className={styles.badgeTopLeft}>
                <span className={styles.liveDot} aria-hidden="true"></span>
                {mainVideo.badge}
              </span>

              <span className={styles.badgeDuration}>
                <svg
                  viewBox="0 0 24 24"
                  width="12"
                  height="12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                {mainVideo.duration}
              </span>
            </div>

            <div className={styles.mainVideoMeta}>
              <h3 className={styles.mainVideoTitle}>{mainVideo.title}</h3>
              <p className={styles.mainVideoDesc}>{mainVideo.subtitle}</p>
            </div>
          </div>

          {/* Right Column: 4 Management Pillars */}
          <div className={styles.pillarsList}>
            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap} aria-hidden="true">
                👥
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarHeadingRow}>
                  <h4 className={styles.pillarTitle}>Private 1-on-1 Video Class</h4>
                  <span className={styles.pillarTag}>Personalized Attention</span>
                </div>
                <p className={styles.pillarDesc}>
                  Hesitant to ask questions in large batches? Connect directly with senior faculty on private 1-on-1 video calls dedicated entirely to your curriculum and career questions.
                </p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap} aria-hidden="true">
                💻
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarHeadingRow}>
                  <h4 className={styles.pillarTitle}>Live Screen-Sharing &amp; Debugging</h4>
                  <span className={styles.pillarTag}>Real-Time Fix</span>
                </div>
                <p className={styles.pillarDesc}>
                  Whether diagnosing Meta Pixel tags, Google Ads conversion APIs, Python runtime environments, or SEO errors, mentors review your screen live to troubleshoot step-by-step.
                </p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap} aria-hidden="true">
                📱
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarHeadingRow}>
                  <h4 className={styles.pillarTitle}>Dedicated WhatsApp &amp; Desk Help</h4>
                  <span className={styles.pillarTag}>Fast SLA Turnaround</span>
                </div>
                <p className={styles.pillarDesc}>
                  Dedicated academic coordinators track your doubt tickets instantly. Sessions are scheduled within hours so no blocker delays your project progress.
                </p>
              </div>
            </div>

            <div className={styles.pillarCard}>
              <div className={styles.pillarIconWrap} aria-hidden="true">
                📈
              </div>
              <div className={styles.pillarContent}>
                <div className={styles.pillarHeadingRow}>
                  <h4 className={styles.pillarTitle}>Weekly Audits &amp; Backup Classes</h4>
                  <span className={styles.pillarTag}>Zero Backlog Guarantee</span>
                </div>
                <p className={styles.pillarDesc}>
                  Our academic managers review weekly submissions and attendance. If any performance gap is detected, proactive backup classes and 1-on-1 support are automatically scheduled.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STUDENT DOUBT RESOLUTION STORIES ================= */}
        <div className={styles.subheadingRow}>
          <span className={styles.subheadingBadge}>Student Case Studies</span>
          <h3 className={styles.subheadingTitle}>
            How Real Students Overcame Complex Project Blockers 1-on-1
          </h3>
          <p className={styles.subheadingDesc}>
            Discover how our hands-on mentorship, individual screen debugging, and dedicated academic management empower learners to master demanding technical challenges.
          </p>
        </div>

        <div className={styles.videoGrid} role="list">
          {studentVideos.map((item) => (
            <article key={item.id} className={styles.videoCard} role="listitem">
              {/* Poster & Play Button */}
              <div
                className={styles.posterWrap}
                onClick={() => setActiveVideo(item)}
                role="button"
                tabIndex={0}
                aria-label={`Watch ${item.name}'s 1-on-1 doubt resolution video`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveVideo(item);
                  }
                }}
              >
                <img
                  src={item.poster}
                  alt={`${item.name} 1-on-1 doubt session`}
                  className={styles.posterImg}
                  loading="lazy"
                />
                <div className={styles.posterOverlay}>
                  <div className={styles.playBtn} aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                <span className={styles.resolvedTag}>
                  {item.resolvedTopic}
                </span>

                <span className={styles.badgeDuration}>
                  {item.duration}
                </span>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <div className={styles.studentMeta}>
                  <h4 className={styles.studentName}>{item.name}</h4>
                  <span className={styles.courseBadge}>{item.course}</span>
                </div>

                <p className={styles.roleText}>{item.role}</p>

                <blockquote className={styles.quoteBox}>
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    className={styles.watchSnippet}
                    onClick={() => setActiveVideo(item)}
                    aria-label={`Watch ${item.name}'s video`}
                  >
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Story ({item.duration})
                  </button>
                  <span className={styles.badgeDoubtMode}>✓ 1-on-1 Solved</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ================= 3-STEP ROADMAP BANNER ================= */}
        <div className={styles.roadmapBox}>
          <div className={styles.roadmapHeader}>
            <h3 className={styles.roadmapTitle}>How 1-on-1 Doubt Support Works in 3 Steps</h3>
            <span className={styles.roadmapBadge}>Unlimited Doubt Sessions For All Enrolled Learners</span>
          </div>

          <div className={styles.roadmapSteps}>
            <div className={styles.roadmapStep}>
              <span className={styles.stepNum}>Step 01 • Instant Ticket</span>
              <span className={styles.stepTitle}>Raise Your Query</span>
              <p className={styles.stepDesc}>
                Post your question, technical error, or screenshot via the student portal or WhatsApp academic desk.
              </p>
            </div>

            <div className={styles.roadmapArrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className={`${styles.roadmapStep} ${styles.highlightStep}`}>
              <span className={styles.stepNum}>Step 02 • Dedicated Slot</span>
              <span className={styles.stepTitle}>1-on-1 Slot Allocation</span>
              <p className={styles.stepDesc}>
                Your academic coordinator schedules a private session with a senior subject matter specialist at your convenience.
              </p>
            </div>

            <div className={styles.roadmapArrow} aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className={styles.roadmapStep}>
              <span className={styles.stepNum}>Step 03 • Zero Doubt</span>
              <span className={styles.stepTitle}>Live Screen-Sharing &amp; Fix</span>
              <p className={styles.stepDesc}>
                Collaborate via screen-share to troubleshoot issues, test live fixes, and achieve 100% conceptual clarity.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <div className={styles.ctaRow}>
          <a href="#bookDemo" className={styles.btnPrimary}>
            Book a Free 1-on-1 Mentor Demo Session
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="https://wa.me/918810606010?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20DizitalAdda%27s%201-on-1%20doubt%20clearing%20and%20academic%20support%20system."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSecondary}
          >
            Chat with Academic Counselor on WhatsApp
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
          aria-label={activeVideo.title || `${activeVideo.name} Doubt Session Video`}
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
                  title={activeVideo.title || `${activeVideo.name} Doubt Resolution Video`}
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
                  Video coming soon for {activeVideo.name || activeVideo.title}
                </div>
              )}
            </div>

            {/* Modal Bottom Details */}
            <div className={styles.modalFooter}>
              <div className={styles.modalStudentInfo}>
                <h4>
                  {activeVideo.name
                    ? `${activeVideo.name} — ${activeVideo.role || activeVideo.course}`
                    : activeVideo.title}
                </h4>
                <p>
                  {activeVideo.resolvedTopic
                    ? `Issue Resolved: ${activeVideo.resolvedTopic} • 1-on-1 Mentor Support`
                    : activeVideo.subtitle}
                </p>
              </div>
              <span className={styles.modalPill}>
                ✓ 1-on-1 Personal Class Guaranteed
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
