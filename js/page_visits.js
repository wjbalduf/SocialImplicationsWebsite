// Get previous visits or initialize
const visits = JSON.parse(sessionStorage.getItem("pageVisits") || "[]");

// Add current page visit
visits.push({
  page: window.location.pathname.split('/').pop(),
  time: new Date().toLocaleTimeString()
});

// Save back to sessionStorage
sessionStorage.setItem("pageVisits", JSON.stringify(visits));

// Display visits
const visitsDiv = document.getElementById("visitedPages");
if (visitsDiv) {
  visitsDiv.innerHTML = visits.map(v => `${v.page} at ${v.time}`).join("<br>");
}
