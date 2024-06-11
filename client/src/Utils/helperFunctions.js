import { getRandomItem } from '../Services/apiService';

const temperatureToWeather = (temp) => {
  const ranges = {
    cold: temp <= 10,
    cool: temp > 10 && temp <= 18,
    warm: temp > 18 && temp <= 25,
    hot: temp > 25,
  };
  for (let weather in ranges) {
    if (ranges[weather]) return weather;
  }
};

const rainToWeather = (description) => {
  if (
    description === 'Thunderstorm' ||
    description === 'Drizzle' ||
    description === 'Rain' ||
    description === 'Snow'
  ) {
    return false;
  } else {
    return true;
  }
};

const asyncCallHelper = async (item, tempToday, rainToday) => {
  return await getRandomItem(item, tempToday, rainToday);
};

export { temperatureToWeather, rainToWeather, asyncCallHelper };
