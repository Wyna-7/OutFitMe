import './weatherDisplay.css';

function WeatherDisplay() {
  return (
    <>
      <div className="weather-container">
        <div className="top-data">
          <h1 className="location top-data apidata">BARCELONA</h1>
          <h1 className="temperature top-data apidata">23ºC</h1>
        </div>

        <div className="center-data">
          <h2 className="humidity center-data apidata">Humidity: 60%</h2>
          <h2 className="feels-like center-data apidata">Feels like: 27ºC</h2>
        </div>

        <div className="emoji apidata">☀</div>
      </div>
    </>
  );
}

export default WeatherDisplay;
