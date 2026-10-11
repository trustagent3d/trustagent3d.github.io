'use strict';
const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.menu-toggle');
const links = document.getElementById('nav-links');
const topButton = document.getElementById('goToTopBtn');
const mobile = window.matchMedia('(max-width: 720px)');
function closeMenu() {
  if (!toggle || !links) return;
  toggle.setAttribute('aria-expanded', 'false');
  links.classList.remove('is-open');
}
if (nav && toggle && links) {
  nav.classList.add('enhanced');
  const updateMenu = () => { toggle.hidden = !mobile.matches; closeMenu(); };
  updateMenu();
  mobile.addEventListener('change', updateMenu);
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    links.classList.toggle('is-open', open);
  });
  links.addEventListener('click', event => {
    if (event.target.closest('a')) closeMenu();
  });
  nav.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      closeMenu(); toggle.focus();
    }
  });
  const markCurrent = () => {
    for (const link of links.querySelectorAll('a')) {
      const target = new URL(link.href);
      const currentPath = location.pathname.replace(/\/$/, '/index.html');
      const current = target.pathname === currentPath && (target.hash ? target.hash === location.hash : !location.hash);
      if (current) link.setAttribute('aria-current', target.hash ? 'location' : 'page');
      else link.removeAttribute('aria-current');
    }
  };
  markCurrent(); window.addEventListener('hashchange', markCurrent);
}
if (topButton) {
  const showTop = () => { topButton.hidden = window.scrollY < 500; };
  window.addEventListener('scroll', showTop, { passive: true }); showTop();
  topButton.addEventListener('click', () => {
    document.querySelector('.brand').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });
}
