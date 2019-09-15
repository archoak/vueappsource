<template>
  <div>
    <section>
      <h4>data 基本使用</h4>
      <p>value值：{{value}}</p>
      <button @click="handleClick" class="gbbtn">push add one</button>
    </section>
    <section>
      <h4>props 父组件向子组件传值</h4>
      <Pills :pills="pills"></Pills>
    </section>
    <section>
      <h4>自定义事件 子组件向父组件传值</h4>
      <div>
        <svg class="svglike" viewBox="0 0 1024 1024" v-if="isLike">
          <path
            d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"
            fill="#F44336"
          />
        </svg>
        <svg class="svgdislike" viewBox="0 0 1024 1024" v-else>
          <path
            d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z"
            fill="#CECECE"
          />
        </svg>
        <Like @changeLike="handleChange"/>
      </div>
    </section>
  </div>
</template>
<script>
import Pills from "../components/Pills.vue";
import Like from "../components/Like.vue"
export default {
  name: "pass",
  data() {
    return {
      value: 0,
      pills: ["盘尼西宁", "盐酸哌替啶", "阿司匹林"],
      isLike: false
    };
  },
  components: {
    Pills, // 声明组件
    Like
  },
  methods: {
    handleClick() {
      this.value += 1;
    },
    handleChange(isLike){
      this.isLike = isLike
    }
  }
};
</script>
<style scoped>
.gbbtn {
  display: block;
  padding: 10px 15px;
  height: 40px;
  outline: none;
  border: none;
  background: #efbc92;
  cursor: pointer;
  font-size: 14px;
  margin: 28px 0;
  border-radius: 8px;
}
.svglike {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
.svgdislike {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  overflow: hidden;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>