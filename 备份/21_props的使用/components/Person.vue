<template>
    <div class="person">
        <!-- <h1>{{ x.a }}</h1> -->
        <ul>
            <li v-for="p in list" :key="p.id">
                {{ p.name }} -- {{ p.age }}
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="Person">
import { type PersonInter, type Persons } from '@/types';

    

    // //只接收list
    // defineProps(['list'])

    // //接收list + 限制类型
    // defineProps<{list:Persons}>()

    //接收list + 限制类型 + 限制必要性 + 指定默认值
    withDefaults(defineProps<{list?:Persons}>(), {
        list: ()=> [{id: "ahsj01", name: "张三", age:18}]
    })
    

    //接收a,同时将props保存起来
    // let x = defineProps(['a'])
    // console.log(x.a);
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