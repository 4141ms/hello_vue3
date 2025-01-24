<template>
    <div class="person">
        <h1>需求：当水温达到60度时，或水位达到80cm时，给服务器发请求</h1> 
        <h2>当前水温：{{ temp }} C°</h2>
        <h2>当前水位：{{ height }} cm</h2>
        <button @click="changeTemp">水温+10</button>
        <button @click="changeHeight">水位+10</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { reactive, ref, watch, watchEffect } from 'vue';

    //数据
    let temp = ref(10)
    let height = ref(0)
    
    //方法
    function changeTemp(){
        temp.value += 10
    }

    function changeHeight(){
        height.value += 10
    }
    
    // 监视 watch监视，要明确指出监视的数据
    // watch([temp, height], (val)=>{
    //     let [newTemp, newHeight] = val
    //     //逻辑
    //     if (newTemp >= 60 || newHeight >= 80){
    //         console.log("给服务器发请求");
            
    //     }
    // })

    //watchEffect ---立即运行一个函数，不用指明监视的数据，函数中有用到什么，就监视什么
    watchEffect(()=>{
        if (temp.value >= 60 || height.value >= 80){
            console.log("给服务器发请求");
        }
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