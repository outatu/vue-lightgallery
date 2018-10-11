<template lang="pug">
.vue-lightgallery
  a.vue-lightgallery-item(
    v-for="(item, index) in thumbnails"
    :key="index"
    :href="item"
    :title="item"
    @click.prevent="click(index)"
  )
    slot(
      :index="index"
      :item="items[index]"
      :source="sources[index]"
      :thumbnail="thumbnails[index]"
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
  },
  mounted () {
    this.el = document.createElement('div')
  },
  methods: {
    click (index) {
      console.log(index)
    }
  }
}
</script>
