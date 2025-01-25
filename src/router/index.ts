//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            name: 'xinwen',
            path: '/new',
            component: New,
        },
        {
            path: '/about',
            component: About,
        },
    ]
})

//暴露出去router
export default router