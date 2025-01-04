import React from 'react';
import './App.css';
import Weather from './weather.jsx';
import GeminiChat from './geminichat.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header fade-in">
        <h1>Power Consumption Dashboard</h1>
      </header>
      <main className="App-main">
        <Weather />
        <GeminiChat />
      </main>
    </div>
  );
}

export default App;
