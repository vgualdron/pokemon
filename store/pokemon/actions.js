import PokemonApi from '~/api/pokemon/PokemonApi';
import CommonHelper from '~/helpers/CommonHelper';
const pokemonApi = new PokemonApi();
const commonHelper = new CommonHelper();
const actions = {
  async findByName ({ commit }) {
    await pokemonApi.findByName().then((res) => {
      commit('SET_POKEMONS', res.data);
    });
  },
  async findAll ({ commit, state, dispatch }, data) {
    await commonHelper.delay(800);
    await pokemonApi.findAll(data).then((res) => {
      const items = (state.pokemons && state.pokemons.results) ? state.pokemons.results : [];
      const data = res.data;
      const newResults = data.results;
      const newItems = items.concat(newResults);
      data.results = newItems;
      commit('SET_POKEMONS', data);
    });
  },
  setSearch ({ commit }, data) {
    commit('SET_SEARCH', data);
  },
  setPokemons ({ commit }, data) {
    commit('SET_POKEMONS', data);
  },
  setShowFavorites ({ commit }, data) {
    commit('SET_SHOW_FAVORITES', data);
  }
};
export default actions;
