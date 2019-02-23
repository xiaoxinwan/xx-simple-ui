# Button

### 预览
<br>
<button-demo></button-demo>

### 使用
``` vue
import { Button } from 'xx-simple-ui'
export default {
    components: {
        'x-button': Button
    }
}
    
<x-button>你好</x-button>
<x-button icon="thumb-up">你好</x-button>
<x-button loading>加载中</x-button>
<x-button icon="info" icon-position="right">信息</x-button>
```

### 参数

| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| icon         | 图标的名称  | String |  无 | 见上一小节 |
| loading      | 图标是否旋转| Boolean|  false |  true/false |
| iconPosition | 图标的位置 | String |  left | left/right |
