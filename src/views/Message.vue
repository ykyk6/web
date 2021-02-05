<template>
  <div class="row justify-center outside">
    <div class="tablestyle column items-center">
      <div class="title" data-aos="fade-up" data-aos-duration="1000"><q-icon name="mail_outline" size="30px"></q-icon>お問い合わせ</div>
      <div class="titleE" data-aos="fade-up" data-aos-duration="1500">Contact us</div>
        <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
          <div class="mtablestyle"  data-aos="ease-in" data-aos-duration="1000" data-aos-delay="500"></div>
    <q-markup-table style="width: 1000px; max-width: 85vw;">
      <tbody class="tbodystyle">
        <tr>
          <td class="text-left w-2 bg" >ゲスト/会員</td>
          <td class="text-left">
             <div class="" v-show="isShowGuest">{{ user }}</div>
             <div class="" v-show="isShowMember">{{ user }}</div>
          </td>
        </tr>
         <tr>
          <td class="text-left w-2 bg">アカウント</td>
          <td class="text-left column justify-center">
               <q-input v-model="account" dense outlined type="text"/>
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">氏名<div class="nes">*必須</div></td>
          <td class="text-left">
               <q-input
               v-model="name"
               dense
               outlined
               type="text"
               />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">メールアドレス<div class="nes">*必須</div></td>
          <td class="text-left">
               <q-input
               v-model="mail"
               dense
               outlined
               type="text"
               />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">タイトル<div class="nes">*必須</div></td>
          <td class="text-left">
               <q-input
               v-model="title"
               dense
               outlined
               type="text"/>
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">お問い合わせ内容<div class="nes">*必須</div></td>
          <td class="text-left">
               <q-input
               v-model="question"
               dense
               outlined
               class=""
               type="textarea"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    <q-btn color="black" label="送信する" class="q-mt-xl" type="submit"/>
    </q-form>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      user: '',
      name: '',
      account: '',
      mail: '',
      title: '',
      question: '',
      date: '',
      isShowGuest: false,
      isShowMember: false,
      userid: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.name.length === 0 || this.mail.length === 0 || this.title.length === 0 || this.question.length === 0) {
        this.$swal({
          icon: 'warning',
          title: 'エーラ',
          text: '入力情報に不備があります。'
        })
      } else {
        this.$swal({
          icon: 'warning',
          title: '入力内容を確定しますか？',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'はい',
          cancelButtonText: 'キャンセル'
        }).then((value) => {
          if (value.isConfirmed) {
            const obj = { ...this.$data }
            console.log(obj)
            this.axios.post(process.env.VUE_APP_API + '/ask', obj)
              .then(res => {
                if (res.data.success) {
                  console.log('success')
                  this.$swal({
                    icon: 'success',
                    title: 'お問い合わせ受付完了。',
                    text: 'ありがとうございました。'
                  }).then(() => {
                    if (this.$store.state.user.id === '') {
                      this.$router.push('/')
                    } else {
                      this.$router.push('Frontmember')
                    }
                  })
                }
              })
          } else {
          }
        })
      }
    }
  },
  mounted () {
    const day = new Date()
    const getMonth = day.getMonth() + 1
    const date = day.getFullYear() + '/' + getMonth + '/' + day.getDate()
    this.date = date
    if (this.$store.state.user.id === '') {
      this.isShowGuest = true
      this.user = 'ゲスト'
      this.userid = 'guest'
    } else {
      this.isShowMember = true
      this.user = '会員'
      this.userid = this.$store.state.user.id
      console.log(this.userid)
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,500;0,600;0,800;1,500;1,600;1,700&display=swap');
.outside,.tbodystyle{
  background-image: url(~@/assets/bg-white.png);
  font-family: "Noto Sans JP";
  height: 100%;
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.w-2{
  width: 10%;
}
.w-9{
  width: 80%;
}
.mtablestyle{
  width: 150px;
  height: 120px;
  position: absolute;
  right: 36px;
  top: -120px;
  background-image: url(~@/assets/rabbit4.png);
  background-size: contain;
}
.nes{
  font-size: 8px;
  color:brown;
}
.title{
  font-weight: 500;
  line-height: 1.6;
  font-size: 28px;
}
.titleE{
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
  margin-bottom: 40px;
}
.q-table__card {
    color: #000;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgb(255, 255, 255);
    border: 1px solid black;
    margin-top: 10px;
}
.tablestyle{
  width: 100%;
  display: flex;
  /* justify-content:center; */
  margin-top: 4%;
}
</style>
