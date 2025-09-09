require('dotenv').config();
const express = require('express');
const path = require('path');
const { default: fetch } = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const WEATHERAPI_KEY = process.env.WEATHERAPI_KEY;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get weather data
app.get('/weather', async (req, res) => {
    const city = req.query.city;
    if (!city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }

    if (!WEATHERAPI_KEY) {
        console.error('WEATHERAPI_KEY is not set in .env file');
        return res.status(500).json({ error: 'Server configuration error: API key missing' });
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${WEATHERAPI_KEY}&q=${city}&aqi=no`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (response.ok) {
            res.json(data);
        } else {
            // weatherapi.com returns error messages in a different structure
            res.status(response.status).json({ message: data.error ? data.error.message : 'Unknown error' });
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Failed to fetch weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
