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
    state(){
        return {
            sum: 6,
            school: 'zhecai',
            address: '下沙'
        }
    },
    getters:{ //getters 对state里的数据再加工，相当于计算属性
        bigSum:state => state.sum * 10, //不使用this，可以写成箭头函数的样子
        // upperSchool(state){
        upperSchool():string{ //不加参数就需要指定一下返回值
            return this.school.toUpperCase()
        }
    }
})