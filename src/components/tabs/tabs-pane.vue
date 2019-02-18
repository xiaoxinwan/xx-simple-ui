<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-pane",
        inject: ['eventBus'],
        created() {

            this.eventBus.$on('update:selected', (name) => {
                console.log('pane知道了',name);
            })
        }
    }
</script>

<style scoped>
    .tabs-pane{

    }
</style>
