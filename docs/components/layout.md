# Layout

`x-header`、`x-content`、`x-sider`和`x-footer`必须是`x-layout`的子组件。

### 普通上中下布局
<br>
<layout-demo-1></layout-demo-1>

### 使用
```
<x-layout>
    <x-header class="headerDemo">Header</x-header>
    <x-content class="contentDemo">Content</x-content>
    <x-footer class="footerDemo">Footer</x-footer>
</x-layout>
```

### 上中下布局（含侧边栏）
<br>
<layout-demo-2></layout-demo-2>

### 使用
```
<x-layout>
    <x-header class="headerDemo">Header</x-header>
    <x-layout>
        <x-sider class="siderDemo">Sider</x-sider>
        <x-content class="contentDemo">Content</x-content>
    </x-layout>
    <x-footer class="footerDemo">Footer</x-footer>
</x-layout>
```

### 侧边栏 + 上中下布局
<br>
<layout-demo-3></layout-demo-3>

### 使用
```
<x-layout>
    <x-sider class="siderDemo">Sider</x-sider>
    <x-layout>
        <x-header class="headerDemo">Header</x-header>
        <x-content class="contentDemo">Content</x-content>
        <x-footer class="footerDemo">Footer</x-footer>
    </x-layout>
</x-layout>
```  
