import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model.js';
import Rendercoords from './view/coords.js';
import renderWeather from './view/weatherView.js';
import search from './view/searchView.js';
import view from './view/view.js';
import allDaysView from './view/allDaysView.js';
import { async } from 'regenerator-runtime';

const controlData = async function () {
  try {
    const query = search.getQuery();

    view.renderSpinner();

    await model.loadData(query);

    await model.loadFivedaysData();

    model.loadIcon();
    controlMenu();
    model.timeConverter();

    Rendercoords.render(model.state.fetchData);

    renderWeather.render(model.state.fetchData, model.state.icon);
  } catch (err) {
    console.log(err);
  }
};

const controlMenu = async function () {
  allDaysView.render(model.state.search.allDaysData, model.state.icon);
};

const init = function () {
  search.addHandlerRender(controlData);
};

init();
