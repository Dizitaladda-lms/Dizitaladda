"use client";

import React, { useState, useEffect } from "react";

// Centralized Leads Submission Endpoint
const LEADS_ENDPOINT = "/api/leads";

/**
 * CourseHero Component
 * Desktop: 2-column layout with Course Info on Left, Image & Lead Form on Right.
 * Mobile: Single column in exact order: Name (h1), Tagline, Chips, Image, Lead Form.
 */
export default function CourseHero({ course }) {
  if (!course) return null;

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    status: "Student",
    consent: true,
    hp_field: "", // Honeypot field for bot prevention
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  // UTM Parameters Tracker
  const [utmParams, setUtmParams] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    pageUrl: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      setUtmParams({
        utm_source: sp.get("utm_source") || "",
        utm_medium: sp.get("utm_medium") || "",
        utm_campaign: sp.get("utm_campaign") || "",
        pageUrl: window.location.href,
      });
    }
  }, []);

  // Validation function
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Full name is required";
        if (value.trim().length < 2) return "Enter at least 2 characters";
        return "";
      case "phone":
        if (!value.trim()) return "Mobile number is required";
        if (!/^[6-9]\d{9}$/.test(value.trim())) {
          return "Enter a valid 10-digit Indian mobile number";
        }
        return "";
      case "email":
        if (!value.trim()) return "Email address is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return "Enter a valid email address";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    if (err) {
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Silent ignore if honeypot was filled by bot
    if (formData.hp_field) return;

    const newErrors = {};
    const nameErr = validateField("name", formData.name);
    const phoneErr = validateField("phone", formData.phone);
    const emailErr = validateField("email", formData.email);

    if (nameErr) newErrors.name = nameErr;
    if (phoneErr) newErrors.phone = phoneErr;
    if (emailErr) newErrors.email = emailErr;

    if (!formData.consent) {
      newErrors.consent = "Please agree to receive counselling communication";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setServerError("");

    const payload = {
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      city: formData.city.trim(),
      status: formData.status,
      course: course.name,
      pageUrl: utmParams.pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_campaign: utmParams.utm_campaign,
    };

    try {
      const res = await fetch(LEADS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Unable to submit form. Please check your details and try again.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        status: "Student",
        consent: true,
        hp_field: "",
      });
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Fallback hero illustration if image is missing
  const fallbackHero = "/images/campus/campus1.jpg";

  return (
    <section className="dz-hero-section" id="hero" aria-labelledby="dz-hero-heading">
      <div className="dz-container">
        <div className="dz-hero-grid">
          
          {/* Left Column: Course Name, Tagline & Info Chips */}
          <div className="dz-hero-left">
            <div className="dz-hero-badge">
              <span className="dz-badge-dot" aria-hidden="true" />
              <span>Certified Career Program</span>
            </div>

            <h1 className="dz-hero-title" id="dz-hero-heading">
              {course.name}
            </h1>

            <p className="dz-hero-tagline">{course.tagline}</p>

            <div className="dz-hero-chips" role="list" aria-label="Course highlights">
              {course.duration && (
                <div className="dz-hero-chip" role="listitem">
                  <svg className="dz-chip-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Duration: {course.duration}</span>
                </div>
              )}

              {course.mode && (
                <div className="dz-hero-chip" role="listitem">
                  <svg className="dz-chip-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Mode: {course.mode}</span>
                </div>
              )}

              {course.level && (
                <div className="dz-hero-chip" role="listitem">
                  <svg className="dz-chip-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                  <span>Level: {course.level}</span>
                </div>
              )}
            </div>

            {/* Program Value Highlights (Option 1 Mix: 4 Key Value Cards) */}
            <div className="dz-hero-features-grid">
              <div className="dz-hero-feature-card">
                <div className="dz-feature-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="dz-feature-text">
                  <h4 className="dz-feature-title">100% Placement Support</h4>
                  <p className="dz-feature-desc">Dedicated recruitment drives, mock interviews &amp; resume building</p>
                </div>
              </div>

              <div className="dz-hero-feature-card">
                <div className="dz-feature-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <div className="dz-feature-text">
                  <h4 className="dz-feature-title">Live Client Projects</h4>
                  <p className="dz-feature-desc">Hands-on agency budget execution on live campaigns &amp; capstone</p>
                </div>
              </div>

              <div className="dz-hero-feature-card">
                <div className="dz-feature-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                </div>
                <div className="dz-feature-text">
                  <h4 className="dz-feature-title">Dual Certification</h4>
                  <p className="dz-feature-desc">Skill India (Govt. of India) + DizitalAdda Global Master Certificate</p>
                </div>
              </div>

              <div className="dz-hero-feature-card">
                <div className="dz-feature-icon-bubble">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className="dz-feature-text">
                  <h4 className="dz-feature-title">1-on-1 Mentorship</h4>
                  <p className="dz-feature-desc">Daily live doubts &amp; career guidance with senior industry leads</p>
                </div>
              </div>
            </div>

            {/* Career Metrics & Hiring Partners (Option 3 Mix: Stats & Partner Badges) */}
            <div className="dz-hero-trust-box">
              <div className="dz-hero-stats-bar">
                <div className="dz-hero-stat-item">
                  <span className="dz-stat-val">65%</span>
                  <span className="dz-stat-lbl">Avg Salary Hike</span>
                </div>
                <div className="dz-hero-stat-sep" aria-hidden="true" />
                <div className="dz-hero-stat-item">
                  <span className="dz-stat-val">₹12 LPA</span>
                  <span className="dz-stat-lbl">Highest Package</span>
                </div>
                <div className="dz-hero-stat-sep" aria-hidden="true" />
                <div className="dz-hero-stat-item">
                  <span className="dz-stat-val">350+</span>
                  <span className="dz-stat-lbl">Hiring Partners</span>
                </div>
                <div className="dz-hero-stat-sep" aria-hidden="true" />
                <div className="dz-hero-stat-item">
                  <span className="dz-stat-val dz-rating-val">⭐ 4.9/5</span>
                  <span className="dz-stat-lbl">2,500+ Reviews</span>
                </div>
              </div>

              <div className="dz-hero-companies-strip">
                <span className="dz-companies-label">Top Hiring Partners:</span>
                <div className="dz-companies-pills">
                  <span className="dz-company-badge">Google</span>
                  <span className="dz-company-badge">Amazon</span>
                  <span className="dz-company-badge">Flipkart</span>
                  <span className="dz-company-badge">Zomato</span>
                  <span className="dz-company-badge">Accenture</span>
                  <span className="dz-company-badge">Swiggy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Course Image & Lead Form Card */}
          <div className="dz-hero-right">
            <div className="dz-hero-image-wrap">
              <img
                src={course.heroImage || fallbackHero}
                alt={`${course.name} classroom training at DizitalAdda`}
                width={600}
                height={375}
                className="dz-hero-image"
                onError={(e) => {
                  e.currentTarget.src = fallbackHero;
                }}
              />
            </div>

            {/* Lead Form Card */}
            <div className="dz-lead-card" id="dz-lead-form">
              <div className="dz-lead-card-header">
                <h2 className="dz-lead-card-title">Book a Free Demo Class</h2>
                <p className="dz-lead-card-sub">
                  Get personalized career guidance &amp; detailed syllabus PDF.
                </p>
              </div>

              {submitted ? (
                <div className="dz-msg-banner dz-msg-success" role="alert">
                  <strong>Thank you!</strong> Our senior academic counsellor will call you shortly.
                </div>
              ) : (
                <form className="dz-form" onSubmit={handleSubmit} noValidate>
                  {/* Hidden Course & Honeypot */}
                  <input type="hidden" name="course" value={course.name} />
                  <input
                    type="text"
                    name="hp_field"
                    value={formData.hp_field}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {serverError && (
                    <div className="dz-msg-banner dz-msg-error" role="alert">
                      {serverError}
                    </div>
                  )}

                  {/* Full Name */}
                  <div className="dz-form-group">
                    <label className="dz-form-label" htmlFor="dz-input-name">
                      Full Name<span className="dz-required">*</span>
                    </label>
                    <input
                      id="dz-input-name"
                      name="name"
                      type="text"
                      className={`dz-input ${errors.name ? "dz-input-error" : ""}`}
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="name"
                      required
                    />
                    {errors.name && <span className="dz-form-error">{errors.name}</span>}
                  </div>

                  {/* Mobile Number */}
                  <div className="dz-form-group">
                    <label className="dz-form-label" htmlFor="dz-input-phone">
                      Mobile Number<span className="dz-required">*</span>
                    </label>
                    <input
                      id="dz-input-phone"
                      name="phone"
                      type="tel"
                      inputMode="numeric"
                      className={`dz-input ${errors.phone ? "dz-input-error" : ""}`}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="tel"
                      maxLength={10}
                      required
                    />
                    {errors.phone && <span className="dz-form-error">{errors.phone}</span>}
                  </div>

                  {/* Email */}
                  <div className="dz-form-group">
                    <label className="dz-form-label" htmlFor="dz-input-email">
                      Email Address<span className="dz-required">*</span>
                    </label>
                    <input
                      id="dz-input-email"
                      name="email"
                      type="email"
                      className={`dz-input ${errors.email ? "dz-input-error" : ""}`}
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      autoComplete="email"
                      required
                    />
                    {errors.email && <span className="dz-form-error">{errors.email}</span>}
                  </div>

                  {/* City */}
                  <div className="dz-form-group">
                    <label className="dz-form-label" htmlFor="dz-input-city">
                      City
                    </label>
                    <input
                      id="dz-input-city"
                      name="city"
                      type="text"
                      className="dz-input"
                      placeholder="e.g. Delhi, Noida, Gurgaon"
                      value={formData.city}
                      onChange={handleChange}
                      autoComplete="address-level2"
                    />
                  </div>

                  {/* I am a... Select */}
                  <div className="dz-form-group">
                    <label className="dz-form-label" htmlFor="dz-select-status">
                      I am a
                    </label>
                    <select
                      id="dz-select-status"
                      name="status"
                      className="dz-select"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Student">Student (College / Final Year)</option>
                      <option value="Working Professional">Working Professional</option>
                      <option value="Fresher">Fresher / Job Seeker</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Consent Checkbox */}
                  <label className="dz-consent-group" htmlFor="dz-consent-check">
                    <input
                      id="dz-consent-check"
                      name="consent"
                      type="checkbox"
                      className="dz-checkbox"
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <span>
                      I agree to receive course updates &amp; counselling calls via Phone / WhatsApp.
                    </span>
                  </label>
                  {errors.consent && <span className="dz-form-error">{errors.consent}</span>}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="dz-submit-btn"
                    disabled={loading}
                    aria-label="Get Free Counselling"
                  >
                    {loading ? (
                      <>
                        <span className="dz-spinner" aria-hidden="true" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <span>Get Free Counselling</span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
