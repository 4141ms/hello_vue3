<template>
    <div class="person">
        <h1>情况二:监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue';

    //数据
    let person = ref({
        name: "张三",
        age: 14
    })
    
    //方法
    function changeName(){
        person.value.name = "李四"
    }

    function changeAge(){
        person.value.age = 18
    }

    function changePerson(){
        person.value = {
            name: "王五",
            age: 20
        }
    }
    
    /*
        监视，情况二：监视【ref】定义的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
        watch的第一个参数是：被监视的数据
        watch的第二个参数是：监视的回调
        watch的第三个参数是：配置对象（deep, immediate等等....）
    */
    let stopWatch = watch(person, (newVal, oldVal)=>{
        console.log("person变化了", newVal, oldVal);
    }, {deep:true})
    //使用immediate一开始就会调一次回调函数
    
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