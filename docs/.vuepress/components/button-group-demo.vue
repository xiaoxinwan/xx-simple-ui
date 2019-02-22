<template>
    <div>
        <div style="margin-bottom: 15px">
            <x-button-group>
                <x-button icon="left">上一页</x-button>
                <x-button icon="right" icon-position="right">下一页</x-button>
            </x-button-group>
        </div>
        <div>
            <x-button-group>
                <x-button>第一页</x-button>
                <x-button>第二页</x-button>
                <x-button>第三页</x-button>
            </x-button-group>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    import ButtonGroup from '../../../src/components/button/button-group'
    export default {
        name: "button-group-demo",
        components: {
            'x-button-group': ButtonGroup,
            'x-button': Button
        }
    }
</script>

<style scoped lang='scss'>

</style>
