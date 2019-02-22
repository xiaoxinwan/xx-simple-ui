# Grid

### 栅栏布局
<br>
<grid-demo-1></grid-demo-1>

### 使用
```
<x-row>
    <x-col span="24">24</x-col>
</x-row>

<x-row>
    <x-col span="12">12</x-col>
    <x-col span="12">12</x-col>
</x-row>

<x-row>
    <x-col span="8">8</x-col>
    <x-col span="8">8</x-col>
    <x-col span="8">8</x-col>
</x-row>

<x-row>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
    <x-col span="2">2</x-col>
</x-row>
```


### Gutter
<br>
<grid-demo-2></grid-demo-2>

### 使用
```
<x-row class="demoRow" gutter="20">
    <x-col span="8">
        <div class="demoCol">gutter为20</div>
    </x-col>
    <x-col span="8">
        <div class="demoCol">gutter为20</div>
    </x-col>
    <x-col span="8">
        <div class="demoCol">gutter为20</div>
    </x-col>
</x-row>

<x-row class="demoRow" gutter="30">
    <x-col span="6">
        <div class="demoCol">gutter为30</div>
    </x-col>
    <x-col span="6">
        <div class="demoCol">gutter为30</div>
    </x-col>
    <x-col span="6">
        <div class="demoCol">gutter为30</div>
    </x-col>
    <x-col span="6">
        <div class="demoCol">gutter为30</div>
    </x-col>
</x-row>
```

### Offset
<br>
<grid-demo-3></grid-demo-3>

### 使用
```
<x-row>
    <x-col span="12" offset="1">offset为1</x-col>
    <x-col span="3" offset="2">offset为2</x-col>
    <x-col span="3" offset="3">offset为3</x-col>
</x-row>

<x-row >
    <x-col span="3" offset="3">offset为4</x-col>
    <x-col span="4" offset="1">offset为1</x-col>
    <x-col span="5" offset="3">offset为3</x-col>
    <x-col span="3" offset="2">offset为2</x-col>
</x-row>
```

### 响应式布局
<br>
<grid-demo-4></grid-demo-4>

```
<x-row>
    <x-col span="24"
            :ipad="{span: 8}"
            :pc="{span: 4}"
            :wide-pc="{span: 2}"
    >1</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >2</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >3</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >4</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >5</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >6</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >7</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >8</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >9</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >10</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >11</x-col>
    <x-col span="24"
           :ipad="{span: 8}"
           :pc="{span: 4}"
           :wide-pc="{span: 2}"
    >12</x-col>
</x-row>
```

### 参数

#### Row
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| gutter| 栅格间距，单位为px，左右平分 | String / Number | - | - |

#### Col
| 参数          | 说明        | 类型      |  默认值 | 可选值 |
| -------------|:----------:| :------:| :----:| :----:|
| span | 栅格的占格数 | String / Number | - | - |
| offset | 栅格右侧的间隔数 | String / Number | - | - |
| ipad | min-width: 577px | Object | - | - |
| narrow-pc | min-width: 769px | Object | - | - |
| pc | min-width: 993px  | Object| - | - |
| wide-pc | min-width: 1201px  | Object | - | - |


