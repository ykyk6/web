  <template>
  <div class="outside column items-center q-gutter-md">
      <!-- 麵包屑 -->
      <div>
    <q-breadcrumbs class="">
      <q-breadcrumbs-el icon="home" label="ホームページ" to="/" class="home"/>
      <q-breadcrumbs-el  icon="storefront" label="オンラインショップ" to="/onlineshop" />
      <q-breadcrumbs-el label="ショッピングカート"/>
    </q-breadcrumbs>
    </div>
    <!-- shoppinglist title -->
    <div class="title">ショッピングカート</div>
    <!-- 分隔線 -->
    <div class="sen"></div>
    <!-- shoppinglist area -->
    <div class="row my-card-area justify-center">
      <!-- left -->
      <div class="col-7 left row">
      <!--  -->
      <div v-if="isShow()" class="justify-center"><div class="text-h5 text-grey"><q-icon name="shopping_cart" size="50px"></q-icon>商品が入っていません。</div></div>
       <div v-else><cart/></div>
      </div>
      <!-- right -->
      <div class="col-3 right">
        <div class="">＊送料全国一律350円(税込)です。</div>
        <div class="shippingbox">
         <div class="shippingfreebox row no-wrap">
          <img src="~@/assets/shippingfree.png" class="shippingfree"></div>
        </div>
        <div class="col-12 right">
       <q-card class="my-card2 column">
      <q-card-section class=" bg col-4 column justify-center items-center">
        <div class="text-h5">合計(税込)</div>
      </q-card-section>
      <div class="col-4 row justify-center items-center bgw">
        <div class="text-h4 text-blue-10">{{ totalPrice2() }}</div><div class="text-h7">円</div>
      </div>
      <q-card-actions vertical class="col-4 column justify-center items-center">
        <div class="col-6 column justify-start items-center bgw">
        <q-btn color="cyan-9" @click="orderbtn" class="orderbtn">ご購入手続きへ進む</q-btn></div>
        <div class="col-6 column justify-center items-center bgw">
        <q-btn flat class="shoppingbtn text-light-blue-7"  icon="shopping_cart" to="/onlineshop">ショッピングを続ける</q-btn></div>
      </q-card-actions>
    </q-card>
    </div>
      </div>
    </div>
    <!-- -->
  </div>
</template>
<script>
import cart from '../views/Cart.vue'
export default {
  components: { cart },
  data () {
    return {
      totalPrice: ''
    }
  },
  computed () {
  },
  methods: {
    totalPrice2 () {
      const cartItem1 = this.$store.state.cartItem1
      let sum = 0
      for (let i = 0; i < cartItem1.length; i++) {
        sum += cartItem1[i].price * cartItem1[i].quantity
      }
      console.log(sum)
      return sum
    },
    orderbtn () {
      console.log(this.$store.state.user.id)
      if (this.$store.state.user.id === undefined || this.$store.state.user.id === '') {
        this.$swal({
          icon: 'info',
          title: 'ログインしてください。'
        }).then(() => {
          this.$router.push('/Login')
        })
      } else {
        console.log(this.$route.path)
        this.$router.push('/orderinformation')
      }
    },
    isShow () {
      if (this.$store.state.cartItem1.length === 0) {
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
.w-25{
  width: 25%;
}
.w-14{
  width: 14%;
}
.w-12{
  width: 12%;
}
.text-h7{
  position: relative;
  left: 0;
  top: 5%;
  margin-left: 6px;
}
.outside{
  width: 100vw;
  height: 100vh;
  font-family: 'Noto Sans JP', sans-serif;
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.bgw{
  background-image: url(~@/assets/bg-white.png);
}
.title{
  width: 100%;
  font-size: 26px;
  margin-top: 28px;
}
.sen{
  width: 90%;
  height: 2px;
  background: rgb(27, 27, 27);
}
.my-card-area{
  width: 88%;
  height: 60%;
}
.left{
  margin-right: 25px;
}
.right{
  height: 90%;
}
.my-card2{
  height: 100%;
}
.my-card{
  height: 80%;
  width: 80%;
}
.my-card-sesson{
  width: 100%;
  height: 100%;
}
.text-left{
  text-align: left;
}
.mt-25{
  margin-top: 25px;
}

.shoppinglist-area{
  width: 75%;
}
.buylistarea{
  width: 100%;
}
.img{
  width: 50%;
}
.orderbtn{
  height: 80%;
  width: 95%;
  font-weight: 300;
}
.shoppingbtn{
  height: 80%;
  width: 95%;
  font-weight: 300;
}
.shippingbox{
  width: 100%;
  height: 30%;
  border: 1px solid rgb(173, 32, 32);
  margin-bottom: 5%;
}
.shippingfreebox{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.shippingfree{
  width: 100%;
}
.box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: bisque;
}
</style>
