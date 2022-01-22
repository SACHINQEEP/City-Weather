import icons from 'url:../../img/icons.svg';

class renderMainView {
  _parentEl = document.querySelector('.event-container');

  render() {
    const markup = this._markup();

    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup() {
    return `
      <div class="main-page--content bg-black">
        <div class="content">
          <svg id="img--content">
          <use href="${icons}#cloud-icon"></use>
          </svg>
          <div class="city-weather__content">
            <h1>City Weather</h1>
            <p>You can search by city name and your coordinate</p>
          </div>
          <div class="selector-btn">
            <div class="btn--city">
              <button class="btn btn--extra__padding">Search City</button>
            </div>
            <div class="btn--coords">
              <button class="btn">Your coordinate</button>
            </div>
          </div>
        </div>
      </div>
      `;
  }
}

export default new renderMainView();
