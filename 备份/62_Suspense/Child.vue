<template>
  <div class="child">
    <h2>我是Child组件</h2>
    <h3>当前求和为：{{ sum }}</h3>
  </div>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  import axios from 'axios'

  let sum = ref(0)
  // setup语法糖里面已经包含了 async,顶层async
  let {data:{text}} = await axios.get('https://api.vv1234.cn/twqh/api.php?encode=json')
  console.log(text)

</script>

<style scoped>
  .child {
    background-color: skyblue;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 0 10px;
  }
</style>