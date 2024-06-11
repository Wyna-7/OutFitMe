import './WeatherDisplay.css';

function WeatherDisplay({ weatherData, emoji }) {
  return (
    <div className="weather-container">
      <div className="top-data">
        <h1 className="location apidata">{weatherData.location}</h1>
        <h1 className="temperature apidata">
          {Math.round(Number(weatherData.temp))}ºC
        </h1>
        <p className="apidata">
          {Math.round(Number(weatherData.temp_min))}º/
          {Math.round(Number(weatherData.temp_max))}º
        </p>
      </div>

      <div className="center-data">
        <h2 className="humidity center-data apidata">
          Humidity: {weatherData.humidity}%
        </h2>
        <h2 className="feels-like center-data apidata">
          Feels like: {Math.round(Number(weatherData.feels_like))}ºC
        </h2>
      </div>

      <div className="emoji-display">
        <p className="apidata">{weatherData.description}</p>
        <div className="emoji apidata">{emoji}</div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
