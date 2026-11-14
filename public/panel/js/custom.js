$(document).ready(function() {
  // executes when HTML-Document is loaded and DOM is ready
  // Most Popular Course Card Hover Effect
  $(".card").hover(
    function() {
      $(this)
        .addClass("shadow")
        .css("cursor", "pointer");
    },
    function() {
      $(this).removeClass("shadow");
    }
  );

  // Change Navbar Color on Scroll
  // $(window).scrollTop() returns the position of the top of the page
  $(window).scroll(function() {
    if ($(window).scrollTop() >= 600) {
      $(".navbar").css("background-color", "#225470");
    } else {
      $(".navbar").css("background-color", "transparent");
    }
  });

  $(function() {
    $("#playlist li").on("click", function() {
      $("#videoarea").attr({
        src: $(this).attr("movieurl")
      });
    });
    $("#videoarea").attr({
      src: $("#playlist li")
        .eq(0)
        .attr("movieurl")
    });
  });
});


// navbarscrollcolor

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  const heading = document.querySelector('.heading');
  
  // Get the position of the heading relative to the viewport
  const headingPosition = heading.getBoundingClientRect().top;
  
  // Check if the heading is at or above the navbar
  if (headingPosition <= navbar.offsetHeight) {
    navbar.classList.add('scrolled'); // Add the 'scrolled' class to change navbar color
  } else {
    navbar.classList.remove('scrolled'); // Remove the 'scrolled' class to revert navbar color
  }
});

