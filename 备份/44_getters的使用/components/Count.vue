<template>
    <div class="count">
        <h3>当前求和为：{{ sum }}；放大10倍后：{{ bigSum }}</h3><br>
        <h3>学校：{{ school }}；大写：{{ upperSchool }}； 地址：{{ address }}</h3><br>
        <select v-model.number="n"> <!-- 加number，让n尽可能为number --> 
            <option value="1">1</option>
            <option value="2">2</option> 
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import { reactive, ref, toRefs } from 'vue';
    import { storeToRefs } from 'pinia';
    // 引入useCountStore
    import { useCountStore } from '@/store/Count';
    let countStore = useCountStore()

    // 可以拿到getters里的数据
    const {sum, school, address, bigSum, upperSchool} = storeToRefs(countStore)
    
    let n = ref(1)

    function add(){
        countStore.increment(n.value)

    }
    function minus(){
        countStore.sub(n.value)
    }
</script>

<style scoped>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
/* 并集选择器 */
select, button {
    margin: 0 5px;
    height: 25px;
}
</style>