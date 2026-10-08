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
  var lightboxClose = lightbox.querySelector('[data-lightbox-close]');
  var lightboxPrev = lightbox.querySelector('[data-lightbox-prev]');
  var lightboxNext = lightbox.querySelector('[data-lightbox-next]');
  var currentIndex = -1;
  var lastFocused = null;

  function showPhoto(index) {
    currentIndex = (index + galleryThumbs.length) % galleryThumbs.length;
    var thumb = galleryThumbs[currentIndex];
    lightboxImage.src = thumb.dataset.full;
    lightboxImage.alt = thumb.dataset.caption || '';
  }

  function openLightbox(index) {
    lastFocused = document.activeElement;
    showPhoto(index);
    lightbox.hidden = false;
    requestAnimationFrame(function () { lightbox.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (lastFocused) { lastFocused.focus(); }
  }

  galleryThumbs.forEach(function (thumb, index) {
    thumb.addEventListener('click', function () { openLightbox(index); });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', function () { showPhoto(currentIndex - 1); });
  lightboxNext.addEventListener('click', function () { showPhoto(currentIndex + 1); });

  lightbox.addEventListener('click', function (event) {
    if (event.target === lightbox) { closeLightbox(); }
  });

  document.addEventListener('keydown', function (event) {
    if (lightbox.hidden) { return; }
    if (event.key === 'Escape') { closeLightbox(); }
    if (event.key === 'ArrowLeft') { showPhoto(currentIndex - 1); }
    if (event.key === 'ArrowRight') { showPhoto(currentIndex + 1); }
  });
}
