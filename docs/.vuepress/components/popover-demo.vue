<template>
    <div>
        <div style="margin-left: 200px">
            <x-popover position="left">
                <div slot="content" >
                    左左左左左左左左左左左左左左左左左左左左左左
                </div>
                <x-button>左</x-button>
            </x-popover>
            <x-popover position="top">
                <div slot="content" >
                    上上上上上上上上上上上上上上上上上上上上上上
                </div>
                <x-button>上</x-button>
            </x-popover>
            <x-popover position="bottom">
                <div slot="content" >
                    下下下下下下下下下下下下下下下下下下下下下下
                </div>
                <x-button>下</x-button>
            </x-popover>
            <x-popover position="right">
                <div slot="content" >
                    右右右右右右右右右右右右右右右右右右右右右右
                </div>
                <x-button>右</x-button>
            </x-popover>
        </div>
        <div style="margin-left: 200px; margin-top: 160px">
            <x-popover position="left" trigger="hover">
                <div slot="content" >
                    左左左左左左左左左左左左左左左左左左左左左左
                </div>
                <x-button>左</x-button>
            </x-popover>
            <x-popover position="top" trigger="hover">
                <div slot="content" >
                    上上上上上上上上上上上上上上上上上上上上上上
                </div>
                <x-button>上</x-button>
            </x-popover>
            <x-popover position="bottom" trigger="hover">
                <div slot="content" >
                    下下下下下下下下下下下下下下下下下下下下下下
                </div>
                <x-button>下</x-button>
            </x-popover>
            <x-popover position="right" trigger="hover">
                <div slot="content" >
                    右右右右右右右右右右右右右右右右右右右右右右
                </div>
                <x-button>右</x-button>
            </x-popover>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/components/button/button'
    import Popover from '../../../src/components/popover/popover'
    export default {
        name: "popover-demo",
        components: {
            'x-popover': Popover,
            'x-button': Button
        }
    }
</script>

<style scoped lang='scss'>

</style>
