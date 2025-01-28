import {defineStore} from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'

export const useTalkStore = defineStore('talk', {
    actions:{
        async getATalk(){

            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            let obj = {id:nanoid(), title }
            this.talkList.unshift(obj)
            
        }
    },
    //真正存储数据的地方
    state(){
        return {
            talkList: [
                {id:'asdfg01', title:'今天你有点怪，怪好看的'}
            ]
        }
    }
})