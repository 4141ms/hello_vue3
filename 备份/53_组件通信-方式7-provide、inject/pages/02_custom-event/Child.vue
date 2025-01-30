<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>玩具：{{ toy }}</h4>
        <!-- 点击触发事件 -->
        <button @click="emit('send-toy', toy)">把玩具给父亲</button>
    </div>
</template>

<script lang="ts" setup name="Child">
import { ref } from 'vue';
    let toy = ref('奥特曼')

    //声明事件，适用于子传父
    let emit = defineEmits(['send-toy'])

</script>

<style scoped>
.child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>