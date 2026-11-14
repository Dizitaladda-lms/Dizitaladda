import React from "react";

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
  return (
    <>

      <nav className="site-nav" aria-label="Main navigation">
        <div className="site-nav-inner">
          <a className="site-brand" href="/" aria-label="DizitalAdda home">
            <img src="/logo.png" alt="DizitalAdda" />
          </a>
          <div className="site-mobile-menu">
            <input id="public-nav-menu-toggle" className="site-menu-checkbox" type="checkbox" aria-label="Toggle navigation" />
            <label className="site-mobile-toggle" htmlFor="public-nav-menu-toggle">Menu</label>
            <div className="site-links">
              <details>
                <summary>Courses</summary>
                <div className="site-course-menu">
                  {courseGroups.map((group) => (
                    <section className="site-course-group" key={group.title}>
                      <h3>{group.title}</h3>
                      {group.courses.map(([title, slug]) => (
                        <a className="site-course-link" href={`/courses/${slug}`} key={slug}>{title}</a>
                      ))}
                    </section>
                  ))}
                </div>
              </details>
              <a href="/contact-us">Contact Us</a>
              <a href="/about-us">About Us</a>
              <details>
                <summary>More</summary>
                <div className="site-more-menu">
                  <a href="/blogs">Blogs</a>
                  <a href="/success-stories">Success Stories</a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
