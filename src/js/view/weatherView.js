import icons from 'url:../../img/icons.svg';
import img from 'url:../../img/summer-seasion.svg';

class renderWeather {
  _parentEl = document.querySelector('.main-container');
  _data;

  render(data) {
    this._data = data;
    console.log(this._data);

    const markup = this._markup(this._data);
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup(data) {
    return `
        <div class="img-container">
                <img src="${img}" alt="winter-seasion" crossorigin />
            </div>

            <div class="flex--reverse">
            <div class="Weather-container">
            <div class="city"><span class="city-name">${data.city_name}</span></div>
            <div class="temp"><span class="city-temp">${data.temp}&#x2103;</span></div>
            <div class="cityWeather--img">
                <svg id="weather--icon">
                <use href="${icons}#clouds-icon"></use>
                </svg>
                <span class="city-weather"> ${data.status}</span>
            </div>
            </div>
            <div class="weather-details">
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#clouds-icon"></use>
                </svg>
                <span class="size pressure">${data.pressure}</span>
            </div>
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#humidity-icon"></use>
                </svg>
                <span class="size humidity">${data.humidity}</span>
            </div>
            <div class="pressure--details">
                <svg id="main-img">
                <use href="${icons}#wind-icon"></use>
                </svg>
                <span class="size wind">${data.wind_speed}</span>
            </div>
            </div>
        </div> 
      `;
  }
}

export default new renderWeather();
