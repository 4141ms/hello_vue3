<template>
    <div class="father">
        <h3>父组件</h3>
        <Child1 />
        <Child2 />
    </div>
</template>

<script lang="ts" setup name="Father">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';
    let toy = ref('')
    function getToy(value:string){
        toy.value = value
    }
</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>