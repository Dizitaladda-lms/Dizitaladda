"use client";

import { useRef, useState } from "react";

// Add or edit courses here. Images are served locally from /public.
const courses = [
  { category: "digital-marketing", image: "/coursecard/expert in Digital Marketing Course.webp", duration: "12 Months", mode: "Live + Recorded", title: "Expert in Digital Marketing", description: "SEO, Google Ads aur social media ko real campaigns par seekho.", skills: [{ label: "SEO", icon: "search" }, { label: "Google Ads", icon: "megaphone" }, { label: "Meta Ads", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/expert-digital-marketing-course" },
  { category: "digital-marketing", image: "/coursecard/advanced Digital Marketing Course.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Digital Marketing", description: "SEO, paid ads aur growth strategy se apni skills advance karo.", skills: [{ label: "SEO", icon: "search" }, { label: "Google Ads", icon: "megaphone" }, { label: "Meta Ads", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-digital-marketing-course" },
  { category: "digital-marketing", image: "/coursecard/digital Marketing For Professionals.webp", duration: "4 Months", mode: "Live + Recorded", title: "Digital Marketing for Professionals", description: "Google aur Meta Ads ke saath marketing performance improve karo.", skills: [{ label: "SEO", icon: "search" }, { label: "Google Ads", icon: "megaphone" }, { label: "Meta Ads", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-professional" },
  { category: "digital-marketing", image: "/coursecard/digital Marketing for Beginners.webp", duration: "3 Months", mode: "Live + Recorded", title: "Digital Marketing for Beginners", description: "Digital marketing ke core tools aur channels ki shuruaat karo.", skills: [{ label: "SEO", icon: "search" }, { label: "Google Ads", icon: "megaphone" }, { label: "Meta Ads", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur live campaigns", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/digital-marketing-for-beginners" },
  { category: "ai-data-science", image: "/imagesCards/diploma_in_generative_Ai_and_prompt_engineering.webp", duration: "12 Months", mode: "Live + Recorded", title: "Diploma in GenAI & Prompt Engineering", description: "Generative AI aur prompt engineering ko projects ke saath seekho.", skills: [{ label: "Gen AI", icon: "search" }, { label: "Prompting", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Projects", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/diploma-in-genai-and-prompt-engineering" },
  { category: "ai-data-science", image: "/imagesCards/diploma_in_data_analytics.webp", duration: "12 Months", mode: "Live + Recorded", title: "Diploma in Data Analytics", description: "Data ko dashboards aur clear business insights mein badlo.", skills: [{ label: "Excel", icon: "search" }, { label: "SQL", icon: "megaphone" }, { label: "Power BI", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/diploma-in-data-analytics-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/Diploma_machine_learing.webp", duration: "12 Months", mode: "Live + Recorded", title: "Diploma in Machine Learning & AI", description: "Python se machine learning models banana aur apply karna seekho.", skills: [{ label: "Python", icon: "search" }, { label: "ML Models", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/diploma-in-machine-learning-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/diploma_in_data_science_Ai.webp", duration: "12 Months", mode: "Live + Recorded", title: "Diploma in Data Science & AI", description: "Statistics, Python aur AI ke saath end-to-end data skills banao.", skills: [{ label: "Python", icon: "search" }, { label: "Machine Learning", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/diploma-in-data-science-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/Advance_Certification_in_Gen_ai_and_prompt_engineering.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Certification in GenAI", description: "AI assistants, chatbots aur practical GenAI applications banao.", skills: [{ label: "Gen AI", icon: "search" }, { label: "Prompting", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Projects", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-genai-and-prompt-engineering" },
  { category: "ai-data-science", image: "/imagesCards/Advance_certification_in_Data_Analystics_andAi.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Certification in Data Analytics", description: "SQL, Python aur Power BI se actionable insights nikaalo.", skills: [{ label: "Python", icon: "search" }, { label: "SQL", icon: "megaphone" }, { label: "Power BI", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-analytics-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/Advance_certification_in_machine_learning_and_Ai.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Certification in Machine Learning", description: "Real datasets ke saath ML models train aur deploy karna seekho.", skills: [{ label: "Python", icon: "search" }, { label: "ML Models", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Projects", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-machine-learning-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/Advance_cerfication_in_data_science_and_ai.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Certification in Data Science", description: "Applied statistics aur ML se complex data problems solve karo.", skills: [{ label: "Python", icon: "search" }, { label: "ML Models", icon: "megaphone" }, { label: "AI Tools", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-data-science-and-ai" },
  { category: "ai-data-science", image: "/imagesCards/Certification_in_data_analytics_and_ai.webp", duration: "3 Months", mode: "Live + Recorded", title: "Certification in Data Analytics", description: "Excel, SQL aur Power BI se data analysis ki foundation banao.", skills: [{ label: "Excel", icon: "search" }, { label: "SQL", icon: "megaphone" }, { label: "Power BI", icon: "share" }, { label: "Analytics", icon: "chart" }], bullets: ["Real projects aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/certification-in-data-analytics-and-ai" },
  { category: "cyber-security", image: "/imagesCards/Foundation in Cyber Security and Ethical Hacking.webp", duration: "4 Months", mode: "Live + Recorded", title: "Foundation in Cyber Security", description: "Networking, Linux aur ethical hacking ki core skills seekho.", skills: [{ label: "Networking", icon: "search" }, { label: "Linux", icon: "megaphone" }, { label: "Ethical Hacking", icon: "share" }, { label: "Security", icon: "chart" }], bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/foundation-in-cyber-security-and-ethical-hacking" },
  { category: "cyber-security", image: "/imagesCards/Advanced Certification in Cyber Security and Ethical Hacking.webp", duration: "6 Months", mode: "Live + Recorded", title: "Advanced Cyber Security & Ethical Hacking", description: "Security testing aur ethical hacking ko lab practice se master karo.", skills: [{ label: "Networking", icon: "search" }, { label: "Linux", icon: "megaphone" }, { label: "Ethical Hacking", icon: "share" }, { label: "Security", icon: "chart" }], bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/advanced-certification-in-cyber-security-and-ethical-hacking" },
  { category: "cyber-security", image: "/imagesCards/Expert Training in Cyber Security and Ethical Hacking.webp", duration: "12 Months", mode: "Live + Recorded", title: "Expert Cyber Security Training", description: "Vulnerability assessment aur penetration testing par kaam karo.", skills: [{ label: "VAPT", icon: "search" }, { label: "Linux", icon: "megaphone" }, { label: "Ethical Hacking", icon: "share" }, { label: "Security", icon: "chart" }], bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/expert-training-in-cyber-security-and-ethical-hacking" },
  { category: "cyber-security", image: "/imagesCards/Certiication in Digital Forensic and Cyber Investigation.webp", duration: "4 Months", mode: "Live + Recorded", title: "Digital Forensics & Cyber Investigation", description: "Digital evidence aur cyber incidents investigate karna seekho.", skills: [{ label: "Forensics", icon: "search" }, { label: "Linux", icon: "megaphone" }, { label: "Investigation", icon: "share" }, { label: "Security", icon: "chart" }], bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/certification-in-digital-forensic-and-cyber-investigation" },
  { category: "cyber-security", image: "/imagesCards/Expert Training in Bug Bounty.webp", duration: "4 Months", mode: "Live + Recorded", title: "Bug Bounty Training", description: "Legal labs mein web vulnerabilities dhundo aur report karo.", skills: [{ label: "Web Security", icon: "search" }, { label: "Linux", icon: "megaphone" }, { label: "Bug Bounty", icon: "share" }, { label: "Security", icon: "chart" }], bullets: ["Hands-on labs aur practical learning", "Certificate aur placement support", "Lifetime LMS access"], detailsLink: "https://dizitaladda.com/courses/expert-traning-in-bug-bounty" },
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
        <span className="da-course-pill da-course-duration">{course.duration}</span>
        <span className="da-course-pill da-course-mode">{course.mode}</span>
      </div>
      <div className="da-course-content">
        <h3>{course.title}</h3>
        <p className="da-course-description">{course.description}</p>
        <ul className="da-course-skills" aria-label="Skills covered">
          {course.skills.map((skill) => <li key={skill.label}><SkillIcon type={skill.icon} /><span>{skill.label}</span></li>)}
        </ul>
        <ul className="da-course-bullets">
          {course.bullets.map((bullet) => <li key={bullet}><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-8" /></svg><span>{bullet}</span></li>)}
        </ul>
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
  const trackRef = useRef(null);
  const visibleCourses = activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory);

  const scrollCards = (direction) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector(".da-course-slide");
    const distance = card ? card.getBoundingClientRect().width + 24 : trackRef.current.clientWidth;
    trackRef.current.scrollBy({ left: distance * direction, behavior: "smooth" });
  };

  return (
    <div className="da-course-showcase">
      <div className="course-category-filters" role="group" aria-label="Filter courses by category">
        {courseCategories.map((category) => (
          <button key={category.id} type="button" aria-pressed={activeCategory === category.id} className={activeCategory === category.id ? "is-active" : ""} onClick={() => { setActiveCategory(category.id); trackRef.current?.scrollTo({ left: 0, behavior: "smooth" }); }}>
            {category.label}
          </button>
        ))}
      </div>
      <div className="da-course-carousel-controls">
        <span>{activeCategory === "all" ? "Explore our career-focused courses" : courseCategories.find((category) => category.id === activeCategory)?.label}</span>
        <div>
          <button type="button" aria-label="Previous courses" onClick={() => scrollCards(-1)}>‹</button>
          <button type="button" aria-label="Next courses" onClick={() => scrollCards(1)}>›</button>
        </div>
      </div>
      <div className="da-course-track" ref={trackRef} aria-label="Course cards">
        {visibleCourses.map((course) => <div className="da-course-slide" key={course.title}><CourseCard course={course} /></div>)}
      </div>
    </div>
  );
}