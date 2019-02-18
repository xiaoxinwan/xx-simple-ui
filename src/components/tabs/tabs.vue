<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value){
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            }
        },
        data() {
            return {eventBus: new Vue()}
        },
        provide() {
            return {eventBus: this.eventBus}
        },
        methods: {

        }


    }
</script>

<style lang="scss" scoped>/**/
    .tabs{

    }
</style>
