"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader";
import { campusData } from "../../data/campus";
import styles from "./CampusTour.module.css";

export interface CampusPlace {
  id: string;
  name: string;
  src: string;
  alt: string;
  gridClass: string;
}

const GRID_CLASS_BY_ID: Record<string, string> = {
  classroom: styles.tileSmartClassroom,
  workspace: styles.tileWorkspace,
  "discussion-zone": styles.tileDiscussionZone,
  "learning-lab": styles.tileLearningLab,
  "student-lounge": styles.tileStudentLounge,
  "library-corner": styles.tileLibraryCorner,
  reception: styles.tileReception,
};

export const CAMPUS_PLACES: CampusPlace[] = campusData.photos.map((photo) => ({
  id: photo.id,
  name: photo.caption,
  src: photo.image,
  alt: photo.alt,
  gridClass: GRID_CLASS_BY_ID[photo.id] || styles.tileWorkspace,
}));

function isVideoSource(src: string) {
  return /\.(mp4|webm|mov|m4v)(?:$|\?)/i.test(src);
}

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
                  isVideoSource(place.src) ? (
                    <video
                      src={place.src}
                      className={styles.tileImage}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      aria-label={place.alt}
                      onError={() =>
                        setBrokenImages((prev) => ({
                          ...prev,
                          [place.id]: true,
                        }))
                      }
                    />
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
                  )
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
