/**
 * hero-form.js
 * Handles the Hero Section enquiry form (#contactForm) on all location pages.
 * Submits data to Google Sheets via Google Apps Script (no-cors).
 *
 * Responsibilities:
 *  1. Wire up formToggle (floating icon) → show .formContainer on mobile
 *  2. Wire up #closeForm button → hide .formContainer on mobile
 *  3. Submit form data to Google Sheets
 *  4. Show inline success/error — NEVER hide the form on desktop
 *     (only close the mobile overlay after successful submit)
 *
 * Sheet target: "Locations Hero Form"
 */

(function () {
  'use strict';

  var SHEET_URL =
    'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

  /* ── Is the form currently acting as a mobile overlay? ──────────── */
  function isMobileOverlay() {
    return window.innerWidth <= 832;
  }

  /* ── Utility: get current IST timestamp ─────────────────────────── */
  function getTimestamp() {
    return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  }

  /* ── Show / hide loading state on the submit button ─────────────── */
  function setLoading(btn, isLoading) {
    if (!btn) return;
    btn.disabled = isLoading;
    btn.value    = isLoading ? 'Sending…' : 'Send Enquiry';
  }

  /* ── Show status message inside the form ────────────────────────── */
  function showStatus(el, message, isError) {
    if (!el) return;
    el.innerHTML =
      '<span style="color:' +
      (isError ? '#c0392b' : '#065f46') +
      ';font-size:0.82rem;display:block;margin-top:6px;padding:8px 10px;' +
      'border-radius:6px;background:' +
      (isError ? 'rgba(239,68,68,0.08)' : 'rgba(16,185,129,0.10)') +
      ';border:1px solid ' +
      (isError ? 'rgba(239,68,68,0.3)' : 'rgba(16,185,129,0.35)') +
      ';">' + message + '</span>';
  }

  function clearStatus(el) {
    if (el) el.innerHTML = '';
  }

  /* ── Mark the page as "hero-form.js managed" immediately ─────────
     This flag is read by courses/images/script.js (loaded later in <body>)
     to skip its own duplicate contactForm handler. We set it on <html> now
     so it's available even before DOMContentLoaded fires. */
  document.documentElement.dataset.heroFormPage = '1';

  /* ── Main init ───────────────────────────────────────────────────── */
  function initHeroForm() {
    var form = document.getElementById('contactForm');
    if (!form) return;

    /* Mark the form element too for extra safety */
    form.dataset.heroFormActive = '1';

    var container = document.querySelector('.formContainer');
    var toggleBtn = document.getElementById('formToggle');
    var closeBtn  = document.getElementById('closeForm');

    /* ── 1. Mobile toggle: show overlay ─────────────────────────── */
    if (toggleBtn && container) {
      toggleBtn.addEventListener('click', function (e) {
        e.preventDefault();
        container.classList.add('active');
        container.style.display = 'flex';
      });
    }

    /* ── 2. Close button: hide overlay ──────────────────────────── */
    if (closeBtn && container) {
      closeBtn.addEventListener('click', function (e) {
        e.preventDefault();
        container.classList.remove('active');
        container.style.display = '';   /* remove inline style → CSS media query takes over */
      });
    }

    /* ── 3. Inject status container after submit button ──────────── */
    var statusEl = document.getElementById('heroFormStatus');
    if (!statusEl) {
      statusEl = document.createElement('div');
      statusEl.id = 'heroFormStatus';
      /* Insert right after the submit button */
      var submitBtn = form.querySelector('input[type="submit"].submitButton');
      if (submitBtn && submitBtn.nextSibling) {
        submitBtn.parentNode.insertBefore(statusEl, submitBtn.nextSibling);
      } else {
        form.appendChild(statusEl);
      }
    }

    var submitBtn = form.querySelector('input[type="submit"].submitButton');

    /* ── 4. Form submission ──────────────────────────────────────── */
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      /* Field names in the template HTML: Name, Number, Email, Course */
      var nameInput   = form.querySelector('[name="Name"]');
      var phoneInput  = form.querySelector('[name="Number"]');
      var emailInput  = form.querySelector('[name="Email"]');
      var courseInput = form.querySelector('[name="Course"]');

      var payload = {
        sheet:     'Locations Hero Form',
        timestamp: getTimestamp(),
        name:      nameInput   ? nameInput.value.trim()   : '',
        phone:     phoneInput  ? phoneInput.value.trim()  : '',
        email:     emailInput  ? emailInput.value.trim()  : '',
        course:    courseInput ? courseInput.value         : '',
        mode:      '',
        date:      '',
        message:   '',
        source:    window.location.href
      };

      setLoading(submitBtn, true);
      clearStatus(statusEl);

      fetch(SHEET_URL, {
        method:  'POST',
        mode:    'no-cors',
        body:    JSON.stringify(payload),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      })
        .then(function () {
          showStatus(statusEl, '&#10003; Thank you! We\'ll reach out to you shortly.', false);
          form.reset();

          /* On mobile the form is a full-screen overlay — close it after 1.5 s */
          if (isMobileOverlay() && container) {
            setTimeout(function () {
              container.classList.remove('active');
              container.style.display = '';
              clearStatus(statusEl);
            }, 1500);
          }
        })
        .catch(function () {
          showStatus(statusEl, '&#10005; Submission failed. Please WhatsApp us at +91-88106-06010.', true);
        })
        .finally(function () {
          setLoading(submitBtn, false);
        });
    });
  }

  /* ── Boot ────────────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroForm);
  } else {
    initHeroForm();
  }
})();
