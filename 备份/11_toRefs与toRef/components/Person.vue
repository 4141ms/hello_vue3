<template>
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}, {{ nl }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, toRef, toRefs } from 'vue';


    let person = reactive({
        name: "张三",
        age: 18
    })

    //指针引用
    let {name, age} = toRefs(person) //{name, age} = person这样是不成功的，相当于值引用
    let nl = toRef(person, 'age')
    console.log(nl.value);

    function changeName(){
        name.value = "李四"
    }

    function changeAge(){
        age.value += 1
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