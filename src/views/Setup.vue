<template>
  <div class="setup">
    <p>这是set页</p>
    <h4>传参方式一 params</h4>
    <i>注意: 刷新后，参数消失，为 undefined</i>
    <p>$route.params 拿到携带的参数，为 <span class="highlight">{{$route.params}}</span></p>
    <p>$route.params.username拿到 username 字段，为 <span class="highlight">{{$route.params.username}}</span></p>

    <h4>传参方式二 query</h4>
    <i>注意: 上方地址栏，url后会显示 query 查询字符串，刷新后不消失</i>
    <p>$route.query 拿到携带的参数，为 <span class="highlight">{{$route.query}}</span></p>
    <p>$route.query.username拿到 username 字段，为 <span class="highlight">{{$route.query.username}}</span></p>
  </div>
</template>
<script>
export default {
  name: 'setup',
  mounted(){
    this.getParams()
  },
  methods:{
    getParams(){
      // 组件实例，this.$route.params 或 this.$route.query 来获取
      console.log(this.$route.params,this.$route.query)
    }
  }
}
</script>
<style scoped>
  .highlight{
    font-size: 20px;
    font-weight: bold;
    color: #f1a66a
  }
</style>
