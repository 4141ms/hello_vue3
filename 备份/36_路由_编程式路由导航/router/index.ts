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
                    name: "xiang",
                    path: 'detail', 
                    component: Details,

                    //第一种写法：将路由收到的所有params参数作为props传给路由组件,注意：只有params才有用
                    // props:true, 

                    //第二种写法：函数写法，可以自己决定将什么作为props给路由组件
                    props(route){
                        return route.query
                    }

                    //第三种写法：对象写法，可以自己决定将什么作为props给路由组件
                    // props:{
                    //     a:100,
                    //     b:100,
                    //     c:100  //底层都是 <Detail a=xxx b=xxx c=xxx /> 的形式
                    // }
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