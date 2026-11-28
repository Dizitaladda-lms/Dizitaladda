"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Keep course names and routes together here so the mega menu stays easy to update.
const courseGroups = [
  {
    title: "Digital Marketing & Design",
    description: "Build creative and digital marketing skills.",
    icon: "marketing",
    courses: [
      { title: "Digital Marketing for Beginners", href: "/courses/digital-marketing-for-beginners", terms: ["short"] },
      { title: "Digital Marketing for Professionals", href: "/courses/digital-marketing-for-professional", terms: ["short"] },
      { title: "Advanced Digital Marketing", href: "/courses/advanced-digital-marketing-course", terms: ["short", "long"] },
      { title: "Expert Digital Marketing", href: "/courses/expert-digital-marketing-course", terms: ["long"] },
      { title: "Graphic Design & Video Editing", href: "/courses/graphic-design-and-professional-video-editing-course", terms: ["short"] },
      { title: "Graphic Design & Motion Graphics", href: "/courses/graphic-design-and-motion-graphics", terms: ["short"] },
      { title: "UI/UX Design", href: "/courses/ui-ux-design-course", terms: ["short"] },
      { title: "Web Development", href: "/courses/web-development-course", terms: ["short", "long"] },
      { title: "Computer Software & Technology", href: "/courses/diploma-in-computer-software-and-technology", terms: ["long"] },
    ],
  },
  {
    title: "Data Analytics",
    description: "Explore business intelligence, SQL, Power BI and data pipelines.",
    icon: "analytics",
    courses: [
      { title: "Diploma in Data Analytics & AI", href: "/courses/diploma-in-data-analytics-and-ai", terms: ["long"] },
      { title: "Advanced Data Analytics & AI", href: "/courses/advanced-certification-in-data-analytics-and-ai", terms: ["short"] },
      { title: "Certification in Data Analytics & AI", href: "/courses/certification-in-data-analytics-and-ai", terms: ["short"] },
      { title: "Data Science & Analytics", href: "/courses/data-science-analytics", terms: ["short"] },
    ],
  },
  {
    title: "Data Science",
    description: "Master Python, predictive modeling, machine learning and big data.",
    icon: "science",
    courses: [
      { title: "Diploma in Data Science & AI", href: "/courses/diploma-in-data-science-and-ai", terms: ["long"] },
      { title: "Advanced Data Science & AI", href: "/courses/advanced-certification-in-data-science-and-ai", terms: ["short"] },
      { title: "Data Science & Analytics", href: "/courses/data-science-analytics", terms: ["short"] },
      { title: "Diploma in Machine Learning & AI", href: "/courses/diploma-in-machine-learning-and-ai", terms: ["long"] },
    ],
  },
  {
    title: "Cyber Security & Ethical Hacking",
    description: "Learn to protect systems, networks, investigate breaches and forensic defense.",
    icon: "security",
    courses: [
      { title: "Foundation in Cyber Security & Ethical Hacking", href: "/courses/foundation-in-cyber-security-and-ethical-hacking", terms: ["short"] },
      { title: "Advanced Cyber Security & Ethical Hacking", href: "/courses/advanced-certification-in-cyber-security-and-ethical-hacking", terms: ["short"] },
      { title: "Expert Cyber Security & Ethical Hacking", href: "/courses/expert-training-in-cyber-security-and-ethical-hacking", terms: ["long"] },
      { title: "Digital Forensics & Cyber Investigation", href: "/courses/certification-in-digital-forensic-and-cyber-investigation", terms: ["short"] },
      { title: "Bug Bounty", href: "/courses/expert-training-in-bug-bounty", terms: ["short"] },
      { title: "Ethical Hacking & Digital Forensics", href: "/courses/ethical-hacking-and-digital-forensics-course", terms: ["long"] },
    ],
  },
  {
    title: "Artificial Intelligence & ML",
    description: "Turn deep learning, LLMs and GenAI tools into practical skills.",
    icon: "data",
    courses: [
      { title: "Advanced Gen AI & Prompt Engineering", href: "/courses/advanced-certification-in-genai-and-prompt-engineering", terms: ["short"] },
      { title: "Diploma in Gen AI & Prompt Engineering", href: "/courses/diploma-in-genai-and-prompt-engineering", terms: ["long"] },
      { title: "Diploma in Machine Learning & AI", href: "/courses/diploma-in-machine-learning-and-ai", terms: ["long"] },
      { title: "Advanced Machine Learning & AI", href: "/courses/advanced-certification-in-machine-learning-and-ai", terms: ["short"] },
    ],
  },
];

const courseTerms = [
  { id: "short", label: "Short Term Course", duration: "6 Months" },
  { id: "long", label: "Long Term Course", duration: "1 Year" },
];

const indianUniversityStates = [
  {
    state: "Delhi NCR",
    code: "DL",
    subtitle: "10+ Partner Universities",
    universities: [
      { name: "Delhi University (DU SOL)", courses: "BBA, B.Com, BA & MBA Open Learning" },
      { name: "Amity University Noida", courses: "BBA, BCA, MBA, MCA & Digital Marketing" },
      { name: "Jamia Hamdard University", courses: "BBA, BCA, MBA & Healthcare IT" },
      { name: "Guru Gobind Singh Indraprastha Univ.", courses: "BBA, BCA, B.Com (Hons), MBA" },
      { name: "Galgotias University", courses: "B.Tech AI, BCA, BBA & MBA" },
    ],
  },
  {
    state: "Maharashtra",
    code: "MH",
    subtitle: "10+ Partner Universities",
    universities: [
      { name: "NMIMS Global (Mumbai)", courses: "MBA, BBA & PG Diploma in Management" },
      { name: "DY Patil University (Pune / Navi Mumbai)", courses: "BBA, BCA, MBA & Digital Business" },
      { name: "Symbiosis Centre for Distance Learning", courses: "PGDBA, MBA & Data Science Tracks" },
      { name: "MIT-WPU Pune", courses: "BBA, BCA, MCA & M.Sc Data Science" },
      { name: "Bharati Vidyapeeth University", courses: "BBA, BCA, MBA & Cyber Security" },
    ],
  },
  {
    state: "Karnataka",
    code: "KA",
    subtitle: "10+ Partner Universities",
    universities: [
      { name: "Jain University (Bengaluru)", courses: "BBA, B.Com, MBA & MCA Degrees" },
      { name: "Manipal Academy of Higher Education", courses: "BBA, BCA, MBA & M.Sc Data Science" },
      { name: "Christ University (Bengaluru)", courses: "BBA, BCA, MBA & Analytics" },
      { name: "REVA University", courses: "B.Tech AI/ML, BCA, BBA & MBA" },
      { name: "Yenepoya University", courses: "BCA, BBA, MBA & Cloud Computing" },
    ],
  },
  {
    state: "Uttar Pradesh",
    code: "UP",
    subtitle: "10+ Partner Universities",
    universities: [
      { name: "Amity University Lucknow", courses: "BBA, BCA, B.Com & MBA" },
      { name: "Mangalayatan University (Aligarh)", courses: "UG & PG Online / Regular Degrees" },
      { name: "Swami Vivekanand Subharti Univ.", courses: "BBA, BCA, MBA & MCA" },
      { name: "Sharda University (Greater Noida)", courses: "BBA, B.Tech CSE, MBA & AI" },
      { name: "Integral University (Lucknow)", courses: "BBA, BCA, MBA & Data Analytics" },
    ],
  },
  {
    state: "Haryana",
    code: "HR",
    subtitle: "8+ Partner Universities",
    universities: [
      { name: "Manav Rachna University", courses: "BBA, BCA, MBA & Digital Marketing" },
      { name: "SGT University (Gurugram)", courses: "BBA, BCA, MBA & Mass Comm" },
      { name: "GD Goenka University", courses: "BBA, B.Design, MBA & AI" },
      { name: "K.R. Mangalam University", courses: "BCA, BBA, MBA & Cyber Security" },
      { name: "Kurukshetra University (DDE)", courses: "BA, B.Com, MBA & MCA" },
    ],
  },
  {
    state: "Punjab",
    code: "PB",
    subtitle: "8+ Partner Universities",
    universities: [
      { name: "Lovely Professional University (LPU)", courses: "BBA, BCA, MBA, MCA & Data Science" },
      { name: "Chandigarh University", courses: "NAAC A+ BBA, BCA, MBA & AI" },
      { name: "Chitkara University", courses: "BBA, B.Tech AI, MBA & Marketing" },
      { name: "CT University (Ludhiana)", courses: "BBA, BCA, MBA & Cyber Security" },
      { name: "Rayat Bahra University", courses: "UG & PG Management & IT Degrees" },
    ],
  },
  {
    state: "Rajasthan",
    code: "RJ",
    subtitle: "8+ Partner Universities",
    universities: [
      { name: "Manipal University Jaipur", courses: "UGC-Entitled BBA, BCA, MBA & MCA" },
      { name: "Amity University Jaipur", courses: "BBA, BCA, MBA & Data Analytics" },
      { name: "JECRC University", courses: "B.Tech AI, BBA, BCA & MBA" },
      { name: "Poornima University", courses: "BBA, BCA, MBA & Digital Marketing" },
      { name: "Vivekananda Global University (VGU)", courses: "Online & Regular UG / PG Degrees" },
    ],
  },
  {
    state: "Himachal & Uttarakhand",
    code: "UK",
    subtitle: "8+ Partner Universities",
    universities: [
      { name: "Shoolini University (Solan)", courses: "BBA, BCA, MBA & AI / Data Science" },
      { name: "UPES (Dehradun)", courses: "BBA, BCA, MBA & Cloud / Cyber Security" },
      { name: "Uttaranchal University", courses: "Online & Regular BBA, BCA, MBA" },
      { name: "Graphic Era University", courses: "B.Tech CSE, BCA, BBA & MBA" },
      { name: "DIT University (Dehradun)", courses: "BCA, BBA, MBA & Data Analytics" },
    ],
  },
  {
    state: "Gujarat",
    code: "GJ",
    subtitle: "6+ Partner Universities",
    universities: [
      { name: "Parul University (Vadodara)", courses: "BBA, BCA, MBA & MCA" },
      { name: "Marwadi University (Rajkot)", courses: "BBA, BCA, MBA & AI/ML" },
      { name: "Silver Oak University", courses: "BCA, BBA, MBA & Cyber Security" },
      { name: "Karnavati University", courses: "BBA, Design & MBA Marketing" },
      { name: "PP Savani University", courses: "BBA, B.Tech IT & MBA" },
    ],
  },
  {
    state: "Tamil Nadu",
    code: "TN",
    subtitle: "8+ Partner Universities",
    universities: [
      { name: "SRM Institute of Science & Tech", courses: "BBA, BCA, MBA & Data Science" },
      { name: "Vellore Institute of Tech (VIT)", courses: "MBA, MCA & Data Analytics" },
      { name: "Vels University (Chennai)", courses: "BBA, BCA, MBA & Digital Media" },
      { name: "Hindustan Institute of Technology", courses: "BBA, BCA, MBA & Cyber Security" },
      { name: "Bharathidasan University (DDE)", courses: "B.Com, BBA, MBA & MCA" },
    ],
  },
];

function CountryFlag({ code }) {
  switch (code) {
    case "UK":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="7" />
          <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12" />
          <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7" />
        </svg>
      );
    case "US":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="40" fill="#fff" />
          {[0, 6, 12, 18, 24, 30, 36].map((y) => (
            <rect key={y} y={y} width="60" height="3.2" fill="#B22234" />
          ))}
          <rect width="26" height="21" fill="#3C3B6E" />
        </svg>
      );
    case "CA":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="15" height="40" fill="#FF0000" />
          <rect x="15" width="30" height="40" fill="#fff" />
          <rect x="45" width="15" height="40" fill="#FF0000" />
          <path d="M30 9 L33 17 L40 16 L35 21 L37 26 L30 23 L23 26 L25 21 L20 16 L27 17 Z" fill="#FF0000" />
        </svg>
      );
    case "AU":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="40" fill="#00008B" />
          <rect width="28" height="19" fill="#012169" />
          <path d="M0,0 L28,19 M28,0 L0,19" stroke="#fff" strokeWidth="3" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#fff" strokeWidth="5" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#C8102E" strokeWidth="3" />
          <circle cx="45" cy="14" r="2" fill="#fff" />
          <circle cx="40" cy="24" r="2" fill="#fff" />
          <circle cx="48" cy="28" r="2" fill="#fff" />
          <circle cx="14" cy="30" r="3" fill="#fff" />
        </svg>
      );
    case "DE":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="13.4" fill="#000" />
          <rect y="13.3" width="60" height="13.4" fill="#DD0000" />
          <rect y="26.6" width="60" height="13.4" fill="#FFCE00" />
        </svg>
      );
    case "IE":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="20" height="40" fill="#169B62" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#FF883E" />
        </svg>
      );
    case "NZ":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="40" fill="#00247D" />
          <rect width="28" height="19" fill="#012169" />
          <path d="M0,0 L28,19 M28,0 L0,19" stroke="#fff" strokeWidth="3" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#fff" strokeWidth="5" />
          <path d="M14,0 V19 M0,9.5 H28" stroke="#C8102E" strokeWidth="3" />
          <circle cx="45" cy="12" r="2.2" fill="#CC142B" stroke="#fff" strokeWidth="0.8" />
          <circle cx="40" cy="22" r="2.2" fill="#CC142B" stroke="#fff" strokeWidth="0.8" />
          <circle cx="50" cy="22" r="2.2" fill="#CC142B" stroke="#fff" strokeWidth="0.8" />
          <circle cx="45" cy="31" r="2.4" fill="#CC142B" stroke="#fff" strokeWidth="0.8" />
        </svg>
      );
    case "FR":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="20" height="40" fill="#0055A4" />
          <rect x="20" width="20" height="40" fill="#fff" />
          <rect x="40" width="20" height="40" fill="#EF4135" />
        </svg>
      );
    case "AE":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect x="16" width="44" height="13.4" fill="#00732F" />
          <rect x="16" y="13.3" width="44" height="13.4" fill="#fff" />
          <rect x="16" y="26.6" width="44" height="13.4" fill="#000" />
          <rect width="16" height="40" fill="#FF0000" />
        </svg>
      );
    case "SG":
      return (
        <svg viewBox="0 0 60 40" className="site-flag-svg" aria-hidden="true">
          <rect width="60" height="20" fill="#EF3340" />
          <rect y="20" width="60" height="20" fill="#fff" />
          <circle cx="15" cy="10" r="6" fill="#fff" />
          <circle cx="17.5" cy="10" r="5" fill="#EF3340" />
        </svg>
      );
    default:
      return <span className="site-abroad-code">{code}</span>;
  }
}

const studyAbroadCountries = [
  {
    country: "United Kingdom (UK)",
    code: "UK",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "University of Birmingham", courses: "MSc Digital Marketing, MBA, Data Science" },
      { name: "University of Leeds", courses: "BSc Computer Science, MSc AI & Analytics" },
      { name: "University of Greenwich", courses: "BBA, MBA, Cyber Security & Forensics" },
      { name: "Coventry University", courses: "BSc Data Science, MSc Digital Business" },
      { name: "University of East London", courses: "MBA, MSc FinTech & Artificial Intelligence" },
    ],
  },
  {
    country: "United States (USA)",
    code: "US",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "Arizona State University", courses: "MS Business Analytics, BS Digital Marketing" },
      { name: "Northeastern University", courses: "MS Data Science, MS Cyber Security" },
      { name: "University of Texas at Dallas", courses: "MS Information Tech, MBA Marketing" },
      { name: "Pace University (New York)", courses: "BBA Marketing, MS Computer Science" },
      { name: "California State University", courses: "MBA, BS Data Analytics & AI" },
    ],
  },
  {
    country: "Canada",
    code: "CA",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "University of Toronto (SCS)", courses: "Data Science, Digital Marketing, Cyber Security" },
      { name: "York University", courses: "BBA, MBA, Post-Grad Digital & AI" },
      { name: "Seneca Polytechnic", courses: "PG Diploma Marketing, Data Analytics" },
      { name: "Humber College", courses: "BCom Digital Business, Cloud & Cyber Security" },
      { name: "University Canada West", courses: "MBA, BCom Business & Technology" },
    ],
  },
  {
    country: "Australia",
    code: "AU",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "University of Melbourne", courses: "Master of Digital Marketing, MS Data Science" },
      { name: "Monash University", courses: "Bachelor of IT, Master of Cybersecurity" },
      { name: "Deakin University", courses: "MBA, Master of Business Analytics" },
      { name: "RMIT University", courses: "Bachelor of Design (UI/UX), Master of AI" },
      { name: "Macquarie University", courses: "Master of Marketing, BS Cyber Security" },
    ],
  },
  {
    country: "Germany",
    code: "DE",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "GISMA University of Applied Sciences", courses: "MSc Data Science, AI & Digital Business" },
      { name: "SRH Berlin University", courses: "MA Digital Marketing, MSc Cyber Security" },
      { name: "BSBI (Berlin)", courses: "MBA, MSc Digital Marketing & Analytics" },
      { name: "IU International University", courses: "BSc Data Science, MBA Tech Management" },
      { name: "EU Business School Munich", courses: "BBA, MBA Digital Business" },
    ],
  },
  {
    country: "Ireland",
    code: "IE",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "Trinity College Dublin", courses: "MSc Digital Marketing Strategy, MSc Data Science" },
      { name: "University College Dublin (UCD)", courses: "MSc Business Analytics, MBA" },
      { name: "Dublin Business School (DBS)", courses: "MBA, MSc Cyber Security & FinTech" },
      { name: "National College of Ireland", courses: "MSc AI, MSc Data Analytics" },
      { name: "University of Galway", courses: "MSc Digital Marketing, BSc Computer Science" },
    ],
  },
  {
    country: "New Zealand",
    code: "NZ",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "University of Auckland", courses: "Master of Marketing, MSc Data Science" },
      { name: "Auckland University of Technology (AUT)", courses: "Bachelor of Digital Design, MSc Cyber Security" },
      { name: "Victoria University of Wellington", courses: "Master of Business Analysis, AI" },
      { name: "University of Waikato", courses: "Master of Digital Business, Cyber Security" },
      { name: "Massey University", courses: "Master of Analytics, MBA" },
    ],
  },
  {
    country: "France",
    code: "FR",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "SKEMA Business School", courses: "MSc Digital Marketing, Global MBA" },
      { name: "EDHEC Business School", courses: "MSc Data Analytics & Artificial Intelligence" },
      { name: "NEOMA Business School", courses: "MSc Digital & Innovative Marketing" },
      { name: "EMLyon Business School", courses: "MSc Cybersecurity & Digital Leadership" },
      { name: "KEDGE Business School", courses: "MBA, MSc Digital Marketing & Sales" },
    ],
  },
  {
    country: "UAE (Dubai)",
    code: "AE",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "Heriot-Watt University Dubai", courses: "MSc Digital Marketing, BSc Data Science" },
      { name: "Middlesex University Dubai", courses: "MBA, MSc Cyber Security & Pen Testing" },
      { name: "University of Wollongong Dubai", courses: "BBA, Master of Applied AI" },
      { name: "Murdoch University Dubai", courses: "BSc Cyber Security, MBA Digital" },
      { name: "SP Jain School of Global Management", courses: "BBA, Global MBA, Big Data" },
    ],
  },
  {
    country: "Singapore",
    code: "SG",
    subtitle: "5+ Partner Universities",
    universities: [
      { name: "PSB Academy Singapore", courses: "Bachelor of Digital Marketing, Cyber Security" },
      { name: "SIM Global Education", courses: "BSc Data Science, Business Analytics" },
      { name: "Kaplan Higher Education Singapore", courses: "BBA, MBA, FinTech & AI" },
      { name: "James Cook University Singapore", courses: "BTech IT, MBA Analytics" },
      { name: "MDIS Singapore", courses: "BSc Digital Media, MSc Technology Management" },
    ],
  },
];



export default function PublicNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(0);
  const [selectedState, setSelectedState] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(false);
  const navRef = useRef(null);
  const mobileTriggerRef = useRef(null);
  const coursesTriggerRef = useRef(null);
  const moreTriggerRef = useRef(null);
  const studentTriggerRef = useRef(null);
  const domainTabRefs = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateViewport = (event) => setIsMobileViewport(event.matches);
    updateViewport(mediaQuery);
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, []);

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        const mobileDrawerIsOpen = navRef.current?.querySelector(".site-links")?.classList.contains("is-mobile-open");
        const escapeFromMore = event.target.closest?.(".site-more-dropdown");
        const escapeFromStudents = event.target.closest?.(".site-student-dropdown");
        const dropdownIsOpen = navRef.current?.querySelector(".site-dropdown.is-open");
        if (!mobileDrawerIsOpen && !dropdownIsOpen) return;
        setOpenMenu(null);
        setMobileOpen(false);
        if (mobileDrawerIsOpen) mobileTriggerRef.current?.focus();
        else if (escapeFromMore) moreTriggerRef.current?.focus();
        else if (escapeFromStudents) studentTriggerRef.current?.focus();
        else coursesTriggerRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  const openCourses = () => {
    setSelectedDomain(0);
    setOpenMenu("courses");
  };

  const toggleMenu = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
      return;
    }
    if (menu === "courses") setSelectedDomain(0);
    setOpenMenu(menu);
  };

  const openOnDesktopHover = (menu) => {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      if (menu === "courses") openCourses();
      else setOpenMenu(menu);
    }
  };

  const selectDomainByKeyboard = (event, index) => {
    const keyDirection = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1
      : event.key === "ArrowUp" || event.key === "ArrowLeft" ? -1 : 0;
    if (keyDirection) {
      event.preventDefault();
      const nextIndex = (index + keyDirection + courseGroups.length) % courseGroups.length;
      setSelectedDomain(nextIndex);
      domainTabRefs.current[nextIndex]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      const nextIndex = event.key === "Home" ? 0 : courseGroups.length - 1;
      setSelectedDomain(nextIndex);
      domainTabRefs.current[nextIndex]?.focus();
    }
  };

  const activeGroup = courseGroups[selectedDomain];

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
        {/* Continuous Announcement & Offers Marquee Bar */}
        <div className="site-announcement-bar" aria-label="Latest course announcements and special offers">
          <div className="site-announcement-inner">
            <div className="site-announcement-track">
              {/* Group 1 */}
              <div className="site-announcement-group">
                <a href="#bookDemo" className="site-announcement-item">
                  <span className="site-announcement-badge">Special Offer</span>
                  <span className="site-announcement-text">Flat <strong>20% OFF</strong> on Long-Term Professional Diplomas</span>
                  <span className="site-announcement-link">Claim Offer &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/#courses" className="site-announcement-item">
                  <span className="site-announcement-badge">New Batches</span>
                  <span className="site-announcement-text">Weekday &amp; Weekend Batches Starting This Monday</span>
                  <span className="site-announcement-link">Reserve Seat &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/courses/diploma-in-data-analytics-and-ai" className="site-announcement-item">
                  <span className="site-announcement-badge">In-Demand Courses</span>
                  <span className="site-announcement-text">Data Science, GenAI, Cyber Security &amp; Digital Marketing</span>
                  <span className="site-announcement-link">Explore &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="#bookDemo" className="site-announcement-item">
                  <span className="site-announcement-badge">Free Demo</span>
                  <span className="site-announcement-text">1-on-1 Career Counselling &amp; Live Class Access</span>
                  <span className="site-announcement-link">Book Free &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/success-stories" className="site-announcement-item">
                  <span className="site-announcement-badge">100% Placement</span>
                  <span className="site-announcement-text">Live Client Projects &amp; 350+ Top Hiring Partners</span>
                  <span className="site-announcement-link">View Stories &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>
              </div>

              {/* Group 2 (Exact Duplicate for Seamless Infinite Loop) */}
              <div className="site-announcement-group" aria-hidden="true">
                <a href="#bookDemo" className="site-announcement-item" tabIndex="-1">
                  <span className="site-announcement-badge">Special Offer</span>
                  <span className="site-announcement-text">Flat <strong>20% OFF</strong> on Long-Term Professional Diplomas</span>
                  <span className="site-announcement-link">Claim Offer &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/#courses" className="site-announcement-item" tabIndex="-1">
                  <span className="site-announcement-badge">New Batches</span>
                  <span className="site-announcement-text">Weekday &amp; Weekend Batches Starting This Monday</span>
                  <span className="site-announcement-link">Reserve Seat &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/courses/diploma-in-data-analytics-and-ai" className="site-announcement-item" tabIndex="-1">
                  <span className="site-announcement-badge">In-Demand Courses</span>
                  <span className="site-announcement-text">Data Science, GenAI, Cyber Security &amp; Digital Marketing</span>
                  <span className="site-announcement-link">Explore &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="#bookDemo" className="site-announcement-item" tabIndex="-1">
                  <span className="site-announcement-badge">Free Demo</span>
                  <span className="site-announcement-text">1-on-1 Career Counselling &amp; Live Class Access</span>
                  <span className="site-announcement-link">Book Free &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>

                <a href="/success-stories" className="site-announcement-item" tabIndex="-1">
                  <span className="site-announcement-badge">100% Placement</span>
                  <span className="site-announcement-text">Live Client Projects &amp; 350+ Top Hiring Partners</span>
                  <span className="site-announcement-link">View Stories &rarr;</span>
                </a>
                <span className="site-announcement-sep" aria-hidden="true">&#9670;</span>
              </div>
            </div>
          </div>
        </div>

        <div className="site-nav-inner">
          <a className="site-brand" href="/" aria-label="DizitalAdda home">
            <img src="/logo.png" alt="DizitalAdda" />
          </a>
          <button ref={mobileTriggerRef} className="site-mobile-toggle" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            <span /><span /><span />
          </button>
          <div className={`site-links${mobileOpen ? " is-mobile-open" : ""}`}>
            <div className={`site-dropdown site-courses-dropdown${openMenu === "courses" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("courses")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={coursesTriggerRef} className="site-courses-trigger" type="button" aria-haspopup="dialog" aria-expanded={openMenu === "courses"} aria-controls="site-course-menu" onClick={() => toggleMenu("courses")}>
                Courses <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-course-menu" id="site-course-menu" role="dialog" aria-label="Browse courses">
                <div className="site-course-tabs" role="tablist" aria-label="Course domains" aria-orientation={isMobileViewport ? "horizontal" : "vertical"}>
                  {courseGroups.map((group, index) => (
                    <button
                      className={`site-domain-tab${selectedDomain === index ? " is-selected" : ""}`}
                      id={`course-domain-tab-${index}`}
                      key={group.title}
                      ref={(element) => { domainTabRefs.current[index] = element; }}
                      type="button"
                      role="tab"
                      aria-selected={selectedDomain === index}
                      aria-controls="course-domain-panel"
                      tabIndex={selectedDomain === index ? 0 : -1}
                      onClick={() => setSelectedDomain(index)}
                      onKeyDown={(event) => selectDomainByKeyboard(event, index)}
                    >
                      <span className="site-domain-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          {group.icon === "marketing" && <><path d="M4 14.5 19 5l-5.5 15-2.3-6.2L4 14.5Z" /><path d="m11.2 13.8 4.3-4.3" /></>}
                          {group.icon === "security" && <><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></>}
                          {group.icon === "analytics" && <><path d="M4 19V5M4 19h16" /><path d="m7 15 3-3 3 2 5-7" /><circle cx="7" cy="15" r="1" /><circle cx="10" cy="12" r="1" /><circle cx="13" cy="14" r="1" /><circle cx="18" cy="7" r="1" /></>}
                          {group.icon === "science" && <><path d="M9 3v5l-4.5 9A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-3L15 8V3H9Z" /><path d="M8 14h8" /></>}
                          {group.icon === "data" && <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h3M14 12h2M8 16h8" /><circle cx="12" cy="12" r="4" /></>}
                        </svg>
                      </span>
                      <span className="site-domain-copy"><strong>{group.title}</strong><small>{group.description}</small></span>
                    </button>
                  ))}
                </div>
                <section className="site-course-panel" id="course-domain-panel" role="tabpanel" aria-labelledby={`course-domain-tab-${selectedDomain}`} key={selectedDomain}>
                  <div className="site-course-panel-heading">
                    <h2>{activeGroup.title}</h2>
                    <p>Explore courses by duration</p>
                  </div>
                  <div className="site-course-term-columns">
                    {courseTerms.map((term) => {
                      const termCourses = activeGroup.courses.filter((course) => course.terms.includes(term.id));
                      return (
                        <section className="site-course-term-column" key={term.id}>
                          <header className="site-course-term-heading">
                            <span className="site-term-indicator" aria-hidden="true" />
                            <div><h3>{term.label}</h3><p>{termCourses.length} courses - {term.duration}</p></div>
                          </header>
                          {termCourses.length > 0 ? (
                            <div className="site-course-list">
                              {termCourses.map(({ title, href }) => (
                                <a className="site-course-link" href={href} key={href}><span>{title}</span><span className="site-course-arrow" aria-hidden="true">&rsaquo;</span></a>
                              ))}
                            </div>
                          ) : <p className="site-course-empty">No courses available.</p>}
                        </section>
                      );
                    })}
                  </div>
                </section>
                <div className="site-course-footer">
                  <p>Not sure which course fits you? Our counsellors will guide you.</p>
                  <div><a href="/contact-us">Talk to a counsellor</a><a href="/contact-us">Book a free demo</a></div>
                </div>
              </div>
            </div>
            <div className={`site-dropdown site-student-dropdown${openMenu === "who-can-join" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("who-can-join")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={studentTriggerRef} className="site-more-trigger" type="button" aria-haspopup="menu" aria-expanded={openMenu === "who-can-join"} onClick={() => toggleMenu("who-can-join")}>
                Who Can Join <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu site-student-menu" role="menu">
                <a href="/#courses" role="menuitem"><strong>Students &amp; Freshers</strong><small>Start your career right after 12th or graduation</small></a>
                <a href="/#courses" role="menuitem"><strong>Job Seekers</strong><small>Build job-ready skills with 100% placement support</small></a>
                <a href="/courses/digital-marketing-for-professional" role="menuitem"><strong>Working Professionals</strong><small>Upskill for faster growth and high-paying roles</small></a>
                <a href="/courses/expert-digital-marketing-course" role="menuitem"><strong>Business Owners &amp; Entrepreneurs</strong><small>Scale your business with digital marketing &amp; AI</small></a>
                <a href="/courses/advanced-digital-marketing-course" role="menuitem"><strong>Freelancers &amp; Creators</strong><small>Work independently on live international projects</small></a>
                <a href="/courses/digital-marketing-for-beginners" role="menuitem"><strong>Housewives &amp; Homemakers</strong><small>Restart your career or earn from home with flexible skills</small></a>
              </div>
            </div>
            <div className={`site-dropdown site-abroad-dropdown${openMenu === "indian-universities" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("indian-universities")} onMouseLeave={() => setOpenMenu(null)}>
              <button className="site-more-trigger" type="button" aria-haspopup="dialog" aria-expanded={openMenu === "indian-universities"} onClick={() => { setSelectedState(0); toggleMenu("indian-universities"); }}>
                Indian Universities <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-abroad-menu" role="dialog" aria-label="Indian Universities by State">
                <div className="site-abroad-tabs" role="tablist" aria-label="Indian States">
                  {indianUniversityStates.map((item, idx) => (
                    <button
                      key={item.state}
                      type="button"
                      role="tab"
                      aria-selected={selectedState === idx}
                      className={`site-abroad-tab${selectedState === idx ? " is-selected" : ""}`}
                      onClick={() => setSelectedState(idx)}
                      onMouseEnter={() => {
                        if (window.matchMedia("(min-width: 1024px)").matches) {
                          setSelectedState(idx);
                        }
                      }}
                    >
                      <span className="site-abroad-code">{item.code}</span>
                      <span className="site-abroad-copy">
                        <strong>{item.state}</strong>
                        <small>{item.subtitle}</small>
                      </span>
                    </button>
                  ))}
                </div>
                <div className="site-abroad-panel" role="tabpanel">
                  <div className="site-abroad-panel-head">
                    <h3>{indianUniversityStates[selectedState].state} — Partner Universities</h3>
                    <p>Top tie-up colleges offering Graduation &amp; Post Graduation</p>
                  </div>
                  <div className="site-abroad-uni-list">
                    {indianUniversityStates[selectedState].universities.map((uni) => (
                      <a key={uni.name} href="/degree-digital-marketing" className="site-abroad-uni-card">
                        <strong>{uni.name}</strong>
                        <small>{uni.courses}</small>
                      </a>
                    ))}
                  </div>
                  <div className="site-abroad-footer">
                    <span>100+ Tie-Up Indian Universities &amp; Colleges</span>
                    <a href="/degree-digital-marketing">Explore All Indian Universities &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={`site-dropdown site-abroad-dropdown${openMenu === "study-abroad" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("study-abroad")} onMouseLeave={() => setOpenMenu(null)}>
              <button className="site-more-trigger" type="button" aria-haspopup="dialog" aria-expanded={openMenu === "study-abroad"} onClick={() => { setSelectedCountry(0); toggleMenu("study-abroad"); }}>
                Study Abroad <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-abroad-menu" role="dialog" aria-label="Study Abroad Partner Universities">
                <div className="site-abroad-tabs" role="tablist" aria-label="Study Abroad Countries">
                  {studyAbroadCountries.map((item, idx) => (
                    <button
                      key={item.country}
                      type="button"
                      role="tab"
                      aria-selected={selectedCountry === idx}
                      className={`site-abroad-tab${selectedCountry === idx ? " is-selected" : ""}`}
                      onClick={() => setSelectedCountry(idx)}
                      onMouseEnter={() => {
                        if (window.matchMedia("(min-width: 1024px)").matches) {
                          setSelectedCountry(idx);
                        }
                      }}
                    >
                      <CountryFlag code={item.code} />
                      <span className="site-abroad-copy">
                        <strong>{item.country}</strong>
                        <small>{item.subtitle}</small>
                      </span>
                    </button>
                  ))}
                </div>
                <div className="site-abroad-panel" role="tabpanel">
                  <div className="site-abroad-panel-head site-abroad-head-with-flag">
                    <CountryFlag code={studyAbroadCountries[selectedCountry].code} />
                    <div>
                      <h3>{studyAbroadCountries[selectedCountry].country} — Partner Universities</h3>
                      <p>Top 5 tie-up universities &amp; courses offered</p>
                    </div>
                  </div>
                  <div className="site-abroad-uni-list">
                    {studyAbroadCountries[selectedCountry].universities.map((uni) => (
                      <a key={uni.name} href="/contact-us" className="site-abroad-uni-card">
                        <strong>{uni.name}</strong>
                        <small>{uni.courses}</small>
                      </a>
                    ))}
                  </div>
                  <div className="site-abroad-footer">
                    <span>50+ Global Partner Universities Across 10+ Countries</span>
                    <a href="/contact-us">Explore All Study Abroad Partners &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
            <a className="site-nav-link" href="/about-us">About Us</a>
            <a className="site-nav-link" href="/contact-us">Contact Us</a>
            <div className={`site-dropdown site-more-dropdown${openMenu === "more" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("more")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={moreTriggerRef} className="site-more-trigger" type="button" aria-haspopup="true" aria-expanded={openMenu === "more"} onClick={() => toggleMenu("more")}>
                More <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu" role="menu">
                <a href="/review" role="menuitem"><strong>Student Review</strong><small>Real stories and feedback from our learners</small></a>
                <a href="/about-us#mentorsTrack" role="menuitem"><strong>Trainers</strong><small>Learn from experienced industry professionals</small></a>
                <a href="/digital-marketing-course-in-delhi#campus-tour" role="menuitem"><strong>Campus Tour</strong><small>Explore our classrooms and learning spaces</small></a>
                <a href="/gallery" role="menuitem"><strong>Our Events</strong><small>Workshops, celebrations and campus activities</small></a>
                <a href="/blogs" role="menuitem"><strong>Blogs</strong><small>Read practical insights on marketing, AI and technology</small></a>
                <a href="/success-stories" role="menuitem"><strong>Success Stories</strong><small>Explore learner achievements and career journeys</small></a>
                <a href="/terms-of-use" role="menuitem"><strong>Terms &amp; Conditions</strong><small>Review the terms for using our website and services</small></a>
                <a href="/affiliate-program/affiliate-system/affiliate/register" role="menuitem"><strong>Refer &amp; Earn</strong><small>Join our affiliate program and earn through referrals</small></a>
              </div>
            </div>
            <a href="/enroll-upay" className="site-nav-cta-pill">Pay Now</a>
          </div>
        </div>
      </nav>
      <div className="site-category-nav" aria-label="Course categories">
        <div className="site-category-nav-inner">
          <button type="button" onClick={() => { setSelectedDomain(0); setOpenMenu("courses"); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 14.5 19 5l-5.5 15-2.3-6.2L4 14.5Z" /><path d="m11.2 13.8 4.3-4.3" /></svg>
            <span>Marketing</span>
          </button>
          <button type="button" onClick={() => { setSelectedDomain(1); setOpenMenu("courses"); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 19V5M4 19h16" /><path d="m7 15 3-3 3 2 5-7" /><circle cx="7" cy="15" r="1" /><circle cx="10" cy="12" r="1" /><circle cx="13" cy="14" r="1" /><circle cx="18" cy="7" r="1" /></svg>
            <span>Data Analytics</span>
          </button>
          <button type="button" onClick={() => { setSelectedDomain(2); setOpenMenu("courses"); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 3v5l-4.5 9A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-3L15 8V3H9Z" /><path d="M8 14h8" /></svg>
            <span>Data Science</span>
          </button>
          <button type="button" onClick={() => { setSelectedDomain(3); setOpenMenu("courses"); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
            <span>CS &amp; EH</span>
          </button>
          <button type="button" onClick={() => { setSelectedDomain(4); setOpenMenu("courses"); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h3M14 12h2M8 16h8" /><circle cx="12" cy="12" r="4" /></svg>
            <span>AI ML</span>
          </button>
          <a href="/success-stories"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" /></svg><span>Success</span></a>
        </div>
      </div>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
