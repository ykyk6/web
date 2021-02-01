<template>
  <!-- 最外 -->
  <div class='card outside'>
    <!-- q-pa-md -->
    <div class='q-gutter-sm'>
      <!-- 內容:商品區 全部商品對齊區-->
      <div class='q-pa-md row items-start q-gutter-md box' v-if="img.length">
        <!-- 商品 -->
        <template v-for='(cardItem, index) in cardItem'>
          <q-card class='my-card' flat bordered :key='index'>
            <!-- 圖 -->
            <q-img :src='img[index]' class='card-img' />
            <!-- 標題 -->
            <q-card-section class='card-section'>
              <div class='text-size q-mb-xs card-title'>
                {{ cardItem.title }}
              </div>
              <div
                class='text-caption text-grey text-center q-mt-sm card-lorem'
              >
                {{ cardItem.lorem }}
              </div>
              <div class='text-size text-orange-9 card-price'>
                {{ cardItem.price }}円<span class='card-price2'>(税込)</span>
              </div>
            </q-card-section>
            <!-- 數量 -->
      <div class="row justify-center">
        <div class="buyqtext">購入数</div>
        <input type="number"
        name="buyquantity"
        value="1"
        v-model='cardItem.buyquantity'
        min="1"
        max="10"
        class="buyqstyle"></div>
            <!-- footer -->
            <q-card-actions class='q-card-actions'>
              <!-- <q-btn flat color='dark' label='詳しいを見る' to='/' class='btnk'/> -->
              <q-btn
                flat
                color='primary'
                label='カートに入れる'
                icon='shopping_cart'
                @click='addCart(cardItem)'
                class='btnc'
              />
              <!--  -->
              <!--  -->
            </q-card-actions>
            <q-space />
          </q-card>
        </template>
      </div>
      <div class='q-pa-lg flex flex-center'>
        <q-pagination
          v-model='current'
          color='black'
          :max='1'
          :max-pages='1'
          :boundary-numbers='false'
        >
        </q-pagination>
      </div>
    </div>
  </div>
</template>
<script>
// import Top from '../components/Top.vue'
// const cardItem = [
//   {
//     img:
//       'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/54/02/01-54-ichimatsu-a.jpg',
//     title: '数寄屋袋',
//     lorem: '大人気発売中！',
//     price: '2600',
//     label: 'カートに入れる'
//   },
//   {
//     img:
//       'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/54/02/02-54-ks-20-n.jpg',
//     title: '数寄屋袋',
//     lorem: '大人気発売中！',
//     price: '2600',
//     label: 'カートに入れる'
//   },
//   {
//     img:
//       'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/hukusabasami/02/02-55-ks-33.jpg',
//     title: '懐紙入れ',
//     lorem: '20%OFF！！',
//     price: '1400',
//     label: 'カートに入れる'
//   },
//   {
//     img:
//       'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/hukusabasami/02/02-55-ks-hb27.jpg',
//     title: '懐紙入れ',
//     lorem: '大人気発売中！',
//     price: '1400',
//     label: 'カートに入れる'
//   },
//   {
//     img:
//       'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/00789198/kamikotyakin.jpg',
//     title: '紙小茶巾',
//     lorem: '10%OFF！！',
//     price: '340',
//     label: 'カートに入れる'
//   },
//   {
//     img: 'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/45/07-45-06.jpg',
//     title: '煙草盆',
//     lorem: 'ラスト一個です！',
//     price: '9130',
//     label: 'カートに入れる'
//   },
//   {
//     img: 'https://image.rakuten.co.jp/auc-houkouen-tea/cabinet/nonoda/k705.jpg',
//     title: '錆びない釜',
//     lorem: '大人気発売中！',
//     price: '44150',
//     label: 'カートに入れる'
//   },
//   {
//     img:
//       'https://shop.r10s.jp/auc-houkouen-tea/cabinet/tyasen/02-707-8-1-a.jpg',
//     title: '茶筅立「いっぷく」',
//     lorem: '軽量カップ付！',
//     price: '2060',
//     label: 'カートに入れる'
//   },
//   {
//     img: 'https://shop.r10s.jp/auc-houkouen-tea/cabinet/sw/06/06-58-07.jpg',
//     title: '黒塗茶杓',
//     lorem: '在庫わずか！！',
//     price: '3300',
//     label: 'カートに入れる'
//   },
//   {
//     img: 'https://shop.r10s.jp/auc-houkouen-tea/cabinet/29osaki/07-40-08.jpg',
//     title: '菓子器',
//     lorem: '只今売り切れです',
//     price: '4860',
//     label: 'お取り寄せする'
//   }
// ]
export default {
  // components: { Top }
  data () {
    return {
      img: [],
      title: '',
      lorem: '',
      price: '',
      // buyquantity: '',
      cardItem: [],
      current: 1,
      count3: ''
    }
  },
  methods: {
    addCart (cardItem) {
      // console.log(cardItem)
      // console.log(cardItem.image)
      // console.log(cardItem.title)
      console.log(this.cardItem)
      // console.log(cardItem._id)
      if (cardItem.buyquantity.length === 0) {
        return false
      } else {
        const orderproducts = {}
        orderproducts.img = process.env.VUE_APP_API + '/products/file/' + cardItem.image
        orderproducts._id = cardItem._id
        orderproducts.title = cardItem.title
        orderproducts.price = cardItem.price
        orderproducts.quantity = parseInt(cardItem.buyquantity)
        console.log(orderproducts.buyquantity)
        // console.log(orderproducts.img)
        this.$store.commit('addCart', orderproducts)
        this.count3 += parseInt(cardItem.buyquantity)
        // console.log(this.count3)
        // this.$emit(count3, this.count3)
      }
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/products/')
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result)
          const cardItem = res.data.result.filter(function (item, index, array) {
            return item.category === 'chagu'
          })
          this.cardItem = cardItem
          console.log(cardItem)
          console.log(this.cardItem)
          // this.title = this.cardItem[0]
          const img = cardItem.map(function (item, index, array) {
            return item.image
          })
          console.log(img)
          // this.img = img
          for (let i = 0; i < this.cardItem.length; i++) {
            console.log(img[i])
            this.img.push(process.env.VUE_APP_API + '/products/file/' + img[i])
            console.log(this.img)
          }
          console.log(this.img)
          // this.price = res.data.result.price
          // this.lorem = res.data.result.lorem
          // return cardItem
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
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&display=swap');
.outside{
  width: 80vw;
  height: 100vh;
  /* background: aqua; */
}
.box{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  max-width: 16.4%;
  height: 32%;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  /* background: chartreuse; */
}
.card-title{
  margin-top: 5px;
}
.card-lorem{
  display: block;
flex-grow: 0.1;
/* height: 30px; */
/* background: darkblue; */
margin-top: 3%;
}
.text-size{
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
}
/* .btnk{
  background: chartreuse;
 position: absolute;
 top: 0;
 left: 0;
} */
.btnc{
  width: 95%;
  border: 1px solid rgba(206, 205, 205,0.8);
  margin-top: -4%;
  /* flex-grow: 1; */
}
.card-price{
 /* background: darkmagenta; */
 /* display: block; */
 /* height: 20px; */
 font-size: 19px;
 margin-top: 4%;
 color: darkslategray;
}
.card-price2{
  display: block;
  color: #000;
  font-size: 9px;
  line-height: 35px;
  margin-left:  4px ;
}
.q-card-actions{
  /* background: chartreuse; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.home:hover{
  color: rgb(81, 142, 145);
  /* text-decoration: underline;*/
}
.q-tab-sel:hover{
  /* background: darkcyan; */
  border: 1px solid #6A7735;
}
.q-tab-sel:active{
  border: 1px solid #6A7735;
}
.buyqstyle{
  /* background: #6A7735; */
  border: 1px solid rgb(214, 214, 214);
  width: 45px;
  height: 30px;
  margin-top: -12px;
  margin-bottom: 5px;
}
.buyqtext{
  /* background: blue; */
  /* line-height: 20px; */
  margin-top: -8px;
  margin-right: 5px;
  font-size: 10px;
  font-size: 8px;
}
@media (max-width: 599px) {
  .box{
    display: flex;
    flex-direction: column;
    margin-left: 5%;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 95%;
  /* height: 290px; */
  max-width: 100%;
  height: 20%;
  /* height: 300px; */
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  /* background: chartreuse; */
}
}
@media screen and (min-width: 600px) and (max-width: 899px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 40%;
  height: 20%;
  display: flex;
  padding-bottom: 5px;
}
}
@media screen and (min-width: 900px) and (max-width: 1110px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 30%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
}
}
@media screen and (min-width: 1111px) and (max-width: 1300px) {
  .box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .my-card {
  font-family: 'Noto Sans JP', sans-serif;
  width: 100%;
  /* height: 290px; */
  max-width: 23%;
  height: 30%;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
}
}
</style>
