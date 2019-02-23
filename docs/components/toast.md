# Toast

### 预览
<br>
<toast-demo-1/>

### 使用
```vue
// 需要在实例化前引入并使用
import { Plugin } from 'xx-simple-ui'
Vue.use(Plugin)

<x-button @click="handleClick">点击这里</x-button>
<x-button @click="handle">点击那里</x-button>

export default {
    methods: {
        handleClick() {
            this.$toast('没错，就是出现在这里了', {closeButton: {text: '关闭'}})
        },
        handle() {
            this.$toast('没错，就是出现在这里了', {closeButton: {text: '关闭'}, position: 'bottom'})
        }
    }
}

```

### 参数
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| autoClose | 自动关闭的时长 | Boolean,Number | 5 | true/false/数字|
| closeButton | 关闭按钮的内容 | Object | {text: '关闭', callback: undefined} | - |
| enableHtml | 编译HTML内容 | Boolean | false | - |
| position | 出现的位置 | String | 'middle' | 'middle','bottom'|
