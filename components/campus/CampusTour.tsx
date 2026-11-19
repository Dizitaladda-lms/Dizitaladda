"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import styles from "./CampusTour.module.css";

export interface CampusPlace {
  id: string;
  name: string;
  src: string;
  alt: string;
  gridClass: string;
}

export const CAMPUS_PLACES: CampusPlace[] = [
  {
    id: "smart-classroom",
    name: "Smart classroom",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=80",
    alt: "Smart classroom with interactive smart screens and ergonomic desks",
    gridClass: styles.tileSmartClassroom,
  },
  {
    id: "workspace",
    name: "Workspace",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Open-plan corporate workstation pods for live client projects",
    gridClass: styles.tileWorkspace,
  },
  {
    id: "discussion-zone",
    name: "Discussion zone",
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    alt: "Collaborative breakout hubs for peer brainstorming and mentor reviews",
    gridClass: styles.tileDiscussionZone,
  },
  {
    id: "learning-lab",
    name: "Learning lab",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    alt: "Students learning together in a bright training room",
    gridClass: styles.tileLearningLab,
  },
  {
    id: "student-lounge",
    name: "Student lounge",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Comfortable breakout lounge to recharge and unwind between sessions",
    gridClass: styles.tileStudentLounge,
  },
  {
    id: "library-corner",
    name: "Library corner",
    src: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80",
    alt: "Quiet research corner stocked with curated marketing and tech books",
    gridClass: styles.tileLibraryCorner,
  },
  {
    id: "reception",
    name: "Reception",
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Welcoming reception desk, counselor advisory lounge and support center",
    gridClass: styles.tileReception,
  },
];

export default function CampusTour({ places = CAMPUS_PLACES }: { places?: CampusPlace[] }) {
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  return (
    <div className={styles.tourSection} id="campus-tour" aria-label="Campus Tour Experience">
      {/* Centered Heading */}
      <div className={styles.headerWrap}>
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
      </div>

      {/* Full-Width Bento Image Grid */}
      <div className={styles.gridWrap}>
        <div className={styles.grid} role="region" aria-label="Campus photo gallery">
          {places.map((place) => {
            const isBroken = brokenImages[place.id];

            return (
              <div key={place.id} className={`${styles.tile} ${place.gridClass}`}>
                {isBroken ? (
                  <div className={styles.gradientPlaceholder} aria-hidden="true">
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
                    <span className={styles.placeholderText}>{place.name}</span>
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

                {/* Dark Gradient Overlay */}
                <div className={styles.tileOverlay} aria-hidden="true" />

                {/* Caption at Bottom-Left */}
                <h3 className={styles.tileCaption}>{place.name}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
