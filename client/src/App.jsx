import './App.css';
import { useState, useEffect } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import DisplayContainer from './Components/DisplayContainer/DisplayContainer';
import { getWeatherData } from './Services/apiService';
import LoginPage from './Components/LoginPage/LoginPage';
import Gallery from './Components/Gallery/Gallery';

function App() {
  //TODO: Style the page where user accepts to give their location first, have that accept button get weather and random outfit
  // to avoid having to click two buttons

  //GALLERIES

  const [itemType, setItemType] = useState('');
  const [gallery, setGallery] = useState('');

  //WEATHER
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
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (weatherData.description === '') return;

    const descriptionToday = weatherData.description;

    switch (descriptionToday) {
      case 'Thunderstorm':
        setEmoji('⛈');
        break;
      case 'Drizzle':
        setEmoji('🌧');
        break;
      case 'Rain':
        setEmoji('🌧');
        break;
      case 'Snow':
        setEmoji('🌨');
        break;
      case 'Clouds':
        setEmoji('⛅');
        break;
      default: //'Clear'
        setEmoji('☀');
    }
  }, [weatherData.description]);

  const getLocation = (event) => {
    event.preventDefault();

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeather(lat, lon);
        setClicked(true);
      });
    } else {
      alert('Please enable geolocation to use this app.'); //TODO: maybe try sweetalert2?  https://sweetalert2.github.io/
    }
  };

  const getWeather = (lat, lon) => {
    //apiService method for weather gets lat and lon as arguments to add to the url
    getWeatherData(lat, lon).then((weatherData) => {
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

  const onMenuClick = async (itemType) => {
    setItemType(itemType);
    setGallery(itemType);
  };

  return (
    <>
      {!clicked ? (
        <LoginPage getLocation={getLocation} />
      ) : (
        <div className="app-container">
          <div className="sidebar">
            <Sidebar onMenuClick={onMenuClick} />
          </div>

          <div className="display-container">
            {!gallery ? (
              <DisplayContainer
                weatherData={weatherData}
                emoji={emoji}
                name={name}
              />
            ) : (
              <Gallery itemType={itemType} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default App;
{
  /*
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
        */
}
{
  /* 
        Should this be named Dashboard instead? IDK
        Main app container will have a static weather display, and
        a dynamic display for:
          !!MVP FEATURE randomized outfit MVP FEATURE!!
          - see tops gallery
          - see bottoms gallery
          - see shoes gallery
          - see liked outfits gallery
        */
}
