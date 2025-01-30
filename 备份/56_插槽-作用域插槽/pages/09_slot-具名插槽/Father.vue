<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Category>
                <!-- v-slot只能加在template标签和组件标签上 -->
                <template v-slot:s2>
                    <ul>
                        <li v-for="game in games" :key="game.id">{{ game.name }}</li>
                    </ul>
                </template>
                <template v-slot:s1>
                    <h4> 热门游戏列表 </h4>
                </template>
            </Category>
            <Category>
                <template v-slot:s2>
                    <img :src="imgUrl" alt=""></img>
                </template>
                <template v-slot:s1>
                    <h4> 今日美食城市 </h4>
                </template>
            </Category>
            <Category >
                <!-- 常用写法 -->
                <template #s2>
                    <video :src="videoUrl" controls></video>
                </template>
                <template #s1>
                    <h4> 今日影视推荐 </h4>
                </template>
            </Category>
        </div>
    </div>
</template>

<script lang="ts" setup name="Father">
import Category from './Category.vue';
import { reactive, ref } from 'vue';
    let games = reactive([
        {id:'asgytdfats01',name:'英雄联盟'},
        {id:'asgytdfats02',name:'王者农药'},
        {id:'asgytdfats03',name:'红色警戒'},
        {id:'asgytdfats04',name:'斗罗大陆'}
    ])

    let imgUrl = ref('https://pic2.zhimg.com/v2-df396f608d29d2866d62b766d5e4216a_1200x500.jpg')
    let videoUrl = ref('http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4')

</script>

<style scoped>
.father{
    background-color: rgb(165, 164, 164);
    padding: 20px;
    border-radius: 10px;
}
.content {
    display: flex;
    justify-content: space-evenly;
}

img,video {
    width: 100%;
}

h4 {
    background-color: orange;
    text-align: center;
    font-size: 20px;
    font-weight: 800;
  }
</style>