// Navbar animation
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
  
    function trackScroll() {
      let scrolled = window.pageYOffset;
      const coords = document.documentElement.clientHeight;
  
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

    $(document).ready(function(){
      $('.count').countTo();
   });
   
  })();

  // Calculator
  function PLtime() {

    let kilometers = document.querySelector('#calc').value;
    console.log(kilometers);

    let PL = document.querySelector('#PL').onclick = `${Math.round(kilometers / 60)}h`;

    document.querySelector('#time').innerHTML = PL;
  }
    
  function EUtime() {

    let kilometers = document.querySelector('#calc').value;
    console.log(kilometers);

    let EU = document.querySelector('#EU').onclick = `${Math.round(kilometers / 70)}h`;

    document.querySelector('#time').innerHTML = EU;
  }
  
  
    

  