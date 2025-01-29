<template>
    <div class="father">
        <h3>父组件</h3>
        <!-- v-model 用在html标签上,下面两种写法是等价的 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- 底层写法，  -->                         <!-- 这里用了断言，否则会有警告  -->
        <!-- <input type="text" :value="username" @input="(<HTMLInputElement>$event.target).value"> -->
        

        <!-- v-model 用在model标签上 -->
        <Wang v-model="username"/>  <!-- 这样是没有用的，UI组件库中的使用；需要在组件里写好默认的内容 -->
        <!-- 这是本质写法  -->
        <!-- <Wang 
            :modelValue="username"
            @update:modelValue="username = $event" 
        /> -->

        <!--
            $event 什么时候能 .target
            对于原生事件，$event就是事件对象  ===》 能 .target 
            对于自定义事件，$event就是触发事件时，所传递的数据 ==》不能 .target 
        -->


    </div>
</template>

<script lang="ts" setup name="Father">
import { ref } from 'vue';
import Wang from './Wang.vue';
    let username = ref('')
</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>