//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";

/*
    路由组件通常放在 pages/views文件夹内
    通过点击导航，视觉效果上“消失”了的路由组件，默认是被卸载掉了，需要的时候再去挂载
*/

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
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