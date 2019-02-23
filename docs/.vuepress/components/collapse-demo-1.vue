<template>
    <div>
        <x-collapse :selected="['3']" >
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
    </div>
</template>

<script>
    import Collapse from '../../../src/components/collapse/collapse'
    import CollapseItem from '../../../src/components/collapse/collapse-item'

    export default {
        name: "collapse-demo",
        components: {
            'x-collapse': Collapse,
            'x-collapse-item': CollapseItem
        }
    }
</script>

<style scoped lang='scss'>

</style>
