"use client";

import { useEffect, useState } from "react";

const heroHighlights = ["Live Projects", "SEO, Google Ads & AI Tools", "Expert Mentors", "Real Campaigns", "Placement Support"];

export default function HeroHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroHighlights.length);
    }, 5000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="da-hero-chips" aria-live="polite" aria-atomic="true">
      <div key={heroHighlights[activeIndex]} className="da-hero-chip da-hero-highlight">
        <span className="da-hero-highlight-dot" aria-hidden="true"></span>
        {heroHighlights[activeIndex]}
      </div>
    </div>
  );
}