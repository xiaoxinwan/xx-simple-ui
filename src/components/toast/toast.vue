<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XToast"
    }
</script>

<style lang="scss" scoped>
    @import "../../css/basic.scss";
    .toast{
        font-size: $font-size;
        height: $toast-height;
        background: $toast-bg;
        color: #ffffff;
        box-shadow: 0 0 3px 0 $box-shadow-color;
        border-radius: $border-radius;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        padding: 0 16px;
    }
</style>
