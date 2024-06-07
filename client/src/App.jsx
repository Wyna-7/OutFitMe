import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './sidebar/sidebar';
import DisplayContainer from './displayContainer';
import { getWeatherData } from './apiService';

function App() {
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
    console.log('hi');
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log('coords', lat, lon);
        getWeather(lat, lon);
      });
    } else {
      alert('Please enable geolocation to use this app.'); //maybe try sweetalert2?  https://sweetalert2.github.io/
    }
  };

  const getWeather = (lat, lon) => {
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
  };

  return (
    <>
      <div className="app-container">
        {/*
        The app will have a static navbar on top with the app name.
        When clicking the app name, the side bar will open:
          - button to see all tops & delete pictures
          - button to see all bottoms & delete pictures
          - button to see all shoes & delete pictures
          - button to see all liked outfits
          !!MVP FEATURE button to add a new clothing item MVP FEATURE!!
            This button should open a modal/cloudinary widget to upload a new picture
            & select it's required metadata. Pic will go to cloudinary, and its returned URL
            and metadata will go to mongoDB:
              - type of clothing item (top, bottom, shoe)
              - temperature range (allow to select multiple):
                  - cold, less than 10ºC
                  - cool, 10ºC-18ºC
                  - warm, 18ºC-25ºC
                  - hot, more than 25ºC
              - apt for rain or not (true/false)
        */}
        <div className="sidebar">
          <Sidebar />
        </div>
        {/* 
        Should this be named Dashboard instead? IDK
        Main app container will have a static weather display, and
        a dynamic display for:
          !!MVP FEATURE randomized outfit MVP FEATURE!!
          - see tops gallery
          - see bottoms gallery
          - see shoes gallery
          - see liked outfits gallery
        */}
        <div className="display-container">
          <DisplayContainer
            getLocation={getLocation}
            weatherData={weatherData}
            emoji={emoji}
          />
        </div>
      </div>
    </>
  );
}

export default App;
