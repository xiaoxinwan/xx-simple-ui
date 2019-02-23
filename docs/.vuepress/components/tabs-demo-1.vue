<template>
    <div>
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
    </div>
</template>

<script>
    import Tabs from '../../../src/components/tabs/tabs'
    import TabsHead from '../../../src/components/tabs/tabs-head'
    import TabsItem from '../../../src/components/tabs/tabs-item'
    import TabsBody from '../../../src/components/tabs/tabs-body'
    import TabsPane from '../../../src/components/tabs/tabs-pane'


    export default {
        name: "tabs-demo-1",
        components: {
            'x-tabs': Tabs,
            'x-tabs-head': TabsHead,
            'x-tabs-item': TabsItem,
            'x-tabs-body': TabsBody,
            'x-tabs-pane': TabsPane,
        }
    }
</script>

<style scoped lang='scss'>

</style>
