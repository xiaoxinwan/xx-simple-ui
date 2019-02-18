<template>
    <div id="app">
        <x-tabs :selected.sync="selectedTab">
            <x-tabs-head>
                <template slot="actions">
                    <x-button>设置</x-button>
                </template>
                <x-tabs-item name="name1">标签一</x-tabs-item>
                <x-tabs-item name="name2" disabled>标签二</x-tabs-item>
                <x-tabs-item name="name3">
                    <x-icon name="download"></x-icon> 标签三
                </x-tabs-item>
            </x-tabs-head>
            <x-tabs-body>
                <x-tabs-pane name="name1">标签一的相关内容</x-tabs-pane>
                <x-tabs-pane name="name2">标签二的相关内容</x-tabs-pane>
                <x-tabs-pane name="name3">标签三的相关内容</x-tabs-pane>
            </x-tabs-body>
        </x-tabs>
    </div>
</template>

<script>
    import Button from './components/button/button.vue'
    import ButtonGroup from './components/button/button-group.vue'
    import Input from './components/input/input.vue'
    import Row from './components/grid/row'
    import Col from './components/grid/col'
    import Icon from './components/icon'
    import Layout from './components/layout'
    import Tabs from './components/tabs'

    export default {
        name: 'app',
        components: {
            'x-button': Button,
            'x-icon': Icon,
            'x-layout': Layout,
            'x-header': Layout.Header,
            'x-content': Layout.Content,
            'x-sider': Layout.Sider,
            'x-footer': Layout.Footer,
            'x-tabs': Tabs,
            'x-tabs-head': Tabs.TabsHead,
            'x-tabs-item': Tabs.TabsItem,
            'x-tabs-body': Tabs.TabsBody,
            'x-tabs-pane': Tabs.TabsPane
        },
        data() {
            return{
                selectedTab: 'name2'
            }
        },
        created() {
        },
        methods: {
            handleClick() {
                this.$toast('你好我不找你了', {closeButton: {text: '你好'}, position: 'bottom'})
            }
        }
    }
</script>

<style lang="scss">
    .demo {
        min-height: 100px;
        text-align: center;

        &.demo-header {
            background: #CCD3E0;
        }

        &.demo-content {
            background: #646D78;
        }

        &.demo-sider {
            background: #26272E;
            color: #ffffff;
        }

        &.demo-footer {
            background: #ABB4BF;
        }
    }

</style>
