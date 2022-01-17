const getData = async function () {
  try {
    const data = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=indore&units=metric&appid=5f7704a8a2a989944955dee40d3115b6'
    );
    console.log(data);

    const get = await data.json();

    console.log(get);

    const parentEl = document.querySelector('.Search-container');

    const html = `
      
      <div class="Search-container">
        <div class="search-bar">
          <form>
            <label for="search" class="search">
              <img
                class="search-icon"
                src="/search-icon.svg"
                alt="icon"
              />
              <input
                type="search"
                placeholder="City Name"
                class="city-input"
                id="search-city"
              />
            </label>
          </form>
        </div>
        <div class="coordinates">
          <span>LAT: ${get.coord.lat}</span>
          <span>LONG: ${get.coord.lon}</span>
        </div>
      </div>
    </header>
    <main>
      <section>
        <div class="main-container bg--container">
          <div class="container-img">
            <figure>
              <img src="./src/img/winter-seasion.svg " alt="winter-seasion" />
            </figure>
          </div>
          <div class="flex--reverse">
            <div class="Weather-container">
              <div class="city"><span class="city-name">Indore</span></div>
              <div class="temp"><span class="city-temp">18&#x2103;</span></div>
              <div class="cityWeather--img">
                <img
                  src="./src/img/WeatherShowing-icon.svg"
                  alt="winter-icon"
                />
                <span class="city-weather"> Snow </span>
              </div>
            </div>
            <div class="weather-details">
              <div class="pressure--details">
                <img src="./src/img/Pressure-icon.svg" alt="icon" />
                <span class="size pressure">2250</span>
              </div>
              <div class="pressure--details">
                <img src="./src/img/Humidity-icon.svg" alt="icon" />
                <span class="size humidity">2250</span>
              </div>
              <div class="pressure--details">
                <img src="./src/img/wind-icon.svg" alt="icon" />
                <span class="size wind">2250</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
      `;

    parentEl.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    console.log(err.message);
  }
};

// getData();
