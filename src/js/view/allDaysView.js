import icons from 'url:../../img/icons.svg';

class allDaysView {
  _parentEl = document.querySelector('.overlay');
  _data;
  _icon;

  render(data, icn) {
    this._data = data;
    this._icon = icn;
    const markup = this._markup(this._data, this._icon);

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup(data, icon) {
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
                  <span>Today</span>
                  <span>${data.temp}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.disc}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href=" ${icons}#sunRise-icon"></use>
                  </svg>
                  <span>${data.sunrise * 1000}</span>
                  <svg id="main-img">
                    <use href=" ${icons}#sunDown-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="${icons}#open-icon"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex tomorrow--weather">
                <div class="flex--content">
                  <span>Tomorrow</span>
                  <span>${data.tempsec}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discsec}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#sunRise-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use  href="${icons}#sunDown-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="${icons}#open-icon"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex third--weather">
                <div class="flex--content">
                  <span>27/01</span>
                  <span>${data.tempthird}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discthird}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#sunRise-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use  href="${icons}#sunDown-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="${icons}#open-icon"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex forth--weather">
                <div class="flex--content">
                  <span>28/01</span>
                  <span>${data.tempforth}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discforth}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#sunRise-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use  href="${icons}#sunDown-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="${icons}#open-icon"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex fifth--weather">
                <div class="flex--content">
                  <span>29/01</span>
                  <span>${data.tempfive}&#x2103;</span>
                  <img id="main-img" src="${icon}" alt="icons" crossorigin />
                  <span>${data.discfive}</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use  href="${icons}#sunRise-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use  href="${icons}#sunDown-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="${icons}#open-icon"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
  }
}

export default new allDaysView();
