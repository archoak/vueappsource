<template>
  <div>
    <ul>
      <li v-for="(item,index) in pills" :key="index" class="pill">💊 {{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "pills",
  data(){
    return {}
  },
  props: ["pills"]
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
</style>