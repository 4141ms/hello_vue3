<template>
    <div class="grand-child">
        <h3>孙组件</h3>
        <h4>a: {{ a }}</h4>
        <h4>b: {{ b }}</h4>
        <h4>c: {{ c }}</h4>
        <h4>x: {{ x }}</h4>
        <h4>y: {{ y }}</h4>
        <button @click="updateA(1)">点击a+1</button>
    </div>
</template>

<script lang="ts" setup name="GrandChild">
import { ref, defineProps } from 'vue';

    defineProps(['a', 'b', 'c', 'x', 'y', 'updateA'])

</script>

<style scoped>
.grand-child{
    background-color: orange;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>