<template>
      <div class="postContent">
      <div class="post">
        <div class="postIMG">
          <!-- 这里的图片最后打包在了 /img/14515.3d22e780.jpg -->
          <img :src="postdata.postIMURL" alt />
        </div>
        <div class="postText">
          <span>{{postdata.postText}}</span>
          <div class="extends">
            <div class="dots"></div>
          </div>
        </div>
        <div class="likeandshare">
        <svg class="svglike" viewBox="0 0 1024 1024" v-if="isLike" @click.prevent="changeLike">
          <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#F44336"></path>
        </svg>
        <svg class="svgdislike" viewBox="0 0 1024 1024" v-else @click.prevent="changeLike">
          <path d="M725.333333 192c-89.6 0-168.533333 44.8-213.333333 115.2C467.2 236.8 388.266667 192 298.666667 192 157.866667 192 42.666667 307.2 42.666667 448c0 253.866667 469.333333 512 469.333333 512s469.333333-256 469.333333-512c0-140.8-115.2-256-256-256z" fill="#CECECE"></path>
      </svg>
      <span style="margin-left: 12px;vertical-align:middle;color:#f1a66a;">{{postdata.likescount}} likes </span>
      <div class="userComment">
        <svg  style="width: 18px; height: 18px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1788"><path d="M513.354736 969.810549c-31.429882 0-61.775975-15.534309-83.090492-42.448404l-59.066502-74.962074c-25.288411-32.152408-83.451755-60.330923-124.274475-60.330923H131.680367c-69.181866 0-125.358264-56.176398-125.358264-125.358264V216.215911c0-69.181866 56.176398-125.358264 125.358264-125.358264h763.52937c69.181866 0 125.358264 56.176398 125.358264 125.358264V666.530252c0 69.181866-56.176398 125.358264-125.358264 125.358264h-115.423531c-40.82272 0-98.986065 28.178515-124.274476 60.330923l-59.066502 74.962074c-21.314518 27.094726-51.66061 42.629035-83.090492 42.629036zM131.680367 156.246252c-33.055565 0-59.96966 26.914094-59.96966 59.969659V666.530252c0 33.055565 26.914094 59.96966 59.96966 59.96966h115.423531c60.872817 0 138.00247 37.390721 175.754454 85.25807l59.066502 74.962074c8.850944 11.379785 20.230729 17.521256 31.610514 17.521256 11.560416 0 22.75957-6.322103 31.610513-17.521256l59.066502-74.962074c37.571353-47.867349 114.881637-85.25807 175.754454-85.25807h115.423532c33.055565 0 59.96966-26.914094 59.969659-59.96966V216.215911c0-33.055565-26.914094-59.96966-59.969659-59.969659H131.680367z" fill="#CECECE"></path></svg>
        <span style="margin-left: 14px;color: silver">comment it if you like it</span>
      </div>
      </div>
      </div>
      
      <div class="postUser">
        <div class="clWrap">
          <div class="postUserAvatar"></div>
          <div class="postUserName">{{postdata.postUser}}</div>
          <div class="postTime">{{postdata.postTime}}</div>
        </div>
        <div class="postTags">
          <ul>
            <li v-for="t in postdata.tags" :key="t.index" class="postTag">#{{t.tag}}</li>
          </ul>
        </div>
        <div class="postComments">
          <ul>
            <li v-for="f in postdata.friends" :key="f.index" class="postComment">
              <span style="margin-right:15px;color:#f1a66a">{{f.name}}</span>
              <span style="margin-right:15px;color:#777">{{f.comment}}</span>
            </li>
          </ul>
        </div>
        <p style="color: silver">View all {{postdata.commentscount}} comments</p>
        <div style="position:absolute;right:24px;bottom:24px;color: silver;font-size:14px">powered by 桂皮芭蕉</div>
      </div>
    </div>
</template>
<script>
export default {
  name: "postcard",
  data() {
    return {

      isLike: false
    };
  },
  props: [
    "postdata"
  ],
  methods: {
    changeLike() {
      this.isLike = !this.isLike
    }
  }
}
</script>
<style scoped>
.clWrap{
  overflow: hidden;
}

.postContent {
  margin-bottom: 60px;
  border: 1px #eee solid;
  border-radius: 5px;
  padding: 30px 30px 12px;
  width: 720px;
  background: #fff;
  height: 480px;
  position: relative;
}
.post {
  width: 350px;
  float: left;
}
.postIMG img {
  width: 350px;
}
.postText {
  padding: 15px 0 8px;
  border-bottom: 1px solid #eee;
  line-height: 30px;
}
.postText span{
  color: #777
}
.postUser {
  float: left;
  width: 322px;
  margin-left: 48px;
  height: 100%;
}
.postUserAvatar {
  width: 64px;
  height: 64px;
  background: url(../assets/defaultAvatar_64.png) no-repeat;
  background-size: 100% 100%;
  border-radius: 50%;

}
.postUserAvatar,
.postUserName,
.postTime {
  float: left;
}
.postUserName {
  margin-left: 25px;
  font-size: 20px;
  height: 64px;
  line-height: 64px;
  font-weight: bold;
  color: #f1a66a;
}
.postTime {

  font-size: 14px;
  height: 64px;
  line-height: 64px;
  color: silver;
  float: right
}
.extends {
  width: 30px;
  height: 30px;
  position: relative;
  float: right;
  margin-right: 10px;
  cursor: pointer;
}
.dots {
  width: 2px;
  height: 2px;
  border: 2px solid silver;
  border-radius: 50%;
  position: absolute;
  position: absolute;
  top: 12px;
  left: 12px;
}
.dots::before,
.dots::after {
  content: "";
  display: table;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  border: 2px solid silver;
  position: absolute;
}
.dots::before {
  top: -2px;
  left: -11px;
}
.dots::after {
  top: -2px;
  left: 7px;
}
.postComments .postComment{
  height: 32px;
  line-height: 32px
}
.postTags{
  padding: 15px 0
}
.postTag{
  display: inline-block;
  margin-right: 15px;
  color: silver
}
.svgdislike,.svglike{
    width: 22px;
    height: 22px;
    vertical-align: middle;
    overflow: hidden;
    padding-top: 7px;
    padding-bottom: 7px;
}
.userComment{
  padding-left: 1px
}
</style>