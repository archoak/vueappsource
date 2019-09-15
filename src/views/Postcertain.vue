<template>
  <div>
    <p>这是用户{{$route.params.userId}}的动态{{$route.params.postId}}动态页</p>
    <p>
      通过 $route.params.userId 获取传过来的 userId，为
      <span class="highlight">{{$route.params.userId}}</span>
    </p>
    <p>
      通过 $route.params.postId 获取传过来的 postId，为
      <span class="highlight">{{$route.params.postId}}</span>
    </p>
    <div style="height:60px;width:100%"></div> 
    <Postcard :postdata="postdata"></Postcard>
  </div>
</template>
<script>
import Postcard from "../components/Postcard";
export default {
  name: "postcertain",
  data() {
    return {
      postUser: "",
      postdata: {
        postIMURL: require("../assets/14515.jpg"),
        postText: "今天天气真棒啊，fabulous 😎",
        postUser: this.$route.params.userId,
        tags: [
          {
            index: 0,
            tag: "sunnydays"
          },
          {
            index: 1,
            tag: "happylife"
          },
          {
            index: 2,
            tag: "cutechallenge"
          },
          {
            index: 3,
            tag: "wealllikeit"
          },
          {
            index: 4,
            tag: "piggypiggy"
          }
        ],
        friends: [
          {
            index: 0,
            name: "Joe",
            comment: "amazing cute,amazing days"
          },
          {
            index: 1,
            name: "KKIILLNNY",
            comment: "beautiful!"
          },
          {
            index: 2,
            name: "Eriin",
            comment: "I love it"
          },
          {
            index: 3,
            name: "clark",
            comment: "🎶🎶🎶🎶🎶🎶🎶🎶"
          }
        ],
        commentscount: 18,
        likescount: 117,
        postTime: new Date().toDateString()
      }
    };
  },
  components: {
    Postcard // 注册这个组件
  },
  mounted() {
    this.getParams();
  },
  methods: {
    getParams() {
      // 通过 this.$route.params 获取
      console.log(this.$route.params, this.$route.params.userId);
      this.postUser = this.$route.params.userId;
    }
  }
};
</script>
<style scoped>
.highlight {
  font-size: 20px;
  font-weight: bold;
  color: #f1a66a;
}
</style>