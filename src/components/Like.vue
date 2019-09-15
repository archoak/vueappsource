<template>
  <div>
    <button @click="handlechangeLike"  class="gbbtn">{{isLike?textToCancelLike:textToLike}}</button>
  </div>
</template>
<script>
export default {
  name: "like",
  data(){
    return {
      textToCancelLike: "cancel like",
      textToLike: "push to like",
      isLike: false
    }
  },
  props: ["pills"],
  methods: {
    handlechangeLike(){
      this.isLike = !this.isLike;
      this.$emit("changeLike",this.isLike)
    }
  }
}
</script>
<style scoped>
.pill{
  width: 115px;
  height: 40px;
  line-height: 40px;
  display: block;
  background: #eee;
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  color: #555;
  margin: 15px 0;
  padding: 0 8px 
}
.gbbtn {
  display: block;
  width: 115px;
  padding: 10px 15px;
  height: 40px;
  outline: none;
  border: none;
  background: #efbc92;
  cursor: pointer;
  font-size: 14px;
  border-radius: 8px;
}
</style>