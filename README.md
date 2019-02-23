# xx-ui
一个简约的UI框架

### 介绍

简单组件：icon、button、button-group、collapse、grid、input、layout、popover、tabs、toast

### 安装
```
$ npm install xx-simple-ui
```

#### 注意
css，需要先改为border-box
```
*, *::before, *::after{
    box-sizing: border-box;
}
```

### 快速上手
在`main.js`中引入
```
import 'xx-simple-ui'
```

在组件中，需要如下分别引入需要的组件
```
import {Button,ButtonGroup,Icon} from 'xx-simple-ui'
export default {
    components: {
        'x-button':Button,
        'x-button-group':ButtonGroup,
        'x-icon':Icon
    }
}
```

### 文档
[请点击查阅](https://xiaoxinwan.github.io/xx-simple-ui/)



