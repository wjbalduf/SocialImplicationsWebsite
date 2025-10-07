// Display login info
const userInfoDiv = document.getElementById("userInfo");
const username = sessionStorage.getItem("username") || "";
const email = sessionStorage.getItem("email") || "";
const phone = sessionStorage.getItem("phone") || "";

if (userInfoDiv) {
  userInfoDiv.innerHTML = `
    <h3>Data Collected:</h3>
    <p><strong>Name:</strong> ${username}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
  `;
}

