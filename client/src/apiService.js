const baseURL = 'http://localhost:3000';
const weatherAPIkey = import.meta.env.VITE_OPENWEATHER_API_KEY;

const addImage = async (formData) => {
  const { imgURL, item, tempRange, rain } = formData;
  //console.log('did data get here?', imgURL, item, tempRange, rain); //data is ok
  const image = await fetch(`${baseURL}/upload`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ imgURL, item, tempRange, rain }),
  }).catch((err) => console.log(`${err.message} while posting image`)); //.then((res) => console.log('addImage res', res));

  //console.log('Image posted!', image);

  return image;
};

const getWeatherData = async (lat, lon) => {
  //console.log('did data get here?', lat, lon); //data is ok
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIkey}&units=metric`; //added metric

  const weatherData = await fetch(url)
    .then((data) => data.json())
    .catch((err) => {
      console.log(`${err.message} while fetching weather data`);
    }); //getting correct data!
  //console.log(weatherData);
  return weatherData;
};

const getRandomTop = async (tempToday, rainToday) => {
  const allTops = await fetch(`${baseURL}/getTops`).then((res) => res.json());
  //.then((data) => console.log('allTops', data));

  console.log('allTops', allTops);
  console.log('params', tempToday, rainToday);
  const filteredTops = allTops.filter((top) => {
    return top.tempRange === tempToday /*&& top.rain === rainToday*/; //TODO fighure out why rain is undefined
  });

  console.log('filtered', filteredTops);

  const randomTop =
    filteredTops[Math.floor(Math.random() * filteredTops.length)];
  // .catch((err) => {
  //   console.log(`${err.message} while fetching random top`);
  // });
  console.log('randomTop', randomTop);
  return randomTop;
};
export { addImage, getWeatherData, getRandomTop };
