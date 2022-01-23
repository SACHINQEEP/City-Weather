import errorImg from 'url:../../img/Error.svg';
import icons from 'url:../../img/icons.svg';

class view {
  _parentEl = document.querySelector('.main-container');

  renderSpinner() {
    const spinner = `
        <div class="spinner">
                <svg id="icon-loader">
                  <use href="${icons}#icon-loader"></use>
                </svg>
              </div>
        `;
    this._parentEl.insertAdjacentHTML('afterbegin', spinner);
  }
  errorMarkup() {
    const errorMessage = `
          <div class="error-message">
                <img src="${errorImg}" alt="Error icon" />
                <p>Please refresh and write the known city name</p>
              </div>
          `;

    this._parentEl.insertAdjacentHTML('afterbegin', errorMessage);
  }
}

export default new view();
