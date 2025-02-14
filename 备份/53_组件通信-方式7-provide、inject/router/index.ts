
import { createRouter, createWebHistory } from "vue-router";

import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Mitt from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import Attrs from '@/pages/05_$attrs/Father.vue'
import RefParent from '@/pages/06_$refs、$parent/Father.vue'
import PeoInj from '@/pages/07_provide、inject/Father.vue'

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
        {
            path: '/model',
            component: Model,
        },
        {
            path: '/attrs',
            component: Attrs,
        },
        {
            path: '/ref-parent',
            component: RefParent,
        },
        {
            path: '/provide-inject',
            component: PeoInj,
        },
    ]
})

//暴露出去router
export default router