<template>
    <div class="father">
        <h3>父组件</h3>
        <div class="content">
            <Game>
                <!-- 拿到插槽上的数据 -->
                <template v-slot="params">
                    <ul>
                        <li v-for="game in params.youxi" :key="game.id">{{ game.name }}</li>
                    </ul>
                </template>
            </Game>
            <Game>
                <template v-slot="params">
                    <ol>
                        <li v-for="game in params.youxi" :key="game.id">{{ game.name }}</li>
                    </ol>
                </template>
            </Game>
            <Game>
                <!-- 可以有名字 -->
                <template v-slot:default="params">
                    <h3 v-for="game in params.youxi" :key="game.id">{{ game.name }}</h3>
                </template>
            </Game>
        </div>
    </div>
</template>

<script lang="ts" setup name="Father">
import Game from './Game.vue';

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
</style>