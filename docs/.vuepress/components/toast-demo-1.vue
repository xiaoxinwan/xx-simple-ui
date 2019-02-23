<template>
    <div>
        <x-button @click="handleClick">点击这里</x-button>

        <x-button @click="handle">点击那里</x-button>
    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    export default {
        name: "toast-demo-1",
        components: {
            'x-button': Button,
        },
        methods: {
            handleClick() {
                this.$toast('没错，就是出现在这里了', {closeButton: {text: '关闭'}})
            },
            handle() {
                this.$toast('没错，就是出现在这里了', {closeButton: {text: '关闭'}, position: 'bottom'})

            }
        }
    }
</script>

<style  lang='scss'>
    .toastWrapper{
        &.position-top{
            top: 60px;
        }
    }

</style>
