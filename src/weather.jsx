import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = import.meta.env.VITE_TOMORROW_API_KEY;
                const response = await axios.get(
                    `https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=${apiKey}`
                );
                setWeatherData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error fetching weather data</div>;

    return (
        <div>
            <h1>Weather Data</h1>
            <pre>{JSON.stringify(weatherData, null, 2)}</pre>
        </div>
    );
};

export default Weather;
