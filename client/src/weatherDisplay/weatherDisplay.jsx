import './weatherDisplay.css';
//function WeatherDisplay(props) {
function WeatherDisplay({ weatherData, emoji, getLocation }) {
  return (
    <div className="weather-container">
      {weatherData ? (
        <>
          <div className="top-data">
            <h1 className="location top-data apidata">
              {weatherData.location}
            </h1>
            <h1 className="temperature top-data apidata">
              {Math.round(Number(weatherData.temp))}ºC
            </h1>
            <p>
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
            <p>{weatherData.description}</p>
            <div className="emoji apidata">{emoji}</div>
          </div>
        </>
      ) : (
        <div>Loading weather data</div>
      )}
      <button onClick={getLocation}>Get my weather!</button>
    </div>
  );
}

export default WeatherDisplay;
