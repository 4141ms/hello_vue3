<template>
    <Person v-if="isShow" /> 
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Person from './components/Person.vue';
    let isShow = ref(true)

    //子组件挂载完毕，父组件其后，类似树的DFS
    //挂载完毕
    onMounted(()=>{
        console.log('父----挂载完毕');
    })

</script>

<style scoped>
</style>