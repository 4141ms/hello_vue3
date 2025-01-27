<template>
    <ul class="news-list">
        <li>编号：{{ query.id }}</li>
        <li>标题：{{ query.title }}</li>
        <li>内容：{{ query.content }}</li>
    </ul>
</template>

<script lang="ts" setup name="Detail">
    import { toRefs } from 'vue';
    import { useRoute } from 'vue-router';
    
    let route = useRoute() //这是一个hook 
    let {query} = toRefs(route) //从route上解构出query， 注意加toRef，否则不是响应式的
    
</script>

<style scoped>
    .news-list {
        list-style: none;
        padding-left: 20px;
    }
    .news-list>li {
        line-height: 30px;
    }
</style>