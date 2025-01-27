<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <button @click="showDetail(news)">查看详情</button><!-- 实现点击click跳转路由 -->
                <RouterLink 
                    :to="{
                        name: 'xiang', 
                        query: {
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
import { useRouter } from 'vue-router';

    const newsList = reactive([
        {id: 'asdfg01', title:'很好的抗癌食物', content:'西兰花'},
        {id: 'asdfg02', title:'如何一夜暴富', content:'学IT'},
        {id: 'asdfg03', title:'震惊，万万没想到', content:'明天是周一'},
        {id: 'asdfg04', title:'好消息！好消息！', content:'快过年了'},
    ])

    interface newsInter{
        id: string,
        title: string,
        content: string,
    }
    let router = useRouter()

    // ts里要检查类型，需要限制一下
    function showDetail(news:newsInter){
        router.replace({ //to怎么写，这里就怎么写
            name: 'xiang', 
            query: {
                id: news.id,
                title: news.title,
                content: news.content
            }
        })
    }
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