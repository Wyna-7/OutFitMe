import { useEffect, useState } from 'react';
import { getRandomItem } from '../apiService';
import './outfitDisplay.css';

function OutfitDisplay(weatherData) {
  const [outfit, setOutfit] = useState({
    top: '',
    bottom: '',
    shoe: '',
  });

  const [weatherToday, setWeatherToday] = useState({
    tempToday: '',
    rainToday: '',
  });

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
      setWeatherToday((prevWeather) => ({ ...prevWeather, rainToday: true }));
    } else {
      setWeatherToday((prevWeather) => ({ ...prevWeather, rainToday: false }));
    }
  };

  const asyncCallHelper = async (item, tempToday, rainToday) => {
    return await getRandomItem(item, tempToday, rainToday);
  };

  useEffect(() => {
    const { tempToday, rainToday } = weatherToday;
    console.log('weatherToday in effect', weatherToday);

    asyncCallHelper('top', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, top: res }));
    });
    asyncCallHelper('bottom', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, bottom: res }));
    });
    asyncCallHelper('shoe', tempToday, rainToday).then((res) => {
      setOutfit((prevOutfit) => ({ ...prevOutfit, shoe: res }));
    });

    // const randomBottom = asyncCallHelper('bottom', tempToday, rainToday);
    // const randomShoe = asyncCallHelper('shoe', tempToday, rainToday);

    // //Once it works, destructure to get imgURL from a clothing item that matches weather stats
    // console.log('randomTop in display', randomTop);
    // console.log('randomBottom in display', randomBottom);
    // console.log('randomShoe in display', randomShoe);
    // set random imgURL as src for the corresponding image
    // setOutfit({
    //   top: '', //'https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768634/outfitme/quh8ru1npxxqonxd00dd.png',
    //   bottom: '', //'https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768618/outfitme/ying1vo5thpccitaqqwg.png',   images render ok on page, may need to transform size when uploading to cloudinary
    //   shoe: '', //https://res.cloudinary.com/dmsktnqsm/image/upload/v1717768651/outfitme/ducoo4588tycomxyaaaz.png',
    // });
  }, [weatherToday]);

  const generateOutfit = async (event) => {
    gatherWeather();
    console.log('outfit', outfit);
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
