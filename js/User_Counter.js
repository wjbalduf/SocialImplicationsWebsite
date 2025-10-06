const NAMESPACE = "socialimplicationswebsite";
const KEY = "ut_Gw6DLG3jIo7FCO0bY1e26GUL3xR8BHqbD64CKTGl";

async function incrementCounter() {
  try {
    const res = await fetch(`https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`);
    const data = await res.json();
    console.log(`Continue button clicked ${data.value} times!`);

    const countDisplay = document.getElementById("countDisplay");
    if (countDisplay) countDisplay.textContent = data.value;
  } catch (err) {
    console.error("Failed to update counter:", err);
  }
}

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

document.addEventListener("DOMContentLoaded", () => {
  loadCounter();

  const form = document.querySelector("form");
  const button = document.querySelector(".enter-btn");

  if (form && button) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // stop immediate redirect
      await incrementCounter(); // wait for counter
      window.location.href = "home.html"; // then go
    });
  } else {
    console.warn("Form or continue button not found.");
  }
});
