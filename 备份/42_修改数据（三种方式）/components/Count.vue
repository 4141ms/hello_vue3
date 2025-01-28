<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2><br>
        <h2>学校：{{ countStore.school }}；地址：{{ countStore.address }}</h2><br>
        <select v-model.number="n"> <!-- 加number，让n尽可能为number --> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="jian">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import { reactive, ref } from 'vue';
    import { useCountStore } from '@/store/Count';

    let countStore = useCountStore()

    let n = ref(1)

    function add(){
        // 第一种修改方式
        // countStore.sum += 1

        //第二种修改方式 批量修改
        // countStore.$patch({
        //     sum: 22,
        //     school: '浙江财经大学',
        //     address: '杭州'
        // })

        //第三种修改方式 actions
        countStore.increment(n.value)

    }
    function jian(){
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