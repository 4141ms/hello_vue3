<template>
    <div class="father">
        <h3>父组件 $refs:父传子； $parent:子传父</h3>
        <h4>房产：{{ house }}</h4>
        <button @click="changeToy">修改Child1的玩具</button>
        <button @click="changeComputer">修改Child2的电脑</button>
        <button @click="addChildBook($refs)">让所有孩子的书变多</button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>

<script lang="ts" setup name="Father">
import Child1 from './Child1.vue';
import Child2 from './Child2.vue';
import { ref } from 'vue';
    let house = ref(4)
    let c1 = ref()
    let c2 = ref()

    function changeToy(){
        c1.value.toy = '小猪佩奇'
    }
    function changeComputer(){
        c2.value.computer = '华为'
    }
    function addChildBook(refs: any){
        for (let key in refs){
            refs[key].book += 3
        }
    }

    // 向外部提供数据
    defineExpose({house})
</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>