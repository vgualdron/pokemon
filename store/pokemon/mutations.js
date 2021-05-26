const mutations = {
  SET_POKEMONS (state, payload) {
    state.pokemons = payload;
  },
  SET_SEARCH (state, payload) {
    state.search = payload;
  },
  SET_SHOW_FAVORITES (state, payload) {
    state.showFavorites = payload;
  }
};
export default mutations;
