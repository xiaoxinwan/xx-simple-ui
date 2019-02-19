<template>
    <div class="popover" @click="handleClick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <div ref="triggerWrapper">
            <slot></slot>
        </div>
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
            handleClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        console.log('close2');

                        this.handleClose()
                    } else {
                        this.handleOpen()
                    }
                }
            },
            locateContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
            },
            eventHandler(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                console.log('close1');
                this.handleClose()
            },
            handleOpen() {
                this.visible = true
                this.$nextTick(() => {
                    this.locateContent()
                    document.addEventListener('click', this.eventHandler)
                })
            },
            handleClose() {
                this.visible = false
                document.removeEventListener('click', this.eventHandler)

            }

        }
    }
</script>

<style scoped lang='scss'>
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid #666666;
        transform: translateY(-120%);
    }
</style>
