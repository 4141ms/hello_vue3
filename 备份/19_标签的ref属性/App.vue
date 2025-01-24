<template>
    <h1 ref="title2">app</h1> <!-- ref加在html标签上，返回的是dom对象  -->
    <button @click="outH2">点我输出app里的h2</button>
    <Person ref="ren"/> <!-- ref加在组件上，返回的就是实例对象  -->
    <button @click="test">测试</button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Person from './components/Person.vue';

    let title2 = ref()
    let ren = ref()

    function outH2(){
        console.log(title2.value);
    }

    function test(){
        console.log(ren.value);
    }
</script>

<style scoped>
</style>