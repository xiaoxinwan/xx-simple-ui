<template>
    <div class="tabs-head" ref="head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (item, vm) => {
                let {width, height, top, left} = vm.$el.getBoundingClientRect()
                let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width = `${width}px`
                this.$refs.line.style.left = `${left - left2}px`
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-head {
        display: flex;
        height: 40px;
        justify-content: flex-start;
        border-bottom: 1px solid #dcdee2;
        position: relative;
        > .line{
            position: absolute;
            bottom: 0;
            border-bottom: 2px solid #4A90E2;
            transition: all 300ms;
        }
        > .actions-wrapper{
            margin-left: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 1em;
        }
    }
</style>
