"use client";

import { useEffect, useRef, useState } from "react";

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
        <header className="industry-trainer-videos-heading">
          <p>Learn from the people doing the work</p>
          <h2 id="industry-trainer-videos-title">Learn with Industry Expert Trainers</h2>
          <span>Meet the experts who bring practical, real-world experience into every class.</span>
        </header>
        <div className="industry-trainer-videos-grid">
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
