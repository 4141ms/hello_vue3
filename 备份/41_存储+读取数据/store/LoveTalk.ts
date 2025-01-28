import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk', {
    //真正存储数据的地方
    state(){
        return {
            talkList: [
                {id:'asdfg01', title:'今天你有点怪，怪好看的'}
            ]
        }
    }
})