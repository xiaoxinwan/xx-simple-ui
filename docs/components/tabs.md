# Tabs
### 默认用法
<br>
<tabs-demo-1></tabs-demo-1>

::: tip
`x-tabs-item`和`x-tabs-pane`的name必须是对应的，用于标识打开的是哪一项
:::

### 使用
```vue
<x-tabs selected="1">
    <x-tabs-head>
        <x-tabs-item name="1">标签1</x-tabs-item>
        <x-tabs-item name="2">标签2</x-tabs-item>
        <x-tabs-item name="3">标签3</x-tabs-item>
    </x-tabs-head>
    <x-tabs-body>
        <x-tabs-pane name="1">内容1内容1内容1内容1</x-tabs-pane>
        <x-tabs-pane name="2">内容2内容2内容2内容2</x-tabs-pane>
        <x-tabs-pane name="3">内容3内容3内容3内容3</x-tabs-pane>
    </x-tabs-body>
</x-tabs>
```

### 参数

#### Tabs
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| selected | 选中的条目，必填项 | String | - | - |

#### TabsItem
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| name | 用于标识 | String | - | - |

#### TabsPane
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| name | 用于标识 | String | - | - |
