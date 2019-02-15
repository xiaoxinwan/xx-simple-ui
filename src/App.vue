<template>
  <div id="app">
    <div style="border: 1px solid black">
      <x-row gutter="20">
        <x-col>1</x-col>
        <x-col>2</x-col>
      </x-row>
      <x-row gutter="20">
        <x-col>1</x-col>
        <x-col>2</x-col>
        <x-col>3</x-col>
      </x-row>
      <!--<x-row>-->
        <!--<x-col span="2" offset="2">1</x-col>-->
        <!--<x-col span="20">2</x-col>-->
      <!--</x-row>-->
      <!--<x-row>-->
        <!--<x-col span="3" offset="2">3</x-col>-->
        <!--<x-col span="5" offset="4">5</x-col>-->
        <!--<x-col span="10">10</x-col>-->
      <!--</x-row>-->
      <x-row gutter="20">
        <x-col>1</x-col>
        <x-col>2</x-col>
        <x-col>3</x-col>
        <x-col>4</x-col>
        <x-col>5</x-col>
        <x-col>6</x-col>
        <x-col>7</x-col>
        <x-col>8</x-col>
        <x-col>9</x-col>
        <x-col>10</x-col>
        <x-col>11</x-col>
        <x-col>12</x-col>
        <x-col>13</x-col>
        <x-col>14</x-col>
        <x-col>15</x-col>
        <x-col>16</x-col>
        <x-col>17</x-col>
        <x-col>18</x-col>
        <x-col>19</x-col>
        <x-col>20</x-col>
        <x-col>21</x-col>
        <x-col>22</x-col>
        <x-col>23</x-col>
        <x-col>24</x-col>
      </x-row>
    </div>
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
