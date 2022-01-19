export const state = {
  fetchData: {},
  cityName: '',
  search: {
    result: [],
  },
};
console.log(state);

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
    wind_speed: wind.speed,
  };
};

export const loadData = async function (query) {
  try {
    state.cityName = query;

    const getData = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5f7704a8a2a989944955dee40d3115b6`
    );

    const data = await getData.json();

    state.fetchData = weather(data);
  } catch (err) {
    console.log(err);
  }
};
