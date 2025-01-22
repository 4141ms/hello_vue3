<template>
    <div class="person">
        <h2>汽车信息： 一辆{{car.brand}}，价值{{ car.price }}万</h2>
        <button @click="changeCarBrand">修改汽车品牌</button>
        <button @click="changeCarPrice">修改汽车价格</button>
        <button @click="changeCar">修改汽车</button>
        <hr>
        <h2>当前求和：{{ sum }}</h2>
        <button @click="changeSum">点我sum+1</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import {reactive, ref} from 'vue' //引入reactive函数

    //数据
    let car = ref({brand: '奔驰', price: 200}) //reactive重新分配一个对象时，该对象不是响应式的
    let sum = ref(0)
    
    //方法
    function changeCarPrice(){
        car.value.price += 10 
    }

    function changeCarBrand(){
        car.value.brand = "奥迪"
    }

    function changeCar(){
        // car = {brand: '雅迪', price: 1} //这么写页面不更新
        // car = reactive({brand: '雅迪', price: 1}) //这么写页面不更新

        //下面这个写法，页面会更新,car用reactive定义
        // Object.assign(car, {brand: '雅迪', price: 1})

        //car用ref定义，加.value直接写也行
        car.value = {brand: '雅迪', price: 1}
        
    }

    function changeSum(){
        sum.value += 1
    }

</script>
<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
    li {
        font-size: 20px;
    }
</style>