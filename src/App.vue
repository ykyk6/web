<template>
  <div id="app">
    <q-layout view="hhh lpr fFf" class="" >
      <!-- 最上橫軸 -->
    <q-header reveal class="bg-white" height-hint="98">
      <!--  橫軸裡包的上面橫軸 -->
      <!-- 橫軸裡包的下面橫軸 -->
          <q-tabs align="center" class="w-100 text-dark" unelevated>
            <div class="logoichi" @click="topbtn"></div>
          <q-route-tab v-if="$q.screen.gt.sm"  to="/" label="トップ"   class="text-light top"/>
        <q-route-tab  v-if="$q.screen.gt.sm" to="/onlineshop" label="オンラインショップ" class="shop"/>
         <q-route-tab
          v-if="$q.screen.gt.sm && user.id.length === 0"
          to="/login"
          label="ログイン"
          class="login"
          />
         <q-route-tab
         v-if="$q.screen.gt.sm && user.id.length > 0"
         to=""
         @click="logout"
         label="ログアウト"
         class="logout"/>
         <q-route-tab v-if="$q.screen.gt.sm"  to="/thecart" label="カート" class="cart"/>
         <q-route-tab  v-if="$q.screen.gt.sm" to="/Frontmember" label="マイページ" class="mypage"/>
          <q-route-tab  v-if="$q.screen.gt.sm" to="/Message" label="お問い合わせ" class="contactus"/>
        <!-- 右上麵包選單 -->
        <q-btn dense flat round icon="menu" @click="right = !right" class="menuposition"/>
      </q-tabs>
      <!-- 麵包選單展開欄 -->
          <q-drawer
        v-model="right"
        side="right"
        :breakpoint="500"
        width="400"
        overlay
        content-class="bg-dark"
      >
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in menuList" class="bg-info">
              <q-item :key="index" clickable :to="{name: menuItem.link}" :active="menuItem.label === ''" v-ripple class="text-area-ichi">
                <q-item-section avatar class="text-ichi">
                </q-item-section>
                <q-item-section style="line-height:2rem; font-size:1.3rem;color:white;">
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
          </q-header>
          <div v-if="ismanager" class="bg-black mgnbtn"><q-btn unelevated class="mgnbtnbtn" color="black" size="22px" to="Backmember">後臺管理</q-btn></div>
    <!-- </q-drawer> -->
    <!-- 內容開始 -->
    <q-page-container class=" w-100 h-100" >
       <!-- <vuescroll :ops="ops"> -->
        <router-view class=""/>
       <!-- </vuescroll> -->
    </q-page-container>
  </q-layout>
</div>
</template>

<script>
import 'aos/dist/aos.css'
const menuList = [
  {
    label: 'マイページ',
    link: 'Frontmember',
    separator: false
  },
  {
    label: 'トップ',
    link: 'Home',
    separator: true
  },
  {
    label: 'オンラインショップ',
    link: 'Onlineshop',
    separator: true
  },
  {
    label: 'お問い合わせ',
    link: 'Message',
    separator: false
  }
  // {
  //   label: '後臺管理',
  //   link: 'Backmember',
  //   separator: false
  // },
  // {
  //   label: '購入者情報の入力',
  //   link: 'orderinformation',
  //   separator: false
  // }
]
export default {
  data () {
    return {
      right: false,
      drawer: true,
      menuList,
      mgnappear: false
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    ismanager () {
      return this.$store.state.user.manager
    }
  },
  methods: {
    topbtn () {
      this.$router.push('/')
    },
    logout () {
      this.$swal({
        icon: 'warning',
        title: 'ログアウトしますか？',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'はい',
        cancelButtonText: 'キャンセル'
      }).then((value) => {
        if (value.isConfirmed) {
          this.axios.delete(process.env.VUE_APP_API + '/users/logout')
            .then(res => {
              if (res.data.success) {
                this.$swal({
                  icon: 'success',
                  title: 'ログアウトしました',
                  text: 'ご利用ありがとうございました。'
                })
                this.$store.commit('logout')
              }
            })
        } else {
        }
      })
    },
    heartbeat () {
      this.axios.get(process.env.VUE_APP_API + '/users/heartbeat')
        .then(res => {
          if (this.user.id.length > 0) {
            if (!res.data) {
              alert('登入時效已過')
              this.$store.commit('logout')
            }
          }
        })
        .catch(err => {
          console.log(err)
          alert('發生錯誤')
          this.$store.commit('logout')
        })
    }
  },
  mounted () {
    this.heartbeat()
    setInterval(() => {
      this.heartbeat()
    }, 5000)
    console.log(this.$store.state.user)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
 @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600&display=swap');
body{
  width: 100vw;
  height:100vh;
  overflow-x: hidden;
}
.logoichi{
  width: 15%;
  height: 80px;
  background-image: url(~@/assets/macchamaccha4.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: 25px;
  top: 0;
}
.logoichi:hover{
  cursor: pointer;
}
.top,.shop,.login,.logout,.cart,.mypage,.contactus{
  margin-top: -10px;
}
.top::after{
  content:"Top";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color:#a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.shop::after{
  content:"Onlineshop";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color: #a09b9b;
  font-size: 10px;
  position: absolute;
  left: 46%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.login::after{
  content:"Login";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color: #a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
   /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.logout::after{
  content:"Logout";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color:#a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.cart::after{
  content:"Cart";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color:#a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.mypage::after{
  content:"MyPage";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color:#a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.contactus::after{
  content:"ContactUs";
  /* font-family: 'Bodoni Moda', serif; */
  font-family: 'Caveat', cursive;
  font-weight: 600;
  letter-spacing: 1px;
  color:#a09b9b;
  font-size: 10px;
  position: absolute;
  left: 50%;
  top: 70%;
  transform: translate(-50%,0);
  /* background: rgba(168, 167, 170, 0.8); */
  line-height: 1;
}
.q-card {
    background: #ffffff;
}
.q-tab__label {
    font-size: 14px;
    line-height: 1.715em;
    font-weight: 500;
    font-family: "Noto Sans JP";
}
.q-tab__indicator {
    opacity: 0;
    height: 0px;
    background: transparent;
}
.isFixed{
    position:fixed;
    background-color:#fff;
    top:100px;
    z-index:999;
}
.w-100{
  width: 100vw;
}
.h-100{
  height: 100vh;
}
.text-area-ichi{
  margin-top: 10px;
}
.text-ichi{
  line-height: 1rem;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height:100vh;
  overflow-x: hidden;
}
.q-item__section--avatar{
  min-width:0
}
.bg-white{
  background: white;
}
.text-dark {
  color:black
}
#logo {
position: absolute;
width:17%;
height: 260px;
background: #6A7735;
opacity: 0.8;
z-index: 20;
font-size: 3rem;
color: beige;
top: 0;
left: 0;
}
#top1{
  width:100%;
  height:140px;
  opacity: 0.7;
  background: #d7d8d4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.tpc{
  font-size: 1.8rem;
  color: #6A7735;
  margin-right: 90px;
}
.menuposition{
  top:0;
  left: 3%;
  border: 1px solid rgb(255, 255, 255) ;
  border-radius: 50%;
  transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s;
}
.menuposition:hover{
  transform: scale(1.5);
}
.mt-8 {
  margin-top: 2%;
}
.q-tabs{
  height: 80px;
}
.q-drawer .q-item__section--main {
    margin-top: 30px;
    font-size: 1.5rem;
}
.q-drawer .q-item__section--avatar{
  min-width:0;
}
.w-45{
  width: 500px;
}
.mgnbtn{
  width: 130px;
  height: 60px;
  position: fixed;
  top: 100px;
  right: 1%;
  z-index: 10;
  border-radius: 3px;
  border: 3px solid rgb(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
