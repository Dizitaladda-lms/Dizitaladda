
    document.getElementById('formToggle').addEventListener('click', function(e) {
        e.preventDefault();
        const form = document.querySelector('.formContainer');
        form.style.display = 'flex';
    });
document.getElementById('closeForm').addEventListener('click', function(e) {
            e.preventDefault();
    document.querySelector('.formContainer').style.display = 'none';
});
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

  function wait(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  function submitWithRetry(formData, maxAttempts) {
    let attempts = 0;

    function run() {
      attempts += 1;
      return fetch(scriptURL, {
        method: 'POST',
        body: formData,
        keepalive: true
      }).catch(error => {
        if (attempts >= maxAttempts) throw error;
        return wait(attempts * 1200).then(run);
      });
    }

    return run();
  }

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = new FormData(this);

    submitWithRetry(form, 3)
      .then(response => response.text())
      .then(result => {
        alert("Success: " + result);
      })
      .catch(error => {
        console.error("Submission failed:", error);
        alert("Error submitting form");
      });
  });
  const scrollSection = document.getElementById('scrollSection');

  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;
  let scrollInterval = null;

  function startAutoScroll() {
    if (scrollInterval) return;
    scrollInterval = setInterval(() => {
      if (!isDragging) {
        if (scrollSection.scrollLeft + scrollSection.clientWidth >= scrollSection.scrollWidth) {
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

