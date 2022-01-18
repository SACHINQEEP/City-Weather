import * as model from './model.js';
import Rendercoords from './view/coords.js';
import renderWeather from './view/weatherView.js';
import search from './view/searchView.js';

const controlData = async function () {
  try {
    await model.loadData();

    Rendercoords.render(model.state.fetchData);

    renderWeather.render(model.state.fetchData);

    const query = search.getQuery();
    console.log(query);
  } catch (err) {
    console.log(err.message);
  }
};

controlData();
