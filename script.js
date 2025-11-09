function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    clockElement.textContent = now.toLocaleTimeString();
}

// Update the clock every second
setInterval(updateClock, 1000);

// Run it once on load
updateClock();