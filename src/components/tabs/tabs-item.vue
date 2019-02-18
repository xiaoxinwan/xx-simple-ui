<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-item",
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        inject: ['eventBus'],
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            })
        },

        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name, this)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        color: #333;
        font-size: 14px;
        font-family: PingFangSC-Regular, Arial, "Helvetica Neue", Helvetica, sans-serif;
        &.active{
            color: #4A90E2;
        }
    }
</style>
