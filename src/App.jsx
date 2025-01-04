// src/App.js
import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [powerData, setPowerData] = useState(null);
    const [hourlySolarData, setHourlySolarData] = useState([]);

    useEffect(() => {
        fetch('https://api.example.com/weather')
            .then(response => response.json())
            .then(data => setWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));

        const simulatedPowerData = calculatePowerData();
        setPowerData(simulatedPowerData);
        setHourlySolarData(simulatedPowerData.hourlySolarGeneration);
    }, []);

    function calculatePowerData() {
        const totalPowerConsumption = 500; 
        const actualPowerFromSolar = 300; 
        const powerFromGrid = totalPowerConsumption - actualPowerFromSolar; 

        const hourlySolarGeneration = Array.from({ length: 24 }, (_, hour) => {
            return (actualPowerFromSolar / 24).toFixed(2); 
        });

        return {
            totalPowerConsumption,
            actualPowerFromSolar,
            powerFromGrid,
            hourlySolarGeneration
        };
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Solar Energy Monitoring System</h1>
            </header>
            <main className="App-main">
                <div className="column">
                    <h2>Weather Data</h2>
                    {weatherData ? (
                        <div>
                            <p>Temperature: {weatherData.temperature} °C</p>
                            <p>Condition: {weatherData.condition}</p>
                            <p>Humidity: {weatherData.humidity} %</p>
                        </div>
                    ) : (
                        <p>Loading weather data...</p>
                    )}
                </div>
                <div className="column">
                    <h2>Power Consumption Data</h2>
                    {powerData ? (
                        <div>
                            <p>Date Range: January 1, 2025 - January 4, 2025</p>
                            <p>Total Power Consumption: {powerData.totalPowerConsumption} kWh</p>
                            <p>Actual Power from Solar: {powerData.actualPowerFromSolar} kWh</p>
                            <p>Power from Grid: {powerData.powerFromGrid} kWh</p>
                        </div>
                    ) : (
                        <p>Loading power consumption data...</p>
                    )}
                </div>
                <div className="column">
                    <h2>Hourly Solar Generation</h2>
                    <ul>
                        {hourlySolarData.map((generation, index) => (
                            <li key={index}>Hour {index}: {generation} kWh</li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default App;