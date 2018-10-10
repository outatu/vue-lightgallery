<template lang="pug">
.vue-lightgallery
  component(
    v-for="(item, index) in thumbnails"
    :key="index"
    :is="tag"
    :href="item"
    :title="item"
  )
    img(:src="item" :alt="item")
</template>

<script>
export default {
  name: 'vue-lightgallery',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    tag: {
      type: String,
      default: 'a'
    }
  },
  computed: {
    thumbnails () {
      return this.items.map(item => {
        if (typeof item === 'object') return item.thumbnail || item.src
        return item
      })
    },
    sources () {
      return this.items.map(item => {
        if (typeof item === 'object') return item.src || item.thumbnail
        return item
      })
    }
  }
}
</script>

<style lang="less">
.vue-lightgallery {
}
</style>
