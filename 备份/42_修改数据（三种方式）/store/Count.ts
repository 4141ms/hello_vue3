import {defineStore} from 'pinia'

export const useCountStore = defineStore('count', {
    actions: {
        increment(value: number){
            this.sum += value   //this 就是 这个store
        },
        sub(value:number){
            this.sum -= value
        }
    },
    //真正存储数据的地方
    state(){
        return {
            sum: 6,
            school: '浙财',
            address: '下沙'
        }
    }
})