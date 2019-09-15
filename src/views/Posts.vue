<template>
  <div class="postContent">
    <ul>
      <li v-for="p in posts" :key="p.index" style="margin-bottom:90px">
        <Postcard :postdata="p.postdata"></Postcard>
      </li>
    </ul>
  </div>
</template>
<script>
import Postcard from "../components/Postcard";
export default {
  name: "posts",
  data() {
    return {
      posts: [
        {
          index: 0,
          postdata: {
            postIMURL: require("../assets/14515.jpg"),
            postText: "今天天气真棒啊，fabulous 😎",
            postUser: "Gatsby",
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
            likescount:  117,
            postTime: new Date().toDateString()
          }
        },
        {
          index: 1,
          postdata: {
            postIMURL: require("../assets/14516.jpg"),
            postText: "阿姨洗带路",
            postUser: "Joe"
          }
        },
        {
          index: 2,
          postdata: {
            postIMURL: require("../assets/14517.jpg"),
            postText: "我中意你啊",
            postUser: "KKIILLNNY"
          }
        },
        {
          index: 3,
          postdata: {
            postText: "Estoy enamorado de ti",
            postUser: "errin"
          }
        }
      ]
    };
  },
  components: {
    Postcard
  }
};
</script>
<style scoped>

</style>