<template>
    <div class="col" :class="colClass" :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XCol",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data() {
            return {
                // 从父组件传递过来的，要用gutter去接收它
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col {
        height: 100px;
        width: 50%;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-right: ($n/24)*100%; //margin-right还是left 取决于offset 写的元素，写在首个就right，后面的就是left
            }
        }
    }
</style>
