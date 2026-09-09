'use strict';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
if (menuButton && menu) {
  const closeMenu = () => { menu.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = 'Menú'; };
  menuButton.addEventListener('click', () => { const open = menu.classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.textContent = open ? 'Cerrar' : 'Menú'; });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}

document.querySelectorAll('.footer-brand img').forEach(img => {
  img.style.height = 'auto';
});

const form = document.querySelector('#project-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    document.querySelector('#form-message').textContent = 'Esta versión todavía no envía solicitudes. Puedes contactar en infopermatica@gmail.com.';
  });
}
