<template>
    <div class="game">
        <h3>游戏列表</h3>
        <!-- 把数据放到插槽，使父组件可以使用 -->
        <slot :youxi="games" x="哈哈" y="你好"></slot>
    </div>
</template>

<script lang="ts" setup name="Game">
import { reactive } from 'vue';
    let games = reactive([
        {id:'asgytdfats01',name:'英雄联盟'},
        {id:'asgytdfats02',name:'王者农药'},
        {id:'asgytdfats03',name:'红色警戒'},
        {id:'asgytdfats04',name:'斗罗大陆'}
    ])
</script>

<style scoped>
.game{
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