<template>
    <div class="child">
        <h3>子组件2</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4 v-show="toy">哥哥给的玩具：{{ toy }}</h4>
        <!-- <button @click="sendToy(toy)">把玩具给父亲</button> -->
    </div>
</template>

<script lang="ts" setup name="Child2">
import { ref, onUnmounted } from 'vue';
import emitter from '@/utils/emitter';
    let computer = ref('联想')
    let toy = ref('')

    // 绑定事件
    emitter.on('send-toy',(value:any)=>{
        toy.value = value
    })

    // 组件销毁时要进行解绑
    onUnmounted(()=>{
        emitter.off('send-toy')
    })
</script>

<style scoped>
.child{
    background-color: skyblue;
    padding: 10px;
    margin: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>