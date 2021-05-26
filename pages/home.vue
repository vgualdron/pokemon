<template>
  <div>
    <div class="container">
      <InputSearch />
    </div>
    <div v-if="items && items.length > 0" class="container">
      <ListItems :items="items"/>
      <div v-if="pokemons.next" class="see-more">
        <SeeMore />
      </div>
    </div>
    <div v-else class="container">
      <NotFoundItems />
    </div>
    <div>
      <NavbarFixedBottom />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import InputSearch from '../components/InputSearch';
import ListItems from '../components/ListItems';
import NotFoundItems from '../components/NotFoundItems';
import NavbarFixedBottom from '../components/NavbarFixedBottom';
import SeeMore from '../components/SeeMore';
export default {
  name: 'Home',
  components: {
    InputSearch,
    ListItems,
    NotFoundItems,
    NavbarFixedBottom,
    SeeMore
  },
  data () {
    return {
      showFavorites: false
    };
  },
  computed: {
    ...mapState('pokemon', [
      'search',
      'pokemons',
      'filteredPokemons'
    ]),
    items: {
      get () {
        let array = [];
        if (this.pokemons && this.pokemons.results) {
          if (this.showFavorites) {
            array = this.pokemons.results;
          } else {
            array = this.pokemons.results;
          }
        }
        return array.filter((item) => {
          return item.name.includes(this.search);
        });
      },
      set (newValue) {
        return newValue;
      }
    }
  },
  async mounted () {
    await this.setLoader(true);
    await this.findAll();
    await this.setLoader(false);
  },
  methods: {
    ...mapActions('pokemon', [
      'findAll'
    ]),
    ...mapActions('common', [
      'setLoader'
    ])
  }
};
</script>
