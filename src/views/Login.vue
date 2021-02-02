<template>
<!--login -->
  <div class="outside">
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
    <div class="q-gutter-md items-start loginbox">
      <div class="box" v-if="$q.screen.gt.sm"></div>
      <div class="title" data-aos="fade-up" data-aos-duration="1000">ログイン</div>
         <div class="titleE" data-aos="fade-up" data-aos-duration="1500">Login</div>
      <q-input
      v-model="account"
      filled type="account"
      placeholder="ユーザー名"
      hint="英数字と記号3文字以上10文字以内で入力して下さい"
      :rules="[
        val => !!val || '* 必須',
        val => val.length > 3 && val.length < 10 || '英数字と記号3文字以上10文字以内で入力して下さい',
        ]"
      class="set account"/>
      <!-- <q-badge outline color="primary" label="必須" class="badge-1"/> -->
      <q-input
      v-model="password"
      filled :type="isPwd ? 'password' : 'text'"
      placeholder="パスワード"
      hint="英数字と記号3文字以上10文字以内で入力して下さい"
      :rules="[
        val => !!val || '* 必須',
        val => val.length > 3 && val.length < 10 || '英数字と記号3文字以上10文字以内で入力して下さい',
        ]"
      class="set pawset">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="b-flex">
      <q-btn outline style="color: goldenrod;" label="ログイン" type="submit" class="loginbtn"/>
      <div class="regmonji"><p>新規会員登録はこちら➯</p></div>
      <q-btn outline style="color: blue;" label="新規会員登録" to="/reg"  class="regbtn"/>
    </div>
    </div>
     <!--  -->
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="60px" color="black" />
      </q-inner-loading>
     <!--  -->
    </q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      account: '',
      password: '',
      isPwd: 'true',
      visible: false
    }
  },
  methods: {
    onSubmit () {
      this.visible = true
      const object = { ...this.$data }
      delete object.isPwd
      this.axios.post(process.env.VUE_APP_API + '/users/login', object)
        .then(res => {
          if (res.data.success) {
            this.visible = false
            this.$store.commit('login', res.data.result)
            this.$swal({
              icon: 'success',
              title: 'ログイン成功',
              text: 'ログインしました。'
            })
              .then(() => {
                this.$router.go(-1)
              }).catch((error) => {
                console.log(error)
                this.visible = false
                alert('エーラ')
              })
            // console.log(this.$store.user.id)
          } else {
            this.visible = false
            this.$swal({
              icon: 'error',
              title: 'アカウントが見つかりません',
              text: res.data.message
            })
          }
        })
        .catch((err) => {
          this.visible = false
          this.$swal({
            icon: 'error',
            title: 'エラー！',
            text: err.response.data.message
          })
        })
    }
  }
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
.outside{
  width: 100vw;
  font-family: "Noto Sans JP";
  font-weight: 400;
  background-image: url(~@/assets/bg-white.png);
}
.title{
  font-weight: 500;
  line-height: 1.5;
  font-size: 35px;
  /* background: violet; */
  margin-top: 50px;
  z-index: 10;
}
.titleE{
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 10px;
  /* background: wheat; */
  margin-top: 3px;
}
.loginbox{
  width: 100vw;
  margin-top: 5%;
  position: absolute;
  left: 1%;
  /* background: rgb(14, 15, 15); */
}
.box{
  position: absolute;
  width: 670px;
  height: 680px;
  left: 50%;
  top: -5%;
  /* background: brown; */
  transform: translate(-52%,0);
  border: 1px solid rgb(12, 12, 14);
  border-radius: 3%;
   background-image: url(~@/assets/bg-white.png);
   z-index: -1;
}
.box::before{
  content:"";
  width: 40%;
  height: 30%;
  position: absolute;
  left: -11%;
  top: 69%;
  /* background: wheat; */
  background-image: url(~@/assets/rabbit10.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.box::after{
  content:"";
  width: 10%;
  height: 18%;
  position: absolute;
  right: 0%;
  top: -2%;
  transform: rotate(18deg);
  /* background: olive; */
  background-image: url(~@/assets/shock.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.set{
width: 400px;
 margin-left: 36%;
 margin: auto;
 /* position: relative; */
}
.account{
  margin-top: 30px;
}
.pawset{
  margin-top: 30px;
}
.b-flex{
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.loginbtn{
  width: 400px;
  height: 50px;
  margin-top: 50px;
  position: relative;
  transition: all 0.5s;
}
.loginbtn::after{
content: '';
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;
opacity: 0;
background-color: rgba(236, 146, 62, 0.5);
transition: all 0.5s;
transform: scale(1, 0.5);
}
.loginbtn:hover::after{
opacity: 1;
-webkit-transform: scale(1, 1);
transform: scale(1, 1);
}
.regbtn{
  width: 400px;
  height: 50px;
  /* margin-top: 20px; */
  position: relative;
  transition: all 0.5s;
}
.regbtn::after{
  content: "";
  position: absolute;
  right: 0;
  top: 0;
   width: 0px;
  height: 100%;
  background: rgba(50, 156, 243, 0.5);
   z-index: 1;
   opacity: 0;
   transition: all 0.4s;
}
.regbtn:hover::after{
opacity: 1;
width: 100%;
}
.regmonji{
  width: 180px;
  height: 30px;
  /* background: blue; */
  margin-top: 25px;
}
.badge{
  position: absolute;
  top: -50%;
  left: 0;
}
.q-field--filled .q-field__control {
    padding: 0 12px;
    background: rgba(0,0,0,0.05);
    border-radius: 4px 4px 0 0;
    width: 360px;
}
.q-badge {
    /* background-color: #1976d2; */
    /* background-color: var(--q-color-primary); */
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 12px;
    font-weight: normal;
    vertical-align: baseline;
    /* position: relative;
    top: -12.5%;
    left: -8.5%; */
}
</style>
