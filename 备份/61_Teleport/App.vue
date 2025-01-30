<template>
	<div class="outer">
	  <h2>我是App组件</h2>
	  <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
	  <br>
	  <Modal/>
	</div>
  </template>
  
  <script setup lang="ts" name="App">
	import Modal from "./Modal.vue";
  </script>
  
  <style>
	.outer{
	  background-color: #ddd;
	  border-radius: 10px;
	  padding: 5px;
	  box-shadow: 0 0 10px;
	  width: 400px;
	  height: 400px;
	  /* 加了下面这个滤镜以后，position：fixed 是不管用的 */
	  filter: saturate(200%); 
	}
	img {
	  width: 270px;
	}
  </style>