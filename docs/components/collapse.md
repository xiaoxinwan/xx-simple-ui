# Collapse
### 多选模式
<br>
<collapse-demo-1></collapse-demo-1>

### 使用
``` vue
<x-collapse :selected="['2','3']" >
    <x-collapse-item title="如何跟踪变化" name="1">
        当你把一个普通的JavaScript对象传给Vue实例的data选项，Vue将遍历对象的所有属性，并使用Object.defineProperty把这些属性全部转为getter/setter。
    </x-collapse-item>
    <x-collapse-item title="检测变化的注意事项" name="2">
        受现代JavaScript的限制，Vue不能检测到对象属性的添加或删除。属性必须在data对象上存在才能让它是响应的。
    </x-collapse-item>
    <x-collapse-item title="声明响应式属性" name="3">
        必须在初始化实例前声明根级响应式属性，哪怕是一个空值。如果未在data选项中声明,Vue将警告你渲染函数正在访问的属性不存在。
    </x-collapse-item>
</x-collapse>
```
### 单一模式
<br>
<collapse-demo-2></collapse-demo-2>

### 使用
``` vue
<x-collapse :selected="['1']" single>
    <x-collapse-item title="如何跟踪变化" name="1">
        当你把一个普通的JavaScript对象传给Vue实例的data选项，Vue将遍历对象的所有属性，并使用Object.defineProperty把这些属性全部转为getter/setter。
    </x-collapse-item>
    <x-collapse-item title="检测变化的注意事项" name="2">
        受现代JavaScript的限制，Vue不能检测到对象属性的添加或删除。属性必须在data对象上存在才能让它是响应的。
    </x-collapse-item>
    <x-collapse-item title="声明响应式属性" name="3">
        必须在初始化实例前声明根级响应式属性，哪怕是一个空值。如果未在data选项中声明,Vue将警告你渲染函数正在访问的属性不存在。
    </x-collapse-item>
</x-collapse>
```

### 参数
#### Collapse

| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| selected | 选择要展示的条目 | Array | - | - |
| single | 是否开启单一展示 | Boolean | false | true/false |

#### CollapseItem 

| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| title | 展示条目的标题(必须要提供) | String | - | - |
| hideIcon | 是否展示标题前的图标| Boolean | false | true/false|
| name | 展示条目的详细内容（必须提供）| String | - | - | 
