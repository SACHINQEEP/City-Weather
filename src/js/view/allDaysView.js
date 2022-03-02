import icons from 'url:../../img/icons.svg';

class allDaysView {
  _parentEl = document.querySelector('.overlay');
  _showWindow = document.querySelector('.clicked--icon');
  _data;
  _icon;
  _sunRise;
  _sunSet;

  render(data, icn, sunRise, sunSet) {
    this._data = data;
    this._icon = icn;
    this._sunRise = sunRise;
    this._sunSet = sunSet;

    const markup = this._markup(
      this._data,
      this._icon,
      this._sunRise,
      this._sunSet
    );

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup(data, icon, rise, set) {
    return `
      <div class="overlay-weatherContainer">
            <div class="overlay-header">
              <h3>5 Days Weather-<span>${data.city_name} ${
      data.city_country
    }</span></h3>
              <span>As of 12:40AM</span>
            </div>
            <div class="weather--container">
              <div class="weather flex today--weather">
                <div class="flex--content">
                  <span>[Today]</span>
                  <span>${data.temp}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.disc}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href=" ${icons}#sunRise-icon"></use>
                  </svg>
                  <span>${rise}</span>
                  <svg id="main-img">
                    <use href=" ${icons}#sunDown-icon"></use>
                  </svg>
                  <span>${set}</span>
                </div>
              </div>
              <div class="weather flex tomorrow--weather">
                <div class="flex--content">
                  <span>[Tomorrow]</span>
                  <span>${data.tempsec}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discsec}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#tempMin-icon"></use>
                  </svg>
                  <span>${data.minTempsec}&#x2103;</span>
                  <svg id="main-img">
                    <use  href="${icons}#tempMax-icon"></use>
                  </svg>
                  <span>${data.maxTempsec}&#x2103;</span>
                </div>
              </div>
              <div class="weather flex third--weather">
                <div class="flex--content">
                  <span>[${data.datethird.slice(0, 10)}]</span>
                  <span>${data.tempthird}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discthird}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#tempMin-icon"></use>
                  </svg>
                  <span>${data.minTempthird}&#x2103;</span>
                  <svg id="main-img">
                    <use  href="${icons}#tempMax-icon"></use>
                  </svg>
                  <span>${data.maxTempthird}&#x2103;</span>
                </div>
              </div>
              <div class="weather flex forth--weather">
                <div class="flex--content">
                  <span>[${data.dateforth.slice(0, 10)}]</span>
                  <span>${data.tempforth}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discforth}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#tempMin-icon"></use>
                  </svg>
                  <span>${data.minTempforth}&#x2103;</span>
                  <svg id="main-img">
                    <use  href="${icons}#tempMax-icon"></use>
                  </svg>
                  <span>${data.maxTempforth}&#x2103;</span>
                </div>
              </div>
              <div class="weather flex fifth--weather">
                <div class="flex--content">
                  <span>[${data.datefive.slice(0, 10)}]</span>
                  <span>${data.tempfive}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discfive}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#tempMin-icon"></use>
                  </svg>
                  <span>${data.minTempfive}&#x2103;</span>
                  <svg id="main-img">
                    <use  href="${icons}#tempMax-icon"></use>
                  </svg>
                  <span>${data.maxTempfive}&#x2103;</span>
                </div>
              </div>
            </div>
          </div>
      `;
  }

  addHandlerRender(handle) {
    this._showWindow.addEventListener('click', function () {
      return handle();
    });
  }
}

export default new allDaysView();
