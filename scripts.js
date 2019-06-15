// Nav animation
const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
    } else {
    document.body.classList.remove('fixed-nav');
    document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

// To-top button
(function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('to-top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('to-top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.to-top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();