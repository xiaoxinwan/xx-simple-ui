<template>
    <div id="app">
        <button @click="handleClick">点我</button>
    </div>
</template>

<script>
    import Button from './components/button/button.vue'
    import ButtonGroup from './components/button/button-group.vue'
    import Input from './components/input/input.vue'
    import Row from './components/grid/row'
    import Col from './components/grid/col'
    import Layout from './components/layout'

    export default {
        name: 'app',
        components: {
            'x-layout': Layout,
            'x-header': Layout.Header,
            'x-content': Layout.Content,
            'x-sider': Layout.Sider,
            'x-footer': Layout.Footer
        },
        created() {
        },
        methods: {
            handleClick() {
                this.$toast('你好我不找你了', {closeButton: {text: '你好'}, position: 'top'})
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
