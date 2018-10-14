<template lang="pug">
.vue-lightgallery
  .vue-lightgallery-header
    a.vue-lightgallery-header-button(
      href="javascript:void(0)"
    )
      span.vue-lightgallery-icon-close
    a.vue-lightgallery-header-button(
      href="javascript:void(0)"
    )
      span.vue-lightgallery-icon-download
    a.vue-lightgallery-header-button(
      href="javascript:void(0)"
    )
      span.vue-lightgallery-icon-fullscreen
    a.vue-lightgallery-header-button(
      href="javascript:void(0)"
    )
      span.vue-lightgallery-icon-zoom-in
    a.vue-lightgallery-header-button(
      href="javascript:void(0)"
    )
      span.vue-lightgallery-icon-zoom-out
    .vue-lightgallery-header-counter 1 / {{ items.length }}
  .vue-lightgallery-body
    .vue-lightgallery-body-item(
      v-for="(item, index) in getItems"
      :key="index"
    )
      img(:src="item")
  .vue-lightgallery-footer
</template>

<script>
export default {
  name: 'vue-lightgallery',
  props: {
    value: {
      type: Number,
      default: 9
    },
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    getItems () {
      const length = this.items.length
      if (length <= 1) {
        return this.items
      }
      if (this.value <= 0) {
        return [this.items[length - 1], ...this.items.slice(0, 2)]
      } else if (this.value >= length - 1) {
        return [...this.items.slice(-2), this.items[0]]
      }
      return this.items.slice(this.value - 1, this.value + 1)
    }
  },
  methods: {
    click (index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less">
@import url('./lightgallery-icons/lightgallery-icons.css');
.vue-lightgallery {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #000;
  &-header {
    height: 48px;
    line-height: 48px;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    color: #999;
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0.45);
    &:before,
    &:after {
      content: '';
      display: table;
      float: none;
      clear: both;
    }
    &-counter {
      padding: 0 20px;
      float: left;
    }
    &-button {
      width: 48px;
      height: 48px;
      float: right;
      text-align: center;
      font-size: 24px;
      text-decoration: none;
      outline: none;
      cursor: pointer;
      &:hover {
        color: #fff;
        text-decoration: none;
        outline: none;
      }
    }
  }
  &-body {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    &-item {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  &-footer {
  }
}
</style>
