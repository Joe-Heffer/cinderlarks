// Remove time-limited content (e.g. the hero's next-gig line) once its data-expires moment has passed.
document.querySelectorAll('[data-expires]').forEach(function (el) {
  if (Date.now() > Date.parse(el.dataset.expires)) { el.remove(); }
});

// Reveal fallback content (hidden in the markup) once its data-show-after moment has passed, e.g. "No dates announced yet" after the last gig.
document.querySelectorAll('[data-show-after]').forEach(function (el) {
  if (Date.now() > Date.parse(el.dataset.showAfter)) { el.hidden = false; }
});

// Expose the sticky nav's height (it wraps to two rows on phones) as --nav-h, for scroll offsets and hero sizing.
var nav = document.getElementById('site-nav');
new ResizeObserver(function () {
  document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
}).observe(nav);

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

// Keep the footer copyright year current.
document.getElementById('copyright-year').textContent = new Date().getFullYear();

// Gallery lightbox: click a thumbnail to view it large, with prev/next and keyboard support.
var galleryThumbs = Array.prototype.slice.call(document.querySelectorAll('.gallery-thumb'));
var lightbox = document.getElementById('lightbox');

if (galleryThumbs.length && lightbox) {
  var lightboxImage = lightbox.querySelector('.lightbox-image');
  var lightboxCaption = lightbox.querySelector('.lightbox-caption');
  var lightboxClose = lightbox.querySelector('[data-lightbox-close]');
  var lightboxPrev = lightbox.querySelector('[data-lightbox-prev]');
  var lightboxNext = lightbox.querySelector('[data-lightbox-next]');
  var currentIndex = -1;

  function showPhoto(index) {
    currentIndex = (index + galleryThumbs.length) % galleryThumbs.length;
    var thumb = galleryThumbs[currentIndex];
    lightboxImage.src = thumb.dataset.full;
    lightboxImage.alt = thumb.dataset.caption || '';
    lightboxCaption.textContent = thumb.dataset.caption || '';
  }

  // A native modal <dialog> handles focus containment, Esc, inerting the page and returning focus to the thumbnail.
  galleryThumbs.forEach(function (thumb, index) {
    thumb.addEventListener('click', function () {
      showPhoto(index);
      lightbox.showModal();
    });
  });

  lightboxClose.addEventListener('click', function () { lightbox.close(); });
  lightboxPrev.addEventListener('click', function () { showPhoto(currentIndex - 1); });
  lightboxNext.addEventListener('click', function () { showPhoto(currentIndex + 1); });

  // The dialog fills the viewport, so a click on its dark surround (not the photo or buttons) targets the dialog itself.
  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) { lightbox.close(); }
  });

  lightbox.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') { showPhoto(currentIndex - 1); }
    if (event.key === 'ArrowRight') { showPhoto(currentIndex + 1); }
  });
}
