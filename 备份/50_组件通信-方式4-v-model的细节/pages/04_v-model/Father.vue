<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>{{ username }}</h4>
        <h4>{{ password }}</h4>

        <!-- 可以改名，并传递多个参数 -->
        <Wang 
            v-model:ming="username"
            v-model:mima="password"
        />


    </div>
</template>

<script lang="ts" setup name="Father">
import { ref } from 'vue';
import Wang from './Wang.vue';
    let username = ref('wang')
    let password = ref('1011')
</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
</style>