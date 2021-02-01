<template>
  <!-- 最外 -->
  <div class='card outside'>
    <!-- q-pa-md -->
    <div class='q-gutter-sm'>
      <q-form>
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
                <div class="column items-center">
                <div class="row items-center">{{cardItem.title}}<q-icon name="edit" size="15px" color="red" class="q-ml-sm"/></div>
                <q-popup-edit v-model="title" content-class="bg-light text-white">
                <q-input type="text" v-model="cardItem.title">
                   <template v-slot:append>
                 <q-icon name="edit" size="1rem"/>
                </template>
                </q-input>
                </q-popup-edit>
                </div>
              </div>
              <!-- 描述 -->
              <div class='text-caption text-grey text-center q-mt-sm card-lorem'>
                <div class="row justify-center items-center">{{ cardItem.lorem }} <q-icon name="edit" size="15px" color="red" class="q-ml-sm"/></div>
                <q-popup-edit v-model="cardItem.lorem" content-class="bg-light text-white">
                <q-input type="text" v-model="cardItem.lorem">
                   <template v-slot:append>
                 <q-icon name="edit" size="1rem"/>
                </template>
                </q-input>
                </q-popup-edit>
              </div>
              <!-- 價錢 -->
              <div class='text-size text-orange-9 card-price'>
                 <div class="row justify-center items-center">{{ cardItem.price }}
                   <q-popup-edit v-model="cardItem.price" content-class="bg-light text-white">
                <q-input type="number" v-model="cardItem.price">
                   <template v-slot:append>
                 <q-icon name="edit" size="1rem"/>
                </template>
                </q-input>
                </q-popup-edit>
                   円<q-icon name="edit" size="15px" color="red" class="q-ml-sm"/></div>
              </div>
            </q-card-section>
            <!-- footer -->
            <q-card-actions class='q-card-actions'>
              <!-- <q-btn flat color='dark' label='詳しいを見る' to='/' class='btnk'/> -->
              <!-- <q-btn
                flat
                color='primary'
                label='カートに入れる'
                icon='shopping_cart'
                disabled
                class='btnc'
              /> -->
              <div class="row">
              <q-btn
                flat
                color='dark'
                label='儲存更改'
                icon='save'
                class='btns'
                @click="saveok(cardItem)"
              />
               <q-btn
                flat
                color='red'
                label='整項刪除'
                icon='delete'
                class='btnd'
                @click="deleteok(cardItem, idx)"
              /></div>
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
      </q-form>
    </div>
  </div>
</template>
<script>
export default {
  // components: { Top }
  data () {
    return {
      img: [],
      title: '',
      lorem: '',
      price: '',
      cardItem: [],
      current: 1,
      title2: ''
    }
  },
  methods: {
    // titleok () {
    //   this.title = this.title2
    //   console.log(this.title2)
    //   console.log(this.title)
    // }
    saveok (cardItem, idx) {
      // console.log(this.cardItem[0].price)
      console.log(cardItem)
      console.log(cardItem.title)
      this.axios.patch(process.env.VUE_APP_API + '/products/' + cardItem._id, { title: cardItem.title, lorem: cardItem.lorem, price: cardItem.price })
        .then(res => {
          if (res.data.success) {
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '已儲存'
            })
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
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
    },
    deleteok (cardItem, idx) {
      this.axios.delete(process.env.VUE_APP_API + '/products/' + cardItem._id)
        .then(res => {
          if (res.data.success) {
            this.cardItem.splice(idx, 1)
            this.$swal({
              icon: 'success',
              title: '成功',
              text: '已刪除'
            })
          } else {
            this.$swal({
              icon: 'error',
              title: '錯誤',
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
          console.log(this.cardItem)
        })
    }
  },
  mounted () {
    this.axios
      .get(process.env.VUE_APP_API + '/products/')
      .then((res) => {
        if (res.data.success) {
          console.log(res.data.result)
          const cardItem = res.data.result.filter(function (item, index, array) {
            return item.category === 'others'
          })
          this.cardItem = cardItem
          console.log(cardItem)
          console.log(this.cardItem)
          const img = cardItem.map(function (item, index, array) {
            return item.image
          })
          console.log(img)
          for (let i = 0; i < this.cardItem.length; i++) {
            console.log(img[i])
            this.img.push(process.env.VUE_APP_API + '/products/file/' + img[i])
            console.log(this.img)
          }
          console.log(this.img)
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
.outside {
  width: 80vw;
  height: 100vh;
  /* background: aqua; */
}
.box {
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
  /* height: 290px; */
  max-width: 16.4%;
  height: 32%;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5px;
  /* background: chartreuse; */
}
.card-title {
  margin-top: 5px;
}
.card-lorem {
  display: block;
  flex-grow: 0.1;
  /* height: 30px; */
  /* background: darkblue; */
  margin-top: 3%;
}
.text-size {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 16px;
}
.btnc {
  width: 98%;
  /* border: 1px solid rgba(206, 205, 205, 0.8); */
  margin-top: -5%;
}
.btnd{
  width: 98%;
  margin-top: 4%;
  margin-left: 0%;
  border: 1px solid rgba(219, 25, 25, 0.8);
}
.btns{
  width: 98%;
  margin-top: 0%;
  margin-left: 0%;
  border: 1px solid rgba(101, 101, 102, 0.8);
}
.card-price {
  /* background: darkmagenta; */
  /* display: block; */
  /* height: 20px; */
  font-size: 20px;
  margin-top: 4%;
  color: darkslategray;
}
.card-price2 {
  display: block;
  color: #000;
  font-size: 10px;
  /* margin-left:  2px ; */
}
.q-card-actions {
  /* background: chartreuse; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.home:hover {
  color: rgb(81, 142, 145);
  /* text-decoration: underline;*/
}
.q-tab-sel:hover {
  /* background: darkcyan; */
  border: 1px solid #6a7735;
}
.q-tab-sel:active {
  border: 1px solid #6a7735;
}
.editstyle{
  size: 5px;
}
.q-icon{
  font-size: 1.715em;
}
@media (max-width: 599px) {
  .box{
    display: flex;
    flex-direction: column;
    /* background: chocolate; */
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
@media screen and (min-width: 600px) and (max-width: 1037px) {
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
  /* background: chartreuse; */
}
}
@media screen and (min-width: 1038px) and (max-width: 1110px) {
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
  /* background: chartreuse; */
}
}
@media screen and (min-width: 1111px) and (max-width: 1350px) {
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
  /* background: chartreuse; */
}
}
</style>
