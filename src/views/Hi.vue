<template>
  <div>
    <p>这是 Hi 路由页</p>
    <p> /user/gatsby/profile /user/gatsby/posts 这种嵌套路由，子路由，二级路由</p>
    <p> 实际上就是 多层嵌套的组件</p>
    <ol>
      <li>首先用 &#60;router-link&#62; 标签增加新的导航链接</li>
      <li>在主页面组件 加入 &#60;router-view&#62; 给子模板留坑 <b>很重要</b></li>
      <li>在 components 目录下新建两个组件模板 </li>
      <li>在 router/index.js 下</li>
    </ol>
    <pre class="code">

      routes: [
          {
              path: "/hi",
              name:  "Hi",
              // 子路由的 &#60;router-view&#62; 必须写在Hi.vue中
              component: Hi,
              children: [
                 {  path: "/hi/h1", name: "H1", component: H1 },                  
                 {  path: "/hi/h2", name: "H2", component: H2 }

              ]
          }
      ]
    </pre>

    <router-link :to="{name: 'h1'}"> 前往h1子路由</router-link>
    <router-link :to="{name: 'h2'}"> 前往h2子路由</router-link>
    <router-view class='subContent' />
  </div>
</template>

<style scoped>
.subContent{
  height: 500px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  margin-top: 35px;
  padding-left: 25px
}

</style>