class allDaysView {
  _parentEl = document.querySelector('.overlay');

  render() {
    const markup = this._markup();

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup() {
    return `
      <div class="overlay-weatherContainer">
            <div class="overlay-header">
              <h3>5 Days Weather-<span>Indore</span></h3>
              <span>As of 12:40AM</span>
            </div>
            <div class="weather--container">
              <div class="weather flex today--weather">
                <div class="flex--content">
                  <span>Today</span>
                  <span>17&#x2103;</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>Mostly Cloudy</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="./src/img/arrow-open.svg#Vector"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex tomorrow--weather">
                <div class="flex--content">
                  <span>Tomorrow</span>
                  <span>17&#x2103;</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>Mostly Cloudy</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="./src/img/arrow-open.svg#Vector"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex third--weather">
                <div class="flex--content">
                  <span>27/01</span>
                  <span>17&#x2103;</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>Mostly Cloudy</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="./src/img/arrow-open.svg#Vector"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex forth--weather">
                <div class="flex--content">
                  <span>28/01</span>
                  <span>17&#x2103;</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>Mostly Cloudy</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="./src/img/arrow-open.svg#Vector"></use>
                    </svg>
                  </div>
                </div>
              </div>
              <div class="weather flex fifth--weather">
                <div class="flex--content">
                  <span>29/01</span>
                  <span>17&#x2103;</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>Mostly Cloudy</span>
                </div>
                <div class="flex--contentsun">
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:15AM</span>
                  <svg id="main-img">
                    <use href="./src/img/icons.svg#wind-icon"></use>
                  </svg>
                  <span>06:30PM</span>
                  <div class="open--close__icon">
                    <svg id="main-img">
                      <use href="./src/img/arrow-open.svg#Vector"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
  }
}
