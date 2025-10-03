// tracker.js

// Array to store movement events
const movementLog = [];

// Track mouse movement
document.addEventListener("mousemove", e => {
  movementLog.push({
    type: "mouse",
    x: e.clientX,
    y: e.clientY,
    time: Date.now()
  });
});

// Track scrolling inside the feed
const feed = document.querySelector(".feed");
if (feed) {
  feed.addEventListener("scroll", e => {
    movementLog.push({
      type: "scroll",
      scrollTop: e.target.scrollTop,
      time: Date.now()
    });
  });
}

// Function to send batched events to a server (replace URL if needed)
async function flushEvents() {
  if (movementLog.length === 0) return;

  const payload = movementLog.splice(0, movementLog.length); // remove events from array
  console.log("Movement batch:", payload);

  // Example: send to server endpoint
  // fetch('/track', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload)
  // });
}

// Flush events every 5 seconds
setInterval(flushEvents, 5000);