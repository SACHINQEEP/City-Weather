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
    throw err;
  }
};

export const loadFivedaysData = async function () {
  try {
    const lat = state.fetchData.latitude;
    const lon = state.fetchData.longitude;
    const rec = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    const getData = await rec.json();
    console.log(getData);
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
    throw err;
  }
};
