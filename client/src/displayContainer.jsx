import OutfitDisplay from './outfitDisplay/outfitDisplay';
import WeatherDisplay from './weatherDisplay/weatherDisplay';
import './displayContainer.css';

function DisplayContainer() {
  return (
    <>
      <div className="display-container">
        <OutfitDisplay />
        <WeatherDisplay />
      </div>
    </>
  );
}

export default DisplayContainer;
