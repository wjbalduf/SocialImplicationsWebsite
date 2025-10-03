const form = document.querySelector('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // prevent default navigation

  // Save inputs to sessionStorage
  sessionStorage.setItem('username', document.getElementById('username').value);
  sessionStorage.setItem('email', document.getElementById('email').value);
  sessionStorage.setItem('phone', document.getElementById('phone').value);

  // Navigate to home.html
  window.location.href = 'home.html';
});