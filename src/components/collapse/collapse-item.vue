<template>
    <div class="collapse-item">
        <div class="title" @click="handleClick" :data-name="name">
            <x-icon name="right" ref="icon" v-if="!hideIcon"></x-icon>
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '../../components/icon/icon'

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
            },
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false,
            }
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true
                    this.$refs.icon.$el.style.transform = 'rotate(90deg)'
                } else {
                    this.open = false
                    this.$refs.icon.$el.style.transform = 'rotate(360deg)'
                }
            })
        },
        methods: {
            handleClick() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
                } else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
                }
            }
        }
    }
</script>

<style scoped lang='scss'>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            border: 1px solid $grey;
            margin-top: -1px;
            margin-left: -1px;
            margin-right: -1px;
            min-height: 32px;
            display: flex;
            align-items: center;
            padding: 0 8px;

            > .x-icon {
                width: .8em;
                height: .8em;
                margin-right: .8em;
            }
        }

        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }

        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }

        > .content {
            padding: 8px;
        }

    }
</style>
