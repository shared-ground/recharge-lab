// Copyright year
const yr = document.getElementById('yr');
if (yr) yr.textContent = String(new Date().getFullYear());

// Scroll reveal
const io = new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll<HTMLElement>('.reveal').forEach(function (el, i) {
  el.style.transitionDelay = (Math.min(i, 6) * 70) + 'ms';
  io.observe(el);
});
