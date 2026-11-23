"use client";

import React, { useState, useEffect } from "react";

/**
 * TrainerSection Component (Signature Edge-to-Edge 3D Mentor Showcase)
 * 
 * Features:
 * 1. 100% full screen edge-to-edge layout.
 * 2. Left side: High-definition 3D transparent cutout image with Trainer Name, Designation, and Verified Mentor badge below.
 *    (No floating tag over the image; no white background box).
 * 3. Right side:
 *    - Experience metrics & stats (clean numbers & labels without emojis/icons).
 *    - "What They Teach in This Program": Clean domain pills without checkmark icons.
 *    - Official LinkedIn profile connect button.
 * 4. Automatic switching between trainers every 4.5 seconds with pause-on-hover.
 */
export default function TrainerSection({ trainers }) {
  if (!trainers || trainers.length === 0) return null;

  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-switch between trainers every 4.5s
  useEffect(() => {
    if (!trainers || trainers.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % trainers.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [trainers, isPaused]);

  const currentTrainer = trainers[activeTab] || trainers[0];

  // Helper to ensure every trainer has their transparent 3D cutout image
  const getTrainer3DImage = (t) => {
    if (
      t.photo &&
      t.photo.includes("/courses/images/trainer/") &&
      (t.photo.endsWith(".png") || t.photo.endsWith(".webp") || t.photo.endsWith(".jpg") || t.photo.endsWith(".jpeg"))
    ) {
      return t.photo;
    }
    const name = (t.name || "").toLowerCase();
    if (name.includes("gulshan") || name.includes("gaurav")) return "/courses/images/trainer/Gulshan.png";
    if (name.includes("saurabh") || name.includes("rohit")) return "/courses/images/trainer/saurabh2.png";
    if (name.includes("ram")) return "/courses/images/trainer/ram3.png";
    if (name.includes("shagun") || name.includes("pooja")) return "/courses/images/trainer/shagun2.png";
    if (name.includes("deepanshu") || name.includes("vikramaditya")) return "/courses/images/trainer/deepanshu3.png";
    if (name.includes("govind") || name.includes("rishi")) return "/courses/images/trainer/Govind.png";
    if (name.includes("kaushal") || name.includes("sameer")) return "/courses/images/trainer/Kaushal.png";
    if (name.includes("ravi")) return "/courses/images/trainer/Ravi.png";
    return "/courses/images/trainer/Gulshan.png";
  };

  const trainerPhoto = getTrainer3DImage(currentTrainer);

  return (
    <section
      className="dz-section dz-trainer-section"
      id="trainers"
      aria-labelledby="trainers-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 1. Header inside container */}
      <div className="dz-container">
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="trainers-heading">
            Learn From <span className="dz-gradient-text">Top Industry Mentors</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Get coached directly by seasoned professionals with real-world enterprise experience at global tech leaders.
          </p>
        </div>

        {/* Trainer Selector Indicators / Tabs for Multi-Trainer Programs */}
        {trainers.length > 1 && (
          <div className="dz-trainer-tabs" role="tablist" aria-label="Course mentors">
            {trainers.map((t, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(idx)}
                  className={`dz-trainer-tab-btn ${isActive ? "dz-trainer-tab-active" : ""}`}
                >
                  <span className="dz-tab-indicator-dot" aria-hidden="true" />
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. FULL SCREEN EDGE-TO-EDGE SHOWCASE STAGE */}
      <div className="dz-trainer-fullscreen-stage">
        <div className="dz-trainer-stage-backdrop" aria-hidden="true">
          <div className="dz-trainer-glow-orb-left" />
          <div className="dz-trainer-glow-orb-right" />
        </div>

        <div key={currentTrainer.name} className="dz-trainer-stage-inner dz-trainer-fade-anim">
          {/* =================================================================
              LEFT SIDE: Trainer 3D Image & Name / Role Directly Below
              (No tag above image; transparent cutout without white background)
             ================================================================= */}
          <div className="dz-trainer-left-col">
            <div className="dz-trainer-3d-wrapper">
              {/* Subtle Pedestal Lighting */}
              <div className="dz-trainer-pedestal-glow" aria-hidden="true" />
              <div className="dz-trainer-pedestal-disc" aria-hidden="true" />

              {/* 3D Cutout Image (Transparent background) */}
              <img
                src={trainerPhoto}
                alt={`${currentTrainer.name} - ${currentTrainer.designation}`}
                width={440}
                height={520}
                className="dz-trainer-3d-image"
                loading="eager"
              />
            </div>

            {/* TRAINER NAME & ROLE DIRECTLY BELOW 3D IMAGE */}
            <div className="dz-trainer-identity-block">
              <h3 className="dz-trainer-name-title">{currentTrainer.name}</h3>
              <p className="dz-trainer-role-sub">{currentTrainer.designation}</p>
              <div className="dz-trainer-verified-pill">
                <span>Verified DizitalAdda Faculty Lead</span>
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT SIDE: What They Teach, Experience & Background, LinkedIn
              (Pure clean layout with no icons/emojis)
             ================================================================= */}
          <div className="dz-trainer-right-col">
            {/* 1. Experience & Track Record - Metric Cards (No icons) */}
            <div className="dz-trainer-stats-row">
              <div className="dz-stat-metric-card">
                <span className="dz-stat-number">{currentTrainer.experienceYears || 10}+ Years</span>
                <span className="dz-stat-label">Mentorship Experience</span>
              </div>

              <div className="dz-stat-metric-card">
                <span className="dz-stat-number">15,000+</span>
                <span className="dz-stat-label">Students Trained</span>
              </div>

              <div className="dz-stat-metric-card">
                <span className="dz-stat-number">4.9 / 5.0</span>
                <span className="dz-stat-label">Mentor Rating</span>
              </div>

              <div className="dz-stat-metric-card">
                <span className="dz-stat-number">₹15Cr+</span>
                <span className="dz-stat-label">Live Ad Spend &amp; Projects</span>
              </div>
            </div>

            {/* 2. Trainer Bio & Industry Leadership */}
            {currentTrainer.bio && (
              <div className="dz-trainer-bio-box">
                <h4 className="dz-bio-heading">Industry Track Record &amp; Leadership</h4>
                <p className="dz-trainer-bio-text">{currentTrainer.bio}</p>
              </div>
            )}

            {/* 3. What They Teach in This Program (No checkmarks/icons) */}
            {currentTrainer.teaches && currentTrainer.teaches.length > 0 && (
              <div className="dz-teaches-section-block">
                <h4 className="dz-teaches-main-title">What They Teach in This Program:</h4>
                <div className="dz-teaches-grid">
                  {currentTrainer.teaches.map((subj, sIdx) => (
                    <div key={sIdx} className="dz-teach-item-card">
                      <span className="dz-teach-name">{subj}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. LinkedIn Profile & Connect Callout */}
            <div className="dz-trainer-connect-bar">
              {currentTrainer.linkedin && (
                <a
                  href={currentTrainer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dz-trainer-linkedin-btn"
                  aria-label={`Connect with ${currentTrainer.name} on LinkedIn`}
                >
                  <span>Connect on LinkedIn</span>
                  <span className="dz-external-arrow">↗</span>
                </a>
              )}

              <div className="dz-mentorship-promise">
                <span>Live weekly doubts, 1-on-1 career guidance &amp; project review included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
