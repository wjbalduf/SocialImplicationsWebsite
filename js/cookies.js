// js/cookiePopup.js

const cookiePopup = document.getElementById('cookiePopup');
const denyBtn = document.getElementById('denyCookieBtn');

let clickCount = 0;

denyBtn.addEventListener('click', () => {
  clickCount++;

  switch(clickCount) {
    case 1: // move to bottom-left
      cookiePopup.style.right = 'auto';
      cookiePopup.style.left = '20px';
      cookiePopup.style.bottom = '20px';
      cookiePopup.style.top = 'auto';
      cookiePopup.querySelector('p').textContent = 'Deny the Cookies!';
      break;
    case 2: // move to top-left
      cookiePopup.style.right = 'auto';
      cookiePopup.style.left = '20px';
      cookiePopup.style.top = '20px';
      cookiePopup.style.bottom = 'auto';
      cookiePopup.querySelector('p').textContent = 'So close!';
      break;
    case 3: // move to top-right
      cookiePopup.style.right = '20px';
      cookiePopup.style.left = 'auto';
      cookiePopup.style.top = '20px';
      cookiePopup.style.bottom = 'auto';
      cookiePopup.querySelector('p').textContent = 'Or not!';
      break;
    default: // reset to bottom-right
      cookiePopup.style.right = '20px';
      cookiePopup.style.left = 'auto';
      cookiePopup.style.bottom = '20px';
      cookiePopup.style.top = 'auto';
      cookiePopup.querySelector('p').textContent = 'This site uses cookies. You can deny cookies if you want.';
      clickCount = 0; // restart cycle
      break;
  }
});