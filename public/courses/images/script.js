var _ftToggle    = document.getElementById('formToggle');
var _ftClose     = document.getElementById('closeForm');
var _ftContainer = document.querySelector('.formContainer');

/* Mobile overlay toggle — only needed when hero-form.js is NOT already handling it */
var _heroFormPage = (document.documentElement.dataset.heroFormPage === '1');

if (_ftToggle && _ftContainer && !_heroFormPage) {
  _ftToggle.addEventListener('click', function(e) {
    e.preventDefault();
    _ftContainer.classList.add('active');
    _ftContainer.style.display = 'flex';
  });
}

if (_ftClose && _ftContainer && !_heroFormPage) {
  _ftClose.addEventListener('click', function(e) {
    e.preventDefault();
    _ftContainer.classList.remove('active');
    _ftContainer.style.display = '';
  });
}

var scriptURL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

/*
 * contactForm submit handler.
 * On location pages hero-form.js marks the form with data-hero-form-active="1"
 * so this older handler is skipped to avoid double-submission / alert() popups.
 */

var _contactForm = document.getElementById('contactForm');

if (_contactForm && !_heroFormPage) {

  _contactForm.addEventListener('submit', function (e) {

    e.preventDefault();

    var fd = new FormData(this);

    var payload = {
      sheet:     'LocationForm',
      name:      fd.get('Name')   || fd.get('name')   || '',
      phone:     fd.get('Number') || fd.get('phone')  || '',
      email:     fd.get('Email')  || fd.get('email')  || '',
      course:    fd.get('Course') || fd.get('course') || '',
      timestamp: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      source:    window.location.href
    };

    /* Show inline status instead of alert() */
    var statusEl = document.getElementById('heroFormStatus');

    fetch(scriptURL, {
      method:  'POST',
      mode:    'no-cors',
      body:    JSON.stringify(payload),
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    })

    .then(function() {

      /* =========================
         CUSTOM FORM SUBMIT TRIGGER
      ========================== */

      // Custom JS event
      window.dispatchEvent(new CustomEvent('formSubmitted', {
        detail: payload
      }));

      // Google Tag Manager / GA4 trigger
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'form_submit_success',
        formName: 'contactForm',
        page: window.location.href,
        course: payload.course,
        userName: payload.name,
        phone: payload.phone
      });

      /* ========================= */

      if (statusEl) {
        statusEl.innerHTML =
          '<span style="color:#065f46;font-size:0.82rem;display:block;margin-top:6px;padding:8px 10px;border-radius:6px;background:rgba(16,185,129,0.10);border:1px solid rgba(16,185,129,0.35);">&#10003; Thank you! We\\\'ll reach out to you shortly.</span>';
      }

      _contactForm.reset();

      /* Close mobile overlay after 1.5 s */
      if (window.innerWidth <= 832 && _ftContainer) {

        setTimeout(function() {

          _ftContainer.classList.remove('active');
          _ftContainer.style.display = '';

          if (statusEl) {
            statusEl.innerHTML = '';
          }

        }, 1500);
      }

    })

    .catch(function(error) {

      console.error('Submission failed:', error);

      if (statusEl) {
        statusEl.innerHTML =
          '<span style="color:#b91c1c;font-size:0.82rem;display:block;margin-top:6px;padding:8px 10px;border-radius:6px;background:rgba(239,68,68,0.07);border:1px solid rgba(239,68,68,0.25);">&#10005; Submission failed. Please WhatsApp us at +91-88106-06010.</span>';
      }

    });

  });

}

/* =========================
   OPTIONAL LISTENER
========================= */

window.addEventListener('formSubmitted', function(e) {
  console.log('Form submitted successfully:', e.detail);
});

/* =========================
   SCROLL SECTION
========================= */

const scrollSection = document.getElementById('scrollSection');

if (!scrollSection) {

  /* skip scroll logic on pages without this element */

} else {

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let scrollInterval = null;

  function startAutoScroll() {

    if (scrollInterval) return;

    scrollInterval = setInterval(() => {

      if (!isDragging) {

        if (
          scrollSection.scrollLeft + scrollSection.clientWidth >=
          scrollSection.scrollWidth
        ) {

          scrollSection.scrollLeft = 0;

        } else {

          scrollSection.scrollLeft += 1;

        }
      }

    }, 20);
  }

  function stopAutoScroll() {

    clearInterval(scrollInterval);
    scrollInterval = null;

  }

  // Mouse Events

  scrollSection.addEventListener('mousedown', (e) => {

    isDragging = true;

    scrollSection.classList.add('dragging');

    startX = e.pageX - scrollSection.offsetLeft;

    scrollLeft = scrollSection.scrollLeft;

    stopAutoScroll();

  });

  scrollSection.addEventListener('mousemove', (e) => {

    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - scrollSection.offsetLeft;

    const walk = (x - startX) * 2;

    scrollSection.scrollLeft = scrollLeft - walk;

  });

  scrollSection.addEventListener('mouseup', () => {

    isDragging = false;

    scrollSection.classList.remove('dragging');

    startAutoScroll();

  });

  scrollSection.addEventListener('mouseleave', () => {

    isDragging = false;

    scrollSection.classList.remove('dragging');

    startAutoScroll();

  });

  // Touch Events

  scrollSection.addEventListener('touchstart', (e) => {

    isDragging = true;

    startX = e.touches[0].pageX;

    scrollLeft = scrollSection.scrollLeft;

    stopAutoScroll();

  });

  scrollSection.addEventListener('touchmove', (e) => {

    if (!isDragging) return;

    const x = e.touches[0].pageX;

    const walk = (x - startX) * 2;

    scrollSection.scrollLeft = scrollLeft - walk;

  });

  scrollSection.addEventListener('touchend', () => {

    isDragging = false;

    startAutoScroll();

  });

  // Start auto-scroll

  startAutoScroll();

  // Pause auto-scroll on card hover

  const cards = scrollSection.querySelectorAll('.aiCard');

  cards.forEach((card) => {

    card.addEventListener('mouseenter', () => {

      stopAutoScroll();

    });

    card.addEventListener('mouseleave', () => {

      if (!isDragging) startAutoScroll();

    });

  });

}