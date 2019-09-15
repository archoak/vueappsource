<template>
  <div class="profile">
    <p>这是{{username}}的个人中心页</p>
    <h3>使用路由来实现页面跳转的方式</h3>
    <p>1. 路由跳转方式一 this.$router.push("路由地址") 这是一个button,点击跳转。此外还有this.$router.replace()类似</p>
    <p>1.1  this.$router.push({name: "路由name"}) 通过路由name跳转</p>
    <button @click="gotosetup1" class="goto1">不带参数前往setup页</button>
    <p>1.2  this.$router.push({path: "/setup"}) 通过路由url跳转</p>
    <button @click="gotosetup2" class="goto1">不带参数前往setup页</button>
    <p>2. 路由跳转方式二 &#60;router-link to="路由地址"&#62; &#60;/router-link&#62;</p>
    <router-link to="/tools" class="goto2">前往tools页</router-link>
    <p>2.1  &#60;router-link :to="{name: '路由名'}"&#62; &#60;/router-link&#62;</p>
    <p>2.2  &#60;router-link :to="{path: '/tools'}"&#62; &#60;/router-link&#62;</p>
    <router-link :to="{name: 'tools'}" class="goto2">前往tools页</router-link>
    <p>3. 路由跳转方式三 直接修改地址栏</p>
    <h3>路由参数传递的方式</h3>
    <p>1. params 传递参数</p>
    <div> &#60;router-link :to="{name:'setup', params:{username: '小方'}}"&#62;valueString&#60;/router-link&#62;</div>
    <div> &#60;router-link :to="{path:'/setup', params:{username: '小方'}}"&#62;valueString&#60;/router-link&#62; 也可以</div>
    <div> 然后在模板里用 $route.params.username 接收，组件实例中用 this.$route.params获取</div>
    <p>
    <router-link :to="{name: 'setup', params:{username: username}}">params带参前往setup页</router-link>
    <!-- <router-link :to="{path: '/setup', params:{username: username}}">params带参前往setup页</router-link> -->
    </p>
    <p>2. query 传递参数</p>
    <div> &#60;router-link :to="{name:'setup', query:{username: '小方'}}"&#62;valueString&#60;/router-link&#62;</div>
    <div> &#60;router-link :to="{path:'/setup', query:{username: '小方'}}"&#62;valueString&#60;/router-link&#62; 也可以</div>
    <div> 然后在模板里用 $route.query.username 接收</div>
    <p>
    <router-link :to="{name: 'setup', query:{username: username}}">query带参前往setup页</router-link>
    <!-- <router-link :to="{path: '/setup', query:{username: username}}">query带参前往setup页</router-link> -->
    </p>
    <h3>同样的，this.$router.push 也使用这两种方法</h3>
    <p>1. params 传递参数</p>
    <b>params只能用 name 来引入路由</b>，
    如果使用 params 传参，这里不能用 path: "/setup"
    <pre class="code"> 
      this.$router.push({
        name: "setup",
        params: {
          username: "小方"
        }
      })
    </pre>
    <button class="goto1" @click="gotoSetupWithparams">params带参前往setup页 Push it</button>
    <p>2. query 传递参数</p>
    <div>query传递的参数会显示在url后面 ?key=</div>
    <div>这里也可以用 path: "/setup" ，同样能实现</div>
    <pre class="code"> 
      this.$router.push({
        name: "setup",
        query: {
          username: "小方"
        }
      })
    </pre>
    <button class="goto1" @click="gotoSetupWithQuery">params带参前往setup页 Push it</button>
    <h3>第三种，url :参数形式</h3>
    <div>我们在 src/router/index.js 文件里配置路由</div>
    <pre class="code"> 
      {
        path: /posts/:userId/:postId,
        component: Postcertain
      }
    </pre>
    <div> 访问 "/posts/001/1a2b3c" 这个url，会匹配到上面的路由配置，对应的组件被渲染</div>
    <div> 然后在组件里 this.$route.params 来获取</div>
    <p>
      <router-link :to="{path: '/posts/001/1a2b3c'}" class="">前往指定的动态页</router-link>
    </p>

  </div>
</template>
<script>
export default {
  name: "profile",
  data(){
    return {
      username: "桂皮芭蕉"
    }
  },
  methods:{
    gotosetup1(){
      this.$router.push('/setup')
      // this.$router.push({name: 'setup'}) 也可以

    },
    gotosetup2(){
      this.$router.push({path: '/setup'})
      // 后面可接参数，下面有介绍

    },
    gotoSetupWithparams(){
      this.$router.push({
        name: 'setup',    // 这里不能替换成 path: '/setup'
        params: {
          username: this.username
        }
      })
    },
    gotoSetupWithQuery(){
      this.$router.push({
        name: 'setup',   // 这里的 name 可替换成 path: '/setup'
        query: {
          username: this.username
        }
      })
    }
  }
}
</script>
<style scoped>
  .profile{
    padding: 20px 50px;
  }
  .goto1{
    display: block;
    padding: 10px 15px;
    height: 40px;
    outline: none;
    border: none;
    background: #efbc92;
    cursor: pointer;
    font-size: 14px;
    margin: 28px 0;
    border-radius: 8px
  }
  .code{
    background: #f7f7f7;
    border-radius: 5px;
    font-family: Consolas
  }
</style>