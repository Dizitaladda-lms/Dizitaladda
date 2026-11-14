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
      { title: "Digital Marketing for Beginners", href: "/courses/digital-marketing-for-beginners" },
      { title: "Digital Marketing for Professionals", href: "/courses/digital-marketing-for-professional" },
      { title: "Advanced Digital Marketing", href: "/courses/advanced-digital-marketing-course" },
      { title: "Expert Digital Marketing", href: "/courses/expert-digital-marketing-course" },
      { title: "Graphic Design & Video Editing", href: "/courses/graphic-design-and-professional-video-editing-course" },
      { title: "Graphic Design & Motion Graphics", href: "/courses/graphic-design-and-motion-graphics" },
      { title: "UI/UX Design", href: "/courses/ui-ux-design-course" },
      { title: "Web Development", href: "/courses/web-development-course" },
      { title: "Computer Software & Technology", href: "/courses/diploma-in-computer-software-and-technology" },
    ],
  },
  {
    title: "Cyber Security",
    description: "Learn to protect systems, networks and data.",
    icon: "security",
    courses: [
      { title: "Foundation in Cyber Security & Ethical Hacking", href: "/courses/foundation-in-cyber-security-and-ethical-hacking" },
      { title: "Advanced Cyber Security & Ethical Hacking", href: "/courses/advanced-certification-in-cyber-security-and-ethical-hacking" },
      { title: "Expert Cyber Security & Ethical Hacking", href: "/courses/expert-training-in-cyber-security-and-ethical-hacking" },
      { title: "Digital Forensics & Cyber Investigation", href: "/courses/certification-in-digital-forensic-and-cyber-investigation" },
      { title: "Bug Bounty", href: "/courses/expert-training-in-bug-bounty" },
    ],
  },
  {
    title: "Artificial Intelligence & Data",
    description: "Turn data and AI tools into practical skills.",
    icon: "data",
    courses: [
      { title: "Advanced Gen AI & Prompt Engineering", href: "/courses/advanced-certification-in-genai-and-prompt-engineering" },
      { title: "Diploma in Gen AI & Prompt Engineering", href: "/courses/diploma-in-genai-and-prompt-engineering" },
      { title: "Diploma in Machine Learning & AI", href: "/courses/diploma-in-machine-learning-and-ai" },
      { title: "Advanced Machine Learning & AI", href: "/courses/advanced-certification-in-machine-learning-and-ai" },
      { title: "Diploma in Data Science & AI", href: "/courses/diploma-in-data-science-and-ai" },
      { title: "Advanced Data Science & AI", href: "/courses/advanced-certification-in-data-science-and-ai" },
      { title: "Diploma in Data Analytics & AI", href: "/courses/diploma-in-data-analytics-and-ai" },
      { title: "Advanced Data Analytics & AI", href: "/courses/advanced-certification-in-data-analytics-and-ai" },
      { title: "Certification in Data Analytics & AI", href: "/courses/certification-in-data-analytics-and-ai" },
    ],
  },
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
                          {group.icon === "data" && <><path d="M4 19V5M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /><circle cx="7" cy="15" r="1" /><circle cx="11" cy="11" r="1" /><circle cx="14" cy="13" r="1" /><circle cx="19" cy="7" r="1" /></>}
                        </svg>
                      </span>
                      <span className="site-domain-copy"><strong>{group.title}</strong><small>{group.description}</small></span>
                    </button>
                  ))}
                </div>
                <section className="site-course-panel" id="course-domain-panel" role="tabpanel" aria-labelledby={`course-domain-tab-${selectedDomain}`} key={selectedDomain}>
                  <div className="site-course-panel-heading">
                    <h2>{activeGroup.title}</h2>
                    <p>{activeGroup.courses.length} courses in this domain</p>
                  </div>
                  <div className="site-course-list">
                    {activeGroup.courses.map(({ title, href }) => (
                      <a className="site-course-link" href={href} key={href}><span>{title}</span><span className="site-course-arrow" aria-hidden="true">&rsaquo;</span></a>
                    ))}
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
              <div className="site-more-menu" role="menu">
                <a href="/review" role="menuitem">Student Review</a>
                <a href="/about-us#mentorsTrack" role="menuitem">Trainer</a>
                <a href="/digital-marketing-course-in-delhi#campus-tour" role="menuitem">Campus Tour</a>
                <a href="/success-stories" role="menuitem">Placement Review</a>
                <a href="/gallery" role="menuitem">Our Events</a>
              </div>
            </div>
            <a className="site-nav-link" href="/contact-us">Contact Us</a>
            <a className="site-nav-link" href="/about-us">About Us</a>
            <div className={`site-dropdown site-more-dropdown${openMenu === "more" ? " is-open" : ""}`} onMouseEnter={() => openOnDesktopHover("more")} onMouseLeave={() => setOpenMenu(null)}>
              <button ref={moreTriggerRef} className="site-more-trigger" type="button" aria-haspopup="true" aria-expanded={openMenu === "more"} onClick={() => toggleMenu("more")}>
                More <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu" role="menu">
                <a href="/blogs" role="menuitem">Blogs</a>
                <a href="/success-stories" role="menuitem">Success Stories</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
