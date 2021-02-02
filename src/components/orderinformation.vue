<template>
<!-- 最外圍 -->
<div class="outside row">
<!-- 內容對齊區 -->
  <div class="q-pa-md column items-center content">
    <!-- 麵包屑 -->
      <div class="breadcrumbs">
    <q-breadcrumbs class=" q-mt-md">
     <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon
          size="1.5em"
          name="chevron_right"
          color="primary"
        />
      </template>
      <q-breadcrumbs-el label="ショッピングカート" icon="storefront" style="color:grey"/>
      <q-breadcrumbs-el label=" 購入者情報の入力" icon="person_pin" />
      <q-breadcrumbs-el label=" 決済方法の選択" icon="credit_card" />
      <q-breadcrumbs-el label="ご注文内容確認" icon="sticky_note_2" style="color:grey"/>
    </q-breadcrumbs>
    </q-breadcrumbs>
    </div>
    <!--  -->
     <q-form @submit.prevent="onSubmit" class="q-gutter-md row justify-center">
       <div class="column justify-center items-center">
      <div class="buyerInformation q-pa-md column items-center" data-aos="fade-up" data-aos-duration="1000">
        <!-- title -->
        <div class="title2">
          <div class="titleJ">
              <q-icon name="person_pin" size="2.3rem" class=""/>
            購入者情報の入力</div>
            <div class="titleE q-mb-md">Information</div>
          </div>
          <!-- 分隔線 -->
          <div class="sen3 q-mt-md"></div>
          <!-- 內容 -->
          <div class="w-10 infoenter">
  <div class="q-pa-md row justify-center">
    <q-markup-table class="w-10">
      <tbody>
        <tr class="">
          <td class="text-left w-2 bg">宛先名</td>
          <td class="text-left bgw">
            <q-input
            v-model="name"
            label="山田太郎"
            color="grey"
            :rules="[val => !!val || '*必須']"
            class="w-9"
          />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">電話番号</td>
          <td class="text-left bgw">
            <q-input
            v-model="telephonenumber"
            label="000 - 000 - 0000"
            mask="### - ### - ####"
            type="tel"
            :rules="[val => !!val || '*必須']"
            class="w-9"
            />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">メールアドレス</td>
          <td class="text-left bgw">
            <q-input
            v-model="mail"
            label="ocha@gmail.com"
            color="grey"
            :rules="[
            val => !!val || '* 必須',
            val => !!val.includes('@') || '”＠”は必要です'
            ]"
            class="w-9"
          />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">郵便番号</td>
          <td class="text-left bgw">
            <q-input
            v-model="post"
            label="000 - 0000"
            mask="### - ####"
            :rules="[val => !!val || '*必須']"
            class="w-9"
            />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">都道府縣</td>
          <td class="text-left bgw">
            <q-select
            v-model="city"
            :options="options"
            label="東京都"
            :rules="[val => !!val || '*必須']"
            class="w-9"
            />
          </td>
        </tr>
        <tr>
          <td class="text-left w-2 bg">住所</td>
          <td class="text-left bgw">
            <q-input
            v-model="address"
            label="○○市△△町○‐○‐○"
            color="grey"
            :rules="[val => !!val || '*必須']"
            class="w-9"
          />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</div>
</div>
<div class="step1"><q-icon name="keyboard_arrow_down" size="60px" color=" text-teal-6"></q-icon></div>
<div class="title2">
<div class="titleJ">
   <q-icon name="credit_card" size="2.3rem" class=""/>
   決済方法の選択
 </div>
 <div class="titleE q-mb-md">Pay</div>
 </div>
  <!-- 分隔線 -->
  <div class="sen q-mt-md"></div>
<div class="w-8 q-mt-xl q-mb-xl paybox">
  <!-- cardpay -->
  <q-card class="my-card q-mr-md row bgt" flat bordered>
    <div v-show="choice1" class="choice"><q-icon name="check_circle" size="60px" color="red"></q-icon></div>
    <div class="imgbox">
      <img
        src="~@/assets/card.png" class="img"
      /></div>
      <div class="contenttext">
      <q-card-section>
        <div class="text-orange-9">支払手数料なし。</div>
        <div class="text-h6 q-mt-sm q-mb-sm">ｸﾚｼﾞｯﾄカード</div>
        <div class="text-caption text-grey">
          リボ払い・分割払いには対応しておりません。
          一括払いのみ可能となっております。
        </div>
      </q-card-section>
  </div>
  <div class="w-10 bg-grey-4 row justify-center">
      <q-card-actions class="">
        <q-btn
        flat
        dense
        color="black"
        label="選択する"
        :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded = !expanded"/>
        <q-space />
      </q-card-actions>
      </div>

      <q-slide-transition class="">
        <div v-show="expanded" class="w-10 cardinputbox">
          <q-separator />
          <q-card-section class="text-subitle2">
           <!--  -->
           <div class="row justify-center items-center w-10">
    <q-markup-table class="w-10 markup-table q-mt-sm">
      <!-- card-num -->
      <thead>
        <tr>
          <th class="text-center">カード番号</th>
        </tr>
      </thead>
      <tbody>
         <q-input
            v-model="card_num"
            autogrow
            dense
            filled
            mask="#### #### #### ####"
            color="grey"
            class=""
          />
      </tbody>
      <!-- card-date -->
      <thead>
        <tr>
          <th class="text-center">有効期限</th>
        </tr>
      </thead>
      <tbody>
        <q-input
        v-model="card_date"
        autogrow
        dense
        mask="##/##"
        unmasked-value
        filled
        class=""
      />
      </tbody>
      <!-- security-num -->
      <thead>
        <tr>
          <th class="text-center">セキュリティ番号</th>
        </tr>
      </thead>
      <tbody>
        <q-input
        v-model="card_security"
        autogrow
        dense
        mask="###"
        unmasked-value
        filled
        class=""
      />
      </tbody>
    </q-markup-table>
    <div class=" q-mt-md surebtn">
     <q-btn color="black" label="確認" @click="btnok1('クレジットカード')"/></div>
          </div>
          <!--  -->
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <!-- storepay -->
     <q-card class="my-card q-mr-md row bgt" flat bordered>
        <div v-show="choice2" class="choice"><q-icon name="check_circle" size="60px" color="red"></q-icon></div>
      <div class="imgbox">
      <img
        src="~@/assets/logos.png" class="img"
      /></div>
      <div class="contenttext">
      <q-card-section>
        <div class="text-orange-9">支払手数料は300円。</div>
        <div class="text-h6 q-mt-sm q-mb-sm">コンビニ決済</div>
        <div class="text-caption text-grey">
        コンビニ決済の受付番号は購入後に送らせていただくメールに記載されております。
        </div>
      </q-card-section>
      </div>
     <div class="w-10 bg-grey-4 row justify-center">
      <q-card-actions class="">
        <q-btn
        flat
        dense
        color="black"
        label="選択する"
        :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded2 = !expanded2"/>
        <q-space />
      </q-card-actions>
      </div>

      <q-slide-transition class="">
        <div v-show="expanded2" class="w-10 cardinputbox">
          <q-separator />
          <q-card-section class="text-subitle2">
           <!--  -->
           <div class="row justify-center items-center w-10">
    <table class="w-10 q-pa-md q-mt-sm" style="border:1px solid #000;">
      <!-- info -->
      <thead>
        <tr>
          <th class="text-center bg-orange-4">どのようにお支払いしますか？</th>
        </tr>
      </thead>
      <tbody>
         <tr>
           <td class=" text-left">
            お近くのコンビニにて、受付番号と電話番号をもとにお支払いいただきます。
            お支払用紙は郵送されませんので、ご注意ください。
           </td>
         </tr>
      </tbody>
    </table>
    <div class=" q-mt-md surebtn">
     <q-btn color="black" label="確認" @click="btnok2('コンビニ決済')"/></div>
          </div>
          <!--  -->
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <!-- bankpay -->
    <q-card class="my-card row bgt" flat bordered>
       <div v-show="choice3" class="choice"><q-icon name="check_circle" size="60px" color="red"></q-icon></div>
      <div class="imgbox">
      <img
        src="~@/assets/bank.png" class="img"
      /></div>
      <div class="contenttext">
      <q-card-section>
        <div class="text-orange-9 text-8">振込手数料ご負担下さい</div>
        <div class="text-h6 q-mt-sm q-mb-sm">銀行振り込み</div>
        <div class="text-caption text-grey">
          振込先情報は購入完了メールに記載されております。振込手数料はご負担下さい。
        </div>
      </q-card-section>
      </div>
      <div class="w-10 bg-grey-4 row justify-center">
      <q-card-actions class="">
        <q-btn
        flat
        dense
        color="black"
        label="選択する"
        class="btnbank"
        :icon="expanded3 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
        @click="expanded3 = !expanded3"/>
        <q-space />
      </q-card-actions>
      </div>

      <q-slide-transition class="">
        <div v-show="expanded3" class="w-10 cardinputbox">
          <q-separator />
          <q-card-section class="text-subitle2">
           <!--  -->
          <!--  -->
           <div class="row justify-center items-center w-10">
    <table class="w-10 q-pa-md q-mt-sm" style="border:1px solid #000;">
      <!-- info -->
      <thead>
        <tr>
          <th class="text-center bg-orange-4">どのようにお支払いしますか？</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class=" text-left">
            入金期限は購入の翌日から数えて土日祝日を除いた5営業日以内です。
          ※期限を過ぎた場合には自動的にキャンセルとなります。
          </td>
        </tr>
      </tbody>
    </table>
    <div class=" q-mt-md surebtn">
     <q-btn color="black" label="確認" name="123" @click="btnok3('銀行振り込み')"/></div>
          </div>
          <!--  -->
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
    <!--  -->
</div>
<!-- <div class="w-8 q-mt-md row paybox justify-center bg-red">
</div> -->
<div class="step1"><q-icon name="keyboard_arrow_down" size="60px" color=" text-teal-6"></q-icon></div>
<!-- title -->
<div class="title3">
  <div class="titleJ">
     <q-icon name="sticky_note_2" size="2.3rem" class=""/>
    ご注文内容確認</div>
    <div class="titleE q-mb-md q-ml-md">Order Information</div>
  </div>
  <!-- 分隔線 -->
  <div class="sen q-mt-md"></div>
<!-- 訂購確認 -->
<div class="ordersure q-mt-md">
  <div class="q-pa-md">
    <q-markup-table>
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
      <template v-for='(buyItem, index) in buyItem'>
        <tr :key='index'>
          <td class="text-center bgw"><img :src='buyItem.img' class="img"></td>
          <td class="text-center bgw">{{ buyItem.title }}</td>
          <td class="text-center bgw">￥{{ buyItem.price }}</td>
          <td class="text-center bgw">{{ buyItem.quantity }}</td>
          <td class="text-center bgw">あり</td>
          <td class="text-centert bgw">￥{{ buyItem.price * buyItem.quantity }}</td>
        </tr>
      </template>
       <tr>
          <th class="text-center t1  bgw"></th>
          <th class="text-center t2  bgw"></th>
          <th class="text-center t3  bgw"></th>
          <th class="text-center t4  bgw"></th>
           <th class="text-center t4 text-orange-14 bgw">送料</th>
          <th class="text-center t6 bgw"><div class="shipping2 text-orange-14">￥{{ shipping() }}</div></th>
        </tr>
       <tr class="totalPrice2">
          <th class="text-center t1 bg"></th>
          <th class="text-center t2 bg"></th>
          <th class="text-center t3 bg"></th>
          <th class="text-center t4 bg"></th>
          <th class="text-center t4 bg text-orange-14">合計</th>
          <th class="text-center t6 bg"><div class="text-h6">￥{{ totalPrice2()+shipping() }}</div><div class="">(税込)</div></th>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
      </div>
<div class="">
</div>
<!-- <div class=" text-left q-ml-md text-h6">注文日：{{date}}</div> -->
<div class="row w-8 q-mt-xl justify-center">
  <div class="col-6 howpay row items-center"><div class="col-4 bgg h-10">決済方式</div><div class="col-8 h-10 bg">{{ pay }}</div></div>
    <div class="col-5 submitok"><q-btn outline style="color: black;" label="注文する" type="submit" class="submitok2"/></div>
</div>
</div>
     <!--  -->
      <q-dialog v-model="fixed" persistent>
      <q-card style="width: 350px; max-width: 80vw;" class="q-pa-md">
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
      <q-inner-loading :showing="visible">
        <q-spinner-gears size="60px" color="black" />
      </q-inner-loading>
     <!--  -->
     </q-form>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fixed: false,
      expanded: false,
      expanded2: false,
      expanded3: false,
      card_num: '',
      card_date: '',
      card_security: '',
      choice1: false,
      choice2: false,
      choice3: false,
      buyItem: [],
      model: null,
      options: [
        '北海道', '北海道', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県',
        '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県',
        '宮崎県', '鹿児島県', '沖縄県'
      ],
      name: '',
      telephonenumber: '',
      mail: '',
      post: '',
      city: '',
      address: '',
      date: '',
      pay: '',
      user: '',
      theshipping: '',
      totalprice: '',
      visible: false
    }
  },
  mounted () {
    const buyItem = this.$store.state.cartItem1
    this.buyItem = buyItem
    const day = new Date()
    const getMonth = day.getMonth() + 1
    const date = day.getFullYear() + '/' + getMonth + '/' + day.getDate()
    this.date = date
    this.user = this.$store.state.user.id
    const theshipping = this.$store.getters.shipping
    this.theshipping = theshipping
    const totalprice = this.$store.getters.totalPrice2 + this.$store.getters.shipping
    this.totalprice = totalprice
  },
  methods: {
    btnok1 (value) {
      this.pay = value
      if (this.card_num.length !== 0 && this.card_date.legth !== 0 && this.card_security.length !== 0) {
        console.log(value)
        this.expanded = false
        this.choice1 = true
        this.choice2 = false
        this.choice3 = false
      } else {
        this.$swal({
          icon: 'warning',
          title: 'カードの情報を入力してください。'
        })
      }
    },
    btnok2 (value) {
      this.pay = value
      console.log(value)
      this.expanded2 = false
      this.choice2 = true
      this.choice1 = false
      this.choice3 = false
    },
    btnok3 (value) {
      this.pay = value
      console.log(value)
      this.expanded3 = false
      this.choice3 = true
      this.choice1 = false
      this.choice2 = false
    },
    shipping () {
      return this.$store.getters.shipping
    },
    // 總價
    totalPrice2 () {
      return this.$store.getters.totalPrice2
    },
    onSubmit () {
      if (this.pay.length === 0) {
        this.$swal({
          icon: 'error',
          title: 'エーラ',
          text: '決済方法を選択して下さい。'
        })
      } else {
        this.$swal({
          icon: 'warning',
          title: '注文内容を確定する',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'はい',
          cancelButtonText: 'キャンセル'
        }).then((value) => {
          if (value.isConfirmed) {
            this.visible = true
            const obj = { ...this.$data }
            delete obj.expanded
            delete obj.expanded2
            delete obj.expanded3
            delete obj.model
            delete obj.options
            console.log(obj)
            this.axios.post(process.env.VUE_APP_API + '/order', obj)
              .then(res => {
                if (res.data.success) {
                  this.visible = false
                  this.$swal({
                    icon: 'success',
                    title: 'ご注文ありがとうございます。'
                  })
                }
                this.$store.commit('resetcartItem1')
                this.$router.push('/onlineshop')
              }).catch((error) => {
                console.log(error)
                this.visible = false
                alert('エーラ')
              })
          } else {
            this.visible = false
            this.$swal({
              icon: 'success',
              title: 'キャンセルします。'
            })
          }
        })
      }
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.outside{
    width: 100vw;
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    font-family: 'Noto Sans JP', sans-serif;
    background-image: url(~@/assets/bg-white.png);
    /* background: aqua; */
}
.bgg{
  background-image: url(~@/assets/bg-grey.png);
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.bgw{
  background-image: url(~@/assets/bg-white.png);
}
.bgt{
  background: white;
}
.titleJ{
  font-weight: 500;
  line-height: 1.5;
  font-size: 28px;
  margin-top: -12px;
}
.titleE{
  font-family: 'Bodoni Moda', serif;
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 2px;
}
.title2 {
    width: 100%;
    /* height: 5%; */
    /* background: cadetblue; */
    margin-top: 1%;
}
.title3{
  width: 100%;
  /* height: 5%; */
  /* background: cadetblue; */
  font-size: 26px;
  margin-top: 20px;
}
.sen{
  width: 80%;
  height: 1px;;
  background: rgb(187, 184, 184);
}
.content{
    width: 100%;
}
.infoenter{
  margin-top: 30px;
}
.ordersure{
    width: 80%;
    margin-top: 30px;
}
.img{
  width: 50%;
}
.t1{
  width: 15%;
}
.t2{
  width: 25% ;
}
.t3,.t4,.t5{
  width: 15%;
}
.buyerInformation{
  width: 80%;
  margin-top: 30px;
  /* background: cornflowerblue; */
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
.sen3{
  width: 100%;
  height: 1px;
  background: rgb(187, 184, 184);
}
.text-caption{
  font-size:8px;
}
.paybox{
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 45px;
}
.my-card{
  width: 25%;
  position: relative;
}
.imgbox{
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: baseline;
}
.img{
  width: 80%;
}
.contenttext{
  width: 100%;
}
.q-card{
  border-radius: 0;
}
.q-table__card {
    color: rgb(80, 80, 80);
    background-color: #fff;
    border-radius: 0px;
    box-shadow: none;
    border: 1px solid grey;
    padding: 5px;
    }
.surebtn{
  width: 100%;
  height: 30%;
}
.howpay{
  height: 60px;
  color: rgb(5, 5, 5);
}
.submitok{
  line-height: 60px;
}
.submitok2{
 width: 80%;
 height: 95%;
}
.h-10{
  height: 100%;
  line-height: 60px;
}
.choice{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  top: -10px;
  left: 50%;
  transform: translate(-50%,0);
  z-index: 10;display: flex;
  flex-direction: column;
  align-items: center;
  transition: ease-in-out 0.5s;

}
.step1{
  width: 80px;
  height: 80px;
}
@media screen and (min-width: 1000px) and (max-width: 1300px) {
 .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    background: cornflowerblue;
  }
  .my-card {
  width: 33%;
  /* height: 290px; */
  /* max-width: 23%; */
  height: 30%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  border: 1px solid white;
  /* background: cornflowerblue; */
}
.paybox{
  align-items: start;
}
.q-table__card {
    /* background: cornflowerblue; */
    color: rgb(80, 80, 80);
    background-color: #fff;
    border-radius: 0px;
    box-shadow: none;
    border: 1px solid grey;
    padding: 0px;
    }
}
</style>
