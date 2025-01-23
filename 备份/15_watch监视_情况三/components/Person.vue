<template>
    <div class="person">
        <h1>情况三:监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watch } from 'vue';

    //数据
    let person = reactive({
        name: "张三",
        age: 14
    })
    let obj = reactive({
        a: {
            b: {
                c: 666
            }
        }
    })
    
    //方法
    function changeName(){
        person.name = "李四"
    }

    function changeAge(){
        person.age = 18
    }

    function changePerson(){
        Object.assign(person,{
            name: "王五",
            age: 20
        })
    }
    
    function test(){
        obj.a.b.c = 999
    }
    
    // 监视，情况三：监视【reactive】定义的【对象类型】数据，newVal, oldVal是一样的，因为地址值没有改变
    watch(person, (newVal, oldVal)=>{
        console.log("person变化了", newVal, oldVal);
    })
    // 默认是开启深度监视的，无法关闭
    watch(obj,(newVal, oldVal)=>{
        console.log("obj变化了", newVal, oldVal);
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