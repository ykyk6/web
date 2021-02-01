<template>
<!-- 最外圍 -->
<div>
 <div class="outside q-pa-md items-start q-gutter-md">
   <template v-for="(buyItem, index) in buyItem">
   <!-- card -->
    <q-card class="my-card" flat bordered :key="index">
      <!-- 內容對齊區 -->
      <q-card-section horizontal class="q-card-section">
        <!-- 圖 -->
        <div class="col-3 content-img">
        <q-img
          class="img"
          :src='buyItem.img'
        />
        </div>
        <!-- 文字區塊 -->
        <div class="col-7 content-text">
        <q-card-section class="">
          <div class="title">{{ buyItem.title }}</div>
          <div class="sen"></div>
          <!-- 價格 -->
          <div class="price row">
            <div class="col-4 bg-grey-3">価格</div>
            <div class="text-orange-9 text-size col-7 text-left q-ml-md">{{ buyItem.price }}円</div>
            </div>
            <!-- 數量 -->
          <div class="quantity row">
            <div class="col-4 bg-grey-3">数量</div>
            <div class="text-orange-9 text-size col-7 text-left q-ml-md">
            <input type="number" v-model="buyItem.quantity" class="inputnumber">
            </div>
            </div>
            <!-- 在庫 -->
            <div class="quantity row">
            <div class="col-4 bg-grey-3">在庫</div>
            <div class="text-orange-9 text-size col-7 text-left q-ml-md">
            <div class="text-size text-black col-7">あり</div>
            </div>
            </div>
        </q-card-section>
        </div>
        <div class="col-2 column delete">
          <div class="col-4 delete row items-center justify-center">
            <q-btn outline style="color: red" size="10px" label="削除" @click='deletee(buyItem)' class="deletebtn"/>
          </div>
          <div class="col-8 total column">
            <div class="col-4 total-text row items-center justify-center bg-grey-2">小計/税込</div>
            <div class="col-6 text-size row items-center justify-center total-number">{{ buyItem.price * buyItem.quantity }}</div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    </template>
    <!--  -->
    </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      buyItem: [],
      img: '',
      title: '',
      price: '',
      quantity: ''
    }
  },
  mounted () {
    const buyItem = this.$store.state.cartItem1
    this.buyItem = buyItem
    console.log(this.buyItem)
  },
  methods: {
    deletee (buyItem) {
      console.log(buyItem)
      this.$store.commit('deletee', buyItem)
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.my-card{
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 100%; */
  max-width: 900px;
  margin-top: 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(~@/assets/bg-white.png); */
}
.text-size{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 15px;
}
.total-text{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
}
.outside{
  width: 50vw;
}
.q-card-section{
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  /* background: crimson; */
}
.img{
  width: 80%;
}
.sen{
  width: 90%;
  height: 1px;
  background: rgb(177, 175, 175);
  position: absolute;
  left: 3%;
  /* transform: translate(-30%, 0); */
  /* margin-top: 5px; */
}
.content-img{
  display: flex;
  align-items: center;
  /* background: darkmagenta; */
}
.content-text{
  /* background: deeppink; */
  height: 100%;
}
.title{
  /* background: chocolate; */
  /* position: absolute;
  left: 5%;
  top: 0; */
  color: darkcyan;
  font-size: 17px;
  line-height: 2;
  height: 20%;
  /* background: darkslategray; */
  text-align: left;
  /* margin-left: 5%; */
  /* margin-bottom: 20px; */
}
.price,.quantity{
  height: 20%;
  font-size: 13px;
  line-height: 2;
  /* background: darkred; */
  margin-top: 2%;
}
.quantity{
 margin-top: 3px;
}
.total{
  /* line-height: 2; */
}
.deletebtn{
  margin-bottom: -20%;
  /* background: cornflowerblue; */
}
.total-number{
  background: rgb(236, 232, 232);
}
.inputnumber{
  width: 30%;
  height: 80%;
}
</style>
