<template>
  <b-navbar-nav class="navbar-fixed-bottom">
    <b-nav-form>
      <b-button pill variant="danger" class="my-2 my-sm-0 all" type="submit">
        <b-icon-list-ul></b-icon-list-ul> All
      </b-button>
      <b-button pill variant="danger" class="my-2 my-sm-0" type="submit">
        <b-icon-star-fill></b-icon-star-fill> Favorites
      </b-button>
    </b-nav-form>
  </b-navbar-nav>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { BIconListUl, BIconStarFill } from 'bootstrap-vue';

export default {
  components: {
    BIconListUl,
    BIconStarFill
  },
  data () {
    return {
      show: true
    };
  },
  computed: {
    ...mapState('pokemon', [
      'pokemons'
    ])
  },
  async mounted () {
  },
  methods: {
    ...mapActions('pokemon', [
      ''
    ])
  }
};
</script>
