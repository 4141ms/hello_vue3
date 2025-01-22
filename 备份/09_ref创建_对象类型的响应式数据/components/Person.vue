<template>
    <div class="person">
        <h2>汽车信息： 一辆{{car.brand}}，价值{{ car.price }}万</h2>
        <button @click="changeCarPrice">修改汽车价格</button>
        <h2>游戏列表：</h2>
        <ul v-for="g in games" :key="g.id">
            <li>{{ g.name }}</li>
        </ul>
        <button @click="changeFirstGameName">修改第一个游戏的名字</button>
    </div>
</template>

<script lang="ts" setup name="Person234">
import {reactive, ref} from 'vue' //引入reactive函数

    //数据
    let car = ref({brand: '奔驰', price: 200}) //使用ref，下面的function要加value，且里面的对象其实还是用的reactive
    let games = ref([
        {id: 'asd01', name: '麻将'},
        {id: 'asd02', name: '卡牌'},
        {id: 'asd03', name: '桌游'},
    ])

    //reactive包裹的对象是深层次的
    let obj = reactive({x:999})

    console.log(car);
    console.log(obj);
    
    //方法
    function changeCarPrice(){
        car.value.price += 1 
        console.log(car); 
    }

    function changeFirstGameName(){
        games.value[0].name = "塔罗牌"
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