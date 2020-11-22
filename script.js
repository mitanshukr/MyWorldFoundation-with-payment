$(document).ready(function () {
  $.scrollify({
    section: "section",
  });

  var app = document.getElementById("app");

  var typewriter = new Typewriter(app, {
    loop: true,
  });

  typewriter
    .typeString("Happy Life")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Healthy Food")
    .pauseFor(2000)
    .deleteAll()
    // .deleteChars(7)
    .typeString("Good Sleep")
    .pauseFor(2000)
    .deleteAll()
    .typeString("Sweet Home")
    .pauseFor(2000)
    .start();

  window.addEventListener("scroll", function () {
    let winPos = window.pageYOffset;
    //    console.log(window.pageYOffset + 'px');
    if (window.pageYOffset < 610) {
      //top section
      $("ul a").removeClass("active");
    } else if (winPos >= 610 && winPos < 1220) {
      //about section
      $("ul a").removeClass("active");
      $('a[href="#about"]').addClass("active");
    } else if (winPos >= 1220 && winPos < 1830) {
      //work section
      $("ul a").removeClass("active");
      $('a[href="#work"]').addClass("active");
    } else if (winPos >= 1830 && winPos < 2440) {
      //donate section
      $("ul a").removeClass("active");
      $('a[href="#donate"]').addClass("active");
    } else if (winPos >= 2440 && winPos < 3050) {
      //testimonials section
      $("ul a").removeClass("active");
      $('a[href="#testimonial"]').addClass("active");
    } else if (winPos >= 3049) {
      //contact section
      $("ul a").removeClass("active");
      $('a[href="#contact"]').addClass("active");
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 2,
        nav: false,
        loop: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });

  //Smooth scroll for anchor tags.
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // });
});
