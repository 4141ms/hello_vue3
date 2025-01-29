<template>
    <div class="app">
        <h2>Vue3组件间的通信</h2>
        <!-- 导航区 -->
        <div class="main">
            <div class="navigate">

                <RouterLink to="/props" active-class="active">1.props</RouterLink>
                <!-- <RouterLink :to="{name:'xinwen'}" active-class="active">新闻</RouterLink> -->
                <RouterLink :to="{path:'/event'}" active-class="active">2.自定义事件</RouterLink>
                <RouterLink :to="{path:'/mitt'}" active-class="active">3.mitt</RouterLink>
            </div>
            <!-- 展示区 -->
            <div class="main-content">
                <RouterView></RouterView>
                <!-- <Father /> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';
// import Header from './components/Header.vue';
</script>

<style scoped>
/* 设置基础字体和全局样式 */
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    margin: 0;
    padding: 0;
}

/* 容器样式 */
.app {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.main {
    display: flex;
    justify-content: space-around;
}

/* 标题样式 */
h2 {
    color: #333;
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
}

/* 导航区域样式 */
.navigate {
    display: flex;
    /* justify-content: center; */
    gap: 20px;
    margin-bottom: 30px;
    width: 15%;
    flex-direction: column;
}

/* 导航链接样式 */
.navigate a {
    text-decoration: none;
    background-color: white;
    color: #333;
    font-size: 16px;
    padding: 10px 20px;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
    border: 1px solid #007BFF;
}

/* 导航链接的悬停效果 */
.navigate a.active {
    background-color: #007BFF;
    color: white;
}

/* 展示区样式 */
.main-content {
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 4px;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
    border: 1px solid #9fc5ed;
    width: 70%;
}


</style>