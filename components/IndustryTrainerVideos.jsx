"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const trainers = [
  { name: "Dr. Gulshan Kumar", role: "Digital marketing", tags: ["Data science", "Strategy"], experience: "10+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Gulshan.png" },
  { name: "Mr. Ram Kumar", role: "Web development", tags: ["WordPress", "E-commerce"], experience: "12+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Ram.png" },
  { name: "Mr. Saurabh Kumar", role: "Performance marketing", tags: ["Paid ads", "Analytics"], experience: "15+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Saurabh.png" },
  { name: "Miss Shagun Srivastava", role: "Data science", tags: ["Generative AI", "Automation"], experience: "7+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/shagun.png" },
  { name: "Mr. Ravi Kumar", role: "SEO specialist", tags: ["Keyword research", "Analytics"], experience: "7+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Ravi.png" },
  { name: "Mr. Kaushal", role: "Local SEO", tags: ["Paid ads", "Google Business"], experience: "5+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Kaushal.png" },
  { name: "Mr. Deepanshu Soni", role: "Data analytics", tags: ["Web development", "Python"], experience: "5+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/deepanshu.jpeg" },
  { name: "Mr. Govind Bisht", role: "Search AI", tags: ["SEO", "AI Overviews"], experience: "3+ yrs experience", videoSrc: "", poster: "/courses/images/trainer/Govind.png" },
];

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg>;
}

export default function IndustryTrainerVideos() {
  const [activeTrainer, setActiveTrainer] = useState(null);
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const carouselRef = useRef(null);

  const scrollTrainers = (direction) => {
    const track = carouselRef.current;
    const card = track?.querySelector(".industry-trainer-video-card");
    if (!track || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 20;
    const visibleCards = window.innerWidth > 900 ? 4 : window.innerWidth > 560 ? 2 : 1;
    track.scrollBy({ left: (card.getBoundingClientRect().width + gap) * visibleCards * direction, behavior: "smooth" });
  };

  const openVideo = (trainer, button) => {
    if (!trainer.videoSrc) return;
    playButtonRef.current = button;
    setActiveTrainer(trainer);
  };

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveTrainer(null);
  };

  useEffect(() => {
    if (!activeTrainer) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector(".industry-trainer-video-close")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeVideo();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll("button, video[controls]");
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      playButtonRef.current?.focus();
    };
  }, [activeTrainer]);

  return (
    <section className="industry-trainer-videos" aria-labelledby="industry-trainer-videos-title">
      <div className="industry-trainer-videos-inner">
        <SectionHeader
          align="center"
          id="industry-trainer-videos-title"
          label="Learn from the people doing the work"
          title="Learn with Industry Expert Trainers"
          description="Meet the experts who bring practical, real-world experience into every class."
        />
        <div className="industry-trainer-videos-controls" aria-label="Trainer carousel controls">
          <button type="button" aria-label="Previous trainers" onClick={() => scrollTrainers(-1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button type="button" aria-label="Next trainers" onClick={() => scrollTrainers(1)}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
        <div className="industry-trainer-videos-viewport">
          <div className="industry-trainer-videos-track" ref={carouselRef} tabIndex={0} aria-label="Industry expert trainers">
            {trainers.map((trainer) => (
              <article
                className={`industry-trainer-video-card${trainer.videoSrc ? " has-video" : ""}`}
                key={trainer.name}
                onClick={(event) => openVideo(trainer, event.currentTarget.querySelector(".industry-trainer-video-action"))}
              >
                <div className="industry-trainer-video-media">
                  <video
                    className="industry-trainer-video-poster"
                    preload="none"
                    poster={trainer.poster}
                    aria-label={`${trainer.name} trainer video poster`}
                    tabIndex={-1}
                  />
                  <span className="industry-trainer-video-badge">
                    {trainer.videoSrc ? trainer.experience : "Video coming soon"}
                  </span>
                  {trainer.videoSrc ? (
                    <button
                      className="industry-trainer-video-action"
                      type="button"
                      aria-label={`Play ${trainer.name}'s video`}
                      onClick={(event) => {
                        event.stopPropagation();
                        openVideo(trainer, event.currentTarget);
                      }}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 10 6-10 6z" /></svg>
                    </button>
                  ) : (
                    <span className="industry-trainer-video-action is-unavailable" aria-hidden="true"><ClockIcon /></span>
                  )}
                </div>
                <div className="industry-trainer-video-copy">
                  <h3>{trainer.name}</h3>
                  <p className="industry-trainer-video-role">{trainer.role}</p>
                  <div className="industry-trainer-video-tags">
                    {trainer.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {activeTrainer && (
        <div className="industry-trainer-video-modal-overlay" onClick={(event) => event.target === event.currentTarget && closeVideo()}>
          <div
            className="industry-trainer-video-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeTrainer.name} trainer video`}
            tabIndex={-1}
            ref={dialogRef}
          >
            <button className="industry-trainer-video-close" type="button" onClick={closeVideo} aria-label="Close video">×</button>
            <video ref={videoRef} src={activeTrainer.videoSrc} poster={activeTrainer.poster} controls autoPlay preload="none" />
            <h2>{activeTrainer.name}</h2>
          </div>
        </div>
      )}
    </section>
  );
}
