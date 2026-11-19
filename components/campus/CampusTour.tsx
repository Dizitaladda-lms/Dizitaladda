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
  note: string;
  src: string;
}

export const CAMPUS_TOUR_CONFIG = {
  // Video URL: plays automatically once when section reaches 50% visibility
  VIDEO_URL: "/event.mp4",

  // Duration for each place photo in the images phase (in milliseconds)
  SLIDE_MS: 3500,

  // 7 Places of DizitalAdda Campus Tour
  PLACES: [
    {
      id: "smart-classroom",
      name: "Smart Classroom",
      note: "Interactive smart screens, ergonomic desks & live case study projection pods",
      src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    },
    {
      id: "workspace",
      name: "Workspace",
      note: "High-speed corporate workstation pods for live marketing & data projects",
      src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "discussion-zone",
      name: "Discussion Zone",
      note: "Collaborative breakout hubs for peer brainstorming and mentor strategy reviews",
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "learning-lab",
      name: "Learning Lab",
      note: "Dedicated high-spec machines configured with 60+ AI, SEO & analytics tools",
      src: "https://images.unsplash.com/photo-1524176741849-3a31f1e4d7b4?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "student-lounge",
      name: "Student Lounge",
      note: "Comfortable breakout lounge to recharge, network and unwind between sessions",
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "library-corner",
      name: "Library Corner",
      note: "Quiet research corner stocked with curated marketing, tech & data science books",
      src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "reception",
      name: "Reception",
      note: "Welcoming reception desk, counselor advisory lounge & student support center",
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
  ] as CampusPlace[],
};

export default function CampusTour() {
  const { VIDEO_URL, SLIDE_MS, PLACES } = CAMPUS_TOUR_CONFIG;

  // Flow Phases: "video" (starts when in view) -> "images" (crossfading loop)
  const [phase, setPhase] = useState<"video" | "images">("video");
  const [videoRemoved, setVideoRemoved] = useState<boolean>(false);
  const [videoFading, setVideoFading] = useState<boolean>(false);

  // Playback & Sound State
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);

  // Slideshow State
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  // Refs
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const placesRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const hasTriggeredPlayRef = useRef<boolean>(false);

  /**
   * Transition from Video to Images Phase:
   * Fade out video and permanently remove it from the DOM.
   */
  const transitionToImages = useCallback(() => {
    if (videoRemoved) return;
    setVideoFading(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    // After 400ms fade transition, remove video completely from DOM
    setTimeout(() => {
      setPhase("images");
      setVideoRemoved(true);
      setActiveIndex(0);
      setProgress(0);
      setIsPlaying(true);
    }, 400);
  }, [videoRemoved]);

  /**
   * 1. IntersectionObserver (threshold: 0.5):
   * Section 50% screen me aane par video auto-play kare.
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
   * Video Auto-play / Resume / Pause based on In-View & Playing State
   */
  useEffect(() => {
    if (phase !== "video" || videoRemoved) return;

    const video = videoRef.current;
    if (!video) return;

    if (isInView && isPlaying) {
      hasTriggeredPlayRef.current = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked autoplay or video error -> transition immediately to images
          transitionToImages();
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, isPlaying, phase, videoRemoved, transitionToImages]);

  /**
   * 4. Images Phase Timer & Progress Bar (3.5 sec per place):
   * Progress bar advances from 0% to 100% over SLIDE_MS.
   * Last image ke baad pehli image se loop ho (video dobara nahi).
   */
  useEffect(() => {
    if (phase !== "images" || !isPlaying || !isInView) return;

    const intervalTime = 50; // Update progress every 50ms
    const stepIncrement = (intervalTime / SLIDE_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + stepIncrement;
        if (nextProgress >= 100) {
          setActiveIndex((current) => (current + 1) % PLACES.length);
          return 0;
        }
        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [phase, isPlaying, isInView, SLIDE_MS, PLACES.length]);

  /**
   * 5. Horizontal Strip Auto-Centering:
   * Active place chip ko strip ke center me scroll karo using scrollLeft.
   * DO NOT USE scrollIntoView (as it scrolls the entire window).
   */
  useEffect(() => {
    if (phase !== "images") return;

    const strip = stripRef.current;
    const activeChip = placesRefs.current[activeIndex];
    if (!strip || !activeChip) return;

    const stripWidth = strip.clientWidth;
    const chipLeft = activeChip.offsetLeft;
    const chipWidth = activeChip.clientWidth;

    // Calculate center offset inside the strip container
    const targetScrollLeft = chipLeft - stripWidth / 2 + chipWidth / 2;

    strip.scrollTo({
      left: Math.max(0, targetScrollLeft),
      behavior: "smooth",
    });
  }, [activeIndex, phase]);

  /**
   * User interaction: Jump to clicked place
   */
  const handleJumpToPlace = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  /**
   * Sound on/off toggle
   */
  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  };

  /**
   * Pause/Play toggle (applicable in both phases)
   */
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const currentPlace = PLACES[activeIndex];

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
              Explore Our <span className="highlight">Campus Tour</span>
            </>
          }
          description="Classrooms, workspaces aur learning spaces jahan students apni skills build karte hain."
        />

        {/* ================= 16:9 CINEMATIC STAGE ================= */}
        <div
          className={styles.stageWrapper}
          role="region"
          aria-label="Campus visual showcase"
        >
          {/* ── PHASE 1: VIDEO (Completely removed from DOM after end/skip) ── */}
          {!videoRemoved && (
            <>
              <video
                ref={videoRef}
                src={VIDEO_URL}
                className={`${styles.videoElement} ${
                  videoFading ? styles.videoFading : ""
                }`}
                playsInline
                muted={isMuted}
                autoPlay
                preload="metadata"
                onEnded={transitionToImages}
                onError={transitionToImages}
                aria-label="Campus tour walkthrough video"
              />

              {/* Video Badge */}
              <div className={styles.videoBadge} aria-hidden="true">
                <span className={styles.liveDot} />
                <span>Live Campus Tour</span>
              </div>

              {/* Video Controls Top Right: Sound & Skip */}
              <div className={styles.videoControlsTop}>
                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={toggleMute}
                  aria-label={isMuted ? "Turn sound on" : "Turn sound off"}
                >
                  {isMuted ? (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                      <span>Sound On</span>
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" fill="none" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                      <span>Mute</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  className={styles.controlBtn}
                  onClick={transitionToImages}
                  aria-label="Skip video and view photo tour"
                >
                  <span>Skip video</span>
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </>
          )}

          {/* ── PHASE 2: CROSSFADING IMAGES (Shown once video is removed) ── */}
          {phase === "images" && (
            <div className={styles.imagesContainer}>
              {PLACES.map((place, index) => {
                const isActive = index === activeIndex;
                const isBroken = brokenImages[place.id];

                return (
                  <div
                    key={place.id}
                    className={`${styles.slideItem} ${
                      isActive ? styles.slideActive : ""
                    }`}
                    aria-hidden={!isActive}
                  >
                    {isBroken ? (
                      /* Clean Gradient Placeholder if Image Fails to Load */
                      <div className={styles.gradientPlaceholder}>
                        <svg
                          className={styles.placeholderIcon}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          aria-hidden="true"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                        <span>{place.name}</span>
                      </div>
                    ) : (
                      <img
                        src={place.src}
                        alt=""
                        className={styles.slideImage}
                        loading={index === 0 ? "eager" : "lazy"}
                        onError={() =>
                          setBrokenImages((prev) => ({
                            ...prev,
                            [place.id]: true,
                          }))
                        }
                      />
                    )}

                    {/* Dark Gradient Overlay with Big Name & Note */}
                    <div className={styles.slideCaption}>
                      <h3 className={styles.placeName}>{place.name}</h3>
                      <p className={styles.placeNote}>{place.note}</p>
                    </div>
                  </div>
                );
              })}

              {/* Progress Bar along the bottom of the stage */}
              <div
                className={styles.progressBarTrack}
                role="progressbar"
                aria-valuenow={Math.round(progress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Slide progress for ${currentPlace?.name}`}
              >
                <div
                  className={styles.progressBarFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* ── BOTH PHASES: PAUSE / PLAY BUTTON (Bottom Left of Stage) ── */}
          <button
            type="button"
            className={styles.stagePlayPauseBtn}
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause tour" : "Play tour"}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24">
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            )}
          </button>
        </div>

        {/* ================= HORIZONTAL PLACES STRIP (IMAGES PHASE ONLY) ================= */}
        {phase === "images" && (
          <div className={styles.stripWrapper}>
            <nav
              ref={stripRef}
              className={styles.placesStrip}
              aria-label="Campus locations navigation"
            >
              {PLACES.map((place, index) => {
                const isCurrent = index === activeIndex;
                const isDone = index < activeIndex;

                return (
                  <button
                    key={place.id}
                    ref={(el) => {
                      placesRefs.current[index] = el;
                    }}
                    type="button"
                    className={`${styles.placeChip} ${
                      isCurrent
                        ? styles.chipCurrent
                        : isDone
                        ? styles.chipDone
                        : ""
                    }`}
                    onClick={() => handleJumpToPlace(index)}
                    aria-current={isCurrent ? "true" : undefined}
                    aria-label={`Go to ${place.name} ${
                      isDone ? "(already viewed)" : isCurrent ? "(current)" : ""
                    }`}
                  >
                    {isDone && (
                      <span className={styles.chipCheck} aria-hidden="true">
                        ✓
                      </span>
                    )}
                    {isCurrent && (
                      <span className={styles.chipDot} aria-hidden="true" />
                    )}
                    <span className={styles.chipLabel}>{place.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}
