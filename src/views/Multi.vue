<template>
  <div>
    <p>这是 “单页面多路由区域” 路由页</p>
    <p>在一个页面里如果有两个以上&#60;router-view&#62;区域，我们通过配置路由js文件，来操作这些区域的内容</p>
    <ol>
      <li> 在 <b>App.vue</b> 文件，在默认的&#60;router-view&#62;下面新添加两个&#60;router-view&#62;</li>
      <pre class="code">

    &#60;router-view&#62;&#60;/router-view&#62;
    &#60;router-view name="left" &#62;&#60;/router-view&#62;
    &#60;router-view name="right"&#62;&#60;/router-view&#62;
      </pre>
      <li> 需要在路由里配置这三个区域，在 components 字段里配置</li>
      <pre class="code">

    {
      path: /multi,
      name: "multi",
      components: {
        default: Multi,
        left: H1,
        right: H2
      }
    }
    </pre>
    </ol>
    <p>说明：写在 App.vue 里并设置样式，与路径和组件无关。默认不显示，只有在 router.js 里配置了，才会激活显示</p>


  </div>
</template>
<script>
export default {
  name: "multi"
}
</script>
<style scoped>

</style>