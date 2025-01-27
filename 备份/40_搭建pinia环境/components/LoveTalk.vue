<template>
    <div class="talk">
        <button @click="getLoveTalk">获取一句土味情话</button>
        <ul>
            <li v-for="item in talkList" :key="item.id">{{ item.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
    import { reactive } from 'vue';
    import axios from 'axios';
    import { nanoid } from 'nanoid';

    let talkList = reactive([
        {id:'asdfg01', title:'今天你有点怪，怪好看的'}
    ])

    async function getLoveTalk(){
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

        let obj = {id:nanoid(), title }
        talkList.unshift(obj)
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