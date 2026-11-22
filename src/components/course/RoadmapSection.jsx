"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";

/**
 * RoadmapSection Component (Signature Interactive Learning Journey)
 * 
 * Requirements:
 * 1. Proper road prominently displayed edge-to-edge (outside container).
 * 2. Milestone flags planted along the road for each module (M1, M2, M3...).
 * 3. Cards are NOT shown initially.
 * 4. As the student/kid arrives at a flag, that milestone's card appears.
 * 5. As the kid moves forward, the previous card disappears.
 * 6. At the next flag, the next card appears.
 * 7. Calm, smooth walking speed ("aram se") with 4s pause per milestone.
 * 8. 100% full screen edge-to-edge layout without container constraints.
 */
export default function RoadmapSection({ modules }) {
  if (!modules || modules.length === 0) return null;

  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const desktopPathRef = useRef(null);
  const mobilePathRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isAutoWalking, setIsAutoWalking] = useState(true);

  // Active module card state
  const [activeModule, setActiveModule] = useState(null);
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isFinishCelebration, setIsFinishCelebration] = useState(false);

  // Flag positions along the active road
  const [flagPoints, setFlagPoints] = useState([]);

  // Student character coordinates & animation state
  const [kidPos, setKidPos] = useState({
    x: 40,
    y: 380,
    angle: 0,
    bob: 0,
    legSwing: 0,
    opacity: 1,
  });
  const [isPausedAtFlag, setIsPausedAtFlag] = useState(false);

  // Road SVG Curves
  // Desktop: Gentle widescreen S-curve (ViewBox: 0 0 1600 560)
  const desktopD = "M 0,380 C 260,250 460,250 720,370 C 980,480 1180,480 1400,370 C 1480,330 1540,330 1600,370";
  // Mobile: Serpentine vertical road (ViewBox: 0 0 380 960)
  const mobileD = "M 190,40 C 70,160 70,250 190,360 C 310,470 310,560 190,670 C 70,780 70,860 190,950";

  // Check mobile vs desktop breakpoint
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // IntersectionObserver to pause heavy animation when off-screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.08);
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Compute flag positions along the active path
  const numModules = modules.length;
  useEffect(() => {
    const activePath = isMobile ? mobilePathRef.current : desktopPathRef.current;
    if (!activePath) return;

    try {
      const totalLength = activePath.getTotalLength();
      if (!totalLength) return;

      const points = modules.map((m, i) => {
        const startFrac = isMobile ? 0.20 : 0.16;
        const endFrac = isMobile ? 0.82 : 0.84;
        const frac = numModules === 1 ? 0.5 : startFrac + (i / (numModules - 1)) * (endFrac - startFrac);
        const dist = totalLength * frac;
        const pt = activePath.getPointAtLength(dist);

        return {
          index: i,
          dist,
          x: pt.x,
          y: pt.y,
          month: m.month || i + 1,
        };
      });

      setFlagPoints(points);

      // Set initial kid position at start of road
      const startPt = activePath.getPointAtLength(0);
      setKidPos({
        x: startPt.x,
        y: startPt.y,
        angle: 0,
        bob: 0,
        legSwing: 0,
        opacity: 1,
      });
    } catch {
      // Fallback if SVG not rendered yet
    }
  }, [isMobile, numModules, modules]);

  // Main Walking Animation Loop
  const currentDistRef = useRef(0);
  const animFrameRef = useRef(null);
  const pauseTimerRef = useRef(null);
  const fadeOutTimerRef = useRef(null);
  const visitedFlagsRef = useRef(new Set());

  // Function to jump to a specific module
  const jumpToModule = useCallback(
    (idx) => {
      if (!flagPoints[idx]) return;

      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);

      const target = flagPoints[idx];
      currentDistRef.current = target.dist;
      visitedFlagsRef.current.add(idx);

      setKidPos((prev) => ({
        ...prev,
        x: target.x,
        y: target.y,
        bob: 0,
        legSwing: 0,
        opacity: 1,
      }));

      setIsPausedAtFlag(true);
      setActiveModule(idx);
      setIsCardVisible(true);
      setIsFinishCelebration(false);
    },
    [flagPoints]
  );

  useEffect(() => {
    const activePath = isMobile ? mobilePathRef.current : desktopPathRef.current;
    if (!activePath || !isInView || !isAutoWalking || flagPoints.length === 0) return;

    // Check user system preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      if (flagPoints[0]) {
        setKidPos({ x: flagPoints[0].x, y: flagPoints[0].y, angle: 0, bob: 0, legSwing: 0, opacity: 1 });
        setActiveModule(0);
        setIsCardVisible(true);
      }
      return;
    }

    const totalLength = activePath.getTotalLength();
    if (!totalLength) return;

    // Calm, steady walking speed (~36px/sec at 60fps)
    const speed = isMobile ? 0.6 : 0.65;
    let isPaused = isPausedAtFlag;

    const animate = () => {
      if (!isPaused) {
        currentDistRef.current += speed;

        // 1. Check if kid has arrived at any module flag
        for (let i = 0; i < flagPoints.length; i++) {
          const flag = flagPoints[i];
          if (!visitedFlagsRef.current.has(i) && Math.abs(currentDistRef.current - flag.dist) <= speed * 1.6) {
            isPaused = true;
            setIsPausedAtFlag(true);
            visitedFlagsRef.current.add(i);

            // Snap kid directly to flag
            currentDistRef.current = flag.dist;
            setKidPos((prev) => ({
              ...prev,
              x: flag.x,
              y: flag.y,
              bob: 0,
              legSwing: 0,
            }));

            // SHOW the milestone card
            setActiveModule(i);
            setIsCardVisible(true);

            // Hide card 350ms before resuming walk
            fadeOutTimerRef.current = setTimeout(() => {
              setIsCardVisible(false);
            }, 3650);

            // Resume walking after 4000ms pause (calm reading time)
            pauseTimerRef.current = setTimeout(() => {
              isPaused = false;
              setIsPausedAtFlag(false);
            }, 4000);

            break;
          }
        }

        // 2. Check if kid reached Finish Line
        if (currentDistRef.current >= totalLength) {
          isPaused = true;
          setIsPausedAtFlag(true);
          setIsFinishCelebration(true);
          setIsCardVisible(false);

          pauseTimerRef.current = setTimeout(() => {
            // Smoothly reset back to start
            currentDistRef.current = 0;
            visitedFlagsRef.current.clear();
            setIsFinishCelebration(false);
            setActiveModule(null);
            setIsCardVisible(false);

            const startPt = activePath.getPointAtLength(0);
            setKidPos({
              x: startPt.x,
              y: startPt.y,
              angle: 0,
              bob: 0,
              legSwing: 0,
              opacity: 1,
            });

            isPaused = false;
            setIsPausedAtFlag(false);
          }, 3500);
        } else if (!isPaused) {
          // Calculate kid coordinates along curve
          const p1 = activePath.getPointAtLength(currentDistRef.current);
          const p2 = activePath.getPointAtLength(Math.min(currentDistRef.current + 2, totalLength));
          const dx = p2.x - p1.x;
          const dy = p2.y - p1.y;
          const angle = Math.atan2(dy, dx) * (180 / Math.PI);

          // Calm walking bob and sneaker swing
          const walkCycle = currentDistRef.current * 0.14;
          const bob = Math.sin(walkCycle) * 2.5;
          const legSwing = Math.sin(walkCycle) * 12;

          setKidPos({
            x: p1.x,
            y: p1.y,
            angle: isMobile ? angle - 90 : angle,
            bob,
            legSwing,
            opacity: 1,
          });
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
      if (fadeOutTimerRef.current) clearTimeout(fadeOutTimerRef.current);
    };
  }, [isInView, isAutoWalking, isMobile, flagPoints, isPausedAtFlag]);

  // Current active flag data
  const currentFlag = activeModule !== null ? flagPoints[activeModule] : null;

  return (
    <section
      ref={sectionRef}
      className="dz-section dz-section-lavender dz-roadmap-section"
      id="roadmap"
      aria-labelledby="roadmap-heading"
    >
      {/* 1. Header is inside dz-container for centered alignment */}
      <div className="dz-container">
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="roadmap-heading">
            Your <span className="dz-gradient-text">Learning Roadmap</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Follow our structured, step-by-step curriculum designed to take you from foundational basics
            to an industry-ready career professional.
          </p>
        </div>
      </div>

      {/* 2. ROADMAP CANVAS - FULL SCREEN EDGE-TO-EDGE (NOT INSIDE CONTAINER) */}
      <div className="dz-roadmap-fullscreen-stage" ref={stageRef}>
        {/* ====================================================================
            A) DESKTOP WIDESCREEN ROAD SVG (Hidden on Mobile)
           ==================================================================== */}
        <svg
          className="dz-roadmap-svg"
          viewBox="0 0 1600 560"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ display: isMobile ? "none" : "block" }}
        >
          <defs>
            {/* Asphalt Highway Gradient */}
            <linearGradient id="dzRoadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="35%" stopColor="#0f172a" />
              <stop offset="70%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>

            {/* Inactive Flag Gradient */}
            <linearGradient id="dzFlagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6d28d9" />
            </linearGradient>

            {/* Active Highlighted Flag Gradient */}
            <linearGradient id="dzFlagGradActive" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="50%" stopColor="#9333ea" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
          </defs>

          {/* Decorative Scenery Trees & Nature */}
          <g opacity="0.75">
            {/* Top row trees */}
            <circle cx="140" cy="190" r="16" fill="#86efac" />
            <rect x="137" y="204" width="6" height="14" fill="#78350f" rx="2" />

            <circle cx="560" cy="180" r="18" fill="#4ade80" />
            <rect x="557" y="196" width="6" height="16" fill="#78350f" rx="2" />

            <circle cx="890" cy="270" r="20" fill="#86efac" />
            <rect x="887" y="288" width="6" height="16" fill="#78350f" rx="2" />

            <circle cx="1260" cy="230" r="18" fill="#4ade80" />
            <rect x="1257" y="246" width="6" height="14" fill="#78350f" rx="2" />

            {/* Bottom row trees */}
            <circle cx="290" cy="450" r="16" fill="#86efac" />
            <rect x="287" y="464" width="6" height="14" fill="#78350f" rx="2" />

            <circle cx="780" cy="500" r="22" fill="#4ade80" />
            <rect x="777" y="520" width="6" height="16" fill="#78350f" rx="2" />

            <circle cx="1140" cy="520" r="18" fill="#86efac" />
            <rect x="1137" y="536" width="6" height="14" fill="#78350f" rx="2" />

            <circle cx="1490" cy="460" r="16" fill="#4ade80" />
            <rect x="1487" y="474" width="6" height="14" fill="#78350f" rx="2" />
          </g>

          {/* Road Curb Base (Dark Slate Border) */}
          <path
            d={desktopD}
            fill="none"
            stroke="#475569"
            strokeWidth="56"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Road Asphalt Highway */}
          <path
            ref={desktopPathRef}
            d={desktopD}
            fill="none"
            stroke="url(#dzRoadGrad)"
            strokeWidth="48"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Road Outer Edge White Markings */}
          <path
            d={desktopD}
            fill="none"
            stroke="#ffffff"
            strokeWidth="46"
            strokeDasharray="0 48"
            strokeLinecap="round"
            opacity="0.15"
          />

          {/* Center White Dashed Lane Line */}
          <path
            d={desktopD}
            fill="none"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeDasharray="14 14"
            strokeLinecap="round"
          />

          {/* Start Line Marker */}
          <g transform="translate(10, 345)">
            <rect x="0" y="0" width="36" height="70" rx="18" fill="#10b981" />
            <text x="18" y="42" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="800">
              START
            </text>
          </g>

          {/* Finish Line Trophy Marker */}
          <g transform="translate(1545, 335)">
            <circle cx="25" cy="35" r="25" fill="#f59e0b" stroke="#ffffff" strokeWidth="2" />
            <path
              d="M16 19h18v3a9 9 0 0 1-9 9 9 9 0 0 1-9-9v-3zm-4-3h5v5a3 3 0 0 1-3 3h-2zm22 0h5v3a3 3 0 0 1-3 3h-2zm-9 16v4h6v3H14v-3h6v-4z"
              fill="#ffffff"
              transform="scale(0.7) translate(10, 10)"
            />
          </g>

          {/* Milestone Flags Along the Road */}
          {flagPoints.map((flag, idx) => {
            const isActive = activeModule === idx && isCardVisible;

            return (
              <g
                key={idx}
                className={`dz-road-flag ${isActive ? "dz-road-flag-active" : ""}`}
                onClick={() => jumpToModule(idx)}
                style={{ cursor: "pointer" }}
              >
                {/* Active Pulsing Ring */}
                {isActive && (
                  <circle
                    cx={flag.x}
                    cy={flag.y}
                    r="22"
                    fill="none"
                    stroke="#c026d3"
                    strokeWidth="3"
                    className="dz-flag-pulse-ring"
                  />
                )}

                {/* Roadside Ground Marker */}
                <circle
                  cx={flag.x}
                  cy={flag.y}
                  r="7"
                  fill="#0f172a"
                  stroke={isActive ? "#c026d3" : "#7c3aed"}
                  strokeWidth="2.5"
                />
                <circle cx={flag.x} cy={flag.y} r="2.5" fill="#ffffff" />

                {/* Flagpole */}
                <line
                  x1={flag.x}
                  y1={flag.y}
                  x2={flag.x}
                  y2={flag.y - 58}
                  stroke="#475569"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx={flag.x} cy={flag.y - 60} r="4" fill="#fbbf24" />

                {/* Pennant Flag */}
                <g transform={`translate(${flag.x}, ${flag.y - 60})`}>
                  <path
                    d="M 0,0 L 46,12 L 0,26 Z"
                    fill={isActive ? "url(#dzFlagGradActive)" : "url(#dzFlagGrad)"}
                    className={isActive ? "dz-flag-pennant-wave" : ""}
                  />
                  <text
                    x="15"
                    y="16"
                    fill="#ffffff"
                    fontSize="11"
                    fontWeight="800"
                    fontFamily="system-ui, sans-serif"
                  >
                    M{flag.month}
                  </text>
                </g>

                {/* Ground Label Badge */}
                <g transform={`translate(${flag.x}, ${flag.y + 14})`}>
                  <rect
                    x="-30"
                    y="0"
                    width="60"
                    height="18"
                    rx="9"
                    fill="#ffffff"
                    stroke={isActive ? "#7c3aed" : "#cbd5e1"}
                    strokeWidth="1.5"
                  />
                  <text
                    x="0"
                    y="13"
                    textAnchor="middle"
                    fill={isActive ? "#7c3aed" : "#475569"}
                    fontSize="10"
                    fontWeight="750"
                  >
                    Month {flag.month}
                  </text>
                </g>
              </g>
            );
          })}

          {/* Student Character Walking on Desktop Road */}
          <g
            transform={`translate(${kidPos.x}, ${kidPos.y + kidPos.bob}) rotate(${kidPos.angle})`}
            opacity={kidPos.opacity}
            style={{ transition: "opacity 0.3s ease" }}
          >
            {/* Ground shadow under character */}
            <ellipse cx="0" cy="18" rx="14" ry="5" fill="#0f172a" opacity="0.4" />

            {/* Backpack on the back */}
            <rect x="-19" y="-8" width="10" height="18" rx="3" fill="#ea580c" />
            <rect x="-18" y="-6" width="8" height="5" rx="1.5" fill="#fed7aa" />
            <rect x="-18" y="1" width="8" height="7" rx="1.5" fill="#c2410c" />

            {/* Legs with walking swing */}
            <g>
              <rect
                x="-6"
                y="10"
                width="5"
                height="12"
                rx="2"
                fill="#1e293b"
                transform={`rotate(${kidPos.legSwing})`}
              />
              <ellipse cx="-4" cy="22" rx="5" ry="3" fill="#dc2626" />
              <ellipse cx="-3" cy="22" rx="2" ry="1.5" fill="#ffffff" />

              <rect
                x="2"
                y="10"
                width="5"
                height="12"
                rx="2"
                fill="#1e293b"
                transform={`rotate(${-kidPos.legSwing})`}
              />
              <ellipse cx="4" cy="22" rx="5" ry="3" fill="#dc2626" />
              <ellipse cx="5" cy="22" rx="2" ry="1.5" fill="#ffffff" />
            </g>

            {/* Purple Institute Hoodie */}
            <rect x="-10" y="-10" width="20" height="22" rx="5" fill="#7c3aed" />
            <path d="M-10,-10 Q0,-4 10,-10" fill="#6d28d9" />
            <rect x="-6" y="2" width="12" height="7" rx="2" fill="#6d28d9" />

            {/* Face & Cap */}
            <circle cx="0" cy="-18" r="11" fill="#fed7aa" />
            <circle cx="-3" cy="-19" r="1.5" fill="#1e293b" />
            <circle cx="4" cy="-19" r="1.5" fill="#1e293b" />
            <circle cx="-2.5" cy="-19.5" r="0.5" fill="#ffffff" />
            <circle cx="4.5" cy="-19.5" r="0.5" fill="#ffffff" />
            <ellipse cx="-6" cy="-16" rx="2" ry="1.2" fill="#fca5a5" opacity="0.6" />
            <ellipse cx="7" cy="-16" rx="2" ry="1.2" fill="#fca5a5" opacity="0.6" />
            <path d="M-2,-14 Q0,-12 3,-14" stroke="#1e293b" strokeWidth="1.4" strokeLinecap="round" fill="none" />

            {/* Cap */}
            <path d="M-11,-20 C-11,-28 11,-28 11,-20 Z" fill="#9333ea" />
            <path d="M2,-24 L14,-22 L6,-18 Z" fill="#c026d3" />

            {/* Waving hand when stopped at flag */}
            {isPausedAtFlag && (
              <g transform="translate(10, -8)">
                <path d="M0,0 Q6,-8 10,-6" stroke="#fed7aa" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                <circle cx="10" cy="-6" r="2.5" fill="#fed7aa" />
              </g>
            )}
          </g>
        </svg>

        {/* ====================================================================
            B) MOBILE VERTICAL ROAD SVG (Displayed when screen < 768px)
           ==================================================================== */}
        <svg
          className="dz-roadmap-svg"
          viewBox="0 0 380 960"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{ display: isMobile ? "block" : "none" }}
        >
          {/* Mobile road base */}
          <path
            d={mobileD}
            fill="none"
            stroke="#475569"
            strokeWidth="50"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Mobile asphalt */}
          <path
            ref={mobilePathRef}
            d={mobileD}
            fill="none"
            stroke="url(#dzRoadGrad)"
            strokeWidth="42"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Center line */}
          <path
            d={mobileD}
            fill="none"
            stroke="#ffffff"
            strokeWidth="3"
            strokeDasharray="10 10"
            strokeLinecap="round"
          />

          {/* Start marker */}
          <g transform="translate(190, 35)">
            <circle cx="0" cy="0" r="18" fill="#10b981" />
            <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800">
              START
            </text>
          </g>

          {/* Finish marker */}
          <g transform="translate(190, 940)">
            <circle cx="0" cy="0" r="22" fill="#f59e0b" />
            <text x="0" y="5" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="800">
              HIRED
            </text>
          </g>

          {/* Mobile Flags */}
          {flagPoints.map((flag, idx) => {
            const isActive = activeModule === idx && isCardVisible;
            return (
              <g
                key={idx}
                className={`dz-road-flag ${isActive ? "dz-road-flag-active" : ""}`}
                onClick={() => jumpToModule(idx)}
              >
                {isActive && (
                  <circle
                    cx={flag.x}
                    cy={flag.y}
                    r="20"
                    fill="none"
                    stroke="#c026d3"
                    strokeWidth="3"
                    className="dz-flag-pulse-ring"
                  />
                )}
                <circle cx={flag.x} cy={flag.y} r="7" fill="#0f172a" stroke="#7c3aed" strokeWidth="2.5" />
                <circle cx={flag.x} cy={flag.y} r="2.5" fill="#ffffff" />
                <line x1={flag.x} y1={flag.y} x2={flag.x} y2={flag.y - 40} stroke="#475569" strokeWidth="3" />
                <path
                  d={`M ${flag.x},${flag.y - 40} L ${flag.x + 32},${flag.y - 30} L ${flag.x},${flag.y - 20} Z`}
                  fill={isActive ? "#c026d3" : "#7c3aed"}
                />
                <text x={flag.x + 12} y={flag.y - 27} fill="#ffffff" fontSize="9" fontWeight="800">
                  M{flag.month}
                </text>
              </g>
            );
          })}

          {/* Mobile Student Character */}
          <g transform={`translate(${kidPos.x}, ${kidPos.y + kidPos.bob}) rotate(${kidPos.angle})`}>
            <ellipse cx="0" cy="14" rx="12" ry="4" fill="#0f172a" opacity="0.4" />
            <rect x="-8" y="-8" width="16" height="18" rx="4" fill="#7c3aed" />
            <circle cx="0" cy="-14" r="9" fill="#fed7aa" />
            <circle cx="-2" cy="-15" r="1.2" fill="#1e293b" />
            <circle cx="3" cy="-15" r="1.2" fill="#1e293b" />
            <path d="M-8,-16 C-8,-22 8,-22 8,-16 Z" fill="#9333ea" />
          </g>
        </svg>

        {/* ====================================================================
            C) DYNAMIC ACTIVE MODULE CARD
            Shown ONLY when kid reaches a flag; disappears when leaving!
           ==================================================================== */}
        {activeModule !== null && modules[activeModule] && (
          <div
            className={`dz-roadmap-popup-card ${isCardVisible ? "dz-card-enter" : "dz-card-leave"}`}
            style={{
              left: isMobile
                ? "16px"
                : currentFlag
                ? `clamp(20px, calc(${(currentFlag.x / 1600) * 100}% - 190px), calc(100% - 400px))`
                : "50%",
              top: isMobile
                ? "24px"
                : currentFlag
                ? `${Math.max(20, Math.min(270, currentFlag.y - 280))}px`
                : "40px",
            }}
            role="region"
            aria-live="polite"
            aria-label={`Details for Month ${modules[activeModule].month || activeModule + 1}`}
          >
            {/* Pointer arrow to flag (Desktop) */}
            {!isMobile && <div className="dz-popup-pointer" />}

            {/* Header */}
            <div className="dz-popup-header">
              <div className="dz-popup-badge-group">
                <span className="dz-popup-month-pill">
                  Month {modules[activeModule].month || activeModule + 1}
                </span>
                <span className="dz-popup-milestone-tag">
                  <span className="dz-status-beacon" /> Current Stop
                </span>
              </div>
              <button
                type="button"
                className="dz-popup-close-btn"
                onClick={() => setIsCardVisible(false)}
                aria-label="Close card"
              >
                ×
              </button>
            </div>

            {/* Title */}
            <h3 className="dz-popup-title">{modules[activeModule].title}</h3>

            {/* Topics */}
            {modules[activeModule].topics && modules[activeModule].topics.length > 0 && (
              <ul className="dz-popup-topics-list">
                {modules[activeModule].topics.map((topic, tIdx) => (
                  <li key={tIdx} className="dz-popup-topic-item">
                    <span className="dz-popup-topic-check">✓</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Finish Line Celebration Banner */}
        {isFinishCelebration && (
          <div className="dz-roadmap-finish-celebration">
            <div className="dz-finish-trophy-icon">🏆</div>
            <div className="dz-finish-text-group">
              <h3 className="dz-finish-title">Curriculum Completed!</h3>
              <p className="dz-finish-sub">Placement Ready Graduate • Industry Certified</p>
            </div>
          </div>
        )}

        {/* ====================================================================
            D) BOTTOM INTERACTIVE CONTROL BAR
            Pill buttons to jump directly to any month + Pause/Resume toggle
           ==================================================================== */}
        <div className="dz-roadmap-bottom-bar">
          <div className="dz-milestones-track">
            {modules.map((m, idx) => {
              const isActive = activeModule === idx && isCardVisible;
              return (
                <button
                  key={idx}
                  type="button"
                  className={`dz-milestone-pill-btn ${isActive ? "dz-milestone-active" : ""}`}
                  onClick={() => jumpToModule(idx)}
                >
                  <span className="dz-pill-num">{idx + 1}</span>
                  <span className="dz-pill-label">Month {m.month || idx + 1}</span>
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="dz-walk-toggle-btn"
            onClick={() => setIsAutoWalking((prev) => !prev)}
            aria-label={isAutoWalking ? "Pause auto walk" : "Resume auto walk"}
          >
            {isAutoWalking ? "⏸ Pause" : "▶ Walk"}
          </button>
        </div>
      </div>
    </section>
  );
}
