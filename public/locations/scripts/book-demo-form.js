/**
 * book-demo-form.js
 * Handles the "Book a Free Demo" section form (#bookDemoForm) on all location pages.
 * Submits data to Google Sheets via Google Apps Script (no-cors).
 *
 * Fields collected:
 *   name, phone, email, course, mode, date (selected via calendar), message
 *
 * Sheet target: "Locations Book Demo"
 *
 * NOTE: This file also manages the interactive calendar widget and replaces
 *       the inline <script> block that was previously embedded in the template.
 *       Include this file AFTER the book-demo HTML section in the page.
 */

(function () {
  'use strict';

  var SHEET_URL =
    'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

  /* ── Helpers ─────────────────────────────────────────────────────── */
  var MONTHS = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
  ];
  var DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

  function fmtDisplay(d) {
    return DAYS[d.getDay()] + ', ' + d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  }

  function fmtISO(d) {
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    return d.getFullYear() + '-' + mm + '-' + dd;
  }

  function getTimestamp() {
    return new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  }

  var CAL_ICON =
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"' +
    ' stroke-width="1.8" stroke="currentColor" style="width:16px;height:16px;flex-shrink:0">' +
    '<path stroke-linecap="round" stroke-linejoin="round"' +
    ' d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5' +
    'A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5' +
    'A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5' +
    'A2.25 2.25 0 0121 11.25v7.5"/></svg>';

  /* ── Main init ───────────────────────────────────────────────────── */
  function initBookDemoForm() {
    var form = document.getElementById('bookDemoForm');
    if (!form) return; /* section not present on this page */

    /* ---------- Calendar state ---------- */
    var todayRaw = new Date();
    todayRaw.setHours(0, 0, 0, 0);
    var viewYear     = todayRaw.getFullYear();
    var viewMonth    = todayRaw.getMonth();
    var selectedDate = null;

    /* ---------- Render calendar grid ---------- */
    function renderCalendar() {
      var grid  = document.getElementById('bdCalGrid');
      var label = document.getElementById('bdCalMonthLabel');
      if (!grid || !label) return;

      label.textContent = MONTHS[viewMonth] + ' ' + viewYear;
      grid.innerHTML    = '';

      var firstDay    = new Date(viewYear, viewMonth, 1).getDay();
      var daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

      /* Leading empty cells */
      for (var i = 0; i < firstDay; i++) {
        var empty = document.createElement('div');
        empty.className = 'bd-cal-day empty';
        grid.appendChild(empty);
      }

      /* Day cells */
      for (var d = 1; d <= daysInMonth; d++) {
        var cell     = document.createElement('button');
        cell.type    = 'button';
        cell.textContent = d;

        var cellDate = new Date(viewYear, viewMonth, d);
        cellDate.setHours(0, 0, 0, 0);

        var cls    = 'bd-cal-day';
        var isPast = cellDate.getTime() < todayRaw.getTime();
        if (isPast)                                                  cls += ' disabled';
        if (cellDate.getTime() === todayRaw.getTime())               cls += ' today';
        if (selectedDate && cellDate.getTime() === selectedDate.getTime()) cls += ' selected';
        cell.className = cls;

        if (!isPast) {
          (function (dt) {
            cell.addEventListener('click', function () { selectDate(dt); });
          })(cellDate);
        }

        grid.appendChild(cell);
      }
    }

    /* ---------- Select a date ---------- */
    function selectDate(dt) {
      selectedDate = dt;

      var bdDateInput = document.getElementById('bd_date');
      if (bdDateInput) bdDateInput.value = fmtISO(dt);

      renderCalendar();

      var selectedDisplay = document.getElementById('bdSelectedDisplay');
      if (selectedDisplay) {
        selectedDisplay.innerHTML =
          CAL_ICON + '<span>Selected: <span class="bd-sel-date">' + fmtDisplay(dt) + '</span></span>';
      }

      var echo     = document.getElementById('bdFormDateEcho');
      var dateText = document.getElementById('bdFormDateText');
      if (dateText) dateText.textContent = fmtDisplay(dt);
      if (echo)     echo.classList.add('filled');

      var status = document.getElementById('bdStatus');
      if (status) status.innerHTML = '';
    }

    /* ---------- Calendar navigation ---------- */
    var prevBtn = document.getElementById('bdCalPrev');
    var nextBtn = document.getElementById('bdCalNext');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        viewMonth--;
        if (viewMonth < 0) { viewMonth = 11; viewYear--; }
        renderCalendar();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        viewMonth++;
        if (viewMonth > 11) { viewMonth = 0; viewYear++; }
        renderCalendar();
      });
    }

    /* Initial render */
    renderCalendar();

    /* ---------- Form submission ---------- */
    var btnText   = document.getElementById('bdBtnText');
    var btnLoader = document.getElementById('bdBtnLoader');
    var status    = document.getElementById('bdStatus');
    var submitBtn = document.getElementById('bdSubmitBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Must have a date selected */
      if (!selectedDate) {
        if (status) {
          status.innerHTML =
            '<span class="bdf-error">Please select a preferred date from the calendar on the left.</span>';
        }
        var calPanel = document.querySelector('.bd-calendar-panel');
        if (calPanel) calPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }

      /* HTML5 validity */
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      /* Build payload — maps exactly to the Apps Script HEADERS array */
      var formData = new FormData(form);
      var payload  = {
        sheet:     'Locations Book Demo',             /* Sheet tab name in Google Sheets */
        timestamp: getTimestamp(),
        name:      (formData.get('name')    || '').trim(),
        phone:     (formData.get('phone')   || '').trim(),
        email:     (formData.get('email')   || '').trim(),
        course:    formData.get('course')   || '',
        mode:      formData.get('mode')     || '',
        date:      fmtISO(selectedDate),
        message:   (formData.get('message') || '').trim(),
        source:    window.location.href
      };

      /* Loading state */
      if (btnText)   btnText.style.display   = 'none';
      if (btnLoader) btnLoader.style.display = 'inline';
      if (submitBtn) submitBtn.disabled      = true;
      if (status)    status.innerHTML        = '';

      fetch(SHEET_URL, {
        method:  'POST',
        mode:    'no-cors',
        body:    JSON.stringify(payload),
        headers: { 'Content-Type': 'text/plain;charset=utf-8' }
      })
        .then(function () {
          if (status) {
            status.innerHTML =
              '<span class="bdf-success">&#10003; Demo booked for <strong>' +
              fmtDisplay(selectedDate) +
              '</strong>! We\'ll call you within 24 hours to confirm your slot.</span>';
          }

          /* Reset form */
          form.reset();
          selectedDate = null;

          var bdDateInput = document.getElementById('bd_date');
          if (bdDateInput) bdDateInput.value = '';

          var echo     = document.getElementById('bdFormDateEcho');
          var dateText = document.getElementById('bdFormDateText');
          if (dateText) dateText.textContent = '\u2190 Pick a date from the calendar';
          if (echo)     echo.classList.remove('filled');

          var selectedDisplay = document.getElementById('bdSelectedDisplay');
          if (selectedDisplay) {
            selectedDisplay.innerHTML = CAL_ICON + '<span>Select a date to book your demo</span>';
          }

          renderCalendar();
        })
        .catch(function () {
          if (status) {
            status.innerHTML =
              '<span class="bdf-error">Could not submit. Please WhatsApp us to book your demo.</span>';
          }
        })
        .finally(function () {
          if (btnText)   btnText.style.display   = 'inline';
          if (btnLoader) btnLoader.style.display = 'none';
          if (submitBtn) submitBtn.disabled      = false;
        });
    });
  }

  /* ── Boot ────────────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBookDemoForm);
  } else {
    initBookDemoForm();
  }
})();
