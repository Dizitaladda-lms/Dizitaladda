"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

const studentProjects = [
  {
    title: "Live project session",
    description: "Students working together on practical tasks",
    poster: "/assets/img/gallery/dizitaladda-student.webp",
    videoSrc: "",
  },
  {
    title: "Team project work",
    description: "Collaborative learning with real tools",
    poster: "/assets/img/gallery/classes-with-gulshan-sir.webp",
    videoSrc: "",
  },
  {
    title: "Hands-on learning",
    description: "Turning classroom skills into project work",
    poster: "/assets/img/gallery/dizitaladda-classroom.webp",
    videoSrc: "",
  },
];

function ClockIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></svg>;
}

export default function StudentProjectVideos() {
  const [activeProject, setActiveProject] = useState(null);
  const dialogRef = useRef(null);
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);

  const closeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setActiveProject(null);
  };

  useEffect(() => {
    if (!activeProject) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector(".student-project-video-close")?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeVideo();
      } else if (event.key === "Tab") {
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
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      playButtonRef.current?.focus();
    };
  }, [activeProject]);

  return (
    <section className="student-project-videos" aria-labelledby="student-project-videos-title">
      <div className="student-project-videos-inner">
        <SectionHeader
          align="center"
          id="student-project-videos-title"
          label="Learning by doing"
          title="Students Working on Real-Time Projects"
          description="See learners collaborate, practise with industry tools, and build hands-on experience."
        />
        <div className="student-project-videos-grid">
          {studentProjects.map((project) => (
            <article
              className={`student-project-video-card${project.videoSrc ? " has-video" : ""}`}
              key={project.title}
              onClick={(event) => {
                if (!project.videoSrc) return;
                playButtonRef.current = event.currentTarget.querySelector(".student-project-video-action");
                setActiveProject(project);
              }}
            >
              <div className="student-project-video-media">
                <video className="student-project-video-poster" preload="none" poster={project.poster} aria-label={`${project.title} video poster`} tabIndex={-1} />
                <span className="student-project-video-badge">{project.videoSrc ? "Student project" : "Video coming soon"}</span>
                {project.videoSrc ? (
                  <button
                    className="student-project-video-action"
                    type="button"
                    aria-label={`Play ${project.title} video`}
                    onClick={(event) => {
                      event.stopPropagation();
                      playButtonRef.current = event.currentTarget;
                      setActiveProject(project);
                    }}
                  ><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 10 6-10 6z" /></svg></button>
                ) : (
                  <span className="student-project-video-action is-unavailable" aria-hidden="true"><ClockIcon /></span>
                )}
              </div>
              <div className="student-project-video-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeProject && (
        <div className="student-project-video-modal-overlay" onClick={(event) => event.target === event.currentTarget && closeVideo()}>
          <div className="student-project-video-dialog" role="dialog" aria-modal="true" aria-label={activeProject.title} tabIndex={-1} ref={dialogRef}>
            <button className="student-project-video-close" type="button" onClick={closeVideo} aria-label="Close video">×</button>
            <video ref={videoRef} src={activeProject.videoSrc} poster={activeProject.poster} controls autoPlay preload="none" />
            <h2>{activeProject.title}</h2>
          </div>
        </div>
      )}
    </section>
  );
}
