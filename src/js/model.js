import { async } from 'regenerator-runtime';
import { API_KEY } from './config.js';
import { API_URL } from './config.js';
import { API_URL_5DAY } from './config.js';
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
    risingTime: '',
    setTime: '',
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
    city_name: city.name,
    city_country: city.country,
    // first Day Data
    sunrise: city.sunrise,
    sunset: city.sunset,
    date: list[0].dt_txt,
    temp: list[0].main.temp,
    minTemp: list[0].main.temp_min,
    maxTemp: list[0].main.temp_max,
    disc: list[0].weather[0].description,
    //second Day Data

    datesec: list[8].dt_txt,
    tempsec: list[8].main.temp,
    minTempsec: list[8].main.temp_min,
    maxTempsec: list[8].main.temp_max,
    discsec: list[8].weather[0].description,
    //Third Day Data

    datethird: list[16].dt_txt,
    tempthird: list[16].main.temp,
    minTempthird: list[16].main.temp_min,
    maxTempthird: list[16].main.temp_max,
    discthird: list[16].weather[0].description,
    //Forth Day Data

    dateforth: list[24].dt_txt,
    tempforth: list[24].main.temp,
    minTempforth: list[24].main.temp_min,
    maxTempforth: list[24].main.temp_max,
    discforth: list[24].weather[0].description,
    // Fifth Day data

    datefive: list[32].dt_txt,
    tempfive: list[32].main.temp,
    minTempfive: list[32].main.temp_min,
    maxTempfive: list[32].main.temp_max,
    discfive: list[32].weather[0].description,
  };
};

export const loadFivedaysData = async function () {
  try {
    const lat = state.fetchData.latitude;
    const lon = state.fetchData.longitude;
    const rec = await fetch(
      `${API_URL_5DAY}${lat}&lon=${lon}&${TEMP_UNIT}&appid=${API_KEY}`
    );

    const getData = await rec.json();
    state.search.allDaysData = fiveDaysWeather(getData);
  } catch (err) {
    console.log(err);
  }
};

export const timeConverter = function () {
  const sunrise = state.search.allDaysData.sunrise;
  const sunset = state.search.allDaysData.sunset;

  const convertboth = [sunrise, sunset];

  const convert = convertboth.map(el => {
    const changeData = new Date(el * 1000);
    return changeData;
  });

  const [rise, set] = convert;

  const option = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const changeSunrise = new Intl.DateTimeFormat('en-IN', option).format(rise);
  const changeSunset = new Intl.DateTimeFormat('en-IN', option).format(set);

  state.search.risingTime = changeSunrise;
  state.search.setTime = changeSunset;
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
