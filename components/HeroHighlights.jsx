"use client";

const heroHighlights = ["Live Projects", "SEO, Google Ads & AI Tools", "Expert Mentors", "Real Campaigns", "Placement Support"];

export default function HeroHighlights() {
  return (
    <div className="da-hero-chips" aria-label="Course highlights">
      <div className="da-hero-highlight-track">
        {[...heroHighlights, ...heroHighlights].map((highlight, index) => (
          <div className="da-hero-chip da-hero-highlight" key={`${highlight}-${index}`} aria-hidden={index >= heroHighlights.length}>
            <span className="da-hero-highlight-dot" aria-hidden="true"></span>
            {highlight}
          </div>
        ))}
      </div>
    </div>
  );
}
