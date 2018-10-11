---
home: true
actionText: Get Started →
actionLink: /guide/
features:
  - title: 零依赖
    details: 没有任何第三方依赖。
  - title: 优雅的API
    details: 遵循Vue API设计开发，无副作用。
footer: MIT License | Copyright (c) 2018 nashaofu
---

## 安装
``` bash
npm install vue-lightgallery --save
```

## 用法
全局安装：
```js
import Vue from 'vue'
import VueLightgallery from 'vue-lightgallery'
Vue.use(VueLightgallery)
```

局部安装：
```js
import VueLightgallery from 'vue-lightgallery'
export default {
  name: 'demo',
  components: {
    VueLightgallery
  }
}
```
