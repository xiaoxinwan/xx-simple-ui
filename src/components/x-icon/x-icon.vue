<template>
    <svg class="x-icon" @click="$emit('click', $event)">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import '../../lib/svg'
    export default {
        name: "x-icon",
        props:['name']
    }
</script>

<style lang="scss" scoped>
    .x-icon{
        width: 1em;
        height: 1em;
    }
</style>
