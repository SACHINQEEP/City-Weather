import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import Rendercoords from './view/coords.js';
import renderWeather from './view/weatherView.js';
import search from './view/searchView.js';

const controlData = async function () {
  try {
    const query = search.getQuery();

    await model.loadData(query);

    model.loadIcon();

    Rendercoords.render(model.state.fetchData);

    renderWeather.render(model.state.fetchData, model.state.icon);
  } catch (err) {
    console.log(err.message);
  }
};

const init = function () {
  search.addHandlerRender(controlData);
};

init();
