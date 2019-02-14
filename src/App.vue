<template>
  <div id="app">
    <x-button>你好</x-button>
    <x-button icon="download">下载</x-button>
    <x-button icon="thumb-up" icon-position="right">点赞</x-button>
    <x-button loading="loading" icon="loading" >加载中</x-button>
  </div>
</template>

<script>
import Button from './components/button'
export default {
  name: 'app',
  components: {
    "x-button":Button
  }
}
</script>
