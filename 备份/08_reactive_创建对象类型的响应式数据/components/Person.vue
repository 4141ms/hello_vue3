<template>
    <div class="person">
        <h2>汽车信息： 一辆{{car.brand}}，价值{{ car.price }}万</h2>
        <button @click="changeCarPrice">修改汽车价格</button>
        <h2>游戏列表：</h2>
        <ul v-for="g in games" :key="g.id">
            <li>{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改第一个游戏的名字</button>
        <hr>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="changeObj">测试修改</button>
    </div>
</template>

<script lang="ts" setup name="Person234">
import {reactive} from 'vue' //引入reactive函数
    //数据
    let car = reactive({brand: '奔驰', price: 200}) //使用响应式对象用reactive
    let games = reactive([
        {id: 'asd01', name: '麻将'},
        {id: 'asd02', name: '卡牌'},
        {id: 'asd03', name: '桌游'},
    ])

    //reactive包裹的对象是深层次的
    let obj = reactive({
        a:{
            b:{
                c: 666
            }
        }
    })

    //方法

    function changeCarPrice(){
        car.price += 1 //注意：这样修改age，页面是没有变化的
        console.log(car); //age确实改了，但不是响应式的
    }

    function changeFirstGameName(){
        games[0].name = "塔罗牌"
    }

    function changeObj(){
        obj.a.b.c = 999
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