<template>
    <div>
        <x-row class="demoRow" gutter="20">
            <x-col span="8">
                <div class="demoCol">gutter为20</div>
            </x-col>
            <x-col span="8">
                <div class="demoCol">gutter为20</div>
            </x-col>
            <x-col span="8">
                <div class="demoCol">gutter为20</div>
            </x-col>
        </x-row>
        <x-row class="demoRow" gutter="30">
            <x-col span="6">
                <div class="demoCol">gutter为30</div>
            </x-col>
            <x-col span="6">
                <div class="demoCol">gutter为30</div>
            </x-col>
            <x-col span="6">
                <div class="demoCol">gutter为30</div>
            </x-col>
            <x-col span="6">
                <div class="demoCol">gutter为30</div>
            </x-col>
        </x-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/grid/row'
    import Col from '../../../src/components/grid/col'
    export default {
        name: "grid-demo-2",
        components: {
            'x-row': Row,
            'x-col': Col
        }
    }
</script>

<style scoped lang='scss'>
    * {
        box-sizing: border-box;
    }
    .demoRow{
        margin: 10px 0;
    }
    .demoCol {
        height: 50px;
        background: #CCD3E0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
</style>
