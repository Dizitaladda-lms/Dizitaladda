(function () {
  'use strict';

  if (window.__daCommonLeadFormLoaded) return;
  window.__daCommonLeadFormLoaded = true;

  var SHEET_URL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';
  var SHEET_NAME = 'Website Leads';

  function getFormName(form) {
    return form.getAttribute('data-form-name') ||
      form.id ||
      form.getAttribute('name') ||
      form.className ||
      'website-lead-form';
  }

  function getFieldValue(form, pattern) {
    var controls = form.querySelectorAll('input, select, textarea');
    for (var i = 0; i < controls.length; i += 1) {
      var control = controls[i];
      var key = (control.name || '') + ' ' + (control.id || '');
      if (pattern.test(key) && control.value) return control.value.trim();
    }
    return '';
  }

  function getSelectedCalendarDate() {
    var selectedDate = document.querySelector('#bdSelectedDisplay .bd-sel-date');
    if (!selectedDate) return '';

    var date = new Date(selectedDate.textContent.trim());
    if (Number.isNaN(date.getTime())) return '';

    var month = String(date.getMonth() + 1).padStart(2, '0');
    var day = String(date.getDate()).padStart(2, '0');
    return date.getFullYear() + '-' + month + '-' + day;
  }

  function appendWhatsAppLink(status, url) {
    if (!url) return;
    var link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = 'Continue to WhatsApp';
    status.appendChild(document.createElement('br'));
    status.appendChild(link);
  }

  function setCourseValue(select, value, allowCustomCourse) {
    var normalizedValue = (value || '').trim().toLowerCase();
    if (!normalizedValue) {
      select.value = '';
      return;
    }

    var options = select.options;
    for (var i = 0; i < options.length; i += 1) {
      var optionValue = options[i].value.toLowerCase();
      if (optionValue === normalizedValue ||
          ((normalizedValue === 'cyber security' || normalizedValue === 'cyber security & ethical hacking') &&
           optionValue.indexOf('cyber security') !== -1)) {
        select.value = options[i].value;
        return;
      }
    }
    if (!allowCustomCourse) {
      select.value = '';
      return;
    }

    var option = document.createElement('option');
    option.value = value.trim();
    option.textContent = value.trim();
    select.appendChild(option);
    select.value = option.value;
  }

  function getCourseFromTrigger(trigger, fallback) {
    var card = trigger.closest('.courseCard, .course-box, .course-card');
    if (!card && !trigger.matches('[data-course]')) {
      card = trigger.closest('[data-course]');
    }
    if (card) {
      var title = card.querySelector('.dataContainerCouses h2, .card-title, h2, h3');
      if (title && title.textContent.trim()) return title.textContent.trim();
    }

    return trigger.dataset.course || fallback;
  }

  function isLeadForm(form) {
    if (form.id === 'daCommonLeadForm') return false;
    if (form.hasAttribute('data-nosheet')) return false;
    if (/^(?:payForm|paySuccessForm|upayForm|upayRedirectForm)$/i.test(form.id)) return false;
    if (form.querySelector('input[type="password"], input[type="file"]')) return false;
    if (/^\/enroll(?:[-./]|$)/i.test(window.location.pathname)) return false;
    if (/\/enroll(?:[-./]|$)/i.test(form.getAttribute('action') || '')) return false;

    var identity = [
      form.id || '',
      form.getAttribute('name') || '',
      typeof form.className === 'string' ? form.className : '',
      form.getAttribute('action') || ''
    ].join(' ');

    if (/(payment|checkout|login|register|admin|search)/i.test(identity)) return false;

    var hasPhone = form.querySelector('input[type="tel"], input[name*="phone" i], input[name*="mobile" i], input[name="Number" i]');
    var hasEmail = form.querySelector('input[type="email"], input[name*="email" i]');
    var hasName = form.querySelector('input[name*="name" i]');
    var knownLeadForm = /(contact|enquir|inquir|lead|demo|booking|courseform|dynamicform|popupform|location-form)/i.test(identity);

    return Boolean(hasPhone && (hasName || hasEmail || knownLeadForm));
  }

  function addStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.da-common-lead-trigger{display:block;width:100%;margin:12px 0;padding:13px 18px;border:0;border-radius:8px;background:#6c35d4;color:#fff;font:inherit;font-weight:600;font-size:16px;line-height:1.3;cursor:pointer;text-align:center}',
      '.da-common-lead-trigger:hover,.da-common-lead-trigger:focus-visible{background:#5424b4}',
      '.da-common-lead-overlay[hidden]{display:none}',
      '.da-common-lead-overlay{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:18px;background:rgba(15,18,35,.72);overflow:auto}',
      '.da-common-lead-dialog{position:relative;display:grid;grid-template-columns:1fr 1fr;width:min(100%,900px);max-height:calc(100vh - 36px);min-height:min(680px,calc(100vh - 36px));overflow:hidden;border-radius:14px;background:#111827;color:#fff;box-shadow:0 20px 70px rgba(0,0,0,.45);font-family:Arial,sans-serif}',
      '.da-common-lead-visual{min-width:0;min-height:0;background:#1f2937}',
      '.da-common-lead-visual img{display:block;width:100%;height:100%;object-fit:cover}',
      '.da-common-lead-content{position:relative;display:flex;flex-direction:column;justify-content:center;min-width:0;min-height:0;overflow:auto;padding:40px 48px 26px}',
      '.da-common-lead-dialog h2{margin:0 36px 12px 0;color:#a855f7;font-size:32px;line-height:1.1}',
      '.da-common-lead-dialog p{margin:0 0 22px;color:#d1d5db;font-size:18px;line-height:1.35}',
      '.da-common-lead-close{position:absolute;top:20px;right:20px;z-index:2;width:36px;height:36px;border:0;background:transparent;color:#fff;font-size:32px;line-height:1;cursor:pointer}',
      '.da-common-lead-content form{display:flex;flex-direction:column;align-items:stretch;width:100%;max-width:none;margin:0;padding:0}',
      '.da-common-lead-fields{display:flex;flex-direction:column;gap:42px}',
      '.da-common-lead-field{display:block;min-width:0}',
      '.da-common-lead-field label{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}',
      '.da-common-lead-field input,.da-common-lead-field select{box-sizing:border-box;width:100%;height:54px;padding:0 15px;border:1px solid #374151;border-radius:9px;background:#1f2937;color:#f9fafb;font:inherit;font-size:17px}',
      '.da-common-lead-field input,.da-common-lead-field select{margin:0!important}',
      '.da-common-lead-field input::placeholder{color:#9ca3af}',
      '.da-common-lead-field select:invalid{color:#f9fafb}',
      '.da-common-lead-field select option{background:#111827;color:#f9fafb}',
      '.da-common-lead-submit{width:100%;min-height:50px;margin-top:84px;border:0;border-radius:9px;background:linear-gradient(135deg,#7e22ce,#9333ea);color:#fff;font-size:16px;font-weight:700;cursor:pointer}',
      '.da-common-lead-submit:disabled{opacity:.65;cursor:wait}',
      '.da-common-lead-status{min-height:0;margin-top:12px;font-size:14px;line-height:1.5}',
      '.da-common-lead-status.error{color:#b42318}',
      '.da-common-lead-status.success{color:#087443}',
      '.da-common-lead-status a{color:inherit;font-weight:700}',
      '@media(max-width:700px){.da-common-lead-overlay{padding:12px}.da-common-lead-dialog{grid-template-columns:1fr;width:min(100%,440px);min-height:0;max-height:calc(100vh - 24px);overflow:auto}.da-common-lead-visual{display:none}.da-common-lead-content{padding:48px 24px 24px}.da-common-lead-dialog h2{font-size:27px}.da-common-lead-dialog p{font-size:16px}.da-common-lead-fields{gap:14px}.da-common-lead-submit{margin-top:24px}}'
    ].join('');
    document.head.appendChild(style);
  }

  function buildModal() {
    var overlay = document.createElement('div');
    overlay.className = 'da-common-lead-overlay';
    overlay.hidden = true;
    overlay.innerHTML =
      '<section class="da-common-lead-dialog" role="dialog" aria-modal="true" aria-labelledby="daCommonLeadTitle">' +
        '<div class="da-common-lead-visual"><img src="/pexels-rdne-7821934.jpg" alt="Course advisor helping a student complete an enquiry"></div>' +
        '<div class="da-common-lead-content">' +
        '<button class="da-common-lead-close" type="button" aria-label="Close">&times;</button>' +
        '<h2 id="daCommonLeadTitle">Get Course Information</h2>' +
        '<p>Fill out the form to receive our brochure and details.</p>' +
        '<form id="daCommonLeadForm">' +
          '<div class="da-common-lead-fields">' +
            '<div class="da-common-lead-field"><label for="daLeadName">Your name</label><input id="daLeadName" name="name" placeholder="Enter Your Name..." autocomplete="name" required></div>' +
            '<div class="da-common-lead-field"><label for="daLeadPhone">Your phone number</label><input id="daLeadPhone" name="phone" type="tel" placeholder="Enter Your Number..." autocomplete="tel" required></div>' +
            '<div class="da-common-lead-field"><label for="daLeadEmail">Your email</label><input id="daLeadEmail" name="email" type="email" placeholder="Enter Your Email..." autocomplete="email"></div>' +
            '<div class="da-common-lead-field"><label for="daLeadCourse">Select course</label><select id="daLeadCourse" name="course"><option value="">Select Courses</option><option value="Digital Marketing">Digital Marketing</option><option value="Generative AI">Generative AI</option><option value="Machine Learning">Machine Learning</option><option value="Data Analytics">Data Analytics</option><option value="Data Science">Data Science</option><option value="Cyber Security and Ethical Hacking">Cyber Security and Ethical Hacking</option></select></div>' +
            '<input type="hidden" name="mode" value="">' +
            '<input type="hidden" name="date" value="">' +
            '<input type="hidden" name="message" value="">' +
          '</div>' +
          '<button class="da-common-lead-submit" type="submit">Enquire Now</button>' +
          '<div class="da-common-lead-status" role="status" aria-live="polite"></div>' +
        '</form>' +
        '</div>' +
      '</section>';
    var courseSelect = overlay.querySelector('#daLeadCourse');
    [
      'Expert in Digital Marketing',
      'Advanced Digital Marketing',
      'Advance Digital Marketing Course',
      'Digital Marketing for Professionals',
      'Digital Marketing For Professionals',
      'Digital Marketing for Beginners',
      'Diploma in GenAI & Prompt Engineering',
      'Diploma in Data Analytics',
      'Diploma in Machine Learning & AI',
      'Diploma in Data Science & AI',
      'Advanced Certification in GenAI & Prompt Engineering',
      'Advanced Certification in GenAI & Prompt Engineering Certification',
      'Advanced Certification in Data Analytics and AI',
      'Advanced Certification in Machine Learning & AI',
      'Advanced Certification in Data Science & AI',
      'Certification in Data Analytics and AI',
      'Professional GenAI & Prompt Engineering Certification',
      'Professional Data Analytics Certification Program',
      'Professional Machine Learning & AI Certification Program',
      'Professional Data Science & AI Certification Program',
      'Foundation in Cyber Security and Ethical Hacking',
      'Advanced Certification in Cyber Security and Ethical Hacking',
      'Expert Training In Cyber Security and Ethical Hacking',
      'Certification in Digital Forensic and Cyber Investigation',
      'Expert Training in Bug Bounty',
      'UI/UX Design',
      'Diploma in Computer software Technology',
      'Graphic design & professional Video Editing',
      'Graphic designing and Motion Graphics',
      'Web Development Course'
    ].forEach(function (course) {
      var option = document.createElement('option');
      option.value = course;
      option.textContent = course;
      courseSelect.appendChild(option);
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  function init() {
    if (/^\/(?:enroll(?:[-./]|$)|panel(?:[/.]|$)|new-panel(?:[/.]|$)|affiliate-program(?:[/.]|$)|project-root(?:-1)?(?:[/.]|$)|blogs\/(?:blog|blog-cms)\/admin(?:[/.]|$))/i.test(window.location.pathname)) return;

    addStyles();

    var pageHeading = document.querySelector('h1');
    var defaultCourse = pageHeading ? pageHeading.textContent.trim() : document.title;
    var pageSheet = /^\/courses(?:\/|$)/i.test(window.location.pathname) ? 'LocationForm' : SHEET_NAME;
    var modal = buildModal();
    var form = modal.querySelector('#daCommonLeadForm');
    var status = modal.querySelector('.da-common-lead-status');
    var submitButton = form.querySelector('button[type="submit"]');
    var activeFormName = 'common-lead-form';
    var activeSheet = pageSheet;
    var isDemoBooking = false;
    var lastTrigger = null;

    function openModal(trigger, context) {
      context = context || {};
      activeFormName = context.formName || (trigger && trigger.dataset.formName) || 'common-lead-form';
      activeSheet = context.sheet || (trigger && trigger.dataset.sheet) || pageSheet;
      isDemoBooking = Boolean(context.isDemo || (trigger && trigger.dataset.isDemo === 'true'));
      var course = context.course || (trigger && trigger.dataset.course) || defaultCourse;
      var isCourseContext = Boolean(
        context.isCourse ||
        (trigger && (trigger.dataset.course || trigger.closest('.courseCard, .course-box, .course-card, [data-course]'))) ||
        /^\/courses(?:\/|$)/i.test(window.location.pathname)
      );
      setCourseValue(form.elements.course, course, isCourseContext);
      form.elements.date.value = context.date || (isDemoBooking ? getSelectedCalendarDate() : '');
      status.textContent = '';
      status.className = 'da-common-lead-status';
      modal.hidden = false;
      lastTrigger = trigger || document.activeElement;
      form.elements.name.focus();
    }

    function closeModal() {
      modal.hidden = true;
      if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    }

    function replaceLeadForms(root) {
      var forms = [];
      if (root.matches && root.matches('form')) forms.push(root);
      if (root.querySelectorAll) {
        Array.prototype.push.apply(forms, root.querySelectorAll('form'));
      }

      forms.forEach(function (oldForm) {
        if (!isLeadForm(oldForm)) return;

        var course = getFieldValue(oldForm, /course|program|service/i) ||
          oldForm.dataset.course ||
          getCourseFromTrigger(oldForm, defaultCourse);
        var formName = getFormName(oldForm);
        var isDemo = /demo|booking|book.?demo/i.test(formName + ' ' + oldForm.className);
        var sheet = oldForm.dataset.sheet || pageSheet;
        var oldPopup = oldForm.closest('#popup, .popup');
        if (oldPopup) oldPopup.style.display = 'none';

        var trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'da-common-lead-trigger';
        trigger.textContent = isDemo ? 'Book a Free Demo' : 'Open Enquiry Form';
        trigger.dataset.formName = formName;
        trigger.dataset.course = course;
        trigger.dataset.sheet = sheet;
        trigger.dataset.isDemo = String(isDemo);
        trigger.setAttribute('aria-haspopup', 'dialog');
        trigger.addEventListener('click', function () {
          openModal(trigger);
        });
        oldForm.replaceWith(trigger);
      });
    }

    replaceLeadForms(document);
    if (window.MutationObserver) {
      var formObserver = new MutationObserver(function (records) {
        records.forEach(function (record) {
          record.addedNodes.forEach(function (node) {
            if (node.nodeType === 1) replaceLeadForms(node);
          });
        });
      });
      formObserver.observe(document.body, { childList: true, subtree: true });
    }

    document.addEventListener('click', function (event) {
      var enquiryTrigger = event.target.closest && event.target.closest('.formToggle, #formToggle, .enrollNowBtn');
      if (enquiryTrigger) {
        event.preventDefault();
        event.stopImmediatePropagation();
        var courseCard = enquiryTrigger.closest('.courseCard, .course-box, .course-card, [data-course]');
        openModal(enquiryTrigger, {
          formName: 'popup-enquiry',
          course: getCourseFromTrigger(enquiryTrigger, defaultCourse),
          sheet: enquiryTrigger.dataset.sheet || pageSheet,
          isCourse: Boolean(courseCard || enquiryTrigger.dataset.course)
        });
        return;
      }

      var link = event.target.closest && event.target.closest('a[href]');
      if (!link) return;
      var target = link.getAttribute('href');
      if (target !== '#lead-form' && target !== '#bookDemo' && target !== '#book-demo') return;
      event.preventDefault();
      event.stopImmediatePropagation();
      openModal(link, {
        formName: target === '#lead-form' ? 'popup-enquiry' : 'book-demo',
        isDemo: target !== '#lead-form'
      });
    }, true);

    modal.querySelector('.da-common-lead-close').addEventListener('click', closeModal);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) closeModal();
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !modal.hidden) closeModal();
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.reportValidity()) return;

      var phone = form.elements.phone.value.trim();
      if (phone.replace(/\D/g, '').length < 10) {
        status.textContent = 'Please enter a valid phone number.';
        status.className = 'da-common-lead-status error';
        form.elements.phone.focus();
        return;
      }

      var values = {
        sheet: activeSheet,
        form_name: activeFormName,
        name: form.elements.name.value.trim(),
        phone: phone,
        email: form.elements.email.value.trim(),
        course: form.elements.course.value.trim(),
        mode: form.elements.mode.value,
        date: form.elements.date.value,
        message: form.elements.message.value.trim(),
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        page: window.location.href,
        source: window.location.href
      };

      var whatsappUrl = '';
      var whatsappOpened = false;
      if (isDemoBooking) {
        var digits = phone.replace(/\D/g, '');
        var whatsappPhone = digits.length === 10 ? '91' + digits : digits;
        var whatsappMessage = 'Hi, I want to book a free demo.';
        if (values.name) whatsappMessage += ' Name: ' + values.name + '.';
        if (values.course) whatsappMessage += ' Course: ' + values.course + '.';
        whatsappUrl = 'https://wa.me/' + whatsappPhone + '?text=' + encodeURIComponent(whatsappMessage);
        try {
          var whatsappWindow = window.open(whatsappUrl, '_blank');
          whatsappOpened = Boolean(whatsappWindow);
          if (whatsappWindow) whatsappWindow.opener = null;
        } catch (error) {
          whatsappOpened = false;
        }
      }

      var body = new URLSearchParams();
      Object.keys(values).forEach(function (key) {
        body.append(key, values[key]);
      });

      submitButton.disabled = true;
      submitButton.textContent = 'Sending...';
      status.textContent = '';
      status.className = 'da-common-lead-status';

      fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: body,
        keepalive: true
      }).then(function () {
        status.textContent = 'Thank you! Your enquiry has been sent. Our team will contact you shortly.';
        status.className = 'da-common-lead-status success';
        window.dispatchEvent(new CustomEvent('formSubmitted', { detail: values }));
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_submit_success',
          formName: activeFormName,
          page: window.location.href,
          course: values.course
        });
        form.reset();
        setCourseValue(form.elements.course, values.course, true);
        if (!whatsappOpened) appendWhatsAppLink(status, whatsappUrl);
      }).catch(function () {
        status.textContent = 'We could not send your enquiry. Please try again or contact us on WhatsApp.';
        status.className = 'da-common-lead-status error';
        if (!whatsappOpened) appendWhatsAppLink(status, whatsappUrl);
      }).then(function () {
        submitButton.disabled = false;
        submitButton.textContent = 'Send Enquiry';
      });
    });
  }

  if (document.readyState === 'loading' || document.readyState === 'interactive') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
