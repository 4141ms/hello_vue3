<template>
	<div class="app">
	  <h2>我是App组件</h2>
	  <!-- 等待异步组件时渲染一些额外的内容，让应用有更好的用户体验 -->
	  <Suspense>
		<template v-slot:default>
		  <Child/>
		</template>
		<template v-slot:fallback>
		  <h2>加载中......</h2>
		</template>
	  </Suspense>
	</div>
  </template>
  
  <script setup lang="ts" name="App">
	import {Suspense} from 'vue'
	import Child from './Child.vue'
  </script>
  
  <style>
	.app {
	  background-color: #ddd;
	  border-radius: 10px;
	  padding: 10px;
	  box-shadow: 0 0 10px;
	}
  </style>