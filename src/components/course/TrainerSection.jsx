"use client";

import React, { useState } from "react";

/**
 * TrainerSection Component (Signature Edge-to-Edge 3D Mentor Showcase)
 * 
 * Features:
 * 1. 100% full screen edge-to-edge layout without container constraints.
 * 2. Left side: High-definition 3D transparent cutout image on glowing pedestal stage,
 *    with Trainer Name, Designation, and Verified Mentor badge directly below.
 * 3. Right side:
 *    - "Kitne saal se padhate hain": Experience metrics, students trained, rating, and industry track record bio.
 *    - "Kya padhate hain": "What They Teach" domain cards with checkmarks and icons.
 *    - "LinkedIn profile kya hai": Official LinkedIn profile connect button + 1-on-1 mentorship promise.
 * 4. Interactive mentor selector tabs for multi-trainer programs.
 */
export default function TrainerSection({ trainers }) {
  if (!trainers || trainers.length === 0) return null;

  const [activeTab, setActiveTab] = useState(0);
  const currentTrainer = trainers[activeTab] || trainers[0];

  // Helper to ensure every trainer has a high-res 3D transparent cutout image
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
    <section className="dz-section dz-trainer-section" id="trainers" aria-labelledby="trainers-heading">
      {/* 1. Header inside container for clean centered typography */}
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

        {/* Trainer Selector Tabs if course has multiple mentors */}
        {trainers.length > 1 && (
          <div className="dz-trainer-tabs" role="tablist" aria-label="Course mentors">
            {trainers.map((t, idx) => {
              const tabPhoto = getTrainer3DImage(t);
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
                  <span className="dz-tab-avatar-mini">
                    <img
                      src={tabPhoto}
                      alt=""
                      width={28}
                      height={28}
                      className="dz-tab-avatar-img"
                    />
                  </span>
                  <span>{t.name}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 2. FULL SCREEN EDGE-TO-EDGE SHOWCASE STAGE (OUTSIDE CONTAINER) */}
      <div className="dz-trainer-fullscreen-stage">
        <div className="dz-trainer-stage-backdrop" aria-hidden="true">
          <div className="dz-trainer-glow-orb-left" />
          <div className="dz-trainer-glow-orb-right" />
        </div>

        <div className="dz-trainer-stage-inner">
          {/* =================================================================
              LEFT SIDE: Trainer 3D Image & Name / Role Directly Below
             ================================================================= */}
          <div className="dz-trainer-left-col">
            <div className="dz-trainer-3d-wrapper">
              {/* 3D Pedestal Stage Shadow & Light */}
              <div className="dz-trainer-pedestal-glow" aria-hidden="true" />
              <div className="dz-trainer-pedestal-disc" aria-hidden="true" />

              {/* 3D Cutout Image */}
              <img
                key={currentTrainer.name}
                src={trainerPhoto}
                alt={`${currentTrainer.name} - ${currentTrainer.designation}`}
                width={440}
                height={520}
                className="dz-trainer-3d-image"
                loading="eager"
              />

              {/* Floating Experience Badge */}
              <div className="dz-trainer-float-badge">
                <span className="dz-float-star">★</span>
                <span>{currentTrainer.experienceYears || 10}+ Years Industry Leadership</span>
              </div>
            </div>

            {/* TRAINER NAME & ROLE DIRECTLY BELOW 3D IMAGE */}
            <div className="dz-trainer-identity-block">
              <h3 className="dz-trainer-name-title">{currentTrainer.name}</h3>
              <p className="dz-trainer-role-sub">{currentTrainer.designation}</p>
              <div className="dz-trainer-verified-pill">
                <span className="dz-verified-check">✓</span>
                <span>Verified DizitalAdda Faculty Lead</span>
              </div>
            </div>
          </div>

          {/* =================================================================
              RIGHT SIDE: Kya Padhate Hain, Kitne Saal Se Padhate Hain, LinkedIn
             ================================================================= */}
          <div className="dz-trainer-right-col">
            {/* 1. Kitne Saal Se Padhate Hain - Key Highlights Stat Metrics */}
            <div className="dz-trainer-stats-row">
              <div className="dz-stat-metric-card">
                <div className="dz-stat-icon-wrap">🏆</div>
                <div className="dz-stat-text-wrap">
                  <span className="dz-stat-number">{currentTrainer.experienceYears || 10}+ Years</span>
                  <span className="dz-stat-label">Mentorship Experience</span>
                </div>
              </div>

              <div className="dz-stat-metric-card">
                <div className="dz-stat-icon-wrap">👨‍🎓</div>
                <div className="dz-stat-text-wrap">
                  <span className="dz-stat-number">15,000+</span>
                  <span className="dz-stat-label">Students Trained</span>
                </div>
              </div>

              <div className="dz-stat-metric-card">
                <div className="dz-stat-icon-wrap">⭐</div>
                <div className="dz-stat-text-wrap">
                  <span className="dz-stat-number">4.9 / 5.0</span>
                  <span className="dz-stat-label">Mentor Rating</span>
                </div>
              </div>

              <div className="dz-stat-metric-card">
                <div className="dz-stat-icon-wrap">💼</div>
                <div className="dz-stat-text-wrap">
                  <span className="dz-stat-number">₹15Cr+</span>
                  <span className="dz-stat-label">Live Ad Spend & Projects</span>
                </div>
              </div>
            </div>

            {/* 2. Trainer Bio & Industry Philosophy */}
            {currentTrainer.bio && (
              <div className="dz-trainer-bio-box">
                <h4 className="dz-bio-heading">Industry Track Record & Leadership</h4>
                <p className="dz-trainer-bio-text">{currentTrainer.bio}</p>
              </div>
            )}

            {/* 3. Kya Padhate Hain - What They Teach Domain Chips */}
            {currentTrainer.teaches && currentTrainer.teaches.length > 0 && (
              <div className="dz-teaches-section-block">
                <div className="dz-teaches-heading-wrap">
                  <span className="dz-teaches-badge">Curriculum Ownership</span>
                  <h4 className="dz-teaches-main-title">What They Teach in This Program:</h4>
                </div>
                <div className="dz-teaches-grid">
                  {currentTrainer.teaches.map((subj, sIdx) => (
                    <div key={sIdx} className="dz-teach-item-card">
                      <span className="dz-teach-check-bullet">✓</span>
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
                  aria-label={`View ${currentTrainer.name}'s LinkedIn Profile`}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>Connect on LinkedIn</span>
                  <span className="dz-external-arrow">↗</span>
                </a>
              )}

              <div className="dz-mentorship-promise">
                <span className="dz-promise-icon">💬</span>
                <span>Live weekly doubts, 1-on-1 career guidance & project review included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
