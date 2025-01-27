<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <!-- 第一种写法 -->
                <!-- <RouterLink :to="`/news/detail/${news.id}/${news.title}/${news.content}`">{{ news.title }}</RouterLink> -->
                
                <!-- 第二种写法 -->
                <RouterLink 
                    :to="{
                        name: 'xiang', //当使用params参数时，只能用 name
                        params: {
                            id: news.id,
                            title: news.title,
                            content: news.content
                        }
                    }">
                    {{ news.title }}
                </RouterLink>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="New">
import { reactive } from 'vue';


    const newsList = reactive([
        {id: 'asdfg01', title:'很好的抗癌食物', content:'西兰花'},
        {id: 'asdfg02', title:'如何一夜暴富', content:'学IT'},
        {id: 'asdfg03', title:'震惊，万万没想到', content:'明天是周一'},
        {id: 'asdfg04', title:'好消息！好消息！', content:'快过年了'},
    ])
</script>

<style scoped>
    .news {
        display: flex;
        justify-content: flex-start;
    }
    .news-content {
        border: 1px solid black;
    }
    ul {
        width: 30%
    }

    .news-content {
        width: 70%;
    }
</style>