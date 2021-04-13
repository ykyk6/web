<template>
  <div class="q-pa-md row justify-start">
    <!-- 訂購確認 -->
<div class="ordersure q-mt-md">
  <!--  -->
  <div class="row q-mx-md q-mt-sm" style="border:1px solid black">
    <div class=" col-12 ">
      <div class="row">
      <div class="col-3 bg-grey-4 row items-center justify-center">
        <div class="">以會員ID搜尋</div>
        </div>
     <div class=" col-6"><q-input v-model="membernumber" type="text" dense borderless standout square></q-input></div>
     <div class="col-1 bg-dark text-white row items-center justify-center"><q-btn flat square @click="membernumbersearch(membernumber)" class="full-width">搜尋</q-btn></div>
      <div class="col-2 bg-grey-8 text-white row items-center justify-center"><q-btn flat @click="allmembernumbersearch" class="full-width">顯示全部</q-btn></div>
     </div>
      </div>
    </div>
  <!--  -->
  <div class="q-pa-md">
    <div class=" text-h7" v-if="nousers">目前沒有資料</div>
    <div class="" v-else>
    <q-markup-table style="border:1px solid black;padding:2px">
      <thead>
        <tr>
          <th class="text-center t24 bg-grey-4">顧客ID</th>
          <th class="text-center t19 bg-grey-4">帳號名</th>
          <th class="text-center t19 bg-grey-4">詳細資料</th>
          <th class="text-center t19 bg-grey-4">訂單一覽</th>
          <th class="text-center t19 bg-grey-4">設為管理員</th>
        </tr>
      </thead>
      <tbody>
      <template v-for='(useraccount, index) in useraccounts'>
        <tr :key='index'>
          <td class="text-center">{{ useraccount._id }}</td>
          <td class="text-center">{{ useraccount.account }}</td>
          <td class="text-center"><q-btn round borderless unelevated icon="description" size="10px" style="background:transparent;color:grey" @click="openinfo(useraccount)"/></td>
           <td class="text-center"> <q-btn round borderless unelevated icon="description" size="10px" style="background:transparent;color:#00838f" @click="openperorder(useraccount)"/></td>
          <td class="text-center"> <q-btn round unelevated :class="{ 'black': useraccount.manager, 'cyan-8': !useraccount.manager }" icon="assignment_ind" size="10px" @click="managebtn(useraccount)"/>
          </td>
        </tr>
      </template>
      </tbody>
    </q-markup-table>
    </div>
    <!-- q-dialog1 -->
      <q-dialog
      v-model="fixed"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black">
      <tbody :key='index'>
        <tr>
          <td class="text-left t1 bg-grey-4">ID</td>
          <td class="text-left">{{ userperaccount._id }}</td>
        </tr>
        <tr>
             <td class="text-left t2 bg-grey-4">帳號名</td>
             <td class="text-left">{{ userperaccount.account }}</td>
        </tr>
         <tr>
          <td class="text-left t3 bg-grey-4">會員名</td>
          <td class="text-left">{{ userperaccount.name }}</td>
         </tr>
         <tr>
          <td class="text-left t4 bg-grey-4">生日</td>
           <td class="text-left">{{ userperaccount.date }}</td>
         </tr>
          <tr>
          <td class="text-left t5 bg-grey-4">E-mail</td>
          <td class="text-left">{{ userperaccount.email }}</td>
          </tr>
        </tbody>
        </q-markup-table>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- q-dialog2 -->
      <q-dialog
      v-model="fixed2"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
       <div class="sen2"></div>
        <div v-show="noorder(perorder)" class="column items-center justify-center"><div class="noorder">尚沒有訂單</div></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black" v-show="noorder2(perorder)">
      <thead>
        <tr>
          <th class="text-center t1 bg-grey-4">訂購日期</th>
          <th class="text-center t2 bg-grey-4">訂單編號</th>
          <th class="text-center t3 bg-grey-4">總金額</th>
          <th class="text-center t3 bg-grey-4">付款方式</th>
          <th class="text-center t4 bg-grey-4">訂購明細</th>
          <th class="text-center t5 bg-grey-4">訂單狀態</th>
        </tr>
        </thead>
         <tbody>
       <template v-for='(perorder, index) in perorder'>
        <tr :key='index'>
          <td class="text-center">{{ perorder.date }}</td>
          <td class="text-center">{{ perorder._id }}</td>
          <td class="text-center">￥{{ perorder.totalprice }}</td>
           <td class="text-center">{{ perorder.pay }}</td>
          <td class="text-center"><q-btn round color="cyan-8" icon="assignment_ind" size="10px" @click="perinfo(perorder)"/></td>
          <td class="text-center"><q-btn round color="cyan-8" icon="local_shipping" size="10px" @click="opensituation(perorder)"/></td>
        </tr>
        </template>
        </tbody>
        </q-markup-table>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!-- q-dialog3 -->
      <q-dialog
      v-model="fixed3"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
          <div class="">訂單詳情</div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black">
      <thead>
        <tr>
          <th class="text-center t1 bg-grey-4">圖片</th>
          <th class="text-center t2 bg-grey-4">品項</th>
          <th class="text-center t3 bg-grey-4">價錢</th>
          <th class="text-center t4 bg-grey-4">數量</th>
           <th class="text-center t4 bg-grey-4">小計</th>
        </tr>
        </thead>
         <tbody>
       <template v-for='(buyItem, index) in buyItems'>
        <tr :key='index'>
          <td class="text-center"><img :src="buyItem.img" class="img2"></td>
          <td class="text-center">{{ buyItem.title }}</td>
          <td class="text-center">￥{{ buyItem.price }}</td>
          <td class="text-center">{{ buyItem.quantity }}</td>
          <td class="text-center">￥{{ buyItem.price * buyItem.quantity }}</td>
        </tr>
        </template>
        </tbody>
        <thead>
            <tr>
             <th class="text-center t2 bg-grey-4"></th>
             <th class="text-center t1 bg-grey-4"></th>
             <th class="text-center t2 bg-grey-4"></th>
            <th class="text-center t3 bg-grey-4 text-deep-orange-7">運費</th>
            <th class="text-center t4 bg-grey-4">￥{{ perordershipping }}</th>
            </tr>
        </thead>
        <thead>
            <tr>
             <th class="text-center t2 bg-grey-4"></th>
             <th class="text-center t1 bg-grey-4"></th>
             <th class="text-center t2 bg-grey-4"></th>
            <th class="text-center t3 bg-grey-4 text-deep-orange-7">合計</th>
            <th class="text-center t4 bg-grey-4">￥{{ perordertotalprice }}</th>
            </tr>
        </thead>
        </q-markup-table>
          <!--  -->
          <div class="q-mt-md"><div class=" q-mb-md">收件資料</div>
           <template>
            <q-markup-table style="border:1px solid black">
            <tbody>
            <tr>
          <td class="text-left titleinfo bg-grey-4">收件人</td>
           <td class="text-left bg-white">{{ perorderinfo.name }}</td>
        </tr>
        <tr>
          <td class="text-left titleinfo bg-grey-4">郵編</td>
           <td class="text-left  bg-white">{{ perorderinfo.post }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">地區</td>
           <td class="text-left  bg-white">{{ perorderinfo.city }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">地址</td>
           <td class="text-left  bg-white">{{ perorderinfo.address }}</td>
        </tr>
        <tr>
         <td class="text-left titleinfo bg-grey-4">電話</td>
           <td class="text-left  bg-white">{{ perorderinfo.telephonenumber }}</td>
        </tr>
        </tbody>
        </q-markup-table>
           </template>
        </div>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
     <!-- q-dialog4 -->
      <q-dialog
      v-model="fixed4"
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black">
      <tbody :key='index'>
        <tr>
          <td class="text-left t1 bg-grey-4">訂單狀態</td>
          <td v-if="noordersituation">尚沒有更新</td>
          <td v-else class="text-left">{{ perordernow }}</td>
        </tr>
        <tr>
             <td class="text-left t2 bg-grey-4">出貨日期</td>
             <td class="text-left">
               <div v-if="noordersituation" class="">尚沒有更新</div>
               <div v-else class="">{{ perorderdelieverydate }}</div></td>
        </tr>
         <tr>
          <td class="text-left t3 bg-grey-4">物流方式/追蹤編號</td>
          <td class="text-left">
            <div v-if="noordersituation" class="">尚沒有更新</div>
            <div v-else class="">{{ perorderdelieverynumber }}</div></td>
         </tr>
         <tr>
          <td class="text-left t4 bg-grey-4">備註</td>
           <td class="text-left">
              <div v-if="noordersituation" class="">尚沒有更新</div>
             <div v-else class="">{{ perorderinfo }}</div></td>
         </tr>
        </tbody>
        </q-markup-table>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-black">
          <q-btn label="OK" v-close-popup style="background:black;color:white" class="q-mb-md"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
  </div>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fixed: false,
      fixed2: false,
      fixed3: false,
      fixed4: false,
      label2: false,
      managebtnstyle: false,
      useraccounts: [],
      userperaccount: [],
      perorder: [],
      buyItems: [],
      perordershipping: '',
      perordertotalprice: '',
      perordernow: '',
      perorderdelieverydate: '',
      perorderdelieverynumber: '',
      perorderinfo: '',
      noordersituation: false
    }
  },
  computed: {
    nousers () {
      if (this.useraccounts.length === 0) {
        return true
      } else {
        return false
      }
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/users/')
      .then((res) => {
        if (res.data.success) {
          const useraccounts = res.data.result
          this.useraccounts = useraccounts
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
    allmembernumbersearch () {
      this.axios
        .get(process.env.VUE_APP_API + '/users/')
        .then((res) => {
          if (res.data.success) {
            const useraccounts = res.data.result
            this.useraccounts = useraccounts
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
        .get(process.env.VUE_APP_API + '/users/')
        .then((res) => {
          if (res.data.success) {
            const useraccounts = res.data.result.filter(function (item) {
              return item._id === membernumber
            })
            this.useraccounts = useraccounts
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
    openinfo (useraccount) {
      this.fixed = true
      const index = this.useraccounts.indexOf(useraccount)
      const userperaccount = this.useraccounts[index]
      this.userperaccount = userperaccount
    },
    openperorder (useraccount) {
      this.fixed2 = true
      this.axios
        .get(process.env.VUE_APP_API + '/order/')
        .then((res) => {
          if (res.data.success) {
            const index = this.useraccounts.indexOf(useraccount)
            const userperaccount = this.useraccounts[index]
            this.userperaccount = userperaccount
            const thisid = userperaccount._id
            const perorder = res.data.result.filter(function (item, index, array) {
              return item.user === thisid
            })
            this.perorder = perorder
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
    perinfo (perorder) {
      this.fixed3 = true
      const buyItems = perorder.buyItem
      this.buyItems = buyItems
      const index = this.perorder.indexOf(perorder)
      const perordershipping = this.perorder[index].theshipping
      this.perordershipping = perordershipping
      const perordertotalprice = this.perorder[index].totalprice
      this.perordertotalprice = perordertotalprice
      const perorderinfo = this.perorder[index]
      this.perorderinfo = perorderinfo
    },
    managebtn (useraccount) {
      const index = this.useraccounts.indexOf(useraccount)
      if (this.useraccounts[index].manager !== true) {
        this.axios.patch(process.env.VUE_APP_API + '/users/' + this.useraccounts[index]._id, { manager: true })
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'success',
                title: '已加為管理員'
              })
              this.managebtnstyle = !this.managebtnstyle
              this.useraccounts[index].manager = !this.useraccounts[index].manager
            } else {
              this.$swal({
                icon: 'error',
                title: '錯誤',
                text: res.data.message
              })
            }
          })
      } else {
        this.axios.patch(process.env.VUE_APP_API + '/users/' + this.useraccounts[index]._id, { manager: false })
          .then(res => {
            if (res.data.success) {
              this.$swal({
                icon: 'info',
                title: '已取消管理員'
              })
              this.managebtnstyle = !this.managebtnstyle
              this.useraccounts[index].manager = !this.useraccounts[index].manager
            }
          })
      }
    },
    opensituation (perorder) {
      this.fixed4 = true
      const index = this.perorder.indexOf(perorder)
      const perordernow = this.perorder[index].ordernow
      this.perordernow = perordernow
      const perorderdelieverydate = this.perorder[index].delieverydate
      this.perorderdelieverydate = perorderdelieverydate
      const perorderdelieverynumber = this.perorder[index].delieverynumber
      this.perorderdelieverynumber = perorderdelieverynumber
      const perorderinfo = this.perorder[index].info
      this.perorderinfo = perorderinfo
      console.log(this.perorderinfo)
      console.log(this.perorder[index].ordernow)
      if (this.perorderinfo === 'undefined') {
        this.noordersituation = true
      }
    },
    noorder (perorder) {
      if (perorder.length === 0) {
        return true
      } else {
        return false
      }
    },
    noorder2 (perorder) {
      if (perorder.length === 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.bgw{
  background: white;
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
.noorder{
  font-size: 20px;
  color: grey;
}
.img{
  width: 50%;
}
.img2{
    width: 80%;
}
.t1{
  width: 15%;
}
.t2{
  width: 18%;
}
.t19{
  width: 19%;
}
.t24{
  width: 24%;
}
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
.black{
  color:black;
  background: #0097a7;
}
.cyan8{
  background: #0097a7;
  color: white;
}
</style>
