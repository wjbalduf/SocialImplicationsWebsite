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

// === Handle form submit ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Save inputs to sessionStorage
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      sessionStorage.setItem("username", username);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("phone", phone);

      // Increment counter
      fetch("https://api.counterapi.dev/v1/socialimplications/login-clicks/up")
        .then(() => console.log("✅ Count incremented"))
        .catch(err => console.error("⚠️ Failed to increment count:", err))
        .finally(() => {
          // small delay to ensure the increment registers
          setTimeout(() => {
            form.submit(); // continue with the default submission (redirect)
          }, 200);
        });
    });
  }
});
