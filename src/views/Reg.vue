<template>
<!--login -->
  <div class="outside">
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <div class="q-gutter-md items-start regbox">
        <div class="box"></div>
         <div class="title" data-aos="fade-up" data-aos-duration="1000">登録</div>
         <div class="titleE" data-aos="fade-up" data-aos-duration="1500">Register</div>
      <q-input
      ref="input"
      v-model="name"
      filled
      type="text"
      placeholder="名前"
      hint="名前を入力してください"
      class="set"/>
    <q-input
      v-model="date"
      filled
      type="date"
      hint="誕生日を入力してください"
      class="set"/>
      <q-input
      ref="input"
      v-model="email"
      filled
      type="email"
      placeholder="（必須）電子メール"
      hint="電子メールを入力してください"
      :rules="[
        val => !!val || '* 必須',
        val => !!val.includes('@') || '”＠”は必要です'
        ]"
      class="set"/>
      <q-input
      ref="input"
      v-model="account"
      filled
      type="text"
      placeholder="（必須）ユーザー名"
      hint="英数字と記号3文字以上10文字以内で入力して下さい"
      :rules="[
        val => !!val || '* 必須',
        val => val.length > 3 && val.length < 10 || '英数字と記号3文字以上10文字以内で入力して下さい',
        ]"
      class="set"/>
      <q-input
      ref="input"
      v-model="password"
      filled :type="isPwd ? 'password' : 'text'"
      placeholder="（必須）パスワード"
      hint="英数字と記号3文字以上10文字以内で入力して下さい"
      :rules="[
        val => !!val || '* 必須',
        val => val.length > 3 && val.length < 10 || '英数字と記号3文字以上10文字以内で入力して下さい',
        ]"
      class="set">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <div class="b-flex">
      <q-btn outline style="color: goldenrod;" label="登録" type="submit" class="okbtn"/>
      <q-btn outline style="color: goldenrod;" label="リセット" type="reset" @click="reset" class="resetbtn"/>
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
      name: '',
      date: '',
      email: '',
      account: '',
      password: '',
      isPwd: 'true',
      visible: false
    }
  },
  computed: {
  },
  methods: {
    reset () {
      this.$refs.input.resetValidation()
    },
    onSubmit () {
      this.visible = true
      const obj = { ...this.$data }
      delete obj.isPwd
      this.axios.post(process.env.VUE_APP_API + '/users', this.$data)
        .then(res => {
          if (res.data.success) {
            this.visible = false
            this.$swal({
              icon: 'success',
              title: '登録完了',
              text: 'ご登録ありがとうございます。'
            }).then(() => {
              this.$router.push('/onlineshop')
            })
          } else {
            this.visible = false
            this.$swal({
              icon: 'error',
              title: 'エーラ',
              text: res.data.message
            })
          }
        })
        .catch((error) => {
          this.visible = false
          this.$swal({
            icon: 'error',
            title: 'エーラ',
            text: error.response.data.message
          })
          console.log(error)
        })
    },
    onReset () {
      this.name = ''
      this.email = ''
      this.account = ''
      this.password = ''
    }
  }
}
</script>
<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
.outside{
  width: 100vw;
  height: 100vh;
  font-family: "Noto Sans JP";
  padding-top: 5%;
}
.title{
  font-weight: 500;
  line-height: 1;
  font-size: 35px;
}
.titleE{
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 10px;

  margin-top: 3px;
}
.regbox{
  width: 100vw;
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.box{
  position: absolute;
  width: 680px;
  height: 760px;
  left: 50%;
  padding-top: 20px;
  transform: translate(-52%,0);
  border: 1px solid rgb(12, 12, 14);
  border-radius: 3%;
  background-image: url(~@/assets/bg-white.png);
  z-index: -1;
}
.box::after{
  content:"";
  width: 40%;
  height: 30%;
  position: absolute;
  left: 90%;
  top: 71%;
  background-image: url(~@/assets/rabbit1.png);
  background-size: contain;
  background-repeat: no-repeat;
}
.flex{
  display: flex;
  justify-content: center;
}
.flex2{
  justify-content: center;
}
.set{
  width: 430px;
}
.badge{
  position: absolute;
  top: -50%;
  left: 0;
}
.okbtn{
  width: 120px;
  height: 50px;
  margin-top: 50px;
  margin-right: 3%;
  position: relative;
  transition: all 0.5s;
}
.okbtn::after{
  content: "";
  position: absolute;
  right: 0;
  top: 0;
   width: 0px;
  height: 100%;
  background: rgba(240, 124, 42, 0.5);
   z-index: 1;
   opacity: 0;
   transition: all 0.4s;
}
.okbtn:hover::after{
opacity: 1;
width: 100%;
}
.resetbtn{
  width: 120px;
  height: 50px;
  margin-top: 50px;
  position: relative;
  transition: all 0.5s;
}
.resetbtn::after{
  content: "";
  position: absolute;
  left: 0;
  top: 0;
   width: 0px;
  height: 100%;
  background: rgba(240, 124, 42, 0.5);
   z-index: 1;
   opacity: 0;
   transition: all 0.4s;
}
.resetbtn:hover::after{
opacity: 1;
width: 100%;
}
.b-flex{
  width: 100vw;
  justify-content: center;
  display: flex;
  flex-direction: row;
}
.q-field--filled .q-field__control {
    padding: 0 12px;
    background: rgba(0,0,0,0.05);
    border-radius: 4px 4px 0 0;
    width: 360px;
}
.q-badge {
    color: #fff;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
    line-height: 12px;
    font-weight: normal;
    vertical-align: baseline;
}
</style>
