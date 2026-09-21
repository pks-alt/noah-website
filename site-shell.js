/* Shared navigation only. Page copy is static HTML, never overwritten by scripts. */
(() => {
  'use strict';
  const button = document.querySelector('.menu-button');
  const navigation = document.getElementById('mobile-nav');
  if (!button || !navigation) return;
  const breakpoint = 1100;
  const setOpen = (open, restoreFocus = false) => {
    document.body.classList.toggle('menu-open', open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    button.textContent = open ? 'Close' : 'Menu';
    navigation.hidden = !open;
    navigation.inert = !open;
    if (!open && restoreFocus) button.focus();
  };
  setOpen(false);
  button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  navigation.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.target.closest('.site-header') && button.getAttribute('aria-expanded') === 'true') setOpen(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > breakpoint) setOpen(false); });
})();
