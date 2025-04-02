import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import searchIcon from '../assets/search.png';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import drizzleIcon from '../assets/drizzle.png';
import humidityIcon from '../assets/humidity.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';

const WeatherSection = () => {
  const cityRef = useRef();
  const [weatherData, setWeatherData] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const allIcons = {
    "01d": clearIcon,
    "01n": clearIcon,
    "02d": cloudIcon,
    "02n": cloudIcon,
    "03d": cloudIcon,
    "03n": cloudIcon,
    "04d": drizzleIcon,
    "04n": drizzleIcon,
    "09d": rainIcon,
    "09n": rainIcon,
    "10d": rainIcon,
    "10n": rainIcon,
    "13d": snowIcon,
    "13n": snowIcon,
  };

  const search = async () => {
    const city = cityRef.current.value;

    if (city === "") {
      alert("Enter city name");
      return;
    }

    try {
      const response = await axios.get(`${apiUrl}?q=${city}&units=metric&appid=${apiKey}`);
      const data = response.data;

      const icon = allIcons[data.weather[0].icon] || clearIcon;

      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(null);
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    cityRef.current.value = "Lagos";
    search();
  }, []);

  return (
    <div className="weather bg-green-950 p-6 sm:p-8 md:p-10 rounded-lg flex flex-col items-center justify-center shadow-lg text-white">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center" id='forecast'>
        Weather Forecast
      </h1>
      <div className="search-bar flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 w-full">
        <input
          ref={cityRef}
          type="text"
          placeholder="City"
          className="h-12 w-full sm:w-auto rounded-full px-6 text-gray-700 bg-teal-100 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <img
          src={searchIcon}
          alt="search"
          className="w-12 p-3 rounded-full bg-teal-100 cursor-pointer hover:bg-teal-200"
          onClick={search}
        />
      </div>

      {weatherData ? (
        <>
          <img src={weatherData.icon} alt="weather icon" className="weather_icon w-24 sm:w-28 md:w-36 my-4 sm:my-6" />
          <p className="temperature text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">{weatherData.temperature}&deg;C</p>
          <p className="location text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">{weatherData.location}</p>

          <div className="weather-data w-full mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <div className="col flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
              <img src={humidityIcon} alt="humidity" className="w-6 mt-2" />
              <div>
                <p>{weatherData.humidity}%</p>
                <span className="text-xs sm:text-sm">Humidity</span>
              </div>
            </div>

            <div className="col flex items-start gap-2 sm:gap-3 text-base sm:text-lg md:text-xl">
              <img src={windIcon} alt="wind speed" className="w-6 mt-2" />
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span className="text-xs sm:text-sm">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-white text-center text-sm sm:text-base">No data available</p>
      )}
    </div>
  );
};

export default WeatherSection;