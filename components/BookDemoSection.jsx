"use client";

import { useState, useMemo } from "react";
import SectionHeader from "./SectionHeader";
import styles from "./BookDemoSection.module.css";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const TIME_SLOTS = [
  { id: "11:00 AM", label: "11:00 AM", batch: "Morning Batch" },
  { id: "02:30 PM", label: "02:30 PM", batch: "Afternoon Batch" },
  { id: "05:00 PM", label: "05:00 PM", batch: "Evening Batch" },
  { id: "07:00 PM", label: "07:00 PM", batch: "Late Evening Batch" },
];

const EXISTING_COURSES = [
  "Expert Digital Marketing",
  "Advanced Digital Marketing",
  "Professional Digital Marketing",
  "Digital Marketing Basics",
  "Diploma in GenAI & Prompt Engineering",
  "Diploma in Data Analytics & AI",
  "Foundation in Cyber Security & Ethical Hacking",
];

export default function BookDemoSection() {
  const today = useMemo(() => new Date(), []);
  
  // Initialize to tomorrow by default
  const defaultDate = useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    // If tomorrow is Sunday, skip to Monday
    if (d.getDay() === 0) d.setDate(d.getDate() + 1);
    return d;
  }, []);

  const [mode, setMode] = useState("Live Online"); // "Live Online" or "Campus Visit"
  const [viewYear, setViewYear] = useState(defaultDate.getFullYear());
  const [viewMonth, setViewMonth] = useState(defaultDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [selectedSlot, setSelectedSlot] = useState("05:00 PM");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Expert Digital Marketing",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [bookedReceipt, setBookedReceipt] = useState(null);

  // Month navigation
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  };

  // Build calendar matrix (Monday-first)
  const calendarDays = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    // getDay(): 0 is Sunday, 1 is Monday ... 6 is Saturday
    // Convert to Monday = 0 ... Sunday = 6
    const startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    const cells = [];
    // Leading empty cells
    for (let i = 0; i < startOffset; i++) {
      cells.push({ type: "empty", key: `empty-${i}` });
    }

    // Month days
    const midnightToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    for (let d = 1; d <= daysInMonth; d++) {
      const cellDate = new Date(viewYear, viewMonth, d);
      const isPast = cellDate < midnightToday;
      const isSunday = cellDate.getDay() === 0;
      const isDisabled = isPast || isSunday;

      const isToday =
        cellDate.getDate() === today.getDate() &&
        cellDate.getMonth() === today.getMonth() &&
        cellDate.getFullYear() === today.getFullYear();

      const isSelected =
        selectedDate &&
        cellDate.getDate() === selectedDate.getDate() &&
        cellDate.getMonth() === selectedDate.getMonth() &&
        cellDate.getFullYear() === selectedDate.getFullYear();

      cells.push({
        type: "day",
        dayNum: d,
        date: cellDate,
        isDisabled,
        isToday,
        isSelected,
        key: `day-${d}`,
      });
    }

    return cells;
  }, [viewYear, viewMonth, selectedDate, today]);

  // Formatted date string for summary
  const formattedDate = useMemo(() => {
    if (!selectedDate) return "";
    return selectedDate.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }, [selectedDate]);

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!selectedDate) {
      setErrorMessage("Please choose a date from the calendar.");
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setSubmitting(true);

    const safeEmail =
      formData.email && formData.email.trim().length > 0
        ? formData.email.trim()
        : `${cleanPhone}@leads.dizitaladda.com`;

    const payload = {
      name: formData.name.trim(),
      phone: cleanPhone,
      email: safeEmail,
      course: formData.course,
      mode: mode,
      date: `${formattedDate} at ${selectedSlot}`,
      message: `Booked via Cal Booking Card. Slot: ${selectedSlot}, Mode: ${mode}`,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      source: typeof window !== "undefined" ? window.location.href : "Website Book Demo",
    };

    try {
      const res = await fetch("/api/forms/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setBookedReceipt({
          name: formData.name.trim(),
          phone: `+91 ${cleanPhone}`,
          course: formData.course,
          mode: mode === "Campus Visit" ? "Campus Visit (Greater Kailash II)" : "Live Online",
          dateStr: `${formattedDate}`,
          timeStr: `${selectedSlot} IST`,
        });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Submission failed. Please try again.");
      }
    } catch {
      // In case network errors occur, show helpful message
      setErrorMessage("Connection error. Please check your network and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Reset Booking Form
  const handleReset = () => {
    setBookedReceipt(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      course: "Expert Digital Marketing",
    });
  };

  // Google Calendar event URL helper
  const googleCalendarUrl = useMemo(() => {
    if (!bookedReceipt || !selectedDate) return "#";
    const title = encodeURIComponent(`Free Demo Class: ${bookedReceipt.course} — DizitalAdda`);
    const details = encodeURIComponent(
      `Hi ${bookedReceipt.name},\nYour Free Demo Class is scheduled for ${bookedReceipt.course}.\nMode: ${bookedReceipt.mode}\nLocation/Meet link will be shared on WhatsApp: ${bookedReceipt.phone}.`
    );
    const location = encodeURIComponent(
      mode === "Campus Visit"
        ? "DizitalAdda, 2nd Floor, behind Savitri Cinema Complex, Greater Kailash II, New Delhi"
        : "Live Online Google Meet"
    );
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  }, [bookedReceipt, selectedDate, mode]);

  return (
    <section className={styles.sectionWrap} id="bookDemo">
      <div className={styles.container}>
        <div className={styles.calCard}>
          {/* ================================================================
              COLUMN 1: SESSION OVERVIEW & MODE SWITCHER (LEFT PANEL)
             ================================================================ */}
          <div className={`${styles.column} ${styles.borderRight}`}>
            <SectionHeader
              align="left"
              label="FREE SESSION"
              title={<>Book a <span className="highlight">Free Demo Class</span></>}
              description="Experience a 45-minute live walkthrough with our senior industry mentors before you enrol."
              className={styles.demoHeader}
            />

            {/* Mode Switcher */}
            <div className={styles.modeSwitchWrapper}>
              <span className={styles.modeSwitchLabel}>Choose Session Mode</span>
              <div className={styles.modeSwitch} role="tablist" aria-label="Session Mode">
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "Live Online"}
                  className={`${styles.modeBtn} ${mode === "Live Online" ? styles.modeBtnActive : ""}`}
                  onClick={() => setMode("Live Online")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  Live Online
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={mode === "Campus Visit"}
                  className={`${styles.modeBtn} ${mode === "Campus Visit" ? styles.modeBtnActive : ""}`}
                  onClick={() => setMode("Campus Visit")}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Campus Visit
                </button>
              </div>

              {mode === "Campus Visit" && (
                <div className={styles.locationBadge}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  Greater Kailash II, Savitri Cinema, New Delhi
                </div>
              )}
            </div>

            {/* Checklist */}
            <ul className={styles.checklist}>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>45-minute live interactive session</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>Curriculum &amp; real project walkthrough</span>
              </li>
              <li className={styles.checkItem}>
                <span className={styles.checkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span>1-on-1 career roadmap consultation</span>
              </li>
            </ul>

            {/* Mentor Snippet */}
            <div className={styles.mentorSnippet}>
              <div className={styles.mentorAvatarGroup}>
                <span className={styles.mentorAvatar} style={{ background: "#7c3aed" }}>
                  DA
                </span>
                <span className={styles.mentorAvatar} style={{ background: "#cc22e0" }}>
                  SK
                </span>
                <span className={styles.mentorAvatar} style={{ background: "#06b6d4" }}>
                  AK
                </span>
              </div>
              <div className={styles.mentorInfo}>
                <strong>Senior Industry Trainers</strong>
                <span>12+ yrs avg corporate leadership</span>
              </div>
            </div>
          </div>

          {/* ================================================================
              COLUMN 2: DATE & TIME SLOT SELECTOR (MIDDLE PANEL)
             ================================================================ */}
          <div className={`${styles.column} ${styles.borderRight}`}>
            {/* Month Header */}
            <div className={styles.calHeader}>
              <span className={styles.monthLabel}>
                {MONTH_NAMES[viewMonth]} {viewYear}
              </span>
              <div className={styles.calNav}>
                <button
                  type="button"
                  className={styles.calNavBtn}
                  onClick={handlePrevMonth}
                  aria-label="Previous month"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className={styles.calNavBtn}
                  onClick={handleNextMonth}
                  aria-label="Next month"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.timezoneLabel}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Timezone: IST (GMT+5:30)
            </div>

            {/* Day Names Row */}
            <div className={styles.dayNamesRow}>
              {DAY_NAMES.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>

            {/* Days Grid */}
            <div className={styles.daysGrid}>
              {calendarDays.map((cell) => {
                if (cell.type === "empty") {
                  return <div key={cell.key} className={styles.dayEmpty} />;
                }
                const classes = [
                  styles.dayCell,
                  cell.isDisabled ? styles.dayDisabled : "",
                  cell.isToday ? styles.dayToday : "",
                  cell.isSelected ? styles.daySelected : "",
                ]
                  .filter(Boolean)
                  .join(" ");

                return (
                  <button
                    key={cell.key}
                    type="button"
                    disabled={cell.isDisabled}
                    className={classes}
                    onClick={() => setSelectedDate(cell.date)}
                    aria-label={`${cell.dayNum} ${MONTH_NAMES[viewMonth]}`}
                  >
                    {cell.dayNum}
                  </button>
                );
              })}
            </div>

            {/* Time Slot Selection */}
            <div className={styles.slotsHeader}>
              <span className={styles.slotsTitle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Available Time Slots
              </span>
            </div>

            <div className={styles.slotsGrid}>
              {TIME_SLOTS.map((slot) => {
                const isSelected = selectedSlot === slot.id;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    className={`${styles.slotBtn} ${isSelected ? styles.slotBtnSelected : ""}`}
                    onClick={() => setSelectedSlot(slot.id)}
                  >
                    {slot.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ================================================================
              COLUMN 3: STUDENT REGISTRATION FORM & CONFIRMATION (RIGHT PANEL)
             ================================================================ */}
          <div className={styles.column}>
            {bookedReceipt ? (
              /* Instant Confirmation Receipt Card */
              <div className={styles.receiptWrap}>
                <div className={styles.receiptTop}>
                  <div className={styles.checkBadge}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className={styles.receiptTitle}>Demo Class Booked!</h3>
                  <p className={styles.receiptSub}>
                    We have reserved your seat. Our counselor will WhatsApp you the session join link and syllabus.
                  </p>
                </div>

                <div className={styles.receiptDetails}>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Student Name</span>
                    <span className={styles.receiptVal}>{bookedReceipt.name}</span>
                  </div>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Course</span>
                    <span className={styles.receiptVal}>{bookedReceipt.course}</span>
                  </div>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Session Mode</span>
                    <span className={styles.receiptVal}>{bookedReceipt.mode}</span>
                  </div>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Scheduled Date</span>
                    <span className={styles.receiptVal}>{bookedReceipt.dateStr}</span>
                  </div>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>Time Slot</span>
                    <span className={styles.receiptVal}>{bookedReceipt.timeStr}</span>
                  </div>
                  <div className={styles.receiptRow}>
                    <span className={styles.receiptLabel}>WhatsApp</span>
                    <span className={styles.receiptVal}>{bookedReceipt.phone}</span>
                  </div>
                </div>

                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.calendarSyncBtn}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Add to Google Calendar
                </a>

                <button type="button" className={styles.resetBtn} onClick={handleReset}>
                  Book Another Demo Slot
                </button>
              </div>
            ) : (
              /* Active Registration Form */
              <>
                {/* Live Selection Summary Bar */}
                <div className={styles.summaryBar}>
                  <span className={styles.summaryDot} />
                  <span>
                    {mode} • {formattedDate} • {selectedSlot}
                  </span>
                </div>

                <form className={styles.bookingForm} onSubmit={handleSubmit} noValidate>
                  {/* Full Name */}
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel} htmlFor="cal_name">
                      Full Name <span className={styles.fieldRequired}>*</span>
                    </label>
                    <input
                      type="text"
                      id="cal_name"
                      name="name"
                      className={styles.textInput}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel} htmlFor="cal_phone">
                      Phone / WhatsApp <span className={styles.fieldRequired}>*</span>
                    </label>
                    <div className={styles.phoneGroup}>
                      <span className={styles.phonePrefix}>+91</span>
                      <input
                        type="tel"
                        id="cal_phone"
                        name="phone"
                        className={styles.phoneInput}
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        autoComplete="tel"
                        pattern="[6-9][0-9]{9}"
                        maxLength={10}
                      />
                    </div>
                  </div>

                  {/* Course Dropdown */}
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel} htmlFor="cal_course">
                      Select Course <span className={styles.fieldRequired}>*</span>
                    </label>
                    <select
                      id="cal_course"
                      name="course"
                      className={styles.selectInput}
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      {EXISTING_COURSES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Optional Email */}
                  <div className={styles.formField}>
                    <label className={styles.fieldLabel} htmlFor="cal_email">
                      Email Address <span className={styles.fieldOptional}>(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="cal_email"
                      name="email"
                      className={styles.textInput}
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>

                  {errorMessage && <div className={styles.formError}>{errorMessage}</div>}

                  {/* Submit CTA */}
                  <button type="submit" className={styles.submitBtn} disabled={submitting}>
                    {submitting ? (
                      <>
                        <span className={styles.spinner} />
                        Reserving Slot...
                      </>
                    ) : (
                      "Confirm Demo Session"
                    )}
                  </button>

                  <p className={styles.privacyNote}>
                    🔒 Free demo session • Zero spam guarantee • Instant confirmation
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
