const NAMESPACE = "socialimplications"; // your public workspace
const KEY = "login_clicks";             // your counter name

// Load counter on page load
async function loadCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/get/${NAMESPACE}/${KEY}`);
    const data = await res.json();
    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
  } catch (err) {
    console.error("Failed to load counter:", err);
  }
}

// Increment counter when Continue clicked
async function incrementCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
    const data = await res.json();
    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
    console.log(`Continue button clicked ${data.value} times!`);
  } catch (err) {
    console.error("Failed to update counter:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCounter();

  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      await incrementCounter();
      window.location.href = "home.html";
    });
  }
});
