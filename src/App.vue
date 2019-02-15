<template>
  <div id="app">
    <x-row>
      <x-col>1</x-col>
      <x-col>2</x-col>
    </x-row>
    <x-row>
      <x-col>1</x-col>
      <x-col>2</x-col>
      <x-col>3</x-col>
    </x-row>
    <x-row>
      <x-col span="2">1</x-col>
      <x-col span="22">2</x-col>
    </x-row>
    <!--<x-input value="张三" disabled></x-input>-->
    <!--<x-input value="李四"></x-input>-->
    <!--<x-input value="李新喜" readonly></x-input>-->

    <!--<div style="margin-top: 20px">-->
      <!--<x-input value="李一一一" error="姓名不能多于4个字"></x-input>-->
    <!--</div>-->
    <!---->
    <!--<x-button>你好</x-button>-->
    <!--<x-button icon="download">下载</x-button>-->
    <!--<x-button icon="thumb-up" icon-position="right">点赞</x-button>-->
    <!--<x-button loading>加载中</x-button>-->

    <!--<br>-->
    <!--<x-button-group class="buttonGroup">-->
      <!--<x-button icon="left">向左</x-button>-->
      <!--<x-button icon="right" icon-position="right">向右</x-button>-->
    <!--</x-button-group>-->
  </div>
</template>

<script>
import Button from './components/button/button.vue'
import ButtonGroup from './components/button/button-group.vue'
import Input from './components/input/input.vue'
import Row from './components/grid/row'
import Col from './components/grid/col'
export default {
  name: 'app',
  components: {
    "x-button":Button,
    "x-button-group":ButtonGroup,
    'x-input':Input,
    'x-row':Row,
    'x-col':Col
  }
}
</script>

<style>
  /*.buttonGroup{*/
    /*margin-top: 10px;*/
  /*}*/
</style>
