# Popover
### 预览
<br>
<popover-demo/>

### 使用
```vue
<x-popover position="left">
    <div slot="content" >
        左左左左左左左左左左左左左左左左左左左左左左
    </div>
    <x-button>左</x-button>
</x-popover>
<x-popover position="top">
    <div slot="content" >
        上上上上上上上上上上上上上上上上上上上上上上
    </div>
    <x-button>上</x-button>
</x-popover>
<x-popover position="bottom">
    <div slot="content" >
        下下下下下下下下下下下下下下下下下下下下下下
    </div>
    <x-button>下</x-button>
</x-popover>
<x-popover position="right">
    <div slot="content" >
        右右右右右右右右右右右右右右右右右右右右右右
    </div>
    <x-button>右</x-button>
</x-popover>

<x-popover position="left" trigger="hover">
    <div slot="content" >
        左左左左左左左左左左左左左左左左左左左左左左
    </div>
    <x-button>左</x-button>
</x-popover>
<x-popover position="top" trigger="hover">
    <div slot="content" >
        上上上上上上上上上上上上上上上上上上上上上上
    </div>
    <x-button>上</x-button>
</x-popover>
<x-popover position="bottom" trigger="hover">
    <div slot="content" >
        下下下下下下下下下下下下下下下下下下下下下下
    </div>
    <x-button>下</x-button>
</x-popover>
<x-popover position="right" trigger="hover">
    <div slot="content" >
        右右右右右右右右右右右右右右右右右右右右右右
    </div>
    <x-button>右</x-button>
</x-popover>

```

### 参数
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| position | 位置 | String | 'top' | 'top','bottom','left','right'|
| trigger | 触发方式 | String | 'click' | 'click', 'hover' |
