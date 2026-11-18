"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Add or edit courses here. Images are served locally from /public.
const courses = [
  // 1. Digital Marketing
  {
    id: 1,
    category: "digital-marketing",
    level: "Expert",
    image: "/coursecard/expert in Digital Marketing Course.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Expert in Digital Marketing",
    description: "SEO, Google Ads aur social media ko real campaigns par seekho.",
    skills: [
      { label: "SEO", icon: "search" },
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "GA4", icon: "chart" },
    ],
    bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/expert-digital-marketing-course",
  },
  {
    id: 2,
    category: "digital-marketing",
    level: "Advanced",
    image: "/coursecard/advanced Digital Marketing Course.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Digital Marketing",
    description: "SEO, paid ads aur growth strategy se apni skills advance karo.",
    skills: [
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "GA4", icon: "chart" },
      { label: "Google Tag Manager", icon: "search" },
    ],
    bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-digital-marketing-course",
  },
  {
    id: 3,
    category: "digital-marketing",
    level: "Professionals",
    image: "/coursecard/digital Marketing For Professionals.webp",
    duration: "4 Months",
    mode: "Live + Recorded",
    title: "Digital Marketing for Professionals",
    description: "Google aur Meta Ads ke saath marketing performance improve karo.",
    skills: [
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "LinkedIn Ads", icon: "search" },
      { label: "GA4", icon: "chart" },
    ],
    bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-professional",
  },
  {
    id: 4,
    category: "digital-marketing",
    level: "Beginners",
    image: "/coursecard/digital Marketing for Beginners.webp",
    duration: "3 Months",
    mode: "Live + Recorded",
    title: "Digital Marketing for Beginners",
    description: "Digital marketing ke core tools aur channels ki shuruaat karo.",
    skills: [
      { label: "Canva", icon: "share" },
      { label: "WordPress", icon: "search" },
      { label: "SEO", icon: "chart" },
      { label: "Google Ads", icon: "megaphone" },
    ],
    bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-beginners",
  },

  // 2. AI & Data Science
  {
    id: 5,
    category: "ai-data-science",
    level: "Diploma",
    image: "/imagesCards/diploma_in_generative_Ai_and_prompt_engineering.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Diploma in GenAI & Prompt Engineering",
    description: "Generative AI aur prompt engineering ko projects ke saath seekho.",
    skills: [
      { label: "Gen AI", icon: "search" },
      { label: "Prompting", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/diploma-in-genai-and-prompt-engineering",
  },
  {
    id: 6,
    category: "ai-data-science",
    level: "Diploma",
    image: "/imagesCards/diploma_in_data_analytics.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Diploma in Data Analytics",
    description: "Data ko dashboards aur clear business insights mein badlo.",
    skills: [
      { label: "Excel", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/diploma-in-data-analytics-and-ai",
  },
  {
    id: 7,
    category: "ai-data-science",
    level: "Diploma",
    image: "/imagesCards/Diploma_machine_learing.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Diploma in Machine Learning & AI",
    description: "Python se machine learning models banana aur apply karna seekho.",
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/diploma-in-machine-learning-and-ai",
  },
  {
    id: 8,
    category: "ai-data-science",
    level: "Diploma",
    image: "/imagesCards/diploma_in_data_science_Ai.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Diploma in Data Science & AI",
    description: "Statistics, Python aur AI ke saath end-to-end data skills banao.",
    skills: [
      { label: "Python", icon: "search" },
      { label: "Machine Learning", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/diploma-in-data-science-and-ai",
  },
  {
    id: 9,
    category: "ai-data-science",
    level: "Advanced",
    image: "/imagesCards/Advance_Certification_in_Gen_ai_and_prompt_engineering.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Certification in GenAI",
    description: "AI assistants, chatbots aur practical GenAI applications banao.",
    skills: [
      { label: "Gen AI", icon: "search" },
      { label: "Prompting", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-genai-and-prompt-engineering",
  },
  {
    id: 10,
    category: "ai-data-science",
    level: "Advanced",
    image: "/imagesCards/Advance_certification_in_Data_Analystics_andAi.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Certification in Data Analytics",
    description: "SQL, Python aur Power BI se actionable insights nikaalo.",
    skills: [
      { label: "Python", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-analytics-and-ai",
  },
  {
    id: 11,
    category: "ai-data-science",
    level: "Advanced",
    image: "/imagesCards/Advance_certification_in_machine_learning_and_Ai.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Certification in Machine Learning",
    description: "Real datasets ke saath ML models train aur deploy karna seekho.",
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-machine-learning-and-ai",
  },
  {
    id: 12,
    category: "ai-data-science",
    level: "Advanced",
    image: "/imagesCards/Advance_cerfication_in_data_science_and_ai.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Certification in Data Science",
    description: "Applied statistics aur ML se complex data problems solve karo.",
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-science-and-ai",
  },
  {
    id: 13,
    category: "ai-data-science",
    level: "Certification",
    image: "/imagesCards/Certification_in_data_analytics_and_ai.webp",
    duration: "3 Months",
    mode: "Live + Recorded",
    title: "Certification in Data Analytics",
    description: "Excel, SQL aur Power BI se data analysis ki foundation banao.",
    skills: [
      { label: "Excel", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/certification-in-data-analytics-and-ai",
  },

  // 3. Cyber Security
  {
    id: 14,
    category: "cyber-security",
    level: "Foundation",
    image: "/imagesCards/Foundation in Cyber Security and Ethical Hacking.webp",
    duration: "4 Months",
    mode: "Live + Recorded",
    title: "Foundation in Cyber Security",
    description: "Networking, Linux aur ethical hacking ki core skills seekho.",
    skills: [
      { label: "Networking", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/foundation-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 15,
    category: "cyber-security",
    level: "Advanced",
    image: "/imagesCards/Advanced Certification in Cyber Security and Ethical Hacking.webp",
    duration: "6 Months",
    mode: "Live + Recorded",
    title: "Advanced Cyber Security & Ethical Hacking",
    description: "Security testing aur ethical hacking ko lab practice se master karo.",
    skills: [
      { label: "Networking", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 16,
    category: "cyber-security",
    level: "Expert",
    image: "/imagesCards/Expert Training in Cyber Security and Ethical Hacking.webp",
    duration: "12 Months",
    mode: "Live + Recorded",
    title: "Expert Cyber Security Training",
    description: "Vulnerability assessment aur penetration testing par kaam karo.",
    skills: [
      { label: "VAPT", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/expert-training-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 17,
    category: "cyber-security",
    level: "Investigation",
    image: "/imagesCards/Certiication in Digital Forensic and Cyber Investigation.webp",
    duration: "4 Months",
    mode: "Live + Recorded",
    title: "Digital Forensics & Cyber Investigation",
    description: "Digital evidence aur cyber incidents investigate karna seekho.",
    skills: [
      { label: "Forensics", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Investigation", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/certification-in-digital-forensic-and-cyber-investigation",
  },
  {
    id: 18,
    category: "cyber-security",
    level: "Bug Bounty",
    image: "/imagesCards/Expert Training in Bug Bounty.webp",
    duration: "4 Months",
    mode: "Live + Recorded",
    title: "Bug Bounty Training",
    description: "Legal labs mein web vulnerabilities dhundo aur report karo.",
    skills: [
      { label: "Web Security", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Bug Bounty", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"],
    detailsLink: "https://dizitaladda.com/courses/expert-traning-in-bug-bounty",
  },
];

const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "ai-data-science", label: "AI & Data Science" },
  { id: "cyber-security", label: "Cyber Security" },
];

function SkillIcon({ type }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (type === "search") return <svg {...common}><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.3 4.3" /></svg>;
  if (type === "megaphone") return <svg {...common}><path d="m3 11 17-7v16L3 13z" /><path d="M7 14.5 9 21h4l-2.4-5.4" /><path d="M20 9a3 3 0 0 1 0 6" /></svg>;
  if (type === "share") return <svg {...common}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" /></svg>;
  return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></svg>;
}

function CourseCard({ course }) {
  return (
    <article className="da-course-card">
      <div className="da-course-image-wrap">
        <img src={course.image} alt={`${course.title} course`} loading="lazy" />
      </div>
      <div className="da-course-content">
        <h3>{course.title}</h3>
        <p className="da-course-description">{course.description}</p>
        <ul className="da-course-skills" aria-label="Skills covered">
          {course.skills.map((skill) => (
            <li key={skill.label}>
              <SkillIcon type={skill.icon} />
              <span>{skill.label}</span>
            </li>
          ))}
        </ul>
        <div className="da-course-meta" aria-label="Course details">
          <span><strong>Level:</strong> {course.level}</span>
          <span><strong>Duration:</strong> {course.duration}</span>
          <span><strong>Mode:</strong> {course.mode}</span>
        </div>
        <div className="da-course-actions">
          <a className="da-course-details" href={course.detailsLink}>Details</a>
          <a className="da-course-enroll" href="#bookDemo">Enroll now</a>
        </div>
      </div>
    </article>
  );
}

export default function CourseCategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLevel, setActiveLevel] = useState("all");
  const trackRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  // Sync state with URL query parameters on mount & on popstate
  useEffect(() => {
    if (typeof window === "undefined") return;

    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get("category");
      const lvlParam = params.get("level");

      if (catParam && courseCategories.some((c) => c.id === catParam.toLowerCase())) {
        setActiveCategory(catParam.toLowerCase());
      }

      if (lvlParam) {
        setActiveLevel(lvlParam.toLowerCase());
      }
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  // Update browser URL query params without full page reload
  const updateUrl = (catId, lvlId) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);

    if (catId && catId !== "all") {
      url.searchParams.set("category", catId);
    } else {
      url.searchParams.delete("category");
    }

    if (lvlId && lvlId.toLowerCase() !== "all" && lvlId.toLowerCase() !== "all levels") {
      url.searchParams.set("level", lvlId.toLowerCase());
    } else {
      url.searchParams.delete("level");
    }

    const newUrl = url.pathname + (url.search ? url.search : "") + url.hash;
    window.history.replaceState({}, "", newUrl);
  };

  // Courses filtered by active category
  const categoryCourses = useMemo(() => {
    if (activeCategory === "all") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  // Dynamically generated unique levels for the active category
  const dynamicLevels = useMemo(() => {
    const levels = Array.from(new Set(categoryCourses.map((c) => c.level))).filter(Boolean);
    return ["all", ...levels];
  }, [categoryCourses]);

  // Filter courses by BOTH category AND level
  const visibleCourses = useMemo(() => {
    return categoryCourses.filter((course) => {
      if (!activeLevel || activeLevel.toLowerCase() === "all" || activeLevel.toLowerCase() === "all levels") {
        return true;
      }
      return course.level.toLowerCase() === activeLevel.toLowerCase();
    });
  }, [categoryCourses, activeLevel]);

  // Count courses per level
  const getLevelCount = (lvl) => {
    if (lvl === "all") return categoryCourses.length;
    return categoryCourses.filter((c) => c.level.toLowerCase() === lvl.toLowerCase()).length;
  };

  // Switching category resets level filter to "all"
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveLevel("all");
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    updateUrl(categoryId, "all");
  };

  // Switching level filter
  const handleLevelChange = (levelVal) => {
    setActiveLevel(levelVal);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    updateUrl(activeCategory, levelVal);
  };

  // Intersection observer for entrance animations
  useEffect(() => {
    const track = trackRef.current;
    if (!track || hasEntered) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasEntered(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(track);
    return () => observer.disconnect();
  }, [hasEntered]);

  const scrollCards = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".da-course-slide");
    const distance = card ? card.getBoundingClientRect().width + 24 : trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className="da-course-showcase">
      {/* 1. Category Filter Tabs */}
      <div className="course-category-filters" role="group" aria-label="Filter courses by category">
        {courseCategories.map((category) => (
          <button
            key={category.id}
            type="button"
            aria-pressed={activeCategory === category.id}
            className={activeCategory === category.id ? "is-active" : ""}
            onClick={() => handleCategoryChange(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* 2. Dynamic Level / Program Type Filter Chips (Second Row) */}
      <div className="course-level-filters" role="group" aria-label="Filter courses by level or program type">
        {dynamicLevels.map((lvl) => {
          const isLevelActive =
            activeLevel.toLowerCase() === lvl.toLowerCase() ||
            (lvl === "all" && (activeLevel === "all" || !activeLevel));
          const label = lvl === "all" ? "All Levels" : lvl;
          const count = getLevelCount(lvl);

          return (
            <button
              key={lvl}
              type="button"
              aria-pressed={isLevelActive}
              className={isLevelActive ? "is-active" : ""}
              onClick={() => handleLevelChange(lvl)}
            >
              <span>{label}</span>
              <span className="level-count">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Carousel Header Controls */}
      <div className="da-course-carousel-controls">
        <span>
          {activeCategory === "all"
            ? "Explore our career-focused courses"
            : courseCategories.find((category) => category.id === activeCategory)?.label}
          {activeLevel !== "all" && activeLevel ? ` • ${activeLevel}` : ""}
          <span style={{ opacity: 0.7, fontWeight: 500, marginLeft: "6px" }}>({visibleCourses.length})</span>
        </span>
        {visibleCourses.length > 3 && (
          <div>
            <button type="button" aria-label="Previous courses" onClick={() => scrollCards(-1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
            </button>
            <button type="button" aria-label="Next courses" onClick={() => scrollCards(1)}>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          </div>
        )}
      </div>

      {/* 3. Course Track or Empty State */}
      {visibleCourses.length === 0 ? (
        <div className="da-course-empty">
          <div className="da-course-empty-icon">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </div>
          <h4>No courses found</h4>
          <p>No courses match the selected category and level filter.</p>
          <button type="button" onClick={() => handleLevelChange("all")}>
            View all {activeCategory === "all" ? "" : courseCategories.find((c) => c.id === activeCategory)?.label} courses
          </button>
        </div>
      ) : (
        <div className="da-course-track" ref={trackRef} aria-label="Course cards">
          {visibleCourses.map((course, index) => (
            <div
              className={`da-course-slide ${hasEntered ? "is-visible" : ""}`}
              key={course.title}
              style={{ "--course-reveal-delay": `${index * 120}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
