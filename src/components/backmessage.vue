<template>
  <div class="q-pa-md row justify-start">
<!--  -->
<div class="ordersure q-mt-md">
  <div class="row q-mx-md" style="border:1px solid black">
    <div class=" col-2 bg-grey-4"><q-btn flat @click="lasttime" class="full-width senafter"> 從新到舊</q-btn></div>
    <div class=" col-2 bg-grey-4"><q-btn flat @click="allonly" class="full-width senafter"> 顯示全部</q-btn></div>
    <div class=" col-2 bg-grey-4"><q-btn flat @click="guestonly" class="full-width senafter"> 只顯示訪客</q-btn></div>
    <div class=" col-2 bg-grey-4"><q-btn flat @click="memberonly" class="full-width senafter"> 只顯示會員</q-btn></div>
    <div class=" col-2 bg-grey-4"><q-btn flat @click="replyok" class="full-width senafter"> 顯示已回覆</q-btn></div>
    <div class=" col-2 bg-grey-4"><q-btn flat @click="replynotok" class="full-width senafter"> 顯示未回覆</q-btn></div>
  </div>
   <!--  -->
  <div class="row q-mx-md q-mt-sm" style="border:1px solid black">
    <div class=" col-6 ">
      <div class="row">
      <div class="col-4 bg-grey-4 row items-center justify-center">
        <div class="">以諮詢編號搜尋</div>
        </div>
     <div class=" col-6"><q-input v-model="asknumber" type="text" dense borderless></q-input></div>
     <div class="col-2 bg-dark text-white row items-center justify-center"><q-btn flat @click="asknumbersearch(asknumber)" class="full-width">搜尋</q-btn></div>
     </div>
      </div>
      <!--  -->
    <div class=" col-6 ">
      <div class="row">
      <div class="col-4 bg-grey-4 row items-center justify-center">
        <div class="">以會員ID搜尋</div>
        </div>
     <div class=" col-6"><q-input v-model="memberid" type="text" dense borderless standout></q-input></div>
     <div class="col-2 bg-dark text-white row items-center justify-center"><q-btn flat @click="memberidsearch(memberid)" class="full-width">搜尋</q-btn></div>
     </div>
      </div>
    </div>
  <div class="q-pa-md">
    <div class=" text-h7" v-if="noasks">目前沒有資料</div>
    <div class="" v-else>
    <q-markup-table style="border:1px solid black;padding:2px">
      <thead>
        <tr>
          <th class="text-center t3 bg-grey-4">諮詢日期</th>
          <th class="text-center t2 bg-grey-4">諮詢編號</th>
          <th class="text-center t3 bg-grey-4">諮詢人身分</th>
          <th class="text-center t2 bg-grey-4">會員ID</th>
          <th class="text-center t3 bg-grey-4">諮詢內容</th>
          <th class="text-center t3 bg-grey-4">是否已回覆</th>
          <th class="text-center t3 bg-grey-4">刪除</th>
        </tr>
      </thead>
      <tbody>
      <template v-for='(ask, index) in asks'>
        <tr :key='index'>
          <td class="text-center">{{ ask.date }}</td>
          <td class="text-center">{{ ask._id }}</td>
          <td class="text-center">{{ ask.user }}</td>
          <td class="text-center">{{ ask.userid }}</td>
           <td class="text-center"> <q-btn round borderless unelevated icon="description" size="10px" style="background:transparent;color:#00838f" @click="opencontent(ask)"/></td>
          <td v-if="ask.isReply" class="text-center"> <q-btn round borderless unelevated icon="done" size="10px" style="background:transparent;color:red;"/></td>
          <td v-else class="text-center"> <q-btn round borderless unelevated icon="clear" size="10px" style="background:transparent;color:grey;"/></td>
           <td class="text-center"> <q-btn round borderless unelevated icon="delete" size="10px" style="background:transparent;color:black;" @click="deletee(ask)"/></td>
        </tr>
      </template>
      </tbody>
    </q-markup-table>
    </div>
    <!-- q-dialog1 -->
      <q-dialog
      v-model="fixed"
      no-focus
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
         <div class="text-h6">顧客諮詢內容：</div>
           <q-markup-table style="border:1px solid black">
      <tbody :key='index'>
          <tr>
          <td class="text-left t1 bg-grey-4">諮詢日期</td>
          <td class="text-left">{{ perask.date }}</td>
        </tr>
          <tr>
          <td class="text-left t1 bg-grey-4">諮詢問題編號</td>
          <td class="text-left">{{ perask._id }}</td>
        </tr>
        <tr>
          <td class="text-left t1 bg-grey-4">諮詢人帳號名</td>
          <td class="text-left">{{ perask.account }}</td>
        </tr>
        <tr>
             <td class="text-left t2 bg-grey-4">諮詢人名</td>
             <td class="text-left">{{ perask.name }}</td>
        </tr>
         <tr>
          <td class="text-left t3 bg-grey-4">諮詢人信箱</td>
          <td class="text-left">{{ perask.mail }}</td>
         </tr>
         <tr>
          <td class="text-left t4 bg-grey-4">諮詢標題</td>
           <td class="text-left">{{ perask.title }}</td>
         </tr>
          <tr>
          <td class="text-left t5 bg-grey-4">諮詢內容</td>
          <td class="text-left">{{ perask.question }}</td>
          </tr>
        </tbody>
        </q-markup-table>
        <!-- replyplace -->
        <div class="q-mt-xl">
         <div class="text-h6">諮詢內容回覆區：</div>
          <q-markup-table style="border:1px solid black">
        <thead>
        <tr>
          <th class="text-center t1 bg-grey-4">回覆</th>
        </tr>
        </thead>
        <tbody>
        <template>
        <tr>
          <td class="text-left">
              <q-input v-model="perask.reply" dense outlined type="textarea" :readonly="perask.isReply" :disabled="perask.isReply" />
          </td>
        </tr>
        <tr v-show="replybtnappear" class="text-center">
          <q-btn label="送出" @click="submit()" style="background:black;color:white" class="q-mb-md q-mt-md q-mr-md" :disabled="perask.isReply"/>
          <q-btn label="取消" @click="cancel()" v-close-popup style="background:black;color:white" class="q-mb-md q-mt-md"/>
          </tr>
        </template>
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
    <!-- 2 -->
      <q-dialog v-model="fixed2" persistent>
      <q-card style="width: 350px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section class="column items-center">
          <q-avatar icon="priority_high" color="red" text-color="white" size="90px" />
          <div class="q-ml-sm text-h4 q-mt-xl">缺少回覆</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn outline label="關閉" color="black" v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
      <!-- 3  -->
      <q-dialog v-model="fixed3" persistent>
      <q-card style="width: 350px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section class="column items-center">
          <q-avatar icon="priority_high" color="red" text-color="white" size="90px" />
          <div class="q-ml-sm text-h4 q-mt-xl">確定送出嗎?</div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn outline label="確定" color="black" v-close-popup @click="sure(perask)"/>
          <q-btn outline label="取消" color="black" v-close-popup @click="cancel()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
    <!--  -->
     <!-- 4  -->
      <q-dialog v-model="fixed4" persistent>
      <q-card style="width: 350px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section class="column items-center">
          <q-avatar icon="done" color="black" text-color="white" size="90px" />
          <div class="q-ml-sm text-h4 q-mt-xl">已送出</div>
          <q-btn outline label="關閉" color="black" @click="close" v-close-popup class="q-mt-md"/>
        </q-card-section>
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
      asks: [],
      ask: '',
      index: '',
      perask: '',
      reply: '',
      replybtnappear: true,
      memberid: '',
      asknumber: ''
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/ask')
      .then((res) => {
        if (res.data.success) {
          const asks = res.data.result
          this.asks = asks
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
    asknumbersearch (asknumber) {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item._id === asknumber
            })
            this.asks = asks
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
    memberidsearch (memberid) {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item.userid === memberid
            })
            this.asks = asks
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
      return this.asks.reverse()
    },
    guestonly () {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item.user === 'ゲスト'
            })
            this.asks = asks
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
    memberonly () {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item.user === '会員'
            })
            this.asks = asks
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
    allonly () {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result
            this.asks = asks
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
    replyok () {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item.isReply === true
            })
            this.asks = asks
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
    replynotok () {
      this.axios
        .get(process.env.VUE_APP_API + '/ask')
        .then((res) => {
          if (res.data.success) {
            const asks = res.data.result.filter(function (item) {
              return item.isReply === undefined
            })
            this.asks = asks
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
    opencontent (ask) {
      this.fixed = true
      const index = this.asks.indexOf(ask)
      const perask = this.asks[index]
      this.index = index
      this.perask = perask
    },
    submit (perask) {
      if (this.perask.length === 0) {
        this.fixed2 = true
      } else {
        this.fixed3 = true
      }
    },
    sure (perask) {
      this.axios.patch(process.env.VUE_APP_API + '/ask/' + this.perask._id, { reply: perask.reply, isReply: true })
        .then(res => {
          if (res.data.success) {
            this.fixed4 = true
          }
        })
      this.reply = this.perask.reply
      this.perask.isReply = true
    },
    deletee (ask, index) {
      this.$swal({
        icon: 'warning',
        title: '確定刪除嗎？',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: '是的',
        cancelButtonText: '取消'
      }).then((value) => {
        if (value.isConfirmed) {
          this.axios.delete(process.env.VUE_APP_API + '/ask/' + ask._id)
            .then((res) => {
              if (res.data.success) {
                this.asks.splice(index, 1)
              }
            }).then(() => {
              this.$swal({
                icon: 'success',
                title: '已刪除。'
              })
            })
        } else {
        }
      })
    }
  },
  computed: {
    noasks () {
      if (this.asks.length === 0) {
        return true
      } else {
        return false
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
    width: 88%;
    margin-left: 6%;
}
.noorder{
  font-size: 20px;
  color: grey;
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
.img2{
    width: 80%;
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
  margin-bottom: 18px;
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
.hide{
  z-index: -1;
}
</style>
