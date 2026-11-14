"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const courseGroups = [
  {
    title: "Digital Marketing & Design",
    courses: [
      ["Digital Marketing for Beginners", "digital-marketing-for-beginners"],
      ["Digital Marketing for Professionals", "digital-marketing-for-professional"],
      ["Advanced Digital Marketing", "advanced-digital-marketing-course"],
      ["Expert Digital Marketing", "expert-digital-marketing-course"],
      ["Graphic Design & Video Editing", "graphic-design-and-professional-video-editing-course"],
      ["Graphic Design & Motion Graphics", "graphic-design-and-motion-graphics"],
      ["UI/UX Design", "ui-ux-design-course"],
      ["Web Development", "web-development-course"],
      ["Computer Software & Technology", "diploma-in-computer-software-and-technology"],
    ],
  },
  {
    title: "Cyber Security",
    courses: [
      ["Foundation in Cyber Security & Ethical Hacking", "foundation-in-cyber-security-and-ethical-hacking"],
      ["Advanced Cyber Security & Ethical Hacking", "advanced-certification-in-cyber-security-and-ethical-hacking"],
      ["Expert Cyber Security & Ethical Hacking", "expert-training-in-cyber-security-and-ethical-hacking"],
      ["Digital Forensics & Cyber Investigation", "certification-in-digital-forensic-and-cyber-investigation"],
      ["Bug Bounty", "expert-training-in-bug-bounty"],
    ],
  },
  {
    title: "Artificial Intelligence & Data",
    courses: [
      ["Advanced Gen AI & Prompt Engineering", "advanced-certification-in-genai-and-prompt-engineering"],
      ["Diploma in Gen AI & Prompt Engineering", "diploma-in-genai-and-prompt-engineering"],
      ["Diploma in Machine Learning & AI", "diploma-in-machine-learning-and-ai"],
      ["Advanced Machine Learning & AI", "advanced-certification-in-machine-learning-and-ai"],
      ["Diploma in Data Science & AI", "diploma-in-data-science-and-ai"],
      ["Advanced Data Science & AI", "advanced-certification-in-data-science-and-ai"],
      ["Diploma in Data Analytics & AI", "diploma-in-data-analytics-and-ai"],
      ["Advanced Data Analytics & AI", "advanced-certification-in-data-analytics-and-ai"],
      ["Certification in Data Analytics & AI", "certification-in-data-analytics-and-ai"],
    ],
  },
];



export default function PublicNavbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const navRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
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
    setMobileCoursesOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  const toggleMenu = (menu) => setOpenMenu((current) => current === menu ? null : menu);

  return (
    <>
      <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
        <div className="site-nav-inner">
          <a className="site-brand" href="/" aria-label="DizitalAdda home">
            <img src="/logo.png" alt="DizitalAdda" />
          </a>
          <button className="site-mobile-toggle" type="button" aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)}>
            <span /><span /><span />
          </button>
          <div className={`site-links${mobileOpen ? " is-mobile-open" : ""}`}>
            <div className={`site-dropdown site-courses-dropdown${openMenu === "courses" ? " is-open" : ""}`} onMouseEnter={() => setOpenMenu("courses")} onMouseLeave={() => setOpenMenu(null)}>
              <button className="site-courses-trigger" type="button" aria-haspopup="true" aria-expanded={openMenu === "courses"} onClick={() => toggleMenu("courses")}>
                Courses <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-course-menu" role="menu">
                {courseGroups.map((group) => (
                  <section className="site-course-group" key={group.title}>
                    <h3>{group.title}</h3>
                    {group.courses.map(([title, slug]) => (
                      <a className="site-course-link" href={`/courses/${slug}`} key={slug} role="menuitem">{title}</a>
                    ))}
                  </section>
                ))}
              </div>
            </div>
            <a className="site-nav-link" href="/contact-us">Contact Us</a>
            <a className="site-nav-link" href="/about-us">About Us</a>
            <div className={`site-dropdown site-more-dropdown${openMenu === "more" ? " is-open" : ""}`} onMouseEnter={() => setOpenMenu("more")} onMouseLeave={() => setOpenMenu(null)}>
              <button className="site-more-trigger" type="button" aria-haspopup="true" aria-expanded={openMenu === "more"} onClick={() => toggleMenu("more")}>
                More <span className="site-chevron" aria-hidden="true" />
              </button>
              <div className="site-more-menu" role="menu">
                <a href="/blogs" role="menuitem">Blogs</a>
                <a href="/success-stories" role="menuitem">Success Stories</a>
              </div>
            </div>
            <div className="site-mobile-accordions">
              <button type="button" aria-expanded={mobileCoursesOpen} onClick={() => setMobileCoursesOpen((value) => !value)}>Courses <span className="site-chevron" aria-hidden="true" /></button>
              {mobileCoursesOpen && <div className="site-mobile-course-list">{courseGroups.map((group) => <section key={group.title}><h3>{group.title}</h3>{group.courses.map(([title, slug]) => <a href={`/courses/${slug}`} key={slug}>{title}</a>)}</section>)}</div>}
              <a href="/contact-us">Contact Us</a>
              <a href="/about-us">About Us</a>
              <button type="button" aria-expanded={mobileMoreOpen} onClick={() => setMobileMoreOpen((value) => !value)}>More <span className="site-chevron" aria-hidden="true" /></button>
              {mobileMoreOpen && <div className="site-mobile-more-list"><a href="/blogs">Blogs</a><a href="/success-stories">Success Stories</a></div>}
            </div>
          </div>
        </div>
      </nav>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
