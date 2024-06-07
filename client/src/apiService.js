const baseURL = 'http://localhost:3000';
const weatherAPIkey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const addImage = async (formData) => {
  const { imgURL, item, tempRange, rain } = formData;
  console.log('did data get here?', imgURL, item, tempRange, rain); //data is ok
  const image = await fetch(`${baseURL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgURL, item, tempRange, rain }),
  }).then((res) => console.log('addImage res', res)); //500 here

  console.log('Image posted!', image);

  return image;
};

const getWeatherData = async (lat, lon) => {
  console.log('did data get here?', lat, lon); //TODO check if data gets here
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}`;

  const weatherData = await fetch(url)
    .then((data) => data.json())
    .then((data) => console.log(data));
};

export { addImage, getWeatherData };
