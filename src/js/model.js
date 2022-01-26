import { async } from 'regenerator-runtime';
import { API_KEY } from './config.js';
import { API_URL } from './config.js';
import { TEMP_UNIT } from './config.js';
import { WEATHER_ICONS } from './config.js';
import { ICONS_SIZE } from './config.js';
import { AJAX } from './helper.js';

export const state = {
  fetchData: {},
  cityName: '',
  icon: '',
  search: {
    allDaysData: {},
  },
};

const weather = function (data) {
  const render = data;
  const { coord, name, main, weather, wind } = render;
  return {
    latitude: coord.lat,
    longitude: coord.lon,
    city_name: name,
    humidity: main.humidity,
    pressure: main.pressure,
    temp: main.temp,
    status: weather[0].description,
    icons: weather[0].icon,
    wind_speed: wind.speed,
  };
};

export const loadData = async function (query) {
  try {
    state.cityName = query;

    const data = await AJAX(`${API_URL}${query}${TEMP_UNIT}&appid=${API_KEY}`);

    state.fetchData = weather(data);
  } catch (err) {
    console.log(err);
  }
};

const fiveDaysWeather = function (data) {
  const renderFiveDays = data;

  const { city, list } = renderFiveDays;
  console.log(list[0].weather);

  return {
    // first Day Data
    sunrise: city.sunrise,
    sunset: city.sunset,
    date: list[0].dt_txt,
    temp: list[0].main.temp,
    minTemp: list[0].main.temp_min,
    maxTemp: list[0].main.temp_max,
    disc: list[0].weather[0].description,
    //second Day Data
    sunrisesec: city.sunrise,
    sunsetsec: city.sunset,
    datesec: list[8].dt_txt,
    tempsec: list[8].main.temp,
    minTempsec: list[8].main.temp_min,
    maxTempsec: list[8].main.temp_max,
    discsec: list[8].weather[0].description,
    //Third Day Data
    sunrisethird: city.sunrise,
    sunsetsecthird: city.sunset,
    datesecthird: list[16].dt_txt,
    tempsecthird: list[16].main.temp,
    minTempsecthird: list[16].main.temp_min,
    maxTempsecthird: list[16].main.temp_max,
    discsecthird: list[16].weather[0].description,
    //Forth Day Data
    sunriseforth: city.sunrise,
    sunsetsecforth: city.sunset,
    datesecforth: list[24].dt_txt,
    tempsecforth: list[24].main.temp,
    minTempsecforth: list[24].main.temp_min,
    maxTempsecforth: list[24].main.temp_max,
    discsecforth: list[24].weather[0].description,
    // Fifth Day data
    sunrisefive: city.sunrise,
    sunsetsecfive: city.sunset,
    datesecfive: list[32].dt_txt,
    tempsecfive: list[32].main.temp,
    minTempsecfive: list[32].main.temp_min,
    maxTempsecfive: list[32].main.temp_max,
    discsecfive: list[32].weather[0].description,
  };
};

export const loadFivedaysData = async function () {
  try {
    const lat = state.fetchData.latitude;
    const lon = state.fetchData.longitude;
    const rec = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const getData = await rec.json();
    state.search.allDaysData = fiveDaysWeather(getData);
    console.log(getData);
    console.log(state.search.allDaysData);
  } catch (err) {
    console.log(err);
  }
};

export const loadIcon = async function () {
  try {
    const icons = state.fetchData.icons;
    const iconData = `${WEATHER_ICONS}${icons}${ICONS_SIZE}`;
    state.icon = iconData;
  } catch (err) {
    console.log(err);
  }
};
