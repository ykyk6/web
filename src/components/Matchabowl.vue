<template>
  <!-- 內容:商品區 -->
  <div class="q-pa-md row items-start q-gutter-md box">
    <matchabowlcard></matchabowlcard>
  </div>
</template>
<script>
import matchabowlcard from '../components/matchabowlcard.vue'
export default {
  components: { matchabowlcard },
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
@media (max-width: 599px) {
  .box{
    display: flex;
    flex-direction: column;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 95%;
  /* height: 290px; */
  max-width: 100%;
  height: 20%;
  /* height: 300px; */
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  /* background: chartreuse; */
}
}
@media screen and (min-width: 600px) and (max-width: 899px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 40%;
  height: 20%;
  display: flex;
  padding-bottom: 5px;
  background: chartreuse;
}
}
@media screen and (min-width: 900px) and (max-width: 1110px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
     justify-content: center;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 30%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  background: chartreuse;
}
}
@media screen and (min-width: 1111px) and (max-width: 1300px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 23%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  background: chartreuse;
}
}
</style>
