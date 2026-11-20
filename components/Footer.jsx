"use client";

import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo" aria-label="DizitalAdda Footer">
      <div className={styles.wrap}>

        {/* 1. CTA BANNER */}
        <div className={styles.cta}>
          <div className={styles.ctaBox}>
            <div className={styles.ctaContent}>
              <h3>Ready to start your career?</h3>
              <p>Free demo class book karo aur expert mentors se seedha baat karo.</p>
            </div>
            <div className={styles.btns}>
              <a href="#bookDemo" className={`${styles.btn} ${styles.btnPrimary}`}>
                Book Free Demo
              </a>
              <a
                href="https://wa.me/918810606010?text=Hi%20DizitalAdda%2C%20I%20want%20to%20know%20more%20about%20your%20courses."
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.btn} ${styles.btnGhost}`}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* 2. MAIN GRID (Brand / Quick Links / Contact + Map) */}
        <div className={styles.main}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoImg} aria-label="DizitalAdda Home">
              <img
                src="/logo.png"
                alt="DizitalAdda - India's Most Recommended Digital Marketing Institute"
                width={220}
                height={56}
                className={styles.logoImage}
                loading="lazy"
              />
            </Link>
            <span className={styles.tag}>India's Most Recommended Digital Marketing Institute</span>
            <p className={styles.about}>
              <b>India's Best Digital Marketing Institute</b> (DA DigitalAdda Innovations Pvt. Ltd.), MSME &amp; ISO Certified. Delhi/NCR's top-ranked institute, trusted nationwide. We don't just teach skills, we build careers. Personalized mentorship, proven strategies and hands-on training designed to drive real growth at every stage of your journey.
            </p>

            {/* Trust Badges */}
            <div className={styles.badges}>
              <span className={styles.badge}><i className={styles.liveDot} /> MSME Registered</span>
              <span className={styles.badge}><i className={styles.liveDot} /> ISO 9001:2015</span>
              <span className={styles.badge}><i className={styles.liveDot} /> Google Partner</span>
            </div>

            {/* Social Icons */}
            <div className={styles.social}>
              <a
                href="https://www.instagram.com/official_dizital_adda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1115.2 12 3.2 3.2 0 0112 15.2zM17.3 6.2a1.2 1.2 0 11-1.2 1.2 1.2 1.2 0 011.2-1.2zM12 3.8c2.7 0 3 0 4.1.1 2.7.1 3.9 1.4 4 4 .1 1.1.1 1.4.1 4.1s0 3-.1 4.1c-.1 2.6-1.3 3.9-4 4-1.1.1-1.4.1-4.1.1s-3 0-4.1-.1c-2.7-.1-3.9-1.4-4-4-.1-1.1-.1-1.4-.1-4.1s0-3 .1-4.1c.1-2.6 1.3-3.9 4-4C9 3.8 9.3 3.8 12 3.8z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@DizitalAdda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12a26 26 0 00.4 4.8 2.5 2.5 0 001.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8A26 26 0 0022 12a26 26 0 00-.4-4.8zM10 15V9l5.2 3z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/dizitaladda/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6.9 8.8H3.6V20h3.3zM5.3 3.5a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM20.4 13.3c0-3-1.6-4.7-3.9-4.7a3.4 3.4 0 00-3 1.6V8.8h-3.2V20h3.3v-6.1c0-1.6.7-2.6 2-2.6s1.7 1 1.7 2.6V20h3.3z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/dizitaladda01"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 8.5V6.8c0-.8.2-1.2 1.3-1.2H17V2.5h-2.5C11.5 2.5 10 4.2 10 6.6v1.9H7.5v3.2H10V21.5h4v-9.8h2.7l.4-3.2z"/>
                </svg>
              </a>
              <a
                href="https://x.com/dizitaladda"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className={styles.colHeading}>Quick Links</h4>
            <ul className={styles.links}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li><Link href="/blogs">Latest Blogs</Link></li>
              <li><Link href="/gallery">Campus Gallery</Link></li>
              <li><Link href="/success-stories">Success Stories</Link></li>
              <li><Link href="/career">Careers / Join Us</Link></li>
            </ul>
          </div>

          {/* Visit Campus & Map Column */}
          <div>
            <h4 className={styles.colHeading}>Visit Our Campus</h4>
            <div className={styles.contact}>
              <a
                href="https://maps.app.goo.gl/yaZeHLJBfKYHdMPJ7"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ci}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/>
                  <circle cx="12" cy="10" r="2.5"/>
                </svg>
                <span>2nd Floor, Spacetime Management Pvt Ltd Design House, behind Savitri Cinema Complex, Greater Kailash II, Chittaranjan Park, New Delhi, Delhi 110048</span>
              </a>
              <a href="tel:8810606010" className={styles.ci}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>
                </svg>
                <span>+91 88106 06010</span>
              </a>
              <a href="mailto:info@dizitaladda.com" className={styles.ci}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2"/>
                  <path d="M3 7l9 6 9-6"/>
                </svg>
                <span>info@dizitaladda.com</span>
              </a>
            </div>

            {/* Interactive Embedded Google Map */}
            <div className={styles.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9253650195633!2d77.2381470754975!3d28.541962975714306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1b8032e0e7f%3A0x8d8484c29620d0c0!2sDizitalAdda%20Digital%20Marketing%20Institute!5e0!3m2!1sen!2sin!4v1789125686505!5m2!1sen!2sin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DizitalAdda Campus Location Map"
                aria-label="Google Map showing DizitalAdda institute location"
              />
            </div>
          </div>
        </div>

        {/* 3. CERTIFICATES & ACCREDITATIONS */}
        <div className={styles.certs}>
          <div className={styles.certsHead}>
            <h4>Authorized &amp; Government Recognised</h4>
            <span>Hamari registrations aur certifications</span>
          </div>
          <div className={styles.certGrid}>
            <div className={styles.cert}>
              <svg viewBox="0 0 24 24" className={styles.certIcon} aria-hidden="true">
                <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/>
                <path d="M8.5 12l2.5 2.5 4.5-5"/>
              </svg>
              <div>
                <b>MSME Registered</b>
                <small>Ministry of MSME, Govt. of India</small>
                <em>Verified Govt. of India Enterprise</em>
              </div>
            </div>

            <div className={styles.cert}>
              <svg viewBox="0 0 24 24" className={styles.certIcon} aria-hidden="true">
                <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/>
                <path d="M8.5 12l2.5 2.5 4.5-5"/>
              </svg>
              <div>
                <b>ISO 9001 Certified</b>
                <small>Quality Management System</small>
                <em>ISO 9001:2015 Accredited</em>
              </div>
            </div>

            <div className={styles.cert}>
              <svg viewBox="0 0 24 24" className={styles.certIcon} aria-hidden="true">
                <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/>
                <path d="M8.5 12l2.5 2.5 4.5-5"/>
              </svg>
              <div>
                <b>Google Partner</b>
                <small>Google Partners Program</small>
                <em>Verified Agency Partner</em>
              </div>
            </div>

            <div className={styles.cert}>
              <svg viewBox="0 0 24 24" className={styles.certIcon} aria-hidden="true">
                <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5z"/>
                <path d="M8.5 12l2.5 2.5 4.5-5"/>
              </svg>
              <div>
                <b>Startup India (DPIIT)</b>
                <small>Govt. of India Recognised</small>
                <em>Recognised EdTech Innovation</em>
              </div>
            </div>
          </div>
        </div>

        {/* 4. UPGRADED COURSES SECTION (4 Columns with thematic accent colors) */}
        <div className={styles.courses}>
          {/* Digital Marketing */}
          <div className={styles.ccol} style={{ "--c": "#38bdf8" }}>
            <div className={styles.chead}>
              <h4>Digital Marketing</h4>
              <span className={styles.cnt}>4 courses</span>
            </div>
            <ul className={styles.links}>
              <li><Link href="/courses/expert-digital-marketing-course">Expert in Digital Marketing</Link></li>
              <li><Link href="/courses/advanced-digital-marketing-course">Advanced Digital Marketing</Link></li>
              <li><Link href="/courses/digital-marketing-for-professional">Digital Marketing for Professionals</Link></li>
              <li><Link href="/courses/digital-marketing-for-beginners">Digital Marketing for Beginners</Link></li>
            </ul>
            <Link className={styles.viewall} href="/courses">
              View all Digital Marketing courses &rarr;
            </Link>
          </div>

          {/* Cyber Security & Hacking */}
          <div className={styles.ccol} style={{ "--c": "#f472b6" }}>
            <div className={styles.chead}>
              <h4>Cyber Security &amp; Hacking</h4>
              <span className={styles.cnt}>5 courses</span>
            </div>
            <ul className={styles.links}>
              <li><Link href="/courses/expert-training-in-cyber-security-and-ethical-hacking">Expert Training in Cyber Security &amp; Ethical Hacking</Link></li>
              <li><Link href="/courses/advanced-certification-in-cyber-security-and-ethical-hacking">Advanced Cyber Security &amp; Ethical Hacking</Link></li>
              <li><Link href="/courses/foundation-in-cyber-security-and-ethical-hacking">Foundation in Cyber Security &amp; Ethical Hacking</Link></li>
              <li><Link href="/courses/certification-in-digital-forensic-and-cyber-investigation">Digital Forensic &amp; Cyber Investigation</Link></li>
              <li><Link href="/courses/expert-training-in-bug-bounty">Expert Training in Bug Bounty</Link></li>
            </ul>
            <Link className={styles.viewall} href="/courses">
              View all Cyber Security &amp; Hacking courses &rarr;
            </Link>
          </div>

          {/* Generative AI */}
          <div className={styles.ccol} style={{ "--c": "#a78bfa" }}>
            <div className={styles.chead}>
              <h4>Generative AI</h4>
              <span className={styles.cnt}>4 courses</span>
            </div>
            <ul className={styles.links}>
              <li><Link href="/courses/diploma-in-genai-and-prompt-engineering">Diploma in Gen AI &amp; Prompt Engineering</Link></li>
              <li><Link href="/courses/advanced-certification-in-genai-and-prompt-engineering">Advanced Gen AI &amp; Prompt Engineering</Link></li>
              <li><Link href="/courses/diploma-in-machine-learning-and-ai">Diploma in Machine Learning &amp; AI</Link></li>
              <li><Link href="/courses/advanced-certification-in-machine-learning-and-ai">Advanced Machine Learning &amp; AI</Link></li>
            </ul>
            <Link className={styles.viewall} href="/courses">
              View all Generative AI courses &rarr;
            </Link>
          </div>

          {/* Data Science & Analytics */}
          <div className={styles.ccol} style={{ "--c": "#34d399" }}>
            <div className={styles.chead}>
              <h4>Data Science &amp; Analytics</h4>
              <span className={styles.cnt}>5 courses</span>
            </div>
            <ul className={styles.links}>
              <li><Link href="/courses/diploma-in-data-science-and-ai">Diploma in Data Science &amp; AI</Link></li>
              <li><Link href="/courses/advanced-certification-in-data-science-and-ai">Advanced Data Science &amp; AI</Link></li>
              <li><Link href="/courses/diploma-in-data-analytics-and-ai">Diploma in Data Analytics &amp; AI</Link></li>
              <li><Link href="/courses/advanced-certification-in-data-analytics-and-ai">Advanced Data Analytics &amp; AI</Link></li>
              <li><Link href="/courses/certification-in-data-analytics-and-ai">Certification in Data Analytics &amp; AI</Link></li>
            </ul>
            <Link className={styles.viewall} href="/courses">
              View all Data Science &amp; Analytics courses &rarr;
            </Link>
          </div>
        </div>

        {/* 5. BOTTOM BAR (Copyright, Legal Links & Payment Badges) */}
        <div className={styles.bottom}>
          <div>
            © {currentYear} DizitalAdda · DA DigitalAdda Innovations Pvt. Ltd. All rights reserved.
          </div>
          <div className={styles.policyLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-of-use">Terms of Use</Link>
            <span>·</span>
            <Link href="/refund-policy">Refund Policy</Link>
            <span>·</span>
            <Link href="/sitemap.xml">XML Sitemap</Link>
          </div>
          <div className={styles.pay}>
            <span>Razorpay</span>
            <span>PayU</span>
            <span>VISA</span>
            <span>Mastercard</span>
            <span>UPI</span>
            <span>EMI</span>
            <span>Net Banking</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
