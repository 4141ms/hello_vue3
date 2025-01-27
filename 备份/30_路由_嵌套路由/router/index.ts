//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory } from "vue-router";
//引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";
import Details from "@/pages/Details.vue";

//第二步：创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'xinwen',
            path: '/news',
            component: New,
            children: [
                {
                    path: 'detail', //创建子级路由，注意，不要加"/"
                    component: Details
                }
            ]
        },
        {
            path: '/about',
            component: About,
        },
    ]
})

//暴露出去router
export default router