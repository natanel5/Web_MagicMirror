export function initClock() {
    // 1. Find BOTH new HTML elements
    const timeElement = document.getElementById('clock-time');
    const dateElement = document.getElementById('clock-date');
    
    // 2. Define formatting options for the time
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // This enforces 24-hour format
    };

    // 3. Define formatting options for the date
    const dateOptions = {
        weekday: 'long',    // e.g., "Sunday"
        year: 'numeric',
        month: 'long',      // e.g., "November"
        day: 'numeric'     // e.g., "9"
    };

    // 4. Create the update function
    function updateClock() {
        const now = new Date();

        // 'en-GB' (British English) is a good locale for 24h format
        // and a logical date order.
        timeElement.textContent = now.toLocaleTimeString('en-GB', timeOptions);
        dateElement.textContent = now.toLocaleDateString('en-GB', dateOptions);
    }

    // 5. Run the function
    updateClock(); // Run once immediately
    setInterval(updateClock, 1000); // Run every second
}