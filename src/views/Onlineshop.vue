<template>
  <div id="onlineshop">
    <div class="q-pa-md q-gutter-sm">
      <!-- 麵包屑 -->
      <div class="text-center">
    <q-breadcrumbs>
      <q-breadcrumbs-el icon="home" label="ホームページ" to="/" class="home"/>
      <q-breadcrumbs-el  icon="storefront" label="オンラインショップ" to="/onlineshop" />
      <q-breadcrumbs-el v-bind:label="labelname"/>
    </q-breadcrumbs>
    </div>
  </div>
  <!-- 選單橫軸列 -->
    <div class="q-pa-md">
    <div class="q-gutter-y-md menutabstyle">
     <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="bg-grey-2 text-black"
      >
        <q-route-tab label="茶碗" to="matchabowl" class="bg" exact/>
          <q-route-tab label="抹茶"  to="matcha" class="bg" exact/>
          <q-route-tab label="スイーツ"  to="dessert" class="bg" exact/>
          <q-route-tab label="茶具" to="chagu" class="bg" exact/>
        <q-route-tab label="OTHERS" to="others" class="bg" exact/>
      </q-tabs>
    </div>
    </div>
    <!-- shopping cart -->
    <div class="shoppingCart" @click="cart" >
      <q-avatar size="100px" font-size="48px" color="transparent" text-color="white" icon="shopping_cart"/>
      <div class="shoppingCart-number">{{ shoppingCartNumber }}</div>
      <div class="shoppingCart-href row text-black text-center">カートへ</div>
    </div>
  <!-- 內容:商品區 -->
  <router-view></router-view>
   </div>
</template>
<script>
export default {
  data () {
    return {
      lables: [
        {
          path: 'matchabowl',
          name: '茶碗'
        },
        {
          path: 'matcha',
          name: '抹茶'
        },
        {
          path: 'dessert',
          name: 'スイーツ'
        },
        {
          path: 'chagu',
          name: '茶具'
        },
        {
          path: 'others',
          name: 'OTHERS'
        }
      ],
      expanded: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      current: 1,
      count: 0
    }
  },
  computed: {
    labelname () {
      return this.$route.meta.name
    },
    shoppingCartNumber () {
      return this.$store.getters.cartItem1Number
    }
  },
  methods: {
    cart () {
      this.$router.push('/thecart')
    }
  }
}
</script>
<style scoped>
.text-center{
  display: flex;
  justify-content: center;
}
.home:hover{
  color: cadetblue;
  /* text-decoration: underline;*/
}
.bg{
  background-image: url(~@/assets/bg-grey2.png);
}
.box{
  width: 100vw;
  height: 100vh;
  text-align: center;
  justify-content: center;
}
.q-tab-sel:hover{
  /* background: darkcyan; */
  border: 1px solid #6A7735;
}
.q-tab-sel:active{
  border: 1px solid #6A7735;
}
.menutabstyle{
  max-width: 67%;
  margin-left:16%;
}
.my-card {
  width: 100%;
  max-width: 300px;
}
.shoppingCart{
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* border: 1px solid rgb(170, 168, 168); */
  background: rgb(199, 199, 199);
  position: fixed;
  right: 7%;
  top: 83%;
  z-index: 11111;
}
.shoppingCart:hover{
  cursor: pointer;
}
.shoppingCart-number{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(252, 15, 15, 0.8);
  position: absolute;
  right: 0%;
  top: -6%;
  color: aliceblue;
  line-height: 40px;
  font-size: 15px;
  z-index: 11111;
}
.shoppingCart-href{
  width: 80px;
  position: absolute;
  left: 52%;
  top: 68%;
  transform: translate(-50%, 0);
  font-weight: border;
  font-size: 15px;
}
@media (max-width: 599px) {
  .menutabstyle{
  max-width: 70%;
  margin-left: 11%
}
}
@media screen and (min-width: 600px) and (max-width:899px) {
  .menutabstyle{
  max-width: 66%;
  margin-left: 16%;
}
}
@media screen and (min-width: 900px) and (max-width: 1119px) {
  .menutabstyle{
  max-width: 81%;
  margin-left:10%;
}
}
@media screen and (min-width: 1120px) and (max-width: 1300px) {
   .menutabstyle{
  max-width: 78%;
  margin-left: 10%;
}
}
</style>
