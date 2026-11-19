"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import SectionHeader from "../SectionHeader";
import styles from "./CampusTour.module.css";

/**
 * ============================================================================
 * CAMPUS TOUR CONFIGURATION
 * Baad me video ya places ke photo / text badalne ke liye yahan edit karein.
 * ============================================================================
 */
export interface CampusPlace {
  id: string;
  name: string;
  src: string;
  alt: string;
  fromSide: "left" | "top" | "bottom" | "right";
  gridClass: string;
}

export const CAMPUS_TOUR_CONFIG = {
  // Video URL: plays automatically once when section reaches 50% visibility
  VIDEO_URL: "/event.mp4",

  // 7 Places of DizitalAdda Campus in exact staggered reveal order
  PLACES: [
    {
      id: "smart-classroom",
      name: "Smart classroom",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
      alt: "Smart classroom with interactive smart screens and ergonomic desks",
      fromSide: "left",
      gridClass: styles.tileSmartClassroom,
    },
    {
      id: "workspace",
      name: "Workspace",
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      alt: "Open-plan corporate workstation pods for live client projects",
      fromSide: "top",
      gridClass: styles.tileWorkspace,
    },
    {
      id: "discussion-zone",
      name: "Discussion zone",
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
      alt: "Collaborative breakout hubs for peer brainstorming and mentor reviews",
      fromSide: "bottom",
      gridClass: styles.tileDiscussionZone,
    },
    {
      id: "learning-lab",
      name: "Learning lab",
      // Verified 200 OK replacement for previously broken Unsplash URL:
      src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      alt: "Students learning together in a bright training room",
      fromSide: "right",
      gridClass: styles.tileLearningLab,
    },
    {
      id: "student-lounge",
      name: "Student lounge",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Comfortable breakout lounge to recharge and unwind between sessions",
      fromSide: "left",
      gridClass: styles.tileStudentLounge,
    },
    {
      id: "library-corner",
      name: "Library corner",
      src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
      alt: "Quiet research corner stocked with curated marketing and tech books",
      fromSide: "bottom",
      gridClass: styles.tileLibraryCorner,
    },
    {
      id: "reception",
      name: "Reception",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      alt: "Welcoming reception desk, counselor advisory lounge and support center",
      fromSide: "right",
      gridClass: styles.tileReception,
    },
  ] as CampusPlace[],
};

export default function CampusTour() {
  const { VIDEO_URL, PLACES } = CAMPUS_TOUR_CONFIG;

  // Phase: "video" (starts autoplay when in view) -> "grid" (staggered tile reveals)
  const [phase, setPhase] = useState<"video" | "grid">("video");
  const [videoFading, setVideoFading] = useState<boolean>(false);
  const [videoRemoved, setVideoRemoved] = useState<boolean>(false);

  // Playback & Sound State
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);

  // Error tracker for images
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStartedRef = useRef<boolean>(false);

  /**
   * Transition to Grid Phase:
   * 1. Fades out & scales down video (400ms).
   * 2. Smoothly transitions stage aspect-ratio from 1918/964 to 2.74.
   * 3. Permanently removes video from DOM.
   * 4. Triggers staggered slide-in fly-in animation for each grid tile.
   */
  const transitionToGrid = useCallback(() => {
    if (videoRemoved) return;
    setVideoFading(true);

    if (videoRef.current) {
      videoRef.current.pause();
    }

    // Switch stage aspect-ratio smoothly to 2.74
    setPhase("grid");

    // After fade-out finishes, permanently unmount video from DOM
    setTimeout(() => {
      setVideoRemoved(true);
    }, 420);
  }, [videoRemoved]);

  /**
   * IntersectionObserver (threshold: 0.5):
   * Section 50% screen me aane par video auto-play ho.
   * Screen se bahar jane par pause ho, wapas aane par resume.
   */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.5;
        setIsInView(visible);
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /**
   * Video Auto-play / Resume / Pause logic
   */
  useEffect(() => {
    if (phase !== "video" || videoRemoved) return;

    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      hasStartedRef.current = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy rejects autoplay or video fails to load,
          // instantly start grid animation
          transitionToGrid();
        });
      }
    } else if (hasStartedRef.current) {
      video.pause();
    }
  }, [isInView, phase, videoRemoved, transitionToGrid]);

  /**
   * Video Progress Bar updater
   */
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration) {
      setVideoProgress((video.currentTime / video.duration) * 100);
    }
  };

  /**
   * Toggle Sound On / Off
   */
  const toggleSound = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  return (
    <section
      ref={sectionRef}
      className={styles.tourSection}
      id="campus-tour"
      aria-label="Campus Tour Experience"
    >
      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <SectionHeader
          align="center"
          label="Inside DizitalAdda"
          title={
            <>
              Campus <span className="highlight">tour</span>
            </>
          }
          description="Classrooms, workspaces aur learning spaces jahan students apni skills build karte hain."
        />

        {/* ================= STAGE: VIDEO -> GRID REVEAL ================= */}
        <div
          className={`${styles.stage} ${
            phase === "grid" ? styles.stageGrid : ""
          }`}
          role="region"
          aria-label="Campus visual showcase"
        >
          {/* ── 1. VIDEO LAYER (Completely removed from DOM after end/skip) ── */}
          {!videoRemoved && (
            <div
              className={`${styles.videoWrapper} ${
                videoFading ? styles.videoFading : ""
              }`}
            >
              <video
                ref={videoRef}
                src={VIDEO_URL}
                className={styles.videoElement}
                playsInline
                muted={isMuted}
                autoPlay
                preload="auto"
                onEnded={transitionToGrid}
                onError={transitionToGrid}
                onTimeUpdate={handleTimeUpdate}
                aria-label="Campus tour walkthrough video"
              />

              {/* Live Badge */}
              <div className={styles.videoBadge} aria-hidden="true">
                <span className={styles.liveDot} />
                <span>Live Campus Tour</span>
              </div>

              {/* Video Controls Top-Right: Sound & Skip */}
              <div className={styles.videoControlsTop}>
                <button
                  type="button"
                  className={styles.pillBtn}
                  onClick={toggleSound}
                  aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
                >
                  {isMuted ? (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={styles.btnIcon}
                        aria-hidden="true"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                      <span>Sound off</span>
                    </>
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={styles.btnIcon}
                        aria-hidden="true"
                      >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                      <span>Sound on</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className={`${styles.pillBtn} ${styles.skipBtn}`}
                  onClick={transitionToGrid}
                  aria-label="Skip video and view photo grid"
                >
                  <span>Skip video</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={styles.btnIcon}
                    aria-hidden="true"
                  >
                    <polygon points="5 4 15 12 5 20 5 4" />
                    <line x1="19" y1="5" x2="19" y2="19" />
                  </svg>
                </button>
              </div>

              {/* Thin Bottom Progress Bar */}
              <div
                className={styles.progressBarTrack}
                role="progressbar"
                aria-valuenow={Math.round(videoProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Campus tour video progress"
              >
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${videoProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* ── 2. FINAL GRID LAYER (Staggered fly-in animation) ── */}
          <div
            className={`${styles.grid} ${
              phase === "grid" ? styles.gridActive : styles.gridHidden
            }`}
            aria-hidden={phase !== "grid"}
          >
            {PLACES.map((place, index) => {
              const isBroken = brokenImages[place.id];

              return (
                <div
                  key={place.id}
                  className={`${styles.tile} ${place.gridClass}`}
                  data-side={place.fromSide}
                  style={
                    {
                      "--i": index,
                    } as React.CSSProperties
                  }
                >
                  {isBroken ? (
                    <div
                      className={styles.gradientPlaceholder}
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className={styles.placeholderIcon}
                      >
                        <rect x="3" y="3" width="18" height="18" rx="3" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="M21 15l-5-5L5 21" />
                      </svg>
                      <span className={styles.placeholderText}>
                        Campus Zone
                      </span>
                    </div>
                  ) : (
                    <img
                      src={place.src}
                      alt={place.alt}
                      className={styles.tileImage}
                      loading="lazy"
                      onError={() =>
                        setBrokenImages((prev) => ({
                          ...prev,
                          [place.id]: true,
                        }))
                      }
                    />
                  )}

                  {/* Dark Gradient Overlay (Bottom 45% height) */}
                  <div className={styles.tileOverlay} aria-hidden="true" />

                  {/* Place Caption at Bottom-Left */}
                  <h3 className={styles.tileCaption}>{place.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
