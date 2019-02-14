<template>
    <div class="x-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XButtonGroup",
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn('x-button-group里的子元素应该是x-button，但你写的是${name}')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../css/basic.scss";
    .x-button-group{
        display: inline-flex;
        vertical-align: center;
        > .x-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child{
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover{
                position: relative;
                z-index: -1;
            }
        }
    }
</style>
