<template>
    <div class="person">
        <!-- 
            监视的是对象里的属性。最好写成函数式。
            若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视
         -->
        <h1>情况四:监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h1>    
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
    // 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
    watch(()=>person.name, (newVal, oldVal)=>{
        console.log("person.name变化了", newVal, oldVal);
    })

    //监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写（监视细枝末节，不关注整体），
    // 也能写成函数，更推荐写成函数（只看整体；开启深度监视，则整个都能监视）
    watch(()=>person.car, (newVal, oldVal)=>{
        console.log("person.car变化了", newVal, oldVal);
    },{deep:true})
    
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