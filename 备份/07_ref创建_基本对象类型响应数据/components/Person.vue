<template>
    <div class="person">
        <h2>姓名： {{name}}</h2>
        <h2>年龄： {{age}}</h2>
        <button @click="changeName">修改名字</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button>
    </div>
</template>

<script lang="ts" setup name="Person234">
import {ref} from 'vue' //引入ref函数
    //数据
    let name = ref('张三') //需要响应式的就用 ref
    let age = ref(18)
    let tel = '13000000'

    //方法
    function changeName(){
        name.value = "zhang-san" // 响应式的数据，这里要用 name.value;模板里面不用
        console.log(name); //
        console.log(name.value);
        
    }
    function showTel(){
        alert(tel)
    }
    function changeAge(){
        age.value += 1 //注意：这样修改age，页面是没有变化的
        console.log(age); //age确实改了，但不是响应式的
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
</style>