<template>
    <div class="popover" @click.stop="xxx">
        <div class="content-wrapper" v-if="visible" @click.stop>
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
                this.visible = !this.visible
                if (this.visible === true) {
                    setTimeout(() => {
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid #666666;
            margin-bottom: .5em;
        }
    }
</style>
