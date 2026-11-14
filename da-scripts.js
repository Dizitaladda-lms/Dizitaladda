/* da-scripts.js — DizitalAdda Degree Pages Interactivity */

(function () {
  'use strict';

  /* -------------------------------------------------------
     Navbar: add shadow on scroll
  ------------------------------------------------------- */
  (function initNavbar() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 4px 24px rgba(109,40,217,.10)';
      } else {
        navbar.style.boxShadow = '';
      }
    }, { passive: true });
  }());

  /* -------------------------------------------------------
     Scroll-reveal: fade-in sections on enter viewport
  ------------------------------------------------------- */
  (function initScrollReveal() {
    var targets = document.querySelectorAll(
      '.why-card, .offering-card, .fun-card, .gallery-item, ' +
      '.year-card, .hero-stat, .testimonial-card'
    );

    if (!window.IntersectionObserver) return; // graceful fallback

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transition =
            'opacity .5s ease ' + (entry.target.dataset.delay || '0s') +
            ', transform .5s ease ' + (entry.target.dataset.delay || '0s');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    targets.forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(22px)';
      // stagger within groups of 4
      el.dataset.delay = (0.08 * (i % 4)) + 's';
      observer.observe(el);
    });
  }());

  /* -------------------------------------------------------
     Stat counter: animate numbers in hero stats on enter
  ------------------------------------------------------- */
  (function initCounters() {
    var stats = document.querySelectorAll('.hero-stat-num');
    if (!stats.length) return;

    var observed = false;

    var observer = new IntersectionObserver(function (entries) {
      if (observed) return;
      var visible = entries.some(function (e) { return e.isIntersecting; });
      if (!visible) return;
      observed = true;
      observer.disconnect();

      stats.forEach(function (el) {
        var raw = el.textContent.trim();
        // Extract numeric part and suffix (e.g. "25,000+" → 25000, "+")
        var suffix = raw.replace(/[\d,]/g, '');
        var numeric = parseInt(raw.replace(/[^0-9]/g, ''), 10);
        if (!numeric) return;

        var start = 0;
        var duration = 1600;
        var step = duration / 60;
        var increment = numeric / (duration / step);
        var current = start;

        var timer = setInterval(function () {
          current += increment;
          if (current >= numeric) {
            current = numeric;
            clearInterval(timer);
          }
          var display = Math.round(current);
          // re-add thousands separator
          el.textContent = display.toLocaleString('en-IN') + suffix;
        }, step);
      });
    }, { threshold: 0.5 });

    var heroSection = document.querySelector('.hero');
    if (heroSection) observer.observe(heroSection);
  }());

  /* -------------------------------------------------------
     Smooth scroll for anchor links
  ------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* -------------------------------------------------------
     Mobile navbar: hide CTA outline button when very small
     (already handled via CSS, but keep as safety toggle)
  ------------------------------------------------------- */
  // No JS needed — CSS handles this via @media

}());
