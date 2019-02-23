<template>
    <div>
        <x-layout>
            <x-header class="headerDemo">Header</x-header>
            <x-layout>
                <x-sider class="siderDemo">Sider</x-sider>
                <x-content class="contentDemo">Content</x-content>
            </x-layout>
            <x-footer class="footerDemo">Footer</x-footer>
        </x-layout>
    </div>
</template>

<script>
    import Layout from '../../../src/components/layout/layout'
    import Header from '../../../src/components/layout/header'
    import Sider from '../../../src/components/layout/sider'
    import Content from '../../../src/components/layout/content'
    import Footer from '../../../src/components/layout/footer'
    export default {
        name: "layout-demo-2",
        components: {
            'x-layout': Layout,
            'x-header': Header,
            'x-sider': Sider,
            'x-content': Content,
            'x-footer': Footer
        }
    }
</script>

<style scoped lang='scss'>
    .headerDemo{
        background: #CCD3E0;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .siderDemo{
        background: #26272E;
        color: #fff;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .contentDemo{
        background: #646D78;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .footerDemo{
        background: #ABB4BF;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
