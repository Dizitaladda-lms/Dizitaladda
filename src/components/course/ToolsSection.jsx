"use client";

import React from "react";

// Crisp inline vector logos for tools
function ToolSvg({ name }) {
  const n = (name || "").toLowerCase();

  if (n.includes("python")) {
    return (
      <svg viewBox="0 0 128 128" width="36" height="36" aria-hidden="true">
        <path fill="#3776AB" d="M63.5 8c-26.6 0-25 11.5-25 11.5l.03 11.9h25.4v3.6H28.4S12 33.2 12 59.9c0 26.6 14.3 25.7 14.3 25.7h8.5v-12s-.5-14.3 14-14.3h24.1s13.5.2 13.5-13.1V21.1S88.3 8 63.5 8zm-13.8 7.3c2.5 0 4.6 2.1 4.6 4.6s-2.1 4.6-4.6 4.6-4.6-2.1-4.6-4.6 2.1-4.6 4.6-4.6z" />
        <path fill="#FFD43B" d="M64.5 120c26.6 0 25-11.5 25-11.5l-.03-11.9H64.07v-3.6h35.53s16.4 1.8 16.4-24.9c0-26.6-14.3-25.7-14.3-25.7h-8.5v12s.5 14.3-14 14.3H55.1s-13.5-.2-13.5 13.1v25.1s-1.9 13.1 22.9 13.1zm13.8-7.3c-2.5 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2.1 4.6-4.6 4.6z" />
      </svg>
    );
  }

  if (n.includes("sql")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <ellipse cx="24" cy="11" rx="18" ry="7" fill="#0284c7" />
        <path d="M6 11v13c0 3.87 8.06 7 18 7s18-3.13 18-7V11" fill="none" stroke="#0284c7" strokeWidth="4" />
        <path d="M6 24v13c0 3.87 8.06 7 18 7s18-3.13 18-7V24" fill="none" stroke="#0284c7" strokeWidth="4" />
      </svg>
    );
  }

  if (n.includes("power bi")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <rect x="6" y="24" width="8" height="18" rx="2" fill="#eab308" />
        <rect x="18" y="16" width="8" height="26" rx="2" fill="#f59e0b" />
        <rect x="30" y="8" width="8" height="34" rx="2" fill="#d97706" />
      </svg>
    );
  }

  if (n.includes("tableau")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <rect x="22" y="4" width="4" height="40" fill="#e11d48" rx="1" />
        <rect x="4" y="22" width="40" height="4" fill="#e11d48" rx="1" />
        <rect x="12" y="14" width="4" height="20" fill="#f97316" rx="1" />
        <rect x="14" y="12" width="20" height="4" fill="#f97316" rx="1" />
      </svg>
    );
  }

  if (n.includes("pandas")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <rect x="8" y="10" width="8" height="28" rx="2" fill="#150458" />
        <rect x="20" y="16" width="8" height="22" rx="2" fill="#e70488" />
        <rect x="32" y="22" width="8" height="16" rx="2" fill="#ffca00" />
      </svg>
    );
  }

  if (n.includes("numpy")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <polygon points="24,4 44,15 44,37 24,48 4,37 4,15" fill="#4d77cf" />
        <polygon points="24,12 36,18 36,32 24,38 12,32 12,18" fill="#ffffff" />
        <text x="24" y="28" fill="#013243" fontSize="10" fontWeight="900" textAnchor="middle">
          NP
        </text>
      </svg>
    );
  }

  if (n.includes("tensorflow")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <polygon points="24,4 42,14 42,34 32,28 32,18 24,14 16,18 16,38 24,44 24,30 20,28 20,22 28,18 28,34 24,36" fill="#ff6f00" />
      </svg>
    );
  }

  if (n.includes("scikit")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <circle cx="16" cy="24" r="12" fill="#3499cd" opacity="0.8" />
        <circle cx="32" cy="24" r="12" fill="#f89939" opacity="0.8" />
        <text x="24" y="27" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle">
          SK
        </text>
      </svg>
    );
  }

  if (n.includes("aws")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <text x="24" y="24" fill="#232f3e" fontSize="14" fontWeight="900" textAnchor="middle">
          aws
        </text>
        <path d="M10 32 Q24 40 38 32" stroke="#ff9900" strokeWidth="3" fill="none" strokeLinecap="round" />
        <polyline points="34,31 38,32 37,28" stroke="#ff9900" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }

  if (n.includes("excel")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="4" fill="#107c41" />
        <text x="24" y="30" fill="#ffffff" fontSize="18" fontWeight="800" textAnchor="middle">
          X
        </text>
      </svg>
    );
  }

  if (n.includes("git")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#f05032" transform="rotate(45 24 24)" />
        <circle cx="18" cy="24" r="3.5" fill="#ffffff" />
        <circle cx="30" cy="18" r="3.5" fill="#ffffff" />
        <circle cx="30" cy="30" r="3.5" fill="#ffffff" />
        <line x1="18" y1="24" x2="30" y2="18" stroke="#ffffff" strokeWidth="2.5" />
        <line x1="18" y1="24" x2="30" y2="30" stroke="#ffffff" strokeWidth="2.5" />
      </svg>
    );
  }

  if (n.includes("jupyter")) {
    return (
      <svg viewBox="0 0 48 48" width="36" height="36" aria-hidden="true">
        <ellipse cx="24" cy="24" rx="18" ry="8" fill="none" stroke="#f37626" strokeWidth="4" />
        <circle cx="10" cy="12" r="3" fill="#656565" />
        <circle cx="38" cy="36" r="3.5" fill="#656565" />
      </svg>
    );
  }

  // Default tech gear icon
  return (
    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#7c3aed" strokeWidth="2" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

/**
 * ToolsSection Component
 * Responsive grid: 6 per row on desktop, 4 on tablet, 3 on phones (2 under 360px).
 * Clean hover lift on desktop only.
 */
export default function ToolsSection({ tools }) {
  if (!tools || tools.length === 0) return null;

  return (
    <section className="dz-section dz-section-lavender" id="tools" aria-labelledby="tools-heading">
      <div className="dz-container">
        {/* Section Header */}
        <div className="dz-section-header dz-center">
          <h2 className="dz-section-title" id="tools-heading">
            Tools &amp; Technologies <span className="dz-gradient-text">You Will Master</span>
          </h2>
          <div className="dz-title-bar" aria-hidden="true" />
          <p className="dz-section-subtitle">
            Gain comprehensive mastery over the exact tools and technologies in high demand by top analytics employers.
          </p>
        </div>

        {/* Tools Responsive Grid */}
        <div className="dz-tools-grid">
          {tools.map((tool, idx) => (
            <div key={idx} className="dz-tool-card">
              <div className="dz-tool-logo-box">
                <ToolSvg name={tool.name} />
              </div>
              <span className="dz-tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
