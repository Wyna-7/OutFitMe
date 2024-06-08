import { useEffect, useState } from 'react';
import { getRandomItem } from '../apiService';
import './outfitDisplay.css';

function OutfitDisplay(weatherData) {
  //state to set imgURL's in display
  const [outfit, setOutfit] = useState({
    top: '',
    bottom: '',
    shoe: '',
  });

  //state to gather and send current weather info as params in request URL
  const [weatherToday, setWeatherToday] = useState({
    tempToday: '',
    rainToday: '',
  });

  //onclick gather weather info to send via request
  const generateOutfit = async (event) => {
    gatherWeather();
  };

  //extract info from weatherdata and set it
  const gatherWeather = () => {
    const weatherDataTemp = weatherData.weatherData.temp;
    const weatherDataDescription = weatherData.weatherData.description;

    if (weatherDataTemp <= 10) {
      setWeatherToday((prevWeather) => ({ ...prevWeather, tempToday: 'cold' }));
    } else if (weatherDataTemp <= 18) {
      setWeatherToday((prevWeather) => ({ ...prevWeather, tempToday: 'cool' }));
    } else if (weatherDataTemp <= 25) {
      setWeatherToday((prevWeather) => ({ ...prevWeather, tempToday: 'warm' }));
    } else {
      setWeatherToday((prevWeather) => ({ ...prevWeather, tempToday: 'hot' }));
    }

    if (
      weatherDataDescription === 'Thunderstorm' ||
      weatherDataDescription === 'Drizzle' ||
      weatherDataDescription === 'Rain' ||
      weatherDataDescription === 'Snow'
    ) {
      setWeatherToday((prevWeather) => ({ ...prevWeather, rainToday: false }));
    } else {
      setWeatherToday((prevWeather) => ({ ...prevWeather, rainToday: true }));
    }
  };

  const asyncCallHelper = async (item, tempToday, rainToday) => {
    console.log('hi');
    return await getRandomItem(item, tempToday, rainToday);
  };
  //once weatherdata is correctly set, make requests and set outfit data
  useEffect(() => {
    if (weatherToday.tempToday === '' || weatherToday.rainToday === '') return;

    const { tempToday, rainToday } = weatherToday;

    console.log('----', tempToday, rainToday);

    asyncCallHelper('top', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, top: res }));
    });
    asyncCallHelper('bottom', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, bottom: res }));
    });
    asyncCallHelper('shoe', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, shoe: res }));
    });
  }, [weatherToday]);

  return (
    <>
      <div className="container">
        <div className="random-outfit">
          <img className="top clothing-item" src={outfit.top}></img>
          <img className="bottom clothing-item" src={outfit.bottom}></img>
          <img className="shoe clothing-item" src={outfit.shoe}></img>
        </div>
        <button onClick={generateOutfit}>Generate outfit!</button>
      </div>
    </>
  );
}

export default OutfitDisplay;
