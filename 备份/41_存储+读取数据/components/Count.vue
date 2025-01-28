<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2><br>
        <select v-model.number="n"> <!-- 加number，让n尽可能为number --> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="add">加</button>
        <button @click="sub">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import { reactive, ref } from 'vue';
    import { useCountStore } from '@/store/Count';

    let countStore = useCountStore()
    
    // 两种写法读取 store 中的数据
    // console.log(countStore.sum);
    // console.log(countStore.$state.sum);
    
    // let obj = reactive({
    //     a:1, 
    //     b:2,
    //     c:ref(3)
    // })
    // console.log(obj.a);
    // console.log(obj.c);//这里不需要obj.c.value, vue会自动将reactive中的ref解析出来
    
    

    let sum = ref(1)
    let n = ref(1)

    function add(){
        sum.value += n.value
    }
    function sub(){
        sum.value -= n.value
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