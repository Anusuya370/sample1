import React, { useState } from 'react';
import axios from 'axios';


const Weatherproject = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = "af2c74695543e9bb1adcbae20d7752f9"; // Replace with your OpenWeatherMap API key
  
  const getWeather = async () => {
    if (!city) return;  

    try {
      const response = await axios.get(
        
       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  return (
    <div className="weather-container"style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 >Weather App</h1>
      <input className='weather-container'
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button className='weather-container' onClick={getWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}> {error}  </p>}

      {weather && (
        <div style={{ marginTop: '20px' }}>
          <h2 className='weather-info'>{weather.name}</h2>
          <p className='weather-info'>Temperature: {weather.main.temp} °C</p>
          <p className='weather-info'>Weather: {weather.weather[0].description}</p>
        </div>
      )}
      
    </div>
  );
};

export default Weatherproject;