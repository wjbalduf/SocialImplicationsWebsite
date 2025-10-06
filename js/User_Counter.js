const NAMESPACE = "SocialImplications";
const KEY = "login_clicks";

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

  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();          // stop immediate redirect
      await incrementCounter();        // increment counter
      window.location.href = "home.html"; // redirect after update
    });
  } else {
    console.warn("Form not found.");
  }
});
