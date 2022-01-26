import icons from 'url:../../img/icons.svg';
import img from 'url:../../img/Earth.svg';

// import cancel from 'url:../../img/cancel-icon.svg';

class renderWeather {
  _parentEl = document.querySelector('.main-container');
  _data;
  _icons;

  render(data, icn) {
    this._data = data;
    this._icons = icn;

    const markup = this._markup(this._data, this._icons);
    this._parentEl.innerHTML = '';
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup(data, icn) {
    return `
        <div class="img-container">
                <img src="${img}" alt="winter-seasion" crossorigin />
            </div>

            <div class="flex--reverse">
            <div class="float-right">
            <svg id="main-img">
                <use href="${icons}#menu-icon"></use>
                </svg>
            </div>
            <div class="Weather-container">
            
            <div class="city"><span class="city-name">${data.city_name}</span></div>
            <div class="temp"><span class="city-temp">${data.temp}&#x2103;</span></div>
            <div class="cityWeather--img">
            <img src="${icn}" alt="icons" crossorigin />
                <span class="city-weather"> ${data.status}</span>
            </div>
            </div>
            <div class="weather-details">
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#pressure-icon"></use>
                </svg>
                <span class="size pressure">${data.pressure}hPa</span>
            </div>
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#humidity-icon"></use>
                </svg>
                <span class="size humidity">${data.humidity}%</span>
            </div>
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#wind-icon"></use>
                </svg>
                <span class="size wind">${data.wind_speed}m/s</span>
            </div>
            </div>
      `;
  }
}

export default new renderWeather();
