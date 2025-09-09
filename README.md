# Weather App

A dynamic, minimalistic, and modern web application that displays weather information for a given city.

## Features

*   **Dynamic Weather Display:** Get current weather conditions for any city.
*   **Minimalistic UI:** Clean and modern user interface with a light theme and soft gradients.
*   **City Suggestions:** Input field with a datalist for common city suggestions.
*   **API Key Management:** Securely load API keys from a `.env` file.
*   **WeatherAPI.com Integration:** Uses the WeatherAPI.com for fetching weather data.

## Setup and Installation

Follow these steps to get the application running on your local machine.

### 1. Clone the Repository (if applicable)

If you haven't already, clone this repository to your local machine:

```bash
git clone <repository-url>
cd weather-app
```

### 2. Install Dependencies

Navigate to the project directory and install the required Node.js packages:

```bash
npm install
```

### 3. Get a WeatherAPI.com API Key

To fetch weather data, you'll need an API key from WeatherAPI.com:

1.  Go to [https://www.weatherapi.com/](https://www.weatherapi.com/) and sign up for a free account.
2.  Once logged in, you can find your API key on your dashboard.

### 4. Configure Environment Variables

Create a `.env` file in the root of your project directory (the same directory as `package.json` and `server.js`). Add the following line to it, replacing `YOUR_WEATHERAPI_KEY` with the actual API key you obtained from WeatherAPI.com:

```
WEATHERAPI_KEY=YOUR_WEATHERAPI_KEY
```

**Important:** Do not commit your `.env` file to version control. It's already included in the `.gitignore` file.

## Running the Application

After completing the setup, you can start the server:

```bash
node server.js
```

The server will typically run on `http://localhost:3000`. Open your web browser and navigate to this address to use the weather application.

## Technologies Used

*   **Node.js:** Backend server
*   **Express.js:** Web framework for Node.js
*   **Dotenv:** For loading environment variables
*   **Node-Fetch:** For making HTTP requests from the server
*   **HTML5:** Structure of the web page
*   **CSS3:** Styling and UI design
*   **JavaScript:** Frontend logic and dynamic updates
*   **WeatherAPI.com:** Weather data API
*   **Font Awesome:** Icons
