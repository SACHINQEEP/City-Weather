class Rendercoords {
  _parentEl = document.querySelector('.coordinates');
  _data;

  render(data) {
    this._data = data;

    const markup = this._markup(this._data);
    this._parentEl.insertAdjacentHTML('afterbegin', markup);
  }

  _markup(data) {
    return `
      <span>LAT:${data.latitude}</span>
          <span>LONG:${data.longitude}</span>
        </div>
      `;
  }
}

export default new Rendercoords();
