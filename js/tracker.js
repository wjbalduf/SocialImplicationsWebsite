// Array to store page visits
const pageVisits = JSON.parse(sessionStorage.getItem("pageVisits") || "[]");

// Track current page
const currentPage = window.location.pathname.split('/').pop();
pageVisits.push({
  page: currentPage,
  time: Date.now()
});

// Save back to sessionStorage
sessionStorage.setItem("pageVisits", JSON.stringify(pageVisits));
