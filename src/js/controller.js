import icons from 'url:../img/icons.svg';

const getData = async function () {
  try {
    const getData = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=5f7704a8a2a989944955dee40d3115b6'
    );

    const data = await getData.json();
    console.log(data);
    const { coord } = data;
    console.log(coord);

    const tempDetails = data.main;
    console.log(tempDetails);

    const parentEl = document.querySelector('.main-container');
    const coordEl = document.querySelector('.coordinates');

    const coords = `
           <span>LAT: ${coord.lat}</span>
          <span>LONG: ${coord.lon}</span>
        </div>
    `;

    coordEl.insertAdjacentHTML('afterbegin', coords);

    const html = `
    <div class="img-container">
    <img src="./src/img/summer-seasion.svg" alt="winter-seasion" />
  </div>

  <div class="flex--reverse">
    <div class="Weather-container">
      <div class="city"><span class="city-name">${data.name}</span></div>
      <div class="temp"><span class="city-temp">${tempDetails.temp}&#x2103;</span></div>
      <div class="cityWeather--img">
        <svg id="weather--icon">
          <use href="${icons}#clouds-icon"></use>
        </svg>
        <span class="city-weather"> ${data.weather[0].description} </span>
      </div>
    </div>
    <div class="weather-details">
      <div class="pressure--details">
        <svg id="main-img">
          <use href="${icons}#clouds-icon"></use>
        </svg>
        <span class="size pressure">${tempDetails.pressure}</span>
      </div>
      <div class="pressure--details">
        <svg id="main-img">
          <use href="${icons}#humidity-icon"></use>
        </svg>
        <span class="size humidity">${tempDetails.humidity}</span>
      </div>
      <div class="pressure--details">
        <svg id="main-img">
          <use href="${icons}#wind-icon"></use>
        </svg>
        <span class="size wind">${data.wind.speed}</span>
      </div>
    </div>
  </div>
    `;

    parentEl.insertAdjacentHTML('afterbegin', html);
  } catch (err) {
    console.log(err.message);
  }
};

getData();

const search = document.querySelector('#search-city');

const renderContent = function () {
  search.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
  });
};

renderContent();
