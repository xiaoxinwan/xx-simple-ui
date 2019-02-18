<template>
    <div class="popover" @click="xxx">
        <div class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XPopover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            xxx() {
                return this.visible = !this.visible
            }
        }

    }
</script>

<style scoped lang='scss'>
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .content-wrapper{
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid #666666;
            margin-bottom: .5em;
        }
    }
</style>
