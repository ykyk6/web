<template>
    <div > <div v-show="nobuypage" class="nobuy q-mt-md"><q-icon name="search_off" size="50px"></q-icon>何も注文されていません・</div>
  <div class="q-pa-md row justify-start" v-if="orderTitleItem1.length">
    <!-- 訂購確認 -->
<div class="ordersure">
  <div class="q-pa-md">
    <q-markup-table style="border:1px solid black;padding:2px">
      <thead>
        <tr>
          <th class="text-center t2 bg">注文日</th>
          <th class="text-center t2 bg">注文番号</th>
          <th class="text-center t2 bg">商品名</th>
          <th class="text-center t3 bg">注文合計</th>
          <th class="text-center t3 bg">決済方法</th>
          <th class="text-center t3 bg">注文内容</th>
          <th class="text-center t3 bg">注文状態</th>
        </tr>
      </thead>
      <tbody>
      <template v-for='(orderItem, index) in orderItem'>
        <tr :key='index'>
          <td class="text-center bgw">{{ orderItem.date }}</td>
          <td class="text-center bgw">{{ orderItem._id }}</td>
          <td class="text-center bgw">{{ orderTitleItem1[index] }}</td>
          <td class="text-center bgw">￥{{ orderItem.totalprice }}</td>
          <td class="text-center bgw t3">{{ orderItem.pay }}</td>
          <td class="text-center bgw"> <q-btn round color="cyan-8" icon="description" size="10px" @click="openorder(orderItem)"/></td>
          <td class="text-centert bgw"><q-btn round color="cyan-8" icon="local_shipping" size="10px" @click="opensituation(orderItem)"/>
          </td>
        </tr>
      </template>
      </tbody>
    </q-markup-table>
        <!--  -->
      <q-dialog
      v-model="fixed"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
          <div class="">注文内容：</div>
        </q-card-section>
        <q-card-section class="q-pt-none bgw">
           <q-markup-table style="border:1px solid black">
      <thead>
        <tr>
          <th class="text-center t1 bg">画像</th>
          <th class="text-center t2 bg">品名</th>
          <th class="text-center t3 bg">価格</th>
          <th class="text-center t4 bg">数量</th>
          <th class="text-center t5 bg">在庫</th>
          <th class="text-center t6 bg">小計</th>
        </tr>
        </thead>
         <tbody>
       <template v-for='(buyItem, index) of buyItems'>
        <tr :key='index'>
          <td class="text-center bgw"><img :src="buyItem.img" class="img"></td>
          <td class="text-center bgw">{{ buyItem.title }}</td>
          <td class="text-center bgw">￥{{ buyItem.price }}</td>
          <td class="text-center bgw">{{ buyItem.quantity }}</td>
          <td class="text-center bgw">あり</td>
          <td class="text-center bgw">￥{{ buyItem.price * buyItem.quantity }}</td>
        </tr>
        </template>
         <tr>
          <td class="text-center bg "></td>
          <td class="text-center bg "></td>
          <td class="text-center bg "></td>
          <td class="text-center bg "> </td>
          <td class="text-center bg  text-deep-orange-7">送料</td>
          <td class="text-center bg  text-deep-orange-7">￥{{ shippingindex }}</td>
        </tr>
         <tr>
          <td class="text-center bg"></td>
          <td class="text-center bg"></td>
          <td class="text-center bg"></td>
          <td class="text-center bg"> </td>
          <td class="text-center bg">合計</td>
          <td class="text-center bg">￥{{ totalindex }}</td>
        </tr>
        </tbody>
         <thead>
        <tr>
          <th class="text-center t1 bg"></th>
          <th class="text-center t2 bg"></th>
          <th class="text-center t3 bg"></th>
          <th class="text-center t4 bg"></th>
          <th class="text-center t5 bg">決済方法</th>
          <th class="text-center t6 bg">{{ payindex }}</th>
        </tr>
        </thead>
        </q-markup-table>
        <!--  -->
         <div class="q-mt-md"><div class= "q-mb-md">お届け先住所：</div>
           <template>
            <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg">宛先名</td>
           <td class="text-left bgw">{{ orderinfo.name }}</td>
        </tr>
        <tr>
          <td class="text-left titleinfo bg">郵便番号</td>
           <td class="text-left  bgw">{{ orderinfo.post }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg">都道府縣</td>
           <td class="text-left bgw">{{ orderinfo.city }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg">住所</td>
           <td class="text-left bgw">{{ orderinfo.address }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg">電話番号</td>
           <td class="text-left bgw">{{ orderinfo.telephonenumber }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg">メールアドレス</td>
           <td class="text-left bgw">{{ orderinfo.mail }}</td>
        </tr>
        </tbody>
        </q-markup-table>
           </template>
        </div>
        <!--  -->
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bgw text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
       <!--  -->
      <q-dialog
      v-model="fixed2"
    >
      <q-card style="width: 850px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
          <div class="">注文状態：</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
            <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg">発送状態</td>
           <td class="text-left bgw">{{ ordernow }}</td>
        </tr>
         <tr>
          <td class="text-left titleinfo bg">出荷日</td>
           <td class="text-left bgw">{{ delieverydate }}</td>
        </tr>
         <tr>
          <td class="text-left titleinfo bg">追跡番号</td>
           <td class="text-left bgw">{{ delieverynumber }}</td>
        </tr>
        </tbody>
           </q-markup-table>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bgw text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
    <!--  -->
  </div>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // buyItem: [],
      fixed: false,
      fixed2: false,
      label2: false,
      orderItem: [],
      orderTitleItem: [],
      orderTitleItem1: [],
      myorderItems: [],
      index: 0,
      shippingindex: '',
      totalindex: '',
      payindex: '',
      orderinfo: '',
      ordernow: '',
      delieverydate: '',
      delieverynumber: '',
      nobuypage: false
    }
  },
  computed: {
    buyItems () {
      return this.orderItem[this.index].buyItem
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/order')
      .then((res) => {
        if (res.data.success) {
          // console.log(res.data)
          const userid = this.$store.state.user.id
          const orderItem = res.data.result.filter(function (item, index, array) {
            return item.user === userid
          })
          this.orderItem = orderItem
          // console.log(this.orderItem)
          const orderTitleItem = this.orderItem.map(function (item, index, array) {
            return item.buyItem
          })
          this.orderTitleItem = orderTitleItem
          const TitleItem = this.orderItem.map(function (item, index, array) {
            return item.title
          })
          this.TitleItem = TitleItem
          for (let i = 0; i < orderTitleItem.length; i++) {
            console.log(orderTitleItem[i][0].title)
            this.orderTitleItem1.push(orderTitleItem[i][0].title)
          }
          if (this.orderTitleItem.length === 0) {
            this.nobuypage = true
          }
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: res.data.message
          })
        }
      })
      .catch((err) => {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: err.response.data.message
        })
      })
    console.log(this.orderTitleItem.length)
  },
  methods: {
    openorder (orderItem) {
      this.fixed = true
      this.index0 = orderItem
      // console.log(this.index0)
      const index = this.orderItem.indexOf(this.index0)
      this.index = index
      // console.log(this.index)
      const shippingindex = this.orderItem[index].theshipping
      this.shippingindex = shippingindex
      const totalindex = this.orderItem[index].totalprice
      this.totalindex = totalindex
      const payindex = this.orderItem[index].pay
      this.payindex = payindex
      // console.log(this.orderItem[index])
      const orderinfo = this.orderItem[index]
      this.orderinfo = orderinfo
    },
    opensituation (orderItem) {
      this.fixed2 = true
      console.log(this.orderinfo)
      const index = this.orderItem.indexOf(orderItem)
      const ordernow = this.orderItem[index].ordernow
      this.ordernow = ordernow
      const delieverydate = this.orderItem[index].delieverydate
      this.delieverydate = delieverydate
      const delieverynumber = this.orderItem[index].delieverynumber
      this.delieverynumber = delieverynumber
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.bgw{
  background-image: url(~@/assets/bg-white.png);
}
.nobuy{
  font-size: 25px;
  color: grey;
}
.q-menu {
    position: fixed !important;
    display: inline-block;
    max-width: 95vw;
    box-shadow: 0 1px 5px rgb(255, 255, 255) !important;
    background: rgba(255,255,255,0.9) !important;
    border-radius: 4px;
    overflow-y: auto;
    overflow-x: hidden;
    outline: 0;
    max-height: 65vh;
    z-index: 6000;
    border: 1px solid black;
}
.q-field__native, .q-field__prefix, .q-field__suffix, .q-field__input {
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.00937em;
    text-decoration: inherit;
    text-transform: inherit;
    border: none;
    border-radius: 0;
    background: none;
    color: rgba(243, 51, 51, 0.87);
    outline: 0;
    padding: 6px 0;
}
.outside{
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans JP', sans-serif;
}
.ordersure{
    width: 80%;
    margin-left: 8%;
}
.img{
  width: 50%;
}
.t1{
  width: 15%;
}
.t2{
  width: 18%;
}
/*  */
.w-2{
  width: 17%;
}
.w-10{
  width: 100%;
}
.w-8{
  width: 80%;
}
.w-9{
  width: 90%;
}
.shipping{
  font-size: 14px;
}
.shipping2{
  font-size: 13px;
}
.q-table__card {
    color: #000;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 1px 5px rgba(255, 255, 255, 0.952);
}
.edit{
  position: absolute;
  left: 0;
  top: 0;
  background:brown;
}
.sen2{
  width: 100%;
  height: 1px;
  background: black;
  margin-top: 5px;
  margin-bottom: 23px;
}
.box2{
  width: 100%;
  height: 15px;
  border: 1px solid black;
  margin-top: 20px;
  background: black;
  color: white;
}
.sen{
  width: 100%;
  height: 1px;
  background: black;
  margin-top: 30px;
}
.box{
  width: 100%;
  height: 15px;
  border: 1px solid black;
  margin-top: 5px;
  background: black;
  color: white;
}
.titleinfo{
  width: 20%;
  position: relative;
}
.titleinfo::after{
  content: '';
  width: 1px;
  height: 100%;
  background: black;
  position: absolute;
  left: 99%;
  top: 0;
}
</style>
