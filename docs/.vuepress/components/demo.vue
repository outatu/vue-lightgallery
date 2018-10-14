<template lang="pug">
.demo
  vue-lightgallery(:items="items")
  //- vue-lightgallery(:items="items")
  //-   template(slot-scope="{ index, item }")
  //-     img(:src="item")
  //-     div {{ index, item }}
</template>

<script>
import image1 from '../images/1.jpg'
import image2 from '../images/2.jpg'
import image3 from '../images/3.jpg'
import image4 from '../images/4.jpg'
import image5 from '../images/5.jpg'
import image6 from '../images/6.jpg'
import image7 from '../images/7.jpg'
import image8 from '../images/8.jpg'

export default {
  name: 'demo',
  data () {
    return {
      items: [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
      ]
    }
  }
}
</script>

<style lang="less">
.demo {

}
</style>

