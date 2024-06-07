import './weatherDisplay.css';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../apiService';

function WeatherDisplay() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  useEffect(() => {
    if (lat === '' || lon === '') {
      return;
    }
    //apiService method for weather should send lat and lon as arguments to add to the url

    console.log('---- in useEffect', lat, lon);
    getWeatherData(
      Number.parseFloat(lat).toFixed(2),
      Number.parseFloat(lon).toFixed(2)
    );
  });

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
        //this works, checked setStates w Vic's trick
      });
    } else {
      alert('Please enable geolocation to use this app.');
    }
  };

  return (
    <>
      <div className="weather-container">
        <div className="top-data">
          <h1 className="location top-data apidata">BARCELONA</h1>
          <h1 className="temperature top-data apidata">23ºC</h1>
        </div>

        <div className="center-data">
          <h2 className="humidity center-data apidata">Humidity: 60%</h2>
          <h2 className="feels-like center-data apidata">Feels like: 27ºC</h2>
        </div>

        <div className="emoji apidata">☀</div>
        <button onClick={getLocation}>Get my weather!</button>
      </div>
    </>
  );
}

export default WeatherDisplay;
