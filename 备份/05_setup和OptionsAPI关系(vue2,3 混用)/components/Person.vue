<template>
    <div class="person">
        <h2>姓名： {{name}}</h2>
        <h2>年龄： {{age}}</h2>
        <!-- <button @click="changeName">修改名字</button> -->
        <!-- <button @click="changeAge">修改年龄</button> -->
        <!-- <button @click="showTel">查看联系方式</button> -->
         <hr>
         <h2>{{ c }}</h2>
         <button @click="b">test</button>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Person',

        //vue2，vue3 可以混用
        data(vm) {
            return {
                a: 100,
                c: this.name, //vue2语法，可以读取到vue3中的内容，但是要加this
                d:900,
            }
        },
        methods: {
            b(){
                console.log('b');
                
            }
        },

        //vue3中读取不到vue2中的内容
        setup(){
            //setup函数中的this是 undefined, Vue3中已经弱化this了

            //数据，原来写在data中的，此时的name，tel， age不是响应式的数据
            let name = '张三'
            let age = 18
            let tel = '13000000'

            //方法
            function changeName(){
                name = "zhang-san" //注意：这样修改name，页面是没有变化的
                console.log(name); //name确实改了，但不是响应式的
                
            }
            function showTel(){
                alert(tel)
            }
            function changeAge(){
                age += 1 //注意：这样修改age，页面是没有变化的
                console.log(age); //age确实改了，但不是响应式的
                
            }

            //交出去
            return {name, age, changeName, showTel, changeAge}

            //setup的返回值也可以是一个渲染函数
            // return ()=>'哈哈'
        }
    }
</script>

<style scoped>
    .person {
        background-color: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
    button {
        margin: 0 5px;
    }
</style>