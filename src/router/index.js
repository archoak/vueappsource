import Vue from "vue"
import Router from "vue-router"
import Home from "../views/Home.vue"
import Posts from "../views/Posts.vue"
import Profile from "../views/Profile.vue"
import Setup from "../views/Setup.vue"
import Tools from "../views/Tools.vue"
import Postcertain from "../views/Postcertain.vue"
import Hi from "../views/Hi.vue"
import H1 from "../components/H1.vue"
import H2 from "../components/H2.vue"
import Multi from "../views/Multi.vue"
import Pass from "../views/Pass.vue"

Vue.use(Router)

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/posts",
      component: Posts
    },
  
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {title: "个人中心"}
    },

    {
      path: "/posts",
      name: "posts",
      component: Posts,
      meta: {title: "动态"}
    },
    {
      path: "/setup",
      name: "setup",
      component: Setup,
      meta: {title: "设置"}
    },
    {
      path: "/tools",
      name: "tools",
      component: Tools,
      meta: {title: "在线工具"}
    },
    {
      path: "/posts/:userId/:postId",
      name: "postcertain",
      component: Postcertain,
      meta: {title: "某个动态名"}
    },
    {  // 嵌套路由
      path: "/hi",      
      name: "hi",
      component: Hi,   
      children: [
        {path: "/hi/h1", name:"h1", component: H1},
        {path: "/hi/h2", name:"h2", component: H2}
      ]
    },
    {
      path: "/multi",
      name: "multi",
      components: {   //单页面多路由区域，配置了才会激活
        default: Multi,
        left: H1,
        right: H2
      }
    },
    {
      path: "/pass",
      name: "pass",
      component: Pass,
      meta: {title: "父子组件间传值"}
    },
    {
      path: "*",
      component: Home


    }



  ]


})

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})


export default router;