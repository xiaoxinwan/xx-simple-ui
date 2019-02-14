<template>
  <div id="app">
    <x-button>你好</x-button>
    <x-button icon="download">下载</x-button>
    <x-button icon="thumb-up" icon-position="right">点赞</x-button>
    <x-button loading>加载中</x-button>

    <br>
    <x-button-group class="buttonGroup">
      <x-button icon="left">向左</x-button>
      <x-button icon="right" icon-position="right">向右</x-button>
    </x-button-group>
  </div>
</template>

<script>
import Button from './components/button/button.vue'
import ButtonGroup from './components/button/button-group.vue'
export default {
  name: 'app',
  components: {
    "x-button":Button,
    "x-button-group":ButtonGroup
  }
}
</script>

<style>
  .buttonGroup{
    margin-top: 10px;
  }
</style>
