<template>
    <div class="col" :class="[`col-${span}`]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XCol",
        props: {
            span: {
                type: [Number, String]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .col{
        height: 100px;
        background: #aaa;
        width: 50%;
        border: 1px solid #f1453d;
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24)*100%;
            }
        }
    }
</style>
