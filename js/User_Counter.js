const NAMESPACE = "socialimplications";
const KEY = "login_clicks";
const TOKEN = "ut_Gw6DLG3jIo7FCO0bY1e26GUL3xR8BHqbD64CKTGl"; // your token

async function loadCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/v2/${NAMESPACE}/${KEY}/get`, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    const data = await res.json();
    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
  } catch (err) {
    console.error("Failed to load counter:", err);
  }
}

async function incrementCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/v2/${NAMESPACE}/${KEY}/hit`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
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
      event.preventDefault();
      await incrementCounter();
      window.location.href = "home.html";
    });
  } else {
    console.warn("Form not found.");
  }
});