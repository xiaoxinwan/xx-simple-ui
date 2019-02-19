<template>
    <div id="app" style="padding: 400px;">
        <div>
            <x-popover position="left">
                <div slot="content" >
                    左左左左左左左左左左左左左左左左左左左左左左左左左左左
                </div>
                <x-button>左</x-button>
            </x-popover>
            <x-popover position="top">
                <div slot="content" >
                    上上山上上山上上山上上山上上山上上山上上山上上山上上山
                </div>
                <x-button>上</x-button>
            </x-popover>
            <x-popover position="bottom">
                <div slot="content" >
                    下下下下下下下下下下下下下下下下下下下下下下下下
                </div>
                <x-button>下</x-button>
            </x-popover>
            <x-popover position="right">
                <div slot="content" >
                    又又又又又又又又又又又又又又又又又又又又又又又又又又又
                </div>
                <x-button>右</x-button>
            </x-popover>
        </div>
        <div style="padding-top: 100px">
            <x-popover position="left" trigger="hover">
                <div slot="content" >
                    左左左左左左左左左左左左左左左左左左左左左左左左左左左
                </div>
                <x-button>左</x-button>
            </x-popover>
            <x-popover position="top" trigger="hover">
                <div slot="content" >
                    上上山上上山上上山上上山上上山上上山上上山上上山上上山
                </div>
                <x-button>上</x-button>
            </x-popover>
            <x-popover position="bottom" trigger="hover">
                <div slot="content" >
                    下下下下下下下下下下下下下下下下下下下下下下下下
                </div>
                <x-button>下</x-button>
            </x-popover>
            <x-popover position="right" trigger="hover">
                <div slot="content" >
                    又又又又又又又又又又又又又又又又又又又又又又又又又又又
                </div>
                <x-button>右</x-button>
            </x-popover>
        </div>
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
