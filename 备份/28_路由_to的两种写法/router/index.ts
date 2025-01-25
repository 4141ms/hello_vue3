//创建一个路由器并暴露出去

//第一步：引入createRouter
import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";
//引入一个个可能要呈现的组件
import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import New from "@/pages/New.vue";

/*
    history模式：
        -优点：URL比较美观，不带“#”
        -缺点：后期项目上线，需要服务器配合处理路径问题，否则刷新会有404错误

    hush模式：
        -优点：兼容性更好，不需要服务端处理路径
        -缺点：URL带“#”不太美观
*/

//第二步：创建路由器
const router = createRouter({
    history: createWebHashHistory(),
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