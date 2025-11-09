// Import the specific functions from our modules
import { initClock } from './modules/clock.js';
import { initGreeting } from './modules/greeting.js';
import { initWeather } from './modules/weather.js';

// --- Config Loader ---
async function getConfig() {
    try {
        const response = await fetch('/config.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching config:', error);
        return null;
    }
}

// --- Main Initialization Function ---
async function init() {
    // Initialize modules that don't need config
    initClock();
    initGreeting();

    // Load config and initialize modules that depend on it
    const config = await getConfig();
    if (config) {
        // Pass the weather-specific config to the weather module
        initWeather(config.weather);
        
        // In the future, you could add:
        // initSmartHome(config.smartHome);
    }
}

// Run the app
init();