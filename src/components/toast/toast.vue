<template>
    <div class="toastWrapper" :class="toastClass">
        <div class="toast" ref="toast">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="handleClickClose">
            {{closeButton.text}}
        </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "XToast",
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: 5,
                validator(value) {
                    return value === false || typeof value === 'number';
                }
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
                default: 'middle',
                validate(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.closeToast()
                }, this.autoClose * 1000)
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
                this.$emit('close')
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
    @keyframes slide-up {
        0% {opacity: 0; transform: translateY(100%);}
        100% {opacity: 1; transform: translateY(0);}
    }
    @keyframes slide-down {
        0% {opacity: 0; transform: translateY(-100%);}
        100% {opacity: 1; transform: translateY(0);}
    }
    @keyframes fade-in {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    $animation-duration: 300ms;
    .toastWrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        &.position-top {
            top: 0;
            .toast{
                border-top-left-radius: 0;
                border-top-right-radius: 0;
                animation: slide-down $animation-duration;
            }
        }
        &.position-bottom {
            bottom: 0;
            .toast{
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                animation: slide-up $animation-duration;
            }
        }
        &.position-middle {
            top: 50%;
            .toast{
                animation: fade-in $animation-duration;
            }
        }
    }
    .toast {
        font-size: $font-size;
        min-height: $toast-min-height;
        background: $toast-bg;
        line-height: 1.8;
        color: #ffffff;
        box-shadow: 0 0 3px 0 $box-shadow-color;
        border-radius: $border-radius;
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
    }


</style>
