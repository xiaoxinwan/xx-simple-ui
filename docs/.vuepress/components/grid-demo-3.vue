<template>
    <div>
        <x-row>
            <x-col span="12" offset="1" class="demo">offset为1</x-col>
            <x-col span="3" offset="2" class="demo">offset为2</x-col>
            <x-col span="3" offset="3" class="demo">offset为3</x-col>
        </x-row>
        <br>
        <x-row >
            <x-col span="3" offset="3" class="demo">offset为4</x-col>
            <x-col span="4" offset="1" class="demo">offset为1</x-col>
            <x-col span="5" offset="3" class="demo">offset为3</x-col>
            <x-col span="3" offset="2" class="demo">offset为2</x-col>
        </x-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/grid/row'
    import Col from '../../../src/components/grid/col'
    export default {
        name: "grid-demo-3",
        components: {
            'x-row': Row,
            'x-col': Col
        }
    }
</script>

<style scoped lang='scss'>
    .demo{
        background: #CCD3E0;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-radius: 4px;
    }
</style>
