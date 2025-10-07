// js/user_info.js
document.addEventListener('DOMContentLoaded', () => {
  const userInfoDiv = document.getElementById('userInfo');

  const name = localStorage.getItem('username');
  const email = localStorage.getItem('email');
  const phone = localStorage.getItem('phone');

  if (name || email || phone) {
    userInfoDiv.innerHTML = `
      <h3>Your Information:</h3>
      <p><strong>Name:</strong> ${name || 'N/A'}</p>
      <p><strong>Email:</strong> ${email || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    `;
  }
});
