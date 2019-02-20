<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "xCollapse",
        props: {
            single: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
                return {
                    eventBus: this.eventBus
                }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('update:addSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    selectedCopy = [name]  // 假若为single，则直接等于当前的name
                } else {
                    selectedCopy.push(name) // 不single，将name 添加到数组中
                }
                this.eventBus.$emit('update:selected', selectedCopy)  // 通知子代，已经增加好的数组
                this.$emit('update:selected', selectedCopy) // 向外通知，已经增加好的数组
            })

            this.eventBus.$on('update:removeSelected', (name) => {
                let selectedCopy = JSON.parse(JSON.stringify(this.selected)) // 深拷贝，避免操作this.selected
                let index = selectedCopy.indexOf(name)
                selectedCopy.splice(index, 1)

                this.eventBus.$emit('update:selected', selectedCopy) // 通知子代，已经减少的数组
                this.$emit('update:selected', selectedCopy) // 向外通知，已经减少的数组
            })
            this.$children.forEach((vm)=>{
                vm.single = this.single
            })

        }
    }
</script>

<style scoped lang='scss'>
    $grey: #ddd;
    $border-radius: 4px;
    .collapse{
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>
