<template>
    <div class="child">
        <h3>子组件</h3>
        <GrandChild v-bind='$attrs'/>
    </div>
</template>

<script lang="ts" setup name="Child">
import GrandChild from './GrandChild.vue';
import { ref, defineProps } from 'vue';
   
</script>

<style scoped>
.child{
    background-color: skyblue;
    padding: 10px;
    box-shadow: 0 0 10px black;
    border-radius: 10px;
}
</style>