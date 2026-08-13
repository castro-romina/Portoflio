// Toggle del menú de navegación en mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.contains('flex');

  if (isOpen) {
    mobileMenu.classList.remove('flex');
    mobileMenu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  } else {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    menuToggle.setAttribute('aria-expanded', 'true');
  }
});

// Cierra el menú mobile al hacer click en un link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('flex');
    mobileMenu.classList.add('hidden');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});