<template>
    <div class="person">
        姓：<input v-model="firstName"><br>
        名：<input v-model="lastName"><br>
        全名：{{ fullName }}<br>
        <button @click="changeFullName">修改名字</button>
    </div>
</template>

<script lang="ts" setup name="Person">
import { ref, computed } from 'vue';
    let firstName = ref("zhang")
    let lastName = ref("san")

    //计算属性有缓存(只读)，方法无缓存。计算属性定义的也是一个ref类型的响应式数据
    // let fullName = computed(()=>{
    //     return firstName.value[0].toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
    // })

    //这样改计算属性就是可读可写的
    let fullName = computed({
        get(){
            return firstName.value[0].toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
        },
        set(val){
            const [str1, str2] = val.split('-')
            firstName.value = str1
            lastName.value = str2
        }
    })

    //改变计算属性会引起set（）的调用
    function changeFullName(){
        fullName.value = "li-si"
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
    li {
        font-size: 20px;
    }
</style>