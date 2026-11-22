"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// Keep course names and routes together here so the mega menu stays easy to update.
const courseGroups = [
  {
    title: "Marketing",
    description: "Marketing courses",
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
    title: "CS & EH",
    description: "Cyber security",
    icon: "security",
    courses: [
      { title: "Foundation in Cyber Security & Ethical Hacking", href: "/courses/foundation-in-cyber-security-and-ethical-hacking", terms: ["short"] },
      { title: "Advanced Cyber Security & Ethical Hacking", href: "/courses/advanced-certification-in-cyber-security-and-ethical-hacking", terms: ["short"] },
      { title: "Expert Cyber Security & Ethical Hacking", href: "/courses/expert-training-in-cyber-security-and-ethical-hacking", terms: ["long"] },
      { title: "Digital Forensics & Cyber Investigation", href: "/courses/certification-in-digital-forensic-and-cyber-investigation", terms: ["short"] },
      { title: "Bug Bounty", href: "/courses/expert-training-in-bug-bounty", terms: ["short"] },
    ],
  },
  {
    title: "Analytics",
    description: "Data analytics",
    icon: "analytics",
    courses: [
      { title: "Diploma in Data Analytics & AI", href: "/courses/diploma-in-data-analytics-and-ai", terms: ["long"] },
      { title: "Advanced Data Analytics & AI", href: "/courses/advanced-certification-in-data-analytics-and-ai", terms: ["short"] },
      { title: "Certification in Data Analytics & AI", href: "/courses/certification-in-data-analytics-and-ai", terms: ["short"] },
    ],
  },
  {
    title: "AI ML",
    description: "AI & machine learning",
    icon: "data",
    courses: [
      { title: "Advanced Gen AI & Prompt Engineering", href: "/courses/advanced-certification-in-genai-and-prompt-engineering", terms: ["short"] },
      { title: "Diploma in Gen AI & Prompt Engineering", href: "/courses/diploma-in-genai-and-prompt-engineering", terms: ["long"] },
      { title: "Diploma in Machine Learning & AI", href: "/courses/diploma-in-machine-learning-and-ai", terms: ["long"] },
      { title: "Advanced Machine Learning & AI", href: "/courses/advanced-certification-in-machine-learning-and-ai", terms: ["short"] },
      { title: "Diploma in Data Science & AI", href: "/courses/diploma-in-data-science-and-ai", terms: ["long"] },
      { title: "Advanced Data Science & AI", href: "/courses/advanced-certification-in-data-science-and-ai", terms: ["short"] },
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
                          {group.icon === "data" && <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h3M14 12h2M8 16h8" /><circle cx="12" cy="12" r="4" /></>}
                        </svg>
                      </span>
                      <span className="site-domain-copy"><strong>{group.title}</strong><small>{group.description}</small></span>
                    </button>
                  ))}
                  <a className="site-course-shortcut" href="/success-stories"><span className="site-domain-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4Z" /><path d="M7 6H4v1a4 4 0 0 0 4 4M17 6h3v1a4 4 0 0 1-4 4" /></svg></span><strong>Success</strong></a>
                  <a className="site-course-shortcut" href="/about-us"><span className="site-domain-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7.5h.01" /></svg></span><strong>About Us</strong></a>
                  <a className="site-course-shortcut" href="/gallery"><span className="site-domain-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v14H4zM8 3v4M16 3v4M4 10h16" /><path d="M8 14h3M14 14h2M8 17h8" /></svg></span><strong>Others</strong></a>
                  <a className="site-course-shortcut" href="/contact-us"><span className="site-domain-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg></span><strong>Contact Us</strong></a>
                  <a className="site-course-shortcut" href="/blogs"><span className="site-domain-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" /></svg></span><strong>Blogs</strong></a>
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
          </div>
        </div>
      </nav>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
