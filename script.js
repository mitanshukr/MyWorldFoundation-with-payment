$(document).ready(function () {
  $.scrollify({
    section: "section",
  });

  var app = document.getElementById("app");
  const about = document.getElementById('about');
  const work = document.getElementById('work');
  const donate = document.getElementById('donate');
  const testimonials = document.getElementById('testimonial');
  const contact = document.getElementById('contact');
  // const footerSection = document.getElementById('footerSection');

  var typewriter = new Typewriter(typingText, {
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
    if (window.pageYOffset < about.offsetTop) {
      //top section
      $("ul a").removeClass("active");
    } else if (winPos >= about.offsetTop && winPos < work.offsetTop) {
      //about section
      $("ul a").removeClass("active");
      $('a[href="#about"]').addClass("active");
    } else if (winPos >= work.offsetTop && winPos < donate.offsetTop) {
      //work section
      $("ul a").removeClass("active");
      $('a[href="#work"]').addClass("active");
    } else if (winPos >= donate.offsetTop && winPos < testimonials.offsetTop) {
      //donate section
      $("ul a").removeClass("active");
      $('a[href="#donate"]').addClass("active");
    } else if (winPos >= testimonials.offsetTop && winPos < contact.offsetTop) {
      //testimonials section
      $("ul a").removeClass("active");
      $('a[href="#testimonial"]').addClass("active");
    } else if (winPos >= contact.offsetTop) {
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
