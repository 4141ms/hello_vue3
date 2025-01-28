
import { createRouter, createWebHistory } from "vue-router";

import Props from '@/pages/01_props/Father.vue'

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props,
        },
    ]
})

//暴露出去router
export default router