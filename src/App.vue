<template>
    <div id="app">
        <!-- 侧+上中下布局 -->
        <x-layout style="height: 100vh;">
            <x-sider class="demo demo-sider">sider</x-sider>
            <x-layout>
                <x-header class="demo demo-header">header</x-header>
                <x-content class="demo demo-content">content</x-content>
                <x-footer class="demo demo-footer">footer</x-footer>
            </x-layout>
        </x-layout>
        <!--上（中+侧）下布局-->
        <!--<x-layout>-->
            <!--<x-header class="demo demo-header">header</x-header>-->
            <!--<x-layout direction="row">-->
                <!--<x-content class="demo demo-content">content</x-content>-->
                <!--<x-sider class="demo demo-sider">sider</x-sider>-->
            <!--</x-layout>-->
            <!--<x-footer class="demo demo-footer">footer</x-footer>-->
        <!--</x-layout>-->
        <!--上（侧+中）下布局-->
        <!--<x-layout>-->
            <!--<x-header class="demo demo-header">header</x-header>-->
            <!--<x-layout direction="row">-->
                <!--<x-sider class="demo demo-sider">sider</x-sider>-->
                <!--<x-content class="demo demo-content">content</x-content>-->
            <!--</x-layout>-->
            <!--<x-footer class="demo demo-footer">footer</x-footer>-->
        <!--</x-layout>-->
        <!--上中下布局-->
        <!--<x-layout style="height: 100vh;">-->
            <!--<x-header class="demo demo-header">header</x-header>-->
            <!--<x-content class="demo demo-content">content</x-content>-->
            <!--<x-footer class="demo demo-footer">footer</x-footer>-->
        <!--</x-layout>-->

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
        }
    }
</script>

<style lang="scss">
    .demo{
        min-height: 100px;
        text-align: center;
        &.demo-header{
            background: #CCD3E0;
        }
        &.demo-content{
            background: #646D78;
        }
        &.demo-sider{
            background: #26272E;
            color: #ffffff;
        }
        &.demo-footer{
            background: #ABB4BF;
        }
    }

</style>
