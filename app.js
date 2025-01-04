document.addEventListener('DOMContentLoaded', () => {
    const weatherDataDiv = document.getElementById('weather-data');
    const powerConsumptionDataDiv = document.getElementById('power-consumption-data');
    const hourlySolarDataDiv = document.getElementById('hourly-solar-data');

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

    fetch('https://api.example.com/weather')
        .then(response => response.json())
        .then(data => {
            weatherDataDiv.innerHTML = `
                <p>Temperature: ${data.temperature} °C</p>
                <p>Condition: ${data.condition}</p>
                <p>Humidity: ${data.humidity} %</p>
            `;
        })
        .catch(error => {
            weatherDataDiv.innerHTML = `<p>Error loading weather data</p>`;
            console.error('Error fetching weather data:', error);
        });

    const powerData = calculatePowerData();
    powerConsumptionDataDiv.innerHTML = `
        <p>Date Range: January 1, 2025 - January 4, 2025</p>
        <p>Total Power Consumption: ${powerData.totalPowerConsumption} kWh</p>
        <p>Actual Power from Solar: ${powerData.actualPowerFromSolar} kWh</p>
        <p>Power from Grid: ${powerData.powerFromGrid} kWh</p>
    `;

    hourlySolarDataDiv.innerHTML = `
        <h3>Hourly Solar Generation</h3>
        <ul>
            ${powerData.hourlySolarGeneration
                .map((generation, index) => `<li>Hour ${index}: ${generation} kWh</li>`)
                .join('')}
        </ul>
    `;

    const columns = document.querySelectorAll('.column');
    columns.forEach((column, index) => {
        setTimeout(() => {
            column.classList.add('loaded');
        }, index * 200);
    });
});
