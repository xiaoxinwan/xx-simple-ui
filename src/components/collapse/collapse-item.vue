<template>
    <div class="collapse-item">
        <div class="title" @click="handleClick">
            <x-icon name="right" ref="icon" v-if="!hideIcon"></x-icon>
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '@/components/icon'
    export default {
        name: "xCollapseItem",
        components: {'x-icon': Icon},
        props: {
            title: {
                type: String,
                required: true
            },
            hideIcon: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                open: false
            }
        },
        methods: {
            handleClick() {
                this.open = !this.open
                this.$refs.icon.$el.style.transform = this.open ? 'rotate(90deg)' : 'rotate(360deg)';
            }
        }
    }
</script>

<style scoped lang='scss'>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item{
        > .title{
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;
            > .x-icon{
                width: .8em;
                height: .8em;
                margin-right: .8em;
            }
        }
        &:first-child{
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content{
            padding: 8px;
        }

    }
</style>
