"use client";

import { useEffect, useRef, useState } from "react";

// Replace each local image and copy here when the five final points are ready.
const trustPoints = [
  {
    title: "AI-Integrated Curriculum Across All Courses",
    description: "Build practical skills with hands-on training in 60+ AI tools, including ChatGPT, Google Gemini and Perplexity.",
    image: "/assets/img/gallery/dizitaladda-classroom.webp",
    imageAlt: "DizitalAdda classroom and learning space",
  },
  {
    title: "Small Batches, Personal Mentoring",
    description: "Learn in batches of up to 15, with personal guidance and dedicated support from your mentors.",
    image: "/assets/img/gallery/dizitaladda-classroom-2.webp",
    imageAlt: "Students learning together in a DizitalAdda classroom",
  },
  {
    title: "10 Live Brand Campaign Projects Per Student",
    description: "Work on real campaigns across SEO, Google Ads, GenAI and Cyber Security to build a job-ready portfolio.",
    image: "/assets/img/gallery/dizitaladda-office-11.webp",
    imageAlt: "DizitalAdda team working on live projects",
  },
  {
    title: "Learn From Industry Trainers",
    description: "Get practical guidance from experienced trainers who bring current tools and workplace workflows into class.",
    image: "/assets/img/gallery/dizitaladda-student.webp",
    imageAlt: "DizitalAdda student learning career skills",
  },
  {
    title: "Career Guidance and Placement Support",
    description: "Build confidence for your next step with interview preparation and support from our hiring network.",
    image: "/assets/img/gallery/dizitaladda-morning-batch.webp",
    imageAlt: "DizitalAdda students in a morning training batch",
  },
];

export default function WhyTrustSequence() {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsSkipped(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, { threshold: 0.2 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isSkipped) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % trustPoints.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [isInView, isSkipped]);

  const skipSequence = () => setIsSkipped(true);
  const replaySequence = () => {
    setActiveIndex(0);
    setIsSkipped(false);
  };
  const point = trustPoints[activeIndex];

  return (
    <section className={`why-trust-sequence ${isInView ? "is-in-view" : ""}`} id="why-dizitaladda" ref={sectionRef}>
      <div className="why-trust-inner">
        <header className="why-trust-heading">
          <span>Learn with confidence</span>
          <h2>Why DizitalAdda is India&apos;s Most Trusted Career Program</h2>
        </header>

        {!isSkipped ? (
          <div className="why-trust-feature" key={activeIndex}>
            <div className="why-trust-image-wrap">
              <img src={point.image} alt={point.imageAlt} loading="lazy" />
            </div>
            <div className="why-trust-copy">
              <span className="why-trust-step">{String(activeIndex + 1).padStart(2, "0")} <i /> {String(trustPoints.length).padStart(2, "0")}</span>
              <h3>{point.title}</h3>
              <p>{point.description}</p>
              <div className="why-trust-progress" role="group" aria-label="Choose a trust point">
                {trustPoints.map((item, index) => (
                  <button key={item.title} type="button" aria-label={`Show point ${index + 1}: ${item.title}`} aria-current={activeIndex === index ? "step" : undefined} onClick={() => setActiveIndex(index)} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="why-trust-grid">
            {trustPoints.map((item, index) => (
              <article className="why-trust-grid-card" key={item.title} style={{ "--why-trust-delay": `${index * 90}ms` }}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" />
                <div><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        )}

        <div className="why-trust-controls">
          {!isSkipped ? (
            <button type="button" onClick={skipSequence}>Skip animation <span aria-hidden="true">→</span></button>
          ) : (
            <button type="button" onClick={replaySequence}>Replay highlights <span aria-hidden="true">↻</span></button>
          )}
        </div>
      </div>
    </section>
  );
}