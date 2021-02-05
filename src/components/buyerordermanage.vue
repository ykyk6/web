<template>
  <div class="q-pa-md row justify-start ">
    <!-- 訂購確認 -->
<div class="ordersure q-mt-md">
  <!--  -->
   <div class="row q-mx-md" style="border:1px solid black">
    <div class=" col-3 bg-grey-4"><q-btn flat @click="lasttime" class="full-width senafter"> 從新到舊</q-btn></div>
    <div class=" col-3 bg-grey-4"><q-btn flat @click="allonly" class="full-width senafter"> 顯示全部</q-btn></div>
    <div class=" col-3 bg-grey-4"><q-btn flat @click="delieveryok" class="full-width senafter"> 顯示已出貨</q-btn></div>
    <div class=" col-3 bg-grey-4"><q-btn flat @click="delieverynotok" class="full-width senafter"> 顯示未出貨</q-btn></div>
  </div>
   <!--  -->
  <div class="row q-mx-md q-mt-sm" style="border:1px solid black">
    <div class=" col-6 ">
      <div class="row">
      <div class="col-4 bg-grey-4 row items-center justify-center">
        <div class="">以訂單編號搜尋</div>
        </div>
     <div class=" col-6"><q-input v-model="ordernumber" type="text" dense borderless></q-input></div>
     <div class="col-2 bg-dark text-white row items-center justify-center"><q-btn flat @click="ordernumbersearch(ordernumber)" class="full-width">搜尋</q-btn></div>
     </div>
      </div>
      <!--  -->
    <div class=" col-6 ">
      <div class="row">
      <div class="col-4 bg-grey-4 row items-center justify-center">
        <div class="">以會員ID搜尋</div>
        </div>
     <div class=" col-6"><q-input v-model="membernumber" type="text" dense borderless standout></q-input></div>
     <div class="col-2 bg-dark text-white row items-center justify-center"><q-btn flat @click="membernumbersearch(membernumber)" class="full-width">搜尋</q-btn></div>
     </div>
      </div>
    </div>
  <!--  -->
  <div class="q-pa-md">
    <div class=" text-h7" v-if="noorders">目前沒有資料</div>
    <div class="" v-else>
    <q-markup-table class="" style="border:1px solid black;padding:2px">
      <thead>
        <tr>
          <th class="text-center t3 bg-grey-4">訂購日期</th>
          <th class="text-center t2 bg-grey-4">訂單編號</th>
          <th class="text-center t3 bg-grey-4">訂購人</th>
          <th class="text-center t2 bg-grey-4">顧客ID</th>
          <th class="text-center t3 bg-grey-4">總金額</th>
          <th class="text-center t3 bg-grey-4">付款方式</th>
          <th class="text-center t3 bg-grey-4">訂購明細</th>
          <th class="text-center t3 bg-grey-4">訂單進度</th>
          <th class="text-center t3 bg-grey-4">刪除</th>
        </tr>
      </thead>
      <tbody>
      <template v-for='(orderTotalItems, index) in orderTotalItems'>
        <tr :key='index'>
          <td class="text-center">{{ orderTotalItems.date }}</td>
          <td class="text-center">{{ orderTotalItems._id }}</td>
          <td class="text-center">{{ orderTotalItems.name }}</td>
          <td class="text-center">{{ orderTotalItems.user }}</td>
          <td class="text-center">￥{{ orderTotalItems.totalprice }}</td>
          <td class="text-center">{{ orderTotalItems.pay }}</td>
          <td class="text-center"> <q-btn round borderless unelevated icon="description" size="10px"  style="background:transparent;color:grey" @click="openorder(orderTotalItems)" /></td>
          <td class="text-centert"><q-btn round borderless unelevated icon="local_shipping" size="10px" style="background:transparent;color:#00838f" @click="delivery(orderTotalItems)"/></td>
          <td class="text-centert"><q-btn round borderless unelevated icon="delete" size="10px"  style="background:transparent;color:black" @click="deletee(orderTotalItems)"/></td>
        </tr>
      </template>
      </tbody>
    </q-markup-table>
  </div>
      </div>
      </div>
      <!--  -->
      <div class="">
      <q-dialog
      v-model="fixed"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
          <div class="">訂購明細：</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <!--  -->
           <q-markup-table style="border:1px solid black">
      <thead>
        <tr>
          <th class="text-center t1 bg-grey-4">画像</th>
          <th class="text-center t2 bg-grey-4">品名</th>
          <th class="text-center t3 bg-grey-4">価格</th>
          <th class="text-center t4 bg-grey-4">数量</th>
          <th class="text-center t5 bg-grey-4">在庫</th>
          <th class="text-center t6 bg-grey-4">小計</th>
        </tr>
        </thead>
         <tbody>
      <template v-for='(buyItem, index) of buyItems'>
        <tr :key='index'>
          <td class="text-center"><img :src="buyItem.img" class="img"></td>
          <td class="text-center">{{ buyItem.title }}</td>
          <td class="text-center">￥{{ buyItem.price }}</td>
          <td class="text-center">{{ buyItem.quantity }}</td>
          <td class="text-center">あり</td>
          <td class="text-center">￥{{ buyItem.price * buyItem.quantity }}</td>
        </tr>
        </template>
        </tbody>
         <thead>
        <tr>
          <th class="text-center t1 bg-grey-4"></th>
          <th class="text-center t2 bg-grey-4"></th>
          <th class="text-center t3 bg-grey-4"></th>
          <th class="text-center t4 bg-grey-4"></th>
          <th class="text-center t5 bg-grey-4 text-deep-orange-7">運費</th>
          <th class="text-center bg-grey-4 text-deep-orange-7">￥{{ ordertotalshippingIndex }}</th>
        </tr>
        </thead>
         <thead>
        <tr>
          <th class="text-center t1 bg-grey-4"></th>
          <th class="text-center t2 bg-grey-4"></th>
          <th class="text-center t3 bg-grey-4"></th>
          <th class="text-center t4 bg-grey-4"></th>
          <th class="text-center t5 bg-grey-4">合計
          </th>
          <th class="text-center bg-grey-4">￥{{ ordertotalpriceIndex }}</th>
        </tr>
        </thead>
        </q-markup-table>
        <!--  -->
        <div class="q-mt-md"><div class=" q-mb-md">收件資料：</div>
           <template>
            <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg-grey-4">收件人</td>
           <td class="text-left bg-white">{{ orderTotalItemsinfo.name }}</td>
        </tr>
        <tr>
          <td class="text-left titleinfo bg-grey-4">郵編</td>
           <td class="text-left  bg-white">{{ orderTotalItemsinfo.post }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">地區</td>
           <td class="text-left  bg-white">{{ orderTotalItemsinfo.city }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">地址</td>
           <td class="text-left  bg-white">{{ orderTotalItemsinfo.address }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">電話</td>
           <td class="text-left  bg-white">{{ orderTotalItemsinfo.telephonenumber }}</td>
        </tr>
        </tbody>
        </q-markup-table>
           </template>
        </div>
        <!--  -->
        <div class="q-mt-md"><div class=" q-mb-md">付款情況：</div>
           <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg-grey-4">是否已付款</td>
           <td class="text-left bg-white">是</td>
        </tr>
        </tbody>
           </q-markup-table>
        </div>
        <!--  -->
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="關閉" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <!--  -->
     <!-- 2.訂單狀態 -->
      <div class="">
      <q-dialog
      v-model="fixed2"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <!--  -->
        <!--  -->
        <div class=""><div class=" q-mb-md">付款情況：</div>
           <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg-grey-4">是否已付款</td>
           <td class="text-left bg-white">是</td>
        </tr>
        </tbody>
           </q-markup-table>
        </div>
        <!--  -->
        <div class="q-mt-md"><div class=" q-mb-md">訂單進度：</div>
           <q-markup-table style="border:1px solid black">
             <!-- <template v-for='(orderTotalItems, index) of orderTotalItems'> -->
            <tbody :key="index">
            <tr>
          <td class="text-left titleinfo bg-grey-4">訂單狀態</td>
           <td class="text-left bg-white">
             <!--  -->
      <q-select dense outlined color="black" v-model="ordernow" :options="options" content-style="border:1px solid black;background: rgba(255, 255, 255, 0.9);"/>
             <!--  -->
           </td>
        </tr>
        <tr>
           <td class="text-left titleinfo bg-grey-4">出貨日期</td>
           <td class="text-left bg-white">
             <q-input v-model="totaldelieverydate3" dense outlined type="date"/>
           </td>
        </tr>
        <tr>
           <td class="text-left titleinfo bg-grey-4">物流方式/追蹤編號</td>
           <td class="text-left bg-white">
             <q-input v-model="delieverynumber" dense outlined type="text"/>
           </td>
        </tr>
         <tr>
           <td class="text-left titleinfo bg-grey-4">備註</td>
           <td class="text-left bg-white">
              <q-input v-model="info" dense outlined type="text"/>
           </td>
        </tr>
        </tbody>
            <!-- </template> -->
           </q-markup-table>
        </div>
        <!--  -->
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="儲存" @click="savebtn(orderTotalItems)" v-close-popup style="background:black;color:white" class="q-mb-md"/>
          <q-btn label="取消" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
  <!--  -->
  </div>
  <!--  -->
</template>
<script>
export default {
  data () {
    return {
      model: null,
      options: [
        '注文受', '商品準備中', '出荷準備中', '出荷完了', '全キャンセル', '一部返品', '全返品'
      ],
      orderTotalItems: [],
      buyItem: [],
      fixed: false,
      fixed2: false,
      index: 0,
      ordertotalshippingIndex: '',
      ordertotalpriceIndex: '',
      orderTotalItemsinfo: '',
      ordernow: '',
      delieverydate: '',
      delieverynumber: '',
      info: '',
      orderdelievery: '',
      totaldelieverydate: '',
      totaldelieverydate3: '',
      loading: true,
      ordernumber: '',
      membernumber: ''
    }
  },
  computed: {
    // buyItems () {
    //   return this.orderTotalItems[this.index].buyItem
    // }
    noorders () {
      if (this.orderTotalItems.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/order')
      .then((res) => {
        if (res.data.success) {
          const orderTotalItems = res.data.result
          this.orderTotalItems = orderTotalItems
          const buyItem = res.data.result.buyItem
          this.buyItem = buyItem
          const totaldelieverydate = orderTotalItems.map(function (item, index, array) {
            return item.delieverydate
          })
          this.totaldelieverydate = totaldelieverydate
          this.loading = false
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
  },
  methods: {
    ordernumbersearch (ordernumber) {
      this.axios
        .get(process.env.VUE_APP_API + '/order')
        .then((res) => {
          if (res.data.success) {
            const orderTotalItems = res.data.result.filter(function (item) {
              return item._id === ordernumber
            })
            this.orderTotalItems = orderTotalItems
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
    },
    membernumbersearch (membernumber) {
      this.axios
        .get(process.env.VUE_APP_API + '/order')
        .then((res) => {
          if (res.data.success) {
            const orderTotalItems = res.data.result.filter(function (item) {
              return item.user === membernumber
            })
            this.orderTotalItems = orderTotalItems
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
    },
    lasttime () {
      return this.orderTotalItems.reverse()
    },
    allonly () {
      this.axios
        .get(process.env.VUE_APP_API + '/order')
        .then((res) => {
          if (res.data.success) {
            const orderTotalItems = res.data.result
            this.orderTotalItems = orderTotalItems
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
    },
    delieveryok () {
      this.axios
        .get(process.env.VUE_APP_API + '/order')
        .then((res) => {
          if (res.data.success) {
            const orderTotalItems = res.data.result.filter(function (item) {
              return item.delieverynumber !== '' && item.delieverynumber !== undefined
            })
            this.orderTotalItems = orderTotalItems
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
    },
    delieverynotok () {
      this.axios
        .get(process.env.VUE_APP_API + '/order')
        .then((res) => {
          if (res.data.success) {
            const orderTotalItems = res.data.result.filter(function (item) {
              return item.delieverynumber === '' || item.delieverynumber === undefined
            })
            this.orderTotalItems = orderTotalItems
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
    },
    deletee (orderTotalItems, idx) {
      this.$swal({
        icon: 'warning',
        title: '確定刪除嗎?',
        text: '再考慮仔細',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: '不用懷疑',
        cancelButtonText: '再考慮一下..'
      }).then((value) => {
        if (value.isConfirmed) {
          this.axios.delete(process.env.VUE_APP_API + '/order/' + orderTotalItems._id)
            .then((res) => {
              if (res.data.success) {
                this.orderTotalItems.splice(idx, 1)
              }
            }).then(() => {
              this.$swal({
                icon: 'success',
                title: '已刪除'
              })
            })
        } else {
        }
      })
    },
    openorder (orderTotalItems) {
      this.fixed = true
      const index = this.orderTotalItems.indexOf(orderTotalItems)
      const ordertotalshippingIndex = this.orderTotalItems[index].theshipping
      const ordertotalpriceIndex = this.orderTotalItems[index].totalprice
      this.index = index
      this.ordertotalshippingIndex = ordertotalshippingIndex
      this.ordertotalpriceIndex = ordertotalpriceIndex
      const orderTotalItemsinfo = this.orderTotalItems[index]
      this.orderTotalItemsinfo = orderTotalItemsinfo
      const buyItems = this.orderTotalItems[this.index].buyItem
      this.buyItems = buyItems
    },
    delivery (orderTotalItems) {
      this.fixed2 = true
      this.index = this.orderTotalItems.indexOf(orderTotalItems)
      this.ordernow = this.orderTotalItems[this.index].ordernow
      this.totaldelieverydate3 = this.orderTotalItems[this.index].delieverydate
      this.delieverynumber = this.orderTotalItems[this.index].delieverynumber
      this.info = this.orderTotalItems[this.index].info
    },
    savebtn (orderTotalItems) {
      this.axios.patch(process.env.VUE_APP_API + '/order/' + this.orderTotalItems[this.index]._id, { ordernow: this.ordernow, delieverydate: this.totaldelieverydate3, delieverynumber: this.delieverynumber, info: this.info })
        .then(res => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '已儲存'
            })
            this.orderTotalItems[this.index].ordernow = this.ordernow
            this.orderTotalItems[this.index].delieverydate = this.totaldelieverydate3
            this.orderTotalItems[this.index].delieverynumber = this.delieverynumber
            this.orderTotalItems[this.index].info = this.info
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
        .catch(err => {
          console.log(err)
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: err.response.data.message
          })
        })
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.bgw{
  background: white;
}
.outside{
  overflow: hidden;
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans JP', sans-serif;
}
.ordersure{
    width: 90%;
    margin-left: 5%;
}
.senafter::after{
  content: "";
  width: 1px;
  height: 100%;
  position: absolute;
  left: 100%;
  top: 0;
  background: rgb(0, 0, 0);
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
.q-table__card {
    color: #000;
    background-color: #fff;
    border-radius: 0px;
    box-shadow: 0 1px 5px rgba(255, 255, 255, 0.952);
}
.img{
  width: 100%;
}
.w20{
  width: 20%;
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
