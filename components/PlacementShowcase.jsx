"use client";

import { useRef, useState } from "react";

// Add student photos and official company logo paths here when they are ready.
const placedStudents = [
  { name: "Ishika Kohli", role: "Digital Marketing & SEO Specialist", company: "Commbitz Ltd.", photo: "", logo: "" },
  { name: "Zoha Kauser", role: "Co-Founder", company: "byteblast", photo: "", logo: "" },
  { name: "Sandeep", role: "SEO Executive", company: "BrightRays", photo: "", logo: "" },
  { name: "Kishan", role: "SEO Executive", company: "Wizcart", photo: "", logo: "" },
];

function CompanyLogo({ student }) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="placement-showcase-company-logo" aria-hidden="true">
      {student.logo && !failed ? <img src={student.logo} alt="" onError={() => setFailed(true)} /> : <span>{student.company.charAt(0).toUpperCase()}</span>}
    </span>
  );
}

export default function PlacementShowcase() {
  const trackRef = useRef(null);

  const scrollStudents = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".placement-showcase-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 20;
    track.scrollBy({ left: ((card?.getBoundingClientRect().width || 280) + gap) * direction, behavior: "smooth" });
  };

  return (
    <section className="placement-showcase" aria-labelledby="placement-showcase-title">
      <div className="placement-showcase-inner">
        <header className="placement-showcase-heading">
          <h2 id="placement-showcase-title">Our Students, Placed &amp; Thriving</h2>
          <p>Meet some of the DizitalAdda graduates building their careers across the industry.</p>
        </header>
        <div className="placement-showcase-toolbar" aria-label="Carousel controls">
          <button type="button" aria-label="Previous students" onClick={() => scrollStudents(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button>
          <button type="button" aria-label="Next students" onClick={() => scrollStudents(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
        <div className="placement-showcase-grid" ref={trackRef} tabIndex={0} aria-label="Placed students">
          {placedStudents.map((student) => (
            <article className="placement-showcase-card" key={student.name}>
              <div className="placement-showcase-photo">
                {student.photo ? <img src={student.photo} alt={student.name} loading="lazy" decoding="async" /> : <span aria-hidden="true">{student.name.split(" ").map((part) => part[0]).join("")}</span>}
              </div>
              <div className="placement-showcase-content">
                <h3>{student.name}</h3>
                <p className="placement-showcase-role">{student.role}</p>
                <hr />
                <span className="placement-showcase-label">Placed at</span>
                <div className="placement-showcase-company">
                  <CompanyLogo student={student} />
                  <span className="placement-showcase-company-name">{student.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
