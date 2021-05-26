<template>
    <div class="container-list-items">
      <b-card v-for="(item, index) in items" :key="index.toString() + item.name">
        <b-card-text class="name-item">
          {{ item.name }}
        </b-card-text>
      </b-card>
    </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    };
  },
  props: {
    items: {
      type: Array,
      default: null
    }
  },
  methods: {
  }
};
</script>
