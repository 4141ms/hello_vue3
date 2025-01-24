<template>
    <!-- 注意这里要加：，表示是表达式 -->
    <Person a="哈哈哈" :list="personList"/> 
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Person from './components/Person.vue';
import { type Persons } from './types';
    //使用这种写法
    let personList = reactive<Persons>([
        {id: "ahsj01", name: "张三", age:18},
        {id: "ahsj02", name: "李四", age:10},
        {id: "ahsj03", name: "王五", age:5}
    ])
</script>

<style scoped>
</style>