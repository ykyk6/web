<template>
<div class="q-pa-md g-amber-2 column justify-center items-center">
  <q-form>
    <div class="tablestyle">
    <q-markup-table  style="width: 950px; max-width: 80vw;">
      <!-- <thead>
        <tr>
          <th class="text-left">ご購入者情報</th>
        </tr>
      </thead> -->
       <template v-for="(userinfo, index) in userinfo">
      <tbody :key="index" class=" w-9">
         <tr>
          <td class="text-left w-2 bg titleinfo">ユーザー名</td>
          <td class="row items-center bgw"><div class="text-left col-10">{{ userinfo.account }}</div>
          <div class="col-2"> <q-btn dense round unelevated color="black" size="12px"><q-icon name="edit" size="12px" color="white" class=""/></q-btn></div>
           <q-popup-edit
                v-model="userinfo.account"
                buttons
                label-set="確認"
                label-cancel="キャンセル"
                color="black"
                content-style="border:1px solid black;background: rgba(255, 255, 255, 0.9);"
                max-width="150px"
                >
                <q-input type="text" v-model="userinfo.account">
                   <template v-slot:append>
                 <q-icon name="edit" size="1rem"/>
                </template>
                </q-input>
                </q-popup-edit>
          </td>
        </tr>
        <tr class="">
          <td class="text-left w-2 bg titleinfo">名前</td>
          <td class="row items-center bgw"><div class="text-left col-10">{{ userinfo.name }}</div>
          <div class="col-2"> <q-btn dense round unelevated color="black" size="12px"><q-icon name="edit" size="12px" color="white" class=""/></q-btn></div>
           <q-popup-edit
                v-model="userinfo.name"
                buttons
                label-set="確認"
                label-cancel="キャンセル"
                color="black"
                content-style="border:1px solid black;background: rgba(255, 255, 255, 0.9);"
                max-width="150px"
                >
                <q-input type="text" v-model="userinfo.name" class="bgw">
                </q-input>
                </q-popup-edit>
          </td>
        <tr>
          <td class="text-left w-2 bg titleinfo">誕生日</td>
          <td class="text-left bgw">{{ userinfo.date }}</td>
        </tr>
        <tr>
          <td class="text-left w-2 bg titleinfo">電子メール</td>
          <td class="row items-center bgw"><div class="text-left col-10">{{ userinfo.email }}</div>
          <div class="col-2"> <q-btn dense round unelevated color="black" size="12px"><q-icon name="edit" size="12px" color="white" class=""/></q-btn></div>
           <q-popup-edit
                v-model="userinfo.email"
                buttons
                label-set="確認"
                label-cancel="キャンセル"
                color="black"
                content-style="border:1px solid black;background: rgba(255, 255, 255, 0.9);"
                max-width="150px"
                >
                <q-input type="text" v-model="userinfo.email">
                   <template v-slot:append>
                 <q-icon name="edit" size="1rem"/>
                </template>
                </q-input>
                </q-popup-edit>
          </td>
        </tr>
      </tbody>
       </template>
    </q-markup-table>
    </div>
    <div class="btnok"> <q-btn style="background: black; color: white" label="登録する" @click="btnok(userinfo)"/></div>
    </q-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userinfo: [],
      name: '',
      account: '',
      email: ''
    }
  },
  mounted () {
    if (this.$store.state.user.id === undefined || this.$store.state.user.id === '') {
      this.$router.push('login')
    } else {
      this.axios.get(process.env.VUE_APP_API + '/users')
        .then(res => {
          if (res.data.success) {
            console.log(res.data)
            const id = this.$store.state.user.id
            const userinfo = res.data.result.filter(function (item, index, array) {
              return item._id === id
            })
            this.userinfo = userinfo
            console.log(this.userinfo)
            // console.log(this.$store.state.user)
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
              text: res.data.message
            })
          }
        })
    }
  },
  methods: {
    btnok (userinfo) {
      this.axios.patch(process.env.VUE_APP_API + '/users/' + this.userinfo[0]._id, { name: userinfo.name, account: userinfo.account, email: userinfo.email })
        .then(res => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '登録しました'
            })
          } else {
            console.log(res.data)
            this.$swal({
              icon: 'error',
              title: 'エラー',
              text: res.data.message
            })
          }
        })
        .catch(err => {
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
.w-2{
  width: 0%;
}
.w-9{
  width: 90vw;
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.bgw{
  background-image: url(~@/assets/bg-white.png);
}
.q-table__card {
    color: #000;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 5px rgb(255, 255, 255);
    border: 1px solid black;
    padding: 5px;
}
.tablestyle{
  width: 100%;
  display: flex;
  justify-content:center;
  margin-top: 20px;
}
.editstyle {
  /* width: 150px; */
  border: 1px solid black;
  background: rgba(255, 255, 255, 0.9);
}
.btnok{
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6%;
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
