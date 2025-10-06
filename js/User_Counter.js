// =======================
// User_Counter.js
// =======================

const NAMESPACE = "socialimplications"; // your workspace/namespace
const KEY = "login_clicks";             // your counter name
const TOKEN = "ut_Gw6DLG3jIo7FCO0bY1e26GUL3xR8BHqbD64CKTGl"; // your v2 token

// Load the current counter value on page load
async function loadCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/v2/${NAMESPACE}/${KEY}/get`, {
      headers: { 'Authorization': `Bearer ${TOKEN}` }
    });
    const data = await res.json();
    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
  } catch (err) {
    console.error("Failed to load counter:", err);
  }
}

// Increment counter when Continue is clicked
async function incrementCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/v2/${NAMESPACE}/${KEY}/hit`, {
      method: "POST",
      headers: { 'Authorization': `Bearer ${TOKEN}` }
    });
    const data = await res.json();
    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
    console.log(`Continue button clicked ${data.value} times!`);
  } catch (err) {
    console.error("Failed to update counter:", err);
  }
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Show initial counter
  loadCounter();

  // Attach to form submit
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();      // stop immediate redirect
      await incrementCounter();    // increment counter
      setTimeout(() => {           // slight delay so user sees number change
        window.location.href = "home.html";
      }, 250);
    });
  } else {
    console.warn("Login form not found!");
  }
});
