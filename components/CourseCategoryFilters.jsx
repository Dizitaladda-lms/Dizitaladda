"use client";

import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import Link from "next/link";

/**
 * ============================================================================
 * 18 CAREER-FOCUSED COURSES ACROSS 3 DOMAINS
 * - Digital Marketing (4 courses)
 * - AI & Data Science (9 courses)
 * - Cyber Security (5 courses)
 * ============================================================================
 */
// Course card images live in `public`; use their URL path without the `public` prefix.
// Example: `public/coursecard/my-image.jpg` -> `/coursecard/my-image.jpg`.
const courses = [
  // --------------------------------------------------------------------------
  // 1. Digital Marketing (4 courses)
  // --------------------------------------------------------------------------
  {
    id: 1,
    category: "digital-marketing",
    level: "Expert",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/coursecard/course7.png",
    title: "Expert in Digital Marketing",
    description: "Master advanced SEO, high-budget paid ads, and full-funnel digital marketing strategies on live campaigns.",
    eligibility: [
      "Graduates & Freshers",
      "Career Switchers",
      "Entrepreneurs & Business Owners",
    ],
    skills: [
      { label: "SEO", icon: "search" },
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "GA4", icon: "chart" },
    ],
    bullets: ["Live brand campaigns & client budgets", "Recognized certificates & placement assistance", "Lifetime LMS & resource access"],
    detailsLink: "/courses/expert-digital-marketing-course",
  },
  {
    id: 2,
    category: "digital-marketing",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/coursecard/course8.png",
    title: "Advanced Digital Marketing",
    description: "Advance your performance marketing, SEO audits, and conversion optimization skill set.",
    eligibility: [
      "Marketers with basic knowledge",
      "Marketing executives",
      "Agency professionals seeking growth",
    ],
    skills: [
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "GA4", icon: "chart" },
      { label: "Google Tag Manager", icon: "search" },
    ],
    bullets: ["Real-world projects & live campaigns", "Certification & corporate placement support", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-digital-marketing-course",
  },
  {
    id: 3,
    category: "digital-marketing",
    level: "Professionals",
    duration: "4 Months",
    months: 4,
    durationPercent: 33,
    mode: "Live + Recorded",
    image: "/coursecard/course6.png",
    title: "Digital Marketing for Professionals",
    description: "Scale business performance and campaign ROI across Google Ads, Meta Ads, and LinkedIn.",
    eligibility: [
      "Working professionals",
      "Managers & team leads",
      "Weekend & flexible batch seekers",
    ],
    skills: [
      { label: "Google Ads", icon: "megaphone" },
      { label: "Meta Ads", icon: "share" },
      { label: "LinkedIn Ads", icon: "search" },
      { label: "GA4", icon: "chart" },
    ],
    bullets: ["Live corporate case studies & campaigns", "Certification & executive placement support", "Lifetime LMS access"],
    detailsLink: "/courses/digital-marketing-for-professional",
  },
  {
    id: 4,
    category: "digital-marketing",
    level: "Beginners",
    duration: "3 Months",
    months: 3,
    durationPercent: 25,
    mode: "Live + Recorded",
    image: "/coursecard/course5.jpeg",
    title: "Digital Marketing for Beginners",
    description: "Build a strong foundation across core marketing channels, search engines, and modern content tools.",
    eligibility: [
      "12th pass & undergraduate students",
      "Non-technical background learners",
      "Aspiring digital professionals",
    ],
    skills: [
      { label: "Canva", icon: "share" },
      { label: "WordPress", icon: "search" },
      { label: "SEO", icon: "chart" },
      { label: "Google Ads", icon: "megaphone" },
    ],
    bullets: ["Hands-on practical assignments", "Industry certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/digital-marketing-for-beginners",
  },

  // --------------------------------------------------------------------------
  // 2. AI & Data Science (9 courses)
  // --------------------------------------------------------------------------
  {
    id: 5,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/imagesCards/diploma_in_generative_Ai_and_prompt_engineering.webp",
    title: "Diploma in GenAI & Prompt Engineering",
    description: "Build autonomous AI agents, deploy custom LLMs, and master advanced prompt engineering.",
    eligibility: [
      "Software developers & tech enthusiasts",
      "Product managers & creators",
      "Professionals seeking AI automation",
    ],
    skills: [
      { label: "Gen AI", icon: "search" },
      { label: "Prompting", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Production-level AI agent projects", "Accredited diploma & placement assistance", "Lifetime LMS access"],
    detailsLink: "/courses/diploma-in-genai-and-prompt-engineering",
  },
  {
    id: 6,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/imagesCards/diploma_in_data_analytics.webp",
    title: "Diploma in Data Analytics",
    description: "Transform complex raw data into interactive dashboards, statistical models, and strategic insights.",
    eligibility: [
      "Graduates & aspiring analysts",
      "Excel power users & MIS executives",
      "Career switchers entering analytics",
    ],
    skills: [
      { label: "Excel", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Live enterprise analytics datasets", "Accredited diploma & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/diploma-in-data-analytics-and-ai",
  },
  {
    id: 7,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/imagesCards/Diploma_machine_learing.webp",
    title: "Diploma in Machine Learning & AI",
    description: "Develop, train, and deploy predictive algorithms and deep learning architectures with Python.",
    eligibility: [
      "Developers with coding fundamentals",
      "Software & IT engineers",
      "AI/ML career switchers",
    ],
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["End-to-end model deployment projects", "Accredited diploma & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/diploma-in-machine-learning-and-ai",
  },
  {
    id: 8,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/imagesCards/diploma_in_data_science_Ai.webp",
    title: "Diploma in Data Science & AI",
    description: "Build comprehensive end-to-end data pipelines using advanced statistics, Python, and neural networks.",
    eligibility: [
      "STEM graduates & programmers",
      "Data enthusiasts & researchers",
      "Aspiring data scientists",
    ],
    skills: [
      { label: "Python", icon: "search" },
      { label: "Machine Learning", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Live predictive modeling case studies", "Accredited diploma & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/diploma-in-data-science-and-ai",
  },
  {
    id: 9,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/imagesCards/Advance_Certification_in_Gen_ai_and_prompt_engineering.webp",
    title: "Advanced Certification in GenAI",
    description: "Architect AI assistants, custom RAG systems, and practical enterprise GenAI workflows.",
    eligibility: [
      "Working tech professionals",
      "Prompt engineering specialists",
      "AI application developers",
    ],
    skills: [
      { label: "Gen AI", icon: "search" },
      { label: "Prompting", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Enterprise generative AI applications", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-certification-in-genai-and-prompt-engineering",
  },
  {
    id: 10,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/imagesCards/Advance_certification_in_Data_Analystics_andAi.webp",
    title: "Advanced Certification in Data Analytics",
    description: "Extract actionable business intelligence using advanced SQL queries, Python analysis, and Power BI.",
    eligibility: [
      "Business & MIS analysts",
      "Professionals upskilling in SQL/Power BI",
      "Corporate analytics teams",
    ],
    skills: [
      { label: "Python", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Hands-on enterprise dashboards", "Certification & placement assistance", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-certification-in-data-analytics-and-ai",
  },
  {
    id: 11,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/imagesCards/Advance_certification_in_machine_learning_and_Ai.webp",
    title: "Advanced Certification in Machine Learning",
    description: "Train, evaluate, and productionize supervised and unsupervised machine learning models on real datasets.",
    eligibility: [
      "Python developers",
      "Data analysts upskilling in ML",
      "Tech industry job aspirants",
    ],
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Projects", icon: "chart" },
    ],
    bullets: ["Real-world machine learning labs", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-certification-in-machine-learning-and-ai",
  },
  {
    id: 12,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/imagesCards/Advance_cerfication_in_data_science_and_ai.webp",
    title: "Advanced Certification in Data Science",
    description: "Solve complex business forecasting challenges using applied statistics, feature engineering, and ML.",
    eligibility: [
      "Junior data scientists",
      "Engineers & analytical professionals",
      "Advanced analytics aspirants",
    ],
    skills: [
      { label: "Python", icon: "search" },
      { label: "ML Models", icon: "megaphone" },
      { label: "AI Tools", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Predictive analytics & ML case studies", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-certification-in-data-science-and-ai",
  },
  {
    id: 13,
    category: "ai-data-science",
    level: "Certification",
    duration: "3 Months",
    months: 3,
    durationPercent: 25,
    mode: "Live + Recorded",
    image: "/imagesCards/Certification_in_data_analytics_and_ai.webp",
    title: "Certification in Data Analytics",
    description: "Establish a robust analytics foundation with essential Excel formulas, SQL databases, and Power BI visuals.",
    eligibility: [
      "Beginners & college students",
      "Excel users learning SQL & BI",
      "Entry-level data career aspirants",
    ],
    skills: [
      { label: "Excel", icon: "search" },
      { label: "SQL", icon: "megaphone" },
      { label: "Power BI", icon: "share" },
      { label: "Analytics", icon: "chart" },
    ],
    bullets: ["Practical dashboard assignments", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/certification-in-data-analytics-and-ai",
  },

  // --------------------------------------------------------------------------
  // 3. Cyber Security (5 courses)
  // --------------------------------------------------------------------------
  {
    id: 14,
    category: "cyber-security",
    level: "Foundation",
    duration: "4 Months",
    months: 4,
    durationPercent: 33,
    mode: "Live + Recorded",
    image: "/imagesCards/Foundation in Cyber Security and Ethical Hacking.webp",
    title: "Foundation in Cyber Security",
    description: "Master computer networking fundamentals, Linux commands, security architecture, and ethical hacking.",
    eligibility: [
      "Beginners & undergraduate students",
      "IT & networking enthusiasts",
      "Cybersecurity aspirants",
    ],
    skills: [
      { label: "Networking", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Virtual cybersecurity lab exercises", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/foundation-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 15,
    category: "cyber-security",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    durationPercent: 50,
    mode: "Live + Recorded",
    image: "/imagesCards/Advanced Certification in Cyber Security and Ethical Hacking.webp",
    title: "Advanced Cyber Security & Ethical Hacking",
    description: "Perform penetration testing, vulnerability discovery, and exploit analysis in enterprise lab environments.",
    eligibility: [
      "Network & system administrators",
      "Ethical hacking enthusiasts",
      "Security testing specialists",
    ],
    skills: [
      { label: "Networking", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Enterprise penetration testing labs", "Certification & placement assistance", "Lifetime LMS access"],
    detailsLink: "/courses/advanced-certification-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 16,
    category: "cyber-security",
    level: "Expert",
    duration: "12 Months",
    months: 12,
    durationPercent: 100,
    mode: "Live + Recorded",
    image: "/imagesCards/Expert Training in Cyber Security and Ethical Hacking.webp",
    title: "Expert Cyber Security Training",
    description: "Execute end-to-end Vulnerability Assessment & Penetration Testing (VAPT) and defensive SOC workflows.",
    eligibility: [
      "IT professionals & security engineers",
      "Aspiring penetration testers",
      "VAPT & SOC analyst aspirants",
    ],
    skills: [
      { label: "VAPT", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Ethical Hacking", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Simulated real-world cyber attack labs", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/expert-training-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 17,
    category: "cyber-security",
    level: "Investigation",
    duration: "4 Months",
    months: 4,
    durationPercent: 33,
    mode: "Live + Recorded",
    image: "/imagesCards/Certiication in Digital Forensic and Cyber Investigation.webp",
    title: "Digital Forensics & Cyber Investigation",
    description: "Investigate cyber crime incidents, analyze digital disk images, and preserve court-admissible evidence.",
    eligibility: [
      "Cyber law & law enforcement aspirants",
      "Security consultants & auditors",
      "Forensic analysis specialists",
    ],
    skills: [
      { label: "Forensics", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Investigation", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Hands-on forensic case investigations", "Certification & placement support", "Lifetime LMS access"],
    detailsLink: "/courses/certification-in-digital-forensic-and-cyber-investigation",
  },
  {
    id: 18,
    category: "cyber-security",
    level: "Bug Bounty",
    duration: "4 Months",
    months: 4,
    durationPercent: 33,
    mode: "Live + Recorded",
    image: "/imagesCards/Expert Training in Bug Bounty.webp",
    title: "Bug Bounty Training",
    description: "Identify, exploit, and ethically report critical web vulnerabilities across recognized bug bounty platforms.",
    eligibility: [
      "Ethical hackers & computer science students",
      "Independent bug bounty hunters",
      "Web application security testers",
    ],
    skills: [
      { label: "Web Security", icon: "search" },
      { label: "Linux", icon: "megaphone" },
      { label: "Bug Bounty", icon: "share" },
      { label: "Security", icon: "chart" },
    ],
    bullets: ["Live target practice & legal bounty labs", "Certification & placement assistance", "Lifetime LMS access"],
    detailsLink: "/courses/expert-training-in-bug-bounty",
  },
];

const courseCategories = [
  { id: "all", label: "All Courses" },
  { id: "digital-marketing", label: "Digital Marketing" },
  { id: "ai-data-science", label: "AI & Data Science" },
  { id: "cyber-security", label: "Cyber Security" },
];

function SkillIcon({ type }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  if (type === "search") {
    return (
      <svg {...common}>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.3 4.3" />
      </svg>
    );
  }
  if (type === "megaphone") {
    return (
      <svg {...common}>
        <path d="m3 11 17-7v16L3 13z" />
        <path d="M7 14.5 9 21h4l-2.4-5.4" />
        <path d="M20 9a3 3 0 0 1 0 6" />
      </svg>
    );
  }
  if (type === "share") {
    return (
      <svg {...common}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  );
}

function EligibilityList({ items = [] }) {
  if (!items || items.length === 0) return null;
  return (
    <div className="da-course-eligibility">
      <div className="da-course-eligibility-title">
        <svg
          viewBox="0 0 24 24"
          width="13"
          height="13"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
        Who Is This Course For?
      </div>
      <ul className="da-course-eligibility-list" aria-label="Eligibility criteria">
        {items.slice(0, 3).map((item, idx) => (
          <li key={idx}>
            <svg
              className="da-eligibility-check-icon"
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DurationProgressBar({ durationPercent, durationText }) {
  const percentage = typeof durationPercent === "number" ? durationPercent : 100;
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedWidth(percentage), 60);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="da-duration-box" aria-label={`Course duration: ${durationText}`}>
      <div className="da-duration-label-row">
        <span className="da-duration-title">
          <svg
            className="da-duration-clock-icon"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          Duration
        </span>
        <span className="da-duration-value">{durationText}</span>
      </div>
      <div className="da-duration-track">
        <div
          className="da-duration-fill"
          style={{ width: `${animatedWidth}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  return (
    <article className="da-course-card" aria-label={course.title}>
      {/* Course thumbnail */}
      <div className="da-course-image-wrap">
        <img src={course.image} alt={`${course.title} thumbnail`} loading="lazy" />
      </div>

      {/* 3. Card Content */}
      <div className="da-course-content">
        <div className="da-course-title-wrap">
          <h3 title={course.title}>{course.title}</h3>
        </div>

        <DurationProgressBar
          durationPercent={course.durationPercent}
          durationText={course.duration}
        />

        {/* 2-line max description */}
        <p className="da-course-description" title={course.description}>
          {course.description}
        </p>

        {/* Who is this course for? */}
        <EligibilityList items={course.eligibility} />

        {/* CTA Buttons */}
        <div className="da-course-actions">
          <Link className="da-course-details" href={course.detailsLink}>
            Details
          </Link>
          <a className="da-course-enroll" href="#bookDemo">
            Enroll now
          </a>
        </div>
      </div>
    </article>
  );
}

/**
 * Reusable Filter Group component for Level / Program and Duration
 */
function FilterGroup({ title, options, selectedValues, onToggle, idPrefix = "flt" }) {
  if (!options || options.length === 0) return null;

  return (
    <div className="da-filter-group">
      <div className="da-filter-group-title">{title}</div>
      <div className="da-filter-options" role="group" aria-label={title}>
        {options.map((opt) => {
          const isChecked = selectedValues.includes(opt.value);
          const inputId = `${idPrefix}-${title.replace(/\s+/g, "").toLowerCase()}-${opt.value.replace(/\s+/g, "").toLowerCase()}`;
          return (
            <label
              key={opt.value}
              htmlFor={inputId}
              className={`da-filter-option ${isChecked ? "is-checked" : ""}`}
            >
              <span className="da-filter-checkbox-wrap">
                <input
                  type="checkbox"
                  id={inputId}
                  checked={isChecked}
                  onChange={() => onToggle(opt.value)}
                  className="da-filter-checkbox-native"
                />
                <span className="da-filter-checkbox-custom" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="da-filter-label-text">{opt.label}</span>
              </span>
              <span className="da-filter-count">{opt.count}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Main Course Category Filters & Interactive Showcase Component
 */
export default function CourseCategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        setSelectedLevels([lvlParam]);
      }
    };

    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  // Update browser URL query params without page reload
  const updateUrl = (catId) => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);

    if (catId && catId !== "all") {
      url.searchParams.set("category", catId);
    } else {
      url.searchParams.delete("category");
      url.searchParams.delete("level");
    }

    const newUrl = url.pathname + (url.search ? url.search : "") + url.hash;
    window.history.replaceState({}, "", newUrl);
  };

  // When domain switches: reset level/duration filters
  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    setActiveCategory(categoryId);
    setSelectedLevels([]);
    setIsMobileFilterOpen(false);

    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
    setCanScrollLeft(false);
    updateUrl(categoryId);
  };

  // Toggle filter handlers
  const handleToggleLevel = (lvl) => {
    setSelectedLevels((prev) =>
      prev.includes(lvl) ? prev.filter((item) => item !== lvl) : [...prev, lvl]
    );
  };

  const handleClearAllFilters = () => {
    setSelectedLevels([]);
  };

  // Courses of the currently active category (domain)
  const categoryCourses = useMemo(() => {
    if (activeCategory === "all") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  // Dynamically compute Level options for the currently selected domain
  const levelOptions = useMemo(() => {
    const counts = {};
    categoryCourses.forEach((c) => {
      if (c.level) {
        counts[c.level] = (counts[c.level] || 0) + 1;
      }
    });
    return Object.keys(counts).map((lvl) => ({
      value: lvl,
      label: lvl,
      count: counts[lvl],
    }));
  }, [categoryCourses]);

  // Filter courses by selected level(s) and duration(s)
  const visibleCourses = useMemo(() => {
    let list = categoryCourses;
    if (selectedLevels.length > 0) {
      list = list.filter((c) => selectedLevels.includes(c.level));
    }
    return list;
  }, [categoryCourses, selectedLevels]);

  const totalActiveFilters = selectedLevels.length;
  const isDomainSelected = activeCategory !== "all";
  const activeCategoryObj = courseCategories.find((c) => c.id === activeCategory);

  // Check scroll boundary for carousel mode in All Courses
  const checkScrollBounds = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;

    const hasOverflow = scrollWidth > clientWidth + 4;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(hasOverflow && scrollLeft + clientWidth < scrollWidth - 6);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el || isDomainSelected) return;

    checkScrollBounds();

    const handleScroll = () => {
      checkScrollBounds();
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScrollBounds);

    const timer = setTimeout(checkScrollBounds, 120);

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollBounds);
      clearTimeout(timer);
    };
  }, [visibleCourses, checkScrollBounds, isDomainSelected]);

  // Carousel arrow controls for All Courses view
  const scrollCards = (direction) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".da-course-slide");
    const gap = 24;
    const cardWidth = card ? card.getBoundingClientRect().width : 340;
    const distance = (cardWidth + gap) * direction;

    el.scrollBy({ left: distance, behavior: "smooth" });
  };

  return (
    <div className={`da-course-showcase ${isDomainSelected ? "has-domain-active" : "is-all-courses"}`} role="region" aria-label="Programs & Certifications">
      {/* 1. Category Filter Tabs */}
      <div className="course-category-filters" role="tablist" aria-label="Course category filters">
        {courseCategories.filter((category) => category.id !== "all").map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              type="button"
              role="tab"
              id={`tab-${category.id}`}
              aria-selected={isActive}
              tabIndex={0}
              className={`da-category-tab ${isActive ? "is-active" : ""}`}
              onClick={() => handleCategoryChange(category.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCategoryChange(category.id);
                }
              }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      {/* 2. Layout Switcher:
             - "All Courses": Full-width horizontal carousel with controls
             - Specific Domain Selected: 2-column layout with Left Sidebar (Level Filters) + Course Cards
      */}
      {!isDomainSelected ? (
        <div className="da-all-courses-view">
          <div className="da-course-carousel-controls">
            <span className="da-course-header-text">
              Explore all career-focused courses
              <span className="da-course-header-count">({visibleCourses.length})</span>
            </span>

            <div className="da-carousel-nav-btns" role="group" aria-label="Carousel navigation">
              <button
                type="button"
                aria-label="Previous courses"
                onClick={() => scrollCards(-1)}
                disabled={!canScrollLeft}
                className={`da-carousel-btn ${!canScrollLeft ? "is-disabled" : ""}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollCards(-1);
                  }
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Next courses"
                onClick={() => scrollCards(1)}
                disabled={!canScrollRight}
                className={`da-carousel-btn ${!canScrollRight ? "is-disabled" : ""}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    scrollCards(1);
                  }
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="course-carousel-track"
            className="da-course-track"
            ref={trackRef}
            role="region"
            aria-live="polite"
            aria-label="All courses carousel"
            tabIndex={0}
          >
            {visibleCourses.map((course, index) => (
              <div
                className="da-course-slide"
                key={course.id}
                style={{
                  animationDelay: `${Math.min(index * 50, 300)}ms`,
                }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* When a specific domain is active: Left Sidebar with Level/Program Filters + Right Grid */
        <div className="da-domain-view-layout">
          {/* Desktop Left-Side Filter Sidebar */}
          <aside className="da-filter-sidebar" aria-label="Course Filters">
            <div className="da-filter-sidebar-body">
              {/* Dynamic Level / Program Filter for selected domain */}
              <FilterGroup
                title="Level / Program"
                options={levelOptions}
                selectedValues={selectedLevels}
                onToggle={handleToggleLevel}
                idPrefix="dsk"
              />

            </div>
          </aside>

          {/* Right Main Content Area */}
          <main className="da-course-main-content">
            {/* Mobile Filter Bar & Quick Level Chips */}
            <div className="da-mobile-filter-bar">
              <button
                type="button"
                className="da-mobile-filter-trigger-btn"
                onClick={() => setIsMobileFilterOpen(true)}
                aria-label="Open filter drawer"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filter</span>
                {totalActiveFilters > 0 && (
                  <span className="da-filter-active-count-badge">{totalActiveFilters}</span>
                )}
              </button>

              <div className="da-mobile-level-chips" role="group" aria-label="Quick level filters">
                <button
                  type="button"
                  className={`da-level-chip ${selectedLevels.length === 0 ? "is-active" : ""}`}
                  onClick={handleClearAllFilters}
                >
                  All ({categoryCourses.length})
                </button>
                {levelOptions.map((opt) => {
                  const isChecked = selectedLevels.includes(opt.value);
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      className={`da-level-chip ${isChecked ? "is-active" : ""}`}
                      onClick={() => handleToggleLevel(opt.value)}
                    >
                      {opt.label} ({opt.count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Results bar */}
            <div className="da-course-results-bar">
              <div className="da-course-results-count">
                Showing <strong>{visibleCourses.length}</strong> {activeCategoryObj?.label} courses
              </div>

              {totalActiveFilters > 0 && (
                <div className="da-active-filter-tags">
                  {selectedLevels.map((lvl) => (
                    <span key={lvl} className="da-filter-tag">
                      {lvl}
                      <button
                        type="button"
                        onClick={() => handleToggleLevel(lvl)}
                        aria-label={`Remove ${lvl} filter`}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Course Cards Grid or Friendly Empty State */}
            {visibleCourses.length === 0 ? (
              <div className="da-course-empty">
                <h4>No courses found</h4>
                <p>No courses match your selected level filter. Please reset or choose another level.</p>
                <button type="button" onClick={handleClearAllFilters}>
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="da-course-grid" aria-label="Course listings">
                {visibleCourses.map((course) => (
                  <div className="da-course-grid-item" key={course.id}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      )}

      {/* Mobile Filter Drawer / Modal */}
      {isMobileFilterOpen && isDomainSelected && (
        <div
          className="da-mobile-filter-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Filter courses by level"
        >
          <div
            className="da-mobile-filter-backdrop"
            onClick={() => setIsMobileFilterOpen(false)}
            aria-hidden="true"
          />
          <div className="da-mobile-filter-drawer">
            <div className="da-mobile-drawer-header">
              <div className="da-mobile-drawer-title">
                <span>Filter Courses</span>
                {totalActiveFilters > 0 && (
                  <span className="da-filter-active-count-badge">{totalActiveFilters}</span>
                )}
              </div>
              <button
                type="button"
                className="da-mobile-drawer-close"
                onClick={() => setIsMobileFilterOpen(false)}
                aria-label="Close filters"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="da-mobile-drawer-body">
              <FilterGroup
                title="Level / Program"
                options={levelOptions}
                selectedValues={selectedLevels}
                onToggle={handleToggleLevel}
                idPrefix="mob"
              />
            </div>

            <div className="da-mobile-drawer-footer">
              <button
                type="button"
                className="da-mobile-drawer-clear"
                onClick={handleClearAllFilters}
                disabled={totalActiveFilters === 0}
              >
                Clear all
              </button>
              <button
                type="button"
                className="da-mobile-drawer-apply"
                onClick={() => setIsMobileFilterOpen(false)}
              >
                Apply ({visibleCourses.length})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
