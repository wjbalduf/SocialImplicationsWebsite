// js/user_info.js
document.addEventListener('DOMContentLoaded', () => {
    const userInfoDiv = document.getElementById('userInfo');

    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const phone = sessionStorage.getItem('phone');

    if (username || email || phone) {
      userInfoDiv.innerHTML = `
        <h3>Your Information:</h3>
        <p><strong>Name:</strong> ${username || 'N/A'}</p>
        <p><strong>Email:</strong> ${email || 'N/A'}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      `;
    }
});