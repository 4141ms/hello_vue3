<template>
    <div class="child">
        <h3>子组件2</h3>
        <h4>电脑：{{ computer }}</h4>
        <h4>书籍：{{ book }}</h4>
    </div>
</template>

<script lang="ts" setup name="Child2">
import { ref, onUnmounted } from 'vue';
    let computer = ref('联想')
    let book = ref(1)

    defineExpose({computer, book})
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