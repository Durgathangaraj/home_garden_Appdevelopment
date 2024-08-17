// src/components/CurrentLocation.js
import React, { useEffect, useState } from 'react';
import './CurrentLocation.css';

function CurrentLocation() {
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    updateDate();
    getLocation();
  }, []);

  const updateDate = () => {
    const date = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const day = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const dateString = `${date.getHours()}:${date.getMinutes()} - ${day}, ${date.getDate()} ${month} ${date.getFullYear()}`;

    setDate(dateString);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, () => {
        setError('Unable to retrieve location');
      });
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getName(latitude, longitude);
  };

  const getName = async (latitude, longitude) => {
 
    const res = await fetch(url);
    const data = await res.json();
    const locationName = data[0].name.split(' ')[0];
    fetchData(locationName);
  };

  const fetchData = async (locationName) => {
  
    const res = await fetch(url);
    const data = await res.json();
    if (res.status === 200) {
      setWeather(data);
      setLocation(locationName);
    } else {
      setError('Location not found');
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchData(searchTerm);
    }
  };

  const getWeatherColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
      case 'clear':
        return '#f7e7a9'; // Yellow for sunny/clear weather
      case 'cloudy':
      case 'partly cloudy':
        return '#b3c6cc'; // Light gray for cloudy weather
      case 'rain':
      case 'showers':
      case 'drizzle':
        return '#5cacee'; // Blue for rainy weather
      case 'thunderstorm':
        return '#3a4d69'; // Dark blue for thunderstorm
      case 'snow':
        return '#d6eaf8'; // Light blue for snow
      case 'fog':
      case 'mist':
        return '#e0e4cc'; // Beige for foggy weather
      default:
        return '#f2f2f2'; // Default light gray
    }
  };

  return (
    // <div
    //   className="current-location"
    //   style={{ backgroundColor: weather ? getWeatherColor(weather.current.condition.text) : '#f2f2f2'   }}
    // >
    
        <div
  className="current-location"
  style={{
    backgroundColor: weather ? getWeatherColor(weather.current.condition.text) : '#f2f2f2',
     backgroundImage: 'url(https://moellerip.com/wp-content/uploads/2021/07/bigstock-Development-Of-Seedling-Growth-274172959.jpg)',
    backgroundSize: 'cover',
    minHeight: '100vh',
     color: 'white',
  }}
>
         
      <div id="date">{date}</div>
      {error && <div className="error">{error}</div>}
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter location"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {weather && (
        <div className="weather-details">
          <h1 id="name">{weather.location.name}</h1>
          <p id="region">
            {weather.location.region}, {weather.location.country}
          </p>
          <div className="weather-icon">
            <img src={weather.current.condition.icon} alt={weather.current.condition.text} />
          </div>
          <p id="condition">{weather.current.condition.text}</p>
          <p id="temp_c">{weather.current.temp_c}&#176;C</p>
          <p id="feelslike_c">Feels like {weather.current.feelslike_c}&#176;C</p>
          <div className="additional-info">
            <p id="cloud">Cloud: {weather.current.cloud}%</p>
            <p id="humidity">Humidity: {weather.current.humidity}%</p>
            <p id="wind_kph">
              Wind: {weather.current.wind_kph} Km/h {weather.current.wind_dir}
            </p>
            <p id="gust_kph">Gust: {weather.current.gust_kph} Km/h</p>
            <p id="precip_mm">Precipitation: {weather.current.precip_mm} mm</p>
            <p id="pressure_mb">Pressure: {weather.current.pressure_mb} mb</p>
            <p id="vis_km">Visibility: {weather.current.vis_km} KM</p>
            <p id="uv">UV: {weather.current.uv}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CurrentLocation;
