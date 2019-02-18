<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject: ['eventBus'],
        created() {
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-head {
        display: flex;
        height: 40px;
        justify-content: flex-start;
        > .actions-wrapper{
            margin-left: auto;
        }
    }
</style>
