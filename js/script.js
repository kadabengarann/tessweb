/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;

const navbar = document.querySelector("nav");
const burger = document.querySelector('.burger');
const nav = document.querySelector('.mbl-nav');

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navbar.classList.add("scrolled");
        nav.classList.remove("mbl-scrolled");
        
    } else {
        navbar.classList.remove("scrolled");
        nav.classList.add("mbl-scrolled");
        
        
    }
        
    }
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.style.transform = "translateY(0%)";

  } else {
    navbar.style.transform = "translateY(-100%)";
  }
  prevScrollpos = currentScrollPos;
  nav.classList.remove("mbl-nav-geser");
  burger.classList.remove("toggle");
  scrollFunction()   
}
//-----Untuk mobile nav------
const mobileNav = () => {
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('mbl-nav-geser');
        burger.classList.toggle('toggle');
    });
}
mobileNav();
