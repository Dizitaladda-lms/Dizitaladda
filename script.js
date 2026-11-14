 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const percent = bar.getAttribute('data-percent');
        const fill = bar.querySelector('.fill');

        // Start loading bar
        fill.style.width = percent + '%';

        // Wait until bar is mostly filled, then fade in text
        setTimeout(() => {
          fill.classList.add('reveal');
        }, 800); // Adjust timing to match your bar animation

        observer.unobserve(bar); // Animate only once
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.bar').forEach(bar => {
    observer.observe(bar);
  });
 function setMode(button, mode) {
    const card = button.closest(".cards");

    // Update button active styles
    const buttons = card.querySelectorAll(".modeBtn");
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Fetch price container
    const pricing = card.querySelector(".pricing");
    const actualEl = pricing.querySelector(".actualPrice");
    const discountEl = pricing.querySelector(".discountedPrice");

    // Read prices from data attributes
    const actualPrice = pricing.dataset[`${mode}Actual`];
    const discountPrice = pricing.dataset[`${mode}Discount`];

    actualEl.textContent = `₹${Number(actualPrice).toLocaleString()}`;
    discountEl.textContent = `₹${Number(discountPrice).toLocaleString()}`;
  }
  
document.querySelectorAll('.formToggle').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const form = document.querySelector('.formContainer');
    form.style.display = 'flex';
  });
});
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwOdAHH3XiErN1UdBcnsB2f1jA0X49Gw-cDOhqD6jf2BAt7PJaKRGunb9BYGMZc9AGeew/exec';

  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function submitWithRetry(payload, maxAttempts = 3) {
    let attempts = 0;
    const body = JSON.stringify(payload);

    function run() {
      attempts += 1;
      return fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        keepalive: true,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body
      }).catch(err => {
        if (attempts >= maxAttempts) throw err;
        return wait(attempts * 1200).then(run);
      });
    }

    return run();
  }

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  var fd = new FormData(this);
  var payload = {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    name: fd.get('name') || '',
    phone: fd.get('phone') || '',
    email: fd.get('email') || '',
    course: fd.get('course') || '',
    mode: '',
    date: '',
    message: '',
    source: 'digital-marketing',
    sheet: 'Sheet1'
  };

  submitWithRetry(payload)
    .then(function() {
      alert("Form submitted successfully!");
      document.getElementById('contactForm').reset();
      document.querySelector('.formContainer').style.display = 'none';
    })
    .catch(function(error) {
      console.error("Submission failed:", error);
      alert("Error submitting form. Please try again.");
    });
});
document.getElementById('closeForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.formContainer').style.display = 'none';
});
  const testimonials = [
    {
      text: "I recently completed the digital marketing course at Dizitaladda and I am very impressed with the institute. The curriculum is impressive and up to date. Trainers are experienced and passionate about teaching.",
      image: "./divya.png",
      name: "Jyoti Sharma",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      text: "The hands-on approach and live project experience at Dizitaladda helped me land a great internship. Highly recommend this course!",
      image: "./rahul.webp",
      name: "Rahul Verma",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      text: "Dizitaladda's faculty are not only skilled but also supportive. I was able to learn SEO, PPC, and social media in a very structured way.",
      image: "./aarti.webp",
      name: "Aarti Singh",
      stars: "⭐⭐⭐⭐",
    },
  ];

  let index = 0;
  const box = document.querySelector(".testimonial-box");
  const text = document.querySelector(".testimonial-text");
  const img = document.querySelector(".testimonial-image");
  const name = document.querySelector(".testimonial-name");
  const stars = document.querySelector(".stars");

  function showNextTestimonial() {
    box.classList.add("fade-out");

    setTimeout(() => {
      index = (index + 1) % testimonials.length;
      text.textContent = testimonials[index].text;
      img.src = testimonials[index].image;
      img.alt = testimonials[index].name;
      name.innerHTML = `<strong>${testimonials[index].name}</strong>`;
      stars.textContent = testimonials[index].stars;

      box.classList.remove("fade-out");
    }, 1000); // match the CSS transition
  }

  setInterval(showNextTestimonial, 5000);
  
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


  document.addEventListener("DOMContentLoaded", () => {
  const tracks = document.querySelectorAll(".carousel-track");

  tracks.forEach(track => {
    const logos = Array.from(track.children);

    // Clone all logos to create infinite effect
    logos.forEach(logo => {
      const clone = logo.cloneNode(true);
      track.appendChild(clone);
    });

    let scrollAmount = 0;

    function animateScroll() {
      scrollAmount += 1; // Speed
      track.style.transform = `translateX(-${scrollAmount}px)`;

      // When half of the logos are scrolled, reset
      if (scrollAmount >= track.scrollWidth / 2) {
        scrollAmount = 0;
        track.style.transform = "translateX(0)";
      }

      requestAnimationFrame(animateScroll);
    }

    animateScroll();
  });
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
