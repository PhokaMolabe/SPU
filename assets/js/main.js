/* Tab switching */
function showTab(id, el) {
  document.querySelectorAll('.faculty-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ftab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  el.classList.add('active');
}

/* Count-up animation on scroll */
const counters = document.querySelectorAll('.count-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const duration = 1400;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString();
        if (current >= target) clearInterval(timer);
      }, 16);
      observer.unobserve(el);
    }
  });
}, { threshold: 0.3 });
counters.forEach(c => observer.observe(c));

/* Sticky nav active section highlight */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + e.target.id ? 'var(--gold)' : '';
        a.style.borderBottomColor = a.getAttribute('href') === '#' + e.target.id ? 'var(--gold)' : 'transparent';
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => io.observe(s));
