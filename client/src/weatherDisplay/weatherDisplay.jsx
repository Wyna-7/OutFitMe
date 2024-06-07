import './weatherDisplay.css';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../apiService';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState({
    location: '',
    temp: '',
    temp_max: '',
    temp_min: '',
    humidity: '',
    feels_like: '',
    description: '',
  });

  const [emoji, setEmoji] = useState('');

  useEffect(() => {
    if (weatherData.description === '') return;

    //console.log('effect', weatherData.description);

    switch (
      weatherData.description //TODO Replace with not-so-ugly icons
    ) {
      case 'Thunderstorm':
        setEmoji('⛈');
      case 'Drizzle':
        setEmoji('🌧');
      case 'Rain':
        setEmoji('🌧');
      case 'Snow':
        setEmoji('🌨');
      case 'Clouds':
        setEmoji('⛅');
      case 'Clear':
        setEmoji('☀');
    }
  }, [weatherData.description]);

  const getLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        //apiService method for weather should send lat and lon as arguments to add to the url
        getWeatherData(lat, lon).then((weatherData) => {
          //console.log('------', weatherData); //is the data in the component?
          const {
            name: location,
            main: { temp, humidity, feels_like, temp_max, temp_min },
            weather: [{ main }],
          } = weatherData;
          setWeatherData({
            location: location,
            temp: temp,
            temp_max: temp_max,
            temp_min: temp_min,
            humidity: humidity,
            feels_like: feels_like,
            description: main,
          });
        });
      });
    } else {
      alert('Please enable geolocation to use this app.'); //maybe try sweetalert2?  https://sweetalert2.github.io/
    }
  };

  return (
    <>
      <div className="weather-container">
        <div className="top-data">
          <h1 className="location top-data apidata">{weatherData.location}</h1>
          <h1 className="temperature top-data apidata">
            {Math.round(Number(weatherData.temp))}ºC
          </h1>
          <p>
            {Math.round(Number(weatherData.temp_min))}º/
            {Math.round(Number(weatherData.temp_max))}º
          </p>
        </div>

        <div className="center-data">
          <h2 className="humidity center-data apidata">
            Humidity: {weatherData.humidity}%
          </h2>
          <h2 className="feels-like center-data apidata">
            Feels like: {Math.round(Number(weatherData.feels_like))}ºC
          </h2>
        </div>

        <div className="emoji-display">
          <p>{weatherData.description}</p>
          <div className="emoji apidata">{emoji}</div>
        </div>
        <button onClick={getLocation}>Get my weather!</button>
      </div>
    </>
  );
}

export default WeatherDisplay;
