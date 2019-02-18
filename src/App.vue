<template>
    <div id="app" style="padding: 100px;">
        <x-popover>
            <div slot="content">
                关闭关闭关闭
            </div>
            <x-button>点我点我</x-button>
        </x-popover>
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
    import Popover from './components/popover'

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
            'x-tabs-pane': Tabs.TabsPane,
            'x-popover': Popover
        },
        data() {
            return{
                selectedTab: 'name1'
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
