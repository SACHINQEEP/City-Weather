class search {
  _parentEl = document.querySelector('.submit-form');
  _showMenu = document.querySelector('.float-right');

  getQuery() {
    const query = this._parentEl.querySelector('.city-input').value;
    this._clearQuery();
    this._showMenu.classList.remove('hidden');
    if (!query) return;

    return query;
  }

  _clearQuery() {
    this._parentEl.querySelector('.city-input').value = '';
  }

  addHandlerRender(handle) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      return handle();
    });
  }
}

export default new search();
