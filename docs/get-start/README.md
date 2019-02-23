---
title: 快速上手
---

# 快速上手

### 使用之前
使用xx-simple-ui之前，有必要了解一下Vue的基础。
+ [组件基础](https://cn.vuejs.org/v2/guide/components.html)

### 引入xx-simple-ui
在`webpack`入口文件`main.js`，如下配置：
``` js
import Vue from 'vue'
import App from './App.vue'

import 'xx-simple-ui/dist/xx-simple-ui.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
```
直接在文件中引入相应的组件，并注册即可使用，

如：
``` js
import {Button} from 'xx-simple-ui'

export default {
    components: {
        'x-button': Button
    }
}
```
