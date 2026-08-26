// Fade the sticky nav in once the hero section scrolls out of view.
var nav = document.getElementById('site-nav');
var hero = document.getElementById('top');

var navObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    var showNav = !entry.isIntersecting;
    nav.classList.toggle('opacity-0', !showNav);
    nav.classList.toggle('opacity-100', showNav);
    nav.classList.toggle('-translate-y-2', !showNav);
    nav.classList.toggle('translate-y-0', showNav);
    nav.classList.toggle('pointer-events-none', !showNav);
    nav.classList.toggle('pointer-events-auto', showNav);
  });
}, { threshold: 0.6 });
navObserver.observe(hero);

// Reveal .reveal elements with a scroll-in animation the first time they enter the viewport.
var revealEls = document.querySelectorAll('.reveal');
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(function (el) { revealObserver.observe(el); });
