<template>
    <div class="child">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <!-- 触发事件 -->
        <button @click="emitter.emit('send-toy', toy)">把玩具给弟弟</button>
    </div>
</template>

<script lang="ts" setup name="Child1">
import { ref, defineProps } from 'vue';
import emitter from '@/utils/emitter';
    let toy = ref('奥特曼')
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