class search {
  _parentEl = document.querySelector('.submit-form');

  getQuery() {
    const query = this._parentEl.querySelector('.city-input').value;
    this._clearQuery();

    if (!query) return;

    return query;
  }

  _clearQuery() {
    this._parentEl.querySelector('.city-input').value = '';
  }

  addHandlerRender(handle) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new search();
