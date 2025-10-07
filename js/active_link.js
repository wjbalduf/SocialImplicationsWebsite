// js/nav-active.js
const links = document.querySelectorAll('.bottom-nav a');
const currentPage = window.location.pathname.split('/').pop();

links.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
