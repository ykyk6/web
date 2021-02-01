<template>
  <!-- 內容:商品區 -->
  <div class="q-pa-md row items-start q-gutter-md box">
    <chagucard></chagucard>
  </div>
</template>
<script>
import chagucard from '../components/chagucard.vue'
export default {
  components: { chagucard },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.text-center{
  display: flex;
  justify-content: center;
}
.home:hover{
  color: cadetblue;
  /* text-decoration: underline;*/
}
.box{
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
  /* background: blue; */
}
.q-tab-sel:hover{
  /* background: darkcyan; */
  border: 1px solid #6A7735;
}
.q-tab-sel:active{
  border: 1px solid #6A7735;
}
/* .my-card {
  width: 100%;
  max-width: 300px;
} */
</style>
