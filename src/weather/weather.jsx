import { useState } from 'react';
import axios from 'axios';

export const fetchWeatherData = async (name, apiKey) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
    );

    return response.data;
  } catch (error) {
    console.log('Error fetching weather data:', error);
    throw error;
  }
};

export const addComment = (description) => {
  switch (description) {
    case 'few clouds':
      return 'くもりです';
    case 'light rain':
      return '小雨です';
    case 'clear sky':
      return '晴れです';
    case 'scattered clouds':
      return '一部曇りです';
    case 'broken clouds':
      return '曇りです';
    case 'shower rain':
      return 'にわか雨です';
    case 'rain':
      return '雨です';
    default:
      return '';
  }
};

export const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState('');
  const apiKey = '3dea2a74059879b6eca84b7ecbcd9320';

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const initStates = () => {
    setWeatherData(null);
    setError(null);
    setLoading(true);
    setComment('');
  };

  const handleSearch = async () => {
    initStates();
    try {
      const data = await fetchWeatherData(city, apiKey);
      setWeatherData(data);

      if (data === null || data === undefined) {
        return;
      }

      const comment = addComment(data.weather[0].description);
      setComment(comment);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('Error fetching weather data. Please try again later.');
    }
    setLoading(false);
  };

  return (
    <div>
      <div>
        <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
        <button onClick={handleSearch}>Search</button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.weather[0].description}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
      {comment && <p>{comment}</p>}
    </div>
  );
};
