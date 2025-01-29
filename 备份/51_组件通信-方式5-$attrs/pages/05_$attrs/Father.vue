<template>
    <div class="father">
        <h3>父组件  实现祖孙传递</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <Child :a="a" :b="b" :c="c" v-bind="{x: 100, y: 100}" :updateA="updateA"/>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from './Child.vue';
import { ref } from 'vue';

    let a = ref(1)
    let b = ref('b')
    let c = ref('c')

    function updateA(value:number){
        a.value += value
    }

</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>