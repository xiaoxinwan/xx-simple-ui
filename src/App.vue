<template>
    <div id="app" style="padding: 200px;">
        <x-collapse :selected.sync="selectedTab" single>
            <x-collapse-item title="史蒂夫·乔布斯" name="1">
                文本1文本1
            </x-collapse-item>
            <x-collapse-item title="斯蒂夫·盖瑞·沃兹尼亚克" name="2">
                文本2文本2
            </x-collapse-item>
            <x-collapse-item title="乔纳森·伊夫" name="3">
                文本3文本3
            </x-collapse-item>
        </x-collapse>
        被选中的选项：{{ selectedTab }}
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
    import Collapse from './components/collapse'

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
            'x-popover': Popover,
            'x-collapse': Collapse,
            'x-collapse-item': Collapse.CollapseItem
        },
        data() {
            return{
                selectedTab: ['1','3']
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
