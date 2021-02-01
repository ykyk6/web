<template>
  <!-- 內容:商品區 -->
  <div class="q-pa-md row items-start q-gutter-md box">
    <Dessertcard></Dessertcard>
  </div>
</template>
<script>
import Dessertcard from '../components/Dessertcard.vue'

export default {
  components: { Dessertcard },
  data () {
    return {
      Dessertcard
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
