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



export default function PublicNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState(0);
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
            <div className={`site-dropdown site-student-dropdown${openMenu === "student-centric" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("student-centric")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={studentTriggerRef} className="site-more-trigger" type="button" aria-haspopup="menu" aria-expanded={openMenu === "student-centric"} onClick={() => toggleMenu("student-centric")}>
                Student Centric <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu site-student-menu" role="menu">
                <a href="/review" role="menuitem"><strong>Student Review</strong><small>Real stories and feedback from our learners</small></a>
                <a href="/about-us#mentorsTrack" role="menuitem"><strong>Trainer</strong><small>Learn from experienced industry professionals</small></a>
                <a href="/digital-marketing-course-in-delhi#campus-tour" role="menuitem"><strong>Campus Tour</strong><small>Explore our classrooms and learning spaces</small></a>
                <a href="/success-stories" role="menuitem"><strong>Placement Review</strong><small>See student outcomes and career journeys</small></a>
                <a href="/gallery" role="menuitem"><strong>Our Events</strong><small>Workshops, celebrations and campus activities</small></a>
              </div>
            </div>
            <a className="site-nav-link" href="/about-us">About Us</a>
            <a className="site-nav-link" href="/contact-us">Contact Us</a>
            <div className={`site-dropdown site-more-dropdown${openMenu === "more" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("more")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={moreTriggerRef} className="site-more-trigger" type="button" aria-haspopup="true" aria-expanded={openMenu === "more"} onClick={() => toggleMenu("more")}>
                More <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu" role="menu">
                <a href="/blogs" role="menuitem"><strong>Blogs</strong><small>Read practical insights on marketing, AI and technology</small></a>
                <a href="/success-stories" role="menuitem"><strong>Success Stories</strong><small>Explore learner achievements and career journeys</small></a>
                <a href="/terms-of-use" role="menuitem"><strong>Terms &amp; Conditions</strong><small>Review the terms for using our website and services</small></a>
                <a href="/affiliate-program/affiliate-system/affiliate/register" role="menuitem"><strong>Refer &amp; Earn</strong><small>Join our affiliate program and earn through referrals</small></a>
              </div>
            </div>
            <a href="#bookDemo" className="site-nav-signup-btn">
              SIGN UP
            </a>
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
