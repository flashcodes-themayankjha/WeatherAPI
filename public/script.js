document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('cityInput');
    const getWeatherBtn = document.getElementById('getWeatherBtn');
    const cityNameDisplay = document.getElementById('cityName');
    const temperatureDisplay = document.getElementById('temperature');
    const descriptionDisplay = document.getElementById('description');
    const weatherIcon = document.getElementById('weatherIcon');
    const errorMessageDisplay = document.getElementById('errorMessage');

    getWeatherBtn.addEventListener('click', fetchWeather);
    cityInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            fetchWeather();
        }
    });

    async function fetchWeather() {
        const city = cityInput.value.trim();
        if (!city) {
            displayError('Please enter a city name.');
            return;
        }

        clearWeatherDisplay();
        displayError(''); // Clear previous errors

        try {
            const response = await fetch(`/weather?city=${encodeURIComponent(city)}`);
            const data = await response.json();

            if (response.ok) {
                displayWeather(data);
            } else {
                displayError(data.message || 'Could not retrieve weather data.');
            }
        } catch (error) {
            console.error('Error fetching weather:', error);
            displayError('Failed to connect to the weather service.');
        }
    }

    function displayWeather(data) {
        cityNameDisplay.textContent = data.location.name;
        temperatureDisplay.textContent = `${Math.round(data.current.temp_c)}°C`;
        descriptionDisplay.textContent = data.current.condition.text;
        
        weatherIcon.src = data.current.condition.icon;
        weatherIcon.style.display = 'block';
    }

    function displayError(message) {
        errorMessageDisplay.textContent = message;
    }

    function clearWeatherDisplay() {
        cityNameDisplay.textContent = '';
        temperatureDisplay.textContent = '';
        descriptionDisplay.textContent = '';
        weatherIcon.src = '';
        weatherIcon.style.display = 'none';
    }
});
