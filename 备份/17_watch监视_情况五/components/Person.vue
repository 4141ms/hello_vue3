<template>
    <div class="person">
        <h1>情况五:监视上述多个数据</h1> 
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1}}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeC1">修改第一台车</button>
        <button @click="changeC2">修改第二台车</button>
        <button @click="changeCar">修改整个车</button>
        
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watch } from 'vue';

    //数据
    let person = reactive({
        name: "张三",
        age: 14,
        car: {
            c1: "奔驰",
            c2: "奥迪"
        }
    })
    
    //方法
    function changeName(){
        person.name += "~"
    }

    function changeAge(){
        person.age += 1
    }
    
    function changeC1(){
        person.car.c1 = "爱玛"
    }
    function changeC2(){
        person.car.c2 = "大众"
    }
    function changeCar(){
        person.car = {
            c1: "c1",
            c2: "c2"
        }
    }
    // 监视，情况五:监视上述多个数据。若是没有改变watch不会被触发
    watch([()=>person.name, person.car], (newVal, oldVal)=>{
        console.log("person.name和person.car变化了", newVal, oldVal);
    })
    
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