<template>
    <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "XRow",
        props: {
            gutter: {
                type: [Number, String]
            }
        },
        mounted() { // 在mounted钩子中，将gutter传递给它的子组件col
            console.log(this.$children);
            this.$children.forEach((vm) => {

                vm.gutter = this.gutter
            })
        }
    }

</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        margin-top: 20px;
    }
</style>
