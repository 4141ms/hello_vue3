import {defineStore} from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
    actions:{
        async getATalk(){

            let {data:{text:title}} = await axios.get('https://api.vv1234.cn/twqh/api.php?encode=json')
            console.log(title);
            // let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')

            let obj = {id:nanoid(), title }
            this.talkList.unshift(obj)

        }
    },
    //真正存储数据的地方
    state(){
        return {
            // 有可能 talkList 是 null，所以要加 as string约束一下
            talkList: JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    }
})