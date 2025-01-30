<template>
    <div class="category">
        
        <!-- 给插槽命名-->
        <slot name="s1">默认内容1</slot>
        <slot name="s2">默认内容2</slot>
    </div>
</template>

<script lang="ts" setup name="Category">

defineProps(['title'])
</script>

<style scoped>
.category{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    width: 200px;
    height: 300px;
    padding-top: 20px;
    border-radius: 10px;
    
}
h3 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>