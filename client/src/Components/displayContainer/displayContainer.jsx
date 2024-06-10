import OutfitDisplay from '../outfitDisplay/outfitDisplay';
import WeatherDisplay from '../weatherDisplay/weatherDisplay';
import './displayContainer.css';

function DisplayContainer({ weatherData, emoji, name }) {
  return (
    <>
      <h1>Hello {name}! Here is your outfit for today:</h1>
      <div className="display-container">
        <OutfitDisplay weatherData={weatherData} />
        <WeatherDisplay
          //getLocation={getLocation}
          weatherData={weatherData}
          emoji={emoji}
        />
      </div>
    </>
  );
}

export default DisplayContainer;
