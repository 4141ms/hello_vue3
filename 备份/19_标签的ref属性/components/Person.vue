<template>
    <div class="person">
        <h1>中国</h1> 
        <!-- 是独占的作用，可以与其他vue文件重名，类似scoped的作用 -->
        <h2 ref="title2">北京</h2>
        <h3>哈哈哈</h3>
        <button @click="outH2">点我输出h2这个元素</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref,defineExpose } from 'vue';

    //创建一个title2,用于存储ref标记的内容
    let title2 = ref() //必须与上面模板里的ref一样
    
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)

    //方法
    function outH2(){
        console.log(title2.value);
    }
    
    //需要导出，父组件才能看到
    defineExpose({a:a.value, b, c})
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