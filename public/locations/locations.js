/* locations.js — shared JS for all location pages
   EDIT HERE: GAS_URL (Google Sheet link) and SHEET (tab name) are just below. */

(function () {
  'use strict';

  var GAS_URL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

  // Keep all dynamic location leads in one tab.
  var SHEET = 'Locations Leads';
  var LOCATION_LABEL = document.body.getAttribute('data-sheet') || document.title || 'Unknown';
  var SOURCE = document.body.getAttribute('data-source') || window.location.pathname;

  /* ── 1. MODULES CAROUSEL ─────────────────────────────────────── */
  /* SPEED (Oct 2026): the cards now move ONLY while the section is on screen
     and the browser tab is open. Before, this ran nonstop from page load, which
     slowed phones a lot. Pages with the new 4-tab roadmap use their own code. */
  function initModulesCarousel() {
    var aiCards = document.querySelector('.modules-redesign .aiCards');
    if (!aiCards) return;
    var cards = Array.from(aiCards.querySelectorAll(':scope > .aiCard'));
    if (cards.length < 2) return;
    var cloned = false, paused = false, lastTs = null, SPEED = 0.8, onScreen = false, running = false;

    function cloneOnce() {
      if (cloned) return;
      cards.forEach(function (c) { var k = c.cloneNode(true); k.setAttribute('aria-hidden', 'true'); aiCards.appendChild(k); });
      cloned = true;
    }
    function tick(ts) {
      if (!onScreen || document.hidden) { running = false; lastTs = null; return; }   /* stop when not visible */
      if (!paused) {
        if (lastTs !== null) {
          aiCards.scrollLeft += SPEED * ((ts - lastTs) / 16.67);
          var half = aiCards.scrollWidth / 2;
          if (half > 0 && aiCards.scrollLeft >= half) aiCards.scrollLeft -= half;
        }
        lastTs = ts;
      } else { lastTs = null; }
      requestAnimationFrame(tick);
    }
    function start() {
      if (running || !onScreen || document.hidden) return;
      cloneOnce(); running = true; requestAnimationFrame(tick);
    }
    aiCards.addEventListener('mouseenter', function () { paused = true; });
    aiCards.addEventListener('mouseleave', function () { paused = false; });
    aiCards.addEventListener('touchstart', function () { paused = true; }, { passive: true });
    aiCards.addEventListener('touchend', function () { setTimeout(function () { paused = false; }, 1200); }, { passive: true });
    document.addEventListener('visibilitychange', start);

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        onScreen = entries[0].isIntersecting;
        start();
      }, { rootMargin: '100px' }).observe(aiCards);
    } else { onScreen = true; start(); }
  }

  /* ── 2. SEND TO GOOGLE SHEET ─────────────────────────────────── */
  function sendToSheet(payload, onDone) {
    payload.sheet     = SHEET;
    payload.location  = LOCATION_LABEL;
    payload.source    = SOURCE;
    payload.timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    fetch(GAS_URL, {
      method : 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body   : JSON.stringify(payload)
    }).catch(function () { /* CORS blocks response — data still written */ });

    /* Show success after 1.5s regardless — GAS has received it by then */
    setTimeout(function () { if (onDone) onDone(); }, 1500);
  }

  /* ── 3. SUCCESS OVERLAY ──────────────────────────────────────── */
  function buildOverlayCSS() {
    var s = document.createElement('style');
    s.textContent =
      '#daOverlay{position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;' +
      'background:rgba(10,5,30,.9);backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .3s}' +
      '#daOverlay.show{opacity:1;pointer-events:all}' +
      '.daBox{background:linear-gradient(135deg,#1a0a2e,#0d0d2b);border:1px solid rgba(204,34,224,.4);' +
      'border-radius:20px;padding:44px 36px;max-width:440px;width:92%;text-align:center;' +
      'transform:scale(.93);transition:transform .35s cubic-bezier(.34,1.56,.64,1)}' +
      '#daOverlay.show .daBox{transform:scale(1)}' +
      '.daTick{width:68px;height:68px;border-radius:50%;background:linear-gradient(135deg,#cc22e0,#7b6bfa);' +
      'display:flex;align-items:center;justify-content:center;margin:0 auto 18px;' +
      'box-shadow:0 0 0 0 rgba(204,34,224,.5);animation:daPulse 1.4s ease-out .2s}' +
      '@keyframes daPulse{0%{box-shadow:0 0 0 0 rgba(204,34,224,.5)}70%{box-shadow:0 0 0 20px rgba(204,34,224,0)}100%{box-shadow:0 0 0 0 rgba(204,34,224,0)}}' +
      '.daTick svg{width:34px;height:34px;stroke:#fff;stroke-width:2.8;fill:none;stroke-linecap:round;stroke-linejoin:round}' +
      '.daBox h3{margin:0 0 10px;font-size:1.4rem;font-weight:700;' +
      'background:linear-gradient(90deg,#cc22e0,#7b6bfa);-webkit-background-clip:text;' +
      '-webkit-text-fill-color:transparent;background-clip:text}' +
      '.daBox p{color:#b0a8c8;font-size:.93rem;line-height:1.65;margin:0 0 24px}' +
      '.daBox p strong{color:#e8e0ff}' +
      '.daWaBtn{display:inline-flex;align-items:center;gap:8px;background:linear-gradient(90deg,#25d366,#128c3e);' +
      'color:#fff;border:none;border-radius:50px;padding:12px 26px;font-size:.9rem;font-weight:600;cursor:pointer;' +
      'transition:transform .18s,box-shadow .18s}' +
      '.daWaBtn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(37,211,102,.35)}' +
      '.daCloseNote{display:block;margin-top:11px;font-size:.77rem;color:#7b6bfa;cursor:pointer;text-decoration:underline}' +
      '.daStatus{display:block;margin-top:8px;padding:8px 12px;border-radius:7px;font-size:.84rem;font-weight:500;min-height:0}' +
      '.daStatus.err{background:rgba(239,68,68,.1);color:#ef4444;border:1px solid rgba(239,68,68,.25)}' +
      '.daStatus.loading{background:rgba(123,107,250,.1);color:#7b6bfa;border:1px solid rgba(123,107,250,.25)}';
    document.head.appendChild(s);
  }

  var overlayEl = null;

  function createOverlay() {
    if (overlayEl) return;
    buildOverlayCSS();
    overlayEl = document.createElement('div');
    overlayEl.id = 'daOverlay';
    overlayEl.innerHTML =
      '<div class="daBox">' +
        '<div class="daTick"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>' +
        '<h3>You\'re All Set! 🎉</h3>' +
        '<p>Thanks for contacting <strong>DizitalAdda</strong>.<br>' +
           'Our team will call you within <strong>24 hours</strong>.</p>' +
        '<button class="daWaBtn" id="daWaBtn">' +
          '<svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">' +
            '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15' +
            '-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475' +
            '-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52' +
            '.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207' +
            '-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372' +
            '-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2' +
            ' 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719' +
            ' 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>' +
            '<path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16z"/>' +
          '</svg>Chat on WhatsApp' +
        '</button>' +
        '<span class="daCloseNote" id="daCloseNote">close this window</span>' +
      '</div>';
    document.body.appendChild(overlayEl);

    overlayEl.addEventListener('click', function (e) { if (e.target === overlayEl) hideOverlay(); });
    document.getElementById('daCloseNote').addEventListener('click', hideOverlay);
    document.getElementById('daWaBtn').addEventListener('click', function () {
      window.open('https://wa.me/918810606010?text=' +
        encodeURIComponent('Hi, I submitted a form for Digital Marketing Course in ' + LOCATION_LABEL + '. Please confirm my session.'),
        '_blank');
      hideOverlay();
    });
  }

  function showOverlay() { createOverlay(); requestAnimationFrame(function () { overlayEl.classList.add('show'); }); }
  function hideOverlay() { if (overlayEl) overlayEl.classList.remove('show'); }

  /* ── 4. PATCH A FORM — removes action, forces JS control ─────── */
  function patchForm(form, phoneFieldName, fieldMap, btnLabel) {
    if (!form) return;

    /* CRITICAL: remove action so browser never does a GET/POST itself */
    form.removeAttribute('action');
    form.setAttribute('method', 'post'); /* keeps it as post in case */

    /* Create status element */
    var st = document.createElement('span');
    st.className = 'daStatus';
    form.appendChild(st);

    var btn = form.querySelector('[type="submit"], .submitButton, button[id="bookDemoSubmitBtn"]');

    /* Remove any existing onsubmit attribute */
    form.removeAttribute('onsubmit');
    form.onsubmit = null;

    form.addEventListener('submit', function (e) {
      /* Stop EVERYTHING */
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();

      var phoneEl = form.querySelector('[name="' + phoneFieldName + '"]');
      var phone   = phoneEl ? phoneEl.value.replace(/\D/g, '') : '';

      if (phone.length < 10) {
        st.textContent = '⚠️ Please enter a valid 10-digit phone number.';
        st.className   = 'daStatus err';
        return false;
      }

      /* Build payload from fieldMap */
      var payload = {};
      Object.keys(fieldMap).forEach(function (key) {
        var el = form.querySelector('[name="' + fieldMap[key] + '"]');
        payload[key] = el ? el.value.trim() : '';
      });
      payload.phone = phone;

      /* Special: read calendar date for demo form */
      var echo = document.getElementById('bdFormDateEcho');
      if (echo) {
        var d = echo.textContent.trim();
        payload.date = (d && d.indexOf('Pick') === -1) ? d : '';
      }

      /* Lock button & show loading */
      if (btn) {
        btn.disabled = true;
        if (btn.tagName === 'INPUT') btn.value = 'Submitting…';
        else btn.textContent = 'Submitting…';
      }
      st.textContent = '⏳ Submitting…';
      st.className   = 'daStatus loading';

      sendToSheet(payload, function () {
        st.textContent = '';
        st.className   = 'daStatus';
        showOverlay();
        form.reset();

        /* Reset calendar */
        if (echo) { echo.textContent = 'Pick a date from the calendar →'; echo.classList.remove('filled'); }
        var selDisp = document.getElementById('bdSelectedDisplay');
        if (selDisp) selDisp.innerHTML = 'No date selected';

        if (btn) {
          btn.disabled = false;
          if (btn.tagName === 'INPUT') btn.value = btnLabel;
          else btn.textContent = btnLabel;
        }
      });

      return false;
    }, true); /* useCapture:true — fires before any other listener */
  }

  /* ── 5. FLOATING FORM TOGGLE ─────────────────────────────────── */
  function initFloatingToggle() {
    var toggle   = document.getElementById('formToggle');
    var formWrap = document.querySelector('.formContainer');
    var closeBtn = document.getElementById('closeForm');
    if (!toggle || !formWrap) return;
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      formWrap.style.display = formWrap.style.display === 'flex' ? 'none' : 'flex';
    });
    if (closeBtn) closeBtn.addEventListener('click', function () { formWrap.style.display = 'none'; });
  }

  /* ── INIT ────────────────────────────────────────────────────── */
  function init() {
    initModulesCarousel();

    /* Hero contact form — field names match your HTML exactly */
    patchForm(
      document.getElementById('contactForm'),
      'Number',                          /* phone field name */
      { name:'Name', email:'Email', course:'Course', mode:'', date:'', message:'' },
      'Submit'
    );

    /* Book demo form */
    patchForm(
      document.getElementById('bookDemoForm'),
      'phone',                           /* phone field name */
      { name:'name', email:'email', course:'course', mode:'', message:'message' },
      'Book My Free Demo'
    );

    initFloatingToggle();
  }

  /* Run as late as possible to guarantee DOM is ready */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();