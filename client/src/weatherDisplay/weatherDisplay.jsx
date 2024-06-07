import './weatherDisplay.css';
import { useEffect, useState } from 'react';
import { getWeatherData } from '../apiService';

function WeatherDisplay() {
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const [clicked, setClicked] = useState(false);

  const [weatherData, setWeatherData] = useState({
    location: '',
    temp: '',
    humidity: '',
    feels_like: '',
    main: '',
    icon: '',
  });

  useEffect(() => {
    console.log('in useEffect', lat, lon);
    if (lat === '' || lon === '') {
      return;
    }
    //apiService method for weather should send lat and lon as arguments to add to the url
    getWeatherData(lat, lon).then((weatherData) => {
      console.log('------', weatherData); //is the data in the component?
      const {
        name: location,
        main: { temp, humidity, feels_like },
        weather: [{ main, icon }],
      } = weatherData;
      setWeatherData({
        location: location,
        temp: temp,
        humidity: humidity,
        feels_like: feels_like,
        description: main,
        id: icon,
      });
    });

    console.log('did set in useEffect work?', weatherData); //this won't work, not fast enough
  }, [clicked]);

  const getLocation = () => {
    console.log('b', clicked);
    setClicked(true);
    console.log('a', clicked);
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setLat(lat);
        setLon(lon);
        console.log(lat, lon);
        //this works
      });
    } else {
      alert('Please enable geolocation to use this app.');
    }
  };

  return (
    <>
      {console.log('in return', weatherData)}
      <div className="weather-container">
        <div className="top-data">
          <h1 className="location top-data apidata">{weatherData.location}</h1>
          <h1 className="temperature top-data apidata">{weatherData.temp}ºC</h1>
        </div>

        <div className="center-data">
          <h2 className="humidity center-data apidata">
            Humidity: {weatherData.humidity}%
          </h2>
          <h2 className="feels-like center-data apidata">
            Feels like: {weatherData.feels_like}ºC
          </h2>
        </div>
        <div className="emoji-display">
          <p>{weatherData.main}</p>
          <div className="emoji apidata">{weatherData.icon}</div>
        </div>

        <button onClick={getLocation}>Get my weather!</button>
      </div>
    </>
  );
}

export default WeatherDisplay;
