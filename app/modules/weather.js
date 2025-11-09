export async function initWeather(config) {
    const weatherElement = document.getElementById('weather');

    if (!config || !config.apiKey || config.apiKey === 'your_real_api_key_goes_here') {
        weatherElement.innerHTML = '<h3>Weather</h3><p>Please set your API key in config.json</p>';
        return;
    }

    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${config.lat}&lon=${config.lon}&appid=${config.apiKey}&units=metric`;

    try {
        const response = await fetch(WEATHER_API_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Extract data
        const city = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;

        // Render HTML
        weatherElement.innerHTML = `
            <h3>Weather in ${city}</h3>
            <p style="font-size: 2rem; margin: 10px 0;">${temp.toFixed(1)}°C</p>
            <p>${description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather:", error);
        weatherElement.innerHTML = '<h3>Weather</h3><p>Could not load weather data.</p>';
    }
}