<template>
    <div class="child">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>书籍：{{ book }}</h4>
        
        <button @click="subHouse($parent)">去掉父亲的一套房产</button>
    </div>
</template>

<script lang="ts" setup name="Child1">
import { ref, defineProps } from 'vue';
    let toy = ref('奥特曼')
    let book = ref(1)

    function subHouse(ref:any){
        ref.house -= 1
    }

    defineExpose({toy, book})
</script>

<style scoped>
.child{
    background-color: skyblue;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>