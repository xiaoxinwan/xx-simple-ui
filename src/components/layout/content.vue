<template>
    <div class="x-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XContent"
    }
</script>

<style lang="scss" scoped>
    .x-content{
        flex-grow: 1;
    }
</style>
