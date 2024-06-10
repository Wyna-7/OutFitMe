import OutfitDisplay from '../outfitDisplay/outfitDisplay';
import WeatherDisplay from '../weatherDisplay/weatherDisplay';
import './displayContainer.css';

function DisplayContainer({ weatherData, emoji, name }) {
  return (
    <>
      <div className="main">
        <h1 className="welcome-message">
          Hello {name}! You can now generate an outfit for today:
        </h1>
        <div className="displays">
          <OutfitDisplay weatherData={weatherData} />
          <WeatherDisplay
            //getLocation={getLocation}
            weatherData={weatherData}
            emoji={emoji}
          />
        </div>
      </div>
    </>
  );
}

export default DisplayContainer;
