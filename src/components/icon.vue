<template>
    <svg class="x-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import './iconfont'
    export default {
        name: "XIcon",
        props: ['name']
    }
</script>

<style lang="scss">
    .x-icon{
        width: 1em;
        height: 1em;
    }
</style>
