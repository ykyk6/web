<template>
<div class=""><div v-show="noreplypage" class="noreply q-mt-md"><q-icon name="search_off" size="50px"></q-icon>表示する内容がありません・</div>
  <div class="q-pa-md row justify-start" v-if="asks.length">
    <!-- 訂購確認 -->
<div class="ordersure q-mt-md">
  <div class="">
    <q-markup-table style="border:1px solid black;padding:2px">
      <thead>
        <tr>
          <th class="text-center text-white bg-black">時間</th>
          <th class="text-center text-white t2 bg-black">お問い合わせ番号</th>
           <th class="text-center text-white t2 bg-black">タイトル</th>
          <th class="text-center text-white t3 bg-black">お問い合わせ内容</th>
           <th class="text-center text-white t3 bg-black">お問い合わせ返信</th>
          <th class="text-center text-white t3 bg-black">削除</th>
        </tr>
      </thead>
      <tbody>
      <template v-for='(ask, index) in asks'>
        <tr :key='index' class="bgw">
          <td class="text-center">{{ ask.date }}</td>
          <td class="text-center">{{ ask._id }}</td>
           <td class="text-center">{{ ask.title }}</td>
          <td class="text-center"><q-btn round borderless unelevated icon="description" size="10px"  style="background:transparent;color:#00838f" @click="opencontent(ask)"/></td>
           <td class="text-center"> <q-btn round borderless unelevated icon="markunread" size="10px" :class="{'replyyet':replyyet(ask), 'replynotyet': !replyyet(ask)}" @click="openreply(ask)"/></td>
          <td class="text-center"> <q-btn round borderless unelevated  icon="delete" size="10px" style="background:transparent;color:black" @click="deletee(ask)"/>
          </td>
        </tr>
      </template>
      </tbody>
    </q-markup-table>
    <!-- q-dialog1 -->
      <q-dialog
      v-model="fixed"
      class=""
    >
      <q-card style="width: 950px; max-width: 80vw;" class="q-pa-md bgw">
        <q-card-section>
      <div class="box2">
      </div>
        <div class="sen2"></div>
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black">
      <tbody>
        <template>
         <tr :key="index">
          <td class="text-left w-2 bg">アカウント</td>
          <td class="text-left bgw column justify-center">
              {{ perask.account }}
          </td>
        </tr>
        <tr :key="index">
          <td class="text-left w-2 bg">氏名</td>
          <td class="text-left bgw">
              {{ perask.name }}
          </td>
        </tr>
        <tr :key="index">
          <td class="text-left w-2 bg">メールアドレス</td>
          <td class="text-left bgw">
              {{ perask.mail }}
          </td>
        </tr>
        <tr :key="index">
          <td class="text-left w-2 bg">タイトル</td>
          <td class="text-left bgw">
            {{ perask.title }}
          </td>
        </tr>
        <tr :key="index">
          <td class="text-left w-2 bg">お問い合わせ内容</td>
          <td class="text-left bgw">
              {{ perask.question }}
          </td>
        </tr>
        </template>
      </tbody>
    </q-markup-table>
      <div class="sen"></div>
      <div class="box">
      </div>
          <!--  -->
        </q-card-section>

        <q-card-actions align="center" class="bgw text-black">
          <q-btn label="閉じる" v-close-popup style="background:black;color:white" class="q-mb-md"/>
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
        </q-card-section>
        <q-card-section class="q-pt-none">
           <q-markup-table style="border:1px solid black">
        <thead>
        <tr>
          <th class="text-center t1 bg">お問い合わせ返信</th>
        </tr>
        </thead>
        <tbody>
        <template>
        <tr :key="index">
          <td class="text-left bgw">
              <div class="" v-if="noreply">まだ返信がありません。</div>
              <div class="" v-else>{{ perask2.reply }}</div>
          </td>
        </tr>
        </template>
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
      user: '',
      fixed: false,
      fixed2: false,
      fixed3: false,
      fixed4: false,
      label2: false,
      asks: [],
      perask: '',
      perask2: '',
      noreply: false,
      noreplypage: false
    }
  },
  computed: {
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/ask')
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result)
          const id = this.$store.state.user.id
          const asks = res.data.result.filter(function (item, index, array) {
            return item.userid === id
          })
          this.asks = asks
          if (this.asks.length === 0) {
            this.noreplypage = true
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
  },
  methods: {
    opencontent (ask) {
      this.fixed = true
      const index = this.asks.indexOf(ask)
      const perask = this.asks[index]
      this.perask = perask
    },
    openreply (ask) {
      this.fixed2 = true
      const index = this.asks.indexOf(ask)
      const perask2 = this.asks[index]
      console.log(ask)
      this.perask2 = perask2
      if (this.perask2.isReply === true) {
        this.noreply = false
      } else {
        this.noreply = true
      }
    },
    deletee (ask, index) {
      this.$swal({
        icon: 'warning',
        title: '削除しますか？',
        // text: '再考慮仔細',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'はい',
        cancelButtonText: 'キャンセル'
      }).then((value) => {
        console.log(value)
        if (value.isConfirmed) {
          this.axios.delete(process.env.VUE_APP_API + '/ask/' + ask._id)
            .then((res) => {
              if (res.data.success) {
                this.asks.splice(index, 1)
              }
            }).then(() => {
              this.$swal({
                icon: 'success',
                title: '削除しました。'
              })
            })
        } else {
          // this.$swal({
          //   icon: 'success',
          //   title: '取消刪除'
          // })
        }
      })
    },
    replyyet (ask) {
      const index = this.asks.indexOf(ask)
      const peraskisReply = this.asks[index].isReply
      if (peraskisReply === true) {
        return true
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.noreply{
  font-size: 25px;
  color: grey;
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.bgw{
  background-image: url(~@/assets/bg-white.png);
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
.replyyet{
  background:transparent;
  color:red;
}
.replynotyet{
  background:transparent;
  color:grey;
}
</style>
