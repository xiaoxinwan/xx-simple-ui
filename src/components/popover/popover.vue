<template>
    <div class="popover"  ref="popover">
        <div ref="contentWrapper" class="content-wrapper"
             v-if="visible"
             :class="{[`position-${this.position}`]: true}"
        >
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
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
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            },
            trigger: {
                type: String,
                default: 'click',
                validator(value) {
                    return ['click', 'hover'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            if (this.trigger === 'click') {
                this.$refs.popover.addEventListener('click', this.handleClick)
            }else {
                this.$refs.popover.addEventListener('mouseenter', this.handleOpen)
                this.$refs.popover.addEventListener('mouseleave', this.handleClose)
            }
        },
        beforeDestroy(){
            if (this.trigger === 'click') {
                this.$refs.popover.removeEventListener('click', this.handleClick)
            }else {
                this.$refs.popover.removeEventListener('mouseenter', this.handleOpen)
                this.$refs.popover.removeEventListener('mouseleave', this.handleClose)
            }
        },
        methods: {
            handleClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.handleClose()
                    } else {
                        this.handleOpen()
                    }
                }
            },
            locateContent() {
                const {contentWrapper, triggerWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
                const {height: height2} = contentWrapper.getBoundingClientRect()
                let contentPositions = {
                    top: {top: top + window.scrollY, left: left + window.scrollX},
                    bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
                    left: {top: top + window.scrollY + (height - height2) / 2, left: left + window.scrollX},
                    right: {top: top + window.scrollY + (height - height2) / 2, left: left + width + window.scrollX},
                }
                contentWrapper.style.left = contentPositions[this.position].left + 'px'
                contentWrapper.style.top = contentPositions[this.position].top + 'px'

            },
            eventHandler(e) {
                if (this.$refs.popover && (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
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

    /* 请注意，popover里面默认加了word-break: break-all */
    .content-wrapper {
        position: absolute;
        border: 1px solid #666666;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            margin-top: -10px;
            transform: translateY(-100%);

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-top-color: #666666;
                top: 100%;
            }

            &::after {
                border-top-color: #ffffff;
                top: calc(100% - 1px);
            }
        }

        &.position-bottom {
            margin-top: 10px;

            &::before, &::after {
                left: 10px;
            }

            &::before {
                border-bottom-color: #666666;
                bottom: 100%;
            }

            &::after {
                border-bottom-color: #ffffff;
                bottom: calc(100% - 1px);
            }
        }

        &.position-left {
            margin-left: -10px;
            transform: translateX(-100%);

            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
            }

            &::before {
                border-left-color: #666666;
                left: 100%;
            }

            &::after {
                border-left-color: #ffffff;
                left: calc(100% - 1px);
            }
        }

        &.position-right {
            margin-left: 10px;

            &::before, &::after {
                top: 50%;
                transform: translateY(-50%);
            }

            &::before {
                border-right-color: #666666;
                right: 100%;
            }

            &::after {
                border-right-color: #ffffff;
                right: calc(100% - 1px);
            }
        }

    }
</style>
