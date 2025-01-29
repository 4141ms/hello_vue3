
import { createRouter, createWebHistory } from "vue-router";

import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/props',
            component: Props,
        },
        {
            path: '/event',
            component: Event,
        },
        {
            path: '/mitt',
            component: Mitt,
        },
    ]
})

//暴露出去router
export default router