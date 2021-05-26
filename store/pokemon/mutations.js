const mutations = {
  SET_POKEMONS (state, payload) {
    state.pokemons = payload;
  },
  SET_SEARCH (state, payload) {
    state.search = payload;
  }
};
export default mutations;
