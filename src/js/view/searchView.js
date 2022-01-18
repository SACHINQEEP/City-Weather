class search {
  _parentEl = document.querySelector('.search');
  _evernt = document.querySelector('#search-icon');

  getQuery() {
    const query = this._parentEl.querySelector('#search-city').value;
    console.log(query);
    if (!query) return;
    // this.clearQuery();
    return query;
  }

  //   clearQuery() {
  //       this._parentEl.querySelector('search-city') = '';
  //   }

  addHandlerRender(handle) {
    this._evernt.addEventListener('click', function (e) {
      e.preventDefault();
      handle();
    });
  }
}

export default new search();
