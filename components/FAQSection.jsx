"use client";

import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./FAQSection.module.css";

// 5 FAQs on Part 1 (Left Side)
export const initialFaqsLeft = [
  {
    id: "faq-1",
    question: "What is digital marketing & why is it important in 2026?",
    answer:
      "Digital marketing means promoting brands through search engines, social media, paid ads, and email instead of traditional print or TV. It is essential today because most customer buying decisions start with an online search, so businesses without an active digital presence lose market share to competitors.",
  },
  {
    id: "faq-2",
    question: "Is a digital marketing course worth it in 2026?",
    answer:
      "Yes, digital marketing is one of the highest-demand, future-proof career skills. Every business needs online customer acquisition, SEO, and performance marketing, ensuring certified and skilled marketers stay employable across industries.",
  },
  {
    id: "faq-3",
    question: "Which is the best digital marketing institute in Delhi with placement?",
    answer:
      "DizitalAdda offers 100% practical, hands-on agency-style training with guaranteed paid internships and full placement support in Delhi NCR. With 350+ corporate hiring partners and live ad budgets, students graduate with verifiable portfolio proof.",
  },
  {
    id: "faq-4",
    question: "What is the fee for a digital marketing course in Delhi?",
    answer:
      "Digital marketing course fees in Delhi typically range from ₹25,000 to ₹1,35,000 depending on the program level (Beginner, Advanced, or 1-Year Master Diploma), tools provided, and whether guaranteed paid internships and corporate placement support are included.",
  },
  {
    id: "faq-5",
    question: "How many months does it take to learn digital marketing?",
    answer:
      "Most job-ready courses take 3 to 6 months, while an Expert 1-Year Diploma provides deeper mastery in GenAI, automation, and performance marketing. Foundational skills can be learned quickly, but real expertise comes through live campaigns.",
  },
];

// 5 FAQs on Part 2 (Right Side)
export const initialFaqsRight = [
  {
    id: "faq-6",
    question: "Does DizitalAdda offer both online and offline classroom courses?",
    answer:
      "Yes, both formats are available! Students can choose in-person training at our state-of-the-art Greater Kailash II (Delhi) campus or attend interactive live online sessions with lifetime recording access and 1-on-1 mentor guidance.",
  },
  {
    id: "faq-7",
    question: "Can course fees be paid in monthly installments (EMI)?",
    answer:
      "Yes, DizitalAdda provides flexible 0% interest EMI options and installment plans to make quality tech education affordable and accessible to all students without financial strain.",
  },
  {
    id: "faq-8",
    question: "Is there a digital marketing course for working professionals?",
    answer:
      "Yes, we offer dedicated weekend batches (Saturday & Sunday) and flexible evening weekday slots specially structured for working professionals, entrepreneurs, and freelancers looking to upskill without leaving their current jobs.",
  },
  {
    id: "faq-9",
    question: "What is the average starting salary for a digital marketer in Delhi?",
    answer:
      "Freshers typically start between ₹3.5 LPA to ₹5.5 LPA. With 2 to 4 years of hands-on campaign experience, salaries grow to ₹7 LPA to ₹14 LPA, while senior Performance Marketing Leads reach ₹25 LPA to ₹40+ LPA.",
  },
  {
    id: "faq-10",
    question: "Which global certifications are included in the course?",
    answer:
      "Learners earn 15+ globally recognized certifications, including Google Ads (Search, Display, Video, Apps), Google Analytics 4 (GA4), Meta Certified Digital Marketing Associate, HubSpot Inbound, SEMrush, and DizitalAdda's ISO-certified course diploma.",
  },
];

// Additional 5 FAQs for Part 1 (Left Side) when expanded
export const moreFaqsLeft = [
  {
    id: "faq-11",
    question: "Which skill pays the most — SEO, PPC, or Social Media Marketing?",
    answer:
      "Performance Marketing (PPC) and Technical SEO generally command the highest salaries because both directly drive measurable revenue and ROI for brands. Paid social and AI-assisted automation are also growing rapidly in 2026.",
  },
  {
    id: "faq-12",
    question: "What AI tools are taught in the digital marketing curriculum?",
    answer:
      "Our curriculum includes practical training on ChatGPT, Claude, Jasper AI, Midjourney, Canva AI, Surfer SEO, Semrush AI, Google Performance Max, Meta Advantage+, and marketing automation workflows.",
  },
  {
    id: "faq-13",
    question: "What other diploma and master programs does DizitalAdda offer?",
    answer:
      "Besides Digital Marketing, DizitalAdda offers comprehensive career diplomas in GenAI & Prompt Engineering, Data Analytics, Data Science, Machine Learning, and Cyber Security & Ethical Hacking.",
  },
  {
    id: "faq-14",
    question: "Does DizitalAdda provide a 3-Year Master Course with college partnerships?",
    answer:
      "Yes, DizitalAdda collaborates with selected UGC-recognized colleges and universities to deliver a specialized 3-year bachelor's and master's degree in digital business and marketing technology.",
  },
  {
    id: "faq-15",
    question: "What is the difference between data analytics and data science?",
    answer:
      "Data Analytics focuses on analyzing historical data to discover trends, optimize operations, and answer business questions. Data Science is broader, incorporating advanced machine learning, predictive modeling, and deep learning algorithms.",
  },
];

// Additional 5 FAQs for Part 2 (Right Side) when expanded
export const moreFaqsRight = [
  {
    id: "faq-16",
    question: "What is the highest salary a digital marketing professional can earn in India?",
    answer:
      "Senior agency leaders, Heads of Growth, and Chief Marketing Officers (CMOs) with 8 to 12+ years of proven track record earn ₹30 LPA to ₹60+ LPA, along with performance incentives and equity.",
  },
  {
    id: "faq-17",
    question: "Is an AI or Data Science course worth it in 2026 for a career switch?",
    answer:
      "Yes, AI and data analytics are among the fastest-growing hiring domains. Professionals with logical reasoning or business acumen can successfully transition into high-paying roles like Business Intelligence Analyst or Prompt Engineer.",
  },
  {
    id: "faq-18",
    question: "What is ethical hacking, and how is it different from cyber security in 2026?",
    answer:
      "Ethical hacking is the offensive practice of legally probing systems to find vulnerabilities before malicious attackers do. Cyber security is the broader umbrella protecting entire networks, cloud assets, and organizational data.",
  },
  {
    id: "faq-19",
    question: "What is the average salary of an ethical hacker in India (fresher vs experienced)?",
    answer:
      "Freshers with practical lab skills and CEH certifications start at ₹4 LPA to ₹6.5 LPA. Mid-level penetration testers earn ₹12 LPA to ₹25 LPA, while seasoned Red Team leads and Bug Bounty hunters earn ₹35 LPA+.",
  },
  {
    id: "faq-20",
    question: "Does DizitalAdda provide live client campaigns and real budgets during training?",
    answer:
      "Yes! Every student works directly on live ad campaigns with real budgets provided by partner agencies and client projects, ensuring you have verifiable campaign metrics (ROAS, CTR, conversions) on your resume.",
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <details
      className={`faq slide-up-section ${styles.faqCard} ${isOpen ? styles.cardOpen : ""}`}
      open={isOpen}
      onClick={(e) => {
        // Prevent default browser toggle so we control state cleanly for smooth animation
        e.preventDefault();
        onToggle(item.id);
      }}
    >
      <summary className={styles.faqSummary}>
        <span className={styles.questionText}>{item.question}</span>
        <div className={styles.iconWrap} aria-hidden="true">
          <svg
            className={styles.toggleSvg}
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
            <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
          </svg>
        </div>
      </summary>
      <div className={styles.faqAnswer}>
        <p>{item.answer}</p>
      </div>
    </details>
  );
}

export default function FAQSection() {
  const [showAll, setShowAll] = useState(false);
  const [openIds, setOpenIds] = useState(new Set(["faq-1"])); // Open first question by default

  const handleToggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const leftList = showAll ? [...initialFaqsLeft, ...moreFaqsLeft] : initialFaqsLeft;
  const rightList = showAll ? [...initialFaqsRight, ...moreFaqsRight] : initialFaqsRight;

  return (
    <section className={`faqs bg-aurora ${styles.faqSection}`} id="faqs" aria-labelledby="faq-section-heading">
      <div className="aurora-blob aurora-blob-1" aria-hidden="true"></div>
      <div className="aurora-blob aurora-blob-2" aria-hidden="true"></div>
      <div className="aurora-blob aurora-blob-3" aria-hidden="true"></div>

      <div className={styles.container}>
        {/* ================= SECTION HEADER ================= */}
        <SectionHeader
          align="center"
          id="faq-section-heading"
          label="Got Questions?"
          title={
            <>
              Frequently <span className="highlight">Asked Questions</span>
            </>
          }
          description="Frequently Asked Questions offers quick answers to common queries, guiding users through features and functionalities effortlessly."
        />

        {/* ================= 2-PART FAQ COLUMNS (5 EK SIDE, 5 EK SIDE) ================= */}
        <div className={styles.faqTwoColumns}>
          {/* Part 1: Left Column */}
          <div className={styles.faqPart} role="region" aria-label="Course and Curriculum FAQs">
            {leftList.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>

          {/* Part 2: Right Column */}
          <div className={styles.faqPart} role="region" aria-label="Placement and Eligibility FAQs">
            {rightList.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={handleToggle}
              />
            ))}
          </div>
        </div>

        {/* ================= VIEW MORE / SHOW LESS TOGGLE ================= */}
        <div className={styles.actionWrap}>
          <button
            type="button"
            className={styles.viewMoreBtn}
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
          >
            <span>{showAll ? "Show Less FAQs" : "View More Questions (10 More)"}</span>
            <svg
              className={`${styles.btnArrow} ${showAll ? styles.btnArrowRotated : ""}`}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>

        {/* ================= STILL HAVE QUESTIONS FOOTER CALLOUT ================= */}
        <div className={styles.counselorCallout}>
          <div className={styles.counselorText}>
            <h4>Still have questions about courses or admissions?</h4>
            <p>Our senior academic counselors are here to help you choose the right career path.</p>
          </div>
          <div className={styles.counselorActions}>
            <a
              href="https://wa.me/918076543210?text=Hi%20DizitalAdda%2C%20I%20have%20questions%20about%20your%20digital%20marketing%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.counselorWaBtn}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
            <a href="#bookDemo" className={styles.counselorDemoBtn}>
              Book Free Demo Class
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
