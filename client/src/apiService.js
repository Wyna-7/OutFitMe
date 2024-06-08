const baseURL = 'http://localhost:3000';
const weatherAPIkey = import.meta.env.VITE_OPENWEATHER_API_KEY;

//After cloudinary send imgURL, post image to database
const addImage = async (formData) => {
  const { imgURL, item, tempRange, rain } = formData;

  const image = await fetch(`${baseURL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgURL, item, tempRange, rain }),
  }).catch((err) => console.log(`${err.message} while posting image`));

  return image;
};

//Get current location weather data form API
const getWeatherData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}&units=metric`;

  const weatherData = await fetch(url)
    .then((data) => data.json())
    .catch((err) => {
      console.log(`${err.message} while fetching weather data`);
    });

  return weatherData;
};

//Get random item from database according to passed params
const getRandomItem = async (item, tempToday, rainToday) => {
  const randomItem = await fetch(
    `${baseURL}/getTop/${item}/${tempToday}/${rainToday}`
  )
    .then((res) => res.json())
    .catch((err) => {
      console.log(`${err.message} while fetching random ${item}`);
    });

  console.log('randomItem', randomItem.imgURL);
  return randomItem.imgURL;
};
export { addImage, getWeatherData, getRandomItem };
