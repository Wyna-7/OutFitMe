import { useEffect, useState } from 'react';
import { getRandomTop } from '../apiService';
import './outfitDisplay.css';

function OutfitDisplay(weatherData) {
  const [outfit, setOutfit] = useState({
    top: '',
    bottom: '',
    shoe: '',
  });

  const [weatherToday, setWeatherToday] = useState({
    tempToday: '',
    rainToday: false,
  });

  const gatherWeather = () => {
    console.log('......___', weatherData);
    // if (weatherData.temp <= 10) {
    //   setWeatherToday({ tempToday: 'cold' });
    // } else if (weatherData <= 18) {
    //   setWeatherToday({ tempToday: 'cool' });
    // } else if (weatherData <= 25) {
    //   setWeatherToday({ tempToday: 'warm' });
    // } else {
    setWeatherToday({ tempToday: 'hot', rain: false });
    // }

    // if (weatherData.rain === true) {
    //   setWeatherToday({ rain: true });
    // } else {
    //   setWeatherToday({ rain: false });
    // }
  };

  const asyncfetchtopcall = async (tempToday, rainToday) => {
    await getRandomTop(tempToday, rainToday);
  };

  useEffect(() => {
    if (!weatherToday) return;
    const { tempToday, rainToday } = weatherToday;
    console.log('weatherToday in effect', weatherToday);
    // get random imgURL from a clothing item that matches weather stats

    const randomTop = asyncfetchtopcall(tempToday, rainToday); //async  getRandomTop(tempToday, rainToday);

    console.log('randomTop in display', randomTop);
  }, [weatherToday]);

  const generateOutfit = async (event) => {
    gatherWeather();

    // set random imgURL as src for the corresponding image
    setOutfit({
      top: '', //'https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768634/outfitme/quh8ru1npxxqonxd00dd.png',
      bottom: '', //'https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768618/outfitme/ying1vo5thpccitaqqwg.png',   images render ok on page, may need to transform size when uploading to cloudinary
      shoe: '', //https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768651/outfitme/ducoo4588tycomxyaaaz.png',
    });
  };

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
