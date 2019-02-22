<template>
    <div>
        <div>
            <x-row>
                <x-col span="24" class="demo">24</x-col>
            </x-row>
        </div>
        <div style="margin-top: 10px">
            <x-row>
                <x-col span="12" class="demo">12</x-col>
                <x-col span="12" class="demo demo12">12</x-col>
            </x-row>
        </div>
        <div style="margin-top: 10px">
            <x-row>
                <x-col span="8" class="demo">8</x-col>
                <x-col span="8" class="demo demo12">8</x-col>
                <x-col span="8" class="demo">8</x-col>
            </x-row>
        </div>
        <div style="margin-top: 10px">
            <x-row>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
                <x-col span="2" class="demo">2</x-col>
                <x-col span="2" class="demo demo12">2</x-col>
            </x-row>
        </div>
    </div>
</template>

<script>
    import Row from '../../../src/components/grid/row'
    import Col from '../../../src/components/grid/col'
    export default {
        name: "grid",
        components: {
            'x-row': Row,
            'x-col': Col
        }
    }
</script>

<style scoped lang='scss'>
    .demo{
        background: #CCD3E0;
        min-height: 50px;
        line-height: 50px;
        border-radius: 4px;
        text-align: center;
    }
    .demo12{
        background: #ABB4BF;
    }
</style>
