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

// Display tracked page visits
const visitsDiv = document.createElement("div");
visitsDiv.id = "pageVisits";
visitsDiv.style.marginTop = "15px";
visitsDiv.style.fontSize = "12px";
visitsDiv.style.color = "#555";

const pageVisits = JSON.parse(sessionStorage.getItem("pageVisits") || "[]");

if (pageVisits.length > 0) {
  let html = "<strong>Pages Visited:</strong><ul>";
  pageVisits.forEach(visit => {
    html += `<li>${visit.page} at ${new Date(visit.time).toLocaleTimeString()}</li>`;
  });
  html += "</ul>";
  visitsDiv.innerHTML = html;
} else {
  visitsDiv.innerHTML = "<p>No pages visited yet.</p>";
}

if (userInfoDiv) {
  userInfoDiv.parentNode.appendChild(visitsDiv);
}
