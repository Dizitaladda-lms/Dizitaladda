"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

/**
 * RoadmapSection Component (Signature Section)
 * Features:
 * - Desktop: Wide horizontal S-curve SVG road with decorative scenery trees.
 * - Mobile: SEPARATE vertical winding SVG road (not squeezed!).
 * - Flags along the road for each module + Start Flag + Finish Trophy.
 * - Cartoon kid with backpack walking along the path via requestAnimationFrame and getPointAtLength.
 * - Pauses ~1.2s at each flag -> flag waves, card highlights -> un-highlights on leave.
 * - Cards are also tappable to highlight manually.
 * - Pauses when off-screen (IntersectionObserver).
 * - Respects prefers-reduced-motion.
 */
export default function RoadmapSection({ modules }) {
  if (!modules || modules.length === 0) return null;

  const sectionRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [activeModule, setActiveModule] = useState(0);

  // Kid animation coordinates
  const [kidPos, setKidPos] = useState({ x: 50, y: 210, angle: 0, opacity: 1, bob: 0 });

  // Check viewport width for mobile vs desktop SVG road
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // IntersectionObserver to pause animation when off-screen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.1);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Path definitions: Desktop (Horizontal S-curve) & Mobile (Vertical Winding)
  const desktopD = "M 60,220 C 220,60 380,60 550,220 C 720,380 880,380 1040,220";
  const mobileD = "M 180,40 C 70,160 70,240 180,340 C 290,440 290,520 180,620 C 70,720 70,800 180,880";

  // Compute flag stop distances along active path
  const numModules = modules.length;

  useEffect(() => {
    const activePath = isMobile ? mobilePathRef.current : desktopPathRef.current;
    if (!activePath) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const p = activePath.getPointAtLength(0);
      setKidPos({ x: p.x, y: p.y, angle: 0, opacity: 1, bob: 0 });
      return;
    }

    if (!isInView) return;

    const totalLength = activePath.getTotalLength();
    if (!totalLength) return;

    // Distances for each module flag (evenly spaced from 15% to 85% of road)
    const flagDists = modules.map((_, i) => {
      const fraction = 0.15 + (i / Math.max(numModules - 1, 1)) * 0.70;
      return totalLength * fraction;
    });

    let currentDist = 0;
    let animId;
    let isPaused = false;
    let pauseTimer = null;
    let visitedFlags = new Set();
    const speed = 1.6; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        currentDist += speed;

        // Check if kid reached any module flag
        for (let i = 0; i < flagDists.length; i++) {
          const fDist = flagDists[i];
          if (!visitedFlags.has(i) && Math.abs(currentDist - fDist) <= speed * 1.5) {
            isPaused = true;
            visitedFlags.add(i);
            setActiveModule(i);

            pauseTimer = setTimeout(() => {
              isPaused = false;
            }, 1200); // 1.2 second pause
            break;
          }
        }

        // Reached end of path (Finish line)
        if (currentDist >= totalLength) {
          isPaused = true;
          setKidPos((prev) => ({ ...prev, opacity: 0 }));

          pauseTimer = setTimeout(() => {
            currentDist = 0;
            visitedFlags.clear();
            setKidPos((prev) => ({ ...prev, opacity: 1 }));
            isPaused = false;
          }, 800);
        } else {
          // Calculate point & tangent angle
          const p1 = activePath.getPointAtLength(currentDist);
          const p2 = activePath.getPointAtLength(Math.min(currentDist + 2, totalLength));
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);
          const bob = Math.sin(currentDist * 0.12) * 3;

          setKidPos({
            x: p1.x,
            y: p1.y,
            angle: isMobile ? angle - 90 : angle,
            opacity: 1,
            bob,
          });
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      if (pauseTimer) clearTimeout(pauseTimer);
    };
  }, [isInView, isMobile, numModules, modules]);

  return (
    <section
      ref={sectionRef}
      className="dz-section dz-section-lavender"
      id="roadmap"
      aria-labelledby="roadmap-heading"
    >
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="roadmap-heading">
            Your <span className="dz-gradient-text">Learning Roadmap</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Follow our structured, step-by-step curriculum designed to take you from foundational basics
            to an industry-ready data professional.
          </p>
        </div>

        {/* Roadmap Interactive Canvas */}
        <div className="dz-roadmap-stage">
          {/* 1. Desktop Road SVG (Hidden on Mobile) */}
          <svg
            className="dz-roadmap-svg"
            viewBox="0 0 1100 440"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            style={{ display: isMobile ? "none" : "block" }}
          >
            <defs>
              <linearGradient id="dzRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* Decorative Scenery Trees */}
            <g opacity="0.6">
              <circle cx="160" cy="110" r="14" fill="#86efac" />
              <rect x="157" y="122" width="6" height="12" fill="#78350f" rx="2" />

              <circle cx="480" cy="90" r="18" fill="#4ade80" />
              <rect x="477" y="106" width="6" height="14" fill="#78350f" rx="2" />

              <circle cx="820" cy="330" r="16" fill="#86efac" />
              <rect x="817" y="344" width="6" height="12" fill="#78350f" rx="2" />

              <circle cx="980" cy="140" r="15" fill="#4ade80" />
              <rect x="977" y="153" width="6" height="12" fill="#78350f" rx="2" />
            </g>

            {/* Road Base (Dark Gray Curb) */}
            <path
              d={desktopD}
              fill="none"
              stroke="#64748b"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Road Asphalt */}
            <path
              ref={desktopPathRef}
              d={desktopD}
              fill="none"
              stroke="url(#dzRoadGrad)"
              strokeWidth="40"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* White Dashed Center Line */}
            <path
              d={desktopD}
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeDasharray="12 12"
              strokeLinecap="round"
            />

            {/* Start Marker */}
            <g transform="translate(40, 180)">
              <circle cx="20" cy="20" r="18" fill="#10b981" />
              <text x="20" y="25" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800">
                GO
              </text>
            </g>

            {/* Finish Marker (Trophy) */}
            <g transform="translate(1040, 180)">
              <circle cx="20" cy="20" r="20" fill="#f59e0b" />
              <path
                d="M13 14h14v2a7 7 0 0 1-7 7 7 7 0 0 1-7-7v-2zm-3-2h4v4a2 2 0 0 1-2 2h-2zm16 0h4v2a2 2 0 0 1-2 2h-2z"
                fill="#ffffff"
                transform="scale(0.8) translate(3, 3)"
              />
            </g>
          </svg>

          {/* 2. Mobile Road SVG (Separate Vertical Winding Road) */}
          <svg
            className="dz-roadmap-svg"
            viewBox="0 0 360 920"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            style={{ display: isMobile ? "block" : "none" }}
          >
            <defs>
              <linearGradient id="dzRoadGradMob" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#334155" />
              </linearGradient>
            </defs>

            {/* Decorative Trees on Mobile */}
            <g opacity="0.6">
              <circle cx="45" cy="220" r="12" fill="#86efac" />
              <rect x="43" y="230" width="4" height="8" fill="#78350f" rx="1" />

              <circle cx="310" cy="480" r="14" fill="#4ade80" />
              <rect x="308" y="492" width="4" height="10" fill="#78350f" rx="1" />
            </g>

            {/* Road Base */}
            <path
              d={mobileD}
              fill="none"
              stroke="#64748b"
              strokeWidth="44"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Road Asphalt */}
            <path
              ref={mobilePathRef}
              d={mobileD}
              fill="none"
              stroke="url(#dzRoadGradMob)"
              strokeWidth="36"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* White Dashed Center Line */}
            <path
              d={mobileD}
              fill="none"
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="10 10"
              strokeLinecap="round"
            />

            {/* Start Marker */}
            <g transform="translate(160, 15)">
              <circle cx="20" cy="20" r="16" fill="#10b981" />
              <text x="20" y="24" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">
                START
              </text>
            </g>

            {/* Finish Marker */}
            <g transform="translate(160, 860)">
              <circle cx="20" cy="20" r="18" fill="#f59e0b" />
              <text x="20" y="24" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800">
                HIRED
              </text>
            </g>
          </svg>

          {/* 3. Original Cartoon Kid Character (Animated along path) */}
          <div
            className="dz-kid-character"
            style={{
              transform: `translate(${kidPos.x - 24}px, ${kidPos.y - 24 + kidPos.bob}px) rotate(${kidPos.angle}deg)`,
              opacity: kidPos.opacity,
            }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 48 48" width="100%" height="100%">
              {/* Backpack */}
              <rect x="6" y="16" width="10" height="14" rx="3" fill="#ea580c" />
              <rect x="7" y="18" width="8" height="4" rx="1" fill="#fed7aa" />

              {/* Legs / Sneakers */}
              <rect x="18" y="32" width="4" height="10" fill="#1e293b" rx="2" />
              <rect x="26" y="32" width="4" height="10" fill="#1e293b" rx="2" />
              <ellipse cx="20" cy="42" rx="4" ry="2.5" fill="#dc2626" />
              <ellipse cx="28" cy="42" rx="4" ry="2.5" fill="#dc2626" />

              {/* Body & Shirt */}
              <rect x="15" y="17" width="18" height="16" rx="4" fill="#7c3aed" />
              <path d="M15 17 Q24 22 33 17" fill="#6d28d9" />

              {/* Head / Face */}
              <circle cx="24" cy="11" r="9" fill="#fed7aa" />
              {/* Eyes */}
              <circle cx="27" cy="10" r="1.3" fill="#1e293b" />
              <circle cx="22" cy="10" r="1.3" fill="#1e293b" />
              {/* Smile */}
              <path d="M22 14 Q24 16 26 14" stroke="#1e293b" strokeWidth="1" fill="none" />

              {/* Hair & Cap */}
              <path d="M15 9 C15 3 33 3 33 9 Z" fill="#9333ea" />
              {/* Cap Visor */}
              <path d="M26 6 L35 7 L28 10 Z" fill="#c026d3" />
            </svg>
          </div>

          {/* 4. Module Cards Grid (Clickable, syncs with kid position) */}
          <div className="dz-module-cards-grid">
            {modules.map((m, idx) => {
              const isHighlighted = activeModule === idx;

              return (
                <div
                  key={m.month || idx}
                  className={`dz-module-card ${isHighlighted ? "dz-card-highlighted" : ""}`}
                  onClick={() => setActiveModule(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Module ${m.month}: ${m.title}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveModule(idx);
                    }
                  }}
                >
                  <div className="dz-module-header">
                    <span className="dz-module-pill">Month {m.month || idx + 1}</span>
                    {isHighlighted && (
                      <span className="dz-flag-node dz-flag-active" title="Kid is here!">
                        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                          <line x1="4" y1="2" x2="4" y2="22" stroke="#4b5563" strokeWidth="2.5" />
                          <polygon
                            points="4,3 20,8 4,13"
                            fill="#7c3aed"
                            className="dz-flag-pennant"
                          />
                        </svg>
                      </span>
                    )}
                  </div>

                  <h3 className="dz-module-title">{m.title}</h3>

                  {m.topics && m.topics.length > 0 && (
                    <ul className="dz-topics-list">
                      {m.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="dz-topic-item">
                          <span className="dz-topic-dot" aria-hidden="true" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Finish Line Trophy Card */}
          <div className="dz-finish-badge">
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M19 4h-3V2H8v2H5c-1.1 0-2 .9-2 2v3c0 2.5 1.9 4.6 4.3 4.9.7 1.4 1.9 2.5 3.4 3V19H8v2h8v-2h-2.7v-2.1c1.5-.5 2.7-1.6 3.4-3 2.4-.3 4.3-2.4 4.3-4.9V6c0-1.1-.9-2-2-2zM5 9V6h3v5.1C6.2 10.7 5 10 5 9zm14 0c0 1-1.2 1.7-3 2.1V6h3v3z" />
            </svg>
            <span>Placement Ready Graduate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
