<template>
    <div>
        <x-row>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >1</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >2</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >3</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >4</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >5</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >6</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >7</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >8</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >9</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >10</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo"
            >11</x-col>
            <x-col span="24"
                   :ipad="{span: 8}"
                   :pc="{span: 4}"
                   :wide-pc="{span: 2}"
                   class="demo2"
            >12</x-col>
        </x-row>
    </div>
</template>

<script>
    import Row from '../../../src/components/grid/row'
    import Col from '../../../src/components/grid/col'

    export default {
        name: "grid-demo-4",
        components: {
            'x-row': Row,
            'x-col': Col
        }
    }
</script>

<style scoped lang='scss'>
    *{
        box-sizing: border-box;
    }
    .demo{
        background: #CCD3E0;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
    .demo2{
        background: #ABB4BF;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;

    }
</style>
