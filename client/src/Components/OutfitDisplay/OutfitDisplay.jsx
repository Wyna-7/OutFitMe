import {
  temperatureToWeather,
  rainToWeather,
  asyncCallHelper,
} from '../../Utils/helperFunctions';
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import './OutfitDisplay.css';

function OutfitDisplay(weatherData) {
  //state to set imgURL's in display
  const [outfit, setOutfit] = useState({
    top: 'https://www.creativefabrica.com/wp-content/uploads/2020/04/21/Tshirt-icon-black-thin-stripe-2-Graphics-3920769-1-1-580x386.jpg',
    bottom:
      'https://static.vecteezy.com/system/resources/previews/010/347/283/non_2x/pants-boy-garment-line-icon-illustration-vector.jpg',
    shoe: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Running_shoe_icon.png/640px-Running_shoe_icon.png',
  });

  //state to gather and send current weather info as params in request URLs
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
    setWeatherToday({
      rainToday: rainToWeather(weatherDataDescription),
      tempToday: temperatureToWeather(weatherDataTemp),
    });
  };

  //once weatherdata is correctly set, make requests and set outfit data
  useEffect(() => {
    if (weatherToday.tempToday === '' || weatherToday.rainToday === '') return;

    const { tempToday, rainToday } = weatherToday;

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
          <img className="tops clothing-item" src={outfit.top}></img>
          <img className="bottoms clothing-item" src={outfit.bottom}></img>
          <img className="shoes clothing-item" src={outfit.shoe}></img>
        </div>
        <div className="buttons">
          <Button text="Get outfit" onClick={generateOutfit} />
        </div>
      </div>
    </>
  );
}

export default OutfitDisplay;
