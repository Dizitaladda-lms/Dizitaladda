const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll(".glitch-link").forEach(link => {
  link.addEventListener("mouseenter", event => {
    let iterations = 0;
    const target = event.target;
    const original = target.dataset.value;

    const interval = setInterval(() => {
      target.innerText = original
        .split("")
        .map((letter, index) => {
          if (index < iterations) return original[index];
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iterations >= original.length) clearInterval(interval);
      iterations += 1 / 2; // Faster to reduce overall CPU load
    }, 40); // Slightly increased interval
  });
});

// Initialize Swiper instances for course sections
document.addEventListener('DOMContentLoaded', function() {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centerInsufficientSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    // Enable smooth slide animation
    effect: 'slide',
    speed: 800,
    // Improved handling for responsive scenarios
    observer: true,
    observeParents: true,
    resizeObserver: true
  };

  // Initialize swipers for each course category
  const digitalMarketingSwiper = new Swiper('.digital-marketing-swiper', Object.assign({}, swiperOptions, {
    navigation: {
      nextEl: '.digital-marketing-swiper .swiper-button-next',
      prevEl: '.digital-marketing-swiper .swiper-button-prev'
    }
  }));
  
  const aiDataScienceSwiper = new Swiper('.ai-data-science-swiper', Object.assign({}, swiperOptions, {
    navigation: {
      nextEl: '.ai-data-science-swiper .swiper-button-next',
      prevEl: '.ai-data-science-swiper .swiper-button-prev'
    }
  }));
  
  const cyberSecuritySwiper = new Swiper('.cyber-security-swiper', Object.assign({}, swiperOptions, {
    navigation: {
      nextEl: '.cyber-security-swiper .swiper-button-next',
      prevEl: '.cyber-security-swiper .swiper-button-prev'
    }
  }));

  // Initialize swipers with navigation only
  [digitalMarketingSwiper, aiDataScienceSwiper, cyberSecuritySwiper].forEach(swiper => {
    // Remove pagination elements if they exist
    const paginationEl = swiper.el.querySelector('.swiper-pagination');
    if (paginationEl) {
      paginationEl.remove();
    }
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3 // 30% of the section must be visible
  });

  document.querySelectorAll('.slide-up-section').forEach(section => {
    observer.observe(section);
  });
 document.querySelectorAll('.youtube-placeholder').forEach(el => {
  el.addEventListener('click', () => {
    const videoId = el.dataset.id;
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.className = 'youtube-iframe';

    // Clear the placeholder and insert the iframe inside it
    el.innerHTML = '';  // Clear background thumbnail
    el.appendChild(iframe);
    el.style.backgroundImage = 'none'; // Clear background
    el.style.cursor = 'default'; // Optional: disable pointer
  });
});
document.querySelectorAll('.formToggle').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const form = document.querySelector('.formContainer');
    if (form) {
      form.style.display = 'flex';
    }
  });
});
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

function wait(ms) {
  return new Promise(function (resolve) { setTimeout(resolve, ms); });
}

function submitWithRetry(payload, maxAttempts) {
  var attempts = 0;
  var body = JSON.stringify(payload);

  function run() {
    attempts += 1;
    return fetch(scriptURL, {
      method: 'POST',
      mode: 'no-cors',
      keepalive: true,
      body: body,
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    }).catch(function (err) {
      if (attempts >= maxAttempts) throw err;
      return wait(attempts * 1200).then(run);
    });
  }

  return run();
}

const contactForm = document.getElementById('contactForm');
const inlineFormContainer = document.querySelector('.formContainer');
const closeInlineFormButton = document.getElementById('closeForm');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    var fd = new FormData(this);
    var payload = {
      name:      fd.get('Name')   || fd.get('name')   || '',
      phone:     fd.get('Number') || fd.get('phone')  || '',
      email:     fd.get('Email')  || fd.get('email')  || '',
      course:    fd.get('Course') || fd.get('course') || '',
      timestamp: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      source:    window.location.href,
      sheet:     'Sheet_2'  
    };

    submitWithRetry(payload, 3)
      .then(function() {
        alert("Form submitted successfully!");
        contactForm.reset();
        if (inlineFormContainer) {
          inlineFormContainer.style.display = 'none';
        }
      })
      .catch(function(error) {
        console.error("Submission failed:", error);
        alert("Error submitting form");
      });
  });
}

if (closeInlineFormButton) {
  closeInlineFormButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (inlineFormContainer) {
      inlineFormContainer.style.display = 'none';
    }
  });
}

// Select all course cards
document.querySelectorAll(".courseCard").forEach(card => {
  card.addEventListener("click", (event) => {
    if (event.target.closest('a, button, input, select, textarea, form, .buttonEnquiry')) {
      return;
    }

    // Get the URL from a data attribute or link inside the card
    const courseUrl = card.getAttribute("data-url"); 

    if (courseUrl) {
      window.location.href = courseUrl;
    }
  });
});});
