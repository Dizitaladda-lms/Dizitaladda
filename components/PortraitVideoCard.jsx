"use client";

import React, { useState, useEffect } from "react";
import styles from "./PortraitVideoCard.module.css";

function extractYouTubeId(urlOrId) {
  if (!urlOrId) return null;
  const str = String(urlOrId).trim();
  if (/^[\w-]{11}$/.test(str)) {
    return str;
  }
  const match = str.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

export default function PortraitVideoCard({
  item,
  isPlaying = false,
  onTogglePlay,
  className = "",
}) {
  const name = item.name || "Student";
  const course = item.course || item.category || "Career Program";

  const ytId = extractYouTubeId(item.videoId || item.videoUrl || item.id);
  const directVideoSrc = item.videoSrc || (!ytId && item.videoUrl ? item.videoUrl : "");

  // Initial poster image
  const defaultPoster = item.poster || (ytId ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg` : "");
  const [thumbSrc, setThumbSrc] = useState(defaultPoster);

  useEffect(() => {
    setThumbSrc(item.poster || (ytId ? `https://i.ytimg.com/vi/${ytId}/maxresdefault.jpg` : ""));
  }, [item.poster, ytId]);

  const handleClick = (e) => {
    e.stopPropagation();
    if (onTogglePlay) {
      onTogglePlay();
    }
  };

  return (
    <article className={`${styles.card} ${className}`} role="listitem">
      {/* 4:5 Aspect Ratio Video Box */}
      <div
        className={styles.videoBox}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`${isPlaying ? "Pause" : "Play"} video of ${name} - ${course}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleClick(e);
          }
        }}
      >
        {isPlaying ? (
          ytId ? (
            <iframe
              className={styles.media}
              src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1&enablejsapi=1&rel=0&playsinline=1&modestbranding=1&controls=0`}
              title={`${name} - ${course}`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className={styles.media}
              src={directVideoSrc}
              autoPlay
              playsInline
              loop
            />
          )
        ) : (
          <img
            className={styles.media}
            src={thumbSrc}
            alt={`${name} - ${course}`}
            loading="lazy"
            decoding="async"
            onError={() => {
              if (ytId && !thumbSrc.includes("hqdefault.jpg")) {
                setThumbSrc(`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`);
              }
            }}
          />
        )}

        {/* Shield to capture hover and clicks while playing */}
        {isPlaying && <div className={styles.clickShield} aria-hidden="true" />}

        {/* Center Hover Action Button (60px white circle with purple icon) */}
        <div className={styles.actionBtn} aria-hidden="true">
          {isPlaying ? (
            // Pause Icon (purple #6d28d9)
            <svg viewBox="0 0 24 24" width="20" height="20" fill="#6d28d9">
              <rect x="6" y="4" width="4" height="16" rx="1.5" />
              <rect x="14" y="4" width="4" height="16" rx="1.5" />
            </svg>
          ) : (
            // Play Icon (purple #6d28d9)
            <svg viewBox="0 0 24 24" width="22" height="22" fill="#6d28d9" style={{ marginLeft: "3px" }}>
              <polygon points="6 4 20 12 6 20 6 4" />
            </svg>
          )}
        </div>
      </div>

      {/* Info: Exactly Student Name & Course Name */}
      <div className={styles.info}>
        <h3 className={styles.studentName}>{name}</h3>
        <p className={styles.courseName}>{course}</p>
      </div>
    </article>
  );
}
