<template>
    <div>
        <x-icon name="info"></x-icon>
        <x-icon name="error"></x-icon>
        <x-icon name="loading"></x-icon>
        <x-icon name="left"></x-icon>
        <x-icon name="down"></x-icon>
        <x-icon name="download"></x-icon>
        <x-icon name="right"></x-icon>
        <x-icon name="setting"></x-icon>
        <x-icon name="thumb-up"></x-icon>
    </div>
</template>

<script>
    import Icon from '../../../src/components/icon/icon'
    export default {
        name: "icon-demo.vue",
        components: {
            'x-icon': Icon
        }
    }
</script>

<style scoped lang='scss'>
    .x-icon{
        margin-right: 1em;
    }
</style>
