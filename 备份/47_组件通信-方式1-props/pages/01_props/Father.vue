<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>汽车：{{ car }}</h4>
        <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
        <!-- 父传子属性值为非函数，子传父属性值为函数 -->
        <Child :car="car" :sendToy="getToy"/>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child from './Child.vue';
import { ref } from 'vue';
    let car = ref('奔驰')
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