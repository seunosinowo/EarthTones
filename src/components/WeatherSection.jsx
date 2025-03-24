import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherSection = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}', {
          params: {
            q: 'New York',
            appid: 'YOUR_API_KEY',
            units: 'metric'
          }
        });
        setWeather(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div className='text-white'>Loading...</div>;
  }

  if (error) {
    return <div className='text-red-500'>Error fetching weather data</div>;
  }

  return (
    <div className='bg-green-950 text-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-3xl font-bold mb-4'>Weather in {weather.name}</h2>
      <div className='flex items-center'>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
          className='w-20 h-20'
        />
        <div className='ml-4'>
          <p className='text-2xl'>{weather.main.temp}°C</p>
          <p className='text-lg'>{weather.weather[0].description}</p>
        </div>
      </div>
      <div className='mt-4'>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind Speed: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherSection;