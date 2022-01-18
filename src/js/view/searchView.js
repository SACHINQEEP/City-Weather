class search {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('#search-city').value;
    console.log(query);
    if(!query) return
    this.clearQuery()
    return query;
  }

  clearQuery(){
      this._parentEl.querySelector('.city-input') = '';
  }
}

export default new search();
