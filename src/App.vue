<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        Home
        <span style="font-size:18px">🏠</span>
      </router-link>
      <div class="tab">
        <router-link to="/posts">动态🚁</router-link>
        <router-link to="/profile">个人中心👨‍💼</router-link>
      </div>
      <div class="lists">
        <router-link to="/hi">§ 嵌套路由</router-link>
        <router-link to="/multi">§ 单页面多路由区域</router-link>
        <router-link to="/pass">§ 父子组件传值</router-link>
        <router-link to="/">§ vuex基本使用</router-link>
      </div>

    </div>

    <!-- router-view 最终会被替换为具体的组件 -->
    <router-view class="content" />

    <div class="multiContenExtra">
        <!-- 单页面多路由区域，如果没有在router.js中激活，就不会显示-->
        <router-view name="left" class="left"/>
        <router-view name="right" class="right"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  },
  components: {}
};
</script>
<style scoped>
.nav {
  width: 16%;
  min-width: 220px;
  height: 100%;
  text-align: center;
  font-size: 20px;
  position: fixed;
  right: 0;
  top: 0;
  box-shadow: #aaa 0px 0px 6px;
  background: #fff;
  z-index: 9999;
}
.nav > a {
  display: block;
  text-decoration: none;
  color: #d99156;
  padding: 25px;
  font-weight: bold;
}

.tab {
  width: 100%;
  height: 50px;
  margin: 0 auto;
  font-size: 14px;
}
.tab a {
  width: 38%;
  height: 40px;
  line-height: 40px;
  display: block;
  float: left;
  background: #eee;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  color: #555;
  margin-left: 22px;
}
.tab a:nth-child(2) {
  float: right;
  margin-left: 0;
  margin-right: 22px;
}
.content {
  width: 84%;
  height: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
}
.lists{
  font-size: 16px;
  margin-top: 10px
}
.lists > a {
  display: block;
  text-decoration: none;
  padding: 12px;
  font-weight: bold;
}
.multiContenExtra{
  width: 84%;
  height: 100%;
  padding: 0 50px;
  box-sizing: border-box;
  overflow: hidden;
  /* border-top: 1px solid #eee */
}
.left{
  float:left;
  width:50%;
  background-color:#f7f7f7;
  height:500px;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 5px 0 0 5px;
  margin: 20px 0 80px

}
.right{
  float:left;
  width:50%;
  background-color:#eaeaea;
  height:500px;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 0 5px 5px 0;
  margin: 20px 0 80px
}
</style>