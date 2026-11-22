"use client";

import React, { useState } from "react";

/**
 * TrainerSection Component
 * Desktop: 2-column layout (Photo on left with purple decorative frame, Details on right).
 * Mobile: Stacked & centered layout.
 * Supports multiple trainers with clean tabs or stacked view.
 */
export default function TrainerSection({ trainers }) {
  if (!trainers || trainers.length === 0) return null;

  const [activeTab, setActiveTab] = useState(0);
  const currentTrainer = trainers[activeTab] || trainers[0];

  const fallbackPhoto = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300' width='300' height='300'%3E%3Crect width='300' height='300' fill='%23f3e8ff'/%3E%3Ccircle cx='150' cy='120' r='55' fill='%23c084fc'/%3E%3Cpath d='M70 260 C70 190 230 190 230 260 Z' fill='%23a855f7'/%3E%3C/svg%3E`;

  return (
    <section className="dz-section dz-section-white" id="trainers" aria-labelledby="trainers-heading">
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="trainers-heading">
            Learn From <span className="dz-gradient-text">Top Industry Mentors</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Get coached directly by seasoned professionals with real-world enterprise experience at global tech leaders.
          </p>
        </div>

        {/* Trainer Selector Tabs if more than 1 trainer */}
        {trainers.length > 1 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
            role="tablist"
            aria-label="Course mentors"
          >
            {trainers.map((t, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={activeTab === idx}
                onClick={() => setActiveTab(idx)}
                style={{
                  minHeight: "44px",
                  padding: "8px 20px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  border: activeTab === idx ? "1.5px solid #7c3aed" : "1.5px solid #ede9fe",
                  backgroundColor: activeTab === idx ? "#7c3aed" : "#ffffff",
                  color: activeTab === idx ? "#ffffff" : "#4b5563",
                  transition: "all 0.2s ease",
                }}
              >
                {t.name}
              </button>
            ))}
          </div>
        )}

        {/* Active Trainer Card */}
        <div className="dz-trainers-list">
          <div className="dz-trainer-card">
            {/* Left Column: Photo in rounded frame */}
            <div className="dz-trainer-photo-wrap">
              <img
                src={currentTrainer.photo || fallbackPhoto}
                alt={`${currentTrainer.name} - ${currentTrainer.designation}`}
                width={260}
                height={260}
                className="dz-trainer-photo"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = fallbackPhoto;
                }}
              />
            </div>

            {/* Right Column: Details, Experience Badge, Bio, Chips */}
            <div className="dz-trainer-info">
              <h3 className="dz-trainer-name">{currentTrainer.name}</h3>

              <p className="dz-trainer-desig">{currentTrainer.designation}</p>

              {currentTrainer.experienceYears && (
                <div className="dz-exp-badge">
                  <svg
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span>{currentTrainer.experienceYears}+ Years of Industry Experience</span>
                </div>
              )}

              {currentTrainer.bio && (
                <p className="dz-trainer-bio">{currentTrainer.bio}</p>
              )}

              {currentTrainer.teaches && currentTrainer.teaches.length > 0 && (
                <div className="dz-teaches-wrapper">
                  <span className="dz-teaches-label">What They Teach:</span>
                  <div className="dz-teaches-chips">
                    {currentTrainer.teaches.map((subj, sIdx) => (
                      <span key={sIdx} className="dz-teaches-chip">
                        {subj}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {currentTrainer.linkedin && (
                <a
                  href={currentTrainer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dz-linkedin-link"
                  aria-label={`View ${currentTrainer.name}'s LinkedIn Profile`}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>View LinkedIn Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
