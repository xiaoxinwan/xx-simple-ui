<template>
    <div class="toast" ref="toast" :class="toastClass">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="handleClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "XToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 50
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validate(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.closeToast()
                }, this.autoCloseDelay * 1000)
            }
            this.$nextTick(() => {
                this.$refs.line.style.height =
                    `${this.$refs.toast.getBoundingClientRect().height}px`
            })
        },
        computed: {
          toastClass() {
              return {
                  [`position-${this.position}`]: true
              }
          }
        },
        methods: {
            closeToast() {
                this.$el.remove()
                this.$destroy
            },
            handleClickClose() {
                this.closeToast()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this) // this --> 就是toast实例
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../css/basic.scss";

    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        background: $toast-bg;
        line-height: 1.8;
        color: #ffffff;
        box-shadow: 0 0 3px 0 $box-shadow-color;
        border-radius: $border-radius;
        position: fixed;
        left: 50%;
        display: flex;
        align-items: center;
        padding: 0 16px;
        .message {
            padding: 8px;
        }
        .line {
            border-left: 1px solid #666;
            height: 100%;
            margin-left: 16px;
        }
        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }
        &.position-top{
            top: 0;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom: 0;
            transform: translateX(-50%);
        }
        &.position-middle{
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }


</style>
