"use client";
import { useRef } from "react";

const placedStudents = [
  { name: "Ishika Kohli", role: "Digital Marketing & SEO Specialist", company: "Commbitz Ltd.", image: "/images/placements/ishika.webp" },
  { name: "Zoha Kauser", role: "Co-Founder", company: "byteblast", image: "/images/placements/zoha.webp" },
  { name: "Sandeep", role: "SEO Executive", company: "BrightRays", image: "/images/placements/sandeep.webp" },
  { name: "Kishan", role: "SEO Executive", company: "Wizcart", image: "/images/placements/kishan.webp" },
  { name: "Sabir Saifi", role: "SEO Executive", company: "Greekassured Financial Software Advisory", image: "/images/placements/sabir.webp" },
  { name: "Md Sahil", role: "SEO Executive", company: "Clickseon Private Limited", image: "/images/placements/mohammad-sahil.webp" },
  { name: "Tarun", role: "SEO Executive", company: "Clickseon Private Limited", image: "/images/placements/tarun.webp" },
  { name: "Janish Shahjahan", role: "Performance Marketer", company: "Maneesh Singhal Real Estate Shadipur", image: "/images/placements/janish-shahjahan.webp" },
  { name: "Amal Dandapat", role: "Digital Marketing Executive", company: "Healthgain Ayurveda", image: "/images/placements/amal-dandapat.webp" },
  { name: "Sumit Bisht", role: "Digital Marketing Executive", company: "Mithila Roots", image: "/images/placements/sumit-bisht.webp" },
  { name: "Rohan Jaiswal", role: "Digital Marketing Executive", company: "Cliqk Media", image: "/images/placements/rohan.webp" },
  { name: "Devanshu Sankhla", role: "Community Manager", company: "Synq AI", image: "/images/placements/devanshu-shankla.webp" },
  { name: "Madhu Kumari", role: "SEO Executive", company: "Sisgain", image: "/images/placements/madhu-kumari.webp" },
  { name: "Manish Kumar", role: "Digital Marketing Executive", company: "SiyanoAV", image: "/images/placements/manish.webp" },
  { name: "Farhan Tahseen Khan", role: "Performance Marketer & SEO", company: "Shikhar Travel Pvt. Ltd.", image: "/images/placements/farhaan.webp" },
  { name: "Aryan Kumar Gupta", role: "Digital Marketing Executive", company: "My Leads Mantra", image: "/images/placements/aryan.webp" },
  { name: "Tanya Singhal", role: "Social Media Executive", company: "Brandlytical", image: "/images/placements/tanya-singhal.webp" },
  { name: "Mansha Singh", role: "Digital Marketing Executive", company: "Aryan Essential Pvt. Ltd.", image: "/images/placements/mansha.webp" },
  { name: "Meenakshi Rawat", role: "SEO Executive", company: "TechPratham Training & Development", image: "/images/placements/meenakshi-rawat.webp" },
  { name: "Kiran", role: "SEO Executive", company: "Address of Choice", image: "/images/placements/kiran.webp" },
  { name: "Pankaj Singh Negi", role: "Digital Marketing Freelancer", company: "Freelancer", image: "/images/placements/pankaj-negi.webp" },
];

export default function PlacementShowcase() {
  const trackRef = useRef(null);

  const scrollStudents = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".placement-showcase-card");
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    const step = (card?.getBoundingClientRect().width || track.clientWidth) + gap;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <section className="placement-showcase" aria-labelledby="placement-showcase-title">
      <div className="placement-showcase-inner">
        <header className="placement-showcase-heading">
          <span>Career outcomes</span>
          <h2 id="placement-showcase-title">Our Students, Placed &amp; Thriving</h2>
          <p>Meet some of the DizitalAdda graduates building their careers across the industry.</p>
        </header>
        <div className="placement-showcase-toolbar">
          <button type="button" aria-label="Previous students" onClick={() => scrollStudents(-1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg></button>
          <button type="button" aria-label="Next students" onClick={() => scrollStudents(1)}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg></button>
        </div>
        <div className="placement-showcase-grid" ref={trackRef} tabIndex={0} aria-label="Placed students">
          {placedStudents.map((student) => (
            <article className="placement-showcase-card" key={student.name} tabIndex={0} aria-label={`${student.name}, ${student.role} at ${student.company}`}>
              <img src={student.image} alt={student.name} loading="lazy" decoding="async" />
              <div className="placement-showcase-overlay">
                <h3>{student.name}</h3>
                <p>{student.role}</p>
                <span>{student.company}</span>
              </div>
            </article>
          ))}
        </div>
        <a className="placement-showcase-link" href="/success-stories">View all student stories <span aria-hidden="true">&rarr;</span></a>
      </div>
    </section>
  );
}