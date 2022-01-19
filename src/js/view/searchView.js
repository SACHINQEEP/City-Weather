class search {
  _parentEl = document.querySelector('.submit-form');

  getQuery() {
    const query = this._parentEl.querySelector('.city-input').value;
    console.log(query);
    if (!query) return;
    return query;
  }

  // _clearQuery() {
  //     this._parentEl.querySelector('.city-input') = '';
  // }

  addHandlerRender(handle) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new search();
