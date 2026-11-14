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

const styles = `
.site-nav,.site-nav *{box-sizing:border-box}.site-nav{position:fixed;inset:0 0 auto;z-index:100000;background:#fff;box-shadow:0 2px 14px #32104712;border-bottom:1px solid #eee;color:#282828;font-family:inherit}.site-nav-inner{max-width:1560px;min-height:90px;margin:auto;padding:12px 30px;display:flex;align-items:center;gap:30px}.site-brand{display:flex;align-items:center;flex:0 0 auto}.site-brand img{display:block;width:220px;height:auto}.site-mobile-menu{display:contents}.site-mobile-toggle{display:none}.site-links{display:flex;align-items:center;gap:32px;margin-left:8px;flex:1}.site-links>details:first-child{margin-right:auto}.site-nav a,.site-nav summary{color:#282828;text-decoration:none;font-size:17px;font-weight:600;cursor:pointer}.site-nav a:hover,.site-nav summary:hover{color:#7429b5}.site-nav details{position:relative}.site-nav summary{list-style:none;display:flex;align-items:center;gap:10px;padding:12px 14px}.site-nav summary::-webkit-details-marker{display:none}.site-links>a,.site-links>details>summary{display:flex;align-items:center;min-height:48px;padding:12px 14px;border:0;border-radius:0;background:transparent;font-weight:600;line-height:1.2;transition:color .18s ease,background-color .18s ease}.site-links>details:first-child>summary{min-height:52px;padding:14px 22px;border:0;border-radius:999px;background:linear-gradient(110deg,#2865d7 0%,#652fc1 58%,#a728a5 100%);color:#fff;font-weight:700;box-shadow:0 3px 8px #702bb53d}.site-links>details:first-child>summary:hover,.site-links>details:first-child[open]>summary{background:linear-gradient(110deg,#1e55bd 0%,#5722a9 58%,#90208d 100%);color:#fff}.site-links>details:first-child>summary:after{border-color:#fff}.site-links>a:focus-visible,.site-links>details>summary:focus-visible{outline:3px solid #c995e3;outline-offset:3px;border-radius:8px}.site-nav summary:after{content:"";width:7px;height:7px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:rotate(45deg) translateY(-2px)}.site-course-menu{position:absolute;top:calc(100% + 10px);left:50%;transform:translateX(-30%);width:min(900px,calc(100vw - 40px));max-height:75vh;overflow:auto;padding:24px;background:#fff;border:1px solid #eadcf2;border-radius:14px;box-shadow:0 18px 45px #29103824;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:26px}.site-course-group h3{margin:0 0 12px;color:#7623a4;font-size:15px;font-weight:700}.site-course-link{display:block;padding:8px 0;border-bottom:1px solid #f1ebf4;color:#4b1864!important;font-size:14px!important;font-weight:500!important;line-height:1.4}.site-more-menu{position:absolute;right:0;top:calc(100% + 4px);min-width:190px;padding:8px;background:#fff;border:1px solid #eadcf2;border-radius:10px;box-shadow:0 12px 30px #29103820}.site-more-menu a{display:block;padding:11px 12px;border-radius:6px;font-size:14px!important;font-weight:600!important}.site-more-menu a:hover{background:#f8f0fc}.site-nav-spacer{height:90px}
@media(max-width:760px){.site-nav-inner{min-height:70px;padding:10px 16px;gap:16px}.site-brand img{width:180px}.site-mobile-menu{display:block;margin-left:auto}.site-mobile-toggle{display:flex!important;border:1px solid #eadcf2;border-radius:8px;padding:9px 12px!important;font-size:15px!important}.site-links{display:none;position:absolute;left:0;right:0;top:100%;margin:0;padding:12px 18px 20px;background:#fff;box-shadow:0 12px 20px #32104712;align-items:stretch;gap:4px;flex-direction:column}.site-mobile-menu[open] .site-links{display:flex}.site-links>details:first-child{margin-right:0}.site-links details{width:100%}.site-nav summary{padding:13px 12px}.site-links>details:first-child>summary{min-height:48px;padding:12px 18px}.site-course-menu{position:static;transform:none;width:100%;max-height:55vh;padding:12px;grid-template-columns:1fr;gap:12px;box-shadow:none}.site-more-menu{position:static;box-shadow:none}.site-nav-spacer{height:70px}}
`;

export default function PublicNavbar() {
  return (
    <>
      <style>{styles}</style>
      <nav className="site-nav" aria-label="Main navigation">
        <div className="site-nav-inner">
          <a className="site-brand" href="/" aria-label="DizitalAdda home">
            <img src="/logo.png" alt="DizitalAdda" />
          </a>
          <details className="site-mobile-menu">
            <summary className="site-mobile-toggle">Menu</summary>
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
          </details>
        </div>
      </nav>
      <div className="site-nav-spacer" aria-hidden="true" />
    </>
  );
}
