<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
import {useTalkStore} from '@/store/LoveTalk'
import { storeToRefs } from 'pinia'

    let talkStore = useTalkStore()
    let {talkList} = storeToRefs(talkStore)

    function getLoveTalk(){
        // 需要magic
        talkStore.getATalk()
    }
</script>

<style scoped>
.talk {
    margin-top: 10px;
    background-color: orange;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
</style>