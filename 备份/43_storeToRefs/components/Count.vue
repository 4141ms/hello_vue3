<template>
    <div class="count">
        <h2>当前求和为：{{ sum }}</h2><br>
        <h2>学校：{{ school }}；地址：{{ address }}</h2><br>
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
    // 使用useCountStore，得到一个专门保存count相关的store
    let countStore = useCountStore()
    // storeToRefs 只会关注store中的数据，不会对方法进行ref包裹
    const {sum, school, address} = storeToRefs(countStore)
    // 这样的话countStore里的方法也会变成ref的
    // console.log('!!!!!!', toRefs(countStore));
    
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