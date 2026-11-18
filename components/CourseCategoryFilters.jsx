"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// 18 Courses across 3 domains with dynamic levels, durations, skills, and eligibility
const courses = [
  // 1. Digital Marketing (4 courses)
  {
    id: 1,
    category: "digital-marketing",
    level: "Expert",
    duration: "12 Months",
    months: 12,
    mode: "Live + Recorded",
    image: "/coursecard/expert in Digital Marketing Course.webp",
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
    detailsLink: "https://dizitaladda.com/courses/expert-digital-marketing-course",
  },
  {
    id: 2,
    category: "digital-marketing",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
    mode: "Live + Recorded",
    image: "/coursecard/advanced Digital Marketing Course.webp",
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
    detailsLink: "https://dizitaladda.com/courses/advanced-digital-marketing-course",
  },
  {
    id: 3,
    category: "digital-marketing",
    level: "Professionals",
    duration: "4 Months",
    months: 4,
    mode: "Live + Recorded",
    image: "/coursecard/digital Marketing For Professionals.webp",
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
    detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-professional",
  },
  {
    id: 4,
    category: "digital-marketing",
    level: "Beginners",
    duration: "3 Months",
    months: 3,
    mode: "Live + Recorded",
    image: "/coursecard/digital Marketing for Beginners.webp",
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
    detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-beginners",
  },

  // 2. AI & Data Science (9 courses)
  {
    id: 5,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
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
    detailsLink: "https://dizitaladda.com/courses/diploma-in-genai-and-prompt-engineering",
  },
  {
    id: 6,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
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
    detailsLink: "https://dizitaladda.com/courses/diploma-in-data-analytics-and-ai",
  },
  {
    id: 7,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
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
    detailsLink: "https://dizitaladda.com/courses/diploma-in-machine-learning-and-ai",
  },
  {
    id: 8,
    category: "ai-data-science",
    level: "Diploma",
    duration: "12 Months",
    months: 12,
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
    detailsLink: "https://dizitaladda.com/courses/diploma-in-data-science-and-ai",
  },
  {
    id: 9,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
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
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-genai-and-prompt-engineering",
  },
  {
    id: 10,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
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
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-analytics-and-ai",
  },
  {
    id: 11,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
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
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-machine-learning-and-ai",
  },
  {
    id: 12,
    category: "ai-data-science",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
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
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-science-and-ai",
  },
  {
    id: 13,
    category: "ai-data-science",
    level: "Certification",
    duration: "3 Months",
    months: 3,
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
    detailsLink: "https://dizitaladda.com/courses/certification-in-data-analytics-and-ai",
  },

  // 3. Cyber Security (5 courses)
  {
    id: 14,
    category: "cyber-security",
    level: "Foundation",
    duration: "4 Months",
    months: 4,
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
    detailsLink: "https://dizitaladda.com/courses/foundation-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 15,
    category: "cyber-security",
    level: "Advanced",
    duration: "6 Months",
    months: 6,
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
    detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 16,
    category: "cyber-security",
    level: "Expert",
    duration: "12 Months",
    months: 12,
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
    detailsLink: "https://dizitaladda.com/courses/expert-training-in-cyber-security-and-ethical-hacking",
  },
  {
    id: 17,
    category: "cyber-security",
    level: "Investigation",
    duration: "4 Months",
    months: 4,
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
    detailsLink: "https://dizitaladda.com/courses/certification-in-digital-forensic-and-cyber-investigation",
  },
  {
    id: 18,
    category: "cyber-security",
    level: "Bug Bounty",
    duration: "4 Months",
    months: 4,
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
  const common = {
    width: 15,
    height: 15,
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

// CHANGE 2: Animated Duration Progress Bar
function DurationProgressBar({ months, durationText }) {
  const safeMonths = typeof months === "number" ? months : parseInt(durationText, 10) || 6;
  const percentage = Math.min(100, Math.max(10, Math.round((safeMonths / 12) * 100)));
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedWidth(percentage);
    }, 70);
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

// CHANGE 3: "Who Is This Course For?" 3 Short Bullet Points
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

// Individual Course Card
function CourseCard({ course }) {
  return (
    <article className="da-course-card">
      <div className="da-course-image-wrap">
        <img src={course.image} alt={`${course.title} course`} loading="lazy" />
        <span className="da-course-pill da-course-level-tag">{course.level}</span>
        <span className="da-course-pill da-course-mode">{course.mode}</span>
      </div>
      <div className="da-course-content">
        <h3>{course.title}</h3>

        {/* CHANGE 2: Duration Progress Bar */}
        <DurationProgressBar months={course.months} durationText={course.duration} />

        <p className="da-course-description">{course.description}</p>

        {/* CHANGE 3: Who Is This Course For? */}
        <EligibilityList items={course.eligibility} />

        {/* Skills & Tools covered */}
        <ul className="da-course-skills" aria-label="Skills covered">
          {course.skills.map((skill) => (
            <li key={skill.label}>
              <SkillIcon type={skill.icon} />
              <span>{skill.label}</span>
            </li>
          ))}
        </ul>

        <div className="da-course-actions">
          <a className="da-course-details" href={course.detailsLink}>
            Details
          </a>
          <a className="da-course-enroll" href="#bookDemo">
            Enroll now
          </a>
        </div>
      </div>
    </article>
  );
}

// Reusable Filter Section Component (Used in both Desktop Sidebar and Mobile Drawer)
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
            <label key={opt.value} htmlFor={inputId} className={`da-filter-option ${isChecked ? "is-checked" : ""}`}>
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

export default function CourseCategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("all");
  const trackRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  // CHANGE 1: Multi-filter state (resets on category change)
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedTools, setSelectedTools] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  // Mobile drawer open state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

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

  // Switching category: resets all filters
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setSelectedLevels([]);
    setSelectedDurations([]);
    setSelectedTools([]);
    setSelectedCourses([]);
    setIsMobileFilterOpen(false);
    trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    updateUrl(categoryId);
  };

  // Toggle filter handlers
  const handleToggleLevel = (lvl) => {
    setSelectedLevels((prev) =>
      prev.includes(lvl) ? prev.filter((item) => item !== lvl) : [...prev, lvl]
    );
  };

  const handleToggleDuration = (dur) => {
    setSelectedDurations((prev) =>
      prev.includes(dur) ? prev.filter((item) => item !== dur) : [...prev, dur]
    );
  };

  const handleToggleTool = (tool) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((item) => item !== tool) : [...prev, tool]
    );
  };

  const handleToggleCourse = (cTitle) => {
    setSelectedCourses((prev) =>
      prev.includes(cTitle) ? prev.filter((item) => item !== cTitle) : [...prev, cTitle]
    );
  };

  // Clear all filters
  const handleClearAllFilters = () => {
    setSelectedLevels([]);
    setSelectedDurations([]);
    setSelectedTools([]);
    setSelectedCourses([]);
  };

  // Total count of active filters
  const totalActiveFilters =
    selectedLevels.length +
    selectedDurations.length +
    selectedTools.length +
    selectedCourses.length;

  // Courses of the currently active category (domain)
  const categoryCourses = useMemo(() => {
    if (activeCategory === "all") return courses;
    return courses.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  // Dynamically generated filter options based on categoryCourses (NOT hardcoded)
  const levelOptions = useMemo(() => {
    if (activeCategory === "all") return [];
    const counts = {};
    categoryCourses.forEach((c) => {
      counts[c.level] = (counts[c.level] || 0) + 1;
    });
    return Object.keys(counts).map((lvl) => ({
      value: lvl,
      label: lvl,
      count: counts[lvl],
    }));
  }, [categoryCourses, activeCategory]);

  const durationOptions = useMemo(() => {
    if (activeCategory === "all") return [];
    const counts = {};
    categoryCourses.forEach((c) => {
      counts[c.duration] = (counts[c.duration] || 0) + 1;
    });
    return Object.keys(counts).map((dur) => ({
      value: dur,
      label: dur,
      count: counts[dur],
    }));
  }, [categoryCourses, activeCategory]);

  const toolOptions = useMemo(() => {
    if (activeCategory === "all") return [];
    const counts = {};
    categoryCourses.forEach((c) => {
      c.skills.forEach((s) => {
        counts[s.label] = (counts[s.label] || 0) + 1;
      });
    });
    return Object.keys(counts).map((tool) => ({
      value: tool,
      label: tool,
      count: counts[tool],
    }));
  }, [categoryCourses, activeCategory]);

  const courseTitleOptions = useMemo(() => {
    if (activeCategory === "all") return [];
    return categoryCourses.map((c) => ({
      value: c.title,
      label: c.title,
      count: 1,
    }));
  }, [categoryCourses, activeCategory]);

  // Multi-filter evaluation:
  // Same category -> OR
  // Different categories -> AND
  const visibleCourses = useMemo(() => {
    if (activeCategory === "all") {
      return courses;
    }

    return categoryCourses.filter((course) => {
      // 1. Level filter (OR)
      if (selectedLevels.length > 0 && !selectedLevels.includes(course.level)) {
        return false;
      }
      // 2. Duration filter (OR)
      if (selectedDurations.length > 0 && !selectedDurations.includes(course.duration)) {
        return false;
      }
      // 3. Tools / Topics filter (OR: course must have at least one selected tool)
      if (selectedTools.length > 0) {
        const hasMatchingTool = course.skills.some((s) => selectedTools.includes(s.label));
        if (!hasMatchingTool) return false;
      }
      // 4. Course name filter (OR)
      if (selectedCourses.length > 0 && !selectedCourses.includes(course.title)) {
        return false;
      }

      return true;
    });
  }, [categoryCourses, activeCategory, selectedLevels, selectedDurations, selectedTools, selectedCourses]);

  // Entrance observer for animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track || hasEntered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(track);
    return () => observer.disconnect();
  }, [hasEntered]);

  // Body scroll lock on mobile drawer open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMobileFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileFilterOpen]);

  // Keyboard navigation: Escape key closes drawer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isMobileFilterOpen) {
        setIsMobileFilterOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileFilterOpen]);

  const scrollCards = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".da-course-slide");
    const distance = card ? card.getBoundingClientRect().width + 24 : trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  const isDomainSelected = activeCategory !== "all";
  const activeCategoryObj = courseCategories.find((c) => c.id === activeCategory);

  return (
    <div className={`da-course-showcase ${isDomainSelected ? "has-domain-active" : "is-all-courses"}`}>
      {/* 1. Top Domain Tabs (Row 1) */}
      <div className="course-category-filters" role="group" aria-label="Filter courses by domain">
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

      {/* When "All Courses" is selected: No sidebar, Row 2 hidden, full width cards */}
      {!isDomainSelected ? (
        <div className="da-all-courses-view">
          <div className="da-course-carousel-controls">
            <span>
              Explore all career-focused courses
              <span className="da-course-header-count">({visibleCourses.length})</span>
            </span>
            {visibleCourses.length > 3 && (
              <div>
                <button type="button" aria-label="Previous courses" onClick={() => scrollCards(-1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
                <button type="button" aria-label="Next courses" onClick={() => scrollCards(1)}>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="da-course-track" ref={trackRef} aria-label="All courses">
            {visibleCourses.map((course, index) => (
              <div
                className={`da-course-slide ${hasEntered ? "is-visible" : ""}`}
                key={course.id}
                style={{ "--course-reveal-delay": `${index * 80}ms` }}
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* When a particular domain is selected: E-commerce 2-column layout (Sidebar + Cards) */
        <div className="da-domain-view-layout">
          {/* Desktop Filter Sidebar (Sticky, Left Column) */}
          <aside className="da-filter-sidebar" aria-label="Course Filters">
            <div className="da-filter-sidebar-header">
              <div className="da-filter-sidebar-title">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filters</span>
                {totalActiveFilters > 0 && (
                  <span className="da-filter-active-count-badge">{totalActiveFilters}</span>
                )}
              </div>
              {totalActiveFilters > 0 && (
                <button
                  type="button"
                  className="da-filter-clear-all-btn"
                  onClick={handleClearAllFilters}
                >
                  Clear all
                </button>
              )}
            </div>

            <div className="da-filter-sidebar-body">
              {/* 1. Level Filter */}
              <FilterGroup
                title="Level / Program"
                options={levelOptions}
                selectedValues={selectedLevels}
                onToggle={handleToggleLevel}
                idPrefix="dsk"
              />

              {/* 2. Duration Filter */}
              <FilterGroup
                title="Duration"
                options={durationOptions}
                selectedValues={selectedDurations}
                onToggle={handleToggleDuration}
                idPrefix="dsk"
              />

              {/* 3. Tools / Topics Filter */}
              <FilterGroup
                title="Tools & Topics"
                options={toolOptions}
                selectedValues={selectedTools}
                onToggle={handleToggleTool}
                idPrefix="dsk"
              />

              {/* 4. Course Title Filter */}
              <FilterGroup
                title="Specific Course"
                options={courseTitleOptions}
                selectedValues={selectedCourses}
                onToggle={handleToggleCourse}
                idPrefix="dsk"
              />
            </div>
          </aside>

          {/* Right Main Column (Top bar + Course Cards Grid / Empty State) */}
          <main className="da-course-main-content">
            <div className="da-course-results-bar">
              <div className="da-course-results-count">
                Showing <strong>{visibleCourses.length}</strong> of{" "}
                <strong>{categoryCourses.length}</strong> {activeCategoryObj?.label} courses
              </div>

              {/* Mobile "Filters" trigger button */}
              <button
                type="button"
                className="da-mobile-filter-trigger-btn"
                onClick={() => setIsMobileFilterOpen(true)}
                aria-label="Open course filters"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span>Filters</span>
                {totalActiveFilters > 0 && (
                  <span className="da-mobile-btn-badge">{totalActiveFilters}</span>
                )}
              </button>
            </div>

            {/* Active Filter Chips with individual remove buttons */}
            {totalActiveFilters > 0 && (
              <div className="da-course-active-chips" role="group" aria-label="Active filters">
                {selectedLevels.map((lvl) => (
                  <button
                    key={`lvl-${lvl}`}
                    type="button"
                    className="da-active-chip"
                    onClick={() => handleToggleLevel(lvl)}
                    aria-label={`Remove level filter ${lvl}`}
                  >
                    <span>Level: {lvl}</span>
                    <span className="da-chip-x" aria-hidden="true">&times;</span>
                  </button>
                ))}
                {selectedDurations.map((dur) => (
                  <button
                    key={`dur-${dur}`}
                    type="button"
                    className="da-active-chip"
                    onClick={() => handleToggleDuration(dur)}
                    aria-label={`Remove duration filter ${dur}`}
                  >
                    <span>Duration: {dur}</span>
                    <span className="da-chip-x" aria-hidden="true">&times;</span>
                  </button>
                ))}
                {selectedTools.map((tool) => (
                  <button
                    key={`tool-${tool}`}
                    type="button"
                    className="da-active-chip"
                    onClick={() => handleToggleTool(tool)}
                    aria-label={`Remove tool filter ${tool}`}
                  >
                    <span>{tool}</span>
                    <span className="da-chip-x" aria-hidden="true">&times;</span>
                  </button>
                ))}
                {selectedCourses.map((cTitle) => (
                  <button
                    key={`course-${cTitle}`}
                    type="button"
                    className="da-active-chip"
                    onClick={() => handleToggleCourse(cTitle)}
                    aria-label={`Remove course filter ${cTitle}`}
                  >
                    <span>{cTitle}</span>
                    <span className="da-chip-x" aria-hidden="true">&times;</span>
                  </button>
                ))}
                <button
                  type="button"
                  className="da-active-chip-clear"
                  onClick={handleClearAllFilters}
                >
                  Clear all
                </button>
              </div>
            )}

            {/* Course Cards Grid or Empty State */}
            {visibleCourses.length === 0 ? (
              <div className="da-course-empty">
                <div className="da-course-empty-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="30"
                    height="30"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </div>
                <h4>No Courses Found</h4>
                <p>No courses match your selected filter criteria. Please reset your filters or explore other categories.</p>
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

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {isMobileFilterOpen && isDomainSelected && (
        <div
          className="da-mobile-filter-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Filter courses"
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
              <FilterGroup
                title="Duration"
                options={durationOptions}
                selectedValues={selectedDurations}
                onToggle={handleToggleDuration}
                idPrefix="mob"
              />
              <FilterGroup
                title="Tools & Topics"
                options={toolOptions}
                selectedValues={selectedTools}
                onToggle={handleToggleTool}
                idPrefix="mob"
              />
              <FilterGroup
                title="Specific Course"
                options={courseTitleOptions}
                selectedValues={selectedCourses}
                onToggle={handleToggleCourse}
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
