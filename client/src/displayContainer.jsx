import OutfitDisplay from './outfitDisplay/outfitDisplay';
import WeatherDisplay from './weatherDisplay/weatherDisplay';
import './displayContainer.css';

function DisplayContainer({ weatherData, emoji, getLocation }) {
  return (
    <>
      <div className="display-container">
        <OutfitDisplay weatherData={weatherData} />
        <WeatherDisplay
          getLocation={getLocation}
          weatherData={weatherData}
          emoji={emoji}
        />
      </div>
    </>
  );
}

export default DisplayContainer;
