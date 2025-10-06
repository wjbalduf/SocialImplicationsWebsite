// === Fetch and display current counter ===
fetch("https://api.counterapi.dev/v1/socialimplications/login-clicks/")
  .then(response => response.json())
  .then(data => {
    const countElement = document.getElementById("loginCount");
    if (countElement) {
      countElement.innerText = data.count;
    }
  })
  .catch(err => console.error("⚠️ Failed to load counter:", err));

// === Increment counter when form is submitted ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // increment counter
      fetch("https://api.counterapi.dev/v1/socialimplications/login-clicks/up")
        .then(() => console.log("✅ Count incremented"))
        .catch(err => console.error("⚠️ Failed to increment count:", err))
        .finally(() => {
          // small delay to ensure the increment registers
          setTimeout(() => {
            form.submit();
          }, 200);
        });
    });
  }
});