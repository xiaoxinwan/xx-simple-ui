<template>
    <div>
        <x-button>你好</x-button>
        <x-button icon="thumb-up">你好</x-button>
        <x-button loading>加载中</x-button>
        <x-button icon="info" icon-position="left">信息</x-button>
        <x-button icon="info" icon-position="right">信息</x-button>

    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    export default {
        name: "button-demo",
        components: {
            'x-button': Button
        }
    }
</script>

<style scoped lang='scss'>

</style>
